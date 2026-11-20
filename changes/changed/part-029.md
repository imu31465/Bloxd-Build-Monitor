# Changed — Bundle Modifications Report (Part 029 / 067)

- **Updated at**: `2026-11-20T22:47 JST`
- **Part**: `29 / 67` (**364** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 028](part-028.md) · [Part 030 →](part-030.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/325.js` (7rj44.0704ff61 → qepqb8.0352199c · continued)

- **File**: `bundles/bloxd.io/chunks/js/325.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5)

#### 10. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L48-L69` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/325.js#L47-L50) · [Before (L48-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/325.js#L48-L69)

```diff
-     var Fz = sz(39041),
-       Wz = sz(41290),
-       Xz = sz(41292),
-       Oz = sz(41301),
-       oz = sz(41470),
-       vz = sz(41476),
-       Uz = sz(41479),
-       Kz = sz(41336),
-       uz = sz(41314),
-       Nz = sz(41483),
-       bz = sz(41491),
-       wz = sz(41498);
-     const Dz = "clusteredLightingCompute",
-       gz = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nviewDirectionW: vec3f,\nvNormal: vec3f,\nlightData: vec4f,\nsliceRange: vec2u,\nglossiness: f32\n)->lightingInfo {var re … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Dz] || (Fz.e.IncludesShadersStoreWGSL[Dz] = gz);
-     const Hz = {
- ... (6 more removed lines; see GitHub link above)
+     var hv = Pv(39162);
+     const Sv = "sceneUboDeclaration",
+       ev = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 11. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L73-L87` → after: `L54-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L54-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/325.js#L54-L61) · [Before (L73-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/325.js#L73-L87)

```diff
-     };
-     var Yz = sz(41505),
-       xz = sz(41510);
-     const mz = "fresnelFunction",
-       Jz = "#ifdef FRESNEL\nfn computeFresnelTerm(viewDirection: vec3f,worldNormal: vec3f,bias: f32,power: f32)->f32\n{let fresnelTerm: f32=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
-     Fz.e.IncludesShadersStoreWGSL[mz] || (Fz.e.IncludesShadersStoreWGSL[mz] = Jz);
-     const Iz = {
-       name: mz,
-       shader: Jz
-     };
-     var Cz = sz(41516),
-       ez = sz(41519),
-       Zz = sz(41523),
-       Gz = sz(41531),
-       Tz = sz(41536),
+     }
+   },
+   61304: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       greasedLineVertexShaderWGSL: () => Tv
+     });
+     var hv = Pv(39162),
+       Sv = Pv(41587),
```

#### 12. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L89-L112` → after: `L63-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L63-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/325.js#L63-L69) · [Before (L89-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/325.js#L89-L112)

```diff
-       jz = sz(41548),
-       Az = sz(41374),
-       yz = sz(41556),
-       Mz = sz(41562),
-       dz = sz(41569),
-       hz = sz(41572);
-     const Qz = "defaultFragmentAlpha",
-       kz = "#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpa … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Qz] || (Fz.e.IncludesShadersStoreWGSL[Qz] = kz);
-     const iz = {
-       name: Qz,
-       shader: kz
-     };
-     var Lz = sz(41581),
-       lz = sz(41587),
-       nz = sz(41589),
- ... (8 more removed lines; see GitHub link above)
+       gv = Pv(41550),
+       pv = Pv(41677);
+     const dv = "greasedLineVertexShader",
+       Nv = "#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute grl_widths: f32;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute grl_offsets: vec3f; \n#endif\nattribute grl_colorPointers: f32;attribute position: vec3f;varying grlCoun … [truncated]
+     hv.d.ShadersStoreWGSL[dv] || (hv.d.ShadersStoreWGSL[dv] = Nv);
+     const lv = [Sv.b, ev.e, gv.c, pv.b];
+     for (const Wv of lv) hv.d.IncludesShadersStoreWGSL[Wv.name] || (hv.d.IncludesShadersStoreWGSL[Wv.name] = Wv.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/326.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/326.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a)

#### 1. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/326.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/326.js#L4)

```diff
-   41314: (zz, tz, sz) => {
+   41557: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L8-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/326.js#L8-L12) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/326.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "helperFunctions",
-       Xz = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     Pv(41541), Pv(41550);
+     const Sv = "defaultUboDeclaration",
+       ev = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 3. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L17` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/326.js#L18) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/326.js#L17)

```diff
-   60777: (zz, tz, sz) => {
+   41572: (vv, zv, Pv) => {
```

#### 4. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L19` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/326.js#L20) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/326.js#L19)

```diff
-       d: () => Oz
+       c: () => gv
```

#### 5. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L21-L24` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/326.js#L22-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/326.js#L21-L24)

```diff
-     var Fz = sz(39041);
-     const Wz = "pbrBRDFFunctions",
-       Xz = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "helperFunctions",
+       ev = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 6. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L30` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/326.js#L31) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/326.js#L30)

```diff
-   41290: (zz, tz, sz) => {
+   41541: (vv, zv, Pv) => {
```

#### 7. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L32` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/326.js#L33) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/326.js#L32)

```diff
-       c: () => Oz
+       e: () => gv
```

#### 8. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L34` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/326.js#L35) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/326.js#L34)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 9. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L37` → after: `L38-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L38-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/326.js#L38-L112) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/326.js#L37)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41728: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       defaultPixelShaderWGSL: () => Xv
+     });
+     var hv = Pv(39162),
+       Sv = Pv(41541),
+       ev = Pv(41550),
+       gv = Pv(41557),
+       pv = Pv(41737),
+       dv = Pv(41742),
+ ... (59 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/327.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/327.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042)

#### 1. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/327.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/327.js#L4)

```diff
-   41412: (zz, tz, sz) => {
+   41572: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/327.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/327.js#L6)

```diff
-       d: () => Oz
+       c: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/327.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/327.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "bakedVertexAnimation",
-       Xz = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "helperFunctions",
+       ev = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/327.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/327.js#L17)

```diff
-   41323: (zz, tz, sz) => {
+   61058: (vv, zv, Pv) => {
```

#### 5. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/327.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/327.js#L19)

```diff
-       c: () => Oz
+       b: () => gv
```

#### 6. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/327.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/327.js#L21-L24)

```diff
-     var Fz = sz(39041);
-     const Wz = "bakedVertexAnimationDeclaration",
-       Xz = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "pbrBRDFFunctions",
+       ev = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 7. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L30-L43` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/327.js#L30) · [Before (L30-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/327.js#L30-L43)

```diff
-   41321: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "bonesDeclaration",
-       Xz = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   41404: (zz, tz, sz) => {
+   41541: (vv, zv, Pv) => {
```

#### 8. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L47-L190` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/327.js#L34) · [Before (L47-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/327.js#L47-L190)

```diff
-     var Fz = sz(39041);
-     const Wz = "bonesVertex",
-       Xz = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   41429: (zz, tz, sz) => {
-     sz.d(tz, {
-       e: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "bumpVertex",
-       Xz = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
- ... (128 more removed lines; see GitHub link above)
+     var hv = Pv(39162);
```

#### 9. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L193-L223` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/327.js#L37) · [Before (L193-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/327.js#L193-L223)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   60981: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       geometryVertexShaderWGSL: () => xz
-     });
-     var Fz = sz(39041),
-       Wz = sz(41321),
-       Xz = sz(41323),
-       Oz = sz(41362),
-       oz = sz(41370),
-       vz = sz(41326),
- ... (15 more removed lines; see GitHub link above)
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/328.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/328.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81)

#### 1. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L4)

```diff
-   41412: (zz, tz, sz) => {
+   41684: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L6)

```diff
-       d: () => Oz
+       e: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L8)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 4. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L11)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 5. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L17)

```diff
-   41323: (zz, tz, sz) => {
+   41585: (vv, zv, Pv) => {
```

#### 6. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L19)

```diff
-       c: () => Oz
+       b: () => gv
```

#### 7. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L21)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 8. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L24)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 9. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L30)

```diff
-   41321: (zz, tz, sz) => {
+   41579: (vv, zv, Pv) => {
```

#### 10. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L34)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 11. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L37)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 12. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L43)

```diff
-   41404: (zz, tz, sz) => {
+   41682: (vv, zv, Pv) => {
```

#### 13. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L45)

```diff
-       e: () => Oz
+       d: () => gv
```

#### 14. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L47)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 15. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L50)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 16. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L56)

```diff
-   41436: (zz, tz, sz) => {
+   41703: (vv, zv, Pv) => {
```

#### 17. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L60-L63)

```diff
-     var Fz = sz(39041);
-     const Wz = "clipPlaneVertex",
-       Xz = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bumpVertex",
+       ev = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 18. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L69)

```diff
-   41344: (zz, tz, sz) => {
+   41709: (vv, zv, Pv) => {
```

#### 19. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L71)

```diff
-       d: () => Oz
+       b: () => gv
```

#### 20. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L73-L76)

```diff
-     var Fz = sz(39041);
-     const Wz = "clipPlaneVertexDeclaration",
-       Xz = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "clipPlaneVertex",
+       ev = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 21. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L82)

```diff
-   41444: (zz, tz, sz) => {
+   41613: (vv, zv, Pv) => {
```

#### 22. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L84)

```diff
-       d: () => Oz
+       c: () => gv
```

#### 23. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L86-L89` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L86-L89) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L86-L89)

```diff
-     var Fz = sz(39041);
-     const Wz = "fogVertex",
-       Xz = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "clipPlaneVertexDeclaration",
+       ev = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 24. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L95)

```diff
-   41351: (zz, tz, sz) => {
+   61066: (vv, zv, Pv) => {
```

#### 25. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L99-L102` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L99-L102) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L99-L102)

```diff
-     var Fz = sz(39041);
-     const Wz = "fogVertexDeclaration",
-       Xz = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "harmonicsFunctions",
+       ev = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 26. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L108)

```diff
-   41326: (zz, tz, sz) => {
+   41587: (vv, zv, Pv) => {
```

#### 27. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L110)

```diff
-       c: () => Oz
+       b: () => gv
```

#### 28. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L112)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 29. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L115` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L115) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L115)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 30. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L121)

```diff
-   41396: (zz, tz, sz) => {
+   41677: (vv, zv, Pv) => {
```

