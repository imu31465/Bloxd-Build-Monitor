# Changed — Bundle Modifications Report (Part 019 / 056)

- **Updated at**: `2026-11-25T18:33 JST`
- **Part**: `19 / 56` (**250** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 018](part-018.md) · [Part 020 →](part-020.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/388.js` (sn3sfj.2522680a → 8104he.3820eae0 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/388.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3)

#### 8. `bundles/preprod.bloxd.io/chunks/js/388.js` (Changed code · before: `L35-L51` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/388.js#L86-L89) · [Before (L35-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/388.js#L35-L51)

```diff
-     var Op = cp(40062),
-       op = cp(42496),
-       Ip = cp(42498),
-       Sp = cp(61875),
-       xp = cp(42513),
-       Lp = cp(42542),
-       Yp = cp(42520),
-       Dp = cp(61745),
-       Ap = cp(42525),
-       Pp = cp(42527),
-       Wp = cp(42531),
-       yp = cp(42536),
-       Up = cp(42550),
-       wp = cp(61754);
-     const vp = "openpbrNormalMapVertexDeclaration",
-       tp = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
- ... (1 more removed lines; see GitHub link above)
+     var wQ = XQ(40126);
+     const qQ = "pbrDebug",
+       TQ = "#if DEBUGMODE>0\nif (vClipSpacePosition.x/vClipSpacePosition.w>=vDebugMode.x) {\n#if DEBUGMODE==1\ngl_FragColor.rgb=vPositionW.rgb;\n#define DEBUGMODE_NORMALIZE\n#elif DEBUGMODE==2 && defined(NORMAL)\ngl_FragColor.rgb=vNormalW.rgb;\n#define DEBUGMODE_NORMALIZE\n#elif  … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/388.js` (Changed code · before: `L55-L74` → after: `L93-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3) · [After (L93-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/388.js#L93-L102) · [Before (L55-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/388.js#L55-L74)

```diff
-     };
-     var dp = cp(42565),
-       ep = cp(42567),
-       jp = cp(42576),
-       kp = cp(42584),
-       mp = cp(42589),
-       Rp = cp(42598),
-       qp = cp(42602),
-       Mp = cp(42610),
-       Cp = cp(42612),
-       Ep = cp(42617),
-       Xp = cp(42624),
-       lp = cp(42632),
-       Qp = cp(42639),
-       Jp = cp(42644),
-       Bp = cp(42653),
- ... (4 more removed lines; see GitHub link above)
+     }
+   },
+   61863: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "pbrDirectLightingFalloffFunctions",
+       TQ = "float computeDistanceLightFalloff_Standard(vec3 lightOffset,float range)\n{return max(0.,1.0-length(lightOffset)/range);}\nfloat computeDistanceLightFalloff_Physical(float lightDistanceSquared)\n{return 1.0/maxEps(lightDistanceSquared);}\nfloat computeDistanceLightFal … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/388.js` (Changed code · before: `L78-L88` → after: `L106-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3) · [After (L106-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/388.js#L106-L195) · [Before (L78-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/388.js#L78-L88)

```diff
-     };
-     var hp = cp(42677),
-       ap = cp(42680),
-       np = cp(42684),
-       Fp = cp(42688),
-       gp = cp(42697);
-     const Gp = "openpbrVertexShader",
-       rp = "#define OPENPBR_VERTEX_SHADER\n#include<openpbrUboDeclaration>\n#define CUSTOM_VERTEX_BEGIN\n#ifndef USE_VERTEX_PULLING\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef TANGENT\nattribute tangent: vec4f;\n#endif\n#ifdef UV1\nattribu … [truncated]
-     Op.b.ShadersStoreWGSL[Gp] || (Op.b.ShadersStoreWGSL[Gp] = rp);
-     const Zp = [op.e, Ip.e, Sp.c, xp.b, Lp.e, Yp.e, Dp.c, Ap.c, Pp.e, Wp.d, yp.c, Up.e, wp.b, Hp, dp.c, ep.c, jp.e, kp.d, mp.e, Rp.d, qp.e, Mp.e, Cp.d, Ep.c, Xp.b, lp.b, Qp.c, Jp.e, Bp.b, Np.d, bp, hp.e, ap.d, np.b, Fp.d, gp.b];
-     for (const sp of Zp) Op.b.IncludesShadersStoreWGSL[sp.name] || (Op.b.IncludesShadersStoreWGSL[sp.name] = sp.shader);
+     }
+   },
+   61869: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "pbrDirectLightingFunctions",
+       TQ = "#define CLEARCOATREFLECTANCE90 1.0\nstruct lightingInfo\n{vec3 diffuse;\n#ifdef SS_TRANSLUCENCY\nvec3 diffuseTransmission;\n#endif\n#ifdef SPECULARTERM\nvec3 specular;\n#endif\n#ifdef CLEARCOAT\nvec4 clearCoat;\n#endif\n#ifdef SHEEN\nvec3 sheen;\n#endif\n};float adjus … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   61857: (QQ, WQ, XQ) => {
+ ... (74 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/389.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/389.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/389.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/389.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/389.js#L4)

```diff
-   61844: (pp, ip, cp) => {
+   61816: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/389.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/389.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/389.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "openpbrDielectricReflectance",
-       Ip = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "harmonicsFunctions",
+       TQ = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/389.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/389.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/389.js#L17)

```diff
-   61849: (pp, ip, cp) => {
+   62018: (QQ, WQ, XQ) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/389.js` (Changed code · before: `L21-L74` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/389.js#L21-L22) · [Before (L21-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/389.js#L21-L74)

```diff
-     var Op = cp(40062);
-     const op = "openpbrGeometryInfo",
-       Ip = "struct geometryInfoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;};struct geometryInfoAnisoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;float anisotropy;vec3 anisotropicTangent;vec3 … [truncated]
-     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
-     const Sp = {
-       name: op,
-       shader: Ip
-     }
-   },
-   61858: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "openpbrIblFunctions",
-       Ip = "#ifdef REFLECTION\nvec3 sampleIrradiance(\nin vec3 surfaceNormal\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,in vec3 vEnvironmentIrradianceSH\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || ( … [truncated]
- ... (38 more removed lines; see GitHub link above)
+     var wQ = XQ(40126);
+     XQ(42137), XQ(42143);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/389.js` (Changed code · before: `L83` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/389.js#L31) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/389.js#L83)

```diff
-   61840: (pp, ip, cp) => {
+   61807: (QQ, WQ, XQ) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/389.js` (Changed code · before: `L87-L89` → after: `L35-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1) · [After (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/389.js#L35-L37) · [Before (L87-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/389.js#L87-L89)

```diff
-     var Op = cp(40062);
-     const op = "sceneFragmentDeclaration",
-       Ip = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;uniform mat4 inverseProjection;\n";
+     var wQ = XQ(40126);
+     const qQ = "pbrBRDFFunctions",
+       TQ = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/389.js` (Changed code · before: `L96` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/389.js#L44) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/389.js#L96)

```diff
-   61838: (pp, ip, cp) => {
+   62010: (QQ, WQ, XQ) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/389.js` (Changed code · before: `L98` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/389.js#L46) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/389.js#L98)

```diff
-       openpbrPixelShader: () => Dc
+       openpbrVertexShader: () => WW
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/389.js` (Changed code · before: `L100-L107` → after: `L48-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1) · [After (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/389.js#L48-L50) · [Before (L100-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/389.js#L100-L107)

```diff
-     var Op = cp(40062),
-       op = cp(42362),
-       Ip = cp(42365),
-       Sp = cp(42369),
-       xp = cp(61840),
-       Lp = cp(42359);
-     const Yp = "openpbrFragmentDeclaration",
-       Dp = "uniform float vBaseWeight;uniform vec4 vBaseColor;uniform float vBaseDiffuseRoughness;uniform vec4 vReflectanceInfo;uniform vec4 vSpecularColor;uniform vec3 vSpecularAnisotropy;uniform float vTransmissionWeight;uniform vec3 vTransmissionColor;uniform float vTransmissi … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "sceneVertexDeclaration",
+       TQ = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;\n";
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/389.js` (Changed code · before: `L113-L123` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/389.js#L56-L58) · [Before (L113-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/389.js#L113-L123)

```diff
-     var Pp = cp(42157),
-       Wp = cp(42159),
-       yp = cp(61834),
-       Up = cp(42206),
-       wp = cp(61653),
-       vp = cp(42373),
-       tp = cp(42376),
-       Hp = cp(42403),
-       dp = cp(61660);
-     const ep = "openpbrFragmentSamplersDeclaration",
-       jp = "#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor,_SAMPLERNAME_,baseColor)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFIN … [truncated]
+     var sQ = XQ(42131);
+     const FQ = "openpbrVertexDeclaration",
+       PQ = "#include<sceneVertexDeclaration>\n#ifdef BASE_COLOR\nuniform vec2 vBaseColorInfos;uniform mat4 baseColorMatrix;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBaseWeightInfos;\n#endif\nuniform float vBaseDiffuseRoughness;\n#ifdef BASE_DIFFUSE … [truncated]
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/389.js` (Changed code · before: `L129-L263` → after: `L64-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1) · [After (L64-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/389.js#L64-L78) · [Before (L129-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/389.js#L129-L263)

```diff
-     var mp = cp(42412),
-       Rp = cp(42436),
-       qp = cp(42266),
-       Mp = cp(42443),
-       Cp = cp(42418),
-       Ep = cp(42174),
-       Xp = cp(61666),
-       lp = cp(61669),
-       Qp = cp(61678),
-       Jp = cp(42416),
-       Bp = cp(42397),
-       Np = cp(61640),
-       Tp = cp(42385),
-       fp = cp(61685),
-       bp = cp(61692),
-       hp = cp(61632),
- ... (119 more removed lines; see GitHub link above)
+     var JQ = XQ(42137),
+       rQ = XQ(42143),
+       IQ = XQ(62018),
+       jQ = XQ(42155),
+       BQ = XQ(42184),
+       yQ = XQ(42158),
+       VQ = XQ(61807),
+       DQ = XQ(42162),
+       pQ = XQ(42164),
+       GQ = XQ(42169),
+       UQ = XQ(42175),
+       bQ = XQ(42188),
+       vQ = XQ(61816);
+     const dQ = "openpbrNormalMapVertexDeclaration",
+       HQ = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(GEOMETRY_COAT_NORMAL) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/389.js` (Changed code · before: `L269-L273` → after: `L84-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1) · [After (L84-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/389.js#L84-L100) · [Before (L269-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/389.js#L269-L273)

```diff
-     var Vi = cp(42470),
-       pc = cp(42476),
-       ic = cp(61724);
-     const cc = "openpbrBlockPrePass",
-       Oc = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nfloat writeGeometryInfo=1.0;\n#else\nfloat writeGeometryInfo=finalColor.a>ALPHATESTVALUE ? 1.0 : 0.0;\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_INDEX,vec4(vPositionW,writeGeometryInfo));\ … [truncated]
+     var lQ = XQ(42199),
+       hQ = XQ(42207),
+       iQ = XQ(42209),
+       cQ = XQ(42218),
+       AQ = XQ(42224),
+       RQ = XQ(42230),
+       EQ = XQ(42237),
+       CQ = XQ(42245),
+       uQ = XQ(42254),
+       LQ = XQ(42257),
+       kQ = XQ(42262),
+       fQ = XQ(42270),
+       SQ = XQ(42278),
+       tQ = XQ(42284),
+       oQ = XQ(42289);
+     const eQ = "openpbrNormalMapVertex",
+ ... (1 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/389.js` (Changed code · before: `L279-L282` → after: `L106-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1) · [After (L106-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/389.js#L106-L112) · [Before (L279-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/389.js#L279-L282)

```diff
-     var Ic = cp(42484),
-       Sc = cp(61733);
-     const xc = "openpbrPixelShader",
-       Lc = "#define OPENPBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_EXTENSION\n#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#ifdef … [truncated]
+     var YQ = XQ(42299),
+       NQ = XQ(42304),
+       ZQ = XQ(42313),
+       OQ = XQ(42316),
+       KQ = XQ(42319);
+     const mQ = "openpbrVertexShader",
+       MQ = "#define OPENPBR_VERTEX_SHADER\n#define CUSTOM_VERTEX_EXTENSION\nprecision highp float;\n#include<__decl__openpbrVertex>\n#define CUSTOM_VERTEX_BEGIN\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef TANGENT\nattribute vec4 tangent;\n#end … [truncated]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/389.js` (Changed code · before: `L284` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/389.js#L114) · [Before (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/389.js#L284)

```diff
-     const Yc = [op.e, Ip.c, Sp.b, xp.c, Lp.e, Ap, Pp.d, Wp.d, yp.e, Up.e, wp.c, vp.e, tp.c, Hp.e, dp.e, kp, mp.b, Rp.e, qp.e, Mp.b, Cp.e, Ep.c, Xp.e, lp.c, Qp.c, Jp.c, Bp.b, Np.c, Tp.b, fp.c, bp.c, hp.e, ap.b, np.b, Fp.e, rp, sp, Kp.d, Vp.c, Oi, Si, xi.d, Li.b, Ai, Pi.d, Wi.c, wi … [truncated]
+     const QW = [zQ, sQ.e, gQ, JQ.e, rQ.b, IQ.d, jQ.b, BQ.e, yQ.b, VQ.c, DQ.e, pQ.e, GQ.c, UQ.d, bQ.c, vQ.c, aQ, lQ.c, hQ.b, iQ.e, cQ.b, AQ.c, RQ.b, EQ.e, CQ.c, uQ.e, LQ.d, kQ.e, fQ.c, SQ.d, tQ.e, oQ.c, xQ, YQ.d, NQ.e, ZQ.d, OQ.d, KQ.d];
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/390.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/390.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L47-L49` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L8-L11) · [Before (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L47-L49)

```diff
-     var Op = cp(40062);
-     const op = "openpbrSubsurfaceLayerData",
-       Ip = "var subsurface_weight: f32=uniforms.vSubsurfaceWeight;var subsurface_color: vec3f=uniforms.vSubsurfaceColor.rgb;var subsurface_radius: f32=uniforms.vSubsurfaceRadius;var subsurface_radius_scale: vec3f=uniforms.vSubsurfaceRadiusScale;var subsurface_scatter_anisotropy:  … [truncated]
+     var wQ = XQ(40126);
+     XQ(42500), XQ(42509);
+     const qQ = "pbrUboDeclaration",
+       TQ = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L56-L58` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L18-L20) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L56-L58)

```diff
-   61897: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp
+   61922: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       pbrPixelShaderWGSL: () => jX
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L60-L62` → after: `L22-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L22-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L22-L34) · [Before (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L60-L62)

```diff
-     var Op = cp(40062);
-     const op = "openpbrTransmissionLayerData",
-       Ip = "var transmission_weight: f32=uniforms.vTransmissionWeight;var transmission_color: vec3f=uniforms.vTransmissionColor.rgb;var transmission_depth: f32=uniforms.vTransmissionDepth;var transmission_scatter: vec3f=uniforms.vTransmissionScatter.rgb;var transmission_scatter_a … [truncated]
+     var wQ = XQ(40126),
+       qQ = XQ(42689),
+       TQ = XQ(42697),
+       zQ = XQ(42701),
+       sQ = XQ(42500),
+       FQ = XQ(42509),
+       PQ = XQ(61903),
+       gQ = XQ(42555),
+       JQ = XQ(61930),
+       rQ = XQ(42707),
+       IQ = XQ(42738);
+     const jQ = "samplerFragmentAlternateDeclaration",
+       BQ = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L67-L76` → after: `L39-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L39-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L39-L42) · [Before (L67-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L67-L76)

```diff
-     }
-   },
-   61875: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Sp
-     });
-     var Op = cp(40062);
-     cp(42496), cp(42498);
-     const op = "openpbrUboDeclaration",
-       Ip = "uniform vTangentSpaceParams: vec2f;uniform vLightingIntensity: vec4f;uniform pointSize: f32;uniform vDebugMode: vec2f;uniform renderTargetSize: vec2f;uniform cameraInfo: vec4f;uniform vTextureRepetitionHexTilingParams: vec4f;uniform backgroundRefractionMatrix: mat4x4f … [truncated]
+     };
+     var VQ = XQ(61934);
+     const DQ = "pbrFragmentSamplersDeclaration",
+       pQ = "#include<samplerFragmentDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_SAMPLERNAME_,albedo)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BAS … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L81-L96` → after: `L47-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L47-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L47-L71) · [Before (L81-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L81-L96)

```diff
-     }
-   },
-   61881: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       openpbrPixelShaderWGSL: () => Lc
-     });
-     var Op = cp(40062),
-       op = cp(42711),
-       Ip = cp(42714),
-       Sp = cp(42718),
-       xp = cp(42496),
-       Lp = cp(42498),
-       Yp = cp(61875),
-       Dp = cp(42542),
-       Ap = cp(61762),
-       Pp = cp(42721),
+     };
+     var UQ = XQ(42747),
+       bQ = XQ(42774),
+       vQ = XQ(42598),
+       dQ = XQ(42780),
+       HQ = XQ(42757),
+       aQ = XQ(42523),
+       lQ = XQ(61940),
+       hQ = XQ(61948),
+       iQ = XQ(61953),
+       cQ = XQ(42749),
+       AQ = XQ(42729),
+       RQ = XQ(61920),
+       EQ = XQ(42716),
+       CQ = XQ(61957),
+       uQ = XQ(61965),
+ ... (9 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L98-L100` → after: `L73-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L73-L75) · [Before (L98-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L98-L100)

```diff
-       yp = cp(61766);
-     const Up = "openpbrFragmentSamplersDeclaration",
-       wp = "#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor,_SAMPLERNAME_,baseColor)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFIN … [truncated]
+       NQ = XQ(42793);
+     const ZQ = "pbrBlockAlbedoOpacity",
+       OQ = "struct albedoOpacityOutParams\n{surfaceAlbedo: vec3f,\nalpha: f32};\n#define pbr_inline\nfn albedoOpacityBlock(\nvAlbedoColor: vec4f\n#ifdef ALBEDO\n,albedoTexture: vec4f\n,albedoInfos: vec2f\n#endif\n,baseWeight: f32\n#ifdef BASE_WEIGHT\n,baseWeightTexture: vec4f\n,v … [truncated]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L103-L129` → after: `L78-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L78-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L78-L82) · [Before (L103-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L103-L129)

```diff
-       name: Up,
-       shader: wp
-     };
-     var tp = cp(42752),
-       Hp = cp(42783),
-       dp = cp(42598),
-       ep = cp(42790),
-       jp = cp(42765),
-       kp = cp(42520),
-       mp = cp(61771),
-       Rp = cp(61778),
-       qp = cp(61780),
-       Mp = cp(42759),
-       Cp = cp(42736),
-       Ep = cp(61754),
-       Xp = cp(42726),
- ... (11 more removed lines; see GitHub link above)
+         name: ZQ,
+         shader: OQ
+       },
+       mQ = "pbrBlockReflectivity",
+       MQ = "struct reflectivityOutParams\n{microSurface: f32,\nroughness: f32,\ndiffuseRoughness: f32,\nreflectanceF0: f32,\nreflectanceF90: vec3f,\ncolorReflectanceF0: vec3f,\ncolorReflectanceF90: vec3f,\n#ifdef METALLICWORKFLOW\nsurfaceAlbedo: vec3f,\nmetallic: f32,\nspecularWe … [truncated]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L135-L136` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L88-L89) · [Before (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L135-L136)

```diff
-       gp = "openpbrNormalMapFragmentFunctions",
-       Gp = "#if defined(GEOMETRY_NORMAL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_NORMAL,_VARYINGNAME_,GeometryNormal,_SAMPLERNAME_,geometryNormal)\n#endif\n#if defined(GEOMETRY_COAT_NORMAL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_COAT_NORMA … [truncated]
+       WW = "pbrBlockAmbientOcclusion",
+       XW = "struct ambientOcclusionOutParams\n{ambientOcclusionColor: vec3f,\n#if DEBUGMODE>0 && defined(AMBIENT)\nambientOcclusionColorMap: vec3f\n#endif\n};\n#define pbr_inline\nfn ambientOcclusionBlock(\n#ifdef AMBIENT\nambientOcclusionColorMap_: vec3f,\nvAmbientInfos: vec4f\n … [truncated]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L139-L145` → after: `L92-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L92-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L92-L96) · [Before (L139-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L139-L145)

```diff
-       name: gp,
-       shader: Gp
-     };
-     var Zp = cp(42749),
-       zp = cp(61883);
-     const sp = "openpbrConductorReflectance",
-       Kp = "#define pbr_inline\nfn conductorReflectance(baseColor: vec3f,specularColor: vec3f,specularWeight: f32)->ReflectanceParams\n{var outParams: ReflectanceParams;\n#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)\noutParams.coloredF0=baseColor*specularWeigh … [truncated]
+         name: WW,
+         shader: XW
+       },
+       qW = "pbrBlockAlphaFresnel",
+       TW = "#ifdef ALPHAFRESNEL\n#if defined(ALPHATEST) || defined(ALPHABLEND)\nstruct alphaFresnelOutParams\n{alpha: f32};fn faceforward(N: vec3<f32>,I: vec3<f32>,Nref: vec3<f32>)->vec3<f32> {return select(N,-N,dot(Nref,I)>0.0);}\n#define pbr_inline\nfn alphaFresnelBlock(\nnorma … [truncated]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L151-L152` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L102-L103) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L151-L152)

```diff
-       ii = "openpbrAmbientOcclusionFunctions",
-       ci = "fn compute_specular_occlusion(n_dot_v: f32,metallic: f32,ambient_occlusion: f32,roughness: f32)->f32\n{let specular_occlusion: f32=saturate(pow(n_dot_v+ambient_occlusion,exp2(-16.0*roughness-1.0))-1.0+ambient_occlusion);return mix(specular_occlusion,1.0,metallic*squar … [truncated]
+       sW = "pbrBlockAnisotropic",
+       FW = "#ifdef ANISOTROPIC\nstruct anisotropicOutParams\n{anisotropy: f32,\nanisotropicTangent: vec3f,\nanisotropicBitangent: vec3f,\nanisotropicNormal: vec3f,\n#if DEBUGMODE>0 && defined(ANISOTROPIC_TEXTURE)\nanisotropyMapData: vec3f\n#endif\n};\n#define pbr_inline\nfn aniso … [truncated]
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L155-L161` → after: `L106-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L106-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L106-L110) · [Before (L155-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L155-L161)

```diff
-       name: ii,
-       shader: ci
-     };
-     var oi = cp(61885),
-       Ii = cp(61889);
-     const Si = "openpbrVolumeFunctions",
-       xi = "struct OpenPBRHomogeneousVolume {extinction_coeff: vec3f, \nss_albedo: vec3f, \nmulti_scatter_color: vec3f, \nabsorption_coeff: vec3f, \nscatter_coeff: vec3f, \nanisotropy: f32, };fn computeOpenPBRTransmissionVolume(\ntransmission_color: vec3f,\ntransmission_depth: f3 … [truncated]
+         name: sW,
+         shader: FW
+       },
+       gW = "pbrBlockReflection",
+       JW = "#ifdef REFLECTION\nstruct reflectionOutParams\n{environmentRadiance: vec4f\n,environmentIrradiance: vec3f\n#ifdef REFLECTIONMAP_3D\n,reflectionCoords: vec3f\n#else\n,reflectionCoords: vec2f\n#endif\n#ifdef SS_TRANSLUCENCY\n#ifdef USESPHERICALFROMREFLECTIONMAP\n#if !de … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L164-L170` → after: `L113-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L113-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L113-L124) · [Before (L164-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L164-L170)

```diff
-       name: Si,
-       shader: xi
-     };
-     var Yi = cp(42794),
-       Di = cp(61820);
-     const Ai = "openpbrNormalMapFragment",
-       Pi = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(GEOMETRY_NORMAL)\nvar normalScale: f32=uniforms.vGeometryNormalI … [truncated]
+         name: gW,
+         shader: JW
+       },
+       IW = "pbrBlockSheen",
+       jW = "#ifdef SHEEN\nstruct sheenOutParams\n{sheenIntensity: f32\n,sheenColor: vec3f\n,sheenRoughness: f32\n#ifdef SHEEN_LINKWITHALBEDO\n,surfaceAlbedo: vec3f\n#endif\n#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)\n,sheenAlbedoScaling: f32\n#endif\n#if defined … [truncated]
+     wQ.b.IncludesShadersStoreWGSL[IW] || (wQ.b.IncludesShadersStoreWGSL[IW] = jW);
+     const BW = {
+         name: IW,
+         shader: jW
+       },
+       yW = "pbrBlockClearcoat",
+       VW = "struct clearcoatOutParams\n{specularEnvironmentR0: vec3f,\nconservationFactor: f32,\nclearCoatNormalW: vec3f,\nclearCoatAARoughnessFactors: vec2f,\nclearCoatIntensity: f32,\nclearCoatRoughness: f32,\n#ifdef REFLECTION\nfinalClearCoatRadianceScaled: vec3f,\n#endif\n#if … [truncated]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L176-L177` → after: `L130-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L130-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L130-L131) · [Before (L176-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L176-L177)

```diff
-       yi = "openpbrBlockNormalFinal",
-       Ui = "#if defined(FORCENORMALFORWARD) && defined(NORMAL)\nvar faceNormal: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)))*scene.vEyePosition.w;\n#if defined(TWOSIDEDLIGHTING)\nfaceNormal=select(-faceNormal,faceNormal,fragmentInputs.fr … [truncated]
+       pW = "pbrBlockIridescence",
+       GW = "struct iridescenceOutParams\n{iridescenceIntensity: f32,\niridescenceIOR: f32,\niridescenceThickness: f32,\nspecularEnvironmentR0: vec3f};\n#ifdef IRIDESCENCE\nfn iridescenceBlock(\nvIridescenceParams: vec4f\n,viewAngle_: f32\n,specularEnvironmentR0: vec3f\n#ifdef IRI … [truncated]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L183-L184` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L137-L138) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L183-L184)

```diff
-       vi = "openpbrBaseLayerData",
-       ti = "var base_color=vec3f(0.8);var base_metalness: f32=0.0;var base_diffuse_roughness: f32=0.0;var specular_weight: f32=1.0;var specular_roughness: f32=0.3;var specular_color: vec3f=vec3f(1.0);var specular_roughness_anisotropy: f32=0.0;var specular_ior: f32=1.5;var alpha:  … [truncated]
+       bW = "pbrBlockSubSurface",
+       vW = "struct subSurfaceOutParams\n{specularEnvironmentReflectance: vec3f,\n#ifdef SS_REFRACTION\nfinalRefraction: vec3f,\nsurfaceAlbedo: vec3f,\n#ifdef SS_LINKREFRACTIONTOTRANSPARENCY\nalpha: f32,\n#endif\nrefractionOpacity: f32,\n#endif\n#ifdef SS_TRANSLUCENCY\ntransmittan … [truncated]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L190-L193` → after: `L144-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L144-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L144-L156) · [Before (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L190-L193)

```diff
-     var di = cp(61897),
-       ei = cp(61903);
-     const ui = "openpbrCoatLayerData",
-       ji = "var coat_weight: f32=0.0f;var coat_color: vec3f=vec3f(1.0f);var coat_roughness: f32=0.0f;var coat_roughness_anisotropy: f32=0.0f;var coat_ior: f32=1.6f;var coat_darkening: f32=1.0f;var geometry_coat_tangent: vec2f=vec2f(1.0f,0.0f);\n#ifdef COAT_WEIGHT\nvar coatWeightF … [truncated]
+     var HW = XQ(42782),
+       aW = XQ(61991),
+       lW = XQ(42785);
+     const hW = "pbrBlockNormalFinal",
+       iW = "#if defined(FORCENORMALFORWARD) && defined(NORMAL)\nvar faceNormal: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)))*scene.vEyePosition.w;\n#if defined(TWOSIDEDLIGHTING)\nfaceNormal=select(-faceNormal,faceNormal,fragmentInputs.fr … [truncated]
+     wQ.b.IncludesShadersStoreWGSL[hW] || (wQ.b.IncludesShadersStoreWGSL[hW] = iW);
+     const cW = {
+       name: hW,
+       shader: iW
+     };
+     var AW = XQ(42800);
+     const RW = "pbrBlockLightmapInit",
+       EW = "#ifdef LIGHTMAP\nvar lightmapColor: vec4f=TEXRD(lightmapSampler,lightmapSamplerSampler,fragmentInputs.vLightmapUV+uvOffset);\n#ifdef RGBDLIGHTMAP\nlightmapColor=vec4f(fromRGBD(lightmapColor),lightmapColor.a);\n#endif\n#ifdef GAMMALIGHTMAP\nlightmapColor=vec4f(toLinear … [truncated]
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L199-L200` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L162-L163) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L199-L200)

```diff
-       mi = "openpbrThinFilmLayerData",
-       Ri = "#ifdef THIN_FILM\nvar thin_film_weight: f32=uniforms.vThinFilmWeight;var thin_film_thickness: f32=uniforms.vThinFilmThickness.r*1000.0f; \nvar thin_film_ior: f32=uniforms.vThinFilmIor;\n#ifdef THIN_FILM_WEIGHT\nvar thinFilmWeightFromTexture: f32=TEXRD(thinFilmWeightSa … [truncated]
+       uW = "pbrBlockGeometryInfo",
+       LW = "var NdotVUnclamped: f32=dot(normalW,viewDirectionW);var NdotV: f32=absEps(NdotVUnclamped);var alphaG: f32=convertRoughnessToAverageSlope(roughness);var AARoughnessFactors: vec2f=getAARoughnessFactors(normalW.xyz);\n#ifdef SPECULARAA\nalphaG+=AARoughnessFactors.y;\n#en … [truncated]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L206-L207` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L169-L170) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L206-L207)

```diff
-       Mi = "openpbrFuzzLayerData",
-       Ci = "var fuzz_weight: f32=0.0f;var fuzz_color: vec3f=vec3f(1.0f);var fuzz_roughness: f32=0.0f;\n#ifdef FUZZ\n#ifdef FUZZ_WEIGHT\nlet fuzzWeightFromTexture: vec4f=TEXRD(fuzzWeightSampler,fuzzWeightSamplerSampler,fragmentInputs.vFuzzWeightUV+uvOffset);\n#endif\n#ifdef FUZZ_C … [truncated]
+       fW = "pbrBlockReflectance",
+       SW = "#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)\nvar baseSpecularEnvironmentReflectance: vec3f=getReflectanceFromBRDFWithEnvLookup(vec3f(reflectanceF0),vec3f(reflectivityOut.reflectanceF90),environmentBrdf);\n#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPE … [truncated]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L213-L214` → after: `L176-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L176-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L176-L177) · [Before (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L213-L214)

```diff
-       Xi = "openpbrAmbientOcclusionData",
-       li = "var ambient_occlusion: vec3f=vec3f(1.0f,1.0f,1.0f);var specular_ambient_occlusion: f32=1.0f;var coat_specular_ambient_occlusion: f32=1.0f;\n#ifdef AMBIENT_OCCLUSION\nvar ambientOcclusionFromTexture: vec3f=TEXRD(ambientOcclusionSampler,ambientOcclusionSamplerSampler,fr … [truncated]
+       oW = "pbrBlockDirectLighting",
+       eW = "var diffuseBase: vec3f=vec3f(0.,0.,0.);\n#ifdef SS_TRANSLUCENCY\nvar diffuseTransmissionBase: vec3f=vec3f(0.,0.,0.);\n#endif\n#ifdef SPECULARTERM\nvar specularBase: vec3f=vec3f(0.,0.,0.);\n#endif\n#ifdef CLEARCOAT\nvar clearCoatBase: vec3f=vec3f(0.,0.,0.);\n#endif\n#i … [truncated]
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L220-L229` → after: `L183-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L183-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L183-L185) · [Before (L220-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L220-L229)

```diff
-     var Ji = cp(42807);
-     const Bi = "openpbrBackgroundTransmission",
-       Ni = "var slab_translucent_background: vec4f=vec4f(0.,0.,0.,1.);\n#ifdef REFRACTED_BACKGROUND\n{let refractionLOD: f32=min(transmission_roughness,0.8)*uniforms.vBackgroundRefractionInfos.x;let lodTexelSize: f32=pow(2.0f,refractionLOD-uniforms.vBackgroundRefractionInfos.x);\ … [truncated]
-     Op.b.IncludesShadersStoreWGSL[Bi] || (Op.b.IncludesShadersStoreWGSL[Bi] = Ni);
-     const Ti = {
-         name: Bi,
-         shader: Ni
-       },
-       fi = "openpbrEnvironmentLighting",
-       bi = "#if defined(REFLECTION) || defined(REFRACTED_BACKGROUND)\nvar coatAbsorption=vec3f(1.0f);var coatIblFresnel: f32=0.0;if (coat_weight>0.0) {coatIblFresnel=computeDielectricIblFresnel(coatReflectance,coatGeoInfo.environmentBrdf);let hemisphere_avg_fresnel: f32=coatRefle … [truncated]
+     var xW = XQ(42805);
+     const YW = "pbrBlockFinalLitComponents",
+       NW = "aggShadow=aggShadow/numLights;\n#if defined(ENVIRONMENTBRDF)\n#ifdef MS_BRDF_ENERGY_CONSERVATION\nvar baseSpecularEnergyConservationFactor: vec3f=getEnergyConservationFactor(vec3f(reflectanceF0),environmentBrdf);var coloredEnergyConservationFactor: vec3f=getEnergyCons … [truncated]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L235-L236` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L191-L192) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L235-L236)

