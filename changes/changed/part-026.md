# Changed — Bundle Modifications Report (Part 026 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `26 / 82` (**332** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 025](part-025.md) · [Part 027 →](part-027.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/637.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/637.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544)

#### 3. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/637.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/637.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "bumpVertex",
-       Me = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     var mW = OW(41392);
+     const EW = "bumpFragment",
+       NW = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 4. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L17` → after: `L17-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L17-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/637.js#L17-L31) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/637.js#L17)

```diff
-   45139: (ee, ie, He) => {
+   54336: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     OW(54297);
+     const EW = "bumpFragmentFunctions",
+       NW = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54328: (WW, iW, OW) => {
```

#### 5. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L21-L24` → after: `L35-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L35-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/637.js#L35-L77) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/637.js#L21-L24)

```diff
-     var ye = He(40954);
-     const be = "bumpVertexDeclaration",
-       Me = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
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
+ ... (27 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L30` → after: `L83-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L83-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/637.js#L83-L122) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/637.js#L30)

```diff
-   64101: (ee, ie, He) => {
+   54254: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "objectIdFunctions",
+       NW = "highp vec4 encodeObjectId(highp float objectId) {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4(objectId/255.0,0.0,0.0,1.0);\n#else\nhighp float id=floor(objectId);highp vec3 encodedId=vec3(\nfloor(mod(id,16777216.0)/65536.0),\nfloor(mod(id,65536.0)/256.0),\nmod(id,256.0) … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   64919: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+ ... (24 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L34-L37` → after: `L126-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L126-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/637.js#L126-L129) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/637.js#L34-L37)

```diff
-     var ye = He(40954);
-     const be = "harmonicsFunctions",
-       Me = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     var mW = OW(41392);
+     const EW = "openpbrIblFunctions",
+       NW = "#ifdef REFLECTION\nvec3 sampleIrradiance(\nin vec3 surfaceNormal\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,in vec3 vEnvironmentIrradianceSH\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || ( … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 8. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L43` → after: `L135-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L135-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/637.js#L135-L148) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/637.js#L43)

```diff
-   64095: (ee, ie, He) => {
+   64950: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "openpbrSubsurfaceLayerData",
+       NW = "float subsurface_weight=vSubsurfaceWeight;vec3 subsurface_color=vSubsurfaceColor.rgb;float subsurface_radius=vSubsurfaceRadius;vec3 subsurface_radius_scale=vSubsurfaceRadiusScale;float subsurface_scatter_anisotropy=clamp(vSubsurfaceScatterAnisotropy,-0.9999,0.9999);\n … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   64941: (WW, iW, OW) => {
```

#### 9. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L47` → after: `L152-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L152-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/637.js#L152-L165) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/637.js#L47)

```diff
-     var ye = He(40954);
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

#### 10. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L50` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/637.js#L168) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/637.js#L50)

```diff
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 11. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L56` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/637.js#L174) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/637.js#L56)

```diff
-   64091: (ee, ie, He) => {
+   64700: (WW, iW, OW) => {
```

#### 12. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L58` → after: `L176-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L176-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/637.js#L176-L241) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/637.js#L58)

```diff
-       b: () => Ke
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

#### 13. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L60-L64` → after: `L243-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L243-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/637.js#L243-L246) · [Before (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/637.js#L60-L64)

```diff
-     var ye = He(40954);
-     He(45085), He(45091);
-     const be = "pbrUboDeclaration",
-       Me = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     var mW = OW(41392);
+     const EW = "sceneUboDeclaration",
+       NW = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 14. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L70` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/637.js#L252) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/637.js#L70)

```diff
-   64085: (ee, ie, He) => {
+   65010: (WW, iW, OW) => {
```

#### 15. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L72` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/637.js#L254) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/637.js#L72)

```diff
-       pbrVertexShader: () => Ie
+       geometryPixelShader: () => nW
```

#### 16. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L74-L78` → after: `L256-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L256-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/637.js#L256-L261) · [Before (L74-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/637.js#L74-L78)

```diff
-     var ye = He(40954),
-       be = He(45076);
-     const Me = "pbrVertexDeclaration",
-       Ke = "uniform mat4 view;uniform mat4 viewProjection;uniform vec4 vEyePosition;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif\n#ifdef ALBEDO\nuniform mat4 albedoMatrix;uniform vec2 vAlbedoInfos;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBase … [truncated]
-     ye.d.IncludesShadersStore[Me] || (ye.d.IncludesShadersStore[Me] = Ke);
+     var mW = OW(41392),
+       EW = OW(54254),
+       NW = OW(54343);
+     const PW = "mrtFragmentDeclaration",
+       LW = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#ifdef MESH_BLEND_TAG\n#if {X}>0\n#if MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if {X}>1\n#if MESH … [truncated]
+     mW.c.IncludesShadersStore[PW] || (mW.c.IncludesShadersStore[PW] = LW);
```

#### 17. `bundles/bloxd.io/chunks/js/637.js` (Changed code · before: `L83-L122` → after: `L266-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83333122b0cb097ae6da3d535b1213886967a1281a3417b9a019f84ee1cf7544) · [After (L266-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/637.js#L266-L287) · [Before (L83-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/637.js#L83-L122)

```diff
-     var Fe = He(45085),
-       Je = He(45091),
-       oe = He(64091),
-       Re = He(45102),
-       ke = He(45130),
-       qe = He(45105),
-       fe = He(64095),
-       Te = He(45114),
-       pe = He(45116),
-       Xe = He(45125),
-       ze = He(45128),
-       Be = He(45136),
-       Ee = He(64101),
-       ge = He(45139),
-       Oe = He(45143),
-       de = He(45152),
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

## `bloxd.io` · `bundles/bloxd.io/chunks/js/638.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/638.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074)

#### 1. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L4-L8` → after: `L4-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L4-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/638.js#L4-L73) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/638.js#L4-L8)

```diff
-   45234: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
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

#### 2. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L11-L21` → after: `L76-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L76-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/638.js#L76-L86) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/638.js#L11-L21)

```diff
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45143: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
-     });
-     var ye = He(40954);
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

#### 3. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L24-L82` → after: `L89-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L89-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/638.js#L89-L199) · [Before (L24-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/638.js#L24-L82)

```diff
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45238: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
-     const be = "fogVertex",
-       Me = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
- ... (43 more removed lines; see GitHub link above)
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
+ ... (95 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/638.js` (Changed code · before: `L84-L97` → after: `L201-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f836eb2a1be3cfcaaa11ee6cddafb6611eb62ffcce02acac9bdd5fac17fc074) · [After (L201-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/638.js#L201-L237) · [Before (L84-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/638.js#L84-L97)

```diff
-       particlesVertexShader: () => qe
-     });
-     var ye = He(40954),
-       be = He(45143),
-       Me = He(45152),
-       Ke = He(45186),
-       Ue = He(45234),
-       Fe = He(45238),
-       Je = He(45259);
-     const oe = "particlesVertexShader",
-       Re = "attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;\n#ifdef ANIMATESHEET\nattribute float cellIndex;\n#endif\n#ifndef BILLBOARD\nattribute vec3 direction;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute vec3 direction;\n#endif\n#ifdef … [truncated]
-     ye.d.ShadersStore[oe] || (ye.d.ShadersStore[oe] = Re);
-     const ke = [be.b, Me.c, Ke.e, Ue.c, Fe.c, Je.d];
-     for (const fe of ke) ye.d.IncludesShadersStore[fe.name] || (ye.d.IncludesShadersStore[fe.name] = fe.shader);
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

## `bloxd.io` · `bundles/bloxd.io/chunks/js/639.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/639.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0af)

#### 1. `bundles/bloxd.io/chunks/js/639.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0af) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/639.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/639.js#L4)

