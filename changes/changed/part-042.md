# Changed — Bundle Modifications Report (Part 042 / 133)

- **Updated at**: `2026-11-20T23:38 JST`
- **Part**: `42 / 133` (**415** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 041](part-041.md) · [Part 043 →](part-043.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/262.js` (qepqb8.0352199c → bcgkc.38229551 · continued)

- **File**: `bundles/bloxd.io/chunks/js/262.js` (630 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e)

#### 150. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1720` → after: `L1720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L1720) · [Before (L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L1720)

```diff
-           for (const zv of pv.stridedArrays) vv = vv.replace(new RegExp(`\\b${zv}\\s*\\[(.*?)\\]`, "g"), `${zv}[$1].el`);
+           for (const kT of yT.stridedArrays) TT = TT.replace(new RegExp(`\\b${kT}\\s*\\[(.*?)\\]`, "g"), `${kT}[$1].el`);
```

#### 151. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1724-L1725` → after: `L1724-L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1724-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L1724-L1725) · [Before (L1724-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L1724-L1725)

```diff
-         vertex: `${Wv}\n${av}\n${sv}\n${iv(Pv.body)}`,
-         fragment: `diagnostic(off, derivative_uniformity);\n${Wv}\n${Cv}\n${dS((cv=iv(hv.body),cv.includes("fragmentInputs.position")?cv.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):cv))} … [truncated]
+         vertex: `${CT}\n${vT}\n${tT}\n${NT(cT.body)}`,
+         fragment: `diagnostic(off, derivative_uniformity);\n${CT}\n${hT}\n${xM((QT=NT(lT.body),QT.includes("fragmentInputs.position")?QT.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):QT))} … [truncated]
```

#### 152. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1742-L1747` → after: `L1742-L1747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1742-L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L1742-L1747) · [Before (L1742-L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L1742-L1747)

```diff
-       CS = `${sh}\n${Hh}\n${sS.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
-       iS = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${WS.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: Eart … [truncated]
-       cS = `\n${bv}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(Cz).map((vv=>{let[zv,Pv]=vv;return`const TONE_${zv}: f32 = ${Pv};`})).join(" ")}\n\n// The  … [truncated]
-     var GS = Pv(36591);
-     const mS = new GS.fa,
-       jS = new GS.fa,
+       NM = `${hl}\n${Rl}\n${hM.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
+       QM = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${jM.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: Eart … [truncated]
+       SM = `\n${nT}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(hk).map((TT=>{let[kT,cT]=TT;return`const TONE_${kT}: f32 = ${cT};`})).join(" ")}\n\n// The  … [truncated]
+     var DM = cT(36885);
+     const aM = new DM.Fv,
+       FM = new DM.Fv,
```

#### 153. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1765` → after: `L1765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L1765) · [Before (L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L1765)

```diff
-         mS.set(zv.distance * Math.cos(Pv) * Math.cos(vv), zv.distance * Math.sin(-vv), zv.distance * Math.sin(Pv) * Math.cos(vv)), GS.Quaternion.FromUnitVectorsToRef(GS.fa.UpReadOnly, jS.set(zv.up[0], zv.up[1], zv.up[2]), fS), mS.rotateByQuaternionToRef(fS, mS)
+         aM.set(kT.distance * Math.cos(cT) * Math.cos(TT), kT.distance * Math.sin(-TT), kT.distance * Math.sin(cT) * Math.cos(TT)), DM.Quaternion.FromUnitVectorsToRef(DM.Fv.UpReadOnly, FM.set(kT.up[0], kT.up[1], kT.up[2]), rM), aM.rotateByQuaternionToRef(rM, aM)
```

#### 154. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1779` → after: `L1779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L1779) · [Before (L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L1779)

```diff
-     var KS = Pv(38254);
+     var JM = cT(38553);
```

#### 155. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1865` → after: `L1865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L1865) · [Before (L1865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L1865)

```diff
-         return `data:${zv>5?vv.slice(5,zv):""} URL of ${vv.length} characters`
+         return `data:${kT>5?TT.slice(5,kT):""} URL of ${TT.length} characters`
```

#### 156. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1867` → after: `L1867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L1867) · [Before (L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L1867)

```diff
-       return vv.length > 80 ? `${vv.slice(0,80)}...` : vv
+       return TT.length > 80 ? `${TT.slice(0,80)}...` : TT
```

#### 157. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1871` → after: `L1871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L1871) · [Before (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L1871)

```diff
-       if (!zv.ok) throw new Error(`${qS(vv)}: ${zv.status} ${zv.statusText}`);
+       if (!kT.ok) throw new Error(`${EM(TT)}: ${kT.status} ${kT.statusText}`);
```

#### 158. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1895` → after: `L1895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L1895) · [Before (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L1895)

```diff
-       const ev = null !== (Sv = ZS.get(vv)) && void 0 !== Sv ? Sv : new Map;
+       const KT = null !== (MT = XM.get(TT)) && void 0 !== MT ? MT : new Map;
```

#### 159. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1906` → after: `L1906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L1906) · [Before (L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L1906)

```diff
-         }(Pv, hv)) && void 0 !== Sv ? Sv : await async function(vv) {
+         }(cT, lT)) && void 0 !== MT ? MT : await async function(TT) {
```

#### 160. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1921` → after: `L1921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L1921) · [Before (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L1921)

```diff
-           texture: xS(vv, ev.pixels, gv, gv, pv, `atlas-${zv}`),
+           texture: GM(TT, KT.pixels, OT, OT, yT, `atlas-${kT}`),
```

#### 161. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1962` → after: `L1962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L1962) · [Before (L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L1962)

```diff
-         if (!HS.has((0, KS.h)(zv))) return !1;
+         if (!RM.has((0, JM.f)(kT))) return !1;
```

#### 162. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1998` → after: `L1998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L1998) · [Before (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L1998)

```diff
-         gv && gv !== this.packGroup && (vv.setBindGroup(Oz.d, gv), this.packGroup = gv);
+         OT && OT !== this.packGroup && (TT.setBindGroup(mk.h, OT), this.packGroup = OT);
```

#### 163. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2009` → after: `L2009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2009) · [Before (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2009)

```diff
-         this.modelMeshes = vv, this.Vk = zv, this.maker = Pv, this.warnOnce = hv, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
+         this.modelMeshes = TT, this.Ws = kT, this.maker = cT, this.warnOnce = lT, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
```

#### 164. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2016-L2017` → after: `L2016-L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2016-L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2016-L2017) · [Before (L2016-L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2016-L2017)

```diff
-         for (const zv of this.modelMeshes.groupIds())(zv < -1 || zv > 1) && this.warnOnce(`group:${zv}`, `rendering group ${zv} is not drawn`);
-         for (const zv of this.Vk.groupIds())(zv < -1 || zv > 1) && this.warnOnce(`group:${zv}`, `rendering group ${zv} is not drawn`);
+         for (const kT of this.modelMeshes.groupIds())(kT < -1 || kT > 1) && this.warnOnce(`group:${kT}`, `rendering group ${kT} is not drawn`);
+         for (const kT of this.Ws.groupIds())(kT < -1 || kT > 1) && this.warnOnce(`group:${kT}`, `rendering group ${kT} is not drawn`);
```

#### 165. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2022` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2022) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2022)

```diff
-           gv = this.Vk.group(zv),
+           OT = this.Ws.group(kT),
```

#### 166. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2024` → after: `L2024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2024) · [Before (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2024)

```diff
-         this.collectList(vv, null === ev || void 0 === ev ? void 0 : ev.opaque, pv || null === gv || void 0 === gv ? void 0 : gv.opaque, zv, !1, Pv, Sv), pv && (this.Vk.drawn += this.maker.bundleDraws(vv, pv, zv)), this.collectList(vv, null === ev || void 0 === ev ? void 0 : ev.a … [truncated]
+         this.collectList(TT, null === KT || void 0 === KT ? void 0 : KT.opaque, yT || null === OT || void 0 === OT ? void 0 : OT.opaque, kT, !1, cT, MT), yT && (this.Ws.drawn += this.maker.bundleDraws(TT, yT, kT)), this.collectList(TT, null === KT || void 0 === KT ? void 0 : KT.a … [truncated]
```

#### 167. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2029` → after: `L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2029) · [Before (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2029)

```diff
-         zv && this.maker.pushDraws(vv, zv.units, zv.units.length, hv, Sv, ev, zv.rows), Pv && (this.Vk.drawn += this.maker.pushDraws(vv, Pv, Pv.length, hv, Sv, ev));
+         kT && this.maker.pushDraws(TT, kT.units, kT.units.length, lT, MT, KT, kT.rows), cT && (this.Ws.drawn += this.maker.pushDraws(TT, cT, cT.length, lT, MT, KT));
```

#### 168. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2054` → after: `L2054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2054) · [Before (L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2054)

```diff
-       return vv.hasThinInstances ? "thin" : vv.Phv || vv._userInstancedBuffersStorage ? "instanced" : "none"
+       return TT.hasThinInstances ? "thin" : TT.tlT || TT._userInstancedBuffersStorage ? "instanced" : "none"
```

#### 169. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2058` → after: `L2058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2058) · [Before (L2058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2058)

```diff
-       return vv ? (Pv._needUVs = !0, vv.optimizeUVAllocation && (0, Dv.I)(vv.matrix) ? (Pv[`${zv}DIRECTUV`] = vv.uvSet + 1, Pv[`MAINUV${vv.uvSet+1}`] = !0) : Pv[`${zv}DIRECTUV`] = 0, !0) : (Pv[`${zv}DIRECTUV`] = 0, !1)
+       return TT ? (cT._needUVs = !0, TT.optimizeUVAllocation && (0, bT.K)(TT.matrix) ? (cT[`${kT}DIRECTUV`] = TT.uvSet + 1, cT[`MAINUV${TT.uvSet+1}`] = !0) : cT[`${kT}DIRECTUV`] = 0, !0) : (cT[`${kT}DIRECTUV`] = 0, !1)
```

#### 170. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2086` → after: `L2086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2086) · [Before (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2086)

```diff
-       return null !== zv && void 0 !== zv && zv.live ? zv : null
+       return null !== kT && void 0 !== kT && kT.live ? kT : null
```

#### 171. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2091` → after: `L2091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2091) · [Before (L2091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2091)

```diff
-       return null !== (zv = Se(vv)) && void 0 !== zv ? zv : uS
+       return null !== (kT = KK(TT)) && void 0 !== kT ? kT : TK
```

#### 172. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2103` → after: `L2103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2103) · [Before (L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2103)