```diff
-       ni = "openpbrDirectLightingInit",
-       Fi = "#ifdef LIGHT{X}\nvar preInfo{X}: preLightingInfo;var preInfoCoat{X}: preLightingInfo;let lightColor{X}: vec4f=light{X}.vLightDiffuse;var shadow{X}: f32=1.0f;\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X} … [truncated]
+       OW = "pbrBlockFinalUnlitComponents",
+       KW = "var finalDiffuse: vec3f=diffuseBase;finalDiffuse*=surfaceAlbedo;\n#if defined(SS_REFRACTION) && !defined(UNLIT) && !defined(LEGACY_SPECULAR_ENERGY_CONSERVATION)\nfinalDiffuse*=subSurfaceOut.refractionOpacity;\n#endif\n#if defined(SS_TRANSLUCENCY) && !defined(UNLIT)\nf … [truncated]
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L242-L243` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L198-L199) · [Before (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L242-L243)

```diff
-       Gi = "openpbrDirectLighting",
-       ri = "#ifdef LIGHT{X}\n{var slab_diffuse: vec3f=vec3f(0.f,0.f,0.f);var slab_translucent: vec3f=vec3f(0.f,0.f,0.f);var slab_glossy: vec3f=vec3f(0.f,0.f,0.f);var specularFresnel: f32=0.0f;var specularColoredFresnel: vec3f=vec3f(0.f,0.f,0.f);var slab_metal: vec3f=vec3f(0.f,0.f … [truncated]
+       MW = "pbrBlockFinalColorComposition",
+       QX = "var finalColor: vec4f= vec4f(\n#ifndef UNLIT\n#ifdef REFLECTION\nfinalIrradiance +\n#endif\n#ifdef SPECULARTERM\nfinalSpecularScaled +\n#endif\n#ifdef SHEEN\nfinalSheenScaled +\n#endif\n#ifdef CLEARCOAT\nfinalClearCoatScaled +\n#endif\n#ifdef REFLECTION\nfinalRadiance … [truncated]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L249-L254` → after: `L205-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L205-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L205-L210) · [Before (L249-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L249-L254)

```diff
-     var zi = cp(42820),
-       si = cp(42825),
-       Ki = cp(61822),
-       Vi = cp(42831);
-     const pc = "openpbrBlockPrePass",
-       ic = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nvar writeGeometryInfo: f32=1.0;\n#else\nvar writeGeometryInfo: f32=select(0.0,1.0,finalColor.a>ALPHATESTVALUE);\n#endif\nvar fragData: array<vec4<f32>,SCENE_MRT_COUNT>;\n#ifdef PREPASS_MESH_BLEND_TAG\nvar meshBlendTagOutput: ve … [truncated]
+     var XX = XQ(42814),
+       wX = XQ(42820),
+       qX = XQ(61996),
+       TX = XQ(42824);
+     const zX = "pbrBlockPrePass",
+       sX = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nvar writeGeometryInfo: f32=1.0;\n#else\nvar writeGeometryInfo: f32=select(0.0,1.0,finalColor.a>ALPHATESTVALUE);\n#endif\nvar fragData: array<vec4<f32>,SCENE_MRT_COUNT>;\n#ifdef PREPASS_MESH_BLEND_TAG\nvar meshBlendTagOutput: ve … [truncated]
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L260-L263` → after: `L216-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L216-L219) · [Before (L260-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L260-L263)

```diff
-     var Oc = cp(42839),
-       oc = cp(61824);
-     const Ic = "openpbrPixelShader",
-       Sc = "#define OPENPBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_BEGIN\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#ifndef FROMLINEARSPACE\n#define FROMLINEARSPACE\n#endif\n#include<openpbrUboDeclaration>\n#include<pbrFragmentExtraDeclaration>\n# … [truncated]
+     var PX = XQ(42829),
+       gX = XQ(62003);
+     const JX = "pbrPixelShader",
+       rX = "#define PBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_BEGIN\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#ifndef FROMLINEARSPACE\n#define FROMLINEARSPACE\n#endif\n#include<pbrUboDeclaration>\n#include<pbrFragmentExtraDeclaration>\n#include< … [truncated]
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L265` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/390.js#L221) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/390.js#L265)

```diff
-     const xc = [op.c, Ip.e, Sp.b, xp.e, Lp.e, Yp.c, Dp.e, Ap.c, Pp.e, Wp.d, yp.e, vp, tp.d, Hp.d, dp.d, ep.b, jp.e, kp.e, mp.d, Rp.b, qp.d, Mp.e, Cp.d, Ep.b, Xp.d, lp.e, Qp.b, Jp.c, Bp.d, Np.c, Tp.e, fp.d, bp.b, hp.c, Fp, rp, Zp.c, zp.b, Vp, Oi, oi.d, Ii.b, Li, Yi.d, Di.c, Wi, wi … [truncated]
+     const IX = [qQ.d, TQ.c, zQ.b, sQ.c, FQ.b, PQ.c, gQ.b, JQ.e, rQ.e, IQ.b, yQ, VQ.c, GQ, UQ.d, bQ.b, vQ.e, dQ.d, HQ.b, aQ.e, lQ.e, hQ.d, iQ.e, cQ.e, AQ.b, RQ.b, EQ.b, CQ.c, uQ.b, LQ.c, kQ.b, fQ.c, SQ.e, tQ.e, oQ.c, eQ.e, nQ.c, xQ.c, YQ.c, NQ.e, KQ, QW, wW, zW, PW, rW, BW, DW, UW … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/391.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/391.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fc2fa7cf5787f7b68eb33dd14be729956504c25d199f1672f8c3e2aa16abfee0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/391.js` (Changed code · before: `L4-L11` → after: `L4-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fc2fa7cf5787f7b68eb33dd14be729956504c25d199f1672f8c3e2aa16abfee0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fc2fa7cf5787f7b68eb33dd14be729956504c25d199f1672f8c3e2aa16abfee0) · [After (L4-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/391.js#L4-L210) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/391.js#L4-L11)

```diff
-   61931: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       textureMergerPixelShaderWGSL: () => Sp
-     });
-     var Op = cp(40062);
-     const op = "textureMergerPixelShader",
-       Ip = "#ifdef USE_TEXTURE0\nvar inputTexture0Sampler: sampler;var inputTexture0: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE1\nvar inputTexture1Sampler: sampler;var inputTexture1: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE2\nvar inputTexture2Sampler: sampler;var inputText … [truncated]
-     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
+   61920: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "harmonicsFunctions",
+       TQ = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   61968: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+ ... (191 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/392.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/392.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ae5e25c927d084e5cc1f04b3a66429d581d057d515b0febf4ebd6893b9290610)

#### 1. `bundles/preprod.bloxd.io/chunks/js/392.js` (Changed code · before: `L4` → after: `L4-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ae5e25c927d084e5cc1f04b3a66429d581d057d515b0febf4ebd6893b9290610R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ae5e25c927d084e5cc1f04b3a66429d581d057d515b0febf4ebd6893b9290610) · [After (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/392.js#L4-L31) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/392.js#L4)

```diff
-   61935: (pp, ip, cp) => {
+   61920: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "harmonicsFunctions",
+       TQ = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   62058: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+ ... (12 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/392.js` (Changed code · before: `L6` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ae5e25c927d084e5cc1f04b3a66429d581d057d515b0febf4ebd6893b9290610R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ae5e25c927d084e5cc1f04b3a66429d581d057d515b0febf4ebd6893b9290610) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/392.js#L33) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/392.js#L6)

