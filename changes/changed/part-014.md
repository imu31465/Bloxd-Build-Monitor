# Changed — Bundle Modifications Report (Part 014 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `14 / 86` (**291** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 013](part-013.md) · [Part 015 →](part-015.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/233.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/233.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925)

#### 2. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L21` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L6-L8) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L21)

```diff
-       e: () => jB
+       d: () => oW,
+       h: () => uW,
+       l: () => nW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L23-L26` → after: `L10-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L10-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L10-L67) · [Before (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L23-L26)

```diff
-     const YB = 1 << 20,
-       DB = 1 << 21,
-       QB = 1024,
-       oB = 2048;
+     var mW = OW(35330);
+     const EW = {
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
+       NW = {
+         items: 1024,
+         perFile: 1024,
+ ... (42 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L28-L32` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L69-L70) · [Before (L28-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L28-L32)

```diff
-     function jB(BB, OB, GB) {
-       const jB = BB + YB,
-         yB = OB + QB,
-         JB = GB + YB;
-       return jB < 0 || jB >= DB || JB < 0 || JB >= DB || yB < 0 || yB >= oB ? -1 : (jB * DB + JB) * oB + yB
+     function jW(WW) {
+       return WW.toLocaleString("en-US")
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L49` → after: `L73-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L73-L75) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L49)

```diff
-     function YB(BB) {}
+     function UW(WW, iW, OW) {
+       return WW > iW ? `has ${jW(WW)} ${OW} (the limit is ${jW(iW)})` : null
+     }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L51` → after: `L77-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L77-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L77-L79) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L51)

```diff
-     function DB(BB) {}
+     function kW(WW, iW) {
+       return Number.isInteger(WW) && WW >= 0 && WW < (null !== iW && void 0 !== iW ? iW : 0)
+     }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L53` → after: `L81-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L81-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L81-L83) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L53)

```diff
-     function QB(BB) {}
+     function sW(WW) {
+       return Number.isInteger(WW) && WW >= 0
+     }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L55` → after: `L85-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L85-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L85-L87) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L55)

```diff
-     function oB(BB) {}
+     function MW(WW, iW) {
+       return void 0 !== WW && (!Array.isArray(WW) || WW.length > iW)
+     }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L57` → after: `L89-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L89-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L89-L91) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L57)

```diff
-     function jB(BB) {}
+     function KW(WW, iW) {
+       return "object" === typeof WW && null !== WW && Object.keys(WW).length > iW
+     }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L59` → after: `L93-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L93-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L93-L96) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L59)

```diff
-     function yB(BB, OB, GB) {}
+     function SW(WW) {
+       var iW;
+       return `${WW.normalized?"normalized ":""}${null!==(iW=mW.e[WW.componentType])&&void 0!==iW?iW:WW.componentType} ${WW.type}`
+     }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L61` → after: `L98-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L98-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L98-L104) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L61)

