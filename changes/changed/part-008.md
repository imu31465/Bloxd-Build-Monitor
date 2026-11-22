# Changed — Bundle Modifications Report (Part 008 / 047)

- **Updated at**: `2026-11-22T23:29 JST`
- **Part**: `8 / 47` (**290** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 007](part-007.md) · [Part 009 →](part-009.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/203.js` (bqoxjr.2558012f → 3lwmg.ecbaa066 · continued)

- **File**: `bundles/bloxd.io/chunks/js/203.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd)

#### 13. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L278-L325` → after: `L395-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L395-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/203.js#L395-L437) · [Before (L278-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/203.js#L278-L325)

```diff
-         }))
-       }
-     }
- 
-     function GQ(QQ, FQ) {
-       return FQ > 0 ? `${QQ}, its module's memory ${Math.round(FQ/2**20)} MiB` : QQ
-     }
-   },
-   35938: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => LQ,
-       h: () => qQ,
-       i: () => oQ,
-       l: () => DQ
-     });
-     const LQ = 1024,
- ... (32 more removed lines; see GitHub link above)
+         }
+       }
+     }
+     async function Hk(kk, ek, ik) {
+       const Dk = (0, Pk.b)(await ik.fetchPack(ek));
+       if (null !== Dk) return {
+         pack: Dk,
+         key: ek
+       };
+       const fk = await ik.packKey(kk);
+       if (null === fk) return null;
+       const Sk = (0, Pk.b)(await ik.fetchPack(fk));
+       if (null === Sk) throw new Error(`no texture pack at ${fk}`);
+       return {
+         pack: Sk,
+         key: fk
+ ... (27 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/204.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/204.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1)

#### 1. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/204.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/204.js#L4)

```diff
-   40890: (QQ, FQ, wQ) => {
+   33831: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L6-L7` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/204.js#L6-L9) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/204.js#L6-L7)

```diff
-       loadGlbAsset: () => GF,
-       loadGlbTree: () => MF
+       packDisplayName: () => Uk,
+       packModelMessage: () => Hk,
+       packModelSummary: () => lk,
+       refusedPackModels: () => wk
```

#### 3. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L9-L63` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/204.js#L11-L18) · [Before (L9-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/204.js#L9-L63)

```diff
-     var LQ = wQ(37452),
-       qQ = wQ(40897),
-       oQ = wQ(35914),
-       DQ = wQ.n(oQ);
- 
-     function kQ() {
-       return DQ()('(()=>{class QQ extends Error{}function FQ(FQ,wQ){const LQ=FQ._malloc(wQ);if(0===LQ)throw new QQ(`Draco: the decoder\'s heap refused ${wQ} bytes`);return LQ}function wQ(QQ){return{[QQ.DT_FLOAT32]:[Float32Array,5126],[QQ.DT_INT8]:[Int8Array,5120],[QQ.DT_INT16]:[I … [truncated]
-     }
-     var vQ = wQ(96);
-     const mQ = 1e3;
-     let uQ = null,
-       HQ = null;
-     const bQ = [],
-       YQ = [];
-     let xQ = 0;
-     const AQ = {
- ... (39 more removed lines; see GitHub link above)
+     var Dk = ik(33838),
+       fk = ik(33846);
+     const Sk = "DRACO",
+       bk = 0,
+       rk = 1,
+       Pk = 0,
+       mk = 1,
+       Mk = 32768;
```

#### 4. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L66-L92` → after: `L21-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L21-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/204.js#L21-L36) · [Before (L66-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/204.js#L66-L92)

```diff
-       const FQ = bQ.indexOf(QQ); - 1 !== FQ && bQ.splice(FQ, 1);
-       const wQ = YQ.shift();
-       wQ && pQ(wQ)
-     }
- 
-     function GQ(QQ, FQ) {
-       QQ.busy = !0, QQ.releaseTimer && (clearTimeout(QQ.releaseTimer), QQ.releaseTimer = null);
-       QQ.worker.then((wQ => {
-         const LQ = xQ++;
-         wQ.onmessage = qQ => {
-           let {
-             data: oQ
-           } = qQ;
-           if (("decoded" === oQ.id || "decodeError" === oQ.id) && oQ.seq === LQ) {
-             if (wQ.onmessage = null, wQ.onerror = null, "decoded" === oQ.id) return AQ.decodes++, FQ.resolve({
-               indices: oQ.indices,
- ... (11 more removed lines; see GitHub link above)
+       const ek = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
+       let ik = 0;
+       const Dk = () => {
+           if (ik >= kk.byteLength) throw new RangeError("past the stream");
+           return kk[ik++]
+         },
+         fk = () => {
+           if (ik + 4 > kk.byteLength) throw new RangeError("past the stream");
+           const Dk = ek.getUint32(ik, !0);
+           return ik += 4, Dk
+         },
+         Kk = () => {
+           let kk = 0;
+           for (let ek = 0; ek < 35; ek += 7) {
+             const ik = Dk();
+             if (kk += (127 & ik) * 2 ** ek, 0 === (128 & ik)) return kk
```

#### 5. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L94-L102` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/204.js#L38) · [Before (L94-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/204.js#L94-L102)

```diff
-         }, wQ.onerror = LQ => {
-           wQ.onmessage = null, wQ.onerror = null, wQ.terminate(), FQ.reject(new Error(`Draco: the decode worker failed: ${LQ.message}`)), MQ(QQ)
-         };
-         const qQ = {
-           id: "decode",
-           seq: LQ,
-           data: FQ.data,
-           attributeIds: FQ.attributeIds,
-           expected: FQ.expected
+           throw new RangeError("varint too long")
```

#### 6. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L158-L173` → after: `L41-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L41-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/204.js#L41-L51) · [Before (L158-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/204.js#L158-L173)

```diff
-         return function(QQ, FQ) {
-           var wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ;
-           const eQ = new Map,
-             MQ = wQ => {
-               let LQ = eQ.get(wQ);
-               if (!LQ) {
-                 var qQ;
-                 const oQ = QQ.bufferViews[wQ],
-                   DQ = null !== (qQ = oQ.byteOffset) && void 0 !== qQ ? qQ : 0;
-                 LQ = {
-                   index: wQ,
-                   bytes: FQ.subarray(DQ, DQ + oQ.byteLength),
-                   byteStride: oQ.byteStride
-                 }, eQ.set(wQ, LQ)
-               }
-               return LQ
+         for (let kk = 0; kk < Sk.length; kk++)
+           if (Dk() !== Sk.charCodeAt(kk)) return null;
+         const ek = Dk(),
+           xk = Dk(),
+           nk = Dk(),
+           Uk = Dk(),
+           Hk = Dk() | Dk() << 8;
+         if (2 !== ek) return null;
+         0 !== (Hk & Mk) && function(kk, ek, ik) {
+           const Dk = () => {
+               ek(ik())
```

#### 7. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L175-L192` → after: `L53-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L53-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/204.js#L53-L60) · [Before (L175-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/204.js#L175-L192)

```diff
-             GQ = new Map,
-             pQ = FQ => {
-               let wQ = GQ.get(FQ);
-               if (!wQ) {
-                 var LQ;
-                 const qQ = QQ.accessors[FQ];
-                 wQ = {
-                   index: FQ,
-                   count: qQ.count,
-                   type: qQ.type,
-                   numComponents: iQ.l[qQ.type],
-                   componentType: qQ.componentType,
-                   normalized: null !== (LQ = qQ.normalized) && void 0 !== LQ && LQ,
-                   byteOffset: qQ.byteOffset,
-                   bufferView: void 0 === qQ.bufferView ? null : MQ(qQ.bufferView),
-                   min: qQ.min,
- ... (2 more removed lines; see GitHub link above)
+             fk = () => {
+               let ik = 1,
+                 fk = !0;
+               for (; ik > 0;) {
+                 ik--, fk || Dk(), fk = !1;
+                 const Sk = kk();
+                 for (let ik = 0; ik < Sk; ik++) Dk(), ek(kk());
+                 ik += kk()
```

#### 8. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L196-L400` → after: `L63-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L63-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/204.js#L63-L76) · [Before (L196-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/204.js#L196-L400)

```diff
-             cQ = null !== (wQ = null === (LQ = QQ.extensionsUsed) || void 0 === LQ ? void 0 : LQ.includes("KHR_draco_mesh_compression")) && void 0 !== wQ && wQ,
-             CQ = (null !== (qQ = QQ.meshes) && void 0 !== qQ ? qQ : []).map(((FQ, wQ) => {
-               const LQ = FQ.primitives.map(((FQ, wQ) => {
-                 var LQ, qQ, oQ;
-                 const DQ = cQ ? null === (LQ = FQ.extensions) || void 0 === LQ ? void 0 : LQ.KHR_draco_mesh_compression : void 0;
-                 let kQ = null;
-                 const vQ = [];
-                 if (DQ) {
-                   const wQ = {
-                     vertices: QQ.accessors[FQ.attributes.POSITION].count,
-                     indices: void 0 === FQ.indices ? 0 : QQ.accessors[FQ.indices].count,
-                     components: {}
-                   };
-                   kQ = {
-                     bufferView: MQ(DQ.bufferView),
-                     attributeIds: {},
- ... (189 more removed lines; see GitHub link above)
+             Sk = kk();
+           for (let bk = 0; bk < Sk; bk++) kk(), fk();
+           fk()
+         }(Kk, (ek => {
+           if (ik + ek > kk.byteLength) throw new RangeError("past the stream");
+           ik += ek
+         }), Dk);
+         const wk = xk < 2 ? fk : Kk;
+         if (nk === bk) return {
+           faces: 0,
+           vertices: fk()
+         };
+         if (nk !== rk) return null;
+         if (Uk === Pk) {
```

#### 9. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L402-L408` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/204.js#L78-L79) · [Before (L402-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/204.js#L402-L408)

```diff
-             kind: LQ,
-             data: oQ.bytes,
-             offset: null !== (wQ = qQ.byteOffset) && void 0 !== wQ ? wQ : 0,
-             stride: kQ,
-             components: DQ,
-             glType: qQ.componentType,
-             isNormalized: qQ.normalized
+             faces: wk(),
+             vertices: wk()
```

#### 10. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L410-L427` → after: `L81-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L81-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/204.js#L81-L84) · [Before (L410-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/204.js#L410-L427)

```diff
-         })),
-         wQ = QQ.indices,
-         LQ = wQ && IQ(wQ, UQ),
-         qQ = QQ.position;
-       return new SQ.h(FQ, LQ, qQ.count, ...NQ(qQ, FQ))
-     }
-     const KQ = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];
- 
-     function zQ(QQ, FQ) {
-       const wQ = FQ.attributes.map((QQ => {
-         let {
-           kind: FQ,
-           data: wQ,
-           size: LQ,
-           byteOffset: qQ,
-           byteStride: oQ,
- ... (2 more removed lines; see GitHub link above)
+         }
+         if (Uk !== mk) return null;
+         Dk(), xk < 2 && Kk();
+         const lk = Kk();
```

#### 11. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L429-L435` → after: `L86-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/204.js#L86-L87) · [Before (L429-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/204.js#L429-L435)

```diff
-           kind: FQ,
-           data: wQ,
-           offset: qQ,
-           stride: oQ,
-           components: LQ,
-           glType: 5120 + KQ.indexOf(wQ.constructor),
-           isNormalized: DQ
+           faces: Kk(),
+           vertices: lk
```

#### 12. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L437-L499` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/204.js#L89-L90) · [Before (L437-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/204.js#L437-L499)

```diff
-       }));
-       return new SQ.h(wQ, FQ.indices, FQ.totalVertices, ...NQ(QQ.position, wQ))
-     }
- 
-     function lQ(QQ) {
-       const FQ = QQ.lastIndexOf("/");
-       return FQ < 0 ? QQ : QQ.substring(FQ + 1)
-     }
- 
-     function jQ(QQ) {
-       const FQ = QQ.lastIndexOf("/");
-       return FQ < 0 ? "" : QQ.substring(0, FQ + 1)
-     }
- 
-     function aQ(QQ) {
-       return QQ.name || `node${QQ.index}`
- ... (47 more removed lines; see GitHub link above)
+       } catch {
+         return null
```

#### 13. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L503-L592` → after: `L94-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/204.js#L94-L97) · [Before (L503-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/204.js#L503-L592)

```diff
-     function PQ(QQ, FQ) {
-       let {
-         translation: wQ,
-         rotation: LQ,
-         scale: qQ
-       } = QQ;
-       const oQ = new Float32Array(16);
-       return (0, CQ.d)(qQ, 0, LQ, 0, wQ, 0, oQ), FQ && (0, CQ.p)(oQ, FQ, 0, oQ), oQ
-     }
-     class ZQ {
-       constructor(QQ, FQ, wQ, LQ) {
-         this.model = QQ, this.decode = FQ, this.fileInfo = wQ, this.uniqueRootUrl = LQ, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
-         const qQ = new Set,
-           oQ = (FQ, wQ) => {
-             const LQ = QQ.nodes[FQ];
-             if (this.parents.has(LQ)) throw new iQ.g(`/nodes/${FQ}: Invalid recursive node hierarchy`);
- ... (74 more removed lines; see GitHub link above)
+     function xk(kk, ek, ik) {
+       var Dk, fk;
+       if (null === (Dk = null === (fk = kk.extensionsUsed) || void 0 === fk ? void 0 : fk.includes("KHR_draco_mesh_compression")) || void 0 === Dk || !Dk) return null;
+       for (const Uk of null !== (Sk = kk.meshes) && void 0 !== Sk ? Sk : []) {
```

#### 14. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L594-L637` → after: `L99-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L99-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/204.js#L99-L111) · [Before (L594-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/204.js#L594-L637)

```diff
-         let {
-           texture: LQ,
-           transform: qQ
-         } = QQ;
-         const {
-           sampler: oQ,
-           image: DQ
-         } = this.model.textures[LQ], {
-           bufferView: kQ,
-           mimeType: vQ,
-           name: mQ
-         } = this.model.images[DQ], uQ = qQ && {
-           ...qQ.offset ? {
-             uOffset: qQ.offset[0],
-             vOffset: qQ.offset[1]
-           } : {},
- ... (28 more removed lines; see GitHub link above)
+         for (const Dk of Uk.primitives) {
+           var bk, rk, Pk, mk, Mk, xk;
+           const fk = null === (bk = Dk.extensions) || void 0 === bk ? void 0 : bk.KHR_draco_mesh_compression;
+           if ("object" !== typeof fk || null === fk) continue;
+           const Sk = null === (rk = kk.bufferViews) || void 0 === rk ? void 0 : rk[fk.bufferView];
+           if (null === ek || void 0 === Sk) return nk;
+           const Uk = null !== (Pk = Sk.byteOffset) && void 0 !== Pk ? Pk : 0,
+             Hk = Kk(ek.subarray(Uk, Uk + Sk.byteLength));
+           if (null === Hk && !ik) continue;
+           const wk = null !== (mk = kk.accessors) && void 0 !== mk ? mk : [],
+             lk = null === (Mk = wk[Dk.attributes.POSITION]) || void 0 === Mk ? void 0 : Mk.count,
+             pk = void 0 === Dk.indices ? 0 : null === (xk = wk[Dk.indices]) || void 0 === xk ? void 0 : xk.count;
+           if (null === Hk || void 0 === lk || void 0 === pk || 3 * Hk.faces !== pk || Hk.vertices > lk) return nk
```

#### 15. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L641-L695` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/204.js#L116) · [Before (L641-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/204.js#L641-L695)

```diff
-     async function yQ(QQ, FQ, wQ, LQ, qQ, oQ) {
-       let DQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
-       const kQ = function(QQ, FQ, wQ) {
-           return "string" !== typeof FQ ? {
-             url: "",
-             rootUrl: QQ,
-             name: wQ()
-           } : FQ ? FQ.startsWith("data:") ? {
-             url: FQ,
-             rootUrl: QQ,
-             name: ""
-           } : QQ ? {
-             url: QQ + FQ,
-             rootUrl: QQ,
-             name: FQ
-           } : {
- ... (39 more removed lines; see GitHub link above)
+     const nk = "has a Draco stream whose counts don't match its accessors";
```

#### 16. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L698-L796` → after: `L119-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/204.js#L119-L120) · [Before (L698-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/204.js#L698-L796)

```diff
-       (0, dQ.g)(QQ) || (QQ.geometry && QQ.geometry.useBoundingInfoFromGeometry ? QQ._updateBoundingInfo() : QQ.refreshBoundingInfo(!0, !0))
-     }
-     class LF {
-       constructor(QQ, FQ) {
-         this.lA = QQ, this.decode = FQ, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
-       }
-       viewBytes(QQ) {
-         let FQ = this.viewData.get(QQ.index);
-         return FQ || (FQ = this.bufferData.then((() => QQ.bytes)), this.viewData.set(QQ.index, FQ)), FQ
-       }
-       viewBuffer(QQ) {
-         let FQ = this.viewBuffers.get(QQ.index);
-         return FQ || (FQ = this.viewBytes(QQ).then((QQ => new((0, BQ.c)().Dx)(this.lA.Wx(), QQ, !1))), this.viewBuffers.set(QQ.index, FQ)), FQ
-       }
-       vertexBuffer(QQ, FQ) {
-         const {
- ... (83 more removed lines; see GitHub link above)
+       var ek;
+       return null !== (ek = kk.name) && void 0 !== ek ? ek : kk.fromFolderName || kk.id
```

#### 17. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L799-L803` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/204.js#L123-L124) · [Before (L799-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/204.js#L799-L803)

```diff
-     function YF(QQ, FQ) {
-       if (FQ && Object.keys(FQ).length > 0) {
-         const wQ = QQ.metadata = QQ.metadata || {};
-         (wQ.oN = wQ.oN || {}).extras = FQ
-       }
+     function Hk(kk, ek, ik) {
+       return `Texture pack "${kk}": model "${ek}" was not loaded because it ${ik}. The default model is used instead.`
```

#### 18. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L806-L868` → after: `L127-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L127-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/204.js#L127-L132) · [Before (L806-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/204.js#L806-L868)

```diff
-     function xF(QQ, FQ) {
-       FQ.position = QQ.translation ? DF.Ox.FromArray(QQ.translation) : DF.Ox.Zero(), FQ.rotationQuaternion = QQ.rotation ? DF.Quaternion.FromArray(QQ.rotation) : DF.Quaternion.Identity(), FQ.ck = QQ.scale ? DF.Ox.FromArray(QQ.scale) : DF.Ox.One()
-     }
-     class AF {
-       constructor(QQ, FQ) {
-         if (this.lA = QQ, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, FQ) {
-           const FQ = QQ.Wx(),
-             wQ = QQ.zN.add((() => {
-               this.dispose()
-             })),
-             LQ = FQ.onContextRestoredObservable.add((() => {
-               for (const QQ of [...this.geometries, ...this.meshes, ...this.textures]) QQ._rebuild()
-             }));
-           this.release = () => {
-             QQ.zN.remove(wQ), FQ.onContextRestoredObservable.remove(LQ)
-           }
- ... (47 more removed lines; see GitHub link above)
+     function wk(kk, ek, ik) {
+       let {
+         strictDraco: Sk = !1
+       } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const bk = {};
+       for (const [rk, Pk] of Object.entries(ek)) {
```

#### 19. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L870-L931` → after: `L134-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L134-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/204.js#L134-L141) · [Before (L870-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/204.js#L870-L931)

```diff
-         FQ && (FQ.blockMaterialDirtyMechanism = !0);
-         try {
-           LQ = this.loadScene()
-         } finally {
-           null === FQ || void 0 === FQ || FQ._forceBlockMaterialDirtyMechanism(wQ)
-         }
-         await LQ;
-         const {
-           root: qQ,
-           tree: oQ
-         } = this;
-         qQ && (qQ.Qr(!0), oQ.meshes.push(qQ), oQ.rootNodes.push(qQ));
-         for (const kQ of this.asset.model.nodes) {
-           const QQ = this.nodeObjects.get(kQ.index);
-           QQ && ["TransformNode", "LiteNode"].includes(QQ.getClassName()) && oQ.transformNodes.push(QQ);
-           for (const FQ of null !== (DQ = this.nodePrimitives.get(kQ.index)) && void 0 !== DQ ? DQ : []) {
- ... (46 more removed lines; see GitHub link above)
+         if (Pk.startsWith("data:")) try {
+           const kk = new Uint8Array((0, fk.q)(Pk));
+           if (ek = (0, Dk.d)(kk), null === ek) {
+             const {
+               json: ik,
+               bin: Dk
+             } = (0, fk.z)(kk);
+             ek = xk(ik, Dk, Sk)
```

#### 20. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L933-L1038` → after: `L143-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L143-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/204.js#L143-L146) · [Before (L933-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/204.js#L933-L1038)

```diff
-           return this.nodeObjects.get(QQ.index)
-         }))
-       }
-       loadMesh(QQ, FQ, wQ, LQ) {
-         const qQ = [],
-           oQ = aQ(FQ);
-         if (1 === wQ.primitives.length) {
-           const LQ = wQ.primitives[0];
-           qQ.push(this.loadPrimitive(`${QQ}/primitives/${LQ.index}`, oQ, LQ, (QQ => {
-             this.nodeObjects.set(FQ.index, QQ), this.nodePrimitives.set(FQ.index, [QQ])
-           })))
-         } else {
-           const LQ = this.node(oQ, !1);
-           this.nodeObjects.set(FQ.index, LQ);
-           const DQ = [];
-           this.nodePrimitives.set(FQ.index, DQ);
- ... (90 more removed lines; see GitHub link above)
+         } catch {
+           ek = "is not a binary glTF 2.0 file"
+         } else ek = "loads data from outside the file";
+         ek && (bk[rk] = ek, ik && console.warn(Hk(kk, rk, ek)))
```

#### 21. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L1053-L1082` → after: `L151-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L151-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/204.js#L151-L156) · [Before (L1053-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/204.js#L1053-L1082)

```diff
-     function oQ(QQ) {
-       return (0, LQ.d)() ? `https://${qQ.d.discordDomain}/${QQ.href}` : QQ.href
-     }
-     const DQ = {
-       scriptUrl: oQ(new wQ.U(wQ(40901))),
-       wasmBinaryUrl: oQ(new wQ.U(wQ(40910)))
-     }
-   },
-   35914: QQ => {
-     QQ.exports = function(QQ, FQ, wQ, LQ) {
-       var qQ = self || window;
-       try {
-         try {
-           var oQ;
-           try {
-             oQ = new qQ.Blob([QQ])
- ... (14 more removed lines; see GitHub link above)
+     function lk(kk, ek) {
+       const ik = Object.keys(ek);
+       if (0 === ik.length) return null;
+       if (1 === ik.length) return Hk(kk, ik[0], ek[ik[0]]);
+       const Dk = ik.map((kk => `"${kk}" ${ek[kk]}`)).join("; ");
+       return `Texture pack "${kk}": ${ik.length} models were not loaded (${Dk}). The default models are used instead.`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/205.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/205.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7)

#### 1. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L4-L6` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/205.js#L4-L8) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/205.js#L4-L6)

```diff
-   40918: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       default: () => oQ
+   33838: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => Ik,
+       f: () => qk,
+       g: () => uk
```

#### 2. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L8-L9` → after: `L10-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L10-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/205.js#L10-L67) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/205.js#L8-L9)

```diff
-     var LQ = wQ(35914),
-       qQ = wQ.n(LQ);
+     var Dk = ik(33846);
+     const fk = {
+         fileBytes: 4194304,
+         vertices: 65535,
+         indices: 196608,
+         accessorElements: 196608,
+         primitives: 64,
+         nodes: 128,
+         meshes: 64,
+         materials: 8,
+         images: 8,
+         imageSide: 1024
+       },
+       Sk = {
+         items: 1024,
+         perFile: 1024,
+ ... (42 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L11-L12` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/205.js#L69-L70) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/205.js#L11-L12)

```diff
-     function oQ() {
-       return qQ()('/*! For license information please see bqoxjr.procGen.worker.1e971fe5.worker.js.LICENSE.txt */\n(()=>{var QQ={55:QQ=>{const FQ="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,wQ=()=>FQ.now(),LQ=QQ=>QQ===1/0||(QQ= … [truncated]
+     function wk(kk) {
+       return kk.toLocaleString("en-US")
```

#### 4. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L14-L17` → after: `L72-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L72-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/205.js#L72-L385) · [Before (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/205.js#L14-L17)

```diff
-   },
-   35914: QQ => {
-     QQ.exports = function(QQ, FQ, wQ, LQ) {
-       var qQ = self || window;
+ 
+     function lk(kk, ek, ik) {
+       return kk > ek ? `has ${wk(kk)} ${ik} (the limit is ${wk(ek)})` : null
+     }
+ 
+     function pk(kk, ek) {
+       return Number.isInteger(kk) && kk >= 0 && kk < (null !== ek && void 0 !== ek ? ek : 0)
+     }
+ 
+     function yk(kk) {
+       return Number.isInteger(kk) && kk >= 0
+     }
+ 
+     function Yk(kk, ek) {
+       return void 0 !== kk && (!Array.isArray(kk) || kk.length > ek)
+     }
+ ... (298 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L19-L32` → after: `L387-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L387-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/205.js#L387-L391) · [Before (L19-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/205.js#L19-L32)

```diff
-         try {
-           var oQ;
-           try {
-             oQ = new qQ.Blob([QQ])
-           } catch (mQ) {
-             (oQ = new(qQ.BlobBuilder || qQ.WebKitBlobBuilder || qQ.MozBlobBuilder || qQ.MSBlobBuilder)).append(QQ), oQ = oQ.getBlob()
-           }
-           var DQ = qQ.URL || qQ.webkitURL,
-             kQ = DQ.createObjectURL(oQ),
-             vQ = new qQ[FQ](kQ, wQ);
-           return DQ.revokeObjectURL(kQ), vQ
-         } catch (mQ) {
-           return new qQ[FQ]("data:application/javascript,".concat(encodeURIComponent(QQ)), wQ)
-         }
+         const {
+           json: ek,
+           bin: ik
+         } = (0, Dk.z)(kk);
+         return qk(ek, ik)
```

#### 6. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L34-L35` → after: `L393-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/205.js#L393-L394) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/205.js#L34-L35)

```diff
-         if (!LQ) throw Error("Inline worker is not supported");
-         return new qQ[FQ](LQ, wQ)
+         if (ik instanceof Dk.k) return ik.reason;
+         throw ik
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/206.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/206.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643)

#### 1. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/206.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/206.js#L4)

```diff
-   40941: (QQ, FQ, wQ) => {
+   33856: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L6` → after: `L6-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/206.js#L6-L15) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/206.js#L6)

```diff
-       default: () => oQ
+       animatedBlockTextures: () => Pk,
+       armourAtlasUrl: () => bk,
+       averageColors: () => mk,
+       blockAtlasUrls: () => Sk,
+       blockAtlasWidth: () => Dk,
+       buildHash: () => Kk,
+       builtTextureIndexFingerprint: () => Mk,
+       imagesPerAtlas: () => fk,
+       outputHash: () => xk,
+       rotatedBlockTextures: () => rk
```

#### 3. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L8-L37` → after: `L17-L10900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L17-L10900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/206.js#L17-L10900) · [Before (L8-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/206.js#L8-L37)

```diff
-     var LQ = wQ(35914),
-       qQ = wQ.n(LQ);
- 
-     function oQ() {
-       return qQ()('(()=>{var QQ={11:(QQ,FQ,wQ)=>{QQ.exports=wQ.p+"static/media/zstdDecodeWorker.40fe78f0c8f22102443d.js"},20:(QQ,FQ,wQ)=>{QQ.exports=wQ.p+"static/media/bloxd_wasm_bg.80cf7a9d2c5f9fd62bf3.wasm"},26:(QQ,FQ,wQ)=>{QQ.exports=wQ.p+"static/media/bloxd_wasm_textures_bg.6 … [truncated]
-     }
-   },
-   35914: QQ => {
-     QQ.exports = function(QQ, FQ, wQ, LQ) {
-       var qQ = self || window;
-       try {
-         try {
-           var oQ;
-           try {
-             oQ = new qQ.Blob([QQ])
-           } catch (mQ) {
- ... (14 more removed lines; see GitHub link above)
+     const Dk = 8,
+       fk = [256, 256, 256, 256, 256, 256, 114],
+       Sk = [ik(33858), ik(33867), ik(33871), ik(33876), ik(33880), ik(33883), ik(33891)],
+       bk = ik(33898),
+       rk = {
+         "alloy_kiln_top[rot[1": ik(33901),
+         "alloy_kiln_top[rot[2": ik(33909),
+         "alloy_kiln_top[rot[3": ik(33918),
+         "alloy_kiln_top[rot[4": ik(33920),
+         "auto_bench_top[rot[1": ik(33924),
+         "auto_bench_top[rot[2": ik(33930),
+         "auto_bench_top[rot[3": ik(33938),
+         "auto_bench_top[rot[4": ik(33945),
+         "belt_tunnel_exit_top[rot[1": ik(33952),
+         "belt_tunnel_exit_top[rot[2": ik(33957),
+         "belt_tunnel_exit_top[rot[3": ik(33962),
+ ... (10868 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/207.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/207.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376)

#### 1. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/207.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/207.js#L2)

```diff
- export const ids = [207, 208];
+ export const ids = [207];
```

#### 2. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L4-L123` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/207.js#L4) · [Before (L4-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/207.js#L4-L123)

```diff
-   35924: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => qQ,
-       reportCappedWasmFailure: () => kQ,
-       reportUncappedWasmFailure: () => DQ,
-       reportWasmFailure: () => oQ
-     });
-     var LQ = wQ(2860);
-     const qQ = LQ.b - 4;
- 
-     function oQ(QQ, FQ, wQ) {
-       (0, LQ.f)(QQ, FQ, wQ, !1)
-     }
- 
-     function DQ(QQ, FQ, wQ) {
-       (0, LQ.f)(QQ, FQ, wQ, !1, 1 / 0)
- ... (104 more removed lines; see GitHub link above)
+   35812: (kk, ek, ik) => {
```

#### 3. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L125-L213` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/207.js#L6) · [Before (L125-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/207.js#L125-L213)

```diff
-       Vu: () => qQ,
-       EnvelopeKind: () => oQ,
-       hu: () => DQ,
-       PhysicsEngine: () => kQ,
-       Ju: () => vQ,
-       Eu: () => mQ,
-       nu: () => uQ,
-       gu: () => HQ,
-       Pu: () => bQ,
-       Zu: () => YQ,
-       yu: () => xQ,
-       Bu: () => AQ,
-       QH: () => tQ,
-       FH: () => eQ,
-       default: () => iF,
-       initSync: () => SF,
- ... (73 more removed lines; see GitHub link above)
+       WasmTextureWorker: () => pk
```

#### 4. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L215-L831` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/207.js#L8-L11) · [Before (L215-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/207.js#L215-L831)

```diff
-     class DQ {
-       __destroy_into_raw() {
-         const QQ = this.__wbg_ptr;
-         return this.__wbg_ptr = 0, zQ.unregister(this), QQ
-       }
-       free() {
-         const QQ = this.__destroy_into_raw();
-         pF.QpT8(QQ, 0)
-       }
-       iH(QQ, FQ) {
-         const wQ = pF.XXHg(this.__wbg_ptr, QQ, FQ);
-         if (wQ[2]) throw YF(wQ[1]);
-         return wQ[0] >>> 0
-       }
-       WH(QQ) {
-         const FQ = pF.qieB(this.__wbg_ptr, QQ);
- ... (601 more removed lines; see GitHub link above)
+     var Dk = ik(585),
+       fk = ik(3163),
+       Sk = ik(35819),
+       bk = ik.n(Sk);
```

#### 5. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L834-L856` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/207.js#L14) · [Before (L834-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/207.js#L834-L856)

```diff
-       const QQ = pF.Zh6E();
-       var FQ = nQ(QQ[0], QQ[1]).slice();
-       return pF.yQdd(QQ[0], 4 * QQ[1], 4), FQ
-     }
- 
-     function xQ(QQ, FQ) {
-       let wQ, LQ;
-       try {
-         const qQ = vF(QQ, pF.QDi7),
-           oQ = cF,
-           DQ = bF(FQ, pF.QDi7, pF.faz4),
-           kQ = cF,
-           vQ = pF.rPfG(qQ, oQ, DQ, kQ);
-         return wQ = vQ[0], LQ = vQ[1], BQ(vQ[0], vQ[1])
-       } finally {
-         pF.yQdd(wQ, LQ, 1)
- ... (7 more removed lines; see GitHub link above)
+       return bk()('(()=>{var kk={d:(ek,ik)=>{for(var Dk in ik)kk.o(ik,Dk)&&!kk.o(ek,Dk)&&Object.defineProperty(ek,Dk,{enumerable:!0,get:ik[Dk]})},o:(kk,ek)=>Object.prototype.hasOwnProperty.call(kk,ek),r:kk=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(k … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L860-L966` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/207.js#L23) · [Before (L860-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/207.js#L860-L966)

```diff
-       return 0 !== pF.gYT2(QQ)
-     }
- 
-     function eQ(QQ, FQ) {
-       const wQ = bF(QQ, pF.QDi7, pF.faz4),
-         LQ = cF,
-         qQ = pF.kfwW(wQ, LQ, FQ);
-       if (qQ[1]) throw YF(qQ[0])
-     }
- 
-     function MQ() {
-       pF.nzeI()
-     }
- 
-     function GQ() {
-       return pF.IEvF() >>> 0
- ... (91 more removed lines; see GitHub link above)
+       return "" === kk ? [] : kk.split("\0")
```

#### 7. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L1003-L1017` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/207.js#L27-L28) · [Before (L1003-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/207.js#L1003-L1017)

```diff
-       DF === oF.length && oF.push(oF.length + 1);
-       const FQ = DF;
-       return DF = oF[FQ], oF[FQ] = QQ, FQ
-     }
- 
-     function JQ(QQ, FQ) {
-       if (!(QQ instanceof FQ)) throw new Error(`expected instance of ${FQ.name}`)
-     }
- 
-     function EQ(QQ, FQ) {
-       return QQ >>>= 0, ZQ().subarray(QQ / 8, QQ / 8 + FQ)
-     }
- 
-     function nQ(QQ, FQ) {
-       return QQ >>>= 0, FF().subarray(QQ / 4, QQ / 4 + FQ)
+       if ("" !== kk)
+         for (const ek of kk.split("\n")) console.error(ek)
```

#### 8. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L1021-L1026` → after: `L32-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L32-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/207.js#L32-L76) · [Before (L1021-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/207.js#L1021-L1026)

```diff
-       return QQ >>>= 0, LF().subarray(QQ / 1, QQ / 1 + FQ)
-     }
-     let PQ = null;
- 
-     function ZQ() {
-       return null !== PQ && 0 !== PQ.byteLength || (PQ = new Float64Array(pF.memory.buffer)), PQ
+       return async function(kk, ek) {
+         const ik = Object.keys(kk),
+           Dk = [],
+           fk = new Map,
+           Sk = new Uint32Array(ik.length);
+         for (const [bk, rk] of ik.entries()) {
+           const {
+             url: ek
+           } = kk[rk];
+           fk.has(ek) || (fk.set(ek, Dk.length), Dk.push(ek)), Sk[bk] = fk.get(ek)
+         }
+         return {
+           sources: await ek(Dk),
+           names: ik.join("\0"),
+           sourceOfName: Sk
+         }
+ ... (29 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L1031-L1043` → after: `L80-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/207.js#L80-L81) · [Before (L1031-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/207.js#L1031-L1043)

```diff
-       return function(QQ, FQ) {
-         tF += FQ, tF >= AF && (xF = new TextDecoder("utf-8", {
-           ignoreBOM: !0,
-           fatal: !0
-         }), xF.decode(), tF = FQ);
-         return xF.decode(LF().subarray(QQ, QQ + FQ))
-       }(QQ >>> 0, FQ)
-     }
-     let dQ = null;
-     let QF = null;
- 
-     function FF() {
-       return null !== QF && 0 !== QF.byteLength || (QF = new Uint32Array(pF.memory.buffer)), QF
+       let ik;
+       return kk instanceof Mk.i ? ik = kk : (ik = new Mk.i(ek ? Mk.g.Optional : Mk.g.Error, (0, Kk.g)(kk)), kk instanceof Error && (ik.stack = `${ik.name}: ${ik.message}\n${kk.stack}`)), ik.code !== Mk.g.Fetch && ik.code !== Mk.g.Error && (0, mk.e)(ik.message), ik
```

#### 10. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L1059` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/207.js#L85) · [Before (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/207.js#L1059)

```diff
-       return void 0 === QQ || null === QQ
+       return kk.message ? new Error(`the texture worker failed: ${kk.message}`) : new Mk.i(Mk.g.Load, "the texture worker failed to start")
```

#### 11. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L1061-L1095` → after: `L87-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L87-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/207.js#L87-L203) · [Before (L1061-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/207.js#L1061-L1095)

```diff
- 
-     function vF(QQ, FQ) {
-       const wQ = FQ(2 * QQ.length, 2) >>> 0;
-       return (null !== dQ && 0 !== dQ.byteLength || (dQ = new Uint16Array(pF.memory.buffer)), dQ).set(QQ, wQ / 2), cF = QQ.length, wQ
-     }
- 
-     function mF(QQ, FQ) {
-       const wQ = FQ(4 * QQ.length, 4) >>> 0;
-       return FF().set(QQ, wQ / 4), cF = QQ.length, wQ
-     }
- 
-     function uF(QQ, FQ) {
-       const wQ = FQ(1 * QQ.length, 1) >>> 0;
-       return LF().set(QQ, wQ / 1), cF = QQ.length, wQ
-     }
- 
- ... (19 more removed lines; see GitHub link above)
+     class pk {
+       constructor(kk) {
+         this.worker = kk, this.failure = void 0, this.abandonStep = null, kk.addEventListener("error", (kk => {
+           kk.preventDefault(), this.failure ??= lk(kk)
+         }))
+       }
+       static async generateRequired(kk, ek, ik, Sk) {
+         let bk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Mk.b,
+           mk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
+         const xk = (0, Pk.l)();
+         if (null !== xk) throw wk(new Mk.i(Mk.g.Load, xk), !1);
+         let nk;
+         const lk = new AbortController;
+         try {
+           nk = new pk(function() {
+             try {
+ ... (101 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L1097-L1100` → after: `L205-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L205-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/207.js#L205-L278) · [Before (L1097-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/207.js#L1097-L1100)

```diff
-       if (DQ !== LQ) {
-         0 !== DQ && (QQ = QQ.slice(DQ)), qQ = wQ(qQ, LQ, LQ = DQ + 3 * QQ.length, 1) >>> 0;
-         const FQ = LF().subarray(qQ + DQ, qQ + LQ);
-         DQ += eF.encodeInto(QQ, FQ).written, qQ = wQ(qQ, LQ, DQ, 1) >>> 0
+       async generateOptional() {
+         let kk;
+         try {
+           kk = await this.request({
+             type: "optional"
+           }, [])
+         } catch (ek) {
+           throw wk(ek, !0)
+         } finally {
+           this.terminate()
+         }
+         return Uk(kk.warnings),
+           function(kk) {
+             let {
+               blocks: ek,
+               counts: ik,
+ ... (58 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L1129` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/207.js#L283) · [Before (L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/207.js#L1129)

```diff
-       return GF = QQ, pF = QQ.exports, MF = FQ, PQ = null, yQ = null, dQ = null, QF = null, wF = null, pF.mm7T(), pF
+       return ek > 0 ? `${kk}, its module's memory ${Math.round(ek/2**20)} MiB` : kk
```

#### 14. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L1131-L1155` → after: `L285-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L285-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/207.js#L285-L293) · [Before (L1131-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/207.js#L1131-L1155)

```diff
- 
-     function SF(QQ) {
-       if (void 0 !== pF) return pF;
-       void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
-         module: QQ
-       } = QQ) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
-       const FQ = TQ();
-       QQ instanceof WebAssembly.Module || (QQ = new WebAssembly.Module(QQ));
-       return CF(new WebAssembly.Instance(QQ, FQ), QQ)
-     }
-     async function iF(QQ) {
-       if (void 0 !== pF) return pF;
-       void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
-         module_or_path: QQ
-       } = QQ) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
-       const FQ = TQ();
- ... (9 more removed lines; see GitHub link above)
+   },
+   35819: kk => {
+     kk.exports = function(kk, ek, ik, Dk) {
+       var fk = self || window;
+       try {
+         try {
+           var Sk;
+           try {
+             Sk = new fk.Blob([kk])
```

#### 15. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L1157-L1166` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/207.js#L295) · [Before (L1157-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/207.js#L1157-L1166)

```diff
-             if (! function(QQ) {
-                 switch (QQ) {
-                   case "basic":
-                   case "cors":
-                   case "default":
-                     return !0
-                 }
-                 return !1
-               }(QQ.type) || "application/wasm" === QQ.headers.get("Content-Type")) throw wQ;
-             console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", wQ)
+             (Sk = new(fk.BlobBuilder || fk.WebKitBlobBuilder || fk.MozBlobBuilder || fk.MSBlobBuilder)).append(kk), Sk = Sk.getBlob()
```

#### 16. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L1168-L1175` → after: `L297-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L297-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/207.js#L297-L302) · [Before (L1168-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/207.js#L1168-L1175)

```diff
-           const LQ = await QQ.arrayBuffer();
-           return await WebAssembly.instantiate(LQ, FQ)
-         } {
-           const wQ = await WebAssembly.instantiate(QQ, FQ);
-           return wQ instanceof WebAssembly.Instance ? {
-             instance: wQ,
-             module: QQ
-           } : wQ
+           var bk = fk.URL || fk.webkitURL,
+             rk = bk.createObjectURL(Sk),
+             Pk = new fk[ek](rk, ik);
+           return bk.revokeObjectURL(rk), Pk
+         } catch (mk) {
+           return new fk[ek]("data:application/javascript,".concat(encodeURIComponent(kk)), ik)
```

#### 17. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L1177-L1227` → after: `L304-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L304-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/207.js#L304-L307) · [Before (L1177-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/207.js#L1177-L1227)

```diff
-       }(await QQ, FQ);
-       return CF(wQ, LQ)
-     }
-     var WF = wQ(2809),
-       RF = wQ(35962);
-     const OF = {
-       name: WF.e,
-       url: () => new wQ.U(wQ(35965)),
-       init: iF,
-       bindings: LQ
-     };
- 
-     function sF() {
-       let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OF,
-         FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OF,
-         wQ = arguments.length > 2 ? arguments[2] : void 0;
- ... (35 more removed lines; see GitHub link above)
+       } catch (mk) {
+         if (!Dk) throw Error("Inline worker is not supported");
+         return new fk[ek](Dk, ik)
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/208.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/208.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1)

#### 1. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L4-L9` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/208.js#L4-L7) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/208.js#L4-L9)

```diff
-   35924: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => qQ,
-       reportCappedWasmFailure: () => kQ,
-       reportUncappedWasmFailure: () => DQ,
-       reportWasmFailure: () => oQ
+   41059: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       loadGlbAsset: () => Ye,
+       loadGlbTree: () => ye
```

#### 2. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L11-L12` → after: `L9-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/208.js#L9-L12) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/208.js#L11-L12)

```diff
-     var LQ = wQ(2860);
-     const qQ = LQ.b - 4;
+     var Dk = ik(37497),
+       fk = ik(41065),
+       Sk = ik(35819),
+       bk = ik.n(Sk);
```

#### 3. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L14-L15` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/208.js#L14-L15) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/208.js#L14-L15)

```diff
-     function oQ(QQ, FQ, wQ) {
-       (0, LQ.f)(QQ, FQ, wQ, !1)
+     function rk() {
+       return bk()('(()=>{class kk extends Error{}function ek(ek,ik){const Dk=ek._malloc(ik);if(0===Dk)throw new kk(`Draco: the decoder\'s heap refused ${ik} bytes`);return Dk}function ik(kk){return{[kk.DT_FLOAT32]:[Float32Array,5126],[kk.DT_INT8]:[Int8Array,5120],[kk.DT_INT16]:[I … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L18-L19` → after: `L34-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L34-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/208.js#L34-L123) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/208.js#L18-L19)

```diff
-     function DQ(QQ, FQ, wQ) {
-       (0, LQ.f)(QQ, FQ, wQ, !1, 1 / 0)
+     function lk() {
+       if (!Mk) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
+       const {
+         scriptUrl: kk,
+         wasmBinaryUrl: ek
+       } = Mk;
+       return Kk ??= fetch(ek).then((kk => {
+         if (!kk.ok) throw new Error(`Draco: fetching ${ek} failed: ${kk.status}`);
+         return kk.arrayBuffer()
+       })), Kk.catch((() => {
+         Kk = null
+       })), Hk.workersStarted++, Kk.then((ek => new Promise(((ik, Dk) => {
+         const fk = new rk;
+         fk.onerror = kk => {
+           fk.onmessage = null, fk.onerror = null, fk.terminate(), Dk(new Error("Draco: the decode worker failed to start" + (kk.message ? `: ${kk.message}` : " (its script did not load)")))
+         }, fk.onmessage = kk => {
+ ... (74 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L23` → after: `L127-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L127-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/208.js#L127-L1082) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/208.js#L23)

```diff
-       (0, LQ.f)(QQ, FQ, wQ, !1, qQ)
+       return new Promise(((Dk, fk) => {
+         Yk({
+           data: new Int8Array(kk.buffer, kk.byteOffset, kk.byteLength).slice(),
+           attributeIds: ek,
+           expected: ik,
+           resolve: Dk,
+           reject: fk
+         })
+       }))
+     }
+     var Ck = ik(37064),
+       Ak = ik(37075),
+       jk = ik(33846),
+       sk = ik(33838);
+     const dk = {
+       index: -1,
+ ... (940 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/209.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/209.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9)

#### 1. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/209.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/209.js#L4)

```diff
-   35973: (QQ, FQ, wQ) => {
+   41073: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L6-L10` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/209.js#L6) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/209.js#L6-L10)

```diff
-       ITEM_FILES_WITHOUT_SPRITE: () => kQ,
-       ITEM_SPRITES: () => oQ,
-       ITEM_SPRITES_WITHOUT_FILE: () => DQ,
-       ITEM_SPRITE_RUNS: () => qQ,
-       MAX_SPRITE_ITEM_ID: () => LQ
+       default: () => Sk
```

#### 3. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L12-L16` → after: `L8-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L8-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/209.js#L8-L37) · [Before (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/209.js#L12-L16)

```diff
-     const LQ = 10090,
-       qQ = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
-       oQ = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
-       DQ = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
-       kQ = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
+     var Dk = ik(35819),
+       fk = ik.n(Dk);
+ 
+     function Sk() {
+       return fk()('/*! For license information please see 3lwmg.procGen.worker.5c11f61d.worker.js.LICENSE.txt */\n(()=>{var kk={46:kk=>{const ek="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,ik=()=>ek.now(),Dk=kk=>kk===1/0||(kk=> … [truncated]
+     }
+   },
+   35819: kk => {
+     kk.exports = function(kk, ek, ik, Dk) {
+       var fk = self || window;
+       try {
+         try {
+           var Sk;
+           try {
+             Sk = new fk.Blob([kk])
+           } catch (mk) {
+ ... (14 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/210.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/210.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2)

#### 1. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/210.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/210.js#L4)

```diff
-   35988: (QQ, FQ, wQ) => {
+   41098: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/210.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/210.js#L6)

```diff
-       CreateCustomLobby: () => rQ
+       default: () => Sk
```

#### 3. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L8-L34` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/210.js#L8-L9) · [Before (L8-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/210.js#L8-L34)

```diff
-     wQ(35995);
-     var LQ = wQ(4475),
-       qQ = wQ(53),
-       oQ = wQ(1682),
-       DQ = wQ(1070),
-       kQ = wQ.n(DQ),
-       vQ = wQ(3029),
-       mQ = wQ(1147),
-       uQ = wQ(1213),
-       HQ = wQ(4435),
-       bQ = wQ(1451),
-       YQ = wQ(36002),
-       xQ = wQ(1207),
-       AQ = wQ(1342),
-       tQ = wQ(1503),
-       eQ = wQ(17),
- ... (11 more removed lines; see GitHub link above)
+     var Dk = ik(35819),
+       fk = ik.n(Dk);
```

#### 4. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L36-L503` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/210.js#L11-L12) · [Before (L36-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/210.js#L36-L503)

```diff
-     function rQ(QQ) {
-       var FQ, wQ, DQ, rQ;
-       let {
-         gameNameWithVariation: IQ,
-         close: UQ,
-         initialDefaultGamemode: NQ
-       } = QQ;
-       const {
-         t: TQ
-       } = (0, xQ.y)(), KQ = (0, tQ.useNavigatePreserveSearch)(), [zQ, lQ] = (0, qQ.useState)("Enter"), [jQ, aQ] = (0, qQ.useState)(""), XQ = qQ.useRef(null), fQ = null === (FQ = cQ.e[IQ]) || void 0 === FQ ? void 0 : FQ.showWorldsInsteadOfCustomLobbies, VQ = fQ ? 1 : null === (wQ  … [truncated]
-       NQ || (NQ = "classic_creative" === IQ || "classic_creativeFlat" === IQ ? "creative" : "classic" === IQ ? "peaceful" : "survival");
-       const EQ = {
-         baseOptions: {
-           gameNameWithVariation: fQ ? "classic" : IQ,
-           name: "",
-           visibility: "unlisted"
- ... (452 more removed lines; see GitHub link above)
+     function Sk() {
+       return fk()('(()=>{var kk={23:(kk,ek,ik)=>{kk.exports=ik.p+"static/media/bloxd_wasm_bg.48b33a82574c7dba5df8.wasm"},31:(kk,ek,ik)=>{kk.exports=ik.p+"static/media/bloxd_wasm_textures_bg.f53ae115f07fdd6feab3.wasm"},14:(kk,ek,ik)=>{kk.exports=ik.p+"static/media/zstdDecodeWorker … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L506-L592` → after: `L15-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L15-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/210.js#L15-L24) · [Before (L506-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/210.js#L506-L592)

```diff
-   36002: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => uQ,
-       g: () => bQ
-     });
-     var LQ = wQ(53),
-       qQ = wQ(1362),
-       oQ = wQ(1207),
-       DQ = wQ(1348),
-       kQ = wQ(3356),
-       vQ = wQ(4772),
-       mQ = wQ(1107);
- 
-     function uQ(QQ) {
-       let {
-         loading: FQ,
- ... (71 more removed lines; see GitHub link above)
+   35819: kk => {
+     kk.exports = function(kk, ek, ik, Dk) {
+       var fk = self || window;
+       try {
+         try {
+           var Sk;
+           try {
+             Sk = new fk.Blob([kk])
+           } catch (mk) {
+             (Sk = new(fk.BlobBuilder || fk.WebKitBlobBuilder || fk.MozBlobBuilder || fk.MSBlobBuilder)).append(kk), Sk = Sk.getBlob()
```

#### 6. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L594-L702` → after: `L26-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L26-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/210.js#L26-L36) · [Before (L594-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/210.js#L594-L702)

```diff
-         })]
-       })
-     }
- 
-     function bQ(QQ) {
-       let {
-         ownedSchematics: FQ,
-         currentWorldSchematicId: wQ,
-         onClose: LQ
-       } = QQ;
-       qQ.NotificationProvider.showCustomPopup({
-         body: QQ => (0, mQ.jsx)(HQ, {
-           ownedSchematics: FQ,
-           currentWorldSchematicId: wQ,
-           onClose: QQ
-         }),
- ... (93 more removed lines; see GitHub link above)
+           var bk = fk.URL || fk.webkitURL,
+             rk = bk.createObjectURL(Sk),
+             Pk = new fk[ek](rk, ik);
+           return bk.revokeObjectURL(rk), Pk
+         } catch (mk) {
+           return new fk[ek]("data:application/javascript,".concat(encodeURIComponent(kk)), ik)
+         }
+       } catch (mk) {
+         if (!Dk) throw Error("Inline worker is not supported");
+         return new fk[ek](Dk, ik)
+       }
```

#### 7. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L704-L705` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/210.js#L38) · [Before (L704-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/210.js#L704-L705)

```diff
-   },
-   35995: () => {}
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/211.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/211.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56)

#### 1. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/211.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/211.js#L2)

```diff
- export const ids = [211];
+ export const ids = [211, 212];
```

#### 2. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L4-L7` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/211.js#L4-L10) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/211.js#L4-L7)

```diff
-   36002: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => uQ,
-       g: () => bQ
+   35829: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       CAPPED_COUNTS_VISIT_CAP: () => Sk,
+       reportCappedWasmFailure: () => Pk,
+       reportUncappedWasmFailure: () => rk,
+       reportWasmCrash: () => fk,
+       reportWasmFailure: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L9-L15` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/211.js#L12) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/211.js#L9-L15)

```diff
-     var LQ = wQ(53),
-       qQ = wQ(1362),
-       oQ = wQ(1207),
-       DQ = wQ(1348),
-       kQ = wQ(3356),
-       vQ = wQ(4772),
-       mQ = wQ(1107);
+     var Dk = ik(2866);
```

#### 4. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L18-L51` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/211.js#L15) · [Before (L18-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/211.js#L18-L51)

```diff
-       let {
-         loading: FQ,
-         schematics: wQ,
-         onSchematicPicked: LQ,
-         selectedSchematicIdList: qQ = [],
-         disableAutoExport: vQ
-       } = QQ;
-       const {
-         t: uQ
-       } = (0, oQ.y)();
-       return (0, mQ.jsxs)("div", {
-         className: "SchematicList",
-         children: [FQ && (0, mQ.jsx)(DQ.c, {}), !FQ && 0 === wQ.length && (0, mQ.jsx)("div", {
-           className: "NoSchematicsText",
-           children: uQ("worldBuilder:noSavedSchematic")
-         }), !FQ && wQ.map((QQ => (0, mQ.jsx)(kQ.f, {
- ... (18 more removed lines; see GitHub link above)
+       (0, Dk.reportClientError)("wasm_load", kk.message, kk.code)
```

#### 5. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L54-L93` → after: `L19-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/211.js#L19-L20) · [Before (L54-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/211.js#L54-L93)

```diff
-     function HQ(QQ) {
-       let {
-         ownedSchematics: FQ,
-         currentWorldSchematicId: wQ,
-         onClose: qQ
-       } = QQ;
-       const {
-         t: DQ
-       } = (0, oQ.y)(), [kQ, HQ] = (0, LQ.useState)(null);
-       return (0, mQ.jsxs)("div", {
-         className: "SchematicListWindow",
-         children: [null === kQ && (0, mQ.jsxs)(mQ.Fragment, {
-           children: [(0, mQ.jsx)("h1", {
-             className: "SchematicPopupTitle",
-             children: DQ("worldBuilder:schematicList")
-           }), (0, mQ.jsx)("h2", {
- ... (24 more removed lines; see GitHub link above)
+     function bk(kk, ek, ik) {
+       (0, Dk.reportClientError)(kk, ek, ik, !1)
```

#### 6. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L96-L111` → after: `L23-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L23-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/211.js#L23-L28) · [Before (L96-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/211.js#L96-L111)

```diff
-     function bQ(QQ) {
-       let {
-         ownedSchematics: FQ,
-         currentWorldSchematicId: wQ,
-         onClose: LQ
-       } = QQ;
-       qQ.NotificationProvider.showCustomPopup({
-         body: QQ => (0, mQ.jsx)(HQ, {
-           ownedSchematics: FQ,
-           currentWorldSchematicId: wQ,
-           onClose: QQ
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: LQ,
-         unlockPointerKey: "schematicListPopup"
-       })
+     function rk(kk, ek, ik) {
+       (0, Dk.reportClientError)(kk, ek, ik, !1, 1 / 0)
+     }
+ 
+     function Pk(kk, ek, ik) {
+       (0, Dk.reportClientError)(kk, ek, ik, !1, Sk)
```

#### 7. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L114` → after: `L31-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L31-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/211.js#L31-L122) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/211.js#L114)

```diff
-   41143: (QQ, FQ, wQ) => {
+   35822: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Lk,
+       f: () => jk,
+       h: () => sk,
+       l: () => Ck
+     });
+     var Dk = ik(35851),
+       fk = ik(2821),
+       Sk = ik(35866),
+       bk = ik(2823),
+       rk = ik(35829),
+       Pk = ik(2855),
+       mk = ik(3194),
+       Mk = ik(3190),
+       Kk = ik(35836),
+ ... (76 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L116` → after: `L124-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L124-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/211.js#L124-L212) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/211.js#L116)

```diff
-       runClientGameMessage: () => sQ
+       bK: () => Dk,
+       EnvelopeKind: () => fk,
+       rK: () => Sk,
+       PhysicsEngine: () => bk,
+       PK: () => rk,
+       mK: () => Pk,
+       MK: () => mk,
+       KK: () => Mk,
+       xK: () => Kk,
+       nK: () => xk,
+       UK: () => nk,
+       HK: () => Uk,
+       wK: () => Hk,
+       lK: () => wk,
+       default: () => je,
+       initSync: () => Ae,
+ ... (73 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L118-L131` → after: `L214-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L214-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/211.js#L214-L856) · [Before (L118-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/211.js#L118-L131)

```diff
-     var LQ = wQ(3605),
-       qQ = wQ(3621),
-       oQ = wQ(1339),
-       DQ = wQ(36002),
-       kQ = wQ(4794),
-       vQ = wQ(1070),
-       mQ = wQ.n(vQ),
-       uQ = wQ(53),
-       HQ = wQ(1362),
-       bQ = wQ(1451),
-       YQ = wQ(317),
-       xQ = wQ(1207),
-       AQ = wQ(1079),
-       tQ = wQ(1107);
+     class Sk {
+       __destroy_into_raw() {
+         const kk = this.__wbg_ptr;
+         return this.__wbg_ptr = 0, vk.unregister(this), kk
+       }
+       free() {
+         const kk = this.__destroy_into_raw();
+         Ye.tumD(kk, 0)
+       }
+       XK(kk, ek) {
+         const ik = Ye.ds8B(this.__wbg_ptr, kk, ek);
+         if (ik[2]) throw ne(ik[1]);
+         return ik[0] >>> 0
+       }
+       BK(kk) {
+         const ek = Ye.mtr2(this.__wbg_ptr, kk);
+ ... (627 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L134-L194` → after: `L859-L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L859-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/211.js#L859-L874) · [Before (L134-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/211.js#L134-L194)

```diff
-       let {
-         onFilePicked: FQ
-       } = QQ;
-       const {
-         t: wQ
-       } = (0, xQ.y)(), [LQ, qQ] = (0, uQ.useState)(null), {
-         getRootProps: oQ,
-         getInputProps: DQ,
-         isDragActive: vQ
-       } = (0, kQ.b)({
-         onDrop: QQ => {
-           QQ.length > 0 && qQ(QQ[0])
-         },
-         useFsAccessApi: !1
-       }), HQ = LQ && LQ.size > 1024 * YQ.ld;
-       return (0, tQ.jsxs)("div", {
- ... (45 more removed lines; see GitHub link above)
+       return 0 !== Ye.GvQl(kk)
+     }
+ 
+     function wk(kk, ek) {
+       const ik = xe(kk, Ye.VZBX, Ye.GGs5),
+         Dk = Le,
+         fk = Ye.XYsO(ik, Dk, ek);
+       if (fk[1]) throw ne(fk[0])
+     }
+ 
+     function lk() {
+       Ye.JCge()
+     }
+ 
+     function pk() {
+       return Ye.pK1w() >>> 0
```

#### 11. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L198-L238` → after: `L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/211.js#L878) · [Before (L198-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/211.js#L198-L238)

```diff
-       let {
-         ownedSchematics: FQ,
-         onClose: wQ,
-         onChosenPreset: LQ,
-         onChosenFile: qQ
-       } = QQ;
-       const {
-         t: oQ
-       } = (0, xQ.y)();
-       return (0, tQ.jsxs)(tQ.Fragment, {
-         children: [(0, tQ.jsx)("h1", {
-           className: "SchematicPopupTitle",
-           children: oQ("worldBuilder:loadSchematic")
-         }), (0, tQ.jsx)("h2", {
-           className: "SchematicPopupSubtitle",
-           children: oQ("worldBuilder:chooseOneOfYourSchematics")
- ... (25 more removed lines; see GitHub link above)
+       return 0 !== Ye.byuw(kk)
```

#### 12. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L246-L305` → after: `L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/211.js#L882) · [Before (L246-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/211.js#L246-L305)

```diff
-       var FQ;
-       let {
-         ownedSchematics: wQ,
-         onClose: LQ,
-         onChosenEdit: qQ,
-         onChosenNew: oQ,
-         onChosenDownload: kQ
-       } = QQ;
-       const {
-         t: vQ
-       } = (0, xQ.y)(), [mQ, HQ] = (0, uQ.useState)("choose"), [YQ, AQ] = (0, uQ.useState)(null), [eQ, MQ] = (0, uQ.useState)(null);
-       return (0, tQ.jsxs)(tQ.Fragment, {
-         children: [(0, tQ.jsx)("h1", {
-           className: "SchematicPopupTitle",
-           children: vQ("worldBuilder:saveSchematic")
-         }), "choose" === mQ && (0, tQ.jsxs)(tQ.Fragment, {
- ... (44 more removed lines; see GitHub link above)
+       return 0 !== Ye.TYtG(kk)
```

#### 13. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L309-L390` → after: `L886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/211.js#L886) · [Before (L309-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/211.js#L309-L390)

```diff
-       let {
-         type: FQ,
-         prepopName: wQ,
-         ownedSchematics: LQ,
-         onSubmit: qQ,
-         onBack: oQ
-       } = QQ;
-       const {
-         t: DQ
-       } = (0, xQ.y)(), [kQ, vQ] = (0, uQ.useState)(""), [HQ, YQ] = (0, uQ.useState)(""), [AQ, eQ] = (0, uQ.useState)(null), [MQ, GQ] = (0, uQ.useState)(!0), SQ = QQ => {
-         var wQ;
-         QQ = null !== (wQ = QQ) && void 0 !== wQ ? wQ : kQ;
-         const qQ = "new" === FQ ? (0, CQ.E)(QQ) : null,
-           oQ = [...(0, CQ.Nb)(QQ), ...qQ ? [qQ] : []];
-         return oQ.length > 0 ? (eQ(oQ.join(", ")), !1) : "new" === FQ && LQ.find((FQ => FQ.name === QQ)) ? (eQ(DQ("worldBuilder:schematicAlreadyExists")), !1) : (eQ(null), !0)
-       };
- ... (66 more removed lines; see GitHub link above)
+       Ye.yqNK(kk)
```

#### 14. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L396-L453` → after: `L889-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L889-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/211.js#L889-L947) · [Before (L396-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/211.js#L396-L453)

```diff
-     function sQ(QQ, FQ) {
-       if ("devDownloadJson" !== QQ) ! function(QQ, FQ) {
-         const wQ = WQ.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, oQ.c)().websocketUrl);
-         let kQ = !1;
-         const vQ = async (QQ, FQ) => {
-           if (kQ) return;
-           kQ = !0;
-           const {
-             gameNameWithVariation: LQ,
-             lobbyName: DQ
-           } = (0, oQ.c)(), vQ = {
-             gameNameWithVariation: LQ,
-             lobbyName: DQ
-           };
-           return await (0, OQ.postJsonWithMetricsCookiesAndJsonResponse)(`${wQ}/schematic/${QQ}`, qQ.w[QQ].toBuffer({
-             ...vQ,
- ... (42 more removed lines; see GitHub link above)
+     function Ck() {
+       return Ye.Zvst() >>> 0
+     }
+ 
+     function Ak() {
+       return Ye.yS1r() >>> 0
+     }
+ 
+     function jk() {
+       return 0 !== Ye.AK9i()
+     }
+ 
+     function sk() {
+       const kk = Ye.McrE();
+       var ek = Zk(kk[0], kk[1]).slice();
+       return Ye.YmUR(kk[0], 4 * kk[1], 4), ek
+ ... (43 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L455-L456` → after: `L949-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L949-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/211.js#L949-L950) · [Before (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/211.js#L455-L456)

```diff
-           onClose: () => {
-             vQ("cancel", {})
+           QyEz: function(kk, ek) {
+             throw new Error(Rk(kk, ek))
```

#### 16. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L458-L464` → after: `L952-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/211.js#L952-L953) · [Before (L458-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/211.js#L458-L464)

```diff
-           onChosenEdit: (QQ, FQ, wQ, LQ) => {
-             vQ("save-to-profile", {
-               schematicId: QQ,
-               name: FQ,
-               description: wQ,
-               includeLobbyCode: LQ
-             })
+           rwQM: function(kk) {
+             fe(kk).call()
```

#### 17. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L466-L507` → after: `L955-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L955-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/211.js#L955-L956) · [Before (L466-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/211.js#L466-L507)

```diff
-           onChosenNew: (QQ, FQ, wQ) => {
-             vQ("save-to-profile", {
-               schematicId: null,
-               name: QQ,
-               description: FQ,
-               includeLobbyCode: wQ
-             })
-           }
-         });
-         else if ("Plugin|WorldBuilder|LoadSchematic" === QQ) ! function(QQ) {
-           let {
-             ownedSchematics: FQ,
-             onChosenFile: wQ,
-             onChosenPreset: LQ,
-             onClose: qQ
-           } = QQ;
- ... (26 more removed lines; see GitHub link above)
+           HiLW: function(kk, ek) {
+             console.error(Rk(kk, ek))
```

#### 18. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L509-L512` → after: `L958-L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L958-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/211.js#L958-L959) · [Before (L509-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/211.js#L509-L512)

```diff
-           onChosenPreset: QQ => {
-             vQ("load-from-profile", {
-               schematicId: QQ
-             })
+           zgE6: function() {
+             return performance.now()
```

#### 19. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L514-L522` → after: `L961-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L961-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/211.js#L961-L962) · [Before (L514-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/211.js#L514-L522)

```diff
-           onClose: () => {
-             vQ("cancel", {})
-           }
-         });
-         else if ("Plugin|WorldBuilder|ListSchematics" === QQ)(0, DQ.g)({
-           ownedSchematics: Array.isArray(FQ) ? FQ : FQ.schematics,
-           currentWorldSchematicId: Array.isArray(FQ) ? null : FQ.currentWorldSchematicId,
-           onClose: () => {
-             vQ("cancel", {})
+           eRmQ: function(kk) {
+             ne(kk)
```

#### 20. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L524-L541` → after: `L964-L1122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L964-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/211.js#L964-L1122) · [Before (L524-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/211.js#L524-L541)

```diff
-         });
-         else if ("Plugin|WorldBuilder|ExportWorld" === QQ) {
-           var mQ;
-           const QQ = null !== (mQ = FQ.schematic) && void 0 !== mQ ? mQ : FQ;
-           (0, GQ.m)({
-             schematic: QQ,
-             inSourceWorld: QQ.schematicId === FQ.currentWorldSchematicId,
-             onClose: () => {
-               vQ("cancel", {})
-             }
-           })
-         } else console.error(`Unknown plugin message type ${QQ}`)
-       }(QQ, FQ);
-       else {
-         const QQ = JSON.stringify(FQ.data, null, 2);
-         (0, RQ.downloadBlob)(new Blob([QQ], {
- ... (2 more removed lines; see GitHub link above)
+         }
+       }
+     }
+     Symbol.dispose && (Kk.prototype[Symbol.dispose] = Kk.prototype.free);
+     const Qk = "undefined" === typeof FinalizationRegistry ? {
+         register: () => {},
+         unregister: () => {}
+       } : new FinalizationRegistry((kk => Ye.AfaT(kk, 1))),
+       vk = "undefined" === typeof FinalizationRegistry ? {
+         register: () => {},
+         unregister: () => {}
+       } : new FinalizationRegistry((kk => Ye.tumD(kk, 1))),
+       Ek = "undefined" === typeof FinalizationRegistry ? {
+         register: () => {},
+         unregister: () => {}
+       } : new FinalizationRegistry((kk => Ye.JrZq(kk, 1))),
+ ... (143 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/212.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/212.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02)

#### 1. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/212.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/212.js#L4)

```diff
-   36030: (QQ, FQ, wQ) => {
+   35829: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L6` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/212.js#L6-L10) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/212.js#L6)

```diff
-       default: () => iQ
+       CAPPED_COUNTS_VISIT_CAP: () => Sk,
+       reportCappedWasmFailure: () => Pk,
+       reportUncappedWasmFailure: () => rk,
+       reportWasmCrash: () => fk,
+       reportWasmFailure: () => bk
```

#### 3. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L8-L21` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/212.js#L12) · [Before (L8-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/212.js#L8-L21)

```diff
-     var LQ = wQ(1070),
-       qQ = wQ.n(LQ),
-       oQ = wQ(1515),
-       DQ = wQ(1061),
-       kQ = wQ(745),
-       vQ = wQ(1207),
-       mQ = wQ(1451),
-       uQ = wQ(1503),
-       HQ = wQ(3433),
-       bQ = wQ(1079),
-       YQ = wQ(3356),
-       xQ = wQ(2475),
-       AQ = wQ(1107);
-     const tQ = 2;
+     var Dk = ik(2866);
```

#### 4. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L24-L30` → after: `L15-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L15-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/212.js#L15-L20) · [Before (L24-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/212.js#L24-L30)

```diff
-       return "firstPartyGame" === QQ.type ? {
-         type: "game",
-         gameNameWithVariation: QQ.gameNameWithVariation
-       } : {
-         type: "preview",
-         preview: QQ.preview
-       }
+       (0, Dk.reportClientError)("wasm_load", kk.message, kk.code)
+     }
+     const Sk = Dk.b - 4;
+ 
+     function bk(kk, ek, ik) {
+       (0, Dk.reportClientError)(kk, ek, ik, !1)
```

#### 5. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L33-L48` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/212.js#L23-L24) · [Before (L33-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/212.js#L33-L48)

```diff
-     function MQ(QQ) {
-       let {
-         game: FQ,
-         disabled: wQ,
-         showPlaceholder: LQ
-       } = QQ;
-       return null !== FQ ? (0, AQ.jsx)(YQ.f, {
-         source: eQ(FQ),
-         gameWidth: "100%",
-         useLongRatio: !0,
-         disabled: wQ,
-         entrySource: "customGamePlace"
-       }) : LQ ? (0, AQ.jsx)(YQ.d, {
-         gameWidth: "100%",
-         useLongRatio: !0
-       }) : null
+     function rk(kk, ek, ik) {
+       (0, Dk.reportClientError)(kk, ek, ik, !1, 1 / 0)
```

#### 6. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L51-L213` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/212.js#L27-L28) · [Before (L51-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/212.js#L51-L213)

```diff
-     function GQ(QQ) {
-       var FQ;
-       let {
-         category: wQ,
-         title: LQ,
-         tintColour: qQ,
-         layout: oQ,
-         games: DQ,
-         landscape: kQ = !1
-       } = QQ;
-       const {
-         followsLeader: vQ
-       } = (0, xQ.d)(), mQ = null !== (FQ = null === DQ || void 0 === DQ ? void 0 : DQ.slice(0, oQ.gameCount)) && void 0 !== FQ ? FQ : [], HQ = {
-         "--custom-game-place-tint": qQ
-       };
-       return (0, AQ.jsxs)("div", {
- ... (147 more removed lines; see GitHub link above)
+     function Pk(kk, ek, ik) {
+       (0, Dk.reportClientError)(kk, ek, ik, !1, Sk)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/213.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/213.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723)

#### 1. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L4-L7` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/213.js#L4-L10) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/213.js#L4-L7)

```diff
-   38620: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => oQ,
-       e: () => DQ
+   35892: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       ITEM_FILES_WITHOUT_SPRITE: () => rk,
+       ITEM_SPRITES: () => Sk,
+       ITEM_SPRITES_WITHOUT_FILE: () => bk,
+       ITEM_SPRITE_RUNS: () => fk,
+       MAX_SPRITE_ITEM_ID: () => Dk
```

#### 2. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L9-L140` → after: `L12-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/213.js#L12-L16) · [Before (L9-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/213.js#L9-L140)

```diff
-     var LQ = wQ(22);
-     let qQ = !1;
- 
-     function oQ() {
-       return qQ
-     }
- 
-     function DQ(QQ) {
-       qQ !== QQ && (qQ = QQ, LQ.l.GA("replayViewer|videoExportChanged"))
-     }
-   },
-   36110: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => bQ,
-       g: () => uQ,
-       h: () => YQ,
- ... (116 more removed lines; see GitHub link above)
+     const Dk = 10090,
+       fk = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
+       Sk = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
+       bk = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
+       rk = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/214.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/214.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352)

#### 1. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L5-L77` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L4-L6) · [Before (L5-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L5-L77)

```diff
-   39090: (QQ, FQ, wQ) => {
-     QQ.exports = qQ;
-     var LQ = wQ(334);
- 
-     function qQ(QQ, FQ) {
-       if (!(this instanceof qQ)) return new qQ(QQ, FQ);
-       var wQ = LQ.create();
-       LQ.add(wQ, QQ, FQ), this.base = LQ.min(LQ.create(), QQ, wQ), this.vec = LQ.clone(FQ), this.max = LQ.max(LQ.create(), QQ, wQ), this.mag = LQ.length(this.vec)
-     }
-     var oQ = qQ.prototype;
-     oQ.width = function() {
-       return this.vec[0]
-     }, oQ.height = function() {
-       return this.vec[1]
-     }, oQ.depth = function() {
-       return this.vec[2]
- ... (57 more removed lines; see GitHub link above)
+   35902: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       CreateCustomLobby: () => uk
```

#### 2. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L79-L139` → after: `L8-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L8-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L8-L34) · [Before (L79-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L79-L139)

```diff
-     var LQ = wQ(3965);
-     let qQ = null;
- 
-     function oQ(QQ) {
-       return null !== qQ && QQ === qQ
-     }
- 
-     function DQ() {
-       this.KJ = !1, this.stopPropagation = !1, this.aJ = !1, this.disabled = !1
-     }
-     class kQ {
-       constructor(QQ, FQ) {
-         this.version = "0.7.0";
-         var wQ = Object.assign({}, new DQ, FQ || {});
-         this.element = QQ || document, this.KJ = !!wQ.KJ, this.stopPropagation = !!wQ.stopPropagation, this.aJ = !!wQ.aJ, this.disabled = !!wQ.disabled, this.filterEvents = (QQ, FQ) => !0, this.ignoreEvent = QQ => !1, this.down = new LQ.EventEmitter, this.up = new LQ.EventEmitter … [truncated]
-           dx: 0,
- ... (45 more removed lines; see GitHub link above)
+     ik(35905);
+     var Dk = ik(4563),
+       fk = ik(60),
+       Sk = ik(1648),
+       bk = ik(1021),
+       rk = ik.n(bk),
+       Pk = ik(3098),
+       mk = ik(1104),
+       Mk = ik(1177),
+       Kk = ik(4528),
+       xk = ik(1410),
+       nk = ik(35908),
+       Uk = ik(1172),
+       Hk = ik(1311),
+       wk = ik(1479),
+       lk = ik(22),
+ ... (11 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L142-L144` → after: `L37-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L37-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L37-L62) · [Before (L142-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L142-L144)

```diff
-       window.addEventListener("keydown", tQ.bind(null, QQ, !0), !1), window.addEventListener("keyup", tQ.bind(null, QQ, !1), !1);
-       var FQ = {
-         passive: !0
+       var ek, ik, bk, uk;
+       let {
+         gameNameWithVariation: qk,
+         close: Ik,
+         initialDefaultGamemode: zk
+       } = kk;
+       const {
+         t: Qk
+       } = (0, Uk.D)(), vk = (0, wk.useNavigatePreserveSearch)(), [Ek, hk] = (0, fk.useState)("Enter"), [ak, Wk] = (0, fk.useState)(""), tk = fk.useRef(null), Xk = null === (ek = Lk.d[qk]) || void 0 === ek ? void 0 : ek.showWorldsInsteadOfCustomLobbies, Bk = Xk ? 1 : null === (ik  … [truncated]
+       zk || (zk = "classic_creative" === qk || "classic_creativeFlat" === qk ? "creative" : "classic" === qk ? "peaceful" : "survival");
+       const Zk = {
+         baseOptions: {
+           gameNameWithVariation: Xk ? "classic" : qk,
+           name: "",
+           visibility: "unlisted"
+         },
+ ... (10 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L146-L198` → after: `L64-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L64-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L64-L81) · [Before (L146-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L146-L198)

```diff
-       QQ.element.addEventListener("touchstart", YQ.bind(void 0, QQ), {
-         passive: !1
-       }), QQ.element.addEventListener("touchend", AQ.bind(void 0, QQ), FQ), QQ.element.addEventListener("mousedown", eQ.bind(null, QQ, !0), FQ), window.document.addEventListener("mouseup", eQ.bind(null, QQ, !1), FQ), QQ.element.addEventListener("touchmove", MQ.bind(null, QQ), FQ) … [truncated]
-     }
-     var uQ = 0,
-       HQ = 0,
-       bQ = null;
- 
-     function YQ(QQ, FQ) {
-       FQ.preventDefault(), xQ(FQ)
-     }
- 
-     function xQ(QQ) {
-       let FQ = !1;
-       for (let wQ = 0; wQ < QQ.touches.length; ++wQ)
-         if (QQ.touches[wQ].identifier === bQ) {
- ... (37 more removed lines; see GitHub link above)
+       Xk && (Zk.worldOptions = {
+         defaultGamemode: zk,
+         disableProtectors: !1,
+         spawnProtection: !0,
+         disableTpRequests: !1,
+         disableTribeCreation: !1,
+         disableLobbySpawn: !1,
+         voidDeathHeight: -1e4,
+         worldBorder: null,
+         disableFallDamage: !0,
+         disableMobs: !1,
+         worldGenSeed: "",
+         enableSmpMarketplace: !1,
+         enableSurvivalGuns: !1,
+         enableSpawnReset: !1,
+         enableDayNight: !0
+ ... (2 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L200-L213` → after: `L83-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L83-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L83-L90) · [Before (L200-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L200-L213)

```diff
-     function MQ(QQ, FQ) {
-       var wQ = FQ.movementX || FQ.mozMovementX || 0,
-         LQ = FQ.movementY || FQ.mozMovementY || 0;
-       if (FQ.touches && 0 === (wQ | LQ)) {
-         var qQ = function(QQ) {
-           xQ(QQ);
-           for (let FQ = 0; FQ < QQ.changedTouches.length; ++FQ)
-             if (QQ.changedTouches[FQ].identifier == bQ) {
-               const wQ = QQ.changedTouches[FQ],
-                 LQ = [wQ.clientX - uQ, wQ.clientY - HQ];
-               return uQ = wQ.clientX, HQ = wQ.clientY, LQ
-             } return console.error(`Did not find touch id ${bQ}`), [0, 0]
-         }(FQ);
-         wQ = qQ[0], LQ = qQ[1]
+       function Rk(kk, ek) {
+         gk({
+           ...Ok,
+           baseOptions: {
+             ...Ok.baseOptions,
+             [kk]: ek
+           }
+         })
```

#### 6. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L218-L229` → after: `L93-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L93-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L93-L100) · [Before (L218-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L218-L229)

```diff
-     function GQ(QQ, FQ) {
-       iQ(QQ, FQ);
-       var wQ = 1;
-       switch (FQ.deltaMode) {
-         case 0:
-           wQ = 1;
-           break;
-         case 1:
-           wQ = 12;
-           break;
-         case 2:
-           wQ = QQ.element.clientHeight || window.innerHeight
+       function Jk(kk, ek) {
+         gk({
+           ...Ok,
+           listedOptions: {
+             ...Ok.listedOptions,
+             [kk]: ek
+           }
+         })
```

#### 7. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L272-L283` → after: `L103-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L103-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L103-L110) · [Before (L272-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L272-L283)

```diff
-     function WQ(QQ, FQ) {
-       const wQ = {
-           code: FQ,
-           preventDefault: () => {},
-           stopPropagation: () => {}
-         },
-         LQ = qQ;
-       qQ = wQ;
-       try {
-         RQ(FQ, !1, QQ, wQ)
-       } finally {
-         qQ = LQ
+       function ke(kk, ek) {
+         gk({
+           ...Ok,
+           worldOptions: {
+             ...Ok.worldOptions,
+             [kk]: ek
+           }
+         })
```

#### 8. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L287-L300` → after: `L113-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L113-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L113-L118) · [Before (L287-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L287-L300)

```diff
-     function RQ(QQ, FQ, wQ, LQ) {
-       var qQ = wQ._keyBindmap[QQ];
-       qQ && (OQ(wQ._keyStates[QQ], FQ) && (wQ._keyStates[QQ] = FQ, qQ.forEach((QQ => {
-         (!wQ.filterEvents || wQ.filterEvents(LQ, QQ)) && function(QQ, FQ, wQ, LQ) {
-           var qQ = FQ ? wQ.pressCount : wQ.releaseCount;
-           qQ[QQ] = (qQ[QQ] || 0) + 1;
-           var oQ = wQ._bindPressCount[QQ] || 0;
-           (oQ += FQ ? 1 : -1) < 0 && (oQ = 0);
-           wQ._bindPressCount[QQ] = oQ;
-           var DQ = wQ.state[QQ];
-           if (OQ(DQ, oQ)) {
-             wQ.state[QQ] = oQ > 0;
-             var kQ = FQ ? wQ.down : wQ.up;
-             wQ.disabled || kQ.emit(QQ, LQ)
+       function ee(kk) {
+         gk({
+           ...Ok,
+           mapOptions: {
+             ...Ok.mapOptions,
+             ...kk
```

#### 9. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L302-L479` → after: `L120-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L120-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L120-L128) · [Before (L302-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L302-L479)

```diff
-         }(QQ, FQ, wQ, LQ)
-       }))), "button" in LQ || (wQ.KJ && !LQ.defaultPrevented && LQ.preventDefault(), wQ.stopPropagation && LQ.stopPropagation()))
-     }
- 
-     function OQ(QQ, FQ) {
-       return QQ ? !FQ : FQ
-     }
-   },
-   36166: (QQ, FQ) => {
-     function wQ(QQ) {
-       if (QQ && "object" === typeof QQ) {
-         var FQ = QQ.which || QQ.keyCode || QQ.charCode;
-         FQ && (QQ = FQ)
-       }
-       if ("number" === typeof QQ) return DQ[QQ];
-       var wQ, oQ = String(QQ);
- ... (162 more removed lines; see GitHub link above)
+         })
+       }(0, fk.useEffect)((() => {
+         Kk.d.getNewStarterName().then((kk => {
+           gk((ek => "" !== ek.baseOptions.name ? ek : {
+             ...ek,
+             baseOptions: {
+               ...ek.baseOptions,
+               name: kk
+             }
```

#### 10. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L481-L520` → after: `L130-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L130-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L130-L182) · [Before (L481-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L481-L520)

```diff
-       }
-     }
- 
-     function qQ() {
-       let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
-       this.nowObject = performance || Date, this.pollTime = QQ, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
-     }
-     var oQ = 3,
-       DQ = 20;
- 
-     function kQ(QQ) {
-       for (var FQ = QQ._data, wQ = 1e3 / QQ.mN, LQ = FQ.nowObject.now() + DQ, qQ = 0; FQ.nowObject.now() >= FQ.lastTickStarted + wQ && FQ.nowObject.now() < LQ && ++qQ <= oQ;) QQ.nG(wQ), FQ.lastTickStarted += wQ;
-       var kQ = 5 * (wQ + 5),
-         vQ = FQ.nowObject.now();
-       if (vQ - FQ.lastTickStarted > kQ)
-         for (; vQ >= FQ.lastTickStarted + wQ;) FQ.lastTickStarted += wQ
- ... (24 more removed lines; see GitHub link above)
+         })).catch((kk => {
+           console.error("Error getting new starter name:", kk)
+         }))
+       }), []), (0, fk.useEffect)((() => {
+         "customSchematic" === Ok.mapOptions.mapType && null === Gk && (0, mk.postJsonWithMetricsCookiesAndJsonResponse)(`${Mk.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
+           retries: 0,
+           minTimeout: 3e3
+         }).then((kk => {
+           Nk(kk)
+         }))
+       }), [Ok.mapOptions.mapType, Gk]);
+       const ie = {
+           tpRequests: {
+             isEnabled: () => !Ok.worldOptions.disableTpRequests,
+             bV: kk => {
+               ke("disableTpRequests", !kk)
+ ... (37 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L522-L659` → after: `L184-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L184-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L184-L474) · [Before (L522-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L522-L659)

```diff
-       }), [])
-     }
-   },
-   36218: QQ => {
-     var FQ, wQ = "undefined" !== typeof window ? window.navigator.userAgent : "",
-       LQ = /OS X/.test(wQ),
-       qQ = /Opera/.test(wQ),
-       oQ = !/like Gecko/.test(wQ) && !qQ,
-       DQ = QQ.exports = {
-         0: LQ ? "<menu>" : "<UNK>",
-         1: "<mouse 1>",
-         2: "<mouse 2>",
-         3: "<break>",
-         4: "<mouse 3>",
-         5: "<mouse 4>",
-         6: "<mouse 5>",
- ... (122 more removed lines; see GitHub link above)
+         },
+         De = "Enter" !== Ek,
+         fe = (0, Fk.jsx)(Yk.f, {
+           className: "NameInput",
+           label: "general:name",
+           disabled: "Enter" !== Ek,
+           children: (0, Fk.jsx)(Sk.b, {
+             domRef: tk,
+             onValueChange: (kk, ek) => {
+               const ik = (0, Ak.sb)(kk);
+               Rk("name", ik), tk.current.value = ik
+             },
+             maxLength: Ak.M,
+             defaultValue: Ok.baseOptions.name
+           })
+         });
+ ... (275 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L666` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L478) · [Before (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L666)

```diff
-   38200: (QQ, FQ, wQ) => {
+   35917: (kk, ek, ik) => {
```

#### 13. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L670-L706` → after: `L482-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L482-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L482-L503) · [Before (L670-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L670-L706)

```diff
-     var LQ = wQ(38203);
-     const qQ = (QQ, FQ, wQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : wQ && "object" === typeof QQ ? {
-       ...QQ
-     } : null : QQ.clone(FQ) : null;
-     class oQ {
-       static DeepCopy(QQ, FQ, wQ, oQ) {
-         let DQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const kQ = function(QQ) {
-           const FQ = [];
-           do {
-             const wQ = Object.getOwnPropertyNames(QQ);
-             for (const QQ of wQ) - 1 === FQ.indexOf(QQ) && FQ.push(QQ)
-           } while (QQ = Object.getPrototypeOf(QQ));
-           return FQ
-         }(QQ);
-         for (const mQ of kQ) {
- ... (21 more removed lines; see GitHub link above)
+     var Dk = ik(1021),
+       fk = ik.n(Dk),
+       Sk = ik(60),
+       bk = ik(4519),
+       rk = ik(1066);
+ 
+     function Pk(kk) {
+       let {
+         locked: ek,
+         children: ik
+       } = kk;
+       const Dk = (0, Sk.useRef)(null),
+         Pk = (0, bk.e)(Dk, "y");
+       return (0, rk.jsx)("div", {
+         ref: Dk,
+         className: fk()("CreateCustomLobbyBody", {
+ ... (6 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L709` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L506) · [Before (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L709)

```diff
-   38236: (QQ, FQ, wQ) => {
+   35908: (kk, ek, ik) => {
```

#### 15. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L711-L714` → after: `L508-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L508-L509) · [Before (L711-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L711-L714)

```diff
-       e: () => qQ,
-       f: () => oQ,
-       j: () => DQ,
-       k: () => kQ
+       b: () => Mk,
+       f: () => xk
```

#### 16. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L716-L736` → after: `L511-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L511-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L511-L553) · [Before (L716-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L716-L736)

```diff
-     var LQ = wQ(36873);
-     class qQ {
-       constructor(QQ, FQ, wQ) {
-         this.gradient = QQ, this.color1 = FQ, this.color2 = wQ
-       }
-       getColorToRef(QQ) {
-         this.color2 ? LQ.e.LerpToRef(this.color1, this.color2, Math.random(), QQ) : QQ.Qs(this.color1)
-       }
-     }
-     class oQ {
-       constructor(QQ, FQ) {
-         this.gradient = QQ, this.color = FQ
-       }
-     }
-     class DQ {
-       constructor(QQ, FQ, wQ) {
- ... (5 more removed lines; see GitHub link above)
+     var Dk = ik(60),
+       fk = ik(1333),
+       Sk = ik(1172),
+       bk = ik(1327),
+       rk = ik(3433),
+       Pk = ik(4860),
+       mk = ik(1066);
+ 
+     function Mk(kk) {
+       let {
+         loading: ek,
+         schematics: ik,
+         onSchematicPicked: Dk,
+         selectedSchematicIdList: fk = [],
+         disableAutoExport: Pk
+       } = kk;
+ ... (27 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L738-L745` → after: `L555-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L555-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L555-L592) · [Before (L738-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L738-L745)

```diff
-     class kQ {
-       static GetCurrentGradient(QQ, FQ, wQ) {
-         if (FQ[0].gradient > QQ) return void wQ(FQ[0], FQ[0], 1);
-         for (let qQ = 0; qQ < FQ.length - 1; qQ++) {
-           const LQ = FQ[qQ],
-             oQ = FQ[qQ + 1];
-           if (QQ >= LQ.gradient && QQ <= oQ.gradient) {
-             return void wQ(LQ, oQ, (QQ - LQ.gradient) / (oQ.gradient - LQ.gradient))
+ 
+     function Kk(kk) {
+       let {
+         ownedSchematics: ek,
+         currentWorldSchematicId: ik,
+         onClose: fk
+       } = kk;
+       const {
+         t: bk
+       } = (0, Sk.D)(), [rk, Kk] = (0, Dk.useState)(null);
+       return (0, mk.jsxs)("div", {
+         className: "SchematicListWindow",
+         children: [null === rk && (0, mk.jsxs)(mk.Fragment, {
+           children: [(0, mk.jsx)("h1", {
+             className: "SchematicPopupTitle",
+             children: bk("worldBuilder:schematicList")
+ ... (22 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L747-L750` → after: `L594-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L594-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L594-L595) · [Before (L747-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L747-L750)

```diff
-         }
-         const LQ = FQ.length - 1;
-         wQ(FQ[LQ], FQ[LQ], 1)
-       }
+         })]
+       })
```

#### 19. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L752-L808` → after: `L597-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L597-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L597-L613) · [Before (L752-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L752-L808)

```diff
-   },
-   38203: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => LQ
-     });
-     class LQ {
-       static _CheckLimit(QQ, FQ) {
-         let wQ = LQ._LogLimitOutputs[QQ];
-         return wQ ? wQ.current++ : (wQ = {
-           limit: FQ,
-           current: 1
-         }, LQ._LogLimitOutputs[QQ] = wQ), wQ.current <= wQ.limit
-       }
-       static _GenerateLimitMessage(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const wQ = LQ._LogLimitOutputs[QQ];
- ... (41 more removed lines; see GitHub link above)
+ 
+     function xk(kk) {
+       let {
+         ownedSchematics: ek,
+         currentWorldSchematicId: ik,
+         onClose: Dk
+       } = kk;
+       fk.NotificationProvider.showCustomPopup({
+         body: kk => (0, mk.jsx)(Kk, {
+           ownedSchematics: ek,
+           currentWorldSchematicId: ik,
+           onClose: kk
+         }),
+         middleScreenPopupClassName: "SchematicPopup",
+         onClose: Dk,
+         unlockPointerKey: "schematicListPopup"
+ ... (1 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L824` → after: `L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L616) · [Before (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L824)

```diff
-   38244: (QQ, FQ, wQ) => {
+   35913: (kk, ek, ik) => {
```

#### 21. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L828-L927` → after: `L621-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L621-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L621-L663) · [Before (L828-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L828-L927)

```diff
-     var LQ = wQ(36696),
-       qQ = wQ(36729),
-       oQ = wQ(38200);
-     class DQ {
-       constructor() {
-         this.direction1 = new LQ.p(0, 1, 0), this.direction2 = new LQ.p(0, 1, 0), this.minEmitBox = new LQ.p(-.5, -.5, -.5), this.maxEmitBox = new LQ.p(.5, .5, .5)
-       }
-       startDirectionFunction(QQ, FQ, wQ, oQ) {
-         const DQ = (0, qQ.RandomRange)(this.direction1.x, this.direction2.x),
-           kQ = (0, qQ.RandomRange)(this.direction1.y, this.direction2.y),
-           vQ = (0, qQ.RandomRange)(this.direction1.z, this.direction2.z);
-         if (oQ) return FQ.x = DQ, FQ.y = kQ, void(FQ.z = vQ);
-         LQ.p.TransformNormalFromFloatsToRef(DQ, kQ, vQ, QQ, FQ)
-       }
-       startPositionFunction(QQ, FQ, wQ, oQ) {
-         const DQ = (0, qQ.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
- ... (84 more removed lines; see GitHub link above)
+     ik(60);
+     var Dk = ik(1021),
+       fk = ik.n(Dk),
+       Sk = ik(4563),
+       bk = ik(302),
+       rk = ik(1172),
+       Pk = ik(1066);
+ 
+     function mk(kk) {
+       let {
+         value: ek,
+         onChange: ik,
+         showAll: Dk,
+         disabled: mk = !1
+       } = kk;
+       const {
+ ... (27 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L929-L966` → after: `L665-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L665-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L665-L702) · [Before (L929-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L929-L966)

```diff
-     class kQ extends DQ {
-       constructor() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
-           qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new LQ.p(0, 1, 0),
-           oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new LQ.p(0, 1, 0);
-         super(QQ, FQ, wQ), this.direction1 = qQ, this.direction2 = oQ
-       }
-       startDirectionFunction(QQ, FQ, wQ, oQ) {
-         const DQ = (0, qQ.RandomRange)(this.direction1.x, this.direction2.x),
-           kQ = (0, qQ.RandomRange)(this.direction1.y, this.direction2.y),
-           vQ = (0, qQ.RandomRange)(this.direction1.z, this.direction2.z);
-         oQ ? FQ.vQQ(DQ, kQ, vQ) : LQ.p.TransformNormalFromFloatsToRef(DQ, kQ, vQ, QQ, FQ)
-       }
-       clone() {
- ... (22 more removed lines; see GitHub link above)
+ 
+     function Mk(kk) {
+       let {
+         mapTypes: ek,
+         value: ik,
+         onChange: Dk,
+         showAll: mk,
+         disabled: Mk = !1,
+         children: Kk
+       } = kk;
+       const {
+         t: xk
+       } = (0, rk.D)();
+       return (0, Pk.jsxs)("div", {
+         className: fk()("BloxdForm MapTypeForm", {
+           BasicOptions: !mk
+ ... (22 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L969-L1193` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/214.js#L705) · [Before (L969-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/214.js#L969-L1193)

```diff
-   38321: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => HQ
-     });
-     const LQ = .5 * (Math.sqrt(3) - 1),
-       qQ = (3 - Math.sqrt(3)) / 6,
-       oQ = 1 / 3,
-       DQ = 1 / 6,
-       kQ = (Math.sqrt(5) - 1) / 4,
-       vQ = (5 - Math.sqrt(5)) / 20,
-       mQ = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
-       uQ = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0,  … [truncated]
-     const HQ = class {
-       constructor() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
-         const FQ = "function" == typeof QQ ? QQ : function(QQ) {
- ... (209 more removed lines; see GitHub link above)
+   35905: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/215.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/215.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17)

#### 1. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L4-L6)

```diff
-   40485: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       LobbyManageView: () => pF
+   35908: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => Mk,
+       f: () => xk
```

#### 2. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L8-L105` → after: `L9-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L9-L15) · [Before (L8-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L8-L105)

```diff
-     var LQ = wQ(53),
-       qQ = wQ(1471),
-       oQ = wQ(2345),
-       DQ = wQ(2359),
-       kQ = wQ(2367),
-       vQ = wQ(36193);
- 
-     function mQ() {
-       const [QQ, FQ] = (0, LQ.useState)(new Map);
-       return {
-         get: FQ => QQ.get(FQ),
-         hold: (0, LQ.useCallback)(((QQ, wQ, LQ) => {
-           FQ((FQ => new Map(FQ).set(QQ, wQ))), LQ.then((() => {
-             FQ((FQ => {
-               const wQ = new Map(FQ);
-               return wQ.delete(QQ), wQ
- ... (82 more removed lines; see GitHub link above)
+     var Dk = ik(60),
+       fk = ik(1333),
+       Sk = ik(1172),
+       bk = ik(1327),
+       rk = ik(3433),
+       Pk = ik(4860),
+       mk = ik(1066);
```

#### 3. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L109` → after: `L19-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L19-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L19-L23) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L109)

```diff
-         status: FQ
+         loading: ek,
+         schematics: ik,
+         onSchematicPicked: Dk,
+         selectedSchematicIdList: fk = [],
+         disableAutoExport: Pk
```

#### 4. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L111-L117` → after: `L25-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L25-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L25-L50) · [Before (L111-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L111-L117)

```diff
-       return (0, TQ.jsx)("span", {
-         className: HQ()("LobbyManageStatus", {
-           LobbyManageStatusRefused: !FQ.ok
-         }),
-         children: (0, TQ.jsx)(UQ.e, {
-           text: FQ.text
-         })
+       const {
+         t: Mk
+       } = (0, Sk.D)();
+       return (0, mk.jsxs)("div", {
+         className: "SchematicList",
+         children: [ek && (0, mk.jsx)(bk.d, {}), !ek && 0 === ik.length && (0, mk.jsx)("div", {
+           className: "NoSchematicsText",
+           children: Mk("worldBuilder:noSavedSchematic")
+         }), !ek && ik.map((kk => (0, mk.jsx)(rk.g, {
+           source: {
+             type: "schematic",
+             schematic: kk
+           },
+           gameWidth: "25%",
+           useLongRatio: !0,
+           onClick: () => {
+ ... (10 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L123-L128` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L56-L58) · [Before (L123-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L123-L128)

```diff
-         names: FQ,
-         cap: wQ,
-         filterFrom: qQ,
-         moreLabel: oQ,
-         reveal: DQ = null,
-         renderRow: kQ
+         ownedSchematics: ek,
+         currentWorldSchematicId: ik,
+         onClose: fk
```

#### 6. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L132-L139` → after: `L62-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L62-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L62-L86) · [Before (L132-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L132-L139)

```diff
-       } = (0, bQ.y)(), [mQ, uQ] = (0, LQ.useState)(!1), [HQ, xQ] = (0, LQ.useState)(""), tQ = mQ || null !== DQ && FQ.indexOf(DQ) >= wQ, eQ = (tQ || FQ.length <= wQ) && null !== qQ && FQ.length > qQ, MQ = HQ.trim().toLowerCase();
-       let GQ = tQ ? FQ : FQ.slice(0, wQ);
-       return eQ && "" !== MQ && (GQ = GQ.filter((QQ => QQ.toLowerCase().includes(MQ)))), (0, TQ.jsxs)(TQ.Fragment, {
-         children: [eQ && (0, TQ.jsx)(NQ.b, {
-           className: "LobbyManageFilter",
-           placeholderText: vQ("lobbyManage:findName"),
-           ariaLabel: vQ("lobbyManage:findName"),
-           onValueChange: QQ => {
+       } = (0, Sk.D)(), [rk, Kk] = (0, Dk.useState)(null);
+       return (0, mk.jsxs)("div", {
+         className: "SchematicListWindow",
+         children: [null === rk && (0, mk.jsxs)(mk.Fragment, {
+           children: [(0, mk.jsx)("h1", {
+             className: "SchematicPopupTitle",
+             children: bk("worldBuilder:schematicList")
+           }), (0, mk.jsx)("h2", {
+             className: "SchematicPopupSubtitle",
+             children: bk("worldBuilder:clickSchematicForOptions")
+           }), (0, mk.jsx)("div", {
+             className: "SchematicPopupSchematicListContainer",
+             children: (0, mk.jsx)(Mk, {
+               loading: !1,
+               schematics: ek,
+               onSchematicPicked: kk => {
+ ... (9 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L163-L168` → after: `L98-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L98-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L98-L100) · [Before (L163-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L163-L168)

```diff
-         value: FQ,
-         placeholder: wQ,
-         ariaLabel: qQ,
-         maxLength: oQ,
-         wide: DQ = !1,
-         onSave: kQ
+         ownedSchematics: ek,
+         currentWorldSchematicId: ik,
+         onClose: Dk
```

#### 8. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L170-L194` → after: `L102-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L102-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L102-L106) · [Before (L170-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L170-L194)

```diff
-       const vQ = (0, LQ.useRef)(null),
-         [mQ, uQ] = (0, LQ.useState)(0),
-         bQ = (0, LQ.useRef)(!0),
-         YQ = (0, LQ.useRef)(null),
-         xQ = (0, LQ.useRef)({
-           value: FQ,
-           onSave: kQ
-         });
-       xQ.current = {
-         value: FQ,
-         onSave: kQ
-       };
-       const AQ = () => {
-         const QQ = YQ.current;
-         YQ.current = null, null !== QQ && QQ !== xQ.current.value && xQ.current.onSave(QQ).then((() => {
-           bQ.current && uQ((QQ => QQ + 1))
- ... (9 more removed lines; see GitHub link above)
+       fk.NotificationProvider.showCustomPopup({
+         body: kk => (0, mk.jsx)(Kk, {
+           ownedSchematics: ek,
+           currentWorldSchematicId: ik,
+           onClose: kk
```

#### 9. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L196-L439` → after: `L108-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L108-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L108-L110) · [Before (L196-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L196-L439)

```diff
-         onBlur: AQ,
-         children: (0, TQ.jsx)(NQ.b, {
-           domRef: vQ,
-           defaultValue: FQ,
-           placeholderText: wQ,
-           ariaLabel: qQ,
-           maxLength: oQ,
-           onValueChange: QQ => {
-             YQ.current = QQ
-           },
-           onEnter: AQ
-         })
-       })
-     }
-     const jQ = ["mod", "coOwner"],
-       aQ = {
- ... (228 more removed lines; see GitHub link above)
+         middleScreenPopupClassName: "SchematicPopup",
+         onClose: Dk,
+         unlockPointerKey: "schematicListPopup"
```

#### 10. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L446-L448` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L135) · [Before (L446-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L446-L448)

```diff
-         manage: DQ,
-         focusRequest: kQ,
-         onFocused: vQ
+         onFilePicked: ek
```

#### 11. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L452-L488` → after: `L139-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L139-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L139-L148) · [Before (L452-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L452-L488)

```diff
-       } = (0, bQ.y)(), uQ = (0, MQ.k)("players"), HQ = (0, MQ.k)("hiddenPlayerNames"), xQ = (0, LQ.useRef)(null), {
-         state: tQ
-       } = DQ, eQ = null === uQ.localId ? null : null !== (FQ = null === (wQ = uQ.byId[uQ.localId]) || void 0 === wQ ? void 0 : wQ.name) && void 0 !== FQ ? FQ : null, [pQ] = (0, LQ.useState)((() => cQ(tQ, eQ))), SQ = function(QQ, FQ, wQ) {
-         const LQ = new Set([...QQ.here, ...QQ.away, ...QQ.banned]),
-           qQ = cQ(FQ, wQ),
-           oQ = FQ => {
-             const wQ = qQ[FQ].filter((QQ => !LQ.has(QQ)));
-             for (const QQ of wQ) LQ.add(QQ);
-             return [...QQ[FQ], ...wQ]
-           };
-         return {
-           here: oQ("here"),
-           away: oQ("away"),
-           banned: oQ("banned")
-         }
-       }(pQ, tQ, eQ), [iQ, WQ] = (0, LQ.useState)(!1), RQ = function(QQ, FQ) {
- ... (21 more removed lines; see GitHub link above)
+       } = (0, Uk.D)(), [Dk, fk] = (0, Mk.useState)(null), {
+         getRootProps: Sk,
+         getInputProps: bk,
+         isDragActive: Pk
+       } = (0, rk.e)({
+         onDrop: kk => {
+           kk.length > 0 && fk(kk[0])
+         },
+         useFsAccessApi: !1
+       }), Kk = Dk && Dk.size > 1024 * nk.Wc;
```

#### 12. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L490-L508` → after: `L150-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L150-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L150-L171) · [Before (L490-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L490-L508)

```diff
-         ref: xQ,
-         className: "LobbyManagePage",
-         children: [SQ.here.length > 0 && (0, TQ.jsxs)("div", {
-           className: "LobbyManageBox",
-           children: [(0, TQ.jsxs)("div", {
-             className: "LobbyManageBoxHeading",
-             children: [(0, TQ.jsx)(AQ.b, {
-               label: mQ("lobbyManage:here"),
-               meta: tQ.here.length
-             }), RQ >= 2 && !iQ && (0, TQ.jsxs)(GQ.G, {
-               className: "LobbyManageTitleAction SmallTextLight",
-               padDestructive: !0,
-               disabled: DQ.isPending("kickAll"),
-               onClick: () => {
-                 WQ(!0)
-               },
- ... (3 more removed lines; see GitHub link above)
+         className: "SchematicUploadContainer",
+         children: [(0, wk.jsxs)("div", {
+           ...Sk({
+             className: mk()("SchematicUpload", {
+               ActiveDrag: Pk
+             })
+           }),
+           children: [(0, wk.jsx)("input", {
+             ...bk({
+               accept: ".bloxdschem"
+             })
+           }), !Pk && Dk ? (0, wk.jsxs)(wk.Fragment, {
+             children: [(0, wk.jsx)("div", {
+               className: mk()("SchematicUploadIcon", "Active", {
+                 TooBig: Kk
+               }),
+ ... (6 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L510-L515` → after: `L173-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L173-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L173-L177) · [Before (L510-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L510-L515)

```diff
-           }), iQ && RQ >= 2 && (0, TQ.jsxs)("div", {
-             className: "LobbyManageConfirm",
-             children: [(0, TQ.jsx)("span", {
-               className: "LobbyManageConfirmText",
-               children: mQ("lobbyManage:kickAllConfirm", {
-                 count: RQ
+           }) : (0, wk.jsxs)(wk.Fragment, {
+             children: [(0, wk.jsx)("div", {
+               className: "SchematicUploadIcon",
+               children: (0, wk.jsx)(Hk.d, {
+                 name: "up-from-bracket"
```

#### 14. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L517-L536` → after: `L179-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L179-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L179-L181) · [Before (L517-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L517-L536)

```diff
-             }), (0, TQ.jsxs)("div", {
-               className: "LobbyManageButtons",
-               children: [(0, TQ.jsx)(GQ.F, {
-                 className: "LobbyManageIconButton SmallTextLight",
-                 analyticsClick: {
-                   id: "lobby_manage.kick_all"
-                 },
-                 onClick: () => {
-                   WQ(!1), DQ.send({
-                     type: "kickAll"
-                   }, "kickAll")
-                 },
-                 children: mQ("lobbyManage:kickAll")
-               }), (0, TQ.jsx)(GQ.i, {
-                 className: "LobbyManageIconButton SmallTextLight",
-                 onClick: () => {
- ... (4 more removed lines; see GitHub link above)
+             }), (0, wk.jsx)("div", {
+               className: "SchematicUploadInstructions",
+               children: ik("worldBuilder:dragAFileHere")
```

#### 15. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L565-L708` → after: `L184-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L184-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L184-L192) · [Before (L565-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L565-L708)

```diff
-         }), SQ.banned.length > 0 && (0, TQ.jsxs)("div", {
-           className: "LobbyManageBox",
-           children: [(0, TQ.jsx)(AQ.b, {
-             label: mQ("lobbyManage:banned"),
-             meta: SQ.banned.length
-           }), (0, TQ.jsx)(zQ, {
-             names: SQ.banned,
-             cap: 5,
-             filterFrom: 20,
-             moreLabel: mQ("lobbyManage:allCount", {
-               count: SQ.banned.length
-             }),
-             reveal: null !== (oQ = null === kQ || void 0 === kQ ? void 0 : kQ.name) && void 0 !== oQ ? oQ : null,
-             renderRow: sQ("banned")
-           })]
-         })]
- ... (128 more removed lines; see GitHub link above)
+         }), (0, wk.jsx)(xk.r, {
+           disabled: Kk || !Dk,
+           className: "SchematicUploadButton",
+           onClick: () => {
+             !Kk && Dk && ek(Dk)
+           },
+           children: Kk ? ik("worldBuilder:fileTooBig", {
+             maxSizeKb: nk.Wc
+           }) : ik("worldBuilder:upload")
```

#### 16. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L715-L716` → after: `L199-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L199-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L199-L202) · [Before (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L715-L716)

```diff
-         manage: FQ,
-         listing: wQ
+         ownedSchematics: ek,
+         onClose: ik,
+         onChosenPreset: Dk,
+         onChosenFile: fk
```

#### 17. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L720-L732` → after: `L206-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L206-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L206-L222) · [Before (L720-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L720-L732)

```diff
-       } = (0, bQ.y)(), oQ = (QQ, wQ) => ((0, qQ.reportAnalyticsClick)({
-         id: "lobby_manage.set_listing",
-         value: QQ
-       }), FQ.send({
-         type: "setListing",
-         field: QQ,
-         value: wQ
-       }, `listing:${QQ}`)), DQ = QQ => {
-         const wQ = FQ.statusOf(`listing:${QQ}`);
-         return wQ && !wQ.ok && (0, TQ.jsx)("div", {
-           className: "LobbyManageFieldError",
-           children: (0, TQ.jsx)(KQ, {
-             status: wQ
+       } = (0, Uk.D)();
+       return (0, wk.jsxs)(wk.Fragment, {
+         children: [(0, wk.jsx)("h1", {
+           className: "SchematicPopupTitle",
+           children: Sk("worldBuilder:loadSchematic")
+         }), (0, wk.jsx)("h2", {
+           className: "SchematicPopupSubtitle",
+           children: Sk("worldBuilder:chooseOneOfYourSchematics")
+         }), (0, wk.jsx)("div", {
+           className: "SchematicPopupSchematicListContainer",
+           children: (0, wk.jsx)(bk.b, {
+             schematics: ek,
+             onSchematicPicked: kk => {
+               Dk(kk.schematicId), ik()
+             },
+             loading: !1,
+ ... (1 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L734-L770` → after: `L224-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L224-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L224-L234) · [Before (L734-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L734-L770)

```diff
-         })
-       };
-       return (0, TQ.jsxs)("div", {
-         className: "LobbyManageBox LobbyManageListing",
-         children: [(0, TQ.jsx)(AQ.b, {
-           label: LQ("lobbyManage:inWorldsList")
-         }), (0, TQ.jsxs)("div", {
-           className: "LobbyManageRuleRow",
-           children: [(0, TQ.jsx)("div", {
-             className: "SliderText",
-             children: LQ("lobbyManage:description")
-           }), (0, TQ.jsx)(lQ, {
-             value: wQ.description,
-             ariaLabel: LQ("lobbyManage:description"),
-             wide: !0,
-             onSave: QQ => oQ("description", QQ)
- ... (21 more removed lines; see GitHub link above)
+         }), (0, wk.jsx)("h2", {
+           className: "SchematicPopupSubtitle",
+           children: Sk("worldBuilder:uploadNewSchematic")
+         }), (0, wk.jsx)(lk, {
+           onFilePicked: async kk => {
+             try {
+               await fk(kk)
+             } catch (ek) {
+               console.warn("Schematic upload failed", ek)
+             } finally {
+               ik()
```

#### 19. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L988-L989` → after: `L248-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L248-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L248-L252) · [Before (L988-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L988-L989)

```diff
-         manage: wQ,
-         lobbyName: LQ
+         ownedSchematics: ik,
+         onClose: Dk,
+         onChosenEdit: fk,
+         onChosenNew: Sk,
+         onChosenDownload: rk
```

#### 20. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L993-L1001` → after: `L256-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L256-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L256-L264) · [Before (L993-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L993-L1001)

```diff
-       } = (0, bQ.y)(), {
-         state: DQ
-       } = wQ, kQ = mQ(), vQ = null !== (FQ = DQ.whitelist) && void 0 !== FQ ? FQ : [];
-       return (0, TQ.jsxs)("div", {
-         className: "LobbyManagePage",
-         children: [(0, TQ.jsxs)("div", {
-           className: "LobbyManageBox",
-           children: [(0, TQ.jsx)(AQ.b, {
-             label: oQ("worldSocial:whoCanJoin")
+       } = (0, Uk.D)(), [mk, Kk] = (0, Mk.useState)("choose"), [nk, Hk] = (0, Mk.useState)(null), [lk, pk] = (0, Mk.useState)(null);
+       return (0, wk.jsxs)(wk.Fragment, {
+         children: [(0, wk.jsx)("h1", {
+           className: "SchematicPopupTitle",
+           children: Pk("worldBuilder:saveSchematic")
+         }), "choose" === mk && (0, wk.jsxs)(wk.Fragment, {
+           children: [(0, wk.jsx)("h2", {
+             className: "SchematicPopupSubtitle",
+             children: Pk("worldBuilder:overwriteOneOfYourSchematics")
```

#### 21. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1003-L1004` → after: `L266-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L266-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L266-L292) · [Before (L1003-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L1003-L1004)

```diff
-             className: "LobbyManageModeText",
-             children: oQ(`worldSocial:${DQ.visibility}`)
+             className: "SchematicPopupSchematicListContainer",
+             children: (0, wk.jsx)(bk.b, {
+               schematics: ik,
+               onSchematicPicked: kk => {
+                 Hk(kk.schematicId), pk("existing"), Kk("save")
+               },
+               loading: !1,
+               disableAutoExport: !1
+             })
+           }), (0, wk.jsx)("h2", {
+             className: "SchematicPopupSubtitle",
+             children: Pk("general:otherOptions")
+           }), (0, wk.jsxs)("div", {
+             className: "OtherOptions",
+             children: [(0, wk.jsx)(xk.r, {
+               className: "ChooseUploadSchematicButton",
+ ... (11 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1006-L1028` → after: `L294-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L294-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L294-L298) · [Before (L1006-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L1006-L1028)

```diff
-         }), "whitelist" === DQ.visibility && DQ.you.canEditWhitelist && (0, TQ.jsx)(dQ, {
-           state: DQ,
-           lobbyName: LQ,
-           listed: vQ,
-           isListed: QQ => {
-             var FQ;
-             return null !== (FQ = kQ.get(QQ.toLowerCase())) && void 0 !== FQ ? FQ : (0, gQ.h)(vQ, QQ)
-           },
-           nG: (QQ, FQ) => {
-             (0, qQ.reportAnalyticsClick)(FQ ? {
-               id: "lobby_manage.whitelist_add",
-               value: "fH"
-             } : {
-               id: "lobby_manage.whitelist_remove"
-             });
-             const LQ = QQ.toLowerCase();
- ... (7 more removed lines; see GitHub link above)
+         }), "choose" !== mk && (0, wk.jsx)(jk, {
+           type: lk,
+           ownedSchematics: ik,
+           onSubmit: (kk, ek, ik) => {
+             "file" === lk ? rk(ek, kk) : "new" === lk ? Sk(ek, ik, kk) : fk(nk, ek, ik, kk), Dk()
```

#### 23. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1030-L1046` → after: `L300-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L300-L301) · [Before (L1030-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L1030-L1046)

```diff
-           uC: async QQ => {
-             (0, qQ.reportAnalyticsClick)({
-               id: "lobby_manage.whitelist_add",
-               value: "field"
-             });
-             const FQ = await wQ.send({
-               type: "whitelistAdd",
-               names: [QQ]
-             }, "whitelist-field");
-             return FQ.ok ? {
-               ok: !0
-             } : {
-               ok: !1,
-               error: (0, TQ.jsx)(UQ.e, {
-                 text: FQ.message
-               })
- ... (1 more removed lines; see GitHub link above)
+           onBack: () => {
+             Kk("choose")
```

#### 24. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1048-L1051` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L303) · [Before (L1048-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L1048-L1051)

```diff
-           statusOf: QQ => wQ.statusOf(`whitelist:${QQ.toLowerCase()}`)
-         }), "public" === DQ.visibility && null !== DQ.listing && (0, TQ.jsx)(QF, {
-           manage: wQ,
-           listing: DQ.listing
+           prepopName: "existing" === lk ? null === (ek = ik.find((kk => kk.schematicId === nk))) || void 0 === ek ? void 0 : ek.name : null
```

#### 25. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1169-L1171` → after: `L310-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L310-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L310-L314) · [Before (L1169-L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L1169-L1171)

```diff
-         names: FQ,
-         pending: wQ,
-         onAction: qQ
+         type: ek,
+         prepopName: ik,
+         ownedSchematics: Dk,
+         onSubmit: fk,
+         onBack: Sk
```

#### 26. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1175-L1177` → after: `L318-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L318-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L318-L323) · [Before (L1175-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L1175-L1177)

```diff
-       } = (0, bQ.y)(), DQ = (0, LQ.useRef)(null), [kQ, vQ] = (0, LQ.useState)(""), mQ = () => {
-         const QQ = kQ.trim();
-         "" !== QQ && (qQ(QQ, "add"), DQ.current && (DQ.current.value = ""), vQ(""))
+       } = (0, Uk.D)(), [rk, Pk] = (0, Mk.useState)(""), [Kk, nk] = (0, Mk.useState)(""), [Hk, lk] = (0, Mk.useState)(null), [pk, yk] = (0, Mk.useState)(!0), Ak = kk => {
+         var ik;
+         kk = null !== (ik = kk) && void 0 !== ik ? ik : rk;
+         const fk = "new" === ek ? (0, Ck.w)(kk) : null,
+           Sk = [...(0, Ck.Bb)(kk), ...fk ? [fk] : []];
+         return Sk.length > 0 ? (lk(Sk.join(", ")), !1) : "new" === ek && Dk.find((ek => ek.name === kk)) ? (lk(bk("worldBuilder:schematicAlreadyExists")), !1) : (lk(null), !0)
```

#### 27. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1180-L1269` → after: `L326-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L326-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L326-L336) · [Before (L1180-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L1180-L1269)

```diff
-         className: "LobbyManageNames",
-         children: [FQ.map((QQ => (0, TQ.jsxs)("div", {
-           className: "LobbyManageName",
-           children: [(0, TQ.jsx)("span", {
-             className: "LobbyManageNameText",
-             children: QQ
-           }), (0, TQ.jsx)(GQ.i, {
-             className: "LobbyManageIconButton SmallTextLight",
-             ariaLabel: oQ("lobbyManage:removeName", {
-               name: QQ
-             }),
-             disabled: wQ,
-             onClick: () => {
-               qQ(QQ, "remove")
-             },
-             children: (0, TQ.jsx)(YQ.c, {
- ... (74 more removed lines; see GitHub link above)
+         className: "SaveSchematicWindow",
+         children: [(0, wk.jsx)("h2", {
+           className: "SchematicPopupSubtitle",
+           children: bk("general:name")
+         }), (0, wk.jsx)(Yk.b, {
+           className: mk()("SaveSchematicName", {
+             Error: Hk
+           }),
+           forcedText: ik,
+           onValueChange: kk => {
+             Pk(kk), Ak(kk)
```

#### 28. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1271-L1340` → after: `L338-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L338-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L338-L342) · [Before (L1271-L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L1271-L1340)

```diff
-           ...void 0 === LQ ? {} : {
-             op: LQ
-           }
-         }, `rule:${QQ.key}`, void 0 === LQ ? oQ("lobbyManage:setJustNow") : void 0)
-       }), [FQ, oQ]), eQ = QQ => {
-         const wQ = `rule:${QQ.key}`;
-         return (0, TQ.jsx)(mF, {
-           rule: QQ,
-           value: HQ(QQ),
-           status: FQ.statusOf(wQ),
-           pending: FQ.isPending(wQ),
-           hiddenNames: DQ,
-           dW: xQ,
-           onAction: tQ
-         }, QQ.key)
-       };
- ... (54 more removed lines; see GitHub link above)
+           placeholderText: bk("worldBuilder:schematicNamePlaceholder"),
+           maxLength: Ck.qb
+         }), (0, wk.jsx)("h2", {
+           className: mk()("SaveSchematicError", {
+             Hidden: !Hk
```

#### 29. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1343-L1492` → after: `L345-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L345-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L345-L347) · [Before (L1343-L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L1343-L1492)

```diff
-         }) : "joining" === FQ ? (0, TQ.jsx)(wF, {
-           manage: wQ
-         }) : "rules" === FQ ? (0, TQ.jsx)(YF, {
-           manage: wQ,
-           rowsShown: kQ
-         }) : (0, TQ.jsx)(fQ, {
-           manage: wQ,
-           focusRequest: oQ,
-           onFocused: DQ
-         })
-       }));
- 
-     function eF(QQ) {
-       let {
-         page: FQ
-       } = QQ;
- ... (134 more removed lines; see GitHub link above)
+         }), (0, wk.jsx)("h2", {
+           className: mk()("SchematicPopupSubtitle", {
+             Hidden: "file" === ek
```

#### 30. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1494-L1640` → after: `L349-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L349-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L349-L365) · [Before (L1494-L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L1494-L1640)

```diff
-           children: oQ.filter((QQ => IQ.has(QQ))).map((FQ => {
-             const wQ = FQ === xQ;
-             return (0, TQ.jsxs)("section", {
-               ref: QQ => {
-                 QQ ? YQ.current.set(FQ, QQ) : YQ.current.delete(FQ)
-               },
-               className: "LobbyManageSection",
-               "data-pad-initial-area": wQ || void 0,
-               children: [oQ.length > 1 && (0, TQ.jsx)("div", {
-                 className: "LobbyManageSectionHeading",
-                 "data-pad-focusable": wQ || void 0,
-                 "data-pad-unavailable": wQ || void 0,
-                 children: (0, TQ.jsx)(AQ.b, {
-                   label: (0, TQ.jsx)(eF, {
-                     page: FQ
-                   })
- ... (131 more removed lines; see GitHub link above)
+           children: bk("general:description")
+         }), (0, wk.jsx)(Yk.b, {
+           className: mk()("SaveSchematicDescription", {
+             Hidden: "file" === ek
+           }),
+           onValueChange: nk,
+           placeholderText: bk("worldBuilder:schematicDescriptionPlaceholder"),
+           maxLength: Ck.nb,
+           useTextarea: !0
+         }), (0, wk.jsxs)("div", {
+           className: mk()("SaveSchematicCheckboxContainer", {
+             WarningBorder: "existing" === ek
+           }),
+           children: [(0, wk.jsx)(Lk.d, {
+             checked: pk,
+             onChange: kk => {
+ ... (1 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1642-L1769` → after: `L367-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L367-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L367-L375) · [Before (L1642-L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L1642-L1769)

```diff
-             oQ = (null !== (LQ = this.pending.get(FQ)) && void 0 !== LQ ? LQ : 1) - 1;
-           oQ > 0 ? this.pending.set(FQ, oQ) : this.pending.delete(FQ);
-           const DQ = !qQ.ok || qQ.message.length > 0 ? qQ.message : null === wQ ? null : [wQ];
-           return null !== DQ && this.statuses.set(FQ, {
-             ok: qQ.ok,
-             text: DQ,
-             until: Date.now() + 4e3
-           }), this.onChange(), qQ
-         }))
-       }
-       show(QQ, FQ) {
-         this.statuses.set(QQ, {
-           ...FQ,
-           until: Date.now() + 4e3
-         }), this.onChange()
-       }
- ... (112 more removed lines; see GitHub link above)
+             disabled: !1,
+             className: "SaveSchematicCheckbox"
+           }), (0, wk.jsx)("h1", {
+             className: "SchematicPopupSubtitle",
+             children: bk("existing" === ek ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
+           })]
+         }), "existing" === ek && (0, wk.jsx)("div", {
+           className: "SaveSchematicLobbyCodeWarning",
+           children: bk("worldBuilder:lobbyCodeWarning")
```

#### 32. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1771-L1780` → after: `L377-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L377-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L377-L381) · [Before (L1771-L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L1771-L1780)

```diff
-           className: "PlayerSearch",
-           children: [(0, uQ.jsx)(DQ.b, {
-             className: "PlayerSearchInput",
-             domRef: bQ,
-             maxLength: 32,
-             placeholderText: qQ,
-             ariaLabel: qQ,
-             stopPropagation: !1,
-             onValueChange: QQ => {
-               xQ(QQ)
+           className: "SaveSchematicButtons",
+           children: [(0, wk.jsx)(xk.r, {
+             className: "SaveSchematicButton",
+             onClick: () => {
+               Ak() && fk(pk, rk, Kk)
```

#### 33. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1782-L1785` → after: `L383-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L383-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L383-L385) · [Before (L1782-L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L1782-L1785)

```diff
-             onEnter: GQ
-           }), (0, uQ.jsxs)(kQ.f, {
-             className: "PlayerSearchInputButton SmallTextLight",
-             disabled: "Enter" !== AQ || "" === YQ.trim(),
+             children: bk("file" === ek ? "general:download" : "general:save")
+           }), (0, wk.jsx)(xk.R, {
+             className: "SaveSchematicButton",
```

#### 34. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1787-L1789` → after: `L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L387) · [Before (L1787-L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L1787-L1789)

```diff
-             children: [(0, uQ.jsx)(mQ.c, {
-               name: wQ
-             }), " ", FQ]
+             children: bk("general:cancel")
```

#### 35. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1794-L1811` → after: `L392-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L392-L394) · [Before (L1794-L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L1794-L1811)

```diff
-   },
-   36349: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => HQ
-     });
-     var LQ = wQ(53),
-       qQ = wQ(1070),
-       oQ = wQ.n(qQ),
-       DQ = wQ(1207),
-       kQ = wQ(1079),
-       vQ = wQ(1107);
-     const mQ = {
-         unlisted: "link",
-         public: "globe",
-         whitelist: "user-check",
-         private: "lock"
- ... (2 more removed lines; see GitHub link above)
+     var sk = ik(1177),
+       dk = ik(1688),
+       Vk = ik(1104);
```

#### 36. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1813-L1833` → after: `L396-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L396-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L396-L431) · [Before (L1813-L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L1813-L1833)

```diff
-     function HQ(QQ) {
-       let {
-         visibility: FQ,
-         onPick: wQ
-       } = QQ;
-       const {
-         t: qQ
-       } = (0, DQ.y)(), HQ = (0, LQ.useRef)([]);
-       return (0, vQ.jsx)("div", {
-         className: "WorldSocialTiles",
-         role: "group",
-         "aria-label": qQ("worldSocial:whoCanJoin"),
-         children: uQ.map(((QQ, LQ) => {
-           const DQ = QQ === FQ;
-           return (0, vQ.jsxs)("button", {
-             ref: QQ => {
- ... (5 more removed lines; see GitHub link above)
+     function Fk(kk, ek) {
+       if ("devDownloadJson" !== kk) ! function(kk, ek) {
+         const ik = sk.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, Sk.c)().websocketUrl);
+         let rk = !1;
+         const Pk = async (kk, ek) => {
+           if (rk) return;
+           rk = !0;
+           const {
+             gameNameWithVariation: Dk,
+             lobbyName: bk
+           } = (0, Sk.c)(), Pk = {
+             gameNameWithVariation: Dk,
+             lobbyName: bk
+           };
+           return await (0, Vk.postJsonWithMetricsCookiesAndJsonResponse)(`${ik}/schematic/${kk}`, fk.C[kk].toBuffer({
+             ...Pk,
+ ... (20 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1835-L1910` → after: `L433-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L433-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L433-L435) · [Before (L1835-L1910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L1835-L1910)

```diff
-             "aria-pressed": DQ,
-             tabIndex: DQ ? 0 : -1,
-             onKeyDown: QQ => {
-               ((QQ, FQ) => {
-                 const wQ = "ArrowRight" === QQ.key || "ArrowDown" === QQ.key ? 1 : "ArrowLeft" === QQ.key || "ArrowUp" === QQ.key ? -1 : 0;
-                 var LQ;
-                 0 !== wQ && (QQ.preventDefault(), null === (LQ = HQ.current[(FQ + wQ + uQ.length) % uQ.length]) || void 0 === LQ || LQ.focus())
-               })(QQ, LQ)
-             },
-             onClick: () => {
-               wQ(QQ)
-             },
-             children: [(0, vQ.jsx)("span", {
-               className: "WorldSocialTileIcon",
-               children: (0, vQ.jsx)(kQ.c, {
-                 name: mQ[QQ]
- ... (60 more removed lines; see GitHub link above)
+             middleScreenPopupClassName: "SchematicPopup",
+             onClose: Sk,
+             unlockPointerKey: "schematicSaverPopup"
```

#### 38. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1912-L1981` → after: `L437-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L437-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L437-L446) · [Before (L1912-L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L1912-L1981)

```diff
-         })
-       })
-     }
-   },
-   36341: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => xQ
-     });
-     var LQ = wQ(53),
-       qQ = wQ(1207),
-       oQ = wQ(1835),
-       DQ = wQ(96),
-       kQ = wQ(17),
-       vQ = wQ(1471),
-       mQ = wQ(2580),
-       uQ = wQ(8995),
- ... (54 more removed lines; see GitHub link above)
+         }({
+           ownedSchematics: ek,
+           onChosenDownload: (kk, ek) => {
+             Pk("download-schematic", {
+               name: kk,
+               includeLobbyCode: ek
+             }).then((ek => {
+               let {
+                 buffer: {
+                   data: ik
```

#### 39. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1983` → after: `L448-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L448-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L448-L463) · [Before (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L1983)

```diff
-               }
+               } = ek;
+               const fk = Dk.hU.from(ik);
+               (0, dk.downloadBlob)(new Blob([fk], {
+                 type: "application/octet-stream"
+               }), `${kk}.bloxdschem`)
+             }))
+           },
+           onClose: () => {
+             Pk("cancel", {})
+           },
+           onChosenEdit: (kk, ek, ik, Dk) => {
+             Pk("save-to-profile", {
+               schematicId: kk,
+               name: ek,
+               description: ik,
+               includeLobbyCode: Dk
```

#### 40. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L1986-L2157` → after: `L466-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L466-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L466-L475) · [Before (L1986-L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L1986-L2157)

```diff
-           children: [(0, YQ.jsx)(bQ.c, {
-             name: MQ ? "check" : CQ ? "up-from-bracket" : "copy"
-           }), " ", xQ(MQ ? "general:copied" : CQ ? "worldSocial:share" : "general:copy")]
-         })]
-       })
-     }
-   },
-   36353: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => YQ,
-       d: () => bQ,
-       e: () => HQ
-     });
-     var LQ = wQ(600),
-       qQ = wQ(1207),
-       oQ = wQ(1645),
- ... (156 more removed lines; see GitHub link above)
+           onChosenNew: (kk, ek, ik) => {
+             Pk("save-to-profile", {
+               schematicId: null,
+               name: kk,
+               description: ek,
+               includeLobbyCode: ik
+             })
+           }
+         });
+         else if ("Plugin|WorldBuilder|LoadSchematic" === kk) ! function(kk) {
```

#### 41. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L2159-L2263` → after: `L477-L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L477-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/215.js#L477-L541) · [Before (L2159-L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/215.js#L2159-L2263)

```diff
-             quiet: LQ = !1,
-             onAnswer: DQ
-           } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-           const kQ = bQ.current;
-           if (null === kQ) return !1;
-           pQ(wQ(kQ)), xQ.current > 0 && (AQ.current = !0), xQ.current++;
-           const vQ = await qQ.d.setSocialSettings(QQ, FQ);
-           xQ.current--;
-           const mQ = !("error" in vQ);
-           if (!tQ.current) return mQ;
-           if (null === DQ || void 0 === DQ || DQ(vQ), LQ);
-           else if ("error" in vQ) oQ.f.showMessage({
-             translationKey: vQ.error
-           });
-           else
-             for (const QQ of vQ.notFound) oQ.f.showMessage({
- ... (89 more removed lines; see GitHub link above)
+             ownedSchematics: ek,
+             onChosenFile: ik,
+             onChosenPreset: Dk,
+             onClose: fk
+           } = kk;
+           Kk.NotificationProvider.showCustomPopup({
+             body: kk => (0, wk.jsx)(pk, {
+               ownedSchematics: ek,
+               onChosenFile: ik,
+               onChosenPreset: Dk,
+               onClose: kk
+             }),
+             middleScreenPopupClassName: "SchematicPopup",
+             onClose: fk,
+             unlockPointerKey: "schematicLoaderPopup"
+           })
+ ... (49 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/216.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/216.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc)

#### 1. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L4-L169` → after: `L4-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/216.js#L4-L21) · [Before (L4-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/216.js#L4-L169)

```diff
-   36259: QQ => {
-     QQ.exports = {
-       aliceblue: [240, 248, 255],
-       antiquewhite: [250, 235, 215],
-       aqua: [0, 255, 255],
-       aquamarine: [127, 255, 212],
-       azure: [240, 255, 255],
-       beige: [245, 245, 220],
-       bisque: [255, 228, 196],
-       black: [0, 0, 0],
-       blanchedalmond: [255, 235, 205],
-       blue: [0, 0, 255],
-       blueviolet: [138, 43, 226],
-       brown: [165, 42, 42],
-       burlywood: [222, 184, 135],
-       cadetblue: [95, 158, 160],
- ... (150 more removed lines; see GitHub link above)
+   35925: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       default: () => jk
+     });
+     var Dk = ik(1021),
+       fk = ik.n(Dk),
+       Sk = ik(1496),
+       bk = ik(1017),
+       rk = ik(741),
+       Pk = ik(1172),
+       mk = ik(1410),
+       Mk = ik(1479),
+       Kk = ik(3505),
+       xk = ik(1033),
+       nk = ik(3433),
+       Uk = ik(2529),
+ ... (2 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L172-L474` → after: `L24-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L24-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/216.js#L24-L29) · [Before (L172-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/216.js#L172-L474)

```diff
-       var FQ = Math.round(QQ).toString(16).toUpperCase();
-       return FQ.length < 2 ? "0" + FQ : FQ
-     }
-     vQ.get = function(QQ) {
-       var FQ, wQ;
-       switch (QQ.substring(0, 3).toLowerCase()) {
-         case "hsl":
-           FQ = vQ.get.hsl(QQ), wQ = "hsl";
-           break;
-         case "hwb":
-           FQ = vQ.get.hwb(QQ), wQ = "hwb";
-           break;
-         default:
-           FQ = vQ.get.rgb(QQ), wQ = "rgb"
-       }
-       return FQ ? {
- ... (287 more removed lines; see GitHub link above)
+       return "firstPartyGame" === kk.type ? {
+         type: "game",
+         gameNameWithVariation: kk.gameNameWithVariation
+       } : {
+         type: "preview",
+         preview: kk.preview
```

#### 3. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L479-L493` → after: `L34-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L34-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/216.js#L34-L48) · [Before (L479-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/216.js#L479-L493)

```diff
-       return function(FQ) {
-         return function(QQ, FQ) {
-           return Number(QQ.toFixed(FQ))
-         }(FQ, QQ)
-       }
-     }
- 
-     function uQ(QQ, FQ, wQ) {
-       QQ = Array.isArray(QQ) ? QQ : [QQ];
-       for (const LQ of QQ)(kQ[LQ] || (kQ[LQ] = []))[FQ] = wQ;
-       return QQ = QQ[0],
-         function(LQ) {
-           let qQ;
-           return void 0 !== LQ ? (wQ && (LQ = wQ(LQ)), qQ = this[QQ](), qQ.color[FQ] = LQ, qQ) : (qQ = this[QQ]().color[FQ], wQ && (qQ = wQ(qQ)), qQ)
-         }
+       let {
+         game: ek,
+         disabled: ik,
+         showPlaceholder: Dk
+       } = kk;
+       return null !== ek ? (0, Hk.jsx)(nk.g, {
+         source: lk(ek),
+         gameWidth: "100%",
+         useLongRatio: !0,
+         disabled: ik,
+         entrySource: "customGamePlace"
+       }) : Dk ? (0, Hk.jsx)(nk.d, {
+         gameWidth: "100%",
+         useLongRatio: !0
+       }) : null
```

#### 4. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L497-L578` → after: `L52-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L52-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/216.js#L52-L60) · [Before (L497-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/216.js#L497-L578)

```diff
-       return function(FQ) {
-         return Math.max(0, Math.min(QQ, FQ))
-       }
-     }
- 
-     function bQ(QQ, FQ) {
-       for (let wQ = 0; wQ < FQ; wQ++) "number" !== typeof QQ[wQ] && (QQ[wQ] = 0);
-       return QQ
-     }
-     QQ.exports = vQ
-   },
-   36278: (QQ, FQ, wQ) => {
-     const LQ = wQ(36287),
-       qQ = {};
-     for (const DQ of Object.keys(LQ)) qQ[LQ[DQ]] = DQ;
-     const oQ = {
- ... (66 more removed lines; see GitHub link above)
+       var ek;
+       let {
+         category: ik,
+         title: Dk,
+         tintColour: fk,
+         layout: Sk,
+         games: bk,
+         landscape: rk = !1
+       } = kk;
```

#### 5. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L580-L586` → after: `L62-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L62-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/216.js#L62-L95) · [Before (L580-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/216.js#L580-L586)

```diff
-         channels: QQ,
-         labels: FQ
-       } = oQ[DQ];
-       delete oQ[DQ].channels, delete oQ[DQ].labels, Object.defineProperty(oQ[DQ], "channels", {
-         value: QQ
-       }), Object.defineProperty(oQ[DQ], "labels", {
-         value: FQ
+         followsLeader: Pk
+       } = (0, Uk.d)(), mk = null !== (ek = null === bk || void 0 === bk ? void 0 : bk.slice(0, Sk.gameCount)) && void 0 !== ek ? ek : [], Kk = {
+         "--custom-game-place-tint": fk
+       };
+       return (0, Hk.jsxs)("div", {
+         className: "CustomGamePlacePanel AnimFadeIn",
+         style: Kk,
+         children: [(0, Hk.jsx)("h2", {
+           className: "CustomGamePlacePanelHeading",
+           children: (0, Hk.jsxs)(Mk.LinkPreserveSearch, {
+             to: `/custom-games/${encodeURIComponent(ik)}`,
+             className: "CustomGamePlacePanelTitle SmallTextBold",
+             children: [(0, Hk.jsx)("span", {
+               children: Dk
+             }), (0, Hk.jsx)(xk.d, {
+               name: "arrow-up"
+ ... (18 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L943-L968` → after: `L100-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L100-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/216.js#L100-L102) · [Before (L943-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/216.js#L943-L968)

```diff
-       const FQ = function() {
-           const QQ = {},
-             FQ = Object.keys(LQ);
-           for (let wQ = FQ.length, LQ = 0; LQ < wQ; LQ++) QQ[FQ[LQ]] = {
-             distance: -1,
-             parent: null
-           };
-           return QQ
-         }(),
-         wQ = [QQ];
-       for (FQ[QQ].distance = 0; wQ.length;) {
-         const QQ = wQ.pop(),
-           qQ = Object.keys(LQ[QQ]);
-         for (let LQ = qQ.length, oQ = 0; oQ < LQ; oQ++) {
-           const LQ = qQ[oQ],
-             DQ = FQ[LQ]; - 1 === DQ.distance && (DQ.distance = FQ[QQ].distance + 1, DQ.parent = QQ, wQ.unshift(LQ))
- ... (10 more removed lines; see GitHub link above)
+       let {
+         categories: ek
+       } = kk;
```

#### 7. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L970-L981` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/216.js#L104) · [Before (L970-L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/216.js#L970-L981)

```diff
-     function DQ(QQ, FQ) {
-       const wQ = [FQ[QQ].parent, QQ];
-       let qQ = LQ[FQ[QQ].parent][QQ],
-         DQ = FQ[QQ].parent;
-       for (; FQ[DQ].parent;) wQ.unshift(FQ[DQ].parent), qQ = oQ(LQ[FQ[DQ].parent][DQ], qQ), DQ = FQ[DQ].parent;
-       return qQ.conversion = wQ, qQ
-     }
-     QQ.exports = function(QQ) {
-       const FQ = qQ(QQ),
-         wQ = {},
-         LQ = Object.keys(FQ);
-       for (let qQ = LQ.length, oQ = 0; oQ < qQ; oQ++) {
+       function ik(kk) {
```

#### 8. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L983-L1137` → after: `L106-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L106-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/216.js#L106-L126) · [Before (L983-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/216.js#L983-L1137)

```diff
-         null !== FQ[QQ].parent && (wQ[QQ] = DQ(QQ, FQ))
-       }
-       return wQ
-     }
-   },
-   36287: QQ => {
-     QQ.exports = {
-       aliceblue: [240, 248, 255],
-       antiquewhite: [250, 235, 215],
-       aqua: [0, 255, 255],
-       aquamarine: [127, 255, 212],
-       azure: [240, 255, 255],
-       beige: [245, 245, 220],
-       bisque: [255, 228, 196],
-       black: [0, 0, 0],
-       blanchedalmond: [255, 235, 205],
- ... (139 more removed lines; see GitHub link above)
+         return (0, Hk.jsx)(yk, {
+           ...ik,
+           landscape: !0
+         }, ik.id)
+       }
+       return (0, Hk.jsxs)("div", {
+         className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
+         children: [(0, Hk.jsxs)("div", {
+           className: "CustomGamePlaceUpper",
+           children: [(0, Hk.jsxs)("div", {
+             className: "CustomGamePlaceMain",
+             children: [(0, Hk.jsxs)("div", {
+               className: "CustomGamePlaceRow",
+               children: [ik(0), ik(2)]
+             }), ik(1)]
+           }), ik(4)]
+ ... (5 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L1139-L1147` → after: `L128-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L128-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/216.js#L128-L152) · [Before (L1139-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/216.js#L1139-L1147)

```diff
-   },
-   36263: (QQ, FQ, wQ) => {
-     var LQ = wQ(36267),
-       qQ = Array.prototype.concat,
-       oQ = Array.prototype.slice,
-       DQ = QQ.exports = function(QQ) {
-         for (var FQ = [], wQ = 0, DQ = QQ.length; wQ < DQ; wQ++) {
-           var kQ = QQ[wQ];
-           LQ(kQ) ? FQ = qQ.call(FQ, oQ.call(kQ)) : FQ.push(kQ)
+     const Lk = ["section1", "section2", "section3", "section4", "section5", "section6"],
+       Ck = {
+         section1: {
+           gameCount: 4,
+           columnCount: 2
+         },
+         section2: {
+           gameCount: 6,
+           columnCount: 6
+         },
+         section3: {
+           gameCount: 8,
+           columnCount: 4
+         },
+         section4: {
+           gameCount: 6,
+ ... (9 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L1151-L1159` → after: `L155-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L155-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/216.js#L155-L213) · [Before (L1151-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/216.js#L1151-L1159)

```diff
-     DQ.wrap = function(QQ) {
-       return function() {
-         return QQ(DQ(arguments))
-       }
-     }
-   },
-   36267: QQ => {
-     QQ.exports = function(QQ) {
-       return !(!QQ || "string" === typeof QQ) && (QQ instanceof Array || Array.isArray(QQ) || QQ.length >= 0 && (QQ.splice instanceof Function || Object.getOwnPropertyDescriptor(QQ, QQ.length - 1) && "String" !== QQ.constructor.name))
+     var Ak = ik(1085);
+ 
+     function jk() {
+       var kk;
+       const {
+         t: ek
+       } = (0, Pk.D)(), ik = (0, Sk.y)(), Dk = (0, Ak.k)(), xk = (0, Kk.b)({
+         refresh: !0
+       }), nk = ik.customGamePlace;
+       if (!(0, bk.i)(nk)) return (0, Hk.jsx)(Mk.NavigatePreserveSearch, {
+         to: "/"
+       });
+       const Uk = rk.d[nk],
+         wk = bk.b[nk],
+         lk = null !== (kk = null === xk || void 0 === xk ? void 0 : xk[nk]) && void 0 !== kk ? kk : null,
+         pk = [];
+ ... (43 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/217.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/217.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0)

#### 1. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L4` → after: `L5-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L5-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/217.js#L5-L74) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/217.js#L4)

```diff
-   36388: (QQ, FQ, wQ) => {
+   39122: (kk, ek, ik) => {
+     kk.exports = fk;
+     var Dk = ik(330);
+ 
+     function fk(kk, ek) {
+       if (!(this instanceof fk)) return new fk(kk, ek);
+       var ik = Dk.create();
+       Dk.add(ik, kk, ek), this.base = Dk.min(Dk.create(), kk, ik), this.vec = Dk.clone(ek), this.max = Dk.max(Dk.create(), kk, ik), this.mag = Dk.length(this.vec)
+     }
+     var Sk = fk.prototype;
+     Sk.width = function() {
+       return this.vec[0]
+     }, Sk.height = function() {
+       return this.vec[1]
+     }, Sk.depth = function() {
+       return this.vec[2]
+ ... (54 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L6-L10` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/217.js#L76-L77) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/217.js#L6-L10)

```diff
-       b: () => oF,
-       c: () => vF,
-       e: () => HF,
-       h: () => mF,
-       i: () => uF
+       d: () => rk,
+       e: () => Sk
```

#### 3. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L12-L128` → after: `L79-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L79-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/217.js#L79-L133) · [Before (L12-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/217.js#L12-L128)

```diff
-     const LQ = JSON.parse('{"src":["/sounds/generatedSprites/gunSemiAutomatic.aef27960ef.ogg","/sounds/generatedSprites/gunSemiAutomatic.e56594fab5.m4a","/sounds/generatedSprites/gunSemiAutomatic.d3e434f4d0.mp3","/sounds/generatedSprites/gunSemiAutomatic.97d6a47358.ac3"],"sprite" … [truncated]
-       qQ = JSON.parse('{"src":["/sounds/generatedSprites/gunSubmachineGun.9d869e4ca3.ogg","/sounds/generatedSprites/gunSubmachineGun.8736ce9068.m4a","/sounds/generatedSprites/gunSubmachineGun.0a429c7e98.mp3","/sounds/generatedSprites/gunSubmachineGun.1db2897c09.ac3"],"sprite":{"s … [truncated]
-       oQ = JSON.parse('{"src":["/sounds/generatedSprites/gunPistol.7432a47272.ogg","/sounds/generatedSprites/gunPistol.adec2d9f75.m4a","/sounds/generatedSprites/gunPistol.a9f647182b.mp3","/sounds/generatedSprites/gunPistol.f363b9fa6d.ac3"],"sprite":{"pistol_cock_01":[0,510],"pist … [truncated]
-       DQ = JSON.parse('{"src":["/sounds/generatedSprites/gunRifle.ca54b877ed.ogg","/sounds/generatedSprites/gunRifle.94dfb28886.m4a","/sounds/generatedSprites/gunRifle.f2eb64407a.mp3","/sounds/generatedSprites/gunRifle.d268c1da8d.ac3"],"sprite":{"rifle_cock_01":[0,705.30612244897 … [truncated]
-       kQ = JSON.parse('{"src":["/sounds/generatedSprites/gunMisc.35b4609d1c.ogg","/sounds/generatedSprites/gunMisc.acc63e7fe9.m4a","/sounds/generatedSprites/gunMisc.4403caaad2.mp3","/sounds/generatedSprites/gunMisc.97552f11dc.ac3"],"sprite":{"bullet_shell_bounce_general_07":[0,82 … [truncated]
-       vQ = JSON.parse('{"src":["/sounds/generatedSprites/gunShotgun.4e0220339e.ogg","/sounds/generatedSprites/gunShotgun.137d0e6b6f.m4a","/sounds/generatedSprites/gunShotgun.8b1144b235.mp3","/sounds/generatedSprites/gunShotgun.0b25a6370a.ac3"],"sprite":{"shotgun_cock_01":[0,914.2 … [truncated]
-       mQ = JSON.parse('{"src":["/sounds/generatedSprites/dig.affb4a6f05.ogg","/sounds/generatedSprites/dig.082c5b232c.m4a","/sounds/generatedSprites/dig.71feb10d5c.mp3","/sounds/generatedSprites/dig.4913c53dc2.ac3"],"sprite":{"cloth1":[0,1671.8367346938776],"cloth2":[1773.3333333 … [truncated]
-       uQ = JSON.parse('{"src":["/sounds/generatedSprites/step.52076ddc3a.ogg","/sounds/generatedSprites/step.d6260ef2cc.m4a","/sounds/generatedSprites/step.6e5286b3a8.mp3","/sounds/generatedSprites/step.cfb5f3dd8f.ac3"],"sprite":{"hit1":[0,557.2789115646258],"hit2":[660,650.15873 … [truncated]
-       HQ = JSON.parse('{"src":["/sounds/generatedSprites/randomBeep.7b90315654.ogg","/sounds/generatedSprites/randomBeep.0e88f6aa33.m4a","/sounds/generatedSprites/randomBeep.47ff5e799a.mp3","/sounds/generatedSprites/randomBeep.444034b8b7.ac3"],"sprite":{"beep":[100,2455.510204081 … [truncated]
-       bQ = JSON.parse('{"src":["/sounds/generatedSprites/randomCannon.f9d64818ea.ogg","/sounds/generatedSprites/randomCannon.52f7576d74.m4a","/sounds/generatedSprites/randomCannon.bde162aee8.mp3","/sounds/generatedSprites/randomCannon.4877805969.ac3"],"sprite":{"cannonFire1":[100 … [truncated]
-       YQ = JSON.parse('{"src":["/sounds/generatedSprites/randomCash.8ff82dcd92.ogg","/sounds/generatedSprites/randomCash.a86426509f.m4a","/sounds/generatedSprites/randomCash.48929d75f1.mp3","/sounds/generatedSprites/randomCash.f687b943c4.ac3"],"sprite":{"cashRegister":[100,3819.6 … [truncated]
-       xQ = JSON.parse('{"src":["/sounds/generatedSprites/randomExp.fa5a4c9798.ogg","/sounds/generatedSprites/randomExp.a7e2faf290.m4a","/sounds/generatedSprites/randomExp.b4baff1a37.mp3","/sounds/generatedSprites/randomExp.4974715bbd.ac3"],"sprite":{"exp_collect":[100,1009.206349 … [truncated]
-       AQ = JSON.parse('{"src":["/sounds/generatedSprites/randomFallsmall.e0ec9ce0a7.ogg","/sounds/generatedSprites/randomFallsmall.a1f24b70c2.m4a","/sounds/generatedSprites/randomFallsmall.bcbd5fef60.mp3","/sounds/generatedSprites/randomFallsmall.a3b7d06594.ac3"],"sprite":{"falls … [truncated]
-       tQ = JSON.parse('{"src":["/sounds/generatedSprites/randomItems.380c31a312.ogg","/sounds/generatedSprites/randomItems.6ae69434b9.m4a","/sounds/generatedSprites/randomItems.85b5c2f034.mp3","/sounds/generatedSprites/randomItems.cdadb8aa52.ac3"],"sprite":{"bow":[100,500],"bucke … [truncated]
-       eQ = JSON.parse('{"src":["/sounds/generatedSprites/randomFire.06f418fc54.ogg","/sounds/generatedSprites/randomFire.7c5564dd14.m4a","/sounds/generatedSprites/randomFire.f61e3ab1f3.mp3","/sounds/generatedSprites/randomFire.5869bbefc8.ac3"],"sprite":{"fireBurn":[100,2827.39229 … [truncated]
-       MQ = JSON.parse('{"src":["/sounds/generatedSprites/randomFirecracker.ddc99cbc73.ogg","/sounds/generatedSprites/randomFirecracker.128308b436.m4a","/sounds/generatedSprites/randomFirecracker.d5635f7e7d.mp3","/sounds/generatedSprites/randomFirecracker.e5afa15901.ac3"],"sprite" … [truncated]
- ... (101 more removed lines; see GitHub link above)
+     var Dk = ik(4019);
+     let fk = null;
+ 
+     function Sk(kk) {
+       return null !== fk && kk === fk
+     }
+ 
+     function bk() {
+       this.oB = !1, this.stopPropagation = !1, this.JB = !1, this.disabled = !1
+     }
+     class rk {
+       constructor(kk, ek) {
+         this.version = "0.7.0";
+         var ik = Object.assign({}, new bk, ek || {});
+         this.element = kk || document, this.oB = !!ik.oB, this.stopPropagation = !!ik.stopPropagation, this.JB = !!ik.JB, this.disabled = !!ik.disabled, this.filterEvents = (kk, ek) => !0, this.ignoreEvent = kk => !1, this.down = new Dk.EventEmitter, this.up = new Dk.EventEmitter … [truncated]
+           dx: 0,
+ ... (39 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L131-L133` → after: `L136-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L136-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/217.js#L136-L138) · [Before (L131-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/217.js#L131-L133)

```diff
-     for (const YF in qF) {
-       const QQ = qF[YF];
-       for (let FQ = 0; FQ < QQ.src.length; FQ++) QQ.src[FQ] = LF.clientSideServerUrls.staticUrl + QQ.src[FQ]
+ 
+     function Pk(kk) {
+       for (var ek in kk) kk[ek] = 0
```

#### 5. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L138-L144` → after: `L142-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L142-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/217.js#L142-L155) · [Before (L138-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/217.js#L138-L144)

```diff
-       if (kF[QQ]) return bF(kF[QQ]);
-       {
-         const FQ = [];
-         for (const wQ in qF)
-           for (const LQ in qF[wQ].sprite) LQ.startsWith(QQ) && FQ.push(LQ);
-         return kF[QQ] = FQ, bF(FQ)
-       }
+       window.addEventListener("keydown", wk.bind(null, kk, !0), !1), window.addEventListener("keyup", wk.bind(null, kk, !1), !1);
+       var ek = {
+         passive: !0
+       };
+       kk.element.addEventListener("touchstart", nk.bind(void 0, kk), {
+         passive: !1
+       }), kk.element.addEventListener("touchend", Hk.bind(void 0, kk), ek), kk.element.addEventListener("mousedown", lk.bind(null, kk, !0), ek), window.document.addEventListener("mouseup", lk.bind(null, kk, !1), ek), kk.element.addEventListener("touchmove", pk.bind(null, kk), ek) … [truncated]
+     }
+     var Mk = 0,
+       Kk = 0,
+       xk = null;
+ 
+     function nk(kk, ek) {
+       ek.preventDefault(), Uk(ek)
```

#### 6. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L148-L150` → after: `L159-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L159-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/217.js#L159-L197) · [Before (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/217.js#L148-L150)

```diff
-       const FQ = DF[QQ];
-       if (void 0 === FQ) throw new Error(`Invalid sound name ${QQ} (not in any sprite sheet)`);
-       return FQ
+       let ek = !1;
+       for (let ik = 0; ik < kk.touches.length; ++ik)
+         if (kk.touches[ik].identifier === xk) {
+           ek = !0;
+           break
+         } if (!ek) {
+         const ek = kk.changedTouches[0];
+         Mk = ek.clientX, Kk = ek.clientY, xk = ek.identifier
+       }
+     }
+ 
+     function Hk(kk, ek) {
+       for (var ik = ek.changedTouches, Dk = 0; Dk < ik.length; ++Dk) ik[Dk].identifier === xk && (xk = null)
+     }
+ 
+     function wk(kk, ek, ik) {
+ ... (23 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L154-L155` → after: `L201-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L201-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/217.js#L201-L215) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/217.js#L154-L155)

```diff
-       if (!(QQ in qF)) throw new Error("Invalid spriteTrack name");
-       return FQ in qF[QQ].sprite
+       var ik = ek.movementX || ek.mozMovementX || 0,
+         Dk = ek.movementY || ek.mozMovementY || 0;
+       if (ek.touches && 0 === (ik | Dk)) {
+         var fk = function(kk) {
+           Uk(kk);
+           for (let ek = 0; ek < kk.changedTouches.length; ++ek)
+             if (kk.changedTouches[ek].identifier == xk) {
+               const ik = kk.changedTouches[ek],
+                 Dk = [ik.clientX - Mk, ik.clientY - Kk];
+               return Mk = ik.clientX, Kk = ik.clientY, Dk
+             } return console.error(`Did not find touch id ${xk}`), [0, 0]
+         }(ek);
+         ik = fk[0], Dk = fk[1]
+       }
+       kk.wT.dx += ik, kk.wT.dy += Dk
```

#### 8. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L159-L160` → after: `L312-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L312-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/217.js#L312-L486) · [Before (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/217.js#L159-L160)

```diff
-       if (!(QQ in qF)) throw new Error("Invalid spritesheet name");
-       return qF[QQ]
+       if (kk && "object" === typeof kk) {
+         var ek = kk.which || kk.keyCode || kk.charCode;
+         ek && (kk = ek)
+       }
+       if ("number" === typeof kk) return bk[kk];
+       var ik, Sk = String(kk);
+       return (ik = Dk[Sk.toLowerCase()]) ? ik : (ik = fk[Sk.toLowerCase()]) || (1 === Sk.length ? Sk.charCodeAt(0) : void 0)
+     }
+     ik.isEventKey = function(kk, ek) {
+       if (kk && "object" === typeof kk) {
+         var ik = kk.which || kk.keyCode || kk.charCode;
+         if (null === ik || void 0 === ik) return !1;
+         if ("string" === typeof ek) {
+           var Sk;
+           if (Sk = Dk[ek.toLowerCase()]) return Sk === ik;
+           if (Sk = fk[ek.toLowerCase()]) return Sk === ik
+ ... (159 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L164` → after: `L492-L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L492-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/217.js#L492-L1191) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/217.js#L164)

```diff
-       return QQ[Math.floor(Math.random() * QQ.length)]
+       for (var ek = kk._data, ik = 1e3 / kk.uF, Dk = ek.nowObject.now() + bk, fk = 0; ek.nowObject.now() >= ek.lastTickStarted + ik && ek.nowObject.now() < Dk && ++fk <= Sk;) kk.Iy(ik), ek.lastTickStarted += ik;
+       var rk = 5 * (ik + 5),
+         Pk = ek.nowObject.now();
+       if (Pk - ek.lastTickStarted > rk)
+         for (; Pk >= ek.lastTickStarted + ik;) ek.lastTickStarted += ik
+     }
+   },
+   36263: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk
+     });
+     var Dk = ik(60);
+     const fk = Dk.useLayoutEffect;
+     const Sk = function(kk) {
+       var ek = (0, Dk.useRef)(kk);
+       return fk((function() {
+ ... (684 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/218.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/218.js` (68 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b)

#### 1. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L4-L7)

```diff
-   39168: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => LQ,
-       h: () => qQ
+   40669: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       LobbyManageView: () => Ae
```

#### 2. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L9-L12` → after: `L8-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L8-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L8-L107) · [Before (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L9-L12)

```diff
-     const LQ = "The world isn't loaded, so no blocks can be seen.",
-       qQ = "The world isn't loaded, so nothing in it can be seen."
-   },
-   38642: (QQ, FQ, wQ) => {
+     var Dk = ik(60),
+       fk = ik(1432),
+       Sk = ik(36608),
+       bk = ik(2432),
+       rk = ik(2438),
+       Pk = ik(2414),
+       mk = ik(36101);
+ 
+     function Mk() {
+       const [kk, ek] = (0, Dk.useState)(new Map);
+       return {
+         get: ek => kk.get(ek),
+         hold: (0, Dk.useCallback)(((kk, ik, Dk) => {
+           ek((ek => new Map(ek).set(kk, ik))), Dk.then((() => {
+             ek((ek => {
+               const ik = new Map(ek);
+ ... (84 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L14` → after: `L109-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L109-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L109-L119) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L14)

```diff
-       return !(!QQ.lobbyLeaderboardInfo && !QQ.lobbyManage)
+       let {
+         status: ek
+       } = kk;
+       return (0, vk.jsx)("span", {
+         className: xk()("LobbyManageStatus", {
+           LobbyManageStatusRefused: !ek.ok
+         }),
+         children: (0, vk.jsx)(zk.e, {
+           text: ek.text
+         })
+       })
```

#### 4. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L28` → after: `L123-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L123-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L123-L159) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L28)

```diff
-       LQ = QQ
+       let {
+         names: ek,
+         cap: ik,
+         filterFrom: fk,
+         moreLabel: Sk,
+         reveal: bk = null,
+         renderRow: rk
+       } = kk;
+       const {
+         t: Pk
+       } = (0, nk.D)(), [mk, Mk] = (0, Dk.useState)(!1), [Kk, xk] = (0, Dk.useState)(""), Hk = mk || null !== bk && ek.indexOf(bk) >= ik, lk = (Hk || ek.length <= ik) && null !== fk && ek.length > fk, pk = Kk.trim().toLowerCase();
+       let yk = Hk ? ek : ek.slice(0, ik);
+       return lk && "" !== pk && (yk = yk.filter((kk => kk.toLowerCase().includes(pk)))), (0, vk.jsxs)(vk.Fragment, {
+         children: [lk && (0, vk.jsx)(Qk.b, {
+           className: "LobbyManageFilter",
+           placeholderText: Pk("lobbyManage:findName"),
+ ... (21 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L31-L32` → after: `L162-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L162-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L162-L209) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L31-L32)

```diff
-     function oQ(QQ, FQ) {
-       return LQ(QQ, FQ)
+     function ak(kk) {
+       let {
+         value: ek,
+         placeholder: ik,
+         ariaLabel: fk,
+         maxLength: Sk,
+         wide: bk = !1,
+         onSave: rk
+       } = kk;
+       const Pk = (0, Dk.useRef)(null),
+         [mk, Mk] = (0, Dk.useState)(0),
+         Kk = (0, Dk.useRef)(!0),
+         nk = (0, Dk.useRef)(null),
+         Uk = (0, Dk.useRef)({
+           value: ek,
+           onSave: rk
+ ... (32 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L34-L48` → after: `L211-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L211-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L211-L217) · [Before (L34-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L34-L48)

```diff
-   },
-   40023: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => AQ,
-       g: () => GQ,
-       h: () => MQ,
-       j: () => tQ
-     });
-     var LQ = wQ(22),
-       qQ = wQ(40027),
-       oQ = wQ(40009),
-       DQ = wQ(40031),
-       kQ = wQ(40018),
-       vQ = wQ(40040),
-       mQ = wQ(40056);
+     const Wk = ["mod", "coOwner"],
+       tk = {
+         coOwner: "lobbyManage:roleCanCoOwner",
+         mod: "lobbyManage:roleCanMod",
+         coder: "lobbyManage:roleCanCoder",
+         builder: "lobbyManage:roleCanBuilder"
+       };
```

#### 7. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L51-L53` → after: `L220-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L220-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L220-L441) · [Before (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L51-L53)

```diff
-       var FQ, wQ;
-       const LQ = (0, oQ.k)();
-       return LQ ? null === (FQ = (0, qQ.d)(LQ.api, QQ[0], QQ[1], QQ[2])) || void 0 === FQ || null === (wQ = FQ.persisted) || void 0 === wQ ? void 0 : wQ.shared : void 0
+       var ek, ik, Sk;
+       let {
+         name: bk,
+         place: rk,
+         openedIn: Pk,
+         isYou: mk,
+         manage: Kk,
+         hiddenNames: xk,
+         zIndex: Hk
+       } = kk;
+       const {
+         t: wk,
+         selectedLanguage: lk
+       } = (0, nk.D)(), [pk, yk] = (0, Dk.useState)(null), {
+         state: Lk
+       } = Kk, Ck = `player:${bk}`, Ak = function(kk, ek) {
+ ... (206 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L57` → after: `L445-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L445-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L445-L582) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L57)

```diff
-       return `${QQ[0]},${QQ[1]},${QQ[2]}`
+       var ek, ik, fk, Sk;
+       let {
+         manage: bk,
+         focusRequest: rk,
+         onFocused: Pk
+       } = kk;
+       const {
+         t: mk
+       } = (0, nk.D)(), Mk = (0, yk.h)("players"), Kk = (0, yk.h)("hiddenPlayerNames"), xk = (0, Dk.useRef)(null), {
+         state: Hk
+       } = bk, lk = null === Mk.localId ? null : null !== (ek = null === (ik = Mk.byId[Mk.localId]) || void 0 === ik ? void 0 : ik.name) && void 0 !== ek ? ek : null, [pk] = (0, Dk.useState)((() => Ck(Hk, lk))), Lk = function(kk, ek, ik) {
+         const Dk = new Set([...kk.here, ...kk.away, ...kk.banned]),
+           fk = Ck(ek, ik),
+           Sk = ek => {
+             const ik = fk[ek].filter((kk => !Dk.has(kk)));
+             for (const kk of ik) Dk.add(kk);
+ ... (122 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L59-L61` → after: `L584-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L584-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L584-L592) · [Before (L59-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L59-L61)

```diff
-     const bQ = new Map;
-     let YQ = null,
-       xQ = 0;
+     var ck = ik(4563),
+       Tk = ik(1617),
+       Zk = ik(36270),
+       Ok = ik(36296),
+       gk = ik(36287),
+       Gk = ik(36278),
+       Nk = ik(36324),
+       Rk = ik(36312),
+       Jk = ik(36321);
```

#### 10. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L63` → after: `L594-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L594-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L594-L596) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L63)

```diff
-     function AQ() {
+     function ke(kk) {
+       const ek = new Set;
+       for (const ik of kk) ek.add(ik.toLowerCase());
```

#### 11. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L68-L78` → after: `L601-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L601-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L601-L631) · [Before (L68-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L68-L78)

```diff
-       const FQ = null !== YQ && YQ.key === HQ(QQ.pos) ? YQ.type : null;
-       if (null === FQ) return QQ;
-       let wQ = null;
-       if ("Iron" === FQ) {
-         const {
-           cachedPasskey: FQ,
-           ...LQ
-         } = eQ(QQ.pos);
-         wQ = {
-           pu: null !== FQ && void 0 !== FQ ? FQ : [0, 0, 0, 0],
-           ...LQ
+       var ek, ik;
+       let {
+         state: fk,
+         lobbyName: Sk,
+         listed: bk,
+         isListed: rk,
+         Iy: Pk,
+         rY: mk,
+         statusOf: Mk
+       } = kk;
+       const {
+         t: Kk,
+         selectedLanguage: xk
+       } = (0, nk.D)(), Uk = (0, Tk.i)(), Hk = (0, yk.h)("players"), lk = null === Hk.localId ? null : null !== (ek = null === (ik = Hk.byId[Hk.localId]) || void 0 === ik ? void 0 : ik.name) && void 0 !== ek ? ek : null, pk = (0, Dk.useMemo)((() => (0, Gk.j)(Uk.friends, Sk, fk.her … [truncated]
+         let {
+           refused: ek,
+ ... (15 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L80-L85` → after: `L633-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L633-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L633-L711) · [Before (L80-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L80-L85)

```diff
-       }
-       return {
-         ...QQ,
-         type: FQ,
-         ironChest: wQ
-       }
+       }({
+         refused: fk.refused.map((kk => kk.name)),
+         listed: bk,
+         here: fk.here.map((kk => kk.name)),
+         friends: pk.flatMap((kk => "here" === kk.place ? [] : [kk.friend.name])),
+         excluded: [...null === lk ? [] : [lk], ...[...fk.here, ...fk.away].flatMap((kk => "none" === kk.role || (0, Gk.l)(bk, kk.name) ? [] : [kk.name]))]
+       }), [Ck] = (0, Dk.useState)(Lk), [Ak, jk] = (0, Dk.useState)([]), sk = function(kk, ek, ik) {
+         const Dk = ke(ik),
+           fk = ke([...ik, ...kk.refused, ...kk.listed, ...kk.suggested]),
+           Sk = ik => [...kk[ik].filter((kk => !Dk.has(kk.toLowerCase()))), ...ek[ik].filter((kk => {
+             const ek = kk.toLowerCase();
+             return !fk.has(ek) && (fk.add(ek), !0)
+           }))];
+         return {
+           added: [...ik],
+           refused: Sk("refused"),
+ ... (63 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L89-L114` → after: `L715-L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L715-L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L715-L1164) · [Before (L89-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L89-L114)

```diff
-       const FQ = uQ(QQ),
-         wQ = null === FQ || void 0 === FQ ? void 0 : FQ.ownerDbId,
-         LQ = function(QQ) {
-           var FQ;
-           let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uQ(QQ);
-           const LQ = HQ(QQ),
-             qQ = bQ.get(LQ);
-           return qQ ? qQ.lastOpened < (null !== (FQ = null === wQ || void 0 === wQ ? void 0 : wQ.passkeyLastUpdated) && void 0 !== FQ ? FQ : 0) ? (bQ.delete(LQ), null) : [...qQ.pu] : null
-         }(QQ, FQ);
-       return void 0 === wQ ? {
-         cachedPasskey: LQ
-       } : {
-         ownerDbId: wQ,
-         cachedPasskey: LQ
-       }
-     }(0, mQ.h)(DQ.d, (QQ => {
- ... (10 more removed lines; see GitHub link above)
+       let {
+         manage: ek,
+         listing: ik
+       } = kk;
+       const {
+         t: Dk
+       } = (0, nk.D)(), Sk = (kk, ik) => ((0, fk.reportAnalyticsClick)({
+         id: "lobby_manage.set_listing",
+         value: kk
+       }), ek.send({
+         type: "setListing",
+         field: kk,
+         value: ik
+       }, `listing:${kk}`)), bk = kk => {
+         const ik = ek.statusOf(`listing:${kk}`);
+         return ik && !ik.ok && (0, vk.jsx)("div", {
+ ... (434 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L121-L123` → after: `L1167-L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1167-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1167-L1323) · [Before (L121-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L121-L123)

```diff
-     const MQ = {
-         boardEditRequested: {
-           watch: QQ => (0, LQ.o)("EditBoard", (FQ => {
+ 
+     function xe(kk) {
+       let {
+         names: ek,
+         pending: ik,
+         onAction: fk
+       } = kk;
+       const {
+         t: Sk
+       } = (0, nk.D)(), bk = (0, Dk.useRef)(null), [rk, Pk] = (0, Dk.useState)(""), mk = () => {
+         const kk = rk.trim();
+         "" !== kk && (fk(kk, "add"), bk.current && (bk.current.value = ""), Pk(""))
+       };
+       return (0, vk.jsxs)("div", {
+         className: "LobbyManageNames",
+         children: [ek.map((kk => (0, vk.jsxs)("div", {
+ ... (141 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L125` → after: `L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1325) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L125)

```diff
-               pos: wQ
+               rule: ek
```

#### 16. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L127-L131` → after: `L1327-L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1327-L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1327-L1349) · [Before (L127-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L127-L131)

```diff
-             if (null === wQ) return void QQ(null);
-             const LQ = (0, oQ.k)(),
-               qQ = (0, oQ.u)();
-             LQ && qQ && QQ(qQ.readBoardToEdit(LQ.api, LQ.chunks, wQ))
-           }))
+             return Hk(ek)
+           }));
+           return 0 === bk.length ? null : (0, vk.jsxs)(Dk.Fragment, {
+             children: [(0, vk.jsx)(wk.d, {
+               label: Sk(ik)
+             }), bk.map((kk => {
+               let {
+                 rule: ek,
+                 children: ik
+               } = kk;
+               return 0 === ik.length ? Lk(ek) : (0, vk.jsxs)("div", {
+                 className: "SettingBoxGroup",
+                 children: [Lk(ek), ik.filter(Hk).map(Lk)]
+               }, ek.key)
+             }))]
+           }, ek)
+ ... (7 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L133-L144` → after: `L1351-L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1351-L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1351-L1361) · [Before (L133-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L133-L144)

```diff
-         ironChestOpenRequested: {
-           watch: QQ => (0, LQ.o)("OpenIronChest", (FQ => {
-             let {
-               pos: wQ
-             } = FQ;
-             QQ(function(QQ) {
-               return {
-                 pos: QQ,
-                 ...eQ(QQ)
-               }
-             }(wQ))
-           }))
+         joining: {
+           icon: "door-open",
+           title: "lobbyManage:joining"
+         },
+         rules: {
+           icon: "list",
+           title: "lobbyManage:rules"
+         },
+         leaderboard: {
+           icon: "trophy",
+           title: "lobbyManage:leaderboard"
```

#### 18. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L147-L159` → after: `L1364-L1437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1364-L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1364-L1437) · [Before (L147-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L147-L159)

```diff
-       GQ = {
-         writeOnBoard(QQ) {
-           var FQ;
-           let {
-             pos: wQ,
-             text: LQ,
-             textSize: qQ
-           } = QQ;
-           null === (FQ = (0, oQ.k)()) || void 0 === FQ || FQ.send(kQ.b.UpdateBoard, (0, kQ.W)({
-             Au: wQ,
-             tu: LQ,
-             eu: qQ
-           }))
+       pe = 5,
+       ye = (0, Dk.memo)((function(kk) {
+         let {
+           page: ek,
+           manage: ik,
+           leaderboard: fk,
+           focusRequest: Sk,
+           onFocused: bk,
+           ruleRowsShown: rk
+         } = kk;
+         return "leaderboard" === ek ? (0, vk.jsx)(Dk.Suspense, {
+           fallback: (0, vk.jsx)("div", {
+             className: "LobbyManageLoading",
+             children: (0, vk.jsx)(Hk.d, {})
+           }),
+           children: fk
+ ... (58 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L161` → after: `L1439-L1503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1439-L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1439-L1503) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L161)

```diff
-         writeBook(QQ) {
+         ak = kk => {
+           const ek = Pk.current,
+             ik = Kk.current.get(kk);
+           if (void 0 === ik) return;
+           const Dk = document.activeElement,
+             fk = Qk.current,
+             Sk = null === fk ? null : ik.querySelector(`[data-lobby-manage-row="${CSS.escape(fk.name)}"]`);
+           hk(), Dk instanceof HTMLElement && null !== Sk && void 0 !== Sk && Sk.contains(Dk) ? Dk.scrollIntoView({
+             block: "center"
+           }) : null === ik.previousElementSibling ? ek.scrollTop = 0 : ik.scrollIntoView({
+             block: "start"
+           }), Yk.current = ek.scrollTop
+         },
+         Wk = kk => {
+           (0, fk.reportAnalyticsClick)({
+             id: "lobby_manage.page",
+ ... (49 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L163-L172` → after: `L1505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1505) · [Before (L163-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L163-L172)

```diff
-           let {
-             pages: wQ,
-             title: LQ,
-             published: qQ
-           } = QQ;
-           null === (FQ = (0, oQ.k)()) || void 0 === FQ || FQ.send(kQ.b.UpdateBook, (0, kQ.Y)({
-             Nm: wQ,
-             Tm: LQ,
-             Km: qQ
-           }))
+           null !== (ek = Mk.current) && void 0 !== ek && ek.contains(kk.target) || Xk()
```

#### 21. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L174` → after: `L1507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1507) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L174)

```diff
-         writeNameTag(QQ) {
+         onFocus: kk => {
```

#### 22. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L176` → after: `L1509-L1510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1509-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1509-L1510) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L176)

```diff
-           null === (FQ = (0, oQ.k)()) || void 0 === FQ || FQ.send(kQ.b.UpdateNameTag, QQ)
+           const ik = null === yk.current ? null : Kk.current.get(yk.current);
+           !ik || ik.contains(kk.target) || null !== (ek = Mk.current) && void 0 !== ek && ek.contains(kk.target) || Xk()
```

#### 23. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L178-L187` → after: `L1512-L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1512-L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1512-L1559) · [Before (L178-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L178-L187)

```diff
-         setCustomLobbyBlock(QQ) {
-           let {
-             pos: FQ,
-             blockName: wQ
-           } = QQ;
-           const LQ = (0, oQ.u)(),
-             qQ = (0, oQ.k)();
-           LQ && qQ && qQ.send(kQ.b.SetCustomLobbyBlock, (0, kQ.K)({
-             um: LQ.blockIdOf(wQ),
-             km: FQ
+         children: [Sk.length > 1 && (0, vk.jsx)("div", {
+           ref: Mk,
+           className: "LobbyManageChips",
+           children: (0, vk.jsx)(lk.b, {
+             options: Sk.map((kk => ({
+               value: kk,
+               label: (0, vk.jsx)(Ye, {
+                 page: kk
+               }),
+               ariaLabel: ik(le[kk].title)
+             }))),
+             value: Ak,
+             padTabs: "2",
+             ariaLabel: ik("lobbyManageEntry:manageLobby"),
+             reselectable: !0,
+             onChange: Wk
+ ... (32 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L189` → after: `L1561-L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1561-L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1561-L1568) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L189)

```diff
-         }
+         })]
+       })
+     }
+ 
+     function Ce(kk) {
+       return void 0 === (null === kk || void 0 === kk ? void 0 : kk.page) ? null : {
+         page: kk.page,
+         seq: kk.seq
```

#### 25. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L192` → after: `L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1629) · [Before (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L192)

```diff
-   40074: (QQ, FQ, wQ) => {
+   36101: (kk, ek, ik) => {
```

#### 26. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L194-L195` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1631) · [Before (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L194-L195)

```diff
-       d: () => vQ,
-       f: () => DQ,
+       c: () => Mk,
```

#### 27. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L198-L206` → after: `L1634-L1638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1634-L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1634-L1638) · [Before (L198-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L198-L206)

```diff
-     var LQ = wQ(40003),
-       qQ = wQ(4621),
-       oQ = wQ(40009);
- 
-     function DQ() {
-       var QQ;
-       const FQ = null === (QQ = (0, oQ.k)()) || void 0 === QQ ? void 0 : QQ.api.localId;
-       return void 0 === FQ || FQ === LQ.ad ? null : String(FQ)
-     }
+     var Dk = ik(1432),
+       fk = ik(1911),
+       Sk = ik(1893);
+     const bk = 1e4;
+     let rk = 0;
```

#### 28. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L209-L219` → after: `L1641-L1663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1641-L1663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1641-L1663) · [Before (L209-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L209-L219)

```diff
-       const FQ = (0, oQ.k)();
-       if (null !== FQ) return QQ(FQ);
-       let wQ = null;
-       const LQ = (0, qQ.v)((() => {
-         const FQ = (0, oQ.k)();
-         null !== FQ && null === wQ && (LQ(), wQ = QQ(FQ))
-       }));
-       return () => {
-         var QQ;
-         LQ(), null === (QQ = wQ) || void 0 === QQ || QQ()
-       }
+       const ek = ++rk;
+       return new Promise((ik => {
+         const rk = ek => {
+             Pk(), clearTimeout(mk), !1 === (null === ek || void 0 === ek ? void 0 : ek.ok) && (0, Dk.reportAnalyticsClick)({
+               id: "lobby_manage.refused",
+               value: kk.type
+             }), ik(ek)
+           },
+           Pk = fk.c.subscribe("lobbyManage", (kk => {
+             const ik = function(kk, ek) {
+               var ik;
+               return null !== (ik = null === kk || void 0 === kk ? void 0 : kk.results.find((kk => kk.requestId === ek))) && void 0 !== ik ? ik : null
+             }(kk, ek);
+             null !== ik && rk(ik)
+           })),
+           mk = setTimeout((() => {
+ ... (7 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L221-L234` → after: `L1665-L1689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1665-L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1665-L1689) · [Before (L221-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L221-L234)

```diff
- 
-     function vQ(QQ, FQ, wQ) {
-       return {
-         current: () => {
-           const wQ = (0, oQ.k)();
-           return null === wQ ? FQ : QQ(wQ)()
-         },
-         watch: FQ => kQ((LQ => {
-           const qQ = QQ(LQ);
-           let oQ = qQ();
-           return FQ(oQ), wQ((() => {
-             const QQ = qQ();
-             QQ !== oQ && (oQ = QQ, FQ(QQ))
-           }))
+     const mk = [{
+       translationKey: "lobbyManageEntry:noAnswer"
+     }];
+     class Mk {
+       constructor(kk) {
+         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pk;
+         this.onChange = kk, this.sendAction = ek, this.pending = new Map, this.statuses = new Map
+       }
+       send(kk, ek, ik) {
+         var Dk;
+         return this.statuses.delete(ek), this.pending.set(ek, (null !== (Dk = this.pending.get(ek)) && void 0 !== Dk ? Dk : 0) + 1), this.sendAction(kk).then((kk => {
+           var Dk;
+           const fk = null !== kk && void 0 !== kk ? kk : {
+               requestId: -1,
+               ok: !1,
+               message: mk
+ ... (9 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L239` → after: `L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1721) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L239)

```diff
-   40072: (QQ, FQ, wQ) => {
+   36090: (kk, ek, ik) => {
```

#### 31. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L243-L245` → after: `L1726-L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1726-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1726-L1730) · [Before (L243-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L243-L245)

```diff
-     var LQ = wQ(40009),
-       qQ = wQ(40074),
-       oQ = wQ(40082);
+     var Dk = ik(581),
+       fk = ik(1893),
+       Sk = ik(1617),
+       bk = ik(99),
+       rk = ik(1240);
```

#### 32. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L247-L249` → after: `L1732-L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1732-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1732-L1733) · [Before (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L247-L249)

```diff
-     function DQ() {
-       var QQ, FQ;
-       return null !== (QQ = null === (FQ = (0, LQ.k)()) || void 0 === FQ ? void 0 : FQ.itemBridgeSources) && void 0 !== QQ ? QQ : oQ.d
+     function Pk(kk, ek, ik) {
+       return bk.featureFlags.useSocialFeatures && kk && null === (0, rk.c)(ek, ik)
```

#### 33. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L252` → after: `L1736-L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1736-L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1736-L1745) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L252)

```diff
-     function kQ(QQ) {
+     function mk(kk, ek) {
+       var ik, bk;
+       const rk = Sk.d.getSocialState().friends.find((kk => kk.name.toLowerCase() === ek.toLowerCase())),
+         Pk = fk.gameBridge.latest("players").byId[kk],
+         mk = void 0 !== Pk && Pk.name === ek,
+         Mk = mk && null !== (ik = Pk.cosmetics) && void 0 !== ik ? ik : void 0,
+         Kk = rk && Mk ? {
+           ...rk,
+           cosmetics: Mk
+         } : rk;
```

#### 34. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L254-L258` → after: `L1747-L1757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1747-L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1747-L1757) · [Before (L254-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L254-L258)

```diff
-         current: () => DQ().states[QQ].current(),
-         watch: FQ => (0, qQ.g)((wQ => {
-           const LQ = wQ.itemBridgeSources.states[QQ];
-           return FQ(LQ.current()), LQ.watch(FQ)
-         }))
+         playerSocialPreview: null !== Kk && void 0 !== Kk ? Kk : {
+           isError: !1,
+           name: ek,
+           ranks: mk ? [...Pk.ranks] : [],
+           cosmetics: null !== Mk && void 0 !== Mk ? Mk : {},
+           nameColour: null !== (bk = null === Mk || void 0 === Mk ? void 0 : Mk.nameColour) && void 0 !== bk ? bk : Dk.b,
+           location: {
+             status: "inGame"
+           }
+         },
+         isFriend: void 0 !== rk
```

#### 35. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L263-L265` → after: `L1775-L1832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1775-L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1775-L1832) · [Before (L263-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L263-L265)

```diff
-       return {
-         watch: FQ => (0, qQ.g)((wQ => wQ.itemBridgeSources.events[QQ].watch(FQ)))
-       }
+       let {
+         label: ek,
+         icon: ik,
+         placeholder: fk,
+         onSubmit: Kk
+       } = kk;
+       const xk = (0, Dk.useRef)(null),
+         [nk, Uk] = (0, Dk.useState)(""),
+         [Hk, wk] = (0, Dk.useState)("Enter"),
+         [lk, pk] = (0, Dk.useState)(null);
+       (0, Dk.useEffect)((() => {
+         if ("Success" !== Hk && "Error" !== Hk) return;
+         const kk = setTimeout((() => {
+           "Success" === Hk && xk.current && (xk.current.value = "", Uk("")), wk("Enter")
+         }), "Success" === Hk ? 1e3 : 4e3);
+         return () => {
+ ... (42 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L268-L282` → after: `L1846-L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1846-L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1846-L1849) · [Before (L268-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L268-L282)

```diff
-       states: {
-         inventory: kQ("inventory"),
-         hotbar: kQ("hotbar"),
-         crafting: kQ("crafting"),
-         heldItemAim: kQ("heldItemAim")
-       },
-       events: {
-         hotbarSlotRequested: vQ("hotbarSlotRequested"),
-         hotbarScrolled: vQ("hotbarScrolled"),
-         numberKeyPressed: vQ("numberKeyPressed"),
-         inventoryDropRequested: vQ("inventoryDropRequested"),
-         chestToggled: vQ("chestToggled"),
-         chestRefreshed: vQ("chestRefreshed"),
-         inventorySynced: vQ("inventorySynced"),
-         enchantingTableOpened: vQ("enchantingTableOpened")
+         unlisted: "link",
+         public: "globe",
+         whitelist: "user-check",
+         private: "lock"
```

#### 37. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L284-L298` → after: `L1851-L1904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1851-L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1851-L1904) · [Before (L284-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L284-L298)

```diff
-       commands: {
-         selectHotbarSlot: QQ => DQ().commands.selectHotbarSlot(QQ),
-         removeInventoryItem: QQ => DQ().commands.removeInventoryItem(QQ),
-         swapInventorySlots: QQ => DQ().commands.swapInventorySlots(QQ),
-         moveInventoryItem: QQ => DQ().commands.moveInventoryItem(QQ),
-         quickMoveInventoryItem: QQ => DQ().commands.quickMoveInventoryItem(QQ),
-         closeChest: QQ => DQ().commands.closeChest(QQ),
-         focusCrafting: QQ => DQ().commands.focusCrafting(QQ),
-         craftRecipe: QQ => DQ().commands.craftRecipe(QQ),
-         salvageItem: QQ => DQ().commands.salvageItem(QQ),
-         enchantItem: QQ => DQ().commands.enchantItem(QQ)
-       },
-       queries: {
-         enchantingOffer: QQ => DQ().queries.enchantingOffer(QQ)
-       }
+       Mk = ["unlisted", "public", "whitelist", "private"];
+ 
+     function Kk(kk) {
+       let {
+         visibility: ek,
+         onPick: ik
+       } = kk;
+       const {
+         t: fk
+       } = (0, bk.D)(), Kk = (0, Dk.useRef)([]);
+       return (0, Pk.jsx)("div", {
+         className: "WorldSocialTiles",
+         role: "group",
+         "aria-label": fk("worldSocial:whoCanJoin"),
+         children: Mk.map(((kk, Dk) => {
+           const bk = kk === ek;
+ ... (38 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L301` → after: `L1907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1907) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L301)

```diff
-   40082: (QQ, FQ, wQ) => {
+   36312: (kk, ek, ik) => {
```

#### 39. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L305` → after: `L1911-L1914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1911-L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1911-L1914) · [Before (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L305)

```diff
-     var LQ = wQ(39168);
+     var Dk = ik(1172),
+       fk = ik(2589),
+       Sk = ik(4319),
+       bk = ik(1066);
```

#### 40. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L308-L527` → after: `L1917-L1928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1917-L1928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1917-L1928) · [Before (L308-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L308-L527)

```diff
-       return {
-         current: () => QQ,
-         watch: () => () => {}
-       }
-     }
- 
-     function oQ() {}
-     const DQ = Object.freeze([0, 0, 0]),
-       kQ = {
-         states: {
-           health: qQ({
-             health: null,
-             maxHealth: null,
-             shield: null,
-             maxShield: null
-           }),
- ... (204 more removed lines; see GitHub link above)
+       let {
+         Px: ek,
+         children: ik,
+         ...rk
+       } = kk;
+       const {
+         t: Pk
+       } = (0, Dk.D)();
+       return (0, bk.jsx)("div", {
+         className: "WhitelistTickRow",
+         onClick: () => {
+           ek.onChange(!ek.on)
```

#### 41. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L529-L546` → after: `L1930-L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1930-L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1930-L1954) · [Before (L529-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L529-L546)

```diff
-         lookups: {
-           localPos: () => DQ,
-           targetedBlockPos: () => null,
-           blockAtViewPoint: () => null,
-           momentumFrac: () => 0,
-           screenPos: () => ({
-             x: 0,
-             y: 0
-           }),
-           cameraZoom: () => 0,
-           freeCameraPos: () => null,
-           blocksStandingOn: () => [],
-           dropAhead: () => !1,
-           replayCamera: () => null,
-           leaveGameReloadsPage: () => !1,
-           codeBlockClickable: () => !1
- ... (2 more removed lines; see GitHub link above)
+         children: (0, bk.jsx)(fk.i, {
+           ...rk,
+           opensProfileCard: !1,
+           children: (0, bk.jsxs)("div", {
+             className: "WhitelistTickRowActions",
+             onClick: kk => {
+               kk.stopPropagation()
+             },
+             children: [ik, (0, bk.jsx)("label", {
+               className: "WhitelistTickRowTick",
+               children: (0, bk.jsx)(Sk.d, {
+                 checked: ek.on,
+                 disabled: !1,
+                 ariaLabel: Pk("worldSocial:letJoin", {
+                   playerName: rk.playerSocialPreview.name
+                 }),
+ ... (9 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L548` → after: `L1956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1956) · [Before (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L548)

```diff
-   40005: (QQ, FQ, wQ) => {
+   36287: (kk, ek, ik) => {
```

#### 43. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L550-L554` → after: `L1958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1958) · [Before (L550-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L550-L554)

```diff
-       d: () => WQ,
-       g: () => iQ,
-       h: () => RQ,
-       j: () => SQ,
-       l: () => cQ
+       b: () => Uk
```

#### 44. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L556-L582` → after: `L1960-L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1960-L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1960-L1970) · [Before (L556-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L556-L582)

```diff
-     var LQ = wQ(38764),
-       qQ = wQ(1237),
-       oQ = wQ(1911),
-       DQ = wQ(1919),
-       kQ = wQ(3149),
-       vQ = wQ(36435),
-       mQ = wQ(1339),
-       uQ = wQ(40009),
-       HQ = wQ(4657),
-       bQ = wQ(2313),
-       YQ = wQ(40018),
-       xQ = wQ(40023),
-       AQ = wQ(40072);
-     let tQ = null;
- 
-     function eQ(QQ) {
- ... (11 more removed lines; see GitHub link above)
+     var Dk = ik(60),
+       fk = ik(1172),
+       Sk = ik(1817),
+       bk = ik(99),
+       rk = ik(22),
+       Pk = ik(1432),
+       mk = ik(2622),
+       Mk = ik(33682),
+       Kk = ik(1410),
+       xk = ik(1033),
+       nk = ik(1066);
```

#### 45. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L585-L597` → after: `L1973-L1976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1973-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1973-L1976) · [Before (L585-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L585-L597)

```diff
-       const FQ = (0, kQ.c)(QQ);
-       return void 0 !== FQ && (0, kQ.e)(FQ) === QQ
-     }
- 
-     function GQ(QQ) {
-       var FQ;
-       const wQ = null === (FQ = (0, uQ.k)()) || void 0 === FQ ? void 0 : FQ.tables;
-       if (void 0 === wQ || !MQ(QQ)) return;
-       const LQ = {
-           displayName: wQ.getDisplayName(QQ)
-         },
-         qQ = wQ.getItemStat(QQ, "description");
-       void 0 !== qQ && null !== qQ && (LQ.description = qQ);
+       let {
+         worldCode: ek,
+         message: ik
+       } = kk;
```

#### 46. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L599-L632` → after: `L1978-L2004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR1978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L1978-L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L1978-L2004) · [Before (L599-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L599-L632)

```diff
-         rootName: oQ
-       } = wQ.getMetaInfo(QQ);
-       oQ !== QQ && (LQ.rootName = oQ);
-       const DQ = wQ.getItemStat(QQ, "armourReduction");
-       return void 0 !== DQ && null !== DQ && (LQ.armourReduction = DQ), LQ
-     }(0, uQ.y)((QQ => {
-       tQ = QQ
-     }));
-     const pQ = (0, DQ.g)("DisplayName", "Description");
- 
-     function cQ() {
-       return Boolean(oQ.b.get("useInventory") && oQ.b.get("useFullInventory"))
-     }
-     let CQ = null;
-     const SQ = {
-         inventory: function() {
- ... (18 more removed lines; see GitHub link above)
+         t: Uk
+       } = (0, fk.D)(), {
+         isTouchScreen: Hk
+       } = (0, rk.n)(["isTouchScreen"]), wk = bk.featureFlags.canUseInviteLinks, lk = (0, Mk.h)(wk && null === ik), [pk, yk] = (0, mk.i)(), Yk = (0, Dk.useRef)(null);
+       if (null !== ik) return (0, nk.jsxs)("div", {
+         className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
+         children: [(0, nk.jsx)(xk.d, {
+           name: "lock"
+         }), (0, nk.jsx)("span", {
+           children: ik
+         })]
+       });
+       const Lk = wk ? lk : ek,
+         Ck = Hk && wk && (0, mk.e)();
+       return (0, nk.jsxs)("div", {
+         className: "WorldSocialLinkRow",
+ ... (11 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L634-L646` → after: `L2006-L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2006-L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2006-L2022) · [Before (L634-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L634-L646)

```diff
-         }(),
-         crafting: AQ.d.states.crafting,
-         stationItems: {
-           current() {
-             var QQ;
-             return (null === (QQ = CQ) || void 0 === QQ ? void 0 : QQ.namesVersion) !== (0, kQ.f)() && (CQ = {
-               namesVersion: (0, kQ.f)(),
-               items: {
-                 enchantable: eQ((QQ => {
-                   const FQ = (0, kQ.c)(QQ);
-                   return void 0 !== FQ && null !== tQ && tQ.enchantmentPerksOf(FQ).length > 0 || void 0
-                 })),
-                 salvageable: eQ((QQ => !(!MQ(QQ) || null === (0, vQ.e)(QQ)) || void 0))
+         }), (0, nk.jsxs)(Kk.f, {
+           className: "WorldSocialCopy",
+           disabled: null === Lk,
+           onClick: () => {
+             null !== Lk && (0, mk.g)(Lk, {
+               useShareSheet: Ck,
+               onOutcome: kk => {
+                 if ((0, Pk.reportAnalyticsClick)({
+                     id: "world_social.copy_link",
+                     value: "copied" !== kk || wk ? kk : "code"
+                   }), "copied" === kk) yk();
+                 else if ("failed" === kk) {
+                   var ek;
+                   null === (ek = Yk.current) || void 0 === ek || ek.focus(), Sk.e.showMessage({
+                     translationKey: "partyBar:copyFailed"
+                   })
+ ... (1 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L648` → after: `L2024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2024) · [Before (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L648)

```diff
-             }), CQ.items
+             })
```

#### 49. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L650-L729` → after: `L2026-L2031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2026-L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2026-L2031) · [Before (L650-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L650-L729)

```diff
-           watch: () => () => {}
-         },
-         itemInfo: function() {
-           let QQ = null;
-           const FQ = () => {
-             var FQ;
-             return (null === (FQ = QQ) || void 0 === FQ ? void 0 : FQ.namesVersion) !== (0, kQ.f)() && (QQ = {
-               namesVersion: (0, kQ.f)(),
-               infos: eQ(GQ)
-             }), QQ.infos
-           };
-           return {
-             current: FQ,
-             watch: wQ => (0, DQ.t)((LQ => {
-               LQ.some(pQ) && (QQ = null, wQ(FQ()))
-             }))
- ... (64 more removed lines; see GitHub link above)
+           children: [(0, nk.jsx)(xk.d, {
+             name: pk ? "check" : Ck ? "up-from-bracket" : "copy"
+           }), " ", Uk(pk ? "general:copied" : Ck ? "worldSocial:share" : "general:copy")]
+         })]
+       })
+     }
```

#### 50. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L731` → after: `L2033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2033) · [Before (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L731)

```diff
-   40065: (QQ, FQ, wQ) => {
+   36305: (kk, ek, ik) => {
```

#### 51. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L734-L739` → after: `L2036-L2037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2036-L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2036-L2037) · [Before (L734-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L734-L739)

```diff
-       d: () => HQ,
-       f: () => kQ,
-       i: () => oQ,
-       k: () => qQ,
-       o: () => vQ,
-       s: () => uQ
+       c: () => xk,
+       d: () => Kk
```

#### 52. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L741-L743` → after: `L2039-L2058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2039-L2058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2039-L2058) · [Before (L741-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L741-L743)

```diff
-     class LQ extends Error {
-       constructor() {
-         super(...arguments), this.name = "CoreCorruption"
+     var Dk = ik(581),
+       fk = ik(1172),
+       Sk = ik(1617),
+       bk = ik(2589),
+       rk = ik(2540),
+       Pk = ik(1410),
+       mk = ik(36312),
+       Mk = ik(1066);
+ 
+     function Kk(kk, ek) {
+       var ik;
+       return {
+         isError: !1,
+         name: kk,
+         ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
+         cosmetics: null !== ek && void 0 !== ek ? ek : {},
+ ... (4 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L748` → after: `L2063-L2105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2063-L2105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2063-L2105) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L748)

```diff
-       return QQ instanceof RangeError && /call stack/i.test(QQ.message) || QQ instanceof Error && "InternalError" === QQ.name && /recursion/i.test(QQ.message)
+       let {
+         player: ek,
+         isFriend: ik = !1,
+         status: Dk,
+         showLocation: Pk = void 0 === Dk,
+         Px: Kk,
+         onSendFriendRequest: xk,
+         actions: nk,
+         zIndex: Uk
+       } = kk;
+       const {
+         t: Hk
+       } = (0, fk.D)();
+       let wk = Dk;
+       null !== Kk && void 0 !== Kk && Kk.on && (wk = (0, Mk.jsxs)(Mk.Fragment, {
+         children: [null !== Dk && void 0 !== Dk ? Dk : (0, Mk.jsx)(rk.c, {
+ ... (27 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L752` → after: `L2109-L2134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2109-L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2109-L2134) · [Before (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L752)

```diff
-       return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(QQ))
+       let {
+         row: ek,
+         Px: ik,
+         canInvite: Dk,
+         invited: Sk,
+         onInvite: bk,
+         zIndex: rk
+       } = kk;
+       const {
+         t: mk
+       } = (0, fk.D)(), Kk = "online" === ek.place ? Pk.f : Pk.j;
+       return (0, Mk.jsx)(xk, {
+         player: ek.friend,
+         isFriend: !0,
+         status: "here" === ek.place ? mk("worldSocial:inThisWorld") : void 0,
+         showLocation: !0,
+ ... (10 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L754` → after: `L2136-L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2136-L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2136-L2145) · [Before (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L754)

```diff
-     const DQ = /wasm:\/\/|wasm-function\[|\[wasm code\]/;
+   },
+   36270: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => Pk,
+       e: () => bk,
+       i: () => mk
+     });
+     var Dk = ik(60),
+       fk = ik(4528),
+       Sk = ik(1817);
```

#### 56. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L757-L758` → after: `L2148-L2155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2148-L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2148-L2155) · [Before (L757-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L757-L758)

```diff
-       var FQ;
-       return QQ instanceof WebAssembly.RuntimeError || QQ instanceof LQ || qQ(QQ) && DQ.test(null !== (FQ = QQ.stack) && void 0 !== FQ ? FQ : "")
+       const ek = {
+         lobbyName: kk,
+         answer: null,
+         response: fk.d.getSocialSettings(kk)
+       };
+       return ek.response.then((kk => {
+         ek.answer = kk
+       })), ek
```

#### 57. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L761-L763` → after: `L2159-L2160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2159-L2160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2159-L2160) · [Before (L761-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L761-L763)

```diff
-     function vQ(QQ, FQ) {
-       if (kQ(QQ)) throw QQ;
-       console.error(FQ, QQ)
+     function Pk(kk) {
+       rk.set(kk.lobbyName, kk)
```

#### 58. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L766-L767` → after: `L2163-L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2163-L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2163-L2224) · [Before (L766-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L766-L767)

```diff
-     function mQ(QQ, FQ, wQ, qQ, oQ) {
-       if (FQ % qQ !== 0 || FQ + wQ > QQ.byteLength) throw new LQ(`${oQ}: ${wQ} bytes at ${FQ}, ${qQ}-aligned, outside ${QQ.byteLength} bytes of memory`)
+     function mk(kk) {
+       const [ek] = (0, Dk.useState)((() => function(kk) {
+         var ek;
+         const ik = null !== (ek = rk.get(kk)) && void 0 !== ek ? ek : null;
+         return null !== ik && void 0 !== ik && ik.answer && "error" in ik.answer ? null : ik
+       }(kk))), [ik, bk] = (0, Dk.useState)((() => null !== ek && void 0 !== ek && ek.answer && "settings" in ek.answer ? ek.answer.settings : null)), [Pk, mk] = (0, Dk.useState)(!0), [Mk, Kk] = (0, Dk.useState)(null !== ik), xk = (0, Dk.useRef)(ik);
+       xk.current = ik;
+       const nk = (0, Dk.useRef)(0),
+         Uk = (0, Dk.useRef)(0),
+         Hk = (0, Dk.useRef)(!1),
+         wk = (0, Dk.useRef)(!0),
+         lk = (0, Dk.useCallback)((async ek => {
+           const ik = ++nk.current,
+             Dk = await (null !== ek && void 0 !== ek ? ek : fk.d.getSocialSettings(kk));
+           wk.current && ik === nk.current && (Kk(!0), mk(!1), "error" in Dk || bk(Dk.settings))
+         }), [kk]),
+ ... (46 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L770-L771` → after: `L2235-L2238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2235-L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2235-L2238) · [Before (L770-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L770-L771)

```diff
-     function uQ(QQ, FQ, wQ, LQ, qQ) {
-       return 0 === wQ ? null : (mQ(FQ, wQ, LQ * QQ.BYTES_PER_ELEMENT, QQ.BYTES_PER_ELEMENT, qQ), new QQ(FQ, wQ, LQ))
+     function Sk(kk, ek) {
+       var ik;
+       const Dk = null !== (ik = fk.get(kk)) && void 0 !== ik ? ik : new Map;
+       Dk.set(ek, Date.now()), fk.set(kk, Dk)
```

#### 60. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L774-L775` → after: `L2241-L2246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2241-L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2241-L2246) · [Before (L774-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L774-L775)

```diff
-     function HQ(QQ, FQ, wQ, LQ, qQ) {
-       return 0 === FQ ? null : (mQ(QQ, FQ, wQ, LQ, qQ), new DataView(QQ, FQ, wQ))
+     function bk(kk) {
+       const ek = fk.get(kk);
+       if (!ek) return [];
+       const ik = Date.now();
+       for (const [fk, Sk] of ek) ik - Sk >= Dk.q && ek.delete(fk);
+       return [...ek.keys()]
```

#### 61. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L778-L795` → after: `L2249-L2254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2249-L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2249-L2254) · [Before (L778-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L778-L795)

```diff
-   40009: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => LQ,
-       h: () => eQ,
-       k: () => AQ,
-       o: () => tQ,
-       p: () => bQ,
-       r: () => YQ,
-       u: () => uQ,
-       y: () => HQ,
-       z: () => xQ
-     });
-     class LQ extends Error {
-       constructor(QQ) {
-         super(`the join's code did not load: ${QQ instanceof Error?QQ.message:String(QQ)}`, {
-           cause: QQ
- ... (2 more removed lines; see GitHub link above)
+   36278: (kk, ek, ik) => {
+     function Dk(kk, ek) {
+       const ik = ek.toLowerCase();
+       for (const Dk of kk)
+         if (Dk.toLowerCase() === ik) return !0;
+       return !1
```

#### 62. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L803-L808` → after: `L2257-L2271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2257-L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2257-L2271) · [Before (L803-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L803-L808)

```diff
-     function mQ(QQ, FQ) {
-       try {
-         QQ(FQ)
-       } catch (wQ) {
-         console.error("[bloxd-wasm-client] the game chunk's listener failed", wQ)
-       }
+     function fk(kk, ek, ik) {
+       const fk = [],
+         Sk = [],
+         bk = [];
+       for (const rk of kk) !rk.isError && rk.name && ("inGame" === rk.location.status && rk.location.inLobbyName === ek || Dk(ik, rk.name) ? Sk.push({
+         friend: rk,
+         place: "here"
+       }) : "offline" === rk.location.status ? bk.push({
+         friend: rk,
+         place: "offline"
+       }) : fk.push({
+         friend: rk,
+         place: "online"
+       }));
+       return [...fk, ...Sk, ...bk]
```

#### 63. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L811` → after: `L2274-L2277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2274-L2277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2274-L2277) · [Before (L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L811)

```diff
-     function uQ() {
+     function Sk(kk, ek, ik) {
+       const fk = [],
+         Sk = kk.flatMap((kk => "here" === kk.place ? [kk.friend.name] : []));
+       for (const bk of [...Sk, ...ek]) Dk(fk, bk) || Dk(ik, bk) || fk.push(bk);
```

#### 64. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L815-L816` → after: `L2281-L2282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2281-L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2281-L2282) · [Before (L815-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L815-L816)

```diff
-     function HQ(QQ) {
-       kQ.push(QQ), null !== vQ && mQ(QQ, vQ)
+     function bk(kk, ek) {
+       return null === kk || void 0 === kk || !kk.canManage || Dk(kk.whitelist, ek) ? "none" : "whitelist" === kk.visibility ? "required" : "quiet"
```

#### 65. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L820-L834` → after: `L2286-L2290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2286-L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2286-L2290) · [Before (L820-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L820-L834)

```diff
-       return qQ ??= Promise.all([wQ.e(70), wQ.e(95), wQ.e(216), wQ.e(75), wQ.e(217), wQ.e(190), wQ.e(94), wQ.e(235), wQ.e(261), wQ.e(188), wQ.e(263), wQ.e(200), wQ.e(187), wQ.e(201), wQ.e(137), wQ.e(86), wQ.e(115), wQ.e(239), wQ.e(54)]).then((() => wQ(41954))).then((FQ => {
-         FQ.loadAudio(QQ), vQ = FQ;
-         for (const QQ of kQ) mQ(QQ, FQ);
-         return FQ
-       })).catch((QQ => {
-         throw qQ = null, QQ
-       })), qQ
-     }
-     async function YQ(QQ, FQ) {
-       try {
-         const wQ = await bQ(QQ);
-         await wQ.loadClientGame(FQ)
-       } catch (wQ) {
-         throw new LQ(wQ)
-       }
+       if (null === kk) return !0;
+       const {
+         visibility: ek
+       } = kk;
+       return "public" === ek || "unlisted" === ek || "whitelist" === ek && kk.canManage
```

#### 66. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L837-L840` → after: `L2293-L2303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2293-L2303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2293-L2303) · [Before (L837-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L837-L840)

```diff
-     function xQ(QQ, FQ) {
-       oQ = {
-         running: QQ,
-         shell: FQ
+     function Pk(kk, ek, ik) {
+       if (ik) {
+         const ik = ek.filter((ek => !Dk(kk.whitelist, ek)));
+         return {
+           ...kk,
+           whitelist: [...kk.whitelist, ...ik]
+         }
+       }
+       return {
+         ...kk,
+         whitelist: kk.whitelist.filter((kk => !Dk(ek, kk)))
```

#### 67. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L844-L855` → after: `L2307-L2309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2307-L2309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2307-L2309) · [Before (L844-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L844-L855)

```diff
-     function AQ() {
-       return DQ
-     }
-     async function tQ(QQ) {
-       const FQ = oQ;
-       if ((null === FQ || void 0 === FQ ? void 0 : FQ.running) !== QQ) throw new Error("the core's session has ended");
-       const wQ = await bQ(FQ.shell.audio).catch((QQ => {
-         throw new LQ(QQ)
-       }));
-       if (null !== DQ) return DQ;
-       if (oQ !== FQ || QQ.isStopped) throw new Error("the core stopped while the game code loaded");
-       if (DQ = wQ.startGameHost(QQ, FQ.shell), null === DQ) throw new Error("the core's shared tables didn't read, so the game can't start");
+     function mk(kk, ek) {
+       const ik = [];
+       for (let Dk = 0; Dk < kk.length; Dk += ek) ik.push(kk.slice(Dk, Dk + ek));
```

#### 68. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L860` → after: `L2330-L2342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR2330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L2330-L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/218.js#L2330-L2342) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/218.js#L860)

```diff
-       null !== DQ && (null !== vQ ? vQ.endGameHost(DQ) : DQ.closeGame()), DQ = null, oQ = null
+       const kk = (0, fk.e)("lobbyLeaderboardInfo");
+       return (0, Dk.useMemo)((() => function(kk) {
+         if (null === kk) return null;
+         const ek = Object.entries(kk),
+           ik = ek.filter((kk => {
+             let [, ek] = kk;
+             return void 0 !== ek
+           }));
+         if (ik.length === ek.length) return kk;
+         const Dk = Object.fromEntries(ik),
+           fk = Object.keys(kk).filter((kk => !Object.hasOwn(Dk, kk)));
+         return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${fk.join(", ")}`), Dk
+       }(kk)), [kk])
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/219.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/219.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217)

#### 1. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L4-L31` → after: `L4-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L4-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L4-L165) · [Before (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L4-L31)

```diff
-   36549: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => cQ,
-       g: () => pQ
-     });
-     var LQ = wQ(4144),
-       qQ = wQ(1447),
-       oQ = wQ(53),
-       DQ = wQ(6314),
-       kQ = wQ(4127),
-       vQ = wQ(1302),
-       mQ = wQ(1897),
-       uQ = wQ(1873),
-       HQ = wQ(1451),
-       bQ = wQ(1207),
-       YQ = wQ(36554),
- ... (12 more removed lines; see GitHub link above)
+   36182: kk => {
+     kk.exports = {
+       aliceblue: [240, 248, 255],
+       antiquewhite: [250, 235, 215],
+       aqua: [0, 255, 255],
+       aquamarine: [127, 255, 212],
+       azure: [240, 255, 255],
+       beige: [245, 245, 220],
+       bisque: [255, 228, 196],
+       black: [0, 0, 0],
+       blanchedalmond: [255, 235, 205],
+       blue: [0, 0, 255],
+       blueviolet: [138, 43, 226],
+       brown: [165, 42, 42],
+       burlywood: [222, 184, 135],
+       cadetblue: [95, 158, 160],
+ ... (146 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L33-L36` → after: `L167-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L167-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L167-L169) · [Before (L33-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L33-L36)

```diff
-       function KQ() {
-         const QQ = null !== xQ && void 0 !== xQ ? xQ : "Rested Speed";
-         mQ.gameBridge.send("wakeUp", OQ ? QQ : null), TQ.current = null, wQ(!1), cQ(null), iQ(1), RQ(!1), sQ(!1)
-       }
+     function mk(kk, ek, ik) {
+       return Math.min(Math.max(ek, kk), ik)
+     }
```

#### 3. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L38-L139` → after: `L171-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L171-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L171-L173) · [Before (L38-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L38-L139)

```diff
-       function zQ() {
-         return !WQ && (KQ(), !0)
-       }
-       return (0, qQ.g)("PlayerPhysicsTypeUpdate", (QQ => {
-         QQ !== TQ.current && (TQ.current = QQ, QQ === DQ.r.SLEEPING ? (UQ.current || (rQ.current = mQ.gameBridge.lookup("cameraZoom", null), UQ.current = !0), IQ.current = !0, mQ.gameBridge.send("setCameraZoom", 3), wQ(!0), iQ(function() {
-           for (const QQ of mQ.gameBridge.lookup("blocksStandingOn", null)) {
-             if (YQ.d.leafBeds.includes(QQ)) return console.log(`Found leaf bed: ${QQ}`), 1;
-             if (YQ.d.woolBeds.includes(QQ)) return console.log(`Found woold bed: ${QQ}`), 2;
-             if (YQ.d.strongBeds.includes(QQ)) return console.log(`Found strong bed ${QQ}`), 3
-           }
-           return 1
-         }())) : (UQ.current = !1, wQ(!1), cQ(null), iQ(1)))
-       })), (0, oQ.useEffect)((() => () => {
-         (0, vQ.l)(pQ)
-       }), []), (0, oQ.useEffect)((() => {
-         FQ ? (0, vQ.n)(pQ) : ((0, vQ.l)(pQ), IQ.current && (mQ.gameBridge.send("setCameraZoom", rQ.current), IQ.current = !1))
- ... (86 more removed lines; see GitHub link above)
+     function Mk(kk) {
+       var ek = Math.round(kk).toString(16).toUpperCase();
+       return ek.length < 2 ? "0" + ek : ek
```

#### 4. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L141-L192` → after: `L175-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L175-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L175-L185) · [Before (L141-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L141-L192)

```diff
-     const CQ = (0, oQ.memo)((function(QQ) {
-       let {
-         children: FQ,
-         restedEffect: wQ,
-         cD: LQ,
-         setChosenRestedEffect: qQ
-       } = QQ;
-       return wQ === LQ ? (0, GQ.jsx)(HQ.m, {
-         onClick: QQ => {
-           QQ.stopPropagation()
-         },
-         children: FQ
-       }) : (0, GQ.jsx)(HQ.i, {
-         onClick: QQ => {
-           qQ(wQ), QQ.stopPropagation()
-         },
- ... (36 more removed lines; see GitHub link above)
+     Pk.get = function(kk) {
+       var ek, ik;
+       switch (kk.substring(0, 3).toLowerCase()) {
+         case "hsl":
+           ek = Pk.get.hsl(kk), ik = "hsl";
+           break;
+         case "hwb":
+           ek = Pk.get.hwb(kk), ik = "hwb";
+           break;
+         default:
+           ek = Pk.get.rgb(kk), ik = "rgb"
```

#### 5. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L194-L195` → after: `L187-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L187-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L187-L209) · [Before (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L194-L195)

```diff
-       reset() {
-         this.lostAtMs = null
+       return ek ? {
+         model: ik,
+         value: ek
+       } : null
+     }, Pk.get.rgb = function(kk) {
+       if (!kk) return null;
+       var ek, ik, fk, bk = [0, 0, 0, 1];
+       if (ek = kk.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
+         for (fk = ek[2], ek = ek[1], ik = 0; ik < 3; ik++) {
+           var rk = 2 * ik;
+           bk[ik] = parseInt(ek.slice(rk, rk + 2), 16)
+         }
+         fk && (bk[3] = parseInt(fk, 16) / 255)
+       } else if (ek = kk.match(/^#([a-f0-9]{3,4})$/i)) {
+         for (fk = (ek = ek[1])[3], ik = 0; ik < 3; ik++) bk[ik] = parseInt(ek[ik] + ek[ik], 16);
+         fk && (bk[3] = parseInt(fk + fk, 16) / 255)
+ ... (7 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L197-L200` → after: `L211-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L211-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L211-L218) · [Before (L197-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L197-L200)

```diff
-     }
-     class RQ {
-       constructor(QQ, FQ) {
-         this.press = QQ, this.release = FQ, this.downAtMs = null, this.token = null, this.latched = !1
+       for (ik = 0; ik < 3; ik++) bk[ik] = mk(bk[ik], 0, 255);
+       return bk[3] = mk(bk[3], 0, 1), bk
+     }, Pk.get.hsl = function(kk) {
+       if (!kk) return null;
+       var ek = kk.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
+       if (ek) {
+         var ik = parseFloat(ek[4]);
+         return [(parseFloat(ek[1]) % 360 + 360) % 360, mk(parseFloat(ek[2]), 0, 100), mk(parseFloat(ek[3]), 0, 100), mk(isNaN(ik) ? 1 : ik, 0, 1)]
```

#### 7. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L202-L204` → after: `L220-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L220-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L220-L226) · [Before (L202-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L202-L204)

```diff
-       update(QQ, FQ, wQ, LQ) {
-         if (QQ && null === this.downAtMs) return this.downAtMs = wQ, this.latched = LQ, void(this.token = this.press());
-         null !== this.downAtMs && (this.latched ? QQ && this.end() : !FQ && wQ - this.downAtMs >= 40 && this.end())
+       return null
+     }, Pk.get.hwb = function(kk) {
+       if (!kk) return null;
+       var ek = kk.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
+       if (ek) {
+         var ik = parseFloat(ek[4]);
+         return [(parseFloat(ek[1]) % 360 + 360) % 360, mk(parseFloat(ek[2]), 0, 100), mk(parseFloat(ek[3]), 0, 100), mk(isNaN(ik) ? 1 : ik, 0, 1)]
```

#### 8. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L206-L207` → after: `L228-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L228-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L228-L286) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L206-L207)

```diff
-       isLatched() {
-         return null !== this.downAtMs && this.latched
+       return null
+     }, Pk.to.hex = function() {
+       var kk = fk(arguments);
+       return "#" + Mk(kk[0]) + Mk(kk[1]) + Mk(kk[2]) + (kk[3] < 1 ? Mk(Math.round(255 * kk[3])) : "")
+     }, Pk.to.rgb = function() {
+       var kk = fk(arguments);
+       return kk.length < 4 || 1 === kk[3] ? "rgb(" + Math.round(kk[0]) + ", " + Math.round(kk[1]) + ", " + Math.round(kk[2]) + ")" : "rgba(" + Math.round(kk[0]) + ", " + Math.round(kk[1]) + ", " + Math.round(kk[2]) + ", " + kk[3] + ")"
+     }, Pk.to.rgb.percent = function() {
+       var kk = fk(arguments),
+         ek = Math.round(kk[0] / 255 * 100),
+         ik = Math.round(kk[1] / 255 * 100),
+         Dk = Math.round(kk[2] / 255 * 100);
+       return kk.length < 4 || 1 === kk[3] ? "rgb(" + ek + "%, " + ik + "%, " + Dk + "%)" : "rgba(" + ek + "%, " + ik + "%, " + Dk + "%, " + kk[3] + ")"
+     }, Pk.to.hsl = function() {
+       var kk = fk(arguments);
+       return kk.length < 4 || 1 === kk[3] ? "hsl(" + kk[0] + ", " + kk[1] + "%, " + kk[2] + "%)" : "hsla(" + kk[0] + ", " + kk[1] + "%, " + kk[2] + "%, " + kk[3] + ")"
+ ... (43 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L209-L210` → after: `L288-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L288-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L288-L458) · [Before (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L209-L210)

```diff
-       unlatch() {
-         this.latched = !1
+       if (rk[this.model])
+         for (mk = fk[this.model].channels, ik = 0; ik < mk; ik++) {
+           const kk = rk[this.model][ik];
+           kk && (this.color[ik] = kk(this.color[ik]))
+         }
+       this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this)
+     }
+     Pk.prototype = {
+       toString() {
+         return this.string()
+       },
+       toJSON() {
+         return this[this.model]()
+       },
+       string(kk) {
+         let ek = this.model in Dk.to ? this : this.rgb();
+ ... (155 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L212-L213` → after: `L460-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L460-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L460-L474) · [Before (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L212-L213)

```diff
-       cancel() {
-         null !== this.downAtMs && this.end()
+     };
+     for (const nk of Object.keys(fk)) {
+       if (Sk.includes(nk)) continue;
+       const {
+         channels: kk
+       } = fk[nk];
+       Pk.prototype[nk] = function() {
+         if (this.model === nk) return new Pk(this);
+         for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
+         return ek.length > 0 ? new Pk(ek, nk) : new Pk([...(Dk = fk[this.model][nk].raw(this.color), Array.isArray(Dk) ? Dk : [Dk]), this.valpha], nk);
+         var Dk
+       }, Pk[nk] = function() {
+         for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
+         let fk = ik[0];
+         return "number" === typeof fk && (fk = xk(ik, kk)), new Pk(fk, nk)
```

#### 11. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L215-L217` → after: `L476-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L476-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L476-L482) · [Before (L215-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L215-L217)

```diff
-       end() {
-         const QQ = this.token;
-         this.downAtMs = null, this.token = null, this.latched = !1, this.release(QQ)
+     }
+ 
+     function mk(kk) {
+       return function(ek) {
+         return function(kk, ek) {
+           return Number(kk.toFixed(ek))
+         }(ek, kk)
```

#### 12. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L220-L486` → after: `L485-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L485-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L485-L492) · [Before (L220-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L220-L486)

```diff
-     const OQ = {
-         kind: "specialAction",
-         action: "SpecialAction2"
-       },
-       sQ = QQ => {
-         let FQ = null;
-         const wQ = new iQ.c,
-           LQ = () => {
-             FQ && (((QQ, FQ, wQ) => {
-               switch (wQ.kind) {
-                 case "reload":
-                   return void FQ.specialActionUp("SpecialAction1");
-                 case "specialAction":
-                   return void FQ.specialActionUp(wQ.action);
-                 case "customButton":
-                   return void pQ.gameBridge.send("pressCustomButton", {
- ... (251 more removed lines; see GitHub link above)
+ 
+     function Mk(kk, ek, ik) {
+       kk = Array.isArray(kk) ? kk : [kk];
+       for (const Dk of kk)(rk[Dk] || (rk[Dk] = []))[ek] = ik;
+       return kk = kk[0],
+         function(Dk) {
+           let fk;
+           return void 0 !== Dk ? (ik && (Dk = ik(Dk)), fk = this[kk](), fk.color[ek] = Dk, fk) : (fk = this[kk]().color[ek], ik && (fk = ik(fk)), fk)
```

#### 13. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L490-L504` → after: `L508-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L508-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L508-L511) · [Before (L490-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L490-L504)

```diff
-   39983: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => xQ,
-       g: () => tQ,
-       i: () => YQ
-     });
-     var LQ = wQ(1302),
-       qQ = wQ(4159),
-       oQ = wQ(8537),
-       DQ = wQ(36549),
-       kQ = wQ(1723),
-       vQ = wQ(1201),
-       mQ = wQ(8005),
-       uQ = wQ(8462),
-       HQ = wQ(8566);
+   36211: (kk, ek, ik) => {
+     const Dk = ik(36220),
+       fk = {};
+     for (const bk of Object.keys(Dk)) fk[Dk[bk]] = bk;
```

#### 14. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L506-L578` → after: `L513-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L513-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L513-L515) · [Before (L506-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L506-L578)

```diff
-         emoteWheel: oQ.i,
-         quickChatWheel: uQ.e,
-         actionWheel: HQ.r
-       },
-       YQ = Object.keys(bQ),
-       xQ = "dead",
-       AQ = QQ => (0, LQ.k)().includes(QQ),
-       tQ = QQ => {
-         const FQ = [(0, mQ.m)(xQ, (() => QQ.hasPlayer() && QQ.isPlayerDead())), (0, mQ.m)("sleeping", (() => AQ(DQ.g))), (0, mQ.m)("turnstile", (() => AQ(vQ.c))), (0, mQ.m)("videoAd", kQ.e), (0, mQ.m)("replay", (() => (0, qQ.f)() || QQ.isReplayMode())), (0, mQ.m)("freeCamera", (( … [truncated]
-           let [FQ, wQ] = QQ;
-           return (0, mQ.m)(FQ, wQ)
-         }))];
-         return () => {
-           for (const QQ of FQ) QQ()
-         }
-       }
- ... (57 more removed lines; see GitHub link above)
+       rgb: {
+         channels: 3,
+         labels: "rgb"
```

#### 15. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L580-L596` → after: `L517-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L517-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L517-L519) · [Before (L580-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L580-L596)

```diff
-       kQ = (QQ, FQ) => FQ ? {
-         move: QQ.rightStick,
-         look: QQ.leftStick
-       } : {
-         move: QQ.leftStick,
-         look: QQ.rightStick
-       },
-       vQ = (QQ, FQ) => {
-         const wQ = (0, LQ.j)(QQ, FQ),
-           qQ = Math.min(1, Math.hypot(wQ.x, wQ.y));
-         return {
-           magnitude: qQ,
-           speed: Math.min(1, qQ / .8),
-           headingOffset: 0 === qQ ? 0 : Math.atan2(wQ.x, -wQ.y),
-           x: wQ.x,
-           y: wQ.y
- ... (1 more removed lines; see GitHub link above)
+       hsl: {
+         channels: 3,
+         labels: "hsl"
```

#### 16. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L598-L623` → after: `L521-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L521-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L521-L523) · [Before (L598-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L598-L623)

```diff
-       mQ = (QQ, FQ) => {
-         let {
-           sprintPressed: wQ,
-           magnitude: LQ,
-           autoSprint: qQ,
-           nowMs: oQ
-         } = FQ;
-         const DQ = wQ ? oQ : QQ.latchedAtMs,
-           kQ = (QQ => {
-             let {
-               running: FQ,
-               magnitude: wQ,
-               sprintPressed: LQ,
-               autoSprint: qQ
-             } = QQ;
-             return !(wQ < .5) && (!!LQ || !!(qQ && wQ >= .9) || FQ)
- ... (10 more removed lines; see GitHub link above)
+       hsv: {
+         channels: 3,
+         labels: "hsv"
```

#### 17. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L625-L660` → after: `L525-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L525-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L525-L571) · [Before (L625-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L625-L660)

```diff
-       uQ = (QQ, FQ, wQ) => wQ && QQ.gyroAiming && "button" === QQ.gyroActivation && QQ.gyroButton !== FQ ? QQ.gyroButton : null,
-       HQ = (QQ, FQ) => FQ ? {
-         ...QQ,
-         isHeld: wQ => wQ !== FQ && QQ.isHeld(wQ),
-         wasPressed: wQ => wQ !== FQ && QQ.wasPressed(wQ),
-         wasReleased: wQ => wQ !== FQ && QQ.wasReleased(wQ),
-         value: wQ => wQ === FQ ? 0 : QQ.value(wQ)
-       } : QQ
-   },
-   39994: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => qQ,
-       g: () => LQ
-     });
-     const LQ = QQ => {
-       let {
- ... (20 more removed lines; see GitHub link above)
+       hwb: {
+         channels: 3,
+         labels: "hwb"
+       },
+       cmyk: {
+         channels: 4,
+         labels: "cmyk"
+       },
+       xyz: {
+         channels: 3,
+         labels: "xyz"
+       },
+       lab: {
+         channels: 3,
+         labels: "lab"
+       },
+ ... (31 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L663-L665` → after: `L574-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L574-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L574-L631) · [Before (L663-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L663-L665)

```diff
-     class qQ {
-       constructor() {
-         this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
+     kk.exports = Sk;
+     for (const bk of Object.keys(Sk)) {
+       if (!("channels" in Sk[bk])) throw new Error("missing channels property: " + bk);
+       if (!("labels" in Sk[bk])) throw new Error("missing channel labels property: " + bk);
+       if (Sk[bk].labels.length !== Sk[bk].channels) throw new Error("channel and label counts mismatch: " + bk);
+       const {
+         channels: kk,
+         labels: ek
+       } = Sk[bk];
+       delete Sk[bk].channels, delete Sk[bk].labels, Object.defineProperty(Sk[bk], "channels", {
+         value: kk
+       }), Object.defineProperty(Sk[bk], "labels", {
+         value: ek
+       })
+     }
+     Sk.rgb.hsl = function(kk) {
+ ... (42 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L667-L668` → after: `L633-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L633-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L633-L690) · [Before (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L667-L668)

```diff
-       lostToPadScreen() {
-         this.regainPending = !0
+       var bk, rk;
+       return ik
+     }, Sk.keyword.rgb = function(kk) {
+       return Dk[kk]
+     }, Sk.rgb.xyz = function(kk) {
+       let ek = kk[0] / 255,
+         ik = kk[1] / 255,
+         Dk = kk[2] / 255;
+       ek = ek > .04045 ? ((ek + .055) / 1.055) ** 2.4 : ek / 12.92, ik = ik > .04045 ? ((ik + .055) / 1.055) ** 2.4 : ik / 12.92, Dk = Dk > .04045 ? ((Dk + .055) / 1.055) ** 2.4 : Dk / 12.92;
+       return [100 * (.4124 * ek + .3576 * ik + .1805 * Dk), 100 * (.2126 * ek + .7152 * ik + .0722 * Dk), 100 * (.0193 * ek + .1192 * ik + .9505 * Dk)]
+     }, Sk.rgb.lab = function(kk) {
+       const ek = Sk.rgb.xyz(kk);
+       let ik = ek[0],
+         Dk = ek[1],
+         fk = ek[2];
+       ik /= 95.047, Dk /= 100, fk /= 108.883, ik = ik > .008856 ? ik ** (1 / 3) : 7.787 * ik + 16 / 116, Dk = Dk > .008856 ? Dk ** (1 / 3) : 7.787 * Dk + 16 / 116, fk = fk > .008856 ? fk ** (1 / 3) : 7.787 * fk + 16 / 116;
+ ... (42 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L670-L677` → after: `L692-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L692-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L692-L795) · [Before (L670-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L670-L677)

```diff
-       filter(QQ, FQ) {
-         this.regainPending && (this.regainPending = !1, this.regainedAtMs = FQ, this.graceEndsMs = FQ + 500);
-         const wQ = FQ < this.graceEndsMs;
-         return wQ && (QQ.sneakPressed || QQ.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, FQ + 300))), QQ.sneakHeld ? wQ && QQ.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
-           sneakHeld: QQ.sneakHeld && !this.ignoringHeld,
-           sneakPressed: QQ.sneakPressed && !this.ignoringHeld,
-           sneakTogglePressed: QQ.sneakTogglePressed && !wQ
-         }
+     }, Sk.hsv.hsl = function(kk) {
+       const ek = kk[0],
+         ik = kk[1] / 100,
+         Dk = kk[2] / 100,
+         fk = Math.max(Dk, .01);
+       let Sk, bk;
+       bk = (2 - ik) * Dk;
+       const rk = (2 - ik) * fk;
+       return Sk = ik * fk, Sk /= rk <= 1 ? rk : 2 - rk, Sk = Sk || 0, bk /= 2, [ek, 100 * Sk, 100 * bk]
+     }, Sk.hwb.rgb = function(kk) {
+       const ek = kk[0] / 360;
+       let ik = kk[1] / 100,
+         Dk = kk[2] / 100;
+       const fk = ik + Dk;
+       let Sk;
+       fk > 1 && (ik /= fk, Dk /= fk);
+ ... (88 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L681-L682` → after: `L903-L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L903-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L903-L937) · [Before (L681-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L681-L682)

```diff
-   39969: (QQ, FQ, wQ) => {
-     wQ(8614)
+   36202: (kk, ek, ik) => {
+     const Dk = ik(36211),
+       fk = ik(36228),
+       Sk = {};
+     Object.keys(Dk).forEach((kk => {
+       Sk[kk] = {}, Object.defineProperty(Sk[kk], "channels", {
+         value: Dk[kk].channels
+       }), Object.defineProperty(Sk[kk], "labels", {
+         value: Dk[kk].labels
+       });
+       const ek = fk(kk);
+       Object.keys(ek).forEach((ik => {
+         const Dk = ek[ik];
+         Sk[kk][ik] = function(kk) {
+           const ek = function() {
+             for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
+ ... (19 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L684-L710` → after: `L939-L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L939-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L939-L958) · [Before (L684-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L684-L710)

```diff
-   39973: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => GQ
-     });
-     var LQ = wQ(22),
-       qQ = wQ(8537),
-       oQ = wQ(8550),
-       DQ = wQ(7959),
-       kQ = wQ(7994),
-       vQ = wQ(7972),
-       mQ = wQ(39978),
-       uQ = wQ(39983),
-       HQ = wQ(8005),
-       bQ = wQ(7950),
-       YQ = wQ(8462),
-       xQ = wQ(8566);
- ... (11 more removed lines; see GitHub link above)
+   36228: (kk, ek, ik) => {
+     const Dk = ik(36211);
+ 
+     function fk(kk) {
+       const ek = function() {
+           const kk = {},
+             ek = Object.keys(Dk);
+           for (let ik = ek.length, Dk = 0; Dk < ik; Dk++) kk[ek[Dk]] = {
+             distance: -1,
+             parent: null
+           };
+           return kk
+         }(),
+         ik = [kk];
+       for (ek[kk].distance = 0; ik.length;) {
+         const kk = ik.pop(),
+ ... (4 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L712-L735` → after: `L960-L1147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L960-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L960-L1147) · [Before (L712-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L712-L735)

```diff
-       }, {
-         isOpen: YQ.e,
-         openButton: () => (0, DQ.g)("chat"),
-         aim: QQ => {
-           LQ.l.GA(YQ.g, QQ)
-         },
-         commit: QQ => {
-           LQ.l.GA(YQ.j, QQ)
-         },
-         close: () => {
-           LQ.l.GA(YQ.h)
-         },
-         keptOpenBy: [uQ.c]
-       }, {
-         isOpen: xQ.r,
-         openButton: () => (0, DQ.g)("actionButton"),
- ... (8 more removed lines; see GitHub link above)
+       }
+       return ek
+     }
+ 
+     function Sk(kk, ek) {
+       return function(ik) {
+         return ek(kk(ik))
+       }
+     }
+ 
+     function bk(kk, ek) {
+       const ik = [ek[kk].parent, kk];
+       let fk = Dk[ek[kk].parent][kk],
+         bk = ek[kk].parent;
+       for (; ek[bk].parent;) ik.unshift(ek[bk].parent), fk = Sk(Dk[ek[bk].parent][bk], fk), bk = ek[bk].parent;
+       return fk.conversion = ik, fk
+ ... (172 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L737-L774` → after: `L1149-L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1149-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/219.js#L1149-L1153) · [Before (L737-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/219.js#L737-L774)

```diff
-       }],
-       tQ = () => {
-         var QQ;
-         return null !== (QQ = AQ.find((QQ => QQ.isOpen()))) && void 0 !== QQ ? QQ : null
-       },
-       eQ = QQ => (0, DQ.M)(QQ.openButton()),
-       MQ = (QQ, FQ) => !(0, bQ.J)(QQ.frame.values, FQ),
-       GQ = () => {
-         let QQ = null,
-           FQ = !1,
-           wQ = !1;
-         return kQ.b.register({
-           name: "wheel",
-           isActive: () => null !== tQ(),
-           peek: () => {
-             const QQ = tQ();
- ... (22 more removed lines; see GitHub link above)
+         return ek
+       };
+     bk.wrap = function(kk) {
+       return function() {
+         return kk(bk(arguments))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/220.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/220.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc)

#### 1. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/220.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/220.js#L4)

```diff
-   38009: (QQ, FQ, wQ) => {
+   36341: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L6-L615` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/220.js#L6-L10) · [Before (L6-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/220.js#L6-L615)

```diff
-       b: () => xQ
-     });
-     var LQ = wQ(201),
-       qQ = wQ(37210);
-     const oQ = 1.2,
-       DQ = {
-         poseRig: "golem",
-         physicsBodyDimensions: {
-           width: .5,
-           height: 2.5
-         },
-         hitBoxDimensions: {
-           width: 2.2,
-           height: 2.8
-         },
-         eyeHeight: 2.3,
- ... (594 more removed lines; see GitHub link above)
+       e: () => be,
+       g: () => me,
+       j: () => xe,
+       n: () => Me,
+       p: () => Ke
```

#### 3. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L618-L773` → after: `L66-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L66-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/220.js#L66-L128) · [Before (L618-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/220.js#L618-L773)

```diff
-       "skyblock:forged:astral-astral-astral": {
-         name: "Heart of the Cosmos",
-         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
-         damageMultiplier: 1.8,
-         cooldownMultiplier: .8,
-         ability: "starfall"
-       },
-       "skyblock:forged:astral-moonstone-sanguine": {
-         name: "Eclipse Edge",
-         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
-         damageMultiplier: 1.7,
-         cooldownMultiplier: .81,
-         ability: "eclipseField"
-       },
-       "skyblock:forged:astral-diamond-moonstone": {
-         name: "Starcutter",
- ... (140 more removed lines; see GitHub link above)
+         gunSemiAutomatic: Dk,
+         gunSubmachineGun: fk,
+         gunShotgun: Pk,
+         gunRifle: bk,
+         gunPistol: Sk,
+         gunMisc: rk,
+         dig: mk,
+         step: Mk,
+         randomBeep: Kk,
+         randomCannon: xk,
+         randomCash: nk,
+         randomExp: Uk,
+         randomFallsmall: Hk,
+         randomItems: wk,
+         randomFire: lk,
+         randomFirecracker: pk,
+ ... (47 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L776-L800` → after: `L131-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L131-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/220.js#L131-L133) · [Before (L776-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/220.js#L776-L800)

```diff
-   },
-   37212: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => DQ
-     });
-     var LQ = wQ(334),
-       qQ = wQ.n(LQ),
-       oQ = wQ(1870);
-     let DQ;
-     var kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ;
-     const tQ = [132, 0, 1, 241, "c", 230, 17, "g", 113, 130, 10, 8, 255, "length", "d", 41, 99, "undefined", void 0, 4, 3, "b", 63, 6, "fromCodePoint", 7, 12, "push", 2, "h", 98, 91, 75, "f", 8191, 88, 13, 14, 1023, 65536, 55296, 56320, 40, 9, "e", 68, 128, "a", 31, 15, 18, 20, 1 … [truncated]
- 
-     function eQ(...QQ) {
-       return QQ[tQ[13]] = tQ[2], typeof kQ[QQ[tQ[1]]] === tQ[17] ? kQ[QQ[tQ[1]]] = function(...QQ) {
-         for (sQ(QQ[tQ[13]] = tQ[2], QQ[tQ[5]] = 'a8lEmDZ}fTM?yQ%cJC$eu<P_z]!,+Rv(Wo{Y7K"Oqgw)29x1>S^:ni[~B*5V/.NkpbAXUI#3sFdr4H`&t06h=|G@Lj;', QQ[-tQ[0]] = "" + (QQ[tQ[1]] || ""), QQ[tQ[4]] = QQ[-tQ[0]].length, QQ[tQ[10]] = [], QQ[tQ[8]] = tQ[1], QQ[-tQ[9]] = tQ[1], QQ[tQ[7]] = - … [truncated]
-           if (QQ[tQ[6]] = QQ[tQ[5]].indexOf(QQ[-tQ[0]][QQ[tQ[3]]]), QQ[tQ[6]] !== -tQ[2])
- ... (9 more removed lines; see GitHub link above)
+     for (const Ue in Se) {
+       const kk = Se[Ue];
+       for (let ek = 0; ek < kk.src.length; ek++) kk.src[ek] = fe.clientSideServerUrls.staticUrl + kk.src[ek]
```

#### 5. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L804` → after: `L138-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L138-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/220.js#L138-L144) · [Before (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/220.js#L804)

```diff
-       return typeof uQ !== tQ[17] && uQ ? (new uQ).decode(new HQ(QQ)) : typeof bQ !== tQ[17] && bQ ? bQ.from(QQ).toString("utf-8") : AQ(QQ)
+       if (Pe[kk]) return ne(Pe[kk]);
+       {
+         const ek = [];
+         for (const ik in Se)
+           for (const Dk in Se[ik].sprite) Dk.startsWith(kk) && ek.push(Dk);
+         return Pe[kk] = ek, ne(ek)
+       }
```

#### 6. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L807-L1015` → after: `L147-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L147-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/220.js#L147-L150) · [Before (L807-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/220.js#L807-L1015)

```diff
-     function GQ() {}
-     sQ(kQ = {}, vQ = ['BNnHch>${yxFy/+_5ULF1rynbTEr4h"z}Uaod>&QJA/W6]uq', 'du#(j*m$*N:tuVT([{+R#dVgky`fe^Y]V%"}3&SgZ', '7ZhR"qGt8*bFQ0E)C3nH)K3g?uI#3#zw%$3S(|1eSkY,4V/_Md|($', "DW}oH*Pz=TZ_~5.Yd_?WL4#xl*LxsVse#>DnK.<Y|p)(uEAC*_j[wta", '$yZ}ir(et*o4P"r]c8', '|#Tvqkzn7[aUqsG{#N|4p& … [truncated]
-       sQ(QQ[tQ[13]] = tQ[1], QQ[tQ[15]] = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }], QQ[tQ[2]] = tQ[18], QQ[tQ[4]] = []);
-       try {
-         sQ(QQ[tQ[2]] = Object, QQ[tQ[4]][tQ[27]]("".__proto__.constructor.name))
-       } catch (vQ) {}
-       QQ: for (QQ[tQ[14]] = tQ[1]; QQ[tQ[14]] < QQ[tQ[15]][tQ[13]]; QQ[tQ[14]]++) try {
-         for (QQ[tQ[2]] = QQ[tQ[15]][QQ[tQ[14]]](), QQ[tQ[16]] = tQ[1]; QQ[tQ[16]] < QQ[tQ[4]][tQ[13]]; QQ[tQ[16]]++)
- ... (193 more removed lines; see GitHub link above)
+     function Me(kk) {
+       const ek = re[kk];
+       if (void 0 === ek) throw new Error(`Invalid sound name ${kk} (not in any sprite sheet)`);
+       return ek
```

#### 7. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1213-L1235` → after: `L153-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L153-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/220.js#L153-L156) · [Before (L1213-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/220.js#L1213-L1235)

```diff
-         function lQ(...QQ) {
-           return QQ[tQ[13]] = tQ[2], typeof kQ[QQ[tQ[1]]] === tQ[17] ? kQ[QQ[tQ[1]]] = zQ(vQ[QQ[tQ[1]]]) : kQ[QQ[tQ[1]]]
-         }
-         let jQ = QQ[tQ[28]][lQ(190) + lQ(191)] * YQ;
-         mQ || (jQ *= QQ[tQ[28]][lQ(tQ[52]) + lQ(193)]);
-         let aQ = QQ[tQ[28]][lQ(194) + lQ(195) + "ss"] * bQ;
-         if (bQ < .3) {
-           function XQ(...QQ) {
-             for (sQ(QQ[tQ[13]] = tQ[2], QQ[tQ[2]] = 'RJXymd?w`gYCq^*tA8S@VxNK~%BW>2,=&)9n!uir(DEj0zF|":;3]b.Op}[{h<_Q1v6$/GT4#7HIU5Ls+feMZPkoalc', QQ[tQ[21]] = "" + (QQ[tQ[1]] || ""), QQ[tQ[56]] = QQ[tQ[21]].length, QQ[tQ[19]] = [], QQ[tQ[44]] = tQ[1], QQ[tQ[54]] = tQ[1], QQ[-tQ[ … [truncated]
-               if (QQ[tQ[43]] = QQ[tQ[2]].indexOf(QQ[tQ[21]][QQ[tQ[100]]]), QQ[tQ[43]] !== -tQ[2])
-                 if (QQ[-tQ[101]] < tQ[1]) QQ[-tQ[101]] = QQ[tQ[43]];
-                 else {
-                   sQ(QQ[-tQ[101]] += QQ[tQ[43]] * tQ[31], QQ[tQ[44]] |= QQ[-tQ[101]] << QQ[tQ[54]], QQ[tQ[54]] += (QQ[-tQ[101]] & tQ[34]) > tQ[35] ? tQ[36] : tQ[37]);
-                   do {
-                     sQ(QQ[tQ[19]].push(QQ[tQ[44]] & tQ[12]), QQ[tQ[44]] >>= tQ[11], QQ[tQ[54]] -= tQ[11])
-                   } while (QQ[tQ[54]] > tQ[25]);
- ... (7 more removed lines; see GitHub link above)
+     function Ke(kk, ek) {
+       if (!(kk in Se)) throw new Error("Invalid spriteTrack name");
+       return ek in Se[kk].sprite
+     }
```

#### 8. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1237-L1250` → after: `L158-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L158-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/220.js#L158-L160) · [Before (L1237-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/220.js#L1237-L1250)

```diff
-           function VQ(...QQ) {
-             sQ(QQ[tQ[13]] = tQ[1], QQ[-tQ[102]] = function(...QQ) {
-               if (sQ(QQ[tQ[13]] = tQ[2], QQ[-tQ[19]] = QQ[tQ[1]].length), QQ[-tQ[19]] < tQ[28]) return tQ[1];
-               if (sQ(QQ[tQ[28]] = Math.max(...QQ[tQ[1]]), QQ[tQ[4]] = Math.min(...QQ[tQ[1]])), QQ[tQ[28]] === QQ[tQ[4]]) return tQ[1];
-               for (sQ(QQ[-tQ[103]] = Array(QQ[-tQ[19]] - tQ[2]).fill(Number.MAX_SAFE_INTEGER), QQ[-tQ[101]] = Array(QQ[-tQ[19]] - tQ[2]).fill(Number.MIN_SAFE_INTEGER), QQ[tQ[33]] = Math.ceil((QQ[tQ[28]] - QQ[tQ[4]]) / (QQ[-tQ[19]] - tQ[2])), QQ[tQ[7]] = tQ[1]), QQ[tQ[29]] = tQ[1] … [truncated]
-               for (sQ(QQ[-tQ[105]] = Number.MIN_SAFE_INTEGER, QQ[tQ[70]] = QQ[tQ[4]]), QQ[tQ[104]] = tQ[1]; QQ[tQ[104]] < QQ[-tQ[19]] - tQ[2]; QQ[tQ[104]]++) QQ[-tQ[103]][QQ[tQ[104]]] === Number.MAX_SAFE_INTEGER && QQ[-tQ[101]][QQ[tQ[104]]] === Number.MIN_SAFE_INTEGER || sQ(QQ[-t … [truncated]
-               return QQ[-tQ[105]] = Math.max(QQ[-tQ[105]], QQ[tQ[28]] - QQ[tQ[70]]), QQ[-tQ[105]]
-             }, console.log(QQ[-tQ[102]]))
-           }
-           fQ(196) in GQ && VQ(), aQ *= bQ
-         }
-         jQ > aQ && (jQ = aQ), sQ(qQ()[lQ(197)](uQ, uQ, jQ), QQ[tQ[19]][lQ(198) + lQ(199)](uQ))
-       }
-       QQ[tQ[19]][FQ(200) + tQ[106]] = QQ[tQ[28]][FQ(201) + FQ(tQ[9]) + tQ[106]] * (mQ ? LQ : DQ)
+     function xe(kk) {
+       if (!(kk in Se)) throw new Error("Invalid spritesheet name");
+       return Se[kk]
```

#### 9. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1302-L1312` → after: `L163-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/220.js#L163-L164) · [Before (L1302-L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/220.js#L1302-L1312)

```diff
-     function vQ(QQ, FQ, wQ, kQ, vQ, mQ, uQ) {
-       if (vQ.speed) return (0, LQ.c)(FQ, wQ, kQ, vQ, mQ, uQ, QQ), void(vQ.ticksToReachMaxIdleFriction = oQ);
-       const HQ = kQ.isOnGround(),
-         bQ = FQ.bloxd.getSyncedClientOptions(FQ.bloxd.getPlayerReader(wQ)),
-         YQ = null === bQ ? FQ.bloxd.getClientPredictedOption(wQ, "groundFrictionScale") : bQ.groundFrictionScale,
-         xQ = null === bQ ? FQ.bloxd.getClientPredictedOption(wQ, "airFrictionScale") : bQ.airFrictionScale,
-         AQ = HQ ? YQ : xQ,
-         tQ = Math.max(DQ, AQ),
-         eQ = vQ.ticksToReachMaxIdleFriction / oQ,
-         MQ = (0, qQ.x)(tQ, AQ, eQ);
-       mQ.friction = QQ.standingFriction * ((null === bQ ? FQ.bloxd.getClientPredictedOption(wQ, "airMomentumConservation") : bQ.airMomentumConservation) ? MQ : AQ), vQ.ticksToReachMaxIdleFriction > 0 && vQ.ticksToReachMaxIdleFriction--
+     function ne(kk) {
+       return kk[Math.floor(Math.random() * kk.length)]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/221.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/221.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928)

#### 1. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L4-L10` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/221.js#L4-L7) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/221.js#L4-L10)

```diff
-   39193: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       getBlockFaces: () => bQ,
-       getIngameIconUrl: () => AQ,
-       getItemIconUrl: () => xQ,
-       getItemTextureUrl: () => YQ,
-       getParticleTextureUrl: () => tQ
+   39200: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Dk,
+       d: () => fk
```

#### 2. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L12-L17` → after: `L9-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L9-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/221.js#L9-L568) · [Before (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/221.js#L12-L17)

```diff
-     var LQ = wQ(4308),
-       qQ = wQ(36646),
-       oQ = wQ(9192),
-       DQ = wQ(3045);
-     const kQ = new Set,
-       vQ = new Set;
+     const Dk = "The world isn't loaded, so no blocks can be seen.",
+       fk = "The world isn't loaded, so nothing in it can be seen."
+   },
+   38676: (kk, ek, ik) => {
+     function Dk(kk) {
+       return !(!kk.lobbyLeaderboardInfo && !kk.lobbyManage)
+     }
+     ik.d(ek, {
+       c: () => Dk
+     })
+   },
+   36391: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => Sk,
+       d: () => fk
+     });
+ ... (544 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L21-L24` → after: `L572-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L572-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/221.js#L572-L796) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/221.js#L21-L24)

```diff
-       kQ.has(QQ) || (kQ.add(QQ), vQ.add(QQ), mQ ??= setTimeout((() => {
-         console.warn(`Docs gallery: no default texture for ${vQ.size} names`, [...vQ]), vQ.clear(), mQ = null
-       }), 1e3))
-     }
+       const ek = new Map,
+         ik = ik => {
+           if ("string" !== typeof ik) return;
+           let Dk = ek.get(ik);
+           return void 0 === Dk && (Dk = kk(ik), void 0 !== Dk && ek.set(ik, Dk)), Dk
+         };
+       return new Proxy({}, {
+         get: (kk, ek) => ik(ek),
+         has: (kk, ek) => void 0 !== ik(ek)
+       })
+     }
+ 
+     function pk(kk) {
+       const ek = (0, rk.e)(kk);
+       return void 0 !== ek && (0, rk.h)(ek) === kk
+     }
+ ... (209 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L28-L67` → after: `L800-L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L800-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/221.js#L800-L823) · [Before (L28-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/221.js#L28-L67)

```diff
-         return (0, oQ.getDefaultTexture)(QQ, FQ).url
-       } catch {
-         return uQ(QQ), null
-       }
-     }
- 
-     function bQ(QQ) {
-       var FQ, wQ;
-       const oQ = qQ.q[QQ];
-       if (!oQ || oQ.itemTexture || !oQ.textureInfo) return null;
-       const {
-         textureInfo: kQ,
-         texturePerSide: vQ
-       } = oQ, mQ = QQ => {
-         return "string" === typeof(FQ = vQ && Array.isArray(kQ) ? kQ[vQ[QQ]] : kQ) ? HQ(FQ, DQ.i.BLOCK) : FQ && "object" === typeof FQ && "animTextures" in FQ ? HQ((0, LQ.q)(FQ), DQ.i.BLOCK) : null;
-         var FQ
- ... (24 more removed lines; see GitHub link above)
+         kk(ek)
+       } catch (ik) {
+         console.error("[bloxd-wasm-client] the game chunk's listener failed", ik)
+       }
+     }
+ 
+     function Mk() {
+       return Pk
+     }
+ 
+     function Kk(kk) {
+       rk.push(kk), null !== Pk && mk(kk, Pk)
+     }
+ 
+     function xk(kk) {
+       return fk ??= Promise.all([ik.e(72), ik.e(96), ik.e(219), ik.e(77), ik.e(220), ik.e(200), ik.e(95), ik.e(238), ik.e(265), ik.e(198), ik.e(267), ik.e(191), ik.e(197), ik.e(193), ik.e(141), ik.e(87), ik.e(121), ik.e(243), ik.e(56)]).then((() => ik(42177))).then((ek => {
+ ... (8 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L69-L236` → after: `L825-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L825-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/221.js#L825-L855) · [Before (L69-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/221.js#L69-L236)

```diff
-         return wQ(3176)(`./${QQ}.png`)
-       } catch {
-         return uQ(QQ), null
-       }
-     }
-   },
-   36672: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => LQ
-     });
-     const LQ = {
-       "skyblock:forged:astral-astral-astral": {
-         name: "Heart of the Cosmos",
-         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
-         damageMultiplier: 1.8,
-         cooldownMultiplier: .8,
- ... (152 more removed lines; see GitHub link above)
+         const ik = await xk(kk);
+         await ik.loadClientGame(ek)
+       } catch (ik) {
+         throw new Dk(ik)
+       }
+     }
+ 
+     function Uk(kk, ek) {
+       Sk = {
+         running: kk,
+         shell: ek
+       }
+     }
+ 
+     function Hk() {
+       return bk
+ ... (15 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/222.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/222.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783)

#### 1. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L4` → after: `L4-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L4-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/222.js#L4-L523) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/222.js#L4)

```diff
-   36705: (QQ, FQ, wQ) => {
+   36523: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => Lk,
+       e: () => Yk
+     });
+     var Dk = ik(4210),
+       fk = ik(1406),
+       Sk = ik(60),
+       bk = ik(6328),
+       rk = ik(4197),
+       Pk = ik(1273),
+       mk = ik(1893),
+       Mk = ik(1858),
+       Kk = ik(1410),
+       xk = ik(1172),
+       nk = ik(36528),
+ ... (504 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L7-L8` → after: `L526-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L526-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/222.js#L526-L532) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/222.js#L7-L8)

```diff
-       d: () => LQ,
-       g: () => qQ
+       e: () => Pk,
+       i: () => rk,
+       m: () => Mk,
+       p: () => bk,
+       r: () => Sk,
+       t: () => mk,
+       x: () => Kk
```

#### 3. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L10-L13` → after: `L534-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L534-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/222.js#L534-L632) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/222.js#L10-L13)

```diff
-     const LQ = 1 / 2.2,
-       qQ = 2.2;
-     Math.sqrt(5);
-     let oQ = .001
+     var Dk = ik(7984);
+     class fk {
+       constructor() {
+         this.fullTiltSinceMs = null
+       }
+       update(kk, ek, ik) {
+         const fk = (0, Dk.j)(kk, ek.lookDeadzone);
+         if (Math.hypot(fk.x, fk.y) < .9 || Math.abs(fk.x) < Math.abs(fk.y)) return this.fullTiltSinceMs = null, 1;
+         null === this.fullTiltSinceMs && (this.fullTiltSinceMs = ik);
+         const Sk = (bk = ek.lookSensitivityX, Math.min(1, 100 / bk));
+         var bk;
+         return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (ik - this.fullTiltSinceMs - 250 * Sk) / (200 * Sk)))
+       }
+       reset() {
+         this.fullTiltSinceMs = null
+       }
+ ... (83 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L15-L215` → after: `L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/222.js#L634) · [Before (L15-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/222.js#L15-L215)

```diff
-   36729: (QQ, FQ, wQ) => {
-     function LQ(QQ) {
-       return parseInt(QQ.toString().replace(/\W/g, ""))
-     }
- 
-     function qQ(QQ, FQ) {
-       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(QQ - FQ) <= wQ
-     }
- 
-     function oQ(QQ, FQ, wQ) {
-       let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
-       return QQ < FQ - LQ || QQ > wQ + LQ
-     }
- 
-     function DQ(QQ, FQ) {
- ... (185 more removed lines; see GitHub link above)
+   40152: (kk, ek, ik) => {
```

#### 5. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L220-L223` → after: `L639-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L639-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/222.js#L639-L678) · [Before (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/222.js#L220-L223)

```diff
-     const LQ = {};
- 
-     function qQ(QQ, FQ) {
-       LQ[QQ] = FQ
+     const Dk = kk => {
+       let {
+         mode: ek,
+         sneakHeld: ik,
+         sneakPressed: Dk,
+         sneakTogglePressed: fk,
+         descending: Sk,
+         canCrouch: bk,
+         toggled: rk
+       } = kk;
+       return bk ? Sk ? {
+         crouchHeld: ik,
+         toggled: !1
+       } : "hold" === ek ? {
+         crouchHeld: ik,
+         toggled: fk ? !rk : rk
+ ... (24 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L225-L228` → after: `L680-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L680-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/222.js#L680-L775) · [Before (L225-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/222.js#L225-L228)

```diff
- 
-     function oQ(QQ) {
-       return LQ[QQ]
-     }
+   },
+   40123: (kk, ek, ik) => {
+     ik(8683)
+   },
+   40130: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => yk
+     });
+     var Dk = ik(26),
+       fk = ik(8624),
+       Sk = ik(8637),
+       bk = ik(7994),
+       rk = ik(8024),
+       Pk = ik(8006),
+       mk = ik(40133),
+       Mk = ik(40138),
+ ... (80 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/223.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/223.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e)

#### 1. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L3)

```diff
- export const ids = [223, 230];
+ export const ids = [223];
```

#### 2. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L5-L25` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L4-L6) · [Before (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L5-L25)

```diff
-   37846: QQ => {
-     QQ.exports = function(QQ) {
-       return null != QQ && null != QQ.constructor && "function" === typeof QQ.constructor.isBuffer && QQ.constructor.isBuffer(QQ)
-     }
-   },
-   37824: (QQ, FQ, wQ) => {
-     var LQ = wQ(37832),
-       qQ = wQ(37838),
-       oQ = wQ(37846);
-     wQ.g.__TYPEDARRAY_POOL || (wQ.g.__TYPEDARRAY_POOL = {
-       UINT8: qQ([32, 0]),
-       UINT16: qQ([32, 0]),
-       UINT32: qQ([32, 0]),
-       INT8: qQ([32, 0]),
-       INT16: qQ([32, 0]),
-       INT32: qQ([32, 0]),
- ... (5 more removed lines; see GitHub link above)
+   38057: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => Uk
```

#### 3. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L27-L243` → after: `L8-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L8-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L8-L605) · [Before (L27-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L27-L243)

```diff
-     var DQ = "undefined" !== typeof Uint8ClampedArray,
-       kQ = wQ.g.__TYPEDARRAY_POOL;
-     kQ.UINT8C || (kQ.UINT8C = qQ([32, 0])), kQ.BUFFER || (kQ.BUFFER = qQ([32, 0]));
-     var vQ = kQ.DATA,
-       mQ = kQ.BUFFER;
- 
-     function uQ(QQ) {
-       if (QQ) {
-         var FQ = QQ.length || QQ.byteLength,
-           wQ = LQ.log2(FQ);
-         vQ[wQ].push(QQ)
-       }
-     }
- 
-     function HQ(QQ) {
-       QQ = LQ.nextPow2(QQ);
- ... (201 more removed lines; see GitHub link above)
+     var Dk = ik(189),
+       fk = ik(37253);
+     const Sk = 1.2,
+       bk = {
+         poseRig: "golem",
+         physicsBodyDimensions: {
+           width: .5,
+           height: 2.5
+         },
+         hitBoxDimensions: {
+           width: 2.2,
+           height: 2.8
+         },
+         eyeHeight: 2.3,
+         rideHeight: 2.3,
+         Or: .5,
+ ... (582 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L245-L263` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/223.js#L607) · [Before (L245-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/223.js#L245-L263)

```diff
-       }
-     }
- 
-     function uQ(QQ, FQ) {
-       LQ.push([QQ, FQ])
-     }
-   },
-   37860: (QQ, FQ) => {
-     var wQ = "d",
-       LQ = "ax",
-       qQ = "fp",
-       oQ = "es",
-       DQ = "rs",
-       kQ = "re",
-       vQ = "rb",
-       mQ = "bs",
- ... (3 more removed lines; see GitHub link above)
+       };
```