#### 31. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L125)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 32. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L128-L154` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L128) · [Before (L128-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L128-L154)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   41356: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "lightVxUboDeclaration",
-       Xz = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
-     const Oz = {
-       name: Wz,
- ... (11 more removed lines; see GitHub link above)
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 33. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L160` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L134) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L160)

```diff
-   41464: (zz, tz, sz) => {
+   41668: (vv, zv, Pv) => {
```

#### 34. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L164-L203` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L138) · [Before (L164-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L164-L203)

```diff
-     var Fz = sz(39041);
-     const Wz = "logDepthVertex",
-       Xz = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   41336: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "mainUVVaryingDeclaration",
-       Xz = "#ifdef MAINUV{X}\nvarying vMainUV{X}: vec2f;\n#endif\n";
- ... (24 more removed lines; see GitHub link above)
+     var hv = Pv(39162);
```

#### 35. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L206` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L141) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L206)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 36. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L212` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L147) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L212)

```diff
-   41370: (zz, tz, sz) => {
+   41641: (vv, zv, Pv) => {
```

#### 37. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L216` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L151) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L216)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 38. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L219` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L154) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L219)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 39. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L225` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L160) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L225)

```diff
-   41390: (zz, tz, sz) => {
+   41665: (vv, zv, Pv) => {
```

#### 40. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L227` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L162) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L227)

```diff
-       d: () => Oz
+       e: () => gv
```

#### 41. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L229` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L164) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L229)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 42. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L232` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L167) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L232)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 43. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L238` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L173) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L238)

```diff
-   41362: (zz, tz, sz) => {
+   41632: (vv, zv, Pv) => {
```

#### 44. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L240` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L175) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L240)

```diff
-       d: () => Oz
+       b: () => gv
```

#### 45. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L242` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L177) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L242)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 46. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L245-L336` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L180) · [Before (L245-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L245-L336)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   41414: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "prePassVertex",
-       Xz = "#ifdef PREPASS_DEPTH\nvertexOutputs.vViewPos=(scene.view*worldPos).rgb;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvertexOutputs.vNormViewDepth=((scene.view*worldPos).z-uniforms.cameraInfo.x)/(uniforms.cameraInfo.y-uniforms.cameraInfo.x);\n#endif\n#ifdef PREPASS_L … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
-     const Oz = {
-       name: Wz,
- ... (76 more removed lines; see GitHub link above)
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 47. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L342` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L186) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L342)

```diff
-   41455: (zz, tz, sz) => {
+   41541: (vv, zv, Pv) => {
```

#### 48. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L346-L375` → after: `L190-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L190-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/328.js#L190-L223) · [Before (L346-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/328.js#L346-L375)

```diff
-     var Fz = sz(39041);
-     const Wz = "vertexColorMixing",
-       Xz = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertex … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   41379: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "vertexPullingDeclaration",
-       Xz = "#ifdef USE_VERTEX_PULLING\n#ifdef VERTEX_PULLING_USE_INDEX_BUFFER\nvar<storage,read> indices : array<u32>;\n#endif\nvar<storage,read> position : array<f32>;uniform vp_position_info : vec4f;\n#ifdef NORMAL\nvar<storage,read> normal : array<f32>;uniform vp_normal_info : … [truncated]
- ... (14 more removed lines; see GitHub link above)
+     var hv = Pv(39162);
+     const Sv = "sceneUboDeclaration",
+       ev = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   61260: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       geometryVertexShaderWGSL: () => fv
+     });
+     var hv = Pv(39162),
+       Sv = Pv(41579),
+       ev = Pv(41585),
+ ... (18 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/329.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/329.js` (58 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab)

#### 1. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L4)

```diff
-   41562: (zz, tz, sz) => {
+   41684: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "clipPlaneFragment",
-       Xz = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bakedVertexAnimation",
+       ev = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 3. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L17)

```diff
-   41548: (zz, tz, sz) => {
+   41585: (vv, zv, Pv) => {
```

#### 4. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L19)

```diff
-       c: () => Oz
+       b: () => gv
```

#### 5. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L21-L24)

```diff
-     var Fz = sz(39041);
-     const Wz = "clipPlaneFragmentDeclaration",
-       Xz = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bakedVertexAnimationDeclaration",
+       ev = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 6. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L30)

```diff
-   41498: (zz, tz, sz) => {
+   41579: (vv, zv, Pv) => {
```

#### 7. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L32)

```diff
-       c: () => Oz
+       b: () => gv
```

#### 8. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L34-L37)

```diff
-     var Fz = sz(39041);
-     const Wz = "clusteredLightingFunctions",
-       Xz = "struct ClusteredLight {vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\nvLightDirection: vec4f,\nvLightFalloff: vec4f,}\nfn getClusteredLight(lightDataTexture: texture_2d<f32>,index: u32)->ClusteredLight {return ClusteredLight(\ntextureLoad(lightData … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bonesDeclaration",
+       ev = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 9. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L43)

```diff
-   41581: (zz, tz, sz) => {
+   41682: (vv, zv, Pv) => {
```

#### 10. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L47-L50)

```diff
-     var Fz = sz(39041);
-     const Wz = "depthPrePass",
-       Xz = "#ifdef DEPTHPREPASS\n#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)\nfragmentOutputs.color= vec4f(0.,0.,0.,1.0);\n#endif\n#ifndef DEPTHPREPASS_SKIP_EARLY_RETURN\nreturn fragmentOutputs;\n#endif\n#endif\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bonesVertex",
+       ev = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 11. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L56)

```diff
-   41596: (zz, tz, sz) => {
+   41709: (vv, zv, Pv) => {
```

#### 12. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L60-L63)

```diff
-     var Fz = sz(39041);
-     const Wz = "fogFragment",
-       Xz = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "clipPlaneVertex",
+       ev = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 13. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L69)

```diff
-   41556: (zz, tz, sz) => {
+   41613: (vv, zv, Pv) => {
```

#### 14. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L71)

```diff
-       e: () => Oz
+       c: () => gv
```

#### 15. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L73-L76)

```diff
-     var Fz = sz(39041);
-     const Wz = "fogFragmentDeclaration",
-       Xz = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "clipPlaneVertexDeclaration",
+       ev = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 16. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L82)

```diff
-   41519: (zz, tz, sz) => {
+   41717: (vv, zv, Pv) => {
```

#### 17. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L84)

```diff
-       b: () => Oz
+       c: () => gv
```

#### 18. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L86-L89` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L86-L89) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L86-L89)

```diff
-     var Fz = sz(39041);
-     const Wz = "imageProcessingDeclaration",
-       Xz = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "fogVertex",
+       ev = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 19. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L95)

```diff
-   41523: (zz, tz, sz) => {
+   41618: (vv, zv, Pv) => {
```

#### 20. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L99-L102` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L99-L102) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L99-L102)

```diff
-     var Fz = sz(39041);
-     const Wz = "imageProcessingFunctions",
-       Xz = "#if TONEMAPPING==3\nconst PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;resu … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "fogVertexDeclaration",
+       ev = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 21. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L108)

```diff
-   41483: (zz, tz, sz) => {
+   41587: (vv, zv, Pv) => {
```

#### 22. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L110)

```diff
-       e: () => Oz
+       b: () => gv
```

#### 23. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L112-L115` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L112-L115) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L112-L115)

```diff
-     var Fz = sz(39041);
-     const Wz = "lightUboDeclaration",
-       Xz = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "instancesDeclaration",
+       ev = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 24. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L121)

```diff
-   41374: (zz, tz, sz) => {
+   41677: (vv, zv, Pv) => {
```

#### 25. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L123)

```diff
-       d: () => Oz
+       b: () => gv
```

#### 26. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L125-L128` → after: `L125-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L125-L128) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L125-L128)

```diff
-     var Fz = sz(39041);
-     const Wz = "logDepthDeclaration",
-       Xz = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "instancesVertex",
+       ev = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 27. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L134` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L134) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L134)

```diff
-   41589: (zz, tz, sz) => {
+   41626: (vv, zv, Pv) => {
```

#### 28. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L136)

```diff
-       b: () => Oz
+       e: () => gv
```

#### 29. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L138-L141` → after: `L138-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L138-L141) · [Before (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L138-L141)

```diff
-     var Fz = sz(39041);
-     const Wz = "logDepthFragment",
-       Xz = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "lightVxUboDeclaration",
+       ev = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 30. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L147` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L147) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L147)

```diff
-   41491: (zz, tz, sz) => {
+   41647: (vv, zv, Pv) => {
```

#### 31. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L149` → after: `L149-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L149-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L149-L162) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L149)

```diff
-       d: () => Oz
+       e: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "logDepthDeclaration",
+       ev = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41726: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => gv
```

#### 32. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L151-L154` → after: `L164-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L164-L167) · [Before (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L151-L154)

```diff
-     var Fz = sz(39041);
-     const Wz = "ltcHelperFunctions",
-       Xz = "fn LTCUv(N: vec3f,V: vec3f,roughness: f32)->vec2f {var LUTSIZE: f32=64.0;var LUTSCALE: f32=( LUTSIZE-1.0 )/LUTSIZE;var LUTBIAS:f32=0.5/LUTSIZE;var dotNV:f32=saturate( dot( N,V ) );var uv:vec2f=vec2f( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+LUTBIAS;return uv;}\nfn … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "logDepthVertex",
+       ev = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 33. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L160` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L173) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L160)

```diff
-   41336: (zz, tz, sz) => {
+   41596: (vv, zv, Pv) => {
```

#### 34. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L164` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L177) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L164)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 35. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L167` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L180) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L167)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 36. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L173` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L186) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L173)

```diff
-   41604: (zz, tz, sz) => {
+   41550: (vv, zv, Pv) => {
```

#### 37. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L175` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L188) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L175)

```diff
-       d: () => Oz
+       c: () => gv
```

#### 38. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L177-L180` → after: `L190-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L190-L193) · [Before (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L177-L180)

```diff
-     var Fz = sz(39041);
-     const Wz = "meshBlendTagFragmentOutput",
-       Xz = "#if SCENE_MRT_COUNT>{X}\n#if defined(PREPASS_MESH_BLEND_TAG) && PREPASS_MESH_BLEND_TAG_INDEX=={X}\nfragmentOutputs.fragData{X}=meshBlendTagOutput;\n#else\nfragmentOutputs.fragData{X}=fragData[{X}];\n#endif\n#endif\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "meshUboDeclaration",
+       ev = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 39. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L186` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L199) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L186)

```diff
-   41292: (zz, tz, sz) => {
+   41668: (vv, zv, Pv) => {
```

#### 40. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L188` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L201) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L188)

```diff
-       b: () => Oz
+       c: () => gv
```

#### 41. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L190-L193` → after: `L203-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L203-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L203-L219) · [Before (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L190-L193)

```diff
-     var Fz = sz(39041);
-     const Wz = "meshUboDeclaration",
-       Xz = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "morphTargetsVertex",
+       ev = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (var i=0; i<NUM_MORPH_INFLUENCERS; i=i+1) {if (f32(i)>=uniforms.morphTargetCount) {break;}\n#ifdef USE_VERTEX_PULLING\nvertexID=f32(vpVertexIndex)*uniforms.morphTargetTextureInfo.x;\n#else\nvertexID=f32 … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41641: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "morphTargetsVertexDeclaration",
+       ev = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute position{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute normal{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute tangent{X} : vec3<f32>;\n#endif\n# … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L199` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L225) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L199)

```diff
-   41470: (zz, tz, sz) => {
+   41665: (vv, zv, Pv) => {
```

#### 43. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L203-L206` → after: `L229-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L229-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L229-L245) · [Before (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L203-L206)

```diff
-     var Fz = sz(39041);
-     const Wz = "objectIdFunctions",
-       Xz = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "morphTargetsVertexGlobal",
+       ev = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\nvar vertexID : f32;\n#endif\n#endif\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41632: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "morphTargetsVertexGlobalDeclaration",
+       ev = "#ifdef MORPHTARGETS\nuniform morphTargetInfluences : array<f32,NUM_MORPH_INFLUENCERS>;\n#ifdef MORPHTARGETS_TEXTURE \nuniform morphTargetTextureIndices : array<f32,NUM_MORPH_INFLUENCERS>;uniform morphTargetTextureInfo : vec3<f32>;var morphTargets : texture_2d_array<f3 … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L212` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L251) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L212)

```diff
-   41479: (zz, tz, sz) => {
+   41689: (vv, zv, Pv) => {
```

#### 45. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L216-L219` → after: `L255-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L255-L258) · [Before (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L216-L219)

```diff
-     var Fz = sz(39041);
-     const Wz = "oitDeclaration",
-       Xz = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#define MAX_DEPTH 99999.0\nvar oitDepthSamplerSampler: sampler;var oitDepthSampler: texture_2d<f32>;var oitFrontColorSamplerSampler: sampler;var oitFrontColorSampler: texture_2d<f32>;\n#endif\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "prePassVertex",
+       ev = "#ifdef PREPASS_DEPTH\nvertexOutputs.vViewPos=(scene.view*worldPos).rgb;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvertexOutputs.vNormViewDepth=((scene.view*worldPos).z-uniforms.cameraInfo.x)/(uniforms.cameraInfo.y-uniforms.cameraInfo.x);\n#endif\n#ifdef PREPASS_L … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 46. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L225` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L264) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L225)

```diff
-   41610: (zz, tz, sz) => {
+   41591: (vv, zv, Pv) => {
```

#### 47. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L229-L232` → after: `L268-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L268-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L268-L271) · [Before (L229-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L229-L232)

```diff
-     var Fz = sz(39041);
-     const Wz = "oitFragment",
-       Xz = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nvar fragDepth: f32=fragmentInputs.position.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nvar halfFloat: u32=pack2x16float( vec2f(fragDepth));var full: vec2f=unpack2x16float(halfFloat);fragDepth=full.x;\n#endif\nvar fragCoord … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "prePassVertexDeclaration",
+       ev = "#ifdef PREPASS\n#ifdef PREPASS_LOCAL_POSITION\nvarying vPosition : vec3f;\n#endif\n#ifdef PREPASS_DEPTH\nvarying vViewPos: vec3f;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvarying vNormViewDepth: f32;\n#endif\n#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELO … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 48. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L238` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L277) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L238)

```diff
-   41476: (zz, tz, sz) => {
+   41601: (vv, zv, Pv) => {
```

#### 49. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L242-L246` → after: `L281-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L281-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L281-L284) · [Before (L242-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L242-L246)

```diff
-     var Fz = sz(39041);
-     sz(41470);
-     const Wz = "prePassDeclaration",
-       Xz = "#ifdef PREPASS\n#ifndef PREPASS_CUSTOM_VARYINGS\n#ifdef PREPASS_LOCAL_POSITION\nvarying vPosition : vec3f;\n#endif\n#ifdef PREPASS_DEPTH\nvarying vViewPos: vec3f;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvarying vNormViewDepth: f32;\n#endif\n#if (defined(PREPASS … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "samplerVertexDeclaration",
+       ev = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nvarying v_VARYINGNAME_UV: vec2f;\n#endif\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 50. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L252` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L290) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L252)

```diff
-   41516: (zz, tz, sz) => {
+   41698: (vv, zv, Pv) => {
```

#### 51. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L256-L259` → after: `L294-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L294-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L294-L297) · [Before (L256-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L256-L259)

```diff
-     var Fz = sz(39041);
-     const Wz = "reflectionFunction",
-       Xz = "fn computeFixedEquirectangularCoords(worldPos: vec4f,worldNormal: vec3f,direction: vec3f)->vec3f\n{var lon: f32=atan2(direction.z,direction.x);var lat: f32=acos(direction.y);var sphereCoords: vec2f= vec2f(lon,lat)*RECIPROCAL_PI2*2.0;var s: f32=sphereCoords.x*0.5+0.5;v … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "samplerVertexImplementation",
+       ev = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nif (uniforms.v_INFONAME_==0.)\n{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\n#ifdef UV2\nelse if (uniforms.v_INFONAME_==1.)\n{vertexOutputs.v_VARYINGNAME_UV= (unifor … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 52. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L265` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L303) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L265)