```diff
-     function JB(BB) {}
+     function YW(WW) {
+       const iW = iW => {
+         var OW;
+         return null !== (OW = WW[iW]) && void 0 !== OW ? OW : -1
+       };
+       return 255 === iW(0) && 216 === iW(1) ? "JPEG" : 82 === iW(0) && 73 === iW(1) && 87 === iW(8) && 69 === iW(9) ? "WebP" : 171 === iW(0) && 75 === iW(1) && 84 === iW(2) && 88 === iW(3) ? "KTX2" : "non-PNG"
+     }
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L63-L180` → after: `L106-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L106-L107) · [Before (L63-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L63-L180)

```diff
-     function MB(BB) {}
-   },
-   41797: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => WB,
-       e: () => pB,
-       g: () => TB,
-       j: () => dB,
-       k: () => mB,
-       l: () => IB,
-       o: () => RB,
-       s: () => ZB,
-       v: () => NB,
-       x: () => kB,
-       z: () => cB,
-       C: () => SB,
- ... (102 more removed lines; see GitHub link above)
+     function yW(WW) {
+       return WW.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((iW, OW) => WW[OW] === iW)) && 73 === WW[12] && 72 === WW[13] && 68 === WW[14] && 82 === WW[15]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L185-L188` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L111) · [Before (L185-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L185-L188)

```diff
-       if (0 === BB) return jB;
-       const OB = new QB.d(YB.$b);
-       for (let GB = 0; GB < YB.$b; GB++) OB[GB] = BB >>> 8 * GB & 255;
-       return OB
+       return /^[aeiou]/i.test(WW) ? `an ${WW}` : `a ${WW}`
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L190-L212` → after: `L113-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L113-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L113-L116) · [Before (L190-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L190-L212)

```diff
-     class JB {
-       constructor(BB, OB) {
-         this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new oB(OB, {
-           ptr: () => BB.yz(),
-           CP: () => BB.GjB(),
-           reserve: OB => BB.ljB(OB)
-         }), this.net = new oB(OB, {
-           ptr: () => BB.MjB(),
-           CP: () => BB.JjB(),
-           reserve: OB => BB.pjB(OB)
-         }), this.worker = new oB(OB, {
-           ptr: () => BB.gjB(),
-           CP: () => BB.LjB(),
-           reserve: OB => BB.qjB(OB)
-         }), this.cmd = new oB(OB, {
-           ptr: () => BB.ToB(),
- ... (7 more removed lines; see GitHub link above)
+ 
+     function JW(WW) {
+       const iW = WW.byteStride;
+       return void 0 === iW || Number.isInteger(iW) && iW >= 4 && iW <= 252 && iW % 4 === 0
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L237-L250` → after: `L119-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L119-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L119-L124) · [Before (L237-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L237-L250)

```diff
-     function FB(BB, OB) {
-       BB.forEachWorkerOut(((GB, DB, QB) => {
-         if ((0, YB.de)(GB)) try {
-           var oB;
-           null === (oB = OB.worldgen) || void 0 === oB || oB.take(GB, QB)
-         } catch (yB) {
-           BB.crash(SB, yB)
-         } else try {
-           var jB;
-           null === (jB = OB.mesh) || void 0 === jB || jB.take(GB, DB, QB)
-         } catch (yB) {
-           BB.crash(IB, yB)
-         }
-       }))
+     function hW(WW, iW, OW) {
+       var mW, EW;
+       const NW = null === (mW = WW.bufferViews) || void 0 === mW ? void 0 : mW[OW];
+       if (!NW || !iW || 0 !== NW.buffer) return null;
+       const PW = null !== (EW = NW.byteOffset) && void 0 !== EW ? EW : 0;
+       return !sW(PW) || !sW(NW.byteLength) || PW + NW.byteLength > iW.byteLength ? null : iW.subarray(PW, PW + NW.byteLength)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L255-L261` → after: `L128-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L128-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L128-L139) · [Before (L255-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L255-L261)

```diff
-       let GB = !1;
-       const YB = () => {
-         GB = !1, OB()
-       };
-       return () => {
-         !GB && BB.cursor >= iB && (GB = !0, queueMicrotask(YB))
-       }
+       var OW, EW, NW;
+       const PW = mW.o[iW.type],
+         LW = mW.c[iW.componentType];
+       if (!PW || !LW || !Number.isInteger(iW.count) || iW.count < 0) return !1;
+       if (void 0 === iW.bufferView) return !0;
+       const cW = null === (OW = WW.bufferViews) || void 0 === OW ? void 0 : OW[iW.bufferView],
+         wW = null !== (EW = iW.byteOffset) && void 0 !== EW ? EW : 0;
+       if (!cW || !sW(wW) || wW % LW !== 0) return !1;
+       const tW = PW * LW,
+         ZW = null !== (NW = cW.byteStride) && void 0 !== NW ? NW : tW;
+       if (ZW < tW) return !1;
+       return (0 === iW.count ? 0 : wW + ZW * (iW.count - 1) + tW) <= cW.byteLength
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L266` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L143) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L266)

```diff
-       return uB.has(BB.site) ? BB.error instanceof WebAssembly.RuntimeError || (0, DB.h)(BB.error) : !gB.has(BB.site) && BB.error instanceof Error
+       return WW > EW.fileBytes ? `is ${(WW/PW).toFixed(1)} MiB (the limit is ${EW.fileBytes/PW} MiB)` : null
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L276-L342` → after: `L147-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L147-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L147-L245) · [Before (L276-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L276-L342)

```diff
-       const {
-         site: GB,
-         error: DB,
-         header: QB
-       } = BB, oB = QB ? (0, YB.$d)(QB.lastError) : "noFrame", jB = `CORE-${GB===qB?oB:GB}`, yB = null === DB || void 0 === DB ? "" : ` ${(0,MB.l)(DB)}`, JB = {
-         site: GB,
-         wasmBuild: OB.wasm,
-         clientVersion: OB.client
-       };
-       return QB && (JB.status = String(QB.status), JB.lastError = oB, JB.lastErrorCode = String(QB.lastError), JB.lastErrorDetail = String(QB.lastErrorDetail), JB.errorCount = String(QB.errorCount), JB.frameIndex = String(QB.frameIndex), JB.tickIndex = String(QB.tickIndex)), {
-         code: jB,
-         message: `core ${GB}, last error ${oB};${yB}`,
-         details: JB
-       }
-     }
-     class TB {
- ... (51 more removed lines; see GitHub link above)
+       try {
+         return function(WW, iW) {
+           var OW, PW, ZW, jW, sW, nW, uW, oW, dW, eW, vW, gW, DW, VW, pW, fW, CW;
+           const XW = Array.isArray(WW.extensionsUsed) && WW.extensionsUsed.includes("KHR_draco_mesh_compression");
+           if (function(WW, iW) {
+               var OW, mW;
+               const {
+                 items: EW,
+                 perFile: PW,
+                 surfaces: LW,
+                 few: cW,
+                 bounds: wW,
+                 attributeMembers: tW
+               } = NW;
+               if (MW(WW.extensionsRequired, cW) || MW(WW.animations, 1 / 0) || MW(WW.skins, 1 / 0)) return !0;
+               if (null !== (OW = WW.animations) && void 0 !== OW && OW.length || null !== (mW = WW.skins) && void 0 !== mW && mW.length) return !1;
+ ... (83 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L344-L345` → after: `L247-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L247-L248) · [Before (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L344-L345)

```diff
-               if (VB ??= null === (DB = this.gameHost) || void 0 === DB ? void 0 : DB.takeFault(), void 0 === VB && !this.takeSends(fB)) return YB.J.Fatal;
-               GB = this.core.CZ()
+               if (!kW(WW, FW.length) || Ei.has(WW)) return LW;
+               Ei.add(WW)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L347-L351` → after: `L250-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L250-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L250-L257) · [Before (L347-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L347-L351)

```diff
-             return GB
-           }))
-         } catch (aB) {
-           SB = {
-             error: aB
+           const Pi = new Set,
+             Li = WW => {
+               var iW;
+               return !Pi.has(WW) && (Pi.add(WW), (null !== (iW = FW[WW].children) && void 0 !== iW ? iW : []).every(Li))
+             };
+           for (const mW of null !== (ci = rW[0].nodes) && void 0 !== ci ? ci : []) {
+             var ci;
+             if (!kW(mW, FW.length) || Ei.has(mW) || !Li(mW)) return LW
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L353-L388` → after: `L259-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L259-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L259-L270) · [Before (L353-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L353-L388)

```diff
-         }
-         VB ??= null === (GB = this.gameHost) || void 0 === GB ? void 0 : GB.takeFault();
-         const kB = this.stopped || null !== SB || void 0 !== VB;
-         this.rings.reset(kB ? oB.cursor : NB, kB ? yB.cursor : WB, kB ? JB.cursor : AB);
-         const dB = null === SB && void 0 === VB,
-           KB = dB && !this.stopped && ZB === YB.J.Fatal && 0 === this.core.Fl(),
-           uB = dB && !KB ? this.headerView() : null,
-           mB = KB ? {
-             ...null !== (IB = this.lastHeader) && void 0 !== IB ? IB : (0, YB.re)(new Uint32Array(YB.ib)),
-             status: YB.J.Fatal,
-             lastError: YB.I.CoreBusy,
-             lastErrorDetail: 0
-           } : null === uB ? null : (0, YB.re)(uB);
-         var IB;
-         null !== mB && (this.lastHeader = mB);
-         const FB = null !== mB && ZB !== YB.J.Fatal,
- ... (20 more removed lines; see GitHub link above)
+           for (const mW of FW) {
+             if (void 0 !== mW.matrix) return "uses node matrices";
+             if (void 0 !== mW.skin) return "uses skins";
+             if (void 0 !== mW.weights) return "uses morph targets";
+             if (void 0 !== mW.mesh && !kW(mW.mesh, QW.length)) return LW;
+             const WW = [
+               [mW.translation, 3],
+               [mW.rotation, 4],
+               [mW.scale, 3]
+             ];
+             for (const [iW, OW] of WW)
+               if (void 0 !== iW && (!Array.isArray(iW) || iW.length !== OW || !iW.every((WW => Number.isFinite(WW))))) return LW
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L390-L398` → after: `L272-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L272-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L272-L335) · [Before (L390-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L390-L398)

```diff
-           return this.handEnvEvents()
-         }
-         for (const YB of XB) {
-           if (this.stopped) return !1;
-           try {
-             var cB, hB;
-             null === (cB = (hB = this.handlers).onNetEvent) || void 0 === cB || cB.call(hB, YB)
-           } catch (aB) {
-             return this.crashOn(UB, aB), !1
+           let wi = -1,
+             ti = 0,
+             Zi = 0,
+             xi = null;
+           for (const EW of QW) {
+             if (void 0 !== EW.weights) return "uses morph targets";
+             if (0 === EW.primitives.length) return LW;
+             for (const OW of EW.primitives) {
+               var li, Ai;
+               const EW = null !== (li = OW.mode) && void 0 !== li ? li : 4;
+               var bi;
+               if (4 !== EW && 0 !== EW) return `uses ${null!==(bi=AW[EW])&&void 0!==bi?bi:`mode ${EW}`} primitives`;
+               if (void 0 !== OW.targets) return "uses morph targets";
+               if (void 0 !== OW.material && !kW(OW.material, Wi.length)) return LW;
+               const NW = XW ? null === (Ai = OW.extensions) || void 0 === Ai ? void 0 : Ai.KHR_draco_mesh_compression : void 0;
+               if (NW) {
+ ... (48 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L400-L410` → after: `L337-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L337-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L337-L343) · [Before (L400-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L400-L410)

```diff
-         }
-         return this.handEnvEvents()
-       }
-       handEnvEvents() {
-         for (const QB of this.graceEvents) {
-           if (this.stopped) return !1;
-           try {
-             var BB, OB;
-             null === (BB = (OB = this.handlers).onReconnectGrace) || void 0 === BB || BB.call(OB, QB)
-           } catch (DB) {
-             return this.crashOn(UB, DB), !1
+           let Ui = 0,
+             ki = 0,
+             si = 0;
+           for (let mW = 0; mW < FW.length; mW++) {
+             const WW = FW[mW].mesh;
+             if (void 0 !== WW && Pi.has(mW))
+               for (const iW of QW[WW].primitives) si++, Ui += aW[iW.attributes.POSITION].count, void 0 !== iW.indices && (ki += aW[iW.indices].count)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L412-L415` → after: `L345-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L345-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L345-L347) · [Before (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L412-L415)

```diff
-         }
-         for (const QB of this.envEvents) {
-           if (this.stopped) return !1;
-           try {
+           const Mi = null !== (fW = null !== (CW = UW(Ui, EW.vertices, "vertices")) && void 0 !== CW ? CW : UW(ki, EW.indices, "indices")) && void 0 !== fW ? fW : UW(si, EW.primitives, "primitives");
+           if (Mi) return Mi;
+           for (const mW of Wi) {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L417-L447` → after: `L349-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L349-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L349-L358) · [Before (L417-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L417-L447)

```diff
-             null === (GB = (YB = this.handlers).onEnvEvent) || void 0 === GB || GB.call(YB, QB)
-           } catch (DB) {
-             return this.crashOn(fB, DB), !1
-           }
-         }
-         return !this.stopped
-       }
-       setEventWalker(BB) {
-         this.eventWalker = BB
-       }
-       writePendingInput() {
-         if (this.stopped) return !1;
-         const {
-           input: BB
-         } = this.rings;
-         try {
- ... (15 more removed lines; see GitHub link above)
+             if (void 0 !== mW.emissiveTexture) return "uses an emissive texture";
+             const iW = null !== (Ki = mW.alphaMode) && void 0 !== Ki ? Ki : "OPAQUE";
+             if ("OPAQUE" !== iW && "MASK" !== iW && "BLEND" !== iW) return LW;
+             const OW = null === (Si = mW.pbrMetallicRoughness) || void 0 === Si ? void 0 : Si.baseColorTexture;
+             if (OW) {
+               var Yi, yi, Ti, Ji, Hi;
+               const iW = null !== (Yi = WW.extensionsUsed) && void 0 !== Yi && Yi.includes("KHR_texture_transform") ? null === (yi = OW.extensions) || void 0 === yi ? void 0 : yi.KHR_texture_transform : void 0;
+               if (0 !== (null !== (Ti = OW.texCoord) && void 0 !== Ti ? Ti : 0) || 0 !== (null !== (Ji = null === iW || void 0 === iW ? void 0 : iW.texCoord) && void 0 !== Ji ? Ji : 0)) return "uses a second UV set";
+               const mW = ii[OW.index];
+               if (!mW || !kW(mW.source, Oi.length) || void 0 !== mW.sampler && !kW(mW.sampler, null === (Hi = WW.samplers) || void 0 === Hi ? void 0 : Hi.length)) return LW
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L451-L675` → after: `L361-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L361-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L361-L374) · [Before (L451-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L451-L675)

```diff
-           QB > 0 && this.unsentOptions.splice(0, QB)
-         } catch (OB) {
-           return this.crash(NB, OB), !1
-         }
-         return !0
-       }
-       setHoldDraws(BB) {
-         this.drawsHeld = BB
-       }
-       setUiPrefs(BB) {
-         this.unsentUiPrefs = {
-           ...BB
-         }
-       }
-       setEnvPrefs(BB) {
-         this.unsentEnvPrefs = {
- ... (209 more removed lines; see GitHub link above)
+           for (const mW of Oi) {
+             if (void 0 !== mW.uri) return cW;
+             if (void 0 === mW.bufferView) return LW;
+             const OW = hW(WW, iW, mW.bufferView);
+             if (!OW) return LW;
+             if ("image/png" !== mW.mimeType) {
+               var ni, ui, oi;
+               return `has ${TW(null!==(ni=null!==(ui={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(oi=mW.mimeType)&&void 0!==oi?oi:""])&&void 0!==ui?ui:mW.mimeType)&&void 0!==ni?ni:"untyped")} image`
+             }
+             if (!yW(OW)) return `has ${TW(YW(OW))} image`;
+             const NW = new DataView(OW.buffer, OW.byteOffset, OW.byteLength),
+               PW = NW.getUint32(16),
+               wW = NW.getUint32(20);
+             if (PW > EW.imageSide || wW > EW.imageSide) return `has a ${PW} \xd7 ${wW} image (the limit is ${EW.imageSide})`
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L677-L678` → after: `L376-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L376-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L376-L378) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L677-L678)

```diff
-           MB = BB + (0, YB.qe)(yB)
-         }
+           return null
+         }(WW, iW)
+       } catch {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L800-L802` → after: `L384-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L384-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L384-L385) · [Before (L800-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L800-L802)

```diff
-       DB = {
-         scanned: !1
-       };
+       const iW = nW(WW.byteLength);
+       if (iW) return iW;
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L804-L806` → after: `L387-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L387-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L387-L394) · [Before (L804-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L804-L806)

```diff
-         return BB()
-       } finally {
-         DB = null
+         const {
+           json: iW,
+           bin: OW
+         } = (0, mW.y)(WW);
+         return uW(iW, OW)
+       } catch (OW) {
+         if (OW instanceof mW.n) return OW.reason;
+         throw OW
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L817` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L398) · [Before (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L817)

```diff
-   41864: (BB, OB, GB) => {
+   35330: (WW, iW, OW) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L842-L850` → after: `L401-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L401-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L401-L409) · [Before (L842-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L842-L850)

```diff
-       e: () => DB
-     })
-   },
-   36876: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => jB,
-       d: () => JB,
-       h: () => oB,
-       l: () => PB
+       e: () => lW,
+       i: () => jW,
+       l: () => PW,
+       n: () => NW,
+       o: () => bW,
+       r: () => ZW,
+       t: () => xW,
+       v: () => LW,
+       y: () => tW
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L852-L859` → after: `L411-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L411-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L411-L416) · [Before (L852-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L852-L859)

```diff
-     var YB = GB(36871),
-       DB = GB(6);
-     const QB = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;
- 
-     function oB(BB) {
-       if (BB instanceof WebAssembly.RuntimeError) return !0;
-       const OB = BB instanceof Error ? BB.stack : void 0;
-       return "string" === typeof OB && QB.test(OB)
+     const mW = 1179937895,
+       EW = 1313821514;
+     class NW extends Error {
+       constructor(WW) {
+         super(`GLB refused: it ${WW}`), this.reason = WW, this.name = "GlbRefused"
+       }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L861-L869` → after: `L418-L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L418-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L418-L421) · [Before (L861-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L861-L869)

```diff
- 
-     function jB(BB, OB, GB) {
-       var DB;
-       const oB = BB instanceof Error ? BB.name : "thrown",
-         jB = (BB instanceof Error && null !== (DB = BB.stack) && void 0 !== DB ? DB : "").split("\n").filter((BB => QB.test(BB))).slice(0, 8).map((BB => BB.trim())),
-         yB = null === OB ? "wasm memory unknown" : `wasm memory ${Math.round(OB/2**20)} MB`,
-         JB = null === GB.panic ? "" : `, panic: ${(0,YB.h)(GB.panic)}`,
-         MB = `${oB}: ${BB instanceof Error?BB.message:String(BB)}`;
-       return `${(0,YB.n)(GB.kind,GB.refusedBytes)} ${MB} (${yB})${JB}${jB.length>0?` | ${jB.join(" < ")}`:""}`
+     class PW extends Error {
+       constructor(WW) {
+         super(WW), this.name = "GlbError"
+       }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L874-L882` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L425) · [Before (L874-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L874-L882)

```diff
-       var OB;
-       let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
-       if (!(BB instanceof Error) || !yB.test(BB.message)) return {};
-       if (!("detached" in GB)) return {
-         arrayBufferDetached: "absent"
-       };
-       return {
-         arrayBufferDetached: (0, DB.T)(null === (OB = (0, DB.M)(GB, "detached")) || void 0 === OB ? void 0 : OB.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
-       }
+       return Reflect.get(WW, "scene")
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L884` → after: `L427-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L427-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L427-L428) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L884)

```diff
-     const MB = 500;
+     const cW = 5130562,
+       wW = "is not a binary glTF 2.0 file";
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L887-L896` → after: `L431-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L431-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L431-L471) · [Before (L887-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L887-L896)

```diff
-       let OB = "[object Object]";
-       try {
-         OB = String(BB)
-       } catch {}
-       if ("[object Object]" !== OB) return OB;
-       try {
-         var GB, YB;
-         return null !== (GB = null === (YB = JSON.stringify(BB)) || void 0 === YB ? void 0 : YB.slice(0, MB)) && void 0 !== GB ? GB : OB
-       } catch {
-         return OB
+       var iW;
+       const OW = WW instanceof Uint8Array ? WW : new Uint8Array(WW),
+         PW = function(WW) {
+           const iW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
+           if (WW.byteLength < 20 || iW.getUint32(0, !0) !== mW || 2 !== iW.getUint32(4, !0)) return null;
+           const OW = Math.min(iW.getUint32(8, !0), WW.byteLength),
+             NW = iW.getUint32(12, !0);
+           if (iW.getUint32(16, !0) !== EW || 20 + NW > OW) return null;
+           let PW;
+           try {
+             PW = JSON.parse((new TextDecoder).decode(WW.subarray(20, 20 + NW)))
+           } catch {
+             return null
+           }
+           return "object" === typeof PW && null !== PW ? {
+             json: PW,
+ ... (25 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L936-L938` → after: `L474-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L474-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L474-L476) · [Before (L936-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L936-L938)

```diff
-         kind: YB,
-         panic: QB > 0 ? null : DB,
-         refusedBytes: QB
+         json: LW,
+         bin: bW,
+         fileBytes: OW.byteLength
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L944` → after: `L481-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L481-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L481-L493) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L944)

```diff
-       return BB.replace(/\s*\n\s*/g, " / ").slice(0, jB)
+       const iW = WW.slice(WW.indexOf(",") + 1),
+         OW = Uint8Array.fromBase64;
+       if (OW) return OW(iW).buffer;
+       const mW = atob(iW),
+         EW = new Uint8Array(mW.length);
+       for (let NW = 0; NW < mW.length; NW++) EW[NW] = mW.charCodeAt(NW);
+       return EW.buffer
+     }
+     async function xW(WW) {
+       if (WW.startsWith("data:")) return ZW(WW);
+       const iW = await fetch(WW);
+       if (!iW.ok) throw new PW(`fetching ${WW} failed: ${iW.status} ${iW.statusText}`);
+       return await iW.arrayBuffer()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/234.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/234.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89)

#### 1. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L4-L8` → after: `L4-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/234.js#L4-L15) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/234.js#L4-L8)

```diff
-   37160: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => oB,
-       d: () => DB,
-       g: () => QB
+   35332: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       animatedBlockTextures: () => cW,
+       armourAtlasUrl: () => PW,
+       averageColors: () => wW,
+       blockAtlasUrls: () => NW,
+       blockAtlasWidth: () => mW,
+       buildHash: () => ZW,
+       builtTextureIndexFingerprint: () => tW,
+       imagesPerAtlas: () => EW,
+       outputHash: () => xW,
+       rotatedBlockTextures: () => LW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L10-L277` → after: `L17-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L17-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/234.js#L17-L20) · [Before (L10-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/234.js#L10-L277)

```diff
-     var YB = GB(1896);
-     class DB extends Error {
-       constructor(BB) {
-         super("The game server didn't answer in time"), this.leg = BB, this.name = "SeatRequestTimedOut"
-       }
-     }
-     const QB = new class {
-       constructor() {
-         this.count = 0, this.answers = 0, this.waiting = new Set
-       }
-       get answered() {
-         return this.answers
-       }
-       answer() {
-         this.answers++
-       }
- ... (252 more removed lines; see GitHub link above)
+     const mW = 8,
+       EW = [256, 256, 256, 256, 256, 256, 114],
+       NW = [OW(35334), OW(35338), OW(35340), OW(35347), OW(35355), OW(35363), OW(35369)],
+       PW = OW(35373),
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L279-L383` → after: `L22-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L22-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/234.js#L22-L527) · [Before (L279-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/234.js#L279-L383)

```diff
-         halvedAt: null,
-         reloadSpent: !1
-       };
- 
-     function gB() {
-       let BB = null;
-       try {
-         var OB;
-         BB = JSON.parse(null !== (OB = (0, JB.f)((0, JB.p)(), iB)) && void 0 !== OB ? OB : "null")
-       } catch {
-         return LB
-       }
-       if ("object" !== typeof BB || null === BB) return LB;
-       const {
-         halvedAt: GB,
-         reloadSpent: YB
- ... (89 more removed lines; see GitHub link above)
+         "alloy_kiln_top[rot[1": OW(35382),
+         "alloy_kiln_top[rot[2": OW(35389),
+         "alloy_kiln_top[rot[3": OW(35398),
+         "alloy_kiln_top[rot[4": OW(35406),
+         "auto_bench_top[rot[1": OW(35413),
+         "auto_bench_top[rot[2": OW(35417),
+         "auto_bench_top[rot[3": OW(35424),
+         "auto_bench_top[rot[4": OW(35426),
+         "belt_tunnel_exit_top[rot[1": OW(35432),
+         "belt_tunnel_exit_top[rot[2": OW(35439),
+         "belt_tunnel_exit_top[rot[3": OW(35446),
+         "belt_tunnel_exit_top[rot[4": OW(35451),
+         "belt_tunnel_top[rot[1": OW(35453),
+         "belt_tunnel_top[rot[2": OW(35461),
+         "belt_tunnel_top[rot[3": OW(35469),
+         "belt_tunnel_top[rot[4": OW(35477),
+ ... (490 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L386-L616` → after: `L530-L10909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L530-L10909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/234.js#L530-L10909) · [Before (L386-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/234.js#L386-L616)

```diff
-         targetBytes: jB,
-         leastBytes: yB
-       };
- 
-     function VB(BB) {
-       return {
-         targetBytes: BB,
-         leastBytes: 0
-       }
-     }
- 
-     function SB(BB) {
-       return BB >= DB.c ? WB : AB
-     }
-     const nB = 2 * QB;
- 
- ... (215 more removed lines; see GitHub link above)
+         Unloaded: [
+           [244, 0, 255],
+           [0, 0, 0]
+         ],
+         Dirt: [
+           [133, 98, 77],
+           [139, 102, 80],
+           [127, 92, 74]
+         ],
+         "Messy Dirt": [
+           [123, 87, 59],
+           [129, 90, 62],
+           [118, 81, 57]
+         ],
+         "Grass Block": [
+           [93, 141, 53],
+ ... (10364 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/235.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/235.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248)

#### 1. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/235.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/235.js#L4)

```diff
-   36925: (BB, OB, GB) => {
+   37238: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L6-L10` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/235.js#L6) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/235.js#L6-L10)

```diff
-       ITEM_FILES_WITHOUT_SPRITE: () => jB,
-       ITEM_SPRITES: () => QB,
-       ITEM_SPRITES_WITHOUT_FILE: () => oB,
-       ITEM_SPRITE_RUNS: () => DB,
-       MAX_SPRITE_ITEM_ID: () => YB
+       WasmTextureWorker: () => kW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L12-L16` → after: `L8-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L8-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/235.js#L8-L326) · [Before (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/235.js#L12-L16)

```diff
-     const YB = 10113,
-       DB = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
-       QB = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
-       oB = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
-       jB = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
+     var mW = OW(632),
+       EW = OW(4379),
+       NW = OW(37245),
+       PW = OW.n(NW);
+ 
+     function LW() {
+       return PW()('(()=>{var WW={d:(iW,OW)=>{for(var mW in OW)WW.o(OW,mW)&&!WW.o(iW,mW)&&Object.defineProperty(iW,mW,{enumerable:!0,get:OW[mW]})},o:(WW,iW)=>Object.prototype.hasOwnProperty.call(WW,iW),r:WW=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(W … [truncated]
+     }
+     var cW = OW(37250),
+       wW = OW(4409),
+       tW = OW(4426),
+       ZW = OW(4422),
+       xW = OW(4388);
+ 
+     function lW(WW) {
+       return "" === WW ? [] : WW.split("\0")
+ ... (303 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/236.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/236.js` (47 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L2)

```diff
- export const ids = [236, 237];
+ export const ids = [236];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L4-L21` → after: `L5-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L5-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L5-L8) · [Before (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L4-L21)

```diff
-   44444: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       CharacterCustomisationUI: () => JO
-     });
-     var YB = GB(56),
-       DB = GB(2839),
-       QB = GB(3915),
-       oB = GB(3903),
-       jB = GB(1112),
-       yB = GB(1090),
-       JB = GB.n(yB),
-       MB = GB(1238),
-       PB = GB(615),
-       zB = GB(1175),
-       lB = GB(2392),
-       pB = GB(1611),
- ... (2 more removed lines; see GitHub link above)
+   41001: (WW, iW, OW) => {
+     function mW() {
+       return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
+     }
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L23-L24` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L10-L11) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L23-L24)

```diff
-     function NB(BB, OB) {
-       return ZB.includes(BB) && "string" === typeof OB && (0, qB.e)(BB, OB)
+     function EW(WW) {
+       return WW instanceof Uint8Array && (!mW() || !Buffer.isBuffer(WW))
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L28-L33` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L15) · [Before (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L28-L33)

```diff
-       const OB = {};
-       for (const GB of ZB) {
-         const YB = BB[GB];
-         void 0 !== YB && NB(GB, YB) && (OB[GB] = YB)
-       }
-       return OB
+       return WW instanceof ArrayBuffer
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L37` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L19) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L37)

```diff
-       return 0 === Object.keys(BB).length
+       return !!mW() && Buffer.isBuffer(WW)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L41-L73` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L44) · [Before (L41-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L41-L73)

```diff
-       return Object.entries(BB).every((BB => {
-         let [GB, YB] = BB;
-         return OB[GB] === YB
-       }))
-     }
-     var VB = GB(2397),
-       SB = GB(3497),
-       nB = GB(2063),
-       UB = GB(1485),
-       fB = GB(2437),
-       kB = GB(2516),
-       dB = GB(16),
-       KB = GB(2974),
-       uB = GB(1540),
-       mB = GB(1121),
-       IB = GB(1964);
- ... (17 more removed lines; see GitHub link above)
+       return 506832829 * WW >>> iW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L160-L253` → after: `L47-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L47-L48) · [Before (L160-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L160-L253)

```diff
-     function xB(BB) {
-       let {
-         wornOutfit: OB,
-         onApply: GB,
-         onOverwrite: DB,
-         onDelete: QB
-       } = BB;
-       const {
-         t: oB
-       } = (0, zB.H)(), {
-         accountId: yB,
-         data: MB
-       } = (0, KB.h)(LB, !1), {
-         userContext: PB
-       } = (0, jB.d)();
-       async function lB(BB, OB) {
- ... (78 more removed lines; see GitHub link above)
+     function EW(WW, iW) {
+       return WW[iW] + (WW[iW + 1] << 8) + (WW[iW + 2] << 16) + (WW[iW + 3] << 24)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L260` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L52) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L260)

```diff
-       return null !== BB && !(0, BO.e)(OO.e, OB, GB, BB.collected, BB.ownedPacks)
+       return WW[iW] === WW[OW] && WW[iW + 1] === WW[OW + 1] && WW[iW + 2] === WW[OW + 2] && WW[iW + 3] === WW[OW + 3]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L263-L270` → after: `L55-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L55-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L55-L60) · [Before (L263-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L263-L270)

```diff
-     function YO(BB) {
-       let {
-         locked: OB,
-         children: GB
-       } = BB;
-       return OB ? (0, sB.jsx)(DO, {
-         children: GB
-       }) : GB
+     function PW(WW, iW, OW, mW, EW) {
+       return OW <= 60 ? (mW[EW] = OW - 1 << 2, EW += 1) : OW < 256 ? (mW[EW] = 240, mW[EW + 1] = OW - 1, EW += 2) : (mW[EW] = 244, mW[EW + 1] = OW - 1 & 255, mW[EW + 2] = OW - 1 >>> 8, EW += 3),
+         function(WW, iW, OW, mW, EW) {
+           var NW;
+           for (NW = 0; NW < EW; NW++) OW[mW + NW] = WW[iW + NW]
+         }(WW, iW, mW, EW, OW), EW + OW
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L273-L288` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L63-L64) · [Before (L273-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L273-L288)

```diff
-     function DO(BB) {
-       var OB;
-       let {
-         children: GB
-       } = BB;
-       const {
-         t: YB
-       } = (0, zB.H)(), {
-         userContext: DB
-       } = (0, jB.d)(), QB = null !== (OB = DB.dailyDrop) && void 0 !== OB && OB.hidden ? YB("dailyDrop:lockedFromHidden") : YB("dailyDrop:lockedFrom");
-       return (0, sB.jsx)(CB.g, {
-         tooltipInner: (0, sB.jsx)(sB.Fragment, {
-           children: QB
-         }),
-         children: GB
-       })
+     function LW(WW, iW, OW, mW) {
+       return mW < 12 && OW < 2048 ? (WW[iW] = 1 + (mW - 4 << 2) + (OW >>> 8 << 5), WW[iW + 1] = 255 & OW, iW + 2) : (WW[iW] = 2 + (mW - 1 << 2), WW[iW + 1] = 255 & OW, WW[iW + 2] = OW >>> 8, iW + 3)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L291-L292` → after: `L67-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L67-L69) · [Before (L291-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L291-L292)

```diff
-     function QO(BB, OB, GB) {
-       return (0, lB.p)(BB, OB).purchasable && !(0, wB.x)(BB, OB, GB)
+     function cW(WW, iW, OW, mW) {
+       for (; mW >= 68;) iW = LW(WW, iW, OW, 64), mW -= 64;
+       return mW > 64 && (iW = LW(WW, iW, OW, 60), mW -= 60), LW(WW, iW, OW, mW)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L295-L299` → after: `L72-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L72-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L72-L105) · [Before (L295-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L295-L299)

```diff
-     function oO(BB, OB) {
-       return Object.entries(BB).some((BB => {
-         let [GB, YB] = BB;
-         return QO(GB, YB, OB)
-       }))
+     function wW(WW, iW, LW, wW, tW) {
+       for (var ZW = 1; 1 << ZW <= LW && ZW <= 14;) ZW += 1;
+       var xW = 32 - (ZW -= 1);
+       "undefined" === typeof OW[ZW] && (OW[ZW] = new Uint16Array(1 << ZW));
+       var lW, AW = OW[ZW];
+       for (lW = 0; lW < AW.length; lW++) AW[lW] = 0;
+       var bW, jW, UW, kW, sW, MW, KW, SW, YW, yW, TW = iW + LW,
+         JW = iW,
+         hW = iW,
+         HW = !0;
+       if (LW >= 15)
+         for (bW = TW - 15, UW = mW(EW(WW, iW += 1), xW); HW;) {
+           MW = 32, kW = iW;
+           do {
+             if (jW = UW, KW = MW >>> 5, MW += 1, kW = (iW = kW) + KW, iW > bW) {
+               HW = !1;
+ ... (18 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L303-L334` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L109) · [Before (L303-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L303-L334)

```diff
-       var OB;
-       let {
-         pack: GB,
-         ownedPacks: YB,
-         showStoreLink: DB = !1,
-         children: QB
-       } = BB;
-       const {
-         t: oB
-       } = (0, zB.H)(), jB = XB.d[GB], yB = jB.purchasable && !YB.includes(GB) && XB.u.includes(GB), MB = EB.k[GB];
-       return (0, sB.jsxs)("div", {
-         className: JB()("CosmeticPackGroup", {
-           CosmeticPackGroupLocked: yB
-         }),
-         children: [MB && (0, sB.jsx)(MB, {}), (0, sB.jsxs)("div", {
-           className: "CosmeticPackGroupLabel",
- ... (16 more removed lines; see GitHub link above)
+       this.array = WW
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L337-L472` → after: `L131-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L131-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L131-L134) · [Before (L337-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L337-L472)

```diff
-     function yO(BB) {
-       let {
-         equippedEmoteIds: OB,
-         ownedPacks: GB,
-         canBuy: YB,
-         onUpdateLoadout: DB,
-         onEmoteSelected: QB,
-         onEquipPreviewSkin: oB
-       } = BB;
-       const {
-         t: jB
-       } = (0, zB.H)(), yB = new Set(OB), PB = new Map, pB = Object.keys(lB.h.emote).sort(((BB, OB) => {
-         var GB, YB, DB, QB;
-         return (null !== (GB = null === (YB = (0, lB.n)("emote", BB)) || void 0 === YB ? void 0 : YB.clientIdx) && void 0 !== GB ? GB : 0) - (null !== (DB = null === (QB = (0, lB.n)("emote", OB)) || void 0 === QB ? void 0 : QB.clientIdx) && void 0 !== DB ? DB : 0)
-       })).filter((BB => {
-         const OB = (0, lB.p)("emote", BB),
- ... (120 more removed lines; see GitHub link above)
+     function mW(WW, iW, OW, mW, EW) {
+       var NW;
+       for (NW = 0; NW < EW; NW++) OW[mW + NW] = WW[iW + NW]
+     }
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L474-L480` → after: `L136-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L136-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L136-L139) · [Before (L474-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L474-L480)

```diff
-       function MO() {
-         null !== DO.current && (clearTimeout(DO.current), DO.current = null);
-         const BB = JO.current;
-         null !== BB && (JO.current = null, (0, tB.d)(ZB, [
-           ["emote", BB]
-         ]))
-       }
+     function EW(WW, iW, OW, mW) {
+       var EW;
+       for (EW = 0; EW < mW; EW++) WW[iW + EW] = WW[iW - OW + EW]
+     }
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L482-L498` → after: `L141-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L141-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L141-L148) · [Before (L482-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L482-L498)

```diff
-       function PO(BB, OB, GB) {
-         var YB, DB, QB;
-         HB.current = {
-           ...HB.current,
-           [BB]: OB
-         }, WB(), GB && ((0, tB.d)(ZB, [
-           [BB, OB]
-         ]), EB(null));
-         const oB = (0, lB.n)(BB, OB);
-         if (null !== oB && void 0 !== oB && oB.colourGroup && null !== (YB = XB.d[oB.cosmeticPack].colourGroups) && void 0 !== YB && null !== (DB = YB[oB.colourGroup]) && void 0 !== DB && DB.showSwatchSelector) {
-           const GB = (0, lB.l)(OB);
-           GB && FB((OB => ({
-             ...OB,
-             [`${oB.cosmeticPack}_${BB}_${oB.colourGroup}`]: parseInt(GB[1])
-           })))
-         }
- ... (1 more removed lines; see GitHub link above)
+     function NW(WW) {
+       this.array = WW, this.pos = 0
+     }
+     NW.prototype.readUncompressedLength = function() {
+       for (var WW, iW, OW = 0, mW = 0; mW < 32 && this.pos < this.array.length;) {
+         if (WW = this.array[this.pos], this.pos += 1, (iW = 127 & WW) << mW >>> mW !== iW) return -1;
+         if (OW |= iW << mW, WW < 128) return OW;
+         mW += 7
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L500-L507` → after: `L150-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L150-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L150-L198) · [Before (L500-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L500-L507)

```diff
- 
-       function zO(BB) {
-         uB((OB => {
-           const GB = {
-             ...OB
-           };
-           return delete GB[BB], GB
-         }))
+       return -1
+     }, NW.prototype.uncompressToBuffer = function(WW) {
+       for (var iW, NW, PW, LW, cW = this.array, wW = cW.length, tW = this.pos, ZW = 0; tW < cW.length;)
+         if (iW = cW[tW], tW += 1, 0 === (3 & iW)) {
+           if ((NW = 1 + (iW >>> 2)) > 60) {
+             if (tW + 3 >= wW) return !1;
+             PW = NW - 60, NW = 1 + ((NW = cW[tW] + (cW[tW + 1] << 8) + (cW[tW + 2] << 16) + (cW[tW + 3] << 24)) & OW[PW]), tW += PW
+           }
+           if (tW + NW > wW) return !1;
+           mW(cW, tW, WW, ZW, NW), tW += NW, ZW += NW
+         } else {
+           switch (3 & iW) {
+             case 1:
+               NW = 4 + (iW >>> 2 & 7), LW = cW[tW] + (iW >>> 5 << 8), tW += 1;
+               break;
+             case 2:
+ ... (33 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L509-L530` → after: `L200-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L200-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L200-L236) · [Before (L509-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L509-L530)

```diff
- 
-       function lO(BB, OB) {
-         let {
-           undoable: GB
-         } = OB;
-         Object.keys(KB).length > 0 && uB({});
-         const YB = Object.entries(BB).filter((BB => {
-           let [OB, GB] = BB;
-           return HB.current[OB] !== GB && !QO(OB, GB, pO) && !GO(qO, OB, GB)
-         }));
-         GB ? YB.length > 0 && EB({
-           kind: "worn",
-           outfit: RB(HB.current)
-         }) : EB(null);
-         for (const [DB, QB] of YB) PO(DB, QB, !1);
-         YB.length > 0 && (0, tB.d)(ZB, YB)
- ... (6 more removed lines; see GitHub link above)
+     }
+   },
+   41149: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => NW,
+       g: () => EW,
+       i: () => wW,
+       k: () => lW,
+       n: () => PW,
+       q: () => AW
+     });
+     var mW = OW(41154);
+     const EW = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
+       NW = [-1, 1, 2, 3, 4, 5, 6, 8],
+       PW = WW => {
+         if (!WW || WW.byteLength < 2) throw new TypeError("AAC description must be at least 2 bytes long.");
+ ... (21 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L532-L534` → after: `L238-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L238-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L238-L244) · [Before (L532-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L532-L534)

```diff
-           of BB) {
-           if (!GB) return;
-           OB = !0, vB.current || PO(YB, DB, !1), WB()
+         return null !== tW && tW > 1 && (xW = !1), {
+           objectType: OW,
+           coreObjectType: ZW,
+           frequencyIndex: EW,
+           channelConfiguration: wW,
+           outputSampleRate: lW,
+           outputNumberOfChannels: xW && 1 === tW ? 2 : tW
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L536-L540` → after: `L246-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L246-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L246-L258) · [Before (L536-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L536-L540)

```diff
-         OB && (vB.current = !0)
-       })), (0, YB.useEffect)((() => {
-         if (!NB) {
-           for (const [BB, OB] of Object.entries(ZB.getPlayerCosmetics())) PO(BB, OB, !1);
-           WB()
+       },
+       LW = WW => {
+         const iW = WW.readBits(5);
+         return 31 === iW ? 32 + WW.readBits(6) : iW
+       },
+       cW = WW => {
+         const iW = WW.readBits(4);
+         return 15 === iW ? {
+           frequencyIndex: iW,
+           sampleRate: WW.readBits(24)
+         } : {
+           frequencyIndex: iW,
+           sampleRate: iW < EW.length ? EW[iW] : null
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L542-L578` → after: `L260-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L260-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L260-L436) · [Before (L542-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L542-L578)

```diff
-       }), [NB]), (0, YB.useEffect)((() => () => {
-         MO()
-       }), []);
-       const pO = ZB.getOwnedCosmeticPacks(),
-         qO = function(BB, OB) {
-           return null === BB ? null : {
-             collected: new Set(BB.collected),
-             ownedPacks: OB
-           }
-         }(ZB.dailyDrop, pO),
-         ZO = (0, eB.usePurchasesAllowed)(),
-         NO = Object.keys(lB.h[GB]).filter((BB => {
-           const OB = (0, lB.p)(GB, BB),
-             YB = (0, wB.x)(GB, BB, pO);
-           return !(OB.purchasable && !YB && !ZO) && (OB.clientSelectable || YB)
-         })).sort(((BB, OB) => {
- ... (21 more removed lines; see GitHub link above)
+       },
+       wW = WW => {
+         const iW = 5 === WW.objectType || 29 === WW.objectType,
+           OW = 29 === WW.objectType,
+           EW = iW ? WW.outputSampleRate / 2 : WW.outputSampleRate,
+           PW = OW ? 1 : WW.outputNumberOfChannels,
+           LW = NW.indexOf(PW);
+         if (-1 === LW) throw new TypeError(`Unsupported number of channels: ${WW.outputNumberOfChannels}`);
+         let cW = 16;
+         WW.objectType >= 32 && (cW += 6), 15 === xW(EW) && (cW += 24), iW && (cW += 9, 15 === xW(WW.outputSampleRate) && (cW += 24));
+         const wW = Math.ceil(cW / 8),
+           lW = new Uint8Array(wW),
+           AW = new mW.c(lW);
+         return tW(AW, WW.objectType), ZW(AW, EW), AW.writeBits(4, LW), iW && (ZW(AW, WW.outputSampleRate), tW(AW, 2)), AW.writeBits(3, 0), lW
+       },
+       tW = (WW, iW) => {
+ ... (161 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L580` → after: `L438-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L438-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L438-L453) · [Before (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L580)

```diff
-           OB = new Map;
+           OW = WW.length;
+         for (let mW = 0; mW < OW; mW++) mW + 2 < OW && 0 === WW[mW] && 0 === WW[mW + 1] && 3 === WW[mW + 2] ? (iW.push(0, 0), mW += 2) : iW.push(WW[mW]);
+         return new Uint8Array(iW)
+       },
+       jW = new Uint8Array([0, 0, 0, 1]),
+       UW = WW => {
+         const iW = WW.reduce(((WW, iW) => WW + jW.byteLength + iW.byteLength), 0),
+           OW = new Uint8Array(iW);
+         let mW = 0;
+         for (const EW of WW) OW.set(jW, mW), mW += jW.byteLength, OW.set(EW, mW), mW += EW.byteLength;
+         return OW
+       },
+       kW = (WW, iW) => {
+         const OW = WW.reduce(((WW, OW) => WW + iW + OW.byteLength), 0),
+           mW = new Uint8Array(OW);
+         let NW = 0;
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L582-L584` → after: `L455-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L455-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L455-L469) · [Before (L582-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L582-L584)

```diff
-           var SO, nO;
-           const DB = null !== (SO = null === (nO = (0, lB.n)(GB, YB)) || void 0 === nO ? void 0 : nO.colourGroup) && void 0 !== SO ? SO : null;
-           OB.has(DB) || (OB.set(DB, []), BB.push(DB)), OB.get(DB).push(YB)
+           const WW = new DataView(mW.buffer, mW.byteOffset, mW.byteLength);
+           switch (iW) {
+             case 1:
+               WW.setUint8(NW, PW.byteLength);
+               break;
+             case 2:
+               WW.setUint16(NW, PW.byteLength, !1);
+               break;
+             case 3:
+               (0, EW.cd)(WW, NW, PW.byteLength, !1);
+               break;
+             case 4:
+               WW.setUint32(NW, PW.byteLength, !1)
+           }
+           NW += iW, mW.set(PW, NW), NW += PW.byteLength
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L586-L601` → after: `L471-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L471-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L471-L481) · [Before (L586-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L586-L601)

```diff
-         const QB = BB.map((BB => {
-           var DB;
-           const QB = OB.get(BB),
-             oB = BB ? null === (DB = XB.d[YB].colourGroups) || void 0 === DB ? void 0 : DB[BB] : void 0,
-             jB = !0 === (null === oB || void 0 === oB ? void 0 : oB.showSwatchSelector) && !AO.has(`${YB}_${BB}`);
-           if (jB && oB) {
-             var yB;
-             const OB = null !== (yB = IB[`${YB}_${GB}_${BB}`]) && void 0 !== yB ? yB : (0, XB.i)(oB.colours);
-             return {
-               groupName: BB,
-               showSwatch: jB,
-               cosmetics: QB.filter((BB => {
-                 const GB = (0, lB.l)(BB);
-                 return !GB || OB.toString() === GB[1].toString()
-               }))
-             }
+         return mW
+       },
+       sW = WW => {
+         try {
+           const iW = [],
+             OW = [],
+             mW = [];
+           for (const EW of xW(WW)) {
+             const NW = WW.subarray(EW.offset, EW.offset + EW.length),
+               PW = AW(NW[0]);
+             PW === cW.SPS ? iW.push(NW) : PW === cW.PPS ? OW.push(NW) : PW === cW.SPS_EXT && mW.push(NW)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L604-L606` → after: `L490-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L490-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L490-L500) · [Before (L604-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L604-L606)

```diff
-             groupName: BB,
-             cosmetics: QB,
-             showSwatch: jB
+             configurationVersion: 1,
+             avcProfileIndication: PW.profileIdc,
+             profileCompatibility: PW.constraintFlags,
+             avcLevelIndication: PW.levelIdc,
+             lengthSizeMinusOne: 3,
+             sequenceParameterSets: iW,
+             pictureParameterSets: OW,
+             chromaFormat: LW ? PW.chromaFormatIdc : null,
+             bitDepthLumaMinus8: LW ? PW.bitDepthLumaMinus8 : null,
+             bitDepthChromaMinus8: LW ? PW.bitDepthChromaMinus8 : null,
+             sequenceParameterSetExt: LW ? mW : null
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L608-L655` → after: `L502-L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L502-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L502-L676) · [Before (L608-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L608-L655)

```diff
-         }));
-         VO.set(YB, QB)
-       }
-       const UO = Array.from(RO.keys()),
-         fO = new Map;
-       for (const [YB, DB] of Object.entries(pB.d)) {
-         const BB = XB.d[DB.cosmeticPack],
-           OB = (0, wB.v)(DB.cosmetics, pO),
-           GB = XB.q.some((BB => (0, XB.h)(BB) === YB));
-         (BB.clientSelectable || GB || OB) && ((!BB.purchasable || OB || ZO) && (fO.has(DB.cosmeticPack) || fO.set(DB.cosmeticPack, []), fO.get(DB.cosmeticPack).push([YB, DB])))
-       }
-       const kO = Array.from(fO.keys());
-       return (0, sB.jsxs)("div", {
-         className: "CharCustomisationBody",
-         children: [("cape" === GB || "nameColour" === GB) && !(0, PB.e)(ZB.getPlayerRanks()) && (0, sB.jsxs)("div", {
-           className: "CharCustomisationBodyHeader",
- ... (32 more removed lines; see GitHub link above)
+         } catch (iW) {
+           return NW.d._error("Error building AVC Decoder Configuration Record:", iW), null
+         }
+       },
+       MW = WW => {
+         const iW = [];
+         iW.push(WW.configurationVersion), iW.push(WW.avcProfileIndication), iW.push(WW.profileCompatibility), iW.push(WW.avcLevelIndication), iW.push(252 | 3 & WW.lengthSizeMinusOne), iW.push(224 | 31 & WW.sequenceParameterSets.length);
+         for (const OW of WW.sequenceParameterSets) {
+           const WW = OW.byteLength;
+           iW.push(WW >> 8), iW.push(255 & WW);
+           for (let mW = 0; mW < WW; mW++) iW.push(OW[mW])
+         }
+         iW.push(WW.pictureParameterSets.length);
+         for (const OW of WW.pictureParameterSets) {
+           const WW = OW.byteLength;
+           iW.push(WW >> 8), iW.push(255 & WW);
+ ... (159 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L657-L733` → after: `L678-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L678-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L678-L702) · [Before (L657-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L657-L733)

```diff
-             }), kO.map((BB => {
-               const OB = fO.get(BB);
-               return (0, sB.jsx)(jO, {
-                 pack: BB,
-                 ownedPacks: pO,
-                 showStoreLink: !XB.s.includes(BB) && OB.some((BB => {
-                   let [, {
-                     cosmetics: OB
-                   }] = BB;
-                   return oO(OB, pO)
-                 })),
-                 children: (0, sB.jsx)("div", {
-                   className: "CharacterPresetsGrid",
-                   children: OB.map((BB => {
-                     let [OB, {
-                       cosmetics: GB
- ... (61 more removed lines; see GitHub link above)
+           }(0, EW.Ic)(OW);
+           const lW = (0, EW.Ic)(OW);
+           if (0 === lW)(0, EW.Ic)(OW);
+           else if (1 === lW) {
+             OW.skipBits(1), (0, EW.Jc)(OW), (0, EW.Jc)(OW);
+             const WW = (0, EW.Ic)(OW);
+             for (let iW = 0; iW < WW; iW++)(0, EW.Jc)(OW)
+           }(0, EW.Ic)(OW), OW.skipBits(1);
+           const AW = (0, EW.Ic)(OW),
+             jW = (0, EW.Ic)(OW),
+             UW = 16 * (AW + 1),
+             kW = 16 * (jW + 1);
+           let sW = UW,
+             MW = kW;
+           const KW = OW.readBits(1);
+           KW || OW.skipBits(1), OW.skipBits(1);
+ ... (9 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L735-L865` → after: `L704-L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L704-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L704-L712) · [Before (L735-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L735-L865)

```diff
-           }), "characters" !== OB && "emote" !== OB && (0, sB.jsxs)("div", {
-             className: "CharCustomisPartSelectorWrapper",
-             children: [!1, UO.map((BB => {
-               const OB = VO.get(BB);
-               return (0, sB.jsx)(jO, {
-                 pack: BB,
-                 ownedPacks: pO,
-                 children: OB.map((OB => {
-                   var YB;
-                   let {
-                     groupName: DB,
-                     cosmetics: QB,
-                     showSwatch: oB
-                   } = OB;
-                   const jB = DB ? null === (YB = XB.d[BB].colourGroups) || void 0 === YB ? void 0 : YB[DB] : void 0,
-                     yB = `${BB}_${GB}_${DB}`;
- ... (115 more removed lines; see GitHub link above)
+             sW -= PW * (WW + iW), MW -= LW * (mW + NW)
+           }
+           let YW = 2,
+             TW = 2,
+             JW = 2,
+             hW = 0,
+             HW = {
+               num: 1,
+               den: 1
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L867-L877` → after: `L714-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L714-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L714-L729) · [Before (L867-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L867-L877)

```diff
-             onDrawn: BB => {
-               var OB, GB;
-               const YB = null === (OB = BO.current) || void 0 === OB || null === (GB = OB.getDevTools()) || void 0 === GB ? void 0 : GB.canvas(),
-                 DB = (BB, OB) => 0 === Object.keys(mB.current).length && JSON.stringify(ZB.getPlayerCosmetics()) === BB && OO.current.seq === OB.seq && null === OO.current.id,
-                 jB = JSON.stringify(ZB.getPlayerCosmetics()),
-                 yB = OO.current;
-               if (!QB.p || !BB || void 0 === YB || !DB(jB, yB)) return;
-               const JB = (0, oB.e)(ZB);
-               (0, oB.d)(YB, JB, (() => DB(jB, yB))).catch((BB => {
-                 console.warn("[loading-character] couldn't keep your picture from Customise", BB)
-               }))
+             nW = null,
+             uW = null,
+             oW = null,
+             dW = null;
+           const eW = OW.pos;
+           if (OW.readBits(1)) {
+             if (OW.readBits(1)) {
+               const WW = OW.readBits(8);
+               if (255 === WW) HW = {
+                 num: OW.readBits(16),
+                 den: OW.readBits(16)
+               };
+               else {
+                 const iW = SW[WW];
+                 iW && (HW = iW)
+               }
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L879-L944` → after: `L731-L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L731-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L731-L778) · [Before (L879-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L879-L944)

```diff
-           })]
-         })]
-       })
-     }))
-   },
-   44451: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       CharacterPreview: () => ZB
-     });
-     var YB = GB(56),
-       DB = GB(3072),
-       QB = GB(1238),
-       oB = GB(2787),
-       jB = GB(34828),
-       yB = GB(4056),
-       JB = GB(36948),
- ... (50 more removed lines; see GitHub link above)
+             OW.readBits(1) && OW.skipBits(1);
+             if (OW.readBits(1)) {
+               OW.skipBits(3), hW = OW.readBits(1);
+               OW.readBits(1) && (YW = OW.readBits(8), TW = OW.readBits(8), JW = OW.readBits(8))
+             }
+             OW.readBits(1) && ((0, EW.Ic)(OW), (0, EW.Ic)(OW));
+             OW.readBits(1) && (OW.skipBits(32), OW.skipBits(32), OW.skipBits(1));
+             const WW = OW.readBits(1);
+             WW && yW(OW);
+             const iW = OW.readBits(1);
+             iW && yW(OW), (WW || iW) && OW.skipBits(1), OW.skipBits(1), oW = OW.pos, dW = OW.readBits(1), dW && (OW.skipBits(1), (0, EW.Ic)(OW), (0, EW.Ic)(OW), (0, EW.Ic)(OW), (0, EW.Ic)(OW), nW = (0, EW.Ic)(OW), uW = (0, EW.Ic)(OW))
+           }
+           if (null === nW) {
+             (0, EW.K)(null === uW);
+             if (44 !== NW && 86 !== NW && 100 !== NW && 110 !== NW && 122 !== NW && 244 !== NW || !(16 & PW)) {
+               const WW = AW + 1,
+ ... (32 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L946-L1006` → after: `L780-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L780-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L780-L837) · [Before (L946-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L946-L1006)

```diff
-       })
-     }
-     let pB = null;
-     const qB = .6 * Math.PI,
-       ZB = (0, YB.memo)((0, YB.forwardRef)((function(BB, OB) {
-         let {
-           onReady: GB,
-           onDrawn: JB,
-           owner: MB = "other",
-           framing: PB = "player",
-           forcedCosmetics: ZB,
-           NM: NB,
-           emotePlaySeq: RB,
-           turntableFromYaw: WB = null,
-           nametag: AB
-         } = BB;
- ... (45 more removed lines; see GitHub link above)
+       },
+       yW = WW => {
+         const iW = (0, EW.Ic)(WW);
+         WW.skipBits(4), WW.skipBits(4);
+         for (let OW = 0; OW <= iW; OW++)(0, EW.Ic)(WW), (0, EW.Ic)(WW), WW.skipBits(1);
+         WW.skipBits(5), WW.skipBits(5), WW.skipBits(5), WW.skipBits(5)
+       },
+       TW = (WW, iW) => {
+         if (iW.description) {
+           const OW = 3 & (0, EW.pd)(iW.description)[21];
+           return lW(WW, OW + 1)
+         }
+         return xW(WW)
+       },
+       JW = WW => WW >> 1 & 63,
+       hW = WW => {
+ ... (42 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L1008-L1035` → after: `L839-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L839-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L839-L888) · [Before (L1008-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L1008-L1035)

```diff
-             },
-             isReady() {
-               var BB, OB;
-               return null !== (BB = null === (OB = UB.current) || void 0 === OB ? void 0 : OB.isReady()) && void 0 !== BB && BB
-             },
-             resetCamera() {
-               var BB;
-               null === (BB = UB.current) || void 0 === BB || BB.resetCamera()
-             },
-             setOrbit(BB) {
-               var OB;
-               null === (OB = UB.current) || void 0 === OB || OB.setOrbit(BB)
-             },
-             turnCamera(BB) {
-               var OB;
-               const GB = jB.b[PB];
- ... (12 more removed lines; see GitHub link above)
+               const sW = (0, EW.Ic)(iW),
+                 MW = (0, EW.Ic)(iW);
+               (0, EW.Ic)(iW);
+               const KW = iW.readBits(1);
+               let SW = 0;
+               for (let WW = KW ? 0 : OW; WW <= OW; WW++)(0, EW.Ic)(iW), SW = (0, EW.Ic)(iW), (0, EW.Ic)(iW);
+               (0, EW.Ic)(iW), (0, EW.Ic)(iW), (0, EW.Ic)(iW), (0, EW.Ic)(iW), (0, EW.Ic)(iW), (0, EW.Ic)(iW), iW.readBits(1) && iW.readBits(1) && nW(iW), iW.skipBits(1), iW.skipBits(1), iW.readBits(1) && (iW.skipBits(4), iW.skipBits(4), (0, EW.Ic)(iW), (0, EW.Ic)(iW), iW.skipBits … [truncated]
+               const YW = (0, EW.Ic)(iW);
+               if (uW(iW, YW), iW.readBits(1)) {
+                 const WW = (0, EW.Ic)(iW);
+                 for (let OW = 0; OW < WW; OW++)(0, EW.Ic)(iW), iW.skipBits(1)
+               }
+               iW.skipBits(1), iW.skipBits(1);
+               let yW = 2,
+                 TW = 2,
+                 JW = 2,
+ ... (34 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L1038-L1077` → after: `L901-L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L901-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L901-L1011) · [Before (L1038-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L1038-L1077)

```diff
-         }), [ZB, PB, LB]), (0, YB.useEffect)((() => {
-           const BB = yB.c.register(MB),
-             OB = jB.g.openCharacter(VB.current, PB);
-           UB.current = OB, pB = OB;
-           let GB = !0;
-           return OB.ready.then((() => {
-             GB && (KB(!0), uB.current())
-           })).catch((BB => {
-             console.error("Failed to set up the character preview", BB)
-           })), () => {
-             GB = !1, BB(), pB === OB && (OB.resetCamera(), pB = null), OB.close(), UB.current = null
-           }
-         }), []), (0, YB.useEffect)((() => {
-           SB <= 0 || nB <= 0 || UB.current.resize(SB, nB)
-         }), [SB, nB]), (0, YB.useEffect)((() => {
-           if (!dB) return;
- ... (24 more removed lines; see GitHub link above)
+           const ZW = [...iW.length ? [{
+             arrayCompleteness: 1,
+             nalUnitType: wW.VPS_NUT,
+             nalUnits: iW
+           }] : [], ...OW.length ? [{
+             arrayCompleteness: 1,
+             nalUnitType: wW.SPS_NUT,
+             nalUnits: OW
+           }] : [], ...mW.length ? [{
+             arrayCompleteness: 1,
+             nalUnitType: wW.PPS_NUT,
+             nalUnits: mW
+           }] : [], ...PW.length ? [{
+             arrayCompleteness: 1,
+             nalUnitType: JW(PW[0][0]),
+             nalUnits: PW
+ ... (95 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L1079-L1086` → after: `L1013-L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L1013-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L1013-L1017) · [Before (L1079-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L1079-L1086)

```diff
-           const YB = performance.now();
-           let DB = 0;
-           const QB = oB => {
-             BB.setOrbit({
-               yaw: WB + (oB - YB) / 6e3 * 2 * Math.PI,
-               pitch: OB,
-               radius: GB
-             }), DB = requestAnimationFrame(QB)
+         if (WW.readBits(1)) {
+           const iW = WW.readBits(8);
+           if (255 === iW) cW = {
+             num: WW.readBits(16),
+             den: WW.readBits(16)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L1088-L1127` → after: `L1019-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L1019-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L1019-L1109) · [Before (L1088-L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L1088-L1127)

```diff
-           return DB = requestAnimationFrame(QB), () => {
-             cancelAnimationFrame(DB), pB === BB && BB.resetCamera()
-           }
-         }), [dB, WB]), (0, zB.jsxs)(zB.Fragment, {
-           children: [(0, zB.jsx)("div", {
-             className: "CharCustomisationPreview",
-             ref: VB
-           }), AB && (0, zB.jsx)(lB, {
-             nametag: AB
-           })]
-         })
-       })))
-   },
-   37063: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
- ... (24 more removed lines; see GitHub link above)
+           else {
+             const WW = SW[iW];
+             WW && (cW = WW)
+           }
+         }
+         return WW.readBits(1) && WW.readBits(1), WW.readBits(1) && (WW.readBits(3), PW = WW.readBits(1), WW.readBits(1) && (OW = WW.readBits(8), mW = WW.readBits(8), NW = WW.readBits(8))), WW.readBits(1) && ((0, EW.Ic)(WW), (0, EW.Ic)(WW)), WW.readBits(1), WW.readBits(1), WW.read … [truncated]
+           pixelAspectRatio: cW,
+           colourPrimaries: OW,
+           transferCharacteristics: mW,
+           matrixCoefficients: NW,
+           fullRangeFlag: PW,
+           minSpatialSegmentationIdc: LW
+         }
+       },
+       eW = (WW, iW, OW) => {
+         let mW = !1,
+ ... (75 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L1129-L1130` → after: `L1111-L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L1111-L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L1111-L1128) · [Before (L1129-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L1129-L1130)

```diff
-             UB: OB,
-             fB: GB
+             configurationVersion: mW,
+             generalProfileSpace: PW,
+             generalTierFlag: LW,
+             generalProfileIdc: cW,
+             generalProfileCompatibilityFlags: wW,
+             generalConstraintIndicatorFlags: tW,
+             generalLevelIdc: ZW,
+             minSpatialSegmentationIdc: xW,
+             parallelismType: lW,
+             chromaFormatIdc: AW,
+             bitDepthLumaMinus8: bW,
+             bitDepthChromaMinus8: jW,
+             avgFrameRate: UW,
+             constantFrameRate: sW,
+             numTemporalLayers: MW,
+             temporalIdNested: KW,
+ ... (2 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L1132-L1177` → after: `L1130-L2682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR1130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L1130-L2682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L1130-L2682) · [Before (L1132-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L1132-L1177)

```diff
-         }));
-         this.pending.clear(), this.lastSentAt = Date.now(), DB.b.updateCosmetics(BB, OB).catch((BB => {
-           console.error("Failed to update cosmetics", BB)
-         }))
-       }
-     };
- 
-     function oB(BB, OB) {
-       for (const [GB, YB] of OB) BB.setPlayerCosmetics(GB, YB);
-       if (null === YB.gameBridge.latest("connectedGame").websocketUrl) QB.save(BB, OB);
-       else
-         for (const [GB, DB] of OB) YB.gameBridge.send("updateMyCosmetic", {
-           UB: GB,
-           fB: DB
-         })
-     }
- ... (30 more removed lines; see GitHub link above)
+         } catch (iW) {
+           return NW.d._error("Error deserializing HEVC Decoder Configuration Record:", iW), null
+         }
+       };
+     var VW;
+     ! function(WW) {
+       WW[WW.audAllowed = 0] = "audAllowed", WW[WW.beforeFirstVcl = 1] = "beforeFirstVcl", WW[WW.afterFirstVcl = 2] = "afterFirstVcl", WW[WW.eoBitstreamAllowed = 3] = "eoBitstreamAllowed", WW[WW.noMoreDataAllowed = 4] = "noMoreDataAllowed"
+     }(VW || (VW = {}));
+     const pW = {
+         1: {
+           colourPrimaries: 5,
+           transferCharacteristics: 6,
+           matrixCoefficients: 5
+         },
+         2: {
+           colourPrimaries: 1,
+ ... (1537 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L1179-L1181` → after: `L2684-L2786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR2684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L2684-L2786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L2684-L2786) · [Before (L1179-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L1179-L1181)

```diff
- 
-     function yB() {
-       return QB
+     const lW = {
+         "very-low": 0,
+         low: .25,
+         medium: .5,
+         high: .75,
+         "very-high": 1
+       },
+       AW = {
+         avc: {
+           min: 0,
+           max: 51,
+           worst: 41,
+           best: 16
+         },
+         hevc: {
+           min: 0,
+ ... (87 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L1183-L1186` → after: `L2788-L2830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR2788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L2788-L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L2788-L2830) · [Before (L1183-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L1183-L1186)

```diff
- 
-     function JB(BB) {
-       DB = BB, QB++, (0, YB.b)();
-       for (const OB of oB) OB()
+     NW._level = mW.Info, NW._emitterInstance = null
+   },
+   41205: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => wW,
+       g: () => tW,
+       k: () => cW,
+       n: () => ZW,
+       o: () => PW
+     });
+     OW(41149);
+     var mW = OW(41156);
+     OW(41127), OW(41171);
+     var EW = OW(41190);
+     OW(41198), OW(41196);
+     OW(41160), OW(41162), "function" === typeof SuppressedError && SuppressedError;
+ ... (27 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L1188-L1190` → after: `L2832-L2873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR2832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L2832-L2873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L2832-L2873) · [Before (L1188-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L1188-L1190)

```diff
- 
-     function MB(BB) {
-       oB.add(BB)
+     class PW extends NW {
+       constructor(WW) {
+         if (super(), !mW.x.includes(WW)) throw new TypeError(`Invalid video codec '${WW}'. Must be one of: ${mW.x.join(", ")}.`);
+         this._codec = WW
+       }
+     }
+     const LW = (WW, iW) => {
+       if (WW.metadata.hasOnlyKeyPackets && "key" !== iW.type) throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")
+     };
+     class cW extends PW {
+       constructor(WW) {
+         super(WW)
+       }
+       add(WW, iW) {
+         if (!(WW instanceof EW.c)) throw new TypeError("packet must be an EncodedPacket.");
+         if (WW.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
+ ... (26 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L1193-L1195` → after: `L2876-L2890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR2876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L2876-L2890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L2876-L2890) · [Before (L1193-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L1193-L1195)

```diff
-   37009: (BB, OB, GB) => {
-     function YB() {
-       return GB(37013)
+   41134: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => NW,
+       g: () => cW,
+       i: () => EW,
+       j: () => LW,
+       l: () => PW,
+       m: () => wW
+     });
+     var mW = OW(41127);
+     class EW {
+       constructor(WW, iW) {
+         if (this.data = WW, this.mimeType = iW, !(WW instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
+         if ("string" !== typeof iW) throw new TypeError("mimeType must be a string.")
+       }
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L1197-L1199` → after: `L2892-L2898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR2892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L2892-L2898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L2892-L2898) · [Before (L1197-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L1197-L1199)

```diff
- 
-     function DB() {
-       return GB(37018)
+     class NW {
+       constructor(WW, iW, OW, mW) {
+         if (this.data = WW, this.mimeType = iW, this.name = OW, this.description = mW, !(WW instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
+         if (void 0 !== iW && "string" !== typeof iW) throw new TypeError("mimeType, when provided, must be a string.");
+         if (void 0 !== OW && "string" !== typeof OW) throw new TypeError("name, when provided, must be a string.");
+         if (void 0 !== mW && "string" !== typeof mW) throw new TypeError("description, when provided, must be a string.")
+       }
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L1201` → after: `L2900-L2952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR2900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L2900-L2952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L2900-L2952) · [Before (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L1201)

```diff
- 
+     const PW = WW => {
+         if (!WW || "object" !== typeof WW) throw new TypeError("tags must be an object.");
+         if (void 0 !== WW.title && "string" !== typeof WW.title) throw new TypeError("tags.title, when provided, must be a string.");
+         if (void 0 !== WW.description && "string" !== typeof WW.description) throw new TypeError("tags.description, when provided, must be a string.");
+         if (void 0 !== WW.artist && "string" !== typeof WW.artist) throw new TypeError("tags.artist, when provided, must be a string.");
+         if (void 0 !== WW.album && "string" !== typeof WW.album) throw new TypeError("tags.album, when provided, must be a string.");
+         if (void 0 !== WW.albumArtist && "string" !== typeof WW.albumArtist) throw new TypeError("tags.albumArtist, when provided, must be a string.");
+         if (void 0 !== WW.trackNumber && (!Number.isInteger(WW.trackNumber) || WW.trackNumber <= 0)) throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");
+         if (void 0 !== WW.tracksTotal && (!Number.isInteger(WW.tracksTotal) || WW.tracksTotal <= 0)) throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");
+         if (void 0 !== WW.discNumber && (!Number.isInteger(WW.discNumber) || WW.discNumber <= 0)) throw new TypeError("tags.discNumber, when provided, must be a positive integer.");
+         if (void 0 !== WW.discsTotal && (!Number.isInteger(WW.discsTotal) || WW.discsTotal <= 0)) throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");
+         if (void 0 !== WW.genre && "string" !== typeof WW.genre) throw new TypeError("tags.genre, when provided, must be a string.");
+         if (void 0 !== WW.date && (!(WW.date instanceof Date) || Number.isNaN(WW.date.getTime()))) throw new TypeError("tags.date, when provided, must be a valid Date.");
+         if (void 0 !== WW.beatsPerMinute && (!Number.isInteger(WW.beatsPerMinute) || WW.beatsPerMinute <= 0)) throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");
+         if (void 0 !== WW.lyrics && "string" !== typeof WW.lyrics) throw new TypeError("tags.lyrics, when provided, must be a string.");
+         if (void 0 !== WW.images) {
+ ... (37 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L1203` → after: `L2954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR2954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L2954) · [Before (L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L1203)

```diff
-       return ["pl", "ru", "tr", "uk", "vi"].includes(BB)
+       if (!WW) throw new Error("Assertion failed.")
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L1206` → after: `L2957-L2992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR2957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L2957-L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L2957-L2992) · [Before (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L1206)

```diff
-       b: () => QB,
+       $: () => fi,
+       $c: () => RW,
+       A: () => rW,
+       Bb: () => eW,
+       Bd: () => KW,
+       Cc: () => Si,
+       E: () => Ji,
+       Ec: () => ii,
+       F: () => Ti,
+       Fb: () => xi,
+       Gc: () => pW,
+       Hb: () => Ai,
+       Ic: () => sW,
+       J: () => CW,
+       Jc: () => MW,
+       K: () => mW,
+ ... (20 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L1208-L1212` → after: `L2994-L3553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR2994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L2994-L3553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L2994-L3553) · [Before (L1208-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L1208-L1212)

```diff
-       e: () => DB
-     })
-   },
-   37013: (BB, OB, GB) => {
-     BB.exports = GB.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
+       cc: () => UW,
+       cd: () => BW,
+       ed: () => Hi,
+       fb: () => dW,
+       fc: () => ci,
+       g: () => nW,
+       gd: () => JW,
+       hc: () => yi,
+       j: () => Pi,
+       jb: () => bW,
+       kc: () => ki,
+       kd: () => hW,
+       lb: () => Ni,
+       ld: () => Xi,
+       mb: () => wW,
+       mc: () => jW,
+ ... (544 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L1214-L1215` → after: `L3555-L8304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR3555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L3555-L8304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/236.js#L3555-L8304) · [Before (L1214-L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/236.js#L1214-L1215)

```diff
-   37018: (BB, OB, GB) => {
-     BB.exports = GB.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
+   41142: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => VO,
+       f: () => pO,
+       h: () => DO,
+       j: () => vO,
+       n: () => CO
+     });
+     var mW = OW(41149),
+       EW = OW(41156);
+     var NW;
+     ! function(WW) {
+       WW[WW.FrameCount = 1] = "FrameCount", WW[WW.FileSize = 2] = "FileSize", WW[WW.Toc = 4] = "Toc"
+     }(NW || (NW = {}));
+     var PW = OW(41162),
+       LW = OW(41127);
+ ... (4734 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/237.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/237.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab)

#### 1. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L4)

```diff
-   44451: (BB, OB, GB) => {
+   53676: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L6)

```diff
-       CharacterPreview: () => ZB
+       loadGlbAsset: () => Ji,
+       loadGlbTree: () => Ti
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L8-L17` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L9-L11) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L8-L17)

```diff
-     var YB = GB(56),
-       DB = GB(3072),
-       QB = GB(1238),
-       oB = GB(2787),
-       jB = GB(34828),
-       yB = GB(4056),
-       JB = GB(36948),
-       MB = GB(36963),
-       PB = GB(36991),
-       zB = GB(1282);
+     var mW = OW(39088),
+       EW = OW(136),
+       NW = OW(1189);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L20-L21` → after: `L14-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L14-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L14-L48) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L20-L21)

```diff
-       let {
-         nametag: OB
+       return (0, EW.isDiscordClient)() ? `https://${NW.d.discordDomain}/${WW.href}` : WW.href
+     }
+     const LW = {
+       scriptUrl: PW(new OW.U(OW(53679))),
+       wasmBinaryUrl: PW(new OW.U(OW(53687)))
+     };
+     var cW = OW(2388),
+       wW = OW(37245),
+       tW = OW.n(wW);
+ 
+     function ZW() {
+       return tW()('(()=>{class WW extends Error{}function iW(iW,OW){const mW=iW._malloc(OW);if(0===mW)throw new WW(`Draco: the decoder\'s heap refused ${OW} bytes`);return mW}function OW(OW,mW,EW,NW){let PW=null,LW=null,cW=null;try{PW=new OW.Decoder,LW=new OW.DecoderBuffer,LW.Ini … [truncated]
+     }
+     var xW = OW(100),
+       lW = OW(5089),
+       AW = OW(299);
+ ... (19 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L23-L55` → after: `L50-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L50-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L50-L131) · [Before (L23-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L23-L55)

```diff
-       const GB = (0, YB.useRef)(null),
-         {
-           height: QB
-         } = (0, DB.e)(GB),
-         [oB, jB] = (0, YB.useState)(!1),
-         {
-           name: yB,
-           ranks: lB,
-           nameColour: pB
-         } = OB;
-       return (0, YB.useEffect)((() => {
-         let BB = !0;
-         return PB.k.untilLoadedFor(yB).then((() => {
-           BB && jB(!0)
-         })), () => {
-           BB = !1
- ... (17 more removed lines; see GitHub link above)
+       return kW ??= (0, cW.C)(iW), kW.catch((() => {
+         kW = null
+       })), SW.workersStarted++, Promise.all([kW, (0, AW.p)()]).then((iW => {
+         let [OW] = iW;
+         return new Promise(((iW, mW) => {
+           const EW = new ZW;
+           EW.onerror = WW => {
+             EW.onmessage = null, EW.onerror = null, EW.terminate(), mW(new Error("Draco: the decode worker failed to start" + (WW.message ? `: ${WW.message}` : " (its script did not load)")))
+           }, EW.onmessage = WW => {
+             let {
+               data: OW
+             } = WW;
+             EW.onmessage = null, EW.onerror = null, "initDone" === OW.id ? iW(EW) : (EW.terminate(), mW(new Error(`Draco: ${"initError"===OW.id?OW.message:"the worker did not start"}`)))
+           };
+           const NW = OW.slice().buffer,
+             PW = {
+ ... (66 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L57-L64` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L133) · [Before (L57-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L57-L64)

```diff
-         return YB(), (0, PB.h)(YB)
-       }), [oB, QB, yB, lB, pB]), (0, zB.jsx)("canvas", {
-         ref: GB,
-         className: "CharacterPreviewNametag",
-         role: "img",
-         "aria-label": yB,
-         style: {
-           visibility: oB ? void 0 : "hidden"
+           return sW.push(iW), SW.mostWorkers = Math.max(SW.mostWorkers, sW.length), void JW(iW, WW)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L66` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L135-L136) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L66)

```diff
-       })
+         MW.push(WW)
+       }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L68-L110` → after: `L138-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L138-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L138-L176) · [Before (L68-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L68-L110)

```diff
-     let pB = null;
-     const qB = .6 * Math.PI,
-       ZB = (0, YB.memo)((0, YB.forwardRef)((function(BB, OB) {
-         let {
-           onReady: GB,
-           onDrawn: JB,
-           owner: MB = "other",
-           framing: PB = "player",
-           forcedCosmetics: ZB,
-           NM: NB,
-           emotePlaySeq: RB,
-           turntableFromYaw: WB = null,
-           nametag: AB
-         } = BB;
-         const VB = (0, YB.useRef)(null),
-           {
- ... (27 more removed lines; see GitHub link above)
+ 
+     function HW(WW, iW, OW) {
+       return new Promise(((mW, EW) => {
+         hW({
+           data: new Int8Array(WW.buffer, WW.byteOffset, WW.byteLength).slice(),
+           attributeIds: iW,
+           expected: OW,
+           resolve: mW,
+           reject: EW
+         })
+       }))
+     }
+     var nW = OW(38549),
+       uW = OW(38562),
+       oW = OW(35330),
+       dW = OW(35324);
+ ... (23 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L112-L124` → after: `L178-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L178-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L178-L191) · [Before (L112-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L112-L124)

```diff
-                 UB.current !== BB || IB.current !== OB || FB.current || (FB.current = !0, null === (YB = mB.current) || void 0 === YB || YB.call(mB, GB))
-               }))
-             }))
-           }), []);
-         return (0, YB.useImperativeHandle)(OB, (() => {
-           const BB = (BB, OB) => {
-             var GB;
-             (fB.current[BB] = OB, null !== ZB && void 0 !== ZB && ZB[BB]) || (null === (GB = UB.current) || void 0 === GB || GB.setCosmetic(BB, OB), LB())
-           };
-           return {
-             updateCosmetic: BB,
-             setAllCosmetics(OB) {
-               for (const YB of QB.t) {
+                 const NW = WW.bufferViews[OW],
+                   PW = null !== (EW = NW.byteOffset) && void 0 !== EW ? EW : 0;
+                 mW = {
+                   index: OW,
+                   bytes: iW.subarray(PW, PW + NW.byteLength),
+                   byteStride: NW.byteStride
+                 }, UW.set(OW, mW)
+               }
+               return mW
+             },
+             sW = new Map,
+             MW = iW => {
+               let OW = sW.get(iW);
+               if (!OW) {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L126` → after: `L193-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L193-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L193-L205) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L126)

```diff
-                 BB(YB, null !== (GB = OB[YB]) && void 0 !== GB ? GB : (0, oB.d)(YB))
+                 const EW = WW.accessors[iW];
+                 OW = {
+                   index: iW,
+                   count: EW.count,
+                   type: EW.type,
+                   numComponents: oW.o[EW.type],
+                   componentType: EW.componentType,
+                   normalized: null !== (mW = EW.normalized) && void 0 !== mW && mW,
+                   byteOffset: EW.byteOffset,
+                   bufferView: void 0 === EW.bufferView ? null : kW(EW.bufferView),
+                   min: EW.min,
+                   max: EW.max
+                 }, sW.set(iW, OW)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L129` → after: `L209-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L209-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L209-L262) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L129)

```diff
-             isReady() {
+             KW = null !== (OW = null === (mW = WW.extensionsUsed) || void 0 === mW ? void 0 : mW.includes("KHR_draco_mesh_compression")) && void 0 !== OW && OW,
+             SW = (null !== (EW = WW.meshes) && void 0 !== EW ? EW : []).map(((iW, OW) => {
+               const mW = iW.primitives.map(((iW, OW) => {
+                 var mW, EW, NW;
+                 const PW = KW ? null === (mW = iW.extensions) || void 0 === mW ? void 0 : mW.KHR_draco_mesh_compression : void 0;
+                 let LW = null;
+                 const cW = [];
+                 if (PW) {
+                   const OW = {
+                     vertices: WW.accessors[iW.attributes.POSITION].count,
+                     indices: void 0 === iW.indices ? 0 : WW.accessors[iW.indices].count,
+                     components: {}
+                   };
+                   LW = {
+                     bufferView: kW(PW.bufferView),
+                     attributeIds: {},
+ ... (38 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L131-L168` → after: `L264-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L264-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L264-L334) · [Before (L131-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L131-L168)

```diff
-               return null !== (BB = null === (OB = UB.current) || void 0 === OB ? void 0 : OB.isReady()) && void 0 !== BB && BB
-             },
-             resetCamera() {
-               var BB;
-               null === (BB = UB.current) || void 0 === BB || BB.resetCamera()
-             },
-             setOrbit(BB) {
-               var OB;
-               null === (OB = UB.current) || void 0 === OB || OB.setOrbit(BB)
-             },
-             turnCamera(BB) {
-               var OB;
-               const GB = jB.b[PB];
-               null === (OB = UB.current) || void 0 === OB || OB.setOrbit({
-                 ...GB,
-                 yaw: GB.yaw + BB
- ... (22 more removed lines; see GitHub link above)
+               return {
+                 index: iW,
+                 name: WW.name,
+                 children: null !== (OW = WW.children) && void 0 !== OW ? OW : [],
+                 mesh: null !== (mW = WW.mesh) && void 0 !== mW ? mW : null,
+                 translation: WW.translation,
+                 rotation: WW.rotation,
+                 scale: WW.scale,
+                 hasCamera: void 0 !== WW.camera,
+                 extras: WW.extras
+               }
+             })),
+             yW = null !== (PW = null === (LW = WW.extensionsUsed) || void 0 === LW ? void 0 : LW.includes("KHR_materials_unlit")) && void 0 !== PW && PW,
+             TW = null !== (cW = null === (wW = WW.extensionsUsed) || void 0 === wW ? void 0 : wW.includes("KHR_texture_transform")) && void 0 !== cW && cW,
+             JW = (null !== (tW = WW.materials) && void 0 !== tW ? tW : []).map(((WW, iW) => {
+               var OW, mW, EW, NW;
+ ... (55 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L170-L178` → after: `L336-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L336-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L336-L411) · [Before (L170-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L170-L178)

```diff
-         }), []), (0, YB.useEffect)((() => {
-           SB <= 0 || nB <= 0 || UB.current.resize(SB, nB)
-         }), [SB, nB]), (0, YB.useEffect)((() => {
-           if (!dB) return;
-           const BB = kB.current;
-           for (const OB of QB.t) {
-             const GB = null === ZB || void 0 === ZB ? void 0 : ZB[OB],
-               YB = BB[OB];
-             GB && GB !== YB ? UB.current.setCosmetic(OB, GB) : !GB && YB && fB.current[OB] && UB.current.setCosmetic(OB, fB.current[OB])
+         }(OW, mW)
+       } catch (NW) {
+         throw NW instanceof oW.l ? NW : new oW.l(`reading the GLB failed: ${NW instanceof Error?NW.message:String(NW)}`)
+       }
+     }
+     async function gW(WW, iW) {
+       var OW, mW;
+       const EW = WW.draco;
+       if (!EW) throw new oW.l("not a Draco primitive");
+       let NW;
+       try {
+         NW = await iW(EW.bufferView.bytes, EW.attributeIds, EW.expected)
+       } catch (wW) {
+         throw new oW.l(`Draco decoding failed: ${wW instanceof Error?wW.message:String(wW)}`)
+       }
+       const {
+ ... (60 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L180-L209` → after: `L413-L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L413-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L413-L421) · [Before (L180-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L180-L209)

```diff
-           kB.current = {
-             ...ZB
-           }, iB.current = !0, LB()
-         }), [ZB, dB, LB]), (0, YB.useEffect)((() => {
-           dB && UB.current.playEmote(null !== NB && void 0 !== NB ? NB : null)
-         }), [NB, RB, dB]), (0, YB.useEffect)((() => {
-           if (!dB || null === WB) return;
-           const BB = UB.current,
-             {
-               pitch: OB,
-               radius: GB
-             } = jB.b[PB];
-           if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return BB.setOrbit({
-             yaw: WB + qB,
-             pitch: OB,
-             radius: GB
- ... (14 more removed lines; see GitHub link above)
+           const LW = null !== (iW = NW.byteStride) && void 0 !== iW ? iW : PW * oW.c[EW.componentType];
+           return {
+             kind: mW,
+             data: NW.bytes,
+             offset: null !== (OW = EW.byteOffset) && void 0 !== OW ? OW : 0,
+             stride: LW,
+             components: PW,
+             glType: EW.componentType,
+             isNormalized: EW.normalized
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L211-L225` → after: `L423-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L423-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L423-L427) · [Before (L211-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L211-L225)

```diff
-         }), [dB, WB]), (0, zB.jsxs)(zB.Fragment, {
-           children: [(0, zB.jsx)("div", {
-             className: "CharCustomisationPreview",
-             ref: VB
-           }), AB && (0, zB.jsx)(lB, {
-             nametag: AB
-           })]
-         })
-       })))
-   },
-   36948: (BB, OB, GB) => {
-     function YB(BB, OB, GB) {
-       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(BB, OB).getContext("2d", GB);
-       const YB = document.createElement("canvas");
-       return YB.width = BB, YB.height = OB, YB.getContext("2d", GB)
+         })),
+         OW = WW.indices,
+         mW = OW && VW(OW, pW),
+         EW = WW.position;
+       return new uW.d(iW, mW, EW.count, ...fW(EW, iW))
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L229` → after: `L432-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L432-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L432-L451) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L229)

```diff
-       return BB.getContext("2d", OB)
+       const OW = iW.attributes.map((WW => {
+         let {
+           kind: iW,
+           data: OW,
+           size: mW,
+           byteOffset: EW,
+           byteStride: NW,
+           normalized: PW
+         } = WW;
+         return {
+           kind: iW,
+           data: OW,
+           offset: EW,
+           stride: NW,
+           components: mW,
+           glType: 5120 + XW.indexOf(OW.constructor),
+ ... (4 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L248-L249` → after: `L454-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L454-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L454-L456) · [Before (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L248-L249)

```diff
-     function jB() {
-       return DB
+     function qW(WW) {
+       const iW = WW.lastIndexOf("/");
+       return iW < 0 ? WW : WW.substring(iW + 1)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L252-L253` → after: `L459-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L459-L461) · [Before (L252-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L252-L253)

```diff
-     function yB() {
-       return QB
+     function RW(WW) {
+       const iW = WW.lastIndexOf("/");
+       return iW < 0 ? "" : WW.substring(0, iW + 1)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L257-L258` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L465) · [Before (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L257-L258)

```diff
-       DB = BB, QB++, (0, YB.b)();
-       for (const OB of oB) OB()
+       return WW.name || `node${WW.index}`
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L262` → after: `L488-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L488-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L488-L490) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L262)

```diff
-       oB.add(BB)
+       var iW, OW, mW, EW;
+       const NW = null !== (iW = WW.minFilter) && void 0 !== iW ? iW : 9987;
+       return 9729 === (null !== (OW = WW.magFilter) && void 0 !== OW ? OW : 9729) ? null !== (mW = aW[NW]) && void 0 !== mW ? mW : 3 : null !== (EW = rW[NW]) && void 0 !== EW ? EW : 4
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L264-L267` → after: `L492-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L492-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L492-L499) · [Before (L264-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L264-L267)

```diff
-   },
-   37009: (BB, OB, GB) => {
-     function YB() {
-       return GB(37013)
+     const FW = {
+       33071: 0,
+       33648: 2
+     };
+ 
+     function QW(WW) {
+       var iW;
+       return null !== (iW = FW[null !== WW && void 0 !== WW ? WW : 10497]) && void 0 !== iW ? iW : 1
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L270-L271` → after: `L502-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L502-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L502-L707) · [Before (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L270-L271)

```diff
-     function DB() {
-       return GB(37018)
+     function Wi(WW) {
+       return 9728 === WW.minFilter || 9729 === WW.minFilter
+     }
+ 
+     function ii(WW) {
+       var iW, OW, mW;
+       const EW = Float64Array.from(null !== (iW = WW.scale) && void 0 !== iW ? iW : [1, 1, 1]);
+       return WW.hasCamera && (EW[0] = -1), {
+         translation: Float64Array.from(null !== (OW = WW.translation) && void 0 !== OW ? OW : [0, 0, 0]),
+         rotation: Float64Array.from(null !== (mW = WW.rotation) && void 0 !== mW ? mW : [0, 0, 0, 1]),
+         scale: EW
+       }
+     }
+ 
+     function Oi(WW, iW) {
+       let {
+ ... (190 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L275` → after: `L711-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L711-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L711-L1045) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L275)

```diff
-       return ["pl", "ru", "tr", "uk", "vi"].includes(BB)
+       (0, Pi.f)(WW) || (WW.geometry && WW.geometry.useBoundingInfoFromGeometry ? WW._updateBoundingInfo() : WW.refreshBoundingInfo(!0, !0))
+     }
+     class ti {
+       constructor(WW, iW) {
+         this.rb = WW, this.decode = iW, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
+       }
+       viewBytes(WW) {
+         let iW = this.viewData.get(WW.index);
+         return iW || (iW = this.bufferData.then((() => WW.bytes)), this.viewData.set(WW.index, iW)), iW
+       }
+       viewBuffer(WW) {
+         let iW = this.viewBuffers.get(WW.index);
+         return iW || (iW = this.viewBytes(WW).then((WW => new((0, Ni.c)().OZ)(this.rb.VA(), WW, !1))), this.viewBuffers.set(WW.index, iW)), iW
+       }
+       vertexBuffer(WW, iW) {
+         const {
+ ... (319 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L277-L280` → after: `L1047-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1047-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L1047-L1056) · [Before (L277-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L277-L280)

```diff
-     GB.d(OB, {
-       b: () => QB,
-       c: () => YB,
-       e: () => DB
+     async function Ji(WW, iW, OW, EW) {
+       try {
+         return await Ei(WW, iW, OW, HW, mW.b, (WW => EW(WW, new ti(iW, HW))))
+       } finally {
+         yi()
+       }
+     }
+     Zi = LW, UW || (UW = {
+       scriptUrl: new URL(Zi.scriptUrl, location.href).href,
+       wasmBinaryUrl: new URL(Zi.wasmBinaryUrl, location.href).href
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L283-L284` → after: `L1059-L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1059-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L1059-L1084) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L283-L284)

```diff
-   37013: (BB, OB, GB) => {
-     BB.exports = GB.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
+   37245: WW => {
+     WW.exports = function(WW, iW, OW, mW) {
+       var EW = self || window;
+       try {
+         try {
+           var NW;
+           try {
+             NW = new EW.Blob([WW])
+           } catch (wW) {
+             (NW = new(EW.BlobBuilder || EW.WebKitBlobBuilder || EW.MozBlobBuilder || EW.MSBlobBuilder)).append(WW), NW = NW.getBlob()
+           }
+           var PW = EW.URL || EW.webkitURL,
+             LW = PW.createObjectURL(NW),
+             cW = new EW[iW](LW, OW);
+           return PW.revokeObjectURL(LW), cW
+         } catch (wW) {
+ ... (10 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L286-L287` → after: `L1086-L1087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1086-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/237.js#L1086-L1087) · [Before (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/237.js#L286-L287)

```diff
-   37018: (BB, OB, GB) => {
-     BB.exports = GB.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
+   53679: (WW, iW, OW) => {
+     WW.exports = OW.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/238.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/238.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94)

#### 1. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/238.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/238.js#L4-L6)

```diff
-   36972: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => jB
+   53694: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => NW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L8` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/238.js#L8-L9) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/238.js#L8)

```diff
-     var YB = GB(1217);
+     var mW = OW(37245),
+       EW = OW.n(mW);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L10-L12` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/238.js#L11-L12) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/238.js#L10-L12)

```diff
-     function DB(BB) {
-       const OB = /(\d*\.?\d+)px/.exec(BB);
-       return OB ? Number(OB[1]) : null
+     function NW() {
+       return EW()('/*! For license information please see 1yqdn.procGen.worker.c2d9f7e9.worker.js.LICENSE.txt */\n(()=>{var WW={46:WW=>{const iW="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,OW=()=>iW.now(),mW=WW=>WW===1/0||(WW=> … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L14-L66` → after: `L14-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L14-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/238.js#L14-L20) · [Before (L14-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/238.js#L14-L66)

```diff
- 
-     function QB(BB) {
-       return BB.split(/[\s,]+/).pop()
-     }
-     let oB = !1;
-     const jB = {
-       debug: !1,
-       align: "center",
-       vAlign: "middle",
-       fontSize: 14,
-       fontWeight: "",
-       fontStyle: "",
-       fontVariant: "",
-       font: "Arial",
-       lineHeight: null,
-       justify: !1,
- ... (37 more removed lines; see GitHub link above)
+   },
+   37245: WW => {
+     WW.exports = function(WW, iW, OW, mW) {
+       var EW = self || window;
+       try {
+         try {
+           var NW;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L68-L107` → after: `L22-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/238.js#L22-L24) · [Before (L68-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/238.js#L68-L107)

```diff
-             return BB.scale(GB, GB), {
-               height: this.drawLines(BB, OB, YB / GB, jB / GB, yB / GB, JB / GB, WB).height * GB
-             }
-           } finally {
-             BB.restore()
-           }
-         }
-         return this.drawLines(BB, OB, YB, jB, yB, JB, lB)
-       },
-       drawLines: function(BB, OB, GB, DB, QB, oB, jB) {
-         const yB = GB + QB,
-           JB = DB + oB;
-         let MB, PB = DB + oB / 2 + jB / 2;
-         "right" === this.align ? (MB = yB, BB.textAlign = "right") : "left" === this.align ? (MB = GB, BB.textAlign = "left") : (MB = GB + QB / 2, BB.textAlign = "center");
-         for (const YB of OB) {
-           BB.measureText(YB).width >= QB && (OB = OB.replace(YB, ""))
- ... (24 more removed lines; see GitHub link above)
+             NW = new EW.Blob([WW])
+           } catch (wW) {
+             (NW = new(EW.BlobBuilder || EW.WebKitBlobBuilder || EW.MozBlobBuilder || EW.MSBlobBuilder)).append(WW), NW = NW.getBlob()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L109-L118` → after: `L26-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L26-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/238.js#L26-L31) · [Before (L109-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/238.js#L109-L118)

```diff
-         }));
-         const qB = this.lineHeight ? this.lineHeight : this.getTextHeight(BB, OB),
-           ZB = qB * (zB.length - 1),
-           NB = ZB / 2;
-         let RB = DB;
-         "top" === this.vAlign ? PB = DB + jB : "bottom" === this.vAlign ? (PB = JB - ZB, RB = JB) : (RB = DB + oB / 2, PB -= NB), zB.forEach((OB => {
-           OB = OB.trim(), BB.fillText(OB, MB, PB), PB += qB
-         })), this.debug && (BB.lineWidth = 3, BB.strokeStyle = "#00909e", BB.strokeRect(GB, DB, QB, oB), BB.lineWidth = 2, BB.strokeStyle = "#f6d743", BB.beginPath(), BB.moveTo(MB, DB), BB.lineTo(MB, JB), BB.stroke(), BB.strokeStyle = "#ff6363", BB.beginPath(), BB.moveTo(GB, RB), … [truncated]
-         return {
-           height: ZB + qB
+           var PW = EW.URL || EW.webkitURL,
+             LW = PW.createObjectURL(NW),
+             cW = new EW[iW](LW, OW);
+           return PW.revokeObjectURL(LW), cW
+         } catch (wW) {
+           return new EW[iW]("data:application/javascript,".concat(encodeURIComponent(WW)), OW)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L171` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/238.js#L34-L35) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/238.js#L171)

```diff
-         return void 0 !== GB && console.error(`Couldn't parse ${GB}`, YB), OB
+         if (!mW) throw Error("Inline worker is not supported");
+         return new EW[iW](mW, OW)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/239.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/239.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034)

#### 1. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/239.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/239.js#L4)

```diff
-   37029: (BB, OB, GB) => {
+   53708: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/239.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/239.js#L6)

```diff
-       CreateCustomLobby: () => uB
+       default: () => NW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L8-L34` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/239.js#L8-L9) · [Before (L8-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/239.js#L8-L34)

```diff
-     GB(37036);
-     var YB = GB(5047),
-       DB = GB(56),
-       QB = GB(1735),
-       oB = GB(1090),
-       jB = GB.n(oB),
-       yB = GB(3544),
-       JB = GB(1121),
-       MB = GB(1186),
-       PB = GB(5011),
-       zB = GB(1485),
-       lB = GB(37041),
-       pB = GB(1175),
-       qB = GB(1360),
-       ZB = GB(1560),
-       NB = GB(16),
- ... (11 more removed lines; see GitHub link above)
+     var mW = OW(37245),
+       EW = OW.n(mW);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L36-L503` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/239.js#L11-L12) · [Before (L36-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/239.js#L36-L503)

```diff
-     function uB(BB) {
-       var OB, GB, oB, uB;
-       let {
-         gameNameWithVariation: mB,
-         close: IB,
-         initialDefaultGamemode: FB
-       } = BB;
-       const {
-         t: iB
-       } = (0, pB.H)(), LB = (0, ZB.useNavigatePreserveSearch)(), [gB, rB] = (0, DB.useState)("Enter"), [XB, wB] = (0, DB.useState)(""), EB = DB.useRef(null), cB = null === (OB = VB.b[mB]) || void 0 === OB ? void 0 : OB.showWorldsInsteadOfCustomLobbies, hB = cB ? 1 : null === (GB  … [truncated]
-       FB || (FB = "classic_creative" === mB || "classic_creativeFlat" === mB ? "creative" : "classic" === mB ? "peaceful" : "survival");
-       const TB = {
-         baseOptions: {
-           gameNameWithVariation: cB ? "classic" : mB,
-           name: "",
-           visibility: "unlisted"
- ... (452 more removed lines; see GitHub link above)
+     function NW() {
+       return EW()('(()=>{var WW={22:(WW,iW,OW)=>{WW.exports=OW.p+"static/media/bloxd_wasm_bg.c887ae513bec2c674549.wasm"},28:(WW,iW,OW)=>{WW.exports=OW.p+"static/media/bloxd_wasm_textures_bg.5f6ebeba7b776ee2ab3c.wasm"},15:(WW,iW,OW)=>{WW.exports=OW.p+"static/media/zstdDecodeWorker … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L506-L592` → after: `L15-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L15-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/239.js#L15-L24) · [Before (L506-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/239.js#L506-L592)

```diff
-   37041: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => MB,
-       f: () => zB
-     });
-     var YB = GB(56),
-       DB = GB(1400),
-       QB = GB(1175),
-       oB = GB(1375),
-       jB = GB(3926),
-       yB = GB(5414),
-       JB = GB(1282);
- 
-     function MB(BB) {
-       let {
-         loading: OB,
- ... (71 more removed lines; see GitHub link above)
+   37245: WW => {
+     WW.exports = function(WW, iW, OW, mW) {
+       var EW = self || window;
+       try {
+         try {
+           var NW;
+           try {
+             NW = new EW.Blob([WW])
+           } catch (wW) {
+             (NW = new(EW.BlobBuilder || EW.WebKitBlobBuilder || EW.MozBlobBuilder || EW.MSBlobBuilder)).append(WW), NW = NW.getBlob()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L594-L702` → after: `L26-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L26-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/239.js#L26-L36) · [Before (L594-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/239.js#L594-L702)

```diff
-         })]
-       })
-     }
- 
-     function zB(BB) {
-       let {
-         ownedSchematics: OB,
-         currentWorldSchematicId: GB,
-         onClose: YB
-       } = BB;
-       DB.NotificationProvider.showCustomPopup({
-         body: BB => (0, JB.jsx)(PB, {
-           ownedSchematics: OB,
-           currentWorldSchematicId: GB,
-           onClose: BB
-         }),
- ... (93 more removed lines; see GitHub link above)
+           var PW = EW.URL || EW.webkitURL,
+             LW = PW.createObjectURL(NW),
+             cW = new EW[iW](LW, OW);
+           return PW.revokeObjectURL(LW), cW
+         } catch (wW) {
+           return new EW[iW]("data:application/javascript,".concat(encodeURIComponent(WW)), OW)
+         }
+       } catch (wW) {
+         if (!mW) throw Error("Inline worker is not supported");
+         return new EW[iW](mW, OW)
+       }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L704-L705` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/239.js#L38) · [Before (L704-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/239.js#L704-L705)

```diff
-   },
-   37036: () => {}
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/240.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/240.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/240.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/240.js#L4)

```diff
-   37041: (BB, OB, GB) => {
+   37727: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L7` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/240.js#L71-L72) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/240.js#L7)

```diff
-       f: () => zB
+       h: () => NW,
+       j: () => PW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L9-L23` → after: `L74-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L74-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/240.js#L74-L174) · [Before (L9-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/240.js#L9-L23)

```diff
-     var YB = GB(56),
-       DB = GB(1400),
-       QB = GB(1175),
-       oB = GB(1375),
-       jB = GB(3926),
-       yB = GB(5414),
-       JB = GB(1282);
- 
-     function MB(BB) {
-       let {
-         loading: OB,
-         schematics: GB,
-         onSchematicPicked: YB,
-         selectedSchematicIdList: DB = [],
-         disableAutoExport: yB
+     const mW = 1024,
+       EW = 1024 * mW;
+ 
+     function NW(WW) {
+       return 2 ** Math.floor(Math.log2(Math.max(1, WW / EW)))
+     }
+ 
+     function PW(WW) {
+       return (WW / EW).toFixed(1)
+     }
+   },
+   37717: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => NW,
+       h: () => cW,
+       j: () => LW,
+ ... (85 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L26-L58` → after: `L218-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L218-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/240.js#L218-L294) · [Before (L26-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/240.js#L26-L58)

```diff
-         t: MB
-       } = (0, QB.H)();
-       return (0, JB.jsxs)("div", {
-         className: "SchematicList",
-         children: [OB && (0, JB.jsx)(oB.b, {}), !OB && 0 === GB.length && (0, JB.jsx)("div", {
-           className: "NoSchematicsText",
-           children: MB("worldBuilder:noSavedSchematic")
-         }), !OB && GB.map((BB => (0, JB.jsx)(jB.h, {
-           source: {
-             type: "schematic",
-             schematic: BB
-           },
-           gameWidth: "25%",
-           useLongRatio: !0,
-           onClick: () => {
-             YB(BB)
- ... (17 more removed lines; see GitHub link above)
+         footprintBytes: OW,
+         basis: mW
+       } = SW(WW);
+       return "android" === mW || OW > 2 * bW
+     }
+ 
+     function TW(WW) {
+       const iW = Math.min(WW, YW(xW.e));
+       return jW + Math.max(0, iW - jW) / 2
+     }
+ 
+     function JW(WW, iW, OW) {
+       var EW, NW, PW, LW;
+       let cW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         {
+           footprintBytes: wW,
+ ... (61 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L60-L90` → after: `L296-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L296-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/240.js#L296-L539) · [Before (L60-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/240.js#L60-L90)

```diff
-       const {
-         t: oB
-       } = (0, QB.H)(), [jB, PB] = (0, YB.useState)(null);
-       return (0, JB.jsxs)("div", {
-         className: "SchematicListWindow",
-         children: [null === jB && (0, JB.jsxs)(JB.Fragment, {
-           children: [(0, JB.jsx)("h1", {
-             className: "SchematicPopupTitle",
-             children: oB("worldBuilder:schematicList")
-           }), (0, JB.jsx)("h2", {
-             className: "SchematicPopupSubtitle",
-             children: oB("worldBuilder:clickSchematicForOptions")
-           }), (0, JB.jsx)("div", {
-             className: "SchematicPopupSchematicListContainer",
-             children: (0, JB.jsx)(MB, {
-               loading: !1,
- ... (15 more removed lines; see GitHub link above)
+       return {
+         halvedAt: "number" === typeof OW && Number.isFinite(OW) ? OW : null,
+         reloadSpent: !0 === mW
+       }
+     }
+ 
+     function DW() {
+       return null !== gW().halvedAt
+     }
+ 
+     function VW(WW) {
+       const iW = (0, wW.y)(),
+         OW = JSON.stringify(WW);
+       try {
+         null === iW || void 0 === iW || iW.setItem(eW, OW)
+       } catch {
+ ... (228 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L92-L235` → after: `L541-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L541-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/240.js#L541-L556) · [Before (L92-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/240.js#L92-L235)

```diff
-         })]
-       })
-     }
- 
-     function zB(BB) {
-       let {
-         ownedSchematics: OB,
-         currentWorldSchematicId: GB,
-         onClose: YB
-       } = BB;
-       DB.NotificationProvider.showCustomPopup({
-         body: BB => (0, JB.jsx)(PB, {
-           ownedSchematics: OB,
-           currentWorldSchematicId: GB,
-           onClose: BB
-         }),
- ... (128 more removed lines; see GitHub link above)
+           of this.workers.values()) PW += mW.reservesRefused, LW += mW.allocationsRefused;
+         return {
+           wasmMainMiB: Number((0, mW.j)(this.memory.memoryBytes())),
+           wasmWorkersMiB: Number((0, mW.j)(this.workersMemoryBytes())),
+           peakStoredChunks: this.peakStoredChunks,
+           refusedReserves: PW,
+           refusedAllocations: LW,
+           sheds: this.sheds,
+           ...null === (NW = this.footprint) || void 0 === NW ? void 0 : NW.snapshot()
+         }
+       }
+       workersMemoryBytes() {
+         let WW = 0;
+         for (const {
+             stats: iW,
+             gone: OW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L237-L541` → after: `L558-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L558-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/240.js#L558-L615) · [Before (L237-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/240.js#L237-L541)

```diff
-         })]
-       })
-     }
-     var WB = GB(5414),
-       AB = GB(1735),
-       VB = GB(4777),
-       SB = GB(1217);
- 
-     function nB(BB) {
-       var OB;
-       let {
-         ownedSchematics: GB,
-         onClose: YB,
-         onChosenEdit: DB,
-         onChosenNew: QB,
-         onChosenDownload: jB
- ... (289 more removed lines; see GitHub link above)
+           of this.workers.values()) WW += OW ? 0 : iW.memoryBytes;
+         return WW
+       }
+       checkFootprint() {
+         null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
+       }
+       checkGcPressure(WW) {
+         const iW = this.gcPressure;
+         if (null === iW) return;
+         if (null !== iW.nextAt || "undefined" !== typeof document && document.hidden || (iW.nextAt = WW + 6e4), null === iW.nextAt || WW < iW.nextAt) return;
+         if (this.stopped || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil) return;
+         const OW = iW.highEpisode();
+         null !== OW && OW !== iW.shedEpisode && (iW.shedEpisode = OW, iW.nextAt = WW + 3e4, this.shedFor("gcPressure"))
+       }
+       step() {
+         this.pendingSince = null, this.call((() => this.memory.reserveAhead(wW)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
+ ... (42 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/241.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/241.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774)

#### 1. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/241.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/241.js#L2)

```diff
- export const ids = [59, 241];
+ export const ids = [241];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L4-L135` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/241.js#L4) · [Before (L4-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/241.js#L4-L135)

```diff
-   39240: (BB, OB, GB) => {
-     var YB = {
-       "./combat_1.png": 39246,
-       "./dungeon_crumbling_crypt.png": 39250,
-       "./dungeon_frozen_hollow.png": 39258,
-       "./dungeon_wildwood_grove.png": 39267,
-       "./dungeons.png": 39273,
-       "./farming_1.png": 39275,
-       "./fishing_1.png": 39279,
-       "./hub.png": 39286,
-       "./island.png": 39291,
-       "./mining_1.png": 39297,
-       "./mining_1_bridge.png": 39302,
-       "./mining_1_gallery.png": 39310,
-       "./mining_1_hollow.png": 39319,
-       "./mining_1_village.png": 39325
- ... (116 more removed lines; see GitHub link above)
+   37314: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L137-L10572` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/241.js#L6-L10) · [Before (L137-L10572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/241.js#L137-L10572)

```diff
-       default: () => Lj
-     });
-     const YB = "island";
-     var DB = GB(39189);
- 
-     function QB(BB, OB, GB) {
-       const QB = "local" === OB,
-         jB = BB.background,
-         yB = OB => jB ? (0, DB.c)(OB[0] - BB.mapOrigin[0], OB[2] - BB.mapOrigin[2], jB.bounds) : [50, 50],
-         JB = (BB.insideDungeon ? [] : BB.landmarks).map((BB => {
-           var OB, YB;
-           return {
-             id: BB.id,
-             name: GB(BB.visited && BB.nameKey ? null !== (OB = BB.mapLabelKey) && void 0 !== OB ? OB : BB.nameKey : "skyblockGame:mapUnknown"),
-             icon: BB.visited && null !== (YB = BB.icon) && void 0 !== YB ? YB : "unknown",
-             visited: BB.visited,
- ... (10420 more removed lines; see GitHub link above)
+       ITEM_FILES_WITHOUT_SPRITE: () => LW,
+       ITEM_SPRITES: () => NW,
+       ITEM_SPRITES_WITHOUT_FILE: () => PW,
+       ITEM_SPRITE_RUNS: () => EW,
+       MAX_SPRITE_ITEM_ID: () => mW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L10574-L10617` → after: `L12-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/241.js#L12-L16) · [Before (L10574-L10617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/241.js#L10574-L10617)

```diff
-     const YB = "skyblockSkills",
-       DB = "skills_test_gym"
-   },
-   39246: (BB, OB, GB) => {
-     BB.exports = GB.p + "static/media/combat_1.72ac23641446e4f80923.png"
-   },
-   39250: (BB, OB, GB) => {
-     BB.exports = GB.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
-   },
-   39258: (BB, OB, GB) => {
-     BB.exports = GB.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
-   },
-   39267: (BB, OB, GB) => {
-     BB.exports = GB.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
-   },
-   39273: (BB, OB, GB) => {
- ... (28 more removed lines; see GitHub link above)
+     const mW = 10113,
+       EW = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
+       NW = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
+       PW = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
+       LW = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/242.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/242.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/242.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/242.js#L4-L6)

```diff
-   37051: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       default: () => UB
+   42468: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW,
+       f: () => NW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L8-L29` → after: `L9-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L9-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/242.js#L9-L298) · [Before (L8-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/242.js#L8-L29)

```diff
-     var YB = GB(1090),
-       DB = GB.n(YB),
-       QB = GB(1571),
-       oB = GB(1082),
-       jB = GB(791),
-       yB = GB(1175),
-       JB = GB(1485),
-       MB = GB(1560),
-       PB = GB(3998),
-       zB = GB(1383),
-       lB = GB(3926),
-       pB = GB(2861),
-       qB = GB(1282);
-     const ZB = 2;
- 
-     function NB(BB) {
- ... (6 more removed lines; see GitHub link above)
+     var mW = OW(2300),
+       EW = OW(1052);
+ 
+     function NW(WW, iW) {
+       return null !== WW.gameSource && (0, mW.m)(iW, WW.gameSource)
+     }
+ 
+     function PW(WW, iW) {
+       if (null === WW.gameSource || "" === WW.gameSource || null === iW) return !0;
+       const OW = (0, EW.i)(iW) ? (0, EW.n)(iW) : null;
+       return null !== OW && NW(WW, OW)
+     }
+   },
+   42452: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => LW
+ ... (274 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L35-L37` → after: `L304-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L304-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/242.js#L304-L306) · [Before (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/242.js#L35-L37)

```diff
-         game: OB,
-         disabled: GB,
-         showPlaceholder: YB
+         kind: iW,
+         index: OW,
+         word: mW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L39-L49` → after: `L308-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L308-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/242.js#L308-L326) · [Before (L39-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/242.js#L39-L49)

```diff
-       return null !== OB ? (0, qB.jsx)(lB.h, {
-         source: NB(OB),
-         gameWidth: "100%",
-         useLongRatio: !0,
-         disabled: GB,
-         entrySource: "customGamePlace"
-       }) : YB ? (0, qB.jsx)(lB.d, {
-         gameWidth: "100%",
-         useLongRatio: !0
-       }) : null
-     }
+       return `${iW}:${OW}:${mW}`
+     }
+ 
+     function kW(WW, iW) {
+       if (null === WW) throw new NW.c("fetch", `no URL for image ${UW(iW)}`, {
+         cause: null
+       });
+       return WW
+     }
+ 
+     function sW(WW, iW, OW) {
+       var mW, EW, NW;
+       const PW = new Uint8Array(16),
+         LW = new DataView(PW.buffer);
+       return LW.setUint8(0, WW.kind), LW.setUint8(1, WW.index), LW.setUint8(2, iW), LW.setUint32(4, WW.word, !0), LW.setUint32(8, null !== (mW = null === OW || void 0 === OW ? void 0 : OW.id) && void 0 !== mW ? mW : 0, !0), LW.setUint16(12, Math.min(null !== (EW = null === OW ||  … [truncated]
+     }
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L53-L132` → after: `L330-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L330-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/242.js#L330-L424) · [Before (L53-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/242.js#L53-L132)

```diff
-       let {
-         category: GB,
-         title: YB,
-         tintColour: DB,
-         layout: QB,
-         games: oB,
-         landscape: jB = !1
-       } = BB;
-       const {
-         followsLeader: yB
-       } = (0, pB.d)(), JB = null !== (OB = null === oB || void 0 === oB ? void 0 : oB.slice(0, QB.gameCount)) && void 0 !== OB ? OB : [], PB = {
-         "--custom-game-place-tint": DB
-       };
-       return (0, qB.jsxs)("div", {
-         className: "CustomGamePlacePanel AnimFadeIn",
-         style: PB,
- ... (64 more removed lines; see GitHub link above)
+       const OW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
+       if (WW.byteLength < 20 || OW.getUint32(0, !0) !== MW || OW.getUint32(16, !0) !== KW) return [];
+       let mW, EW = 20 + OW.getUint32(12, !0);
+       try {
+         mW = JSON.parse((new TextDecoder).decode(WW.subarray(20, EW)))
+       } catch {
+         return []
+       }
+       for (; EW + 8 <= WW.byteLength && OW.getUint32(EW + 4, !0) !== SW;) EW += 8 + OW.getUint32(EW, !0);
+       const NW = null !== (iW = mW.images) && void 0 !== iW ? iW : [];
+       if (0 === NW.length || EW + 8 > WW.byteLength) return NW.map((() => null));
+       const PW = WW.subarray(EW + 8, Math.min(WW.byteLength, EW + 8 + OW.getUint32(EW, !0)));
+       return NW.map((WW => {
+         var iW, OW, EW;
+         const NW = void 0 === WW.bufferView || null === (iW = mW.bufferViews) || void 0 === iW ? void 0 : iW[WW.bufferView];
+         if (!NW || 0 !== (null !== (OW = NW.buffer) && void 0 !== OW ? OW : 0) || void 0 === NW.byteLength) return null;
+ ... (79 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L134-L155` → after: `L426-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L426-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/242.js#L426-L609) · [Before (L134-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/242.js#L134-L155)

```diff
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
-           columnCount: 3
-         },
-         section5: {
-           gameCount: 3,
-           columnCount: 1
-         },
- ... (6 more removed lines; see GitHub link above)
+         lifeformAtlasUrl: OW => cW(iW(), (WW => WW.LIFEFORM_ATLAS_PATHS[OW]), (() => WW.lifeformAtlasUrl(OW))),
+         groupAtlasUrl: OW => cW(iW(), (WW => WW.GROUP_ATLAS_PATHS[OW]), (() => WW.groupAtlasUrl(OW))),
+         particleItemUrl: mW => wW(iW(), (async () => {
+           const WW = await OW.e(45).then((() => OW(54865))).catch((() => null));
+           return (null === WW || void 0 === WW ? void 0 : WW.particleItemSprite(mW)) || null
+         }), (() => WW.particleItemUrl(mW))),
+         blockImageUrl: OW => wW(iW(), (async () => {
+           var WW, iW;
+           return null !== (WW = null === (iW = await LW()) || void 0 === iW ? void 0 : iW.blockImageName(OW)) && void 0 !== WW ? WW : null
+         }), (() => WW.blockImageUrl(OW)))
+       }
+     }
+ 
+     function LW() {
+       return (0, EW.l)().catch((() => null))
+     }
+ ... (168 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L159-L182` → after: `L613-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L613-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/242.js#L613-L754) · [Before (L159-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/242.js#L159-L182)

```diff
-       const {
-         t: OB
-       } = (0, yB.H)(), GB = (0, QB.A)(), YB = (0, nB.g)(), zB = (0, PB.d)({
-         refresh: !0
-       }), lB = GB.customGamePlace;
-       if (!(0, oB.m)(lB)) return (0, qB.jsx)(MB.NavigatePreserveSearch, {
-         to: "/"
-       });
-       const pB = jB.b[lB],
-         ZB = oB.d[lB],
-         NB = null !== (BB = null === zB || void 0 === zB ? void 0 : zB[lB]) && void 0 !== BB ? BB : null,
-         RB = [];
-       for (let DB = 0; DB < ZB.length; DB++) {
-         var UB;
-         const BB = VB[DB];
-         if (!BB) continue;
- ... (8 more removed lines; see GitHub link above)
+       const iW = (0, PW.F)(),
+         OW = function(WW, iW) {
+           return {
+             sampleCount: WW.antiAliasing ? 4 : 1,
+             n: (0, PW.A)(WW.pixelScale, iW),
+             pixelated: (0, PW.x)(WW.pixelSmoothing)
+           }
+         }(EW.d.get("clientEscMenuOptions"), iW);
+       return OW.sampleCount > 1 && (0, cW.b)() && (OW.sampleCount = 1), OW.n = null !== (WW = (0, cW.m)()) && void 0 !== WW ? WW : OW.n, mW.h.includes((0, tW.getSoftwareRenderer)()) && (OW.sampleCount = 1, OW.n = Math.max(OW.n, (0, PW.A)(ZW.w.pixelScale, iW))), OW
+     }
+     let lW = null,
+       AW = null;
+     const bW = new Set;
+     let jW = null;
+ 
+     function UW() {
+ ... (126 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L185-L214` → after: `L757-L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L757-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/242.js#L757-L857) · [Before (L185-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/242.js#L185-L214)

```diff
-       return (0, qB.jsxs)("div", {
-         className: "CustomGamePlaceContainer AnimFadeIn",
-         children: [(0, qB.jsx)("div", {
-           className: "BackgroundImage",
-           style: {
-             backgroundImage: `url(/textures/games/${lB}/${pB.largePicture}.png)`
-           }
-         }), (0, qB.jsx)("h1", {
-           className: "VisuallyHidden",
-           children: OB(pB.title)
-         }), (0, qB.jsx)("div", {
-           className: "CustomGamePlaceHeaderContainer",
-           children: (0, qB.jsx)(JB.c, {
-             onClick: () => (0, MB.navigatePreserveSearch)("/"),
-             children: OB("homePage:backToGames")
-           })
- ... (14 more removed lines; see GitHub link above)
+     }
+     async function tW(WW, iW, OW) {
+       try {
+         const iW = new Blob([WW.slice()], {
+           type: "image/png"
+         });
+         return await createImageBitmap(iW, {
+           premultiplyAlpha: "none",
+           colorSpaceConversion: "none",
+           imageOrientation: OW
+         })
+       } catch (mW) {
+         throw new LW("decode", null !== iW && void 0 !== iW ? iW : `${WW.byteLength} bytes`, {
+           cause: mW
+         })
+       }
+ ... (85 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/243.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/243.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L4)

```diff
-   37058: (BB, OB, GB) => {
+   37444: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L8-L10` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L71) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L8-L10)

```diff
-       g: () => JB,
-       h: () => yB,
-       k: () => WB
+       d: () => LW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L12-L34` → after: `L73-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L73-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L73-L85) · [Before (L12-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L12-L34)

```diff
-     var YB = GB(645),
-       DB = GB(1834),
-       QB = GB(5287);
-     class oB {
-       constructor(BB, OB) {
-         this.width = BB, this.CP = OB, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(BB * OB)
-       }
-       push(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const GB = this.data,
-           YB = this.next * this.width;
-         for (let DB = 0; DB < this.width; DB++) GB[YB + DB] = BB[OB + DB];
-         this.next = (this.next + 1) % this.CP, this.size = Math.min(this.size + 1, this.CP)
-       }
-       rows() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
- ... (7 more removed lines; see GitHub link above)
+     var mW = OW(37444);
+     let EW = null,
+       NW = null;
+ 
+     function PW() {
+       return EW ??= OW.e(74).then((() => OW(42663))).catch((WW => {
+         throw EW = null, WW
+       })), EW
+     }
+ 
+     function LW() {
+       return NW ??= Promise.all([PW(), (0, mW.e)()]).then((WW => {
+         let [iW] = WW;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L36-L39` → after: `L87-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L87-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L87-L89) · [Before (L36-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L36-L39)

```diff
-       }
-       lines() {
-         return this.rows().map((BB => BB.join(",")))
-       }
+       }), (WW => {
+         throw NW = null, WW
+       })), NW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L43-L74` → after: `L118-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L118-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L118-L126) · [Before (L43-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L43-L74)

```diff
-         idle: 0,
-         GP: 1,
-         vI: 2,
-         YF: 3,
-         pZ: 4
-       },
-       JB = {
-         none: 0,
-         skipped: 1,
-         paced: 2,
-         drawn: 3
-       },
-       MB = {
-         lockGained: 1,
-         lockLost: 2,
-         lockError: 3,
- ... (16 more removed lines; see GitHub link above)
+         icon: PW.e,
+         mainRGB: "transparent",
+         chatTag: [],
+         nameTag: {
+           iconRGB: "#f38ab6",
+           iconShadowRGB: "black"
+         },
+         visible: !0
+       };
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L77` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L129) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L77)

```diff
-       return "js" === BB ? MB.jsClient : MB.wasmClient
+       return "object" !== typeof WW || null === WW || Array.isArray(WW) ? void 0 : WW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L79-L82` → after: `L131-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L131-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L131-L134) · [Before (L79-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L79-L82)

```diff
-     class RB {
-       constructor() {
-         this.steps = new oB(jB, PB), this.events = new oB(lB.length, PB), this.frames = new oB(pB.length, PB), this.cameraSets = new oB(QB.h, 256), this.changes = new oB(ZB.length, 256)
-       }
+     const UW = new Set(mW.c);
+ 
+     function kW(WW, iW) {
+       return "string" === typeof WW ? (0, cW.r)(WW, iW) : iW
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L84-L128` → after: `L136-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L136-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L136-L181) · [Before (L84-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L84-L128)

```diff
-     const WB = new class {
-       constructor() {
-         this.rings = null, this.sample = new Float64Array(lB.length), this.startedClient = null, this.startedAtMs = 0
-       }
-       get client() {
-         return this.startedClient
-       }
-       start(BB, OB) {
-         this.startedClient = BB, this.startedAtMs = performance.now(), null !== this.rings ? this.change(NB(BB)) : OB && this.allocate()
-       }
-       lockGained() {
-         this.allocate(), this.change(MB.lockGained)
-       }
-       allocate() {
-         null === this.rings && (this.rings = new RB, null !== this.startedClient && this.changeAt(this.startedAtMs, NB(this.startedClient), 1))
-       }
- ... (29 more removed lines; see GitHub link above)
+ 
+     function sW(WW) {
+       return kW(WW.width, tW)
+     }
+ 
+     function MW(WW, iW) {
+       var OW;
+       const mW = null !== (OW = WW.applyTo) && void 0 !== OW ? OW : "both";
+       return "both" === mW || mW === iW
+     }
+ 
+     function KW(WW) {
+       const iW = sW(WW);
+       return "glow" === WW.style ? iW * ZW : Math.ceil(iW / 2) + 1
+     }
+ 
+ ... (30 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L130-L133` → after: `L183-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L183-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L183-L214) · [Before (L130-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L130-L133)

```diff
-       dumpText() {
-         var BB, OB;
-         const GB = this.rings;
-         return [`look records (${this.startedClient}): ${zB.join(",")}`, ...null !== (BB = null === GB || void 0 === GB ? void 0 : GB.steps.lines()) && void 0 !== BB ? BB : [], `mousemove events: ${lB.join(",")}`, ...null !== (OB = null === GB || void 0 === GB ? void 0 : GB.event … [truncated]
+       nW.push(...HW), uW && "" !== SW && OW.isFriend(SW) && nW.push({
+         kind: "rank",
+         rank: bW
+       }), "number" === typeof WW.TP && nW.push({
+         kind: "text",
+         text: ` ${WW.TP}m`,
+         size: cW.c.DEFAULT_FONT_SIZE,
+         colour: "#cef3ff"
+       });
+       const dW = YW ? (0, cW.h)(YW, cW.c.DEFAULT_SUBTITLE_FONT_SIZE, OW) : null,
+         eW = "string" === typeof tW.backgroundColor ? tW.backgroundColor : "#22283b",
+         vW = "string" === typeof tW.subtitleBackgroundColor ? tW.subtitleBackgroundColor : "#1a1e2d",
+         gW = jW(tW.healthbar),
+         DW = jW(tW.border),
+         VW = Array.isArray(WW.effects) ? WW.effects.filter((WW => "string" === typeof WW && UW.has(WW))) : [],
+         pW = "number" === typeof WW.health ? Math.max(0, Math.min(1, WW.health)) : null,
+ ... (16 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L135-L146` → after: `L216-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L216-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L216-L244) · [Before (L135-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L135-L146)

```diff
-       toJson(BB, OB) {
-         var GB;
-         const DB = BB - 6e4,
-           QB = this.rings,
-           oB = function(BB, OB) {
-             var GB;
-             let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-             const QB = null !== (GB = null === BB || void 0 === BB ? void 0 : BB.rows(YB, DB)) && void 0 !== GB ? GB : [];
-             return {
-               columns: OB,
-               fromMs: 0 === QB.length ? null : QB[0][YB],
-               rows: QB
+       const zW = fW.height + CW.height + IW + aW,
+         FW = fW.width + cW.c.HORIZONTAL_PADDING,
+         QW = CW.width + cW.c.HORIZONTAL_PADDING,
+         Wi = Math.max(FW, QW),
+         ii = (rW - Wi) / 2,
+         Oi = Math.max(XW.height, BW);
+       return {
+         width: rW,
+         height: zW,
+         draw: WW => {
+           const iW = [];
+           if (WW.fillStyle = eW, WW.fillRect(ii, Oi, Wi, fW.height), (0, cW.p)(nW, (rW - FW) / 2 + cW.c.HORIZONTAL_PADDING / 2, Oi, fW.height, WW, OW, iW), dW) {
+             const mW = Oi + fW.height;
+             WW.fillStyle = vW, WW.fillRect(ii, mW, Wi, CW.height), (0, cW.p)(dW, (rW - QW) / 2 + cW.c.HORIZONTAL_PADDING / 2, mW, CW.height, WW, OW, iW)
+           }
+           let mW = null;
+ ... (13 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L148-L172` → after: `L246-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L246-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L246-L290) · [Before (L148-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L148-L172)

```diff
-           };
-         return {
-           version: YB.b,
-           client: null !== (GB = this.startedClient) && void 0 !== GB ? GB : "not started",
-           savedAt: (new Date).toISOString(),
-           savedAtMs: BB,
-           keptMs: 6e4,
-           page: window.location.href,
-           userAgent: navigator.userAgent,
-           devicePixelRatio: window.devicePixelRatio,
-           screen: {
-             width: window.screen.width,
-             height: window.screen.height
-           },
-           bZ: null !== document.pointerLockElement,
-           visibility: document.visibilityState,
- ... (9 more removed lines; see GitHub link above)
+           }
+           if (DW) {
+             const iW = [];
+             MW(DW, "nametag") && iW.push({
+               x: ii,
+               y: Oi,
+               width: Wi,
+               height: fW.height + (dW ? CW.height : 0)
+             }), mW && MW(DW, "healthbar") && iW.push(mW), iW.length > 0 && function(WW, iW, OW) {
+               const mW = sW(iW),
+                 EW = mW / 2,
+                 NW = WW => WW.width > 0 && WW.height > 0,
+                 PW = OW.map((WW => ({
+                   x: WW.x + EW,
+                   y: WW.y + EW,
+                   width: WW.width - mW,
+ ... (29 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L183-L189` → after: `L295-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L295-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L295-L304) · [Before (L183-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L183-L189)

```diff
-   37054: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       LOOK_DEBUG_HEADER: () => MB,
-       endLookDebugTake: () => NB,
-       noteLookDroppedCopy: () => RB,
-       saveLookCapture: () => WB,
-       startLookDebug: () => ZB
+   37353: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => NW,
+       d: () => kW,
+       h: () => lW,
+       k: () => KW,
+       n: () => MW,
+       p: () => sW,
+       r: () => wW,
+       s: () => ZW
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L191-L197` → after: `L306-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L306-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L306-L321) · [Before (L191-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L191-L197)

```diff
-     var YB = GB(5287),
-       DB = GB(3136),
-       QB = GB(1998);
-     const oB = new Map(Object.entries(YB.m).map((BB => {
-       let [OB, GB] = BB;
-       return [GB, OB]
-     })));
+     var mW = OW(625),
+       EW = OW(327);
+     const NW = {
+         DEFAULT_FONT_SIZE: 47,
+         DEFAULT_SUBTITLE_FONT_SIZE: 30,
+         HORIZONTAL_PADDING: 30,
+         VERTICAL_PADDING: 22,
+         TEXT_SHADOW_WIDTH: 2,
+         LINE_SPACING: 8,
+         EFFECT_ICON_SIZE: 70
+       },
+       PW = 41;
+ 
+     function LW(WW) {
+       return `bolder ${WW}px 'Jetbrains Mono'`
+     }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L200` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L324) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L200)

```diff
-       return (0, QB.B)(BB).toFixed(1)
+       return "object" === typeof WW && null !== WW
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L204` → after: `L328-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L328-L329) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L204)

```diff
-       return `camera set by ${oB.get(BB[OB+1])}: heading ${`${jB(BB[OB+2])} -> ${jB(BB[OB+4])}`} deg, pitch ${`${jB(BB[OB+3])} -> ${jB(BB[OB+5])}`} deg, at ${BB[OB].toFixed(1)} ms`
+       const OW = "number" === typeof WW ? WW : "string" === typeof WW ? Number(WW.replace("px", "")) : NaN;
+       return Number.isFinite(OW) && OW > 0 ? OW : iW
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L210` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L333) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L210)

```diff
-       return Number.isFinite(BB) ? String(Math.round(10 * BB) / 10) : String(BB)
+       return cW(WW) ? WW : void 0
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L214` → after: `L337-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L337-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L337-L342) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L214)

```diff
-       return Number.isFinite(BB) ? BB.toFixed(1) : String(BB)
+       const iW = "number" === typeof WW ? mW.E[WW] : WW;
+       return "string" === typeof iW && Object.hasOwn(mW.p, iW) ? mW.p[iW] : void 0
+     }
+ 
+     function xW(WW, iW) {
+       return "string" === typeof WW ? WW : cW(WW) ? "string" === typeof WW.translationKey ? iW.translate(WW.translationKey, WW.params).map((WW => "string" === typeof WW ? WW : WW.icon)).join("") : "string" === typeof WW.entityName ? iW.shownPlayerName(WW.entityName) : "" : void 0 … [truncated]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L216-L218` → after: `L344-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L344-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L344-L400) · [Before (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L216-L218)

```diff
-     class lB {
-       constructor() {
-         this.frames = 0, this.looked = 0, this.idle = 0, this.vI = 0, this.pastLimit = 0, this.lockSkips = 0, this.pZ = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
+ 
+     function lW(WW, iW, OW, mW) {
+       if (!Array.isArray(WW)) return [];
+       const PW = [];
+       for (const AW of WW) {
+         var LW, ZW;
+         if (cW(AW) && "chatTag" in AW) {
+           PW.push({
+             kind: "rank",
+             rank: AW
+           });
+           continue
+         }
+         if (cW(AW) && "icon" in AW && !("mainRGB" in AW)) {
+           var lW;
+           PW.push({
+ ... (41 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L220-L221` → after: `L402-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L402-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L402-L441) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L220-L221)

```diff
-       moved() {
-         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.vI > 0 || this.dropped > 0 || this.cameraSets > 0
+       return PW
+     }
+ 
+     function AW(WW) {
+       return void 0 !== WW && "rank" !== WW.kind
+     }
+ 
+     function bW(WW, iW) {
+       const OW = AW(WW),
+         mW = AW(iW);
+       return void 0 === WW && !mW || !OW && void 0 === iW ? 0 : OW !== mW ? .5 * NW.HORIZONTAL_PADDING : 0
+     }
+ 
+     function jW(WW) {
+       return "rank" === WW.kind ? NW.DEFAULT_FONT_SIZE : WW.size
+     }
+ ... (24 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L223-L224` → after: `L443-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L443-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L443-L446) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L223-L224)

```diff
-       hasEvent() {
-         return this.vI > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
+       return {
+         width: PW,
+         height: mW + NW.VERTICAL_PADDING,
+         sizes: EW
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L227-L285` → after: `L449-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L449-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L449-L454) · [Before (L227-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L227-L285)

```diff
-     class pB {
-       constructor() {
-         var BB = this;
-         this.topicOn = (0, DB.s)("look"), this.remote = (0, DB.u)(), this.tally = new lB, this.takes = null, this.started = !1, this.record = function(OB) {
-           let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-           if (JB.k.step(OB, GB), !BB.topicOn) return;
-           const YB = OB[GB],
-             DB = OB[GB + 1],
-             QB = OB[GB + 2],
-             oB = OB[GB + 3],
-             jB = OB[GB + 4],
-             yB = OB[GB + 5],
-             MB = OB[GB + 6],
-             lB = OB[GB + 7],
-             pB = OB[GB + 8],
-             qB = OB[GB + 9],
- ... (43 more removed lines; see GitHub link above)
+ 
+     function sW(WW, iW, OW, mW, EW, NW, PW) {
+       iW += bW(void 0, WW[0]);
+       for (let LW = 0; LW < WW.length; LW++) {
+         const cW = MW(WW[LW], iW, OW, mW, EW, NW, PW);
+         iW += 0 === cW ? 0 : cW + bW(WW[LW], WW[LW + 1])
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L287-L288` → after: `L456-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L456-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L456-L472) · [Before (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L287-L288)

```diff
-       start(BB, OB) {
-         if (JB.k.start(BB, null !== document.pointerLockElement), this.takes = OB, this.topicOn) {
+     }
+ 
+     function MW(WW, iW, OW, mW, EW, cW, wW, tW) {
+       var ZW;
+       if ("icon" === WW.kind) {
+         const mW = cW.iconImage(WW.icon);
+         return mW && wW.push({
+           image: mW,
+           x: iW,
+           y: OW + NW.VERTICAL_PADDING / 2,
+           size: WW.size
+         }), WW.size
+       }
+       if ("rank" === WW.kind) {
+         const LW = null !== tW && void 0 !== tW ? tW : UW(WW, EW, cW);
+         return function(WW, iW, OW, mW, EW, LW, cW) {
+ ... (1 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L290-L292` → after: `L474-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L474-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L474-L508) · [Before (L290-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L290-L292)

```diff
-             screen: OB
-           } = window;
-           (0, DB.m)("look", `start: ${BB} client, dpr ${window.devicePixelRatio}, screen ${OB.width}x${OB.height}, pointer lock ${document.pointerLockElement?"sJ":"free"}`)
+             rank: ZW
+           } = WW;
+           LW.fillStyle = ZW.mainRGB, LW.fillRect(iW, OW, mW, EW);
+           const xW = cW.rankIcon(ZW.icon);
+           if (!xW) return;
+           const lW = PW / xW.height,
+             AW = iW + (mW - xW.width * lW) / 2,
+             bW = OW + (EW - PW) / 2,
+             jW = new Path2D(xW.path),
+             UW = NW.TEXT_SHADOW_WIDTH,
+             kW = (null === (wW = ZW.nameTag) || void 0 === wW ? void 0 : wW.iconShadowRGB) || "black";
+           for (const NW of [-1, 1])
+             for (const WW of [-1, 1]) SW(LW, jW, AW + UW * NW, bW + UW * WW, lW, kW);
+           SW(LW, jW, AW, bW, lW, (null === (tW = ZW.nameTag) || void 0 === tW ? void 0 : tW.iconRGB) || "white")
+         }(WW, iW, OW, LW, mW, EW, cW), LW
+       }
+ ... (19 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L294-L297` → after: `L510-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L510-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L510-L562) · [Before (L294-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L294-L297)

```diff
-         this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
-           capture: !0,
-           passive: !0
-         }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychang … [truncated]
+         of WW) iW.imageSmoothingEnabled = !1, iW.drawImage(OW, mW, EW, NW, NW)
+     }
+ 
+     function SW(WW, iW, OW, mW, EW, NW) {
+       WW.save(), WW.translate(OW, mW), WW.scale(EW, EW), WW.fillStyle = NW, WW.fill(iW), WW.restore()
+     }
+   },
+   37432: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => aW,
+       h: () => ii,
+       i: () => BW,
+       k: () => RW,
+       m: () => GW,
+       o: () => IW,
+       p: () => Ei,
+ ... (37 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L299-L301` → after: `L564-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L564-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L564-L613) · [Before (L299-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L299-L301)

```diff
-       outlier(BB) {
-         const OB = this.tally;
-         OB.outliers >= 20 ? OB.suppressed++ : (OB.outliers++, (0, DB.m)("look", BB))
+     }
+     const YW = new Map(Object.entries(KW).map((WW => {
+       let [iW, OW] = WW;
+       return [iW, SW(OW)]
+     })));
+     let yW = !1;
+     const TW = new Set;
+     var JW = OW(37446);
+     const hW = "Jetbrains Mono",
+       HW = "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+2248,U+26A1,U+2713,U+FEFF,U+FFFD",
+       nW = "U+0100-0130,U+0132-0151,U+0154-017F,U+018F-0190,U+0192,U+019B,U+01A0-01A1,U+01AF-01B0,U+01CD-01CE,U+01D0,U+01D2,U+01D4,U+01D6,U+01D8,U+01DA,U+01DC,U+01E6-01E7,U+01EA-01EB,U+01F4-01F5,U+01FC-01FF,U+0218-021B,U+0232-0233,U+0237,U+0259,U+02B9-02BA,U+02C7,U+02C9,U+02D8-02 … [truncated]
+ 
+     function uW(WW) {
+       return WW.split(",").map((WW => {
+         const [iW, OW = iW] = WW.slice(2).split("-");
+         return [parseInt(iW, 16), parseInt(OW, 16)]
+ ... (34 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L303-L305` → after: `L615-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L615-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L615-L630) · [Before (L303-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L303-L305)

```diff
-       eventOutlier(BB) {
-         const OB = this.tally;
-         OB.eventLines >= 10 ? OB.suppressed++ : (OB.eventLines++, (0, DB.m)("look", BB))
+     }
+ 
+     function qW() {
+       pW++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? fW = "all" : "none" === fW && (fW = "notBoards");
+       for (const WW of XW) WW()
+     }(0, xW.o)((() => {
+       qW(!1)
+     })), (0, cW.u)((() => {
+       (function() {
+         const WW = yW;
+         return yW = !1, WW
+       })() && qW(!1)
+     }));
+     const RW = new class {
+       constructor(WW) {
+         this.loaded = WW, this.latin = null, this.rest = null, this.restWanted = !1
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L307-L317` → after: `L632-L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L632-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L632-L645) · [Before (L307-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L307-L317)

```diff
-       takeRecords() {
-         if (null === this.takes) return;
-         const BB = this.takes.look();
-         if (BB.length >= MB) {
-           this.counted(JB.b.stepsLost, BB[0]), this.counted(JB.b.droppedCopies, BB[1]);
-           for (let OB = MB; OB + JB.c <= BB.length; OB += JB.c) this.record(BB, OB)
-         }
-         const OB = this.takes.cameraSets();
-         if (OB.length >= YB.e) {
-           this.counted(JB.b.cameraSetsLost, OB[0]);
-           for (let BB = YB.e; BB + YB.h <= OB.length; BB += YB.h) JB.k.cameraSet(OB, BB), this.topicOn && (this.tally.cameraSets++, this.outlier(yB(OB, BB)))
+       load() {
+         if (null === this.latin) {
+           this.latin = new FontFace(hW, `url(${(0,JW.d)()}) format("woff2")`, {
+             unicodeRange: HW
+           }).load().then((WW => {
+             document.fonts.add(WW), this.loaded()
+           }), eW("Latin"));
+           const WW = new FontFace(hW, `url(${(0,JW.h)()}) format("woff2")`, {
+             unicodeRange: nW,
+             display: "swap"
+           });
+           document.fonts.add(WW), WW.loaded.then((() => {
+             this.loaded()
+           }), eW("rest")), this.rest = WW, this.restWanted && WW.load()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L320-L321` → after: `L649-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L649-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L649-L651) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L320-L321)

```diff
-       droppedCopy() {
-         this.counted(JB.b.droppedCopies, 1)
+       loadRest() {
+         var WW;
+         this.restWanted || (this.restWanted = !0, null === (WW = this.rest) || void 0 === WW || WW.load())
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L323-L327` → after: `L653-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L653-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L653-L656) · [Before (L323-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L323-L327)

```diff
-       counted(BB, OB) {
-         if (0 === OB) return;
-         if (JB.k.change(BB, OB), !this.topicOn) return;
-         const GB = this.tally;
-         BB === JB.b.droppedCopies ? GB.dropped += OB : BB === JB.b.stepsLost ? GB.lost += OB : GB.cameraSetsLost += OB
+       async untilLoadedFor(WW) {
+         await this.load(), this.loadFor(WW), await document.fonts.load(`16px '${hW}'`, WW).catch((iW => {
+           console.warn("[bloxd-wasm-client] the text font did not load for", WW, iW)
+         }))
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L329-L330` → after: `L658-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L658-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L658-L659) · [Before (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L329-L330)

```diff
-       endTake() {
-         this.takeRecords(), this.takes = null
+       loadFor(WW) {
+         !this.restWanted && dW.test(WW) && this.loadRest()
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L336-L337` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L668) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L336-L337)

```diff
-       let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-       return qB ??= new pB, qB.start(BB, OB), qB.record
+       WW !== VW && (VW = WW, qW())
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L340-L342` → after: `L671-L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L671-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L671-L673) · [Before (L340-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L340-L342)

```diff
-     function NB() {
-       var BB;
-       null === (BB = qB) || void 0 === BB || BB.endTake()
+     function aW(WW) {
+       if ("none" === fW || null === WW) return;
+       WW(vW, "all" === fW ? 0 : gW, new Uint8Array(0)) && (fW = "none")
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L345` → after: `L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L678) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L345)

```diff
-     function RB() {
+     function FW(WW, iW, OW) {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L347` → after: `L680-L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L680-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L680-L720) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L347)

```diff
-       null === (BB = qB) || void 0 === BB || BB.droppedCopy()
+       const EW = OW ? `${WW}#${OW.join(",")}` : WW,
+         NW = rW.get(EW);
+       if (NW) return NW.image;
+       const PW = {
+         image: null !== (mW = zW.get(EW)) && void 0 !== mW ? mW : null
+       };
+       return rW.set(EW, PW), iW().then((async WW => {
+         if (null === WW) return null;
+         const iW = new Image;
+         iW.crossOrigin = "anonymous", iW.src = WW, await iW.decode();
+         const mW = await createImageBitmap(iW);
+         if (!OW) return mW;
+         try {
+           return function(WW, iW) {
+             let [OW, mW, EW] = iW;
+             const NW = (0, wW.g)(WW.width, WW.height),
+ ... (25 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L349-L356` → after: `L722-L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L722-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L722-L930) · [Before (L349-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L349-L356)

```diff
-     async function WB(BB) {
-       var OB;
-       null === (OB = qB) || void 0 === OB || OB.takeRecords();
-       const {
-         clientHintsRead: YB,
-         debugDeviceLines: DB
-       } = await GB.e(34).then((() => GB(34658)));
-       await YB, JB.k.save({
+ 
+     function Oi(WW) {
+       return QW.has(WW) ? FW(`icon:${WW}`, (async () => {
+         var iW, OW;
+         return null !== (iW = null === (OW = (0, lW.f)()) || void 0 === OW ? void 0 : OW.textureUrl(WW)) && void 0 !== iW ? iW : (await (0, AW.c)()).ingameIconUrl(WW)
+       })) : null
+     }
+     let mi = "unasked";
+     const Ei = {
+       get canSeeRealPlayerNames() {
+         return tW.featureFlags.canSeeRealPlayerNames
+       },
+       get canSeePlayerWrittenText() {
+         return tW.featureFlags.canSeePlayerWrittenText
+       },
+       get localPlayerDbId() {
+ ... (193 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L358-L359` → after: `L932-L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L932-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/243.js#L932-L1104) · [Before (L358-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/243.js#L358-L359)

```diff
-         device: DB()
-       })
+         info: {
+           content: [{
+             str: "Ag"
+           }],
+           subtitle: ["Ag"]
+         }
+       }), nW(jW.MultilineText, {
+         box: {
+           content: ["Ag"]
+         },
+         shown: null
+       }), ...mW.d.map(((WW, iW) => nW(jW.Board, {
+         shared: {
+           text: "Ag",
+           textSize: iW
+         },
+ ... (157 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/244.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/244.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L4` → after: `L4-L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L4-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/244.js#L4-L862) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/244.js#L4)

```diff
-   39782: (BB, OB, GB) => {
+   37343: (WW, iW, OW) => {
+     function mW(WW, iW, OW) {
+       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(WW, iW).getContext("2d", OW);
+       const mW = document.createElement("canvas");
+       return mW.width = WW, mW.height = iW, mW.getContext("2d", OW)
+     }
+ 
+     function EW(WW, iW) {
+       return WW.getContext("2d", iW)
+     }
+     OW.d(iW, {
+       c: () => EW,
+       g: () => mW
+     })
+   },
+   42246: (WW, iW, OW) => {
+ ... (843 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L134-L148` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/244.js#L867) · [Before (L134-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/244.js#L134-L148)

```diff
-     });
-     let YB = null;
- 
-     function DB(BB, OB) {
-       YB = {
-         conn: BB,
-         reason: OB
-       }
-     }
- 
-     function QB(BB) {
-       var OB;
-       const GB = (null === (OB = YB) || void 0 === OB ? void 0 : OB.conn) === BB ? YB.reason : null;
-       return YB = null, GB
-     }
+     })
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L150-L166` → after: `L869-L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L869-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/244.js#L869-L873) · [Before (L150-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/244.js#L150-L166)

```diff
-   42004: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => QB,
-       f: () => DB
-     });
-     let YB = {
-       fire: () => {},
-       close: () => {}
-     };
- 
-     function DB(BB) {
-       YB = BB
-     }
- 
-     function QB() {
-       return YB
- ... (1 more removed lines; see GitHub link above)
+   37453: (WW, iW, OW) => {
+     WW.exports = OW.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
+   },
+   37460: (WW, iW, OW) => {
+     WW.exports = OW.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/245.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/245.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L5-L74` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L4) · [Before (L5-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L5-L74)

```diff
-   40342: (BB, OB, GB) => {
-     BB.exports = DB;
-     var YB = GB(363);
- 
-     function DB(BB, OB) {
-       if (!(this instanceof DB)) return new DB(BB, OB);
-       var GB = YB.create();
-       YB.add(GB, BB, OB), this.base = YB.min(YB.create(), BB, GB), this.vec = YB.clone(OB), this.max = YB.max(YB.create(), BB, GB), this.mag = YB.length(this.vec)
-     }
-     var QB = DB.prototype;
-     QB.width = function() {
-       return this.vec[0]
-     }, QB.height = function() {
-       return this.vec[1]
-     }, QB.depth = function() {
-       return this.vec[2]
- ... (54 more removed lines; see GitHub link above)
+   37415: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L76-L77` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L6) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L76-L77)

```diff
-       b: () => jB,
-       e: () => QB
+       c: () => LW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L79-L80` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L8) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L79-L80)

```diff
-     var YB = GB(4505);
-     let DB = null;
+     var mW = OW(1217);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L83` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L11-L12) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L83)

```diff
-       return null !== DB && BB === DB
+       const iW = /(\d*\.?\d+)px/.exec(WW);
+       return iW ? Number(iW[1]) : null
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L86-L120` → after: `L15-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L15-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L15-L73) · [Before (L86-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L86-L120)

```diff
-     function oB() {
-       this.IH = !1, this.stopPropagation = !1, this.iH = !1, this.disabled = !1
-     }
-     class jB {
-       constructor(BB, OB) {
-         this.version = "0.7.0";
-         var GB = Object.assign({}, new oB, OB || {});
-         this.element = BB || document, this.IH = !!GB.IH, this.stopPropagation = !!GB.stopPropagation, this.iH = !!GB.iH, this.disabled = !!GB.disabled, this.filterEvents = (BB, OB) => !0, this.ignoreEvent = BB => !1, this.down = new YB.EventEmitter, this.up = new YB.EventEmitter … [truncated]
-           dx: 0,
-           dy: 0,
-           UGB: 0,
-           fGB: 0,
-           kGB: 0
-         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
-           lastX: 0,
-           lastY: 0,
- ... (19 more removed lines; see GitHub link above)
+     function NW(WW) {
+       return WW.split(/[\s,]+/).pop()
+     }
+     let PW = !1;
+     const LW = {
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
+       drawText: function(WW, iW, mW, LW, cW, wW) {
+ ... (43 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L122-L128` → after: `L75-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L75-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L75-L83) · [Before (L122-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L122-L128)

```diff
-       }
-       getBindings() {
-         var BB = {};
-         for (var OB in this._keyBindmap) {
-           this._keyBindmap[OB].forEach((GB => {
-             BB[GB] = BB[GB] || [], BB[GB].push(OB)
-           }))
+         return this.drawLines(WW, iW, mW, LW, cW, wW, lW)
+       },
+       drawLines: function(WW, iW, OW, EW, NW, PW, LW) {
+         const cW = OW + NW,
+           wW = EW + PW;
+         let tW, ZW = EW + PW / 2 + LW / 2;
+         "right" === this.align ? (tW = cW, WW.textAlign = "right") : "left" === this.align ? (tW = OW, WW.textAlign = "left") : (tW = OW + NW / 2, WW.textAlign = "center");
+         for (const mW of iW) {
+           WW.measureText(mW).width >= NW && (iW = iW.replace(mW, ""))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L130-L178` → after: `L85-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L85-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L85-L143) · [Before (L130-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L130-L178)

```diff
-         return BB
-       }
-       kP() {
-         yB(this.gH), yB(this.pressCount), yB(this.releaseCount)
-       }
-     }
- 
-     function yB(BB) {
-       for (var OB in BB) BB[OB] = 0
-     }
- 
-     function JB(BB) {
-       window.addEventListener("keydown", ZB.bind(null, BB, !0), !1), window.addEventListener("keyup", ZB.bind(null, BB, !1), !1);
-       var OB = {
-         passive: !0
-       };
- ... (33 more removed lines; see GitHub link above)
+         iW = (0, mW.Z)(iW);
+         const xW = [],
+           lW = iW.split("\n"),
+           AW = this.justify ? WW.measureText("\u200a").width : 0;
+         lW.forEach((iW => {
+           let OW = WW.measureText(iW).width;
+           if (OW <= NW) xW.push(iW);
+           else {
+             let mW = iW;
+             const EW = NW;
+             let PW, LW, cW;
+             for (OW = WW.measureText(mW).width; OW > EW;) {
+               for (PW = 0, LW = 0, cW = ""; LW < EW;) PW++, cW = mW.substr(0, PW), LW = WW.measureText(cW).width;
+               PW--, cW = cW.substr(0, PW);
+               const iW = PW;
+               if (" " !== mW.substr(PW, 1)) {
+ ... (43 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L183-L196` → after: `L166-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L166-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L166-L171) · [Before (L183-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L183-L196)

```diff
-       if (!BB.ignoreEvent(GB)) try {
-         UB(BB, GB)
-       } finally {
-         ! function(BB, OB, GB) {
-           if ("pointerId" in GB)
-             if (OB) {
-               if (null !== BB._touches.currID) return;
-               BB._touches.currID = GB.pointerId
-             } else {
-               if (BB._touches.currID !== GB.pointerId) return;
-               BB._touches.currID = null
-             } var YB = "button" in GB ? GB.button + 1 : 1;
-           kB("Mouse" + YB, OB, BB, GB)
-         }(BB, OB, GB)
+       if ("string" !== typeof WW) return iW;
+       try {
+         const OW = JSON.parse(WW);
+         return OW && "object" === typeof OW ? OW : iW
+       } catch (mW) {
+         return void 0 !== OW && console.error(`Couldn't parse ${OW}`, mW), iW
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L200-L215` → after: `L175-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L175-L176) · [Before (L200-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L200-L215)

```diff
-     function RB(BB, OB) {
-       var GB = OB.movementX || OB.mozMovementX || 0,
-         YB = OB.movementY || OB.mozMovementY || 0;
-       if (OB.touches && 0 === (GB | YB)) {
-         var DB = function(BB) {
-           pB(BB);
-           for (let OB = 0; OB < BB.changedTouches.length; ++OB)
-             if (BB.changedTouches[OB].identifier == zB) {
-               const GB = BB.changedTouches[OB],
-                 YB = [GB.clientX - MB, GB.clientY - PB];
-               return MB = GB.clientX, PB = GB.clientY, YB
-             } return console.error(`Did not find touch id ${zB}`), [0, 0]
-         }(OB);
-         GB = DB[0], YB = DB[1]
-       }
-       BB.gH.dx += GB, BB.gH.dy += YB
+     function ZW(WW) {
+       return tW(WW, null, "a leaderboard's rows")
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L219-L229` → after: `L180-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L180-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L180-L183) · [Before (L219-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L219-L229)

```diff
-       UB(BB, OB);
-       var GB = 1;
-       switch (OB.deltaMode) {
-         case 0:
-           GB = 1;
-           break;
-         case 1:
-           GB = 12;
-           break;
-         case 2:
-           GB = BB.element.clientHeight || window.innerHeight
+       var OW, mW;
+       return null !== iW && void 0 !== iW ? iW : {
+         status: null !== (OW = WW.status) && void 0 !== OW ? OW : "loading",
+         entries: null !== (mW = WW.entries) && void 0 !== mW ? mW : []
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L235` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L188) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L235)

```diff
-       if (!BB.iH) return OB.preventDefault(), !1
+       return "number" === typeof WW && Number.isFinite(WW) && WW > 0 ? WW : iW
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L249` → after: `L192-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L192-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L192-L205) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L249)

```diff
-       return !!BB[VB[OB]] || ("AltRight" === OB || "ControlLeft" === OB) && "function" === typeof BB.getModifierState && !0 === BB.getModifierState("AltGraph")
+       const OW = lW(WW.size, 1);
+       let mW = lW(WW.width, lW(2.5 * OW, 2.5)),
+         EW = lW(WW.height, lW(3.75 * OW, 3.75));
+       Number.isFinite(NW * EW / mW) && Number.isFinite(PW * mW / EW) || (mW = 2.5, EW = 3.75);
+       const LW = EW / mW,
+         cW = Math.max(1, Math.min(NW, iW / LW));
+       return {
+         width: mW,
+         height: EW,
+         layoutWidth: Math.max(NW, PW / LW),
+         layoutHeight: Math.max(PW, NW * LW),
+         pixelWidth: Math.round(cW),
+         pixelHeight: Math.round(Math.max(1, Math.min(iW, cW * LW)))
+       }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L252-L263` → after: `L208-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L208-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L208-L303) · [Before (L252-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L252-L263)

```diff
-     function nB(BB, OB) {
-       for (var GB in BB._modifiersHeldThroughBlur = {}, VB) BB._keyStates[GB] && (BB._modifiersHeldThroughBlur[GB] = !0);
-       OB && OB.isTrusted && function() {
-         try {
-           return window.self !== window.top
-         } catch (BB) {
-           return !0
-         }
-       }() && (clearTimeout(BB._blurRelease), BB._blurRelease = setTimeout((function() {
-         if (!document.hasFocus())
-           for (var OB in BB._modifiersHeldThroughBlur = {}, BB._keyStates) BB._keyStates[OB] && !/^Mouse\d/.test(OB) && fB(BB, OB)
-       }), 0))
+     function bW(WW, iW, OW, PW, tW, ZW) {
+       WW.setTransform(1, 0, 0, 1, 0, 0), WW.fillStyle = EW.M.defaultNameTagBackground, WW.fillRect(0, 0, iW, OW), WW.scale(iW / PW.layoutWidth, OW / PW.layoutHeight), WW.translate((PW.layoutWidth - NW) / 2, 0),
+         function(WW, iW, OW, NW) {
+           var PW, tW, ZW, xW;
+           const {
+             top: lW,
+             around: AW,
+             showPlayerText: bW,
+             localPlayerDbId: kW
+           } = OW, {
+             whiteUiText: sW,
+             grayUiText: MW,
+             yellowUiText: KW
+           } = EW.M;
+           WW.textBaseline = "middle";
+           const SW = function(iW, OW, mW, EW, NW, PW) {
+ ... (80 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L267-L269` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L307) · [Before (L267-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L267-L269)

```diff
-       var GB = BB._modifiersHeldThroughBlur;
-       if (GB && OB.isTrusted && document.hasFocus())
-         for (var YB in GB) delete GB[YB], BB._keyStates[YB] && YB !== OB.code && (SB(OB, YB) || fB(BB, YB))
+       return Array.isArray(WW) ? WW.slice(0, iW).filter((WW => WW && Number.isFinite(WW.rank) && Number.isFinite(WW.value))) : []
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L273-L284` → after: `L311-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L311-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L311-L317) · [Before (L273-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L273-L284)

```diff
-       const GB = {
-           code: OB,
-           preventDefault: () => {},
-           stopPropagation: () => {}
-         },
-         YB = DB;
-       DB = GB;
-       try {
-         kB(OB, !1, BB, GB)
-       } finally {
-         DB = YB
-       }
+       const OW = [];
+       let mW = !1;
+       return WW.forEach(((EW, NW) => {
+         if (null !== iW && EW.value === iW.value) return void OW.push(iW.rank);
+         const PW = NW > 0 && EW.value === WW[NW - 1].value;
+         PW || (mW = 0 === NW && 1 !== EW.rank), OW.push(PW && !mW ? OW[NW - 1] : EW.rank)
+       })), OW
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L287-L303` → after: `L327-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L327-L328) · [Before (L287-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L287-L303)

```diff
-     function kB(BB, OB, GB, YB) {
-       var DB = GB._keyBindmap[BB];
-       DB && (dB(GB._keyStates[BB], OB) && (GB._keyStates[BB] = OB, DB.forEach((BB => {
-         (!GB.filterEvents || GB.filterEvents(YB, BB)) && function(BB, OB, GB, YB) {
-           var DB = OB ? GB.pressCount : GB.releaseCount;
-           DB[BB] = (DB[BB] || 0) + 1;
-           var QB = GB._bindPressCount[BB] || 0;
-           (QB += OB ? 1 : -1) < 0 && (QB = 0);
-           GB._bindPressCount[BB] = QB;
-           var oB = GB.state[BB];
-           if (dB(oB, QB)) {
-             GB.state[BB] = QB > 0;
-             var jB = OB ? GB.down : GB.up;
-             GB.disabled || jB.emit(BB, YB)
-           }
-         }(BB, OB, GB, YB)
- ... (1 more removed lines; see GitHub link above)
+     function EW(WW) {
+       return Array.from(WW).length
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L312-L314` → after: `L332-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L332-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L332-L344) · [Before (L312-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L312-L314)

```diff
-       if (BB && "object" === typeof BB) {
-         var OB = BB.which || BB.keyCode || BB.charCode;
-         OB && (BB = OB)
+       const iW = [""];
+       let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         EW = "";
+       const NW = () => {
+         iW.push(""), OW = 0, EW = ""
+       };
+       for (const PW of WW.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
+         if (/^\r?\n$/.test(PW)) NW();
+         else if (/^\s+$/.test(PW)) EW += PW;
+       else if (PW.length > 0) {
+         const WW = Array.from(PW);
+         OW > 0 && OW + EW.length + WW.length > mW && NW(), iW[iW.length - 1] += EW, OW += EW.length, EW = "";
+         for (const EW of WW) OW >= mW && NW(), iW[iW.length - 1] += EW, OW++
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L316-L318` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L346) · [Before (L316-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L316-L318)

```diff
-       if ("number" === typeof BB) return oB[BB];
-       var GB, QB = String(BB);
-       return (GB = YB[QB.toLowerCase()]) ? GB : (GB = DB[QB.toLowerCase()]) || (1 === QB.length ? QB.charCodeAt(0) : void 0)
+       return iW[iW.length - 1] += EW, iW
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L407` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L349) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L407)

```diff
-   40329: (BB, OB, GB) => {
+   37369: (WW, iW, OW) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L409` → after: `L351-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L351-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L351-L354) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L409)

```diff
-       b: () => YB
+       e: () => SW,
+       h: () => hW,
+       k: () => HW,
+       o: () => nW
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L411-L482` → after: `L356-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L356-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L356-L393) · [Before (L411-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L411-L482)

```diff
-     class YB {
-       constructor() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
-         this.pE = !1, this.qE = !1, this.pI = 30, this.OE = 0, this.ZE = 100, this.bZ = !1, this.fullscreen = !1, this.yR = function(BB) {}, this.WE = function(BB, OB, GB) {}, this.uP = function() {}, this.vN = function() {}, this.kE = function() {}, this.onFullscreenChanged = fu … [truncated]
-           function(BB) {
-             if ("loading" === document.readyState) {
-               var OB = () => {
-                 document.removeEventListener("readystatechange", OB), BB()
-               };
-               document.addEventListener("readystatechange", OB)
-             } else setTimeout(BB, 0)
-           }((() => {
-             ! function(BB) {
-               var OB = BB._data,
-                 GB = OB.nowObject.now();
- ... (56 more removed lines; see GitHub link above)
+     var mW = OW(37371),
+       EW = OW(7912),
+       NW = OW(7998),
+       PW = OW(37373),
+       LW = OW(37375),
+       cW = OW(37380),
+       wW = OW(8308),
+       tW = OW(8437),
+       ZW = OW(37383),
+       xW = OW(8647),
+       lW = OW(7787),
+       AW = OW(8930),
+       bW = OW(37389),
+       jW = OW(37398),
+       UW = OW(8956),
+       kW = OW(37403),
+ ... (22 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L484-L486` → after: `L395-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L395-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L395-L411) · [Before (L484-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L484-L486)

```diff
-     function DB() {
-       let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
-       this.nowObject = performance || Date, this.pollTime = BB, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
+     function YW(WW) {
+       return `team-${WW.iconName}`
+     }
+     const yW = new Map;
+     for (const [uW, oW] of Object.entries(KW)) {
+       const WW = YW(oW),
+         iW = MW.M[uW];
+       iW && yW.set(iW.toLowerCase(), {
+         icon: WW,
+         mainRGB: "transparent",
+         chatTag: [],
+         nameTag: {
+           iconRGB: "white",
+           iconShadowRGB: "black"
+         },
+         visible: !0
+ ... (1 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L488-L489` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L413-L414) · [Before (L488-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L488-L489)

```diff
-     var QB = 3,
-       oB = 20;
+     let TW = !1;
+     const JW = new Set;
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L492-L647` → after: `L417-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L417-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L417-L420) · [Before (L492-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L492-L647)

```diff
-       for (var OB = BB._data, GB = 1e3 / BB.pI, YB = OB.nowObject.now() + oB, DB = 0; OB.nowObject.now() >= OB.lastTickStarted + GB && OB.nowObject.now() < YB && ++DB <= QB;) BB.yR(GB), OB.lastTickStarted += GB;
-       var jB = 5 * (GB + 5),
-         yB = OB.nowObject.now();
-       if (yB - OB.lastTickStarted > jB)
-         for (; yB >= OB.lastTickStarted + GB;) OB.lastTickStarted += GB
-     }
-   },
-   37378: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => oB
-     });
-     var YB = GB(56);
-     const DB = YB.useLayoutEffect;
-     const QB = function(BB) {
-       var OB = (0, YB.useRef)(BB);
-       return DB((function() {
- ... (140 more removed lines; see GitHub link above)
+       if (WW !== TW) {
+         TW = WW;
+         for (const WW of JW) WW()
+       }
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L649-L660` → after: `L422-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L422-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L422-L425) · [Before (L649-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L649-L660)

```diff
-     GB.d(OB, {
-       b: () => YB
-     })
-   },
-   39684: (BB, OB, GB) => {
-     function YB(BB, OB, GB, YB) {
-       GB && Object.defineProperty(BB, OB, {
-         enumerable: GB.enumerable,
-         configurable: GB.configurable,
-         writable: GB.writable,
-         value: GB.initializer ? GB.initializer.call(YB) : void 0
-       })
+ 
+     function HW(WW) {
+       var iW;
+       return "string" === typeof WW && TW && null !== (iW = yW.get(WW.toLowerCase())) && void 0 !== iW ? iW : null
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L662-L705` → after: `L427-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L427-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L427-L430) · [Before (L662-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L662-L705)

```diff
-     GB.d(OB, {
-       d: () => YB
-     })
-   },
-   39358: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => QB
-     });
-     var YB = GB(39366);
-     const DB = (BB, OB, GB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : GB && "object" === typeof BB ? {
-       ...BB
-     } : null : BB.clone(OB) : null;
-     class QB {
-       static DeepCopy(BB, OB, GB, QB) {
-         let oB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const jB = function(BB) {
- ... (28 more removed lines; see GitHub link above)
+ 
+     function nW(WW) {
+       return JW.add(WW), () => {
+         JW.delete(WW)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L709` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L434) · [Before (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L709)

```diff
-   39394: (BB, OB, GB) => {
+   37423: (WW, iW, OW) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L711` → after: `L436-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L436-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L436-L440) · [Before (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L711)

```diff
-       b: () => DB,
+       A: () => ZW,
+       B: () => bW,
+       D: () => jW,
+       F: () => UW,
+       G: () => sW,
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L714` → after: `L443-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L443-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L443-L449) · [Before (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L714)

```diff
-       h: () => jB
+       k: () => PW,
+       m: () => AW,
+       o: () => kW,
+       s: () => xW,
+       t: () => MW,
+       u: () => NW,
+       x: () => tW
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L716-L736` → after: `L451-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L451-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L451-L470) · [Before (L716-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L716-L736)

```diff
-     var YB = GB(37894);
-     class DB {
-       constructor(BB, OB, GB) {
-         this.gradient = BB, this.color1 = OB, this.color2 = GB
-       }
-       getColorToRef(BB) {
-         this.color2 ? YB.g.LerpToRef(this.color1, this.color2, Math.random(), BB) : BB.IU(this.color1)
-       }
-     }
-     class QB {
-       constructor(BB, OB) {
-         this.gradient = BB, this.color = OB
-       }
-     }
-     class oB {
-       constructor(BB, OB, GB) {
- ... (5 more removed lines; see GitHub link above)
+     var mW = OW(2012);
+     const EW = [{
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
+ ... (4 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L738-L749` → after: `L472-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L472-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L472-L487) · [Before (L738-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L738-L749)

```diff
-     class jB {
-       static GetCurrentGradient(BB, OB, GB) {
-         if (OB[0].gradient > BB) return void GB(OB[0], OB[0], 1);
-         for (let DB = 0; DB < OB.length - 1; DB++) {
-           const YB = OB[DB],
-             QB = OB[DB + 1];
-           if (BB >= YB.gradient && BB <= QB.gradient) {
-             return void GB(YB, QB, (BB - YB.gradient) / (QB.gradient - YB.gradient))
-           }
-         }
-         const YB = OB.length - 1;
-         GB(OB[YB], OB[YB], 1)
+ 
+     function PW(WW, iW) {
+       const {
+         numLines: OW,
+         charsPerLine: mW
+       } = EW[iW];
+       return KW(WW, OW, mW, !1)
+     }
+     const LW = 7 / 8,
+       cW = .25,
+       wW = 8;
+ 
+     function tW(WW, iW) {
+       return {
+         width: Math.min(WW, wW) - 2 * cW,
+         height: Math.min(iW, wW) - 2 * cW
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L752-L807` → after: `L490-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L490-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L490-L499) · [Before (L752-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L752-L807)

```diff
-   },
-   39366: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => YB
-     });
-     class YB {
-       static _CheckLimit(BB, OB) {
-         let GB = YB._LogLimitOutputs[BB];
-         return GB ? GB.current++ : (GB = {
-           limit: OB,
-           current: 1
-         }, YB._LogLimitOutputs[BB] = GB), GB.current <= GB.limit
-       }
-       static _GenerateLimitMessage(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const GB = YB._LogLimitOutputs[BB];
- ... (40 more removed lines; see GitHub link above)
+ 
+     function ZW(WW, iW, OW) {
+       const mW = tW(WW, iW),
+         {
+           numLines: NW,
+           charsPerLine: PW
+         } = EW[OW];
+       return {
+         numLines: Math.max(1, Math.floor(NW / LW * mW.height)),
+         charsPerLine: Math.max(1, Math.floor(PW * mW.width))
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L810-L871` → after: `L502-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L502-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L502-L508) · [Before (L810-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L810-L871)

```diff
-     YB.NoneLogLevel = 0, YB.MessageLogLevel = 1, YB.WarningLogLevel = 2, YB.ErrorLogLevel = 4, YB.AllLogLevel = 7, YB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", YB._LogCache = "", YB._LogLimitOutputs = {}, YB._Levels =  … [truncated]
-       color: "white",
-       logFunc: console.log,
-       name: "Log"
-     }, {
-       color: "orange",
-       logFunc: console.warn,
-       name: "Warn"
-     }, {}, {
-       color: "red",
-       logFunc: console.error,
-       name: "Error"
-     }], YB.errorsCount = 0, YB.Log = YB._LogEnabled.bind(YB, YB.MessageLogLevel), YB.Warn = YB._LogEnabled.bind(YB, YB.WarningLogLevel), YB.Error = YB._LogEnabled.bind(YB, YB.ErrorLogLevel)
-   },
-   39403: (BB, OB, GB) => {
-     GB.d(OB, {
- ... (46 more removed lines; see GitHub link above)
+ 
+     function xW(WW, iW, OW, mW) {
+       const {
+         numLines: EW,
+         charsPerLine: NW
+       } = ZW(OW, mW, iW);
+       return KW(WW, EW, NW, !1)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L873-L927` → after: `L510-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L510-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L510-L513) · [Before (L873-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L873-L927)

```diff
-   },
-   39356: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => jB,
-       f: () => oB
-     });
-     var YB = GB(37778),
-       DB = GB(37807),
-       QB = GB(39358);
-     class oB {
-       constructor() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
-           DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         this.radius = BB, this.height = OB, this.radiusRange = GB, this.directionRandomizer = DB, this._tempVector = YB.r.Zero()
- ... (39 more removed lines; see GitHub link above)
+     const lW = 32e3;
+ 
+     function AW(WW) {
+       return WW.slice(0, lW)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L929-L965` → after: `L515-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L515-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L515-L538) · [Before (L929-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L929-L965)

```diff
-     class jB extends oB {
-       constructor() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
-           DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new YB.r(0, 1, 0),
-           QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new YB.r(0, 1, 0);
-         super(BB, OB, GB), this.direction1 = DB, this.direction2 = QB
-       }
-       startDirectionFunction(BB, OB, GB, QB) {
-         const oB = (0, DB.RandomRange)(this.direction1.x, this.direction2.x),
-           jB = (0, DB.RandomRange)(this.direction1.y, this.direction2.y),
-           yB = (0, DB.RandomRange)(this.direction1.z, this.direction2.z);
-         QB ? OB.zOB(oB, jB, yB) : YB.r.TransformNormalFromFloatsToRef(oB, jB, yB, BB, OB)
-       }
-       clone() {
- ... (21 more removed lines; see GitHub link above)
+     const bW = 512e3,
+       jW = 64,
+       UW = bW;
+ 
+     function kW(WW, iW) {
+       const OW = Math.max(0, UW - iW),
+         mW = Math.min(bW, OW);
+       return WW.slice(0, mW)
+     }
+     const sW = {
+       book: {
+         numLines: 13,
+         charsPerLine: 19,
+         uiFontSize: 1.95
+       },
+       kt: {
+ ... (8 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L968-L1188` → after: `L549-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L549-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L549-L556) · [Before (L968-L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L968-L1188)

```diff
-   },
-   39494: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => PB
-     });
-     const YB = .5 * (Math.sqrt(3) - 1),
-       DB = (3 - Math.sqrt(3)) / 6,
-       QB = 1 / 3,
-       oB = 1 / 6,
-       jB = (Math.sqrt(5) - 1) / 4,
-       yB = (5 - Math.sqrt(5)) / 20,
-       JB = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
-       MB = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0,  … [truncated]
-     const PB = class {
-       constructor() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
- ... (205 more removed lines; see GitHub link above)
+ 
+     function KW(WW, iW, OW, mW, EW) {
+       (EW || mW) && (WW = WW.slice(0, null !== EW && void 0 !== EW ? EW : iW * OW));
+       const NW = WW.split("\n");
+       if (NW.length > iW && NW.splice(iW, NW.length - iW), !mW)
+         for (let PW = 0; PW < NW.length; PW++) {
+           const WW = NW[PW];
+           WW.length > OW && (NW[PW] = WW.substring(0, OW), NW.length < iW && NW.splice(PW + 1, 0, WW.substring(OW)))
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L1190-L1191` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/245.js#L558) · [Before (L1190-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/245.js#L1190-L1191)

```diff
-         return 27 * (QB + oB + JB + PB + zB)
-       }
+       return NW.join("\n")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/246.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/246.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768)

#### 1. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L4-L6)

```diff
-   42073: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       LobbyManageView: () => SO
+   40287: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => NW,
+       d: () => PW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L8-L14` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L9-L10) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L8-L14)

```diff
-     var YB = GB(56),
-       DB = GB(1516),
-       QB = GB(37706),
-       oB = GB(2666),
-       jB = GB(2670),
-       yB = GB(2653),
-       JB = GB(37229);
+     var mW = OW(27);
+     let EW = !1;
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L601-L1626` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L17) · [Before (L601-L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L601-L1626)

```diff
-       var OB, GB;
-       let {
-         state: DB,
-         lobbyName: QB,
-         listed: oB,
-         isListed: jB,
-         yR: yB,
-         OW: JB,
-         statusOf: MB
-       } = BB;
-       const {
-         t: PB,
-         selectedLanguage: zB
-       } = (0, lB.H)(), pB = (0, eB.h)(), qB = (0, WB.g)("players"), NB = null === qB.localId ? null : null !== (OB = null === (GB = qB.byId[qB.localId]) || void 0 === GB ? void 0 : GB.name) && void 0 !== OB ? OB : null, RB = (0, YB.useMemo)((() => (0, HB.j)(pB.friends, QB, DB.her … [truncated]
-         let {
-           refused: OB,
- ... (1010 more removed lines; see GitHub link above)
+       EW !== WW && (EW = WW, mW.l.iZ("replayViewer|videoExportChanged"))
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1629` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L20) · [Before (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L1629)

```diff
-   37229: (BB, OB, GB) => {
+   37709: (WW, iW, OW) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1631-L1797` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L22-L25) · [Before (L1631-L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L1631-L1797)

```diff
-       e: () => MB,
-       i: () => yB
-     });
-     var YB = GB(1516),
-       DB = GB(2050),
-       QB = GB(2023);
-     const oB = 1e4;
-     let jB = 0;
- 
-     function yB(BB) {
-       const OB = ++jB;
-       return new Promise((GB => {
-         const jB = OB => {
-             yB(), clearTimeout(JB), !1 === (null === OB || void 0 === OB ? void 0 : OB.ok) && (0, YB.reportAnalyticsClick)({
-               id: "lobby_manage.refused",
-               value: BB.type
- ... (151 more removed lines; see GitHub link above)
+       c: () => xW,
+       d: () => tW,
+       g: () => lW,
+       j: () => ZW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1799-L1804` → after: `L27-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L27-L30) · [Before (L1799-L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L1799-L1804)

```diff
-     var YB = GB(56),
-       DB = GB(1090),
-       QB = GB.n(DB),
-       oB = GB(1175),
-       jB = GB(1383),
-       yB = GB(1282);
+     var mW = OW(344),
+       EW = OW(678),
+       NW = OW(687),
+       PW = OW(39);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1806-L1809` → after: `L32-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L32-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L32-L34) · [Before (L1806-L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L1806-L1809)

```diff
-         unlisted: "link",
-         public: "globe",
-         whitelist: "user-check",
-         private: "lock"
+         idStorageKey: "playSessionId",
+         lastActivityStorageKey: "playSessionLastActivityMs",
+         expiryMs: 3e5
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1811` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L36-L37) · [Before (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L1811)

```diff
-       MB = ["unlisted", "public", "whitelist", "private"];
+       cW = "playSessionGameNameWithVariation",
+       wW = "wasMatchmakePlayer";
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1813-L1864` → after: `L39-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L39-L41) · [Before (L1813-L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L1813-L1864)

```diff
-     function PB(BB) {
-       let {
-         visibility: OB,
-         onPick: GB
-       } = BB;
-       const {
-         t: DB
-       } = (0, oB.H)(), PB = (0, YB.useRef)([]);
-       return (0, yB.jsx)("div", {
-         className: "WorldSocialTiles",
-         role: "group",
-         "aria-label": DB("worldSocial:whoCanJoin"),
-         children: MB.map(((BB, YB) => {
-           const oB = BB === OB;
-           return (0, yB.jsxs)("button", {
-             ref: BB => {
- ... (36 more removed lines; see GitHub link above)
+     function tW() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j;
+       (0, NW.h)(WW, LW)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1876-L1913` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L44-L45) · [Before (L1876-L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L1876-L1913)

```diff
-     function jB(BB) {
-       let {
-         kP: OB,
-         children: GB,
-         ...jB
-       } = BB;
-       const {
-         t: yB
-       } = (0, YB.H)();
-       return (0, oB.jsx)("div", {
-         className: "WhitelistTickRow",
-         onClick: () => {
-           OB.onChange(!OB.on)
-         },
-         children: (0, oB.jsx)(DB.e, {
-           ...jB,
- ... (22 more removed lines; see GitHub link above)
+     function ZW() {
+       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j).setItem(wW, !0)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1932-L1990` → after: `L48-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L48-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L48-L73) · [Before (L1932-L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L1932-L1990)

```diff
-     function pB(BB) {
-       let {
-         worldCode: OB,
-         message: GB
-       } = BB;
-       const {
-         t: pB
-       } = (0, DB.H)(), {
-         isTouchScreen: qB
-       } = (0, jB.o)(["isTouchScreen"]), ZB = oB.featureFlags.canUseInviteLinks, NB = (0, MB.i)(ZB && null === GB), [RB, WB] = (0, JB.j)(), AB = (0, YB.useRef)(null);
-       if (null !== GB) return (0, lB.jsxs)("div", {
-         className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
-         children: [(0, lB.jsx)(zB.b, {
-           name: "lock"
-         }), (0, lB.jsx)("span", {
-           children: GB
- ... (43 more removed lines; see GitHub link above)
+     function xW() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j;
+       return (0, NW.b)(WW, LW)
+     }
+ 
+     function lW(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PW.j;
+       const OW = (0, NW.b)(iW, LW),
+         tW = function(WW) {
+           const iW = WW.getItem(cW);
+           return "string" !== typeof iW ? null : iW
+         }(iW),
+         ZW = function() {
+           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j).getItem(wW)
+         }(iW);
+       let xW;
+ ... (10 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1993` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L76) · [Before (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L1993)

```diff
-   37414: (BB, OB, GB) => {
+   42427: (WW, iW, OW) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1997` → after: `L79-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L79-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L79-L83) · [Before (L1997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L1997)

```diff
-       i: () => PB
+       f: () => PW,
+       i: () => cW,
+       k: () => NW,
+       m: () => LW,
+       o: () => wW
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1999-L2006` → after: `L85-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L85-L86) · [Before (L1999-L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L1999-L2006)

```diff
-     var YB = GB(627),
-       DB = GB(1175),
-       QB = GB(1705),
-       oB = GB(2928),
-       jB = GB(2874),
-       yB = GB(1485),
-       JB = GB(37418),
-       MB = GB(1282);
+     let mW = null,
+       EW = null;
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L2009-L2018` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L89-L90) · [Before (L2009-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L2009-L2018)

```diff
-       var GB;
-       return {
-         isError: !1,
-         name: BB,
-         ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
-         cosmetics: null !== OB && void 0 !== OB ? OB : {},
-         nameColour: null !== (GB = null === OB || void 0 === OB ? void 0 : OB.nameColour) && void 0 !== GB ? GB : YB.b,
-         location: {
-           status: "offline"
-         }
+       return mW = WW, EW = null, LW(iW), () => {
+         mW === WW && (mW = null, EW = null)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L2022-L2065` → after: `L94-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L94-L97) · [Before (L2022-L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L2022-L2065)

```diff
-     function zB(BB) {
-       let {
-         player: OB,
-         isFriend: GB = !1,
-         status: YB,
-         showLocation: yB = void 0 === YB,
-         kP: PB,
-         onSendFriendRequest: zB,
-         actions: lB,
-         zIndex: pB
-       } = BB;
-       const {
-         t: qB
-       } = (0, DB.H)();
-       let ZB = YB;
-       null !== PB && void 0 !== PB && PB.on && (ZB = (0, MB.jsxs)(MB.Fragment, {
- ... (28 more removed lines; see GitHub link above)
+     function PW() {
+       return null === EW ? null : {
+         ...EW
+       }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L2069-L2093` → after: `L101-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L101-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L101-L103) · [Before (L2069-L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L2069-L2093)

```diff
-       let {
-         row: OB,
-         kP: GB,
-         canInvite: YB,
-         invited: QB,
-         onInvite: oB,
-         zIndex: jB
-       } = BB;
-       const {
-         t: JB
-       } = (0, DB.H)(), PB = "online" === OB.place ? yB.f : yB.j;
-       return (0, MB.jsx)(zB, {
-         player: OB.friend,
-         isFriend: !0,
-         status: "here" === OB.place ? JB("worldSocial:inThisWorld") : void 0,
-         showLocation: !0,
- ... (9 more removed lines; see GitHub link above)
+       var iW;
+       null !== (iW = mW) && void 0 !== iW && iW(WW) && (EW = {
+         ...WW
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L2107-L2115` → after: `L107-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L107-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L107-L113) · [Before (L2107-L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L2107-L2115)

```diff
-     function oB(BB) {
-       const OB = {
-         lobbyName: BB,
-         answer: null,
-         response: DB.c.getSocialSettings(BB)
-       };
-       return OB.response.then((BB => {
-         OB.answer = BB
-       })), OB
+     function cW() {
+       return "undefined" === typeof location ? null : function(WW) {
+         const iW = new URLSearchParams(WW).get("renderDistanceMax");
+         if (null === iW || !/^\d{1,2}$/.test(iW)) return null;
+         const OW = Number(iW);
+         return OW >= 1 && OW <= 64 ? OW : null
+       }(location.search)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L2119-L2120` → after: `L116-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L116-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L116-L120) · [Before (L2119-L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L2119-L2120)

```diff
-     function yB(BB) {
-       jB.set(BB.lobbyName, BB)
+     function wW(WW, iW) {
+       return null === iW ? WW : {
+         horizontal: Math.min(WW.horizontal, iW),
+         vertical: WW.vertical
+       }
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L2123-L2184` → after: `L123-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L123-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L123-L127) · [Before (L2123-L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L2123-L2184)

```diff
-     function JB(BB) {
-       const [OB] = (0, YB.useState)((() => function(BB) {
-         var OB;
-         const GB = null !== (OB = jB.get(BB)) && void 0 !== OB ? OB : null;
-         return null !== GB && void 0 !== GB && GB.answer && "error" in GB.answer ? null : GB
-       }(BB))), [GB, oB] = (0, YB.useState)((() => null !== OB && void 0 !== OB && OB.answer && "settings" in OB.answer ? OB.answer.settings : null)), [yB, JB] = (0, YB.useState)(!0), [MB, PB] = (0, YB.useState)(null !== GB), zB = (0, YB.useRef)(GB);
-       zB.current = GB;
-       const lB = (0, YB.useRef)(0),
-         pB = (0, YB.useRef)(0),
-         qB = (0, YB.useRef)(!1),
-         ZB = (0, YB.useRef)(!0),
-         NB = (0, YB.useCallback)((async OB => {
-           const GB = ++lB.current,
-             YB = await (null !== OB && void 0 !== OB ? OB : DB.c.getSocialSettings(BB));
-           ZB.current && GB === lB.current && (PB(!0), JB(!1), "error" in YB || oB(YB.settings))
-         }), [BB]),
- ... (46 more removed lines; see GitHub link above)
+     function tW(WW, iW) {
+       return null === iW ? WW : wW(null !== WW && void 0 !== WW ? WW : {
+         horizontal: 1 / 0,
+         vertical: 1 / 0
+       }, iW)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L2187` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L130) · [Before (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L2187)

```diff
-   37426: (BB, OB, GB) => {
+   42432: (WW, iW, OW) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L2189-L2190` → after: `L132-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L132-L133) · [Before (L2189-L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L2189-L2190)

```diff
-       c: () => oB,
-       e: () => QB
+       b: () => EW,
+       c: () => NW
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L2192-L2193` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L135) · [Before (L2192-L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L2192-L2193)

```diff
-     var YB = GB(162);
-     const DB = new Map;
+     let mW = null;
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L2196-L2198` → after: `L138-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L138-L141) · [Before (L2196-L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L2196-L2198)

```diff
-       var GB;
-       const YB = null !== (GB = DB.get(BB)) && void 0 !== GB ? GB : new Map;
-       YB.set(OB, Date.now()), DB.set(BB, YB)
+       mW = {
+         conn: WW,
+         reason: iW
+       }
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L2202-L2206` → after: `L145-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L145-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L145-L147) · [Before (L2202-L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L2202-L2206)

```diff
-       const OB = DB.get(BB);
-       if (!OB) return [];
-       const GB = Date.now();
-       for (const [DB, QB] of OB) GB - QB >= YB.r && OB.delete(DB);
-       return [...OB.keys()]
+       var iW;
+       const OW = (null === (iW = mW) || void 0 === iW ? void 0 : iW.conn) === WW ? mW.reason : null;
+       return mW = null, OW
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L2209-L2232` → after: `L150-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L150-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L150-L160) · [Before (L2209-L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L2209-L2232)

```diff
-   37394: (BB, OB, GB) => {
-     function YB(BB, OB) {
-       const GB = OB.toLowerCase();
-       for (const YB of BB)
-         if (YB.toLowerCase() === GB) return !0;
-       return !1
-     }
- 
-     function DB(BB, OB, GB) {
-       const DB = [],
-         QB = [],
-         oB = [];
-       for (const jB of BB) !jB.isError && jB.name && ("inGame" === jB.location.status && jB.location.inLobbyName === OB || YB(GB, jB.name) ? QB.push({
-         friend: jB,
-         place: "here"
-       }) : "offline" === jB.location.status ? oB.push({
- ... (8 more removed lines; see GitHub link above)
+   37436: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => tW,
+       d: () => cW,
+       f: () => LW,
+       i: () => wW
+     });
+     var mW = OW(2047);
+     let EW = null,
+       NW = 0;
+     const PW = new Set;
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L2234-L2237` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L162) · [Before (L2234-L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L2234-L2237)

```diff
-     function QB(BB, OB, GB) {
-       const DB = [],
-         QB = BB.flatMap((BB => "here" === BB.place ? [BB.friend.name] : []));
-       for (const oB of [...QB, ...OB]) YB(DB, oB) || YB(GB, oB) || DB.push(oB);
+     function LW() {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L2241-L2242` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L166-L167) · [Before (L2241-L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L2241-L2242)

```diff
-     function oB(BB, OB) {
-       return null === BB || void 0 === BB || !BB.canManage || YB(BB.whitelist, OB) ? "none" : "whitelist" === BB.visibility ? "required" : "quiet"
+     function cW() {
+       return NW
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L2246-L2264` → after: `L171-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L171-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L171-L172) · [Before (L2246-L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L2246-L2264)

```diff
-       if (null === BB) return !0;
-       const {
-         visibility: OB
-       } = BB;
-       return "public" === OB || "unlisted" === OB || "whitelist" === OB && BB.canManage
-     }
- 
-     function yB(BB, OB, GB) {
-       if (GB) {
-         const GB = OB.filter((OB => !YB(BB.whitelist, OB)));
-         return {
-           ...BB,
-           whitelist: [...BB.whitelist, ...GB]
-         }
-       }
-       return {
- ... (3 more removed lines; see GitHub link above)
+       EW = WW, NW++, (0, mW.b)();
+       for (const iW of PW) iW()
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L2267-L2270` → after: `L175-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L175-L176) · [Before (L2267-L2270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L2267-L2270)

```diff
-     function JB(BB, OB) {
-       const GB = [];
-       for (let YB = 0; YB < BB.length; YB += OB) GB.push(BB.slice(YB, YB + OB));
-       return GB
+     function tW(WW) {
+       PW.add(WW)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L2282` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L179) · [Before (L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L2282)

```diff
-   37706: (BB, OB, GB) => {
+   42479: (WW, iW, OW) => {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L2284` → after: `L181-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L181-L182) · [Before (L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L2284)

```diff
-       d: () => QB
+       d: () => NW,
+       e: () => EW
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L2286-L2287` → after: `L184-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L184-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L184-L191) · [Before (L2286-L2287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L2286-L2287)

```diff
-     var YB = GB(56),
-       DB = GB(2653);
+     let mW = {
+       fire: () => {},
+       close: () => {}
+     };
+ 
+     function EW(WW) {
+       mW = WW
+     }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L2290-L2302` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/246.js#L194) · [Before (L2290-L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/246.js#L2290-L2302)

```diff
-       const BB = (0, DB.g)("lobbyLeaderboardInfo");
-       return (0, YB.useMemo)((() => function(BB) {
-         if (null === BB) return null;
-         const OB = Object.entries(BB),
-           GB = OB.filter((BB => {
-             let [, OB] = BB;
-             return void 0 !== OB
-           }));
-         if (GB.length === OB.length) return BB;
-         const YB = Object.fromEntries(GB),
-           DB = Object.keys(BB).filter((BB => !Object.hasOwn(YB, BB)));
-         return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${DB.join(", ")}`), YB
-       }(BB)), [BB])
+       return mW
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/247.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/247.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/247.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/247.js#L4)

```diff
-   37572: (BB, OB, GB) => {
+   37486: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L6-L9` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/247.js#L6-L7) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/247.js#L6-L9)

```diff
-       b: () => UB,
-       f: () => SB,
-       j: () => nB,
-       m: () => pB
+       d: () => tW,
+       g: () => xW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L11-L74` → after: `L9-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L9-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/247.js#L9-L23) · [Before (L11-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/247.js#L11-L74)

```diff
-     var YB = GB(1090),
-       DB = GB.n(YB),
-       QB = GB(56),
-       oB = GB(70),
-       jB = GB(1408),
-       yB = GB(1485),
-       JB = GB(1405),
-       MB = GB(1268),
-       PB = GB(1175),
-       zB = GB(37576),
-       lB = GB(1282);
- 
-     function pB(BB) {
-       const [OB, GB] = (0, QB.useState)((() => (0, zB.n)(BB)));
-       return (0, QB.useEffect)((() => (GB((0, zB.n)(BB)), (0, zB.K)((() => {
-         GB((0, zB.n)(BB))
- ... (48 more removed lines; see GitHub link above)
+     var mW = OW(62),
+       EW = OW(1422),
+       NW = OW(1172),
+       PW = OW(1383),
+       LW = OW(4718),
+       cW = OW(5686),
+       wW = OW(1283);
+ 
+     function tW(WW) {
+       let {
+         loading: iW,
+         schematics: OW,
+         onSchematicPicked: mW,
+         selectedSchematicIdList: EW = [],
+         disableAutoExport: cW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L78` → after: `L27-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L27-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/247.js#L27-L206) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/247.js#L78)

```diff
-       } = (0, PB.H)(), jB = NB(OB, GB);
+       } = (0, NW.B)();
+       return (0, wW.jsxs)("div", {
+         className: "SchematicList",
+         children: [iW && (0, wW.jsx)(PW.d, {}), !iW && 0 === OW.length && (0, wW.jsx)("div", {
+           className: "NoSchematicsText",
+           children: tW("worldBuilder:noSavedSchematic")
+         }), !iW && OW.map((WW => (0, wW.jsx)(LW.d, {
+           source: {
+             type: "schematic",
+             schematic: WW
+           },
+           gameWidth: "25%",
+           useLongRatio: !0,
+           onClick: () => {
+             mW(WW)
+           },
+ ... (164 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L80-L81` → after: `L208-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L208-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/247.js#L208-L342) · [Before (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/247.js#L80-L81)

```diff
-         children: [(0, lB.jsx)("div", {
-           className: "TutorialStepText",
+         children: [(0, jW.jsx)("h1", {
+           className: "SchematicPopupTitle",
+           children: NW("worldBuilder:loadSchematic")
+         }), (0, jW.jsx)("h2", {
+           className: "SchematicPopupSubtitle",
+           children: NW("worldBuilder:chooseOneOfYourSchematics")
+         }), (0, jW.jsx)("div", {
+           className: "SchematicPopupSchematicListContainer",
+           children: (0, jW.jsx)(PW.d, {
+             schematics: iW,
+             onSchematicPicked: WW => {
+               mW(WW.schematicId), OW()
+             },
+             loading: !1,
+             disableAutoExport: !0
+           })
+ ... (119 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L84-L86` → after: `L358-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L358-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/247.js#L358-L378) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/247.js#L84-L86)

```diff
-           className: "TutorialStepButtons",
-           children: [(0, zB.v)(OB, GB) && (0, lB.jsx)(yB.j, {
-             className: "TutorialStepButton",
+           className: wW()("SaveSchematicCheckboxContainer", {
+             WarningBorder: "existing" === iW
+           }),
+           children: [(0, jW.jsx)(KW.e, {
+             checked: kW,
+             onChange: WW => {
+               sW(WW.target.checked)
+             },
+             disabled: !1,
+             className: "SaveSchematicCheckbox"
+           }), (0, jW.jsx)("h1", {
+             className: "SchematicPopupSubtitle",
+             children: PW("existing" === iW ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
+           })]
+         }), "existing" === iW && (0, jW.jsx)("div", {
+           className: "SaveSchematicLobbyCodeWarning",
+ ... (5 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L88` → after: `L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/247.js#L380) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/247.js#L88)

```diff
-               null === QB || void 0 === QB || QB(), (0, zB.s)(OB, GB)
+               YW() && EW(kW, LW, ZW)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L90-L103` → after: `L382-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L382-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/247.js#L382-L386) · [Before (L90-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/247.js#L90-L103)

```diff
-             children: oB("tutorial:back")
-           }), !DB && (0, lB.jsx)(yB.f, {
-             className: "TutorialStepButton",
-             onClick: () => {
-               (0, zB.h)(GB)
-             },
-             padDefaultFocus: !0,
-             children: oB(jB ? "tutorial:done" : "tutorial:next")
-           }), !jB && (0, lB.jsx)(yB.j, {
-             className: "TutorialStepButton",
-             onClick: () => {
-               (0, zB.m)(OB)
-             },
-             children: oB("tutorial:skip")
+             children: PW("file" === iW ? "general:download" : "general:save")
+           }), (0, jW.jsx)(xW.O, {
+             className: "SaveSchematicButton",
+             onClick: NW,
+             children: PW("general:cancel")
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L108-L126` → after: `L391-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L391-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/247.js#L391-L471) · [Before (L108-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/247.js#L108-L126)

```diff
-     const AB = 6;
- 
-     function VB(BB) {
-       let {
-         rect: OB,
-         margin: GB
-       } = BB;
-       const YB = Math.max(0, OB.top - GB),
-         DB = OB.bottom + GB,
-         QB = Math.max(0, OB.left - GB),
-         oB = OB.right + GB;
-       return (0, lB.jsxs)(lB.Fragment, {
-         children: [(0, lB.jsx)("div", {
-           className: "TutorialSpotlightBackdrop",
-           style: {
-             top: 0,
- ... (3 more removed lines; see GitHub link above)
+     var TW = OW(1185),
+       JW = OW(1856),
+       hW = OW(1111);
+ 
+     function HW(WW, iW) {
+       if ("devDownloadJson" !== WW) ! function(WW, iW) {
+         const OW = TW.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, NW.d)().websocketUrl);
+         let LW = !1;
+         const cW = async (WW, iW) => {
+           if (LW) return;
+           LW = !0;
+           const {
+             gameNameWithVariation: mW,
+             lobbyName: PW
+           } = (0, NW.d)(), cW = {
+             gameNameWithVariation: mW,
+ ... (65 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L128-L134` → after: `L473-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L473-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/247.js#L473-L514) · [Before (L128-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/247.js#L128-L134)

```diff
-         }), (0, lB.jsx)("div", {
-           className: "TutorialSpotlightBackdrop",
-           style: {
-             top: DB,
-             left: 0,
-             right: 0,
-             bottom: 0
+         });
+         else if ("Plugin|WorldBuilder|LoadSchematic" === WW) ! function(WW) {
+           let {
+             ownedSchematics: iW,
+             onChosenFile: OW,
+             onChosenPreset: mW,
+             onClose: EW
+           } = WW;
+           ZW.NotificationProvider.showCustomPopup({
+             body: WW => (0, jW.jsx)(kW, {
+               ownedSchematics: iW,
+               onChosenFile: OW,
+               onChosenPreset: mW,
+               onClose: WW
+             }),
+             middleScreenPopupClassName: "SchematicPopup",
+ ... (26 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L136-L142` → after: `L516-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L516-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/247.js#L516-L521) · [Before (L136-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/247.js#L136-L142)

```diff
-         }), (0, lB.jsx)("div", {
-           className: "TutorialSpotlightBackdrop",
-           style: {
-             top: YB,
-             left: 0,
-             width: QB,
-             height: DB - YB
+         });
+         else if ("Plugin|WorldBuilder|ListSchematics" === WW)(0, PW.g)({
+           ownedSchematics: Array.isArray(iW) ? iW : iW.schematics,
+           currentWorldSchematicId: Array.isArray(iW) ? null : iW.currentWorldSchematicId,
+           onClose: () => {
+             cW("cancel", {})
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L144-L196` → after: `L523-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L523-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/247.js#L523-L534) · [Before (L144-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/247.js#L144-L196)

```diff
-         }), (0, lB.jsx)("div", {
-           className: "TutorialSpotlightBackdrop",
-           style: {
-             top: YB,
-             left: oB,
-             right: 0,
-             height: DB - YB
-           }
-         })]
-       })
-     }
- 
-     function SB(BB) {
-       let {
-         target: OB,
-         placement: GB,
- ... (37 more removed lines; see GitHub link above)
+         });
+         else if ("Plugin|WorldBuilder|ExportWorld" === WW) {
+           var wW;
+           const WW = null !== (wW = iW.schematic) && void 0 !== wW ? wW : iW;
+           (0, sW.j)({
+             schematic: WW,
+             inSourceWorld: WW.schematicId === iW.currentWorldSchematicId,
+             onClose: () => {
+               cW("cancel", {})
+             }
+           })
+         } else console.error(`Unknown plugin message type ${WW}`)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L198-L584` → after: `L536-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L536-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/247.js#L536-L540) · [Before (L198-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/247.js#L198-L584)

```diff
-       (0, QB.useEffect)((() => {
-         null === RB || void 0 === RB || RB()
-       }), [WB, RB]), (0, QB.useEffect)((() => {
-         if (MB || !OB || !RB) return;
-         const BB = new ResizeObserver((() => {
-           RB()
-         }));
-         return BB.observe(OB), OB.parentElement && BB.observe(OB.parentElement), () => {
-           BB.disconnect()
-         }
-       }), [OB, MB, RB]), (0, QB.useEffect)((() => {
-         MB && (null === OB || void 0 === OB || OB.scrollIntoView({
-           block: "nearest",
-           inline: "nearest"
-         }))
-       }), [OB, MB]);
- ... (371 more removed lines; see GitHub link above)
+       else {
+         const WW = JSON.stringify(iW.data, null, 2);
+         (0, JW.downloadBlob)(new Blob([WW], {
+           type: "application/json"
+         }), iW.filename)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/248.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/248.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016)

#### 1. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L2)

```diff
- export const ids = [248];
+ export const ids = [60, 248];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L4-L153` → after: `L4-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L4-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L4-L32) · [Before (L4-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L4-L153)

```diff
-   37312: BB => {
-     BB.exports = {
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
- ... (134 more removed lines; see GitHub link above)
+   39780: (WW, iW, OW) => {
+     var mW = {
+       "./combat_1.png": 39785,
+       "./dungeon_crumbling_crypt.png": 39793,
+       "./dungeon_frozen_hollow.png": 39795,
+       "./dungeon_wildwood_grove.png": 39803,
+       "./dungeons.png": 39808,
+       "./farming_1.png": 39811,
+       "./fishing_1.png": 39819,
+       "./hub.png": 39823,
+       "./island.png": 39828,
+       "./mining_1.png": 39830,
+       "./mining_1_bridge.png": 39839,
+       "./mining_1_gallery.png": 39848,
+       "./mining_1_hollow.png": 39857,
+       "./mining_1_village.png": 39863
+ ... (13 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L156-L165` → after: `L38-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L38-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L38-L43) · [Before (L156-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L156-L165)

```diff
-   37305: (BB, OB, GB) => {
-     var YB = GB(37312),
-       DB = GB(37318),
-       QB = Object.hasOwnProperty,
-       oB = Object.create(null);
-     for (var jB in YB) QB.call(YB, jB) && (oB[YB[jB]] = jB);
-     var yB = BB.exports = {
-       to: {},
-       get: {}
-     };
+   39881: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => EW,
+       h: () => NW
+     });
+     const mW = new WeakMap;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L167-L168` → after: `L45-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L45-L46) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L167-L168)

```diff
-     function JB(BB, OB, GB) {
-       return Math.min(Math.max(OB, BB), GB)
+     function EW(WW, iW) {
+       return mW.set(WW, iW), WW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L172-L173` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L50-L51) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L172-L173)

```diff
-       var OB = Math.round(BB).toString(16).toUpperCase();
-       return OB.length < 2 ? "0" + OB : OB
+       var iW;
+       return null !== (iW = mW.get(WW)) && void 0 !== iW ? iW : null
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L175-L218` → after: `L53-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L53-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L53-L66) · [Before (L175-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L175-L218)

```diff
-     yB.get = function(BB) {
-       var OB, GB;
-       switch (BB.substring(0, 3).toLowerCase()) {
-         case "hsl":
-           OB = yB.get.hsl(BB), GB = "hsl";
-           break;
-         case "hwb":
-           OB = yB.get.hwb(BB), GB = "hwb";
-           break;
-         default:
-           OB = yB.get.rgb(BB), GB = "rgb"
-       }
-       return OB ? {
-         model: GB,
-         value: OB
-       } : null
- ... (28 more removed lines; see GitHub link above)
+   },
+   39733: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => mW
+     });
+     class mW {
+       constructor(WW, iW, OW) {
+         this.iZ = WW, this.beforeOpen = iW, this.afterClose = OW, this.open = !1, this.JA = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
+           this.isEnabled() && !this.JA && (this.open = !0, this.beforeOpen(this), this.emit())
+         }, this.close = () => {
+           this.closePanel(!1)
+         }, this.dismiss = () => {
+           this.closePanel(!0)
+         }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L220-L226` → after: `L68-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L68-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L68-L85) · [Before (L220-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L220-L226)

```diff
-       return null
-     }, yB.get.hwb = function(BB) {
-       if (!BB) return null;
-       var OB = BB.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
-       if (OB) {
-         var GB = parseFloat(OB[4]);
-         return [(parseFloat(OB[1]) % 360 + 360) % 360, JB(parseFloat(OB[2]), 0, 100), JB(parseFloat(OB[3]), 0, 100), JB(isNaN(GB) ? 1 : GB, 0, 1)]
+       isOpen() {
+         return this.open
+       }
+       showOrRefresh() {
+         this.open ? this.emit() : this.show()
+       }
+       closePanel(WW) {
+         this.open = !1, this.onClosed(), this.emit(), this.afterClose(WW)
+       }
+       onClosed() {}
+       dispose() {
+         this.open = !1, this.emit(), this.JA = !0
+       }
+       isEnabled() {
+         return !0
+       }
+ ... (2 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L252-L258` → after: `L89-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L89-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L89-L96) · [Before (L252-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L252-L258)

```diff
-   37300: (BB, OB, GB) => {
-     const YB = GB(37305),
-       DB = GB(37328),
-       QB = ["keyword", "gray", "hex"],
-       oB = {};
-     for (const lB of Object.keys(DB)) oB[[...DB[lB].labels].sort().join("")] = lB;
-     const jB = {};
+   39894: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       SkyblockEntityFacing: () => LW,
+       needsSkyblockEntityFacing: () => PW
+     });
+     var mW = OW(639),
+       EW = OW(2937),
+       NW = OW(39897);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L261-L281` → after: `L99-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L99-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L99-L121) · [Before (L261-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L261-L281)

```diff
-       if (!(this instanceof yB)) return new yB(BB, OB);
-       if (OB && OB in QB && (OB = null), OB && !(OB in DB)) throw new Error("Unknown model: " + OB);
-       let GB, JB;
-       if (null == BB) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
-       else if (BB instanceof yB) this.model = BB.model, this.color = [...BB.color], this.valpha = BB.valpha;
-       else if ("string" === typeof BB) {
-         const OB = YB.get(BB);
-         if (null === OB) throw new Error("Unable to parse color from string: " + BB);
-         this.model = OB.model, JB = DB[this.model].channels, this.color = OB.value.slice(0, JB), this.valpha = "number" === typeof OB.value[JB] ? OB.value[JB] : 1
-       } else if (BB.length > 0) {
-         this.model = OB || "rgb", JB = DB[this.model].channels;
-         const GB = Array.prototype.slice.call(BB, 0, JB);
-         this.color = zB(GB, JB), this.valpha = "number" === typeof BB[JB] ? BB[JB] : 1
-       } else if ("number" === typeof BB) this.model = "rgb", this.color = [BB >> 16 & 255, BB >> 8 & 255, 255 & BB], this.valpha = 1;
-       else {
-         this.valpha = 1;
- ... (5 more removed lines; see GitHub link above)
+       if (WW.metaInfo === mW.d || "Iron Guardian" === WW.type || "Gold Guardian" === WW.type) return !0;
+       if ("Pig" === WW.type) return "sitting" === WW.pose;
+       if ("Person" !== WW.meshKind || void 0 === WW.meshOpts) return !1;
+       let OW = null === iW || void 0 === iW ? void 0 : iW.get(WW.meshOpts);
+       if (void 0 === OW) {
+         var NW, PW;
+         const mW = (0, EW.h)(WW);
+         OW = !1, "pig_napoleon" === (null === mW || void 0 === mW || null === (NW = mW.opts.textures) || void 0 === NW ? void 0 : NW.head) ? OW = !0 : "npc_pig_head" === (null === mW || void 0 === mW || null === (PW = mW.opts.textures) || void 0 === PW ? void 0 : PW.head) && (OW  … [truncated]
+       }
+       return "sitting" === OW ? "sitting" === WW.pose : OW
+     }(0, NW.e)("skyblock", ((WW, iW) => {
+       iW.setFacingTolerance(PW(WW) ? 0 : null)
+     }));
+     class LW {
+       constructor(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+ ... (7 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L283-L286` → after: `L123-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L123-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L123-L280) · [Before (L283-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L283-L286)

```diff
-           labels: QB
-         } = DB[this.model], jB = [];
-         for (GB = 0; GB < QB.length; GB++) jB.push(BB[QB[GB]]);
-         this.color = zB(jB)
+           api: WW
+         } = this, iW = this.nextFacing;
+         WW.forEachEntity(this.visit);
+         for (const OW of this.facing) iW.has(OW) || WW.setFacingTolerance(OW, null);
+         this.facing.clear(), this.nextFacing = this.facing, this.facing = iW
+       }
+       dispose() {
+         for (const WW of this.facing) this.api.setFacingTolerance(WW, null);
+         this.facing.clear(), this.meshFacingCache.clear()
+       }
+     }
+   },
+   39715: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => nL
+     });
+ ... (142 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L288-L291` → after: `L282-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L282-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L282-L323) · [Before (L288-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L288-L291)

```diff
-       if (jB[this.model])
-         for (JB = DB[this.model].channels, GB = 0; GB < JB; GB++) {
-           const BB = jB[this.model][GB];
-           BB && (this.color[GB] = BB(this.color[GB]))
+       getEntities() {
+         return this.entities
+       }
+       setTranslator(WW) {
+         this.translate = WW, this.emit()
+       }
+       yZ(WW) {
+         var iW;
+         if (!this.JA)
+           if ("entities" !== WW.kind)
+             if ("open" !== WW.kind) {
+               var OW, mW;
+               if ("snapshot" === WW.kind)(null === (OW = WW.snapshot) || void 0 === OW ? void 0 : OW.zoneId) !== (null === (mW = this.map) || void 0 === mW ? void 0 : mW.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = WW.snapshot, !this.map && this.open && thi … [truncated]
+               else if ("travelQueued" === WW.kind) {
+                 var EW;
+                 WW.requestId === (null === (EW = this.pending) || void 0 === EW ? void 0 : EW.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
+ ... (26 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L293` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L325) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L293)

```diff
-       this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this)
+       }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L295-L384` → after: `L327-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L327-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L327-L386) · [Before (L295-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L295-L384)

```diff
-     yB.prototype = {
-       toString() {
-         return this.string()
-       },
-       toJSON() {
-         return this[this.model]()
-       },
-       string(BB) {
-         let OB = this.model in YB.to ? this : this.rgb();
-         OB = OB.round("number" === typeof BB ? BB : 1);
-         const GB = 1 === OB.valpha ? OB.color : [...OB.color, this.valpha];
-         return YB.to[OB.model](GB)
-       },
-       percentString(BB) {
-         const OB = this.rgb().round("number" === typeof BB ? BB : 1),
-           GB = 1 === OB.valpha ? OB.color : [...OB.color, this.valpha];
- ... (74 more removed lines; see GitHub link above)
+     var ZW = OW(344);
+     const xW = 67.5 * Math.PI / 180;
+ 
+     function lW(WW, iW) {
+       const OW = Math.abs(WW);
+       if (OW > xW || iW.trackHalfWidth <= 0) return null;
+       const mW = iW.trackHalfWidth,
+         EW = iW.screenHalfWidth / (iW.tanHalfFovX * Math.max(.5, Math.cos(iW.pitch))),
+         NW = Math.min(Math.atan(.6 * mW / EW), .75 * xW),
+         PW = EW * Math.tan(NW);
+       let LW;
+       if (OW <= NW) LW = EW * Math.tan(OW);
+       else {
+         const WW = xW - NW,
+           iW = Math.max(0, EW * WW / (Math.cos(NW) ** 2 * (mW - PW)) - 1),
+           cW = (OW - NW) / WW;
+ ... (44 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L460-L474` → after: `L390-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L390-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L390-L407) · [Before (L460-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L460-L474)

```diff
-     };
-     for (const lB of Object.keys(DB)) {
-       if (QB.includes(lB)) continue;
-       const {
-         channels: BB
-       } = DB[lB];
-       yB.prototype[lB] = function() {
-         if (this.model === lB) return new yB(this);
-         for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
-         return OB.length > 0 ? new yB(OB, lB) : new yB([...(YB = DB[this.model][lB].raw(this.color), Array.isArray(YB) ? YB : [YB]), this.valpha], lB);
-         var YB
-       }, yB[lB] = function() {
-         for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
-         let DB = GB[0];
-         return "number" === typeof DB && (DB = zB(GB, BB)), new yB(DB, lB)
+     }
+     class jW {
+       constructor(WW) {
+         this.map = WW, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
+       }
+       getPoints() {
+         const WW = this.map.getSnapshot().map;
+         return !WW || WW.insideDungeon ? [] : WW.portals.map((WW => {
+           var iW;
+           return {
+             id: "portal:" + WW.id,
+             kind: "portal",
+             position: WW.position,
+             nameKey: null !== (iW = WW.nameKey) && void 0 !== iW ? iW : "skyblockGame:compassUnvisitedZone",
+             icon: WW.visited ? "dungeons" === WW.destination ? "portal_orange" : "portal" : "unknown",
+             colour: WW.colour
+ ... (2 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L477-L482` → after: `L410-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L410-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L410-L422) · [Before (L477-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L477-L482)

```diff
- 
-     function JB(BB) {
-       return function(OB) {
-         return function(BB, OB) {
-           return Number(BB.toFixed(OB))
-         }(OB, BB)
+     class UW {
+       constructor(WW) {
+         this.target = WW, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
+       }
+       getPoints() {
+         const WW = this.target();
+         return WW ? [{
+           id: "quest",
+           kind: "quest",
+           icon: "quest",
+           position: WW.position,
+           nameKey: WW.nameKey
+         }] : []
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L487-L492` → after: `L427-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L427-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L427-L604) · [Before (L487-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L487-L492)

```diff
-       BB = Array.isArray(BB) ? BB : [BB];
-       for (const YB of BB)(jB[YB] || (jB[YB] = []))[OB] = GB;
-       return BB = BB[0],
-         function(YB) {
-           let DB;
-           return void 0 !== YB ? (GB && (YB = GB(YB)), DB = this[BB](), DB.color[OB] = YB, DB) : (DB = this[BB]().color[OB], GB && (DB = GB(DB)), DB)
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.position;
+       const EW = mW[0] - iW[0],
+         NW = mW[2] - iW[2];
+       return {
+         ...WW,
+         position: mW,
+         offset: ZW.e.computeShortestRotation(OW, (0, ZW.Ab)([EW, 0, NW])),
+         distance: Math.hypot(EW, mW[1] - iW[1], NW)
+       }
+     }
+     let sW;
+ 
+     function MW(WW, iW) {
+       var OW;
+       return (null === (OW = sW) || void 0 === OW ? void 0 : OW.locale) !== iW && (sW = {
+         locale: iW,
+ ... (162 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L497-L498` → after: `L673-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L673-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L673-L701) · [Before (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L497-L498)

```diff
-       return function(OB) {
-         return Math.max(0, Math.min(BB, OB))
+       return Math.round(10 * WW) / 10
+     }
+ 
+     function Ei(WW, iW) {
+       switch (WW) {
+         case "foraging":
+           return {
+             translationKey: "skyblockGame:foragingBenefit", percent: mi(100 * (FW(iW) - 1))
+           };
+         case "combat":
+           return {
+             translationKey: "skyblockGame:combatBenefit", percent: mi(100 * (zW(iW) - 1))
+           };
+         case "mining":
+           return {
+             translationKey: "skyblockGame:miningBenefit", percent: mi(100 * (QW(iW) - 1))
+ ... (13 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L503-L504` → after: `L710-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L710-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L710-L721) · [Before (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L503-L504)

```diff
-       for (let GB = 0; GB < OB; GB++) "number" !== typeof BB[GB] && (BB[GB] = 0);
-       return BB
+       if (!Number.isSafeInteger(WW) || WW < 0) throw new Error("Skill XP must be a non-negative safe integer");
+       const OW = Ni(iW),
+         mW = WW => function(WW, iW) {
+           return Ni(WW) * iW * (iW + 1) / 2
+         }(iW, WW);
+       let EW = Math.min(aW, Math.floor((Math.sqrt(8 * WW / OW + 1) - 1) / 2));
+       return EW < aW && mW(EW + 1) <= WW ? EW++ : mW(EW) > WW && EW--, {
+         totalXp: WW,
+         level: EW,
+         xpIntoLevel: WW - mW(EW),
+         xpForNextLevel: EW === aW ? null : OW * (EW + 1)
+       }
```
