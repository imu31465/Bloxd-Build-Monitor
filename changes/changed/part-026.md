# Changed — Bundle Modifications Report (Part 026 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `26 / 69` (**334** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 025](part-025.md) · [Part 027 →](part-027.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/350.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/350.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66)

#### 4. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/350.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/350.js#L17)

```diff
-   42284: (CC, zC, ZC) => {
+   42556: (pp, ip, cp) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L21-L23` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/350.js#L21-L23) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/350.js#L21-L23)

```diff
-     var QC = ZC(39674);
-     const wC = "clipPlaneFragmentDeclaration",
-       bC = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: … [truncated]
+     var Op = cp(40062);
+     const op = "bumpVertexDeclaration",
+       Ip = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/350.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/350.js#L30)

```diff
-   42328: (CC, zC, ZC) => {
+   61754: (pp, ip, cp) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/350.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/350.js#L32)

```diff
-       d: () => nC
+       b: () => Sp
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L34-L36` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/350.js#L34-L36) · [Before (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/350.js#L34-L36)

```diff
-     var QC = ZC(39674);
-     const wC = "fogFragment",
-       bC = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
+     var Op = cp(40062);
+     const op = "harmonicsFunctions",
+       Ip = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/350.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/350.js#L43)

```diff
-   42290: (CC, zC, ZC) => {
+   61741: (pp, ip, cp) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L47-L49` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/350.js#L47-L50) · [Before (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/350.js#L47-L49)

```diff
-     var QC = ZC(39674);
-     const wC = "fogFragmentDeclaration",
-       bC = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: … [truncated]
+     var Op = cp(40062);
+     cp(42496), cp(42498);
+     const op = "pbrUboDeclaration",
+       Ip = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L56` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/350.js#L57) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/350.js#L56)

```diff
-   42359: (CC, zC, ZC) => {
+   61736: (pp, ip, cp) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L58` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/350.js#L59) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/350.js#L58)

```diff
-       colorPixelShaderWGSL: () => WC
+       pbrVertexShaderWGSL: () => gp
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L60-L66` → after: `L61-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L61-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/350.js#L61-L99) · [Before (L60-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/350.js#L60-L66)

```diff
-     var QC = ZC(39674),
-       wC = ZC(42284),
-       bC = ZC(42290),
-       nC = ZC(42296),
-       fC = ZC(42328);
-     const oC = "colorPixelShader",
-       qC = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\ … [truncated]
+     var Op = cp(40062),
+       op = cp(42496),
+       Ip = cp(42498),
+       Sp = cp(61741),
+       xp = cp(42513),
+       Lp = cp(42542),
+       Yp = cp(42520),
+       Dp = cp(61745),
+       Ap = cp(42525),
+       Pp = cp(42527),
+       Wp = cp(42531),
+       yp = cp(42536),
+       Up = cp(42550),
+       wp = cp(61754),
+       vp = cp(42556),
+       tp = cp(42565),
+ ... (23 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/350.js` (Changed code · before: `L68` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffa2fd584786f8d7a0e58c1fb3d37a9605c7fa7bfa492a3e93247ce76db11f66) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/350.js#L101) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/350.js#L68)

```diff
-     const FC = [wC.b, bC.d, nC.b, fC.d];
+     const Fp = [op.e, Ip.e, Sp.d, xp.b, Lp.e, Yp.e, Dp.c, Ap.c, Pp.e, Wp.d, yp.c, Up.e, wp.b, vp.b, tp.c, Hp.c, dp.e, ep.d, jp.e, kp.d, mp.e, Rp.e, qp.d, Mp.c, Cp.b, Ep.b, Xp.c, lp.e, Qp.b, Jp.d, Bp.e, Np.e, Tp.d, fp.b, bp.d, hp.b];
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/351.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/351.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18dee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/351.js` (Changed code · before: `L4-L6` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18deeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18dee) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/351.js#L4-L14) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/351.js#L4-L6)

```diff
-   42347: (CC, zC, ZC) => {
-     function QC(CC) {
-       return Math.floor(CC / 8)
+   42677: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "clipPlaneVertex",
+       Ip = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/351.js` (Changed code · before: `L8-L10` → after: `L16-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18deeR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18dee) · [After (L16-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/351.js#L16-L27) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/351.js#L8-L10)

```diff
- 
-     function wC(CC) {
-       return 1 << CC % 8
+   },
+   42565: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "clipPlaneVertexDeclaration",
+       Ip = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/351.js` (Changed code · before: `L13` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18deeR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18dee) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/351.js#L32) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/351.js#L13)

```diff
-       OptimizeIndices: () => nC
+       d: () => Sp
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/351.js` (Changed code · before: `L15-L30` → after: `L34-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18deeR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18dee) · [After (L34-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/351.js#L34-L40) · [Before (L15-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/351.js#L15-L30)

```diff
-     class bC {
-       constructor(CC) {
-         this.size = CC, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
-       }
-       get(CC) {
-         if (CC >= this.size) throw new RangeError("Bit index out of range");
-         const zC = QC(CC),
-           ZC = wC(CC);
-         return 0 !== (this._byteArray[zC] & ZC)
-       }
-       set(CC, zC) {
-         if (CC >= this.size) throw new RangeError("Bit index out of range");
-         const ZC = QC(CC),
-           bC = wC(CC);
-         zC ? this._byteArray[ZC] |= bC : this._byteArray[ZC] &= ~bC
-       }
+     var Op = cp(40062);
+     const op = "fogVertex",
+       Ip = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/351.js` (Changed code · before: `L32-L63` → after: `L42-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18deeR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0c41b67d37e68ca51674e098c5e4844ba145441862d0acad7821a22c8cb18dee) · [After (L42-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/351.js#L42-L100) · [Before (L32-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/351.js#L32-L63)

```diff
- 
-     function nC(CC) {
-       const zC = [],
-         ZC = CC.length / 3;
-       for (let bC = 0; bC < ZC; bC++) zC.push([CC[3 * bC], CC[3 * bC + 1], CC[3 * bC + 2]]);
-       const QC = new Map;
-       for (let bC = 0; bC < zC.length; bC++) {
-         const CC = zC[bC];
-         for (const zC of CC) {
-           let CC = QC.get(zC);
-           CC || QC.set(zC, CC = []), CC.push(bC)
-         }
-       }
-       const wC = new bC(ZC),
-         nC = [],
-         fC = CC => {
- ... (16 more removed lines; see GitHub link above)
+   },
+   42567: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "fogVertexDeclaration",
+       Ip = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42598: (pp, ip, cp) => {
+     cp.d(ip, {
+ ... (43 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/352.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/352.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/352.js` (Changed code · before: `L4-L5` → after: `L4-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1) · [After (L4-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/352.js#L4-L82) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/352.js#L4-L5)

```diff
-   60932: (CC, zC, ZC) => {
-     var QC;
+   42677: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "clipPlaneVertex",
+       Ip = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42565: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+ ... (63 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/352.js` (Changed code · before: `L7-L11` → after: `L84-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c9c3e72fcc082f624a66ec69a1d82545114639148be750706c79491e998679c1) · [After (L84-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/352.js#L84-L101) · [Before (L7-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/352.js#L7-L11)

```diff
-         ShaderLanguage: () => QC
-       }),
-       function(CC) {
-         CC[CC.GLSL = 0] = "GLSL", CC[CC.WGSL = 1] = "WGSL"
-       }(QC || (QC = {}))
+       skyVertexShaderWGSL: () => Wp
+     });
+     var Op = cp(40062),
+       op = cp(42598),
+       Ip = cp(42565),
+       Sp = cp(42567),
+       xp = cp(42677),
+       Lp = cp(42697),
+       Yp = cp(42680);
+     const Dp = "skyVertexShader",
+       Ap = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying v … [truncated]
+     Op.b.ShadersStoreWGSL[Dp] || (Op.b.ShadersStoreWGSL[Dp] = Ap);
+     const Pp = [op.d, Ip.c, Sp.c, xp.e, Lp.b, Yp.d];
+     for (const yp of Pp) Op.b.IncludesShadersStoreWGSL[yp.name] || (Op.b.IncludesShadersStoreWGSL[yp.name] = yp.shader);
+     const Wp = {
+       name: Dp,
+ ... (2 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/353.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/353.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575)

#### 1. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L4` → after: `L4-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L4-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/353.js#L4-L200) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/353.js#L4)

```diff
-   60938: (CC, zC, ZC) => {
+   42797: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "bumpFragment",
+       Ip = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42777: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+ ... (181 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/353.js` (Changed code · before: `L6-L11` → after: `L202-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-37b4a1da42a704f61b28d17267468a3bae22b347a811a62345a1bf2abcbd8575) · [After (L202-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/353.js#L202-L227) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/353.js#L6-L11)

```diff
-       postprocessVertexShader: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "postprocessVertexShader",
-       bC = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
-     QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
+       geometryPixelShaderWGSL: () => Rp
+     });
+     var Op = cp(40062),
+       op = cp(42711),
+       Ip = cp(42783),
+       Sp = cp(42771),
+       xp = cp(42742),
+       Lp = cp(42777),
+       Yp = cp(42520),
+       Dp = cp(61766),
+       Ap = cp(42496),
+       Pp = cp(61745),
+       Wp = cp(61883),
+       yp = cp(61818),
+       Up = cp(42749),
+       wp = cp(61885),
+ ... (10 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/354.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/354.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/354.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/354.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/354.js#L4-L6)

```diff
-   60953: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       WorldCodeAiOutOfUsage: () => bC
+   42797: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/354.js` (Changed code · before: `L8-L25` → after: `L8-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7e77cc027eab08062c6c432427f485d388ff6aa1b77074cf6a6a4071c6609e7d) · [After (L8-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/354.js#L8-L67) · [Before (L8-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/354.js#L8-L25)

```diff
-     var QC = ZC(1388),
-       wC = ZC(1056);
- 
-     function bC(CC) {
-       let {
-         onGetSuperRank: zC
-       } = CC;
-       return (0, wC.jsxs)("div", {
-         className: "WorldCodeAiOutOfUsage",
-         children: [(0, wC.jsx)("p", {
-           className: "WorldCodeAiOutOfUsageText",
-           children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
-         }), (0, wC.jsx)(QC.o, {
-           className: "WorldCodeAiOutOfUsageButton",
-           onClick: zC,
-           children: "Get Super Rank"
- ... (2 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "bumpFragment",
+       Ip = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(BUMP)\nvar normalScale: f32=uniforms.vBumpInfos.y;\n#else\nvar normalScale: f32=1.0;\n#endif\n#if defined(TA … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42777: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+     });
+     var Op = cp(40062);
+     cp(42742);
+     const op = "bumpFragmentFunctions",
+ ... (44 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/355.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/355.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L4` → after: `L4-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L4-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/355.js#L4-L56) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/355.js#L4)

```diff
-   60961: (CC, zC, ZC) => {
+   42794: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "clipPlaneFragment",
+       Ip = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse  … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   42783: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp
+ ... (37 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L6-L7` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/355.js#L58) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/355.js#L6-L7)

```diff
-       WorldCodeAiDeepSeekNotice: () => nC,
-       deepSeekPrivacyPolicyUrl: () => bC
+       colorPixelShaderWGSL: () => Ap
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/355.js` (Changed code · before: `L9-L28` → after: `L60-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182eeR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9358aa504bdbdb4bc114c7558d531e5f09c4fb99598c5431394a68cdd40182ee) · [After (L60-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/355.js#L60-L72) · [Before (L9-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/355.js#L9-L28)

```diff
-     var QC = ZC(1143),
-       wC = ZC(1056);
-     const bC = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html";
- 
-     function nC() {
-       const {
-         t: CC
-       } = (0, QC.y)();
-       return (0, wC.jsxs)(wC.Fragment, {
-         children: [CC("superBotXd:deepSeekNotice"), " ", (0, wC.jsxs)("a", {
-           className: "WorldCodeAiDeepSeekPolicyLink",
-           href: bC,
-           target: "_blank",
-           rel: "noreferrer noopener",
-           children: [CC("superBotXd:deepSeekPrivacyPolicy"), " ", (0, wC.jsx)("span", {
-             "aria-hidden": "true",
- ... (4 more removed lines; see GitHub link above)
+     var Op = cp(40062),
+       op = cp(42783),
+       Ip = cp(42790),
+       Sp = cp(42794),
+       xp = cp(42825);
+     const Lp = "colorPixelShader",
+       Yp = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\ … [truncated]
+     Op.b.ShadersStoreWGSL[Lp] || (Op.b.ShadersStoreWGSL[Lp] = Yp);
+     const Dp = [op.d, Ip.b, Sp.d, xp.d];
+     for (const Pp of Dp) Op.b.IncludesShadersStoreWGSL[Pp.name] || (Op.b.IncludesShadersStoreWGSL[Pp.name] = Pp.shader);
+     const Ap = {
+       name: Lp,
+       shader: Yp
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/356.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/356.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/356.js` (Changed code · before: `L4-L6` → after: `L4-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7) · [After (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/356.js#L4-L13) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/356.js#L4-L6)

```diff
-   60987: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       particlesPixelShader: () => xC
+   42843: (pp, ip, cp) => {
+     function Op(pp) {
+       return Math.floor(pp / 8)
+     }
+ 
+     function op(pp) {
+       return 1 << pp % 8
+     }
+     cp.d(ip, {
+       OptimizeIndices: () => Sp
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/356.js` (Changed code · before: `L8-L34` → after: `L15-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-385a18ab31836ded987ac648af62fa83f124b8e1b0ba8228582cb59cfb8f8eb7) · [After (L15-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/356.js#L15-L63) · [Before (L8-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/356.js#L8-L34)

```diff
-     var QC = ZC(39674),
-       wC = ZC(41911),
-       bC = ZC(41913),
-       nC = ZC(41996),
-       fC = ZC(41967),
-       oC = ZC(41816),
-       qC = ZC(41726),
-       FC = ZC(41975),
-       WC = ZC(42005),
-       NC = ZC(42013),
-       MC = ZC(42039),
-       gC = ZC(42041);
-     const SC = "geometryRenderingFragment",
-       pC = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nfloat geometryCoverage=geometryColor.a>0.4 ? 1.0 : 0.0;\n#ifdef PREPASS_COLOR\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_COLOR_INDEX,geometryColor);\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_I … [truncated]
-     QC.b.IncludesShadersStore[SC] || (QC.b.IncludesShadersStore[SC] = pC);
-     const PC = {
- ... (11 more removed lines; see GitHub link above)
+     class Ip {
+       constructor(pp) {
+         this.size = pp, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
+       }
+       get(pp) {
+         if (pp >= this.size) throw new RangeError("Bit index out of range");
+         const ip = Op(pp),
+           cp = op(pp);
+         return 0 !== (this._byteArray[ip] & cp)
+       }
+       set(pp, ip) {
+         if (pp >= this.size) throw new RangeError("Bit index out of range");
+         const cp = Op(pp),
+           Ip = op(pp);
+         ip ? this._byteArray[cp] |= Ip : this._byteArray[cp] &= ~Ip
+       }
+ ... (33 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/357.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/357.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e2f7ae1bb39c85453aca90e83900a594c5e3cd1a7dd2c6838a3c873305219eca)

#### 1. `bundles/preprod.bloxd.io/chunks/js/357.js` (Changed code · before: `L4-L13` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e2f7ae1bb39c85453aca90e83900a594c5e3cd1a7dd2c6838a3c873305219ecaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e2f7ae1bb39c85453aca90e83900a594c5e3cd1a7dd2c6838a3c873305219eca) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/357.js#L4-L11) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/357.js#L4-L13)

```diff
-   61010: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       allocateF64Mat4: () => wC
-     });
-     var QC = ZC(41532);
- 
-     function wC() {
-       return new QC.g(16)
-     }
-     wC["@@MAT4_STORAGE_F64@@"] = !0
+   61383: (pp, ip, cp) => {
+     var Op;
+     cp.r(ip), cp.d(ip, {
+         ShaderLanguage: () => Op
+       }),
+       function(pp) {
+         pp[pp.GLSL = 0] = "GLSL", pp[pp.WGSL = 1] = "WGSL"
+       }(Op || (Op = {}))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/358.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/358.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872)

#### 1. `bundles/preprod.bloxd.io/chunks/js/358.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/358.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/358.js#L4)

```diff
-   61016: (CC, zC, ZC) => {
+   61392: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/358.js` (Changed code · before: `L6-L9` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/358.js#L6) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/358.js#L6-L9)

```diff
-       applyLightFoOffset: () => nC,
-       getFloatingOriginOffset: () => wC,
-       lightFoVersion: () => bC,
-       wrapRenderableForFO: () => fC
+       postprocessVertexShader: () => Sp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/358.js` (Changed code · before: `L11-L57` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fbe78b251fa28f7d3857d2d0ccf47f10ab8932b3f01a8e36a621dc5e9a2f2872) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/358.js#L8-L14) · [Before (L11-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/358.js#L11-L57)

```diff
-     var QC = ZC(41543);
- 
-     function wC(CC) {
-       const zC = CC.camera;
-       if (!zC) return {
-         x: 0,
-         y: 0,
-         z: 0
-       };
-       const ZC = zC.worldMatrix;
-       return {
-         x: ZC[12],
-         y: ZC[13],
-         z: ZC[14]
-       }
-     }
- ... (31 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "postprocessVertexShader",
+       Ip = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/359.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/359.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-542b27d74bbb980cdcacae2bd66a0aa3ee32f57682d342cfd467d2780e781122)

#### 1. `bundles/preprod.bloxd.io/chunks/js/359.js` (Changed code · before: `L4-L10` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-542b27d74bbb980cdcacae2bd66a0aa3ee32f57682d342cfd467d2780e781122R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-542b27d74bbb980cdcacae2bd66a0aa3ee32f57682d342cfd467d2780e781122) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/359.js#L4-L9) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/359.js#L4-L10)

```diff
-   61019: (CC, zC, ZC) => {
-     function QC(CC, zC, ZC, QC, wC, bC, nC) {
-       const fC = zC,
-         oC = QC,
-         qC = ZC;
-       CC[qC + 0] = fC[oC + 0], CC[qC + 1] = fC[oC + 1], CC[qC + 2] = fC[oC + 2], CC[qC + 3] = fC[oC + 3], CC[qC + 4] = fC[oC + 4], CC[qC + 5] = fC[oC + 5], CC[qC + 6] = fC[oC + 6], CC[qC + 7] = fC[oC + 7], CC[qC + 8] = fC[oC + 8], CC[qC + 9] = fC[oC + 9], CC[qC + 10] = fC[oC + 10 … [truncated]
-     }
+   61399: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       WorldCodeAiOutOfUsage: () => Ip
+     });
+     var Op = cp(1480),
+       op = cp(1112);
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/359.js` (Changed code · before: `L13-L18` → after: `L12-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-542b27d74bbb980cdcacae2bd66a0aa3ee32f57682d342cfd467d2780e781122R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-542b27d74bbb980cdcacae2bd66a0aa3ee32f57682d342cfd467d2780e781122) · [After (L12-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/359.js#L12-L25) · [Before (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/359.js#L13-L18)

```diff
-       return (zC, ZC, wC, bC) => {
-         const nC = CC.camera;
-         if (!nC) return void QC(zC, ZC, wC, bC, 0, 0, 0);
-         const fC = nC.worldMatrix;
-         QC(zC, ZC, wC, bC, fC[12], fC[13], fC[14])
-       }
+       let {
+         onGetSuperRank: ip
+       } = pp;
+       return (0, op.jsxs)("div", {
+         className: "WorldCodeAiOutOfUsage",
+         children: [(0, op.jsx)("p", {
+           className: "WorldCodeAiOutOfUsageText",
+           children: "You don't have any Super Bot.xd usage left - use Bot.xd or get Super Rank for more usage!"
+         }), (0, op.jsx)(Op.o, {
+           className: "WorldCodeAiOutOfUsageButton",
+           onClick: ip,
+           children: "Get Super Rank"
+         })]
+       })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/360.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/360.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-408e42eb7cbc865914f6c33a4fe86c1b7a1ced105cb6a0ea602de7716b94ccdb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/360.js` (Changed code · before: `L4-L6` → after: `L4-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-408e42eb7cbc865914f6c33a4fe86c1b7a1ced105cb6a0ea602de7716b94ccdbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-408e42eb7cbc865914f6c33a4fe86c1b7a1ced105cb6a0ea602de7716b94ccdb) · [After (L4-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/360.js#L4-L34) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/360.js#L4-L6)

```diff
-   61022: (CC, zC, ZC) => {
-     function QC(CC) {
-       return CC.features.has("timestamp-query")
+   61419: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       particlesPixelShader: () => ep
+     });
+     var Op = cp(40062),
+       op = cp(42362),
+       Ip = cp(42365),
+       Sp = cp(42436),
+       xp = cp(42412),
+       Lp = cp(42266),
+       Yp = cp(42174),
+       Dp = cp(42416),
+       Ap = cp(42443),
+       Pp = cp(42449),
+       Wp = cp(42470),
+       yp = cp(42476);
+ ... (15 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/361.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/361.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cc35dec4e29ff29a044de12fd5e207e2ea963388420f500da7433b23cc7971e6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/361.js` (Changed code · before: `L4-L7` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cc35dec4e29ff29a044de12fd5e207e2ea963388420f500da7433b23cc7971e6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cc35dec4e29ff29a044de12fd5e207e2ea963388420f500da7433b23cc7971e6) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/361.js#L4-L11) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/361.js#L4-L7)

```diff
-   61027: (CC, zC, ZC) => {
-     function QC(CC, zC) {
-       for (const ZC of CC._frameGraph._tasks)
-         if (ZC?._config && ZC._colorAttachment && (ZC._config.rt === zC.scRT || ZC._config.rst === zC.scRT)) return ZC
+   61441: (pp, ip, cp) => {
+     cp.d(ip, {
+       allocateF64Mat4: () => op
+     });
+     var Op = cp(41971);
+ 
+     function op() {
+       return new Op.g(16)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/361.js` (Changed code · before: `L9-L25` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cc35dec4e29ff29a044de12fd5e207e2ea963388420f500da7433b23cc7971e6R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cc35dec4e29ff29a044de12fd5e207e2ea963388420f500da7433b23cc7971e6) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/361.js#L13) · [Before (L9-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/361.js#L9-L25)

```diff
- 
-     function wC(CC, zC) {
-       const ZC = CC._renderingContexts[CC._renderingContexts.length - 1];
-       if (!ZC?._frameGraph) return;
-       const wC = QC(zC, CC);
-       if (!wC) return;
-       if (1 === CC.msaaSamples) return void(wC._config.clr = !1);
-       const bC = wC.enabled;
-       wC._config.clr = !0, wC.enabled = !1, zC._beforeRender.unshift((() => {
-         const zC = QC(ZC, CC),
-           nC = zC?._config.rst === CC.scRT && zC._config.rt._colorView;
-         wC.enabled = !!nC && bC, wC._config.clr = !nC, nC && (wC._colorAttachment.view = nC)
-       }))
-     }
-     ZC.r(zC), ZC.d(zC, {
-       configureSwapchainOverlayScene: () => wC
- ... (1 more removed lines; see GitHub link above)
+     op["@@MAT4_STORAGE_F64@@"] = !0
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/362.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/362.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/362.js` (Changed code · before: `L4-L6` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/362.js#L4-L9) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/362.js#L4-L6)

```diff
-   61031: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       createShadowTask: () => bC
+   61443: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       applyLightFoOffset: () => Sp,
+       getFloatingOriginOffset: () => op,
+       lightFoVersion: () => Ip,
+       wrapRenderableForFO: () => xp
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/362.js` (Changed code · before: `L8` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/362.js#L11) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/362.js#L8)

```diff
-     var QC = null;
+     var Op = cp(41977);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/362.js` (Changed code · before: `L11` → after: `L14-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2) · [After (L14-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/362.js#L14-L29) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/362.js#L11)

```diff
-       return QC?.get(CC)
+       const ip = pp.camera;
+       if (!ip) return {
+         x: 0,
+         y: 0,
+         z: 0
+       };
+       const cp = ip.worldMatrix;
+       return {
+         x: cp[12],
+         y: cp[13],
+         z: cp[14]
+       }
+     }
+ 
+     function Ip(pp) {
+       return pp.camera ? pp.camera.worldMatrixVersion : 0
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/362.js` (Changed code · before: `L15-L68` → after: `L33-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2) · [After (L33-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/362.js#L33-L46) · [Before (L15-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/362.js#L15-L68)

```diff
-       const ZC = new Set;
-       0;
-       const QC = {
-         name: "Zg",
-         engine: CC,
-         sS: zC,
-         _passes: [],
-         async _preload() {
-           const CC = [];
-           for (const ZC of zC.lights) {
-             const zC = ZC.shadowGenerator,
-               QC = zC ? wC(zC) : null;
-             zC?._preloadShadowTask && QC && CC.push(nC(zC, QC))
-           }
-           await Promise.all(CC)
-         },
- ... (38 more removed lines; see GitHub link above)
+       const cp = ip.camera?.worldMatrix;
+       if (!cp) return;
+       const op = cp[12],
+         Ip = cp[13],
+         Sp = cp[14];
+       let xp = 0;
+       for (const Lp of ip.lights) {
+         if (xp >= Op.d) break;
+         if (!Lp._writeLightUbo) continue;
+         const ip = 4 + 16 * xp,
+           cp = pp[ip + 3];
+         if (0 === cp || 2 === cp) {
+           const cp = Lp.worldMatrix;
+           pp[ip] = cp[12] - op, pp[ip + 1] = cp[13] - Ip, pp[ip + 2] = cp[14] - Sp
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/362.js` (Changed code · before: `L70-L71` → after: `L48-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2) · [After (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/362.js#L48-L49) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/362.js#L70-L71)

```diff
-       };
-       return QC
+         xp++
+       }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/362.js` (Changed code · before: `L73-L74` → after: `L51-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-64afa9e6c2dd379578dfbb8db1c58983f43d2cf4e4f96c1bc7ce205226f7cfb2) · [After (L51-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/362.js#L51-L57) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/362.js#L73-L74)

```diff
-     async function nC(CC, zC) {
-       CC._preloadPending = zC, await (CC._preloadShadowTask?.(zC)), CC._preloadPending === zC && (CC._preloadPending = void 0)
+ 
+     function xp(pp, ip, cp) {
+       let Op = -1;
+       return () => {
+         const op = ip.camera ? ip.camera.worldMatrixVersion : -1;
+         op !== Op && (cp(), Op = op), pp()
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/363.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/363.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171ede)

#### 1. `bundles/preprod.bloxd.io/chunks/js/363.js` (Changed code · before: `L4-L68` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171edeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171ede) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/363.js#L4-L9) · [Before (L4-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/363.js#L4-L68)

```diff
-   61035: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       A: () => qC,
-       B: () => WC,
-       C: () => FC,
-       X: () => NC
-     });
-     var QC = ZC(41540),
-       wC = (CC, zC) => CC.order - zC.order;
- 
-     function bC(CC, zC, ZC) {
-       CC.pendingDisposers.set(zC, ZC)
-     }
- 
-     function nC(CC, zC, ZC) {
-       ZC && CC.pendingDisposers.get(zC) === ZC && CC.pendingDisposers.delete(zC)
- ... (49 more removed lines; see GitHub link above)
+   61449: (pp, ip, cp) => {
+     function Op(pp, ip, cp, Op, op, Ip, Sp) {
+       const xp = ip,
+         Lp = Op,
+         Yp = cp;
+       pp[Yp + 0] = xp[Lp + 0], pp[Yp + 1] = xp[Lp + 1], pp[Yp + 2] = xp[Lp + 2], pp[Yp + 3] = xp[Lp + 3], pp[Yp + 4] = xp[Lp + 4], pp[Yp + 5] = xp[Lp + 5], pp[Yp + 6] = xp[Lp + 6], pp[Yp + 7] = xp[Lp + 7], pp[Yp + 8] = xp[Lp + 8], pp[Yp + 9] = xp[Lp + 9], pp[Yp + 10] = xp[Lp + 10 … [truncated]
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/363.js` (Changed code · before: `L72-L257` → after: `L13-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171edeR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171ede) · [After (L13-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/363.js#L13-L17) · [Before (L72-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/363.js#L72-L257)

```diff
-       const zC = {
-           Sg: !1,
-           error: null,
-           active: new Set,
-           chains: new WeakMap,
-           generations: new WeakMap,
-           installed: new WeakMap,
-           installedMeshes: new Set,
-           pendingDisposers: new WeakMap,
-           tail: null
-         },
-         ZC = CC,
-         qC = {
-           queue: (ZC, FC) => {
-             const WC = (zC.generations.get(FC) ?? 0) + 1,
-               NC = FC.material;
- ... (170 more removed lines; see GitHub link above)
+       return (ip, cp, op, Ip) => {
+         const Sp = pp.camera;
+         if (!Sp) return void Op(ip, cp, op, Ip, 0, 0, 0);
+         const xp = Sp.worldMatrix;
+         Op(ip, cp, op, Ip, xp[12], xp[13], xp[14])
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/363.js` (Changed code · before: `L260-L289` → after: `L20-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171edeR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2dcd5789f7a305d814415d7998ae8b247582e5aabdb10978b848ecd23e171ede) · [After (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/363.js#L20-L23) · [Before (L260-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/363.js#L260-L289)

```diff
- 
-     function SC(CC, zC, ZC) {
-       gC(CC, zC, ZC)
-     }
- 
-     function pC(CC, zC, ZC, QC, wC, bC) {
-       return !zC.Sg && zC.generations.get(QC) === bC && CC.meshes.includes(QC) && QC.material === wC && wC._buildGroup === ZC
-     }
- 
-     function PC(CC, zC, ZC, wC) {
-       const bC = CC._meshDisposables.get(ZC);
-       if (bC && bC !== wC) {
-         CC._meshDisposables.delete(ZC);
-         for (const CC of bC) CC()
-       }
-       if (wC)
- ... (14 more removed lines; see GitHub link above)
+     cp.r(ip), cp.d(ip, {
+       makePackMeshWorld: () => op,
+       packMat4IntoF32WithOffset: () => Op
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/364.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/364.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab243eef03507d073e83ff9c7ab69d14629259af11251a85ab5ef0fe6d81582)

#### 1. `bundles/preprod.bloxd.io/chunks/js/364.js` (Changed code · before: `L4` → after: `L4-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab243eef03507d073e83ff9c7ab69d14629259af11251a85ab5ef0fe6d81582R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab243eef03507d073e83ff9c7ab69d14629259af11251a85ab5ef0fe6d81582) · [After (L4-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/364.js#L4-L76) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/364.js#L4)

```diff
-   61047: (CC, zC, ZC) => {
+   61456: (pp, ip, cp) => {
+     function Op(pp) {
+       return pp.features.has("timestamp-query")
+     }
+ 
+     function op(pp) {
+       return Op(pp) ? {
+         device: pp,
+         markerPipeline: pp.createComputePipeline({
+           layout: "auto",
+           compute: {
+             module: pp.createShaderModule({
+               code: "@compute @workgroup_size(1) fn main() {}"
+             }),
+             entryPoint: "main"
+           }
+ ... (57 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/364.js` (Changed code · before: `L6-L15` → after: `L78-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab243eef03507d073e83ff9c7ab69d14629259af11251a85ab5ef0fe6d81582R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab243eef03507d073e83ff9c7ab69d14629259af11251a85ab5ef0fe6d81582) · [After (L78-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/364.js#L78-L84) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/364.js#L6-L15)

```diff
-       postprocessVertexShaderWGSL: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "postprocessVertexShader",
-       bC = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.posi … [truncated]
-     QC.b.ShadersStoreWGSL[wC] || (QC.b.ShadersStoreWGSL[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
-     }
+       createGpuFrameTimer: () => op,
+       destroyGpuFrameTimer: () => Lp,
+       gpuFrameTimerBegin: () => Ip,
+       gpuFrameTimerEnd: () => Sp,
+       gpuFrameTimerResolve: () => xp,
+       gpuTimingSupportedFor: () => Op
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/365.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/365.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a9af1b34d3a6dfb0251f037c95e0c8e6eaac2337b8daeaa0f6271a891a431e9b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/365.js` (Changed code · before: `L4` → after: `L4-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a9af1b34d3a6dfb0251f037c95e0c8e6eaac2337b8daeaa0f6271a891a431e9bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a9af1b34d3a6dfb0251f037c95e0c8e6eaac2337b8daeaa0f6271a891a431e9b) · [After (L4-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/365.js#L4-L22) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/365.js#L4)

```diff
-   61069: (CC, zC, ZC) => {
+   61462: (pp, ip, cp) => {
+     function Op(pp, ip) {
+       for (const cp of pp._frameGraph._tasks)
+         if (cp?._config && cp._colorAttachment && (cp._config.rt === ip.scRT || cp._config.rst === ip.scRT)) return cp
+     }
+ 
+     function op(pp, ip) {
+       const cp = pp._renderingContexts[pp._renderingContexts.length - 1];
+       if (!cp?._frameGraph) return;
+       const op = Op(ip, pp);
+       if (!op) return;
+       if (1 === pp.msaaSamples) return void(op._config.clr = !1);
+       const Ip = op.enabled;
+       op._config.clr = !0, op.enabled = !1, ip._beforeRender.unshift((() => {
+         const ip = Op(cp, pp),
+           Sp = ip?._config.rst === pp.scRT && ip._config.rt._colorView;
+ ... (3 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/365.js` (Changed code · before: `L6-L15` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a9af1b34d3a6dfb0251f037c95e0c8e6eaac2337b8daeaa0f6271a891a431e9bR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a9af1b34d3a6dfb0251f037c95e0c8e6eaac2337b8daeaa0f6271a891a431e9b) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/365.js#L24-L25) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/365.js#L6-L15)

```diff
-       lod3DPixelShader: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "lod3DPixelShader",
-       bC = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(t … [truncated]
-     QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
-     }
+       configureSwapchainOverlayScene: () => op
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/366.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/366.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/366.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/366.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/366.js#L4-L6)

```diff
-   61075: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       lodCubePixelShader: () => nC
+   61466: (pp, ip, cp) => {
+     cp.d(ip, {
+       createShadowTask: () => Ip
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/366.js` (Changed code · before: `L8-L14` → after: `L8-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-12152c8bba628f5c9d3736b9338950824e43130da720c277cdfd33b7fe86acd3) · [After (L8-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/366.js#L8-L74) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/366.js#L8-L14)

```diff
-     var QC = ZC(39674);
-     const wC = "lodCubePixelShader",
-       bC = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)\n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,u … [truncated]
-     QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
+     var Op = null;
+ 
+     function op(pp) {
+       return Op?.get(pp)
+     }
+ 
+     function Ip(pp, ip) {
+       const cp = new Set;
+       0;
+       const Op = {
+         name: "Ay",
+         engine: pp,
+         pw: ip,
+         _passes: [],
+         async _preload() {
+           const pp = [];
+ ... (51 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/367.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/367.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/367.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/367.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/367.js#L4)

```diff
-   61081: (CC, zC, ZC) => {
+   61471: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/367.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/367.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/367.js#L6)

```diff
-       lodPixelShader: () => nC
+       A: () => Yp,
+       B: () => Ap,
+       C: () => Dp,
+       X: () => Pp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/367.js` (Changed code · before: `L8-L14` → after: `L11-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ecda723e7a551e9b5d6ba38aa5acc63a8453227b681d37e3e9e4296437438ff0) · [After (L11-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/367.js#L11-L288) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/367.js#L8-L14)

```diff
-     var QC = ZC(39674);
-     const wC = "lodPixelShader",
-       bC = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch( … [truncated]
-     QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
+     var Op = cp(41959),
+       op = (pp, ip) => pp.order - ip.order;
+ 
+     function Ip(pp, ip, cp) {
+       pp.pendingDisposers.set(ip, cp)
+     }
+ 
+     function Sp(pp, ip, cp) {
+       cp && pp.pendingDisposers.get(ip) === cp && pp.pendingDisposers.delete(ip)
+     }
+     var xp = null,
+       Lp = null;
+ 
+     function Yp(pp, ip, cp, Op) {
+       if (!ip || cp.material !== ip) return Op ?? Promise.resolve();
+       const op = Ap(pp, ip._buildGroup, cp);
+ ... (262 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/368.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/368.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/368.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/368.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/368.js#L4)

```diff
-   61084: (CC, zC, ZC) => {
+   61499: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/368.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/368.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/368.js#L6)

```diff
-       lod3DPixelShaderWGSL: () => nC
+       postprocessVertexShaderWGSL: () => Sp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/368.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-efed9bc6132a6f8a0942ce0ba8bdc8298d1e5c3816bdb84b8c57c77a87f566c3) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/368.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/368.js#L8-L10)

```diff
-     var QC = ZC(39674);
-     const wC = "lod3DPixelShader",
-       bC = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textu … [truncated]
+     var Op = cp(40062);
+     const op = "postprocessVertexShader",
+       Ip = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.posi … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/369.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/369.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/369.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/369.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/369.js#L4)

```diff
-   61088: (CC, zC, ZC) => {
+   61516: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/369.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/369.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/369.js#L6)

```diff
-       lodCubePixelShaderWGSL: () => nC
+       lod3DPixelShader: () => Sp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/369.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dce5ed9b99d3e88303476beee9a8eebcda807bb3b8edf65aa3bf18562283fbc9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/369.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/369.js#L8-L11)

```diff
-     var QC = ZC(39674);
-     const wC = "lodCubePixelShader",
-       bC = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;\n#ifdef  … [truncated]
-     QC.b.ShadersStoreWGSL[wC] || (QC.b.ShadersStoreWGSL[wC] = bC);
+     var Op = cp(40062);
+     const op = "lod3DPixelShader",
+       Ip = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(t … [truncated]
+     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/370.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/370.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87)

#### 1. `bundles/preprod.bloxd.io/chunks/js/370.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/370.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/370.js#L4)

```diff
-   61096: (CC, zC, ZC) => {
+   61519: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/370.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/370.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/370.js#L6)

```diff
-       lodPixelShaderWGSL: () => nC
+       lodCubePixelShader: () => Sp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/370.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-35240b5940c7ed9e5c28196b566b767365d6f3dd93375a5b48508d2f9a617f87) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/370.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/370.js#L8-L11)

```diff
-     var QC = ZC(39674);
-     const wC = "lodPixelShader",
-       bC = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureL … [truncated]
-     QC.b.ShadersStoreWGSL[wC] || (QC.b.ShadersStoreWGSL[wC] = bC);
+     var Op = cp(40062);
+     const op = "lodCubePixelShader",
+       Ip = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)\n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,u … [truncated]
+     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/371.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/371.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/371.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/371.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/371.js#L4)

```diff
-   61101: (CC, zC, ZC) => {
+   61525: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/371.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/371.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/371.js#L6)

```diff
-       passPixelShaderWGSL: () => nC
+       lodPixelShader: () => Sp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/371.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10c7b87be254ca01d41eea7f2e02939e30896613367d6101c30f1be43c68aa3f) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/371.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/371.js#L8-L11)

```diff
-     var QC = ZC(39674);
-     const wC = "passPixelShader",
-       bC = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input. … [truncated]
-     QC.b.ShadersStoreWGSL[wC] || (QC.b.ShadersStoreWGSL[wC] = bC);
+     var Op = cp(40062);
+     const op = "lodPixelShader",
+       Ip = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch( … [truncated]
+     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/372.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/372.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659)

#### 1. `bundles/preprod.bloxd.io/chunks/js/372.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/372.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/372.js#L4)

```diff
-   61109: (CC, zC, ZC) => {
+   61532: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/372.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/372.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/372.js#L6)

```diff
-       passPixelShader: () => nC
+       lod3DPixelShaderWGSL: () => Sp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/372.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8da96f351ff20848877987ab551d2b3b67de2b2a0b8b61022d5a9d05bf795659) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/372.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/372.js#L8-L11)

```diff
-     var QC = ZC(39674);
-     const wC = "passPixelShader",
-       bC = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
-     QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
+     var Op = cp(40062);
+     const op = "lod3DPixelShader",
+       Ip = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_3d<f32>;uniform lod: f32;uniform slice: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler,0);let textu … [truncated]
+     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/373.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/373.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35)

#### 1. `bundles/preprod.bloxd.io/chunks/js/373.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/373.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/373.js#L4)

```diff
-   61111: (CC, zC, ZC) => {
+   61535: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/373.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/373.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/373.js#L6)

```diff
-       passCubePixelShaderWGSL: () => nC
+       lodCubePixelShaderWGSL: () => Sp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/373.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-14555040ab13c86d6233c081c3532eeaae857f7442e099838e7f3d998325da35) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/373.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/373.js#L8-L10)

```diff
-     var QC = ZC(39674);
-     const wC = "passCubePixelShader",
-       bC = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=tex … [truncated]
+     var Op = cp(40062);
+     const op = "lodCubePixelShader",
+       Ip = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;\n#ifdef  … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/374.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/374.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936)

#### 1. `bundles/preprod.bloxd.io/chunks/js/374.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/374.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/374.js#L4)

```diff
-   61118: (CC, zC, ZC) => {
+   61544: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/374.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/374.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/374.js#L6)

```diff
-       passCubePixelShader: () => nC
+       lodPixelShaderWGSL: () => Sp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/374.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-df600efb56ea079d6e9fb42be640c3af21c23a6fef8a7dbeab602ece78a54936) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/374.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/374.js#L8-L11)

```diff
-     var QC = ZC(39674);
-     const wC = "passCubePixelShader",
-       bC = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(te … [truncated]
-     QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
+     var Op = cp(40062);
+     const op = "lodPixelShader",
+       Ip = "const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureL … [truncated]
+     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/375.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/375.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/375.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/375.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/375.js#L4)

```diff
-   61149: (CC, zC, ZC) => {
+   61552: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/375.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/375.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/375.js#L6)

```diff
-       fxaaPixelShaderWGSL: () => nC
+       passPixelShaderWGSL: () => Sp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/375.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1d6a3a251a1865ad410f4b7e1abb175d82aa0df4aa73f98f11eb08d29deadd9a) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/375.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/375.js#L8-L10)

```diff
-     var QC = ZC(39674);
-     const wC = "fxaaPixelShader",
-       bC = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform texelSize: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying samp … [truncated]
+     var Op = cp(40062);
+     const op = "passPixelShader",
+       Ip = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input. … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/376.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/376.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/376.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/376.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/376.js#L4)

```diff
-   61156: (CC, zC, ZC) => {
+   61559: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/376.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/376.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/376.js#L6)

```diff
-       fxaaVertexShaderWGSL: () => nC
+       passPixelShader: () => Sp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/376.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-54b414cdd2ba5774f751a32479f259017a3b384ccc78febcc85605cf510b9a7e) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/376.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/376.js#L8-L11)

```diff
-     var QC = ZC(39674);
-     const wC = "fxaaVertexShader",
-       bC = "attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f … [truncated]
-     QC.b.ShadersStoreWGSL[wC] || (QC.b.ShadersStoreWGSL[wC] = bC);
+     var Op = cp(40062);
+     const op = "passPixelShader",
+       Ip = "varying vec2 vUV;uniform sampler2D textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=texture2D(textureSampler,vUV);}";
+     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/377.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/377.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/377.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/377.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/377.js#L4)

```diff
-   61164: (CC, zC, ZC) => {
+   61565: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/377.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/377.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/377.js#L6)

```diff
-       fxaaPixelShader: () => nC
+       passCubePixelShaderWGSL: () => Sp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/377.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f9ae62823b9f271155a32aff6f5393160e7af3904b3b2f19182a983329713a5) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/377.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/377.js#L8-L11)

```diff
-     var QC = ZC(39674);
-     const wC = "fxaaPixelShader",
-       bC = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\nuniform sampler2D textureSampler;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS … [truncated]
-     QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
+     var Op = cp(40062);
+     const op = "passCubePixelShader",
+       Ip = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;\n#ifdef POSITIVEX\nfragmentOutputs.color=tex … [truncated]
+     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/378.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/378.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/378.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/378.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/378.js#L4)

```diff
-   61171: (CC, zC, ZC) => {
+   61570: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/378.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/378.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/378.js#L6)

```diff
-       fxaaVertexShader: () => nC
+       passCubePixelShader: () => Sp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/378.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2f1b98ed385feec48e025cdd1e557b9e2005528673431a1936c99ef370038a8f) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/378.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/378.js#L8-L10)

```diff
-     var QC = ZC(39674);
-     const wC = "fxaaVertexShader",
-       bC = "attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sample … [truncated]
+     var Op = cp(40062);
+     const op = "passCubePixelShader",
+       Ip = "varying vec2 vUV;uniform samplerCube textureSampler;\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{vec2 uv=vUV*2.0-1.0;\n#ifdef POSITIVEX\ngl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));\n#endif\n#ifdef NEGATIVEX\ngl_FragColor=textureCube(te … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/379.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/379.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21)

#### 1. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L4-L18` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/379.js#L4) · [Before (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/379.js#L4-L18)

```diff
-   61185: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => nC
-     });
-     var QC = ZC(39674);
-     ZC(41703), ZC(41708);
-     const wC = "pbrUboDeclaration",
-       bC = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
-     }
-   },
-   61204: (CC, zC, ZC) => {
+   61601: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L20` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/379.js#L6) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/379.js#L20)

```diff
-       pbrPixelShader: () => JZ
+       fxaaPixelShaderWGSL: () => Sp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/379.js` (Changed code · before: `L22-L242` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-00a95abb0c319b668596fb730079b62b238227b3b1f0764e7570dc36f1fe5c21) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/379.js#L8-L11) · [Before (L22-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/379.js#L22-L242)

```diff
-     var QC = ZC(39674),
-       wC = ZC(41911),
-       bC = ZC(41913),
-       nC = ZC(41919),
-       fC = ZC(41909);
-     const oC = "pbrFragmentDeclaration",
-       qC = "uniform vec4 vEyePosition;uniform vec3 vReflectionColor;uniform vec4 vAlbedoColor;uniform float baseWeight;uniform float baseDiffuseRoughness;uniform vec4 vLightingIntensity;uniform vec4 vReflectivityColor;uniform vec4 vMetallicReflectanceFactors;uniform vec3 vEmissiv … [truncated]
-     QC.b.IncludesShadersStore[oC] || (QC.b.IncludesShadersStore[oC] = qC);
-     const FC = {
-       name: oC,
-       shader: qC
-     };
-     var WC = ZC(41703),
-       NC = ZC(41708),
-       MC = ZC(61185),
-       gC = ZC(41755),
- ... (205 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "fxaaPixelShader",
+       Ip = "varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform texelSize: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying samp … [truncated]
+     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/380.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/380.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-406cc99b434f0a6f3f06f55308716cfba17a6e75bd3d7ab27b35e68be5c9ecfd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/380.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-406cc99b434f0a6f3f06f55308716cfba17a6e75bd3d7ab27b35e68be5c9ecfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-406cc99b434f0a6f3f06f55308716cfba17a6e75bd3d7ab27b35e68be5c9ecfd) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/380.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/380.js#L4-L6)

```diff
-   61198: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => nC
+   61604: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       fxaaVertexShaderWGSL: () => Sp
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/380.js` (Changed code · before: `L8-L195` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-406cc99b434f0a6f3f06f55308716cfba17a6e75bd3d7ab27b35e68be5c9ecfdR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-406cc99b434f0a6f3f06f55308716cfba17a6e75bd3d7ab27b35e68be5c9ecfd) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/380.js#L8-L11) · [Before (L8-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/380.js#L8-L195)

```diff
-     var QC = ZC(39674);
-     const wC = "harmonicsFunctions",
-       bC = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
-     }
-   },
-   61255: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "hdrFilteringFunctions",
-       bC = "#if NUM_SAMPLES\n#if NUM_SAMPLES>0\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\nprecision highp int;float radicalInverse_VdC(uint bits)\n{bits=(bits<<16u) | (bits>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x3333333 … [truncated]
- ... (172 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "fxaaVertexShader",
+       Ip = "attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f … [truncated]
+     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/381.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/381.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/381.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/381.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/381.js#L4-L6)

```diff
-   61198: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => nC
+   61612: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       fxaaPixelShader: () => Sp
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/381.js` (Changed code · before: `L8-L112` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-14ef9612e9c40e3e27d13b145586a765ddbe5aadd87367d5e01a5a8cc846c1a1) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/381.js#L8-L10) · [Before (L8-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/381.js#L8-L112)

```diff
-     var QC = ZC(39674);
-     const wC = "harmonicsFunctions",
-       bC = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
-     }
-   },
-   61397: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => nC
-     });
-     var QC = ZC(39674);
-     ZC(41703), ZC(41708);
-     const wC = "openpbrUboDeclaration",
- ... (89 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "fxaaPixelShader",
+       Ip = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\nuniform sampler2D textureSampler;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/382.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/382.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/382.js` (Changed code · before: `L4-L18` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/382.js#L4) · [Before (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/382.js#L4-L18)

```diff
-   61286: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => nC
-     });
-     var QC = ZC(39674);
-     ZC(42058), ZC(42063);
-     const wC = "pbrUboDeclaration",
-       bC = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
-     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
-     }
-   },
-   61308: (CC, zC, ZC) => {
+   61618: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/382.js` (Changed code · before: `L20` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/382.js#L6) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/382.js#L20)

```diff
-       pbrPixelShaderWGSL: () => gZ
+       fxaaVertexShader: () => Sp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/382.js` (Changed code · before: `L22-L222` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-03dc779cf0a8525d3a641d01a1ad601e306184a6b3b1b0f816004e0a4e10471b) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/382.js#L8-L11) · [Before (L22-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/382.js#L22-L222)

```diff
-     var QC = ZC(39674),
-       wC = ZC(42223),
-       bC = ZC(42226),
-       nC = ZC(42229),
-       fC = ZC(42058),
-       oC = ZC(42063),
-       qC = ZC(61286),
-       FC = ZC(42092),
-       WC = ZC(61313),
-       NC = ZC(42235),
-       MC = ZC(42255);
-     const gC = "samplerFragmentAlternateDeclaration",
-       SC = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     QC.b.IncludesShadersStoreWGSL[gC] || (QC.b.IncludesShadersStoreWGSL[gC] = SC);
-     const pC = {
-       name: gC,
- ... (185 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "fxaaVertexShader",
+       Ip = "attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sample … [truncated]
+     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/383.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/383.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08)

#### 1. `bundles/preprod.bloxd.io/chunks/js/383.js` (Changed code · before: `L4-L30` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/383.js#L4) · [Before (L4-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/383.js#L4-L30)

```diff
-   61300: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "harmonicsFunctions",
-       bC = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
-     }
-   },
-   61353: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => nC
- ... (11 more removed lines; see GitHub link above)
+   61627: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/383.js` (Changed code · before: `L34-L37` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/383.js#L8-L12) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/383.js#L34-L37)

```diff
-     var QC = ZC(39674);
-     const wC = "importanceSampling",
-       bC = "fn hemisphereCosSample(u: vec2f)->vec3f {var phi: f32=2.*PI*u.x;var cosTheta2: f32=1.-u.y;var cosTheta: f32=sqrt(cosTheta2);var sinTheta: f32=sqrt(1.-cosTheta2);return vec3f(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}\nfn hemisphereImportanceSampleDggx(u: vec2f,a: … [truncated]
-     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     var Op = cp(40062);
+     cp(42157), cp(42159);
+     const op = "pbrUboDeclaration",
+       Ip = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/383.js` (Changed code · before: `L43-L73` → after: `L18-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08) · [After (L18-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/383.js#L18-L150) · [Before (L43-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/383.js#L43-L73)

```diff
-   61381: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "pbrBlockImageProcessing",
-       bC = "#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)\n#if !defined(SKIPFINALCOLORCLAMP)\nfinalColor=vec4f(clamp(finalColor.rgb,vec3f(0.),vec3f(30.0)),finalColor.a);\n#endif\n#else\nfinalColor=applyImageProcessing(finalColor);\n#endif\nfinalColor=vec4f(fin … [truncated]
-     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
-     }
-   },
-   61374: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => nC
- ... (15 more removed lines; see GitHub link above)
+   61644: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       pbrPixelShader: () => mc
+     });
+     var Op = cp(40062),
+       op = cp(42362),
+       Ip = cp(42365),
+       Sp = cp(42369),
+       xp = cp(42359);
+     const Lp = "pbrFragmentDeclaration",
+       Yp = "uniform vec4 vEyePosition;uniform vec3 vReflectionColor;uniform vec4 vAlbedoColor;uniform float baseWeight;uniform float baseDiffuseRoughness;uniform vec4 vLightingIntensity;uniform vec4 vReflectivityColor;uniform vec4 vMetallicReflectanceFactors;uniform vec3 vEmissiv … [truncated]
+     Op.b.IncludesShadersStore[Lp] || (Op.b.IncludesShadersStore[Lp] = Yp);
+     const Dp = {
+       name: Lp,
+       shader: Yp
+     };
+ ... (117 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/383.js` (Changed code · before: `L75-L210` → after: `L152-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3013eaf6adf051f07df96bd5e877b3caa78a56b6154af6fc5c8b58979d83bb08) · [After (L152-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/383.js#L152-L242) · [Before (L75-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/383.js#L75-L210)

```diff
-       bC = "var reflectanceF0: f32=reflectivityOut.reflectanceF0;var specularEnvironmentR0: vec3f=reflectivityOut.colorReflectanceF0;var specularEnvironmentR90: vec3f= reflectivityOut.reflectanceF90;\n#ifdef ALPHAFRESNEL\nvar reflectance90: f32=fresnelGrazingReflectance(reflectan … [truncated]
-     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
-     }
-   },
-   61357: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => nC
-     });
-     var QC = ZC(39674);
-     ZC(61355);
-     const wC = "pbrClusteredLightingFunctions",
-       bC = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nlightData: vec4f,\nsliceRange: vec2u,\nV: vec3f,\nN: vec3f,\nposW: vec3f,\nsurfaceAlbedo: vec3f,\nreflectivityOut: refle … [truncated]
-     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
- ... (120 more removed lines; see GitHub link above)
+       Xi = "float reflectanceF0=reflectivityOut.reflectanceF0;vec3 specularEnvironmentR0=reflectivityOut.colorReflectanceF0;vec3 specularEnvironmentR90=reflectivityOut.colorReflectanceF90;\n#ifdef ALPHAFRESNEL\nfloat reflectance90=fresnelGrazingReflectance(reflectanceF0);specular … [truncated]
+     Op.b.IncludesShadersStore[Ei] || (Op.b.IncludesShadersStore[Ei] = Xi);
+     const li = {
+         name: Ei,
+         shader: Xi
+       },
+       Qi = "pbrClusteredLightingFunctions",
+       Ji = "#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\n#include<clusteredLightingFunctions>\n#define inline\nlightingInfo computeClusteredLighting(\nsampler2D lightDataTexture,\nsampler2D tileMaskTexture,\nvec4 lightData,\nivec2 sliceRange,\nvec3 V,\nvec3 N,\nvec3 posW, … [truncated]
+     Op.b.IncludesShadersStore[Qi] || (Op.b.IncludesShadersStore[Qi] = Ji);
+     const Bi = {
+       name: Qi,
+       shader: Ji
+     };
+     var Ni = cp(42449),
+       Ti = cp(61715),
+       fi = cp(42452);
+ ... (75 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/384.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/384.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/384.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/384.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/384.js#L4)

```diff
-   61300: (CC, zC, ZC) => {
+   61640: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/384.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/384.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/384.js#L6)

```diff
-       e: () => nC
+       c: () => Sp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/384.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/384.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/384.js#L8)

```diff
-     var QC = ZC(39674);
+     var Op = cp(40062);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/384.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7bR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/384.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/384.js#L10-L11)

```diff
-       bC = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+       Ip = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/384.js` (Changed code · before: `L17` → after: `L17-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7bR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b) · [After (L17-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/384.js#L17-L43) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/384.js#L17)

```diff
-   61455: (CC, zC, ZC) => {
+   61698: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "hdrFilteringFunctions",
+       Ip = "#if NUM_SAMPLES\n#if NUM_SAMPLES>0\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\nprecision highp int;float radicalInverse_VdC(uint bits)\n{bits=(bits<<16u) | (bits>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x3333333 … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   61669: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+ ... (11 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/384.js` (Changed code · before: `L21-L25` → after: `L47-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7bR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b) · [After (L47-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/384.js#L47-L63) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/384.js#L21-L25)

```diff
-     var QC = ZC(39674);
-     ZC(42058), ZC(42063);
-     const wC = "openpbrUboDeclaration",
-       bC = "uniform vTangentSpaceParams: vec2f;uniform vLightingIntensity: vec4f;uniform pointSize: f32;uniform vDebugMode: vec2f;uniform renderTargetSize: vec2f;uniform cameraInfo: vec4f;uniform vTextureRepetitionHexTilingParams: vec4f;uniform backgroundRefractionMatrix: mat4x4f … [truncated]
-     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
+     var Op = cp(40062);
+     const op = "pbrBRDFFunctions",
+       Ip = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   61724: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "pbrBlockImageProcessing",
+       Ip = "#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)\n#if !defined(SKIPFINALCOLORCLAMP)\nfinalColor.rgb=clamp(finalColor.rgb,0.,30.0);\n#endif\n#else\nfinalColor=applyImageProcessing(finalColor);\n#endif\nfinalColor.a*=visibility;\n#ifdef PREMULTIPLYALPHA … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/384.js` (Changed code · before: `L31-L33` → after: `L69-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7bR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b) · [After (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/384.js#L69-L71) · [Before (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/384.js#L31-L33)

```diff
-   61447: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       openpbrVertexShaderWGSL: () => UC
+   61715: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/384.js` (Changed code · before: `L35-L51` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7bR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/384.js#L73-L76) · [Before (L35-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/384.js#L35-L51)

```diff
-     var QC = ZC(39674),
-       wC = ZC(42058),
-       bC = ZC(42063),
-       nC = ZC(61455),
-       fC = ZC(42074),
-       oC = ZC(42092),
-       qC = ZC(42076),
-       FC = ZC(61291),
-       WC = ZC(42078),
-       NC = ZC(42080),
-       MC = ZC(42082),
-       gC = ZC(42090),
-       SC = ZC(42100),
-       pC = ZC(61300);
-     const PC = "openpbrNormalMapVertexDeclaration",
-       GC = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
- ... (1 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "pbrBlockNormalGeometric",
+       Ip = "vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;\n#endif\nvec3 geometricNormalW=normalW;\n#if defined(TWOSIDEDLIGHTING … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/384.js` (Changed code · before: `L55-L74` → after: `L80-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7bR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b) · [After (L80-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/384.js#L80-L89) · [Before (L55-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/384.js#L55-L74)

```diff
-     };
-     var AC = ZC(42106),
-       xC = ZC(42112),
-       JC = ZC(42114),
-       IC = ZC(42120),
-       iC = ZC(42127),
-       vC = ZC(42135),
-       eC = ZC(42138),
-       hC = ZC(42144),
-       KC = ZC(42152),
-       YC = ZC(42156),
-       dC = ZC(42159),
-       mC = ZC(42168),
-       HC = ZC(42172),
-       EC = ZC(42179),
-       lC = ZC(42181),
- ... (4 more removed lines; see GitHub link above)
+     }
+   },
+   61733: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "pbrDebug",
+       Ip = "#if DEBUGMODE>0\nif (vClipSpacePosition.x/vClipSpacePosition.w>=vDebugMode.x) {\n#if DEBUGMODE==1\ngl_FragColor.rgb=vPositionW.rgb;\n#define DEBUGMODE_NORMALIZE\n#elif DEBUGMODE==2 && defined(NORMAL)\ngl_FragColor.rgb=vNormalW.rgb;\n#define DEBUGMODE_NORMALIZE\n#elif  … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/384.js` (Changed code · before: `L78-L88` → after: `L93-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7bR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c826c2d664ddc5f0822628b20f01e341fa45b96e775d35c96d243ba3bf31ba7b) · [After (L93-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/384.js#L93-L195) · [Before (L78-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/384.js#L78-L88)

```diff
-     };
-     var sC = ZC(42194),
-       TC = ZC(42202),
-       aC = ZC(42209),
-       tC = ZC(42212),
-       DC = ZC(42214);
-     const jC = "openpbrVertexShader",
-       yC = "#define OPENPBR_VERTEX_SHADER\n#include<openpbrUboDeclaration>\n#define CUSTOM_VERTEX_BEGIN\n#ifndef USE_VERTEX_PULLING\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef TANGENT\nattribute tangent: vec4f;\n#endif\n#ifdef UV1\nattribu … [truncated]
-     QC.b.ShadersStoreWGSL[jC] || (QC.b.ShadersStoreWGSL[jC] = yC);
-     const LC = [wC.c, bC.c, nC.e, fC.d, oC.b, qC.b, FC.c, WC.e, NC.e, MC.d, gC.e, SC.d, pC.e, RC, AC.b, xC.c, JC.c, IC.b, iC.b, vC.c, eC.c, hC.b, KC.b, YC.c, dC.d, mC.b, HC.d, EC.b, lC.e, XC.b, rC, sC.b, TC.d, aC.c, tC.c, DC.b];
-     for (const BC of LC) QC.b.IncludesShadersStoreWGSL[BC.name] || (QC.b.IncludesShadersStoreWGSL[BC.name] = BC.shader);
+     }
+   },
+   61692: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "pbrDirectLightingFalloffFunctions",
+       Ip = "float computeDistanceLightFalloff_Standard(vec3 lightOffset,float range)\n{return max(0.,1.0-length(lightOffset)/range);}\nfloat computeDistanceLightFalloff_Physical(float lightDistanceSquared)\n{return 1.0/maxEps(lightDistanceSquared);}\nfloat computeDistanceLightFal … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   61700: (pp, ip, cp) => {
+ ... (87 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/385.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/385.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703)

#### 1. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/385.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/385.js#L4)

```diff
-   61416: (CC, zC, ZC) => {
+   61640: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/385.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/385.js#L8-L10)

```diff
-     var QC = ZC(39674);
-     const wC = "openpbrDielectricReflectance",
-       bC = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
+     var Op = cp(40062);
+     const op = "harmonicsFunctions",
+       Ip = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/385.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/385.js#L17)

```diff
-   61418: (CC, zC, ZC) => {
+   61834: (pp, ip, cp) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L19-L71` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/385.js#L19) · [Before (L19-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/385.js#L19-L71)

```diff
-       c: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "openpbrGeometryInfo",
-       bC = "struct geometryInfoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;};struct geometryInfoAnisoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;float anisotropy;vec3 anisotropicTangent;vec3 … [truncated]
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
-     }
-   },
-   61422: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => nC
-     });
-     var QC = ZC(39674);
- ... (37 more removed lines; see GitHub link above)
+       e: () => Sp
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L73-L74` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/385.js#L21-L22) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/385.js#L73-L74)

```diff
-     var QC = ZC(39674);
-     ZC(41703), ZC(41708);
+     var Op = cp(40062);
+     cp(42157), cp(42159);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L83` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/385.js#L31) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/385.js#L83)

```diff
-   61414: (CC, zC, ZC) => {
+   61632: (pp, ip, cp) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L87-L89` → after: `L35-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/385.js#L35-L37) · [Before (L87-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/385.js#L87-L89)

```diff
-     var QC = ZC(39674);
-     const wC = "sceneFragmentDeclaration",
-       bC = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;uniform mat4 inverseProjection;\n";
+     var Op = cp(40062);
+     const op = "pbrBRDFFunctions",
+       Ip = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L96` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/385.js#L44) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/385.js#L96)

```diff
-   61406: (CC, zC, ZC) => {
+   61831: (pp, ip, cp) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L98` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/385.js#L46) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/385.js#L98)

```diff
-       openpbrPixelShader: () => fZ
+       openpbrVertexShader: () => Oi
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L100-L123` → after: `L48-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/385.js#L48-L50) · [Before (L100-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/385.js#L100-L123)

```diff
-     var QC = ZC(39674),
-       wC = ZC(41911),
-       bC = ZC(41913),
-       nC = ZC(41919),
-       fC = ZC(61414),
-       oC = ZC(41909);
-     const qC = "openpbrFragmentDeclaration",
-       FC = "uniform float vBaseWeight;uniform vec4 vBaseColor;uniform float vBaseDiffuseRoughness;uniform vec4 vReflectanceInfo;uniform vec4 vSpecularColor;uniform vec3 vSpecularAnisotropy;uniform float vTransmissionWeight;uniform vec3 vTransmissionColor;uniform float vTransmissi … [truncated]
-     QC.b.IncludesShadersStore[qC] || (QC.b.IncludesShadersStore[qC] = FC);
-     const WC = {
-       name: qC,
-       shader: FC
-     };
-     var NC = ZC(41703),
-       MC = ZC(41708),
-       gC = ZC(61397),
- ... (8 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "sceneVertexDeclaration",
+       Ip = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;\n";
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L129-L234` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/385.js#L56-L58) · [Before (L129-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/385.js#L129-L234)

```diff
-     var iC = ZC(41967),
-       vC = ZC(41996),
-       eC = ZC(41816),
-       hC = ZC(42005),
-       KC = ZC(41977),
-       YC = ZC(41726),
-       dC = ZC(61231),
-       mC = ZC(61235),
-       HC = ZC(61238),
-       EC = ZC(41975),
-       lC = ZC(41952),
-       XC = ZC(61198),
-       cC = ZC(41938),
-       uC = ZC(61247),
-       rC = ZC(61250),
-       sC = ZC(61189),
- ... (90 more removed lines; see GitHub link above)
+     var xp = cp(42151);
+     const Lp = "openpbrVertexDeclaration",
+       Yp = "#include<sceneVertexDeclaration>\n#ifdef BASE_COLOR\nuniform vec2 vBaseColorInfos;uniform mat4 baseColorMatrix;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBaseWeightInfos;\n#endif\nuniform float vBaseDiffuseRoughness;\n#ifdef BASE_DIFFUSE … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L240-L263` → after: `L64-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L64-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/385.js#L64-L78) · [Before (L240-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/385.js#L240-L263)

```diff
-     var Xz = ZC(42033);
-     const cz = "openpbrBackgroundTransmission",
-       uz = "vec4 slab_translucent_background=vec4(0.,0.,0.,1.);\n#ifdef REFRACTED_BACKGROUND\n{float refractionLOD=min(transmission_roughness,0.8)*vBackgroundRefractionInfos.x;float lodTexelSize=pow(2.0,refractionLOD-vBackgroundRefractionInfos.x);\n#ifdef DISPERSION\n{\n#ifdef RE … [truncated]
-     QC.b.IncludesShadersStore[cz] || (QC.b.IncludesShadersStore[cz] = uz);
-     const rz = {
-         name: cz,
-         shader: uz
-       },
-       sz = "openpbrEnvironmentLighting",
-       Tz = "#if defined(REFLECTION) || defined(REFRACTED_BACKGROUND)\nvec3 coatAbsorption=vec3(1.0);float coatIblFresnel=0.0;if (coat_weight>0.0) {coatIblFresnel=computeDielectricIblFresnel(coatReflectance,coatGeoInfo.environmentBrdf);float hemisphere_avg_fresnel=coatReflectance. … [truncated]
-     QC.b.IncludesShadersStore[sz] || (QC.b.IncludesShadersStore[sz] = Tz);
-     const az = {
-         name: sz,
-         shader: Tz
-       },
-       tz = "openpbrDirectLightingInit",
- ... (8 more removed lines; see GitHub link above)
+     var Ap = cp(42157),
+       Pp = cp(42159),
+       Wp = cp(61834),
+       yp = cp(42166),
+       Up = cp(42206),
+       wp = cp(42174),
+       vp = cp(61632),
+       tp = cp(42178),
+       Hp = cp(42182),
+       dp = cp(42190),
+       ep = cp(42198),
+       jp = cp(42215),
+       kp = cp(61640);
+     const mp = "openpbrNormalMapVertexDeclaration",
+       Rp = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(GEOMETRY_COAT_NORMAL) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L269-L273` → after: `L84-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L84-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/385.js#L84-L100) · [Before (L269-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/385.js#L269-L273)

```diff
-     var Bz = ZC(42039),
-       Oz = ZC(42041),
-       kz = ZC(61271);
-     const Vz = "openpbrBlockPrePass",
-       CZ = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nfloat writeGeometryInfo=1.0;\n#else\nfloat writeGeometryInfo=finalColor.a>ALPHATESTVALUE ? 1.0 : 0.0;\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_INDEX,vec4(vPositionW,writeGeometryInfo));\ … [truncated]
+     var Mp = cp(42226),
+       Cp = cp(42232),
+       Ep = cp(42238),
+       Xp = cp(42246),
+       lp = cp(42251),
+       Qp = cp(42257),
+       Jp = cp(42266),
+       Bp = cp(42272),
+       Np = cp(42277),
+       Tp = cp(42286),
+       fp = cp(42291),
+       bp = cp(42298),
+       hp = cp(42302),
+       ap = cp(42305),
+       np = cp(42314);
+     const Fp = "openpbrNormalMapVertex",
+ ... (1 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L279-L282` → after: `L106-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L106-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/385.js#L106-L112) · [Before (L279-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/385.js#L279-L282)

```diff
-     var ZZ = ZC(42044),
-       QZ = ZC(61275);
-     const wZ = "openpbrPixelShader",
-       bZ = "#define OPENPBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_EXTENSION\n#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#ifdef … [truncated]
+     var rp = cp(42319),
+       Zp = cp(42327),
+       zp = cp(42336),
+       sp = cp(42341),
+       Kp = cp(42346);
+     const Vp = "openpbrVertexShader",
+       ii = "#define OPENPBR_VERTEX_SHADER\n#define CUSTOM_VERTEX_EXTENSION\nprecision highp float;\n#include<__decl__openpbrVertex>\n#define CUSTOM_VERTEX_BEGIN\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef TANGENT\nattribute vec4 tangent;\n#end … [truncated]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/385.js` (Changed code · before: `L284` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-de380cedd7dd937f0ce03bc11acb906447ae23e701678980e59c30a96f477703) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/385.js#L114) · [Before (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/385.js#L284)

```diff
-     const nZ = [wC.d, bC.c, nC.e, fC.e, oC.c, WC, NC.b, MC.e, gC.b, SC.e, pC.e, PC.c, GC.b, RC.e, AC.b, IC, iC.c, vC.b, eC.c, hC.c, KC.e, YC.d, dC.d, mC.b, HC.b, EC.d, lC.e, XC.c, cC.c, uC.c, rC.e, sC.d, TC.e, aC.d, tC.d, yC, BC, OC.d, kC.c, zz, wz, bz.c, nz.d, qz, Fz.c, Wz.c, gz … [truncated]
+     const ci = [Sp, xp.e, Dp, Ap.d, Pp.d, Wp.e, yp.c, Up.e, wp.c, vp.e, tp.b, Hp.c, dp.e, ep.c, jp.e, kp.c, qp, Mp.c, Cp.e, Ep.b, Xp.d, lp.b, Qp.c, Jp.e, Bp.e, Np.b, Tp.b, fp.d, bp.e, hp.c, ap.b, np.b, Gp, rp.c, Zp.c, zp.e, sp.c, Kp.b];
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/386.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/386.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L4-L17` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L4) · [Before (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L4-L17)

```diff
-   61471: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "openpbrDielectricReflectance",
-       bC = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
-     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
-     }
-   },
-   61474: (CC, zC, ZC) => {
+   61741: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L21-L36` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L8-L11) · [Before (L21-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L21-L36)

```diff
-     var QC = ZC(39674);
-     const wC = "openpbrGeometryInfo",
-       bC = "struct geometryInfoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32};struct geometryInfoAnisoOutParams\n{NdotV: f32,\nNdotVUnclamped: f32,\nenvironmentBrdf: vec3f,\nhorizonOcclusion: f32,\nanisotropy: f32,\nanisotropicTange … [truncated]
-     QC.b.IncludesShadersStoreWGSL[wC] || (QC.b.IncludesShadersStoreWGSL[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
-     }
-   },
-   61477: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "openpbrIblFunctions",
-       bC = "#ifdef REFLECTION\nfn sampleIrradiance(\nsurfaceNormal: vec3f\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,vEnvironmentIrradianceSH: vec3f\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defi … [truncated]
+     var Op = cp(40062);
+     cp(42496), cp(42498);
+     const op = "pbrUboDeclaration",
+       Ip = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicro … [truncated]
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L43-L45` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L18-L20) · [Before (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L43-L45)

```diff
-   61490: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => nC
+   61756: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       pbrPixelShaderWGSL: () => vc
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L47-L49` → after: `L22-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L22-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L22-L34) · [Before (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L47-L49)

```diff
-     var QC = ZC(39674);
-     const wC = "openpbrSubsurfaceLayerData",
-       bC = "var subsurface_weight: f32=uniforms.vSubsurfaceWeight;var subsurface_color: vec3f=uniforms.vSubsurfaceColor.rgb;var subsurface_radius: f32=uniforms.vSubsurfaceRadius;var subsurface_radius_scale: vec3f=uniforms.vSubsurfaceRadiusScale;var subsurface_scatter_anisotropy:  … [truncated]
+     var Op = cp(40062),
+       op = cp(42711),
+       Ip = cp(42714),
+       Sp = cp(42718),
+       xp = cp(42496),
+       Lp = cp(42498),
+       Yp = cp(61741),
+       Dp = cp(42542),
+       Ap = cp(61762),
+       Pp = cp(42721),
+       Wp = cp(42742);
+     const yp = "samplerFragmentAlternateDeclaration",
+       Up = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L54-L62` → after: `L39-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L39-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L39-L42) · [Before (L54-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L54-L62)

```diff
-     }
-   },
-   61486: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "openpbrTransmissionLayerData",
-       bC = "var transmission_weight: f32=uniforms.vTransmissionWeight;var transmission_color: vec3f=uniforms.vTransmissionColor.rgb;var transmission_depth: f32=uniforms.vTransmissionDepth;var transmission_scatter: vec3f=uniforms.vTransmissionScatter.rgb;var transmission_scatter_a … [truncated]
+     };
+     var vp = cp(61766);
+     const tp = "pbrFragmentSamplersDeclaration",
+       Hp = "#include<samplerFragmentDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_SAMPLERNAME_,albedo)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BAS … [truncated]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L67-L76` → after: `L47-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L47-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L47-L75) · [Before (L67-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L67-L76)

```diff
-     }
-   },
-   61455: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => nC
-     });
-     var QC = ZC(39674);
-     ZC(42058), ZC(42063);
-     const wC = "openpbrUboDeclaration",
-       bC = "uniform vTangentSpaceParams: vec2f;uniform vLightingIntensity: vec4f;uniform pointSize: f32;uniform vDebugMode: vec2f;uniform renderTargetSize: vec2f;uniform cameraInfo: vec4f;uniform vTextureRepetitionHexTilingParams: vec4f;uniform backgroundRefractionMatrix: mat4x4f … [truncated]
+     };
+     var ep = cp(42752),
+       jp = cp(42783),
+       kp = cp(42598),
+       mp = cp(42790),
+       Rp = cp(42765),
+       qp = cp(42520),
+       Mp = cp(61771),
+       Cp = cp(61778),
+       Ep = cp(61780),
+       Xp = cp(42759),
+       lp = cp(42736),
+       Qp = cp(61754),
+       Jp = cp(42726),
+       Bp = cp(61789),
+       Np = cp(61791),
+ ... (13 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L79-L100` → after: `L78-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L78-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L78-L82) · [Before (L79-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L79-L100)

```diff
-       name: wC,
-       shader: bC
-     }
-   },
-   61462: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       openpbrPixelShaderWGSL: () => bZ
-     });
-     var QC = ZC(39674),
-       wC = ZC(42223),
-       bC = ZC(42226),
-       nC = ZC(42229),
-       fC = ZC(42058),
-       oC = ZC(42063),
-       qC = ZC(61455),
-       FC = ZC(42092),
- ... (6 more removed lines; see GitHub link above)
+         name: zp,
+         shader: sp
+       },
+       Vp = "pbrBlockReflectivity",
+       ii = "struct reflectivityOutParams\n{microSurface: f32,\nroughness: f32,\ndiffuseRoughness: f32,\nreflectanceF0: f32,\nreflectanceF90: vec3f,\ncolorReflectanceF0: vec3f,\ncolorReflectanceF90: vec3f,\n#ifdef METALLICWORKFLOW\nsurfaceAlbedo: vec3f,\nmetallic: f32,\nspecularWe … [truncated]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L103-L129` → after: `L85-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L85-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L85-L89) · [Before (L103-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L103-L129)

```diff
-       name: SC,
-       shader: pC
-     };
-     var GC = ZC(42265),
-       RC = ZC(42284),
-       AC = ZC(42135),
-       xC = ZC(42290),
-       JC = ZC(42274),
-       IC = ZC(42076),
-       iC = ZC(61326),
-       vC = ZC(61334),
-       eC = ZC(61343),
-       hC = ZC(42268),
-       KC = ZC(42253),
-       YC = ZC(61300),
-       dC = ZC(42239),
- ... (11 more removed lines; see GitHub link above)
+         name: Vp,
+         shader: ii
+       },
+       Oi = "pbrBlockAmbientOcclusion",
+       oi = "struct ambientOcclusionOutParams\n{ambientOcclusionColor: vec3f,\n#if DEBUGMODE>0 && defined(AMBIENT)\nambientOcclusionColorMap: vec3f\n#endif\n};\n#define pbr_inline\nfn ambientOcclusionBlock(\n#ifdef AMBIENT\nambientOcclusionColorMap_: vec3f,\nvAmbientInfos: vec4f\n … [truncated]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L135-L136` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L95-L96) · [Before (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L135-L136)

```diff
-       DC = "openpbrNormalMapFragmentFunctions",
-       jC = "#if defined(GEOMETRY_NORMAL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_NORMAL,_VARYINGNAME_,GeometryNormal,_SAMPLERNAME_,geometryNormal)\n#endif\n#if defined(GEOMETRY_COAT_NORMAL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_COAT_NORMA … [truncated]
+       Si = "pbrBlockAlphaFresnel",
+       xi = "#ifdef ALPHAFRESNEL\n#if defined(ALPHATEST) || defined(ALPHABLEND)\nstruct alphaFresnelOutParams\n{alpha: f32};fn faceforward(N: vec3<f32>,I: vec3<f32>,Nref: vec3<f32>)->vec3<f32> {return select(N,-N,dot(Nref,I)>0.0);}\n#define pbr_inline\nfn alphaFresnelBlock(\nnorma … [truncated]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L139-L145` → after: `L99-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L99-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L99-L103) · [Before (L139-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L139-L145)

```diff
-       name: DC,
-       shader: jC
-     };
-     var LC = ZC(42260),
-       UC = ZC(61471);
-     const BC = "openpbrConductorReflectance",
-       OC = "#define pbr_inline\nfn conductorReflectance(baseColor: vec3f,specularColor: vec3f,specularWeight: f32)->ReflectanceParams\n{var outParams: ReflectanceParams;\n#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)\noutParams.coloredF0=baseColor*specularWeigh … [truncated]
+         name: Si,
+         shader: xi
+       },
+       Yi = "pbrBlockAnisotropic",
+       Di = "#ifdef ANISOTROPIC\nstruct anisotropicOutParams\n{anisotropy: f32,\nanisotropicTangent: vec3f,\nanisotropicBitangent: vec3f,\nanisotropicNormal: vec3f,\n#if DEBUGMODE>0 && defined(ANISOTROPIC_TEXTURE)\nanisotropyMapData: vec3f\n#endif\n};\n#define pbr_inline\nfn aniso … [truncated]
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L151-L152` → after: `L109-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L109-L110) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L151-L152)

```diff
-       VC = "openpbrAmbientOcclusionFunctions",
-       Cz = "fn compute_specular_occlusion(n_dot_v: f32,metallic: f32,ambient_occlusion: f32,roughness: f32)->f32\n{let specular_occlusion: f32=saturate(pow(n_dot_v+ambient_occlusion,exp2(-16.0*roughness-1.0))-1.0+ambient_occlusion);return mix(specular_occlusion,1.0,metallic*squar … [truncated]
+       Pi = "pbrBlockReflection",
+       Wi = "#ifdef REFLECTION\nstruct reflectionOutParams\n{environmentRadiance: vec4f\n,environmentIrradiance: vec3f\n#ifdef REFLECTIONMAP_3D\n,reflectionCoords: vec3f\n#else\n,reflectionCoords: vec2f\n#endif\n#ifdef SS_TRANSLUCENCY\n#ifdef USESPHERICALFROMREFLECTIONMAP\n#if !de … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L155-L161` → after: `L113-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L113-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L113-L117) · [Before (L155-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L155-L161)

```diff
-       name: VC,
-       shader: Cz
-     };
-     var Zz = ZC(61474),
-       Qz = ZC(61477);
-     const wz = "openpbrVolumeFunctions",
-       bz = "struct OpenPBRHomogeneousVolume {extinction_coeff: vec3f, \nss_albedo: vec3f, \nmulti_scatter_color: vec3f, \nabsorption_coeff: vec3f, \nscatter_coeff: vec3f, \nanisotropy: f32, };fn computeOpenPBRTransmissionVolume(\ntransmission_color: vec3f,\ntransmission_depth: f3 … [truncated]
+         name: Pi,
+         shader: Wi
+       },
+       Ui = "pbrBlockSheen",
+       wi = "#ifdef SHEEN\nstruct sheenOutParams\n{sheenIntensity: f32\n,sheenColor: vec3f\n,sheenRoughness: f32\n#ifdef SHEEN_LINKWITHALBEDO\n,surfaceAlbedo: vec3f\n#endif\n#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)\n,sheenAlbedoScaling: f32\n#endif\n#if defined … [truncated]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L164-L170` → after: `L120-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L120-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L120-L124) · [Before (L164-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L164-L170)

```diff
-       name: wz,
-       shader: bz
-     };
-     var fz = ZC(42296),
-       oz = ZC(61374);
-     const qz = "openpbrNormalMapFragment",
-       Fz = "var uvOffset: vec2f= vec2f(0.0,0.0);\n#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nvar normalScale: f32=1.0;\n#elif defined(GEOMETRY_NORMAL)\nvar normalScale: f32=uniforms.vGeometryNormalI … [truncated]
+         name: Ui,
+         shader: wi
+       },
+       ti = "pbrBlockClearcoat",
+       Hi = "struct clearcoatOutParams\n{specularEnvironmentR0: vec3f,\nconservationFactor: f32,\nclearCoatNormalW: vec3f,\nclearCoatAARoughnessFactors: vec2f,\nclearCoatIntensity: f32,\nclearCoatRoughness: f32,\n#ifdef REFLECTION\nfinalClearCoatRadianceScaled: vec3f,\n#endif\n#if … [truncated]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L176-L177` → after: `L130-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L130-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L130-L131) · [Before (L176-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L176-L177)

```diff
-       Nz = "openpbrBlockNormalFinal",
-       Mz = "#if defined(FORCENORMALFORWARD) && defined(NORMAL)\nvar faceNormal: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)))*scene.vEyePosition.w;\n#if defined(TWOSIDEDLIGHTING)\nfaceNormal=select(-faceNormal,faceNormal,fragmentInputs.fr … [truncated]
+       ei = "pbrBlockIridescence",
+       ui = "struct iridescenceOutParams\n{iridescenceIntensity: f32,\niridescenceIOR: f32,\niridescenceThickness: f32,\nspecularEnvironmentR0: vec3f};\n#ifdef IRIDESCENCE\nfn iridescenceBlock(\nvIridescenceParams: vec4f\n,viewAngle_: f32\n,specularEnvironmentR0: vec3f\n#ifdef IRI … [truncated]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L183-L184` → after: `L137-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L137-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L137-L148) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L183-L184)

```diff
-       Sz = "openpbrBaseLayerData",
-       pz = "var base_color=vec3f(0.8);var base_metalness: f32=0.0;var base_diffuse_roughness: f32=0.0;var specular_weight: f32=1.0;var specular_roughness: f32=0.3;var specular_color: vec3f=vec3f(1.0);var specular_roughness_anisotropy: f32=0.0;var specular_ior: f32=1.5;var alpha:  … [truncated]
+       ki = "pbrBlockSubSurface",
+       mi = "struct subSurfaceOutParams\n{specularEnvironmentReflectance: vec3f,\n#ifdef SS_REFRACTION\nfinalRefraction: vec3f,\nsurfaceAlbedo: vec3f,\n#ifdef SS_LINKREFRACTIONTOTRANSPARENCY\nalpha: f32,\n#endif\nrefractionOpacity: f32,\n#endif\n#ifdef SS_TRANSLUCENCY\ntransmittan … [truncated]
+     Op.b.IncludesShadersStoreWGSL[ki] || (Op.b.IncludesShadersStoreWGSL[ki] = mi);
+     const Ri = {
+       name: ki,
+       shader: mi
+     };
+     var qi = cp(42794),
+       Mi = cp(61820),
+       Ci = cp(42797);
+     const Ei = "pbrBlockNormalFinal",
+       Xi = "#if defined(FORCENORMALFORWARD) && defined(NORMAL)\nvar faceNormal: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)))*scene.vEyePosition.w;\n#if defined(TWOSIDEDLIGHTING)\nfaceNormal=select(-faceNormal,faceNormal,fragmentInputs.fr … [truncated]
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L190-L193` → after: `L154-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L154-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L154-L156) · [Before (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L190-L193)

```diff
-     var Gz = ZC(61486),
-       Rz = ZC(61490);
-     const Az = "openpbrCoatLayerData",
-       xz = "var coat_weight: f32=0.0f;var coat_color: vec3f=vec3f(1.0f);var coat_roughness: f32=0.0f;var coat_roughness_anisotropy: f32=0.0f;var coat_ior: f32=1.6f;var coat_darkening: f32=1.0f;var geometry_coat_tangent: vec2f=vec2f(1.0f,0.0f);\n#ifdef COAT_WEIGHT\nvar coatWeightF … [truncated]
+     var Qi = cp(42807);
+     const Ji = "pbrBlockLightmapInit",
+       Bi = "#ifdef LIGHTMAP\nvar lightmapColor: vec4f=TEXRD(lightmapSampler,lightmapSamplerSampler,fragmentInputs.vLightmapUV+uvOffset);\n#ifdef RGBDLIGHTMAP\nlightmapColor=vec4f(fromRGBD(lightmapColor),lightmapColor.a);\n#endif\n#ifdef GAMMALIGHTMAP\nlightmapColor=vec4f(toLinear … [truncated]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L199-L200` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L162-L163) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L199-L200)

```diff
-       Iz = "openpbrThinFilmLayerData",
-       iz = "#ifdef THIN_FILM\nvar thin_film_weight: f32=uniforms.vThinFilmWeight;var thin_film_thickness: f32=uniforms.vThinFilmThickness.r*1000.0f; \nvar thin_film_ior: f32=uniforms.vThinFilmIor;\n#ifdef THIN_FILM_WEIGHT\nvar thinFilmWeightFromTexture: f32=TEXRD(thinFilmWeightSa … [truncated]
+       Ti = "pbrBlockGeometryInfo",
+       fi = "var NdotVUnclamped: f32=dot(normalW,viewDirectionW);var NdotV: f32=absEps(NdotVUnclamped);var alphaG: f32=convertRoughnessToAverageSlope(roughness);var AARoughnessFactors: vec2f=getAARoughnessFactors(normalW.xyz);\n#ifdef SPECULARAA\nalphaG+=AARoughnessFactors.y;\n#en … [truncated]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L206-L207` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L169-L170) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L206-L207)

```diff
-       ez = "openpbrFuzzLayerData",
-       hz = "var fuzz_weight: f32=0.0f;var fuzz_color: vec3f=vec3f(1.0f);var fuzz_roughness: f32=0.0f;\n#ifdef FUZZ\n#ifdef FUZZ_WEIGHT\nlet fuzzWeightFromTexture: vec4f=TEXRD(fuzzWeightSampler,fuzzWeightSamplerSampler,fragmentInputs.vFuzzWeightUV+uvOffset);\n#endif\n#ifdef FUZZ_C … [truncated]
+       ai = "pbrBlockReflectance",
+       ni = "#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)\nvar baseSpecularEnvironmentReflectance: vec3f=getReflectanceFromBRDFWithEnvLookup(vec3f(reflectanceF0),vec3f(reflectivityOut.reflectanceF90),environmentBrdf);\n#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPE … [truncated]
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L213-L214` → after: `L176-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L176-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L176-L177) · [Before (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L213-L214)

```diff
-       Yz = "openpbrAmbientOcclusionData",
-       dz = "var ambient_occlusion: vec3f=vec3f(1.0f,1.0f,1.0f);var specular_ambient_occlusion: f32=1.0f;var coat_specular_ambient_occlusion: f32=1.0f;\n#ifdef AMBIENT_OCCLUSION\nvar ambientOcclusionFromTexture: vec3f=TEXRD(ambientOcclusionSampler,ambientOcclusionSamplerSampler,fr … [truncated]
+       gi = "pbrBlockDirectLighting",
+       Gi = "var diffuseBase: vec3f=vec3f(0.,0.,0.);\n#ifdef SS_TRANSLUCENCY\nvar diffuseTransmissionBase: vec3f=vec3f(0.,0.,0.);\n#endif\n#ifdef SPECULARTERM\nvar specularBase: vec3f=vec3f(0.,0.,0.);\n#endif\n#ifdef CLEARCOAT\nvar clearCoatBase: vec3f=vec3f(0.,0.,0.);\n#endif\n#i … [truncated]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L220-L229` → after: `L183-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L183-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L183-L185) · [Before (L220-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L220-L229)

```diff
-     var Hz = ZC(42312);
-     const Ez = "openpbrBackgroundTransmission",
-       lz = "var slab_translucent_background: vec4f=vec4f(0.,0.,0.,1.);\n#ifdef REFRACTED_BACKGROUND\n{let refractionLOD: f32=min(transmission_roughness,0.8)*uniforms.vBackgroundRefractionInfos.x;let lodTexelSize: f32=pow(2.0f,refractionLOD-uniforms.vBackgroundRefractionInfos.x);\ … [truncated]
-     QC.b.IncludesShadersStoreWGSL[Ez] || (QC.b.IncludesShadersStoreWGSL[Ez] = lz);
-     const Xz = {
-         name: Ez,
-         shader: lz
-       },
-       cz = "openpbrEnvironmentLighting",
-       uz = "#if defined(REFLECTION) || defined(REFRACTED_BACKGROUND)\nvar coatAbsorption=vec3f(1.0f);var coatIblFresnel: f32=0.0;if (coat_weight>0.0) {coatIblFresnel=computeDielectricIblFresnel(coatReflectance,coatGeoInfo.environmentBrdf);let hemisphere_avg_fresnel: f32=coatRefle … [truncated]
+     var Zi = cp(42811);
+     const zi = "pbrBlockFinalLitComponents",
+       si = "aggShadow=aggShadow/numLights;\n#if defined(ENVIRONMENTBRDF)\n#ifdef MS_BRDF_ENERGY_CONSERVATION\nvar baseSpecularEnergyConservationFactor: vec3f=getEnergyConservationFactor(vec3f(reflectanceF0),environmentBrdf);var coloredEnergyConservationFactor: vec3f=getEnergyCons … [truncated]
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L235-L236` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L191-L192) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L235-L236)

```diff
-       sz = "openpbrDirectLightingInit",
-       Tz = "#ifdef LIGHT{X}\nvar preInfo{X}: preLightingInfo;var preInfoCoat{X}: preLightingInfo;let lightColor{X}: vec4f=light{X}.vLightDiffuse;var shadow{X}: f32=1.0f;\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X} … [truncated]
+       Vi = "pbrBlockFinalUnlitComponents",
+       pc = "var finalDiffuse: vec3f=diffuseBase;finalDiffuse*=surfaceAlbedo;\n#if defined(SS_REFRACTION) && !defined(UNLIT) && !defined(LEGACY_SPECULAR_ENERGY_CONSERVATION)\nfinalDiffuse*=subSurfaceOut.refractionOpacity;\n#endif\n#if defined(SS_TRANSLUCENCY) && !defined(UNLIT)\nf … [truncated]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L242-L243` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L198-L199) · [Before (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L242-L243)

```diff
-       tz = "openpbrDirectLighting",
-       Dz = "#ifdef LIGHT{X}\n{var slab_diffuse: vec3f=vec3f(0.f,0.f,0.f);var slab_translucent: vec3f=vec3f(0.f,0.f,0.f);var slab_glossy: vec3f=vec3f(0.f,0.f,0.f);var specularFresnel: f32=0.0f;var specularColoredFresnel: vec3f=vec3f(0.f,0.f,0.f);var slab_metal: vec3f=vec3f(0.f,0.f … [truncated]
+       cc = "pbrBlockFinalColorComposition",
+       Oc = "var finalColor: vec4f= vec4f(\n#ifndef UNLIT\n#ifdef REFLECTION\nfinalIrradiance +\n#endif\n#ifdef SPECULARTERM\nfinalSpecularScaled +\n#endif\n#ifdef SHEEN\nfinalSheenScaled +\n#endif\n#ifdef CLEARCOAT\nfinalClearCoatScaled +\n#endif\n#ifdef REFLECTION\nfinalRadiance … [truncated]
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L249-L254` → after: `L205-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L205-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L205-L210) · [Before (L249-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L249-L254)

```diff
-     var yz = ZC(42322),
-       Lz = ZC(42328),
-       Uz = ZC(61381),
-       Bz = ZC(42334);
-     const Oz = "openpbrBlockPrePass",
-       kz = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nvar writeGeometryInfo: f32=1.0;\n#else\nvar writeGeometryInfo: f32=select(0.0,1.0,finalColor.a>ALPHATESTVALUE);\n#endif\nvar fragData: array<vec4<f32>,SCENE_MRT_COUNT>;\n#ifdef PREPASS_MESH_BLEND_TAG\nvar meshBlendTagOutput: ve … [truncated]
+     var Ic = cp(42820),
+       Sc = cp(42825),
+       xc = cp(61822),
+       Lc = cp(42831);
+     const Yc = "pbrBlockPrePass",
+       Dc = "#if SCENE_MRT_COUNT>0\n#ifdef ALPHATEST\nvar writeGeometryInfo: f32=1.0;\n#else\nvar writeGeometryInfo: f32=select(0.0,1.0,finalColor.a>ALPHATESTVALUE);\n#endif\nvar fragData: array<vec4<f32>,SCENE_MRT_COUNT>;\n#ifdef PREPASS_MESH_BLEND_TAG\nvar meshBlendTagOutput: ve … [truncated]
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L260-L263` → after: `L216-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L216-L219) · [Before (L260-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L260-L263)

```diff
-     var CZ = ZC(42343),
-       zZ = ZC(61388);
-     const ZZ = "openpbrPixelShader",
-       QZ = "#define OPENPBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_BEGIN\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#ifndef FROMLINEARSPACE\n#define FROMLINEARSPACE\n#endif\n#include<openpbrUboDeclaration>\n#include<pbrFragmentExtraDeclaration>\n# … [truncated]
+     var Pc = cp(42839),
+       Wc = cp(61824);
+     const yc = "pbrPixelShader",
+       Uc = "#define PBR_FRAGMENT_SHADER\n#define CUSTOM_FRAGMENT_BEGIN\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#ifndef FROMLINEARSPACE\n#define FROMLINEARSPACE\n#endif\n#include<pbrUboDeclaration>\n#include<pbrFragmentExtraDeclaration>\n#include< … [truncated]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/386.js` (Changed code · before: `L265` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9eR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-85ddbb5c8dcecf97483550c985fe9634b1bf2b0dc35b7b826154a2e62b065d9e) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/386.js#L221) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/386.js#L265)

```diff
-     const wZ = [wC.e, bC.b, nC.e, fC.c, oC.c, qC.e, FC.b, WC.b, NC.d, MC.d, gC.e, PC, GC.d, RC.b, AC.c, xC.d, JC.c, IC.b, iC.e, vC.b, eC.c, hC.b, KC.d, YC.e, dC.d, mC.e, HC.c, EC.c, lC.c, XC.d, cC.d, uC.c, rC.d, sC.d, tC, yC, LC.d, UC.c, kC, zz, Zz.d, Qz.b, nz, fz.b, oz.e, Wz, gz … [truncated]
+     const wc = [op.c, Ip.e, Sp.b, xp.e, Lp.e, Yp.d, Dp.e, Ap.c, Pp.e, Wp.d, wp, vp.e, dp, ep.d, jp.d, kp.d, mp.b, Rp.e, qp.e, Mp.d, Cp.b, Ep.d, Xp.e, lp.d, Qp.b, Jp.d, Bp.e, Np.b, Tp.c, fp.d, bp.c, hp.e, ap.d, np.b, Fp.c, gp.c, Gp.c, rp.c, Zp.d, Kp, ci, Ii, Li, Ai, yi, vi, di, ji … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/387.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/387.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bbed0cd75350073ed4cc8d514e3fc003c0ebee9e0ea9d5156357fdcb6a698358)

#### 1. `bundles/preprod.bloxd.io/chunks/js/387.js` (Changed code · before: `L4-L11` → after: `L4-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bbed0cd75350073ed4cc8d514e3fc003c0ebee9e0ea9d5156357fdcb6a698358R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bbed0cd75350073ed4cc8d514e3fc003c0ebee9e0ea9d5156357fdcb6a698358) · [After (L4-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/387.js#L4-L210) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/387.js#L4-L11)

```diff
-   61514: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       textureMergerPixelShaderWGSL: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "textureMergerPixelShader",
-       bC = "#ifdef USE_TEXTURE0\nvar inputTexture0Sampler: sampler;var inputTexture0: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE1\nvar inputTexture1Sampler: sampler;var inputTexture1: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE2\nvar inputTexture2Sampler: sampler;var inputText … [truncated]
-     QC.b.ShadersStoreWGSL[wC] || (QC.b.ShadersStoreWGSL[wC] = bC);
+   61754: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "harmonicsFunctions",
+       Ip = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   61799: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp
+ ... (191 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/388.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/388.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/388.js` (Changed code · before: `L4` → after: `L4-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3) · [After (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/388.js#L4-L31) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/388.js#L4)

```diff
-   61518: (CC, zC, ZC) => {
+   61754: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "harmonicsFunctions",
+       Ip = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   61875: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+ ... (12 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/388.js` (Changed code · before: `L6` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/388.js#L33) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/388.js#L6)

```diff
-       textureMergerPixelShader: () => nC
+       openpbrVertexShaderWGSL: () => zp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/388.js` (Changed code · before: `L8-L11` → after: `L35-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b18d8db289535a11573968e2caeb8db51d1225995a344ea288dc19d1d7d1ff3) · [After (L35-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/388.js#L35-L88) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/388.js#L8-L11)

```diff
-     var QC = ZC(39674);
-     const wC = "textureMergerPixelShader",
-       bC = "#ifdef USE_TEXTURE0\nuniform sampler2D inputTexture0;\n#endif\n#ifdef USE_TEXTURE1\nuniform sampler2D inputTexture1;\n#endif\n#ifdef USE_TEXTURE2\nuniform sampler2D inputTexture2;\n#endif\n#ifdef USE_TEXTURE3\nuniform sampler2D inputTexture3;\n#endif\n#ifdef RED_FROM_ … [truncated]
-     QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
+     var Op = cp(40062),
+       op = cp(42496),
+       Ip = cp(42498),
+       Sp = cp(61875),
+       xp = cp(42513),
+       Lp = cp(42542),
+       Yp = cp(42520),
+       Dp = cp(61745),
+       Ap = cp(42525),
+       Pp = cp(42527),
+       Wp = cp(42531),
+       yp = cp(42536),
+       Up = cp(42550),
+       wp = cp(61754);
+     const vp = "openpbrNormalMapVertexDeclaration",
+       tp = "#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(FUZZ)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+ ... (38 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/389.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/389.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/389.js` (Changed code · before: `L4` → after: `L4-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1) · [After (L4-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/389.js#L4-L96) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/389.js#L4)

```diff
-   61521: (CC, zC, ZC) => {
+   61844: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "openpbrDielectricReflectance",
+       Ip = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
+     Op.b.IncludesShadersStore[op] || (Op.b.IncludesShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   61849: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp
+ ... (77 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/389.js` (Changed code · before: `L6` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/389.js#L98) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/389.js#L6)

```diff
-       proceduralVertexShaderWGSL: () => nC
+       openpbrPixelShader: () => Dc
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/389.js` (Changed code · before: `L8-L11` → after: `L100-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3bcb84effecda5ab47139460f5cb2c01aa94fe6ecde266bf4a273aec2ac755e1) · [After (L100-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/389.js#L100-L285) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/389.js#L8-L11)

```diff
-     var QC = ZC(39674);
-     const wC = "proceduralVertexShader",
-       bC = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInput … [truncated]
-     QC.b.ShadersStoreWGSL[wC] || (QC.b.ShadersStoreWGSL[wC] = bC);
+     var Op = cp(40062),
+       op = cp(42362),
+       Ip = cp(42365),
+       Sp = cp(42369),
+       xp = cp(61840),
+       Lp = cp(42359);
+     const Yp = "openpbrFragmentDeclaration",
+       Dp = "uniform float vBaseWeight;uniform vec4 vBaseColor;uniform float vBaseDiffuseRoughness;uniform vec4 vReflectanceInfo;uniform vec4 vSpecularColor;uniform vec3 vSpecularAnisotropy;uniform float vTransmissionWeight;uniform vec3 vTransmissionColor;uniform float vTransmissi … [truncated]
+     Op.b.IncludesShadersStore[Yp] || (Op.b.IncludesShadersStore[Yp] = Dp);
+     const Ap = {
+       name: Yp,
+       shader: Dp
+     };
+     var Pp = cp(42157),
+       Wp = cp(42159),
+       yp = cp(61834),
+ ... (170 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/390.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/390.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L4` → after: `L4-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L4-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/390.js#L4-L83) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/390.js#L4)

```diff
-   61526: (CC, zC, ZC) => {
+   61883: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp
+     });
+     var Op = cp(40062);
+     const op = "openpbrDielectricReflectance",
+       Ip = "struct ReflectanceParams\n{F0: f32,\nF90: f32,\ncoloredF0: vec3f,\ncoloredF90: vec3f,};\n#define pbr_inline\nfn dielectricReflectance(\ninsideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32\n)->ReflectanceParams\n{var outParams: ReflectanceParams;let … [truncated]
+     Op.b.IncludesShadersStoreWGSL[op] || (Op.b.IncludesShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
+   },
+   61885: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp
+ ... (64 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L6` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/390.js#L85) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/390.js#L6)

```diff
-       proceduralVertexShader: () => nC
+       openpbrPixelShaderWGSL: () => Lc
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/390.js` (Changed code · before: `L8-L11` → after: `L87-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-590987ee7b5a7f5f8f5495bc1fb1fafa0bf91f8f2e379b8afe5476b273487ce2) · [After (L87-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/390.js#L87-L266) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/390.js#L8-L11)

```diff
-     var QC = ZC(39674);
-     const wC = "proceduralVertexShader",
-       bC = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#defi … [truncated]
-     QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
+     var Op = cp(40062),
+       op = cp(42711),
+       Ip = cp(42714),
+       Sp = cp(42718),
+       xp = cp(42496),
+       Lp = cp(42498),
+       Yp = cp(61875),
+       Dp = cp(42542),
+       Ap = cp(61762),
+       Pp = cp(42721),
+       Wp = cp(42742),
+       yp = cp(61766);
+     const Up = "openpbrFragmentSamplersDeclaration",
+       wp = "#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor,_SAMPLERNAME_,baseColor)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)\n#include<samplerFragmentDeclaration>(_DEFIN … [truncated]
+     Op.b.IncludesShadersStoreWGSL[Up] || (Op.b.IncludesShadersStoreWGSL[Up] = wp);
+     const vp = {
+ ... (164 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/391.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/391.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fc2fa7cf5787f7b68eb33dd14be729956504c25d199f1672f8c3e2aa16abfee0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/391.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fc2fa7cf5787f7b68eb33dd14be729956504c25d199f1672f8c3e2aa16abfee0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fc2fa7cf5787f7b68eb33dd14be729956504c25d199f1672f8c3e2aa16abfee0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/391.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/391.js#L4)

```diff
-   61539: (CC, zC, ZC) => {
+   61931: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/391.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fc2fa7cf5787f7b68eb33dd14be729956504c25d199f1672f8c3e2aa16abfee0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fc2fa7cf5787f7b68eb33dd14be729956504c25d199f1672f8c3e2aa16abfee0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/391.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/391.js#L6)

```diff
-       greasedLinePixelShaderWGSL: () => nC
+       textureMergerPixelShaderWGSL: () => Sp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/391.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fc2fa7cf5787f7b68eb33dd14be729956504c25d199f1672f8c3e2aa16abfee0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fc2fa7cf5787f7b68eb33dd14be729956504c25d199f1672f8c3e2aa16abfee0) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/391.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/391.js#L8-L10)

```diff
-     var QC = ZC(39674);
-     const wC = "greasedLinePixelShader",
-       bC = "var grlColors: texture_2d<f32>;var grlColorsSampler: sampler;uniform grlUseColors: f32;uniform grlUseDash: f32;uniform grlDashArray: f32;uniform grlDashOffset: f32;uniform grlDashRatio: f32;uniform grlVisibility: f32;uniform grlColorsWidth: f32;uniform grl_colorModeAn … [truncated]
+     var Op = cp(40062);
+     const op = "textureMergerPixelShader",
+       Ip = "#ifdef USE_TEXTURE0\nvar inputTexture0Sampler: sampler;var inputTexture0: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE1\nvar inputTexture1Sampler: sampler;var inputTexture1: texture_2d<f32>;\n#endif\n#ifdef USE_TEXTURE2\nvar inputTexture2Sampler: sampler;var inputText … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/392.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/392.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ae5e25c927d084e5cc1f04b3a66429d581d057d515b0febf4ebd6893b9290610)

#### 1. `bundles/preprod.bloxd.io/chunks/js/392.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ae5e25c927d084e5cc1f04b3a66429d581d057d515b0febf4ebd6893b9290610R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ae5e25c927d084e5cc1f04b3a66429d581d057d515b0febf4ebd6893b9290610) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/392.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/392.js#L4)

```diff
-   61553: (CC, zC, ZC) => {
+   61935: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/392.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ae5e25c927d084e5cc1f04b3a66429d581d057d515b0febf4ebd6893b9290610R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ae5e25c927d084e5cc1f04b3a66429d581d057d515b0febf4ebd6893b9290610) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/392.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/392.js#L6)

```diff
-       greasedLinePixelShader: () => nC
+       textureMergerPixelShader: () => Sp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/392.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ae5e25c927d084e5cc1f04b3a66429d581d057d515b0febf4ebd6893b9290610R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ae5e25c927d084e5cc1f04b3a66429d581d057d515b0febf4ebd6893b9290610) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/392.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/392.js#L8-L10)

```diff
-     var QC = ZC(39674);
-     const wC = "greasedLinePixelShader",
-       bC = "precision highp float;uniform sampler2D grlColors;uniform float grlUseColors;uniform float grlUseDash;uniform float grlDashArray;uniform float grlDashOffset;uniform float grlDashRatio;uniform float grlVisibility;uniform float grlColorsWidth;uniform vec2 grl_colorModeA … [truncated]
+     var Op = cp(40062);
+     const op = "textureMergerPixelShader",
+       Ip = "#ifdef USE_TEXTURE0\nuniform sampler2D inputTexture0;\n#endif\n#ifdef USE_TEXTURE1\nuniform sampler2D inputTexture1;\n#endif\n#ifdef USE_TEXTURE2\nuniform sampler2D inputTexture2;\n#endif\n#ifdef USE_TEXTURE3\nuniform sampler2D inputTexture3;\n#endif\n#ifdef RED_FROM_ … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/393.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/393.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d4a8410082d828caff5c447c296b3a23798afd0e599c853f90a945c4a13a1e2a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/393.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d4a8410082d828caff5c447c296b3a23798afd0e599c853f90a945c4a13a1e2aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d4a8410082d828caff5c447c296b3a23798afd0e599c853f90a945c4a13a1e2a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/393.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/393.js#L4)

```diff
-   61555: (CC, zC, ZC) => {
+   61942: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/393.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d4a8410082d828caff5c447c296b3a23798afd0e599c853f90a945c4a13a1e2aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d4a8410082d828caff5c447c296b3a23798afd0e599c853f90a945c4a13a1e2a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/393.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/393.js#L6-L7)

```diff
-       rebuildScenePbrPipelines: () => fC,
-       rebuildSceneRenderables: () => oC
+       proceduralVertexShaderWGSL: () => Sp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/393.js` (Changed code · before: `L9-L192` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d4a8410082d828caff5c447c296b3a23798afd0e599c853f90a945c4a13a1e2aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d4a8410082d828caff5c447c296b3a23798afd0e599c853f90a945c4a13a1e2a) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/393.js#L8-L14) · [Before (L9-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/393.js#L9-L192)

```diff
-     var QC = ZC(41540),
-       wC = (CC, zC) => CC.order - zC.order,
-       bC = 8,
-       nC = CC => oC(CC);
-     async function fC(CC) {
-       let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       await qC(CC, "pbr", zC)
-     }
-     async function oC(CC) {
-       await qC(CC, void 0, !1)
-     }
-     async function qC(CC, zC, fC) {
-       const oC = CC;
-       if (!oC._built && !fC) return;
-       const qC = oC._lightListVersion ?? 0,
-         FC = oC.surface.engine,
- ... (168 more removed lines; see GitHub link above)
+     var Op = cp(40062);
+     const op = "proceduralVertexShader",
+       Ip = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInput … [truncated]
+     Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/73.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/73.js` (1683 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51)

#### 1. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L4-L524` → after: `L4-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L4-L20) · [Before (L4-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L4-L524)

```diff
-   36909: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => QC
-     });
-     const QC = {
-       "AK-47": {
-         gunType: "semi_automatic",
-         scopeType: "none",
-         muzzleFlashOffsetFromGun: [-5.5, -.25, 0],
-         muzzleFlashScale: 1.5,
-         autoFireWithMouse: !0,
-         fireRate: 600,
-         cadenceMs: 75,
-         equipDelay: 24,
-         damage: 20,
-         reloadTime: 2300,
- ... (505 more removed lines; see GitHub link above)
+   9340: (pp, ip) => {
+     ip.d = 8, ip.l = function(pp, ip, cp, Op) {
+       if (!Array.isArray(pp)) return !!pp;
+       ip -= Math.floor(ip), cp -= Math.floor(cp), Op -= Math.floor(Op);
+       for (var op = 0; op < pp.length; op += 6)
+         if (ip >= pp[op] && ip < pp[op + 3] && cp >= pp[op + 1] && cp < pp[op + 4] && Op >= pp[op + 2] && Op < pp[op + 5]) return !0;
+       return !1
+     }, ip.h = function(pp) {
+       for (var ip = [], cp = 0; cp < pp.length; cp++) {
+         var Op = pp[cp];
+         if (2 !== Op.length || 3 !== Op[0].length || 3 !== Op[1].length) throw new Error("Subvoxel boxes must contain two three-dimensional bounds");
+         for (var op = 0; op < 3; op++) {
+           var Ip = Op[0][op],
+             Sp = Op[1][op];
+           if (!Number.isInteger(Ip) || !Number.isInteger(Sp) || Ip < 0 || Sp > 8 || Ip >= Sp) throw new Error("Subvoxel bounds must be integers satisfying 0 <= start < end <= 8");
+           ip[6 * cp + op] = Ip / 8, ip[6 * cp + op + 3] = Sp / 8
+ ... (1 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L526-L527` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L22-L23) · [Before (L526-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L526-L527)

```diff
-     };
-     for (const wC of Object.values(QC)) wC.msPerRound = 60 / wC.fireRate * 1e3, wC.msPerRoundTouchScreen = void 0 !== wC.fireRateWithHeldTouch ? 60 / wC.fireRateWithHeldTouch * 1e3 : wC.msPerRound, wC.cadenceMs ??= wC.msPerRound, wC.altYVelocityInaccuracy ??= wC.yVelocityInaccura … [truncated]
+       return ip
+     }
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L529` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L25) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L529)

```diff
-   36918: (CC, zC, ZC) => {
+   9414: (pp, ip, cp) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L532` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L30) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L532)

```diff
-       f: () => oC,
+       e: () => op,
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L534` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L32-L33) · [Before (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L534)

```diff
-       j: () => FC,
+       i: () => Lp,
+       l: () => vp,
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L536` → after: `L35-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L35-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L35-L39) · [Before (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L536)

```diff
-       o: () => pC
+       n: () => Sp,
+       o: () => Ip,
+       r: () => Wp,
+       v: () => Up,
+       z: () => yp
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L538-L541` → after: `L41-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L41-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L41-L46) · [Before (L538-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L538-L541)

```diff
-     var QC = ZC(326),
-       wC = ZC(590),
-       bC = ZC(330);
-     const nC = ["", "|meta|charging2", "|meta|charging3", "|meta|charging4"];
+     const Op = 39 == cp.j ? ["Conveyor Belt", "Splitter", "Sorting Gate", "Belt Loader", "Fast Belt", "Belt Lift", "Belt Drop", "Belt Tunnel", "Express Belt", "Fast Loader"] : null,
+       op = .002,
+       Ip = 2,
+       Sp = 3,
+       xp = .5,
+       Lp = 200;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L543-L544` → after: `L48-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L48-L50) · [Before (L543-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L543-L544)

```diff
-     function fC(CC, zC) {
-       return "" === zC ? CC : `${CC} ${zC}`
+     function Yp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : op;
+       return Math.max(0, Math.min((cp - pp) * Op, ip))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L547-L552` → after: `L53-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L53-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L53-L61) · [Before (L547-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L547-L552)

```diff
-     function oC(CC, zC, ZC, wC) {
-       const bC = CC.replace((0, QC.ne)(zC.material), (0, QC.ne)(ZC));
-       if (zC.kind === wC || "" === zC.kind) return bC;
-       const nC = (0, QC.ne)(zC.kind);
-       if (!bC.includes(nC)) throw new Error(`Cannot name assets for "${fC(ZC,wC)}": "${bC}" has no "${nC}" to replace`);
-       return bC.replace(nC, (0, QC.ne)(wC))
+     function Dp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : op;
+       const Ip = [];
+       let Sp = ip;
+       for (const op of pp) {
+         const pp = Yp(op.at, Sp, cp, Op);
+         Ip.push(pp), Sp = pp - xp
+       }
+       return Ip
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L555-L559` → after: `L64-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L64-L66) · [Before (L555-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L555-L559)

```diff
-     function qC(CC) {
-       return CC.creativeKinds ? CC.creativeKinds.flatMap((zC => CC.materials.map((CC => fC(CC, zC))))) : CC.materials.flatMap((zC => CC.kinds.filter((zC => {
-         var ZC;
-         return !(null !== (ZC = CC.hiddenKinds) && void 0 !== ZC && ZC.includes(zC))
-       })).map((CC => fC(zC, CC)))))
+     function Ap(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : op;
+       return 0 === pp.length ? 1 / 0 : pp[0].at + ip / cp
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L562-L563` → after: `L69-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L69-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L69-L76) · [Before (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L562-L563)

```diff
-     function FC(CC, zC) {
-       return CC.flatMap((CC => CC.kinds.includes(zC) ? CC.materials.map((CC => fC(CC, zC))) : []))
+     function Pp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : op,
+         Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
+       const Sp = Dp(pp, ip, cp, Op),
+         [xp] = pp.splice(Ip, 1);
+       return Sp.splice(Ip, 1), pp.forEach(((pp, ip) => {
+         pp.at = cp - Sp[ip] / Op
+       })), xp
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L565-L578` → after: `L78-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L78-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L78-L83) · [Before (L565-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L565-L578)

```diff
-     const WC = {
-       name: "diamondVariants",
-       materials: bC.n,
-       kinds: bC.j.map((CC => CC.trimStart())),
-       inheritsFrom: CC => ({
-         material: "Diamond",
-         kind: CC
-       }),
-       hiddenKinds: ["Crossbow Charged"],
-       creativeKinds: ["", "Fragment", "Pickaxe", "Axe", "Spade", "Hoe", "Sword", "Bow", "Crossbow", "Spear", "Dagger", "Club", "Mace", "Whip", "Boomerang", "Helmet", "Chestplate", "Gauntlets", "Leggings", "Boots"],
-       description: (CC, zC) => {
-         if ("Fragment" === zC) return {
-           translationKey: "Magmasteel" === CC ? "item:forgeFragmentDescription" : "item:elementalShardDescription"
-         }
+ 
+     function Wp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : op;
+       for (let op = Ap(pp, ip, Op); op <= cp; op = Ap(pp, ip, Op)) {
+         const cp = Pp(pp, ip, op, Op);
+         cp.at = op, pp.push(cp)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L580` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L85) · [Before (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L580)

```diff
-     };
+     }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L582` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L87) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L582)

```diff
-     function NC(CC) {
+     function yp(pp, ip, cp) {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L584` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L89-L90) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L584)

```diff
-         translationKey: `item:${(0,QC.ke)(CC)}`
+         name: pp,
+         at: cp - ip / (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : op)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L588-L595` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L131-L132) · [Before (L588-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L588-L595)

```diff
-         name: "decorativeArmour",
-         materials: bC.d,
-         kinds: wC.b,
-         inheritsFrom: CC => ({
-           material: "Diamond",
-           kind: CC
-         }),
-         displayName: NC
+         "Belt Lift": 1,
+         "Belt Drop": -1
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L598-L607` → after: `L154-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L154-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L154-L156) · [Before (L598-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L598-L607)

```diff
-         name: "keys",
-         materials: ["Wooden", "Stone", "Iron", "Gold", "Diamond"],
-         kinds: ["Key"],
-         metadata: () => ({
-           type: "Item",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !0
-         }),
-         displayName: NC
+         leftRight: "",
+         leftFront: "|leftFront",
+         frontRight: "|frontRight"
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L610-L611` → after: `L159-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L159-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L159-L161) · [Before (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L610-L611)

```diff
-         Staff: "Club",
-         Shard: "Fragment"
+         leftRight: ["right", "left"],
+         leftFront: ["left", "front"],
+         frontRight: ["front", "right"]
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L613-L631` → after: `L163-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L163-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L163-L203) · [Before (L613-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L613-L631)

```diff
-       pC = [WC, MC, {
-         name: "elemental",
-         materials: bC.p,
-         kinds: ["Shard", "Sword", "Bow", "Crossbow", "Crossbow Charged", "Spear", "Dagger", "Club", "Mace", "Whip", "Staff", ...wC.b],
-         inheritsFrom: CC => {
-           var zC;
-           return {
-             material: "Diamond",
-             kind: null !== (zC = SC[CC]) && void 0 !== zC ? zC : CC
-           }
-         },
-         hiddenKinds: ["Crossbow Charged"],
-         displayName: NC,
-         description: (CC, zC) => {
-           if ("Shard" === zC) return {
-             translationKey: "Sanguine" === CC || "Astral" === CC ? "item:forgeFragmentDescription" : "item:elementalShardDescription"
- ... (3 more removed lines; see GitHub link above)
+       Up = "|right";
+ 
+     function wp(pp) {
+       return pp.split("|")[0] !== Ap ? null : pp.endsWith(Wp.leftFront) ? "leftFront" : pp.endsWith(Wp.frontRight) ? "frontRight" : "leftRight"
+     }
+ 
+     function vp(pp, ip, cp) {
+       return function(pp) {
+         const ip = wp(pp);
+         return null === ip ? [] : yp[ip]
+       }(pp).map((pp => "right" === pp ? [cp, -ip] : "left" === pp ? [-cp, ip] : [ip, cp]))
+     }
+ 
+     function tp(pp) {
+       return pp.split("|")[0] === Pp && pp.endsWith(Up)
+     }
+ ... (25 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L633` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L205) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L633)

```diff
-   36897: (CC, zC, ZC) => {
+   9338: (pp, ip, cp) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L637` → after: `L210-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L210-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L210-L213) · [Before (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L637)

```diff
-       i: () => xC,
+       f: () => np,
+       h: () => bp,
+       j: () => gp,
+       k: () => hp,
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L639-L641` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L215) · [Before (L639-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L639-L641)

```diff
-       m: () => vC,
-       n: () => hC,
-       r: () => IC
+       p: () => Xp
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L643-L656` → after: `L217-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L217-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L217-L239) · [Before (L643-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L643-L656)

```diff
-     var QC = ZC(326),
-       wC = ZC(9239),
-       bC = ZC(4386),
-       nC = ZC(9194),
-       fC = ZC(9217),
-       oC = ZC(36902),
-       qC = ZC(36918),
-       FC = ZC(36926),
-       WC = ZC(36932);
-     const NC = 16,
-       MC = {
-         comboWindowMs: 800,
-         comboMultipliers: [.5, 2 / 3, 5 / 6, 1],
-         backstabAngle: 2 * Math.PI / 3
+     var Op = cp(9340);
+     if (39 == cp.j) var op = cp(209);
+     var Ip = cp(9348),
+       Sp = cp(9427),
+       xp = cp(9429),
+       Lp = cp(9368),
+       Yp = cp(3289),
+       Dp = cp(337),
+       Ap = cp(4543),
+       Pp = cp(9385),
+       Wp = cp(636),
+       yp = cp(4334),
+       Up = cp(9359),
+       wp = cp(9404);
+     if (39 == cp.j) var vp = cp(9436);
+     var tp = cp(9438),
+ ... (7 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L658-L659` → after: `L241-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L241-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L241-L610) · [Before (L658-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L658-L659)

```diff
-       gC = {
-         "Wood Pickaxe": {
+       itemTexture: "slime_trail",
+       solid: !1,
+       model: "rotatable",
+       modelScale: 8,
+       customModelInfo: {
+         yOffset: -.5,
+         unlit: !0,
+         yRotOffset: -Math.PI / 2
+       },
+       blockModel: "slime_trail",
+       heldItemGlb: "Slime Trail",
+       unlitStandaloneMesh: !0,
+       Jy: [14, 8, 11],
+       drops: null,
+       specialToolDrop: {
+         tool: [...Dp.ee],
+ ... (354 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L661` → after: `L612-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L612-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L612-L613) · [Before (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L661)

```diff
-             translationKey: "item:woodPickaxe"
+             translationKey: "item:colouredChalkBricksStairs",
+             params: ip
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L669` → after: `L616-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L616-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L616-L617) · [Before (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L669)

```diff
-             translationKey: "item:pickaxeDescription"
+             translationKey: "item:colouredChalkBricksStairsDescription",
+             params: ip
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L671-L674` → after: `L619-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L619-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L619-L626) · [Before (L671-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L671-L674)

```diff
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 2,
-           level: 1
+           ttb: 850,
+           textureInfo: `chalk_bricks_${(0,Dp.se)(pp)}`,
+           harvestType: "rock"
+         }
+       }))],
+       mp = {
+         displayName: {
+           translationKey: "item:chest"
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L676-L691` → after: `L628-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L628-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L628-L635) · [Before (L676-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L676-L691)

```diff
-         "Stone Pickaxe": {
-           displayName: {
-             translationKey: "item:stonePickaxe"
-           },
-           type: "Tool",
-           textureInfo: "stone_pickaxe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 22,
-           description: {
-             translationKey: "item:pickaxeDescription"
-           },
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 3.5,
-           level: 2
+         ttb: 3e3,
+         harvestType: "wood"
+       },
+       Rp = {
+         Unloaded: {
+           ttb: 100,
+           textureInfo: "unloaded",
+           harvestType: "granule"
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L693` → after: `L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L637) · [Before (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L693)

```diff
-         "Iron Pickaxe": {
+         Dirt: {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L695-L703` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L639) · [Before (L695-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L695-L703)

```diff
-             translationKey: "item:ironPickaxe"
-           },
-           type: "Tool",
-           textureInfo: "iron_pickaxe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 27,
-           description: {
-             translationKey: "item:pickaxeDescription"
+             translationKey: "item:dirt"
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L705-L708` → after: `L641-L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L641-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L641-L643) · [Before (L705-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L705-L708)

```diff
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 6,
-           level: 3
+           ttb: 600,
+           textureInfo: "dirt",
+           harvestType: "granule"
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L710` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L645) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L710)

```diff
-         "Gold Pickaxe": {
+         "Messy Dirt": {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L712` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L647) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L712)

```diff
-             translationKey: "item:goldPickaxe"
+             translationKey: "item:messyDirt"
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L714-L725` → after: `L649-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L649-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L649-L651) · [Before (L714-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L714-L725)

```diff
-           type: "Tool",
-           textureInfo: "golden_pickaxe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 30,
-           description: {
-             translationKey: "item:pickaxeDescription"
-           },
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 7,
-           level: 4
+           ttb: 600,
+           textureInfo: "coarse_dirt",
+           harvestType: "granule"
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L727` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L653) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L727)

```diff
-         "Diamond Pickaxe": {
+         "Grass Block": {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L729-L737` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L655) · [Before (L729-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L729-L737)

```diff
-             translationKey: "item:diamondPickaxe"
-           },
-           type: "Tool",
-           textureInfo: "diamond_pickaxe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 32,
-           description: {
-             translationKey: "item:pickaxeDescription"
+             translationKey: "item:grassBlock"
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L739-L742` → after: `L657-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L657-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L657-L664) · [Before (L739-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L739-L742)

```diff
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 8,
-           level: 5
+           ttb: 720,
+           textureInfo: ["grass_block_side", "grass_top", "dirt"],
+           texturePerSide: [0, 0, 1, 2, 0, 0],
+           harvestType: "granule",
+           soundType: {
+             break: "grass",
+             place: "grass"
+           }
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L744` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L666) · [Before (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L744)

```diff
-         "Moonstone Pickaxe": {
+         Sand: {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L746-L754` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L668) · [Before (L746-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L746-L754)

```diff
-             translationKey: "item:moonstonePickaxe"
-           },
-           type: "Tool",
-           textureInfo: "moonstone_pickaxe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 32,
-           description: {
-             translationKey: "item:moonstonePickaxeDescription"
+             translationKey: "item:sand"
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L756-L759` → after: `L670-L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L670-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L670-L676) · [Before (L756-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L756-L759)

```diff
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 9,
-           level: 5
+           ttb: 600,
+           textureInfo: "sand",
+           harvestType: "granule",
+           soundType: {
+             break: "sand",
+             place: "sand"
+           }
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L761` → after: `L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L678) · [Before (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L761)

```diff
-         "Golem Pickaxe": {
+         Clay: {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L763-L771` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L680) · [Before (L763-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L763-L771)

```diff
-             translationKey: "item:golemPickaxe"
-           },
-           type: "Tool",
-           textureInfo: "golem_pickaxe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 32,
-           description: {
-             translationKey: "item:golemPickaxeDescription"
+             translationKey: "item:clay"
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L773-L776` → after: `L682-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L682-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L682-L684) · [Before (L773-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L773-L776)

```diff
-           stackable: !1,
-           harvests: "rock",
-           multiplier: 8,
-           level: 5
+           ttb: 720,
+           textureInfo: "clay",
+           harvestType: "granule"
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L778` → after: `L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L686) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L778)

```diff
-         "Wood Axe": {
+         Gravel: {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L780-L788` → after: `L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L688) · [Before (L780-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L780-L788)

```diff
-             translationKey: "item:woodAxe"
-           },
-           type: "Tool",
-           textureInfo: "wooden_axe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 20,
-           description: {
-             translationKey: "item:axeDescription"
+             translationKey: "item:gravel"
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L790-L793` → after: `L690-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L690-L692) · [Before (L790-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L790-L793)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 2,
-           level: 1
+           ttb: 720,
+           textureInfo: "gravel",
+           harvestType: "granule"
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L795` → after: `L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L694) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L795)

```diff
-         "Stone Axe": {
+         Snow: {
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L797-L805` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L696) · [Before (L797-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L797-L805)

```diff
-             translationKey: "item:stoneAxe"
-           },
-           type: "Tool",
-           textureInfo: "stone_axe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 24,
-           description: {
-             translationKey: "item:axeDescription"
+             translationKey: "item:snow"
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L807-L810` → after: `L698-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L698-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L698-L704) · [Before (L807-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L807-L810)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 3.5,
-           level: 2
+           ttb: 600,
+           textureInfo: "snow",
+           harvestType: "granule",
+           soundType: {
+             break: "snow",
+             place: "snow"
+           }
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L812` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L706) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L812)

```diff
-         "Iron Axe": {
+         "Maple Log": {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L814-L822` → after: `L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L708) · [Before (L814-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L814-L822)

```diff
-             translationKey: "item:ironAxe"
-           },
-           type: "Tool",
-           textureInfo: "iron_axe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 31,
-           description: {
-             translationKey: "item:axeDescription"
+             translationKey: "item:mapleLog"
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L824-L827` → after: `L710-L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L710-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L710-L712) · [Before (L824-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L824-L827)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 6,
-           level: 3
+           ttb: 2400,
+           textureInfo: "log_maple",
+           harvestType: "wood"
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L829` → after: `L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L714) · [Before (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L829)

```diff
-         "Gold Axe": {
+         "Pine Log": {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L831` → after: `L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L716) · [Before (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L831)

```diff
-             translationKey: "item:goldAxe"
+             translationKey: "item:pineLog"
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L833-L844` → after: `L718-L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L718-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L718-L720) · [Before (L833-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L833-L844)

```diff
-           type: "Tool",
-           textureInfo: "golden_axe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 33,
-           description: {
-             translationKey: "item:axeDescription"
-           },
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 7,
-           level: 4
+           ttb: 2400,
+           textureInfo: "log_pine",
+           harvestType: "wood"
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L846` → after: `L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L722) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L846)

```diff
-         "Diamond Axe": {
+         "Plum Log": {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L848-L856` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L724) · [Before (L848-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L848-L856)

```diff
-             translationKey: "item:diamondAxe"
-           },
-           type: "Tool",
-           textureInfo: "diamond_axe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 36,
-           description: {
-             translationKey: "item:axeDescription"
+             translationKey: "item:plumLog"
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L858-L861` → after: `L726-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L726-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L726-L728) · [Before (L858-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L858-L861)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 8,
-           level: 5
+           ttb: 2400,
+           textureInfo: "log_plum",
+           harvestType: "wood"
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L863` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L730) · [Before (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L863)

```diff
-         "Moonstone Axe": {
+         "Cedar Log": {
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L865-L889` → after: `L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L732) · [Before (L865-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L865-L889)

```diff
-             translationKey: "item:moonstoneAxe"
-           },
-           type: "Tool",
-           textureInfo: "moonstone_axe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 36,
-           description: {
-             translationKey: "item:moonstoneAxeDescription"
-           },
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 9,
-           level: 5,
-           lumberjackHeight: 6
-         },
- ... (9 more removed lines; see GitHub link above)
+             translationKey: "item:cedarLog"
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L891-L894` → after: `L734-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L734-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L734-L736) · [Before (L891-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L891-L894)

```diff
-           stackable: !1,
-           harvests: "wood",
-           multiplier: 6,
-           level: 3
+           ttb: 2400,
+           textureInfo: "log_cedar",
+           harvestType: "wood"
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L896` → after: `L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L738) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L896)

```diff
-         "Wood Spade": {
+         "Aspen Log": {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L898-L906` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L740) · [Before (L898-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L898-L906)

```diff
-             translationKey: "item:woodSpade"
-           },
-           type: "Tool",
-           textureInfo: "wooden_shovel",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 15,
-           description: {
-             translationKey: "item:spadeDescription"
+             translationKey: "item:aspenLog"
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L908-L911` → after: `L742-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L742-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L742-L744) · [Before (L908-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L908-L911)

```diff
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 2,
-           level: 1
+           ttb: 2400,
+           textureInfo: "log_aspen",
+           harvestType: "wood"
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L913` → after: `L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L746) · [Before (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L913)

```diff
-         "Stone Spade": {
+         "Jungle Log": {
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L915-L923` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L748) · [Before (L915-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L915-L923)

```diff
-             translationKey: "item:stoneSpade"
-           },
-           type: "Tool",
-           textureInfo: "stone_shovel",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 19,
-           description: {
-             translationKey: "item:spadeDescription"
+             translationKey: "item:jungleLog"
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L925-L928` → after: `L750-L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L750-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L750-L752) · [Before (L925-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L925-L928)

```diff
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 3.5,
-           level: 2
+           ttb: 2400,
+           textureInfo: "log_jungle",
+           harvestType: "wood"
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L930` → after: `L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L754) · [Before (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L930)

```diff
-         "Iron Spade": {
+         "Maple Wood Planks": {
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L932-L940` → after: `L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L756) · [Before (L932-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L932-L940)

```diff
-             translationKey: "item:ironSpade"
-           },
-           type: "Tool",
-           textureInfo: "iron_shovel",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 24,
-           description: {
-             translationKey: "item:spadeDescription"
+             translationKey: "item:mapleWoodPlanks"
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L942-L945` → after: `L758-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L758-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L758-L760) · [Before (L942-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L942-L945)

```diff
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 6,
-           level: 3
+           ttb: 1800,
+           textureInfo: "planks_maple",
+           harvestType: "wood"
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L947` → after: `L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L762) · [Before (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L947)

```diff
-         "Gold Spade": {
+         "Aspen Wood Planks": {
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L949` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L764) · [Before (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L949)

```diff
-             translationKey: "item:goldSpade"
+             translationKey: "item:aspenWoodPlanks"
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L951-L962` → after: `L766-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L766-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L766-L768) · [Before (L951-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L951-L962)

```diff
-           type: "Tool",
-           textureInfo: "golden_shovel",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 26,
-           description: {
-             translationKey: "item:spadeDescription"
-           },
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 7,
-           level: 4
+           ttb: 1800,
+           textureInfo: "planks_aspen",
+           harvestType: "wood"
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L964` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L770) · [Before (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L964)

```diff
-         "Diamond Spade": {
+         "Plum Wood Planks": {
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L966-L974` → after: `L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L772) · [Before (L966-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L966-L974)

```diff
-             translationKey: "item:diamondSpade"
-           },
-           type: "Tool",
-           textureInfo: "diamond_shovel",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 28,
-           description: {
-             translationKey: "item:spadeDescription"
+             translationKey: "item:plumWoodPlanks"
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L976-L979` → after: `L774-L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L774-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L774-L776) · [Before (L976-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L976-L979)

```diff
-           stackable: !1,
-           harvests: "granule",
-           multiplier: 8,
-           level: 5
+           ttb: 1800,
+           textureInfo: "planks_plum",
+           harvestType: "wood"
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L981` → after: `L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L778) · [Before (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L981)

```diff
-         "Wood Sword": {
+         "Jungle Wood Planks": {
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L983-L991` → after: `L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L780) · [Before (L983-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L983-L991)

```diff
-             translationKey: "item:woodSword"
-           },
-           type: "Tool",
-           textureInfo: "wooden_sword",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 22,
-           description: {
-             translationKey: "item:swordDescription"
+             translationKey: "item:jungleWoodPlanks"
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L993-L996` → after: `L782-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L782-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L782-L784) · [Before (L993-L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L993-L996)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 1
+           ttb: 1800,
+           textureInfo: "planks_jungle",
+           harvestType: "wood"
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L998` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L786) · [Before (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L998)

```diff
-         "Stone Sword": {
+         "Pine Wood Planks": {
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1000` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L788) · [Before (L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1000)

```diff
-             translationKey: "item:stoneSword"
+             translationKey: "item:pineWoodPlanks"
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1002-L1013` → after: `L790-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L790-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L790-L792) · [Before (L1002-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1002-L1013)

```diff
-           type: "Tool",
-           textureInfo: "stone_sword",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 27,
-           description: {
-             translationKey: "item:swordDescription"
-           },
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 2
+           ttb: 1800,
+           textureInfo: "planks_pine",
+           harvestType: "wood"
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1015` → after: `L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L794) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1015)

```diff
-         "Iron Sword": {
+         "Cedar Wood Planks": {
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1017-L1025` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L796) · [Before (L1017-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1017-L1025)

```diff
-             translationKey: "item:ironSword"
-           },
-           type: "Tool",
-           textureInfo: "iron_sword",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 34,
-           description: {
-             translationKey: "item:swordDescription"
+             translationKey: "item:cedarWoodPlanks"
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1027-L1030` → after: `L798-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L798-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L798-L800) · [Before (L1027-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1027-L1030)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 3
+           ttb: 1800,
+           textureInfo: "planks_cedar",
+           harvestType: "wood"
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1032` → after: `L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L802) · [Before (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1032)

```diff
-         "Gold Sword": {
+         "Barkless Maple Log": {
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1034` → after: `L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L804) · [Before (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1034)

```diff
-             translationKey: "item:goldSword"
+             translationKey: "item:barklessMapleLog"
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1036-L1047` → after: `L806-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L806-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L806-L808) · [Before (L1036-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1036-L1047)

```diff
-           type: "Tool",
-           textureInfo: "golden_sword",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 37,
-           description: {
-             translationKey: "item:swordDescription"
-           },
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 4
+           ttb: 2e3,
+           textureInfo: "stripped_maple_log",
+           harvestType: "wood"
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1049` → after: `L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L810) · [Before (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1049)

```diff
-         "Diamond Sword": {
+         "Barkless Aspen Log": {
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1051-L1059` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L812) · [Before (L1051-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1051-L1059)

```diff
-             translationKey: "item:diamondSword"
-           },
-           type: "Tool",
-           textureInfo: "diamond_sword",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 40,
-           description: {
-             translationKey: "item:swordDescription"
+             translationKey: "item:barklessAspenLog"
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1061-L1064` → after: `L814-L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L814-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L814-L816) · [Before (L1061-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1061-L1064)

```diff
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5
+           ttb: 2e3,
+           textureInfo: "stripped_aspen_log",
+           harvestType: "wood"
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1066` → after: `L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L818) · [Before (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1066)

```diff
-         "Knight Sword": {
+         "Barkless Plum Log": {
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1068` → after: `L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L820) · [Before (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1068)

```diff
-             translationKey: "item:knightSword"
+             translationKey: "item:barklessPlumLog"
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1070-L1082` → after: `L822-L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L822-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L822-L824) · [Before (L1070-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1070-L1082)

```diff
-           type: "Tool",
-           textureInfo: "knight_sword",
-           weight: 1,
-           heldItemScale: 1.1,
-           damage: 43,
-           knockbackHorizontalScalar: 1.7,
-           description: {
-             translationKey: "item:knightSwordDescription"
-           },
-           stackable: !1,
-           harvests: null,
-           multiplier: 2,
-           level: 5
+           ttb: 2e3,
+           textureInfo: "stripped_plum_log",
+           harvestType: "wood"
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1084` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L826) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1084)

```diff
-         "Wood Hoe": {
+         "Barkless Jungle Log": {
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1086-L1094` → after: `L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L828) · [Before (L1086-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1086-L1094)

```diff
-             translationKey: "item:woodHoe"
-           },
-           type: "Tool",
-           textureInfo: "wooden_hoe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 15,
-           description: {
-             translationKey: "item:hoeDescription"
+             translationKey: "item:barklessJungleLog"
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1096-L1099` → after: `L830-L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L830-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L830-L832) · [Before (L1096-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1096-L1099)

```diff
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 2,
-           level: 1
+           ttb: 2e3,
+           textureInfo: "stripped_jungle_log",
+           harvestType: "wood"
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1101` → after: `L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L834) · [Before (L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1101)

```diff
-         "Stone Hoe": {
+         "Barkless Pine Log": {
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1103-L1111` → after: `L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L836) · [Before (L1103-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1103-L1111)

```diff
-             translationKey: "item:stoneHoe"
-           },
-           type: "Tool",
-           textureInfo: "stone_hoe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 19,
-           description: {
-             translationKey: "item:hoeDescription"
+             translationKey: "item:barklessPineLog"
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1113-L1116` → after: `L838-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L838-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L838-L840) · [Before (L1113-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1113-L1116)

```diff
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 2.5,
-           level: 2
+           ttb: 2e3,
+           textureInfo: "stripped_pine_log",
+           harvestType: "wood"
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1118` → after: `L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L842) · [Before (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1118)

```diff
-         "Iron Hoe": {
+         "Barkless Cedar Log": {
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1120` → after: `L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L844) · [Before (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1120)

```diff
-             translationKey: "item:ironHoe"
+             translationKey: "item:barklessCedarLog"
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1122-L1133` → after: `L846-L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L846-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L846-L848) · [Before (L1122-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1122-L1133)

```diff
-           type: "Tool",
-           textureInfo: "iron_hoe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 24,
-           description: {
-             translationKey: "item:hoeDescription"
-           },
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 3.25,
-           level: 3
+           ttb: 2e3,
+           textureInfo: "stripped_cedar_log",
+           harvestType: "wood"
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1135-L1150` → after: `L850-L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L850-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L850-L853) · [Before (L1135-L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1135-L1150)

```diff
-         "Gold Hoe": {
-           displayName: {
-             translationKey: "item:goldHoe"
-           },
-           type: "Tool",
-           textureInfo: "golden_hoe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 26,
-           description: {
-             translationKey: "item:hoeDescription"
-           },
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 3.75,
-           level: 4
+         free_placeholder2: {
+           ttb: 1800,
+           textureInfo: "messy_stone",
+           harvestType: "rock"
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1152` → after: `L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L855) · [Before (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1152)

```diff
-         "Diamond Hoe": {
+         Stone: {
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1154` → after: `L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L857) · [Before (L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1154)

```diff
-             translationKey: "item:diamondHoe"
+             translationKey: "item:stone"
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1156-L1167` → after: `L859-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L859-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L859-L866) · [Before (L1156-L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1156-L1167)

```diff
-           type: "Tool",
-           textureInfo: "diamond_hoe",
-           weight: 1,
-           heldItemScale: 1,
-           damage: 28,
-           description: {
-             translationKey: "item:hoeDescription"
-           },
-           stackable: !1,
-           harvests: "cuttable",
-           multiplier: 4.25,
-           level: 5
+           ttb: 1800,
+           textureInfo: "stone",
+           harvestType: "rock",
+           drops: "Messy Stone",
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: "Stone"
+           }
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1169` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L868) · [Before (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1169)

```diff
-         Flashlight: {
+         "Messy Stone": {
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1171` → after: `L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L870) · [Before (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1171)

```diff
-             translationKey: "item:flashlight"
+             translationKey: "item:messyStone"
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1173-L1185` → after: `L872-L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L872-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L872-L879) · [Before (L1173-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1173-L1185)

```diff
-           description: {
-             translationKey: "item:flashlightDescription"
-           },
-           type: "Item",
-           textureInfo: "flashlight",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           ig: [15, 15, 15],
-           spotlightRange: 20,
-           spotlightConeAngle: 60,
-           firstPersonHeldRotationOffset: [-.34, -.014, .081],
-           thirdPersonHeldRotationOffset: [Math.PI / 2, 0, 0]
+           ttb: 1800,
+           textureInfo: "messy_stone",
+           harvestType: "rock"
+         },
+         free_placeholder: {
+           ttb: 1800,
+           textureInfo: "messy_stone",
+           harvestType: "rock"
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1187` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L881) · [Before (L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1187)

```diff
-         "Mining Helmet": {
+         "Smooth Stone": {
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1189` → after: `L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L883) · [Before (L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1189)

```diff
-             translationKey: "item:miningHelmet"
+             translationKey: "item:smoothStone"
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1191-L1202` → after: `L885-L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L885-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L885-L887) · [Before (L1191-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1191-L1202)

```diff
-           description: {
-             translationKey: "item:miningHelmetDescription"
-           },
-           type: "Armour",
-           textureInfo: "mining_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07,
-           ig: [15, 14, 11],
-           spotlightRange: 12,
-           spotlightConeAngle: 90
+           ttb: 1800,
+           textureInfo: "smooth_stone",
+           harvestType: "rock"
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1204` → after: `L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L889) · [Before (L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1204)

```diff
-         "Wood Helmet": {
+         Diorite: {
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1206` → after: `L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L891) · [Before (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1206)

```diff
-             translationKey: "item:woodHelmet"
+             translationKey: "item:diorite"
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1208-L1213` → after: `L893-L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L893-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L893-L895) · [Before (L1208-L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1208-L1213)

```diff
-           type: "Armour",
-           textureInfo: "wood_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           ttb: 1800,
+           textureInfo: "stone_diorite",
+           harvestType: "rock"
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1215` → after: `L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L897) · [Before (L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1215)

```diff
-         "Iron Helmet": {
+         "Smooth Diorite": {
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1217` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L899) · [Before (L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1217)

```diff
-             translationKey: "item:ironHelmet"
+             translationKey: "item:smoothDiorite"
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1219-L1224` → after: `L901-L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L901-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L901-L903) · [Before (L1219-L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1219-L1224)

```diff
-           type: "Armour",
-           textureInfo: "iron_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .09
+           ttb: 1800,
+           textureInfo: "stone_diorite_smooth",
+           harvestType: "rock"
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1226` → after: `L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L905) · [Before (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1226)

```diff
-         "Gold Helmet": {
+         Andesite: {
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1228` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L907) · [Before (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1228)

```diff
-             translationKey: "item:goldHelmet"
+             translationKey: "item:andesite"
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1230-L1235` → after: `L909-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L909-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L909-L911) · [Before (L1230-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1230-L1235)

```diff
-           type: "Armour",
-           textureInfo: "golden_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .11
+           ttb: 1800,
+           textureInfo: "stone_andesite",
+           harvestType: "rock"
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1237` → after: `L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L913) · [Before (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1237)

```diff
-         "Diamond Helmet": {
+         "Smooth Andesite": {
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1239` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L915) · [Before (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1239)

```diff
-             translationKey: "item:diamondHelmet"
+             translationKey: "item:smoothAndesite"
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1241-L1246` → after: `L917-L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L917-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L917-L919) · [Before (L1241-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1241-L1246)

```diff
-           type: "Armour",
-           textureInfo: "diamond_helmet",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 1800,
+           textureInfo: "stone_andesite_smooth",
+           harvestType: "rock"
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1248` → after: `L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L921) · [Before (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1248)

```diff
-         "Wood Chestplate": {
+         Granite: {
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1250` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L923) · [Before (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1250)

```diff
-             translationKey: "item:woodChestplate"
+             translationKey: "item:granite"
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1252-L1257` → after: `L925-L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L925-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L925-L927) · [Before (L1252-L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1252-L1257)

```diff
-           type: "Armour",
-           textureInfo: "wood_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .13
+           ttb: 1800,
+           textureInfo: "stone_granite",
+           harvestType: "rock"
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1259` → after: `L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L929) · [Before (L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1259)

```diff
-         "Iron Chestplate": {
+         "Smooth Granite": {
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1261` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L931) · [Before (L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1261)

```diff
-             translationKey: "item:ironChestplate"
+             translationKey: "item:smoothGranite"
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1263-L1268` → after: `L933-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L933-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L933-L935) · [Before (L1263-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1263-L1268)

```diff
-           type: "Armour",
-           textureInfo: "iron_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .18
+           ttb: 1800,
+           textureInfo: "stone_granite_smooth",
+           harvestType: "rock"
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1270` → after: `L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L937) · [Before (L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1270)

```diff
-         "Gold Chestplate": {
+         Sandstone: {
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1272` → after: `L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L939) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1272)

```diff
-             translationKey: "item:goldChestplate"
+             translationKey: "item:sandstone"
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1274-L1279` → after: `L941-L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L941-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L941-L943) · [Before (L1274-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1274-L1279)

```diff
-           type: "Armour",
-           textureInfo: "golden_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .21
+           ttb: 960,
+           textureInfo: "sandstone_normal",
+           harvestType: "rock"
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1281` → after: `L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L945) · [Before (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1281)

```diff
-         "Diamond Chestplate": {
+         Yellowstone: {
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1283` → after: `L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L947) · [Before (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1283)

```diff
-             translationKey: "item:diamondChestplate"
+             translationKey: "item:yellowstone"
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1285-L1290` → after: `L949-L951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L949-L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L949-L951) · [Before (L1285-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1285-L1290)

```diff
-           type: "Armour",
-           textureInfo: "diamond_chestplate",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .24
+           ttb: 3600,
+           textureInfo: "end_stone",
+           harvestType: "rock"
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1292` → after: `L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L953) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1292)

```diff
-         "Fur Chestplate": {
+         "Coal Ore": {
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1294` → after: `L955-L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L955-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L955-L966) · [Before (L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1294)

```diff
-             translationKey: "item:furChestplate"
+             translationKey: "item:coalOre"
+           },
+           ttb: 3e3,
+           textureInfo: "coal_ore",
+           harvestType: "rock",
+           drops: "Coal",
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: "Coal Ore"
+           },
+           specialToolBonusDrops: {
+             "Golem Pickaxe": Ap.v
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1301` → after: `L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L969) · [Before (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1301)

```diff
-             translationKey: "item:furChestplateDescription"
+             translationKey: "item:coalOreDescription"
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1303-L1305` → after: `L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L971) · [Before (L1303-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1303-L1305)

```diff
-           stackable: !1,
-           armourReduction: .22,
-           knockbackReduction: 1
+           onMinedAura: 5
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1307` → after: `L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L973) · [Before (L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1307)

```diff
-         "Wood Leggings": {
+         "Iron Ore": {
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1309` → after: `L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L975) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1309)

```diff
-             translationKey: "item:woodLeggings"
+             translationKey: "item:ironOre"
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1311-L1320` → after: `L977-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L977-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L977-L983) · [Before (L1311-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1311-L1320)

```diff
-           type: "Armour",
-           textureInfo: "wood_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
-         },
-         "Iron Leggings": {
-           displayName: {
-             translationKey: "item:ironLeggings"
+           ttb: 3600,
+           textureInfo: "iron_ore",
+           harvestType: "rock",
+           drops: "Raw Iron",
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: "Iron Ore"
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1322-L1331` → after: `L985-L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L985-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L985-L986) · [Before (L1322-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1322-L1331)

```diff
-           type: "Armour",
-           textureInfo: "iron_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .14
-         },
-         "Gold Leggings": {
-           displayName: {
-             translationKey: "item:goldLeggings"
+           specialToolBonusDrops: {
+             "Golem Pickaxe": Ap.v
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1333-L1338` → after: `L988-L989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L988-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L988-L989) · [Before (L1333-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1333-L1338)

```diff
-           type: "Armour",
-           textureInfo: "golden_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .16
+           harvestLevel: 2,
+           onMinedAura: 15
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1340` → after: `L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L991) · [Before (L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1340)

```diff
-         "Diamond Leggings": {
+         "Gold Ore": {
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1342` → after: `L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L993) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1342)

```diff
-             translationKey: "item:diamondLeggings"
+             translationKey: "item:goldOre"
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1344-L1353` → after: `L995-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L995-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L995-L1001) · [Before (L1344-L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1344-L1353)

```diff
-           type: "Armour",
-           textureInfo: "diamond_leggings",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .19
-         },
-         "Wood Boots": {
-           displayName: {
-             translationKey: "item:woodBoots"
+           ttb: 4200,
+           textureInfo: "gold_ore",
+           harvestType: "rock",
+           drops: "Raw Gold",
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: "Gold Ore"
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1355-L1364` → after: `L1003-L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L1003-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L1003-L1004) · [Before (L1355-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1355-L1364)

```diff
-           type: "Armour",
-           textureInfo: "wood_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .05
-         },
-         "Iron Boots": {
-           displayName: {
-             translationKey: "item:ironBoots"
+           specialToolBonusDrops: {
+             "Golem Pickaxe": Ap.v
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1366-L1371` → after: `L1006-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L1006-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L1006-L1008) · [Before (L1366-L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1366-L1371)

```diff
-           type: "Armour",
-           textureInfo: "iron_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .07
+           harvestLevel: 3,
+           onMinedAura: 30,
+           Jy: [4, 4, 0]
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1373` → after: `L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L1010) · [Before (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1373)

```diff
-         "Gold Boots": {
+         "Lapis Lazuli Ore": {
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1375` → after: `L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L1012) · [Before (L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1375)

```diff
-             translationKey: "item:goldBoots"
+             translationKey: "item:lapisLazuliOre"
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1377-L1382` → after: `L1014-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L1014-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L1014-L1018) · [Before (L1377-L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1377-L1382)

```diff
-           type: "Armour",
-           textureInfo: "golden_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .09
+           ttb: 4200,
+           textureInfo: "lapis_ore",
+           harvestType: "rock",
+           harvestLevel: 3,
+           Jy: [0, 0, 2]
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1384` → after: `L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L1020) · [Before (L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1384)

```diff
-         "Diamond Boots": {
+         "Emerald Ore": {
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1386` → after: `L1022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L1022) · [Before (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1386)

```diff
-             translationKey: "item:diamondBoots"
+             translationKey: "item:emeraldOre"
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1388-L1393` → after: `L1024-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L1024-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L1024-L1028) · [Before (L1388-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1388-L1393)

```diff
-           type: "Armour",
-           textureInfo: "diamond_boots",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .1
+           ttb: 4500,
+           textureInfo: "emerald_ore",
+           harvestType: "rock",
+           harvestLevel: 3,
+           Jy: [1, 3, 1]
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1395` → after: `L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L1030) · [Before (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1395)

```diff
-         "Spiked Boots": {
+         "Diamond Ore": {
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1397` → after: `L1032-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L1032-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L1032-L1044) · [Before (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1397)

```diff
-             translationKey: "item:spikedBoots"
+             translationKey: "item:diamondOre"
+           },
+           ttb: 5e3,
+           textureInfo: "diamond_ore",
+           harvestType: "rock",
+           harvestLevel: 3,
+           drops: "Diamond",
+           specialToolDrop: {
+             tool: "Moonstone Pickaxe",
+             drops: "Diamond Ore"
+           },
+           specialToolBonusDrops: {
+             "Golem Pickaxe": Ap.v
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1404` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L1047) · [Before (L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1404)

```diff
-             translationKey: "item:spikedBootsDescription"
+             translationKey: "item:diamondOreDescription"
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1406-L1407` → after: `L1049-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L1049-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L1049-L1050) · [Before (L1406-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1406-L1407)

```diff
-           stackable: !1,
-           armourReduction: .09
+           onMinedAura: 40,
+           Jy: [2, 5, 5]
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1409` → after: `L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L1052) · [Before (L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1409)

```diff
-         "Wood Gauntlets": {
+         "Block of Coal": {
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1411` → after: `L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L1054) · [Before (L1411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1411)

```diff
-             translationKey: "item:woodGauntlets"
+             translationKey: "item:blockOfCoal"
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/73.js` (Changed code · before: `L1413-L1418` → after: `L1056-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51R1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9675bf0a70211bab32bc10dd7acb75074aa70863a173c67dc1450c82a9b81d51) · [After (L1056-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/73.js#L1056-L1058) · [Before (L1413-L1418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/73.js#L1413-L1418)

```diff
-           type: "Armour",
-           textureInfo: "wood_gauntlets",
-           weight: 1,
-           heldItemScale: 1,
-           stackable: !1,
-           armourReduction: .06
+           ttb: 4500,
+           textureInfo: "coal_block",
+           harvestType: "rock"
```