```diff
-   41510: (zz, tz, sz) => {
+   41719: (vv, zv, Pv) => {
```

#### 53. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L267` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L305) · [Before (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L267)

```diff
-       e: () => Oz
+       d: () => gv
```

#### 54. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L269-L272` → after: `L307-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L307-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L307-L310) · [Before (L269-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L269-L272)

```diff
-     var Fz = sz(39041);
-     const Wz = "samplerFragmentDeclaration",
-       Xz = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "shadowsVertex",
+       ev = "#ifdef SHADOWS\n#if defined(SHADOWCSM{X})\n#ifdef SCENE_UBO\nvertexOutputs.vPositionFromCamera{X}=scene.view*worldPos;\n#else\nvertexOutputs.vPositionFromCamera{X}=uniforms.view*worldPos;\n#endif\n#if SHADOWCSMNUM_CASCADES{X}>0\nvertexOutputs.vPositionFromLight{X}_0=u … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 55. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L278` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L316) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L278)

```diff
-   41505: (zz, tz, sz) => {
+   41564: (vv, zv, Pv) => {
```

#### 56. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L282-L285` → after: `L320-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L320-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L320-L362) · [Before (L282-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L282-L285)

```diff
-     var Fz = sz(39041);
-     const Wz = "shadowsFragmentFunctions",
-       Xz = "#ifdef SHADOWS\n#ifndef SHADOWFLOAT\nfn unpack(color: vec4f)->f32\n{const bit_shift: vec4f= vec4f(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}\n#endif\nfn computeFallOff(value: f32,clipSpace: vec2f,frustumEdgeFalloff: f32)->f3 … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "uvAttributeDeclaration",
+       ev = "#if defined(UV{X}) && !defined(USE_VERTEX_PULLING)\nattribute uv{X}: vec2f;\n#endif\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41694: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "uvVariableDeclaration",
+       ev = "#ifdef MAINUV{X}\n#if !defined(UV{X})\nvar uv{X}: vec2f=vec2f(0.,0.);\n#elif defined(USE_VERTEX_PULLING)\nvar uv{X}: vec2f=uv{X}Updated;\n#else\nvar uv{X}: vec2f=vertexInputs.uv{X};\n#endif\nvertexOutputs.vMainUV{X}=uv{X};\n#endif\n";
+ ... (27 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L291` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L368) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L291)

```diff
-   41531: (zz, tz, sz) => {
+   41657: (vv, zv, Pv) => {
```

#### 58. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L295-L298` → after: `L372-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L372-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/329.js#L372-L375) · [Before (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/329.js#L295-L298)

```diff
-     var Fz = sz(39041);
-     const Wz = "textureRepetitionFunctions",
-       Xz = "#if TEXTURE_REPETITION_MODE>0\nfn _texRepHash4(p: vec2f)->vec4f {return fract(sin(vec4f(\n1.0+dot(p,vec2f(37.0,17.0)),\n2.0+dot(p,vec2f(11.0,47.0)),\n3.0+dot(p,vec2f(41.0,29.0)),\n4.0+dot(p,vec2f(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nfn _te … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "vertexPullingVertex",
+       ev = "#ifdef USE_VERTEX_PULLING\nlet vpVertexIndex: u32=vp_readVertexIndex(vertexInputs.vertexIndex);positionUpdated=vp_readPosition(uniforms.vp_position_info,vpVertexIndex);\n#ifdef NORMAL\nnormalUpdated=vp_readNormal(uniforms.vp_normal_info,vpVertexIndex);\n#endif\n#ifdef … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/330.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/330.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2)

#### 1. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L4)

```diff
-   41562: (zz, tz, sz) => {
+   41819: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L8)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 3. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L11)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L17)

```diff
-   41548: (zz, tz, sz) => {
+   41812: (vv, zv, Pv) => {
```

#### 5. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L21)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 6. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L24)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 7. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L30` → after: `L30-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L30-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L30-L43) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L30)

```diff
-   41596: (zz, tz, sz) => {
+   41768: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "clusteredLightingFunctions",
+       ev = "struct ClusteredLight {vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\nvLightDirection: vec4f,\nvLightFalloff: vec4f,}\nfn getClusteredLight(lightDataTexture: texture_2d<f32>,index: u32)->ClusteredLight {return ClusteredLight(\ntextureLoad(lightData … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41830: (vv, zv, Pv) => {
```

#### 8. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L34-L37` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L47-L50) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L34-L37)

```diff
-     var Fz = sz(39041);
-     const Wz = "fogFragment",
-       Xz = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "depthPrePass",
+       ev = "#ifdef DEPTHPREPASS\n#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)\nfragmentOutputs.color= vec4f(0.,0.,0.,1.0);\n#endif\n#ifndef DEPTHPREPASS_SKIP_EARLY_RETURN\nreturn fragmentOutputs;\n#endif\n#endif\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 9. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L43` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L56) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L43)

```diff
-   41556: (zz, tz, sz) => {
+   41847: (vv, zv, Pv) => {
```

#### 10. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L45` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L58) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L45)

```diff
-       e: () => Oz
+       c: () => gv
```

#### 11. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L47-L50` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L60-L63) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L47-L50)

```diff
-     var Fz = sz(39041);
-     const Wz = "fogFragmentDeclaration",
-       Xz = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "fogFragment",
+       ev = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 12. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L56` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L69) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L56)

```diff
-   41314: (zz, tz, sz) => {
+   41815: (vv, zv, Pv) => {
```

#### 13. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L58` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L71) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L58)

```diff
-       e: () => Oz
+       c: () => gv
```

#### 14. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L60-L63` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L73-L76) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L60-L63)

```diff
-     var Fz = sz(39041);
-     const Wz = "helperFunctions",
-       Xz = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "fogFragmentDeclaration",
+       ev = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 15. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L69` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L82) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L69)

```diff
-   41519: (zz, tz, sz) => {
+   41783: (vv, zv, Pv) => {
```

#### 16. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L73` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L86) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L73)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 17. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L76` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L89) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L76)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 18. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L82` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L95) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L82)

```diff
-   41523: (zz, tz, sz) => {
+   41792: (vv, zv, Pv) => {
```

#### 19. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L84` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L97) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L84)

```diff
-       d: () => Oz
+       b: () => gv
```

#### 20. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L86` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L99) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L86)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 21. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L89` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L102) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L89)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 22. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L95` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L108) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L95)

```diff
-   41374: (zz, tz, sz) => {
+   41753: (vv, zv, Pv) => {
```

#### 23. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L97` → after: `L110-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L110-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L110-L123) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L97)

```diff
-       d: () => Oz
+       b: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "lightUboDeclaration",
+       ev = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41647: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => gv
```

#### 24. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L99` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L125) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L99)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 25. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L102` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L128) · [Before (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L102)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 26. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L108` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L134) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L108)

```diff
-   41589: (zz, tz, sz) => {
+   41843: (vv, zv, Pv) => {
```

#### 27. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L112` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L138) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L112)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 28. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L115` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L141) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L115)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 29. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L121` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L147) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L121)

```diff
-   41604: (zz, tz, sz) => {
+   41759: (vv, zv, Pv) => {
```

#### 30. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L123` → after: `L149-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L149-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L149-L175) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L123)

```diff
-       d: () => Oz
+       e: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "ltcHelperFunctions",
+       ev = "fn LTCUv(N: vec3f,V: vec3f,roughness: f32)->vec2f {var LUTSIZE: f32=64.0;var LUTSCALE: f32=( LUTSIZE-1.0 )/LUTSIZE;var LUTBIAS:f32=0.5/LUTSIZE;var dotNV:f32=saturate( dot( N,V ) );var uv:vec2f=vec2f( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+LUTBIAS;return uv;}\nfn … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41596: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
+     });
+     var hv = Pv(39162);
+ ... (11 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L125` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L177) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L125)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 32. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L128` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L180) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L128)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 33. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L134` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L186) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L134)

```diff
-   41470: (zz, tz, sz) => {
+   41550: (vv, zv, Pv) => {
```

#### 34. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L136` → after: `L188-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L188-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L188-L201) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L136)

```diff
-       e: () => Oz
+       c: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "meshUboDeclaration",
+       ev = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41737: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
```

#### 35. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L138` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L203) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L138)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 36. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L141` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L206) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L141)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 37. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L147` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L212) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L147)

```diff
-   41476: (zz, tz, sz) => {
+   41745: (vv, zv, Pv) => {
```

#### 38. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L149` → after: `L214-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L214-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L214-L240) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L149)

```diff
-       d: () => Oz
+       e: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "oitDeclaration",
+       ev = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#define MAX_DEPTH 99999.0\nvar oitDepthSamplerSampler: sampler;var oitDepthSampler: texture_2d<f32>;var oitFrontColorSamplerSampler: sampler;var oitFrontColorSampler: texture_2d<f32>;\n#endif\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41855: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
+     });
+     var hv = Pv(39162);
+ ... (11 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L151-L152` → after: `L242-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L242-L243) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L151-L152)

```diff
-     var Fz = sz(39041);
-     sz(41470);
+     var hv = Pv(39162);
+     Pv(41737);
```

#### 40. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L155-L189` → after: `L246-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L246-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/330.js#L246-L298) · [Before (L155-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/330.js#L155-L189)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   60357: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       particlesPixelShaderWGSL: () => xz
-     });
-     var Fz = sz(39041),
-       Wz = sz(41470),
-       Xz = sz(41476),
-       Oz = sz(41548),
-       oz = sz(41519),
-       vz = sz(41374),
- ... (19 more removed lines; see GitHub link above)
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41781: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "reflectionFunction",
+       ev = "fn computeFixedEquirectangularCoords(worldPos: vec4f,worldNormal: vec3f,direction: vec3f)->vec3f\n{var lon: f32=atan2(direction.z,direction.x);var lat: f32=acos(direction.y);var sphereCoords: vec2f= vec2f(lon,lat)*RECIPROCAL_PI2*2.0;var s: f32=sphereCoords.x*0.5+0.5;v … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+ ... (37 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/331.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/331.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430)

#### 1. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L4)

```diff
-   41562: (zz, tz, sz) => {
+   41819: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L8)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 3. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L11)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L17)

```diff
-   41548: (zz, tz, sz) => {
+   41812: (vv, zv, Pv) => {
```

#### 5. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L21)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 6. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L24)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 7. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L30)

```diff
-   41596: (zz, tz, sz) => {
+   41847: (vv, zv, Pv) => {
```

#### 8. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L32)

```diff
-       b: () => Oz
+       c: () => gv
```

#### 9. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L34)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 10. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L37)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 11. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L43)

```diff
-   41556: (zz, tz, sz) => {
+   41815: (vv, zv, Pv) => {
```

#### 12. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L45)

```diff
-       e: () => Oz
+       c: () => gv
```

#### 13. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L47)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 14. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L50)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 15. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L56)

```diff
-   41314: (zz, tz, sz) => {
+   41572: (vv, zv, Pv) => {
```

#### 16. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L58)

```diff
-       e: () => Oz
+       c: () => gv
```

#### 17. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L60)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 18. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L63)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 19. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L69)

```diff
-   41374: (zz, tz, sz) => {
+   41783: (vv, zv, Pv) => {
```

#### 20. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L71)

```diff
-       d: () => Oz
+       b: () => gv
```

#### 21. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L73-L76)

```diff
-     var Fz = sz(39041);
-     const Wz = "logDepthDeclaration",
-       Xz = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "imageProcessingDeclaration",
+       ev = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 22. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L82)

```diff
-   41589: (zz, tz, sz) => {
+   41792: (vv, zv, Pv) => {
```

#### 23. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L86-L89` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L86-L89) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L86-L89)