```diff
-           if (!vv) return this.warnOnce("model", `${Pv.name} on ${ev.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
+           if (!TT) return this.warnOnce("model", `${cT.name} on ${KT.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
```

#### 173. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2126` → after: `L2126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2126) · [Before (L2126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2126)

```diff
-           for (const [Pv, hv] of vv) zv += !0 === hv ? `${Pv};` : `${Pv}=${hv};`;
+           for (const [cT, lT] of TT) kT += !0 === lT ? `${cT};` : `${cT}=${lT};`;
```

#### 174. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2139` → after: `L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2139) · [Before (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2139)

```diff
-         return 0 === this.modelPackVariant ? null : null !== (zv = (0, nv.x)(vv, Yv.i.name)) && void 0 !== zv && zv.active ? "placed" : vv.item ? "item" : vv.lifeform ? "lifeform" : vv.box ? "box" : null
+         return 0 === this.modelPackVariant ? null : null !== (kT = (0, wT.x)(TT, PT.h.name)) && void 0 !== kT && kT.active ? "placed" : TT.item ? "item" : TT.lifeform ? "lifeform" : TT.box ? "box" : null
```

#### 175. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2143` → after: `L2143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2143) · [Before (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2143)

```diff
-         return "thin" === zv ? null !== (Sv = this.resources.OE.get(vv)) && void 0 !== Sv ? Sv : null : "instanced" === zv && null !== (Pv = null === (hv = vv._userInstancedBuffersStorage) || void 0 === hv ? void 0 : hv.interleavedKinds) && void 0 !== Pv ? Pv : null
+         return "thin" === kT ? null !== (MT = this.resources.Aq.get(TT)) && void 0 !== MT ? MT : null : "instanced" === kT && null !== (cT = null === (lT = TT._userInstancedBuffersStorage) || void 0 === lT ? void 0 : lT.interleavedKinds) && void 0 !== cT ? cT : null
```

#### 176. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2153` → after: `L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2153) · [Before (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2153)

```diff
-           for (; hv < this.view.lightCount && (vv[`LIGHT${hv}`] = !0, vv[`LITE_LIGHT${hv}_SLOT`] = hv, hv++, vv._needNormals = !0, hv !== zv););
+           for (; lT < this.view.lightCount && (TT[`LIGHT${lT}`] = !0, TT[`LITE_LIGHT${lT}_SLOT`] = lT, lT++, TT._needNormals = !0, lT !== kT););
```

#### 177. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2155` → after: `L2155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2155) · [Before (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2155)

```diff
-         for (let Sv = hv; Sv < 4; Sv++) vv[`LIGHT${Sv}`] = !1, vv[`LITE_LIGHT${Sv}_SLOT`] = void 0
+         for (let MT = lT; MT < 4; MT++) TT[`LIGHT${MT}`] = !1, TT[`LITE_LIGHT${MT}_SLOT`] = void 0
```

#### 178. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2165` → after: `L2165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2165) · [Before (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2165)

```diff
-         dv ? (hv._needUVs = !0, hv.DIFFUSE = !0, dv.optimizeUVAllocation && (0, Dv.I)(dv.matrix) ? (hv.DIFFUSEDIRECTUV = dv.uvSet + 1, hv[`MAINUV${dv.uvSet+1}`] = !0) : hv.DIFFUSEDIRECTUV = 0, dv.uvSet > 1 && this.warnOnce(`uvset:${Pv.name}`, `${Pv.name} samples UV set ${dv.uvSet … [truncated]
+         fT ? (lT._needUVs = !0, lT.DIFFUSE = !0, fT.optimizeUVAllocation && (0, bT.K)(fT.matrix) ? (lT.DIFFUSEDIRECTUV = fT.uvSet + 1, lT[`MAINUV${fT.uvSet+1}`] = !0) : lT.DIFFUSEDIRECTUV = 0, fT.uvSet > 1 && this.warnOnce(`uvset:${cT.name}`, `${cT.name} samples UV set ${fT.uvSet … [truncated]
```

#### 179. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2168` → after: `L2168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2168) · [Before (L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2168)

```diff
-         hv.OPACITY = ze(Nv, "OPACITY", hv), hv.OPACITYRGB = null !== Nv && Nv.getAlphaFromRGB, hv.EMISSIVE = ze(lv, "EMISSIVE", hv), (Nv && Nv.uvSet > 1 || lv && lv.uvSet > 1) && this.warnOnce(`uvset:${Pv.name}`, `${Pv.name} samples a UV set past 2, which is not supported`);
+         lT.OPACITY = cK(xT, "OPACITY", lT), lT.OPACITYRGB = null !== xT && xT.getAlphaFromRGB, lT.EMISSIVE = cK(IT, "EMISSIVE", lT), (xT && xT.uvSet > 1 || IT && IT.uvSet > 1) && this.warnOnce(`uvset:${cT.name}`, `${cT.name} samples a UV set past 2, which is not supported`);
```

#### 180. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2175` → after: `L2175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2175) · [Before (L2175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2175)

```diff
-         hv.REFLECTION = Wv, hv.REFLECTIONMAP_3D = Wv, hv.REFLECTIONMAP_SKYBOX = Wv, hv.REFLECTIONMAP_OPPOSITEZ = Wv && (vv.useRightHandedSystem ? !Tv.invertZ : Tv.invertZ), hv.ROUGHNESS = Wv && Pv.roughness > 0, hv.REFLECTIONOVERALPHA = Wv && Pv.useReflectionOverAlpha, hv.LITE_RE … [truncated]
+         lT.REFLECTION = CT, lT.REFLECTIONMAP_3D = CT, lT.REFLECTIONMAP_SKYBOX = CT, lT.REFLECTIONMAP_OPPOSITEZ = CT && (TT.useRightHandedSystem ? !AT.invertZ : AT.invertZ), lT.ROUGHNESS = CT && cT.roughness > 0, lT.REFLECTIONOVERALPHA = CT && cT.useReflectionOverAlpha, lT.LITE_RE … [truncated]
```

#### 181. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2180` → after: `L2180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2180) · [Before (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2180)

```diff
-         hv.ALPHATEST = (0, nv.W)(Pv, wv, av), hv.ALPHAFROMDIFFUSE = (0, nv.hb)(Pv), hv.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== Pv.transparencyMode, hv.ALPHABLEND = null === Pv.transparencyMode || (0, nv.S)(Pv, wv, av), hv.PREMULTIPLYALPHA = 7 === Pv.alphaMode || 8 === Pv.a … [truncated]
+         lT.ALPHATEST = (0, wT.W)(cT, jT, vT), lT.ALPHAFROMDIFFUSE = (0, wT.lb)(cT), lT.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== cT.transparencyMode, lT.ALPHABLEND = null === cT.transparencyMode || (0, wT.V)(cT, jT, vT), lT.PREMULTIPLYALPHA = 7 === cT.alphaMode || 8 === cT.a … [truncated]
```

#### 182. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2188` → after: `L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2188) · [Before (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2188)

```diff
-           if (nv) null === (sv = (Cv = (0, lz.g)(Fv)).prepareDefinesBeforeAttributes) || void 0 === sv || sv.call(Cv, Yv, hv, vv, zv)
+           if (wT) null === (tT = (hT = (0, Ik.j)(rT)).prepareDefinesBeforeAttributes) || void 0 === tT || tT.call(hT, PT, lT, TT, kT)
```

#### 183. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2200` → after: `L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2200) · [Before (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2200)

```diff
-           if (nv) null === (cv = (Gv = (0, lz.g)(Fv)).prepareDefines) || void 0 === cv || cv.call(Gv, Yv, hv, vv, zv, Pv)
+           if (wT) null === (QT = (ST = (0, Ik.j)(rT)).prepareDefines) || void 0 === QT || QT.call(ST, PT, lT, TT, kT, cT)
```

#### 184. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2202` → after: `L2202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2202) · [Before (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2202)

```diff
-         const mv = vv.ma();
+         const DT = TT.Dv();
```

#### 185. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2210` → after: `L2210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2210) · [Before (L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2210)

```diff
-           if (nv && !1 === (null === (jv = (fv = (0, lz.g)(Fv)).isReadyForSubMesh) || void 0 === jv ? void 0 : jv.call(fv, Yv, hv, vv, mv))) return !1
+           if (wT && !1 === (null === (aT = (FT = (0, Ik.j)(rT)).isReadyForSubMesh) || void 0 === aT ? void 0 : aT.call(FT, PT, lT, TT, DT))) return !1
```

#### 186. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2227` → after: `L2227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2227) · [Before (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2227)

```diff
-           if (av) de(null === (Sv = (ev = (0, lz.g)(Wv)).getCustomCode) || void 0 === Sv ? void 0 : Sv.call(ev, wv, "vertex", fv.d.WGSL), Pv), de(null === (gv = (pv = (0, lz.g)(Wv)).getCustomCode) || void 0 === gv ? void 0 : gv.call(pv, wv, "fragment", fv.d.WGSL), hv)
+           if (vT) xK(null === (MT = (KT = (0, Ik.j)(CT)).getCustomCode) || void 0 === MT ? void 0 : MT.call(KT, jT, "vertex", FT.b.WGSL), cT), xK(null === (OT = (yT = (0, Ik.j)(CT)).getCustomCode) || void 0 === OT ? void 0 : OT.call(yT, jT, "fragment", FT.b.WGSL), lT)
```

#### 187. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2236-L2237` → after: `L2236-L2237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2236-L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2236-L2237) · [Before (L2236-L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2236-L2237)

```diff
-           const vv = null === (Nv = (lv = (0, lz.g)(Wv)).getUniforms) || void 0 === Nv ? void 0 : Nv.call(lv, wv, fv.d.WGSL);
-           for (const zv of null !== (Tv = null === vv || void 0 === vv ? void 0 : vv.ubo) && void 0 !== Tv ? Tv : []) {
+           const TT = null === (xT = (IT = (0, Ik.j)(CT)).getUniforms) || void 0 === xT ? void 0 : xT.call(IT, jT, FT.b.WGSL);
+           for (const kT of null !== (AT = null === TT || void 0 === TT ? void 0 : TT.ubo) && void 0 !== AT ? AT : []) {
```

#### 188. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2247` → after: `L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2247) · [Before (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2247)

```diff
-       }(vv, zv), `${Pv}#${vv.codeKey}`
+       }(TT, kT), `${cT}#${TT.codeKey}`
```

#### 189. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2271` → after: `L2271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2271) · [Before (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2271)

```diff
-           gv = null !== (Sv = vv.sideOrientation) && void 0 !== Sv ? Sv : zv.sideOrientation;
+           OT = null !== (MT = TT.sideOrientation) && void 0 !== MT ? MT : kT.sideOrientation;
```

#### 190. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2282` → after: `L2282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2282) · [Before (L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2282)

```diff
-         return hv && hv.alphaMode === dv && hv.depthWrite === Nv && hv.depthFunction === Wv && hv.cullMode === lv && hv.frontFace === Tv && hv.zOffset === wv && hv.zOffsetUnits === av && hv.colourWrite === sv && hv.topology === ev ? hv : this.stateFor(dv, Nv, Wv, lv, Tv, wv, av,  … [truncated]
+         return lT && lT.alphaMode === fT && lT.depthWrite === xT && lT.depthFunction === CT && lT.cullMode === IT && lT.frontFace === AT && lT.zOffset === jT && lT.zOffsetUnits === vT && lT.colourWrite === tT && lT.topology === KT ? lT : this.stateFor(fT, xT, CT, IT, AT, jT, vT,  … [truncated]
```

#### 191. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2285` → after: `L2285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2285) · [Before (L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2285)

```diff
-         const Nv = `${vv}|${zv}|${Pv}|${hv}|${Sv}|${ev}|${gv}|${pv}|${dv}`;
+         const xT = `${TT}|${kT}|${cT}|${lT}|${MT}|${KT}|${OT}|${yT}|${fT}`;
```

#### 192. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2290` → after: `L2290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2290) · [Before (L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2290)

```diff
-           vv && !Wv && this.warnOnce(`alpha:${vv}`, `alpha mode ${vv} is not supported`), lv = {
+           TT && !CT && this.warnOnce(`alpha:${TT}`, `alpha mode ${TT} is not supported`), IT = {
```

#### 193. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2299` → after: `L2299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2299) · [Before (L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2299)

```diff
-             depthCompare: Pv && null !== (Tv = Ne.get(Pv)) && void 0 !== Tv ? Tv : null,
+             depthCompare: cT && null !== (AT = IK.get(cT)) && void 0 !== AT ? AT : null,
```

#### 194. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2310` → after: `L2310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2310) · [Before (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2310)

```diff
-     var Te = Pv(36902);
+     var CK = cT(37265);
```

#### 195. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2322` → after: `L2322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2322) · [Before (L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2322)

```diff
-         const vv = (0, lz.g)(Pv).uniformsVersion;
+         const TT = (0, Ik.j)(cT).uniformsVersion;
```

#### 196. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2405` → after: `L2405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2405) · [Before (L2405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2405)

```diff
-         hv = Te.l,
+         lT = CK.f,
```

#### 197. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2410-L2411` → after: `L2410-L2411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2410-L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2410-L2411) · [Before (L2410-L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2410-L2411)

```diff
-           ev = gv * Te.e;
-         zv[vv] = Sv[ev + hv.vector], zv[vv + 1] = Sv[ev + hv.vector + 1], zv[vv + 2] = Sv[ev + hv.vector + 2], zv[vv + 3] = Sv[ev + hv.kind] === Te.h.directional ? 1 : 0, zv[vv + 4] = Sv[ev + hv.diffuse], zv[vv + 5] = Sv[ev + hv.diffuse + 1], zv[vv + 6] = Sv[ev + hv.diffuse + 2], … [truncated]
+           KT = OT * CK.c;
+         kT[TT] = MT[KT + lT.vector], kT[TT + 1] = MT[KT + lT.vector + 1], kT[TT + 2] = MT[KT + lT.vector + 2], kT[TT + 3] = MT[KT + lT.kind] === CK.d.directional ? 1 : 0, kT[TT + 4] = MT[KT + lT.diffuse], kT[TT + 5] = MT[KT + lT.diffuse + 1], kT[TT + 6] = MT[KT + lT.diffuse + 2], … [truncated]
```

#### 198. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2439` → after: `L2439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2439) · [Before (L2439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2439)

```diff
-         const Tv = vv.ma();
+         const AT = TT.Dv();
```

#### 199. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2447` → after: `L2447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2447) · [Before (L2447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2447)

```diff
-           if (Cv) null === (Wv = (wv = (0, lz.g)(av)).bind) || void 0 === Wv || Wv.call(wv, sv, Sv, vv, Tv)
+           if (hT) null === (CT = (jT = (0, Ik.j)(vT)).bind) || void 0 === CT || CT.call(jT, tT, MT, TT, AT)
```

#### 200. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2460` → after: `L2460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2460) · [Before (L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2460)

```diff
-         Sv = vv => 4 === Pv ? `${vv}x4` : 2 === Pv ? `${vv}x2` : null;
+         MT = TT => 4 === cT ? `${TT}x4` : 2 === cT ? `${TT}x2` : null;
```

#### 201. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2462` → after: `L2462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2462) · [Before (L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2462)

```diff
-         if (5126 === vv.type) return 1 === Pv ? "float32" : Pv >= 2 && Pv <= 4 ? `float32x${Pv}` : null;
+         if (5126 === TT.type) return 1 === cT ? "float32" : cT >= 2 && cT <= 4 ? `float32x${cT}` : null;
```

#### 202. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2480` → after: `L2480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2480) · [Before (L2480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2480)

```diff
-           return 1 === Pv ? `${ev}32` : Pv <= 4 ? `${ev}32x${Pv}` : null;
+           return 1 === cT ? `${KT}32` : cT <= 4 ? `${KT}32x${cT}` : null;
```

#### 203. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2483` → after: `L2483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2483) · [Before (L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2483)

```diff
-           return Sv(`${ev}8`);
+           return MT(`${KT}8`);
```

#### 204. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2486` → after: `L2486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2486) · [Before (L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2486)

```diff
-           return Sv(`${ev}16`)
+           return MT(`${KT}16`)
```

#### 205. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2494` → after: `L2494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2494) · [Before (L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2494)

```diff
-       return Pv ? Number(Pv[1]) / 8 * Number(null !== (zv = Pv[2]) && void 0 !== zv ? zv : 1) : 4
+       return cT ? Number(cT[1]) / 8 * Number(null !== (kT = cT[2]) && void 0 !== kT ? kT : 1) : 4
```

#### 206. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2532` → after: `L2532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2532) · [Before (L2532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2532)

```diff
-           if (!Nv) return this.warnOnce(`format:${zv}:${Pv.name}`, `${zv}'s ${Pv.name} (type ${pv.type}, size ${pv.getSize()}) has no WebGPU vertex format`), null;
+           if (!xT) return this.warnOnce(`format:${kT}:${cT.name}`, `${kT}'s ${cT.name} (type ${yT.type}, size ${yT.getSize()}) has no WebGPU vertex format`), null;
```

#### 207. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2553` → after: `L2553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2553) · [Before (L2553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2553)

```diff
-         if (Sv.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${zv}`, `${zv} needs ${Sv.length} vertex buffers`), null;
+         if (MT.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${kT}`, `${kT} needs ${MT.length} vertex buffers`), null;
```

#### 208. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2556-L2557` → after: `L2556-L2557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2556-L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2556-L2557) · [Before (L2556-L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2556-L2557)

```diff
-           pv += `${lv.stride}${"instance"===lv.step?"i":"v"}`;
-           for (const vv of lv.attributes) pv += `,${vv.shaderLocation}:${vv.offset}:${vv.format}`;
+           yT += `${IT.stride}${"instance"===IT.step?"i":"v"}`;
+           for (const TT of IT.attributes) yT += `,${TT.shaderLocation}:${TT.offset}:${TT.format}`;
```

#### 209. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2581` → after: `L2581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2581) · [Before (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2581)

```diff
-           Lk: Nv,
+           M6: xT,
```

#### 210. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2670` → after: `L2670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2670) · [Before (L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2670)

```diff
-       return null !== (zv = null !== (Pv = null === (hv = vv.parts.materials[vv.range]) || void 0 === hv ? void 0 : hv.mirror) && void 0 !== Pv ? Pv : vv.owner.material) && void 0 !== zv ? zv : null
+       return null !== (kT = null !== (cT = null === (lT = TT.parts.materials[TT.range]) || void 0 === lT ? void 0 : lT.mirror) && void 0 !== cT ? cT : TT.owner.material) && void 0 !== kT ? kT : null
```

#### 211. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2681` → after: `L2681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2681) · [Before (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2681)

```diff
-         return this.model.nodes.oT
+         return this.model.nodes.pA
```

#### 212. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2706` → after: `L2706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2706) · [Before (L2706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2706)

```diff
-         this.rows.length < Pv.nodes.GT && (this.rows = new Int32Array(Pv.nodes.GT));
+         this.rows.length < cT.nodes.DA && (this.rows = new Int32Array(cT.nodes.DA));
```

#### 213. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2712` → after: `L2712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2712) · [Before (L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2712)

```diff
-           Pv && !Pv.isBlocked && Pv.isEnabled() && !Pv.pp.hasAZeroComponent && ev.selects(vv, zv.frustum) && (this.activate(Pv, vv), this.selectedCount++)
+           cT && !cT.isBlocked && cT.isEnabled() && !cT.GA.hasAZeroComponent && KT.selects(TT, kT.frustum) && (this.activate(cT, TT), this.selectedCount++)
```

#### 214. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2733` → after: `L2733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2733) · [Before (L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2733)

```diff
-         if (!vv.zK) {
+         if (!TT.aJ) {
```

#### 215. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2735` → after: `L2735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2735) · [Before (L2735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2735)

```diff
-           if (Pv.Phv) {
+           if (cT.tlT) {
```

#### 216. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2742-L2743` → after: `L2742-L2743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2742-L2743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2742-L2743) · [Before (L2742-L2743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2742-L2743)

```diff
-           hv = Pv.hhv;
-         if (hv._getWorldMatrixDeterminant() >= 0 !== Pv._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${hv.name}`, `A mirrored InstancedMesh of ${hv.name} is not drawn yet`);
+           lT = cT.hlT;
+         if (lT._getWorldMatrixDeterminant() >= 0 !== cT._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${lT.name}`, `A mirrored InstancedMesh of ${lT.name} is not drawn yet`);
```

#### 217. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2797` → after: `L2797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2797) · [Before (L2797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2797)

```diff
-         this.Vp = new Map, this.enabled = [], this.groups = new Map, this.Yw = [], this.warned = new Set, this.selected = 0, this.drawn = 0
+         this.ty = new Map, this.enabled = [], this.groups = new Map, this.wj = [], this.warned = new Set, this.selected = 0, this.drawn = 0
```

#### 218. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2800` → after: `L2800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2800) · [Before (L2800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2800)

```diff
-         if (this.Vp.has(vv)) return;
+         if (this.ty.has(TT)) return;
```

#### 219. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2804` → after: `L2804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2804) · [Before (L2804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2804)

```diff
-             this.uF(zv, vv)
+             this.PD(kT, TT)
```

#### 220. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2809` → after: `L2809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2809) · [Before (L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2809)

```diff
-         this.Vp.set(vv, zv), this.uF(zv, vv.isEnabled())
+         this.ty.set(TT, kT), this.PD(kT, TT.isEnabled())
```

#### 221. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2812-L2813` → after: `L2812-L2813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2812-L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2812-L2813) · [Before (L2812-L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2812-L2813)

```diff
-         const zv = this.Vp.get(vv);
-         zv && (zv.observer.remove(!0), this.uF(zv, !1), this.Vp.delete(vv))
+         const kT = this.ty.get(TT);
+         kT && (kT.observer.remove(!0), this.PD(kT, !1), this.ty.delete(TT))
```

#### 222. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2816` → after: `L2816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2816) · [Before (L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2816)

```diff
-         return this.Vp.get(vv)
+         return this.ty.get(TT)
```

#### 223. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2822` → after: `L2822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2822) · [Before (L2822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2822)

```diff
-           Vp: this.Vp.size
+           ty: this.ty.size
```

#### 224. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2830` → after: `L2830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2830) · [Before (L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2830)

```diff
-         for (const zv of this.Yw) vv(zv.mesh, "opaque", 0)
+         for (const kT of this.wj) TT(kT.mesh, "opaque", 0)
```

#### 225. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2839` → after: `L2839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2839) · [Before (L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2839)

```diff
-         this.drawn = 0, this.selected = 0, this.Yw.length = 0;
+         this.drawn = 0, this.selected = 0, this.wj.length = 0;
```

#### 226. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2846` → after: `L2846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2846) · [Before (L2846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2846)

```diff
-             this.selected++, this.Yw.push(Sv);
+             this.selected++, this.wj.push(MT);
```

#### 227. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2850` → after: `L2850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2850) · [Before (L2850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2850)

```diff
-           if (ev.isBlocked || ev.pp.hasAZeroComponent) continue;
+           if (KT.isBlocked || KT.GA.hasAZeroComponent) continue;
```

#### 228. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2852-L2853` → after: `L2852-L2853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2852-L2853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2852-L2853) · [Before (L2852-L2853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2852-L2853)

```diff
-           if (ev.Phv) {
-             this.warned.has(ev.name) || (this.warned.add(ev.name), console.warn(`Lite: thin instance base ${ev.name} has InstancedMeshes and is not drawn`));
+           if (KT.tlT) {
+             this.warned.has(KT.name) || (this.warned.add(KT.name), console.warn(`Lite: thin instance base ${KT.name} has InstancedMeshes and is not drawn`));
```

#### 229. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2886` → after: `L2886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2886) · [Before (L2886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2886)

```diff
-     var Ke = Pv(39035);
+     var JK = cT(39349);
```

#### 230. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2889` → after: `L2889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2889) · [Before (L2889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2889)

```diff
-         this.bundle = null, this.stale = !0, this.Vp = new Set
+         this.bundle = null, this.stale = !0, this.ty = new Set
```

#### 231. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2894` → after: `L2894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2894) · [Before (L2894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2894)

```diff
-         this.device = vv, this.slots = zv, this.host = Pv, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = n … [truncated]
+         this.device = TT, this.slots = kT, this.host = cT, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = n … [truncated]
```

#### 232. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2896` → after: `L2896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2896) · [Before (L2896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2896)

```diff
-           let hv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (zv = null === (Pv = globalThis.navigator) || void 0 === Pv ? void 0 : Pv.userAgent) && void 0 !== zv ? zv : "";
+           let lT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (kT = null === (cT = globalThis.navigator) || void 0 === cT ? void 0 : cT.userAgent) && void 0 !== kT ? kT : "";
```

#### 233. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2899` → after: `L2899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2899) · [Before (L2899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2899)

```diff
-         }(vv), (0, Ke.D)(this.direct)
+         }(TT), (0, JK.G)(this.direct)
```

#### 234. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2902` → after: `L2902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2902) · [Before (L2902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2902)

```diff
-         this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, Ke.D)(this.directThisFrame)
+         this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, JK.G)(this.directThisFrame)
```

#### 235. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2909` → after: `L2909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2909) · [Before (L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2909)

```diff
-         return vv.zD ? this.zD : this.main
+         return TT.Im ? this.Im : this.main
```

#### 236. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2915` → after: `L2915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2915) · [Before (L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2915)

```diff
-         vv.seen = this.frame, vv.zD && null === vv.draw && (this.zD.stale = !0), vv.draw = zv, this.drawn++, Pv && this.slots.write(vv.slot, Pv, hv) && (this.slotsFrom = Math.min(this.slotsFrom, vv.slot), this.slotsTo = Math.max(this.slotsTo, vv.slot));
+         TT.seen = this.frame, TT.Im && null === TT.draw && (this.Im.stale = !0), TT.draw = kT, this.drawn++, cT && this.slots.write(TT.slot, cT, lT) && (this.slotsFrom = Math.min(this.slotsFrom, TT.slot), this.slotsTo = Math.max(this.slotsTo, TT.slot));
```

#### 237. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2918` → after: `L2918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2918) · [Before (L2918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2918)

```diff
-         Sv[ev] === zv.count && Sv[ev + 1] === zv.instances && Sv[ev + 2] === zv.first || (Sv[ev] = zv.count, Sv[ev + 1] = zv.instances, Sv[ev + 2] = zv.first, this.argsDirty = !0, this.zD.stale ||= vv.zD)
+         MT[KT] === kT.count && MT[KT + 1] === kT.instances && MT[KT + 2] === kT.first || (MT[KT] = kT.count, MT[KT + 1] = kT.instances, MT[KT + 2] = kT.first, this.argsDirty = !0, this.Im.stale ||= TT.Im)
```

#### 238. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2921` → after: `L2921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2921) · [Before (L2921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2921)

```diff
-         for (const vv of this.records.values()) vv.seen !== this.frame && (vv.draw && (vv.draw = null, this.args[5 * vv.slot + 1] = 0, this.argsDirty = !0, this.zD.stale ||= vv.zD), this.frame - vv.seen > 120 && (this.records.delete(vv.unit), this.freeSlots.push(vv.slot), vv.reco … [truncated]
+         for (const TT of this.records.values()) TT.seen !== this.frame && (TT.draw && (TT.draw = null, this.args[5 * TT.slot + 1] = 0, this.argsDirty = !0, this.Im.stale ||= TT.Im), this.frame - TT.seen > 120 && (this.records.delete(TT.unit), this.freeSlots.push(TT.slot), TT.reco … [truncated]
```

#### 239. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2925` → after: `L2925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2925) · [Before (L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2925)

```diff
-         for (const zv of this.records.values()) zv.draw && zv.seen === this.frame && !zv.zD && vv(zv.draw, this.slots.data, zv.slot * Lh / 4)
+         for (const kT of this.records.values()) kT.draw && kT.seen === this.frame && !kT.Im && TT(kT.draw, this.slots.data, kT.slot * Ll / 4)
```

#### 240. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2928` → after: `L2928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2928) · [Before (L2928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2928)

```diff
-         this.main.stale ||= this.main.Vp.has(vv), this.zD.stale ||= this.zD.Vp.has(vv)
+         this.main.stale ||= this.main.ty.has(TT), this.Im.stale ||= this.Im.ty.has(TT)
```

#### 241. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2934-L2935` → after: `L2934-L2935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2934-L2935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2934-L2935) · [Before (L2934-L2935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2934-L2935)

```diff
-         if (!hv) return this.main.bundle = null, this.zD.bundle = null, this.recordedSceneGroup = null, this.encode(vv, zv, Pv, "direct"), this.drawn;
-         this.recordedTarget === Pv && this.recordedSceneGroup === hv || (this.recordedTarget = Pv, this.recordedSceneGroup = hv, this.main.stale = !0, this.zD.stale = !0);
+         if (!lT) return this.main.bundle = null, this.Im.bundle = null, this.recordedSceneGroup = null, this.encode(TT, kT, cT, "direct"), this.drawn;
+         this.recordedTarget === cT && this.recordedSceneGroup === lT || (this.recordedTarget = cT, this.recordedSceneGroup = lT, this.main.stale = !0, this.Im.stale = !0);
```

#### 242. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2937` → after: `L2937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2937) · [Before (L2937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2937)

```diff
-           ev = this.zD;
+           KT = this.Im;
```

#### 243. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2940-L2941` → after: `L2940-L2941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2940-L2941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2940-L2941) · [Before (L2940-L2941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2940-L2941)

```diff
-         const pv = (0, Ke.l)();
-         return (ev.stale || this.rangedEpoch !== pv) && (this.rangedEpoch = pv, ev.bundle = this.drawsRanged() ? this.record(zv, Pv, hv, "zD") : this.noRangedBundle(), gv = !0), gv && (this.bundles = ev.bundle ? [Sv.bundle, ev.bundle] : [Sv.bundle]), vv.executeBundles(this.bundle … [truncated]
+         const yT = (0, JK.i)();
+         return (KT.stale || this.rangedEpoch !== yT) && (this.rangedEpoch = yT, KT.bundle = this.drawsRanged() ? this.record(kT, cT, lT, "Im") : this.noRangedBundle(), OT = !0), OT && (this.bundles = KT.bundle ? [MT.bundle, KT.bundle] : [MT.bundle]), TT.executeBundles(this.bundle … [truncated]
```

#### 244. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2945` → after: `L2945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2945) · [Before (L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2945)

```diff
-           label: "zD" === hv ? "thin-bases-ranged" : "thin-bases",
+           label: "Im" === lT ? "thin-bases-ranged" : "thin-bases",
```

#### 245. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2953-L2954` → after: `L2953-L2954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2953-L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2953-L2954) · [Before (L2953-L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2953-L2954)

```diff
-         for (const vv of this.records.values()) vv.zD && (vv.recorded = !1);
-         return this.zD.Vp.clear(), this.zD.stale = !1, null
+         for (const TT of this.records.values()) TT.Im && (TT.recorded = !1);
+         return this.Im.ty.clear(), this.Im.stale = !1, null
```

#### 246. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2958` → after: `L2958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2958) · [Before (L2958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2958)

```diff
-           if (vv.zD && vv.draw) return !0;
+           if (TT.Im && TT.draw) return !0;
```

#### 247. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2963` → after: `L2963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2963) · [Before (L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2963)

```diff
-         for (const dv of this.records.values()) "direct" !== hv && dv.zD !== ("zD" === hv) || (dv.recorded = !1, dv.draw && Sv.push(dv));
+         for (const fT of this.records.values()) "direct" !== lT && fT.Im !== ("Im" === lT) || (fT.recorded = !1, fT.draw && MT.push(fT));
```

#### 248. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2965-L2966` → after: `L2965-L2966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2965-L2966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2965-L2966) · [Before (L2965-L2966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2965-L2966)

```diff
-         const ev = "direct" === hv ? null : "zD" === hv ? this.zD : this.main;
-         null === ev || void 0 === ev || ev.Vp.clear(), this.binder.reset();
+         const KT = "direct" === lT ? null : "Im" === lT ? this.Im : this.main;
+         null === KT || void 0 === KT || KT.ty.clear(), this.binder.reset();
```

#### 249. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2973` → after: `L2973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2973) · [Before (L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2973)

```diff
-             this.host.pipelineCompiling(Sv, Pv) ? gv = !0 : ev && this.keep(dv, Sv, ev.Vp);
+             this.host.pipelineCompiling(MT, cT) ? OT = !0 : KT && this.keep(fT, MT, KT.ty);
```

#### 250. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2977` → after: `L2977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2977) · [Before (L2977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2977)

```diff
-           if (dv.zD && "indirect" !== hv) {
+           if (fT.Im && "indirect" !== lT) {
```

#### 251. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2979` → after: `L2979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2979) · [Before (L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2979)

```diff
-             lv = "direct" === hv && (0, Ke.r)(vv) || (0, Ke.m)(vv) || void 0
+             IT = "direct" === lT && (0, JK.s)(TT) || (0, JK.k)(TT) || void 0
```

#### 252. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2981` → after: `L2981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L2981) · [Before (L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L2981)

```diff
-           if (ev && this.keep(dv, Sv, ev.Vp), 0 === (null === (pv = lv) || void 0 === pv ? void 0 : pv.count)) continue;
+           if (KT && this.keep(fT, MT, KT.ty), 0 === (null === (yT = IT) || void 0 === yT ? void 0 : yT.count)) continue;
```

#### 253. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3004` → after: `L3004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3004) · [Before (L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3004)

```diff
-           zD: void 0 !== (0, Ke.m)(vv.owner),
+           Im: void 0 !== (0, JK.k)(TT.owner),
```

#### 254. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3017` → after: `L3017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3017) · [Before (L3017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3017)

```diff
-         if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.zD.stale = !0), 5 * this.slotCount > this.args.length) {
+         if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.Im.stale = !0), 5 * this.slotCount > this.args.length) {
```

#### 255. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3060` → after: `L3060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3060) · [Before (L3060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3060)

```diff
-       const hv = `${zv.depth?"-depth":""}${zv.sunShadow?"-shadow":""}${zv.shadowMask?"-mask":""}`;
+       const lT = `${kT.depth?"-depth":""}${kT.sunShadow?"-shadow":""}${kT.shadowMask?"-mask":""}`;
```

#### 256. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3064` → after: `L3064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3064) · [Before (L3064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3064)

```diff
-           binding: Oz.b,
+           binding: mk.e,
```

#### 257. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3068` → after: `L3068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3068) · [Before (L3068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3068)

```diff
-             minBindingSize: Oz.g
+             minBindingSize: mk.l
```

#### 258. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3071` → after: `L3071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3071) · [Before (L3071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3071)

```diff
-           binding: Oz.s,
+           binding: mk.D,
```

#### 259. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3078` → after: `L3078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3078) · [Before (L3078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3078)

```diff
-           binding: Oz.n,
+           binding: mk.u,
```

#### 260. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3085` → after: `L3085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3085) · [Before (L3085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3085)

```diff
-             zv = Oz.p;
+             kT = mk.x;
```

#### 261. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3093` → after: `L3093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3093) · [Before (L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3093)

```diff
-             binding: zv.fW,
+             binding: kT.rC,
```

#### 262. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3131` → after: `L3131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3131) · [Before (L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3131)

```diff
-           binding: Oz.r,
+           binding: mk.A,
```

#### 263. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3137` → after: `L3137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3137) · [Before (L3137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3137)

```diff
-           label: `${zv.depth?"terrain-":""}shader-pack-inputs${hv}`,
+           label: `${kT.depth?"terrain-":""}shader-pack-inputs${lT}`,
```

#### 264. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3150` → after: `L3150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3150) · [Before (L3150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3150)

```diff
-       const Pv = (0, Dz.g)(vv);
+       const cT = (0, bk.d)(TT);
```

#### 265. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3167` → after: `L3167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3167) · [Before (L3167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3167)

```diff
-         this.device = vv, this.sunShadow = Pv, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(Oz.g), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = vv.createBuffer({
+         this.device = TT, this.sunShadow = cT, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(mk.l), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = TT.createBuffer({
```

#### 266. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3169` → after: `L3169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3169) · [Before (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3169)

```diff
-           size: Oz.g,
+           size: mk.l,
```

#### 267. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3172` → after: `L3172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3172) · [Before (L3172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3172)

```diff
-         const hv = (0, Oz.v)(zv);
+         const lT = (0, mk.G)(kT);
```

#### 268. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3185` → after: `L3185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3185) · [Before (L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3185)

```diff
-           binding: Oz.b,
+           binding: mk.e,
```

#### 269. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3190` → after: `L3190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3190) · [Before (L3190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3190)

```diff
-           binding: Oz.s,
+           binding: mk.D,
```

#### 270. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3197` → after: `L3197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3197) · [Before (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3197)

```diff
-         (0, Oz.C)(this.data, {
+         (0, mk.L)(this.data, {
```

#### 271. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3201` → after: `L3201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3201) · [Before (L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3201)

```diff
-           y_: vv.y_(),
+           M_: TT.M_(),
```

#### 272. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3211` → after: `L3211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3211) · [Before (L3211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3211)

```diff
-         (vv && vv !== this.depthView || Pv && Pv !== this.maskView) && (this.depthView = null !== vv && void 0 !== vv ? vv : this.depthView, this.maskView = null !== Pv && void 0 !== Pv ? Pv : this.maskView, this.groups.clear());
+         (TT && TT !== this.depthView || cT && cT !== this.maskView) && (this.depthView = null !== TT && void 0 !== TT ? TT : this.depthView, this.maskView = null !== cT && void 0 !== cT ? cT : this.maskView, this.groups.clear());
```

#### 273. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3217` → after: `L3217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3217) · [Before (L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3217)

```diff
-             binding: Oz.n,
+             binding: mk.u,
```

#### 274. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3220` → after: `L3220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3220) · [Before (L3220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3220)

```diff
-             binding: Oz.r,
+             binding: mk.A,
```

#### 275. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3223` → after: `L3223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3223) · [Before (L3223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3223)

```diff
-             label: `${vv||Pv?"terrain-":""}shader-pack-inputs${vv?"-depth":""}${hv?"-shadow":""}${Pv?"-mask":""}`,
+             label: `${TT||cT?"terrain-":""}shader-pack-inputs${TT?"-depth":""}${lT?"-shadow":""}${cT?"-mask":""}`,
```

#### 276. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3237` → after: `L3237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3237) · [Before (L3237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3237)

```diff
-         vv.setBindGroup(Oz.d, this.bindGroupFor(zv, Pv, hv))
+         TT.setBindGroup(mk.h, this.bindGroupFor(kT, cT, lT))
```

#### 277. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3258-L3259` → after: `L3258-L3259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3258-L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3258-L3259) · [Before (L3258-L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3258-L3259)

```diff
-         const dv = vv.Lk[ev] + (gv ? zv.gpuOffset(gv) : 0);
-         dv !== (null !== (Sv = hv) && void 0 !== Sv ? Sv : vv.offsets)[ev] && (hv ??= vv.offsets.slice(), hv[ev] = dv), vv.ends[ev] = gv ? zv.gpuEnd(gv) : pv.size
+         const fT = TT.M6[KT] + (OT ? kT.gpuOffset(OT) : 0);
+         fT !== (null !== (MT = lT) && void 0 !== MT ? MT : TT.offsets)[KT] && (lT ??= TT.offsets.slice(), lT[KT] = fT), TT.ends[KT] = OT ? kT.gpuEnd(OT) : yT.size
```

#### 278. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3271` → after: `L3271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3271) · [Before (L3271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3271)

```diff
-         Lk: dv
+         M6: fT
```

#### 279. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3287-L3288` → after: `L3287-L3288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3287-L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3287-L3288) · [Before (L3287-L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3287-L3288)

```diff
-     var Je = Pv(37341),
-       Ee = Pv(37384);
+     var BK = cT(37678),
+       WK = cT(37709);
```

#### 280. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3292` → after: `L3292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3292) · [Before (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3292)

```diff
-       ke = `((vertexInputs.aPackedLightLevels >> 16u) | ${dz.c.placed}u)`,
+       qK = `((vertexInputs.aPackedLightLevels >> 16u) | ${fk.e.placed}u)`,
```

#### 281. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3294` → after: `L3294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3294) · [Before (L3294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3294)

```diff
-       ue = `${dz.c.lifeform}u`;
+       TO = `${fk.e.lifeform}u`;
```

#### 282. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3330` → after: `L3330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3330) · [Before (L3330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3330)

```diff
-           vertexFlags: `(${Xe} & 0xffffu)`,
+           vertexFlags: `(${sK} & 0xffffu)`,
```

#### 283. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3347` → after: `L3347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3347) · [Before (L3347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3347)

```diff
-       return "lifeform" === vv.kind ? ue : "0u"
+       return "lifeform" === TT.kind ? TO : "0u"
```

#### 284. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3358` → after: `L3358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3358) · [Before (L3358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3358)

```diff
-       return Pv && dg(zv.defines) && "lifeform" === zv.kind && sg(vv, "enchantTier") ? Pv : null
+       return cT && xO(kT.defines) && "lifeform" === kT.kind && hO(TT, "enchantTier") ? cT : null
```

#### 285. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3372` → after: `L3372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3372) · [Before (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3372)

```diff
-       return `vec4f(${zv.colour}.rgb * uniforms.vDiffuseInfos.y${hv?" * fragmentInputs.vColor.rgb":""}, ${zv.colour}.a)`
+       return `vec4f(${kT.colour}.rgb * uniforms.vDiffuseInfos.y${lT?" * fragmentInputs.vColor.rgb":""}, ${kT.colour}.a)`
```

#### 286. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3391` → after: `L3391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3391) · [Before (L3391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3391)

```diff
-         uv: `fragmentInputs.${1===Pv.DIFFUSEDIRECTUV?"vMainUV1":2===Pv.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
+         uv: `fragmentInputs.${1===cT.DIFFUSEDIRECTUV?"vMainUV1":2===cT.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
```

#### 287. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3398-L3400` → after: `L3398-L3400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3398-L3400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3398-L3400) · [Before (L3398-L3400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3398-L3400)

```diff
-       const ev = fv.d.WGSL,
-         gv = (0, fv.vb)(ev, "uAnimStatesNum"),
-         pv = (0, fv.ab)(ev, (0, Je.g)(ev), gv),
+       const KT = FT.b.WGSL,
+         OT = (0, FT.Db)(KT, "uAnimStatesNum"),
+         yT = (0, FT.fb)(KT, (0, BK.d)(KT), OT),
```

#### 288. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3404` → after: `L3404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3404) · [Before (L3404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3404)

```diff
-         cells: `vec2f(1.0, ${gv})`,
+         cells: `vec2f(1.0, ${OT})`,
```

#### 289. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3406` → after: `L3406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3406) · [Before (L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3406)

```diff
-         uv: `vec2f(${dv}.x, ${dv}.y * ${gv} - ${pv})`,
+         uv: `vec2f(${fT}.x, ${fT}.y * ${OT} - ${yT})`,
```

#### 290. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3429` → after: `L3429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3429) · [Before (L3429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3429)

```diff
-       if (1 !== Sv.length) throw new Error(`A model program for shader packs has ${0===Sv.length?"no":"more than one"} ${hv} code before fog (lite/modelShaderPack.ts)`);
+       if (1 !== MT.length) throw new Error(`A model program for shader packs has ${0===MT.length?"no":"more than one"} ${lT} code before fog (lite/modelShaderPack.ts)`);
```

#### 291. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3441` → after: `L3441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3441) · [Before (L3441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3441)

```diff
-       zv.atlas && Sv.surface && pv.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", yP("atlasIdxIn")]), "item" === ev && pv.push(["CUSTOM_VERTEX_DEFINITIONS", (0, fv.g)(fv.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS … [truncated]
+       kT.atlas && MT.surface && yT.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", Uc("atlasIdxIn")]), "item" === KT && yT.push(["CUSTOM_VERTEX_DEFINITIONS", (0, FT.d)(FT.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS … [truncated]
```

#### 292. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3443` → after: `L3443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3443) · [Before (L3443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3443)

```diff
-       Nv && (Sv.surface || Sv.light) && pv.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Nv.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${Nv.varying} = ${Nv.value};`]);
+       xT && (MT.surface || MT.light) && yT.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${xT.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${xT.varying} = ${xT.value};`]);
```

#### 293. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3445` → after: `L3445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3445) · [Before (L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3445)

```diff
-       if (hg(vv, zv, "fragment") && (pv.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${Pg});`]), lv = [...lv, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), sg(vv, … [truncated]
+       if (MO(TT, kT, "fragment") && (yT.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${lO});`]), IT = [...IT, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), hO(TT, … [truncated]
```

#### 294. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3448-L3450` → after: `L3448-L3450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3448-L3450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3448-L3450) · [Before (L3448-L3450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3448-L3450)

```diff
-         Pv && pv.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${Pv});`]);
-         const hv = (0, fv.jb)(fv.d.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
-         lv = [...ig(lv, (0, Ee.h)(fv.d.WGSL), hv, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, Ee.d)(zg)]]
+         cT && yT.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${cT});`]);
+         const lT = (0, FT.ub)(FT.b.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
+         IT = [...QO(IT, (0, WK.i)(FT.b.WGSL), lT, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, WK.b)(cO)]]
```

#### 295. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3459-L3460` → after: `L3459-L3460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3459-L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3459-L3460) · [Before (L3459-L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3459-L3460)

```diff
-           engine: (0, Fz.P)(fv.d.WGSL),
-           pack: (0, Fz.bb)(fv.d.WGSL)
+           engine: (0, rk.L)(FT.b.WGSL),
+           pack: (0, rk.kb)(FT.b.WGSL)
```

#### 296. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3463-L3464` → after: `L3463-L3464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3463-L3464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3463-L3464) · [Before (L3463-L3464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3463-L3464)

```diff
-           engine: (0, Fz.J)(fv.d.WGSL),
-           pack: (0, Fz._)(fv.d.WGSL)
+           engine: (0, rk.C)(FT.b.WGSL),
+           pack: (0, rk.cb)(FT.b.WGSL)
```

#### 297. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3467-L3469` → after: `L3467-L3469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3467-L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3467-L3469) · [Before (L3467-L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3467-L3469)

```diff
-       if (Wv && (lv = ig(lv, Wv.engine, Wv.pack, `${Wv.name} light`), "placed" !== ev && Cg(gv))) {
-         const vv = gv.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, fv.vb)(fv.d.WGSL, "uEntityLightLevels") : (0, fv.Bb)(fv.d.WGSL, "aLightLevels");
-         pv.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Fz.c}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, Fz.ab)(fv.d.WGSL, vv)])
+       if (CT && (IT = QO(IT, CT.engine, CT.pack, `${CT.name} light`), "placed" !== KT && NO(OT))) {
+         const TT = OT.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, FT.Db)(FT.b.WGSL, "uEntityLightLevels") : (0, FT.Kb)(FT.b.WGSL, "aLightLevels");
+         yT.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${rk.b}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, rk.gb)(FT.b.WGSL, TT)])
```

#### 298. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3484` → after: `L3484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3484) · [Before (L3484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3484)

```diff
-       return `${Pv}${zv}${vv.slice(Pv.length)}`
+       return `${cT}${kT}${TT.slice(cT.length)}`
```

#### 299. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3498` → after: `L3498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3498) · [Before (L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3498)

```diff
-         } = zv, gv = gg(zv), pv = !!ev.FOG, dv = dg(ev), Nv = null !== (Pv = null === gv || void 0 === gv ? void 0 : gv.enchantTier) && void 0 !== Pv ? Pv : Ng(vv, zv) ? "fragmentInputs.vPackEnchantTier" : "0u", lv = "lifeform" === zv.kind && !ev.ALPHAFROMDIFFUSE;
+         } = kT, OT = yO(kT), yT = !!KT.FOG, fT = xO(KT), xT = null !== (cT = null === OT || void 0 === OT ? void 0 : OT.enchantTier) && void 0 !== cT ? cT : IO(TT, kT) ? "fragmentInputs.vPackEnchantTier" : "0u", IT = "lifeform" === kT.kind && !KT.ALPHAFROMDIFFUSE;
```

#### 300. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3500` → after: `L3500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3500) · [Before (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3500)

```diff
-           vertexFlags: null !== (hv = null === gv || void 0 === gv ? void 0 : gv.vertexFlags) && void 0 !== hv ? hv : pg(zv),
+           vertexFlags: null !== (lT = null === OT || void 0 === OT ? void 0 : OT.vertexFlags) && void 0 !== lT ? lT : fO(kT),
```

#### 301. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3502` → after: `L3502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3502) · [Before (L3502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3502)

```diff
-           flags: null !== (Sv = null === gv || void 0 === gv ? void 0 : gv.flags) && void 0 !== Sv ? Sv : pg(zv),
+           flags: null !== (MT = null === OT || void 0 === OT ? void 0 : OT.flags) && void 0 !== MT ? MT : fO(kT),
```

#### 302. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3513` → after: `L3513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3513) · [Before (L3513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3513)

```diff
-           enchantColour: dv ? `${zg}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
+           enchantColour: fT ? `${cO}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
```

#### 303. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3526` → after: `L3526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3526) · [Before (L3526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3526)

```diff
-             MT: "frame.animTick",
+             UA: "frame.animTick",
```

#### 304. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3529` → after: `L3529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3529) · [Before (L3529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3529)

```diff
-             perTexture: vv => `uniforms.uAnimDataPerTex[${vv}]${zv}`
+             perTexture: TT => `uniforms.uAnimDataPerTex[${TT}]${kT}`
```

#### 305. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3532` → after: `L3532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3532) · [Before (L3532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3532)

```diff
-       } : null, Tv = "placed" === gv ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - b … [truncated]
+       } : null, AT = "placed" === OT ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - b … [truncated]
```

#### 306. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3534` → after: `L3534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3534) · [Before (L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3534)

```diff
-         return `${(0,Oz.z)()}${ZP(zv,Pv)}${hv}${JP(vv)}${UP}${Tv}${zv.code}`
+         return `${(0,mk.K)()}${Xc(kT,cT)}${lT}${Bc(TT)}${Hc}${AT}${kT.code}`
```

#### 307. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3542-L3543` → after: `L3542-L3543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3542-L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3542-L3543) · [Before (L3542-L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3542-L3543)

```diff
-         const vv = hg(zv, Pv, "vertex") ? `\tbloxdSpCell = ${Pg};\n` : "";
-         av = Gg(av, oe, `${vv}${Cv.slice(1)}${oe}`, "vertex")
+         const TT = MO(kT, cT, "vertex") ? `\tbloxdSpCell = ${lO};\n` : "";
+         vT = DO(vT, nK, `${TT}${hT.slice(1)}${nK}`, "vertex")
```

#### 308. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3545-L3546` → after: `L3545-L3546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3545-L3546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3545-L3546) · [Before (L3545-L3546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3545-L3546)

```diff
-       const iv = `${AP(zv,ev,function(vv,zv){return zv.TWOSIDEDLIGHTING?vv:`select(-(${vv}), ${vv}, fragmentInputs.frontFacing)`}(dv.normal,pv),dv.flags)}${bP(Sv,zv.strict,zv.program,Wv,dv)}`;
-       iv && (sv = Gg(sv, be, `${iv.slice(1)}${be}`, "surface")), ev && zv.sunShadow && !pv.TWOSIDEDLIGHTING && (sv = Gg(sv, mg, `${mg}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
+       const NT = `${dc(kT,KT,function(TT,kT){return kT.TWOSIDEDLIGHTING?TT:`select(-(${TT}), ${TT}, fragmentInputs.frontFacing)`}(fT.normal,yT),fT.flags)}${pc(MT,kT.strict,kT.program,CT,fT)}`;
+       NT && (tT = DO(tT, pK, `${NT.slice(1)}${pK}`, "surface")), KT && kT.sunShadow && !yT.TWOSIDEDLIGHTING && (tT = DO(tT, aO, `${aO}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
```

#### 309. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3550` → after: `L3550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3550) · [Before (L3550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3550)

```diff
-         sv = Gg(sv, re, `${vv}${cv.slice(1)}${re}`, "light")
+         tT = DO(tT, iK, `${TT}${QT.slice(1)}${iK}`, "light")
```

#### 310. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3552` → after: `L3552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3552) · [Before (L3552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3552)

```diff
-       const Gv = ag(zv, Pv) ? MP : "";
+       const ST = tO(kT, cT) ? gc : "";
```

#### 311. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3578` → after: `L3578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3578) · [Before (L3578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3578)

```diff
-         this.device = vv, this.resources = zv, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.Vk = new De, this.modelMeshes = new Oe, this.thinBundle = void 0, this.binder = new oS, this.sc … [truncated]
+         this.device = TT, this.resources = kT, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.Ws = new zK, this.modelMeshes = new bK, this.thinBundle = void 0, this.binder = new nM, this.sc … [truncated]
```

#### 312. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3605` → after: `L3605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3605) · [Before (L3605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3605)

```diff
-           pipelineCompiling: (vv, zv) => !vv.program.failed && !1 !== this.pipelines.get(`${vv.pipelineKey}|${zv}`),
+           pipelineCompiling: (TT, kT) => !TT.program.failed && !1 !== this.pipelines.get(`${TT.pipelineKey}|${kT}`),
```

#### 313. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3630-L3632` → after: `L3630-L3632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3630-L3632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3630-L3632) · [Before (L3630-L3632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3630-L3632)

```diff
-         this.frame++, this.view = zv, this.drawDefines.view = zv, this.thinBundle.Qm(), this.writeFrameUniforms();
-         const ev = null !== (hv = null === Sv || void 0 === Sv ? void 0 : Sv.defineFor("model")) && void 0 !== hv ? hv : 0;
-         this.drawDefines.modelPackVariant = ev, Sv && 0 !== ev && (this.packInputs ??= new He(this.device, Sv.textureLayers(), this.sunShadow), this.packInputs.write(Sv, zv.eye, Sv.Vs())), this.lists.clear(), this.slotCount = 0;
+         this.frame++, this.view = kT, this.drawDefines.view = kT, this.thinBundle.iN(), this.writeFrameUniforms();
+         const KT = null !== (lT = null === MT || void 0 === MT ? void 0 : MT.defineFor("model")) && void 0 !== lT ? lT : 0;
+         this.drawDefines.modelPackVariant = KT, MT && 0 !== KT && (this.packInputs ??= new RK(this.device, MT.textureLayers(), this.sunShadow), this.packInputs.write(MT, kT.eye, MT.bt())), this.lists.clear(), this.slotCount = 0;
```

#### 314. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3634` → after: `L3634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3634) · [Before (L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3634)

```diff
-         this.Vk.select(gv, this.keepSteadyBase), this.modelMeshes.select(gv, zv), Pv && this.pushEarthSky(Pv), this.lists.collect(vv), this.thinBundle.Zm(), this.uploadMeshSlots()
+         this.Ws.select(OT, this.keepSteadyBase), this.modelMeshes.select(OT, kT), cT && this.pushEarthSky(cT), this.lists.collect(TT), this.thinBundle.qN(), this.uploadMeshSlots()
```

#### 315. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3665` → after: `L3665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3665) · [Before (L3665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3665)

```diff
-           Sv = this.Vk.base(hv),
+           MT = this.Ws.base(lT),
```

#### 316. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3699-L3701` → after: `L3699-L3701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3699-L3701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3699-L3701) · [Before (L3699-L3701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3699-L3701)

```diff
-           dv = hv.forcedInstanceCount || hv.yX;
-         if (!hv.isVisible || hv.Phv || hv.visibility !== Pv.visibility || 0 === (hv.layerMask & zv.layerMask) || hv.material !== Pv.material || 0 !== hv.renderingGroupId || hv.hasVertexAlpha || !this.drawDefines.definesHold(pv, Sv, pv.instancing) || Pv.gpuVersion !== this.resourc … [truncated]
-         if (gv.frame !== this.frame && this.bindMaterial(gv, this.modelUniforms.refreshModelUniforms(hv.rD(), gv, gv.model, this.view)), !gv.bindable || gv.bindGroup !== Pv.bindGroup) return !1;
+           fT = lT.forcedInstanceCount || lT.w6;
+         if (!lT.isVisible || lT.tlT || lT.visibility !== cT.visibility || 0 === (lT.layerMask & kT.layerMask) || lT.material !== cT.material || 0 !== lT.renderingGroupId || lT.hasVertexAlpha || !this.drawDefines.definesHold(yT, MT, yT.instancing) || cT.gpuVersion !== this.resourc … [truncated]
+         if (OT.frame !== this.frame && this.bindMaterial(OT, this.modelUniforms.refreshModelUniforms(lT.NJ(), OT, OT.model, this.view)), !OT.bindable || OT.bindGroup !== cT.bindGroup) return !1;
```

#### 317. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3704` → after: `L3704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3704) · [Before (L3704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3704)

```diff
-         return Pv.worldFlag = Nv.updateFlag, ev.instances = dv, this.thinBundle.addAgain(Pv.record, ev, lv ? Nv.m : null, Pv.visibility), Pv.handedFrame = this.frame, this.Vk.drawn++, !0
+         return cT.worldFlag = xT.updateFlag, KT.instances = fT, this.thinBundle.addAgain(cT.record, KT, IT ? xT.m : null, cT.visibility), cT.handedFrame = this.frame, this.Ws.drawn++, !0
```

#### 318. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3762` → after: `L3762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3762) · [Before (L3762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3762)

```diff
-             }(ev)) return this.warnOnce(`lines:${gv}`, `A LinesMesh with a ${gv} is not drawn yet (${ev.name})`), null;
+             }(KT)) return this.warnOnce(`lines:${OT}`, `A LinesMesh with a ${OT} is not drawn yet (${KT.name})`), null;
```

#### 319. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3764` → after: `L3764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3764) · [Before (L3764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3764)

```diff
-         } else if ("StandardMaterial" !== gv && "LiteMaterial" !== gv) return this.warnOnce(`class:${gv}`, `${gv} is not drawn yet (${ev.name})`), null;
+         } else if ("StandardMaterial" !== OT && "LiteMaterial" !== OT) return this.warnOnce(`class:${OT}`, `${OT} is not drawn yet (${KT.name})`), null;
```

#### 320. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3779` → after: `L3779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3779) · [Before (L3779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3779)

```diff
-         const iv = this.renderStates.renderState(null !== Tv && void 0 !== Tv ? Tv : ev, Sv, hv, av.state, pv ? "line-list" : "triangle-list"),
+         const NT = this.renderStates.renderState(null !== AT && void 0 !== AT ? AT : KT, MT, lT, vT.state, yT ? "line-list" : "triangle-list"),
```

#### 321. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3790` → after: `L3790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3790) · [Before (L3790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3790)

```diff
-         vv.unit = zv, vv.first = zv.parts.PC[Sv], vv.count = zv.parts.PC[Sv + 1]
+         TT.unit = kT, TT.first = kT.parts.qt[MT], TT.count = kT.parts.qt[MT + 1]
```

#### 322. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3793` → after: `L3793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3793) · [Before (L3793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3793)

```diff
-         zv.state !== Pv && (zv.state = Pv, zv.pipelineKey = `${vv.id}|${zv.layout.key}|${Pv.key}`, zv.pipeline = null);
+         kT.state !== cT && (kT.state = cT, kT.pipelineKey = `${TT.id}|${kT.layout.key}|${cT.key}`, kT.pipeline = null);
```

#### 323. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3816` → after: `L3816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3816) · [Before (L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3816)

```diff
-             return vv.forcedInstanceCount || vv.yX;
+             return TT.forcedInstanceCount || TT.w6;
```

#### 324. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3829` → after: `L3829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3829) · [Before (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3829)

```diff
-             if (hv.layout === (null !== (Sv = null === Pv || void 0 === Pv ? void 0 : Pv.interleavedKinds) && void 0 !== Sv ? Sv : null)) return hv;
+             if (lT.layout === (null !== (MT = null === cT || void 0 === cT ? void 0 : cT.interleavedKinds) && void 0 !== MT ? MT : null)) return lT;
```

#### 325. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3850` → after: `L3850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3850) · [Before (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3850)

```diff
-               const vv = lv ? null === (gv = (pv = (0, lz.g)(dv)).Bw) || void 0 === gv ? void 0 : gv.call(pv, Nv) : void 0;
+               const TT = IT ? null === (OT = (yT = (0, Ik.j)(fT)).Bj) || void 0 === OT ? void 0 : OT.call(yT, xT) : void 0;
```

#### 326. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3855` → after: `L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3855) · [Before (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3855)

```diff
-               atlas: null !== Sv && void 0 !== Sv && Sv.active ? (0, Fv.b)(Sv.state) : null,
+               atlas: null !== MT && void 0 !== MT && MT.active ? (0, rT.c)(MT.state) : null,
```

#### 327. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3864` → after: `L3864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3864) · [Before (L3864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3864)

```diff
-           const Pv = this.modelPackProgram(vv, zv, `${Sv}#${ev}#sp${this.drawDefines.modelPackVariant}`, hv, gv);
+           const cT = this.modelPackProgram(TT, kT, `${MT}#${KT}#sp${this.drawDefines.modelPackVariant}`, lT, OT);
```

#### 328. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3868` → after: `L3868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3868) · [Before (L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3868)

```diff
-         if (pv || this.unbuildable.has(Sv)) return null !== pv && void 0 !== pv ? pv : null;
+         if (yT || this.unbuildable.has(MT)) return null !== yT && void 0 !== yT ? yT : null;
```

#### 329. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3878` → after: `L3878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3878) · [Before (L3878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3878)

```diff
-           return this.unbuildable.add(Sv), this.warnOnce(`build:${Sv}`, `could not build a program for ${vv.name}: ${String(Nv)}`), null
+           return this.unbuildable.add(MT), this.warnOnce(`build:${MT}`, `could not build a program for ${TT.name}: ${String(xT)}`), null
```

#### 330. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3884` → after: `L3884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3884) · [Before (L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3884)

```diff
-         if (ev || this.unbuildable.has(Pv)) return null !== ev && void 0 !== ev ? ev : null;
+         if (KT || this.unbuildable.has(cT)) return null !== KT && void 0 !== KT ? KT : null;
```

#### 331. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3889` → after: `L3889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3889) · [Before (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3889)

```diff
-               return (0, Dz.c)(vv, "model")
+               return (0, bk.b)(TT, "model")
```

#### 332. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3898` → after: `L3898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3898) · [Before (L3898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3898)

```diff
-           return this.unbuildable.add(Pv), this.warnOnce(`build:${Pv}`, `could not build a shader pack program for ${vv.name}, which draws without the pack: ${String(lv)}`), null
+           return this.unbuildable.add(cT), this.warnOnce(`build:${cT}`, `could not build a shader pack program for ${TT.name}, which draws without the pack: ${String(IT)}`), null
```

#### 333. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3909` → after: `L3909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3909) · [Before (L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3909)

```diff
-           return `standard-sp${vv}`
+           return `standard-sp${TT}`
```

#### 334. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3916` → after: `L3916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3916) · [Before (L3916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3916)

```diff
-         return Sv || (Sv = this.createProgram(`lines#${hv}`, (ev = function(vv) {
+         return MT || (MT = this.createProgram(`lines#${lT}`, (KT = function(TT) {
```

#### 335. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3932` → after: `L3932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3932) · [Before (L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3932)

```diff
-           gv = `${Pv}-${ev}`,
+           OT = `${cT}-${KT}`,
```

#### 336. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3962` → after: `L3962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3962) · [Before (L3962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3962)

```diff
-               label: `${gv}-vertex`,
+               label: `${OT}-vertex`,
```

#### 337. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3966` → after: `L3966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3966) · [Before (L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3966)

```diff
-               label: `${gv}-fragment`,
+               label: `${OT}-fragment`,
```

#### 338. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3974` → after: `L3974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3974) · [Before (L3974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3974)

```diff
-             packGroup: null !== (hv = null === Sv || void 0 === Sv ? void 0 : Sv.group) && void 0 !== hv ? hv : null,
+             packGroup: null !== (lT = null === MT || void 0 === MT ? void 0 : MT.group) && void 0 !== lT ? lT : null,
```

#### 339. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3987` → after: `L3987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L3987) · [Before (L3987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L3987)

```diff
-           this.materials.set(vv, zv), vv.uD.addOnce((() => {
+           this.materials.set(TT, kT), TT.QJ.addOnce((() => {
```

#### 340. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4015` → after: `L4015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4015) · [Before (L4015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4015)

```diff
-             label: `${vv.name}-uniforms`,
+             label: `${TT.name}-uniforms`,
```

#### 341. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4042` → after: `L4042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4042) · [Before (L4042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4042)

```diff
-         const ev = null !== (zv = Sv.state) && void 0 !== zv ? zv : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
+         const KT = null !== (kT = MT.state) && void 0 !== kT ? kT : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
```

#### 342. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4069` → after: `L4069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4069) · [Before (L4069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4069)

```diff
-           pv ? Pv[2 * gv] === pv.view && Pv[2 * gv + 1] === pv.sampler || (Pv[2 * gv] = pv.view, Pv[2 * gv + 1] = pv.sampler, Sv = !0) : (zv || vv.ubo.expected.has(hv[gv].name) || this.warnOnce(`texture:${vv.owner.name}:${hv[gv].name}`, `${vv.owner.name} has no ${hv[gv].name}`),  … [truncated]
+           yT ? cT[2 * OT] === yT.view && cT[2 * OT + 1] === yT.sampler || (cT[2 * OT] = yT.view, cT[2 * OT + 1] = yT.sampler, MT = !0) : (kT || TT.ubo.expected.has(lT[OT].name) || this.warnOnce(`texture:${TT.owner.name}:${lT[OT].name}`, `${TT.owner.name} has no ${lT[OT].name}`),  … [truncated]
```

#### 343. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4087` → after: `L4087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4087) · [Before (L4087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4087)

```diff
-             label: `${vv.owner.name}-material`,
+             label: `${TT.owner.name}-material`,
```

#### 344. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4105` → after: `L4105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4105) · [Before (L4105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4105)

```diff
-           if (ev = null !== (gv = this.vertexLayouts.resolveInputs(zv, Pv, hv, Sv)) && void 0 !== gv ? gv : void 0, !ev) return null;
+           if (KT = null !== (OT = this.vertexLayouts.resolveInputs(kT, cT, lT, MT)) && void 0 !== OT ? OT : void 0, !KT) return null;
```

#### 345. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4124` → after: `L4124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4124) · [Before (L4124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4124)

```diff
-         return Me(vv, this.resources, this.zeroBuffer) ? vv : null
+         return gK(TT, this.resources, this.zeroBuffer) ? TT : null
```

#### 346. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4129-L4130` → after: `L4129-L4130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4129-L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4129-L4130) · [Before (L4129-L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4129-L4130)

```diff
-           const Sv = zv.ends[hv.index] - zv.offsets[hv.index] + zv.Lk[hv.index];
-           return this.warnOnce(`overrun:${vv}`, `${vv} draws ${Pv} instances from a ${Sv}-byte buffer (${hv.needed} needed)`), !1
+           const MT = kT.ends[lT.index] - kT.offsets[lT.index] + kT.M6[lT.index];
+           return this.warnOnce(`overrun:${TT}`, `${TT} draws ${cT} instances from a ${MT}-byte buffer (${lT.needed} needed)`), !1
```

#### 347. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4135` → after: `L4135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4135) · [Before (L4135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4135)

```diff
-         const Sv = `${zv._colorFormat}|${zv._depthStencilFormat}|${zv._depthCompare}|${zv._sampleCount}`,
+         const MT = `${kT._colorFormat}|${kT._depthStencilFormat}|${kT._depthCompare}|${kT._sampleCount}`,
```

#### 348. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4159` → after: `L4159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4159) · [Before (L4159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4159)

```diff
-           const Pv = (null !== (gv = zv._depthCompare) && void 0 !== gv ? gv : Pz).startsWith("greater") ? 0 : 1;
+           const cT = (null !== (OT = kT._depthCompare) && void 0 !== OT ? OT : ck).startsWith("greater") ? 0 : 1;
```

#### 349. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4180` → after: `L4180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4180) · [Before (L4180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4180)

```diff
-         const gv = `${vv.pipelineKey}|${Pv}`,
+         const OT = `${TT.pipelineKey}|${cT}`,
```

#### 350. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4189` → after: `L4189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4189) · [Before (L4189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4189)

```diff
-           label: `standard-${dv.id}`,
+           label: `standard-${fT.id}`,
```

#### 351. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4202` → after: `L4202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4202) · [Before (L4202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4202)

```diff
-             depthCompare: null !== (hv = null !== (Sv = lv.depthCompare) && void 0 !== Sv ? Sv : zv._depthCompare) && void 0 !== hv ? hv : Pz,
+             depthCompare: null !== (lT = null !== (MT = IT.depthCompare) && void 0 !== MT ? MT : kT._depthCompare) && void 0 !== lT ? lT : ck,
```

#### 352. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4231` → after: `L4231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4231) · [Before (L4231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4231)

```diff
-             switch (zv.geometry = ev, zv.skip = gv.noSunShadowVertices, zv.indexed = null !== Pv.indexBuffer, zv.first = Pv.first, zv.count = Pv.count, zv.oT = hv, zv.worldAt = Sv, zv.instances = null, zv.instanceCount = 1, zv.thin = !1, ve(gv)) {
+             switch (kT.geometry = KT, kT.skip = OT.noSunShadowVertices, kT.indexed = null !== cT.indexBuffer, kT.first = cT.first, kT.count = cT.count, kT.pA = lT, kT.worldAt = MT, kT.instances = null, kT.instanceCount = 1, kT.thin = !1, kK(OT)) {
```

#### 353. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4269` → after: `L4269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4269) · [Before (L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4269)

```diff
-           for (const zv of vv.messages) Sv &&= "error" !== zv.type, hv.push(`${ev}:${zv.lineNum}:${zv.linePos} ${zv.type}: ${zv.message}`)
+           for (const kT of TT.messages) MT &&= "error" !== kT.type, lT.push(`${KT}:${kT.lineNum}:${kT.linePos} ${kT.type}: ${kT.message}`)
```

#### 354. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4271-L4272` → after: `L4271-L4272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4271-L4272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4271-L4272) · [Before (L4271-L4272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4271-L4272)

```diff
-         if (Sv && !vv.packGroup) return this.pipelines.set(zv, !1), console.error(`Lite: pipeline ${zv} failed`, Pv), void ES("mesh", vv.kind, Pv);
-         vv.failed || (vv.failed = !0, console.error(`Lite: program ${vv.id} failed`, Pv, hv.join("\n"), {
+         if (MT && !TT.packGroup) return this.pipelines.set(kT, !1), console.error(`Lite: pipeline ${kT} failed`, cT), void WM("mesh", TT.kind, cT);
+         TT.failed || (TT.failed = !0, console.error(`Lite: program ${TT.id} failed`, cT, lT.join("\n"), {
```

#### 355. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4281-L4282` → after: `L4281-L4282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4281-L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4281-L4282) · [Before (L4281-L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4281-L4282)

```diff
-       const hv = null === (zv = vv.lV) || void 0 === zv || null === (Pv = zv.aShaderPackItem) || void 0 === Pv ? void 0 : Pv.x;
-       return void 0 !== hv && 0 !== (hv & dz.e)
+       const lT = null === (kT = TT.xH) || void 0 === kT || null === (cT = kT.aShaderPackItem) || void 0 === cT ? void 0 : cT.x;
+       return void 0 !== lT && 0 !== (lT & fk.h)
```

#### 356. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4284-L4287` → after: `L4284-L4287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4284-L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4284-L4287) · [Before (L4284-L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4284-L4287)

```diff
-     var Kg = Pv(40993),
-       Vg = Pv(40995),
-       Ug = Pv(41004),
-       Rg = Pv(40954);
+     var JO = cT(41271),
+       oO = cT(41274),
+       HO = cT(41277),
+       eO = cT(41233);
```

#### 357. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4294-L4295` → after: `L4294-L4295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4294-L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4294-L4295) · [Before (L4294-L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4294-L4295)

```diff
-           const hv = (0, Rg.c)(vv, Pv, Pv, 6);
-           for (let Sv = 0; Sv < 6; Sv++)(0, Rg.e)(vv, hv, Sv, zv[xg[Sv]], {
+           const lT = (0, eO.d)(TT, cT, cT, 6);
+           for (let MT = 0; MT < 6; MT++)(0, eO.g)(TT, lT, MT, kT[GO[MT]], {
```

#### 358. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4331` → after: `L4331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4331) · [Before (L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4331)

```diff
-       for (const zv of null !== vv && void 0 !== vv ? vv : []) null === zv || void 0 === zv || zv.close()
+       for (const kT of null !== TT && void 0 !== TT ? TT : []) null === kT || void 0 === kT || kT.close()
```

#### 359. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4345` → after: `L4345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4345) · [Before (L4345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4345)

```diff
-         this.GT = vv, this.starts = [], this.lengths = [], this.used = 0, vv > 0 && (this.starts.push(0), this.lengths.push(vv))
+         this.DA = TT, this.starts = [], this.lengths = [], this.used = 0, TT > 0 && (this.starts.push(0), this.lengths.push(TT))
```

#### 360. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4361` → after: `L4361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4361) · [Before (L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4361)

```diff
-         const Pv = Math.min(vv + zv, this.GT);
+         const cT = Math.min(TT + kT, this.DA);
```

#### 361. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4365-L4366` → after: `L4365-L4366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4365-L4366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4365-L4366) · [Before (L4365-L4366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4365-L4366)

```diff
-         const zv = this.GT;
-         this.GT = vv, this.release(zv, vv - zv)
+         const kT = this.DA;
+         this.DA = TT, this.release(kT, TT - kT)
```

#### 362. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4374` → after: `L4374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4374) · [Before (L4374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4374)

```diff
-         this.GT = vv
+         this.DA = TT
```

#### 363. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4390` → after: `L4390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4390) · [Before (L4390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4390)

```diff
-         pv && dv ? (hv[gv - 1] += zv + hv[gv], Pv.splice(gv, 1), hv.splice(gv, 1)) : pv ? hv[gv - 1] += zv : dv ? (Pv[gv] = vv, hv[gv] += zv) : (Pv.splice(gv, 0, vv), hv.splice(gv, 0, zv))
+         yT && fT ? (lT[OT - 1] += kT + lT[OT], cT.splice(OT, 1), lT.splice(OT, 1)) : yT ? lT[OT - 1] += kT : fT ? (cT[OT] = TT, lT[OT] += kT) : (cT.splice(OT, 0, TT), lT.splice(OT, 0, kT))
```

#### 364. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4398` → after: `L4398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4398) · [Before (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4398)

```diff
-         this.device = vv, this.onReplaced = zv, this.mergeGap = Pv, this.gpu = null, this.bytes = void 0, this.PC = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
+         this.device = TT, this.onReplaced = kT, this.mergeGap = cT, this.gpu = null, this.bytes = void 0, this.qt = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
```

#### 365. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4400` → after: `L4400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4400) · [Before (L4400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4400)

```diff
-         this.bytes = new Uint8Array(Sv), this.PC = new Qg(Sv / Zg)
+         this.bytes = new Uint8Array(MT), this.qt = new uO(MT / XO)
```

#### 366. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4413-L4414` → after: `L4413-L4414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4413-L4414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4413-L4414) · [Before (L4413-L4414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4413-L4414)

```diff
-         let ev = this.PC.allocate(Sv);
-         ev < 0 && (this.grow(this.PC.GT + Sv), ev = this.PC.allocate(Sv));
+         let KT = this.qt.allocate(MT);
+         KT < 0 && (this.grow(this.qt.DA + MT), KT = this.qt.allocate(MT));
```

#### 367. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4420` → after: `L4420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4420) · [Before (L4420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4420)

```diff
-         zv > this.PC.GT && this.grow(zv)
+         kT > this.qt.DA && this.grow(kT)
```

#### 368. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4466` → after: `L4466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4466) · [Before (L4466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4466)

```diff
-         for (let zv = 0; zv < vv.length; zv += 2) this.PC.free(vv[zv] / Zg, vv[zv + 1] / Zg);
+         for (let kT = 0; kT < TT.length; kT += 2) this.qt.free(TT[kT] / XO, TT[kT + 1] / XO);
```

#### 369. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4480` → after: `L4480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4480) · [Before (L4480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4480)

```diff
-         const zv = this.PC.GT,
+         const kT = this.qt.DA,
```

#### 370. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4485` → after: `L4485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4485) · [Before (L4485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4485)

```diff
-         this.gpu = this.createGpu(hv.byteLength), this.bytes = hv, this.PC.grow(Pv), Sv && (this.replaced.push(Sv), this.onReplaced(Sv)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, zv * Zg)
+         this.gpu = this.createGpu(lT.byteLength), this.bytes = lT, this.qt.grow(cT), MT && (this.replaced.push(MT), this.onReplaced(MT)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, kT * XO)
```

#### 371. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4575` → after: `L4575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4575) · [Before (L4575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4575)

```diff
-         this.engine = vv, this.device = zv, this.buffers = new WeakMap, this.OE = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, … [truncated]
+         this.engine = TT, this.device = kT, this.buffers = new WeakMap, this.Aq = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, … [truncated]
```

#### 372. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4586` → after: `L4586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4586) · [Before (L4586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4586)

```diff
-         null === (vv = this.arena) || void 0 === vv || vv.Zm()
+         null === (TT = this.arena) || void 0 === TT || TT.qN()
```

#### 373. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4592` → after: `L4592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4592) · [Before (L4592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4592)

```diff
-         vv.GT = Sv.byteLength, this.buffers.set(vv, {
+         TT.DA = MT.byteLength, this.buffers.set(TT, {
```

#### 374. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4629` → after: `L4629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4629) · [Before (L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4629)

```diff
-         vv.is32Bits = 4 === hv.BYTES_PER_ELEMENT, vv.GT = hv.byteLength, this.buffers.set(vv, {
+         TT.is32Bits = 4 === lT.BYTES_PER_ELEMENT, TT.DA = lT.byteLength, this.buffers.set(TT, {
```

#### 375. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4665` → after: `L4665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4665) · [Before (L4665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4665)

```diff
-             const zv = new Uint8Array(Math.max(null !== (Sv = null === gv || void 0 === gv ? void 0 : gv.byteLength) && void 0 !== Sv ? Sv : 0, Pv + hv));
+             const kT = new Uint8Array(Math.max(null !== (MT = null === OT || void 0 === OT ? void 0 : OT.byteLength) && void 0 !== MT ? MT : 0, cT + lT));
```

#### 376. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4729` → after: `L4729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4729) · [Before (L4729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4729)

```diff
-         const hv = null !== (zv = null === (Pv = this.buffers.get(vv)) || void 0 === Pv ? void 0 : Pv.slot) && void 0 !== zv ? zv : -1;
+         const lT = null !== (kT = null === (cT = this.buffers.get(TT)) || void 0 === cT ? void 0 : cT.slot) && void 0 !== kT ? kT : -1;
```

#### 377. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4735` → after: `L4735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4735) · [Before (L4735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4735)

```diff
-         return hv ? hv.slot >= 0 ? hv.slot + hv.size : null !== (zv = null === (Pv = hv.gpu) || void 0 === Pv ? void 0 : Pv.size) && void 0 !== zv ? zv : 0 : 0
+         return lT ? lT.slot >= 0 ? lT.slot + lT.size : null !== (kT = null === (cT = lT.gpu) || void 0 === cT ? void 0 : cT.size) && void 0 !== kT ? kT : 0 : 0
```

#### 378. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4739` → after: `L4739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4739) · [Before (L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4739)

```diff
-         return null !== (hv = null !== (Sv = Pv && this.modelInput(Pv, zv)) && void 0 !== Sv ? Sv : null === (ev = null !== (gv = this.OE.get(vv)) && void 0 !== gv ? gv : this.batchUploads.get(vv)) || void 0 === ev ? void 0 : ev.inputs[zv]) && void 0 !== hv ? hv : null
+         return null !== (lT = null !== (MT = cT && this.modelInput(cT, kT)) && void 0 !== MT ? MT : null === (KT = null !== (OT = this.Aq.get(TT)) && void 0 !== OT ? OT : this.batchUploads.get(TT)) || void 0 === KT ? void 0 : KT.inputs[kT]) && void 0 !== lT ? lT : null
```

#### 379. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4778` → after: `L4778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4778) · [Before (L4778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4778)

```diff
-               GT: 0,
+               DA: 0,
```

#### 380. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4783` → after: `L4783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4783) · [Before (L4783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4783)

```diff
-             GT: 0
+             DA: 0
```

#### 381. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4801` → after: `L4801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4801) · [Before (L4801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4801)

```diff
-             if (6 !== vv.length) throw new Error(`${vv.length} files where six faces were expected`);
+             if (6 !== TT.length) throw new Error(`${TT.length} files where six faces were expected`);
```

#### 382. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4838` → after: `L4838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4838) · [Before (L4838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4838)

```diff
-           const vv = (0, Kg.d)(this.engine, {
+           const TT = (0, JO.b)(this.engine, {
```

#### 383. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4866` → after: `L4866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4866) · [Before (L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4866)

```diff
-         return gv && gv.view === Sv.view && gv.sampler === ev ? gv : (hv.bound = {
+         return OT && OT.view === MT.view && OT.sampler === KT ? OT : (lT.bound = {
```

#### 384. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4873` → after: `L4873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4873) · [Before (L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4873)

```diff
-         return null !== (zv = null === (Pv = vv.gpu[Dv.g.lite]) || void 0 === Pv ? void 0 : Pv.state.decoded) && void 0 !== zv ? zv : null
+         return null !== (kT = null === (cT = TT.gpu[bT.g.lite]) || void 0 === cT ? void 0 : cT.state.decoded) && void 0 !== kT ? kT : null
```

#### 385. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4916` → after: `L4916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4916) · [Before (L4916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4916)

```diff
-           return "canvas" === zv.kind ? null : `${zv.kind}|${Jg(zv)}|${Pv.noMipmap}|${Pv.samplingMode}|${Pv.invertY}`
+           return "canvas" === kT.kind ? null : `${kT.kind}|${BO(kT)}|${cT.noMipmap}|${cT.samplingMode}|${cT.invertY}`
```

#### 386. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4944` → after: `L4944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4944) · [Before (L4944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4944)

```diff
-         const ev = `${vv}|${zv}|${Pv}|${hv}|${Sv}`;
+         const KT = `${TT}|${kT}|${cT}|${lT}|${MT}`;
```

#### 387. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4952` → after: `L4952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4952) · [Before (L4952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4952)

```diff
-           gv = (0, Kg.d)(this.engine, pv), this.samplers.set(ev, gv)
+           OT = (0, JO.b)(this.engine, yT), this.samplers.set(KT, OT)
```

#### 388. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4966` → after: `L4966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4966) · [Before (L4966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4966)

```diff
-         const Sv = (0, Vg.c)(this.engine, hv, {
+         const MT = (0, oO.e)(this.engine, lT, {
```

#### 389. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4977` → after: `L4977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4977) · [Before (L4977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4977)

```diff
-           vv.failed = !0, console.warn(`Lite: could not load texture ${qS(zv)}`, Pv)
+           TT.failed = !0, console.warn(`Lite: could not load texture ${EM(kT)}`, cT)
```

#### 390. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4985` → after: `L4985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4985) · [Before (L4985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4985)

```diff
-         const hv = tg(this.engine, this.device, Pv, (0, Dv.v)(zv), vv.hasMips);
+         const lT = VO(this.engine, this.device, cT, (0, bT.x)(kT), TT.hasMips);
```

#### 391. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4995` → after: `L4995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L4995) · [Before (L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L4995)

```diff
-         } = vv, hv = (0, Ug.b)(this.engine, Math.max(1, Pv.width), Math.max(1, Pv.height), {
+         } = TT, lT = (0, HO.e)(this.engine, Math.max(1, cT.width), Math.max(1, cT.height), {
```

#### 392. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5009` → after: `L5009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5009) · [Before (L5009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5009)

```diff
-         if (Pv && hv && 0 !== Sv.width && 0 !== Sv.height) return Sv.width !== hv.width || Sv.height !== hv.height ? (this.releaseTexture(zv), zv.dynamic = null, zv.view = null, void this.createDynamic(vv, zv)) : void(0, Ug.f)(this.engine, hv, Sv, {
+         if (cT && lT && 0 !== MT.width && 0 !== MT.height) return MT.width !== lT.width || MT.height !== lT.height ? (this.releaseTexture(kT), kT.dynamic = null, kT.view = null, void this.createDynamic(TT, kT)) : void(0, HO.g)(this.engine, lT, MT, {
```

#### 393. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5023` → after: `L5023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5023) · [Before (L5023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5023)

```diff
-       vv._colorAttachment.storeOp = vv._targetSignature._sampleCount > 1 ? zv : "store";
+       TT._colorAttachment.storeOp = TT._targetSignature._sampleCount > 1 ? kT : "store";
```

#### 394. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5027-L5030` → after: `L5027-L5030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5027-L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5027-L5030) · [Before (L5027-L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5027-L5030)

```diff
-     var bg = Pv(37293),
-       rg = Pv(37343),
-       kg = Pv(36948),
-       Xg = Pv(39043);
+     var pO = cT(37637),
+       iO = cT(37680),
+       qO = cT(37299),
+       sO = cT(39358);
```

#### 395. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5039-L5040` → after: `L5039-L5040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5039-L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5039-L5040) · [Before (L5039-L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5039-L5040)

```diff
-       vv.fov = zv.fov, vv.near = zv.near, vv.far = zv.far, vv.renderWidth = Pv.renderWidth, vv.renderHeight = Pv.renderHeight, (0, kg.o)(zv.holderRotation, 0, zp, 0), (0, kg.b)(ug, 0, zp, 0, zv.holderPosition, 0, Pp);
-       const hv = zv.Gy;
+       TT.fov = kT.fov, TT.near = kT.near, TT.far = kT.far, TT.renderWidth = cT.renderWidth, TT.renderHeight = cT.renderHeight, (0, qO.u)(kT.holderRotation, 0, cy, 0), (0, qO.e)(Ty, 0, cy, 0, kT.holderPosition, 0, ly);
+       const lT = kT.aY;
```

#### 396. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5043` → after: `L5043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5043) · [Before (L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5043)

```diff
-       (0, kg.j)(hv, hp, vp, Sv), (0, kg.i)(Sv, 0, Sv), (0, kg.k)(Sv, Pp, 0, Sv), (0, kg.i)(Sv, 0, Sv);
+       (0, qO.l)(lT, My, ky, MT), (0, qO.j)(MT, 0, MT), (0, qO.n)(MT, ly, 0, MT), (0, qO.j)(MT, 0, MT);
```

#### 397. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5045` → after: `L5045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5045) · [Before (L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5045)

```diff
-       (0, kg.i)(Sv, 0, ev), vv.eye[0] = ev[12], vv.eye[1] = ev[13], vv.eye[2] = ev[14], Sp[0] = vv.fov, Sp[1] = vv.renderWidth / vv.renderHeight, Sp[2] = vv.near, Sp[3] = vv.far, (0, kg.l)(Sp, vv.projectionMatrix), (0, kg.k)(Sv, vv.projectionMatrix, 0, vv.viewProjectionMatrix), ( … [truncated]
+       (0, qO.j)(MT, 0, KT), TT.eye[0] = KT[12], TT.eye[1] = KT[13], TT.eye[2] = KT[14], Ky[0] = TT.fov, Ky[1] = TT.renderWidth / TT.renderHeight, Ky[2] = TT.near, Ky[3] = TT.far, (0, qO.r)(Ky, TT.projectionMatrix), (0, qO.n)(MT, TT.projectionMatrix, 0, TT.viewProjectionMatrix), ( … [truncated]
```

#### 398. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5052` → after: `L5052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5052) · [Before (L5052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5052)

```diff
-       }, (() => new bg.b(0, 0, 0, 0))));
+       }, (() => new pO.e(0, 0, 0, 0))));
```

#### 399. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5068` → after: `L5068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5068) · [Before (L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5068)

```diff
-       return zv.animTick = (0, rg.f)(), zv.timeMs = performance.now(), pp(zv, vv.Is), vv.model.update(zv.frameId), zv
+       return kT.animTick = (0, iO.f)(), kT.timeMs = performance.now(), fy(kT, TT.et), TT.model.update(kT.frameId), kT
```

#### 400. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5072` → after: `L5072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5072) · [Before (L5072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5072)

```diff
-       const zv = vv.Is,
+       const kT = TT.et,
```

#### 401. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5075` → after: `L5075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5075) · [Before (L5075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5075)

```diff
-           Wy: hv
+           hY: lT
```

#### 402. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5077` → after: `L5077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5077) · [Before (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5077)

```diff
-       return ep(Pv, hv, zv.ma()), zv.onBeforeRenderObservable.notifyObservers(zv), gp(zv, Pv.frustum), zv.onBeforeCameraRenderObservable.notifyObservers(zv.activeCamera), dp(vv)
+       return Oy(cT, lT, kT.Dv()), kT.onBeforeRenderObservable.notifyObservers(kT), yy(kT, cT.frustum), kT.onBeforeCameraRenderObservable.notifyObservers(kT.activeCamera), xy(TT)
```

#### 403. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5079-L5081` → after: `L5079-L5081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5079-L5081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5079-L5081) · [Before (L5079-L5081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5079-L5081)

```diff
-     var lp = Pv(36900),
-       Tp = Pv(37039),
-       Wp = Pv(37334);
+     var Ay = cT(37260),
+       Cy = cT(37389),
+       jy = cT(37676);
```

#### 404. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5085-L5086` → after: `L5085-L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5085-L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5085-L5086) · [Before (L5085-L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5085-L5086)

```diff
-       const hv = (0, nv.bb)(vv);
-       if (!hv || hv.diffuseTexture && (0, Wp.g)(vv)) return null;
+       const lT = (0, wT.cb)(TT);
+       if (!lT || lT.diffuseTexture && (0, jy.h)(TT)) return null;
```

#### 405. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5088` → after: `L5088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5088) · [Before (L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5088)

```diff
-         ev = null === (Pv = (0, nv.x)(hv, Je.c.name)) || void 0 === Pv ? void 0 : Pv.state,
+         KT = null === (cT = (0, wT.x)(lT, BK.b.name)) || void 0 === cT ? void 0 : cT.state,
```

#### 406. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5093` → after: `L5093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5093) · [Before (L5093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5093)

```diff
-         hv.set(vv.diffuseColor, gv.diffuse), hv[gv.diffuse + 3] = vv.alpha, hv.set(vv.ambientColor, gv.ambientAndCutoff), hv[gv.ambientAndCutoff + 3] = vv.alphaCutOff, hv.set(vv.emissiveColor, gv.emissiveAndLevel), hv[gv.emissiveAndLevel + 3] = null !== (Sv = null === (ev = vv.di … [truncated]
+         lT.set(TT.diffuseColor, OT.diffuse), lT[OT.diffuse + 3] = TT.alpha, lT.set(TT.ambientColor, OT.ambientAndCutoff), lT[OT.ambientAndCutoff + 3] = TT.alphaCutOff, lT.set(TT.emissiveColor, OT.emissiveAndLevel), lT[OT.emissiveAndLevel + 3] = null !== (MT = null === (KT = TT.di … [truncated]
```

#### 407. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5099-L5100` → after: `L5099-L5100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5099-L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5099-L5100) · [Before (L5099-L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5099-L5100)

```diff
-         liquid: (0, Wp.h)(vv),
-         customRenderMat: (0, Wp.g)(vv),
+         liquid: (0, jy.l)(TT),
+         customRenderMat: (0, jy.h)(TT),
```

#### 408. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5104` → after: `L5104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5104) · [Before (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5104)

```diff
-     var ap = Pv(36892);
+     var ty = cT(37242);
```

#### 409. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5119` → after: `L5119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5119) · [Before (L5119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5119)

```diff
-         this.arena = vv, this.PC = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.PC = new Qg(zv);
+         this.arena = TT, this.qt = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.qt = new uO(kT);
```

#### 410. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5124` → after: `L5124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5124) · [Before (L5124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5124)

```diff
-         return this.PC.GT
+         return this.qt.DA
```

#### 411. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5144` → after: `L5144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5144) · [Before (L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5144)

```diff
-         return this.dropped || vv.start + vv.length > this.GT
+         return this.dropped || TT.start + TT.length > this.DA
```

#### 412. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5178` → after: `L5178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5178) · [Before (L5178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5178)

```diff
-           label: `${hv}-grow`
+           label: `${lT}-grow`
```

#### 413. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5180` → after: `L5180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5180) · [Before (L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5180)

```diff
-         ev.buffer = this.createBuffer(ev, !1), gv.copyBufferToBuffer(Sv.buffer, 0, ev.buffer, 0, Sv.units * Pv), Sv.twin && (ev.twin = this.createBuffer(ev, !0), gv.copyBufferToBuffer(Sv.twin, 0, ev.twin, 0, Sv.units * this.arena.twinUnitBytes)), zv.queue.submit([gv.finish()]), t … [truncated]
+         KT.buffer = this.createBuffer(KT, !1), OT.copyBufferToBuffer(MT.buffer, 0, KT.buffer, 0, MT.units * cT), MT.twin && (KT.twin = this.createBuffer(KT, !0), OT.copyBufferToBuffer(MT.twin, 0, KT.twin, 0, MT.units * this.arena.twinUnitBytes)), kT.queue.submit([OT.finish()]), t … [truncated]
```

#### 414. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5199-L5200` → after: `L5199-L5200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5199-L5200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5199-L5200) · [Before (L5199-L5200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5199-L5200)

```diff
-           label: zv ? `${gv}-light` : gv,
-           size: vv.units * (zv ? Sv : hv),
+           label: kT ? `${OT}-light` : OT,
+           size: TT.units * (kT ? MT : lT),
```

#### 415. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5206` → after: `L5206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5206) · [Before (L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5206)

```diff
-           this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${gv} buffer, taken as failed: ${String(Pv)}`), this.settle(vv, zv, !1, !1)
+           this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${OT} buffer, taken as failed: ${String(cT)}`), this.settle(TT, kT, !1, !1)
```

#### 416. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5215` → after: `L5215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5215) · [Before (L5215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5215)

```diff
-             return this.PC.truncate(this.backings[Sv - 1].units), this.growable = !1, void this.promote()
+             return this.qt.truncate(this.backings[MT - 1].units), this.growable = !1, void this.promote()
```

#### 417. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5240` → after: `L5240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5240) · [Before (L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5240)

```diff
-         if (this.device = vv, this.unitBytes = zv, this.usage = Pv, this.label = hv, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, t … [truncated]
+         if (this.device = TT, this.unitBytes = kT, this.usage = cT, this.label = lT, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, t … [truncated]
```

#### 418. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5263` → after: `L5263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5263) · [Before (L5263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5263)

```diff
-           const zv = Sv.PC.allocate(vv);
+           const kT = MT.qt.allocate(TT);
```

#### 419. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5272-L5273` → after: `L5272-L5273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5272-L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5272-L5273) · [Before (L5272-L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5272-L5273)

```diff
-           const Pv = Math.min(this.ceiling, Math.max(2 * zv.GT, zv.GT + vv));
-           if (Pv - zv.GT >= vv) return zv.grow(Pv), {
+           const cT = Math.min(this.ceiling, Math.max(2 * kT.DA, kT.DA + TT));
+           if (cT - kT.DA >= TT) return kT.grow(cT), {
```

#### 420. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5275` → after: `L5275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5275) · [Before (L5275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5275)

```diff
-             start: zv.PC.allocate(vv),
+             start: kT.qt.allocate(TT),
```

#### 421. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5279` → after: `L5279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5279) · [Before (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5279)

```diff
-         zv && zv !== this.pages[0] && 0 === zv.PC.used && zv.drop();
+         kT && kT !== this.pages[0] && 0 === kT.qt.used && kT.drop();
```

#### 422. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5284` → after: `L5284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5284) · [Before (L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5284)

```diff
-           start: hv.PC.allocate(vv),
+           start: lT.qt.allocate(TT),
```

#### 423. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5293` → after: `L5293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5293) · [Before (L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5293)

```diff
-         zv.PC.free(vv.start, vv.length), 0 === zv.PC.used && zv !== this.pages[0] && zv !== this.pages[this.pages.length - 1] && zv.drop()
+         kT.qt.free(TT.start, TT.length), 0 === kT.qt.used && kT !== this.pages[0] && kT !== this.pages[this.pages.length - 1] && kT.drop()
```

#### 424. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5300` → after: `L5300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5300) · [Before (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5300)

```diff
-         this.warnOnce("outOfMemory", `out of GPU memory for a ${zv}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, vv), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, vv) / 2));
+         this.warnOnce("outOfMemory", `out of GPU memory for a ${kT}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, TT), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, TT) / 2));
```

#### 425. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5314` → after: `L5314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5314) · [Before (L5314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5314)

```diff
-         for (const Sv of this.pages) vv += Sv.GT, zv += Sv.PC.used, Pv += Sv.hasTwin ? Sv.GT * this.twinUnitBytes : 0, hv += Sv.allocatedBytes;
+         for (const MT of this.pages) TT += MT.DA, kT += MT.qt.used, cT += MT.hasTwin ? MT.DA * this.twinUnitBytes : 0, lT += MT.allocatedBytes;
```

#### 426. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5344` → after: `L5344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5344) · [Before (L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5344)

```diff
-         this.vertexArena = new ip(vv, Pv, GPUBufferUsage.VERTEX, `terrain-vertices-${Pv}`), this.quadArena = new ip(vv, Tp.d, GPUBufferUsage.STORAGE, "terrain-quads", {
+         this.vertexArena = new Qy(TT, cT, GPUBufferUsage.VERTEX, `terrain-vertices-${cT}`), this.quadArena = new Qy(TT, Cy.b, GPUBufferUsage.STORAGE, "terrain-quads", {
```

#### 427. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5348` → after: `L5348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5348) · [Before (L5348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5348)

```diff
-         const hv = (0, nz.f)(new Uint16Array(98298), cp);
+         const lT = (0, wk.g)(new Uint16Array(98298), Sy);
```

#### 428. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5367` → after: `L5367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5367) · [Before (L5367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5367)

```diff
-         Pv && 0 !== zv.length && Pv.page.live && (zv.length < vv.vertexCount ? Pv.page.arena.warnOnce("shortLight", `a part's ${zv.length} light values are fewer than its ${vv.vertexCount} vertices, so its light is left as it was`) : (Pv.page.writeLight(Pv, zv), vv.lit = !0))
+         cT && 0 !== kT.length && cT.page.live && (kT.length < TT.vertexCount ? cT.page.arena.warnOnce("shortLight", `a part's ${kT.length} light values are fewer than its ${TT.vertexCount} vertices, so its light is left as it was`) : (cT.page.writeLight(cT, kT), TT.lit = !0))
```

#### 429. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5370` → after: `L5370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5370) · [Before (L5370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5370)

```diff
-         this.fullSky.length < zv && (this.fullSky = new Uint16Array(Math.max(zv, 4096)).fill(ap.i));
+         this.fullSky.length < kT && (this.fullSky = new Uint16Array(Math.max(kT, 4096)).fill(ty.l));
```

#### 430. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5432` → after: `L5432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5432) · [Before (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5432)

```diff
-           code: (ev = Pv._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${ev?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(pos … [truncated]
+           code: (KT = cT._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${KT?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(pos … [truncated]
```

#### 431. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5466` → after: `L5466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5466) · [Before (L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5466)

```diff
-         return null !== (vv = null === (zv = this.copy) || void 0 === zv ? void 0 : zv.view) && void 0 !== vv ? vv : null
+         return null !== (TT = null === (kT = this.copy) || void 0 === kT ? void 0 : kT.view) && void 0 !== TT ? TT : null
```

#### 432. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5480` → after: `L5480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5480) · [Before (L5480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5480)

```diff
-         if (Nv += this.drawList(dv, zv, vv._directBindings, 0, vv._directBindings.length), Nv += this.drawList(dv, zv, Sv, 0, ev >= 0 ? ev : Sv.length), dv.end(), ev < 0) return Nv;
+         if (xT += this.drawList(fT, kT, TT._directBindings, 0, TT._directBindings.length), xT += this.drawList(fT, kT, MT, 0, KT >= 0 ? KT : MT.length), fT.end(), KT < 0) return xT;
```

#### 433. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5513` → after: `L5513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5513) · [Before (L5513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5513)

```diff
-         const Sv = (null !== (Pv = zv._config.depth) && void 0 !== Pv ? Pv : zv._config.rt)._depthTexture,
+         const MT = (null !== (cT = kT._config.depth) && void 0 !== cT ? cT : kT._config.rt)._depthTexture,
```

#### 434. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5520` → after: `L5520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5520) · [Before (L5520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5520)

```diff
-         this.retired = null !== (zv = null === (Pv = this.copy) || void 0 === Pv ? void 0 : Pv.texture) && void 0 !== zv ? zv : null;
+         this.retired = null !== (kT = null === (cT = this.copy) || void 0 === cT ? void 0 : cT.texture) && void 0 !== kT ? kT : null;
```

#### 435. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5605` → after: `L5605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5605) · [Before (L5605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5605)

```diff
-           code: (gv = this.edge, `${(0,Oz.z)()}${ZP({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\ … [truncated]
+           code: (OT = this.edge, `${(0,mk.K)()}${Xc({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\ … [truncated]
```

#### 436. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5645` → after: `L5645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5645) · [Before (L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5645)

```diff
-         return null !== (vv = null === (zv = this.targets) || void 0 === zv ? void 0 : zv.maskView) && void 0 !== vv ? vv : null
+         return null !== (TT = null === (kT = this.targets) || void 0 === kT ? void 0 : kT.maskView) && void 0 !== TT ? TT : null
```

#### 437. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5692` → after: `L5692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5692) · [Before (L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5692)

```diff
-         const hv = (null !== (zv = vv._config.depth) && void 0 !== zv ? zv : vv._config.rt)._depthTexture;
+         const lT = (null !== (kT = TT._config.depth) && void 0 !== kT ? kT : TT._config.rt)._depthTexture;
```

#### 438. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5711` → after: `L5711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5711) · [Before (L5711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5711)

```diff
-           gv = null !== (Pv = vv._targetSignature._depthStencilFormat) && void 0 !== Pv ? Pv : zv.format,
+           OT = null !== (cT = TT._targetSignature._depthStencilFormat) && void 0 !== cT ? cT : kT.format,
```

#### 439. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5745` → after: `L5745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5745) · [Before (L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5745)

```diff
-               resource: (null !== pv && void 0 !== pv ? pv : zv).createView({
+               resource: (null !== yT && void 0 !== yT ? yT : kT).createView({
```

#### 440. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5801` → after: `L5801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5801) · [Before (L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5801)

```diff
-         status: "ev"
+         status: "KT"
```

#### 441. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5815` → after: `L5815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5815) · [Before (L5815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5815)

```diff
-               Bw: vv.runtime
+               Bj: TT.runtime
```

#### 442. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5819` → after: `L5819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5819) · [Before (L5819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5819)

```diff
-               return ev && Nh(zv.programKey(ev, !1, Sv)) ? (await ev.ready, vv.isCancelled() ? Dp : ev.bindGroupLayout ? await async function(vv, zv, Pv, hv) {
+               return KT && Il(kT.programKey(KT, !1, MT)) ? (await KT.ready, TT.isCancelled() ? zy : KT.bindGroupLayout ? await async function(TT, kT, cT, lT) {
```

#### 443. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5830` → after: `L5830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5830) · [Before (L5830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5830)

```diff
-                 const [pv, dv] = await Promise.all([gv, ev.built.then((() => null), (vv => null !== vv && void 0 !== vv ? vv : new Error("pipeline failed")))]);
+                 const [yT, fT] = await Promise.all([OT, KT.built.then((() => null), (TT => null !== TT && void 0 !== TT ? TT : new Error("pipeline failed")))]);
```

#### 444. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5833` → after: `L5833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5833) · [Before (L5833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5833)

```diff
-                   lv = Nv.length > 0 ? Nv.map((vv => `${ev.name} ${vv.lineNum}:${vv.linePos}: ${vv.message}`)).join("\n") : `${ev.name}: ${Rp(null!==dv&&void 0!==dv?dv:pv)}`;
+                   IT = xT.length > 0 ? xT.map((TT => `${KT.name} ${TT.lineNum}:${TT.linePos}: ${TT.message}`)).join("\n") : `${KT.name}: ${ey(null!==fT&&void 0!==fT?fT:yT)}`;
```

#### 445. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5839` → after: `L5839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5839) · [Before (L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5839)

```diff
-               }(zv, ev, zv.programKey(ev, "none" !== ev.texture, Sv), Pv): (console.warn(`Shader pack: skipped the compile check for "${hv.name}", whose textures failed to load`), Kp)) : Dp
+               }(kT, KT, kT.programKey(KT, "none" !== KT.texture, MT), cT): (console.warn(`Shader pack: skipped the compile check for "${lT.name}", whose textures failed to load`), Jy)) : zy
```

#### 446. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5855-L5856` → after: `L5855-L5856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5855-L5856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5855-L5856) · [Before (L5855-L5856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5855-L5856)

```diff
-             }), null !== (gv = zv.timeoutMs) && void 0 !== gv ? gv : Op), hv = setInterval((() => {
-               zv.isCancelled() && ev("ev")
+             }), null !== (OT = kT.timeoutMs) && void 0 !== OT ? OT : by), lT = setInterval((() => {
+               kT.isCancelled() && KT("KT")
```

#### 447. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5875-L5876` → after: `L5875-L5876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5875-L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5875-L5876) · [Before (L5875-L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5875-L5876)

```diff
-       if ("ev" === pv || Pv()) return {
-         status: "ev"
+       if ("KT" === yT || cT()) return {
+         status: "KT"
```

#### 448. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5889` → after: `L5889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5889) · [Before (L5889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5889)

```diff
-       } : "timeout" === pv ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(Nv=vv.timeoutMs)&&void 0!==Nv?Nv:Op)/1e3} s`), {
+       } : "timeout" === yT ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(xT=TT.timeoutMs)&&void 0!==xT?xT:by)/1e3} s`), {
```

#### 449. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5909` → after: `L5909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5909) · [Before (L5909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5909)

```diff
-       return null !== (zv = null === vv || void 0 === vv ? void 0 : vv.message) && void 0 !== zv ? zv : String(vv)
+       return null !== (kT = null === TT || void 0 === TT ? void 0 : TT.message) && void 0 !== kT ? kT : String(TT)
```

#### 450. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5915` → after: `L5915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5915) · [Before (L5915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5915)

```diff
-         ES("terrain", zv, hv, Pv ? `${Pv.lineNum}:${Pv.linePos} error: ${Pv.message}` : null)
+         WM("terrain", kT, lT, cT ? `${cT.lineNum}:${cT.linePos} error: ${cT.message}` : null)
```

#### 451. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5918-L5921` → after: `L5918-L5921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5918-L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5918-L5921) · [Before (L5918-L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5918-L5921)

```diff
-     var tp = Pv(37044),
-       qp = Pv(37055),
-       Ip = Pv(37067),
-       Qp = Pv(36983);
+     var Vy = cT(37395),
+       Ey = cT(37402),
+       Zy = cT(37419),
+       uy = cT(37322);
```

#### 452. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5933` → after: `L5933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5933) · [Before (L5933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5933)

```diff
-         aa: Tv
+         vv: AT
```

#### 453. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5935` → after: `L5935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5935) · [Before (L5935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5935)

```diff
-       let Wv = vv.EQ(pv[0], pv[1], pv[2]);
+       let CT = TT.RZ(yT[0], yT[1], yT[2]);
```

#### 454. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5941` → after: `L5941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5941) · [Before (L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5941)

```diff
-         const ev = vv.EQ(pv[0], pv[1], pv[2]),
+         const KT = TT.RZ(yT[0], yT[1], yT[2]),
```

#### 455. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5949` → after: `L5949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5949) · [Before (L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5949)

```diff
-           !vv.isDrawn(ev, gv, dv) && vv.hasParts(ev, gv, dv) && Sv.add(`${ev},${gv},${dv}`)
+           !TT.isDrawn(KT, OT, fT) && TT.hasParts(KT, OT, fT) && MT.add(`${KT},${OT},${fT}`)
```

#### 456. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5961` → after: `L5961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5961) · [Before (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5961)

```diff
-         this.device = vv, this.mG = zv, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
+         this.device = TT, this.zN = kT, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
```

#### 457. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5972` → after: `L5972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5972) · [Before (L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5972)

```diff
-         const zv = null !== (vv = this.free.pop()) && void 0 !== vv ? vv : this.next++;
+         const kT = null !== (TT = this.free.pop()) && void 0 !== TT ? TT : this.next++;
```

#### 458. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5975` → after: `L5975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L5975) · [Before (L5975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L5975)

```diff
-           vv.set(this.data), this.data = vv, this.words = new Uint32Array(vv.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.mG()
+           TT.set(this.data), this.data = TT, this.words = new Uint32Array(TT.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.zN()
```

#### 459. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6019` → after: `L6019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6019) · [Before (L6019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6019)

```diff
-         this.device = vv, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout  … [truncated]
+         this.device = TT, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout  … [truncated]
```

#### 460. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6093` → after: `L6093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6093) · [Before (L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6093)

```diff
-               buffer: null !== vv && void 0 !== vv ? vv : this.slots.buffer
+               buffer: null !== TT && void 0 !== TT ? TT : this.slots.buffer
```

#### 461. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6098` → after: `L6098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6098) · [Before (L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6098)

```diff
-               buffer: null !== zv && void 0 !== zv ? zv : this.slots.buffer
+               buffer: null !== kT && void 0 !== kT ? kT : this.slots.buffer
```

#### 462. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6104` → after: `L6104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6104) · [Before (L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6104)

```diff
-         const Pv = null !== zv && void 0 !== zv ? zv : vv;
+         const cT = null !== kT && void 0 !== kT ? kT : TT;
```

#### 463. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6144` → after: `L6144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6144) · [Before (L6144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6144)

```diff
-         const ev = null !== (hv = zv.faceGroups) && void 0 !== hv ? hv : null;
+         const KT = null !== (lT = kT.faceGroups) && void 0 !== lT ? lT : null;
```

#### 464. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6146` → after: `L6146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6146) · [Before (L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6146)

```diff
-           const vv = tp.n;
+           const TT = Vy.m;
```

#### 465. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6149` → after: `L6149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6149) · [Before (L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6149)

```diff
-         this.drawWhole(Sv), 0 !== Sv.faceCount && (this.geometry.set(Sv, zv) ? (Sv.packed && this.slots.setFaces(Sv.slot, Sv.vertices.start + Sv.faceCount, Sv.faceCount), zv.uw && this.setChunkMeshLight(vv, zv.uw)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${Sv.vertexCo … [truncated]
+         this.drawWhole(MT), 0 !== MT.faceCount && (this.geometry.set(MT, kT) ? (MT.packed && this.slots.setFaces(MT.slot, MT.vertices.start + MT.faceCount, MT.faceCount), kT.kv && this.setChunkMeshLight(TT, kT.kv)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${MT.vertexCo … [truncated]
```

#### 466. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6181-L6184` → after: `L6181-L6184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6181-L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6181-L6184) · [Before (L6181-L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6181-L6184)

```diff
-         const Pv = vv.oT,
-           [hv, Sv, ev] = Pv.ozv(zv.origin[0], zv.origin[1], zv.origin[2]),
-           gv = Pv.Ns.ls(hv, Sv, ev);
-         gv && (gv.gs = !0, gv.ss = !0, Pv.ds(gv, !1))
+         const cT = TT.pA,
+           [lT, MT, KT] = cT.fcT(kT.origin[0], kT.origin[1], kT.origin[2]),
+           OT = cT.ft.xt(lT, MT, KT);
+         OT && (OT.Ot = !0, OT.tt = !0, cT.yt(OT, !1))
```

#### 467. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6188` → after: `L6188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6188) · [Before (L6188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6188)

```diff
-         vv.faceMask = Pv, vv.rangeCount = (0, qp.m)(zv, Pv, hv), vv.first0 = hv[0], vv.count0 = hv[1], vv.first1 = hv[2], vv.count1 = hv[3]
+         TT.faceMask = cT, TT.rangeCount = (0, Ey.u)(kT, cT, lT), TT.first0 = lT[0], TT.count0 = lT[1], TT.first1 = lT[2], TT.count1 = lT[3]
```

#### 468. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6201` → after: `L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6201) · [Before (L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6201)

```diff
-         if (!Pv) return this.warnOnce(`material:${vv.name}`, `Lite terrain cannot draw material "${vv.name}"; its chunks are skipped.`), null;
+         if (!cT) return this.warnOnce(`material:${TT.name}`, `Lite terrain cannot draw material "${TT.name}"; its chunks are skipped.`), null;
```

#### 469. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6215` → after: `L6215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6215) · [Before (L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6215)

```diff
-             label: `terrain-material-${vv.name}`,
+             label: `terrain-material-${TT.name}`,
```

#### 470. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6222` → after: `L6222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6222) · [Before (L6222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6222)

```diff
-           gJ: 0,
+           qB: 0,
```

#### 471. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6229` → after: `L6229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6229) · [Before (L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6229)

```diff
-           console.error(`Lite terrain failed to load the textures of material "${vv.name}"`, zv)
+           console.error(`Lite terrain failed to load the textures of material "${TT.name}"`, kT)
```

#### 472. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6246` → after: `L6246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6246) · [Before (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6246)

```diff
-             label: `terrain-material-${Pv}`,
+             label: `terrain-material-${cT}`,
```

#### 473. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6298` → after: `L6298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6298) · [Before (L6298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6298)

```diff
-             return AS(this.device, vv, null !== (Pv = null === Sv || void 0 === Sv ? void 0 : Sv[zv]) && void 0 !== Pv ? Pv : null, ev)
+             return dM(this.device, TT, null !== (cT = null === MT || void 0 === MT ? void 0 : MT[kT]) && void 0 !== cT ? cT : null, KT)
```

#### 474. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6300` → after: `L6300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6300) · [Before (L6300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6300)

```diff
-           vv.atlasCount = gv.length, vv.gJ = gv[0].layerWidth, vv.atlasLayers = gv[0].layers, zv.animDataPerTex && Pv.push({
+           TT.atlasCount = OT.length, TT.qB = OT[0].layerWidth, TT.atlasLayers = OT[0].layers, kT.animDataPerTex && cT.push({
```

#### 475. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6314` → after: `L6314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6314) · [Before (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6314)

```diff
-           Pv.push(this.sampler), Pv.push(xS(this.device, hv, Sv, ev, 1, `terrain-${zv}`).createView({
+           cT.push(this.sampler), cT.push(GM(this.device, lT, MT, KT, 1, `terrain-${kT}`).createView({
```

#### 476. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6320` → after: `L6320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6320) · [Before (L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6320)

```diff
-           label: `terrain-material-${vv.model.name}`,
+           label: `terrain-material-${TT.model.name}`,
```

#### 477. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6331` → after: `L6331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6331) · [Before (L6331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6331)

```diff
-           Sv = Pv ? Pv.Bw : this.Bw,
+           MT = cT ? cT.Bj : this.Bj,
```

#### 478. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6335` → after: `L6335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6335) · [Before (L6335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6335)

```diff
-             gJ: vv.gJ,
+             qB: TT.qB,
```

#### 479. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6353` → after: `L6353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6353) · [Before (L6353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6353)

```diff
-         return vv.customRenderMat ? hh : function(vv, zv) {
+         return TT.customRenderMat ? Ml : function(TT, kT) {
```

#### 480. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6356` → after: `L6356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6356) · [Before (L6356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6356)

```diff
-           return 0 === Pv ? hh : {
+           return 0 === cT ? Ml : {
```

#### 481. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6390` → after: `L6390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6390) · [Before (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6390)

```diff
-         return void 0 !== Sv ? Sv : (this.startPipeline(hv, vv, zv, Pv), null)
+         return void 0 !== MT ? MT : (this.startPipeline(lT, TT, kT, cT), null)
```

#### 482. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6398` → after: `L6398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6398) · [Before (L6398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6398)

```diff
-         return null !== (hv = this.builds.get(Sv)) && void 0 !== hv ? hv : this.startPipeline(Sv, vv, zv, Pv)
+         return null !== (lT = this.builds.get(MT)) && void 0 !== lT ? lT : this.startPipeline(MT, TT, kT, cT)
```

#### 483. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6407` → after: `L6407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6407) · [Before (L6407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6407)

```diff
-             const Sv = (0, Dz.g)(vv.packVariant);
+             const MT = (0, bk.d)(TT.packVariant);
```

#### 484. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6422` → after: `L6422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6422) · [Before (L6422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6422)

```diff
-             offset: Yz.e.QS,
+             offset: Pk.e.eM,
```

#### 485. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6461` → after: `L6461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6461) · [Before (L6461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6461)

```diff
-             }, hv, gv ? Bp : null),
+             }, lT, OT ? Yy : null),
```

#### 486. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6464` → after: `L6464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6464) · [Before (L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6464)

```diff
-               depthCompare: null !== (Sv = hv._depthCompare) && void 0 !== Sv ? Sv : Pz,
+               depthCompare: null !== (MT = lT._depthCompare) && void 0 !== MT ? MT : ck,
```

#### 487. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6482` → after: `L6482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6482) · [Before (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6482)

```diff
-           this.compiling -= wv, console.error(`Lite terrain pipeline ${ev} failed`, vv), xp(Pv, ev, Nv, vv)
+           this.compiling -= jT, console.error(`Lite terrain pipeline ${KT} failed`, TT), Gy(cT, KT, xT, TT)
```

#### 488. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6493` → after: `L6493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6493) · [Before (L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6493)

```diff
-           Sv = this.device.createRenderPipelineAsync(Pv ? zv : {
+           MT = this.device.createRenderPipelineAsync(cT ? kT : {
```

#### 489. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6503` → after: `L6503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6503) · [Before (L6503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6503)

```diff
-             label: `${zv.label}-prepass`,
+             label: `${kT.label}-prepass`,
```

#### 490. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6521` → after: `L6521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6521) · [Before (L6521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6521)

```diff
-         console.error(`Lite terrain pipeline ${Pv} failed`, hv), xp(zv, Pv, null, hv);
+         console.error(`Lite terrain pipeline ${cT} failed`, lT), Gy(kT, cT, null, lT);
```

#### 491. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6557` → after: `L6557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6557) · [Before (L6557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6557)

```diff
-           vW: gv
+           cC: OT
```

#### 492. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6559-L6562` → after: `L6559-L6562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6559-L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6559-L6562) · [Before (L6559-L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6559-L6562)

```diff
-         this.lighting = vv.Vs;
-         const pv = (0, lp.y)(zv);
-         this.dirLightCount = Math.min(pv, 4), this.Bw = null !== (Pv = gv.Bw) && void 0 !== Pv ? Pv : null, pv > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(vv, zv), this.animateMaterials(zv.animTick);
-         const dv = gv.iW,
+         this.lighting = TT.bt;
+         const yT = (0, Ay.r)(kT);
+         this.dirLightCount = Math.min(yT, 4), this.Bj = null !== (cT = OT.Bj) && void 0 !== cT ? cT : null, yT > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(TT, kT), this.animateMaterials(kT.animTick);
+         const fT = OT.QC,
```

#### 493. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6575` → after: `L6575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6575) · [Before (L6575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6575)

```diff
-         const sv = gv.oT.O4,
+         const tT = OT.pA.o_,
```

#### 494. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6578` → after: `L6578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6578) · [Before (L6578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6578)

```diff
-         const cv = !!this.Bw && Sh(this.Bw.defineFor("liquid"));
+         const QT = !!this.Bj && Kl(this.Bj.defineFor("liquid"));
```

#### 495. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6580-L6581` → after: `L6580-L6581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6580-L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6580-L6581) · [Before (L6580-L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6580-L6581)

```diff
-         const mv = null !== (hv = null === (Sv = gv.SF) || void 0 === Sv ? void 0 : Sv.visibility) && void 0 !== hv ? hv : null,
-           jv = this.visCull && Wv && 0 === this.compiling && null !== mv && gv.oT.CPv[0] >= this.visCullMinDistance ? this.target : null,
+         const DT = null !== (lT = null === (MT = OT.bS) || void 0 === MT ? void 0 : MT.visibility) && void 0 !== lT ? lT : null,
+           aT = this.visCull && CT && 0 === this.compiling && null !== DT && OT.pA.ocT[0] >= this.visCullMinDistance ? this.target : null,
```

#### 496. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6595` → after: `L6595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6595) · [Before (L6595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6595)

```diff
-                 Pv = (0, qp.h)(vv.planePX, vv.planeNX, vv.planePY, vv.planeNY, vv.planePZ, vv.planeNZ, this.eye[0] - (vv.origin[0] - this.originOffset[0]), this.eye[1] - (vv.origin[1] - this.originOffset[1]), this.eye[2] - (vv.origin[2] - this.originOffset[2]), (0, qp.f)(zv, wv)) … [truncated]
+                 cT = (0, Ey.m)(TT.planePX, TT.planeNX, TT.planePY, TT.planeNY, TT.planePZ, TT.planeNZ, this.eye[0] - (TT.origin[0] - this.originOffset[0]), this.eye[1] - (TT.origin[1] - this.originOffset[1]), this.eye[2] - (TT.origin[2] - this.originOffset[2]), (0, Ey.i)(kT, jT)) … [truncated]
```

#### 497. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6617` → after: `L6617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6617) · [Before (L6617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6617)

```diff
-           if (!(0, Xg.e)(zv.frustum, ev, pv, dv, sv)) continue;
+           if (!(0, sO.c)(kT.frustum, KT, yT, fT, tT)) continue;
```

#### 498. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6626` → after: `L6626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6626) · [Before (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6626)

```diff
-         null === (ev = (0, Ke.t)(gv)) || void 0 === ev || ev.update(zv.frustum, this.originOffset, sv, Kv);
+         null === (KT = (0, JK.u)(OT)) || void 0 === KT || KT.update(kT.frustum, this.originOffset, tT, zT);
```

#### 499. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6638-L6639` → after: `L6638-L6639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6638-L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6638-L6639) · [Before (L6638-L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6638-L6639)

```diff
-           oT: hv
-         } = vv.vW, Sv = hv.O4, ev = this.visPassable, gv = this.eye[0] + this.originOffset[0], pv = this.eye[1] + this.originOffset[1], dv = this.eye[2] + this.originOffset[2];
+           pA: lT
+         } = TT.cC, MT = lT.o_, KT = this.visPassable, OT = this.eye[0] + this.originOffset[0], yT = this.eye[1] + this.originOffset[1], fT = this.eye[2] + this.originOffset[2];
```

#### 500. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6641-L6642` → after: `L6641-L6642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6641-L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6641-L6642) · [Before (L6641-L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6641-L6642)

```diff
-         const [Nv, lv] = hv.CPv, Tv = Pv.update(gv, pv, dv, Sv, Nv, lv, ev);
-         return this.visSweeps = Pv.sweeps, Tv ? Pv : null
+         const [xT, IT] = lT.ocT, AT = cT.update(OT, yT, fT, MT, xT, IT, KT);
+         return this.visSweeps = cT.sweeps, AT ? cT : null
```

#### 501. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6656` → after: `L6656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6656) · [Before (L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6656)

```diff
-         let ev = null !== (hv = this.visBatchDraws.get(vv)) && void 0 !== hv ? hv : 0;
+         let KT = null !== (lT = this.visBatchDraws.get(TT)) && void 0 !== lT ? lT : 0;
```

#### 502. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6658` → after: `L6658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6658) · [Before (L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6658)

```diff
-           ev |= 1 << Sv | (!!vv.bindGroupLayout && this.canDraw(vv, zv) && !!this.pipelines.get(this.pipelineId(vv, this.programKey(vv, zv), Pv)) ? 2 << Sv : 0), this.visBatchDraws.set(vv, ev)
+           KT |= 1 << MT | (!!TT.bindGroupLayout && this.canDraw(TT, kT) && !!this.pipelines.get(this.pipelineId(TT, this.programKey(TT, kT), cT)) ? 2 << MT : 0), this.visBatchDraws.set(TT, KT)
```

#### 503. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6664` → after: `L6664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6664) · [Before (L6664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6664)

```diff
-           vW: hv
+           cC: lT
```

#### 504. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6666-L6667` → after: `L6666-L6667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6666-L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6666-L6667) · [Before (L6666-L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6666-L6667)

```diff
-           oT: Sv
-         } = hv, ev = Sv.O4, gv = new Set;
+           pA: MT
+         } = lT, KT = MT.o_, OT = new Set;
```

#### 505. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6671` → after: `L6671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6671) · [Before (L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6671)

```diff
-           Tv = new GS.fa,
+           AT = new DM.Fv,
```

#### 506. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6681` → after: `L6681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6681) · [Before (L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6681)

```diff
-             EQ: (vv, zv, Pv) => Sv.EQ(vv, zv, Pv),
+             RZ: (TT, kT, cT) => MT.RZ(TT, kT, cT),
```

#### 507. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6684` → after: `L6684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6684) · [Before (L6684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6684)

```diff
-             aa: ev,
+             vv: KT,
```

#### 508. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6687` → after: `L6687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6687) · [Before (L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6687)

```diff
-           }, [this.eye[0] + dv, this.eye[1] + Nv, this.eye[2] + lv], ((vv, zv) => (GS.fa.TransformCoordinatesFromFloatsToRef(vv, zv, .5, pv, Tv), [Tv.x + dv, Tv.y + Nv, Tv.z + lv])), (Sv.CPv[0] + 1) * ev);
+           }, [this.eye[0] + fT, this.eye[1] + xT, this.eye[2] + IT], ((TT, kT) => (DM.Fv.TransformCoordinatesFromFloatsToRef(TT, kT, .5, yT, AT), [AT.x + fT, AT.y + xT, AT.z + IT])), (MT.ocT[0] + 1) * KT);
```

#### 509. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6689` → after: `L6689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6689) · [Before (L6689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6689)

```diff
-         for (const wv of Wv) this.warnOnce(`vis:${wv}`, `Lite terrain cave culling skipped chunk ${wv}, which a ray from the eye reaches.`)
+         for (const jT of CT) this.warnOnce(`vis:${jT}`, `Lite terrain cave culling skipped chunk ${jT}, which a ray from the eye reaches.`)
```

#### 510. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6693` → after: `L6693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6693) · [Before (L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6693)

```diff
-         null !== (vv = this.Bw) && void 0 !== vv && vv.isRunning() && (this.shaderPackInputs ??= new He(this.device, this.Bw.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.Bw, this.eye, this.lighting))
+         null !== (TT = this.Bj) && void 0 !== TT && TT.isRunning() && (this.shaderPackInputs ??= new RK(this.device, this.Bj.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.Bj, this.eye, this.lighting))
```

#### 511. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6703-L6704` → after: `L6703-L6704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6703-L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6703-L6704) · [Before (L6703-L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6703-L6704)

```diff
-         const Nv = Sh(dv) ? null !== (hv = null === (Sv = this.sceneDepth) || void 0 === Sv ? void 0 : Sv.view) && void 0 !== hv ? hv : this.standIn() : null,
-           lv = pv ? null !== (ev = null === (gv = this.shadowMask) || void 0 === gv ? void 0 : gv.view) && void 0 !== ev ? ev : this.standIn() : null;
+         const xT = Kl(fT) ? null !== (lT = null === (MT = this.sceneDepth) || void 0 === MT ? void 0 : MT.view) && void 0 !== lT ? lT : this.standIn() : null,
+           IT = yT ? null !== (KT = null === (OT = this.shadowMask) || void 0 === OT ? void 0 : OT.view) && void 0 !== KT ? KT : this.standIn() : null;
```

#### 512. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6717` → after: `L6717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6717) · [Before (L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6717)

```diff
-         return null !== (vv = null === (zv = this.shaderPackInputs) || void 0 === zv ? void 0 : zv.bindGroupFor(null, !0)) && void 0 !== vv ? vv : null
+         return null !== (TT = null === (kT = this.shaderPackInputs) || void 0 === kT ? void 0 : kT.bindGroupFor(null, !0)) && void 0 !== TT ? TT : null
```

#### 513. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6757` → after: `L6757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6757) · [Before (L6757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6757)

```diff
-         return !(!zv || !(0, tp.r)(vv.model)) && (!this.Bw || ! function(vv) {
+         return !(!kT || !(0, Vy.r)(TT.model)) && (!this.Bj || ! function(TT) {
```

#### 514. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6759-L6760` → after: `L6759-L6760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6759-L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6759-L6760) · [Before (L6759-L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6759-L6760)

```diff
-           return !(null === (zv = (0, Dz.g)(vv)) || void 0 === zv || !zv.movesVertices)
-         }(this.shaderPackFields(vv, this.Bw).packVariant))
+           return !(null === (kT = (0, bk.d)(TT)) || void 0 === kT || !kT.movesVertices)
+         }(this.shaderPackFields(TT, this.Bj).packVariant))
```

#### 515. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6765-L6766` → after: `L6765-L6766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6765-L6766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6765-L6766) · [Before (L6765-L6766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6765-L6766)

```diff
-         if ((0, lp.B)(vv, Pv), Pv[hv.fogInfos] = zv.fogEnabled ? zv.fogMode : 0, Pv[hv.fogInfos + 1] = zv.fogStart, Pv[hv.fogInfos + 2] = zv.fogEnd, Pv[hv.fogInfos + 3] = zv.fogDensity, Pv.set(zv.fogColour, hv.fogColour), Pv[hv.outputHeight] = zv.renderHeight, Pv.set(zv.ambientCo … [truncated]
-           const zv = (0, Tp.g)(vv.Ba, vv.ia, vv.ca);
+         if ((0, Ay.s)(TT, cT), cT[lT.fogInfos] = kT.fogEnabled ? kT.fogMode : 0, cT[lT.fogInfos + 1] = kT.fogStart, cT[lT.fogInfos + 2] = kT.fogEnd, cT[lT.fogInfos + 3] = kT.fogDensity, cT.set(kT.fogColour, lT.fogColour), cT[lT.outputHeight] = kT.renderHeight, cT.set(kT.ambientCo … [truncated]
+           const kT = (0, Cy.h)(TT.Yv, TT.Nv, TT.Qv);
```

#### 516. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6777` → after: `L6777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6777) · [Before (L6777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6777)

```diff
-         return !("atlas" === vv.texture && !zv) || (this.warnOnce(`stride:${vv.id}`, `Lite terrain: material "${vv.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
+         return !("atlas" === TT.texture && !kT) || (this.warnOnce(`stride:${TT.id}`, `Lite terrain: material "${TT.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
```

#### 517. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6785` → after: `L6785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6785) · [Before (L6785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6785)

```diff
-           Sv && (vv.setPipeline(Sv), vv.setBindGroup(2, hv.material.bindGroup), this.Bw && this.bindShaderPackInputs(vv, hv.material, this.Bw, this.prepassOf.has(Sv)), Pv += this.drawBatch(vv, hv))
+           MT && (TT.setPipeline(MT), TT.setBindGroup(2, lT.material.bindGroup), this.Bj && this.bindShaderPackInputs(TT, lT.material, this.Bj, this.prepassOf.has(MT)), cT += this.drawBatch(TT, lT))
```

#### 518. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6794` → after: `L6794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6794) · [Before (L6794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6794)

```diff
-           Sv = this.Bw;
+           MT = this.Bj;
```

#### 519. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6831` → after: `L6831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6831) · [Before (L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6831)

```diff
-           pv && (pv !== hv && (vv.setPipeline(pv), hv = pv, this.Bw && this.bindShaderPackInputs(vv, gv, this.Bw)), gv !== Sv && (vv.setBindGroup(2, gv.bindGroup), Sv = gv), Pv += this.geometry.draw(vv, ev, this.lighting))
+           yT && (yT !== lT && (TT.setPipeline(yT), lT = yT, this.Bj && this.bindShaderPackInputs(TT, OT, this.Bj)), OT !== MT && (TT.setBindGroup(2, OT.bindGroup), MT = OT), cT += this.geometry.draw(TT, KT, this.lighting))
```

#### 520. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6838` → after: `L6838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6838) · [Before (L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6838)

```diff
-       return `${Kh(vv)}|${vv.atlasLayers}|${vv.gJ}|${zv}|${Pv}|${hv._colorFormat}|${hv._depthStencilFormat}|${hv._sampleCount}`
+       return `${Jl(TT)}|${TT.atlasLayers}|${TT.qB}|${kT}|${cT}|${lT._colorFormat}|${lT._depthStencilFormat}|${lT._sampleCount}`
```

#### 521. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6916` → after: `L6916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6916) · [Before (L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6916)

```diff
-         return (vv.xR !== this.builtVersion || this.blockCaster.length !== zv) && (this.build(vv, zv), !0)
+         return (TT.tV !== this.builtVersion || this.blockCaster.length !== kT) && (this.build(TT, kT), !0)
```

#### 522. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6919` → after: `L6919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6919) · [Before (L6919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6919)

```diff
-         this.builtVersion = vv.xR;
+         this.builtVersion = TT.tV;
```

#### 523. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6934` → after: `L6934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6934) · [Before (L6934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6934)

```diff
-         const Pv = vv.bJ[zv];
+         const cT = TT.Qp[kT];
```

#### 524. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6939` → after: `L6939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6939) · [Before (L6939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6939)

```diff
-           return this.warnOnce(`Sun shadows: no caster option for block ${zv}: ${hv instanceof Error?hv.message:String(hv)}`), null
+           return this.warnOnce(`Sun shadows: no caster option for block ${kT}: ${lT instanceof Error?lT.message:String(lT)}`), null
```

#### 525. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6949` → after: `L6949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6949) · [Before (L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6949)

```diff
-             key: `planes:${JSON.stringify(vv)}`,
+             key: `planes:${JSON.stringify(TT)}`,
```

#### 526. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6953-L6954` → after: `L6953-L6954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6953-L6954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6953-L6954) · [Before (L6953-L6954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6953-L6954)

```diff
-         if (vv.uW[zv]) return null;
-         const Sv = vv.Pw[zv] ? vv.JR(zv) : null;
+         if (TT.kj[kT]) return null;
+         const MT = TT.Mj[kT] ? TT.rV(kT) : null;
```

#### 527. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6972` → after: `L6972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6972) · [Before (L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6972)

```diff
-           }(vv) ? bz : vv.every((vv => 0 === vv)) ? null : {
+           }(TT) ? pk : TT.every((TT => 0 === TT)) ? null : {
```

#### 528. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6974` → after: `L6974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6974) · [Before (L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6974)

```diff
-             key: `shape:${vv.join(",")}`,
+             key: `shape:${TT.join(",")}`,
```

#### 529. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6978` → after: `L6978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6978) · [Before (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6978)

```diff
-         if (vv.Bx[zv] || !vv.Ja[zv]) return null;
+         if (TT.VV[kT] || !TT.Bv[kT]) return null;
```

#### 530. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6980` → after: `L6980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6980) · [Before (L6980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6980)

```diff
-           const Sv = vv.Ea[6 * zv + hv];
+           const MT = TT.Wv[6 * kT + lT];
```

#### 531. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6983` → after: `L6983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6983) · [Before (L6983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6983)

```diff
-             if (!vv || vv.Ss) return null;
+             if (!TT || TT.Mt) return null;
```

#### 532. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6985-L6987` → after: `L6985-L6987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6985-L6987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L6985-L6987) · [Before (L6985-L6987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L6985-L6987)

```diff
-               eJ: zv,
-               gJ: Pv,
-               PJ: hv
+               nB: kT,
+               qB: cT,
+               YB: lT
```

#### 533. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7006` → after: `L7006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7006) · [Before (L7006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7006)

```diff
-           }(vv.hs(Sv)), Pv.set(Sv, ev)), ev
+           }(TT.lt(MT)), cT.set(MT, KT)), KT
```

#### 534. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7011` → after: `L7011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7011) · [Before (L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7011)

```diff
-             return null !== (zv = null === vv || void 0 === vv ? void 0 : vv.width) && void 0 !== zv ? zv : 1
+             return null !== (kT = null === TT || void 0 === TT ? void 0 : TT.width) && void 0 !== kT ? kT : 1
```

#### 535. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7014` → after: `L7014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7014) · [Before (L7014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7014)

```diff
-           dv = ev.map((vv => null === vv ? pv : Xp(vv.alpha, vv.width, vv.width, gv)));
+           fT = KT.map((TT => null === TT ? yT : sy(TT.alpha, TT.width, TT.width, OT)));
```

#### 536. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7017` → after: `L7017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7017) · [Before (L7017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7017)

```diff
-           key: `cutout:${gv}:${dv.map((vv=>vv.join(","))).join("|")}`,
+           key: `cutout:${OT}:${fT.map((TT=>TT.join(","))).join("|")}`,
```

#### 537. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7062` → after: `L7062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7062) · [Before (L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7062)

```diff
-         return zv || (zv = this.loadTexture(vv).catch((zv => (this.warn(`Sun shadows: no mask for ${vv}: ${zv instanceof Error?zv.message:String(zv)}`), null))), this.textures.set(vv, zv)), zv
+         return kT || (kT = this.loadTexture(TT).catch((kT => (this.warn(`Sun shadows: no mask for ${TT}: ${kT instanceof Error?kT.message:String(kT)}`), null))), this.textures.set(TT, kT)), kT
```

#### 538. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7076` → after: `L7076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7076) · [Before (L7076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7076)

```diff
-     var Pd = Pv(37227);
+     var lf = cT(37577);
```

#### 539. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7079` → after: `L7079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7079) · [Before (L7079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7079)

```diff
-       return !vv.gs && !vv.ehv && !vv.qa
+       return !TT.Ot && !TT.QlT && !TT.Gv
```

#### 540. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7118` → after: `L7118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7118) · [Before (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7118)

```diff
-           vv && (vv.mzv || vv.Za !== this.slotVersion[pv]) && this.enqueue(pv)
+           TT && (TT.VkT || TT.Zv !== this.slotVersion[yT]) && this.enqueue(yT)
```

#### 541. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7148-L7149` → after: `L7148-L7149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7148-L7149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7148-L7149) · [Before (L7148-L7149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7148-L7149)

```diff
-               if (lv && !lv.mzv && lv.i === Pv && lv.j === pv && lv.k === dv) continue;
-               const Tv = null !== (ev = vv(Pv, pv, dv)) && void 0 !== ev ? ev : null;
+               if (IT && !IT.VkT && IT.i === cT && IT.j === yT && IT.k === fT) continue;
+               const AT = null !== (KT = TT(cT, yT, fT)) && void 0 !== KT ? KT : null;
```

#### 542. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7172` → after: `L7172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7172) · [Before (L7172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7172)

```diff
-           !zv || zv.mzv || hd(zv) ? (this.queued[vv] = 0, this.encodeSlot(vv), Pv++) : hv.push(vv)
+           !kT || kT.VkT || Mf(kT) ? (this.queued[TT] = 0, this.encodeSlot(TT), cT++) : lT.push(TT)
```

#### 543. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7197` → after: `L7197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7197) · [Before (L7197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7197)

```diff
-         const dv = null !== (zv = null === (Pv = this.slotPool[vv]) || void 0 === Pv ? void 0 : Pv.length) && void 0 !== zv ? zv : 0;
+         const fT = null !== (kT = null === (cT = this.slotPool[TT]) || void 0 === cT ? void 0 : cT.length) && void 0 !== kT ? kT : 0;
```

#### 544. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7201-L7202` → after: `L7201-L7202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7201-L7202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7201-L7202) · [Before (L7201-L7202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7201-L7202)

```diff
-         if (!Nv || Nv.mzv || !Nv.fW) return this.slotChunk[vv] = null, this.slotVersion[vv] = -1, lv.fill(0), this.writeRecord(vv, lv), void(dv > 0 && this.requeueStarved());
-         this.slotVersion[vv] = Nv.Za;
+         if (!xT || xT.VkT || !xT.rC) return this.slotChunk[TT] = null, this.slotVersion[TT] = -1, IT.fill(0), this.writeRecord(TT, IT), void(fT > 0 && this.requeueStarved());
+         this.slotVersion[TT] = xT.Zv;
```

#### 545. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7204` → after: `L7204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7204) · [Before (L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7204)

```diff
-         lv[0] = Nv.i, lv[1] = Nv.j, lv[2] = Nv.k, lv[3] = Tv, this.writeRecord(vv, lv), null === (hv = this.encoded) || void 0 === hv || hv.call(this, Nv), pv && (null !== (Sv = null === (ev = this.slotPool[vv]) || void 0 === ev ? void 0 : ev.length) && void 0 !== Sv ? Sv : 0) <  … [truncated]
+         IT[0] = xT.i, IT[1] = xT.j, IT[2] = xT.k, IT[3] = AT, this.writeRecord(TT, IT), null === (lT = this.encoded) || void 0 === lT || lT.call(this, xT), yT && (null !== (MT = null === (KT = this.slotPool[TT]) || void 0 === KT ? void 0 : KT.length) && void 0 !== MT ? MT : 0) <  … [truncated]
```

#### 546. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7207` → after: `L7207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7207) · [Before (L7207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7207)

```diff
-         if (vv.za) return tz;
+         if (TT.lv) return Vk;
```

#### 547. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7213` → after: `L7213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7213) · [Before (L7213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7213)

```diff
-           } = vv.fW,
+           } = TT.rC,
```

#### 548. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7228-L7229` → after: `L7228-L7229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7228-L7229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7228-L7229) · [Before (L7228-L7229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7228-L7229)

```diff
-             hv = vv.mw[cv],
-             gv = hv === Pd.g ? -1 : hv < Sv.length ? Sv[hv] : 0;
+             lT = TT.aj[QT],
+             OT = lT === lf.d ? -1 : lT < MT.length ? MT[lT] : 0;
```

#### 549. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7247` → after: `L7247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7247) · [Before (L7247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7247)

```diff
-         return 0 === sv ? tz : 32768 === Cv ? qz | iv << 8 : (this.writePoolEntries(zv, Pv, hv), this.writeVoxels(Az + zv * Lz, Wv), Iz | iv << 8)
+         return 0 === tT ? Vk : 32768 === hT ? Ek | NT << 8 : (this.writePoolEntries(kT, cT, lT), this.writeVoxels(dk + kT * Lk, CT), Zk | NT << 8)
```

#### 550. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7286` → after: `L7286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7286) · [Before (L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7286)

```diff
-           vv && !vv.mzv && vv.fW && (vv.Za === this.slotVersion[Sv] || hd(vv)) && this.encodeSlot(Sv, this.victimScratch, !1)
+           TT && !TT.VkT && TT.rC && (TT.Zv === this.slotVersion[MT] || Mf(TT)) && this.encodeSlot(MT, this.victimScratch, !1)
```

#### 551. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7295` → after: `L7295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7295) · [Before (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7295)

```diff
-     var gd = Pv(36964);
+     var yf = cT(37308);
```

#### 552. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7298` → after: `L7298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7298) · [Before (L7298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7298)

```diff
-         this.device = vv, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new sP, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.oT = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = vv.createBuffer( … [truncated]
+         this.device = TT, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new hc, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.pA = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = TT.createBuffer( … [truncated]
```

#### 553. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7313` → after: `L7313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7313) · [Before (L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7313)

```diff
-         hv.dw(vv, zv), Pv.forEachSunShadowCaster((vv => {
+         lT.Ij(TT, kT), cT.forEachSunShadowCaster((TT => {
```

#### 554. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7332` → after: `L7332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7332) · [Before (L7332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7332)

```diff
-           oT: hv,
+           pA: lT,
```

#### 555. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7339` → after: `L7339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7339) · [Before (L7339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7339)

```diff
-           for (let dv = 0; dv < gv; dv++) pv ? (iP(ev, 16 * dv, hv, Sv, this.oT), Pv.add(zv, this.oT)) : Pv.add(zv, ev, 16 * dv);
+           for (let fT = 0; fT < OT; fT++) yT ? (Qc(KT, 16 * fT, lT, MT, this.pA), cT.add(kT, this.pA)) : cT.add(kT, KT, 16 * fT);
```

#### 556. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7351` → after: `L7351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7351) · [Before (L7351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7351)

```diff
-         const pv = `${Pv?hv:-1-hv}:${Sv}:${null!==ev&&void 0!==ev?ev:""}`;
+         const yT = `${cT?lT:-1-lT}:${MT}:${null!==KT&&void 0!==KT?KT:""}`;
```

#### 557. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7412` → after: `L7412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7412) · [Before (L7412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7412)

```diff
-           }((0, gd.j)(ev, vv.vertexCount), zv ? vv.indexData : null, Pv, hv, Sv) : null;
+           }((0, yf.g)(KT, TT.vertexCount), kT ? TT.indexData : null, cT, lT, MT) : null;
```

#### 558. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7446` → after: `L7446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7446) · [Before (L7446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7446)

```diff
-         this.device = vv, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(mP.q), this.entities = void 0, this.entityStandIn =  … [truncated]
+         this.device = TT, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(ac.h), this.entities = void 0, this.entityStandIn =  … [truncated]
```

#### 559. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7459` → after: `L7459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7459) · [Before (L7459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7459)

```diff
-         const [Pv, hv, Sv] = mP.t;
+         const [cT, lT, MT] = ac.j;
```

#### 560. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7481` → after: `L7481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7481) · [Before (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7481)

```diff
-           size: mP.q,
+           size: ac.h,
```

#### 561. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7496-L7497` → after: `L7496-L7497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7496-L7497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7496-L7497) · [Before (L7496-L7497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7496-L7497)

```diff
-         const hv = null !== (vv = null === (zv = this.casters) || void 0 === zv ? void 0 : zv.planesLoading) && void 0 !== vv ? vv : 0;
-         return hv > 0 && Pv.push(`${hv} Lite sun shadow plane casters loading their textures`), Pv
+         const lT = null !== (TT = null === (kT = this.casters) || void 0 === kT ? void 0 : kT.planesLoading) && void 0 !== TT ? TT : 0;
+         return lT > 0 && cT.push(`${lT} Lite sun shadow plane casters loading their textures`), cT
```

#### 562. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7501` → after: `L7501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7501) · [Before (L7501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7501)

```diff
-         const Sv = Oz.p;
+         const MT = mk.x;
```

#### 563. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7508` → after: `L7508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7508) · [Before (L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7508)

```diff
-           binding: Sv.fW,
+           binding: MT.rC,
```

#### 564. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7526` → after: `L7526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/262.js#L7526) · [Before (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/262.js#L7526)

```diff
-             buffer: null !== (vv = null === (zv = this.entities) || void 0 === zv ? void 0 : zv.frameBuffer) && void 0 !== vv ? vv : this.entityStandIn
+             buffer: null !== (TT = null === (kT = this.entities) || void 0 === kT ? void 0 : kT.frameBuffer) && void 0 !== TT ? TT : this.entityStandIn
```
