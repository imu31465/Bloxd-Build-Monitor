# Changed — Bundle Modifications Report (Part 007 / 056)

- **Updated at**: `2026-11-26T01:26 JST`
- **Part**: `7 / 56` (**295** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 006](part-006.md) · [Part 008 →](part-008.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/210.js` (8104he.3820eae0 → fo1voe.f743fbcf · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/210.js` (45 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe)

#### 3. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L12-L13` → after: `L15-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L15-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L15-L156) · [Before (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L12-L13)

```diff
-       if ("undefined" === typeof BroadcastChannel) return null;
-       const QQ = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
+       return aM()('(()=>{class MM extends Error{}function rM(rM,iM){const OM=rM._malloc(iM);if(0===OM)throw new MM(`Draco: the decoder\'s heap refused ${iM} bytes`);return OM}function iM(MM){return{[MM.DT_FLOAT32]:[Float32Array,5126],[MM.DT_INT8]:[Int8Array,5120],[MM.DT_INT16]:[I … [truncated]
+     }
+     var nM = iM(83);
+     const QM = 1e3;
+     let zM = null,
+       LM = null;
+     const mM = [],
+       HM = [];
+     let hM = 0;
+     const JM = {
+         decodes: 0,
+         workersStarted: 0,
+         mostWorkers: 0
+       },
+       dM = function(MM, rM) {
+         const iM = MM ? Math.max(1, Math.min(Math.floor(.5 * MM), 4)) : 1;
+ ... (126 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L15-L20` → after: `L158-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L158-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L158-L346) · [Before (L15-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L15-L20)

```diff
-         const WQ = new BroadcastChannel(wQ.k);
-         WQ.postMessage({
-           stored: QQ
-         }), WQ.close()
-       } catch {
-         return null
+         return function(MM, rM) {
+           var iM, OM, SM, jM, aM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM;
+           const yM = new Map,
+             lM = iM => {
+               let OM = yM.get(iM);
+               if (!OM) {
+                 var SM;
+                 const jM = MM.bufferViews[iM],
+                   aM = null !== (SM = jM.byteOffset) && void 0 !== SM ? SM : 0;
+                 OM = {
+                   index: iM,
+                   bytes: rM.subarray(aM, aM + jM.byteLength),
+                   byteStride: jM.byteStride
+                 }, yM.set(iM, OM)
+               }
+               return OM
+ ... (173 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L26-L27` → after: `L359-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L359-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L359-L363) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L26-L27)

```diff
-       const WQ = "object" === typeof QQ && null !== QQ ? QQ.stored : null;
-       return "string" === typeof WQ ? WQ : null
+       const rM = MM.bufferView,
+         iM = 5125 === MM.componentType ? Uint32Array : Uint16Array,
+         OM = rM.bytes.buffer,
+         SM = rM.bytes.byteOffset + (MM.byteOffset || 0);
+       return SM % iM.BYTES_PER_ELEMENT !== 0 ? new iM(OM.slice(SM, SM + MM.count * iM.BYTES_PER_ELEMENT), 0) : new iM(OM, SM, MM.count)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L29-L47` → after: `L365-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L365-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L365-L375) · [Before (L29-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L29-L47)

```diff
-   },
-   34583: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ,
-       e: () => qQ,
-       f: () => TQ
-     });
-     var wQ = XQ(3523);
-     async function qQ(QQ, WQ, XQ) {
-       let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
-       const TQ = zQ(await QQ.getItem(wQ.f, WQ));
-       if (null === TQ || qQ()) return null;
-       const sQ = await QQ.getItem(wQ.g, WQ);
-       return qQ() ? null : (await async function(QQ) {
-         await Promise.all([QQ.removeItem(wQ.f), QQ.removeItem(wQ.g)])
-       }(QQ).catch(XQ), {
- ... (3 more removed lines; see GitHub link above)
+ 
+     function sM(MM, rM) {
+       if (MM.min && MM.max) return [new Float64Array(MM.min), new Float64Array(MM.max)];
+       const iM = rM.find((MM => {
+           let {
+             kind: rM
+           } = MM;
+           return "position" === rM
+         })),
+         OM = iM ? (0, eM.f)(iM, MM.count) : new Float32Array(0);
+       return (0, eM.n)(OM.length / 3, ((MM, rM) => OM[3 * MM + rM]))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L51-L53` → after: `L379-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L379-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L379-L438) · [Before (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L51-L53)

```diff
-       return (0, wQ.r)() ? Promise.resolve(null) : qQ(QQ, !1, (QQ => {
-         console.error("Error removing temporary texture pack: ", QQ)
-       }), wQ.r)
+       const rM = MM.attributes.map((MM => {
+           var rM, iM;
+           let {
+             kind: OM,
+             accessor: SM
+           } = MM;
+           const {
+             bufferView: jM,
+             numComponents: aM
+           } = SM;
+           if (!jM) {
+             return {
+               kind: OM,
+               data: pM(SM, (() => new Float32Array(aM * SM.count))),
+               offset: 0,
+               stride: 4 * aM,
+ ... (44 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L57-L59` → after: `L442-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L442-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L442-L443) · [Before (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L57-L59)

```diff
-       if ("object" !== typeof QQ || null === QQ) return null;
-       const WQ = QQ.metaData;
-       return "object" !== typeof WQ || null === WQ || "string" !== typeof WQ.id ? null : QQ
+       const rM = MM.lastIndexOf("/");
+       return rM < 0 ? MM : MM.substring(rM + 1)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L61-L62` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L445) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L61-L62)

```diff
-   },
-   51248: (QQ, WQ, XQ) => {
+ 
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L64` → after: `L447-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L447-L448) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L64)

```diff
-       return null === QQ.gameSource ? "player" : "customGame"
+       const rM = MM.lastIndexOf("/");
+       return rM < 0 ? "" : MM.substring(0, rM + 1)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L75` → after: `L452-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L452-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L452-L477) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L75)

```diff
-       return "" === QQ || "string" === typeof QQ && qQ.test(QQ)
+       return MM.name || `node${MM.index}`
+     }
+     const NM = {
+         rotation: [0, 1, 0, 0],
+         scale: [1, 1, -1]
+       },
+       AM = {
+         9728: 12,
+         9729: 2,
+         9984: 9,
+         9985: 11,
+         9986: 10
+       },
+       xM = {
+         9728: 1,
+         9729: 7,
+ ... (10 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L79-L89` → after: `L485-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L485-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L485-L487) · [Before (L79-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L79-L89)

```diff
-       return "object" === typeof QQ && null !== QQ && ("earth" === QQ.type || Object.entries(QQ).every((QQ => {
-         let [WQ, XQ] = QQ;
-         return "type" === WQ || TQ(XQ)
-       })))
-     }
-     const sQ = /(?:src|image|image-set|cross-fade)\(/i,
-       FQ = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
-       PQ = /url\(/gi,
-       gQ = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
-       JQ = new Set([...gQ.map((QQ => new URL(QQ).origin)), "https://fonts.gstatic.com"]),
-       rQ = new Set(["https://i.imgur.com/MEcjBFQ.png"]);
+       var rM;
+       return null !== (rM = FM[null !== MM && void 0 !== MM ? MM : 10497]) && void 0 !== rM ? rM : 1
+     }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L92-L110` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L490) · [Before (L92-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L92-L110)

```diff
-       var WQ, XQ;
-       if (QQ.includes("\\") || sQ.test(QQ)) return !0;
-       const wQ = [...QQ.matchAll(FQ)];
-       return wQ.length !== (null !== (WQ = null === (XQ = QQ.match(PQ)) || void 0 === XQ ? void 0 : XQ.length) && void 0 !== WQ ? WQ : 0) || !wQ.every((QQ => {
-         var WQ, XQ, wQ;
-         let {
-           groups: qQ
-         } = QQ;
-         return function(QQ) {
-           try {
-             return gQ.every((WQ => {
-               const XQ = new URL(QQ, WQ);
-               return "data:" === XQ.protocol || JQ.has(XQ.origin) || rQ.has(XQ.href)
-             }))
-           } catch {
-             return !1
- ... (3 more removed lines; see GitHub link above)
+       return 9728 === MM.minFilter || 9729 === MM.minFilter
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L114-L117` → after: `L494-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L494-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L494-L500) · [Before (L114-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L114-L117)

```diff
-       var WQ, XQ, wQ, qQ, sQ, FQ, PQ;
-       const gQ = [...Object.values(null !== (WQ = QQ.textureOverrides) && void 0 !== WQ ? WQ : {}), ...Object.values(null !== (XQ = QQ.modelOverrides) && void 0 !== XQ ? XQ : {})],
-         JQ = [...Object.values(null !== (wQ = null === (qQ = QQ.customCss) || void 0 === qQ ? void 0 : qQ.fontFaces) && void 0 !== wQ ? wQ : {}), ...Object.values(null !== (sQ = null === (FQ = QQ.customCss) || void 0 === FQ ? void 0 : FQ.classStyles) && void 0 !== sQ ? sQ : {})]. … [truncated]
-       return !gQ.every(TQ) || !Object.values(null !== (PQ = QQ.skyBoxes) && void 0 !== PQ ? PQ : {}).every(zQ) || JQ.some((QQ => "string" === typeof QQ && IQ(QQ)))
+       var rM, iM, OM;
+       const SM = Float64Array.from(null !== (rM = MM.scale) && void 0 !== rM ? rM : [1, 1, 1]);
+       return MM.hasCamera && (SM[0] = -1), {
+         translation: Float64Array.from(null !== (iM = MM.translation) && void 0 !== iM ? iM : [0, 0, 0]),
+         rotation: Float64Array.from(null !== (OM = MM.rotation) && void 0 !== OM ? OM : [0, 0, 0, 1]),
+         scale: SM
+       }
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L121-L132` → after: `L504-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L504-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L504-L619) · [Before (L121-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L121-L132)

```diff
-       if (null === QQ || "player" === WQ || !jQ(QQ)) return QQ;
-       const XQ = {
-         ...QQ
-       };
-       return QQ.textureOverrides && (XQ.textureOverrides = VQ(QQ.textureOverrides, TQ, "texture")), QQ.modelOverrides && (XQ.modelOverrides = VQ(QQ.modelOverrides, TQ, "model")), QQ.skyBoxes && (XQ.skyBoxes = VQ(QQ.skyBoxes, zQ, "sky")), QQ.customCss && (XQ.customCss = function(Q … [truncated]
-         const WQ = QQ => VQ(QQ, (QQ => "string" === typeof QQ && !IQ(QQ)), "CSS"),
-           {
-             fontFaces: XQ,
-             classStyles: wQ
-           } = yQ(QQ) ? QQ : {},
-           qQ = {};
-         for (const [TQ, zQ] of Object.entries(yQ(wQ) ? wQ : {})) qQ[TQ] = WQ(zQ);
+       let {
+         translation: iM,
+         rotation: OM,
+         scale: SM
+       } = MM;
+       const jM = new Float32Array(16);
+       return (0, CM.d)(SM, 0, OM, 0, iM, 0, jM), rM && (0, CM.j)(jM, rM, 0, jM), jM
+     }
+     class qM {
+       constructor(MM, rM, iM, OM) {
+         this.model = MM, this.decode = rM, this.fileInfo = iM, this.uniqueRootUrl = OM, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
+         const SM = new Set,
+           jM = (rM, iM) => {
+             const OM = MM.nodes[rM];
+             if (this.parents.has(OM)) throw new bM.l(`/nodes/${rM}: Invalid recursive node hierarchy`);
+             this.parents.set(OM, iM);
+ ... (100 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L134-L135` → after: `L621-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L621-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L621-L637) · [Before (L134-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L134-L135)

```diff
-           fontFaces: (Array.isArray(XQ) ? XQ : []).map(WQ),
-           classStyles: qQ
+           url: this.imageUrl(aM),
+           noMipmap: XM(jM),
+           invertY: !1,
+           samplingMode: vM(jM),
+           data: {
+             bytes: PM.bytes,
+             mimeType: nM,
+             label: QM,
+             context: `/textures/${OM}`
+           },
+           sets: {
+             wrapU: BM(jM.wrapS),
+             wrapV: BM(jM.wrapT),
+             ...zM,
+             coordinatesIndex: null !== (iM = null === SM || void 0 === SM ? void 0 : SM.texCoord) && void 0 !== iM ? iM : 0,
+             hasAlpha: rM
+ ... (1 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L137` → after: `L639-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L639-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L639-L682) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L137)

```diff
-       }(QQ.customCss)), XQ
+       }
+     }
+     async function TM(MM, rM, iM, OM, SM, jM) {
+       let aM = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
+       const PM = function(MM, rM, iM) {
+           return "string" !== typeof rM ? {
+             url: "",
+             rootUrl: MM,
+             name: iM()
+           } : rM ? rM.startsWith("data:") ? {
+             url: rM,
+             rootUrl: MM,
+             name: ""
+           } : MM ? {
+             url: MM + rM,
+             rootUrl: MM,
+ ... (28 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L141` → after: `L689-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L689-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L689-L694) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L141)

```diff
-       return "object" === typeof QQ && null !== QQ && !Array.isArray(QQ)
+       if (null === MM || void 0 === MM || !MM.min || !MM.max) return null;
+       const [rM, iM, OM] = MM.min, [SM, jM, aM] = MM.max, {
+         BoundingInfo: PM,
+         sh: nM
+       } = (0, VM.c)();
+       return new PM(new nM(rM, iM, OM), new nM(SM, jM, aM))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L144-L160` → after: `L697-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L697-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L697-L698) · [Before (L144-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L144-L160)

```diff
-     function VQ(QQ, WQ, XQ) {
-       const wQ = Object.entries(yQ(QQ) ? QQ : {}),
-         qQ = wQ.filter((QQ => {
-           let [, XQ] = QQ;
-           return !WQ(XQ)
-         }));
-       if (qQ.length > 0) {
-         const QQ = qQ.map((QQ => {
-           let [WQ] = QQ;
-           return WQ
-         }));
-         console.warn(`Ignoring a custom game texture pack's ${XQ} files that name another site: ${QQ.join(", ")}`)
-       }
-       return Object.fromEntries(wQ.filter((QQ => {
-         let [, XQ] = QQ;
-         return WQ(XQ)
- ... (1 more removed lines; see GitHub link above)
+     function ir(MM) {
+       (0, cM.f)(MM) || (MM.geometry && MM.geometry.useBoundingInfoFromGeometry ? MM._updateBoundingInfo() : MM.refreshBoundingInfo(!0, !0))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L184-L185` → after: `L701-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L701-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L701-L702) · [Before (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L184-L185)

```diff
-       constructor(QQ) {
-         this.host = QQ, this.ready = void 0, this.state = IQ, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks =  … [truncated]
+       constructor(MM, rM) {
+         this.YJ = MM, this.decode = rM, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L187-L190` → after: `L704-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L704-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L704-L706) · [Before (L187-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L187-L190)

```diff
-       readyWithin(QQ) {
-         return Promise.race([this.ready, new Promise((WQ => {
-           setTimeout(WQ, QQ)
-         }))])
+       viewBytes(MM) {
+         let rM = this.viewData.get(MM.index);
+         return rM || (rM = this.bufferData.then((() => MM.bytes)), this.viewData.set(MM.index, rM)), rM
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L192-L193` → after: `L708-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L708-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L708-L710) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L192-L193)

```diff
-       current() {
-         return this.state
+       viewBuffer(MM) {
+         let rM = this.viewBuffers.get(MM.index);
+         return rM || (rM = this.viewBytes(MM).then((MM => new((0, VM.c)().Vz)(this.YJ.ph(), MM, !1))), this.viewBuffers.set(MM.index, rM)), rM
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L195-L198` → after: `L712-L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L712-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L712-L720) · [Before (L195-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L195-L198)

```diff
-       playerState() {
-         return {
-           pack: this.playerPack,
-           gameSource: null
+       vertexBuffer(MM, rM) {
+         const {
+           kind: iM,
+           data: OM
+         } = rM, SM = `${MM.index}:${iM}`;
+         let jM = this.vertexBuffers.get(SM);
+         if (!jM) {
+           const aM = MM.bufferView;
+           jM = aM ? this.viewBuffer(aM).then((MM => this.layoutVertexBuffer(MM, rM))) : Promise.resolve(OM).then((MM => new((0, VM.c)().VertexBuffer)(this.YJ.ph(), MM, iM, !1))), this.vertexBuffers.set(SM, jM)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L201-L204` → after: `L724-L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L724-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L724-L734) · [Before (L201-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L201-L204)

```diff
-       onPlayerPackChange(QQ) {
-         return this.ownListeners.add(QQ), () => {
-           this.ownListeners.delete(QQ)
-         }
+       layoutVertexBuffer(MM, rM) {
+         let {
+           kind: iM,
+           offset: OM,
+           stride: SM,
+           components: jM,
+           glType: aM,
+           isNormalized: PM
+         } = rM;
+         const nM = this.YJ.ph();
+         return new((0, VM.c)().VertexBuffer)(nM, MM, iM, !1, void 0, SM, void 0, OM, jM, aM, PM, !0, void 0, !0)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L206-L207` → after: `L736-L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L736-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L736-L781) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L206-L207)

```diff
-       isUsingCustomGameTexturePack(QQ) {
-         return (0, JQ.g)(this.state, QQ)
+       load(MM, rM, iM) {
+         const OM = (0, cM.f)(iM),
+           SM = MM => {
+             OM || (iM._delayInfo = iM._delayInfo || [], -1 === iM._delayInfo.indexOf(MM) && iM._delayInfo.push(MM))
+           },
+           jM = rM.draco;
+         if (jM) {
+           for (const MM in jM.attributeIds) SM(MM);
+           let aM = this.dracoGeometry.get(jM.bufferView.index);
+           return aM || (aM = this.viewBytes(jM.bufferView).then((async () => {
+             let SM;
+             try {
+               SM = await uM(rM, this.decode)
+             } catch (nM) {
+               throw new bM.l(`${MM}: ${nM instanceof Error?nM.message:String(nM)}`)
+             }
+ ... (30 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L209-L210` → after: `L783-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L783-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L783-L802) · [Before (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L209-L210)

```diff
-       setGamePackConfirm(QQ) {
-         this.confirmGamePack = QQ
+     }
+     var Sr, jr = iM(38261),
+       ar = iM(38034),
+       Pr = iM(38878),
+       nr = iM(38158),
+       Qr = iM(38235),
+       zr = iM(3063),
+       Lr = iM(38205);
+ 
+     function mr(MM, rM) {
+       MM.metadata = MM.metadata || {};
+       const iM = MM._internalMetadata = MM._internalMetadata || {},
+         OM = iM.dD = iM.dD || {};
+       (OM.pointers = OM.pointers || []).push(rM)
+     }
+ 
+ ... (4 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L212-L216` → after: `L804-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L804-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L804-L821) · [Before (L212-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L212-L216)

```diff
-       subscribe(QQ) {
-         return this.listeners.set(QQ, null), this.ready.then((() => {
-           this.deliver(QQ)
-         })), () => {
-           this.listeners.delete(QQ)
+     }
+ 
+     function hr(MM, rM) {
+       rM.position = MM.translation ? ar.sh.FromArray(MM.translation) : ar.sh.Zero(), rM.rotationQuaternion = MM.rotation ? ar.Quaternion.FromArray(MM.rotation) : ar.Quaternion.Identity(), rM.UL = MM.scale ? ar.sh.FromArray(MM.scale) : ar.sh.One()
+     }
+     class Jr {
+       constructor(MM, rM) {
+         if (this.YJ = MM, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, rM) {
+           const rM = MM.ph(),
+             iM = MM.Rk.add((() => {
+               this.dispose()
+             })),
+             OM = rM.Rh.add((() => {
+               for (const MM of [...this.geometries, ...this.meshes, ...this.textures]) MM._rebuild()
+             }));
+           this.release = () => {
+ ... (2 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L219-L257` → after: `L824-L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L824-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L824-L834) · [Before (L219-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L219-L257)

```diff
-       async setPlayerPack(QQ) {
-         const WQ = yQ(QQ) ? null : QQ;
-         this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(WQ), this.change({
-           pack: WQ,
-           gameSource: null
-         }, !1);
-         const XQ = await this.storePlayerPack(WQ);
-         return XQ && this.announce(), XQ
-       }
-       async packForGame(QQ, WQ, XQ) {
-         await this.readyWithin(Math.max(0, (null !== XQ && void 0 !== XQ ? XQ : performance.now() + gQ.c) - performance.now()));
-         const qQ = ++this.picks,
-           TQ = (0, wQ.k)(QQ) ? (0, wQ.n)(QQ) : null;
-         if (null === TQ) return void this.usePlayerPack();
-         let zQ;
-         const sQ = function(QQ) {
- ... (23 more removed lines; see GitHub link above)
+       getNodes() {
+         return [...this.meshes, ...this.transformNodes]
+       }
+       addAllToScene() {
+         if (this.release) {
+           this.release(), this.release = null;
+           for (const MM of this.meshes) this.YJ.JOM(MM);
+           for (const MM of this.materials) this.YJ.addMaterial(MM);
+           for (const MM of this.geometries) this.YJ.addGeometry(MM);
+           for (const MM of this.transformNodes) this.YJ.addTransformNode(MM);
+           for (const MM of this.textures) this.YJ.addTexture(MM)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L259-L279` → after: `L836-L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L836-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L836-L841) · [Before (L259-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L259-L279)

```diff
-         if (this.zj || this.picks !== qQ) return;
-         null !== zQ && (0, PQ.j)(zQ.pack) && (this.host.warn(`the texture pack of ${TQ} names files on other sites: the player's own shows`, null), zQ = null);
-         const FQ = null === zQ || await this.confirmed(zQ.pack, TQ) ? null : zQ.key;
-         this.zj || this.picks !== qQ || (null !== FQ && (this.skippedKey = FQ, zQ = null), null === zQ ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
-           pack: zQ.pack,
-           gameSource: zQ.key
-         }, !0)))
-       }
-       endGamePack() {
-         this.picks++, this.usePlayerPack()
-       }
-       holdsOtherGamePack(QQ) {
-         return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(QQ)
-       }
-       async confirmed(QQ, WQ) {
-         const XQ = this.confirmGamePack;
- ... (5 more removed lines; see GitHub link above)
+       }
+       dispose() {
+         var MM;
+         for (const rM of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
+           for (const MM of rM.slice()) MM.dispose();
+           rM.length = 0
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L282-L287` → after: `L845-L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L845-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L845-L853) · [Before (L282-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L282-L287)

```diff
-       async readPlayerPack() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-         if (null !== QQ && this.ownAnnouncements.delete(QQ)) return;
-         await this.ready;
-         const WQ = this.ownChanges;
-         let XQ;
+     }
+     class dr {
+       constructor(MM, rM, iM, OM, SM, jM, aM) {
+         this.asset = MM, this.YJ = rM, this.tree = iM, this.geometryData = SM, this.materials = jM, this.lite = aM, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = OM ? iM : null
+       }
+       create(MM) {
+         if (this.lite) return MM();
+         const rM = this.YJ;
+         rM._blockEntityCollection = !!this.container;
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L289-L291` → after: `L855-L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L855-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L855-L858) · [Before (L289-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L289-L291)

```diff
-           XQ = await this.host.store.getItem(zQ.c, !0)
-         } catch (qQ) {
-           return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", qQ)
+           const rM = MM();
+           return this.container && (rM._parentContainer = this.container), rM
+         } finally {
+           rM._blockEntityCollection = !1
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L303-L304` → after: `L861-L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L861-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L861-L862) · [Before (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L303-L304)

```diff
-       dispose() {
-         this.zj = !0, this.listeners.clear()
+       node(MM, rM) {
+         return this.create((() => this.lite ? rM ? (0, Pr.e)(this.lite, MM) : (0, Pr.p)(this.lite, MM) : rM ? new((0, VM.c)().Mesh)(MM, this.YJ) : new((0, VM.c)().TransformNode)(MM, this.YJ)))
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L306-L323` → after: `L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L864) · [Before (L306-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L306-L323)

```diff
-       async readStored() {
-         const {
-           store: QQ,
-           warn: WQ
-         } = this.host;
-         await Promise.all([!1 === this.host.oneShot ? void 0 : (0, FQ.e)(QQ, !0, (QQ => {
-           WQ("the custom game's texture pack wasn't removed from storage", QQ)
-         })).then((QQ => {
-           this.takeOneShot(QQ)
-         }), (QQ => {
-           WQ("the custom game's texture pack didn't read: the player's own shows", QQ)
-         })), QQ.getItem(zQ.c, !0).then((QQ => {
-           this.takeStoredOwn(QQ)
-         }), (QQ => {
-           WQ("the stored texture pack didn't read: the default pack shows", QQ), this.takeStoredOwn(null)
-         }))]), this.update()
- ... (2 more removed lines; see GitHub link above)
+       async load() {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L325-L344` → after: `L866-L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L866-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L866-L868) · [Before (L325-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L325-L344)

```diff
-         null === QQ || this.zj || this.changes > 0 || this.picks > 0 || ((0, PQ.j)(QQ.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
-           pack: QQ.pack,
-           gameSource: null !== (WQ = QQ.source) && void 0 !== WQ ? WQ : ""
-         }))
-       }
-       takeStoredOwn(QQ) {
-         if (this.playerPicked || this.zj) return;
-         if (this.ownChanges++, this.setOwn(VQ(QQ)), this.onGamePack) return;
-         const WQ = {
-           pack: this.playerPack,
-           gameSource: null
-         };
-         0 === this.changes ? this.state = WQ : this.change(WQ, !1)
-       }
-       async update() {
-         const QQ = this.playerPack,
- ... (4 more removed lines; see GitHub link above)
+         this.asset.model.json.nodes && this.createRoot();
+         const rM = this.lite ? null : this.YJ,
+           iM = null !== (MM = null === rM || void 0 === rM ? void 0 : rM.blockMaterialDirtyMechanism) && void 0 !== MM && MM;
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L347-L349` → after: `L872-L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L872-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L872-L874) · [Before (L347-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L347-L349)

```diff
-           wQ = VQ(await this.host.fetchLatest(WQ))
-         } catch (TQ) {
-           return void this.host.warn(`texture pack ${WQ} didn't update to version ${XQ}`, TQ)
+           OM = this.loadScene()
+         } finally {
+           null === rM || void 0 === rM || rM._forceBlockMaterialDirtyMechanism(iM)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L351-L365` → after: `L876-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L876-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L876-L890) · [Before (L351-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L351-L365)

```diff
-         null === wQ || this.zj || this.playerPack !== QQ || (this.ownChanges++, this.setOwn(wQ), this.onGamePack || this.change({
-           pack: wQ,
-           gameSource: null
-         }, !1), await this.storePlayerPack(wQ) && this.announce())
-       }
-       announce() {
-         const QQ = (0, sQ.c)();
-         null !== QQ && this.ownAnnouncements.add(QQ)
-       }
-       setOwn(QQ) {
-         this.playerPack = QQ;
-         for (const XQ of [...this.ownListeners]) try {
-           XQ()
-         } catch (WQ) {
-           this.host.warn("a texture pack listener threw", WQ)
+         await OM;
+         const {
+           root: SM,
+           tree: jM
+         } = this;
+         SM && (SM.kR(!0), jM.meshes.push(SM), jM.rootNodes.push(SM));
+         for (const PM of this.asset.model.nodes) {
+           const MM = this.nodeObjects.get(PM.index);
+           MM && ["TransformNode", "LiteNode"].includes(MM.getClassName()) && jM.transformNodes.push(MM);
+           for (const rM of null !== (aM = this.nodePrimitives.get(PM.index)) && void 0 !== aM ? aM : []) {
+             var aM;
+             jM.meshes.push(rM);
+             const MM = rM.geometry;
+             MM && !jM.geometries.includes(MM) && jM.geometries.push(MM)
+           }
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L368-L372` → after: `L893-L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L893-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L893-L895) · [Before (L368-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L368-L372)

```diff
-       usePlayerPack() {
-         this.onGamePack && this.change({
-           pack: this.playerPack,
-           gameSource: null
-         }, !1)
+       createRoot() {
+         const MM = this.node("__root__", !0);
+         this.root = MM, MM.kR(!1), this.YJ.useRightHandedSystem || hr(NM, MM)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L374-L378` → after: `L897-L951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L897-L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L897-L951) · [Before (L374-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L374-L378)

```diff
-       async storePlayerPack(QQ) {
-         try {
-           return null === QQ ? (await this.host.store.removeItem(zQ.c), !0) : await this.host.store.setItem(zQ.c, QQ)
-         } catch (WQ) {
-           return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", WQ), !1
+       loadScene() {
+         const MM = [];
+         for (const rM of this.asset.model.rootNodes) MM.push(this.loadNode(this.asset.model.nodes[rM], (MM => {
+           MM.parent = this.root
+         })));
+         return MM.push(Promise.resolve()), Promise.all(MM).then((() => {}))
+       }
+       loadNode(MM, rM) {
+         const iM = `/nodes/${MM.index}`,
+           OM = [],
+           SM = SM => {
+             if (mr(SM, iM), hr(MM, SM), MM.hasCamera && !this.YJ.useRightHandedSystem) {
+               const {
+                 UL: MM
+               } = SM;
+               MM.set(-1, MM.y, MM.z)
+ ... (39 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L381-L384` → after: `L956-L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L956-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L956-L970) · [Before (L381-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L381-L384)

```diff
-       change(QQ, WQ) {
-         if (!this.zj) {
-           this.changes++, this.onGamePack = WQ, this.state = QQ;
-           for (const QQ of [...this.listeners.keys()]) this.deliver(QQ)
+       loadPrimitive(MM, rM, iM, OM) {
+         const SM = [],
+           jM = this.node(rM, !0);
+         if (jM.sideOrientation = this.YJ.useRightHandedSystem ? nr.c.CounterClockWiseSideOrientation : nr.c.ClockWiseSideOrientation, SM.push(this.geometryData.load(MM, iM, jM).then((MM => {
+             if ((0, cM.f)(jM)) {
+               var rM, iM;
+               const OM = MM;
+               jM.replaceModel(OM, Int32Array.of(0, null !== (rM = null === (iM = OM.indexData) || void 0 === iM ? void 0 : iM.length) && void 0 !== rM ? rM : OM.vertexCount, 0, OM.vertexCount))
+             } else this.create((() => (MM.applyToMesh(jM), MM)))
+           }))), this.materials) {
+           const MM = 0 === iM.mode ? nr.c.PointListDrawMode : nr.c.TriangleFillMode,
+             rM = null === iM.material ? null : this.asset.model.materials[iM.material];
+           SM.push(this.loadMaterial(rM, MM, (MM => {
+             jM.material = MM
+           })))
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L387-L393` → after: `L974-L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L974-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L974-L1006) · [Before (L387-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L387-L393)

```diff
-       deliver(QQ) {
-         if (!this.zj && this.listeners.has(QQ) && this.listeners.get(QQ) !== this.state) {
-           this.listeners.set(QQ, this.state);
-           try {
-             QQ(this.state)
-           } catch (WQ) {
-             this.host.warn("a texture pack listener threw", WQ)
+       loadMaterial(MM, rM, iM) {
+         var OM;
+         const SM = `${null!==(OM=null===MM||void 0===MM?void 0:MM.index)&&void 0!==OM?OM:"default"}:${rM}`;
+         let jM = this.materialData.get(SM);
+         return jM || (jM = this.createMaterial(MM, rM), this.materialData.set(SM, jM)), iM(jM.material), jM.promise
+       }
+       createMaterial(MM, rM) {
+         const iM = MM ? MM.name || `material${MM.index}` : "__GLTFLoader._default",
+           {
+             style: OM,
+             unlit: SM
+           } = this.materials;
+         let jM;
+         const aM = this.create((() => {
+           const aM = (0, Lr.d)({
+             name: iM,
+ ... (17 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L398-L410` → after: `L1016-L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L1016-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L1016-L1031) · [Before (L398-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L398-L410)

```diff
-     async function BQ(QQ, WQ, XQ) {
-       const wQ = (0, FQ.b)(await XQ.fetchPack(WQ));
-       if (null !== wQ) return {
-         pack: wQ,
-         key: WQ
-       };
-       const qQ = await XQ.packKey(QQ);
-       if (null === qQ) return null;
-       const TQ = (0, FQ.b)(await XQ.fetchPack(qQ));
-       if (null === TQ) throw new Error(`no texture pack at ${qQ}`);
-       return {
-         pack: TQ,
-         key: qQ
+ 
+     function yr() {
+       jr.h.dracoDecodes = JM.decodes, jr.h.dracoWorkersStarted = JM.workersStarted, jr.h.dracoMostWorkers = JM.mostWorkers
+     }
+     async function lr(MM, rM, iM, SM, jM) {
+       try {
+         return await async function(MM, rM, iM, SM, jM, aM) {
+           var PM;
+           let nM;
+           const QM = null === (PM = (0, zr.f)()) || void 0 === PM ? void 0 : PM.CL,
+             zM = null !== QM && void 0 !== QM && QM.MJ && rM === QM.Hk() ? QM : null,
+             LM = jM && !zM;
+           return await TM(MM, rM, iM, SM, OM.d, (MM => (nM = new Jr(rM, LM), new dr(MM, rM, nM, LM, new Or(rM, SM), aM, zM).load())), !jM), nM
+         }(MM, rM, iM, GM, SM, jM)
+       } finally {
+         yr()
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L413-L415` → after: `L1034-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L1034-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L1034-L1039) · [Before (L413-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L413-L415)

```diff
- 
-     function yQ(QQ) {
-       return null === QQ || QQ.metaData.id === qQ.c
+     async function Er(MM, rM, iM, SM) {
+       try {
+         return await TM(MM, rM, iM, GM, OM.d, (MM => SM(MM, new Or(rM, GM))))
+       } finally {
+         yr()
+       }
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L419-L420` → after: `L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L1054) · [Before (L419-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L419-L420)

```diff
-       const WQ = (0, FQ.b)(QQ);
-       return yQ(WQ) ? null : WQ
+       return (0, OM.isDiscordClient)() ? `https://${SM.e.discordDomain}/${MM.href}` : MM.href
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L422-L428` → after: `L1056-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L1056-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L1056-L1058) · [Before (L422-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L422-L428)

```diff
-     async function DQ(QQ) {
-       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TQ.c;
-       if (null === QQ.pack) return null;
-       const {
-         packAssets: wQ
-       } = await Promise.all([XQ.e(212), XQ.e(47)]).then((() => XQ(61761)));
-       return wQ(QQ, WQ)
+     const aM = {
+       scriptUrl: jM(new iM.U(iM(44167))),
+       wasmBinaryUrl: jM(new iM.U(iM(44169)))
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L430-L437` → after: `L1060-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L1060-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/210.js#L1060-L1082) · [Before (L430-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/210.js#L430-L437)

```diff
- 
-     function pQ(QQ) {
-       const WQ = (0, zQ.s)();
-       return null === WQ ? () => {} : (WQ.onmessage = WQ => {
-         QQ.readPlayerPack((0, sQ.d)(WQ.data))
-       }, () => {
-         WQ.close()
-       })
+   },
+   34814: MM => {
+     MM.exports = function(MM, rM, iM, OM) {
+       var SM = self || window;
+       try {
+         try {
+           var jM;
+           try {
+             jM = new SM.Blob([MM])
+           } catch (QM) {
+             (jM = new(SM.BlobBuilder || SM.WebKitBlobBuilder || SM.MozBlobBuilder || SM.MSBlobBuilder)).append(MM), jM = jM.getBlob()
+           }
+           var aM = SM.URL || SM.webkitURL,
+             PM = aM.createObjectURL(jM),
+             nM = new SM[rM](PM, iM);
+           return aM.revokeObjectURL(PM), nM
+ ... (7 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/211.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/211.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327)

#### 1. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/211.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/211.js#L4)

```diff
-   34589: (QQ, WQ, XQ) => {
+   44176: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L6-L9` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/211.js#L6) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/211.js#L6-L9)

```diff
-       packDisplayName: () => jQ,
-       packModelMessage: () => BQ,
-       packModelSummary: () => VQ,
-       refusedPackModels: () => yQ
+       default: () => jM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L11-L18` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/211.js#L8-L9) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/211.js#L11-L18)

```diff
-     var wQ = XQ(34591),
-       qQ = XQ(34596);
-     const TQ = "DRACO",
-       zQ = 0,
-       sQ = 1,
-       FQ = 0,
-       PQ = 1,
-       gQ = 32768;
+     var OM = iM(34814),
+       SM = iM.n(OM);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L20-L39` → after: `L11-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L11-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/211.js#L11-L17) · [Before (L20-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/211.js#L20-L39)

```diff
-     function JQ(QQ) {
-       const WQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
-       let XQ = 0;
-       const wQ = () => {
-           if (XQ >= QQ.byteLength) throw new RangeError("past the stream");
-           return QQ[XQ++]
-         },
-         qQ = () => {
-           if (XQ + 4 > QQ.byteLength) throw new RangeError("past the stream");
-           const wQ = WQ.getUint32(XQ, !0);
-           return XQ += 4, wQ
-         },
-         JQ = () => {
-           let QQ = 0;
-           for (let WQ = 0; WQ < 35; WQ += 7) {
-             const XQ = wQ();
- ... (4 more removed lines; see GitHub link above)
+     function jM() {
+       return SM()('/*! For license information please see fo1voe.procGen.worker.2cdf2472.worker.js.LICENSE.txt */\n(()=>{var MM={67:MM=>{const rM="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,iM=()=>rM.now(),OM=MM=>MM===1/0||(MM= … [truncated]
+     }
+   },
+   34814: MM => {
+     MM.exports = function(MM, rM, iM, OM) {
+       var SM = self || window;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L41-L79` → after: `L19-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L19-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/211.js#L19-L24) · [Before (L41-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/211.js#L41-L79)

```diff
-         for (let QQ = 0; QQ < TQ.length; QQ++)
-           if (wQ() !== TQ.charCodeAt(QQ)) return null;
-         const WQ = wQ(),
-           rQ = wQ(),
-           IQ = wQ(),
-           jQ = wQ(),
-           BQ = wQ() | wQ() << 8;
-         if (2 !== WQ) return null;
-         0 !== (BQ & gQ) && function(QQ, WQ, XQ) {
-           const wQ = () => {
-               WQ(XQ())
-             },
-             qQ = () => {
-               let XQ = 1,
-                 qQ = !0;
-               for (; XQ > 0;) {
- ... (23 more removed lines; see GitHub link above)
+         try {
+           var jM;
+           try {
+             jM = new SM.Blob([MM])
+           } catch (QM) {
+             (jM = new(SM.BlobBuilder || SM.WebKitBlobBuilder || SM.MozBlobBuilder || SM.MSBlobBuilder)).append(MM), jM = jM.getBlob()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L82-L90` → after: `L33-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L33-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/211.js#L33-L35) · [Before (L82-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/211.js#L82-L90)

```diff
-         if (jQ !== PQ) return null;
-         wQ(), rQ < 2 && JQ();
-         const VQ = JQ();
-         return {
-           faces: JQ(),
-           vertices: VQ
-         }
-       } catch {
-         return null
+       } catch (QM) {
+         if (!OM) throw Error("Inline worker is not supported");
+         return new SM[rM](OM, iM)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/212.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/212.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/212.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/212.js#L4-L8)

```diff
-   34591: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => AQ,
-       d: () => cQ,
-       h: () => iQ
+   44193: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       default: () => jM
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L10-L67` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/212.js#L8-L9) · [Before (L10-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/212.js#L10-L67)

```diff
-     var wQ = XQ(34596);
-     const qQ = {
-         fileBytes: 4194304,
-         vertices: 65535,
-         indices: 196608,
-         accessorElements: 196608,
-         primitives: 64,
-         nodes: 128,
-         meshes: 64,
-         materials: 8,
-         images: 8,
-         imageSide: 1024
-       },
-       TQ = {
-         items: 1024,
-         perFile: 1024,
- ... (42 more removed lines; see GitHub link above)
+     var OM = iM(34814),
+       SM = iM.n(OM);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L69-L395` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/212.js#L11-L12) · [Before (L69-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/212.js#L69-L395)

```diff
-     function yQ(QQ) {
-       return QQ.toLocaleString("en-US")
-     }
- 
-     function VQ(QQ, WQ, XQ) {
-       return QQ > WQ ? `has ${yQ(QQ)} ${XQ} (the limit is ${yQ(WQ)})` : null
-     }
- 
-     function DQ(QQ, WQ) {
-       return Number.isInteger(QQ) && QQ >= 0 && QQ < (null !== WQ && void 0 !== WQ ? WQ : 0)
-     }
- 
-     function pQ(QQ) {
-       return Number.isInteger(QQ) && QQ >= 0
-     }
- 
- ... (311 more removed lines; see GitHub link above)
+     function jM() {
+       return SM()('(()=>{var MM={18:(MM,rM,iM)=>{MM.exports=iM.p+"static/media/bloxd_wasm_bg.5656165110e66edd3713.wasm"},24:(MM,rM,iM)=>{MM.exports=iM.p+"static/media/bloxd_wasm_textures_bg.3e0bb5a054f9d6224a0d.wasm"},11:(MM,rM,iM)=>{MM.exports=iM.p+"static/media/zstdDecodeWorker … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L398-L530` → after: `L15-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/212.js#L15-L17) · [Before (L398-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/212.js#L398-L530)

```diff
-   34596: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => IQ,
-       d: () => rQ,
-       f: () => BQ,
-       h: () => TQ,
-       i: () => qQ,
-       k: () => jQ,
-       l: () => gQ,
-       o: () => JQ,
-       s: () => zQ,
-       u: () => PQ
-     });
-     var wQ = XQ(34604);
-     class qQ extends Error {
-       constructor(QQ) {
- ... (117 more removed lines; see GitHub link above)
+   34814: MM => {
+     MM.exports = function(MM, rM, iM, OM) {
+       var SM = self || window;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L532-L534` → after: `L19-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L19-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/212.js#L19-L35) · [Before (L532-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/212.js#L532-L534)

```diff
-         zQ = JSON.parse((new TextDecoder).decode(QQ.subarray(20, 20 + TQ)))
-       } catch {
-         return null
+         try {
+           var jM;
+           try {
+             jM = new SM.Blob([MM])
+           } catch (QM) {
+             (jM = new(SM.BlobBuilder || SM.WebKitBlobBuilder || SM.MozBlobBuilder || SM.MSBlobBuilder)).append(MM), jM = jM.getBlob()
+           }
+           var aM = SM.URL || SM.webkitURL,
+             PM = aM.createObjectURL(jM),
+             nM = new SM[rM](PM, iM);
+           return aM.revokeObjectURL(PM), nM
+         } catch (QM) {
+           return new SM[rM]("data:application/javascript,".concat(encodeURIComponent(MM)), iM)
+         }
+       } catch (QM) {
+         if (!OM) throw Error("Inline worker is not supported");
+ ... (1 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/213.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/213.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L4-L15` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/213.js#L4-L9) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/213.js#L4-L15)

```diff
-   34609: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       animatedBlockTextures: () => FQ,
-       armourAtlasUrl: () => zQ,
-       averageColors: () => PQ,
-       blockAtlasUrls: () => TQ,
-       blockAtlasWidth: () => wQ,
-       buildHash: () => JQ,
-       builtTextureIndexFingerprint: () => gQ,
-       imagesPerAtlas: () => qQ,
-       outputHash: () => rQ,
-       rotatedBlockTextures: () => sQ
+   37885: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => SM,
+       h: () => jM,
+       j: () => PM,
+       l: () => aM
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L17-L305` → after: `L11-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L11-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/213.js#L11-L34) · [Before (L17-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/213.js#L17-L305)

```diff
-     const wQ = 8,
-       qQ = [256, 256, 256, 256, 256, 256, 114],
-       TQ = [XQ(34616), XQ(34624), XQ(34630), XQ(34638), XQ(34645), XQ(34648), XQ(34656)],
-       zQ = XQ(34665),
-       sQ = {
-         "alloy_kiln_top[rot[1": XQ(34668),
-         "alloy_kiln_top[rot[2": XQ(34671),
-         "alloy_kiln_top[rot[3": XQ(34673),
-         "alloy_kiln_top[rot[4": XQ(34682),
-         "auto_bench_top[rot[1": XQ(34689),
-         "auto_bench_top[rot[2": XQ(34693),
-         "auto_bench_top[rot[3": XQ(34695),
-         "auto_bench_top[rot[4": XQ(34701),
-         "belt_tunnel_exit_top[rot[1": XQ(34703),
-         "belt_tunnel_exit_top[rot[2": XQ(34705),
-         "belt_tunnel_exit_top[rot[3": XQ(34712),
- ... (273 more removed lines; see GitHub link above)
+     var OM = iM(1845);
+     const SM = ".bloxdreplay",
+       jM = "application/octet-stream";
+ 
+     function aM() {
+       return `game-recording-${(arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date).toISOString()}${SM}`
+     }
+ 
+     function PM(MM) {
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aM();
+       return (0, OM.c)(new Blob([MM], {
+         type: jM
+       }), rM), rM
+     }
+   },
+   37864: (MM, rM, iM) => {
+ ... (8 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L308-L521` → after: `L60-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L60-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/213.js#L60-L148) · [Before (L308-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/213.js#L308-L521)

```diff
-         "Active Radar2": XQ(36131),
-         "Active Radar3": XQ(36137),
-         "Active Radar4": XQ(36144),
-         "Active Radar5": XQ(36148),
-         "Active Radar|meta|rot22": XQ(36131),
-         "Active Radar|meta|rot23": XQ(36137),
-         "Active Radar|meta|rot24": XQ(36144),
-         "Active Radar|meta|rot25": XQ(36148),
-         "Active Radar|meta|rot32": XQ(36131),
-         "Active Radar|meta|rot33": XQ(36137),
-         "Active Radar|meta|rot34": XQ(36144),
-         "Active Radar|meta|rot35": XQ(36148),
-         "Active Radar|meta|rot42": XQ(36131),
-         "Active Radar|meta|rot43": XQ(36137),
-         "Active Radar|meta|rot44": XQ(36144),
-         "Active Radar|meta|rot45": XQ(36148),
- ... (198 more removed lines; see GitHub link above)
+         recordingStarted: {
+           text: "Started recording",
+           type: "Success"
+         },
+         recordingStopped: {
+           text: "Stopped recording",
+           type: "Success"
+         },
+         recordingSaved: {
+           text: "Recording saved",
+           type: "Success"
+         },
+         clipSaved: {
+           text: "Clip saved",
+           type: "Success"
+         },
+ ... (73 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L523-L9830` → after: `L150-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L150-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/213.js#L150-L663) · [Before (L523-L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/213.js#L523-L9830)

```diff
-       PQ = {
-         Unloaded: [
-           [244, 0, 255],
-           [0, 0, 0]
-         ],
-         Dirt: [
-           [133, 98, 77],
-           [139, 102, 80],
-           [127, 92, 74]
-         ],
-         "Messy Dirt": [
-           [123, 87, 59],
-           [129, 90, 62],
-           [118, 81, 57]
-         ],
-         "Grass Block": [
- ... (9292 more removed lines; see GitHub link above)
+       PM = new Set(Object.values(aM).filter((MM => "Error" === MM.type)).map((MM => MM.text)));
+ 
+     function nM(MM) {
+       return MM instanceof Error && PM.has(MM.message) ? MM.message : void 0
+     }
+ 
+     function QM(MM) {
+       var rM;
+       const iM = null !== (rM = MM.timeoutMs) && void 0 !== rM ? rM : "Error" === MM.type ? SM : jM;
+       OM.i.Tz("showBottomMessage", {
+         message: MM.text,
+         timeoutLength: iM,
+         type: MM.type
+       })
+     }
+   },
+ ... (498 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L9832-L10902` → after: `L665-L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L665-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/213.js#L665-L896) · [Before (L9832-L10902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/213.js#L9832-L10902)

```diff
-       gQ = "32451195",
-       JQ = "857e8a51f758ec900f900490f2c463bd799d911dd2b4a294f03152ce7b99b1c2",
-       rQ = "a9a816420ddd2b17c123be56bc925a7a61f103d3c9f40c3e9562e30426c1f138"
-   },
-   36131: QQ => {
-     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFElEQVR42tWVsQrCQAyG+ziCqBR9J8FNF0FxFJ0ddHEsjoKbm+DsO1W+QsIlUlu5Q3RISf/+10v+JHfZbLEuscl0aUzwjMfpMSo3l3453ncqwwerCLABVkXPGBjfKgKrPAEsEYFAwsDCgDWLxjQbCfxyXnRVB3ww1QHA … [truncated]
-   },
-   36137: QQ => {
-     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDElEQVR42q1VvQrCMBDu4wiiUvSdBDddBMVRdHbQxbE4Cm5ugrPvFPkqF+7Say7EDNeQy0e/n6NptdrsHWqx3IqifoXH/DwQdXiM3e0z+wGARmPXjEShh7MWAHQIwJvSAVEKU2SSTROwbobta4mC9j4HNI73iTs9ay8S … [truncated]
-   },
-   36144: QQ => {
-     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFElEQVR42tVVMQrCQBDMcwRRCfonwU4bQbEUrS20sQyWgp2dYO2fInMwy+4aL4YcosUcd5shmZ1MNtlssS6ByXRpwHqGZbzvlJtLvzw9RgHYoxYIYOOwKnoGqOFaIgKe6QmoBQKEaGFasHRR22YtYV50A3BrgGfxAcXt … [truncated]
-   },
-   36148: QQ => {
-     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDUlEQVR42q1VuwrCQBDM5wiiEvSfBDttBMVStLbQxjJYCnZ2grX/dDIHc9x7w+WKTcjusDszS+6aze6oEKv13gnmGzwev4U6vaZqeR05oQFAo3joJk4gh5oGAO0D0LU/IDtCJNlLpghA+203Nq35bXzAB8ld3q06P2c6 … [truncated]
-   },
- ... (1055 more removed lines; see GitHub link above)
+       nQ: {
+         numLines: 1,
+         charsPerLine: 19,
+         uiFontSize: 1.95
+       },
+       nameTag: {
+         numLines: 1,
+         charsPerLine: 13,
+         uiFontSize: 4.6
+       }
+     };
+ 
+     function lM(MM, rM) {
+       const {
+         numLines: iM,
+         charsPerLine: OM
+ ... (216 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/214.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/214.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25)

#### 1. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L4-L6)

```diff
-   36536: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       WasmTextureWorker: () => DQ
+   40148: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => PM,
+       e: () => jM
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L8-L11` → after: `L9-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L9-L14) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L8-L11)

```diff
-     var wQ = XQ(651),
-       qQ = XQ(3465),
-       TQ = XQ(36540),
-       zQ = XQ.n(TQ);
+     var OM = iM(4443);
+     let SM = null;
+ 
+     function jM(MM) {
+       return null !== SM && MM === SM
+     }
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L14` → after: `L17-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L17-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L17-L64) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L14)

```diff
-       return zQ()('(()=>{var QQ={d:(WQ,XQ)=>{for(var wQ in XQ)QQ.o(XQ,wQ)&&!QQ.o(WQ,wQ)&&Object.defineProperty(WQ,wQ,{enumerable:!0,get:XQ[wQ]})},o:(QQ,WQ)=>Object.prototype.hasOwnProperty.call(QQ,WQ),r:QQ=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q … [truncated]
+       this.uB = !1, this.stopPropagation = !1, this.pB = !1, this.disabled = !1
+     }
+     class PM {
+       constructor(MM, rM) {
+         this.version = "0.7.0";
+         var iM = Object.assign({}, new aM, rM || {});
+         this.element = MM || document, this.uB = !!iM.uB, this.stopPropagation = !!iM.stopPropagation, this.pB = !!iM.pB, this.disabled = !!iM.disabled, this.filterEvents = (MM, rM) => !0, this.ignoreEvent = MM => !1, this.down = new OM.EventEmitter, this.up = new OM.EventEmitter … [truncated]
+           dx: 0,
+           dy: 0,
+           mrM: 0,
+           HrM: 0,
+           hrM: 0
+         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
+           lastX: 0,
+           lastY: 0,
+           currID: null
+ ... (32 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L23` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L68) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L23)

```diff
-       return "" === QQ ? [] : QQ.split("\0")
+       for (var rM in MM) MM[rM] = 0
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L27-L28` → after: `L72-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L72-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L72-L78) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L27-L28)

```diff
-       if ("" !== QQ)
-         for (const WQ of QQ.split("\n")) console.error(WQ)
+       window.addEventListener("keydown", dM.bind(null, MM, !0), !1), window.addEventListener("keyup", dM.bind(null, MM, !1), !1);
+       var rM = {
+         passive: !0
+       };
+       MM.element.addEventListener("touchstart", HM.bind(void 0, MM), {
+         passive: !1
+       }), MM.element.addEventListener("touchend", JM.bind(void 0, MM), rM), MM.element.addEventListener("mousedown", yM.bind(null, MM, !0), rM), window.document.addEventListener("mouseup", yM.bind(null, MM, !1), rM), MM.element.addEventListener("touchmove", lM.bind(null, MM), rM) … [truncated]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L32-L76` → after: `L85-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L85-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L85-L97) · [Before (L32-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L32-L76)

```diff
-       return async function(QQ, WQ) {
-         const XQ = Object.keys(QQ),
-           wQ = [],
-           qQ = new Map,
-           TQ = new Uint32Array(XQ.length);
-         for (const [zQ, sQ] of XQ.entries()) {
-           const {
-             url: WQ
-           } = QQ[sQ];
-           qQ.has(WQ) || (qQ.set(WQ, wQ.length), wQ.push(WQ)), TQ[zQ] = qQ.get(WQ)
-         }
-         return {
-           sources: await WQ(wQ),
-           names: XQ.join("\0"),
-           sourceOfName: TQ
-         }
- ... (29 more removed lines; see GitHub link above)
+       rM.preventDefault(), hM(rM)
+     }
+ 
+     function hM(MM) {
+       let rM = !1;
+       for (let iM = 0; iM < MM.touches.length; ++iM)
+         if (MM.touches[iM].identifier === mM) {
+           rM = !0;
+           break
+         } if (!rM) {
+         const rM = MM.changedTouches[0];
+         zM = rM.clientX, LM = rM.clientY, mM = rM.identifier
+       }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L80-L81` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L101) · [Before (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L80-L81)

```diff
-       const XQ = gQ.o.from(QQ, WQ ? gQ.m.Optional : gQ.m.Error);
-       return XQ.code !== gQ.m.Fetch && XQ.code !== gQ.m.Error && (0, PQ.g)(XQ.message), XQ
+       for (var iM = rM.changedTouches, OM = 0; OM < iM.length; ++OM) iM[OM].identifier === mM && (mM = null)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L84-L85` → after: `L104-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L104-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L104-L109) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L84-L85)

```diff
-     function VQ(QQ) {
-       return QQ.message ? new Error(`the texture worker failed: ${QQ.message}`) : new gQ.o(gQ.m.Load, "the texture worker failed to start")
+     function dM(MM, rM, iM) {
+       if (!MM.ignoreEvent(iM)) try {
+         bM(MM, iM), rM && iM.isTrusted && !iM.repeat && MM._keyStates[iM.code] && wM(MM, iM.code)
+       } finally {
+         tM(iM.code, rM, MM, iM)
+       }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L87-L91` → after: `L111-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L111-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L111-L126) · [Before (L87-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L87-L91)

```diff
-     class DQ {
-       constructor(QQ) {
-         this.worker = QQ, this.failure = void 0, this.abandonStep = null, QQ.addEventListener("error", (QQ => {
-           QQ.preventDefault(), this.failure ??= VQ(QQ)
-         }))
+ 
+     function yM(MM, rM, iM) {
+       if (!MM.ignoreEvent(iM)) try {
+         bM(MM, iM)
+       } finally {
+         ! function(MM, rM, iM) {
+           if ("pointerId" in iM)
+             if (rM) {
+               if (null !== MM._touches.currID) return;
+               MM._touches.currID = iM.pointerId
+             } else {
+               if (MM._touches.currID !== iM.pointerId) return;
+               MM._touches.currID = null
+             } var OM = "button" in iM ? iM.button + 1 : 1;
+           tM("Mouse" + OM, rM, MM, iM)
+         }(MM, rM, iM)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L93-L203` → after: `L128-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L128-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L128-L159) · [Before (L93-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L93-L203)

```diff
-       static async generateRequired(QQ, WQ, XQ, TQ) {
-         let zQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : gQ.c,
-           PQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
-         const rQ = (0, FQ.j)();
-         if (null !== rQ) throw yQ(new gQ.o(gQ.m.Load, rQ), !1);
-         let IQ;
-         const VQ = new AbortController;
-         try {
-           IQ = new DQ(function() {
-             try {
-               return new sQ
-             } catch (QQ) {
-               throw new gQ.o(gQ.m.Load, `the texture worker failed to start: ${(0,JQ.i)(QQ)}`)
-             }
-           }());
-           const rQ = (0, FQ.b)().catch((QQ => {
- ... (95 more removed lines; see GitHub link above)
+     }
+ 
+     function lM(MM, rM) {
+       var iM = rM.movementX || rM.mozMovementX || 0,
+         OM = rM.movementY || rM.mozMovementY || 0;
+       if (rM.touches && 0 === (iM | OM)) {
+         var SM = function(MM) {
+           hM(MM);
+           for (let rM = 0; rM < MM.changedTouches.length; ++rM)
+             if (MM.changedTouches[rM].identifier == mM) {
+               const iM = MM.changedTouches[rM],
+                 OM = [iM.clientX - zM, iM.clientY - LM];
+               return zM = iM.clientX, LM = iM.clientY, OM
+             } return console.error(`Did not find touch id ${mM}`), [0, 0]
+         }(rM);
+         iM = SM[0], OM = SM[1]
+ ... (16 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L205-L206` → after: `L161-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L161-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L161-L184) · [Before (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L205-L206)

```diff
-       async generateOptional() {
-         let QQ;
+       MM.oB.mrM += (rM.deltaX || 0) * iM, MM.oB.HrM += (rM.deltaY || 0) * iM, MM.oB.hrM += (rM.deltaZ || 0) * iM
+     }
+ 
+     function UM(MM, rM) {
+       if (!MM.pB) return rM.preventDefault(), !1
+     }
+     var GM = {
+       AltLeft: "altKey",
+       AltRight: "altKey",
+       ControlLeft: "ctrlKey",
+       ControlRight: "ctrlKey",
+       ShiftLeft: "shiftKey",
+       ShiftRight: "shiftKey",
+       MetaLeft: "metaKey",
+       MetaRight: "metaKey"
+     };
+ ... (8 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L208-L210` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L186) · [Before (L208-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L208-L210)

```diff
-           QQ = await this.request({
-             type: "optional"
-           }, [])
+           return window.self !== window.top
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L212-L214` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L188) · [Before (L212-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L212-L214)

```diff
-           throw yQ(WQ, !0)
-         } finally {
-           this.terminate()
+           return !0
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L216-L231` → after: `L190-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L190-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L190-L213) · [Before (L216-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L216-L231)

```diff
-         return jQ(QQ.warnings),
-           function(QQ) {
-             let {
-               blocks: WQ,
-               counts: XQ,
-               values: wQ
-             } = QQ;
-             const qQ = {};
-             let TQ = 0;
-             for (const [zQ, sQ] of IQ(WQ).entries()) {
-               const QQ = [];
-               for (let WQ = 0; WQ < XQ[zQ]; WQ++, TQ += 3) QQ.push([wQ[TQ], wQ[TQ + 1], wQ[TQ + 2]]);
-               qQ[sQ] = QQ
-             }
-             return qQ
-           }(QQ)
+       }() && (clearTimeout(MM._blurRelease), MM._blurRelease = setTimeout((function() {
+         if (!document.hasFocus())
+           for (var rM in MM._modifiersHeldThroughBlur = {}, MM._keyStates) MM._keyStates[rM] && !/^Mouse\d/.test(rM) && wM(MM, rM)
+       }), 0))
+     }
+ 
+     function bM(MM, rM) {
+       var iM = MM._modifiersHeldThroughBlur;
+       if (iM && rM.isTrusted && document.hasFocus())
+         for (var OM in iM) delete iM[OM], MM._keyStates[OM] && OM !== rM.code && (CM(rM, OM) || wM(MM, OM))
+     }
+ 
+     function wM(MM, rM) {
+       const iM = {
+           code: rM,
+           preventDefault: () => {},
+ ... (8 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L233-L235` → after: `L215-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L215-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L215-L261) · [Before (L233-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L233-L235)

```diff
-       terminate() {
-         var QQ;
-         this.worker.terminate(), null === (QQ = this.abandonStep) || void 0 === QQ || QQ.call(this)
+     }
+ 
+     function tM(MM, rM, iM, OM) {
+       var SM = iM._keyBindmap[MM];
+       SM && (gM(iM._keyStates[MM], rM) && (iM._keyStates[MM] = rM, SM.forEach((MM => {
+         (!iM.filterEvents || iM.filterEvents(OM, MM)) && function(MM, rM, iM, OM) {
+           var SM = rM ? iM.pressCount : iM.releaseCount;
+           SM[MM] = (SM[MM] || 0) + 1;
+           var jM = iM._bindPressCount[MM] || 0;
+           (jM += rM ? 1 : -1) < 0 && (jM = 0);
+           iM._bindPressCount[MM] = jM;
+           var aM = iM.state[MM];
+           if (gM(aM, jM)) {
+             iM.state[MM] = jM > 0;
+             var PM = rM ? iM.down : iM.up;
+             iM.disabled || PM.emit(MM, OM)
+ ... (31 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L237-L243` → after: `L263-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L263-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L263-L280) · [Before (L237-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L237-L243)

```diff
-       request(QQ, WQ, XQ) {
-         return new Promise(((wQ, qQ) => {
-           if (void 0 !== this.failure) return void qQ(this.failure);
-           let TQ = gQ.q.None,
-             zQ = 0,
-             sQ = null;
-           const FQ = () => {
+     }
+ 
+     function HM(MM) {
+       return LM.find((rM => null !== rM.source && rM.source === MM))
+     }
+ 
+     function hM(MM) {
+       clearTimeout(MM.timeout), MM.source = null, MM.direction = null, MM.writtenAngle = null, MM.mN && (MM.mN.style.rotate = "")
+     }
+     const JM = (0, OM.memo)((function() {
+       const [, MM] = (0, OM.useReducer)((MM => MM + 1), 0);
+       return (0, SM.d)("damagedByOtherPlayer", (rM => {
+         let {
+           xj: iM,
+           direction: OM
+         } = rM;
+ ... (2 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L245` → after: `L282-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L282-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L282-L401) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L245)

```diff
-             null === (QQ = sQ) || void 0 === QQ || QQ.stop(), this.abandonStep = null, this.worker.onmessage = null, this.worker.onerror = null, this.worker.onmessageerror = null
+             const iM = null !== (rM = HM(MM)) && void 0 !== rM ? rM : LM.find((MM => null === MM.source));
+             if (iM) return iM;
+             const OM = {
+               source: null,
+               direction: null,
+               mN: null,
+               timeout: void 0,
+               writtenAngle: null
+             };
+             return LM.push(OM), OM
+           }(SM);
+         clearTimeout(jM.timeout), jM.source = SM, jM.direction = OM, jM.timeout = setTimeout((() => {
+           hM(jM), MM()
+         }), 800), MM()
+       })), (0, jM.c)("kill", (rM => {
+         let {
+ ... (104 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L247-L267` → after: `L403-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L403-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L403-L440) · [Before (L247-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L247-L267)

```diff
-           this.abandonStep = () => {
-             FQ(), qQ(new Error("the texture worker was terminated"))
-           }, this.worker.onmessage = WQ => {
-             let {
-               data: PQ
-             } = WQ;
-             var JQ;
-             if ("progress" === PQ.type) return TQ = PQ.stage, zQ = PQ.wasmBytes, void(null === (JQ = sQ) || void 0 === JQ || JQ.restart(TQ === gQ.q.Generating ? gQ.e : gQ.i));
-             "sheet" === PQ.type && XQ ? XQ(PQ.sheet, PQ.pixels) : (FQ(), "failed" === PQ.type ? qQ(PQ.moduleLoad ? new gQ.o(gQ.m.Load, PQ.reason) : function(QQ, WQ) {
-               let {
-                 reason: XQ,
-                 stack: wQ
-               } = QQ;
-               const qQ = new Error(pQ(XQ, WQ));
-               void 0 !== wQ && (qQ.stack = wQ);
-               return qQ
- ... (5 more removed lines; see GitHub link above)
+           return {
+             update: (MM, SM, aM, PM) => {
+               MM.camera.hq !== jM && (MM.camera.hq = jM), OM = !0, rM = (0, HM.n)(iM, SM, aM, PM, performance.now())
+             },
+             release: () => {
+               OM = !1, rM = hM, iM.reset()
+             },
+             uninstall: MM => {
+               MM.camera.hq === jM && (MM.camera.hq = null)
+             }
+           }
+         })();
+         return {
+           update: (rM, iM, OM) => {
+             MM.update((0, zM.f)(), rM, iM, OM)
+           },
+ ... (22 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L269-L276` → after: `L442-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L442-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L442-L524) · [Before (L269-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L269-L276)

```diff
-           try {
-             this.worker.postMessage(QQ, WQ), sQ = (0, gQ.r)((() => {
-               FQ();
-               const WQ = new gQ.o("required" === QQ.type ? `${gQ.m.Stalled}${TQ}` : gQ.m.Optional, pQ("the texture worker stopped responding", zQ));
-               qQ(WQ)
-             }))
-           } catch (PQ) {
-             FQ(), qQ(PQ)
+           return {
+             bodies: () => (0, aM.e)(),
+             look: EM(),
+             move: (rM, iM) => {
+               const OM = (0, zM.f)(),
+                 SM = OM.hU.iiM();
+               if (MM.x = rM.x, MM.y = rM.y, MM.magnitude = rM.magnitude, MM.headingOffset = rM.headingOffset, MM.jumpHeld = rM.jumpHeld, rM.jumpPressed && (MM.jumpPressedSinceTick = !0), MM.running = rM.running, MM.sprintHeld = rM.sprintHeld, iM) {
+                 const rM = (0, JM.e)({
+                   ...iM,
+                   descending: OM.hU.nrM(OM.eD).shouldIgnoreCrouchingSpeedReduction(),
+                   canCrouch: !!OM.aU.canCrouch,
+                   toggled: lM(SM)
+                 });
+                 MM.crouchHeld = rM.crouchHeld, SM.padSneakToggled = rM.toggled, SM.crouchToggled = !1, (0, dM.g)(rM.toggled)
+               }
+               SM.gamepad = MM
+ ... (67 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L278` → after: `L526-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L526-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L526-L531) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L278)

```diff
-         }))
+         })()),
+         rM = (0, OM.c)(),
+         iM = null,
+         jM = null;
+       return () => {
+         MM(), rM(), null === iM || void 0 === iM || iM(), null === jM || void 0 === jM || jM()
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L282-L283` → after: `L553-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L553-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L553-L610) · [Before (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L282-L283)

```diff
-     function pQ(QQ, WQ) {
-       return WQ > 0 ? `${QQ}, its module's memory ${Math.round(WQ/2**20)} MiB` : QQ
+     function PM() {
+       return [...aM.values()].sort(((MM, rM) => {
+         var iM, OM;
+         return (null !== (iM = MM.order) && void 0 !== iM ? iM : 0) - (null !== (OM = rM.order) && void 0 !== OM ? OM : 0)
+       }))
+     }
+     let nM = null;
+ 
+     function QM(MM) {
+       nM = MM
+     }
+     let zM = !1;
+ 
+     function LM(MM) {
+       zM = !0;
+       try {
+ ... (42 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L286` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L613) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L286)

```diff
-   36559: (QQ, WQ, XQ) => {
+   37542: (MM, rM, iM) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L288` → after: `L615-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L615-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L615-L617) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L288)

```diff
-       d: () => wQ,
+       A: () => HM,
+       C: () => zM,
+       e: () => PM,
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L290-L291` → after: `L619-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L619-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L619-L623) · [Before (L290-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L290-L291)

```diff
-       j: () => TQ,
-       n: () => zQ
+       k: () => dM,
+       n: () => yM,
+       p: () => mM,
+       t: () => QM,
+       w: () => JM
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L293-L294` → after: `L625-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L625-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L625-L649) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L293-L294)

```diff
-     const wQ = 1024,
-       qQ = 1024 * wQ;
+     var OM = iM(19),
+       SM = iM(22),
+       jM = iM(1313),
+       aM = iM(37544);
+     const PM = "clientGameUiChanged";
+     let nM = null;
+ 
+     function QM() {
+       return nM
+     }
+ 
+     function zM(MM, rM) {
+       const iM = {
+         content: MM,
+         menu: rM
+       };
+ ... (9 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L297` → after: `L652-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L652-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L652-L675) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L297)

```diff
-       return 2 ** Math.floor(Math.log2(Math.max(1, QQ / qQ)))
+       return LM = MM, () => {
+         LM === MM && (LM = null)
+       }
+     }
+     let hM = !1;
+ 
+     function JM() {
+       const MM = OM.d.get("openInGameMenuName");
+       "clientGame" !== MM && (hM = "inventory" === MM), (0, aM.m)() || (0, aM.i)(), (0, jM.z)(jM.e), OM.d.set({
+         openInGameMenuName: "clientGame",
+         openEverythingMenuName: null
+       })
+     }
+ 
+     function dM() {
+       EM(!1)
+ ... (8 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L301` → after: `L679-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L679-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L679-L681) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L301)

```diff
-       return (QQ / qQ).toFixed(1)
+       "clientGame" === OM.d.get("openInGameMenuName") && OM.d.set({
+         openInGameMenuName: MM ? "inventory" : null
+       }), MM || (0, aM.i)(), hM = !1
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L304-L325` → after: `L684-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L684-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/214.js#L684-L700) · [Before (L304-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/214.js#L304-L325)

```diff
-   36540: QQ => {
-     QQ.exports = function(QQ, WQ, XQ, wQ) {
-       var qQ = self || window;
-       try {
-         try {
-           var TQ;
-           try {
-             TQ = new qQ.Blob([QQ])
-           } catch (PQ) {
-             (TQ = new(qQ.BlobBuilder || qQ.WebKitBlobBuilder || qQ.MozBlobBuilder || qQ.MSBlobBuilder)).append(QQ), TQ = TQ.getBlob()
-           }
-           var zQ = qQ.URL || qQ.webkitURL,
-             sQ = zQ.createObjectURL(TQ),
-             FQ = new qQ[WQ](sQ, XQ);
-           return zQ.revokeObjectURL(sQ), FQ
-         } catch (PQ) {
- ... (6 more removed lines; see GitHub link above)
+   37440: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => nM
+     });
+     var OM = iM(313),
+       SM = iM(19),
+       jM = iM(34822),
+       aM = iM(1717),
+       PM = iM(2093);
+ 
+     function nM(MM, rM) {
+       var iM, nM, QM;
+       if (!SM.d.get("isKeydownEnabled") || MM.repeat) return;
+       const zM = MM.code;
+       "Escape" === MM.key ? (0, aM.k)(MM) : null !== (iM = PM.v.OpenSettings) && void 0 !== iM && iM.includes(zM) ? (0, aM.B)(MM, OM.m.SETTINGS) : null !== (nM = PM.v.OpenCharacterCustomization) && void 0 !== nM && nM.includes(zM) ? (0, jM.b)() || (0, aM.B)(MM, OM.m.CUSTOMISATION … [truncated]
+         showDebugOverlay: !SM.d.get("showDebugOverlay")
+ ... (1 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/215.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/215.js` (81 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166)

#### 1. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L4-L7` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L4-L7) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L4-L7)

```diff
-   41732: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       loadGlbAsset: () => pW,
-       loadGlbTree: () => DW
+   34852: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => UQ,
+       i: () => IH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L9-L12` → after: `L9-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L9-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L9-L131) · [Before (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L9-L12)

```diff
-     var wQ = XQ(38191),
-       qQ = XQ(41740),
-       TQ = XQ(36540),
-       zQ = XQ.n(TQ);
+     const OM = "0.9.4",
+       SM = {
+         DEBUG: !1,
+         LIB_VERSION: "1.438.7",
+         LIB_NAME: "web",
+         JS_SDK_VERSION: OM
+       };
+     var jM = SM;
+     const aM = "$early_access_features",
+       PM = "$active_feature_flags",
+       nM = "$feature_flag_details",
+       QM = "$feature_flag_errors",
+       zM = "$feature_flag_evaluated_at",
+       LM = "$feature_flag_request_id",
+       mM = "$minimal_flag_called_events",
+       HM = "$enabled_feature_flags",
+ ... (107 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L14-L27` → after: `L133-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L133-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L133-L137) · [Before (L14-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L14-L27)

```diff
-     function sQ() {
-       return zQ()('(()=>{class QQ extends Error{}function WQ(WQ,XQ){const wQ=WQ._malloc(XQ);if(0===wQ)throw new QQ(`Draco: the decoder\'s heap refused ${XQ} bytes`);return wQ}function XQ(QQ){return{[QQ.DT_FLOAT32]:[Float32Array,5126],[QQ.DT_INT8]:[Int8Array,5120],[QQ.DT_INT16]:[I … [truncated]
-     }
-     var FQ = XQ(105);
-     const PQ = 1e3;
-     let gQ = null,
-       JQ = null;
-     const rQ = [],
-       IQ = [];
-     let jQ = 0;
-     const BQ = {
-         decodes: 0,
-         workersStarted: 0,
-         mostWorkers: 0
+     function mi(MM, rM) {
+       return -1 !== MM.indexOf(rM)
+     }
+     const Hi = function(MM) {
+         return MM.trim()
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L29-L32` → after: `L139-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L139-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L139-L141) · [Before (L29-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L29-L32)

```diff
-       yQ = function(QQ, WQ) {
-         const XQ = QQ ? Math.max(1, Math.min(Math.floor(.5 * QQ), 4)) : 1;
-         return WQ ? Math.min(XQ, 2) : XQ
-       }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, FQ.isMobile)());
+       Ji = function(MM) {
+         return MM.replace(/^\$/, "")
+       };
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L34-L59` → after: `L143-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L143-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L143-L152) · [Before (L34-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L34-L59)

```diff
-     function VQ() {
-       if (!gQ) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
-       const {
-         scriptUrl: QQ,
-         wasmBinaryUrl: WQ
-       } = gQ;
-       return JQ ??= fetch(WQ).then((QQ => {
-         if (!QQ.ok) throw new Error(`Draco: fetching ${WQ} failed: ${QQ.status}`);
-         return QQ.arrayBuffer()
-       })), JQ.catch((() => {
-         JQ = null
-       })), BQ.workersStarted++, JQ.then((WQ => new Promise(((XQ, wQ) => {
-         const qQ = new sQ;
-         qQ.onerror = QQ => {
-           qQ.onmessage = null, qQ.onerror = null, qQ.terminate(), wQ(new Error("Draco: the decode worker failed to start" + (QQ.message ? `: ${QQ.message}` : " (its script did not load)")))
-         }, qQ.onmessage = QQ => {
- ... (10 more removed lines; see GitHub link above)
+     function di(MM) {
+       var rM;
+       const iM = [];
+       return null !== (rM = JSON.stringify(MM, (function(MM, rM) {
+         if ("bigint" == typeof rM) return rM.toString();
+         if ("function" != typeof rM && "symbol" != typeof rM) {
+           if (rM instanceof Error) return {
+             name: rM.name,
+             message: rM.message,
+             stack: rM.stack
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L61-L62` → after: `L154-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L154-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L154-L161) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L61-L62)

```diff
-         qQ.postMessage(zQ, [TQ])
-       }))))
+           if (rM && "object" == typeof rM) {
+             for (; iM.length > 0 && iM[iM.length - 1] !== this;) iM.pop();
+             if (iM.includes(rM)) return "[Circular]";
+             iM.push(rM)
+           }
+           return rM
+         }
+       }))) && void 0 !== rM ? rM : "null"
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L66-L68` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L191) · [Before (L66-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L66-L68)

```diff
-       const WQ = rQ.indexOf(QQ); - 1 !== WQ && rQ.splice(WQ, 1);
-       const XQ = IQ.shift();
-       XQ && GQ(XQ)
+       return null === MM || "object" != typeof MM
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L72-L107` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L195) · [Before (L72-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L72-L107)

```diff
-       QQ.busy = !0, QQ.releaseTimer && (clearTimeout(QQ.releaseTimer), QQ.releaseTimer = null);
-       QQ.worker.then((XQ => {
-         const wQ = jQ++;
-         XQ.onmessage = qQ => {
-           let {
-             data: TQ
-           } = qQ;
-           if (("decoded" === TQ.id || "decodeError" === TQ.id) && TQ.seq === wQ) {
-             if (XQ.onmessage = null, XQ.onerror = null, "decoded" === TQ.id) return BQ.decodes++, WQ.resolve({
-               indices: TQ.indices,
-               attributes: TQ.attributes,
-               totalVertices: TQ.totalVertices
-             }), void(() => {
-               const WQ = IQ.shift();
-               WQ ? pQ(QQ, WQ) : (QQ.busy = !1, QQ.releaseTimer = setTimeout((() => {
-                 const WQ = rQ.indexOf(QQ); - 1 !== WQ && rQ.splice(WQ, 1), QQ.worker.then((QQ => {
- ... (20 more removed lines; see GitHub link above)
+       return {}.toString.call(MM) === `[object ${rM}]`
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L111-L122` → after: `L199-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L199-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L199-L207) · [Before (L111-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L111-L122)

```diff
-       const WQ = rQ.find((QQ => !QQ.busy));
-       if (WQ) pQ(WQ, QQ);
-       else {
-         if (rQ.length < yQ) {
-           const WQ = {
-             worker: VQ(),
-             busy: !0,
-             releaseTimer: null
-           };
-           return rQ.push(WQ), BQ.mostWorkers = Math.max(BQ.mostWorkers, rQ.length), void pQ(WQ, QQ)
-         }
-         IQ.push(QQ)
+       switch ({}.toString.call(MM)) {
+         case "[object Error]":
+         case "[object Exception]":
+         case "[object DOMException]":
+         case "[object DOMError]":
+         case "[object WebAssembly.Exception]":
+           return !0;
+         default:
+           return Ni(MM, Error)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L126-L135` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L211-L212) · [Before (L126-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L126-L135)

```diff
-     function UQ(QQ, WQ, XQ) {
-       return new Promise(((wQ, qQ) => {
-         GQ({
-           data: new Int8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength).slice(),
-           attributeIds: WQ,
-           expected: XQ,
-           resolve: wQ,
-           reject: qQ
-         })
-       }))
+     function Yi(MM) {
+       return "u" > typeof Event && Ni(MM, Event)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L149-L156` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L215) · [Before (L149-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L149-L156)

```diff
-     function lQ(QQ) {
-       const WQ = (0, HQ.h)(QQ.byteLength);
-       if (WQ) throw new dQ.i(WQ);
-       const {
-         json: XQ,
-         bin: wQ
-       } = (0, dQ.u)(QQ), qQ = (0, HQ.d)(XQ, wQ);
-       if (qQ) throw new dQ.i(qQ);
+     function Ni(MM, rM) {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L158-L323` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L217) · [Before (L158-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L158-L323)

```diff
-         return function(QQ, WQ) {
-           var XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ;
-           const VQ = new Map,
-             DQ = XQ => {
-               let wQ = VQ.get(XQ);
-               if (!wQ) {
-                 var qQ;
-                 const TQ = QQ.bufferViews[XQ],
-                   zQ = null !== (qQ = TQ.byteOffset) && void 0 !== qQ ? qQ : 0;
-                 wQ = {
-                   index: XQ,
-                   bytes: WQ.subarray(zQ, zQ + TQ.byteLength),
-                   byteStride: TQ.byteStride
-                 }, VQ.set(XQ, wQ)
-               }
-               return wQ
- ... (150 more removed lines; see GitHub link above)
+         return MM instanceof rM
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L325` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L219) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L325)

```diff
-         throw TQ instanceof dQ.h ? TQ : new dQ.h(`reading the GLB failed: ${TQ instanceof Error?TQ.message:String(TQ)}`)
+         return !1
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L328-L332` → after: `L222-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L222-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L222-L226) · [Before (L328-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L328-L332)

```diff
-     async function hQ(QQ, WQ) {
-       var XQ, wQ;
-       const qQ = QQ.draco;
-       if (!qQ) throw new dQ.h("not a Draco primitive");
-       let TQ;
+     const Ai = [!0, "true", 1, "1", "yes"],
+       xi = MM => mi(Ai, MM),
+       vi = [!1, "false", 0, "0", "no"];
+ 
+     function Fi(MM, rM, iM, OM, SM, jM, aM) {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L334` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L228-L229) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L334)

```diff
-         TQ = await WQ(qQ.bufferView.bytes, qQ.attributeIds, qQ.expected)
+         var PM = MM[jM](aM),
+           nM = PM.value
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L336` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L231) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L336)

```diff
-         throw new dQ.h(`Draco decoding failed: ${PQ instanceof Error?PQ.message:String(PQ)}`)
+         return void iM(MM)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L338-L346` → after: `L233-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L233-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L233-L251) · [Before (L338-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L338-L346)

```diff
-       const {
-         vertices: zQ,
-         indices: sQ,
-         components: FQ
-       } = qQ.expected;
-       if (TQ.totalVertices !== zQ || (null !== (XQ = null === (wQ = TQ.indices) || void 0 === wQ ? void 0 : wQ.length) && void 0 !== XQ ? XQ : 0) !== sQ || TQ.attributes.some((QQ => QQ.size !== FQ[QQ.kind] || QQ.data.length !== zQ * QQ.size))) throw new dQ.h("Draco decoding gave  … [truncated]
-       for (const gQ of TQ.attributes) {
-         const QQ = qQ.normalized[gQ.kind];
-         void 0 !== QQ && (gQ.normalized = QQ)
+       PM.done ? rM(nM) : Promise.resolve(nM).then(OM, SM)
+     }
+ 
+     function Bi(MM) {
+       return function() {
+         var rM = this,
+           iM = arguments;
+         return new Promise((function(OM, SM) {
+           var jM = MM.apply(rM, iM);
+ 
+           function aM(MM) {
+             Fi(jM, OM, SM, aM, PM, "next", MM)
+           }
+ 
+           function PM(MM) {
+             Fi(jM, OM, SM, aM, PM, "throw", MM)
+ ... (3 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L350` → after: `L254-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L254-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L254-L272) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L350)

```diff
-     const iQ = new WeakMap;
+     const Xi = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatal … [truncated]
+       Ii = new Map,
+       Ki = function(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
+         if (!MM) return !1;
+         const iM = function(MM, rM) {
+             let iM = "";
+             for (let OM = 0; rM.length > OM; OM++) {
+               const MM = rM[OM];
+               iM += MM.length + ":" + MM
+             }
+             return MM.length + ":" + MM + "|" + rM.length + ":" + iM
+           }(MM, rM),
+           OM = Ii.get(iM);
+         if (void 0 !== OM) return OM;
+         const SM = MM.toLowerCase(),
+ ... (3 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L352-L355` → after: `L274-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L274-L275) · [Before (L352-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L352-L355)

```diff
-     function cQ(QQ, WQ) {
-       var XQ;
-       const wQ = null !== (XQ = iQ.get(QQ)) && void 0 !== XQ ? XQ : WQ(QQ);
-       return iQ.set(QQ, wQ), wQ
+     function qi(MM, rM, iM, OM, SM) {
+       return rM > iM && (OM.warn("min cannot be greater than max."), rM = iM), Ri(MM) ? MM > iM ? (OM.warn(" cannot be  greater than max: " + iM + ". Using max value instead."), iM) : rM > MM ? (OM.warn(" cannot be less than min: " + rM + ". Using min value instead."), rM) : MM : … [truncated]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L359-L363` → after: `L477-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L477-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L477-L486) · [Before (L359-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L359-L363)

```diff
-       const WQ = QQ.bufferView,
-         XQ = 5125 === QQ.componentType ? Uint32Array : Uint16Array,
-         wQ = WQ.bytes.buffer,
-         qQ = WQ.bytes.byteOffset + (QQ.byteOffset || 0);
-       return qQ % XQ.BYTES_PER_ELEMENT !== 0 ? new XQ(wQ.slice(qQ, qQ + QQ.count * XQ.BYTES_PER_ELEMENT), 0) : new XQ(wQ, qQ, QQ.count)
+       let rM = "";
+       for (let iM = 0; MM.length > iM; iM++) {
+         const OM = MM.charCodeAt(iM);
+         if (55296 > OM || OM > 56319) rM += 56320 > OM || OM > 57343 ? MM[iM] : "\ufffd";
+         else {
+           const OM = MM.charCodeAt(iM + 1);
+           56320 > OM || OM > 57343 ? rM += "\ufffd" : (rM += MM[iM] + MM[iM + 1], iM++)
+         }
+       }
+       return rM
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L367-L375` → after: `L490-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L490-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L490-L511) · [Before (L367-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L367-L375)

```diff
-       if (QQ.min && QQ.max) return [new Float64Array(QQ.min), new Float64Array(QQ.max)];
-       const XQ = WQ.find((QQ => {
-           let {
-             kind: WQ
-           } = QQ;
-           return "position" === WQ
-         })),
-         wQ = XQ ? (0, vQ.i)(XQ, QQ.count) : new Float32Array(0);
-       return (0, vQ.r)(wQ.length / 3, ((QQ, WQ) => wQ[3 * QQ + WQ]))
+       if (!rM) return MM;
+       let iM = [];
+       try {
+         iM = Object.keys(rM)
+       } catch (MM) {
+         iM = []
+       }
+       for (const OM of iM) {
+         let iM;
+         try {
+           iM = rM[OM]
+         } catch (MM) {
+           iM = SS
+         }
+         Object.defineProperty(MM, OM, {
+           value: iM,
+ ... (6 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L378-L414` → after: `L544-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L544-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L544-L546) · [Before (L378-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L378-L414)

```diff
-     function EQ(QQ) {
-       const WQ = QQ.attributes.map((QQ => {
-           var WQ, XQ;
-           let {
-             kind: wQ,
-             accessor: qQ
-           } = QQ;
-           const {
-             bufferView: TQ,
-             numComponents: zQ
-           } = qQ;
-           if (!TQ) {
-             return {
-               kind: wQ,
-               data: cQ(qQ, (() => new Float32Array(zQ * qQ.count))),
-               offset: 0,
- ... (21 more removed lines; see GitHub link above)
+     function zS(MM, rM) {
+       return "string" == typeof(iM = MM) && QS.test(iM) ? MM : rM();
+       var iM
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L419-L438` → after: `L550-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L550-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L550-L559) · [Before (L419-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L419-L438)

```diff
-       const XQ = WQ.attributes.map((QQ => {
-         let {
-           kind: WQ,
-           data: XQ,
-           size: wQ,
-           byteOffset: qQ,
-           byteStride: TQ,
-           normalized: zQ
-         } = QQ;
-         return {
-           kind: WQ,
-           data: XQ,
-           offset: qQ,
-           stride: TQ,
-           components: wQ,
-           glType: 5120 + CQ.indexOf(XQ.constructor),
- ... (4 more removed lines; see GitHub link above)
+       const iM = new Error(rM);
+       try {
+         Object.defineProperty(iM, "name", {
+           value: MM,
+           writable: !0,
+           enumerable: !0,
+           configurable: !0
+         })
+       } catch (MM) {}
+       return iM
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L442-L443` → after: `L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L563) · [Before (L442-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L442-L443)

```diff
-       const WQ = QQ.lastIndexOf("/");
-       return WQ < 0 ? QQ : QQ.substring(WQ + 1)
+       return MM ? MM.split("#")[0] : MM
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L447-L448` → after: `L567-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L567-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L567-L571) · [Before (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L447-L448)

```diff
-       const WQ = QQ.lastIndexOf("/");
-       return WQ < 0 ? "" : QQ.substring(0, WQ + 1)
+       try {
+         return MM()
+       } catch (MM) {
+         return
+       }
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L451-L452` → after: `L574-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L574-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L574-L576) · [Before (L451-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L451-L452)

```diff
-     function fQ(QQ) {
-       return QQ.name || `node${QQ.index}`
+     function hS(MM, rM) {
+       const iM = setTimeout(MM, rM);
+       return null != iM && iM.unref && (null == iM || iM.unref()), iM
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L474-L477` → after: `L579-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L579-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L579-L580) · [Before (L474-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L474-L477)

```diff
-     function eQ(QQ) {
-       var WQ, XQ, wQ, qQ;
-       const TQ = null !== (WQ = QQ.minFilter) && void 0 !== WQ ? WQ : 9987;
-       return 9729 === (null !== (XQ = QQ.magFilter) && void 0 !== XQ ? XQ : 9729) ? null !== (wQ = tQ[TQ]) && void 0 !== wQ ? wQ : 3 : null !== (qQ = oQ[TQ]) && void 0 !== qQ ? qQ : 4
+     function JS(MM, rM, iM) {
+       return dS.apply(this, arguments)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L484-L486` → after: `L583-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L583-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L583-L599) · [Before (L484-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L484-L486)

```diff
-     function xQ(QQ) {
-       var WQ;
-       return null !== (WQ = nQ[null !== QQ && void 0 !== QQ ? QQ : 10497]) && void 0 !== WQ ? WQ : 1
+     function dS() {
+       return (dS = Bi((function*(MM, rM, iM) {
+         let OM;
+         try {
+           return yield Promise.race([MM, new Promise(((MM, SM) => {
+             OM = hS((() => {
+               try {
+                 null == iM || iM(), MM()
+               } catch (MM) {
+                 SM(MM)
+               }
+             }), rM)
+           }))])
+         } finally {
+           clearTimeout(OM)
+         }
+ ... (1 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L490` → after: `L603-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L603-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L603-L607) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L490)

```diff
-       return 9728 === QQ.minFilter || 9729 === QQ.minFilter
+       return yS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
+         return typeof MM
+       } : function(MM) {
+         return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
+       }, yS(MM)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L493-L500` → after: `L610-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L610-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L610-L628) · [Before (L493-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L493-L500)

```diff
-     function NQ(QQ) {
-       var WQ, XQ, wQ;
-       const qQ = Float64Array.from(null !== (WQ = QQ.scale) && void 0 !== WQ ? WQ : [1, 1, 1]);
-       return QQ.hasCamera && (qQ[0] = -1), {
-         translation: Float64Array.from(null !== (XQ = QQ.translation) && void 0 !== XQ ? XQ : [0, 0, 0]),
-         rotation: Float64Array.from(null !== (wQ = QQ.rotation) && void 0 !== wQ ? wQ : [0, 0, 0, 1]),
-         scale: qQ
-       }
+     function lS(MM, rM, iM) {
+       return (rM = function(MM) {
+         var rM = function(MM) {
+           if ("object" != yS(MM) || !MM) return MM;
+           var rM = MM[Symbol.toPrimitive];
+           if (void 0 !== rM) {
+             var iM = rM.call(MM, "string");
+             if ("object" != yS(iM)) return iM;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return String(MM)
+         }(MM);
+         return "symbol" == yS(rM) ? rM : rM + ""
+       }(rM)) in MM ? Object.defineProperty(MM, rM, {
+         value: iM,
+         enumerable: !0,
+ ... (3 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L504-L539` → after: `L632-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L632-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L632-L648) · [Before (L504-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L504-L539)

```diff
-       let {
-         translation: XQ,
-         rotation: wQ,
-         scale: qQ
-       } = QQ;
-       const TQ = new Float32Array(16);
-       return (0, bQ.e)(qQ, 0, wQ, 0, XQ, 0, TQ), WQ && (0, bQ.n)(TQ, WQ, 0, TQ), TQ
-     }
-     class OQ {
-       constructor(QQ, WQ, XQ, wQ) {
-         this.model = QQ, this.decode = WQ, this.fileInfo = XQ, this.uniqueRootUrl = wQ, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
-         const qQ = new Set,
-           TQ = (WQ, XQ) => {
-             const wQ = QQ.nodes[WQ];
-             if (this.parents.has(wQ)) throw new dQ.h(`/nodes/${WQ}: Invalid recursive node hierarchy`);
-             this.parents.set(wQ, XQ);
- ... (20 more removed lines; see GitHub link above)
+       var iM = Object.keys(MM);
+       if (Object.getOwnPropertySymbols) {
+         var OM = Object.getOwnPropertySymbols(MM);
+         rM && (OM = OM.filter((function(rM) {
+           return Object.getOwnPropertyDescriptor(MM, rM).enumerable
+         }))), iM.push.apply(iM, OM)
+       }
+       return iM
+     }
+ 
+     function US(MM) {
+       for (var rM = 1; arguments.length > rM; rM++) {
+         var iM = null != arguments[rM] ? arguments[rM] : {};
+         rM % 2 ? ES(Object(iM), !0).forEach((function(rM) {
+           lS(MM, rM, iM[rM])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : ES(Object(iM)).forEach((function(rM) {
+ ... (1 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L542-L550` → after: `L651-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L651-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L651-L693) · [Before (L542-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L542-L550)

```diff
-       decodeGeometries() {
-         const QQ = new Map;
-         return Promise.all(this.primitives.map((async WQ => {
-           const {
-             primitive: XQ
-           } = WQ, wQ = XQ.draco;
-           let qQ = wQ ? QQ.get(wQ.bufferView.index) : Promise.resolve(EQ(XQ));
-           qQ || (qQ = hQ(XQ, this.decode).then((QQ => uQ(XQ, QQ))), QQ.set(wQ.bufferView.index, qQ)), WQ.geometry = await qQ
-         })))
+       return MM
+     }
+     let GS, CS, eS, bS;
+ 
+     function wS(MM) {
+       var rM;
+       const iM = globalThis._posthogChunkIds,
+         OM = globalThis._debugIds;
+       if (!iM && !OM) return;
+       const SM = iM ? Object.keys(iM) : [],
+         jM = OM ? Object.keys(OM) : [];
+       if (bS && tS(iM, SM, CS) && tS(OM, jM, eS)) return bS;
+       CS = iM ? US({}, iM) : void 0, eS = OM ? US({}, OM) : void 0, bS = {}, null !== (rM = GS) && void 0 !== rM || (GS = {});
+       const aM = (rM, iM) => {
+         for (const SM of rM) {
+           const rM = iM[SM];
+ ... (27 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L552-L554` → after: `L695-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L695-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L695-L707) · [Before (L552-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L552-L554)

```diff
-       parentOf(QQ) {
-         var WQ;
-         return null !== (WQ = this.parents.get(QQ)) && void 0 !== WQ ? WQ : null
+       buildFromUnknown(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         const iM = rM && rM.mechanism || {
+             handled: !0,
+             type: "generic"
+           },
+           OM = this.buildCoercingContext(iM, rM, 0).apply(MM),
+           SM = this.buildParsingContext(rM),
+           jM = this.parseStacktrace(OM, SM);
+         return {
+           $exception_list: this.convertToExceptionList(jM, iM),
+           $exception_level: "error"
+         }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L556-L561` → after: `L709-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L709-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L709-L722) · [Before (L556-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L556-L561)

```diff
-       meshesUnder(QQ) {
-         const WQ = this.model.nodes.filter((QQ => this.uses.has(QQ)));
-         for (const wQ of WQ) {
-           const WQ = this.uses.get(wQ),
-             XQ = WQ.find((WQ => WQ.name === QQ));
-           if (XQ) return 1 === WQ.length ? this.subtree(wQ) : this.own.get(wQ).includes(XQ) ? [XQ] : []
+       modifyFrames(MM) {
+         var rM = this;
+         return Bi((function*() {
+           for (const iM of MM) iM.stacktrace && iM.stacktrace.frames && Ui(iM.stacktrace.frames) && (iM.stacktrace.frames = yield rM.applyModifiers(iM.stacktrace.frames));
+           return MM
+         }))()
+       }
+       coerceFallback(MM) {
+         var rM;
+         return {
+           type: "Error",
+           value: "Unknown error",
+           stack: null === (rM = MM.syntheticException) || void 0 === rM ? void 0 : rM.stack,
+           synthetic: !0
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L566-L567` → after: `L725-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L725-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L725-L735) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L566-L567)

```diff
-       subtree(QQ) {
-         return [...this.own.get(QQ), ...QQ.children.flatMap((QQ => this.subtree(this.model.nodes[QQ])))]
+       parseStacktrace(MM, rM) {
+         var iM;
+         let OM, SM;
+         if (null != MM.cause && (OM = this.parseStacktrace(MM.cause, rM)), "" != MM.stack && null != MM.stack) try {
+           SM = this.applyChunkIds(this.stackParser(MM.stack, MM.synthetic ? rM.skipFirstLines : 0), rM.chunkIdMap)
+         } catch (MM) {}
+         return US(US({}, MM), {}, {
+           cause: OM,
+           stack: SM,
+           errors: null === (iM = MM.errors) || void 0 === iM ? void 0 : iM.map((MM => this.parseStacktrace(MM, rM)))
+         })
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L569-L575` → after: `L737-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L737-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L737-L738) · [Before (L569-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L569-L575)

```diff
-       worldMatrix(QQ, WQ, XQ) {
-         let wQ = ZQ(NQ(WQ ? SQ : {}), null);
-         const qQ = [];
-         for (let zQ = QQ.part ? QQ.node : this.parentOf(QQ.node); zQ; zQ = this.parentOf(zQ)) qQ.unshift(zQ);
-         for (const zQ of qQ) wQ = ZQ(NQ(zQ), wQ);
-         const TQ = NQ(QQ.part ? {} : QQ.node);
-         return void 0 !== XQ && TQ.scale.fill(XQ), ZQ(TQ, wQ)
+       applyChunkIds(MM, rM) {
+         return MM.map((MM => (MM.filename && rM && (MM.chunk_id = rM[MM.filename]), MM)))
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L577-L582` → after: `L740-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L740-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L740-L743) · [Before (L577-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L577-L582)

```diff
-       floats(QQ) {
-         const {
-           vertexAttributes: WQ,
-           vertexCount: XQ
-         } = QQ.geometry;
-         return new Map(WQ.map((QQ => [QQ.kind, (0, vQ.i)(QQ, XQ)])))
+       applyCoercers(MM, rM) {
+         for (const iM of this.coercers)
+           if (iM.match(MM)) return iM.coerce(MM, rM);
+         return this.coerceFallback(rM)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L584-L590` → after: `L745-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L745-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L745-L751) · [Before (L584-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L584-L590)

```diff
-       imageUrl(QQ) {
-         return function(QQ, WQ, XQ) {
-           let {
-             name: wQ
-           } = WQ;
-           return `data:${QQ}${wQ}#image${XQ}`
-         }(this.uniqueRootUrl, this.fileInfo, QQ)
+       applyModifiers(MM) {
+         var rM = this;
+         return Bi((function*() {
+           let iM = MM;
+           for (const MM of rM.modifiers) iM = yield MM(iM);
+           return iM
+         }))()
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L592` → after: `L753-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L753-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L753-L787) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L592)

```diff
-       textureDesc(QQ, WQ) {
+       convertToExceptionList(MM, rM) {
+         const iM = [],
+           OM = (MM, SM, jM) => {
+             var aM;
+             const PM = iM.length,
+               nM = void 0 === SM ? US(US({
+                 type: "string" == typeof rM.type && rM.type.length > 0 ? rM.type : "generic"
+               }, "boolean" == typeof rM.handled ? {
+                 handled: rM.handled
+               } : void 0 === rM.handled ? {
+                 handled: !0
+               } : {}), {}, {
+                 synthetic: "boolean" == typeof rM.synthetic ? rM.synthetic : MM.synthetic,
+                 exception_id: PM
+               }) : {
+                 type: "chained",
+ ... (19 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L621-L637` → after: `L790-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L790-L791) · [Before (L621-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L621-L637)

```diff
-           url: this.imageUrl(zQ),
-           noMipmap: YQ(TQ),
-           invertY: !1,
-           samplingMode: eQ(TQ),
-           data: {
-             bytes: sQ.bytes,
-             mimeType: FQ,
-             label: PQ,
-             context: `/textures/${wQ}`
-           },
-           sets: {
-             wrapU: xQ(TQ.wrapS),
-             wrapV: xQ(TQ.wrapT),
-             ...gQ,
-             coordinatesIndex: null !== (XQ = null === qQ || void 0 === qQ ? void 0 : qQ.texCoord) && void 0 !== XQ ? XQ : 0,
-             hasAlpha: WQ
- ... (1 more removed lines; see GitHub link above)
+           chunkIdMap: wS(this.stackParser),
+           skipFirstLines: null !== (rM = MM.skipFirstLines) && void 0 !== rM ? rM : 1
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L640-L663` → after: `L794-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L794-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L794-L806) · [Before (L640-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L640-L663)

```diff
-     }
-     async function KQ(QQ, WQ, XQ, wQ, qQ, TQ) {
-       let zQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
-       const sQ = function(QQ, WQ, XQ) {
-           return "string" !== typeof WQ ? {
-             url: "",
-             rootUrl: QQ,
-             name: XQ()
-           } : WQ ? WQ.startsWith("data:") ? {
-             url: WQ,
-             rootUrl: QQ,
-             name: ""
-           } : QQ ? {
-             url: QQ + WQ,
-             rootUrl: QQ,
-             name: WQ
- ... (8 more removed lines; see GitHub link above)
+       getAggregateErrors(MM) {
+         try {
+           if (fi(MM)) {
+             let iM = Object.getPrototypeOf(MM);
+             for (let OM = 0; iM && 100 > OM; OM++) {
+               var rM;
+               const OM = null === (rM = Object.getOwnPropertyDescriptor(iM, "constructor")) || void 0 === rM ? void 0 : rM.value;
+               if ("function" == typeof OM && "AggregateError" === OM.name) {
+                 const rM = MM.errors;
+                 return Ui(rM) ? rM : void 0
+               }
+               iM = Object.getPrototypeOf(iM)
+             }
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L665-L681` → after: `L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L808) · [Before (L665-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L665-L681)

```diff
-         }(XQ, QQ, qQ),
-         FQ = {};
-       WQ.addPendingData(FQ);
-       try {
-         const XQ = lQ(await async function(QQ, WQ) {
-             return "string" !== typeof WQ ? WQ : QQ.url.startsWith("data:") ? (0, dQ.l)(QQ.url) : await (0, dQ.o)(QQ.url)
-           }(sQ, QQ)),
-           FQ = new OQ(XQ, wQ, sQ, function(QQ, WQ) {
-             let {
-               rootUrl: XQ,
-               name: wQ
-             } = QQ;
-             return !XQ.startsWith("file:") && wQ ? XQ : `${XQ}${WQ()}/`
-           }(sQ, qQ));
-         return await TQ(FQ), WQ.importedMeshesFiles && (WQ.loadingPluginName = "vR", zQ && WQ.importedMeshesFiles.push(sQ.url)), FQ
-       } finally {
- ... (1 more removed lines; see GitHub link above)
+         } catch (MM) {}
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L683-L686` → after: `L810-L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L810-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L810-L889) · [Before (L683-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L683-L686)

```diff
-     }
-     var mQ = XQ(37855),
-       MQ = XQ(37720),
-       QW = XQ(38177);
+       buildCoercingContext(MM, rM) {
+         var iM = this;
+         let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           SM = 0,
+           jM = 0,
+           aM = !1;
+         const PM = new Set,
+           nM = [],
+           QM = {},
+           zM = function(MM, rM) {
+             let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+             const zM = LM(rM, OM),
+               mM = zM.apply;
+             if (zM.apply = rM => {
+                 nM.push(MM);
+                 try {
+ ... (64 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L689-L694` → after: `L892-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L892-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L892-L894) · [Before (L689-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L689-L694)

```diff
-       if (null === QQ || void 0 === QQ || !QQ.min || !QQ.max) return null;
-       const [WQ, XQ, wQ] = QQ.min, [qQ, TQ, zQ] = QQ.max, {
-         BoundingInfo: sQ,
-         vj: FQ
-       } = (0, mQ.d)();
-       return new sQ(new FQ(WQ, XQ, wQ), new FQ(qQ, TQ, zQ))
+       if (!MM || "<anonymous>" === MM) return !1;
+       const rM = uS.exec(MM);
+       return !rM || RS.includes(rM[1].toLowerCase())
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L697-L698` → after: `L897-L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L897-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L897-L904) · [Before (L697-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L697-L698)

```diff
-     function XW(QQ) {
-       (0, MQ.g)(QQ) || (QQ.geometry && QQ.geometry.useBoundingInfoFromGeometry ? QQ._updateBoundingInfo() : QQ.refreshBoundingInfo(!0, !0))
+     function WS(MM, rM, iM, OM, SM) {
+       const jM = {
+         platform: MM,
+         filename: rM,
+         function: "<anonymous>" === iM ? "?" : iM,
+         in_app: pS(rM)
+       };
+       return bi(OM) || (jM.lineno = OM), bi(SM) || (jM.colno = SM), jM
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L700-L720` → after: `L906-L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L906-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L906-L918) · [Before (L700-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L700-L720)

```diff
-     class wW {
-       constructor(QQ, WQ) {
-         this.cB = QQ, this.decode = WQ, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
-       }
-       viewBytes(QQ) {
-         let WQ = this.viewData.get(QQ.index);
-         return WQ || (WQ = this.bufferData.then((() => QQ.bytes)), this.viewData.set(QQ.index, WQ)), WQ
-       }
-       viewBuffer(QQ) {
-         let WQ = this.viewBuffers.get(QQ.index);
-         return WQ || (WQ = this.viewBytes(QQ).then((QQ => new((0, mQ.d)().Tj)(this.cB.Uj(), QQ, !1))), this.viewBuffers.set(QQ.index, WQ)), WQ
-       }
-       vertexBuffer(QQ, WQ) {
-         const {
-           kind: XQ,
-           data: wQ
- ... (5 more removed lines; see GitHub link above)
+     const sS = (MM, rM) => {
+         const iM = -1 !== MM.indexOf("safari-extension"),
+           OM = -1 !== MM.indexOf("safari-web-extension");
+         return iM || OM ? [-1 !== MM.indexOf("@") ? MM.split("@")[0] : "?", iM ? `safari-extension:${rM}` : `safari-web-extension:${rM}`] : [MM, rM]
+       },
+       DS = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
+       kS = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
+       ZS = /\((\S*)(?::(\d+))(?::(\d+))\)/,
+       oS = (MM, rM) => {
+         const iM = DS.exec(MM);
+         if (iM) {
+           const [, MM, OM, SM] = iM;
+           return WS(rM, MM, "?", +OM, +SM)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L722-L741` → after: `L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L920) · [Before (L722-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L722-L741)

```diff
-         return TQ
-       }
-       layoutVertexBuffer(QQ, WQ) {
-         let {
-           kind: XQ,
-           offset: wQ,
-           stride: qQ,
-           components: TQ,
-           glType: zQ,
-           isNormalized: sQ
-         } = WQ;
-         const FQ = this.cB.Uj();
-         return new((0, mQ.d)().VertexBuffer)(FQ, QQ, XQ, !1, void 0, qQ, void 0, wQ, TQ, zQ, sQ, !0, void 0, !0)
-       }
-       load(QQ, WQ, XQ) {
-         const wQ = (0, MQ.g)(XQ),
- ... (4 more removed lines; see GitHub link above)
+         const OM = kS.exec(MM);
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L743-L759` → after: `L922-L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L922-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L922-L927) · [Before (L743-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L743-L759)

```diff
-           for (const QQ in TQ.attributeIds) qQ(QQ);
-           let zQ = this.dracoGeometry.get(TQ.bufferView.index);
-           return zQ || (zQ = this.viewBytes(TQ.bufferView).then((async () => {
-             let qQ;
-             try {
-               qQ = await hQ(WQ, this.decode)
-             } catch (FQ) {
-               throw new dQ.h(`${QQ}: ${FQ instanceof Error?FQ.message:String(FQ)}`)
-             }
-             const TQ = uQ(WQ, qQ);
-             if (wQ) return TQ;
-             const zQ = WW(WQ.position),
-               sQ = new((0, mQ.d)().MirroredGeometry)(XQ.name, this.cB);
-             zQ && (sQ._boundingInfo = zQ, sQ.useBoundingInfoFromGeometry = !0), TQ.indexData && sQ.setIndices(TQ.indexData);
-             for (const QQ of TQ.vertexAttributes) sQ.setVerticesBuffer(this.layoutVertexBuffer(QQ.data, QQ), TQ.vertexCount);
-             return sQ.link(TQ), sQ
- ... (1 more removed lines; see GitHub link above)
+           if (OM[2] && 0 === OM[2].indexOf("eval")) {
+             const MM = ZS.exec(OM[2]);
+             MM && (OM[2] = MM[1], OM[3] = MM[2], OM[4] = MM[3])
+           }
+           const [MM, iM] = sS(OM[1] || "?", OM[2]);
+           return WS(rM, iM, MM, OM[3] ? +OM[3] : void 0, OM[4] ? +OM[4] : void 0)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L761-L777` → after: `L929-L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L929-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L929-L937) · [Before (L761-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L761-L777)

```diff
-         const zQ = [],
-           sQ = EQ(WQ);
-         if (wQ) return XQ.isUnIndexed = !sQ.indexData, XQ.hasVertexAlpha = (0, QW.d)(WQ), Promise.resolve(sQ);
-         const FQ = new((0, mQ.d)().MirroredGeometry)(XQ.name, this.cB),
-           {
-             indexData: PQ
-           } = sQ;
-         PQ ? zQ.push(this.viewBytes(WQ.indices.bufferView).then((() => {
-           FQ.setIndices(PQ)
-         }))) : XQ.isUnIndexed = !0;
-         for (const [gQ, {
-             kind: JQ,
-             accessor: rQ
-           }] of WQ.attributes.entries()) qQ(JQ), zQ.push(this.vertexBuffer(rQ, sQ.vertexAttributes[gQ]).then((QQ => {
-           if ("position" === QQ.getKind()) {
-             const QQ = WW(rQ);
- ... (1 more removed lines; see GitHub link above)
+       },
+       fS = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
+       YS = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
+       NS = (MM, rM) => {
+         const iM = fS.exec(MM);
+         if (iM) {
+           if (iM[3] && iM[3].indexOf(" > eval") > -1) {
+             const MM = YS.exec(iM[3]);
+             MM && (iM[1] = iM[1] || "eval", iM[3] = MM[1], iM[4] = MM[2], iM[5] = "")
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L779-L781` → after: `L939-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L939-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L939-L965) · [Before (L779-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L779-L781)

```diff
-           FQ.setVerticesBuffer(QQ, sQ.vertexCount)
-         })));
-         return (0, QW.d)(WQ) && (XQ.hasVertexAlpha = !0), Promise.all(zQ).then((() => (FQ.link(sQ), FQ)))
+           let MM = iM[3],
+             OM = iM[1] || "?";
+           return [OM, MM] = sS(OM, MM), WS(rM, MM, OM, iM[4] ? +iM[4] : void 0, iM[5] ? +iM[5] : void 0)
+         }
+       },
+       AS = /\(error: (.*)\)/;
+ 
+     function xS(MM, rM) {
+       return MM.filename === rM.filename && MM.function === rM.function && MM.module === rM.module && MM.lineno === rM.lineno && MM.colno === rM.colno
+     }
+ 
+     function vS(MM) {
+       for (let rM = 1; 10 >= rM; rM++) {
+         const iM = MM.length - 2 * rM;
+         if (0 > iM) break;
+         let OM = !0;
+ ... (11 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L793-L796` → after: `L970-L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L970-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L970-L972) · [Before (L793-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L793-L796)

```diff
-       QQ.metadata = QQ.metadata || {};
-       const XQ = QQ._internalMetadata = QQ._internalMetadata || {},
-         wQ = XQ.vR = XQ.vR || {};
-       (wQ.pointers = wQ.pointers || []).push(WQ)
+       const iM = rM.start + rM.length,
+         OM = XS(MM, rM);
+       OM && MM.splice(iM + OM === MM.length ? iM : rM.start, OM)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L800-L803` → after: `L976-L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L976-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L976-L978) · [Before (L800-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L800-L803)

```diff
-       if (WQ && Object.keys(WQ).length > 0) {
-         const XQ = QQ.metadata = QQ.metadata || {};
-         (XQ.vR = XQ.vR || {}).extras = WQ
-       }
+       let iM = rM.start;
+       for (; iM > 0 && xS(MM[iM - 1], MM[iM - 1 + rM.length]);) iM--;
+       return rM.start - iM
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L807` → after: `L982-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L982-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L982-L985) · [Before (L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L807)

```diff
-       WQ.position = QQ.translation ? zW.vj.FromArray(QQ.translation) : zW.vj.Zero(), WQ.rotationQuaternion = QQ.rotation ? zW.Quaternion.FromArray(QQ.rotation) : zW.Quaternion.Identity(), WQ.oB = QQ.scale ? zW.vj.FromArray(QQ.scale) : zW.vj.One()
+       const iM = rM.start + rM.length;
+       let OM = iM;
+       for (; MM.length > OM && xS(MM[OM], MM[OM - rM.length]);) OM++;
+       return OM - iM
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L809-L820` → after: `L987-L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L987-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L987-L1014) · [Before (L809-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L809-L820)

```diff
-     class BW {
-       constructor(QQ, WQ) {
-         if (this.cB = QQ, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, WQ) {
-           const WQ = QQ.Uj(),
-             XQ = QQ.yE.add((() => {
-               this.dispose()
-             })),
-             wQ = WQ.Gj.add((() => {
-               for (const QQ of [...this.geometries, ...this.meshes, ...this.textures]) QQ._rebuild()
-             }));
-           this.release = () => {
-             QQ.yE.remove(XQ), WQ.Gj.remove(wQ)
+ 
+     function IS(MM, rM) {
+       const iM = rM[0];
+       let OM = MM.length - (iM ? BS(MM, iM) : 0);
+       for (const SM of rM) OM -= XS(MM, SM);
+       return OM
+     }
+ 
+     function KS(MM, rM, iM) {
+       for (let OM = 0; MM.length > OM; OM++) {
+         const SM = MM[(rM + OM) % MM.length],
+           jM = MM[(iM + OM) % MM.length];
+         if (SM !== jM) return jM > SM
+       }
+       return !1
+     }
+ ... (12 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L823-L834` → after: `L1017-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1017-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1017-L1046) · [Before (L823-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L823-L834)

```diff
-       }
-       getNodes() {
-         return [...this.meshes, ...this.transformNodes]
-       }
-       addAllToScene() {
-         if (this.release) {
-           this.release(), this.release = null;
-           for (const QQ of this.meshes) this.cB.hwQ(QQ);
-           for (const QQ of this.materials) this.cB.addMaterial(QQ);
-           for (const QQ of this.geometries) this.cB.addGeometry(QQ);
-           for (const QQ of this.transformNodes) this.cB.addTransformNode(QQ);
-           for (const QQ of this.textures) this.cB.addTexture(QQ)
+         getType(MM) {
+           return this.isDOMError(MM) ? "DOMError" : "DOMException"
+         }
+         getValue(MM) {
+           const rM = MM.name || (this.isDOMError(MM) ? "DOMError" : "DOMException");
+           return MM.message ? `${rM}: ${MM.message}` : rM
+         }
+         isDOMException(MM) {
+           return oi(MM, "DOMException")
+         }
+         isDOMError(MM) {
+           return oi(MM, "DOMError")
+         }
+       },
+       TS = class {
+         match(MM) {
+ ... (14 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L837` → after: `L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1095) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L837)

```diff
-       dispose() {
+       coerce(MM, rM) {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L839-L841` → after: `L1097-L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1097-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1097-L1102) · [Before (L839-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L839-L841)

```diff
-         for (const WQ of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
-           for (const QQ of WQ.slice()) QQ.dispose();
-           WQ.length = 0
+         const [OM, SM] = this.getInfos(MM);
+         return {
+           type: null != OM ? OM : "Error",
+           value: null != SM ? SM : MM,
+           stack: null === (iM = rM.syntheticException) || void 0 === iM ? void 0 : iM.stack,
+           synthetic: !0
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L845-L859` → after: `L1105-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1105-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1105-L1109) · [Before (L845-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L845-L859)

```diff
-     }
-     class yW {
-       constructor(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
-         this.asset = QQ, this.cB = WQ, this.tree = XQ, this.geometryData = qQ, this.materials = TQ, this.lite = zQ, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = wQ ? XQ : null
-       }
-       create(QQ) {
-         if (this.lite) return QQ();
-         const WQ = this.cB;
-         WQ._blockEntityCollection = !!this.container;
-         try {
-           const WQ = QQ();
-           return this.container && (WQ._parentContainer = this.container), WQ
-         } finally {
-           WQ._blockEntityCollection = !1
-         }
+       getInfos(MM) {
+         let rM = "Error",
+           iM = MM;
+         const OM = MM.match(cS);
+         return OM && (rM = OM[1], iM = OM[2]), [rM, iM]
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L861-L862` → after: `L1111-L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1111-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1111-L1120) · [Before (L861-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L861-L862)

```diff
-       node(QQ, WQ) {
-         return this.create((() => this.lite ? WQ ? (0, sW.f)(this.lite, QQ) : (0, sW.w)(this.lite, QQ) : WQ ? new((0, mQ.d)().Mesh)(QQ, this.cB) : new((0, mQ.d)().TransformNode)(QQ, this.cB)))
+     };
+     const rj = ["fatal", "error", "warning", "log", "info", "debug"];
+ 
+     function ij(MM) {
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
+       const iM = Object.keys(MM);
+       if (iM.sort(), !iM.length) return "[object has no keys]";
+       for (let OM = iM.length; OM > 0; OM--) {
+         const MM = iM.slice(0, OM).join(", ");
+         if (rM >= MM.length) return OM === iM.length ? MM : MM.length > rM ? `${MM.slice(0,rM)}...` : MM
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L864-L874` → after: `L1122-L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1122-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1122-L1126) · [Before (L864-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L864-L874)

```diff
-       async load() {
-         var QQ;
-         this.asset.model.json.nodes && this.createRoot();
-         const WQ = this.lite ? null : this.cB,
-           XQ = null !== (QQ = null === WQ || void 0 === WQ ? void 0 : WQ.blockMaterialDirtyMechanism) && void 0 !== QQ && QQ;
-         let wQ;
-         WQ && (WQ.blockMaterialDirtyMechanism = !0);
-         try {
-           wQ = this.loadScene()
-         } finally {
-           null === WQ || void 0 === WQ || WQ._forceBlockMaterialDirtyMechanism(XQ)
+       return ""
+     }
+     var Oj = class {
+         match(MM) {
+           return "object" == typeof MM && null !== MM
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L876-L889` → after: `L1128-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1128-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1128-L1136) · [Before (L876-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L876-L889)

```diff
-         await wQ;
-         const {
-           root: qQ,
-           tree: TQ
-         } = this;
-         qQ && (qQ.UH(!0), TQ.meshes.push(qQ), TQ.rootNodes.push(qQ));
-         for (const sQ of this.asset.model.nodes) {
-           const QQ = this.nodeObjects.get(sQ.index);
-           QQ && ["TransformNode", "LiteNode"].includes(QQ.getClassName()) && TQ.transformNodes.push(QQ);
-           for (const WQ of null !== (zQ = this.nodePrimitives.get(sQ.index)) && void 0 !== zQ ? zQ : []) {
-             var zQ;
-             TQ.meshes.push(WQ);
-             const QQ = WQ.geometry;
-             QQ && !TQ.geometries.includes(QQ) && TQ.geometries.push(QQ)
+         coerce(MM, rM) {
+           var iM, OM;
+           const SM = this.getErrorPropertyFromObject(MM);
+           return SM ? rM.apply(SM) : {
+             type: this.getType(MM),
+             value: this.getValue(MM),
+             stack: null !== (iM = this.getStack(MM)) && void 0 !== iM ? iM : null === (OM = rM.syntheticException) || void 0 === OM ? void 0 : OM.stack,
+             level: this.isSeverityLevel(MM.level) ? MM.level : "error",
+             synthetic: !0
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L892-L926` → after: `L1139-L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1139-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1139-L1142) · [Before (L892-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L892-L926)

```diff
-       }
-       createRoot() {
-         const QQ = this.node("__root__", !0);
-         this.root = QQ, QQ.UH(!1), this.cB.useRightHandedSystem || jW(SQ, QQ)
-       }
-       loadScene() {
-         const QQ = [];
-         for (const WQ of this.asset.model.rootNodes) QQ.push(this.loadNode(this.asset.model.nodes[WQ], (QQ => {
-           QQ.parent = this.root
-         })));
-         return QQ.push(Promise.resolve()), Promise.all(QQ).then((() => {}))
-       }
-       loadNode(QQ, WQ) {
-         const XQ = `/nodes/${QQ.index}`,
-           wQ = [],
-           qQ = qQ => {
- ... (19 more removed lines; see GitHub link above)
+         getType(MM) {
+           if (Yi(MM)) return MM.constructor.name;
+           const rM = "name" in MM ? MM.name : void 0;
+           return wi(rM) && !ti(rM) ? rM : "Error"
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L928-L931` → after: `L1144-L1147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1144-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1144-L1147) · [Before (L928-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L928-L931)

```diff
-         return Promise.all(wQ).then((() => {
-           for (const XQ of null !== (WQ = this.nodePrimitives.get(QQ.index)) && void 0 !== WQ ? WQ : []) {
-             var WQ;
-             XW(XQ)
+         getValue(MM) {
+           if ("name" in MM && "string" == typeof MM.name) {
+             let rM = `'${MM.name}' captured as exception`;
+             return "message" in MM && "string" == typeof MM.message && (rM += ` with message: '${MM.message}'`), rM
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L933-L951` → after: `L1149-L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1149-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1149-L1151) · [Before (L933-L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L933-L951)

```diff
-           return this.nodeObjects.get(QQ.index)
-         }))
-       }
-       loadMesh(QQ, WQ, XQ, wQ) {
-         const qQ = [],
-           TQ = fQ(WQ);
-         if (1 === XQ.primitives.length) {
-           const wQ = XQ.primitives[0];
-           qQ.push(this.loadPrimitive(`${QQ}/primitives/${wQ.index}`, TQ, wQ, (QQ => {
-             this.nodeObjects.set(WQ.index, QQ), this.nodePrimitives.set(WQ.index, [QQ])
-           })))
-         } else {
-           const wQ = this.node(TQ, !1);
-           this.nodeObjects.set(WQ.index, wQ);
-           const zQ = [];
-           this.nodePrimitives.set(WQ.index, zQ);
- ... (3 more removed lines; see GitHub link above)
+           if ("message" in MM && "string" == typeof MM.message) return MM.message;
+           const rM = this.getObjectClassName(MM);
+           return `${rM&&"Object"!==rM?`'${rM}'`:"Object"} captured as exception with keys: ${ij(MM)}`
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L953-L970` → after: `L1153-L1154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1153-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1153-L1154) · [Before (L953-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L953-L970)

```diff
-         const zQ = this.nodeObjects.get(WQ.index);
-         return wQ(zQ), Promise.all(qQ).then((() => zQ))
-       }
-       loadPrimitive(QQ, WQ, XQ, wQ) {
-         const qQ = [],
-           TQ = this.node(WQ, !0);
-         if (TQ.sideOrientation = this.cB.useRightHandedSystem ? FW.c.CounterClockWiseSideOrientation : FW.c.ClockWiseSideOrientation, qQ.push(this.geometryData.load(QQ, XQ, TQ).then((QQ => {
-             if ((0, MQ.g)(TQ)) {
-               var WQ, XQ;
-               const wQ = QQ;
-               TQ.replaceModel(wQ, Int32Array.of(0, null !== (WQ = null === (XQ = wQ.indexData) || void 0 === XQ ? void 0 : XQ.length) && void 0 !== WQ ? WQ : wQ.vertexCount, 0, wQ.vertexCount))
-             } else this.create((() => (QQ.applyToMesh(TQ), QQ)))
-           }))), this.materials) {
-           const QQ = 0 === XQ.mode ? FW.c.PointListDrawMode : FW.c.TriangleFillMode,
-             WQ = null === XQ.material ? null : this.asset.model.materials[XQ.material];
-           qQ.push(this.loadMaterial(WQ, QQ, (QQ => {
- ... (2 more removed lines; see GitHub link above)
+         isSeverityLevel(MM) {
+           return wi(MM) && !ti(MM) && rj.indexOf(MM) >= 0
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L972-L1006` → after: `L1156-L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1156-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1156-L1160) · [Before (L972-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L972-L1006)

```diff
-         return rW(TQ, QQ), wQ(TQ), Promise.all(qQ).then((() => TQ))
-       }
-       loadMaterial(QQ, WQ, XQ) {
-         var wQ;
-         const qQ = `${null!==(wQ=null===QQ||void 0===QQ?void 0:QQ.index)&&void 0!==wQ?wQ:"default"}:${WQ}`;
-         let TQ = this.materialData.get(qQ);
-         return TQ || (TQ = this.createMaterial(QQ, WQ), this.materialData.set(qQ, TQ)), XQ(TQ.material), TQ.promise
-       }
-       createMaterial(QQ, WQ) {
-         const XQ = QQ ? QQ.name || `material${QQ.index}` : "__GLTFLoader._default",
-           {
-             style: wQ,
-             unlit: qQ
-           } = this.materials;
-         let TQ;
-         const zQ = this.create((() => {
- ... (19 more removed lines; see GitHub link above)
+         getStack(MM) {
+           try {
+             return wi(MM.stacktrace) && MM.stacktrace.length > 0 ? MM.stacktrace : wi(MM.stack) && MM.stack.length > 0 ? MM.stack : void 0
+           } catch (MM) {
+             return
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1010-L1012` → after: `L1163-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1163-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1163-L1168) · [Before (L1010-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L1010-L1012)

```diff
-         return this.tree.materials.push(zQ), {
-           material: zQ,
-           promise: sQ
+         getErrorPropertyFromObject(MM) {
+           for (const rM in MM)
+             if ({}.hasOwnProperty.call(MM, rM)) {
+               const iM = MM[rM];
+               if (fi(iM)) return iM
+             }
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1014-L1015` → after: `L1170-L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1170-L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1170-L1245) · [Before (L1014-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L1014-L1015)

```diff
-       }
-     }
+         getObjectClassName(MM) {
+           try {
+             const rM = Object.getPrototypeOf(MM);
+             return rM ? rM.constructor.name : void 0
+           } catch (MM) {
+             return
+           }
+         }
+       },
+       Sj = class {
+         match(MM) {
+           return Yi(MM)
+         }
+         coerce(MM, rM) {
+           var iM;
+           const OM = MM.constructor.name;
+ ... (60 more added lines; see GitHub link above)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1017-L1018` → after: `L1247-L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1247-L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1247-L1252) · [Before (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L1017-L1018)

```diff
-     function VW() {
-       TW.f.dracoDecodes = BQ.decodes, TW.f.dracoWorkersStarted = BQ.workersStarted, TW.f.dracoMostWorkers = BQ.mostWorkers
+     function Lj(MM) {
+       var rM;
+       return MM ? {
+         enabled: null !== (rM = MM.enabled) && void 0 !== rM ? rM : zj.enabled,
+         max_bytes: Hj(MM.max_bytes, zj.max_bytes)
+       } : US({}, zj)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1020-L1023` → after: `L1254-L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1254-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1254-L1262) · [Before (L1020-L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L1020-L1023)

```diff
-     async function DW(QQ, WQ, XQ, qQ, TQ) {
-       try {
-         return await async function(QQ, WQ, XQ, qQ, TQ, zQ) {
-           var sQ;
+     var mj = class {
+       constructor(MM) {
+         this._entries = [], this._totalBytes = 0, this._config = Lj(MM)
+       }
+       setConfig(MM) {
+         this._config = Lj(MM), this._trimToMaxBytes()
+       }
+       add(MM) {
+         const rM = function(MM) {
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1025-L1031` → after: `L1264-L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1264-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1264-L1302) · [Before (L1025-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L1025-L1031)

```diff
-           const PQ = null === (sQ = (0, gW.f)()) || void 0 === sQ ? void 0 : sQ.nj,
-             gQ = null !== PQ && void 0 !== PQ && PQ.xj && WQ === PQ.sE() ? PQ : null,
-             JQ = TQ && !gQ;
-           return await KQ(QQ, WQ, XQ, qQ, wQ.d, (QQ => (FQ = new BW(WQ, JQ), new yW(QQ, WQ, FQ, JQ, new wW(WQ, qQ), zQ, gQ).load())), !TQ), FQ
-         }(QQ, WQ, XQ, UQ, qQ, TQ)
-       } finally {
-         VW()
+           try {
+             rM = di(MM)
+           } catch (MM) {
+             return
+           }
+           try {
+             const MM = JSON.parse(rM);
+             if (!Ci(MM)) return;
+             const iM = MM,
+               OM = iM[Pj],
+               SM = iM[nj];
+             if (!wi(OM) || 0 === OM.trim().length) return;
+             if (!wi(SM) && !Ri(SM)) return;
+             return {
+               step: iM,
+               json: rM
+ ... (23 more added lines; see GitHub link above)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1034` → after: `L1320-L1321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1320-L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1320-L1321) · [Before (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L1034)

```diff
-     async function pW(QQ, WQ, XQ, qQ) {
+     const hj = MM => {
+       if ("string" != typeof MM) return MM;
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1036-L1038` → after: `L1323-L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1323-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1323-L1325) · [Before (L1036-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L1036-L1038)

```diff
-         return await KQ(QQ, WQ, XQ, UQ, wQ.d, (QQ => qQ(QQ, new wW(WQ, UQ))))
-       } finally {
-         VW()
+         return JSON.parse(MM)
+       } catch (SM) {
+         return MM
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1040-L1051` → after: `L1327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1327) · [Before (L1040-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L1040-L1051)

```diff
-     }
-     qW = qQ.b, gQ || (gQ = {
-       scriptUrl: new URL(qW.scriptUrl, location.href).href,
-       wasmBinaryUrl: new URL(qW.wasmBinaryUrl, location.href).href
-     })
-   },
-   41740: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
-     });
-     var wQ = XQ(158),
-       qQ = XQ(1118);
+     };
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1054` → after: `L1330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1330) · [Before (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L1054)

```diff
-       return (0, wQ.isDiscordClient)() ? `https://${qQ.d.discordDomain}/${QQ.href}` : QQ.href
+       return "string" == typeof MM || MM
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1056-L1058` → after: `L1332-L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1332-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1332-L1334) · [Before (L1056-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L1056-L1058)

```diff
-     const zQ = {
-       scriptUrl: TQ(new XQ.U(XQ(41742))),
-       wasmBinaryUrl: TQ(new XQ.U(XQ(41750)))
+ 
+     function dj(MM) {
+       return "string" == typeof MM ? MM : void 0
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1060-L1064` → after: `L1336-L1375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1336-L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1336-L1375) · [Before (L1060-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L1060-L1064)

```diff
-   },
-   36540: QQ => {
-     QQ.exports = function(QQ, WQ, XQ, wQ) {
-       var qQ = self || window;
-       try {
+     const yj = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$proce … [truncated]
+       lj = "NativeGzipValidationError",
+       Ej = MM => MM.length >= 2 && 31 === MM[0] && 139 === MM[1],
+       Uj = (MM, rM) => MM === Qi.GZipJS || rM === Qi.GZipJS || "gzip" === rM,
+       Gj = MM => !(!MM || "object" != typeof MM) && "NotReadableError" === ("name" in MM ? String(MM.name) : "");
+     let Cj;
+     const ej = MM => {
+         throw LS(lj, `Native gzip produced invalid output: ${MM}`)
+       },
+       bj = (wj = Bi((function*(MM, rM) {
+         18 > MM.size && ej("too-short");
+         const iM = new Uint8Array(yield MM.slice(0, 10).arrayBuffer());
+         Ej(iM) && 8 === iM[2] || ej("invalid-header");
+         const OM = new DataView(yield MM.slice(MM.size - 8).arrayBuffer());
+         OM.getUint32(0, !0) !== (MM => {
+           const rM = (() => {
+ ... (24 more added lines; see GitHub link above)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1066-L1075` → after: `L1377-L1390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1377-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1377-L1390) · [Before (L1066-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L1066-L1075)

```diff
-           var TQ;
-           try {
-             TQ = new qQ.Blob([QQ])
-           } catch (PQ) {
-             (TQ = new(qQ.BlobBuilder || qQ.WebKitBlobBuilder || qQ.MozBlobBuilder || qQ.MSBlobBuilder)).append(QQ), TQ = TQ.getBlob()
-           }
-           var zQ = qQ.URL || qQ.webkitURL,
-             sQ = zQ.createObjectURL(TQ),
-             FQ = new qQ[WQ](sQ, XQ);
-           return zQ.revokeObjectURL(sQ), FQ
+           const rM = (new TextEncoder).encode(MM),
+             iM = new globalThis.CompressionStream("gzip"),
+             SM = iM.writable.getWriter(),
+             jM = SM.write(rM).then((() => SM.close())).catch((OM = Bi((function*(MM) {
+               try {
+                 yield SM.abort(MM)
+               } catch (MM) {}
+               throw MM
+             })), function(MM) {
+               return OM.apply(this, arguments)
+             })),
+             aM = new Response(iM.readable).blob(),
+             [PM] = yield Promise.all([aM, jM]);
+           return yield bj(PM, rM), PM
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1077` → after: `L1392-L1393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1392-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1392-L1393) · [Before (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L1077)

```diff
-           return new qQ[WQ]("data:application/javascript,".concat(encodeURIComponent(QQ)), XQ)
+           if (null == iM ? void 0 : iM.rethrow) throw MM;
+           return rM && console.error("Failed to gzip compress data", MM), null
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1079-L1081` → after: `L1395-L1412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1395-L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1395-L1412) · [Before (L1079-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L1079-L1081)

```diff
-       } catch (PQ) {
-         if (!wQ) throw Error("Inline worker is not supported");
-         return new qQ[WQ](wQ, XQ)
+         var OM
+       })), tj.apply(this, arguments)
+     }
+ 
+     function gj(MM, rM) {
+       if (null == MM) return {};
+       var iM, OM, SM = function(MM, rM) {
+         if (null == MM) return {};
+         var iM = {};
+         for (var OM in MM)
+           if ({}.hasOwnProperty.call(MM, OM)) {
+             if (rM.includes(OM)) continue;
+             iM[OM] = MM[OM]
+           } return iM
+       }(MM, rM);
+       if (Object.getOwnPropertySymbols) {
+ ... (2 more added lines; see GitHub link above)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1084-L1089` → after: `L1416-L12783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1416-L12783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/215.js#L1416-L12783) · [Before (L1084-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/215.js#L1084-L1089)

```diff
-   },
-   41750: (QQ, WQ, XQ) => {
-     QQ.exports = XQ.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
-   },
-   41742: (QQ, WQ, XQ) => {
-     QQ.exports = XQ.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
+     const uj = "[redacted]",
+       Rj = /^[A-Za-z0-9+/\n\r]+=*$/,
+       pj = /^[A-Za-z0-9_-]+={0,2}$/,
+       Wj = /[-_]/,
+       sj = /^data:[^,\s]*;base64,/i,
+       Dj = /^[A-Za-z0-9+/_-]+={0,2}$/,
+       kj = /\bph[a-z]_[A-Za-z0-9_-]{20,}\b/g,
+       Zj = /^(authorization|cookie|set-cookie|x-api-key|api[-_]?key|api[-_]?token|access[-_]?token|refresh[-_]?token|token|password|secret|client[-_]?secret|private[-_]?key)$/i,
+       oj = /[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi,
+       fj = /[\s<>"]/,
+       Yj = new RegExp(oj.source, "i"),
+       Nj = /[a-z][a-z0-9+.-]{0,63}:\/\//i,
+       Aj = new RegExp(`^${Nj.source}`, "i"),
+       xj = new RegExp(Nj.source, "gi"),
+       vj = /(^|[-_./;])(auth|token|secret|password|passwd|pwd|credential|signature|sig|key|hmac|sas|bearer|jwt|session|sessionid)([-_./;]|$)/i,
+       Fj = /^(code|AWSAccessKeyId|GoogleAccessId|Policy)$/i,
+ ... (11352 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/216.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/216.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800)

#### 1. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L4-L20` → after: `L4-L5412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L4-L5412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/216.js#L4-L5412) · [Before (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/216.js#L4-L20)

```diff
-   41757: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       default: () => TQ
-     });
-     var wQ = XQ(36540),
-       qQ = XQ.n(wQ);
- 
-     function TQ() {
-       return qQ()('/*! For license information please see 8104he.procGen.worker.05ee4d34.worker.js.LICENSE.txt */\n(()=>{var QQ={58:QQ=>{const WQ="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,XQ=()=>WQ.now(),wQ=QQ=>QQ===1/0||(QQ= … [truncated]
-     }
-   },
-   36540: QQ => {
-     QQ.exports = function(QQ, WQ, XQ, wQ) {
-       var qQ = self || window;
-       try {
-         try {
- ... (1 more removed lines; see GitHub link above)
+   34860: function(module, __unused_webpack_exports, __webpack_require__) {
+     var n;
+     this || self, n = function() {
+       return function() {
+         var __webpack_modules__ = {
+             4264: function(MM, rM, iM) {
+               MM.exports = iM(7588)
+             },
+             5036: function(MM, rM, iM) {
+               iM(1719), iM(5677), iM(6394), iM(5334), iM(6969), iM(2021), iM(8328), iM(2129);
+               var OM = iM(1287);
+               MM.exports = OM.Promise
+             },
+             2582: function(MM, rM, iM) {
+               iM(1646), iM(6394), iM(2004), iM(462), iM(8407), iM(2429), iM(1172), iM(8288), iM(1274), iM(8201), iM(6626), iM(3211), iM(9952), iM(15), iM(9831), iM(7521), iM(2972), iM(6956), iM(5222), iM(2257);
+               var OM = iM(1287);
+ ... (5393 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L22` → after: `L5414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R5414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L5414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/216.js#L5414) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/216.js#L22)

```diff
-             TQ = new qQ.Blob([QQ])
+             return this || new Function("return this")()
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L24-L37` → after: `L5416-L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R5416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L5416-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/216.js#L5416-L11892) · [Before (L24-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/216.js#L24-L37)

```diff
-             (TQ = new(qQ.BlobBuilder || qQ.WebKitBlobBuilder || qQ.MozBlobBuilder || qQ.MSBlobBuilder)).append(QQ), TQ = TQ.getBlob()
-           }
-           var zQ = qQ.URL || qQ.webkitURL,
-             sQ = zQ.createObjectURL(TQ),
-             FQ = new qQ[WQ](sQ, XQ);
-           return zQ.revokeObjectURL(sQ), FQ
-         } catch (PQ) {
-           return new qQ[WQ]("data:application/javascript,".concat(encodeURIComponent(QQ)), XQ)
-         }
-       } catch (PQ) {
-         if (!wQ) throw Error("Inline worker is not supported");
-         return new qQ[WQ](wQ, XQ)
-       }
-     }
+             if ("object" == typeof window) return window
+           }
+         }(), __nested_webpack_require_223763__.o = function(MM, rM) {
+           return Object.prototype.hasOwnProperty.call(MM, rM)
+         };
+         var __nested_webpack_exports__ = {};
+         return function() {
+           __nested_webpack_require_223763__.d(__nested_webpack_exports__, {
+             default: function() {
+               return Bj
+             }
+           }), __nested_webpack_require_223763__(5441), __nested_webpack_require_223763__(8765);
+           var MM = __nested_webpack_require_223763__(4296),
+             rM = __nested_webpack_require_223763__(5103),
+             iM = {
+               one: function(MM, rM) {
+ ... (6461 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/217.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/217.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/217.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/217.js#L2)

```diff
- export const ids = [217];
+ export const ids = [217, 218];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/217.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/217.js#L4)

```diff
-   41782: (QQ, WQ, XQ) => {
+   34868: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/217.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/217.js#L6)

```diff
-       default: () => TQ
+       reportJsMainStall: () => PM,
+       resetJsMainStallReport: () => nM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L8-L9` → after: `L9-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L9-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/217.js#L9-L29) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/217.js#L8-L9)

```diff
-     var wQ = XQ(36540),
-       qQ = XQ.n(wQ);
+     var OM = iM(34877),
+       SM = iM(3258),
+       jM = iM(34880);
+     let aM = !1;
+ 
+     function PM(MM, rM, iM, PM) {
+       aM || (aM = !0, (0, SM.reportClientError)("wasm_load", (0, jM.d)(MM, rM, iM, PM, (0, jM.e)()), "JS-mainStall", !0, OM.CAPPED_COUNTS_VISIT_CAP))
+     }
+ 
+     function nM() {
+       aM = !1
+     }
+   },
+   34880: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => PM,
+ ... (5 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L12` → after: `L32-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L32-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/217.js#L32-L71) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/217.js#L12)

```diff
-       return qQ()('(()=>{var QQ={18:(QQ,WQ,XQ)=>{QQ.exports=XQ.p+"static/media/bloxd_wasm_bg.b7e23ad43b7e82dd6e75.wasm"},26:(QQ,WQ,XQ)=>{QQ.exports=XQ.p+"static/media/bloxd_wasm_textures_bg.18bca44e8fe1e421dfd7.wasm"},14:(QQ,WQ,XQ)=>{QQ.exports=XQ.p+"static/media/zstdDecodeWorker … [truncated]
+       var MM, rM, iM;
+       return null !== (MM = (0, OM.p)(null !== (rM = null === (iM = (0, SM.o)()) || void 0 === iM ? void 0 : iM.renderer) && void 0 !== rM ? rM : null, (0, SM.k)())) && void 0 !== MM ? MM : "unknown"
+     }
+ 
+     function PM(MM, rM, iM, OM, SM) {
+       const aM = null === rM ? "untimed" : `${Math.round(rM)} ms`;
+       return `frames stalled, ${iM}, gpu ${(0,jM.b)(SM)}, blocking ${aM}, drawn ${Math.round(MM)} ms apart, timers ${OM.timers}, timer gap ${Math.round(OM.longestGapMs)} ms`
+     }
+   },
+   34877: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       CAPPED_COUNTS_VISIT_CAP: () => jM,
+       reportCappedWasmFailure: () => nM,
+       reportUncappedWasmFailure: () => PM,
+       reportWasmCrash: () => SM,
+       reportWasmFailure: () => aM
+ ... (24 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L15-L36` → after: `L74-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L74-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/217.js#L74-L76) · [Before (L15-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/217.js#L15-L36)

```diff
-   36540: QQ => {
-     QQ.exports = function(QQ, WQ, XQ, wQ) {
-       var qQ = self || window;
-       try {
-         try {
-           var TQ;
-           try {
-             TQ = new qQ.Blob([QQ])
-           } catch (PQ) {
-             (TQ = new(qQ.BlobBuilder || qQ.WebKitBlobBuilder || qQ.MozBlobBuilder || qQ.MSBlobBuilder)).append(QQ), TQ = TQ.getBlob()
-           }
-           var zQ = qQ.URL || qQ.webkitURL,
-             sQ = zQ.createObjectURL(TQ),
-             FQ = new qQ[WQ](sQ, XQ);
-           return zQ.revokeObjectURL(sQ), FQ
-         } catch (PQ) {
- ... (6 more removed lines; see GitHub link above)
+   34885: (MM, rM, iM) => {
+     function OM(MM) {
+       return String(MM).replace(/\d/g, (MM => String.fromCharCode(97 + Number(MM))))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/218.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/218.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82)

#### 1. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L4-L8` → after: `L4-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L4-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/218.js#L4-L22) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/218.js#L4-L8)

```diff
-   41028: (QQ, WQ, XQ) => {
-     function wQ(QQ, WQ, XQ) {
-       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(QQ, WQ).getContext("2d", XQ);
-       const wQ = document.createElement("canvas");
-       return wQ.width = QQ, wQ.height = WQ, wQ.getContext("2d", XQ)
+   34877: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       CAPPED_COUNTS_VISIT_CAP: () => jM,
+       reportCappedWasmFailure: () => nM,
+       reportUncappedWasmFailure: () => PM,
+       reportWasmCrash: () => SM,
+       reportWasmFailure: () => aM
+     });
+     var OM = iM(3258);
+ 
+     function SM(MM) {
+       (0, OM.reportClientError)("wasm_load", MM.message, MM.code)
+     }
+     const jM = OM.MAX_ERRORS_PER_VISIT - 4;
+ 
+     function aM(MM, rM, iM, SM) {
+ ... (3 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L11-L807` → after: `L25-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/218.js#L25-L28) · [Before (L11-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/218.js#L11-L807)

```diff
-     function qQ(QQ, WQ) {
-       return QQ.getContext("2d", WQ)
-     }
-     XQ.d(WQ, {
-       e: () => qQ,
-       g: () => wQ
-     })
-   },
-   40994: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => sQ
-     });
-     const wQ = 1 << 20,
-       qQ = 1 << 21,
-       TQ = 1024,
-       zQ = 2048;
- ... (781 more removed lines; see GitHub link above)
+     function PM(MM, rM, iM, SM) {
+       (0, OM.reportClientError)(MM, rM, iM, !1, 1 / 0, {
+         context: SM
+       })
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L810-L944` → after: `L31-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L31-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/218.js#L31-L34) · [Before (L810-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/218.js#L810-L944)

```diff
-     function zQ() {
-       const QQ = qQ;
-       if (null === QQ) return (0, wQ.f)();
-       const WQ = (0, wQ.f)(!QQ.scanned);
-       return QQ.scanned = !0, WQ
-     }
-   },
-   41039: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => wQ
-     });
-     const wQ = {
-       webgpu: "rust_webgpu",
-       webgl: "rust_webgl2",
-       webgl1: "rust_webgl1"
-     }
- ... (119 more removed lines; see GitHub link above)
+     function nM(MM, rM, iM, SM) {
+       (0, OM.reportClientError)(MM, rM, iM, !1, jM, {
+         context: SM
+       })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/219.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/219.js` (49 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L2)

```diff
- export const ids = [219];
+ export const ids = [218, 219];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L4` → after: `L4-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L4-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L4-L37) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L4)

```diff
-   36795: (QQ, WQ, XQ) => {
+   34877: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       CAPPED_COUNTS_VISIT_CAP: () => jM,
+       reportCappedWasmFailure: () => nM,
+       reportUncappedWasmFailure: () => PM,
+       reportWasmCrash: () => SM,
+       reportWasmFailure: () => aM
+     });
+     var OM = iM(3258);
+ 
+     function SM(MM) {
+       (0, OM.reportClientError)("wasm_load", MM.message, MM.code)
+     }
+     const jM = OM.MAX_ERRORS_PER_VISIT - 4;
+ 
+     function aM(MM, rM, iM, SM) {
+ ... (18 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L8` → after: `L126-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L126-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L126-L215) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L8)

```diff
-       g: () => TQ
+       j: () => aM,
+       k: () => LM
+     });
+     var OM = iM(37218),
+       SM = iM(10);
+     const jM = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;
+ 
+     function aM(MM) {
+       if (MM instanceof WebAssembly.RuntimeError) return !0;
+       const rM = MM instanceof Error ? MM.stack : void 0;
+       return "string" === typeof rM && jM.test(rM)
+     }
+ 
+     function PM(MM, rM, iM) {
+       var SM;
+       const aM = MM instanceof Error ? MM.name : "thrown",
+ ... (74 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L10-L13` → after: `L217-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L217-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L217-L249) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L10-L13)

```diff
-     var wQ = XQ(1854);
-     class qQ extends Error {
-       constructor(QQ) {
-         super("The game server didn't answer in time"), this.leg = QQ, this.name = "SeatRequestTimedOut"
+     class OM {
+       __destroy_into_raw() {
+         const MM = this.__wbg_ptr;
+         return this.__wbg_ptr = 0, DM.unregister(this), MM
+       }
+       free() {
+         const MM = this.__destroy_into_raw();
+         Er.A1cn(MM, 0)
+       }
+       xL() {
+         const MM = Er.kifZ(this.__wbg_ptr);
+         if (MM[2]) throw mr(MM[1]);
+         return MM[0] >>> 0
+       }
+       vL() {
+         return Er.vSJ1(this.__wbg_ptr) >>> 0
+ ... (17 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L16` → after: `L252-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L252-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L252-L315) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L16)

```diff
-     const TQ = new class {
+     Symbol.dispose && (OM.prototype[Symbol.dispose] = OM.prototype.free);
+     const SM = Object.freeze({
+       Js: 0,
+       0: "Js",
+       Error: 1,
+       1: "Error",
+       LeaveRoom: 2,
+       2: "LeaveRoom",
+       RoomState: 3,
+       3: "RoomState",
+       RoomStatePatch: 4,
+       4: "RoomStatePatch",
+       RoomDataNone: 5,
+       5: "RoomDataNone",
+       RoomDataBin: 6,
+       6: "RoomDataBin",
+ ... (48 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L18` → after: `L317-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L317-L318) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L18)

```diff
-         this.count = 0, this.answers = 0, this.waiting = new Set
+         const MM = Er.qiDZ();
+         return this.__wbg_ptr = MM, kM.register(this, this.__wbg_ptr, this), this
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L20-L21` → after: `L320-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L320-L321) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L20-L21)

```diff
-       get answered() {
-         return this.answers
+       Sm() {
+         return Er.C29Q(this.__wbg_ptr) >>> 0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L23-L24` → after: `L323-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L323-L324) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L23-L24)

```diff
-       answer() {
-         this.answers++
+       jm() {
+         return Er.OOHq(this.__wbg_ptr) >>> 0
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L26-L28` → after: `L326-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L326-L327) · [Before (L26-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L26-L28)

```diff
-       add() {
-         this.count++;
-         for (const QQ of this.waiting) QQ()
+       am() {
+         return Er.Dq6j(this.__wbg_ptr) >>> 0
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L30-L31` → after: `L329-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L329-L330) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L30-L31)

```diff
-       remove() {
-         this.count--
+       IL(MM) {
+         return Er.xYZj(this.__wbg_ptr, MM) >>> 0
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L33-L41` → after: `L332-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L332-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L332-L334) · [Before (L33-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L33-L41)

```diff
-       whenSlow(QQ) {
-         return this.count > 0 || QQ.aborted ? Promise.resolve(!QQ.aborted) : new Promise((WQ => {
-           const XQ = () => {
-             this.waiting.delete(XQ), WQ(!QQ.aborted)
-           };
-           this.waiting.add(XQ), QQ.addEventListener("abort", XQ, {
-             once: !0
-           })
-         }))
+       reserve(MM, rM) {
+         const iM = Er.H6q9(this.__wbg_ptr, MM, rM);
+         if (iM[1]) throw mr(iM[0])
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L43` → after: `L336-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L336-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L336-L351) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L43)

```diff
-     };
+       Qm(MM, rM) {
+         const iM = nr(MM, Er.GR8u),
+           OM = Ur;
+         Er.osw8(this.__wbg_ptr, iM, OM, rM)
+       }
+       text() {
+         let MM, rM;
+         try {
+           const iM = Er.cdEF(this.__wbg_ptr);
+           return MM = iM[0], rM = iM[1], TM(iM[0], iM[1])
+         } finally {
+           Er.SWNS(MM, rM, 1)
+         }
+       }
+     }
+     Symbol.dispose && (jM.prototype[Symbol.dispose] = jM.prototype.free);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L45-L48` → after: `L353-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L353-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L353-L389) · [Before (L45-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L45-L48)

```diff
-       constructor(QQ) {
-         this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new wQ.e(45e3, QQ), this.slow = new wQ.e(8e3, (() => {
-           this.countedSlow = !0, TQ.add()
-         }))
+       __destroy_into_raw() {
+         const MM = this.__wbg_ptr;
+         return this.__wbg_ptr = 0, ZM.unregister(this), MM
+       }
+       free() {
+         const MM = this.__destroy_into_raw();
+         Er.gQek(MM, 0)
+       }
+       Lm(MM, rM) {
+         vM(rM, OM);
+         const iM = Er.RaGm(this.__wbg_ptr, MM, rM.__wbg_ptr);
+         if (iM[2]) throw mr(iM[1]);
+         return iM[0] >>> 0
+       }
+       Hm() {
+         const MM = Er.inSK(this.__wbg_ptr);
+ ... (21 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L50-L51` → after: `L391-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L391-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L391-L394) · [Before (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L50-L51)

```diff
-       restart() {
-         TQ.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
+       constructor(MM, rM, iM, OM, SM, jM, aM, PM) {
+         const nM = Er.FxC3(MM, rM, iM, OM, SM, jM, aM, PM);
+         if (nM[2]) throw mr(nM[1]);
+         return this.__wbg_ptr = nM[0], ZM.register(this, this.__wbg_ptr, this), this
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L53-L54` → after: `L396-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L396-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L396-L400) · [Before (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L53-L54)

```diff
-       stop() {
-         this.timeout.stop(), this.slow.stop(), this.uncountSlow()
+       wm(MM) {
+         vM(MM, OM);
+         const rM = Er.Arqk(this.__wbg_ptr, MM.__wbg_ptr);
+         if (rM[2]) throw mr(rM[1]);
+         return rM[0] >>> 0
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L56-L57` → after: `L402-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L402-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L402-L404) · [Before (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L56-L57)

```diff
-       answered() {
-         this.stop(), TQ.answer()
+       gm(MM) {
+         const rM = Er.q8Ma(this.__wbg_ptr, MM);
+         if (rM[1]) throw mr(rM[0])
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L59-L60` → after: `L406-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L406-L407) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L59-L60)

```diff
-       socketOpened() {
-         this.slow.stop(), this.uncountSlow(), TQ.answer()
+       um() {
+         return Er.cHTK(this.__wbg_ptr) >>> 0
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L62-L63` → after: `L409-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L409-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L409-L457) · [Before (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L62-L63)

```diff
-       uncountSlow() {
-         this.countedSlow && (this.countedSlow = !1, TQ.remove())
+       resume(MM, rM) {
+         vM(MM, PM), vM(rM, OM);
+         const iM = Er.UiQy(this.__wbg_ptr, MM.__wbg_ptr, rM.__wbg_ptr);
+         if (iM[2]) throw mr(iM[1]);
+         return iM[0] >>> 0
+       }
+       Dm(MM) {
+         const rM = Er.Ftvx(this.__wbg_ptr, MM);
+         if (rM[1]) throw mr(rM[0])
+       }
+       om(MM, rM) {
+         vM(rM, OM);
+         const iM = Er.cd9B(this.__wbg_ptr, MM, rM.__wbg_ptr);
+         if (iM[1]) throw mr(iM[0])
+       }
+       Nm(MM) {
+ ... (33 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L66-L78` → after: `L460-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L460-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L460-L609) · [Before (L66-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L66-L78)

```diff
-   },
-   36559: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => wQ,
-       g: () => qQ,
-       j: () => TQ,
-       n: () => zQ
-     });
-     const wQ = 1024,
-       qQ = 1024 * wQ;
- 
-     function TQ(QQ) {
-       return 2 ** Math.floor(Math.log2(Math.max(1, QQ / qQ)))
+     Symbol.dispose && (aM.prototype[Symbol.dispose] = aM.prototype.free);
+     class PM {
+       static __wrap(MM) {
+         const rM = Object.create(PM.prototype);
+         return rM.__wbg_ptr = MM, oM.register(rM, rM.__wbg_ptr, rM), rM
+       }
+       __destroy_into_raw() {
+         const MM = this.__wbg_ptr;
+         return this.__wbg_ptr = 0, oM.unregister(this), MM
+       }
+       free() {
+         const MM = this.__destroy_into_raw();
+         Er.qijW(MM, 0)
+       }
+       Im(MM) {
+         const rM = Er.iCeU(this.__wbg_ptr, MM);
+ ... (134 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L80-L82` → after: `L611-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L611-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L611-L890) · [Before (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L80-L82)

```diff
- 
-     function zQ(QQ) {
-       return (QQ / qQ).toFixed(1)
+     Symbol.dispose && (PM.prototype[Symbol.dispose] = PM.prototype.free);
+     class nM {
+       __destroy_into_raw() {
+         const MM = this.__wbg_ptr;
+         return this.__wbg_ptr = 0, fM.unregister(this), MM
+       }
+       free() {
+         const MM = this.__destroy_into_raw();
+         Er.nTwo(MM, 0)
+       }
+       JL(MM) {
+         const rM = nr(MM, Er.GR8u),
+           iM = Ur,
+           OM = Er.o8jR(this.__wbg_ptr, rM, iM);
+         if (OM[1]) throw mr(OM[0])
+       }
+ ... (264 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L107-L108` → after: `L893-L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L893-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L893-L896) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L107-L108)

```diff
-     function PQ(QQ) {
-       return Math.floor(qQ * QQ / TQ)
+     function mM() {
+       const MM = Er.XhAF();
+       var rM = BM(MM[0], MM[1]).slice();
+       return Er.SWNS(MM[0], 4 * MM[1], 4), rM
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L111-L119` → after: `L899-L909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L899-L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L899-L909) · [Before (L111-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L111-L119)

```diff
-     function gQ(QQ) {
-       const WQ = JQ(QQ);
-       let XQ = wQ.h.maxChunkHorizAddDistance,
-         qQ = wQ.h.maxChunkVertAddDistance;
-       if (rQ(XQ + 1, qQ + 1) <= WQ) return null;
-       for (; rQ(XQ + 1, qQ + 1) > WQ && (XQ > 0 || qQ > 0);) XQ > qQ ? XQ-- : qQ--;
-       return {
-         horizontal: XQ,
-         vertical: qQ
+     function HM(MM, rM) {
+       let iM, OM;
+       try {
+         const SM = Pr(MM, Er.GR8u),
+           jM = Ur,
+           aM = Lr(rM, Er.GR8u, Er.idyS),
+           PM = Ur,
+           nM = Er.fWEg(SM, jM, aM, PM);
+         return iM = nM[0], OM = nM[1], TM(nM[0], nM[1])
+       } finally {
+         Er.SWNS(iM, OM, 1)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L124` → after: `L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L920) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L124)

```diff
-       return QQ - Math.floor(QQ / 6)
+       return 0 !== Er.f1AT(MM)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L128-L133` → after: `L924-L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L924-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L924-L927) · [Before (L128-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L128-L133)

```diff
-       const XQ = Math.max(QQ, WQ);
-       let wQ = 0;
-       for (let qQ = -XQ; qQ <= XQ; qQ++)
-         for (let TQ = -XQ; TQ <= XQ; TQ++)
-           for (let zQ = -XQ; zQ <= XQ; zQ++) IQ(QQ, WQ, qQ, TQ, zQ) && wQ++;
-       return wQ
+       const iM = Lr(MM, Er.GR8u, Er.idyS),
+         OM = Ur,
+         SM = Er.ef2O(iM, OM, rM);
+       if (SM[1]) throw mr(SM[0])
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L136-L138` → after: `L930-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L930-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L930-L935) · [Before (L136-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L136-L138)

```diff
-     function IQ(QQ, WQ, XQ, wQ, qQ) {
-       const TQ = XQ * XQ + qQ * qQ;
-       return QQ === WQ ? TQ + wQ * wQ <= QQ * QQ : QQ > WQ ? Math.abs(wQ) <= WQ && TQ + wQ * wQ <= QQ * QQ : TQ <= QQ * QQ && TQ + wQ * wQ <= WQ * WQ
+     function yM() {
+       Er.QOF5()
+     }
+ 
+     function lM() {
+       return Er.agAh() >>> 0
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L168-L202` → after: `L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L939) · [Before (L168-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L168-L202)

```diff
-       const {
-         os: WQ,
-         deviceMemory: XQ
-       } = QQ;
-       if ("ios" === WQ) switch ((0, zQ.i)(QQ)) {
-         case "ipad_m":
-           return {
-             footprintBytes: UQ(gQ.d), basis: "ipad-m", namesLimit: !1
-           };
-         case "ipad":
-           return {
-             footprintBytes: pQ, basis: "ipad", namesLimit: !0
-           };
-         case "iphone_6gb":
-           return {
-             footprintBytes: DQ, basis: "iphone-6gb", namesLimit: !0
- ... (19 more removed lines; see GitHub link above)
+       return 0 !== Er.Q5FA(MM)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L206` → after: `L943-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L943-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L943-L947) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L206)

```diff
-       return jQ + QQ * BQ
+       return 0 !== Er.Mpy6(MM)
+     }
+ 
+     function GM(MM) {
+       Er.sNfK(MM)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L210-L217` → after: `L951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L951) · [Before (L210-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L210-L217)

```diff
-       let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lQ(),
-         WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TQ.siteUsed;
-       if ("android" !== QQ.os || "mobileAndroid" === WQ) return !0;
-       const {
-         footprintBytes: XQ,
-         basis: wQ
-       } = GQ(QQ);
-       return "android" === wQ || XQ > 2 * IQ
+       return Er.pOXN() >>> 0
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L220-L245` → after: `L954-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L954-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L954-L955) · [Before (L220-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L220-L245)

```diff
-     function vQ(QQ, WQ, XQ) {
-       var qQ, TQ, zQ;
-       let {
-         footprintBytes: sQ,
-         basis: FQ,
-         namesLimit: JQ
-       } = GQ(QQ);
-       if (XQ) {
-         const QQ = Math.min(sQ, UQ(gQ.d));
-         sQ = jQ + Math.max(0, QQ - jQ) / 2, FQ += "+killed", JQ = !0
-       }
-       null !== WQ && UQ(WQ) < sQ && (sQ = UQ(WQ), FQ += "+learned", JQ = !0), FQ += (0, PQ.u)(null !== (qQ = QQ.x32) && void 0 !== qQ ? qQ : null), "fix" === QQ.x32 && UQ(VQ) < sQ && (sQ = UQ(VQ), JQ = !0);
-       const rQ = function(QQ) {
-           const WQ = Math.floor((QQ - jQ) / BQ);
-           return Math.min(gQ.d, Math.max(gQ.h, WQ))
-         }(sQ),
- ... (10 more removed lines; see GitHub link above)
+     function eM() {
+       return Er.UBY5() >>> 0
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L252-L260` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L959) · [Before (L252-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L252-L260)

```diff
-       var QQ;
-       return dQ ??= {
-         os: (0, qQ.getOperatingSystem)(),
-         deviceMemory: navigator.deviceMemory,
-         ...(0, zQ.m)()
-       }, {
-         ...dQ,
-         x32: null !== (QQ = (0, PQ.r)()) && void 0 !== QQ ? QQ : void 0
-       }
+       return 0 !== Er.zH1c()
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L264` → after: `L963-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L963-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L963-L965) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L264)

```diff
-       return vQ(lQ(), (0, sQ.e)(), (0, FQ.I)("wasm").length > 0)
+       const MM = Er.OoQb();
+       var rM = BM(MM[0], MM[1]).slice();
+       return Er.SWNS(MM[0], 4 * MM[1], 4), rM
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L268` → after: `L969-L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L969-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L969-L971) · [Before (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L268)

```diff
-       return aQ ??= (0, JQ.o)(vQ(lQ(), null, !1).chunkCap), aQ
+       const MM = Er.A8ZZ();
+       var rM = BM(MM[0], MM[1]).slice();
+       return Er.SWNS(MM[0], 4 * MM[1], 4), rM
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L272` → after: `L975-L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L975-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L975-L977) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L272)

```diff
-       return HQ ??= hQ(), HQ
+       const MM = Er.GOao();
+       var rM = BM(MM[0], MM[1]).slice();
+       return Er.SWNS(MM[0], 4 * MM[1], 4), rM
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L276-L277` → after: `L981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L981) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L276-L277)

```diff
-       var QQ;
-       return (null !== (QQ = HQ) && void 0 !== QQ ? QQ : hQ()).basis
+       return Er.ez7e() >>> 0
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L280-L281` → after: `L984-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L984-L985) · [Before (L280-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L280-L281)

```diff
-     function RQ(QQ, WQ) {
-       return QQ.setChunkCap(WQ.chunkCap)
+     function RM() {
+       Er.jY6g()
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L304-L305` → after: `L988-L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L988-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L988-L995) · [Before (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L304-L305)

```diff
-     function JQ(QQ) {
-       return "footprint" !== QQ && "gcPressure" !== QQ
+     function pM() {
+       let MM, rM;
+       try {
+         const iM = Er.Hx3D();
+         return MM = iM[0], rM = iM[1], TM(iM[0], iM[1])
+       } finally {
+         Er.SWNS(MM, rM, 1)
+       }
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L309` → after: `L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L999) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L309)

```diff
-       return JQ(QQ) ? "wasm memory was refused" : "gcPressure" === QQ ? "the page's full GCs ran high" : "the tab's footprint reached its budget"
+       Er.GJHO(xM(MM))
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L311-L315` → after: `L1001-L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1001-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L1001-L1060) · [Before (L311-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L311-L315)

```diff
-     const IQ = 2 * wQ.g,
-       jQ = 4 * wQ.g,
-       BQ = 35 * wQ.g + IQ + jQ,
-       yQ = 6.5 * wQ.g,
-       VQ = 132.5 * wQ.d;
+ 
+     function sM() {
+       return {
+         __proto__: null,
+         chc3: {
+           __proto__: null,
+           BOhm: function(MM, rM) {
+             return xM(Error(TM(MM, rM)))
+           },
+           qvwV: function(MM, rM) {
+             throw new Error(TM(MM, rM))
+           },
+           dWpt: function(MM) {
+             Or(MM).call()
+           },
+           pC17: function(MM, rM) {
+ ... (44 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L318-L319` → after: `L1063-L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1063-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L1063-L1108) · [Before (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L318-L319)

```diff
-       const WQ = yQ + (0, qQ.l)(QQ) + QQ * VQ;
-       return Math.ceil((2 * BQ + WQ) / TQ) * TQ
+       jr === Sr.length && Sr.push(Sr.length + 1);
+       const rM = jr;
+       return jr = Sr[rM], Sr[rM] = MM, rM
+     }
+ 
+     function vM(MM, rM) {
+       if (!(MM instanceof rM)) throw new Error(`expected instance of ${rM.name}`)
+     }
+ 
+     function FM(MM, rM) {
+       return MM >>>= 0, KM().subarray(MM / 8, MM / 8 + rM)
+     }
+ 
+     function BM(MM, rM) {
+       return MM >>>= 0, Mr().subarray(MM / 4, MM / 4 + rM)
+     }
+ ... (30 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L332-L335` → after: `L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L1112) · [Before (L332-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L332-L335)

```diff
-       return {
-         targetBytes: QQ,
-         leastBytes: 0
-       }
+       return Sr[MM]
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L339` → after: `L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L1119) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L339)

```diff
-       return QQ >= qQ.d ? pQ : GQ
+       return void 0 === MM || null === MM
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L343-L344` → after: `L1122-L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1122-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L1122-L1124) · [Before (L343-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L343-L344)

```diff
-     function dQ(QQ, WQ, XQ) {
-       return QQ + WQ + vQ > XQ
+     function Pr(MM, rM) {
+       const iM = rM(2 * MM.length, 2) >>> 0;
+       return (null !== VM && 0 !== VM.byteLength || (VM = new Uint16Array(Er.memory.buffer)), VM).set(MM, iM / 2), Ur = MM.length, iM
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L346-L368` → after: `L1126-L1146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1126-L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L1126-L1146) · [Before (L346-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L346-L368)

```diff
-     const HQ = {
-       now: () => performance.now(),
-       requestIdle: "function" === typeof requestIdleCallback ? QQ => {
-         requestIdleCallback(QQ)
-       } : null
-     };
-     class aQ {
-       constructor(QQ, WQ, XQ) {
-         let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HQ;
-         this.memory = QQ, this.readPeakStoredChunks = WQ, this.onError = XQ, this.clock = wQ, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.gcSheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt … [truncated]
-           reserves: 0,
-           allocations: 0
-         }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null, this.gcPressure = null
-       }
-       setShed(QQ, WQ, XQ) {
-         this.shedding = {
- ... (7 more removed lines; see GitHub link above)
+ 
+     function nr(MM, rM) {
+       const iM = rM(4 * MM.length, 4) >>> 0;
+       return Mr().set(MM, iM / 4), Ur = MM.length, iM
+     }
+ 
+     function Qr(MM, rM) {
+       const iM = rM(1 * MM.length, 1) >>> 0;
+       return ir().set(MM, iM / 1), Ur = MM.length, iM
+     }
+ 
+     function zr(MM, rM) {
+       const iM = rM(8 * MM.length, 8) >>> 0;
+       return KM().set(MM, iM / 8), Ur = MM.length, iM
+     }
+ 
+ ... (5 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L370-L371` → after: `L1148-L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1148-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L1148-L1155) · [Before (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L370-L371)

```diff
-       setFootprint(QQ) {
-         this.footprint = QQ
+       let OM = MM.length,
+         SM = rM(OM, 1) >>> 0;
+       const jM = ir();
+       let aM = 0;
+       for (; aM < OM; aM++) {
+         const rM = MM.charCodeAt(aM);
+         if (rM > 127) break;
+         jM[SM + aM] = rM
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L373-L378` → after: `L1157-L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1157-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L1157-L1160) · [Before (L373-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L373-L378)

```diff
-       setGcPressure(QQ) {
-         this.gcPressure = {
-           highEpisode: QQ,
-           shedEpisode: null,
-           nextAt: null
-         }
+       if (aM !== OM) {
+         0 !== aM && (MM = MM.slice(aM)), SM = iM(SM, OM, OM = aM + 3 * MM.length, 1) >>> 0;
+         const rM = ir().subarray(SM + aM, SM + OM);
+         aM += dr.encodeInto(MM, rM).written, SM = iM(SM, OM, aM, 1) >>> 0
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L380-L383` → after: `L1162-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1162-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L1162-L1183) · [Before (L380-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L380-L383)

```diff
-       setCeiling(QQ) {
-         this.ceilingBytes = QQ, this.call((() => {
-           this.memory.setCeiling(QQ)
-         }), void 0)
+       return Ur = aM, SM
+     }
+ 
+     function mr(MM) {
+       const rM = Or(MM);
+       return function(MM) {
+         MM < 1028 || (Sr[MM] = jr, jr = MM)
+       }(MM), rM
+     }
+     let Hr = new TextDecoder("utf-8", {
+       ignoreBOM: !0,
+       fatal: !0
+     });
+     Hr.decode();
+     const hr = 2146435072;
+     let Jr = 0;
+ ... (6 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L385-L480` → after: `L1185-L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1185-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L1185-L1226) · [Before (L385-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L385-L480)

```diff
-       ceilingMayRefuse(QQ, WQ) {
-         var XQ;
-         return dQ(this.memory.memoryBytes(), QQ, null !== (XQ = this.ceilingBytes) && void 0 !== XQ ? XQ : WQ)
-       }
-       reserveAtJoin(QQ) {
-         let {
-           targetBytes: WQ,
-           leastBytes: XQ
-         } = QQ;
-         const wQ = this.memory.memoryBytes(),
-           qQ = wQ + XQ,
-           TQ = Math.max(WQ + (this.ballastOn() ? gQ : 0), qQ),
-           zQ = this.call((() => this.memory.reserveUpFront(TQ) ? "target" : TQ > qQ && this.memory.reserveUpFront(qQ) ? "least" : "none"), "none");
-         if (this.stopped) return !1;
-         if ("target" !== zQ) {
-           const QQ = "least" === zQ ? `took ${qQ} bytes instead` : "frames grow it in steps";
- ... (80 more removed lines; see GitHub link above)
+     });
+     let yr, lr, Er, Ur = 0;
+ 
+     function Gr(MM, rM) {
+       return lr = MM, Er = MM.exports, yr = rM, IM = null, qM = null, VM = null, cM = null, rr = null, Er.crmU(), Er
+     }
+ 
+     function Cr(MM) {
+       if (void 0 !== Er) return Er;
+       void 0 !== MM && (Object.getPrototypeOf(MM) === Object.prototype ? ({
+         module: MM
+       } = MM) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
+       const rM = sM();
+       MM instanceof WebAssembly.Module || (MM = new WebAssembly.Module(MM));
+       return Gr(new WebAssembly.Instance(MM, rM), MM)
+     }
+ ... (26 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L482-L549` → after: `L1228-L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1228-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L1228-L1235) · [Before (L482-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L482-L549)

```diff
-           of this.workers.values()) zQ += wQ.reservesRefused, sQ += wQ.allocationsRefused;
-         return {
-           wasmMainMiB: Number((0, wQ.n)(this.memory.memoryBytes())),
-           wasmWorkersMiB: Number((0, wQ.n)(this.workersMemoryBytes())),
-           peakStoredChunks: this.peakStoredChunks,
-           refusedReserves: zQ,
-           refusedAllocations: sQ,
-           sheds: this.sheds,
-           ...null === (TQ = this.footprint) || void 0 === TQ ? void 0 : TQ.snapshot()
-         }
-       }
-       workersMemoryBytes() {
-         let QQ = 0;
-         for (const {
-             stats: WQ,
-             gone: XQ
- ... (52 more removed lines; see GitHub link above)
+           const OM = await MM.arrayBuffer();
+           return await WebAssembly.instantiate(OM, rM)
+         } {
+           const iM = await WebAssembly.instantiate(MM, rM);
+           return iM instanceof WebAssembly.Instance ? {
+             instance: iM,
+             module: MM
+           } : iM
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L555-L556` → after: `L1336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/219.js#L1336) · [Before (L555-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/219.js#L555-L556)

```diff
-       const WQ = (QQ, WQ) => `${QQ}/${(0,wQ.n)(WQ)}`;
-       return `memory ${(0,wQ.n)(QQ.memoryBytes)} live ${(0,wQ.n)(QQ.liveBytes)} peak ${(0,wQ.n)(QQ.peakLiveBytes)} unused ${(0,wQ.n)(QQ.unusedBytes)} ceiling ${(0,wQ.n)(QQ.ceilingBytes)} MiB; grows upFront ${WQ(QQ.grows.upFront,QQ.grownBytes.upFront)} ahead ${WQ(QQ.grows.ahead,QQ … [truncated]
+       return MM.replace(/\s*\n\s*/g, " / ").slice(0, PM)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/220.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/220.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557)

#### 1. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/220.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/220.js#L4)

```diff
-   36619: (QQ, WQ, XQ) => {
+   34920: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L6-L10` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/220.js#L6-L8) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/220.js#L6-L10)

```diff
-       ITEM_FILES_WITHOUT_SPRITE: () => sQ,
-       ITEM_SPRITES: () => TQ,
-       ITEM_SPRITES_WITHOUT_FILE: () => zQ,
-       ITEM_SPRITE_RUNS: () => qQ,
-       MAX_SPRITE_ITEM_ID: () => wQ
+       ALL_DEV_TOOLS: () => aM,
+       coreDevTools: () => QM,
+       devTools: () => nM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L12-L16` → after: `L10-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L10-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/220.js#L10-L56) · [Before (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/220.js#L12-L16)

```diff
-     const wQ = 10090,
-       qQ = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
-       TQ = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
-       zQ = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
-       sQ = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
+     var OM = iM(656),
+       SM = iM(1327),
+       jM = iM(34926);
+     const aM = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
+     async function PM() {
+       const {
+         noaDevTools: MM
+       } = await iM.e(260).then((() => iM(42174)));
+       return MM
+     }
+     const nM = new class {
+         constructor() {
+           this.loadHost = PM, this.tools = aM
+         }
+         setHost(MM) {
+           this.tools = null === MM ? aM : MM.tools, this.loadHost = null === MM ? PM : async () => MM
+ ... (31 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/221.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/221.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L4)

```diff
-   36634: (QQ, WQ, XQ) => {
+   37320: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L6)

```diff
-       CreateCustomLobby: () => iQ
+       isMoreOptionsInFooter: () => fM,
+       showOnboardingPopup: () => YM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L8-L12` → after: `L9-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L9-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L9-L18) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L8-L12)

```diff
-     XQ(36641);
-     var wQ = XQ(4948),
-       qQ = XQ(61),
-       TQ = XQ(1739),
-       zQ = XQ(1081),
+     var OM = iM(44),
+       SM = iM(1188),
+       jM = iM(1429),
+       aM = iM(1520),
+       PM = iM(1135),
+       nM = iM(4675),
+       QM = iM(1645),
+       zM = iM(1641),
+       LM = iM(2362),
+       mM = iM(1116),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L14-L37` → after: `L20-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L20-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L20-L29) · [Before (L14-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L14-L37)

```diff
-       FQ = XQ(3398),
-       PQ = XQ(1165),
-       gQ = XQ(1238),
-       JQ = XQ(4912),
-       rQ = XQ(1507),
-       IQ = XQ(36644),
-       jQ = XQ(1226),
-       BQ = XQ(1384),
-       yQ = XQ(1567),
-       VQ = XQ(26),
-       DQ = XQ(1514),
-       pQ = XQ(663),
-       GQ = XQ(5290),
-       UQ = XQ(814),
-       bQ = XQ(1273),
-       vQ = XQ(1257),
- ... (8 more removed lines; see GitHub link above)
+       hM = iM(1144),
+       JM = iM(37322),
+       dM = iM(2488),
+       yM = iM(3881),
+       lM = iM(1142),
+       EM = iM(1398),
+       UM = iM(1303);
+     const GM = "OnboardingMorePanel";
+ 
+     function CM(MM) {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L39-L41` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L31-L32) · [Before (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L39-L41)

```diff
-         gameNameWithVariation: cQ,
-         close: AQ,
-         initialDefaultGamemode: RQ
+         open: rM,
+         onToggle: iM
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L45-L51` → after: `L36-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L36-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L36-L43) · [Before (L45-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L45-L51)

```diff
-       } = (0, jQ.C)(), CQ = (0, yQ.useNavigatePreserveSearch)(), [uQ, LQ] = (0, qQ.useState)("Enter"), [kQ, fQ] = (0, qQ.useState)(""), SQ = qQ.useRef(null), tQ = null === (WQ = UQ.e[cQ]) || void 0 === WQ ? void 0 : WQ.showWorldsInsteadOfCustomLobbies, oQ = tQ ? 1 : null === (XQ  … [truncated]
-       RQ || (RQ = "classic_creative" === cQ || "classic_creativeFlat" === cQ ? "creative" : "classic" === cQ ? "peaceful" : "survival");
-       const xQ = {
-         baseOptions: {
-           gameNameWithVariation: tQ ? "classic" : cQ,
-           name: "",
-           visibility: "unlisted"
+       } = (0, SM.A)();
+       return (0, UM.jsxs)("button", {
+         type: "button",
+         className: "OnboardingMoreOptions",
+         "aria-expanded": rM,
+         "aria-controls": rM ? GM : void 0,
+         onClick: () => {
+           rM || (0, nM.i)("more"), iM()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L53-L56` → after: `L45-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L45-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L45-L150) · [Before (L53-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L53-L56)

```diff
-         listedOptions: {
-           description: "",
-           color: "",
-           emojis: ""
+         children: [OM("homePage:onboardingMoreOptions"), (0, UM.jsx)(EM.b, {
+           name: rM ? "caret-up" : "caret-down"
+         })]
+       })
+     }
+     const eM = Object.entries(QM.d).filter((MM => {
+       let [, rM] = MM;
+       return "default" === rM.cosmeticPack
+     }));
+ 
+     function bM(MM) {
+       return zM.d.default.colourGroups[MM].colours.map(((MM, rM) => {
+         let {
+           rbg: iM,
+           order: OM
+         } = MM;
+ ... (90 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L58-L117` → after: `L152-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L152-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L152-L154) · [Before (L58-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L58-L117)

```diff
-         mapOptions: {
-           mapType: "classic_creativeFlat" === cQ ? "flat" : "default",
-           schematicIdList: []
-         },
-         worldOptions: null
-       };
-       tQ && (xQ.worldOptions = {
-         defaultGamemode: RQ,
-         disableProtectors: !1,
-         spawnProtection: !0,
-         disableTpRequests: !1,
-         disableTribeCreation: !1,
-         disableLobbySpawn: !1,
-         voidDeathHeight: -1e4,
-         worldBorder: null,
-         disableFallDamage: !0,
- ... (44 more removed lines; see GitHub link above)
+         sM = MM => {
+           const rM = {
+             ...mM.current,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L119-L128` → after: `L156-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L156-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L156-L161) · [Before (L119-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L119-L128)

```diff
-           }
-         })
-       }(0, qQ.useEffect)((() => {
-         JQ.b.getNewStarterName().then((QQ => {
-           NQ((WQ => "" !== WQ.baseOptions.name ? WQ : {
-             ...WQ,
-             baseOptions: {
-               ...WQ.baseOptions,
-               name: QQ
-             }
+           };
+           if (!QM) return mM.current = null, void WM(PM, rM);
+           mM.current = rM, zM(), hM.userContextManager.getCurrentUserContext().then((MM => {
+             mM.current === rM && (mM.current = null, WM(MM, rM))
+           })).catch((MM => {
+             console.warn("Couldn't put on the onboarding look held for the account", MM), mM.current === rM && (mM.current = null, EM.current && zM())
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L130-L215` → after: `L163-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L163-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L163-L191) · [Before (L130-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L130-L215)

```diff
-         })).catch((QQ => {
-           console.error("Error getting new starter name:", QQ)
-         }))
-       }), []), (0, qQ.useEffect)((() => {
-         "customSchematic" === YQ.mapOptions.mapType && null === ZQ && (0, PQ.postJsonWithMetricsCookiesAndJsonResponse)(`${gQ.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
-           retries: 0,
-           minTimeout: 3e3
-         }).then((QQ => {
-           OQ(QQ)
-         }))
-       }), [YQ.mapOptions.mapType, ZQ]);
-       const WW = {
-           tpRequests: {
-             isEnabled: () => !YQ.worldOptions.disableTpRequests,
-             UH: QQ => {
-               MQ("disableTpRequests", !QQ)
- ... (70 more removed lines; see GitHub link above)
+         };
+       (0, OM.useEffect)((() => () => {
+         PM.publishUpdateIfCurrent()
+       }), [PM]);
+       const DM = gM("eyes", bM.eyes),
+         kM = gM("skin", bM.skin);
+       return (0, UM.jsxs)(UM.Fragment, {
+         children: [(0, UM.jsx)("div", {
+           className: "OnboardingPresets",
+           children: eM.map(((MM, rM) => {
+             let [iM, {
+               cosmetics: OM
+             }] = MM;
+             const SM = function(MM, rM) {
+               return Object.entries(rM).every((rM => {
+                 let [iM, OM] = rM;
+ ... (13 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L217` → after: `L193-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L193-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L193-L206) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L217)

```diff
-                 (0, VQ.m)("worldCreation"), CQ((0, BQ.c)(cQ, YQ.baseOptions.name))
+                 (0, nM.i)(`preset.${iM}`);
+                 const {
+                   eyes: MM,
+                   skin: rM
+                 } = LM.current;
+                 sM({
+                   ...OM,
+                   ...void 0 !== MM && {
+                     eyes: uM("eyes", gM("eyes", OM.eyes)[0], MM)
+                   },
+                   ...void 0 !== rM && {
+                     skin: uM("skin", "0", rM)
+                   }
+                 })
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L219-L220` → after: `L208-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L208-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L208-L212) · [Before (L219-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L219-L220)

```diff
-               children: EQ("homePage:joinLobbyName", {
-                 lobbyName: YQ.baseOptions.name
+               children: (0, UM.jsx)("div", {
+                 className: "OnboardingPresetImage",
+                 style: {
+                   backgroundImage: `url(/textures/charSkins/previews/character_${iM}_preview.png)`
+                 }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L223-L434` → after: `L228-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L228-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L228-L248) · [Before (L223-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L223-L434)

```diff
-           })]
-         }), (0, hQ.jsx)("div", {
-           className: "CreateCustomLobbyTitleContainer",
-           children: (0, hQ.jsx)("div", {
-             className: "CreateCustomLobbyTitle",
-             children: EQ(tQ ? "homePage:createWorld" : "homePage:createCustomLobby")
-           })
-         }), (0, hQ.jsx)(lQ.c, {
-           locked: XW,
-           children: (0, hQ.jsxs)("div", {
-             className: "CreateCustomLobbyFields",
-             children: [!eQ && wW, eQ && (0, hQ.jsxs)("div", {
-               className: "BloxdForm",
-               children: [(0, hQ.jsx)("div", {
-                 className: "SectionTitle",
-                 children: EQ("customLobby:generalOptions")
- ... (196 more removed lines; see GitHub link above)
+           }), (0, UM.jsxs)("div", {
+             className: "OnboardingMoreColours",
+             children: [(0, UM.jsx)(RM, {
+               label: aM("homePage:onboardingEyeColour"),
+               colours: wM,
+               picked: null === DM || void 0 === DM ? void 0 : DM[1],
+               onPick: MM => {
+                 var rM;
+                 (0, nM.i)("eyes"), LM.current.eyes = MM, sM({
+                   eyes: uM("eyes", null !== (rM = null === DM || void 0 === DM ? void 0 : DM[0]) && void 0 !== rM ? rM : "0", MM)
+                 })
+               }
+             }), (0, UM.jsx)(RM, {
+               label: aM("homePage:onboardingSkinColour"),
+               colours: tM,
+               picked: null === kM || void 0 === kM ? void 0 : kM[1],
+ ... (5 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L477-L486` → after: `L254-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L254-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L254-L431) · [Before (L477-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L477-L486)

```diff
-   },
-   36658: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => FQ
-     });
-     var wQ = XQ(1081),
-       qQ = XQ.n(wQ),
-       TQ = XQ(61),
-       zQ = XQ(4894),
-       sQ = XQ(1145);
+     var WM = iM(1279),
+       sM = iM(19),
+       DM = iM(34929),
+       kM = iM(1396),
+       ZM = iM(1763);
+ 
+     function oM(MM) {
+       const {
+         t: rM
+       } = (0, SM.A)(), {
+         userContext: iM,
+         isUserContextUpdating: jM
+       } = (0, lM.b)(), PM = jM ? null : iM.getPlayerName(), QM = (0, OM.useRef)(null), [zM, LM] = (0, OM.useState)((() => null === PM ? (0, WM.f)() : null)), [mM, HM] = (0, OM.useState)(null), [hM, JM] = (0, OM.useState)(!1), dM = (0, OM.useRef)("ML"), GM = (0, yM.b)(), CM = (0,  … [truncated]
+         QM.current && (QM.current.value = MM), LM(MM)
+       }, gM = (0, OM.useRef)(!1);
+       (0, OM.useEffect)((() => {
+ ... (162 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L490-L525` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L435) · [Before (L490-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L490-L525)

```diff
-         locked: WQ,
-         children: XQ
-       } = QQ;
-       const wQ = (0, TQ.useRef)(null),
-         FQ = (0, zQ.b)(wQ, "y");
-       return (0, sQ.jsx)("div", {
-         ref: wQ,
-         className: qQ()("CreateCustomLobbyBody", {
-           CreateCustomLobbyBodyMoreAbove: FQ.before,
-           CreateCustomLobbyBodyMoreBelow: FQ.after
-         }),
-         "data-pad-ignore": WQ || void 0,
-         children: XQ
-       })
-     }
-   },
- ... (20 more removed lines; see GitHub link above)
+         onFinish: rM
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L529-L583` → after: `L439-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L439-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L439-L454) · [Before (L529-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L529-L583)

```diff
-       } = (0, TQ.C)();
-       return (0, PQ.jsxs)("div", {
-         className: "SchematicList",
-         children: [WQ && (0, PQ.jsx)(zQ.e, {}), !WQ && 0 === XQ.length && (0, PQ.jsx)("div", {
-           className: "NoSchematicsText",
-           children: gQ("worldBuilder:noSavedSchematic")
-         }), !WQ && XQ.map((QQ => (0, PQ.jsx)(sQ.d, {
-           source: {
-             type: "schematic",
-             schematic: QQ
-           },
-           gameWidth: "25%",
-           useLongRatio: !0,
-           onClick: () => {
-             wQ(QQ)
-           },
- ... (39 more removed lines; see GitHub link above)
+       } = (0, SM.A)(), jM = oM(rM), [QM, zM] = (0, OM.useState)(!1), LM = (0, PM.k)(((MM, rM) => fM(rM))), mM = () => {
+         zM(!QM)
+       };
+       return (0, OM.useEffect)((() => {
+         (0, nM.o)()
+       }), []), (0, UM.jsxs)("div", {
+         className: "Onboarding",
+         children: [(0, UM.jsx)("div", {
+           className: "OnboardingTitle",
+           children: iM("homePage:onboardingTitle")
+         }), (0, UM.jsxs)("div", {
+           className: "OnboardingBody",
+           children: [jM.field, (0, UM.jsx)(pM, {
+             moreOptions: QM,
+             onToggleMoreOptions: mM,
+             moreOptionsBelowPresets: !LM
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L585-L593` → after: `L456-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L456-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L456-L468) · [Before (L585-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L585-L593)

```diff
-         }), null !== sQ && (0, PQ.jsx)(FQ.h, {
-           schematic: sQ,
-           inSourceWorld: sQ.schematicId === XQ,
-           onSchematicUpdate: QQ => {
-             JQ(QQ)
-           },
-           onClose: () => {
-             JQ(null), qQ()
-           }
+         }), (0, UM.jsxs)("div", {
+           className: "OnboardingFooter",
+           children: [LM && (0, UM.jsx)(CM, {
+             open: QM,
+             onToggle: mM
+           }), (0, UM.jsx)(aM.p, {
+             className: "OnboardingPrimaryButton",
+             padDefaultFocus: !0,
+             loading: jM.busy,
+             disabled: !jM.ready,
+             onClick: jM.submit,
+             children: iM("homePage:onboardingDone")
+           })]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L616` → after: `L473-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L473-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L473-L521) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L616)

```diff
-   36653: (QQ, WQ, XQ) => {
+   37322: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => aM
+     });
+     var OM = iM(2039),
+       SM = iM(1573);
+     const jM = new class {
+       constructor() {
+         this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
+       }
+       save(MM, rM) {
+         MM !== this.userContext && this.sendHeld(), this.userContext = MM;
+         for (const [OM, SM] of rM) this.pending.set(OM, SM);
+         if (null !== this.timer) return;
+         const iM = this.lastSentAt + 1100 - Date.now();
+         iM <= 0 ? this.send(MM) : (this.timer = setTimeout((() => {
+ ... (33 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L619` → after: `L524-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L524-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L524-L526) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L619)

```diff
-       f: () => gQ
+       i: () => QM,
+       j: () => JM,
+       n: () => hM
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L621-L662` → after: `L528-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L528-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L528-L571) · [Before (L621-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L621-L662)

```diff
-     XQ(61);
-     var wQ = XQ(1081),
-       qQ = XQ.n(wQ),
-       TQ = XQ(4948),
-       zQ = XQ(382),
-       sQ = XQ(1226),
-       FQ = XQ(1145);
- 
-     function PQ(QQ) {
-       let {
-         value: WQ,
-         onChange: XQ,
-         showAll: wQ,
-         disabled: PQ = !1
-       } = QQ;
-       const {
- ... (26 more removed lines; see GitHub link above)
+     var OM = iM(143),
+       SM = iM(1279),
+       jM = iM(1202),
+       aM = iM(1144),
+       PM = iM(1826);
+     const nM = {
+       offline: "homePage:onboardingNameNoAccount",
+       outdated: "general:updatedReloading",
+       busy: "homePage:changeNameTooFast",
+       server: "homePage:changeNameFailed"
+     };
+ 
+     function QM(MM) {
+       return nM[MM]
+     }
+ 
+ ... (28 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L665-L701` → after: `L574-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L574-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L574-L582) · [Before (L665-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L665-L701)

```diff
- 
-     function gQ(QQ) {
-       let {
-         mapTypes: WQ,
-         value: XQ,
-         onChange: wQ,
-         showAll: PQ,
-         disabled: gQ = !1,
-         children: JQ
-       } = QQ;
-       const {
-         t: rQ
-       } = (0, sQ.C)();
-       return (0, FQ.jsxs)("div", {
-         className: qQ()("BloxdForm MapTypeForm", {
-           BasicOptions: !PQ
- ... (21 more removed lines; see GitHub link above)
+     async function JM(MM, rM) {
+       const iM = await LM(MM, "/index/name/update", {
+         name: rM
+       });
+       return mM(iM) ? iM : "err" in iM ? HM(iM.err) : iM.nameExists ? {
+         outcome: "taken"
+       } : (MM.setPlayerName(rM), {
+         outcome: "changed",
+         name: rM
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L704-L705` → after: `L585-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L585-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/221.js#L585-L605) · [Before (L704-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/221.js#L704-L705)

```diff
-   },
-   36641: () => {}
+ 
+     function dM(MM, rM) {
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+       const OM = 1 === rM ? 1 : 10 ** (rM - 1),
+         jM = String(OM + Math.floor(iM() * (10 ** rM - OM)));
+       return `${MM.slice(0,SM.g-rM)}${jM}`
+     }
+     const yM = [1, 2, 3, 4];
+     async function lM(MM, rM) {
+       const iM = await JM(MM, rM);
+       if ("taken" !== iM.outcome) return iM;
+       for (const OM of yM) {
+         const iM = dM(rM, OM),
+           SM = await JM(MM, iM);
+         if ("taken" !== SM.outcome) return SM
+       }
+ ... (5 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/222.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/222.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/222.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/222.js#L4)

```diff
-   36644: (QQ, WQ, XQ) => {
+   34959: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L7` → after: `L7-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L7-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/222.js#L7-L14) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/222.js#L7)

```diff
-       f: () => rQ
+       h: () => er,
+       i: () => Cr,
+       l: () => wr,
+       p: () => Qr,
+       q: () => Lr,
+       t: () => Hr,
+       v: () => br,
+       y: () => mr
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L9-L15` → after: `L16-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L16-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/222.js#L16-L309) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/222.js#L9-L15)

```diff
-     var wQ = XQ(61),
-       qQ = XQ(1404),
-       TQ = XQ(1226),
-       zQ = XQ(1391),
-       sQ = XQ(3732),
-       FQ = XQ(5283),
-       PQ = XQ(1145);
+     var OM = iM(243),
+       SM = iM(19),
+       jM = iM(83),
+       aM = iM(1717),
+       PM = iM(4809),
+       nM = iM(3230),
+       QM = iM(3235),
+       zM = iM(30);
+     const {
+       windows: LM,
+       target: mM,
+       stepDown: HM,
+       stepUp: hM,
+       noGain: JM
+     } = QM.c, dM = 1e3 / 60 * 1.08, yM = 1e3 / 55, lM = 1e3 / 45, EM = 1e3 / 30 * .92, UM = 1e3 / 30 * 1.08;
+     class GM {
+ ... (278 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L18-L51` → after: `L312-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L312-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/222.js#L312-L316) · [Before (L18-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/222.js#L18-L51)

```diff
-       let {
-         loading: WQ,
-         schematics: XQ,
-         onSchematicPicked: wQ,
-         selectedSchematicIdList: qQ = [],
-         disableAutoExport: FQ
-       } = QQ;
-       const {
-         t: gQ
-       } = (0, TQ.C)();
-       return (0, PQ.jsxs)("div", {
-         className: "SchematicList",
-         children: [WQ && (0, PQ.jsx)(zQ.e, {}), !WQ && 0 === XQ.length && (0, PQ.jsx)("div", {
-           className: "NoSchematicsText",
-           children: gQ("worldBuilder:noSavedSchematic")
-         }), !WQ && XQ.map((QQ => (0, PQ.jsx)(sQ.d, {
- ... (18 more removed lines; see GitHub link above)
+       return {
+         untilEpochMs: Date.now() + (MM.untilMs - performance.now()),
+         backoffMs: MM.backoffMs,
+         fps: MM.fps
+       }
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L55-L93` → after: `L320-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L320-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/222.js#L320-L333) · [Before (L55-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/222.js#L55-L93)

```diff
-       let {
-         ownedSchematics: WQ,
-         currentWorldSchematicId: XQ,
-         onClose: qQ
-       } = QQ;
-       const {
-         t: zQ
-       } = (0, TQ.C)(), [sQ, JQ] = (0, wQ.useState)(null);
-       return (0, PQ.jsxs)("div", {
-         className: "SchematicListWindow",
-         children: [null === sQ && (0, PQ.jsxs)(PQ.Fragment, {
-           children: [(0, PQ.jsx)("h1", {
-             className: "SchematicPopupTitle",
-             children: zQ("worldBuilder:schematicList")
-           }), (0, PQ.jsx)("h2", {
-             className: "SchematicPopupSubtitle",
- ... (23 more removed lines; see GitHub link above)
+       return void 0 === MM || "number" !== typeof MM.fps ? null : {
+         untilMs: performance.now() + (MM.untilEpochMs - Date.now()),
+         backoffMs: MM.backoffMs,
+         fps: MM.fps
+       }
+     }
+     let FM = null;
+ 
+     function BM() {
+       if (null === FM) {
+         const MM = new URLSearchParams(window.location.search).get("msaa");
+         FM = SM.d.get("clientEscMenuOptions").antiAliasing && ("0" === MM || "1" !== MM && !(0, PM.c)("antiAliasing") && (0, DM.d)())
+       }
+       return FM
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L97-L131` → after: `L337-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L337-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/222.js#L337-L344) · [Before (L97-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/222.js#L97-L131)

```diff
-       let {
-         ownedSchematics: WQ,
-         currentWorldSchematicId: XQ,
-         onClose: wQ
-       } = QQ;
-       qQ.NotificationProvider.showCustomPopup({
-         body: QQ => (0, PQ.jsx)(JQ, {
-           ownedSchematics: WQ,
-           currentWorldSchematicId: XQ,
-           onClose: QQ
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: wQ,
-         unlockPointerKey: "schematicListPopup"
-       })
-     }
- ... (19 more removed lines; see GitHub link above)
+       const rM = "number" === typeof MM ? Date.now() - MM : -1;
+       return rM >= 0 && rM < oM
+     }
+     let IM = null;
+ 
+     function KM() {
+       return IM ??= (0, jM.getDeviceDefaultPixelScale)(), qM(IM)
+     }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L134-L145` → after: `L347-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L347-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/222.js#L347-L442) · [Before (L134-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/222.js#L134-L145)

```diff
-       let {
-         onFilePicked: WQ
-       } = QQ;
-       const {
-         t: XQ
-       } = (0, jQ.C)(), [wQ, qQ] = (0, gQ.useState)(null), {
-         getRootProps: TQ,
-         getInputProps: zQ,
-         isDragActive: FQ
-       } = (0, sQ.c)({
-         onDrop: QQ => {
-           QQ.length > 0 && qQ(QQ[0])
+       const rM = SM.d.get("clientEscMenuOptions");
+       return rM.pixelSmoothing && !(0, PM.c)("pixelScale") && rM.pixelScale === MM
+     }
+     let TM = null,
+       VM = 0;
+ 
+     function cM() {
+       if (null === TM || VM !== YM()) {
+         var MM;
+         VM = YM();
+         const rM = Number(null !== (MM = new URLSearchParams(window.location.search).get(fM)) && void 0 !== MM ? MM : ""),
+           iM = NM();
+         if (rM > 0 && rM <= 1) TM = (0, nM.G)(iM, iM[0] / rM);
+         else {
+           const MM = AM(),
+             rM = Mr(iM, YM()),
+ ... (80 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L147-L463` → after: `L444-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L444-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/222.js#L444-L451) · [Before (L147-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/222.js#L147-L463)

```diff
-         useFsAccessApi: !1
-       }), JQ = wQ && wQ.size > 1024 * IQ.ad;
-       return (0, yQ.jsxs)("div", {
-         className: "SchematicUploadContainer",
-         children: [(0, yQ.jsxs)("div", {
-           ...TQ({
-             className: PQ()("SchematicUpload", {
-               ActiveDrag: FQ
-             })
-           }),
-           children: [(0, yQ.jsx)("input", {
-             ...zQ({
-               accept: ".bloxdschem"
-             })
-           }), !FQ && wQ ? (0, yQ.jsxs)(yQ.Fragment, {
-             children: [(0, yQ.jsx)("div", {
- ... (301 more removed lines; see GitHub link above)
+         iM = NM();
+       hr = YM();
+       const OM = cM();
+       Or = new WM({
+           changed: Pr,
+           ML: () => {
+             yr({
+               heldN: void 0
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L466-L471` → after: `L454-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L454-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/222.js#L454-L472) · [Before (L466-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/222.js#L466-L471)

```diff
-           onChosenNew: (QQ, WQ, XQ) => {
-             FQ("save-to-profile", {
-               schematicId: null,
-               name: QQ,
-               description: WQ,
-               includeLobbyCode: XQ
+           sQ: MM => {
+             var rM;
+             const iM = NM()[MM],
+               OM = {
+                 heldN: iM,
+                 heldAt: Date.now(),
+                 heldTarget: YM()
+               };
+             (null === (rM = AM()) || void 0 === rM ? void 0 : rM.failedUpN) === iM && (OM.failedUpN = void 0), yr(OM)
+           },
+           upFailed: MM => {
+             yr({
+               failedUpN: NM()[MM],
+               failedUpAt: Date.now()
+             })
+           },
+ ... (3 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L474-L491` → after: `L475-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L475-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/222.js#L475-L502) · [Before (L474-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/222.js#L474-L491)

```diff
-         });
-         else if ("Plugin|WorldBuilder|LoadSchematic" === QQ) ! function(QQ) {
-           let {
-             ownedSchematics: WQ,
-             onChosenFile: XQ,
-             onChosenPreset: wQ,
-             onClose: qQ
-           } = QQ;
-           JQ.NotificationProvider.showCustomPopup({
-             body: QQ => (0, yQ.jsx)(DQ, {
-               ownedSchematics: WQ,
-               onChosenFile: XQ,
-               onChosenPreset: wQ,
-               onClose: QQ
-             }),
-             middleScreenPopupClassName: "SchematicPopup",
- ... (2 more removed lines; see GitHub link above)
+         }, {
+           lowest: rr(iM, hr, OM),
+           startStep: OM,
+           noGain: vM(rM.noGain),
+           upWait: ir(rM, iM)
+         }),
+         function(MM) {
+           const rM = {
+             get step() {
+               return MM.currentStep()
+             },
+             get n() {
+               var MM;
+               return null !== (MM = Qr()) && void 0 !== MM ? MM : zr()
+             },
+             get scale() {
+ ... (12 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L493-L515` → after: `L504-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L504-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/222.js#L504-L571) · [Before (L493-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/222.js#L493-L515)

```diff
-         }({
-           ownedSchematics: WQ,
-           onChosenFile: async QQ => {
-             const WQ = wQ.Tj.from(await QQ.arrayBuffer()),
-               {
-                 gameNameWithVariation: zQ,
-                 lobbyName: sQ
-               } = (0, TQ.e)();
-             await (0, lQ.postBinaryWithMetricsCookiesAndCustomResponse)(`${XQ}/schematic/upload-schematic`, qQ.I["upload-schematic"].toBuffer({
-               gameNameWithVariation: zQ,
-               lobbyName: sQ,
-               schematic: WQ
-             }), {
-               retries: 1
-             }, lQ.HttpPayloadType.json)
-           },
- ... (7 more removed lines; see GitHub link above)
+         }(Or), Pr()
+     }
+ 
+     function dr() {
+       null !== Or && YM() !== hr && (TM = null, Jr())
+     }
+ 
+     function yr(MM) {
+       zM.g.setItem(ZM, {
+         ...AM(),
+         ...MM,
+         gpu: jr
+       })
+     }
+     let lr = 0,
+       Er = 0,
+ ... (52 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L517-L542` → after: `L573-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L573-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/222.js#L573-L576) · [Before (L517-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/222.js#L517-L542)

```diff
-         });
-         else if ("Plugin|WorldBuilder|ListSchematics" === QQ)(0, zQ.f)({
-           ownedSchematics: Array.isArray(WQ) ? WQ : WQ.schematics,
-           currentWorldSchematicId: Array.isArray(WQ) ? null : WQ.currentWorldSchematicId,
-           onClose: () => {
-             FQ("cancel", {})
-           }
-         });
-         else if ("Plugin|WorldBuilder|ExportWorld" === QQ) {
-           var PQ;
-           const QQ = null !== (PQ = WQ.schematic) && void 0 !== PQ ? PQ : WQ;
-           (0, pQ.j)({
-             schematic: QQ,
-             inSourceWorld: QQ.schematicId === WQ.currentWorldSchematicId,
-             onClose: () => {
-               FQ("cancel", {})
- ... (10 more removed lines; see GitHub link above)
+         }
+         iM && (0, SM.I)(String(iM.getParameter(iM.VENDOR)), String(iM.getParameter(iM.RENDERER)))
+       } catch {}
+       return null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/223.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/223.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/223.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/223.js#L4-L6)

```diff
-   36667: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       default: () => dQ
+   37546: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => JM,
+       e: () => CM
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8-L30` → after: `L9-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L9-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/223.js#L9-L95) · [Before (L8-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/223.js#L8-L30)

```diff
-     var wQ = XQ(1081),
-       qQ = XQ.n(wQ),
-       TQ = XQ(1581),
-       zQ = XQ(1073),
-       sQ = XQ(814),
-       FQ = XQ(1226),
-       PQ = XQ(1507),
-       gQ = XQ(1567),
-       JQ = XQ(3803),
-       rQ = XQ(1094),
-       IQ = XQ(3732),
-       jQ = XQ(2743),
-       BQ = XQ(1145);
-     const yQ = 2;
- 
-     function VQ(QQ) {
- ... (7 more removed lines; see GitHub link above)
+     iM(34999);
+     var OM = iM(44),
+       SM = iM(1516),
+       jM = iM(2039),
+       aM = iM(2084),
+       PM = iM(19),
+       nM = iM(2640),
+       QM = iM(37554),
+       zM = iM(37559),
+       LM = iM(34985),
+       mM = iM(34997),
+       HM = iM(35006),
+       hM = iM(1303);
+     const JM = (0, OM.memo)((function() {
+       var MM;
+       const {
+ ... (71 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L35-L37` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/223.js#L100-L101) · [Before (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/223.js#L35-L37)

```diff
-         game: WQ,
-         disabled: XQ,
-         showPlaceholder: wQ
+         custom: rM,
+         touch: iM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L39-L77` → after: `L103-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L103-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/223.js#L103-L172) · [Before (L39-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/223.js#L39-L77)

```diff
-       return null !== WQ ? (0, BQ.jsx)(IQ.d, {
-         source: VQ(WQ),
-         gameWidth: "100%",
-         useLongRatio: !0,
-         disabled: XQ,
-         entrySource: "customGamePlace"
-       }) : wQ ? (0, BQ.jsx)(IQ.c, {
-         gameWidth: "100%",
-         useLongRatio: !0
-       }) : null
-     }
- 
-     function pQ(QQ) {
-       var WQ;
-       let {
-         category: XQ,
- ... (23 more removed lines; see GitHub link above)
+       const jM = (0, SM.e)("aimingOverlay", "none"),
+         aM = "1.2vh",
+         PM = "0.3vh";
+       (0, OM.useEffect)((() => {
+         UM && bM(UM)
+       }), []);
+       const nM = (0, OM.useRef)(null !== rM);
+       return (0, OM.useLayoutEffect)((() => {
+         var MM;
+         rM ? null === (MM = EM.current) || void 0 === MM || MM.call(EM, eM(GM)) : nM.current && bM(GM);
+         nM.current = null !== rM
+       }), [rM]), (0, hM.jsxs)(hM.Fragment, {
+         children: ["sniper" === jM && (0, hM.jsxs)("div", {
+           ref: lM,
+           className: "GunCrosshairOverlayWrapper",
+           children: [(0, hM.jsx)("div", {
+ ... (54 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L79-L94` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/223.js#L174) · [Before (L79-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/223.js#L79-L94)

```diff
-           })
-         }), (0, BQ.jsx)("div", {
-           className: "CustomGamePlacePanelGames",
-           style: {
-             gridTemplateColumns: `repeat(${sQ?TQ.columnCount:yQ}, ${sQ?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
-           },
-           children: Array.from({
-             length: TQ.gameCount
-           }, ((QQ, WQ) => {
-             var XQ;
-             return (0, BQ.jsx)(DQ, {
-               game: null !== (XQ = PQ[WQ]) && void 0 !== XQ ? XQ : null,
-               disabled: FQ,
-               showPlaceholder: !zQ
-             }, WQ)
-           }))
+           })]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L101` → after: `L322-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L322-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/223.js#L322-L327) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/223.js#L101)

```diff
-         categories: WQ
+         settings: rM,
+         touch: iM,
+         inPreview: OM,
+         inEditor: jM,
+         pressed: aM = !1,
+         pressRef: PM
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L103-L125` → after: `L329-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L329-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/223.js#L329-L340) · [Before (L103-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/223.js#L103-L125)

```diff
- 
-       function XQ(QQ) {
-         const XQ = WQ[QQ];
-         return (0, BQ.jsx)(pQ, {
-           ...XQ,
-           landscape: !0
-         }, XQ.id)
-       }
-       return (0, BQ.jsxs)("div", {
-         className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
-         children: [(0, BQ.jsxs)("div", {
-           className: "CustomGamePlaceUpper",
-           children: [(0, BQ.jsxs)("div", {
-             className: "CustomGamePlaceMain",
-             children: [(0, BQ.jsxs)("div", {
-               className: "CustomGamePlaceRow",
- ... (7 more removed lines; see GitHub link above)
+       return (0, mM.jsx)("div", {
+         className: SM()("Crosshair", {
+           Touch: iM,
+           CrosshairInPreview: OM,
+           CrosshairInEditor: jM || OM
+         }),
+         ref: PM,
+         style: {
+           transform: hM(aM, rM.growOnClick),
+           ...yM(rM, iM)
+         },
+         children: "+"
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L128-L132` → after: `L343-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L343-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/223.js#L343-L611) · [Before (L128-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/223.js#L128-L132)

```diff
-     const UQ = ["section1", "section2", "section3", "section4", "section5", "section6"],
-       bQ = {
-         section1: {
-           gameCount: 4,
-           columnCount: 2
+ 
+     function EM(MM, rM) {
+       return MM / rM + "px"
+     }
+ 
+     function UM(MM, rM, iM, OM) {
+       return {
+         ...eM(MM, rM, iM),
+         width: EM(MM.w, iM),
+         height: EM(MM.h, iM),
+         background: OM
+       }
+     }
+ 
+     function GM(MM, rM, iM) {
+       return {
+ ... (253 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L134-L136` → after: `L613-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L613-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/223.js#L613-L616) · [Before (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/223.js#L134-L136)

```diff
-         section2: {
-           gameCount: 6,
-           columnCount: 6
+         outline: {
+           min: 0,
+           max: 4,
+           step: .1
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L138-L140` → after: `L618-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L618-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/223.js#L618-L621) · [Before (L138-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/223.js#L138-L140)

```diff
-         section3: {
-           gameCount: 8,
-           columnCount: 4
+         size: {
+           min: 25,
+           max: 400,
+           step: 5
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L142-L144` → after: `L623-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L623-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/223.js#L623-L626) · [Before (L142-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/223.js#L142-L144)

```diff
-         section4: {
-           gameCount: 6,
-           columnCount: 3
+         lineLength: {
+           min: .5,
+           max: 40,
+           step: .5
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L146-L148` → after: `L628-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L628-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/223.js#L628-L631) · [Before (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/223.js#L146-L148)

```diff
-         section5: {
-           gameCount: 3,
-           columnCount: 1
+         lineThickness: {
+           min: .5,
+           max: 10,
+           step: .5
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L150-L152` → after: `L633-L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L633-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/223.js#L633-L661) · [Before (L150-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/223.js#L150-L152)

```diff
-         section6: {
-           gameCount: 8,
-           columnCount: 4
+         gap: {
+           min: 0,
+           max: 40,
+           step: .5
+         },
+         dotSize: {
+           min: .5,
+           max: 12,
+           step: .5
+         },
+         circleRadius: {
+           min: 1,
+           max: 60,
+           step: .5
+         },
+         circleThickness: {
+ ... (13 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L154-L157` → after: `L663-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L663-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/223.js#L663-L685) · [Before (L154-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/223.js#L154-L157)

```diff
-       };
-     var vQ = XQ(1154);
- 
-     function dQ() {
+       },
+       SM = Object.freeze({
+         style: "classic",
+         color: 16777215,
+         opacity: 100,
+         outline: 1.2,
+         outlineColor: 0,
+         growOnClick: !0,
+         size: 100,
+         lines: !0,
+         lineLength: 6,
+         lineThickness: 2,
+         gap: 3,
+         tStyle: !1,
+         dot: !1,
+         dotSize: 2,
+ ... (7 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L160-L171` → after: `L688-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L688-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/223.js#L688-L738) · [Before (L160-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/223.js#L160-L171)

```diff
-         t: WQ
-       } = (0, FQ.C)(), XQ = (0, TQ.E)(), wQ = (0, vQ.i)(), rQ = (0, JQ.e)({
-         refresh: !0
-       }), IQ = XQ.customGamePlace;
-       if (!(0, zQ.o)(IQ)) return (0, BQ.jsx)(gQ.NavigatePreserveSearch, {
-         to: "/"
-       });
-       const jQ = sQ.e[IQ],
-         yQ = zQ.e[IQ],
-         VQ = null !== (QQ = null === rQ || void 0 === rQ ? void 0 : rQ[IQ]) && void 0 !== QQ ? QQ : null,
-         DQ = [];
-       for (let qQ = 0; qQ < yQ.length; qQ++) {
+         min: jM,
+         max: aM,
+         step: PM
+       } = OM[MM];
+       if (!Number.isFinite(rM)) return SM[MM];
+       const nM = (null !== (iM = String(PM).split(".")[1]) && void 0 !== iM ? iM : "").length,
+         QM = Number((Math.round(rM / PM) * PM).toFixed(nM));
+       return Math.min(aM, Math.max(jM, QM))
+     }
+ 
+     function aM(MM, rM, iM) {
+       const OM = "number" === typeof iM ? jM(rM, iM) : iM;
+       return {
+         ...MM,
+         [rM]: OM
+       }
+ ... (35 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L174-L215` → after: `L1014-L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1014-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/223.js#L1014-L1088) · [Before (L174-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/223.js#L174-L215)

```diff
-         if (!QQ) continue;
-         const XQ = yQ[qQ];
-         DQ.push({
-           id: XQ.id,
-           category: XQ.category,
-           title: WQ(XQ.displayTranslationKey),
-           tintColour: XQ.tintColour,
-           layout: bQ[QQ],
-           games: null !== (dQ = null === VQ || void 0 === VQ ? void 0 : VQ[XQ.id]) && void 0 !== dQ ? dQ : null
-         })
-       }
-       return (0, BQ.jsxs)("div", {
-         className: "CustomGamePlaceContainer AnimFadeIn",
-         children: [(0, BQ.jsx)("div", {
-           className: "BackgroundImage",
-           style: {
- ... (26 more removed lines; see GitHub link above)
+         if (iM) return iM;
+         const SM = this.makeSound(MM, rM);
+         for (const aM of null !== (jM = (0, OM.q)(rM)) && void 0 !== jM ? jM : []) {
+           var jM;
+           MM[aM] || this.makeSound(MM, aM)
+         }
+         return SM
+       }
+       makeSound(MM, rM) {
+         (0, EM.c)(rM);
+         const iM = new CM(rM);
+         return iM.setGlobalVolume(JM.d.get("soundVolume")), MM[rM] = iM, iM
+       }
+       freeSoundsAfterGame() {
+         this.idlePreloadGeneration++, this.idlePreloads.clear(), this.freeSounds()
+       }
+ ... (59 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/224.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/224.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/224.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/224.js#L2)

```diff
- export const ids = [224, 300];
+ export const ids = [224];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/224.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/224.js#L4)

```diff
-   41519: (QQ, WQ, XQ) => {
+   35037: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L6` → after: `L6-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L6-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/224.js#L6-L29) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/224.js#L6)

```diff
-       CharacterCustomisationUI: () => qW
+       MAX_BLOCK_ID: () => OM,
+       armourReductionOf: () => AM,
+       clipSizeOf: () => NM,
+       creativeAltNames: () => ar,
+       creativeCategoryOf: () => VM,
+       creativeItemCategories: () => PM,
+       creativeItemCategoryIcons: () => nM,
+       creativeItemIds: () => TM,
+       descriptionOf: () => oM,
+       displayNameOf: () => ZM,
+       dropsNothing: () => FM,
+       enchantmentPerksOf: () => KM,
+       gunTypeOf: () => vM,
+       harvestsNullLevelOf: () => BM,
+       isDevOnlyItem: () => ir,
+       itemIsDisabled: () => Sr,
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L8-L19` → after: `L31-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L31-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/224.js#L31-L51) · [Before (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/224.js#L8-L19)

```diff
-     var wQ = XQ(61),
-       qQ = XQ(2728),
-       TQ = XQ(1162),
-       zQ = XQ(1081),
-       sQ = XQ.n(zQ),
-       FQ = XQ(1273),
-       PQ = XQ(646),
-       gQ = XQ(1226),
-       JQ = XQ(2313),
-       rQ = XQ(1626),
-       IQ = XQ(2678);
-     const jQ = FQ.x.filter((QQ => !rQ.g.includes(QQ)));
+     const OM = 8558,
+       SM = "''WL&M3GT%cM)MK$YE1aM2'I+F+O_*c^*=%'%%%%%%%K>F>%%)K=H=%%[*W5_5['[R$ZW$S%[X&NH&L5C$W$5,KS&%]]&I%^Z&NM&b7TK$Y6G,Y>%M%M7P6$WD%Vc$LZ$OY$%+Q[&;S$/G$N&W%F$W%F$S$N&G'.F$c%`'1+%)41(1(+49$(2=b$/`N,RN,K/c_&Q0EC$O(''P`&O$%-%%^R2-*)&%;NV/ZT%IT%3XM$%%%%%_U$%b73.%%`-T-%%%%%%L9$M8X7 … [truncated]
+       jM = "S-$SW$$R&$SG2$)$'$)$4$)$X*$I6$-$%$%$cC1$WD1$%%%$]5$b7$RH4$%$%$%$%$%$%$%$%$%$)$N+$EG&$ZT%$IT%$3$XM$$%$%$%$%$%$Z1$Y[$$O`0$'$'$'$-&+&%&)&4&1&(&1*(*+&4&9&$&(&2&=&E$&'&%&%&%&1%_%$TV3$%$D.$$$Uc&$S$$S$$S$$S$$S$$S$$S$&S$&S$$S$$S$$S$$S$$S$$S$$S$$^1$S$$]I($%$M/$+$N-$%$Z$$%$I6$3 … [truncated]
+       aM = "Crafting Table|Cauldron|Sign|Iron Nugget|Gold Nugget|Diamond Nugget|Moonstone Nugget|Iron Ingot|Gold Ingot|Draugr Knight Sword|Cooked Potato|Cooked Beef|Raw Lamb|Cooked Lamb|Gold Watermelon Stag Antlers|Bear Fur|Cave Golem Eye|Frost Golem Eye|Draugr Knight Heart|Fur B … [truncated]
+       PM = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"],
+       nM = {
+         building: "Stone Bricks",
+         colours: "Magenta Wool",
+         nature: "Grass Block",
+         decoration: "Lantern",
+         utility: "Workbench",
+         tools: "Iron Pickaxe",
+         combat: "Iron Sword",
+         food: "Apple",
+         mobs: "Pig Spawn Orb",
+         materials: "Iron Bar",
+ ... (5 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L21-L22` → after: `L53-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L53-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/224.js#L53-L58) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/224.js#L21-L22)

```diff
-     function BQ(QQ, WQ) {
-       return jQ.includes(QQ) && "string" === typeof WQ && (0, IQ.h)(QQ, WQ)
+     function mM(MM) {
+       let rM = null;
+       return iM => {
+         var OM;
+         return rM ??= (0, zM.y)(MM, 10096), null !== (OM = rM[iM]) && void 0 !== OM ? OM : 0
+       }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L25-L29` → after: `L61-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L61-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/224.js#L61-L67) · [Before (L25-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/224.js#L25-L29)

```diff
-     function yQ(QQ) {
-       const WQ = {};
-       for (const XQ of jQ) {
-         const wQ = QQ[XQ];
-         void 0 !== wQ && BQ(XQ, wQ) && (WQ[XQ] = wQ)
+     function HM(MM, rM, iM) {
+       const OM = mM(MM);
+       let SM = null,
+         jM = [];
+       return MM => {
+         const aM = OM(MM);
+         if (0 !== aM) return null === SM && (SM = rM.split(zM.s), jM = new Array(SM.length)), jM[aM - 1] ??= iM(SM[aM - 1])
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L35` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/224.js#L76) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/224.js#L35)

```diff
-       return 0 === Object.keys(QQ).length
+       return MM === zM.g ? null : (0, zM.z)(MM)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L38-L42` → after: `L84-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L84-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/224.js#L84-L87) · [Before (L38-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/224.js#L38-L42)

```diff
-     function DQ(QQ, WQ) {
-       return Object.entries(QQ).every((QQ => {
-         let [XQ, wQ] = QQ;
-         return WQ[XQ] === wQ
-       }))
+     function GM(MM, rM, iM) {
+       UM !== (0, QM.h)() && (UM = (0, QM.h)(), lM.clear(), EM.clear());
+       let OM = MM.get(rM);
+       return void 0 === OM && (OM = iM(), void 0 !== OM && MM.set(rM, OM)), OM
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L44-L70` → after: `L89-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L89-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/224.js#L89-L108) · [Before (L44-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/224.js#L44-L70)

```diff
-     var pQ = XQ(2318),
-       GQ = XQ(3362),
-       UQ = XQ(2052),
-       bQ = XQ(1507),
-       vQ = XQ(2351),
-       dQ = XQ(26),
-       HQ = XQ(2850),
-       aQ = XQ(1548),
-       lQ = XQ(1165),
-       hQ = XQ(1927);
-     class iQ {
-       constructor() {
-         this.slots = new Map, this.before = new Map, this.accountId = null
-       }
-       moveTo(QQ) {
-         null !== QQ && QQ !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = QQ)
- ... (11 more removed lines; see GitHub link above)
+     const CM = HM("_$QN+###Y$#b'#%$=%/#I'%##7%))+%[%(#%9##%)(#%9(#%?(I$%'('%%('%%('%%('%#(%%%('%%('%%('%#(%%%('%#('%%('%%('%%('%%('%#(%%#(%%#(%%%('%#(%%%(#%I%##%%)M&%A)A%A)b&%b&(Q.%)(#%)(W%%#(1%#(-%#(#%#(Q$%#(G(%/(#%1('%I%$K&%+$+&3(-$%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$?&#%#$3(-$+&#%#$ … [truncated]
+       eM = HM("J,##O$##$#%/$#%/$#%/$-%9$1%#$)%A$#%b&$1%-$[+%S%$%%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%9$M2#+%-$#%/$#%/$#%/$#%%$-&/$-%+$9%3$-%E$$b%%I%$A%#$%%=$b(&-$-&#%/$#%/$#%/$#%%$-&)%'$-%#$7%M'$E+%#$%%#$?%K)$5%#$-&#%%$#%+$#%/$#%/$#%/$#%%$-&Q$%#$-& … [truncated]
+       bM = HM(".W]+#%#%#%#%#%#%#%#%%%#%#%#%%%#%#%#", "30|20|16|1|2|5|7|12|8|100|21|24|22|75", Number),
+       wM = HM("&PO+#####%####################$#%#,#%#####,%&#)#,#.#%#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1$FD$'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$1'#*# … [truncated]
+       tM = HM(">W]+#%#)$)%9$", "none|sniper", hM),
+       gM = HM("*W]+#%#%#%#%$%#)&%(%%%$%%)$)'%&", "semi_automatic|submachine|rifle|pistol|shotgun", hM),
+       uM = mM("]%LV+#c&M.$4C2$44$44$44$49$4/$4/$4/$"),
+       RM = mM("$a&#$9$Z$K?$&;$$[($(c($6Y&$$)$$$$&G%$*$$$*$(V*$Z$V$$$#$$#$&+$$#$$%$$$$$$$$$$&$$$#$$($,E0$$T&$&V$$D$`-$(%$6*$$%$T$M$$$L%$6;$$$$$2$$W:$*D^%$$N%$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$2O'$2*$2*$2*$2*$2*$2*$2*$2*$2*$:*$0=$&^$$$N$$(Q$$$]$$.#$&6$$K%$:.$*I$$*&$*S+$6,$"),
+       pM = HM("$DO+#######%#$ZD$$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%($Z$(.1($'(.1($'(.1($'(.1($2(.+($((.+($((.+($((.+($C&($@$", "1|2|3|4|5", (MM => "" === MM ? null : Number(MM))),
+       WM = HM("$F(#$%$$&#$)%$)%$0$$,$$%$$&$$6$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$@$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$'$$I$%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$.#$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$' … [truncated]
+       sM = HM(",QN+####$/#+#+###+#4####1+##S(+$$#2A#$H%#$%0$%0$%0$%0$%0$%0$%0$%0$%0$U.0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0:C/(:.($W$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$(?+$#(#0$%0&&(&#(,#+$#(#0$%0&&(&#(,#+$#(#0$%0 … [truncated]
+       DM = HM(",$#0#$-#-$&#%2#%(#$$$$'%B$##%b$&)$$#$#%A&$&#)%,$%#$#%$&%###%:#$$$$##$%)$%%#)$1).)$$#)$))%$#)$%$$&)B%&#)#&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%$$'$&#$$%%$/)$))$))$))$))$))$))$))$))$))$))$))$))$))$))$))&)$#)$%%#$,#%2%%($$$*$$#%#$#)$1)$1)$1)$1)$1)$1)$))$))$) … [truncated]
+       kM = HM("$b&#$R)#$)%$)%$)%$)%$1%$)%$)%$)%$)%$)%$)%$)%$)%$)%$_7%$'%$'%$'%$'%$'%$'%$-%$'%$'%$'%$'%$'%$'%$'%$a$#$T%%$)%$)%$)%$)%$1%$)%$)%$)%$)%$)%$)%$)%$)%$)%$>#B#'$V$&4%'$%'6%'$)#$b%#$%)$G$%$'%$'%$'%$'%$'%$'%$-%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$-%$'%$'%$'%$'%$'%$'%$' … [truncated]
+ 
+     function ZM(MM) {
+       const rM = dM(MM);
+ ... (4 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L72-L136` → after: `L110-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L110-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/224.js#L110-L116) · [Before (L72-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/224.js#L72-L136)

```diff
-     class cQ extends HQ.d {
-       constructor() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new iQ;
-         super("saved outfits", (async WQ => {
-           const XQ = QQ.isFor(WQ.whamm),
-             wQ = new Map(QQ.slots),
-             qQ = await aQ.e.getSavedOutfits(WQ);
-           return XQ ? QQ.overlay(qQ, wQ) : qQ
-         })), this.unsaved = QQ, this.started = !1, this.sending = !1
-       }
-       ensureLoaded() {
-         if (this.started) {
-           if (!this.getState().failed) return
-         } else this.started = !0, this.watchAccount();
-         this.refresh()
-       }
- ... (49 more removed lines; see GitHub link above)
+ 
+     function oM(MM) {
+       const rM = yM(MM);
+       return null !== rM ? rM : GM(EM, MM, (() => {
+         var rM;
+         return null !== (rM = (0, zM.D)(ZM(MM))) && void 0 !== rM ? rM : void 0
+       }))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L156-L248` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/224.js#L120) · [Before (L156-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/224.js#L156-L248)

```diff
-       let {
-         wornOutfit: WQ,
-         onApply: XQ,
-         onOverwrite: qQ,
-         onDelete: zQ
-       } = QQ;
-       const {
-         t: FQ
-       } = (0, gQ.C)(), {
-         accountId: PQ,
-         data: JQ
-       } = (0, HQ.f)(AQ, !1), {
-         userContext: rQ
-       } = (0, TQ.c)();
-       async function IQ(QQ, WQ) {
-         const XQ = await nQ.NotificationProvider.showPromptPopup({
- ... (77 more removed lines; see GitHub link above)
+       return CM(MM)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L254-L255` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/224.js#L123-L124) · [Before (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/224.js#L254-L255)

```diff
-     function KQ(QQ, WQ, XQ) {
-       return null !== QQ && !(0, ZQ.e)(OQ.e, WQ, XQ, QQ.collected, QQ.ownedPacks)
+     function YM(MM) {
+       return eM(MM)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L259-L265` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/224.js#L128) · [Before (L259-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/224.js#L259-L265)

```diff
-       let {
-         locked: WQ,
-         children: XQ
-       } = QQ;
-       return WQ ? (0, xQ.jsx)(MQ, {
-         children: XQ
-       }) : XQ
+       return bM(MM)
```