```diff
-     var Fz = sz(39041);
-     const Wz = "logDepthFragment",
-       Xz = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "imageProcessingFunctions",
+       ev = "#if TONEMAPPING==3\nconst PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;resu … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 24. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L95` → after: `L95-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L95-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L95-L161) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L95)

```diff
-   60394: (zz, tz, sz) => {
+   41647: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "logDepthDeclaration",
+       ev = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41843: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
+ ... (51 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L97` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L163) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L97)

```diff
-       skyPixelShaderWGSL: () => Hz
+       particlesPixelShaderWGSL: () => fv
```

#### 26. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L99-L109` → after: `L165-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L165-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L165-L180) · [Before (L99-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L99-L109)

```diff
-     var Fz = sz(39041),
-       Wz = sz(41548),
-       Xz = sz(41374),
-       Oz = sz(41556),
-       oz = sz(41314),
-       vz = sz(41562),
-       Uz = sz(41589),
-       Kz = sz(41596);
-     const uz = "imageProcessingCompatibility",
-       Nz = "#ifdef IMAGEPROCESSINGPOSTPROCESS\nfragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb, vec3f(2.2)),fragmentOutputs.color.a);\n#endif\n";
-     Fz.e.IncludesShadersStoreWGSL[uz] || (Fz.e.IncludesShadersStoreWGSL[uz] = Nz);
+     var hv = Pv(39162),
+       Sv = Pv(41737),
+       ev = Pv(41742),
+       gv = Pv(41812),
+       pv = Pv(41783),
+       dv = Pv(41647),
+       Nv = Pv(41572),
+       lv = Pv(41792),
+       Tv = Pv(41815),
+       Wv = Pv(41819),
+       wv = Pv(41843),
+       av = Pv(41847),
+       sv = Pv(41849);
+     const Cv = "geometryRenderingFragment",
+       iv = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nlet geometryCoverage=select(0.0,1.0,geometryColor.a>0.4);var fragData: array<vec4f,SCENE_MRT_COUNT>;\n#ifdef PREPASS_COLOR\nfragData[PREPASS_COLOR_INDEX]=geometryColor;\n#endif\n#ifdef PREPASS_POSITION\nfragData[PREPASS_POSITION_ … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Cv] || (hv.d.IncludesShadersStoreWGSL[Cv] = iv);
```

#### 27. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L114-L118` → after: `L185-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L185-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/331.js#L185-L189) · [Before (L114-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/331.js#L114-L118)

```diff
-       wz = "skyPixelShader",
-       Dz = "varying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\nuniform cameraPosition: vec3f;uniform cameraOffset: vec3f;uniform up: vec3f;uniform luminance: f32;uniform turbidity: f32;uniform rayleigh: f32;unif … [truncated]
-     Fz.e.ShadersStoreWGSL[wz] || (Fz.e.ShadersStoreWGSL[wz] = Dz);
-     const gz = [Wz.c, Xz.d, Oz.e, oz.e, vz.e, Uz.b, Kz.b, bz];
-     for (const Bz of gz) Fz.e.IncludesShadersStoreWGSL[Bz.name] || (Fz.e.IncludesShadersStoreWGSL[Bz.name] = Bz.shader);
+       Gv = "particlesPixelShader",
+       mv = "varying vUV: vec2f;varying vColor: vec4f;uniform textureMask: vec4f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;\n#ifdef PREPASS\nuniform geometryZeroAlphaDiscard: f32;\n#ifdef PREPASS_POSITION\nvarying vGeometryPositionW: vec3f;\n#endif\n#i … [truncated]
+     hv.d.ShadersStoreWGSL[Gv] || (hv.d.ShadersStoreWGSL[Gv] = mv);
+     const jv = [Sv.b, ev.c, gv.c, pv.b, dv.e, Nv.c, lv.b, Tv.c, Wv.e, wv.b, av.c, sv.e, cv];
+     for (const Fv of jv) hv.d.IncludesShadersStoreWGSL[Fv.name] || (hv.d.IncludesShadersStoreWGSL[Fv.name] = Fv.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/332.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/332.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1)

#### 1. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/332.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/332.js#L4)

```diff
-   41314: (zz, tz, sz) => {
+   41819: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/332.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/332.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "helperFunctions",
-       Xz = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "clipPlaneFragment",
+       ev = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 3. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L17` → after: `L17-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L17-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/332.js#L17-L95) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/332.js#L17)

```diff
-   60550: (zz, tz, sz) => {
+   41812: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "clipPlaneFragmentDeclaration",
+       ev = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41847: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => gv
+ ... (63 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L19` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/332.js#L97) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/332.js#L19)

```diff
-       rgbdDecodePixelShaderWGSL: () => vz
+       skyPixelShaderWGSL: () => iv
```

#### 5. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L21-L27` → after: `L99-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L99-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/332.js#L99-L118) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/332.js#L21-L27)

```diff
-     var Fz = sz(39041),
-       Wz = sz(41314);
-     const Xz = "rgbdDecodePixelShader",
-       Oz = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(t … [truncated]
-     Fz.e.ShadersStoreWGSL[Xz] || (Fz.e.ShadersStoreWGSL[Xz] = Oz);
-     const oz = [Wz.e];
-     for (const Uz of oz) Fz.e.IncludesShadersStoreWGSL[Uz.name] || (Fz.e.IncludesShadersStoreWGSL[Uz.name] = Uz.shader);
+     var hv = Pv(39162),
+       Sv = Pv(41812),
+       ev = Pv(41647),
+       gv = Pv(41815),
+       pv = Pv(41572),
+       dv = Pv(41819),
+       Nv = Pv(41843),
+       lv = Pv(41847);
+     const Tv = "imageProcessingCompatibility",
+       Wv = "#ifdef IMAGEPROCESSINGPOSTPROCESS\nfragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb, vec3f(2.2)),fragmentOutputs.color.a);\n#endif\n";
+     hv.d.IncludesShadersStoreWGSL[Tv] || (hv.d.IncludesShadersStoreWGSL[Tv] = Wv);
+     const wv = {
+         name: Tv,
+         shader: Wv
+       },
+       av = "skyPixelShader",
+ ... (4 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/333.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/333.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613)

#### 1. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/333.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/333.js#L4)

```diff
-   41314: (zz, tz, sz) => {
+   41572: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/333.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/333.js#L6)

```diff
-       e: () => Oz
+       c: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/333.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/333.js#L8)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 4. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/333.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/333.js#L11)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 5. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/333.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/333.js#L17)

```diff
-   60573: (zz, tz, sz) => {
+   60803: (vv, zv, Pv) => {
```

#### 6. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/333.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/333.js#L19)

```diff
-       rgbdEncodePixelShaderWGSL: () => vz
+       rgbdDecodePixelShaderWGSL: () => dv
```

#### 7. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L21-L27` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/333.js#L21-L27) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/333.js#L21-L27)

```diff
-     var Fz = sz(39041),
-       Wz = sz(41314);
-     const Xz = "rgbdEncodePixelShader",
-       Oz = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSa … [truncated]
-     Fz.e.ShadersStoreWGSL[Xz] || (Fz.e.ShadersStoreWGSL[Xz] = Oz);
-     const oz = [Wz.e];
-     for (const Uz of oz) Fz.e.IncludesShadersStoreWGSL[Uz.name] || (Fz.e.IncludesShadersStoreWGSL[Uz.name] = Uz.shader);
+     var hv = Pv(39162),
+       Sv = Pv(41572);
+     const ev = "rgbdDecodePixelShader",
+       gv = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(t … [truncated]
+     hv.d.ShadersStoreWGSL[ev] || (hv.d.ShadersStoreWGSL[ev] = gv);
+     const pv = [Sv.c];
+     for (const Nv of pv) hv.d.IncludesShadersStoreWGSL[Nv.name] || (hv.d.IncludesShadersStoreWGSL[Nv.name] = Nv.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/334.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/334.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069)

#### 1. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/334.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/334.js#L4)

```diff
-   41412: (zz, tz, sz) => {
+   41572: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/334.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/334.js#L6)

```diff
-       d: () => Oz
+       c: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/334.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/334.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "bakedVertexAnimation",
-       Xz = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "helperFunctions",
+       ev = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/334.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/334.js#L17-L19)

```diff
-   41323: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Oz
+   60827: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       rgbdEncodePixelShaderWGSL: () => dv
```

#### 5. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L21-L167` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/334.js#L21-L27) · [Before (L21-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/334.js#L21-L167)

```diff
-     var Fz = sz(39041);
-     const Wz = "bakedVertexAnimationDeclaration",
-       Xz = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   41321: (zz, tz, sz) => {
-     sz.d(tz, {
-       b: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "bonesDeclaration",
-       Xz = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
- ... (131 more removed lines; see GitHub link above)
+     var hv = Pv(39162),
+       Sv = Pv(41572);
+     const ev = "rgbdEncodePixelShader",
+       gv = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSa … [truncated]
+     hv.d.ShadersStoreWGSL[ev] || (hv.d.ShadersStoreWGSL[ev] = gv);
+     const pv = [Sv.c];
+     for (const Nv of pv) hv.d.IncludesShadersStoreWGSL[Nv.name] || (hv.d.IncludesShadersStoreWGSL[Nv.name] = Nv.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/335.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/335.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6)

#### 1. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/335.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/335.js#L4)

```diff
-   41429: (zz, tz, sz) => {
+   41684: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/335.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/335.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "bumpVertex",
-       Xz = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bakedVertexAnimation",
+       ev = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 3. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/335.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/335.js#L17)

```diff
-   41342: (zz, tz, sz) => {
+   41585: (vv, zv, Pv) => {
```

#### 4. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/335.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/335.js#L19)

```diff
-       c: () => Oz
+       b: () => gv
```

#### 5. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/335.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/335.js#L21-L24)

```diff
-     var Fz = sz(39041);
-     const Wz = "bumpVertexDeclaration",
-       Xz = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bakedVertexAnimationDeclaration",
+       ev = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 6. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/335.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/335.js#L30)

```diff
-   60785: (zz, tz, sz) => {
+   41579: (vv, zv, Pv) => {
```

#### 7. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/335.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/335.js#L32)

```diff
-       d: () => Oz
+       b: () => gv
```

#### 8. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/335.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/335.js#L34-L37)

```diff
-     var Fz = sz(39041);
-     const Wz = "harmonicsFunctions",
-       Xz = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bonesDeclaration",
+       ev = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 9. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/335.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/335.js#L43)

```diff
-   60773: (zz, tz, sz) => {
+   41682: (vv, zv, Pv) => {
```

#### 10. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/335.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/335.js#L45)

```diff
-       e: () => Oz
+       d: () => gv
```

#### 11. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L47-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/335.js#L47-L50) · [Before (L47-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/335.js#L47-L51)

```diff
-     var Fz = sz(39041);
-     sz(41290), sz(41292);
-     const Wz = "pbrUboDeclaration",
-       Xz = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bonesVertex",
+       ev = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 12. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L57` → after: `L56-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L56-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/335.js#L56-L147) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/335.js#L57)

```diff
-   60769: (zz, tz, sz) => {
+   41709: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "clipPlaneVertex",
+       ev = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41613: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => gv
+ ... (76 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L59` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/335.js#L149) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/335.js#L59)

```diff
-       pbrVertexShaderWGSL: () => nz
+       colorVertexShaderWGSL: () => cv
```

#### 14. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L61-L102` → after: `L151-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L151-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/335.js#L151-L167) · [Before (L61-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/335.js#L61-L102)

```diff
-     var Fz = sz(39041),
-       Wz = sz(41290),
-       Xz = sz(41292),
-       Oz = sz(60773),
-       oz = sz(41309),
-       vz = sz(41336),
-       Uz = sz(41314),
-       Kz = sz(60777),
-       uz = sz(41321),
-       Nz = sz(41323),
-       bz = sz(41326),
-       wz = sz(41329),
-       Dz = sz(41340),
-       gz = sz(60785),
-       Hz = sz(41342),
-       Bz = sz(41344),
- ... (26 more removed lines; see GitHub link above)
+     var hv = Pv(39162),
+       Sv = Pv(41579),
+       ev = Pv(41585),
+       gv = Pv(41613),
+       pv = Pv(41618),
+       dv = Pv(41587),
+       Nv = Pv(41677),
+       lv = Pv(41682),
+       Tv = Pv(41684),
+       Wv = Pv(41709),
+       wv = Pv(41717),
+       av = Pv(41722);
+     const sv = "colorVertexShader",
+       Cv = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#ifdef FOG\nuniform view: mat4x4f;\n#endif\n#i … [truncated]
+     hv.d.ShadersStoreWGSL[sv] || (hv.d.ShadersStoreWGSL[sv] = Cv);
+     const iv = [Sv.b, ev.b, gv.c, pv.d, dv.b, Nv.b, lv.d, Tv.e, Wv.b, wv.c, av.c];
+ ... (1 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/336.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/336.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028)

#### 1. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/336.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/336.js#L4)

```diff
-   41436: (zz, tz, sz) => {
+   41703: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/336.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/336.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "clipPlaneVertex",
-       Xz = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bumpVertex",
+       ev = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 3. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/336.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/336.js#L17)

```diff
-   41344: (zz, tz, sz) => {
+   41604: (vv, zv, Pv) => {
```

#### 4. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/336.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/336.js#L19)

```diff
-       d: () => Oz
+       b: () => gv
```

#### 5. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/336.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/336.js#L21-L24)

```diff
-     var Fz = sz(39041);
-     const Wz = "clipPlaneVertexDeclaration",
-       Xz = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bumpVertexDeclaration",
+       ev = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 6. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/336.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/336.js#L30)

```diff
-   41444: (zz, tz, sz) => {
+   61066: (vv, zv, Pv) => {
```

#### 7. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/336.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/336.js#L32)

```diff
-       d: () => Oz
+       c: () => gv
```

#### 8. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/336.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/336.js#L34-L37)

```diff
-     var Fz = sz(39041);
-     const Wz = "fogVertex",
-       Xz = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "harmonicsFunctions",
+       ev = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 9. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/336.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/336.js#L43)

```diff
-   41351: (zz, tz, sz) => {
+   61049: (vv, zv, Pv) => {
```

#### 10. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/336.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/336.js#L45)

```diff
-       c: () => Oz
+       e: () => gv
```

#### 11. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L47-L50` → after: `L47-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L47-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/336.js#L47-L51) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/336.js#L47-L50)

```diff
-     var Fz = sz(39041);
-     const Wz = "fogVertexDeclaration",
-       Xz = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     Pv(41541), Pv(41550);
+     const Sv = "pbrUboDeclaration",
+       ev = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 12. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L56-L58` → after: `L57-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/336.js#L57-L59) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/336.js#L56-L58)

```diff
-   41374: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Oz
+   61040: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       pbrVertexShaderWGSL: () => Bv
```

#### 13. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L60-L97` → after: `L61-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L61-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/336.js#L61-L102) · [Before (L60-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/336.js#L60-L97)

```diff
-     var Fz = sz(39041);
-     const Wz = "logDepthDeclaration",
-       Xz = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   41464: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "logDepthVertex",
-       Xz = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
- ... (22 more removed lines; see GitHub link above)
+     var hv = Pv(39162),
+       Sv = Pv(41541),
+       ev = Pv(41550),
+       gv = Pv(61049),
+       pv = Pv(41564),
+       dv = Pv(41596),
+       Nv = Pv(41572),
+       lv = Pv(61058),
+       Tv = Pv(41579),
+       Wv = Pv(41585),
+       wv = Pv(41587),
+       av = Pv(41591),
+       sv = Pv(41601),
+       Cv = Pv(61066),
+       iv = Pv(41604),
+       cv = Pv(41613),
+ ... (26 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/337.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/337.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557)

#### 1. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L4)

```diff
-   41436: (zz, tz, sz) => {
+   41709: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L6)

```diff
-       d: () => Oz
+       b: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L8)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 4. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L11)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 5. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L17)

```diff
-   41344: (zz, tz, sz) => {
+   41613: (vv, zv, Pv) => {
```

#### 6. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L19)

```diff
-       d: () => Oz
+       c: () => gv
```

#### 7. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L21)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 8. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L24)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 9. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L30)

```diff
-   41444: (zz, tz, sz) => {
+   41717: (vv, zv, Pv) => {
```

#### 10. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L32)

```diff
-       d: () => Oz
+       c: () => gv
```

#### 11. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L34)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 12. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L37)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 13. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L43)

```diff
-   41351: (zz, tz, sz) => {
+   41618: (vv, zv, Pv) => {
```

#### 14. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L45)

```diff
-       c: () => Oz
+       d: () => gv
```

#### 15. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L47)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 16. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L50)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 17. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L56)

```diff
-   41374: (zz, tz, sz) => {
+   41647: (vv, zv, Pv) => {
```

#### 18. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L58)

```diff
-       d: () => Oz
+       e: () => gv
```

#### 19. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L60)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 20. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L63)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 21. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L69)

```diff
-   41464: (zz, tz, sz) => {
+   41726: (vv, zv, Pv) => {
```

#### 22. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L71)

```diff
-       c: () => Oz
+       e: () => gv
```

#### 23. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L73)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 24. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L76` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L76) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L76)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 25. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L82)

```diff
-   60390: (zz, tz, sz) => {
+   60611: (vv, zv, Pv) => {
```

#### 26. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L84)

```diff
-       skyVertexShaderWGSL: () => bz
+       particlesVertexShaderWGSL: () => wv
```

#### 27. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L86-L97` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/337.js#L86-L97) · [Before (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/337.js#L86-L97)

```diff
-     var Fz = sz(39041),
-       Wz = sz(41374),
-       Xz = sz(41344),
-       Oz = sz(41351),
-       oz = sz(41436),
-       vz = sz(41464),
-       Uz = sz(41444);
-     const Kz = "skyVertexShader",
-       uz = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying v … [truncated]
-     Fz.e.ShadersStoreWGSL[Kz] || (Fz.e.ShadersStoreWGSL[Kz] = uz);
-     const Nz = [Wz.d, Xz.d, Oz.c, oz.d, vz.c, Uz.d];
-     for (const wz of Nz) Fz.e.IncludesShadersStoreWGSL[wz.name] || (Fz.e.IncludesShadersStoreWGSL[wz.name] = wz.shader);
+     var hv = Pv(39162),
+       Sv = Pv(41613),
+       ev = Pv(41618),
+       gv = Pv(41647),
+       pv = Pv(41709),
+       dv = Pv(41717),
+       Nv = Pv(41726);
+     const lv = "particlesVertexShader",
+       Tv = "attribute position: vec3f;attribute color: vec4f;attribute angle: f32;attribute size: vec2f;\n#ifdef ANIMATESHEET\nattribute cellIndex: f32;\n#endif\n#ifndef BILLBOARD\nattribute direction: vec3f;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute direction: vec3f;\n#endif … [truncated]
+     hv.d.ShadersStoreWGSL[lv] || (hv.d.ShadersStoreWGSL[lv] = Tv);
+     const Wv = [Sv.c, ev.d, gv.e, pv.b, dv.c, Nv.e];
+     for (const av of Wv) hv.d.IncludesShadersStoreWGSL[av.name] || (hv.d.IncludesShadersStoreWGSL[av.name] = av.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/338.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/338.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07)

#### 1. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/338.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/338.js#L4)

```diff
-   41569: (zz, tz, sz) => {
+   41709: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/338.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/338.js#L6)

```diff
-       c: () => Oz
+       b: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/338.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/338.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "bumpFragment",
-       Xz = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "clipPlaneVertex",
+       ev = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/338.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/338.js#L17)

```diff
-   41541: (zz, tz, sz) => {
+   41613: (vv, zv, Pv) => {
```

#### 5. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L21-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/338.js#L21-L24) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/338.js#L21-L25)

```diff
-     var Fz = sz(39041);
-     sz(41510);
-     const Wz = "bumpFragmentFunctions",
-       Xz = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "clipPlaneVertexDeclaration",
+       ev = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 6. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/338.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/338.js#L31)

```diff
-   41536: (zz, tz, sz) => {
+   41717: (vv, zv, Pv) => {
```

#### 7. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L33` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/338.js#L32) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/338.js#L33)

```diff
-       d: () => Oz
+       c: () => gv
```

#### 8. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/338.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/338.js#L35-L38)

```diff
-     var Fz = sz(39041);
-     const Wz = "bumpFragmentMainFunctions",
-       Xz = "#ifndef TEXRD_DEFINED\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);}\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(N … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "fogVertex",
+       ev = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 9. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/338.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/338.js#L44)

```diff
-   41562: (zz, tz, sz) => {
+   41618: (vv, zv, Pv) => {
```

#### 10. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L46` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/338.js#L45) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/338.js#L46)

```diff
-       e: () => Oz
+       d: () => gv
```

#### 11. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/338.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/338.js#L48-L51)

```diff
-     var Fz = sz(39041);
-     const Wz = "clipPlaneFragment",
-       Xz = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "fogVertexDeclaration",
+       ev = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 12. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L57` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/338.js#L56) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/338.js#L57)

```diff
-   41548: (zz, tz, sz) => {
+   41647: (vv, zv, Pv) => {
```

#### 13. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L59` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/338.js#L58) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/338.js#L59)

```diff
-       c: () => Oz
+       e: () => gv
```

#### 14. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L61-L64` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/338.js#L60-L63) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/338.js#L61-L64)

```diff
-     var Fz = sz(39041);
-     const Wz = "clipPlaneFragmentDeclaration",
-       Xz = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "logDepthDeclaration",
+       ev = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 15. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L70` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/338.js#L69) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/338.js#L70)

```diff
-   41470: (zz, tz, sz) => {
+   41726: (vv, zv, Pv) => {
```

#### 16. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L74-L77` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/338.js#L73-L76) · [Before (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/338.js#L74-L77)

```diff
-     var Fz = sz(39041);
-     const Wz = "objectIdFunctions",
-       Xz = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "logDepthVertex",
+       ev = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 17. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L83-L85` → after: `L82-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/338.js#L82-L84) · [Before (L83-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/338.js#L83-L85)

```diff
-   60954: (zz, tz, sz) => {
-     sz.d(tz, {
-       d: () => Oz
+   60645: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       skyVertexShaderWGSL: () => wv
```

#### 18. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L87-L227` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/338.js#L86-L97) · [Before (L87-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/338.js#L87-L227)

```diff
-     var Fz = sz(39041);
-     const Wz = "openpbrDielectricReflectance",
-       Xz = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
-   },
-   60959: (zz, tz, sz) => {
-     sz.d(tz, {
-       c: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "openpbrGeometryInfo",
-       Xz = "struct geometryInfoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32};struct geometryInfoAnisoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32,\nanisotropy: f32,\nanisotropicTange … [truncated]
- ... (125 more removed lines; see GitHub link above)
+     var hv = Pv(39162),
+       Sv = Pv(41647),
+       ev = Pv(41613),
+       gv = Pv(41618),
+       pv = Pv(41709),
+       dv = Pv(41726),
+       Nv = Pv(41717);
+     const lv = "skyVertexShader",
+       Tv = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying v … [truncated]
+     hv.d.ShadersStoreWGSL[lv] || (hv.d.ShadersStoreWGSL[lv] = Tv);
+     const Wv = [Sv.e, ev.c, gv.d, pv.b, dv.e, Nv.c];
+     for (const av of Wv) hv.d.IncludesShadersStoreWGSL[av.name] || (hv.d.IncludesShadersStoreWGSL[av.name] = av.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/339.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/339.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2)

#### 1. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/339.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/339.js#L4)

```diff
-   41569: (zz, tz, sz) => {
+   41822: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/339.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/339.js#L6)

```diff
-       c: () => Oz
+       b: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/339.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/339.js#L8)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 4. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/339.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/339.js#L11)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 5. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/339.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/339.js#L17)

```diff
-   41541: (zz, tz, sz) => {
+   41806: (vv, zv, Pv) => {
```

#### 6. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/339.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/339.js#L21-L22)

```diff
-     var Fz = sz(39041);
-     sz(41510);
+     var hv = Pv(39162);
+     Pv(41776);
```

#### 7. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/339.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/339.js#L25)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 8. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/339.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/339.js#L31)

```diff
-   41536: (zz, tz, sz) => {
+   41804: (vv, zv, Pv) => {
```

#### 9. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/339.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/339.js#L35)

```diff
-     var Fz = sz(39041);
+     var hv = Pv(39162);
```

#### 10. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L38` → after: `L38-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L38-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/339.js#L38-L64) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/339.js#L38)

```diff
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41819: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "clipPlaneFragment",
+       ev = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+ ... (11 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L44` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/339.js#L70) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/339.js#L44)

```diff
-   41572: (zz, tz, sz) => {
+   41737: (vv, zv, Pv) => {
```

#### 12. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L48-L51` → after: `L74-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L74-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/339.js#L74-L142) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/339.js#L48-L51)

```diff
-     var Fz = sz(39041);
-     const Wz = "decalFragment",
-       Xz = "#ifdef DECAL\nvar decalTempColor=decalColor.rgb;var decalTempAlpha=decalColor.a;\n#ifdef GAMMADECAL\ndecalTempColor=toLinearSpaceVec3(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalTempAlpha=decalColor.a*decalColor.a;\n#endif\nsurfaceAlbedo=mix(surfaceAlbedo … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "objectIdFunctions",
+       ev = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   61232: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       d: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "openpbrDielectricReflectance",
+       ev = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
+ ... (53 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L57` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/339.js#L148) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/339.js#L57)

```diff
-   41587: (zz, tz, sz) => {
+   61083: (vv, zv, Pv) => {
```

#### 14. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L61-L64` → after: `L152-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L152-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/339.js#L152-L227) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/339.js#L61-L64)

```diff
-     var Fz = sz(39041);
-     const Wz = "lightFragment",
-       Xz = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvar diffuse{X}: vec4f=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X})\n{let slic … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "pbrFragmentReflectionDeclaration",
+       ev = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\nvar reflectionSamplerSampler: sampler;var reflectionSampler: texture_cube<f32>;\n#ifdef LODBASEDMICROSFURACE\n#else\nvar reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_cube<f32>;var reflectionHighSamp … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   61140: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       d: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "pbrIBLFunctions",
+       ev = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfn getLodFromAlphaG(cubeMapDimensionPixels: f32,microsurfaceAverageSlope: f32)->f32 {var microsurfaceAverageSlopeTexels: f32=cubeMapDimensionPixels*microsurfaceAverageSlope;var lod: f32=log2(microsurfaceAverageSlopeTe … [truncated]
+ ... (60 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/340.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/340.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f)

#### 1. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/340.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/340.js#L4)

```diff
-   41562: (zz, tz, sz) => {
+   41822: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/340.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/340.js#L6)

```diff
-       e: () => Oz
+       b: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/340.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/340.js#L8-L11)

```diff
-     var Fz = sz(39041);
-     const Wz = "clipPlaneFragment",
-       Xz = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bumpFragment",
+       ev = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 4. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/340.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/340.js#L17)

```diff
-   41548: (zz, tz, sz) => {
+   41806: (vv, zv, Pv) => {
```

#### 5. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L21-L24` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/340.js#L21-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/340.js#L21-L24)

```diff
-     var Fz = sz(39041);
-     const Wz = "clipPlaneFragmentDeclaration",
-       Xz = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     Pv(41776);
+     const Sv = "bumpFragmentFunctions",
+       ev = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 6. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L30` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/340.js#L31) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/340.js#L30)

```diff
-   41596: (zz, tz, sz) => {
+   41804: (vv, zv, Pv) => {
```

#### 7. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L32` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/340.js#L33) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/340.js#L32)

```diff
-       b: () => Oz
+       d: () => gv
```

#### 8. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L34-L37` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/340.js#L35-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/340.js#L34-L37)

```diff
-     var Fz = sz(39041);
-     const Wz = "fogFragment",
-       Xz = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "bumpFragmentMainFunctions",
+       ev = "#ifndef TEXRD_DEFINED\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);}\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(N … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 9. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L43` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/340.js#L44) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/340.js#L43)

```diff
-   41556: (zz, tz, sz) => {
+   41825: (vv, zv, Pv) => {
```

#### 10. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L45` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/340.js#L46) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/340.js#L45)

```diff
-       e: () => Oz
+       b: () => gv
```

#### 11. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L47-L50` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/340.js#L48-L51) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/340.js#L47-L50)

```diff
-     var Fz = sz(39041);
-     const Wz = "fogFragmentDeclaration",
-       Xz = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
+     var hv = Pv(39162);
+     const Sv = "decalFragment",
+       ev = "#ifdef DECAL\nvar decalTempColor=decalColor.rgb;var decalTempAlpha=decalColor.a;\n#ifdef GAMMADECAL\ndecalTempColor=toLinearSpaceVec3(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalTempAlpha=decalColor.a*decalColor.a;\n#endif\nsurfaceAlbedo=mix(surfaceAlbedo … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

#### 12. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L56-L58` → after: `L57-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/340.js#L57-L59) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/340.js#L56-L58)

```diff
-   41630: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       colorPixelShaderWGSL: () => uz
+   41835: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       b: () => gv
```

#### 13. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L60-L69` → after: `L61-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/340.js#L61-L64) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/340.js#L60-L69)

```diff
-     var Fz = sz(39041),
-       Wz = sz(41548),
-       Xz = sz(41556),
-       Oz = sz(41562),
-       oz = sz(41596);
-     const vz = "colorPixelShader",
-       Uz = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\ … [truncated]
-     Fz.e.ShadersStoreWGSL[vz] || (Fz.e.ShadersStoreWGSL[vz] = Uz);
-     const Kz = [Wz.c, Xz.e, Oz.e, oz.b];
-     for (const Nz of Kz) Fz.e.IncludesShadersStoreWGSL[Nz.name] || (Fz.e.IncludesShadersStoreWGSL[Nz.name] = Nz.shader);
+     var hv = Pv(39162);
+     const Sv = "lightFragment",
+       ev = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvar diffuse{X}: vec4f=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X})\n{let slic … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/341.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/341.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450)

#### 1. `bundles/bloxd.io/chunks/js/341.js` (Changed code · before: `L4-L6` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/341.js#L4-L14) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/341.js#L4-L6)

```diff
-   41616: (zz, tz, sz) => {
-     function Fz(zz) {
-       return Math.floor(zz / 8)
+   41819: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "clipPlaneFragment",
+       ev = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
```

#### 2. `bundles/bloxd.io/chunks/js/341.js` (Changed code · before: `L8-L10` → after: `L16-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450) · [After (L16-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/341.js#L16-L27) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/341.js#L8-L10)

```diff
- 
-     function Wz(zz) {
-       return 1 << zz % 8
+   },
+   41812: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "clipPlaneFragmentDeclaration",
+       ev = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
```

#### 3. `bundles/bloxd.io/chunks/js/341.js` (Changed code · before: `L13` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/341.js#L32) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/341.js#L13)

```diff
-       OptimizeIndices: () => Oz
+       c: () => gv
```

#### 4. `bundles/bloxd.io/chunks/js/341.js` (Changed code · before: `L15-L30` → after: `L34-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450) · [After (L34-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/341.js#L34-L40) · [Before (L15-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/341.js#L15-L30)

```diff
-     class Xz {
-       constructor(zz) {
-         this.size = zz, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
-       }
-       get(zz) {
-         if (zz >= this.size) throw new RangeError("Bit index out of range");
-         const tz = Fz(zz),
-           sz = Wz(zz);
-         return 0 !== (this._byteArray[tz] & sz)
-       }
-       set(zz, tz) {
-         if (zz >= this.size) throw new RangeError("Bit index out of range");
-         const sz = Fz(zz),
-           Xz = Wz(zz);
-         tz ? this._byteArray[sz] |= Xz : this._byteArray[sz] &= ~Xz
-       }
+     var hv = Pv(39162);
+     const Sv = "fogFragment",
+       ev = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
```

#### 5. `bundles/bloxd.io/chunks/js/341.js` (Changed code · before: `L32-L63` → after: `L42-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450) · [After (L42-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/341.js#L42-L72) · [Before (L32-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/341.js#L32-L63)

```diff
- 
-     function Oz(zz) {
-       const tz = [],
-         sz = zz.length / 3;
-       for (let Xz = 0; Xz < sz; Xz++) tz.push([zz[3 * Xz], zz[3 * Xz + 1], zz[3 * Xz + 2]]);
-       const Fz = new Map;
-       for (let Xz = 0; Xz < tz.length; Xz++) {
-         const zz = tz[Xz];
-         for (const tz of zz) {
-           let zz = Fz.get(tz);
-           zz || Fz.set(tz, zz = []), zz.push(Xz)
-         }
-       }
-       const Wz = new Xz(sz),
-         Oz = [],
-         oz = zz => {
- ... (16 more removed lines; see GitHub link above)
+   },
+   41815: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       c: () => gv
+     });
+     var hv = Pv(39162);
+     const Sv = "fogFragmentDeclaration",
+       ev = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     hv.d.IncludesShadersStoreWGSL[Sv] || (hv.d.IncludesShadersStoreWGSL[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
+     }
+   },
+   41872: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+ ... (15 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/342.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/342.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2)

#### 1. `bundles/bloxd.io/chunks/js/342.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/342.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/342.js#L2)

```diff
- export const ids = [342, 343];
+ export const ids = [342];
```

#### 2. `bundles/bloxd.io/chunks/js/342.js` (Changed code · before: `L4-L9` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/342.js#L4-L7) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/342.js#L4-L9)

```diff
-   42364: (zz, tz, sz) => {
-     sz.d(tz, {
-       gamePackSource: () => Xz
-     });
-     var Fz = sz(4605),
-       Wz = sz(1466);
+   41859: (vv, zv, Pv) => {
+     function hv(vv) {
+       return Math.floor(vv / 8)
+     }
```

#### 3. `bundles/bloxd.io/chunks/js/342.js` (Changed code · before: `L12-L14` → after: `L10-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2) · [After (L10-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/342.js#L10-L29) · [Before (L12-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/342.js#L12-L14)

```diff
-       return {
-         packKey: async tz => (await Wz.d.getGame(zz, tz, !0)).customTexturePackKey,
-         fetchPack: Fz.c
+       return 1 << vv % 8
+     }
+     Pv.d(zv, {
+       OptimizeIndices: () => gv
+     });
+     class ev {
+       constructor(vv) {
+         this.size = vv, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
+       }
+       get(vv) {
+         if (vv >= this.size) throw new RangeError("Bit index out of range");
+         const zv = hv(vv),
+           Pv = Sv(vv);
+         return 0 !== (this._byteArray[zv] & Pv)
+       }
+       set(vv, zv) {
+ ... (4 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/342.js` (Changed code · before: `L35-L48` → after: `L33-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2) · [After (L33-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/342.js#L33-L43) · [Before (L35-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/342.js#L35-L48)

```diff
-     function uz() {
-       if (Xz.featureFlags.useTurnstile) throw new vz.TurnstilePageError
-     }
- 
-     function Nz() {
-       return (0, oz.fetchAnonymousUserContext)().catch((zz => (console.warn("the guest context didn't load", zz), null)))
-     }
-     async function bz(zz, tz, sz, Fz) {
-       try {
-         const Wz = await sz;
-         if (null === Wz) return void console.warn(`the texture pack step for ${zz} has no guest context: the pack in play stays`);
-         await tz.packForGame(zz, (0, Uz.gamePackSource)(Wz), Fz)
-       } catch (Wz) {
-         console.warn(`the texture pack step for ${zz} failed: the pack in play stays`, Wz)
+     function gv(vv) {
+       const zv = [],
+         Pv = vv.length / 3;
+       for (let ev = 0; ev < Pv; ev++) zv.push([vv[3 * ev], vv[3 * ev + 1], vv[3 * ev + 2]]);
+       const hv = new Map;
+       for (let ev = 0; ev < zv.length; ev++) {
+         const vv = zv[ev];
+         for (const zv of vv) {
+           let vv = hv.get(zv);
+           vv || hv.set(zv, vv = []), vv.push(ev)
+         }
```

#### 5. `bundles/bloxd.io/chunks/js/342.js` (Changed code · before: `L50-L92` → after: `L45-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2) · [After (L45-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/342.js#L45-L63) · [Before (L50-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/342.js#L50-L92)

```diff
-     }
-     async function wz(zz, tz, sz, Fz) {
-       uz();
-       const Wz = Nz();
-       return await sz(((tz, sz) => bz(zz, tz, Wz, sz))), Pz(zz, tz, Fz(), await Wz)
-     }
-     let Dz = null,
-       gz = null;
-     async function Hz() {
-       if ((null === Dz || Dz.hasExpired()) && (gz ??= (0, oz.fetchAnonymousUserContext)().then((zz => {
-           Dz = zz
-         })).finally((() => {
-           gz = null
-         })), await gz), null === Dz) throw new Error("no guest context to post as");
-       return Dz.getMetricsCookies()
-     }
- ... (27 more removed lines; see GitHub link above)
+       const Sv = new ev(Pv),
+         gv = [],
+         pv = vv => {
+           const Pv = [vv];
+           for (; Pv.length > 0;) {
+             const vv = Pv.pop();
+             if (!Sv.get(vv)) {
+               Sv.set(vv, !0), gv.push(zv[vv]);
+               for (const ev of zv[vv]) {
+                 const vv = hv.get(ev);
+                 if (!vv) return;
+                 for (const zv of vv) Sv.get(zv) || Pv.push(zv)
+               }
+             }
+           }
+         };
+ ... (3 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/343.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/343.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2)

#### 1. `bundles/bloxd.io/chunks/js/343.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/343.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/343.js#L2)

```diff
- export const ids = [343];
+ export const ids = [343, 344];
```

#### 2. `bundles/bloxd.io/chunks/js/343.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/343.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/343.js#L4)

```diff
-   42364: (zz, tz, sz) => {
+   42704: (vv, zv, Pv) => {
```

#### 3. `bundles/bloxd.io/chunks/js/343.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/343.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/343.js#L8-L9)

```diff
-     var Fz = sz(4605),
-       Wz = sz(1466);
+     var hv = Pv(4719),
+       Sv = Pv(1482);
```

#### 4. `bundles/bloxd.io/chunks/js/343.js` (Changed code · before: `L13-L14` → after: `L13-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2) · [After (L13-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/343.js#L13-L91) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/343.js#L13-L14)

```diff
-         packKey: async tz => (await Wz.d.getGame(zz, tz, !0)).customTexturePackKey,
-         fetchPack: Fz.c
+         packKey: async zv => (await Sv.e.getGame(vv, zv, !0)).customTexturePackKey,
+         fetchPack: hv.d
+       }
+     }
+   },
+   42699: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       fetchGuestContext: () => Wv,
+       guestJoinTarget: () => Gv,
+       guestJoinWithPack: () => av,
+       guestPackForGame: () => wv,
+       invalidateGuestTrafficCode: () => cv
+     });
+     var hv = Pv(1184),
+       Sv = Pv(1482),
+       ev = Pv(73),
+ ... (63 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/344.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/344.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5)

#### 1. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L4-L11` → after: `L4-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/344.js#L4-L16) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/344.js#L4-L11)

```diff
-   60314: (zz, tz, sz) => {
-     var Fz;
-     sz.r(tz), sz.d(tz, {
-         ShaderLanguage: () => Fz
-       }),
-       function(zz) {
-         zz[zz.GLSL = 0] = "GLSL", zz[zz.WGSL = 1] = "WGSL"
-       }(Fz || (Fz = {}))
+   42704: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       gamePackSource: () => ev
+     });
+     var hv = Pv(4719),
+       Sv = Pv(1482);
+ 
+     function ev(vv) {
+       return {
+         packKey: async zv => (await Sv.e.getGame(vv, zv, !0)).customTexturePackKey,
+         fetchPack: hv.d
+       }
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/345.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/345.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89)

#### 1. `bundles/bloxd.io/chunks/js/345.js` (Changed code · before: `L4` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/345.js#L4-L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/345.js#L4)

```diff
-   60319: (zz, tz, sz) => {
+   60579: (vv, zv, Pv) => {
+     var hv;
```

#### 2. `bundles/bloxd.io/chunks/js/345.js` (Changed code · before: `L6-L15` → after: `L7-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89) · [After (L7-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/345.js#L7-L11) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/345.js#L6-L15)

```diff
-       postprocessVertexShader: () => Oz
-     });
-     var Fz = sz(39041);
-     const Wz = "postprocessVertexShader",
-       Xz = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
-     Fz.e.ShadersStore[Wz] || (Fz.e.ShadersStore[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
-     }
+         ShaderLanguage: () => hv
+       }),
+       function(vv) {
+         vv[vv.GLSL = 0] = "GLSL", vv[vv.WGSL = 1] = "WGSL"
+       }(hv || (hv = {}))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/346.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/346.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a)

#### 1. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/346.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/346.js#L4)

```diff
-   60339: (zz, tz, sz) => {
+   60587: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/346.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/346.js#L6)

```diff
-       WorldCodeAiOutOfUsage: () => Xz
+       postprocessVertexShader: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L8-L25` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/346.js#L8-L14) · [Before (L8-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/346.js#L8-L25)

```diff
-     var Fz = sz(1419),
-       Wz = sz(1087);
- 
-     function Xz(zz) {
-       let {
-         onGetSuperRank: tz
-       } = zz;
-       return (0, Wz.jsxs)("div", {
-         className: "WorldCodeAiOutOfUsage",
-         children: [(0, Wz.jsx)("p", {
-           className: "WorldCodeAiOutOfUsageText",
-           children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
-         }), (0, Wz.jsx)(Fz.p, {
-           className: "WorldCodeAiOutOfUsageButton",
-           onClick: tz,
-           children: "Get Super Rank"
- ... (2 more removed lines; see GitHub link above)
+     var hv = Pv(39162);
+     const Sv = "postprocessVertexShader",
+       ev = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     hv.d.ShadersStore[Sv] || (hv.d.ShadersStore[Sv] = ev);
+     const gv = {
+       name: Sv,
+       shader: ev
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/347.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/347.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373)

#### 1. `bundles/bloxd.io/chunks/js/347.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/347.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/347.js#L4)

```diff
-   60341: (zz, tz, sz) => {
+   60604: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/347.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/347.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/347.js#L6-L7)

```diff
-       WorldCodeAiDeepSeekNotice: () => Oz,
-       deepSeekPrivacyPolicyUrl: () => Xz
+       WorldCodeAiOutOfUsage: () => ev
```

#### 3. `bundles/bloxd.io/chunks/js/347.js` (Changed code · before: `L9-L11` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/347.js#L8-L9) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/347.js#L9-L11)

```diff
-     var Fz = sz(1173),
-       Wz = sz(1087);
-     const Xz = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";
+     var hv = Pv(1442),
+       Sv = Pv(1082);
```

#### 4. `bundles/bloxd.io/chunks/js/347.js` (Changed code · before: `L13-L26` → after: `L11-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373) · [After (L11-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/347.js#L11-L23) · [Before (L13-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/347.js#L13-L26)

```diff
-     function Oz() {
-       const {
-         t: zz
-       } = (0, Fz.B)();
-       return (0, Wz.jsxs)(Wz.Fragment, {
-         children: [zz("superBotXd:deepSeekNotice"), " ", (0, Wz.jsxs)("a", {
-           className: "WorldCodeAiDeepSeekPolicyLink",
-           href: Xz,
-           target: "_blank",
-           rel: "noreferrer noopener",
-           children: [zz("superBotXd:deepSeekPrivacyPolicy"), " ", (0, Wz.jsx)("span", {
-             "aria-hidden": "true",
-             children: "\u2197"
-           })]
+     function ev(vv) {
+       let {
+         onGetSuperRank: zv
+       } = vv;
+       return (0, Sv.jsxs)("div", {
+         className: "WorldCodeAiOutOfUsage",
+         children: [(0, Sv.jsx)("p", {
+           className: "WorldCodeAiOutOfUsageText",
+           children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
+         }), (0, Sv.jsx)(hv.j, {
+           className: "WorldCodeAiOutOfUsageButton",
+           onClick: zv,
+           children: "Get Super Rank"
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/348.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/348.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25)

#### 1. `bundles/bloxd.io/chunks/js/348.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/348.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/348.js#L4)

```diff
-   60369: (zz, tz, sz) => {
+   60607: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/348.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/348.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/348.js#L6)

```diff
-       particlesPixelShader: () => Yz
+       WorldCodeAiDeepSeekNotice: () => gv,
+       deepSeekPrivacyPolicyUrl: () => ev
```

#### 3. `bundles/bloxd.io/chunks/js/348.js` (Changed code · before: `L8-L34` → after: `L9-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25) · [After (L9-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/348.js#L9-L28) · [Before (L8-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/348.js#L8-L34)

```diff
-     var Fz = sz(39041),
-       Wz = sz(41166),
-       Xz = sz(41173),
-       Oz = sz(41238),
-       oz = sz(41217),
-       vz = sz(41072),
-       Uz = sz(40999),
-       Kz = sz(41223),
-       uz = sz(41242),
-       Nz = sz(41248),
-       bz = sz(41270),
-       wz = sz(41277);
-     const Dz = "geometryRenderingFragment",
-       gz = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nfloat geometryCoverage=geometryColor.a>0.4 ? 1.0 : 0.0;\n#ifdef PREPASS_COLOR\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_COLOR_INDEX,geometryColor);\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_I … [truncated]
-     Fz.e.IncludesShadersStore[Dz] || (Fz.e.IncludesShadersStore[Dz] = gz);
-     const Hz = {
- ... (11 more removed lines; see GitHub link above)
+     var hv = Pv(1175),
+       Sv = Pv(1082);
+     const ev = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";
+ 
+     function gv() {
+       const {
+         t: vv
+       } = (0, hv.x)();
+       return (0, Sv.jsxs)(Sv.Fragment, {
+         children: [vv("superBotXd:deepSeekNotice"), " ", (0, Sv.jsxs)("a", {
+           className: "WorldCodeAiDeepSeekPolicyLink",
+           href: ev,
+           target: "_blank",
+           rel: "noreferrer noopener",
+           children: [vv("superBotXd:deepSeekPrivacyPolicy"), " ", (0, Sv.jsx)("span", {
+             "aria-hidden": "true",
+ ... (4 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/349.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/349.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1)

#### 1. `bundles/bloxd.io/chunks/js/349.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/349.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/349.js#L4-L6)

```diff
-   60399: (zz, tz, sz) => {
-     sz.d(tz, {
-       allocateF64Mat4: () => Wz
+   60632: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       particlesPixelShader: () => jv
```

#### 2. `bundles/bloxd.io/chunks/js/349.js` (Changed code · before: `L8-L11` → after: `L8-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1) · [After (L8-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/349.js#L8-L34) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/349.js#L8-L11)

```diff
-     var Fz = sz(40832);
- 
-     function Wz() {
-       return new Fz.e(16)
+     var hv = Pv(39162),
+       Sv = Pv(41390),
+       ev = Pv(41396),
+       gv = Pv(41478),
+       pv = Pv(41453),
+       dv = Pv(41297),
+       Nv = Pv(41226),
+       lv = Pv(41461),
+       Tv = Pv(41487),
+       Wv = Pv(41493),
+       wv = Pv(41524),
+       av = Pv(41526);
+     const sv = "geometryRenderingFragment",
+       Cv = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nfloat geometryCoverage=geometryColor.a>0.4 ? 1.0 : 0.0;\n#ifdef PREPASS_COLOR\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_COLOR_INDEX,geometryColor);\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_I … [truncated]
+     hv.d.IncludesShadersStore[sv] || (hv.d.IncludesShadersStore[sv] = Cv);
+     const iv = {
+ ... (11 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/350.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/350.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea)

#### 1. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L4-L9` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/350.js#L4-L6) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/350.js#L4-L9)

```diff
-   60401: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       applyLightFoOffset: () => Oz,
-       getFloatingOriginOffset: () => Wz,
-       lightFoVersion: () => Xz,
-       wrapRenderableForFO: () => oz
+   60659: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       allocateF64Mat4: () => Sv
```

#### 2. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L11` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/350.js#L8) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/350.js#L11)

```diff
-     var Fz = sz(40849);
+     var hv = Pv(41033);
```

#### 3. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L13-L25` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/350.js#L10-L11) · [Before (L13-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/350.js#L13-L25)

```diff
-     function Wz(zz) {
-       const tz = zz.camera;
-       if (!tz) return {
-         x: 0,
-         y: 0,
-         z: 0
-       };
-       const sz = tz.worldMatrix;
-       return {
-         x: sz[12],
-         y: sz[13],
-         z: sz[14]
-       }
+     function Sv() {
+       return new hv.h(16)
```

#### 4. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L27-L58` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/350.js#L13) · [Before (L27-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/350.js#L27-L58)

```diff
- 
-     function Xz(zz) {
-       return zz.camera ? zz.camera.worldMatrixVersion : 0
-     }
- 
-     function Oz(zz, tz) {
-       const sz = tz.camera?.worldMatrix;
-       if (!sz) return;
-       const Wz = sz[12],
-         Xz = sz[13],
-         Oz = sz[14];
-       let oz = 0;
-       for (const vz of tz.lights) {
-         if (oz >= Fz.e) break;
-         if (!vz._writeLightUbo) continue;
-         const tz = 4 + 16 * oz,
- ... (16 more removed lines; see GitHub link above)
+     Sv["@@MAT4_STORAGE_F64@@"] = !0
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/351.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/351.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9df)

#### 1. `bundles/bloxd.io/chunks/js/351.js` (Changed code · before: `L4-L9` → after: `L4-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9dfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9df) · [After (L4-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/351.js#L4-L25) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/351.js#L4-L9)

```diff
-   60407: (zz, tz, sz) => {
-     function Fz(zz, tz, sz, Fz, Wz, Xz, Oz) {
-       const oz = tz,
-         vz = Fz,
-         Uz = sz;
-       zz[Uz + 0] = oz[vz + 0], zz[Uz + 1] = oz[vz + 1], zz[Uz + 2] = oz[vz + 2], zz[Uz + 3] = oz[vz + 3], zz[Uz + 4] = oz[vz + 4], zz[Uz + 5] = oz[vz + 5], zz[Uz + 6] = oz[vz + 6], zz[Uz + 7] = oz[vz + 7], zz[Uz + 8] = oz[vz + 8], zz[Uz + 9] = oz[vz + 9], zz[Uz + 10] = oz[vz + 10 … [truncated]
+   60666: (vv, zv, Pv) => {
+     Pv.r(zv), Pv.d(zv, {
+       applyLightFoOffset: () => gv,
+       getFloatingOriginOffset: () => Sv,
+       lightFoVersion: () => ev,
+       wrapRenderableForFO: () => pv
+     });
+     var hv = Pv(41037);
+ 
+     function Sv(vv) {
+       const zv = vv.camera;
+       if (!zv) return {
+         x: 0,
+         y: 0,
+         z: 0
+       };
+ ... (6 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/351.js` (Changed code · before: `L13-L17` → after: `L29-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9dfR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9df) · [After (L29-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/351.js#L29-L48) · [Before (L13-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/351.js#L13-L17)

```diff
-       return (tz, sz, Wz, Xz) => {
-         const Oz = zz.camera;
-         if (!Oz) return void Fz(tz, sz, Wz, Xz, 0, 0, 0);
-         const oz = Oz.worldMatrix;
-         Fz(tz, sz, Wz, Xz, oz[12], oz[13], oz[14])
+       return vv.camera ? vv.camera.worldMatrixVersion : 0
+     }
+ 
+     function gv(vv, zv) {
+       const Pv = zv.camera?.worldMatrix;
+       if (!Pv) return;
+       const Sv = Pv[12],
+         ev = Pv[13],
+         gv = Pv[14];
+       let pv = 0;
+       for (const dv of zv.lights) {
+         if (pv >= hv.c) break;
+         if (!dv._writeLightUbo) continue;
+         const zv = 4 + 16 * pv,
+           Pv = vv[zv + 3];
+         if (0 === Pv || 2 === Pv) {
+ ... (4 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/351.js` (Changed code · before: `L20-L23` → after: `L51-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9dfR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9df) · [After (L51-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/351.js#L51-L58) · [Before (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/351.js#L20-L23)

```diff
-     sz.r(tz), sz.d(tz, {
-       makePackMeshWorld: () => Wz,
-       packMat4IntoF32WithOffset: () => Fz
-     })
+ 
+     function pv(vv, zv, Pv) {
+       let hv = -1;
+       return () => {
+         const Sv = zv.camera ? zv.camera.worldMatrixVersion : -1;
+         Sv !== hv && (Pv(), hv = Sv), vv()
+       }
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/352.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/352.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130)

#### 1. `bundles/bloxd.io/chunks/js/352.js` (Changed code · before: `L4-L6` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/352.js#L4-L9) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/352.js#L4-L6)

```diff
-   60413: (zz, tz, sz) => {
-     function Fz(zz) {
-       return zz.features.has("timestamp-query")
+   60673: (vv, zv, Pv) => {
+     function hv(vv, zv, Pv, hv, Sv, ev, gv) {
+       const pv = zv,
+         dv = hv,
+         Nv = Pv;
+       vv[Nv + 0] = pv[dv + 0], vv[Nv + 1] = pv[dv + 1], vv[Nv + 2] = pv[dv + 2], vv[Nv + 3] = pv[dv + 3], vv[Nv + 4] = pv[dv + 4], vv[Nv + 5] = pv[dv + 5], vv[Nv + 6] = pv[dv + 6], vv[Nv + 7] = pv[dv + 7], vv[Nv + 8] = pv[dv + 8], vv[Nv + 9] = pv[dv + 9], vv[Nv + 10] = pv[dv + 10 … [truncated]
```

#### 2. `bundles/bloxd.io/chunks/js/352.js` (Changed code · before: `L10-L75` → after: `L13-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130) · [After (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/352.js#L13-L18) · [Before (L10-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/352.js#L10-L75)

```diff
-       return Fz(zz) ? {
-         device: zz,
-         markerPipeline: zz.createComputePipeline({
-           layout: "auto",
-           compute: {
-             module: zz.createShaderModule({
-               code: "@compute @workgroup_size(1) fn main() {}"
-             }),
-             entryPoint: "main"
-           }
-         }),
-         querySet: zz.createQuerySet({
-           type: "timestamp",
-           count: 2
-         }),
-         resolveBuf: zz.createBuffer({
- ... (50 more removed lines; see GitHub link above)
+       return (zv, Pv, Sv, ev) => {
+         const gv = vv.camera;
+         if (!gv) return void hv(zv, Pv, Sv, ev, 0, 0, 0);
+         const pv = gv.worldMatrix;
+         hv(zv, Pv, Sv, ev, pv[12], pv[13], pv[14])
+       }
```

#### 3. `bundles/bloxd.io/chunks/js/352.js` (Changed code · before: `L78-L83` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/352.js#L21-L22) · [Before (L78-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/352.js#L78-L83)

```diff
-       createGpuFrameTimer: () => Wz,
-       destroyGpuFrameTimer: () => vz,
-       gpuFrameTimerBegin: () => Xz,
-       gpuFrameTimerEnd: () => Oz,
-       gpuFrameTimerResolve: () => oz,
-       gpuTimingSupportedFor: () => Fz
+       makePackMeshWorld: () => Sv,
+       packMat4IntoF32WithOffset: () => hv
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/353.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/353.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3)

#### 1. `bundles/bloxd.io/chunks/js/353.js` (Changed code · before: `L4-L7` → after: `L4-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3) · [After (L4-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/353.js#L4-L32) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/353.js#L4-L7)

```diff
-   60418: (zz, tz, sz) => {
-     function Fz(zz, tz) {
-       for (const sz of zz._frameGraph._tasks)
-         if (sz?._config && sz._colorAttachment && (sz._config.rt === tz.scRT || sz._config.rst === tz.scRT)) return sz
+   60678: (vv, zv, Pv) => {
+     function hv(vv) {
+       return vv.features.has("timestamp-query")
+     }
+ 
+     function Sv(vv) {
+       return hv(vv) ? {
+         device: vv,
+         markerPipeline: vv.createComputePipeline({
+           layout: "auto",
+           compute: {
+             module: vv.createShaderModule({
+               code: "@compute @workgroup_size(1) fn main() {}"
+             }),
+             entryPoint: "main"
+           }
+ ... (13 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/353.js` (Changed code · before: `L11-L20` → after: `L36-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3) · [After (L36-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/353.js#L36-L68) · [Before (L11-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/353.js#L11-L20)

```diff
-       const sz = zz._renderingContexts[zz._renderingContexts.length - 1];
-       if (!sz?._frameGraph) return;
-       const Wz = Fz(tz, zz);
-       if (!Wz) return;
-       if (1 === zz.msaaSamples) return void(Wz._config.clr = !1);
-       const Xz = Wz.enabled;
-       Wz._config.clr = !0, Wz.enabled = !1, tz._beforeRender.unshift((() => {
-         const tz = Fz(sz, zz),
-           Oz = tz?._config.rst === zz.scRT && tz._config.rt._colorView;
-         Wz.enabled = !!Oz && Xz, Wz._config.clr = !Oz, Oz && (Wz._colorAttachment.view = Oz)
+       const Pv = zv.beginComputePass({
+         timestampWrites: {
+           querySet: vv.querySet,
+           beginningOfPassWriteIndex: 0
+         }
+       });
+       Pv.setPipeline(vv.markerPipeline), Pv.dispatchWorkgroups(1), Pv.end()
+     }
+ 
+     function gv(vv, zv) {
+       const Pv = zv.beginComputePass({
+         timestampWrites: {
+           querySet: vv.querySet,
+           endOfPassWriteIndex: 1
+         }
+       });
+ ... (17 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/353.js` (Changed code · before: `L24` → after: `L78-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3) · [After (L78-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/353.js#L78-L83) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/353.js#L24)

```diff
-       configureSwapchainOverlayScene: () => Wz
+       createGpuFrameTimer: () => Sv,
+       destroyGpuFrameTimer: () => dv,
+       gpuFrameTimerBegin: () => ev,
+       gpuFrameTimerEnd: () => gv,
+       gpuFrameTimerResolve: () => pv,
+       gpuTimingSupportedFor: () => hv
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/354.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/354.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248)

#### 1. `bundles/bloxd.io/chunks/js/354.js` (Changed code · before: `L4-L11` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/354.js#L4-L7) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/354.js#L4-L11)

```diff
-   60426: (zz, tz, sz) => {
-     sz.d(tz, {
-       createShadowTask: () => Xz
-     });
-     var Fz = null;
- 
-     function Wz(zz) {
-       return Fz?.get(zz)
+   60683: (vv, zv, Pv) => {
+     function hv(vv, zv) {
+       for (const Pv of vv._frameGraph._tasks)
+         if (Pv?._config && Pv._colorAttachment && (Pv._config.rt === zv.scRT || Pv._config.rst === zv.scRT)) return Pv
```

#### 2. `bundles/bloxd.io/chunks/js/354.js` (Changed code · before: `L15-L71` → after: `L11-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248) · [After (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/354.js#L11-L21) · [Before (L15-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/354.js#L15-L71)

```diff
-       const sz = new Set;
-       0;
-       const Fz = {
-         name: "ew",
-         engine: zz,
-         Kg: tz,
-         _passes: [],
-         async _preload() {
-           const zz = [];
-           for (const sz of tz.lights) {
-             const tz = sz.shadowGenerator,
-               Fz = tz ? Wz(tz) : null;
-             tz?._preloadShadowTask && Fz && zz.push(Oz(tz, Fz))
-           }
-           await Promise.all(zz)
-         },
- ... (41 more removed lines; see GitHub link above)
+       const Pv = vv._renderingContexts[vv._renderingContexts.length - 1];
+       if (!Pv?._frameGraph) return;
+       const Sv = hv(zv, vv);
+       if (!Sv) return;
+       if (1 === vv.msaaSamples) return void(Sv._config.clr = !1);
+       const ev = Sv.enabled;
+       Sv._config.clr = !0, Sv.enabled = !1, zv._beforeRender.unshift((() => {
+         const zv = hv(Pv, vv),
+           gv = zv?._config.rst === vv.scRT && zv._config.rt._colorView;
+         Sv.enabled = !!gv && ev, Sv._config.clr = !gv, gv && (Sv._colorAttachment.view = gv)
+       }))
```

#### 3. `bundles/bloxd.io/chunks/js/354.js` (Changed code · before: `L73-L75` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/354.js#L23-L25) · [Before (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/354.js#L73-L75)

```diff
-     async function Oz(zz, tz) {
-       zz._preloadPending = tz, await (zz._preloadShadowTask?.(tz)), zz._preloadPending === tz && (zz._preloadPending = void 0)
-     }
+     Pv.r(zv), Pv.d(zv, {
+       configureSwapchainOverlayScene: () => Sv
+     })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/355.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/355.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7de)

#### 1. `bundles/bloxd.io/chunks/js/355.js` (Changed code · before: `L4-L9` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7deR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7de) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/355.js#L4-L6) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/355.js#L4-L9)

```diff
-   60430: (zz, tz, sz) => {
-     sz.r(tz), sz.d(tz, {
-       A: () => Uz,
-       B: () => uz,
-       C: () => Kz,
-       X: () => Nz
+   60688: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       createShadowTask: () => ev
```

#### 2. `bundles/bloxd.io/chunks/js/355.js` (Changed code · before: `L11-L69` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7deR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7de) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/355.js#L8) · [Before (L11-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/355.js#L11-L69)

```diff
-     var Fz = sz(40840),
-       Wz = (zz, tz) => zz.order - tz.order;
- 
-     function Xz(zz, tz, sz) {
-       zz.pendingDisposers.set(tz, sz)
-     }
- 
-     function Oz(zz, tz, sz) {
-       sz && zz.pendingDisposers.get(tz) === sz && zz.pendingDisposers.delete(tz)
-     }
-     var oz = null,
-       vz = null;
- 
-     function Uz(zz, tz, sz, Fz) {
-       if (!tz || sz.material !== tz) return Fz ?? Promise.resolve();
-       const Wz = uz(zz, tz._buildGroup, sz);
- ... (43 more removed lines; see GitHub link above)
+     var hv = null;
```

#### 3. `bundles/bloxd.io/chunks/js/355.js` (Changed code · before: `L72-L282` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7deR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7de) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/355.js#L11) · [Before (L72-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/355.js#L72-L282)

```diff
-       const tz = {
-           lw: !1,
-           error: null,
-           active: new Set,
-           chains: new WeakMap,
-           generations: new WeakMap,
-           installed: new WeakMap,
-           installedMeshes: new Set,
-           pendingDisposers: new WeakMap,
-           tail: null
-         },
-         sz = zz,
-         Uz = {
-           queue: (sz, Kz) => {
-             const uz = (tz.generations.get(Kz) ?? 0) + 1,
-               Nz = Kz.material;
- ... (195 more removed lines; see GitHub link above)
+       return hv?.get(vv)
```

#### 4. `bundles/bloxd.io/chunks/js/355.js` (Changed code · before: `L286-L288` → after: `L15-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7deR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7de) · [After (L15-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/355.js#L15-L74) · [Before (L286-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/355.js#L286-L288)

```diff
-       if (!tz.lw) return;
-       const sz = zz._disposables.splice(0);
-       for (const Fz of sz) Fz()
+       const Pv = new Set;
+       0;
+       const hv = {
+         name: "Jw",
+         engine: vv,
+         Is: zv,
+         _passes: [],
+         async _preload() {
+           const vv = [];
+           for (const Pv of zv.lights) {
+             const zv = Pv.shadowGenerator,
+               hv = zv ? Sv(zv) : null;
+             zv?._preloadShadowTask && hv && vv.push(gv(zv, hv))
+           }
+           await Promise.all(vv)
+         },
+ ... (44 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/356.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/356.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9)

#### 1. `bundles/bloxd.io/chunks/js/356.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/356.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/356.js#L4)

```diff
-   60562: (zz, tz, sz) => {
+   60696: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/356.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/356.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/356.js#L6)

```diff
-       postprocessVertexShaderWGSL: () => Oz
+       A: () => Nv,
+       B: () => Tv,
+       C: () => lv,
+       X: () => Wv
```

#### 3. `bundles/bloxd.io/chunks/js/356.js` (Changed code · before: `L8-L14` → after: `L11-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9) · [After (L11-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/356.js#L11-L288) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/356.js#L8-L14)

```diff
-     var Fz = sz(39041);
-     const Wz = "postprocessVertexShader",
-       Xz = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.posi … [truncated]
-     Fz.e.ShadersStoreWGSL[Wz] || (Fz.e.ShadersStoreWGSL[Wz] = Xz);
-     const Oz = {
-       name: Wz,
-       shader: Xz
+     var hv = Pv(41035),
+       Sv = (vv, zv) => vv.order - zv.order;
+ 
+     function ev(vv, zv, Pv) {
+       vv.pendingDisposers.set(zv, Pv)
+     }
+ 
+     function gv(vv, zv, Pv) {
+       Pv && vv.pendingDisposers.get(zv) === Pv && vv.pendingDisposers.delete(zv)
+     }
+     var pv = null,
+       dv = null;
+ 
+     function Nv(vv, zv, Pv, hv) {
+       if (!zv || Pv.material !== zv) return hv ?? Promise.resolve();
+       const Sv = Tv(vv, zv._buildGroup, Pv);
+ ... (262 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/357.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/357.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68b)

#### 1. `bundles/bloxd.io/chunks/js/357.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/357.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/357.js#L4)

```diff
-   60575: (zz, tz, sz) => {
+   60814: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/357.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/357.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/357.js#L6)

```diff
-       lod3DPixelShader: () => Oz
+       postprocessVertexShaderWGSL: () => gv
```
