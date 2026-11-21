# Changed — Bundle Modifications Report (Part 053 / 132)

- **Updated at**: `2026-11-21T10:00 JST`
- **Part**: `53 / 132` (**414** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 052](part-052.md) · [Part 054 →](part-054.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/262.js` (halsg.2bd74967 → x17cru.159bd7ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/262.js` (638 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e)

#### 151. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1720` → after: `L1720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L1720) · [Before (L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L1720)

```diff
-           for (const ub of Lb.stridedArrays) bb = bb.replace(new RegExp(`\\b${ub}\\s*\\[(.*?)\\]`, "g"), `${ub}[$1].el`);
+           for (const Jd of Zd.stridedArrays) dd = dd.replace(new RegExp(`\\b${Jd}\\s*\\[(.*?)\\]`, "g"), `${Jd}[$1].el`);
```

#### 152. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1724-L1725` → after: `L1724-L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1724-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L1724-L1725) · [Before (L1724-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L1724-L1725)

```diff
-         vertex: `${wb}\n${Xb}\n${pb}\n${Ab(hb.body)}`,
-         fragment: `diagnostic(off, derivative_uniformity);\n${wb}\n${ob}\n${YO((lb=Ab(Bb.body),lb.includes("fragmentInputs.position")?lb.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):lb))} … [truncated]
+         vertex: `${ld}\n${Ld}\n${Od}\n${Rd(kd.body)}`,
+         fragment: `diagnostic(off, derivative_uniformity);\n${ld}\n${ed}\n${oN((Id=Rd(pd.body),Id.includes("fragmentInputs.position")?Id.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):Id))} … [truncated]
```

#### 153. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1742-L1747` → after: `L1742-L1747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1742-L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L1742-L1747) · [Before (L1742-L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L1742-L1747)

