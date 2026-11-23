# Changed — Bundle Modifications Report (Part 036 / 104)

- **Updated at**: `2026-11-24T00:51 JST`
- **Part**: `36 / 104` (**299** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 035](part-035.md) · [Part 037 →](part-037.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/266.js` (3lwmg.ecbaa066 → w4ddu.56408518 · continued)

- **File**: `bundles/bloxd.io/chunks/js/266.js` (112 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e)

#### 46. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L420-L428` → after: `L683-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L683-L684) · [Before (L420-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L420-L428)

```diff
-     }
-     class Zk extends ck {
-       constructor(kk, ek, ik) {
-         var Dk, fk, Sk, bk;
-         super(kk), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (Dk = null === ik | … [truncated]
-           this.inputs[kk] = new Ok(this.attributesKey, 4 * this.offsets[ek], 4 * this.rowStride, ik.strides[kk])
-         })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), kk.batchUploads.set(ek, this), ek.ZF.addOnce((() => {
-           this.release()
-         }))
+       get container() {
+         return this._container
```

#### 47. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L430-L431` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L686-L687) · [Before (L430-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L430-L431)

```diff
-       get packedMatrices() {
-         return this.matrices
+       get isDeleted() {
+         return this._isDeleted
```

#### 48. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L433-L435` → after: `L689-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L689-L690) · [Before (L433-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L433-L435)

```diff
-       packedRowMesh(kk) {
-         const ek = this.packedBatch;
-         return ek.renderSelf ? 0 === kk ? this.packedSource : ek.instances[kk - 1] : ek.instances[kk]
+       set isDeleted(CC) {
+         this._isDeleted = CC
```

#### 49. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L437-L438` → after: `L692-L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L692-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L692-L695) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L437-L438)

```diff
-       get packedAttributes() {
-         return this.attributes
+       checkDestroyed() {
+         if (this.isDeleted) throw qz.create("app-deleted", {
+           appName: this._name
+         })
```

#### 50. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L440-L446` → after: `L697-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L697-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L697-L705) · [Before (L440-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L440-L446)

```diff
-       pack(kk, ek, ik, Dk) {
-         const fk = (ek.renderSelf ? 1 : 0) + ek.rows.length;
-         if (this.frame = Dk, this.count = fk, this.packedSource = kk, this.packedBatch = ek, 0 === fk) return;
-         if (kk.getWorldMatrix(), 16 * fk > this.matrices.length) {
-           let kk = this.matrices.length / 16;
-           for (; kk < fk;) kk *= 2;
-           this.matrices = new Float32Array(16 * kk), this.attributes &&= new Float32Array(kk * this.rowStride), this.bind(this.matrices, this.attributes)
+     }
+     const Wz = "9.23.0";
+ 
+     function Nz(CC) {
+       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         ZC = CC;
+       if ("object" !== typeof zC) {
+         zC = {
+           name: zC
```

#### 51. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L453-L467` → after: `L708-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L708-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L708-L722) · [Before (L453-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L453-L467)

```diff
-       packRow(kk, ek, ik, Dk) {
-         const fk = this.matrices;
-         if (ik < 0) fk.set(ek.getWorldMatrix().m, 16 * kk);
-         else
-           for (let mk = 0; mk < 16; mk++) fk[16 * kk + mk] = Dk[16 * ik + mk];
-         const Sk = this.attributes;
-         if (!Sk) return;
-         const bk = ek.Iq,
-           rk = this.layout;
-         for (let mk = 0; mk < rk.length; mk++) {
-           var Pk;
-           const ek = null !== (Pk = bk[rk[mk]]) && void 0 !== Pk ? Pk : 0,
-             ik = kk * this.rowStride + this.offsets[mk];
-           ek.toArray ? ek.toArray(Sk, ik) : ek.copyToArray ? ek.copyToArray(Sk, ik) : Sk[ik] = ek
-         }
+       const wC = Object.assign({
+           name: kC,
+           automaticDataCollectionEnabled: !1
+         }, zC),
+         nC = wC.name;
+       if ("string" !== typeof nC || !nC) throw qz.create("bad-app-name", {
+         appName: String(nC)
+       });
+       if (ZC || (ZC = (0, bC.E)()), !ZC) throw qz.create("no-options");
+       const fC = Cz.get(nC);
+       if (fC) {
+         if ((0, bC.z)(ZC, fC.options) && (0, bC.z)(wC, fC.config)) return fC;
+         throw qz.create("duplicate-app", {
+           appName: nC
+         })
```

#### 52. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L670-L794` → after: `L730-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L730-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L730-L736) · [Before (L670-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L670-L794)

```diff
-     function Le(kk, ek) {
-       const ik = new Map(ek),
-         Dk = [],
-         fk = [],
-         Sk = () => 0 === fk.length || fk[fk.length - 1].active;
-       let bk = null;
-       const rk = () => {
-         const kk = [...ik].filter((kk => {
-             let [, ek] = kk;
-             return !0 !== ek
-           })),
-           ek = kk.map((kk => {
-             let [ek] = kk;
-             return ek
-           })).join("|");
-         bk = kk.length ? new RegExp(`\\b(${ek})\\b`, "g") : null
- ... (109 more removed lines; see GitHub link above)
+     function Mz() {
+       let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kC;
+       const zC = Cz.get(CC);
+       if (!zC && CC === kC && (0, bC.E)()) return Nz();
+       if (!zC) throw qz.create("no-app", {
+         appName: CC
+       });
```

#### 53. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1076-L1162` → after: `L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L741) · [Before (L1076-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L1076-L1162)

```diff
-       const kk = si;
-       return `${Ai(kk)}${ji(kk,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${Ci.e}>,\n}\n@group(${kk.group}) @binding(${kk.work}) var<uniform> bloxd … [truncated]
-     }
-     const Vi = 2;
-     const Fi = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";
- 
-     function ui(kk, ek) {
-       let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
-       const Dk = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${ek.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y … [truncated]
-         fk = "trace" === ik || "lit" === ik,
-         Sk = "maskEdge" === ik ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
-         bk = fk ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${ek.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of step … [truncated]
-       return `${Dk}${kk.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${fk?function(){const[kk,ek,ik]=Ci.r;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif  … [truncated]
-     }
-     const qi = "bloxdSpOwnTexture";
- 
- ... (71 more removed lines; see GitHub link above)
+       return Array.from(Cz.values())
```

#### 54. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1164-L1193` → after: `L743-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L743-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L743-L745) · [Before (L1164-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L1164-L1193)

```diff
- 
-     function gi(kk) {
-       if (!kk) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
-       if (Oi(kk)) return function(kk) {
-         const {
-           texture: ek,
-           cells: ik,
-           layers: Dk
-         } = kk, fk = `textureDimensions(${ek}, bloxdSpLevel)`, Sk = ik ? `max(vec2u(vec2f(${fk}) / ${ik}), vec2u(1u))` : fk, bk = ik ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Sk};\n\tlet bloxdSpIndex = u32( … [truncated]
-         let rk;
-         if (ik)
-           if (1 === Dk.length) rk = `\treturn bloxdSpOwnTexel(${Dk[0]}, bloxdSpUv, bloxdSpLevel);\n`;
-           else {
-             const kk = Dk.length - 1;
-             rk = `\tvar bloxdSpColour = bloxdSpOwnTexel(${Dk[kk]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
-             for (let ek = kk - 1; ek >= 0; ek--) rk += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${Dk[ek]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a)) … [truncated]
- ... (14 more removed lines; see GitHub link above)
+     async function Sz(CC) {
+       const zC = CC.name;
+       Cz.has(zC) && (Cz.delete(zC), await Promise.all(CC.container.getProviders().map((CC => CC.delete()))), CC.isDeleted = !0)
```

#### 55. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1268-L1554` → after: `L750-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L750-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L750-L756) · [Before (L1268-L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L1268-L1554)

```diff
-       return !(null === (ek = (0, Fe.e)(kk)) || void 0 === ek || !ek.sceneDepth)
-     }
- 
-     function PD(kk) {
-       const ek = (0, Fe.e)(kk);
-       return !!ek && Gi(ek.hooks, ek.strict, ek.program)
-     }
- 
-     function mD(kk, ek, ik, Dk) {
-       return Ei(kk, ek, ik, Dk, "terrain")
-     }
- 
-     function MD(kk, ek, ik) {
-       let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
-       const Sk = function(kk) {
- ... (271 more removed lines; see GitHub link above)
+       let bC = null !== (wC = VC[CC]) && void 0 !== wC ? wC : CC;
+       ZC && (bC += `-${ZC}`);
+       const nC = bC.match(/\s|\//),
+         fC = zC.match(/\s|\//);
+       if (nC || fC) {
+         const CC = [`Unable to register library "${bC}" with version "${zC}":`];
+         return nC && CC.push(`library name "${bC}" contains illegal characters (whitespace or "/")`), nC && fC && CC.push("and"), fC && CC.push(`version name "${zC}" contains illegal characters (whitespace or "/")`), void vC.warn(CC.join(" "))
```

#### 56. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1556-L1584` → after: `L758-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L758-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L758-L761) · [Before (L1556-L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L1556-L1584)

```diff
-       _SLOT] `;return`
-     #ifdef LIGHT$ {
-       kk
-     }\
-     nvar diffuse$ {
-       kk
-     }: vec4f = $ {
-       ek
-     }.vLightDiffuse;\
-     n #define CUSTOM_LIGHT$ {
-       kk
-     }
-     _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
-       ek
-     }.vLightData, diffuse$ {
-       kk
- ... (13 more removed lines; see GitHub link above)
+       wz(new QC.f(`${bC}-version`, (() => ({
+         library: bC,
+         version: zC
+       })), "VERSION"))
```

#### 57. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1586-L7326` → after: `L763-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L763-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L763-L811) · [Before (L1586-L7326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L1586-L7326)

```diff
- 
-     function ff(kk, ek) {
-       let ik = kk;
-       const Dk = new Map;
-       for (const [Sk, bk] of ek) {
-         var fk;
-         Dk.set(Sk, `${null!==(fk=Dk.get(Sk))&&void 0!==fk?fk:""}${bk}\n`)
-       }
-       for (const [Sk, bk] of Dk) {
-         if (!Sk.startsWith("!")) {
-           const kk = `#define ${Sk}`;
-           if (!ik.includes(kk)) {
-             Df(Sk);
-             continue
-           }
-           ik = ik.replace(kk, (() => `\n${bk}\n${kk}`));
- ... (5725 more removed lines; see GitHub link above)
+ 
+     function Pz(CC, zC) {
+       if (null !== CC && "function" !== typeof CC) throw qz.create("invalid-log-argument");
+       (0, wC.f)(CC, zC)
+     }
+ 
+     function Gz(CC) {
+       (0, wC.d)(CC)
+     }
+     const Rz = "firebase-heartbeat-store";
+     let Az = null;
+ 
+     function xz() {
+       return Az || (Az = function(CC, zC) {
+         let {
+           blocked: ZC,
+ ... (33 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7335` → after: `L815-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L815-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L815-L818) · [Before (L7335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7335)

```diff
-     var xP = ik(37075);
+ 
+     function Iz(CC) {
+       return `${CC.name}!${CC.options.appId}`
+     }
```

#### 59. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7338-L7436` → after: `L821-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L821-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L821-L851) · [Before (L7338-L7436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7338-L7436)

```diff
-         this.device = kk, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new wi, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.Ux = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = kk.createBuffer( … [truncated]
-           label: "sun-shadow-entities",
-           size: 589828,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.gridBuffer = kk.createBuffer({
-           label: "sun-shadow-entity-grids",
-           size: 16777216,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         })
-       }
-       update(kk, ek, ik) {
-         this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
-         const {
-           frame: Dk
-         } = this;
-         Dk.tn(kk, ek), ik.forEachSunShadowCaster((kk => {
- ... (83 more removed lines; see GitHub link above)
+         this.container = CC, this._heartbeatsCache = null;
+         const zC = this.container.getProvider("app").getImmediate();
+         this.PS = new ez(zC), this._heartbeatsCachePromise = this.PS.read().then((CC => (this._heartbeatsCache = CC, CC)))
+       }
+       async triggerHeartbeat() {
+         const CC = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
+           zC = vz();
+         if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== zC && !this._heartbeatsCache.heartbeats.some((CC => CC.date === zC))) return this._heartbeatsCache.heartbeats.push({
+           date: zC,
+           agent: CC
+         }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((CC => {
+           const zC = new Date(CC.date).valueOf();
+           return Date.now() - zC <= 2592e6
+         })), this.PS.overwrite(this._heartbeatsCache)
+       }
+       async getHeartbeatsHeader() {
+ ... (15 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7438-L7450` → after: `L853-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L853-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L853-L860) · [Before (L7438-L7450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7438-L7450)

```diff
-                 for (let kk = wk[2]; kk <= lk[2]; kk++)
-                   for (let ek = wk[1]; ek <= lk[1]; ek++)
-                     for (let ik = wk[0]; ik <= lk[0]; ik++)
-                       if (Yi(Hk, xk[0] + (ik + .5) * Mk, xk[1] + (ek + .5) * Mk, xk[2] + (kk + .5) * Mk, Mk / 2)) {
-                         const Dk = ik + Kk[0] * (ek + Kk[1] * kk);
-                         Uk[Dk >>> 5] |= 1 << (31 & Dk)
-                       }
-               } return {
-               words: Uk,
-               lo: xk,
-               hi: nk,
-               cell: Mk,
-               dims: Kk
+               } else if (ZC.push({
+                   agent: wC.agent,
+                   dates: [wC.date]
+                 }), hz(ZC) > zC) {
+                 ZC.pop();
+                 break
+               }
+               QC = QC.slice(1)
```

#### 61. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7452-L7463` → after: `L862-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L862-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L862-L871) · [Before (L7452-L7463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7452-L7463)

```diff
-           }((0, xP.e)(Sk, kk.vertexCount), ek ? kk.indexData : null, ik, Dk, fk) : null;
-         if (!bk) return null;
-         const {
-           words: rk,
-           ...Pk
-         } = bk;
-         if (this.gridTop + rk.length > xi) return void(this.gridsFull = !0);
-         const mk = this.gridTop;
-         return this.gridTop += rk.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * mk, rk), {
-           ...Pk,
-           at: mk
-         }
+             return {
+               heartbeatsToSend: ZC,
+               unsentEntries: QC
+             }
+           }(this._heartbeatsCache.heartbeats),
+           QC = (0, bC.r)(JSON.stringify({
+             version: 2,
+             heartbeats: zC
+           }));
+         return this._heartbeatsCache.lastSentHeartbeatDate = CC, ZC.length > 0 ? (this._heartbeatsCache.heartbeats = ZC, await this.PS.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this.PS.overwrite(this._heartbeatsCache)), QC
```

#### 62. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7468-L7482` → after: `L875-L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L875-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L875-L876) · [Before (L7468-L7482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7468-L7482)

```diff
-     function HP(kk, ek) {
-       return kk[0] * ek[0] + kk[1] * ek[1] + kk[2] * ek[2] < UP
-     }
-     async function wP(kk) {
-       const {
-         pixels: ek,
-         width: ik,
-         height: Dk
-       } = await Xf(kk), fk = new Uint8Array(ik * Dk);
-       for (let Sk = 0; Sk < fk.length; Sk++) fk[Sk] = ek[4 * Sk + 3];
-       return {
-         width: ik,
-         height: Dk,
-         alpha: fk
-       }
+     function vz() {
+       return (new Date).toISOString().substring(0, 10)
```

#### 63. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7485-L7530` → after: `L879-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L879-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L879-L880) · [Before (L7485-L7530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7485-L7530)

```diff
-       constructor(kk, ek) {
-         this.device = kk, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(Ci.n), this.entities = void 0, this.entityStandIn =  … [truncated]
-           label: "sun-shadow",
-           size: 128,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         }), this.voxelBuffer = kk.createBuffer({
-           label: "sun-shadow-voxels",
-           size: 4 * Te,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.special = kk.createBuffer({
-           label: "sun-shadow-special",
-           size: 9568256,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         });
-         const [ik, Dk, fk] = Ci.r;
-         this.volume = kk.createTexture({
- ... (30 more removed lines; see GitHub link above)
+       constructor(CC) {
+         this.app = CC, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
```

#### 64. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7532-L7537` → after: `L882-L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L882-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L882-L883) · [Before (L7532-L7537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7532-L7537)

```diff
-       describePendingWork() {
-         var kk, ek;
-         const ik = [];
-         !this.volumePassStarted || this.volumePass || this.volumePassFailed || ik.push("Lite sun shadow volume pipeline compiling");
-         const Dk = null !== (kk = null === (ek = this.casters) || void 0 === ek ? void 0 : ek.planesLoading) && void 0 !== kk ? kk : 0;
-         return Dk > 0 && ik.push(`${Dk} Lite sun shadow plane casters loading their textures`), ik
+       async runIndexedDBEnvironmentCheck() {
+         return !!(0, bC._)() && (0, bC.mb)().then((() => !0)).catch((() => !1))
```

#### 65. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7539-L7571` → after: `L885-L901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L885-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L885-L901) · [Before (L7539-L7571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7539-L7571)

```diff
-       entries() {
-         var kk, ek, ik, Dk;
-         const fk = Ve.o;
-         return [{
-           binding: fk.uniform,
-           resource: {
-             buffer: this.uniform
-           }
-         }, {
-           binding: fk.gx,
-           resource: {
-             buffer: this.voxelBuffer
-           }
-         }, {
-           binding: fk.special,
-           resource: {
- ... (17 more removed lines; see GitHub link above)
+       async read() {
+         if (await this._canUseIndexedDBPromise) {
+           return await async function(CC) {
+             try {
+               const zC = await xz();
+               return await zC.transaction(Rz).objectStore(Rz).get(Iz(CC))
+             } catch (zC) {
+               if (zC instanceof bC.j) vC.warn(zC.message);
+               else {
+                 const CC = qz.create("idb-get", {
+                   originalErrorMessage: null === zC || void 0 === zC ? void 0 : zC.message
+                 });
+                 vC.warn(CC.message)
+               }
+             }
+           }(this.app) || {
+ ... (1 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7573` → after: `L903-L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L903-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L903-L906) · [Before (L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7573)

```diff
-         }]
+         }
+         return {
+           heartbeats: []
+         }
```

#### 67. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7575` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L908) · [Before (L7575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7575)

```diff
-       prepare(kk, ek, ik) {
+       async overwrite(CC) {
```

#### 68. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7577-L7632` → after: `L910-L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L910-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L910-L915) · [Before (L7577-L7632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7577-L7632)

```diff
-         this.entitiesThisFrame = !1;
-         const fk = null !== (Dk = null === ik || void 0 === ik ? void 0 : ik.sunShadowReach()) && void 0 !== Dk ? Dk : {
-           sunShadow: !1,
-           airShadow: !1
-         };
-         if (!ik || !fk.sunShadow && !fk.airShadow) return void(this.volumeHolds = null);
-         if (kk.Ux.kkk !== ue) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${kk.Ux.kkk}; everything is lit.`)));
-         const Sk = this.start(kk);
-         this.casters.update(kk.dn, kk.dn.zn.length);
-         const bk = kk.Xx;
-         for (let xk = 0; xk < 3; xk++) this.eye[xk] = ek[xk] + bk[xk];
-         const rk = (0, Ci.y)(this.eye);
-         this.staleNear = rk;
-         const Pk = kk.Ux.aH;
-         Sk.update(this.eye, ((kk, ek, ik) => Pk.WH(kk, ek, ik)), 1);
-         const mk = (0, Ci.t)(ik.Z5()),
- ... (40 more removed lines; see GitHub link above)
+         if (await this._canUseIndexedDBPromise) {
+           const ZC = await this.read();
+           return Jz(this.app, {
+             lastSentHeartbeatDate: null !== (zC = CC.lastSentHeartbeatDate) && void 0 !== zC ? zC : ZC.lastSentHeartbeatDate,
+             heartbeats: CC.heartbeats
+           })
```

#### 69. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7636-L7653` → after: `L918-L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L918-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L918-L925) · [Before (L7636-L7653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7636-L7653)

```diff
-       traceEntities(kk) {
-         this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, kk)
-       }
-       computeVolume(kk, ek, ik) {
-         const Dk = this.buildVolumePass();
-         if (!Dk) return void(this.volumeHolds = null);
-         const fk = (0, Ci.x)(this.volumeHolds, kk);
-         this.volumeHolds = kk;
-         const Sk = 1 === fk.length && fk[0].size.every(((kk, ek) => kk === Ci.r[ek])),
-           bk = this.sweptChunk,
-           rk = this.sweptLight,
-           Pk = ek[0] !== rk[0] || ek[1] !== rk[1] || ek[2] !== rk[2],
-           mk = ik[0] !== bk[0] || ik[1] !== bk[1] || ik[2] !== bk[2],
-           Mk = Pk && HP(ek, rk);
-         if ((Sk || this.written || mk || Mk) && (this.fastLeft = Ci.j), Sk || this.written || Pk || mk) {
-           this.written = !1;
- ... (2 more removed lines; see GitHub link above)
+       async add(CC) {
+         var zC;
+         if (await this._canUseIndexedDBPromise) {
+           const ZC = await this.read();
+           return Jz(this.app, {
+             lastSentHeartbeatDate: null !== (zC = CC.lastSentHeartbeatDate) && void 0 !== zC ? zC : ZC.lastSentHeartbeatDate,
+             heartbeats: [...ZC.heartbeats, ...CC.heartbeats]
+           })
```

#### 70. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7782-L7783` → after: `L930-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L930-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L930-L934) · [Before (L7782-L7783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7782-L7783)

```diff
-     function jP(kk, ek, ik, Dk) {
-       kk.drawOffset(ek, Dk + YP), ek[Dk + LP] = kk.drawTime(), ik[Dk + CP] = kk.ring.drawStart(), ik[Dk + AP] = kk.ring.drawCount()
+     function hz(CC) {
+       return (0, bC.r)(JSON.stringify({
+         version: 2,
+         heartbeats: CC
+       })).length
```

#### 71. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7785-L7786` → after: `L936-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L936-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L936-L944) · [Before (L7785-L7786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7785-L7786)

```diff
-     const sP = `\n${pD}\n\nconst MAX_STOPS = ${yP.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${yP.b/4}>,\n\tcolor1: array<vec4f, ${yP.b}>,\n\t … [truncated]
-     var dP = ik(41177);
+     var Kz;
+     Kz = "", wz(new QC.f("platform-logger", (CC => new JC(CC)), "PRIVATE")), wz(new QC.f("heartbeat", (CC => new iz(CC)), "PRIVATE")), pz(IC, iC, Kz), pz(IC, iC, "esm2017"), pz("fire-js", "")
+   },
+   40336: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => fC,
+       f: () => wC
+     });
+     var QC = ZC(40340);
```

#### 72. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7788-L7803` → after: `L946-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L946-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L946-L947) · [Before (L7788-L7803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7788-L7803)

```diff
-       constructor(kk, ek, ik, Dk) {
-         this.device = kk, this.system = ek, this.frameIndex = ik, this.bindings = Dk, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, dP.f)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.bou … [truncated]
-           this.device.queue.writeBuffer(this.ring, kk * yP.f * 4, this.system.ring.records, kk * yP.f, (ek - kk) * yP.f)
-         };
-         const {
-           name: fk
-         } = ek;
-         this.ring = kk.createBuffer({
-           label: `particles-${fk}`,
-           size: ek.ring.records.byteLength,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.uniforms = kk.createBuffer({
-           label: `particles-uniforms-${fk}`,
-           size: 4 * yP.p,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         })
+       constructor(CC, zC, ZC) {
+         this.name = CC, this.instanceFactory = zC, this.type = ZC, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
```

#### 73. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7805-L7807` → after: `L949-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L949-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L949-L950) · [Before (L7805-L7807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7805-L7807)

```diff
-       writeUniforms(kk) {
-         const ek = (0, dP.c)(this.system, this.uniformBits, kk);
-         ek && (this.uniformBits = ek, this.device.queue.writeBuffer(this.uniforms, 0, ek))
+       setInstantiationMode(CC) {
+         return this.instantiationMode = CC, this
```

#### 74. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7809-L7850` → after: `L952-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L952-L953) · [Before (L7809-L7850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7809-L7850)

```diff
-       bind() {
-         const {
-           system: kk
-         } = this, ek = this.texture;
-         (0, dP.n)(kk, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
-           label: `particles-ramp-${kk.name}`,
-           size: [yP.k, 1],
-           format: "rgba8unorm",
-           usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
-         }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
-           texture: this.ramp
-         }, this.rampTexels.texels, {
-           bytesPerRow: 4 * yP.k
-         }, [yP.k, 1]));
-         const ik = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
-         this.bindGroup && this.boundView === ek.view && this.boundSampler === ek.sampler && this.boundRamp === ik || (this.boundView = ek.view, this.boundSampler = ek.sampler, this.boundRamp = ik, this.bindGroup = this.device.createBindGroup({
- ... (26 more removed lines; see GitHub link above)
+       setMultipleInstances(CC) {
+         return this.multipleInstances = CC, this
```

#### 75. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7852-L7854` → after: `L955-L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L955-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L955-L959) · [Before (L7852-L7854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7852-L7854)

```diff
-       destroy() {
-         var kk;
-         this.ring.destroy(), this.uniforms.destroy(), null === (kk = this.ramp) || void 0 === kk || kk.destroy()
+       setServiceProps(CC) {
+         return this.serviceProps = CC, this
+       }
+       setInstanceCreatedCallback(CC) {
+         return this.onInstanceCreated = CC, this
```

#### 76. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7859-L7944` → after: `L965-L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L965-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L965-L976) · [Before (L7859-L7944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7859-L7944)

```diff
-         this.device = kk, this.resources = ek, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(409 … [truncated]
-         const ik = kk.createBindGroupLayout({
-           label: "particles-system",
-           entries: [{
-             binding: 0,
-             visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
-             buffer: {
-               type: "uniform"
-             }
-           }, {
-             binding: 1,
-             visibility: GPUShaderStage.VERTEX,
-             buffer: {
-               type: "read-only-storage"
-             }
-           }, {
- ... (70 more removed lines; see GitHub link above)
+         this.name = CC, this.container = zC, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
+       }
+       get(CC) {
+         const zC = this.normalizeInstanceIdentifier(CC);
+         if (!this.instancesDeferred.has(zC)) {
+           const CC = new QC.d;
+           if (this.instancesDeferred.set(zC, CC), this.isInitialized(zC) || this.shouldAutoInitialize()) try {
+             const ZC = this.getOrInitializeService({
+               instanceIdentifier: zC
+             });
+             ZC && CC.resolve(ZC)
+           } catch (ZC) {}
```

#### 77. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7947-L7948` → after: `L980-L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L980-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L980-L995) · [Before (L7947-L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7947-L7948)

```diff
-       get XDk() {
-         return this.systems.size
+       getImmediate(CC) {
+         var zC;
+         const ZC = this.normalizeInstanceIdentifier(null === CC || void 0 === CC ? void 0 : CC.identifier),
+           QC = null !== (zC = null === CC || void 0 === CC ? void 0 : CC.optional) && void 0 !== zC && zC;
+         if (!this.isInitialized(ZC) && !this.shouldAutoInitialize()) {
+           if (QC) return null;
+           throw Error(`Service ${this.name} is not available`)
+         }
+         try {
+           return this.getOrInitializeService({
+             instanceIdentifier: ZC
+           })
+         } catch (wC) {
+           if (QC) return null;
+           throw wC
+         }
```

#### 78. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7950-L7951` → after: `L997-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L997-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L997-L998) · [Before (L7950-L7951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7950-L7951)

```diff
-       reset() {
-         for (const kk of this.systems.keys()) kk.reset()
+       getComponent() {
+         return this.component
```

#### 79. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7953-L7954` → after: `L1000-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1000-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1000-L1020) · [Before (L7953-L7954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7953-L7954)

```diff
-       describePendingWork() {
-         return (0, pP.d)(this.systems.keys(), "Lite")
+       setComponent(CC) {
+         if (CC.name !== this.name) throw Error(`Mismatching Component ${CC.name} for Provider ${this.name}.`);
+         if (this.component) throw Error(`Component for ${this.name} has already been provided`);
+         if (this.component = CC, this.shouldAutoInitialize()) {
+           if (function(CC) {
+               return "EAGER" === CC.instantiationMode
+             }(CC)) try {
+             this.getOrInitializeService({
+               instanceIdentifier: bC
+             })
+           } catch (zC) {}
+           for (const [CC, ZC] of this.instancesDeferred.entries()) {
+             const QC = this.normalizeInstanceIdentifier(CC);
+             try {
+               const CC = this.getOrInitializeService({
+                 instanceIdentifier: QC
+ ... (5 more added lines; see GitHub link above)
```

#### 80. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7956-L7958` → after: `L1022-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1022-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1022-L1024) · [Before (L7956-L7958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7956-L7958)

```diff
-       Aq(kk, ek) {
-         const ik = new pP.b(kk, ek, this);
-         return this.systems.set(ik, new VP(this.device, ik, this.allocateFrameIndex(), this.bindings)), ik
+       clearInstance() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bC;
+         this.instancesDeferred.delete(CC), this.instancesOptions.delete(CC), this.instances.delete(CC)
```

#### 81. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7960-L7961` → after: `L1026-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1026-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1026-L1028) · [Before (L7960-L7961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7960-L7961)

```diff
-       T6(kk, ek) {
-         for (const ik of this.systems.keys()) ik.T6(kk, ek)
+       async delete() {
+         const CC = Array.from(this.instances.values());
+         await Promise.all([...CC.filter((CC => "INTERNAL" in CC)).map((CC => CC.INTERNAL.delete())), ...CC.filter((CC => "_delete" in CC)).map((CC => CC._delete()))])
```

#### 82. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7963-L7974` → after: `L1030-L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1030-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1030-L1031) · [Before (L7963-L7974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7963-L7974)

```diff
-       canDraw(kk) {
-         const ek = this.systems.get(kk),
-           ik = kk.texture ? this.resources.boundTexture(kk.texture) : null;
-         if (!ek || !ik || !this.targetPipelines) return !1;
-         if (ek.texture = ik, ek.pipelines.length = 0, !Of(kk.blendMode)) return this.warnOnce(`blend:${kk.blendMode}`, `particle blend mode ${kk.blendMode} is not drawn (${kk.name})`), !0;
-         const Dk = (0, zf.m)(kk.blendMode);
-         for (const fk of Dk) {
-           const kk = this.pipelineFor(fk);
-           if (!1 === kk) return ek.pipelines.length = 0, !0;
-           kk && ek.pipelines.push(kk)
-         }
-         return ek.pipelines.length === Dk.length
+       isComponentSet() {
+         return null != this.component
```

#### 83. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7976-L7977` → after: `L1033-L1035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1033-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1033-L1035) · [Before (L7976-L7977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7976-L7977)

```diff
-       disposeStopped(kk) {
-         kk.dispose()
+       isInitialized() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bC;
+         return this.instances.has(CC)
```

#### 84. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7979-L7981` → after: `L1037-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1037-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1037-L1039) · [Before (L7979-L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7979-L7981)

```diff
-       remove(kk) {
-         const ek = this.systems.get(kk);
-         ek && (this.systems.delete(kk), ek.destroy(), this.freeFrameIndices.push(ek.frameIndex))
+       getOptions() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bC;
+         return this.instancesOptions.get(CC) || {}
```

#### 85. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7983-L7993` → after: `L1041-L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1041-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1041-L1053) · [Before (L7983-L7993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7983-L7993)

```diff
-       prepare(kk) {
-         const ek = kk.animationRatio || 1;
-         Pe(this.renderable._worldCenter, kk, fe), this.preparedTarget = this.target, this.draws.length = 0;
-         let ik = 0;
-         for (const Dk of this.systems.values()) {
-           const kk = Dk.system;
-           if (!kk.animateIfActive(ek)) continue;
-           if (kk.ring.takeUploads(Dk.upload), !kk.hasLiveParticles() || 0 === Dk.pipelines.length) continue;
-           Dk.writeUniforms(this.warnOnce), Dk.bind();
-           const fk = 64 * Dk.frameIndex;
-           Dk.count = kk.ring.drawCount(), jP(kk, this.frameData, this.frameBits, fk), ik = Math.max(ik, fk + 64), this.draws.push(Dk)
+       initialize() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         const {
+           options: zC = {}
+         } = CC, ZC = this.normalizeInstanceIdentifier(CC.instanceIdentifier);
+         if (this.isInitialized(ZC)) throw Error(`${this.name}(${ZC}) has already been initialized`);
+         if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
+         const QC = this.getOrInitializeService({
+           instanceIdentifier: ZC,
+           options: zC
+         });
+         for (const [wC, bC] of this.instancesDeferred.entries()) {
+           ZC === this.normalizeInstanceIdentifier(wC) && bC.resolve(QC)
```

#### 86. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7995` → after: `L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1055) · [Before (L7995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7995)

```diff
-         ik > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, ik)
+         return QC
```

#### 87. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L7997-L8002` → after: `L1057-L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1057-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1057-L1064) · [Before (L7997-L8002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L7997-L8002)

```diff
-       draw(kk) {
-         let ek = 0,
-           ik = null;
-         for (const Dk of this.draws) {
-           kk.setBindGroup(1, Dk.bindGroup), kk.setBindGroup(2, this.frameBindGroup, [256 * Dk.frameIndex]);
-           for (const fk of Dk.pipelines) fk !== ik && (kk.setPipeline(fk), ik = fk), kk.draw(4, Dk.count), ek++
+       Bl(CC, zC) {
+         var ZC;
+         const QC = this.normalizeInstanceIdentifier(zC),
+           wC = null !== (ZC = this.onInitCallbacks.get(QC)) && void 0 !== ZC ? ZC : new Set;
+         wC.add(CC), this.onInitCallbacks.set(QC, wC);
+         const bC = this.instances.get(QC);
+         return bC && CC(bC, QC), () => {
+           wC.delete(CC)
```

#### 88. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8006-L8010` → after: `L1067-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1067-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1067-L1072) · [Before (L8006-L8010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8006-L8010)

```diff
-       bindTarget(kk) {
-         this.target = kk;
-         const ek = `${kk._colorFormat}|${kk._depthStencilFormat}|${kk._depthCompare}|${kk._sampleCount}`;
-         let ik = this.pipelines.get(ek);
-         ik || (ik = new Map, this.pipelines.set(ek, ik)), this.targetPipelines = ik
+       invokeOnInitCallbacks(CC, zC) {
+         const ZC = this.onInitCallbacks.get(zC);
+         if (ZC)
+           for (const wC of ZC) try {
+             wC(CC, zC)
+           } catch (QC) {}
```

#### 89. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8012` → after: `L1074-L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1074-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1074-L1084) · [Before (L8012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8012)

```diff
-       pipelineFor(kk) {
+       getOrInitializeService(CC) {
+         let {
+           instanceIdentifier: zC,
+           options: ZC = {}
+         } = CC, QC = this.instances.get(zC);
+         if (!QC && this.component && (QC = this.component.instanceFactory(this.container, {
+             instanceIdentifier: (wC = zC, wC === bC ? void 0 : wC),
+             options: ZC
+           }), this.instances.set(zC, QC), this.instancesOptions.set(zC, ZC), this.invokeOnInitCallbacks(QC, zC), this.component.onInstanceCreated)) try {
+           this.component.onInstanceCreated(this.container, zC, QC)
+         } catch (nC) {}
```

#### 90. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8014-L8051` → after: `L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1086) · [Before (L8014-L8051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8014-L8051)

```diff
-         const ik = this.targetPipelines,
-           Dk = ik.get(kk);
-         if (void 0 !== Dk) return Dk;
-         ik.set(kk, null);
-         const fk = this.target,
-           Sk = kk === zf.c,
-           bk = null !== (ek = fk._depthCompare) && void 0 !== ek ? ek : De;
-         return this.device.createRenderPipelineAsync({
-           label: `particles-${kk}`,
-           layout: this.pipelineLayout,
-           vertex: {
-             module: this.module,
-             entryPoint: "mainVertex"
-           },
-           fragment: Rk({
-             module: this.module,
- ... (22 more removed lines; see GitHub link above)
+         return QC || null
```

#### 91. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8053-L8068` → after: `L1088-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1088-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1088-L1090) · [Before (L8053-L8068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8053-L8068)

```diff
-       allocateFrameIndex() {
-         const kk = this.freeFrameIndices.pop();
-         if (void 0 !== kk) return kk;
-         const ek = this.nextFrameIndex++;
-         if (64 * (ek + 1) > this.frameData.length) {
-           const kk = new Float32Array(2 * this.frameData.length);
-           kk.set(this.frameData), this.frameData = kk, this.frameBits = new Uint32Array(kk.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
-         }
-         return ek
-       }
-       createFrameBuffer() {
-         return this.device.createBuffer({
-           label: "particles-frames",
-           size: this.frameData.byteLength,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         })
+       normalizeInstanceIdentifier() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bC;
+         return this.component ? this.component.multipleInstances ? CC : bC : CC
```

#### 92. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8070-L8081` → after: `L1092-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1092-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1092-L1093) · [Before (L8070-L8081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8070-L8081)

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
+       shouldAutoInitialize() {
+         return !!this.component && "EXPLICIT" !== this.component.instantiationMode
```

#### 93. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8085-L8137` → after: `L1097-L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1097-L1098) · [Before (L8085-L8137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8085-L8137)

```diff
-       constructor(kk, ek, ik, Dk, fk) {
-         this.lite = kk, this.canvas = ek, this.info = ik, this.resources = fk, this.Xik = !1, this.needPOTTextures = !1, this.O4 = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
-           reset: () => {
-             this.lastFrameTime = null
-           }
-         }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = ek.width, this.renderHeight = ek.height, this.caps = {
-           maxTextureSize: Dk.maxTextureDimension2D,
-           texture2DArrayMaxLayerCount: Dk.maxTextureArrayLayers
-         }
-       }
-       getCaps() {
-         return this.caps
-       }
-       getRenderWidth() {
-         return this.renderWidth
-       }
- ... (37 more removed lines; see GitHub link above)
+       constructor(CC) {
+         this.name = CC, this.providers = new Map
```

#### 94. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8139-L8140` → after: `L1100-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1100-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1100-L1103) · [Before (L8139-L8140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8139-L8140)

```diff
-       getDeltaTime() {
-         return this.deltaTime
+       lH(CC) {
+         const zC = this.getProvider(CC.name);
+         if (zC.isComponentSet()) throw new Error(`Component ${CC.name} has already been registered with ${this.name}`);
+         zC.setComponent(CC)
```

#### 95. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8142-L8144` → after: `L1105-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1105-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1105-L1106) · [Before (L8142-L8144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8142-L8144)

```diff
-       createCanvas(kk, ek) {
-         const ik = document.createElement("canvas");
-         return ik.width = kk, ik.height = ek, ik
+       addOrOverwriteComponent(CC) {
+         this.getProvider(CC.name).isComponentSet() && this.providers.delete(CC.name), this.lH(CC)
```

#### 96. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8146-L8148` → after: `L1108-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1108-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1108-L1111) · [Before (L8146-L8148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8146-L8148)

```diff
-       i_(kk, ek) {
-         var ik;
-         return null !== (ik = this.resources.i_.get(kk)) && void 0 !== ik ? ik : new Tk(this.resources, kk, ek)
+       getProvider(CC) {
+         if (this.providers.has(CC)) return this.providers.get(CC);
+         const zC = new nC(CC, this);
+         return this.providers.set(CC, zC), zC
```

#### 97. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8150-L8151` → after: `L1113-L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1113-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1113-L1114) · [Before (L8150-L8151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8150-L8151)

```diff
-       atlasArray(kk, ek, ik) {
-         return this.resources.atlasArray(kk, ek, ik)
+       getProviders() {
+         return Array.from(this.providers.values())
```

#### 98. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8155-L8156` → after: `L1155-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1155-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1155-L1156) · [Before (L8155-L8156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8155-L8156)

```diff
-       constructor() {
-         this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
+       constructor(CC) {
+         this.name = CC, this._logLevel = nC, this._logHandler = oC, this._userLogHandler = null, QC.push(this)
```

#### 99. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8158-L8162` → after: `L1158-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1158-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1158-L1159) · [Before (L8158-L8162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8158-L8162)

```diff
-       copyFromView(kk) {
-         this.fov = kk.fov, this.nearPlane = kk.near, this.farPlane = kk.far;
-         const ek = kk.worldMatrix;
-         for (let ik = 0; ik < 16; ik++)
-           if (this.worldMatrix[ik] !== ek[ik]) return this.worldMatrix.set(ek), void this.worldMatrixVersion++
+       get logLevel() {
+         return this._logLevel
```

#### 100. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8164-L8176` → after: `L1161-L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1161-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1161-L1163) · [Before (L8164-L8176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8164-L8176)

```diff
-     }
-     class IP {
-       constructor(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk) {
-         let Mk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
-         this.engine = kk, this.bw = ek, this.sceneTask = ik, this.gpuDevice = Dk, this.terrain = fk, this.meshes = Sk, this.particles = bk, this.resources = rk, this.sunShadow = Mk, this.Yek = void 0, this.backendName = "WebGPU (Lite)", this.j_ = void 0, this.modelMeshes = void 0 … [truncated]
-           XM: kk => {
-             Ik(kk) && rk.textureSlot(kk)
-           },
-           loaded: kk => Ik(kk) ? rk.textureLoaded(kk) : null,
-           canvasUpdated: (kk, ek, ik) => {
-             Ik(kk) && rk.canvasUpdated(kk, ek, ik)
-           }
-         }), this.j_ = Sk.j_, this.modelMeshes = Sk.modelMeshes, ek.camera = this.camera
+       set logLevel(CC) {
+         if (!(CC in wC)) throw new TypeError(`Invalid value "${CC}" assigned to \`logLevel\``);
+         this._logLevel = CC
```

#### 101. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8178-L8180` → after: `L1165-L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1165-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1165-L1166) · [Before (L8178-L8180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8178-L8180)

```diff
-       get castsEntitySunShadows() {
-         var kk, ek;
-         return null !== (kk = null === (ek = this.sunShadow) || void 0 === ek ? void 0 : ek.tracesEntities) && void 0 !== kk && kk
+       setLogLevel(CC) {
+         this._logLevel = "string" === typeof CC ? bC[CC] : CC
```

#### 102. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8182-L8183` → after: `L1168-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1168-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1168-L1169) · [Before (L8182-L8183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8182-L8183)

```diff
-       get sampleCount() {
-         return this.engine.msaaSamples
+       get logHandler() {
+         return this._logHandler
```

#### 103. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8185-L8190` → after: `L1171-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1171-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1171-L1173) · [Before (L8185-L8190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8185-L8190)

```diff
-       attach(kk) {
-         this.modelMeshes.attach(kk.model, kk.sceneMirror);
-         const ek = kk.bw;
-         this.setClearColour(ek.clearColor.r, ek.clearColor.g, ek.clearColor.b), ek.draw = () => {
-           this.drawFrame(kk, ek)
-         }
+       set logHandler(CC) {
+         if ("function" !== typeof CC) throw new TypeError("Value assigned to `logHandler` must be a function");
+         this._logHandler = CC
```

#### 104. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8192-L8200` → after: `L1175-L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1175-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1175-L1176) · [Before (L8192-L8200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8192-L8200)

```diff
-       render(kk) {
-         if (!this.refusals.lost) {
-           try {
-             this.Yek.AY(), kk.bw.render()
-           } catch (ek) {
-             throw this.refusals.frameFailed(ek), ek
-           }
-           this.refusals.frameDrawn()
-         }
+       get userLogHandler() {
+         return this._userLogHandler
```

#### 105. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8202-L8203` → after: `L1178-L1179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1178-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1178-L1179) · [Before (L8202-L8203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8202-L8203)

```diff
-       lastFrameDrawCalls() {
-         return this.engine.drawCallCount
+       set userLogHandler(CC) {
+         this._userLogHandler = CC
```

#### 106. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8205-L8213` → after: `L1181-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1181-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1181-L1183) · [Before (L8205-L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8205-L8213)

```diff
-       describePendingWork() {
-         var kk, ek, ik, Dk;
-         const fk = [...this.particles.describePendingWork(), ...null !== (kk = null === (ek = this.sunShadow) || void 0 === ek ? void 0 : ek.describePendingWork()) && void 0 !== kk ? kk : []],
-           Sk = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (ik = this.terrain.sceneDepth) && void 0 !== ik && ik.compiling ? 1 : 0) + (null !== (Dk = this.terrain.shadowMask) && void 0 !== Dk && Dk.compiling ? 1 : 0);
-         Sk > 0 && fk.push(`${Sk} Lite pipelines compiling`);
-         const bk = this.terrain.buffersAwaitingVerdict;
-         bk > 0 && fk.push(`${bk} Lite terrain buffers awaiting their out-of-memory verdict`);
-         const rk = this.resources.texturesLoading;
-         return rk > 0 && fk.push(`${rk} Lite textures loading`), fk
+       debug() {
+         for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
+         this._userLogHandler && this._userLogHandler(this, wC.DEBUG, ...zC), this._logHandler(this, wC.DEBUG, ...zC)
```

#### 107. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8215-L8216` → after: `L1185-L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1185-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1185-L1187) · [Before (L8215-L8216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8215-L8216)

```diff
-       prepareTexture(kk) {
-         return null !== this.resources.boundTexture(kk) || this.resources.textureFailed(kk)
+       log() {
+         for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
+         this._userLogHandler && this._userLogHandler(this, wC.VERBOSE, ...zC), this._logHandler(this, wC.VERBOSE, ...zC)
```

#### 108. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8218-L8229` → after: `L1189-L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1189-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1189-L1195) · [Before (L8218-L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8218-L8229)

```diff
-       drawFrame(kk, ek) {
-         var ik, Dk, fk, Sk, bk, rk;
-         const Pk = wr(kk);
-         this.camera.copyFromView(Pk), this.setClearColour(Pk.clearColour[0], Pk.clearColour[1], Pk.clearColour[2]), null === (ik = this.sunShadow) || void 0 === ik || ik.prepare(kk.Lx, Pk.eye, null !== (Dk = kk.Lx.AU) && void 0 !== Dk ? Dk : null), this.terrain.prepare(kk, Pk), n … [truncated]
-         const mk = performance.now();
-         this.resources.flushUploads(), null === (rk = this.sunShadow) || void 0 === rk || rk.traceEntities(this.meshes);
-         try {
-           (0, tk.k)(this.engine, this.lastFrameTime > 0 ? mk - this.lastFrameTime : 0)
-         } finally {
-           this.resources.endUploadFrame()
-         }
-         this.lastFrameTime = mk
+       info() {
+         for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
+         this._userLogHandler && this._userLogHandler(this, wC.INFO, ...zC), this._logHandler(this, wC.INFO, ...zC)
+       }
+       warn() {
+         for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
+         this._userLogHandler && this._userLogHandler(this, wC.WARN, ...zC), this._logHandler(this, wC.WARN, ...zC)
```

#### 109. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8231-L8233` → after: `L1197-L1199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1197-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1197-L1199) · [Before (L8231-L8233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8231-L8233)

```diff
-       setClearColour(kk, ek, ik) {
-         const Dk = this.bw.clearColor;
-         Dk.r = kk, Dk.g = ek, Dk.b = ik, Dk.a = 1
+       error() {
+         for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
+         this._userLogHandler && this._userLogHandler(this, wC.ERROR, ...zC), this._logHandler(this, wC.ERROR, ...zC)
```

#### 110. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8238-L8241` → after: `L1203-L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1203-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1203-L1206) · [Before (L8238-L8241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8238-L8241)

```diff
-     function QP(kk, ek) {
-       return "object" === typeof kk && null !== kk ? Object.assign(kk, {
-         startStep: ek
-       }) : kk
+     function FC(CC) {
+       QC.forEach((zC => {
+         zC.setLogLevel(CC)
+       }))
```

#### 111. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8243-L8291` → after: `L1208-L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1208-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1208-L1221) · [Before (L8243-L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8243-L8291)

```diff
-     async function vP(kk, ek) {
-       const ik = await navigator.gpu.requestAdapter({
-         powerPreference: "high-performance"
-       });
-       if (!ik) throw QP(new Error("No WebGPU adapter"), "no_adapter");
-       const Dk = ik.info,
-         fk = {
-           vendor: (null === Dk || void 0 === Dk ? void 0 : Dk.vendor) || "unknown vendor",
-           renderer: (null === Dk || void 0 === Dk ? void 0 : Dk.architecture) || "unknown renderer",
-           version: (null === Dk || void 0 === Dk ? void 0 : Dk.description) || "unknown version"
-         },
-         Sk = function(kk) {
-           const ek = {};
-           for (const ik in kk.limits) {
-             const Dk = kk.limits[ik];
-             "number" === typeof Dk && (ek[ik] = Dk)
- ... (33 more removed lines; see GitHub link above)
+ 
+     function WC(CC, zC) {
+       for (const ZC of QC) {
+         let QC = null;
+         zC && zC.level && (QC = bC[zC.level]), ZC.userLogHandler = null === CC ? null : function(zC, ZC) {
+           for (var bC = arguments.length, nC = new Array(bC > 2 ? bC - 2 : 0), fC = 2; fC < bC; fC++) nC[fC - 2] = arguments[fC];
+           const oC = nC.map((CC => {
+             if (null == CC) return null;
+             if ("string" === typeof CC) return CC;
+             if ("number" === typeof CC || "boolean" === typeof CC) return CC.toString();
+             if (CC instanceof Error) return CC.message;
+             try {
+               return JSON.stringify(CC)
+             } catch (zC) {
```

#### 112. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8293-L8314` → after: `L1223-L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1223-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L1223-L1229) · [Before (L8293-L8314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L8293-L8314)

```diff
-             }(bk, kk))),
-             Mk = new FP(ek, rk);
-           for (const nk of function(kk, ek, ik) {
-               return [ek.opaqueRenderable, kk.opaqueRenderable, kk.skyLastRenderable, ik.renderable, ek.transparentRenderable, kk.transparentRenderable, kk.frontRenderable]
-             }(mk, Pk, Mk)) Jk(bk, nk);
-           const Kk = function(kk) {
-             for (const ek of ke(kk))
-               if ("bw" === ek.name) return ek;
-             throw new Error("Lite: the scene has no render task named scene")
-           }(bk);
-           fk && Pk.installSceneDepth(Kk, kk);
-           const xk = Sk ? new lP(ek, Sk.entities) : null;
-           Pk.sunShadow = xk, xk && null !== Sk && void 0 !== Sk && Sk.entities && (Pk.shadowMask = new Ir(ek, Kk, kk, Pk));
-           return mk.sunShadow = xk, await (0, Xk.e)(bk), new IP(kk, bk, Kk, ek, Pk, mk, Mk, rk, ik, Dk, xk)
-         }(bk, Pk, kk, fk, ek.sceneDepth, ek.sunShadow);
-         if (null !== mk) {
- ... (6 more removed lines; see GitHub link above)
+             }
+           })).filter((CC => CC)).join(" ");
+           ZC >= (null !== QC && void 0 !== QC ? QC : zC.logLevel) && CC({
+             level: wC[ZC].toLowerCase(),
+             message: oC,
+             args: nC,
+             type: zC.name
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/267.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/267.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8)

#### 1. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L4-L8` → after: `L5-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L5-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L5-L74) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L4-L8)

```diff
-   40400: (kk, ek, ik) => {
-     function Dk(kk, ek, ik) {
-       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(kk, ek).getContext("2d", ik);
-       const Dk = document.createElement("canvas");
-       return Dk.width = kk, Dk.height = ek, Dk.getContext("2d", ik)
+   40357: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       getAnalytics: () => yz,
+       getGoogleAnalyticsClientId: () => Oz,
+       initializeAnalytics: () => Lz,
+       isSupported: () => Uz,
+       logEvent: () => ZZ,
+       setAnalyticsCollectionEnabled: () => CZ,
+       setConsent: () => QZ,
+       setCurrentScreen: () => Bz,
+       setDefaultEventParameters: () => zZ,
+       setUserId: () => kz,
+       setUserProperties: () => Vz,
+       settings: () => Dz
+     });
+     var QC = ZC(40329),
+ ... (54 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L12-L26` → after: `L105-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L105-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L105-L138) · [Before (L12-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L12-L26)

```diff
-       return kk.getContext("2d", ek)
-     }
-     ik.d(ek, {
-       c: () => fk,
-       f: () => Dk
-     })
-   },
-   40364: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => rk
-     });
-     const Dk = 1 << 20,
-       fk = 1 << 21,
-       Sk = 1024,
-       bk = 2048;
+       if (!(CC instanceof IDBDatabase) || zC in CC || "string" !== typeof zC) return;
+       if (xC.get(zC)) return xC.get(zC);
+       const ZC = zC.replace(/FromIndex$/, ""),
+         QC = zC !== ZC,
+         wC = AC.includes(ZC);
+       if (!(ZC in (QC ? IDBIndex : IDBObjectStore).prototype) || !wC && !RC.includes(ZC)) return;
+       const bC = async function(CC) {
+         const zC = this.transaction(CC, wC ? "readwrite" : "readonly");
+         let bC = zC.store;
+         for (var nC = arguments.length, fC = new Array(nC > 1 ? nC - 1 : 0), oC = 1; oC < nC; oC++) fC[oC - 1] = arguments[oC];
+         return QC && (bC = bC.index(fC.shift())), (await Promise.all([bC[ZC](...fC), wC && zC.done]))[0]
+       };
+       return xC.set(zC, bC), bC
+     }
+     gC = (CC => ({
+       ...CC,
+ ... (18 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L28-L180` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L140-L141) · [Before (L28-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L28-L180)

```diff
-     function rk(kk, ek, ik) {
-       const rk = kk + Dk,
-         Pk = ek + Sk,
-         mk = ik + Dk;
-       return rk < 0 || rk >= fk || mk < 0 || mk >= fk || Pk < 0 || Pk >= bk ? -1 : (rk * fk + mk) * bk + Pk
-     }
-   },
-   40358: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => Dk,
-       f: () => bk,
-       g: () => fk,
-       j: () => Sk,
-       m: () => Mk,
-       n: () => mk,
-       p: () => Pk,
- ... (137 more removed lines; see GitHub link above)
+     function mC(CC) {
+       return CC instanceof bC.j && CC.code.includes("request-failed")
```

#### 4. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L185-L188` → after: `L145-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L145-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L145-L148) · [Before (L185-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L185-L188)

```diff
-       if (0 === kk) return rk;
-       const ek = new Sk.c(Dk.fc);
-       for (let ik = 0; ik < Dk.fc; ik++) ek[ik] = kk >>> 8 * ik & 255;
-       return ek
+       let {
+         projectId: zC
+       } = CC;
+       return `https://firebaseinstallations.googleapis.com/v1/projects/${zC}/installations`
```

#### 5. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L190-L212` → after: `L150-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L150-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L150-L178) · [Before (L190-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L190-L212)

```diff
-     class mk {
-       constructor(kk, ek) {
-         this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new bk(ek, {
-           ptr: () => kk.GK(),
-           vK: () => kk.USk(),
-           reserve: ek => kk.sSk(ek)
-         }), this.net = new bk(ek, {
-           ptr: () => kk.CSk(),
-           vK: () => kk.LSk(),
-           reserve: ek => kk.dSk(ek)
-         }), this.worker = new bk(ek, {
-           ptr: () => kk.gSk(),
-           vK: () => kk.OSk(),
-           reserve: ek => kk.VSk(ek)
-         }), this.cmd = new bk(ek, {
-           ptr: () => kk.SSk(),
- ... (7 more removed lines; see GitHub link above)
+ 
+     function EC(CC) {
+       return {
+         token: CC.token,
+         requestStatus: 2,
+         expiresIn: (zC = CC.expiresIn, Number(zC.replace("s", "000"))),
+         creationTime: Date.now()
+       };
+       var zC
+     }
+     async function lC(CC, zC) {
+       const ZC = (await zC.json()).error;
+       return dC.create("request-failed", {
+         requestName: CC,
+         serverCode: ZC.code,
+         serverMessage: ZC.message,
+ ... (13 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L238-L249` → after: `L182-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L182-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L182-L197) · [Before (L238-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L238-L249)

```diff
-       kk.forEachWorkerOut(((ik, fk, Sk) => {
-         if ((0, Dk.pe)(ik)) try {
-           var bk;
-           null === (bk = ek.worldgen) || void 0 === bk || bk.take(ik, Sk)
-         } catch (Pk) {
-           kk.crash(Ck, Pk)
-         } else try {
-           var rk;
-           null === (rk = ek.mesh) || void 0 === rk || rk.take(ik, fk, Sk)
-         } catch (Pk) {
-           kk.crash(Ik, Pk)
-         }
+       let {
+         refreshToken: ZC
+       } = zC;
+       const QC = XC(CC);
+       return QC.append("Authorization", function(CC) {
+         return `${hC} ${CC}`
+       }(ZC)), QC
+     }
+     async function uC(CC) {
+       const zC = await CC();
+       return zC.status >= 500 && zC.status < 600 ? CC() : zC
+     }
+ 
+     function rC(CC) {
+       return new Promise((zC => {
+         setTimeout(zC, CC)
```

#### 7. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L252` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L200) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L252)

```diff
-     const Qk = 1048576;
+     const sC = /^[cdef][\w-]{21}$/;
```

#### 8. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L254-L260` → after: `L202-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L202-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L202-L213) · [Before (L254-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L254-L260)

```diff
-     function vk(kk, ek) {
-       let ik = !1;
-       const Dk = () => {
-         ik = !1, ek()
-       };
-       return () => {
-         !ik && kk.cursor >= Qk && (ik = !0, queueMicrotask(Dk))
+     function TC() {
+       try {
+         const CC = new Uint8Array(17);
+         (self.crypto || self.msCrypto).getRandomValues(CC), CC[0] = 112 + CC[0] % 16;
+         const zC = function(CC) {
+           const zC = (ZC = CC, btoa(String.fromCharCode(...ZC)).replace(/\+/g, "-").replace(/\//g, "_"));
+           var ZC;
+           return zC.substr(0, 22)
+         }(CC);
+         return sC.test(zC) ? zC : ""
+       } catch (CC) {
+         return ""
```

#### 9. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L266` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L218) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L266)

```diff
-       return uk.has(kk.site) ? kk.error instanceof WebAssembly.RuntimeError || (0, fk.k)(kk.error) : !Ek.has(kk.site) && kk.error instanceof Error
+       return `${CC.appName}!${CC.appId}`
```

#### 10. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L268-L273` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L220) · [Before (L268-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L268-L273)

```diff
-     const ak = "events",
-       Wk = [],
-       tk = "debugLog",
-       Xk = "terrainTextures",
-       Bk = "sunShadowTextures",
-       ck = new TextDecoder;
+     const tC = new Map;
```

#### 11. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L276-L289` → after: `L223-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L223-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L223-L232) · [Before (L276-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L276-L289)

```diff
-       const {
-         site: ik,
-         error: fk,
-         header: Sk
-       } = kk, bk = Sk ? (0, Dk.le)(Sk.lastError) : "noFrame", rk = `CORE-${ik===Hk?bk:ik}`, Pk = null === fk || void 0 === fk ? "" : ` ${(0,Mk.j)(fk)}`, mk = {
-         site: ik,
-         wasmBuild: ek.wasm,
-         clientVersion: ek.client
-       };
-       return Sk && (mk.status = String(Sk.status), mk.lastError = bk, mk.lastErrorCode = String(Sk.lastError), mk.lastErrorDetail = String(Sk.lastErrorDetail), mk.errorCount = String(Sk.errorCount), mk.frameIndex = String(Sk.frameIndex), mk.tickIndex = String(Sk.tickIndex)), {
-         code: rk,
-         message: `core ${ik}, last error ${bk};${Pk}`,
-         details: mk
-       }
+       const ZC = aC(CC);
+       jC(ZC, zC),
+         function(CC, zC) {
+           const ZC = LC();
+           ZC && ZC.postMessage({
+             key: CC,
+             fid: zC
+           });
+           UC()
+         }(ZC, zC)
```

#### 12. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L291-L315` → after: `L234-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L234-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L234-L271) · [Before (L291-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L291-L315)

```diff
-     class Zk {
-       constructor(kk, ek, ik) {
-         this.core = kk, this.memory = ek, this.handlers = ik, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = nu … [truncated]
-           ptr: 0,
-           len: 0,
-           net: Wk,
-           netOffsets: this.netOffsets,
-           kind: "none"
-         }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new mk(kk, ek)
-       }
-       get netKeptFrames() {
-         return this.keptFrames
-       }
-       get netWrittenSinceFrame() {
-         return this.rings.net.cursor - this.netKept
-       }
- ... (9 more removed lines; see GitHub link above)
+ 
+     function jC(CC, zC) {
+       const ZC = tC.get(CC);
+       if (ZC)
+         for (const QC of ZC) QC(zC)
+     }
+     let yC = null;
+ 
+     function LC() {
+       return !yC && "BroadcastChannel" in self && (yC = new BroadcastChannel("[Firebase] FID Change"), yC.onmessage = CC => {
+         jC(CC.data.key, CC.data.fid)
+       }), yC
+     }
+ 
+     function UC() {
+       0 === tC.size && yC && (yC.close(), yC = null)
+ ... (22 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L318-L325` → after: `L387-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L387-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L387-L391) · [Before (L318-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L318-L325)

```diff
-       get isStopped() {
-         return this.stopped
-       }
-       frame(kk, ek) {
-         var ik;
-         let Sk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (this.stopped) return !1;
-         if (!this.writePendingInput()) return !1;
+     }
+     async function Qz(CC) {
+       let zC = await wz(CC.appConfig);
+       for (; 1 === zC.registrationStatus;) await rC(100), zC = await wz(CC.appConfig);
+       if (0 === zC.registrationStatus) {
```

#### 14. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L327-L392` → after: `L393-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L393-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L393-L396) · [Before (L327-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L327-L392)

```diff
-           input: bk,
-           net: rk,
-           worker: Pk,
-           cmd: mk
-         } = this.rings, Mk = rk.cursor, Kk = ek && !this.drawsHeld;
-         let wk = Dk.T.Fatal;
-         const lk = bk.cursor,
-           yk = Pk.cursor,
-           Yk = mk.cursor;
-         let Lk, Ck = null;
-         const sk = this.handlers.onSends;
-         try {
-           const ek = (Kk ? Dk.pb.Draws : 0) | (Sk ? Dk.pb.NetAll : 0) | (sk ? Dk.pb.StopForSends : 0);
-           wk = (0, nk.g)((() => {
-             let ik = this.core.frame(kk, lk, rk.cursor, yk, ek, Yk);
-             for (; ik === Dk.zd && sk;) {
- ... (50 more removed lines; see GitHub link above)
+           installationEntry: zC,
+           registrationPromise: ZC
+         } = await Zz(CC);
+         return ZC || zC
```

#### 15. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L394-L401` → after: `L398-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L398-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L398-L437) · [Before (L394-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L394-L401)

```diff
-       handEnvEvents() {
-         for (const Sk of this.graceEvents) {
-           if (this.stopped) return !1;
-           try {
-             var kk, ek;
-             null === (kk = (ek = this.handlers).onReconnectGrace) || void 0 === kk || kk.call(ek, Sk)
-           } catch (fk) {
-             return this.crashOn(jk, fk), !1
+       return zC
+     }
+ 
+     function wz(CC) {
+       return zz(CC, (CC => {
+         if (!CC) throw dC.create("installation-not-found");
+         return bz(CC)
+       }))
+     }
+ 
+     function bz(CC) {
+       return 1 === (zC = CC).registrationStatus && zC.registrationTime + vC < Date.now() ? {
+         fid: CC.fid,
+         registrationStatus: 0
+       } : CC;
+       var zC
+ ... (24 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L404-L410` → after: `L499-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L499-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L499-L509) · [Before (L404-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L404-L410)

```diff
-         for (const Sk of this.envEvents) {
-           if (this.stopped) return !1;
-           try {
-             var ik, Dk;
-             null === (ik = (Dk = this.handlers).onEnvEvent) || void 0 === ik || ik.call(Dk, Sk)
-           } catch (fk) {
-             return this.crashOn(sk, fk), !1
+       }));
+       return zC ? await zC : QC.authToken
+     }
+ 
+     function oz(CC) {
+       return zz(CC, (CC => {
+         if (!qz(CC)) throw dC.create("not-registered");
+         const zC = CC.authToken;
+         return 1 === (ZC = zC).requestStatus && ZC.requestTime + vC < Date.now() ? Object.assign(Object.assign({}, CC), {
+           authToken: {
+             requestStatus: 0
```

#### 17. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L412-L419` → after: `L511-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L511-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L511-L522) · [Before (L412-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L412-L419)

```diff
-         }
-         return !this.stopped
-       }
-       setEventWalker(kk) {
-         this.eventWalker = kk
-       }
-       writePendingInput() {
-         if (this.stopped) return !1;
+         }) : CC;
+         var ZC
+       }))
+     }
+ 
+     function qz(CC) {
+       return void 0 !== CC && 2 === CC.registrationStatus
+     }
+     async function Fz(CC) {
+       let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       const ZC = CC;
+       await async function(CC) {
```

#### 18. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L421-L438` → after: `L524-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L524-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L524-L549) · [Before (L421-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L421-L438)

```diff
-           input: kk
-         } = this.rings;
-         try {
-           const ek = this.unsentUiPrefs;
-           ek && kk.writeRecord(Dk.Hb.UiPrefs, 0, ek.nametagCutDistance, 0, (0, Dk.Qe)(ek)) && (this.unsentUiPrefs = null);
-           const ik = this.unsentEnvPrefs;
-           ik && kk.writeRecord(Dk.Hb.EnvPrefs, (0, Dk.ne)(ik), ik.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
-           const fk = this.unsentLookPrefs;
-           fk && kk.writeRecord(Dk.Hb.Sensitivity, 0, fk.mouse, fk.touch, (0, Kk.k)(fk.fovPercent)) && (this.unsentLookPrefs = null);
-           let Sk = 0;
-           for (const {
-               aux: Dk,
-               payload: bk
-             }
-             of this.unsentOptions) {
-             if (!kk.writeOptions(Dk, bk)) {
- ... (2 more removed lines; see GitHub link above)
+           registrationPromise: zC
+         } = await Zz(CC);
+         zC && await zC
+       }(ZC);
+       return (await fz(ZC, zC)).token
+     }
+ 
+     function Wz(CC) {
+       return dC.create("missing-app-config-values", {
+         valueName: CC
+       })
+     }
+     const Nz = "installations",
+       Mz = CC => {
+         const zC = CC.getProvider("app").getImmediate(),
+           ZC = function(CC) {
+ ... (10 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L440-L444` → after: `L551-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L551-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L551-L556) · [Before (L440-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L440-L444)

```diff
-             Sk++
-           }
-           Sk > 0 && this.unsentOptions.splice(0, Sk)
-         } catch (ek) {
-           return this.crash(lk, ek), !1
+           }(zC);
+         return {
+           app: zC,
+           appConfig: ZC,
+           heartbeatServiceProvider: (0, QC.D)(zC, "heartbeat"),
+           _delete: () => Promise.resolve()
```

#### 20. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L446-L458` → after: `L558-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L558-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L558-L571) · [Before (L446-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L446-L458)

```diff
-         return !0
-       }
-       setHoldDraws(kk) {
-         this.drawsHeld = kk
-       }
-       setUiPrefs(kk) {
-         this.unsentUiPrefs = {
-           ...kk
-         }
-       }
-       setEnvPrefs(kk) {
-         this.unsentEnvPrefs = {
-           ...kk
+       },
+       gz = CC => {
+         const zC = CC.getProvider("app").getImmediate(),
+           ZC = (0, QC.D)(zC, Nz).getImmediate();
+         return {
+           getId: () => async function(CC) {
+             const zC = CC,
+               {
+                 installationEntry: ZC,
+                 registrationPromise: QC
+               } = await Zz(zC);
+             return QC ? QC.catch(console.error) : fz(zC).catch(console.error), ZC.fid
+           }(ZC),
+           getToken: CC => Fz(ZC, CC)
```

#### 21. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L461-L463` → after: `L601-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L601-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L601-L674) · [Before (L461-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L461-L463)

```diff
-       setLookPrefs(kk) {
-         this.unsentLookPrefs = {
-           ...kk
+       return CC
+     }
+ 
+     function xz(CC) {
+       return Promise.all(CC.map((CC => CC.catch((CC => CC)))))
+     }
+ 
+     function Jz(CC, zC) {
+       const ZC = function(CC, zC) {
+           let ZC;
+           return window.trustedTypes && (ZC = window.trustedTypes.createPolicy(CC, zC)), ZC
+         }("firebase-js-sdk-policy", {
+           createScriptURL: Az
+         }),
+         QC = document.createElement("script"),
+         wC = `${pz}?l=${CC}&id=${zC}`;
+ ... (58 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L466-L511` → after: `L677-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L677-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L677-L682) · [Before (L466-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L466-L511)

```diff
-       queueOptions(kk, ek) {
-         return !this.isStopped && (ek.byteLength > Dk.sc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
-           aux: kk,
-           payload: ek
-         }), !0))
-       }
-       setChunkCap(kk) {
-         return this.callCore("setChunkCap", null, (ek => ek.QSk(kk)))
-       }
-       shedMemory(kk) {
-         const ek = this.callCore("shedMemory", null, (ek => ek.XSk(kk)));
-         return 0 === ek ? null : ek
-       }
-       addDistanceInUse() {
-         const kk = this.callCore("addDistanceInUse", null, (kk => kk.Rfk()));
-         return 0 === kk ? null : kk
- ... (30 more removed lines; see GitHub link above)
+     }
+     const iz = new class {
+       constructor() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
+           zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
+         this.throttleMetadata = CC, this.intervalMillis = zC
```

#### 23. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L513-L519` → after: `L684-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L684-L685) · [Before (L513-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L513-L519)

```diff
-       setBlockColours(kk) {
-         let {
-           blocks: ek,
-           counts: ik,
-           values: Dk
-         } = kk;
-         return this.callCore("setBlockColours", !1, (kk => kk.Qik(ek, ik, Dk)))
+       getThrottleMetadata(CC) {
+         return this.throttleMetadata[CC]
```

#### 24. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L521-L522` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L687-L688) · [Before (L521-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L521-L522)

```diff
-       terrainTextureNames() {
-         return this.callCore(Xk, [], (kk => kk.ZSk()))
+       setThrottleMetadata(CC, zC) {
+         this.throttleMetadata[CC] = zC
```

#### 25. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L524-L525` → after: `L690-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L690-L691) · [Before (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L524-L525)

```diff
-       setTerrainTextures(kk, ek, ik, Dk) {
-         return this.callCore(Xk, !1, (fk => fk.WSk(kk, ik, ek, Dk)))
+       deleteThrottleMetadata(CC) {
+         delete this.throttleMetadata[CC]
```

#### 26. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L527-L537` → after: `L693-L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L693-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L693-L758) · [Before (L527-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L527-L537)

```diff
-       setShaderPack(kk, ek, ik, Dk, fk, Sk) {
-         return this.callCore("setShaderPack", !1, (bk => {
-           var rk, Pk;
-           return null !== (rk = null === (Pk = bk.Oik) || void 0 === Pk ? void 0 : Pk.call(bk, kk, ek, ik, Dk, fk, Sk)) && void 0 !== rk && rk
-         }))
-       }
-       sunShadowWantedTextures() {
-         return this.callCore(Bk, null, (kk => {
-           var ek, ik;
-           return null !== (ek = null === (ik = kk.BSk) || void 0 === ik ? void 0 : ik.call(kk)) && void 0 !== ek ? ek : null
-         }))
+     };
+ 
+     function vz(CC) {
+       return new Headers({
+         Accept: "application/json",
+         "x-goog-api-key": CC
+       })
+     }
+     async function ez(CC) {
+       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iz,
+         ZC = arguments.length > 2 ? arguments[2] : void 0;
+       const {
+         appId: QC,
+         apiKey: wC,
+         measurementId: bC
+       } = CC.options;
+ ... (50 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L539-L540` → after: `L760-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L760-L761) · [Before (L539-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L539-L540)

```diff
-       setSunShadowTexture(kk, ek, ik, Dk, fk) {
-         this.callCore(Bk, void 0, (Sk => {
+       try {
+         const zC = await async function(CC) {
```

#### 28. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L542-L665` → after: `L763-L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L763-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L763-L778) · [Before (L542-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L542-L665)

```diff
-           null === (bk = Sk.aSk) || void 0 === bk || bk.call(Sk, kk, ek, ik, Dk, fk)
-         }))
-       }
-       takeSunShadowWarnings() {
-         return this.callCore(Bk, [], (kk => {
-           var ek, ik;
-           return null !== (ek = null === (ik = kk.TSk) || void 0 === ik ? void 0 : ik.call(kk)) && void 0 !== ek ? ek : []
-         }))
-       }
-       sunShadowsHeld() {
-         return this.callCore(Bk, null, (kk => {
-           var ek, ik;
-           return null !== (ek = null === (ik = kk.cSk) || void 0 === ik ? void 0 : ik.call(kk)) && void 0 !== ek ? ek : null
-         }))
-       }
-       callCore(kk, ek, ik) {
- ... (108 more removed lines; see GitHub link above)
+           const {
+             appId: ZC,
+             apiKey: QC
+           } = CC, wC = {
+             method: "GET",
+             headers: vz(QC)
+           }, bC = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", ZC), nC = await fetch(bC, wC);
+           if (200 !== nC.status && 304 !== nC.status) {
+             let CC = "";
+             try {
+               const ZC = await nC.json();
+               (null === (zC = ZC.error) || void 0 === zC ? void 0 : zC.message) && (CC = ZC.error.message)
+             } catch (fC) {}
+             throw Rz.create("config-fetch-failed", {
+               httpStatus: nC.status,
+               responseMessage: CC
```

#### 29. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L668` → after: `L781-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L781-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L781-L795) · [Before (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L668)

```diff
-           Mk = kk + (0, Dk.Ie)(Pk)
+           return nC.json()
+         }(CC);
+         return nC.deleteThrottleMetadata(oC), zC
+       } catch (FC) {
+         const zC = FC;
+         if (! function(CC) {
+             if (!(CC instanceof bC.j) || !CC.customData) return !1;
+             const zC = Number(CC.customData.httpStatus);
+             return 429 === zC || 500 === zC || 503 === zC || 504 === zC
+           }(zC)) {
+           if (nC.deleteThrottleMetadata(oC), qC) return Pz.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${qC} provided in the "measurementId" field in the local Firebase config. [${null===zC||void 0===zC?void 0:zC.me … [truncated]
+             appId: oC,
+             measurementId: qC
+           };
+           throw FC
```

#### 30. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L670-L687` → after: `L797-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L797-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L797-L802) · [Before (L670-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L670-L687)

```diff
-         return Sk
-       }
-       takeSends(kk) {
-         this.atSendsStop = !0;
-         try {
-           kk()
-         } catch (ek) {
-           this.crashOn(Fk, ek)
-         } finally {
-           this.atSendsStop = !1
-         }
-         return !this.stopped
-       }
-       forEachNetOut(kk) {
-         this.forEachOut(Yk, "net-out", Dk.ub.NetOutPtr, Dk.ub.NetOutLen, Dk.ic, 0, ((ek, ik, fk, Sk) => {
-           const bk = (0, Dk.xe)(ik);
- ... (2 more removed lines; see GitHub link above)
+         const QC = 503 === Number(null === (fC = null === zC || void 0 === zC ? void 0 : zC.customData) || void 0 === fC ? void 0 : fC.httpStatus) ? (0, bC.s)(wC, nC.intervalMillis, 30) : (0, bC.s)(wC, nC.intervalMillis),
+           WC = {
+             throttleEndTimeMillis: Date.now() + QC,
+             backoffCount: wC + 1
+           };
+         return nC.setThrottleMetadata(oC, WC), Pz.debug(`Calling attemptFetch again in ${QC} millis`), hz(CC, WC, ZC, nC)
```

#### 31. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L689-L694` → after: `L804-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L804-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L804-L807) · [Before (L689-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L689-L694)

```diff
-       forEachWorkerOut(kk) {
-         this.forEachOut(Lk, "worker-out", Dk.ub.WorkerOutPtr, Dk.ub.WorkerOutLen, Dk.Sd, 4, ((ek, ik, fk, Sk) => {
-           const bk = 255 & ek,
-             rk = bk === Dk.ge.Init ? this.initOf(fk, Sk) : fk;
-           null !== rk && kk(bk, ek >>> 8 & 16777215, rk)
-         }))
+     }
+     class Kz {
+       constructor() {
+         this.listeners = []
```

#### 32. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L696-L702` → after: `L809-L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L809-L810) · [Before (L696-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L696-L702)

```diff
-       initOf(kk, ek) {
-         const ik = this.memory().buffer;
-         if (kk.byteLength !== Dk.yb) return this.crash(Lk, `worker-out Init record at ${ek} is ${kk.byteLength} bytes, not a view`), null;
-         const fk = new DataView(kk.buffer, kk.byteOffset, Dk.yb),
-           Sk = fk.getUint32(0, !0),
-           bk = fk.getUint32(4, !0);
-         return Sk + bk > ik.byteLength ? (this.crash(Lk, `worker-out Init record at ${ek} names ${bk} bytes at ${Sk} outside ${ik.byteLength} bytes of memory`), null) : new Uint8Array(ik, Sk, bk)
+       addEventListener(CC) {
+         this.listeners.push(CC)
```

#### 33. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L704-L720` → after: `L812-L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L812-L813) · [Before (L704-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L704-L720)

```diff
-       forEachOut(kk, ek, ik, fk, Sk, bk, rk) {
-         if (!this.headerReadable()) return;
-         const Pk = this.headerView(),
-           mk = Pk[ik],
-           Mk = Pk[fk];
-         if (0 === Mk) return;
-         const Kk = this.memory().buffer;
-         if (mk % 4 !== 0 || mk + Mk > Kk.byteLength) return void this.crash(kk, `${ek} of ${Mk} bytes at ${mk} outside ${Kk.byteLength} bytes of memory`);
-         const xk = new DataView(Kk, mk, Mk);
-         let nk = 0;
-         for (; nk < Mk;) {
-           const ik = nk + Sk,
-             fk = ik <= Mk ? xk.getUint32(nk + bk, !0) : -1;
-           if (fk < 0 || fk > Mk - ik) return void this.crash(kk, `${ek} record at ${nk} overruns its ${Mk} bytes`);
-           if (rk(xk.getUint32(nk, !0), xk.getUint32(nk + 4, !0), new Uint8Array(Kk, mk + ik, fk), nk), this.stopped) return;
-           nk = ik + (0, Dk.Ie)(fk)
- ... (1 more removed lines; see GitHub link above)
+       abort() {
+         this.listeners.forEach((CC => CC()))
```

#### 34. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L722-L737` → after: `L815-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L815-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L815-L840) · [Before (L722-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L722-L737)

```diff
-       forEachEvent(kk) {
-         if (this.stopped || null === this.lastHeader) return;
-         const ek = this.headerView(),
-           ik = ek[Dk.ub.EventsPtr],
-           fk = ek[Dk.ub.EventsLen];
-         if (0 === fk) return;
-         const Sk = this.memory().buffer;
-         if (ik % 4 !== 0 || ik + fk > Sk.byteLength) return void this.crash(ak, `events of ${fk} bytes at ${ik} outside ${Sk.byteLength} bytes of memory`);
-         const bk = new DataView(Sk, ik, fk);
-         let rk = 0;
-         for (; rk < fk;) {
-           const ek = rk + Dk.eb,
-             ik = ek <= fk ? bk.getUint32(rk, !0) : -1,
-             Sk = ik >>> 16;
-           if (ik < 0 || Sk > fk - ek) return void this.crash(ak, `event record at ${rk} overruns its ${fk} bytes`);
-           kk(65535 & ik, bk, ek, Sk), rk = ek + (0, Dk.Ie)(Sk)
+     }
+     let Yz, dz;
+ 
+     function mz(CC) {
+       dz = CC
+     }
+ 
+     function Hz(CC) {
+       Yz = CC
+     }
+     async function Ez(CC, zC, ZC, QC, wC, nC, fC) {
+       var oC;
+       const qC = ez(CC);
+       qC.then((zC => {
+         ZC[zC.measurementId] = zC.appId, CC.options.measurementId && zC.measurementId !== CC.options.measurementId && Pz.warn(`The measurement ID in the local Firebase config (${CC.options.measurementId}) does not match the measurement ID fetched from the server (${zC.measurement … [truncated]
+       })).catch((CC => Pz.error(CC))), zC.push(qC);
+ ... (10 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L740-L770` → after: `L857-L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L857-L858) · [Before (L740-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L740-L770)

```diff
-       crashOn(kk, ek) {
-         ek instanceof fk.c ? this.crash(ak, ek.message) : this.crash(kk, ek)
-       }
-       crash(kk, ek) {
-         this.stopped || (this.stopped = !0, this.handlers.onCrash({
-           site: kk,
-           error: ek,
-           header: this.lastHeader
-         }))
-       }
-       headerWord(kk) {
-         return this.headerReadable() ? this.headerView()[kk] : 0
-       }
-       headerReadable() {
-         return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
-       }
- ... (15 more removed lines; see GitHub link above)
+       _delete() {
+         return delete Xz[this.app.options.appId], Promise.resolve()
```

#### 36. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L772-L774` → after: `L860-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L860-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L860-L911) · [Before (L772-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L772-L774)

```diff
-       headerView() {
-         const kk = this.memory().buffer;
-         return kk !== this.headerBuffer && (this.headerBuffer = kk, this.header = new Uint32Array(kk, this.core.Xn(), Dk.tb)), this.header
+     }
+     let Xz = {},
+       cz = [];
+     const uz = {};
+     let rz, sz, Tz = "dataLayer",
+       az = "gtag",
+       tz = !1;
+ 
+     function Dz(CC) {
+       if (tz) throw Rz.create("already-initialized");
+       CC.dataLayerName && (Tz = CC.dataLayerName), CC.gtagName && (az = CC.gtagName)
+     }
+ 
+     function jz(CC, zC, ZC) {
+       ! function() {
+         const CC = [];
+ ... (36 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L787-L789` → after: `L925-L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L925-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L925-L939) · [Before (L787-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L787-L789)

```diff
-       fk = {
-         scanned: !1
-       };
+       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const ZC = (0, QC.D)(CC, Sz);
+       if (ZC.isInitialized()) {
+         const CC = ZC.getImmediate();
+         if ((0, bC.z)(zC, ZC.getOptions())) return CC;
+         throw Rz.create("already-initialized")
+       }
+       return ZC.initialize({
+         options: zC
+       })
+     }
+     async function Uz() {
+       if ((0, bC.R)()) return !1;
+       if (!(0, bC.n)()) return !1;
+       if (!(0, bC._)()) return !1;
```

#### 38. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L791-L793` → after: `L941-L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L941-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L941-L943) · [Before (L791-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L791-L793)

```diff
-         return kk()
-       } finally {
-         fk = null
+         return await (0, bC.mb)()
+       } catch (CC) {
+         return !1
```

#### 39. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L797-L811` → after: `L947-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L947-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L947-L956) · [Before (L797-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L797-L811)

```diff
-     function bk() {
-       const kk = fk;
-       if (null === kk) return (0, Dk.c)();
-       const ek = (0, Dk.c)(!kk.scanned);
-       return kk.scanned = !0, ek
-     }
-   },
-   40415: (kk, ek, ik) => {
-     ik.d(ek, {
-       e: () => Dk
-     });
-     const Dk = {
-       webgpu: "rust_webgpu",
-       webgl: "rust_webgl2",
-       webgl1: "rust_webgl1"
+     function Bz(CC, zC, ZC) {
+       CC = (0, bC.L)(CC), async function(CC, zC, ZC, QC) {
+         if (QC && QC.global) return CC("set", {
+           screen_name: ZC
+         }), Promise.resolve();
+         CC("config", await zC, {
+           update: !0,
+           screen_name: ZC
+         })
+       }(sz, Xz[CC.app.options.appId], zC, ZC).catch((CC => Pz.error(CC)))
```

#### 40. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L813-L816` → after: `L958-L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L958-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L958-L966) · [Before (L813-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L813-L816)

```diff
-   },
-   40434: (kk, ek, ik) => {
-     function Dk() {
-       return ik(40440)
+     async function Oz(CC) {
+       return CC = (0, bC.L)(CC), async function(CC, zC) {
+         const ZC = await zC;
+         return new Promise(((zC, QC) => {
+           CC("get", ZC, "client_id", (CC => {
+             CC || QC(Rz.create("no-client-id")), zC(CC)
+           }))
+         }))
+       }(sz, Xz[CC.app.options.appId])
```

#### 41. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L819-L820` → after: `L969-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L969-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L969-L999) · [Before (L819-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L819-L820)

```diff
-     function fk() {
-       return ik(40447)
+     function kz(CC, zC, ZC) {
+       CC = (0, bC.L)(CC), async function(CC, zC, ZC, QC) {
+         if (QC && QC.global) return CC("set", {
+           user_id: ZC
+         }), Promise.resolve();
+         CC("config", await zC, {
+           update: !0,
+           user_id: ZC
+         })
+       }(sz, Xz[CC.app.options.appId], zC, ZC).catch((CC => Pz.error(CC)))
+     }
+ 
+     function Vz(CC, zC, ZC) {
+       CC = (0, bC.L)(CC), async function(CC, zC, ZC, QC) {
+         if (QC && QC.global) {
+           const zC = {};
+ ... (15 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L824-L836` → after: `L1003-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L1003-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/267.js#L1003-L1039) · [Before (L824-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/267.js#L824-L836)

```diff
-       return ["pl", "ru", "tr", "uk", "vi"].includes(kk)
-     }
-     ik.d(ek, {
-       e: () => Sk,
-       i: () => Dk,
-       j: () => fk
-     })
-   },
-   40440: (kk, ek, ik) => {
-     kk.exports = ik.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
-   },
-   40447: (kk, ek, ik) => {
-     kk.exports = ik.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
+       sz ? sz("set", CC) : Hz(CC)
+     }
+ 
+     function ZZ(CC, zC, ZC, QC) {
+       CC = (0, bC.L)(CC), async function(CC, zC, ZC, QC, wC) {
+         if (wC && wC.global) CC("event", ZC, QC);
+         else {
+           const wC = await zC;
+           CC("event", ZC, Object.assign(Object.assign({}, QC), {
+             send_to: wC
+           }))
+         }
+       }(sz, Xz[CC.app.options.appId], zC, ZC, QC).catch((CC => Pz.error(CC)))
+     }
+ 
+     function QZ(CC) {
+ ... (21 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/268.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/268.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658)

#### 1. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4-L72` → after: `L5-L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L5-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/268.js#L5-L4026) · [Before (L4-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/268.js#L4-L72)

```diff
-   40501: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => bk,
-       g: () => Sk,
-       h: () => rk
-     });
-     let Dk = null,
-       fk = null;
- 
-     function Sk(kk, ek) {
-       return Dk = kk, fk = null, rk(ek), () => {
-         Dk === kk && (Dk = null, fk = null)
-       }
-     }
- 
-     function bk() {
- ... (53 more removed lines; see GitHub link above)
+     40364: (CC, zC, ZC) => {
+         ZC.r(zC), ZC.d(zC, {
+           ActionCodeOperation: () => NC,
+           ActionCodeURL: () => Oz,
+           AuthCredential: () => uz,
+           AuthErrorCodes: () => PC,
+           EmailAuthCredential: () => jz,
+           EmailAuthProvider: () => Vz,
+           FacebookAuthProvider: () => QZ,
+           FactorId: () => oC,
+           GithubAuthProvider: () => bZ,
+           GoogleAuthProvider: () => wZ,
+           OAuthCredential: () => Lz,
+           OAuthProvider: () => ZZ,
+           OperationType: () => WC,
+           PhoneAuthCredential: () => Bz,
+ ... (4006 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/269.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/269.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b)

#### 1. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L4-L6` → after: `L4-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L4-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/269.js#L4-L141) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/269.js#L4-L6)

```diff
-   40641: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       gamePackSource: () => Sk
+   40412: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       $: () => Vz,
+       $d: () => gz,
+       $e: () => BZ,
+       $f: () => cZ,
+       Ab: () => rC,
+       Ac: () => RC,
+       Ad: () => SC,
+       Be: () => ZQ,
+       Bf: () => hZ,
+       Cc: () => Fz,
+       Cg: () => NZ,
+       D: () => DC,
+       Dd: () => gC,
+       Eb: () => ZZ,
+ ... (122 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L8-L9` → after: `L143-L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L143-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/269.js#L143-L889) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/269.js#L8-L9)

```diff
-     var Dk = ik(4915),
-       fk = ik(1459);
+     const QC = -2147483648,
+       wC = 12,
+       bC = 12,
+       nC = 4095,
+       fC = {
+         Lifeform: 1,
+         Throwable: 2,
+         Mesh: 3,
+         Audio: 4,
+         Item: 5
+       },
+       oC = {
+         Alive: 1,
+         Crouching: 2,
+         OnGround: 4,
+         InFluid: 8,
+ ... (731 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L12-L14` → after: `L892-L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L892-L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/269.js#L892-L1362) · [Before (L12-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/269.js#L12-L14)

```diff
-       return {
-         packKey: async ek => (await fk.b.getGame(kk, ek, !0)).customTexturePackKey,
-         fetchPack: Dk.e
+       return FZ.buffer !== CC.buffer && (FZ = new Uint8Array(CC.buffer)), FZ
+     }
+ 
+     function NZ(CC, zC, ZC) {
+       const QC = CC.RM(66, zC, 4);
+       if (QC < 0) return !1;
+       return CC.view.setUint8(QC + 0, ZC), !0
+     }
+ 
+     function MZ(CC, zC, ZC) {
+       const QC = CC.RM(67, zC, 4);
+       if (QC < 0) return !1;
+       return CC.view.setUint32(QC + 0, ZC, !0), !0
+     }
+ 
+     function gZ(CC, zC, ZC) {
+ ... (455 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/270.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/270.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3)

#### 1. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/270.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/270.js#L2)

```diff
- export const ids = [269, 270];
+ export const ids = [270];
```

#### 2. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L4-L6` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/270.js#L4-L9) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/270.js#L4-L6)

```diff
-   40641: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       gamePackSource: () => Sk
+   41418: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => pC,
+       e: () => fC,
+       h: () => nC,
+       j: () => qC
```

#### 3. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8-L9` → after: `L11-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/270.js#L11-L13) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/270.js#L8-L9)

```diff
-     var Dk = ik(4915),
-       fk = ik(1459);
+     var QC = ZC(37138),
+       wC = ZC(38538),
+       bC = ZC(38529);
```

#### 4. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L11` → after: `L15-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L15-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/270.js#L15-L36) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/270.js#L11)

```diff
-     function Sk(kk) {
+     function nC(CC, zC, ZC, QC) {
+       const wC = bC.x;
+       zC.fill(0), CC.gravity.toArray(zC, wC.gravity), CC.colorDead.toArray(zC, wC.colorDead), ZC[wC.ramp] = CC.useRampGradients ? 1 : 0;
+       const nC = CC.getColorGradients(),
+         fC = NC(CC, nC, "colour", QC);
+       ZC[wC.colorCount] = fC;
+       for (let bC = 0; bC < fC; bC++) {
+         var oC;
+         const CC = nC[MC(nC, bC)];
+         zC[wC.colorPositions + bC] = CC.gradient, CC.color1.toArray(zC, wC.color1 + 4 * bC), (null !== (oC = CC.color2) && void 0 !== oC ? oC : CC.color1).toArray(zC, wC.color2 + 4 * bC)
+       }
+       const qC = CC.getVelocityGradients(),
+         FC = NC(CC, qC, "Np", QC);
+       ZC[wC.velocityCount] = FC;
+       for (let bC = 0; bC < FC; bC++) GC(zC, wC.Np + 4 * bC, qC[MC(qC, bC)]);
+       const WC = CC.useRampGradients ? CC.getColorRemapGradients() : null,
+ ... (6 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L13-L14` → after: `L38-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L38-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/270.js#L38-L93) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/270.js#L13-L14)

```diff
-         packKey: async ek => (await fk.b.getGame(kk, ek, !0)).customTexturePackKey,
-         fetchPack: Dk.e
+         key: [],
+         texels: new Uint8Array(4 * bC.k)
+       }
+     }
+     const oC = [];
+ 
+     function qC(CC, zC) {
+       return FC(CC, oC), !PC(oC, zC.key) && (zC.key.length = 0, zC.key.push(...oC), zC.key.length > 0 && function(CC, zC) {
+         for (let ZC = 0; ZC < bC.k; ZC++) wC.k.GetCurrentGradient(ZC / bC.k, CC, ((CC, zC, ZC) => {
+           QC.Color3.LerpToRef(CC.color, zC.color, ZC, WC)
+         })), zC[4 * ZC] = 255 * WC.r, zC[4 * ZC + 1] = 255 * WC.g, zC[4 * ZC + 2] = 255 * WC.b, zC[4 * ZC + 3] = 255
+       }(CC.getRampGradients(), zC.texels), !0)
+     }
+ 
+     function FC(CC, zC) {
+       zC.length = 0;
+ ... (40 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L18-L24` → after: `L100-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L100-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/270.js#L100-L104) · [Before (L18-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/270.js#L18-L24)

```diff
-   50545: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       fetchGuestContext: () => xk,
-       guestJoinTarget: () => yk,
-       guestJoinWithPack: () => Uk,
-       guestPackForGame: () => nk,
-       invalidateGuestTrafficCode: () => pk
+   41448: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       createLiteRendererAsync: () => uo,
+       liteBabylonBackend: () => rC,
+       setPipelineFailureHook: () => yw
```

#### 7. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L26-L33` → after: `L106-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L106-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/270.js#L106-L146) · [Before (L26-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/270.js#L26-L33)

```diff
-     var Dk = ik(1177),
-       fk = ik(1459),
-       Sk = ik(99),
-       bk = ik(35986),
-       rk = ik(1104),
-       Pk = ik(40326),
-       mk = ik(40641),
-       Mk = ik(40289);
+     var QC = ZC(37138),
+       wC = ZC(37456),
+       bC = ZC(37729),
+       nC = ZC(37076),
+       fC = ZC(37740);
+     class oC extends fC.b {
+       constructor() {
+         for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
+         super(...zC), this.color = new QC.Color3(1, 1, 1), this.alpha = 1, this.material = {
+           name: "colorShader",
+           uniqueId: zC[0].Km().getUniqueId(),
+           shaderPath: "color",
+           fillMode: 4,
+           sideOrientation: null,
+           alphaMode: 2,
+           forceDepthWrite: !1,
+ ... (25 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L35-L36` → after: `L148-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L148-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/270.js#L148-L307) · [Before (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/270.js#L35-L36)

```diff
-     function Kk() {
-       if (Sk.featureFlags.useTurnstile) throw new Pk.TurnstilePageError
+     function PC(CC, zC, ZC, QC) {
+       let wC = 0;
+       return CC.isVerticesDataPresent("color") && (wC |= WC), "none" !== zC && (wC |= NC), "thin" === zC && (wC |= MC, CC.isVerticesDataPresent("instanceColor") && (wC |= gC)), QC.fogEnabled && CC.applyFog && 0 !== QC.fogMode && (wC |= SC), ZC >= 1 && (wC |= pC), wC
+     }
+ 
+     function GC(CC, zC) {
+       CC.updateColor4("color", zC.color, zC.alpha)
+     }
+     var RC = ZC(37673),
+       AC = ZC(37290),
+       xC = ZC(37175),
+       JC = ZC(37050),
+       IC = ZC(37660),
+       iC = ZC(37670),
+       vC = ZC(37063),
+       eC = ZC(37069),
+ ... (144 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L40` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/270.js#L311) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/270.js#L40)

```diff
-       return (0, rk.fetchAnonymousUserContext)().catch((kk => (console.warn("the guest context didn't load", kk), null)))
+       throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
```

#### 10. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L42-L48` → after: `L313-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L313-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/270.js#L313-L359) · [Before (L42-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/270.js#L42-L48)

```diff
-     async function nk(kk, ek, ik, Dk) {
-       try {
-         const fk = await ik;
-         if (null === fk) return void console.warn(`the texture pack step for ${kk} has no guest context: the pack in play stays`);
-         await ek.packForGame(kk, (0, mk.gamePackSource)(fk), Dk)
-       } catch (fk) {
-         console.warn(`the texture pack step for ${kk} failed: the pack in play stays`, fk)
+     const rC = {
+       gZC: uC,
+       EQC: (CC, zC) => {
+         const ZC = new cC(CC.engine, QC.e.FromArray(zC.clearColor), QC.Color3.FromArray(zC.ambientColor));
+         (0, nC.c)(EC, ZC), CC.sS = ZC,
+           function(CC, zC) {
+             const ZC = Object.assign((0, lC.h)(CC, "camera"), {
+               layerMask: 268435455
+             });
+             CC.model.nodes.setWorldSource(ZC.row, CC.model.view.worldMatrix), CC.camera = zC.activeCamera = ZC
+           }(CC, ZC), (0, wC.l)(CC, ((CC, zC, ZC) => (0, bC.i)(CC, zC, ZC, fC.b)))
+       },
+       YQC: () => {},
+       setBabylonFog: () => {},
+       XQC: uC,
+       TQC: () => {},
+ ... (31 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L51-L54` → after: `L362-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L362-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/270.js#L362-L376) · [Before (L51-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/270.js#L51-L54)

```diff
-     async function Uk(kk, ek, ik, Dk) {
-       Kk();
-       const fk = xk();
-       return await ik(((ek, ik) => nk(kk, ek, fk, ik))), yk(kk, ek, Dk(), await fk)
+     class tC {
+       constructor(CC) {
+         this.resources = CC, this.matrixKey = {
+           HW: 0
+         }, this.attributesKey = {
+           HW: 0
+         }, this.inputs = Object.create(null);
+         for (let zC = 0; zC < 4; zC++) this.inputs[`world${zC}`] = new yC(this.matrixKey, 16 * zC, 64, 4)
+       }
+       release() {
+         this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
+       }
+       bind(CC, zC) {
+         this.resources.vertexBufferCreated(this.matrixKey, CC, !0), zC && this.resources.vertexBufferCreated(this.attributesKey, zC, !0)
+       }
```

#### 12. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L56-L64` → after: `L378-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L378-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/270.js#L378-L419) · [Before (L56-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/270.js#L56-L64)

```diff
-     let Hk = null,
-       wk = null;
-     async function lk() {
-       if ((null === Hk || Hk.hasExpired()) && (wk ??= (0, rk.fetchAnonymousUserContext)().then((kk => {
-           Hk = kk
-         })).finally((() => {
-           wk = null
-         })), await wk), null === Hk) throw new Error("no guest context to post as");
-       return Hk.getMetricsCookies()
+     class DC extends tC {
+       constructor(CC, zC, ZC) {
+         super(CC), this.mesh = zC, this.rowStride = void 0, this.matrices = null, this.attributes = null;
+         const QC = this.inputs;
+         let wC = 0;
+         for (const {
+             size: nC
+           }
+           of ZC) wC += nC;
+         for (const {
+             name: nC,
+             offset: fC,
+             size: oC,
+             type: qC
+           }
+           of ZC) QC[nC] = new yC(this.attributesKey, 4 * fC, 4 * wC, oC, !0, qC);
+ ... (26 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L66` → after: `L421-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L421-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/270.js#L421-L495) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/270.js#L66)

```diff
-     async function pk() {
+     class jC extends tC {
+       constructor(CC, zC, ZC) {
+         var QC, wC, bC, nC;
+         super(CC), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (QC = null === ZC | … [truncated]
+           this.inputs[CC] = new yC(this.attributesKey, 4 * this.offsets[zC], 4 * this.rowStride, ZC.strides[CC])
+         })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), CC.batchUploads.set(zC, this), zC.Tm.addOnce((() => {
+           this.release()
+         }))
+       }
+       get packedMatrices() {
+         return this.matrices
+       }
+       packedRowMesh(CC) {
+         const zC = this.packedBatch;
+         return zC.renderSelf ? 0 === CC ? this.packedSource : zC.instances[CC - 1] : zC.instances[CC]
+       }
+ ... (59 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L68` → after: `L497-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L497-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/270.js#L497-L520) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/270.js#L68)

```diff
-       await (null === (kk = Hk) || void 0 === kk ? void 0 : kk.invalidateTrafficCode())
+       let wC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+       const bC = null !== (QC = zC._colorFormat) && void 0 !== QC ? QC : "bgra8unorm",
+         nC = wC ? 15 : 0;
+       return ZC ? {
+         ...CC,
+         targets: [{
+           format: bC,
+           blend: {
+             color: ZC,
+             alpha: BC
+           },
+           writeMask: nC
+         }]
+       } : {
+         ...CC,
+         constants: {
+ ... (8 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L70-L71` → after: `L522-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L522-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/270.js#L522-L686) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/270.js#L70-L71)

```diff
-     async function yk(kk, ek, ik) {
-       let Sk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
+ 
+     function kC(CC, zC) {
+       CC._renderables.push(zC)
+     }
+ 
+     function VC(CC) {
+       var zC, ZC;
+       return null !== (zC = null === (ZC = CC._frameGraph) || void 0 === ZC ? void 0 : ZC._tasks) && void 0 !== zC ? zC : []
+     }
+ 
+     function Cz(CC) {
+       return CC._currentEncoder
+     }
+ 
+     function zz(CC) {
+       return CC.createBindGroupLayout({
+ ... (149 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L73-L83` → after: `L688-L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L688-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/270.js#L688-L1363) · [Before (L73-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/270.js#L73-L83)

```diff
-       const Pk = null !== Sk && void 0 !== Sk ? Sk : await (0, rk.fetchAnonymousUserContext)();
-       if (Hk = Pk, Pk.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
-       const mk = await fk.b.matchmakePlayer(Pk, ek, kk, (0, bk.d)()),
-         xk = performance.now();
-       if (!("gameServerHost" in mk)) throw new Error(`matchmaking refused: ${mk.failReason}`);
-       const nk = Dk.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(mk.gameServerHost);
-       if (nk.isError()) throw new Error(`no socket URL for ${mk.gameServerHost}: ${nk.asError().message}`);
-       const Uk = {
-         endpoint: nk.getValue(),
-         gameNameWithVariation: mk.gameNameWithVariation,
-         lobbyName: mk.lobbyName
+       for (const oC of CC.split("\n")) {
+         const CC = Rz.exec(oC);
+         if (!CC) {
+           bC() && QC.push(nC ? xz(oC, nC, ZC) : oC);
+           continue
+         }
+         const zC = CC[1],
+           qC = CC[2].trim();
+         if ("ifdef" === zC || "ifndef" === zC || "if" === zC) {
+           const CC = bC(),
+             QC = "if" === zC ? Jz(qC, ZC) : ZC.has(qC) === ("ifdef" === zC);
+           wC.push({
+             active: CC && QC,
+             parentActive: CC,
+             taken: QC
+           })
+ ... (660 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L86-L91` → after: `L1474-L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1474-L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/270.js#L1474-L1617) · [Before (L86-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/270.js#L86-L91)

```diff
-         target: {
-           ...await (0, Mk.i)(Pk, Uk, ik, !1),
-           postCookies: lk
-         },
-         matchedAt: xk,
-         freshMs: Mk.e
+         slots: ZC,
+         floats: Math.max(4, 4 * Math.ceil(QC / 4)),
+         wgsl: `${bC.join("\n")}\nstruct ${CC} {\n${wC.join("\n")}\n}\n`,
+         stridedArrays: nC
+       }
+     }
+     const HQ = [{
+         name: "vDiffuseColor",
+         type: "vec4"
+       }, {
+         name: "vDiffuseInfos",
+         type: "vec2"
+       }, {
+         name: "alphaCutOff",
+         type: "float"
+       }, {
+ ... (128 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/271.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/271.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c)

#### 1. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/271.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/271.js#L4)

```diff
-   40650: (kk, ek, ik) => {
+   40888: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/271.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/271.js#L6)

```diff
-       BloxdInformation: () => nk
+       gamePackSource: () => bC
```

#### 3. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L8-L16` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/271.js#L8-L9) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/271.js#L8-L16)

```diff
-     var Dk = ik(1172),
-       fk = ik(60),
-       Sk = ik(99),
-       bk = ik(1410),
-       rk = ik(131),
-       Pk = ik(1033),
-       mk = ik(1066);
-     const Mk = (0, fk.lazy)((() => ik.e(123).then((() => ik(6364))))),
-       Kk = (0, fk.lazy)((() => ik.e(124).then((() => ik(6370)))));
+     var QC = ZC(4925),
+       wC = ZC(1439);
```

#### 4. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L18-L151` → after: `L11-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L11-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/271.js#L11-L15) · [Before (L18-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/271.js#L18-L151)

```diff
-     function xk() {
-       return (0, mk.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, mk.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: "Security Exploit Bounty Program"
-         }), (0, mk.jsx)("p", {
-           children: "We have a program for reporting security exploits. Find an important security flaw in Bloxd? Report it through the process below. Please include steps to reproduce the exploit, including any relevant code if the exploit requires it. You will receive the rewar … [truncated]
-         }), (0, mk.jsx)("h3", {
-           children: "1. How to Report"
-         }), (0, mk.jsxs)("p", {
-           children: ["Please follow the instructions on", " ", (0, mk.jsx)("a", {
-             href: "https://forms.gle/wUL8WiH3LbGiJBzF7",
-             target: "_blank",
-             rel: "noreferrer",
-             children: "this form"
- ... (118 more removed lines; see GitHub link above)
+     function bC(CC) {
+       return {
+         packKey: async zC => (await wC.d.getGame(CC, zC, !0)).customTexturePackKey,
+         fetchPack: QC.d
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/272.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/272.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf)

#### 1. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/272.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/272.js#L2)

```diff
- export const ids = [272];
+ export const ids = [271, 272];
```

#### 2. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L4-L13` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/272.js#L4-L6) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/272.js#L4-L13)

```diff
-   40684: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => yk,
-       d: () => zk,
-       g: () => wk,
-       h: () => lk,
-       l: () => xk,
-       p: () => Hk,
-       s: () => Uk,
-       t: () => nk
+   40888: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       gamePackSource: () => bC
```

#### 3. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L15-L485` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/272.js#L8-L9) · [Before (L15-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/272.js#L15-L485)

```diff
-     var Dk = ik(36698),
-       fk = ik(36874),
-       Sk = ik(36729),
-       bk = ik(40690),
-       rk = ik(39787),
-       Pk = ik(39583),
-       mk = ik(39612),
-       Mk = ik(39585),
-       Kk = ik(36734);
-     const xk = Object.freeze(new Dk.c(0, 0, 0, 0)),
-       nk = Object.freeze(Dk.o.Zero()),
-       Uk = Object.freeze(Dk.l.Zero()),
-       Hk = Object.freeze(Pk.c.Zero()),
-       wk = Object.freeze(fk.e.Black()),
-       lk = Object.freeze(new fk.f(0, 0, 0, 0)),
-       pk = {
- ... (455 more removed lines; see GitHub link above)
+     var QC = ZC(4925),
+       wC = ZC(1439);
```

#### 4. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L488-L590` → after: `L12-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L12-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/272.js#L12-L14) · [Before (L488-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/272.js#L488-L590)

```diff
-       const ek = new yk(kk.name, kk.property, kk.framePerSecond, kk.dataType, kk.loopBehavior),
-         ik = kk.dataType,
-         Sk = [];
-       let bk, rk;
-       for (kk.enableBlending && (ek.enableBlending = kk.enableBlending), kk.blendingSpeed && (ek.blendingSpeed = kk.blendingSpeed), rk = 0; rk < kk.keys.length; rk++) {
-         const ek = kk.keys[rk];
-         let Pk, mk, Mk;
-         switch (ik) {
-           case yk.ANIMATIONTYPE_FLOAT:
-             bk = ek.values[0], ek.values.length >= 2 && (Pk = ek.values[1]), ek.values.length >= 3 && (mk = ek.values[2]), ek.values.length >= 4 && (Mk = ek.values[3]);
-             break;
-           case yk.ANIMATIONTYPE_QUATERNION:
-             if (bk = Dk.c.FromArray(ek.values), ek.values.length >= 8) {
-               const kk = Dk.c.FromArray(ek.values.slice(4, 8));
-               kk.equals(Dk.c.Zero()) || (Pk = kk)
-             }
- ... (87 more removed lines; see GitHub link above)
+       return {
+         packKey: async zC => (await wC.d.getGame(CC, zC, !0)).customTexturePackKey,
+         fetchPack: QC.d
```

#### 5. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L594-L597` → after: `L18-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L18-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/272.js#L18-L24) · [Before (L594-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/272.js#L594-L597)

```diff
-   40729: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => Dk.b,
-       h: () => Dk.e
+   50720: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       fetchGuestContext: () => NC,
+       guestJoinTarget: () => RC,
+       guestJoinWithPack: () => gC,
+       guestPackForGame: () => MC,
+       invalidateGuestTrafficCode: () => GC
```

#### 6. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L599-L628` → after: `L26-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L26-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/272.js#L26-L93) · [Before (L599-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/272.js#L599-L628)

```diff
-     var Dk = ik(39708);
-     (0, Dk.c)()
-   },
-   40720: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => Dk.f
-     });
-     var Dk = ik(40053);
-     (0, Dk.c)()
-   },
-   40701: (kk, ek, ik) => {
-     ik.d(ek, {
-       e: () => Dk.b
-     });
-     var Dk = ik(40045);
-     (0, Dk.c)()
- ... (14 more removed lines; see GitHub link above)
+     var QC = ZC(1149),
+       wC = ZC(1439),
+       bC = ZC(77),
+       nC = ZC(36342),
+       fC = ZC(1078),
+       oC = ZC(40574),
+       qC = ZC(40888),
+       FC = ZC(40538);
+ 
+     function WC() {
+       if (bC.featureFlags.useTurnstile) throw new oC.TurnstilePageError
+     }
+ 
+     function NC() {
+       return (0, fC.fetchAnonymousUserContext)().catch((CC => (console.warn("the guest context didn't load", CC), null)))
+     }
+ ... (52 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/273.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/273.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325)

#### 1. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L4-L5` → after: `L4-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/273.js#L4-L152) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/273.js#L4-L5)

```diff
-   40751: kk => {
-     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
+   40893: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       BloxdInformation: () => MC
+     });
+     var QC = ZC(1143),
+       wC = ZC(48),
+       bC = ZC(77),
+       nC = ZC(1388),
+       fC = ZC(113),
+       oC = ZC(1013),
+       qC = ZC(1056);
+     const FC = (0, wC.lazy)((() => ZC.e(123).then((() => ZC(6529))))),
+       WC = (0, wC.lazy)((() => ZC.e(124).then((() => ZC(6533)))));
+ 
+     function NC() {
+       return (0, qC.jsxs)("div", {
+ ... (133 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/274.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/274.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3)

#### 1. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4-L5` → after: `L4-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/274.js#L4-L628) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/274.js#L4-L5)

```diff
-   40757: kk => {
-     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
+   40934: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => RC,
+       e: () => HC,
+       f: () => pC,
+       i: () => PC,
+       j: () => NC,
+       k: () => SC,
+       l: () => gC,
+       m: () => MC
+     });
+     var QC = ZC(36963),
+       wC = ZC(37142),
+       bC = ZC(36991),
+       nC = ZC(40941),
+       fC = ZC(40046),
+ ... (609 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/275.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/275.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a)

#### 1. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/275.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/275.js#L4-L5)

```diff
-   40762: kk => {
-     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
+   41003: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/276.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/276.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6)

#### 1. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/276.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/276.js#L4-L5)

```diff
-   40767: kk => {
-     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
+   41009: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/277.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/277.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410)

#### 1. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/277.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/277.js#L4-L5)

```diff
-   40769: kk => {
-     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
+   41018: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/278.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/278.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0)

#### 1. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/278.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/278.js#L4-L5)

```diff
-   40777: kk => {
-     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrMkM4tXUGr3WjFqpVir0GrXOcwkqqhhFiHU3zsb+X5nZ7N457hB34jKj7WJ8s9x/vlxN5883R2e5v2c6/Q/koTYaFYXX+lNZhjrahA4IvWHTJ … [truncated]
+   41025: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/279.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/279.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae)

#### 1. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/279.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/279.js#L4-L5)

```diff
-   40785: kk => {
-     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEWSURBVHic7dohEoJAFMZxcCgSLHIOq8Vs8QSewOxJzJ7AO5gtVs+hxYBREwzjMDDLW/zA/f/iusCbz6fCG+PI6HrevS3H3x9P0/U321NsOX5iuvofSHydaJqmTvtfee7r0 … [truncated]
+   41031: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/280.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/280.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db)

#### 1. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/280.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/280.js#L4-L5)

```diff
-   40789: kk => {
-     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEQSURBVHic7dpBDsFAFMbxjnRBIiSO4QZ2tuIgDuAEDuAATmJrxwkcQ0Ik7FhVLEqNN/VNzf+3bKYzL58X6qUuM9ouxzfL/YfT1XT+dLFzlvtbptP/QB5qo36347X+eL6EO … [truncated]
+   41035: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrMkM4tXUGr3WjFqpVir0GrXOcwkqqhhFiHU3zsb+X5nZ7N457hB34jKj7WJ8s9x/vlxN5883R2e5v2c6/Q/koTYaFYXX+lNZhjrahA4IvWHTJ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/281.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/281.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696)

#### 1. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/281.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/281.js#L4-L5)

```diff
-   40797: kk => {
-     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEHSURBVHic7dqxEsFAFIXhrEkjGt5Nq9bSKhUKDa1aq/dYNKKkilGEWHfjbOz/lZnN7p3jDnEnLjParMY3y/2n88V0/nJ9dJb7e6bT/0AeaqOi6HutL8trqKNN6IDQGzZ9s … [truncated]
+   41044: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEWSURBVHic7dohEoJAFMZxcCgSLHIOq8Vs8QSewOxJzJ7AO5gtVs+hxYBREwzjMDDLW/zA/f/iusCbz6fCG+PI6HrevS3H3x9P0/U321NsOX5iuvofSHydaJqmTvtfee7r0 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/282.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/282.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8)

#### 1. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/282.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/282.js#L4-L5)

```diff
-   40801: kk => {
-     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7do9EsFAGMbxrEnjY3Quo1WrncIBnMABXIJardDonUNnfJRUMYoQ6914Nvb/KzOb3Xce7xDvxGVG0/HwZrn/cDybzl9u985yf8t0+h/IQ23U67S91p8u11BHm … [truncated]
+   41047: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEQSURBVHic7dpBDsFAFMbxjnRBIiSO4QZ2tuIgDuAEDuAATmJrxwkcQ0Ik7FhVLEqNN/VNzf+3bKYzL58X6qUuM9ouxzfL/YfT1XT+dLFzlvtbptP/QB5qo36347X+eL6EO … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/283.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/283.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e)

#### 1. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/283.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/283.js#L4-L5)

```diff
-   40808: kk => {
-     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrElDFB5OSavRewSFXqOlVOi8lkIoqWIUIdbdOBv7f2Vms3vnuEPcicuMVpPxzXL/6Vyazl8ejs5yf890+h/IQ21UDPpe68vLNdTRJnRA6A2bP … [truncated]
+   41050: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEHSURBVHic7dqxEsFAFIXhrEkjGt5Nq9bSKhUKDa1aq/dYNKKkilGEWHfjbOz/lZnN7p3jDnEnLjParMY3y/2n88V0/nJ9dJb7e6bT/0AeaqOi6HutL8trqKNN6IDQGzZ9s … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/284.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/284.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887)

#### 1. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/284.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/284.js#L4-L5)

```diff
-   40813: kk => {
-     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAEACAYAAAADRnAGAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPVSURBVHic7dxPbhMxGIdhB03aRSXaHafgAmwQC4TEohI34BRIPQESl0Fi20XVTS/ADThBi1QCnZHKAiwl7njGY3v8+c/77BJsx5n57GZI5rdRgd69P3/cf7w9Op5s3z/8O … [truncated]
+   41056: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7do9EsFAGMbxrEnjY3Quo1WrncIBnMABXIJardDonUNnfJRUMYoQ6914Nvb/KzOb3Xce7xDvxGVG0/HwZrn/cDybzl9u985yf8t0+h/IQ23U67S91p8u11BHm … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/285.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/285.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2)

#### 1. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/285.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/285.js#L4-L5)

```diff
-   40821: kk => {
-     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKpSURBVHic7Zq/ThVBFMa/JXNBFAiVISEhSsM2WhFewADREAMkFEYSX4DCjvgExs4XoNBgKyUF8SUgBLWxkcTCRMMFLty78VrNze5hZ3Z2Z+7dXeb8utmZMzM78805Z/8Es … [truncated]
+   41062: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrElDFB5OSavRewSFXqOlVOi8lkIoqWIUIdbdOBv7f2Vms3vnuEPcicuMVpPxzXL/6Vyazl8ejs5yf890+h/IQ21UDPpe68vLNdTRJnRA6A2bP … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/286.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/286.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469)

#### 1. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/286.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/286.js#L4-L5)

```diff
-   40829: kk => {
-     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEKSURBVHic7doxDoJAEIVh1hBjY/BsxsrOI3ADLmA8gp2VsfJgEhtjoxXGAsV1Ft/i/l9Jlt3Jc6I4wWVG22pxs9x/Ol9M55fro7PcPzKd/gfyUBsVxdhrfV1fQx1tQgeE3 … [truncated]
+   41067: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAEACAYAAAADRnAGAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPVSURBVHic7dxPbhMxGIdhB03aRSXaHafgAmwQC4TEohI34BRIPQESl0Fi20XVTS/ADThBi1QCnZHKAiwl7njGY3v8+c/77BJsx5n57GZI5rdRgd69P3/cf7w9Op5s3z/8O … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/287.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/287.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1)

#### 1. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/287.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/287.js#L4-L5)

```diff
-   40836: kk => {
-     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAELSURBVHic7dqxEsFAFIXhjcmko6BTeSKlSucBVB5Hp1J6IpUKBV0aqhhFiHU3zsb+X5nZ7N457hB3kjmj8WZ9s9xfns6m84/LVWa5v2c6/Q/koTYqBn2v9eXlGupoEzog9 … [truncated]
+   41070: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKpSURBVHic7Zq/ThVBFMa/JXNBFAiVISEhSsM2WhFewADREAMkFEYSX4DCjvgExs4XoNBgKyUF8SUgBLWxkcTCRMMFLty78VrNze5hZ3Z2Z+7dXeb8utmZMzM78805Z/8Es … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/288.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/288.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1)

#### 1. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/288.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/288.js#L4-L5)

```diff
-   40840: kk => {
-     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIOSURBVHic7ZoxSwMxFIDfFRGVKgVxcpJDnK6Dg/9AXFwqdFKqk3UUl9JJnMTNsXYqopNDZ/EfODjYSVpxEoQOHlraUsFzsLFeendtLrlLr3nfEnp5Ly+XvPdySaoBJ+W8Y … [truncated]
+   41075: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEKSURBVHic7doxDoJAEIVh1hBjY/BsxsrOI3ADLmA8gp2VsfJgEhtjoxXGAsV1Ft/i/l9Jlt3Jc6I4wWVG22pxs9x/Ol9M55fro7PcPzKd/gfyUBsVxdhrfV1fQx1tQgeE3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/289.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/289.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848)

#### 1. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/289.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/289.js#L2)

```diff
- export const ids = [289, 290];
+ export const ids = [289];
```

#### 2. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L4-L754` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/289.js#L4-L5) · [Before (L4-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/289.js#L4-L754)

```diff
-   40850: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       CharacterCustomisationUI: () => ak
-     });
-     var Dk = ik(60),
-       fk = ik(2955),
-       Sk = ik(1095),
-       bk = ik(1893),
-       rk = ik(1021),
-       Pk = ik.n(rk),
-       mk = ik(1218),
-       Mk = ik(581),
-       Kk = ik(1172),
-       xk = ik(2195),
-       nk = ik(1537),
-       Uk = ik(8658),
- ... (735 more removed lines; see GitHub link above)
+   41082: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAELSURBVHic7dqxEsFAFIXhjcmko6BTeSKlSucBVB5Hp1J6IpUKBV0aqhhFiHU3zsb+X5nZ7N457hB3kjmj8WZ9s9xfns6m84/LVWa5v2c6/Q/koTYqBn2v9eXlGupoEzog9 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/290.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/290.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b)

#### 1. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L4-L152` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/290.js#L4-L5) · [Before (L4-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/290.js#L4-L152)

```diff
-   40857: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       CharacterPreview: () => Kk
-     });
-     var Dk = ik(60),
-       fk = ik(2683),
-       Sk = ik(1218),
-       bk = ik(8658),
-       rk = ik(33799),
-       Pk = ik(3590),
-       mk = ik(1066);
-     const Mk = .6 * Math.PI,
-       Kk = (0, Dk.memo)((0, Dk.forwardRef)((function(kk, ek) {
-         let {
-           onReady: ik,
-           onDrawn: Kk,
- ... (133 more removed lines; see GitHub link above)
+   41084: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIOSURBVHic7ZoxSwMxFIDfFRGVKgVxcpJDnK6Dg/9AXFwqdFKqk3UUl9JJnMTNsXYqopNDZ/EfODjYSVpxEoQOHlraUsFzsLFeendtLrlLr3nfEnp5Ly+XvPdySaoBJ+W8Y … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/291.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/291.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4)

#### 1. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/291.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/291.js#L4)

```diff
-   40865: (kk, ek, ik) => {
+   41104: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/291.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/291.js#L6)

```diff
-       default: () => Ze
+       CharacterPreview: () => WC
```

#### 3. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L8-L260` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/291.js#L8-L16) · [Before (L8-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/291.js#L8-L260)

```diff
-     var Dk = ik(40871),
-       fk = ik(40919),
-       Sk = ik(40924),
-       bk = ik(60),
-       rk = ik(75),
-       Pk = ik(40936),
-       mk = ik(40945),
-       Mk = ik(4707),
-       Kk = ik(40950),
-       xk = ik(1858),
-       nk = ik(40957),
-       Uk = ik(40972),
-       Hk = ik.n(Uk),
-       wk = ik(40926),
-       lk = ik(40934),
-       pk = ik(1327),
- ... (237 more removed lines; see GitHub link above)
+     var QC = ZC(48),
+       wC = ZC(2734),
+       bC = ZC(1183),
+       nC = ZC(2534),
+       fC = ZC(34185),
+       oC = ZC(3569),
+       qC = ZC(1056);
+     const FC = .6 * Math.PI,
+       WC = (0, QC.memo)((0, QC.forwardRef)((function(CC, zC) {
```

#### 4. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L262-L263` → after: `L18-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L18-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/291.js#L18-L25) · [Before (L262-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/291.js#L262-L263)

```diff
-           text: fk,
-           focus: Sk
+           onReady: ZC,
+           onDrawn: WC,
+           owner: NC = "other",
+           framing: MC = "player",
+           forcedCosmetics: gC,
+           Bn: SC,
+           emotePlaySeq: pC,
+           turntableFromYaw: PC = null
```

#### 5. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L265-L494` → after: `L27-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L27-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/291.js#L27-L71) · [Before (L265-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/291.js#L265-L494)

```diff
-         const bk = kk.current,
-           rk = null !== bk && void 0 !== bk && bk.dom.isConnected ? function(kk, ek) {
-             if (!ke(kk)) return null;
-             const {
-               from: ik,
-               to: Dk
-             } = kk.selection.main, fk = ik + ek.length;
-             return {
-               changes: {
-                 from: ik,
-                 to: Dk,
-                 insert: ek
-               },
-               selection: {
-                 anchor: fk
-               },
- ... (214 more removed lines; see GitHub link above)
+         const GC = (0, QC.useRef)(null),
+           {
+             width: RC,
+             height: AC
+           } = (0, wC.e)(GC),
+           xC = (0, QC.useRef)(null),
+           JC = (0, QC.useRef)({}),
+           IC = (0, QC.useRef)({}),
+           [iC, vC] = (0, QC.useState)(!1),
+           eC = (0, QC.useRef)(ZC);
+         eC.current = ZC;
+         const hC = (0, QC.useRef)(WC);
+         hC.current = WC;
+         const KC = (0, QC.useRef)(null),
+           YC = (0, QC.useRef)(!1),
+           dC = (0, QC.useRef)(!1),
+ ... (29 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L496-L519` → after: `L73-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L73-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/291.js#L73-L92) · [Before (L496-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/291.js#L496-L519)

```diff
-               of Ce) {
-               if (!ik && "explain" !== fk) continue;
-               const bk = document.createElement("button");
-               bk.type = "button", bk.textContent = Sk, "change" !== fk && (bk.title = ye.c, bk.dataset.asksAi = "true"), bk.addEventListener("mousedown", (kk => {
-                 kk.preventDefault()
-               })), bk.addEventListener("click", (() => {
-                 const ik = kk.state.selection.main;
-                 if (ik.empty) return;
-                 const Dk = {
-                   action: fk,
-                   path: ek,
-                   fromLine: kk.state.doc.lineAt(ik.from).number,
-                   toLine: kk.state.doc.lineAt(ik.to > ik.from && kk.state.doc.lineAt(ik.to).from === ik.to ? ik.to - 1 : ik.to).number,
-                   text: kk.state.sliceDoc(ik.from, ik.to)
-                 };
-                 Ik.j.tm("WorldCodeAiSelection", Dk), kk.dispatch({
- ... (8 more removed lines; see GitHub link above)
+             },
+             isReady() {
+               var CC, zC;
+               return null !== (CC = null === (zC = xC.current) || void 0 === zC ? void 0 : zC.isReady()) && void 0 !== CC && CC
+             },
+             resetCamera() {
+               var CC;
+               null === (CC = xC.current) || void 0 === CC || CC.resetCamera()
+             },
+             setOrbit(CC) {
+               var zC;
+               null === (zC = xC.current) || void 0 === zC || zC.setOrbit(CC)
+             },
+             async ensureReadyForCapture(CC) {
+               var zC;
+               await (null === (zC = xC.current) || void 0 === zC ? void 0 : zC.untilDrawn(CC))
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L522-L653` → after: `L95-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L95-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/291.js#L95-L105) · [Before (L522-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/291.js#L522-L653)

```diff
-         }
-       }(ik, kk, ek)))]
-     }
-     var je = ik(1066);
-     const se = new Set(["(", "{", "[", "<"]),
-       de = new Set([")", "}", "]", ">"]),
-       Ve = {
-         text: "var(--codeTooltipText, white)",
-         parameterName: "var(--codeTooltipParameterName, orange)",
-         parameter: "var(--codeTooltipParameter, cyan)",
-         suffix: "var(--codeTooltipSuffix, pink)",
-         docs: "var(--codeTooltipDocs, gray)"
-       };
- 
-     function Fe(kk) {
-       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
- ... (116 more removed lines; see GitHub link above)
+         }), [gC, mC]), (0, QC.useEffect)((() => {
+           const CC = oC.c.register(NC),
+             zC = fC.k.openCharacter(GC.current, MC);
+           xC.current = zC;
+           let ZC = !0;
+           return zC.ready.then((() => {
+             ZC && (vC(!0), eC.current())
+           })).catch((CC => {
+             console.error("Failed to set up the character preview", CC)
+           })), () => {
+             ZC = !1, CC(), zC.resetCamera(), zC.close(), xC.current = null
```

#### 8. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L655-L726` → after: `L107-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L107-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/291.js#L107-L115) · [Before (L655-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/291.js#L655-L726)

```diff
-         }
-       }
-     }
- 
-     function Xe(kk, ek, ik) {
-       return Dk => {
-         var fk;
-         if (!ek) return [];
-         const Sk = null === (fk = Dk.selection.lw[0]) || void 0 === fk ? void 0 : fk.head;
-         if (void 0 === Sk) return [];
-         const bk = kk.languageService.getSignatureHelpItems(ik, Sk, {});
-         if (!bk || !bk.items.length) return [];
-         const rk = bk.applicableSpan.start - bk.items[0].prefixDisplayParts.map((kk => kk.text)).join("").length,
-           Pk = bk.applicableSpan.start,
-           mk = Dk.doc.lineAt(Sk),
-           Mk = mk.from,
- ... (56 more removed lines; see GitHub link above)
+         }), []), (0, QC.useEffect)((() => {
+           RC <= 0 || AC <= 0 || xC.current.resize(RC, AC)
+         }), [RC, AC]), (0, QC.useEffect)((() => {
+           if (!iC) return;
+           const CC = IC.current;
+           for (const zC of bC.y) {
+             const ZC = null === gC || void 0 === gC ? void 0 : gC[zC],
+               QC = CC[zC];
+             ZC && ZC !== QC ? xC.current.setCosmetic(zC, ZC) : !ZC && QC && JC.current[zC] && xC.current.setCosmetic(zC, JC.current[zC])
```

#### 9. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L728-L939` → after: `L117-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L117-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/291.js#L117-L146) · [Before (L728-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/291.js#L728-L939)

```diff
-         });
-         if (Sk.documentation) {
-           Pk.push("\n\n");
-           for (const kk of Sk.documentation) Pk.push({
-             str: kk.text,
-             style: {
-               color: Ve.docs
-             }
-           })
-         }
-         return [{
-           pos: bk,
-           end: rk,
-           above: !0,
-           create: te(Pk)
-         }]
- ... (196 more removed lines; see GitHub link above)
+           IC.current = {
+             ...gC
+           }, dC.current = !0, mC()
+         }), [gC, iC, mC]), (0, QC.useEffect)((() => {
+           iC && xC.current.playEmote(null !== SC && void 0 !== SC ? SC : null)
+         }), [SC, pC, iC]), (0, QC.useEffect)((() => {
+           if (!iC || null === PC) return;
+           const CC = xC.current,
+             {
+               pitch: zC,
+               radius: ZC
+             } = fC.c[MC];
+           if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return CC.setOrbit({
+             yaw: PC + FC,
+             pitch: zC,
+             radius: ZC
+ ... (14 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L941-L1182` → after: `L148-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L148-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/291.js#L148-L152) · [Before (L941-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/291.js#L941-L1182)

```diff
-         }), Ee(kk, de, bk), rk(bk))
-       }));
-       const ue = (0, bk.useMemo)((() => {
-         if (!Pe) return [];
-         const {
-           pw: kk,
-           fsMap: ik
-         } = Pe;
-         ! function(kk, ek, ik, Dk) {
-           if (kk.getSourceFile(ik)) return;
-           const fk = Dk || "\n";
-           ek.set(ik, fk), kk.createFile(ik, fk)
-         }(kk, ik, de, (ke ? se.current : Ce.current) || "\n");
-         const bk = ek && he(ke ? null !== ee && void 0 !== ee ? ee : "index.ts" : Rk),
-           rk = [(0, fk.b)({
-             jsx: !1,
- ... (226 more removed lines; see GitHub link above)
+         }), [iC, PC]), (0, qC.jsx)("div", {
+           className: "CharCustomisationPreview",
+           ref: GC
+         })
+       })))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/292.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/292.js` (63 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76)

#### 1. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L4-L12` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L4-L6) · [Before (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L4-L12)

```diff
-   40871: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => Qe,
-       g: () => se,
-       i: () => ye,
-       j: () => Pk,
-       n: () => ve,
-       o: () => mk,
-       s: () => ne
+   41113: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       default: () => jz
```

#### 2. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L14-L15800` → after: `L8-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L8-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L8-L50) · [Before (L14-L15800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L14-L15800)

```diff
-     var Dk = ik(40876),
-       fk = ik(40883),
-       Sk = ik(40902);
-     class bk {
-       constructor(kk, ek, ik, Dk) {
-         this.state = kk, this.pos = ek, this.explicit = ik, this.view = Dk, this.abortListeners = [], this.abortOnDocChange = !1
-       }
-       tokenBefore(kk) {
-         let ek = (0, Sk.lb)(this.state).resolveInner(this.pos, -1);
-         for (; ek && kk.indexOf(ek.name) < 0;) ek = ek.parent;
-         return ek ? {
-           from: ek.from,
-           to: this.pos,
-           text: this.state.sliceDoc(ek.from, this.pos),
-           type: ek.type
-         } : null
- ... (15771 more removed lines; see GitHub link above)
+     var QC = ZC(41122),
+       wC = ZC(41153),
+       bC = ZC(41158),
+       nC = ZC(48),
+       fC = ZC(60),
+       oC = ZC(41177),
+       qC = ZC(41179),
+       FC = ZC(4696),
+       WC = ZC(41188),
+       NC = ZC(1811),
+       MC = ZC(41191),
+       gC = ZC(41203),
+       SC = ZC.n(gC),
+       pC = ZC(41165),
+       PC = ZC(41169),
+       GC = ZC(1295),
+ ... (27 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L15802-L15822` → after: `L52-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L52-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L52-L58) · [Before (L15802-L15822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L15802-L15822)

```diff
-       return fk = Sk.type.prop(rk) && (Dk = ik ? (0, Pk.cb)(kk, Sk.from, 1) : (0, Pk.cb)(kk, Sk.to, -1)) && Dk.matched ? ik ? Dk.end.to : Dk.end.from : ik ? Sk.to : Sk.from, bk.h.cursor(fk, ik ? -1 : 1)
-     }
- 
-     function ke(kk, ek) {
-       return ck(kk, (ik => {
-         if (!ik.empty) return Tk(ik, ek);
-         let Dk = kk.moveVertically(ik, ek);
-         return Dk.head != ik.head ? Dk : kk.moveToLineBoundary(ik, ek)
-       }))
-     }
-     const ee = kk => ke(kk, !1),
-       ie = kk => ke(kk, !0);
- 
-     function De(kk) {
-       let ek, ik = kk.scrollDOM.clientHeight < kk.scrollDOM.scrollHeight - 2,
-         Dk = 0,
- ... (5 more removed lines; see GitHub link above)
+       toDOM() {
+         const CC = document.createElement("span");
+         CC.className = "cm-remote-cursor-wrapper", CC.style.borderLeftColor = this.colour;
+         const zC = document.createElement("span");
+         if (zC.className = "cm-remote-cursor", zC.style.borderLeftColor = this.colour, CC.appendChild(zC), this.showName) {
+           const zC = document.createElement("span");
+           zC.className = "cm-remote-cursor-name", zC.style.backgroundColor = this.colour, zC.textContent = this.playerName, CC.appendChild(zC)
```

#### 4. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L15824-L15830` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L60) · [Before (L15824-L15830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L15824-L15830)

```diff
-         ek = kk.scrollDOM.clientHeight - Dk - fk
-       } else ek = (kk.dom.ownerDocument.defaultView || window).innerHeight;
-       return {
-         marginTop: Dk,
-         marginBottom: fk,
-         selfScroll: ik,
-         height: Math.max(kk.defaultLineHeight, ek - 5)
+         return CC
```

#### 5. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L15832-L15849` → after: `L62-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L62-L63) · [Before (L15832-L15849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L15832-L15849)

```diff
-     }
- 
-     function fe(kk, ek) {
-       let ik, Dk = De(kk),
-         {
-           state: fk
-         } = kk,
-         Sk = Xk(fk.selection, (ik => ik.empty ? kk.moveVertically(ik, ek, Dk.height) : Tk(ik, ek)));
-       if (Sk.eq(fk.selection)) return !1;
-       if (Dk.selfScroll) {
-         let ek = kk.coordsAtPos(fk.selection.main.head),
-           bk = kk.scrollDOM.getBoundingClientRect(),
-           Pk = bk.top + Dk.marginTop,
-           mk = bk.bottom - Dk.marginBottom;
-         ek && ek.top > Pk && ek.bottom < mk && (ik = rk.f.scrollIntoView(Sk.main.head, {
-           y: "start",
- ... (2 more removed lines; see GitHub link above)
+       eq(CC) {
+         return this.colour === CC.colour && this.playerName === CC.playerName && this.showName === CC.showName
```

#### 6. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L15851-L15863` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L65-L66) · [Before (L15851-L15863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L15851-L15863)

```diff
-       return kk.dispatch(Bk(fk, Sk), {
-         effects: ik
-       }), !0
-     }
-     const Se = kk => fe(kk, !1),
-       be = kk => fe(kk, !0);
- 
-     function re(kk, ek, ik) {
-       let Dk = kk.lineBlockAt(ek.head),
-         fk = kk.moveToLineBoundary(ek, ik);
-       if (fk.head == ek.head && fk.head != (ik ? Dk.to : Dk.from) && (fk = kk.moveToLineBoundary(ek, ik, !1)), !ik && fk.head == Dk.from && Dk.length) {
-         let ik = /^\s*/.exec(kk.state.sliceDoc(Dk.from, Math.min(Dk.from + 100, Dk.to)))[0].length;
-         ik && ek.head != Dk.from + ik && (fk = bk.h.cursor(Dk.from + ik))
+       get estimatedHeight() {
+         return -1
```

#### 7. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L15865-L15963` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L68-L69) · [Before (L15865-L15963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L15865-L15963)

```diff
-       return fk
-     }
- 
-     function Pe(kk, ek, ik) {
-       let Dk = !1,
-         fk = Xk(kk.selection, (ek => {
-           let fk = (0, Pk.cb)(kk, ek.head, -1) || (0, Pk.cb)(kk, ek.head, 1) || ek.head > 0 && (0, Pk.cb)(kk, ek.head - 1, 1) || ek.head < kk.doc.length && (0, Pk.cb)(kk, ek.head + 1, -1);
-           if (!fk || !fk.end) return ek;
-           Dk = !0;
-           let Sk = fk.start.from == ek.head ? fk.end.to : fk.end.from;
-           return ik ? bk.h.range(ek.anchor, Sk) : bk.h.cursor(Sk)
-         }));
-       return !!Dk && (ek(Bk(kk, fk)), !0)
-     }
- 
-     function me(kk, ek) {
- ... (83 more removed lines; see GitHub link above)
+       ignoreEvent() {
+         return !0
```

#### 8. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L15969-L16066` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L74) · [Before (L15969-L16066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L15969-L16066)

```diff
-       if (kk.state.readOnly) return !1;
-       let ik = "delete.selection",
-         {
-           state: Dk
-         } = kk,
-         fk = Dk.changeByRange((Dk => {
-           let {
-             from: fk,
-             to: Sk
-           } = Dk;
-           if (fk == Sk) {
-             let bk = ek(Dk);
-             bk < fk ? (ik = "delete.backward", bk = de(kk, bk, !1)) : bk > fk && (ik = "delete.forward", bk = de(kk, bk, !0)), fk = Math.min(fk, bk), Sk = Math.max(Sk, bk)
-           } else fk = de(kk, fk, !1), Sk = de(kk, Sk, !0);
-           return fk == Sk ? {
-             range: Dk
- ... (82 more removed lines; see GitHub link above)
+       const ZC = [],
```

#### 9. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16068-L16081` → after: `L76-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L76-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L76-L86) · [Before (L16068-L16081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16068-L16081)

```diff
-       for (let Sk of ze(kk)) {
-         if (ik ? Sk.to == kk.doc.length : 0 == Sk.from) continue;
-         let ek = kk.doc.lineAt(ik ? Sk.to + 1 : Sk.from - 1),
-           rk = ek.length + 1;
-         if (ik) {
-           Dk.push({
-             from: Sk.to,
-             to: ek.to
-           }, {
-             from: Sk.from,
-             insert: ek.text + kk.lineBreak
-           });
-           for (let ek of Sk.lw) fk.push(bk.h.range(Math.min(kk.doc.length, ek.anchor + rk), Math.min(kk.doc.length, ek.head + rk)))
-         } else {
+       for (const [, nC] of CC) {
+         const CC = zC - nC.lastMoved < sC;
+         if (ZC.push({
+             pos: nC.head,
+             decoration: KC.e.widget({
+               widget: new DC(nC.colour, nC.playerName, CC),
+               side: 1
+             })
+           }), nC.anchor !== nC.head) {
+           const CC = Math.min(nC.anchor, nC.head),
+             zC = Math.max(nC.anchor, nC.head);
```

#### 10. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16083-L16089` → after: `L88-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L88-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L88-L96) · [Before (L16083-L16089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16083-L16089)

```diff
-             from: ek.from,
-             to: Sk.from
-           }, {
-             from: Sk.to,
-             insert: kk.lineBreak + ek.text
-           });
-           for (let kk of Sk.lw) fk.push(bk.h.range(kk.anchor - rk, kk.head - rk))
+             from: CC,
+             to: zC,
+             decoration: KC.e.mark({
+               class: "cm-remote-selection",
+               attributes: {
+                 style: `background-color: ${nC.colour}33`
+               }
+             })
+           })
```

#### 11. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16092-L16103` → after: `L99-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L99-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L99-L109) · [Before (L16092-L16103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16092-L16103)

```diff
-       return !!Dk.length && (ek(kk.update({
-         changes: Dk,
-         scrollIntoView: !0,
-         selection: bk.h.create(fk, kk.selection.mainIndex),
-         userEvent: "move.line"
-       })), !0)
-     }
- 
-     function ve(kk, ek, ik) {
-       if (kk.readOnly) return !1;
-       let Dk = [];
-       for (let Sk of ze(kk)) ik ? Dk.push({
+       const wC = new hC.s,
+         bC = [];
+       for (const nC of ZC) bC.push({
+         bias: 1,
+         deco: nC.decoration,
+         from: nC.pos,
+         to: nC.pos
+       });
+       for (const nC of QC) bC.push({
+         bias: 0,
+         deco: nC.decoration,
```

#### 12. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16105-L16108` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L111) · [Before (L16105-L16108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16105-L16108)

```diff
-         insert: kk.doc.slice(Sk.from, Sk.to) + kk.lineBreak
-       }) : Dk.push({
-         from: Sk.to,
-         insert: kk.lineBreak + kk.doc.slice(Sk.from, Sk.to)
+         to: nC.to
```

#### 13. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16110-L16118` → after: `L113-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L113-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L113-L172) · [Before (L16110-L16118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16110-L16118)

```diff
-       let fk = kk.changes(Dk);
-       return ek(kk.update({
-         changes: fk,
-         selection: kk.selection.map(fk, ik ? 1 : -1),
-         scrollIntoView: !0,
-         userEvent: "input.copyline"
-       })), !0
-     }
-     const Ee = he(!1);
+       bC.sort(((CC, zC) => CC.from - zC.from || CC.deco.startSide - zC.deco.startSide || CC.bias - zC.bias));
+       for (const nC of bC) wC.add(nC.from, nC.to, nC.deco);
+       return wC.finish()
+     }
+     const yC = hC.A.define({
+       create: () => ({
+         cursors: new Map,
+         gC: KC.e.none
+       }),
+       update(CC, zC) {
+         let ZC = CC.cursors,
+           QC = !1;
+         if (zC.docChanged) {
+           const CC = new Map;
+           for (const [QC, wC] of ZC) CC.set(QC, {
+             ...wC,
+ ... (44 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16121-L16169` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L175) · [Before (L16121-L16169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16121-L16169)

```diff
-       return ek => {
-         let {
-           state: ik,
-           dispatch: Dk
-         } = ek;
-         if (ik.readOnly) return !1;
-         let fk = ik.changeByRange((ek => {
-           let {
-             from: Dk,
-             to: fk
-           } = ek, Sk = ik.doc.lineAt(Dk), rk = !kk && Dk == fk && function(kk, ek) {
-             if (/\(\)|\[\]|\{\}/.test(kk.sliceDoc(ek - 1, ek + 1))) return {
-               from: ek,
-               to: ek
-             };
-             let ik, Dk = (0, Pk.lb)(kk).resolveInner(ek),
- ... (33 more removed lines; see GitHub link above)
+       return CC.field(OC)
```

#### 15. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16173-L16204` → after: `L180-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L180-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L180-L191) · [Before (L16173-L16204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16173-L16204)

```diff
-       let ik = -1;
-       return kk.changeByRange((Dk => {
-         let fk = [];
-         for (let bk = Dk.from; bk <= Dk.to;) {
-           let Sk = kk.doc.lineAt(bk);
-           Sk.number > ik && (Dk.empty || Dk.to > Sk.from) && (ek(Sk, fk, Dk), ik = Sk.number), bk = Sk.to + 1
-         }
-         let Sk = kk.changes(fk);
-         return {
-           changes: fk,
-           range: bk.h.range(Sk.mapPos(Dk.anchor, 1), Sk.mapPos(Dk.head, 1))
-         }
-       }))
-     }
-     const We = kk => {
-         let {
- ... (16 more removed lines; see GitHub link above)
+       const ZC = (0, nC.useRef)(null);
+       (0, nC.useEffect)((() => {
+         var CC;
+         (null === (CC = ZC.current) || void 0 === CC ? void 0 : CC.path) !== zC && (ZC.current = null)
+       }), [zC]);
+       const QC = CC => {
+         var QC;
+         const wC = ZC.current;
+         if (null === CC || void 0 === CC || !CC.dom.isConnected || !wC || wC.path !== zC) return;
+         ZC.current = null;
+         const {
+           lM: nC
```

#### 16. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16206-L16377` → after: `L193-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L193-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L193-L201) · [Before (L16206-L16377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16206-L16377)

```diff
-         return !ek.readOnly && (ik(ek.update(ae(ek, ((kk, ik) => {
-           let Dk = /^\s*/.exec(kk.text)[0];
-           if (!Dk) return;
-           let fk = (0, bk.S)(Dk, ek.tabSize),
-             Sk = 0,
-             rk = (0, Pk._)(ek, Math.max(0, fk - (0, Pk.Q)(ek)));
-           for (; Sk < Dk.length && Sk < rk.length && Dk.charCodeAt(Sk) == rk.charCodeAt(Sk);) Sk++;
-           ik.push({
-             from: kk.from + Sk,
-             to: kk.from + Dk.length,
-             insert: rk.slice(Sk)
-           })
-         })), {
-           userEvent: "delete.dedent"
-         })), !0)
-       },
- ... (156 more removed lines; see GitHub link above)
+         if (nC && null !== nC.text && performance.now() - nC.at < Cz) {
+           const zC = function(CC, zC) {
+             if (CC === zC) return null;
+             const ZC = Math.min(CC.length, zC.length);
+             let QC = 0;
+             for (; QC < ZC && CC[QC] === zC[QC];) QC++;
+             let wC = 0;
+             for (; wC < ZC - QC && CC[CC.length - 1 - wC] === zC[zC.length - 1 - wC];) wC++;
+             return {
```

#### 17. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16379` → after: `L203-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L203-L204) · [Before (L16379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16379)

```diff
-               to: Dk
+               to: CC.length - wC,
+               insert: zC.slice(QC, zC.length - wC)
```

#### 18. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16381-L16390` → after: `L206-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L206-L207) · [Before (L16381-L16390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16381-L16390)

```diff
-           }))), Dk = Xk(ek.selection, (ek => {
-             let ik;
-             if (kk.lineWrapping) {
-               let Dk = kk.lineBlockAt(ek.head),
-                 fk = kk.coordsAtPos(ek.head, ek.assoc || 1);
-               fk && (ik = Dk.bottom + kk.documentTop - fk.bottom + kk.defaultLineHeight / 2)
-             }
-             return kk.moveVertically(ek, !0, ik)
-           })).map(ik);
-           return kk.dispatch({
+           }(CC.state.doc.toString(), nC.text);
+           null !== zC && CC.dispatch({
```

#### 19. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16392-L16522` → after: `L209-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L209-L210) · [Before (L16392-L16522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16392-L16522)

```diff
-             selection: Dk,
-             scrollIntoView: !0,
-             userEvent: "delete.line"
-           }), !0
-         }
-       }, {
-         key: "Shift-Mod-\\",
-         run: kk => {
-           let {
-             state: ek,
-             dispatch: ik
-           } = kk;
-           return Pe(ek, ik, !1)
-         }
-       }, {
-         key: "Mod-/",
- ... (115 more removed lines; see GitHub link above)
+             userEvent: nC.placed ? "input" : void 0
+           })
```

#### 20. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16524-L16616` → after: `L212-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L212-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L212-L245) · [Before (L16524-L16616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16524-L16616)

```diff
-       }, {
-         key: "Backspace",
-         run: Fe,
-         shift: Fe,
-         preventDefault: !0
-       }, {
-         key: "Delete",
-         run: ue,
-         preventDefault: !0
-       }, {
-         key: "Mod-Backspace",
-         mac: "Alt-Backspace",
-         run: Ie,
-         preventDefault: !0
-       }, {
-         key: "Mod-Delete",
- ... (77 more removed lines; see GitHub link above)
+         const {
+           doc: fC
+         } = CC.state, oC = fC.line(Math.min(Math.max(wC.line, 1), fC.lines)), qC = oC.from + Math.min(null !== (QC = wC.column) && void 0 !== QC ? QC : 0, oC.length);
+         CC.dispatch({
+           selection: {
+             anchor: qC
+           },
+           effects: bC.e.scrollIntoView(qC, {
+             y: "center"
+           }),
+           userEvent: null !== nC && void 0 !== nC && nC.placed ? "select" : void 0
+         }), !1 !== (null === nC || void 0 === nC ? void 0 : nC.focused) && CC.focus()
+       };
+       return (0, IC.c)("CodeEditorGoToLine", (zC => {
+         ZC.current = zC, QC(CC.current)
+       })), (0, IC.c)("CodeEditorKeepEdits", (() => {
+ ... (18 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16618-L16633` → after: `L247-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L247-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L247-L271) · [Before (L16618-L16633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16618-L16633)

```diff
-       }, {
-         key: "Ctrl-t",
-         run: kk => {
-           let {
-             state: ek,
-             dispatch: ik
-           } = kk;
-           if (ek.readOnly) return !1;
-           let Dk = ek.changeByRange((kk => {
-             if (!kk.empty || 0 == kk.from || kk.from == ek.doc.length) return {
-               range: kk
-             };
-             let ik = kk.from,
-               Dk = ek.doc.lineAt(ik),
-               fk = ik == Dk.from ? ik - 1 : (0, bk.U)(Dk.text, ik - Dk.from, !1) + Dk.from,
-               Sk = ik == Dk.to ? ik + 1 : (0, bk.U)(Dk.text, ik - Dk.from, !0) + Dk.from;
+       })), CC => {
+         var wC;
+         const bC = ZC.current;
+         !1 === (null === bC || void 0 === bC || null === (wC = bC.lM) || void 0 === wC ? void 0 : wC.focused) && bC.path === zC || CC.focus(), QC(CC)
+       }
+     }
+     var Zz = ZC(4296),
+       Qz = ZC(1143);
+ 
+     function wz(CC, zC) {
+       const {
+         t: ZC
+       } = (0, Qz.y)();
+       (0, IC.c)("CodeEditorInsertText", (QC => {
+         let {
+           text: wC,
+ ... (9 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16638` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L276) · [Before (L16638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16638)

```diff
-                 insert: ek.doc.slice(ik, Sk).append(ek.doc.slice(fk, ik))
+                 insert: zC
```

#### 23. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16640-L16676` → after: `L278-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L278-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L278-L287) · [Before (L16640-L16676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16640-L16676)

```diff
-               range: bk.h.cursor(Sk)
-             }
-           }));
-           return !Dk.changes.empty && (ik(ek.update(Dk, {
-             scrollIntoView: !0,
-             userEvent: "move.character"
-           })), !0)
-         }
-       }, {
-         key: "Ctrl-v",
-         run: be
-       }].map((kk => ({
-         mac: kk.key,
-         run: kk.run,
-         shift: kk.shift
-       }))))),
- ... (21 more removed lines; see GitHub link above)
+               selection: {
+                 anchor: wC
+               },
+               effects: [KC.j.scrollIntoView(wC, {
+                 y: "center"
+               }), LC.of({
+                 from: ZC,
+                 to: wC
+               })],
+               userEvent: "input"
```

#### 24. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16678-L16700` → after: `L289-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L289-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L289-L320) · [Before (L16678-L16700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16678-L16700)

```diff
-           })]
-         }()), !1 !== kk.foldGutter && Dk.push((0, Pk.F)()), !1 !== kk.drawSelection && Dk.push((0, rk.n)()), !1 !== kk.dropCursor && Dk.push((0, rk.o)()), !1 !== kk.allowMultipleSelections && Dk.push(bk.j.allowMultipleSelections.of(!0)), !1 !== kk.indentOnInput && Dk.push((0, Pk. … [truncated]
-           fallback: !0
-         })), !1 !== kk.bracketMatching && Dk.push((0, Pk.q)()), !1 !== kk.closeBrackets && Dk.push((0, Te.i)()), !1 !== kk.autocompletion && Dk.push((0, Te.d)()), !1 !== kk.rectangularSelection && Dk.push((0, rk.V)()), !1 !== ek && Dk.push((0, rk.l)()), !1 !== kk.highlightActiveL … [truncated]
-       },
-       Oe = ik(40915);
-     const ge = "#e5c07b",
-       Ge = "#e06c75",
-       Ne = "#56b6c2",
-       Re = "#ffffff",
-       Je = "#abb2bf",
-       ki = "#7d8799",
-       ei = "#61afef",
-       ii = "#98c379",
-       Di = "#d19a66",
-       fi = "#c678dd",
- ... (7 more removed lines; see GitHub link above)
+           }(nC.state, wC) : null;
+         null !== nC && null !== fC ? (nC.dispatch(fC), bC && nC.focus(), setTimeout((() => {
+           nC.dom.isConnected && nC.dispatch({
+             effects: LC.of(null)
+           })
+         }), 1500)) : (0, Zz.e)(wC).then((() => {
+           zC({
+             message: ZC("codeEditorWorld:pickCopied", {
+               coords: wC
+             }),
+             type: "success"
+           })
+         }), (CC => {
+           console.error("Pick could not copy the coordinates", CC), zC({
+             message: ZC("codeEditorWorld:pickPlaceCursor", {
+               coords: wC
+ ... (16 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16712` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L332) · [Before (L16712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16712)

```diff
-           backgroundColor: mi
+           backgroundColor: "#d7d8de"
```

#### 26. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16715` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L335) · [Before (L16715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16715)

```diff
-           backgroundColor: Si,
+           backgroundColor: "#f0f0f1",
```

#### 27. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16719` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L339) · [Before (L16719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16719)

```diff
-           borderBottom: "2px solid black"
+           borderBottom: "2px solid #d4d4d6"
```

#### 28. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16722` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L342) · [Before (L16722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16722)

```diff
-           borderTop: "2px solid black"
+           borderTop: "2px solid #d4d4d6"
```

#### 29. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16725` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L345) · [Before (L16725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16725)

```diff
-           backgroundColor: "#72a1ff59",
+           backgroundColor: "#72a1ff40",
```

#### 30. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16732` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L352) · [Before (L16732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16732)

```diff
-           backgroundColor: "#6699ff0b"
+           backgroundColor: "#383a420a"
```

#### 31. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16735` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L355) · [Before (L16735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16735)

```diff
-           backgroundColor: "#aafe661a"
+           backgroundColor: "#50a14f26"
```

#### 32. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16738` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L358) · [Before (L16738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16738)

```diff
-           backgroundColor: "#bad0f847"
+           backgroundColor: "#4078f233"
```

#### 33. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16751` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L371) · [Before (L16751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16751)

```diff
-           color: "#ddd"
+           color: "#555"
```

#### 34. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16772` → after: `L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L392) · [Before (L16772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16772)

```diff
-         dark: !0
+         dark: !1
```

#### 35. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16774-L16776` → after: `L394-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L394-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L394-L396) · [Before (L16774-L16776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16774-L16776)

```diff
-       xi = Pk.e.define([{
-         tag: Oe.o.keyword,
-         color: fi
+       Sz = cC.b.define([{
+         tag: bz.i.keyword,
+         color: "#a626a4"
```

#### 36. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16778` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L398) · [Before (L16778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16778)

```diff
-         tag: [Oe.o.name, Oe.o.deleted, Oe.o.character, Oe.o.propertyName, Oe.o.macroName],
+         tag: [bz.i.name, bz.i.deleted, bz.i.character, bz.i.propertyName, bz.i.macroName],
```

#### 37. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16781-L16782` → after: `L401-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L401-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L401-L402) · [Before (L16781-L16782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16781-L16782)

```diff
-         tag: [Oe.o.function(Oe.o.variableName), Oe.o.labelName],
-         color: ei
+         tag: [bz.i.function(bz.i.variableName), bz.i.labelName],
+         color: "#4078f2"
```

#### 38. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16784` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L404) · [Before (L16784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16784)

```diff
-         tag: [Oe.o.color, Oe.o.constant(Oe.o.name), Oe.o.standard(Oe.o.name)],
+         tag: [bz.i.color, bz.i.constant(bz.i.name), bz.i.standard(bz.i.name)],
```

#### 39. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16787` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L407) · [Before (L16787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16787)

```diff
-         tag: [Oe.o.definition(Oe.o.name), Oe.o.separator],
+         tag: [bz.i.definition(bz.i.name), bz.i.separator],
```

#### 40. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16790-L16791` → after: `L410-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L410-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L410-L411) · [Before (L16790-L16791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16790-L16791)

```diff
-         tag: [Oe.o.typeName, Oe.o.className, Oe.o.number, Oe.o.changed, Oe.o.annotation, Oe.o.modifier, Oe.o.self, Oe.o.namespace],
-         color: ge
+         tag: [bz.i.typeName, bz.i.className, bz.i.number, bz.i.changed, bz.i.annotation, bz.i.modifier, bz.i.self, bz.i.namespace],
+         color: "#c18401"
```

#### 41. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16793-L16794` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L413-L414) · [Before (L16793-L16794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16793-L16794)

```diff
-         tag: [Oe.o.operator, Oe.o.operatorKeyword, Oe.o.url, Oe.o.escape, Oe.o.regexp, Oe.o.link, Oe.o.special(Oe.o.string)],
-         color: Ne
+         tag: [bz.i.operator, bz.i.operatorKeyword, bz.i.url, bz.i.escape, bz.i.regexp, bz.i.link, bz.i.special(bz.i.string)],
+         color: "#0184bc"
```

#### 42. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16796` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L416) · [Before (L16796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16796)

```diff
-         tag: [Oe.o.meta, Oe.o.comment],
+         tag: [bz.i.meta, bz.i.comment],
```

#### 43. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16799` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L419) · [Before (L16799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16799)

```diff
-         tag: Oe.o.strong,
+         tag: bz.i.strong,
```

#### 44. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16802` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L422) · [Before (L16802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16802)

```diff
-         tag: Oe.o.emphasis,
+         tag: bz.i.emphasis,
```

#### 45. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16805` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L425) · [Before (L16805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16805)

```diff
-         tag: Oe.o.strikethrough,
+         tag: bz.i.strikethrough,
```

#### 46. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16808` → after: `L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L428) · [Before (L16808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16808)

```diff
-         tag: Oe.o.link,
+         tag: bz.i.link,
```

#### 47. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16812` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L432) · [Before (L16812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16812)

```diff
-         tag: Oe.o.heading,
+         tag: bz.i.heading,
```

#### 48. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16816` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L436) · [Before (L16816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16816)

```diff
-         tag: [Oe.o.atom, Oe.o.bool, Oe.o.special(Oe.o.variableName)],
+         tag: [bz.i.atom, bz.i.bool, bz.i.special(bz.i.variableName)],
```

#### 49. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16819-L16820` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L439-L440) · [Before (L16819-L16820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16819-L16820)

```diff
-         tag: [Oe.o.processingInstruction, Oe.o.string, Oe.o.inserted],
-         color: ii
+         tag: [bz.i.processingInstruction, bz.i.string, bz.i.inserted],
+         color: "#50a14f"
```

#### 50. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16822-L16823` → after: `L442-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L442-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L442-L443) · [Before (L16822-L16823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16822-L16823)

```diff
-         tag: Oe.o.invalid,
-         color: Re
+         tag: bz.i.invalid,
+         color: "#000000"
```

#### 51. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16825-L16847` → after: `L445-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L445-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L445-L453) · [Before (L16825-L16847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16825-L16847)

```diff
-       ni = [Ki, (0, Pk.gb)(xi)];
-     var Ui = rk.f.theme({
-       "&": {
-         backgroundColor: "#fff"
-       }
-     }, {
-       dark: !1
-     });
-     class Hi {
-       constructor(kk, ek) {
-         this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = ek, this.timeoutMS = ek, this.callbacks.push(kk)
-       }
-       Px() {
-         if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
-           this.isTimeExhausted = !0;
-           var kk = this.callbacks.slice();
- ... (7 more removed lines; see GitHub link above)
+       pz = [gz, (0, cC.cb)(Sz)];
+     var Pz = ZC(36779),
+       Gz = ZC(41255);
+     const Rz = bC.i.define(),
+       Az = bC.k.define({
+         create: () => !1,
+         update(CC, zC) {
+           for (const ZC of zC.effects) ZC.is(Rz) && (CC = ZC.value);
+           return CC
```

#### 52. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16849-L16883` → after: `L455-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L455-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L455-L465) · [Before (L16849-L16883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16849-L16883)

```diff
-       }
-       cancel() {
-         this.isCancelled = !0, this.callbacks.length = 0
-       }
-       reset() {
-         this.timeLeftMS = this.timeoutMS, this.isCancelled = !1, this.isTimeExhausted = !1
-       }
-       get isDone() {
-         return this.isCancelled || this.isTimeExhausted
-       }
-     }
-     class wi {
-       constructor() {
-         this.interval = null, this.latches = new Set
-       }
-       add(kk) {
- ... (19 more removed lines; see GitHub link above)
+       }),
+       xz = [{
+         action: "explain",
+         label: "Explain this"
+       }, {
+         action: "fix",
+         label: "Fix this"
+       }, {
+         action: "change",
+         label: "Change this\u2026"
+       }];
```

#### 53. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16885-L16923` → after: `L467-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L467-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L467-L479) · [Before (L16885-L16923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16885-L16923)

```diff
-     function Li(kk) {
-       var {
-         value: ek,
-         selection: ik,
-         onChange: Dk,
-         onStatistics: fk,
-         onCreateEditor: Pk,
-         onUpdate: mk,
-         extensions: Mk = Yi,
-         autoFocus: Kk,
-         theme: xk = "light",
-         height: nk = null,
-         minHeight: Uk = null,
-         maxHeight: Hk = null,
-         width: wk = null,
-         minWidth: lk = null,
- ... (23 more removed lines; see GitHub link above)
+     function Jz(CC, zC) {
+       return [Az, bC.m.fromClass(class {
+         constructor(CC) {
+           this.view = CC, this.onDown = CC => {
+             const zC = CC.target instanceof Element && null !== CC.target.closest(".cm-tooltip");
+             0 !== CC.button || zC || this.view.state.field(Az) || this.view.dispatch({
+               effects: Rz.of(!0)
+             })
+           }, this.onUp = () => {
+             this.view.state.field(Az) && this.view.dispatch({
+               effects: Rz.of(!1)
+             })
+           }, CC.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
```

#### 54. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16925-L16930` → after: `L481-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L481-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L481-L519) · [Before (L16925-L16930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16925-L16930)

```diff
-       }), Ek = rk.f.updateListener.of((kk => {
-         if (kk.docChanged && "function" === typeof Dk && !kk.transactions.some((kk => kk.annotation(yi)))) {
-           zk.current ? zk.current.reset() : (zk.current = new Hi((() => {
-             if (Qk.current) {
-               var kk = Qk.current;
-               Qk.current = null, kk()
+         destroy() {
+           this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
+         }
+       }), bC.t.compute(["selection", Az], (ZC => function(CC, zC, ZC) {
+         const QC = CC.selection.main;
+         return QC.empty || CC.field(Az) || CC.sliceDoc(QC.from, QC.to).trim().length < 2 ? null : {
+           pos: QC.from,
+           above: !0,
+           create: CC => {
+             const QC = document.createElement("div");
+             QC.className = "CodeSelectionActions", QC.setAttribute("role", "toolbar"), QC.setAttribute("aria-label", "AI Helper: picked code");
+             for (const {
+                 action: wC,
+                 label: bC
+               }
+               of xz) {
+ ... (23 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L16999-L17000` → after: `L523-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L523-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L523-L550) · [Before (L16999-L17000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L16999-L17000)

```diff
-         return () => {
-           Fk && (Ik(void 0), uk(void 0))
+       }(ZC, CC, zC)))]
+     }
+     var Iz = ZC(1056);
+     const iz = new Set(["(", "{", "[", "<"]),
+       vz = new Set([")", "}", "]", ">"]),
+       ez = {
+         text: "var(--codeTooltipText, white)",
+         parameterName: "var(--codeTooltipParameterName, orange)",
+         parameter: "var(--codeTooltipParameter, cyan)",
+         suffix: "var(--codeTooltipSuffix, pink)",
+         docs: "var(--codeTooltipDocs, gray)"
+       };
+ 
+     function hz(CC) {
+       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+ 
+ ... (12 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L17002-L17027` → after: `L552-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L552-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L552-L559) · [Before (L17002-L17027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L17002-L17027)

```diff
-       }), [dk, qk]), (0, Sk.useEffect)((() => {
-         kk.container && Vk(kk.container)
-       }), [kk.container]), (0, Sk.useEffect)((() => () => {
-         Fk && (Fk.destroy(), uk(void 0)), zk.current && (zk.current.cancel(), zk.current = null)
-       }), [Fk]), (0, Sk.useEffect)((() => {
-         Kk && Fk && Fk.focus()
-       }), [Kk, Fk]), (0, Sk.useEffect)((() => {
-         Fk && Fk.dispatch({
-           effects: bk.D.reconfigure.of(ak)
-         })
-       }), [xk, Mk, nk, Uk, Hk, wk, lk, pk, yk, Yk, Lk, Ck, Ak, Dk, mk]), (0, Sk.useEffect)((() => {
-         if (void 0 !== ek) {
-           var kk = Fk ? Fk.state.doc.toString() : "";
-           if (Fk && ek !== kk) {
-             var ik = () => {
-               Fk && ek !== Fk.state.doc.toString() && Fk.dispatch({
- ... (10 more removed lines; see GitHub link above)
+         return QC
+       }
+       const QC = [];
+       if (QC.push(...ZC(CC.prefixDisplayParts, ez.text)), CC.parameters.length > 0) {
+         QC.push("\n");
+         for (let wC = 0; wC < CC.parameters.length; wC++) {
+           const bC = CC.parameters[wC];
+           QC.push("\t"), QC.push(...ZC(bC.displayParts, ez.parameter, null !== zC && wC !== zC)), QC.push("\n")
```

#### 57. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L17038-L17123` → after: `L564-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L564-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L564-L592) · [Before (L17038-L17123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L17038-L17123)

```diff
-     var Ci = ik(1066),
-       Ai = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly",  … [truncated]
-       ji = (0, Sk.forwardRef)(((kk, ek) => {
-         var {
-           className: ik,
-           value: bk = "",
-           selection: rk,
-           extensions: Pk = [],
-           onChange: mk,
-           onStatistics: Mk,
-           onCreateEditor: Kk,
-           onUpdate: xk,
-           autoFocus: nk,
-           theme: Uk = "light",
-           height: Hk,
-           minHeight: wk,
- ... (70 more removed lines; see GitHub link above)
+     var Kz = function(CC) {
+       return CC[CC.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", CC[CC.DuplicateIdentifier = 2300] = "DuplicateIdentifier", CC
+     }(Kz || {});
+     const Yz = new Set([Kz.DuplicateIdentifier]),
+       dz = new Set([Kz.VariableDefinedElsewhere]),
+       mz = new Set([]),
+       Hz = "/index.js";
+ 
+     function Ez(CC) {
+       return "/" + CC
+     }
+ 
+     function lz(CC, zC, ZC) {
+       CC.getSourceFile(zC) && CC.deleteFile(zC), CC.createFile(zC, ZC)
+     }
+ 
+ ... (13 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L17130-L17135` → after: `L597-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L597-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L597-L635) · [Before (L17130-L17135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L17130-L17135)

```diff
-       if ("string" == typeof ek) kk.appendChild(document.createTextNode(ek));
-       else if (null == ek);
-       else if (null != ek.nodeType) kk.appendChild(ek);
-       else {
-         if (!Array.isArray(ek)) throw new RangeError("Unsupported child node: " + ek);
-         for (var ik = 0; ik < ek.length; ik++) fk(kk, ek[ik])
+       return ZC => {
+         var QC, wC;
+         const bC = CC.languageService.getCompletionsAtPosition(zC, ZC.pos, {});
+         if (!bC) return {
+           from: ZC.pos,
+           options: []
+         };
+         let nC = null !== (QC = null === (wC = bC.optionalReplacementSpan) || void 0 === wC ? void 0 : wC.start) && void 0 !== QC ? QC : ZC.pos;
+         if (!bC.optionalReplacementSpan) {
+           const CC = ZC.state.doc.sliceString(0, ZC.pos);
+           for (; nC > 0 && /[\w$]/.test(CC[nC - 1]);) nC--
+         }
+         return bC.entries = bC.entries.filter((CC => CC.kind !== SC().ScriptElementKind.warning)), {
+           from: nC,
+           options: bC.entries.map((QC => {
+             var wC, bC, fC, oC;
+ ... (23 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L17156-L17157` → after: `L639-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L639-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L639-L654) · [Before (L17156-L17157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L17156-L17157)

```diff
-         function Dk(kk) {
-           return /^@/.test(kk) ? [kk] : kk.split(/,\s*/)
+     function rz(CC) {
+       return zC => {
+         const ZC = document.createElement("div");
+         ZC.className = "CodeEditorTooltip";
+         let QC = !1;
+         return queueMicrotask((() => {
+           QC || (fC.render((0, Iz.jsx)(NC.e, {
+             text: CC
+           }), ZC), zC.requestMeasure())
+         })), {
+           dom: ZC,
+           destroy() {
+             QC = !0, queueMicrotask((() => {
+               fC.unmountComponentAtNode(ZC)
+             }))
+           }
```

#### 60. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L17160-L17172` → after: `L659-L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L659-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L659-L720) · [Before (L17160-L17172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L17160-L17172)

```diff
-         function fk(kk, ek, Sk, bk) {
-           let rk = [],
-             Pk = /^@(\w+)\b/.exec(kk[0]),
-             mk = Pk && "keyframes" == Pk[1];
-           if (Pk && null == ek) return Sk.push(kk[0] + ";");
-           for (let ik in ek) {
-             let bk = ek[ik];
-             if (/&/.test(ik)) fk(ik.split(/,\s*/).map((ek => kk.map((kk => ek.replace(/&/, kk))))).reduce(((kk, ek) => kk.concat(ek))), bk, Sk);
-             else if (bk && "object" == typeof bk) {
-               if (!Pk) throw new RangeError("The value of a property (" + ik + ") should be a primitive value.");
-               fk(Dk(ik), bk, rk, mk)
-             } else null != bk && rk.push(ik.replace(/_.*/, "").replace(/[A-Z]/g, (kk => "-" + kk.toLowerCase())) + ": " + bk + ";")
-           }(rk.length || mk) && Sk.push((!ik || Pk || bk ? kk : kk.map(ik)).join(", ") + " {" + rk.join(" ") + "}")
+     function sz(CC, zC, ZC) {
+       return QC => {
+         var wC;
+         if (!zC) return [];
+         const bC = null === (wC = QC.selection.np[0]) || void 0 === wC ? void 0 : wC.head;
+         if (void 0 === bC) return [];
+         const nC = CC.languageService.getSignatureHelpItems(ZC, bC, {});
+         if (!nC || !nC.items.length) return [];
+         const fC = nC.applicableSpan.start - nC.items[0].prefixDisplayParts.map((CC => CC.text)).join("").length,
+           oC = nC.applicableSpan.start,
+           qC = QC.doc.lineAt(bC),
+           FC = qC.from,
+           WC = Math.min(qC.to, bC);
+         let NC, MC;
+         return fC < FC ? (NC = FC, MC = WC) : (NC = fC, MC = oC), [{
+           pos: NC,
+ ... (46 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L17174-L17186` → after: `L722-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L722-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L722-L743) · [Before (L17174-L17186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L17174-L17186)

```diff
-         for (let Sk in kk) fk(Dk(Sk), kk[Sk], this.rules)
-       }
-       getRules() {
-         return this.rules.join("\n")
-       }
-       static newName() {
-         let kk = Sk[Dk] || 1;
-         return Sk[Dk] = kk + 1, "\u037c" + kk.toString(36)
-       }
-       static mount(kk, ek, ik) {
-         let Dk = kk[fk],
-           Sk = ik && ik.nonce;
-         Dk ? Sk && Dk.setNonce(Sk) : Dk = new Pk(kk, Sk), Dk.mount(Array.isArray(ek) ? ek : [ek], kk)
+         const oC = [];
+         for (const CC of bC.displayParts) oC.push({
+           str: CC.text,
+           style: {
+             color: ez.text
+           }
+         });
+         if (bC.documentation) {
+           oC.push("\n\n");
+           for (const CC of bC.documentation) oC.push({
+             str: CC.text,
+             style: {
+               color: ez.docs
+             }
+           })
+         }
+ ... (6 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L17189-L17213` → after: `L746-L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L746-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L746-L902) · [Before (L17189-L17213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L17189-L17213)

```diff
-     let rk = new Map;
-     class Pk {
-       constructor(kk, ek) {
-         let ik = kk.ownerDocument || kk,
-           Dk = ik.defaultView;
-         if (!kk.head && kk.adoptedStyleSheets && Dk.CSSStyleSheet) {
-           let ek = rk.get(ik);
-           if (ek) return kk[fk] = ek;
-           this.sheet = new Dk.CSSStyleSheet, rk.set(ik, this)
-         } else this.styleTag = ik.createElement("style"), ek && this.styleTag.setAttribute("nonce", ek);
-         this.modules = [], kk[fk] = this
-       }
-       mount(kk, ek) {
-         let ik = this.sheet,
-           Dk = 0,
-           fk = 0;
- ... (9 more removed lines; see GitHub link above)
+     const az = {
+       indentSize: 4,
+       tabSize: 4,
+       newLineCharacter: "\n",
+       convertTabsToSpaces: !0,
+       insertSpaceAfterCommaDelimiter: !0,
+       insertSpaceAfterSemicolonInForStatements: !0,
+       insertSpaceBeforeAndAfterBinaryOperators: !0,
+       insertSpaceAfterKeywordsInControlFlowStatements: !0,
+       insertSpaceAfterFunctionKeywordForAnonymousFunctions: !0,
+       insertSpaceBeforeFunctionParenthesis: !1,
+       insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: !1,
+       insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: !1,
+       insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: !0,
+       insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: !1,
+       insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces: !1,
+ ... (141 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L17216-L17227` → after: `L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/292.js#L1181) · [Before (L17216-L17227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/292.js#L17216-L17227)

```diff
-         if (ik) ek.adoptedStyleSheets.indexOf(this.sheet) < 0 && (ek.adoptedStyleSheets = [this.sheet, ...ek.adoptedStyleSheets]);
-         else {
-           let kk = "";
-           for (let ek = 0; ek < this.modules.length; ek++) kk += this.modules[ek].getRules() + "\n";
-           this.styleTag.textContent = kk;
-           let ik = ek.head || ek;
-           this.styleTag.parentNode != ik && ik.insertBefore(this.styleTag, ik.firstChild)
-         }
-       }
-       setNonce(kk) {
-         this.styleTag && this.styleTag.getAttribute("nonce") != kk && this.styleTag.setAttribute("nonce", kk)
-       }
+       }, Yz)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/293.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/293.js` (210 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663)

#### 1. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L4)

```diff
-   40876: (kk, ek, ik) => {
+   41122: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L8-L10` → after: `L7-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L7-L8) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L8-L10)

```diff
-       ChangeSet: () => zk,
-       f: () => qe,
-       h: () => Xk,
+       g: () => iz,
+       i: () => Gz,
```

#### 3. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L12` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L10) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L12)

```diff
-       n: () => Tk,
+       m: () => Ez,
```

#### 4. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L14-L28` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L12) · [Before (L14-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L14-L28)

```diff
-       q: () => Se,
-       w: () => Be,
-       s: () => ce,
-       A: () => he,
-       D: () => Ce,
-       E: () => Jk,
-       I: () => Hk,
-       K: () => Ae,
-       L: () => dk,
-       M: () => Fk,
-       Q: () => Ee,
-       S: () => ei,
-       U: () => sk,
-       Y: () => ii,
-       ab: () => Vk
+       r: () => Nz
```

#### 5. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L30-L40` → after: `L14-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14-L39) · [Before (L30-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L30-L40)

```diff
-     let Dk = [],
-       fk = [];
- 
-     function Sk(kk) {
-       if (kk < 768) return !1;
-       for (let ek = 0, ik = Dk.length;;) {
-         let Sk = ek + ik >> 1;
-         if (kk < Dk[Sk]) ik = Sk;
-         else {
-           if (!(kk >= fk[Sk])) return !0;
-           ek = Sk + 1
+     var QC = ZC(41125),
+       wC = ZC(41128),
+       bC = ZC(41142);
+     class nC {
+       constructor(CC, zC, ZC, QC) {
+         this.state = CC, this.pos = zC, this.explicit = ZC, this.view = QC, this.abortListeners = [], this.abortOnDocChange = !1
+       }
+       tokenBefore(CC) {
+         let zC = (0, bC.gb)(this.state).resolveInner(this.pos, -1);
+         for (; zC && CC.indexOf(zC.name) < 0;) zC = zC.parent;
+         return zC ? {
+           from: zC.from,
+           to: this.pos,
+           text: this.state.sliceDoc(zC.from, this.pos),
+           type: zC.type
+         } : null
+ ... (10 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L42` → after: `L41-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L41-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L41-L46) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L42)

```diff
-         if (ek == ik) return !1
+       }
+       get aborted() {
+         return null == this.abortListeners
+       }
+       addEventListener(CC, zC, ZC) {
+         "abort" == CC && this.abortListeners && (this.abortListeners.push(zC), ZC && ZC.onDocChange && (this.abortOnDocChange = !0))
```

#### 7. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L47-L55` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L51-L53) · [Before (L47-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L47-L55)

```diff
-       return kk >= 127462 && kk <= 127487
-     }(() => {
-       let kk = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7, … [truncated]
-       for (let ek = 0, ik = 0; ek < kk.length; ek++)(ek % 2 ? fk : Dk).push(ik += kk[ek])
-     })();
-     const rk = 8205;
- 
-     function Pk(kk, ek) {
-       return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? mk : Mk)(kk, ek, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
+       let zC = Object.keys(CC).join(""),
+         ZC = /\w/.test(zC);
+       return ZC && (zC = zC.replace(/\w/g, "")), `[${ZC?"\\w":""}${zC.replace(/[^\w\s]/g,"\\$&")}]`
```

#### 8. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L58-L72` → after: `L56-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L56-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L56-L68) · [Before (L58-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L58-L72)

```diff
-     function mk(kk, ek, ik) {
-       if (ek == kk.length) return ek;
-       ek && xk(kk.charCodeAt(ek)) && nk(kk.charCodeAt(ek - 1)) && ek--;
-       let Dk = Kk(kk, ek);
-       for (ek += Uk(Dk); ek < kk.length;) {
-         let fk = Kk(kk, ek);
-         if (Dk == rk || fk == rk || ik && Sk(fk)) ek += Uk(fk), Dk = fk;
-         else {
-           if (!bk(fk)) break;
-           {
-             let ik = 0,
-               Dk = ek - 2;
-             for (; Dk >= 0 && bk(Kk(kk, Dk));) ik++, Dk -= 2;
-             if (ik % 2 == 0) break;
-             ek += 2
+     function oC(CC) {
+       let zC = CC.map((CC => "string" == typeof CC ? {
+           label: CC
+         } : CC)),
+         [ZC, QC] = zC.every((CC => /^\w+$/.test(CC.label))) ? [/\w*$/, /\w+$/] : function(CC) {
+           let zC = Object.create(null),
+             ZC = Object.create(null);
+           for (let {
+               label: wC
+             }
+             of CC) {
+             zC[wC[0]] = !0;
+             for (let CC = 1; CC < wC.length; CC++) ZC[wC[CC]] = !0
```

#### 9. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L74` → after: `L70-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L70-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L70-L79) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L74)

```diff
-         }
+           let QC = fC(zC) + fC(ZC) + "*$";
+           return [new RegExp("^" + QC), new RegExp(QC)]
+         }(zC);
+       return CC => {
+         let wC = CC.matchBefore(QC);
+         return wC || CC.explicit ? {
+           from: wC ? wC.from : CC.pos,
+           options: zC,
+           validFor: ZC
+         } : null
```

#### 10. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L79-L83` → after: `L83-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L83-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L83-L89) · [Before (L79-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L79-L83)

```diff
-     function Mk(kk, ek, ik) {
-       for (; ek > 0;) {
-         let Dk = mk(kk, ek - 2, ik);
-         if (Dk < ek) return Dk;
-         ek--
+     function qC(CC, zC) {
+       return ZC => {
+         for (let zC = (0, bC.gb)(ZC.state).resolveInner(ZC.pos, -1); zC; zC = zC.parent) {
+           if (CC.indexOf(zC.name) > -1) return null;
+           if (zC.type.isTop) break
+         }
+         return zC(ZC)
```

#### 11. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L87-L92` → after: `L92-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L92-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L92-L95) · [Before (L87-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L87-L92)

```diff
- 
-     function Kk(kk, ek) {
-       let ik = kk.charCodeAt(ek);
-       if (!nk(ik) || ek + 1 == kk.length) return ik;
-       let Dk = kk.charCodeAt(ek + 1);
-       return xk(Dk) ? Dk - 56320 + (ik - 55296 << 10) + 65536 : ik
+     class FC {
+       constructor(CC, zC, ZC, QC) {
+         this.completion = CC, this.source = zC, this.match = ZC, this.score = QC
+       }
```

#### 12. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L96` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L99) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L96)

```diff
-       return kk >= 56320 && kk < 57344
+       return CC.selection.main.from
```

#### 13. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L99-L100` → after: `L102-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L102-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L102-L132) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L99-L100)

```diff
-     function nk(kk) {
-       return kk >= 55296 && kk < 56320
+     function NC(CC, zC) {
+       var ZC;
+       let {
+         source: QC
+       } = CC, wC = zC && "^" != QC[0], bC = "$" != QC[QC.length - 1];
+       return wC || bC ? new RegExp(`${wC?"^":""}(?:${QC})${bC?"$":""}`, null !== (ZC = CC.flags) && void 0 !== ZC ? ZC : CC.ignoreCase ? "i" : "") : CC
+     }
+     const MC = QC.d.define();
+ 
+     function gC(CC, zC, ZC, wC) {
+       let {
+         main: bC
+       } = CC.selection, nC = ZC - bC.from, fC = wC - bC.from;
+       return {
+         ...CC.changeByRange((oC => {
+           if (oC != bC && ZC != wC && CC.sliceDoc(oC.from + nC, oC.from + fC) != CC.sliceDoc(ZC, wC)) return {
+ ... (15 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L104` → after: `L137-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L137-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L137-L139) · [Before (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L104)

```diff
-       return kk < 65536 ? 1 : 2
+       if (!Array.isArray(CC)) return CC;
+       let zC = SC.get(CC);
+       return zC || SC.set(CC, zC = oC(CC)), zC
```

#### 15. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L107-L118` → after: `L144-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L144-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L144-L154) · [Before (L107-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L107-L118)

```diff
-       lineAt(kk) {
-         if (kk < 0 || kk > this.length) throw new RangeError(`Invalid position ${kk} in document of length ${this.length}`);
-         return this.lineInner(kk, !1, 1, 0)
-       }
-       line(kk) {
-         if (kk < 1 || kk > this.lines) throw new RangeError(`Invalid line number ${kk} in ${this.lines}-line document`);
-         return this.lineInner(kk, !0, 1, 0)
-       }
-       replace(kk, ek, ik) {
-         [kk, ek] = jk(this, kk, ek);
-         let Dk = [];
-         return this.decompose(0, kk, Dk, 2), ik.length && ik.decompose(0, ik.length, Dk, 3), this.decompose(ek, this.length, Dk, 1), lk.from(Dk, this.length - (ek - kk) + ik.length)
+       constructor(CC) {
+         this.pattern = CC, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
+         for (let zC = 0; zC < CC.length;) {
+           let ZC = (0, QC.I)(CC, zC),
+             wC = (0, QC.M)(ZC);
+           this.chars.push(ZC);
+           let bC = CC.slice(zC, zC + wC),
+             nC = bC.toUpperCase();
+           this.folded.push((0, QC.I)(nC == bC ? bC.toLowerCase() : nC, 0)), zC += wC
+         }
+         this.astral = CC.length != this.chars.length
```

#### 16. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L120-L121` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L156-L157) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L120-L121)

```diff
-       append(kk) {
-         return this.replace(this.length, this.length, kk)
+       ret(CC, zC) {
+         return this.score = CC, this.matched = zC, this
```

#### 17. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L123-L127` → after: `L159-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L159-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L159-L205) · [Before (L123-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L123-L127)

```diff
-       slice(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
-         [kk, ek] = jk(this, kk, ek);
-         let ik = [];
-         return this.decompose(kk, ek, ik, 0), lk.from(ik, ek - kk)
+       match(CC) {
+         if (0 == this.pattern.length) return this.ret(-100, []);
+         if (CC.length < this.pattern.length) return null;
+         let {
+           chars: zC,
+           folded: ZC,
+           any: wC,
+           precise: bC,
+           byWord: nC
+         } = this;
+         if (1 == zC.length) {
+           let wC = (0, QC.I)(CC, 0),
+             bC = (0, QC.M)(wC),
+             nC = bC == CC.length ? 0 : -100;
+           if (wC == zC[0]);
+           else {
+ ... (31 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L129-L138` → after: `L207-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L207-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L207-L212) · [Before (L129-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L129-L138)

```diff
-       eq(kk) {
-         if (kk == this) return !0;
-         if (kk.length != this.length || kk.lines != this.lines) return !1;
-         let ek = this.scanIdentical(kk, 1),
-           ik = this.length - this.scanIdentical(kk, -1),
-           Dk = new Yk(this),
-           fk = new Yk(kk);
-         for (let Sk = ek, bk = ek;;) {
-           if (Dk.next(Sk), fk.next(Sk), Sk = 0, Dk.lineBreak != fk.lineBreak || Dk.done != fk.done || Dk.value != fk.value) return !1;
-           if (bk += Dk.value.length, Dk.done || bk >= ik) return !0
+       result(CC, zC, ZC) {
+         let wC = [],
+           bC = 0;
+         for (let nC of zC) {
+           let CC = nC + (this.astral ? (0, QC.M)((0, QC.I)(ZC, nC)) : 1);
+           bC && wC[bC - 1] == nC ? wC[bC - 1] = CC : (wC[bC++] = nC, wC[bC++] = CC)
```

#### 19. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L141-L142` → after: `L216-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L216-L219) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L141-L142)

```diff
-       iter() {
-         return new Yk(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
+     }
+     class AC {
+       constructor(CC) {
+         this.pattern = CC, this.matched = [], this.score = 0, this.folded = CC.toLowerCase()
```

#### 20. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L144-L146` → after: `L221-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L221-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L221-L225) · [Before (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L144-L146)

```diff
-       iterRange(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
-         return new Lk(this, kk, ek)
+       match(CC) {
+         if (CC.length < this.pattern.length) return null;
+         let zC = CC.slice(0, this.pattern.length),
+           ZC = zC == this.pattern ? 0 : zC.toLowerCase() == this.folded ? -200 : null;
+         return null == ZC ? null : (this.matched = [0, zC.length], this.score = ZC + (CC.length == this.pattern.length ? 0 : -100), this)
```

#### 21. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L148-L156` → after: `L227-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L227-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L227-L276) · [Before (L148-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L148-L156)

```diff
-       iterLines(kk, ek) {
-         let ik;
-         if (null == kk) ik = this.iter();
-         else {
-           null == ek && (ek = this.lines + 1);
-           let Dk = this.line(kk).from;
-           ik = this.iterRange(Dk, Math.max(Dk, ek == this.lines + 1 ? this.length : ek <= 1 ? 0 : this.line(ek - 1).to))
-         }
-         return new Ck(ik)
+     }
+     const xC = QC.n.define({
+       combine: CC => (0, QC.P)(CC, {
+         activateOnTyping: !0,
+         activateOnCompletion: () => !1,
+         activateOnTypingDelay: 100,
+         selectOnOpen: !0,
+         override: null,
+         closeOnBlur: !0,
+         maxRenderedOptions: 100,
+         defaultKeymap: !0,
+         tooltipClass: () => "",
+         optionClass: () => "",
+         aboveCursor: !1,
+         icons: !0,
+         addToOptions: [],
+ ... (34 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L158-L159` → after: `L278-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L278-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L278-L280) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L158-L159)

```diff
-       toString() {
-         return this.sliceString(0)
+       return {
+         style: `${NC}: ${fC/((zC.bottom-zC.top)/nC.offsetHeight)}px; max-width: ${oC/((zC.right-zC.left)/nC.offsetWidth)}px`,
+         class: "cm-completionInfo-" + (WC ? qC ? "left-narrow" : "right-narrow" : FC ? "left" : "right")
```

#### 23. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L161-L163` → after: `L282-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L282-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L282-L295) · [Before (L161-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L161-L163)

```diff
-       toJSON() {
-         let kk = [];
-         return this.flatten(kk), kk
+     }
+     const iC = QC.w.define();
+ 
+     function vC(CC, zC, ZC) {
+       if (CC <= ZC) return {
+         from: 0,
+         to: CC
+       };
+       if (zC < 0 && (zC = 0), zC <= CC >> 1) {
+         let CC = Math.floor(zC / ZC);
+         return {
+           from: CC * ZC,
+           to: (CC + 1) * ZC
+         }
```

#### 24. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L165-L168` → after: `L297-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L297-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L297-L300) · [Before (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L165-L168)

```diff
-       constructor() {}
-       static of (kk) {
-         if (0 == kk.length) throw new RangeError("A document must have at least one line");
-         return 1 != kk.length || kk[0] ? kk.length <= 32 ? new wk(kk) : lk.from(wk.split(kk, [])) : Hk.empty
+       let QC = Math.floor((CC - zC) / ZC);
+       return {
+         from: CC - (QC + 1) * ZC,
+         to: CC - QC * ZC
```

#### 25. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L171-L178` → after: `L303-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L303-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L303-L365) · [Before (L171-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L171-L178)

```diff
-     class wk extends Hk {
-       constructor(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(kk) {
-           let ek = -1;
-           for (let ik of kk) ek += ik.length + 1;
-           return ek
-         }(kk);
-         super(), this.text = kk, this.length = ek
+     class eC {
+       constructor(CC, zC, ZC) {
+         this.view = CC, this.stateField = zC, this.applyCompletion = ZC, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
+           read: () => this.measureInfo(),
+           write: CC => this.placeInfo(CC),
+           key: this
+         }, this.space = null, this.currentClass = "";
+         let QC = CC.state.field(zC),
+           {
+             options: wC,
+             selected: bC
+           } = QC.open,
+           nC = CC.state.facet(xC);
+         this.optionContent = function(CC) {
+           let zC = CC.addToOptions.slice();
+           return CC.icons && zC.push({
+ ... (47 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L180-L181` → after: `L367-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L367-L368) · [Before (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L180-L181)

```diff
-       get lines() {
-         return this.text.length
+       mount() {
+         this.updateSel()
```

#### 27. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L183-L184` → after: `L370-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L370-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L370-L373) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L183-L184)

```diff
-       get children() {
-         return null
+       showOptions(CC, zC) {
+         this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(CC, zC, this.range)), this.list.addEventListener("scroll", (() => {
+           this.info && this.view.requestMeasure(this.placeInfoReq)
+         }))
```

#### 28. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L186-L191` → after: `L375-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L375-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L375-L385) · [Before (L186-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L186-L191)

```diff
-       lineInner(kk, ek, ik, Dk) {
-         for (let fk = 0;; fk++) {
-           let Sk = this.text[fk],
-             bk = Dk + Sk.length;
-           if ((ek ? ik : bk) >= kk) return new Ak(Dk, bk, ik, Sk);
-           Dk = bk + 1, ik++
+       update(CC) {
+         var zC;
+         let ZC = CC.state.field(this.stateField),
+           QC = CC.startState.field(this.stateField);
+         if (this.updateTooltipClass(CC.state), ZC != QC) {
+           let {
+             options: wC,
+             selected: bC,
+             disabled: nC
+           } = ZC.open;
+           QC.open && QC.open.options == wC || (this.range = vC(wC.length, bC, CC.state.facet(xC).maxRenderedOptions), this.showOptions(wC, ZC.id)), this.updateSel(), nC != (null === (zC = QC.open) || void 0 === zC ? void 0 : zC.disabled) && this.dom.classList.toggle("cm-tooltip-a … [truncated]
```

#### 29. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L194-L221` → after: `L388-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L388-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L388-L393) · [Before (L194-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L194-L221)

```diff
-       decompose(kk, ek, ik, Dk) {
-         let fk = kk <= 0 && ek >= this.length ? this : new wk(yk(this.text, kk, ek), Math.min(ek, this.length) - Math.max(0, kk));
-         if (1 & Dk) {
-           let kk = ik.pop(),
-             ek = pk(fk.text, kk.text.slice(), 0, fk.length);
-           if (ek.length <= 32) ik.push(new wk(ek, kk.length + fk.length));
-           else {
-             let kk = ek.length >> 1;
-             ik.push(new wk(ek.slice(0, kk)), new wk(ek.slice(kk)))
-           }
-         } else ik.push(fk)
-       }
-       replace(kk, ek, ik) {
-         if (!(ik instanceof wk)) return super.replace(kk, ek, ik);
-         [kk, ek] = jk(this, kk, ek);
-         let Dk = pk(this.text, pk(ik.text, yk(this.text, 0, kk)), ek),
- ... (12 more removed lines; see GitHub link above)
+       updateTooltipClass(CC) {
+         let zC = this.tooltipClass(CC);
+         if (zC != this.currentClass) {
+           for (let CC of this.currentClass.split(" ")) CC && this.dom.classList.remove(CC);
+           for (let CC of zC.split(" ")) CC && this.dom.classList.add(CC);
+           this.currentClass = zC
```

#### 30. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L228-L235` → after: `L396-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L396-L397) · [Before (L228-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L228-L235)

```diff
-       scanIdentical() {
-         return 0
-       }
-       static split(kk, ek) {
-         let ik = [],
-           Dk = -1;
-         for (let fk of kk) ik.push(fk), Dk += fk.length + 1, 32 == ik.length && (ek.push(new wk(ik, Dk)), ik = [], Dk = -1);
-         return Dk > -1 && ek.push(new wk(ik, Dk)), ek
+       positioned(CC) {
+         this.space = CC, this.info && this.view.requestMeasure(this.placeInfoReq)
```

#### 31. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L237-L241` → after: `L399-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L399-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L399-L417) · [Before (L237-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L237-L241)

```diff
-     }
-     class lk extends Hk {
-       constructor(kk, ek) {
-         super(), this.children = kk, this.length = ek, this.lines = 0;
-         for (let ik of kk) this.lines += ik.lines
+       updateSel() {
+         let CC = this.view.state.field(this.stateField),
+           zC = CC.open;
+         (zC.selected > -1 && zC.selected < this.range.from || zC.selected >= this.range.to) && (this.range = vC(zC.options.length, zC.selected, this.view.state.facet(xC).maxRenderedOptions), this.showOptions(zC.options, CC.id));
+         let ZC = this.updateSelectedOption(zC.selected);
+         if (ZC) {
+           this.destroyInfo();
+           let {
+             completion: QC
+           } = zC.options[zC.selected], {
+             info: bC
+           } = QC;
+           if (!bC) return;
+           let nC = "string" === typeof bC ? document.createTextNode(bC) : bC(QC);
+           if (!nC) return;
+           "then" in nC ? nC.then((zC => {
+ ... (3 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L243-L249` → after: `L419-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L419-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L419-L428) · [Before (L243-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L243-L249)

```diff
-       lineInner(kk, ek, ik, Dk) {
-         for (let fk = 0;; fk++) {
-           let Sk = this.children[fk],
-             bk = Dk + Sk.length,
-             rk = ik + Sk.lines - 1;
-           if ((ek ? rk : bk) >= kk) return Sk.lineInner(kk, ek, ik, Dk);
-           Dk = bk + 1, ik = rk + 1
+       addInfoPane(CC, zC) {
+         this.destroyInfo();
+         let ZC = this.info = document.createElement("div");
+         if (ZC.className = "cm-tooltip cm-completionInfo", ZC.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != CC.nodeType) ZC.appendChild(CC), this.infoDestroy = null;
+         else {
+           let {
+             dom: zC,
+             destroy: QC
+           } = CC;
+           ZC.appendChild(zC), this.infoDestroy = QC || null
```

#### 33. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L252-L258` → after: `L432-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L432-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L432-L455) · [Before (L252-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L252-L258)

```diff
-       decompose(kk, ek, ik, Dk) {
-         for (let fk = 0, Sk = 0; Sk <= ek && fk < this.children.length; fk++) {
-           let bk = this.children[fk],
-             rk = Sk + bk.length;
-           if (kk <= rk && ek >= Sk) {
-             let fk = Dk & ((Sk <= kk ? 1 : 0) | (rk >= ek ? 2 : 0));
-             Sk >= kk && rk <= ek && !fk ? ik.push(bk) : bk.decompose(kk - Sk, ek - Sk, ik, fk)
+       updateSelectedOption(CC) {
+         let zC = null;
+         for (let ZC = this.list.firstChild, QC = this.range.from; ZC; ZC = ZC.nextSibling, QC++) "LI" == ZC.nodeName && ZC.id ? QC == CC ? ZC.hasAttribute("aria-selected") || (ZC.setAttribute("aria-selected", "true"), zC = ZC) : ZC.hasAttribute("aria-selected") && (ZC.removeAttri … [truncated]
+         return zC && function(CC, zC) {
+           let ZC = CC.getBoundingClientRect(),
+             QC = zC.getBoundingClientRect(),
+             wC = ZC.height / CC.offsetHeight;
+           QC.top < ZC.top ? CC.scrollTop -= (ZC.top - QC.top) / wC : QC.bottom > ZC.bottom && (CC.scrollTop += (QC.bottom - ZC.bottom) / wC)
+         }(this.list, zC), zC
+       }
+       measureInfo() {
+         let CC = this.dom.querySelector("[aria-selected]");
+         if (!CC || !this.info) return null;
+         let zC = this.dom.getBoundingClientRect(),
+           ZC = this.info.getBoundingClientRect(),
+           QC = CC.getBoundingClientRect(),
+ ... (8 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L263-L273` → after: `L460-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L460-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L460-L481) · [Before (L263-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L263-L273)

```diff
-       replace(kk, ek, ik) {
-         if ([kk, ek] = jk(this, kk, ek), ik.lines < this.lines)
-           for (let Dk = 0, fk = 0; Dk < this.children.length; Dk++) {
-             let Sk = this.children[Dk],
-               bk = fk + Sk.length;
-             if (kk >= fk && ek <= bk) {
-               let rk = Sk.replace(kk - fk, ek - fk, ik),
-                 Pk = this.lines - Sk.lines + rk.lines;
-               if (rk.lines < Pk >> 4 && rk.lines > Pk >> 6) {
-                 let fk = this.children.slice();
-                 return fk[Dk] = rk, new lk(fk, this.length - (ek - kk) + ik.length)
+       placeInfo(CC) {
+         this.info && (CC ? (CC.style && (this.info.style.cssText = CC.style), this.info.className = "cm-tooltip cm-completionInfo " + (CC.class || "")) : this.info.style.cssText = "top: -1e6px")
+       }
+       createListBox(CC, zC, ZC) {
+         const QC = document.createElement("ul");
+         QC.id = zC, QC.setAttribute("role", "listbox"), QC.setAttribute("aria-expanded", "true"), QC.setAttribute("aria-label", this.view.state.phrase("Completions")), QC.addEventListener("mousedown", (CC => {
+           CC.target == QC && CC.preventDefault()
+         }));
+         let wC = null;
+         for (let bC = ZC.from; bC < ZC.to; bC++) {
+           let {
+             completion: nC,
+             match: fC
+           } = CC[bC], {
+             section: oC
+           } = nC;
+ ... (6 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L279-L289` → after: `L484-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L484-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L484-L491) · [Before (L279-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L279-L289)

```diff
-         return super.replace(kk, ek, ik)
-       }
-       sliceString(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
-           ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
-         [kk, ek] = jk(this, kk, ek);
-         let Dk = "";
-         for (let fk = 0, Sk = 0; fk < this.children.length && Sk <= ek; fk++) {
-           let bk = this.children[fk],
-             rk = Sk + bk.length;
-           Sk > kk && fk && (Dk += ik), kk < rk && ek > Sk && (Dk += bk.sliceString(kk - Sk, ek - Sk, ik)), Sk = rk + 1
+           const qC = QC.appendChild(document.createElement("li"));
+           qC.id = zC + "-" + bC, qC.setAttribute("role", "option");
+           let FC = this.optionClass(nC);
+           FC && (qC.className = FC);
+           for (let CC of this.optionContent) {
+             let zC = CC(nC, this.view.state, this.view, fC);
+             zC && qC.appendChild(zC)
+           }
```

#### 36. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L291` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L493) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L291)

```diff
-         return Dk
+         return ZC.from && QC.classList.add("cm-completionListIncompleteTop"), ZC.to < CC.length && QC.classList.add("cm-completionListIncompleteBottom"), QC
```

#### 37. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L293-L306` → after: `L495-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L495-L496) · [Before (L293-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L293-L306)

```diff
-       flatten(kk) {
-         for (let ek of this.children) ek.flatten(kk)
-       }
-       scanIdentical(kk, ek) {
-         if (!(kk instanceof lk)) return 0;
-         let ik = 0,
-           [Dk, fk, Sk, bk] = ek > 0 ? [0, 0, this.children.length, kk.children.length] : [this.children.length - 1, kk.children.length - 1, -1, -1];
-         for (;; Dk += ek, fk += ek) {
-           if (Dk == Sk || fk == bk) return ik;
-           let rk = this.children[Dk],
-             Pk = kk.children[fk];
-           if (rk != Pk) return ik + rk.scanIdentical(Pk, ek);
-           ik += rk.length + 1
-         }
+       destroyInfo() {
+         this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
```

#### 38. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L308-L336` → after: `L498-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L498-L499) · [Before (L308-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L308-L336)

```diff
-       static from(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.reduce(((kk, ek) => kk + ek.length + 1), -1),
-           ik = 0;
-         for (let xk of kk) ik += xk.lines;
-         if (ik < 32) {
-           let ik = [];
-           for (let ek of kk) ek.flatten(ik);
-           return new wk(ik, ek)
-         }
-         let Dk = Math.max(32, ik >> 5),
-           fk = Dk << 1,
-           Sk = Dk >> 1,
-           bk = [],
-           rk = 0,
-           Pk = -1,
-           mk = [];
- ... (13 more removed lines; see GitHub link above)
+       destroy() {
+         this.destroyInfo()
```

#### 39. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L341-L348` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L504) · [Before (L341-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L341-L348)

```diff
-       let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-         Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
-       for (let fk = 0, Sk = 0, bk = !0; Sk < kk.length && fk <= Dk; Sk++) {
-         let rk = kk[Sk],
-           Pk = fk + rk.length;
-         Pk >= ik && (Pk > Dk && (rk = rk.slice(0, Dk - fk)), fk < ik && (rk = rk.slice(ik - fk)), bk ? (ek[ek.length - 1] += rk, bk = !1) : ek.push(rk)), fk = Pk + 1
-       }
-       return ek
+       return ZC => new eC(ZC, CC, zC)
```

#### 40. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L351-L352` → after: `L507-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L507-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L507-L508) · [Before (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L351-L352)

```diff
-     function yk(kk, ek, ik) {
-       return pk(kk, [""], ek, ik)
+     function KC(CC) {
+       return 100 * (CC.boost || 0) + (CC.apply ? 10 : 0) + (CC.info ? 5 : 0) + (CC.type ? 1 : 0)
```

#### 41. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L356-L385` → after: `L511-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L511-L512) · [Before (L356-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L356-L385)

```diff
-       constructor(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         this.dir = ek, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [kk], this.offsets = [ek > 0 ? 1 : (kk instanceof wk ? kk.text.length : kk.children.length) << 1]
-       }
-       nextInner(kk, ek) {
-         for (this.done = this.lineBreak = !1;;) {
-           let ik = this.nodes.length - 1,
-             Dk = this.nodes[ik],
-             fk = this.offsets[ik],
-             Sk = fk >> 1,
-             bk = Dk instanceof wk ? Dk.text.length : Dk.children.length;
-           if (Sk == (ek > 0 ? bk : 0)) {
-             if (0 == ik) return this.done = !0, this.value = "", this;
-             ek > 0 && this.offsets[ik - 1]++, this.nodes.pop(), this.offsets.pop()
-           } else if ((1 & fk) == (ek > 0 ? 0 : 1)) {
-             if (this.offsets[ik] += ek, 0 == kk) return this.lineBreak = !0, this.value = "\n", this;
- ... (14 more removed lines; see GitHub link above)
+       constructor(CC, zC, ZC, QC, wC, bC) {
+         this.options = CC, this.attrs = zC, this.tooltip = ZC, this.timestamp = QC, this.selected = wC, this.disabled = bC
```

#### 42. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L387-L390` → after: `L514-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L514-L515) · [Before (L387-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L387-L390)

```diff
-     }
-     class Lk {
-       constructor(kk, ek, ik) {
-         this.value = "", this.done = !1, this.cursor = new Yk(kk, ek > ik ? -1 : 1), this.pos = ek > ik ? kk.length : 0, this.from = Math.min(ek, ik), this.to = Math.max(ek, ik)
+       setSelected(CC, zC) {
+         return CC == this.selected || CC >= this.options.length ? this : new YC(this.options, EC(zC, CC), this.tooltip, this.timestamp, CC, this.disabled)
```

#### 43. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L392-L400` → after: `L517-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L517-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L517-L592) · [Before (L392-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L392-L400)

```diff
-       nextInner(kk, ek) {
-         if (ek < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
-         kk += Math.max(0, ek < 0 ? this.pos - this.to : this.from - this.pos);
-         let ik = ek < 0 ? this.pos - this.from : this.to - this.pos;
-         kk > ik && (kk = ik), ik -= kk;
-         let {
-           value: Dk
-         } = this.cursor.next(kk);
-         return this.pos += (Dk.length + kk) * ek, this.value = Dk.length <= ik ? Dk : ek < 0 ? Dk.slice(Dk.length - ik) : Dk.slice(0, ik), this.done = !this.value, this
+       static build(CC, zC, ZC, QC, wC, bC) {
+         if (QC && !bC && CC.some((CC => CC.isPending))) return QC.setDisabled();
+         let nC = function(CC, zC) {
+           let ZC = [],
+             QC = null,
+             wC = null,
+             bC = CC => {
+               ZC.push(CC);
+               let {
+                 section: zC
+               } = CC.completion;
+               if (zC) {
+                 QC || (QC = []);
+                 let CC = "string" == typeof zC ? zC : zC.name;
+                 QC.some((zC => zC.name == CC)) || QC.push("string" == typeof zC ? {
+                   name: CC
+ ... (60 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L402-L404` → after: `L594-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L594-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L594-L598) · [Before (L402-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L402-L404)

```diff
-       next() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
-         return kk < 0 ? kk = Math.max(kk, this.from - this.pos) : kk > 0 && (kk = Math.min(kk, this.to - this.pos)), this.nextInner(kk, this.cursor.dir)
+       map(CC) {
+         return new YC(this.options, this.attrs, {
+           ...this.tooltip,
+           pos: CC.mapPos(this.tooltip.pos)
+         }, this.timestamp, this.selected, this.disabled)
```

#### 45. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L406-L407` → after: `L600-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L600-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L600-L601) · [Before (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L406-L407)

```diff
-       get lineBreak() {
-         return this.cursor.lineBreak && "" != this.value
+       setDisabled() {
+         return new YC(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
```

#### 46. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L411-L412` → after: `L605-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L605-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L605-L606) · [Before (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L411-L412)

```diff
-       constructor(kk) {
-         this.inner = kk, this.afterBreak = !0, this.value = "", this.done = !1
+       constructor(CC, zC, ZC) {
+         this.active = CC, this.id = zC, this.open = ZC
```

#### 47. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L414-L421` → after: `L608-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L608-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L608-L609) · [Before (L414-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L414-L421)

```diff
-       next() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           {
-             done: ek,
-             lineBreak: ik,
-             value: Dk
-           } = this.inner.next(kk);
-         return ek && this.afterBreak ? (this.value = "", this.afterBreak = !1) : ek ? (this.done = !0, this.value = "") : ik ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = Dk, this.afterBreak = !1), this
+       static start() {
+         return new dC(lC, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
```

#### 48. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L423-L424` → after: `L611-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L611-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L611-L630) · [Before (L423-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L423-L424)

```diff
-       get lineBreak() {
-         return !1
+       update(CC) {
+         let {
+           state: zC
+         } = CC, ZC = zC.facet(xC), QC = (ZC.override || zC.languageDataAt("autocomplete", WC(zC)).map(pC)).map((zC => (this.active.find((CC => CC.source == zC)) || new cC(zC, this.active.some((CC => 0 != CC.state)) ? 1 : 0)).update(CC, ZC)));
+         QC.length == this.active.length && QC.every(((CC, zC) => CC == this.active[zC])) && (QC = this.active);
+         let wC = this.open,
+           bC = CC.effects.some((CC => CC.is(rC)));
+         wC && CC.docChanged && (wC = wC.map(CC.changes)), CC.selection || QC.some((zC => zC.hasResult() && CC.changes.touchesRange(zC.from, zC.to))) || ! function(CC, zC) {
+           if (CC == zC) return !0;
+           for (let ZC = 0, QC = 0;;) {
+             for (; ZC < CC.length && !CC[ZC].hasResult();) ZC++;
+             for (; QC < zC.length && !zC[QC].hasResult();) QC++;
+             let wC = ZC == CC.length,
+               bC = QC == zC.length;
+             if (wC || bC) return wC == bC;
+             if (CC[ZC++].result != zC[QC++].result) return !1
+ ... (4 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L426-L434` → after: `L632-L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L632-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L632-L633) · [Before (L426-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L426-L434)

```diff
-     }
-     "undefined" != typeof Symbol && (Hk.prototype[Symbol.iterator] = function() {
-       return this.iter()
-     }, Yk.prototype[Symbol.iterator] = Lk.prototype[Symbol.iterator] = Ck.prototype[Symbol.iterator] = function() {
-       return this
-     });
-     class Ak {
-       constructor(kk, ek, ik, Dk) {
-         this.from = kk, this.to = ek, this.number = ik, this.text = Dk
+       get tooltip() {
+         return this.open ? this.open.tooltip : null
```

#### 50. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L436-L437` → after: `L635-L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L635-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L635-L636) · [Before (L436-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L436-L437)

```diff
-       get length() {
-         return this.to - this.from
+       get attrs() {
+         return this.open ? this.open.attrs : this.active.length ? mC : HC
```

#### 51. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L440-L443` → after: `L639-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L639-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L639-L642) · [Before (L440-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L440-L443)

```diff
- 
-     function jk(kk, ek, ik) {
-       return [ek = Math.max(0, Math.min(kk.length, ek)), Math.max(ek, Math.min(kk.length, ik))]
-     }
+     const mC = {
+         "aria-autocomplete": "list"
+       },
+       HC = {};
```

#### 52. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L446` → after: `L645-L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L645-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L645-L650) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L446)

```diff
-       return Pk(kk, ek, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
+       let ZC = {
+         "aria-autocomplete": "list",
+         "aria-haspopup": "listbox",
+         "aria-controls": CC
+       };
+       return zC > -1 && (ZC["aria-activedescendant"] = CC + "-" + zC), ZC
```

#### 53. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L450-L464` → after: `L655-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L655-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L655-L660) · [Before (L450-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L450-L464)

```diff
-       let ik = kk.charCodeAt(ek);
-       if (!((Dk = ik) >= 55296 && Dk < 56320) || ek + 1 == kk.length) return ik;
-       var Dk;
-       let fk = kk.charCodeAt(ek + 1);
-       return function(kk) {
-         return kk >= 56320 && kk < 57344
-       }(fk) ? fk - 56320 + (ik - 55296 << 10) + 65536 : ik
-     }
- 
-     function Vk(kk) {
-       return kk <= 65535 ? String.fromCharCode(kk) : (kk -= 65536, String.fromCharCode(55296 + (kk >> 10), 56320 + (1023 & kk)))
-     }
- 
-     function Fk(kk) {
-       return kk < 65536 ? 1 : 2
+       if (CC.isUserEvent("input.complete")) {
+         let ZC = CC.annotation(MC);
+         if (ZC && zC.activateOnCompletion(ZC)) return 12
+       }
+       let ZC = CC.isUserEvent("input.type");
+       return ZC && zC.activateOnTyping ? 5 : ZC ? 1 : CC.isUserEvent("delete.backward") ? 2 : CC.selection ? 8 : CC.docChanged ? 16 : 0
```

#### 54. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L471-L472` → after: `L663-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L663-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L663-L665) · [Before (L471-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L471-L472)

```diff
-       constructor(kk) {
-         this.sections = kk
+       constructor(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         this.source = CC, this.state = zC, this.explicit = ZC
```

#### 55. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L474-L477` → after: `L667-L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L667-L668) · [Before (L474-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L474-L477)

```diff
-       get length() {
-         let kk = 0;
-         for (let ek = 0; ek < this.sections.length; ek += 2) kk += this.sections[ek];
-         return kk
+       hasResult() {
+         return !1
```

#### 56. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L479-L484` → after: `L670-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L670-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L670-L681) · [Before (L479-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L479-L484)

```diff
-       get newLength() {
-         let kk = 0;
-         for (let ek = 0; ek < this.sections.length; ek += 2) {
-           let ik = this.sections[ek + 1];
-           kk += ik < 0 ? this.sections[ek] : ik
-         }
+       get isPending() {
+         return 1 == this.state
+       }
+       update(CC, zC) {
+         let ZC = XC(CC, zC),
+           QC = this;
+         (8 & ZC || 16 & ZC && this.touches(CC)) && (QC = new cC(QC.source, 0)), 4 & ZC && 0 == QC.state && (QC = new cC(this.source, 1)), QC = QC.updateFor(CC, ZC);
+         for (let wC of CC.effects)
+           if (wC.is(PC)) QC = new cC(QC.source, 1, wC.value);
+           else if (wC.is(GC)) QC = new cC(QC.source, 0);
+         else if (wC.is(rC))
+           for (let CC of wC.value) CC.source == QC.source && (QC = CC);
```

#### 57. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L487-L488` → after: `L684-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L684-L685) · [Before (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L487-L488)

```diff
-       get empty() {
-         return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
+       updateFor(CC, zC) {
+         return this.map(CC.changes)
```

#### 58. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L490-L494` → after: `L687-L14018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L687-L14018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L687-L14018) · [Before (L490-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L490-L494)

```diff
-       iterGaps(kk) {
-         for (let ek = 0, ik = 0, Dk = 0; ek < this.sections.length;) {
-           let fk = this.sections[ek++],
-             Sk = this.sections[ek++];
-           Sk < 0 ? (kk(ik, Dk, fk), Dk += fk) : Dk += Sk, ik += fk
+       map(CC) {
+         return this
+       }
+       touches(CC) {
+         return CC.changes.touchesRange(WC(CC.state))
+       }
+     }
+     class uC extends cC {
+       constructor(CC, zC, ZC, QC, wC, bC) {
+         super(CC, 3, zC), this.limit = ZC, this.result = QC, this.from = wC, this.to = bC
+       }
+       hasResult() {
+         return !0
+       }
+       updateFor(CC, zC) {
+         var ZC;
+ ... (13316 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L497-L498` → after: `L14021-L14232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14021-L14232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14021-L14232) · [Before (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L497-L498)

```diff
-       iterChangedRanges(kk) {
-         Ek(this, kk, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
+       prop(CC) {
+         return CC.perNode ? this.props ? this.props[CC.id] : void 0 : this.type.prop(CC)
+       }
+       get propValues() {
+         let CC = [];
+         if (this.props)
+           for (let zC in this.props) CC.push([+zC, this.props[zC]]);
+         return CC
+       }
+       balance() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         return this.children.length <= 8 ? this : mC(qC.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((CC, zC, ZC) => new gC(this.type, CC, zC, ZC, this.propValues)), CC.makeTree || ((CC, zC, ZC) => new gC(qC.none, CC, zC, ZC)))
+       }
+       static build(CC) {
+         return function(CC) {
+           var zC;
+ ... (196 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L500` → after: `L14234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14234) · [Before (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L500)

```diff
-       get invertedDesc() {
+       toString() {
```

#### 61. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L502-L507` → after: `L14236-L14237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14236-L14237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14236-L14237) · [Before (L502-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L502-L507)

```diff
-         for (let ek = 0; ek < this.sections.length;) {
-           let ik = this.sections[ek++],
-             Dk = this.sections[ek++];
-           Dk < 0 ? kk.push(ik, Dk) : kk.push(Dk, ik)
-         }
-         return new Ik(kk)
+         for (let zC = 0; zC < this.buffer.length;) CC.push(this.childString(zC)), zC = this.buffer[zC + 3];
+         return CC.join(",")
```

#### 62. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L509-L510` → after: `L14239-L14247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14239-L14247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14239-L14247) · [Before (L509-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L509-L510)

```diff
-       composeDesc(kk) {
-         return this.empty ? kk : kk.empty ? this : ak(this, kk)
+       childString(CC) {
+         let zC = this.buffer[CC],
+           ZC = this.buffer[CC + 3],
+           QC = this.set.types[zC],
+           wC = QC.name;
+         if (/\W/.test(wC) && !QC.isError && (wC = JSON.stringify(wC)), ZC == (CC += 4)) return wC;
+         let bC = [];
+         for (; CC < ZC;) bC.push(this.childString(CC)), CC = this.buffer[CC + 3];
+         return wC + "(" + bC.join(",") + ")"
```

#### 63. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L512-L514` → after: `L14249-L14254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14249-L14254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14249-L14254) · [Before (L512-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L512-L514)

```diff
-       mapDesc(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         return kk.empty ? this : hk(this, kk, ek)
+       findChild(CC, zC, ZC, QC, wC) {
+         let {
+           buffer: bC
+         } = this, nC = -1;
+         for (let fC = CC; fC != zC && !(PC(wC, QC, bC[fC + 1], bC[fC + 2]) && (nC = fC, ZC > 0)); fC = bC[fC + 3]);
+         return nC
```

#### 64. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L516-L519` → after: `L14256-L14258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14256-L14258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14256-L14258) · [Before (L516-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L516-L519)

```diff
-       mapPos(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
-           ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qk.Simple,
-           Dk = 0,
+       slice(CC, zC, ZC) {
+         let QC = this.buffer,
+           wC = new Uint16Array(zC - CC),
```

#### 65. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L521-L533` → after: `L14260-L14263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14260-L14263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14260-L14263) · [Before (L521-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L521-L533)

```diff
-         for (let Sk = 0; Sk < this.sections.length;) {
-           let bk = this.sections[Sk++],
-             rk = this.sections[Sk++],
-             Pk = Dk + bk;
-           if (rk < 0) {
-             if (Pk > kk) return fk + (kk - Dk);
-             fk += bk
-           } else {
-             if (ik != qk.Simple && Pk >= kk && (ik == qk.TrackDel && Dk < kk && Pk > kk || ik == qk.TrackBefore && Dk < kk || ik == qk.TrackAfter && Pk > kk)) return null;
-             if (Pk > kk || Pk == kk && ek < 0 && !bk) return kk == Dk || ek < 0 ? fk : fk + rk;
-             fk += rk
-           }
-           Dk = Pk
+         for (let nC = CC, fC = 0; nC < zC;) {
+           wC[fC++] = QC[nC++], wC[fC++] = QC[nC++] - ZC;
+           let zC = wC[fC++] = QC[nC++] - ZC;
+           wC[fC++] = QC[nC++] - CC, bC = Math.max(bC, zC)
```

#### 66. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L535-L536` → after: `L14265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14265) · [Before (L535-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L535-L536)

```diff
-         if (kk > Dk) throw new RangeError(`Position ${kk} is out of range for changeset of length ${Dk}`);
-         return fk
+         return new pC(wC, bC, this.set)
```

#### 67. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L538-L545` → after: `L14267-L14282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R14267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L14267-L14282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/293.js#L14267-L14282) · [Before (L538-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/293.js#L538-L545)

```diff
-       touchesRange(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
-         for (let ik = 0, Dk = 0; ik < this.sections.length && Dk <= ek;) {
-           let fk = Dk + this.sections[ik++];
-           if (this.sections[ik++] >= 0 && Dk <= ek && fk >= kk) return !(Dk < kk && fk > ek) || "cover";
-           Dk = fk
-         }
-         return !1
+     }
+ 
+     function PC(CC, zC, ZC, QC) {
+       switch (CC) {
+         case -2:
+           return ZC < zC;
+         case -1:
+           return QC >= zC && ZC < zC;
+         case 0:
+           return ZC < zC && QC > zC;
+         case 1:
+           return ZC <= zC && QC > zC;
+         case 2:
+           return QC > zC;
+         case 4:
+           return !0
```