```diff
-       textureMergerPixelShader: () => Sp
+       openpbrVertexShaderWGSL: () => ZQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/392.js` (Changed code · before: `L8-L11` → after: `L35-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ae5e25c927d084e5cc1f04b3a66429d581d057d515b0febf4ebd6893b9290610R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-ae5e25c927d084e5cc1f04b3a66429d581d057d515b0febf4ebd6893b9290610) · [After (L35-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/392.js#L35-L88) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/392.js#L8-L11)

```diff
-     var Op = cp(40062);
-     const op = "textureMergerPixelShader",
-       Ip = "#ifdef USE_TEXTURE0\nuniform sampler2D inputTexture0;\n#endif\n#ifdef USE_TEXTURE1\nuniform sampler2D inputTexture1;\n#endif\n#ifdef USE_TEXTURE2\nuniform sampler2D inputTexture2;\n#endif\n#ifdef USE_TEXTURE3\nuniform sampler2D inputTexture3;\n#endif\n#ifdef RED_FROM_ … [truncated]
-     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
+     var wQ = XQ(40126),
+       qQ = XQ(42500),
+       TQ = XQ(42509),
+       zQ = XQ(62058),
+       sQ = XQ(42518),
+       FQ = XQ(42555),
+       PQ = XQ(42523),
+       gQ = XQ(61912),
+       JQ = XQ(42529),
+       rQ = XQ(42534),
+       IQ = XQ(42539),
+       jQ = XQ(42547),
+       BQ = XQ(42558),
+       yQ = XQ(61920);
+     const VQ = "openpbrNormalMapVertexDeclaration",
+       DQ = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+ ... (38 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/393.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/393.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d4a8410082d828caff5c447c296b3a23798afd0e599c853f90a945c4a13a1e2a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/393.js` (Changed code · before: `L4` → after: `L4-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d4a8410082d828caff5c447c296b3a23798afd0e599c853f90a945c4a13a1e2aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d4a8410082d828caff5c447c296b3a23798afd0e599c853f90a945c4a13a1e2a) · [After (L4-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/393.js#L4-L96) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/393.js#L4)

```diff
-   61942: (pp, ip, cp) => {
+   62028: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "openpbrDielectricReflectance",
+       TQ = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
+     wQ.b.IncludesShadersStore[qQ] || (wQ.b.IncludesShadersStore[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   62035: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => zQ
+ ... (77 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/393.js` (Changed code · before: `L6` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d4a8410082d828caff5c447c296b3a23798afd0e599c853f90a945c4a13a1e2aR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d4a8410082d828caff5c447c296b3a23798afd0e599c853f90a945c4a13a1e2a) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/393.js#L98) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/393.js#L6)

```diff
-       proceduralVertexShaderWGSL: () => Sp
+       openpbrPixelShader: () => sX
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/393.js` (Changed code · before: `L8-L11` → after: `L100-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d4a8410082d828caff5c447c296b3a23798afd0e599c853f90a945c4a13a1e2aR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d4a8410082d828caff5c447c296b3a23798afd0e599c853f90a945c4a13a1e2a) · [After (L100-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/393.js#L100-L285) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/393.js#L8-L11)

```diff
-     var Op = cp(40062);
-     const op = "proceduralVertexShader",
-       Ip = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInput … [truncated]
-     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
+     var wQ = XQ(40126),
+       qQ = XQ(42335),
+       TQ = XQ(42341),
+       zQ = XQ(42349),
+       sQ = XQ(62026),
+       FQ = XQ(42328);
+     const PQ = "openpbrFragmentDeclaration",
+       gQ = "uniform float vBaseWeight;uniform vec4 vBaseColor;uniform float vBaseDiffuseRoughness;uniform vec4 vReflectanceInfo;uniform vec4 vSpecularColor;uniform vec3 vSpecularAnisotropy;uniform float vTransmissionWeight;uniform vec3 vTransmissionColor;uniform float vTransmissi … [truncated]
+     wQ.b.IncludesShadersStore[PQ] || (wQ.b.IncludesShadersStore[PQ] = gQ);
+     const JQ = {
+       name: PQ,
+       shader: gQ
+     };
+     var rQ = XQ(42137),
+       IQ = XQ(42143),
+       jQ = XQ(62018),
+ ... (170 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/394.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/394.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d764c5f3e89002ac6bef9f43c878e13103fd0de2ef333aa4a743dd7186c2da50)

#### 1. `bundles/preprod.bloxd.io/chunks/js/394.js` (Changed code · before: `L4` → after: `L4-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d764c5f3e89002ac6bef9f43c878e13103fd0de2ef333aa4a743dd7186c2da50R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d764c5f3e89002ac6bef9f43c878e13103fd0de2ef333aa4a743dd7186c2da50) · [After (L4-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/394.js#L4-L83) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/394.js#L4)

```diff
-   61949: (pp, ip, cp) => {
+   62071: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+     });
+     var wQ = XQ(40126);
+     const qQ = "openpbrDielectricReflectance",
+       TQ = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
+     wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
+     }
+   },
+   62080: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+ ... (64 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/394.js` (Changed code · before: `L6` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d764c5f3e89002ac6bef9f43c878e13103fd0de2ef333aa4a743dd7186c2da50R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d764c5f3e89002ac6bef9f43c878e13103fd0de2ef333aa4a743dd7186c2da50) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/394.js#L85) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/394.js#L6)

```diff
-       proceduralVertexShader: () => Sp
+       openpbrPixelShaderWGSL: () => TX
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/394.js` (Changed code · before: `L8-L11` → after: `L87-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d764c5f3e89002ac6bef9f43c878e13103fd0de2ef333aa4a743dd7186c2da50R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d764c5f3e89002ac6bef9f43c878e13103fd0de2ef333aa4a743dd7186c2da50) · [After (L87-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/394.js#L87-L266) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/394.js#L8-L11)

```diff
-     var Op = cp(40062);
-     const op = "proceduralVertexShader",
-       Ip = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#defi … [truncated]
-     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
+     var wQ = XQ(40126),
+       qQ = XQ(42689),
+       TQ = XQ(42697),
+       zQ = XQ(42701),
+       sQ = XQ(42500),
+       FQ = XQ(42509),
+       PQ = XQ(62058),
+       gQ = XQ(42555),
+       JQ = XQ(61930),
+       rQ = XQ(42707),
+       IQ = XQ(42738),
+       jQ = XQ(61934);
+     const BQ = "openpbrFragmentSamplersDeclaration",
+       yQ = "#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor,_SAMPLERNAME_,baseColor)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFIN … [truncated]
+     wQ.b.IncludesShadersStoreWGSL[BQ] || (wQ.b.IncludesShadersStoreWGSL[BQ] = yQ);
+     const VQ = {
+ ... (164 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/395.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/395.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4bb2ce64af27b4a964186c86862dfdb971cbe6e4ace980644d5164f701a4fff3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/395.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4bb2ce64af27b4a964186c86862dfdb971cbe6e4ace980644d5164f701a4fff3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4bb2ce64af27b4a964186c86862dfdb971cbe6e4ace980644d5164f701a4fff3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/395.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/395.js#L4)

```diff
-   61964: (pp, ip, cp) => {
+   62127: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/395.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4bb2ce64af27b4a964186c86862dfdb971cbe6e4ace980644d5164f701a4fff3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4bb2ce64af27b4a964186c86862dfdb971cbe6e4ace980644d5164f701a4fff3) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/395.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/395.js#L6)

```diff
-       greasedLinePixelShaderWGSL: () => Sp
+       textureMergerPixelShaderWGSL: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/395.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4bb2ce64af27b4a964186c86862dfdb971cbe6e4ace980644d5164f701a4fff3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4bb2ce64af27b4a964186c86862dfdb971cbe6e4ace980644d5164f701a4fff3) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/395.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/395.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "greasedLinePixelShader",
-       Ip = "var grlColors: texture_2d<f32>;var grlColorsSampler: sampler;uniform grlUseColors: f32;uniform grlUseDash: f32;uniform grlDashArray: f32;uniform grlDashOffset: f32;uniform grlDashRatio: f32;uniform grlVisibility: f32;uniform grlColorsWidth: f32;uniform grl_colorModeAn … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "textureMergerPixelShader",
+       TQ = "#ifdef USE_TEXTURE0\nvar inputTexture0Sampler: sampler;var inputTexture0: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE1\nvar inputTexture1Sampler: sampler;var inputTexture1: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE2\nvar inputTexture2Sampler: sampler;var inputText … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/396.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/396.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-58aed04205322fcdec9248f59ae6a0e9be5cdd3104555a98f96c2485c8c5a7cc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/396.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-58aed04205322fcdec9248f59ae6a0e9be5cdd3104555a98f96c2485c8c5a7ccR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-58aed04205322fcdec9248f59ae6a0e9be5cdd3104555a98f96c2485c8c5a7cc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/396.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/396.js#L4)

```diff
-   61978: (pp, ip, cp) => {
+   62136: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/396.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-58aed04205322fcdec9248f59ae6a0e9be5cdd3104555a98f96c2485c8c5a7ccR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-58aed04205322fcdec9248f59ae6a0e9be5cdd3104555a98f96c2485c8c5a7cc) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/396.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/396.js#L6)

```diff
-       greasedLinePixelShader: () => Sp
+       textureMergerPixelShader: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/396.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-58aed04205322fcdec9248f59ae6a0e9be5cdd3104555a98f96c2485c8c5a7ccR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-58aed04205322fcdec9248f59ae6a0e9be5cdd3104555a98f96c2485c8c5a7cc) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/396.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/396.js#L8-L10)

```diff
-     var Op = cp(40062);
-     const op = "greasedLinePixelShader",
-       Ip = "precision highp float;uniform sampler2D grlColors;uniform float grlUseColors;uniform float grlUseDash;uniform float grlDashArray;uniform float grlDashOffset;uniform float grlDashRatio;uniform float grlVisibility;uniform float grlColorsWidth;uniform vec2 grl_colorModeA … [truncated]
+     var wQ = XQ(40126);
+     const qQ = "textureMergerPixelShader",
+       TQ = "#ifdef USE_TEXTURE0\nuniform sampler2D inputTexture0;\n#endif\n#ifdef USE_TEXTURE1\nuniform sampler2D inputTexture1;\n#endif\n#ifdef USE_TEXTURE2\nuniform sampler2D inputTexture2;\n#endif\n#ifdef USE_TEXTURE3\nuniform sampler2D inputTexture3;\n#endif\n#ifdef RED_FROM_ … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/397.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/397.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4a2189f6224cc99f9da4e98d675dfe4bc83865b1e2464d4a497d65f45b31add9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/397.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4a2189f6224cc99f9da4e98d675dfe4bc83865b1e2464d4a497d65f45b31add9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4a2189f6224cc99f9da4e98d675dfe4bc83865b1e2464d4a497d65f45b31add9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/397.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/397.js#L4)

```diff
-   61981: (pp, ip, cp) => {
+   62139: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/397.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4a2189f6224cc99f9da4e98d675dfe4bc83865b1e2464d4a497d65f45b31add9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4a2189f6224cc99f9da4e98d675dfe4bc83865b1e2464d4a497d65f45b31add9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/397.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/397.js#L6-L7)

```diff
-       rebuildScenePbrPipelines: () => xp,
-       rebuildSceneRenderables: () => Lp
+       proceduralVertexShaderWGSL: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/397.js` (Changed code · before: `L9-L192` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4a2189f6224cc99f9da4e98d675dfe4bc83865b1e2464d4a497d65f45b31add9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4a2189f6224cc99f9da4e98d675dfe4bc83865b1e2464d4a497d65f45b31add9) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/397.js#L8-L14) · [Before (L9-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/397.js#L9-L192)

```diff
-     var Op = cp(41959),
-       op = (pp, ip) => pp.order - ip.order,
-       Ip = 8,
-       Sp = pp => Lp(pp);
-     async function xp(pp) {
-       let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       await Yp(pp, "pbr", ip)
-     }
-     async function Lp(pp) {
-       await Yp(pp, void 0, !1)
-     }
-     async function Yp(pp, ip, xp) {
-       const Lp = pp;
-       if (!Lp._built && !xp) return;
-       const Yp = Lp._lightListVersion ?? 0,
-         Dp = Lp.surface.engine,
- ... (168 more removed lines; see GitHub link above)
+     var wQ = XQ(40126);
+     const qQ = "proceduralVertexShader",
+       TQ = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInput … [truncated]
+     wQ.b.ShadersStoreWGSL[qQ] || (wQ.b.ShadersStoreWGSL[qQ] = TQ);
+     const zQ = {
+       name: qQ,
+       shader: TQ
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/75.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/75.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18d30ce111cff5513ed6ec268eb06947b64828b2e680be9f267e7940ca13d4b1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/75.js` (Changed code · before: `L4` → after: `L4-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18d30ce111cff5513ed6ec268eb06947b64828b2e680be9f267e7940ca13d4b1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18d30ce111cff5513ed6ec268eb06947b64828b2e680be9f267e7940ca13d4b1) · [After (L4-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/75.js#L4-L25) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/75.js#L4)

```diff
-   37271: (pp, ip, cp) => {
+   9589: (QQ, WQ) => {
+     WQ.d = 8, WQ.k = function(QQ, WQ, XQ, wQ) {
+       if (!Array.isArray(QQ)) return !!QQ;
+       WQ -= Math.floor(WQ), XQ -= Math.floor(XQ), wQ -= Math.floor(wQ);
+       for (var qQ = 0; qQ < QQ.length; qQ += 6)
+         if (WQ >= QQ[qQ] && WQ < QQ[qQ + 3] && XQ >= QQ[qQ + 1] && XQ < QQ[qQ + 4] && wQ >= QQ[qQ + 2] && wQ < QQ[qQ + 5]) return !0;
+       return !1
+     }, WQ.h = function(QQ) {
+       for (var WQ = [], XQ = 0; XQ < QQ.length; XQ++) {
+         var wQ = QQ[XQ];
+         if (2 !== wQ.length || 3 !== wQ[0].length || 3 !== wQ[1].length) throw new Error("Subvoxel boxes must contain two three-dimensional bounds");
+         for (var qQ = 0; qQ < 3; qQ++) {
+           var TQ = wQ[0][qQ],
+             zQ = wQ[1][qQ];
+           if (!Number.isInteger(TQ) || !Number.isInteger(zQ) || TQ < 0 || zQ > 8 || TQ >= zQ) throw new Error("Subvoxel bounds must be integers satisfying 0 <= start < end <= 8");
+           WQ[6 * XQ + qQ] = TQ / 8, WQ[6 * XQ + qQ + 3] = zQ / 8
+ ... (6 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/75.js` (Changed code · before: `L7` → after: `L16275-L16277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18d30ce111cff5513ed6ec268eb06947b64828b2e680be9f267e7940ca13d4b1R16275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18d30ce111cff5513ed6ec268eb06947b64828b2e680be9f267e7940ca13d4b1) · [After (L16275-L16277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/75.js#L16275-L16277) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/75.js#L7)

```diff
-       f: () => op
+       g: () => zQ,
+       j: () => sQ,
+       k: () => qQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/75.js` (Changed code · before: `L9-L10` → after: `L16279-L16325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18d30ce111cff5513ed6ec268eb06947b64828b2e680be9f267e7940ca13d4b1R16279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18d30ce111cff5513ed6ec268eb06947b64828b2e680be9f267e7940ca13d4b1) · [After (L16279-L16325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/75.js#L16279-L16325) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/75.js#L9-L10)

```diff
-     const Op = ["Boat", "Obsidian Boat", "Hovercraft", "Yellow Kart", "White Kart", "Red Kart", "Purple Kart", "Pink Kart", "Orange Kart", "Magenta Kart", "Lime Kart", "Light Gray Kart", "Light Blue Kart", "Green Kart", "Gray Kart", "Cyan Kart", "Brown Kart", "Blue Kart", "Black  … [truncated]
-       op = 39 == cp.j ? ["canAutoStep", "speedMultiplier"] : null
+     let wQ = function(QQ) {
+       return QQ[QQ.bot = 0] = "bot", QQ[QQ.top = 1] = "top", QQ[QQ.side = 2] = "side", QQ
+     }({});
+     const qQ = ["innerLeft", "innerRight", "outerLeft", "outerRight"];
+     class TQ {
+       constructor(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ, DQ, pQ, GQ, UQ, bQ) {
+         this.rootName = QQ, this.rootId = WQ, this.metaStr = XQ, this.rot = wQ, this.open = qQ, this.halfblockPlacement = TQ, this.JT = zQ, this.treeBase = sQ, this.treeCanopy = FQ, this.books = PQ, this.freshlyGrown = gQ, this.roots = JQ, this.lava = rQ, this.top = IQ, this.gras … [truncated]
+       }
+     }
+     new Set(["metaStr", "rot", "halfblockPlacement", "stairsCorner"]);
+ 
+     function zQ(QQ, WQ) {
+       WQ.meta = sQ(WQ.name, WQ.id, (WQ => QQ[WQ].id), WQ.rootMetaDesc)
+     }
+ 
+     function sQ(QQ, WQ, XQ, zQ) {
+ ... (31 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/76.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/76.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L4-L14` → after: `L4-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L4-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/76.js#L4-L657) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/76.js#L4-L14)

```diff
-   37277: (pp, ip, cp) => {
-     if (cp.d(ip, {
-         b: () => Lp,
-         f: () => op,
-         j: () => Sp,
-         n: () => Ip,
-         p: () => ep,
-         s: () => vp
-       }), 39 == cp.j) var Op = cp(37286);
-     const op = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
-       Ip = ["Blade", "Guard", "Handle"],
+   37316: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => wQ
+     });
+     const wQ = {
+       "AK-47": {
+         gunType: "semi_automatic",
+         scopeType: "none",
+         muzzleFlashOffsetFromGun: [-5.5, -.25, 0],
+         muzzleFlashScale: 1.5,
+         autoFireWithMouse: !0,
+         fireRate: 600,
+         cadenceMs: 75,
+         equipDelay: 24,
+         damage: 20,
+         reloadTime: 2300,
+ ... (638 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L16-L66` → after: `L659-L7366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L659-L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/76.js#L659-L7366) · [Before (L16-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/76.js#L16-L66)

```diff
-         Wood: {
-           material: "Wood",
-           baseSword: "Wood Sword",
-           value: 1,
-           epithet: "Timber",
-           palette: ["#b88a52", "#7d5a32", "#3d2a14"],
-           trait: null,
-           bladeDamage: 0,
-           guardReduction: 0,
-           handleCooldown: 1,
-           handleKnockback: 0,
-           handleReach: 0
-         },
-         Stone: {
-           material: "Stone",
-           baseSword: "Stone Sword",
- ... (35 more removed lines; see GitHub link above)
+         "Wood Pickaxe": {
+           displayName: {
+             translationKey: "item:woodPickaxe"
+           },
+           type: "Tool",
+           textureInfo: "wooden_pickaxe",
+           weight: 1,
+           heldItemScale: 1,
+           damage: 18,
+           description: {
+             translationKey: "item:pickaxeDescription"
+           },
+           stackable: !1,
+           harvests: "rock",
+           multiplier: 2,
+           level: 1
+ ... (6692 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L68-L79` → after: `L7368-L7376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR7368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L7368-L7376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/76.js#L7368-L7376) · [Before (L68-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/76.js#L68-L79)

```diff
-         Diamond: {
-           material: "Diamond",
-           baseSword: "Diamond Sword",
-           value: 4,
-           epithet: "Brilliant",
-           palette: ["#8ff5ec", "#2fbcb0", "#0d4f4a"],
-           trait: "crit",
-           bladeDamage: .12,
-           guardReduction: .07,
-           handleCooldown: .92,
-           handleKnockback: .1,
-           handleReach: 0
+         "Lavaflow Trout": {
+           displayName: {
+             translationKey: "item:lavaflowTrout"
+           },
+           type: "Item",
+           textureInfo: "lavaflow_trout",
+           weight: 1,
+           heldItemScale: 1,
+           stackable: !0
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L81-L131` → after: `L7378-L9259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR7378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L7378-L9259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/76.js#L7378-L9259) · [Before (L81-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/76.js#L81-L131)

```diff
-         Moonstone: {
-           material: "Moonstone",
-           baseSword: "Moonstone Sword",
-           value: 4,
-           epithet: "Moonlit",
-           palette: ["#d9d2ff", "#8f7fe0", "#352a73"],
-           trait: "bossBane",
-           bladeDamage: .15,
-           guardReduction: .08,
-           handleCooldown: .9,
-           handleKnockback: .1,
-           handleReach: .25
-         },
-         Magmasteel: {
-           material: "Magmasteel",
-           baseSword: "Magmasteel Sword",
- ... (35 more removed lines; see GitHub link above)
+         "Lavawake Slopefish": {
+           displayName: {
+             translationKey: "item:lavawakeSlopefish"
+           },
+           type: "Item",
+           textureInfo: "lavawake_slopefish",
+           weight: 1,
+           heldItemScale: 1,
+           stackable: !0
+         },
+         "Magma Sardinella": {
+           displayName: {
+             translationKey: "item:magmaSardinella"
+           },
+           type: "Item",
+           textureInfo: "magma_sardinella",
+ ... (1866 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L134-L139` → after: `L9278-L9279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR9278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L9278-L9279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/76.js#L9278-L9279) · [Before (L134-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/76.js#L134-L139)

```diff
-       xp = 4,
-       Lp = "Coal",
-       Yp = {
-         Blade: 1,
-         Guard: .6,
-         Handle: .4
+       description: {
+         translationKey: `item:${iQ}Description`
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L141-L184` → after: `L9281-L9292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR9281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L9281-L9292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/76.js#L9281-L9292) · [Before (L141-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/76.js#L141-L184)

```diff
-       Dp = 1.15,
-       Ap = 1.35,
-       Pp = .06,
-       Wp = {
-         defence: {
-           name: "Bulwark",
-           amount: .06,
-           describe: pp => `${mp(.06*pp)} less damage taken`
-         },
-         coins: {
-           name: "Midas",
-           amount: 4,
-           describe: pp => `Mobs you slay drop ${Math.round(4*pp)}+ extra coins`
-         },
-         crit: {
-           name: "Keen Edge",
- ... (28 more removed lines; see GitHub link above)
+       type: "Item",
+       textureInfo: (0, wQ.qe)(hQ),
+       weight: 1,
+       heldItemScale: 1,
+       stackable: !0
+     };
+     for (const [hQ, iQ] of [
+         ["Doom Rivet", "doomRivet"],
+         ["Doom Crest", "doomCrest"]
+       ]) jQ[hQ] = {
+       displayName: {
+         translationKey: `item:${iQ}`
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L186-L225` → after: `L9294-L9559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR9294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L9294-L9559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/76.js#L9294-L9559) · [Before (L186-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/76.js#L186-L225)

```diff
-       yp = {
-         eclipseField: {
-           name: "Eclipse Field",
-           description: "Right-click: slow every mob within 6 blocks for 3s",
-           cooldownMs: 25e3
-         },
-         starfall: {
-           name: "Meteor Shower",
-           description: "Right-click: call five falling stars around you",
-           cooldownMs: 3e4
-         },
-         magmaWave: {
-           name: "Magma Wave",
-           description: "Right-click: lay a line of fire pools ahead of you",
-           cooldownMs: 2e4
-         },
- ... (24 more removed lines; see GitHub link above)
+       description: {
+         translationKey: `item:${iQ}Description`
+       },
+       type: "Item",
+       textureInfo: (0, wQ.qe)(hQ),
+       weight: 1,
+       heldItemScale: 1,
+       stackable: !0,
+       showInCreativeInven: !1
+     };
+     for (const [hQ, iQ, cQ] of [
+         ["Raw Copper", "rawCopper", "raw_copper"],
+         ["Copper Bar", "copperBar", "copper_bar"],
+         ["Iron Grit", "ironGrit", "iron_grit"],
+         ["Gold Grit", "goldGrit", "gold_grit"],
+         ["Copper Grit", "copperGrit", "copper_grit"],
+ ... (250 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L228-L229` → after: `L9705-L9778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR9705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L9705-L9778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/76.js#L9705-L9778) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/76.js#L228-L229)

```diff
-       Up = 39 == cp.j ? Op.b : null,
-       wp = "skyblock:forged:";
+       description: {
+         translationKey: "item:mobCageDescription"
+       },
+       type: "Item",
+       textureInfo: "mob_cage",
+       weight: 1,
+       heldItemScale: 1,
+       stackable: !0,
+       showInCreativeInven: !1
+     };
+     for (const hQ of ["Pig", "Cow", "Sheep", "Deer", "Stag"]) jQ[`Caged ${hQ}`] = {
+       displayName: {
+         translationKey: `item:caged${hQ}`
+       },
+       description: {
+         translationKey: "item:cagedMobDescription"
+ ... (58 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L232` → after: `L9781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR9781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L9781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/76.js#L9781) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/76.js#L232)

```diff
-       return `${pp} ${ip}`
+       return [...QQ, ...(0, PQ.i)(PQ.m, WQ)].map((QQ => HQ[QQ].id))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L237-L242` → after: `L9785-L9801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR9785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L9785-L9801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/76.js#L9785-L9801) · [Before (L237-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/76.js#L237-L242)

```diff
-       let {
-         blade: ip,
-         guard: cp,
-         handle: Op
-       } = pp;
-       return `${wp}${ip.toLowerCase()}-${cp.toLowerCase()}-${Op.toLowerCase()}`
+       return QQ.split(" ")[0]
+     }
+     const UQ = .0018;
+     let bQ = Object.values(zQ.h).reduce(((QQ, WQ) => Math.max(QQ, WQ.id)), 0) + 1;
+     for (const hQ in jQ) jQ[hQ].id = bQ, jQ[hQ].name = hQ, jQ[bQ] = jQ[hQ], (0, qQ.g)(jQ, jQ[hQ]), ++bQ;
+     const vQ = {};
+     for (const hQ in jQ) {
+       var dQ;
+       const QQ = jQ[hQ];
+       vQ[hQ] = null !== (dQ = vQ[QQ.id]) && void 0 !== dQ ? dQ : new TQ.f(QQ)
+     }
+     const HQ = {},
+       aQ = [zQ.h, vQ].flatMap(Object.entries);
+     for (const [hQ, iQ] of aQ) HQ[hQ] = iQ, HQ[iQ.id] = iQ;
+     for (const hQ of gQ.e) {
+       const QQ = hQ;
+ ... (1 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L245-L253` → after: `L9830-L9851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR9830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L9830-L9851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/76.js#L9830-L9851) · [Before (L245-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/76.js#L245-L253)

```diff
-     function Hp(pp) {
-       if (! function(pp) {
-           return "string" === typeof pp && pp.startsWith(wp)
-         }(pp)) return null;
-       const ip = pp.slice(wp.length).split("-").map((pp => op.find((ip => ip.toLowerCase() === pp))));
-       return 3 !== ip.length || ip.includes(void 0) ? null : {
-         blade: ip[0],
-         guard: ip[1],
-         handle: ip[2]
+     function sQ(QQ, WQ) {
+       console.assert("meta|charging1" === WQ.rootMetaDesc.split("|").slice(1).join("|"), "charging root item .rootMetaDesc must be |meta|charging1");
+       const XQ = {
+         ...WQ
+       };
+       return delete XQ.rootMetaDesc, {
+         [QQ]: {
+           ...WQ,
+           textureInfo: WQ.textureName
+         },
+         [`${QQ}|meta|charging2`]: {
+           ...XQ,
+           textureInfo: `${WQ.textureName}_charging_2`
+         },
+         [`${QQ}|meta|charging3`]: {
+           ...XQ,
+ ... (6 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L258-L305` → after: `L9855-L9887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR9855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L9855-L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/76.js#L9855-L9887) · [Before (L258-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/76.js#L258-L305)

```diff
-     function ep(pp) {
-       var ip;
-       let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Up;
-       const Op = "string" === typeof pp ? Hp(pp) : pp;
-       if (null === Op) return null;
-       const op = tp(Op),
-         Lp = cp === Up ? dp.get(op) : void 0;
-       if (void 0 !== Lp) return Lp;
-       const wp = function(pp, ip) {
-         var cp, Op, op, Lp, Up, wp, vp, Hp, dp;
-         const {
-           blade: ep,
-           guard: qp,
-           handle: Mp
-         } = pp, Cp = Sp, Ep = ep === qp && qp === Mp, Xp = kp((1 + Cp[ep].bladeDamage) * (Ep ? 1 + Pp : 1)), lp = null !== (cp = ip.damageMultiplier) && void 0 !== cp ? cp : Xp, Qp = null !== (Op = ip.cooldownMultiplier) && void 0 !== Op ? Op : Cp[Mp].handleCooldown, Jp = null != … [truncated]
-           const ip = {},
- ... (32 more removed lines; see GitHub link above)
+     function FQ(QQ, WQ) {
+       console.assert("meta|dir1" === WQ.rootMetaDesc.split("|").slice(1).join("|"), "charging root item .rootMetaDesc must be |meta|dir1");
+       const XQ = {
+         ...WQ
+       };
+       return delete XQ.rootMetaDesc, {
+         [QQ]: {
+           ...WQ,
+           heldItemGlb: QQ,
+           textureInfo: WQ.textureName
+         },
+         [`${QQ}|meta|dir2`]: {
+           ...XQ,
+           displayName: QQ,
+           textureInfo: `${WQ.textureName}_dir_2`
+         },
+ ... (17 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L307-L320` → after: `L9889-L9931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR9889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L9889-L9931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/76.js#L9889-L9931) · [Before (L307-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/76.js#L307-L320)

```diff
-           lore: ap,
-           properties: Gp,
-           effects: rp,
-           named: bp,
-           damageMultiplier: lp,
-           cooldownMultiplier: Qp,
-           knockbackMultiplier: Jp,
-           reachBonus: Bp,
-           damageReduction: Np,
-           traits: Tp,
-           ability: fp,
-           coalCost: np,
-           enchantmentTier: gp,
-           powerMultiplier: kp(lp / Qp)
+           textureInfo: `${WQ.textureName}_dir_6`
+         },
+         [`${QQ}|meta|dir7`]: {
+           ...XQ,
+           displayName: QQ,
+           textureInfo: `${WQ.textureName}_dir_7`
+         },
+         [`${QQ}|meta|dir8`]: {
+           ...XQ,
+           displayName: QQ,
+           textureInfo: `${WQ.textureName}_dir_8`
+         },
+         [`${QQ}|meta|dir9`]: {
+           ...XQ,
+           displayName: QQ,
+           textureInfo: `${WQ.textureName}_dir_9`
+ ... (27 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L322-L323` → after: `L9933-L9939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR9933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L9933-L9939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/76.js#L9933-L9939) · [Before (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/76.js#L322-L323)

```diff
-       }(Op, null !== (ip = cp[op]) && void 0 !== ip ? ip : {});
-       return cp === Up && dp.set(op, wp), wp
+       };
+       for (const qQ of gQ) wQ[`${QQ}|meta|${qQ}`] = {
+         ...XQ,
+         heldItemGlb: `${WQ}_${qQ}`,
+         textureInfo: `${WQ}_${qQ}`
+       };
+       return wQ
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L327` → after: `L9943-L9946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR9943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L9943-L9946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/76.js#L9943-L9946) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/76.js#L327)

```diff
-       return "Blade" === ip ? pp.blade : "Guard" === ip ? pp.guard : pp.handle
+       const XQ = {},
+         wQ = (0, TQ.z)(QQ, WQ);
+       for (const qQ in wQ) Object.assign(XQ, sQ(qQ, wQ[qQ]));
+       return XQ
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L330-L331` → after: `L9949-L9984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR9949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L9949-L9984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/76.js#L9949-L9984) · [Before (L330-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/76.js#L330-L331)

```diff
-     function kp(pp) {
-       return Math.round(100 * pp) / 100
+     function IQ(QQ, WQ, XQ) {
+       console.assert(4 === XQ.length, "Must have 4 textures for bowl fill metadatas");
+       const wQ = {
+         ...WQ
+       };
+       delete wQ.rootMetaDesc, delete wQ.textureInfo, delete wQ.afterEatenItem;
+       const qQ = `Partially Full ${QQ}`,
+         TQ = `Half Full ${QQ}`,
+         zQ = `Nearly Full ${QQ}`,
+         sQ = QQ;
+       return {
+         [qQ]: {
+           ...WQ,
+           textureInfo: XQ[0],
+           afterEatenItem: "Bowl",
+           rootMetaDesc: `${qQ}|meta|charging1`
+ ... (20 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L334-L335` → after: `L9987-L10007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR9987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L9987-L10007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/76.js#L9987-L10007) · [Before (L334-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/76.js#L334-L335)

```diff
-     function mp(pp) {
-       return `${Math.round(100*pp)}%`
+     function jQ() {
+       return Object.fromEntries(qQ.p.map((QQ => {
+         const WQ = (0, wQ.ne)(QQ),
+           XQ = (0, wQ.qe)(QQ);
+         return [(0, wQ.Sb)(QQ), {
+           displayName: {
+             translationKey: `item:${WQ}SpawnOrb`
+           },
+           type: "Item",
+           textureInfo: `${XQ}_spawn_orb`,
+           weight: 1,
+           heldItemScale: 1,
+           stackable: !0,
+           description: {
+             translationKey: `item:${WQ}SpawnOrbDescription`,
+             params: {
+ ... (5 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/76.js` (Changed code · before: `L338-L339` → after: `L10017-L10056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dcR10017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-89e57d372bc9b747bc20c17f5856a2432ea221ac97ddb5e6962c558fa29369dc) · [After (L10017-L10056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/76.js#L10017-L10056) · [Before (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/76.js#L338-L339)

```diff
-     function Rp(pp) {
-       return `${pp>=0?"+":""}${mp(pp)}`
+     function yQ() {
+       return Object.fromEntries(qQ.j.flatMap((QQ => {
+         const WQ = (0, wQ.qe)(QQ);
+         return qQ.l[QQ].map((XQ => {
+           var qQ;
+           const TQ = "default" !== XQ && (null === (qQ = BQ[QQ]) || void 0 === qQ ? void 0 : qQ.includes(XQ)),
+             zQ = TQ ? {
+               heldItemGlb: (0, wQ.xb)(QQ, "default")
+             } : {};
+           return [(0, wQ.xb)(QQ, XQ), {
+             type: "Item",
+             textureInfo: `caught_${WQ}_${TQ?"default":XQ}`,
+             weight: 1,
+             heldItemScale: 1,
+             stackable: !1,
+             ...zQ
+ ... (24 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/77.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/77.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa)

#### 1. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L4-L16201` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/77.js#L4) · [Before (L4-L16201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/77.js#L4-L16201)

```diff
-   37468: (pp, ip, cp) => {
-     var Op = {
-       "./67/67_Atlas.png": 27343,
-       "./67/67_Model.glb": 33475,
-       "./67/67_Reconstructed.glb": 33477,
-       "./67/variations/0_67_default.png": 27351,
-       "./Armour Collector/Armour Collector_Atlas.png": 27354,
-       "./Armour Collector/Armour Collector_Model.glb": 33485,
-       "./Armour Collector/Armour Collector_Reconstructed.glb": 33488,
-       "./Armour Collector/variations/0_armour collector_default.png": 27361,
-       "./Bear/BearSaddle_Atlas.png": 27367,
-       "./Bear/Bear_Atlas.png": 27371,
-       "./Bear/Bear_Model.glb": 33496,
-       "./Bear/variations/0_bear_default.png": 27378,
-       "./Bobino Musculino/Bobino Musculino_Atlas.png": 27385,
-       "./Bobino Musculino/Bobino Musculino_Model.glb": 33501,
- ... (16182 more removed lines; see GitHub link above)
+   37327: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/77.js` (Changed code · before: `L16206-L39968` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daaR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f170ce945459afe93bff2ff39910874f1c5107d5b36e6bab2dddaa11724d8daa) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/77.js#L9-L10) · [Before (L16206-L39968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/77.js#L16206-L39968)

```diff
-     const Op = new(cp(36630).b)(new URL(cp.p + cp.u(48), cp.b), {
-       name: "procGenWorker",
-       type: "module"
-     });
-     var op = cp(37919),
-       Ip = cp(2926);
-     const Sp = new op.e((async () => {
-       if (! function() {
-           let pp = !1;
-           const ip = URL.createObjectURL(new Blob([""], {
-             type: "text/javascript"
-           }));
-           try {
-             return new Worker(ip, {
-               get type() {
-                 return pp = !0, "module"
- ... (23747 more removed lines; see GitHub link above)
+     const wQ = ["Boat", "Obsidian Boat", "Hovercraft", "Yellow Kart", "White Kart", "Red Kart", "Purple Kart", "Pink Kart", "Orange Kart", "Magenta Kart", "Lime Kart", "Light Gray Kart", "Light Blue Kart", "Green Kart", "Gray Kart", "Cyan Kart", "Brown Kart", "Blue Kart", "Black  … [truncated]
+       qQ = 41 == XQ.j ? ["canAutoStep", "speedMultiplier"] : null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/78.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/78.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224)

#### 1. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L4-L45` → after: `L4-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L4-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/78.js#L4-L253) · [Before (L4-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/78.js#L4-L45)

```diff
-   4791: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Fi,
-       f: () => yc,
-       g: () => pc,
-       i: () => oc,
-       j: () => si,
-       m: () => ic,
-       p: () => fi,
-       q: () => ri,
-       u: () => Ei,
-       v: () => Wc,
-       x: () => Pc,
-       A: () => Zi,
-       C: () => Ti
-     });
- ... (26 more removed lines; see GitHub link above)
+   37334: (QQ, WQ, XQ) => {
+     if (XQ.d(WQ, {
+         c: () => FQ,
+         e: () => qQ,
+         h: () => zQ,
+         i: () => TQ,
+         l: () => UQ,
+         m: () => VQ
+       }), 41 == XQ.j) var wQ = XQ(37343);
+     const qQ = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
+       TQ = ["Blade", "Guard", "Handle"],
+       zQ = {
+         Wood: {
+           material: "Wood",
+           baseSword: "Wood Sword",
+           value: 1,
+ ... (234 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L47-L56` → after: `L255-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L255-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/78.js#L255-L324) · [Before (L47-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/78.js#L47-L56)

```diff
-     } catch {}
-     const wp = 16,
-       vp = 256,
-       tp = 0,
-       Hp = 1,
-       dp = 2,
-       ep = 3;
-     let jp, kp = tp,
-       mp = Sp,
-       Rp = 0;
+     }
+     const GQ = new Map;
+ 
+     function UQ(QQ) {
+       var WQ;
+       let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BQ;
+       const wQ = "string" === typeof QQ ? pQ(QQ) : QQ;
+       if (null === wQ) return null;
+       const qQ = DQ(wQ),
+         FQ = XQ === BQ ? GQ.get(qQ) : void 0;
+       if (void 0 !== FQ) return FQ;
+       const yQ = function(QQ, WQ) {
+         var XQ, wQ, qQ, FQ, BQ, yQ, VQ, pQ, GQ;
+         const {
+           blade: UQ,
+           guard: aQ,
+ ... (54 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/78.js` (Changed code · before: `L59-L504` → after: `L327-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2b2f1c1b246d09f0c0cf96465552baa3845b589419d6c9cf9e45fae8129b1224) · [After (L327-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/78.js#L327-L339) · [Before (L59-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/78.js#L59-L504)

```diff
-       return pp === `function ${ip}() { [native code] }` || pp === `function ${ip}() {\n    [native code]\n}`
-     }
-     const Mp = 0,
-       Cp = 1,
-       Ep = 2;
-     let Xp = Mp;
- 
-     function lp(pp, ip, cp) {
-       if (Xp === Ep && kp === Hp && ! function() {
-           const pp = jp;
-           return Rp >= vp && (mp(Wp, Pp, [pp]), Rp = 0), pp[Rp++] < 256 / wp
-         }()) return function(pp, ip, cp) {
-         return mp(pp, ip, cp ?? 0)
-       }(...arguments);
-       if (Xp === Mp || kp === dp) return Sp(pp, ip, cp);
-       let Op;
- ... (430 more removed lines; see GitHub link above)
+       return "Blade" === WQ ? QQ.blade : "Guard" === WQ ? QQ.guard : QQ.handle
+     }
+ 
+     function vQ(QQ) {
+       return Math.round(100 * QQ) / 100
+     }
+ 
+     function dQ(QQ) {
+       return `${Math.round(100*QQ)}%`
+     }
+ 
+     function HQ(QQ) {
+       return `${QQ>=0?"+":""}${dQ(QQ)}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/79.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/79.js` (171 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda)

#### 1. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L2)

```diff
- export const ids = [79, 95];
+ export const ids = [79];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4-L19` → after: `L4-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L4-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L4-L458) · [Before (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4-L19)

```diff
-     4950: (pp, ip, cp) => {
-       cp.d(ip, {
-         e: () => wp,
-         i: () => vp
-       });
-       var Op = cp(1049),
-         op = cp.n(Op),
-         Ip = cp(62),
-         Sp = cp(1201),
-         xp = cp(4956),
-         Lp = cp(1929),
-         Yp = cp(2492),
-         Dp = cp(4964),
-         Ap = cp(1112);
-       const Pp = new WeakMap;
-       let Wp = 0;
+   37512: (QQ, WQ, XQ) => {
+     var wQ = {
+       "./67/67_Atlas.png": 27574,
+       "./67/67_Model.glb": 33540,
+       "./67/67_Reconstructed.glb": 33545,
+       "./67/variations/0_67_default.png": 27578,
+       "./Armour Collector/Armour Collector_Atlas.png": 27584,
+       "./Armour Collector/Armour Collector_Model.glb": 33548,
+       "./Armour Collector/Armour Collector_Reconstructed.glb": 33557,
+       "./Armour Collector/variations/0_armour collector_default.png": 27591,
+       "./Bear/BearSaddle_Atlas.png": 27594,
+       "./Bear/Bear_Atlas.png": 27600,
+       "./Bear/Bear_Model.glb": 33566,
+       "./Bear/variations/0_bear_default.png": 27602,
+       "./Bobino Musculino/Bobino Musculino_Atlas.png": 27608,
+       "./Bobino Musculino/Bobino Musculino_Model.glb": 33571,
+ ... (439 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L21-L23` → after: `L460-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L460-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L460-L468) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L21-L23)

```diff
-       function yp(pp) {
-         let ip = Pp.get(pp);
-         return void 0 === ip && (ip = Wp++, Pp.set(pp, ip)), ip
+     function qQ(QQ) {
+       var WQ = TQ(QQ);
+       return XQ(WQ)
+     }
+ 
+     function TQ(QQ) {
+       if (!XQ.o(wQ, QQ)) {
+         var WQ = new Error("Cannot find module '" + QQ + "'");
+         throw WQ.code = "MODULE_NOT_FOUND", WQ
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L26-L40` → after: `L483-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L483-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L483-L508) · [Before (L26-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L26-L40)

```diff
-       function Up(pp) {
-         let {
-           piece: ip
-         } = pp;
-         return "space" === ip.kind ? (0, Ap.jsx)(Ap.Fragment, {
-           children: ip.text
-         }) : (0, Ap.jsx)("span", {
-           className: "DialogueWord",
-           style: {
-             "--word-delay": `${ip.delayMs}ms`
-           },
-           children: (0, Ap.jsx)(xp.d, {
-             text: "icon" === ip.kind ? `[[${ip.icon}]]` : ip.text
-           })
-         })
+     function TQ(QQ) {
+       var WQ = [],
+         XQ = [],
+         wQ = null;
+ 
+       function TQ(XQ, qQ) {
+         var TQ = wQ[XQ],
+           sQ = wQ[qQ];
+         TQ && sQ && (function(QQ, WQ, XQ, wQ) {
+           if (QQ.jsQ) return WQ.jsQ ? function(QQ, WQ) {
+             var XQ = (QQ[3] - QQ[0]) / 2,
+               wQ = (WQ[3] - WQ[0]) / 2,
+               qQ = QQ[0] + XQ - (WQ[0] + wQ),
+               TQ = QQ[2] + XQ - (WQ[2] + wQ),
+               zQ = XQ + wQ;
+             return qQ * qQ + TQ * TQ <= zQ * zQ
+ ... (10 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L43-L66` → after: `L542-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L542-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L542-L548) · [Before (L43-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L43-L66)

```diff
-       function wp(pp) {
-         let {
-           display: ip
-         } = pp;
-         const {
-           selectedLanguage: cp
-         } = (0, Sp.H)(), Op = (0, Ip.useMemo)((() => (0, Dp.e)((0, Dp.h)(ip).plan.pieces)), [ip, cp.code]);
-         return (0, Ap.jsxs)("div", {
-           className: op()("Dialogue", {
-             DialogueAnimateIn: !1 !== ip.animateIn
-           }),
-           children: [ip.speakerName && (0, Ap.jsx)(Lp.e, {
-             text: ip.speakerName,
-             className: "DialogueSpeaker"
-           }), (0, Ap.jsx)("p", {
-             className: "DialogueLine",
- ... (8 more removed lines; see GitHub link above)
+       function zQ(QQ, WQ) {
+         var XQ = (QQ[3] - QQ[0]) / 2,
+           wQ = QQ[0] + XQ,
+           qQ = QQ[2] + XQ,
+           TQ = sQ(wQ, WQ[0], WQ[3]) - wQ,
+           zQ = sQ(qQ, WQ[2], WQ[5]) - qQ;
+         return TQ * TQ + zQ * zQ <= XQ * XQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L100-L127` → after: `L551-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L551-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L551-L568) · [Before (L100-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L100-L127)

```diff
-         function wp(pp) {
-           let {
-             name: ip,
-             isTinted: cp,
-             className: Op,
-             style: op
-           } = pp;
-           const Sp = `${Up}/${ip}.png`;
-           return cp ? (0, yp.jsxs)("span", {
-             className: Ip()("DocsPixelIcon", "Tinted", Op),
-             "aria-hidden": "true",
-             style: op,
-             children: [(0, yp.jsx)("span", {
-               className: "DocsPixelIconTint",
-               style: {
-                 maskImage: `url("${Sp}")`,
- ... (12 more removed lines; see GitHub link above)
+       function sQ(QQ, WQ, XQ) {
+         return QQ < WQ ? WQ : QQ > XQ ? XQ : QQ
+       }
+     }
+   },
+   38615: (QQ, WQ, XQ) => {
+     function wQ(QQ) {
+       return {
+         name: "collideTerrain",
+         order: 0,
+         state: {
+           callback: null
+         },
+         PD: function(WQ, XQ) {
+           var wQ = QQ.entities;
+           wQ.ysQ(WQ) && (wQ.AQQ(WQ).body.Xr = function(XQ) {
+ ... (2 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L130-L155` → after: `L575-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L575-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L575-L592) · [Before (L130-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L130-L155)

```diff
-         const vp = 1500;
- 
-         function tp() {
-           const [pp, ip] = (0, Op.useState)(null);
-           (0, Op.useEffect)((() => {
-             if (null === pp) return;
-             const cp = setTimeout((() => {
-               ip(null)
-             }), vp);
-             return () => {
-               clearTimeout(cp)
-             }
-           }), [pp]);
-           return [pp, pp => {
-             (0, Wp.d)(pp).then((() => {
-               ip({
- ... (10 more removed lines; see GitHub link above)
+       }
+     }
+     XQ.r(WQ), XQ.d(WQ, {
+       default: () => wQ
+     })
+   },
+   38631: (QQ, WQ, XQ) => {
+     function wQ(QQ) {
+       return {
+         name: "RQQ",
+         order: 99,
+         state: {
+           gR: 1.5
+         },
+         PD: null,
+         JA: null,
+ ... (2 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L158-L180` → after: `L597-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L597-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L597-L602) · [Before (L158-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L158-L180)

```diff
-         function Hp(pp) {
-           let {
-             text: ip,
-             label: cp,
-             className: Op
-           } = pp;
-           const [op, Sp] = tp(), xp = !1 === (null === op || void 0 === op ? void 0 : op.failed);
-           return (0, yp.jsxs)("button", {
-             type: "button",
-             className: Ip()("DocsCopyButton", Op, {
-               Copied: xp
-             }),
-             title: `Copy ${ip.length>40?"to clipboard":ip}`,
-             "aria-label": cp ? void 0 : `Copy ${ip}`,
-             onClick: pp => {
-               pp.stopPropagation(), Sp(ip)
- ... (7 more removed lines; see GitHub link above)
+     function qQ(QQ, WQ, XQ) {
+       if (XQ.rD.DsQ(QQ.zC)) {
+         var wQ = XQ.rD.aWQ(QQ.zC).mesh;
+         if (wQ.metadata) {
+           var qQ = WQ < QQ.gR;
+           XQ.nj.o_(wQ, !qQ)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L182-L193` → after: `L604-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L604-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L604-L615) · [Before (L182-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L182-L193)

```diff
-         Dp.d.registerLanguage("javascript", Ap.d), Dp.d.registerLanguage("typescript", Pp.d);
-         const dp = {
-             js: "javascript",
-             ts: "typescript",
-             javascript: "javascript",
-             typescript: "typescript"
-           },
-           ep = {
-             javascript: "JavaScript",
-             typescript: "TypeScript"
-           },
-           jp = 24;
+       }
+     }
+     XQ.r(WQ), XQ.d(WQ, {
+       default: () => wQ
+     })
+   },
+   38621: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       default: () => TQ
+     });
+     var wQ = XQ(416),
+       qQ = XQ.n(wQ);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L195-L247` → after: `L617-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L617-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L617-L620) · [Before (L195-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L195-L247)

```diff
-         function kp(pp) {
-           let {
-             code: ip,
-             lang: cp,
-             compact: op = !1
-           } = pp;
-           const Sp = (0, Op.useMemo)((() => function(pp, ip) {
-               const cp = dp[ip];
-               return cp ? Dp.d.highlight(pp, {
-                 language: cp
-               }).value : pp.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
-             }(ip, cp)), [ip, cp]),
-             xp = ip.split("\n").length,
-             Lp = !op && xp > jp + 6,
-             [Yp, Ap] = (0, Op.useState)(!1),
-             Pp = dp[cp];
- ... (37 more removed lines; see GitHub link above)
+     function TQ(QQ) {
+       let WQ = 0;
+       const XQ = qQ().create(),
+         wQ = qQ().create();
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L249-L261` → after: `L622-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L622-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L622-L634) · [Before (L249-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L249-L261)

```diff
-         function Mp(pp) {
-           const ip = new Map;
-           let cp, Op = [],
-             op = !1;
-           const Ip = () => {
-             cp && ip.set(cp.name, cp.lines.join("\n").trimEnd())
-           };
-           for (const Sp of pp.split("\n")) {
-             const pp = Sp.match(qp);
-             op || Sp.startsWith("/*") ? (op || (Ip(), cp = void 0), Op.push(Sp), op = !Sp.includes("*/")) : pp ? (Ip(), cp = {
-               name: pp[1],
-               lines: [...Op, Sp]
-             }, Op = []) : cp && (Sp.startsWith(" ") || Sp.startsWith("\t") || /^[}\])|]/.test(Sp)) ? cp.lines.push(Sp) : cp && "" !== Sp.trim() && (Ip(), cp = void 0)
+       function TQ(zQ, sQ) {
+         if (zQ.psQ === WQ) return;
+         zQ.psQ = WQ;
+         const FQ = QQ.rD.pXQ(zQ.MI);
+         FQ && TQ(FQ, sQ);
+         const PQ = QQ.rD.mN(zQ.zC),
+           gQ = QQ.rD.mN(zQ.MI);
+         if (gQ)
+           if (zQ.HXQ ? zQ.HXQ(XQ, sQ, zQ.offset) : qQ().copy(XQ, zQ.offset), sQ) qQ().add(PQ.zK, gQ.zK, XQ);
+           else {
+             const WQ = PQ.jr || QQ.jr;
+             for (let QQ = 0; QQ < 3; QQ++) wQ[QQ] = gQ.position[QQ] - WQ[QQ] + XQ[QQ];
+             QQ.rD.bsQ(zQ.zC, wQ)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L263` → after: `L636-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L636-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L636-L665) · [Before (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L263)

```diff
-           return Ip(), ip
+         else zQ.dXQ || (zQ.GsQ && zQ.GsQ(zQ.zC), QQ.rD.gC(zQ.zC, QQ.rD.names.Xp))
+       }
+       return {
+         name: "Xp",
+         order: QQ.room ? 50 : 97,
+         state: {
+           MI: 0,
+           offset: null,
+           HXQ: null,
+           GXQ: !0,
+           GsQ: null,
+           dXQ: !1,
+           psQ: 0
+         },
+         PD: function(XQ, wQ) {
+           wQ.offset = wQ.offset ? qQ().clone(wQ.offset) : qQ().create();
+ ... (14 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L266-L405` → after: `L681-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L681-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L681-L688) · [Before (L266-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L266-L405)

```diff
-         function Cp(pp) {
-           return "methods" === pp || "callbacks" === pp || "settings" === pp
-         }
-         const Ep = {
-             readme: {
-               icon: "code-block",
-               summary: "Code blocks, boards and World Code, and the globals your code can use.",
-               layout: "article"
-             },
-             snippets: {
-               icon: "scroll",
-               summary: "Ready-made code for common jobs, from moving players to running code every second.",
-               layout: "snippets"
-             },
-             howTo: {
-               icon: "book",
- ... (124 more removed lines; see GitHub link above)
+     function PQ(QQ, WQ) {
+       const XQ = WQ.bqQ || WQ;
+       void 0 === XQ.bC?.aLightLevels && (XQ.pC("aLightLevels", 4), XQ.bC.aLightLevels = (0, TQ.p)());
+       const {
+         bC: wQ
+       } = WQ;
+       !wQ || void 0 !== wQ.aLightLevels && null !== wQ.aLightLevels && wQ.aLightLevels !== XQ.bC?.aLightLevels || (wQ.aLightLevels = (0, TQ.p)()), QQ.nj.mWQ && XQ.material && QQ.nj.mWQ(XQ.material)
+     }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L407-L408` → after: `L690-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L690-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L690-L751) · [Before (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L407-L408)

```diff
-         function lp(pp) {
-           return pp.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
+     function gQ(QQ, WQ) {
+       const XQ = (0, TQ.m)(WQ);
+       for (const wQ of XQ) PQ(QQ, wQ);
+       return XQ
+     }
+ 
+     function JQ(QQ) {
+       return {
+         name: "mesh",
+         order: 100,
+         state: {
+           lE: null,
+           xXQ: null,
+           mesh: null,
+           offset: null,
+           HsQ: null,
+ ... (46 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L411-L413` → after: `L772-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L772-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L772-L798) · [Before (L411-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L411-L413)

```diff
-         function Qp(pp) {
-           let ip = !1;
-           return pp.split("\n").map((pp => (pp.startsWith("```") && (ip = !ip), !ip && /^#{3,} /.test(pp) ? pp.slice(1) : pp))).join("\n")
+     function zQ(QQ) {
+       return {
+         name: "physics",
+         order: 40,
+         state: new TQ,
+         PD: function(WQ, XQ) {
+           XQ.KJ = QQ, XQ.iX = null, XQ.body = QQ.physics.sr(), FQ(XQ, QQ.rD.mN(XQ.zC))
+         },
+         JA: function(WQ, XQ) {
+           if (QQ.rD.hasPosition(XQ.zC)) {
+             var wQ = QQ.rD.mN(XQ.zC);
+             gQ(XQ, wQ), JQ(XQ, wQ, 0, !1)
+           }
+           QQ.physics.Fr(XQ.body)
+         },
+         system: function(WQ, XQ) {
+ ... (11 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L416-L520` → after: `L804-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L804-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L804-L808) · [Before (L416-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L416-L520)

```diff
-         function Jp(pp) {
-           return "readme" === pp ? "getting-started" : lp(pp)
-         }
-         const Bp = "## Glossary of Referenced Types";
-         const Np = [{
-             id: "welcome",
-             slug: "",
-             title: "Welcome",
-             icon: "house",
-             summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
-             layout: "article",
-             markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Ge … [truncated]
-           }, ...Rp.d.flatMap((pp => {
-             const ip = {
-               id: pp.id,
-               slug: Jp(pp.id),
- ... (89 more removed lines; see GitHub link above)
+     function FQ(QQ, WQ) {
+       var XQ = QQ.body.tJ,
+         wQ = WQ.eXQ;
+       qQ().copy(XQ.base, wQ), qQ().set(XQ.vec, WQ.width, WQ.height, WQ.width), qQ().add(XQ.max, XQ.base, XQ.vec), PQ(QQ, WQ, QQ.iX)
+     }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L522-L525` → after: `L810-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L810-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L810-L814) · [Before (L522-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L522-L525)

```diff
-         function fp(pp) {
-           return Np.find((ip => ip.id === pp))
-         }
-         const bp = new Map;
+     function PQ(QQ, WQ, XQ) {
+       QQ.iX = XQ;
+       const wQ = WQ.jr ?? QQ.KJ.jr;
+       QQ.body.Hk = null !== XQ ? XQ - wQ[1] : null
+     }
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L527-L530` → after: `L816-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L816-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L816-L821) · [Before (L527-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L527-L530)

```diff
-         function hp(pp) {
-           let ip = bp.get(pp.id);
-           return ip || (ip = (0, mp.w)(pp.markdown, "changelog" === pp.layout ? 3 : 2), bp.set(pp.id, ip)), ip
-         }
+     function gQ(QQ, WQ) {
+       var XQ = QQ.body.tJ.base,
+         wQ = WQ.width / 2,
+         qQ = WQ.gWQ;
+       qQ[0] = XQ[0] + wQ, qQ[1] = XQ[1], qQ[2] = XQ[2] + wQ
+     }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L532-L534` → after: `L823-L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L823-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L823-L839) · [Before (L532-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L532-L534)

```diff
-         function ap(pp, ip) {
-           return hp(pp).sections.some((pp => pp.heading.anchor === ip || pp.blocks.some((pp => "heading" === pp.kind && pp.anchor === ip))))
-         }
+     function JQ(QQ, WQ, XQ, wQ) {
+       var TQ = QQ.body.Fy;
+       qQ().sq(sQ, WQ.gWQ, TQ, XQ), wQ && qQ().lerp(sQ, WQ.zK, sQ, .3), qQ().copy(WQ.zK, sQ)
+     }
+   },
+   38539: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       PositionState: () => qQ,
+       default: () => TQ,
+       fsQ: () => zQ
+     });
+     const wQ = XQ(416);
+     class qQ {
+       constructor() {
+         this.position = null, this.width = .8, this.height = .8, this.gWQ = null, this.zK = null, this.eXQ = null, this.jr = null
+       }
+ ... (1 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L536-L550` → after: `L841-L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L841-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L841-L857) · [Before (L536-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L536-L550)

```diff
-         function np(pp) {
-           const [ip, ...cp] = pp.replace(/^#/, "").split("-"), Op = Np.find((pp => pp.id === ip));
-           if (!Op) return null;
-           const op = cp.length > 0 ? (0, mp.s)(cp.join("-")) : "";
-           for (const Sp of null !== (Ip = Op.childPageIds) && void 0 !== Ip ? Ip : []) {
-             var Ip;
-             const pp = fp(Sp);
-             if (pp.sourceAnchor === op) return {
-               page: pp,
-               anchor: ""
-             };
-             if (ap(pp, op)) return {
-               page: pp,
-               anchor: op
-             }
+     function TQ(QQ) {
+       return {
+         name: "position",
+         order: 41,
+         state: new qQ,
+         PD: function(WQ, XQ) {
+           var qQ = [0, 0, 0];
+           XQ.position && wQ.copy(qQ, XQ.position), XQ.position = qQ, XQ.gWQ = wQ.create(), XQ.zK = wQ.create(), XQ.eXQ = new Float32Array(6), QQ.dWQ(XQ.position, null, XQ.gWQ), wQ.copy(XQ.zK, XQ.gWQ), zQ(XQ)
+         },
+         JA: null,
+         system: function(WQ, XQ) {
+           for (var wQ = 0; wQ < XQ.length; wQ++) {
+             var qQ = XQ[wQ],
+               TQ = qQ.jr ?? QQ.jr,
+               sQ = qQ.position,
+               FQ = qQ.gWQ;
+ ... (1 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L552-L554` → after: `L859-L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L859-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L859-L884) · [Before (L552-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L552-L554)

```diff
-           return {
-             page: Op,
-             anchor: op
+         }
+       }
+     }
+ 
+     function zQ(QQ) {
+       var WQ = QQ.width / 2,
+         XQ = QQ.gWQ,
+         wQ = QQ.eXQ;
+       wQ[0] = XQ[0] - WQ, wQ[1] = XQ[1], wQ[2] = XQ[2] - WQ, wQ[3] = XQ[0] + WQ, wQ[4] = XQ[1] + QQ.height, wQ[5] = XQ[2] + WQ
+     }
+   },
+   38552: (QQ, WQ, XQ) => {
+     function wQ(QQ) {
+       var WQ = "SsQ";
+       return {
+         name: WQ,
+ ... (10 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L558-L569` → after: `L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L1026) · [Before (L558-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L558-L569)

```diff
-           Examples: {
-             pageId: "snippets",
-             anchor: ""
-           },
-           Notes: {
-             pageId: "readme",
-             anchor: "Globals"
-           },
-           "Glossary-of-Referenced-Types": {
-             pageId: "types",
-             anchor: ""
-           }
+           ...BQ
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L571-L575` → after: `L1028-L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1028-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L1028-L1060) · [Before (L571-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L571-L575)

```diff
- 
-         function gp(pp, ip) {
-           let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-           const Op = ip.slug ? `${pp}/${ip.slug}` : pp;
-           return cp ? `${Op}#${cp}` : Op
+         for (const wQ in QQ) XQ[wQ] = {
+           NI: QQ[wQ],
+           server: !1
+         };
+         for (const wQ in XQ) XQ[wQ].NI ? (XQ[wQ].NI.default && (XQ[wQ].NI = XQ[wQ].NI.default), this.QXQ(XQ[wQ].NI(this.KJ, WQ[wQ]))) : this.QXQ({
+           name: wQ
+         }), this.names[wQ] = wQ
+       }
+       YsQ() {
+         var QQ = {
+           YI: this.opts.osQ
+         };
+         for (const WQ in BQ) BQ[WQ].NI ? (BQ[WQ].NI.default && (BQ[WQ].NI = BQ[WQ].NI.default), this.QXQ(BQ[WQ].NI(this.KJ, QQ[WQ]))) : this.QXQ({
+           name: WQ
+         }), this.names[WQ] = WQ
+       }
+ ... (17 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L577-L585` → after: `L1062-L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1062-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L1062-L1071) · [Before (L577-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L577-L585)

```diff
-         var Gp = cp(4874);
-         const rp = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
-           Zp = new Set(["GameApi", "Console", "_TypeOf"]),
-           zp = 4;
- 
-         function sp(pp) {
-           let ip = pp.length;
-           for (; ip > 0 && "" === pp[ip - 1].trim();) ip--;
-           return pp.slice(0, ip)
+       }
+       VXQ(QQ, WQ, XQ, wQ) {
+         var qQ = this.mN(QQ);
+         qQ.width = (WQ + wQ) / 2, qQ.height = XQ, this.OsQ(QQ, qQ)
+       }
+       FQQ(QQ) {
+         for (var WQ of this.WC(this.names.position)) {
+           var XQ = WQ.gWQ,
+             wQ = WQ.width / 2;
+           VQ(XQ, 0, -wQ, wQ, WQ.zC), VQ(XQ, 1, 0, WQ.height, WQ.zC), VQ(XQ, 2, -wQ, wQ, WQ.zC), zQ().subtract(XQ, XQ, QQ), this.OsQ(WQ.zC, WQ), this.vx(WQ.zC)?.Zk()
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L587-L601` → after: `L1073-L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1073-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L1073-L1105) · [Before (L587-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L587-L601)

```diff
- 
-         function Kp(pp) {
-           var ip;
-           const cp = sp(pp);
-           if (null === (ip = cp.at(-1)) || void 0 === ip || !ip.trimEnd().endsWith("*/")) return {
-             lines: cp,
-             doc: ""
-           };
-           const Op = cp.findLastIndex((pp => pp.startsWith("/**")));
-           return -1 === Op ? {
-             lines: cp,
-             doc: ""
-           } : {
-             lines: sp(cp.slice(0, Op)),
-             doc: cp.slice(Op).join("\n")
+       }
+       sK(QQ) {
+         return this.mN(QQ).gWQ
+       }
+       bsQ(QQ, WQ) {
+         var XQ = this.mN(QQ);
+         zQ().copy(XQ.gWQ, WQ), this.OsQ(QQ, XQ)
+       }
+       OsQ(QQ, WQ) {
+         zQ().copy(WQ.zK, WQ.gWQ);
+         var XQ = WQ.jr ?? this.KJ.jr;
+         zQ().add(WQ.position, WQ.gWQ, XQ), (0, sQ.fsQ)(WQ);
+         var wQ = this.AQQ(QQ);
+         wQ && (0, FQ.usQ)(wQ, WQ)
+       }
+       KsQ(QQ, WQ, XQ) {
+ ... (17 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L604-L619` → after: `L1108-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1108-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L1108-L1138) · [Before (L604-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L604-L619)

```diff
- 
-         function Vp(pp) {
-           var ip;
-           const cp = pp.split("\n"),
-             Op = cp.flatMap(((pp, ip) => rp.test(pp) ? [ip] : []));
-           let op = Kp(cp.slice(0, null !== (ip = Op[0]) && void 0 !== ip ? ip : cp.length)).doc;
-           return Op.map(((pp, ip) => {
-             var Ip;
-             const Sp = Kp(cp.slice(pp, null !== (Ip = Op[ip + 1]) && void 0 !== Ip ? Ip : cp.length)),
-               xp = {
-                 name: cp[pp].match(rp)[1],
-                 doc: op,
-                 lines: Sp.lines
-               };
-             return op = Sp.doc, xp
-           }))
+         return !1
+       }
+       msQ(QQ, WQ) {
+         for (var XQ = this.KJ.jr, wQ = DQ, qQ = 0; qQ < 3; qQ++) wQ[qQ] = QQ.base[qQ] - XQ[qQ], wQ[qQ + 3] = QQ.max[qQ] - XQ[qQ];
+         var TQ = [];
+         if (WQ)
+           for (var zQ of this.WC(WQ)) {
+             var sQ = this.mN(zQ.zC);
+             sQ && pQ(wQ, sQ.eXQ) && TQ.push(zQ.zC)
+           } else
+             for (var FQ = this.WC(this.names.position), PQ = 0; PQ < FQ.length; PQ++) pQ(wQ, FQ[PQ].eXQ) && TQ.push(FQ[PQ].zC);
+         return TQ
+       }
+       add() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+           WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+ ... (15 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L621-L625` → after: `L1140-L1146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1140-L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L1140-L1146) · [Before (L621-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L621-L625)

```diff
- 
-         function ii(pp) {
-           var ip;
-           const cp = pp.match(/^readonly \[([\s\S]*)\]$/);
-           return cp ? null !== (ip = cp[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== ip ? ip : [] : null
+         if (TQ) {
+           this.sC(PQ, this.names.physics);
+           var gQ = this.vx(PQ),
+             JQ = this.names.SsQ;
+           gQ.qr = function() {
+             FQ.KsQ(PQ, JQ)
+           }
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L628-L642` → after: `L1157-L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1157-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L1157-L1162) · [Before (L628-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L628-L642)

```diff
-         function ci(pp) {
-           if (!pp.startsWith("{") || !pp.endsWith("}")) return null;
-           const ip = {
-               keys: [],
-               values: []
-             },
-             cp = pp => {
-               const cp = pp.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
-               cp && (ip.keys.push(cp[1].startsWith('"') ? cp[1] : `"${cp[1]}"`), ip.values.push(cp[2].trim()))
-             };
-           let Op = 0,
-             op = "";
-           for (const Ip of pp.slice(1, -1)) "{[(".includes(Ip) ? Op++ : "}])".includes(Ip) && Op--, ";" === Ip && 0 === Op ? (cp(op), op = "") : op += Ip;
-           return cp(op), ip
-         }
+     function VQ(QQ, WQ, XQ, wQ, qQ) {
+       var TQ = QQ[WQ] + XQ,
+         zQ = QQ[WQ] + wQ;
+       Math.abs(TQ - Math.round(TQ)) < .002 && (QQ[WQ] += .002), Math.abs(zQ - Math.round(zQ)) < .001 && (QQ[WQ] -= .001)
+     }
+     const DQ = [0, 0, 0, 0, 0, 0];
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L644-L645` → after: `L1164-L1209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1164-L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L1164-L1209) · [Before (L644-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L644-L645)

```diff
-         function Oi(pp) {
-           return pp.length > zp ? `\n\t| ${pp.join("\n\t| ")}` : pp.join(" | ")
+     function pQ(QQ, WQ) {
+       return !(QQ[0] > WQ[3]) && (!(QQ[1] > WQ[4]) && (!(QQ[2] > WQ[5]) && (!(QQ[3] < WQ[0]) && (!(QQ[4] < WQ[1]) && !(QQ[5] < WQ[2])))))
+     }
+     let GQ = !1
+   },
+   37772: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => qW,
+       e: () => gW,
+       g: () => QW,
+       k: () => XW,
+       l: () => ZQ,
+       m: () => OQ,
+       q: () => mQ,
+       u: () => NQ,
+       x: () => KQ,
+ ... (30 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L648-L672` → after: `L1217-L1224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1217-L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L1217-L1224) · [Before (L648-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L648-L672)

```diff
-         function oi(pp, ip) {
-           const cp = function(pp, ip) {
-             return pp.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((pp, cp) => {
-               var Op;
-               const op = null === (Op = ip.get(cp)) || void 0 === Op ? void 0 : Op.object;
-               return op ? Oi(op.values) : pp
-             })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((pp, cp) => {
-               var Op, op;
-               const Ip = null === (Op = ip.get(cp)) || void 0 === Op || null === (op = Op.object) || void 0 === op ? void 0 : op.values.map(ii);
-               return null !== Ip && void 0 !== Ip && Ip.every((pp => null !== pp)) ? Oi([...new Set(Ip.flat())]) : pp
-             })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((pp, cp) => {
-               var Op;
-               const op = null === (Op = ip.get(cp)) || void 0 === Op ? void 0 : Op.members;
-               return op ? Oi(op) : pp
-             })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((pp, cp) => {
-               var Op;
- ... (9 more removed lines; see GitHub link above)
+     function rQ(QQ, WQ, XQ, wQ, qQ, TQ) {
+       if ("number" !== typeof XQ) {
+         for (let wQ = 0; wQ < XQ.length; wQ++)
+           if (!IQ(QQ[WQ + wQ], XQ[wQ])) return !1;
+         return !0
+       }
+       return !!IQ(QQ[WQ], XQ) && (void 0 === wQ || !!IQ(QQ[WQ + 1], wQ) && (void 0 === qQ || !!IQ(QQ[WQ + 2], qQ) && (void 0 === TQ || IQ(QQ[WQ + 3], TQ))))
+     }
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L674-L703` → after: `L1226-L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1226-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L1226-L1229) · [Before (L674-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L674-L703)

```diff
-         function Ii(pp) {
-           const ip = Vp(pp),
-             cp = function(pp) {
-               const ip = new Map,
-                 cp = pp.find((pp => "_TypeOf" === pp.name));
-               let Op = null;
-               const op = () => {
-                 if (Op) {
-                   const pp = Op.lines.join("\n");
-                   ip.set(Op.name, {
-                     text: pp,
-                     members: ii(pp),
-                     object: ci(pp)
-                   })
-                 }
-               };
- ... (14 more removed lines; see GitHub link above)
+     function IQ(QQ, WQ) {
+       const XQ = Math.fround(WQ);
+       return QQ === XQ && (0 !== XQ || 1 / QQ === 1 / XQ)
+     }
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L705-L732` → after: `L1231-L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1231-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L1231-L1236) · [Before (L705-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L705-L732)

```diff
-         function Yi() {
-           return xi ??= function(pp) {
-             const ip = Vp(pp).find((pp => "GameApi" === pp.name)),
-               cp = new Map,
-               Op = ip.lines;
-             for (let Ip = 0; Ip < Op.length; Ip++) {
-               var op;
-               if (!Op[Ip].trimStart().startsWith("/**")) continue;
-               const pp = Ip;
-               for (; Ip < Op.length && !Op[Ip].includes("*/");) Ip++;
-               const ip = null === (op = Op[Ip + 1]) || void 0 === op ? void 0 : op.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
-               if (!ip) continue;
-               let Sp = null;
-               const xp = [];
-               let Lp = "description",
-                 Yp = !1;
- ... (12 more removed lines; see GitHub link above)
+     function jQ(QQ, WQ, XQ, wQ) {
+       const qQ = QQ.getBuffer();
+       if (!qQ || !QQ.isUpdatable()) return;
+       const TQ = QQ._engine;
+       TQ.Mj >= 2 ? (BQ(TQ, qQ, WQ, XQ, wQ), yQ(TQ)) : QQ.updateDirectly(WQ.subarray(XQ, wQ), XQ)
+     }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L734-L762` → after: `L1238-L33098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L1238-L33098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L1238-L33098) · [Before (L734-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L734-L762)

```diff
-         function Di() {
-           if (!Li) {
-             Li = new Map;
-             for (const pp of Np) {
-               const ip = (0, mp.t)(hp(pp)).flatMap((pp => pp.blocks));
-               for (const pp of (0, mp.n)(ip))
-                 if ("ts" === pp.lang || "typescript" === pp.lang)
-                   for (const [ip, cp] of Mp(pp.code)) Li.set(ip, cp)
-             }
-             for (const [pp, ip] of(Si ??= Ii(Gp.default), Si)) Li.has(pp) || Li.set(pp, ip)
-           }
-           return Li
-         }
-         const Ai = {
-           BlockName: "blockNames",
-           BlockNameOrId: "blockNames",
- ... (13 more removed lines; see GitHub link above)
+     function BQ(QQ, WQ, XQ, wQ, qQ) {
+       QQ.bindArrayBuffer(WQ), QQ._gl.bufferSubData(QQ._gl.ARRAY_BUFFER, wQ * Float32Array.BYTES_PER_ELEMENT, XQ, wQ, qQ - wQ)
+     }
+ 
+     function yQ(QQ) {
+       QQ._cachedVertexBuffers = null
+     }
+     class VQ {
+       constructor(QQ) {
+         this.engine = QQ, this.pages = []
+       }
+       static forEngine(QQ) {
+         const WQ = QQ;
+         if (!(WQ.Mj >= 2) || !DQ.test(WQ.getGlInfo().renderer)) return null;
+         let XQ = pQ.get(QQ);
+         if (!XQ) {
+ ... (31845 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L764` → after: `L33100-L33290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR33100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L33100-L33290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L33100-L33290) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L764)

```diff
-         let Pi;
+         QQ.KJ = this.KJ, QQ.state.zC = this.state.zC, QQ.numSlots = this.numSlots, QQ._selectedSlotI = this._selectedSlotI, QQ.items.length = this.items.length, WQ.length > this.items.length && (WQ.length = this.items.length);
+         for (let XQ = 0; XQ < this.items.length; XQ++)
+           if (WQ.length <= XQ && WQ.push({
+               name: void 0,
+               amount: void 0,
+               attributes: void 0,
+               typeObj: void 0
+             }), null === this.items[XQ]) QQ.items[XQ] = null;
+           else {
+             const wQ = WQ[XQ];
+             wQ.name = this.items[XQ].name, wQ.amount = this.items[XQ].amount, wQ.attributes = void 0, wQ.typeObj = this.items[XQ].typeObj, QQ.items[XQ] = wQ
+           } return QQ
+       }
+       pickUpItem(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wQ.b.length;
+         const XQ = {
+ ... (175 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L766-L774` → after: `L33292-L33404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR33292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L33292-L33404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L33292-L33404) · [Before (L766-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L766-L774)

```diff
-         function Wi() {
-           if (!Pi) {
-             Pi = new Map;
-             for (const pp of Np)
-               if (Cp(pp.layout))
-                 for (const ip of hp(pp).sections) Pi.has(ip.heading.text) || Pi.set(ip.heading.text, {
-                   pageId: pp.id,
-                   anchor: ip.heading.anchor
-                 })
+     function pQ(QQ) {
+       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+         XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+         wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qQ.g;
+       return new DQ(QQ, GQ(WQ, (QQ => {
+         null === XQ || void 0 === XQ || XQ(QQ)
+       })), wQ)
+     }
+ 
+     function GQ(QQ, WQ) {
+       return {
+         zC: QQ,
+         selectedItem: null,
+         inventory: null,
+         opWrapper: null,
+         onInventoryUpdate: WQ
+ ... (97 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L776` → after: `L33406-L35101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR33406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L33406-L35101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L33406-L35101) · [Before (L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L776)

```diff
-           return Pi
+         const rQ = this.getFreeSlotBoundIdxs(QQ, WQ);
+         if (null !== rQ) {
+           const QQ = zQ.amount;
+           return this.setItemAtIdx(rQ, {
+             name: zQ.name,
+             amount: gQ,
+             typeObj: zQ.typeObj,
+             attributes: (0, sQ.d)(zQ.attributes)
+           }), zQ.amount -= gQ, zQ.amount <= 0 && (this.setItemAtIdx(XQ, null), zQ.amount < 0 && !(this.inCreative && !this.DT && XQ >= this.playerInventory.numSlots) && console.error(new Error(`Moved too much item: tried to move ${gQ} ${zQ.name} from slot ${XQ} that had ${QQ} ${z … [truncated]
+             actualMovedAmt: PQ,
+             primarySlotIdx: rQ
+           }
+         }
+         return this.update(), null === PQ ? TQ : {
+           actualMovedAmt: PQ - gQ,
+           primarySlotIdx: JQ
+ ... (1680 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L779-L786` → after: `L35106-L35126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35106-L35126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35106-L35126) · [Before (L779-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L779-L786)

```diff
-         function yi(pp) {
-           const ip = pp.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
-           return ip ? Wi().get(ip[1]) : void 0
-         }
-         const Ui = (0, Op.createContext)("/docs"),
-           wi = (0, Op.createContext)(null),
-           vi = (0, Op.createContext)(!1),
-           ti = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;
+     function qQ(QQ, WQ) {
+       return wQ[QQ][WQ]
+     }
+   },
+   38433: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => wQ
+     });
+     const wQ = ["head", "body", "shoes", "legs", "eyebrows", "eyes", "skin"]
+   },
+   37937: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => FQ,
+       f: () => OQ,
+       g: () => SQ
+     });
+ ... (5 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L788-L791` → after: `L35128-L35187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35128-L35187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35128-L35187) · [Before (L788-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L788-L791)

```diff
-         function Hi(pp) {
-           const ip = pp.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
-           return ip ? ip[1] : null
-         }
+     function FQ(QQ, WQ) {
+       const XQ = [0, 0, 0];
+       return (0, zQ.j)((wQ => {
+         const qQ = WQ(),
+           TQ = QQ();
+         return wQ === TQ.rD.vx(TQ.RC) ? function(QQ, WQ) {
+           const XQ = oQ(QQ, WQ);
+           for (let wQ = 0; wQ < XQ.length; wQ++) {
+             const WQ = XQ[wQ];
+             if (!QQ.qN(WQ[0], WQ[1], WQ[2])) return !0
+           }
+           return !1
+         }(qQ, wQ) : (XQ[0] = Math.floor((wQ.tJ.base[0] + wQ.tJ.max[0]) / 2), XQ[1] = Math.floor(wQ.tJ.base[1]), XQ[2] = Math.floor((wQ.tJ.base[2] + wQ.tJ.max[2]) / 2), qQ.VK(XQ, XQ), !qQ.qN(XQ[0], XQ[1], XQ[2]))
+       }), "client")
+     }
+     const PQ = .05,
+ ... (44 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L793-L804` → after: `L35189-L35192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35189-L35192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35189-L35192) · [Before (L793-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L793-L804)

```diff
-         function di(pp) {
-           let {
-             colour: ip
-           } = pp;
-           return (0, yp.jsx)("span", {
-             className: "DocsColourSwatch",
-             style: {
-               background: ip
-             },
-             "aria-hidden": "true"
-           })
-         }
+     function AQ(QQ) {
+       const WQ = cQ[QQ];
+       return 1 === WQ || 2 === WQ ? 1 === WQ : "trapdoor" === qQ.h[QQ].model
+     }
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L806-L813` → after: `L35194-L35223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35194-L35223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35194-L35223) · [Before (L806-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L806-L813)

```diff
-         function ei(pp) {
-           const ip = [];
-           let cp = 0;
-           for (const Op of pp.matchAll(ti)) ip.push(pp.slice(cp, Op.index), (0, yp.jsx)(di, {
-             colour: Op[0]
-           }), Op[0]), cp = Op.index + Op[0].length;
-           return ip.push(pp.slice(cp)), ip
-         }
+     function RQ(QQ) {
+       const WQ = QQ.Mr;
+       HQ = WQ;
+       const XQ = dQ.length;
+       aQ = new Uint8Array(XQ), lQ = new Int32Array(XQ), hQ = new Int8Array(XQ), iQ = new Uint8Array(XQ);
+       for (let wQ = 0; wQ < XQ; wQ++) {
+         if (0 !== wQ && void 0 === WQ.metadatas[wQ]) continue;
+         const XQ = QQ.getMetaInfo(wQ),
+           qQ = null === XQ || void 0 === XQ ? void 0 : XQ.rot;
+         XQ && Number.isInteger(XQ.rootId) && !(Math.abs(XQ.rootId) > 2147483647) && (null == qQ || Number.isInteger(qQ) && qQ >= 0 && qQ <= 127) && (aQ[wQ] = 1, lQ[wQ] = XQ.rootId, hQ[wQ] = null !== qQ && void 0 !== qQ ? qQ : 0, iQ[wQ] = XQ.open ? 1 : 0)
+       }
+     }
+     const EQ = [!1, !1, !1],
+       CQ = [0, 0, 0],
+       uQ = [0, 0, 0],
+       LQ = [0, 0, 0],
+ ... (14 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L815-L829` → after: `L35225-L35272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35225-L35272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35225-L35272) · [Before (L815-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L815-L829)

```diff
-         function ui(pp) {
-           let {
-             href: ip,
-             children: cp
-           } = pp;
-           const op = (0, Op.useContext)(Ui);
-           if (ip.startsWith("#")) {
-             const pp = np(ip);
-             if (pp) return (0, yp.jsx)(Sp.c, {
-               to: gp(op, pp.page, pp.anchor),
-               children: (0, yp.jsx)(vi.Provider, {
-                 value: !0,
-                 children: cp
-               })
-             })
+     function SQ(QQ, WQ, XQ) {
+       QQ.Mr !== HQ && RQ(QQ);
+       const qQ = QQ.KJ.rD.mN(WQ).gWQ,
+         TQ = QQ.getPlayerReader(WQ),
+         zQ = oQ(QQ, XQ, gQ, PQ),
+         sQ = QQ.VK(qQ, LQ),
+         FQ = sQ[0],
+         JQ = sQ[1],
+         rQ = sQ[2],
+         IQ = JQ + wQ.h.xy,
+         jQ = .5 * (XQ.tJ.max[0] - XQ.tJ.base[0]),
+         BQ = 1e-4,
+         DQ = jQ - BQ,
+         cQ = jQ + .25,
+         SQ = jQ + gQ;
+       let tQ = 0,
+ ... (32 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L841-L866` → after: `L35275-L35276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35275-L35276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35275-L35276) · [Before (L841-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L841-L866)

```diff
- 
-         function ji(pp) {
-           let {
-             code: ip
-           } = pp;
-           const cp = (0, Op.useContext)(Ui);
-           if ((0, Op.useContext)(vi)) return (0, yp.jsx)("code", {
-             className: "DocsInlineCode",
-             children: ip
-           });
-           if (Di().has(ip)) return (0, yp.jsx)(qi, {
-             type: ip
-           });
-           const op = yi(ip);
-           if (op) return (0, yp.jsx)(Sp.c, {
-             className: "DocsInlineCode DocsSymbolLink",
- ... (10 more removed lines; see GitHub link above)
+         if (HQ & vQ.conveyor && !QW) {
+           Math.abs(JQ - (gQ + UQ[GQ])) < bQ && !(FQ - DQ > PQ + 1 || FQ + DQ < PQ || rQ - DQ > pQ + 1 || rQ + DQ < pQ) && (MQ = GQ, QW = Math.floor(FQ) === PQ && Math.floor(rQ) === pQ)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L868-L889` → after: `L35278-L35297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35278-L35297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35278-L35297) · [Before (L868-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L868-L889)

```diff
- 
-         function ki(pp) {
-           let {
-             text: ip
-           } = pp;
-           const cp = [];
-           let op = 0;
-           for (const Op of ip.matchAll(mp.g)) {
-             Op.index > op && cp.push(...ei(ip.slice(op, Op.index)));
-             const [, pp, Ip, Sp, xp, Lp] = Op;
-             pp ? cp.push((0, yp.jsx)(ji, {
-               code: (0, mp.q)(pp, Ip)
-             })) : Sp ? cp.push((0, yp.jsx)("strong", {
-               children: (0, yp.jsx)(ki, {
-                 text: Sp
-               })
- ... (6 more removed lines; see GitHub link above)
+         if (RQ) {
+           let WQ, wQ, qQ;
+           if (1 === aQ[GQ]) WQ = lQ[GQ], wQ = hQ[GQ], qQ = 1 === iQ[GQ];
+           else {
+             const XQ = QQ.getMetaInfo(GQ);
+             WQ = XQ.rootId, wQ = XQ.rot, qQ = !!XQ.open
+           }
+           const TQ = dQ[WQ];
+           if (HQ & vQ.ceilingClimbable || TQ & vQ.ceilingClimbable) {
+             const QQ = Math.abs(FQ - (PQ + .5)),
+               XQ = Math.abs(JQ - (gQ + .5)),
+               wQ = Math.abs(rQ - (pQ + .5));
+             QQ < cQ && wQ < cQ && (null === NQ || XQ < NQ) && (YQ = WQ, NQ = XQ)
+           }
+           if ((HQ & vQ.wallClimbable || TQ & vQ.wallClimbable) && (!AQ(WQ) || qQ)) {
+             let QQ, qQ, TQ, zQ;
+ ... (4 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L897-L898` → after: `L35300-L35303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35300-L35303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35300-L35303) · [Before (L897-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L897-L898)

```diff
-         const mi = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
-           Ri = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);
+       }
+       return CQ[0] = tQ, CQ[1] = eQ, CQ[2] = nQ, fQ.onLadder = xQ, fQ.currentCeilingClimbable = YQ, fQ.inCobweb = ZQ, fQ.inFluid = OQ, fQ.inJumpPad = KQ, fQ.jumpPadLaunchVelocity = mQ, fQ.onConveyor = 0 !== MQ, kQ[0] = 0 !== MQ ? pQ[MQ] : 0, kQ[2] = 0 !== MQ ? GQ[MQ] : 0, fQ
+     }
+     const tQ = [0, 0, 0, 0, 0, 0];
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L900-L923` → after: `L35305-L35366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35305-L35366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35305-L35366) · [Before (L900-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L900-L923)

```diff
-         function qi(pp) {
-           let {
-             type: ip
-           } = pp;
-           const cp = Di(),
-             op = [];
-           for (const Op of ip.trim().matchAll(mi)) {
-             const [pp, ip, Ip, Sp, xp] = Op;
-             ip ? op.push((0, yp.jsx)("span", {
-               className: "DocsTypeString",
-               children: pp
-             })) : Ip && cp.has(Ip) ? op.push((0, yp.jsx)(li, {
-               name: Ip,
-               definition: cp.get(Ip)
-             })) : Ip ? op.push((0, yp.jsx)("span", {
-               className: Ri.has(Ip) ? "DocsTypeKeyword" : "DocsTypeName",
- ... (8 more removed lines; see GitHub link above)
+     function oQ(QQ, WQ) {
+       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+         wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       const qQ = WQ.tJ.base,
+         TQ = WQ.tJ.max,
+         zQ = tQ;
+       return zQ[0] = qQ[0] - XQ, zQ[1] = qQ[1] - wQ, zQ[2] = qQ[2] - XQ, zQ[3] = TQ[0] + XQ, zQ[4] = TQ[1] + wQ, zQ[5] = TQ[2] + XQ, NQ(QQ.KJ, zQ)
+     }
+     const eQ = [null, null, null, null].map((() => [0, 0, 0])),
+       nQ = [null, null, null, null].map((() => [0, 0, 0])),
+       xQ = [null, null, null, null].map((() => [0, 0, 0]));
+     const YQ = [];
+ 
+     function NQ(QQ, WQ) {
+       const XQ = QQ.jr;
+       let wQ = 0;
+ ... (46 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L932-L934` → after: `L35369-L35371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35369-L35371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35369-L35371) · [Before (L932-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L932-L934)

```diff
-         const Mi = 480,
-           Ci = 6,
-           Ei = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
+         PQ.length = gQ;
+         const rQ = XQ ? [] : MQ;
+         rQ.length = 0;
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L937-L1050` → after: `L35396-L35473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35396-L35473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35396-L35473) · [Before (L937-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L937-L1050)

```diff
-         function li(pp) {
-           let {
-             name: ip,
-             definition: cp
-           } = pp;
-           const op = (0, Op.useContext)(Ui),
-             Ip = Ai[ip],
-             xp = (0, Op.useRef)(null),
-             Lp = (0, Op.useRef)(null),
-             Dp = (0, Op.useRef)(null),
-             [Ap, Pp] = (0, Op.useState)(!1),
-             [Wp, Up] = (0, Op.useState)(null),
-             vp = (0, Op.useRef)(),
-             tp = (0, Op.useContext)(wi),
-             [Hp] = (0, Op.useState)((() => "DocsTypePopover-" + Xi++)),
-             dp = () => {
- ... (98 more removed lines; see GitHub link above)
+     function WW(QQ) {
+       return QW[0][0] = QQ[3], QW[0][1] = QQ[2], QW[1][0] = QQ[0], QW[1][1] = QQ[2], QW[2][0] = QQ[3], QW[2][1] = QQ[5], QW[3][0] = QQ[0], QW[3][1] = QQ[5], QW
+     }
+   },
+   38266: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => qQ,
+       e: () => TQ
+     });
+     var wQ = XQ(9580);
+ 
+     function qQ(QQ, WQ) {
+       const XQ = {
+           rock: "stone",
+           wood: "wood",
+           granule: "gravel",
+ ... (62 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1052-L1113` → after: `L35475-L35481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35475-L35481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35475-L35481) · [Before (L1052-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1052-L1113)

```diff
-         var Qi = cp(195),
-           Ji = cp(4876),
-           Bi = cp(4880),
-           Ni = cp(4882);
-         const Ti = {
-           progressBar: {
-             Oi: 30,
-             oi: .075,
-             Ii: 5,
-             Si: !1,
-             description: [{
-               str: "Click repeatedly to complete!"
-             }],
-             Yi: "fa-solid fa-computer-mouse",
-             scale: 3,
-             rotation: 15
- ... (46 more removed lines; see GitHub link above)
+       }
+       reserve(QQ) {
+         for (const WQ of QQ.matchAll(qQ)) {
+           const QQ = WQ[1].toLowerCase();
+           if (!this._slots.has(QQ)) {
+             if (this._slots.size >= 256) return !1;
+             this._slots.set(QQ, this._slots.size), this.provisional.push(QQ)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1115-L1117` → after: `L35483-L35489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35483-L35489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35483-L35489) · [Before (L1115-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1115-L1117)

```diff
-         };
-         var fi = cp(322),
-           bi = cp(2028);
+         }
+         return !0
+       }
+       createValues() {
+         return new Float64Array(this._slots.size)
+       }
+     }
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1119-L1120` → after: `L35491-L35627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35491-L35627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35491-L35627) · [Before (L1119-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1119-L1120)

```diff
-         function ai(pp) {
-           return pp.startsWith("fa-")
+     function zQ(QQ, WQ) {
+       return {
+         still: sQ(QQ),
+         timeless: FQ(QQ),
+         standsAfterSeconds: PQ(QQ, WQ)
+       }
+     }
+ 
+     function sQ(QQ) {
+       return 0 === QQ.startDelaySeconds && null === QQ.animTimeUpdate && null !== rQ(QQ.blendWeight) && QQ.bones.every((QQ => JQ(QQ.rotation) && JQ(QQ.position) && JQ(QQ.scale)))
+     }
+ 
+     function FQ(QQ) {
+       return !gQ(QQ, (QQ => QQ.readsClock))
+     }
+ 
+ ... (121 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1123-L1127` → after: `L35638-L35646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35638-L35646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35638-L35646) · [Before (L1123-L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1123-L1127)

```diff
-             text: "Text",
-             icon: "Icon",
-             progressBar: "Progress bar",
-             keyBinding: "Key binding",
-             other: "Other"
+             id: QQ,
+             lengthSeconds: VQ,
+             loop: lQ(WQ.loop),
+             bones: JQ,
+             blendWeight: void 0 === WQ.blend_weight ? 1 : this.compileAxis(WQ.blend_weight, "blend_weight"),
+             animTimeUpdate: void 0 === WQ.anim_time_update ? null : this.compileExpression(WQ.anim_time_update, "anim_time_update"),
+             startDelaySeconds: this.compileConstantSeconds(WQ.start_delay, "start_delay"),
+             loopDelaySeconds: this.compileConstantSeconds(WQ.loop_delay, "loop_delay"),
+             overridePrevious: DQ
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1130-L1140` → after: `L35649-L35702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35649-L35702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35649-L35702) · [Before (L1130-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1130-L1140)

```diff
-             text: "Text",
-             icon: {
-               icon: "Pixelated Heart"
-             },
-             progressBar: {
-               type: "ProgressBar",
-               progress: .5
-             },
-             keyBinding: {
-               type: "StyledKeyBinding",
-               action: "jump"
+             ...GQ,
+             ...zQ(GQ, BQ)
+           },
+           dQ = (0, IQ.l)(vQ);
+         if (dQ > IQ.e) throw new jQ.d(`costs ${dQ} to play each frame, over the ${IQ.e} limit: animate fewer bones or simplify its Molang`);
+         return vQ
+       }
+       compileBone(QQ, WQ) {
+         if (!(0, jQ.m)(WQ)) throw new jQ.d(`bone "${QQ}" is not an object`);
+         const XQ = {
+           [wQ.e.Rotation]: null,
+           [wQ.e.Position]: null,
+           [wQ.e.Scale]: null
+         };
+         for (const wQ of Object.keys(WQ)) {
+           const qQ = GQ.get(wQ);
+ ... (38 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1142-L1145` → after: `L35704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35704) · [Before (L1142-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1142-L1145)

```diff
-           };
- 
-         function gi(pp) {
-           return "string" === typeof pp ? "text" : "entityName" in pp || "translationKey" in pp ? "other" : (0, fi.Eb)(pp) ? "progressBar" : (0, fi.Cb)(pp) ? "keyBinding" : "icon" in pp ? "icon" : "str" in pp && "string" === typeof pp.str ? "text" : "other"
+           }
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1147-L1270` → after: `L35706-L35763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35706-L35763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35706-L35763) · [Before (L1147-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1147-L1270)

```diff
-         const Gi = [{
-             path: ["style", "color"],
-             label: "Colour",
-             field: {
-               kind: "colour"
-             },
-             defaultText: "The surrounding text's"
-           }, {
-             path: ["style", "fontSize"],
-             label: "Font size",
-             field: {
-               kind: "size"
-             },
-             defaultText: "1em"
-           }, {
-             path: ["style", "fontWeight"],
- ... (108 more removed lines; see GitHub link above)
+         if (0 === qQ.length) throw new jQ.d(`${XQ} has no keyframes`);
+         if (this.keyframeCount += qQ.length, this.keyframeCount > 2e4) throw new jQ.d("the file has over 20000 keyframes");
+         qQ.sort(((QQ, WQ) => QQ.time - WQ.time));
+         for (let TQ = 1; TQ < qQ.length; TQ++)
+           if (qQ[TQ].time - qQ[TQ - 1].time < wQ.h) throw new jQ.d(`${XQ} has two keyframes at ${qQ[TQ].time}s`);
+         return (0, jQ.i)(qQ), {
+           keyframes: qQ.map((QQ => this.compileKeyframe(QQ, XQ)))
+         }
+       }
+       compileKeyframe(QQ, WQ) {
+         const XQ = this.compileTriple(QQ.dataPoints[0], WQ),
+           wQ = QQ.dataPoints.length > 1 ? this.compileTriple(QQ.dataPoints[QQ.dataPoints.length - 1], WQ) : XQ;
+         return {
+           time: QQ.time,
+           pre: XQ,
+           post: wQ,
+ ... (42 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1272-L1275` → after: `L35765-L35797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35765-L35797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35765-L35797) · [Before (L1272-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1272-L1275)

```diff
-         function Zi(pp) {
-           return "string" === typeof pp ? {
-             str: pp
-           } : pp
+     function aQ(QQ, WQ) {
+       if (!Number.isFinite(QQ) || Math.abs(QQ) > DQ) throw new jQ.d(`${WQ}: ${QQ} is not a finite number within \xb11000000`);
+       return QQ
+     }
+ 
+     function lQ(QQ) {
+       if (void 0 === QQ || !1 === QQ) return wQ.g.Once;
+       if (!0 === QQ) return wQ.g.Loop;
+       if ("hold_on_last_frame" === QQ) return wQ.g.Hold;
+       throw new jQ.d(`loop ${JSON.stringify(QQ)} is not supported (true, false or "hold_on_last_frame")`)
+     }
+     class hQ {
+       constructor(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !1;
+         this.byId = new Map, this.fileById = new Map, this.byShortName = new Map, this.variables = new TQ, this.diagnostics = [];
+         for (const XQ of QQ) {
+ ... (17 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1278-L1281` → after: `L35809-L35846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35809-L35846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35809-L35846) · [Before (L1278-L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1278-L1281)

```diff
-         function zi(pp, ip) {
-           let cp = Zi(pp);
-           for (const Op of ip) cp = cp && "object" === typeof cp ? cp[Op] : void 0;
-           return cp
+     function iQ(QQ, WQ) {
+       for (let XQ = 0; XQ < QQ.length; XQ++) {
+         const wQ = QQ[XQ].find(WQ);
+         if (null !== wQ) return {
+           clip: wQ,
+           pool: XQ
+         };
+         if (QQ[XQ].isAmbiguousShortName(WQ)) return "ambiguous"
+       }
+       return "noClip"
+     }
+ 
+     function cQ(QQ) {
+       return QQ.slice(QQ.lastIndexOf(".") + 1)
+     }
+   },
+ ... (22 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1284-L1298` → after: `L35851-L35872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35851-L35872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35851-L35872) · [Before (L1284-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1284-L1298)

```diff
-         function si(pp, ip, cp) {
-           const Op = (pp, op) => {
-             var Ip;
-             const Sp = ip[op],
-               xp = {
-                 ...pp
-               };
-             if (op === ip.length - 1) return void 0 === cp ? delete xp[Sp] : xp[Sp] = cp, xp;
-             const Lp = Op(null !== (Ip = pp[Sp]) && void 0 !== Ip ? Ip : {}, op + 1);
-             return 0 === Object.keys(Lp).length ? delete xp[Sp] : xp[Sp] = Lp, xp
-           };
-           return function(pp) {
-             const ip = Object.keys(pp);
-             return "string" === typeof pp.str && 1 === ip.length ? pp.str : pp
-           }(Op(Zi(pp), 0))
+     function zQ(QQ, WQ, XQ, qQ, TQ) {
+       const zQ = QQ.keyframes;
+       if (1 === zQ.length) return void PQ(zQ[0], WQ, qQ, TQ);
+       const sQ = function(QQ, WQ) {
+           let XQ = 0,
+             wQ = QQ.length;
+           for (; XQ < wQ;) {
+             const qQ = XQ + wQ >>> 1;
+             QQ[qQ].time < WQ ? XQ = qQ + 1 : wQ = qQ
+           }
+           return XQ - 1
+         }(zQ, WQ),
+         JQ = sQ + 1 < zQ.length ? sQ + 1 : -1,
+         rQ = sQ >= 0 ? zQ[sQ] : null,
+         IQ = JQ >= 0 ? zQ[JQ] : null;
+       let jQ = null;
+ ... (6 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1301-L1305` → after: `L35883-L36181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR35883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L35883-L36181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L35883-L36181) · [Before (L1301-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1301-L1305)

```diff
-         function Ki(pp, ip) {
-           const cp = gi(pp),
-             Op = ri[cp].find((pp => pp.path.join(".") === ip.join("."))),
-             op = null !== Op && void 0 !== Op && Op.isRequired && "other" !== cp ? zi(Fi[cp], ip) : void 0;
-           return si(pp, ip, op)
+     function FQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
+       const FQ = sQ;
+       let PQ = 0;
+       void 0 === QQ || WQ.hasPrePost || (FQ[PQ++] = gQ(QQ.post[qQ], zQ)), FQ[PQ++] = gQ(WQ.post[qQ], zQ), FQ[PQ++] = gQ(XQ.pre[qQ], zQ), void 0 === wQ || XQ.hasPrePost || (FQ[PQ++] = gQ(wQ.pre[qQ], zQ));
+       return function(QQ, WQ, XQ) {
+         const wQ = (WQ - 1) * XQ,
+           qQ = Math.min(Math.floor(wQ), WQ - 1),
+           TQ = wQ - qQ,
+           zQ = QQ[0 === qQ ? qQ : qQ - 1],
+           sQ = QQ[qQ],
+           FQ = QQ[qQ > WQ - 2 ? WQ - 1 : qQ + 1],
+           PQ = QQ[qQ > WQ - 3 ? WQ - 1 : qQ + 2],
+           gQ = .5 * (FQ - zQ),
+           JQ = .5 * (PQ - sQ),
+           rQ = TQ * TQ;
+         return (2 * sQ - 2 * FQ + gQ + JQ) * (TQ * rQ) + (-3 * sQ + 3 * FQ - 2 * gQ - JQ) * rQ + gQ * TQ + sQ
+ ... (283 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1308-L1319` → after: `L36189-L36278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36189-L36278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36189-L36278) · [Before (L1308-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1308-L1319)

```diff
-         function Vi(pp) {
-           switch (gi(pp)) {
-             case "text":
-               return String(zi(pp, ["str"]));
-             case "icon":
-               return String(zi(pp, ["icon"]));
-             case "progressBar":
-               return `${Math.round(100*Number(zi(pp,["progress"])))}%`;
-             case "keyBinding":
-               return String(zi(pp, ["action"]));
-             case "other":
-               return JSON.stringify(pp)
+     function HQ(QQ) {
+       if (QQ.length > GQ) return null;
+       try {
+         const WQ = JSON.parse(QQ);
+         return (0, sQ.m)(WQ) && "string" === typeof WQ.target ? WQ.target : null
+       } catch {
+         return null
+       }
+     }
+     class aQ {
+       constructor(QQ, WQ) {
+         this.source = QQ, this.options = WQ, this.inputIndexByName = new Map;
+         for (const [XQ, wQ] of pQ.d) this.inputIndexByName.set(XQ, wQ)
+       }
+       compile(QQ) {
+         const WQ = jQ(QQ, "the file");
+ ... (74 more added lines; see GitHub link above)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1322-L1333` → after: `L36287-L36289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36287-L36289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36287-L36289) · [Before (L1322-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1322-L1333)

```diff
-         const pc = /^[A-Za-z_$][\w$]*$/;
- 
-         function ic(pp) {
-           if (Array.isArray(pp)) return `[${pp.map(ic).join(", ")}]`;
-           if (pp && "object" === typeof pp) {
-             const ip = Object.entries(pp).map((pp => {
-               let [ip, cp] = pp;
-               return `${pc.test(ip)?ip:JSON.stringify(ip)}: ${ic(cp)}`
-             }));
-             return 0 === ip.length ? "{}" : `{ ${ip.join(", ")} }`
-           }
-           return JSON.stringify(pp)
+         return {
+           variables: wQ,
+           constants: qQ
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1335-L1339` → after: `L36291-L36306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36291-L36306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36291-L36306) · [Before (L1335-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1335-L1339)

```diff
- 
-         function cc(pp) {
-           const ip = pp.map(ic),
-             cp = `[${ip.join(", ")}]`;
-           return cp.length <= 60 ? cp : `[\n${ip.map((pp=>`    ${pp},`)).join("\n")}\n]`
+       }
+       compileLayer(QQ, WQ) {
+         const XQ = jQ(QQ, WQ);
+         BQ(XQ, ["name", "states", ...bQ, "mode", "bones", "weight", "transition"], WQ);
+         const wQ = XQ.name;
+         if ("string" !== typeof wQ || !vQ.test(wQ)) throw new FQ(`${WQ}.name must be an identifier`);
+         WQ = `layer "${wQ}"`;
+         const qQ = new Map;
+         let TQ = null;
+         if (void 0 !== XQ.states) {
+           var sQ;
+           if (bQ.some((QQ => void 0 !== XQ[QQ]))) throw new FQ(`${WQ}: use either "states" or a single "clip"/"blend", not both`);
+           this.compileStates(jQ(XQ.states, `${WQ}.states`), WQ, qQ), TQ = null !== (sQ = qQ.get(zQ.f)) && void 0 !== sQ ? sQ : null, qQ.delete(zQ.f)
+         } else {
+           const QQ = Object.fromEntries(bQ.map((QQ => [QQ, XQ[QQ]])));
+           TQ = this.compileState(QQ, wQ, WQ)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1341-L1349` → after: `L36308-L36326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36308-L36326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36308-L36326) · [Before (L1341-L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1341-L1349)

```diff
-         const Oc = {
-           "\n": "\\n",
-           "\r": "\\r",
-           "\t": "\\t"
-         };
- 
-         function oc(pp) {
-           let ip = "";
-           for (let op = 0; op < pp.length; op++) {
+         return {
+           name: wQ,
+           mode: JQ(XQ.mode, `${WQ}.mode`),
+           bones: rQ(XQ.bones, `${WQ}.bones`),
+           weight: void 0 === XQ.weight ? PQ(1) : this.valueSource(XQ.weight, `${WQ}.weight`),
+           transitionSeconds: IQ(XQ.transition, .2, 0, 10, `${WQ}.transition`),
+           states: qQ,
+           fallback: TQ
+         }
+       }
+       compileStates(QQ, WQ, XQ) {
+         const wQ = Object.keys(QQ);
+         if (0 === wQ.length || wQ.length > 64) throw new FQ(`${WQ}.states must list 1-64 states`);
+         for (const sQ of wQ)
+           if (sQ !== zQ.f && !this.options.stateNames.has(sQ)) throw new FQ(`${WQ}: "${sQ}" is not a state of this target`);
+         const qQ = new Set,
+ ... (3 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1351-L1358` → after: `L36328-L36333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36328-L36333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36328-L36333) · [Before (L1351-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1351-L1358)

```diff
-             if ("\\" === Ip) {
-               var cp;
-               const Op = null !== (cp = pp[op + 1]) && void 0 !== cp ? cp : "";
-               ip += "'" === Op ? "'" : Ip + Op, op++
-             } else if ('"' === Ip) ip += '\\"';
-             else {
-               var Op;
-               ip += null !== (Op = Oc[Ip]) && void 0 !== Op ? Op : Ip
+             if ("string" === typeof sQ) {
+               if (!Object.prototype.hasOwnProperty.call(QQ, sQ)) throw new FQ(`${WQ}: "${wQ}" shares "${sQ}", which the layer does not define`);
+               if (qQ.has(wQ)) throw new FQ(`${WQ}: "${wQ}" shares itself through a cycle`);
+               qQ.add(wQ);
+               const zQ = TQ(sQ);
+               return XQ.set(wQ, zQ), zQ
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1363-L1368` → after: `L36370-L36384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36370-L36384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36370-L36384) · [Before (L1363-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1363-L1368)

```diff
- 
-         function Ic(pp) {
-           if ("string" === typeof pp) return !0;
-           if (!pp || "object" !== typeof pp || Array.isArray(pp)) return !1;
-           const ip = pp;
-           return "ProgressBar" === ip.type ? "number" === typeof ip.progress : "StyledKeyBinding" === ip.type ? bi.n.includes(ip.action) : "string" === typeof ip.icon || "string" === typeof ip.str || "string" === typeof ip.entityName || "string" === typeof ip.translationKey
+         if (void 0 !== wQ.stride) throw new FQ(`${XQ}: give each blend clip its own stride`);
+         if (void 0 === wQ.blend) throw new FQ(`${XQ}: needs a "clip" or a "blend"`);
+         const sQ = jQ(wQ.blend, `${XQ}.blend`);
+         BQ(sQ, ["input", "clips"], `${XQ}.blend`);
+         const JQ = sQ.clips;
+         if (!Array.isArray(JQ) || 0 === JQ.length || JQ.length > 16) throw new FQ(`${XQ}.blend.clips must list 1-16 clips`);
+         const rQ = JQ.map(((QQ, WQ) => this.compileBlendChild(QQ, `${XQ}.blend.clips[${WQ}]`)));
+         for (let PQ = 1; PQ < rQ.length; PQ++)
+           if (rQ[PQ].at <= rQ[PQ - 1].at) throw new FQ(`${XQ}.blend.clips must be in increasing "at" order`);
+         return {
+           name: WQ,
+           children: zQ(rQ),
+           blendInput: this.input(sQ.input, `${XQ}.blend.input`),
+           rate: qQ,
+           restCycle: TQ
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1370-L1421` → after: `L36386-L36398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36386-L36398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36386-L36398) · [Before (L1370-L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1370-L1421)

```diff
- 
-         function Sc(pp) {
-           let ip;
-           try {
-             ip = function(pp) {
-               let ip = "",
-                 cp = "",
-                 Op = 0;
-               const op = () => {
-                 ip += cp.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), cp = ""
-               };
-               for (; Op < pp.length;) {
-                 const Ip = pp.slice(Op).search(/["'`]|\/\//);
-                 if (-1 === Ip) {
-                   cp += pp.slice(Op);
-                   break
- ... (36 more removed lines; see GitHub link above)
+       }
+       compileBlendChild(QQ, WQ) {
+         const XQ = Array.isArray(QQ) ? {
+           clip: QQ[0],
+           at: QQ[1],
+           stride: QQ[2]
+         } : jQ(QQ, WQ);
+         if (Array.isArray(QQ) && (QQ.length < 2 || QQ.length > 3)) throw new FQ(`${WQ} must be [clip, at] or [clip, at, stride]`);
+         if (BQ(XQ, ["clip", "at", "stride"], WQ), "number" !== typeof XQ.at) throw new FQ(`${WQ}.at must be a number`);
+         return {
+           clip: this.clip(XQ.clip, `${WQ}.clip`),
+           at: IQ(XQ.at, 0, -1e6, UQ, `${WQ}.at`),
+           strideBlocks: gQ(XQ.stride, `${WQ}.stride`)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1423-L1567` → after: `L36400-L36419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36400-L36419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36400-L36419) · [Before (L1423-L1567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1423-L1567)

```diff
-         const xc = 1 / Qi.g.clientTicksPerSecond,
-           Lc = 700,
-           Yc = {
-             type: null,
-             parameters: null,
-             state: null,
-             isActive: !1
-           },
-           Dc = {
-             progressBar: Ti.progressBar.Yi,
-             timedClick: Ti.timedClick.icon,
-             gravityBar: Ti.gravityBar.icon,
-             precisionBar: Ti.precisionBar.icon,
-             rhythmClick: Ti.rhythmClick.icon
-           };
- 
- ... (129 more removed lines; see GitHub link above)
+       }
+       compileActions(QQ) {
+         const WQ = jQ(QQ, "actions"),
+           XQ = Object.keys(WQ);
+         if (XQ.length > 64) throw new FQ("actions: at most 64");
+         const wQ = new Map;
+         for (const qQ of XQ) {
+           const QQ = `actions.${qQ}`;
+           if (!vQ.test(qQ)) throw new FQ(`${QQ}: action names must be identifiers`);
+           const XQ = jQ(WQ[qQ], QQ);
+           BQ(XQ, ["clip", "mode", "bones", "fadeIn", "fadeOut"], QQ);
+           const TQ = this.clip(XQ.clip, `${QQ}.clip`);
+           if (zQ.k.has(qQ) && TQ.clip.loop !== DQ.g.Once) throw new FQ(`${QQ}: the game plays this action, so its clip must end (not loop or hold on its last frame)`);
+           wQ.set(qQ, {
+             name: qQ,
+             clip: TQ,
+ ... (4 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1571-L1759` → after: `L36449-L36465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36449-L36465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36449-L36465) · [Before (L1571-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1571-L1759)

```diff
-         function Pc(pp) {
-           let {
-             level: ip,
-             text: cp,
-             anchor: Op,
-             className: op
-           } = pp;
-           const Sp = `h${Math.min(ip,6)}`;
-           return (0, yp.jsxs)(Sp, {
-                 id: Op,
-                 className: Ip()("DocsHeading", op),
-                 children: [(0, yp.jsx)(ki, {
-                       text: cp
-                     }), (0, yp.jsx)("a", {
-                         className: "DocsHeadingAnchor",
-                         href: `#${Op}`,
- ... (173 more removed lines; see GitHub link above)
+     function lQ(QQ, WQ) {
+       return void 0 === QQ[WQ] ? {} : QQ[WQ]
+     }
+     var hQ = XQ(37656);
+     const iQ = 64,
+       cQ = 2097152,
+       AQ = /^[A-Za-z0-9][A-Za-z0-9 _.-]{0,95}\.(animation|binding)\.json$/,
+       RQ = ".animation.json",
+       EQ = new Set(["Player", "NPC", "Person"]),
+       CQ = "crouching",
+       uQ = new Set([...wQ.h, ...qQ.l, CQ]),
+       LQ = "parked",
+       kQ = "occupied",
+       fQ = new Set([LQ, kQ]),
+       SQ = new Set(TQ.e),
+       tQ = new Set([...wQ.j.filter((QQ => !EQ.has(QQ))), ...SQ]),
+ ... (1 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1761-L1768` → after: `L36467-L36469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36467-L36469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36467-L36469) · [Before (L1761-L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1761-L1768)

```diff
-                           function zc(pp, ip, cp, Op) {
-                             if (ip < pp[0].at) return cp(Math.min(1, pp.length - 1));
-                             for (let op = 0; op < pp.length - 1; op++)
-                               if (ip <= pp[op + 1].at) {
-                                 const Ip = pp[op + 1].at - pp[op].at;
-                                 return Op(cp(op), cp(op + 1), Ip > 0 ? (ip - pp[op].at) / Ip : 1)
-                               } return cp(pp.length - 1)
-                           }
+     function eQ(QQ) {
+       return SQ.has(QQ)
+     }
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1770-L1772` → after: `L36471-L36474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36471-L36474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36471-L36474) · [Before (L1770-L1772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1770-L1772)

```diff
-                           function sc(pp) {
-                             return zc(pp.colours, pp.age / pp.life, (ip => pp.colours[ip].colour), ((pp, ip, cp) => [gc(pp[0], ip[0], cp), gc(pp[1], ip[1], cp), gc(pp[2], ip[2], cp), gc(pp[3], ip[3], cp)]))
-                           }
+     function nQ(QQ) {
+       return eQ(QQ) ? fQ : uQ
+     }
+     const xQ = new Map([...tQ].map((QQ => [QQ.toLowerCase(), QQ])));
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1774-L1784` → after: `L36476-L36541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36476-L36541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36476-L36541) · [Before (L1774-L1784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1774-L1784)

```diff
-                           function Kc(pp, ip, cp) {
-                             if (pp.age += cp, pp.age >= pp.life) return !1;
-                             const Op = function(pp) {
-                               return 0 === pp.velocityFactors.length ? 1 : zc(pp.velocityFactors, pp.age / pp.life, (ip => pp.velocityFactors[ip].factor), gc)
-                             }(pp) * cp;
-                             for (let Ip = 0; Ip < 3; Ip++) {
-                               var op;
-                               pp.pos[Ip] += pp.dir[Ip] * Op, pp.dir[Ip] += (null !== (op = ip[Ip]) && void 0 !== op ? op : 0) * cp
-                             }
-                             return !0
-                           }
+     function YQ(QQ, WQ) {
+       const XQ = "builtIn" === WQ,
+         wQ = XQ ? oQ : tQ,
+         qQ = [],
+         TQ = (QQ, WQ) => {
+           qQ.push({
+             severity: DQ.d.Error,
+             source: QQ,
+             message: WQ
+           })
+         },
+         zQ = Object.keys(QQ);
+       let sQ = 0;
+       for (const BQ of zQ) sQ += BQ.length + ("string" === typeof QQ[BQ] ? QQ[BQ].length : 0);
+       if (!XQ && (zQ.length > iQ || sQ > cQ)) return TQ("animations", `${zQ.length} files and ${sQ} characters, over the ${iQ} file or ${cQ} character limit`), {
+         pool: new yQ.b([]),
+ ... (50 more added lines; see GitHub link above)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1786-L1788` → after: `L36543-L36553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36543-L36553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36543-L36553) · [Before (L1786-L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1786-L1788)

```diff
-                           function Vc(pp) {
-                             return String(Math.round(1e6 * pp) / 1e6)
-                           }
+     function NQ(QQ, WQ, XQ) {
+       const wQ = QQ.bindings.get(WQ);
+       return void 0 === wQ ? {
+         binding: null,
+         diagnostics: []
+       } : dQ(wQ.text, wQ.name, {
+         stateNames: nQ(WQ),
+         pools: [QQ.pool, ...XQ]
+       })
+     }
+     const ZQ = 0;
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1790-L1792` → after: `L36555-L36599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36555-L36599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36555-L36599) · [Before (L1790-L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1790-L1792)

```diff
-                           function pO(pp) {
-                             return `[${pp.map(Vc).join(", ")}]`
-                           }
+     function OQ(QQ, WQ, XQ) {
+       const wQ = nQ(XQ),
+         qQ = QQ.targetClips.get(XQ),
+         TQ = QQ.bindings.get(XQ);
+       if (void 0 !== TQ) {
+         const XQ = void 0 === qQ ? [QQ.pool, WQ.pool] : [qQ.pool, QQ.pool, WQ.pool];
+         return dQ(TQ.text, TQ.name, {
+           stateNames: wQ,
+           pools: XQ
+         })
+       }
+       if (void 0 === qQ) return {
+         binding: null,
+         diagnostics: []
+       };
+       const zQ = WQ.bindings.get(XQ);
+ ... (29 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1794-L1807` → after: `L36601-L36658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36601-L36658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36601-L36658) · [Before (L1794-L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1794-L1807)

```diff
-                           function iO(pp, ip) {
-                             const cp = `${ip}    `;
-                             return `[\n${(Gc(pp)?pp.map((pp=>{const ip=[`${cp}    timeFraction: ${Vc(pp.timeFraction)},`,`${cp}    minColor: ${pO(pp.minColor)},`];return pp.maxColor&&ip.push(`${cp}    maxColor: ${pO(pp.maxColor)},`),`${cp}{\n${ip.join("\n")}\n${cp}},`})):pp.map(( … [truncated]
-                             $ {
-                               cp
-                             } {
-                               color: $ {
-                                 pO(pp.color)
-                               }
-                             }, `))).join("\n")}\n${ip}]`
-                           }
-                           const cO = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
-                             OO = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
-                           const oO = .6;
+     function KQ(QQ, WQ) {
+       return {
+         severity: DQ.d.Warning,
+         source: QQ,
+         message: WQ
+       }
+     }
+   },
+   37656: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => qQ,
+       g: () => zQ,
+       i: () => TQ
+     });
+     var wQ = XQ(37632);
+     class qQ {
+ ... (42 more added lines; see GitHub link above)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1809-L1828` → after: `L36660-L36673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36660-L36673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36660-L36673) · [Before (L1809-L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1809-L1828)

```diff
-                           function IO(pp, ip) {
-                             return `${ip?"song":"sound"}:${pp}`
-                           }
-                           let SO = {
-                               track: null,
-                               volume: oO
-                             },
-                             xO = null,
-                             LO = 0,
-                             YO = 0;
-                           const DO = new Set;
- 
-                           function AO(pp) {
-                             SO = {
-                               ...SO,
-                               ...pp
- ... (4 more removed lines; see GitHub link above)
+     function TQ(QQ) {
+       const WQ = new Set,
+         XQ = (QQ, XQ) => {
+           const wQ = null === XQ ? null : new Set(XQ.map((QQ => QQ.toLowerCase())));
+           for (const qQ of QQ.bones) {
+             const QQ = qQ.name.toLowerCase();
+             (null === wQ || wQ.has(QQ)) && WQ.add(QQ)
+           }
+         };
+       for (const wQ of QQ.layers)
+         for (const QQ of sQ(wQ)) XQ(QQ, wQ.bones);
+       for (const wQ of QQ.actions.values()) XQ(wQ.clip.clip, wQ.bones);
+       return WQ
+     }
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1830-L1837` → after: `L36675-L36678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36675-L36678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36675-L36678) · [Before (L1830-L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1830-L1837)

```diff
-                           function PO(pp) {
-                             SO.track && AO({
-                               track: {
-                                 ...SO.track,
-                                 ...pp
-                               }
-                             })
-                           }
+     function* zQ(QQ) {
+       for (const WQ of QQ.layers) yield* FQ(WQ);
+       for (const WQ of QQ.actions.values()) yield WQ.clip
+     }
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1839-L1849` → after: `L36680-L36682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36680-L36682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36680-L36682) · [Before (L1839-L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1839-L1849)

```diff
-                           function WO(pp) {
-                             const [ip, cp] = (0, Op.useState)((() => pp(SO))), op = (0, Op.useRef)(pp);
-                             return op.current = pp, (0, Op.useEffect)((() => {
-                               const pp = () => {
-                                 cp((() => op.current(SO)))
-                               };
-                               return DO.add(pp), pp(), () => {
-                                 DO.delete(pp)
-                               }
-                             }), []), ip
-                           }
+     function* sQ(QQ) {
+       for (const WQ of FQ(QQ)) yield WQ.clip
+     }
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1851-L1855` → after: `L36684-L36706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36684-L36706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36684-L36706) · [Before (L1851-L1855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1851-L1855)

```diff
-                           function yO() {
-                             LO++;
-                             const pp = xO;
-                             xO = null, null === pp || void 0 === pp || pp.stop()
-                           }
+     function* FQ(QQ) {
+       for (const XQ of [...QQ.states.values(), QQ.fallback])
+         for (const QQ of null !== (WQ = null === XQ || void 0 === XQ ? void 0 : XQ.children) && void 0 !== WQ ? WQ : []) {
+           var WQ;
+           yield QQ.clip
+         }
+     }
+   },
+   37628: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => IQ,
+       f: () => jQ,
+       i: () => UQ,
+       m: () => vQ,
+       q: () => DQ,
+       s: () => yQ,
+ ... (7 more added lines; see GitHub link above)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1857-L1897` → after: `L36708-L36735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36708-L36735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36708-L36735) · [Before (L1857-L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1857-L1897)

```diff
-                           function UO(pp, ip) {
-                             let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-                             yO();
-                             const op = LO,
-                               {
-                                 track: Ip
-                               } = SO,
-                               Sp = Ip && Ip.name === pp && Ip.isSong === ip ? Ip.duration : 0;
-                             YO = Op, AO({
-                               track: {
-                                 name: pp,
-                                 isSong: ip,
-                                 status: "loading",
-                                 duration: Sp
-                               }
-                             }), Promise.all([cp.e(227), cp.e(253)]).then((() => cp(40003))).then((cp => {
- ... (25 more removed lines; see GitHub link above)
+     function FQ(QQ) {
+       return "" === QQ || "0" === QQ || QQ.length > qQ.e ? QQ : TQ.test(QQ) ? (-parseFloat(QQ)).toString() : function(QQ, WQ) {
+         if (QQ.includes("return ")) return function(QQ, WQ) {
+           let XQ = "",
+             wQ = 0,
+             qQ = 0;
+           for (;;) {
+             const TQ = QQ.indexOf("return ", qQ);
+             if (-1 === TQ) break;
+             const zQ = TQ + 7,
+               sQ = gQ(QQ, zQ);
+             if (-1 !== sQ) {
+               if (XQ += QQ.substring(wQ, zQ) + WQ(QQ.substring(zQ, sQ)), wQ = sQ, sQ === QQ.length) break;
+               qQ = sQ + 1
+             } else qQ = JQ(QQ, zQ) + 1
+           }
+ ... (12 more added lines; see GitHub link above)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1899-L1913` → after: `L36737-L36761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36737-L36761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36737-L36761) · [Before (L1899-L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1899-L1913)

```diff
-                           function wO() {
-                             const {
-                               track: pp
-                             } = SO;
-                             if (!pp) return;
-                             if ("playing" === pp.status && xO) return YO = xO.sH(), xO.pause(), void PO({
-                               status: "paused"
-                             });
-                             if ("loading" === pp.status) return yO(), void PO({
-                               status: "paused"
-                             });
-                             if (xO) return void xO.resume();
-                             const ip = pp.duration > 0 && YO >= pp.duration - .05;
-                             UO(pp.name, pp.isSong, ip ? 0 : YO)
-                           }
+     function PQ(QQ) {
+       let WQ, XQ = !0,
+         wQ = 0,
+         qQ = "";
+       for (const TQ of QQ) {
+         if (0 === wQ) {
+           let QQ, wQ = !0;
+           if ("-" === TQ && "*" !== WQ && "/" !== WQ) {
+             XQ || WQ || (qQ += "+"), XQ = !1;
+             continue
+           }
+           if (" " === TQ || "\n" === TQ) wQ = !1;
+           else {
+             if ("+" === TQ && "*" !== WQ && "/" !== WQ) {
+               qQ += "-", XQ = !1;
+               continue
+ ... (9 more added lines; see GitHub link above)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1915-L1918` → after: `L36763-L36770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36763-L36770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36763-L36770) · [Before (L1915-L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1915-L1918)

```diff
-                           function vO() {
-                             var pp;
-                             return xO && "playing" === (null === (pp = SO.track) || void 0 === pp ? void 0 : pp.status) ? xO.sH() : YO
-                           }
+     function gQ(QQ, WQ) {
+       if (WQ >= QQ.length || rQ(QQ[WQ])) return -1;
+       for (let XQ = WQ + 1; XQ < QQ.length; XQ++) {
+         if (";" === QQ[XQ]) return XQ;
+         if (rQ(QQ[XQ])) return -1
+       }
+       return QQ.length
+     }
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1920-L1925` → after: `L36772-L36776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36772-L36776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36772-L36776) · [Before (L1920-L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1920-L1925)

```diff
-                           function tO(pp) {
-                             var ip;
-                             null === (ip = xO) || void 0 === ip || ip.setVolume(pp), AO({
-                               volume: pp
-                             })
-                           }
+     function JQ(QQ, WQ) {
+       for (let XQ = WQ; XQ < QQ.length; XQ++)
+         if (rQ(QQ[XQ])) return XQ;
+       return QQ.length
+     }
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1927-L1959` → after: `L36778-L36783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36778-L36783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36778-L36783) · [Before (L1927-L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1927-L1959)

```diff
-                           function HO() {
-                             yO(), YO = 0, AO({
-                               track: null
-                             })
-                           }
-                           const dO = (0, Op.createContext)(null);
-                           let eO = null;
- 
-                           function uO() {
-                             const [pp, ip] = (0, Op.useState)(null);
-                             return (0, Op.useEffect)((() => {
-                               let pp = !1;
-                               return eO ??= Promise.all([cp.e(73), cp.e(76), cp.e(75), cp.e(74), cp.e(188), cp.e(100), cp.e(231)]).then((() => cp(40001))), eO.then((cp => {
-                                 pp || ip(cp)
-                               }), (pp => {
-                                 console.error("Could not load the docs gallery's textures", pp), eO = null
- ... (17 more removed lines; see GitHub link above)
+     function rQ(QQ) {
+       return "\n" === QQ || "\r" === QQ || "\u2028" === QQ || "\u2029" === QQ
+     }
+     class IQ extends Error {}
+     const jQ = 3600,
+       BQ = /^(\d+(\.\d*)?|\.\d+)$/;
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1961-L1997` → after: `L36785-L36789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36785-L36789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36785-L36789) · [Before (L1961-L1997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1961-L1997)

```diff
-                           function RO(pp) {
-                             let {
-                               kind: ip,
-                               entry: cp,
-                               assets: op,
-                               renderedUrl: Sp
-                             } = pp;
-                             const {
-                               name: xp
-                             } = cp, [Lp, Yp] = (0, Op.useState)(!1);
-                             if ("icons" === ip && ai(xp)) return (0, yp.jsx)(jc.d, {
-                               className: "DocsTileIcon",
-                               name: xp
-                             });
-                             let Dp = null;
-                             var Ap;
- ... (21 more removed lines; see GitHub link above)
+     function yQ(QQ, WQ) {
+       const XQ = BQ.test(QQ) ? Number(QQ) : NaN;
+       if (!(XQ >= 0 && XQ <= jQ)) throw new IQ(`${WQ}: keyframe time "${QQ}" must be a number of seconds from 0 to ${jQ}`);
+       return XQ
+     }
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L1999-L2035` → after: `L36791-L36796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36791-L36796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36791-L36796) · [Before (L1999-L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L1999-L2035)

```diff
-                           function qO(pp) {
-                             let {
-                               entry: ip,
-                               isSong: cp
-                             } = pp;
-                             const Op = WO((pp => {
-                                 let {
-                                   track: Op
-                                 } = pp;
-                                 return (null === Op || void 0 === Op ? void 0 : Op.name) === ip.name && Op.isSong === cp ? Op.status : null
-                               })),
-                               op = null !== Op && "paused" !== Op;
-                             return (0, yp.jsxs)("button", {
-                               type: "button",
-                               id: ip.anchor,
-                               className: Ip()("DocsSoundTile", {
- ... (21 more removed lines; see GitHub link above)
+     function VQ(QQ, WQ) {
+       const XQ = QQ.lerp_mode;
+       if (void 0 === XQ || "linear" === XQ) return !1;
+       if ("catmullrom" === XQ) return !0;
+       throw new IQ(`${WQ}: lerp_mode ${JSON.stringify(XQ)} is not supported (linear or catmullrom)`)
+     }
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L2037-L2128` → after: `L36798-L36809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36798-L36809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36798-L36809) · [Before (L2037-L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L2037-L2128)

```diff
-                           function MO(pp) {
-                             let {
-                               kind: ip,
-                               names: cp,
-                               isSongs: op
-                             } = pp;
-                             const Sp = uO(),
-                               [xp, Lp] = tp(),
-                               Yp = !1 === (null === xp || void 0 === xp ? void 0 : xp.failed) ? xp.text : null,
-                               Dp = (0, Op.useContext)(dO),
-                               [Ap, Pp] = (0, Op.useState)(""),
-                               Wp = Ap.trim().toLowerCase(),
-                               Up = Wp ? cp.filter((pp => pp.name.toLowerCase().includes(Wp))) : cp;
-                             return (0, yp.jsxs)("div", {
-                               className: "DocsGallery",
-                               children: [cp.length > jO && (0, yp.jsx)(uc, {
- ... (76 more removed lines; see GitHub link above)
+     function DQ(QQ, WQ, XQ) {
+       if (vQ(QQ)) {
+         const wQ = QQ.pre,
+           qQ = QQ.post,
+           TQ = [];
+         wQ && TQ.push(pQ(wQ, WQ, XQ));
+         const zQ = Array.isArray(wQ) && Array.isArray(qQ) && wQ.length === qQ.length && wQ.every(((QQ, WQ) => QQ === qQ[WQ]));
+         if (qQ && !zQ && TQ.push(pQ(qQ, WQ, XQ)), 0 === TQ.length) throw new IQ(`${XQ}: a keyframe needs "post" and optionally "pre"`);
+         return TQ
+       }
+       return [pQ(QQ, WQ, XQ)]
+     }
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L2130-L2227` → after: `L36811-L36833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36811-L36833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36811-L36833) · [Before (L2130-L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L2130-L2227)

```diff
-                           function CO(pp) {
-                             let {
-                               kind: ip,
-                               content: cp,
-                               blocks: Op
-                             } = pp;
-                             return (0, yp.jsx)(yp.Fragment, {
-                               children: Nc(ip, cp, Op).map(((pp, cp) => "block" === pp.kind ? (0, yp.jsx)(Uc, {
-                                 block: pp.block
-                               }, cp) : (0, yp.jsx)(MO, {
-                                 kind: ip,
-                                 names: pp.names,
-                                 isSongs: pp.isSongs
-                               }, cp)))
-                             })
-                           }
- ... (82 more removed lines; see GitHub link above)
+     function pQ(QQ, WQ, XQ) {
+       if ("number" === typeof QQ || "string" === typeof QQ) return [QQ, QQ, QQ];
+       if (Array.isArray(QQ)) return function(QQ, WQ) {
+         switch (WQ) {
+           case wQ.e.Position:
+             return [GQ(QQ[0]), QQ[1], QQ[2]];
+           case wQ.e.Rotation:
+             return [GQ(QQ[0]), GQ(QQ[1]), QQ[2]];
+           case wQ.e.Scale:
+             return QQ
+         }
+       }(function(QQ, WQ) {
+         for (const XQ of QQ)
+           if ("number" !== typeof XQ && "string" !== typeof XQ) throw new IQ(`${WQ}: vector elements must be numbers or Molang strings`);
+         if (1 === QQ.length) {
+           const WQ = QQ[0];
+ ... (7 more added lines; see GitHub link above)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L2229-L2242` → after: `L36835-L36837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36835-L36837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36835-L36837) · [Before (L2229-L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L2229-L2242)

```diff
-                           function JO(pp) {
-                             let {
-                               src: ip
-                             } = pp;
-                             const [cp, op] = (0, Op.useState)(!1);
-                             return cp ? null : (0, yp.jsx)("img", {
-                               src: ip,
-                               alt: "",
-                               loading: "lazy",
-                               onError: () => {
-                                 console.warn(`Docs catalogue: could not load ${ip}`), op(!0)
-                               }
-                             })
-                           }
+     function GQ(QQ) {
+       return "number" === typeof QQ ? 0 === QQ ? 0 : -QQ : FQ(QQ)
+     }
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L2244-L2390` → after: `L36839-L36847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36839-L36847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36839-L36847) · [Before (L2244-L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L2244-L2390)

```diff
-                           function BO(pp) {
-                             let {
-                               kind: ip
-                             } = pp;
-                             const cp = ec(ip),
-                               op = uO(),
-                               Sp = (0, xp.r)(),
-                               [Lp, Yp] = (0, Op.useState)(""),
-                               [Dp, Ap] = (0, Op.useState)(null),
-                               [Pp, Wp] = (0, Op.useState)(lO),
-                               [Up, vp] = (0, Op.useState)(null),
-                               tp = (0, Op.useRef)(null),
-                               dp = Lp.trim().toLowerCase();
-                             (0, Op.useEffect)((() => {
-                               const pp = (0, mp.r)(Sp.hash),
-                                 Op = cp.entries.find((cp => Jc(ip, cp.name) === pp));
- ... (131 more removed lines; see GitHub link above)
+     function UQ(QQ) {
+       let WQ = !1;
+       for (let qQ = 0; qQ < QQ.length; qQ++) {
+         const TQ = QQ[qQ],
+           zQ = QQ[qQ + 1];
+         void 0 !== zQ && 2 === zQ.dataPoints.length && (XQ = TQ.dataPoints[TQ.dataPoints.length - 1], wQ = zQ.dataPoints[0], String(XQ[0]) === String(wQ[0]) && String(XQ[1]) === String(wQ[1]) && String(XQ[2]) === String(wQ[2])) ? (zQ.dataPoints.splice(0, 1), bQ(TQ), WQ = !0) : vo … [truncated]
+       }
+       var XQ, wQ
+     }
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L2392-L2394` → after: `L36849-L36851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36849-L36851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36849-L36851) · [Before (L2392-L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L2392-L2394)

```diff
-                           function bO(pp) {
-                             return /^\s*```/.test(pp)
-                           }
+     function bQ(QQ) {
+       QQ.step = !0, QQ.catmullRom = !1
+     }
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L2396-L2403` → after: `L36853-L37056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR36853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L36853-L37056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L36853-L37056) · [Before (L2396-L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L2396-L2403)

```diff
-                           function hO(pp, ip) {
-                             const cp = [
-                               []
-                             ];
-                             let Op = !1;
-                             for (const op of pp.split("\n")) !Op && ip(op) && cp.at(-1).length > 0 && cp.push([]), bO(op) && (Op = !Op), cp.at(-1).push(op);
-                             return cp.map((pp => pp.join("\n").trim())).filter(Boolean)
-                           }
+     function vQ(QQ) {
+       return "object" === typeof QQ && null !== QQ && !Array.isArray(QQ)
+     }
+   },
+   37611: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => mW
+     });
+     const wQ = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"67","inputs":{"speed":{"from":"groundSpeed","rise":12,"fall":12},"swing":{"from":"groundSpeed","scale":9.17,"offset":14.9,"min":51.6,"max":80.2,"rise":12,"fall":12},"armsFree":{"from":"aiming","sca … [truncated]
+       qQ = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Armored Car","inputs":{"turn":{"from":"turnRate","scale":1.688,"min":-3.4,"max":3.4,"rise":10,"fall":8},"fwd":{"from":"forwardSpeed","min":-40,"max":40,"rise":6,"fall":6},"fwd_lag":{"from":"forwardSpee … [truncated]
+       TQ = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Armour Collector","inputs":{"speed":{"from":"groundSpeed","rise":12,"fall":12},"swing":{"from":"groundSpeed","scale":7.794,"offset":12.665,"min":43.86,"max":68.17,"rise":12,"fall":12},"armsFree":{"from … [truncated]
+       zQ = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Bear","inputs":{"speed":{"from":"groundSpeed","rise":12,"fall":12},"swing":{"from":"groundSpeed","scale":9.17,"offset":14.9,"min":51.6,"max":80.2,"rise":12,"fall":12}},"variables":{"swing":"swing","fac … [truncated]
+       sQ = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Black Kart","inputs":{"turn":{"from":"turnRate","scale":1.406,"min":-5.3,"max":5.3,"rise":10,"fall":8},"fwd":{"from":"forwardSpeed","min":-40,"max":40,"rise":6,"fall":6}},"variables":{"turn":"turn","fw … [truncated]
+       FQ = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Blue Kart","inputs":{"turn":{"from":"turnRate","scale":1.406,"min":-5.3,"max":5.3,"rise":10,"fall":8},"fwd":{"from":"forwardSpeed","min":-40,"max":40,"rise":6,"fall":6}},"variables":{"turn":"turn","fwd … [truncated]
+       PQ = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Bobino Musculino","inputs":{"speed":{"from":"groundSpeed","rise":12,"fall":12},"swing":{"from":"groundSpeed","scale":9.17,"offset":14.9,"min":51.6,"max":80.2,"rise":12,"fall":12},"armsFree":{"from":"ai … [truncated]
+       gQ = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Brown Kart","inputs":{"turn":{"from":"turnRate","scale":1.406,"min":-5.3,"max":5.3,"rise":10,"fall":8},"fwd":{"from":"forwardSpeed","min":-40,"max":40,"rise":6,"fall":6}},"variables":{"turn":"turn","fw … [truncated]
+ ... (188 more added lines; see GitHub link above)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L2405-L2411` → after: `L37058-L37419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37058-L37419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37058-L37419) · [Before (L2405-L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L2405-L2411)

```diff
-                           function aO(pp, ip) {
-                             const cp = `${"#".repeat(ip)} `,
-                               Op = [];
-                             let op = !1;
-                             for (const Ip of pp.split("\n")) bO(Ip) ? op = !op : !op && Ip.startsWith(cp) && Op.push(Ip.slice(cp.length).trim());
-                             return Op
-                           }
+     function mW() {
+       return KW ??= (0, ZW.x)(OW, "builtIn"), KW
+     }
+   },
+   37636: (QQ, WQ, XQ) => {
+     function wQ(QQ, WQ, XQ) {
+       if ("+" !== QQ && "-" !== QQ && "*" !== QQ && "/" !== QQ) return null;
+       const wQ = WQ.evaluate,
+         qQ = XQ.evaluate,
+         TQ = XQ.constant;
+       if (null !== TQ) {
+         if ("/" === QQ) return 0 === TQ ? () => 0 : QQ => wQ(QQ) / TQ;
+         if (void 0 !== WQ.query) {
+           const XQ = WQ.query;
+           switch (QQ) {
+             case "+":
+ ... (346 more added lines; see GitHub link above)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L2413-L2567` → after: `L37421-L37593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37421-L37593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37421-L37593) · [Before (L2413-L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L2413-L2567)

```diff
-                           function nO(pp) {
-                             return pp.markdown.replace(/^\s*# .*\n/, "").trim()
-                           }
-                           class FO {
-                             constructor(pp, ip) {
-                               this.origin = ip, this.pages = void 0, this.partPaths = new Map;
-                               const cp = pp.map((pp => {
-                                 const ip = ip => this.resolveLinks(pp, ip).length,
-                                   cp = function(pp, ip) {
-                                     const cp = pp.map((pp => ip(pp.markdown) + 2)),
-                                       Op = cp.reduce(((pp, ip) => pp + ip), 0),
-                                       op = Op / Math.ceil(Op / fO),
-                                       Ip = [];
-                                     let Sp = 0;
-                                     return pp.forEach(((pp, ip) => {
-                                       const Op = cp[ip];
- ... (139 more removed lines; see GitHub link above)
+     function SQ(QQ) {
+       return {
+         constant: QQ,
+         readsClock: !1,
+         readsAnimTime: !1,
+         cost: 0,
+         evaluate: () => QQ
+       }
+     }
+     class tQ {
+       constructor(QQ, WQ) {
+         this.tokens = QQ, this.variableSlots = WQ, this.index = 0, this.depth = 0, this.nodeCount = 0, this.readsClock = !1, this.readsAnimTime = !1
+       }
+       get nodes() {
+         return this.nodeCount
+       }
+ ... (157 more added lines; see GitHub link above)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L2569-L2572` → after: `L37595-L37625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37595-L37625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37595-L37625) · [Before (L2569-L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L2569-L2572)

```diff
-                           function gO(pp) {
-                             return `${Math.max(1,Math.round(pp/4e3))}K`
-                           }
-                           let GO = null;
+     function nQ(QQ, WQ) {
+       try {
+         if (QQ.length > LQ) throw new AQ(`expression is longer than ${LQ} characters`, LQ);
+         if ("" === QQ.trim()) return {
+           ok: !0,
+           value: SQ(0)
+         };
+         const XQ = new tQ(EQ(QQ), WQ.variableSlots),
+           wQ = XQ.parseProgram();
+         return {
+           ok: !0,
+           value: null === wQ.constant ? new eQ(wQ.evaluate, XQ.readsClock, XQ.readsAnimTime, XQ.nodes) : SQ(oQ(wQ.constant))
+         }
+       } catch (XQ) {
+         if (XQ instanceof AQ) return {
+           ok: !1,
+ ... (15 more added lines; see GitHub link above)
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L2574-L2578` → after: `L37627-L37646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37627-L37646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37627-L37646) · [Before (L2574-L2578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L2574-L2578)

```diff
-                           function rO() {
-                             return GO ??= new FO(Np, TO.b), GO
-                           }
-                           var ZO = cp(4941);
-                           const zO = [ZO.f, ZO.o];
+     function sQ(QQ) {
+       return {
+         name: "collideEntitiesProjectile",
+         order: 70,
+         state: {
+           callback: null,
+           _lastPos: null
+         },
+         PD: function(QQ, WQ) {},
+         JA: null,
+         system: function(WQ, XQ) {
+           ! function(QQ) {
+             const WQ = QQ.rD.WC("collideEntitiesProjectile");
+             if (0 === WQ.length) return;
+             const XQ = rQ(QQ);
+             for (const wQ of WQ) wQ && JQ(QQ, wQ, XQ)
+ ... (4 more added lines; see GitHub link above)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L2580-L2582` → after: `L37648-L37657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37648-L37657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37648-L37657) · [Before (L2580-L2582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L2580-L2582)

```diff
-                           function sO(pp) {
-                             return rO().getPage(pp.id).parts.length > 0 ? `Read ${NO.n}, then the parts of the Bloxd Code API's ${pp.title} page it lists, so I can ask questions about it.` : `Read ${TO.b}${(0,NO.r)(pp.slug)} so I can ask questions about it. ${ZO.k}`
-                           }
+     function FQ(QQ, WQ) {
+       var XQ;
+       const wQ = rQ(QQ),
+         TQ = QQ.rD.vx(WQ),
+         zQ = QQ.rD.mN(WQ),
+         sQ = [TQ.tJ.base[0] + zQ.width / 2, TQ.tJ.base[1] + zQ.height / 2, TQ.tJ.base[2] + zQ.width / 2];
+       qQ().add(sQ, sQ, null !== (XQ = zQ.jr) && void 0 !== XQ ? XQ : QQ.jr), JQ(QQ, QQ.rD.getState(WQ, "collideEntitiesProjectile"), wQ, sQ)
+     }
+     const PQ = qQ().create(),
+       gQ = [];
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L2584-L2614` → after: `L37659-L37674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37659-L37674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37659-L37674) · [Before (L2584-L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L2584-L2614)

```diff
-                           function KO(pp) {
-                             let {
-                               page: ip
-                             } = pp;
-                             const [cp, Op] = tp();
-                             return (0, yp.jsxs)("div", {
-                               className: "DocsPageAgentActions",
-                               children: [(0, yp.jsxs)("button", {
-                                 type: "button",
-                                 className: "DocsPageAgentAction",
-                                 onClick: () => {
-                                   Op(rO().getPage(ip.id).markdown)
-                                 },
-                                 children: [(0, yp.jsx)(wp, {
-                                   name: !1 === (null === cp || void 0 === cp ? void 0 : cp.failed) ? "check" : "copy"
-                                 }), (0, yp.jsx)("span", {
- ... (15 more removed lines; see GitHub link above)
+     function JQ(QQ, WQ, XQ) {
+       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ.rD.xV(WQ.zC);
+       if (null === WQ._lastPos) return void(WQ._lastPos = qQ().clone(wQ));
+       qQ().sub(PQ, wQ, WQ._lastPos);
+       const TQ = qQ().length(PQ);
+       0 === TQ && (PQ[0] = 1e-4);
+       for (let qQ = 0; qQ < gQ.length; qQ++) {
+         const wQ = XQ[qQ];
+         if (!QQ.rD.OQQ(wQ.zC, "collideEntities")) continue;
+         if (!wQ.FwQ) continue;
+         const JQ = zQ().distance(WQ._lastPos, PQ, gQ[qQ]);
+         if (sQ = WQ._lastPos, FQ = gQ[qQ], (sQ[0] >= FQ[0][0] && sQ[0] <= FQ[1][0] && sQ[1] >= FQ[0][1] && sQ[1] <= FQ[1][1] && sQ[2] >= FQ[0][2] && sQ[2] <= FQ[1][2] || Math.abs(JQ) <= TQ) && (WQ.callback(wQ.zC), !QQ.rD.OQQ(WQ.zC, "collideEntitiesProjectile"))) break
+       }
+       var sQ, FQ;
+       qQ().copy(WQ._lastPos, wQ)
+     }
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L2616-L2618` → after: `L37676-L37732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37676-L37732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37676-L37732) · [Before (L2616-L2618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L2616-L2618)

```diff
-                           function VO(pp) {
-                             return `#${[0,1,2].map((ip=>Math.round(Math.min(255,Math.max(0,pp[ip]))).toString(16).padStart(2,"0"))).join("")}`
-                           }
+     function rQ(QQ) {
+       const WQ = QQ.rD.WC("collideEntities");
+       for (let TQ = 0; TQ < WQ.length; TQ++) {
+         var XQ, wQ;
+         const zQ = QQ.rD.mN(WQ[TQ].zC),
+           sQ = WQ[TQ].zwQ / 2,
+           FQ = WQ[TQ].swQ / 2;
+         gQ[TQ] = [
+           [zQ.eXQ[0] - sQ, zQ.eXQ[1] - FQ, zQ.eXQ[2] - sQ],
+           [zQ.eXQ[3] + sQ, zQ.eXQ[4] + FQ, zQ.eXQ[5] + sQ]
+         ], qQ().add(gQ[TQ][0], gQ[TQ][0], null !== (XQ = zQ.jr) && void 0 !== XQ ? XQ : QQ.jr), qQ().add(gQ[TQ][1], gQ[TQ][1], null !== (wQ = zQ.jr) && void 0 !== wQ ? wQ : QQ.jr)
+       }
+       return gQ.length = WQ.length, WQ.slice()
+     }
+   },
+   37950: (QQ, WQ, XQ) => {
+ ... (41 more added lines; see GitHub link above)
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L2620-L2622` → after: `L37734-L37737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37734-L37737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37734-L37737) · [Before (L2620-L2622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L2620-L2622)

```diff
-                           function po(pp) {
-                             return [parseInt(pp.slice(1, 3), 16), parseInt(pp.slice(3, 5), 16), parseInt(pp.slice(5, 7), 16)]
-                           }
+     function PQ(QQ) {
+       const WQ = QQ.rD.rWQ(QQ.RC);
+       return sQ && FQ && (WQ.isInCobweb !== sQ || WQ.isInFluid !== FQ)
+     }
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L2624-L2671` → after: `L37739-L37802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37739-L37802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37739-L37802) · [Before (L2624-L2671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L2624-L2671)

```diff
-                           function io(pp) {
-                             let {
-                               label: ip,
-                               min: cp,
-                               max: Op,
-                               step: op,
-                               low: Ip,
-                               high: Sp,
-                               onChange: xp
-                             } = pp;
-                             return (0, yp.jsxs)("div", {
-                               className: "DocsControl",
-                               children: [(0, yp.jsxs)("div", {
-                                 className: "DocsControlLabel",
-                                 children: [(0, yp.jsx)("span", {
-                                   children: ip
- ... (32 more removed lines; see GitHub link above)
+     function gQ(QQ) {
+       return {
+         name: "movement",
+         order: 30,
+         stateConstructor: zQ,
+         PD: (WQ, XQ) => {
+           XQ.KJ = QQ, sQ = XQ.isInCobweb, FQ = XQ.isInFluid
+         },
+         JA: null,
+         system: function(QQ, WQ) {}
+       }
+     }
+   },
+   37518: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => wQ
+ ... (48 more added lines; see GitHub link above)
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L2673-L2705` → after: `L37804-L37812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37804-L37812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37804-L37812) · [Before (L2673-L2705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L2673-L2705)

```diff
-                           function co(pp) {
-                             let {
-                               label: ip,
-                               min: cp,
-                               max: Op,
-                               step: op,
-                               value: Ip,
-                               onChange: Sp,
-                               format: xp = String
-                             } = pp;
-                             return (0, yp.jsxs)("div", {
-                               className: "DocsControl",
-                               children: [(0, yp.jsxs)("div", {
-                                 className: "DocsControlLabel",
-                                 children: [(0, yp.jsx)("span", {
-                                   children: ip
- ... (17 more removed lines; see GitHub link above)
+     function zQ(QQ, WQ) {
+       return null !== WQ && void 0 !== WQ ? WQ : QQ ? 0 : wQ.h.ezBridgeGrowMs
+     }
+     const sQ = [
+       [1, 0, 0],
+       [-1, 0, 0],
+       [0, 0, 1],
+       [0, 0, -1]
+     ];
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L2707-L2806` → after: `L37814-L37827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37814-L37827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37814-L37827) · [Before (L2707-L2806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L2707-L2806)

```diff
-                           function Oo(pp) {
-                             let {
-                               opts: ip,
-                               onChange: cp
-                             } = pp;
-                             const Op = ip.colorGradients;
-                             if (!Gc(Op)) return (0, yp.jsxs)("div", {
-                               className: "DocsControl",
-                               children: [(0, yp.jsx)("div", {
-                                 className: "DocsControlLabel",
-                                 children: (0, yp.jsx)("span", {
-                                   children: "Colours, one per particle"
-                                 })
-                               }), (0, yp.jsx)("div", {
-                                 className: "DocsParticleSwatches",
-                                 children: Op.map(((pp, ip) => (0, yp.jsx)("input", {
- ... (84 more removed lines; see GitHub link above)
+     function FQ(QQ, WQ, XQ, wQ, qQ) {
+       for (const [TQ, zQ, FQ] of sQ) {
+         if (qQ) {
+           const QQ = WQ + .5 + .5 * TQ,
+             XQ = wQ + .5 + .5 * FQ;
+           if (TQ * (qQ[0] - QQ) + FQ * (qQ[2] - XQ) <= 0) continue
+         }
+         if (QQ(WQ + TQ, XQ + zQ, wQ + FQ)) return !0
+       }
+       return !1
+     }
+     const PQ = .15,
+       gQ = .95,
+       JQ = .35;
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L2808-L3292` → after: `L37829-L37832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37829-L37832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37829-L37832) · [Before (L2808-L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L2808-L3292)

```diff
-                           function Lo(pp) {
-                             let {
-                               opts: ip,
-                               textureUrl: cp,
-                               burst: op,
-                               paused: Ip
-                             } = pp;
-                             const Sp = (0, Op.useRef)(null),
-                               xp = (0, Op.useRef)(ip);
-                             xp.current = ip;
-                             const Lp = (0, Op.useRef)(Ip);
-                             Lp.current = Ip;
-                             const Yp = (0, Op.useRef)(null),
-                               Dp = (0, Op.useRef)(null),
-                               Ap = (0, Op.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(pp) {
-                                 let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
- ... (469 more removed lines; see GitHub link above)
+     function rQ(QQ) {
+       const WQ = qQ.h[QQ];
+       return !!WQ && (!(QQ in TQ.g) && (WQ.model ? "Slab" === WQ.model : !WQ.twoDBlockItem))
+     }
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L3294-L3330` → after: `L37834-L37839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37834-L37839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37834-L37839) · [Before (L3294-L3330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L3294-L3330)

```diff
-                           function Uo(pp) {
-                             var ip, cp, Op;
-                             let {
-                               part: op,
-                               assets: Sp
-                             } = pp;
-                             const xp = yo(Sp, op.icon),
-                               Lp = null !== (ip = null === (cp = op.style) || void 0 === cp ? void 0 : cp.fontSize) && void 0 !== ip ? ip : "1.8em",
-                               Yp = (0, fi.fc)(op.style);
-                             return (0, yp.jsxs)("span", {
-                               className: Ip()("DocsBloxdTextIcon", {
-                                 Missing: !xp
-                               }),
-                               style: {
-                                 width: Lp,
-                                 height: Lp,
- ... (21 more removed lines; see GitHub link above)
+     function IQ(QQ, WQ, XQ) {
+       const wQ = WQ - QQ;
+       if (wQ <= 0) return gQ;
+       const qQ = Math.min(1, Math.max(0, (XQ - QQ) / wQ));
+       return PQ + (gQ - PQ) * qQ
+     }
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L3332-L3363` → after: `L37841-L37844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37841-L37844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37841-L37844) · [Before (L3332-L3363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L3332-L3363)

```diff
-                           function wo(pp) {
-                             let {
-                               parts: ip,
-                               className: cp
-                             } = pp;
-                             const Op = uO(),
-                               op = [];
-                             let Sp = [];
-                             const xp = pp => {
-                               Sp.length > 0 && (op.push((0, yp.jsx)(Wo.e, {
-                                 text: Sp
-                               }, `run-${pp}`)), Sp = [])
-                             };
-                             return ip.forEach(((pp, ip) => {
-                               "icon" !== gi(pp) || ai(pp.icon) ? Sp.push(pp) : (xp(ip), op.push((0, yp.jsx)(Uo, {
-                                 part: pp,
- ... (16 more removed lines; see GitHub link above)
+     function jQ(QQ, WQ, XQ) {
+       const wQ = IQ(QQ.startedAtMs, QQ.endsAtMs, XQ);
+       return IQ(WQ.startedAtMs, WQ.endsAtMs, XQ) >= wQ ? WQ : QQ
+     }
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L3365-L3391` → after: `L37846-L37873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37846-L37873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37846-L37873) · [Before (L3365-L3391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L3365-L3391)

```diff
-                           function eo(pp) {
-                             let {
-                               value: ip,
-                               label: cp,
-                               onChange: Op
-                             } = pp;
-                             return (0, yp.jsxs)("span", {
-                               className: "DocsColourInput",
-                               children: [(0, yp.jsx)("input", {
-                                 type: "color",
-                                 value: Ho(ip),
-                                 "aria-label": `${cp} picker`,
-                                 onChange: pp => {
-                                   Op(pp.target.value)
-                                 }
-                               }), (0, yp.jsx)("input", {
- ... (11 more removed lines; see GitHub link above)
+     function BQ(QQ, WQ, XQ) {
+       let wQ = 1 / 0;
+       for (let qQ = 0; qQ < 3; qQ++) {
+         if (0 === WQ[qQ]) continue;
+         const TQ = WQ[qQ] > 0 ? XQ[qQ] + 1 : XQ[qQ];
+         wQ = Math.min(wQ, (TQ - QQ[qQ]) / WQ[qQ])
+       }
+       return wQ
+     }
+     const yQ = Math.sqrt(3)
+   },
+   38018: (QQ, WQ, XQ) => {
+     function wQ(QQ) {
+       return "string" !== typeof QQ || 2 !== QQ.length && ":" !== QQ[2] ? null : QQ[0] + QQ[1]
+     }
+     XQ.d(WQ, {
+ ... (12 more added lines; see GitHub link above)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L3393-L3474` → after: `L37875-L37883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37875-L37883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37875-L37883) · [Before (L3393-L3474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L3393-L3474)

```diff
-                           function uo(pp) {
-                             let {
-                               value: ip,
-                               fontAwesomeIcons: cp,
-                               onChange: op
-                             } = pp;
-                             const Sp = uO(),
-                               [xp, Lp] = (0, Op.useState)(ai(ip) ? "fontAwesome" : "bloxd"),
-                               [Yp, Dp] = (0, Op.useState)(""),
-                               Ap = Yp.trim().toLowerCase(),
-                               Pp = "bloxd" === xp ? Po.d : cp,
-                               Wp = Ap ? Pp.filter((pp => pp.toLowerCase().includes(Ap))) : Pp;
-                             return (0, yp.jsxs)("div", {
-                               className: "DocsIconPicker",
-                               children: [(0, yp.jsx)("input", {
-                                 type: "text",
- ... (66 more removed lines; see GitHub link above)
+     function TQ(QQ) {
+       if (function(QQ) {
+           for (let WQ = 0; WQ < qQ.length; WQ++)
+             if (QQ === qQ[WQ]) return !0;
+           return !1
+         }(QQ)) return !1;
+       const WQ = wQ(QQ);
+       return "op" === WQ || "ep" === WQ || "wi" === WQ || "pp" === WQ || "fp:call" === QQ || "fp:t" === QQ
+     }
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L3476-L3605` → after: `L37885-L37887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37885-L37887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37885-L37887) · [Before (L3476-L3605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L3476-L3605)

```diff
-                           function jo(pp) {
-                             let {
-                               property: ip,
-                               value: cp,
-                               fontAwesomeIcons: Op,
-                               onChange: op
-                             } = pp;
-                             const {
-                               field: Ip,
-                               label: Sp
-                             } = ip, xp = pp => "" !== pp || ip.isRequired ? pp : void 0;
-                             switch (Ip.kind) {
-                               case "text":
-                                 return Ip.multiline ? (0, yp.jsx)("textarea", {
-                                   value: String(null !== cp && void 0 !== cp ? cp : ""),
-                                   rows: 2,
- ... (114 more removed lines; see GitHub link above)
+     function zQ(QQ) {
+       return "fp" === wQ(QQ) && !TQ(QQ)
+     }
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L3607-L3624` → after: `L37889-L37892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37889-L37892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37889-L37892) · [Before (L3607-L3624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L3607-L3624)

```diff
-                           function ko(pp) {
-                             let ip;
-                             try {
-                               ip = JSON.parse(pp)
-                             } catch (cp) {
-                               return {
-                                 part: null,
-                                 error: `Not valid JSON yet: ${cp.message}`
-                               }
-                             }
-                             return Ic(ip) ? {
-                               part: ip,
-                               error: null
-                             } : {
-                               part: null,
-                               error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
- ... (2 more removed lines; see GitHub link above)
+     function sQ(QQ) {
+       if ("string" !== typeof QQ) return !1;
+       return "o" === QQ[0] && "p" === QQ[1] && (2 === QQ.length || ":" === QQ[2]) || "fp:call" === QQ || "2" === QQ || "t" === QQ || "a" === QQ
+     }
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L3626-L4058` → after: `L37894-L37897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37894-L37897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37894-L37897) · [Before (L3626-L4058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L3626-L4058)

```diff
-                           function mo(pp) {
-                             let {
-                               parts: ip,
-                               index: cp,
-                               fontAwesomeIcons: op,
-                               onChange: Ip,
-                               uE: Sp,
-                               onClose: xp
-                             } = pp;
-                             const Lp = (0, Op.useContext)(wi),
-                               Dp = (0, Op.useRef)(null),
-                               Ap = ip[cp],
-                               Pp = gi(Ap),
-                               [Wp, Up] = (0, Op.useState)((() => JSON.stringify(Ap, null, 2))),
-                               vp = (0, Op.useMemo)((() => "other" === Pp ? ko(Wp).error : null), [Pp, Wp]);
-                             (0, Op.useEffect)((() => {
- ... (417 more removed lines; see GitHub link above)
+     function FQ(QQ, WQ) {
+       return `~${function(QQ){return QQ.length<2?QQ:":"===QQ[1]?QQ[0]:QQ[0]+QQ[1]}(WQ)}~${QQ}`
+     }
+     const PQ = 200;
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4060-L4062` → after: `L37899-L37908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37899-L37908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37899-L37908) · [Before (L4060-L4062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4060-L4062)

```diff
-                           function ho(pp, ip) {
-                             return Math.round(pp * 2 ** (ip / 12) * 10) / 10
-                           }
+     function gQ(QQ) {
+       let WQ = QQ.length - 1;
+       for (let XQ = 0; XQ < 2; XQ++) {
+         const XQ = WQ;
+         for (; WQ >= 0 && QQ[WQ] >= "0" && QQ[WQ] <= "9";) WQ--;
+         if (WQ < 0 || WQ === XQ || ":" !== QQ[WQ]) return -1;
+         WQ--
+       }
+       return WQ + 1
+     }
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4064-L4066` → after: `L37910-L37912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37910-L37912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37910-L37912) · [Before (L4064-L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4064-L4066)

```diff
-                           function ao(pp) {
-                             return `${pp} ms`
-                           }
+     function JQ(QQ) {
+       return "unknown" === QQ || gQ(QQ) >= 0
+     }
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4068-L4272` → after: `L37914-L37916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37914-L37916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37914-L37916) · [Before (L4068-L4272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4068-L4272)

```diff
-                           function no(pp) {
-                             return `${pp} st`
-                           }
-                           const Fo = [{
-                             key: "variationSemitones",
-                             label: "Word variation",
-                             max: 6
-                           }, {
-                             key: "declineSemitones",
-                             label: "Fall over a sentence",
-                             max: 12
-                           }, {
-                             key: "questionRiseSemitones",
-                             label: "Question rise",
-                             max: 12
-                           }, {
- ... (189 more removed lines; see GitHub link above)
+     function rQ(QQ, WQ) {
+       return QQ[WQ] >= "\ud800" && QQ[WQ] <= "\udbff" && WQ + 1 < QQ.length && QQ[WQ + 1] >= "\udc00" && QQ[WQ + 1] <= "\udfff" ? 2 : 1
+     }
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4274-L4278` → after: `L37918-L37920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37918-L37920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37918-L37920) · [Before (L4274-L4278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4274-L4278)

```diff
-                           function Zo(pp) {
-                             var ip;
-                             const cp = JSON.stringify((0, Co.m)(pp));
-                             return null !== (ip = Go.find((pp => JSON.stringify((0, Co.m)(Co.i[pp])) === cp))) && void 0 !== ip ? ip : null
-                           }
+     function IQ(QQ, WQ, XQ) {
+       return 2 === XQ ? 4 : QQ[WQ] <= "\x7f" ? 1 : QQ[WQ] <= "\u07ff" ? 2 : 3
+     }
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4280-L4284` → after: `L37922-L37931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37922-L37931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37922-L37931) · [Before (L4280-L4284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4280-L4284)

```diff
-                           function zo(pp) {
-                             let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
-                             if ("object" !== typeof pp || null === pp) return JSON.stringify(pp);
-                             return `{\n${Object.entries(pp).map((pp=>{let[cp,Op]=pp;return`${ip}    ${cp}: ${zo(Op,`${ip}    `)},`})).join("\n")}\n${ip}}`
-                           }
+     function jQ(QQ, WQ, XQ) {
+       let wQ = 0;
+       for (; wQ < WQ;) {
+         const WQ = rQ(QQ, wQ),
+           qQ = IQ(QQ, wQ, WQ);
+         if (qQ > XQ) break;
+         XQ -= qQ, wQ += WQ
+       }
+       return wQ
+     }
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4286-L4293` → after: `L37933-L37951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37933-L37951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37933-L37951) · [Before (L4286-L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4286-L4293)

```diff
-                           function so(pp, ip, cp) {
-                             const Op = Zo(pp),
-                               op = [`    line: ${JSON.stringify(ip)},`];
-                             return cp && op.push(`    speakerName: ${JSON.stringify(cp)},`), op.push("    voice,"), `const voice = ${Op?JSON.stringify(Op):zo((0,Co.m)(pp))}\n\napi.setClientOption(playerId, "dialogue", {\n${op.join("\n")}\n})`
-                           }
-                           const Ko = 400,
-                             Vo = 90;
-                           let pI = null;
+     function BQ(QQ) {
+       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
+       if ("string" !== typeof QQ || QQ.length > PQ || !JQ(QQ)) return "t";
+       let XQ = 2;
+       for (let sQ = 0; sQ < QQ.length;) {
+         const WQ = rQ(QQ, sQ);
+         XQ += IQ(QQ, sQ, WQ), sQ += WQ
+       }
+       if (XQ <= WQ) return `t ${QQ}`;
+       const wQ = gQ(QQ),
+         qQ = WQ - 2 - (QQ.length - wQ);
+       if (qQ < 0) return "t";
+       const TQ = jQ(QQ, wQ, qQ);
+       let zQ = "t ";
+       for (let sQ = 0; sQ < TQ; sQ++) zQ += QQ[sQ];
+       for (let sQ = wQ; sQ < QQ.length; sQ++) zQ += QQ[sQ];
+ ... (3 more added lines; see GitHub link above)
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4295-L4297` → after: `L37953-L37961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37953-L37961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37953-L37961) · [Before (L4295-L4297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4295-L4297)

```diff
-                           function iI(pp, ip, cp) {
-                             return pI ??= new AudioContext, pI.resume(), (0, Qo.e)(pI, pI.destination, pp, ip, cp, (() => {}))
-                           }
+     function VQ(QQ) {
+       let WQ = "so:";
+       const XQ = jQ(QQ, QQ.length, yQ - WQ.length);
+       for (let wQ = 0; wQ < XQ; wQ++) WQ += QQ[wQ];
+       return WQ
+     }
+     const DQ = "BABYLON ",
+       pQ = "DECODE ",
+       GQ = "BABYLON@ ";
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4299-L4487` → after: `L37963-L37965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37963-L37965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37963-L37965) · [Before (L4299-L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4299-L4487)

```diff
-                           function cI() {
-                             const [pp, ip] = (0, Op.useState)(Co.i.regular), [cp, op] = (0, Op.useState)(ro[0]), [Sp, xp] = (0, Op.useState)("Innkeeper"), [Lp, Yp] = (0, Op.useState)(0), Dp = WO((pp => pp.volume)), Ap = (0, Op.useRef)(null), Pp = (0, Op.useRef)(0), Wp = (0, Op.us … [truncated]
-                               var pp;
-                               null === (pp = Ap.current) || void 0 === pp || pp.call(Ap), Ap.current = null
-                             };
-                             (0, Op.useEffect)((() => () => {
-                               var pp;
-                               null === (pp = Ap.current) || void 0 === pp || pp.call(Ap), window.clearTimeout(Pp.current)
-                             }), []);
-                             const vp = (0, Op.useMemo)((() => ({
-                                 line: cp,
-                                 speakerName: Sp || void 0,
-                                 voice: pp
-                               })), [cp, Sp, pp]),
-                               tp = (0, Op.useRef)(vp);
-                             tp.current = vp;
- ... (173 more removed lines; see GitHub link above)
+     function UQ(QQ) {
+       return VQ(DQ + QQ)
+     }
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4489-L4498` → after: `L37967-L37969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37967-L37969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37967-L37969) · [Before (L4489-L4498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4489-L4498)

```diff
-                           function PI(pp, ip) {
-                             const cp = new Set,
-                               Op = function(pp) {
-                                 return pp.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
-                               }(pp);
-                             for (const [, op] of Op.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) cp.add(op);
-                             for (const [op, Ip] of SI)
-                               for (const [, pp] of(0, OI.f)(Op, op, Ip)) ip.has(pp) && cp.add(pp);
-                             return cp
-                           }
+     function bQ(QQ, WQ) {
+       return VQ(GQ + QQ + " " + WQ)
+     }
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4500-L4504` → after: `L37971-L37983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37971-L37983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37971-L37983) · [Before (L4500-L4504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4500-L4504)

```diff
-                           function WI(pp, ip, cp, Op) {
-                             const op = pp.get(ip);
-                             op ? !Op && op.some((pp => pp.pageId === cp.pageId)) || op.push(cp) : pp.set(ip, [cp])
-                           }
-                           const yI = /^[A-Za-z_$][\w$]*$/;
+     function vQ(QQ) {
+       return VQ(pQ + QQ)
+     }
+   },
+   38476: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => FQ,
+       e: () => sQ,
+       h: () => PQ
+     });
+     var wQ = XQ(6873),
+       qQ = XQ(402),
+       TQ = XQ(663);
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4506-L4508` → after: `L37985-L37988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37985-L37988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37985-L37988) · [Before (L4506-L4508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4506-L4508)

```diff
-                           function UI(pp) {
-                             return yI.test(pp.name) ? pp.name : "options"
-                           }
+     function zQ(QQ) {
+       var WQ;
+       return !0 === (null === QQ || void 0 === QQ || null === (WQ = QQ.name) || void 0 === WQ ? void 0 : WQ.includes("Firecracker"))
+     }
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4510-L4513` → after: `L37990-L37994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37990-L37994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37990-L37994) · [Before (L4510-L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4510-L4513)

```diff
-                           function wI(pp, ip) {
-                             const cp = pp.params.map(UI).join(", ");
-                             return ip ? `${pp.name} = (${cp}) => {\n\t\n}` : `api.${pp.name}(${cp})`
-                           }
+     function sQ(QQ) {
+       for (let WQ = 0; WQ < TQ.k; WQ++)
+         if (zQ(QQ.getItemAtIdx(WQ))) return WQ;
+       return null
+     }
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4515-L4569` → after: `L37996-L38004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR37996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L37996-L38004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L37996-L38004) · [Before (L4515-L4569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4515-L4569)

```diff
-                           function vI(pp) {
-                             let {
-                               method: ip,
-                               isCallback: cp
-                             } = pp;
-                             return (0, yp.jsxs)("div", {
-                               className: "DocsSignature",
-                               children: [(0, yp.jsxs)("span", {
-                                 className: "DocsSignatureCode",
-                                 children: [cp ? (0, yp.jsxs)(yp.Fragment, {
-                                   children: [(0, yp.jsx)("span", {
-                                     className: "DocsSignatureName",
-                                     children: ip.name
-                                   }), (0, yp.jsx)("span", {
-                                     className: "DocsTypePunctuation",
-                                     children: " = ("
- ... (39 more removed lines; see GitHub link above)
+     function FQ(QQ) {
+       let WQ = 0;
+       for (let wQ = 0; wQ < TQ.k; wQ++) {
+         const qQ = QQ.getItemAtIdx(wQ);
+         var XQ;
+         if (zQ(qQ)) WQ += null !== (XQ = qQ.amount) && void 0 !== XQ ? XQ : 1
+       }
+       return WQ
+     }
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4571-L4587` → after: `L38006-L38026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38006-L38026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38006-L38026) · [Before (L4571-L4587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4571-L4587)

```diff
-                           function tI(pp) {
-                             let {
-                               title: ip,
-                               references: cp
-                             } = pp;
-                             const op = (0, Op.useContext)(Ui);
-                             return (0, yp.jsxs)("div", {
-                               className: "DocsCardReferences",
-                               children: [(0, yp.jsx)("span", {
-                                 className: "DocsCardReferencesTitle",
-                                 children: ip
-                               }), cp.map((pp => (0, yp.jsx)(Sp.c, {
-                                 to: gp(op, fp(pp.pageId), pp.anchor),
-                                 children: pp.label
-                               }, `${pp.pageId}#${pp.anchor}`)))]
-                             })
- ... (1 more removed lines; see GitHub link above)
+     function PQ(QQ, WQ, XQ, TQ) {
+       if (XQ !== wQ.q.GLIDING && TQ !== wQ.q.GLIDING) return;
+       const zQ = QQ.rD.rWQ(WQ);
+       if (zQ.gliderFuelCooldownEnd = 0, XQ === wQ.q.GLIDING) {
+         var FQ;
+         const XQ = null === (FQ = QQ.rD.EWQ(WQ)) || void 0 === FQ ? void 0 : FQ.inventory;
+         XQ && null !== sQ(XQ) && QQ.bloxd.startGliderFuelCooldown(WQ, zQ, qQ.e.getFirecrackerCooldownMultiplier(XQ.getItemAtSelectedSlot()))
+       }
+     }
+   },
+   38284: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => TQ,
+       g: () => FQ,
+       k: () => zQ,
+       o: () => PQ,
+ ... (5 more added lines; see GitHub link above)
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4589-L4653` → after: `L38028-L38031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38028-L38031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38028-L38031) · [Before (L4589-L4653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4589-L4653)

```diff
-                           function HI(pp) {
-                             var ip, cp;
-                             let {
-                               pageId: Op,
-                               anchor: op
-                             } = pp;
-                             const Ip = xI({
-                                 pageId: Op,
-                                 anchor: op
-                               }),
-                               Sp = null !== (ip = function() {
-                                 if (!DI) {
-                                   DI = new Map;
-                                   const Op = new Set(Np.filter((pp => "callbacks" === pp.layout)).flatMap((pp => hp(pp).sections.map((pp => pp.heading.text)))));
-                                   for (const op of Np)
-                                     if ("article" === op.layout || "snippets" === op.layout)
- ... (49 more removed lines; see GitHub link above)
+     function qQ(QQ) {
+       const WQ = new wQ.e(`blockBreakDrop|${QQ}`);
+       return () => WQ.next()
+     }
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4655-L4744` → after: `L38033-L38035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38033-L38035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38033-L38035) · [Before (L4655-L4744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4655-L4744)

```diff
-                           function dI(pp) {
-                             let {
-                               method: ip,
-                               pageId: cp,
-                               anchor: Op,
-                               isCallback: op
-                             } = pp;
-                             const Ip = op ? void 0 : Yi().get(ip.name),
-                               Sp = ip.description.length > 0 || null === Ip || void 0 === Ip || !Ip.description ? ip.description : (0, mp.x)(Ip.description);
-                             return (0, yp.jsxs)("article", {
-                               className: "DocsCard DocsMethodCard",
-                               children: [(0, yp.jsxs)("header", {
-                                 className: "DocsCardHeader",
-                                 children: [(0, yp.jsx)(Pc, {
-                                   level: 2,
-                                   text: ip.name,
- ... (74 more removed lines; see GitHub link above)
+     function TQ(QQ) {
+       QQ.gravityMultiplier = 2, QQ.friction = 4, QQ.Bs = .02, QQ.Jr = 0, QQ.fluidDrag = .2
+     }
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4746-L4749` → after: `L38037-L38040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38037-L38040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38037-L38040) · [Before (L4746-L4749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4746-L4749)

```diff
-                           function eI(pp) {
-                             var ip;
-                             return null !== pp.defaultValue && "undefined" !== pp.defaultValue ? pp.defaultValue : null !== (ip = pp.example) && void 0 !== ip ? ip : "value"
-                           }
+     function zQ(QQ, WQ) {
+       return [QQ[0] + .2 * WQ() + .4, QQ[1] + .5, QQ[2] + .2 * WQ() + .4]
+     }
+     const sQ = .01;
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4751-L4814` → after: `L38042-L38044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38042-L38044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38042-L38044) · [Before (L4751-L4814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4751-L4814)

```diff
-                           function uI(pp) {
-                             let {
-                               setting: ip,
-                               pageId: cp,
-                               anchor: Op,
-                               setterSnippet: op
-                             } = pp;
-                             const Ip = null === ip.defaultValue ? null : Hi(ip.defaultValue);
-                             return (0, yp.jsxs)("article", {
-                               className: "DocsCard DocsSettingCard",
-                               children: [(0, yp.jsxs)("header", {
-                                 className: "DocsCardHeader",
-                                 children: [(0, yp.jsx)(Pc, {
-                                   level: 2,
-                                   text: ip.name,
-                                   anchor: Op,
- ... (48 more removed lines; see GitHub link above)
+     function FQ(QQ) {
+       return [sQ - QQ() * sQ * 2, .05, sQ - QQ() * sQ * 2]
+     }
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4816-L4834` → after: `L38046-L38049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38046-L38049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38046-L38049) · [Before (L4816-L4834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4816-L4834)

```diff
-                           function jI(pp) {
-                             let {
-                               section: ip
-                             } = pp;
-                             return (0, yp.jsxs)("article", {
-                               className: "DocsCard DocsSnippetCard",
-                               children: [(0, yp.jsx)(Pc, {
-                                 level: 2,
-                                 text: ip.heading.text,
-                                 anchor: ip.heading.anchor,
-                                 className: "DocsCardTitle"
-                               }), (0, yp.jsx)("div", {
-                                 className: "DocsProse",
-                                 children: (0, yp.jsx)(wc, {
-                                   blocks: ip.blocks
-                                 })
- ... (3 more removed lines; see GitHub link above)
+     function PQ(QQ) {
+       const WQ = Math.hypot(QQ[0], QQ[1], QQ[2]);
+       return WQ > 0 && Number.isFinite(WQ) ? [QQ[0] / WQ, QQ[1] / WQ, QQ[2] / WQ] : null
+     }
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4836-L4931` → after: `L38051-L38053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38051-L38053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38051-L38053) · [Before (L4836-L4931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4836-L4931)

```diff
-                           function kI(pp) {
-                             let {
-                               section: ip
-                             } = pp;
-                             return (0, yp.jsxs)("section", {
-                               className: "DocsProse DocsArticleSection",
-                               children: [(0, yp.jsx)(Pc, {
-                                 level: ip.heading.level,
-                                 text: ip.heading.text,
-                                 anchor: ip.heading.anchor
-                               }), (0, yp.jsx)(wc, {
-                                 blocks: ip.blocks
-                               })]
-                             })
-                           }
-                           const mI = {
- ... (80 more removed lines; see GitHub link above)
+     function gQ(QQ, WQ) {
+       return [QQ[0] + .5 * WQ[0], QQ[1] + .5 * WQ[1], QQ[2] + .5 * WQ[2]]
+     }
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L4933-L5073` → after: `L38055-L38070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38055-L38070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38055-L38070) · [Before (L4933-L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L4933-L5073)

```diff
-                           function qI(pp) {
-                             let {
-                               page: ip,
-                               onTocChange: cp
-                             } = pp;
-                             const op = hp(ip),
-                               [Ip, Sp] = (0, Op.useState)(""),
-                               xp = "article" !== ip.layout,
-                               Lp = Hc(ip.gallery) ? ip.gallery : null,
-                               Yp = null !== Lp,
-                               Dp = Ip.trim().toLowerCase(),
-                               Ap = (0, Op.useRef)(null),
-                               Pp = (0, Op.useCallback)((pp => {
-                                 var ip;
-                                 null === (ip = Ap.current) || void 0 === ip || ip.preview(pp)
-                               }), []),
- ... (125 more removed lines; see GitHub link above)
+     function JQ(QQ) {
+       return [3.5 / 30 * QQ[0], 7 / 30 * QQ[1], 3.5 / 30 * QQ[2]]
+     }
+   },
+   38758: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => TQ,
+       f: () => gQ
+     });
+     var wQ = XQ(38756),
+       qQ = XQ(38767);
+     const TQ = .6,
+       zQ = .2,
+       sQ = .5,
+       FQ = .3,
+       PQ = .6;
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L5075-L5161` → after: `L38072-L38100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38072-L38100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38072-L38100) · [Before (L5075-L5161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L5075-L5161)

```diff
-                           function EI(pp) {
-                             let {
-                               toc: ip,
-                               activeAnchor: cp,
-                               onNavigate: op
-                             } = pp;
-                             const Sp = Math.max(0, ip.findIndex((pp => pp.anchor === cp))),
-                               xp = (0, Op.useRef)(null),
-                               Lp = (0, Op.useRef)(!1);
-                             (0, Op.useEffect)((() => {
-                               var pp, cp;
-                               const Op = null === (pp = xp.current) || void 0 === pp ? void 0 : pp.closest(".DocsToc"),
-                                 op = null === (cp = xp.current) || void 0 === cp ? void 0 : cp.querySelector(".DocsTimelineNotch.Active");
-                               if (!Op || !op) return;
-                               let Ip = 0;
-                               if (Sp === ip.length - 1) Ip = Op.scrollHeight;
- ... (71 more removed lines; see GitHub link above)
+     function gQ(QQ, WQ) {
+       var XQ;
+       const gQ = (0, wQ.c)(WQ),
+         JQ = gQ.physicsBodyDimensions.width,
+         rQ = gQ.physicsBodyDimensions.height,
+         IQ = gQ.hitBoxDimensions.width,
+         jQ = gQ.hitBoxDimensions.height,
+         BQ = Math.min(Math.max(JQ * QQ, zQ), qQ.f),
+         yQ = Math.min(Math.max(rQ * QQ, sQ), qQ.c),
+         VQ = Math.max(IQ * Math.min(QQ, qQ.f / JQ), FQ),
+         DQ = Math.max(jQ * Math.min(QQ, qQ.c / rQ), PQ);
+       return {
+         physicsBodyWidth: BQ,
+         physicsBodyHeight: yQ,
+         collideEntitiesWidthExpand: Math.max(0, VQ - BQ),
+         collideEntitiesHeightExpand: Math.max(0, DQ - yQ),
+ ... (13 more added lines; see GitHub link above)
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L5163-L5240` → after: `L38102-L38104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38102-L38104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38102-L38104) · [Before (L5163-L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L5163-L5240)

```diff
-                           function XI(pp) {
-                             let {
-                               isChangelog: ip,
-                               toc: cp,
-                               activeAnchor: Op,
-                               onNavigate: op
-                             } = pp;
-                             return 0 === cp.length ? null : (0, yp.jsxs)(yp.Fragment, {
-                               children: [(0, yp.jsx)("div", {
-                                 className: "DocsTocTitle",
-                                 children: ip ? "Updates" : "On this page"
-                               }), ip ? (0, yp.jsx)(EI, {
-                                 toc: cp,
-                                 activeAnchor: Op,
-                                 onNavigate: op
-                               }) : (0, yp.jsx)("ul", {
- ... (62 more removed lines; see GitHub link above)
+     function zQ(QQ, WQ, XQ) {
+       return `${QQ}|${WQ}|${XQ}`
+     }
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L5242-L5254` → after: `L38106-L38110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38106-L38110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38106-L38110) · [Before (L5242-L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L5242-L5254)

```diff
-                           function hI(pp, ip, cp) {
-                             const Op = pp.title.toLowerCase();
-                             let op = 0;
-                             if (Op === ip) op = 100;
-                             else if (Op.startsWith(ip)) op = 80;
-                             else if (Op.includes(ip)) op = 60;
-                             else if (cp.every((pp => Op.includes(pp)))) op = 45;
-                             else {
-                               if (!pp.text.toLowerCase().includes(ip)) return 0;
-                               op = 20
-                             }
-                             return op - Math.min(Op.length / 10, 9) + ("Page" === pp.kind ? 8 : "Method" === pp.kind ? 3 : 0) - (pp.listedUnder ? JI : 0)
-                           }
+     function sQ(QQ) {
+       const [WQ, XQ, wQ] = QQ.split("|");
+       return [Number(WQ), Number(XQ), Number(wQ)]
+     }
+     const FQ = XQ(231).h.Ij;
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L5256-L5260` → after: `L38112-L38243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38112-L38243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38112-L38243) · [Before (L5256-L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L5256-L5260)

```diff
-                           function aI(pp, ip) {
-                             const cp = pp.toLowerCase().indexOf(ip),
-                               Op = Math.max(0, cp - TI / 3);
-                             return `${Op>0?"\u2026":""}${pp.slice(Op,Op+TI)}${Op+TI<pp.length?"\u2026":""}`
-                           }
+     function PQ(QQ) {
+       return TQ()(QQ, [FQ, FQ, FQ])
+     }
+     const gQ = TQ()(new Uint16Array(FQ * FQ * FQ), [FQ, FQ, FQ]);
+     wQ.encode(gQ.data)
+   },
+   37917: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => HQ,
+       e: () => dQ,
+       i: () => iQ,
+       h: () => hQ,
+       j: () => cQ,
+       n: () => aQ,
+       q: () => RQ,
+       r: () => AQ
+ ... (116 more added lines; see GitHub link above)
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L5262-L5275` → after: `L38245-L38322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38245-L38322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38245-L38322) · [Before (L5262-L5275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L5262-L5275)

```diff
-                           function nI(pp) {
-                             let {
-                               text: ip,
-                               query: cp
-                             } = pp;
-                             const Op = cp ? ip.toLowerCase().indexOf(cp) : -1;
-                             return -1 === Op ? (0, yp.jsx)(yp.Fragment, {
-                               children: ip
-                             }) : (0, yp.jsxs)(yp.Fragment, {
-                               children: [ip.slice(0, Op), (0, yp.jsx)("mark", {
-                                 children: ip.slice(Op, Op + cp.length)
-                               }), ip.slice(Op + cp.length)]
-                             })
-                           }
+     function rQ(QQ, WQ) {
+       return {
+         ...JQ,
+         speedMultiplier: WQ,
+         fluidSpeedMultiplier: .02,
+         effect: {
+           name: "Driving",
+           icon: QQ
+         },
+         horizontalBounciness: 0,
+         steering: {
+           ...gQ,
+           turnRate: 1.65
+         }
+       }
+     }
+ ... (62 more added lines; see GitHub link above)
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L5277-L5437` → after: `L38324-L38401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38324-L38401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38324-L38401) · [Before (L5277-L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L5277-L5437)

```diff
-                           function FI(pp) {
-                             let {
-                               basePath: ip,
-                               onClose: cp
-                             } = pp;
-                             const op = (0, xp.t)(),
-                               [Sp, Lp] = (0, Op.useState)(""),
-                               [Yp, Dp] = (0, Op.useState)(0),
-                               Ap = (0, Op.useRef)(null),
-                               Pp = (0, Op.useRef)(null),
-                               Wp = Sp.trim().toLowerCase(),
-                               Up = (0, Op.useMemo)((() => {
-                                 const pp = (fI || (fI = Np.flatMap((pp => {
-                                   const ip = hp(pp);
-                                   return [{
-                                     page: pp,
- ... (145 more removed lines; see GitHub link above)
+     function jQ(QQ) {
+       return {
+         model: "cameraDirection",
+         maxSpeed: QQ,
+         minSpeed: .5,
+         pitchAcceleration: .0125,
+         friction: 0,
+         impulseDecayTicks: 100,
+         biasMagnitude: 1.5,
+         excessVelocityBleedPerTick: .5
+       }
+     }
+     const BQ = {
+         gravityMultiplier: 0,
+         width: .5,
+         height: 1.4,
+ ... (62 more added lines; see GitHub link above)
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L5439-L5443` → after: `L38403-L38507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38403-L38507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38403-L38507) · [Before (L5439-L5443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L5439-L5443)

```diff
-                           function gI(pp, ip) {
-                             if (ip < 10) return `${pp.toFixed(1)}s`;
-                             const cp = Math.floor(pp);
-                             return `${Math.floor(cp/60)}:${String(cp%60).padStart(2,"0")}`
-                           }
+     function pQ(QQ) {
+       return {
+         effect: {
+           name: "Floating",
+           icon: `${QQ} Balloon`,
+           duration: 16e3
+         }
+       }
+     }
+     const GQ = {
+       [wQ.u.ROTATION_1]: {
+         fixedHeading: 0
+       },
+       [wQ.u.ROTATION_2]: {
+         fixedHeading: Math.PI / 2
+       },
+ ... (89 more added lines; see GitHub link above)
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L5445-L5610` → after: `L38509-L38514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38509-L38514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38509-L38514) · [Before (L5445-L5610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L5445-L5610)

```diff
-                           function GI() {
-                             const pp = WO((pp => pp.track)),
-                               ip = WO((pp => pp.volume)),
-                               [cp, op] = (0, Op.useState)(0),
-                               Sp = (0, Op.useRef)(oO);
-                             if ((0, Op.useEffect)((() => {
-                                 if (!pp) return;
-                                 if (op(vO()), "playing" !== pp.status) return;
-                                 let ip = 0;
-                                 const cp = () => {
-                                   op(vO()), ip = requestAnimationFrame(cp)
-                                 };
-                                 return ip = requestAnimationFrame(cp), () => {
-                                   cancelAnimationFrame(ip)
-                                 }
-                               }), [pp]), !pp) return null;
- ... (150 more removed lines; see GitHub link above)
+     function dQ(QQ) {
+       return (0, TQ.rc)(QQ) ? null : (0, TQ.ab)(UQ.o, (WQ => {
+         var XQ;
+         return null !== (XQ = QQ[(0, UQ.f)(WQ)]) && void 0 !== XQ ? XQ : 1
+       }), Float64Array)
+     }
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L5612-L5646` → after: `L38516-L38521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38516-L38521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38516-L38521) · [Before (L5612-L5646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L5612-L5646)

```diff
-                           function OS(pp) {
-                             let {
-                               basePath: ip,
-                               pageId: cp
-                             } = pp;
-                             const Op = Tp.flatMap((pp => pp.pageIds)),
-                               op = Op.indexOf(cp),
-                               Ip = op > 0 ? fp(Op[op - 1]) : null,
-                               xp = op < Op.length - 1 ? fp(Op[op + 1]) : null;
-                             return (0, yp.jsxs)("nav", {
-                               className: "DocsPager",
-                               "aria-label": "Pages",
-                               children: [Ip ? (0, yp.jsxs)(Sp.c, {
-                                 className: "DocsPagerLink Previous",
-                                 to: gp(ip, Ip),
-                                 children: [(0, yp.jsx)("span", {
- ... (19 more removed lines; see GitHub link above)
+     function HQ(QQ) {
+       return (0, TQ.rc)(QQ) ? null : (0, TQ.ab)(UQ.o, (WQ => {
+         const XQ = QQ[(0, UQ.f)(WQ)];
+         return void 0 === XQ ? bQ.Unset : XQ ? bQ.On : bQ.Off
+       }), Uint8Array)
+     }
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L5648-L5916` → after: `L38523-L38592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38523-L38592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38523-L38592) · [Before (L5648-L5916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L5648-L5916)

```diff
-                           function oS(pp) {
-                             let {
-                               basePath: ip,
-                               embedded: cp = !1
-                             } = pp;
-                             const {
-                               pageSlug: op = ""
-                             } = (0, xp.A)(), Yp = (0, xp.r)(), Dp = (0, xp.t)(), Ap = (Pp = op, Np.find((pp => pp.slug === Pp)));
-                             var Pp;
-                             const [Wp, Up] = function() {
-                               const [pp, ip] = (0, Op.useState)((() => {
-                                 const pp = rI.h.getItem(ZI);
-                                 return "dark" === pp || "light" === pp ? pp : null
-                               })), [cp, op] = (0, Op.useState)(zI.matches ? "light" : "dark");
-                               return (0, Op.useEffect)((() => {
-                                 const pp = () => {
- ... (253 more removed lines; see GitHub link above)
+     function aQ(QQ, WQ, XQ) {
+       if (QQ) {
+         let XQ = !1;
+         for (let wQ = 0; wQ < WQ.length; wQ++) {
+           const qQ = QQ[WQ[wQ]];
+           if (qQ === bQ.On) return !0;
+           qQ === bQ.Off && (XQ = !0)
+         }
+         if (XQ) return !1
+       }
+       return XQ
+     }
+     const lQ = {
+       [wQ.s.DEFAULT]: new vQ(qQ.f, {}),
+       [wQ.s.BOAT]: new vQ(zQ, sQ),
+       [wQ.s.GLIDER]: new vQ(BQ, yQ),
+ ... (54 more added lines; see GitHub link above)
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L5918-L5921` → after: `L38594-L38596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38594-L38596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38594-L38596) · [Before (L5918-L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L5918-L5921)

```diff
-                           function Ip(pp) {
-                             return pp.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
-                           }
-                           const Sp = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Op.source}`, "g");
+     function hQ(QQ) {
+       return lQ[QQ]
+     }
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L5923-L5925` → after: `L38598-L38600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38598-L38600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38598-L38600) · [Before (L5923-L5925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L5923-L5925)

```diff
-                           function xp(pp, ip) {
-                             return 2 === pp.length ? ip.replace(/^ (.*) $/, "$1") : ip
-                           }
+     function iQ(QQ, WQ) {
+       return lQ[QQ].getAllSettingsForTier(WQ)
+     }
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L5927-L5929` → after: `L38602-L38607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38602-L38607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38602-L38607) · [Before (L5927-L5929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L5927-L5929)

```diff
-                           function Lp(pp) {
-                             return "" === pp.trim()
-                           }
+     function* cQ() {
+       for (const QQ in lQ) {
+         const WQ = Number(QQ);
+         yield WQ
+       }
+     }
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L5931-L5962` → after: `L38609-L38612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38609-L38612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38609-L38612) · [Before (L5931-L5962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L5931-L5962)

```diff
-                           function Yp(pp) {
-                             const ip = [];
-                             for (const cp of pp.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) ip.length > 0 && ip[ip.length - 1].endsWith("\\") ? ip[ip.length - 1] += `|${cp}` : ip.push(cp);
-                             return ip.map((pp => pp.trim().replaceAll("\\|", "|")))
-                           }
-                           const Dp = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;
- 
-                           function Ap(pp) {
-                             const ip = [],
-                               cp = [{
-                                 indent: -1,
-                                 items: ip
-                               }];
-                             let Op = null;
-                             for (const op of pp) {
-                               const pp = op.match(Dp);
- ... (16 more removed lines; see GitHub link above)
+     function AQ(QQ, WQ, XQ) {
+       const wQ = WQ ? QQ.fluidSpeedMultiplier : XQ ? QQ.landSpeedMultiplier : QQ.airSpeedMultiplier;
+       return QQ.speedMultiplier * wQ
+     }
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L5964-L6041` → after: `L38614-L38718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38614-L38718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38614-L38718) · [Before (L5964-L6041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L5964-L6041)

```diff
-                           function Pp(pp) {
-                             const ip = pp.replace(/\r\n/g, "\n").split("\n"),
-                               cp = [];
-                             let Op = 0;
-                             for (; Op < ip.length;) {
-                               const pp = ip[Op];
-                               if (Lp(pp)) {
-                                 Op++;
-                                 continue
-                               }
-                               const op = pp.match(/^\s*```\s*(\w*)\s*$/);
-                               if (op) {
-                                 const pp = [];
-                                 for (Op++; Op < ip.length && !/^\s*```\s*$/.test(ip[Op]);) pp.push(ip[Op]), Op++;
-                                 Op++, cp.push({
-                                   kind: "code",
- ... (62 more removed lines; see GitHub link above)
+     function RQ(QQ, WQ, XQ) {
+       return null !== QQ.fixedHeading ? QQ.fixedHeading : QQ.steering ? WQ : XQ
+     }
+   },
+   37943: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => zQ
+     });
+     var wQ = XQ(9580),
+       qQ = XQ(402);
+     const TQ = {
+         Vines: {
+           upForceScalar: 1.05
+         },
+         "Maple Ladder": {
+           upForceScalar: 1.05
+ ... (89 more added lines; see GitHub link above)
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L6043-L6084` → after: `L38720-L38728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38720-L38728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38720-L38728) · [Before (L6043-L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L6043-L6084)

```diff
-                           function Wp(pp) {
-                             let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
-                             const cp = Pp(pp);
-                             let Op = "";
-                             const op = [],
-                               Ip = [],
-                               Sp = new Map;
-                             for (const Yp of cp) {
-                               if ("heading" === Yp.kind) {
-                                 var xp;
-                                 const pp = (null !== (xp = Sp.get(Yp.anchor)) && void 0 !== xp ? xp : 0) + 1;
-                                 Sp.set(Yp.anchor, pp), pp > 1 && (Yp.anchor = `${Yp.anchor}-${pp}`)
-                               }
-                               if ("heading" === Yp.kind && 1 === Yp.level && !Op) {
-                                 Op = Yp.text;
-                                 continue
- ... (26 more removed lines; see GitHub link above)
+     function TQ(QQ, WQ, XQ, wQ, TQ, zQ, sQ) {
+       if (!WQ || !XQ || !wQ) return qQ;
+       if (QQ.released) return QQ;
+       const FQ = TQ ? QQ.heldMs + zQ : 0;
+       return {
+         heldMs: FQ,
+         released: FQ >= sQ
+       }
+     }
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L6086-L6094` → after: `L38730-L38732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38730-L38732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38730-L38732) · [Before (L6086-L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L6086-L6094)

```diff
-                           function yp(pp) {
-                             return [{
-                               heading: null,
-                               blocks: pp.intro
-                             }, ...pp.sections.map((pp => ({
-                               heading: pp.heading,
-                               blocks: pp.blocks
-                             })))]
-                           }
+     function zQ(QQ, WQ, XQ) {
+       return !QQ.released && (XQ || !WQ)
+     }
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L6096-L6098` → after: `L38734-L38744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38734-L38744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38734-L38744) · [Before (L6096-L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L6096-L6098)

```diff
-                           function Up(pp) {
-                             return pp.flatMap((pp => "code" === pp.kind ? [pp] : "quote" === pp.kind ? Up(pp.blocks) : []))
-                           }
+     function sQ(QQ, WQ, XQ, wQ, qQ) {
+       return QQ && WQ && (0 !== XQ[0] && !wQ || 0 !== XQ[2] && !qQ)
+     }
+   },
+   6868: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => JQ,
+       f: () => qQ,
+       j: () => rQ
+     });
+     var wQ = XQ(6873);
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L6100-L6633` → after: `L38746-L38762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38746-L38762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38746-L38762) · [Before (L6100-L6633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L6100-L6633)

```diff
-                           function wp(pp) {
-                             switch (pp.kind) {
-                               case "heading":
-                               case "paragraph":
-                                 return pp.text;
-                               case "code":
-                                 return pp.code;
-                               case "table":
-                                 return [pp.header, ...pp.rows].map((pp => pp.join(" "))).join(" ");
-                               case "list": {
-                                 const ip = pp => pp.map((pp => `${pp.text} ${ip(pp.children)}`)).join(" ");
-                                 return ip(pp.items)
-                               }
-                               case "quote":
-                                 return pp.blocks.map(wp).join(" ");
-                               case "rule":
- ... (518 more removed lines; see GitHub link above)
+     function qQ(QQ, WQ) {
+       return QQ && WQ === wQ.s.DEFAULT
+     }
+     const TQ = 150,
+       zQ = 1.6,
+       sQ = 65,
+       FQ = 500,
+       PQ = .6,
+       gQ = .5;
+     class JQ {
+       constructor() {
+         this.Vq = 0, this.Dq = 0, this.yVelocity = 0
+       }
+       reset() {
+         this.Vq = 0, this.Dq = 0, this.yVelocity = 0
+       }
+ ... (1 more added lines; see GitHub link above)
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L6635-L6650` → after: `L38764-L38792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38764-L38792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38764-L38792) · [Before (L6635-L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L6635-L6650)

```diff
-                           function mp(pp) {
-                             var ip;
-                             if (dp.test(pp)) return 1;
-                             const cp = pp.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
-                               Op = cp.replace(/[^0-9]/g, "");
-                             if (Op.length > 0 && !/\p{L}/u.test(cp)) return Math.min(Op.length, 4);
-                             const op = null !== (ip = cp.match(jp)) && void 0 !== ip ? ip : [];
-                             if (0 === op.length) {
-                               var Ip, Sp;
-                               const pp = null !== (Ip = null === (Sp = cp.match(/\p{L}/gu)) || void 0 === Sp ? void 0 : Sp.length) && void 0 !== Ip ? Ip : 0;
-                               return 0 === pp ? 0 : Math.min(Math.max(1, Math.round(pp / 2.5)), Wp)
-                             }
-                             const xp = cp.replace(/[^\p{L}]/gu, ""),
-                               Lp = op.length > 1 && "e" === op.at(-1) && xp.endsWith("e") && !xp.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(pp.replace(/[^\p{L}]/gu, ""));
-                             return Math.min(op.length - (Lp ? 1 : 0), Wp)
-                           }
+     function rQ(QQ, WQ, XQ, wQ) {
+       let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
+       QQ.Vq = WQ ? Math.min(QQ.Vq + zQ / TQ * qQ, zQ) : 0, 0 === XQ ? QQ.Dq = 0 : wQ ? QQ.Dq = qQ : QQ.Dq += qQ;
+       const JQ = Math.min(QQ.Dq, TQ) / TQ,
+         rQ = (sQ + JQ * FQ) * XQ;
+       return QQ.yVelocity *= Math.pow(PQ, qQ), Math.abs(QQ.yVelocity) < gQ && (QQ.yVelocity = 0), rQ
+     }
+   },
+   38767: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => qQ,
+       f: () => wQ
+     });
+     const wQ = 25,
+       qQ = 90;
+     Math.min(wQ, qQ)
+ ... (13 more added lines; see GitHub link above)
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L6652-L6654` → after: `L38794-L38807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38794-L38807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38794-L38807) · [Before (L6652-L6654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L6652-L6654)

```diff
-                           function Rp(pp) {
-                             return pp.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
-                           }
+     function pQ(...QQ) {
+       return QQ[DQ[13]] = DQ[2], typeof PQ[QQ[DQ[1]]] === DQ[19] ? PQ[QQ[DQ[1]]] = function(...QQ) {
+         for (aQ(QQ[DQ[13]] = DQ[2], QQ[-DQ[5]] = '9y}_(0582g*BUA|m{T^x>St`F[nZ!@r?PQwN1ELk;dIe$="vGOC6.uszJD)q4MbYa~3poH%Kfj&RV#7:l/,]cX<hWi+', QQ[DQ[0]] = "" + (QQ[DQ[1]] || ""), QQ[-DQ[4]] = QQ[DQ[0]].length, QQ[-DQ[10]] = [], QQ[DQ[8]] = DQ[1], QQ[-DQ[9]] = DQ[1], QQ[DQ[7]] =  … [truncated]
+           if (QQ[-DQ[6]] = QQ[-DQ[5]].indexOf(QQ[DQ[0]][QQ[-DQ[3]]]), QQ[-DQ[6]] !== -DQ[2])
+             if (QQ[DQ[7]] < DQ[1]) QQ[DQ[7]] = QQ[-DQ[6]];
+             else {
+               aQ(QQ[DQ[7]] += QQ[-DQ[6]] * DQ[35], QQ[DQ[8]] |= QQ[DQ[7]] << QQ[-DQ[9]], QQ[-DQ[9]] += (QQ[DQ[7]] & DQ[37]) > DQ[38] ? DQ[39] : DQ[40]);
+               do {
+                 aQ(QQ[-DQ[10]].push(QQ[DQ[8]] & DQ[12]), QQ[DQ[8]] >>= DQ[11], QQ[-DQ[9]] -= DQ[11])
+               } while (QQ[-DQ[9]] > DQ[27]);
+               QQ[DQ[7]] = -DQ[2]
+             } return QQ[DQ[7]] > -DQ[2] && QQ[-DQ[10]].push((QQ[DQ[8]] | QQ[DQ[7]] << QQ[-DQ[9]]) & DQ[12]), GQ(QQ[-DQ[10]])
+       }(gQ[QQ[DQ[1]]]) : PQ[QQ[DQ[1]]]
+     }
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L6656-L6659` → after: `L38809-L38811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38809-L38811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38809-L38811) · [Before (L6656-L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L6656-L6659)

```diff
-                           function qp(pp) {
-                             const ip = pp.replace(/[^\p{L}]/gu, "");
-                             return ip.length >= 2 && ip === ip.toUpperCase() && ip !== ip.toLowerCase()
-                           }
+     function GQ(...QQ) {
+       return QQ[DQ[13]] = DQ[2], typeof rQ !== DQ[19] && rQ ? (new rQ).decode(new IQ(QQ[DQ[1]])) : typeof jQ !== DQ[19] && jQ ? jQ.from(QQ[DQ[1]]).toString("utf-8") : VQ(QQ[DQ[1]])
+     }
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L6661-L6764` → after: `L38813-L38843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38813-L38843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38813-L38843) · [Before (L6661-L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L6661-L6764)

```diff
-                           function Mp(pp, ip) {
-                             var cp;
-                             const Wp = ip && (0, Op.m)(ip),
-                               yp = null !== (cp = null === Wp || void 0 === Wp ? void 0 : Wp.syllableMs) && void 0 !== cp ? cp : Op.d,
-                               Hp = function(pp) {
-                                 const ip = [];
-                                 for (const Op of (0, op.nc)(pp))
-                                   if ("string" === typeof Op)
-                                     for (const pp of Op.split(/(\s+)/)) {
-                                       if ("" === pp) continue;
-                                       if (/^\s+$/.test(pp)) {
-                                         ip.push({
-                                           kind: "space",
-                                           text: pp
-                                         });
-                                         continue
- ... (88 more removed lines; see GitHub link above)
+     function UQ() {}
+     aQ(PQ = {}, gQ = ["+qU8El4&xxe", "F;ls,=SHTgiyDfcZ!K>8", "f=X.;N22PDq", "c5+2KbhDtxOJgfqT^;TZ%fZ8samT<[=nwoN&1l$}8", 'QUc0jz|F,4UoD/<dD;Pg~"BY@q4.Umj^Uy', "[;tVQ7{}", "v5nZeM>}H)//V_LEL&hjuu.;{Y&yy", ");(*/.vR%a)Oy", '+Jv!1MSufA"V"[[dqbV@VLbF1a/4Uma16_!@,7ByCgcJ3[9ev5q2.#X@5x … [truncated]
+       aQ(QQ[DQ[13]] = DQ[1], QQ[DQ[17]] = [function() {
+         return globalThis
+       }, function() {
+         return global
+       }, function() {
+         return window
+       }, function() {
+         return new Function("return this")()
+       }], QQ[DQ[14]] = DQ[21], QQ[-DQ[15]] = []);
+       try {
+         aQ(QQ[DQ[14]] = Object, QQ[-DQ[15]][DQ[29]]("".__proto__.constructor.name))
+       } catch (gQ) {}
+       QQ: for (QQ[-DQ[16]] = DQ[1]; QQ[-DQ[16]] < QQ[DQ[17]][DQ[13]]; QQ[-DQ[16]]++) try {
+         for (QQ[DQ[14]] = QQ[DQ[17]][QQ[-DQ[16]]](), QQ[DQ[18]] = DQ[1]; QQ[DQ[18]] < QQ[-DQ[15]][DQ[13]]; QQ[DQ[18]]++)
+ ... (15 more added lines; see GitHub link above)
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L6766-L6773` → after: `L38845-L38900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38845-L38900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38845-L38900) · [Before (L6766-L6773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L6766-L6773)

```diff
-                           function Qp(pp) {
-                             const ip = void 0 === pp.voice ? null : (0, Op.o)(pp.voice),
-                               cp = ip && (0, Op.m)(ip);
-                             return {
-                               plan: Mp(lp(pp.line), cp),
-                               synth: cp
-                             }
-                           }
+     function aQ() {
+       aQ = function() {}
+     }
+     aQ(zQ = (...QQ) => {
+       function WQ(...QQ) {
+         return QQ[DQ[13]] = DQ[2], typeof PQ[QQ[DQ[1]]] === DQ[19] ? PQ[QQ[DQ[1]]] = function(...QQ) {
+           for (aQ(QQ[DQ[13]] = DQ[2], QQ[DQ[2]] = '(cXFWlHqSfQ;18Y)G<,T?}xm"aJ0hC4j_Du@Onzp!7%/9~grM$B6s=vd:I#|2`NieU{P+AZ35^Et&owk*[LVK]y.>bR', QQ[DQ[17]] = "" + (QQ[DQ[1]] || ""), QQ[-DQ[54]] = QQ[DQ[17]].length, QQ[DQ[18]] = [], QQ[DQ[56]] = DQ[1], QQ[DQ[57]] = DQ[1], QQ[DQ[7] … [truncated]
+             if (QQ[-DQ[55]] = QQ[DQ[2]].indexOf(QQ[DQ[17]][QQ[DQ[43]]]), QQ[-DQ[55]] !== -DQ[2])
+               if (QQ[DQ[7]] < DQ[1]) QQ[DQ[7]] = QQ[-DQ[55]];
+               else {
+                 aQ(QQ[DQ[7]] += QQ[-DQ[55]] * DQ[35], QQ[DQ[56]] |= QQ[DQ[7]] << QQ[DQ[57]], QQ[DQ[57]] += (QQ[DQ[7]] & DQ[37]) > DQ[38] ? DQ[39] : DQ[40]);
+                 do {
+                   aQ(QQ[DQ[18]].push(QQ[DQ[56]] & DQ[12]), QQ[DQ[56]] >>= DQ[11], QQ[DQ[57]] -= DQ[11])
+                 } while (QQ[DQ[57]] > DQ[27]);
+                 QQ[DQ[7]] = -DQ[2]
+               } return QQ[DQ[7]] > -DQ[2] && QQ[DQ[18]].push((QQ[DQ[56]] | QQ[DQ[7]] << QQ[DQ[57]]) & DQ[12]), GQ(QQ[DQ[18]])
+ ... (40 more added lines; see GitHub link above)
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L6775-L6819` → after: `L38902-L38904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38902-L38904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38902-L38904) · [Before (L6775-L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L6775-L6819)

```diff
-                           function Jp(pp) {
-                             const ip = [];
-                             let cp = [];
-                             for (const [op, Ip] of pp.entries()) {
-                               var Op;
-                               "space" === Ip.kind && (" " !== Ip.text || "icon" !== (null === (Op = pp[op + 1]) || void 0 === Op ? void 0 : Op.kind)) ? (cp.length > 0 && ip.push(cp), ip.push([Ip]), cp = []) : cp.push(Ip)
-                             }
-                             return cp.length > 0 && ip.push(cp), ip
-                           }
-                         }, 4972: (pp, ip, cp) => {
-                           cp.d(ip, {
-                             e: () => Dp,
-                             f: () => Ap
-                           });
-                           var Op = cp(4974),
-                             op = cp(25);
- ... (29 more removed lines; see GitHub link above)
+         function BQ(...QQ) {
+           return QQ[DQ[13]] = DQ[2], typeof PQ[QQ[DQ[1]]] === DQ[19] ? PQ[QQ[DQ[1]]] = jQ(gQ[QQ[DQ[1]]]) : PQ[QQ[DQ[1]]]
+         }
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L6821-L6841` → after: `L38906-L38907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38906-L38907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38906-L38907) · [Before (L6821-L6841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L6821-L6841)

```diff
-                           function Dp(pp, ip, cp, Op, op, Sp) {
-                             if (0 === Op.length) return Sp(), () => {};
-                             const Dp = Ip * cp.volume * op,
-                               Ap = pp.createGain();
-                             Ap.connect(ip);
-                             const Pp = pp.currentTime + xp,
-                               Wp = new Set;
-                             for (const Ip of Op) {
-                               const ip = Yp(pp, Ap, cp, Ip, Pp + Ip.atMs / 1e3, Dp * Ip.level, (() => {
-                                 Wp.delete(ip), 0 === Wp.size && (Ap.disconnect(), Sp())
-                               }));
-                               Wp.add(ip)
-                             }
-                             return () => {
-                               const ip = pp.currentTime;
-                               Ap.gain.setTargetAtTime(0, ip, Lp);
- ... (5 more removed lines; see GitHub link above)
+         function yQ() {
+           var QQ, WQ, XQ;
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L6843-L6875` → after: `L38909-L39190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR38909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L38909-L39190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L38909-L39190) · [Before (L6843-L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L6843-L6875)

```diff
-                           function Ap(pp, ip) {
-                             var cp;
-                             const Ip = Op.Howler.ctx,
-                               Sp = Op.Howler.masterGain;
-                             if (!Ip || !Sp || !op.c.get("soundOnFromAd")) return () => {};
-                             const xp = Op.Howler;
-                             return null === (cp = xp._autoResume) || void 0 === cp || cp.call(xp), Dp(Ip, Sp, pp, ip, op.c.get("soundVolume"), (() => {
-                               var pp;
-                               null === (pp = xp._autoSuspend) || void 0 === pp || pp.call(xp)
-                             }))
-                           }
-                         }, 4941: (pp, ip, cp) => {
-                           cp.d(ip, {
-                             e: () => xp,
-                             f: () => op,
-                             h: () => Lp,
- ... (17 more removed lines; see GitHub link above)
+           function wQ(QQ) {
+             return typeof PQ[QQ] === DQ[19] ? PQ[QQ] = function(...QQ) {
+               for (aQ(QQ[DQ[13]] = DQ[2], QQ[-DQ[64]] = 'GNWFCQLnhJ)Bx"9bYkR4Hw+;,{8}(lm!=I_vUds5t>E$oK#]76<O`a2q~gVSz.1/Z|^frAX:M0p3y*%@[iTjDPec&?u', QQ[DQ[17]] = "" + (QQ[DQ[1]] || ""), QQ[DQ[42]] = QQ[DQ[17]].length, QQ[DQ[73]] = [], QQ[-DQ[72]] = DQ[1], QQ[DQ[46]] = DQ[1], QQ … [truncated]
+                 if (QQ[DQ[70]] = QQ[-DQ[64]].indexOf(QQ[DQ[17]][QQ[DQ[43]]]), QQ[DQ[70]] !== -DQ[2])
+                   if (QQ[DQ[71]] < DQ[1]) QQ[DQ[71]] = QQ[DQ[70]];
+                   else {
+                     aQ(QQ[DQ[71]] += QQ[DQ[70]] * DQ[35], QQ[-DQ[72]] |= QQ[DQ[71]] << QQ[DQ[46]], QQ[DQ[46]] += (QQ[DQ[71]] & DQ[37]) > DQ[38] ? DQ[39] : DQ[40]);
+                     do {
+                       aQ(QQ[DQ[73]].push(QQ[-DQ[72]] & DQ[12]), QQ[-DQ[72]] >>= DQ[11], QQ[DQ[46]] -= DQ[11])
+                     } while (QQ[DQ[46]] > DQ[27]);
+                     QQ[DQ[71]] = -DQ[2]
+                   } return QQ[DQ[71]] > -DQ[2] && QQ[DQ[73]].push((QQ[-DQ[72]] | QQ[DQ[71]] << QQ[DQ[46]]) & DQ[12]), GQ(QQ[DQ[73]])
+             }(gQ[QQ]) : PQ[QQ]
+           }
+           aQ(QQ = BQ(111) + wQ(112) + wQ(113) + wQ(114) + wQ(115) + wQ(116) + "om", WQ = wQ(117) + wQ(118) + wQ(119) + "?", XQ = wQ(120) + wQ(121) + wQ(122) + wQ(123) + wQ(124) + wQ(125), QQ.match(WQ + XQ))
+         }
+ ... (266 more added lines; see GitHub link above)
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L6877-L6999` → after: `L39192-L39196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR39192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L39192-L39196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L39192-L39196) · [Before (L6877-L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L6877-L6999)

```diff
-                           function Lp(pp) {
-                             const ip = xp(op, pp);
-                             return ip.length <= 3e4 ? {
-                               url: ip,
-                               sendsPrompt: !0
-                             } : {
-                               url: new URL(op.url).origin,
-                               sendsPrompt: !1
-                             }
-                           }
-                         }, 4974: (pp, ip, cp) => {
-                           cp.r(ip), cp.d(ip, {
-                             Howl: () => op.Howl,
-                             Howler: () => op.Howler,
-                             musicOutput: () => wp,
-                             readyAudioContext: () => vp
- ... (107 more removed lines; see GitHub link above)
+     function IQ(QQ) {
+       for (const WQ of qQ.e)
+         if (JQ[WQ].meshItemName === QQ) return WQ;
+       return null
+     }
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L7001-L7028` → after: `L39198-L39326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR39198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L39198-L39326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L39198-L39326) · [Before (L7001-L7028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L7001-L7028)

```diff
-                           function vp() {
-                             var pp;
-                             (xp.volume(), xp.ctx && xp.autoUnlock) && (null === (pp = xp._unlockAudio) || void 0 === pp || pp.call(xp))
-                           }
-                           Up && (xp._autoSuspend = () => yp > 0 ? op.Howler : Up())
-                         }, 4984: (pp, ip, cp) => {
-                           function Op(pp) {
-                             return {
-                               notAfter: pp
-                             }
-                           }
-                           cp.d(ip, {
-                             c: () => Lp,
-                             f: () => Yp,
-                             j: () => xp,
-                             k: () => Op,
- ... (12 more removed lines; see GitHub link above)
+     function jQ(QQ, WQ) {
+       const XQ = QQ.validBlockIds;
+       if (Array.isArray(XQ)) return XQ.includes(WQ);
+       if (WQ === FQ) return !1;
+       if ("solidBlocks" === XQ) return !0 !== TQ.h[WQ].XI;
+       if ("solidBlocksOrFluid" === XQ) return !0;
+       throw new Error(`Unsupported validBlockIds for ${WQ}: ${JSON.stringify(XQ)}`)
+     }
+     const BQ = {
+         meshAttachment: {
+           size: .12,
+           offset: [0, 1.8, -.24],
+           rotation: [0, 0, 0]
+         }
+       },
+       yQ = {
+ ... (113 more added lines; see GitHub link above)
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L7030-L7032` → after: `L39328-L39368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR39328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L39328-L39368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L39328-L39368) · [Before (L7030-L7032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L7030-L7032)

```diff
-                           function xp(pp) {
-                             return ip => !pp.test(ip.input.slice(0, ip.index))
-                           }
+     function VQ(QQ) {
+       var WQ;
+       return null === QQ || void 0 === QQ ? null : null !== (WQ = yQ[QQ]) && void 0 !== WQ ? WQ : null
+     }
+     const DQ = {
+         meshAttachment: {
+           size: 3,
+           offset: [0, .72, .3],
+           rotation: [-Math.PI / 2, Math.PI, Math.PI]
+         }
+       },
+       pQ = {
+         "Wood Hang Glider": {
+           ...DQ,
+           physicsState: {
+             type: wQ.s.GLIDER,
+ ... (25 more added lines; see GitHub link above)
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L7034-L7036` → after: `L39370-L39375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR39370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L39370-L39375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L39370-L39375) · [Before (L7034-L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L7034-L7036)

```diff
-                           function Lp(pp, ip) {
-                             return pp.index > 0 && new RegExp(`[${ip}]`).test(pp.input[pp.index - 1])
-                           }
+     function GQ(QQ) {
+       var WQ;
+       return null === QQ || void 0 === QQ ? null : null !== (WQ = pQ[QQ]) && void 0 !== WQ ? WQ : null
+     }
+     const UQ = new Set(Object.values(yQ).map((QQ => QQ.physicsState.type))),
+       bQ = new Set(Object.values(pQ).map((QQ => QQ.physicsState.type)));
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L7038-L7070` → after: `L39377-L39379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR39377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L39377-L39379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L39377-L39379) · [Before (L7038-L7070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L7038-L7070)

```diff
-                           function Yp(pp, ip, cp) {
-                             return function(pp) {
-                               return void 0 !== pp && "function" !== typeof pp
-                             }(cp) ? function(pp, ip, cp) {
-                               const Op = ip.flags.replace(/[gy]/g, ""),
-                                 op = new RegExp(`[^${cp}](?:${ip.source})`, `${Op}g`),
-                                 Ip = [],
-                                 Sp = cp => {
-                                   const Op = cp.index + cp[0].length;
-                                   return ("" === cp[0] ? Pp(pp, ip, Op) : Op) - 1
-                                 },
-                                 xp = new RegExp(`(?:${ip.source})`, `${Op}y`).exec(pp);
-                               if (xp) {
-                                 if (Ip.push(xp), !ip.global) return Ip;
-                                 op.lastIndex = Sp(xp)
-                               }
- ... (17 more removed lines; see GitHub link above)
+     function vQ(QQ) {
+       return UQ.has(QQ)
+     }
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L7072-L7077` → after: `L39381-L39383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR39381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L39381-L39383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L39381-L39383) · [Before (L7072-L7077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L7072-L7077)

```diff
-                           function Dp(pp, ip, cp, Op) {
-                             let op = "",
-                               Ip = 0;
-                             for (const Sp of Yp(pp, ip, cp)) op += pp.slice(Ip, Sp.index) + Op(Sp), Ip = Sp.index + Sp[0].length;
-                             return op + pp.slice(Ip)
-                           }
+     function dQ(QQ) {
+       return bQ.has(QQ)
+     }
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L7079-L7084` → after: `L39385-L39398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR39385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L39385-L39398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L39385-L39398) · [Before (L7079-L7084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L7079-L7084)

```diff
-                           function Ap(pp, ip, cp) {
-                             const Op = [];
-                             let op = 0;
-                             for (const Ip of Yp(pp, ip, cp)) Op.push(pp.slice(op, Ip.index)), op = Ip.index + Ip[0].length;
-                             return [...Op, pp.slice(op)]
-                           }
+     function HQ(QQ) {
+       return QQ === wQ.s.DEFAULT || function(QQ) {
+         return UQ.has(QQ) || bQ.has(QQ)
+       }(QQ)
+     }
+   },
+   38672: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => FQ,
+       e: () => gQ
+     });
+     const wQ = .001,
+       qQ = .001,
+       TQ = [0, 0, 0, 1, 1, 1];
```