```diff
-       oO = `${pB}\n${PB}\n${pO.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
-       AO = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${wO.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: Eart … [truncated]
-       lO = `\n${kb}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(ou).map((bb=>{let[ub,hb]=bb;return`const TONE_${ub}: f32 = ${hb};`})).join(" ")}\n\n// The  … [truncated]
-     var KO = hb(36720);
-     const WO = new KO.YX,
-       CO = new KO.YX,
+       GN = `${Rp}\n${cp}\n${IN.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
+       vN = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${ON.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: Eart … [truncated]
+       xN = `\n${zd}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(RJ).map((dd=>{let[Jd,kd]=dd;return`const TONE_${Jd}: f32 = ${kd};`})).join(" ")}\n\n// The  … [truncated]
+     var qN = kd(37245);
+     const BN = new qN.IL,
+       sN = new qN.IL,
```

#### 154. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1765` → after: `L1765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L1765) · [Before (L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L1765)

```diff
-         WO.set(ub.distance * Math.cos(hb) * Math.cos(bb), ub.distance * Math.sin(-bb), ub.distance * Math.sin(hb) * Math.cos(bb)), KO.Quaternion.FromUnitVectorsToRef(KO.YX.UpReadOnly, CO.set(ub.up[0], ub.up[1], ub.up[2]), dO), WO.rotateByQuaternionToRef(dO, WO)
+         BN.set(Jd.distance * Math.cos(kd) * Math.cos(dd), Jd.distance * Math.sin(-dd), Jd.distance * Math.sin(kd) * Math.cos(dd)), qN.Quaternion.FromUnitVectorsToRef(qN.IL.UpReadOnly, sN.set(Jd.up[0], Jd.up[1], Jd.up[2]), iN), BN.rotateByQuaternionToRef(iN, BN)
```

#### 155. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1779` → after: `L1779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L1779) · [Before (L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L1779)

```diff
-     var zO = hb(38342);
+     var bN = kd(38853);
```

#### 156. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1865` → after: `L1865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L1865) · [Before (L1865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L1865)

```diff
-         return `data:${ub>5?bb.slice(5,ub):""} URL of ${bb.length} characters`
+         return `data:${Jd>5?dd.slice(5,Jd):""} URL of ${dd.length} characters`
```

#### 157. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1867` → after: `L1867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L1867) · [Before (L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L1867)

```diff
-       return bb.length > 80 ? `${bb.slice(0,80)}...` : bb
+       return dd.length > 80 ? `${dd.slice(0,80)}...` : dd
```

#### 158. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1871` → after: `L1871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L1871) · [Before (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L1871)

```diff
-       if (!ub.ok) throw new Error(`${eO(bb)}: ${ub.status} ${ub.statusText}`);
+       if (!Jd.ok) throw new Error(`${UN(dd)}: ${Jd.status} ${Jd.statusText}`);
```

#### 159. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1895` → after: `L1895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L1895) · [Before (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L1895)

```diff
-       const Gb = null !== (Ob = MO.get(bb)) && void 0 !== Ob ? Ob : new Map;
+       const Wd = null !== (Nd = TN.get(dd)) && void 0 !== Nd ? Nd : new Map;
```

#### 160. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1906` → after: `L1906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L1906) · [Before (L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L1906)

```diff
-         }(hb, Bb)) && void 0 !== Ob ? Ob : await async function(bb) {
+         }(kd, pd)) && void 0 !== Nd ? Nd : await async function(dd) {
```

#### 161. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1921` → after: `L1921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L1921) · [Before (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L1921)

```diff
-           texture: tO(bb, Gb.pixels, Ub, Ub, Lb, `atlas-${ub}`),
+           texture: fN(dd, Wd.pixels, Pd, Pd, Zd, `atlas-${Jd}`),
```

#### 162. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1961-L1962` → after: `L1961-L1962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1961-L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L1961-L1962) · [Before (L1961-L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L1961-L1962)

```diff
-       for (const ub of (0, zO.i)(bb))
-         if (!PO.has((0, zO.g)(ub))) return !1;
+       for (const Jd of (0, bN.o)(dd))
+         if (!hN.has((0, bN.k)(Jd))) return !1;
```

#### 163. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1998` → after: `L1998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L1998) · [Before (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L1998)

```diff
-         Ub && Ub !== this.packGroup && (bb.setBindGroup(Du.d, Ub), this.packGroup = Ub);
+         Pd && Pd !== this.packGroup && (dd.setBindGroup(MJ.f, Pd), this.packGroup = Pd);
```

#### 164. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2009` → after: `L2009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2009) · [Before (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2009)

```diff
-         this.modelMeshes = bb, this.I9 = ub, this.maker = hb, this.warnOnce = Bb, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
+         this.modelMeshes = dd, this.I5 = Jd, this.maker = kd, this.warnOnce = pd, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
```

#### 165. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2016-L2017` → after: `L2016-L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2016-L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2016-L2017) · [Before (L2016-L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2016-L2017)

```diff
-         for (const ub of this.modelMeshes.groupIds())(ub < -1 || ub > 1) && this.warnOnce(`group:${ub}`, `rendering group ${ub} is not drawn`);
-         for (const ub of this.I9.groupIds())(ub < -1 || ub > 1) && this.warnOnce(`group:${ub}`, `rendering group ${ub} is not drawn`);
+         for (const Jd of this.modelMeshes.groupIds())(Jd < -1 || Jd > 1) && this.warnOnce(`group:${Jd}`, `rendering group ${Jd} is not drawn`);
+         for (const Jd of this.I5.groupIds())(Jd < -1 || Jd > 1) && this.warnOnce(`group:${Jd}`, `rendering group ${Jd} is not drawn`);
```

#### 166. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2022` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2022) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2022)

```diff
-           Ub = this.I9.group(ub),
+           Pd = this.I5.group(Jd),
```

#### 167. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2024` → after: `L2024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2024) · [Before (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2024)

```diff
-         this.collectList(bb, null === Gb || void 0 === Gb ? void 0 : Gb.opaque, Lb || null === Ub || void 0 === Ub ? void 0 : Ub.opaque, ub, !1, hb, Ob), Lb && (this.I9.drawn += this.maker.bundleDraws(bb, Lb, ub)), this.collectList(bb, null === Gb || void 0 === Gb ? void 0 : Gb.a … [truncated]
+         this.collectList(dd, null === Wd || void 0 === Wd ? void 0 : Wd.opaque, Zd || null === Pd || void 0 === Pd ? void 0 : Pd.opaque, Jd, !1, kd, Nd), Zd && (this.I5.drawn += this.maker.bundleDraws(dd, Zd, Jd)), this.collectList(dd, null === Wd || void 0 === Wd ? void 0 : Wd.a … [truncated]
```

#### 168. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2029` → after: `L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2029) · [Before (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2029)

```diff
-         ub && this.maker.pushDraws(bb, ub.units, ub.units.length, Bb, Ob, Gb, ub.rows), hb && (this.I9.drawn += this.maker.pushDraws(bb, hb, hb.length, Bb, Ob, Gb));
+         Jd && this.maker.pushDraws(dd, Jd.units, Jd.units.length, pd, Nd, Wd, Jd.rows), kd && (this.I5.drawn += this.maker.pushDraws(dd, kd, kd.length, pd, Nd, Wd));
```

#### 169. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2054` → after: `L2054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2054) · [Before (L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2054)

```diff
-       return bb.hasThinInstances ? "thin" : bb.UOb || bb._userInstancedBuffersStorage ? "instanced" : "none"
+       return dd.hasThinInstances ? "thin" : dd.eNd || dd._userInstancedBuffersStorage ? "instanced" : "none"
```

#### 170. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2058` → after: `L2058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2058) · [Before (L2058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2058)

```diff
-       return bb ? (hb._needUVs = !0, bb.optimizeUVAllocation && (0, xb.D)(bb.matrix) ? (hb[`${ub}DIRECTUV`] = bb.uvSet + 1, hb[`MAINUV${bb.uvSet+1}`] = !0) : hb[`${ub}DIRECTUV`] = 0, !0) : (hb[`${ub}DIRECTUV`] = 0, !1)
+       return dd ? (kd._needUVs = !0, dd.optimizeUVAllocation && (0, Fd.H)(dd.matrix) ? (kd[`${Jd}DIRECTUV`] = dd.uvSet + 1, kd[`MAINUV${dd.uvSet+1}`] = !0) : kd[`${Jd}DIRECTUV`] = 0, !0) : (kd[`${Jd}DIRECTUV`] = 0, !1)
```

#### 171. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2086` → after: `L2086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2086) · [Before (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2086)

```diff
-       return null !== ub && void 0 !== ub && ub.live ? ub : null
+       return null !== Jd && void 0 !== Jd && Jd.live ? Jd : null
```

#### 172. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2091` → after: `L2091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2091) · [Before (L2091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2091)

```diff
-       return null !== (ub = OG(bb)) && void 0 !== ub ? ub : RO
+       return null !== (Jd = ZW(dd)) && void 0 !== Jd ? Jd : kW
```

#### 173. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2103` → after: `L2103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2103) · [Before (L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2103)

```diff
-           if (!bb) return this.warnOnce("model", `${hb.name} on ${Gb.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
+           if (!dd) return this.warnOnce("model", `${kd.name} on ${Wd.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
```

#### 174. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2126` → after: `L2126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2126) · [Before (L2126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2126)

```diff
-           for (const [hb, Bb] of bb) ub += !0 === Bb ? `${hb};` : `${hb}=${Bb};`;
+           for (const [kd, pd] of dd) Jd += !0 === pd ? `${kd};` : `${kd}=${pd};`;
```

#### 175. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2139` → after: `L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2139) · [Before (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2139)

```diff
-         return 0 === this.modelPackVariant ? null : null !== (ub = (0, nb.v)(bb, jb.i.name)) && void 0 !== ub && ub.active ? "placed" : bb.item ? "item" : bb.lifeform ? "lifeform" : bb.box ? "box" : null
+         return 0 === this.modelPackVariant ? null : null !== (Jd = (0, ad.v)(dd, sd.f.name)) && void 0 !== Jd && Jd.active ? "placed" : dd.item ? "item" : dd.lifeform ? "lifeform" : dd.box ? "box" : null
```

#### 176. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2143` → after: `L2143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2143) · [Before (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2143)

```diff
-         return "thin" === ub ? null !== (Ob = this.resources.y5.get(bb)) && void 0 !== Ob ? Ob : null : "instanced" === ub && null !== (hb = null === (Bb = bb._userInstancedBuffersStorage) || void 0 === Bb ? void 0 : Bb.interleavedKinds) && void 0 !== hb ? hb : null
+         return "thin" === Jd ? null !== (Nd = this.resources.S_.get(dd)) && void 0 !== Nd ? Nd : null : "instanced" === Jd && null !== (kd = null === (pd = dd._userInstancedBuffersStorage) || void 0 === pd ? void 0 : pd.interleavedKinds) && void 0 !== kd ? kd : null
```

#### 177. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2153` → after: `L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2153) · [Before (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2153)

```diff
-           for (; Bb < this.view.lightCount && (bb[`LIGHT${Bb}`] = !0, bb[`LITE_LIGHT${Bb}_SLOT`] = Bb, Bb++, bb._needNormals = !0, Bb !== ub););
+           for (; pd < this.view.lightCount && (dd[`LIGHT${pd}`] = !0, dd[`LITE_LIGHT${pd}_SLOT`] = pd, pd++, dd._needNormals = !0, pd !== Jd););
```

#### 178. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2155` → after: `L2155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2155) · [Before (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2155)

```diff
-         for (let Ob = Bb; Ob < 4; Ob++) bb[`LIGHT${Ob}`] = !1, bb[`LITE_LIGHT${Ob}_SLOT`] = void 0
+         for (let Nd = pd; Nd < 4; Nd++) dd[`LIGHT${Nd}`] = !1, dd[`LITE_LIGHT${Nd}_SLOT`] = void 0
```

#### 179. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2165` → after: `L2165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2165) · [Before (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2165)

```diff
-         Yb ? (Bb._needUVs = !0, Bb.DIFFUSE = !0, Yb.optimizeUVAllocation && (0, xb.D)(Yb.matrix) ? (Bb.DIFFUSEDIRECTUV = Yb.uvSet + 1, Bb[`MAINUV${Yb.uvSet+1}`] = !0) : Bb.DIFFUSEDIRECTUV = 0, Yb.uvSet > 1 && this.warnOnce(`uvset:${hb.name}`, `${hb.name} samples UV set ${Yb.uvSet … [truncated]
+         gd ? (pd._needUVs = !0, pd.DIFFUSE = !0, gd.optimizeUVAllocation && (0, Fd.H)(gd.matrix) ? (pd.DIFFUSEDIRECTUV = gd.uvSet + 1, pd[`MAINUV${gd.uvSet+1}`] = !0) : pd.DIFFUSEDIRECTUV = 0, gd.uvSet > 1 && this.warnOnce(`uvset:${kd.name}`, `${kd.name} samples UV set ${gd.uvSet … [truncated]
```

#### 180. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2168` → after: `L2168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2168) · [Before (L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2168)

```diff
-         Bb.OPACITY = uG(Sb, "OPACITY", Bb), Bb.OPACITYRGB = null !== Sb && Sb.getAlphaFromRGB, Bb.EMISSIVE = uG(ab, "EMISSIVE", Bb), (Sb && Sb.uvSet > 1 || ab && ab.uvSet > 1) && this.warnOnce(`uvset:${hb.name}`, `${hb.name} samples a UV set past 2, which is not supported`);
+         pd.OPACITY = NW(Cd, "OPACITY", pd), pd.OPACITYRGB = null !== Cd && Cd.getAlphaFromRGB, pd.EMISSIVE = NW(Kd, "EMISSIVE", pd), (Cd && Cd.uvSet > 1 || Kd && Kd.uvSet > 1) && this.warnOnce(`uvset:${kd.name}`, `${kd.name} samples a UV set past 2, which is not supported`);
```

#### 181. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2175` → after: `L2175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2175) · [Before (L2175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2175)

```diff
-         Bb.REFLECTION = wb, Bb.REFLECTIONMAP_3D = wb, Bb.REFLECTIONMAP_SKYBOX = wb, Bb.REFLECTIONMAP_OPPOSITEZ = wb && (bb.useRightHandedSystem ? !Hb.invertZ : Hb.invertZ), Bb.ROUGHNESS = wb && hb.roughness > 0, Bb.REFLECTIONOVERALPHA = wb && hb.useReflectionOverAlpha, Bb.LITE_RE … [truncated]
+         pd.REFLECTION = ld, pd.REFLECTIONMAP_3D = ld, pd.REFLECTIONMAP_SKYBOX = ld, pd.REFLECTIONMAP_OPPOSITEZ = ld && (dd.useRightHandedSystem ? !od.invertZ : od.invertZ), pd.ROUGHNESS = ld && kd.roughness > 0, pd.REFLECTIONOVERALPHA = ld && kd.useReflectionOverAlpha, pd.LITE_RE … [truncated]
```

#### 182. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2180` → after: `L2180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2180) · [Before (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2180)

```diff
-         Bb.ALPHATEST = (0, nb.Q)(hb, Zb, Xb), Bb.ALPHAFROMDIFFUSE = (0, nb.eb)(hb), Bb.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== hb.transparencyMode, Bb.ALPHABLEND = null === hb.transparencyMode || (0, nb.P)(hb, Zb, Xb), Bb.PREMULTIPLYALPHA = 7 === hb.alphaMode || 8 === hb.a … [truncated]
+         pd.ALPHATEST = (0, ad.S)(kd, Qd, Ld), pd.ALPHAFROMDIFFUSE = (0, ad.fb)(kd), pd.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== kd.transparencyMode, pd.ALPHABLEND = null === kd.transparencyMode || (0, ad.P)(kd, Qd, Ld), pd.PREMULTIPLYALPHA = 7 === kd.alphaMode || 8 === kd.a … [truncated]
```

#### 183. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2202` → after: `L2202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2202) · [Before (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2202)

```diff
-         const Wb = bb.UX();
+         const vd = dd.eL();
```

#### 184. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2237` → after: `L2237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2237) · [Before (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2237)

```diff
-           for (const ub of null !== (Hb = null === bb || void 0 === bb ? void 0 : bb.ubo) && void 0 !== Hb ? Hb : []) {
+           for (const Jd of null !== (od = null === dd || void 0 === dd ? void 0 : dd.ubo) && void 0 !== od ? od : []) {
```

#### 185. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2247` → after: `L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2247) · [Before (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2247)

```diff
-       }(bb, ub), `${hb}#${bb.codeKey}`
+       }(dd, Jd), `${kd}#${dd.codeKey}`
```

#### 186. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2271` → after: `L2271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2271) · [Before (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2271)

```diff
-           Ub = null !== (Ob = bb.sideOrientation) && void 0 !== Ob ? Ob : ub.sideOrientation;
+           Pd = null !== (Nd = dd.sideOrientation) && void 0 !== Nd ? Nd : Jd.sideOrientation;
```

#### 187. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2282` → after: `L2282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2282) · [Before (L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2282)

```diff
-         return Bb && Bb.alphaMode === Yb && Bb.depthWrite === Sb && Bb.depthFunction === wb && Bb.cullMode === ab && Bb.frontFace === Hb && Bb.zOffset === Zb && Bb.zOffsetUnits === Xb && Bb.colourWrite === pb && Bb.topology === Gb ? Bb : this.stateFor(Yb, Sb, wb, ab, Hb, Zb, Xb,  … [truncated]
+         return pd && pd.alphaMode === gd && pd.depthWrite === Cd && pd.depthFunction === ld && pd.cullMode === Kd && pd.frontFace === od && pd.zOffset === Qd && pd.zOffsetUnits === Ld && pd.colourWrite === Od && pd.topology === Wd ? pd : this.stateFor(gd, Cd, ld, Kd, od, Qd, Ld,  … [truncated]
```

#### 188. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2285` → after: `L2285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2285) · [Before (L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2285)

```diff
-         const Sb = `${bb}|${ub}|${hb}|${Bb}|${Ob}|${Gb}|${Ub}|${Lb}|${Yb}`;
+         const Cd = `${dd}|${Jd}|${kd}|${pd}|${Nd}|${Wd}|${Pd}|${Zd}|${gd}`;
```

#### 189. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2290` → after: `L2290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2290) · [Before (L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2290)

```diff
-           bb && !wb && this.warnOnce(`alpha:${bb}`, `alpha mode ${bb} is not supported`), ab = {
+           dd && !ld && this.warnOnce(`alpha:${dd}`, `alpha mode ${dd} is not supported`), Kd = {
```

#### 190. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2299` → after: `L2299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2299) · [Before (L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2299)

```diff
-             depthCompare: hb && null !== (Hb = SG.get(hb)) && void 0 !== Hb ? Hb : null,
+             depthCompare: kd && null !== (od = lW.get(kd)) && void 0 !== od ? od : null,
```

#### 191. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2310` → after: `L2310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2310) · [Before (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2310)

```diff
-     var HG = hb(37069);
+     var LW = kd(37627);
```

#### 192. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2405` → after: `L2405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2405) · [Before (L2405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2405)

```diff
-         Bb = HG.i,
+         pd = LW.h,
```

#### 193. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2411` → after: `L2411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2411) · [Before (L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2411)

```diff
-         ub[bb] = Ob[Gb + Bb.vector], ub[bb + 1] = Ob[Gb + Bb.vector + 1], ub[bb + 2] = Ob[Gb + Bb.vector + 2], ub[bb + 3] = Ob[Gb + Bb.kind] === HG.f.directional ? 1 : 0, ub[bb + 4] = Ob[Gb + Bb.diffuse], ub[bb + 5] = Ob[Gb + Bb.diffuse + 1], ub[bb + 6] = Ob[Gb + Bb.diffuse + 2], … [truncated]
+         Jd[dd] = Nd[Wd + pd.vector], Jd[dd + 1] = Nd[Wd + pd.vector + 1], Jd[dd + 2] = Nd[Wd + pd.vector + 2], Jd[dd + 3] = Nd[Wd + pd.kind] === LW.g.directional ? 1 : 0, Jd[dd + 4] = Nd[Wd + pd.diffuse], Jd[dd + 5] = Nd[Wd + pd.diffuse + 1], Jd[dd + 6] = Nd[Wd + pd.diffuse + 2], … [truncated]
```

#### 194. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2439` → after: `L2439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2439) · [Before (L2439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2439)

```diff
-         const Hb = bb.UX();
+         const od = dd.eL();
```

#### 195. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2460` → after: `L2460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2460) · [Before (L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2460)

```diff
-         Ob = bb => 4 === hb ? `${bb}x4` : 2 === hb ? `${bb}x2` : null;
+         Nd = dd => 4 === kd ? `${dd}x4` : 2 === kd ? `${dd}x2` : null;
```

#### 196. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2462` → after: `L2462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2462) · [Before (L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2462)

```diff
-         if (5126 === bb.type) return 1 === hb ? "float32" : hb >= 2 && hb <= 4 ? `float32x${hb}` : null;
+         if (5126 === dd.type) return 1 === kd ? "float32" : kd >= 2 && kd <= 4 ? `float32x${kd}` : null;
```

#### 197. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2480` → after: `L2480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2480) · [Before (L2480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2480)

```diff
-           return 1 === hb ? `${Gb}32` : hb <= 4 ? `${Gb}32x${hb}` : null;
+           return 1 === kd ? `${Wd}32` : kd <= 4 ? `${Wd}32x${kd}` : null;
```

#### 198. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2483` → after: `L2483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2483) · [Before (L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2483)

```diff
-           return Ob(`${Gb}8`);
+           return Nd(`${Wd}8`);
```

#### 199. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2486` → after: `L2486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2486) · [Before (L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2486)

```diff
-           return Ob(`${Gb}16`)
+           return Nd(`${Wd}16`)
```

#### 200. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2494` → after: `L2494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2494) · [Before (L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2494)

```diff
-       return hb ? Number(hb[1]) / 8 * Number(null !== (ub = hb[2]) && void 0 !== ub ? ub : 1) : 4
+       return kd ? Number(kd[1]) / 8 * Number(null !== (Jd = kd[2]) && void 0 !== Jd ? Jd : 1) : 4
```

#### 201. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2532` → after: `L2532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2532) · [Before (L2532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2532)

```diff
-           if (!Sb) return this.warnOnce(`format:${ub}:${hb.name}`, `${ub}'s ${hb.name} (type ${Lb.type}, size ${Lb.getSize()}) has no WebGPU vertex format`), null;
+           if (!Cd) return this.warnOnce(`format:${Jd}:${kd.name}`, `${Jd}'s ${kd.name} (type ${Zd.type}, size ${Zd.getSize()}) has no WebGPU vertex format`), null;
```

#### 202. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2553` → after: `L2553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2553) · [Before (L2553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2553)

```diff
-         if (Ob.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${ub}`, `${ub} needs ${Ob.length} vertex buffers`), null;
+         if (Nd.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${Jd}`, `${Jd} needs ${Nd.length} vertex buffers`), null;
```

#### 203. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2556-L2557` → after: `L2556-L2557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2556-L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2556-L2557) · [Before (L2556-L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2556-L2557)

```diff
-           Lb += `${ab.stride}${"instance"===ab.step?"i":"v"}`;
-           for (const bb of ab.attributes) Lb += `,${bb.shaderLocation}:${bb.offset}:${bb.format}`;
+           Zd += `${Kd.stride}${"instance"===Kd.step?"i":"v"}`;
+           for (const dd of Kd.attributes) Zd += `,${dd.shaderLocation}:${dd.offset}:${dd.format}`;
```

#### 204. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2581` → after: `L2581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2581) · [Before (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2581)

```diff
-           o4: Sb,
+           Y5: Cd,
```

#### 205. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2661` → after: `L2661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2661) · [Before (L2661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2661)

```diff
-       return bb.gpu[xb.e.lite] ??= bb.materials.map(((ub, hb) => ({
+       return dd.gpu[Fd.g.lite] ??= dd.materials.map(((Jd, kd) => ({
```

#### 206. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2670` → after: `L2670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2670) · [Before (L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2670)

```diff
-       return null !== (ub = null !== (hb = null === (Bb = bb.parts.materials[bb.range]) || void 0 === Bb ? void 0 : Bb.mirror) && void 0 !== hb ? hb : bb.owner.material) && void 0 !== ub ? ub : null
+       return null !== (Jd = null !== (kd = null === (pd = dd.parts.materials[dd.range]) || void 0 === pd ? void 0 : pd.mirror) && void 0 !== kd ? kd : dd.owner.material) && void 0 !== Jd ? Jd : null
```

#### 207. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2675` → after: `L2675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2675) · [Before (L2675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2675)

```diff
-         this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, Su.d)("Lite: ")
+         this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, KJ.c)("Lite: ")
```

#### 208. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2681` → after: `L2681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2681) · [Before (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2681)

```diff
-         return this.model.nodes.eH
+         return this.model.nodes.Vo
```

#### 209. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2706` → after: `L2706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2706) · [Before (L2706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2706)

```diff
-         this.rows.length < hb.nodes.LH && (this.rows = new Int32Array(hb.nodes.LH));
+         this.rows.length < kd.nodes.oo && (this.rows = new Int32Array(kd.nodes.oo));
```

#### 210. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2712` → after: `L2712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2712) · [Before (L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2712)

```diff
-           hb && !hb.isBlocked && hb.isEnabled() && !hb.pa.hasAZeroComponent && Gb.selects(bb, ub.frustum) && (this.activate(hb, bb), this.selectedCount++)
+           kd && !kd.isBlocked && kd.isEnabled() && !kd.fp.hasAZeroComponent && Wd.selects(dd, Jd.frustum) && (this.activate(kd, dd), this.selectedCount++)
```

#### 211. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2733` → after: `L2733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2733) · [Before (L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2733)

```diff
-         if (!bb.pN) {
+         if (!dd.Km) {
```

#### 212. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2735` → after: `L2735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2735) · [Before (L2735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2735)

```diff
-           if (hb.UOb) {
+           if (kd.eNd) {
```

#### 213. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2742-L2743` → after: `L2742-L2743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2742-L2743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2742-L2743) · [Before (L2742-L2743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2742-L2743)

```diff
-           Bb = hb.LOb;
-         if (Bb._getWorldMatrixDeterminant() >= 0 !== hb._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${Bb.name}`, `A mirrored InstancedMesh of ${Bb.name} is not drawn yet`);
+           pd = kd.RNd;
+         if (pd._getWorldMatrixDeterminant() >= 0 !== kd._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${pd.name}`, `A mirrored InstancedMesh of ${pd.name} is not drawn yet`);
```

#### 214. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2797` → after: `L2797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2797) · [Before (L2797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2797)

```diff
-         this.MS = new Map, this.enabled = [], this.groups = new Map, this.HZ = [], this.warned = new Set, this.selected = 0, this.drawn = 0
+         this.EC = new Map, this.enabled = [], this.groups = new Map, this.qQ = [], this.warned = new Set, this.selected = 0, this.drawn = 0
```

#### 215. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2800` → after: `L2800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2800) · [Before (L2800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2800)

```diff
-         if (this.MS.has(bb)) return;
+         if (this.EC.has(dd)) return;
```

#### 216. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2804` → after: `L2804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2804) · [Before (L2804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2804)

```diff
-             this.Zx(ub, bb)
+             this.XM(Jd, dd)
```

#### 217. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2809` → after: `L2809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2809) · [Before (L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2809)

```diff
-         this.MS.set(bb, ub), this.Zx(ub, bb.isEnabled())
+         this.EC.set(dd, Jd), this.XM(Jd, dd.isEnabled())
```

#### 218. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2812-L2813` → after: `L2812-L2813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2812-L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2812-L2813) · [Before (L2812-L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2812-L2813)

```diff
-         const ub = this.MS.get(bb);
-         ub && (ub.observer.remove(!0), this.Zx(ub, !1), this.MS.delete(bb))
+         const Jd = this.EC.get(dd);
+         Jd && (Jd.observer.remove(!0), this.XM(Jd, !1), this.EC.delete(dd))
```

#### 219. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2816` → after: `L2816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2816) · [Before (L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2816)

```diff
-         return this.MS.get(bb)
+         return this.EC.get(dd)
```

#### 220. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2822` → after: `L2822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2822) · [Before (L2822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2822)

```diff
-           MS: this.MS.size
+           EC: this.EC.size
```

#### 221. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2830` → after: `L2830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2830) · [Before (L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2830)

```diff
-         for (const ub of this.HZ) bb(ub.mesh, "opaque", 0)
+         for (const Jd of this.qQ) dd(Jd.mesh, "opaque", 0)
```

#### 222. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2839` → after: `L2839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2839) · [Before (L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2839)

```diff
-         this.drawn = 0, this.selected = 0, this.HZ.length = 0;
+         this.drawn = 0, this.selected = 0, this.qQ.length = 0;
```

#### 223. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2846` → after: `L2846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2846) · [Before (L2846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2846)

```diff
-             this.selected++, this.HZ.push(Ob);
+             this.selected++, this.qQ.push(Nd);
```

#### 224. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2850` → after: `L2850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2850) · [Before (L2850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2850)

```diff
-           if (Gb.isBlocked || Gb.pa.hasAZeroComponent) continue;
+           if (Wd.isBlocked || Wd.fp.hasAZeroComponent) continue;
```

#### 225. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2852-L2853` → after: `L2852-L2853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2852-L2853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2852-L2853) · [Before (L2852-L2853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2852-L2853)

```diff
-           if (Gb.UOb) {
-             this.warned.has(Gb.name) || (this.warned.add(Gb.name), console.warn(`Lite: thin instance base ${Gb.name} has InstancedMeshes and is not drawn`));
+           if (Wd.eNd) {
+             this.warned.has(Wd.name) || (this.warned.add(Wd.name), console.warn(`Lite: thin instance base ${Wd.name} has InstancedMeshes and is not drawn`));
```

#### 226. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2886` → after: `L2886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2886) · [Before (L2886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2886)

```diff
-     var zG = hb(39189);
+     var bW = kd(39691);
```

#### 227. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2889` → after: `L2889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2889) · [Before (L2889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2889)

```diff
-         this.bundle = null, this.stale = !0, this.MS = new Set
+         this.bundle = null, this.stale = !0, this.EC = new Set
```

#### 228. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2894` → after: `L2894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2894) · [Before (L2894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2894)

```diff
-         this.device = bb, this.slots = ub, this.host = hb, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = n … [truncated]
+         this.device = dd, this.slots = Jd, this.host = kd, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = n … [truncated]
```

#### 229. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2896` → after: `L2896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2896) · [Before (L2896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2896)

```diff
-           let Bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (ub = null === (hb = globalThis.navigator) || void 0 === hb ? void 0 : hb.userAgent) && void 0 !== ub ? ub : "";
+           let pd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (Jd = null === (kd = globalThis.navigator) || void 0 === kd ? void 0 : kd.userAgent) && void 0 !== Jd ? Jd : "";
```

#### 230. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2899` → after: `L2899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2899) · [Before (L2899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2899)

```diff
-         }(bb), (0, zG.E)(this.direct)
+         }(dd), (0, bW.M)(this.direct)
```

#### 231. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2902` → after: `L2902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2902) · [Before (L2902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2902)

```diff
-         this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, zG.E)(this.directThisFrame)
+         this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, bW.M)(this.directThisFrame)
```

#### 232. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2909` → after: `L2909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2909) · [Before (L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2909)

```diff
-         return bb.iJ ? this.iJ : this.main
+         return dd.qY ? this.qY : this.main
```

#### 233. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2915` → after: `L2915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2915) · [Before (L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2915)

```diff
-         bb.seen = this.frame, bb.iJ && null === bb.draw && (this.iJ.stale = !0), bb.draw = ub, this.drawn++, hb && this.slots.write(bb.slot, hb, Bb) && (this.slotsFrom = Math.min(this.slotsFrom, bb.slot), this.slotsTo = Math.max(this.slotsTo, bb.slot));
+         dd.seen = this.frame, dd.qY && null === dd.draw && (this.qY.stale = !0), dd.draw = Jd, this.drawn++, kd && this.slots.write(dd.slot, kd, pd) && (this.slotsFrom = Math.min(this.slotsFrom, dd.slot), this.slotsTo = Math.max(this.slotsTo, dd.slot));
```

#### 234. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2918` → after: `L2918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2918) · [Before (L2918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2918)

```diff
-         Ob[Gb] === ub.count && Ob[Gb + 1] === ub.instances && Ob[Gb + 2] === ub.first || (Ob[Gb] = ub.count, Ob[Gb + 1] = ub.instances, Ob[Gb + 2] = ub.first, this.argsDirty = !0, this.iJ.stale ||= bb.iJ)
+         Nd[Wd] === Jd.count && Nd[Wd + 1] === Jd.instances && Nd[Wd + 2] === Jd.first || (Nd[Wd] = Jd.count, Nd[Wd + 1] = Jd.instances, Nd[Wd + 2] = Jd.first, this.argsDirty = !0, this.qY.stale ||= dd.qY)
```

#### 235. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2921` → after: `L2921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2921) · [Before (L2921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2921)

```diff
-         for (const bb of this.records.values()) bb.seen !== this.frame && (bb.draw && (bb.draw = null, this.args[5 * bb.slot + 1] = 0, this.argsDirty = !0, this.iJ.stale ||= bb.iJ), this.frame - bb.seen > 120 && (this.records.delete(bb.unit), this.freeSlots.push(bb.slot), bb.reco … [truncated]
+         for (const dd of this.records.values()) dd.seen !== this.frame && (dd.draw && (dd.draw = null, this.args[5 * dd.slot + 1] = 0, this.argsDirty = !0, this.qY.stale ||= dd.qY), this.frame - dd.seen > 120 && (this.records.delete(dd.unit), this.freeSlots.push(dd.slot), dd.reco … [truncated]
```

#### 236. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2925` → after: `L2925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2925) · [Before (L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2925)

```diff
-         for (const ub of this.records.values()) ub.draw && ub.seen === this.frame && !ub.iJ && bb(ub.draw, this.slots.data, ub.slot * IB / 4)
+         for (const Jd of this.records.values()) Jd.draw && Jd.seen === this.frame && !Jd.qY && dd(Jd.draw, this.slots.data, Jd.slot * Ep / 4)
```

#### 237. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2928` → after: `L2928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2928) · [Before (L2928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2928)

```diff
-         this.main.stale ||= this.main.MS.has(bb), this.iJ.stale ||= this.iJ.MS.has(bb)
+         this.main.stale ||= this.main.EC.has(dd), this.qY.stale ||= this.qY.EC.has(dd)
```

#### 238. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2934-L2935` → after: `L2934-L2935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2934-L2935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2934-L2935) · [Before (L2934-L2935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2934-L2935)

```diff
-         if (!Bb) return this.main.bundle = null, this.iJ.bundle = null, this.recordedSceneGroup = null, this.encode(bb, ub, hb, "direct"), this.drawn;
-         this.recordedTarget === hb && this.recordedSceneGroup === Bb || (this.recordedTarget = hb, this.recordedSceneGroup = Bb, this.main.stale = !0, this.iJ.stale = !0);
+         if (!pd) return this.main.bundle = null, this.qY.bundle = null, this.recordedSceneGroup = null, this.encode(dd, Jd, kd, "direct"), this.drawn;
+         this.recordedTarget === kd && this.recordedSceneGroup === pd || (this.recordedTarget = kd, this.recordedSceneGroup = pd, this.main.stale = !0, this.qY.stale = !0);
```

#### 239. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2937` → after: `L2937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2937) · [Before (L2937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2937)

```diff
-           Gb = this.iJ;
+           Wd = this.qY;
```

#### 240. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2940-L2941` → after: `L2940-L2941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2940-L2941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2940-L2941) · [Before (L2940-L2941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2940-L2941)

```diff
-         const Lb = (0, zG.i)();
-         return (Gb.stale || this.rangedEpoch !== Lb) && (this.rangedEpoch = Lb, Gb.bundle = this.drawsRanged() ? this.record(ub, hb, Bb, "iJ") : this.noRangedBundle(), Ub = !0), Ub && (this.bundles = Gb.bundle ? [Ob.bundle, Gb.bundle] : [Ob.bundle]), bb.executeBundles(this.bundle … [truncated]
+         const Zd = (0, bW.m)();
+         return (Wd.stale || this.rangedEpoch !== Zd) && (this.rangedEpoch = Zd, Wd.bundle = this.drawsRanged() ? this.record(Jd, kd, pd, "qY") : this.noRangedBundle(), Pd = !0), Pd && (this.bundles = Wd.bundle ? [Nd.bundle, Wd.bundle] : [Nd.bundle]), dd.executeBundles(this.bundle … [truncated]
```

#### 241. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2945` → after: `L2945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2945) · [Before (L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2945)

```diff
-           label: "iJ" === Bb ? "thin-bases-ranged" : "thin-bases",
+           label: "qY" === pd ? "thin-bases-ranged" : "thin-bases",
```

#### 242. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2953-L2954` → after: `L2953-L2954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2953-L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2953-L2954) · [Before (L2953-L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2953-L2954)

```diff
-         for (const bb of this.records.values()) bb.iJ && (bb.recorded = !1);
-         return this.iJ.MS.clear(), this.iJ.stale = !1, null
+         for (const dd of this.records.values()) dd.qY && (dd.recorded = !1);
+         return this.qY.EC.clear(), this.qY.stale = !1, null
```

#### 243. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2958` → after: `L2958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2958) · [Before (L2958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2958)

```diff
-           if (bb.iJ && bb.draw) return !0;
+           if (dd.qY && dd.draw) return !0;
```

#### 244. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2963` → after: `L2963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2963) · [Before (L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2963)

```diff
-         for (const Yb of this.records.values()) "direct" !== Bb && Yb.iJ !== ("iJ" === Bb) || (Yb.recorded = !1, Yb.draw && Ob.push(Yb));
+         for (const gd of this.records.values()) "direct" !== pd && gd.qY !== ("qY" === pd) || (gd.recorded = !1, gd.draw && Nd.push(gd));
```

#### 245. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2965-L2966` → after: `L2965-L2966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2965-L2966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2965-L2966) · [Before (L2965-L2966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2965-L2966)

```diff
-         const Gb = "direct" === Bb ? null : "iJ" === Bb ? this.iJ : this.main;
-         null === Gb || void 0 === Gb || Gb.MS.clear(), this.binder.reset();
+         const Wd = "direct" === pd ? null : "qY" === pd ? this.qY : this.main;
+         null === Wd || void 0 === Wd || Wd.EC.clear(), this.binder.reset();
```

#### 246. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2973` → after: `L2973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2973) · [Before (L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2973)

```diff
-             this.host.pipelineCompiling(Ob, hb) ? Ub = !0 : Gb && this.keep(Yb, Ob, Gb.MS);
+             this.host.pipelineCompiling(Nd, kd) ? Pd = !0 : Wd && this.keep(gd, Nd, Wd.EC);
```

#### 247. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2977` → after: `L2977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2977) · [Before (L2977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2977)

```diff
-           if (Yb.iJ && "indirect" !== Bb) {
+           if (gd.qY && "indirect" !== pd) {
```

#### 248. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2979` → after: `L2979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2979) · [Before (L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2979)

```diff
-             ab = "direct" === Bb && (0, zG.u)(bb) || (0, zG.m)(bb) || void 0
+             Kd = "direct" === pd && (0, bW.x)(dd) || (0, bW.p)(dd) || void 0
```

#### 249. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2981` → after: `L2981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L2981) · [Before (L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L2981)

```diff
-           if (Gb && this.keep(Yb, Ob, Gb.MS), 0 === (null === (Lb = ab) || void 0 === Lb ? void 0 : Lb.count)) continue;
+           if (Wd && this.keep(gd, Nd, Wd.EC), 0 === (null === (Zd = Kd) || void 0 === Zd ? void 0 : Zd.count)) continue;
```

#### 250. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3004` → after: `L3004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3004) · [Before (L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3004)

```diff
-           iJ: void 0 !== (0, zG.m)(bb.owner),
+           qY: void 0 !== (0, bW.p)(dd.owner),
```

#### 251. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3017` → after: `L3017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3017) · [Before (L3017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3017)

```diff
-         if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.iJ.stale = !0), 5 * this.slotCount > this.args.length) {
+         if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.qY.stale = !0), 5 * this.slotCount > this.args.length) {
```

#### 252. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3060` → after: `L3060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3060) · [Before (L3060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3060)

```diff
-       const Bb = `${ub.depth?"-depth":""}${ub.sunShadow?"-shadow":""}${ub.shadowMask?"-mask":""}`;
+       const pd = `${Jd.depth?"-depth":""}${Jd.sunShadow?"-shadow":""}${Jd.shadowMask?"-mask":""}`;
```

#### 253. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3068` → after: `L3068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3068) · [Before (L3068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3068)

```diff
-             minBindingSize: Du.e
+             minBindingSize: MJ.j
```

#### 254. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3071` → after: `L3071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3071) · [Before (L3071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3071)

```diff
-           binding: Du.v,
+           binding: MJ.x,
```

#### 255. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3078` → after: `L3078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3078) · [Before (L3078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3078)

```diff
-           binding: Du.m,
+           binding: MJ.s,
```

#### 256. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3085` → after: `L3085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3085) · [Before (L3085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3085)

```diff
-             ub = Du.p;
+             Jd = MJ.t;
```

#### 257. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3093` → after: `L3093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3093) · [Before (L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3093)

```diff
-             binding: ub.Sw,
+             binding: Jd.ql,
```

#### 258. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3131` → after: `L3131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3131) · [Before (L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3131)

```diff
-           binding: Du.t,
+           binding: MJ.w,
```

#### 259. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3137` → after: `L3137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3137) · [Before (L3137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3137)

```diff
-           label: `${ub.depth?"terrain-":""}shader-pack-inputs${Bb}`,
+           label: `${Jd.depth?"terrain-":""}shader-pack-inputs${pd}`,
```

#### 260. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3150` → after: `L3150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3150) · [Before (L3150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3150)

```diff
-       const hb = (0, xu.g)(bb);
+       const kd = (0, FJ.f)(dd);
```

#### 261. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3167` → after: `L3167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3167) · [Before (L3167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3167)

```diff
-         this.device = bb, this.sunShadow = hb, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(Du.e), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = bb.createBuffer({
+         this.device = dd, this.sunShadow = kd, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(MJ.j), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = dd.createBuffer({
```

#### 262. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3169` → after: `L3169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3169) · [Before (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3169)

```diff
-           size: Du.e,
+           size: MJ.j,
```

#### 263. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3172` → after: `L3172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3172) · [Before (L3172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3172)

```diff
-         const Bb = (0, Du.z)(ub);
+         const pd = (0, MJ.A)(Jd);
```

#### 264. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3190` → after: `L3190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3190) · [Before (L3190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3190)

```diff
-           binding: Du.v,
+           binding: MJ.x,
```

#### 265. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3197` → after: `L3197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3197) · [Before (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3197)

```diff
-         (0, Du.E)(this.data, {
+         (0, MJ.H)(this.data, {
```

#### 266. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3201` → after: `L3201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3201) · [Before (L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3201)

```diff
-           Q_: bb.Q_(),
+           Qdd: dd.Qdd(),
```

#### 267. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3211` → after: `L3211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3211) · [Before (L3211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3211)

```diff
-         (bb && bb !== this.depthView || hb && hb !== this.maskView) && (this.depthView = null !== bb && void 0 !== bb ? bb : this.depthView, this.maskView = null !== hb && void 0 !== hb ? hb : this.maskView, this.groups.clear());
+         (dd && dd !== this.depthView || kd && kd !== this.maskView) && (this.depthView = null !== dd && void 0 !== dd ? dd : this.depthView, this.maskView = null !== kd && void 0 !== kd ? kd : this.maskView, this.groups.clear());
```

#### 268. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3217` → after: `L3217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3217) · [Before (L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3217)

```diff
-             binding: Du.m,
+             binding: MJ.s,
```

#### 269. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3220` → after: `L3220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3220) · [Before (L3220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3220)

```diff
-             binding: Du.t,
+             binding: MJ.w,
```

#### 270. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3223` → after: `L3223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3223) · [Before (L3223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3223)

```diff
-             label: `${bb||hb?"terrain-":""}shader-pack-inputs${bb?"-depth":""}${Bb?"-shadow":""}${hb?"-mask":""}`,
+             label: `${dd||kd?"terrain-":""}shader-pack-inputs${dd?"-depth":""}${pd?"-shadow":""}${kd?"-mask":""}`,
```

#### 271. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3237` → after: `L3237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3237) · [Before (L3237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3237)

```diff
-         bb.setBindGroup(Du.d, this.bindGroupFor(ub, hb, Bb))
+         dd.setBindGroup(MJ.f, this.bindGroupFor(Jd, kd, pd))
```

#### 272. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3258-L3259` → after: `L3258-L3259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3258-L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3258-L3259) · [Before (L3258-L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3258-L3259)

```diff
-         const Yb = bb.o4[Gb] + (Ub ? ub.gpuOffset(Ub) : 0);
-         Yb !== (null !== (Ob = Bb) && void 0 !== Ob ? Ob : bb.offsets)[Gb] && (Bb ??= bb.offsets.slice(), Bb[Gb] = Yb), bb.ends[Gb] = Ub ? ub.gpuEnd(Ub) : Lb.size
+         const gd = dd.Y5[Wd] + (Pd ? Jd.gpuOffset(Pd) : 0);
+         gd !== (null !== (Nd = pd) && void 0 !== Nd ? Nd : dd.offsets)[Wd] && (pd ??= dd.offsets.slice(), pd[Wd] = gd), dd.ends[Wd] = Pd ? Jd.gpuEnd(Pd) : Zd.size
```

#### 273. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3271` → after: `L3271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3271) · [Before (L3271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3271)

```diff
-         o4: Yb
+         Y5: gd
```

#### 274. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3287-L3288` → after: `L3287-L3288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3287-L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3287-L3288) · [Before (L3287-L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3287-L3288)

```diff
-     var VG = hb(37425),
-       FG = hb(37452);
+     var VW = kd(38016),
+       zW = kd(38054);
```

#### 275. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3292` → after: `L3292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3292) · [Before (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3292)

```diff
-       cG = `((vertexInputs.aPackedLightLevels >> 16u) | ${Yu.b.placed}u)`,
+       dP = `((vertexInputs.aPackedLightLevels >> 16u) | ${CJ.b.placed}u)`,
```

#### 276. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3294` → after: `L3294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3294) · [Before (L3294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3294)

```diff
-       RG = `${Yu.b.lifeform}u`;
+       kP = `${CJ.b.lifeform}u`;
```

#### 277. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3330` → after: `L3330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3330) · [Before (L3330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3330)

```diff
-           vertexFlags: `(${QG} & 0xffffu)`,
+           vertexFlags: `(${JP} & 0xffffu)`,
```

#### 278. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3347` → after: `L3347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3347) · [Before (L3347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3347)

```diff
-       return "lifeform" === bb.kind ? RG : "0u"
+       return "lifeform" === dd.kind ? kP : "0u"
```

#### 279. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3358` → after: `L3358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3358) · [Before (L3358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3358)

```diff
-       return hb && YU(ub.defines) && "lifeform" === ub.kind && pU(bb, "enchantTier") ? hb : null
+       return kd && oP(Jd.defines) && "lifeform" === Jd.kind && IP(dd, "enchantTier") ? kd : null
```

#### 280. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3372` → after: `L3372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3372) · [Before (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3372)

```diff
-       return `vec4f(${ub.colour}.rgb * uniforms.vDiffuseInfos.y${Bb?" * fragmentInputs.vColor.rgb":""}, ${ub.colour}.a)`
+       return `vec4f(${Jd.colour}.rgb * uniforms.vDiffuseInfos.y${pd?" * fragmentInputs.vColor.rgb":""}, ${Jd.colour}.a)`
```

#### 281. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3391` → after: `L3391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3391) · [Before (L3391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3391)

```diff
-         uv: `fragmentInputs.${1===hb.DIFFUSEDIRECTUV?"vMainUV1":2===hb.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
+         uv: `fragmentInputs.${1===kd.DIFFUSEDIRECTUV?"vMainUV1":2===kd.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
```

#### 282. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3399-L3400` → after: `L3399-L3400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3399-L3400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3399-L3400) · [Before (L3399-L3400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3399-L3400)

```diff
-         Ub = (0, db.Ib)(Gb, "uAnimStatesNum"),
-         Lb = (0, db.ib)(Gb, (0, VG.d)(Gb), Ub),
+         Pd = (0, qd.Cb)(Wd, "uAnimStatesNum"),
+         Zd = (0, qd.ab)(Wd, (0, VW.h)(Wd), Pd),
```

#### 283. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3404` → after: `L3404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3404) · [Before (L3404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3404)

```diff
-         cells: `vec2f(1.0, ${Ub})`,
+         cells: `vec2f(1.0, ${Pd})`,
```

#### 284. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3406` → after: `L3406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3406) · [Before (L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3406)

```diff
-         uv: `vec2f(${Yb}.x, ${Yb}.y * ${Ub} - ${Lb})`,
+         uv: `vec2f(${gd}.x, ${gd}.y * ${Pd} - ${Zd})`,
```

#### 285. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3429` → after: `L3429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3429) · [Before (L3429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3429)

```diff
-       if (1 !== Ob.length) throw new Error(`A model program for shader packs has ${0===Ob.length?"no":"more than one"} ${Bb} code before fog (lite/modelShaderPack.ts)`);
+       if (1 !== Nd.length) throw new Error(`A model program for shader packs has ${0===Nd.length?"no":"more than one"} ${pd} code before fog (lite/modelShaderPack.ts)`);
```

#### 286. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3441` → after: `L3441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3441) · [Before (L3441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3441)

```diff
-       ub.atlas && Ob.surface && Lb.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", Eh("atlasIdxIn")]), "item" === Gb && Lb.push(["CUSTOM_VERTEX_DEFINITIONS", (0, db.f)(db.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS … [truncated]
+       Jd.atlas && Nd.surface && Zd.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", rk("atlasIdxIn")]), "item" === Wd && Zd.push(["CUSTOM_VERTEX_DEFINITIONS", (0, qd.h)(qd.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS … [truncated]
```

#### 287. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3443` → after: `L3443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3443) · [Before (L3443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3443)

```diff
-       Sb && (Ob.surface || Ob.light) && Lb.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Sb.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${Sb.varying} = ${Sb.value};`]);
+       Cd && (Nd.surface || Nd.light) && Zd.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Cd.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${Cd.varying} = ${Cd.value};`]);
```

#### 288. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3445` → after: `L3445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3445) · [Before (L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3445)

```diff
-       if (BU(bb, ub, "fragment") && (Lb.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${hU});`]), ab = [...ab, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), pU(bb, … [truncated]
+       if (PP(dd, Jd, "fragment") && (Zd.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${WP});`]), Kd = [...Kd, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), IP(dd, … [truncated]
```

#### 289. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3448-L3449` → after: `L3448-L3449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3448-L3449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3448-L3449) · [Before (L3448-L3449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3448-L3449)

```diff
-         hb && Lb.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${hb});`]);
-         const Bb = (0, db.xb)(db.d.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
+         kd && Zd.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${kd});`]);
+         const pd = (0, qd.ob)(qd.d.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
```

#### 290. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3459-L3460` → after: `L3459-L3460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3459-L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3459-L3460) · [Before (L3459-L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3459-L3460)

```diff
-           engine: (0, ru.X)(db.d.WGSL),
-           pack: (0, ru.ob)(db.d.WGSL)
+           engine: (0, sJ.M)(qd.d.WGSL),
+           pack: (0, sJ.eb)(qd.d.WGSL)
```

#### 291. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3463-L3464` → after: `L3463-L3464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3463-L3464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3463-L3464) · [Before (L3463-L3464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3463-L3464)

```diff
-           engine: (0, ru.M)(db.d.WGSL),
-           pack: (0, ru.jb)(db.d.WGSL)
+           engine: (0, sJ.F)(qd.d.WGSL),
+           pack: (0, sJ.ab)(qd.d.WGSL)
```

#### 292. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3467-L3469` → after: `L3467-L3469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3467-L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3467-L3469) · [Before (L3467-L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3467-L3469)

```diff
-       if (wb && (ab = AU(ab, wb.engine, wb.pack, `${wb.name} light`), "placed" !== Gb && oU(Ub))) {
-         const bb = Ub.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, db.Ib)(db.d.WGSL, "uEntityLightLevels") : (0, db.Rb)(db.d.WGSL, "aLightLevels");
-         Lb.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${ru.e}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, ru.lb)(db.d.WGSL, bb)])
+       if (ld && (Kd = vP(Kd, ld.engine, ld.pack, `${ld.name} light`), "placed" !== Wd && GP(Pd))) {
+         const dd = Pd.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, qd.Cb)(qd.d.WGSL, "uEntityLightLevels") : (0, qd.Jb)(qd.d.WGSL, "aLightLevels");
+         Zd.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${sJ.e}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, sJ.bb)(qd.d.WGSL, dd)])
```

#### 293. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3484` → after: `L3484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3484) · [Before (L3484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3484)

```diff
-       return `${hb}${ub}${bb.slice(hb.length)}`
+       return `${kd}${Jd}${dd.slice(kd.length)}`
```

#### 294. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3498` → after: `L3498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3498) · [Before (L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3498)

```diff
-         } = ub, Ub = UU(ub), Lb = !!Gb.FOG, Yb = YU(Gb), Sb = null !== (hb = null === Ub || void 0 === Ub ? void 0 : Ub.enchantTier) && void 0 !== hb ? hb : SU(bb, ub) ? "fragmentInputs.vPackEnchantTier" : "0u", ab = "lifeform" === ub.kind && !Gb.ALPHAFROMDIFFUSE;
+         } = Jd, Pd = CP(Jd), Zd = !!Wd.FOG, gd = oP(Wd), Cd = null !== (kd = null === Pd || void 0 === Pd ? void 0 : Pd.enchantTier) && void 0 !== kd ? kd : lP(dd, Jd) ? "fragmentInputs.vPackEnchantTier" : "0u", Kd = "lifeform" === Jd.kind && !Wd.ALPHAFROMDIFFUSE;
```

#### 295. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3500` → after: `L3500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3500) · [Before (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3500)

```diff
-           vertexFlags: null !== (Bb = null === Ub || void 0 === Ub ? void 0 : Ub.vertexFlags) && void 0 !== Bb ? Bb : LU(ub),
+           vertexFlags: null !== (pd = null === Pd || void 0 === Pd ? void 0 : Pd.vertexFlags) && void 0 !== pd ? pd : KP(Jd),
```

#### 296. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3502` → after: `L3502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3502) · [Before (L3502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3502)

```diff
-           flags: null !== (Ob = null === Ub || void 0 === Ub ? void 0 : Ub.flags) && void 0 !== Ob ? Ob : LU(ub),
+           flags: null !== (Nd = null === Pd || void 0 === Pd ? void 0 : Pd.flags) && void 0 !== Nd ? Nd : KP(Jd),
```

#### 297. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3513` → after: `L3513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3513) · [Before (L3513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3513)

```diff
-           enchantColour: Yb ? `${uU}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
+           enchantColour: gd ? `${NP}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
```

#### 298. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3526` → after: `L3526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3526) · [Before (L3526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3526)

```diff
-             gH: "frame.animTick",
+             Do: "frame.animTick",
```

#### 299. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3529` → after: `L3529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3529) · [Before (L3529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3529)

```diff
-             perTexture: bb => `uniforms.uAnimDataPerTex[${bb}]${ub}`
+             perTexture: dd => `uniforms.uAnimDataPerTex[${dd}]${Jd}`
```

#### 300. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3532` → after: `L3532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3532) · [Before (L3532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3532)

```diff
-       } : null, Hb = "placed" === Ub ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - b … [truncated]
+       } : null, od = "placed" === Pd ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - b … [truncated]
```

#### 301. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3534` → after: `L3534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3534) · [Before (L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3534)

```diff
-         return `${(0,Du.D)()}${Mh(ub,hb)}${Bb}${Vh(bb)}${ih}${Hb}${ub.code}`
+         return `${(0,MJ.E)()}${Dk(Jd,kd)}${pd}${tk(dd)}${Sk}${od}${Jd.code}`
```

#### 302. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3542-L3543` → after: `L3542-L3543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3542-L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3542-L3543) · [Before (L3542-L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3542-L3543)

```diff
-         const bb = BU(ub, hb, "vertex") ? `\tbloxdSpCell = ${hU};\n` : "";
-         Xb = KU(Xb, fG, `${bb}${ob.slice(1)}${fG}`, "vertex")
+         const dd = PP(Jd, kd, "vertex") ? `\tbloxdSpCell = ${WP};\n` : "";
+         Ld = qP(Ld, HW, `${dd}${ed.slice(1)}${HW}`, "vertex")
```

#### 303. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3545-L3546` → after: `L3545-L3546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3545-L3546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3545-L3546) · [Before (L3545-L3546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3545-L3546)

```diff
-       const Ab = `${mh(ub,Gb,function(bb,ub){return ub.TWOSIDEDLIGHTING?bb:`select(-(${bb}), ${bb}, fragmentInputs.frontFacing)`}(Yb.normal,Lb),Yb.flags)}${kh(Ob,ub.strict,ub.program,wb,Yb)}`;
-       Ab && (pb = KU(pb, kG, `${Ab.slice(1)}${kG}`, "surface")), Gb && ub.sunShadow && !Lb.TWOSIDEDLIGHTING && (pb = KU(pb, WU, `${WU}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
+       const Rd = `${Tk(Jd,Wd,function(dd,Jd){return Jd.TWOSIDEDLIGHTING?dd:`select(-(${dd}), ${dd}, fragmentInputs.frontFacing)`}(gd.normal,Zd),gd.flags)}${Hk(Nd,Jd.strict,Jd.program,ld,gd)}`;
+       Rd && (Od = qP(Od, wW, `${Rd.slice(1)}${wW}`, "surface")), Wd && Jd.sunShadow && !Zd.TWOSIDEDLIGHTING && (Od = qP(Od, BP, `${BP}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
```

#### 304. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3550` → after: `L3550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3550) · [Before (L3550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3550)

```diff
-         pb = KU(pb, TG, `${bb}${lb.slice(1)}${TG}`, "light")
+         Od = qP(Od, AW, `${dd}${Id.slice(1)}${AW}`, "light")
```

#### 305. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3552` → after: `L3552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3552) · [Before (L3552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3552)

```diff
-       const Kb = XU(ub, hb) ? qh : "";
+       const Gd = RP(Jd, kd) ? hk : "";
```

#### 306. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3578` → after: `L3578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3578) · [Before (L3578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3578)

```diff
-         this.device = bb, this.resources = ub, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.I9 = new xG, this.modelMeshes = new DG, this.thinBundle = void 0, this.binder = new fO, this.sc … [truncated]
+         this.device = dd, this.resources = Jd, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.I5 = new mW, this.modelMeshes = new YW, this.thinBundle = void 0, this.binder = new HN, this.sc … [truncated]
```

#### 307. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3605` → after: `L3605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3605) · [Before (L3605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3605)

```diff
-           pipelineCompiling: (bb, ub) => !bb.program.failed && !1 !== this.pipelines.get(`${bb.pipelineKey}|${ub}`),
+           pipelineCompiling: (dd, Jd) => !dd.program.failed && !1 !== this.pipelines.get(`${dd.pipelineKey}|${Jd}`),
```

#### 308. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3630-L3632` → after: `L3630-L3632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3630-L3632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3630-L3632) · [Before (L3630-L3632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3630-L3632)

```diff
-         this.frame++, this.view = ub, this.drawDefines.view = ub, this.thinBundle.rW(), this.writeFrameUniforms();
-         const Gb = null !== (Bb = null === Ob || void 0 === Ob ? void 0 : Ob.defineFor("model")) && void 0 !== Bb ? Bb : 0;
-         this.drawDefines.modelPackVariant = Gb, Ob && 0 !== Gb && (this.packInputs ??= new PG(this.device, Ob.textureLayers(), this.sunShadow), this.packInputs.write(Ob, ub.eye, Ob.Sp())), this.lists.clear(), this.slotCount = 0;
+         this.frame++, this.view = Jd, this.drawDefines.view = Jd, this.thinBundle.iG(), this.writeFrameUniforms();
+         const Wd = null !== (pd = null === Nd || void 0 === Nd ? void 0 : Nd.defineFor("model")) && void 0 !== pd ? pd : 0;
+         this.drawDefines.modelPackVariant = Wd, Nd && 0 !== Wd && (this.packInputs ??= new hW(this.device, Nd.textureLayers(), this.sunShadow), this.packInputs.write(Nd, Jd.eye, Nd.IO())), this.lists.clear(), this.slotCount = 0;
```

#### 309. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3634` → after: `L3634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3634) · [Before (L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3634)

```diff
-         this.I9.select(Ub, this.keepSteadyBase), this.modelMeshes.select(Ub, ub), hb && this.pushEarthSky(hb), this.lists.collect(bb), this.thinBundle.jW(), this.uploadMeshSlots()
+         this.I5.select(Pd, this.keepSteadyBase), this.modelMeshes.select(Pd, Jd), kd && this.pushEarthSky(kd), this.lists.collect(dd), this.thinBundle.aG(), this.uploadMeshSlots()
```

#### 310. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3665` → after: `L3665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3665) · [Before (L3665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3665)

```diff
-           Ob = this.I9.base(Bb),
+           Nd = this.I5.base(pd),
```

#### 311. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3699-L3701` → after: `L3699-L3701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3699-L3701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3699-L3701) · [Before (L3699-L3701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3699-L3701)

```diff
-           Yb = Bb.forcedInstanceCount || Bb.W4;
-         if (!Bb.isVisible || Bb.UOb || Bb.visibility !== hb.visibility || 0 === (Bb.layerMask & ub.layerMask) || Bb.material !== hb.material || 0 !== Bb.renderingGroupId || Bb.hasVertexAlpha || !this.drawDefines.definesHold(Lb, Ob, Lb.instancing) || hb.gpuVersion !== this.resourc … [truncated]
-         if (Ub.frame !== this.frame && this.bindMaterial(Ub, this.modelUniforms.refreshModelUniforms(Bb.ZN(), Ub, Ub.model, this.view)), !Ub.bindable || Ub.bindGroup !== hb.bindGroup) return !1;
+           gd = pd.forcedInstanceCount || pd.W8;
+         if (!pd.isVisible || pd.eNd || pd.visibility !== kd.visibility || 0 === (pd.layerMask & Jd.layerMask) || pd.material !== kd.material || 0 !== pd.renderingGroupId || pd.hasVertexAlpha || !this.drawDefines.definesHold(Zd, Nd, Zd.instancing) || kd.gpuVersion !== this.resourc … [truncated]
+         if (Pd.frame !== this.frame && this.bindMaterial(Pd, this.modelUniforms.refreshModelUniforms(pd.Wm(), Pd, Pd.model, this.view)), !Pd.bindable || Pd.bindGroup !== kd.bindGroup) return !1;
```

#### 312. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3704` → after: `L3704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3704) · [Before (L3704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3704)

```diff
-         return hb.worldFlag = Sb.updateFlag, Gb.instances = Yb, this.thinBundle.addAgain(hb.record, Gb, ab ? Sb.m : null, hb.visibility), hb.handedFrame = this.frame, this.I9.drawn++, !0
+         return kd.worldFlag = Cd.updateFlag, Wd.instances = gd, this.thinBundle.addAgain(kd.record, Wd, Kd ? Cd.m : null, kd.visibility), kd.handedFrame = this.frame, this.I5.drawn++, !0
```

#### 313. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3762` → after: `L3762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3762) · [Before (L3762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3762)

```diff
-             }(Gb)) return this.warnOnce(`lines:${Ub}`, `A LinesMesh with a ${Ub} is not drawn yet (${Gb.name})`), null;
+             }(Wd)) return this.warnOnce(`lines:${Pd}`, `A LinesMesh with a ${Pd} is not drawn yet (${Wd.name})`), null;
```

#### 314. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3764` → after: `L3764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3764) · [Before (L3764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3764)

```diff
-         } else if ("StandardMaterial" !== Ub && "LiteMaterial" !== Ub) return this.warnOnce(`class:${Ub}`, `${Ub} is not drawn yet (${Gb.name})`), null;
+         } else if ("StandardMaterial" !== Pd && "LiteMaterial" !== Pd) return this.warnOnce(`class:${Pd}`, `${Pd} is not drawn yet (${Wd.name})`), null;
```

#### 315. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3779` → after: `L3779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3779) · [Before (L3779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3779)

```diff
-         const Ab = this.renderStates.renderState(null !== Hb && void 0 !== Hb ? Hb : Gb, Ob, Bb, Xb.state, Lb ? "line-list" : "triangle-list"),
+         const Rd = this.renderStates.renderState(null !== od && void 0 !== od ? od : Wd, Nd, pd, Ld.state, Zd ? "line-list" : "triangle-list"),
```

#### 316. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3790` → after: `L3790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3790) · [Before (L3790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3790)

```diff
-         bb.unit = ub, bb.first = ub.parts.tp[Ob], bb.count = ub.parts.tp[Ob + 1]
+         dd.unit = Jd, dd.first = Jd.parts.UO[Nd], dd.count = Jd.parts.UO[Nd + 1]
```

#### 317. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3793` → after: `L3793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3793) · [Before (L3793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3793)

```diff
-         ub.state !== hb && (ub.state = hb, ub.pipelineKey = `${bb.id}|${ub.layout.key}|${hb.key}`, ub.pipeline = null);
+         Jd.state !== kd && (Jd.state = kd, Jd.pipelineKey = `${dd.id}|${Jd.layout.key}|${kd.key}`, Jd.pipeline = null);
```

#### 318. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3816` → after: `L3816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3816) · [Before (L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3816)

```diff
-             return bb.forcedInstanceCount || bb.W4;
+             return dd.forcedInstanceCount || dd.W8;
```

#### 319. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3829` → after: `L3829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3829) · [Before (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3829)

```diff
-             if (Bb.layout === (null !== (Ob = null === hb || void 0 === hb ? void 0 : hb.interleavedKinds) && void 0 !== Ob ? Ob : null)) return Bb;
+             if (pd.layout === (null !== (Nd = null === kd || void 0 === kd ? void 0 : kd.interleavedKinds) && void 0 !== Nd ? Nd : null)) return pd;
```

#### 320. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3841` → after: `L3841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3841) · [Before (L3841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3841)

```diff
-             const Ob = (0, nb.v)(bb, rb.h.name),
+             const Nd = (0, ad.v)(dd, Bd.i.name),
```

#### 321. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3850` → after: `L3850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3850) · [Before (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3850)

```diff
-               const bb = ab ? null === (Ub = (Lb = (0, au.i)(Yb)).vZ) || void 0 === Ub ? void 0 : Ub.call(Lb, Sb) : void 0;
+               const dd = Kd ? null === (Pd = (Zd = (0, oJ.i)(gd)).EQ) || void 0 === Pd ? void 0 : Pd.call(Zd, Cd) : void 0;
```

#### 322. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3855` → after: `L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3855) · [Before (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3855)

```diff
-               atlas: null !== Ob && void 0 !== Ob && Ob.active ? (0, rb.b)(Ob.state) : null,
+               atlas: null !== Nd && void 0 !== Nd && Nd.active ? (0, Bd.e)(Nd.state) : null,
```

#### 323. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3864` → after: `L3864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3864) · [Before (L3864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3864)

```diff
-           const hb = this.modelPackProgram(bb, ub, `${Ob}#${Gb}#sp${this.drawDefines.modelPackVariant}`, Bb, Ub);
+           const kd = this.modelPackProgram(dd, Jd, `${Nd}#${Wd}#sp${this.drawDefines.modelPackVariant}`, pd, Pd);
```

#### 324. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3868` → after: `L3868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3868) · [Before (L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3868)

```diff
-         if (Lb || this.unbuildable.has(Ob)) return null !== Lb && void 0 !== Lb ? Lb : null;
+         if (Zd || this.unbuildable.has(Nd)) return null !== Zd && void 0 !== Zd ? Zd : null;
```

#### 325. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3878` → after: `L3878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3878) · [Before (L3878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3878)

```diff
-           return this.unbuildable.add(Ob), this.warnOnce(`build:${Ob}`, `could not build a program for ${bb.name}: ${String(Sb)}`), null
+           return this.unbuildable.add(Nd), this.warnOnce(`build:${Nd}`, `could not build a program for ${dd.name}: ${String(Cd)}`), null
```

#### 326. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3884` → after: `L3884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3884) · [Before (L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3884)

```diff
-         if (Gb || this.unbuildable.has(hb)) return null !== Gb && void 0 !== Gb ? Gb : null;
+         if (Wd || this.unbuildable.has(kd)) return null !== Wd && void 0 !== Wd ? Wd : null;
```

#### 327. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3889` → after: `L3889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3889) · [Before (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3889)

```diff
-               return (0, xu.e)(bb, "model")
+               return (0, FJ.c)(dd, "model")
```

#### 328. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3898` → after: `L3898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3898) · [Before (L3898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3898)

```diff
-           return this.unbuildable.add(hb), this.warnOnce(`build:${hb}`, `could not build a shader pack program for ${bb.name}, which draws without the pack: ${String(ab)}`), null
+           return this.unbuildable.add(kd), this.warnOnce(`build:${kd}`, `could not build a shader pack program for ${dd.name}, which draws without the pack: ${String(Kd)}`), null
```

#### 329. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3909` → after: `L3909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3909) · [Before (L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3909)

```diff
-           return `standard-sp${bb}`
+           return `standard-sp${dd}`
```

#### 330. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3916` → after: `L3916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3916) · [Before (L3916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3916)

```diff
-         return Ob || (Ob = this.createProgram(`lines#${Bb}`, (Gb = function(bb) {
+         return Nd || (Nd = this.createProgram(`lines#${pd}`, (Wd = function(dd) {
```

#### 331. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3932` → after: `L3932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3932) · [Before (L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3932)

```diff
-           Ub = `${hb}-${Gb}`,
+           Pd = `${kd}-${Wd}`,
```

#### 332. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3962` → after: `L3962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3962) · [Before (L3962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3962)

```diff
-               label: `${Ub}-vertex`,
+               label: `${Pd}-vertex`,
```

#### 333. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3966` → after: `L3966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3966) · [Before (L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3966)

```diff
-               label: `${Ub}-fragment`,
+               label: `${Pd}-fragment`,
```

#### 334. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3974` → after: `L3974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3974) · [Before (L3974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3974)

```diff
-             packGroup: null !== (Bb = null === Ob || void 0 === Ob ? void 0 : Ob.group) && void 0 !== Bb ? Bb : null,
+             packGroup: null !== (pd = null === Nd || void 0 === Nd ? void 0 : Nd.group) && void 0 !== pd ? pd : null,
```

#### 335. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L3987` → after: `L3987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR3987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L3987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L3987) · [Before (L3987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L3987)

```diff
-           this.materials.set(bb, ub), bb.XN.addOnce((() => {
+           this.materials.set(dd, Jd), dd.Zm.addOnce((() => {
```

#### 336. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4001-L4002` → after: `L4001-L4002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4001-L4002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4001-L4002) · [Before (L4001-L4002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4001-L4002)

```diff
-         let ub = bb.gpu[xb.e.lite];
-         return ub || (ub = new jU(this.resources), bb.gpu[xb.e.lite] = ub), ub
+         let Jd = dd.gpu[Fd.g.lite];
+         return Jd || (Jd = new MP(this.resources), dd.gpu[Fd.g.lite] = Jd), Jd
```

#### 337. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4015` → after: `L4015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4015) · [Before (L4015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4015)

```diff
-             label: `${bb.name}-uniforms`,
+             label: `${dd.name}-uniforms`,
```

#### 338. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4042` → after: `L4042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4042) · [Before (L4042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4042)

```diff
-         const Gb = null !== (ub = Ob.state) && void 0 !== ub ? ub : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
+         const Wd = null !== (Jd = Nd.state) && void 0 !== Jd ? Jd : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
```

#### 339. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4069` → after: `L4069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4069) · [Before (L4069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4069)

```diff
-           Lb ? hb[2 * Ub] === Lb.view && hb[2 * Ub + 1] === Lb.sampler || (hb[2 * Ub] = Lb.view, hb[2 * Ub + 1] = Lb.sampler, Ob = !0) : (ub || bb.ubo.expected.has(Bb[Ub].name) || this.warnOnce(`texture:${bb.owner.name}:${Bb[Ub].name}`, `${bb.owner.name} has no ${Bb[Ub].name}`),  … [truncated]
+           Zd ? kd[2 * Pd] === Zd.view && kd[2 * Pd + 1] === Zd.sampler || (kd[2 * Pd] = Zd.view, kd[2 * Pd + 1] = Zd.sampler, Nd = !0) : (Jd || dd.ubo.expected.has(pd[Pd].name) || this.warnOnce(`texture:${dd.owner.name}:${pd[Pd].name}`, `${dd.owner.name} has no ${pd[Pd].name}`),  … [truncated]
```

#### 340. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4087` → after: `L4087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4087) · [Before (L4087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4087)

```diff
-             label: `${bb.owner.name}-material`,
+             label: `${dd.owner.name}-material`,
```

#### 341. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4105` → after: `L4105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4105) · [Before (L4105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4105)

```diff
-           if (Gb = null !== (Ub = this.vertexLayouts.resolveInputs(ub, hb, Bb, Ob)) && void 0 !== Ub ? Ub : void 0, !Gb) return null;
+           if (Wd = null !== (Pd = this.vertexLayouts.resolveInputs(Jd, kd, pd, Nd)) && void 0 !== Pd ? Pd : void 0, !Wd) return null;
```

#### 342. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4124` → after: `L4124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4124) · [Before (L4124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4124)

```diff
-         return qG(bb, this.resources, this.zeroBuffer) ? bb : null
+         return rW(dd, this.resources, this.zeroBuffer) ? dd : null
```

#### 343. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4129-L4130` → after: `L4129-L4130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4129-L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4129-L4130) · [Before (L4129-L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4129-L4130)

```diff
-           const Ob = ub.ends[Bb.index] - ub.offsets[Bb.index] + ub.o4[Bb.index];
-           return this.warnOnce(`overrun:${bb}`, `${bb} draws ${hb} instances from a ${Ob}-byte buffer (${Bb.needed} needed)`), !1
+           const Nd = Jd.ends[pd.index] - Jd.offsets[pd.index] + Jd.Y5[pd.index];
+           return this.warnOnce(`overrun:${dd}`, `${dd} draws ${kd} instances from a ${Nd}-byte buffer (${pd.needed} needed)`), !1
```

#### 344. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4135` → after: `L4135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4135) · [Before (L4135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4135)

```diff
-         const Ob = `${ub._colorFormat}|${ub._depthStencilFormat}|${ub._depthCompare}|${ub._sampleCount}`,
+         const Nd = `${Jd._colorFormat}|${Jd._depthStencilFormat}|${Jd._depthCompare}|${Jd._sampleCount}`,
```

#### 345. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4159` → after: `L4159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4159) · [Before (L4159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4159)

```diff
-           const hb = (null !== (Ub = ub._depthCompare) && void 0 !== Ub ? Ub : hu).startsWith("greater") ? 0 : 1;
+           const kd = (null !== (Pd = Jd._depthCompare) && void 0 !== Pd ? Pd : pJ).startsWith("greater") ? 0 : 1;
```

#### 346. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4180` → after: `L4180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4180) · [Before (L4180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4180)

```diff
-         const Ub = `${bb.pipelineKey}|${hb}`,
+         const Pd = `${dd.pipelineKey}|${kd}`,
```

#### 347. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4189` → after: `L4189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4189) · [Before (L4189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4189)

```diff
-           label: `standard-${Yb.id}`,
+           label: `standard-${gd.id}`,
```

#### 348. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4202` → after: `L4202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4202) · [Before (L4202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4202)

```diff
-             depthCompare: null !== (Bb = null !== (Ob = ab.depthCompare) && void 0 !== Ob ? Ob : ub._depthCompare) && void 0 !== Bb ? Bb : hu,
+             depthCompare: null !== (pd = null !== (Nd = Kd.depthCompare) && void 0 !== Nd ? Nd : Jd._depthCompare) && void 0 !== pd ? pd : pJ,
```

#### 349. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4231` → after: `L4231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4231) · [Before (L4231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4231)

```diff
-             switch (ub.geometry = Gb, ub.skip = Ub.noSunShadowVertices, ub.indexed = null !== hb.indexBuffer, ub.first = hb.first, ub.count = hb.count, ub.eH = Bb, ub.worldAt = Ob, ub.instances = null, ub.instanceCount = 1, ub.thin = !1, bG(Ub)) {
+             switch (Jd.geometry = Wd, Jd.skip = Pd.noSunShadowVertices, Jd.indexed = null !== kd.indexBuffer, Jd.first = kd.first, Jd.count = kd.count, Jd.Vo = pd, Jd.worldAt = Nd, Jd.instances = null, Jd.instanceCount = 1, Jd.thin = !1, pW(Pd)) {
```

#### 350. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4269` → after: `L4269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4269) · [Before (L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4269)

```diff
-           for (const ub of bb.messages) Ob &&= "error" !== ub.type, Bb.push(`${Gb}:${ub.lineNum}:${ub.linePos} ${ub.type}: ${ub.message}`)
+           for (const Jd of dd.messages) Nd &&= "error" !== Jd.type, pd.push(`${Wd}:${Jd.lineNum}:${Jd.linePos} ${Jd.type}: ${Jd.message}`)
```

#### 351. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4271-L4272` → after: `L4271-L4272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4271-L4272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4271-L4272) · [Before (L4271-L4272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4271-L4272)

```diff
-         if (Ob && !bb.packGroup) return this.pipelines.set(ub, !1), console.error(`Lite: pipeline ${ub} failed`, hb), void FO("mesh", bb.kind, hb);
-         bb.failed || (bb.failed = !0, console.error(`Lite: program ${bb.id} failed`, hb, Bb.join("\n"), {
+         if (Nd && !dd.packGroup) return this.pipelines.set(Jd, !1), console.error(`Lite: pipeline ${Jd} failed`, kd), void zN("mesh", dd.kind, kd);
+         dd.failed || (dd.failed = !0, console.error(`Lite: program ${dd.id} failed`, kd, pd.join("\n"), {
```

#### 352. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4281` → after: `L4281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4281) · [Before (L4281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4281)

```diff
-       const Bb = null === (ub = bb.Fs) || void 0 === ub || null === (hb = ub.aShaderPackItem) || void 0 === hb ? void 0 : hb.x;
+       const pd = null === (Jd = dd.fn) || void 0 === Jd || null === (kd = Jd.aShaderPackItem) || void 0 === kd ? void 0 : kd.x;
```

#### 353. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4284-L4287` → after: `L4284-L4287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4284-L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4284-L4287) · [Before (L4284-L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4284-L4287)

```diff
-     var zU = hb(41148),
-       gU = hb(41153),
-       iU = hb(41161),
-       vU = hb(41113);
+     var bP = kd(41653),
+       SP = kd(41659),
+       jP = kd(41665),
+       XP = kd(41623);
```

#### 354. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4294-L4295` → after: `L4294-L4295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4294-L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4294-L4295) · [Before (L4294-L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4294-L4295)

```diff
-           const Bb = (0, vU.d)(bb, hb, hb, 6);
-           for (let Ob = 0; Ob < 6; Ob++)(0, vU.h)(bb, Bb, Ob, ub[tU[Ob]], {
+           const pd = (0, XP.b)(dd, kd, kd, 6);
+           for (let Nd = 0; Nd < 6; Nd++)(0, XP.d)(dd, pd, Nd, Jd[fP[Nd]], {
```

#### 355. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4331` → after: `L4331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4331) · [Before (L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4331)

```diff
-       for (const ub of null !== bb && void 0 !== bb ? bb : []) null === ub || void 0 === ub || ub.close()
+       for (const Jd of null !== dd && void 0 !== dd ? dd : []) null === Jd || void 0 === Jd || Jd.close()
```

#### 356. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4345` → after: `L4345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4345) · [Before (L4345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4345)

```diff
-         this.LH = bb, this.starts = [], this.lengths = [], this.used = 0, bb > 0 && (this.starts.push(0), this.lengths.push(bb))
+         this.oo = dd, this.starts = [], this.lengths = [], this.used = 0, dd > 0 && (this.starts.push(0), this.lengths.push(dd))
```

#### 357. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4361` → after: `L4361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4361) · [Before (L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4361)

```diff
-         const hb = Math.min(bb + ub, this.LH);
+         const kd = Math.min(dd + Jd, this.oo);
```

#### 358. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4365-L4366` → after: `L4365-L4366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4365-L4366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4365-L4366) · [Before (L4365-L4366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4365-L4366)

```diff
-         const ub = this.LH;
-         this.LH = bb, this.release(ub, bb - ub)
+         const Jd = this.oo;
+         this.oo = dd, this.release(Jd, dd - Jd)
```

#### 359. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4374` → after: `L4374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4374) · [Before (L4374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4374)

```diff
-         this.LH = bb
+         this.oo = dd
```

#### 360. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4390` → after: `L4390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4390) · [Before (L4390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4390)

```diff
-         Lb && Yb ? (Bb[Ub - 1] += ub + Bb[Ub], hb.splice(Ub, 1), Bb.splice(Ub, 1)) : Lb ? Bb[Ub - 1] += ub : Yb ? (hb[Ub] = bb, Bb[Ub] += ub) : (hb.splice(Ub, 0, bb), Bb.splice(Ub, 0, ub))
+         Zd && gd ? (pd[Pd - 1] += Jd + pd[Pd], kd.splice(Pd, 1), pd.splice(Pd, 1)) : Zd ? pd[Pd - 1] += Jd : gd ? (kd[Pd] = dd, pd[Pd] += Jd) : (kd.splice(Pd, 0, dd), pd.splice(Pd, 0, Jd))
```

#### 361. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4398` → after: `L4398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4398) · [Before (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4398)

```diff
-         this.device = bb, this.onReplaced = ub, this.mergeGap = hb, this.gpu = null, this.bytes = void 0, this.tp = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
+         this.device = dd, this.onReplaced = Jd, this.mergeGap = kd, this.gpu = null, this.bytes = void 0, this.UO = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
```

#### 362. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4400` → after: `L4400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4400) · [Before (L4400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4400)

```diff
-         this.bytes = new Uint8Array(Ob), this.tp = new sU(Ob / MU)
+         this.bytes = new Uint8Array(Nd), this.UO = new DP(Nd / TP)
```

#### 363. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4413-L4414` → after: `L4413-L4414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4413-L4414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4413-L4414) · [Before (L4413-L4414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4413-L4414)

```diff
-         let Gb = this.tp.allocate(Ob);
-         Gb < 0 && (this.grow(this.tp.LH + Ob), Gb = this.tp.allocate(Ob));
+         let Wd = this.UO.allocate(Nd);
+         Wd < 0 && (this.grow(this.UO.oo + Nd), Wd = this.UO.allocate(Nd));
```

#### 364. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4420` → after: `L4420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4420) · [Before (L4420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4420)

```diff
-         ub > this.tp.LH && this.grow(ub)
+         Jd > this.UO.oo && this.grow(Jd)
```

#### 365. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4466` → after: `L4466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4466) · [Before (L4466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4466)

```diff
-         for (let ub = 0; ub < bb.length; ub += 2) this.tp.free(bb[ub] / MU, bb[ub + 1] / MU);
+         for (let Jd = 0; Jd < dd.length; Jd += 2) this.UO.free(dd[Jd] / TP, dd[Jd + 1] / TP);
```

#### 366. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4480` → after: `L4480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4480) · [Before (L4480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4480)

```diff
-         const ub = this.tp.LH,
+         const Jd = this.UO.oo,
```

#### 367. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4485` → after: `L4485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4485) · [Before (L4485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4485)

```diff
-         this.gpu = this.createGpu(Bb.byteLength), this.bytes = Bb, this.tp.grow(hb), Ob && (this.replaced.push(Ob), this.onReplaced(Ob)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, ub * MU)
+         this.gpu = this.createGpu(pd.byteLength), this.bytes = pd, this.UO.grow(kd), Nd && (this.replaced.push(Nd), this.onReplaced(Nd)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, Jd * TP)
```

#### 368. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4575` → after: `L4575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4575) · [Before (L4575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4575)

```diff
-         this.engine = bb, this.device = ub, this.buffers = new WeakMap, this.y5 = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, … [truncated]
+         this.engine = dd, this.device = Jd, this.buffers = new WeakMap, this.S_ = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, … [truncated]
```

#### 369. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4586` → after: `L4586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4586) · [Before (L4586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4586)

```diff
-         null === (bb = this.arena) || void 0 === bb || bb.jW()
+         null === (dd = this.arena) || void 0 === dd || dd.aG()
```

#### 370. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4592` → after: `L4592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4592) · [Before (L4592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4592)

```diff
-         bb.LH = Ob.byteLength, this.buffers.set(bb, {
+         dd.oo = Nd.byteLength, this.buffers.set(dd, {
```

#### 371. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4629` → after: `L4629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4629) · [Before (L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4629)

```diff
-         bb.is32Bits = 4 === Bb.BYTES_PER_ELEMENT, bb.LH = Bb.byteLength, this.buffers.set(bb, {
+         dd.is32Bits = 4 === pd.BYTES_PER_ELEMENT, dd.oo = pd.byteLength, this.buffers.set(dd, {
```

#### 372. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4665` → after: `L4665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4665) · [Before (L4665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4665)

```diff
-             const ub = new Uint8Array(Math.max(null !== (Ob = null === Ub || void 0 === Ub ? void 0 : Ub.byteLength) && void 0 !== Ob ? Ob : 0, hb + Bb));
+             const Jd = new Uint8Array(Math.max(null !== (Nd = null === Pd || void 0 === Pd ? void 0 : Pd.byteLength) && void 0 !== Nd ? Nd : 0, kd + pd));
```

#### 373. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4729` → after: `L4729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4729) · [Before (L4729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4729)

```diff
-         const Bb = null !== (ub = null === (hb = this.buffers.get(bb)) || void 0 === hb ? void 0 : hb.slot) && void 0 !== ub ? ub : -1;
+         const pd = null !== (Jd = null === (kd = this.buffers.get(dd)) || void 0 === kd ? void 0 : kd.slot) && void 0 !== Jd ? Jd : -1;
```

#### 374. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4735` → after: `L4735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4735) · [Before (L4735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4735)

```diff
-         return Bb ? Bb.slot >= 0 ? Bb.slot + Bb.size : null !== (ub = null === (hb = Bb.gpu) || void 0 === hb ? void 0 : hb.size) && void 0 !== ub ? ub : 0 : 0
+         return pd ? pd.slot >= 0 ? pd.slot + pd.size : null !== (Jd = null === (kd = pd.gpu) || void 0 === kd ? void 0 : kd.size) && void 0 !== Jd ? Jd : 0 : 0
```

#### 375. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4739` → after: `L4739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4739) · [Before (L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4739)

```diff
-         return null !== (Bb = null !== (Ob = hb && this.modelInput(hb, ub)) && void 0 !== Ob ? Ob : null === (Gb = null !== (Ub = this.y5.get(bb)) && void 0 !== Ub ? Ub : this.batchUploads.get(bb)) || void 0 === Gb ? void 0 : Gb.inputs[ub]) && void 0 !== Bb ? Bb : null
+         return null !== (pd = null !== (Nd = kd && this.modelInput(kd, Jd)) && void 0 !== Nd ? Nd : null === (Wd = null !== (Pd = this.S_.get(dd)) && void 0 !== Pd ? Pd : this.batchUploads.get(dd)) || void 0 === Wd ? void 0 : Wd.inputs[Jd]) && void 0 !== pd ? pd : null
```

#### 376. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4754` → after: `L4754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4754) · [Before (L4754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4754)

```diff
-         let ub = bb.gpu[xb.e.lite];
+         let Jd = dd.gpu[Fd.g.lite];
```

#### 377. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4769` → after: `L4769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4769) · [Before (L4769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4769)

```diff
-           }, bb.gpu[xb.e.lite] = ub
+           }, dd.gpu[Fd.g.lite] = Jd
```

#### 378. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4778` → after: `L4778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4778) · [Before (L4778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4778)

```diff
-               LH: 0,
+               oo: 0,
```

#### 379. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4783` → after: `L4783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4783) · [Before (L4783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4783)

```diff
-             LH: 0
+             oo: 0
```

#### 380. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4801` → after: `L4801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4801) · [Before (L4801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4801)

```diff
-             if (6 !== bb.length) throw new Error(`${bb.length} files where six faces were expected`);
+             if (6 !== dd.length) throw new Error(`${dd.length} files where six faces were expected`);
```

#### 381. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4866` → after: `L4866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4866) · [Before (L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4866)

```diff
-         return Ub && Ub.view === Ob.view && Ub.sampler === Gb ? Ub : (Bb.bound = {
+         return Pd && Pd.view === Nd.view && Pd.sampler === Wd ? Pd : (pd.bound = {
```

#### 382. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4873` → after: `L4873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4873) · [Before (L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4873)

```diff
-         return null !== (ub = null === (hb = bb.gpu[xb.e.lite]) || void 0 === hb ? void 0 : hb.state.decoded) && void 0 !== ub ? ub : null
+         return null !== (Jd = null === (kd = dd.gpu[Fd.g.lite]) || void 0 === kd ? void 0 : kd.state.decoded) && void 0 !== Jd ? Jd : null
```

#### 383. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4877` → after: `L4877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4877) · [Before (L4877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4877)

```diff
-         return !0 === (null === (ub = bb.gpu[xb.e.lite]) || void 0 === ub ? void 0 : ub.state.failed)
+         return !0 === (null === (Jd = dd.gpu[Fd.g.lite]) || void 0 === Jd ? void 0 : Jd.state.failed)
```

#### 384. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4888` → after: `L4888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4888) · [Before (L4888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4888)

```diff
-           } = xb.i;
+           } = Fd.h;
```

#### 385. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4909` → after: `L4909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4909) · [Before (L4909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4909)

```diff
-         const hb = bb.gpu[xb.e.lite];
+         const kd = dd.gpu[Fd.g.lite];
```

#### 386. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4916` → after: `L4916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4916) · [Before (L4916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4916)

```diff
-           return "canvas" === ub.kind ? null : `${ub.kind}|${VU(ub)}|${hb.noMipmap}|${hb.samplingMode}|${hb.invertY}`
+           return "canvas" === Jd.kind ? null : `${Jd.kind}|${VP(Jd)}|${kd.noMipmap}|${kd.samplingMode}|${kd.invertY}`
```

#### 387. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4941` → after: `L4941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4941) · [Before (L4941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4941)

```diff
-         return bb.gpu[xb.e.lite] = Ub, Ub
+         return dd.gpu[Fd.g.lite] = Pd, Pd
```

#### 388. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4944` → after: `L4944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4944) · [Before (L4944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4944)

```diff
-         const Gb = `${bb}|${ub}|${hb}|${Bb}|${Ob}`;
+         const Wd = `${dd}|${Jd}|${kd}|${pd}|${Nd}`;
```

#### 389. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4977` → after: `L4977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4977) · [Before (L4977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4977)

```diff
-           bb.failed = !0, console.warn(`Lite: could not load texture ${eO(ub)}`, hb)
+           dd.failed = !0, console.warn(`Lite: could not load texture ${UN(Jd)}`, kd)
```

#### 390. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4985` → after: `L4985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4985) · [Before (L4985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4985)

```diff
-         const Bb = JU(this.engine, this.device, hb, (0, xb.v)(ub), bb.hasMips);
+         const pd = nP(this.engine, this.device, kd, (0, Fd.A)(Jd), dd.hasMips);
```

#### 391. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4995` → after: `L4995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L4995) · [Before (L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L4995)

```diff
-         } = bb, Bb = (0, iU.c)(this.engine, Math.max(1, hb.width), Math.max(1, hb.height), {
+         } = dd, pd = (0, jP.b)(this.engine, Math.max(1, kd.width), Math.max(1, kd.height), {
```

#### 392. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5009` → after: `L5009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5009) · [Before (L5009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5009)

```diff
-         if (hb && Bb && 0 !== Ob.width && 0 !== Ob.height) return Ob.width !== Bb.width || Ob.height !== Bb.height ? (this.releaseTexture(ub), ub.dynamic = null, ub.view = null, void this.createDynamic(bb, ub)) : void(0, iU.e)(this.engine, Bb, Ob, {
+         if (kd && pd && 0 !== Nd.width && 0 !== Nd.height) return Nd.width !== pd.width || Nd.height !== pd.height ? (this.releaseTexture(Jd), Jd.dynamic = null, Jd.view = null, void this.createDynamic(dd, Jd)) : void(0, jP.f)(this.engine, pd, Nd, {
```

#### 393. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5023` → after: `L5023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5023) · [Before (L5023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5023)

```diff
-       bb._colorAttachment.storeOp = bb._targetSignature._sampleCount > 1 ? ub : "store";
+       dd._colorAttachment.storeOp = dd._targetSignature._sampleCount > 1 ? Jd : "store";
```

#### 394. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5027-L5030` → after: `L5027-L5030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5027-L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5027-L5030) · [Before (L5027-L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5027-L5030)

```diff
-     var kU = hb(37399),
-       TU = hb(37428),
-       cU = hb(37096),
-       QU = hb(39191);
+     var wP = kd(37969),
+       AP = kd(38019),
+       dZ = kd(37669),
+       JZ = kd(39697);
```

#### 395. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5039-L5040` → after: `L5039-L5040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5039-L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5039-L5040) · [Before (L5039-L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5039-L5040)

```diff
-       bb.fov = ub.fov, bb.near = ub.near, bb.far = ub.far, bb.renderWidth = hb.renderWidth, bb.renderHeight = hb.renderHeight, (0, cU.s)(ub.holderRotation, 0, uL, 0), (0, cU.b)(RU, 0, uL, 0, ub.holderPosition, 0, hL);
-       const Bb = ub.pT;
+       dd.fov = Jd.fov, dd.near = Jd.near, dd.far = Jd.far, dd.renderWidth = kd.renderWidth, dd.renderHeight = kd.renderHeight, (0, dZ.q)(Jd.holderRotation, 0, NZ, 0), (0, dZ.d)(kZ, 0, NZ, 0, Jd.holderPosition, 0, WZ);
+       const pd = Jd.Xw;
```

#### 396. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5043` → after: `L5043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5043) · [Before (L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5043)

```diff
-       (0, cU.k)(Bb, BL, bL, Ob), (0, cU.g)(Ob, 0, Ob), (0, cU.o)(Ob, hL, 0, Ob), (0, cU.g)(Ob, 0, Ob);
+       (0, dZ.k)(pd, PZ, pZ, Nd), (0, dZ.i)(Nd, 0, Nd), (0, dZ.l)(Nd, WZ, 0, Nd), (0, dZ.i)(Nd, 0, Nd);
```

#### 397. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5045` → after: `L5045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5045) · [Before (L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5045)

```diff
-       (0, cU.g)(Ob, 0, Gb), bb.eye[0] = Gb[12], bb.eye[1] = Gb[13], bb.eye[2] = Gb[14], OL[0] = bb.fov, OL[1] = bb.renderWidth / bb.renderHeight, OL[2] = bb.near, OL[3] = bb.far, (0, cU.r)(OL, bb.projectionMatrix), (0, cU.o)(Ob, bb.projectionMatrix, 0, bb.viewProjectionMatrix), ( … [truncated]
+       (0, dZ.i)(Nd, 0, Wd), dd.eye[0] = Wd[12], dd.eye[1] = Wd[13], dd.eye[2] = Wd[14], ZZ[0] = dd.fov, ZZ[1] = dd.renderWidth / dd.renderHeight, ZZ[2] = dd.near, ZZ[3] = dd.far, (0, dZ.m)(ZZ, dd.projectionMatrix), (0, dZ.l)(Nd, dd.projectionMatrix, 0, dd.viewProjectionMatrix), ( … [truncated]
```

#### 398. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5052` → after: `L5052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5052) · [Before (L5052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5052)

```diff
-       }, (() => new kU.d(0, 0, 0, 0))));
+       }, (() => new wP.c(0, 0, 0, 0))));
```

#### 399. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5068` → after: `L5068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5068) · [Before (L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5068)

```diff
-       return ub.animTick = (0, TU.f)(), ub.timeMs = performance.now(), LL(ub, bb.Xp), bb.model.update(ub.frameId), ub
+       return Jd.animTick = (0, AP.e)(), Jd.timeMs = performance.now(), KZ(Jd, dd.BO), dd.model.update(Jd.frameId), Jd
```

#### 400. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5072` → after: `L5072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5072) · [Before (L5072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5072)

```diff
-       const ub = bb.Xp,
+       const Jd = dd.BO,
```

#### 401. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5075` → after: `L5075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5075) · [Before (L5075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5075)

```diff
-           XT: Bb
+           mw: pd
```

#### 402. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5077` → after: `L5077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5077) · [Before (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5077)

```diff
-       return GL(hb, Bb, ub.UX()), ub.onBeforeRenderObservable.notifyObservers(ub), UL(ub, hb.frustum), ub.onBeforeCameraRenderObservable.notifyObservers(ub.activeCamera), YL(bb)
+       return gZ(kd, pd, Jd.eL()), Jd.onBeforeRenderObservable.notifyObservers(Jd), CZ(Jd, kd.frustum), Jd.onBeforeCameraRenderObservable.notifyObservers(Jd.activeCamera), oZ(dd)
```

#### 403. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5079-L5081` → after: `L5079-L5081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5079-L5081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5079-L5081) · [Before (L5079-L5081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5079-L5081)

```diff
-     var aL = hb(37061),
-       HL = hb(37187),
-       wL = hb(37423);
+     var QZ = kd(37618),
+       LZ = kd(37751),
+       OZ = kd(38010);
```

#### 404. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5085-L5088` → after: `L5085-L5088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5085-L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5085-L5088) · [Before (L5085-L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5085-L5088)

```diff
-       const Bb = (0, nb._)(bb);
-       if (!Bb || Bb.diffuseTexture && (0, wL.h)(bb)) return null;
-       const Ob = null === (ub = (0, nb.v)(Bb, rb.h.name)) || void 0 === ub ? void 0 : ub.state,
-         Gb = null === (hb = (0, nb.v)(Bb, VG.b.name)) || void 0 === hb ? void 0 : hb.state,
+       const pd = (0, ad.$)(dd);
+       if (!pd || pd.diffuseTexture && (0, OZ.j)(dd)) return null;
+       const Nd = null === (Jd = (0, ad.v)(pd, Bd.i.name)) || void 0 === Jd ? void 0 : Jd.state,
+         Wd = null === (kd = (0, ad.v)(pd, VW.d.name)) || void 0 === kd ? void 0 : kd.state,
```

#### 405. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5093` → after: `L5093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5093) · [Before (L5093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5093)

```diff
-         Bb.set(bb.diffuseColor, Ub.diffuse), Bb[Ub.diffuse + 3] = bb.alpha, Bb.set(bb.ambientColor, Ub.ambientAndCutoff), Bb[Ub.ambientAndCutoff + 3] = bb.alphaCutOff, Bb.set(bb.emissiveColor, Ub.emissiveAndLevel), Bb[Ub.emissiveAndLevel + 3] = null !== (Ob = null === (Gb = bb.di … [truncated]
+         pd.set(dd.diffuseColor, Pd.diffuse), pd[Pd.diffuse + 3] = dd.alpha, pd.set(dd.ambientColor, Pd.ambientAndCutoff), pd[Pd.ambientAndCutoff + 3] = dd.alphaCutOff, pd.set(dd.emissiveColor, Pd.emissiveAndLevel), pd[Pd.emissiveAndLevel + 3] = null !== (Nd = null === (Wd = dd.di … [truncated]
```

#### 406. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5099-L5100` → after: `L5099-L5100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5099-L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5099-L5100) · [Before (L5099-L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5099-L5100)

```diff
-         liquid: (0, wL.l)(bb),
-         customRenderMat: (0, wL.h)(bb),
+         liquid: (0, OZ.m)(dd),
+         customRenderMat: (0, OZ.j)(dd),
```

#### 407. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5104` → after: `L5104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5104) · [Before (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5104)

```diff
-     var XL = hb(2678);
+     var RZ = kd(2754);
```

#### 408. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5119` → after: `L5119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5119) · [Before (L5119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5119)

```diff
-         this.arena = bb, this.tp = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.tp = new sU(ub);
+         this.arena = dd, this.UO = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.UO = new DP(Jd);
```

#### 409. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5124` → after: `L5124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5124) · [Before (L5124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5124)

```diff
-         return this.tp.LH
+         return this.UO.oo
```

#### 410. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5144` → after: `L5144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5144) · [Before (L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5144)

```diff
-         return this.dropped || bb.start + bb.length > this.LH
+         return this.dropped || dd.start + dd.length > this.oo
```

#### 411. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5178` → after: `L5178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5178) · [Before (L5178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5178)

```diff
-           label: `${Bb}-grow`
+           label: `${pd}-grow`
```

#### 412. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5180` → after: `L5180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5180) · [Before (L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5180)

```diff
-         Gb.buffer = this.createBuffer(Gb, !1), Ub.copyBufferToBuffer(Ob.buffer, 0, Gb.buffer, 0, Ob.units * hb), Ob.twin && (Gb.twin = this.createBuffer(Gb, !0), Ub.copyBufferToBuffer(Ob.twin, 0, Gb.twin, 0, Ob.units * this.arena.twinUnitBytes)), ub.queue.submit([Ub.finish()]), t … [truncated]
+         Wd.buffer = this.createBuffer(Wd, !1), Pd.copyBufferToBuffer(Nd.buffer, 0, Wd.buffer, 0, Nd.units * kd), Nd.twin && (Wd.twin = this.createBuffer(Wd, !0), Pd.copyBufferToBuffer(Nd.twin, 0, Wd.twin, 0, Nd.units * this.arena.twinUnitBytes)), Jd.queue.submit([Pd.finish()]), t … [truncated]
```

#### 413. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5199-L5200` → after: `L5199-L5200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5199-L5200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5199-L5200) · [Before (L5199-L5200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5199-L5200)

```diff
-           label: ub ? `${Ub}-light` : Ub,
-           size: bb.units * (ub ? Ob : Bb),
+           label: Jd ? `${Pd}-light` : Pd,
+           size: dd.units * (Jd ? Nd : pd),
```

#### 414. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5206` → after: `L5206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5206) · [Before (L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5206)

```diff
-           this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${Ub} buffer, taken as failed: ${String(hb)}`), this.settle(bb, ub, !1, !1)
+           this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${Pd} buffer, taken as failed: ${String(kd)}`), this.settle(dd, Jd, !1, !1)
```

#### 415. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5215` → after: `L5215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5215) · [Before (L5215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5215)

```diff
-             return this.tp.truncate(this.backings[Ob - 1].units), this.growable = !1, void this.promote()
+             return this.UO.truncate(this.backings[Nd - 1].units), this.growable = !1, void this.promote()
```

#### 416. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5240` → after: `L5240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5240) · [Before (L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5240)

```diff
-         if (this.device = bb, this.unitBytes = ub, this.usage = hb, this.label = Bb, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, t … [truncated]
+         if (this.device = dd, this.unitBytes = Jd, this.usage = kd, this.label = pd, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, t … [truncated]
```

#### 417. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5263` → after: `L5263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5263) · [Before (L5263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5263)

```diff
-           const ub = Ob.tp.allocate(bb);
+           const Jd = Nd.UO.allocate(dd);
```

#### 418. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5272-L5273` → after: `L5272-L5273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5272-L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5272-L5273) · [Before (L5272-L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5272-L5273)

```diff
-           const hb = Math.min(this.ceiling, Math.max(2 * ub.LH, ub.LH + bb));
-           if (hb - ub.LH >= bb) return ub.grow(hb), {
+           const kd = Math.min(this.ceiling, Math.max(2 * Jd.oo, Jd.oo + dd));
+           if (kd - Jd.oo >= dd) return Jd.grow(kd), {
```

#### 419. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5275` → after: `L5275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5275) · [Before (L5275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5275)

```diff
-             start: ub.tp.allocate(bb),
+             start: Jd.UO.allocate(dd),
```

#### 420. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5279` → after: `L5279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5279) · [Before (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5279)

```diff
-         ub && ub !== this.pages[0] && 0 === ub.tp.used && ub.drop();
+         Jd && Jd !== this.pages[0] && 0 === Jd.UO.used && Jd.drop();
```

#### 421. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5284` → after: `L5284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5284) · [Before (L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5284)

```diff
-           start: Bb.tp.allocate(bb),
+           start: pd.UO.allocate(dd),
```

#### 422. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5293` → after: `L5293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5293) · [Before (L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5293)

```diff
-         ub.tp.free(bb.start, bb.length), 0 === ub.tp.used && ub !== this.pages[0] && ub !== this.pages[this.pages.length - 1] && ub.drop()
+         Jd.UO.free(dd.start, dd.length), 0 === Jd.UO.used && Jd !== this.pages[0] && Jd !== this.pages[this.pages.length - 1] && Jd.drop()
```

#### 423. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5300` → after: `L5300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5300) · [Before (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5300)

```diff
-         this.warnOnce("outOfMemory", `out of GPU memory for a ${ub}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, bb), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, bb) / 2));
+         this.warnOnce("outOfMemory", `out of GPU memory for a ${Jd}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, dd), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, dd) / 2));
```

#### 424. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5314` → after: `L5314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5314) · [Before (L5314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5314)

```diff
-         for (const Ob of this.pages) bb += Ob.LH, ub += Ob.tp.used, hb += Ob.hasTwin ? Ob.LH * this.twinUnitBytes : 0, Bb += Ob.allocatedBytes;
+         for (const Nd of this.pages) dd += Nd.oo, Jd += Nd.UO.used, kd += Nd.hasTwin ? Nd.oo * this.twinUnitBytes : 0, pd += Nd.allocatedBytes;
```

#### 425. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5344` → after: `L5344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5344) · [Before (L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5344)

```diff
-         this.vertexArena = new AL(bb, hb, GPUBufferUsage.VERTEX, `terrain-vertices-${hb}`), this.quadArena = new AL(bb, HL.d, GPUBufferUsage.STORAGE, "terrain-quads", {
+         this.vertexArena = new vZ(dd, kd, GPUBufferUsage.VERTEX, `terrain-vertices-${kd}`), this.quadArena = new vZ(dd, LZ.d, GPUBufferUsage.STORAGE, "terrain-quads", {
```

#### 426. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5348` → after: `L5348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5348) · [Before (L5348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5348)

```diff
-         const Bb = (0, nu.g)(new Uint16Array(98298), lL);
+         const pd = (0, aJ.f)(new Uint16Array(98298), xZ);
```

#### 427. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5367` → after: `L5367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5367) · [Before (L5367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5367)

```diff
-         hb && 0 !== ub.length && hb.page.live && (ub.length < bb.vertexCount ? hb.page.arena.warnOnce("shortLight", `a part's ${ub.length} light values are fewer than its ${bb.vertexCount} vertices, so its light is left as it was`) : (hb.page.writeLight(hb, ub), bb.lit = !0))
+         kd && 0 !== Jd.length && kd.page.live && (Jd.length < dd.vertexCount ? kd.page.arena.warnOnce("shortLight", `a part's ${Jd.length} light values are fewer than its ${dd.vertexCount} vertices, so its light is left as it was`) : (kd.page.writeLight(kd, Jd), dd.lit = !0))
```

#### 428. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5370` → after: `L5370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5370) · [Before (L5370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5370)

```diff
-         this.fullSky.length < ub && (this.fullSky = new Uint16Array(Math.max(ub, 4096)).fill(XL.k));
+         this.fullSky.length < Jd && (this.fullSky = new Uint16Array(Math.max(Jd, 4096)).fill(RZ.i));
```

#### 429. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5432` → after: `L5432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5432) · [Before (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5432)

```diff
-           code: (Gb = hb._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${Gb?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(pos … [truncated]
+           code: (Wd = kd._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${Wd?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(pos … [truncated]
```

#### 430. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5466` → after: `L5466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5466) · [Before (L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5466)

```diff
-         return null !== (bb = null === (ub = this.copy) || void 0 === ub ? void 0 : ub.view) && void 0 !== bb ? bb : null
+         return null !== (dd = null === (Jd = this.copy) || void 0 === Jd ? void 0 : Jd.view) && void 0 !== dd ? dd : null
```

#### 431. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5480` → after: `L5480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5480) · [Before (L5480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5480)

```diff
-         if (Sb += this.drawList(Yb, ub, bb._directBindings, 0, bb._directBindings.length), Sb += this.drawList(Yb, ub, Ob, 0, Gb >= 0 ? Gb : Ob.length), Yb.end(), Gb < 0) return Sb;
+         if (Cd += this.drawList(gd, Jd, dd._directBindings, 0, dd._directBindings.length), Cd += this.drawList(gd, Jd, Nd, 0, Wd >= 0 ? Wd : Nd.length), gd.end(), Wd < 0) return Cd;
```

#### 432. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5513` → after: `L5513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5513) · [Before (L5513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5513)

```diff
-         const Ob = (null !== (hb = ub._config.depth) && void 0 !== hb ? hb : ub._config.rt)._depthTexture,
+         const Nd = (null !== (kd = Jd._config.depth) && void 0 !== kd ? kd : Jd._config.rt)._depthTexture,
```

#### 433. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5520` → after: `L5520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5520) · [Before (L5520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5520)

```diff
-         this.retired = null !== (ub = null === (hb = this.copy) || void 0 === hb ? void 0 : hb.texture) && void 0 !== ub ? ub : null;
+         this.retired = null !== (Jd = null === (kd = this.copy) || void 0 === kd ? void 0 : kd.texture) && void 0 !== Jd ? Jd : null;
```

#### 434. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5605` → after: `L5605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5605) · [Before (L5605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5605)

```diff
-           code: (Ub = this.edge, `${(0,Du.D)()}${Mh({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\ … [truncated]
+           code: (Pd = this.edge, `${(0,MJ.E)()}${Dk({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\ … [truncated]
```

#### 435. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5645` → after: `L5645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5645) · [Before (L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5645)

```diff
-         return null !== (bb = null === (ub = this.targets) || void 0 === ub ? void 0 : ub.maskView) && void 0 !== bb ? bb : null
+         return null !== (dd = null === (Jd = this.targets) || void 0 === Jd ? void 0 : Jd.maskView) && void 0 !== dd ? dd : null
```

#### 436. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5692` → after: `L5692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5692) · [Before (L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5692)

```diff
-         const Bb = (null !== (ub = bb._config.depth) && void 0 !== ub ? ub : bb._config.rt)._depthTexture;
+         const pd = (null !== (Jd = dd._config.depth) && void 0 !== Jd ? Jd : dd._config.rt)._depthTexture;
```

#### 437. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5711` → after: `L5711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5711) · [Before (L5711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5711)

```diff
-           Ub = null !== (hb = bb._targetSignature._depthStencilFormat) && void 0 !== hb ? hb : ub.format,
+           Pd = null !== (kd = dd._targetSignature._depthStencilFormat) && void 0 !== kd ? kd : Jd.format,
```

#### 438. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5745` → after: `L5745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5745) · [Before (L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5745)

```diff
-               resource: (null !== Lb && void 0 !== Lb ? Lb : ub).createView({
+               resource: (null !== Zd && void 0 !== Zd ? Zd : Jd).createView({
```

#### 439. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5801` → after: `L5801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5801) · [Before (L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5801)

```diff
-         status: "Lu"
+         status: "CJ"
```

#### 440. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5815` → after: `L5815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5815) · [Before (L5815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5815)

```diff
-               vZ: bb.runtime
+               EQ: dd.runtime
```

#### 441. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5819` → after: `L5819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5819) · [Before (L5819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5819)

```diff
-               return Gb && SB(ub.programKey(Gb, !1, Ob)) ? (await Gb.ready, bb.isCancelled() ? xL : Gb.bindGroupLayout ? await async function(bb, ub, hb, Bb) {
+               return Wd && op(Jd.programKey(Wd, !1, Nd)) ? (await Wd.ready, dd.isCancelled() ? mZ : Wd.bindGroupLayout ? await async function(dd, Jd, kd, pd) {
```

#### 442. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5830` → after: `L5830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5830) · [Before (L5830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5830)

```diff
-                 const [Lb, Yb] = await Promise.all([Ub, Gb.built.then((() => null), (bb => null !== bb && void 0 !== bb ? bb : new Error("pipeline failed")))]);
+                 const [Zd, gd] = await Promise.all([Pd, Wd.built.then((() => null), (dd => null !== dd && void 0 !== dd ? dd : new Error("pipeline failed")))]);
```

#### 443. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5833` → after: `L5833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5833) · [Before (L5833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5833)

```diff
-                   ab = Sb.length > 0 ? Sb.map((bb => `${Gb.name} ${bb.lineNum}:${bb.linePos}: ${bb.message}`)).join("\n") : `${Gb.name}: ${vL(null!==Yb&&void 0!==Yb?Yb:Lb)}`;
+                   Kd = Cd.length > 0 ? Cd.map((dd => `${Wd.name} ${dd.lineNum}:${dd.linePos}: ${dd.message}`)).join("\n") : `${Wd.name}: ${XZ(null!==gd&&void 0!==gd?gd:Zd)}`;
```

#### 444. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5839` → after: `L5839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5839) · [Before (L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5839)

```diff
-               }(ub, Gb, ub.programKey(Gb, "none" !== Gb.texture, Ob), hb): (console.warn(`Shader pack: skipped the compile check for "${Bb.name}", whose textures failed to load`), zL)) : xL
+               }(Jd, Wd, Jd.programKey(Wd, "none" !== Wd.texture, Nd), kd): (console.warn(`Shader pack: skipped the compile check for "${pd.name}", whose textures failed to load`), bZ)) : mZ
```

#### 445. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5855-L5856` → after: `L5855-L5856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5855-L5856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5855-L5856) · [Before (L5855-L5856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5855-L5856)

```diff
-             }), null !== (Ub = ub.timeoutMs) && void 0 !== Ub ? Ub : DL), Bb = setInterval((() => {
-               ub.isCancelled() && Gb("Lu")
+             }), null !== (Pd = Jd.timeoutMs) && void 0 !== Pd ? Pd : YZ), pd = setInterval((() => {
+               Jd.isCancelled() && Wd("CJ")
```

#### 446. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5875-L5876` → after: `L5875-L5876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5875-L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5875-L5876) · [Before (L5875-L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5875-L5876)

```diff
-       if ("Lu" === Lb || hb()) return {
-         status: "Lu"
+       if ("CJ" === Zd || kd()) return {
+         status: "CJ"
```

#### 447. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5889` → after: `L5889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5889) · [Before (L5889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5889)

```diff
-       } : "timeout" === Lb ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(Sb=bb.timeoutMs)&&void 0!==Sb?Sb:DL)/1e3} s`), {
+       } : "timeout" === Zd ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(Cd=dd.timeoutMs)&&void 0!==Cd?Cd:YZ)/1e3} s`), {
```

#### 448. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5909` → after: `L5909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5909) · [Before (L5909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5909)

```diff
-       return null !== (ub = null === bb || void 0 === bb ? void 0 : bb.message) && void 0 !== ub ? ub : String(bb)
+       return null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.message) && void 0 !== Jd ? Jd : String(dd)
```

#### 449. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5915` → after: `L5915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5915) · [Before (L5915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5915)

```diff
-         FO("terrain", ub, Bb, hb ? `${hb.lineNum}:${hb.linePos} error: ${hb.message}` : null)
+         zN("terrain", Jd, pd, kd ? `${kd.lineNum}:${kd.linePos} error: ${kd.message}` : null)
```

#### 450. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5918-L5921` → after: `L5918-L5921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5918-L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5918-L5921) · [Before (L5918-L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5918-L5921)

```diff
-     var JL = hb(37189),
-       eL = hb(37197),
-       NL = hb(37204),
-       sL = hb(2667);
+     var nZ = kd(37753),
+       UZ = kd(37769),
+       yZ = kd(37781),
+       DZ = kd(2745);
```

#### 451. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5933` → after: `L5933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5933) · [Before (L5933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5933)

```diff
-         bX: Hb
+         KL: od
```

#### 452. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5935` → after: `L5935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5935) · [Before (L5935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5935)

```diff
-       let wb = bb.Qy(Lb[0], Lb[1], Lb[2]);
+       let ld = dd.Yu(Zd[0], Zd[1], Zd[2]);
```

#### 453. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5941` → after: `L5941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5941) · [Before (L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5941)

```diff
-         const Gb = bb.Qy(Lb[0], Lb[1], Lb[2]),
+         const Wd = dd.Yu(Zd[0], Zd[1], Zd[2]),
```

#### 454. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5949` → after: `L5949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5949) · [Before (L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5949)

```diff
-           !bb.isDrawn(Gb, Ub, Yb) && bb.hasParts(Gb, Ub, Yb) && Ob.add(`${Gb},${Ub},${Yb}`)
+           !dd.isDrawn(Wd, Pd, gd) && dd.hasParts(Wd, Pd, gd) && Nd.add(`${Wd},${Pd},${gd}`)
```

#### 455. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5961` → after: `L5961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5961) · [Before (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5961)

```diff
-         this.device = bb, this.lK = ub, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
+         this.device = dd, this.xI = Jd, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
```

#### 456. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5972` → after: `L5972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5972) · [Before (L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5972)

```diff
-         const ub = null !== (bb = this.free.pop()) && void 0 !== bb ? bb : this.next++;
+         const Jd = null !== (dd = this.free.pop()) && void 0 !== dd ? dd : this.next++;
```

#### 457. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5975` → after: `L5975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L5975) · [Before (L5975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L5975)

```diff
-           bb.set(this.data), this.data = bb, this.words = new Uint32Array(bb.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.lK()
+           dd.set(this.data), this.data = dd, this.words = new Uint32Array(dd.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.xI()
```

#### 458. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6019` → after: `L6019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6019) · [Before (L6019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6019)

```diff
-         this.device = bb, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout  … [truncated]
+         this.device = dd, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout  … [truncated]
```

#### 459. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6093` → after: `L6093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6093) · [Before (L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6093)

```diff
-               buffer: null !== bb && void 0 !== bb ? bb : this.slots.buffer
+               buffer: null !== dd && void 0 !== dd ? dd : this.slots.buffer
```

#### 460. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6098` → after: `L6098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6098) · [Before (L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6098)

```diff
-               buffer: null !== ub && void 0 !== ub ? ub : this.slots.buffer
+               buffer: null !== Jd && void 0 !== Jd ? Jd : this.slots.buffer
```

#### 461. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6104` → after: `L6104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6104) · [Before (L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6104)

```diff
-         const hb = null !== ub && void 0 !== ub ? ub : bb;
+         const kd = null !== Jd && void 0 !== Jd ? Jd : dd;
```

#### 462. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6144` → after: `L6144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6144) · [Before (L6144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6144)

```diff
-         const Gb = null !== (Bb = ub.faceGroups) && void 0 !== Bb ? Bb : null;
+         const Wd = null !== (pd = Jd.faceGroups) && void 0 !== pd ? pd : null;
```

#### 463. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6146` → after: `L6146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6146) · [Before (L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6146)

```diff
-           const bb = JL.l;
+           const dd = nZ.p;
```

#### 464. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6149` → after: `L6149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6149) · [Before (L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6149)

```diff
-         this.drawWhole(Ob), 0 !== Ob.faceCount && (this.geometry.set(Ob, ub) ? (Ob.packed && this.slots.setFaces(Ob.slot, Ob.vertices.start + Ob.faceCount, Ob.faceCount), ub.IZ && this.setChunkMeshLight(bb, ub.IZ)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${Ob.vertexCo … [truncated]
+         this.drawWhole(Nd), 0 !== Nd.faceCount && (this.geometry.set(Nd, Jd) ? (Nd.packed && this.slots.setFaces(Nd.slot, Nd.vertices.start + Nd.faceCount, Nd.faceCount), Jd.HQ && this.setChunkMeshLight(dd, Jd.HQ)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${Nd.vertexCo … [truncated]
```

#### 465. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6181-L6184` → after: `L6181-L6184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6181-L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6181-L6184) · [Before (L6181-L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6181-L6184)

```diff
-         const hb = bb.eH,
-           [Bb, Ob, Gb] = hb.SOb(ub.origin[0], ub.origin[1], ub.origin[2]),
-           Ub = hb.FX.fX(Bb, Ob, Gb);
-         Ub && (Ub.yX = !0, Ub.QX = !0, hb.VX(Ub, !1))
+         const kd = dd.Vo,
+           [pd, Nd, Wd] = kd.GNd(Jd.origin[0], Jd.origin[1], Jd.origin[2]),
+           Pd = kd.pO.NO(pd, Nd, Wd);
+         Pd && (Pd.JO = !0, Pd.gO = !0, kd.kO(Pd, !1))
```

#### 466. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6188` → after: `L6188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6188) · [Before (L6188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6188)

```diff
-         bb.faceMask = hb, bb.rangeCount = (0, eL.m)(ub, hb, Bb), bb.first0 = Bb[0], bb.count0 = Bb[1], bb.first1 = Bb[2], bb.count1 = Bb[3]
+         dd.faceMask = kd, dd.rangeCount = (0, UZ.n)(Jd, kd, pd), dd.first0 = pd[0], dd.count0 = pd[1], dd.first1 = pd[2], dd.count1 = pd[3]
```

#### 467. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6201` → after: `L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6201) · [Before (L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6201)

```diff
-         if (!hb) return this.warnOnce(`material:${bb.name}`, `Lite terrain cannot draw material "${bb.name}"; its chunks are skipped.`), null;
+         if (!kd) return this.warnOnce(`material:${dd.name}`, `Lite terrain cannot draw material "${dd.name}"; its chunks are skipped.`), null;
```

#### 468. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6215` → after: `L6215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6215) · [Before (L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6215)

```diff
-             label: `terrain-material-${bb.name}`,
+             label: `terrain-material-${dd.name}`,
```

#### 469. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6222` → after: `L6222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6222) · [Before (L6222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6222)

```diff
-           w6: 0,
+           J_: 0,
```

#### 470. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6229` → after: `L6229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6229) · [Before (L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6229)

```diff
-           console.error(`Lite terrain failed to load the textures of material "${bb.name}"`, ub)
+           console.error(`Lite terrain failed to load the textures of material "${dd.name}"`, Jd)
```

#### 471. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6246` → after: `L6246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6246) · [Before (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6246)

```diff
-             label: `terrain-material-${hb}`,
+             label: `terrain-material-${kd}`,
```

#### 472. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6298` → after: `L6298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6298) · [Before (L6298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6298)

```diff
-             return mO(this.device, bb, null !== (hb = null === Ob || void 0 === Ob ? void 0 : Ob[ub]) && void 0 !== hb ? hb : null, Gb)
+             return EN(this.device, dd, null !== (kd = null === Nd || void 0 === Nd ? void 0 : Nd[Jd]) && void 0 !== kd ? kd : null, Wd)
```

#### 473. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6300` → after: `L6300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6300) · [Before (L6300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6300)

```diff
-           bb.atlasCount = Ub.length, bb.w6 = Ub[0].layerWidth, bb.atlasLayers = Ub[0].layers, ub.animDataPerTex && hb.push({
+           dd.atlasCount = Pd.length, dd.J_ = Pd[0].layerWidth, dd.atlasLayers = Pd[0].layers, Jd.animDataPerTex && kd.push({
```

#### 474. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6314` → after: `L6314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6314) · [Before (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6314)

```diff
-           hb.push(this.sampler), hb.push(tO(this.device, Bb, Ob, Gb, 1, `terrain-${ub}`).createView({
+           kd.push(this.sampler), kd.push(fN(this.device, pd, Nd, Wd, 1, `terrain-${Jd}`).createView({
```

#### 475. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6320` → after: `L6320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6320) · [Before (L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6320)

```diff
-           label: `terrain-material-${bb.model.name}`,
+           label: `terrain-material-${dd.model.name}`,
```

#### 476. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6331` → after: `L6331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6331) · [Before (L6331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6331)

```diff
-           Ob = hb ? hb.vZ : this.vZ,
+           Nd = kd ? kd.EQ : this.EQ,
```

#### 477. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6335` → after: `L6335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6335) · [Before (L6335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6335)

```diff
-             w6: bb.w6,
+             J_: dd.J_,
```

#### 478. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6338` → after: `L6338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6338) · [Before (L6338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6338)

```diff
-             alphaTest: bb.model.transparencyMode === nb.p.alphaTest,
+             alphaTest: dd.model.transparencyMode === ad.r.alphaTest,
```

#### 479. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6345` → after: `L6345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6345) · [Before (L6345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6345)

```diff
-           Lb = "atlas" === bb.texture && bb.model.transparencyMode === nb.p.opaque && GB(Ub.packVariant);
+           Zd = "atlas" === dd.texture && dd.model.transparencyMode === ad.r.opaque && Zp(Pd.packVariant);
```

#### 480. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6353` → after: `L6353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6353) · [Before (L6353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6353)

```diff
-         return bb.customRenderMat ? BB : function(bb, ub) {
+         return dd.customRenderMat ? Wp : function(dd, Jd) {
```

#### 481. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6356` → after: `L6356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6356) · [Before (L6356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6356)

```diff
-           return 0 === hb ? BB : {
+           return 0 === kd ? Wp : {
```

#### 482. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6363` → after: `L6363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6363) · [Before (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6363)

```diff
-         return bb.model.transparencyMode === nb.p.alphaBlend
+         return dd.model.transparencyMode === ad.r.alphaBlend
```

#### 483. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6390` → after: `L6390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6390) · [Before (L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6390)

```diff
-         return void 0 !== Ob ? Ob : (this.startPipeline(Bb, bb, ub, hb), null)
+         return void 0 !== Nd ? Nd : (this.startPipeline(pd, dd, Jd, kd), null)
```

#### 484. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6398` → after: `L6398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6398) · [Before (L6398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6398)

```diff
-         return null !== (Bb = this.builds.get(Ob)) && void 0 !== Bb ? Bb : this.startPipeline(Ob, bb, ub, hb)
+         return null !== (pd = this.builds.get(Nd)) && void 0 !== pd ? pd : this.startPipeline(Nd, dd, Jd, kd)
```

#### 485. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6407` → after: `L6407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6407) · [Before (L6407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6407)

```diff
-             const Ob = (0, xu.g)(bb.packVariant);
+             const Nd = (0, FJ.f)(dd.packVariant);
```

#### 486. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6422` → after: `L6422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6422) · [Before (L6422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6422)

```diff
-             offset: ju.g.Ih,
+             offset: iJ.g.Dk,
```

#### 487. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6461` → after: `L6461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6461) · [Before (L6461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6461)

```diff
-             }, Bb, Ub ? yL : null),
+             }, pd, Pd ? tZ : null),
```

#### 488. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6464` → after: `L6464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6464) · [Before (L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6464)

```diff
-               depthCompare: null !== (Ob = Bb._depthCompare) && void 0 !== Ob ? Ob : hu,
+               depthCompare: null !== (Nd = pd._depthCompare) && void 0 !== Nd ? Nd : pJ,
```

#### 489. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6482` → after: `L6482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6482) · [Before (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6482)

```diff
-           this.compiling -= Zb, console.error(`Lite terrain pipeline ${Gb} failed`, bb), tL(hb, Gb, Sb, bb)
+           this.compiling -= Qd, console.error(`Lite terrain pipeline ${Wd} failed`, dd), fZ(kd, Wd, Cd, dd)
```

#### 490. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6493` → after: `L6493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6493) · [Before (L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6493)

```diff
-           Ob = this.device.createRenderPipelineAsync(hb ? ub : {
+           Nd = this.device.createRenderPipelineAsync(kd ? Jd : {
```

#### 491. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6503` → after: `L6503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6503) · [Before (L6503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6503)

```diff
-             label: `${ub.label}-prepass`,
+             label: `${Jd.label}-prepass`,
```

#### 492. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6521` → after: `L6521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6521) · [Before (L6521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6521)

```diff
-         console.error(`Lite terrain pipeline ${hb} failed`, Bb), tL(ub, hb, null, Bb);
+         console.error(`Lite terrain pipeline ${kd} failed`, pd), fZ(Jd, kd, null, pd);
```

#### 493. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6557` → after: `L6557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6557) · [Before (L6557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6557)

```diff
-           PH: Ub
+           Jl: Pd
```

#### 494. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6559-L6562` → after: `L6559-L6562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6559-L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6559-L6562) · [Before (L6559-L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6559-L6562)

```diff
-         this.lighting = bb.Sp;
-         const Lb = (0, aL.v)(ub);
-         this.dirLightCount = Math.min(Lb, 4), this.vZ = null !== (hb = Ub.vZ) && void 0 !== hb ? hb : null, Lb > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(bb, ub), this.animateMaterials(ub.animTick);
-         const Yb = Ub.Ow,
+         this.lighting = dd.IO;
+         const Zd = (0, QZ.w)(Jd);
+         this.dirLightCount = Math.min(Zd, 4), this.EQ = null !== (kd = Pd.EQ) && void 0 !== kd ? kd : null, Zd > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(dd, Jd), this.animateMaterials(Jd.animTick);
+         const gd = Pd.Rl,
```

#### 495. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6575` → after: `L6575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6575) · [Before (L6575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6575)

```diff
-         const pb = Ub.eH.Abb,
+         const Od = Pd.Vo.Xdd,
```

#### 496. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6578` → after: `L6578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6578) · [Before (L6578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6578)

```diff
-         const lb = !!this.vZ && OB(this.vZ.defineFor("liquid"));
+         const Id = !!this.EQ && Pp(this.EQ.defineFor("liquid"));
```

#### 497. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6580-L6581` → after: `L6580-L6581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6580-L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6580-L6581) · [Before (L6580-L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6580-L6581)

```diff
-         const Wb = null !== (Bb = null === (Ob = Ub.zW) || void 0 === Ob ? void 0 : Ob.visibility) && void 0 !== Bb ? Bb : null,
-           Cb = this.visCull && wb && 0 === this.compiling && null !== Wb && Ub.eH.CBb[0] >= this.visCullMinDistance ? this.target : null,
+         const vd = null !== (pd = null === (Nd = Pd.mG) || void 0 === Nd ? void 0 : Nd.visibility) && void 0 !== pd ? pd : null,
+           xd = this.visCull && ld && 0 === this.compiling && null !== vd && Pd.Vo.Spd[0] >= this.visCullMinDistance ? this.target : null,
```

#### 498. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6592` → after: `L6592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6592) · [Before (L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6592)

```diff
-             if (0 === Zb && (Zb = (0, eL.b)(Hb, ub.renderWidth, ub.renderHeight), Zb !== this.faceFocalPx && (this.faceFocalPx = Zb, Xb = ++this.faceEpoch)), bb.faceEpoch !== Xb) {
+             if (0 === Qd && (Qd = (0, UZ.e)(od, Jd.renderWidth, Jd.renderHeight), Qd !== this.faceFocalPx && (this.faceFocalPx = Qd, Ld = ++this.faceEpoch)), dd.faceEpoch !== Ld) {
```

#### 499. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6595` → after: `L6595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6595) · [Before (L6595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6595)

```diff
-                 hb = (0, eL.h)(bb.planePX, bb.planeNX, bb.planePY, bb.planeNY, bb.planePZ, bb.planeNZ, this.eye[0] - (bb.origin[0] - this.originOffset[0]), this.eye[1] - (bb.origin[1] - this.originOffset[1]), this.eye[2] - (bb.origin[2] - this.originOffset[2]), (0, eL.e)(ub, Zb)) … [truncated]
+                 kd = (0, UZ.k)(dd.planePX, dd.planeNX, dd.planePY, dd.planeNY, dd.planePZ, dd.planeNZ, this.eye[0] - (dd.origin[0] - this.originOffset[0]), this.eye[1] - (dd.origin[1] - this.originOffset[1]), this.eye[2] - (dd.origin[2] - this.originOffset[2]), (0, UZ.i)(Jd, Qd)) … [truncated]
```

#### 500. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6612` → after: `L6612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6612) · [Before (L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6612)

```diff
-           if (Cb && (Number.isNaN(gb.key) && (gb.ci = Math.floor(gb.origin[0] / pb), gb.cj = Math.floor(gb.origin[1] / pb), gb.ck = Math.floor(gb.origin[2] / pb), gb.key = (0, sL.g)(gb.ci, gb.cj, gb.ck)), (!Bb || bb < 1 || Ob || !this.batchDraws(hb, gb.packed, Cb)) && this.visSee … [truncated]
+           if (xd && (Number.isNaN(md.key) && (md.ci = Math.floor(md.origin[0] / Od), md.cj = Math.floor(md.origin[1] / Od), md.ck = Math.floor(md.origin[2] / Od), md.key = (0, DZ.h)(md.ci, md.cj, md.ck)), (!pd || dd < 1 || Nd || !this.batchDraws(kd, md.packed, xd)) && this.visSee … [truncated]
```

#### 501. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6617` → after: `L6617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6617) · [Before (L6617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6617)

```diff
-           if (!(0, QU.c)(ub.frustum, Gb, Lb, Yb, pb)) continue;
+           if (!(0, JZ.b)(Jd.frustum, Wd, Zd, gd, Od)) continue;
```

#### 502. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6626` → after: `L6626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6626) · [Before (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6626)

```diff
-         null === (Gb = (0, zG.w)(Ub)) || void 0 === Gb || Gb.update(ub.frustum, this.originOffset, pb, zb);
+         null === (Wd = (0, bW.z)(Pd)) || void 0 === Wd || Wd.update(Jd.frustum, this.originOffset, Od, Yd);
```

#### 503. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6638-L6639` → after: `L6638-L6639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6638-L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6638-L6639) · [Before (L6638-L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6638-L6639)

```diff
-           eH: Bb
-         } = bb.PH, Ob = Bb.Abb, Gb = this.visPassable, Ub = this.eye[0] + this.originOffset[0], Lb = this.eye[1] + this.originOffset[1], Yb = this.eye[2] + this.originOffset[2];
+           Vo: pd
+         } = dd.Jl, Nd = pd.Xdd, Wd = this.visPassable, Pd = this.eye[0] + this.originOffset[0], Zd = this.eye[1] + this.originOffset[1], gd = this.eye[2] + this.originOffset[2];
```

#### 504. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6641-L6642` → after: `L6641-L6642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6641-L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6641-L6642) · [Before (L6641-L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6641-L6642)

```diff
-         const [Sb, ab] = Bb.CBb, Hb = hb.update(Ub, Lb, Yb, Ob, Sb, ab, Gb);
-         return this.visSweeps = hb.sweeps, Hb ? hb : null
+         const [Cd, Kd] = pd.Spd, od = kd.update(Pd, Zd, gd, Nd, Cd, Kd, Wd);
+         return this.visSweeps = kd.sweeps, od ? kd : null
```

#### 505. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6656` → after: `L6656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6656) · [Before (L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6656)

```diff
-         let Gb = null !== (Bb = this.visBatchDraws.get(bb)) && void 0 !== Bb ? Bb : 0;
+         let Wd = null !== (pd = this.visBatchDraws.get(dd)) && void 0 !== pd ? pd : 0;
```

#### 506. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6658` → after: `L6658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6658) · [Before (L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6658)

```diff
-           Gb |= 1 << Ob | (!!bb.bindGroupLayout && this.canDraw(bb, ub) && !!this.pipelines.get(this.pipelineId(bb, this.programKey(bb, ub), hb)) ? 2 << Ob : 0), this.visBatchDraws.set(bb, Gb)
+           Wd |= 1 << Nd | (!!dd.bindGroupLayout && this.canDraw(dd, Jd) && !!this.pipelines.get(this.pipelineId(dd, this.programKey(dd, Jd), kd)) ? 2 << Nd : 0), this.visBatchDraws.set(dd, Wd)
```

#### 507. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6664` → after: `L6664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6664) · [Before (L6664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6664)

```diff
-           PH: Bb
+           Jl: pd
```

#### 508. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6666-L6667` → after: `L6666-L6667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6666-L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6666-L6667) · [Before (L6666-L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6666-L6667)

```diff
-           eH: Ob
-         } = Bb, Gb = Ob.Abb, Ub = new Set;
+           Vo: Nd
+         } = pd, Wd = Nd.Xdd, Pd = new Set;
```

#### 509. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6671` → after: `L6671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6671) · [Before (L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6671)

```diff
-           Hb = new KO.YX,
+           od = new qN.IL,
```

#### 510. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6681` → after: `L6681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6681) · [Before (L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6681)

```diff
-             Qy: (bb, ub, hb) => Ob.Qy(bb, ub, hb),
+             Yu: (dd, Jd, kd) => Nd.Yu(dd, Jd, kd),
```

#### 511. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6684` → after: `L6684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6684) · [Before (L6684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6684)

```diff
-             bX: Gb,
+             KL: Wd,
```

#### 512. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6686-L6687` → after: `L6686-L6687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6686-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6686-L6687) · [Before (L6686-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6686-L6687)

```diff
-             hasParts: (bb, ub, hb) => Ub.has((0, sL.g)(bb, ub, hb))
-           }, [this.eye[0] + Yb, this.eye[1] + Sb, this.eye[2] + ab], ((bb, ub) => (KO.YX.TransformCoordinatesFromFloatsToRef(bb, ub, .5, Lb, Hb), [Hb.x + Yb, Hb.y + Sb, Hb.z + ab])), (Ob.CBb[0] + 1) * Gb);
+             hasParts: (dd, Jd, kd) => Pd.has((0, DZ.h)(dd, Jd, kd))
+           }, [this.eye[0] + gd, this.eye[1] + Cd, this.eye[2] + Kd], ((dd, Jd) => (qN.IL.TransformCoordinatesFromFloatsToRef(dd, Jd, .5, Zd, od), [od.x + gd, od.y + Cd, od.z + Kd])), (Nd.Spd[0] + 1) * Wd);
```

#### 513. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6689` → after: `L6689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6689) · [Before (L6689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6689)

```diff
-         for (const Zb of wb) this.warnOnce(`vis:${Zb}`, `Lite terrain cave culling skipped chunk ${Zb}, which a ray from the eye reaches.`)
+         for (const Qd of ld) this.warnOnce(`vis:${Qd}`, `Lite terrain cave culling skipped chunk ${Qd}, which a ray from the eye reaches.`)
```

#### 514. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6693` → after: `L6693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6693) · [Before (L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6693)

```diff
-         null !== (bb = this.vZ) && void 0 !== bb && bb.isRunning() && (this.shaderPackInputs ??= new PG(this.device, this.vZ.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.vZ, this.eye, this.lighting))
+         null !== (dd = this.EQ) && void 0 !== dd && dd.isRunning() && (this.shaderPackInputs ??= new hW(this.device, this.EQ.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.EQ, this.eye, this.lighting))
```

#### 515. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6703-L6704` → after: `L6703-L6704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6703-L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6703-L6704) · [Before (L6703-L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6703-L6704)

```diff
-         const Sb = OB(Yb) ? null !== (Bb = null === (Ob = this.sceneDepth) || void 0 === Ob ? void 0 : Ob.view) && void 0 !== Bb ? Bb : this.standIn() : null,
-           ab = Lb ? null !== (Gb = null === (Ub = this.shadowMask) || void 0 === Ub ? void 0 : Ub.view) && void 0 !== Gb ? Gb : this.standIn() : null;
+         const Cd = Pp(gd) ? null !== (pd = null === (Nd = this.sceneDepth) || void 0 === Nd ? void 0 : Nd.view) && void 0 !== pd ? pd : this.standIn() : null,
+           Kd = Zd ? null !== (Wd = null === (Pd = this.shadowMask) || void 0 === Pd ? void 0 : Pd.view) && void 0 !== Wd ? Wd : this.standIn() : null;
```

#### 516. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6717` → after: `L6717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6717) · [Before (L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6717)

```diff
-         return null !== (bb = null === (ub = this.shaderPackInputs) || void 0 === ub ? void 0 : ub.bindGroupFor(null, !0)) && void 0 !== bb ? bb : null
+         return null !== (dd = null === (Jd = this.shaderPackInputs) || void 0 === Jd ? void 0 : Jd.bindGroupFor(null, !0)) && void 0 !== dd ? dd : null
```

#### 517. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6757` → after: `L6757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6757) · [Before (L6757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6757)

```diff
-         return !(!ub || !(0, JL.p)(bb.model)) && (!this.vZ || ! function(bb) {
+         return !(!Jd || !(0, nZ.u)(dd.model)) && (!this.EQ || ! function(dd) {
```

#### 518. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6759-L6760` → after: `L6759-L6760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6759-L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6759-L6760) · [Before (L6759-L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6759-L6760)

```diff
-           return !(null === (ub = (0, xu.g)(bb)) || void 0 === ub || !ub.movesVertices)
-         }(this.shaderPackFields(bb, this.vZ).packVariant))
+           return !(null === (Jd = (0, FJ.f)(dd)) || void 0 === Jd || !Jd.movesVertices)
+         }(this.shaderPackFields(dd, this.EQ).packVariant))
```

#### 519. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6765-L6766` → after: `L6765-L6766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6765-L6766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6765-L6766) · [Before (L6765-L6766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6765-L6766)

```diff
-         if ((0, aL.w)(bb, hb), hb[Bb.fogInfos] = ub.fogEnabled ? ub.fogMode : 0, hb[Bb.fogInfos + 1] = ub.fogStart, hb[Bb.fogInfos + 2] = ub.fogEnd, hb[Bb.fogInfos + 3] = ub.fogDensity, hb.set(ub.fogColour, Bb.fogColour), hb[Bb.outputHeight] = ub.renderHeight, hb.set(ub.ambientCo … [truncated]
-           const ub = (0, HL.h)(bb.gX, bb.BX, bb.OX);
+         if ((0, QZ.z)(dd, kd), kd[pd.fogInfos] = Jd.fogEnabled ? Jd.fogMode : 0, kd[pd.fogInfos + 1] = Jd.fogStart, kd[pd.fogInfos + 2] = Jd.fogEnd, kd[pd.fogInfos + 3] = Jd.fogDensity, kd.set(Jd.fogColour, pd.fogColour), kd[pd.outputHeight] = Jd.renderHeight, kd.set(Jd.ambientCo … [truncated]
+           const Jd = (0, LZ.h)(dd.DL, dd.QL, dd.LL);
```

#### 520. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6777` → after: `L6777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6777) · [Before (L6777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6777)

```diff
-         return !("atlas" === bb.texture && !ub) || (this.warnOnce(`stride:${bb.id}`, `Lite terrain: material "${bb.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
+         return !("atlas" === dd.texture && !Jd) || (this.warnOnce(`stride:${dd.id}`, `Lite terrain: material "${dd.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
```

#### 521. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6785` → after: `L6785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6785) · [Before (L6785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6785)

```diff
-           Ob && (bb.setPipeline(Ob), bb.setBindGroup(2, Bb.material.bindGroup), this.vZ && this.bindShaderPackInputs(bb, Bb.material, this.vZ, this.prepassOf.has(Ob)), hb += this.drawBatch(bb, Bb))
+           Nd && (dd.setPipeline(Nd), dd.setBindGroup(2, pd.material.bindGroup), this.EQ && this.bindShaderPackInputs(dd, pd.material, this.EQ, this.prepassOf.has(Nd)), kd += this.drawBatch(dd, pd))
```

#### 522. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6794` → after: `L6794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6794) · [Before (L6794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6794)

```diff
-           Ob = this.vZ;
+           Nd = this.EQ;
```

#### 523. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6831` → after: `L6831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6831) · [Before (L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6831)

```diff
-           Lb && (Lb !== Bb && (bb.setPipeline(Lb), Bb = Lb, this.vZ && this.bindShaderPackInputs(bb, Ub, this.vZ)), Ub !== Ob && (bb.setBindGroup(2, Ub.bindGroup), Ob = Ub), hb += this.geometry.draw(bb, Gb, this.lighting))
+           Zd && (Zd !== pd && (dd.setPipeline(Zd), pd = Zd, this.EQ && this.bindShaderPackInputs(dd, Pd, this.EQ)), Pd !== Nd && (dd.setBindGroup(2, Pd.bindGroup), Nd = Pd), kd += this.geometry.draw(dd, Wd, this.lighting))
```

#### 524. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6838` → after: `L6838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6838) · [Before (L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6838)

```diff
-       return `${zB(bb)}|${bb.atlasLayers}|${bb.w6}|${ub}|${hb}|${Bb._colorFormat}|${Bb._depthStencilFormat}|${Bb._sampleCount}`
+       return `${mp(dd)}|${dd.atlasLayers}|${dd.J_}|${Jd}|${kd}|${pd._colorFormat}|${pd._depthStencilFormat}|${pd._sampleCount}`
```

#### 525. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6916` → after: `L6916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6916) · [Before (L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6916)

```diff
-         return (bb.zq !== this.builtVersion || this.blockCaster.length !== ub) && (this.build(bb, ub), !0)
+         return (dd.rD !== this.builtVersion || this.blockCaster.length !== Jd) && (this.build(dd, Jd), !0)
```

#### 526. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6919` → after: `L6919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6919) · [Before (L6919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6919)

```diff
-         this.builtVersion = bb.zq;
+         this.builtVersion = dd.rD;
```

#### 527. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6934` → after: `L6934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6934) · [Before (L6934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6934)

```diff
-         const hb = bb.B5[ub];
+         const kd = dd.B_[Jd];
```

#### 528. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6939` → after: `L6939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6939) · [Before (L6939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6939)

```diff
-           return this.warnOnce(`Sun shadows: no caster option for block ${ub}: ${Bb instanceof Error?Bb.message:String(Bb)}`), null
+           return this.warnOnce(`Sun shadows: no caster option for block ${Jd}: ${pd instanceof Error?pd.message:String(pd)}`), null
```

#### 529. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6949` → after: `L6949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6949) · [Before (L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6949)

```diff
-             key: `planes:${JSON.stringify(bb)}`,
+             key: `planes:${JSON.stringify(dd)}`,
```

#### 530. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6953-L6954` → after: `L6953-L6954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6953-L6954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6953-L6954) · [Before (L6953-L6954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6953-L6954)

```diff
-         if (bb.Iw[ub]) return null;
-         const Ob = bb.qw[ub] ? bb.Mq(ub) : null;
+         if (dd.Al[Jd]) return null;
+         const Nd = dd.JQ[Jd] ? dd.zD(Jd) : null;
```

#### 531. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6972` → after: `L6972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6972) · [Before (L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6972)

```diff
-           }(bb) ? ku : bb.every((bb => 0 === bb)) ? null : {
+           }(dd) ? zJ : dd.every((dd => 0 === dd)) ? null : {
```

#### 532. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6974` → after: `L6974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6974) · [Before (L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6974)

```diff
-             key: `shape:${bb.join(",")}`,
+             key: `shape:${dd.join(",")}`,
```

#### 533. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6978` → after: `L6978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6978) · [Before (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6978)

```diff
-         if (bb.Hr[ub] || !bb.iX[ub]) return null;
+         if (dd.hq[Jd] || !dd.TL[Jd]) return null;
```

#### 534. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6980` → after: `L6980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6980) · [Before (L6980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6980)

```diff
-           const Ob = bb.vX[6 * ub + Bb];
+           const Nd = dd.EL[6 * Jd + pd];
```

#### 535. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6983` → after: `L6983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6983) · [Before (L6983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6983)

```diff
-             if (!bb || bb.qX) return null;
+             if (!dd || dd.AL) return null;
```

#### 536. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6985-L6987` → after: `L6985-L6987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6985-L6987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L6985-L6987) · [Before (L6985-L6987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L6985-L6987)

```diff
-               Z2: ub,
-               w6: hb,
-               kR: Bb
+               Q0: Jd,
+               J_: kd,
+               u9: pd
```

#### 537. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7006` → after: `L7006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7006) · [Before (L7006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7006)

```diff
-           }(bb.PX(Ob)), hb.set(Ob, Gb)), Gb
+           }(dd.wL(Nd)), kd.set(Nd, Wd)), Wd
```

#### 538. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7011` → after: `L7011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7011) · [Before (L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7011)

```diff
-             return null !== (ub = null === bb || void 0 === bb ? void 0 : bb.width) && void 0 !== ub ? ub : 1
+             return null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.width) && void 0 !== Jd ? Jd : 1
```

#### 539. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7014` → after: `L7014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7014) · [Before (L7014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7014)

```diff
-           Yb = Gb.map((bb => null === bb ? Lb : QL(bb.alpha, bb.width, bb.width, Ub)));
+           gd = Wd.map((dd => null === dd ? Zd : Jg(dd.alpha, dd.width, dd.width, Pd)));
```

#### 540. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7017` → after: `L7017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7017) · [Before (L7017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7017)

```diff
-           key: `cutout:${Ub}:${Yb.map((bb=>bb.join(","))).join("|")}`,
+           key: `cutout:${Pd}:${gd.map((dd=>dd.join(","))).join("|")}`,
```

#### 541. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7062` → after: `L7062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7062) · [Before (L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7062)

```diff
-         return ub || (ub = this.loadTexture(bb).catch((ub => (this.warn(`Sun shadows: no mask for ${bb}: ${ub instanceof Error?ub.message:String(ub)}`), null))), this.textures.set(bb, ub)), ub
+         return Jd || (Jd = this.loadTexture(dd).catch((Jd => (this.warn(`Sun shadows: no mask for ${dd}: ${Jd instanceof Error?Jd.message:String(Jd)}`), null))), this.textures.set(dd, Jd)), Jd
```

#### 542. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7076` → after: `L7076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7076) · [Before (L7076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7076)

```diff
-     var uY = hb(2647);
+     var Ng = kd(2729);
```

#### 543. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7079` → after: `L7079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7079) · [Before (L7079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7079)

```diff
-       return !bb.yX && !bb.JC && !bb.KX
+       return !dd.JO && !dd.Qq && !dd.mL
```

#### 544. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7118` → after: `L7118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7118) · [Before (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7118)

```diff
-           bb && (bb.tC || bb.dX !== this.slotVersion[Lb]) && this.enqueue(Lb)
+           dd && (dd.lq || dd.jL !== this.slotVersion[Zd]) && this.enqueue(Zd)
```

#### 545. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7148-L7149` → after: `L7148-L7149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7148-L7149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7148-L7149) · [Before (L7148-L7149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7148-L7149)

```diff
-               if (ab && !ab.tC && ab.i === hb && ab.j === Lb && ab.k === Yb) continue;
-               const Hb = null !== (Gb = bb(hb, Lb, Yb)) && void 0 !== Gb ? Gb : null;
+               if (Kd && !Kd.lq && Kd.i === kd && Kd.j === Zd && Kd.k === gd) continue;
+               const od = null !== (Wd = dd(kd, Zd, gd)) && void 0 !== Wd ? Wd : null;
```

#### 546. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7172` → after: `L7172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7172) · [Before (L7172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7172)

```diff
-           !ub || ub.tC || hY(ub) ? (this.queued[bb] = 0, this.encodeSlot(bb), hb++) : Bb.push(bb)
+           !Jd || Jd.lq || Wg(Jd) ? (this.queued[dd] = 0, this.encodeSlot(dd), kd++) : pd.push(dd)
```

#### 547. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7197` → after: `L7197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7197) · [Before (L7197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7197)

```diff
-         const Yb = null !== (ub = null === (hb = this.slotPool[bb]) || void 0 === hb ? void 0 : hb.length) && void 0 !== ub ? ub : 0;
+         const gd = null !== (Jd = null === (kd = this.slotPool[dd]) || void 0 === kd ? void 0 : kd.length) && void 0 !== Jd ? Jd : 0;
```

#### 548. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7201-L7202` → after: `L7201-L7202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7201-L7202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7201-L7202) · [Before (L7201-L7202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7201-L7202)

```diff
-         if (!Sb || Sb.tC || !Sb.Sw) return this.slotChunk[bb] = null, this.slotVersion[bb] = -1, ab.fill(0), this.writeRecord(bb, ab), void(Yb > 0 && this.requeueStarved());
-         this.slotVersion[bb] = Sb.dX;
+         if (!Cd || Cd.lq || !Cd.ql) return this.slotChunk[dd] = null, this.slotVersion[dd] = -1, Kd.fill(0), this.writeRecord(dd, Kd), void(gd > 0 && this.requeueStarved());
+         this.slotVersion[dd] = Cd.jL;
```

#### 549. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7204` → after: `L7204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7204) · [Before (L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7204)

```diff
-         ab[0] = Sb.i, ab[1] = Sb.j, ab[2] = Sb.k, ab[3] = Hb, this.writeRecord(bb, ab), null === (Bb = this.encoded) || void 0 === Bb || Bb.call(this, Sb), Lb && (null !== (Ob = null === (Gb = this.slotPool[bb]) || void 0 === Gb ? void 0 : Gb.length) && void 0 !== Ob ? Ob : 0) <  … [truncated]
+         Kd[0] = Cd.i, Kd[1] = Cd.j, Kd[2] = Cd.k, Kd[3] = od, this.writeRecord(dd, Kd), null === (pd = this.encoded) || void 0 === pd || pd.call(this, Cd), Zd && (null !== (Nd = null === (Wd = this.slotPool[dd]) || void 0 === Wd ? void 0 : Wd.length) && void 0 !== Nd ? Nd : 0) <  … [truncated]
```

#### 550. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7207` → after: `L7207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7207) · [Before (L7207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7207)

```diff
-         if (bb.qZ) return Ju;
+         if (dd.AQ) return XJ;
```

#### 551. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7213` → after: `L7213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7213) · [Before (L7213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7213)

```diff
-           } = bb.Sw,
+           } = dd.ql,
```

#### 552. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7228` → after: `L7228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7228) · [Before (L7228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7228)

```diff
-             Bb = bb.LZ[lb],
+             pd = dd.IQ[Id],
```

#### 553. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7247` → after: `L7247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7247) · [Before (L7247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7247)

```diff
-         return 0 === pb ? Ju : 32768 === ob ? eu | Ab << 8 : (this.writePoolEntries(ub, hb, Bb), this.writeVoxels(mu + ub * Iu, wb), Nu | Ab << 8)
+         return 0 === Od ? XJ : 32768 === ed ? fJ | Rd << 8 : (this.writePoolEntries(Jd, kd, pd), this.writeVoxels(DJ + Jd * TJ, ld), nJ | Rd << 8)
```

#### 554. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7286` → after: `L7286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7286) · [Before (L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7286)

```diff
-           bb && !bb.tC && bb.Sw && (bb.dX === this.slotVersion[Ob] || hY(bb)) && this.encodeSlot(Ob, this.victimScratch, !1)
+           dd && !dd.lq && dd.ql && (dd.jL === this.slotVersion[Nd] || Wg(dd)) && this.encodeSlot(Nd, this.victimScratch, !1)
```

#### 555. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7295` → after: `L7295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7295) · [Before (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7295)

```diff
-     var GY = hb(37110);
+     var gg = kd(37682);
```

#### 556. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7298` → after: `L7298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7298) · [Before (L7298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7298)

```diff
-         this.device = bb, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new ph, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.eH = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = bb.createBuffer( … [truncated]
+         this.device = dd, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new Rk, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.Vo = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = dd.createBuffer( … [truncated]
```

#### 557. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7313` → after: `L7313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7313) · [Before (L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7313)

```diff
-         Bb.kw(bb, ub), hb.forEachSunShadowCaster((bb => {
+         pd.ZQ(dd, Jd), kd.forEachSunShadowCaster((dd => {
```

#### 558. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7332` → after: `L7332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7332) · [Before (L7332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7332)

```diff
-           eH: Bb,
+           Vo: pd,
```

#### 559. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7339` → after: `L7339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7339) · [Before (L7339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7339)

```diff
-           for (let Yb = 0; Yb < Ub; Yb++) Lb ? (Ah(Gb, 16 * Yb, Bb, Ob, this.eH), hb.add(ub, this.eH)) : hb.add(ub, Gb, 16 * Yb);
+           for (let gd = 0; gd < Pd; gd++) Zd ? (Gk(Wd, 16 * gd, pd, Nd, this.Vo), kd.add(Jd, this.Vo)) : kd.add(Jd, Wd, 16 * gd);
```

#### 560. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7351` → after: `L7351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7351) · [Before (L7351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7351)

```diff
-         const Lb = `${hb?Bb:-1-Bb}:${Ob}:${null!==Gb&&void 0!==Gb?Gb:""}`;
+         const Zd = `${kd?pd:-1-pd}:${Nd}:${null!==Wd&&void 0!==Wd?Wd:""}`;
```

#### 561. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7412` → after: `L7412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7412) · [Before (L7412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7412)

```diff
-           }((0, GY.j)(Gb, bb.vertexCount), ub ? bb.indexData : null, hb, Bb, Ob) : null;
+           }((0, gg.d)(Wd, dd.vertexCount), Jd ? dd.indexData : null, kd, pd, Nd) : null;
```

#### 562. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7446` → after: `L7446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7446) · [Before (L7446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7446)

```diff
-         this.device = bb, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(Wh.i), this.entities = void 0, this.entityStandIn =  … [truncated]
+         this.device = dd, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(qk.r), this.entities = void 0, this.entityStandIn =  … [truncated]
```

#### 563. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7459` → after: `L7459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7459) · [Before (L7459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7459)

```diff
-         const [hb, Bb, Ob] = Wh.l;
+         const [kd, pd, Nd] = qk.u;
```

#### 564. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7481` → after: `L7481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/262.js#L7481) · [Before (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/262.js#L7481)

```diff
-           size: Wh.i,
+           size: qk.r,
```