```diff
-   45234: (ee, ie, He) => {
+   54077: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/639.js` (Changed code · before: `L8-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0afR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0af) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/639.js#L8-L12) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/639.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "clipPlaneVertex",
-       Me = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     var mW = OW(41392);
+     OW(54061), OW(54070);
+     const EW = "defaultUboDeclaration",
+       NW = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 3. `bundles/bloxd.io/chunks/js/639.js` (Changed code · before: `L17-L19` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0afR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0af) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/639.js#L18-L20) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/639.js#L17-L19)

```diff
-   45143: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
+   54248: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       defaultPixelShader: () => QW
```

#### 4. `bundles/bloxd.io/chunks/js/639.js` (Changed code · before: `L21-L24` → after: `L22-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0afR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0af) · [After (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/639.js#L22-L26) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/639.js#L21-L24)

```diff
-     var ye = He(40954);
-     const be = "clipPlaneVertexDeclaration",
-       Me = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     var mW = OW(41392),
+       EW = OW(54252);
+     const NW = "defaultFragmentDeclaration",
+       PW = "uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform vec2 vAmbientInfos;\n#endif\ … [truncated]
+     mW.c.IncludesShadersStore[NW] || (mW.c.IncludesShadersStore[NW] = PW);
```

#### 5. `bundles/bloxd.io/chunks/js/639.js` (Changed code · before: `L28-L37` → after: `L30-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0afR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0af) · [After (L30-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/639.js#L30-L45) · [Before (L28-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/639.js#L28-L37)

```diff
-     }
-   },
-   45238: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
-     const be = "fogVertex",
-       Me = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
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

#### 6. `bundles/bloxd.io/chunks/js/639.js` (Changed code · before: `L41-L50` → after: `L49-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0afR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0af) · [After (L49-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/639.js#L49-L54) · [Before (L41-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/639.js#L41-L50)

```diff
-     }
-   },
-   45152: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
-     const be = "fogVertexDeclaration",
-       Me = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     };
+     var YW = OW(54291),
+       yW = OW(54297);
+     const TW = "fresnelFunction",
+       JW = "#ifdef FRESNEL\nfloat computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)\n{float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
+     mW.c.IncludesShadersStore[TW] || (mW.c.IncludesShadersStore[TW] = JW);
```

#### 7. `bundles/bloxd.io/chunks/js/639.js` (Changed code · before: `L54-L63` → after: `L58-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0afR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0af) · [After (L58-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/639.js#L58-L73) · [Before (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/639.js#L54-L63)

```diff
-     }
-   },
-   45186: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
-     const be = "logDepthDeclaration",
-       Me = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
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

#### 8. `bundles/bloxd.io/chunks/js/639.js` (Changed code · before: `L67-L97` → after: `L77-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0afR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0f9575083882118a772d313b81533894278966c73b52a4747512592937d0c0af) · [After (L77-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/639.js#L77-L87) · [Before (L67-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/639.js#L67-L97)

```diff
-     }
-   },
-   45259: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
-     });
-     var ye = He(40954);
-     const be = "logDepthVertex",
-       Me = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   63872: (ee, ie, He) => {
- ... (15 more removed lines; see GitHub link above)
+     };
+     var qW = OW(54368),
+       RW = OW(54372),
+       GW = OW(54377),
+       IW = OW(54380),
+       aW = OW(54388);
+     const rW = "defaultPixelShader",
+       zW = "#define CUSTOM_FRAGMENT_EXTENSION\n#include<__decl__defaultFragment>\n#if defined(BUMP) || !defined(NORMAL)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#define CUSTOM_FRAGMENT_BEGIN … [truncated]
+     mW.c.ShadersStore[rW] || (mW.c.ShadersStore[rW] = zW);
+     const FW = [EW.b, LW, cW.c, wW.d, tW.c, ZW.b, xW.c, lW.c, AW.d, bW.b, jW.d, UW.b, kW.c, sW.d, SW, YW.e, yW.d, hW, HW.c, nW.c, uW.e, oW.b, dW.d, eW.b, vW.b, gW.b, DW.c, VW.b, pW.b, fW.c, BW, qW.d, RW.e, GW.e, IW.d, aW.e];
+     for (const Wi of FW) mW.c.IncludesShadersStore[Wi.name] || (mW.c.IncludesShadersStore[Wi.name] = Wi.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/640.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/640.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598)

#### 1. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/640.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/640.js#L4)

```diff
-   45403: (ee, ie, He) => {
+   54352: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/640.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/640.js#L6)

```diff
-       c: () => Ke
+       b: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/640.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/640.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "bumpFragment",
-       Me = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     var mW = OW(41392);
+     const EW = "clipPlaneFragment",
+       NW = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 4. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/640.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/640.js#L17)

```diff
-   45372: (ee, ie, He) => {
+   54343: (WW, iW, OW) => {
```

#### 5. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/640.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/640.js#L19)

```diff
-       d: () => Ke
+       b: () => PW
```

#### 6. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L21-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/640.js#L21-L24) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/640.js#L21-L25)

```diff
-     var ye = He(40954);
-     He(45329);
-     const be = "bumpFragmentFunctions",
-       Me = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     var mW = OW(41392);
+     const EW = "clipPlaneFragmentDeclaration",
+       NW = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 7. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/640.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/640.js#L31)

```diff
-   45364: (ee, ie, He) => {
+   54380: (WW, iW, OW) => {
```

#### 8. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/640.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/640.js#L35-L38)

```diff
-     var ye = He(40954);
-     const be = "bumpFragmentMainFunctions",
-       Me = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     var mW = OW(41392);
+     const EW = "fogFragment",
+       NW = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 9. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/640.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/640.js#L44)

```diff
-   45314: (ee, ie, He) => {
+   54347: (WW, iW, OW) => {
```

#### 10. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L46` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/640.js#L45) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/640.js#L46)

```diff
-       b: () => Ke
+       c: () => PW
```

#### 11. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/640.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/640.js#L48-L51)

```diff
-     var ye = He(40954);
-     const be = "clusteredLightingFunctions",
-       Me = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     var mW = OW(41392);
+     const EW = "fogFragmentDeclaration",
+       NW = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 12. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L57` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/640.js#L56) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/640.js#L57)

```diff
-   45405: (ee, ie, He) => {
+   54093: (WW, iW, OW) => {
```

#### 13. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L59` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/640.js#L58) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/640.js#L59)

```diff
-       d: () => Ke
+       b: () => PW
```

#### 14. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L61-L64` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/640.js#L60-L63) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/640.js#L61-L64)

```diff
-     var ye = He(40954);
-     const be = "decalFragment",
-       Me = "#ifdef DECAL\n#ifdef GAMMADECAL\ndecalColor.rgb=toLinearSpace(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalColor.a*=decalColor.a;\n#endif\nsurfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);\n#endif\n";
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     var mW = OW(41392);
+     const EW = "helperFunctions",
+       NW = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 15. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L70` → after: `L69-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L69-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/640.js#L69-L95) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/640.js#L70)

```diff
-   45412: (ee, ie, He) => {
+   54308: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "imageProcessingDeclaration",
+       NW = "#ifdef EXPOSURE\nuniform float exposureLinear;\n#endif\n#ifdef CONTRAST\nuniform float contrast;\n#endif\n#ifdef WHITEBALANCE\nuniform mat3 whiteBalanceMatrix;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vec2 vInverseScreenSize;\n#endif\n#ifdef VIGNETTE … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54314: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+ ... (11 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/640.js` (Changed code · before: `L74-L77` → after: `L99-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8f99c07630e4260bdaee5cdc7f2702c3fff063dd16b02acf4bc09a640f256598) · [After (L99-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/640.js#L99-L142) · [Before (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/640.js#L74-L77)

```diff
-     var ye = He(40954);
-     const be = "lightFragment",
-       Me = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvec4 diffuse{X}=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUST … [truncated]
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     var mW = OW(41392);
+     const EW = "logDepthDeclaration",
+       NW = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54377: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "logDepthFragment",
+       NW = "#ifdef LOGARITHMICDEPTH\ngl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;\n#endif\n";
+ ... (28 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/641.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/641.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365)

#### 1. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/641.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/641.js#L4)

```diff
-   45396: (ee, ie, He) => {
+   54352: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/641.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/641.js#L8)

```diff
-     var ye = He(40954);
+     var mW = OW(41392);
```

#### 3. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/641.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/641.js#L11)

```diff
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 4. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/641.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/641.js#L17)

```diff
-   45380: (ee, ie, He) => {
+   54343: (WW, iW, OW) => {
```

#### 5. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/641.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/641.js#L19)

```diff
-       d: () => Ke
+       b: () => PW
```

#### 6. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/641.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/641.js#L21)

```diff
-     var ye = He(40954);
+     var mW = OW(41392);
```

#### 7. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/641.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/641.js#L24)

```diff
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 8. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/641.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/641.js#L30)

```diff
-   45422: (ee, ie, He) => {
+   54380: (WW, iW, OW) => {
```

#### 9. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/641.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/641.js#L32)

```diff
-       b: () => Ke
+       d: () => PW
```

#### 10. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/641.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/641.js#L34)

```diff
-     var ye = He(40954);
+     var mW = OW(41392);
```

#### 11. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/641.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/641.js#L37)

```diff
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 12. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/641.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/641.js#L43)

```diff
-   45388: (ee, ie, He) => {
+   54347: (WW, iW, OW) => {
```

#### 13. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/641.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/641.js#L45)

```diff
-       d: () => Ke
+       c: () => PW
```

#### 14. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/641.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/641.js#L47)

```diff
-     var ye = He(40954);
+     var mW = OW(41392);
```

#### 15. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/641.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/641.js#L50)

```diff
-     ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 16. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L56` → after: `L56-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L56-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/641.js#L56-L95) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/641.js#L56)

```diff
-   45785: (ee, ie, He) => {
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
+       shader: NW
+     }
+   },
+   54166: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+ ... (24 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L58` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/641.js#L97) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/641.js#L58)

```diff
-       colorPixelShader: () => Re
+       skyPixelShader: () => UW
```

#### 18. `bundles/bloxd.io/chunks/js/641.js` (Changed code · before: `L60-L69` → after: `L99-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5b649bd29b47b14f98f9b665cd4550330632fa384670d17eb7487fae6c1ef365) · [After (L99-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/641.js#L99-L118) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/641.js#L60-L69)

```diff
-     var ye = He(40954),
-       be = He(45380),
-       Me = He(45388),
-       Ke = He(45396),
-       Ue = He(45422);
-     const Fe = "colorPixelShader",
-       Je = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoi … [truncated]
-     ye.d.ShadersStore[Fe] || (ye.d.ShadersStore[Fe] = Je);
-     const oe = [be.d, Me.d, Ke.b, Ue.b];
-     for (const ke of oe) ye.d.IncludesShadersStore[ke.name] || (ye.d.IncludesShadersStore[ke.name] = ke.shader);
+     var mW = OW(41392),
+       EW = OW(54343),
+       NW = OW(54166),
+       PW = OW(54347),
+       LW = OW(54093),
+       cW = OW(54352),
+       wW = OW(54377),
+       tW = OW(54380);
+     const ZW = "imageProcessingCompatibility",
+       xW = "#ifdef IMAGEPROCESSINGPOSTPROCESS\ngl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));\n#endif\n";
+     mW.c.IncludesShadersStore[ZW] || (mW.c.IncludesShadersStore[ZW] = xW);
+     const lW = {
+         name: ZW,
+         shader: xW
+       },
+       AW = "skyPixelShader",
+ ... (4 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/642.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/642.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9)

#### 1. `bundles/bloxd.io/chunks/js/642.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/642.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/642.js#L4)

```diff
-   45593: (ee, ie, He) => {
+   54093: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/642.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/642.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/642.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "bumpVertex",
-       Me = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "helperFunctions",
+       NW = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 3. `bundles/bloxd.io/chunks/js/642.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/642.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/642.js#L17-L19)

```diff
-   45494: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
+   64523: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       rgbdDecodePixelShader: () => cW
```

#### 4. `bundles/bloxd.io/chunks/js/642.js` (Changed code · before: `L21-L120` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9e63006428727ebb765ed6ad87bfbf923019b7a7b4780d4140b09a2f4bdb17b9) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/642.js#L21-L27) · [Before (L21-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/642.js#L21-L120)

```diff
-     var ye = He(40954);
-     const be = "bumpVertexDeclaration",
-       Me = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45453: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
-     });
-     var ye = He(40954);
-     He(45438), He(45447);
-     const be = "defaultUboDeclaration",
- ... (84 more removed lines; see GitHub link above)
+     var mW = OW(41392),
+       EW = OW(54093);
+     const NW = "rgbdDecodePixelShader",
+       PW = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}";
+     mW.c.ShadersStore[NW] || (mW.c.ShadersStore[NW] = PW);
+     const LW = [EW.b];
+     for (const wW of LW) mW.c.IncludesShadersStore[wW.name] || (mW.c.IncludesShadersStore[wW.name] = wW.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/643.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/643.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852)

#### 1. `bundles/bloxd.io/chunks/js/643.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/643.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/643.js#L4)

```diff
-   45478: (ee, ie, He) => {
+   54093: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/643.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/643.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/643.js#L6)

```diff
-       d: () => Ke
+       b: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/643.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/643.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/643.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "instancesDeclaration",
-       Me = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "helperFunctions",
+       NW = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 4. `bundles/bloxd.io/chunks/js/643.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/643.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/643.js#L17-L19)

```diff
-   45558: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
+   64537: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       rgbdEncodePixelShader: () => cW
```

#### 5. `bundles/bloxd.io/chunks/js/643.js` (Changed code · before: `L21-L69` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-802e5d96550cfa7d7a6878859956c4e1573dd5e2ba828bd51c9e1c1ac5010852) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/643.js#L21-L27) · [Before (L21-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/643.js#L21-L69)

```diff
-     var ye = He(40954);
-     const be = "instancesVertex",
-       Me = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45447: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
-     });
-     var ye = He(40954);
-     const be = "meshUboDeclaration",
-       Me = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
- ... (33 more removed lines; see GitHub link above)
+     var mW = OW(41392),
+       EW = OW(54093);
+     const NW = "rgbdEncodePixelShader",
+       PW = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
+     mW.c.ShadersStore[NW] || (mW.c.ShadersStore[NW] = PW);
+     const LW = [EW.b];
+     for (const wW of LW) mW.c.IncludesShadersStore[wW.name] || (mW.c.IncludesShadersStore[wW.name] = wW.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/644.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/644.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49)

#### 1. `bundles/bloxd.io/chunks/js/644.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/644.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/644.js#L4)

```diff
-   45453: (ee, ie, He) => {
+   54199: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/644.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/644.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/644.js#L6)

```diff
-       b: () => Ke
+       c: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/644.js` (Changed code · before: `L8-L12` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/644.js#L8-L11) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/644.js#L8-L12)

```diff
-     var ye = He(40954);
-     He(45438), He(45447);
-     const be = "defaultUboDeclaration",
-       Me = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "bakedVertexAnimation",
+       NW = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 4. `bundles/bloxd.io/chunks/js/644.js` (Changed code · before: `L18` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/644.js#L17) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/644.js#L18)

```diff
-   45464: (ee, ie, He) => {
+   54099: (WW, iW, OW) => {
```

#### 5. `bundles/bloxd.io/chunks/js/644.js` (Changed code · before: `L20` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/644.js#L19) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/644.js#L20)

```diff
-       c: () => Ke
+       e: () => PW
```

#### 6. `bundles/bloxd.io/chunks/js/644.js` (Changed code · before: `L22-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/644.js#L21-L24) · [Before (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/644.js#L22-L25)

```diff
-     var ye = He(40954);
-     const be = "helperFunctions",
-       Me = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "bakedVertexAnimationDeclaration",
+       NW = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 7. `bundles/bloxd.io/chunks/js/644.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/644.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/644.js#L31)

```diff
-   45438: (ee, ie, He) => {
+   54096: (WW, iW, OW) => {
```

#### 8. `bundles/bloxd.io/chunks/js/644.js` (Changed code · before: `L33` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/644.js#L32) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/644.js#L33)

```diff
-       b: () => Ke
+       c: () => PW
```

#### 9. `bundles/bloxd.io/chunks/js/644.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/644.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/644.js#L35-L38)

```diff
-     var ye = He(40954);
-     const be = "sceneUboDeclaration",
-       Me = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "bonesDeclaration",
+       NW = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 10. `bundles/bloxd.io/chunks/js/644.js` (Changed code · before: `L44-L46` → after: `L43-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49) · [After (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/644.js#L43-L45) · [Before (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/644.js#L44-L46)

```diff
-   45623: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       defaultPixelShaderWGSL: () => re
+   54190: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
```

#### 11. `bundles/bloxd.io/chunks/js/644.js` (Changed code · before: `L48-L69` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/644.js#L47-L50) · [Before (L48-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/644.js#L48-L69)

```diff
-     var ye = He(40954),
-       be = He(45438),
-       Me = He(45447),
-       Ke = He(45453),
-       Ue = He(45630),
-       Fe = He(45639),
-       Je = He(45648),
-       oe = He(45488),
-       Re = He(45464),
-       ke = He(45651),
-       qe = He(45656),
-       fe = He(45660);
-     const Te = "clusteredLightingCompute",
-       pe = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nviewDirectionW: vec3f,\nvNormal: vec3f,\nlightData: vec4f,\nsliceRange: vec2u,\nglossiness: f32\n)->lightingInfo {var re … [truncated]
-     ye.d.IncludesShadersStoreWGSL[Te] || (ye.d.IncludesShadersStoreWGSL[Te] = pe);
-     const Xe = {
- ... (6 more removed lines; see GitHub link above)
+     var mW = OW(41392);
+     const EW = "bonesVertex",
+       NW = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 12. `bundles/bloxd.io/chunks/js/644.js` (Changed code · before: `L73-L78` → after: `L54-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49) · [After (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/644.js#L54-L63) · [Before (L73-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/644.js#L73-L78)

```diff
-     };
-     var ge = He(45668),
-       Oe = He(45670);
-     const de = "fresnelFunction",
-       We = "#ifdef FRESNEL\nfn computeFresnelTerm(viewDirection: vec3f,worldNormal: vec3f,bias: f32,power: f32)->f32\n{let fresnelTerm: f32=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
-     ye.d.IncludesShadersStoreWGSL[de] || (ye.d.IncludesShadersStoreWGSL[de] = We);
+     }
+   },
+   54222: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "clipPlaneVertex",
+       NW = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 13. `bundles/bloxd.io/chunks/js/644.js` (Changed code · before: `L82-L97` → after: `L67-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49) · [After (L67-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/644.js#L67-L76) · [Before (L82-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/644.js#L82-L97)

```diff
-     };
-     var Ze = He(45677),
-       we = He(45686),
-       De = He(45689),
-       Pe = He(45694),
-       Ae = He(45696),
-       Ye = He(45703),
-       Ve = He(45711),
-       ae = He(45525),
-       ce = He(45719),
-       xe = He(45723),
-       Le = He(45725),
-       Ce = He(45728);
-     const ve = "defaultFragmentAlpha",
-       ue = "#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpa … [truncated]
-     ye.d.IncludesShadersStoreWGSL[ve] || (ye.d.IncludesShadersStoreWGSL[ve] = ue);
+     }
+   },
+   54132: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "clipPlaneVertexDeclaration",
+       NW = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 14. `bundles/bloxd.io/chunks/js/644.js` (Changed code · before: `L101-L112` → after: `L80-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4c1c58c4dd8b286d9ea7302d22232716fc9b14ee22b1eb9b1da7cd3f7054e49) · [After (L80-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/644.js#L80-L167) · [Before (L101-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/644.js#L101-L112)

```diff
-     };
-     var le = He(45735),
-       Se = He(45743),
-       ne = He(45746),
-       je = He(45754),
-       se = He(45756),
-       Ie = He(45762);
-     const he = "defaultPixelShader",
-       Ne = "#include<defaultUboDeclaration>\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#define CUSTOM_FRAGMENT_BEGIN\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && … [truncated]
-     ye.d.ShadersStoreWGSL[he] || (ye.d.ShadersStoreWGSL[he] = Ne);
-     const Ge = [be.b, Me.d, Ke.b, Ue.c, Fe.d, Je.d, oe.d, Re.c, ke.b, qe.d, fe.b, Xe, Ee, ge.c, Oe.c, te, Ze.c, we.c, De.c, Pe.b, Ae.c, Ye.e, Ve.b, ae.e, ce.d, xe.d, Le.c, Ce.d, me, le.d, Se.b, ne.d, je.e, se.c, Ie.c];
-     for (const Qe of Ge) ye.d.IncludesShadersStoreWGSL[Qe.name] || (ye.d.IncludesShadersStoreWGSL[Qe.name] = Qe.shader);
+     }
+   },
+   54229: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "fogVertex",
+       NW = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54138: (WW, iW, OW) => {
+ ... (72 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/645.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/645.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9)

#### 1. `bundles/bloxd.io/chunks/js/645.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/645.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/645.js#L4)

```diff
-   45464: (ee, ie, He) => {
+   54102: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/645.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/645.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/645.js#L6)

```diff
-       c: () => Ke
+       d: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/645.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/645.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/645.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "helperFunctions",
-       Me = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "instancesDeclaration",
+       NW = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 4. `bundles/bloxd.io/chunks/js/645.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/645.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/645.js#L17)

```diff
-   64196: (ee, ie, He) => {
+   54181: (WW, iW, OW) => {
```

#### 5. `bundles/bloxd.io/chunks/js/645.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/645.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/645.js#L19)

```diff
-       d: () => Ke
+       b: () => PW
```

#### 6. `bundles/bloxd.io/chunks/js/645.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/645.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/645.js#L21-L24)

```diff
-     var ye = He(40954);
-     const be = "pbrBRDFFunctions",
-       Me = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "instancesVertex",
+       NW = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 7. `bundles/bloxd.io/chunks/js/645.js` (Changed code · before: `L30-L32` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/645.js#L30-L32) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/645.js#L30-L32)

```diff
-   45438: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
+   65053: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       greasedLineVertexShader: () => wW
```

#### 8. `bundles/bloxd.io/chunks/js/645.js` (Changed code · before: `L34-L37` → after: `L34-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53345faade7f7cec0fd995cc8d409a8a0338b0b10952ebfb552c49d4965a3ae9) · [After (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/645.js#L34-L41) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/645.js#L34-L37)

```diff
-     var ye = He(40954);
-     const be = "sceneUboDeclaration",
-       Me = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392),
+       EW = OW(54102),
+       NW = OW(54181);
+     const PW = "greasedLineVertexShader",
+       LW = "precision highp float;\n#include<instancesDeclaration>\nattribute float grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute vec3 grl_offsets;\n#endif\nattribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;var … [truncated]
+     mW.c.ShadersStore[PW] || (mW.c.ShadersStore[PW] = LW);
+     const cW = [EW.d, NW.b];
+     for (const tW of cW) mW.c.IncludesShadersStore[tW.name] || (mW.c.IncludesShadersStore[tW.name] = tW.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/646.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/646.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d)

#### 1. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/646.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/646.js#L4)

```diff
-   45571: (ee, ie, He) => {
+   54217: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L8-L60` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/646.js#L8) · [Before (L8-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/646.js#L8-L60)

```diff
-     var ye = He(40954);
-     const be = "bakedVertexAnimation",
-       Me = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45473: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
-     const be = "bakedVertexAnimationDeclaration",
-       Me = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
- ... (37 more removed lines; see GitHub link above)
+     var mW = OW(41392);
```

#### 3. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L62-L63` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/646.js#L10-L11) · [Before (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/646.js#L62-L63)

```diff
-       Me = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+       NW = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 4. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L69-L82` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/646.js#L17) · [Before (L69-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/646.js#L69-L82)

```diff
-   45598: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
-     const be = "clipPlaneVertex",
-       Me = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45499: (ee, ie, He) => {
+   54126: (WW, iW, OW) => {
```

#### 5. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L86-L89` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/646.js#L21-L24) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/646.js#L86-L89)

```diff
-     var ye = He(40954);
-     const be = "clipPlaneVertexDeclaration",
-       Me = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "bumpVertexDeclaration",
+       NW = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 6. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L95` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/646.js#L30) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/646.js#L95)

```diff
-   64203: (ee, ie, He) => {
+   64684: (WW, iW, OW) => {
```

#### 7. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L97` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/646.js#L32) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/646.js#L97)

```diff
-       b: () => Ke
+       e: () => PW
```

#### 8. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L99` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/646.js#L34) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/646.js#L99)

```diff
-     var ye = He(40954);
+     var mW = OW(41392);
```

#### 9. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L101-L102` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/646.js#L36-L37) · [Before (L101-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/646.js#L101-L102)

```diff
-       Me = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+       NW = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 10. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L108` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/646.js#L43) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/646.js#L108)

```diff
-   45478: (ee, ie, He) => {
+   64680: (WW, iW, OW) => {
```

#### 11. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L112-L115` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/646.js#L47-L50) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/646.js#L112-L115)

```diff
-     var ye = He(40954);
-     const be = "instancesDeclaration",
-       Me = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "pbrBRDFFunctions",
+       NW = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 12. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L121-L160` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/646.js#L56) · [Before (L121-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/646.js#L121-L160)

```diff
-   45558: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
-     });
-     var ye = He(40954);
-     const be = "instancesVertex",
-       Me = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45550: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
- ... (24 more removed lines; see GitHub link above)
+   64673: (WW, iW, OW) => {
```

#### 13. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L164-L167` → after: `L60-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/646.js#L60-L64) · [Before (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/646.js#L164-L167)

```diff
-     var ye = He(40954);
-     const be = "morphTargetsVertexGlobal",
-       Me = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\nvar vertexID : f32;\n#endif\n#endif\n";
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     OW(54061), OW(54070);
+     const EW = "pbrUboDeclaration",
+       NW = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 14. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L173-L199` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/646.js#L70) · [Before (L173-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/646.js#L173-L199)

```diff
-   45513: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
-     });
-     var ye = He(40954);
-     const be = "morphTargetsVertexGlobalDeclaration",
-       Me = "#ifdef MORPHTARGETS\nuniform morphTargetInfluences : array<f32,NUM_MORPH_INFLUENCERS>;\n#ifdef MORPHTARGETS_TEXTURE \nuniform morphTargetTextureIndices : array<f32,NUM_MORPH_INFLUENCERS>;uniform morphTargetTextureInfo : vec3<f32>;var morphTargets : texture_2d_array<f3 … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45438: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
- ... (11 more removed lines; see GitHub link above)
+   64665: (WW, iW, OW) => {
```

#### 15. `bundles/bloxd.io/chunks/js/646.js` (Changed code · before: `L201-L223` → after: `L72-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920dR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdd74841b432184cd05a17aceb8dd241208b2a770808e6665cc5de369028920d) · [After (L72-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/646.js#L72-L122) · [Before (L201-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/646.js#L201-L223)

```diff
-       geometryVertexShaderWGSL: () => Oe
-     });
-     var ye = He(40954),
-       be = He(45470),
-       Me = He(45473),
-       Ke = He(45513),
-       Ue = He(45516),
-       Fe = He(45478),
-       Je = He(45438),
-       oe = He(45499),
-       Re = He(64203),
-       ke = He(45543),
-       qe = He(45550),
-       fe = He(45558),
-       Te = He(45567),
-       pe = He(45571),
- ... (7 more removed lines; see GitHub link above)
+       pbrVertexShader: () => IW
+     });
+     var mW = OW(41392),
+       EW = OW(54054);
+     const NW = "pbrVertexDeclaration",
+       PW = "uniform mat4 view;uniform mat4 viewProjection;uniform vec4 vEyePosition;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif\n#ifdef ALBEDO\nuniform mat4 albedoMatrix;uniform vec2 vAlbedoInfos;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBase … [truncated]
+     mW.c.IncludesShadersStore[NW] || (mW.c.IncludesShadersStore[NW] = PW);
+     const LW = {
+       name: NW,
+       shader: PW
+     };
+     var cW = OW(54061),
+       wW = OW(54070),
+       tW = OW(64673),
+       ZW = OW(54084),
+       xW = OW(54116),
+ ... (35 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/647.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/647.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe)

#### 1. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/647.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/647.js#L4)

```diff
-   45571: (ee, ie, He) => {
+   54222: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/647.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/647.js#L6)

```diff
-       c: () => Ke
+       e: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/647.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/647.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "bakedVertexAnimation",
-       Me = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "clipPlaneVertex",
+       NW = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 4. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/647.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/647.js#L17)

```diff
-   45473: (ee, ie, He) => {
+   54132: (WW, iW, OW) => {
```

#### 5. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/647.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/647.js#L21-L24)

```diff
-     var ye = He(40954);
-     const be = "bakedVertexAnimationDeclaration",
-       Me = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "clipPlaneVertexDeclaration",
+       NW = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 6. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/647.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/647.js#L30)

```diff
-   45470: (ee, ie, He) => {
+   54229: (WW, iW, OW) => {
```

#### 7. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/647.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/647.js#L32)

```diff
-       c: () => Ke
+       d: () => PW
```

#### 8. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/647.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/647.js#L34-L37)

```diff
-     var ye = He(40954);
-     const be = "bonesDeclaration",
-       Me = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "fogVertex",
+       NW = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 9. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/647.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/647.js#L43)

```diff
-   45567: (ee, ie, He) => {
+   54138: (WW, iW, OW) => {
```

#### 10. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/647.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/647.js#L45)

```diff
-       b: () => Ke
+       c: () => PW
```

#### 11. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/647.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/647.js#L47-L50)

```diff
-     var ye = He(40954);
-     const be = "bonesVertex",
-       Me = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "fogVertexDeclaration",
+       NW = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 12. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/647.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/647.js#L56)

```diff
-   45598: (ee, ie, He) => {
+   54166: (WW, iW, OW) => {
```

#### 13. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/647.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/647.js#L58)

```diff
-       c: () => Ke
+       b: () => PW
```

#### 14. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/647.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/647.js#L60-L63)

```diff
-     var ye = He(40954);
-     const be = "clipPlaneVertex",
-       Me = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "logDepthDeclaration",
+       NW = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 15. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/647.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/647.js#L69)

```diff
-   45499: (ee, ie, He) => {
+   54246: (WW, iW, OW) => {
```

#### 16. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/647.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/647.js#L71)

```diff
-       e: () => Ke
+       b: () => PW
```

#### 17. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/647.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/647.js#L73-L76)

```diff
-     var ye = He(40954);
-     const be = "clipPlaneVertexDeclaration",
-       Me = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "logDepthVertex",
+       NW = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 18. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L82-L84` → after: `L82-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/647.js#L82-L84) · [Before (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/647.js#L82-L84)

```diff
-   45603: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
+   64436: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       particlesVertexShader: () => lW
```

#### 19. `bundles/bloxd.io/chunks/js/647.js` (Changed code · before: `L86-L375` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32feR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5fa964e6114cf4d27c62b1a9adb2f41a68b7452bbd3c62ff3fa13b7495bd32fe) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/647.js#L86-L97) · [Before (L86-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/647.js#L86-L375)

```diff
-     var ye = He(40954);
-     const be = "fogVertex",
-       Me = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45502: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
-     const be = "fogVertexDeclaration",
-       Me = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
- ... (274 more removed lines; see GitHub link above)
+     var mW = OW(41392),
+       EW = OW(54132),
+       NW = OW(54138),
+       PW = OW(54166),
+       LW = OW(54222),
+       cW = OW(54229),
+       wW = OW(54246);
+     const tW = "particlesVertexShader",
+       ZW = "attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;\n#ifdef ANIMATESHEET\nattribute float cellIndex;\n#endif\n#ifndef BILLBOARD\nattribute vec3 direction;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute vec3 direction;\n#endif\n#ifdef … [truncated]
+     mW.c.ShadersStore[tW] || (mW.c.ShadersStore[tW] = ZW);
+     const xW = [EW.e, NW.c, PW.b, LW.e, cW.d, wW.b];
+     for (const AW of xW) mW.c.IncludesShadersStore[AW.name] || (mW.c.IncludesShadersStore[AW.name] = AW.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/648.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/648.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd)

#### 1. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/648.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/648.js#L4)

```diff
-   45723: (ee, ie, He) => {
+   54222: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L6-L45` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/648.js#L6) · [Before (L6-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/648.js#L6-L45)

```diff
-       d: () => Ke
-     });
-     var ye = He(40954);
-     const be = "clipPlaneFragment",
-       Me = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45711: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
-     });
-     var ye = He(40954);
- ... (24 more removed lines; see GitHub link above)
+       e: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L47-L50` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/648.js#L8-L11) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/648.js#L47-L50)

```diff
-     var ye = He(40954);
-     const be = "depthPrePass",
-       Me = "#ifdef DEPTHPREPASS\n#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)\nfragmentOutputs.color= vec4f(0.,0.,0.,1.0);\n#endif\n#ifndef DEPTHPREPASS_SKIP_EARLY_RETURN\nreturn fragmentOutputs;\n#endif\n#endif\n";
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "clipPlaneVertex",
+       NW = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 4. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L56` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/648.js#L17) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/648.js#L56)

```diff
-   45754: (ee, ie, He) => {
+   54132: (WW, iW, OW) => {
```

#### 5. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L60-L63` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/648.js#L21-L24) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/648.js#L60-L63)

```diff
-     var ye = He(40954);
-     const be = "fogFragment",
-       Me = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "clipPlaneVertexDeclaration",
+       NW = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 6. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L69` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/648.js#L30) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/648.js#L69)

```diff
-   45719: (ee, ie, He) => {
+   54229: (WW, iW, OW) => {
```

#### 7. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L73-L89` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/648.js#L34-L37) · [Before (L73-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/648.js#L73-L89)

```diff
-     var ye = He(40954);
-     const be = "fogFragmentDeclaration",
-       Me = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45686: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
-     const be = "imageProcessingDeclaration",
-       Me = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
- ... (1 more removed lines; see GitHub link above)
+     var mW = OW(41392);
+     const EW = "fogVertex",
+       NW = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 8. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L95` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/648.js#L43) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/648.js#L95)

```diff
-   45689: (ee, ie, He) => {
+   54138: (WW, iW, OW) => {
```

#### 9. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L99-L102` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/648.js#L47-L50) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/648.js#L99-L102)

```diff
-     var ye = He(40954);
-     const be = "imageProcessingFunctions",
-       Me = "#if TONEMAPPING==3\nconst PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;resu … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "fogVertexDeclaration",
+       NW = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 10. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L108` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/648.js#L56) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/648.js#L108)

```diff
-   45651: (ee, ie, He) => {
+   54166: (WW, iW, OW) => {
```

#### 11. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L112-L125` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/648.js#L60) · [Before (L112-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/648.js#L112-L125)

```diff
-     var ye = He(40954);
-     const be = "lightUboDeclaration",
-       Me = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45525: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
+     var mW = OW(41392);
```

#### 12. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L127-L206` → after: `L62-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/648.js#L62-L63) · [Before (L127-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/648.js#L127-L206)

```diff
-       Me = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45746: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
-     });
-     var ye = He(40954);
-     const be = "logDepthFragment",
-       Me = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
- ... (64 more removed lines; see GitHub link above)
+       NW = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 13. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L212` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/648.js#L69) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/648.js#L212)

```diff
-   45648: (ee, ie, He) => {
+   54246: (WW, iW, OW) => {
```

#### 14. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L214-L280` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/648.js#L71) · [Before (L214-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/648.js#L214-L280)

```diff
-       d: () => Ke
-     });
-     var ye = He(40954);
-     const be = "oitDeclaration",
-       Me = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#define MAX_DEPTH 99999.0\nvar oitDepthSamplerSampler: sampler;var oitDepthSampler: texture_2d<f32>;var oitFrontColorSamplerSampler: sampler;var oitFrontColorSampler: texture_2d<f32>;\n#endif\n";
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45762: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
- ... (51 more removed lines; see GitHub link above)
+       b: () => PW
```

#### 15. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L282-L285` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/648.js#L73-L76) · [Before (L282-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/648.js#L282-L285)

```diff
-     var ye = He(40954);
-     const be = "shadowsFragmentFunctions",
-       Me = "#ifdef SHADOWS\n#ifndef SHADOWFLOAT\nfn unpack(color: vec4f)->f32\n{const bit_shift: vec4f= vec4f(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}\n#endif\nfn computeFallOff(value: f32,clipSpace: vec2f,frustumEdgeFalloff: f32)->f3 … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "logDepthVertex",
+       NW = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 16. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L291-L293` → after: `L82-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/648.js#L82-L84) · [Before (L291-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/648.js#L291-L293)

```diff
-   45694: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
+   64447: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       skyVertexShader: () => lW
```

#### 17. `bundles/bloxd.io/chunks/js/648.js` (Changed code · before: `L295-L298` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483ddR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dcd3bf7af9ec6c97e380d703ab1c5e45f02e949c2a490df9967a9c6da9b483dd) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/648.js#L86-L97) · [Before (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/648.js#L295-L298)

```diff
-     var ye = He(40954);
-     const be = "textureRepetitionFunctions",
-       Me = "#if TEXTURE_REPETITION_MODE>0\nfn _texRepHash4(p: vec2f)->vec4f {return fract(sin(vec4f(\n1.0+dot(p,vec2f(37.0,17.0)),\n2.0+dot(p,vec2f(11.0,47.0)),\n3.0+dot(p,vec2f(41.0,29.0)),\n4.0+dot(p,vec2f(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nfn _te … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392),
+       EW = OW(54166),
+       NW = OW(54132),
+       PW = OW(54138),
+       LW = OW(54222),
+       cW = OW(54246),
+       wW = OW(54229);
+     const tW = "skyVertexShader",
+       ZW = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvary … [truncated]
+     mW.c.ShadersStore[tW] || (mW.c.ShadersStore[tW] = ZW);
+     const xW = [EW.b, NW.e, PW.c, LW.e, cW.b, wW.d];
+     for (const AW of xW) mW.c.IncludesShadersStore[AW.name] || (mW.c.IncludesShadersStore[AW.name] = AW.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/649.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/649.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007)

#### 1. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/649.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/649.js#L4)

```diff
-   45723: (ee, ie, He) => {
+   54357: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/649.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/649.js#L6)

```diff
-       d: () => Ke
+       b: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/649.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/649.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "clipPlaneFragment",
-       Me = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "bumpFragment",
+       NW = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 4. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/649.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/649.js#L17)

```diff
-   45711: (ee, ie, He) => {
+   54336: (WW, iW, OW) => {
```

#### 5. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L21-L24` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/649.js#L21-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/649.js#L21-L24)

```diff
-     var ye = He(40954);
-     const be = "clipPlaneFragmentDeclaration",
-       Me = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     OW(54297);
+     const EW = "bumpFragmentFunctions",
+       NW = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 6. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L30` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/649.js#L31) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/649.js#L30)

```diff
-   45754: (ee, ie, He) => {
+   54328: (WW, iW, OW) => {
```

#### 7. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L32` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/649.js#L33) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/649.js#L32)

```diff
-       e: () => Ke
+       d: () => PW
```

#### 8. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L34-L37` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/649.js#L35-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/649.js#L34-L37)

```diff
-     var ye = He(40954);
-     const be = "fogFragment",
-       Me = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "bumpFragmentMainFunctions",
+       NW = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 9. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L43` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/649.js#L44) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/649.js#L43)

```diff
-   45719: (ee, ie, He) => {
+   54285: (WW, iW, OW) => {
```

#### 10. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L47-L50` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/649.js#L48-L51) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/649.js#L47-L50)

```diff
-     var ye = He(40954);
-     const be = "fogFragmentDeclaration",
-       Me = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "clusteredLightingFunctions",
+       NW = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 11. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L56` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/649.js#L57) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/649.js#L56)

```diff
-   45464: (ee, ie, He) => {
+   54366: (WW, iW, OW) => {
```

#### 12. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L60-L63` → after: `L61-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/649.js#L61-L64) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/649.js#L60-L63)

```diff
-     var ye = He(40954);
-     const be = "helperFunctions",
-       Me = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "decalFragment",
+       NW = "#ifdef DECAL\n#ifdef GAMMADECAL\ndecalColor.rgb=toLinearSpace(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalColor.a*=decalColor.a;\n#endif\nsurfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 13. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L69-L95` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/649.js#L70) · [Before (L69-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/649.js#L69-L95)

```diff
-   45686: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
-     const be = "imageProcessingDeclaration",
-       Me = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45689: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
- ... (11 more removed lines; see GitHub link above)
+   54372: (WW, iW, OW) => {
```

#### 14. `bundles/bloxd.io/chunks/js/649.js` (Changed code · before: `L99-L189` → after: `L74-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e3ec85b2abfc4f026fc18369ac9b0de73953379b716a9c58e33e336d83d007) · [After (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/649.js#L74-L77) · [Before (L99-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/649.js#L99-L189)

```diff
-     var ye = He(40954);
-     const be = "logDepthDeclaration",
-       Me = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45746: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
-     });
-     var ye = He(40954);
-     const be = "logDepthFragment",
-       Me = "#ifdef LOGARITHMICDEPTH\nfragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;\n#endif\n";
- ... (75 more removed lines; see GitHub link above)
+     var mW = OW(41392);
+     const EW = "lightFragment",
+       NW = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvec4 diffuse{X}=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUST … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/650.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/650.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0)

#### 1. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/650.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/650.js#L4)

```diff
-   45723: (ee, ie, He) => {
+   54352: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/650.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/650.js#L6)

```diff
-       d: () => Ke
+       b: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/650.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/650.js#L8)

```diff
-     var ye = He(40954);
+     var mW = OW(41392);
```

#### 4. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/650.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/650.js#L10-L11)

```diff
-       Me = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+       NW = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 5. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/650.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/650.js#L17)

```diff
-   45711: (ee, ie, He) => {
+   54343: (WW, iW, OW) => {
```

#### 6. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/650.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/650.js#L21)

```diff
-     var ye = He(40954);
+     var mW = OW(41392);
```

#### 7. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L23-L24` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/650.js#L23-L24) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/650.js#L23-L24)

```diff
-       Me = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+       NW = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 8. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/650.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/650.js#L30)

```diff
-   45754: (ee, ie, He) => {
+   54380: (WW, iW, OW) => {
```

#### 9. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/650.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/650.js#L32)

```diff
-       e: () => Ke
+       d: () => PW
```

#### 10. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/650.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/650.js#L34)

```diff
-     var ye = He(40954);
+     var mW = OW(41392);
```

#### 11. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/650.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/650.js#L36-L37)

```diff
-       Me = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+       NW = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 12. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/650.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/650.js#L43)

```diff
-   45719: (ee, ie, He) => {
+   54347: (WW, iW, OW) => {
```

#### 13. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/650.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/650.js#L45)

```diff
-       d: () => Ke
+       c: () => PW
```

#### 14. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/650.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/650.js#L47)

```diff
-     var ye = He(40954);
+     var mW = OW(41392);
```

#### 15. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L49-L50` → after: `L49-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/650.js#L49-L50) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/650.js#L49-L50)

```diff
-       Me = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+       NW = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     mW.c.IncludesShadersStore[EW] || (mW.c.IncludesShadersStore[EW] = NW);
```

#### 16. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L56-L58` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/650.js#L56-L58) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/650.js#L56-L58)

```diff
-   45464: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
+   54726: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       colorPixelShader: () => ZW
```

#### 17. `bundles/bloxd.io/chunks/js/650.js` (Changed code · before: `L60-L118` → after: `L60-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-827d871e5f715516e4550b78cafa1e38745e7aba88fb888c200d0943c845a4c0) · [After (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/650.js#L60-L69) · [Before (L60-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/650.js#L60-L118)

```diff
-     var ye = He(40954);
-     const be = "helperFunctions",
-       Me = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45525: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
-     const be = "logDepthDeclaration",
-       Me = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
- ... (43 more removed lines; see GitHub link above)
+     var mW = OW(41392),
+       EW = OW(54343),
+       NW = OW(54347),
+       PW = OW(54352),
+       LW = OW(54380);
+     const cW = "colorPixelShader",
+       wW = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoi … [truncated]
+     mW.c.ShadersStore[cW] || (mW.c.ShadersStore[cW] = wW);
+     const tW = [EW.b, NW.c, PW.b, LW.d];
+     for (const xW of tW) mW.c.IncludesShadersStore[xW.name] || (mW.c.IncludesShadersStore[xW.name] = xW.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/651.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/651.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cada)

#### 1. `bundles/bloxd.io/chunks/js/651.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cadaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cada) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/651.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/651.js#L4)

```diff
-   45464: (ee, ie, He) => {
+   54552: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/651.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cadaR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cada) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/651.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/651.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "helperFunctions",
-       Me = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "bumpVertex",
+       NW = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 3. `bundles/bloxd.io/chunks/js/651.js` (Changed code · before: `L17` → after: `L17-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cadaR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cada) · [After (L17-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/651.js#L17-L70) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/651.js#L17)

```diff
-   63934: (ee, ie, He) => {
+   54443: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "bumpVertexDeclaration",
+       NW = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54398: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+ ... (38 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/651.js` (Changed code · before: `L19` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cadaR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cada) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/651.js#L72) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/651.js#L19)

```diff
-       rgbdDecodePixelShaderWGSL: () => Fe
+       defaultVertexShaderWGSL: () => RW
```

#### 5. `bundles/bloxd.io/chunks/js/651.js` (Changed code · before: `L21-L27` → after: `L74-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cadaR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-59559c2830e2d94c1901f43a68e5c33d0edb80000aea5ca299aad4896f12cada) · [After (L74-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/651.js#L74-L120) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/651.js#L21-L27)

```diff
-     var ye = He(40954),
-       be = He(45464);
-     const Me = "rgbdDecodePixelShader",
-       Ke = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(t … [truncated]
-     ye.d.ShadersStoreWGSL[Me] || (ye.d.ShadersStoreWGSL[Me] = Ke);
-     const Ue = [be.c];
-     for (const Je of Ue) ye.d.IncludesShadersStoreWGSL[Je.name] || (ye.d.IncludesShadersStoreWGSL[Je.name] = Je.shader);
+     var mW = OW(41392),
+       EW = OW(54392),
+       NW = OW(54394),
+       PW = OW(54398),
+       LW = OW(54405),
+       cW = OW(54407),
+       wW = OW(54409),
+       tW = OW(54413),
+       ZW = OW(54416),
+       xW = OW(54424),
+       lW = OW(54432),
+       AW = OW(54435),
+       bW = OW(54443),
+       jW = OW(54450),
+       UW = OW(54459);
+     const kW = "lightVxFragmentDeclaration",
+ ... (31 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/652.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/652.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e)

#### 1. `bundles/bloxd.io/chunks/js/652.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/652.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/652.js#L4)

```diff
-   45464: (ee, ie, He) => {
+   54416: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/652.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/652.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/652.js#L6)

```diff
-       c: () => Ke
+       e: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/652.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/652.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/652.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "helperFunctions",
-       Me = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "instancesDeclaration",
+       NW = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 4. `bundles/bloxd.io/chunks/js/652.js` (Changed code · before: `L17` → after: `L17-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909eR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e) · [After (L17-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/652.js#L17-L56) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/652.js#L17)

```diff
-   63962: (ee, ie, He) => {
+   54509: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "instancesVertex",
+       NW = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54394: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+ ... (24 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/652.js` (Changed code · before: `L19` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909eR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/652.js#L58) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/652.js#L19)

```diff
-       rgbdEncodePixelShaderWGSL: () => Fe
+       greasedLineVertexShaderWGSL: () => ZW
```

#### 6. `bundles/bloxd.io/chunks/js/652.js` (Changed code · before: `L21-L27` → after: `L60-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909eR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-44a907041954c4d032427a827a383b38ebe896aa4eef1993fdf110923c4d909e) · [After (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/652.js#L60-L69) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/652.js#L21-L27)

```diff
-     var ye = He(40954),
-       be = He(45464);
-     const Me = "rgbdEncodePixelShader",
-       Ke = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSa … [truncated]
-     ye.d.ShadersStoreWGSL[Me] || (ye.d.ShadersStoreWGSL[Me] = Ke);
-     const Ue = [be.c];
-     for (const Je of Ue) ye.d.IncludesShadersStoreWGSL[Je.name] || (ye.d.IncludesShadersStoreWGSL[Je.name] = Je.shader);
+     var mW = OW(41392),
+       EW = OW(54416),
+       NW = OW(54392),
+       PW = OW(54394),
+       LW = OW(54509);
+     const cW = "greasedLineVertexShader",
+       wW = "#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute grl_widths: f32;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute grl_offsets: vec3f; \n#endif\nattribute grl_colorPointers: f32;attribute position: vec3f;varying grlCoun … [truncated]
+     mW.c.ShadersStoreWGSL[cW] || (mW.c.ShadersStoreWGSL[cW] = wW);
+     const tW = [EW.e, NW.c, PW.c, LW.c];
+     for (const xW of tW) mW.c.IncludesShadersStoreWGSL[xW.name] || (mW.c.IncludesShadersStoreWGSL[xW.name] = xW.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/653.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/653.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29)

#### 1. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/653.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/653.js#L4)

```diff
-   45571: (ee, ie, He) => {
+   54398: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L8-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/653.js#L8-L12) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/653.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "bakedVertexAnimation",
-       Me = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     OW(54392), OW(54394);
+     const EW = "defaultUboDeclaration",
+       NW = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 3. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L17` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/653.js#L18) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/653.js#L17)

```diff
-   45473: (ee, ie, He) => {
+   54407: (WW, iW, OW) => {
```

#### 4. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L21-L24` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/653.js#L22-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/653.js#L21-L24)

```diff
-     var ye = He(40954);
-     const be = "bakedVertexAnimationDeclaration",
-       Me = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "helperFunctions",
+       NW = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 5. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L30` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/653.js#L31) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/653.js#L30)

```diff
-   45470: (ee, ie, He) => {
+   54392: (WW, iW, OW) => {
```

#### 6. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L34-L37` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/653.js#L35-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/653.js#L34-L37)

```diff
-     var ye = He(40954);
-     const be = "bonesDeclaration",
-       Me = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "sceneUboDeclaration",
+       NW = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 7. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L43-L45` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/653.js#L44-L46) · [Before (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/653.js#L43-L45)

```diff
-   45567: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
+   54581: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       defaultPixelShaderWGSL: () => FW
```

#### 8. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L47-L50` → after: `L48-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L48-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/653.js#L48-L69) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/653.js#L47-L50)

```diff
-     var ye = He(40954);
-     const be = "bonesVertex",
-       Me = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392),
+       EW = OW(54392),
+       NW = OW(54394),
+       PW = OW(54398),
+       LW = OW(54586),
+       cW = OW(54588),
+       wW = OW(54592),
+       tW = OW(54432),
+       ZW = OW(54407),
+       xW = OW(54595),
+       lW = OW(54599),
+       AW = OW(54602);
+     const bW = "clusteredLightingCompute",
+       jW = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nviewDirectionW: vec3f,\nvNormal: vec3f,\nlightData: vec4f,\nsliceRange: vec2u,\nglossiness: f32\n)->lightingInfo {var re … [truncated]
+     mW.c.IncludesShadersStoreWGSL[bW] || (mW.c.IncludesShadersStoreWGSL[bW] = jW);
+     const UW = {
+ ... (6 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L54-L63` → after: `L73-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L73-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/653.js#L73-L78) · [Before (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/653.js#L54-L63)

```diff
-     }
-   },
-   45598: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
-     const be = "clipPlaneVertex",
-       Me = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     };
+     var KW = OW(54610),
+       SW = OW(54616);
+     const YW = "fresnelFunction",
+       yW = "#ifdef FRESNEL\nfn computeFresnelTerm(viewDirection: vec3f,worldNormal: vec3f,bias: f32,power: f32)->f32\n{let fresnelTerm: f32=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[YW] || (mW.c.IncludesShadersStoreWGSL[YW] = yW);
```

#### 10. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L67-L76` → after: `L82-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L82-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/653.js#L82-L97) · [Before (L67-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/653.js#L67-L76)

```diff
-     }
-   },
-   45499: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
-     const be = "clipPlaneVertexDeclaration",
-       Me = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     };
+     var JW = OW(54618),
+       hW = OW(54624),
+       HW = OW(54629),
+       nW = OW(54633),
+       uW = OW(54635),
+       oW = OW(54639),
+       dW = OW(54641),
+       eW = OW(54478),
+       vW = OW(54648),
+       gW = OW(54655),
+       DW = OW(54660),
+       VW = OW(54664);
+     const pW = "defaultFragmentAlpha",
+       fW = "#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpa … [truncated]
+     mW.c.IncludesShadersStoreWGSL[pW] || (mW.c.IncludesShadersStoreWGSL[pW] = fW);
```

#### 11. `bundles/bloxd.io/chunks/js/653.js` (Changed code · before: `L80-L167` → after: `L101-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5679b568ce722b1d5ae0e11c47520dd485e98b0d5b66321c637d6c5ed6db9c29) · [After (L101-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/653.js#L101-L112) · [Before (L80-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/653.js#L80-L167)

```diff
-     }
-   },
-   45603: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
-     });
-     var ye = He(40954);
-     const be = "fogVertex",
-       Me = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45502: (ee, ie, He) => {
- ... (72 more removed lines; see GitHub link above)
+     };
+     var XW = OW(54673),
+       BW = OW(54677),
+       qW = OW(54682),
+       RW = OW(54691),
+       GW = OW(54698),
+       IW = OW(54702);
+     const aW = "defaultPixelShader",
+       rW = "#include<defaultUboDeclaration>\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#define CUSTOM_FRAGMENT_BEGIN\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && … [truncated]
+     mW.c.ShadersStoreWGSL[aW] || (mW.c.ShadersStoreWGSL[aW] = rW);
+     const zW = [EW.c, NW.c, PW.c, LW.d, cW.b, wW.e, tW.d, ZW.e, xW.c, lW.c, AW.d, UW, MW, KW.b, SW.c, TW, JW.e, hW.d, HW.e, nW.e, uW.c, oW.e, dW.d, eW.c, vW.d, gW.b, DW.e, VW.b, CW, XW.b, BW.c, qW.e, RW.b, GW.d, IW.b];
+     for (const QW of zW) mW.c.IncludesShadersStoreWGSL[QW.name] || (mW.c.IncludesShadersStoreWGSL[QW.name] = QW.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/654.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/654.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9)

#### 1. `bundles/bloxd.io/chunks/js/654.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/654.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/654.js#L4)

```diff
-   45593: (ee, ie, He) => {
+   54407: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/654.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/654.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/654.js#L6)

```diff
-       b: () => Ke
+       e: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/654.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/654.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/654.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "bumpVertex",
-       Me = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "helperFunctions",
+       NW = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 4. `bundles/bloxd.io/chunks/js/654.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/654.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/654.js#L17)

```diff
-   45494: (ee, ie, He) => {
+   64779: (WW, iW, OW) => {
```

#### 5. `bundles/bloxd.io/chunks/js/654.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/654.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/654.js#L19)

```diff
-       e: () => Ke
+       d: () => PW
```

#### 6. `bundles/bloxd.io/chunks/js/654.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/654.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/654.js#L21-L24)

```diff
-     var ye = He(40954);
-     const be = "bumpVertexDeclaration",
-       Me = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "pbrBRDFFunctions",
+       NW = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 7. `bundles/bloxd.io/chunks/js/654.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/654.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/654.js#L30)

```diff
-   64203: (ee, ie, He) => {
+   54392: (WW, iW, OW) => {
```

#### 8. `bundles/bloxd.io/chunks/js/654.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/654.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/654.js#L32)

```diff
-       b: () => Ke
+       c: () => PW
```

#### 9. `bundles/bloxd.io/chunks/js/654.js` (Changed code · before: `L34-L102` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-54873b3c92f760544c3ad5baa619b73ddaff25ca5b8e5562cbb933b7b6bebce9) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/654.js#L34-L37) · [Before (L34-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/654.js#L34-L102)

```diff
-     var ye = He(40954);
-     const be = "harmonicsFunctions",
-       Me = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   64188: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
-     });
-     var ye = He(40954);
-     He(45438), He(45447);
-     const be = "pbrUboDeclaration",
- ... (53 more removed lines; see GitHub link above)
+     var mW = OW(41392);
+     const EW = "sceneUboDeclaration",
+       NW = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/655.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/655.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422)

#### 1. `bundles/bloxd.io/chunks/js/655.js` (Changed code · before: `L4-L8` → after: `L4-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422) · [After (L4-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/655.js#L4-L73) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/655.js#L4-L8)

```diff
-   45598: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
+   54524: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "bakedVertexAnimation",
+       NW = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54413: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+ ... (54 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/655.js` (Changed code · before: `L11-L21` → after: `L76-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422) · [After (L76-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/655.js#L76-L86) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/655.js#L11-L21)

```diff
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45499: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54450: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
```

#### 3. `bundles/bloxd.io/chunks/js/655.js` (Changed code · before: `L24-L30` → after: `L89-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422) · [After (L89-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/655.js#L89-L173) · [Before (L24-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/655.js#L24-L30)

```diff
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45603: (ee, ie, He) => {
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   64786: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "harmonicsFunctions",
+       NW = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+ ... (69 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/655.js` (Changed code · before: `L34-L82` → after: `L177-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422) · [After (L177-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/655.js#L177-L199) · [Before (L34-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/655.js#L34-L82)

```diff
-     var ye = He(40954);
-     const be = "fogVertex",
-       Me = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45502: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
-     const be = "fogVertexDeclaration",
-       Me = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
- ... (33 more removed lines; see GitHub link above)
+     var mW = OW(41392);
+     const EW = "morphTargetsVertexGlobalDeclaration",
+       NW = "#ifdef MORPHTARGETS\nuniform morphTargetInfluences : array<f32,NUM_MORPH_INFLUENCERS>;\n#ifdef MORPHTARGETS_TEXTURE \nuniform morphTargetTextureIndices : array<f32,NUM_MORPH_INFLUENCERS>;uniform morphTargetTextureInfo : vec3<f32>;var morphTargets : texture_2d_array<f3 … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54392: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "sceneUboDeclaration",
+       NW = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+ ... (7 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/655.js` (Changed code · before: `L84-L97` → after: `L201-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c48248f20d093fd4f735ad9a623a3a40acb4613298acb191ebc2c295bb72c422) · [After (L201-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/655.js#L201-L223) · [Before (L84-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/655.js#L84-L97)

```diff
-       particlesVertexShaderWGSL: () => qe
-     });
-     var ye = He(40954),
-       be = He(45499),
-       Me = He(45502),
-       Ke = He(45525),
-       Ue = He(45598),
-       Fe = He(45603),
-       Je = He(45619);
-     const oe = "particlesVertexShader",
-       Re = "attribute position: vec3f;attribute color: vec4f;attribute angle: f32;attribute size: vec2f;\n#ifdef ANIMATESHEET\nattribute cellIndex: f32;\n#endif\n#ifndef BILLBOARD\nattribute direction: vec3f;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute direction: vec3f;\n#endif … [truncated]
-     ye.d.ShadersStoreWGSL[oe] || (ye.d.ShadersStoreWGSL[oe] = Re);
-     const ke = [be.e, Me.e, Ke.e, Ue.c, Fe.b, Je.e];
-     for (const fe of ke) ye.d.IncludesShadersStoreWGSL[fe.name] || (ye.d.IncludesShadersStoreWGSL[fe.name] = fe.shader);
+       geometryVertexShaderWGSL: () => SW
+     });
+     var mW = OW(41392),
+       EW = OW(54409),
+       NW = OW(54413),
+       PW = OW(54466),
+       LW = OW(54470),
+       cW = OW(54416),
+       wW = OW(54392),
+       tW = OW(54450),
+       ZW = OW(64786),
+       xW = OW(54496),
+       lW = OW(54503),
+       AW = OW(54509),
+       bW = OW(54517),
+       jW = OW(54524),
+ ... (7 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/656.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/656.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719)

#### 1. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L4-L8` → after: `L4-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L4-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/656.js#L4-L60) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/656.js#L4-L8)

```diff
-   45598: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke
-     });
-     var ye = He(40954);
+   54524: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "bakedVertexAnimation",
+       NW = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54413: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+ ... (41 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L11-L21` → after: `L63-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L63-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/656.js#L63-L73) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/656.js#L11-L21)

```diff
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45499: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54450: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
```

#### 3. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L24-L34` → after: `L76-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L76-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/656.js#L76-L86) · [Before (L24-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/656.js#L24-L34)

```diff
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45603: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
-     });
-     var ye = He(40954);
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54558: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
```

#### 4. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L37-L47` → after: `L89-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L89-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/656.js#L89-L99) · [Before (L37-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/656.js#L37-L47)

```diff
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45502: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54459: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
```

#### 5. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L50-L60` → after: `L102-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L102-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/656.js#L102-L151) · [Before (L50-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/656.js#L50-L60)

```diff
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45525: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54416: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "instancesDeclaration",
+       NW = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+ ... (34 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L63-L73` → after: `L154-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L154-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/656.js#L154-L164) · [Before (L63-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/656.js#L63-L73)

```diff
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   45619: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke
-     });
-     var ye = He(40954);
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54572: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
```

#### 7. `bundles/bloxd.io/chunks/js/656.js` (Changed code · before: `L76-L97` → after: `L167-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-72fb4a146b5a1720341abbb5cb26b7ad59cd46e7c98e3cbb57b3b91ca90d1719) · [After (L167-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/656.js#L167-L375) · [Before (L76-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/656.js#L76-L97)

```diff
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   63880: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       skyVertexShaderWGSL: () => qe
-     });
-     var ye = He(40954),
-       be = He(45525),
-       Me = He(45499),
-       Ke = He(45502),
-       Ue = He(45598),
-       Fe = He(45619),
- ... (6 more removed lines; see GitHub link above)
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54432: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "mainUVVaryingDeclaration",
+       NW = "#ifdef MAINUV{X}\nvarying vMainUV{X}: vec2f;\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+ ... (193 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/657.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/657.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1)

#### 1. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L4)

```diff
-   45725: (ee, ie, He) => {
+   54655: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L6)

```diff
-       c: () => Ke
+       b: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "bumpFragment",
-       Me = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "clipPlaneFragment",
+       NW = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 4. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L17)

```diff
-   45703: (ee, ie, He) => {
+   54641: (WW, iW, OW) => {
```

#### 5. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L19)

```diff
-       e: () => Ke
+       d: () => PW
```

#### 6. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L21-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L21-L24) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L21-L25)

```diff
-     var ye = He(40954);
-     He(45670);
-     const be = "bumpFragmentFunctions",
-       Me = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "clipPlaneFragmentDeclaration",
+       NW = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 7. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L31)

```diff
-   45696: (ee, ie, He) => {
+   54602: (WW, iW, OW) => {
```

#### 8. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L33` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L32) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L33)

```diff
-       c: () => Ke
+       d: () => PW
```

#### 9. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L35-L38)

```diff
-     var ye = He(40954);
-     const be = "bumpFragmentMainFunctions",
-       Me = "#ifndef TEXRD_DEFINED\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);}\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(N … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "clusteredLightingFunctions",
+       NW = "struct ClusteredLight {vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\nvLightDirection: vec4f,\nvLightFalloff: vec4f,}\nfn getClusteredLight(lightDataTexture: texture_2d<f32>,index: u32)->ClusteredLight {return ClusteredLight(\ntextureLoad(lightData … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 10. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L44)

```diff
-   45723: (ee, ie, He) => {
+   54673: (WW, iW, OW) => {
```

#### 11. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L46` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L45) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L46)

```diff
-       d: () => Ke
+       b: () => PW
```

#### 12. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L48-L51)

```diff
-     var ye = He(40954);
-     const be = "clipPlaneFragment",
-       Me = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "depthPrePass",
+       NW = "#ifdef DEPTHPREPASS\n#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)\nfragmentOutputs.color= vec4f(0.,0.,0.,1.0);\n#endif\n#ifndef DEPTHPREPASS_SKIP_EARLY_RETURN\nreturn fragmentOutputs;\n#endif\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 13. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L57` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L56) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L57)

```diff
-   45711: (ee, ie, He) => {
+   54691: (WW, iW, OW) => {
```

#### 14. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L61-L64` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L60-L63) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L61-L64)

```diff
-     var ye = He(40954);
-     const be = "clipPlaneFragmentDeclaration",
-       Me = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "fogFragment",
+       NW = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 15. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L70` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L69) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L70)

```diff
-   45630: (ee, ie, He) => {
+   54648: (WW, iW, OW) => {
```

#### 16. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L72` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L71) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L72)

```diff
-       c: () => Ke
+       d: () => PW
```

#### 17. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L74-L77` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L73-L76) · [Before (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L74-L77)

```diff
-     var ye = He(40954);
-     const be = "objectIdFunctions",
-       Me = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "fogFragmentDeclaration",
+       NW = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 18. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L83` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L82) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L83)

```diff
-   64356: (ee, ie, He) => {
+   54624: (WW, iW, OW) => {
```

#### 19. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L87-L90` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L86-L89) · [Before (L87-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L87-L90)

```diff
-     var ye = He(40954);
-     const be = "openpbrDielectricReflectance",
-       Me = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "imageProcessingDeclaration",
+       NW = "#ifdef EXPOSURE\nuniform exposureLinear: f32;\n#endif\n#ifdef CONTRAST\nuniform contrast: f32;\n#endif\n#ifdef WHITEBALANCE\nuniform whiteBalanceMatrix: mat3x3f;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vInverseScreenSize: vec2f;\n#endif\n#ifdef VIGN … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 20. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L96` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L95) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L96)

```diff
-   64365: (ee, ie, He) => {
+   54629: (WW, iW, OW) => {
```

#### 21. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L100-L103` → after: `L99-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L99-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L99-L154) · [Before (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L100-L103)

```diff
-     var ye = He(40954);
-     const be = "openpbrGeometryInfo",
-       Me = "struct geometryInfoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32};struct geometryInfoAnisoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32,\nanisotropy: f32,\nanisotropicTange … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "imageProcessingFunctions",
+       NW = "#if TONEMAPPING==3\nconst PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;resu … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54595: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "lightUboDeclaration",
+       NW = "#ifdef LIGHT{X}\nstruct Light{X}\n{vLightData: vec4f,\nvLightDiffuse: vec4f,\nvLightSpecular: vec4f,\n#ifdef SPOTLIGHT{X}\nvLightDirection: vec4f,\nvLightFalloff: vec4f,\n#elif defined(POINTLIGHT{X})\nvLightFalloff: vec4f,\n#elif defined(HEMILIGHT{X})\nvLightGround: v … [truncated]
+ ... (40 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L109` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L160) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L109)

```diff
-   64371: (ee, ie, He) => {
+   54432: (WW, iW, OW) => {
```

#### 23. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L113-L116` → after: `L164-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L164-L167) · [Before (L113-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L113-L116)

```diff
-     var ye = He(40954);
-     const be = "openpbrIblFunctions",
-       Me = "#ifdef REFLECTION\nfn sampleIrradiance(\nsurfaceNormal: vec3f\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,vEnvironmentIrradianceSH: vec3f\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defi … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "mainUVVaryingDeclaration",
+       NW = "#ifdef MAINUV{X}\nvarying vMainUV{X}: vec2f;\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 24. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L122` → after: `L173-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L173-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L173-L186) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L122)

```diff
-   64382: (ee, ie, He) => {
+   54698: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "meshBlendTagFragmentOutput",
+       NW = "#if SCENE_MRT_COUNT>{X}\n#if defined(PREPASS_MESH_BLEND_TAG) && PREPASS_MESH_BLEND_TAG_INDEX=={X}\nfragmentOutputs.fragData{X}=meshBlendTagOutput;\n#else\nfragmentOutputs.fragData{X}=fragData[{X}];\n#endif\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54394: (WW, iW, OW) => {
```

#### 25. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L126-L129` → after: `L190-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L190-L193) · [Before (L126-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L126-L129)

```diff
-     var ye = He(40954);
-     const be = "openpbrSubsurfaceLayerData",
-       Me = "var subsurface_weight: f32=uniforms.vSubsurfaceWeight;var subsurface_color: vec3f=uniforms.vSubsurfaceColor.rgb;var subsurface_radius: f32=uniforms.vSubsurfaceRadius;var subsurface_radius_scale: vec3f=uniforms.vSubsurfaceRadiusScale;var subsurface_scatter_anisotropy:  … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "meshUboDeclaration",
+       NW = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 26. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L135` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L199) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L135)

```diff
-   64376: (ee, ie, He) => {
+   54586: (WW, iW, OW) => {
```

#### 27. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L137` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L201) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L137)

```diff
-       b: () => Ke
+       d: () => PW
```

#### 28. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L139-L142` → after: `L203-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L203-L206) · [Before (L139-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L139-L142)

```diff
-     var ye = He(40954);
-     const be = "openpbrTransmissionLayerData",
-       Me = "var transmission_weight: f32=uniforms.vTransmissionWeight;var transmission_color: vec3f=uniforms.vTransmissionColor.rgb;var transmission_depth: f32=uniforms.vTransmissionDepth;var transmission_scatter: vec3f=uniforms.vTransmissionScatter.rgb;var transmission_scatter_a … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "objectIdFunctions",
+       NW = "fn encodeObjectId(objectId: f32)->vec4f {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4f(objectId/255.0,0.0,0.0,1.0);\n#else\nlet id=i32(objectId);let encodedId=vec3f(\nf32((id>>16) & 0xFF),\nf32((id>>8) & 0xFF),\nf32(id & 0xFF)\n)/255.0;return vec4f(encodedId,select(0.0, … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 29. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L148` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L212) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L148)

```diff
-   64222: (ee, ie, He) => {
+   54592: (WW, iW, OW) => {
```

#### 30. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L152-L155` → after: `L216-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L216-L219) · [Before (L152-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L152-L155)

```diff
-     var ye = He(40954);
-     const be = "pbrFragmentReflectionDeclaration",
-       Me = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\nvar reflectionSamplerSampler: sampler;var reflectionSampler: texture_cube<f32>;\n#ifdef LODBASEDMICROSFURACE\n#else\nvar reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_cube<f32>;var reflectionHighSamp … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "oitDeclaration",
+       NW = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#define MAX_DEPTH 99999.0\nvar oitDepthSamplerSampler: sampler;var oitDepthSampler: texture_2d<f32>;var oitFrontColorSamplerSampler: sampler;var oitFrontColorSampler: texture_2d<f32>;\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 31. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L161` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L225) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L161)

```diff
-   64284: (ee, ie, He) => {
+   54702: (WW, iW, OW) => {
```

#### 32. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L165-L168` → after: `L229-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L229-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L229-L232) · [Before (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L165-L168)

```diff
-     var ye = He(40954);
-     const be = "pbrIBLFunctions",
-       Me = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfn getLodFromAlphaG(cubeMapDimensionPixels: f32,microsurfaceAverageSlope: f32)->f32 {var microsurfaceAverageSlopeTexels: f32=cubeMapDimensionPixels*microsurfaceAverageSlope;var lod: f32=log2(microsurfaceAverageSlopeTe … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "oitFragment",
+       NW = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nvar fragDepth: f32=fragmentInputs.position.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nvar halfFloat: u32=pack2x16float( vec2f(fragDepth));var full: vec2f=unpack2x16float(halfFloat);fragDepth=full.x;\n#endif\nvar fragCoord … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 33. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L174` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L238) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L174)

```diff
-   45677: (ee, ie, He) => {
+   54588: (WW, iW, OW) => {
```

#### 34. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L176` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L240) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L176)

```diff
-       c: () => Ke
+       b: () => PW
```

#### 35. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L178` → after: `L242-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L242-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L242-L256) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L178)

```diff
-     var ye = He(40954);
+     var mW = OW(41392);
+     OW(54586);
+     const EW = "prePassDeclaration",
+       NW = "#ifdef PREPASS\n#ifndef PREPASS_CUSTOM_VARYINGS\n#ifdef PREPASS_LOCAL_POSITION\nvarying vPosition : vec3f;\n#endif\n#ifdef PREPASS_DEPTH\nvarying vViewPos: vec3f;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvarying vNormViewDepth: f32;\n#endif\n#if (defined(PREPASS … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54618: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
```

#### 36. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L181` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L259) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L181)

```diff
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 37. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L187` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L265) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L187)

```diff
-   45670: (ee, ie, He) => {
+   54616: (WW, iW, OW) => {
```

#### 38. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L191` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L269) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L191)

```diff
-     var ye = He(40954);
+     var mW = OW(41392);
```

#### 39. `bundles/bloxd.io/chunks/js/657.js` (Changed code · before: `L194-L227` → after: `L272-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c67b52182e18572886febf7109cdf4e21781135cba60b76c61d513400818adf1) · [After (L272-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/657.js#L272-L298) · [Before (L194-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/657.js#L194-L227)

```diff
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
-     }
-   },
-   64400: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       geometryPixelShaderWGSL: () => te
-     });
-     var ye = He(40954),
-       be = He(45630),
-       Me = He(45711),
-       Ke = He(45696),
-       Ue = He(45670),
-       Fe = He(45703),
- ... (18 more removed lines; see GitHub link above)
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54610: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "shadowsFragmentFunctions",
+       NW = "#ifdef SHADOWS\n#ifndef SHADOWFLOAT\nfn unpack(color: vec4f)->f32\n{const bit_shift: vec4f= vec4f(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}\n#endif\nfn computeFallOff(value: f32,clipSpace: vec2f,frustumEdgeFalloff: f32)->f3 … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+ ... (11 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/658.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/658.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43)

#### 1. `bundles/bloxd.io/chunks/js/658.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/658.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/658.js#L4)

```diff
-   45725: (ee, ie, He) => {
+   54655: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/658.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/658.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/658.js#L6)

```diff
-       c: () => Ke
+       b: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/658.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/658.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/658.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "bumpFragment",
-       Me = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "clipPlaneFragment",
+       NW = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 4. `bundles/bloxd.io/chunks/js/658.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/658.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/658.js#L17)

```diff
-   45703: (ee, ie, He) => {
+   54641: (WW, iW, OW) => {
```

#### 5. `bundles/bloxd.io/chunks/js/658.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/658.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/658.js#L19)

```diff
-       e: () => Ke
+       d: () => PW
```

#### 6. `bundles/bloxd.io/chunks/js/658.js` (Changed code · before: `L21-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/658.js#L21-L24) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/658.js#L21-L25)

```diff
-     var ye = He(40954);
-     He(45670);
-     const be = "bumpFragmentFunctions",
-       Me = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "clipPlaneFragmentDeclaration",
+       NW = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 7. `bundles/bloxd.io/chunks/js/658.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/658.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/658.js#L31)

```diff
-   45696: (ee, ie, He) => {
+   54691: (WW, iW, OW) => {
```

#### 8. `bundles/bloxd.io/chunks/js/658.js` (Changed code · before: `L33` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/658.js#L32) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/658.js#L33)

```diff
-       c: () => Ke
+       b: () => PW
```

#### 9. `bundles/bloxd.io/chunks/js/658.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/658.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/658.js#L35-L38)

```diff
-     var ye = He(40954);
-     const be = "bumpFragmentMainFunctions",
-       Me = "#ifndef TEXRD_DEFINED\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);}\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(N … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "fogFragment",
+       NW = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 10. `bundles/bloxd.io/chunks/js/658.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/658.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/658.js#L44)

```diff
-   45728: (ee, ie, He) => {
+   54648: (WW, iW, OW) => {
```

#### 11. `bundles/bloxd.io/chunks/js/658.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/658.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/658.js#L48-L51)

```diff
-     var ye = He(40954);
-     const be = "decalFragment",
-       Me = "#ifdef DECAL\nvar decalTempColor=decalColor.rgb;var decalTempAlpha=decalColor.a;\n#ifdef GAMMADECAL\ndecalTempColor=toLinearSpaceVec3(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalTempAlpha=decalColor.a*decalColor.a;\n#endif\nsurfaceAlbedo=mix(surfaceAlbedo … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     const EW = "fogFragmentDeclaration",
+       NW = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 12. `bundles/bloxd.io/chunks/js/658.js` (Changed code · before: `L57` → after: `L56-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43) · [After (L56-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/658.js#L56-L147) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/658.js#L57)

```diff
-   45743: (ee, ie, He) => {
+   54407: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "helperFunctions",
+       NW = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54624: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW
+ ... (76 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/658.js` (Changed code · before: `L61-L64` → after: `L151-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4994a3f64ee59caae8088f21440fcd7b8f7a764998c5252b2f26d100b240f43) · [After (L151-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/658.js#L151-L189) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/658.js#L61-L64)

```diff
-     var ye = He(40954);
-     const be = "lightFragment",
-       Me = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvar diffuse{X}: vec4f=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X})\n{let slic … [truncated]
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     var mW = OW(41392);
+     OW(54586);
+     const EW = "prePassDeclaration",
+       NW = "#ifdef PREPASS\n#ifndef PREPASS_CUSTOM_VARYINGS\n#ifdef PREPASS_LOCAL_POSITION\nvarying vPosition : vec3f;\n#endif\n#ifdef PREPASS_DEPTH\nvarying vViewPos: vec3f;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvarying vNormViewDepth: f32;\n#endif\n#if (defined(PREPASS … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   64432: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       particlesPixelShaderWGSL: () => SW
+     });
+     var mW = OW(41392),
+       EW = OW(54586),
+ ... (23 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/659.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/659.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50d)

#### 1. `bundles/bloxd.io/chunks/js/659.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/659.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/659.js#L4)

```diff
-   45723: (ee, ie, He) => {
+   54655: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/659.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/659.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/659.js#L6)

```diff
-       d: () => Ke
+       b: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/659.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50d) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/659.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/659.js#L8)

```diff
-     var ye = He(40954);
+     var mW = OW(41392);
```

#### 4. `bundles/bloxd.io/chunks/js/659.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50dR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50d) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/659.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/659.js#L11)

```diff
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 5. `bundles/bloxd.io/chunks/js/659.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50d) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/659.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/659.js#L17)

```diff
-   45711: (ee, ie, He) => {
+   54641: (WW, iW, OW) => {
```

#### 6. `bundles/bloxd.io/chunks/js/659.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50dR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50d) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/659.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/659.js#L19)

```diff
-       b: () => Ke
+       d: () => PW
```

#### 7. `bundles/bloxd.io/chunks/js/659.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50d) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/659.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/659.js#L21)

```diff
-     var ye = He(40954);
+     var mW = OW(41392);
```

#### 8. `bundles/bloxd.io/chunks/js/659.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50dR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50d) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/659.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/659.js#L24)

```diff
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 9. `bundles/bloxd.io/chunks/js/659.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50d) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/659.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/659.js#L30)

```diff
-   45754: (ee, ie, He) => {
+   54691: (WW, iW, OW) => {
```

#### 10. `bundles/bloxd.io/chunks/js/659.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50dR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50d) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/659.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/659.js#L32)

```diff
-       e: () => Ke
+       b: () => PW
```

#### 11. `bundles/bloxd.io/chunks/js/659.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50dR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50d) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/659.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/659.js#L34)

```diff
-     var ye = He(40954);
+     var mW = OW(41392);
```

#### 12. `bundles/bloxd.io/chunks/js/659.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50dR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50d) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/659.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/659.js#L37)

```diff
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 13. `bundles/bloxd.io/chunks/js/659.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50dR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50d) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/659.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/659.js#L43)

```diff
-   45719: (ee, ie, He) => {
+   54648: (WW, iW, OW) => {
```

#### 14. `bundles/bloxd.io/chunks/js/659.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50dR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50d) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/659.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/659.js#L47)

```diff
-     var ye = He(40954);
+     var mW = OW(41392);
```

#### 15. `bundles/bloxd.io/chunks/js/659.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50dR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50d) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/659.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/659.js#L50)

```diff
-     ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
```

#### 16. `bundles/bloxd.io/chunks/js/659.js` (Changed code · before: `L56` → after: `L56-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50dR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50d) · [After (L56-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/659.js#L56-L95) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/659.js#L56)

```diff
-   45772: (ee, ie, He) => {
+   54407: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "helperFunctions",
+       NW = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54478: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+ ... (24 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/659.js` (Changed code · before: `L58` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50dR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50d) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/659.js#L97) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/659.js#L58)

```diff
-       colorPixelShaderWGSL: () => Re
+       skyPixelShaderWGSL: () => UW
```

#### 18. `bundles/bloxd.io/chunks/js/659.js` (Changed code · before: `L60-L69` → after: `L99-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50dR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-193958bbfbfc6eb6de36d31f25a31e827d38c366cd8e75bbd50507bf570fb50d) · [After (L99-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/659.js#L99-L118) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/659.js#L60-L69)

```diff
-     var ye = He(40954),
-       be = He(45711),
-       Me = He(45719),
-       Ke = He(45723),
-       Ue = He(45754);
-     const Fe = "colorPixelShader",
-       Je = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\ … [truncated]
-     ye.d.ShadersStoreWGSL[Fe] || (ye.d.ShadersStoreWGSL[Fe] = Je);
-     const oe = [be.b, Me.d, Ke.d, Ue.e];
-     for (const ke of oe) ye.d.IncludesShadersStoreWGSL[ke.name] || (ye.d.IncludesShadersStoreWGSL[ke.name] = ke.shader);
+     var mW = OW(41392),
+       EW = OW(54641),
+       NW = OW(54478),
+       PW = OW(54648),
+       LW = OW(54407),
+       cW = OW(54655),
+       wW = OW(54682),
+       tW = OW(54691);
+     const ZW = "imageProcessingCompatibility",
+       xW = "#ifdef IMAGEPROCESSINGPOSTPROCESS\nfragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb, vec3f(2.2)),fragmentOutputs.color.a);\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[ZW] || (mW.c.IncludesShadersStoreWGSL[ZW] = xW);
+     const lW = {
+         name: ZW,
+         shader: xW
+       },
+       AW = "skyPixelShader",
+ ... (4 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/660.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/660.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-deaaae668e29196a20874339b7bd8b2aab5c138fccc038c4797629bebda677e2)

#### 1. `bundles/bloxd.io/chunks/js/660.js` (Changed code · before: `L4-L6` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-deaaae668e29196a20874339b7bd8b2aab5c138fccc038c4797629bebda677e2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-deaaae668e29196a20874339b7bd8b2aab5c138fccc038c4797629bebda677e2) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/660.js#L4-L14) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/660.js#L4-L6)

```diff
-   45768: (ee, ie, He) => {
-     function ye(ee) {
-       return Math.floor(ee / 8)
+   54407: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "helperFunctions",
+       NW = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
```

#### 2. `bundles/bloxd.io/chunks/js/660.js` (Changed code · before: `L8-L13` → after: `L16-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-deaaae668e29196a20874339b7bd8b2aab5c138fccc038c4797629bebda677e2R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-deaaae668e29196a20874339b7bd8b2aab5c138fccc038c4797629bebda677e2) · [After (L16-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/660.js#L16-L19) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/660.js#L8-L13)

```diff
- 
-     function be(ee) {
-       return 1 << ee % 8
-     }
-     He.d(ie, {
-       OptimizeIndices: () => Ke
+   },
+   64519: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       rgbdDecodePixelShaderWGSL: () => cW
```

#### 3. `bundles/bloxd.io/chunks/js/660.js` (Changed code · before: `L15-L63` → after: `L21-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-deaaae668e29196a20874339b7bd8b2aab5c138fccc038c4797629bebda677e2R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-deaaae668e29196a20874339b7bd8b2aab5c138fccc038c4797629bebda677e2) · [After (L21-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/660.js#L21-L30) · [Before (L15-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/660.js#L15-L63)

```diff
-     class Me {
-       constructor(ee) {
-         this.size = ee, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
-       }
-       get(ee) {
-         if (ee >= this.size) throw new RangeError("Bit index out of range");
-         const ie = ye(ee),
-           He = be(ee);
-         return 0 !== (this._byteArray[ie] & He)
-       }
-       set(ee, ie) {
-         if (ee >= this.size) throw new RangeError("Bit index out of range");
-         const He = ye(ee),
-           Me = be(ee);
-         ie ? this._byteArray[He] |= Me : this._byteArray[He] &= ~Me
-       }
- ... (33 more removed lines; see GitHub link above)
+     var mW = OW(41392),
+       EW = OW(54407);
+     const NW = "rgbdDecodePixelShader",
+       PW = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(t … [truncated]
+     mW.c.ShadersStoreWGSL[NW] || (mW.c.ShadersStoreWGSL[NW] = PW);
+     const LW = [EW.e];
+     for (const wW of LW) mW.c.IncludesShadersStoreWGSL[wW.name] || (mW.c.IncludesShadersStoreWGSL[wW.name] = wW.shader);
+     const cW = {
+       name: NW,
+       shader: PW
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/661.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/661.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5947999ca255c38d160d3599501fe7f5968bf965640388a96be073cc267c1a53)

#### 1. `bundles/bloxd.io/chunks/js/661.js` (Changed code · before: `L4-L5` → after: `L4-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5947999ca255c38d160d3599501fe7f5968bf965640388a96be073cc267c1a53R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5947999ca255c38d160d3599501fe7f5968bf965640388a96be073cc267c1a53) · [After (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/661.js#L4-L17) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/661.js#L4-L5)

```diff
-   63827: (ee, ie, He) => {
-     var ye;
+   54407: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "helperFunctions",
+       NW = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   64545: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/661.js` (Changed code · before: `L7-L11` → after: `L19-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5947999ca255c38d160d3599501fe7f5968bf965640388a96be073cc267c1a53R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5947999ca255c38d160d3599501fe7f5968bf965640388a96be073cc267c1a53) · [After (L19-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/661.js#L19-L31) · [Before (L7-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/661.js#L7-L11)

```diff
-         ShaderLanguage: () => ye
-       }),
-       function(ee) {
-         ee[ee.GLSL = 0] = "GLSL", ee[ee.WGSL = 1] = "WGSL"
-       }(ye || (ye = {}))
+       rgbdEncodePixelShaderWGSL: () => cW
+     });
+     var mW = OW(41392),
+       EW = OW(54407);
+     const NW = "rgbdEncodePixelShader",
+       PW = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSa … [truncated]
+     mW.c.ShadersStoreWGSL[NW] || (mW.c.ShadersStoreWGSL[NW] = PW);
+     const LW = [EW.e];
+     for (const wW of LW) mW.c.IncludesShadersStoreWGSL[wW.name] || (mW.c.IncludesShadersStoreWGSL[wW.name] = wW.shader);
+     const cW = {
+       name: NW,
+       shader: PW
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/662.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/662.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35bf68dd4af928a4e859a24748ea2bc1f8ed96eca6816ba76c36f3bf8db0b3b1)

#### 1. `bundles/bloxd.io/chunks/js/662.js` (Changed code · before: `L4` → after: `L4-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35bf68dd4af928a4e859a24748ea2bc1f8ed96eca6816ba76c36f3bf8db0b3b1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35bf68dd4af928a4e859a24748ea2bc1f8ed96eca6816ba76c36f3bf8db0b3b1) · [After (L4-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/662.js#L4-L147) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/662.js#L4)

```diff
-   63834: (ee, ie, He) => {
+   54524: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "bakedVertexAnimation",
+       NW = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54413: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+ ... (128 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/662.js` (Changed code · before: `L6` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35bf68dd4af928a4e859a24748ea2bc1f8ed96eca6816ba76c36f3bf8db0b3b1R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35bf68dd4af928a4e859a24748ea2bc1f8ed96eca6816ba76c36f3bf8db0b3b1) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/662.js#L149) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/662.js#L6)

```diff
-       postprocessVertexShader: () => Ke
+       colorVertexShaderWGSL: () => kW
```

#### 3. `bundles/bloxd.io/chunks/js/662.js` (Changed code · before: `L8-L11` → after: `L151-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35bf68dd4af928a4e859a24748ea2bc1f8ed96eca6816ba76c36f3bf8db0b3b1R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35bf68dd4af928a4e859a24748ea2bc1f8ed96eca6816ba76c36f3bf8db0b3b1) · [After (L151-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/662.js#L151-L167) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/662.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "postprocessVertexShader",
-       Me = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
-     ye.d.ShadersStore[be] || (ye.d.ShadersStore[be] = Me);
+     var mW = OW(41392),
+       EW = OW(54409),
+       NW = OW(54413),
+       PW = OW(54450),
+       LW = OW(54459),
+       cW = OW(54416),
+       wW = OW(54509),
+       tW = OW(54517),
+       ZW = OW(54524),
+       xW = OW(54555),
+       lW = OW(54558),
+       AW = OW(54568);
+     const bW = "colorVertexShader",
+       jW = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#ifdef FOG\nuniform view: mat4x4f;\n#endif\n#i … [truncated]
+     mW.c.ShadersStoreWGSL[bW] || (mW.c.ShadersStoreWGSL[bW] = jW);
+     const UW = [EW.d, NW.c, PW.b, LW.b, cW.e, wW.c, tW.e, ZW.e, xW.d, lW.c, AW.d];
+ ... (1 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/663.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/663.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1b36f027d2a50414fbd6d8518499dca2a075cabbbb89df1e0d2d5e9b3f554ca)

#### 1. `bundles/bloxd.io/chunks/js/663.js` (Changed code · before: `L4` → after: `L4-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1b36f027d2a50414fbd6d8518499dca2a075cabbbb89df1e0d2d5e9b3f554caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1b36f027d2a50414fbd6d8518499dca2a075cabbbb89df1e0d2d5e9b3f554ca) · [After (L4-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/663.js#L4-L57) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/663.js#L4)

```diff
-   63846: (ee, ie, He) => {
+   54552: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "bumpVertex",
+       NW = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54443: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+ ... (38 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/663.js` (Changed code · before: `L6` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1b36f027d2a50414fbd6d8518499dca2a075cabbbb89df1e0d2d5e9b3f554caR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1b36f027d2a50414fbd6d8518499dca2a075cabbbb89df1e0d2d5e9b3f554ca) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/663.js#L59) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/663.js#L6)

```diff
-       WorldCodeAiOutOfUsage: () => Ue
+       pbrVertexShaderWGSL: () => qW
```

#### 3. `bundles/bloxd.io/chunks/js/663.js` (Changed code · before: `L8-L30` → after: `L61-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1b36f027d2a50414fbd6d8518499dca2a075cabbbb89df1e0d2d5e9b3f554caR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c1b36f027d2a50414fbd6d8518499dca2a075cabbbb89df1e0d2d5e9b3f554ca) · [After (L61-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/663.js#L61-L105) · [Before (L8-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/663.js#L8-L30)

```diff
-     var ye = He(1127),
-       be = He(2397),
-       Me = He(1438),
-       Ke = He(1228);
- 
-     function Ue(ee) {
-       let {
-         onGetSuperRank: ie
-       } = ee;
-       const {
-         t: He
-       } = (0, ye.v)(), Ue = (0, be.n)(Date.now()), Fe = He(Ue.nameKey);
-       return (0, Ke.jsxs)("div", {
-         className: "WorldCodeAiOutOfUsage",
-         children: [(0, Ke.jsx)("p", {
-           className: "WorldCodeAiOutOfUsageText",
- ... (7 more removed lines; see GitHub link above)
+     var mW = OW(41392),
+       EW = OW(54392),
+       NW = OW(54394),
+       PW = OW(64774),
+       LW = OW(54405),
+       cW = OW(54432),
+       wW = OW(54407),
+       tW = OW(64779),
+       ZW = OW(54409),
+       xW = OW(54413),
+       lW = OW(54416),
+       AW = OW(54424),
+       bW = OW(54435),
+       jW = OW(64786),
+       UW = OW(54443),
+       kW = OW(54450),
+ ... (29 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/664.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/664.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be961f7deccca76cd1123a467214f5fb9c0edf868e3a22bc91385cb718c6abac)

#### 1. `bundles/bloxd.io/chunks/js/664.js` (Changed code · before: `L4` → after: `L4-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be961f7deccca76cd1123a467214f5fb9c0edf868e3a22bc91385cb718c6abacR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be961f7deccca76cd1123a467214f5fb9c0edf868e3a22bc91385cb718c6abac) · [After (L4-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/664.js#L4-L82) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/664.js#L4)

```diff
-   63864: (ee, ie, He) => {
+   54555: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "clipPlaneVertex",
+       NW = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54450: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+ ... (63 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/664.js` (Changed code · before: `L6` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be961f7deccca76cd1123a467214f5fb9c0edf868e3a22bc91385cb718c6abacR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be961f7deccca76cd1123a467214f5fb9c0edf868e3a22bc91385cb718c6abac) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/664.js#L84) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/664.js#L6)

```diff
-       particlesPixelShader: () => ge
+       particlesVertexShaderWGSL: () => lW
```

#### 3. `bundles/bloxd.io/chunks/js/664.js` (Changed code · before: `L8-L31` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be961f7deccca76cd1123a467214f5fb9c0edf868e3a22bc91385cb718c6abacR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be961f7deccca76cd1123a467214f5fb9c0edf868e3a22bc91385cb718c6abac) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/664.js#L86-L97) · [Before (L8-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/664.js#L8-L31)

```diff
-     var ye = He(40954),
-       be = He(45277),
-       Me = He(45283),
-       Ke = He(45380),
-       Ue = He(45345),
-       Fe = He(45186),
-       Je = He(45105),
-       oe = He(45351),
-       Re = He(45388),
-       ke = He(45396),
-       qe = He(45420),
-       fe = He(45422);
-     const Te = "geometryRenderingFragment",
-       pe = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nfloat geometryCoverage=geometryColor.a>0.4 ? 1.0 : 0.0;\n#ifdef PREPASS_COLOR\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_COLOR_INDEX,geometryColor);\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_I … [truncated]
-     ye.d.IncludesShadersStore[Te] || (ye.d.IncludesShadersStore[Te] = pe);
-     const Xe = {
- ... (8 more removed lines; see GitHub link above)
+     var mW = OW(41392),
+       EW = OW(54450),
+       NW = OW(54459),
+       PW = OW(54478),
+       LW = OW(54555),
+       cW = OW(54558),
+       wW = OW(54572);
+     const tW = "particlesVertexShader",
+       ZW = "attribute position: vec3f;attribute color: vec4f;attribute angle: f32;attribute size: vec2f;\n#ifdef ANIMATESHEET\nattribute cellIndex: f32;\n#endif\n#ifndef BILLBOARD\nattribute direction: vec3f;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute direction: vec3f;\n#endif … [truncated]
+     mW.c.ShadersStoreWGSL[tW] || (mW.c.ShadersStoreWGSL[tW] = ZW);
+     const xW = [EW.b, NW.b, PW.c, LW.d, cW.c, wW.b];
+     for (const AW of xW) mW.c.IncludesShadersStoreWGSL[AW.name] || (mW.c.IncludesShadersStoreWGSL[AW.name] = AW.shader);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/665.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/665.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f2d6744010d98d307b33c8fcfac9553820e8c7bd8754b2f22de437711dd80f29)

#### 1. `bundles/bloxd.io/chunks/js/665.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f2d6744010d98d307b33c8fcfac9553820e8c7bd8754b2f22de437711dd80f29R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f2d6744010d98d307b33c8fcfac9553820e8c7bd8754b2f22de437711dd80f29) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/665.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/665.js#L4)

```diff
-   63892: (ee, ie, He) => {
+   54555: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/665.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f2d6744010d98d307b33c8fcfac9553820e8c7bd8754b2f22de437711dd80f29R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f2d6744010d98d307b33c8fcfac9553820e8c7bd8754b2f22de437711dd80f29) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/665.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/665.js#L6)

```diff
-       allocateF64Mat4: () => be
+       d: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/665.js` (Changed code · before: `L8-L11` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f2d6744010d98d307b33c8fcfac9553820e8c7bd8754b2f22de437711dd80f29R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f2d6744010d98d307b33c8fcfac9553820e8c7bd8754b2f22de437711dd80f29) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/665.js#L8-L14) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/665.js#L8-L11)

```diff
-     var ye = He(44918);
- 
-     function be() {
-       return new ye.f(16)
+     var mW = OW(41392);
+     const EW = "clipPlaneVertex",
+       NW = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
```

#### 4. `bundles/bloxd.io/chunks/js/665.js` (Changed code · before: `L13` → after: `L16-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f2d6744010d98d307b33c8fcfac9553820e8c7bd8754b2f22de437711dd80f29R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f2d6744010d98d307b33c8fcfac9553820e8c7bd8754b2f22de437711dd80f29) · [After (L16-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/665.js#L16-L101) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/665.js#L13)

```diff
-     be["@@MAT4_STORAGE_F64@@"] = !0
+   },
+   54450: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "clipPlaneVertexDeclaration",
+       NW = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54558: (WW, iW, OW) => {
+     OW.d(iW, {
+ ... (70 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/666.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/666.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8bd17fa6c6d33d9ed9f8ec6e6701430d1dffd93210e06b824411f0a4dfe6c878)

#### 1. `bundles/bloxd.io/chunks/js/666.js` (Changed code · before: `L4` → after: `L4-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8bd17fa6c6d33d9ed9f8ec6e6701430d1dffd93210e06b824411f0a4dfe6c878R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8bd17fa6c6d33d9ed9f8ec6e6701430d1dffd93210e06b824411f0a4dfe6c878) · [After (L4-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/666.js#L4-L200) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/666.js#L4)

```diff
-   63895: (ee, ie, He) => {
+   54660: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "bumpFragment",
+       NW = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54639: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+ ... (181 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/666.js` (Changed code · before: `L6-L57` → after: `L202-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8bd17fa6c6d33d9ed9f8ec6e6701430d1dffd93210e06b824411f0a4dfe6c878R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8bd17fa6c6d33d9ed9f8ec6e6701430d1dffd93210e06b824411f0a4dfe6c878) · [After (L202-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/666.js#L202-L230) · [Before (L6-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/666.js#L6-L57)

```diff
-       applyLightFoOffset: () => Ke,
-       getFloatingOriginOffset: () => be,
-       lightFoVersion: () => Me,
-       wrapRenderableForFO: () => Ue
-     });
-     var ye = He(44924);
- 
-     function be(ee) {
-       const ie = ee.camera;
-       if (!ie) return {
-         x: 0,
-         y: 0,
-         z: 0
-       };
-       const He = ie.worldMatrix;
-       return {
- ... (36 more removed lines; see GitHub link above)
+       geometryPixelShaderWGSL: () => TW
+     });
+     var mW = OW(41392),
+       EW = OW(54586),
+       NW = OW(54641),
+       PW = OW(54635),
+       LW = OW(54616),
+       cW = OW(54639),
+       wW = OW(54407),
+       tW = OW(64807),
+       ZW = OW(54392),
+       xW = OW(64779),
+       lW = OW(64971),
+       AW = OW(64872),
+       bW = OW(54618),
+       jW = OW(64980),
+ ... (13 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/667.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/667.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c0c30e781ec02154a81fc92bcd6fb0609b6a4d87da05581a0317f18a01aa636a)

#### 1. `bundles/bloxd.io/chunks/js/667.js` (Changed code · before: `L4-L9` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c0c30e781ec02154a81fc92bcd6fb0609b6a4d87da05581a0317f18a01aa636aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c0c30e781ec02154a81fc92bcd6fb0609b6a4d87da05581a0317f18a01aa636a) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/667.js#L4-L14) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/667.js#L4-L9)

```diff
-   63902: (ee, ie, He) => {
-     function ye(ee, ie, He, ye, be, Me, Ke) {
-       const Ue = ie,
-         Fe = ye,
-         Je = He;
-       ee[Je + 0] = Ue[Fe + 0], ee[Je + 1] = Ue[Fe + 1], ee[Je + 2] = Ue[Fe + 2], ee[Je + 3] = Ue[Fe + 3], ee[Je + 4] = Ue[Fe + 4], ee[Je + 5] = Ue[Fe + 5], ee[Je + 6] = Ue[Fe + 6], ee[Je + 7] = Ue[Fe + 7], ee[Je + 8] = Ue[Fe + 8], ee[Je + 9] = Ue[Fe + 9], ee[Je + 10] = Ue[Fe + 10 … [truncated]
+   54660: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "bumpFragment",
+       NW = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
```

#### 2. `bundles/bloxd.io/chunks/js/667.js` (Changed code · before: `L11-L18` → after: `L16-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c0c30e781ec02154a81fc92bcd6fb0609b6a4d87da05581a0317f18a01aa636aR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c0c30e781ec02154a81fc92bcd6fb0609b6a4d87da05581a0317f18a01aa636a) · [After (L16-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/667.js#L16-L28) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/667.js#L11-L18)

```diff
- 
-     function be(ee) {
-       return (ie, He, be, Me) => {
-         const Ke = ee.camera;
-         if (!Ke) return void ye(ie, He, be, Me, 0, 0, 0);
-         const Ue = Ke.worldMatrix;
-         ye(ie, He, be, Me, Ue[12], Ue[13], Ue[14])
-       }
+   },
+   54639: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW
+     });
+     var mW = OW(41392);
+     OW(54616);
+     const EW = "bumpFragmentFunctions",
+       NW = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
```

#### 3. `bundles/bloxd.io/chunks/js/667.js` (Changed code · before: `L20-L23` → after: `L30-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c0c30e781ec02154a81fc92bcd6fb0609b6a4d87da05581a0317f18a01aa636aR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c0c30e781ec02154a81fc92bcd6fb0609b6a4d87da05581a0317f18a01aa636a) · [After (L30-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/667.js#L30-L68) · [Before (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/667.js#L20-L23)

```diff
-     He.r(ie), He.d(ie, {
-       makePackMeshWorld: () => be,
-       packMat4IntoF32WithOffset: () => ye
-     })
+   },
+   54635: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "bumpFragmentMainFunctions",
+       NW = "#ifndef TEXRD_DEFINED\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);}\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(N … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
+   },
+   54664: (WW, iW, OW) => {
+     OW.d(iW, {
+ ... (23 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/668.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/668.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-06b0ffe09c298cd7d9fc58337c2e354da869f4f0477b071a9e4ecde90c07c910)

#### 1. `bundles/bloxd.io/chunks/js/668.js` (Changed code · before: `L4-L6` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-06b0ffe09c298cd7d9fc58337c2e354da869f4f0477b071a9e4ecde90c07c910R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-06b0ffe09c298cd7d9fc58337c2e354da869f4f0477b071a9e4ecde90c07c910) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/668.js#L4-L14) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/668.js#L4-L6)

```diff
-   63906: (ee, ie, He) => {
-     function ye(ee) {
-       return ee.features.has("timestamp-query")
+   54655: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "clipPlaneFragment",
+       NW = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
```

#### 2. `bundles/bloxd.io/chunks/js/668.js` (Changed code · before: `L8-L32` → after: `L16-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-06b0ffe09c298cd7d9fc58337c2e354da869f4f0477b071a9e4ecde90c07c910R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-06b0ffe09c298cd7d9fc58337c2e354da869f4f0477b071a9e4ecde90c07c910) · [After (L16-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/668.js#L16-L27) · [Before (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/668.js#L8-L32)

```diff
- 
-     function be(ee) {
-       return ye(ee) ? {
-         device: ee,
-         markerPipeline: ee.createComputePipeline({
-           layout: "auto",
-           compute: {
-             module: ee.createShaderModule({
-               code: "@compute @workgroup_size(1) fn main() {}"
-             }),
-             entryPoint: "main"
-           }
-         }),
-         querySet: ee.createQuerySet({
-           type: "timestamp",
-           count: 2
- ... (9 more removed lines; see GitHub link above)
+   },
+   54641: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "clipPlaneFragmentDeclaration",
+       NW = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
```

#### 3. `bundles/bloxd.io/chunks/js/668.js` (Changed code · before: `L34-L42` → after: `L29-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-06b0ffe09c298cd7d9fc58337c2e354da869f4f0477b071a9e4ecde90c07c910R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-06b0ffe09c298cd7d9fc58337c2e354da869f4f0477b071a9e4ecde90c07c910) · [After (L29-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/668.js#L29-L40) · [Before (L34-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/668.js#L34-L42)

```diff
- 
-     function Me(ee, ie) {
-       const He = ie.beginComputePass({
-         timestampWrites: {
-           querySet: ee.querySet,
-           beginningOfPassWriteIndex: 0
-         }
-       });
-       He.setPipeline(ee.markerPipeline), He.dispatchWorkgroups(1), He.end()
+   },
+   54691: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "fogFragment",
+       NW = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
```

#### 4. `bundles/bloxd.io/chunks/js/668.js` (Changed code · before: `L44-L52` → after: `L42-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-06b0ffe09c298cd7d9fc58337c2e354da869f4f0477b071a9e4ecde90c07c910R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-06b0ffe09c298cd7d9fc58337c2e354da869f4f0477b071a9e4ecde90c07c910) · [After (L42-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/668.js#L42-L53) · [Before (L44-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/668.js#L44-L52)

```diff
- 
-     function Ke(ee, ie) {
-       const He = ie.beginComputePass({
-         timestampWrites: {
-           querySet: ee.querySet,
-           endOfPassWriteIndex: 1
-         }
-       });
-       He.setPipeline(ee.markerPipeline), He.dispatchWorkgroups(1), He.end()
+   },
+   54648: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "fogFragmentDeclaration",
+       NW = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     mW.c.IncludesShadersStoreWGSL[EW] || (mW.c.IncludesShadersStoreWGSL[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
```

#### 5. `bundles/bloxd.io/chunks/js/668.js` (Changed code · before: `L54-L69` → after: `L55-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-06b0ffe09c298cd7d9fc58337c2e354da869f4f0477b071a9e4ecde90c07c910R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-06b0ffe09c298cd7d9fc58337c2e354da869f4f0477b071a9e4ecde90c07c910) · [After (L55-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/668.js#L55-L72) · [Before (L54-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/668.js#L54-L69)

```diff
- 
-     function Ue(ee) {
-       if (ee.inFlight > 3) return;
-       const ie = ee.device,
-         He = ee.pool.pop() ?? ie.createBuffer({
-           size: 16,
-           usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
-         }),
-         ye = ie.createCommandEncoder();
-       ye.resolveQuerySet(ee.querySet, 0, 2, ee.resolveBuf, 0), ye.copyBufferToBuffer(ee.resolveBuf, 0, He, 0, 16), ie.queue.submit([ye.finish()]), ee.inFlight++, He.mapAsync(GPUMapMode.READ).then((() => {
-         const ie = new BigInt64Array(He.getMappedRange()),
-           ye = Number(ie[1] - ie[0]) / 1e6;
-         ye >= 0 && ye < 5e3 && (ee.lastMs = ee.lastMs > 0 ? .8 * ee.lastMs + .2 * ye : ye), He.unmap(), ee.pool.push(He), ee.inFlight--
-       }), (() => {
-         ee.inFlight--
-       }))
+   },
+   54719: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       colorPixelShaderWGSL: () => ZW
+     });
+     var mW = OW(41392),
+       EW = OW(54641),
+       NW = OW(54648),
+       PW = OW(54655),
+       LW = OW(54691);
+     const cW = "colorPixelShader",
+       wW = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\ … [truncated]
+     mW.c.ShadersStoreWGSL[cW] || (mW.c.ShadersStoreWGSL[cW] = wW);
+     const tW = [EW.d, NW.d, PW.b, LW.b];
+     for (const xW of tW) mW.c.IncludesShadersStoreWGSL[xW.name] || (mW.c.IncludesShadersStoreWGSL[xW.name] = xW.shader);
+     const ZW = {
+ ... (2 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/669.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/669.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0144da34224d8142cc67facf7d1d7f03b0d0d9fa8d41d771c86ff1166d6d85b5)

#### 1. `bundles/bloxd.io/chunks/js/669.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0144da34224d8142cc67facf7d1d7f03b0d0d9fa8d41d771c86ff1166d6d85b5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0144da34224d8142cc67facf7d1d7f03b0d0d9fa8d41d771c86ff1166d6d85b5) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/669.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/669.js#L4-L7)

```diff
-   63910: (ee, ie, He) => {
-     function ye(ee, ie) {
-       for (const He of ee._frameGraph._tasks)
-         if (He?._config && He._colorAttachment && (He._config.rt === ie.scRT || He._config.rst === ie.scRT)) return He
+   54711: (WW, iW, OW) => {
+     function mW(WW) {
+       return Math.floor(WW / 8)
```

#### 2. `bundles/bloxd.io/chunks/js/669.js` (Changed code · before: `L10-L21` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0144da34224d8142cc67facf7d1d7f03b0d0d9fa8d41d771c86ff1166d6d85b5R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0144da34224d8142cc67facf7d1d7f03b0d0d9fa8d41d771c86ff1166d6d85b5) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/669.js#L9-L10) · [Before (L10-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/669.js#L10-L21)

```diff
-     function be(ee, ie) {
-       const He = ee._renderingContexts[ee._renderingContexts.length - 1];
-       if (!He?._frameGraph) return;
-       const be = ye(ie, ee);
-       if (!be) return;
-       if (1 === ee.msaaSamples) return void(be._config.clr = !1);
-       const Me = be.enabled;
-       be._config.clr = !0, be.enabled = !1, ie._beforeRender.unshift((() => {
-         const ie = ye(He, ee),
-           Ke = ie?._config.rst === ee.scRT && ie._config.rt._colorView;
-         be.enabled = !!Ke && Me, be._config.clr = !Ke, Ke && (be._colorAttachment.view = Ke)
-       }))
+     function EW(WW) {
+       return 1 << WW % 8
```

#### 3. `bundles/bloxd.io/chunks/js/669.js` (Changed code · before: `L23-L25` → after: `L12-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0144da34224d8142cc67facf7d1d7f03b0d0d9fa8d41d771c86ff1166d6d85b5R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0144da34224d8142cc67facf7d1d7f03b0d0d9fa8d41d771c86ff1166d6d85b5) · [After (L12-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/669.js#L12-L64) · [Before (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/669.js#L23-L25)

```diff
-     He.r(ie), He.d(ie, {
-       configureSwapchainOverlayScene: () => be
-     })
+     OW.d(iW, {
+       OptimizeIndices: () => PW
+     });
+     class NW {
+       constructor(WW) {
+         this.size = WW, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
+       }
+       get(WW) {
+         if (WW >= this.size) throw new RangeError("Bit index out of range");
+         const iW = mW(WW),
+           OW = EW(WW);
+         return 0 !== (this._byteArray[iW] & OW)
+       }
+       set(WW, iW) {
+         if (WW >= this.size) throw new RangeError("Bit index out of range");
+         const OW = mW(WW),
+ ... (37 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/670.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/670.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-545d1feb143d58271b943b4ecfd6e543b06e3b15f60248ed61ce490a48c25d35)

#### 1. `bundles/bloxd.io/chunks/js/670.js` (Changed code · before: `L4-L75` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-545d1feb143d58271b943b4ecfd6e543b06e3b15f60248ed61ce490a48c25d35R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-545d1feb143d58271b943b4ecfd6e543b06e3b15f60248ed61ce490a48c25d35) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/670.js#L4-L11) · [Before (L4-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/670.js#L4-L75)

```diff
-   63917: (ee, ie, He) => {
-     He.d(ie, {
-       createShadowTask: () => Me
-     });
-     var ye = null;
- 
-     function be(ee) {
-       return ye?.get(ee)
-     }
- 
-     function Me(ee, ie) {
-       const He = new Set;
-       0;
-       const ye = {
-         name: "aR",
-         engine: ee,
- ... (56 more removed lines; see GitHub link above)
+   64402: (WW, iW, OW) => {
+     var mW;
+     OW.r(iW), OW.d(iW, {
+         ShaderLanguage: () => mW
+       }),
+       function(WW) {
+         WW[WW.GLSL = 0] = "GLSL", WW[WW.WGSL = 1] = "WGSL"
+       }(mW || (mW = {}))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/671.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/671.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-75e199d6be53eedb8e5e19140e07a818f13eb9ce85db285da25281480d7c21b0)

#### 1. `bundles/bloxd.io/chunks/js/671.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-75e199d6be53eedb8e5e19140e07a818f13eb9ce85db285da25281480d7c21b0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-75e199d6be53eedb8e5e19140e07a818f13eb9ce85db285da25281480d7c21b0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/671.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/671.js#L4)

```diff
-   63923: (ee, ie, He) => {
+   64405: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/671.js` (Changed code · before: `L6-L9` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-75e199d6be53eedb8e5e19140e07a818f13eb9ce85db285da25281480d7c21b0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-75e199d6be53eedb8e5e19140e07a818f13eb9ce85db285da25281480d7c21b0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/671.js#L6) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/671.js#L6-L9)

```diff
-       A: () => Je,
-       B: () => Re,
-       C: () => oe,
-       X: () => ke
+       postprocessVertexShader: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/671.js` (Changed code · before: `L11-L288` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-75e199d6be53eedb8e5e19140e07a818f13eb9ce85db285da25281480d7c21b0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-75e199d6be53eedb8e5e19140e07a818f13eb9ce85db285da25281480d7c21b0) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/671.js#L8-L14) · [Before (L11-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/671.js#L11-L288)

```diff
-     var ye = He(44904),
-       be = (ee, ie) => ee.order - ie.order;
- 
-     function Me(ee, ie, He) {
-       ee.pendingDisposers.set(ie, He)
-     }
- 
-     function Ke(ee, ie, He) {
-       He && ee.pendingDisposers.get(ie) === He && ee.pendingDisposers.delete(ie)
-     }
-     var Ue = null,
-       Fe = null;
- 
-     function Je(ee, ie, He, ye) {
-       if (!ie || He.material !== ie) return ye ?? Promise.resolve();
-       const be = Re(ee, ie._buildGroup, He);
- ... (262 more removed lines; see GitHub link above)
+     var mW = OW(41392);
+     const EW = "postprocessVertexShader",
+       NW = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     mW.c.ShadersStore[EW] || (mW.c.ShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/672.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/672.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4f10069e53d69995dd39b504d9a9cff5c894b98f9b69bc94bb55b020c0dccce9)

#### 1. `bundles/bloxd.io/chunks/js/672.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4f10069e53d69995dd39b504d9a9cff5c894b98f9b69bc94bb55b020c0dccce9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4f10069e53d69995dd39b504d9a9cff5c894b98f9b69bc94bb55b020c0dccce9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/672.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/672.js#L4)

```diff
-   63952: (ee, ie, He) => {
+   64422: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/672.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4f10069e53d69995dd39b504d9a9cff5c894b98f9b69bc94bb55b020c0dccce9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4f10069e53d69995dd39b504d9a9cff5c894b98f9b69bc94bb55b020c0dccce9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/672.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/672.js#L6)

```diff
-       postprocessVertexShaderWGSL: () => Ke
+       WorldCodeAiOutOfUsage: () => LW
```

#### 3. `bundles/bloxd.io/chunks/js/672.js` (Changed code · before: `L8-L14` → after: `L8-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4f10069e53d69995dd39b504d9a9cff5c894b98f9b69bc94bb55b020c0dccce9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4f10069e53d69995dd39b504d9a9cff5c894b98f9b69bc94bb55b020c0dccce9) · [After (L8-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/672.js#L8-L30) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/672.js#L8-L14)

```diff
-     var ye = He(40954);
-     const be = "postprocessVertexShader",
-       Me = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.posi … [truncated]
-     ye.d.ShadersStoreWGSL[be] || (ye.d.ShadersStoreWGSL[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     var mW = OW(1172),
+       EW = OW(3210),
+       NW = OW(1532),
+       PW = OW(1283);
+ 
+     function LW(WW) {
+       let {
+         onGetSuperRank: iW
+       } = WW;
+       const {
+         t: OW
+       } = (0, mW.B)(), LW = (0, EW.o)(Date.now()), cW = OW(LW.nameKey);
+       return (0, PW.jsxs)("div", {
+         className: "WorldCodeAiOutOfUsage",
+         children: [(0, PW.jsx)("p", {
+           className: "WorldCodeAiOutOfUsageText",
+ ... (7 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/673.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/673.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a234bca836ed4d7ef97ac1783728a583f6c9b1308de6d3a19d098f37383f7470)

#### 1. `bundles/bloxd.io/chunks/js/673.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a234bca836ed4d7ef97ac1783728a583f6c9b1308de6d3a19d098f37383f7470R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a234bca836ed4d7ef97ac1783728a583f6c9b1308de6d3a19d098f37383f7470) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/673.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/673.js#L4)

```diff
-   63965: (ee, ie, He) => {
+   64439: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/673.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a234bca836ed4d7ef97ac1783728a583f6c9b1308de6d3a19d098f37383f7470R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a234bca836ed4d7ef97ac1783728a583f6c9b1308de6d3a19d098f37383f7470) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/673.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/673.js#L6)

```diff
-       lod3DPixelShader: () => Ke
+       particlesPixelShader: () => KW
```

#### 3. `bundles/bloxd.io/chunks/js/673.js` (Changed code · before: `L8-L11` → after: `L8-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a234bca836ed4d7ef97ac1783728a583f6c9b1308de6d3a19d098f37383f7470R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a234bca836ed4d7ef97ac1783728a583f6c9b1308de6d3a19d098f37383f7470) · [After (L8-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/673.js#L8-L31) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/673.js#L8-L11)

```diff
-     var ye = He(40954);
-     const be = "lod3DPixelShader",
-       Me = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(t … [truncated]
-     ye.d.ShadersStore[be] || (ye.d.ShadersStore[be] = Me);
+     var mW = OW(41392),
+       EW = OW(54254),
+       NW = OW(54257),
+       PW = OW(54343),
+       LW = OW(54308),
+       cW = OW(54166),
+       wW = OW(54093),
+       tW = OW(54314),
+       ZW = OW(54347),
+       xW = OW(54352),
+       lW = OW(54377),
+       AW = OW(54380);
+     const bW = "geometryRenderingFragment",
+       jW = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nfloat geometryCoverage=geometryColor.a>0.4 ? 1.0 : 0.0;\n#ifdef PREPASS_COLOR\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_COLOR_INDEX,geometryColor);\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_I … [truncated]
+     mW.c.IncludesShadersStore[bW] || (mW.c.IncludesShadersStore[bW] = jW);
+     const UW = {
+ ... (8 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/674.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/674.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2ccff150dd71aa24676e288bbf79feaccaf878b6d87c214dfde5a3cff6905148)

#### 1. `bundles/bloxd.io/chunks/js/674.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2ccff150dd71aa24676e288bbf79feaccaf878b6d87c214dfde5a3cff6905148R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2ccff150dd71aa24676e288bbf79feaccaf878b6d87c214dfde5a3cff6905148) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/674.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/674.js#L4-L6)

```diff
-   63972: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       lodCubePixelShader: () => Ke
+   64470: (WW, iW, OW) => {
+     OW.d(iW, {
+       allocateF64Mat4: () => EW
```

#### 2. `bundles/bloxd.io/chunks/js/674.js` (Changed code · before: `L8-L14` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2ccff150dd71aa24676e288bbf79feaccaf878b6d87c214dfde5a3cff6905148R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2ccff150dd71aa24676e288bbf79feaccaf878b6d87c214dfde5a3cff6905148) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/674.js#L8-L11) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/674.js#L8-L14)

```diff
-     var ye = He(40954);
-     const be = "lodCubePixelShader",
-       Me = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)\n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,u … [truncated]
-     ye.d.ShadersStore[be] || (ye.d.ShadersStore[be] = Me);
-     const Ke = {
-       name: be,
-       shader: Me
+     var mW = OW(53896);
+ 
+     function EW() {
+       return new mW.g(16)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/675.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/675.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-80f77804f5ced39042e50827b8396bb42e3b2aa3771679c53ecc3a2c23c81a70)

#### 1. `bundles/bloxd.io/chunks/js/675.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-80f77804f5ced39042e50827b8396bb42e3b2aa3771679c53ecc3a2c23c81a70R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-80f77804f5ced39042e50827b8396bb42e3b2aa3771679c53ecc3a2c23c81a70) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/675.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/675.js#L4)

```diff
-   63978: (ee, ie, He) => {
+   64479: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/675.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-80f77804f5ced39042e50827b8396bb42e3b2aa3771679c53ecc3a2c23c81a70R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-80f77804f5ced39042e50827b8396bb42e3b2aa3771679c53ecc3a2c23c81a70) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/675.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/675.js#L6)

```diff
-       lodPixelShader: () => Ke
+       applyLightFoOffset: () => PW,
+       getFloatingOriginOffset: () => EW,
+       lightFoVersion: () => NW,
+       wrapRenderableForFO: () => LW
```
