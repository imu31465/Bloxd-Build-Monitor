# Changed — Bundle Modifications Report (Part 039 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `39 / 115` (**278** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 038](part-038.md) · [Part 040 →](part-040.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/295.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/295.js` (473 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad)

#### 174. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3108-L3208` → after: `L6065-L6066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6065-L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6065-L6066) · [Before (L3108-L3208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3108-L3208)

```diff
-     }
- 
-     function MQ(UU, XU) {
-       if (UU.pipelineKey !== XU.pipelineKey || UU.materialGroup !== XU.material.bindGroup || UU.indexBuffer !== XU.indexBuffer || UU.indexFormat !== XU.indexFormat || UU.vertexOffsets !== XU.vertexOffsets || UU.vertexBuffers.length !== XU.vertexBuffers.length) return !1;
-       for (let zU = 0; zU < UU.vertexBuffers.length; zU++)
-         if (UU.vertexBuffers[zU] !== XU.vertexBuffers[zU]) return !1;
-       return !0
-     }
- 
-     function vQ(UU, XU) {
-       return UQ(UU.draw, XU.draw)
-     }
-     const VQ = new WeakMap,
-       sQ = {
-         depth: !1,
-         sunShadow: !1
- ... (85 more removed lines; see GitHub link above)
+       toString() {
+         return "RRDocument"
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3233-L3301` → after: `L6069-L6071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6069-L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6069-L6071) · [Before (L3233-L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3233-L3301)

```diff
-     class JQ {
-       constructor(UU, XU) {
-         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         this.device = UU, this.sunShadow = zU, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(KX.l), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = UU.createBuffer({
-           label: "shader-pack-inputs",
-           size: KX.l,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         });
-         const cU = (0, KX.D)(XU);
-         this.textures = UU.createBuffer({
-           label: "shader-pack-textures",
-           size: cU.byteLength,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), UU.queue.writeBuffer(this.textures, 0, cU), this.bindGroup = UU.createBindGroup({
-           label: "shader-pack-inputs",
-           layout: mQ(UU),
- ... (53 more removed lines; see GitHub link above)
+     class LS extends HS {
+       constructor(HH, BH, LH) {
+         super(), hA(this, "nodeType", 10), hA(this, "RRNodeType", dr.DocumentType), hA(this, "name"), hA(this, "publicId"), hA(this, "systemId"), hA(this, "textContent", null), this.name = HH, this.publicId = BH, this.systemId = LH, this.nodeName = HH
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3303-L3306` → after: `L6073-L6074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6073-L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6073-L6074) · [Before (L3303-L3306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3303-L3306)

```diff
-       bind(UU, XU) {
-         let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         UU.setBindGroup(KX.h, this.bindGroupFor(XU, zU, cU))
+       toString() {
+         return "RRDocumentType"
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3309-L3328` → after: `L6077-L6079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6077-L6079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6077-L6079) · [Before (L3309-L3328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3309-L3328)

```diff
- 
-     function jQ(UU, XU, zU) {
-       if (UU.gpuVersion === XU.gpuBuffersVersion) return !0;
-       let cU;
-       do {
-         if (cU = XU.gpuBuffersVersion, !KQ(UU, XU, zU)) return !1
-       } while (XU.gpuBuffersVersion !== cU);
-       return UU.gpuVersion = cU, UU.fitInstances = 0, !0
-     }
- 
-     function KQ(UU, XU, zU) {
-       let cU = null;
-       for (let QU = 0; QU < UU.slotData.length; QU++) {
-         var yU;
-         const AU = UU.slotData[QU],
-           FU = AU ? XU.gpuBuffer(AU) : zU;
- ... (4 more removed lines; see GitHub link above)
+     class AS extends HS {
+       constructor(HH) {
+         super(), hA(this, "nodeType", 1), hA(this, "RRNodeType", dr.Element), hA(this, "tagName"), hA(this, "attributes", {}), hA(this, "shadowRoot", null), hA(this, "scrollLeft"), hA(this, "scrollTop"), this.tagName = HH.toUpperCase(), this.nodeName = HH.toUpperCase()
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3330-L3352` → after: `L6081-L6083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6081-L6083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6081-L6083) · [Before (L3330-L3352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3330-L3352)

```diff
-       return cU && (UU.offsets = cU), !0
-     }
- 
-     function bQ(UU, XU, zU, cU) {
-       if (XU <= UU.fitInstances) return null;
-       const {
-         layout: yU,
-         ends: QU,
-         offsets: AU,
-         slotData: FU,
-         gUU: oU
-       } = UU;
-       let DU = !1;
-       for (let EU = 0; EU < yU.buffers.length; EU++) {
-         const UU = yU.instanceEnds[EU];
-         if (UU < 0) continue;
- ... (7 more removed lines; see GitHub link above)
+       get textContent() {
+         let HH = "";
+         return this.childNodes.forEach((BH => HH += BH.textContent)), HH
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3354-L3392` → after: `L6085-L6086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6085-L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6085-L6086) · [Before (L3354-L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3354-L3392)

```diff
-       return DU && jQ(UU, zU, cU), UU.fitInstances = XU, null
-     }
-     var TQ = zU(38563),
-       hQ = zU(38597);
-     const UA = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
-       XA = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
-       zA = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
-       cA = `((vertexInputs.aPackedLightLevels >> 16u) | ${qX.e.placed}u)`,
-       yA = "u32(vertexInputs.aShaderPackItem.x)",
-       QA = `${qX.e.lifeform}u`;
- 
-     function AA(UU) {
-       return "item" === UU.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
-     }
-     const FA = "bloxdSpEnchant",
-       oA = "floor(finalWorld[3].xyz)";
- ... (23 more removed lines; see GitHub link above)
+       set textContent(HH) {
+         this.firstChild = null, this.lastChild = null, this.appendChild(this.ownerDocument.createTextNode(HH))
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3394-L3404` → after: `L6088-L6091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6088-L6091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6088-L6091) · [Before (L3394-L3404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3394-L3404)

```diff
-     }
- 
-     function NA(UU) {
-       if ("item" === UU.kind) {
-         return {
-           vertexFlags: `(${yA} & 0xffffu)`,
-           varying: "vPackItem",
-           value: yA,
-           flags: "(fragmentInputs.vPackItem & 0xffffu)",
-           enchantTier: "(fragmentInputs.vPackItem >> 16u)"
-         }
+       get classList() {
+         return new CS(this.attributes.class, (HH => {
+           this.attributes.class = HH
+         }))
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3406-L3477` → after: `L6093-L6120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6093-L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6093-L6120) · [Before (L3406-L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3406-L3477)

```diff
-       return UU.defines.BLOXD_LIGHT_WORD ? {
-         vertexFlags: cA,
-         varying: "vPackFlags",
-         value: cA,
-         flags: "fragmentInputs.vPackFlags",
-         enchantTier: "0u"
-       } : null
-     }
- 
-     function IA(UU) {
-       return "lifeform" === UU.kind ? QA : "0u"
-     }
- 
-     function pA(UU) {
-       return !!UU.BLOXD_PLUGIN_ENCHANTMENT
-     }
- ... (56 more removed lines; see GitHub link above)
+       get id() {
+         return this.attributes.id || ""
+       }
+       get className() {
+         return this.attributes.class || ""
+       }
+       get style() {
+         const HH = this.attributes.style ? function(HH) {
+             const BH = {},
+               LH = /:(.+)/;
+             return HH.replace(/\/\*.*?\*\//g, "").split(/;(?![^(]*\))/g).forEach((function(HH) {
+               if (HH) {
+                 const AH = HH.split(LH);
+                 AH.length > 1 && (BH[ir(AH[0].trim())] = AH[1].trim())
+               }
+             })), BH
+ ... (12 more added lines; see GitHub link above)
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3479-L3519` → after: `L6122-L6123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6122-L6123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6122-L6123) · [Before (L3479-L3519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3479-L3519)

```diff
-     }
- 
-     function BA(UU, XU) {
-       return "box" === XU.kind && !!UU.hooks.surface && null !== GA(XU)
-     }
- 
-     function ZA(UU, XU) {
-       return UU.reads.fragment.includes(XU)
-     }
- 
-     function RA(UU) {
-       return !!UU.BLOXD_LIGHTING && !UU.BLOXD_UNLIT
-     }
- 
-     function PA(UU, XU, zU, cU) {
-       const yU = UU.filter((UU => {
- ... (25 more removed lines; see GitHub link above)
+       getAttribute(HH) {
+         return void 0 === this.attributes[HH] ? null : this.attributes[HH]
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3521-L3538` → after: `L6125-L6126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6125-L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6125-L6126) · [Before (L3521-L3538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3521-L3538)

```diff
-       const {
-         overlay: YU
-       } = XU;
-       YU && gA(XU) && yU.surface && (EU = EU.filter((UU => !EA(UU, YU))));
-       const NU = yU.light ? function(UU) {
-         return "placed" === UU.kind ? {
-           name: "terrain",
-           engine: (0, xX.V)(RU.b.WGSL),
-           pack: (0, xX.ub)(RU.b.WGSL)
-         } : UU.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
-           name: "entity",
-           engine: (0, xX.Q)(RU.b.WGSL),
-           pack: (0, xX.pb)(RU.b.WGSL)
-         } : null
-       }(XU) : null;
-       if (NU && (EU = PA(EU, NU.engine, NU.pack, `${NU.name} light`), "placed" !== QU && RA(AU))) {
- ... (2 more removed lines; see GitHub link above)
+       setAttribute(HH, BH) {
+         this.attributes[HH] = BH
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3540-L3542` → after: `L6128-L6129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6128-L6129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6128-L6129) · [Before (L3540-L3542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3540-L3542)

```diff
-       return {
-         vertexCode: FU,
-         fragmentCode: EU
+       setAttributeNS(HH, BH, LH) {
+         this.setAttribute(BH, LH)
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3544-L3612` → after: `L6131-L6132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6131-L6132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6131-L6132) · [Before (L3544-L3612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3544-L3612)

```diff
-     }
- 
-     function dA(UU, XU, zU, cU) {
-       return cc(UU, XU, zU, cU, "model")
-     }
-     const LA = "\t@builtin(position) position: vec4f,\n";
- 
-     function eA(UU, XU) {
-       const zU = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(UU)[0];
-       return `${zU}${XU}${UU.slice(zU.length)}`
-     }
- 
-     function CA(UU, XU, zU) {
-       let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       const {
-         hooks: yU
- ... (53 more removed lines; see GitHub link above)
+       removeAttribute(HH) {
+         delete this.attributes[HH]
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3614-L3619` → after: `L6134-L6135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6134-L6135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6134-L6135) · [Before (L3614-L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3614-L3619)

```diff
-       const gU = `${oc(XU,QU,function(UU,XU){return XU.TWOSIDEDLIGHTING?UU:`select(-(${UU}), ${UU}, fragmentInputs.frontFacing)`}(oU.normal,FU),oU.flags)}${gc(yU,XU.strict,XU.program,NU,oU)}`;
-       gU && (aU = dA(aU, XA, `${gU.slice(1)}${XA}`, "surface")), QU && XU.sunShadow && !FU.TWOSIDEDLIGHTING && (aU = dA(aU, LA, `${LA}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
-       const kU = Bc(yU);
-       if (kU) {
-         const UU = Gc(yU, RA(FU), !0, oU);
-         aU = dA(aU, zA, `${UU}${kU.slice(1)}${zA}`, "light")
+       appendChild(HH) {
+         return ES(this, HH)
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3621-L3625` → after: `L6137-L6138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6137-L6138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6137-L6138) · [Before (L3621-L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3621-L3625)

```diff
-       const GU = BA(XU, zU) ? Yc : "";
-       return {
-         ...UU,
-         vertex: eA(pU, IU(EU, !1, GU)),
-         fragment: eA(aU, IU(NU, QU))
+       insertBefore(HH, BH) {
+         return XS(this, HH, BH)
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3627-L3634` → after: `L6140-L6141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6140-L6141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6140-L6141) · [Before (L3627-L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3627-L3634)

```diff
-     }
-     const wA = {
-       name: "earthSky",
-       uniqueId: -1
-     };
-     class qA {
-       constructor(UU, XU) {
-         this.resources = UU, this.epoch = XU, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
+       removeChild(HH) {
+         return GS(this, HH)
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3636-L3638` → after: `L6143-L6145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6143-L6145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6143-L6145) · [Before (L3636-L3638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3636-L3638)

```diff
-       release() {
-         for (const UU of this.instances.values()) UU.released = !0, this.resources.destroyBuffer(UU.buffer);
-         this.instances.clear()
+       attachShadow(HH) {
+         const BH = this.ownerDocument.createElement("SHADOWROOT");
+         return this.shadowRoot = BH, BH
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3640-L3693` → after: `L6147-L6153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6147-L6153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6147-L6153) · [Before (L3640-L3693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3640-L3693)

```diff
-     }
- 
-     function OA(UU) {
-       return UU.failed && null !== UU.packGroup
-     }
-     class SA {
-       constructor(UU, XU, zU) {
-         let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new rQ,
-           yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new OQ;
-         this.device = UU, this.resources = XU, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.pUU = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new Ty, this.s … [truncated]
-           label: "meshes-frame",
-           entries: [{
-             binding: 0,
-             visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
-             buffer: {
-               type: "uniform"
- ... (38 more removed lines; see GitHub link above)
+       dispatchEvent(HH) {
+         return !0
+       }
+       toString() {
+         let HH = "";
+         for (const BH in this.attributes) HH += `${BH}="${this.attributes[BH]}" `;
+         return `${this.tagName} ${HH}`
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3695-L3696` → after: `L6155-L6158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6155-L6158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6155-L6158) · [Before (L3695-L3696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3695-L3696)

```diff
-       get pipelinesCompiling() {
-         return this.compiling
+     }
+     class rS extends AS {
+       constructor() {
+         super(...arguments), hA(this, "currentTime"), hA(this, "volume"), hA(this, "paused"), hA(this, "muted"), hA(this, "playbackRate"), hA(this, "loop")
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3698-L3719` → after: `L6160-L6161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6160-L6161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6160-L6161) · [Before (L3698-L3719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3698-L3719)

```diff
-       prepare(UU, XU, zU) {
-         var cU;
-         let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         this.frame++, this.view = XU, this.drawDefines.view = XU, this.thinBundle.zB(), this.writeFrameUniforms();
-         const QU = null !== (cU = null === yU || void 0 === yU ? void 0 : yU.defineFor("model")) && void 0 !== cU ? cU : 0;
-         this.drawDefines.modelPackVariant = QU, yU && 0 !== QU && (this.packInputs ??= new JQ(this.device, yU.textureLayers(), this.sunShadow), this.packInputs.write(yU, XU.eye, yU.ia())), this.lists.clear(), this.slotCount = 0;
-         const AU = UU.activeCamera;
-         this.pUU.select(AU, this.keepSteadyBase), this.modelMeshes.select(AU, XU), zU && this.pushEarthSky(zU), this.lists.collect(UU), this.thinBundle.ZY(), this.uploadMeshSlots()
-       }
-       pushDraws(UU, XU, zU, cU, yU, QU) {
-         let AU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
-         const FU = QU.length;
-         for (let oU = 0; oU < zU; oU++) {
-           const zU = XU[oU];
-           let FU = this.retainedDraw(UU, zU, cU, yU);
-           if (void 0 === FU && (FU = this.drawFor(UU, zU, cU, yU), this.retain(zU, FU)), FU) {
- ... (6 more removed lines; see GitHub link above)
+       attachShadow(HH) {
+         throw new Error("RRDomException: Failed to execute 'attachShadow' on 'RRElement': This RRElement does not support attachShadow")
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3721-L3732` → after: `L6163-L6164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6163-L6164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6163-L6164) · [Before (L3721-L3732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3721-L3732)

```diff
-       bundleDraws(UU, XU, zU) {
-         let cU = 0;
-         for (const yU of XU) {
-           let XU = this.retainedDraw(UU, yU, zU, !1);
-           const QU = void 0 !== XU;
-           if (void 0 === XU && (XU = this.drawFor(UU, yU, zU, !1), this.retain(yU, XU)), XU) {
-             const UU = yU.owner,
-               zU = this.thinBundle.add(yU, XU, UU.getWorldMatrix().m, UU.visibility);
-             QU && this.steadyFrom(yU, XU, zU), cU++
-           }
-         }
-         return cU
+       play() {
+         this.paused = !1
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3734-L3758` → after: `L6166-L6167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6166-L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6166-L6167) · [Before (L3734-L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3734-L3758)

```diff
-       steadyFrom(UU, XU, zU) {
-         const cU = UU.owner,
-           yU = this.pUU.base(cU),
-           QU = cU.material,
-           {
-             drawState: AU,
-             instance: FU
-           } = XU.inputs.retained;
-         if (!yU || !QU || 1 !== UU.parts.materials.length || CQ(UU) !== QU) return;
-         const oU = yU.steady ??= {
-           unit: UU,
-           material: QU,
-           visibility: 1,
-           draw: XU,
-           record: zU,
-           drawState: AU,
- ... (9 more removed lines; see GitHub link above)
+       pause() {
+         this.paused = !0
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3760-L3852` → after: `L6169-L6172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6169-L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6169-L6172) · [Before (L3760-L3852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3760-L3852)

```diff
-       keepSteady(UU, XU) {
-         const zU = UU.steady;
-         if (zU.handedFrame !== this.frame - 1 || (this.frame + zU.phase) % 8 === 0) return !1;
-         const cU = UU.mesh,
-           {
-             unit: yU,
-             draw: QU,
-             instance: AU,
-             drawState: FU
-           } = zU,
-           oU = cU.forcedInstanceCount || cU.BUU;
-         if (!cU.isVisible || cU.jyU || cU.visibility !== zU.visibility || 0 === (cU.layerMask & XU.layerMask) || cU.material !== zU.material || 0 !== cU.renderingGroupId || cU.hasVertexAlpha || !this.drawDefines.definesHold(FU, yU, FU.instancing) || zU.gpuVersion !== this.resourc … [truncated]
-         if (AU.frame !== this.frame && this.bindMaterial(AU, this.modelUniforms.refreshModelUniforms(cU.nS(), AU, AU.model, this.view)), !AU.bindable || AU.bindGroup !== zU.bindGroup) return !1;
-         const DU = cU.computeWorldMatrix(),
-           EU = DU.updateFlag !== zU.worldFlag;
-         return zU.worldFlag = DU.updateFlag, QU.instances = oU, this.thinBundle.addAgain(zU.record, QU, EU ? DU.m : null, zU.visibility), zU.handedFrame = this.frame, this.pUU.drawn++, !0
- ... (77 more removed lines; see GitHub link above)
+     }
+     class SS extends AS {
+       constructor() {
+         super(...arguments), hA(this, "tagName", "DIALOG"), hA(this, "nodeName", "DIALOG")
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3854-L3882` → after: `L6174-L6175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6174-L6175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6174-L6175) · [Before (L3854-L3882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3854-L3882)

```diff
-       indexKey(UU) {
-         const XU = oQ(UU);
-         return XU ? this.resources.modelIndex(XU) : null
-       }
-       setRange(UU, XU, zU, cU) {
-         zU && (UU.indexBuffer = zU, UU.indexFormat = this.resources.indexFormat(cU));
-         const yU = 4 * XU.range + (zU ? 0 : 2);
-         UU.unit = XU, UU.first = XU.parts.Qt[yU], UU.count = XU.parts.Qt[yU + 1]
-       }
-       makeDraw(UU, XU, zU, cU, yU) {
-         XU.state !== zU && (XU.state = zU, XU.pipelineKey = `${UU.id}|${XU.layout.key}|${zU.key}`, XU.pipeline = null);
-         const QU = XU.draw ??= {
-           program: UU,
-           inputs: XU,
-           pipelineKey: "",
-           layout: XU.layout,
- ... (13 more removed lines; see GitHub link above)
+       get isModal() {
+         return "modal" === this.getAttribute("rr_open_mode")
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3884-L3892` → after: `L6177-L6178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6177-L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6177-L6178) · [Before (L3884-L3892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3884-L3892)

```diff
-       instanceCount(UU, XU) {
-         switch (XU) {
-           case "thin":
-             return UU.forcedInstanceCount || UU.BUU;
-           case "instanced":
-             return this.prepareInstances(UU);
-           case "none":
-             return 1
-         }
+       get open() {
+         return null !== this.getAttribute("open")
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3894-L3951` → after: `L6180-L6181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6180-L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6180-L6181) · [Before (L3894-L3951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3894-L3951)

```diff
-       prepareInstances(UU) {
-         const XU = function(UU, XU) {
-           const zU = XU._userInstancedBuffersStorage,
-             cU = UU.batchUploads.get(XU);
-           if (cU) {
-             var yU;
-             if (cU.layout === (null !== (yU = null === zU || void 0 === zU ? void 0 : zU.interleavedKinds) && void 0 !== yU ? yU : null)) return cU;
-             cU.release()
-           }
-           return new IX(UU, XU, zU)
-         }(this.resources, UU);
-         return XU.frame !== this.frame && XU.pack(UU, this.modelMeshes.instanceBatch(UU), this.modelMeshes.worlds, this.frame), XU.count
-       }
-       programWithModel(UU, XU, zU) {
-         const cU = this.modelSlot(UU),
-           yU = YQ(cU, UU, zU),
- ... (42 more removed lines; see GitHub link above)
+       close() {
+         this.removeAttribute("open"), this.removeAttribute("rr_open_mode")
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3953-L3981` → after: `L6183-L6184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6183-L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6183-L6184) · [Before (L3953-L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3953-L3981)

```diff
-       modelPackProgram(UU, XU, zU, cU, yU) {
-         const QU = this.programs.get(zU);
-         if (QU || this.unbuildable.has(zU)) return null !== QU && void 0 !== QU ? QU : null;
-         const AU = this.drawDefines.modelPackVariant;
-         let FU;
-         try {
-           const UU = function(UU) {
-               return (0, bX.c)(UU, "model")
-             }(AU),
-             zU = WA(UU, yU, cU.vertexCode, cU.fragmentCode);
-           FU = CA(wy({
-             defines: AQ(XU),
-             ...zU,
-             pluginUniforms: cU.pluginUniforms
-           }), UU, yU, !!this.sunShadow)
-         } catch (EU) {
- ... (13 more removed lines; see GitHub link above)
+       show() {
+         this.setAttribute("open", ""), this.setAttribute("rr_open_mode", "non-modal")
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3983-L4048` → after: `L6186-L6187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6186-L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6186-L6187) · [Before (L3983-L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3983-L4048)

```diff
-       lineProgramFor(UU, XU, zU) {
-         const cU = gU(UU, zU, XU, this.view);
-         let yU = this.linePrograms.get(cU);
-         var QU;
-         return yU || (yU = this.createProgram(`lines#${cU}`, (QU = function(UU) {
-           const XU = new Map;
-           for (let zU = 0; zU < DU.length; zU++) UU & 1 << zU && XU.set(DU[zU], !0);
-           return XU
-         }(cU), ry({
-           defines: QU,
-           vertex: Oy,
-           fragment: Sy,
-           members: [],
-           structName: "MaterialUniforms"
-         })), "color"), this.linePrograms.set(cU, yU)), yU
-       }
- ... (50 more removed lines; see GitHub link above)
+       showModal() {
+         this.setAttribute("open", ""), this.setAttribute("rr_open_mode", "modal")
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4050-L4052` → after: `L6189-L6192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6189-L6192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6189-L6192) · [Before (L4050-L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4050-L4052)

```diff
-       writeFrameUniforms() {
-         const UU = this.frameUniforms;
-         kQ(this.view, UU), this.device.queue.writeBuffer(this.frameBuffer, 0, UU)
+     }
+     class hS extends HS {
+       constructor(HH) {
+         super(), hA(this, "nodeType", 3), hA(this, "nodeName", "#text"), hA(this, "RRNodeType", dr.Text), hA(this, "data"), this.data = HH
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4054-L4079` → after: `L6194-L6195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6194-L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6194-L6195) · [Before (L4054-L4079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4054-L4079)

```diff
-       materialInstance(UU, XU) {
-         let zU = this.materials.get(UU);
-         if (!zU) {
-           const XU = new Map;
-           this.materials.set(UU, XU);
-           const {
-             resources: cU,
-             materials: yU
-           } = this;
-           UU.bS.addOnce((() => {
-             for (const UU of XU.values()) UU.released = !0, cU.destroyBuffer(UU.buffer);
-             yU.delete(UU)
-           })), zU = XU
-         }
-         let cU = zU.get(XU.key);
-         return cU || (cU = this.newMaterialInstance(UU, null, XU), zU.set(XU.key, cU)), cU
- ... (10 more removed lines; see GitHub link above)
+       get textContent() {
+         return this.data
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4081-L4104` → after: `L6197-L6198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6197-L6198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6197-L6198) · [Before (L4081-L4104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4081-L4104)

```diff
-       newMaterialInstance(UU, XU, zU) {
-         const cU = zU.program.material.floats,
-           yU = new Float32Array(cU),
-           QU = new Map;
-         return {
-           owner: UU,
-           model: XU,
-           program: zU,
-           data: yU,
-           uploaded: new Float32Array(cU).fill(Number.NaN),
-           buffer: this.device.createBuffer({
-             label: `${UU.name}-uniforms`,
-             size: Math.max(16, 4 * cU),
-             usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-           }),
-           textures: QU,
- ... (8 more removed lines; see GitHub link above)
+       set textContent(HH) {
+         this.data = HH
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4106-L4131` → after: `L6200-L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6200-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6200-L6201) · [Before (L4106-L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4106-L4131)

```diff
-       pushEarthSky(UU) {
-         var XU;
-         const zU = this.earthSkyProgram ??= this.createProgram("earthSky", {
-             vertex: My + vy,
-             fragment: My + Vy,
-             attributes: [],
-             material: Hy,
-             textures: []
-           }, "earthSky"),
-           cU = this.earthSkyUniforms ??= this.newMaterialInstance(wA, null, zU);
-         this.earthSkyFrom !== UU && (this.earthSkyFrom = UU, cU.data.fill(0)), Ky(cU.ubo, UU, this.view);
-         const yU = this.vertexInputs(zU, wA, "earthSky", zU, null);
-         if (zU.failed || !yU || !this.bindMaterial(cU, !1)) return;
-         const QU = null !== (XU = yU.state) && void 0 !== XU ? XU : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
-           AU = this.makeDraw(zU, yU, QU, cU, 1);
-         AU.count = uy.length;
- ... (10 more removed lines; see GitHub link above)
+       toString() {
+         return `RRText text=${JSON.stringify(this.data)}`
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4133-L4134` → after: `L6203-L6206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6203-L6206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6203-L6206) · [Before (L4133-L4134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4133-L4134)

```diff
-       bindMaterial(UU, XU) {
-         return UU.frame !== this.frame && (UU.frame = this.frame, XU || this.uploadIfChanged(UU), UU.bindable = this.bindTextures(UU)), UU.bindable
+     }
+     class tS extends HS {
+       constructor(HH) {
+         super(), hA(this, "nodeType", 8), hA(this, "nodeName", "#comment"), hA(this, "RRNodeType", dr.Comment), hA(this, "data"), this.data = HH
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4136-L4169` → after: `L6208-L6209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6208-L6209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6208-L6209) · [Before (L4136-L4169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4136-L4169)

```diff
-       bindTextures(UU) {
-         const {
-           program: XU,
-           bound: zU
-         } = UU, cU = XU.program.textures;
-         let yU = !UU.bindGroup,
-           QU = !0;
-         for (let AU = 0; AU < cU.length; AU++) {
-           const XU = UU.textures.get(cU[AU].name),
-             FU = XU ? this.resources.boundTexture(XU) : null;
-           FU ? zU[2 * AU] === FU.view && zU[2 * AU + 1] === FU.sampler || (zU[2 * AU] = FU.view, zU[2 * AU + 1] = FU.sampler, yU = !0) : (XU || UU.ubo.expected.has(cU[AU].name) || this.warnOnce(`texture:${UU.owner.name}:${cU[AU].name}`, `${UU.owner.name} has no ${cU[AU].name}`),  … [truncated]
-         }
-         if (!QU) return yU && (UU.bindGroup = null), !1;
-         if (yU) {
-           const yU = [{
-             binding: 0,
- ... (18 more removed lines; see GitHub link above)
+       get textContent() {
+         return this.data
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4171-L4173` → after: `L6211-L6212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6211-L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6211-L6212) · [Before (L4171-L4173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4171-L4173)

```diff
-       writeMeshSlot(UU, XU) {
-         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, UU, XU, zU), this.slotCount++ * Dy
+       set textContent(HH) {
+         this.data = HH
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4175-L4176` → after: `L6214-L6215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6214-L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6214-L6215) · [Before (L4175-L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4175-L4176)

```diff
-       uploadMeshSlots() {
-         this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
+       toString() {
+         return `RRComment text=${JSON.stringify(this.data)}`
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4178-L4185` → after: `L6217-L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6217-L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6217-L6220) · [Before (L4178-L4185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4178-L4185)

```diff
-       vertexInputs(UU, XU, zU, cU, yU) {
-         let QU = this.inputs.get(UU);
-         if (!QU || QU.program !== cU || !WQ(XU, QU, this.resources, yU)) {
-           var AU;
-           if (QU = null !== (AU = this.vertexLayouts.resolveInputs(XU, zU, cU, yU)) && void 0 !== AU ? AU : void 0, !QU) return null;
-           this.inputs.set(UU, QU)
-         }
-         return this.withGpuBuffers(QU)
+     }
+     class zS extends HS {
+       constructor(HH) {
+         super(), hA(this, "nodeName", "#cdata-section"), hA(this, "nodeType", 4), hA(this, "RRNodeType", dr.CDATA), hA(this, "data"), this.data = HH
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4187-L4193` → after: `L6222-L6223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6222-L6223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6222-L6223) · [Before (L4187-L4193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4187-L4193)

```diff
-       meshInputs(UU, XU, zU) {
-         const cU = this.inputs.get(UU);
-         if (cU && this.inputsStamped(cU, UU, zU, XU)) return this.withGpuBuffers(cU);
-         const yU = UU.owner,
-           QU = oQ(UU),
-           AU = this.vertexInputs(UU, yU, yU.name, XU, QU);
-         return AU && (AU.geometry = DQ(UU), AU.instanceLayout = this.drawDefines.instanceLayout(yU, zU)), AU
+       get textContent() {
+         return this.data
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4195-L4198` → after: `L6225-L6226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6225-L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6225-L6226) · [Before (L4195-L4198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4195-L4198)

```diff
-       inputsStamped(UU, XU, zU, cU) {
-         return function(UU, XU, zU, cU) {
-           return UU.program === zU && UU.geometry === DQ(XU) && UU.instanceLayout === cU
-         }(UU, XU, cU, this.drawDefines.instanceLayout(XU.owner, zU))
+       set textContent(HH) {
+         this.data = HH
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4200-L4201` → after: `L6228-L6229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6228-L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6228-L6229) · [Before (L4200-L4201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4200-L4201)

```diff
-       withGpuBuffers(UU) {
-         return jQ(UU, this.resources, this.zeroBuffer) ? UU : null
+       toString() {
+         return `RRCDATASection data=${JSON.stringify(this.data)}`
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4203-L4207` → after: `L6231-L6247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6231-L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6231-L6247) · [Before (L4203-L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4203-L4207)

```diff
-       instanceBuffersFit(UU, XU, zU) {
-         const cU = bQ(XU, zU, this.resources, this.zeroBuffer);
-         if (cU) {
-           const yU = XU.ends[cU.index] - XU.offsets[cU.index] + XU.gUU[cU.index];
-           return this.warnOnce(`overrun:${UU}`, `${UU} draws ${zU} instances from a ${yU}-byte buffer (${cU.needed} needed)`), !1
+     }
+     class CS {
+       constructor(HH, BH) {
+         var LH = this;
+         if (hA(this, "onChange"), hA(this, "classes", []), hA(this, "add", (function() {
+             for (var HH = arguments.length, BH = new Array(HH), AH = 0; AH < HH; AH++) BH[AH] = arguments[AH];
+             for (const rH of BH) {
+               const HH = String(rH);
+               LH.classes.indexOf(HH) >= 0 || LH.classes.push(HH)
+             }
+             LH.onChange && LH.onChange(LH.classes.join(" "))
+           })), hA(this, "remove", (function() {
+             for (var HH = arguments.length, BH = new Array(HH), AH = 0; AH < HH; AH++) BH[AH] = arguments[AH];
+             LH.classes = LH.classes.filter((HH => -1 === BH.indexOf(HH))), LH.onChange && LH.onChange(LH.classes.join(" "))
+           })), HH) {
+           const BH = HH.trim().split(/\s+/);
+ ... (1 more added lines; see GitHub link above)
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4209` → after: `L6249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6249) · [Before (L4209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4209)

```diff
-         return !0
+         this.onChange = BH
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4211-L4221` → after: `L6251-L6373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6251-L6373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6251-L6373) · [Before (L4211-L4221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4211-L4221)

```diff
-       createBinding(UU, XU, zU, cU) {
-         const yU = `${XU._colorFormat}|${XU._depthStencilFormat}|${XU._depthCompare}|${XU._sampleCount}`,
-           QU = CX(this.device, XU);
-         if (UU === this.skyLastRenderable) {
-           let zU = null;
-           return {
-             renderable: UU,
-             pipeline: QU,
-             draw: UU => zU ? this.drawSky(UU, XU, yU, zU) : 0,
-             update: UU => {
-               zU = UU
+     }
+ 
+     function ES(HH, BH) {
+       return BH.parentNode && BH.parentNode.removeChild(BH), HH.lastChild ? (HH.lastChild.nextSibling = BH, BH.previousSibling = HH.lastChild) : (HH.firstChild = BH, BH.previousSibling = null), HH.lastChild = BH, BH.nextSibling = null, BH.parentNode = HH, BH.parentElement = HH, B … [truncated]
+     }
+ 
+     function XS(HH, BH, LH) {
+       if (!LH) return ES(HH, BH);
+       if (LH.parentNode !== HH) throw new Error("Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode.");
+       return BH === LH || (BH.parentNode && BH.parentNode.removeChild(BH), BH.previousSibling = LH.previousSibling, LH.previousSibling = BH, BH.nextSibling = LH, BH.previousSibling ? BH.previousSibling.nextSibling = BH : HH.firstChild = BH, BH.parentElement = HH, BH.parentNode =  … [truncated]
+     }
+ 
+     function GS(HH, BH) {
+       if (BH.parentNode !== HH) throw new Error("Failed to execute 'removeChild' on 'RRNode': The RRNode to be removed is not a child of this RRNode.");
+       return BH.previousSibling ? BH.previousSibling.nextSibling = BH.nextSibling : HH.firstChild = BH.nextSibling, BH.nextSibling ? BH.nextSibling.previousSibling = BH.previousSibling : HH.lastChild = BH.previousSibling, BH.previousSibling = null, BH.nextSibling = null, BH.paren … [truncated]
+     }
+ ... (107 more added lines; see GitHub link above)
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4225-L4228` → after: `L6464-L6469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6464-L6469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6464-L6469) · [Before (L4225-L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4225-L4228)

```diff
-         return {
-           renderable: UU,
-           pipeline: QU,
-           draw: UU => (cU ? cU.execute(UU, XU, yU) : 0) + this.drawList(UU, XU, yU, zU)
+         GH = rH[++zH], QH = SH[--XH]
+       } else if (TS(YH, uH, LH.mirror, AH)) {
+         try {
+           HH.insertBefore(YH, GH)
+         } catch (xH) {
+           console.warn(xH)
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4230-L4237` → after: `L6471-L6478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6471-L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6471-L6478) · [Before (L4230-L4237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4230-L4237)

```diff
-       }
-       drawSky(UU, XU, zU, cU) {
-         const yU = this.lists.skyDraws,
-           QU = yU.length > 0;
-         if (QU) {
-           var AU;
-           const zU = (null !== (AU = XU._depthCompare) && void 0 !== AU ? AU : WX).startsWith("greater") ? 0 : 1;
-           UU.setViewport(0, 0, cU.targetWidth, cU.targetHeight, zU, zU)
+         YH = rH[--CH], uH = SH[++EH]
+       } else {
+         if (!hH) {
+           hH = {};
+           for (let HH = zH; HH <= CH; HH++) {
+             const BH = rH[HH];
+             BH && LH.mirror.hasNode(BH) && (hH[LH.mirror.getId(BH)] = HH)
+           }
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4239-L4248` → after: `L6480-L6496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6480-L6496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6480-L6496) · [Before (L4239-L4248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4239-L4248)

```diff
-         const FU = this.drawList(UU, XU, zU, yU);
-         return QU && UU.setViewport(0, 0, cU.targetWidth, cU.targetHeight, 0, 1), FU
-       }
-       drawList(UU, XU, zU, cU) {
-         let yU = 0;
-         const QU = this.binder;
-         QU.reset();
-         for (const AU of cU) {
-           const cU = this.pipelineFor(AU, XU, zU);
-           cU && (QU.bind(UU, AU, cU, this.meshSlots.bindGroup, AU.slotOffset), AU.indexBuffer ? UU.drawIndexed(AU.count, AU.instances, AU.first, 0, 0) : UU.draw(AU.count, AU.instances, AU.first, 0), yU++)
+         tH = hH[AH.getId(uH)];
+         const BH = rH[tH];
+         if (void 0 !== tH && BH && TS(BH, uH, LH.mirror, AH)) {
+           try {
+             HH.insertBefore(BH, GH)
+           } catch (xH) {
+             console.warn(xH)
+           }
+           rH[tH] = void 0
+         } else {
+           const BH = vS(uH, LH.mirror, AH);
+           "#document" === HH.nodeName && GH && (BH.nodeType === BH.DOCUMENT_TYPE_NODE && GH.nodeType === GH.DOCUMENT_TYPE_NODE || BH.nodeType === BH.ELEMENT_NODE && GH.nodeType === GH.ELEMENT_NODE) && (HH.removeChild(GH), LH.mirror.removeNodeFromMap(GH), GH = rH[++zH]);
+           try {
+             HH.insertBefore(BH, GH || null)
+           } catch (xH) {
+             console.warn(xH)
+ ... (1 more added lines; see GitHub link above)
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4250` → after: `L6498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6498) · [Before (L4250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4250)

```diff
-         return yU
+         uH = SH[++EH]
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4252-L4290` → after: `L6500-L6508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6500-L6508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6500-L6508) · [Before (L4252-L4290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4252-L4290)

```diff
-       pipelineFor(UU, XU, zU) {
-         var cU, yU;
-         if (UU.program.failed) return null;
-         const QU = UU.inputs;
-         if (QU.pipeline && QU.pipelineTarget === zU) return QU.pipeline;
-         const AU = `${UU.pipelineKey}|${zU}`,
-           FU = this.pipelines.get(AU);
-         if (void 0 !== FU) return FU && (QU.pipeline = FU, QU.pipelineTarget = zU), FU || null;
-         this.pipelines.set(AU, null);
-         const {
-           program: oU,
-           layout: DU,
-           state: EU
-         } = UU, YU = {
-           label: `standard-${oU.id}`,
-           layout: oU.pipelineLayout,
- ... (23 more removed lines; see GitHub link above)
+       if (zH > CH) {
+         const BH = SH[XH + 1];
+         let rH = null;
+         for (BH && (rH = LH.mirror.yAH(AH.getId(BH))); EH <= XH; ++EH) {
+           const BH = vS(SH[EH], LH.mirror, AH);
+           try {
+             HH.insertBefore(BH, rH)
+           } catch (xH) {
+             console.warn(xH)
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4336-L4346` → after: `L6511-L6518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6511-L6518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6511-L6518) · [Before (L4336-L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4336-L4346)

```diff
-         return yU >= 0 && (XU.instances = this.casterWorlds, XU.instanceCount = yU), XU.instanceCount > 0
-       }
-       async reportFailure(UU, XU, zU) {
-         const cU = [];
-         let yU = !0;
-         for (const [QU, AU] of [
-             ["vertex", UU.vertex],
-             ["fragment", UU.fragment]
-           ]) {
-           const UU = await AU.getCompilationInfo();
-           for (const XU of UU.messages) yU &&= "error" !== XU.type, cU.push(`${QU}:${XU.lineNum}:${XU.linePos} ${XU.type}: ${XU.message}`)
+       } else if (EH > XH)
+         for (; zH <= CH; zH++) {
+           const BH = rH[zH];
+           if (BH && BH.parentNode === HH) try {
+             HH.removeChild(BH), LH.mirror.removeNodeFromMap(BH)
+           } catch (xH) {
+             console.warn(xH)
+           }
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4348-L4359` → after: `L6520-L6522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6520-L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6520-L6522) · [Before (L4348-L4359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4348-L4359)

```diff
-         if (yU && !UU.packGroup) return this.pipelines.set(XU, !1), console.error(`Lite: pipeline ${XU} failed`, zU), void EX(this.device, "mesh", UU.kind, zU);
-         UU.failed || (UU.failed = !0, console.error(`Lite: program ${UU.id} failed`, zU, cU.join("\n"), {
-           program: UU.program,
-           key: UU.key
-         }), EX(this.device, "mesh", UU.kind, zU, yU ? null : cU[0]))
-       }
-     }
- 
-     function rA(UU) {
-       var XU, zU;
-       const cU = null === (XU = UU.XM) || void 0 === XU || null === (zU = XU.aShaderPackItem) || void 0 === zU ? void 0 : zU.x;
-       return void 0 !== cU && 0 !== (cU & qX.i)
+       let WH = HH.firstChild,
+         MH = BH.firstChild;
+       for (; null !== WH && null !== MH;) MS(WH, MH, LH, AH), WH = WH.nextSibling, MH = MH.nextSibling
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4367-L4403` → after: `L6525-L6549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6525-L6549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6525-L6549) · [Before (L4367-L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4367-L4403)

```diff
-     function vA(UU, XU, zU, cU, yU) {
-       const QU = zU[0].width;
-       try {
-         return yU ? function(UU, XU, zU) {
-           const cU = (0, HA.e)(UU, zU, zU, 6);
-           for (let yU = 0; yU < 6; yU++)(0, HA.h)(UU, cU, yU, XU[MA[yU]], {
-             invertY: !1
-           });
-           return cU.texture
-         }(UU, zU, QU) : function(UU, XU, zU, cU) {
-           const yU = UU.createTexture({
-             label: "sink-cube",
-             size: {
-               width: zU,
-               height: zU,
-               depthOrArrayLayers: 6
- ... (21 more removed lines; see GitHub link above)
+     function vS(HH, BH, LH) {
+       const AH = LH.getId(HH),
+         rH = LH.getMeta(HH);
+       let SH = null;
+       if (AH > -1 && (SH = BH.yAH(AH)), null !== SH && PS(SH, HH)) return SH;
+       switch (HH.RRNodeType) {
+         case dr.Document:
+           SH = new Document;
+           break;
+         case dr.DocumentType:
+           SH = document.implementation.createDocumentType(HH.name, HH.publicId, HH.systemId);
+           break;
+         case dr.Element: {
+           let BH = HH.tagName.toLowerCase();
+           BH = QS[BH] || BH, SH = rH && "isSVG" in rH && (null == rH ? void 0 : rH.isSVG) ? document.createElementNS(uS.svg, BH) : document.createElement(HH.tagName);
+           break
+ ... (9 more added lines; see GitHub link above)
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4407-L4408` → after: `L6560-L6561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6560-L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6560-L6561) · [Before (L4407-L4408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4407-L4408)

```diff
-     function VA(UU) {
-       for (const XU of null !== UU && void 0 !== UU ? UU : []) null === XU || void 0 === XU || XU.close()
+     function PS(HH, BH) {
+       return HH.nodeType === BH.nodeType && (HH.nodeType !== HH.ELEMENT_NODE || HH.tagName.toUpperCase() === BH.tagName)
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4410-L4418` → after: `L6563-L6567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6563-L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6563-L6567) · [Before (L4410-L4418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4410-L4418)

```diff
-     async function sA(UU) {
-       const XU = [],
-         zU = [];
-       if (await Promise.all(UU.map(((UU, cU) => (XU[cU] = null, UU.then((UU => {
-           XU[cU] = UU
-         }), (UU => {
-           zU.push(UU)
-         })))))), zU.length > 0) throw VA(XU), zU[0];
-       return XU
+ 
+     function TS(HH, BH, LH, AH) {
+       const rH = LH.getId(HH),
+         SH = AH.getId(BH);
+       return -1 !== rH && rH === SH && PS(HH, BH)
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4420` → after: `L6569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6569) · [Before (L4420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4420)

```diff
-     class nA {
+     class US extends BS {
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4422-L4439` → after: `L6571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6571) · [Before (L4422-L4439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4422-L4439)

```diff
-         this.xY = UU, this.starts = [], this.lengths = [], this.used = 0, UU > 0 && (this.starts.push(0), this.lengths.push(UU))
-       }
-       allocate(UU) {
-         const {
-           starts: XU,
-           lengths: zU
-         } = this;
-         for (let cU = 0; cU < XU.length; cU++) {
-           if (zU[cU] < UU) continue;
-           const yU = XU[cU];
-           return zU[cU] === UU ? (XU.splice(cU, 1), zU.splice(cU, 1)) : (XU[cU] += UU, zU[cU] -= UU), this.used += UU, yU
-         }
-         return -1
-       }
-       free(UU, XU) {
-         this.used -= XU;
- ... (2 more removed lines; see GitHub link above)
+         super(), hA(this, "UNSERIALIZED_STARTING_ID", -2), hA(this, "_unserializedId", this.UNSERIALIZED_STARTING_ID), hA(this, "mirror", new qS), hA(this, "scrollData", null), HH && (this.mirror = HH)
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4441-L4451` → after: `L6573-L6574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6573-L6574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6573-L6574) · [Before (L4441-L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4441-L4451)

```diff
-       grow(UU) {
-         const XU = this.xY;
-         this.xY = UU, this.release(XU, UU - XU)
-       }
-       truncate(UU) {
-         const {
-           starts: XU,
-           lengths: zU
-         } = this;
-         for (let cU = XU.length - 1; cU >= 0 && XU[cU] + zU[cU] > UU; cU--) XU[cU] >= UU ? (XU.splice(cU, 1), zU.splice(cU, 1)) : zU[cU] = UU - XU[cU];
-         this.xY = UU
+       get unserializedId() {
+         return this._unserializedId--
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4453-L4467` → after: `L6576-L6577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6576-L6577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6576-L6577) · [Before (L4453-L4467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4453-L4467)

```diff
-       release(UU, XU) {
-         const {
-           starts: zU,
-           lengths: cU
-         } = this;
-         let yU = 0,
-           QU = zU.length;
-         for (; yU < QU;) {
-           const XU = yU + QU >> 1;
-           zU[XU] < UU ? yU = XU + 1 : QU = XU
-         }
-         const AU = yU,
-           FU = AU > 0 && zU[AU - 1] + cU[AU - 1] === UU,
-           oU = AU < zU.length && UU + XU === zU[AU];
-         FU && oU ? (cU[AU - 1] += XU + cU[AU], zU.splice(AU, 1), cU.splice(AU, 1)) : FU ? cU[AU - 1] += XU : oU ? (zU[AU] = UU, cU[AU] += XU) : (zU.splice(AU, 0, UU), cU.splice(AU, 0, XU))
+       createDocument(HH, BH, LH) {
+         return new US
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4469-L4511` → after: `L6579-L6581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6579-L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6579-L6581) · [Before (L4469-L4511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4469-L4511)

```diff
-     }
-     const mA = 256;
-     class lA {
-       constructor(UU, XU) {
-         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
-           cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
-         this.device = UU, this.onReplaced = XU, this.mergeGap = zU, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.Qt = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], thi … [truncated]
-         const yU = Math.max(mA, Math.ceil(cU / mA) * mA);
-         this.bytes = new Uint8Array(yU), this.words = new Uint32Array(this.bytes.buffer), this.Qt = new nA(yU / mA)
-       }
-       get buffer() {
-         return this.gpu ??= this.createGpu(this.bytes.byteLength)
-       }
-       static slotBytes(UU) {
-         return Math.max(1, Math.ceil(UU / mA)) * mA
-       }
- ... (27 more removed lines; see GitHub link above)
+       createDocumentType(HH, BH, LH) {
+         const AH = new VS(HH, BH, LH);
+         return AH.ownerDocument = this, AH
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4513-L4517` → after: `L6583-L6610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6583-L6610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6583-L6610) · [Before (L4513-L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4513-L4517)

```diff
-       copyWords(UU, XU, zU, cU) {
-         let yU = this.sourceWords.get(XU);
-         yU || (yU = new Uint32Array(XU, 0, XU.byteLength >> 2), this.sourceWords.set(XU, yU));
-         const QU = this.words;
-         for (let AU = 0; AU < cU; AU++) QU[UU + AU] = yU[zU + AU]
+       createElement(HH) {
+         const BH = HH.toUpperCase();
+         let LH;
+         switch (BH) {
+           case "AUDIO":
+           case "VIDEO":
+             LH = new bS(BH);
+             break;
+           case "IFRAME":
+             LH = new IS(BH, this.mirror);
+             break;
+           case "CANVAS":
+             LH = new mS(BH);
+             break;
+           case "STYLE":
+             LH = new oS(BH);
+ ... (12 more added lines; see GitHub link above)
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4519-L4520` → after: `L6612-L6614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6612-L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6612-L6614) · [Before (L4519-L4520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4519-L4520)

```diff
-       move(UU, XU, zU) {
-         this.bytes.copyWithin(XU, UU, UU + zU), this.markDirty(XU, XU + zU)
+       createCDATASection(HH) {
+         const BH = new KS(HH);
+         return BH.ownerDocument = this, BH
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4522-L4544` → after: `L6616-L6618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6616-L6618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6616-L6618) · [Before (L4522-L4544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4522-L4544)

```diff
-       flush() {
-         for (const XU of this.retired) this.onReplaced(XU), XU.destroy();
-         this.retired.length = 0;
-         const UU = this.dirtyStarts.length;
-         if (UU > 0) {
-           const {
-             dirtyStarts: XU,
-             dirtyEnds: zU,
-             order: cU
-           } = this;
-           cU.length = UU;
-           for (let FU = 0; FU < UU; FU++) cU[FU] = FU;
-           UU > 1 && cU.sort(((UU, zU) => XU[UU] - XU[zU]));
-           const yU = this.mergeGap;
-           let QU = XU[cU[0]],
-             AU = zU[cU[0]];
- ... (7 more removed lines; see GitHub link above)
+       createTextNode(HH) {
+         const BH = new fS(HH);
+         return BH.ownerDocument = this, BH
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4546-L4550` → after: `L6620-L6621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6620-L6621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6620-L6621) · [Before (L4546-L4550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4546-L4550)

```diff
-       ZY() {
-         this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
-         const UU = this.freed;
-         for (let XU = 0; XU < UU.length; XU += 2) this.Qt.free(UU[XU] / mA, UU[XU + 1] / mA);
-         UU.length = 0
+       destroyTree() {
+         this.firstChild = null, this.lastChild = null, this.mirror.reset()
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4552-L4557` → after: `L6623-L6624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6623-L6624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6623-L6624) · [Before (L4552-L4557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4552-L4557)

```diff
-       send(UU, XU) {
-         this.device.queue.writeBuffer(this.gpu, UU, this.bytes.buffer, UU, XU - UU);
-         for (const zU of this.replaced) {
-           const cU = Math.min(XU, zU.size);
-           cU > UU && this.device.queue.writeBuffer(zU, UU, this.bytes.buffer, UU, cU - UU)
-         }
+       open() {
+         super.open(), this._unserializedId = this.UNSERIALIZED_STARTING_ID
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4559-L4560` → after: `L6626-L6630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6626-L6630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6626-L6630) · [Before (L4559-L4560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4559-L4560)

```diff
-       markDirty(UU, XU) {
-         UU &= -4, XU = XU + 3 & -4, this.holding ? (this.dirtyStarts.push(UU), this.dirtyEnds.push(XU)) : this.send(UU, XU)
+     }
+     const VS = LS;
+     class OS extends AS {
+       constructor() {
+         super(...arguments), hA(this, "inputData", null), hA(this, "scrollData", null)
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4562-L4568` → after: `L6632-L6637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6632-L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6632-L6637) · [Before (L4562-L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4562-L4568)

```diff
-       grow(UU) {
-         const XU = this.Qt.xY,
-           zU = Math.max(2 * XU, UU),
-           cU = new Uint8Array(zU * mA);
-         cU.set(this.bytes);
-         const yU = this.gpu;
-         this.gpu = this.createGpu(cU.byteLength), this.bytes = cU, this.words = new Uint32Array(cU.buffer), this.Qt.grow(zU), yU && (this.replaced.push(yU), this.onReplaced(yU)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, XU * mA)
+     }
+     class bS extends rS {}
+     class kS extends SS {}
+     class mS extends OS {
+       constructor() {
+         super(...arguments), hA(this, "rr_dataURL", null), hA(this, "canvasMutations", [])
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4570-L4575` → after: `L6639-L6640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6639-L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6639-L6640) · [Before (L4570-L4575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4570-L4575)

```diff
-       createGpu(UU) {
-         return this.device.createBuffer({
-           label: "sink-dynamic-arena",
-           size: UU,
-           usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
-         })
+       getContext() {
+         return null
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4578-L4580` → after: `L6643-L6646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6643-L6646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6643-L6646) · [Before (L4578-L4580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4578-L4580)

```diff
- 
-     function xA(UU) {
-       return Array.isArray(UU) ? new Float32Array(UU) : UU
+     class oS extends OS {
+       constructor() {
+         super(...arguments), hA(this, "rules", [])
+       }
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4582-L4588` → after: `L6648-L6651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6648-L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6648-L6651) · [Before (L4582-L4588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4582-L4588)

```diff
- 
-     function JA(UU, XU, zU, cU, yU) {
-       const QU = xU(yU),
-         AU = Math.min(yU, cU.byteLength);
-       if (QU === AU && cU.byteOffset % 4 === 0) return void UU.queue.writeBuffer(XU, zU, cU.buffer, cU.byteOffset, QU);
-       const FU = new Uint8Array(QU);
-       FU.set(new Uint8Array(cU.buffer, cU.byteOffset, AU)), UU.queue.writeBuffer(XU, zU, FU)
+     class IS extends OS {
+       constructor(HH, BH) {
+         super(HH), hA(this, "contentDocument", new US), this.contentDocument.mirror = BH
+       }
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4591-L4617` → after: `L6657-L6661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6657-L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6657-L6661) · [Before (L4591-L4617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4591-L4617)

```diff
-     function jA(UU, XU, zU) {
-       const cU = "linear",
-         yU = "nearest";
-       let QU = yU,
-         AU = yU,
-         FU = "nearest",
-         oU = !XU;
-       switch (UU) {
-         case 11:
-           QU = cU, AU = cU;
-           break;
-         case 3:
-           QU = cU, AU = cU, FU = XU ? "linear" : "nearest";
-           break;
-         case 8:
-           FU = XU ? "linear" : "nearest";
- ... (11 more removed lines; see GitHub link above)
+     function cS(HH, BH, LH, AH) {
+       let rH;
+       switch (HH.nodeType) {
+         case YS.DOCUMENT_NODE:
+           AH && "IFRAME" === AH.nodeName ? rH = AH.contentDocument : (rH = BH, rH.compatMode = HH.compatMode);
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4619-L4620` → after: `L6663-L6682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6663-L6682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6663-L6682) · [Before (L4619-L4620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4619-L4620)

```diff
-         case 9:
-           QU = cU;
+         case YS.DOCUMENT_TYPE_NODE: {
+           const LH = HH;
+           rH = BH.createDocumentType(LH.name, LH.publicId, LH.systemId);
+           break
+         }
+         case YS.ELEMENT_NODE: {
+           const LH = HH,
+             AH = (SH = LH) instanceof HTMLFormElement ? "FORM" : SH.tagName.toUpperCase();
+           rH = BH.createElement(AH);
+           const hH = rH;
+           for (const {
+               name: HH,
+               value: BH
+             }
+             of Array.from(LH.attributes)) hH.attributes[HH] = BH;
+           LH.scrollLeft && (hH.scrollLeft = LH.scrollLeft), LH.scrollTop && (hH.scrollTop = LH.scrollTop);
+ ... (4 more added lines; see GitHub link above)
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4622-L4623` → after: `L6684-L6685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6684-L6685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6684-L6685) · [Before (L4622-L4623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4622-L4623)

```diff
-         case 10:
-           QU = cU, FU = XU ? "linear" : "nearest";
+         case YS.CDATA_SECTION_NODE:
+           rH = BH.createCDATASection(HH.data);
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4625-L4626` → after: `L6687-L6688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6687-L6688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6687-L6688) · [Before (L4625-L4626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4625-L4626)

```diff
-         case 2:
-           QU = cU, AU = cU, zU > 1 ? (FU = "linear", oU = !1) : oU = !0;
+         case YS.COMMENT_NODE:
+           rH = BH.createComment(HH.textContent || "");
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4628-L4629` → after: `L6690-L6693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6690-L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6690-L6693) · [Before (L4628-L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4628-L4629)

```diff
-         case 12:
-           QU = cU, oU = !0;
+         case YS.DOCUMENT_FRAGMENT_NODE:
+           rH = AH.attachShadow({
+             mode: "open"
+           });
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4632-L4646` → after: `L6696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6696) · [Before (L4632-L4646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4632-L4646)

```diff
-           oU = !0
-       }
-       return zU > 1 && !oU ? {
-         magFilter: cU,
-         minFilter: cU,
-         mipmapFilter: "linear",
-         maxAnisotropy: zU
-       } : {
-         magFilter: QU,
-         minFilter: AU,
-         mipmapFilter: FU,
-         ...oU ? {
-           lodMinClamp: 0,
-           lodMaxClamp: 0
-         } : {}
+           return null
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4651` → after: `L6706-L6715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6706-L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6706-L6715) · [Before (L4651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4651)

```diff
-       return 0 === UU ? "clamp-to-edge" : 2 === UU ? "mirror-repeat" : "repeat"
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new CA,
+         LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new US;
+       return function HH(AH, rH) {
+         const SH = cS(AH, LH, BH, rH);
+         if (null !== SH)
+           if ("IFRAME" !== (null == rH ? void 0 : rH.nodeName) && AH.nodeType !== YS.DOCUMENT_FRAGMENT_NODE && (null == rH || rH.appendChild(SH), SH.parentNode = rH, SH.parentElement = rH), "IFRAME" === AH.nodeName) {
+             const BH = AH.contentDocument;
+             BH && HH(BH, SH)
+           } else AH.nodeType !== YS.DOCUMENT_NODE && AH.nodeType !== YS.ELEMENT_NODE && AH.nodeType !== YS.DOCUMENT_FRAGMENT_NODE || (AH.nodeType === YS.ELEMENT_NODE && AH.shadowRoot && HH(AH.shadowRoot, SH), AH.childNodes.forEach((BH => HH(BH, SH))))
+       }(HH, null), LH
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4654-L4673` → after: `L6718-L6719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6718-L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6718-L6719) · [Before (L4654-L4673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4654-L4673)

```diff
-       constructor(UU, XU) {
-         let {
-           vertexArena: zU = !0
-         } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-         this.engine = UU, this.device = XU, this.buffers = new WeakMap, this.w6 = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, t … [truncated]
-       }
-       createArena() {
-         return new lA(this.device, (UU => {
-           var XU;
-           null === (XU = this.onDestroy) || void 0 === XU || XU.call(this, UU), this.gpuBuffersVersion++
-         }))
-       }
-       rebind(UU, XU) {
-         this.engine = UU, this.device = XU, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
-         for (const zU of this.liveUploads) zU.rebind();
-         for (const zU of this.rebindWaiters.splice(0)) zU()
- ... (4 more removed lines; see GitHub link above)
+       constructor() {
+         hA(this, "idNodeMap", new Map), hA(this, "nodeMetaMap", new WeakMap)
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4675` → after: `L6721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6721) · [Before (L4675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4675)

```diff
-       endUploadFrame() {
+       getId(HH) {
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4677-L4709` → after: `L6723-L6724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6723-L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6723-L6724) · [Before (L4677-L4709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4677-L4709)

```diff
-         null === (UU = this.arena) || void 0 === UU || UU.ZY()
-       }
-       vertexBufferCreated(UU, XU, zU) {
-         let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zU ? "sink-dynamic-vertices" : "sink-vertices";
-         this.bufferDeleted(UU);
-         const yU = xA(XU);
-         UU.xY = yU.byteLength, this.buffers.set(UU, {
-           gpu: null,
-           slot: -1,
-           slotBytes: 0,
-           size: 0,
-           arena: zU && null !== this.arena,
-           pending: yU,
-           ownsPending: !1,
-           usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
-           label: cU
- ... (17 more removed lines; see GitHub link above)
+         if (!HH) return -1;
+         return (null == (BH = this.getMeta(HH)) ? void 0 : BH.id) ?? -1
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4711-L4730` → after: `L6726-L6727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6726-L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6726-L6727) · [Before (L4711-L4730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4711-L4730)

```diff
-       indexBufferCreated(UU, XU) {
-         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
-         this.bufferDeleted(UU);
-         const cU = function(UU) {
-           if (UU instanceof Uint16Array || UU instanceof Uint32Array) return UU;
-           for (let XU = 0; XU < UU.length; XU++)
-             if (UU[XU] >= 65535) return new Uint32Array(UU);
-           return new Uint16Array(UU)
-         }(XU);
-         UU.is32Bits = 4 === cU.BYTES_PER_ELEMENT, UU.xY = cU.byteLength, this.buffers.set(UU, {
-           gpu: null,
-           slot: -1,
-           slotBytes: 0,
-           size: 0,
-           arena: !1,
-           pending: cU,
- ... (4 more removed lines; see GitHub link above)
+       yAH(HH) {
+         return this.idNodeMap.get(HH) || null
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4732-L4759` → after: `L6729-L6730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6729-L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6729-L6730) · [Before (L4732-L4759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4732-L4759)

```diff
-       bufferDeleted(UU) {
-         const XU = this.buffers.get(UU);
-         null !== XU && void 0 !== XU && XU.gpu ? (this.destroyBuffer(XU.gpu), this.gpuBuffersVersion++) : XU && XU.slot >= 0 && (this.arena.free(XU.slot, XU.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(UU)
-       }
-       update(UU, XU, zU, cU) {
-         if (UU.slot >= 0) this.updateSlot(UU, XU, zU, cU);
-         else if (UU.gpu) {
-           if (zU + xU(cU) > UU.gpu.size) {
-             const XU = this.device.createBuffer({
-                 label: UU.label,
-                 size: xU(Math.max(2 * UU.gpu.size, zU + cU)),
-                 usage: UU.usage | GPUBufferUsage.COPY_SRC
-               }),
-               yU = this.device.createCommandEncoder();
-             yU.copyBufferToBuffer(UU.gpu, 0, XU, 0, UU.gpu.size), this.device.queue.submit([yU.finish()]), this.destroyBuffer(UU.gpu), this.gpuBuffersVersion++, UU.gpu = XU
-           }
- ... (12 more removed lines; see GitHub link above)
+       getIds() {
+         return Array.from(this.idNodeMap.keys())
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4761-L4763` → after: `L6732-L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6732-L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6732-L6733) · [Before (L4761-L4763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4761-L4763)

```diff
-       updateSlot(UU, XU, zU, cU) {
-         const yU = this.arena;
-         zU + xU(cU) > UU.size && (UU.size = xU(Math.max(2 * UU.size, zU + cU)), yU.growTo(UU.slot + UU.size), this.gpuBuffersVersion++), 0 === cU ? this.writeSlot(UU, zU, hA, 0, 4, !1) : this.writeSlot(UU, zU, XU, XU.byteOffset, cU, !0)
+       getMeta(HH) {
+         return this.nodeMetaMap.get(HH) || null
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4765-L4767` → after: `L6735-L6737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6735-L6737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6735-L6737) · [Before (L4765-L4767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4765-L4767)

```diff
-       writeSlot(UU, XU, zU, cU, yU, QU) {
-         const AU = XU + (QU ? xU(yU) : yU);
-         AU > UU.slotBytes && this.moveSlot(UU, AU), this.arena.write(UU.slot + XU, zU, cU, yU, QU)
+       removeNodeFromMap(HH) {
+         const BH = this.getId(HH);
+         this.idNodeMap.delete(BH), HH.childNodes && HH.childNodes.forEach((HH => this.removeNodeFromMap(HH)))
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4769-L4773` → after: `L6739-L6740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6739-L6740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6739-L6740) · [Before (L4769-L4773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4769-L4773)

```diff
-       moveSlot(UU, XU) {
-         const zU = this.arena,
-           cU = lA.slotBytes(Math.max(XU, Math.min(2 * UU.slotBytes, UU.size))),
-           yU = zU.allocate(cU, null, UU.size);
-         zU.move(UU.slot, yU, UU.slotBytes), zU.free(UU.slot, UU.slotBytes), UU.slot = yU, UU.slotBytes = cU, this.gpuBuffersVersion++
+       has(HH) {
+         return this.idNodeMap.has(HH)
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4775-L4779` → after: `L6742-L6743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6742-L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6742-L6743) · [Before (L4775-L4779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4775-L4779)

```diff
-       cover(UU, XU) {
-         const zU = this.buffers.get(UU);
-         if (!zU || zU.slot < 0) return !1;
-         const cU = Math.min(XU, zU.size);
-         return !(cU <= zU.slotBytes) && (this.moveSlot(zU, cU), !0)
+       hasNode(HH) {
+         return this.nodeMetaMap.has(HH)
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4781-L4783` → after: `L6745-L6747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6745-L6747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6745-L6747) · [Before (L4781-L4783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4781-L4783)

```diff
-       destroyBuffer(UU) {
-         var XU;
-         null === (XU = this.onDestroy) || void 0 === XU || XU.call(this, UU), UU.destroy()
+       add(HH, BH) {
+         const LH = BH.id;
+         this.idNodeMap.set(LH, HH), this.nodeMetaMap.set(HH, BH)
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4785-L4814` → after: `L6749-L6753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6749-L6753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6749-L6753) · [Before (L4785-L4814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4785-L4814)

```diff
-       gpuBuffer(UU) {
-         const XU = this.buffers.get(UU);
-         if (!XU) return null;
-         if (XU.slot >= 0) return this.arena.buffer;
-         if (XU.arena && XU.pending) {
-           const UU = XU.pending,
-             zU = this.arena;
-           return XU.size = xU(UU.byteLength), XU.slotBytes = lA.slotBytes(function(UU) {
-             const XU = new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength);
-             let zU = XU.length;
-             if (UU.byteOffset % 4 === 0) {
-               for (; zU % 4 !== 0 && 0 === XU[zU - 1];) zU--;
-               if (zU % 4 === 0) {
-                 const XU = new Uint32Array(UU.buffer, UU.byteOffset, zU / 4);
-                 let cU = XU.length;
-                 for (; cU > 0 && 0 === XU[cU - 1];) cU--;
- ... (14 more removed lines; see GitHub link above)
+       replace(HH, BH) {
+         const LH = this.yAH(HH);
+         if (LH) {
+           const HH = this.nodeMetaMap.get(LH);
+           HH && this.nodeMetaMap.set(BH, HH)
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4816-L4821` → after: `L6755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6755) · [Before (L4816-L4821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4816-L4821)

```diff
-         return XU.gpu
-       }
-       gpuOffset(UU) {
-         var XU, zU;
-         const cU = null !== (XU = null === (zU = this.buffers.get(UU)) || void 0 === zU ? void 0 : zU.slot) && void 0 !== XU ? XU : -1;
-         return cU < 0 ? 0 : cU
+         this.idNodeMap.set(HH, BH)
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4823-L4830` → after: `L6757-L6758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6757-L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6757-L6758) · [Before (L4823-L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4823-L4830)

```diff
-       gpuEnd(UU) {
-         var XU, zU;
-         const cU = this.buffers.get(UU);
-         return cU ? cU.slot >= 0 ? cU.slot + cU.size : null !== (XU = null === (zU = cU.gpu) || void 0 === zU ? void 0 : zU.size) && void 0 !== XU ? XU : 0 : 0
-       }
-       vertexInput(UU, XU, zU) {
-         var cU, yU, QU, AU;
-         return null !== (cU = null !== (yU = zU && this.modelInput(zU, XU)) && void 0 !== yU ? yU : null === (QU = null !== (AU = this.w6.get(UU)) && void 0 !== AU ? AU : this.batchUploads.get(UU)) || void 0 === QU ? void 0 : QU.inputs[XU]) && void 0 !== cU ? cU : null
+       reset() {
+         this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4832-L4837` → after: `L6760-L6776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6760-L6776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6760-L6776) · [Before (L4832-L4837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4832-L4837)

```diff
-       modelInput(UU, XU) {
-         const zU = this.geometrySlot(UU);
-         let cU = zU.inputs.get(XU);
-         if (void 0 === cU) {
-           const yU = UU.vertexAttributes.find((UU => UU.kind === XU));
-           cU = yU ? new pX(this.modelKey(zU, yU.data, !1), yU.offset, yU.stride, yU.components, !1, yU.glType, yU.isNormalized) : null, zU.inputs.set(XU, cU)
+     }
+ 
+     function gS(HH, BH) {
+       switch (HH.RRNodeType) {
+         case dr.Document:
+           return {
+             id: BH, type: HH.RRNodeType, childNodes: []
+           };
+         case dr.DocumentType: {
+           const LH = HH;
+           return {
+             id: BH,
+             type: HH.RRNodeType,
+             name: LH.name,
+             publicId: LH.publicId,
+             systemId: LH.systemId
+ ... (1 more added lines; see GitHub link above)
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4839-L4842` → after: `L6778-L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6778-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6778-L6790) · [Before (L4839-L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4839-L4842)

```diff
-         return cU
-       }
-       modelIndex(UU) {
-         return UU.indexData && this.modelKey(this.geometrySlot(UU), UU.indexData, !0)
+         case dr.Element:
+           return {
+             id: BH, type: HH.RRNodeType, tagName: HH.tagName.toLowerCase(), attributes: {}, childNodes: []
+           };
+         case dr.Text:
+         case dr.Comment:
+           return {
+             id: BH, type: HH.RRNodeType, textContent: HH.textContent || ""
+           };
+         case dr.CDATA:
+           return {
+             id: BH, type: HH.RRNodeType, textContent: ""
+           }
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4844-L4863` → after: `L6792-L6832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6792-L6832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6792-L6832) · [Before (L4844-L4863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4844-L4863)

```diff
-       geometrySlot(UU) {
-         var XU;
-         let zU = UU.gpu[eU.e.lite];
-         if ((null === (XU = zU) || void 0 === XU ? void 0 : XU.epoch) !== this.epoch) {
-           const XU = new Map,
-             cU = () => {
-               for (const UU of XU.values()) this.bufferDeleted(UU)
-             },
-             yU = UU => {
-               const zU = XU.get(UU);
-               zU && this.vertexBufferUpdated(zU, UU)
-             };
-           zU = {
-             keys: XU,
-             inputs: new Map,
-             release: cU,
- ... (4 more removed lines; see GitHub link above)
+     }
+     const NS = {
+         Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
+         ShadowRoot: ["host", "styleSheets"],
+         Element: ["shadowRoot", "querySelector", "querySelectorAll"],
+         MutationObserver: []
+       },
+       RS = {
+         Node: ["contains", "getRootNode"],
+         ShadowRoot: ["getSelection"],
+         Element: [],
+         MutationObserver: ["constructor"]
+       },
+       jS = {},
+       nS = {};
+ 
+ ... (25 more added lines; see GitHub link above)
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4866-L4878` → after: `L6835-L6871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6835-L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6835-L6871) · [Before (L4866-L4878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4866-L4878)

```diff
-       modelKey(UU, XU, zU) {
-         let cU = UU.keys.get(XU);
-         if (!cU) {
-           if (zU) {
-             const UU = {
-               xY: 0,
-               is32Bits: !1
-             };
-             this.indexBufferCreated(UU, XU, "model-indices"), cU = UU
-           } else cU = {
-             xY: 0
-           }, this.vertexBufferCreated(cU, XU, !1, "model-vertices");
-           UU.keys.set(XU, cU)
+     }
+     const DS = {};
+ 
+     function wS(HH, BH, LH) {
+       var AH, rH;
+       const SH = null == (AH = DS[HH]) ? void 0 : AH[LH];
+       if (SH) return SH.call(BH);
+       const hH = FS(HH),
+         tH = null == (rH = Object.getOwnPropertyDescriptor(hH, LH)) ? void 0 : rH.get;
+       return tH ? ((DS[HH] || (DS[HH] = {}))[LH] = tH, tH.call(BH)) : BH[LH]
+     }
+     const ZS = {};
+ 
+     function dS(HH, BH, LH) {
+       const AH = `${HH}.${String(LH)}`;
+       if (ZS[AH]) return ZS[AH].bind(BH);
+ ... (21 more added lines; see GitHub link above)
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4880` → after: `L6873-L6874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6873-L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6873-L6874) · [Before (L4880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4880)

```diff
-         return cU
+       } catch {
+         return () => {}
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4882-L4883` → after: `L6876-L6950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6876-L6950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6876-L6950) · [Before (L4882-L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4882-L4883)

```diff
-       indexFormat(UU) {
-         return UU.is32Bits ? "uint32" : "uint16"
+     }
+     /[1-9][0-9]{12}/.test(Date.now().toString()) || (sS = () => (new Date).getTime());
+     const iS = {
+       ownerDocument: function(HH) {
+         return wS("Node", HH, "ownerDocument")
+       },
+       childNodes: function(HH) {
+         return wS("Node", HH, "childNodes")
+       },
+       parentNode: function(HH) {
+         return wS("Node", HH, "parentNode")
+       },
+       parentElement: function(HH) {
+         return wS("Node", HH, "parentElement")
+       },
+       textContent: function(HH) {
+ ... (59 more added lines; see GitHub link above)
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4885-L4886` → after: `L6952-L6966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6952-L6966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6952-L6966) · [Before (L4885-L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4885-L4886)

```diff
-       get texturesLoading() {
-         return this.pending
+     };
+ 
+     function Bh(HH, BH) {
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
+         AH = null,
+         rH = 0;
+       return function() {
+         for (var SH = arguments.length, hH = new Array(SH), tH = 0; tH < SH; tH++) hH[tH] = arguments[tH];
+         const zH = Date.now();
+         rH || !1 !== LH.leading || (rH = zH);
+         const CH = BH - (zH - rH),
+           EH = this;
+         CH <= 0 || CH > BH ? (AH && (clearTimeout(AH), AH = null), rH = zH, HH.apply(EH, hH)) : AH || !1 === LH.trailing || (AH = setTimeout((() => {
+           rH = !1 === LH.leading ? 0 : Date.now(), AH = null, HH.apply(EH, hH)
+         }), CH))
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4888-L4889` → after: `L6968-L6987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6968-L6987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6968-L6987) · [Before (L4888-L4889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4888-L4889)

```diff
-       releaseSlot(UU, XU) {
-         --UU.refs > 0 || (this.releaseTexture(UU), VA(UU.images), null !== XU && this.textures.delete(XU))
+     }
+ 
+     function Lh(HH, BH, LH, AH) {
+       let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
+       const SH = rH.Object.getOwnPropertyDescriptor(HH, BH);
+       return rH.Object.defineProperty(HH, BH, AH ? LH : {
+         set(HH) {
+           setTimeout((() => {
+             LH.set.call(this, HH)
+           }), 0), SH && SH.set && SH.set.call(this, HH)
+         }
+       }), () => Lh(HH, BH, SH || {}, !0)
+     }
+ 
+     function Ah(HH) {
+       var BH, LH, AH, rH;
+ ... (4 more added lines; see GitHub link above)
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4891-L4919` → after: `L6989-L7016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6989-L7016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6989-L7016) · [Before (L4891-L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4891-L4919)

```diff
-       load(UU, XU) {
-         const {
-           epoch: zU
-         } = this, cU = XU.decoded = async function(UU) {
-           if ("cube" === UU.kind) return async function(UU) {
-             if (6 !== UU.length) throw new Error(`${UU.length} files where six faces were expected`);
-             const XU = await sA(UU.map((UU => hU(UU)))),
-               zU = XU[0].width;
-             return sA(XU.map((async UU => {
-               if (UU.width === zU && UU.height === zU) return UU;
-               try {
-                 return await createImageBitmap(UU, {
-                   ...bU,
-                   resizeWidth: zU,
-                   resizeHeight: zU
-                 })
- ... (13 more removed lines; see GitHub link above)
+     }
+ 
+     function rh() {
+       return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
+     }
+ 
+     function Sh() {
+       return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
+     }
+ 
+     function hh(HH) {
+       if (!HH) return null;
+       return HH.nodeType === HH.ELEMENT_NODE ? HH : iS.parentElement(HH)
+     }
+ 
+     function th(HH, BH, LH, AH) {
+ ... (12 more added lines; see GitHub link above)
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4921-L4930` → after: `L7018-L7057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7018-L7057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7018-L7057) · [Before (L4921-L4930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4921-L4930)

```diff
-       canvasUpdated(UU, XU, zU) {
-         const {
-           state: cU
-         } = this.textureSlot(UU);
-         cU.dynamicSource = {
-           invertY: XU,
-           premultiplied: zU
-         }, cU.dynamic && this.pushDynamic(UU.source, cU)
-       }
-       async atlasArrays(UU) {
+       return !1
+     }
+ 
+     function zh(HH, BH) {
+       return -1 !== BH.getId(HH)
+     }
+ 
+     function Ch(HH, BH, LH) {
+       return !("TITLE" !== HH.tagName || !LH.headTitleMutations) || -2 === BH.getId(HH)
+     }
+ 
+     function Eh(HH, BH) {
+       if (TH(HH)) return !1;
+       const LH = BH.getId(HH);
+       if (!BH.has(LH)) return !0;
+       const AH = iS.parentNode(HH);
+ ... (24 more added lines; see GitHub link above)
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4932-L4943` → after: `L7059-L7069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7059-L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7059-L7069) · [Before (L4932-L4943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4932-L4943)

```diff
-           device: XU,
-           epoch: zU
-         } = this;
-         let cU;
-         try {
-           cU = await XX(XU, UU)
-         } catch (QU) {
-           if (zU === this.epoch) {
-             if (!DX(XU)) throw QU;
-             await new Promise((UU => {
-               this.rebindWaiters.push(UU)
-             }))
+           nextId: HH,
+           parentId: SH
+         } = rH;
+         if (HH && HH in BH) {
+           const SH = BH[HH];
+           if (SH.parent) {
+             const HH = SH.parent.children.indexOf(SH);
+             SH.parent.children.splice(HH, 0, LH(rH, SH.parent))
+           } else {
+             const HH = AH.indexOf(SH);
+             AH.splice(HH, 0, LH(rH, null))
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4945-L4967` → after: `L7071-L7126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7071-L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7071-L7126) · [Before (L4945-L4967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4945-L4967)

```diff
-           return this.atlasArrays(UU)
-         }
-         if (cU.forEach(((XU, zU) => {
-             this.atlasSources.has(XU) || this.atlasSources.set(XU, {
-               sources: UU,
-               index: zU,
-               stride: cU[0].layers
-             })
-           })), zU !== this.epoch) return cU;
-         const yU = (0, uA.d)(this.engine, {
-           magFilter: "nearest",
-           minFilter: "nearest",
-           mipmapFilter: "linear",
-           addressModeU: "repeat",
-           addressModeV: "repeat"
-         });
- ... (7 more removed lines; see GitHub link above)
+         } else if (SH in BH) {
+           const HH = BH[SH];
+           HH.children.push(LH(rH, HH))
+         } else AH.push(LH(rH, null))
+       }
+       return AH
+     }
+ 
+     function uh(HH, BH) {
+       BH(HH.value);
+       for (let LH = HH.children.length - 1; LH >= 0; LH--) uh(HH.children[LH], BH)
+     }
+ 
+     function Qh(HH, BH) {
+       return Boolean("IFRAME" === HH.nodeName && BH.getMeta(HH))
+     }
+ ... (40 more added lines; see GitHub link above)
```

#### 273. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4969-L5003` → after: `L7128-L7135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7128-L7135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7128-L7135) · [Before (L4969-L5003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4969-L5003)

```diff
-       boundTexture(UU) {
-         const XU = this.atlasBindings.get(UU);
-         if (XU) return XU;
-         const zU = this.atlasSources.get(UU);
-         if (zU) return this.rebuildAtlas(UU, zU), null;
-         const cU = UU;
-         if (cU.released) return null;
-         const yU = this.textureSlot(cU, !0),
-           {
-             state: QU
-           } = yU;
-         if (!QU.view && (QU.wanted = !0, QU.loading || QU.failed || this.upload(cU, QU), !QU.view)) return null;
-         const AU = this.chosenSampler(cU, yU),
-           FU = yU.bound;
-         return FU && FU.view === QU.view && FU.sampler === AU ? FU : (yU.bound = {
-           view: QU.view,
- ... (19 more removed lines; see GitHub link above)
+     }
+ 
+     function Th(HH) {
+       const BH = new Set,
+         LH = [];
+       for (let AH = HH.length; AH--;) {
+         const rH = HH[AH];
+         BH.has(rH.id) || (LH.push(rH), BH.add(rH.id))
```

#### 274. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5005-L5007` → after: `L7137-L7144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7137-L7144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7137-L7144) · [Before (L5005-L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5005-L5007)

```diff
-       textureLoaded(UU) {
-         var XU, zU;
-         return null !== (XU = null === (zU = this.heldSlot(UU)) || void 0 === zU ? void 0 : zU.state.decoded) && void 0 !== XU ? XU : null
+       return LH
+     }
+     "undefined" !== typeof window && window.Proxy && window.Reflect && (Hh = new Proxy(Hh, {
+       get: (HH, BH, LH) => ("map" === BH && console.error(yS), Reflect.get(HH, BH, LH))
+     }));
+     class Uh {
+       constructor() {
+         SH(this, "id", 1), SH(this, "styleIDMap", new WeakMap), SH(this, "idStyleMap", new Map)
```

#### 275. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5009-L5011` → after: `L7146-L7147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7146-L7147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7146-L7147) · [Before (L5009-L5011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5009-L5011)

```diff
-       textureFailed(UU) {
-         var XU;
-         return !0 === (null === (XU = this.heldSlot(UU)) || void 0 === XU ? void 0 : XU.state.failed)
+       getId(HH) {
+         return this.styleIDMap.get(HH) ?? -1
```

#### 276. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5013-L5015` → after: `L7149-L7150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7149-L7150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7149-L7150) · [Before (L5013-L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5013-L5015)

```diff
-       heldSlot(UU) {
-         const XU = UU.gpu[eU.e.lite];
-         return (null === XU || void 0 === XU ? void 0 : XU.epoch) === this.epoch ? XU : void 0
+       has(HH) {
+         return this.styleIDMap.has(HH)
```

#### 277. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5017-L5038` → after: `L7152-L7155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7152-L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7152-L7155) · [Before (L5017-L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5017-L5038)

```diff
-       chosenSampler(UU, XU) {
-         const {
-           samplingMode: zU,
-           wrapU: cU,
-           wrapV: yU
-         } = UU.sampler, QU = XU.state.hasMips, AU = function(UU, XU) {
-           const {
-             bilinear: zU,
-             trilinear: cU
-           } = eU.f;
-           return !XU && UU !== zU || 11 !== UU && UU !== cU && UU !== zU ? 1 : 4
-         }(zU, QU), FU = XU.sampler;
-         if (FU && FU.samplingMode === zU && FU.hasMips === QU && FU.anisotropy === AU && FU.wrapU === cU && FU.wrapV === yU) return FU.sampler;
-         const oU = this.samplerFor(zU, QU, AU, cU, yU);
-         return XU.sampler = {
-           samplingMode: zU,
- ... (6 more removed lines; see GitHub link above)
+       add(HH, BH) {
+         if (this.has(HH)) return this.getId(HH);
+         let LH;
+         return LH = void 0 === BH ? this.id++ : BH, this.styleIDMap.set(HH, LH), this.idStyleMap.set(LH, HH), LH
```

#### 278. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5040-L5043` → after: `L7157-L7158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7157-L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7157-L7158) · [Before (L5040-L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5040-L5043)

```diff
-       releaseTexture(UU) {
-         var XU, zU;
-         UU.view && (null === (zU = this.onDestroy) || void 0 === zU || zU.call(this, UU.view));
-         null === (XU = UU.destroy) || void 0 === XU || XU.call(UU)
+       getStyle(HH) {
+         return this.idStyleMap.get(HH) || null
```

#### 279. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5045-L5085` → after: `L7160-L7161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7160-L7161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7160-L7161) · [Before (L5045-L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5045-L5085)

```diff
-       textureSlot(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const zU = UU.gpu[eU.e.lite];
-         if ((null === zU || void 0 === zU ? void 0 : zU.epoch) === this.epoch) return zU;
-         const cU = function(UU) {
-           let {
-             source: XU,
-             sampler: zU
-           } = UU;
-           return "canvas" === XU.kind ? null : `${XU.kind}|${TA(XU)}|${zU.noMipmap}|${zU.samplingMode}|${zU.invertY}`
-         }(UU);
-         let yU = null === cU ? void 0 : this.textures.get(cU);
-         var QU;
-         yU || (yU = {
-           refs: 0,
-           view: null,
- ... (25 more removed lines; see GitHub link above)
+       reset() {
+         this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
```

#### 280. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5087-L5090` → after: `L7163-L7290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7163-L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7163-L7290) · [Before (L5087-L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5087-L5090)

```diff
-       samplerFor(UU, XU, zU, cU, yU) {
-         const QU = `${UU}|${XU}|${zU}|${cU}|${yU}`;
-         let AU = this.samplers.get(QU);
-         if (!AU) {
+       generateId() {
+         return this.id++
+       }
+     }
+ 
+     function Vh(HH) {
+       var BH;
+       let LH = null;
+       return "getRootNode" in HH && (null == (BH = iS.getRootNode(HH)) ? void 0 : BH.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && iS.host(iS.getRootNode(HH)) && (LH = iS.host(iS.getRootNode(HH))), LH
+     }
+ 
+     function Oh(HH) {
+       let BH, LH = HH;
+       for (; BH = Vh(LH);) LH = BH;
+       return LH
+     }
+ ... (112 more added lines; see GitHub link above)
```

#### 281. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5092-L5094` → after: `L7292-L7315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7292-L7315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7292-L7315) · [Before (L5092-L5094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5092-L5094)

```diff
-             ...jA(UU, XU, zU),
-             addressModeU: KA(cU),
-             addressModeV: KA(yU)
+             texts: this.texts.map((HH => {
+               const BH = HH.node,
+                 LH = iS.parentNode(BH);
+               return LH && "TEXTAREA" === LH.tagName && this.genTextAreaValueMutation(LH), {
+                 id: this.mirror.getId(BH),
+                 value: HH.value
+               }
+             })).filter((HH => !BH.has(HH.id))).filter((HH => this.mirror.has(HH.id))),
+             attributes: this.attributes.map((HH => {
+               const {
+                 attributes: BH
+               } = HH;
+               if ("string" === typeof BH.style) {
+                 const LH = JSON.stringify(HH.styleDiff),
+                   AH = JSON.stringify(HH._unchangedStyles);
+                 LH.length < BH.style.length && (LH + AH).split("var(").length === BH.style.split("var(").length && (BH.style = HH.styleDiff)
+ ... (8 more added lines; see GitHub link above)
```

#### 282. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5096-L5098` → after: `L7317-L7421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7317-L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7317-L7421) · [Before (L5096-L5098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5096-L5098)

```diff
-           AU = (0, uA.d)(this.engine, FU), this.samplers.set(QU, AU)
-         }
-         return AU
+           (EH.texts.length || EH.attributes.length || EH.removes.length || EH.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTr … [truncated]
+         })), SH(this, "genTextAreaValueMutation", (HH => {
+           let BH = this.attributeMap.get(HH);
+           BH || (BH = {
+             node: HH,
+             attributes: {},
+             styleDiff: {},
+             _unchangedStyles: {}
+           }, this.attributes.push(BH), this.attributeMap.set(HH, BH));
+           const LH = Array.from(iS.childNodes(HH), (HH => iS.textContent(HH) || "")).join("");
+           BH.attributes.value = mH({
+             element: HH,
+             maskInputOptions: this.maskInputOptions,
+             tagName: HH.tagName,
+             type: fH(HH),
+             value: LH,
+ ... (89 more added lines; see GitHub link above)
```

#### 283. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5100-L5105` → after: `L7423-L7426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7423-L7426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7423-L7426) · [Before (L5100-L5105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5100-L5105)

```diff
-       upload(UU, XU) {
-         const {
-           source: zU,
-           sampler: cU
-         } = UU;
-         XU.hasMips = !cU.noMipmap, "canvas" === zU.kind ? this.createDynamic(zU, XU) : "cube" === zU.kind ? this.uploadCube(XU, zU.luminance) : this.uploadImage(XU, !0 === cU.invertY, zU.url)
+       init(HH) {
+         ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", … [truncated]
+           this[BH] = HH[BH]
+         }))
```

#### 284. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5107-L5119` → after: `L7428-L7429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7428-L7429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7428-L7429) · [Before (L5107-L5119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5107-L5119)

```diff
-       uploadImage(UU, XU, zU) {
-         const [cU] = UU.images;
-         UU.images = null;
-         const {
-           epoch: yU
-         } = this, QU = (0, fA.c)(this.engine, cU, {
-           mipMaps: UU.hasMips,
-           invertY: XU,
-           srgb: !1
-         }).then((XU => {
-           cU.close(), 0 !== UU.refs && yU === this.epoch ? (UU.view = XU.view, UU.destroy = XU.texture.destroy.bind(XU.texture)) : XU.texture.destroy()
-         }));
-         this.track(UU, zU, QU)
+       freeze() {
+         this.frozen = !0, this.canvasManager.freeze()
```

#### 285. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5121-L5129` → after: `L7431-L7432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7431-L7432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7431-L7432) · [Before (L5121-L5129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5121-L5129)

```diff
-       track(UU, XU, zU, cU) {
-         const {
-           epoch: yU
-         } = this;
-         UU.loading = !0, this.pending++, zU.catch((zU => {
-           yU === this.epoch && (UU.failed = !0, console.warn(`Lite: could not load texture ${TU(XU)}`, zU))
-         })).finally((() => {
-           yU === this.epoch && (UU.loading = !1, this.pending--, null === cU || void 0 === cU || cU())
-         }))
+       unfreeze() {
+         this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
```

#### 286. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5131-L5139` → after: `L7434-L7435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7434-L7435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7434-L7435) · [Before (L5131-L5139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5131-L5139)

```diff
-       uploadCube(UU, XU) {
-         const zU = UU.images;
-         UU.images = null;
-         const cU = vA(this.engine, this.device, zU, (0, eU.w)(XU), UU.hasMips);
-         UU.view = cU.createView({
-           dimension: "cube"
-         }), UU.destroy = () => {
-           cU.destroy()
-         }
+       isFrozen() {
+         return this.frozen
```

#### 287. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5141-L5150` → after: `L7437-L7438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7437-L7438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7437-L7438) · [Before (L5141-L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5141-L5150)

```diff
-       createDynamic(UU, XU) {
-         const {
-           canvas: zU
-         } = UU, cU = (0, iA.c)(this.engine, Math.max(1, zU.width), Math.max(1, zU.height), {
-           mipMaps: XU.hasMips,
-           srgb: !1
-         });
-         XU.dynamic = cU, XU.view = cU.view, XU.destroy = () => {
-           cU.texture.destroy()
-         }, this.pushDynamic(UU, XU)
+       lock() {
+         this.locked = !0, this.canvasManager.lock()
```

#### 288. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5152-L5161` → after: `L7440-L7444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7440-L7444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7440-L7444) · [Before (L5152-L5161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5152-L5161)

```diff
-       pushDynamic(UU, XU) {
-         const zU = XU.dynamicSource,
-           cU = XU.dynamic,
-           {
-             canvas: yU
-           } = UU;
-         if (zU && cU && 0 !== yU.width && 0 !== yU.height) return yU.width !== cU.width || yU.height !== cU.height ? (this.releaseTexture(XU), XU.dynamic = null, XU.view = null, void this.createDynamic(UU, XU)) : void(0, iA.d)(this.engine, cU, yU, {
-           invertY: zU.invertY,
-           premultiplyAlpha: zU.premultiplied
-         })
+       unlock() {
+         this.locked = !1, this.canvasManager.unlock(), this.emit()
+       }
+       reset() {
+         this.shadowDomManager.reset(), this.canvasManager.reset()
```

#### 289. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5166` → after: `L7566-L7591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7566-L7591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7566-L7591) · [Before (L5166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5166)

```diff
-       return "cube" === UU.kind ? UU.rootUrl : "canvas" === UU.kind ? "canvas" : UU.url
+       let {
+         scrollCb: BH,
+         doc: LH,
+         mirror: AH,
+         blockClass: rH,
+         blockSelector: SH,
+         sampling: hH
+       } = HH;
+       const tH = Fh(Bh(Fh((HH => {
+         const hH = wh(HH);
+         if (!hH || th(hH, rH, SH, !0)) return;
+         const tH = AH.getId(hH);
+         if (hH === LH && LH.defaultView) {
+           const HH = Ah(LH.defaultView);
+           BH({
+             id: tH,
+ ... (10 more added lines; see GitHub link above)
```

#### 290. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5168-L5169` → after: `L7593-L7594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7593-L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7593-L7594) · [Before (L5168-L5169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5168-L5169)

```diff
-     const hA = new Uint8Array(4);
-     var UF = zU(39566);
+     const sh = ["INPUT", "TEXTAREA", "SELECT"],
+       Jh = new WeakMap;
```

#### 291. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5172-L5186` → after: `L7597-L7608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7597-L7608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7597-L7608) · [Before (L5172-L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5172-L5186)

```diff
-       const XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
-       UU._colorAttachment.storeOp = UU._targetSignature._sampleCount > 1 ? XU : "store";
-       const zU = UU._renderPassDescriptor.depthStencilAttachment;
-       zU && (zU.depthStoreOp = XU, zU.stencilStoreOp && (zU.stencilStoreOp = XU))
-     }
-     var zF = zU(38505),
-       cF = zU(38567),
-       yF = zU(38106),
-       QF = zU(40476);
-     const AF = new Float64Array([1, 1, 1]),
-       FF = new Float64Array([0, 1, 0]),
-       oF = new Float64Array(4),
-       DF = new Float32Array(16),
-       EF = new Float64Array(3),
-       YF = new Float64Array(4);
+       return function HH(BH, LH) {
+         if (Bt("CSSGroupingRule") && BH.parentRule instanceof CSSGroupingRule || Bt("CSSMediaRule") && BH.parentRule instanceof CSSMediaRule || Bt("CSSSupportsRule") && BH.parentRule instanceof CSSSupportsRule || Bt("CSSConditionRule") && BH.parentRule instanceof CSSConditionRule … [truncated]
+           const AH = Array.from(BH.parentRule.cssRules).indexOf(BH);
+           return LH.unshift(AH), HH(BH.parentRule, LH)
+         }
+         if (BH.parentStyleSheet) {
+           const HH = Array.from(BH.parentStyleSheet.cssRules).indexOf(BH);
+           LH.unshift(HH)
+         }
+         return LH
+       }(HH, [])
+     }
```

#### 292. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5189-L5195` → after: `L7611-L7615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7611-L7615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7611-L7615) · [Before (L5189-L5195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5189-L5195)

```diff
-       UU.fov = XU.fov, UU.near = XU.near, UU.far = XU.far, UU.renderWidth = zU.renderWidth, UU.renderHeight = zU.renderHeight, (0, yF.u)(XU.holderRotation, 0, oF, 0), (0, yF.e)(AF, 0, oF, 0, XU.holderPosition, 0, DF);
-       const cU = XU.n_;
-       EF[0] = cU[0], EF[1] = cU[1], EF[2] = cU[2] + 1;
-       const yU = UU.viewMatrix;
-       (0, yF.n)(cU, EF, FF, yU), (0, yF.k)(yU, 0, yU), (0, yF.q)(yU, DF, 0, yU), (0, yF.k)(yU, 0, yU);
-       const QU = UU.worldMatrix;
-       (0, yF.k)(yU, 0, QU), UU.eye[0] = QU[12], UU.eye[1] = QU[13], UU.eye[2] = QU[14], YF[0] = UU.fov, YF[1] = UU.renderWidth / UU.renderHeight, YF[2] = UU.near, YF[3] = UU.far, (0, yF.t)(YF, UU.projectionMatrix), (0, yF.q)(yU, UU.projectionMatrix, 0, UU.viewProjectionMatrix), ( … [truncated]
+       let AH, rH;
+       return HH ? (HH.ownerNode ? AH = BH.getId(HH.ownerNode) : rH = LH.getId(HH), {
+         styleId: rH,
+         id: AH
+       }) : {}
```

#### 293. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5199-L5206` → after: `L7619-L7650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7619-L7650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7619-L7650) · [Before (L5199-L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5199-L5206)

```diff
-       let zU = UU.frustumPlanes;
-       zU || (zU = UU.frustumPlanes = Array.from({
-         length: 6
-       }, (() => new zF.d(0, 0, 0, 0))));
-       for (let cU = 0; cU < 6; cU++) {
-         const UU = zU[cU].normal;
-         UU._x = XU[4 * cU], UU._y = XU[4 * cU + 1], UU._z = XU[4 * cU + 2], UU._isDirty = !0, zU[cU].d = XU[4 * cU + 3]
-       }
+       let {
+         mirror: LH,
+         stylesheetManager: AH
+       } = HH;
+       var rH, SH, hH;
+       let tH = null;
+       tH = "#document" === BH.nodeName ? LH.getId(BH) : LH.getId(iS.host(BH));
+       const zH = "#document" === BH.nodeName ? null == (rH = BH.defaultView) ? void 0 : rH.Document : null == (hH = null == (SH = BH.ownerDocument) ? void 0 : SH.defaultView) ? void 0 : hH.ShadowRoot,
+         CH = (null == zH ? void 0 : zH.prototype) ? Object.getOwnPropertyDescriptor(null == zH ? void 0 : zH.prototype, "adoptedStyleSheets") : void 0;
+       return null !== tH && -1 !== tH && zH && CH ? (Object.defineProperty(BH, "adoptedStyleSheets", {
+         configurable: CH.configurable,
+         enumerable: CH.enumerable,
+         get() {
+           var HH;
+           return null == (HH = CH.get) ? void 0 : HH.call(this)
+         },
+ ... (16 more added lines; see GitHub link above)
```

#### 294. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5209-L5213` → after: `L7653-L8155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7653-L8155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L7653-L8155) · [Before (L5209-L5213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5209-L5213)

```diff
-     function pF(UU, XU) {
-       const zU = XU.clearColor;
-       UU.clearColour[0] = zU.r, UU.clearColour[1] = zU.g, UU.clearColour[2] = zU.b, UU.clearColour[3] = zU.a;
-       const cU = XU.ambientColor;
-       UU.ambientColour[0] = cU.r, UU.ambientColour[1] = cU.g, UU.ambientColour[2] = cU.b, UU.animationRatio = XU.animationRatio, UU.frameId = XU.frameId, UU.version++
+     function Ht(HH) {
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const LH = HH.doc.defaultView;
+       if (!LH) return () => {};
+       let AH;
+       ! function(HH, BH) {
+         const {
+           mutationCb: LH,
+           mousemoveCb: AH,
+           mouseInteractionCb: rH,
+           scrollCb: SH,
+           viewportResizeCb: hH,
+           inputCb: tH,
+           mediaInteractionCb: zH,
+           styleSheetRuleCb: CH,
+           styleDeclarationCb: EH,
+ ... (487 more added lines; see GitHub link above)
```

#### 295. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5217-L5218` → after: `L8159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8159) · [Before (L5217-L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5217-L5218)

```diff
-       const XU = UU.model.view;
-       return XU.animTick = (0, cF.e)(), XU.timeMs = performance.now(), pF(XU, UU.sa), UU.model.update(XU.frameId), XU
+       return "undefined" !== typeof window[HH]
```

#### 296. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5222-L5227` → after: `L8163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8163) · [Before (L5222-L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5222-L5227)

```diff
-       const XU = UU.sa,
-         {
-           view: zU,
-           v_: cU
-         } = UU.model;
-       return NF(zU, cU, XU.qp()), XU.onBeforeRenderObservable.notifyObservers(XU), IF(XU, zU.frustum), XU.onBeforeCameraRenderObservable.notifyObservers(XU.activeCamera), aF(UU)
+       return Boolean("undefined" !== typeof window[HH] && window[HH].prototype && "insertRule" in window[HH].prototype && "deleteRule" in window[HH].prototype)
```

#### 297. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5257-L5271` → after: `L8167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8167) · [Before (L5257-L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5257-L5271)

```diff
-         this.units = UU, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
-       }
-       get ready() {
-         return this.bufferReady && (!this.twin || this.twinReady)
-       }
-       destroy() {
-         var UU;
-         this.buffer.destroy(), null === (UU = this.twin) || void 0 === UU || UU.destroy()
-       }
-     }
-     class PF {
-       constructor(UU, XU) {
-         this.arena = UU, this.Qt = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.Qt = new nA(XU);
-         const zU = new RF(XU);
-         zU.buffer = this.createBuffer(zU, !1), this.backings.push(zU), this.refresh()
+         SH(this, "iframeIdToRemoteIdMap", new WeakMap), SH(this, "iframeRemoteIdToIdMap", new WeakMap), this.generateIdFn = HH
```

#### 298. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5273-L5330` → after: `L8169-L8173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8169-L8173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8169-L8173) · [Before (L5273-L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5273-L5330)

```diff
-       get xY() {
-         return this.Qt.xY
-       }
-       get canGrow() {
-         return this.growable && !this.dropped
-       }
-       get live() {
-         return !this.dropped
-       }
-       get hasTwin() {
-         return null !== this.backings[this.backings.length - 1].twin
-       }
-       get allocatedBytes() {
-         let UU = 0;
-         for (const XU of this.backings) UU += XU.units * (this.arena.unitBytes + (XU.twin ? this.arena.twinUnitBytes : 0));
-         return UU
- ... (42 more removed lines; see GitHub link above)
+       getId(HH, BH, LH, AH) {
+         const rH = LH || this.getIdToRemoteIdMap(HH),
+           SH = AH || this.getRemoteIdToIdMap(HH);
+         let hH = rH.get(BH);
+         return hH || (hH = this.generateIdFn(), rH.set(BH, hH), SH.set(hH, BH)), hH
```

#### 299. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5332-L5333` → after: `L8175-L8178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8175-L8178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8175-L8178) · [Before (L5332-L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5332-L5333)

```diff
-       retire() {
-         this.dropped = !0, this.refresh()
+       getIds(HH, BH) {
+         const LH = this.getIdToRemoteIdMap(HH),
+           AH = this.getRemoteIdToIdMap(HH);
+         return BH.map((BH => this.getId(HH, BH, LH, AH)))
```

#### 300. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5335-L5340` → after: `L8180-L8184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8180-L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8180-L8184) · [Before (L5335-L5340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5335-L5340)

```diff
-       drop() {
-         if (!this.dropped) {
-           this.dropped = !0;
-           for (const UU of this.backings) UU.destroy();
-           this.refresh(), this.arena.remove(this)
-         }
+       getRemoteId(HH, BH, LH) {
+         const AH = LH || this.getRemoteIdToIdMap(HH);
+         if ("number" !== typeof BH) return BH;
+         const rH = AH.get(BH);
+         return rH || -1
```

#### 301. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5342-L5360` → after: `L8186-L8188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8186-L8188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8186-L8188) · [Before (L5342-L5360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5342-L5360)

```diff
-       createBuffer(UU, XU) {
-         const {
-           device: zU,
-           unitBytes: cU,
-           twinUnitBytes: yU,
-           usage: QU,
-           label: AU
-         } = this.arena;
-         zU.pushErrorScope("out-of-memory");
-         const FU = zU.createBuffer({
-           label: XU ? `${AU}-light` : AU,
-           size: UU.units * (XU ? yU : cU),
-           usage: (XU ? this.arena.twinUsage : QU) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
-         });
-         return this.arena.awaitingVerdict++, zU.popErrorScope().then((zU => {
-           this.arena.awaitingVerdict--, this.settle(UU, XU, !zU, !0)
- ... (3 more removed lines; see GitHub link above)
+       getRemoteIds(HH, BH) {
+         const LH = this.getRemoteIdToIdMap(HH);
+         return BH.map((BH => this.getRemoteId(HH, BH, LH)))
```

#### 302. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5362-L5371` → after: `L8190-L8192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8190-L8192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8190-L8192) · [Before (L5362-L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5362-L5371)

```diff
-       settle(UU, XU, zU, cU) {
-         const yU = this.backings.indexOf(UU);
-         if (!(this.dropped || yU < 0)) {
-           if (!zU) {
-             if (cU && this.arena.ranOutOfMemory(UU.units, UU.units * (XU ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === yU) return void this.drop();
-             for (const UU of this.backings.splice(yU)) UU.destroy();
-             return this.Qt.truncate(this.backings[yU - 1].units), this.growable = !1, void this.promote()
-           }
-           XU ? UU.twinReady = !0 : (UU.bufferReady = !0, this.arena.allocatedBuffer(UU.units)), this.promote()
-         }
+       reset(HH) {
+         if (!HH) return this.iframeIdToRemoteIdMap = new WeakMap, void(this.iframeRemoteIdToIdMap = new WeakMap);
+         this.iframeIdToRemoteIdMap.delete(HH), this.iframeRemoteIdToIdMap.delete(HH)
```

#### 303. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5373-L5380` → after: `L8194-L8196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8194-L8196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8194-L8196) · [Before (L5373-L5380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5373-L5380)

```diff
-       promote() {
-         const {
-           backings: UU
-         } = this;
-         let XU = 0;
-         for (; XU + 1 < UU.length && UU[XU].ready && UU[XU + 1].ready;) XU++;
-         for (const zU of UU.splice(0, XU)) zU.destroy();
-         this.refresh()
+       getIdToRemoteIdMap(HH) {
+         let BH = this.iframeIdToRemoteIdMap.get(HH);
+         return BH || (BH = new Map, this.iframeIdToRemoteIdMap.set(HH, BH)), BH
```

#### 304. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5382-L5384` → after: `L8198-L8200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8198-L8200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8198-L8200) · [Before (L5382-L5384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5382-L5384)

```diff
-       refresh() {
-         const UU = this.backings[0];
-         this.buffer = UU.buffer, this.twin = UU.twinReady ? UU.twin : null, this.usable = !this.dropped && UU.bufferReady ? UU.units : 0
+       getRemoteIdToIdMap(HH) {
+         let BH = this.iframeRemoteIdToIdMap.get(HH);
+         return BH || (BH = new Map, this.iframeRemoteIdToIdMap.set(HH, BH)), BH
```

#### 305. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5388-L5463` → after: `L8204-L8205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8204-L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8204-L8205) · [Before (L5388-L5463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5388-L5463)

```diff
-       constructor(UU, XU, zU, cU) {
-         let {
-           verticesPerUnit: yU = 1,
-           twinUsage: QU = GPUBufferUsage.VERTEX
-         } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
-         if (this.device = UU, this.unitBytes = XU, this.usage = zU, this.label = cU, this.pages = [], this.BY = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.c … [truncated]
-         this.verticesPerUnit = yU, this.twinUsage = QU, this.twinValueBytes = yU > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * yU
-       }
-       twinLight(UU, XU) {
-         if (4 === this.twinValueBytes) return this.widened.length < XU && (this.widened = new Float32Array(Math.max(XU, 2 * this.widened.length))), this.widened.set(UU.subarray(0, XU)), {
-           light: this.widened,
-           count: XU
-         };
-         const zU = XU % this.verticesPerUnit;
-         if (0 === zU) return {
-           light: UU,
- ... (60 more removed lines; see GitHub link above)
+       constructor(HH) {
+         SH(this, "iframes", new WeakMap), SH(this, "crossOriginIframeMap", new WeakMap), SH(this, "crossOriginIframeMirror", new At(ZH)), SH(this, "crossOriginIframeStyleMirror"), SH(this, "crossOriginIframeRootIdMap", new WeakMap), SH(this, "mirror"), SH(this, "mutationCb"), SH( … [truncated]
```

#### 306. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5465-L5477` → after: `L8207-L8208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8207-L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8207-L8208) · [Before (L5465-L5477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5465-L5477)

```diff
-       stats() {
-         let UU = 0,
-           XU = 0,
-           zU = 0,
-           cU = 0;
-         for (const yU of this.pages) UU += yU.xY, XU += yU.Qt.used, zU += yU.hasTwin ? yU.xY * this.twinUnitBytes : 0, cU += yU.allocatedBytes;
-         return {
-           pages: this.pages.length,
-           capacityBytes: UU * this.unitBytes,
-           usedBytes: XU * this.unitBytes,
-           twinBytes: zU,
-           allocatedBytes: cU
-         }
+       addIframe(HH) {
+         this.iframes.set(HH, !0), HH.contentWindow && this.crossOriginIframeMap.set(HH.contentWindow, HH)
```

#### 307. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5479-L5486` → after: `L8210-L8211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8210-L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8210-L8211) · [Before (L5479-L5486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5479-L5486)

```diff
-       assertNotDrawing() {}
-       pageLimit() {
-         const {
-           maxBufferSize: UU,
-           maxStorageBufferBindingSize: XU
-         } = this.device.limits;
-         let zU = Math.floor(Math.min(67108864, UU) / this.unitBytes);
-         return this.usage & GPUBufferUsage.STORAGE && (zU = Math.min(zU, Math.floor(XU / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (zU = Math.min(zU, Math.floor(XU / this.twinUnitBytes))), zU
+       addLoadListener(HH) {
+         this.loadListener = HH
```

#### 308. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5488-L5526` → after: `L8213-L8234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8213-L8234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8213-L8234) · [Before (L5488-L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5488-L5526)

```diff
-     }
-     const dF = 16383;
- 
-     function LF(UU, XU, zU, cU, yU) {
-       let QU = 0;
-       for (let AU = zU; AU < cU; AU += dF) UU.drawIndexed(6 * Math.min(dF, cU - AU), 1, 0, XU + 4 * AU, yU), QU++;
-       return QU
-     }
-     class eF {
-       constructor(UU, XU) {
-         this.recordsGroup = XU, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
-         const zU = JX.f.strideWithoutAtlas;
-         this.vertexArena = new WF(UU, zU, GPUBufferUsage.VERTEX, `terrain-vertices-${zU}`), this.quadArena = new WF(UU, kF.d, GPUBufferUsage.STORAGE, "terrain-quads", {
-           verticesPerUnit: 4,
-           twinUsage: GPUBufferUsage.STORAGE
-         });
- ... (23 more removed lines; see GitHub link above)
+       attachIframe(HH, BH) {
+         var LH, AH;
+         this.mutationCb({
+           adds: [{
+             parentId: this.mirror.getId(HH),
+             nextId: null,
+             node: BH
+           }],
+           removes: [],
+           texts: [],
+           attributes: [],
+           isAttachIframe: !0
+         }), this.recordCrossOriginIframes && (null == (LH = HH.contentWindow) || LH.addEventListener("message", this.handleMessage.bind(this))), null == (AH = this.loadListener) || AH.call(this, HH), HH.contentDocument && HH.contentDocument.adoptedStyleSheets && HH.contentDocumen … [truncated]
+       }
+       handleMessage(HH) {
+         const BH = HH;
+ ... (6 more added lines; see GitHub link above)
```

#### 309. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5528-L5532` → after: `L8236-L8308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8236-L8308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8236-L8308) · [Before (L5528-L5532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5528-L5532)

```diff
-       lightFullSky(UU, XU) {
-         this.fullSky.length < XU && (this.fullSky = new Uint16Array(Math.max(XU, 4096)).fill(ZF.e));
-         for (const zU of UU) {
-           const UU = zU.vertices;
-           UU.page.live && (UU.page.writeLight(UU, this.fullSky), zU.lit = !0)
+       transformCrossOriginEvent(HH, BH) {
+         var LH;
+         switch (BH.type) {
+           case mh.FullSnapshot: {
+             this.crossOriginIframeMirror.reset(HH), this.crossOriginIframeStyleMirror.reset(HH), this.replaceIdOnNode(BH.data.node, HH);
+             const LH = BH.data.node.id;
+             return this.crossOriginIframeRootIdMap.set(HH, LH), this.patchRootIdOnNode(BH.data.node, LH), {
+               timestamp: BH.timestamp,
+               type: mh.IncrementalSnapshot,
+               data: {
+                 source: oh.Mutation,
+                 adds: [{
+                   parentId: this.mirror.getId(HH),
+                   nextId: null,
+                   node: BH.data.node
+                 }],
+ ... (57 more added lines; see GitHub link above)
```

#### 310. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5535-L5545` → after: `L8312-L8314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8312-L8314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8312-L8314) · [Before (L5535-L5545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5535-L5545)

```diff
-       backed(UU) {
-         const {
-           vertices: XU
-         } = UU;
-         return !!XU && XU.page.holds(XU)
-       }
-       lost(UU) {
-         const {
-           vertices: XU
-         } = UU;
-         return !!XU && XU.page.lost(XU)
+       replace(HH, BH, LH, AH) {
+         for (const rH of AH)(Array.isArray(BH[rH]) || "number" === typeof BH[rH]) && (Array.isArray(BH[rH]) ? BH[rH] = HH.getIds(LH, BH[rH]) : BH[rH] = HH.getId(LH, BH[rH]));
+         return BH
```

#### 311. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5547-L5548` → after: `L8316-L8317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8316-L8317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8316-L8317) · [Before (L5547-L5548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5547-L5548)

```diff
-       release(UU) {
-         UU.vertices && UU.vertices.page.arena.free(UU.vertices), UU.vertices = null, UU.lit = !1
+       replaceIds(HH, BH, LH) {
+         return this.replace(this.crossOriginIframeMirror, HH, BH, LH)
```

#### 312. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5550-L5551` → after: `L8319-L8320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8319-L8320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8319-L8320) · [Before (L5550-L5551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5550-L5551)

```diff
-       setDrawing(UU) {
-         this.forgetBound()
+       replaceStyleIds(HH, BH, LH) {
+         return this.replace(this.crossOriginIframeStyleMirror, HH, BH, LH)
```

#### 313. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5553-L5576` → after: `L8322-L8325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8322-L8325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8322-L8325) · [Before (L5553-L5576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5553-L5576)

```diff
-       draw(UU, XU, zU) {
-         let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : XU.faceCount;
-         const QU = XU.vertices,
-           AU = QU.page,
-           FU = zU ? AU.twin : null;
-         if (!AU.holds(QU) || zU && !FU) return 0;
-         const {
-           verticesPerUnit: oU
-         } = AU.arena;
-         let DU = QU.start * oU;
-         this.boundPattern || (UU.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
-         const EU = cU + yU;
-         if (oU > 1) return AU.buffer === this.boundRecords && FU === this.boundRecordsLight || (UU.setBindGroup(1, this.recordsGroup(AU.buffer, FU)), this.boundRecords = AU.buffer, this.boundRecordsLight = FU), LF(UU, DU, cU, EU, XU.slot);
-         AU.buffer !== this.boundVertices && (UU.setVertexBuffer(0, AU.buffer), this.boundVertices = AU.buffer), FU && FU !== this.boundLight && (UU.setVertexBuffer(1, FU), this.boundLight = FU);
-         const YU = XU.faceCount;
- ... (8 more removed lines; see GitHub link above)
+       replaceIdOnNode(HH, BH) {
+         this.replaceIds(HH, BH, ["id", "rootId"]), "childNodes" in HH && HH.childNodes.forEach((HH => {
+           this.replaceIdOnNode(HH, BH)
+         }))
```

#### 314. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5578-L5579` → after: `L8327-L8330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8327-L8330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8327-L8330) · [Before (L5578-L5579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5578-L5579)

```diff
-       forgetBound() {
-         this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
+       patchRootIdOnNode(HH, BH) {
+         HH.type === eh.Document || HH.rootId || (HH.rootId = BH), "childNodes" in HH && HH.childNodes.forEach((HH => {
+           this.patchRootIdOnNode(HH, BH)
+         }))
```

#### 315. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5583-L5606` → after: `L8334-L8372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8334-L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8334-L8372) · [Before (L5583-L5606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5583-L5606)

```diff
-       constructor(UU, XU, zU, cU) {
-         this.device = UU, this.splitBefore = XU, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = UU.createBu … [truncated]
-           label: "scene-depth-unproject",
-           size: 8,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         });
-         const yU = UU.createShaderModule({
-           label: "scene-depth-copy",
-           code: (QU = zU._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${QU?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(pos … [truncated]
-         });
-         var QU;
-         UU.createRenderPipelineAsync({
-           label: "scene-depth-copy",
-           layout: "auto",
-           vertex: {
-             module: yU,
- ... (8 more removed lines; see GitHub link above)
+       constructor(HH) {
+         SH(this, "shadowDoms", new WeakSet), SH(this, "mutationCb"), SH(this, "scrollCb"), SH(this, "bypassOptions"), SH(this, "mirror"), SH(this, "restoreHandlers", []), this.mutationCb = HH.mutationCb, this.scrollCb = HH.scrollCb, this.bypassOptions = HH.bypassOptions, this.mir … [truncated]
+       }
+       init() {
+         this.reset(), this.patchAttachShadow(Element, document)
+       }
+       addShadowRoot(HH, BH) {
+         if (!UH(HH)) return;
+         if (this.shadowDoms.has(HH)) return;
+         this.shadowDoms.add(HH);
+         const [LH] = Zh({
+           ...this.bypassOptions,
+           doc: BH,
+           mutationCb: this.mutationCb,
+           mirror: this.mirror,
+           shadowDomManager: this
+ ... (23 more added lines; see GitHub link above)
```

#### 316. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5608-L5612` → after: `L8374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8374) · [Before (L5608-L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5608-L5612)

```diff
-         }).then((UU => {
-           this.pipeline = UU, this.building = !1
-         }), (UU => {
-           this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", UU)
-         })), zU._executeWithTransmission = () => this.execute(zU, cU)
+         })))
```

#### 317. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5614-L5615` → after: `L8376-L8381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8376-L8381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8376-L8381) · [Before (L5614-L5615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5614-L5615)

```diff
-       get compiling() {
-         return this.building
+       reset() {
+         this.restoreHandlers.forEach((HH => {
+           try {
+             HH()
+           } catch (BH) {}
+         })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
```

#### 318. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5617-L5618` → after: `L8383-L8403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8383-L8403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8383-L8403) · [Before (L5617-L5618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5617-L5618)

```diff
-       setWanted(UU) {
-         this.wanted = UU
+     }
+     for (var ht = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tt = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256), zt = 0; zt < 64; zt++) tt[ht.charCodeAt(zt)] = zt;
+     const Ct = new Map;
+     const Et = (HH, BH, LH) => {
+       if (!HH || !Yt(HH, BH) && "object" !== typeof HH) return;
+       const AH = function(HH, BH) {
+         let LH = Ct.get(HH);
+         return LH || (LH = new Map, Ct.set(HH, LH)), LH.has(BH) || LH.set(BH, []), LH.get(BH)
+       }(LH, HH.constructor.name);
+       let rH = AH.indexOf(HH);
+       return -1 === rH && (rH = AH.length, AH.push(HH)), rH
+     };
+ 
+     function Xt(HH, BH, LH) {
+       if (HH instanceof Array) return HH.map((HH => Xt(HH, BH, LH)));
+       if (null === HH) return HH;
+ ... (5 more added lines; see GitHub link above)
```

#### 319. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5620-L5621` → after: `L8405-L8415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8405-L8415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8405-L8415) · [Before (L5620-L5621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5620-L5621)

```diff
-       setPlanes(UU, XU) {
-         UU === this.near && XU === this.far || (this.near = UU, this.far = XU, this.unproject[0] = UU / (XU - UU), this.unproject[1] = XU * UU / (XU - UU), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
+       if (HH instanceof ArrayBuffer) {
+         return {
+           rr_type: HH.constructor.name,
+           base64: function(HH) {
+             var BH, LH = new Uint8Array(HH),
+               AH = LH.length,
+               rH = "";
+             for (BH = 0; BH < AH; BH += 3) rH += ht[LH[BH] >> 2], rH += ht[(3 & LH[BH]) << 4 | LH[BH + 1] >> 4], rH += ht[(15 & LH[BH + 1]) << 2 | LH[BH + 2] >> 6], rH += ht[63 & LH[BH + 2]];
+             return AH % 3 === 2 ? rH = rH.substring(0, rH.length - 1) + "=" : AH % 3 === 1 && (rH = rH.substring(0, rH.length - 2) + "=="), rH
+           }(HH)
+         }
```

#### 320. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5623-L5625` → after: `L8417-L8421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8417-L8421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8417-L8421) · [Before (L5623-L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5623-L5625)

```diff
-       get view() {
-         var UU, XU;
-         return null !== (UU = null === (XU = this.copy) || void 0 === XU ? void 0 : XU.view) && void 0 !== UU ? UU : null
+       if (HH instanceof DataView) {
+         return {
+           rr_type: HH.constructor.name,
+           args: [Xt(HH.buffer, BH, LH), HH.byteOffset, HH.byteLength]
+         }
```

#### 321. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5627-L5641` → after: `L8423-L8424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8423-L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8423-L8424) · [Before (L5627-L5641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5627-L5641)

```diff
-       execute(UU, XU) {
-         var zU;
-         null === (zU = this.retired) || void 0 === zU || zU.destroy(), this.retired = null;
-         const cU = RX(XU),
-           yU = UU._transparentBindings,
-           QU = this.wanted && this.pipeline ? this.splitIndex(yU) : -1,
-           AU = UU._colorAttachment,
-           FU = AU.resolveTarget;
-         QU >= 0 && (AU.resolveTarget = void 0, XF(UU, !0));
-         let oU = cU.beginRenderPass(UU._renderPassDescriptor);
-         oU.setBindGroup(0, UU._sceneBG);
-         let DU = this.drawList(oU, XU, UU._opaqueBindings, 0, UU._opaqueBindings.length);
-         if (DU += this.drawList(oU, XU, UU._directBindings, 0, UU._directBindings.length), DU += this.drawList(oU, XU, yU, 0, QU >= 0 ? QU : yU.length), oU.end(), QU < 0) return DU;
-         XF(UU);
-         const EU = UU._renderPassDescriptor.depthStencilAttachment,
+       if (HH instanceof HTMLImageElement) {
+         const BH = HH.constructor.name,
```

#### 322. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5643-L5651` → after: `L8426-L8430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8426-L8430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8426-L8430) · [Before (L5643-L5651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5643-L5651)

```diff
-             depthLoadOp: YU,
-             stencilLoadOp: NU
-           } = EU,
-           IU = AU.loadOp;
-         AU.resolveTarget = FU;
-         try {
-           this.copyDepth(cU, UU), AU.loadOp = "load", EU.depthLoadOp = "load", NU && (EU.stencilLoadOp = "load"), oU = cU.beginRenderPass(UU._renderPassDescriptor), oU.setBindGroup(0, UU._sceneBG), DU += this.drawList(oU, XU, yU, QU, yU.length), oU.end()
-         } finally {
-           AU.loadOp = IU, EU.depthLoadOp = YU, EU.stencilLoadOp = NU
+             src: LH
+           } = HH;
+         return {
+           rr_type: BH,
+           src: LH
```

#### 323. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5660-L5666` → after: `L8433-L8436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8433-L8436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8433-L8436) · [Before (L5660-L5666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5660-L5666)

```diff
-       drawList(UU, XU, zU, cU, yU) {
-         let QU = null,
-           AU = 0;
-         for (let FU = cU; FU < yU; FU++) {
-           const cU = zU[FU],
-             yU = cU.renderable.mesh;
-           yU && !1 === yU.visible || (cU.pipeline !== QU && (UU.setPipeline(cU.pipeline), QU = cU.pipeline), AU += cU.draw(UU, XU))
+       if (HH instanceof HTMLCanvasElement) {
+         return {
+           rr_type: "HTMLImageElement",
+           src: HH.toDataURL()
```

#### 324. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5670-L5675` → after: `L8439-L8443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8439-L8443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8439-L8443) · [Before (L5670-L5675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5670-L5675)

```diff
-       copyDepth(UU, XU) {
-         var zU, cU;
-         const yU = (null !== (zU = XU._config.depth) && void 0 !== zU ? zU : XU._config.rt)._depthTexture,
-           QU = (null === (cU = this.copy) || void 0 === cU ? void 0 : cU.source) === yU ? this.copy : this.remakeCopy(yU),
-           AU = UU.beginRenderPass(QU.pass);
-         AU.setPipeline(this.pipeline), AU.setBindGroup(0, QU.bindGroup), AU.draw(3), AU.end()
+       if (HH instanceof ImageData) {
+         return {
+           rr_type: HH.constructor.name,
+           args: [Xt(HH.data, BH, LH), HH.width, HH.height]
+         }
```

#### 325. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5677-L5717` → after: `L8445-L8449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8445-L8449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8445-L8449) · [Before (L5677-L5717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5677-L5717)

```diff
-       remakeCopy(UU) {
-         var XU, zU;
-         this.retired = null !== (XU = null === (zU = this.copy) || void 0 === zU ? void 0 : zU.texture) && void 0 !== XU ? XU : null;
-         const cU = this.device.createTexture({
-             label: "scene-depth",
-             size: [UU.width, UU.height],
-             format: "r32float",
-             usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
-           }),
-           yU = cU.createView(),
-           QU = this.device.createBindGroup({
-             label: "scene-depth-copy",
-             layout: this.pipeline.getBindGroupLayout(0),
-             entries: [{
-               binding: 0,
-               resource: UU.createView({
- ... (25 more removed lines; see GitHub link above)
+       if (Yt(HH, BH) || "object" === typeof HH) {
+         return {
+           rr_type: HH.constructor.name,
+           index: Et(HH, BH, LH)
+         }
```

#### 326. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5720` → after: `L8453-L8457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8453-L8457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8453-L8457) · [Before (L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5720)

```diff
-     const wF = "rgba8unorm";
+     const Gt = (HH, BH, LH) => HH.map((HH => Xt(HH, BH, LH))),
+       Yt = (HH, BH) => {
+         const LH = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((HH => "function" ===  … [truncated]
+         return Boolean(LH.find((LH => HH instanceof BH[LH])))
+       };
```

#### 327. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5722-L5749` → after: `L8459-L8475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8459-L8475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8459-L8475) · [Before (L5722-L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5722-L5749)

```diff
-     function qF(UU) {
-       return UU ? 15 : 1
-     }
-     class OF {
-       constructor(UU, XU, zU, cU) {
-         this.device = UU, this.terrain = cU, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = XU._targetSi … [truncated]
-           label: "sun-shadow-mask-camera",
-           size: 64,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         }), this.layout = UU.createBindGroupLayout({
-           label: "sun-shadow-mask",
-           entries: [{
-             binding: 0,
-             visibility: GPUShaderStage.FRAGMENT,
-             texture: {
-               sampleType: "unfilterable-float"
- ... (12 more removed lines; see GitHub link above)
+     function ut(HH, BH, LH, AH) {
+       const rH = [];
+       try {
+         const SH = JS(HH.HTMLCanvasElement.prototype, "getContext", (function(HH) {
+           return function(rH) {
+             for (var SH = arguments.length, hH = new Array(SH > 1 ? SH - 1 : 0), tH = 1; tH < SH; tH++) hH[tH - 1] = arguments[tH];
+             if (!th(this, BH, LH, !0)) {
+               const HH = function(HH) {
+                 return "experimental-webgl" === HH ? "webgl" : HH
+               }(rH);
+               if ("__context" in this || (this.__context = HH), AH && ["webgl", "webgl2"].includes(HH))
+                 if (hH[0] && "object" === typeof hH[0]) {
+                   const HH = hH[0];
+                   HH.preserveDrawingBuffer || (HH.preserveDrawingBuffer = !0)
+                 } else hH.splice(0, 1, {
+                   preserveDrawingBuffer: !0
+ ... (1 more added lines; see GitHub link above)
```

#### 328. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5751-L5784` → after: `L8477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8477) · [Before (L5751-L5784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5751-L5784)

```diff
-           }]
-         });
-         const yU = UU.createBindGroupLayout({
-           label: "sun-shadow-mask-empty",
-           entries: []
-         });
-         this.empty = UU.createBindGroup({
-           label: "sun-shadow-mask-empty",
-           layout: yU,
-           entries: []
-         });
-         const QU = UU.createShaderModule({
-           label: "sun-shadow-mask",
-           code: (AU = this.edge, `${(0,KX.E)()}${Fc({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\t … [truncated]
-         });
-         var AU;
- ... (18 more removed lines; see GitHub link above)
+             return HH.apply(this, [rH, ...hH])
```

#### 329. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5791-L5852` → after: `L8480-L8482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8480-L8482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8480-L8482) · [Before (L5791-L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5791-L5852)

```diff
-         const FU = XU._executeWithTransmission;
-         XU._executeWithTransmission = UU => this.execute(XU, zU, (() => FU ? FU(UU) : function(UU, XU) {
-           const zU = RX(XU).beginRenderPass(UU._renderPassDescriptor);
-           zU.setBindGroup(0, UU._sceneBG);
-           let cU = SF(zU, XU, UU._opaqueBindings);
-           return cU += SF(zU, XU, UU._directBindings), cU += SF(zU, XU, UU._transparentBindings), zU.end(), cU
-         }(XU, zU)))
-       }
-       get compiling() {
-         return this.building
-       }
-       get view() {
-         var UU, XU;
-         return null !== (UU = null === (XU = this.targets) || void 0 === XU ? void 0 : XU.maskView) && void 0 !== UU ? UU : null
-       }
-       get maskFormat() {
- ... (46 more removed lines; see GitHub link above)
+         rH.push(SH)
+       } catch {
+         console.error("failed to patch HTMLCanvasElement.prototype.getContext")
```

#### 330. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5854-L5935` → after: `L8484-L8485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8484-L8485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8484-L8485) · [Before (L5854-L5935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5854-L5935)

```diff
-       remake(UU, XU) {
-         var zU;
-         this.retired = this.targets;
-         const cU = [XU.width, XU.height],
-           yU = this.device.createTexture({
-             label: "sun-shadow-mask",
-             size: cU,
-             format: this.maskFormat,
-             usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
-           }),
-           QU = this.device.createTexture({
-             label: "sun-shadow-prepass-normals",
-             size: cU,
-             format: wF,
-             usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
-           }),
- ... (66 more removed lines; see GitHub link above)
+       return () => {
+         rH.forEach((HH => HH()))
```

#### 331. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5939-L5967` → after: `L8489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8489) · [Before (L5939-L5967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5939-L5967)

```diff
-     function SF(UU, XU, zU) {
-       let cU = null,
-         yU = 0;
-       for (const QU of zU) {
-         const zU = QU.renderable.mesh;
-         zU && !1 === zU.visible || (QU.pipeline !== cU && (UU.setPipeline(QU.pipeline), cU = QU.pipeline), yU += QU.draw(UU, XU))
-       }
-       return yU
-     }
-     const rF = 6e4,
-       uF = {
-         status: "ok"
-       },
-       fF = {
-         status: "skipped"
-       };
- ... (13 more removed lines; see GitHub link above)
+     function Qt(HH, BH, LH, AH, rH, SH) {
```

#### 332. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5969-L6003` → after: `L8491-L8506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8491-L8506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8491-L8506) · [Before (L5969-L6003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L5969-L6003)

```diff
-         QU = Promise.all(Array.from(new Set(UU.materials), (async zU => {
-           yU.push(await async function(UU, XU, zU, cU) {
-             const yU = {
-               lighting: UU.lighting,
-               dirLightCount: Math.min(UU.dirLightCount, 4),
-               Fp: UU.runtime
-             };
-             try {
-               const QU = XU.material(cU);
-               return QU && Oc(XU.programKey(QU, !1, yU)) ? (await QU.ready, UU.isCancelled() ? uF : QU.bindGroupLayout ? await async function(UU, XU, zU, cU) {
-                 const {
-                   device: yU
-                 } = UU;
-                 let QU, AU;
-                 yU.pushErrorScope("validation");
-                 try {
- ... (19 more removed lines; see GitHub link above)
+         tH = Object.getOwnPropertyNames(HH);
+       for (const zH of tH)
+         if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(zH)) try {
+           if ("function" !== typeof HH[zH]) continue;
+           const tH = JS(HH, zH, (function(HH) {
+             return function() {
+               for (var hH = arguments.length, tH = new Array(hH), CH = 0; CH < hH; CH++) tH[CH] = arguments[CH];
+               const EH = HH.apply(this, tH);
+               if (Et(EH, SH, this), "tagName" in this.canvas && !th(this.canvas, AH, rH, !0)) {
+                 const HH = Gt(tH, SH, this),
+                   AH = {
+                     type: BH,
+                     property: zH,
+                     args: HH
+                   };
+                 LH(this.canvas, AH)
```

#### 333. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6020-L6024` → after: `L8511-L8520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8511-L8520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8511-L8520) · [Before (L6020-L6024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6020-L6024)

```diff
-           return {
-             signal: QU,
-             lost: () => yU,
-             dispose: () => {
-               clearTimeout(zU), clearInterval(cU)
+           hH.push(tH)
+         } catch {
+           const AH = Lh(HH, zH, {
+             set(HH) {
+               LH(this.canvas, {
+                 type: BH,
+                 property: zH,
+                 args: [HH],
+                 setter: !0
+               })
```

#### 334. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6026-L6063` → after: `L8522-L8525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8522-L8525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8522-L8525) · [Before (L6026-L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6026-L6063)

```diff
-           }
-         }(XU.device, UU);
-       let FU;
-       try {
-         FU = await Promise.race([QU.then((() => "done")), AU.signal])
-       } finally {
-         AU.dispose()
-       }
-       if ("QU" === FU || zU()) return {
-         status: "QU"
-       };
-       const oU = yU.find((UU => "failed" === UU.status));
-       return oU && "lost" !== FU && !AU.lost() && await new Promise((UU => {
-         setTimeout(UU, 0)
-       })), "lost" === FU || AU.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
-         status: "skipped"
- ... (22 more removed lines; see GitHub link above)
+           });
+           hH.push(AH)
+         }
+       return hH
```

#### 335. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6067-L6111` → after: `L8533-L8547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8533-L8547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8533-L8547) · [Before (L6067-L6111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6067-L6111)

```diff
-       var XU;
-       return null !== (XU = null === UU || void 0 === UU ? void 0 : UU.message) && void 0 !== XU ? XU : String(UU)
-     }
- 
-     function vF(UU, XU, zU, cU, yU) {
-       Oc(XU) ? HF(cU).then((XU => {
-         const [cU] = XU;
-         EX(UU, "terrain", zU, yU, cU ? `${cU.lineNum}:${cU.linePos} error: ${cU.message}` : null)
-       })) : EX(UU, "terrain", zU, yU)
-     }
-     var VF = zU(38185),
-       sF = zU(38202),
-       nF = zU(38214),
-       mF = zU(3150);
- 
-     function lF(UU, XU, zU, cU, yU) {
- ... (29 more removed lines; see GitHub link above)
+       let BH;
+       try {
+         if (BH = Mt && (self.URL || self.webkitURL).createObjectURL(Mt), !BH) throw "";
+         const LH = new Worker(BH, {
+           name: null == HH ? void 0 : HH.name
+         });
+         return LH.addEventListener("error", (() => {
+           (self.URL || self.webkitURL).revokeObjectURL(BH)
+         })), LH
+       } catch (LH) {
+         return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(Wt), {
+           name: null == HH ? void 0 : HH.name
+         })
+       } finally {
+         BH && (self.URL || self.webkitURL).revokeObjectURL(BH)
```

#### 336. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6119-L6126` → after: `L8551-L8567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8551-L8567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8551-L8567) · [Before (L6119-L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6119-L6126)

```diff
-       constructor(UU, XU) {
-         this.device = UU, this.QG = XU, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
-       }
-       createBuffer() {
-         return this.device.createBuffer({
-           label: "terrain-chunk-slots",
-           size: this.data.byteLength,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
+       constructor(HH) {
+         SH(this, "pendingCanvasMutations", new Map), SH(this, "rafStamps", {
+           latestId: 0,
+           invokeId: null
+         }), SH(this, "mirror"), SH(this, "mutationCb"), SH(this, "resetObservers"), SH(this, "frozen", !1), SH(this, "locked", !1), SH(this, "processMutation", ((HH, BH) => {
+           !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(HH) || this.pendingCanvasMutations.set(HH, []), this.pendingCanvasMutatio … [truncated]
+         }));
+         const {
+           sampling: BH = "all",
+           win: LH,
+           blockClass: AH,
+           blockSelector: rH,
+           recordCanvas: hH,
+           dataURLOptions: tH
+         } = HH;
+         this.mutationCb = HH.mutationCb, this.mirror = HH.mirror, hH && "all" === BH && this.initCanvasMutationObserver(LH, AH, rH), hH && "number" === typeof BH && this.initCanvasFPSObserver(BH, LH, AH, rH, {
+ ... (1 more added lines; see GitHub link above)
```

#### 337. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6129-L6143` → after: `L8570-L8571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8570-L8571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8570-L8571) · [Before (L6129-L6143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6129-L6143)

```diff
-       allocate() {
-         var UU;
-         const XU = null !== (UU = this.free.pop()) && void 0 !== UU ? UU : this.next++;
-         if (8 * XU >= this.data.length) {
-           const UU = new Float32Array(2 * this.data.length);
-           UU.set(this.data), this.data = UU, this.words = new Uint32Array(UU.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.QG()
-         }
-         return XU
-       }
-       release(UU) {
-         this.free.push(UU)
-       }
-       set(UU, XU, zU, cU, yU) {
-         const QU = 8 * UU + sc;
-         this.data[QU] = XU, this.data[QU + 1] = zU, this.data[QU + 2] = cU, this.setVisibility(UU, yU)
+       reset() {
+         this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers()
```

#### 338. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6145-L6146` → after: `L8573-L8574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8573-L8574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8573-L8574) · [Before (L6145-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6145-L6146)

```diff
-       setVisibility(UU, XU) {
-         this.data[8 * UU + nc] = XU, this.markDirty(UU, UU)
+       freeze() {
+         this.frozen = !0
```

#### 339. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6148-L6150` → after: `L8576-L8577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8576-L8577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8576-L8577) · [Before (L6148-L6150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6148-L6150)

```diff
-       setFaces(UU, XU, zU) {
-         const cU = 8 * UU;
-         this.words[cU + mc] = XU, this.words[cU + lc] = zU, this.markDirty(UU, UU)
+       unfreeze() {
+         this.frozen = !1
```

#### 340. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6152-L6153` → after: `L8579-L8580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8579-L8580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8579-L8580) · [Before (L6152-L6153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6152-L6153)

```diff
-       markDirty(UU, XU) {
-         this.dirtyMin = Math.min(this.dirtyMin, UU), this.dirtyMax = Math.max(this.dirtyMax, XU)
+       lock() {
+         this.locked = !0
```

#### 341. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6155-L6157` → after: `L8582-L8583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8582-L8583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8582-L8583) · [Before (L6155-L6157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6155-L6157)

```diff
-       flush() {
-         if (this.dirtyMax < this.dirtyMin) return;
-         this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
+       unlock() {
+         this.locked = !1
```

#### 342. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6159-L6245` → after: `L8585-L8637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8585-L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8585-L8637) · [Before (L6159-L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6159-L6245)

```diff
-     }
-     const jF = Vc,
-       KF = !0;
-     const bF = {
-         arrayStride: 4,
-         stepMode: "vertex",
-         attributes: [{
-           shaderLocation: jF.packedLight,
-           offset: 0,
-           format: "float32"
-         }]
-       },
-       TF = {
-         srcFactor: "src-alpha",
-         dstFactor: "one-minus-src-alpha",
-         operation: "add"
- ... (71 more removed lines; see GitHub link above)
+       initCanvasFPSObserver(HH, BH, LH, AH, rH) {
+         const SH = ut(BH, LH, AH, !0),
+           hH = new Map,
+           tH = new xt;
+         tH.onmessage = HH => {
+           const {
+             id: BH
+           } = HH.data;
+           if (hH.set(BH, !1), !("base64" in HH.data)) return;
+           const {
+             base64: LH,
+             type: AH,
+             width: rH,
+             height: SH
+           } = HH.data;
+           this.mutationCb({
+ ... (37 more added lines; see GitHub link above)
```

#### 343. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6247-L6250` → after: `L8639-L8686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8639-L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8639-L8686) · [Before (L6247-L6250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6247-L6250)

```diff
-           }, {
-             binding: 1,
-             resource: {
-               buffer: this.slots.buffer
+             const AH = await createImageBitmap(HH);
+             tH.postMessage({
+               id: LH,
+               bitmap: AH,
+               width: HH.width,
+               height: HH.height,
+               dataURLOptions: rH.dataURLOptions
+             }, [AH])
+           }))), CH = requestAnimationFrame(XH)
+         };
+         CH = requestAnimationFrame(XH), this.resetObservers = () => {
+           SH(), cancelAnimationFrame(CH)
+         }
+       }
+       initCanvasMutationObserver(HH, BH, LH) {
+         this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
+ ... (32 more added lines; see GitHub link above)
```

#### 344. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6252-L6255` → after: `L8688-L8689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8688-L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8688-L8689) · [Before (L6252-L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6252-L6255)

```diff
-           }, {
-             binding: 2,
-             resource: {
-               buffer: null !== UU && void 0 !== UU ? UU : this.slots.buffer
+             return () => {
+               rH.forEach((HH => HH()))
```

#### 345. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6257-L6260` → after: `L8691-L8695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8691-L8695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8691-L8695) · [Before (L6257-L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6257-L6260)

```diff
-           }, {
-             binding: 3,
-             resource: {
-               buffer: null !== XU && void 0 !== XU ? XU : this.slots.buffer
+           }(this.processMutation.bind(this), HH, BH, LH),
+           SH = function(HH, BH, LH, AH) {
+             const rH = [];
+             return "undefined" !== typeof BH.WebGLRenderingContext && rH.push(...Qt(BH.WebGLRenderingContext.prototype, lh.WebGL, HH, LH, AH, BH)), "undefined" !== typeof BH.WebGL2RenderingContext && rH.push(...Qt(BH.WebGL2RenderingContext.prototype, lh.WebGL2, HH, LH, AH, BH)),  … [truncated]
+               rH.forEach((HH => HH()))
```

#### 346. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6262-L6263` → after: `L8697-L8700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8697-L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8697-L8700) · [Before (L6262-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6262-L6263)

```diff
-           }]
-         })
+           }(this.processMutation.bind(this), HH, BH, LH);
+         this.resetObservers = () => {
+           AH(), rH(), SH()
+         }
```

#### 347. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6265-L6268` → after: `L8702-L8703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8702-L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8702-L8703) · [Before (L6265-L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6265-L6268)

```diff
-       recordsGroup(UU, XU) {
-         const zU = null !== XU && void 0 !== XU ? XU : UU;
-         let cU = this.recordsGroups.get(zU);
-         return cU || (cU = this.createFrameBindGroup(UU, XU), this.recordsGroups.set(zU, cU)), cU
+       startPendingCanvasMutationFlusher() {
+         requestAnimationFrame((() => this.flushPendingCanvasMutations()))
```

#### 348. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6270-L6389` → after: `L8705-L8707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8705-L8707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8705-L8707) · [Before (L6270-L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6270-L6389)

```diff
-       setChunkMesh(UU, XU, zU) {
-         var cU;
-         let yU = this.chunks.get(UU);
-         yU ? this.geometry.release(yU) : (yU = {
-           mesh: UU,
-           slot: this.slots.allocate(),
-           origin: [zU[0], zU[1], zU[2]],
-           material: null,
-           vertices: null,
-           lit: !1,
-           faceCount: 0,
-           vertexCount: 0,
-           packed: !1,
-           lostRemeshes: 0,
-           lostRetryAt: 0,
-           visibility: UU.visibility,
- ... (104 more removed lines; see GitHub link above)
+       startRAFTimestamping() {
+         const HH = BH => {
+           this.rafStamps.latestId = BH, requestAnimationFrame(HH)
```

#### 349. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6391-L6401` → after: `L8709-L8725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8709-L8725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8709-L8725) · [Before (L6391-L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6391-L6401)

```diff
-         return this.materials.set(UU, oU), this.device.queue.writeBuffer(oU.uniformBuffer, 0, FU), oU.ready = this.createMaterialBindGroup(oU, yU).catch((XU => {
-           console.error(`Lite terrain failed to load the textures of material "${UU.name}"`, XU)
-         })), oU
-       }
-       materialLayout(UU) {
-         const XU = function(UU) {
-             const XU = ["uniforms"];
-             if ("atlas" === UU.texture) {
-               UU.animated && XU.push("animData"), XU.push("sampler");
-               for (let zU = 0; zU < UU.atlasCount; zU++) XU.push("textureArray")
-             } else "single" === UU.texture && XU.push("sampler", "texture");
+         requestAnimationFrame(HH)
+       }
+       flushPendingCanvasMutations() {
+         this.pendingCanvasMutations.forEach(((HH, BH) => {
+           const LH = this.mirror.getId(BH);
+           this.flushPendingCanvasMutationFor(BH, LH)
+         })), requestAnimationFrame((() => this.flushPendingCanvasMutations()))
+       }
+       flushPendingCanvasMutationFor(HH, BH) {
+         if (this.frozen || this.locked) return;
+         const LH = this.pendingCanvasMutations.get(HH);
+         if (!LH || -1 === BH) return;
+         const AH = LH.map((HH => {
+             const {
+               type: BH,
+               ...LH
+ ... (1 more added lines; see GitHub link above)
```

#### 350. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6403-L6448` → after: `L8727-L8735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8727-L8735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8727-L8735) · [Before (L6403-L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6403-L6448)

```diff
-           }(UU),
-           zU = XU.join(",");
-         let cU = this.materialLayouts.get(zU);
-         if (!cU) {
-           const UU = GPUShaderStage.FRAGMENT;
-           cU = this.device.createBindGroupLayout({
-             label: `terrain-material-${zU}`,
-             entries: XU.map(((XU, zU) => {
-               switch (XU) {
-                 case "uniforms":
-                   return {
-                     binding: zU, visibility: GPUShaderStage.VERTEX | UU, buffer: {
-                       type: "uniform"
-                     }
-                   };
-                 case "animData":
- ... (30 more removed lines; see GitHub link above)
+           })),
+           {
+             type: rH
+           } = LH[0];
+         this.mutationCb({
+           id: BH,
+           type: rH,
+           commands: AH
+         }), this.pendingCanvasMutations.delete(HH)
```

#### 351. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6450-L6472` → after: `L8737-L8771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8737-L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8737-L8771) · [Before (L6450-L6472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6450-L6472)

```diff
-       async createMaterialBindGroup(UU, XU) {
-         const zU = [{
-           buffer: UU.uniformBuffer
-         }];
-         if (XU) {
-           const cU = await XX(this.device, XU.sources);
-           UU.atlasCount = cU.length, UU.Y5 = cU[0].layerWidth, UU.atlasLayers = cU[0].layers, XU.animDataPerTex && zU.push({
-             buffer: JU(this.device, Float32Array.from(XU.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
-           }), zU.push(this.sampler);
-           for (const UU of cU) zU.push(UU.texture.createView({
-             dimension: "2d-array"
-           }))
-         } else if ("single" === UU.texture) {
-           const {
-             url: XU
-           } = UU.model.diffuseTexture.source, {
- ... (7 more removed lines; see GitHub link above)
+     }
+     class Pt {
+       constructor(HH) {
+         SH(this, "trackedLinkElements", new WeakSet), SH(this, "mutationCb"), SH(this, "adoptedStyleSheetCb"), SH(this, "styleMirror", new Uh), this.mutationCb = HH.mutationCb, this.adoptedStyleSheetCb = HH.adoptedStyleSheetCb
+       }
+       attachLinkElement(HH, BH) {
+         "_cssText" in BH.attributes && this.mutationCb({
+           adds: [],
+           removes: [],
+           texts: [],
+           attributes: [{
+             id: BH.id,
+             attributes: BH.attributes
+           }]
+         }), this.trackLinkElement(HH)
+       }
+ ... (19 more added lines; see GitHub link above)
```

#### 352. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6474-L6482` → after: `L8773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8773) · [Before (L6474-L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6474-L6482)

```diff
-         const cU = this.materialLayout(this.programKey(UU, !1));
-         UU.bindGroupLayout = cU, UU.bindGroup = this.device.createBindGroup({
-           label: `terrain-material-${UU.model.name}`,
-           layout: cU,
-           entries: zU.map(((UU, XU) => ({
-             binding: XU,
-             resource: UU
-           })))
-         })
+         AH.length > 0 && (LH.styles = AH), this.adoptedStyleSheetCb(LH)
```

#### 353. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6484-L6576` → after: `L8775-L8782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8775-L8782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8775-L8782) · [Before (L6484-L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6484-L6576)

```diff
-       programKey(UU, XU) {
-         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         const cU = zU ? zU.lighting : this.lighting,
-           yU = zU ? zU.Fp : this.Fp,
-           QU = {
-             texture: UU.texture,
-             atlasCount: UU.atlasCount,
-             Y5: UU.Y5,
-             atlasLayers: UU.atlasLayers,
-             animated: UU.animated,
-             alphaTest: UU.model.transparencyMode === dU.n.alphaTest,
-             lighting: cU,
-             dirLightCount: zU ? zU.dirLightCount : this.dirLightCount,
-             packed: XU
-           };
-         if (!yU) return QU;
- ... (77 more removed lines; see GitHub link above)
+       reset() {
+         this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
+       }
+       trackStylesheetInLinkElement(HH) {}
+     }
+     class Tt {
+       constructor() {
+         SH(this, "nodeMap", new WeakMap), SH(this, "active", !1)
```

#### 354. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6578-L6579` → after: `L8784-L8786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8784-L8786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8784-L8786) · [Before (L6578-L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6578-L6579)

```diff
-       pipelineId(UU, XU, zU) {
-         return Uo(XU, this.isBlended(UU), UU.model.backFaceCulling, zU)
+       inOtherBuffer(HH, BH) {
+         const LH = this.nodeMap.get(HH);
+         return LH && Array.from(LH).some((HH => HH !== BH))
```

#### 355. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6581-L6584` → after: `L8788-L8791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8788-L8791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8788-L8791) · [Before (L6581-L6584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6581-L6584)

```diff
-       pipelineBuild(UU, XU, zU) {
-         var cU;
-         const yU = this.pipelineId(UU, XU, zU);
-         return null !== (cU = this.builds.get(yU)) && void 0 !== cU ? cU : this.startPipeline(yU, UU, XU, zU)
+       add(HH, BH) {
+         this.active || (this.active = !0, requestAnimationFrame((() => {
+           this.nodeMap = new WeakMap, this.active = !1
+         }))), this.nodeMap.set(HH, (this.nodeMap.get(HH) || new Set).add(BH))
```

#### 356. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6586` → after: `L8793-L8880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8793-L8880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8793-L8880) · [Before (L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6586)

```diff
-       startPipeline(UU, XU, zU, cU) {
+       destroy() {}
+     }
+     let Ut, Vt, Ot, bt = !1;
+     try {
+       if (2 !== Array.from([1], (HH => 2 * HH))[0]) {
+         const HH = document.createElement("iframe");
+         document.body.appendChild(HH), Array.from = (null == (AH = HH.contentWindow) ? void 0 : AH.Array.from) || Array.from, document.body.removeChild(HH)
+       }
+     } catch (Gz) {
+       console.debug("Unable to override Array.from", Gz)
+     }
+     const kt = kH();
+ 
+     function mt() {
+       let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+       const {
+ ... (72 more added lines; see GitHub link above)
```

#### 357. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6588-L6601` → after: `L8882-L8891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8882-L8891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8882-L8891) · [Before (L6588-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6588-L6601)

```diff
-         this.pipelines.set(UU, null);
-         const QU = Tc(zU),
-           AU = this.isBlended(XU),
-           FU = this.shadowMask && cU._depthStencilFormat ? function(UU, XU, zU, cU) {
-             if (void 0 === UU.packVariant || UU.liquid || XU) return "none";
-             const yU = (0, bX.e)(UU.packVariant);
-             return null === yU || void 0 === yU || !yU.sunShadow || !Qc(yU, zU) || yU.discards || UU.alphaTest && ec(UU.packVariant) ? "none" : cU ? "edge" : "plain"
-           }(zU, AU, !!this.sunShadow, cU._sampleCount > 1) : "none";
-         let oU;
-         try {
-           oU = hc(zU, !!this.sunShadow, FU)
-         } catch (tU) {
-           if (!Oc(zU)) throw tU;
-           return this.failedPackBuild(UU, zU, QU, tU)
+         const hH = HH;
+         if (hH.timestamp = sS(), !(null == (SH = Dh[0]) ? void 0 : SH.isFrozen()) || hH.type === mh.FullSnapshot || hH.type === mh.IncrementalSnapshot && hH.data.source === oh.Mutation || Dh.forEach((HH => HH.unfreeze())), cH) null == BH || BH(jH(hH), rH);
+         else if (eH) {
+           const HH = {
+             type: "rrweb",
+             event: jH(hH),
+             origin: window.location.origin,
+             isCheckout: rH
+           };
+           window.parent.postMessage(HH, "*")
```

#### 358. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6603-L6659` → after: `L8893-L8931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8893-L8931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8893-L8931) · [Before (L6603-L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6603-L6659)

```diff
-         const DU = this.shaderModule(oU, QU),
-           EU = [];
-         zU.packed || (EU.push(function(UU, XU) {
-           const zU = [{
-             shaderLocation: jF.position,
-             offset: JX.f.yA,
-             format: "float32x3"
-           }, {
-             shaderLocation: jF.normal,
-             offset: JX.f.normalOffset,
-             format: "snorm8x4"
-           }, {
-             shaderLocation: jF.color,
-             offset: JX.f.colorOffset,
-             format: "unorm8x4"
-           }];
- ... (41 more removed lines; see GitHub link above)
+         if (hH.type === mh.FullSnapshot) NH = hH, RH = 0;
+         else if (hH.type === mh.IncrementalSnapshot) {
+           if (hH.data.source === oh.Mutation && hH.data.isAttachIframe) return;
+           RH++;
+           const HH = AH && RH >= AH,
+             BH = LH && hH.timestamp - NH.timestamp > LH;
+           (HH || BH) && Vt(!0)
+         }
+       };
+       const nH = HH => {
+           Ut({
+             type: mh.IncrementalSnapshot,
+             data: {
+               source: oh.Mutation,
+               ...HH
+             }
+ ... (23 more added lines; see GitHub link above)
```

#### 359. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6662-L6668` → after: `L9084-L9222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9084-L9222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9084-L9222) · [Before (L6662-L6668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6662-L6668)

```diff
-           IU = zU.resting ? 0 : 1;
-         this.compiling += IU;
-         const pU = "none" === FU ? this.device.createRenderPipelineAsync(NU) : this.startMaskPipelines(DU, NU, "edge" === FU);
-         pU.then((XU => {
-           this.compiling -= IU, this.pipelines.set(UU, XU)
-         }), (UU => {
-           this.compiling -= IU, console.error(`Lite terrain pipeline ${QU} failed`, UU), vF(this.device, zU, QU, DU, UU)
+           keepIframeSrcFn: fH
+         });
+         if (!BH) return console.warn("Failed to snapshot the document");
+         Ut({
+           type: mh.FullSnapshot,
+           data: {
+             node: BH,
+             initialOffset: Ah(window)
+           }
+         }, HH), Dh.forEach((HH => HH.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && wH.adoptStyleSheets(document.adoptedStyleSheets, kt.getId(document))
+       };
+       try {
+         const HH = [],
+           BH = HH => {
+             var BH;
+             return Fh(Ht)({
+ ... (123 more added lines; see GitHub link above)
```

#### 360. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6670-L6713` → after: `L9224-L9225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9224-L9225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9224-L9225) · [Before (L6670-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6670-L6713)

```diff
-         const aU = {
-           name: QU,
-           module: DU,
-           built: pU
-         };
-         return this.builds.set(UU, aU), aU
-       }
-       startMaskPipelines(UU, XU, zU) {
-         const cU = XU.depthStencil,
-           yU = this.device.createRenderPipelineAsync(zU ? XU : {
-             ...XU,
-             depthStencil: {
-               ...cU,
-               depthCompare: "equal",
-               depthWriteEnabled: !1
-             }
- ... (28 more removed lines; see GitHub link above)
+         const LH = () => {
+           Vt(), HH.push(BH(document)), bt = !0
```

#### 361. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6715-L6731` → after: `L9227-L9238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9227-L9238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9227-L9238) · [Before (L6715-L6731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6715-L6731)

```diff
-         return this.builds.set(UU, QU), QU
-       }
-       checkShaderPack(UU) {
-         return iF(UU, {
-           device: this.device,
-           target: this.target,
-           material: UU => this.materialFor(UU),
-           programKey: (UU, XU, zU) => this.programKey(UU, XU, zU),
-           pipelineBuild: (UU, XU, zU) => this.pipelineBuild(UU, XU, zU)
-         })
-       }
-       createBinding(UU, XU, zU) {
-         return this.target = XU, {
-           renderable: UU,
-           pipeline: CX(this.device, XU),
-           draw: UU => {
- ... (1 more removed lines; see GitHub link above)
+         return ["interactive", "complete"].includes(document.readyState) ? LH() : (HH.push(pS("DOMContentLoaded", (() => {
+           Ut({
+             type: mh.DomContentLoaded,
+             data: {}
+           }), "DOMContentLoaded" === OH && LH()
+         }))), HH.push(pS("load", (() => {
+           Ut({
+             type: mh.Load,
+             data: {}
+           }), "load" === OH && LH()
+         }), window))), () => {
+           HH.forEach((HH => {
```

#### 362. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6733-L6735` → after: `L9240-L9242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9240-L9242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9240-L9242) · [Before (L6733-L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6733-L6735)

```diff
-               return zU ? this.drawTransparent(UU, XU) : this.drawOpaque(UU, XU)
-             } finally {
-               this.geometry.setDrawing(!1)
+               HH()
+             } catch (BH) {
+               String(BH).toLowerCase().includes("cross-origin") || console.warn(BH)
```

#### 363. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6737` → after: `L9244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9244) · [Before (L6737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6737)

```diff
-           }
+           })), dH.destroy(), bt = !1, nh = void 0
```

#### 364. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6740-L6820` → after: `L9249-L9267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9249-L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9249-L9267) · [Before (L6740-L6820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6740-L6820)

```diff
-       prepare(UU, XU) {
-         var zU, cU, yU, QU;
-         const {
-           WN: AU
-         } = UU;
-         this.lighting = UU.ia;
-         const FU = (0, gF.C)(XU);
-         this.dirLightCount = Math.min(FU, 4), this.Fp = null !== (zU = AU.Fp) && void 0 !== zU ? zU : null, FU > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(UU, XU), this.animateMaterials(XU.animTick);
-         const oU = AU.VN,
-           DU = oU[0] !== this.originOffset[0] || oU[1] !== this.originOffset[1] || oU[2] !== this.originOffset[2];
-         DU && (this.originOffset[0] = oU[0], this.originOffset[1] = oU[1], this.originOffset[2] = oU[2]);
-         const EU = XU.eye;
-         this.eye[0] = EU[0], this.eye[1] = EU[1], this.eye[2] = EU[2], this.writeShaderPackInputs();
-         const YU = XU.projectionMatrix,
-           NU = 0 === YU[15];
-         let IU = 0;
- ... (65 more removed lines; see GitHub link above)
+     }
+ 
+     function ot() {
+       let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
+         BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
+       if ("scrollBehavior" in BH.documentElement.style && !0 !== HH.__forceSmoothScrollPolyfill__) return;
+       const LH = HH.HTMLElement || HH.Element,
+         AH = {
+           scroll: HH.scroll || HH.scrollTo,
+           scrollBy: HH.scrollBy,
+           elementScroll: LH.prototype.scroll || tH,
+           scrollIntoView: LH.prototype.scrollIntoView
+         },
+         rH = HH.performance && HH.performance.now ? HH.performance.now.bind(HH.performance) : Date.now;
+       const SH = (hH = HH.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(hH) ? 1 : 0);
+       var hH;
+ ... (3 more added lines; see GitHub link above)
```

#### 365. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6822-L6828` → after: `L9269-L9273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9269-L9273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9269-L9273) · [Before (L6822-L6828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6822-L6828)

```diff
-       sweepVisibility(UU, XU, zU) {
-         const {
-           qY: cU
-         } = UU.WN, yU = cU.tY, QU = this.visPassable, AU = this.eye[0] + this.originOffset[0], FU = this.eye[1] + this.originOffset[1], oU = this.eye[2] + this.originOffset[2];
-         if (!zU.eyeClear(AU, FU, oU, XU.near, XU.projectionMatrix, cU)) return null;
-         const [DU, EU] = cU.EyU, YU = zU.update(AU, FU, oU, yU, DU, EU, QU);
-         return this.visSweeps = zU.sweeps, YU ? zU : null
+ 
+       function zH(HH) {
+         if (null === HH || "object" !== typeof HH || void 0 === HH.behavior || "auto" === HH.behavior || "instant" === HH.behavior) return !0;
+         if ("object" === typeof HH && "smooth" === HH.behavior) return !1;
+         throw new TypeError("behavior member of ScrollOptions " + HH.behavior + " is not a valid value for enumeration ScrollBehavior.")
```

#### 366. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6830-L6834` → after: `L9275-L9277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9275-L9277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9275-L9277) · [Before (L6830-L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6830-L6834)

```diff
-       visSeeThrough(UU, XU) {
-         const {
-           material: zU
-         } = UU;
-         return (!zU || !this.isBlended(zU)) && (UU.mesh.visibility < 1 || !(null !== zU && void 0 !== zU && zU.bindGroup) || UU.faceCount > 0 && (!this.geometry.backed(UU) || this.lighting && !UU.vertices.page.twin) || !this.batchDraws(zU, UU.packed, XU))
+ 
+       function CH(HH, BH) {
+         return "Y" === BH ? HH.clientHeight + SH < HH.scrollHeight : "X" === BH ? HH.clientWidth + SH < HH.scrollWidth : void 0
```

#### 367. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6836-L6846` → after: `L9279-L9282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9279-L9282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9279-L9282) · [Before (L6836-L6846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6836-L6846)

```diff
-       batchDraws(UU, XU, zU) {
-         var cU;
-         const yU = XU ? 2 : 0;
-         if (UU === this.visDrawsMaterial && function(UU, XU) {
-             return 0 !== (UU & 1 << XU)
-           }(this.visDrawsBits, yU)) return 0 !== (this.visDrawsBits & 2 << yU);
-         let QU = null !== (cU = this.visBatchDraws.get(UU)) && void 0 !== cU ? cU : 0;
-         if (!(QU & 1 << yU)) {
-           QU |= 1 << yU | (!!UU.bindGroupLayout && this.canDraw(UU, XU) && !!this.pipelines.get(this.pipelineIdNow(UU, XU, !1, zU)) ? 2 << yU : 0), this.visBatchDraws.set(UU, QU)
-         }
-         return this.visDrawsMaterial = UU, this.visDrawsBits = QU, 0 !== (QU & 2 << yU)
+ 
+       function EH(BH, LH) {
+         const AH = HH.getComputedStyle(BH, null)["overflow" + LH];
+         return "auto" === AH || "scroll" === AH
```

#### 368. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6848-L6877` → after: `L9284-L9292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9284-L9292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9284-L9292) · [Before (L6848-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6848-L6877)

```diff
-       runVisCheck(UU, XU, zU) {
-         const {
-           WN: cU
-         } = UU, {
-           qY: yU
-         } = cU, QU = yU.tY, AU = new Set;
-         for (const IU of this.chunks.values()) AU.add(IU.key);
-         const FU = sy.Matrix.FromArray(XU.viewProjectionMatrix).invert(),
-           [oU, DU, EU] = this.originOffset,
-           YU = new sy.Sp,
-           NU = function(UU, XU, zU, cU) {
-             const yU = new Set;
-             for (let QU = 0; QU < 27; QU++)
-               for (let AU = 0; AU < 48; AU++) {
-                 const FU = zU((AU + .5) / 48 * 2 - 1, (QU + .5) / 27 * 2 - 1);
-                 lF(UU, XU, [FU[0] - XU[0], FU[1] - XU[1], FU[2] - XU[2]], cU, yU)
- ... (14 more removed lines; see GitHub link above)
+ 
+       function XH(HH) {
+         const BH = CH(HH, "Y") && EH(HH, "Y"),
+           LH = CH(HH, "X") && EH(HH, "X");
+         return BH || LH
+       }
+ 
+       function GH(BH) {
+         let LH, AH, SH, hH = (rH() - BH.startTime) / 468;
```

#### 369. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6879` → after: `L9294-L9308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9294-L9308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9294-L9308) · [Before (L6879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6879)

```diff
-         null !== (UU = this.Fp) && void 0 !== UU && UU.isRunning() && (this.shaderPackInputs ??= new JQ(this.device, this.Fp.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.Fp, this.eye, this.lighting))
+         hH = hH > 1 ? 1 : hH, tH = hH, LH = .5 * (1 - Math.cos(Math.PI * tH)), AH = BH.startX + (BH.x - BH.startX) * LH, SH = BH.startY + (BH.y - BH.startY) * LH, BH.method.call(BH.scrollable, AH, SH), AH === BH.x && SH === BH.y || HH.requestAnimationFrame(GH.bind(HH, BH))
+       }
+ 
+       function YH(LH, SH, hH) {
+         let zH, CH, EH, XH;
+         const YH = rH();
+         LH === BH.body ? (zH = HH, CH = HH.scrollX || HH.pageXOffset, EH = HH.scrollY || HH.pageYOffset, XH = AH.scroll) : (zH = LH, CH = LH.scrollLeft, EH = LH.scrollTop, XH = tH), GH({
+           scrollable: zH,
+           method: XH,
+           startTime: YH,
+           startX: CH,
+           startY: EH,
+           x: SH,
+           y: hH
+         })
```

#### 370. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6881-L6901` → after: `L9310-L9345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9310-L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9310-L9345) · [Before (L6881-L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6881-L6901)

```diff
-       bindShaderPackInputs(UU, XU, zU) {
-         var cU, yU, QU, AU;
-         let FU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         const oU = this.packVariant(XU, zU);
-         if (void 0 === oU) return;
-         this.shaderPackInputs || (this.shaderPackInputs = new JQ(this.device, zU.textureLayers(), this.sunShadow), this.shaderPackInputs.write(zU, this.eye, this.lighting));
-         const DU = Lc(oU) ? null !== (cU = null === (yU = this.sceneDepth) || void 0 === yU ? void 0 : yU.view) && void 0 !== cU ? cU : this.standIn() : null,
-           EU = FU ? null !== (QU = null === (AU = this.shadowMask) || void 0 === AU ? void 0 : AU.view) && void 0 !== QU ? QU : this.standIn() : null;
-         this.shaderPackInputs.bind(UU, DU, lQ(oU, !!this.sunShadow), EU)
-       }
-       standIn() {
-         return this.depthStandIn ??= this.device.createTexture({
-           label: "scene-depth-stand-in",
-           size: [1, 1],
-           format: "r32float",
-           usage: GPUTextureUsage.TEXTURE_BINDING
- ... (5 more removed lines; see GitHub link above)
+       HH.scroll = HH.scrollTo = function() {
+         void 0 !== arguments[0] && (!0 !== zH(arguments[0]) ? YH.call(HH, BH.body, void 0 !== arguments[0].left ? ~~arguments[0].left : HH.scrollX || HH.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : HH.scrollY || HH.pageYOffset) : AH.scroll.call(HH, void 0 !== a … [truncated]
+       }, HH.scrollBy = function() {
+         void 0 !== arguments[0] && (zH(arguments[0]) ? AH.scrollBy.call(HH, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : YH.ca … [truncated]
+       }, LH.prototype.scroll = LH.prototype.scrollTo = function() {
+         if (void 0 === arguments[0]) return;
+         if (!0 === zH(arguments[0])) {
+           if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
+           return void AH.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop … [truncated]
+         }
+         const HH = arguments[0].left,
+           BH = arguments[0].top;
+         YH.call(this, this, "undefined" === typeof HH ? this.scrollLeft : ~~HH, "undefined" === typeof BH ? this.scrollTop : ~~BH)
+       }, LH.prototype.scrollBy = function() {
+         void 0 !== arguments[0] && (!0 !== zH(arguments[0]) ? this.scroll({
+           left: ~~arguments[0].left + this.scrollLeft,
+ ... (20 more added lines; see GitHub link above)
```

#### 371. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6903-L6907` → after: `L9347-L9367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9347-L9367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9347-L9367) · [Before (L6903-L6907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6903-L6907)

```diff
-       resetBatches(UU) {
-         const XU = this.opaqueBatches;
-         let zU = 0;
-         for (const cU of XU) cU.meshes.length > 0 && (cU.meshes.length = 0, cU.faceCull = this.batchFaceCull(cU.material, UU), XU[zU++] = cU);
-         XU.length = zU
+     }
+     mt.addCustomEvent = (HH, BH) => {
+       if (!bt) throw new Error("please add custom event after start recording");
+       Ut({
+         type: mh.Custom,
+         data: {
+           tag: HH,
+           payload: BH
+         }
+       })
+     }, mt.freezePage = () => {
+       Dh.forEach((HH => HH.freeze()))
+     }, mt.takeFullSnapshot = HH => {
+       if (!bt) throw new Error("please take full snapshot after start recording");
+       Vt(HH)
+     }, mt.mirror = kt;
+ ... (5 more added lines; see GitHub link above)
```

#### 372. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6909-L6921` → after: `L9369-L9374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9369-L9374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9369-L9374) · [Before (L6909-L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6909-L6921)

```diff
-       orderBatches() {
-         const UU = this.opaqueBatches;
-         for (let XU = 0; XU < UU.length; XU++) {
-           const zU = UU[XU];
-           zU.group = XU;
-           for (let cU = 0; cU < XU; cU++) {
-             const XU = UU[cU];
-             if (XU.material === zU.material && XU.packed === zU.packed) {
-               zU.group = XU.group;
-               break
-             }
-           }
-           zU.nearest = zU.meshes.length > 0 ? zU.meshes[0].distance : 1 / 0
+       addAction(HH) {
+         const BH = !0 === this.raf;
+         if (!this.actions.length || this.actions[this.actions.length - 1].delay <= HH.delay) this.actions.push(HH);
+         else {
+           const BH = this.findActionIndex(HH);
+           this.actions.splice(BH, 0, HH)
```

#### 373. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6923` → after: `L9376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9376) · [Before (L6923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6923)

```diff
-         UU.sort(xF)
+         BH && (this.raf = requestAnimationFrame(this.rafCheck.bind(this)))
```

#### 374. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6925-L6938` → after: `L9378-L9379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9378-L9379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9378-L9379) · [Before (L6925-L6938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6925-L6938)

```diff
-       batchFor(UU, XU, zU, cU, yU) {
-         for (const AU of this.opaqueBatches)
-           if (AU.material === UU && AU.packed === XU && AU.page === zU && AU.resting === cU) return AU;
-         const QU = {
-           material: UU,
-           packed: XU,
-           page: zU,
-           resting: cU,
-           meshes: [],
-           group: 0,
-           nearest: 0,
-           faceCull: this.batchFaceCull(UU, yU)
-         };
-         return this.opaqueBatches.push(QU), QU
+       start() {
+         this.timeOffset = 0, this.lastTimestamp = performance.now(), this.raf = requestAnimationFrame(this.rafCheck.bind(this))
```

#### 375. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6940-L6944` → after: `L9381-L9382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9381-L9382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9381-L9382) · [Before (L6940-L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6940-L6944)

```diff
-       batchFaceCull(UU, XU) {
-         return !(!XU || !(0, VF.m)(UU.model)) && (!this.Fp || ! function(UU) {
-           var XU;
-           return !(null === (XU = (0, bX.e)(UU)) || void 0 === XU || !XU.movesVertices)
-         }(this.packVariant(UU, this.Fp)))
+       updateLiveTime() {
+         !0 === this.raf && this.rafCheck()
```

#### 376. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6946-L6952` → after: `L9384-L9389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9384-L9389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9384-L9389) · [Before (L6946-L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6946-L6952)

```diff
-       writeFrameUniforms(UU, XU) {
-         const zU = this.frameUniforms,
-           cU = Sc;
-         if ((0, gF.G)(UU, zU), zU[cU.fogInfos] = XU.fogEnabled ? XU.fogMode : 0, zU[cU.fogInfos + 1] = XU.fogStart, zU[cU.fogInfos + 2] = XU.fogEnd, zU[cU.fogInfos + 3] = XU.fogDensity, zU.set(XU.fogColour, cU.fogColour), zU[cU.outputHeight] = XU.renderHeight, zU.set(XU.ambientCo … [truncated]
-           const XU = (0, kF.j)(UU.Xa, UU.dp, UU.Lp);
-           for (let UU = 0; UU < 4; UU++) zU[cU.aoLevels + UU] = XU[UU] / 255;
-           this.aoLevelsWritten = !0
+       rafCheck() {
+         const HH = performance.now();
+         for (this.timeOffset += (HH - this.lastTimestamp) * this.speed, this.lastTimestamp = HH; this.actions.length;) {
+           const HH = this.actions[0];
+           if (!(this.timeOffset >= HH.delay)) break;
+           this.actions.shift(), HH.doAction()
```

#### 377. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6954-L6958` → after: `L9391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9391) · [Before (L6954-L6958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6954-L6958)

```diff
-         this.device.queue.writeBuffer(this.frameBuffer, 0, zU)
-       }
-       animateMaterials(UU) {
-         const XU = uc.anim;
-         for (const zU of this.materials.values()) zU.animated && (zU.uniformData[XU] = UU, this.device.queue.writeBuffer(zU.uniformBuffer, 4 * XU, zU.uniformData, XU, 1))
+         this.actions.length > 0 ? this.raf = requestAnimationFrame(this.rafCheck.bind(this)) : this.raf = !0
```

#### 378. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6960-L6961` → after: `L9393-L9394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9393-L9394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9393-L9394) · [Before (L6960-L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6960-L6961)

```diff
-       canDraw(UU, XU) {
-         return !("atlas" === UU.texture && !XU) || (this.warnOnce(`stride:${UU.id}`, `Lite terrain: material "${UU.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
+       clear() {
+         this.raf && (!0 !== this.raf && cancelAnimationFrame(this.raf), this.raf = null), this.actions.length = 0
```

#### 379. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6963-L6971` → after: `L9396-L9397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9396-L9397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9396-L9397) · [Before (L6963-L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6963-L6971)

```diff
-       drawOpaque(UU, XU) {
-         let zU = 0;
-         UU.setBindGroup(1, this.frameBindGroup);
-         for (const cU of this.opaqueBatches) {
-           if (!cU.meshes.length || !this.canDraw(cU.material, cU.packed)) continue;
-           const yU = this.pipelineFor(cU.material, cU.packed, XU, cU.resting);
-           yU && (UU.setPipeline(yU), UU.setBindGroup(2, cU.material.bindGroup), this.Fp && this.bindShaderPackInputs(UU, cU.material, this.Fp, this.prepassOf.has(yU)), zU += this.drawBatch(UU, cU))
-         }
-         return zU
+       setSpeed(HH) {
+         this.speed = HH
```

#### 380. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6973-L6974` → after: `L9399-L9400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9399-L9400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9399-L9400) · [Before (L6973-L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6973-L6974)

```diff
-       get readsMask() {
-         return this.maskPipelines > 0
+       isActive() {
+         return null !== this.raf
```

#### 381. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6976-L6979` → after: `L9402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9402) · [Before (L6976-L6979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6976-L6979)

```diff
-       drawPrepass(UU, XU, zU) {
-         const cU = this.target,
-           yU = this.Fp;
-         if (!cU || !yU || 0 === this.maskPipelines) return 0;
+       findActionIndex(HH) {
```

#### 382. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6981-L6988` → after: `L9404-L9410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9404-L9410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9404-L9410) · [Before (L6981-L6988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6981-L6988)

```diff
-           AU = null;
-         this.geometry.setDrawing(!0);
-         try {
-           for (const FU of this.opaqueBatches) {
-             if (!FU.meshes.length || !this.canDraw(FU.material, FU.packed)) continue;
-             const oU = this.pipelineFor(FU.material, FU.packed, cU, FU.resting),
-               DU = oU && this.prepassOf.get(oU);
-             DU && (AU || (AU = UU.beginRenderPass(XU), AU.setBindGroup(0, zU), AU.setBindGroup(1, this.frameBindGroup)), AU.setPipeline(DU), AU.setBindGroup(2, FU.material.bindGroup), this.bindShaderPackInputs(AU, FU.material, yU, !0), QU += this.drawBatch(AU, FU))
+           LH = this.actions.length - 1;
+         for (; BH <= LH;) {
+           const AH = Math.floor((BH + LH) / 2);
+           if (this.actions[AH].delay < HH.delay) BH = AH + 1;
+           else {
+             if (!(this.actions[AH].delay > HH.delay)) return AH + 1;
+             LH = AH - 1
```

#### 383. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6996-L7004` → after: `L9415-L9421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9415-L9421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9415-L9421) · [Before (L6996-L7004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L6996-L7004)

```diff
-       drawBatch(UU, XU) {
-         let zU = 0;
-         for (const cU of XU.meshes) {
-           const {
-             rangeCount: XU
-           } = cU;
-           XU > 0 && (zU += this.geometry.draw(UU, cU, this.lighting, cU.first0, cU.count0), XU > 1 && (zU += this.geometry.draw(UU, cU, this.lighting, cU.first1, cU.count1)))
-         }
-         return zU
+     }
+ 
+     function ft(HH, BH) {
+       if (HH.type === mh.IncrementalSnapshot && HH.data.source === oh.MouseMove && HH.data.positions && HH.data.positions.length) {
+         const LH = HH.data.positions[0].timeOffset,
+           AH = HH.timestamp + LH;
+         return HH.delay = AH - BH, AH - BH
```

#### 384. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7006-L7015` → after: `L9423-L9442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9423-L9442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9423-L9442) · [Before (L7006-L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7006-L7015)

```diff
-       drawTransparent(UU, XU) {
-         let zU = 0,
-           cU = null,
-           yU = null;
-         UU.setBindGroup(1, this.frameBindGroup);
-         for (const QU of this.transparent) {
-           const AU = QU.material;
-           if (!this.canDraw(AU, QU.packed)) continue;
-           const FU = this.pipelineFor(AU, QU.packed, XU);
-           FU && (FU !== cU && (UU.setPipeline(FU), cU = FU, this.Fp && this.bindShaderPackInputs(UU, AU, this.Fp)), AU !== yU && (UU.setBindGroup(2, AU.bindGroup), yU = AU), zU += this.geometry.draw(UU, QU, this.lighting))
+       return HH.delay = HH.timestamp - BH, HH.delay
+     }
+ 
+     function lt(HH, BH) {
+       var LH = "function" == typeof Symbol && HH[Symbol.iterator];
+       if (!LH) return HH;
+       var AH, rH, SH = LH.call(HH),
+         hH = [];
+       try {
+         for (;
+           (void 0 === BH || BH-- > 0) && !(AH = SH.next()).done;) hH.push(AH.value)
+       } catch (tH) {
+         rH = {
+           error: tH
+         }
+       } finally {
+ ... (4 more added lines; see GitHub link above)
```

#### 385. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7021-L7022` → after: `L9453-L9454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9453-L9454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9453-L9454) · [Before (L7021-L7022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7021-L7022)

```diff
-     function Uo(UU, XU, zU, cU) {
-       return `${Tc(UU)}|${UU.atlasLayers}|${UU.Y5}|${XU}|${zU}|${cU._colorFormat}|${cU._depthStencilFormat}|${cU._sampleCount}`
+     function qt(HH) {
+       return void 0 === HH ? [] : [].concat(HH)
```

#### 386. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7025-L7026` → after: `L9457-L9461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9457-L9461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9457-L9461) · [Before (L7025-L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7025-L7026)

```diff
-     function Xo(UU, XU) {
-       return UU.distance - XU.distance
+     function gt(HH) {
+       return {
+         type: "xstate.assign",
+         assignment: HH
+       }
```

#### 387. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7030` → after: `L9465-L9470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9465-L9470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9465-L9470) · [Before (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7030)

```diff
-       return XU.distance - UU.distance
+       return "string" == typeof(HH = "string" == typeof HH && BH && BH[HH] ? BH[HH] : HH) ? {
+         type: HH
+       } : "function" == typeof HH ? {
+         type: HH.name,
+         exec: HH
+       } : HH
```

#### 388. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7032-L7034` → after: `L9472-L9475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9472-L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9472-L9475) · [Before (L7032-L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7032-L7034)

```diff
-     class co {
-       constructor() {
-         this.left = []
+ 
+     function Rt(HH) {
+       return function(BH) {
+         return HH === BH
```

#### 389. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7036-L7041` → after: `L9477-L9491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9477-L9491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9477-L9491) · [Before (L7036-L7041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7036-L7041)

```diff
-       sort(UU, XU) {
-         for (let zU = 0; zU < UU.length; zU++) {
-           const XU = UU[zU].distance;
-           if (XU - XU !== 0) return !1
-         }
-         return this.sortRange(UU, 0, UU.length, XU), !0
+     }
+ 
+     function jt(HH) {
+       return "string" == typeof HH ? {
+         type: HH
+       } : HH
+     }
+ 
+     function nt(HH, BH) {
+       return {
+         value: HH,
+         context: BH,
+         actions: [],
+         changed: !1,
+         matches: Rt(HH)
```

#### 390. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7043-L7052` → after: `L9493-L9504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9493-L9504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9493-L9504) · [Before (L7043-L7052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7043-L7052)

```diff
-       sortRange(UU, XU, zU, cU) {
-         if (zU - XU <= 16) {
-           for (let yU = XU + 1; yU < zU; yU++) {
-             const zU = UU[yU],
-               QU = cU * zU.distance;
-             let AU = yU - 1;
-             for (; AU >= XU && cU * UU[AU].distance > QU; AU--) UU[AU + 1] = UU[AU];
-             UU[AU + 1] = zU
-           }
-           return
+     }
+ 
+     function Ft(HH, BH, LH) {
+       var AH = BH,
+         rH = !1;
+       return [HH.filter((function(HH) {
+         if ("xstate.assign" === HH.type) {
+           rH = !0;
+           var BH = Object.assign({}, AH);
+           return "function" == typeof HH.assignment ? BH = HH.assignment(AH, LH) : Object.keys(HH.assignment).forEach((function(rH) {
+             BH[rH] = "function" == typeof HH.assignment[rH] ? HH.assignment[rH](AH, LH) : HH.assignment[rH]
+           })), AH = BH, !1
```

#### 391. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7054-L7065` → after: `L9506-L9507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9506-L9507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9506-L9507) · [Before (L7054-L7065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7054-L7065)

```diff
-         const yU = XU + zU >>> 1;
-         if (this.sortRange(UU, XU, yU, cU), this.sortRange(UU, yU, zU, cU), cU * UU[yU - 1].distance <= cU * UU[yU].distance) return;
-         const {
-           left: QU
-         } = this, AU = yU - XU;
-         for (let EU = 0; EU < AU; EU++) QU[EU] = UU[XU + EU];
-         let FU = 0,
-           oU = yU,
-           DU = XU;
-         for (; FU < AU && oU < zU;) UU[DU++] = cU * UU[oU].distance < cU * QU[FU].distance ? UU[oU++] : QU[FU++];
-         for (; FU < AU;) UU[DU++] = QU[FU++]
-       }
+         return !0
+       })), AH, rH]
```

#### 392. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7069-L7084` → after: `L9510-L9599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9510-L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9510-L9599) · [Before (L7069-L7084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7069-L7084)

```diff
-     function Qo(UU, XU, zU, cU) {
-       let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : XU;
-       const QU = Math.min(XU, zU),
-         AU = new Uint32Array(Rz(cU));
-       for (let FU = 0; FU < cU; FU++) {
-         const XU = Math.floor(FU * QU / cU),
-           zU = Math.max(XU + 1, Math.floor((FU + 1) * QU / cU));
-         for (let oU = 0; oU < cU; oU++) {
-           const DU = Math.floor(oU * QU / cU),
-             EU = Math.max(DU + 1, Math.floor((oU + 1) * QU / cU));
-           let YU = 0;
-           for (let cU = XU; cU < zU; cU++)
-             for (let XU = DU; XU < EU; XU++) UU[cU * yU + XU] >= yo && YU++;
-           if (2 * YU >= (zU - XU) * (EU - DU)) {
-             const UU = oU + cU * FU;
-             AU[UU >>> 5] |= 1 << (31 & UU)
+     function Dt(HH, BH) {
+       void 0 === BH && (BH = {});
+       var LH = lt(Ft(qt(HH.states[HH.initial].entry).map((function(HH) {
+           return Nt(HH, BH.actions)
+         })), HH.context, et), 2),
+         AH = LH[0],
+         rH = LH[1],
+         SH = {
+           config: HH,
+           _options: BH,
+           initialState: {
+             value: HH.initial,
+             actions: AH,
+             context: rH,
+             matches: Rt(HH.initial)
+           },
+ ... (74 more added lines; see GitHub link above)
```

#### 393. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7086-L7087` → after: `L9601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9601) · [Before (L7086-L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7086-L7087)

```diff
-         }
-       }
+         };
```

#### 394. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7092` → after: `L9612-L9654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9612-L9654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9612-L9654) · [Before (L7092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7092)

```diff
-       return Math.max(1, Math.min(16, UU))
+       var BH = HH.initialState,
+         LH = Kt.NotStarted,
+         AH = new Set,
+         rH = {
+           _machine: HH,
+           send: function(rH) {
+             LH === Kt.Running && (BH = HH.transition(BH, rH), wt(BH, jt(rH)), AH.forEach((function(HH) {
+               return HH(BH)
+             })))
+           },
+           subscribe: function(HH) {
+             return AH.add(HH), HH(BH), {
+               unsubscribe: function() {
+                 return AH.delete(HH)
+               }
+             }
+ ... (27 more added lines; see GitHub link above)
```

#### 395. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7094-L7134` → after: `L9656-L9718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9656-L9718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9656-L9718) · [Before (L7094-L7134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7094-L7134)

```diff
-     class Fo {
-       constructor(UU, XU) {
-         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
-         this.sink = UU, this.loadTexture = XU, this.warn = zU, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise. … [truncated]
-       }
-       update(UU, XU) {
-         return (UU.qm !== this.builtVersion || this.blockCaster.length !== XU) && (this.build(UU, XU), !0)
-       }
-       build(UU, XU) {
-         this.builtVersion = UU.qm;
-         const zU = new Uint16Array(XU),
-           cU = new Map;
-         for (let yU = 1; yU < XU; yU++) {
-           const XU = this.classify(UU, yU, cU);
-           if (null === XU || XU === gz) {
-             zU[yU] = null === XU ? 0 : gz;
- ... (25 more removed lines; see GitHub link above)
+ 
+     function dt(HH, BH) {
+       let {
+         getCastFn: LH,
+         applyEventsSynchronously: AH,
+         emitter: rH
+       } = BH;
+       return Zt(Dt({
+         id: "player",
+         context: HH,
+         initial: "paused",
+         states: {
+           playing: {
+             on: {
+               PAUSE: {
+                 target: "paused",
+ ... (47 more added lines; see GitHub link above)
```

#### 396. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7137-L7150` → after: `L9721-L9731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9721-L9731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9721-L9731) · [Before (L7137-L7150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7137-L7150)

```diff
-         if (UU.GI[XU]) return null;
-         const yU = UU.ZI[XU] ? UU.Km(XU) : null;
-         if (yU && yU.length >= 6) {
-           const UU = function(UU) {
-             const XU = new Uint32Array(16);
-             for (let zU = 0; zU + 6 <= UU.length; zU += 6) {
-               const cU = [0, 1, 2].map((XU => Math.max(0, Math.ceil(8 * UU[zU + XU] - .5)))),
-                 yU = [0, 1, 2].map((XU => Math.min(7, Math.floor(8 * UU[zU + XU + 3] - .5))));
-               for (let UU = cU[2]; UU <= yU[2]; UU++)
-                 for (let zU = cU[1]; zU <= yU[1]; zU++)
-                   for (let QU = cU[0]; QU <= yU[0]; QU++) {
-                     const cU = QU + 8 * (zU + 8 * UU);
-                     XU[cU >>> 5] |= 1 << (31 & cU)
-                   }
+       }, {
+         actions: {
+           castEvent: gt({
+             lastPlayedEvent: (HH, BH) => "CAST_EVENT" === BH.type ? BH.payload.event : HH.lastPlayedEvent
+           }),
+           recordTimeOffset: gt(((HH, BH) => {
+             let LH = HH.timeOffset;
+             return "payload" in BH && "timeOffset" in BH.payload && (LH = BH.payload.timeOffset), {
+               ...HH,
+               timeOffset: LH,
+               baselineTime: HH.events[0].timestamp + LH
```

#### 397. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7152-L7167` → after: `L9733-L9735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9733-L9735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9733-L9735) · [Before (L7152-L7167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7152-L7167)

```diff
-             return XU
-           }(yU);
-           return function(UU) {
-             return UU.every((UU => 4294967295 === UU))
-           }(UU) ? gz : UU.every((UU => 0 === UU)) ? null : {
-             kind: "shape",
-             key: `shape:${UU.join(",")}`,
-             mask: UU
-           }
-         }
-         if (UU.bR[XU] || !UU.za[XU]) return null;
-         const QU = [0, 1, 2, 3, 4, 5].map((cU => {
-           const yU = UU.ca[6 * XU + cU];
-           let QU = zU.get(yU);
-           return void 0 === QU && (QU = function(UU) {
-             if (!UU || UU.Ia) return null;
+           })),
+           play(HH) {
+             var BH;
```

#### 398. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7169-L7171` → after: `L9737-L9740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9737-L9740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9737-L9740) · [Before (L7169-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7169-L7171)

```diff
-               o5: XU,
-               Y5: zU,
-               y5: cU
+               timer: SH,
+               events: hH,
+               baselineTime: tH,
+               lastPlayedEvent: zH
```

#### 399. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7173-L7263` → after: `L9742-L9813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9742-L9813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9742-L9813) · [Before (L7173-L7263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7173-L7263)

```diff
-             if (!XU || !zU || !(zU > 0) || void 0 === cU || !(cU >= 0)) return null;
-             const yU = XU[0],
-               QU = zU * zU * 4;
-             if (!yU || yU.byteLength < QU) return null;
-             const AU = Math.floor(yU.byteLength / QU),
-               FU = XU[Math.floor(cU / AU)];
-             if (!FU) return null;
-             const oU = new Uint8Array(FU.buffer, FU.byteOffset, FU.byteLength),
-               DU = cU % AU * QU;
-             if (DU + QU > oU.length) return null;
-             const EU = new Uint8Array(zU * zU);
-             let YU = !1;
-             for (let NU = 0; NU < EU.length; NU++) EU[NU] = oU[DU + 4 * NU + 3], YU ||= EU[NU] < yo;
-             return YU ? {
-               alpha: EU,
-               width: zU
- ... (75 more removed lines; see GitHub link above)
+             SH.clear();
+             for (const LH of hH) ft(LH, tH);
+             const CH = function(HH, BH) {
+               for (let LH = HH.length - 1; LH >= 0; LH--) {
+                 const AH = HH[LH];
+                 if (AH.type === mh.Meta && AH.timestamp <= BH) return HH.slice(LH)
+               }
+               return HH
+             }(hH, tH);
+             let EH = null == zH ? void 0 : zH.timestamp;
+             (null == zH ? void 0 : zH.type) === mh.IncrementalSnapshot && zH.data.source === oh.MouseMove && (EH = zH.timestamp + (null == (BH = zH.data.positions[0]) ? void 0 : BH.timeOffset)), tH < (EH || 0) && rH.emit(ch.PlayBack);
+             const XH = new Array;
+             for (const AH of CH)
+               if (!(EH && EH < tH && (AH.timestamp <= EH || AH === zH)))
+                 if (AH.timestamp < tH) XH.push(AH);
+                 else {
+ ... (56 more added lines; see GitHub link above)
```

#### 400. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7266-L7271` → after: `L9817-L9819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9817-L9819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9817-L9819) · [Before (L7266-L7271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7266-L7271)

```diff
-     function Eo() {
-       return {
-         bricks: new Uint32Array(Dz),
-         cells: new Uint16Array(32768),
-         special: new Uint8Array(Fz)
-       }
+     function Jt(HH, BH) {
+       let LH = st.get(HH);
+       return LH || (LH = new Map, st.set(HH, LH)), LH.has(BH) || LH.set(BH, []), LH.get(BH)
```

#### 401. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7273-L7428` → after: `L9821-L9859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9821-L9859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9821-L9859) · [Before (L7273-L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7273-L7428)

```diff
-     class Yo {
-       constructor(UU, XU, zU) {
-         let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
-         this.casters = UU, this.writeVoxels = XU, this.writePool = zU, this.warn = cU, this.eyeChunk = null, this.slotChunk = new Array(Xz).fill(null), this.slotVersion = new Float64Array(Xz).fill(-1), this.slotPool = new Array(Xz).fill(null), this.starved = new Uint8Array(Xz), t … [truncated]
-         for (let yU = 0; yU < dz; yU++) this.freePool[yU] = 65535 - yU
-       }
-       get queuedCount() {
-         return this.queue.length
-       }
-       get poolInUse() {
-         return dz - this.freeCount
-       }
-       chunkAdded(UU) {
-         if (null === this.eyeChunk || !this.inRadius(UU.i, UU.j, UU.k)) return;
-         const XU = pz(UU.i, UU.j, UU.k);
-         this.slotChunk[XU] = UU, this.slotVersion[XU] = -1, this.enqueue(XU)
- ... (140 more removed lines; see GitHub link above)
+ 
+     function it(HH, BH, LH) {
+       return async AH => {
+         if (AH && "object" === typeof AH && "rr_type" in AH) {
+           if (LH && (LH.isUnchanged = !1), "ImageBitmap" === AH.rr_type && "args" in AH) {
+             const rH = await it(HH, BH, LH)(AH.args);
+             return await createImageBitmap.apply(null, rH)
+           }
+           if ("index" in AH) {
+             if (LH || null === BH) return AH;
+             const {
+               rr_type: HH,
+               index: rH
+             } = AH;
+             return Jt(BH, HH)[rH]
+           }
+ ... (23 more added lines; see GitHub link above)
```

#### 402. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7452-L7456` → after: `L9862-L9866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9862-L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9862-L9866) · [Before (L7452-L7456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7452-L7456)

```diff
-           const FU = this.freePool[--this.freeCount];
-           oU[DU++] = FU;
-           for (let UU = 0; UU < Az; UU++) {
-             const XU = cU[zU + (UU >>> 5)] >>> (31 & UU) & 1 ? yU[EU * Az + UU] : 0;
-             1 & UU ? AU[UU >> 1] |= XU << 16 : AU[UU >> 1] = XU
+           if ("data" in AH && "Blob" === AH.rr_type) {
+             const rH = await Promise.all(AH.data.map(it(HH, BH, LH)));
+             return new Blob(rH, {
+               type: AH.type
+             })
```

#### 403. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7458` → after: `L9868-L9869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9868-L9869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9868-L9869) · [Before (L7458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7458)

```diff
-           cU[zU + 2] = FU + 1, this.writePool(Lz + 32 * FU, AU)
+         } else if (Array.isArray(AH)) {
+           return await Promise.all(AH.map(it(HH, BH, LH)))
```

#### 404. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7460` → after: `L9871-L9905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9871-L9905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9871-L9905) · [Before (L7460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7460)

```diff
-         oU.length > 0 && (this.slotPool[UU] = oU)
+         return AH
+       }
+     }
+     const pt = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject"];
+     async function yt(HH) {
+       let {
+         mutation: BH,
+         target: LH,
+         type: AH,
+         imageMap: rH,
+         errorHandler: SH
+       } = HH;
+       try {
+         const HH = function(HH, BH) {
+           try {
+             return BH === lh.WebGL ? HH.getContext("webgl") || HH.getContext("experimental-webgl") : HH.getContext("webgl2")
+ ... (19 more added lines; see GitHub link above)
```

#### 405. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7462-L7470` → after: `L9907-L9931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9907-L9931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9907-L9931) · [Before (L7462-L7470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7462-L7470)

```diff
-       evictBeyond(UU, XU) {
-         const zU = this.slotDistance(UU),
-           cU = [];
-         for (let yU = 0; yU < Xz; yU++) yU !== UU && this.slotPool[yU] && this.slotDistance(yU) > zU && cU.push(yU);
-         cU.sort(((UU, XU) => this.slotDistance(XU) - this.slotDistance(UU)));
-         for (const yU of cU) {
-           if (this.freeCount >= XU) return;
-           const UU = this.slotChunk[yU];
-           UU && !UU.oR && UU.lN && (UU.Kp === this.slotVersion[yU] || Do(UU)) && this.encodeSlot(yU, this.victimScratch, !1)
+     }
+     async function Hz(HH) {
+       let {
+         event: BH,
+         mutation: LH,
+         target: AH,
+         imageMap: rH,
+         canvasEventMap: SH,
+         errorHandler: hH
+       } = HH;
+       try {
+         const HH = SH.get(BH) || LH,
+           tH = "commands" in HH ? HH.commands : [HH];
+         if ([lh.WebGL, lh.WebGL2].includes(LH.type)) {
+           for (let HH = 0; HH < tH.length; HH++) {
+             const BH = tH[HH];
+ ... (9 more added lines; see GitHub link above)
```

#### 406. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7472-L7476` → after: `L9933-L9962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9933-L9962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9933-L9962) · [Before (L7472-L7476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7472-L7476)

```diff
-       }
-       dropSpecials(UU, XU) {
-         this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
-         const zU = 3 * XU;
-         for (let cU = 0; cU < Az; cU++) UU.cells[XU * Az + cU] !== gz && (UU.bricks[zU + (cU >>> 5)] &= ~(1 << (31 & cU)))
+         await async function(HH) {
+           let {
+             event: BH,
+             mutations: LH,
+             target: AH,
+             imageMap: rH,
+             errorHandler: SH
+           } = HH;
+           const hH = AH.getContext("2d");
+           if (!hH) return void SH(LH[0], new Error("Canvas context is null"));
+           const tH = LH.map((async HH => Promise.all(HH.args.map(it(rH, hH)))));
+           (await Promise.all(tH)).forEach(((HH, AH) => {
+             const tH = LH[AH];
+             try {
+               if (tH.setter) return void(hH[tH.property] = tH.args[0]);
+               const LH = hH[tH.property];
+ ... (14 more added lines; see GitHub link above)
```

#### 407. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7482-L7489` → after: `L9967-L9984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9967-L9984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9967-L9984) · [Before (L7482-L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7482-L7489)

```diff
-         this.device = UU, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new Hz, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.qY = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = UU.createBuffer( … [truncated]
-           label: "sun-shadow-entities",
-           size: 589828,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.gridBuffer = UU.createBuffer({
-           label: "sun-shadow-entity-grids",
-           size: 16777216,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
+         SH(this, "mediaMap", new Map), SH(this, "warn"), SH(this, "service"), SH(this, "speedService"), SH(this, "emitter"), SH(this, "getCurrentTime"), SH(this, "metadataCallbackMap", new Map), this.warn = HH.warn, this.service = HH.service, this.speedService = HH.speedService,  … [truncated]
+           this.syncAllMediaElements()
+         }))
+       }
+       syncAllMediaElements() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
+           pause: !1
+         };
+         this.mediaMap.forEach(((BH, LH) => {
+           this.syncTargetWithState(LH), HH.pause && LH.pause()
+         }))
+       }
+       start() {
+         this.syncAllMediaElements()
+       }
+       pause() {
+ ... (2 more added lines; see GitHub link above)
```

#### 408. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7492-L7506` → after: `L9987-L10021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9987-L10021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L9987-L10021) · [Before (L7492-L7506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7492-L7506)

```diff
-       update(UU, XU, zU) {
-         this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
-         const {
-           frame: cU
-         } = this;
-         cU.gY(UU, XU), zU.forEachSunShadowCaster((UU => {
-           this.add(UU)
-         })), cU.finish();
-         const yU = 0 === cU.parts;
-         if (yU && this.uploadedEmpty) return;
-         this.uploadedEmpty = yU;
-         const {
-           queue: QU
-         } = this.device, {
-           words: AU
+       seekTo(HH) {
+         let {
+           time: BH,
+           target: LH,
+           mediaState: AH
+         } = HH;
+         if (AH.isPlaying) {
+           const HH = (BH - AH.lastInteractionTimeOffset) / 1e3 * AH.playbackRate,
+             rH = "duration" in LH && LH.duration;
+           if (Number.isNaN(rH)) return void this.waitForMetadata(LH);
+           let SH = AH.currentTimeAtLastInteraction + HH;
+           LH.loop && !1 !== rH && (SH %= rH), LH.currentTime = SH
+         } else LH.pause(), LH.currentTime = AH.currentTimeAtLastInteraction
+       }
+       waitForMetadata(HH) {
+         if (this.metadataCallbackMap.has(HH)) return;
+ ... (19 more added lines; see GitHub link above)
```

#### 409. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7508` → after: `L10023-L10040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10023-L10040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10023-L10040) · [Before (L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7508)

```diff
-         QU.writeBuffer(this.frameBuffer, 0, AU, 0, 16385), cU.refs > 0 && QU.writeBuffer(this.frameBuffer, 65540, AU, qz, cU.refs), yU || QU.writeBuffer(this.frameBuffer, 327684, AU, Oz, cU.parts * wz)
+         const rH = this.mediaMap.get(BH),
+           {
+             type: SH,
+             playbackRate: hH,
+             currentTime: tH,
+             muted: zH,
+             volume: CH,
+             loop: EH
+           } = AH;
+         return {
+           isPlaying: SH === Kh.Play || SH !== Kh.Pause && ((null == rH ? void 0 : rH.isPlaying) || null !== BH.getAttribute("autoplay")),
+           currentTimeAtLastInteraction: tH ?? (null == rH ? void 0 : rH.currentTimeAtLastInteraction) ?? 0,
+           lastInteractionTimeOffset: LH,
+           playbackRate: hH ?? (null == rH ? void 0 : rH.playbackRate) ?? 1,
+           volume: CH ?? (null == rH ? void 0 : rH.volume) ?? 1,
+           muted: zH ?? (null == rH ? void 0 : rH.muted) ?? null === BH.getAttribute("muted"),
+ ... (2 more added lines; see GitHub link above)
```

#### 410. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7510-L7511` → after: `L10042-L10043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10042-L10043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10042-L10043) · [Before (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7510-L7511)

```diff
-       add(UU) {
-         const XU = this.gridFor(UU);
+       syncTargetWithState(HH) {
+         const BH = this.mediaMap.get(HH);
```

#### 411. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7514-L7524` → after: `L10046-L10059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10046-L10059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10046-L10059) · [Before (L7514-L7524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7514-L7524)

```diff
-           frame: zU
-         } = this, {
-           qY: cU,
-           worldAt: yU,
-           instances: QU,
-           instanceCount: AU,
-           thin: FU
-         } = UU;
-         if (QU)
-           for (let oU = 0; oU < AU; oU++) FU ? (vz(QU, 16 * oU, cU, yU, this.qY), zU.add(XU, this.qY)) : zU.add(XU, QU, 16 * oU);
-         else zU.add(XU, cU, yU)
+           muted: LH,
+           loop: AH,
+           volume: rH,
+           isPlaying: SH
+         } = BH, hH = this.service.state.matches("paused"), tH = BH.playbackRate * this.speedService.state.context.timer.speed;
+         try {
+           this.seekTo({
+             time: this.getCurrentTime(),
+             target: HH,
+             mediaState: BH
+           }), HH.volume !== rH && (HH.volume = rH), HH.muted = LH, HH.loop = AH, HH.playbackRate !== tH && (HH.playbackRate = tH), SH && !hH ? HH.play() : HH.pause()
+         } catch (zH) {
+           this.warn(`Failed to replay media interactions: ${zH.message||zH}`)
+         }
```

#### 412. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7526` → after: `L10061-L10089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10061-L10089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10061-L10089) · [Before (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7526)

```diff
-       gridFor(UU) {
+       addMediaElements(HH, BH, LH) {
+         if (!["AUDIO", "VIDEO"].includes(HH.nodeName)) return;
+         const AH = HH,
+           rH = LH.getMeta(AH);
+         if (!rH || !("attributes" in rH)) return;
+         const SH = this.service.state.matches("paused"),
+           hH = rH.attributes;
+         let tH = !1;
+         tH = hH.rr_mediaState ? "played" === hH.rr_mediaState : null !== AH.getAttribute("autoplay"), tH && SH && AH.pause();
+         let zH = 1;
+         "number" === typeof hH.rr_mediaPlaybackRate && (zH = hH.rr_mediaPlaybackRate);
+         let CH = !1;
+         CH = "boolean" === typeof hH.rr_mediaMuted ? hH.rr_mediaMuted : null !== AH.getAttribute("muted");
+         let EH = !1;
+         EH = "boolean" === typeof hH.rr_mediaLoop ? hH.rr_mediaLoop : null !== AH.getAttribute("loop");
+         let XH = 1;
+ ... (13 more added lines; see GitHub link above)
```

#### 413. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7528-L7600` → after: `L10091-L10093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10091-L10093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10091-L10093) · [Before (L7528-L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7528-L7600)

```diff
-           geometry: XU,
-           indexed: zU,
-           first: cU,
-           count: yU,
-           skip: QU
-         } = UU, AU = this.grids.get(XU);
-         AU || (AU = new Map, this.grids.set(XU, AU));
-         const FU = `${zU?cU:-1-cU}:${yU}:${null!==QU&&void 0!==QU?QU:""}`;
-         let oU = AU.get(FU);
-         if (void 0 !== oU || this.gridsFull) return oU;
-         const DU = performance.now();
-         if (this.bakeDeadline < 0) this.bakeDeadline = DU + 2;
-         else if (DU > this.bakeDeadline) return;
-         return oU = this.bake(XU, zU, cU, yU, QU), void 0 !== oU && AU.set(FU, oU), oU
-       }
-       bake(UU, XU, zU, cU, yU) {
- ... (57 more removed lines; see GitHub link above)
+           target: BH,
+           timeOffset: LH,
+           mutation: AH
```

#### 414. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7602-L7607` → after: `L10095-L10105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10095-L10105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10095-L10105) · [Before (L7602-L7607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7602-L7607)

```diff
-         if (this.gridTop + FU.length > rz) return void(this.gridsFull = !0);
-         const DU = this.gridTop;
-         return this.gridTop += FU.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * DU, FU), {
-           ...oU,
-           at: DU
-         }
+         this.mediaMap.set(BH, this.getMediaStateFromMutation({
+           target: BH,
+           timeOffset: LH,
+           mutation: AH
+         })), this.syncTargetWithState(BH)
+       }
+       isSupportedMediaElement(HH) {
+         return ["AUDIO", "VIDEO"].includes(HH.nodeName)
+       }
+       reset() {
+         this.mediaMap.clear()
```

#### 415. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7613` → after: `L10110-L10117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10110-L10117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10110-L10117) · [Before (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7613)

```diff
-       return UU[0] * XU[0] + UU[1] * XU[1] + UU[2] * XU[2] < po
+       if ("DIALOG" !== HH.nodeName || HH instanceof HS) return;
+       const LH = HH,
+         AH = LH.open,
+         rH = AH && LH.matches("dialog:modal"),
+         SH = LH.getAttribute("rr_open_mode"),
+         hH = "string" === typeof(null == BH ? void 0 : BH.attributes.open) || "string" === typeof LH.getAttribute("open"),
+         tH = "modal" === SH;
+       AH && !(rH && "non-modal" === SH || !rH && tH) || (LH.isConnected ? (AH && LH.close(), hH && (tH ? LH.showModal() : LH.show())) : console.warn("dialog is not attached to the dom", LH))
```

#### 416. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7615-L7626` → after: `L10119-L10123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10119-L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10119-L10123) · [Before (L7615-L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7615-L7626)

```diff
-     async function to(UU) {
-       const {
-         pixels: XU,
-         width: zU,
-         height: cU
-       } = await UX(UU), yU = new Uint8Array(zU * cU);
-       for (let QU = 0; QU < yU.length; QU++) yU[QU] = XU[4 * QU + 3];
-       return {
-         width: zU,
-         height: cU,
-         alpha: yU
-       }
+ 
+     function Az(HH, BH) {
+       if ("DIALOG" !== HH.nodeName || HH instanceof HS) return;
+       const LH = HH;
+       LH.isConnected ? null === BH.attributes.open && (LH.removeAttribute("open"), LH.removeAttribute("rr_open_mode")) : console.warn("dialog is not attached to the dom", LH)
```

#### 417. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7628-L7649` → after: `L10125-L10130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10125-L10130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10125-L10130) · [Before (L7628-L7649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7628-L7649)

```diff
-     class go {
-       constructor(UU, XU) {
-         this.device = UU, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(nz.o), this.entities = void 0, this.entityStandIn =  … [truncated]
-           label: "sun-shadow",
-           size: 128,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         }), this.voxelBuffer = UU.createBuffer({
-           label: "sun-shadow-voxels",
-           size: 4 * Nz,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.special = UU.createBuffer({
-           label: "sun-shadow-special",
-           size: 9568256,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         });
-         const [zU, cU, yU] = nz.r;
- ... (6 more removed lines; see GitHub link above)
+     const rz = function(HH) {
+         return {
+           all: HH = HH || new Map,
+           on: function(BH, LH) {
+             var AH = HH.get(BH);
+             AH ? AH.push(LH) : HH.set(BH, [LH])
```

#### 418. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7651-L7899` → after: `L10132-L10142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10132-L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10132-L10142) · [Before (L7651-L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7651-L7899)

```diff
-           dimension: "3d",
-           format: "rgba8unorm",
-           usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
-         }), this.volumeView = this.volume.createView({
-           label: "sun-shadow-volume"
-         }), this.volumeSampler = UU.createSampler({
-           label: "sun-shadow-volume",
-           magFilter: "linear",
-           minFilter: "linear",
-           addressModeU: "repeat",
-           addressModeV: "repeat",
-           addressModeW: "repeat"
-         }), this.work = UU.createBuffer({
-           label: "sun-shadow-volume-work",
-           size: nz.o,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
- ... (233 more removed lines; see GitHub link above)
+           off: function(BH, LH) {
+             var AH = HH.get(BH);
+             AH && (LH ? AH.splice(AH.indexOf(LH) >>> 0, 1) : HH.set(BH, []))
+           },
+           emit: function(BH, LH) {
+             var AH = HH.get(BH);
+             AH && AH.slice().map((function(HH) {
+               HH(LH)
+             })), (AH = HH.get("*")) && AH.slice().map((function(HH) {
+               HH(BH, LH)
+             }))
```

#### 419. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7901-L7932` → after: `L10144-L10152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10144-L10152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10144-L10152) · [Before (L7901-L7932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7901-L7932)

```diff
-         }), (UU => {
-           this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(UU)}`)
-         })), null
-       }
-       start(UU) {
-         if (this.window) return this.window;
-         const XU = (UU, XU) => {
-           this.written = !0, this.device.queue.writeBuffer(this.special, 4 * UU, XU)
-         };
-         this.casters = new Fo(((UU, zU) => {
-           this.castersWritten = !0, XU(UU, zU)
-         }), to);
-         const zU = new Yo(this.casters, ((UU, XU) => {
-           this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * UU, XU)
-         }), XU);
-         zU.encoded = UU => {
- ... (16 more removed lines; see GitHub link above)
+         }
+       },
+       Sz = "[replayer]",
+       hz = {
+         duration: 500,
+         lineCap: "round",
+         lineWidth: 3,
+         strokeStyle: "red"
+       };
```

#### 420. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7934-L8007` → after: `L10154-L10155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10154-L10155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10154-L10155) · [Before (L7934-L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7934-L8007)

```diff
-     function Wo(UU, XU, zU, cU) {
-       UU.drawOffset(XU, cU + Bo), XU[cU + Zo] = UU.drawTime(), zU[cU + Ro] = UU.ring.drawStart(), zU[cU + Po] = UU.ring.drawCount()
-     }
-     const Lo = `\n${Hc}\n\nconst MAX_STOPS = ${Go.c}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${Go.c/4}>,\n\tcolor1: array<vec4f, ${Go.c}>,\n\t … [truncated]
-     var eo = zU(44281);
-     class Co {
-       constructor(UU, XU, zU, cU) {
-         this.device = UU, this.system = XU, this.frameIndex = zU, this.bindings = cU, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, eo.e)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.bou … [truncated]
-           this.device.queue.writeBuffer(this.ring, UU * Go.f * 4, this.system.ring.records, UU * Go.f, (XU - UU) * Go.f)
-         };
-         const {
-           name: yU
-         } = XU;
-         this.ring = UU.createBuffer({
-           label: `particles-${yU}`,
-           size: XU.ring.records.byteLength,
- ... (58 more removed lines; see GitHub link above)
+     function tz(HH) {
+       return HH.type == mh.IncrementalSnapshot && (HH.data.source == oh.TouchMove || HH.data.source == oh.MouseInteraction && HH.data.type == Ih.TouchStart)
```

#### 421. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8011-L8057` → after: `L10159-L10174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10159-L10174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10159-L10174) · [Before (L8011-L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8011-L8057)

```diff
-         this.device = UU, this.resources = XU, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(409 … [truncated]
-           order: 251,
-           isTransparent: !0,
-           _worldCenter: [0, 0, 0],
-           bind: (UU, XU) => (this.bindTarget(XU), {
-             renderable: this.renderable,
-             pipeline: CX(this.device, XU),
-             draw: UU => XU === this.preparedTarget ? this.draw(UU) : 0
-           })
-         }
-       }
-       rebind(UU) {
-         this.device = UU, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
-         for (const [XU, zU] of this.systems) {
-           const cU = new Co(UU, XU, zU.frameIndex, this.bindings),
-             yU = XU.ring.drawCount();
- ... (31 more removed lines; see GitHub link above)
+         var LH = this;
+         if (SH(this, "wrapper"), SH(this, "iframe"), SH(this, "UNSAFE_replayCanvas", !1), SH(this, "service"), SH(this, "speedService"), SH(this, "config"), SH(this, "usingVirtualDom", !1), SH(this, "virtualDom", new US), SH(this, "mouse"), SH(this, "mouseTail", null), SH(this, " … [truncated]
+             this.iframe.style.display = "inherit";
+             for (const BH of [this.mouseTail, this.iframe]) BH && (BH.setAttribute("width", String(HH.width)), BH.setAttribute("height", String(HH.height)))
+           })), SH(this, "applyEventsSynchronously", (HH => {
+             for (const BH of HH) {
+               switch (BH.type) {
+                 case mh.DomContentLoaded:
+                 case mh.Load:
+                   continue;
+                 case mh.FullSnapshot:
+                 case mh.Meta:
+                 case mh.Plugin:
+                 case mh.IncrementalSnapshot:
+               }
+               this.getCastFn(BH, !0)()
```

#### 422. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8059-L8063` → after: `L10176-L10220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10176-L10220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10176-L10220) · [Before (L8059-L8063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8059-L8063)

```diff
-           }, {
-             binding: 4,
-             visibility: GPUShaderStage.FRAGMENT,
-             sampler: {
-               type: "filtering"
+           })), SH(this, "getCastFn", (function(HH) {
+             let BH, AH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+             switch (HH.type) {
+               case mh.DomContentLoaded:
+               case mh.Load:
+                 break;
+               case mh.Custom:
+                 BH = () => {
+                   LH.emitter.emit(ch.CustomEvent, HH)
+                 };
+                 break;
+               case mh.Meta:
+                 BH = () => LH.emitter.emit(ch.Resize, {
+                   width: HH.data.width,
+                   height: HH.data.height
+                 });
+ ... (29 more added lines; see GitHub link above)
```

#### 423. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8065-L8069` → after: `L10222-L10241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10222-L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10222-L10241) · [Before (L8065-L8069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8065-L8069)

```diff
-           }, {
-             binding: 5,
-             visibility: GPUShaderStage.FRAGMENT,
-             texture: {
-               sampleType: "float"
+             return () => {
+               BH && BH();
+               for (const BH of LH.config.plugins || []) BH.handler && BH.handler(HH, AH, {
+                 replayer: LH
+               });
+               LH.service.send({
+                 type: "CAST_EVENT",
+                 payload: {
+                   event: HH
+                 }
+               });
+               const rH = LH.service.state.context.events.length - 1;
+               if (!LH.config.liveMode && HH === LH.service.state.context.events[rH]) {
+                 const BH = () => {
+                   rH < LH.service.state.context.events.length - 1 || (LH.backToNormal(), LH.service.send("END"), LH.emitter.emit(ch.Finish))
+                 };
+ ... (4 more added lines; see GitHub link above)
```

#### 424. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8071` → after: `L10243-L10265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10243-L10265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10243-L10265) · [Before (L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8071)

```diff
-           }]
+           })), !(null == BH ? void 0 : BH.liveMode) && HH.length < 2) throw new Error("Replayer need at least 2 events.");
+         const AH = {
+           speed: 1,
+           maxSpeed: 360,
+           root: document.body,
+           loadTimeout: 0,
+           skipInactive: !1,
+           inactivePeriodThreshold: 1e4,
+           showWarning: !0,
+           showDebug: !1,
+           blockClass: "rr-block",
+           liveMode: !1,
+           insertStyleRules: [],
+           triggerFocus: !0,
+           UNSAFE_replayCanvas: !1,
+           pauseAnimation: !0,
+ ... (7 more added lines; see GitHub link above)
```

#### 425. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8073-L8080` → after: `L10267-L10296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10267-L10296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10267-L10296) · [Before (L8073-L8080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8073-L8080)

```diff
-         this.frameLayout = UU.createBindGroupLayout({
-           label: "particles-frame",
-           entries: [{
-             binding: 0,
-             visibility: GPUShaderStage.VERTEX,
-             buffer: {
-               type: "uniform",
-               hasDynamicOffset: !0
+         this.emitter.on(ch.Flush, (() => {
+           if (this.usingVirtualDom) {
+             const LH = {
+               mirror: this.mirror,
+               applyCanvas: (HH, BH, LH) => {
+                 Hz({
+                   event: HH,
+                   mutation: BH,
+                   target: LH,
+                   imageMap: this.imageMap,
+                   canvasEventMap: this.canvasEventMap,
+                   errorHandler: this.warnCanvasMutationFailed.bind(this)
+                 })
+               },
+               applyInput: this.applyInput.bind(this),
+               applyScroll: this.applyScroll.bind(this),
+ ... (14 more added lines; see GitHub link above)
```

#### 426. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8082-L8087` → after: `L10298-L10321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10298-L10321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10298-L10321) · [Before (L8082-L8087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8082-L8087)

```diff
-           }]
-         }), this.pipelineLayout = UU.createPipelineLayout({
-           bindGroupLayouts: [PX(UU), XU, this.frameLayout]
-         }), this.module = UU.createShaderModule({
-           label: "particles",
-           code: Lo
+             if (this.virtualDom.destroyTree(), this.usingVirtualDom = !1, Object.keys(this.legacy_missingNodeRetryMap).length)
+               for (const HH in this.legacy_missingNodeRetryMap) try {
+                 const BH = this.legacy_missingNodeRetryMap[HH],
+                   AH = vS(BH.node, this.mirror, this.virtualDom.mirror);
+                 MS(AH, BH.node, LH, this.virtualDom.mirror), BH.node = AH
+               } catch (BH) {
+                 this.warn(BH)
+               }
+             this.constructedStyleMutations.forEach((HH => {
+               this.applyStyleSheetMutation(HH)
+             })), this.constructedStyleMutations = [], this.adoptedStyleSheets.forEach((HH => {
+               this.applyAdoptedStyleSheet(HH)
+             })), this.adoptedStyleSheets = []
+           }
+           if (this.mousePos && (this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, !0, this.mousePos.debugData), this.mousePos = null), !0 === this.touchActive ? this.mouse.classList.add("touch-active") : !1 === this.touchActive && this.mouse.classList.remove(" … [truncated]
+             const [HH, BH] = this.lastMouseDownEvent;
+ ... (8 more added lines; see GitHub link above)
```

#### 427. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8089-L8093` → after: `L10323-L10391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10323-L10391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10323-L10391) · [Before (L8089-L8093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8089-L8093)

```diff
-         const zU = UU.createTexture({
-           label: "particles-no-ramp",
-           size: [1, 1],
-           format: "rgba8unorm",
-           usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
+         this.service = dt({
+           events: HH.map((HH => BH && BH.unpackFn ? BH.unpackFn(HH) : HH)).sort(((HH, BH) => HH.timestamp - BH.timestamp)),
+           timer: rH,
+           timeOffset: 0,
+           baselineTime: 0,
+           lastPlayedEvent: null
+         }, {
+           getCastFn: this.getCastFn,
+           applyEventsSynchronously: this.applyEventsSynchronously,
+           emitter: this.emitter
+         }), this.service.start(), this.service.subscribe((HH => {
+           this.emitter.emit(ch.StateChange, {
+             player: HH
+           })
+         })), this.speedService = Zt(Dt({
+           id: "speed",
+ ... (53 more added lines; see GitHub link above)
```

#### 428. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8095-L8157` → after: `L10393-L10405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10393-L10405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10393-L10405) · [Before (L8095-L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8095-L8157)

```diff
-         UU.queue.writeTexture({
-           texture: zU
-         }, new Uint8Array([255, 255, 255, 255]), {
-           bytesPerRow: 4
-         }, [1, 1]), this.bindings = {
-           layout: XU,
-           rampSampler: UU.createSampler({
-             label: "particles-ramp",
-             magFilter: "nearest",
-             minFilter: "nearest",
-             addressModeU: "repeat",
-             addressModeV: "repeat"
-           }),
-           whiteRamp: zU.createView()
-         }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
-       }
- ... (47 more removed lines; see GitHub link above)
+         const hH = this.service.state.context.events.find((HH => HH.type === mh.Meta)),
+           tH = this.service.state.context.events.find((HH => HH.type === mh.FullSnapshot));
+         if (hH) {
+           const {
+             width: HH,
+             height: BH
+           } = hH.data;
+           setTimeout((() => {
+             this.emitter.emit(ch.Resize, {
+               width: HH,
+               height: BH
+             })
+           }), 0)
```

#### 429. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8159` → after: `L10407-L10410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10407-L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10407-L10410) · [Before (L8159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8159)

```diff
-         zU > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, zU)
+         tH && setTimeout((() => {
+           var HH;
+           this.firstFullSnapshot || (this.firstFullSnapshot = tH, this.rebuildFullSnapshot(tH), null == (HH = this.iframe.contentWindow) || HH.scrollTo(tH.data.initialOffset))
+         }), 1), this.service.state.context.events.find(tz) && this.mouse.classList.add("touch-device")
```

#### 430. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8161-L8168` → after: `L10412-L10413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10412-L10413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10412-L10413) · [Before (L8161-L8168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8161-L8168)

```diff
-       draw(UU) {
-         let XU = 0,
-           zU = null;
-         for (const cU of this.draws) {
-           UU.setBindGroup(1, cU.bindGroup), UU.setBindGroup(2, this.frameBindGroup, [256 * cU.frameIndex]);
-           for (const yU of cU.pipelines) yU !== zU && (UU.setPipeline(yU), zU = yU), UU.draw(4, cU.count), XU++
-         }
-         return XU
+       get timer() {
+         return this.service.state.context.timer
```

#### 431. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8170-L8174` → after: `L10415-L10429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10415-L10429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10415-L10429) · [Before (L8170-L8174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8170-L8174)

```diff
-       bindTarget(UU) {
-         this.target = UU;
-         const XU = `${UU._colorFormat}|${UU._depthStencilFormat}|${UU._depthCompare}|${UU._sampleCount}`;
-         let zU = this.pipelines.get(XU);
-         zU || (zU = new Map, this.pipelines.set(XU, zU)), this.targetPipelines = zU
+       on(HH, BH) {
+         return this.emitter.on(HH, BH), this
+       }
+       off(HH, BH) {
+         return this.emitter.off(HH, BH), this
+       }
+       setConfig(HH) {
+         Object.keys(HH).forEach((BH => {
+           HH[BH], this.config[BH] = HH[BH]
+         })), this.config.skipInactive || this.backToNormal(), "undefined" !== typeof HH.speed && this.speedService.send({
+           type: "SET_SPEED",
+           payload: {
+             speed: HH.speed
+           }
+         }), "undefined" !== typeof HH.mouseTail && (!1 === HH.mouseTail ? this.mouseTail && (this.mouseTail.style.display = "none") : (this.mouseTail || (this.mouseTail = document.createElement("canvas"), this.mouseTail.width = Number.parseFloat(this.iframe.width), this.mouseTail … [truncated]
```

#### 432. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8176-L8226` → after: `L10431-L10437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10431-L10437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10431-L10437) · [Before (L8176-L8226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8176-L8226)

```diff
-       pipelineFor(UU) {
-         var XU;
-         const zU = this.targetPipelines,
-           cU = zU.get(UU);
-         if (void 0 !== cU) return cU;
-         zU.set(UU, null);
-         const yU = this.target,
-           QU = UU === lU.b,
-           AU = null !== (XU = yU._depthCompare) && void 0 !== XU ? XU : WX,
-           {
-             device: FU
-           } = this;
-         return FU.createRenderPipelineAsync({
-           label: `particles-${UU}`,
-           layout: this.pipelineLayout,
-           vertex: {
- ... (35 more removed lines; see GitHub link above)
+       getMetaData() {
+         const HH = this.service.state.context.events[0],
+           BH = this.service.state.context.events[this.service.state.context.events.length - 1];
+         return {
+           startTime: HH.timestamp,
+           endTime: BH.timestamp,
+           totalTime: BH.timestamp - HH.timestamp
```

#### 433. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8230-L8235` → after: `L10440-L10441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10440-L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10440-L10441) · [Before (L8230-L8235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8230-L8235)

```diff
-       createFrameBuffer() {
-         return this.device.createBuffer({
-           label: "particles-frames",
-           size: this.frameData.byteLength,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         })
+       getCurrentTime() {
+         return this.config.liveMode && this.timer.updateLiveTime(), this.timer.timeOffset + this.getTimeOffset()
```

#### 434. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8237-L8248` → after: `L10443-L10448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10443-L10448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10443-L10448) · [Before (L8237-L8248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8237-L8248)

```diff
-       createFrameBindGroup() {
-         return this.device.createBindGroup({
-           label: "particles-frames",
-           layout: this.frameLayout,
-           entries: [{
-             binding: 0,
-             resource: {
-               buffer: this.frameBuffer,
-               size: 32
-             }
-           }]
-         })
+       getTimeOffset() {
+         const {
+           baselineTime: HH,
+           events: BH
+         } = this.service.state.context;
+         return HH - BH[0].timestamp
```

#### 435. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8250-L8255` → after: `L10450-L10461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10450-L10461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10450-L10461) · [Before (L8250-L8255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8250-L8255)

```diff
-     }
-     class qo {
-       constructor(UU, XU, zU, cU, yU) {
-         this.lite = UU, this.canvas = XU, this.info = zU, this.resources = yU, this.XyU = !1, this.needPOTTextures = !1, this.I6 = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
-           reset: () => {
-             this.lastFrameTime = null
+       getMirror() {
+         return this.mirror
+       }
+       play() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+         var BH, LH;
+         this.service.state.matches("paused") || this.service.send({
+           type: "PAUSE"
+         }), this.service.send({
+           type: "PLAY",
+           payload: {
+             timeOffset: HH
```

#### 436. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8257-L8260` → after: `L10463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10463) · [Before (L8257-L8260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8257-L8260)

```diff
-         }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = XU.width, this.renderHeight = XU.height, this.caps = {
-           maxTextureSize: cU.maxTextureDimension2D,
-           texture2DArrayMaxLayerCount: cU.maxTextureArrayLayers
-         }
+         }), null == (LH = null == (BH = this.iframe.contentDocument) ? void 0 : BH.getElementsByTagName("html")[0]) || LH.classList.remove("rrweb-paused"), this.emitter.emit(ch.Start)
```

#### 437. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8262-L8263` → after: `L10465-L10471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10465-L10471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10465-L10471) · [Before (L8262-L8263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8262-L8263)

```diff
-       getCaps() {
-         return this.caps
+       pause(HH) {
+         var BH, LH;
+         void 0 === HH && this.service.state.matches("playing") && this.service.send({
+           type: "PAUSE"
+         }), "number" === typeof HH && (this.play(HH), this.service.send({
+           type: "PAUSE"
+         })), null == (LH = null == (BH = this.iframe.contentDocument) ? void 0 : BH.getElementsByTagName("html")[0]) || LH.classList.add("rrweb-paused"), this.emitter.emit(ch.Pause)
```

#### 438. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8265-L8266` → after: `L10473-L10475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10473-L10475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10473-L10475) · [Before (L8265-L8266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8265-L8266)

```diff
-       detach() {
-         this.lite = null
+       resume() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+         this.warn("The 'resume' was deprecated in 1.0. Please use 'play' method which has the same interface."), this.play(HH), this.emitter.emit(ch.Resume)
```

#### 439. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8268-L8269` → after: `L10477-L10478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10477-L10478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10477-L10478) · [Before (L8268-L8269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8268-L8269)

```diff
-       rebind(UU) {
-         this.lite = UU, (0, vU.l)(UU, this.renderWidth, this.renderHeight)
+       destroy() {
+         this.pause(), this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset(), this.config.root.removeChild(this.wrapper), this.emitter.emit(ch.Destroy)
```

#### 440. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8271-L8272` → after: `L10480-L10486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10480-L10486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10480-L10486) · [Before (L8271-L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8271-L8272)

```diff
-       getRenderWidth() {
-         return this.renderWidth
+       startLive(HH) {
+         this.service.send({
+           type: "TO_LIVE",
+           payload: {
+             baselineTime: HH
+           }
+         })
```

#### 441. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8274-L8275` → after: `L10488-L10495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10488-L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10488-L10495) · [Before (L8274-L8275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8274-L8275)

```diff
-       getRenderHeight() {
-         return this.renderHeight
+       addEvent(HH) {
+         const BH = this.config.unpackFn ? this.config.unpackFn(HH) : HH;
+         tz(BH) && this.mouse.classList.add("touch-device"), Promise.resolve().then((() => this.service.send({
+           type: "ADD_EVENT",
+           payload: {
+             event: BH
+           }
+         })))
```

#### 442. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8277-L8278` → after: `L10497-L10498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10497-L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10497-L10498) · [Before (L8277-L8278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8277-L8278)

```diff
-       getHardwareScalingLevel() {
-         return 1
+       enableInteract() {
+         this.iframe.setAttribute("scrolling", "auto"), this.iframe.style.pointerEvents = "auto"
```

#### 443. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8280-L8301` → after: `L10500-L10501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10500-L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10500-L10501) · [Before (L8280-L8301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8280-L8301)

```diff
-       setSize(UU, XU) {
-         if (this.renderWidth === UU && this.renderHeight === XU) return !1;
-         const zU = this.renderWidth,
-           cU = this.renderHeight;
-         this.renderWidth = UU, this.renderHeight = XU;
-         const yU = this.lite;
-         if (null === yU) return !0;
-         try {
-           (0, vU.l)(yU, UU, XU)
-         } catch (QU) {
-           if (QU instanceof DOMException && "InvalidStateError" === QU.name) {
-             this.renderWidth = zU, this.renderHeight = cU;
-             try {
-               (0, vU.l)(yU, zU, cU)
-             } catch {
-               this.canvas.width = zU, this.canvas.height = cU
- ... (6 more removed lines; see GitHub link above)
+       disableInteract() {
+         this.iframe.setAttribute("scrolling", "no"), this.iframe.style.pointerEvents = "none"
```

#### 444. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8303-L8305` → after: `L10503-L10504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10503-L10504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10503-L10504) · [Before (L8303-L8305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8303-L8305)

```diff
-       resize() {}
-       getRenderingCanvas() {
-         return this.canvas
+       resetCache() {
+         this.cache = iL()
```

#### 445. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8307-L8308` → after: `L10506-L10554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10506-L10554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10506-L10554) · [Before (L8307-L8308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8307-L8308)

```diff
-       getInfo() {
-         return this.info
+       setupDom() {
+         this.wrapper = document.createElement("div"), this.wrapper.classList.add("replayer-wrapper"), this.config.root.appendChild(this.wrapper), this.mouse = document.createElement("div"), this.mouse.classList.add("replayer-mouse"), this.wrapper.appendChild(this.mouse), !1 !== t … [truncated]
+           var BH;
+           if (!HH.root.isConnected) throw new Error(pL);
+           const LH = HH.root.ownerDocument.createElement("iframe");
+           for (const [rH, SH] of Object.entries(HH.iframeAttributes || {})) "sandbox" !== rH && LH.setAttribute(rH, SH);
+           LH.setAttribute("sandbox", "allow-same-origin"), HH.root.appendChild(LH);
+           const AH = LH.contentDocument;
+           if (!AH || !LH.contentWindow) throw null == (BH = LH.parentNode) || BH.removeChild(LH), new Error(pL);
+           return yL.add(AH), LH
+         }({
+           root: this.wrapper
+         }), this.UNSAFE_replayCanvas = !1), this.iframe.style.display = "none", this.disableInteract(), this.iframe.contentWindow && this.iframe.contentDocument && (ot(this.iframe.contentWindow, this.iframe.contentDocument), Gh(this.iframe.contentWindow))
+       }
+       rebuildFullSnapshot(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+ ... (33 more added lines; see GitHub link above)
```

#### 446. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8310-L8312` → after: `L10556-L10574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10556-L10574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10556-L10574) · [Before (L8310-L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8310-L8312)

```diff
-       zB() {
-         const UU = performance.now();
-         this.deltaTime = null === this.lastFrameTime ? 0 : UU - this.lastFrameTime, this.lastFrameTime = UU
+       insertStyleRules(HH, BH) {
+         var LH;
+         const AH = (rH = this.config.blockClass, [`.${rH} { background: currentColor }`, "noscript { display: none !important; }"]).concat(this.config.insertStyleRules);
+         var rH;
+         if (this.config.pauseAnimation && AH.push("html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }"), AH.length)
+           if (this.usingVirtualDom) {
+             const LH = this.virtualDom.createElement("style");
+             this.virtualDom.mirror.add(LH, gS(LH, this.virtualDom.unserializedId)), HH.insertBefore(LH, BH), LH.rules.push({
+               source: oh.StyleSheetRule,
+               adds: AH.map(((HH, BH) => ({
+                 rule: HH,
+                 index: BH
+               })))
+             })
+           } else {
+             const rH = document.createElement("style");
+ ... (3 more added lines; see GitHub link above)
```

#### 447. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8314-L8315` → after: `L10576-L10609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10576-L10609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10576-L10609) · [Before (L8314-L8315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8314-L8315)

```diff
-       getDeltaTime() {
-         return this.deltaTime
+       attachDocumentToIframe(HH, BH) {
+         const LH = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror,
+           AH = [],
+           rH = new Set,
+           SH = (HH, SH) => {
+             "DIALOG" === HH.nodeName && rH.add(HH), this.collectIframeAndAttachDocument(AH, HH);
+             const hH = LH.getMeta(HH);
+             if ((null == hH ? void 0 : hH.type) === eh.Element && "HTML" === (null == hH ? void 0 : hH.tagName.toUpperCase())) {
+               const {
+                 documentElement: HH,
+                 head: LH
+               } = BH.contentDocument;
+               this.insertStyleRules(HH, LH)
+             }
+             if (!this.usingVirtualDom)
+               for (const BH of this.config.plugins || []) BH.onBuild && BH.onBuild(HH, {
+ ... (18 more added lines; see GitHub link above)
```

#### 448. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8317-L8319` → after: `L10611-L10618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10611-L10618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10611-L10618) · [Before (L8317-L8319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8317-L8319)

```diff
-       createCanvas(UU, XU) {
-         const zU = document.createElement("canvas");
-         return zU.width = UU, zU.height = XU, zU
+       collectIframeAndAttachDocument(HH, BH) {
+         if (Qh(BH, this.mirror)) {
+           const LH = this.newDocumentQueue.find((HH => HH.parentId === this.mirror.getId(BH)));
+           LH && HH.push({
+             mutationInQueue: LH,
+             builtNode: BH
+           })
+         }
```

#### 449. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8321` → after: `L10620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10620) · [Before (L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8321)

```diff
-       w6(UU, XU) {
+       waitForStylesheetLoad() {
```

#### 450. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8323` → after: `L10622-L10642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10622-L10642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10622-L10642) · [Before (L8323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8323)

```diff
-         return null !== (zU = this.resources.w6.get(UU)) && void 0 !== zU ? zU : new NX(this.resources, UU, XU)
+         const BH = null == (HH = this.iframe.contentDocument) ? void 0 : HH.head;
+         if (BH) {
+           const HH = new Set;
+           let LH, AH = this.service.state;
+           const rH = () => {
+             AH = this.service.state
+           };
+           this.emitter.on(ch.Start, rH), this.emitter.on(ch.Pause, rH);
+           const SH = () => {
+             this.emitter.off(ch.Start, rH), this.emitter.off(ch.Pause, rH)
+           };
+           BH.querySelectorAll('link[rel="stylesheet"]').forEach((BH => {
+             BH.sheet || (HH.add(BH), BH.addEventListener("load", (() => {
+               HH.delete(BH), 0 === HH.size && -1 !== LH && (AH.matches("playing") && this.play(this.getCurrentTime()), this.emitter.emit(ch.LoadStylesheetEnd), LH && clearTimeout(LH), SH())
+             })))
+           })), HH.size > 0 && (this.service.send({
+ ... (5 more added lines; see GitHub link above)
```

#### 451. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8325-L8326` → after: `L10644-L10652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10644-L10652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L10644-L10652) · [Before (L8325-L8326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L8325-L8326)

```diff
-       atlasArrays(UU) {
-         return this.resources.atlasArrays(UU)
+       async preloadAllImages() {
+         const HH = [];
+         for (const BH of this.service.state.context.events)
+           if (BH.type === mh.IncrementalSnapshot && BH.data.source === oh.CanvasMutation) {
+             HH.push(this.deserializeAndPreloadCanvasEvents(BH.data, BH));
+             ("commands" in BH.data ? BH.data.commands : [BH.data]).forEach((HH => {
+               this.preloadImages(HH, BH)
+             }))
+           } return Promise.all(HH)
```
