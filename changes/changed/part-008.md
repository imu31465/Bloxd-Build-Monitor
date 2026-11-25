# Changed — Bundle Modifications Report (Part 008 / 056)

- **Updated at**: `2026-11-26T01:33 JST`
- **Part**: `8 / 56` (**312** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 007](part-007.md) · [Part 009 →](part-009.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/201.js` (wp3j0a.a13381cf → fo1voe.f743fbcf · continued)

- **File**: `bundles/bloxd.io/chunks/js/201.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9)

#### 10. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L119-L120` → after: `L1038-L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L1038-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L1038-L1178) · [Before (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L119-L120)

```diff
-     function AG(GG) {
-       return XG(GG)
+     function pM() {
+       let MM = SM[aM++];
+       if (MM < 160) {
+         if (MM < 128) {
+           if (MM < 64) return MM;
+           {
+             let rM = nM[63 & MM] || JM.getStructures && kM()[63 & MM];
+             return rM ? (rM.read || (rM.read = sM(rM, 63 & MM)), rM.read()) : MM
+           }
+         }
+         if (MM < 144) {
+           if (MM -= 128, JM.mapsAsObjects) {
+             let rM = {};
+             for (let iM = 0; iM < MM; iM++) {
+               let MM = VM();
+               "__proto__" === MM && (MM = "__proto_"), rM[MM] = pM()
+ ... (125 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L124` → after: `L1200-L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R1200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L1200-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L1200-L1221) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L124)

```diff
-       return uG(GG)
+       let rM;
+       if (MM < 16 && (rM = XM(MM))) return rM;
+       if (MM > 64 && OM) return OM.decode(SM.subarray(aM, aM += MM));
+       const iM = aM + MM,
+         jM = [];
+       for (rM = ""; aM < iM;) {
+         const MM = SM[aM++];
+         if (0 === (128 & MM)) jM.push(MM);
+         else if (192 === (224 & MM)) {
+           const rM = 63 & SM[aM++];
+           jM.push((31 & MM) << 6 | rM)
+         } else if (224 === (240 & MM)) {
+           const rM = 63 & SM[aM++],
+             iM = 63 & SM[aM++];
+           jM.push((31 & MM) << 12 | rM << 6 | iM)
+         } else if (240 === (248 & MM)) {
+ ... (6 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L128` → after: `L1225-L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L1225-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L1225-L1227) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L128)

```diff
-       return iG(GG)
+       let rM = new Array(MM);
+       for (let iM = 0; iM < MM; iM++) rM[iM] = pM();
+       return JM.freezeData ? Object.freeze(rM) : rM
```

#### 13. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L132` → after: `L1231-L1242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L1231-L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L1231-L1242) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L132)

```diff
-       return CG(GG)
+       if (JM.mapsAsObjects) {
+         let rM = {};
+         for (let iM = 0; iM < MM; iM++) {
+           let MM = VM();
+           "__proto__" === MM && (MM = "__proto_"), rM[MM] = pM()
+         }
+         return rM
+       } {
+         let rM = new Map;
+         for (let iM = 0; iM < MM; iM++) rM.set(pM(), pM());
+         return rM
+       }
```

#### 14. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L136` → after: `L1247-L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R1247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L1247-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L1247-L1254) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L136)

```diff
-       return WG(GG)
+       let rM = aM,
+         iM = new Array(MM);
+       for (let OM = 0; OM < MM; OM++) {
+         const MM = SM[aM++];
+         if ((128 & MM) > 0) return void(aM = rM);
+         iM[OM] = MM
+       }
+       return FM.apply(String, iM)
```

#### 15. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L144` → after: `L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R1358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L1358) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L144)

```diff
-       return 0 !== FG(GG)
+       return JM.copyBuffers ? Uint8Array.prototype.slice.call(SM, aM, aM += MM) : SM.subarray(aM, aM += MM)
```

#### 16. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L148` → after: `L1362-L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L1362-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L1362-L1374) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L148)

```diff
-       return vG(GG)
+       let rM = SM[aM++];
+       if (lM[rM]) {
+         let iM;
+         return lM[rM](SM.subarray(aM, iM = aM += MM), (MM => {
+           aM = MM;
+           try {
+             return pM()
+           } finally {
+             aM = iM
+           }
+         }))
+       }
+       throw new Error("Unknown extension type " + rM)
```

#### 17. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L151-L152` → after: `L1378-L1406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R1378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L1378-L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L1378-L1406) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L151-L152)

```diff
-     function HG(GG) {
-       return 0 !== IG(GG)
+     function VM() {
+       let MM = SM[aM++];
+       if (!(MM >= 160 && MM < 192)) return aM--, cM(pM());
+       if (MM -= 160, yM >= aM) return QM.slice(aM - dM, (aM += MM) - dM);
+       if (!(0 == yM && jM < 180)) return ZM(MM);
+       let rM, iM = 4095 & (MM << 5 ^ (MM > 1 ? mM.getUint16(aM) : MM > 0 ? SM[aM] : 0)),
+         OM = TM[iM],
+         PM = aM,
+         nM = aM + MM - 3,
+         zM = 0;
+       if (OM && OM.bytes == MM) {
+         for (; PM < nM;) {
+           if (rM = mM.getUint32(PM), rM != OM[zM++]) {
+             PM = 1879048192;
+             break
+           }
+ ... (13 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L156-L159` → after: `L1410-L1414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R1410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L1410-L1414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L1410-L1414) · [Before (L156-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L156-L159)

```diff
-       const bG = aG(GG);
-       if (void 0 === bG || bG.startsWith(VG.l)) return null === bG || void 0 === bG ? void 0 : bG.slice(VG.l.length);
-       const ZG = (0, YG.f)(GG);
-       return void 0 === ZG ? void 0 : `${ZG}${VG.o}${bG}`
+       if ("string" === typeof MM) return MM;
+       if ("number" === typeof MM || "boolean" === typeof MM || "bigint" === typeof MM) return MM.toString();
+       if (null == MM) return MM + "";
+       if (JM.allowArraysInMapKeys && Array.isArray(MM) && MM.flat().every((MM => ["string", "number", "boolean", "bigint"].includes(typeof MM)))) return MM.flat().toString();
+       throw new Error("Invalid property type for record: " + typeof MM)
```

#### 19. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L163-L164` → after: `L1477-L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L1477-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L1477-L1493) · [Before (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L163-L164)

```diff
-       var bG;
-       return null !== (bG = cG(GG)) && void 0 !== bG ? bG : pG
+       bM && bM();
+       let rM = jM,
+         iM = aM,
+         OM = hM,
+         PM = dM,
+         lM = yM,
+         EM = QM,
+         UM = HM,
+         GM = LM,
+         CM = zM,
+         eM = new Uint8Array(SM.slice(0, jM)),
+         tM = nM,
+         gM = nM.slice(0, nM.length),
+         uM = JM,
+         RM = wM,
+         pM = MM();
+ ... (1 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L169-L176` → after: `L1497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R1497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L1497) · [Before (L169-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L169-L176)

```diff
-       if (null === NG) {
-         const GG = [],
-           bG = new VG.p(SG);
-         let ZG = 0;
-         for (; !bG.done;) ZG += (0, VG.F)(bG.next()), GG.push(ZG);
-         NG = Object.freeze(GG)
-       }
-       return NG
+       SM = null, LM = null, nM = null
```

#### 21. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L180` → after: `L1523-L1904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R1523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L1523-L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L1523-L1904) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L180)

```diff
-       return lG(GG)
+       yr[0] = MM;
+       let rM = Pr[(127 & lr[3]) << 1 | lr[2] >> 7];
+       return (rM * MM + (MM > 0 ? .5 : -.5) | 0) / rM
+     }
+     try {
+       hr = new TextEncoder
+     } catch (Oi) {}
+     const Ur = "undefined" !== typeof Buffer,
+       Gr = Ur ? function(MM) {
+         return Buffer.allocUnsafeSlow(MM)
+       } : Uint8Array,
+       Cr = Ur ? Buffer : Uint8Array,
+       er = Ur ? 4294967296 : 2144337920;
+     let br, wr, tr, gr, ur, Rr = 0,
+       pr = null;
+     const Wr = /[\u0080-\uFFFF]/,
+ ... (366 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L184-L185` → after: `L1908-L1930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R1908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L1908-L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L1908-L1930) · [Before (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L184-L185)

```diff
-       var ZG;
-       return 0 !== ((null !== (ZG = jG(GG)) && void 0 !== ZG ? ZG : 0) & bG)
+       let iM = MM.byteLength;
+       var OM, SM;
+       if (iM < 256) {
+         var {
+           target: OM,
+           position: SM
+         } = rM(iM + 2);
+         OM[SM++] = 196, OM[SM++] = iM
+       } else if (iM < 65536) {
+         var {
+           target: OM,
+           position: SM
+         } = rM(iM + 3);
+         OM[SM++] = 197, OM[SM++] = iM >> 8, OM[SM++] = 255 & iM
+       } else {
+         var {
+ ... (7 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L188-L189` → after: `L1933-L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R1933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L1933-L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L1933-L1954) · [Before (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L188-L189)

```diff
-     function Gb(GG) {
-       return BG(GG, VG.e.OnlyInSearch)
+     function or(MM, rM, iM, OM) {
+       let SM = MM.length;
+       switch (SM) {
+         case 1:
+           rM[iM++] = 212;
+           break;
+         case 2:
+           rM[iM++] = 213;
+           break;
+         case 4:
+           rM[iM++] = 214;
+           break;
+         case 8:
+           rM[iM++] = 215;
+           break;
+         case 16:
+ ... (6 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L192-L193` → after: `L1957-L1962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L1957-L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L1957-L1962) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L192-L193)

```diff
-     function bb(GG) {
-       return BG(GG, VG.e.OnlyInCategory)
+     function fr(MM, rM, iM) {
+       if (pr.length > 0) {
+         tr.setUint32(pr.position + MM, Rr + iM - pr.position - MM), pr.stringsPosition = Rr - MM;
+         let OM = pr;
+         pr = null, rM(OM[0]), rM(OM[1])
+       }
```

#### 25. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L197` → after: `L1966-L1979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L1966-L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L1966-L1979) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L197)

```diff
-       return BG(GG, VG.e.DevOnly)
+       if (MM.Class) {
+         if (!MM.pack && !MM.write) throw new Error("Extension has no pack or write function");
+         if (MM.pack && !MM.type) throw new Error("Extension has no type (numeric code to identify the extension)");
+         dr.unshift(MM.Class), Jr.unshift(MM)
+       }! function(MM) {
+         MM.unpack ? lM[MM.type] = MM.unpack : lM[MM.type] = MM
+       }(MM)
+     }
+ 
+     function Nr(MM, rM) {
+       return MM.isCompatible = MM => {
+         let iM = !MM || (rM.lastNamedStructuresLength || 0) === MM.length;
+         return iM || rM._mergeStructures(MM), iM
+       }, MM
```

#### 26. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L201` → after: `L2179-L2197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R2179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L2179-L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L2179-L2197) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L201)

```diff
-       return !BG(GG, VG.e.HiddenByDefault) && void 0
+       Object.defineProperty(MM, Symbol.metadata, {
+         value: void 0,
+         writable: !0,
+         configurable: !0,
+         enumerable: !1
+       })
+     }! function(MM) {
+       MM[MM.ADD = 128] = "ADD", MM[MM.REPLACE = 0] = "REPLACE", MM[MM.DELETE = 64] = "DELETE", MM[MM.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", MM[MM.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", MM[MM.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", MM[MM.CLEAR = 10] = "CLEAR", MM[MM.REVERSE = … [truncated]
+     }(SM || (SM = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
+     const aM = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
+     if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
+       const MM = "colyseus.symbolRegistry",
+         rM = aM[MM] || (aM[MM] = Object.create(null));
+       Symbol.for = function(MM) {
+         return rM[MM] || (rM[MM] = Symbol(MM))
+       }, Symbol.keyFor = function(MM) {
+ ... (3 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L204-L207` → after: `L2242-L2243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R2242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L2242-L2243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L2242-L2243) · [Before (L204-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L204-L207)

```diff
-     function Sb(GG, bG, ZG, wG) {
-       var SG;
-       const LG = null !== (SG = jG(GG)) && void 0 !== SG ? SG : 0;
-       return 0 !== (LG & VG.e.DisabledInPublicLobbies) && bG || 0 !== (LG & VG.e.DisabledInProduction) && !0 || !ZG || !wG && 0 !== (LG & VG.e.DevOnly)
+     function FM(MM, rM, iM) {
+       for (var OM = 0, SM = 0, jM = rM.length; SM < jM; SM++)(OM = rM.charCodeAt(SM)) < 128 ? MM[iM.offset++] = OM : OM < 2048 ? (MM[iM.offset] = 192 | OM >> 6, MM[iM.offset + 1] = 128 | 63 & OM, iM.offset += 2) : OM < 55296 || OM >= 57344 ? (MM[iM.offset] = 224 | OM >> 12, MM[iM … [truncated]
```

#### 28. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L211-L213` → after: `L2246-L3496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L2246-L3496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L2246-L3496) · [Before (L211-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L211-L213)

```diff
-     function yb() {
-       if (null === Lb) {
-         const GG = yG.split(VG.o),
+     function BM(MM, rM, iM) {
+       MM[iM.offset++] = 255 & rM
+     }
+ 
+     function XM(MM, rM, iM) {
+       MM[iM.offset++] = 255 & rM, MM[iM.offset++] = rM >> 8 & 255
+     }
+ 
+     function IM(MM, rM, iM) {
+       MM[iM.offset++] = 255 & rM, MM[iM.offset++] = rM >> 8 & 255
+     }
+ 
+     function KM(MM, rM, iM) {
+       MM[iM.offset++] = 255 & rM, MM[iM.offset++] = rM >> 8 & 255, MM[iM.offset++] = rM >> 16 & 255, MM[iM.offset++] = rM >> 24 & 255
+     }
+ 
+ ... (1235 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L215-L221` → after: `L3498-L6339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R3498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L3498-L6339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L3498-L6339) · [Before (L215-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L215-L221)

```diff
-           ZG = new VG.p(LG);
-         let wG = 0,
-           SG = 0;
-         for (; !ZG.done;) {
-           wG += (0, VG.F)(ZG.next());
-           const LG = ZG.next();
-           bG.set(wG, Object.freeze(GG.slice(SG, SG + LG))), SG += LG
+           jM = !this.paused && !this.isFullStateOnly;
+         if (MM > 0)
+           for (const [SM, aM] of iM) SM < MM && OM.set(SM, aM);
+         if (jM)
+           for (let aM = 0; aM < rM; aM++) OM.set(MM + aM, SM.ADD);
+         for (const [SM, aM] of iM) SM >= MM && OM.set(SM + rM, aM);
+         this.collDirty = OM, jM && this.root?.enqueueChangeTree(this)
+       }
+       removeAt(MM, rM) {
+         if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
+         const iM = this.collDirty,
+           OM = MM + rM;
+         let SM = !1;
+         for (const aM of iM.keys())
+           if (aM >= OM) {
+             SM = !0;
+ ... (2826 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L223` → after: `L6341-L7669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R6341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L6341-L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/201.js#L6341-L7669) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/201.js#L223)

```diff
-         Lb = bG
+         return SM || jM || !this._isStreamBroadcastMode || this._emitStreamBroadcast(iM, MM), MM.offset > iM.byteLength ? (iM = this._resizeBuffer(iM, MM.offset), MM.offset = OM, this._encodeChannel(MM, rM, iM, OM, SM)) : iM.subarray(0, MM.offset)
+       }
+       encodeFullSync(MM, rM, iM, OM) {
+         let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : MM.offset;
+         this.root.pendingFilterRefresh.length > 0 && ai(this.root);
+         const jM = void 0 !== OM,
+           aM = this.state[JM],
+           PM = this._encodeCtx;
+         return PM.self = this, PM.buffer = rM, PM.it = MM, PM.view = OM, PM.isEncodeAll = !0, PM.hasView = jM, PM.emitFiltered = iM, PM.gen = ++this._fullSyncGen, PM.initialOffset = SM, PM.rootChangeTree = aM, AO(PM, aM), MM.offset > rM.byteLength ? (rM = this._resizeBuffer(rM, M … [truncated]
+       }
+       _resizeBuffer(MM, rM) {
+         const iM = Math.ceil(rM / BO.BUFFER_SIZE) * BO.BUFFER_SIZE,
+           OM = new Uint8Array(iM);
+         return OM.set(MM), MM === this.sharedBuffer && (this.sharedBuffer = OM), OM
+       }
+       encodeAll() {
+ ... (1313 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/202.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/202.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9)

#### 1. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L4-L88` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/202.js#L4) · [Before (L4-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/202.js#L4-L88)

```diff
-   41956: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => LG
-     });
-     var wG = ZG(51),
-       SG = ZG(2732);
- 
-     function LG(GG, bG, ZG) {
-       const LG = (0, wG.useRef)(null),
-         {
-           width: yG,
-           height: kG
-         } = (0, SG.d)(GG);
-       (0, wG.useEffect)((() => {
-         const ZG = bG(GG.current);
-         return LG.current = ZG, () => {
- ... (69 more removed lines; see GitHub link above)
+   9918: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L91-L108` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/202.js#L7) · [Before (L91-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/202.js#L91-L108)

```diff
-       d: () => LG
-     });
-     const wG = new WeakMap;
- 
-     function SG(GG, bG) {
-       return wG.set(GG, bG), GG
-     }
- 
-     function LG(GG) {
-       var bG;
-       return null !== (bG = wG.get(GG)) && void 0 !== bG ? bG : null
-     }
-   },
-   34519: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => yG,
- ... (2 more removed lines; see GitHub link above)
+       e: () => jM
```

#### 3. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L110-L332` → after: `L9-L1403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L9-L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/202.js#L9-L1403) · [Before (L110-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/202.js#L110-L332)

```diff
-     var wG = ZG(1509);
- 
-     function SG(GG) {
-       var bG;
-       return {
-         ...yG.store,
-         yaw: yG.store.yaw + (null !== (bG = wG.d[GG].previewYaw) && void 0 !== bG ? bG : 0)
-       }
-     }
-     const LG = {
-         yaw: .61 * Math.PI,
-         pitch: Math.PI / 2.05,
-         radius: 30,
-         target: [0, 0, 0]
-       },
-       yG = {
- ... (207 more removed lines; see GitHub link above)
+     var OM = iM(9863);
+     const SM = "Air",
+       jM = Object.freeze(new OM.c(SM, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
+   },
+   27689: MM => {
+     MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
+   },
+   33840: MM => {
+     MM.exports = "data:model/gltf-binary;base64,Z2xURgIAAADsSwAAtDQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjM2fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlw … [truncated]
+   },
+   33842: MM => {
+     MM.exports = "data:model/gltf-binary;base64,Z2xURgIAAABkWAAACBEAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiZXh0cmFzIjp7ImJsb3hkQnVpbGRIYXNoIjoiZDk5YzM4OTQifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyNSwi … [truncated]
+   },
+   27694: MM => {
+     MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
+   },
+ ... (1379 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/203.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/203.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd)

#### 1. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L4-L14` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/203.js#L4-L5) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/203.js#L4-L14)

```diff
-   41948: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       MobPreview: () => pG
-     });
-     var wG = ZG(51),
-       SG = ZG(1006),
-       LG = ZG.n(SG),
-       yG = ZG(41956),
-       kG = ZG(34515),
-       UG = ZG(41960),
-       YG = ZG(1067);
+   38710: (MM, rM, iM) => {
+     var OM = iM(38716);
```

#### 2. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L17-L38` → after: `L8-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L8-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/203.js#L8-L318) · [Before (L17-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/203.js#L17-L38)

```diff
-       return kG.d.openMob(GG)
-     }
-     const pG = (0, wG.memo)((function(GG) {
-       let {
-         mobType: bG,
-         variation: ZG = null,
-         animation: SG = UG.g,
-         className: kG
-       } = GG;
-       const pG = (0, wG.useRef)(null),
-         fG = (0, wG.useMemo)((() => ({
-           mobType: bG,
-           variation: ZG,
-           animation: SG
-         })), [bG, ZG, SG]);
-       return (0, yG.b)(pG, VG, fG), (0, YG.jsx)("div", {
- ... (6 more removed lines; see GitHub link above)
+       for (var rM, iM, SM = 0, jM = MM.length, aM = 0; aM < MM.length;) {
+         for (rM = MM[aM], iM = 0; aM < jM && MM[aM] === rM;) ++aM, ++iM;
+         SM += OM.log2(iM) / 7 | 0, SM += OM.log2(rM >>> 0) / 7 | 0, SM += 2
+       }
+       return SM
+     }
+     rM.size = SM, rM.encode = function(MM, rM) {
+       rM || (rM = new Uint8Array(SM(MM)));
+       for (var iM, OM, jM = 0, aM = rM.length, PM = 0; PM < MM.length;) {
+         for (iM = MM[PM], OM = 0; PM < MM.length && MM[PM] === iM;) ++PM, ++OM;
+         for (; jM < aM && OM >= 128;) rM[jM++] = 128 + (127 & OM), OM >>>= 7;
+         if (jM >= aM) throw new Error("RLE buffer overflow");
+         for (rM[jM++] = OM, iM >>>= 0; jM < aM && iM >= 128;) rM[jM++] = 128 + (127 & iM), iM >>>= 7;
+         if (jM >= aM) throw new Error("RLE buffer overflow");
+         rM[jM++] = iM
+       }
+ ... (295 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L42-L63` → after: `L322-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L322-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/203.js#L322-L330) · [Before (L42-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/203.js#L42-L63)

```diff
-     var wG = ZG(51),
-       SG = ZG(2732);
- 
-     function LG(GG, bG, ZG) {
-       const LG = (0, wG.useRef)(null),
-         {
-           width: yG,
-           height: kG
-         } = (0, SG.d)(GG);
-       (0, wG.useEffect)((() => {
-         const ZG = bG(GG.current);
-         return LG.current = ZG, () => {
-           ZG.close(), LG.current = null
-         }
-       }), [GG, bG]), (0, wG.useEffect)((() => {
-         yG <= 0 || kG <= 0 || LG.current.resize(yG, kG)
- ... (6 more removed lines; see GitHub link above)
+     var OM = iM(40551);
+     async function SM() {
+       const {
+         averageColors: MM
+       } = await iM.e(231).then((() => iM(35131)));
+       return new OM.c(MM)
+     }
+   },
+   40551: (MM, rM, iM) => {
```

#### 4. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L69-L136` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/203.js#L335) · [Before (L69-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/203.js#L69-L136)

```diff
-     var wG = ZG(37503),
-       SG = ZG(39061);
- 
-     function LG(GG, bG) {
-       let [ZG, wG, SG] = GG;
-       return [0, .5, 1].map((GG => ({
-         timeFraction: GG,
-         rotation: {
-           Bw: "catmull-rom-spline",
-           point: [ZG, wG, SG + (.5 === GG ? bG : 0)]
-         }
-       })))
-     }
- 
-     function yG(GG, bG, ZG) {
-       return {
- ... (52 more removed lines; see GitHub link above)
+     var OM = iM(9816);
```

#### 5. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L138-L141` → after: `L337-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/203.js#L337-L338) · [Before (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/203.js#L138-L141)

```diff
-         yaw: .61 * Math.PI,
-         pitch: Math.PI / 2.05,
-         radius: 30,
-         target: [0, 0, 0]
+         Water: [63, 118, 228],
+         Lava: [232, 110, 30]
```

#### 6. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L143-L156` → after: `L340-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/203.js#L340-L341) · [Before (L143-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/203.js#L143-L156)

```diff
-       yG = {
-         player: LG,
-         store: {
-           ...LG,
-           radius: 33,
-           target: [0, 3.9, 0]
-         }
-       };
- 
-     function kG(GG, bG) {
-       GG instanceof Promise ? GG.then(bG).catch((GG => {
-         console.error("Couldn't open the preview", GG)
-       })) : bG(GG)
-     }
+       jM = [150, 150, 150],
+       aM = -2147483648;
```

#### 7. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L159-L255` → after: `L344-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L344-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/203.js#L344-L371) · [Before (L159-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/203.js#L159-L255)

```diff
-         this.opened = null, this.view = null, this.size = null, this.closed = !1, kG(GG, (GG => {
-           this.closed ? GG.close() : (this.opened = GG, null !== this.size && GG.resize(this.size.width, this.size.height), null !== this.view && GG.show(this.view))
-         }))
-       }
-       show(GG) {
-         var bG;
-         this.view = GG, null === (bG = this.opened) || void 0 === bG || bG.show(GG)
-       }
-       resize(GG, bG) {
-         var ZG;
-         this.size = {
-           width: GG,
-           height: bG
-         }, null === (ZG = this.opened) || void 0 === ZG || ZG.resize(GG, bG)
-       }
-       close() {
- ... (81 more removed lines; see GitHub link above)
+         this.averages = MM, this.byId = new Map
+       }
+       get(MM) {
+         var rM, iM, aM, PM, nM;
+         const QM = this.byId.get(MM);
+         if (void 0 !== QM) return QM;
+         const zM = null !== (rM = null === (iM = OM.k[MM]) || void 0 === iM ? void 0 : iM.name) && void 0 !== rM ? rM : "",
+           LM = zM.split("|")[0],
+           mM = null !== (aM = this.averages[zM]) && void 0 !== aM ? aM : this.averages[LM],
+           HM = null !== (PM = null !== (nM = null === mM || void 0 === mM ? void 0 : mM[0]) && void 0 !== nM ? nM : SM[LM]) && void 0 !== PM ? PM : 0 === (null === mM || void 0 === mM ? void 0 : mM.length) ? null : jM;
+         return this.byId.set(MM, HM), HM
+       }
+       getDrawnIds() {
+         const MM = new Uint8Array(65536);
+         for (let rM = 1; rM < 65536; rM++) void 0 !== OM.k[rM] && null !== this.get(rM) && (MM[rM] = 1);
+         return MM
+ ... (12 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L257-L259` → after: `L373-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L373-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/203.js#L373-L374) · [Before (L257-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/203.js#L257-L259)

```diff
-       b: () => wG.b,
-       c: () => wG.e,
-       d: () => wG.f
+       c: () => SM,
+       e: () => jM
```

#### 9. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L261-L289` → after: `L376-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L376-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/203.js#L376-L378) · [Before (L261-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/203.js#L261-L289)

```diff
-     var wG = ZG(34519);
-     class SG {
-       constructor(GG) {
-         this.load = GG, this.loaded = null, this.loading = null
-       }
-       run(GG) {
-         return null !== this.loaded ? GG(this.loaded) : (this.loading ??= this.load().then((GG => (this.loaded = GG, GG)), (GG => {
-           throw this.loading = null, GG
-         })), this.loading.then(GG))
-       }
-     }
-     class LG {
-       constructor() {
-         this.mobScene = new SG((() => Promise.all([ZG.e(73), ZG.e(237), ZG.e(236), ZG.e(258), ZG.e(98), ZG.e(259), ZG.e(76), ZG.e(75), ZG.e(256), ZG.e(74), ZG.e(266), ZG.e(260), ZG.e(265), ZG.e(263), ZG.e(255), ZG.e(279), ZG.e(233), ZG.e(249), ZG.e(261), ZG.e(264), ZG.e(78), ZG.e … [truncated]
-       }
-       openMob(GG) {
- ... (13 more removed lines; see GitHub link above)
+     var OM = iM(9863);
+     const SM = "Air",
+       jM = Object.freeze(new OM.c(SM, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/204.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/204.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1)

#### 1. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L4` → after: `L4-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/204.js#L4-L13) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/204.js#L4)

```diff
-   34543: (GG, bG, ZG) => {
+   41585: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       FORMER_BLOCK_IMAGE_NAMES: () => OM.e,
+       textureAnimationData: () => SM.z,
+       textureNameToIndex: () => SM.D
+     });
+     var OM = iM(39768),
+       SM = iM(9816)
+   },
+   9918: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L6-L7` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/204.js#L15-L16) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/204.js#L6-L7)

```diff
-       d: () => SG,
-       g: () => LG
+       c: () => SM,
+       e: () => jM
```

#### 3. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L9-L23` → after: `L18-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L18-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/204.js#L18-L27) · [Before (L9-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/204.js#L9-L23)

```diff
-     var wG = ZG(3230);
- 
-     function SG() {
-       if ("undefined" === typeof BroadcastChannel) return null;
-       const GG = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
-       try {
-         const bG = new BroadcastChannel(wG.l);
-         bG.postMessage({
-           stored: GG
-         }), bG.close()
-       } catch {
-         return null
-       }
-       return GG
-     }
+     var OM = iM(9863);
+     const SM = "Air",
+       jM = Object.freeze(new OM.c(SM, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
+   },
+   39768: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => OM,
+       h: () => SM
+     });
+     const OM = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((MM => [MM, `${MM}_block`])));
```

#### 4. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L26-L437` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/204.js#L30-L31) · [Before (L26-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/204.js#L26-L437)

```diff
-       const bG = "object" === typeof GG && null !== GG ? GG.stored : null;
-       return "string" === typeof bG ? bG : null
-     }
-   },
-   34539: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG,
-       f: () => SG,
-       i: () => LG
-     });
-     var wG = ZG(3230);
-     async function SG(GG, bG, ZG) {
-       let SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
-       const LG = yG(await GG.getItem(wG.h, bG));
-       if (null === LG || SG()) return null;
-       const kG = await GG.getItem(wG.i, bG);
- ... (396 more removed lines; see GitHub link above)
+       var rM;
+       return null !== (rM = OM.get(MM)) && void 0 !== rM ? rM : MM
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/205.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/205.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7)

#### 1. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L4-L9` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/205.js#L4-L8) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/205.js#L4-L9)

```diff
-   34549: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       packDisplayName: () => KG,
-       packModelMessage: () => hG,
-       packModelSummary: () => JG,
-       refusedPackModels: () => dG
+   41704: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => nM,
+       d: () => PM,
+       f: () => aM
```

#### 2. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L11-L36` → after: `L10-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L10-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/205.js#L10-L86) · [Before (L11-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/205.js#L11-L36)

```diff
-     var wG = ZG(34555),
-       SG = ZG(34560);
-     const LG = "DRACO",
-       yG = 0,
-       kG = 1,
-       UG = 0,
-       YG = 1,
-       VG = 32768;
- 
-     function pG(GG) {
-       const bG = new DataView(GG.buffer, GG.byteOffset, GG.byteLength);
-       let ZG = 0;
-       const wG = () => {
-           if (ZG >= GG.byteLength) throw new RangeError("past the stream");
-           return GG[ZG++]
-         },
- ... (10 more removed lines; see GitHub link above)
+     var OM = iM(41706),
+       SM = iM(5198),
+       jM = iM(41710);
+ 
+     function aM(MM) {
+       return MM.payloadKind === SM.hc.Msgpack ? (0, OM.c)(MM.payload) : void 0
+     }
+ 
+     function PM(MM, rM) {
+       if (rM.payloadKind === SM.hc.Bytes || rM.payloadKind === SM.hc.MsgpackBin) return (0, jM.d)(MM, rM.payload)
+     }
+ 
+     function nM(MM) {
+       return null !== MM && "object" === typeof MM
+     }
+   },
+ ... (61 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L38-L60` → after: `L88-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L88-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/205.js#L88-L339) · [Before (L38-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/205.js#L38-L60)

```diff
-           throw new RangeError("varint too long")
-         };
-       try {
-         for (let GG = 0; GG < LG.length; GG++)
-           if (wG() !== LG.charCodeAt(GG)) return null;
-         const bG = wG(),
-           fG = wG(),
-           QG = wG(),
-           KG = wG(),
-           hG = wG() | wG() << 8;
-         if (2 !== bG) return null;
-         0 !== (hG & VG) && function(GG, bG, ZG) {
-           const wG = () => {
-               bG(ZG())
-             },
-             SG = () => {
- ... (7 more removed lines; see GitHub link above)
+       },
+       close: function(MM) {
+         QM = Math.max(QM, MM, nM), 0 !== nM && (nM = 0, JM(!1))
+       }
+     }
+   },
+   41695: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => QM,
+       i: () => nM,
+       j: () => PM
+     });
+     var OM = iM(1279),
+       SM = iM(41669);
+     const jM = new TextDecoder,
+       aM = new TextEncoder;
+ ... (236 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L62-L79` → after: `L341-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L341-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/205.js#L341-L422) · [Before (L62-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/205.js#L62-L79)

```diff
-             },
-             LG = GG();
-           for (let yG = 0; yG < LG; yG++) GG(), SG();
-           SG()
-         }(pG, (bG => {
-           if (ZG + bG > GG.byteLength) throw new RangeError("past the stream");
-           ZG += bG
-         }), wG);
-         const dG = fG < 2 ? SG : pG;
-         if (QG === yG) return {
-           faces: 0,
-           vertices: SG()
-         };
-         if (QG !== kG) return null;
-         if (KG === UG) {
-           return {
- ... (2 more removed lines; see GitHub link above)
+             }
+             return;
+           default:
+             throw new Error("msgpack: can't encode a " + typeof MM)
+         }
+       }
+       number(MM) {
+         Number.isInteger(MM) && MM >= -2147483648 && MM <= 4294967295 ? MM >= 0 ? MM < 128 ? this.u8(MM) : MM < 256 ? (this.u8(204), this.u8(MM)) : MM < 65536 ? (this.u8(205), this.u16(MM)) : (this.u8(206), this.u32(MM)) : MM >= -32 ? this.u8(MM + 256) : MM >= -128 ? (this.u8(208 … [truncated]
+       }
+       bigint(MM) {
+         const rM = MM >= PM && MM <= nM;
+         if (!rM && (MM < 0n || MM > QM)) throw new Error("msgpack: a BigInt past 64 bits");
+         this.u8(rM ? 211 : 207), this.room(8), rM ? this.view.setBigInt64(this.at, MM, !1) : this.view.setBigUint64(this.at, MM, !1), this.at += 8
+       }
+       string(MM) {
+         const rM = aM.encode(MM);
+ ... (66 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L81-L84` → after: `L424-L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L424-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/205.js#L424-L748) · [Before (L81-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/205.js#L81-L84)

```diff
-         }
-         if (KG !== YG) return null;
-         wG(), fG < 2 && pG();
-         const JG = pG();
+           return MM
+         }
+         return SM.decode(this.buf.subarray(rM, iM))
+       }
+       bytes() {
+         return this.fixed(this.size())
+       }
+       fixed(MM) {
+         const rM = this.take(MM);
+         return this.buf.slice(rM, rM + MM)
+       }
+       index(MM) {
+         const rM = this.long();
+         if (!(rM >= 0 && rM < MM)) throw new RangeError(`avro: index ${rM} of ${MM}`);
+         return rM
+       }
+ ... (309 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L86-L146` → after: `L750-L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L750-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/205.js#L750-L1222) · [Before (L86-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/205.js#L86-L146)

```diff
-           faces: pG(),
-           vertices: JG
-         }
-       } catch {
-         return null
-       }
-     }
- 
-     function fG(GG, bG, ZG) {
-       var wG, SG;
-       if (null === (wG = null === (SG = GG.extensionsUsed) || void 0 === SG ? void 0 : SG.includes("KHR_draco_mesh_compression")) || void 0 === wG || !wG) return null;
-       for (const KG of null !== (LG = GG.meshes) && void 0 !== LG ? LG : []) {
-         var LG;
-         for (const wG of KG.primitives) {
-           var yG, kG, UG, YG, VG, fG;
-           const SG = null === (yG = wG.extensions) || void 0 === yG ? void 0 : yG.KHR_draco_mesh_compression;
- ... (45 more removed lines; see GitHub link above)
+           color: DM(MM),
+           colour: DM(MM),
+           fontSize: DM(MM)
+         }
+       }(MM)
+     }
+ 
+     function ZM(MM) {
+       return {
+         icon: MM.str(),
+         style: kM(MM)
+       }
+     }
+ 
+     function oM(MM) {
+       const rM = MM.index(3);
+ ... (457 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L152-L156` → after: `L1362-L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L1362-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/205.js#L1362-L1365) · [Before (L152-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/205.js#L152-L156)

```diff
-       const ZG = Object.keys(bG);
-       if (0 === ZG.length) return null;
-       if (1 === ZG.length) return hG(GG, ZG[0], bG[ZG[0]]);
-       const wG = ZG.map((GG => `"${GG}" ${bG[GG]}`)).join("; ");
-       return `Texture pack "${GG}": ${ZG.length} models were not loaded (${wG}). The default models are used instead.`
+       let iM = aM.get(rM);
+       void 0 === iM && (iM = new Map, aM.set(rM, iM));
+       let SM = iM.get(MM);
+       return void 0 === SM && (SM = `${MM}${(0,OM.A)(rM)}`, iM.set(MM, SM)), SM
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/206.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/206.js` (47 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643)

#### 1. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L4` → after: `L4-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L4-L35) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L4)

```diff
-   34555: (GG, bG, ZG) => {
+   40199: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => OM
+     });
+     class OM {
+       constructor(MM, rM) {
+         this.read = MM, this.apply = rM, this.release = null
+       }
+       turn(MM, rM) {
+         const iM = null === this.release ? this.read() : this.release.transitionMs;
+         this.stop(!1), this.apply({
+           forcedCameraDirectionTransitionMs: rM,
+           forcedCameraDirection: [MM[0], MM[1], MM[2]]
+         }), this.release = {
+           timer: setTimeout((() => {
+             this.stop(!0)
+ ... (16 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L7-L8` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L38) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L7-L8)

```diff
-       d: () => vG,
-       f: () => FG
+       g: () => SM
```

#### 3. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L10-L48` → after: `L40-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L40-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L40-L65) · [Before (L10-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L10-L48)

```diff
-     var wG = ZG(34560);
-     const SG = {
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
-       LG = {
-         items: 1024,
-         perFile: 1024,
- ... (23 more removed lines; see GitHub link above)
+     const OM = new Map;
+ 
+     function SM(MM, rM) {
+       OM.set(MM, rM)
+     }
+ 
+     function jM(MM) {
+       return MM ? OM.get(MM) : void 0
+     }
+   },
+   40731: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => SM
+     });
+     var OM = iM(39218);
+ 
+ ... (10 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L50-L57` → after: `L67-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L67-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L67-L118) · [Before (L50-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L50-L57)

```diff
-         TEXCOORD_1: pG,
-         TEXCOORD_2: pG,
-         TEXCOORD_3: pG,
-         TEXCOORD_4: pG,
-         TEXCOORD_5: pG
-       },
-       QG = new Set(wG.i.map((GG => {
-         let [bG] = GG;
+         text: null !== (jM = null === HM || void 0 === HM || null === (aM = HM.persisted) || void 0 === aM || null === (PM = aM.shared) || void 0 === PM ? void 0 : PM.text) && void 0 !== jM ? jM : "",
+         textSize: null !== (nM = null === HM || void 0 === HM || null === (QM = HM.persisted) || void 0 === QM || null === (zM = QM.shared) || void 0 === zM ? void 0 : zM.textSize) && void 0 !== nM ? nM : null
+       }
+     }
+   },
+   39507: (MM, rM, iM) => {
+     function OM(MM) {
+       switch (MM.kind) {
+         case void 0:
+         case "flatEmissive":
+           return !1;
+         case "chevronPath":
+         case "furnaceFire":
+           return !0
+       }
+     }
+ ... (36 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L59-L67` → after: `L120-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L120-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L120-L140) · [Before (L59-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L59-L67)

```diff
-       }))),
-       KG = {
-         1: "line",
-         2: "line loop",
-         3: "line strip",
-         5: "triangle strip",
-         6: "triangle fan"
-       },
-       hG = 5126;
+       }
+     }
+   },
+   40231: (MM, rM, iM) => {
+     function OM(MM, rM) {
+       return Object.values({
+         ...MM,
+         ...rM
+       }).filter((MM => null !== MM))
+     }
+     iM.d(rM, {
+       c: () => OM
+     })
+   },
+   40739: (MM, rM, iM) => {
+     iM.d(rM, {
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L70` → after: `L143-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L143-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L143-L170) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L70)

```diff
-       return GG.toLocaleString("en-US")
+       if (MM === OM.c) return 0;
+       const rM = (0, jM.d)(MM);
+       if (void 0 !== rM && rM <= SM.MAX_BLOCK_ID) return rM;
+       const iM = (0, jM.d)(MM.split("|")[0]);
+       if (void 0 !== iM && iM <= SM.MAX_BLOCK_ID && (0, SM.rootMetaDescOf)(iM) === MM) return iM;
+       throw new Error(`Invalid block name. You sent ${MM}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
+     }
+   },
+   40291: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => SM
+     });
+     var OM = iM(19);
+     class SM {
+       constructor(MM) {
+         this.screen = MM, this.hidesHud = !1
+ ... (12 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L73-L74` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L190-L191) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L73-L74)

```diff
-     function JG(GG, bG, ZG) {
-       return GG > bG ? `has ${dG(GG)} ${ZG} (the limit is ${dG(bG)})` : null
+     function aM(MM, rM) {
+       rM.heading = MM.heading, rM.pitch = MM.pitch
```

#### 8. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L78` → after: `L195-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L195-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L195-L200) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L78)

```diff
-       return Number.isInteger(GG) && GG >= 0 && GG < (null !== bG && void 0 !== bG ? bG : 0)
+       const iM = rM - MM;
+       return iM - SM * Math.floor((iM + Math.PI) / SM)
+     }
+ 
+     function nM(MM, rM, iM) {
+       return MM + PM(MM, rM) * iM
```

#### 9. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L82` → after: `L204-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L204-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L204-L206) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L82)

```diff
-       return Number.isInteger(GG) && GG >= 0
+       if (!Number.isFinite(MM)) return MM;
+       const rM = MM - SM * Math.floor(MM / SM);
+       return rM < SM ? rM : 0
```

#### 10. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L86` → after: `L210-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L210-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L210-L224) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L86)

```diff
-       return void 0 !== GG && (!Array.isArray(GG) || GG.length > bG)
+       return MM + PM(MM, rM)
+     }
+ 
+     function LM(MM) {
+       return Math.max(-OM, Math.min(OM, MM))
+     }
+ 
+     function mM(MM, rM, iM) {
+       const OM = Math.cos(rM);
+       return iM[0] = OM * Math.sin(MM), iM[1] = -Math.sin(rM), iM[2] = OM * Math.cos(MM), iM
+     }
+ 
+     function HM(MM, rM, iM, OM) {
+       const SM = Math.sqrt(MM * MM + iM * iM);
+       return SM < jM && Math.abs(rM) < jM || (SM >= jM && (OM.heading = Math.atan2(MM, iM)), OM.pitch = LM(Math.atan2(-rM, SM) + 0)), OM
```

#### 11. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L90` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L228) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L90)

```diff
-       return "object" === typeof GG && null !== GG && Object.keys(GG).length > bG
+       return HM(MM[0], MM[1], MM[2], rM)
```

#### 12. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L95` → after: `L244-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L244-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L244-L251) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L95)

```diff
-       return `${GG.normalized?"normalized ":""}${null!==(bG=wG.g[GG.componentType])&&void 0!==bG?bG:GG.componentType} ${GG.type}`
+       const iM = "default" === MM.mode ? "movement" : null !== (rM = MM.playerFacing) && void 0 !== rM ? rM : "movement";
+       return "cursor" === iM ? {
+         facing: iM,
+         mouseTurns: null
+       } : {
+         facing: iM,
+         mouseTurns: "default" !== MM.mode && void 0 !== MM.playerLook ? "look" : "view"
+       }
```

#### 13. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L98-L99` → after: `L254-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L254-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L254-L383) · [Before (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L98-L99)

```diff
-     function uG(GG) {
-       const bG = bG => {
+     function jM(MM, rM, iM, SM, jM, aM) {
+       return aM.PD = 0, aM.nD = 0, aM.pointedAt = void 0, void 0 !== SM ? jM ? (aM.pointedAt = SM, MM) : (0, OM.s)(SM.heading) : jM ? (aM.PD = rM, aM.nD = iM, MM) : (0, OM.s)(MM + rM)
+     }
+   },
+   40279: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => vM
+     });
+     var OM = iM(40283),
+       SM = iM(40261),
+       jM = iM(37922);
+ 
+     function aM(MM, rM, iM, OM) {
+       if (!(OM > 0)) return rM;
+       const SM = rM > MM ? Math.min(rM, MM + iM / OM) : Math.max(rM, MM - iM / OM);
+       return Math.abs(rM - SM) < 1e-9 ? rM : SM
+ ... (114 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L101-L103` → after: `L385-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L385-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L385-L463) · [Before (L101-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L101-L103)

```diff
-         return null !== (ZG = GG[bG]) && void 0 !== ZG ? ZG : -1
-       };
-       return 255 === bG(0) && 216 === bG(1) ? "JPEG" : 82 === bG(0) && 73 === bG(1) && 87 === bG(8) && 69 === bG(9) ? "WebP" : 171 === bG(0) && 75 === bG(1) && 84 === bG(2) && 88 === bG(3) ? "KTX2" : "non-PNG"
+         let iM = 0;
+         for (const zM of this.settings.targets) {
+           const MM = this.targets.currentAimPoint(zM);
+           MM && (0, nM.d)(MM, this.pointAt(iM++))
+         }
+         if (iM > 0) this.framedTargets = !0;
+         else if (!this.framedTargets) {
+           const MM = this.targets.aimPoint(this.uL.localPlayerId);
+           MM && (0, nM.d)(MM, this.pointAt(iM++))
+         }
+         const OM = this.goal;
+         if (0 === iM) return void(OM[3] = this.withinDistances(OM[3]));
+         for (let nM = 0; nM < 3; nM++) {
+           let MM = 1 / 0,
+             rM = -1 / 0;
+           for (let OM = 0; OM < iM; OM++) MM = Math.min(MM, this.points[OM][nM]), rM = Math.max(rM, this.points[OM][nM]);
+ ... (63 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L107` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L468) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L107)

```diff
-       return GG.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((bG, ZG) => GG[ZG] === bG)) && 73 === GG[12] && 72 === GG[13] && 68 === GG[14] && 82 === GG[15]
+       return Math.sqrt(MM[0] * MM[0] + MM[1] * MM[1] + MM[2] * MM[2])
```

#### 16. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L110-L111` → after: `L471-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L471-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L471-L474) · [Before (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L110-L111)

```diff
-     function CG(GG) {
-       return /^[aeiou]/i.test(GG) ? `an ${GG}` : `a ${GG}`
+     function EM(MM, rM, iM, OM, SM) {
+       const jM = SM * SM,
+         aM = jM * SM;
+       return (2 * aM - 3 * jM + 1) * MM + (aM - 2 * jM + SM) * rM + (-2 * aM + 3 * jM) * iM + (aM - jM) * OM
```

#### 17. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L114-L116` → after: `L477-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L477-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L477-L479) · [Before (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L114-L116)

```diff
-     function WG(GG) {
-       const bG = GG.byteStride;
-       return void 0 === bG || Number.isInteger(bG) && bG >= 4 && bG <= 252 && bG % 4 === 0
+     function UM(MM, rM, iM, OM, SM) {
+       const jM = SM * SM;
+       return (6 * jM - 6 * SM) * MM + (3 * jM - 4 * SM + 1) * rM + (-6 * jM + 6 * SM) * iM + (3 * jM - 2 * SM) * OM
```

#### 18. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L119-L124` → after: `L482-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L482-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L482-L504) · [Before (L119-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L119-L124)

```diff
-     function mG(GG, bG, ZG) {
-       var wG, SG;
-       const LG = null === (wG = GG.bufferViews) || void 0 === wG ? void 0 : wG[ZG];
-       if (!LG || !bG || 0 !== LG.buffer) return null;
-       const yG = null !== (SG = LG.byteOffset) && void 0 !== SG ? SG : 0;
-       return !zG(yG) || !zG(LG.byteLength) || yG + LG.byteLength > bG.byteLength ? null : bG.subarray(yG, yG + LG.byteLength)
+     function GM(MM, rM) {
+       const iM = rM[0] - MM[0],
+         OM = rM[1] - MM[1],
+         SM = rM[2] - MM[2];
+       return Math.sqrt(iM * iM + OM * OM + SM * SM)
+     }
+ 
+     function CM(MM, rM, iM, OM, SM, jM) {
+       for (let aM = 0; aM < 3; aM++) jM[aM] = SM ? MM[aM] * OM : iM[aM] - rM[aM];
+       return SM && function(MM, rM) {
+         const iM = lM(MM);
+         if (iM > rM) {
+           const OM = rM / iM;
+           MM[0] *= OM, MM[1] *= OM, MM[2] *= OM
+         }
+       }(jM, 3 * GM(rM, iM)), jM
+ ... (7 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L128-L139` → after: `L508-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L508-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L508-L531) · [Before (L128-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L128-L139)

```diff
-       var ZG, SG, LG;
-       const yG = wG.r[bG.type],
-         kG = wG.e[bG.componentType];
-       if (!yG || !kG || !Number.isInteger(bG.count) || bG.count < 0) return !1;
-       if (void 0 === bG.bufferView) return !0;
-       const UG = null === (ZG = GG.bufferViews) || void 0 === ZG ? void 0 : ZG[bG.bufferView],
-         YG = null !== (SG = bG.byteOffset) && void 0 !== SG ? SG : 0;
-       if (!UG || !zG(YG) || YG % kG !== 0) return !1;
-       const VG = yG * kG,
-         pG = null !== (LG = UG.byteStride) && void 0 !== LG ? LG : VG;
-       if (pG < VG) return !1;
-       return (0 === bG.count ? 0 : YG + pG * (bG.count - 1) + VG) <= UG.byteLength
+       return [2 * rM[0] - MM[0], 2 * rM[1] - MM[1], 2 * rM[2] - MM[2]]
+     }
+ 
+     function wM(MM, rM, iM, OM, SM, jM, aM) {
+       if (!jM && !aM) return 0;
+       const PM = jM ? MM : 2 * rM - iM,
+         nM = aM ? iM : 2 * rM - MM,
+         QM = jM ? OM : SM,
+         zM = aM ? SM : OM,
+         LM = (rM - PM) / QM,
+         mM = (nM - rM) / zM;
+       if (LM * mM <= 0) return 0;
+       const HM = (nM - PM) / (QM + zM),
+         hM = 3 * Math.min(Math.abs(LM), Math.abs(mM));
+       return Math.max(-hM, Math.min(hM, HM))
+     }
+ ... (8 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L143` → after: `L535-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L535-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L535-L616) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L143)

```diff
-       return GG > SG.fileBytes ? `is ${(GG/yG).toFixed(1)} MiB (the limit is ${SG.fileBytes/yG} MiB)` : null
+       return Math.abs(MM.pitch) >= SM.c
+     }
+     class uM {
+       constructor(MM, rM, iM, OM, SM) {
+         this.nodes = MM, this.prevNodes = iM, this.nextNodes = OM, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
+           heading: 0,
+           pitch: 0
+         }, this.fromAngles = {
+           heading: 0,
+           pitch: 0
+         }, this.toAngles = {
+           heading: 0,
+           pitch: 0
+         }, this.afterAngles = {
+           heading: 0,
+           pitch: 0
+ ... (66 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L147-L359` → after: `L620-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L620-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L620-L652) · [Before (L147-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L147-L359)

```diff
-       try {
-         return function(GG, bG) {
-           var ZG, yG, pG, dG, zG, FG, vG, aG, cG, lG, jG, PG, MG, AG, sG, qG, nG;
-           const gG = Array.isArray(GG.extensionsUsed) && GG.extensionsUsed.includes("KHR_draco_mesh_compression");
-           if (function(GG, bG) {
-               var ZG, wG;
-               const {
-                 items: SG,
-                 perFile: yG,
-                 surfaces: kG,
-                 few: UG,
-                 bounds: YG,
-                 attributeMembers: VG
-               } = LG;
-               if (EG(GG.extensionsRequired, UG) || EG(GG.animations, 1 / 0) || EG(GG.skins, 1 / 0)) return !0;
-               if (null !== (ZG = GG.animations) && void 0 !== ZG && ZG.length || null !== (wG = GG.skins) && void 0 !== wG && wG.length) return !1;
- ... (197 more removed lines; see GitHub link above)
+       const iM = MM.lookDirection || rM.lookDirection ? function(MM, rM) {
+         if (!MM || !rM) return MM === rM;
+         const iM = lM(MM),
+           OM = lM(rM);
+         return Math.hypot(MM[0] / iM - rM[0] / OM, MM[1] / iM - rM[1] / OM, MM[2] / iM - rM[2] / OM) < yM
+       }(MM.lookDirection, rM.lookDirection) : (OM = MM.lookAt, SM = rM.lookAt, "object" !== typeof OM || "object" !== typeof SM ? OM === SM : GM(OM, SM) < yM);
+       var OM, SM;
+       return GM(MM.position, rM.position) < yM && MM.fov === rM.fov && iM
+     }
+     class pM {
+       constructor(MM, rM, iM) {
+         if (this.smooth = rM, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
+             index: 0,
+             toIndex: 0,
+             u: 0,
+             segmentMs: 0,
+ ... (17 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L361-L368` → after: `L654-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L654-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L654-L678) · [Before (L361-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L361-L368)

```diff
-           for (const wG of Zb) {
-             if (void 0 !== wG.uri) return UG;
-             if (void 0 === wG.bufferView) return kG;
-             const ZG = mG(GG, bG, wG.bufferView);
-             if (!ZG) return kG;
-             if ("image/png" !== wG.mimeType) {
-               var Ib, Fb, vb;
-               return `has ${CG(null!==(Ib=null!==(Fb={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(vb=wG.mimeType)&&void 0!==vb?vb:""])&&void 0!==Fb?Fb:wG.mimeType)&&void 0!==Ib?Ib:"untyped")} image`
+         }));
+         const OM = this.nodes[0],
+           SM = this.nodes[this.nodes.length - 1],
+           aM = iM && this.nodes.length > 1;
+         aM && !RM(OM.keyframe, SM.keyframe) && this.nodes.push({
+           ...OM,
+           timeMs: SM.timeMs + (SM.timeMs - OM.timeMs) / (this.nodes.length - 1)
+         }), this.loopMs = aM ? this.nodes[this.nodes.length - 1].timeMs - OM.timeMs : 0, this.prevNodes = this.nodes.map(((MM, rM) => this.neighbour(rM, -1))), this.nextNodes = this.nodes.map(((MM, rM) => this.neighbour(rM, 1))), this.prevGaps = this.prevNodes.map(((MM, rM) => MM … [truncated]
+           const iM = this.prevNodes[rM],
+             OM = this.nextNodes[rM];
+           return function(MM, rM, iM, OM, SM, jM) {
+             if (jM[0] = 0, jM[1] = 0, jM[2] = 0, !MM && !iM) return jM;
+             const aM = null !== MM && void 0 !== MM ? MM : bM(null !== iM && void 0 !== iM ? iM : rM, rM),
+               PM = null !== iM && void 0 !== iM ? iM : bM(null !== MM && void 0 !== MM ? MM : rM, rM),
+               nM = MM ? OM : SM,
+               QM = iM ? SM : OM,
+ ... (9 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L370-L374` → after: `L680-L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L680-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L680-L918) · [Before (L370-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L370-L374)

```diff
-             if (!iG(ZG)) return `has ${CG(uG(ZG))} image`;
-             const LG = new DataView(ZG.buffer, ZG.byteOffset, ZG.byteLength),
-               yG = LG.getUint32(16),
-               YG = LG.getUint32(20);
-             if (yG > SG.imageSide || YG > SG.imageSide) return `has a ${yG} \xd7 ${YG} image (the limit is ${SG.imageSide})`
+             return jM
+           }(iM >= 0 ? this.nodes[iM].position : null, MM.position, OM >= 0 ? this.nodes[OM].position : null, this.prevGaps[rM], this.nextGaps[rM], [0, 0, 0])
+         })), this.aim = new uM(this.nodes, this.velocities, this.prevNodes, this.nextNodes, rM)
+       }
+       sample(MM, rM, iM, OM) {
+         const SM = this.findSegment(this.pathTime(MM));
+         this.samplePosition(SM, OM.position), this.aim.sample(SM, rM, OM);
+         const {
+           beforeIndex: jM,
+           afterIndex: aM
+         } = SM;
+         OM.fov = tM(SM, jM >= 0 ? this.fovAt(jM, iM) : 0, this.fovAt(SM.index, iM), this.fovAt(SM.toIndex, iM), aM >= 0 ? this.fovAt(aM, iM) : 0, jM >= 0, aM >= 0)
+       }
+       pathTime(MM) {
+         const rM = this.nodes[0].timeMs;
+         if (this.loopMs <= 0 || MM <= rM) return MM;
+ ... (223 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L376-L379` → after: `L920-L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L920-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L920-L923) · [Before (L376-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L376-L379)

```diff
-           return null
-         }(GG, bG)
-       } catch {
-         return kG
+         }(MM, rM, this.targets, aM), SM && (this.look.continueFrom(iM.look), this.mode.continueFrom(iM.mode))
+       }
+       update(MM, rM) {
+         return this.look.update(MM, rM), this.mode.update(MM, this.look, this.pose), (0, nM.j)(this.pose) ? (0, nM.c)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFin … [truncated]
```

#### 25. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L384-L394` → after: `L928-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L928-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L928-L1020) · [Before (L384-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L384-L394)

```diff
-       const bG = FG(GG.byteLength);
-       if (bG) return bG;
-       try {
-         const {
-           json: bG,
-           bin: ZG
-         } = (0, wG.w)(GG);
-         return vG(bG, ZG)
-       } catch (ZG) {
-         if (ZG instanceof wG.n) return ZG.reason;
-         throw ZG
+       return [0, 0, MM[2], MM[3]]
+     }
+     class vM {
+       constructor(MM) {
+         this.uL = MM, this.settings = {
+           mode: "default"
+         }, this.pending = null, this.fade = new PM, this.shot = null, this.blend = null, this.mixed = (0, nM.h)(), this.output = (0, nM.h)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
+           length: 3
+         }, (() => [0, 0, 0]))
+       }
+       setSettings(MM) {
+         const rM = (0, QM.d)(MM);
+         if ((0, OM.y)(rM, this.pending ? this.pending.settings : this.settings)) return;
+         const iM = NM(this.settings, rM);
+         if (void 0 !== rM.transition && !iM) return this.pending = {
+           settings: rM,
+ ... (77 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L398` → after: `L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1024) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L398)

```diff
-   34560: (GG, bG, ZG) => {
+   40253: (MM, rM, iM) => {
```

#### 27. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L400-L402` → after: `L1026-L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1026-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1026-L1030) · [Before (L400-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L400-L402)

```diff
-       e: () => QG,
-       g: () => fG,
-       i: () => hG,
+       b: () => SM,
+       c: () => PM,
+       d: () => aM,
+       h: () => jM,
+       j: () => QM,
```

#### 28. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L404-L409` → after: `L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1032) · [Before (L404-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L404-L409)

```diff
-       n: () => SG,
-       r: () => KG,
-       s: () => VG,
-       u: () => pG,
-       v: () => yG,
-       w: () => YG
+       n: () => zM
```

#### 29. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L411-L414` → after: `L1034-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1034-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1034-L1045) · [Before (L411-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L411-L414)

```diff
-     var wG = ZG(34569);
-     class SG extends Error {
-       constructor(GG) {
-         super(`GLB refused: it ${GG}`), this.reason = GG, this.name = "GlbRefused"
+     var OM = iM(40261);
+     const SM = {
+       PD: 0,
+       nD: 0
+     };
+ 
+     function jM() {
+       return {
+         position: [0, 0, 0],
+         heading: 0,
+         pitch: 0,
+         fov: 0
```

#### 30. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L417-L419` → after: `L1048-L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1048-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1048-L1108) · [Before (L417-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L417-L419)

```diff
-     class LG extends Error {
-       constructor(GG) {
-         super(GG), this.name = "GlbError"
+ 
+     function aM(MM, rM) {
+       return rM[0] = MM[0], rM[1] = MM[1], rM[2] = MM[2], rM
+     }
+ 
+     function PM(MM, rM) {
+       return aM(MM.position, rM.position), rM.heading = MM.heading, rM.pitch = MM.pitch, rM.fov = MM.fov, rM
+     }
+ 
+     function nM(MM, rM) {
+       return Array.isArray(MM) && MM.length === rM && MM.every(Number.isFinite)
+     }
+ 
+     function QM(MM) {
+       return nM(MM.position, 3) && Number.isFinite(MM.heading) && Number.isFinite(MM.pitch) && Number.isFinite(MM.fov)
+     }
+ ... (45 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L424` → after: `L1114-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1114-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1114-L1117) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L424)

```diff
-       return Reflect.get(GG, "scene")
+       if (!(0, SM.k)(MM, 3)) return;
+       const rM = Math.max(Math.abs(MM[0]), Math.abs(MM[1]), Math.abs(MM[2])),
+         iM = Math.hypot(MM[0] / rM, MM[1] / rM, MM[2] / rM);
+       return 0 === rM || rM * iM < OM.q.minDirectionLength ? void 0 : [MM[0] / rM / iM, MM[1] / rM / iM, MM[2] / rM / iM]
```

#### 32. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L426-L427` → after: `L1119-L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1119-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1119-L1131) · [Before (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L426-L427)

```diff
-     const kG = 5130562,
-       UG = "is not a binary glTF 2.0 file";
+ 
+     function dM(MM) {
+       if (void 0 !== MM) return "string" === typeof MM ? jM.includes(MM) ? MM : void 0 : (0, SM.k)(MM, 4) ? [nM(MM[0], 0, 1, 0), nM(MM[1], OM.q.minEasingY, OM.q.maxEasingY, 0), nM(MM[2], 0, 1, 1), nM(MM[3], OM.q.minEasingY, OM.q.maxEasingY, 1)] : "linear"
+     }
+ 
+     function yM(MM) {
+       if (MM) return {
+         maxYaw: nM(MM.maxYaw, 0, OM.q.maxPlayerLook, 0),
+         maxPitch: nM(MM.maxPitch, 0, OM.q.maxPlayerLook, 0),
+         returnMs: QM(MM.returnMs, 0, OM.q.maxReturnMs)
+       }
+     }
+     const lM = new RegExp(OM.e);
```

#### 33. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L431-L453` → after: `L1135-L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1135-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1135-L1142) · [Before (L431-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L431-L453)

```diff
-       const ZG = GG instanceof Uint8Array ? GG : new Uint8Array(GG),
-         LG = (0, wG.f)(ZG);
-       if (null === LG) throw new SG(UG);
-       const yG = LG.json,
-         {
-           jsonEnd: YG,
-           length: VG
-         } = LG,
-         pG = new DataView(ZG.buffer, ZG.byteOffset, ZG.byteLength);
-       let fG = -1,
-         QG = 0;
-       for (let dG = YG; dG < VG;) {
-         if (dG + 8 > VG) throw new SG(UG);
-         const GG = pG.getUint32(dG, !0),
-           bG = pG.getUint32(dG + 4, !0);
-         if (dG + 8 + GG > VG || bG === wG.b || bG === kG && -1 !== fG) throw new SG(UG);
- ... (7 more removed lines; see GitHub link above)
+       if ("object" !== typeof MM || null === MM) return;
+       const iM = OM.q.maxTransitionMs,
+         SM = OM.q.minTransitionFadeMs;
+       return {
+         colour: "string" === typeof MM.colour && lM.test(MM.colour) ? MM.colour : OM.i,
+         outMs: nM(MM.outMs, SM, iM, SM),
+         holdMs: nM(null !== (rM = MM.holdMs) && void 0 !== rM ? rM : 0, 0, iM, 0),
+         inMs: nM(MM.inMs, SM, iM, SM)
```

#### 34. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L456-L458` → after: `L1158-L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1158-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1158-L1174) · [Before (L456-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L456-L458)

```diff
-         json: yG,
-         bin: KG,
-         fileBytes: ZG.byteLength
+         ...MM,
+         timeMs: nM(MM.timeMs, 0, OM.q.maxPathMs, 0),
+         position: zM(MM.position),
+         lookAt: LM(MM.lookAt),
+         lookDirection: JM(MM.lookDirection),
+         fov: QM(MM.fov, OM.q.minFov, OM.q.maxFov),
+         easing: dM(MM.easing)
+       }
+     }
+ 
+     function eM(MM) {
+       const rM = [];
+       if (!Array.isArray(MM)) return rM;
+       for (const iM of MM.slice(0, OM.q.maxKeyframes)) {
+         if (!GM(iM)) continue;
+         const MM = CM(iM);
+ ... (1 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L463-L469` → after: `L1243-L1244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1243-L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1243-L1244) · [Before (L463-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L463-L469)

```diff
-       const bG = GG.slice(GG.indexOf(",") + 1),
-         ZG = Uint8Array.fromBase64;
-       if (ZG) return ZG(bG).buffer;
-       const wG = atob(bG),
-         SG = new Uint8Array(wG.length);
-       for (let LG = 0; LG < wG.length; LG++) SG[LG] = wG.charCodeAt(LG);
-       return SG.buffer
+       const rM = /(\d*\.?\d+)px/.exec(MM);
+       return rM ? Number(rM[1]) : null
```

#### 36. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L471-L475` → after: `L1246-L1248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1246-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1246-L1248) · [Before (L471-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L471-L475)

```diff
-     async function pG(GG) {
-       if (GG.startsWith("data:")) return VG(GG);
-       const bG = await fetch(GG);
-       if (!bG.ok) throw new LG(`fetching ${GG} failed: ${bG.status} ${bG.statusText}`);
-       return await bG.arrayBuffer()
+ 
+     function jM(MM) {
+       return MM.split(/[\s,]+/).pop()
```

#### 37. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L478-L483` → after: `L1252-L1307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1252-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1252-L1307) · [Before (L478-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L478-L483)

```diff
-         5120: "i8",
-         5121: "u8",
-         5122: "i16",
-         5123: "u16",
-         5125: "u32",
-         5126: "f32"
+       debug: !1,
+       align: "center",
+       vAlign: "middle",
+       fontSize: 14,
+       fontWeight: "",
+       fontStyle: "",
+       fontVariant: "",
+       font: "Arial",
+       lineHeight: null,
+       justify: !1,
+       drawText: function(MM, rM, OM, PM, nM, QM) {
+         if (nM <= 0 || QM <= 0 || this.fontSize <= 0) return {
+           height: 0
+         };
+         const {
+           fontStyle: zM,
+ ... (40 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L485-L491` → after: `L1309-L1351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1309-L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1309-L1351) · [Before (L485-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L485-L491)

```diff
-       QG = {
-         5120: 1,
-         5121: 1,
-         5122: 2,
-         5123: 2,
-         5125: 4,
-         5126: 4
+       drawLines: function(MM, rM, iM, SM, jM, aM, PM) {
+         const nM = iM + jM,
+           QM = SM + aM;
+         let zM, LM = SM + aM / 2 + PM / 2;
+         "right" === this.align ? (zM = nM, MM.textAlign = "right") : "left" === this.align ? (zM = iM, MM.textAlign = "left") : (zM = iM + jM / 2, MM.textAlign = "center");
+         for (const OM of rM) {
+           MM.measureText(OM).width >= jM && (rM = rM.replace(OM, ""))
+         }
+         rM = (0, OM.U)(rM);
+         const mM = [],
+           HM = rM.split("\n"),
+           hM = this.justify ? MM.measureText("\u200a").width : 0;
+         HM.forEach((rM => {
+           let iM = MM.measureText(rM).width;
+           if (iM <= jM) mM.push(rM);
+           else {
+ ... (27 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L493-L500` → after: `L1353-L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1353-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1353-L1359) · [Before (L493-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L493-L500)

```diff
-       KG = {
-         SCALAR: 1,
-         VEC2: 2,
-         VEC3: 3,
-         VEC4: 4,
-         MAT2: 4,
-         MAT3: 9,
-         MAT4: 16
+       getTextHeight: function(MM, rM) {
+         const iM = MM.textBaseline;
+         MM.textBaseline = "bottom";
+         const {
+           actualBoundingBoxAscent: OM
+         } = MM.measureText(rM);
+         return MM.textBaseline = iM, OM
```

#### 40. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L502-L513` → after: `L1361-L1385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1361-L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1361-L1385) · [Before (L502-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L502-L513)

```diff
-       hG = [
-         ["POSITION", "position"],
-         ["NORMAL", "normal"],
-         ["TANGENT", "tangent"],
-         ["TEXCOORD_0", "uv"],
-         ["TEXCOORD_1", "uv2"],
-         ["TEXCOORD_2", "uv3"],
-         ["TEXCOORD_3", "uv4"],
-         ["TEXCOORD_4", "uv5"],
-         ["TEXCOORD_5", "uv6"],
-         ["COLOR_0", "color"]
-       ]
+       justifyLine: function(MM, rM, iM, OM, SM) {
+         const jM = rM.trim(),
+           aM = MM.measureText(jM).width,
+           PM = jM.split(/\s+/).length - 1,
+           nM = Math.floor((SM - aM) / iM);
+         if (PM <= 0 || nM <= 0) return jM;
+         const QM = Math.floor(nM / PM);
+         let zM = nM - PM * QM,
+           LM = [];
+         for (let mM = 0; mM < QM; mM++) LM.push(OM);
+         LM = LM.join("");
+         return jM.replace(/\s+/g, (MM => {
+           const rM = zM > 0 ? LM + OM : LM;
+           return zM--, MM + rM
+         }))
+       }
+ ... (9 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L515` → after: `L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1387) · [Before (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L515)

```diff
-   34569: (GG, bG, ZG) => {
+   39691: (MM, rM, iM) => {
```

#### 42. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L517` → after: `L1389-L1390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1389-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1389-L1390) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L517)

```diff
-       b: () => SG,
+       c: () => JM,
+       d: () => hM,
```

#### 43. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L519` → after: `L1392-L1393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1392-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1392-L1393) · [Before (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L519)

```diff
-       j: () => yG
+       j: () => zM,
+       k: () => LM
```

#### 44. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L521-L522` → after: `L1395-L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1395-L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1395-L1413) · [Before (L521-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L521-L522)

```diff
-     const wG = 1179937895,
-       SG = 1313821514;
+     var OM = iM(4577),
+       SM = iM(332);
+     const jM = 1024,
+       aM = 1536,
+       PM = 2 * OM.j + 1,
+       nM = new Intl.NumberFormat("en", {
+         maximumSignificantDigits: 15
+       }),
+       QM = 1.5;
+ 
+     function zM(MM, rM, iM) {
+       if ("string" !== typeof MM) return rM;
+       try {
+         const iM = JSON.parse(MM);
+         return iM && "object" === typeof iM ? iM : rM
+       } catch (OM) {
+ ... (3 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L525-L530` → after: `L1416-L1598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1416-L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1416-L1598) · [Before (L525-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L525-L530)

```diff
-       const bG = new DataView(GG.buffer, GG.byteOffset, GG.byteLength);
-       if (GG.byteLength < 20 || bG.getUint32(0, !0) !== wG || 2 !== bG.getUint32(4, !0)) return null;
-       const ZG = Math.min(bG.getUint32(8, !0), GG.byteLength),
-         LG = bG.getUint32(12, !0);
-       if (bG.getUint32(16, !0) !== SG || 20 + LG > ZG) return null;
-       let yG;
+       return zM(MM, null, "a leaderboard's rows")
+     }
+ 
+     function mM(MM, rM) {
+       var iM, OM;
+       return null !== rM && void 0 !== rM ? rM : {
+         status: null !== (iM = MM.status) && void 0 !== iM ? iM : "loading",
+         entries: null !== (OM = MM.entries) && void 0 !== OM ? OM : []
+       }
+     }
+ 
+     function HM(MM, rM) {
+       return "number" === typeof MM && Number.isFinite(MM) && MM > 0 ? MM : rM
+     }
+ 
+     function hM(MM, rM) {
+ ... (167 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L532-L534` → after: `L1600-L1603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1600-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1600-L1603) · [Before (L532-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L532-L534)

```diff
-         yG = JSON.parse((new TextDecoder).decode(GG.subarray(20, 20 + LG)))
-       } catch {
-         return null
+         const [rM, iM, OM] = SM()(MM).rgb().array();
+         return [rM / 255, iM / 255, OM / 255]
+       } catch (rM) {
+         return console.warn(`Invalid groundArrowPath colour "${MM}":`, rM), [...jM]
```

#### 47. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L545-L554` → after: `L1620-L1796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1620-L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/206.js#L1620-L1796) · [Before (L545-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/206.js#L545-L554)

```diff
-       const ZG = null === (bG = LG(GG)) || void 0 === bG ? void 0 : bG.json;
-       if (void 0 === ZG || !Array.isArray(ZG.extensionsUsed) || !ZG.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
-       const wG = ZG.meshes;
-       return Array.isArray(wG) && wG.some((GG => {
-         const bG = null === GG || void 0 === GG ? void 0 : GG.primitives;
-         return Array.isArray(bG) && bG.some((GG => {
-           const bG = null === GG || void 0 === GG ? void 0 : GG.extensions;
-           return null != (null === bG || void 0 === bG ? void 0 : bG.KHR_draco_mesh_compression)
-         }))
-       }))
+       const iM = Math.min(screen.width, screen.height) * (null !== (rM = (0, OM.b)()) && void 0 !== rM ? rM : (0, SM.o)());
+       return Math.max(window.innerHeight * (0, SM.o)(), iM) / (0, SM.q)(MM)
+     }
+ 
+     function nM(MM, rM, iM) {
+       return rM / (2 * Math.tan(iM / 2)) > aM ? MM : QM(MM)
+     }
+ 
+     function QM(MM) {
+       return MM.map((MM => MM.replace(jM, "/textures/skyBoxes/$1/1024/$2")))
+     }
+   },
+   40165: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => SM
+     });
+ ... (161 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/207.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/207.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376)

#### 1. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/207.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/207.js#L4)

```diff
-   34575: (GG, bG, ZG) => {
+   34615: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L6-L15` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/207.js#L6-L7) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/207.js#L6-L15)

```diff
-       animatedBlockTextures: () => UG,
-       armourAtlasUrl: () => yG,
-       averageColors: () => YG,
-       blockAtlasUrls: () => LG,
-       blockAtlasWidth: () => wG,
-       buildHash: () => pG,
-       builtTextureIndexFingerprint: () => VG,
-       imagesPerAtlas: () => SG,
-       outputHash: () => fG,
-       rotatedBlockTextures: () => kG
+       getLatestPublishedUpdateLog: () => PM,
+       updateLogsData: () => aM
```

#### 3. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L17-L10902` → after: `L9-L2780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L9-L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/207.js#L9-L2780) · [Before (L17-L10902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/207.js#L17-L10902)

```diff
-     const wG = 8,
-       SG = [256, 256, 256, 256, 256, 256, 114],
-       LG = [ZG(34583), ZG(34587), ZG(34595), ZG(34599), ZG(34601), ZG(34607), ZG(34612)],
-       yG = ZG(34620),
-       kG = {
-         "alloy_kiln_top[rot[1": ZG(34629),
-         "alloy_kiln_top[rot[2": ZG(34634),
-         "alloy_kiln_top[rot[3": ZG(34639),
-         "alloy_kiln_top[rot[4": ZG(34646),
-         "auto_bench_top[rot[1": ZG(34653),
-         "auto_bench_top[rot[2": ZG(34661),
-         "auto_bench_top[rot[3": ZG(34669),
-         "auto_bench_top[rot[4": ZG(34676),
-         "belt_tunnel_exit_top[rot[1": ZG(34683),
-         "belt_tunnel_exit_top[rot[2": ZG(34686),
-         "belt_tunnel_exit_top[rot[3": ZG(34688),
- ... (10870 more removed lines; see GitHub link above)
+     var OM = iM(871),
+       SM = iM(313);
+     const jM = "\xa0\xa0\xa0\xa0",
+       aM = [{
+         author: ["Oliver", "Harry"],
+         date: new Date("2026-11-17T16:00:00Z"),
+         title: "\u2728Characters are back in the Store!\u2728",
+         description: "Every character from the Y2K, Spring and Astro packs is back, and you can now buy each one on its own!\n\n\ud83d\udcbf Y2K: Alice, Roy, Ela and Tilly\n\ud83c\udf37 Spring: Harry, Gnome, Poppy and Daisy\n\ud83d\ude80 Astro: Zara, Nova, Rex and Vex\n\nAlready  … [truncated]
+         image: "CosmeticPacks.jpg",
+         onClickImage: {
+           type: "openMenu",
+           menu: SM.m.COSMETIC_SHOP
+         },
+         callToAction: {
+           color: "rainbow",
+           label: "Go to Store!",
+ ... (2756 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/208.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/208.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1)

#### 1. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L4-L12` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L5) · [Before (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L4-L12)

```diff
-   36570: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       WasmTextureWorker: () => rG
-     });
-     var wG = ZG(589),
-       SG = ZG(3168),
-       LG = ZG(36579),
-       yG = ZG.n(LG);
- 
+   34654: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L14` → after: `L7-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L7-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L7-L11) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L14)

```diff
-       return yG()('(()=>{var GG={d:(bG,ZG)=>{for(var wG in ZG)GG.o(ZG,wG)&&!GG.o(bG,wG)&&Object.defineProperty(bG,wG,{enumerable:!0,get:ZG[wG]})},o:(GG,bG)=>Object.prototype.hasOwnProperty.call(GG,bG),r:GG=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(G … [truncated]
+       return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
+     }
+ 
+     function SM(MM) {
+       return MM instanceof Uint8Array && (!OM() || !Buffer.isBuffer(MM))
```

#### 3. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L23` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L15) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L23)

```diff
-       return "" === GG ? [] : GG.split("\0")
+       return MM instanceof ArrayBuffer
```

#### 4. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L27-L28` → after: `L19-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L19-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L19-L37) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L27-L28)

```diff
-       if ("" !== GG)
-         for (const bG of GG.split("\n")) console.error(bG)
+       return !!OM() && Buffer.isBuffer(MM)
+     }
+     var PM = iM(34660).d,
+       nM = iM(34663).b,
+       QM = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
+     rM.e = function(MM) {
+       if (!SM(MM) && !jM(MM) && !aM(MM)) throw new TypeError(QM);
+       var rM = !1,
+         iM = !1;
+       SM(MM) ? rM = !0 : jM(MM) && (iM = !0, MM = new Uint8Array(MM));
+       var OM, PM, zM, LM = new nM(MM),
+         mM = LM.maxCompressedLength();
+       if (rM ? (OM = new Uint8Array(mM), zM = LM.compressToBuffer(OM)) : iM ? (OM = new ArrayBuffer(mM), PM = new Uint8Array(OM), zM = LM.compressToBuffer(PM)) : (OM = Buffer.alloc(mM), zM = LM.compressToBuffer(OM)), !OM.slice) {
+         var HM = new Uint8Array(Array.prototype.slice.call(OM, 0, zM));
+         if (rM) return HM;
+         if (iM) return HM.buffer;
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L32-L76` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L44) · [Before (L32-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L32-L76)

```diff
-       return async function(GG, bG) {
-         const ZG = Object.keys(GG),
-           wG = [],
-           SG = new Map,
-           LG = new Uint32Array(ZG.length);
-         for (const [yG, kG] of ZG.entries()) {
-           const {
-             url: bG
-           } = GG[kG];
-           SG.has(bG) || (SG.set(bG, wG.length), wG.push(bG)), LG[yG] = SG.get(bG)
-         }
-         return {
-           sources: await bG(wG),
-           names: ZG.join("\0"),
-           sourceOfName: LG
-         }
- ... (29 more removed lines; see GitHub link above)
+       return 506832829 * MM >>> rM
```

#### 6. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L80-L81` → after: `L48-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L48-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L48-L138) · [Before (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L80-L81)

```diff
-       const ZG = VG.h.from(GG, bG ? VG.g.Optional : VG.g.Error);
-       return ZG.code !== VG.g.Fetch && ZG.code !== VG.g.Error && (0, YG.f)(ZG.message), ZG
+       return MM[rM] + (MM[rM + 1] << 8) + (MM[rM + 2] << 16) + (MM[rM + 3] << 24)
+     }
+ 
+     function jM(MM, rM, iM) {
+       return MM[rM] === MM[iM] && MM[rM + 1] === MM[iM + 1] && MM[rM + 2] === MM[iM + 2] && MM[rM + 3] === MM[iM + 3]
+     }
+ 
+     function aM(MM, rM, iM, OM, SM) {
+       return iM <= 60 ? (OM[SM] = iM - 1 << 2, SM += 1) : iM < 256 ? (OM[SM] = 240, OM[SM + 1] = iM - 1, SM += 2) : (OM[SM] = 244, OM[SM + 1] = iM - 1 & 255, OM[SM + 2] = iM - 1 >>> 8, SM += 3),
+         function(MM, rM, iM, OM, SM) {
+           var jM;
+           for (jM = 0; jM < SM; jM++) iM[OM + jM] = MM[rM + jM]
+         }(MM, rM, OM, SM, iM), SM + iM
+     }
+ 
+     function PM(MM, rM, iM, OM) {
+ ... (75 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L85` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L142) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L85)

```diff
-       return GG.message ? new Error(`the texture worker failed: ${GG.message}`) : new VG.h(VG.g.Load, "the texture worker failed to start")
+       this.array = MM, this.pos = 0
```

#### 8. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L89-L91` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L286) · [Before (L89-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L89-L91)

```diff
-         this.worker = GG, this.failure = void 0, this.abandonStep = null, GG.addEventListener("error", (GG => {
-           GG.preventDefault(), this.failure ??= JG(GG)
-         }))
+         this.bytes = MM, this.pos = 0
```

#### 9. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L93-L99` → after: `L288-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L288-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L288-L449) · [Before (L93-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L93-L99)

```diff
-       static async generateRequired(GG, bG, ZG, LG) {
-         let yG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : VG.b,
-           YG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
-         const fG = (0, UG.l)();
-         if (null !== fG) throw dG(new VG.h(VG.g.Load, fG), !1);
-         let QG;
-         const JG = new AbortController;
+       seekToByte(MM) {
+         this.pos = 8 * MM
+       }
+       readBit() {
+         const MM = Math.floor(this.pos / 8),
+           rM = this.bytes[MM] ?? 0,
+           iM = 7 - (7 & this.pos),
+           OM = (rM & 1 << iM) >> iM;
+         return this.pos++, OM
+       }
+       readBits(MM) {
+         if (1 === MM) return this.readBit();
+         let rM = 0;
+         for (let iM = 0; iM < MM; iM++) rM <<= 1, rM |= this.readBit();
+         return rM
+       }
+ ... (146 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L172-L187` → after: `L452-L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L452-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L452-L545) · [Before (L172-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L172-L187)

```diff
-             {
-               assets: iG,
-               layerCap: CG,
-               warnings: WG
-             } = await QG.request({
-               type: "required",
-               module: zG,
-               inputs: EG,
-               isDefaultPack: LG,
-               maxLayerWidth: yG,
-               sheetLayers: YG,
-               ...oG
-             }, XG, ((GG, bG) => {
-               uG[GG] = bG
-             }));
-           return YG > 0 && (iG.blockAtlasPixels = function(GG, bG) {
+             iM = [],
+             OM = [];
+           for (const SM of mM(MM)) {
+             const jM = MM.subarray(SM.offset, SM.offset + SM.length),
+               aM = hM(jM[0]);
+             aM === nM.SPS ? rM.push(jM) : aM === nM.PPS ? iM.push(jM) : aM === nM.SPS_EXT && OM.push(jM)
+           }
+           if (0 === rM.length) return null;
+           if (0 === iM.length) return null;
+           const jM = rM[0],
+             aM = eM(jM);
+           (0, SM.J)(null !== aM);
+           const PM = 100 === aM.profileIdc || 110 === aM.profileIdc || 122 === aM.profileIdc || 144 === aM.profileIdc;
+           return {
+             configurationVersion: 1,
+             avcProfileIndication: aM.profileIdc,
+ ... (78 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L190-L192` → after: `L548-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L548-L549) · [Before (L190-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L190-L192)

```diff
-               const SG = GG[wG];
-               if (void 0 === SG) throw new Error(`the texture worker's sheet ${wG} of ${bG} didn't arrive`);
-               ZG.push(SG)
+               const OM = rM.getUint16(iM, !1);
+               iM += 2, PM.push(MM.subarray(iM, iM + OM)), iM += OM
```

#### 12. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L194-L198` → after: `L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L551) · [Before (L194-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L194-L198)

```diff
-             return ZG
-           }(uG, iG.imagesPerAtlas.length)), KG(WG), {
-             assets: iG,
-             layerCap: CG,
-             worker: QG
+             HM.sequenceParameterSetExt = PM
```

#### 13. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L201-L202` → after: `L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L555) · [Before (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L201-L202)

```diff
-           var zG;
-           throw JG.abort(), null === (zG = QG) || void 0 === zG || zG.terminate(), dG(EG, !1)
+           return jM.d._error("Error deserializing AVC Decoder Configuration Record:", rM), null
```

#### 14. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L204-L206` → after: `L557-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L557-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L557-L624) · [Before (L204-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L204-L206)

```diff
-       }
-       async generateOptional() {
-         let GG;
+       },
+       CM = {
+         1: {
+           num: 1,
+           den: 1
+         },
+         2: {
+           num: 12,
+           den: 11
+         },
+         3: {
+           num: 10,
+           den: 11
+         },
+         4: {
+           num: 16,
+ ... (52 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L208-L210` → after: `L626-L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L626-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L626-L752) · [Before (L208-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L208-L210)

```diff
-           GG = await this.request({
-             type: "optional"
-           }, [])
+           const rM = JM(MM),
+             iM = new zM.d(rM);
+           iM.skipBits(1), iM.skipBits(2);
+           if (7 !== iM.readBits(5)) return null;
+           const jM = iM.readAlignedByte(),
+             aM = iM.readAlignedByte(),
+             PM = iM.readAlignedByte();
+           (0, SM.Ac)(iM);
+           let nM = 1,
+             QM = 0,
+             LM = 0,
+             mM = 0;
+           if (100 === jM || 110 === jM || 122 === jM || 244 === jM || 44 === jM || 83 === jM || 86 === jM || 118 === jM || 128 === jM) {
+             nM = (0, SM.Ac)(iM), 3 === nM && (mM = iM.readBits(1)), QM = (0, SM.Ac)(iM), LM = (0, SM.Ac)(iM), iM.skipBits(1);
+             if (iM.readBits(1))
+               for (let MM = 0; MM < (3 !== nM ? 8 : 12); MM++) {
+ ... (111 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L212-L223` → after: `L754-L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L754-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L754-L1190) · [Before (L212-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L212-L223)

```diff
-           throw dG(bG, !0)
-         } finally {
-           this.terminate()
-         }
-         return KG(GG.warnings),
-           function(GG) {
-             let {
-               blocks: bG,
-               counts: ZG,
-               values: wG
-             } = GG;
-             const SG = {};
+           return jM.d._error("Error parsing AVC SPS:", rM), null
+         }
+       },
+       bM = MM => {
+         const rM = (0, SM.Ac)(MM);
+         MM.skipBits(4), MM.skipBits(4);
+         for (let iM = 0; iM <= rM; iM++)(0, SM.Ac)(MM), (0, SM.Ac)(MM), MM.skipBits(1);
+         MM.skipBits(5), MM.skipBits(5), MM.skipBits(5), MM.skipBits(5)
+       },
+       wM = (MM, rM) => {
+         if (rM.description) {
+           const iM = 3 & (0, SM.od)(rM.description)[21];
+           return HM(MM, iM + 1)
+         }
+         return mM(MM)
+       },
+ ... (421 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L225-L228` → after: `L1192-L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1192-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L1192-L1195) · [Before (L225-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L225-L228)

```diff
-             for (const [yG, kG] of QG(bG).entries()) {
-               const GG = [];
-               for (let bG = 0; bG < ZG[yG]; bG++, LG += 3) GG.push([wG[LG], wG[LG + 1], wG[LG + 2]]);
-               SG[kG] = GG
+             for (let iM = 0; iM < 8; iM++) {
+               const OM = rM.readAlignedByte();
+               if (MM += (127 & OM) * 2 ** (7 * iM), !(128 & OM)) break;
+               if (7 === iM && 128 & OM) return null
```

#### 18. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L230-L240` → after: `L1197-L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1197-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L1197-L1226) · [Before (L230-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L230-L240)

```diff
-             return SG
-           }(GG)
-       }
-       terminate() {
-         var GG;
-         this.worker.terminate(), null === (GG = this.abandonStep) || void 0 === GG || GG.call(this)
-       }
-       request(GG, bG, ZG) {
-         return new Promise(((wG, SG) => {
-           if (void 0 !== this.failure) return void SG(this.failure);
-           let LG = VG.i.None,
+             return MM > 2 ** 32 - 1 ? null : MM
+           };
+         for (; rM.getBitsLeft() >= 8;) {
+           rM.skipBits(1);
+           const OM = rM.readBits(4),
+             jM = rM.readBits(1),
+             aM = rM.readBits(1);
+           let PM;
+           if (rM.skipBits(1), jM && rM.skipBits(8), aM) {
+             const MM = iM();
+             if (null === MM) return;
+             PM = MM
+           } else PM = Math.floor(rM.getBitsLeft() / 8);
+           (0, SM.J)(rM.pos % 8 === 0), yield {
+             type: OM,
+             data: MM.subarray(rM.pos / 8, rM.pos / 8 + PM)
+ ... (14 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L242-L245` → after: `L1228-L1475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1228-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L1228-L1475) · [Before (L242-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L242-L245)

```diff
-             kG = null;
-           const UG = () => {
-             var GG;
-             null === (GG = kG) || void 0 === GG || GG.stop(), this.abandonStep = null, this.worker.onmessage = null, this.worker.onerror = null, this.worker.onmessageerror = null
+             PM = 0;
+           if (SM) jM = MM.readBits(5);
+           else {
+             let rM = 0;
+             if (MM.readBits(1)) {
+               MM.skipBits(32), MM.skipBits(32);
+               if (MM.readBits(1)) {
+                 let rM = 0;
+                 for (; rM < 32 && !MM.readBits(1);) rM++;
+                 rM < 32 && MM.skipBits(rM)
+               }
+               rM = MM.readBits(1), rM && (PM = MM.readBits(5), MM.skipBits(32), MM.skipBits(5), MM.skipBits(5))
+             }
+             const iM = MM.readBits(1),
+               OM = MM.readBits(5);
+             for (let SM = 0; SM <= OM; SM++) {
+ ... (232 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L247-L267` → after: `L1477-L1710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1477-L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L1477-L1710) · [Before (L247-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L247-L267)

```diff
-           this.abandonStep = () => {
-             UG(), SG(new Error("the texture worker was terminated"))
-           }, this.worker.onmessage = bG => {
-             let {
-               data: YG
-             } = bG;
-             var pG;
-             if ("progress" === YG.type) return LG = YG.stage, yG = YG.wasmBytes, void(null === (pG = kG) || void 0 === pG || pG.restart(LG === VG.i.Generating ? VG.e : VG.f));
-             "sheet" === YG.type && ZG ? ZG(YG.sheet, YG.pixels) : (UG(), "failed" === YG.type ? SG(YG.moduleLoad ? new VG.h(VG.g.Load, YG.reason) : function(GG, bG) {
-               let {
-                 reason: ZG,
-                 stack: wG
-               } = GG;
-               const SG = new Error(zG(ZG, bG));
-               void 0 !== wG && (SG.stack = wG);
-               return SG
- ... (5 more removed lines; see GitHub link above)
+         for (const {
+             key: LM,
+             value: JM
+           }
+           of(0, SM._b)(rM)) switch (LM) {
+           case "title":
+             QM("TITLE", JM);
+             break;
+           case "description":
+             QM("DESCRIPTION", JM);
+             break;
+           case "artist":
+             QM("ARTIST", JM);
+             break;
+           case "album":
+             QM("ALBUM", JM);
+ ... (218 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L269-L276` → after: `L1712-L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1712-L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L1712-L1744) · [Before (L269-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L269-L276)

```diff
-           try {
-             this.worker.postMessage(GG, bG), kG = (0, VG.l)((() => {
-               UG();
-               const bG = new VG.h("required" === GG.type ? `${VG.g.Stalled}${LG}` : VG.g.Optional, zG("the texture worker stopped responding", yG));
-               SG(bG)
-             }))
-           } catch (YG) {
-             UG(), SG(YG)
+         if (!rM.readBits(1)) return nM;
+         const QM = nr[rM.readBits(2)],
+           LM = 512 * (rM.readBits(3) + 1);
+         rM.readBits(1) && rM.skipBits(36);
+         const mM = rM.readBits(3) + 1,
+           HM = rM.readBits(3) + 1,
+           hM = [];
+         for (let SM = 0; SM < mM; SM++) hM.push(rM.readBits(iM + 1));
+         for (const zM of hM) rM.skipBits(8 * (0, SM.wc)(zM));
+         if (rM.readBits(1)) {
+           rM.skipBits(2);
+           const MM = rM.readBits(2) + 1 << 2,
+             iM = rM.readBits(2) + 1;
+           rM.skipBits(iM * MM)
+         }
+         for (let SM = 0; SM < HM; SM++) rM.skipBits(aM);
+ ... (17 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L278` → after: `L1746-L1754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1746-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L1746-L1754) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L278)

```diff
-         }))
+         }
+       },
+       hr = MM => {
+         const rM = new Uint8Array(20),
+           iM = (0, SM.nd)(rM);
+         iM.setUint32(0, MM.sampleRate), iM.setUint32(4, MM.bitRate), iM.setUint32(8, MM.bitRate), rM[12] = MM.pcmResolution;
+         const OM = MM.core && !MM.hasExtensions ? 1 : 0,
+           jM = new zM.d(rM);
+         return jM.seekToByte(13), jM.writeBits(2, Math.max(zr.indexOf(MM.sampleCount), 0)), jM.writeBits(5, OM), jM.writeBits(1, MM.core?.lfePresent ? 1 : 0), jM.writeBits(6, MM.core?.amode ?? 0), jM.writeBits(14, MM.core ? MM.core.frameSize - 1 : 0), jM.writeBits(1, 0), jM.write … [truncated]
```

#### 23. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L286` → after: `L1757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L1757) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L286)

```diff
-   36599: (GG, bG, ZG) => {
+   34713: (MM, rM, iM) => {
```

#### 24. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L291` → after: `L1773-L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1773-L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L1773-L1778) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L291)

```diff
-       l: () => yG
+       m: () => aM,
+       p: () => QM,
+       q: () => jM,
+       u: () => mM,
+       w: () => eM,
+       y: () => EM
```

#### 25. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L293-L313` → after: `L1780-L2238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1780-L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L1780-L2238) · [Before (L293-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L293-L313)

```diff
-     const wG = 1024,
-       SG = 1024 * wG;
- 
-     function LG(GG) {
-       return 2 ** Math.floor(Math.log2(Math.max(1, GG / SG)))
-     }
- 
-     function yG(GG) {
-       return (GG / SG).toFixed(1)
-     }
-   },
-   36579: GG => {
-     GG.exports = function(GG, bG, ZG, wG) {
-       var SG = self || window;
-       try {
-         try {
- ... (5 more removed lines; see GitHub link above)
+     var OM = iM(34720),
+       SM = iM(34685);
+     const jM = ["avc", "hevc", "vp9", "av1", "vp8", "prores"],
+       aM = ["pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", "pcm-u8", "pcm-s8", "ulaw", "alaw"],
+       PM = ["aac", "opus", "mp3", "vorbis", "flac", "ac3", "eac3", "dts"],
+       nM = [...PM, ...aM],
+       QM = ["webvtt"],
+       zM = [{
+         maxMacroblocks: 99,
+         maxBitrate: 64e3,
+         maxDpbMbs: 396,
+         level: 10
+       }, {
+         maxMacroblocks: 396,
+         maxBitrate: 192e3,
+         maxDpbMbs: 900,
+ ... (443 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L315-L320` → after: `L2240-L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2240-L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L2240-L2302) · [Before (L315-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L315-L320)

```diff
-           var yG = SG.URL || SG.webkitURL,
-             kG = yG.createObjectURL(LG),
-             UG = new SG[bG](kG, ZG);
-           return yG.revokeObjectURL(kG), UG
-         } catch (YG) {
-           return new SG[bG]("data:application/javascript,".concat(encodeURIComponent(GG)), ZG)
+           return PM
+         }
+         throw (0, SM.G)(MM), new TypeError(`Unhandled codec '${String(MM)}'.`)
+       },
+       UM = MM => {
+         const rM = MM.split(".");
+         return [1, 1, Number(rM[1]), 2, 1, Number(rM[2]), 3, 1, Number(rM[3]), 4, 1, rM[4] ? Number(rM[4]) : 1]
+       },
+       GM = MM => {
+         const rM = MM.split("."),
+           iM = Number(rM[1]),
+           OM = rM[2],
+           SM = (iM << 5) + Number(OM.slice(0, -1)),
+           jM = "H" === OM.slice(-1) ? 1 : 0,
+           aM = Number(rM[3]);
+         return [129, SM, (jM << 7) + ((8 === aM ? 0 : 1) << 6) + ((12 === aM ? 1 : 0) << 5) + ((rM[4] ? Number(rM[4]) : 0) << 4) + ((rM[5] ? Number(rM[5][0]) : 1) << 3) + ((rM[5] ? Number(rM[5][1]) : 1) << 2) + (rM[5] ? Number(rM[5][2]) : 0), 0]
+ ... (47 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L322-L324` → after: `L2304-L8278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2304-L8278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/208.js#L2304-L8278) · [Before (L322-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/208.js#L322-L324)

```diff
-       } catch (YG) {
-         if (!wG) throw Error("Inline worker is not supported");
-         return new SG[bG](wG, ZG)
+         if ("av1" === rM) {
+           if (!QM) {
+             const rM = MM.width * MM.height;
+             let iM = (0, SM.cc)(mM).level;
+             for (const MM of mM)
+               if (rM <= MM.maxPictureSize) {
+                 iM = MM.level;
+                 break
+               } return `av01.0.${iM.toString().padStart(2,"0")}M.08`
+           }
+           const rM = QM.profile,
+             iM = QM.level.toString().padStart(2, "0"),
+             aM = QM.tier ? "H" : "M",
+             PM = QM.bitDepth.toString().padStart(2, "0"),
+             nM = QM.monochrome ? "1" : "0",
+             zM = 100 * QM.chromaSubsamplingX + 10 * QM.chromaSubsamplingY + 1 * (QM.chromaSubsamplingX && QM.chromaSubsamplingY ? QM.chromaSamplePosition : 0);
+ ... (5959 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/209.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/209.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9)

#### 1. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L4)

```diff
-   41913: (GG, bG, ZG) => {
+   37207: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L6-L7)

```diff
-       loadGlbAsset: () => zb,
-       loadGlbTree: () => rb
+       WasmTextureWorker: () => lM
```

#### 3. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L9-L11` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L8-L10) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L9-L11)

```diff
-     var wG = ZG(38311),
-       SG = ZG(41918),
-       LG = ZG(36579),
+     var OM = iM(613),
+       SM = iM(3601),
+       jM = iM(34814),
```

#### 4. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L15-L62` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L14) · [Before (L15-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L15-L62)

```diff
-       return yG()('(()=>{class GG extends Error{}function bG(bG,ZG){const wG=bG._malloc(ZG);if(0===wG)throw new GG(`Draco: the decoder\'s heap refused ${ZG} bytes`);return wG}function ZG(GG){return{[GG.DT_FLOAT32]:[Float32Array,5126],[GG.DT_INT8]:[Int8Array,5120],[GG.DT_INT16]:[I … [truncated]
-     }
-     var UG = ZG(80);
-     const YG = 1e3;
-     let VG = null,
-       pG = null;
-     const fG = [],
-       QG = [];
-     let KG = 0;
-     const hG = {
-         decodes: 0,
-         workersStarted: 0,
-         mostWorkers: 0
-       },
-       dG = function(GG, bG) {
-         const ZG = GG ? Math.max(1, Math.min(Math.floor(.5 * GG), 4)) : 1;
- ... (32 more removed lines; see GitHub link above)
+       return aM()('(()=>{var MM={d:(rM,iM)=>{for(var OM in iM)MM.o(iM,OM)&&!MM.o(rM,OM)&&Object.defineProperty(rM,OM,{enumerable:!0,get:iM[OM]})},o:(MM,rM)=>Object.prototype.hasOwnProperty.call(MM,rM),r:MM=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(M … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L66-L107` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L23) · [Before (L66-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L66-L107)

```diff
-       const bG = fG.indexOf(GG); - 1 !== bG && fG.splice(bG, 1);
-       const ZG = QG.shift();
-       ZG && EG(ZG)
-     }
- 
-     function zG(GG, bG) {
-       GG.busy = !0, GG.releaseTimer && (clearTimeout(GG.releaseTimer), GG.releaseTimer = null);
-       GG.worker.then((ZG => {
-         const wG = KG++;
-         ZG.onmessage = SG => {
-           let {
-             data: LG
-           } = SG;
-           if (("decoded" === LG.id || "decodeError" === LG.id) && LG.seq === wG) {
-             if (ZG.onmessage = null, ZG.onerror = null, "decoded" === LG.id) return hG.decodes++, bG.resolve({
-               indices: LG.indices,
- ... (26 more removed lines; see GitHub link above)
+       return "" === MM ? [] : MM.split("\0")
```

#### 6. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L111-L135` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L27-L28) · [Before (L111-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L111-L135)

```diff
-       const bG = fG.find((GG => !GG.busy));
-       if (bG) zG(bG, GG);
-       else {
-         if (fG.length < dG) {
-           const bG = {
-             worker: JG(),
-             busy: !0,
-             releaseTimer: null
-           };
-           return fG.push(bG), hG.mostWorkers = Math.max(hG.mostWorkers, fG.length), void zG(bG, GG)
-         }
-         QG.push(GG)
-       }
-     }
- 
-     function oG(GG, bG, ZG) {
- ... (9 more removed lines; see GitHub link above)
+       if ("" !== MM)
+         for (const rM of MM.split("\n")) console.error(rM)
```

#### 7. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L353-L544` → after: `L32-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L32-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L32-L37) · [Before (L353-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L353-L544)

```diff
-       var ZG;
-       const wG = null !== (ZG = FG.get(GG)) && void 0 !== ZG ? ZG : bG(GG);
-       return FG.set(GG, wG), wG
-     }
- 
-     function aG(GG) {
-       const bG = GG.bufferView,
-         ZG = 5125 === GG.componentType ? Uint32Array : Uint16Array,
-         wG = bG.bytes.buffer,
-         SG = bG.bytes.byteOffset + (GG.byteOffset || 0);
-       return SG % ZG.BYTES_PER_ELEMENT !== 0 ? new ZG(wG.slice(SG, SG + GG.count * ZG.BYTES_PER_ELEMENT), 0) : new ZG(wG, SG, GG.count)
-     }
- 
-     function cG(GG, bG) {
-       if (GG.min && GG.max) return [new Float64Array(GG.min), new Float64Array(GG.max)];
-       const ZG = bG.find((GG => {
- ... (176 more removed lines; see GitHub link above)
+       return async function(MM, rM) {
+         const iM = Object.keys(MM),
+           OM = [],
+           SM = new Map,
+           jM = new Uint32Array(iM.length);
+         for (const [aM, PM] of iM.entries()) {
```

#### 8. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L546-L561` → after: `L39-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L39-L41) · [Before (L546-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L546-L561)

```diff
-             primitive: ZG
-           } = bG, wG = ZG.draco;
-           let SG = wG ? GG.get(wG.bufferView.index) : Promise.resolve(lG(ZG));
-           SG || (SG = IG(ZG, this.decode).then((GG => PG(ZG, GG))), GG.set(wG.bufferView.index, SG)), bG.geometry = await SG
-         })))
-       }
-       parentOf(GG) {
-         var bG;
-         return null !== (bG = this.parents.get(GG)) && void 0 !== bG ? bG : null
-       }
-       meshesUnder(GG) {
-         const bG = this.model.nodes.filter((GG => this.uses.has(GG)));
-         for (const wG of bG) {
-           const bG = this.uses.get(wG),
-             ZG = bG.find((bG => bG.name === GG));
-           if (ZG) return 1 === bG.length ? this.subtree(wG) : this.own.get(wG).includes(ZG) ? [ZG] : []
+             url: rM
+           } = MM[PM];
+           SM.has(rM) || (SM.set(rM, OM.length), OM.push(rM)), jM[aM] = SM.get(rM)
```

#### 9. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L621-L637` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L44-L46) · [Before (L621-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L621-L637)

```diff
-           url: this.imageUrl(yG),
-           noMipmap: HG(LG),
-           invertY: !1,
-           samplingMode: eG(LG),
-           data: {
-             bytes: kG.bytes,
-             mimeType: UG,
-             label: YG,
-             context: `/textures/${wG}`
-           },
-           sets: {
-             wrapU: TG(LG.wrapS),
-             wrapV: TG(LG.wrapT),
-             ...VG,
-             coordinatesIndex: null !== (ZG = null === SG || void 0 === SG ? void 0 : SG.texCoord) && void 0 !== ZG ? ZG : 0,
-             hasAlpha: bG
- ... (1 more removed lines; see GitHub link above)
+           sources: await rM(OM),
+           names: iM.join("\0"),
+           sourceOfName: jM
```

#### 10. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L639-L663` → after: `L48-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L48-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L48-L69) · [Before (L639-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L639-L663)

```diff
-       }
-     }
-     async function OG(GG, bG, ZG, wG, SG, LG) {
-       let yG = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
-       const kG = function(GG, bG, ZG) {
-           return "string" !== typeof bG ? {
-             url: "",
-             rootUrl: GG,
-             name: ZG()
-           } : bG ? bG.startsWith("data:") ? {
-             url: bG,
-             rootUrl: GG,
-             name: ""
-           } : GG ? {
-             url: GG + bG,
-             rootUrl: GG,
- ... (9 more removed lines; see GitHub link above)
+       }(MM, (async MM => {
+         const iM = await async function(MM, rM) {
+           const iM = new AbortController,
+             OM = () => {
+               iM.abort()
+             };
+           rM.addEventListener("abort", OM);
+           try {
+             const rM = await Promise.all(MM.map((async MM => {
+               try {
+                 const rM = await fetch(MM, {
+                   signal: iM.signal
+                 });
+                 if (!rM.ok) throw new Error(`HTTP ${rM.status}`);
+                 return [MM, await rM.blob()]
+               } catch (rM) {
+ ... (6 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L665-L682` → after: `L71-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L71-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L71-L76) · [Before (L665-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L665-L682)

```diff
-         }(ZG, GG, SG),
-         UG = {};
-       bG.addPendingData(UG);
-       try {
-         const ZG = mG(await async function(GG, bG) {
-             return "string" !== typeof bG ? bG : GG.url.startsWith("data:") ? (0, iG.s)(GG.url) : await (0, iG.u)(GG.url)
-           }(kG, GG)),
-           UG = new NG(ZG, wG, kG, function(GG, bG) {
-             let {
-               rootUrl: ZG,
-               name: wG
-             } = GG;
-             return !ZG.startsWith("file:") && wG ? ZG : `${ZG}${bG()}/`
-           }(kG, SG));
-         return await LG(UG), bG.importedMeshesFiles && (bG.loadingPluginName = "JF", yG && bG.importedMeshesFiles.push(kG.url)), UG
-       } finally {
- ... (2 more removed lines; see GitHub link above)
+         }(MM.filter((MM => !MM.startsWith("data:"))), rM);
+         return Promise.all(MM.map((MM => {
+           var rM;
+           return (0, mM.d)(null !== (rM = iM.get(MM)) && void 0 !== rM ? rM : MM)
+         })))
+       }))
```

#### 12. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L688-L694` → after: `L79-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L79-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L79-L81) · [Before (L688-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L688-L694)

```diff
-     function bb(GG) {
-       if (null === GG || void 0 === GG || !GG.min || !GG.max) return null;
-       const [bG, ZG, wG] = GG.min, [SG, LG, yG] = GG.max, {
-         BoundingInfo: kG,
-         mK: UG
-       } = (0, xG.c)();
-       return new kG(new UG(bG, ZG, wG), new UG(SG, LG, yG))
+     function dM(MM, rM) {
+       const iM = zM.k.from(MM, rM ? zM.j.Optional : zM.j.Error);
+       return iM.code !== zM.j.Fetch && iM.code !== zM.j.Error && (0, QM.h)(iM.message), iM
```

#### 13. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L698` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L85) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L698)

```diff
-       (0, BG.e)(GG) || (GG.geometry && GG.geometry.useBoundingInfoFromGeometry ? GG._updateBoundingInfo() : GG.refreshBoundingInfo(!0, !0))
+       return MM.message ? new Error(`the texture worker failed: ${MM.message}`) : new zM.k(zM.j.Load, "the texture worker failed to start")
```

#### 14. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L701-L734` → after: `L88-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L88-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L88-L91) · [Before (L701-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L701-L734)

```diff
-       constructor(GG, bG) {
-         this.Ah = GG, this.decode = bG, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
-       }
-       viewBytes(GG) {
-         let bG = this.viewData.get(GG.index);
-         return bG || (bG = this.bufferData.then((() => GG.bytes)), this.viewData.set(GG.index, bG)), bG
-       }
-       viewBuffer(GG) {
-         let bG = this.viewBuffers.get(GG.index);
-         return bG || (bG = this.viewBytes(GG).then((GG => new((0, xG.c)().VK)(this.Ah.CK(), GG, !1))), this.viewBuffers.set(GG.index, bG)), bG
-       }
-       vertexBuffer(GG, bG) {
-         const {
-           kind: ZG,
-           data: wG
-         } = bG, SG = `${GG.index}:${ZG}`;
- ... (18 more removed lines; see GitHub link above)
+       constructor(MM) {
+         this.worker = MM, this.failure = void 0, this.abandonStep = null, MM.addEventListener("error", (MM => {
+           MM.preventDefault(), this.failure ??= yM(MM)
+         }))
```

#### 15. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L736-L746` → after: `L93-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L93-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L93-L101) · [Before (L736-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L736-L746)

```diff
-       load(GG, bG, ZG) {
-         const wG = (0, BG.e)(ZG),
-           SG = GG => {
-             wG || (ZG._delayInfo = ZG._delayInfo || [], -1 === ZG._delayInfo.indexOf(GG) && ZG._delayInfo.push(GG))
-           },
-           LG = bG.draco;
-         if (LG) {
-           for (const GG in LG.attributeIds) SG(GG);
-           let yG = this.dracoGeometry.get(LG.bufferView.index);
-           return yG || (yG = this.viewBytes(LG.bufferView).then((async () => {
-             let SG;
+       static async generateRequired(MM, rM, iM, jM) {
+         let aM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : zM.c,
+           QM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
+         const mM = (0, nM.j)();
+         if (null !== mM) throw dM(new zM.k(zM.j.Load, mM), !1);
+         let HM;
+         const yM = new AbortController;
+         try {
+           HM = new lM(function() {
```

#### 16. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L748` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L103) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L748)

```diff
-               SG = await IG(bG, this.decode)
+               return new PM
```

#### 17. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L750` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L105) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L750)

```diff
-               throw new iG.k(`${GG}: ${UG instanceof Error?UG.message:String(UG)}`)
+               throw new zM.k(zM.j.Load, `the texture worker failed to start: ${(0,LM.d)(MM)}`)
```

#### 18. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L752-L814` → after: `L107-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L107-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L107-L111) · [Before (L752-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L752-L814)

```diff
-             const LG = PG(bG, SG);
-             if (wG) return LG;
-             const yG = bb(bG.position),
-               kG = new((0, xG.c)().MirroredGeometry)(ZG.name, this.Ah);
-             yG && (kG._boundingInfo = yG, kG.useBoundingInfoFromGeometry = !0), LG.indexData && kG.setIndices(LG.indexData);
-             for (const GG of LG.vertexAttributes) kG.setVerticesBuffer(this.layoutVertexBuffer(GG.data, GG), LG.vertexCount);
-             return kG.link(LG), kG
-           })), this.dracoGeometry.set(LG.bufferView.index, yG)), yG
-         }
-         const yG = [],
-           kG = lG(bG);
-         if (wG) return ZG.isUnIndexed = !kG.indexData, ZG.hasVertexAlpha = (0, Gb.g)(bG), Promise.resolve(kG);
-         const UG = new((0, xG.c)().MirroredGeometry)(ZG.name, this.Ah),
-           {
-             indexData: YG
-           } = kG;
- ... (47 more removed lines; see GitHub link above)
+           }());
+           const mM = (0, nM.c)().catch((MM => {
+               throw new zM.k(zM.j.Load, function(MM) {
+                 return `the texture module didn't load (${(0,LM.d)(MM)})`
+               }(MM))
```

#### 19. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L816-L817` → after: `L113-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L113-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L113-L185) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L816-L817)

```diff
-             wG = bG.iK.add((() => {
-               for (const GG of [...this.geometries, ...this.meshes, ...this.textures]) GG._rebuild()
+             dM = (async () => {
+               const jM = function(MM, rM, iM) {
+                 const OM = [],
+                   SM = new Map,
+                   jM = MM => {
+                     let rM = SM.get(MM);
+                     return void 0 === rM && (rM = OM.length, OM.push(MM), SM.set(MM, rM)), rM
+                   },
+                   aM = [],
+                   PM = [],
+                   nM = new Map,
+                   QM = (MM, rM) => {
+                     const iM = "object" === typeof MM && null !== MM && "animTextures" in MM ? MM.animTextures : void 0;
+                     if (!Array.isArray(iM) || !iM.every((MM => "string" === typeof MM))) throw new Error(`Block ${rM} has textureInfo the encoding doesn't cover`);
+                     aM.push(iM.length, ...iM.map(jM))
+                   };
+ ... (57 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L819-L820` → after: `L187-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L187-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L187-L198) · [Before (L819-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L819-L820)

```diff
-           this.release = () => {
-             GG.Gl.remove(ZG), bG.iK.remove(wG)
+           return QM > 0 && (bM.blockAtlasPixels = function(MM, rM) {
+             const iM = [];
+             for (let OM = 0; OM < rM; OM++) {
+               const SM = MM[OM];
+               if (void 0 === SM) throw new Error(`the texture worker's sheet ${OM} of ${rM} didn't arrive`);
+               iM.push(SM)
+             }
+             return iM
+           }(eM, bM.imagesPerAtlas.length)), hM(tM), {
+             assets: bM,
+             layerCap: wM,
+             worker: HM
```

#### 21. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L824-L853` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L205-L206) · [Before (L824-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L824-L853)

```diff
-       getNodes() {
-         return [...this.meshes, ...this.transformNodes]
-       }
-       addAllToScene() {
-         if (this.release) {
-           this.release(), this.release = null;
-           for (const GG of this.meshes) this.Ah.FwG(GG);
-           for (const GG of this.materials) this.Ah.addMaterial(GG);
-           for (const GG of this.geometries) this.Ah.addGeometry(GG);
-           for (const GG of this.transformNodes) this.Ah.addTransformNode(GG);
-           for (const GG of this.textures) this.Ah.addTexture(GG)
-         }
-       }
-       dispose() {
-         var GG;
-         for (const bG of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
- ... (14 more removed lines; see GitHub link above)
+       async generateOptional() {
+         let MM;
```

#### 22. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L855-L856` → after: `L208-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L208-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L208-L212) · [Before (L855-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L855-L856)

```diff
-           const bG = GG();
-           return this.container && (bG._parentContainer = this.container), bG
+           MM = await this.request({
+             type: "optional"
+           }, [])
+         } catch (rM) {
+           throw dM(rM, !0)
```

#### 23. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L858` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L214) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L858)

```diff
-           bG._blockEntityCollection = !1
+           this.terminate()
```

#### 24. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L861-L864` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L233) · [Before (L861-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L861-L864)

```diff
-       node(GG, bG) {
-         return this.create((() => this.lite ? bG ? (0, kb.c)(this.lite, GG) : (0, kb.u)(this.lite, GG) : bG ? new((0, xG.c)().Mesh)(GG, this.Ah) : new((0, xG.c)().TransformNode)(GG, this.Ah)))
-       }
-       async load() {
+       terminate() {
```

#### 25. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L866-L885` → after: `L235-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L235-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L235-L243) · [Before (L866-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L866-L885)

```diff
-         this.asset.model.json.nodes && this.createRoot();
-         const bG = this.lite ? null : this.Ah,
-           ZG = null !== (GG = null === bG || void 0 === bG ? void 0 : bG.blockMaterialDirtyMechanism) && void 0 !== GG && GG;
-         let wG;
-         bG && (bG.blockMaterialDirtyMechanism = !0);
-         try {
-           wG = this.loadScene()
-         } finally {
-           null === bG || void 0 === bG || bG._forceBlockMaterialDirtyMechanism(ZG)
-         }
-         await wG;
-         const {
-           root: SG,
-           tree: LG
-         } = this;
-         SG && (SG.DW(!0), LG.meshes.push(SG), LG.rootNodes.push(SG));
- ... (4 more removed lines; see GitHub link above)
+         this.worker.terminate(), null === (MM = this.abandonStep) || void 0 === MM || MM.call(this)
+       }
+       request(MM, rM, iM) {
+         return new Promise(((OM, SM) => {
+           if (void 0 !== this.failure) return void SM(this.failure);
+           let jM = zM.m.None,
+             aM = 0,
+             PM = null;
+           const nM = () => {
```

#### 26. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L887-L919` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L245) · [Before (L887-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L887-L919)

```diff
-             LG.meshes.push(bG);
-             const GG = bG.geometry;
-             GG && !LG.geometries.includes(GG) && LG.geometries.push(GG)
-           }
-         }
-       }
-       createRoot() {
-         const GG = this.node("__root__", !0);
-         this.root = GG, GG.DW(!1), this.Ah.useRightHandedSystem || Kb(qG, GG)
-       }
-       loadScene() {
-         const GG = [];
-         for (const bG of this.asset.model.rootNodes) GG.push(this.loadNode(this.asset.model.nodes[bG], (GG => {
-           GG.parent = this.root
-         })));
-         return GG.push(Promise.resolve()), Promise.all(GG).then((() => {}))
- ... (17 more removed lines; see GitHub link above)
+             null === (MM = PM) || void 0 === MM || MM.stop(), this.abandonStep = null, this.worker.onmessage = null, this.worker.onerror = null, this.worker.onmessageerror = null
```

#### 27. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L921-L929` → after: `L247-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L247-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L247-L252) · [Before (L921-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L921-L929)

```diff
-         if (null === GG.mesh) {
-           const bG = this.node(sG(GG), !1);
-           this.nodeObjects.set(GG.index, bG), SG(bG)
-         } else {
-           const bG = this.asset.model.meshes[GG.mesh];
-           wG.push(this.loadMesh(`/meshes/${bG.index}`, GG, bG, SG))
-         }
-         return Promise.all(wG).then((() => {
-           for (const ZG of null !== (bG = this.nodePrimitives.get(GG.index)) && void 0 !== bG ? bG : []) {
+           this.abandonStep = () => {
+             nM(), SM(new Error("the texture worker was terminated"))
+           }, this.worker.onmessage = rM => {
+             let {
+               data: QM
+             } = rM;
```

#### 28. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L931` → after: `L254-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L254-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L254-L276) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L931)

```diff
-             Zb(ZG)
+             if ("progress" === QM.type) return jM = QM.stage, aM = QM.wasmBytes, void(null === (LM = PM) || void 0 === LM || LM.restart(jM === zM.m.Generating ? zM.f : zM.h));
+             "sheet" === QM.type && iM ? iM(QM.sheet, QM.pixels) : (nM(), "failed" === QM.type ? SM(QM.moduleLoad ? new zM.k(zM.j.Load, QM.reason) : function(MM, rM) {
+               let {
+                 reason: iM,
+                 stack: OM
+               } = MM;
+               const SM = new Error(EM(iM, rM));
+               void 0 !== OM && (SM.stack = OM);
+               return SM
+             }(QM, aM)) : QM.type !== MM.type ? SM(new Error(`the texture worker answered ${QM.type} to ${MM.type}`)) : OM(QM))
+           }, this.worker.onerror = MM => {
+             nM(), SM(yM(MM))
+           }, this.worker.onmessageerror = () => {
+             nM(), SM(new Error("the texture worker's answer couldn't be read"))
+           };
+           try {
+ ... (7 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L1017-L1039` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L282-L283) · [Before (L1017-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L1017-L1039)

```diff
-     function Jb() {
-       Lb.e.dracoDecodes = hG.decodes, Lb.e.dracoWorkersStarted = hG.workersStarted, Lb.e.dracoMostWorkers = hG.mostWorkers
-     }
-     async function rb(GG, bG, ZG, SG, LG) {
-       try {
-         return await async function(GG, bG, ZG, SG, LG, yG) {
-           var kG;
-           let UG;
-           const YG = null === (kG = (0, Vb.i)()) || void 0 === kG ? void 0 : kG.HK,
-             VG = null !== YG && void 0 !== YG && YG.tK && bG === YG.Dv() ? YG : null,
-             pG = LG && !VG;
-           return await OG(GG, bG, ZG, SG, wG.e, (GG => (UG = new hb(bG, pG), new db(GG, bG, UG, pG, new wb(bG, SG), yG, VG).load())), !LG), UG
-         }(GG, bG, ZG, oG, SG, LG)
-       } finally {
-         Jb()
-       }
- ... (7 more removed lines; see GitHub link above)
+     function EM(MM, rM) {
+       return rM > 0 ? `${MM}, its module's memory ${Math.round(rM/2**20)} MiB` : MM
```

#### 30. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L1046` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L286) · [Before (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L1046)

```diff
-   41918: (GG, bG, ZG) => {
+   37223: (MM, rM, iM) => {
```

#### 31. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L1048` → after: `L288-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L288-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L288-L291) · [Before (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L1048)

```diff
-       e: () => yG
+       b: () => OM,
+       e: () => SM,
+       h: () => jM,
+       l: () => aM
```

#### 32. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L1050-L1051` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L293-L294) · [Before (L1050-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L1050-L1051)

```diff
-     var wG = ZG(116),
-       SG = ZG(1036);
+     const OM = 1024,
+       SM = 1024 * OM;
```

#### 33. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L1054` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L297) · [Before (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L1054)

```diff
-       return (0, wG.isDiscordClient)() ? `https://${SG.c.discordDomain}/${GG.href}` : GG.href
+       return 2 ** Math.floor(Math.log2(Math.max(1, MM / SM)))
```

#### 34. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L1056-L1058` → after: `L299-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L299-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L299-L301) · [Before (L1056-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L1056-L1058)

```diff
-     const yG = {
-       scriptUrl: LG(new ZG.U(ZG(41927))),
-       wasmBinaryUrl: LG(new ZG.U(ZG(41932)))
+ 
+     function aM(MM) {
+       return (MM / SM).toFixed(1)
```

#### 35. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L1061` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/209.js#L304) · [Before (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/209.js#L1061)

```diff
-   36579: GG => {
+   34814: MM => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/210.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/210.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2)

#### 1. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/210.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/210.js#L4)

```diff
-   41941: (GG, bG, ZG) => {
+   44153: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/210.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/210.js#L6)

```diff
-       default: () => LG
+       loadGlbAsset: () => Er,
+       loadGlbTree: () => lr
```

#### 3. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L8` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/210.js#L9-L11) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/210.js#L8)

```diff
-     var wG = ZG(36579),
+     var OM = iM(38885),
+       SM = iM(44160),
+       jM = iM(34814),
```

#### 4. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L12` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/210.js#L15) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/210.js#L12)

```diff
-       return SG()('/*! For license information please see wp3j0a.procGen.worker.e2e0d9dc.worker.js.LICENSE.txt */\n(()=>{var GG={55:GG=>{const bG="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,ZG=()=>bG.now(),wG=GG=>GG===1/0||(GG= … [truncated]
+       return aM()('(()=>{class MM extends Error{}function rM(rM,iM){const OM=rM._malloc(iM);if(0===OM)throw new MM(`Draco: the decoder\'s heap refused ${iM} bytes`);return OM}function iM(MM){return{[MM.DT_FLOAT32]:[Float32Array,5126],[MM.DT_INT8]:[Int8Array,5120],[MM.DT_INT16]:[I … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L15` → after: `L1046-L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L1046-L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/210.js#L1046-L1061) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/210.js#L15)

```diff
-   36579: GG => {
+   44160: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => aM
+     });
+     var OM = iM(119),
+       SM = iM(1211);
+ 
+     function jM(MM) {
+       return (0, OM.isDiscordClient)() ? `https://${SM.e.discordDomain}/${MM.href}` : MM.href
+     }
+     const aM = {
+       scriptUrl: jM(new iM.U(iM(44167))),
+       wasmBinaryUrl: jM(new iM.U(iM(44169)))
+     }
+   },
+   34814: MM => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/211.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/211.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56)

#### 1. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/211.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/211.js#L4)

```diff
-   41966: (GG, bG, ZG) => {
+   44176: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/211.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/211.js#L8)

```diff
-     var wG = ZG(36579),
+     var OM = iM(34814),
```

#### 3. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/211.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/211.js#L12)

```diff
-       return SG()('(()=>{var GG={13:(GG,bG,ZG)=>{GG.exports=ZG.p+"static/media/zstdDecodeWorker.a1e056be4f83519e1baf.js"},21:(GG,bG,ZG)=>{GG.exports=ZG.p+"static/media/bloxd_wasm_bg.59e6d1d4e06311254dc6.wasm"},29:(GG,bG,ZG)=>{GG.exports=ZG.p+"static/media/bloxd_wasm_textures_bg.b … [truncated]
+       return SM()('/*! For license information please see fo1voe.procGen.worker.2cdf2472.worker.js.LICENSE.txt */\n(()=>{var MM={67:MM=>{const rM="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,iM=()=>rM.now(),OM=MM=>MM===1/0||(MM= … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/211.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/211.js#L15)

```diff
-   36579: GG => {
+   34814: MM => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/212.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/212.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02)

#### 1. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/212.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/212.js#L2)

```diff
- export const ids = [212, 213];
+ export const ids = [212];
```

#### 2. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/212.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/212.js#L4)

```diff
-   36586: (GG, bG, ZG) => {
+   44193: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L6-L10` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/212.js#L6) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/212.js#L6-L10)

```diff
-       CAPPED_COUNTS_VISIT_CAP: () => LG,
-       reportCappedWasmFailure: () => UG,
-       reportUncappedWasmFailure: () => kG,
-       reportWasmCrash: () => SG,
-       reportWasmFailure: () => yG
+       default: () => jM
```

#### 4. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L12-L77` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/212.js#L8-L9) · [Before (L12-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/212.js#L12-L77)

```diff
-     var wG = ZG(2920);
- 
-     function SG(GG) {
-       (0, wG.reportClientError)("wasm_load", GG.message, GG.code)
-     }
-     const LG = wG.MAX_ERRORS_PER_VISIT - 4;
- 
-     function yG(GG, bG, ZG) {
-       (0, wG.reportClientError)(GG, bG, ZG, !1)
-     }
- 
-     function kG(GG, bG, ZG) {
-       (0, wG.reportClientError)(GG, bG, ZG, !1, 1 / 0)
-     }
- 
-     function UG(GG, bG, ZG) {
- ... (50 more removed lines; see GitHub link above)
+     var OM = iM(34814),
+       SM = iM.n(OM);
```

#### 5. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L80-L113` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/212.js#L12) · [Before (L80-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/212.js#L80-L113)

```diff
-       if (EG()) return async () => ((0, UG.h)("unsupported", 0), WG("unsupported", "This browser has no WebAssembly"), !1);
-       const GG = {
-         reloadFailedDownload: !0
-       };
-       return uG(GG), async () => {
-         var bG;
-         const ZG = performance.now();
-         await uG(GG);
-         const wG = (performance.now() - ZG) / 1e3;
-         if ((0, SG.S)()) return (0, UG.h)("ready", wG), dG || (dG = !0, (0, SG.X)((() => {
-           if ("call" !== (0, SG.r)()) return;
-           const GG = (0, SG.o)(),
-             bG = (0, pG.i)(GG, SG.I, SG.eb),
-             ZG = (0, SG.y)().buffer.byteLength,
-             wG = (0, pG.e)(bG.kind, bG.refusedBytes),
-             LG = wG ? "alloc_failed" : bG.kind,
- ... (18 more removed lines; see GitHub link above)
+       return SM()('(()=>{var MM={18:(MM,rM,iM)=>{MM.exports=iM.p+"static/media/bloxd_wasm_bg.5656165110e66edd3713.wasm"},24:(MM,rM,iM)=>{MM.exports=iM.p+"static/media/bloxd_wasm_textures_bg.3e0bb5a054f9d6224a0d.wasm"},11:(MM,rM,iM)=>{MM.exports=iM.p+"static/media/zstdDecodeWorker … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L116-L158` → after: `L15-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/212.js#L15-L17) · [Before (L116-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/212.js#L116-L158)

```diff
-   36606: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => kG,
-       e: () => YG,
-       g: () => yG,
-       h: () => pG
-     });
-     var wG = ZG(36594),
-       SG = ZG(5);
-     const LG = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;
- 
-     function yG(GG) {
-       if (GG instanceof WebAssembly.RuntimeError) return !0;
-       const bG = GG instanceof Error ? GG.stack : void 0;
-       return "string" === typeof bG && LG.test(bG)
-     }
- ... (27 more removed lines; see GitHub link above)
+   34814: MM => {
+     MM.exports = function(MM, rM, iM, OM) {
+       var SM = self || window;
```

#### 7. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L338-L1209` → after: `L20-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/212.js#L20-L22) · [Before (L338-L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/212.js#L338-L1209)

```diff
-           const ZG = zb.b8Ij(this.__wbg_ptr);
-           return GG = ZG[0], bG = ZG[1], OG(ZG[0], ZG[1])
-         } finally {
-           zb.jb8N(GG, bG, 1)
-         }
-       }
-     }
-     Symbol.dispose && (LG.prototype[Symbol.dispose] = LG.prototype.free);
-     class yG {
-       __destroy_into_raw() {
-         const GG = this.__wbg_ptr;
-         return this.__wbg_ptr = 0, PG.unregister(this), GG
-       }
-       free() {
-         const GG = this.__destroy_into_raw();
-         zb.btjj(GG, 0)
- ... (856 more removed lines; see GitHub link above)
+           var jM;
+           try {
+             jM = new SM.Blob([MM])
```

#### 8. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L1211-L1220` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/212.js#L24) · [Before (L1211-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/212.js#L1211-L1220)

```diff
-             if (! function(GG) {
-                 switch (GG) {
-                   case "basic":
-                   case "cors":
-                   case "default":
-                     return !0
-                 }
-                 return !1
-               }(GG.type) || "application/wasm" === GG.headers.get("Content-Type")) throw ZG;
-             console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ZG)
+             (jM = new(SM.BlobBuilder || SM.WebKitBlobBuilder || SM.MozBlobBuilder || SM.MSBlobBuilder)).append(MM), jM = jM.getBlob()
```

#### 9. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L1222-L1229` → after: `L26-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L26-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/212.js#L26-L31) · [Before (L1222-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/212.js#L1222-L1229)

```diff
-           const wG = await GG.arrayBuffer();
-           return await WebAssembly.instantiate(wG, bG)
-         } {
-           const ZG = await WebAssembly.instantiate(GG, bG);
-           return ZG instanceof WebAssembly.Instance ? {
-             instance: ZG,
-             module: GG
-           } : ZG
+           var aM = SM.URL || SM.webkitURL,
+             PM = aM.createObjectURL(jM),
+             nM = new SM[rM](PM, iM);
+           return aM.revokeObjectURL(PM), nM
+         } catch (QM) {
+           return new SM[rM]("data:application/javascript,".concat(encodeURIComponent(MM)), iM)
```

#### 10. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L1231-L1324` → after: `L33-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L33-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/212.js#L33-L35) · [Before (L1231-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/212.js#L1231-L1324)

```diff
-       }(await GG, bG);
-       return ob(ZG, wG)
-     }
-   },
-   36632: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG,
-       g: () => kG,
-       h: () => UG
-     });
-     var wG = ZG(36636),
-       SG = ZG(2868),
-       LG = ZG(36643);
-     const yG = {
-       name: SG.d,
-       url: () => new ZG.U(ZG(36650)),
- ... (78 more removed lines; see GitHub link above)
+       } catch (QM) {
+         if (!OM) throw Error("Inline worker is not supported");
+         return new SM[rM](OM, iM)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/213.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/213.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723)

#### 1. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L4-L10` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/213.js#L4-L9) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/213.js#L4-L10)

```diff
-   36586: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       CAPPED_COUNTS_VISIT_CAP: () => LG,
-       reportCappedWasmFailure: () => UG,
-       reportUncappedWasmFailure: () => kG,
-       reportWasmCrash: () => SG,
-       reportWasmFailure: () => yG
+   37885: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => SM,
+       h: () => jM,
+       j: () => PM,
+       l: () => aM
```

#### 2. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L12` → after: `L11-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L11-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/213.js#L11-L438) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/213.js#L12)

```diff
-     var wG = ZG(2920);
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
+ ... (412 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L15` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/213.js#L441) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/213.js#L15)

```diff
-       (0, wG.reportClientError)("wasm_load", GG.message, GG.code)
+       return Math.min(1, Math.max(0, MM))
```

#### 4. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L20` → after: `L445-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L445-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/213.js#L445-L447) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/213.js#L20)

```diff
-       (0, wG.reportClientError)(GG, bG, ZG, !1)
+       const OM = 1 - iM,
+         SM = iM * iM;
+       return 3 * (OM * OM) * iM * MM + 3 * OM * SM * rM + SM * iM
```

#### 5. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L24` → after: `L451-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L451-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/213.js#L451-L623) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/213.js#L24)

```diff
-       (0, wG.reportClientError)(GG, bG, ZG, !1, 1 / 0)
+       const OM = 1 - iM;
+       return 3 * (OM * OM) * MM + 6 * OM * iM * (rM - MM) + 3 * (iM * iM) * (1 - rM)
+     }
+ 
+     function zM(MM, rM) {
+       const iM = PM(MM);
+       if (0 === iM || 1 === iM) return iM;
+       const OM = PM(rM[0]),
+         SM = rM[1],
+         jM = PM(rM[2]),
+         aM = rM[3];
+       if (OM === SM && jM === aM) return iM;
+       let zM = iM,
+         LM = !1;
+       for (let mM = 0; mM < 8; mM++) {
+         const MM = nM(OM, jM, zM) - iM;
+ ... (157 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L28` → after: `L627-L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L627-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/213.js#L627-L895) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/213.js#L28)

```diff
-       (0, wG.reportClientError)(GG, bG, ZG, !1, LG)
+       const SM = nM(MM, rM),
+         {
+           numLines: aM,
+           charsPerLine: PM
+         } = OM[iM];
+       return {
+         numLines: Math.max(1, Math.floor(aM / jM * SM.height)),
+         charsPerLine: Math.max(1, Math.floor(PM * SM.width))
+       }
+     }
+ 
+     function zM(MM, rM, iM, OM) {
+       const {
+         numLines: SM,
+         charsPerLine: jM
+       } = QM(iM, OM, rM);
+ ... (253 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/214.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/214.js` (56 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352)

#### 1. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L4-L19` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L4) · [Before (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L4-L19)

```diff
-   41199: (GG, bG, ZG) => {
-     function wG(GG, bG, ZG) {
-       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(GG, bG).getContext("2d", ZG);
-       const wG = document.createElement("canvas");
-       return wG.width = GG, wG.height = bG, wG.getContext("2d", ZG)
-     }
- 
-     function SG(GG, bG) {
-       return GG.getContext("2d", bG)
-     }
-     ZG.d(bG, {
-       d: () => SG,
-       f: () => wG
-     })
-   },
-   41159: (GG, bG, ZG) => {
+   40148: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L23-L26` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L9-L10) · [Before (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L23-L26)

```diff
-     const wG = 1 << 20,
-       SG = 1 << 21,
-       LG = 1024,
-       yG = 2048;
+     var OM = iM(4443);
+     let SM = null;
```

#### 3. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L28-L32` → after: `L12-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L12-L13) · [Before (L28-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L28-L32)

```diff
-     function kG(GG, bG, ZG) {
-       const kG = GG + wG,
-         UG = bG + LG,
-         YG = ZG + wG;
-       return kG < 0 || kG >= SG || YG < 0 || YG >= SG || UG < 0 || UG >= yG ? -1 : (kG * SG + YG) * yG + UG
+     function jM(MM) {
+       return null !== SM && MM === SM
```

#### 4. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L53-L86` → after: `L16-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L16-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L16-L18) · [Before (L53-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L53-L86)

```diff
-     function LG(GG) {}
- 
-     function yG(GG) {}
- 
-     function kG(GG) {}
- 
-     function UG(GG, bG, ZG) {}
- 
-     function YG(GG) {}
- 
-     function VG(GG) {}
-   },
-   41143: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => zG,
-       g: () => KG,
- ... (18 more removed lines; see GitHub link above)
+     function aM() {
+       this.uB = !1, this.stopPropagation = !1, this.pB = !1, this.disabled = !1
+     }
```

#### 5. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L89-L169` → after: `L21-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L21-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L21-L37) · [Before (L89-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L89-L169)

```diff
-         this.memory = GG, this.access = bG, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.rp = 0, this.u32 = new LG.m(0), this.f32 = new LG.f(0), this.u8 = new LG.c(0), this.dataView = new LG.j(new ArrayBuffer(0)), this.refresh()
-       }
-       refresh() {
-         this.ptr = this.access.ptr(), this.rp = this.access.rp(), this.buffer = (0, LG.H)(this.memory()), this.u32 = new LG.m(this.buffer, this.ptr, this.rp >>> 2), this.f32 = new LG.f(this.buffer, this.ptr, this.rp >>> 2), this.u8 = new LG.c(this.buffer, this.ptr, this.rp), this … [truncated]
-       }
-       ensureViews() {
-         (0, LG.H)(this.memory()) !== this.buffer && this.refresh()
-       }
-       get view() {
-         return this.ensureViews(), this.dataView
-       }
-       room(GG) {
-         return !!this.fits(GG) || (this.dropped++, !1)
-       }
-       fits(GG) {
-         let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
- ... (65 more removed lines; see GitHub link above)
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
+         }, "loading" !== document.readyState ? QM(this) : document.addEventListener("DOMContentLoaded", (MM => {
+           QM(this)
+         }), {
+           once: !0
+ ... (1 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L171-L172` → after: `L39-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L39-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L39-L51) · [Before (L171-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L171-L172)

```diff
-       growForCmd(GG) {
-         return this.fits(wG.w + (0, wG.ve)(GG), 0)
+       bind(MM) {
+         for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
+         iM.forEach((rM => {
+           var iM = this._keyBindmap[rM] || [];
+           iM.includes(MM) || (iM.push(MM), this._keyBindmap[rM] = iM)
+         })), this.state[MM] = !!this.state[MM], this.pressCount[MM] = this.pressCount[MM] || 0, this.releaseCount[MM] = this.releaseCount[MM] || 0
+       }
+       unbind(MM) {
+         for (var rM in this._keyBindmap) {
+           var iM = this._keyBindmap[rM],
+             OM = iM.indexOf(MM);
+           OM > -1 && iM.splice(OM, 1)
+         }
```

#### 7. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L174-L176` → after: `L53-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L53-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L53-L60) · [Before (L174-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L174-L176)

```diff
-       writeCmd(GG, bG, ZG) {
-         const wG = this.hQ(GG, bG, ZG.byteLength);
-         return !(wG < 0) && (this.u8.set(ZG, wG), !0)
+       getBindings() {
+         var MM = {};
+         for (var rM in this._keyBindmap) {
+           this._keyBindmap[rM].forEach((iM => {
+             MM[iM] = MM[iM] || [], MM[iM].push(rM)
+           }))
+         }
+         return MM
```

#### 8. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L178-L179` → after: `L62-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L62-L63) · [Before (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L178-L179)

```diff
-       copyWritten(GG, bG) {
-         return this.ensureViews(), this.u8.slice(GG, GG + bG)
+       bL() {
+         nM(this.oB), nM(this.pressCount), nM(this.releaseCount)
```

#### 9. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L185-L188` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L68) · [Before (L185-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L185-L188)

```diff
-       if (0 === GG) return kG;
-       const bG = new LG.c(wG.Rb);
-       for (let ZG = 0; ZG < wG.Rb; ZG++) bG[ZG] = GG >>> 8 * ZG & 255;
-       return bG
+       for (var rM in MM) MM[rM] = 0
```

#### 10. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L190-L212` → after: `L70-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L70-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L70-L78) · [Before (L190-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L190-L212)

```diff
-     class YG {
-       constructor(GG, bG) {
-         this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new yG(bG, {
-           ptr: () => GG.lp(),
-           rp: () => GG.BLG(),
-           reserve: bG => GG.VyG(bG)
-         }), this.net = new yG(bG, {
-           ptr: () => GG.kyG(),
-           rp: () => GG.yyG(),
-           reserve: bG => GG.pyG(bG)
-         }), this.worker = new yG(bG, {
-           ptr: () => GG.cyG(),
-           rp: () => GG.ayG(),
-           reserve: bG => GG.fyG(bG)
-         }), this.cmd = new yG(bG, {
-           ptr: () => GG.eLG(),
- ... (7 more removed lines; see GitHub link above)
+ 
+     function QM(MM) {
+       window.addEventListener("keydown", dM.bind(null, MM, !0), !1), window.addEventListener("keyup", dM.bind(null, MM, !1), !1);
+       var rM = {
+         passive: !0
+       };
+       MM.element.addEventListener("touchstart", HM.bind(void 0, MM), {
+         passive: !1
+       }), MM.element.addEventListener("touchend", JM.bind(void 0, MM), rM), MM.element.addEventListener("mousedown", yM.bind(null, MM, !0), rM), window.document.addEventListener("mouseup", yM.bind(null, MM, !1), rM), MM.element.addEventListener("touchmove", lM.bind(null, MM), rM) … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L214-L235` → after: `L80-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L80-L82) · [Before (L214-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L214-L235)

```diff
-     var VG = ZG(36606),
-       pG = ZG(2388),
-       fG = ZG(4804),
-       QG = ZG(41162);
-     const KG = "coreFrame",
-       hG = "fatalStatus",
-       dG = "otherCall",
-       JG = "coreRings",
-       rG = "netIn",
-       zG = "abi",
-       EG = "netOut",
-       oG = "workerOut",
-       XG = "worldgenHost",
-       uG = "eventWalker",
-       iG = "netEvent",
-       CG = "envEvent",
- ... (6 more removed lines; see GitHub link above)
+     var zM = 0,
+       LM = 0,
+       mM = null;
```

#### 12. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L238-L250` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L85) · [Before (L238-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L238-L250)

```diff
-       GG.forEachWorkerOut(((ZG, SG, LG) => {
-         if ((0, wG.ie)(ZG)) try {
-           var yG;
-           null === (yG = bG.worldgen) || void 0 === yG || yG.take(ZG, LG)
-         } catch (UG) {
-           GG.crash(XG, UG)
-         } else try {
-           var kG;
-           null === (kG = bG.mesh) || void 0 === kG || kG.take(ZG, SG, LG)
-         } catch (UG) {
-           GG.crash(aG, UG)
-         }
-       }))
+       rM.preventDefault(), hM(rM)
```

#### 13. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L254` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L88) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L254)

```diff
-     function jG(GG, bG) {
+     function hM(MM) {
```

#### 14. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L256-L260` → after: `L90-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L90-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L90-L96) · [Before (L256-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L256-L260)

```diff
-       const wG = () => {
-         ZG = !1, bG()
-       };
-       return () => {
-         !ZG && GG.cursor >= lG && (ZG = !0, queueMicrotask(wG))
+       for (let iM = 0; iM < MM.touches.length; ++iM)
+         if (MM.touches[iM].identifier === mM) {
+           rM = !0;
+           break
+         } if (!rM) {
+         const rM = MM.changedTouches[0];
+         zM = rM.clientX, LM = rM.clientY, mM = rM.identifier
```

#### 15. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L265-L266` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L100-L101) · [Before (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L265-L266)

```diff
-     function MG(GG) {
-       return FG.has(GG.site) ? GG.error instanceof WebAssembly.RuntimeError || (0, SG.j)(GG.error) : !PG.has(GG.site) && GG.error instanceof Error
+     function JM(MM, rM) {
+       for (var iM = rM.changedTouches, OM = 0; OM < iM.length; ++OM) iM[OM].identifier === mM && (mM = null)
```

#### 16. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L275-L288` → after: `L104-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L104-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L104-L108) · [Before (L275-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L275-L288)

```diff
-     function RG(GG, bG) {
-       const {
-         site: ZG,
-         error: SG,
-         header: LG
-       } = GG, yG = LG ? (0, wG.de)(LG.lastError) : "noFrame", kG = `CORE-${ZG===hG?yG:ZG}`, UG = null === SG || void 0 === SG ? "" : ` ${(0,VG.h)(SG)}`, YG = {
-         site: ZG,
-         wasmBuild: bG.wasm,
-         clientVersion: bG.client
-       };
-       return LG && (YG.status = String(LG.status), YG.lastError = yG, YG.lastErrorCode = String(LG.lastError), YG.lastErrorDetail = String(LG.lastErrorDetail), YG.errorCount = String(LG.errorCount), YG.frameIndex = String(LG.frameIndex), YG.tickIndex = String(LG.tickIndex)), {
-         code: kG,
-         message: `core ${ZG}, last error ${yG};${UG}`,
-         details: YG
+     function dM(MM, rM, iM) {
+       if (!MM.ignoreEvent(iM)) try {
+         bM(MM, iM), rM && iM.isTrusted && !iM.repeat && MM._keyStates[iM.code] && wM(MM, iM.code)
+       } finally {
+         tM(iM.code, rM, MM, iM)
```

#### 17. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L291-L308` → after: `L111-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L111-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L111-L126) · [Before (L291-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L291-L308)

```diff
-     class TG {
-       constructor(GG, bG, ZG) {
-         this.core = GG, this.memory = bG, this.handlers = ZG, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = nu … [truncated]
-           ptr: 0,
-           len: 0,
-           net: sG,
-           netOffsets: this.netOffsets,
-           kind: "none"
-         }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new YG(GG, bG)
-       }
-       get netKeptFrames() {
-         return this.keptFrames
-       }
-       get netWrittenSinceFrame() {
-         return this.rings.net.cursor - this.netKept
-       }
- ... (2 more removed lines; see GitHub link above)
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

#### 18. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L310-L311` → after: `L128-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L128-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L128-L184) · [Before (L310-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L310-L311)

```diff
-       framePaces(GG) {
-         if (this.stopped || this.drawsHeld) return !1;
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
+ ... (41 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L313` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L186) · [Before (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L313)

```diff
-           return this.core.NLG(GG)
+           return window.self !== window.top
```

#### 20. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L315` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L188) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L315)

```diff
-           return this.crash(KG, bG), !1
+           return !0
```

#### 21. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L318-L398` → after: `L215-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L215-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L215-L230) · [Before (L318-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L318-L398)

```diff
-       get isStopped() {
-         return this.stopped
-       }
-       frame(GG, bG) {
-         var ZG;
-         let LG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (this.stopped) return !1;
-         if (!this.writePendingInput()) return !1;
-         const {
-           input: yG,
-           net: kG,
-           worker: UG,
-           cmd: YG
-         } = this.rings, VG = kG.cursor, pG = bG && !this.drawsHeld;
-         let dG = wG.T.Fatal;
-         const JG = yG.cursor,
- ... (65 more removed lines; see GitHub link above)
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
```

#### 22. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L400-L401` → after: `L232-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L232-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L232-L261) · [Before (L400-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L400-L401)

```diff
-         }
-         return this.handEnvEvents()
+         }(MM, rM, iM, OM)
+       }))), "button" in OM || (iM.uB && !OM.defaultPrevented && OM.preventDefault(), iM.stopPropagation && OM.stopPropagation()))
+     }
+ 
+     function gM(MM, rM) {
+       return MM ? !rM : rM
+     }
+   },
+   37620: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => JM,
+       d: () => dM
+     });
+     var OM = iM(44),
+       SM = iM(1516),
+       jM = iM(2084),
+ ... (14 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L403-L420` → after: `L263-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L263-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L263-L306) · [Before (L403-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L403-L420)

```diff
-       handEnvEvents() {
-         for (const LG of this.graceEvents) {
-           if (this.stopped) return !1;
-           try {
-             var GG, bG;
-             null === (GG = (bG = this.handlers).onReconnectGrace) || void 0 === GG || GG.call(bG, LG)
-           } catch (SG) {
-             return this.crashOn(iG, SG), !1
-           }
-         }
-         for (const LG of this.envEvents) {
-           if (this.stopped) return !1;
-           try {
-             var ZG, wG;
-             null === (ZG = (wG = this.handlers).onEnvEvent) || void 0 === ZG || ZG.call(wG, LG)
-           } catch (SG) {
- ... (2 more removed lines; see GitHub link above)
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
+ ... (28 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L422-L425` → after: `L308-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L308-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L308-L326) · [Before (L422-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L422-L425)

```diff
-         return !this.stopped
-       }
-       setEventWalker(GG) {
-         this.eventWalker = GG
+       }), []), (0, zM.jsx)("div", {
+         className: "DirectionalDamage",
+         children: LM.map(((MM, rM) => (0, zM.jsx)("div", {
+           ref: rM => {
+             MM.mN = rM
+           },
+           className: QM()("DamageIndicator", {
+             DamageIndicatorFullCircle: (0, PM.J)(MM.direction),
+             DamageIndicatorIdle: null === MM.source
+           })
+         }, rM)))
+       })
+     }));
+ 
+     function dM(MM) {
+       for (const rM of LM) {
+ ... (3 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L427-L442` → after: `L328-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L328-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L328-L400) · [Before (L427-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L427-L442)

```diff
-       writePendingInput() {
-         if (this.stopped) return !1;
-         const {
-           input: GG
-         } = this.rings;
-         try {
-           const bG = this.unsentUiPrefs;
-           bG && GG.writeRecord(wG.yb.UiPrefs, 0, bG.nametagCutDistance, 0, (0, wG.Ce)(bG)) && (this.unsentUiPrefs = null);
-           const ZG = this.unsentEnvPrefs;
-           ZG && GG.writeRecord(wG.yb.EnvPrefs, (0, wG.fe)(ZG), ZG.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
-           const SG = this.unsentLookPrefs;
-           SG && GG.writeRecord(wG.yb.Sensitivity, 0, SG.mouse, SG.touch, (0, pG.n)(SG.fovPercent)) && (this.unsentLookPrefs = null);
-           let LG = 0;
-           for (const {
-               aux: wG,
-               payload: yG
+     }
+   },
+   34822: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => SM,
+       d: () => jM
+     });
+     let OM = !1;
+ 
+     function SM() {
+       return OM
+     }
+ 
+     function jM(MM) {
+       return OM !== MM && (OM = MM, !0)
+     }
+ ... (57 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L444-L447` → after: `L402-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L402-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L402-L411) · [Before (L444-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L444-L447)

```diff
-             of this.unsentOptions) {
-             if (!GG.writeOptions(wG, yG)) {
-               if (GG.cursor > 0) break;
-               this.optionsDropped++
+           };
+           return {
+             update: (MM, SM, aM, PM) => {
+               MM.camera.hq !== jM && (MM.camera.hq = jM), OM = !0, rM = (0, HM.n)(iM, SM, aM, PM, performance.now())
+             },
+             release: () => {
+               OM = !1, rM = hM, iM.reset()
+             },
+             uninstall: MM => {
+               MM.camera.hq === jM && (MM.camera.hq = null)
```

#### 27. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L451-L571` → after: `L414-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L414-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L414-L423) · [Before (L451-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L451-L571)

```diff
-           LG > 0 && this.unsentOptions.splice(0, LG)
-         } catch (bG) {
-           return this.crash(JG, bG), !1
-         }
-         return !0
-       }
-       setHoldDraws(GG) {
-         this.drawsHeld = GG
-       }
-       setUiPrefs(GG) {
-         this.unsentUiPrefs = {
-           ...GG
-         }
-       }
-       setEnvPrefs(GG) {
-         this.unsentEnvPrefs = {
- ... (105 more removed lines; see GitHub link above)
+         })();
+         return {
+           update: (rM, iM, OM) => {
+             MM.update((0, zM.f)(), rM, iM, OM)
+           },
+           release: MM.release,
+           uninstall: () => {
+             const rM = (0, zM.f)();
+             rM && MM.uninstall(rM)
+           }
```

#### 28. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L573-L639` → after: `L425-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L425-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L425-L490) · [Before (L573-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L573-L639)

```diff
-       }
-       readEvents(GG) {
-         this.netOffsets.length = 0;
-         const bG = this.headerView(),
-           ZG = bG[wG.pb.EventsPtr],
-           SG = bG[wG.pb.EventsLen];
-         if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === SG) return sG;
-         const LG = [],
-           yG = this.memory().buffer;
-         if (ZG % 4 !== 0 || ZG + SG > yG.byteLength) return this.crash(AG, `events of ${SG} bytes at ${ZG} outside ${yG.byteLength} bytes of memory`), sG;
-         const kG = new DataView(yG, ZG, SG),
-           UG = this.rings.net,
-           YG = (bG, ZG) => bG + ZG <= GG ? UG.copyWritten(bG, ZG) : null;
-         let VG = 0;
-         for (; VG < SG;) {
-           const GG = VG + wG.$,
- ... (51 more removed lines; see GitHub link above)
+       };
+     var UM = iM(41656);
+     iM(38670), iM(9339);
+     iM(9353).d;
+     const GM = () => {
+       const MM = (0, UM.d)((() => {
+           const MM = {
+             x: 0,
+             y: 0,
+             magnitude: 0,
+             headingOffset: 0,
+             jumpHeld: !1,
+             jumpPressedSinceTick: !1,
+             crouchHeld: !1,
+             running: !1,
+             sprintHeld: !1
+ ... (50 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L641-L675` → after: `L492-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L492-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L492-L524) · [Before (L641-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L641-L675)

```diff
-               if (UG < 4) return this.crash(AG, `ModelTaken at ${VG} of ${UG} bytes`), sG;
-               const GG = new Uint32Array((UG >>> 2) - 1);
-               for (let bG = 0; bG < GG.length; bG++) GG[bG] = IG(1 + bG);
-               null === (oG = (XG = this.handlers).onModelTaken) || void 0 === oG || oG.call(XG, IG(0), GG)
-             } else if (mG === wG.bb.TerrainTexturesWanted) {
-             var uG, iG;
-             if (0 !== UG) return this.crash(AG, `TerrainTexturesWanted at ${VG} of ${UG} bytes`), sG;
-             null === (uG = (iG = this.handlers).onTerrainTexturesWanted) || void 0 === uG || uG.call(iG)
-           } else if (mG === wG.bb.KeepAliveDue) {
-             var CG, WG;
-             if (UG > wG.Eb) return this.crash(AG, `KeepAliveDue at ${VG} of ${UG} bytes`), sG;
-             null === (CG = (WG = this.handlers).onKeepAlive) || void 0 === CG || CG.call(WG, new Uint8Array(yG, ZG + GG, UG).slice())
-           } else if (mG === wG.bb.ConnectionState) {
-             if (UG !== wG.x) return this.crash(AG, `ConnectionState at ${VG} of ${UG} bytes`), sG;
-             this.netOffsets.push(VG), LG.push({
-               type: "connection",
- ... (19 more removed lines; see GitHub link above)
+               return !(null === (MM = (0, zM.b)()) || void 0 === MM || null === (rM = MM.client) || void 0 === rM || !rM.isReplayMode())
+             },
+             isFreeCameraOn: () => {
+               var MM, rM, iM;
+               return !(null === (MM = (0, zM.b)()) || void 0 === MM || null === (rM = MM.client) || void 0 === rM || null === (iM = rM.freeCameraController) || void 0 === iM || !iM.isEnabled())
+             },
+             targetsBlock: () => !!(0, zM.f)().pMM,
+             selectedSlotEmpty: () => {
+               var MM;
+               const rM = (0, zM.f)();
+               return !(null !== (MM = rM.hU.RrM(rM.eD)) && void 0 !== MM && MM.getItemAtSelectedSlot())
+             },
+             pickBlockAllowed: () => {
+               const MM = (0, zM.f)().aU;
+               return !!MM.creative && !!MM.canPickBlocks
+             },
+ ... (17 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L677-L787` → after: `L526-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L526-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L526-L531) · [Before (L677-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L677-L787)

```diff
-           VG = GG + (0, wG.ve)(UG)
-         }
-         return LG
-       }
-       takeSends(GG) {
-         this.atSendsStop = !0;
-         try {
-           GG()
-         } catch (bG) {
-           this.crashOn(IG, bG)
-         } finally {
-           this.atSendsStop = !1
-         }
-         return !this.stopped
-       }
-       forEachNetOut(GG) {
- ... (95 more removed lines; see GitHub link above)
+         })()),
+         rM = (0, OM.c)(),
+         iM = null,
+         jM = null;
+       return () => {
+         MM(), rM(), null === iM || void 0 === iM || iM(), null === jM || void 0 === jM || jM()
```

#### 31. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L791` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L535) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L791)

```diff
-   41162: (GG, bG, ZG) => {
+   37544: (MM, rM, iM) => {
```

#### 32. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L794` → after: `L539-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L539-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L539-L546) · [Before (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L794)

```diff
-       d: () => LG
+       f: () => JM,
+       i: () => dM,
+       j: () => PM,
+       m: () => mM,
+       q: () => yM,
+       u: () => LM,
+       x: () => EM,
+       y: () => hM
```

#### 33. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L796` → after: `L548-L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L548-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L548-L558) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L796)

```diff
-     var wG = ZG(4708);
+     var OM = iM(19),
+       SM = iM(22);
+     const jM = "clientGameInventoryButtonsChanged",
+       aM = new Map;
+ 
+     function PM() {
+       return [...aM.values()].sort(((MM, rM) => {
+         var iM, OM;
+         return (null !== (iM = MM.order) && void 0 !== iM ? iM : 0) - (null !== (OM = rM.order) && void 0 !== OM ? OM : 0)
+       }))
+     }
```

#### 34. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L800-L802` → after: `L562-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L562-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L562-L567) · [Before (L800-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L800-L802)

```diff
-       SG = {
-         scanned: !1
-       };
+       nM = MM
+     }
+     let zM = !1;
+ 
+     function LM(MM) {
+       zM = !0;
```

#### 35. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L804` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L569) · [Before (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L804)

```diff
-         return GG()
+         MM.onClick()
```

#### 36. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L806` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L571) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L806)

```diff
-         SG = null
+         zM = !1
```

#### 37. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L811-L814` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L577) · [Before (L811-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L811-L814)

```diff
-       const GG = SG;
-       if (null === GG) return (0, wG.g)();
-       const bG = (0, wG.g)(!GG.scanned);
-       return GG.scanned = !0, bG
+       return zM
```

#### 38. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L816-L824` → after: `L579-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L579-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L579-L581) · [Before (L816-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L816-L824)

```diff
-   },
-   41214: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => wG
-     });
-     const wG = {
-       webgpu: "rust_webgpu",
-       webgl: "rust_webgl2",
-       webgl1: "rust_webgl1"
+ 
+     function HM() {
+       return PM().filter((MM => MM.panel && !MM.disabled))
```

#### 39. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L826-L827` → after: `L583-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L583-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L583-L593) · [Before (L826-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L826-L827)

```diff
-   },
-   41235: (GG, bG, ZG) => {
+ 
+     function hM(MM) {
+       const rM = HM(),
+         iM = rM.findIndex((MM => MM.id === nM));
+       return !(iM < 0 || rM.length < 2) && (LM(rM[(iM + MM + rM.length) % rM.length]), !0)
+     }
+ 
+     function JM() {
+       return null !== nM && HM().length > 1
+     }
+ 
```

#### 40. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L829` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L595) · [Before (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L829)

```diff
-       return ZG(41239)
+       QM(null)
```

#### 41. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L833` → after: `L599-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L599-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L599-L604) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L833)

```diff
-       return ZG(41243)
+       "inventory" !== OM.d.get("openInGameMenuName") && QM(null)
+     }
+ 
+     function lM() {
+       const MM = nM;
+       return QM(null), MM
```

#### 42. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L837` → after: `L608-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L608-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L608-L610) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L837)

```diff
-       return ["pl", "ru", "tr", "uk", "vi"].includes(GG)
+       return aM.set(MM.id, MM), SM.i.Tz(jM, PM(), !0), () => {
+         aM.get(MM.id) === MM && (aM.delete(MM.id), SM.i.Tz(jM, PM()))
+       }
```

#### 43. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L845` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L613) · [Before (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L845)

```diff
-   36606: (GG, bG, ZG) => {
+   37542: (MM, rM, iM) => {
```

#### 44. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L847` → after: `L615-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L615-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L615-L616) · [Before (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L847)

```diff
-       b: () => kG,
+       A: () => HM,
+       C: () => zM,
```

#### 45. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L850` → after: `L619-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L619-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L619-L623) · [Before (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L850)

```diff
-       h: () => pG
+       k: () => dM,
+       n: () => yM,
+       p: () => mM,
+       t: () => QM,
+       w: () => JM
```

#### 46. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L852-L860` → after: `L625-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L625-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L625-L630) · [Before (L852-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L852-L860)

```diff
-     var wG = ZG(36594),
-       SG = ZG(5);
-     const LG = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;
- 
-     function yG(GG) {
-       if (GG instanceof WebAssembly.RuntimeError) return !0;
-       const bG = GG instanceof Error ? GG.stack : void 0;
-       return "string" === typeof bG && LG.test(bG)
-     }
+     var OM = iM(19),
+       SM = iM(22),
+       jM = iM(1313),
+       aM = iM(37544);
+     const PM = "clientGameUiChanged";
+     let nM = null;
```

#### 47. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L862-L869` → after: `L632-L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L632-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L632-L633) · [Before (L862-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L862-L869)

```diff
-     function kG(GG, bG, ZG) {
-       var SG;
-       const yG = GG instanceof Error ? GG.name : "thrown",
-         kG = (GG instanceof Error && null !== (SG = GG.stack) && void 0 !== SG ? SG : "").split("\n").filter((GG => LG.test(GG))).slice(0, 8).map((GG => GG.trim())),
-         UG = null === bG ? "wasm memory unknown" : `wasm memory ${Math.round(bG/2**20)} MB`,
-         YG = null === ZG.panic ? "" : `, panic: ${(0,wG.h)(ZG.panic)}`,
-         VG = `${yG}: ${GG instanceof Error?GG.message:String(GG)}`;
-       return `${(0,wG.m)(ZG.kind,ZG.refusedBytes)} ${VG} (${UG})${YG}${kG.length>0?` | ${kG.join(" < ")}`:""}`
+     function QM() {
+       return nM
```

#### 48. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L873-L878` → after: `L636-L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L636-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L636-L639) · [Before (L873-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L873-L878)

```diff
-     function YG(GG) {
-       var bG;
-       let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
-       if (!(GG instanceof Error) || !UG.test(GG.message)) return {};
-       if (!("detached" in ZG)) return {
-         arrayBufferDetached: "absent"
+     function zM(MM, rM) {
+       const iM = {
+         content: MM,
+         menu: rM
```

#### 49. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L880-L881` → after: `L641-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L641-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L641-L642) · [Before (L880-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L880-L881)

```diff
-       return {
-         arrayBufferDetached: (0, SG.T)(null === (bG = (0, SG.K)(ZG, "detached")) || void 0 === bG ? void 0 : bG.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
+       return nM = iM, SM.i.Tz(PM, nM, !0), () => {
+         nM === iM && (nM = null, hM = !1, dM(), SM.i.Tz(PM, null))
```

#### 50. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L884` → after: `L645-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L645-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L645-L649) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L884)

```diff
-     const VG = 500;
+     let LM = null;
+ 
+     function mM() {
+       return LM
+     }
```

#### 51. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L887-L896` → after: `L652-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L652-L653) · [Before (L887-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L887-L896)

```diff
-       let bG = "[object Object]";
-       try {
-         bG = String(GG)
-       } catch {}
-       if ("[object Object]" !== bG) return bG;
-       try {
-         var ZG, wG;
-         return null !== (ZG = null === (wG = JSON.stringify(GG)) || void 0 === wG ? void 0 : wG.slice(0, VG)) && void 0 !== ZG ? ZG : bG
-       } catch {
-         return bG
+       return LM = MM, () => {
+         LM === MM && (LM = null)
```

#### 52. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L899-L914` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L656) · [Before (L899-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L899-L914)

```diff
-   },
-   41239: (GG, bG, ZG) => {
-     GG.exports = ZG.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
-   },
-   41243: (GG, bG, ZG) => {
-     GG.exports = ZG.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
-   },
-   36594: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => wG,
-       e: () => LG,
-       h: () => UG,
-       i: () => yG,
-       m: () => SG
-     });
-     const wG = /^alloc_failed (\d+) bytes$/;
+     let hM = !1;
```

#### 53. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L916-L917` → after: `L658-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L658-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L658-L663) · [Before (L916-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L916-L917)

```diff
-     function SG(GG, bG) {
-       return LG(GG, bG) ? `trap=alloc_failed ${bG} bytes` : `trap=${GG}`
+     function JM() {
+       const MM = OM.d.get("openInGameMenuName");
+       "clientGame" !== MM && (hM = "inventory" === MM), (0, aM.m)() || (0, aM.i)(), (0, jM.z)(jM.e), OM.d.set({
+         openInGameMenuName: "clientGame",
+         openEverythingMenuName: null
+       })
```

#### 54. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L920-L921` → after: `L666-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L666-L667) · [Before (L920-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L920-L921)

```diff
-     function LG(GG, bG) {
-       return "unreachable" === GG && bG > 0
+     function dM() {
+       EM(!1)
```

#### 55. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L924-L939` → after: `L670-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L670-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L670-L675) · [Before (L924-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L924-L939)

```diff
-     function yG(GG, bG, ZG) {
-       const wG = function(GG) {
-         return GG instanceof WebAssembly.RuntimeError ? /unreachable/i.test(GG.message) ? "unreachable" : /out of bounds/i.test(GG.message) ? "out_of_bounds" : "runtime_error" : (GG instanceof RangeError || GG instanceof Error && "InternalError" === GG.name) && /call stack|recurs … [truncated]
-       }(GG);
-       if ("unreachable" !== wG) return {
-         kind: wG,
-         panic: null,
-         refusedBytes: 0
-       };
-       const SG = bG(),
-         LG = ZG();
-       return {
-         kind: wG,
-         panic: LG > 0 ? null : SG,
-         refusedBytes: LG
-       }
+     function yM() {
+       EM(hM)
+     }
+ 
+     function lM() {
+       hM && EM(!1)
```

#### 56. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L944` → after: `L679-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L679-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/214.js#L679-L700) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/214.js#L944)

```diff
-       return GG.replace(/\s*\n\s*/g, " / ").slice(0, kG)
+       "clientGame" === OM.d.get("openInGameMenuName") && OM.d.set({
+         openInGameMenuName: MM ? "inventory" : null
+       }), MM || (0, aM.i)(), hM = !1
+     }
+   },
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
+ ... (6 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/215.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/215.js` (49 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17)

#### 1. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L4-L67` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L4) · [Before (L4-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L4-L67)

```diff
-   36826: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG,
-       g: () => SG,
-       h: () => LG
-     });
-     var wG = ZG(1775);
-     class SG extends Error {
-       constructor(GG) {
-         super("The game server didn't answer in time"), this.leg = GG, this.name = "SeatRequestTimedOut"
-       }
-     }
-     const LG = new class {
-       constructor() {
-         this.count = 0, this.answers = 0, this.waiting = new Set
-       }
- ... (48 more removed lines; see GitHub link above)
+   34852: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L70-L72` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L7) · [Before (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L70-L72)

```diff
-       h: () => SG,
-       i: () => LG,
-       l: () => yG
+       i: () => IH
```

#### 3. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L74-L75` → after: `L9-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L9-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L9-L131) · [Before (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L74-L75)

```diff
-     const wG = 1024,
-       SG = 1024 * wG;
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

#### 4. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L77-L78` → after: `L133-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L133-L134) · [Before (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L77-L78)

```diff
-     function LG(GG) {
-       return 2 ** Math.floor(Math.log2(Math.max(1, GG / SG)))
+     function mi(MM, rM) {
+       return -1 !== MM.indexOf(rM)
```

#### 5. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L82` → after: `L144-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L144-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L144-L161) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L82)

```diff
-       return (GG / SG).toFixed(1)
+       var rM;
+       const iM = [];
+       return null !== (rM = JSON.stringify(MM, (function(MM, rM) {
+         if ("bigint" == typeof rM) return rM.toString();
+         if ("function" != typeof rM && "symbol" != typeof rM) {
+           if (rM instanceof Error) return {
+             name: rM.name,
+             message: rM.message,
+             stack: rM.stack
+           };
+           if (rM && "object" == typeof rM) {
+             for (; iM.length > 0 && iM[iM.length - 1] !== this;) iM.pop();
+             if (iM.includes(rM)) return "[Circular]";
+             iM.push(rM)
+           }
+           return rM
+ ... (2 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L84-L105` → after: `L163-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L163-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L163-L188) · [Before (L84-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L84-L105)

```diff
-   },
-   36816: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => LG,
-       d: () => UG,
-       g: () => kG,
-       h: () => yG,
-       k: () => YG,
-       n: () => VG,
-       q: () => fG
-     });
-     var wG = ZG(188);
-     const SG = 32 * ZG(36599).h,
-       LG = 6144,
-       yG = 4608,
-       kG = 512,
- ... (6 more removed lines; see GitHub link above)
+     const yi = Object.prototype,
+       li = yi.hasOwnProperty,
+       Ei = yi.toString,
+       Ui = Array.isArray || function(MM) {
+         return "[object Array]" === Ei.call(MM)
+       },
+       Gi = MM => "function" == typeof MM,
+       Ci = MM => MM === Object(MM) && !Ui(MM),
+       ei = MM => {
+         if (Ci(MM)) {
+           for (const rM in MM)
+             if (li.call(MM, rM)) return !1;
+           return !0
+         }
+         return !1
+       },
+ ... (10 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L108` → after: `L191-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L191-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L191-L195) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L108)

```diff
-       return Math.floor(SG * GG / LG)
+       return null === MM || "object" != typeof MM
+     }
+ 
+     function oi(MM, rM) {
+       return {}.toString.call(MM) === `[object ${rM}]`
```

#### 8. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L112-L119` → after: `L199-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L199-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L199-L207) · [Before (L112-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L112-L119)

```diff
-       const bG = pG(GG);
-       let ZG = wG.d.maxChunkHorizAddDistance,
-         SG = wG.d.maxChunkVertAddDistance;
-       if (fG(ZG + 1, SG + 1) <= bG) return null;
-       for (; fG(ZG + 1, SG + 1) > bG && (ZG > 0 || SG > 0);) ZG > SG ? ZG-- : SG--;
-       return {
-         horizontal: ZG,
-         vertical: SG
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

#### 9. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L124` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L212) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L124)

```diff
-       return GG - Math.floor(GG / 6)
+       return "u" > typeof Event && Ni(MM, Event)
```

#### 10. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L128-L133` → after: `L216-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L216-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L216-L220) · [Before (L128-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L128-L133)

```diff
-       const ZG = Math.max(GG, bG);
-       let wG = 0;
-       for (let SG = -ZG; SG <= ZG; SG++)
-         for (let LG = -ZG; LG <= ZG; LG++)
-           for (let yG = -ZG; yG <= ZG; yG++) QG(GG, bG, SG, LG, yG) && wG++;
-       return wG
+       try {
+         return MM instanceof rM
+       } catch (MM) {
+         return !1
+       }
```

#### 11. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L136-L138` → after: `L226-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L226-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L226-L233) · [Before (L136-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L136-L138)

```diff
-     function QG(GG, bG, ZG, wG, SG) {
-       const LG = ZG * ZG + SG * SG;
-       return GG === bG ? LG + wG * wG <= GG * GG : GG > bG ? Math.abs(wG) <= bG && LG + wG * wG <= GG * GG : LG <= GG * GG && LG + wG * wG <= bG * bG
+     function Fi(MM, rM, iM, OM, SM, jM, aM) {
+       try {
+         var PM = MM[jM](aM),
+           nM = PM.value
+       } catch (MM) {
+         return void iM(MM)
+       }
+       PM.done ? rM(nM) : Promise.resolve(nM).then(OM, SM)
```

#### 12. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L166-L185` → after: `L237-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L237-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L237-L244) · [Before (L166-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L166-L185)

```diff
-       const {
-         os: bG,
-         deviceMemory: ZG
-       } = GG;
-       if ("ios" === bG) switch ((0, yG.g)(GG)) {
-         case "ipad_m":
-           return {
-             footprintBytes: zG(YG.b), basis: "ipad-m", namesLimit: !1
-           };
-         case "ipad":
-           return {
-             footprintBytes: JG, basis: "ipad", namesLimit: !0
-           };
-         case "iphone_6gb":
-           return {
-             footprintBytes: dG, basis: "iphone-6gb", namesLimit: !0
- ... (4 more removed lines; see GitHub link above)
+       return function() {
+         var rM = this,
+           iM = arguments;
+         return new Promise((function(OM, SM) {
+           var jM = MM.apply(rM, iM);
+ 
+           function aM(MM) {
+             Fi(jM, OM, SM, aM, PM, "next", MM)
```

#### 13. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L187-L199` → after: `L246-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L246-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L246-L251) · [Before (L187-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L187-L199)

```diff
-       }
-       return "number" === typeof ZG && Number.isFinite(ZG) && ZG > 0 ? {
-         footprintBytes: ZG * fG * hG,
-         basis: `memory-${ZG}`,
-         namesLimit: !0
-       } : "android" === bG ? {
-         footprintBytes: JG,
-         basis: "android",
-         namesLimit: !0
-       } : {
-         footprintBytes: zG(YG.h),
-         basis: "unreported",
-         namesLimit: !1
+ 
+           function PM(MM) {
+             Fi(jM, OM, SM, aM, PM, "throw", MM)
+           }
+           aM(void 0)
+         }))
```

#### 14. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L203-L204` → after: `L274-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L274-L275) · [Before (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L203-L204)

```diff
-     function zG(GG) {
-       return QG + GG * KG
+     function qi(MM, rM, iM, OM, SM) {
+       return rM > iM && (OM.warn("min cannot be greater than max."), rM = iM), Ri(MM) ? MM > iM ? (OM.warn(" cannot be  greater than max: " + iM + ". Using max value instead."), iM) : rM > MM ? (OM.warn(" cannot be less than min: " + rM + ". Using min value instead."), rM) : MM : … [truncated]
```

#### 15. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L207-L215` → after: `L476-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L476-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L476-L486) · [Before (L207-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L207-L215)

```diff
-     function EG() {
-       let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CG(),
-         bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LG.siteUsed;
-       if ("android" !== GG.os || "mobileAndroid" === bG) return !0;
-       const {
-         footprintBytes: ZG,
-         basis: wG
-       } = rG(GG);
-       return "android" === wG || ZG > 2 * fG
+     function jS(MM) {
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

#### 16. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L218-L227` → after: `L489-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L489-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L489-L495) · [Before (L218-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L218-L227)

```diff
-     function oG(GG, bG, ZG) {
-       var SG, LG;
-       let {
-         footprintBytes: yG,
-         basis: kG,
-         namesLimit: UG
-       } = rG(GG);
-       if (ZG) {
-         const GG = Math.min(yG, zG(YG.b));
-         yG = QG + Math.max(0, GG - QG) / 2, kG += "+killed", UG = !0
+     function aS(MM, rM) {
+       if (!rM) return MM;
+       let iM = [];
+       try {
+         iM = Object.keys(rM)
+       } catch (MM) {
+         iM = []
```

#### 17. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L229-L242` → after: `L497-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L497-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L497-L509) · [Before (L229-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L229-L242)

```diff
-       null !== bG && zG(bG) < yG && (yG = zG(bG), kG += "+learned", UG = !0);
-       const VG = function(GG) {
-           const bG = Math.floor((GG - QG) / KG);
-           return Math.min(YG.b, Math.max(YG.g, bG))
-         }(yG),
-         pG = UG && VG < YG.b ? Math.min(VG, YG.d) : VG,
-         fG = (0, YG.n)(pG);
-       return {
-         footprintBytes: yG,
-         shedFootprintBytes: UG ? Math.max(yG, zG(pG)) : null,
-         chunkCap: pG,
-         maxHorizDistance: null !== (SG = null === fG || void 0 === fG ? void 0 : fG.horizontal) && void 0 !== SG ? SG : wG.d.maxChunkHorizAddDistance,
-         maxVertDistance: null !== (LG = null === fG || void 0 === fG ? void 0 : fG.vertical) && void 0 !== LG ? LG : wG.d.maxChunkVertAddDistance,
-         basis: kG
+       for (const OM of iM) {
+         let iM;
+         try {
+           iM = rM[OM]
+         } catch (MM) {
+           iM = SS
+         }
+         Object.defineProperty(MM, OM, {
+           value: iM,
+           enumerable: !0,
+           writable: !0,
+           configurable: !0
+         })
```

#### 18. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L245-L247` → after: `L513-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L513-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L513-L542) · [Before (L245-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L245-L247)

```diff
-     let XG = null,
-       uG = null,
-       iG = null;
+     Date, Date;
+     const PS = 3e5;
+     var nS = class {
+       record(MM) {
+         if ("too-large" === MM.kind) return;
+         if ("retry-later" !== MM.kind) return void this.reset();
+         if (!MM.retryAfterMs) return;
+         const rM = this.isOpen(),
+           iM = Date.now(),
+           OM = Math.min(MM.retryAfterMs, PS);
+         if (!rM) return this._installedAt = iM, void(this._until = iM + OM);
+         this._until = Math.max(this._until, Math.min(iM + OM, this._installedAt + PS))
+       }
+       remainingMs() {
+         const MM = Date.now();
+         if (this._installedAt - 5e3 > MM) return this.reset(), 0;
+ ... (14 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L249-L254` → after: `L544-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L544-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L544-L546) · [Before (L249-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L249-L254)

```diff
-     function CG() {
-       return XG ??= {
-         os: (0, SG.getOperatingSystem)(),
-         deviceMemory: navigator.deviceMemory,
-         ...(0, yG.j)()
-       }, XG
+     function zS(MM, rM) {
+       return "string" == typeof(iM = MM) && QS.test(iM) ? MM : rM();
+       var iM
```

#### 20. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L257-L258` → after: `L549-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L549-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L549-L559) · [Before (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L257-L258)

```diff
-     function WG() {
-       return oG(CG(), (0, kG.f)(), (0, UG.H)("wasm").length > 0)
+     function LS(MM, rM) {
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

#### 21. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L261-L262` → after: `L562-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L562-L563) · [Before (L261-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L261-L262)

```diff
-     function mG() {
-       return iG ??= (0, VG.o)(oG(CG(), null, !1).chunkCap), iG
+     function mS(MM) {
+       return MM ? MM.split("#")[0] : MM
```

#### 22. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L265-L266` → after: `L566-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L566-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L566-L571) · [Before (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L265-L266)

```diff
-     function IG() {
-       return uG ??= WG(), uG
+     function HS(MM) {
+       try {
+         return MM()
+       } catch (MM) {
+         return
+       }
```

#### 23. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L269-L271` → after: `L574-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L574-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L574-L576) · [Before (L269-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L269-L271)

```diff
-     function FG() {
-       var GG;
-       return (null !== (GG = uG) && void 0 !== GG ? GG : WG()).basis
+     function hS(MM, rM) {
+       const iM = setTimeout(MM, rM);
+       return null != iM && iM.unref && (null == iM || iM.unref()), iM
```

#### 24. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L274-L275` → after: `L579-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L579-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L579-L580) · [Before (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L274-L275)

```diff
-     function vG(GG, bG) {
-       return GG.setChunkCap(bG.chunkCap)
+     function JS(MM, rM, iM) {
+       return dS.apply(this, arguments)
```

#### 25. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L297-L298` → after: `L583-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L583-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L583-L599) · [Before (L297-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L297-L298)

```diff
-     function pG(GG) {
-       return "footprint" !== GG
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

#### 26. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L307-L308` → after: `L603-L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L603-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L603-L639) · [Before (L307-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L307-L308)

```diff
-       const bG = hG + (0, SG.k)(GG) + GG * dG;
-       return Math.ceil((2 * KG + bG) / LG) * LG
+       return yS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
+         return typeof MM
+       } : function(MM) {
+         return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
+       }, yS(MM)
+     }
+ 
+     function lS(MM, rM, iM) {
+       return (rM = function(MM) {
+         var rM = function(MM) {
+           if ("object" != yS(MM) || !MM) return MM;
+           var rM = MM[Symbol.toPrimitive];
+           if (void 0 !== rM) {
+             var iM = rM.call(MM, "string");
+             if ("object" != yS(iM)) return iM;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+ ... (21 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L321-L323` → after: `L643-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L643-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L643-L649) · [Before (L321-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L321-L323)

```diff
-       return {
-         targetBytes: GG,
-         leastBytes: 0
+       for (var rM = 1; arguments.length > rM; rM++) {
+         var iM = null != arguments[rM] ? arguments[rM] : {};
+         rM % 2 ? ES(Object(iM), !0).forEach((function(rM) {
+           lS(MM, rM, iM[rM])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : ES(Object(iM)).forEach((function(rM) {
+           Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
+         }))
```

#### 28. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L328` → after: `L656-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L656-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L656-L684) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L328)

```diff
-       return GG >= SG.b ? rG : zG
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
+           if (!rM) continue;
+           const jM = null == GS ? void 0 : GS[SM];
+           if (jM) {
+             bS[jM] = rM;
+             continue
+ ... (13 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L333` → after: `L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L688) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L333)

```diff
-       return GG + bG + XG > ZG
+       return MM && iM ? rM.length === Object.keys(iM).length && rM.every((rM => MM[rM] === iM[rM])) : MM === iM
```

#### 30. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L335-L347` → after: `L690-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L690-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L690-L693) · [Before (L335-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L335-L347)

```diff
-     const iG = {
-       now: () => performance.now(),
-       requestIdle: "function" === typeof requestIdleCallback ? GG => {
-         requestIdleCallback(GG)
-       } : null
-     };
-     class CG {
-       constructor(GG, bG, ZG) {
-         let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iG;
-         this.memory = GG, this.readPeakStoredChunks = bG, this.onError = ZG, this.clock = wG, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.ma … [truncated]
-           reserves: 0,
-           allocations: 0
-         }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
+     var gS = class {
+       constructor(MM, rM) {
+         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         this.coercers = MM, this.stackParser = rM, this.modifiers = iM
```

#### 31. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L349-L353` → after: `L695-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L695-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L695-L706) · [Before (L349-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L349-L353)

```diff
-       setShed(GG, bG, ZG) {
-         this.shedding = {
-           shed: GG,
-           NQ: bG,
-           readDistanceInUse: ZG
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
```

#### 32. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L356-L360` → after: `L709-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L709-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L709-L714) · [Before (L356-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L356-L360)

```diff
-       shedDistanceInUse() {
-         return this.distanceInUse
-       }
-       setFootprint(GG) {
-         this.footprint = GG
+       modifyFrames(MM) {
+         var rM = this;
+         return Bi((function*() {
+           for (const iM of MM) iM.stacktrace && iM.stacktrace.frames && Ui(iM.stacktrace.frames) && (iM.stacktrace.frames = yield rM.applyModifiers(iM.stacktrace.frames));
+           return MM
+         }))()
```

#### 33. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L362-L367` → after: `L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L716) · [Before (L362-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L362-L367)

```diff
-       setCeiling(GG) {
-         this.ceilingBytes = GG, this.call((() => {
-           this.memory.setCeiling(GG)
-         }), void 0)
-       }
-       ceilingMayRefuse(GG, bG) {
+       coerceFallback(MM) {
```

#### 34. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L369` → after: `L718-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L718-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L718-L723) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L369)

```diff
-         return uG(this.memory.memoryBytes(), GG, null !== (ZG = this.ceilingBytes) && void 0 !== ZG ? ZG : bG)
+         return {
+           type: "Error",
+           value: "Unknown error",
+           stack: null === (rM = MM.syntheticException) || void 0 === rM ? void 0 : rM.stack,
+           synthetic: !0
+         }
```

#### 35. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L371-L400` → after: `L725-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L725-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L725-L735) · [Before (L371-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L371-L400)

```diff
-       reserveAtJoin(GG) {
-         let {
-           targetBytes: bG,
-           leastBytes: ZG
-         } = GG;
-         const wG = this.memory.memoryBytes(),
-           SG = wG + ZG,
-           LG = Math.max(bG + (this.ballastOn() ? VG : 0), SG),
-           yG = this.call((() => this.memory.reserveUpFront(LG) ? "target" : LG > SG && this.memory.reserveUpFront(SG) ? "least" : "none"), "none");
-         if (this.stopped) return !1;
-         if ("target" !== yG) {
-           const GG = "least" === yG ? `took ${SG} bytes instead` : "frames grow it in steps";
-           console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${LG} bytes was refused at ${wG} bytes; ${GG}`)
-         }
-         return this.joinReserveTaken = yG, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== yG && this.shedFor("joinReserve"), "none" !== yG
-       }
- ... (14 more removed lines; see GitHub link above)
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

#### 36. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L402-L407` → after: `L737-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L737-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L737-L738) · [Before (L402-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L402-L407)

```diff
-       refreshStats() {
-         this.call((() => {
-           var GG, bG;
-           (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (bG = this.shedding.readDistanceInUse()) && void 0 !== bG ? bG : this.distanceInUse);
-           null === (GG = this.footprint) || void 0 === GG || GG.read(this.memory.memoryBytes() + this.workersMemoryBytes())
-         }), void 0)
+       applyChunkIds(MM, rM) {
+         return MM.map((MM => (MM.filename && rM && (MM.chunk_id = rM[MM.filename]), MM)))
```

#### 37. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L409-L410` → after: `L740-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L740-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L740-L743) · [Before (L409-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L409-L410)

```diff
-       stop() {
-         this.stopped = !0, this.pendingSince = null
+       applyCoercers(MM, rM) {
+         for (const iM of this.coercers)
+           if (iM.match(MM)) return iM.coerce(MM, rM);
+         return this.coerceFallback(rM)
```

#### 38. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L412-L413` → after: `L745-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L745-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L745-L751) · [Before (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L412-L413)

```diff
-       noteMeshWorker(GG, bG) {
-         this.noteWorker(`Mesh${GG}`, bG)
+       applyModifiers(MM) {
+         var rM = this;
+         return Bi((function*() {
+           let iM = MM;
+           for (const MM of rM.modifiers) iM = yield MM(iM);
+           return iM
+         }))()
```

#### 39. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L415-L416` → after: `L753-L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L753-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L753-L785) · [Before (L415-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L415-L416)

```diff
-       meshWorkerGone(GG) {
-         this.workerGone(`Mesh${GG}`)
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
+ ... (17 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L418-L419` → after: `L787-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L787-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L787-L792) · [Before (L418-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L418-L419)

```diff
-       noteWorldgen(GG) {
-         this.noteWorker("Worldgen", GG)
+       buildParsingContext(MM) {
+         var rM;
+         return {
+           chunkIdMap: wS(this.stackParser),
+           skipFirstLines: null !== (rM = MM.skipFirstLines) && void 0 !== rM ? rM : 1
+         }
```

#### 41. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L421-L422` → after: `L794-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L794-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L794-L808) · [Before (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L421-L422)

```diff
-       worldgenGone() {
-         this.workerGone("Worldgen")
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
+           }
+         } catch (MM) {}
```

#### 42. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L424-L428` → after: `L810-L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L810-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L810-L884) · [Before (L424-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L424-L428)

```diff
-       noteWorker(GG, bG) {
-         const ZG = this.workers.get(GG);
-         null !== ZG && void 0 !== ZG && ZG.gone && (this.replacedRefusals.reserves += ZG.stats.reservesRefused, this.replacedRefusals.allocations += ZG.stats.allocationsRefused), this.workers.set(GG, {
-           stats: bG,
-           gone: !1
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
+ ... (59 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L431-L441` → after: `L887-L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L887-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L887-L915) · [Before (L431-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L431-L441)

```diff
-       workerGone(GG) {
-         const bG = this.workers.get(GG);
-         bG && (bG.gone = !0)
-       }
-       details() {
-         var GG, bG;
-         const ZG = {
-           wasmMemoryNow: `${(0,wG.l)(this.memory.memoryBytes())} MiB`
-         };
-         null !== this.joinReserveTaken && (ZG.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (ZG.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
-         const SG = this.main;
+     };
+     const uS = /^([a-z][a-z0-9.+-]+):/i,
+       RS = ["http", "https", "file", "blob", "app", "capacitor", "ionic", "webpack", "webpack-internal", "ng"];
+ 
+     function pS(MM) {
+       if (!MM || "<anonymous>" === MM) return !1;
+       const rM = uS.exec(MM);
+       return !rM || RS.includes(rM[1].toLowerCase())
+     }
+ 
+     function WS(MM, rM, iM, OM, SM) {
+       const jM = {
+         platform: MM,
+         filename: rM,
+         function: "<anonymous>" === iM ? "?" : iM,
+         in_app: pS(rM)
+ ... (13 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L443-L460` → after: `L917-L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L917-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L917-L924) · [Before (L443-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L443-L460)

```diff
-           ZG.wasmMemoryMain = WG(SG);
-           const GG = Math.max(0, SG.peakLiveBytes - this.ballastPeakBytes),
-             bG = 0 === this.peakStoredChunks ? "-" : (GG / this.peakStoredChunks / wG.e).toFixed(1);
-           ZG.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${bG} KiB`
-         }
-         for (const [wG, {
-             stats: yG,
-             gone: kG
-           }] of this.workers) ZG[`wasmMemory${wG}`] = WG(yG) + (kG ? " (gone)" : "");
-         const LG = null !== (GG = null === (bG = this.footprint) || void 0 === bG ? void 0 : bG.describe()) && void 0 !== GG ? GG : null;
-         return null !== LG && (ZG.wasmMemoryFootprint = LG), ZG
-       }
-       pageKillSnapshot() {
-         var GG, bG, ZG, SG, LG;
-         let yG = (null !== (GG = null === (bG = this.main) || void 0 === bG ? void 0 : bG.reservesRefused) && void 0 !== GG ? GG : 0) + this.replacedRefusals.reserves,
-           kG = (null !== (ZG = null === (SG = this.main) || void 0 === SG ? void 0 : SG.allocationsRefused) && void 0 !== ZG ? ZG : 0) + this.replacedRefusals.allocations;
- ... (2 more removed lines; see GitHub link above)
+           const [, MM, OM, SM] = iM;
+           return WS(rM, MM, "?", +OM, +SM)
+         }
+         const OM = kS.exec(MM);
+         if (OM) {
+           if (OM[2] && 0 === OM[2].indexOf("eval")) {
+             const MM = ZS.exec(OM[2]);
+             MM && (OM[2] = MM[1], OM[3] = MM[2], OM[4] = MM[3])
```

#### 45. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L462-L470` → after: `L926-L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L926-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L926-L927) · [Before (L462-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L462-L470)

```diff
-           of this.workers.values()) yG += wG.reservesRefused, kG += wG.allocationsRefused;
-         return {
-           wasmMainMiB: Number((0, wG.l)(this.memory.memoryBytes())),
-           wasmWorkersMiB: Number((0, wG.l)(this.workersMemoryBytes())),
-           peakStoredChunks: this.peakStoredChunks,
-           refusedReserves: yG,
-           refusedAllocations: kG,
-           sheds: this.sheds,
-           ...null === (LG = this.footprint) || void 0 === LG ? void 0 : LG.snapshot()
+           const [MM, iM] = sS(OM[1] || "?", OM[2]);
+           return WS(rM, iM, MM, OM[3] ? +OM[3] : void 0, OM[4] ? +OM[4] : void 0)
```

#### 46. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L472-L477` → after: `L929-L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L929-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L929-L937) · [Before (L472-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L472-L477)

```diff
-       }
-       workersMemoryBytes() {
-         let GG = 0;
-         for (const {
-             stats: bG,
-             gone: ZG
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

#### 47. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L479-L517` → after: `L939-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L939-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L939-L941) · [Before (L479-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L479-L517)

```diff
-           of this.workers.values()) GG += ZG ? 0 : bG.memoryBytes;
-         return GG
-       }
-       checkFootprint() {
-         null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
-       }
-       step() {
-         this.pendingSince = null, this.call((() => this.memory.reserveAhead(YG)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
-       }
-       ballastOn() {
-         return null !== this.shedding
-       }
-       takeBallast(GG) {
-         if (!this.ballastOn() || null === this.joinReserveTaken) return;
-         this.ballastCheckAt = GG + 1e3;
-         const bG = this.call((() => this.memory.takeBallast()), 0);
- ... (23 more removed lines; see GitHub link above)
+           let MM = iM[3],
+             OM = iM[1] || "?";
+           return [OM, MM] = sS(OM, MM), WS(rM, MM, OM, iM[4] ? +iM[4] : void 0, iM[5] ? +iM[5] : void 0)
```

#### 48. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L519` → after: `L943-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L943-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L943-L947) · [Before (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L519)

```diff
-       }
+       },
+       AS = /\(error: (.*)\)/;
+ 
+     function xS(MM, rM) {
+       return MM.filename === rM.filename && MM.function === rM.function && MM.module === rM.module && MM.lineno === rM.lineno && MM.colno === rM.colno
```

#### 49. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L523-L524` → after: `L951-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L951-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/215.js#L951-L1001) · [Before (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/215.js#L523-L524)

```diff
-       const bG = (GG, bG) => `${GG}/${(0,wG.l)(bG)}`;
-       return `memory ${(0,wG.l)(GG.memoryBytes)} live ${(0,wG.l)(GG.liveBytes)} peak ${(0,wG.l)(GG.peakLiveBytes)} unused ${(0,wG.l)(GG.unusedBytes)} ceiling ${(0,wG.l)(GG.ceilingBytes)} MiB; grows upFront ${bG(GG.grows.upFront,GG.grownBytes.upFront)} ahead ${bG(GG.grows.ahead,GG … [truncated]
+       for (let rM = 1; 10 >= rM; rM++) {
+         const iM = MM.length - 2 * rM;
+         if (0 > iM) break;
+         let OM = !0;
+         for (let SM = 0; rM > SM; SM++)
+           if (!xS(MM[iM + SM], MM[iM + rM + SM])) {
+             OM = !1;
+             break
+           } if (OM) {
+           for (let OM = 0; rM > OM; OM++) MM[iM + OM] = MM[iM + rM + OM];
+           return MM.length = iM + rM, {
+             start: iM,
+             length: rM
+           }
+         }
+       }
+ ... (35 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/216.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/216.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc)

#### 1. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L4-L16` → after: `L4-L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L4-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/216.js#L4-L11892) · [Before (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/216.js#L4-L16)

```diff
-   36657: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       ITEM_FILES_WITHOUT_SPRITE: () => kG,
-       ITEM_SPRITES: () => LG,
-       ITEM_SPRITES_WITHOUT_FILE: () => yG,
-       ITEM_SPRITE_RUNS: () => SG,
-       MAX_SPRITE_ITEM_ID: () => wG
-     });
-     const wG = 10090,
-       SG = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
-       LG = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
-       yG = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
-       kG = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
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
+ ... (11873 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/217.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/217.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0)

#### 1. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/217.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/217.js#L2)

```diff
- export const ids = [217];
+ export const ids = [217, 218];
```

#### 2. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/217.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/217.js#L4)

```diff
-   36668: (GG, bG, ZG) => {
+   34868: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/217.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/217.js#L6)

```diff
-       CreateCustomLobby: () => FG
+       reportJsMainStall: () => PM,
+       resetJsMainStallReport: () => nM
```

#### 4. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L8-L34` → after: `L9-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L9-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/217.js#L9-L49) · [Before (L8-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/217.js#L8-L34)

```diff
-     ZG(36670);
-     var wG = ZG(4655),
-       SG = ZG(51),
-       LG = ZG(1621),
-       yG = ZG(1006),
-       kG = ZG.n(yG),
-       UG = ZG(3113),
-       YG = ZG(1096),
-       VG = ZG(1163),
-       pG = ZG(4611),
-       fG = ZG(1393),
-       QG = ZG(36672),
-       KG = ZG(1151),
-       hG = ZG(1290),
-       dG = ZG(1444),
-       JG = ZG(17),
- ... (11 more removed lines; see GitHub link above)
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
+ ... (25 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L37-L81` → after: `L52-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/217.js#L52-L54) · [Before (L37-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/217.js#L37-L81)

```diff
-       var bG, ZG, yG, FG;
-       let {
-         gameNameWithVariation: vG,
-         close: aG,
-         initialDefaultGamemode: cG
-       } = GG;
-       const {
-         t: lG
-       } = (0, KG.w)(), jG = (0, dG.useNavigatePreserveSearch)(), [PG, MG] = (0, SG.useState)("Enter"), [AG, sG] = (0, SG.useState)(""), qG = SG.useRef(null), nG = null === (bG = oG.d[vG]) || void 0 === bG ? void 0 : bG.showWorldsInsteadOfCustomLobbies, gG = nG ? 1 : null === (ZG  … [truncated]
-       cG || (cG = "classic_creative" === vG || "classic_creativeFlat" === vG ? "creative" : "classic" === vG ? "peaceful" : "survival");
-       const TG = {
-         baseOptions: {
-           gameNameWithVariation: nG ? "classic" : vG,
-           name: "",
-           visibility: "unlisted"
-         },
- ... (29 more removed lines; see GitHub link above)
+       (0, OM.reportClientError)("wasm_load", MM.message, MM.code)
+     }
+     const jM = OM.MAX_ERRORS_PER_VISIT - 4;
```

#### 6. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L83-L91` → after: `L56-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L56-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/217.js#L56-L60) · [Before (L83-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/217.js#L83-L91)

```diff
-       function OG(GG, bG) {
-         tG({
-           ...HG,
-           baseOptions: {
-             ...HG.baseOptions,
-             [GG]: bG
-           }
-         })
-       }
+     function aM(MM, rM, iM, SM) {
+       (0, OM.reportClientError)(MM, rM, iM, !1, OM.MAX_ERRORS_PER_VISIT, {
+         context: SM
+       })
+     }
```

#### 7. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L93-L101` → after: `L62-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L62-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/217.js#L62-L66) · [Before (L93-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/217.js#L93-L101)

```diff
-       function xG(GG, bG) {
-         tG({
-           ...HG,
-           listedOptions: {
-             ...HG.listedOptions,
-             [GG]: bG
-           }
-         })
-       }
+     function PM(MM, rM, iM, SM) {
+       (0, OM.reportClientError)(MM, rM, iM, !1, 1 / 0, {
+         context: SM
+       })
+     }
```

#### 8. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L103-L474` → after: `L68-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L68-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/217.js#L68-L70) · [Before (L103-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/217.js#L103-L474)

```diff
-       function BG(GG, bG) {
-         tG({
-           ...HG,
-           worldOptions: {
-             ...HG.worldOptions,
-             [GG]: bG
-           }
-         })
-       }
- 
-       function Gb(GG) {
-         tG({
-           ...HG,
-           mapOptions: {
-             ...HG.mapOptions,
-             ...GG
- ... (356 more removed lines; see GitHub link above)
+     function nM(MM, rM, iM, SM) {
+       (0, OM.reportClientError)(MM, rM, iM, !1, jM, {
+         context: SM
```

#### 9. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L478` → after: `L74-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/217.js#L74-L77) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/217.js#L478)

```diff
-   36686: (GG, bG, ZG) => {
+   34885: (MM, rM, iM) => {
+     function OM(MM) {
+       return String(MM).replace(/\d/g, (MM => String.fromCharCode(97 + Number(MM))))
+     }
```

#### 10. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L480-L705` → after: `L79-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L79-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/217.js#L79-L81) · [Before (L480-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/217.js#L480-L705)

```diff
-       d: () => UG
-     });
-     var wG = ZG(1006),
-       SG = ZG.n(wG),
-       LG = ZG(51),
-       yG = ZG(4596),
-       kG = ZG(1067);
- 
-     function UG(GG) {
-       let {
-         locked: bG,
-         children: ZG
-       } = GG;
-       const wG = (0, LG.useRef)(null),
-         UG = (0, yG.e)(wG, "y");
-       return (0, kG.jsx)("div", {
- ... (210 more removed lines; see GitHub link above)
+       b: () => OM
+     })
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/218.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/218.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b)

#### 1. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L4-L7` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/218.js#L4-L10) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/218.js#L4-L7)

```diff
-   36672: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => VG,
-       f: () => fG
+   34877: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       CAPPED_COUNTS_VISIT_CAP: () => jM,
+       reportCappedWasmFailure: () => nM,
+       reportUncappedWasmFailure: () => PM,
+       reportWasmCrash: () => SM,
+       reportWasmFailure: () => aM
```

#### 2. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L9-L15` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/218.js#L12) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/218.js#L9-L15)

```diff
-     var wG = ZG(51),
-       SG = ZG(1311),
-       LG = ZG(1151),
-       yG = ZG(1302),
-       kG = ZG(3458),
-       UG = ZG(4955),
-       YG = ZG(1067);
+     var OM = iM(3258);
```

#### 3. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L18-L50` → after: `L15-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L15-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/218.js#L15-L21) · [Before (L18-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/218.js#L18-L50)

```diff
-       let {
-         loading: bG,
-         schematics: ZG,
-         onSchematicPicked: wG,
-         selectedSchematicIdList: SG = [],
-         disableAutoExport: UG
-       } = GG;
-       const {
-         t: VG
-       } = (0, LG.w)();
-       return (0, YG.jsxs)("div", {
-         className: "SchematicList",
-         children: [bG && (0, YG.jsx)(yG.b, {}), !bG && 0 === ZG.length && (0, YG.jsx)("div", {
-           className: "NoSchematicsText",
-           children: VG("worldBuilder:noSavedSchematic")
-         }), !bG && ZG.map((GG => (0, YG.jsx)(kG.g, {
- ... (17 more removed lines; see GitHub link above)
+       (0, OM.reportClientError)("wasm_load", MM.message, MM.code)
+     }
+     const jM = OM.MAX_ERRORS_PER_VISIT - 4;
+ 
+     function aM(MM, rM, iM, SM) {
+       (0, OM.reportClientError)(MM, rM, iM, !1, OM.MAX_ERRORS_PER_VISIT, {
+         context: SM
```

#### 4. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L54-L92` → after: `L25-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/218.js#L25-L27) · [Before (L54-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/218.js#L54-L92)

```diff
-     function pG(GG) {
-       let {
-         ownedSchematics: bG,
-         currentWorldSchematicId: ZG,
-         onClose: SG
-       } = GG;
-       const {
-         t: yG
-       } = (0, LG.w)(), [kG, pG] = (0, wG.useState)(null);
-       return (0, YG.jsxs)("div", {
-         className: "SchematicListWindow",
-         children: [null === kG && (0, YG.jsxs)(YG.Fragment, {
-           children: [(0, YG.jsx)("h1", {
-             className: "SchematicPopupTitle",
-             children: yG("worldBuilder:schematicList")
-           }), (0, YG.jsx)("h2", {
- ... (23 more removed lines; see GitHub link above)
+     function PM(MM, rM, iM, SM) {
+       (0, OM.reportClientError)(MM, rM, iM, !1, 1 / 0, {
+         context: SM
```

#### 5. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L96-L110` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/218.js#L31-L33) · [Before (L96-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/218.js#L96-L110)

```diff
-     function fG(GG) {
-       let {
-         ownedSchematics: bG,
-         currentWorldSchematicId: ZG,
-         onClose: wG
-       } = GG;
-       SG.NotificationProvider.showCustomPopup({
-         body: GG => (0, YG.jsx)(pG, {
-           ownedSchematics: bG,
-           currentWorldSchematicId: ZG,
-           onClose: GG
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: wG,
-         unlockPointerKey: "schematicListPopup"
+     function nM(MM, rM, iM, SM) {
+       (0, OM.reportClientError)(MM, rM, iM, !1, jM, {
+         context: SM
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/219.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/219.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217)

#### 1. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/219.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/219.js#L2)

```diff
- export const ids = [219];
+ export const ids = [218, 219];
```

#### 2. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/219.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/219.js#L4)

```diff
-   36695: (GG, bG, ZG) => {
+   34877: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L6` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/219.js#L6-L10) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/219.js#L6)

```diff
-       default: () => iG
+       CAPPED_COUNTS_VISIT_CAP: () => jM,
+       reportCappedWasmFailure: () => nM,
+       reportUncappedWasmFailure: () => PM,
+       reportWasmCrash: () => SM,
+       reportWasmFailure: () => aM
```

#### 4. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L8-L48` → after: `L12-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L12-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/219.js#L12-L76) · [Before (L8-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/219.js#L8-L48)

```diff
-     var wG = ZG(1006),
-       SG = ZG.n(wG),
-       LG = ZG(1457),
-       yG = ZG(1003),
-       kG = ZG(751),
-       UG = ZG(1151),
-       YG = ZG(1393),
-       VG = ZG(1444),
-       pG = ZG(3535),
-       fG = ZG(1016),
-       QG = ZG(3458),
-       KG = ZG(2557),
-       hG = ZG(1067);
-     const dG = 2;
- 
-     function JG(GG) {
- ... (25 more removed lines; see GitHub link above)
+     var OM = iM(3258);
+ 
+     function SM(MM) {
+       (0, OM.reportClientError)("wasm_load", MM.message, MM.code)
+     }
+     const jM = OM.MAX_ERRORS_PER_VISIT - 4;
+ 
+     function aM(MM, rM, iM, SM) {
+       (0, OM.reportClientError)(MM, rM, iM, !1, OM.MAX_ERRORS_PER_VISIT, {
+         context: SM
+       })
+     }
+ 
+     function PM(MM, rM, iM, SM) {
+       (0, OM.reportClientError)(MM, rM, iM, !1, 1 / 0, {
+         context: SM
+ ... (49 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L53-L64` → after: `L141-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L141-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/219.js#L141-L155) · [Before (L53-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/219.js#L53-L64)

```diff
-       let {
-         category: ZG,
-         title: wG,
-         tintColour: SG,
-         layout: LG,
-         games: yG,
-         landscape: kG = !1
-       } = GG;
-       const {
-         followsLeader: UG
-       } = (0, KG.i)(), YG = null !== (bG = null === yG || void 0 === yG ? void 0 : yG.slice(0, LG.gameCount)) && void 0 !== bG ? bG : [], pG = {
-         "--custom-game-place-tint": SG
+       const aM = MM instanceof Error ? MM.name : "thrown",
+         PM = (MM instanceof Error && null !== (SM = MM.stack) && void 0 !== SM ? SM : "").split("\n").filter((MM => jM.test(MM))).slice(0, 8).map((MM => MM.trim())),
+         nM = null === rM ? "wasm memory unknown" : `wasm memory ${Math.round(rM/2**20)} MB`,
+         QM = null === iM.panic ? "" : `, panic: ${(0,OM.i)(iM.panic)}`,
+         zM = `${aM}: ${MM instanceof Error?MM.message:String(MM)}`;
+       return `${(0,OM.o)(iM.kind,iM.refusedBytes)} ${zM} (${nM})${QM}${PM.length>0?` | ${PM.join(" < ")}`:""}`
+     }
+     const nM = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;
+ 
+     function QM(MM) {
+       var rM;
+       let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
+       if (!(MM instanceof Error) || !nM.test(MM.message)) return {};
+       if (!("detached" in iM)) return {
+         arrayBufferDetached: "absent"
```

#### 6. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L66-L96` → after: `L157-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/219.js#L157-L159) · [Before (L66-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/219.js#L66-L96)

```diff
-       return (0, hG.jsxs)("div", {
-         className: "CustomGamePlacePanel AnimFadeIn",
-         style: pG,
-         children: [(0, hG.jsx)("h2", {
-           className: "CustomGamePlacePanelHeading",
-           children: (0, hG.jsxs)(VG.LinkPreserveSearch, {
-             to: `/custom-games/${encodeURIComponent(ZG)}`,
-             className: "CustomGamePlacePanelTitle SmallTextBold",
-             children: [(0, hG.jsx)("span", {
-               children: wG
-             }), (0, hG.jsx)(fG.c, {
-               name: "arrow-up"
-             })]
-           })
-         }), (0, hG.jsx)("div", {
-           className: "CustomGamePlacePanelGames",
- ... (15 more removed lines; see GitHub link above)
+       return {
+         arrayBufferDetached: (0, SM.V)(null === (rM = (0, SM.M)(iM, "detached")) || void 0 === rM ? void 0 : rM.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
+       }
```

#### 7. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L100-L126` → after: `L164-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L164-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/219.js#L164-L250) · [Before (L100-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/219.js#L100-L126)

```diff
-       let {
-         categories: bG
-       } = GG;
- 
-       function ZG(GG) {
-         const ZG = bG[GG];
-         return (0, hG.jsx)(zG, {
-           ...ZG,
-           landscape: !0
-         }, ZG.id)
-       }
-       return (0, hG.jsxs)("div", {
-         className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
-         children: [(0, hG.jsxs)("div", {
-           className: "CustomGamePlaceUpper",
-           children: [(0, hG.jsxs)("div", {
- ... (11 more removed lines; see GitHub link above)
+       let rM = "[object Object]";
+       try {
+         rM = String(MM)
+       } catch {}
+       if ("[object Object]" !== rM) return rM;
+       try {
+         var iM, OM;
+         return null !== (iM = null === (OM = JSON.stringify(MM)) || void 0 === OM ? void 0 : OM.slice(0, zM)) && void 0 !== iM ? iM : rM
+       } catch {
+         return rM
+       }
+     }
+   },
+   37266: (MM, rM, iM) => {
+     MM.exports = iM.p + "static/media/bloxd_wasm_bg.5656165110e66edd3713.wasm"
+   },
+ ... (71 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L128-L152` → after: `L252-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L252-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/219.js#L252-L347) · [Before (L128-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/219.js#L128-L152)

```diff
-     const oG = ["section1", "section2", "section3", "section4", "section5", "section6"],
-       XG = {
-         section1: {
-           gameCount: 4,
-           columnCount: 2
-         },
-         section2: {
-           gameCount: 6,
-           columnCount: 6
-         },
-         section3: {
-           gameCount: 8,
-           columnCount: 4
-         },
-         section4: {
-           gameCount: 6,
- ... (9 more removed lines; see GitHub link above)
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
+ ... (80 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L154-L155` → after: `L349-L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L349-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/219.js#L349-L891) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/219.js#L154-L155)

```diff
-       };
-     var uG = ZG(1081);
+       }
+     }
+     Symbol.dispose && (jM.prototype[Symbol.dispose] = jM.prototype.free);
+     class aM {
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
+ ... (527 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L158` → after: `L894-L1207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L894-L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/219.js#L894-L1207) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/219.js#L158)

```diff
-       var GG;
+       const MM = Er.XhAF();
+       var rM = BM(MM[0], MM[1]).slice();
+       return Er.SWNS(MM[0], 4 * MM[1], 4), rM
+     }
+ 
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
+ ... (298 more added lines; see GitHub link above)
```
