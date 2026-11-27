# Changed — Bundle Modifications Report (Part 026 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `26 / 86` (**271** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 025](part-025.md) · [Part 027 →](part-027.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/613.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/613.js` (68 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73ef)

#### 60. `bundles/preprod.bloxd.io/chunks/js/613.js` (Changed code · before: `L1213-L1223` → after: `L1445-L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73efR1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73ef) · [After (L1445-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/613.js#L1445-L1635) · [Before (L1213-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/613.js#L1213-L1223)

```diff
-       const OB = BB._device;
-       OB !== PB && (jB?.clear(), jB = null, yB = null, JB = null, MB = null, PB = null, PB = OB), yB ??= OB.createShaderModule({
-         code: oB
-       }), JB ??= function(BB) {
-         return (0, DB.c)(BB, QB)
-       }(BB), MB ??= OB.createBindGroupLayout({
-         entries: [{
-           binding: 0,
-           visibility: YB.h.FRAGMENT,
-           texture: {
-             sampleType: "float"
+       return iW => {
+         if (!/\S/.test(iW)) return ui.Space;
+         if (function(WW) {
+             if (di) return di.test(WW);
+             for (let iW = 0; iW < WW.length; iW++) {
+               let OW = WW[iW];
+               if (/\w/.test(OW) || OW > "\x80" && (OW.toUpperCase() != OW.toLowerCase() || oi.test(OW))) return !0
+             }
+             return !1
+           }(iW)) return ui.Word;
+         for (let OW = 0; OW < WW.length; OW++)
+           if (iW.indexOf(WW[OW]) > -1) return ui.Word;
+         return ui.Other
+       }
+     }
+     class vi {
+ ... (175 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/613.js` (Changed code · before: `L1225-L1230` → after: `L1637-L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73efR1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73ef) · [After (L1637-L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/613.js#L1637-L1900) · [Before (L1225-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/613.js#L1225-L1230)

```diff
-         }, {
-           binding: 1,
-           visibility: YB.h.FRAGMENT,
-           sampler: {}
-         }]
-       })
+         }
+       for (let EW in iW) void 0 === mW[EW] && (mW[EW] = iW[EW]);
+       return mW
+     }
+     vi.allowMultipleSelections = xi, vi.tabSize = qW.define({
+       combine: WW => WW.length ? WW[0] : 4
+     }), vi.lineSeparator = li, vi.readOnly = Ui, vi.phrases = qW.define({
+       compare(WW, iW) {
+         let OW = Object.keys(WW),
+           mW = Object.keys(iW);
+         return OW.length == mW.length && OW.every((OW => WW[OW] == iW[OW]))
+       }
+     }), vi.languageData = Zi, vi.changeFilter = Ai, vi.transactionFilter = bi, vi.transactionExtender = ji, Pi.reconfigure = Ki.define();
+     class Di {
+       eq(WW) {
+         return this == WW
+ ... (248 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/613.js` (Changed code · before: `L1234-L1236` → after: `L1904-L2004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73efR1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73ef) · [After (L1904-L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/613.js#L1904-L2004) · [Before (L1234-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/613.js#L1234-L1236)

```diff
-       const YB = BB._device,
-         DB = YB.createCommandEncoder();
-       pB(BB, OB, DB, GB), YB.queue.submit([DB.finish()])
+       let mW = new Map;
+       for (let NW of WW)
+         for (let WW = 0; WW < NW.chunk.length; WW++) NW.chunk[WW].tEW <= 0 && mW.set(NW.chunk[WW], NW.chunkPos[WW]);
+       let EW = new Set;
+       for (let NW of iW)
+         for (let WW = 0; WW < NW.chunk.length; WW++) {
+           let iW = mW.get(NW.chunk[WW]);
+           null == iW || (OW ? OW.mapPos(iW) : iW) != NW.chunkPos[WW] || (null === OW || void 0 === OW ? void 0 : OW.touchesRange(iW, iW + NW.chunk[WW].length)) || EW.add(NW.chunk[WW])
+         }
+       return EW
+     }
+     class Gi {
+       constructor(WW, iW, OW) {
+         let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+         this.layer = WW, this.skip = iW, this.ZEW = OW, this.rank = mW
+       }
+ ... (85 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/613.js` (Changed code · before: `L1239-L1262` → after: `L2007-L2051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73efR2007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73ef) · [After (L2007-L2051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/613.js#L2007-L2051) · [Before (L1239-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/613.js#L1239-L1262)

```diff
-     function pB(BB, OB, GB, YB) {
-       if (OB.mipLevelCount <= 1) return;
-       const DB = BB._device,
-         QB = function(BB, OB) {
-           const GB = BB._device;
-           zB(BB), jB ??= new Map;
-           let YB = jB.get(OB);
-           return YB || (YB = GB.createRenderPipeline({
-             layout: GB.createPipelineLayout({
-               bindGroupLayouts: [MB]
-             }),
-             vertex: {
-               module: yB,
-               entryPoint: "vs"
-             },
-             fragment: {
- ... (8 more removed lines; see GitHub link above)
+     function ai(WW, iW) {
+       for (let OW = WW[iW];;) {
+         let mW = 1 + (iW << 1);
+         if (mW >= WW.length) break;
+         let EW = WW[mW];
+         if (mW + 1 < WW.length && EW.compare(WW[mW + 1]) >= 0 && (EW = WW[mW + 1], mW++), OW.compare(EW) < 0) break;
+         WW[mW] = OW, WW[iW] = EW, iW = mW
+       }
+     }
+     class ri {
+       constructor(WW, iW, OW) {
+         this.ZEW = OW, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Ii.from(WW, iW, OW)
+       }
+       goto(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
+         return this.cursor.goto(WW, iW), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = WW, this.endSide = iW, this.openStart = -1, this.next(), this
+ ... (29 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/613.js` (Changed code · before: `L1264-L1305` → after: `L2053-L2104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73efR2053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73ef) · [After (L2053-L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/613.js#L2053-L2104) · [Before (L1264-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/613.js#L1264-L1305)

```diff
-           }), jB.set(OB, YB)), YB
-         }(BB, OB.format),
-         oB = null != YB ? {
-           dimension: "2d",
-           baseArrayLayer: YB,
-           arrayLayerCount: 1
-         } : {};
-       for (let jB = 1; jB < OB.mipLevelCount; jB++) {
-         const BB = OB.createView({
-             baseMipLevel: jB - 1,
-             mipLevelCount: 1,
-             ...oB
-           }),
-           YB = OB.createView({
-             baseMipLevel: jB,
-             mipLevelCount: 1,
- ... (26 more removed lines; see GitHub link above)
+             this.removeActive(mW), OW && Qi(OW, mW)
+           } else {
+             if (!this.cursor.value) {
+               this.to = this.endSide = 1e9;
+               break
+             }
+             if (this.cursor.from > WW) {
+               this.to = this.cursor.from, this.endSide = this.cursor.startSide;
+               break
+             } {
+               let WW = this.cursor.value;
+               if (WW.point) {
+                 if (!(iW && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
+                   this.point = WW, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = WW.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
+                   break
+                 }
+ ... (36 more added lines; see GitHub link above)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/613.js` (Changed code · before: `L1308-L1309` → after: `L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73efR2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73ef) · [After (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/613.js#L2107) · [Before (L1308-L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/613.js#L1308-L1309)

```diff
-   },
-   44807: (BB, OB, GB) => {
+ 
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/613.js` (Changed code · before: `L1311` → after: `L2109-L2112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73efR2109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73ef) · [After (L2109-L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/613.js#L2109-L2112) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/613.js#L1311)

```diff
-       return Math.floor(Math.log2(Math.max(BB, OB))) + 1
+       if (WW.length != iW.length) return !1;
+       for (let OW = 0; OW < WW.length; OW++)
+         if (WW[OW] != iW[OW] && !Vi(WW[OW], iW[OW])) return !1;
+       return !0
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/613.js` (Changed code · before: `L1329-L1363` → after: `L2115-L2136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73efR2115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73ef) · [After (L2115-L2136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/613.js#L2115-L2136) · [Before (L1329-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/613.js#L1329-L1363)

```diff
-     function JB(BB, OB, GB, jB) {
-       let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
-       (OB < 1 || GB < 1 || jB < 1) && (0, YB.d)(722, OB, GB, jB);
-       const MB = BB._device,
-         PB = JB.mipMaps ?? !0,
-         zB = JB.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
-         lB = MB.createTexture({
-           size: {
-             width: OB,
-             height: GB,
-             depthOrArrayLayers: jB
-           },
-           dimension: "2d",
-           format: zB,
-           mipLevelCount: PB ? (0, yB.d)(OB, GB) : 1,
-           usage: DB.i.TEXTURE_BINDING | DB.i.COPY_DST | DB.i.RENDER_ATTACHMENT
- ... (19 more removed lines; see GitHub link above)
+     function Qi(WW, iW) {
+       for (let OW = iW, mW = WW.length - 1; OW < mW; OW++) WW[OW] = WW[OW + 1];
+       WW.pop()
+     }
+ 
+     function WO(WW, iW, OW) {
+       for (let mW = WW.length - 1; mW >= iW; mW--) WW[mW + 1] = WW[mW];
+       WW[iW] = OW
+     }
+ 
+     function iO(WW, iW) {
+       let OW = -1,
+         mW = 1e9;
+       for (let EW = 0; EW < iW.length; EW++)(iW[EW] - mW || WW[EW].endSide - WW[OW].endSide) < 0 && (OW = EW, mW = iW[EW]);
+       return OW
+     }
+ ... (6 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/613.js` (Changed code · before: `L1367-L1378` → after: `L2140-L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73efR2140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-90e67f0cc2eef9a18031214b40be408a8b2e9e08274a49c78fed8a2e82ec73ef) · [After (L2140-L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/613.js#L2140-L2145) · [Before (L1367-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/613.js#L1367-L1378)

```diff
-       let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
-       (GB < 0 || GB >= OB.layers || (0 | GB) !== GB) && (0, YB.d)(723, OB.layers, GB);
-       const oB = QB.invertY ?? !0,
-         yB = QB.premultiplyAlpha ?? !1;
-       BB._device.queue.copyExternalImageToTexture({
-         source: DB,
-         flipY: oB
-       }, {
-         texture: OB.texture,
-         origin: [0, 0, GB],
-         premultipliedAlpha: yB
-       }, [OB.width, OB.height, 1]), OB.texture.mipLevelCount > 1 && (0, jB.generateMipmaps)(BB, OB.texture, GB)
+       for (let EW = 0, NW = 0;;) {
+         if (NW >= iW) return EW;
+         if (EW == WW.length) break;
+         NW += 9 == WW.charCodeAt(EW) ? OW - NW % OW : 1, EW = TW(WW, EW)
+       }
+       return !0 === mW ? -1 : WW.length
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/614.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/614.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6b91fd90365055629f51f3bc52c87f84ec5b06ee3e71d761294f588d2b8fd7e9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/614.js` (Changed code · before: `L4` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6b91fd90365055629f51f3bc52c87f84ec5b06ee3e71d761294f588d2b8fd7e9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6b91fd90365055629f51f3bc52c87f84ec5b06ee3e71d761294f588d2b8fd7e9) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/614.js#L4-L11) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/614.js#L4)

```diff
-   44881: (BB, OB, GB) => {
+   53593: WW => {
+     function iW(WW) {
+       var iW = new Error("Cannot find module '" + WW + "'");
+       throw iW.code = "MODULE_NOT_FOUND", iW
+     }
+     iW.keys = () => [], iW.resolve = iW, iW.id = 53593, WW.exports = iW
+   },
+   53643: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/614.js` (Changed code · before: `L6` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6b91fd90365055629f51f3bc52c87f84ec5b06ee3e71d761294f588d2b8fd7e9R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6b91fd90365055629f51f3bc52c87f84ec5b06ee3e71d761294f588d2b8fd7e9) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/614.js#L13-L14) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/614.js#L6)

```diff
-       parseShaderPack: () => YB
+       d: () => mW,
+       e: () => EW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/614.js` (Changed code · before: `L10-L26` → after: `L4284-L4285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6b91fd90365055629f51f3bc52c87f84ec5b06ee3e71d761294f588d2b8fd7e9R4284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6b91fd90365055629f51f3bc52c87f84ec5b06ee3e71d761294f588d2b8fd7e9) · [After (L4284-L4285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/614.js#L4284-L4285) · [Before (L10-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/614.js#L10-L26)

```diff
-       var OB, GB;
-       const YB = BB.get("shaderPackUrl"),
-         DB = null !== (OB = BB.get("shaderPackMode")) && void 0 !== OB ? OB : "strict";
-       if (null === YB) {
-         if (BB.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
-         return null
-       }
-       if ("lite" !== BB.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
-       if (! function(BB) {
-           return "strict" === BB || "allow" === BB
-         }(DB)) throw new Error(`Unknown shaderPackMode "${DB}" - use strict or allow`);
-       const QB = (null !== (GB = BB.get("variants")) && void 0 !== GB ? GB : "").split(",").find((BB => BB.trim().startsWith("liteShaderPack")));
-       if (void 0 !== QB) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${QB.trim()}`);
-       return {
-         url: YB,
-         mode: DB
- ... (1 more removed lines; see GitHub link above)
+       var iW = new Error("Cannot find module '" + WW + "'");
+       throw iW.code = "MODULE_NOT_FOUND", iW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/614.js` (Changed code · before: `L28` → after: `L4287-L4296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6b91fd90365055629f51f3bc52c87f84ec5b06ee3e71d761294f588d2b8fd7e9R4287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6b91fd90365055629f51f3bc52c87f84ec5b06ee3e71d761294f588d2b8fd7e9) · [After (L4287-L4296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/614.js#L4287-L4296) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/614.js#L28)

```diff
-   }
+     iW.keys = () => [], iW.resolve = iW, iW.id = 53629, WW.exports = iW
+   },
+   53588: () => {},
+   53613: () => {},
+   53603: () => {},
+   53631: () => {},
+   53609: () => {},
+   53605: () => {},
+   53601: () => {},
+   53622: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/615.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/615.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/615.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/615.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/615.js#L4)

```diff
-   44909: (BB, OB, GB) => {
+   53577: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/615.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/615.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/615.js#L6)

```diff
-       c: () => JB
+       e: () => mW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/615.js` (Changed code · before: `L8-L145` → after: `L8-L6410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985a) · [After (L8-L6410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/615.js#L8-L6410) · [Before (L8-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/615.js#L8-L145)

```diff
-     var YB = GB(37778),
-       DB = GB(37807),
-       QB = GB(40985),
-       oB = GB(37782),
-       jB = GB(37894);
-     class yB {
-       constructor(BB, OB, GB, YB) {
-         this.name = BB, this.worldAxisForNormal = OB, this.worldAxisForFileX = GB, this.worldAxisForFileY = YB
-       }
-     }
-     class JB {
-       static _NearestPow2Floor(BB) {
-         return BB <= 1 ? 1 : 1 << Math.floor(Math.log2(BB))
-       }
-       static ConvertCubeMapTextureToSphericalPolynomial(BB) {
-         if (!BB.isCube) return null;
- ... (122 more removed lines; see GitHub link above)
+     const mW = String.raw`interface Map<K, V> {
+     clear(): void;
+     /**
+      * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
+      */
+     delete(key: K): boolean;
+     /**
+      * Executes a provided function once per each key/value pair in the Map, in insertion order.
+      */
+     forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
+     /**
+      * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
+      * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
+      */
+     get(key: K): V | undefined;
+     /**
+ ... (6387 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/615.js` (Changed code · before: `L147` → after: `L6412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985aR6412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985a) · [After (L6412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/615.js#L6412) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/615.js#L147)

```diff
-   44902: (BB, OB, GB) => {
+   53569: (WW, iW, OW) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/615.js` (Changed code · before: `L149` → after: `L6414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985aR6414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985a) · [After (L6414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/615.js#L6414) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/615.js#L149)

```diff
-       DDSTools: () => pB
+       e: () => mW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/615.js` (Changed code · before: `L151-L429` → after: `L6416-L7363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985aR6416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1dce46ac5c959138d4fe989ad5919b21fe9f5e6b728e0808dad47d8010e5985a) · [After (L6416-L7363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/615.js#L6416-L7363) · [Before (L151-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/615.js#L151-L429)

```diff
-     var YB = GB(37807),
-       DB = GB(39366),
-       QB = GB(44909),
-       oB = GB(41071);
-     const jB = 131072,
-       yB = 131072;
- 
-     function JB(BB) {
-       return BB.charCodeAt(0) + (BB.charCodeAt(1) << 8) + (BB.charCodeAt(2) << 16) + (BB.charCodeAt(3) << 24)
-     }
-     const MB = JB("DXT1"),
-       PB = JB("DXT3"),
-       zB = JB("DXT5"),
-       lB = JB("DX10");
-     class pB {
-       static GetDDSInfo(BB) {
- ... (263 more removed lines; see GitHub link above)
+     const mW = String.raw`import type {
+ 	GameApi,
+ 	Console,
+ 	EntityId,
+ 	Pos,
+ 	LifeformId,
+ 	PlayerId,
+ 	PlayerDbId,
+ 	LifeformBodyPart,
+ 	PlayerAttemptDamageOtherPlayerOpts,
+ 	HittingSoundOverride,
+ 	DamageCause,
+ 	ItemName,
+ 	EnchantmentAttributes,
+ 	EnchantmentPerk,
+ 	EnchantmentTier,
+ ... (932 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/616.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/616.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/616.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12dR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12d) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/616.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/616.js#L2)

```diff
- export const ids = [615, 616];
+ export const ids = [616];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/616.js` (Changed code · before: `L4-L6` → after: `L4-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12d) · [After (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/616.js#L4-L16) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/616.js#L4-L6)

```diff
-   44913: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       _DDSTextureLoader: () => QB
+   53583: (WW, iW, OW) => {
+     function mW() {
+       return mW = Object.assign ? Object.assign.bind() : function(WW) {
+         for (var iW = 1; iW < arguments.length; iW++) {
+           var OW = arguments[iW];
+           for (var mW in OW)({}).hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
+         }
+         return WW
+       }, mW.apply(null, arguments)
+     }
+     OW.d(iW, {
+       b: () => xW,
+       d: () => LW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/616.js` (Changed code · before: `L8-L24` → after: `L18-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12dR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12d) · [After (L18-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/616.js#L18-L218) · [Before (L8-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/616.js#L8-L24)

```diff
-     var YB = GB(40985),
-       DB = GB(44902);
-     class QB {
-       constructor() {
-         this.supportCascades = !0
-       }
-       loadCubeData(BB, OB, GB, QB) {
-         const oB = OB.Lp();
-         let jB, yB = !1,
-           JB = 1e3;
-         if (Array.isArray(BB))
-           for (let YB = 0; YB < BB.length; YB++) {
-             const GB = BB[YB];
-             jB = DB.DDSTools.GetDDSInfo(GB), OB.width = jB.width, OB.height = jB.height, yB = (jB.isRGB || jB.isLuminance || jB.mipmapCount > 1) && OB.generateMipMaps, oB._unpackFlipY(jB.isCompressed), DB.DDSTools.UploadDDSLevels(oB, OB, GB, jB, yB, 6, -1, YB), jB.isFourCC || 1 ! … [truncated]
-           } else {
-             const QB = BB;
- ... (1 more removed lines; see GitHub link above)
+     var EW = !1;
+     try {
+       EW = "undefined" !== typeof localStorage
+     } catch (AW) {}
+     var NW = "undefined" !== typeof process,
+       PW = EW && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || NW && {
+         NODE_ENV: "production",
+         PUBLIC_URL: "",
+         WDS_SOCKET_HOST: void 0,
+         WDS_SOCKET_PATH: void 0,
+         WDS_SOCKET_PORT: void 0,
+         FAST_REFRESH: !0,
+         REACT_APP_DEV_URLS: "false"
+       }.DEBUG ? console.log : function(WW) {
+         return ""
+       };
+ ... (185 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/616.js` (Changed code · before: `L26-L468` → after: `L220-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12dR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fcba3e8dae3a37c6056f19cd3f3117148e00a3e3378f99a65c6885738523f12d) · [After (L220-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/616.js#L220-L230) · [Before (L26-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/616.js#L26-L468)

```diff
-         oB._setCubeMapTextureParams(OB, yB, JB), OB.isReady = !0, OB.onLoadedObservable.notifyObservers(OB), OB.onLoadedObservable.clear(), QB && QB({
-           isDDS: !0,
-           width: OB.width,
-           info: jB,
-           data: BB,
-           texture: OB
-         })
-       }
-       loadData(BB, OB, GB) {
-         const YB = DB.DDSTools.GetDDSInfo(BB),
-           QB = (YB.isRGB || YB.isLuminance || YB.mipmapCount > 1) && OB.generateMipMaps && Math.max(YB.width, YB.height) >> YB.mipmapCount - 1 === 1;
-         GB(YB.width, YB.height, QB, YB.isFourCC, (() => {
-           DB.DDSTools.UploadDDSLevels(OB.Lp(), OB, BB, YB, QB, 1)
-         }))
-       }
-     }
- ... (427 more removed lines; see GitHub link above)
+         }),
+         updateFile: function(iW) {
+           var OW = EW.has(iW.fileName);
+           return WW.writeFile(iW.fileName, iW.text), EW.set(iW.fileName, iW), OW
+         },
+         deleteFile: function(iW) {
+           var OW = EW.has(iW.fileName);
+           return EW.delete(iW.fileName), WW.deleteFile(iW.fileName), OW
+         }
+       }
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/617.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/617.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56)

#### 1. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L4-L80` → after: `L4-L2300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L4-L2300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/617.js#L4-L2300) · [Before (L4-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/617.js#L4-L80)

```diff
-   44924: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       _ENVTextureLoader: () => fB
-     });
-     var YB = GB(40932),
-       DB = GB(37778),
-       QB = GB(37807),
-       oB = GB(40985),
-       jB = GB(40837),
-       yB = GB(40992),
-       JB = (GB(41091), GB(44931)),
-       MB = GB(39366),
-       PB = (GB(44941), GB(44969), GB(41067));
-     const zB = "image/png",
-       lB = [134, 22, 135, 150, 246, 214, 150, 54];
- 
- ... (61 more removed lines; see GitHub link above)
+   53597: (WW, iW, OW) => {
+     var mW = "/index.js",
+       EW = {};
+     (WW => {
+       var iW = Object.defineProperty,
+         EW = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (WW, OW) => {
+           for (var mW in OW) iW(WW, mW, {
+             get: OW[mW],
+             enumerable: !0
+           })
+         }),
+         NW = {};
+       EW(NW, {
+         ANONYMOUS: () => r2,
+         AccessFlags: () => wN,
+         AssertionLevel: () => KO,
+ ... (2281 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L82-L85` → after: `L2302-L2304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L2302-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/617.js#L2302-L2304) · [Before (L82-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/617.js#L82-L85)

```diff
-       return Promise.all(QB)
-     }
-     async function WB(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB) {
-       return await new Promise(((PB, zB) => {
+ 
+       function jW(WW, iW, OW) {
+         let mW = OW;
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L87-L98` → after: `L2306-L2335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R2306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L2306-L2335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/617.js#L2306-L2335) · [Before (L87-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/617.js#L87-L98)

```diff
-           const GB = OB.createTexture(null, !0, !0, null, 1, null, (BB => {
-             zB(BB)
-           }), BB);
-           YB?.onEffectCreatedObservable.addOnce((jB => {
-             jB.executeWhenCompiled((() => {
-               YB.externalTextureSamplerBinding = !0, YB.onApply = YB => {
-                 YB._bindTexture("textureSampler", GB), YB.setFloat2("scale", 1, OB._features.needsInvertingBitmap && BB instanceof ImageBitmap ? -1 : 1)
-               }, OB.scenes.length && (OB.scenes[0].postProcessManager.directRender([YB], JB, !0, QB, oB), OB.restoreDefaultFramebuffer(), GB.dispose(), URL.revokeObjectURL(DB), PB())
-             }))
-           }))
-         } else {
-           if (OB._uploadImageToTexture(MB, BB, QB, oB), jB) {
+           let OW = 0;
+           for (const EW of WW) mW = iW(mW, EW, OW), OW++
+         }
+         return mW
+       }
+ 
+       function UW(WW, iW, OW) {
+         const mW = [];
+         sm.assertEqual(WW.length, iW.length);
+         for (let EW = 0; EW < WW.length; EW++) mW.push(OW(WW[EW], iW[EW], EW));
+         return mW
+       }
+ 
+       function kW(WW, iW) {
+         if (WW.length <= 1) return WW;
+         const OW = [];
+ ... (14 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L100` → after: `L2337-L2397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R2337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L2337-L2397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/617.js#L2337-L2397) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/617.js#L100)

```diff
-             GB && OB._uploadImageToTexture(GB._texture, BB, QB, 0)
+             if (iW(OW, mW)) return OW
+           }
+       }
+ 
+       function KW(WW, iW, OW) {
+         if (void 0 !== WW)
+           for (let mW = OW ?? WW.length - 1; mW >= 0; mW--) {
+             const OW = WW[mW];
+             if (iW(OW, mW)) return OW
+           }
+       }
+ 
+       function SW(WW, iW, OW) {
+         if (void 0 === WW) return -1;
+         for (let mW = OW ?? 0; mW < WW.length; mW++)
+           if (iW(WW[mW], mW)) return mW;
+ ... (45 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L104-L160` → after: `L2400-L2435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R2400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L2400-L2435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/617.js#L2400-L2435) · [Before (L104-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/617.js#L104-L160)

```diff
-       }))
-     }
-     async function AB(BB, OB) {
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zB;
-       const YB = BB.Lp();
-       BB.format = 5, BB.type = 0, BB.generateMipMaps = !0, BB._cachedAnisotropicFilteringLevel = null, YB.updateTextureSamplingMode(3, BB), await SB(BB, OB, !0, GB), BB.isReady = !0
-     }
-     async function VB(BB, OB, GB) {
-       let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zB,
-         DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-       const QB = BB.Lp(),
-         oB = new jB.b(QB, 5),
-         JB = new yB.d(QB, oB);
-       BB._irradianceTexture = JB, JB._dominantDirection = DB, oB.isCube = !0, oB.format = 5, oB.type = 0, oB.generateMipMaps = !0, oB._cachedAnisotropicFilteringLevel = null, oB.generateMipMaps = !0, oB.width = GB, oB.height = GB, QB.updateTextureSamplingMode(3, oB), await SB(oB, … [truncated]
-     }
-     async function SB(BB, OB, DB) {
- ... (41 more removed lines; see GitHub link above)
+         return WW
+       }
+ 
+       function HW(WW, iW) {
+         let OW = 0;
+         for (let mW = 0; mW < WW.length; mW++) iW(WW[mW], mW, WW) && (WW[OW] = WW[mW], OW++);
+         WW.length = OW
+       }
+ 
+       function nW(WW) {
+         WW.length = 0
+       }
+ 
+       function uW(WW, iW) {
+         let OW;
+         if (void 0 !== WW) {
+ ... (20 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L164-L188` → after: `L2448-L2482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R2448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L2448-L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/617.js#L2448-L2482) · [Before (L164-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/617.js#L164-L188)

```diff
-       const SB = [];
-       for (let GB = 0; GB < OB.length; GB++)
-         for (let YB = 0; YB < 6; YB++) {
-           const DB = OB[GB][YB],
-             QB = (0, PB.o)(DB),
-             jB = new Blob([QB], {
-               type: oB
-             }),
-             yB = URL.createObjectURL(jB);
-           let JB;
-           if (lB._features.forceBitmapOverHTMLImageElement) JB = lB.createImageBitmap(jB, {
-             premultiplyAlpha: "none",
-             colorSpaceConversion: "none"
-           }).then((async OB => await WB(OB, lB, pB, ZB, yB, YB, GB, qB, RB, NB, BB)));
-           else {
-             const OB = new Image;
- ... (9 more removed lines; see GitHub link above)
+ 
+       function vW(WW, iW) {
+         let OW;
+         if (void 0 !== WW)
+           for (let mW = 0; mW < WW.length; mW++) {
+             const EW = iW(WW[mW], mW);
+             EW && (OW = EO(EW) ? ti(OW, EW) : Li(OW, EW))
+           }
+         return OW ?? wW
+       }
+ 
+       function gW(WW, iW) {
+         const OW = [];
+         if (void 0 !== WW)
+           for (let mW = 0; mW < WW.length; mW++) {
+             const EW = iW(WW[mW], mW);
+ ... (19 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L192` → after: `L2494-L2528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R2494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L2494-L2528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/617.js#L2494-L2528) · [Before (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/617.js#L192)

```diff
-       if (await Promise.all(SB), OB.length < MB) {
+         return OW
+       }
+ 
+       function fW(WW, iW) {
+         const OW = [];
+         if (void 0 !== WW)
+           for (let mW = 0; mW < WW.length; mW++) {
+             const EW = iW(WW[mW], mW);
+             void 0 !== EW && OW.push(EW)
+           }
+         return OW
+       }
+ 
+       function* CW(WW, iW) {
+         for (const OW of WW) {
+           const WW = iW(OW);
+ ... (19 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L194-L204` → after: `L2530-L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R2530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L2530-L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/617.js#L2530-L2564) · [Before (L194-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/617.js#L194-L204)

```diff
-         const YB = Math.pow(2, MB - 1 - OB.length),
-           DB = YB * YB * 4;
-         switch (BB.type) {
-           case 0:
-             GB = new Uint8Array(DB);
-             break;
-           case 2:
-             GB = new Uint16Array(DB);
-             break;
-           case 1:
-             GB = new Float32Array(DB)
+         if (void 0 !== WW) {
+           mW = [];
+           const EW = WW.length;
+           let NW, PW, LW = 0,
+             cW = 0;
+           for (; LW < EW;) {
+             for (; cW < EW;) {
+               if (PW = iW(WW[cW], cW), 0 === cW) NW = PW;
+               else if (PW !== NW) break;
+               cW++
+             }
+             if (LW < cW) {
+               const iW = OW(WW.slice(LW, cW), NW, LW, cW);
+               iW && mW.push(iW), LW = cW
+             }
+             NW = PW, cW++
+ ... (19 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L206-L207` → after: `L2566-L2576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R2566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L2566-L2576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/617.js#L2566-L2576) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/617.js#L206-L207)

```diff
-         for (let QB = OB.length; QB < MB; QB++)
-           for (let OB = 0; OB < 6; OB++) lB._uploadArrayBufferViewToTexture(NB?.texture || BB, GB, OB, QB)
+         return !1
+       }
+ 
+       function aW(WW, iW, OW) {
+         let mW;
+         for (let EW = 0; EW < WW.length; EW++) iW(WW[EW]) ? mW = void 0 === mW ? EW : mW : void 0 !== mW && (OW(mW, EW), mW = void 0);
+         void 0 !== mW && OW(mW, WW.length)
+       }
+ 
+       function rW(WW, iW) {
+         return void 0 === iW || 0 === iW.length ? WW : void 0 === WW || 0 === WW.length ? iW : [...WW, ...iW]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L209-L211` → after: `L2578-L2580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R2578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L2578-L2580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/617.js#L2578-L2580) · [Before (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/617.js#L209-L211)

```diff
-       if (NB) {
-         const OB = BB._irradianceTexture;
-         BB._irradianceTexture = null, lB._releaseTexture(BB), NB._swapAndDie(BB), BB._irradianceTexture = OB
+ 
+       function zW(WW, iW) {
+         return iW
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L216-L225` → after: `L2583-L2584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R2583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L2583-L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/617.js#L2583-L2584) · [Before (L216-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/617.js#L216-L225)

```diff
-     function nB(BB, OB) {
-       const GB = (OB = qB(OB)).irradiance;
-       if (!GB) return;
-       const YB = new oB.f;
-       DB.r.FromArrayToRef(GB.x, 0, YB.x), DB.r.FromArrayToRef(GB.y, 0, YB.y), DB.r.FromArrayToRef(GB.z, 0, YB.z), DB.r.FromArrayToRef(GB.xx, 0, YB.xx), DB.r.FromArrayToRef(GB.yy, 0, YB.yy), DB.r.FromArrayToRef(GB.zz, 0, YB.zz), DB.r.FromArrayToRef(GB.yz, 0, YB.yz), DB.r.FromArray … [truncated]
-     }
-     var UB = GB(44978);
-     class fB {
-       constructor() {
-         this.supportCascades = !1
+       function FW(WW) {
+         return WW.map(zW)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L227-L228` → after: `L2586-L2587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R2586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L2586-L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/617.js#L2586-L2587) · [Before (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/617.js#L227-L228)

```diff
-       loadCubeData(BB, OB, GB, YB, DB) {
-         if (Array.isArray(BB)) return;
+ 
+       function QW(WW, iW, OW) {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L230-L334` → after: `L2589-L2607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R2589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L2589-L2607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/617.js#L2589-L2607) · [Before (L230-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/617.js#L230-L334)

```diff
-         if (QB) {
-           OB.width = QB.width, OB.height = QB.width;
-           try {
-             (0, UB.c)(), nB(OB, QB), RB(OB, BB, QB).then((() => {
-               OB.isReady = !0, OB.onLoadedObservable.notifyObservers(OB), OB.onLoadedObservable.clear(), YB && YB()
-             }), (BB => {
-               DB?.("Can not upload environment levels", BB)
-             }))
-           } catch (oB) {
-             DB?.("Can not upload environment file", oB)
-           }
-         } else DB && DB("Can not parse the environment file", null)
-       }
-       loadData() {
-         throw ".env not supported in 2d."
-       }
- ... (89 more removed lines; see GitHub link above)
+         ! function(WW, iW, OW) {
+           iW.sort(((iW, mW) => OW(WW[iW], WW[mW]) || JO(iW, mW)))
+         }(WW, mW, OW);
+         let EW = WW[mW[0]];
+         const NW = [mW[0]];
+         for (let PW = 1; PW < mW.length; PW++) {
+           const OW = mW[PW],
+             LW = WW[OW];
+           iW(EW, LW) || (NW.push(OW), EW = LW)
+         }
+         return NW.sort(), NW.map((iW => WW[iW]))
+       }
+ 
+       function Wi(WW, iW, OW) {
+         return 0 === WW.length ? [] : 1 === WW.length ? WW.slice() : OW ? QW(WW, iW, OW) : function(WW, iW) {
+           const OW = [];
+ ... (3 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L336-L337` → after: `L2609-L2611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R2609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L2609-L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/617.js#L2609-L2611) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/617.js#L336-L337)

```diff
-       static _AreaElement(BB, OB) {
-         return Math.atan2(BB * OB, Math.sqrt(BB * BB + OB * OB + 1))
+ 
+       function ii() {
+         return []
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L339-L356` → after: `L2613-L2640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R2613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L2613-L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/617.js#L2613-L2640) · [Before (L339-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/617.js#L339-L356)

```diff
-       static _DownsampleFace(BB, OB, GB, YB) {
-         const DB = BB instanceof Float32Array ? BB : Float32Array.from(BB),
-           QB = GB * GB * YB,
-           oB = new Float32Array(QB),
-           jB = OB / GB,
-           yB = 1 / (jB * jB);
-         for (let MB = 0; MB < GB; MB++) {
-           const BB = Math.floor(MB * jB),
-             QB = Math.floor((MB + 1) * jB);
-           for (let JB = 0; JB < GB; JB++) {
-             const PB = Math.floor(JB * jB),
-               zB = Math.floor((JB + 1) * jB),
-               lB = (MB * GB + JB) * YB;
-             for (let GB = 0; GB < YB; GB++) {
-               let jB = 0;
-               for (let oB = BB; oB < QB; oB++)
- ... (2 more removed lines; see GitHub link above)
+ 
+       function Oi(WW, iW, OW, mW, EW) {
+         if (0 === WW.length) return WW.push(iW), !0;
+         const NW = Hi(WW, iW, AO, OW);
+         if (NW < 0) {
+           if (mW && !EW) {
+             const OW = ~NW;
+             if (OW > 0 && mW(iW, WW[OW - 1])) return !1;
+             if (OW < WW.length && mW(iW, WW[OW])) return WW.splice(OW, 1, iW), !0
+           }
+           return WW.splice(~NW, 0, iW), !0
+         }
+         return !!EW && (WW.splice(NW, 0, iW), !0)
+       }
+ 
+       function mi(WW, iW, OW) {
+ ... (12 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L365-L376` → after: `L2684-L2792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R2684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L2684-L2792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/617.js#L2684-L2792) · [Before (L365-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/617.js#L365-L376)

```diff
-       static ConvertCubeMapToSphericalPolynomial(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const GB = OB > 0 ? this._NearestPow2Floor(OB) : 0;
-         if (GB > 0 && BB.size > GB) {
-           const OB = 5 === BB.format ? 4 : 3,
-             YB = ["right", "left", "up", "down", "front", "back"],
-             DB = {};
-           for (const QB of YB) DB[QB] = this._DownsampleFace(BB[QB], BB.size, GB, OB);
-           BB = {
-             ...BB,
-             ...DB,
-             size: GB
+ 
+       function Li(WW, iW) {
+         return void 0 === iW ? WW : void 0 === WW ? [iW] : (WW.push(iW), WW)
+       }
+ 
+       function ci(WW, iW) {
+         return void 0 === WW ? iW : void 0 === iW ? WW : EO(WW) ? EO(iW) ? rW(WW, iW) : Li(WW, iW) : EO(iW) ? Li(iW, WW) : [WW, iW]
+       }
+ 
+       function wi(WW, iW) {
+         return iW < 0 ? WW.length + iW : iW
+       }
+ 
+       function ti(WW, iW, OW, mW) {
+         if (void 0 === iW || 0 === iW.length) return WW;
+         if (void 0 === WW) return iW.slice(OW, mW);
+ ... (93 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L379-L457` → after: `L2795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R2795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L2795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/617.js#L2795) · [Before (L379-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/617.js#L379-L457)

```diff
-         const YB = new QB.c;
-         let yB = 0;
-         const JB = 2 / BB.size,
-           MB = JB,
-           PB = .5 * JB,
-           zB = PB - 1;
-         for (let QB = 0; QB < 6; QB++) {
-           const OB = this._FileFaces[QB],
-             GB = BB[OB.name];
-           let lB = zB;
-           const pB = 5 === BB.format ? 4 : 3;
-           for (let QB = 0; QB < BB.size; QB++) {
-             let qB = zB;
-             for (let MB = 0; MB < BB.size; MB++) {
-               const zB = OB.worldAxisForFileX.scale(qB).add(OB.worldAxisForFileY.scale(lB)).add(OB.worldAxisForNormal);
-               zB.normalize();
- ... (63 more removed lines; see GitHub link above)
+         return ~NW
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L459-L461` → after: `L2797-L125584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R2797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L2797-L125584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/617.js#L2797-L125584) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/617.js#L459-L461)

```diff
-       static async EncodeTextureToRGBD(BB, OB) {
-         let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         return OB.Lp().isWebGPU ? await GB.e(652).then((() => GB(64017))) : await GB.e(634).then((() => GB(64015))), await (0, DB.d)("rgbdEncode", BB, OB, YB, 1, 5)
+ 
+       function ui(WW, iW, OW, mW, EW) {
+         if (WW && WW.length > 0) {
+           const NW = WW.length;
+           if (NW > 0) {
+             let PW = void 0 === mW || mW < 0 ? 0 : mW;
+             const LW = void 0 === EW || PW + EW > NW - 1 ? NW - 1 : PW + EW;
+             let cW;
+             for (arguments.length <= 2 ? (cW = WW[PW], PW++) : cW = OW; PW <= LW;) cW = iW(cW, WW[PW], PW), PW++;
+             return cW
+           }
+         }
+         return OW
+       }
+       var oi = Object.prototype.hasOwnProperty;
+ 
+ ... (122772 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L463` → after: `L125586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R125586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L125586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/617.js#L125586) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/617.js#L463)

```diff
-     }
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/618.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/618.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67)

#### 1. `bundles/preprod.bloxd.io/chunks/js/618.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/618.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/618.js#L4-L6)

```diff
-   44911: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       _IESTextureLoader: () => jB
+   53663: (WW, iW, OW) => {
+     OW.d(iW, {
+       collectImportedWorldCodePluginNames: () => wW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/618.js` (Changed code · before: `L8` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/618.js#L8-L11) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/618.js#L8)

```diff
-     var YB = GB(37807);
+     var mW = OW(3327),
+       EW = OW(38010),
+       NW = OW(53597),
+       PW = OW.n(NW);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/618.js` (Changed code · before: `L11` → after: `L14-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67) · [After (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/618.js#L14-L22) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/618.js#L11)

```diff
-       return BB.split(" ").filter((BB => "" !== BB)).map((BB => parseFloat(BB)))
+       return PW().isImportDeclaration(WW) && PW().isStringLiteral(WW.moduleSpecifier) && function(WW) {
+         const iW = WW.importClause;
+         if (!iW) return !0;
+         if (iW.isTypeOnly) return !1;
+         const OW = iW.namedBindings;
+         return !(OW && !PW().isNamespaceImport(OW)) || !!iW.name || OW.elements.some((WW => !WW.isTypeOnly))
+       }(WW) || PW().isExportDeclaration(WW) && WW.moduleSpecifier && PW().isStringLiteral(WW.moduleSpecifier) && function(WW) {
+         return !WW.isTypeOnly && (!WW.exportClause || !PW().isNamedExports(WW.exportClause) || 0 === WW.exportClause.elements.length || WW.exportClause.elements.some((WW => !WW.isTypeOnly)))
+       }(WW) ? WW.moduleSpecifier.text : PW().isImportEqualsDeclaration(WW) && !WW.isTypeOnly && PW().isExternalModuleReference(WW.moduleReference) && WW.moduleReference.expression && PW().isStringLiteral(WW.moduleReference.expression) ? WW.moduleReference.expression.text : PW().i … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/618.js` (Changed code · before: `L15-L18` → after: `L26-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67) · [After (L26-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/618.js#L26-L37) · [Before (L15-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/618.js#L15-L18)

```diff
-       for (; GB.length !== OB;) {
-         const OB = DB(BB.lines[BB.index++]);
-         GB.push(...OB)
-       }
+       if (!iW.startsWith("./") && !iW.startsWith("../")) return;
+       const EW = ((WW.includes("/") ? WW.slice(0, WW.lastIndexOf("/") + 1) : "") + iW).split("/"),
+         NW = [];
+       for (const mW of EW)
+         if ("" !== mW && "." !== mW)
+           if (".." !== mW) NW.push(mW);
+           else {
+             if (0 === NW.length) return;
+             NW.pop()
+           } const PW = NW.join("/");
+       for (const LW of [PW, `${PW}.ts`, `${PW}.js`])
+         if (LW in OW && !(0, mW.i)(LW)) return LW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/618.js` (Changed code · before: `L21-L44` → after: `L40-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67) · [After (L40-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/618.js#L40-L63) · [Before (L21-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/618.js#L21-L44)

```diff
-     function oB(BB, OB, GB) {
-       let DB = 0,
-         QB = 0,
-         oB = 0,
-         jB = 0,
-         yB = 0,
-         JB = 0;
-       for (let YB = 0; YB < BB.numberOfHorizontalAngles - 1; YB++)
-         if (GB < BB.horizontalAngles[YB + 1] || YB === BB.numberOfHorizontalAngles - 2) {
-           QB = YB, oB = BB.horizontalAngles[YB], jB = BB.horizontalAngles[YB + 1];
-           break
-         } for (let YB = 0; YB < BB.numberOfVerticalAngles - 1; YB++)
-         if (OB < BB.verticalAngles[YB + 1] || YB === BB.numberOfVerticalAngles - 2) {
-           DB = YB, yB = BB.verticalAngles[YB], JB = BB.verticalAngles[YB + 1];
-           break
-         } const MB = jB - oB,
- ... (8 more removed lines; see GitHub link above)
+     function wW(WW) {
+       const iW = new Set,
+         OW = (0, EW.d)(WW);
+       if (!OW) return [];
+       const mW = [OW],
+         NW = new Set;
+       for (; mW.length > 0;) {
+         const OW = mW.pop();
+         if (!OW || NW.has(OW)) continue;
+         NW.add(OW);
+         const wW = PW().createSourceFile(OW, WW[OW], PW().ScriptTarget.Latest, !1),
+           tW = wW => {
+             const ZW = LW(wW),
+               xW = ZW ? (0, EW.r)(ZW) : null;
+             if (xW) iW.add(xW);
+             else if (ZW) {
+ ... (8 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/618.js` (Changed code · before: `L46-L100` → after: `L65-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67) · [After (L65-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/618.js#L65-L69) · [Before (L46-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/618.js#L46-L100)

```diff
-     class jB {
-       constructor() {
-         this.supportCascades = !1
-       }
-       loadCubeData() {
-         throw ".ies not supported in Cube."
-       }
-       loadData(BB, OB, GB) {
-         const YB = function(BB) {
-           const OB = {
-               lines: new TextDecoder("utf-8").decode(BB).split("\n"),
-               index: 0
-             },
-             GB = {
-               version: OB.lines[0],
-               candelaValues: [],
- ... (39 more removed lines; see GitHub link above)
+   },
+   53629: WW => {
+     function iW(WW) {
+       var iW = new Error("Cannot find module '" + WW + "'");
+       throw iW.code = "MODULE_NOT_FOUND", iW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/618.js` (Changed code · before: `L102` → after: `L71-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67) · [After (L71-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/618.js#L71-L79) · [Before (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/618.js#L102)

```diff
-   }
+     iW.keys = () => [], iW.resolve = iW, iW.id = 53629, WW.exports = iW
+   },
+   53613: () => {},
+   53603: () => {},
+   53631: () => {},
+   53609: () => {},
+   53605: () => {},
+   53601: () => {},
+   53622: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/619.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/619.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/619.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/619.js#L4)

```diff
-   44917: (BB, OB, GB) => {
+   53646: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/619.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/619.js#L6)

```diff
-       _BasisTextureLoader: () => RB
+       default: () => SW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L8-L11` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/619.js#L8-L18) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/619.js#L8-L11)

```diff
-     var YB, DB = GB(41097),
-       QB = GB(39366),
-       oB = GB(41470),
-       jB = GB(40837);
+     var mW = OW(62),
+       EW = OW(5488),
+       NW = OW(1782),
+       PW = OW(1089),
+       LW = OW.n(PW),
+       cW = OW(1532),
+       wW = OW(1172),
+       tW = OW(5460),
+       ZW = OW(5467),
+       xW = OW(5470),
+       lW = OW(1283);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L13-L23` → after: `L20-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/619.js#L20-L23) · [Before (L13-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/619.js#L13-L23)

```diff
-     function yB() {
-       const BB = 0,
-         OB = 1,
-         GB = 2,
-         YB = 3,
-         DB = 6,
-         QB = 8,
-         oB = 9,
-         jB = 10,
-         yB = 14;
-       let JB = null;
+     function AW(WW) {
+       return WW.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
+     }
+     tW.c.registerLanguage("javascript", ZW.e), tW.c.registerLanguage("typescript", xW.b);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L25-L42` → after: `L25-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L25-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/619.js#L25-L154) · [Before (L25-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/619.js#L25-L42)

```diff
-       function MB(BB, OB, GB, YB, DB) {
-         const QB = BB.getImageTranscodedSizeInBytes(OB, GB, YB);
-         let oB = new Uint8Array(QB);
-         if (!BB.transcodeImage(oB, OB, GB, YB, 1, 0)) return null;
-         if (DB) {
-           oB = function(BB, OB, GB, YB) {
-             const DB = new Uint16Array(4),
-               QB = new Uint16Array(GB * YB),
-               oB = GB / 4,
-               jB = YB / 4;
-             for (let yB = 0; yB < jB; yB++)
-               for (let YB = 0; YB < oB; YB++) {
-                 const jB = OB + 8 * (yB * oB + YB);
-                 DB[0] = BB[jB] | BB[jB + 1] << 8, DB[1] = BB[jB + 2] | BB[jB + 3] << 8, DB[2] = (2 * (31 & DB[0]) + 1 * (31 & DB[1])) / 3 | (2 * (2016 & DB[0]) + 1 * (2016 & DB[1])) / 3 & 2016 | (2 * (63488 & DB[0]) + 1 * (63488 & DB[1])) / 3 & 63488, DB[3] = (2 * (31 & DB[1]) +  … [truncated]
-                 for (let OB = 0; OB < 4; OB++) {
-                   const oB = BB[jB + 4 + OB];
- ... (2 more removed lines; see GitHub link above)
+     function bW(WW, iW) {
+       const OW = AW(WW).replace(/"/g, "&quot;");
+       return `<button type="button" class="DocsCopyButton ${iW}" title="${OW}" aria-label="${OW}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" vi … [truncated]
+     }
+ 
+     function jW(WW, iW) {
+       const OW = [],
+         mW = WW.toLowerCase(),
+         EW = iW.toLowerCase();
+       let NW = 0;
+       for (; NW < WW.length;) {
+         const PW = mW.indexOf(EW, NW);
+         if (-1 === PW) {
+           OW.push(WW.slice(NW));
+           break
+         }
+ ... (114 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L46-L57` → after: `L170-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L170-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/619.js#L170-L230) · [Before (L46-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/619.js#L46-L57)

```diff
-           }(oB, 0, BB.getImageWidth(OB, GB) + 3 & -4, BB.getImageHeight(OB, GB) + 3 & -4)
-         }
-         return oB
-       }
-       onmessage = PB => {
-         if ("init" === PB.data.action) {
-           if (PB.data.url) try {
-             importScripts(PB.data.url)
-           } catch (zB) {
-             postMessage({
-               action: "error",
-               error: zB
+           }(zW.id, zW.content, QW, aW ? oW : void 0) : ""), [zW, QW, aW, oW]);
+         (0, mW.useEffect)((() => {
+           const WW = uW.current;
+           if (!WW) return;
+           const iW = WW => {
+             var iW, OW, mW, EW, NW;
+             const PW = null === (iW = (OW = WW.target).closest) || void 0 === iW ? void 0 : iW.call(OW, ".DocsCopyButton");
+             if (!PW) return;
+             WW.preventDefault(), WW.stopPropagation();
+             const LW = null !== (mW = null === (EW = PW.parentElement) || void 0 === EW || null === (NW = EW.querySelector("code")) || void 0 === NW ? void 0 : NW.textContent) && void 0 !== mW ? mW : "";
+             navigator.clipboard.writeText(LW.trimEnd()).then((() => {
+               PW.classList.add("Copied"), setTimeout((() => {
+                 PW.classList.remove("Copied")
+               }), 1500)
+             })).catch((WW => {
+               console.warn("Could not copy documentation code", WW)
+ ... (45 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L60-L65` → after: `L257-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L257-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/619.js#L257-L277) · [Before (L60-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/619.js#L60-L65)

```diff
-           JB || (JB = BASIS({
-             wasmBinary: PB.data.wasmBinary
-           })), null !== JB && JB.then((BB => {
-             BASIS = BB, BB.initializeBasis(), postMessage({
-               action: "init"
-             })
+         }), [Pi, Li]);
+         const wi = (0, mW.useCallback)((WW => {
+           if (WW) {
+             const [iW, OW] = WW.slice(1).split("-");
+             OW && (BW.current = {
+               docId: iW,
+               subsection: OW
+             }), iW && Ei(iW)
+           }
+         }), [Ei]);
+         (0, mW.useEffect)((() => {
+           const WW = BW.current;
+           WW && hW === WW.docId && (setTimeout((() => {
+             Ni(WW.subsection)
+           }), 0), BW.current = null)
+         })), (0, mW.useEffect)((() => {
+ ... (5 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L67-L77` → after: `L279-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L279-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/619.js#L279-L312) · [Before (L67-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/619.js#L67-L77)

```diff
-         } else if ("transcode" === PB.data.action) {
-           const JB = PB.data.config,
-             zB = PB.data.imageData,
-             lB = new BASIS.BasisFile(zB),
-             pB = function(BB) {
-               const OB = BB.getHasAlpha(),
-                 GB = BB.getNumImages(),
-                 YB = [];
-               for (let DB = 0; DB < GB; DB++) {
-                 const OB = {
-                     levels: []
+         }), [hW, wi]);
+         const ti = Object.values(KW).find((WW => (null === WW || void 0 === WW ? void 0 : WW.pageStep) === qW));
+         return (0, lW.jsx)(sW.j, {
+           tutorial: "docsOverview",
+           step: null !== (SW = null === ti || void 0 === ti ? void 0 : ti.pageStep) && void 0 !== SW ? SW : "docsPanel",
+           text: FW(null !== (YW = null === ti || void 0 === ti ? void 0 : ti.pageText) && void 0 !== YW ? YW : "codeEditor:tutorialDocsPanel"),
+           enabled: JW,
+           placement: "left",
+           onPrevious: ti ? void 0 : TW,
+           children: (0, lW.jsxs)("div", {
+             className: "DocsPanel",
+             ref: nW,
+             children: [(0, lW.jsxs)("div", {
+               className: "DocsSidebar",
+               style: {
+                 width: fW,
+ ... (18 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L79-L85` → after: `L314-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L314-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/619.js#L314-L407) · [Before (L79-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/619.js#L79-L85)

```diff
-                   GB = BB.getNumLevels(DB);
-                 for (let YB = 0; YB < GB; YB++) {
-                   const GB = {
-                     width: BB.getImageWidth(DB, YB),
-                     height: BB.getImageHeight(DB, YB)
-                   };
-                   OB.levels.push(GB)
+                   children: [(0, lW.jsxs)("div", {
+                     className: "SearchResultTitle",
+                     children: [WW.doc.title, (0, lW.jsx)("span", {
+                       className: "SearchResultCount",
+                       children: WW.matchCount
+                     })]
+                   }), (0, lW.jsx)("div", {
+                     className: "SearchResultSnippet",
+                     children: jW(WW.snippet, oW)
+                   })]
+                 }, WW.doc.id))) : EW.b.map((WW => {
+                   const iW = (0, lW.jsxs)("div", {
+                       className: LW()("DocsNavItem", {
+                         Active: WW.id === (null === zW || void 0 === zW ? void 0 : zW.id)
+                       }),
+                       "data-pad-focusable": !0,
+ ... (78 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L87-L129` → after: `L409-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L409-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/619.js#L409-L410) · [Before (L87-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/619.js#L87-L129)

```diff
-                 YB.push(OB)
-               }
-               return {
-                 hasAlpha: OB,
-                 images: YB
-               }
-             }(lB);
-           let qB = PB.data.ignoreSupportedFormats ? null : function(JB, MB) {
-               let PB = null;
-               JB.supportedCompressionFormats && (PB = JB.supportedCompressionFormats.astc ? jB : JB.supportedCompressionFormats.bc7 ? DB : JB.supportedCompressionFormats.s3tc ? MB.hasAlpha ? YB : GB : JB.supportedCompressionFormats.pvrtc ? MB.hasAlpha ? oB : QB : JB.supportedComp … [truncated]
-               return PB
-             }(PB.data.config, pB),
-             ZB = !1;
-           null === qB && (ZB = !0, qB = pB.hasAlpha ? YB : GB);
-           let NB = !0;
-           lB.startTranscoding() || (NB = !1);
- ... (27 more removed lines; see GitHub link above)
+               })]
+             })]
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L131-L181` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/619.js#L412) · [Before (L131-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/619.js#L131-L181)

```diff
-         }
-       }
-     }! function(BB) {
-       BB[BB.cTFETC1 = 0] = "cTFETC1", BB[BB.cTFETC2 = 1] = "cTFETC2", BB[BB.cTFBC1 = 2] = "cTFBC1", BB[BB.cTFBC3 = 3] = "cTFBC3", BB[BB.cTFBC4 = 4] = "cTFBC4", BB[BB.cTFBC5 = 5] = "cTFBC5", BB[BB.cTFBC7 = 6] = "cTFBC7", BB[BB.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", BB[BB.cTFPVR … [truncated]
-     }(YB || (YB = {}));
-     const JB = {
-       JSModuleURL: `${DB.j._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
-       WasmModuleURL: `${DB.j._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
-     };
-     let MB = null,
-       PB = null,
-       zB = 0;
-     const lB = async () => (MB || (MB = new Promise(((BB, OB) => {
-       PB ? BB(PB) : DB.j.LoadFileAsync(DB.j.GetBabylonScriptURL(JB.WasmModuleURL)).then((GB => {
-         if ("function" !== typeof URL) return OB("Basis transcoder requires an environment with a URL constructor");
-         const YB = URL.createObjectURL(new Blob([`(${yB})()`], {
- ... (35 more removed lines; see GitHub link above)
+         })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/620.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/620.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac)

#### 1. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/620.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/620.js#L4)

```diff
-   44953: (BB, OB, GB) => {
+   53667: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/620.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/620.js#L6)

```diff
-       d: () => NB
+       ensureLocalBloxdTypes: () => UW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L8-L1057` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/620.js#L8-L17) · [Before (L8-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/620.js#L8-L1057)

```diff
-     var YB = GB(37802),
-       DB = GB(37778),
-       QB = GB(41470),
-       oB = GB(41155),
-       jB = GB(40932),
-       yB = GB(39366),
-       JB = GB(41136),
-       MB = GB(41171),
-       PB = GB(37785),
-       zB = GB(40899),
-       lB = GB(41112),
-       pB = GB(41211);
-     class qB {
-       get renderList() {
-         return this._renderList
-       }
- ... (1034 more removed lines; see GitHub link above)
+     var mW = OW(5506),
+       EW = OW(53577),
+       NW = OW(53569),
+       PW = OW(38001),
+       LW = OW(38010),
+       cW = OW(38018);
+     const wW = JSON.stringify({
+       name: "@bloxd",
+       types: "index.d.ts"
+     }, null, "\t") + "\n";
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L1059-L1063` → after: `L19-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/620.js#L19-L20) · [Before (L1059-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/620.js#L1059-L1063)

```diff
-     function NB(BB, OB, GB, YB) {
-       let DB = arguments.length > 5 ? arguments[5] : void 0;
-       void 0 !== DB || YB || (DB = ""), ZB(BB, OB, GB, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", DB, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.len … [truncated]
-         YB && YB(BB)
-       }))
+     function tW(WW) {
+       return WW.replace(/^\//, "")
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L1066-L1069` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/620.js#L23-L24) · [Before (L1066-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/620.js#L1066-L1069)

```diff
-     function RB() {
-       PB && (PB?.then((BB => {
-         BB.canvas instanceof HTMLCanvasElement && BB.canvas.remove(), BB.dumpEngine && (BB.dumpEngine.engine.dispose(), BB.dumpEngine.renderer.dispose(), BB.dumpEngine.wrapper.dispose())
-       })), PB = null)
+     function ZW(WW) {
+       return tW((0, LW.v)(WW.name, "")).replace(/\/$/, "")
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L1079-L1082` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/620.js#L27-L28) · [Before (L1079-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/620.js#L1079-L1082)

```diff
-     function VB() {
-       if (AB) return;
-       AB = !0;
-       QB.j.DumpData = NB, QB.j.DumpDataAsync = ZB, QB.j.DumpFramebuffer = qB
+     function xW(WW) {
+       return WW.typesVfsPath.slice(WW.typesVfsPath.lastIndexOf("/") + 1)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L1179-L1364` → after: `L31-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L31-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/620.js#L31-L42) · [Before (L1179-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/620.js#L1179-L1364)

```diff
-     function lB(BB, OB, GB, YB, DB, QB, jB, yB) {
-       const JB = OB.Lp();
-       return OB.isReady = !1, DB = DB ?? OB.samplingMode, YB = YB ?? OB.type, QB = QB ?? OB.format, jB = jB ?? OB.width, yB = yB ?? OB.height, -1 === YB && (YB = 0), new Promise((MB => {
-         const PB = new oB.b("postprocess", BB, null, null, 1, null, DB, JB, !1, void 0, YB, void 0, null, !1, QB);
-         PB.externalTextureSamplerBinding = !0;
-         const zB = JB.createRenderTargetTexture({
-           width: jB,
-           height: yB
-         }, {
-           generateDepthBuffer: !1,
-           generateMipMaps: !1,
-           generateStencilBuffer: !1,
-           samplingMode: DB,
-           type: YB,
-           format: QB
-         });
- ... (170 more removed lines; see GitHub link above)
+     function lW(WW) {
+       return JSON.stringify({
+         name: WW.specifier,
+         types: xW(WW)
+       }, null, "\t") + "\n"
+     }
+     async function AW(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
+       const OW = [];
+       for await (const [mW, EW] of WW.entries()) {
+         const WW = iW ? `${iW}/${mW}` : mW;
+         "directory" !== EW.kind ? OW.push(WW) : OW.push(...await AW(EW, WW))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L1368-L1976` → after: `L46-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L46-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/620.js#L46-L66) · [Before (L1368-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/620.js#L1368-L1976)

```diff
-     const qB = {
-       CreateResizedCopy: function(BB, OB, GB) {
-         let QB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         const oB = BB.JF(),
-           jB = oB.Lp(),
-           yB = new DB.d("resized" + BB.name, {
-             width: OB,
-             height: GB
-           }, oB, !BB.noMipmap, !0, BB._texture.type, !1, BB.samplingMode, !1);
-         yB.wrapU = BB.wrapU, yB.wrapV = BB.wrapV, yB.uOffset = BB.uOffset, yB.vOffset = BB.vOffset, yB.uScale = BB.uScale, yB.vScale = BB.vScale, yB.uAng = BB.uAng, yB.vAng = BB.vAng, yB.wAng = BB.wAng, yB.coordinatesIndex = BB.coordinatesIndex, yB.level = BB.level, yB.anisotropi … [truncated]
-         const JB = new MB("pass", 1, null, QB ? YB.e.BILINEAR_SAMPLINGMODE : YB.e.NEAREST_SAMPLINGMODE, jB, !1, 0);
-         return JB.externalTextureSamplerBinding = !0, JB.onEffectCreatedObservable.addOnce((OB => {
-           OB.executeWhenCompiled((() => {
-             JB.onApply = function(OB) {
-               OB.setTexture("textureSampler", BB)
-             };
- ... (593 more removed lines; see GitHub link above)
+     async function bW(WW, iW, OW) {
+       const mW = ZW(iW),
+         EW = await (0, cW.i)(WW, mW);
+       if (!EW) return;
+       const NW = new Set([xW(iW), "package.json"]);
+       if (OW)
+         for (const cW of Object.keys(iW.files)) NW.add(cW);
+       const PW = await AW(EW),
+         LW = new Set;
+       for (const ZW of PW) {
+         if (NW.has(ZW)) continue;
+         await (0, cW.C)(WW, `${mW}/${ZW}`);
+         const iW = ZW.split("/");
+         for (let WW = 1; WW < iW.length; WW++) LW.add(iW.slice(0, WW).join("/"))
+       }
+       const wW = [...LW].sort(((WW, iW) => iW.split("/").length - WW.split("/").length));
+ ... (5 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L1979-L2018` → after: `L69-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L69-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/620.js#L69-L107) · [Before (L1979-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/620.js#L1979-L2018)

```diff
-     QB.FragmentUrl = "pass";
-     class oB extends YB.h {
-       _gatherImports(BB, OB) {
-         BB ? (this._webGPUReady = !0, OB.push(Promise.all([GB.e(681).then((() => GB(64053)))]))) : OB.push(Promise.all([GB.e(682).then((() => GB(64055)))])), super._gatherImports(BB, OB)
-       }
-       constructor(BB) {
-         super({
-           ...arguments.length > 2 ? arguments[2] : void 0,
-           name: BB,
-           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || DB.b.LastCreatedEngine,
-           useShaderStore: !0,
-           useAsPostProcess: !0,
-           fragmentShader: oB.FragmentUrl,
-           defines: "#define POSITIVEX"
-         }), this._face = 0
-       }
- ... (24 more removed lines; see GitHub link above)
+ 
+     function jW(WW) {
+       const iW = {
+         "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
+       };
+       for (const mW of Object.values(PW.e)) iW[mW.specifier] = [`.${mW.typesVfsPath}`];
+       const OW = [];
+       for (const mW of WW)
+         for (const WW of Object.keys(mW.files)) OW.push(tW((0, LW.v)(mW.name, WW)));
+       return JSON.stringify({
+         compilerOptions: {
+           allowJs: !0,
+           checkJs: !1,
+           strict: !1,
+           module: "ESNext",
+           moduleResolution: "bundler",
+ ... (23 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/621.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/621.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/621.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/621.js#L4)

```diff
-   44986: (BB, OB, GB) => {
+   53803: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/621.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/621.js#L6)

```diff
-       _HDRTextureLoader: () => MB
+       installImageBitmapTextureLoader: () => wW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L8-L81` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/621.js#L8-L10) · [Before (L8-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/621.js#L8-L81)

```diff
-     var YB = GB(37778);
-     class DB {
-       static ConvertPanoramaToCubemap(BB, OB, GB, YB) {
-         let DB, QB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           oB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-         if (!BB) throw "ConvertPanoramaToCubemap: input cannot be null";
-         if (BB.length != OB * GB * 3) {
-           if (BB.length != OB * GB * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
-           DB = 4
-         } else DB = 3;
-         return {
-           front: this.CreateCubemapTexture(YB, this.FACE_FRONT, BB, OB, GB, QB, oB, DB),
-           back: this.CreateCubemapTexture(YB, this.FACE_BACK, BB, OB, GB, QB, oB, DB),
-           left: this.CreateCubemapTexture(YB, this.FACE_LEFT, BB, OB, GB, QB, oB, DB),
-           right: this.CreateCubemapTexture(YB, this.FACE_RIGHT, BB, OB, GB, QB, oB, DB),
-           up: this.CreateCubemapTexture(YB, this.FACE_UP, BB, OB, GB, QB, oB, DB),
- ... (58 more removed lines; see GitHub link above)
+     var mW = OW(41412),
+       EW = OW(53812),
+       NW = OW(4390);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L84-L86` → after: `L13-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L13-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/621.js#L13-L21) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/621.js#L84-L86)

```diff
-       let GB, YB = "";
-       for (let DB = OB; DB < BB.length - OB && (GB = String.fromCharCode(BB[DB]), "\n" != GB); DB++) YB += GB;
-       return YB
+       if ("string" === typeof WW) {
+         const OW = (0, NW.h)(WW);
+         return OW ? new Blob([(0, NW.c)(OW.base64)], {
+           type: OW.mimeType || iW
+         }) : null
+       }
+       return WW instanceof Blob ? WW : new Blob([WW], {
+         type: iW
+       })
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L89-L109` → after: `L44-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L44-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/621.js#L44-L63) · [Before (L89-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/621.js#L89-L109)

```diff
-     function jB(BB) {
-       let OB = oB(BB, 0);
-       if ("#" != OB[0] || "?" != OB[1]) throw "Bad HDR Format.";
-       let GB = !1,
-         YB = !1,
-         DB = 0;
-       do {
-         DB += OB.length + 1, OB = oB(BB, DB), "FORMAT=32-bit_rle_rgbe" == OB ? YB = !0 : 0 == OB.length && (GB = !0)
-       } while (!GB);
-       if (!YB) throw "HDR Bad header format, unsupported FORMAT";
-       DB += OB.length + 1, OB = oB(BB, DB);
-       const QB = /^-Y (.*) \+X (.*)$/g.exec(OB);
-       if (!QB || QB.length < 3) throw "HDR Bad header format, no size";
-       const jB = parseInt(QB[2]),
-         yB = parseInt(QB[1]);
-       if (jB < 8 || jB > 32767) throw "HDR Bad header format, unsupported size";
- ... (5 more removed lines; see GitHub link above)
+     function wW() {
+       "idle" === cW && "function" === typeof createImageBitmap && (cW = "pending", async function() {
+         const WW = document.createElement("canvas");
+         WW.width = 1, WW.height = 2;
+         const iW = WW.getContext("2d");
+         if (!iW) throw new Error("2d context unavailable");
+         iW.fillStyle = "#f00", iW.fillRect(0, 0, 1, 1), iW.fillStyle = "#0f0", iW.fillRect(0, 1, 1, 1);
+         const OW = PW(WW.toDataURL(), "");
+         if (!OW) throw new Error("toDataURL did not produce a base64 data URL");
+         const mW = await createImageBitmap(OW, {
+           premultiplyAlpha: "none",
+           colorSpaceConversion: "none",
+           imageOrientation: "flipY"
+         });
+         iW.drawImage(mW, 0, 0);
+         const EW = iW.getImageData(0, 0, 1, 1).data;
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L111-L172` → after: `L65-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L65-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/621.js#L65-L72) · [Before (L111-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/621.js#L111-L172)

```diff
- 
-     function yB(BB, OB) {
-       return function(BB, OB) {
-         let GB = OB.height;
-         const YB = OB.width;
-         let DB, oB, jB, yB, MB, PB, zB, lB, pB = OB.dataPosition;
-         const qB = new ArrayBuffer(4 * YB),
-           ZB = new Uint8Array(qB),
-           NB = new ArrayBuffer(OB.width * OB.height * 4 * 3),
-           RB = new Float32Array(NB);
-         for (; GB > 0;) {
-           if (DB = BB[pB++], oB = BB[pB++], jB = BB[pB++], yB = BB[pB++], 2 != DB || 2 != oB || 128 & jB || OB.width < 8 || OB.width > 32767) return JB(BB, OB);
-           if ((jB << 8 | yB) != YB) throw "HDR Bad header format, wrong scan line width";
-           for (PB = 0, lB = 0; lB < 4; lB++)
-             for (zB = (lB + 1) * YB; PB < zB;)
-               if (DB = BB[pB++], oB = BB[pB++], DB > 128) {
- ... (46 more removed lines; see GitHub link above)
+   },
+   53812: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => mW.i,
+       f: () => mW.s
+     });
+     var mW = OW(41558);
+     (0, mW.z)()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/622.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/622.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L4-L6)

```diff
-   44993: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       _KTXTextureLoader: () => pB
+   53878: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => NW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L8-L24` → after: `L8-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L8-L19) · [Before (L8-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L8-L24)

```diff
-     var YB = GB(39366);
-     class DB {
-       constructor(BB, OB) {
-         if (this.data = BB, this.isInvalid = !1, !DB.IsValid(BB)) return this.isInvalid = !0, void YB.b.Error("texture missing KTX identifier");
-         const GB = Uint32Array.BYTES_PER_ELEMENT,
-           QB = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * GB),
-           oB = 67305985 === QB.getUint32(0, !0);
-         return this.glType = QB.getUint32(1 * GB, oB), this.glTypeSize = QB.getUint32(2 * GB, oB), this.glFormat = QB.getUint32(3 * GB, oB), this.glInternalFormat = QB.getUint32(4 * GB, oB), this.glBaseInternalFormat = QB.getUint32(5 * GB, oB), this.pixelWidth = QB.getUint32(6 *  … [truncated]
-       }
-       uploadLevels(BB, OB) {
-         switch (this.loadType) {
-           case DB.COMPRESSED_2D:
-             this._upload2DCompressedLevels(BB, OB);
-           case DB.TEX_2D:
-           case DB.COMPRESSED_3D:
-           case DB.TEX_3D:
- ... (1 more removed lines; see GitHub link above)
+     var mW = OW(53868),
+       EW = OW(53885);
+ 
+     function NW(WW) {
+       (0, EW.d)(WW), (0, mW.s)(WW);
+       const iW = WW._surfaces;
+       for (const OW of iW) OW._renderingContexts.length = 0, OW._ro?.disconnect(), OW._context.unconfigure();
+       iW.length = 0;
+       try {
+         WW._disposeManagedResources?.(), WW._disposeStorageBuffers?.()
+       } finally {
+         WW._device.destroy()
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L26-L36` → after: `L21-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L21-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L21-L62) · [Before (L26-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L26-L36)

```diff
-       _upload2DCompressedLevels(BB, OB) {
-         let GB = DB.HEADER_LEN + this.bytesOfKeyValueData,
-           YB = this.pixelWidth,
-           QB = this.pixelHeight;
-         const oB = OB ? this.numberOfMipmapLevels : 1;
-         for (let DB = 0; DB < oB; DB++) {
-           const OB = new Int32Array(this.data.buffer, this.data.byteOffset + GB, 1)[0];
-           GB += 4;
-           for (let oB = 0; oB < this.numberOfFaces; oB++) {
-             const jB = new Uint8Array(this.data.buffer, this.data.byteOffset + GB, OB);
-             BB.Lp()._uploadCompressedDataToTextureDirectly(BB, BB.format, YB, QB, jB, oB, DB), GB += OB, GB += 3 - (OB + 3) % 4
+     }
+   },
+   53868: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => xW,
+       f: () => UW,
+       i: () => lW,
+       l: () => AW,
+       o: () => MW,
+       p: () => kW,
+       s: () => sW
+     });
+     var mW = OW(53822);
+     var EW = "Babylon Lite v1.32.0",
+       NW = OW(53875);
+ 
+ ... (26 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L38-L46` → after: `L64-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L64-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L64-L76) · [Before (L38-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L38-L46)

```diff
-           YB = Math.max(1, .5 * YB), QB = Math.max(1, .5 * QB)
-         }
-       }
-       static IsValid(BB) {
-         if (BB.byteLength >= 12) {
-           const OB = new Uint8Array(BB.buffer, BB.byteOffset, 12);
-           if (171 === OB[0] && 75 === OB[1] && 84 === OB[2] && 88 === OB[3] && 32 === OB[4] && 49 === OB[5] && 49 === OB[6] && 187 === OB[7] && 13 === OB[8] && 10 === OB[9] && 26 === OB[10] && 10 === OB[11]) return !0
-         }
-         return !1
+         });
+       return AW._eager = !0, {
+         engine: WW,
+         canvas: iW,
+         format: tW,
+         msaaSamples: lW,
+         scRT: AW,
+         maxDevicePixelRatio: OW?.maxDevicePixelRatio ?? 1 / 0,
+         _uniqueId: LW++,
+         _context: cW,
+         _configureFormat: wW,
+         _alphaMode: xW,
+         _renderingContexts: []
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L53-L55` → after: `L80-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L80-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L80-L85) · [Before (L53-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L53-L55)

```diff
-     function MB(BB, OB) {
-       const GB = OB?.jsDecoderModule || KTX2DECODER;
-       BB && (BB.wasmBaseUrl && (GB.Transcoder.WasmBaseUrl = BB.wasmBaseUrl), BB.wasmUASTCToASTC && (GB.LiteTranscoder_UASTC_ASTC.WasmModuleURL = BB.wasmUASTCToASTC), BB.wasmUASTCToBC7 && (GB.LiteTranscoder_UASTC_BC7.WasmModuleURL = BB.wasmUASTCToBC7), BB.wasmUASTCToRGBA_UNORM &&  … [truncated]
+     function wW(WW) {
+       const iW = WW._context.getCurrentTexture(),
+         OW = WW.scRT;
+       OW._colorTexture = iW, OW._colorView = iW.createView({
+         format: WW.format
+       }), OW._width = iW.width, OW._height = iW.height
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L59-L155` → after: `L89-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L89-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L89-L104) · [Before (L59-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L59-L155)

```diff
-       let OB;
-       "undefined" === typeof BB && "undefined" !== typeof KTX2DECODER && (BB = KTX2DECODER), onmessage = GB => {
-         if (GB.data) switch (GB.data.action) {
-           case "init": {
-             const YB = GB.data.urls;
-             YB && (YB.jsDecoderModule && "undefined" === typeof BB && (importScripts(YB.jsDecoderModule), BB = KTX2DECODER), MB(YB)), GB.data.wasmBinaries && MB(void 0, {
-               ...GB.data.wasmBinaries,
-               jsDecoderModule: BB
-             }), OB = new BB.KTX2Decoder, postMessage({
-               action: "init"
-             });
-             break
-           }
-           case "setDefaultDecoderOptions":
-             BB.KTX2Decoder.DefaultDecoderOptions = GB.data.options;
-             break;
- ... (81 more removed lines; see GitHub link above)
+       const iW = WW.canvas;
+       if (!PW(iW)) return;
+       const OW = WW._w ?? iW.clientWidth,
+         mW = WW._h ?? iW.clientHeight;
+       if (!(OW > 0 && mW > 0)) return;
+       const EW = Math.min(globalThis.devicePixelRatio || 1, WW.maxDevicePixelRatio);
+       ZW(WW, OW * EW | 0, mW * EW | 0)
+     }
+ 
+     function ZW(WW, iW, OW) {
+       const mW = WW.canvas,
+         EW = 0 | iW,
+         NW = 0 | OW;
+       if (EW > 0 && NW > 0 && (EW !== mW.width || NW !== mW.height)) {
+         mW.width = EW, mW.height = NW, WW.scRT._width = EW, WW.scRT._height = NW;
+         for (const iW of WW._renderingContexts) iW._resize?.()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L157-L159` → after: `L106-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L106-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L106-L138) · [Before (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L157-L159)

```diff
-       async _uploadAsync(BB, OB, GB) {
-         const YB = await this._decodeAsync(BB, GB);
-         this._createTexture(YB, OB, GB)
+     }
+     var xW = 0;
+ 
+     function lW(WW, iW) {
+       return -1 !== WW._renderingContexts.indexOf(iW)
+     }
+ 
+     function AW(WW, iW) {
+       return -1 === WW._renderingContexts.indexOf(iW) && (WW._renderingContexts.push(iW), !0)
+     }
+     var bW = null;
+     var jW = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
+     async function UW(WW, iW) {
+       const NW = await navigator.gpu.requestAdapter({
+         powerPreference: "high-performance",
+         ...bW ? bW() : {}
+ ... (17 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L161-L209` → after: `L140-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L140-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L140-L149) · [Before (L161-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L161-L209)

```diff
-       async _decodeAsync(BB, OB) {
-         const GB = this._engine.getCaps(),
-           YB = {
-             astc: !!GB.astc,
-             bptc: !!GB.bptc,
-             s3tc: !!GB.s3tc,
-             pvrtc: !!GB.pvrtc,
-             etc2: !!GB.etc2,
-             etc1: !!GB.etc1
-           };
-         if (zB._WorkerPoolPromise) {
-           const GB = await zB._WorkerPoolPromise;
-           return await new Promise(((DB, QB) => {
-             GB.push(((GB, oB) => {
-               const jB = BB => {
-                   GB.removeEventListener("error", jB), GB.removeEventListener("message", yB), QB(BB), oB()
- ... (33 more removed lines; see GitHub link above)
+       let lW, AW, UW, kW;
+       if (xW) {
+         const [{
+           wrapRenderableForFO: WW,
+           lightFoVersion: iW,
+           applyLightFoOffset: mW
+         }, {
+           makePackMeshWorld: EW
+         }] = await Promise.all([OW.e(675).then((() => OW(64479))), OW.e(676).then((() => OW(64482)))]);
+         lW = WW, AW = EW, UW = iW, kW = mW
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L211-L232` → after: `L151-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L151-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L151-L210) · [Before (L211-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L211-L232)

```diff
-       _createTexture(BB, OB, GB) {
-         if ((BB.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
-         this._engine._bindTextureDirectly(3553, OB), GB && (GB.transcodedFormat = BB.transcodedFormat, GB.isInGammaSpace = BB.isInGammaSpace, GB.hasAlpha = BB.hasAlpha, GB.transcoderName = BB.transcoderName);
-         let YB = !0;
-         switch (BB.transcodedFormat) {
-           case 32856:
-             OB.type = 0, OB.format = 5;
-             break;
-           case 33321:
-             OB.type = 0, OB.format = 6;
-             break;
-           case 33323:
-             OB.type = 0, OB.format = 7;
-             break;
-           default:
-             OB.format = BB.transcodedFormat, YB = !1
- ... (6 more removed lines; see GitHub link above)
+       const sW = {
+           _device: LW
+         },
+         MW = [sW];
+       return Object.assign(sW, {
+         engine: sW,
+         surfaces: MW,
+         _surfaces: MW,
+         _device: LW,
+         _options: iW,
+         drawCallCount: 0,
+         gpuFrameTimeMs: 0,
+         useHighPrecisionMatrix: ZW,
+         useFloatingOrigin: xW,
+         _animFrameId: 0,
+         _renderFn: null,
+ ... (44 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L234-L239` → after: `L212-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L212-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L212-L215) · [Before (L234-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L234-L239)

```diff
-         OB._extension = ".ktx2", OB.isReady = !0, this._engine._bindTextureDirectly(3553, null)
-       }
-       static IsValid(BB) {
-         if (BB.byteLength >= 12) {
-           const OB = new Uint8Array(BB.buffer, BB.byteOffset, 12);
-           if (171 === OB[0] && 75 === OB[1] && 84 === OB[2] && 88 === OB[3] && 32 === OB[4] && 50 === OB[5] && 48 === OB[6] && 187 === OB[7] && 13 === OB[8] && 10 === OB[9] && 26 === OB[10] && 10 === OB[11]) return !0
+         const iW = WW._currentEncoder;
+         for (let WW = 0; WW < OW.length; WW++) {
+           const mW = OW[WW];
+           mW._captureService?.(mW, iW)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L241` → after: `L217-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L217-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L217-L219) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L241)

```diff
-         return !1
+         WW._gpuTimerEnd?.(iW), WW._cbs[0] = iW.finish(), WW._device.queue.submit(WW._cbs), WW._flushGpuRetirements?.(WW), WW.drawCallCount = mW, WW._gpuTimerResolve?.()
+       } finally {
+         WW._currentEncoder = void 0
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L246-L305` → after: `L240-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L240-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L240-L243) · [Before (L246-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L246-L305)

```diff
-       switch (BB) {
-         case 35916:
-           return 33776;
-         case 35918:
-           return 33778;
-         case 35919:
-           return 33779;
-         case 37493:
-           return 37492;
-         case 37497:
-           return 37496;
-         case 37495:
-           return 37494;
-         case 37840:
-           return 37808;
-         case 37841:
- ... (44 more removed lines; see GitHub link above)
+       for (const OW of WW) try {
+         OW()
+       } catch (iW) {
+         console.error("GPU resource retirement failed.", iW)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L307-L317` → after: `L245-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L245-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L245-L295) · [Before (L307-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L307-L317)

```diff
-       get isDirty() {
-         return this._isDirty
-       }
-       get useRGBAIfASTCBC7NotAvailableWhenUASTC() {
-         return this._useRGBAIfASTCBC7NotAvailableWhenUASTC
-       }
-       set useRGBAIfASTCBC7NotAvailableWhenUASTC(BB) {
-         this._useRGBAIfASTCBC7NotAvailableWhenUASTC !== BB && (this._useRGBAIfASTCBC7NotAvailableWhenUASTC = BB, this._isDirty = !0)
-       }
-       get useRGBAIfOnlyBC1BC3AvailableWhenUASTC() {
-         return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC
+     }
+ 
+     function NW(WW, iW) {
+       WW._flushGpuRetirements ??= PW, (WW._retirements ??= []).push(iW)
+     }
+ 
+     function PW(WW) {
+       const iW = WW._retirements;
+       if (!iW) return;
+       WW._retirements = null;
+       const OW = WW._retiring ??= new Set;
+       OW.add(iW), queueMicrotask((() => {
+         WW._device.queue.onSubmittedWorkDone().then((() => {
+           OW.delete(iW), mW(iW)
+         })).catch((() => {}))
+       }))
+ ... (35 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L319-L320` → after: `L297-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L297-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L297-L338) · [Before (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L319-L320)

```diff
-       set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(BB) {
-         this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== BB && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = BB, this._isDirty = !0)
+     }
+ 
+     function PW(WW, iW) {
+       if (WW._eager) return void WW._syncEager?.(iW);
+       LW(WW);
+       const OW = WW._descriptor,
+         {
+           width: NW,
+           height: PW
+         } = (WW._resolveSize ?? EW)(OW);
+       WW._width = NW, WW._height = PW;
+       const cW = iW._device;
+       OW.format && (WW._colorTexture = cW.createTexture({
+         label: OW.lbl,
+         size: {
+           width: NW,
+ ... (26 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L322-L323` → after: `L340-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L340-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L340-L427) · [Before (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L322-L323)

```diff
-       get forceRGBA() {
-         return this._forceRGBA
+     }
+   },
+   53896: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => mW,
+       g: () => EW,
+       h: () => NW
+     });
+     var mW = Float32Array,
+       EW = Float64Array,
+       NW = Uint32Array
+   },
+   53901: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => mW
+     });
+ ... (72 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L325-L326` → after: `L429-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L429-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L429-L446) · [Before (L325-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L325-L326)

```diff
-       set forceRGBA(BB) {
-         this._forceRGBA !== BB && (this._forceRGBA = BB, this._isDirty = !0)
+       let wW = LW.get(cW);
+       return wW || LW.set(cW, wW = EW.createSampler(iW)), wW
+     }
+   },
+   53891: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => DW,
+       e: () => fW
+     });
+     var mW = OW(53875),
+       EW = OW(53868);
+ 
+     function NW(WW, iW) {
+       iW._passes.length = 0, WW._currentProcessedTask = iW;
+       try {
+         iW.record()
+ ... (2 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L328-L329` → after: `L448-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L448-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L448-L519) · [Before (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L328-L329)

```diff
-       get forceR8() {
-         return this._forceR8
+     }
+     var PW = OW(53896);
+ 
+     function LW(WW) {
+       const iW = WW.worldMatrixVersion;
+       if (WW._viewVer === iW) return WW._viewCache;
+       const OW = WW._viewCache,
+         mW = WW.worldMatrix,
+         EW = WW._useFloatingOrigin,
+         NW = EW ? 0 : mW[12],
+         PW = EW ? 0 : mW[13],
+         LW = EW ? 0 : mW[14];
+       return OW[0] = mW[0], OW[1] = mW[4], OW[2] = mW[8], OW[3] = 0, OW[4] = mW[1], OW[5] = mW[5], OW[6] = mW[9], OW[7] = 0, OW[8] = mW[2], OW[9] = mW[6], OW[10] = mW[10], OW[11] = 0, OW[12] = -(mW[0] * NW + mW[1] * PW + mW[2] * LW), OW[13] = -(mW[4] * NW + mW[5] * PW + mW[6] * L … [truncated]
+     }
+     var cW = null;
+ 
+ ... (56 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L331-L332` → after: `L521-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L521-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L521-L538) · [Before (L331-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L331-L332)

```diff
-       set forceR8(BB) {
-         this._forceR8 !== BB && (this._forceR8 = BB, this._isDirty = !0)
+       return EW
+     }
+     var UW = OW(53901),
+       kW = new PW.h(1),
+       sW = new PW.e(kW.buffer);
+ 
+     function MW(WW) {
+       let iW = 0;
+       for (const OW of WW) iW += OW._lightVersion ?? 0;
+       return iW
+     }
+ 
+     function KW(WW, iW) {
+       WW.fill(0);
+       let OW = 0;
+       for (const mW of iW) {
+ ... (2 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L334-L335` → after: `L540-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L540-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L540-L616) · [Before (L334-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L334-L335)

```diff
-       get forceRG8() {
-         return this._forceRG8
+       kW[0] = OW, WW[0] = sW[0]
+     }
+ 
+     function SW(WW, iW) {
+       let OW = iW._lightGpuState;
+       const mW = 16 + 16 * UW.b * 4;
+       if (OW && OW._byteSize === mW) return OW;
+       const EW = !OW;
+       OW?._buffer.destroy();
+       const NW = new PW.e(mW / 4);
+       return KW(NW, iW.lights), WW._applyLightFoOffset?.(NW, iW), OW = {
+         _buffer: jW(WW, NW),
+         _scratch: NW,
+         zC: MW(iW.lights) + (WW._lightFoVersion?.(iW) ?? 0),
+         _listVersion: iW._lightListVersion ?? 0,
+         _lightCount: iW.lights.length,
+ ... (61 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L337-L338` → after: `L618-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L618-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L618-L746) · [Before (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L337-L338)

```diff
-       set forceRG8(BB) {
-         this._forceRG8 !== BB && (this._forceRG8 = BB, this._isDirty = !0)
+     }
+ 
+     function JW(WW, iW, OW) {
+       WW.clr ??= !0;
+       const EW = WW.rt._descriptor,
+         NW = WW.depth?._descriptor,
+         cW = {
+           _colorFormat: EW.format,
+           _depthStencilFormat: NW?.dFormat ?? EW.dFormat,
+           _depthCompare: EW.depthCompare ?? NW?.depthCompare,
+           _sampleCount: EW.samples
+         },
+         tW = {
+           loadOp: "clear",
+           storeOp: "store"
+         },
+ ... (113 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L340-L341` → after: `L748-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L748-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L748-L760) · [Before (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L340-L341)

```diff
-       get bypassTranscoders() {
-         return this._bypassTranscoders
+       const {
+         _opaqueBindings: tW,
+         _directBindings: ZW,
+         _transparentBindings: xW
+       } = wW;
+       try {
+         for (const OW of iW) {
+           const iW = OW.bind(WW.engine, WW._targetSignature);
+           wW._batchState = WW._targetSignature._collectBatches?.(wW._batchState, iW), OW.isTransparent || OW._transmissive ? xW.push(iW) : OW._direct ? ZW.push(iW) : tW.push(iW)
+         }
+         tW.sort(HW), ZW.sort(HW), OW && oW(WW, WW.engine, !1)
+       } catch (lW) {
+         throw wW._batchState?._release(void 0, NW ?? [cW]), lW
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L343-L344` → after: `L762-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L762-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L762-L806) · [Before (L343-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L343-L344)

```diff
-       set bypassTranscoders(BB) {
-         this._bypassTranscoders !== BB && (this._bypassTranscoders = BB, this._isDirty = !0)
+       return OW && (! function(WW, iW) {
+         const OW = WW._config,
+           mW = WW._colorAttachment;
+         mW.view = iW._colorView, WW._renderPassDescriptor.colorAttachments = iW._colorView ? [mW] : [];
+         const EW = OW.depth ?? iW,
+           NW = EW._depthView;
+         let PW;
+         if (NW) {
+           const WW = EW._descriptor,
+             iW = (OW.depth ? EW._eager : !1 === OW.depthClear) ? "load" : "clear";
+           PW = {
+             view: NW,
+             depthClearValue: WW.depthClearValue ?? 0,
+             depthLoadOp: iW,
+             depthStoreOp: "store"
+           }, WW.dFormat?.includes("stencil") && (PW.stencilClearValue = 0, PW.stencilLoadOp = iW, PW.stencilStoreOp = "store")
+ ... (29 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L346-L357` → after: `L808-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L808-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L808-L821) · [Before (L346-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L346-L357)

```diff
-       _getKTX2DecoderOptions() {
-         if (!this._isDirty) return this._ktx2DecoderOptions;
-         this._isDirty = !1;
-         const BB = {};
-         return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (BB.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (BB.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (BB.forceR8 = this._force … [truncated]
-           UASTC: {
-             transcodeFormat: [oB.BC1_RGB, oB.BC3_RGBA],
-             yes: {
-               transcodeFormat: oB.RGBA32,
-               engineFormat: 32856,
-               roundToMultiple4: !1
-             }
+       let tW = LW.length;
+       return iW.executeBundles(cW), iW.setBindGroup(0, wW), tW += eW(iW, WW._directBindings, OW), tW += eW(iW, WW._transparentBindings, OW), tW
+     }
+ 
+     function oW(WW, iW) {
+       let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+       const mW = SW(iW, WW.rb)._buffer;
+       if (mW === WW._lightsUBO) return;
+       const EW = iW._device.createBindGroup({
+         layout: bW(iW),
+         entries: [{
+           binding: 0,
+           resource: {
+             buffer: WW._sceneUBO
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L359` → after: `L823-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L823-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L823-L842) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L359)

```diff
-         }), this._ktx2DecoderOptions = BB, BB
+         }, {
+           binding: 1,
+           resource: {
+             buffer: mW
+           }
+         }]
+       });
+       WW._lightsUBO = mW, WW._sceneBG = EW, OW && (WW._ob = [])
+     }
+ 
+     function dW(WW, iW) {
+       for (const OW of WW) OW.update?.(iW)
+     }
+ 
+     function eW(WW, iW, OW) {
+       let mW = null,
+ ... (4 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L361-L364` → after: `L844-L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L844-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L844-L881) · [Before (L361-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L361-L364)

```diff
-     };
-     class pB {
-       constructor() {
-         this.supportCascades = !1
+       return EW
+     }
+ 
+     function vW(WW) {
+       const iW = WW._materialSwapQueue;
+       if (!iW[0] || WW._runtimeBuilds?.w) return;
+       let mW, EW, NW;
+       const PW = WW._renderables;
+       for (const OW of iW) {
+         const iW = OW.material;
+         if (!iW) continue;
+         const LW = OW._runtimeThinBuild;
+         if (LW) {
+           EW = LW(WW, OW, EW);
+           continue
+         }
+ ... (22 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L366-L374` → after: `L883-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L883-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L883-L998) · [Before (L366-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L366-L374)

```diff
-       loadCubeData(BB, OB, GB, YB) {
-         if (Array.isArray(BB)) return;
-         OB._invertVScale = !OB.invertY;
-         const QB = OB.Lp(),
-           oB = new DB(BB, 6),
-           jB = lB(oB.glInternalFormat);
-         null !== jB ? (OB.format = jB, OB._useSRGBBuffer = QB._getUseSRGBBuffer(!0, !OB.generateMipMaps), OB._gammaSpace = !0) : OB.format = oB.glInternalFormat;
-         const yB = oB.numberOfMipmapLevels > 1 && OB.generateMipMaps;
-         QB._unpackFlipY(!0), oB.uploadLevels(OB, OB.generateMipMaps), OB.width = oB.pixelWidth, OB.height = oB.pixelHeight, QB._setCubeMapTextureParams(OB, yB, oB.numberOfMipmapLevels - 1), OB.isReady = !0, OB.onLoadedObservable.notifyObservers(OB), OB.onLoadedObservable.clear(), … [truncated]
+       if (mW && (PW.sort(((WW, iW) => WW.order - iW.order)), WW._renderableVersion++, WW._materialEpoch++), iW.length = 0, !NW) return EW;
+       const LW = NW;
+       return OW.e(680).then((() => OW(64503))).then((iW => {
+         let {
+           C: OW
+         } = iW;
+         return OW(WW, LW, EW)
+       }), (iW => {
+         const OW = WW._runtimeBuilds;
+         OW ? OW._x(iW) : console.error(iW)
+       }))
+     }
+     var gW = null;
+ 
+     function DW(WW, iW) {
+       const OW = WW.engine,
+ ... (100 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L376-L390` → after: `L1000-L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L1000-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L1000-L1006) · [Before (L376-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L376-L390)

```diff
-       loadData(BB, OB, GB, QB) {
-         if (DB.IsValid(BB)) {
-           OB._invertVScale = !OB.invertY;
-           const YB = new DB(BB, 1),
-             QB = lB(YB.glInternalFormat);
-           null !== QB ? (OB.format = QB, OB._useSRGBBuffer = OB.Lp()._getUseSRGBBuffer(!0, !OB.generateMipMaps), OB._gammaSpace = !0) : OB.format = YB.glInternalFormat, GB(YB.pixelWidth, YB.pixelHeight, OB.generateMipMaps, !0, (() => {
-             YB.uploadLevels(OB, OB.generateMipMaps)
-           }), YB.isInvalid)
-         } else if (zB.IsValid(BB)) {
-           new zB(OB.Lp())._uploadAsync(BB, OB, QB).then((() => {
-             GB(OB.width, OB.height, OB.generateMipMaps, !0, (() => {}), !1)
-           }), (BB => {
-             YB.b.Warn(`Failed to load KTX2 texture data: ${BB.message}`), GB(0, 0, !1, !1, (() => {}), !0)
-           }))
-         } else YB.b.Error("texture missing KTX identifier"), GB(0, 0, !1, !1, (() => {}), !0)
+       return EW._disposables.push((() => PW.dispose())), EW
+     }
+     async function VW(WW) {
+       const iW = WW;
+       for (iW._built || (iW._materialSwapQueue.length = 0); iW._deferredBuilders.length;) {
+         const WW = iW._deferredBuilders.splice(0);
+         await Promise.all(WW.map((WW => WW())))
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L394` → after: `L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L1018) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L394)

```diff
-   44999: (BB, OB, GB) => {
+   53862: (WW, iW, OW) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L396` → after: `L1020-L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L1020-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L1020-L1021) · [Before (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L396)

```diff
-       c: () => DB
+       e: () => wW,
+       f: () => tW
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L398-L426` → after: `L1023-L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L1023-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L1023-L1071) · [Before (L398-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L398-L426)

```diff
-     class YB {
-       constructor(BB) {
-         this._pendingActions = new Array, this._workerInfos = BB.map((BB => ({
-           workerPromise: Promise.resolve(BB),
-           idle: !0
-         })))
-       }
-       dispose() {
-         for (const BB of this._workerInfos) BB.workerPromise.then((BB => {
-           BB.terminate()
-         }));
-         this._workerInfos.length = 0, this._pendingActions.length = 0
-       }
-       push(BB) {
-         this._executeOnIdleWorker(BB) || this._pendingActions.push(BB)
-       }
- ... (13 more removed lines; see GitHub link above)
+     var mW = OW(53822),
+       EW = OW(53828),
+       NW = OW(53833),
+       PW = OW(53836),
+       LW = OW(53845),
+       cW = OW(53853);
+ 
+     function wW(WW, iW, OW) {
+       let LW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       (iW < 1 || OW < 1) && (0, mW.c)(676, iW, OW);
+       const wW = WW._device,
+         tW = LW.mipMaps ?? !1,
+         ZW = LW.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
+         xW = tW ? (0, cW.d)(iW, OW) : 1,
+         lW = wW.createTexture({
+           size: {
+ ... (33 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L428-L441` → after: `L1073-L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R1073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L1073-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L1073-L1190) · [Before (L428-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L428-L441)

```diff
-     class DB extends YB {
-       constructor(BB, OB) {
-         let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DB.DefaultOptions;
-         super([]), this._maxWorkers = BB, this._createWorkerAsync = OB, this._options = GB
-       }
-       push(BB) {
-         if (!this._executeOnIdleWorker(BB))
-           if (this._workerInfos.length < this._maxWorkers) {
-             const OB = {
-               workerPromise: this._createWorkerAsync(),
-               idle: !1
-             };
-             this._workerInfos.push(OB), this._execute(OB, BB)
-           } else this._pendingActions.push(BB)
+ 
+     function tW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const EW = mW.invertY ?? !0,
+         NW = mW.premultiplyAlpha ?? !1;
+       WW._device.queue.copyExternalImageToTexture({
+         source: OW,
+         flipY: EW
+       }, {
+         texture: iW.texture,
+         premultipliedAlpha: NW
+       }, [iW.width, iW.height]);
+       const PW = iW._recoverySource;
+       PW && "dynamic" === PW.kind && (PW.source = OW, PW.flipY = EW, PW.premultipliedAlpha = NW), iW.texture.mipLevelCount > 1 && (0, LW.generateMipmaps)(WW, iW.texture)
+     }
+   },
+ ... (102 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L443-L453` → after: `L1192-L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L1192-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L1192-L1305) · [Before (L443-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L443-L453)

```diff
-       _execute(BB, OB) {
-         BB.timeoutId && (clearTimeout(BB.timeoutId), delete BB.timeoutId), super._execute(BB, ((GB, YB) => {
-           OB(GB, (() => {
-             YB(), BB.idle && (BB.timeoutId = setTimeout((() => {
-               BB.workerPromise.then((BB => {
-                 BB.terminate()
-               }));
-               const OB = this._workerInfos.indexOf(BB); - 1 !== OB && this._workerInfos.splice(OB, 1)
-             }), this._options.idleTimeElapsedBeforeRelease))
-           }))
-         }))
+     }
+   },
+   53845: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       generateMipmaps: () => lW,
+       recordMipmaps: () => AW
+     });
+     var mW = OW(53828),
+       EW = OW(53836),
+       NW = {
+         magFilter: "linear",
+         minFilter: "linear"
+       };
+     var PW = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*ve … [truncated]
+       LW = null,
+       cW = null,
+ ... (98 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L456-L457` → after: `L1308-L1378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L1308-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/622.js#L1308-L1378) · [Before (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/622.js#L456-L457)

```diff
-     DB.DefaultOptions = {
-       idleTimeElapsedBeforeRelease: 1e3
+   },
+   53853: (WW, iW, OW) => {
+     function mW(WW, iW) {
+       return Math.floor(Math.log2(Math.max(WW, iW))) + 1
+     }
+     OW.d(iW, {
+       d: () => mW
+     })
+   },
+   53819: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => wW,
+       d: () => tW
+     });
+     var mW = OW(53822),
+       EW = OW(53828),
+ ... (55 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/623.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/623.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1bf3551a628ef9935278863ca1b69614195191a0e0976a7c3fd87602a73ba27)

#### 1. `bundles/preprod.bloxd.io/chunks/js/623.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1bf3551a628ef9935278863ca1b69614195191a0e0976a7c3fd87602a73ba27R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1bf3551a628ef9935278863ca1b69614195191a0e0976a7c3fd87602a73ba27) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/623.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/623.js#L4-L6)

```diff
-   45001: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       _TGATextureLoader: () => jB
+   53924: (WW, iW, OW) => {
+     OW.d(iW, {
+       parseShaderPack: () => mW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/623.js` (Changed code · before: `L11` → after: `L10-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1bf3551a628ef9935278863ca1b69614195191a0e0976a7c3fd87602a73ba27R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1bf3551a628ef9935278863ca1b69614195191a0e0976a7c3fd87602a73ba27) · [After (L10-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/623.js#L10-L22) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/623.js#L11)

```diff
-       let OB = 0;
+       var iW, OW;
+       const mW = WW.get("shaderPackUrl"),
+         EW = null !== (iW = WW.get("shaderPackMode")) && void 0 !== iW ? iW : "strict";
+       if (null === mW) {
+         if (WW.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
+         return null
+       }
+       if ("lite" !== WW.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
+       if (! function(WW) {
+           return "strict" === WW || "allow" === WW
+         }(EW)) throw new Error(`Unknown shaderPackMode "${EW}" - use strict or allow`);
+       const NW = (null !== (OW = WW.get("variants")) && void 0 !== OW ? OW : "").split(",").find((WW => WW.trim().startsWith("liteShaderPack")));
+       if (void 0 !== NW) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${NW.trim()}`);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/623.js` (Changed code · before: `L13-L170` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1bf3551a628ef9935278863ca1b69614195191a0e0976a7c3fd87602a73ba27R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f1bf3551a628ef9935278863ca1b69614195191a0e0976a7c3fd87602a73ba27) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/623.js#L24-L25) · [Before (L13-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/623.js#L13-L170)

```diff
-         id_length: BB[OB++],
-         colormap_type: BB[OB++],
-         image_type: BB[OB++],
-         colormap_index: BB[OB++] | BB[OB++] << 8,
-         colormap_length: BB[OB++] | BB[OB++] << 8,
-         colormap_size: BB[OB++],
-         origin: [BB[OB++] | BB[OB++] << 8, BB[OB++] | BB[OB++] << 8],
-         width: BB[OB++] | BB[OB++] << 8,
-         height: BB[OB++] | BB[OB++] << 8,
-         pixel_size: BB[OB++],
-         flags: BB[17]
-       }
-     }
- 
-     function QB(BB, OB) {
-       if (OB.length < 19) return void YB.b.Error("Unable to load TGA file - Not enough data to contain header");
- ... (142 more removed lines; see GitHub link above)
+         url: mW,
+         mode: EW
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/624.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/624.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L4-L7)

```diff
-   45008: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       ReadExrDataAsync: () => PO,
-       _ExrTextureLoader: () => MO
+   53951: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => wW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L9-L170` → after: `L8-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L8-L15) · [Before (L9-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L9-L170)

```diff
-     var YB = GB(39366),
-       DB = GB(37807),
-       QB = GB(41071);
-     const oB = 4,
-       jB = 4,
-       yB = 1,
-       JB = 2,
-       MB = 8,
-       PB = 65536,
-       zB = PB >> 3,
-       lB = 14,
-       pB = 65537,
-       qB = 1 << lB,
-       ZB = qB - 1,
-       NB = 59,
-       RB = 63,
- ... (146 more removed lines; see GitHub link above)
+     var mW = OW(38241),
+       EW = OW(38285),
+       NW = OW(41506),
+       PW = OW(38249),
+       LW = OW(38372);
+     class cW {
+       constructor(WW, iW, OW, mW) {
+         this.name = WW, this.worldAxisForNormal = iW, this.worldAxisForFileX = OW, this.worldAxisForFileY = mW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L173-L213` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L18-L20) · [Before (L173-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L173-L213)

```diff
- 
-     function LB(BB, OB) {
-       let GB = 0,
-         YB = Math.floor((BB.length + 1) / 2),
-         DB = 0;
-       const QB = BB.length - 1;
-       for (; !(DB > QB) && (OB[DB++] = BB[GB++], !(DB > QB));) OB[DB++] = BB[YB++]
-     }! function(BB) {
-       BB[BB.NO_COMPRESSION = 0] = "NO_COMPRESSION", BB[BB.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", BB[BB.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", BB[BB.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", BB[BB.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", BB[BB.PXR24_COMPRESSION = 5] = "PX … [truncated]
-     }(AB || (AB = {})),
-     function(BB) {
-       BB[BB.INCREASING_Y = 0] = "INCREASING_Y", BB[BB.DECREASING_Y = 1] = "DECREASING_Y"
-     }(VB || (VB = {}));
-     const gB = 20000630;
- 
-     function rB(BB, OB) {
- ... (25 more removed lines; see GitHub link above)
+     class wW {
+       static _NearestPow2Floor(WW) {
+         return WW <= 1 ? 1 : 1 << Math.floor(Math.log2(WW))
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L215-L224` → after: `L22-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L22-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L22-L61) · [Before (L215-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L215-L224)

```diff
-     }
-     const XB = 32768,
-       wB = 65535;
- 
-     function EB(BB, OB, GB, YB, DB) {
-       for (; GB < BB;) OB = OB << 8 | dB(YB, DB), GB += 8;
-       return {
-         l: OB >> (GB -= BB) & (1 << BB) - 1,
-         c: OB,
-         lc: GB
+       static ConvertCubeMapTextureToSphericalPolynomial(WW) {
+         if (!WW.isCube) return null;
+         WW.bD()?.VA().flushFramebuffer();
+         const iW = WW.getSize().width,
+           OW = WW._sphericalPolynomialTargetSize,
+           mW = OW > 0 ? this._NearestPow2Floor(OW) : 0,
+           EW = !WW.noMipmap && !0 === WW._texture?.generateMipMaps,
+           NW = mW > 0 && mW < iW && EW,
+           PW = NW ? Math.max(0, Math.round(Math.log2(iW / mW))) : 0,
+           LW = NW ? Math.max(1, Math.floor(iW / Math.pow(2, PW))) : iW,
+           cW = WW.readPixels(0, PW, void 0, !1),
+           wW = WW.readPixels(1, PW, void 0, !1);
+         let tW, ZW;
+         WW.isRenderTarget ? (tW = WW.readPixels(3, PW, void 0, !1), ZW = WW.readPixels(2, PW, void 0, !1)) : (tW = WW.readPixels(2, PW, void 0, !1), ZW = WW.readPixels(3, PW, void 0, !1));
+         const xW = WW.readPixels(4, PW, void 0, !1),
+           lW = WW.readPixels(5, PW, void 0, !1),
+ ... (24 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L226-L231` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L63-L64) · [Before (L226-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L226-L231)

```diff
-     }
- 
-     function cB(BB, OB, GB, YB) {
-       return {
-         c: BB = BB << 8 | dB(GB, YB),
-         lc: OB += 8
+       static _AreaElement(WW, iW) {
+         return Math.atan2(WW * iW, Math.sqrt(WW * WW + iW * iW + 1))
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L233-L239` → after: `L66-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L66-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L66-L85) · [Before (L233-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L233-L239)

```diff
-     }
- 
-     function hB(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
-       if (BB == OB) {
-         if (YB < 8) {
-           const BB = cB(GB, YB, DB, QB);
-           GB = BB.c, YB = BB.lc
+       static _DownsampleFace(WW, iW, OW, mW) {
+         const EW = WW instanceof Float32Array ? WW : Float32Array.from(WW),
+           NW = OW * OW * mW,
+           PW = new Float32Array(NW),
+           LW = iW / OW,
+           cW = 1 / (LW * LW);
+         for (let tW = 0; tW < OW; tW++) {
+           const WW = Math.floor(tW * LW),
+             NW = Math.floor((tW + 1) * LW);
+           for (let wW = 0; wW < OW; wW++) {
+             const ZW = Math.floor(wW * LW),
+               xW = Math.floor((wW + 1) * LW),
+               lW = (tW * OW + wW) * mW;
+             for (let OW = 0; OW < mW; OW++) {
+               let LW = 0;
+               for (let PW = WW; PW < NW; PW++)
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L241-L251` → after: `L87-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L87-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L87-L90) · [Before (L241-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L241-L251)

```diff
-         let BB = GB >> (YB -= 8);
-         if (BB = new Uint8Array([BB])[0], jB.value + BB > yB) return null;
-         const OB = oB[jB.value - 1];
-         for (; BB-- > 0;) oB[jB.value++] = OB
-       } else {
-         if (!(jB.value < yB)) return null;
-         oB[jB.value++] = BB
-       }
-       return {
-         c: GB,
-         lc: YB
+         if (WW instanceof Float32Array) return PW;
+         const wW = new(0, WW.constructor)(NW);
+         for (let tW = 0; tW < NW; tW++) wW[tW] = PW[tW] + .5 | 0;
+         return wW
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L253-L333` → after: `L92-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L92-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L92-L103) · [Before (L253-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L253-L333)

```diff
-     }
-     const aB = new Array(59);
- 
-     function eB(BB, OB, GB, YB, DB, QB) {
-       const oB = OB;
-       let jB = 0,
-         yB = 0;
-       for (; YB <= DB; YB++) {
-         if (oB.value - OB.value > GB) return;
-         let JB = EB(6, jB, yB, BB, oB);
-         const MB = JB.l;
-         if (jB = JB.c, yB = JB.lc, QB[YB] = MB, MB == RB) {
-           if (oB.value - OB.value > GB) throw new Error("Error in HufUnpackEncTable");
-           JB = EB(8, jB, yB, BB, oB);
-           let MB = JB.l + WB;
-           if (jB = JB.c, yB = JB.lc, YB + MB > DB + 1) throw new Error("Error in HufUnpackEncTable");
- ... (65 more removed lines; see GitHub link above)
+       static ConvertCubeMapToSphericalPolynomial(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const OW = iW > 0 ? this._NearestPow2Floor(iW) : 0;
+         if (OW > 0 && WW.size > OW) {
+           const iW = 5 === WW.format ? 4 : 3,
+             mW = ["right", "left", "up", "down", "front", "back"],
+             EW = {};
+           for (const NW of mW) EW[NW] = this._DownsampleFace(WW[NW], WW.size, OW, iW);
+           WW = {
+             ...WW,
+             ...EW,
+             size: OW
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L336-L360` → after: `L106-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L106-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L106-L132) · [Before (L336-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L336-L360)

```diff
-       }(MB, jB, yB, PB),
-       function(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
-         let JB = 0,
-           MB = 0;
-         const PB = oB,
-           zB = Math.trunc(YB.value + (DB + 7) / 8);
-         for (; YB.value < zB;) {
-           let DB = cB(JB, MB, GB, YB);
-           for (JB = DB.c, MB = DB.lc; MB >= lB;) {
-             const oB = OB[JB >> MB - lB & ZB];
-             if (oB.len) {
-               MB -= oB.len;
-               const BB = hB(oB.lit, QB, JB, MB, GB, YB, jB, yB, PB);
-               BB && (JB = BB.c, MB = BB.lc)
-             } else {
-               if (!oB.p) throw new Error("hufDecode issues");
- ... (9 more removed lines; see GitHub link above)
+         const mW = new NW.e;
+         let cW = 0;
+         const wW = 2 / WW.size,
+           tW = wW,
+           ZW = .5 * wW,
+           xW = ZW - 1;
+         for (let NW = 0; NW < 6; NW++) {
+           const iW = this._FileFaces[NW],
+             OW = WW[iW.name];
+           let lW = xW;
+           const AW = 5 === WW.format ? 4 : 3;
+           for (let NW = 0; NW < WW.size; NW++) {
+             let bW = xW;
+             for (let tW = 0; tW < WW.size; tW++) {
+               const xW = iW.worldAxisForFileX.scale(bW).add(iW.worldAxisForFileY.scale(lW)).add(iW.worldAxisForNormal);
+               xW.normalize();
+ ... (11 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L362-L363` → after: `L134-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L134-L136) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L362-L363)

```diff
-               }
-               if (OB == oB.lit) throw new Error("HufDecode issues")
+               } else UW = (0, EW.Clamp)(UW, 0, MW), kW = (0, EW.Clamp)(kW, 0, MW), sW = (0, EW.Clamp)(sW, 0, MW);
+               const KW = new LW.b(UW, kW, sW);
+               mW.addLight(xW, KW, jW), cW += jW, bW += wW
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L367-L397` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L141-L142) · [Before (L367-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L367-L397)

```diff
-         const pB = 8 - DB & 7;
-         for (JB >>= pB, MB -= pB; MB > 0;) {
-           const BB = OB[JB << lB - MB & ZB];
-           if (!BB.len) throw new Error("HufDecode issues");
-           {
-             MB -= BB.len;
-             const OB = hB(BB.lit, QB, JB, MB, GB, YB, jB, yB, PB);
-             OB && (JB = OB.c, MB = OB.lc)
-           }
-         }
-       }(MB, PB, BB, GB, JB, yB, QB, DB, {
-         value: 0
-       })
-     }
- 
-     function HB(BB) {
- ... (15 more removed lines; see GitHub link above)
+         const lW = 6 * (4 * Math.PI) / 6 / cW;
+         return mW.scaleInPlace(lW), mW.convertIncidentRadianceToIrradiance(), mW.convertIrradianceToLambertianRadiance(), NW.f.FromHarmonics(mW)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L401-L408` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L158-L159) · [Before (L401-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L401-L408)

```diff
-     function xB(BB, OB) {
-       const GB = HB(BB),
-         YB = HB(OB),
-         DB = GB - (YB >> 1) & wB;
-       return {
-         a: YB + DB - XB & wB,
-         b: DB
-       }
+     function wW(WW) {
+       return WW.charCodeAt(0) + (WW.charCodeAt(1) << 8) + (WW.charCodeAt(2) << 16) + (WW.charCodeAt(3) << 24)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L410-L436` → after: `L161-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L161-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L161-L188) · [Before (L410-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L410-L436)

```diff
- 
-     function tB(BB, OB, GB, YB, DB, QB, oB) {
-       const jB = oB < 16384,
-         yB = GB > DB ? DB : GB;
-       let JB, MB, PB = 1;
-       for (; PB <= yB;) PB <<= 1;
-       for (PB >>= 1, JB = PB, PB >>= 1; PB >= 1;) {
-         MB = 0;
-         const oB = MB + QB * (DB - JB),
-           yB = QB * PB,
-           zB = QB * JB,
-           lB = YB * PB,
-           pB = YB * JB;
-         let qB, ZB, NB, RB;
-         for (; MB <= oB; MB += zB) {
-           let DB = MB;
- ... (11 more removed lines; see GitHub link above)
+     const tW = wW("DXT1"),
+       ZW = wW("DXT3"),
+       xW = wW("DXT5"),
+       lW = wW("DX10");
+     class AW {
+       static GetDDSInfo(WW) {
+         const iW = new Int32Array(WW.buffer, WW.byteOffset, 31),
+           OW = new Int32Array(WW.buffer, WW.byteOffset, 35);
+         let mW = 1;
+         iW[2] & LW && (mW = Math.max(1, iW[7]));
+         const EW = iW[21],
+           NW = EW === lW ? OW[32] : 0;
+         let PW = 0;
+         switch (EW) {
+           case 113:
+             PW = 2;
+ ... (12 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L445-L452` → after: `L191-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L191-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L191-L201) · [Before (L445-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L445-L452)

```diff
-         if (DB & PB) {
-           let DB = MB;
-           const QB = MB + YB * (GB - JB);
-           for (; DB <= QB; DB += pB) {
-             const GB = DB + lB;
-             let YB;
-             YB = jB ? sB(BB[DB + OB], BB[GB + OB]) : xB(BB[DB + OB], BB[GB + OB]), qB = YB.a, BB[GB + OB] = YB.b, BB[DB + OB] = qB
-           }
+         return {
+           width: iW[4],
+           height: iW[3],
+           mipmapCount: mW,
+           isFourCC: 4 === (4 & iW[20]),
+           isRGB: 64 === (64 & iW[20]),
+           isLuminance: (iW[20] & cW) === cW,
+           isCube: 512 === (512 & iW[28]),
+           isCompressed: EW === tW || EW === ZW || EW === xW,
+           dxgiFormat: NW,
+           textureType: PW
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L456-L467` → after: `L204-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L204-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L204-L218) · [Before (L456-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L456-L467)

```diff
-       return MB
-     }
- 
-     function BO(BB) {
-       return new DataView(BB.array.buffer, BB.offset.value, BB.size)
-     }
- 
-     function OO(BB) {
-       const OB = BB.viewer.buffer.slice(BB.offset.value, BB.offset.value + BB.size),
-         GB = new Uint8Array(function(BB) {
-           let OB = BB.byteLength;
-           const GB = [];
+       static _GetHalfFloatAsFloatRGBAArrayBuffer(WW, iW, OW, mW, EW, NW) {
+         const LW = new Float32Array(mW),
+           cW = new Uint16Array(EW, OW);
+         let wW = 0;
+         for (let tW = 0; tW < iW; tW++)
+           for (let iW = 0; iW < WW; iW++) {
+             const OW = 4 * (iW + tW * WW);
+             LW[wW] = (0, PW.d)(cW[OW]), LW[wW + 1] = (0, PW.d)(cW[OW + 1]), LW[wW + 2] = (0, PW.d)(cW[OW + 2]), AW.StoreLODInAlphaChannel ? LW[wW + 3] = NW : LW[wW + 3] = (0, PW.d)(cW[OW + 3]), wW += 4
+           }
+         return LW
+       }
+       static _GetHalfFloatRGBAArrayBuffer(WW, iW, OW, mW, EW, NW) {
+         if (AW.StoreLODInAlphaChannel) {
+           const LW = new Uint16Array(mW),
+             cW = new Uint16Array(EW, OW);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L469-L480` → after: `L220-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L220-L223) · [Before (L469-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L469-L480)

```diff
-           const DB = new DataView(BB);
-           for (; OB > 0;) {
-             const BB = DB.getInt8(YB++);
-             if (BB < 0) {
-               const QB = -BB;
-               OB -= QB + 1;
-               for (let BB = 0; BB < QB; BB++) GB.push(DB.getUint8(YB++))
-             } else {
-               const QB = BB;
-               OB -= 2;
-               const oB = DB.getUint8(YB++);
-               for (let BB = 0; BB < QB + 1; BB++) GB.push(oB)
+           for (let OW = 0; OW < iW; OW++)
+             for (let iW = 0; iW < WW; iW++) {
+               const mW = 4 * (iW + OW * WW);
+               LW[wW] = cW[mW], LW[wW + 1] = cW[mW + 1], LW[wW + 2] = cW[mW + 2], LW[wW + 3] = (0, PW.k)(NW), wW += 4
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L521-L540` → after: `L227-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L227-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L227-L232) · [Before (L521-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L521-L540)

```diff
-       return new DataView(DB.buffer)
-     }
- 
-     function DO(BB) {
-       const OB = BB.viewer,
-         GB = {
-           value: BB.offset.value
-         },
-         YB = new Uint16Array(BB.width * BB.scanlineBlockSize * (BB.channels * BB.type)),
-         DB = new Uint8Array(zB);
-       let QB = 0;
-       const oB = new Array(BB.channels);
-       for (let JB = 0; JB < BB.channels; JB++) oB[JB] = {}, oB[JB].start = QB, oB[JB].end = oB[JB].start, oB[JB].nx = BB.width, oB[JB].ny = BB.lines, oB[JB].size = BB.type, QB += oB[JB].nx * oB[JB].ny * oB[JB].size;
-       const jB = kB(OB, GB),
-         yB = kB(OB, GB);
-       if (yB >= zB) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
- ... (4 more removed lines; see GitHub link above)
+         return new Uint16Array(EW, OW, mW)
+       }
+       static _GetFloatRGBAArrayBuffer(WW, iW, OW, mW, EW, NW) {
+         if (AW.StoreLODInAlphaChannel) {
+           const PW = new Float32Array(mW),
+             LW = new Float32Array(EW, OW);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L542-L544` → after: `L234-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L234-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L234-L238) · [Before (L542-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L542-L544)

```diff
-           for (let DB = 0; DB < PB; ++DB)(0 == DB || BB[DB >> 3] & 1 << (7 & DB)) && (OB[GB++] = DB);
-           const YB = GB - 1;
-           for (; GB < PB;) OB[GB++] = 0;
+           for (let OW = 0; OW < iW; OW++)
+             for (let iW = 0; iW < WW; iW++) {
+               const mW = 4 * (iW + OW * WW);
+               PW[cW] = LW[mW], PW[cW + 1] = LW[mW + 1], PW[cW + 2] = LW[mW + 2], PW[cW + 3] = NW, cW += 4
+             }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L656-L670` → after: `L243-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L243-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L243-L249) · [Before (L656-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L656-L670)

```diff
-       if (1 === DB.type) switch (YB) {
-         case QO.Float:
-           DB.getter = mB, DB.inputSize = JB;
-           break;
-         case QO.HalfFloat:
-           DB.getter = kB, DB.inputSize = JB
-       } else {
-         if (2 !== DB.type) throw new Error("Unsupported pixelType " + DB.type + " for " + BB.compression);
-         switch (YB) {
-           case QO.Float:
-             DB.getter = uB, DB.inputSize = jB;
-             break;
-           case QO.HalfFloat:
-             DB.getter = IB, DB.inputSize = jB
-         }
+       static _GetFloatAsHalfFloatRGBAArrayBuffer(WW, iW, OW, mW, EW, NW) {
+         const LW = new Uint16Array(mW),
+           cW = new Float32Array(EW, OW);
+         let wW = 0;
+         for (let tW = 0; tW < iW; tW++)
+           for (let iW = 0; iW < WW; iW++) LW[wW] = (0, PW.k)(cW[wW]), LW[wW + 1] = (0, PW.k)(cW[wW + 1]), LW[wW + 2] = (0, PW.k)(cW[wW + 2]), AW.StoreLODInAlphaChannel ? LW[wW + 3] = (0, PW.k)(NW) : LW[wW + 3] = (0, PW.k)(cW[wW + 3]), wW += 4;
+         return LW
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L672-L683` → after: `L251-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L251-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L251-L260) · [Before (L672-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L672-L683)

```diff
-       DB.blockCount = DB.height / DB.scanlineBlockSize;
-       for (let jB = 0; jB < DB.blockCount; jB++) KB(OB, GB);
-       const yB = DB.width * DB.height * DB.outputChannels;
-       switch (YB) {
-         case QO.Float:
-           DB.byteArray = new Float32Array(yB), DB.textureType = 1, oB && DB.byteArray.fill(1, 0, yB);
-           break;
-         case QO.HalfFloat:
-           DB.byteArray = new Uint16Array(yB), DB.textureType = 2, oB && DB.byteArray.fill(15360, 0, yB);
-           break;
-         default:
-           throw new Error("Unsupported type: " + YB)
+       static _GetFloatAsUIntRGBAArrayBuffer(WW, iW, OW, EW, NW, PW) {
+         const LW = new Uint8Array(EW),
+           cW = new Float32Array(NW, OW);
+         let wW = 0;
+         for (let tW = 0; tW < iW; tW++)
+           for (let iW = 0; iW < WW; iW++) {
+             const OW = 4 * (iW + tW * WW);
+             LW[wW] = 255 * (0, mW.Clamp)(cW[OW]), LW[wW + 1] = 255 * (0, mW.Clamp)(cW[OW + 1]), LW[wW + 2] = 255 * (0, mW.Clamp)(cW[OW + 2]), AW.StoreLODInAlphaChannel ? LW[wW + 3] = PW : LW[wW + 3] = 255 * (0, mW.Clamp)(cW[OW + 3]), wW += 4
+           }
+         return LW
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L685-L715` → after: `L262-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L262-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L262-L269) · [Before (L685-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L685-L715)

```diff
-       let MB = 0;
-       for (const jB of BB.channels) void 0 !== DB.decodeChannels[jB.name] && (DB.channelLineOffsets[jB.name] = MB * DB.width), MB += 2 * jB.pixelType;
-       return DB.bytesPerLine = DB.width * MB, DB.outLineWidth = DB.width * DB.outputChannels, "INCREASING_Y" === BB.lineOrder ? DB.scanOrder = BB => BB : DB.scanOrder = BB => DB.height - 1 - BB, 4 == DB.outputChannels ? (DB.format = 5, DB.linearSpace = !0) : (DB.format = 6, DB.li … [truncated]
-     }
- 
-     function JO(BB, OB, GB, YB) {
-       const DB = {
-         value: 0
-       };
-       for (let QB = 0; QB < BB.height / BB.scanlineBlockSize; QB++) {
-         const oB = nB(GB, YB) - OB.dataWindow.yMin;
-         BB.size = UB(GB, YB), BB.lines = oB + BB.scanlineBlockSize > BB.height ? BB.height - oB : BB.scanlineBlockSize;
-         const jB = BB.size < BB.lines * BB.bytesPerLine && BB.uncompress ? BB.uncompress(BB) : BO(BB);
-         YB.value += BB.size;
-         for (let GB = 0; GB < BB.scanlineBlockSize; GB++) {
-           const YB = QB * BB.scanlineBlockSize,
- ... (15 more removed lines; see GitHub link above)
+       static _GetHalfFloatAsUIntRGBAArrayBuffer(WW, iW, OW, EW, NW, LW) {
+         const cW = new Uint8Array(EW),
+           wW = new Uint16Array(NW, OW);
+         let tW = 0;
+         for (let ZW = 0; ZW < iW; ZW++)
+           for (let iW = 0; iW < WW; iW++) {
+             const OW = 4 * (iW + ZW * WW);
+             cW[tW] = 255 * (0, mW.Clamp)((0, PW.d)(wW[OW])), cW[tW + 1] = 255 * (0, mW.Clamp)((0, PW.d)(wW[OW + 1])), cW[tW + 2] = 255 * (0, mW.Clamp)((0, PW.d)(wW[OW + 2])), AW.StoreLODInAlphaChannel ? cW[tW + 3] = LW : cW[tW + 3] = 255 * (0, mW.Clamp)((0, PW.d)(wW[OW + 3])), tW … [truncated]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L717` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L271) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L717)

```diff
-         }
+         return cW
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L719-L723` → after: `L273-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L273-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L273-L282) · [Before (L719-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L719-L723)

```diff
-     }
-     jO.DefaultOutputType = QO.HalfFloat, jO.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
-     class MO {
-       constructor() {
-         this.supportCascades = !1
+       static _GetRGBAArrayBuffer(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
+         const wW = new Uint8Array(mW),
+           tW = new Uint8Array(EW, OW);
+         let ZW = 0;
+         for (let xW = 0; xW < iW; xW++)
+           for (let iW = 0; iW < WW; iW++) {
+             const OW = 4 * (iW + xW * WW);
+             wW[ZW] = tW[OW + NW], wW[ZW + 1] = tW[OW + PW], wW[ZW + 2] = tW[OW + LW], wW[ZW + 3] = tW[OW + cW], ZW += 4
+           }
+         return wW
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L725-L726` → after: `L284-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L284-L285) · [Before (L725-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L725-L726)

```diff
-       loadCubeData(BB, OB, GB, YB, DB) {
-         throw ".exr not supported in Cube."
+       static _ExtractLongWordOrder(WW) {
+         return 0 === WW || 255 === WW || -16777216 === WW ? 0 : 1 + AW._ExtractLongWordOrder(WW >> 8)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L728-L744` → after: `L287-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L287-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L287-L296) · [Before (L728-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L728-L744)

```diff
-       loadData(BB, OB, GB) {
-         const DB = new DataView(BB.buffer),
-           QB = {
-             value: 0
-           },
-           oB = rB(DB, QB);
-         yO(oB, DB, QB, jO.DefaultOutputType).then((BB => {
-           JO(BB, oB, DB, QB);
-           const YB = oB.dataWindow.xMax - oB.dataWindow.xMin + 1,
-             jB = oB.dataWindow.yMax - oB.dataWindow.yMin + 1;
-           GB(YB, jB, OB.generateMipMaps, !1, (() => {
-             const GB = OB.Lp();
-             OB.format = oB.format, OB.type = BB.textureType, OB.invertY = !1, OB._gammaSpace = !oB.linearSpace, BB.byteArray && GB._uploadDataToTextureDirectly(OB, BB.byteArray, 0, 0, void 0, !0)
-           }))
-         })).catch((BB => {
-           YB.b.Error("Failed to load EXR texture: ", BB)
- ... (1 more removed lines; see GitHub link above)
+       static _GetRGBArrayBuffer(WW, iW, OW, mW, EW, NW, PW, LW) {
+         const cW = new Uint8Array(mW),
+           wW = new Uint8Array(EW, OW);
+         let tW = 0;
+         for (let ZW = 0; ZW < iW; ZW++)
+           for (let iW = 0; iW < WW; iW++) {
+             const OW = 3 * (iW + ZW * WW);
+             cW[tW] = wW[OW + NW], cW[tW + 1] = wW[OW + PW], cW[tW + 2] = wW[OW + LW], tW += 3
+           }
+         return cW
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L746-L765` → after: `L298-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L298-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L298-L307) · [Before (L746-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L746-L765)

```diff
-     }
-     async function PO(BB) {
-       const OB = new DataView(BB),
-         GB = {
-           value: 0
-         },
-         DB = rB(OB, GB);
-       try {
-         const BB = await yO(DB, OB, GB, QO.Float);
-         return JO(BB, DB, OB, GB), BB.byteArray ? {
-           width: DB.dataWindow.xMax - DB.dataWindow.xMin + 1,
-           height: DB.dataWindow.yMax - DB.dataWindow.yMin + 1,
-           data: new Float32Array(BB.byteArray)
-         } : (YB.b.Error("Failed to decode EXR data: No byte array available."), {
-           width: 0,
-           height: 0,
- ... (4 more removed lines; see GitHub link above)
+       static _GetLuminanceArrayBuffer(WW, iW, OW, mW, EW) {
+         const NW = new Uint8Array(mW),
+           PW = new Uint8Array(EW, OW);
+         let LW = 0;
+         for (let cW = 0; cW < iW; cW++)
+           for (let iW = 0; iW < WW; iW++) {
+             const OW = iW + cW * WW;
+             NW[LW] = PW[OW], LW++
+           }
+         return NW
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L767-L770` → after: `L309-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L309-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/624.js#L309-L426) · [Before (L767-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/624.js#L767-L770)

```diff
-       return {
-         width: 0,
-         height: 0,
-         data: null
+       static UploadDDSLevels(WW, iW, OW, mW, PW, cW) {
+         let wW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
+           bW = arguments.length > 7 ? arguments[7] : void 0,
+           jW = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
+           UW = null;
+         mW.sphericalPolynomial && (UW = []);
+         const kW = !!WW.getCaps().s3tc;
+         iW.generateMipMaps = PW;
+         const sW = new Int32Array(OW.buffer, OW.byteOffset, 31);
+         let MW, KW, SW, YW, yW, TW, JW, hW = 0,
+           HW = 0,
+           nW = 1;
+         if (542327876 !== sW[0]) return void EW.b.Error("Invalid magic number in DDS header");
+         if (!mW.isFourCC && !mW.isRGB && !mW.isLuminance) return void EW.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
+         if (mW.isCompressed && !kW) return void EW.b.Error("Compressed textures are not supported on this platform.");
+         let uW = sW[22];
+ ... (102 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/625.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/625.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320)

#### 1. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/625.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/625.js#L2)

```diff
- export const ids = [625];
+ export const ids = [624, 625];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/625.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/625.js#L4-L6)

```diff
-   45181: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
+   53960: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       _DDSTextureLoader: () => NW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L8-L14` → after: `L8-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/625.js#L8-L40) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/625.js#L8-L14)

```diff
-     var YB = GB(40864);
-     const DB = "bumpVertex",
-       QB = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     var mW = OW(41506),
+       EW = OW(53948);
+     class NW {
+       constructor() {
+         this.supportCascades = !0
+       }
+       loadCubeData(WW, iW, OW, NW) {
+         const PW = iW.VA();
+         let LW, cW = !1,
+           wW = 1e3;
+         if (Array.isArray(WW))
+           for (let mW = 0; mW < WW.length; mW++) {
+             const OW = WW[mW];
+             LW = EW.DDSTools.GetDDSInfo(OW), iW.width = LW.width, iW.height = LW.height, cW = (LW.isRGB || LW.isLuminance || LW.mipmapCount > 1) && iW.generateMipMaps, PW._unpackFlipY(LW.isCompressed), EW.DDSTools.UploadDDSLevels(PW, iW, OW, LW, cW, 6, -1, mW), LW.isFourCC || 1 ! … [truncated]
+           } else {
+             const NW = WW;
+ ... (17 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L17` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/625.js#L43) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/625.js#L17)

```diff
-   45087: (BB, OB, GB) => {
+   53951: (WW, iW, OW) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L19` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/625.js#L45) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/625.js#L19)

```diff
-       c: () => oB
+       b: () => wW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L21-L27` → after: `L47-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L47-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/625.js#L47-L55) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/625.js#L21-L27)

```diff
-     var YB = GB(40864);
-     const DB = "bumpVertexDeclaration",
-       QB = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     var mW = OW(38241),
+       EW = OW(38285),
+       NW = OW(41506),
+       PW = OW(38249),
+       LW = OW(38372);
+     class cW {
+       constructor(WW, iW, OW, mW) {
+         this.name = WW, this.worldAxisForNormal = iW, this.worldAxisForFileX = OW, this.worldAxisForFileY = mW
+       }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L30` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/625.js#L186) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/625.js#L30)

```diff
-   45044: (BB, OB, GB) => {
+   53948: (WW, iW, OW) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L32` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/625.js#L188) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/625.js#L32)

```diff
-       d: () => oB
+       DDSTools: () => AW
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L34-L41` → after: `L190-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L190-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/625.js#L190-L198) · [Before (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/625.js#L34-L41)

```diff
-     var YB = GB(40864);
-     GB(45027), GB(45035);
-     const DB = "defaultUboDeclaration",
-       QB = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     var mW = OW(38285),
+       EW = OW(39911),
+       NW = OW(53951),
+       PW = OW(41586);
+     const LW = 131072,
+       cW = 131072;
+ 
+     function wW(WW) {
+       return WW.charCodeAt(0) + (WW.charCodeAt(1) << 8) + (WW.charCodeAt(2) << 16) + (WW.charCodeAt(3) << 24)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L43-L104` → after: `L200-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L200-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/625.js#L200-L466) · [Before (L43-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/625.js#L43-L104)

```diff
-   },
-   45016: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       defaultVertexShader: () => HB
-     });
-     var YB = GB(40864),
-       DB = GB(45024);
-     const QB = "defaultVertexDeclaration",
-       oB = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nuniform mat4 view;\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;\n#endif\n#ifdef O … [truncated]
-     YB.b.IncludesShadersStore[QB] || (YB.b.IncludesShadersStore[QB] = oB);
-     const jB = {
-       name: QB,
-       shader: oB
-     };
-     var yB = GB(45027),
-       JB = GB(45035),
- ... (46 more removed lines; see GitHub link above)
+     const tW = wW("DXT1"),
+       ZW = wW("DXT3"),
+       xW = wW("DXT5"),
+       lW = wW("DX10");
+     class AW {
+       static GetDDSInfo(WW) {
+         const iW = new Int32Array(WW.buffer, WW.byteOffset, 31),
+           OW = new Int32Array(WW.buffer, WW.byteOffset, 35);
+         let mW = 1;
+         iW[2] & LW && (mW = Math.max(1, iW[7]));
+         const EW = iW[21],
+           NW = EW === lW ? OW[32] : 0;
+         let PW = 0;
+         switch (EW) {
+           case 113:
+             PW = 2;
+ ... (251 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/626.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/626.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/626.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/626.js#L4-L6)

```diff
-   45157: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
+   53970: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       _ENVTextureLoader: () => TW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L8-L14` → after: `L8-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L8-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/626.js#L8-L28) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/626.js#L8-L14)

```diff
-     var YB = GB(40864);
-     const DB = "bakedVertexAnimation",
-       QB = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     var mW = OW(41458),
+       EW = OW(38241),
+       NW = OW(38285),
+       PW = OW(41506),
+       LW = OW(41371),
+       cW = OW(41511),
+       wW = (OW(41612), OW(53977)),
+       tW = OW(39911),
+       ZW = (OW(53986), OW(54011), OW(41582));
+     const xW = "image/png",
+       lW = [134, 22, 135, 150, 246, 214, 150, 54];
+ 
+     function AW(WW) {
+       const iW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
+       let OW = 0;
+       for (let PW = 0; PW < lW.length; PW++)
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L16-L27` → after: `L30-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/626.js#L30-L37) · [Before (L16-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/626.js#L16-L27)

```diff
-   },
-   45059: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "bakedVertexAnimationDeclaration",
-       QB = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+ 
+     function bW(WW) {
+       if (WW.version > 2) throw new Error(`Unsupported babylon environment map version "${WW.version}". Latest supported version is "2".`);
+       return 2 === WW.version ? WW : WW = {
+         ...WW,
+         version: 2,
+         imageType: xW
+       }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L29-L40` → after: `L39-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L39-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/626.js#L39-L52) · [Before (L29-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/626.js#L29-L40)

```diff
-   },
-   45054: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "bonesDeclaration",
-       QB = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+ 
+     function jW(WW, iW) {
+       const OW = (iW = bW(iW)).specular;
+       let mW = Math.log2(iW.width);
+       if (mW = Math.round(mW) + 1, OW.mipmaps.length !== 6 * mW) throw new Error(`Unsupported specular mipmaps number "${OW.mipmaps.length}"`);
+       const EW = new Array(mW);
+       for (let NW = 0; NW < mW; NW++) {
+         EW[NW] = new Array(6);
+         for (let mW = 0; mW < 6; mW++) {
+           const PW = OW.mipmaps[6 * NW + mW];
+           EW[NW][mW] = new Uint8Array(WW.buffer, WW.byteOffset + iW.binaryDataPosition + PW.position, PW.length)
+         }
+       }
+       return EW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L42-L53` → after: `L54-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L54-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/626.js#L54-L66) · [Before (L42-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/626.js#L42-L53)

```diff
-   },
-   45153: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "bonesVertex",
-       QB = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+ 
+     function UW(WW, iW) {
+       iW = bW(iW);
+       const OW = new Array(6),
+         mW = iW.irradiance?.irradianceTexture;
+       if (mW) {
+         if (6 !== mW.faces.length) throw new Error(`Incorrect irradiance texture faces number "${mW.faces.length}"`);
+         for (let EW = 0; EW < 6; EW++) {
+           const NW = mW.faces[EW];
+           OW[EW] = new Uint8Array(WW.buffer, WW.byteOffset + iW.binaryDataPosition + NW.position, NW.length)
+         }
+       }
+       return OW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L55-L66` → after: `L68-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L68-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/626.js#L68-L82) · [Before (L55-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/626.js#L55-L66)

```diff
-   },
-   45189: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "clipPlaneVertex",
-       QB = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+ 
+     function kW(WW, iW, OW) {
+       const mW = (OW = bW(OW)).specular;
+       if (!mW) return Promise.resolve([]);
+       WW._lodGenerationScale = mW.lodGenerationScale;
+       const NW = [],
+         PW = jW(iW, OW);
+       NW.push(MW(WW, PW, OW.imageType));
+       const LW = OW.irradiance?.irradianceTexture;
+       if (LW) {
+         const mW = UW(iW, OW);
+         let PW = null;
+         OW.irradiance?.irradianceTexture?.dominantDirection && (PW = EW.q.FromArray(OW.irradiance.irradianceTexture.dominantDirection)), NW.push(KW(WW, mW, LW.size, OW.imageType, PW))
+       }
+       return Promise.all(NW)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L68-L105` → after: `L84-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L84-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/626.js#L84-L104) · [Before (L68-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/626.js#L68-L105)

```diff
-   },
-   45090: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "clipPlaneVertexDeclaration",
-       QB = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45024: (BB, OB, GB) => {
-     GB.d(OB, {
- ... (22 more removed lines; see GitHub link above)
+     async function sW(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW) {
+       return await new Promise(((ZW, xW) => {
+         if (OW) {
+           const OW = iW.createTexture(null, !0, !0, null, 1, null, (WW => {
+             xW(WW)
+           }), WW);
+           mW?.onEffectCreatedObservable.addOnce((LW => {
+             LW.executeWhenCompiled((() => {
+               mW.externalTextureSamplerBinding = !0, mW.onApply = mW => {
+                 mW._bindTexture("textureSampler", OW), mW.setFloat2("scale", 1, iW._features.needsInvertingBitmap && WW instanceof ImageBitmap ? -1 : 1)
+               }, iW.scenes.length && (iW.scenes[0].postProcessManager.directRender([mW], wW, !0, NW, PW), iW.restoreDefaultFramebuffer(), OW.dispose(), URL.revokeObjectURL(EW), ZW())
+             }))
+           }))
+         } else {
+           if (iW._uploadImageToTexture(tW, WW, NW, PW), LW) {
+             const OW = cW[PW];
+ ... (5 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L107-L118` → after: `L106-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L106-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/626.js#L106-L109) · [Before (L107-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/626.js#L107-L118)

```diff
-   },
-   45096: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "fogVertexDeclaration",
-       QB = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     async function MW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xW;
+       const mW = WW.VA();
+       WW.format = 5, WW.type = 0, WW.generateMipMaps = !0, WW._cachedAnisotropicFilteringLevel = null, mW.updateTextureSamplingMode(3, WW), await SW(WW, iW, !0, OW), WW.isReady = !0
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L120-L131` → after: `L111-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L111-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/626.js#L111-L117) · [Before (L120-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/626.js#L120-L131)

```diff
-   },
-   45051: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "helperFunctions",
-       QB = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     async function KW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xW,
+         EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
+       const NW = WW.VA(),
+         PW = new LW.e(NW, 5),
+         wW = new cW.c(NW, PW);
+       WW._irradianceTexture = wW, wW._dominantDirection = EW, PW.isCube = !0, PW.format = 5, PW.type = 0, PW.generateMipMaps = !0, PW._cachedAnisotropicFilteringLevel = null, PW.generateMipMaps = !0, PW.width = OW, PW.height = OW, NW.updateTextureSamplingMode(3, PW), await SW(PW, … [truncated]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L133-L144` → after: `L119-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L119-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/626.js#L119-L213) · [Before (L133-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/626.js#L133-L144)

```diff
-   },
-   45064: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "instancesDeclaration",
-       QB = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     async function SW(WW, iW, EW) {
+       let PW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xW;
+       if (!(0, mW.i)(WW.width)) throw new Error("Texture size must be a power of two");
+       const tW = (0, NW.ILog2)(WW.width) + 1,
+         lW = WW.VA();
+       let AW = !1,
+         bW = !1,
+         jW = null,
+         UW = null,
+         kW = null;
+       const MW = lW.getCaps();
+       MW.textureLOD ? lW._features.supportRenderAndCopyToLodForFloatTextures ? MW.textureHalfFloatRender && MW.textureHalfFloatLinearFiltering ? (AW = !0, WW.type = 2) : MW.textureFloatRender && MW.textureFloatLinearFiltering && (AW = !0, WW.type = 1) : AW = !1 : (AW = !1, bW = E … [truncated]
+       let KW = 0;
+       if (AW) lW.isWebGPU ? (KW = 1, await OW.e(660).then((() => OW(64519)))) : await OW.e(642).then((() => OW(64523))), jW = new wW.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, lW, !1, void 0, WW.type, void 0, null, !1, void 0, KW), WW._isRGBD = !1, WW.invertY = !1, UW  … [truncated]
+         generateDepthBuffer: !1,
+         generateMipMaps: !0,
+ ... (79 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L146-L157` → after: `L215-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L215-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/626.js#L215-L220) · [Before (L146-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/626.js#L146-L157)

```diff
-   },
-   45148: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "instancesVertex",
-       QB = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+ 
+     function YW(WW, iW) {
+       const OW = (iW = bW(iW)).irradiance;
+       if (!OW) return;
+       const mW = new PW.f;
+       EW.q.FromArrayToRef(OW.x, 0, mW.x), EW.q.FromArrayToRef(OW.y, 0, mW.y), EW.q.FromArrayToRef(OW.z, 0, mW.z), EW.q.FromArrayToRef(OW.xx, 0, mW.xx), EW.q.FromArrayToRef(OW.yy, 0, mW.yy), EW.q.FromArrayToRef(OW.zz, 0, mW.zz), EW.q.FromArrayToRef(OW.yz, 0, mW.yz), EW.q.FromArray … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L159-L170` → after: `L222-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L222-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/626.js#L222-L245) · [Before (L159-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/626.js#L159-L170)

```diff
-   },
-   45105: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "lightVxFragmentDeclaration",
-       QB = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     var yW = OW(54015);
+     class TW {
+       constructor() {
+         this.supportCascades = !1
+       }
+       loadCubeData(WW, iW, OW, mW, EW) {
+         if (Array.isArray(WW)) return;
+         const NW = AW(WW);
+         if (NW) {
+           iW.width = NW.width, iW.height = NW.width;
+           try {
+             (0, yW.c)(), YW(iW, NW), kW(iW, WW, NW).then((() => {
+               iW.isReady = !0, iW.onLoadedObservable.notifyObservers(iW), iW.onLoadedObservable.clear(), mW && mW()
+             }), (WW => {
+               EW?.("Can not upload environment levels", WW)
+             }))
+ ... (8 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L173` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/626.js#L248) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/626.js#L173)

```diff
-   45114: (BB, OB, GB) => {
+   54015: (WW, iW, OW) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L177-L196` → after: `L252-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L252-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/626.js#L252-L274) · [Before (L177-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/626.js#L177-L196)

```diff
-     var YB = GB(40864);
-     const DB = "lightVxUboDeclaration",
-       QB = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45133: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "logDepthDeclaration",
-       QB = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
- ... (4 more removed lines; see GitHub link above)
+     var mW = OW(53951),
+       EW = OW(41511);
+     let NW = !1;
+ 
+     function PW() {
+       NW || (NW = !0, EW.c.prototype._sphericalPolynomialTargetSize = 0, EW.c.prototype.forceSphericalPolynomialsRecompute = function() {
+         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
+       }, Object.defineProperty(EW.c.prototype, "sphericalPolynomial", {
+         get: function() {
+           if (this._texture) {
+             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = mW.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+               this._texture._sphericalPolynomial = WW, this._texture._sphericalPolynomialComputed = !0
+             }))), null
+           }
+           return null
+ ... (7 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L199-L212` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/626.js#L277) · [Before (L199-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/626.js#L199-L212)

```diff
-   45213: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "logDepthVertex",
-       QB = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45077: (BB, OB, GB) => {
+   53951: (WW, iW, OW) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L216-L222` → after: `L281-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L281-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/626.js#L281-L289) · [Before (L216-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/626.js#L216-L222)

```diff
-     var YB = GB(40864);
-     const DB = "mainUVVaryingDeclaration",
-       QB = "#ifdef MAINUV{X}\nvarying vec2 vMainUV{X};\n#endif\n";
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     var mW = OW(38241),
+       EW = OW(38285),
+       NW = OW(41506),
+       PW = OW(38249),
+       LW = OW(38372);
+     class cW {
+       constructor(WW, iW, OW, mW) {
+         this.name = WW, this.worldAxisForNormal = iW, this.worldAxisForFileX = OW, this.worldAxisForFileY = mW
+       }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L224-L391` → after: `L291-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L291-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/626.js#L291-L416) · [Before (L224-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/626.js#L224-L391)

```diff
-   },
-   45035: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "meshUboDeclaration",
-       QB = "#ifdef WEBGL2\nuniform mat4 world;uniform float visibility;\n#else\nlayout(std140,column_major) uniform;uniform Mesh\n{mat4 world;float visibility;};\n#endif\n#define WORLD_UBO\n";
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45142: (BB, OB, GB) => {
-     GB.d(OB, {
- ... (152 more removed lines; see GitHub link above)
+     class wW {
+       static _NearestPow2Floor(WW) {
+         return WW <= 1 ? 1 : 1 << Math.floor(Math.log2(WW))
+       }
+       static ConvertCubeMapTextureToSphericalPolynomial(WW) {
+         if (!WW.isCube) return null;
+         WW.bD()?.VA().flushFramebuffer();
+         const iW = WW.getSize().width,
+           OW = WW._sphericalPolynomialTargetSize,
+           mW = OW > 0 ? this._NearestPow2Floor(OW) : 0,
+           EW = !WW.noMipmap && !0 === WW._texture?.generateMipMaps,
+           NW = mW > 0 && mW < iW && EW,
+           PW = NW ? Math.max(0, Math.round(Math.log2(iW / mW))) : 0,
+           LW = NW ? Math.max(1, Math.floor(iW / Math.pow(2, PW))) : iW,
+           cW = WW.readPixels(0, PW, void 0, !1),
+           wW = WW.readPixels(1, PW, void 0, !1);
+ ... (110 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L394` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/626.js#L420) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/626.js#L394)

```diff
-   45209: (BB, OB, GB) => {
+   53986: (WW, iW, OW) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L398-L404` → after: `L424-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L424-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/626.js#L424-L462) · [Before (L398-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/626.js#L398-L404)

```diff
-     var YB = GB(40864);
-     const DB = "vertexColorMixing",
-       QB = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvColor=vec4(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvColor*=colorUpdated;\n#else\nvColor.rgb*=colorUpdated.rgb;\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvColor*=instanceColor;\n#endif\n#e … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     var mW = OW(53977),
+       EW = OW(53995);
+     class NW {
+       static ExpandRGBDTexture(WW) {
+         const iW = WW._texture;
+         if (!iW || !WW.isRGBD) return;
+         const EW = iW.VA(),
+           NW = EW.getCaps(),
+           PW = iW.isReady;
+         let LW = !1;
+         NW.textureHalfFloatRender && NW.textureHalfFloatLinearFiltering ? (LW = !0, iW.type = 2) : NW.textureFloatRender && NW.textureFloatLinearFiltering && (LW = !0, iW.type = 1), LW && (iW.isReady = !1, iW._isRGBD = !1, iW.invertY = !1);
+         const cW = async () => {
+           const NW = EW.isWebGPU,
+             PW = NW ? 1 : 0;
+           iW.isReady = !1, NW ? await OW.e(660).then((() => OW(64519))) : await OW.e(642).then((() => OW(64523)));
+           const LW = new mW.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, EW, !1, void 0, iW.type, void 0, null, !1, void 0, PW);
+ ... (23 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/627.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/627.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953)

#### 1. `bundles/preprod.bloxd.io/chunks/js/627.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/627.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/627.js#L4-L6)

```diff
-   45225: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
+   53955: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       _IESTextureLoader: () => LW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/627.js` (Changed code · before: `L8-L14` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/627.js#L8-L11) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/627.js#L8-L14)

```diff
-     var YB = GB(40864);
-     const DB = "decalFragmentDeclaration",
-       QB = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     var mW = OW(38285);
+ 
+     function EW(WW) {
+       return WW.split(" ").filter((WW => "" !== WW)).map((WW => parseFloat(WW)))
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/627.js` (Changed code · before: `L16-L27` → after: `L13-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953) · [After (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/627.js#L13-L18) · [Before (L16-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/627.js#L16-L27)

```diff
-   },
-   45338: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "depthPrePass",
-       QB = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+ 
+     function NW(WW, iW, OW) {
+       for (; OW.length !== iW;) {
+         const iW = EW(WW.lines[WW.index++]);
+         OW.push(...iW)
+       }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/627.js` (Changed code · before: `L29-L40` → after: `L20-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953) · [After (L20-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/627.js#L20-L44) · [Before (L29-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/627.js#L29-L40)

```diff
-   },
-   45245: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "lightFragmentDeclaration",
-       QB = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+ 
+     function PW(WW, iW, OW) {
+       let EW = 0,
+         NW = 0,
+         PW = 0,
+         LW = 0,
+         cW = 0,
+         wW = 0;
+       for (let mW = 0; mW < WW.numberOfHorizontalAngles - 1; mW++)
+         if (OW < WW.horizontalAngles[mW + 1] || mW === WW.numberOfHorizontalAngles - 2) {
+           NW = mW, PW = WW.horizontalAngles[mW], LW = WW.horizontalAngles[mW + 1];
+           break
+         } for (let mW = 0; mW < WW.numberOfVerticalAngles - 1; mW++)
+         if (iW < WW.verticalAngles[mW + 1] || mW === WW.numberOfVerticalAngles - 2) {
+           EW = mW, cW = WW.verticalAngles[mW], wW = WW.verticalAngles[mW + 1];
+           break
+ ... (9 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/627.js` (Changed code · before: `L42-L183` → after: `L46-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953) · [After (L46-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/627.js#L46-L100) · [Before (L42-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/627.js#L42-L183)

```diff
-   },
-   45252: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "lightUboDeclaration",
-       QB = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45257: (BB, OB, GB) => {
-     GB.d(OB, {
- ... (126 more removed lines; see GitHub link above)
+     class LW {
+       constructor() {
+         this.supportCascades = !1
+       }
+       loadCubeData() {
+         throw ".ies not supported in Cube."
+       }
+       loadData(WW, iW, OW) {
+         const mW = function(WW) {
+           const iW = {
+               lines: new TextDecoder("utf-8").decode(WW).split("\n"),
+               index: 0
+             },
+             OW = {
+               version: iW.lines[0],
+               candelaValues: [],
+ ... (39 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/628.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/628.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670)

#### 1. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L4-L252` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/628.js#L4) · [Before (L4-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/628.js#L4-L252)

```diff
-   45326: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "bumpFragment",
-       QB = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45301: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
- ... (233 more removed lines; see GitHub link above)
+   53968: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L254` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/628.js#L6) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/628.js#L254)

```diff
-       geometryPixelShader: () => uB
+       _BasisTextureLoader: () => kW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L256-L261` → after: `L8-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L8-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/628.js#L8-L135) · [Before (L256-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/628.js#L256-L261)

```diff
-     var YB = GB(40864),
-       DB = GB(45227),
-       QB = GB(45308);
-     const oB = "mrtFragmentDeclaration",
-       jB = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#ifdef MESH_BLEND_TAG\n#if {X}>0\n#if MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if {X}>1\n#if MESH … [truncated]
-     YB.b.IncludesShadersStore[oB] || (YB.b.IncludesShadersStore[oB] = jB);
+     var mW, EW = OW(41620),
+       NW = OW(39911),
+       PW = OW(41992),
+       LW = OW(41371);
+ 
+     function cW() {
+       const WW = 0,
+         iW = 1,
+         OW = 2,
+         mW = 3,
+         EW = 6,
+         NW = 8,
+         PW = 9,
+         LW = 10,
+         cW = 14;
+       let wW = null;
+ ... (112 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L263-L264` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/628.js#L137-L138) · [Before (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/628.js#L263-L264)

```diff
-       name: oB,
-       shader: jB
+       JSModuleURL: `${EW.f._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
+       WasmModuleURL: `${EW.f._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L266-L290` → after: `L140-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L140-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/628.js#L140-L284) · [Before (L266-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/628.js#L266-L290)

```diff
-     var JB = GB(45298),
-       MB = GB(45266),
-       PB = GB(45301),
-       zB = GB(45051),
-       lB = GB(64134),
-       pB = GB(64329),
-       qB = GB(45027),
-       ZB = GB(64115),
-       NB = GB(64338),
-       RB = GB(64182),
-       WB = GB(45269),
-       AB = GB(64343),
-       VB = GB(64350),
-       SB = GB(45323),
-       nB = GB(45326),
-       UB = GB(64361),
- ... (9 more removed lines; see GitHub link above)
+     let tW = null,
+       ZW = null,
+       xW = 0;
+     const lW = async () => (tW || (tW = new Promise(((WW, iW) => {
+       ZW ? WW(ZW) : EW.f.LoadFileAsync(EW.f.GetBabylonScriptURL(wW.WasmModuleURL)).then((OW => {
+         if ("function" !== typeof URL) return iW("Basis transcoder requires an environment with a URL constructor");
+         const mW = URL.createObjectURL(new Blob([`(${cW})()`], {
+           type: "application/javascript"
+         }));
+         ZW = new Worker(mW), async function(WW, iW, OW) {
+           return await new Promise(((mW, NW) => {
+             const PW = iW => {
+               "init" === iW.data.action ? (WW.removeEventListener("message", PW), mW(WW)) : "error" === iW.data.action && NW(iW.data.error || "error initializing worker")
+             };
+             WW.addEventListener("message", PW), WW.postMessage({
+               action: "init",
+ ... (129 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/629.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/629.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca)

#### 1. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L4)

```diff
-   45157: (BB, OB, GB) => {
+   53997: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L6)

```diff
-       d: () => oB
+       e: () => UW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L8-L14` → after: `L8-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L8-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L8-L341) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L8-L14)

```diff
-     var YB = GB(40864);
-     const DB = "bakedVertexAnimation",
-       QB = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     var mW = OW(38276),
+       EW = OW(38241),
+       NW = OW(41992),
+       PW = OW(41665),
+       LW = OW(41458),
+       cW = OW(39911),
+       wW = OW(41649),
+       tW = OW(41675),
+       ZW = OW(38253),
+       xW = OW(41420),
+       lW = OW(41628),
+       AW = OW(41710);
+     class bW {
+       get renderList() {
+         return this._renderList
+       }
+ ... (318 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L16-L27` → after: `L343-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L343-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L343-L742) · [Before (L16-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L16-L27)

```diff
-   },
-   45059: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "bakedVertexAnimationDeclaration",
-       QB = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     bW.REFRESHRATE_RENDER_ONCE = 0, bW.REFRESHRATE_RENDER_ONEVERYFRAME = 1, bW.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
+     var jW = OW(41415);
+     class UW extends NW.h {
+       get renderListPredicate() {
+         return this._objectRenderer.renderListPredicate
+       }
+       set renderListPredicate(WW) {
+         this._objectRenderer.renderListPredicate = WW
+       }
+       get renderList() {
+         return this._objectRenderer.renderList
+       }
+       set renderList(WW) {
+         this._objectRenderer.renderList = WW
+       }
+       get particleSystemList() {
+ ... (384 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L30` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L747) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L30)

```diff
-   45054: (BB, OB, GB) => {
+   53980: (WW, iW, OW) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L32` → after: `L749-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L749-L750) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L32)

```diff
-       b: () => oB
+       d: () => wW,
+       g: () => tW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L34-L37` → after: `L752-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L752-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L752-L756) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L34-L37)

```diff
-     var YB = GB(40864);
-     const DB = "bonesDeclaration",
-       QB = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     var mW = OW(41660),
+       EW = OW(39271),
+       NW = OW(38276),
+       PW = OW(41389),
+       LW = OW(41840);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L39-L40` → after: `L758-L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L758-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L758-L810) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L39-L40)

```diff
-       name: DB,
-       shader: QB
+       positions: [1, 1, -1, 1, -1, -1, 1, -1],
+       indices: [0, 1, 2, 0, 2, 3]
+     };
+     class wW {
+       constructor(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cW;
+         this._fullscreenViewport = new EW.e(0, 0, 1, 1);
+         const OW = iW.positions ?? cW.positions,
+           NW = iW.indices ?? cW.indices;
+         this.engine = WW, this._vertexBuffers = {
+           [mW.k.PositionKind]: new mW.k(WW, OW, mW.k.PositionKind, !1, !1, 2)
+         }, this._indexBuffer = WW.createIndexBuffer(NW), this._indexBufferLength = NW.length, this._onContextRestoredObserver = WW.DA.add((() => {
+           this._indexBuffer = WW.createIndexBuffer(NW);
+           for (const WW in this._vertexBuffers) {
+             this._vertexBuffers[WW]._rebuild()
+           }
+ ... (37 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L42-L53` → after: `L812-L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L812-L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L812-L932) · [Before (L42-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L42-L53)

```diff
-   },
-   45153: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "bonesVertex",
-       QB = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     class tW {
+       static RegisterShaderCodeProcessing(WW, iW) {
+         iW ? tW._CustomShaderCodeProcessing[WW ?? ""] = iW : delete tW._CustomShaderCodeProcessing[WW ?? ""]
+       }
+       static _GetShaderCodeProcessing(WW) {
+         return tW._CustomShaderCodeProcessing[WW] ?? tW._CustomShaderCodeProcessing[""]
+       }
+       get name() {
+         return this.options.name
+       }
+       set name(WW) {
+         this.options.name = WW
+       }
+       isReady() {
+         return this._drawWrapper.effect?.isReady() ?? !1
+       }
+ ... (105 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L56-L58` → after: `L936-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L936-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L936-L944) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L56-L58)

```diff
-   45181: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
+   54011: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       Dispose: () => kW,
+       DumpData: () => UW,
+       DumpDataAsync: () => jW,
+       DumpFramebuffer: () => bW,
+       DumpTools: () => sW,
+       EncodeImageAsync: () => AW,
+       RegisterDumpTools: () => KW
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L60-L66` → after: `L946-L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L946-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L946-L993) · [Before (L60-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L60-L66)

```diff
-     var YB = GB(40864);
-     const DB = "bumpVertex",
-       QB = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     var mW = OW(41516),
+       EW = OW(53980),
+       NW = OW(41620),
+       PW = OW(38285),
+       LW = OW(38270),
+       cW = OW(39911),
+       wW = OW(41574),
+       tW = OW(41519);
+     let ZW = null;
+     async function xW() {
+       return ZW || (ZW = async function() {
+         const WW = LW.d.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
+         WW instanceof OffscreenCanvas && cW.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
+         const {
+           ThinEngine: iW
+         } = await Promise.resolve().then((() => OW(41384)));
+ ... (32 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L68-L79` → after: `L995-L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L995-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L995-L1036) · [Before (L68-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L68-L79)

```diff
-   },
-   45189: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "clipPlaneVertex",
-       QB = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     let lW = (() => {
+       var WW;
+       let iW, OW = [];
+       return WW = class {
+         static async EncodeImageAsync(WW, iW, OW, mW, EW, PW) {
+           const LW = await xW(),
+             cW = LW.dumpEngine;
+           cW.engine.setSize(iW, OW, !0);
+           const wW = cW.engine.createRawTexture(WW, iW, OW, 5, !1, !EW, 1);
+           return cW.renderer.setViewport(), cW.renderer.applyEffectWrapper(cW.wrapper), cW.wrapper.effect._bindTexture("textureSampler", wW), cW.renderer.draw(), wW.dispose(), await new Promise(((WW, iW) => {
+             NW.f.ToBlob(LW.canvas, (OW => {
+               OW ? WW(OW) : iW(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
+             }), mW, PW)
+           }))
+         }
+       }, (() => {
+ ... (26 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L81-L92` → after: `L1038-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L1038-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L1038-L1056) · [Before (L81-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L81-L92)

```diff
-   },
-   45090: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "clipPlaneVertexDeclaration",
-       QB = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     async function jW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
+         EW = arguments.length > 4 ? arguments[4] : void 0,
+         LW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         tW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         ZW = arguments.length > 7 ? arguments[7] : void 0;
+       if (OW instanceof Float32Array) {
+         const WW = new Uint8Array(OW.length);
+         let iW = OW.length;
+         for (; iW--;) {
+           const mW = OW[iW];
+           WW[iW] = Math.round(255 * (0, PW.Clamp)(mW))
+         }
+         OW = WW
+       }
+       const xW = await lW.EncodeImageAsync(OW, WW, iW, mW, LW, ZW);
+ ... (3 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L94-L105` → after: `L1058-L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L1058-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L1058-L1063) · [Before (L94-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L94-L105)

```diff
-   },
-   64117: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "harmonicsFunctions",
-       QB = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+ 
+     function UW(WW, iW, OW, mW) {
+       let EW = arguments.length > 5 ? arguments[5] : void 0;
+       void 0 !== EW || mW || (EW = ""), jW(WW, iW, OW, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", EW, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.len … [truncated]
+         mW && mW(WW)
+       }))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L107-L118` → after: `L1065-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L1065-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L1065-L1069) · [Before (L107-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L107-L118)

```diff
-   },
-   45064: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "instancesDeclaration",
-       QB = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+ 
+     function kW() {
+       ZW && (ZW?.then((WW => {
+         WW.canvas instanceof HTMLCanvasElement && WW.canvas.remove(), WW.dumpEngine && (WW.dumpEngine.engine.dispose(), WW.dumpEngine.renderer.dispose(), WW.dumpEngine.wrapper.dispose())
+       })), ZW = null)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L130-L131` → after: `L1072-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L1072-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L1072-L1082) · [Before (L130-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L130-L131)

```diff
-       name: DB,
-       shader: QB
+       DumpData: UW,
+       DumpDataAsync: jW,
+       DumpFramebuffer: bW,
+       Dispose: kW
+     };
+     let MW = !1;
+ 
+     function KW() {
+       if (MW) return;
+       MW = !0;
+       NW.f.DumpData = UW, NW.f.DumpDataAsync = jW, NW.f.DumpFramebuffer = bW
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L134` → after: `L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L1085) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L134)

```diff
-   45142: (BB, OB, GB) => {
+   53995: (WW, iW, OW) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L136` → after: `L1087-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L1087-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L1087-L1089) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L136)

```diff
-       e: () => oB
+       c: () => lW,
+       f: () => AW,
+       i: () => bW
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L138-L144` → after: `L1091-L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L1091-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L1091-L1202) · [Before (L138-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L138-L144)

```diff
-     var YB = GB(40864);
-     const DB = "morphTargetsVertex",
-       QB = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (int i=0; i<NUM_MORPH_INFLUENCERS; i++) {if (float(i)>=morphTargetCount) break;vertexID=float(gl_VertexID)*morphTargetTextureInfo.x;\n#ifdef MORPHTARGETS_POSITION\npositionUpdated+=(readVector3FromRawSa … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     var mW = OW(41992),
+       EW = OW(53997),
+       NW = OW(41516),
+       PW = OW(53977),
+       LW = OW(41538),
+       cW = OW(54003),
+       wW = OW(41519);
+     class tW extends PW.c {
+       getClassName() {
+         return "PassPostProcess"
+       }
+       constructor(WW, iW) {
+         let OW = arguments.length > 4 ? arguments[4] : void 0;
+         const mW = {
+           size: "number" === typeof iW ? iW : void 0,
+           camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+ ... (96 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L146-L157` → after: `L1204-L1366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR1204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L1204-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L1204-L1366) · [Before (L146-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L146-L157)

```diff
-   },
-   45125: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "morphTargetsVertexDeclaration",
-       QB = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute vec3 position{X};\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute vec3 normal{X};\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute vec3 tangent{X};\n#endif\n#ifdef MORPHTARGETS_UV … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     async function AW(WW, iW, NW) {
+       let LW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+         cW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
+         wW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         tW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
+       await async function(WW) {
+         if (WW.isReady()) return;
+         if (WW.loadingError) throw new Error(WW.errorObject?.message || `Texture ${WW.name} errored while loading.`);
+         const iW = WW.onLoadObservable;
+         if (iW) return await new Promise((WW => iW.addOnce((() => WW()))));
+         const OW = WW._texture?.onLoadedObservable;
+         if (OW) return await new Promise((WW => OW.addOnce((() => WW()))));
+         throw new Error(`Cannot determine readiness of texture ${WW.name}.`)
+       }(WW);
+       const xW = WW.getInternalTexture(),
+         lW = WW.is3D || !!xW?.is3D,
+ ... (147 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L169-L170` → after: `L1369-L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L1369-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L1369-L1392) · [Before (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L169-L170)

```diff
-       name: DB,
-       shader: QB
+       CreateResizedCopy: function(WW, iW, OW) {
+         let NW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         const PW = WW.bD(),
+           LW = PW.VA(),
+           cW = new EW.e("resized" + WW.name, {
+             width: iW,
+             height: OW
+           }, PW, !WW.noMipmap, !0, WW._texture.type, !1, WW.samplingMode, !1);
+         cW.wrapU = WW.wrapU, cW.wrapV = WW.wrapV, cW.uOffset = WW.uOffset, cW.vOffset = WW.vOffset, cW.uScale = WW.uScale, cW.vScale = WW.vScale, cW.uAng = WW.uAng, cW.vAng = WW.vAng, cW.wAng = WW.wAng, cW.coordinatesIndex = WW.coordinatesIndex, cW.level = WW.level, cW.anisotropi … [truncated]
+         const wW = new tW("pass", 1, null, NW ? mW.h.BILINEAR_SAMPLINGMODE : mW.h.NEAREST_SAMPLINGMODE, LW, !1, 0);
+         return wW.externalTextureSamplerBinding = !0, wW.onEffectCreatedObservable.addOnce((iW => {
+           iW.executeWhenCompiled((() => {
+             wW.onApply = function(iW) {
+               iW.setTexture("textureSampler", WW)
+             };
+             const iW = cW.renderTarget;
+ ... (8 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L173` → after: `L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L1395) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L173)

```diff
-   45118: (BB, OB, GB) => {
+   53977: (WW, iW, OW) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L177-L183` → after: `L1399-L1952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR1399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L1399-L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L1399-L1952) · [Before (L177-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L177-L183)

```diff
-     var YB = GB(40864);
-     const DB = "morphTargetsVertexGlobalDeclaration",
-       QB = "#ifdef MORPHTARGETS\nuniform float morphTargetInfluences[NUM_MORPH_INFLUENCERS];\n#ifdef MORPHTARGETS_TEXTURE \nuniform float morphTargetTextureIndices[NUM_MORPH_INFLUENCERS];uniform vec3 morphTargetTextureInfo;uniform highp sampler2DArray morphTargets;vec3 readVector … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     var mW = OW(41516),
+       EW = OW(41628),
+       NW = OW(38276),
+       PW = OW(38241),
+       LW = OW(41389),
+       cW = OW(41519),
+       wW = OW(41538),
+       tW = OW(38299),
+       ZW = OW(41423),
+       xW = OW(41458),
+       lW = OW(53980);
+     let AW = (() => {
+         var WW;
+         let iW, LW, ZW, AW, bW, UW, kW, sW, MW, KW, SW, YW, yW, TW, JW, hW, HW = [],
+           nW = [],
+           uW = [],
+ ... (538 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L186` → after: `L1955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR1955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L1955) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L186)

```diff
-   45027: (BB, OB, GB) => {
+   54003: (WW, iW, OW) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L188` → after: `L1957-L1958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L1957-L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L1957-L1958) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L188)

```diff
-       d: () => oB
+       e: () => PW,
+       h: () => NW
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L190-L196` → after: `L1960-L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L1960-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L1960-L1977) · [Before (L190-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L190-L196)

```diff
-     var YB = GB(40864);
-     const DB = "sceneUboDeclaration",
-       QB = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     var mW = OW(53980),
+       EW = OW(38270);
+     class NW extends mW.g {
+       _gatherImports(WW, iW) {
+         WW ? (this._webGPUReady = !0, iW.push(Promise.all([OW.e(688).then((() => OW(64585)))]))) : iW.push(Promise.all([OW.e(689).then((() => OW(64588)))])), super._gatherImports(WW, iW)
+       }
+       constructor(WW) {
+         let iW = arguments.length > 2 ? arguments[2] : void 0;
+         const OW = {
+           name: WW,
+           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || EW.d.LastCreatedEngine,
+           useShaderStore: !0,
+           useAsPostProcess: !0,
+           fragmentShader: NW.FragmentUrl,
+           ...iW
+         };
+ ... (2 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L198-L240` → after: `L1979-L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR1979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L1979-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/629.js#L1979-L2018) · [Before (L198-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/629.js#L198-L240)

```diff
-   },
-   64416: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       geometryVertexShader: () => KB
-     });
-     var YB = GB(40864),
-       DB = GB(45054),
-       QB = GB(45059),
-       oB = GB(45118),
-       jB = GB(45125),
-       yB = GB(45064);
-     const JB = "geometryVertexDeclaration",
-       MB = "uniform mat4 viewProjection;uniform mat4 view;";
-     YB.b.IncludesShadersStore[JB] || (YB.b.IncludesShadersStore[JB] = MB);
-     const PB = {
-       name: JB,
- ... (27 more removed lines; see GitHub link above)
+     NW.FragmentUrl = "pass";
+     class PW extends mW.g {
+       _gatherImports(WW, iW) {
+         WW ? (this._webGPUReady = !0, iW.push(Promise.all([OW.e(690).then((() => OW(64592)))]))) : iW.push(Promise.all([OW.e(691).then((() => OW(64598)))])), super._gatherImports(WW, iW)
+       }
+       constructor(WW) {
+         super({
+           ...arguments.length > 2 ? arguments[2] : void 0,
+           name: WW,
+           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || EW.d.LastCreatedEngine,
+           useShaderStore: !0,
+           useAsPostProcess: !0,
+           fragmentShader: PW.FragmentUrl,
+           defines: "#define POSITIVEX"
+         }), this._face = 0
+       }
+ ... (24 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/630.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/630.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/630.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1c) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/630.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/630.js#L4-L6)

```diff
-   45044: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
+   54017: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       _HDRTextureLoader: () => tW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/630.js` (Changed code · before: `L8-L15` → after: `L8-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1c) · [After (L8-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/630.js#L8-L74) · [Before (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/630.js#L8-L15)

```diff
-     var YB = GB(40864);
-     GB(45027), GB(45035);
-     const DB = "defaultUboDeclaration",
-       QB = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     var mW = OW(38241);
+     class EW {
+       static ConvertPanoramaToCubemap(WW, iW, OW, mW) {
+         let EW, NW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           PW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+         if (!WW) throw "ConvertPanoramaToCubemap: input cannot be null";
+         if (WW.length != iW * OW * 3) {
+           if (WW.length != iW * OW * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
+           EW = 4
+         } else EW = 3;
+         return {
+           front: this.CreateCubemapTexture(mW, this.FACE_FRONT, WW, iW, OW, NW, PW, EW),
+           back: this.CreateCubemapTexture(mW, this.FACE_BACK, WW, iW, OW, NW, PW, EW),
+           left: this.CreateCubemapTexture(mW, this.FACE_LEFT, WW, iW, OW, NW, PW, EW),
+           right: this.CreateCubemapTexture(mW, this.FACE_RIGHT, WW, iW, OW, NW, PW, EW),
+           up: this.CreateCubemapTexture(mW, this.FACE_UP, WW, iW, OW, NW, PW, EW),
+ ... (51 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/630.js` (Changed code · before: `L17-L90` → after: `L76-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1cR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1c) · [After (L76-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/630.js#L76-L171) · [Before (L17-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/630.js#L17-L90)

```diff
-   },
-   45220: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       defaultPixelShader: () => tB
-     });
-     var YB = GB(40864),
-       DB = GB(45225);
-     const QB = "defaultFragmentDeclaration",
-       oB = "uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform vec2 vAmbientInfos;\n#endif\ … [truncated]
-     YB.b.IncludesShadersStore[QB] || (YB.b.IncludesShadersStore[QB] = oB);
-     const jB = {
-       name: QB,
-       shader: oB
-     };
-     var yB = GB(45027),
-       JB = GB(45035),
- ... (58 more removed lines; see GitHub link above)
+ 
+     function NW(WW, iW, OW, mW, EW, NW) {
+       EW > 0 ? (EW = function(WW, iW) {
+         return iW > 1023 ? WW * Math.pow(2, 1023) * Math.pow(2, iW - 1023) : iW < -1074 ? WW * Math.pow(2, -1074) * Math.pow(2, iW + 1074) : WW * Math.pow(2, iW)
+       }(1, EW - 136), WW[NW + 0] = iW * EW, WW[NW + 1] = OW * EW, WW[NW + 2] = mW * EW) : (WW[NW + 0] = 0, WW[NW + 1] = 0, WW[NW + 2] = 0)
+     }
+ 
+     function PW(WW, iW) {
+       let OW, mW = "";
+       for (let EW = iW; EW < WW.length - iW && (OW = String.fromCharCode(WW[EW]), "\n" != OW); EW++) mW += OW;
+       return mW
+     }
+ 
+     function LW(WW) {
+       let iW = PW(WW, 0);
+       if ("#" != iW[0] || "?" != iW[1]) throw "Bad HDR Format.";
+ ... (80 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/631.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/631.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94)

#### 1. `bundles/preprod.bloxd.io/chunks/js/631.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/631.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/631.js#L4-L6)

```diff
-   45323: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => oB
+   54022: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       _KTXTextureLoader: () => AW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/631.js` (Changed code · before: `L8-L14` → after: `L8-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94) · [After (L8-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/631.js#L8-L391) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/631.js#L8-L14)

```diff
-     var YB = GB(40864);
-     const DB = "clipPlaneFragment",
-       QB = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
+     var mW = OW(39911);
+     class EW {
+       constructor(WW, iW) {
+         if (this.data = WW, this.isInvalid = !1, !EW.IsValid(WW)) return this.isInvalid = !0, void mW.b.Error("texture missing KTX identifier");
+         const OW = Uint32Array.BYTES_PER_ELEMENT,
+           NW = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * OW),
+           PW = 67305985 === NW.getUint32(0, !0);
+         return this.glType = NW.getUint32(1 * OW, PW), this.glTypeSize = NW.getUint32(2 * OW, PW), this.glFormat = NW.getUint32(3 * OW, PW), this.glInternalFormat = NW.getUint32(4 * OW, PW), this.glBaseInternalFormat = NW.getUint32(5 * OW, PW), this.pixelWidth = NW.getUint32(6 *  … [truncated]
+       }
+       uploadLevels(WW, iW) {
+         switch (this.loadType) {
+           case EW.COMPRESSED_2D:
+             this._upload2DCompressedLevels(WW, iW);
+           case EW.TEX_2D:
+           case EW.COMPRESSED_3D:
+           case EW.TEX_3D:
+ ... (368 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/631.js` (Changed code · before: `L17` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/631.js#L394) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/631.js#L17)

```diff
-   45308: (BB, OB, GB) => {
+   54026: (WW, iW, OW) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/631.js` (Changed code · before: `L21-L145` → after: `L398-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94) · [After (L398-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/631.js#L398-L457) · [Before (L21-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/631.js#L21-L145)

```diff
-     var YB = GB(40864);
-     const DB = "clipPlaneFragmentDeclaration",
-       QB = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45360: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "fogFragment",
-       QB = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
- ... (109 more removed lines; see GitHub link above)
+     class mW {
+       constructor(WW) {
+         this._pendingActions = new Array, this._workerInfos = WW.map((WW => ({
+           workerPromise: Promise.resolve(WW),
+           idle: !0
+         })))
+       }
+       dispose() {
+         for (const WW of this._workerInfos) WW.workerPromise.then((WW => {
+           WW.terminate()
+         }));
+         this._workerInfos.length = 0, this._pendingActions.length = 0
+       }
+       push(WW) {
+         this._executeOnIdleWorker(WW) || this._pendingActions.push(WW)
+       }
+ ... (44 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/632.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/632.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/632.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/632.js#L4-L6)

```diff
-   45323: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => oB
+   54033: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       _TGATextureLoader: () => LW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L8-L11` → after: `L8-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L8-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/632.js#L8-L86) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/632.js#L8-L11)

```diff
-     var YB = GB(40864);
-     const DB = "clipPlaneFragment",
-       QB = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     var mW = OW(39911);
+ 
+     function EW(WW) {
+       let iW = 0;
+       return {
+         id_length: WW[iW++],
+         colormap_type: WW[iW++],
+         image_type: WW[iW++],
+         colormap_index: WW[iW++] | WW[iW++] << 8,
+         colormap_length: WW[iW++] | WW[iW++] << 8,
+         colormap_size: WW[iW++],
+         origin: [WW[iW++] | WW[iW++] << 8, WW[iW++] | WW[iW++] << 8],
+         width: WW[iW++] | WW[iW++] << 8,
+         height: WW[iW++] | WW[iW++] << 8,
+         pixel_size: WW[iW++],
+         flags: WW[17]
+ ... (63 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L13-L112` → after: `L88-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L88-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/632.js#L88-L99) · [Before (L13-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/632.js#L13-L112)

```diff
-       name: DB,
-       shader: QB
-     }
-   },
-   45308: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "clipPlaneFragmentDeclaration",
-       QB = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
- ... (84 more removed lines; see GitHub link above)
+       GetTGAHeader: EW,
+       UploadContent: NW,
+       _getImageData8bits: function(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
+         const wW = OW,
+           tW = iW,
+           ZW = WW.width,
+           xW = WW.height;
+         let lW, AW, bW, jW = 0;
+         const UW = new Uint8Array(ZW * xW * 4);
+         for (bW = mW; bW !== NW; bW += EW)
+           for (AW = PW; AW !== cW; AW += LW, jW++) lW = wW[jW], UW[4 * (AW + ZW * bW) + 3] = 255, UW[4 * (AW + ZW * bW) + 2] = tW[3 * lW + 0], UW[4 * (AW + ZW * bW) + 1] = tW[3 * lW + 1], UW[4 * (AW + ZW * bW) + 0] = tW[3 * lW + 2];
+         return UW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L114-L121` → after: `L101-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L101-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/632.js#L101-L171) · [Before (L114-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/632.js#L114-L121)

```diff
-       pB = "skyPixelShader",
-       qB = "precision highp float;varying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneFragmentDeclaration>\nuniform vec3 cameraPosition;uniform vec3 cameraOffset;uniform vec3 up;uniform float luminance;uniform float turbidity;uniform floa … [truncated]
-     YB.b.ShadersStore[pB] || (YB.b.ShadersStore[pB] = qB);
-     const ZB = [DB.d, QB.e, oB.c, jB.d, yB.c, JB.b, MB.d, lB];
-     for (const RB of ZB) YB.b.IncludesShadersStore[RB.name] || (YB.b.IncludesShadersStore[RB.name] = RB.shader);
-     const NB = {
-       name: pB,
-       shader: qB
+       _getImageData16bits: function(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
+         const wW = OW,
+           tW = WW.width,
+           ZW = WW.height;
+         let xW, lW, AW, bW = 0;
+         const jW = new Uint8Array(tW * ZW * 4);
+         for (AW = mW; AW !== NW; AW += EW)
+           for (lW = PW; lW !== cW; lW += LW, bW += 2) {
+             xW = wW[bW + 0] + (wW[bW + 1] << 8);
+             const WW = 255 * ((31744 & xW) >> 10) / 31 | 0,
+               iW = 255 * ((992 & xW) >> 5) / 31 | 0,
+               OW = 255 * (31 & xW) / 31 | 0;
+             jW[4 * (lW + tW * AW) + 0] = WW, jW[4 * (lW + tW * AW) + 1] = iW, jW[4 * (lW + tW * AW) + 2] = OW, jW[4 * (lW + tW * AW) + 3] = 32768 & xW ? 0 : 255
+           }
+         return jW
+       },
+ ... (55 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/633.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/633.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/633.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282f) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/633.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/633.js#L4-L6)

```diff
-   45051: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
+   54040: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       ReadExrDataAsync: () => Zi,
+       _ExrTextureLoader: () => ti
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/633.js` (Changed code · before: `L8-L30` → after: `L9-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282f) · [After (L9-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/633.js#L9-L771) · [Before (L8-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/633.js#L8-L30)

```diff
-     var YB = GB(40864);
-     const DB = "helperFunctions",
-       QB = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   64005: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       rgbdDecodePixelShader: () => yB
-     });
-     var YB = GB(40864),
-       DB = GB(45051);
-     const QB = "rgbdDecodePixelShader",
- ... (7 more removed lines; see GitHub link above)
+     var mW = OW(39911),
+       EW = OW(38285),
+       NW = OW(41586);
+     const PW = 4,
+       LW = 4,
+       cW = 1,
+       wW = 2,
+       tW = 8,
+       ZW = 65536,
+       xW = ZW >> 3,
+       lW = 14,
+       AW = 65537,
+       bW = 1 << lW,
+       jW = bW - 1,
+       UW = 59,
+       kW = 63,
+ ... (747 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/634.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/634.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05)

#### 1. `bundles/preprod.bloxd.io/chunks/js/634.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/634.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/634.js#L4)

```diff
-   45051: (BB, OB, GB) => {
+   54217: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/634.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/634.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/634.js#L6)

```diff
-       d: () => oB
+       c: () => PW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/634.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/634.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/634.js#L8-L11)

```diff
-     var YB = GB(40864);
-     const DB = "helperFunctions",
-       QB = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     var mW = OW(41392);
+     const EW = "bumpVertex",
+       NW = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/634.js` (Changed code · before: `L17` → after: `L17-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05) · [After (L17-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/634.js#L17-L44) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/634.js#L17)

```diff
-   64015: (BB, OB, GB) => {
+   54126: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "bumpVertexDeclaration",
+       NW = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54077: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+ ... (12 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/634.js` (Changed code · before: `L19` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/634.js#L46) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/634.js#L19)

```diff
-       rgbdEncodePixelShader: () => yB
+       defaultVertexShader: () => aW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/634.js` (Changed code · before: `L21-L27` → after: `L48-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05) · [After (L48-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/634.js#L48-L101) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/634.js#L21-L27)

```diff
-     var YB = GB(40864),
-       DB = GB(45051);
-     const QB = "rgbdEncodePixelShader",
-       oB = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
-     YB.b.ShadersStore[QB] || (YB.b.ShadersStore[QB] = oB);
-     const jB = [DB.d];
-     for (const JB of jB) YB.b.IncludesShadersStore[JB.name] || (YB.b.IncludesShadersStore[JB.name] = JB.shader);
+     var mW = OW(41392),
+       EW = OW(54054);
+     const NW = "defaultVertexDeclaration",
+       PW = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nuniform mat4 view;\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;\n#endif\n#ifdef O … [truncated]
+     mW.c.IncludesShadersStore[NW] || (mW.c.IncludesShadersStore[NW] = PW);
+     const LW = {
+       name: NW,
+       shader: PW
+     };
+     var cW = OW(54061),
+       wW = OW(54070),
+       tW = OW(54077),
+       ZW = OW(54084),
+       xW = OW(54093),
+       lW = OW(54096),
+       AW = OW(54099),
+ ... (38 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/635.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/635.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L4-L8` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/635.js#L4-L8) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/635.js#L4-L8)

```diff
-   45157: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
+   54199: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L11-L21` → after: `L11-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/635.js#L11-L21) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/635.js#L11-L21)

```diff
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45059: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB
-     });
-     var YB = GB(40864);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54099: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L24-L34` → after: `L24-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L24-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/635.js#L24-L34) · [Before (L24-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/635.js#L24-L34)

```diff
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45054: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
-     });
-     var YB = GB(40864);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54096: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L37-L47` → after: `L37-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L37-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/635.js#L37-L47) · [Before (L37-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/635.js#L37-L47)

```diff
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45153: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
-     });
-     var YB = GB(40864);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54190: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L50-L60` → after: `L50-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L50-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/635.js#L50-L60) · [Before (L50-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/635.js#L50-L60)

```diff
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45189: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
-     });
-     var YB = GB(40864);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54222: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L63-L73` → after: `L63-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L63-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/635.js#L63-L73) · [Before (L63-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/635.js#L63-L73)

```diff
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45090: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
-     });
-     var YB = GB(40864);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54132: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L76-L86` → after: `L76-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L76-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/635.js#L76-L99) · [Before (L76-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/635.js#L76-L86)

```diff
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45198: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
-     });
-     var YB = GB(40864);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54054: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "decalVertexDeclaration",
+       NW = "#ifdef DECAL\nuniform vec4 vDecalInfos;uniform mat4 decalMatrix;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+ ... (8 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L89-L99` → after: `L102-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L102-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/635.js#L102-L112) · [Before (L89-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/635.js#L89-L99)

```diff
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45096: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => oB
-     });
-     var YB = GB(40864);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54138: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L102-L112` → after: `L115-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L115-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/635.js#L115-L138) · [Before (L102-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/635.js#L102-L112)

```diff
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45064: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
-     });
-     var YB = GB(40864);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54093: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "helperFunctions",
+       NW = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+ ... (8 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L115-L125` → after: `L141-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L141-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/635.js#L141-L151) · [Before (L115-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/635.js#L115-L125)

```diff
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45148: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
-     });
-     var YB = GB(40864);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54181: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L128-L138` → after: `L154-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L154-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/635.js#L154-L398) · [Before (L128-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/635.js#L128-L138)

```diff
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45209: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
-     });
-     var YB = GB(40864);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54143: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "lightVxFragmentDeclaration",
+       NW = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+ ... (229 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L141-L167` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/635.js#L401) · [Before (L141-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/635.js#L141-L167)

```diff
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45713: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       colorVertexShader: () => RB
-     });
-     var YB = GB(40864),
-       DB = GB(45054),
-       QB = GB(45059),
-       oB = GB(45090),
-       jB = GB(45096),
-       yB = GB(45064),
- ... (11 more removed lines; see GitHub link above)
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/636.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/636.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78)

#### 1. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/636.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/636.js#L4)

```diff
-   45064: (BB, OB, GB) => {
+   54252: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/636.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/636.js#L8-L11)

```diff
-     var YB = GB(40864);
-     const DB = "instancesDeclaration",
-       QB = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     var mW = OW(41392);
+     const EW = "decalFragmentDeclaration",
+       NW = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/636.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/636.js#L17)

```diff
-   45148: (BB, OB, GB) => {
+   54368: (WW, iW, OW) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/636.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/636.js#L19)

```diff
-       e: () => oB
+       d: () => PW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/636.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/636.js#L21-L24)

```diff
-     var YB = GB(40864);
-     const DB = "instancesVertex",
-       QB = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     var mW = OW(41392);
+     const EW = "depthPrePass",
+       NW = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L30-L32` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/636.js#L30-L32) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/636.js#L30-L32)

```diff
-   64462: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       greasedLineVertexShader: () => JB
+   54270: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L34-L41` → after: `L34-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L34-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/636.js#L34-L180) · [Before (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/636.js#L34-L41)

```diff
-     var YB = GB(40864),
-       DB = GB(45064),
-       QB = GB(45148);
-     const oB = "greasedLineVertexShader",
-       jB = "precision highp float;\n#include<instancesDeclaration>\nattribute float grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute vec3 grl_offsets;\n#endif\nattribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;var … [truncated]
-     YB.b.ShadersStore[oB] || (YB.b.ShadersStore[oB] = jB);
-     const yB = [DB.b, QB.e];
-     for (const MB of yB) YB.b.IncludesShadersStore[MB.name] || (YB.b.IncludesShadersStore[MB.name] = MB.shader);
+     var mW = OW(41392);
+     const EW = "lightFragmentDeclaration",
+       NW = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54277: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "lightUboDeclaration",
+       NW = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
+ ... (131 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/637.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/637.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L4` → after: `L4-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/637.js#L4-L31) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/637.js#L4)

```diff
-   45181: (BB, OB, GB) => {
+   54357: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "bumpFragment",
+       NW = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54336: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+ ... (12 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L8-L11` → after: `L35-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L35-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/637.js#L35-L51) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/637.js#L8-L11)

```diff
-     var YB = GB(40864);
-     const DB = "bumpVertex",
-       QB = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     var mW = OW(41392);
+     const EW = "bumpFragmentMainFunctions",
+       NW = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54352: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "clipPlaneFragment",
+       NW = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L17` → after: `L57-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L57-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/637.js#L57-L96) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/637.js#L17)

```diff
-   45087: (BB, OB, GB) => {
+   54343: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "clipPlaneFragmentDeclaration",
+       NW = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54093: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+ ... (24 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L21-L24` → after: `L100-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L100-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/637.js#L100-L129) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/637.js#L21-L24)

```diff
-     var YB = GB(40864);
-     const DB = "bumpVertexDeclaration",
-       QB = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     var mW = OW(41392);
+     const EW = "openpbrDielectricReflectance",
+       NW = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   64928: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "openpbrGeometryInfo",
+       NW = "struct geometryInfoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;};struct geometryInfoAnisoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;float anisotropy;vec3 anisotropicTangent;vec3 … [truncated]
+ ... (14 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L30` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/637.js#L135) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/637.js#L30)

```diff
-   64117: (BB, OB, GB) => {
+   64950: (WW, iW, OW) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L34-L37` → after: `L139-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L139-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/637.js#L139-L142) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/637.js#L34-L37)

```diff
-     var YB = GB(40864);
-     const DB = "harmonicsFunctions",
-       QB = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     var mW = OW(41392);
+     const EW = "openpbrSubsurfaceLayerData",
+       NW = "float subsurface_weight=vSubsurfaceWeight;vec3 subsurface_color=vSubsurfaceColor.rgb;float subsurface_radius=vSubsurfaceRadius;vec3 subsurface_radius_scale=vSubsurfaceRadiusScale;float subsurface_scatter_anisotropy=clamp(vSubsurfaceScatterAnisotropy,-0.9999,0.9999);\n … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L43` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/637.js#L148) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/637.js#L43)

```diff
-   64115: (BB, OB, GB) => {
+   64941: (WW, iW, OW) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L47` → after: `L152-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L152-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/637.js#L152-L165) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/637.js#L47)

```diff
-     var YB = GB(40864);
+     var mW = OW(41392);
+     const EW = "openpbrTransmissionLayerData",
+       NW = "float transmission_weight=vTransmissionWeight;vec3 transmission_color=vTransmissionColor.rgb;float transmission_depth=vTransmissionDepth;vec3 transmission_scatter=vTransmissionScatter.rgb;float transmission_scatter_anisotropy=clamp(vTransmissionScatterAnisotropy,-0.99 … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   64680: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW
+     });
+     var mW = OW(41392);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L50` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/637.js#L168) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/637.js#L50)

```diff
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L56` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/637.js#L174) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/637.js#L56)

```diff
-   64113: (BB, OB, GB) => {
+   64700: (WW, iW, OW) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L58` → after: `L176-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L176-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/637.js#L176-L241) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/637.js#L58)

```diff
-       b: () => oB
+       d: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "pbrFragmentReflectionDeclaration",
+       NW = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\n#define sampleReflection(s,c) textureCube(s,c)\nuniform samplerCube reflectionSampler;\n#ifdef LODBASEDMICROSFURACE\n#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)\n#else\nuniform samplerCube reflectionSamplerLo … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   64748: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
+ ... (50 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L60-L64` → after: `L243-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L243-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/637.js#L243-L246) · [Before (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/637.js#L60-L64)

```diff
-     var YB = GB(40864);
-     GB(45027), GB(45035);
-     const DB = "pbrUboDeclaration",
-       QB = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     var mW = OW(41392);
+     const EW = "sceneUboDeclaration",
+       NW = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L70` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/637.js#L252) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/637.js#L70)

```diff
-   64111: (BB, OB, GB) => {
+   65010: (WW, iW, OW) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L72` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/637.js#L254) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/637.js#L72)

```diff
-       pbrVertexShader: () => CB
+       geometryPixelShader: () => nW
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L74-L78` → after: `L256-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L256-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/637.js#L256-L261) · [Before (L74-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/637.js#L74-L78)

```diff
-     var YB = GB(40864),
-       DB = GB(45024);
-     const QB = "pbrVertexDeclaration",
-       oB = "uniform mat4 view;uniform mat4 viewProjection;uniform vec4 vEyePosition;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif\n#ifdef ALBEDO\nuniform mat4 albedoMatrix;uniform vec2 vAlbedoInfos;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBase … [truncated]
-     YB.b.IncludesShadersStore[QB] || (YB.b.IncludesShadersStore[QB] = oB);
+     var mW = OW(41392),
+       EW = OW(54254),
+       NW = OW(54343);
+     const PW = "mrtFragmentDeclaration",
+       LW = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#ifdef MESH_BLEND_TAG\n#if {X}>0\n#if MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if {X}>1\n#if MESH … [truncated]
+     mW.c.IncludesShadersStore[PW] || (mW.c.IncludesShadersStore[PW] = LW);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L83-L122` → after: `L266-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L266-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/637.js#L266-L287) · [Before (L83-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/637.js#L83-L122)

```diff
-     var yB = GB(45027),
-       JB = GB(45035),
-       MB = GB(64113),
-       PB = GB(45048),
-       zB = GB(45077),
-       lB = GB(45051),
-       pB = GB(64115),
-       qB = GB(45054),
-       ZB = GB(45059),
-       NB = GB(45064),
-       RB = GB(45071),
-       WB = GB(45085),
-       AB = GB(64117),
-       VB = GB(45087),
-       SB = GB(45090),
-       nB = GB(45096),
- ... (24 more removed lines; see GitHub link above)
+     var wW = OW(54328),
+       tW = OW(54297),
+       ZW = OW(54336),
+       xW = OW(54093),
+       lW = OW(64700),
+       AW = OW(64915),
+       bW = OW(54061),
+       jW = OW(64680),
+       UW = OW(64919),
+       kW = OW(64748),
+       sW = OW(54306),
+       MW = OW(64928),
+       KW = OW(64937),
+       SW = OW(54352),
+       YW = OW(54357),
+       yW = OW(64950),
+ ... (6 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/638.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/638.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L4-L8` → after: `L4-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L4-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/638.js#L4-L73) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/638.js#L4-L8)

```diff
-   45189: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
-     });
-     var YB = GB(40864);
+   54199: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "bakedVertexAnimation",
+       NW = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54099: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+ ... (54 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L11-L21` → after: `L76-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L76-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/638.js#L76-L86) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/638.js#L11-L21)

```diff
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45090: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
-     });
-     var YB = GB(40864);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54132: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L24-L30` → after: `L89-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L89-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/638.js#L89-L121) · [Before (L24-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/638.js#L24-L30)

```diff
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45198: (BB, OB, GB) => {
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   64684: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "harmonicsFunctions",
+       NW = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+ ... (17 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L34-L82` → after: `L125-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L125-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/638.js#L125-L199) · [Before (L34-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/638.js#L34-L82)

```diff
-     var YB = GB(40864);
-     const DB = "fogVertex",
-       QB = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
-     const oB = {
-       name: DB,
-       shader: QB
-     }
-   },
-   45096: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "fogVertexDeclaration",
-       QB = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
- ... (33 more removed lines; see GitHub link above)
+     var mW = OW(41392);
+     const EW = "instancesVertex",
+       NW = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54175: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "morphTargetsVertex",
+       NW = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (int i=0; i<NUM_MORPH_INFLUENCERS; i++) {if (float(i)>=morphTargetCount) break;vertexID=float(gl_VertexID)*morphTargetTextureInfo.x;\n#ifdef MORPHTARGETS_POSITION\npositionUpdated+=(readVector3FromRawSa … [truncated]
+ ... (59 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L84-L97` → after: `L201-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L201-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/638.js#L201-L237) · [Before (L84-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/638.js#L84-L97)

```diff
-       particlesVertexShader: () => lB
-     });
-     var YB = GB(40864),
-       DB = GB(45090),
-       QB = GB(45096),
-       oB = GB(45133),
-       jB = GB(45189),
-       yB = GB(45198),
-       JB = GB(45213);
-     const MB = "particlesVertexShader",
-       PB = "attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;\n#ifdef ANIMATESHEET\nattribute float cellIndex;\n#endif\n#ifndef BILLBOARD\nattribute vec3 direction;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute vec3 direction;\n#endif\n#ifdef … [truncated]
-     YB.b.ShadersStore[MB] || (YB.b.ShadersStore[MB] = PB);
-     const zB = [DB.e, QB.c, oB.e, jB.b, yB.b, JB.d];
-     for (const pB of zB) YB.b.IncludesShadersStore[pB.name] || (YB.b.IncludesShadersStore[pB.name] = pB.shader);
+       geometryVertexShader: () => HW
+     });
+     var mW = OW(41392),
+       EW = OW(54096),
+       NW = OW(54099),
+       PW = OW(54156),
+       LW = OW(54164),
+       cW = OW(54102);
+     const wW = "geometryVertexDeclaration",
+       tW = "uniform mat4 viewProjection;uniform mat4 view;";
+     mW.c.IncludesShadersStore[wW] || (mW.c.IncludesShadersStore[wW] = tW);
+     const ZW = {
+       name: wW,
+       shader: tW
+     };
+     var xW = OW(54061);
+ ... (21 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/639.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/639.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/639.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/639.js#L4)

```diff
-   45189: (BB, OB, GB) => {
+   54077: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/639.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/639.js#L6)

```diff
-       b: () => oB
+       c: () => PW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L8-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/639.js#L8-L12) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/639.js#L8-L11)

```diff
-     var YB = GB(40864);
-     const DB = "clipPlaneVertex",
-       QB = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     var mW = OW(41392);
+     OW(54061), OW(54070);
+     const EW = "defaultUboDeclaration",
+       NW = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L17-L19` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/639.js#L18-L20) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/639.js#L17-L19)

```diff
-   45090: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
+   54248: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       defaultPixelShader: () => QW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L21-L24` → after: `L22-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/639.js#L22-L26) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/639.js#L21-L24)

```diff
-     var YB = GB(40864);
-     const DB = "clipPlaneVertexDeclaration",
-       QB = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     var mW = OW(41392),
+       EW = OW(54252);
+     const NW = "defaultFragmentDeclaration",
+       PW = "uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform vec2 vAmbientInfos;\n#endif\ … [truncated]
+     mW.c.IncludesShadersStore[NW] || (mW.c.IncludesShadersStore[NW] = PW);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L28-L37` → after: `L30-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L30-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/639.js#L30-L45) · [Before (L28-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/639.js#L28-L37)

```diff
-     }
-   },
-   45198: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "fogVertex",
-       QB = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     };
+     var cW = OW(54061),
+       wW = OW(54070),
+       tW = OW(54077),
+       ZW = OW(54254),
+       xW = OW(54257),
+       lW = OW(54265),
+       AW = OW(54116),
+       bW = OW(54093),
+       jW = OW(54270),
+       UW = OW(54277),
+       kW = OW(54283),
+       sW = OW(54285);
+     const MW = "lightsFragmentFunctions",
+       KW = "struct lightingInfo\n{vec3 diffuse;\n#ifdef SPECULARTERM\nvec3 specular;\n#endif\n#ifdef NDOTL\nfloat ndl;\n#endif\n};lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {light … [truncated]
+     mW.c.IncludesShadersStore[MW] || (mW.c.IncludesShadersStore[MW] = KW);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L41-L50` → after: `L49-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L49-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/639.js#L49-L54) · [Before (L41-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/639.js#L41-L50)

```diff
-     }
-   },
-   45096: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "fogVertexDeclaration",
-       QB = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     };
+     var YW = OW(54291),
+       yW = OW(54297);
+     const TW = "fresnelFunction",
+       JW = "#ifdef FRESNEL\nfloat computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)\n{float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
+     mW.c.IncludesShadersStore[TW] || (mW.c.IncludesShadersStore[TW] = JW);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L54-L63` → after: `L58-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L58-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/639.js#L58-L73) · [Before (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/639.js#L54-L63)

```diff
-     }
-   },
-   45133: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => oB
-     });
-     var YB = GB(40864);
-     const DB = "logDepthDeclaration",
-       QB = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
-     YB.b.IncludesShadersStore[DB] || (YB.b.IncludesShadersStore[DB] = QB);
+     };
+     var HW = OW(54306),
+       nW = OW(54308),
+       uW = OW(54314),
+       oW = OW(54322),
+       dW = OW(54328),
+       eW = OW(54336),
+       vW = OW(54343),
+       gW = OW(54166),
+       DW = OW(54347),
+       VW = OW(54352),
+       pW = OW(54357),
+       fW = OW(54366);
+     const CW = "defaultFragmentAlpha",
+       XW = "#ifdef OPACITY\nvec4 opacityMap=TEXRD(opacitySampler,vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap.rgb=opacityMap.rgb*vec3(0.3,0.59,0.11);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*vOpacityInfos.y;\n#endif\n#en … [truncated]
+     mW.c.IncludesShadersStore[CW] || (mW.c.IncludesShadersStore[CW] = XW);
```
