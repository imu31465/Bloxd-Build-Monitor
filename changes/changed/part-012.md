# Changed — Bundle Modifications Report (Part 012 / 056)

- **Updated at**: `2026-11-25T18:33 JST`
- **Part**: `12 / 56` (**291** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 011](part-011.md) · [Part 013 →](part-013.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/254.js` (sn3sfj.2522680a → 8104he.3820eae0 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/254.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce)

#### 23. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L672-L674` → after: `L605-L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L605-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L605-L633) · [Before (L672-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L672-L674)

```diff
- 
-     function Si(pp) {
-       return Yi(Li(pp.min, pp.max), .5)
+     const kQ = {
+       Mesh: cQ.b,
+       TransformNode: EQ.b,
+       Tj: lQ.b,
+       VertexBuffer: lQ.f,
+       BoundingInfo: hQ.e,
+       vj: iQ.vj,
+       ArenaBuffer: LQ,
+       SubMesh: RQ.b,
+       VertexData: AQ.e,
+       MirroredGeometry: uQ.b,
+       meshFromArrays: uQ.f,
+       plainMeshFromArrays: uQ.h
+     };
+     (0, CQ.f)(kQ);
+     var fQ = XQ(37698);
+ ... (13 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L677-L680` → after: `L636-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L636-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L636-L682) · [Before (L677-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L677-L680)

```diff
-     function xi(pp) {
-       const ip = ci(pp),
-         cp = Oi(pp.heading);
-       return [ip, cp, Ai(ip, cp)]
+     function tQ(QQ, WQ) {
+       if (!(WQ instanceof wQ.StandardMaterial) || WQ.specularTexture) return;
+       const {
+         r: XQ,
+         g: qQ,
+         b: TQ
+       } = WQ.specularColor;
+       0 === XQ && 0 === qQ && 0 === TQ && (QQ.SPECULARTERM = !1)
+     }(0, gQ.i)({
+       disableUnusedSpecularTerm: tQ
+     });
+     var oQ = XQ(37582),
+       eQ = XQ(37866);
+     const nQ = new RegExp(`^#define ${PQ.d}\\s*$`, "m");
+     class xQ extends(DQ(PQ.i)) {
+       constructor(QQ, WQ) {
+ ... (31 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L684` → after: `L687-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L687-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L687-L878) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L684)

```diff
-       return [pp[0] + ip[0], pp[1] + ip[1], pp[2] + ip[2]]
+       YQ.set(QQ, WQ)
+     }
+     NQ(sQ.d, pQ), NQ(FQ.h, aQ), NQ(PQ.i, xQ), NQ(gQ.k, SQ), (0, JQ.e)({
+       create: (QQ, WQ) => {
+         const XQ = new wQ.StandardMaterial(QQ.name, WQ);
+         return (0, oQ.r)(QQ, XQ), XQ.detailMap._pluginDefineNames
+       },
+       write: (QQ, WQ, XQ) => {
+         (0, oQ._)(QQ.mirror, WQ, XQ)
+       },
+       addFeature: (QQ, WQ, XQ) => {
+         const wQ = YQ.get(WQ.feature);
+         if (!wQ) throw new Error(`${WQ.feature.name} has no plugin class (registerPluginClass)`);
+         new wQ(QQ.mirror, WQ.state, ...XQ)
+       },
+       texture: (QQ, WQ, XQ) => {
+ ... (176 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L687-L688` → after: `L881-L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L881-L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L881-L899) · [Before (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L687-L688)

```diff
-     function Yi(pp, ip) {
-       return [pp[0] * ip, pp[1] * ip, pp[2] * ip]
+     function JQ(QQ, WQ, XQ) {
+       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new sQ.b(QQ, XQ);
+       const qQ = (0, PQ.m)(WQ),
+         {
+           positions: TQ,
+           normals: JQ,
+           uvs: rQ,
+           indices: IQ,
+           named: jQ = {}
+         } = WQ,
+         BQ = new FQ.e;
+       BQ.positions = TQ, BQ.normals = null !== JQ && void 0 !== JQ ? JQ : null, BQ.uvs = null !== rQ && void 0 !== rQ ? rQ : null, BQ.indices = IQ;
+       const yQ = new gQ(zQ.d.RandomId(), XQ, BQ, !1, wQ);
+       for (const {
+           kind: zQ,
+           components: sQ
+ ... (3 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L691-L692` → after: `L902-L916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L902-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L902-L916) · [Before (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L691-L692)

```diff
-     function Di(pp, ip) {
-       return pp[0] * ip[0] + pp[1] * ip[1] + pp[2] * ip[2]
+     function rQ(QQ, WQ, XQ) {
+       let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       const qQ = new sQ.b(QQ, XQ),
+         {
+           positions: TQ,
+           normals: zQ,
+           uvs: PQ,
+           indices: gQ
+         } = WQ;
+       return Object.assign(new FQ.e, {
+         positions: TQ,
+         normals: zQ,
+         uvs: PQ,
+         indices: gQ
+       }).applyToMesh(qQ, wQ), qQ
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L695-L696` → after: `L950-L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L950-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L950-L964) · [Before (L695-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L695-L696)

```diff
-     function Ai(pp, ip) {
-       return [pp[1] * ip[2] - pp[2] * ip[1], pp[2] * ip[0] - pp[0] * ip[2], pp[0] * ip[1] - pp[1] * ip[0]]
+     function TQ(QQ, WQ, XQ) {
+       var wQ, TQ;
+       const zQ = null !== (wQ = qQ.get(QQ)) && void 0 !== wQ ? wQ : new Map;
+       qQ.set(QQ, zQ);
+       const sQ = null !== (TQ = zQ.get(WQ[0])) && void 0 !== TQ ? TQ : [];
+       zQ.set(WQ[0], sQ);
+       const FQ = sQ.find((QQ => QQ.urls.length === WQ.length && QQ.urls.every(((QQ, XQ) => QQ === WQ[XQ]))));
+       if (FQ) return FQ.built;
+       const PQ = {
+         urls: [...WQ],
+         built: XQ()
+       };
+       return sQ.push(PQ), PQ.built.catch((() => {
+         sQ.splice(sQ.indexOf(PQ), 1)
+       })), PQ.built
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/255.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/255.js` (53 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L4-L7` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L4-L8) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L4-L7)

```diff
-   40411: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => wp,
-       e: () => Hp
+   41294: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       openMobLineupPreview: () => SQ,
+       openMobPreview: () => fQ,
+       openPetPreview: () => tQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L9-L614` → after: `L10-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L10-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L10-L37) · [Before (L9-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L9-L614)

```diff
-     var Op = cp(40203),
-       op = cp(40210),
-       Ip = cp(40314),
-       Sp = cp(37349),
-       xp = cp(37320),
-       Lp = cp(40415),
-       Yp = cp(38905),
-       Dp = cp(37368),
-       Ap = cp(40096),
-       Pp = cp(38313),
-       Wp = cp(37985),
-       yp = cp(40172),
-       Up = cp(40233);
-     let wp = (() => {
-       var pp;
-       let ip, cp, Dp, wp, vp, tp, Hp, dp, ep, jp, kp, mp, Rp, qp, Mp, Cp, Ep, Xp, lp = Lp.b,
- ... (590 more removed lines; see GitHub link above)
+     var wQ = XQ(40089),
+       qQ = XQ(40349),
+       TQ = XQ(41298),
+       zQ = XQ(37539),
+       sQ = XQ(37367),
+       FQ = XQ(40517),
+       PQ = XQ(41320),
+       gQ = XQ(38756),
+       JQ = XQ(37451),
+       rQ = XQ(37428),
+       IQ = XQ(37358),
+       jQ = XQ(38654),
+       BQ = XQ(38647),
+       yQ = XQ(38385),
+       VQ = XQ(38438),
+       DQ = XQ(38415),
+ ... (12 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L616-L634` → after: `L39-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L39-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L39-L56) · [Before (L616-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L616-L634)

```diff
-     function vp(pp, ip) {
-       const cp = pp.type,
-         Op = wp.GetConstructorFromName(cp, pp.name, ip, pp.interaxial_distance, pp.isStereoscopicSideBySide),
-         op = Up.c.Parse(Op, pp, ip);
-       if (void 0 !== pp.parentId && (op._waitingParentId = pp.parentId), void 0 !== pp.parentInstanceIndex && (op._waitingParentInstanceIndex = pp.parentInstanceIndex), op.inputs && (op.inputs.parse(pp), op._setupInputs()), pp.upVector && (op.upVector = xp.o.FromArray(pp.upVector … [truncated]
-         const ip = pp.interaxial_distance ? {
-           interaxialDistance: pp.interaxial_distance
-         } : {};
-         op.setCameraRigMode(pp.cameraRigMode, ip)
-       }
-       if (pp.animations) {
-         for (let ip = 0; ip < pp.animations.length; ip++) {
-           const cp = pp.animations[ip],
-             Op = (0, Dp.d)("BABYLON.Animation");
-           Op && op.animations.push(Op.Parse(cp))
-         }
- ... (3 more removed lines; see GitHub link above)
+     function cQ() {
+       if (null !== lQ) return lQ;
+       const QQ = document.createElement("canvas");
+       QQ.classList.add("MobPreviewCanvas");
+       const WQ = new wQ.b(QQ, !0, {
+         preserveDrawingBuffer: !0
+       });
+       WQ.vwQ = (0, GQ.f)().nj.engine.vwQ;
+       const XQ = new qQ.c(WQ);
+       XQ.clearColor = new zQ.d(0, 0, 0, 0), XQ.ambientColor = new zQ.Color3(1, 1, 1);
+       const PQ = new TQ.d("ky", Math.PI / 2, Math.PI / 2, bQ, sQ.vj.Zero(), XQ),
+         gQ = new FQ.c("light", new sQ.vj(-.1, 1, -.3), XQ);
+       return gQ.diffuse = new zQ.Color3(1, 1, 1), gQ.specular = new zQ.Color3(1, 1, 1), gQ.groundColor = new zQ.Color3(.5, .5, .5), lQ = {
+         engine: WQ,
+         cB: XQ,
+         canvas: QQ,
+ ... (2 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L638-L639` → after: `L59-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L59-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L59-L62) · [Before (L638-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L638-L639)

```diff
-     function Hp() {
-       tp || (tp = !0, wp.Parse = vp)
+     function AQ(QQ) {
+       return hQ[QQ] ??= (0, yQ.x)(QQ, cQ().cB, !0).catch((WQ => {
+         throw delete hQ[QQ], WQ
+       })), hQ[QQ]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L641-L682` → after: `L64-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L64-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L64-L121) · [Before (L641-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L641-L682)

```diff
-   },
-   40430: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => op
-     });
-     var Op = cp(37320);
-     class op {
-       constructor(pp, ip, cp) {
-         this._cameraPosition = ip, this._behavior = cp, this.activeInput = !1, this.speed = 1, this.Kr = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = . … [truncated]
-       }
-       computeCurrentFrameDeltas() {
-         const pp = this._scene.gy().getDeltaTime(),
-           ip = this._getEffectiveDeltaMs(pp);
-         if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 ===  … [truncated]
-         this.panDeltaCurrentFrame.E_(0), this.rotationDeltaCurrentFrame.E_(0), this.zoomDeltaCurrentFrame = 0;
-         (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.i5(this._calculateCurrentVelocity(this._pa … [truncated]
- ... (26 more removed lines; see GitHub link above)
+ 
+     function RQ(QQ) {
+       let WQ = iQ.get(QQ);
+       return WQ || (WQ = pQ.z[QQ].loadModel(cQ().cB, !1).then((QQ => (QQ.UH(!1), QQ)), (WQ => {
+         throw iQ.delete(QQ), WQ
+       })), iQ.set(QQ, WQ)), WQ
+     }
+ 
+     function EQ(QQ) {
+       var WQ, XQ, wQ;
+       let {
+         mobType: qQ,
+         variation: TQ,
+         animation: zQ
+       } = QQ, FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, bQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const HQ = null !== (WQ = null === FQ || void 0 === FQ ? void 0 : FQ.size) && void 0 !== WQ ? WQ : 1,
+ ... (42 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L684-L694` → after: `L123-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L123-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L123-L159) · [Before (L684-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L684-L694)

```diff
-       _calculateCurrentVelocity(pp, ip, cp) {
-         let Op = pp;
-         const op = this._scene.gy().getDeltaTime(),
-           Ip = this._getEffectiveDeltaMs(op);
-         if (0 === Ip) return Op;
-         const Sp = this.getFrameIndependentDecay(cp);
-         if (Op *= Sp, 0 !== ip || this.activeInput) {
-           const pp = 1 - cp;
-           Op += ip / Ip * (pp > 0 ? (1 - Sp) / pp : 1)
-         } else Math.abs(Op) < 1e-6 && (Op = 0);
-         return Op
+     }
+ 
+     function CQ(QQ, WQ) {
+       return EQ({
+         mobType: "NPC",
+         variation: null,
+         animation: QQ.animation
+       }, QQ, WQ)
+     }
+ 
+     function uQ(QQ) {
+       let {
+         mobType: WQ,
+         variation: XQ,
+         metaInfo: wQ,
+         tamed: qQ
+ ... (21 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L704-L745` → after: `L164-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L164-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L164-L172) · [Before (L704-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L704-L745)

```diff
-         this.inputMap = [], this.handlers = pp, this._createDefaultEntries = ip, this.resetInputMap()
-       }
-       resolveInteraction(pp, ip) {
-         for (const cp of this.inputMap)
-           if (cp.source === pp && this._entryMatches(cp, ip)) return cp;
-         return null
-       }
-       resetInputMap() {
-         this.inputMap = this._createDefaultEntries?.() ?? []
-       }
-       getEntry(pp, ip, cp) {
-         const Op = this.inputMap;
-         for (let op = 0; op < Op.length; op++) {
-           const Ip = Op[op];
-           if (Ip.source === pp && Ip.interaction === ip && this._entryConditionsMatch(Ip, cp)) return Ip
-         }
- ... (26 more removed lines; see GitHub link above)
+         this.place = WQ, this.remove = null;
+         const {
+           engine: XQ,
+           cB: wQ,
+           canvas: qQ
+         } = cQ();
+         QQ.appendChild(qQ), XQ.resize(), XQ.runRenderLoop((() => {
+           wQ.render()
+         }))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L747-L759` → after: `L174-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L174-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L174-L176) · [Before (L747-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L747-L759)

```diff
-       _entryCoversAllConditionsOf(pp, ip) {
-         if (!ip) return !0;
-         const cp = pp;
-         for (const Op of Object.keys(ip)) {
-           const pp = ip[Op];
-           if (void 0 !== pp)
-             if ("modifiers" === Op) {
-               const ip = cp.modifiers ?? {};
-               for (const cp of Object.keys(pp))
-                 if (void 0 !== pp[cp] && void 0 === ip[cp]) return !1
-             } else if (void 0 === cp[Op]) return !1
-         }
-         return !0
+       show(QQ) {
+         var WQ;
+         null === (WQ = this.remove) || void 0 === WQ || WQ.call(this), this.remove = this.place(QQ)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L761-L768` → after: `L178-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L178-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L178-L183) · [Before (L761-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L761-L768)

```diff
-       setInteractions(pp, ip, cp) {
-         let Op = 0;
-         const op = this.inputMap;
-         for (let Ip = 0; Ip < op.length; Ip++) {
-           const Sp = op[Ip];
-           Sp.source === pp && this._entryMatches(Sp, ip) && (Sp.interaction = cp, Op++)
-         }
-         return Op
+       resize(QQ, WQ) {
+         const {
+           engine: XQ,
+           canvas: wQ
+         } = cQ();
+         wQ.width = QQ, wQ.height = WQ, XQ.resize()
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L770-L780` → after: `L185-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L185-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L185-L187) · [Before (L770-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L770-L780)

```diff
-       _entryMatches(pp, ip) {
-         switch (pp.source) {
-           case "pointer":
-             return (void 0 === pp.button || pp.button === ip?.button) && this._matchModifiers(pp.modifiers, ip?.modifiers);
-           case "wheel":
-             return this._matchModifiers(pp.modifiers, ip?.modifiers);
-           case "touch":
-             return void 0 === pp.touchCount || pp.touchCount === ip?.touchCount;
-           case "keyboard":
-             return (void 0 === pp.key || (Array.isArray(pp.key) ? -1 !== pp.key.indexOf(ip?.key ?? -1) : pp.key === ip?.key)) && this._matchModifiers(pp.modifiers, ip?.modifiers)
-         }
+       close() {
+         var QQ;
+         cQ().engine.stopRenderLoop(), null === (QQ = this.remove) || void 0 === QQ || QQ.call(this), this.remove = null
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L782-L797` → after: `L189-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L189-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L189-L195) · [Before (L782-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L782-L797)

```diff
-       _entryConditionsMatch(pp, ip) {
-         if (!ip) return !0;
-         switch (pp.source) {
-           case "pointer":
-             return (!("button" in ip) || pp.button === ip.button) && (!("modifiers" in ip) || this._entryModifiersMatch(pp.modifiers, ip.modifiers));
-           case "wheel":
-             return !("modifiers" in ip) || this._entryModifiersMatch(pp.modifiers, ip.modifiers);
-           case "touch":
-             return !("touchCount" in ip) || pp.touchCount === ip.touchCount;
-           case "keyboard":
-             if ("key" in ip) {
-               if (void 0 === pp.key) return void 0 === ip.key;
-               if (void 0 === ip.key || (Array.isArray(pp.key) ? -1 === pp.key.indexOf(ip.key) : pp.key !== ip.key)) return !1
-             }
-             return !("modifiers" in ip) || this._entryModifiersMatch(pp.modifiers, ip.modifiers)
-         }
+     }
+     class kQ {
+       constructor(QQ) {
+         this.preview = void 0, this.view = {
+           figures: [],
+           shown: []
+         }, this.aspect = 1, this.placed = [], this.preview = new LQ(QQ, (() => () => {}))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L799-L801` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L197-L198) · [Before (L799-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L799-L801)

```diff
-       _entrySpecificity(pp) {
-         let ip = 0;
-         return "button" in pp && void 0 !== pp.button && ip++, "key" in pp && void 0 !== pp.key && ip++, "touchCount" in pp && void 0 !== pp.touchCount && ip++, "modifiers" in pp && pp.modifiers && ip++, ip
+       show(QQ) {
+         QQ.figures !== this.view.figures && this.preload(QQ.figures), this.view = QQ, this.place()
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L803-L804` → after: `L200-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L200-L201) · [Before (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L803-L804)

```diff
-       _matchModifiers(pp, ip) {
-         return !pp || (void 0 === pp.ctrl || pp.ctrl === (ip?.ctrl ?? !1)) && ((void 0 === pp.shift || pp.shift === (ip?.shift ?? !1)) && (void 0 === pp.alt || pp.alt === (ip?.alt ?? !1)))
+       resize(QQ, WQ) {
+         this.preview.resize(QQ, WQ), this.aspect = QQ / WQ, this.place()
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L806-L808` → after: `L203-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L203-L206) · [Before (L806-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L806-L808)

```diff
-       _entryModifiersMatch(pp, ip) {
-         if (!ip) return !pp;
-         return void 0 !== ip.ctrl || void 0 !== ip.shift || void 0 !== ip.alt ? (void 0 === ip.ctrl || pp?.ctrl === ip.ctrl) && ((void 0 === ip.shift || pp?.shift === ip.shift) && (void 0 === ip.alt || pp?.alt === ip.alt)) : !pp || void 0 === pp.ctrl && void 0 === pp.shift && voi … [truncated]
+       close() {
+         this.preview.close();
+         for (const QQ of this.placed) null === QQ || void 0 === QQ || QQ.remove();
+         this.placed = []
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L810-L833` → after: `L208-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L208-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L208-L212) · [Before (L810-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L810-L833)

```diff
-     }
-   },
-   40409: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => vp,
-       f: () => Up
-     });
-     var Op = cp(40203),
-       op = cp(40210),
-       Ip = cp(40411),
-       Sp = cp(37320),
-       xp = cp(37324),
-       Lp = cp(40423),
-       Yp = cp(40415),
-       Dp = cp(40430),
-       Ap = cp(40432);
- ... (8 more removed lines; see GitHub link above)
+       preload(QQ) {
+         const WQ = () => {};
+         AQ("NPC").catch(WQ);
+         for (const {
+             Qp: XQ
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L835` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L214) · [Before (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L835)

```diff
-         }, (() => this._createDefaultInputMap()))
+           of QQ) null !== XQ && RQ(XQ).catch(WQ)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L837-L853` → after: `L216-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L216-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L216-L233) · [Before (L837-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L837-L853)

```diff
-       _createDefaultInputMap() {
-         return [{
-           source: "pointer",
-           interaction: "rotate"
-         }, {
-           source: "keyboard",
-           interaction: "translate"
-         }, {
-           source: "keyboard",
-           interaction: "rotate"
-         }, {
-           source: "touch",
-           interaction: "rotate"
-         }, {
-           source: "touch",
-           interaction: "translate"
- ... (1 more removed lines; see GitHub link above)
+       place() {
+         const {
+           figures: QQ,
+           shown: WQ
+         } = this.view, XQ = QQ.map(((XQ, wQ) => {
+           var qQ;
+           const TQ = null !== (qQ = this.placed[wQ]) && void 0 !== qQ ? qQ : null;
+           if (!WQ[wQ]) return null === TQ || void 0 === TQ || TQ.remove(), null;
+           const zQ = (sQ = (wQ + .5) / QQ.length, FQ = this.aspect, (.5 - sQ) * (2 * bQ * Math.tan(cQ().camera.fov / 2)) * FQ);
+           var sQ, FQ;
+           return null !== TQ && TQ.figure === XQ && TQ.x === zQ ? TQ : (null === TQ || void 0 === TQ || TQ.remove(), {
+             figure: XQ,
+             x: zQ,
+             remove: CQ(XQ, zQ)
+           })
+         }));
+ ... (2 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L1070-L1071` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L237-L238) · [Before (L1070-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L1070-L1071)

```diff
-     function vp() {
-       wp || (wp = !0, Yp.b.AddNodeConstructor("TargetCamera", ((pp, ip) => () => new Up(pp, Sp.o.Zero(), ip))))
+     function fQ(QQ) {
+       return new LQ(QQ, EQ)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L1081-L1096` → after: `L241-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L241-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L241-L246) · [Before (L1081-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L1081-L1096)

```diff
-     function Ip() {
-       op || (op = !0, Op.b.prototype.getInputElement = function() {
-         return this._renderingCanvas
-       }, Op.b.prototype.getRenderingCanvasClientRect = function() {
-         return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
-       }, Op.b.prototype.getInputElementClientRect = function() {
-         return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
-       }, Op.b.prototype.getAspectRatio = function(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const cp = pp.viewport;
-         return this.getRenderWidth(ip) * cp.width / (this.getRenderHeight(ip) * cp.height)
-       }, Op.b.prototype.getScreenAspectRatio = function() {
-         return this.getRenderWidth(!0) / this.getRenderHeight(!0)
-       }, Op.b.prototype._verifyPointerLock = function() {
-         this._onPointerLockChange?.()
-       })
+     function SQ(QQ) {
+       return new kQ(QQ)
+     }
+ 
+     function tQ(QQ) {
+       return new LQ(QQ, uQ)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L1099-L1116` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L249) · [Before (L1099-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L1099-L1116)

```diff
-   40248: (pp, ip, cp) => {
-     var Op = cp(40113),
-       op = cp(40257);
-     let Ip = !1;
-     Ip || (Ip = !0, (0, op.u)(), Op.b.prototype._loadFileAsync = async function(pp, ip, cp) {
-       return await new Promise(((Op, op) => {
-         this._loadFile(pp, (pp => {
-           Op(pp)
-         }), void 0, ip, cp, ((pp, ip) => {
-           op(ip)
-         }))
-       }))
-     })
-   },
-   40245: (pp, ip, cp) => {
-     (0, cp(40172).d)()
- ... (2 more removed lines; see GitHub link above)
+   39081: (QQ, WQ, XQ) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L1118` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L251) · [Before (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L1118)

```diff
-       d: () => Ip
+       c: () => rQ
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L1120-L1917` → after: `L253-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L253-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L253-L257) · [Before (L1120-L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L1120-L1917)

```diff
-     var Op = cp(40113);
-     let op = !1;
- 
-     function Ip() {
-       op || (op = !0, Op.b.prototype.getRenderPassNames = function() {
-         return this._renderPassNames
-       }, Op.b.prototype.getCurrentRenderPassName = function() {
-         return this._renderPassNames[this.currentRenderPassId]
-       }, Op.b.prototype.createRenderPassId = function(pp) {
-         const ip = ++Op.b._RenderPassIdCounter;
-         return this._renderPassNames[ip] = pp ?? "NONAME", ip
-       }, Op.b.prototype.releaseRenderPassId = function(pp) {
-         this._renderPassNames[pp] = void 0;
-         for (let ip = 0; ip < this.scenes.length; ++ip) {
-           const cp = this.scenes[ip];
-           for (let ip = 0; ip < cp.meshes.length; ++ip) {
- ... (782 more removed lines; see GitHub link above)
+     var wQ = XQ(37462),
+       qQ = XQ(37472),
+       TQ = XQ(37715),
+       zQ = XQ(37477),
+       sQ = XQ(37468);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L1920-L1977` → after: `L260-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L260-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L260-L270) · [Before (L1920-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L1920-L1977)

```diff
-       const ip = function(pp) {
-         if (!(0, Wp.f)() || !document.body) return null;
-         const ip = document.createElement("span");
-         ip.textContent = "Hg", ip.style.font = pp;
-         const cp = document.createElement("div");
-         cp.style.display = "inline-block", cp.style.width = "1px", cp.style.height = "0px", cp.style.verticalAlign = "bottom";
-         const Op = document.createElement("div");
-         let op, Ip;
-         Op.style.whiteSpace = "nowrap", Op.appendChild(ip), Op.appendChild(cp), document.body.appendChild(Op);
-         try {
-           Ip = cp.getBoundingClientRect().top - ip.getBoundingClientRect().top, cp.style.verticalAlign = "baseline", op = cp.getBoundingClientRect().top - ip.getBoundingClientRect().top
-         } finally {
-           document.body.removeChild(Op)
-         }
-         const Sp = {
-           ascent: op,
- ... (42 more removed lines; see GitHub link above)
+       return `\n\t\t\t\t${(0,sQ.v)(QQ,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       n\ t\ t\ t\ t\ t$ {
+         (0, sQ.A)(QQ, "float", "s", "sin(ang)")
+       }\
+       n\ t\ t\ t\ t\ t$ {
+         (0, sQ.A)(QQ, "float", "c", "cos(ang)")
+       }\
+       n\ t\ t\ t\ t\ treturn $ {
+         (0, sQ.l)(QQ, "mat2", "c", "s", "-s", "c")
+       };\
+       n\ t\ t\ t\ t`)}\n\t\t\t`
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L1980-L1981` → after: `L273-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L273-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L273-L277) · [Before (L1980-L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L1980-L1981)

```diff
-     function Up(pp) {
-       return Number.isFinite(pp.ascent) && Number.isFinite(pp.height) && Number.isFinite(pp.descent) && pp.height > 0
+     function PQ(QQ, WQ) {
+       let XQ = (0, sQ.Jb)(QQ, "skele" + (WQ - 1));
+       for (let qQ = WQ - 2; qQ >= 0; qQ--) XQ = (0, sQ.wb)(QQ, `boneIdx == ${qQ}`, (0, sQ.Jb)(QQ, `skele${qQ}`), XQ);
+       const wQ = "bone.yz + rotate(bone.x) * pivot - pivot";
+       return `\n\t\t\t\t${(0,sQ.A)(QQ,"int","boneIdx",(0,sQ.Eb)(QQ,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,sQ.A)(QQ,"vec3","bone",XQ)}\n\t\t\t\t${(0,sQ.A)(QQ,"vec2","pivot",(0,sQ.l)(QQ,"vec2","0.0",`${(0,sQ.Sb)(QQ,"position")}.z`))}\n\t\t\t\t${(0,sQ.$)(QQ)?`positi … [truncated]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L1985-L2277` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L281) · [Before (L1985-L2277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L1985-L2277)

```diff
-       if (pp.requestPointerLock) {
-         const ip = pp.requestPointerLock();
-         ip instanceof Promise ? ip.then((() => {
-           pp.focus()
-         })).catch((() => {})) : pp.focus()
-       }
-     }
-     var vp = cp(40159),
-       tp = cp(40107),
-       Hp = cp(40164),
-       dp = cp(40172);
-     class ep extends Ip.ThinEngine {
-       static get NpmPackage() {
-         return Pp.b.NpmPackage
-       }
-       static get Version() {
- ... (277 more removed lines; see GitHub link above)
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,sQ.l)(QQ,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L2279-L2466` → after: `L283-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L283-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L283-L288) · [Before (L2279-L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L2279-L2466)

```diff
-     ep.ALPHA_DISABLE = 0, ep.ALPHA_ADD = 1, ep.ALPHA_COMBINE = 2, ep.ALPHA_SUBTRACT = 3, ep.ALPHA_MULTIPLY = 4, ep.ALPHA_MAXIMIZED = 5, ep.ALPHA_ONEONE = 6, ep.ALPHA_PREMULTIPLIED = 7, ep.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, ep.ALPHA_INTERPOLATE = 9, ep.ALPHA_SCREENMODE = 10, ep.D … [truncated]
-   },
-   40188: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => op
-     });
-     var Op = cp(40151);
-     class op {
-       get depthStencilTexture() {
-         return this._depthStencilTexture
-       }
-       setDepthStencilTexture(pp) {
-         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = pp, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, p … [truncated]
-       }
-       get depthStencilTextureWithStencil() {
-         return this._depthStencilTextureWithStencil
- ... (172 more removed lines; see GitHub link above)
+     const JQ = {
+         x: 0,
+         y: 0,
+         z: 0,
+         gXQ(QQ, WQ) {
+           return this.x = QQ[WQ], this.y = QQ[WQ + 1], this.z = QQ[WQ + 2], this
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L2468-L2482` → after: `L290-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L290-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L290-L320) · [Before (L2468-L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L2468-L2482)

```diff
-         return pp
-       }
-       _swapRenderTargetWrapper(pp) {
-         if (this._textures && pp._textures)
-           for (let ip = 0; ip < this._textures.length; ++ip) this._textures[ip]._swapAndDie(pp._textures[ip], !1), pp._textures[ip].isReady = !0;
-         this._depthStencilTexture && pp._depthStencilTexture && (this._depthStencilTexture._swapAndDie(pp._depthStencilTexture), pp._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
-       }
-       _rebuild() {
-         const pp = this._cloneRenderTargetWrapper();
-         if (pp) {
-           if (this._depthStencilTexture) {
-             const ip = this._depthStencilTexture.samplingMode,
-               cp = this._depthStencilTexture.format,
-               Op = 2 === ip || 3 === ip || 11 === ip;
-             pp.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, Op, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, cp, this._depthStencilTextureLabel)
+       },
+       rQ = {
+         name: "Cape",
+         className: "CapeMaterialPlugin",
+         priority: 200,
+         defines: (QQ, WQ) => ({
+           ...(0, wQ.b)("CAPE"),
+           BLOXD_CAPE_BONES: `${QQ}`,
+           BLOXD_CAPE_MAX_Y: (0, qQ.ob)(WQ)
+         }),
+         getUniforms(QQ) {
+           return (0, TQ.d)(function(QQ) {
+             const WQ = [];
+             for (let XQ = 0; XQ < QQ; XQ++) WQ.push({
+               name: `skele${XQ}`,
+               type: "highp vec3"
+ ... (15 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L2486-L2527` → after: `L323-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L323-L324) · [Before (L2486-L2527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L2486-L2527)

```diff
-       }
-       releaseTextures() {
-         if (this._textures)
-           for (let pp = 0; pp < this._textures.length; ++pp) this._textures[pp].dispose();
-         this._textures = null
-       }
-       dispose() {
-         arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
-       }
-     }
-   },
-   40597: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Op
-     });
-     class Op {
- ... (26 more removed lines; see GitHub link above)
+       };
+     (0, zQ.i)(rQ)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L2529` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L326) · [Before (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L2529)

```diff
-   40286: (pp, ip, cp) => {
+   38966: (QQ, WQ, XQ) => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L2531` → after: `L328-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L328-L329) · [Before (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L2531)

```diff
-       d: () => Sp
+       d: () => gQ,
+       e: () => JQ
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L2533-L6801` → after: `L331-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L331-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L331-L363) · [Before (L2533-L6801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L2533-L6801)

```diff
-     var Op = cp(38905);
-     const op = new Map;
- 
-     function Ip(pp, ip) {
-       (function(pp) {
-         return op.delete(pp)
-       })(pp) && Op.e.Warn(`Extension with the name '${pp}' already exists`), op.set(pp, ip)
-     }
- 
-     function Sp(pp, ip) {
-       "image/ktx" !== ip && "image/ktx2" !== ip || (pp = ".ktx"), op.has(pp) || (pp.endsWith(".ies") && Ip(".ies", (async () => await cp.e(314).then((() => cp(42034))).then((pp => new pp._IESTextureLoader)))), pp.endsWith(".dds") && Ip(".dds", (async () => await cp.e(312).then((( … [truncated]
-       const Op = op.get(pp);
-       return Op ? Promise.resolve(Op(ip)) : null
-     }
-   },
-   40621: (pp, ip, cp) => {
- ... (4253 more removed lines; see GitHub link above)
+     var wQ = XQ(37462),
+       qQ = XQ(37715),
+       TQ = XQ(37468),
+       zQ = XQ(37477);
+     const sQ = "bloxdTextLodBias",
+       FQ = [{
+         name: sQ,
+         type: "float"
+       }],
+       PQ = "bloxdTextSample",
+       gQ = {
+         planes: -.5,
+         boards: -.5
+       },
+       JQ = {
+         name: "TextSampler",
+ ... (17 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L6803-L6866` → after: `L365-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L365-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L365-L406) · [Before (L6803-L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L6803-L6866)

```diff
-           return cp
-         }
-         static ImportVertexData(ip, cp) {
-           const Op = pp.Parse(ip);
-           cp.setAllVerticesData(Op, ip.updatable)
-         }
-       }, (() => {
-         const op = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         ip = [Yp.f.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
-         }))], cp = [Yp.f.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
-         }))], yp = [Yp.f.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
-         }))], Up = [Yp.f.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
- ... (48 more removed lines; see GitHub link above)
+         }
+       };
+     (0, zQ.i)(JQ)
+   },
+   41335: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       CapeMaterialPlugin: () => GQ,
+       HueTintMaterialPlugin: () => UQ,
+       LifeformMaterialPlugin: () => bQ,
+       OverlayMaterialPlugin: () => vQ
+     });
+     var wQ = XQ(41344),
+       qQ = XQ(38293);
+     class TQ extends((0, wQ.i)(qQ.d)) {}(0, wQ.l)(qQ.d, TQ);
+     var zQ = XQ(37456);
+     class sQ extends((0, wQ.i)(zQ.e)) {}(0, wQ.l)(zQ.e, sQ);
+ ... (26 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L6868-L6874` → after: `L408-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L408-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L408-L427) · [Before (L6868-L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L6868-L6874)

```diff
-   40663: (pp, ip, cp) => {
-     var Op = cp(37320),
-       op = cp(38905),
-       Ip = cp(40498),
-       Sp = cp(40577),
-       xp = cp(40342);
-     const Lp = "bakedVertexAnimationSettingsInstanced";
+   41344: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => tQ,
+       i: () => DQ,
+       l: () => NQ
+     });
+     var wQ = XQ(40530),
+       qQ = XQ(41348),
+       TQ = XQ(41394),
+       zQ = XQ(41354),
+       sQ = XQ(38094),
+       FQ = XQ(38107),
+       PQ = XQ(38114),
+       gQ = XQ(38116),
+       JQ = XQ(37490),
+       rQ = XQ(37492),
+ ... (4 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L6876-L6878` → after: `L429-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L429-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L429-L434) · [Before (L6876-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L6876-L6878)

```diff
-     function Yp(pp) {
-       const ip = pp.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
-       return ip instanceof Float32Array || ip instanceof Uint16Array
+     function VQ(QQ, WQ) {
+       return Object.assign((function(QQ, XQ, wQ, qQ) {
+         return WQ(this.featureState, QQ, XQ, wQ, qQ)
+       }), {
+         NI: QQ
+       })
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L6881-L6887` → after: `L437-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L437-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L437-L462) · [Before (L6881-L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L6881-L6887)

```diff
-     function Dp(pp, ip, cp, Op) {
-       cp.E_(Number.POSITIVE_INFINITY), Op.E_(Number.NEGATIVE_INFINITY);
-       for (let op = 0; op < 3 * ip; op += 3) {
-         const ip = pp[op],
-           Ip = pp[op + 1],
-           Sp = pp[op + 2];
-         ip < cp.x && (cp.x = ip), Ip < cp.y && (cp.y = Ip), Sp < cp.z && (cp.z = Sp), ip > Op.x && (Op.x = ip), Ip > Op.y && (Op.y = Ip), Sp > Op.z && (Op.z = Sp)
+     function DQ(QQ) {
+       const WQ = class extends IQ.b {
+           constructor(WQ, XQ) {
+             const wQ = (0, BQ._)(WQ),
+               qQ = wQ && (0, BQ.u)(wQ, QQ.name);
+             for (var TQ = arguments.length, zQ = new Array(TQ > 2 ? TQ - 2 : 0), sQ = 2; sQ < TQ; sQ++) zQ[sQ - 2] = arguments[sQ];
+             super(WQ, QQ.name, QQ.priority, qQ ? qQ.defines : QQ.defines(...zQ), !1), this.featureState = void 0, this.featureState = XQ, this._pluginManager._addPlugin(this), this._enable(!0), (0, BQ.y)(this._material, QQ, this.featureState, this._pluginDefineNames)
+           }
+           getClassName() {
+             return QQ.className
+           }
+           isCompatible(QQ) {
+             return QQ === yQ.b.GLSL || QQ === yQ.b.WGSL
+           }
+         },
+         XQ = (0, jQ.g)(QQ);
+ ... (10 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L6892` → after: `L472-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L472-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L472-L573) · [Before (L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L6892)

```diff
-       cp && (pp.x -= pp.x * cp.x + cp.y, pp.y -= pp.y * cp.x + cp.y, pp.z -= pp.z * cp.x + cp.y, ip.x += ip.x * cp.x + cp.y, ip.y += ip.y * cp.x + cp.y, ip.z += ip.z * cp.x + cp.y)
+       return (0, bQ.f)(XQ, WQ.urls, (() => async function(QQ, WQ, XQ) {
+         const {
+           width: wQ
+         } = QQ[0].getSize(), qQ = QQ.map(((QQ, XQ) => {
+           var qQ;
+           const TQ = Math.round(QQ.getSize().height / wQ),
+             zQ = null === WQ || void 0 === WQ ? void 0 : WQ[XQ];
+           return {
+             pixels: zQ && zQ.byteLength === wQ * wQ * TQ * 4 ? zQ : null !== (qQ = dQ.get(QQ.getInternalTexture())) && void 0 !== qQ ? qQ : QQ._readPixelsSync(),
+             layers: TQ
+           }
+         })), TQ = XQ.Uj().getCaps().texture2DArrayMaxLayerCount, sQ = (0, bQ.b)(qQ, wQ, TQ).map((QQ => {
+           let {
+             pixels: WQ,
+             layers: qQ
+           } = QQ;
+ ... (86 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L6895-L6900` → after: `L576-L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L576-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L576-L622) · [Before (L6895-L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L6895-L6900)

```diff
-     function Pp(pp, ip, cp, op, Ip) {
-       const Sp = Op.i.Zy[7],
-         xp = Op.i.Zy[8];
-       for (let Lp = 0; Lp < 2; ++Lp)
-         for (let Yp = 0; Yp < 2; ++Yp)
-           for (let Dp = 0; Dp < 2; ++Dp) Sp.set(Lp ? ip.x : pp.x, Yp ? ip.y : pp.y, Dp ? ip.z : pp.z), Op.o.TransformCoordinatesToRef(Sp, cp, xp), op.minimizeInPlace(xp), Ip.maximizeInPlace(xp)
+     function tQ(QQ, WQ) {
+       if (!(WQ instanceof wQ.StandardMaterial) || WQ.specularTexture) return;
+       const {
+         r: XQ,
+         g: qQ,
+         b: TQ
+       } = WQ.specularColor;
+       0 === XQ && 0 === qQ && 0 === TQ && (QQ.SPECULARTERM = !1)
+     }(0, gQ.i)({
+       disableUnusedSpecularTerm: tQ
+     });
+     var oQ = XQ(37582),
+       eQ = XQ(37866);
+     const nQ = new RegExp(`^#define ${PQ.d}\\s*$`, "m");
+     class xQ extends(DQ(PQ.i)) {
+       constructor(QQ, WQ) {
+ ... (31 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L6903-L6905` → after: `L626-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L626-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L626-L627) · [Before (L6903-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L6903-L6905)

```diff
-     function Wp(pp, ip, cp, op, Ip) {
-       const Sp = Op.i.Zy[7];
-       for (let xp = 0; xp < 3 * ip; xp += 3) Op.o.TransformCoordinatesFromFloatsToRef(pp[xp], pp[xp + 1], pp[xp + 2], cp, Sp), op.minimizeInPlace(Sp), Ip.maximizeInPlace(Sp)
+     function NQ(QQ, WQ) {
+       YQ.set(QQ, WQ)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L6907-L6932` → after: `L629-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L629-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L629-L632) · [Before (L6907-L6932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L6907-L6932)

```diff
-     let yp = !1;
-     yp || (yp = !0, Sp.d.prototype.thinInstanceAdd = function(pp) {
-       let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-       if (!this.Gl().gy().getCaps().instancedArrays) return op.e.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
-       this._thinInstanceUpdateBufferSize("matrix", Array.isArray(pp) ? pp.length : 1);
-       const cp = this._thinInstanceDataStorage.instancesCount;
-       if (Array.isArray(pp))
-         for (let Op = 0; Op < pp.length; ++Op) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, pp[Op], Op === pp.length - 1 && ip);
-       else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, pp, ip);
-       return cp
-     }, Sp.d.prototype.thinInstanceAddSelf = function() {
-       let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-       return this.thinInstanceAdd(Op.b.IdentityReadOnly, pp)
-     }, Sp.d.prototype.thinInstanceRegisterAttribute = function(pp, ip) {
-       pp === xp.j.ColorKind && (pp = xp.j.ColorInstanceKind), this.removeVerticesData(pp), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[pp] = ip, this._userThinInstanceBuffersStorage.sizes[pp] = ip * Math.max(32, this._thinInstanceDataSt … [truncated]
-     }, Sp.d.prototype.thinInstanceSetMatrixAt = function(pp, ip) {
- ... (10 more removed lines; see GitHub link above)
+     NQ(sQ.d, pQ), NQ(FQ.h, aQ), NQ(PQ.i, xQ), NQ(gQ.k, SQ), (0, JQ.e)({
+       create: (QQ, WQ) => {
+         const XQ = new wQ.StandardMaterial(QQ.name, WQ);
+         return (0, oQ.r)(QQ, XQ), XQ.detailMap._pluginDefineNames
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L6934-L6936` → after: `L634-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L634-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L634-L635) · [Before (L6934-L6936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L6934-L6936)

```diff
-       set: function(pp) {
-         const ip = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
-         pp <= (ip ? ip.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = pp)
+       write: (QQ, WQ, XQ) => {
+         (0, oQ._)(QQ.mirror, WQ, XQ)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L6938-L7013` → after: `L637-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L637-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L637-L658) · [Before (L6938-L7013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L6938-L7013)

```diff
-       enumerable: !0,
-       configurable: !0
-     }), Sp.d.prototype._thinInstanceCreateMatrixBuffer = function(pp, ip) {
-       let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-       const Op = new xp.b(this.gy(), ip, !cp, 16, !1, !0);
-       for (let op = 0; op < 4; op++) this.setVerticesBuffer(Op.createVertexBuffer(pp + op, 4 * op, 4));
-       return Op
-     }, Sp.d.prototype.I9 = function(pp, ip) {
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-         Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       if (cp = cp || 16, "matrix" === pp) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = ip ? ip.length : 32 * cp, this._thinInstanceDataStorage.matrixData = ip, this._thin … [truncated]
-       else if ("previousMatrix" === pp) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = ip, null !== ip && (this._thinInstanceDataStorage.previousMatrixBuf … [truncated]
-       else if ("splatIndex" === pp && ip) {
-         this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = ip.length / cp, this._userThinInstanceBuffersStorage.data[pp] = ip, this._userThinInstanceBuffersStorage.strides[pp] = cp, this._userThinInstanceBuffersStorage.sizes[pp] = ip.length;
-         const Op = new xp.b(this.gy(), ip, !0, 16, !1, !0);
-         this._thinInstanceDataStorage.matrixBuffer = Op;
- ... (60 more removed lines; see GitHub link above)
+       addFeature: (QQ, WQ, XQ) => {
+         const wQ = YQ.get(WQ.feature);
+         if (!wQ) throw new Error(`${WQ.feature.name} has no plugin class (registerPluginClass)`);
+         new wQ(QQ.mirror, WQ.state, ...XQ)
+       },
+       texture: (QQ, WQ, XQ) => {
+         let {
+           url: wQ,
+           noMipmap: qQ,
+           invertY: TQ,
+           samplingMode: sQ,
+           data: FQ,
+           sets: PQ
+         } = XQ;
+         if (!FQ) {
+           const XQ = new zQ.e(wQ, WQ, qQ, TQ, sQ);
+ ... (6 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L7015-L7058` → after: `L660-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L660-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L660-L709) · [Before (L7015-L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L7015-L7058)

```diff
-             return !(!isFinite(tp.x) || !isFinite(dp.x)) && (pp.bJ().reConstruct(dp, ep), pp.rawBoundingInfo = new Ip.d(tp, Hp), function(pp, ip) {
-               pp.length = 0;
-               for (let cp = 0; cp < ip.boundingBox.vectors.length; ++cp) pp.push(ip.boundingBox.vectors[cp].clone())
-             }(ip, pp.rawBoundingInfo), pp._updateBoundingInfo(), !0)
-           }(this, Sp, cp)) return;
-         op && this.bakedVertexAnimationManager?.isEnabled && Yp(this) ? this.refreshBoundingInfo({
-           applySkeleton: ip,
-           applyMorph: cp,
-           applyBakedVertexAnimation: !0,
-           updatePositionsArray: !1
-         }) : this.refreshBoundingInfo(ip, cp);
-         const pp = this.bJ();
-         this.rawBoundingInfo = new Ip.d(pp.minimum, pp.maximum)
-       }
-       const yp = this.bJ(),
-         Up = this._thinInstanceDataStorage.matrixData;
- ... (28 more removed lines; see GitHub link above)
+           })),
+           {
+             mimeType: IQ,
+             bytes: jQ,
+             label: BQ
+           } = FQ,
+           yQ = {
+             noMipmap: qQ,
+             invertY: !1,
+             samplingMode: sQ,
+             ...gQ,
+             mimeType: IQ,
+             loaderOptions: void 0,
+             useSRGBBuffer: !1
+           },
+           VQ = new zQ.e(null, WQ, yQ);
+ ... (34 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L7071` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L713) · [Before (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L7071)

```diff
-   40617: (pp, ip, cp) => {
+   41386: (QQ, WQ, XQ) => {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L7074` → after: `L716-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L716-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L716-L717) · [Before (L7074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L7074)

```diff
-       d: () => Up
+       f: () => JQ,
+       h: () => rQ
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L7076-L7544` → after: `L719-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L719-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L719-L791) · [Before (L7076-L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L7076-L7544)

```diff
-     var Op, op, Ip, Sp, xp = cp(40203),
-       Lp = cp(40210),
-       Yp = cp(40233),
-       Dp = cp(37349),
-       Ap = cp(37320),
-       Pp = cp(40415),
-       Wp = cp(37368),
-       yp = cp(40096);
-     let Up = (() => {
-       var pp;
-       let ip, cp, Op, op, Ip, Sp, Wp, yp, Up, wp = Pp.b,
-         vp = [],
-         tp = [],
-         Hp = [],
-         dp = [],
-         ep = [],
- ... (453 more removed lines; see GitHub link above)
+     var wQ = XQ(41373),
+       qQ = XQ(40331),
+       TQ = XQ(40561),
+       zQ = XQ(40670),
+       sQ = XQ(41379),
+       FQ = XQ(40661),
+       PQ = XQ(37762);
+     class gQ extends zQ.d {
+       constructor() {
+         super(...arguments), this.model = null, this.onGeometryUpdated = (QQ, WQ) => {
+           this.releaseUnlessInstanced(WQ)
+         }, this.onLinked = null
+       }
+       link(QQ) {
+         var WQ;
+         (0, PQ.o)(QQ), this.model = QQ, null === (WQ = this.onLinked) || void 0 === WQ || WQ.call(this, QQ)
+ ... (57 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L7546-L7680` → after: `L793-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L793-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L793-L802) · [Before (L7546-L7680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L7546-L7680)

```diff
-       }, (() => {
-         const Yp = "function" === typeof Symbol && Symbol.metadata ? Object.create(wp[Symbol.metadata] ?? null) : void 0;
-         ip = [(0, Lp.H)("position")], cp = [(0, Lp.H)("rotation")], Op = [(0, Lp.y)("rotationQuaternion")], op = [(0, Lp.H)("ei")], Ip = [(0, Lp.K)("billboardMode")], Sp = [(0, Lp.K)()], Wp = [(0, Lp.K)("infiniteDistance")], yp = [(0, Lp.K)()], Up = [(0, Lp.K)()], (0, xp.j)(null, … [truncated]
-           kind: "field",
-           name: "_position",
-           static: !1,
-           private: !1,
-           access: {
-             has: pp => "_position" in pp,
-             get: pp => pp._position,
-             set: (pp, ip) => {
-               pp._position = ip
-             }
-           },
-           metadata: Yp
-         }, vp, tp), (0, xp.j)(null, null, cp, {
- ... (119 more removed lines; see GitHub link above)
+         return WQ._updatable = zQ, WQ._boundingInfo = new TQ.e(this.extend.minimum, this.extend.maximum), WQ.relink(), WQ
+       }
+       static mergeMeshes(QQ, WQ, XQ, wQ, qQ, TQ) {
+         const FQ = QQ[0].sE(),
+           PQ = new sQ.b(QQ[0].name + "_merged", FQ),
+           JQ = new gQ(zQ.d.RandomId(), FQ, void 0, !1, PQ);
+         try {
+           if (!sQ.b.MergeMeshes(QQ, WQ, XQ, PQ, qQ, TQ)) return PQ.dispose(), null
+         } catch (rQ) {
+           throw PQ.dispose(), rQ
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L7682` → after: `L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L804) · [Before (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L7682)

```diff
-         Pp.b.ParseAnimationRanges(Op, pp, ip)
+         return JQ.relink(), PQ
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L7684-L7700` → after: `L806-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L806-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L806-L807) · [Before (L7684-L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L7684-L7700)

```diff
-       return pp.autoAnimate && ip.beginAnimation(Op, pp.autoAnimateFrom, pp.autoAnimateTo, pp.autoAnimateLoop, pp.autoAnimateSpeed || 1), Op
-     }
-     let vp = !1;
- 
-     function tp() {
-       vp || (vp = !0, Up.Parse = wp)
-     }(Op = Up.prototype).fn ?? (Op.fn = (0, yp.k)("TransformNode", "fn")), (op = Up.prototype).applyImpulse ?? (op.applyImpulse = (0, yp.k)("TransformNode", "applyImpulse")), (Ip = Up.prototype).applyAngularImpulse ?? (Ip.applyAngularImpulse = (0, yp.k)("TransformNode", "applyAng … [truncated]
-   },
-   40586: (pp, ip, cp) => {
-     function Op(pp, ip, cp) {
-       try {
-         const Op = pp.next();
-         Op.done ? ip(Op) : Op.value ? Op.value.then((() => {
-           Op.value = void 0, ip(Op)
-         }), cp) : ip(Op)
-       } catch (Op) {
- ... (1 more removed lines; see GitHub link above)
+       removeVerticesData(QQ) {
+         this.releaseUnlessInstanced(QQ), super.removeVerticesData(QQ)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L7702-L7710` → after: `L809-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L809-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L809-L817) · [Before (L7702-L7710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L7702-L7710)

```diff
-     }
- 
-     function op() {
-       let pp, ip = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
-       return (cp, op, Ip) => {
-         const Sp = performance.now();
-         void 0 === pp || Sp - pp > ip ? (pp = Sp, setTimeout((() => {
-           Op(cp, op, Ip)
-         }), 0)) : Op(cp, op, Ip)
+       dispose() {
+         this.release(), super.dispose()
+       }
+       releaseUnlessInstanced(QQ) {
+         var WQ;
+         QQ && null !== (WQ = this.getVertexBuffer(QQ)) && void 0 !== WQ && WQ.getIsInstanced() || this.release()
+       }
+       release() {
+         this.model && ((0, PQ.u)(this.model), this.model = null)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L7714-L7724` → after: `L821-L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L821-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L821-L839) · [Before (L7714-L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L7714-L7724)

```diff
-     function Ip(pp, ip, cp, Op, op) {
-       const Ip = () => {
-         let Sp;
-         const xp = pp => {
-           pp.done ? cp(pp.value) : void 0 === Sp ? Sp = !0 : Ip()
-         };
-         do {
-           Sp = void 0, op && op.aborted ? Op(new Error("Aborted")) : ip(pp, xp, Op), void 0 === Sp && (Sp = !1)
-         } while (Sp)
-       };
-       Ip()
+     function JQ(QQ, WQ, XQ) {
+       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new sQ.b(QQ, XQ);
+       const qQ = (0, PQ.m)(WQ),
+         {
+           positions: TQ,
+           normals: JQ,
+           uvs: rQ,
+           indices: IQ,
+           named: jQ = {}
+         } = WQ,
+         BQ = new FQ.e;
+       BQ.positions = TQ, BQ.normals = null !== JQ && void 0 !== JQ ? JQ : null, BQ.uvs = null !== rQ && void 0 !== rQ ? rQ : null, BQ.indices = IQ;
+       const yQ = new gQ(zQ.d.RandomId(), XQ, BQ, !1, wQ);
+       for (const {
+           kind: zQ,
+           components: sQ
+ ... (3 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L7727-L7736` → after: `L842-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L842-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L842-L856) · [Before (L7727-L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L7727-L7736)

```diff
-     function Sp(pp, ip) {
-       let cp;
-       return Ip(pp, Op, (pp => cp = pp), (pp => {
-         throw pp
-       }), ip), cp
-     }
-     async function xp(pp, ip, cp) {
-       return await new Promise(((Op, op) => {
-         Ip(pp, ip, Op, op, cp)
-       }))
+     function rQ(QQ, WQ, XQ) {
+       let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       const qQ = new sQ.b(QQ, XQ),
+         {
+           positions: TQ,
+           normals: zQ,
+           uvs: PQ,
+           indices: gQ
+         } = WQ;
+       return Object.assign(new FQ.e, {
+         positions: TQ,
+         normals: zQ,
+         uvs: PQ,
+         indices: gQ
+       }).applyToMesh(qQ, wQ), qQ
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L7738-L7741` → after: `L858-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L858-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L858-L880) · [Before (L7738-L7741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L7738-L7741)

```diff
- 
-     function Lp(pp, ip) {
-       return function() {
-         return Sp(pp(...arguments), ip)
+   },
+   41366: (QQ, WQ, XQ) => {
+     function wQ(QQ, WQ, XQ) {
+       const wQ = WQ * WQ * 4,
+         qQ = QQ[0].layers,
+         TQ = qQ * (QQ.length - 1) + QQ[QQ.length - 1].layers,
+         zQ = new Uint8Array(TQ * wQ);
+       QQ.forEach(((WQ, XQ) => {
+         const TQ = XQ + 1 < QQ.length ? Math.min(WQ.layers, qQ) : WQ.layers;
+         zQ.set(new Uint8Array(WQ.pixels.buffer, WQ.pixels.byteOffset, TQ * wQ), XQ * qQ * wQ)
+       }));
+       const sQ = Math.max(1, Math.min(TQ, XQ || TQ));
+       if (sQ === TQ) return [{
+         pixels: zQ,
+         layers: TQ
+       }];
+ ... (7 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L7745-L7749` → after: `L885-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L885-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/255.js#L885-L905) · [Before (L7745-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/255.js#L7745-L7749)

```diff
-       c: () => op,
-       d: () => Lp,
-       e: () => xp,
-       g: () => Sp
-     })
+       b: () => wQ,
+       f: () => TQ
+     });
+     const qQ = new WeakMap;
+ 
+     function TQ(QQ, WQ, XQ) {
+       var wQ, TQ;
+       const zQ = null !== (wQ = qQ.get(QQ)) && void 0 !== wQ ? wQ : new Map;
+       qQ.set(QQ, zQ);
+       const sQ = null !== (TQ = zQ.get(WQ[0])) && void 0 !== TQ ? TQ : [];
+       zQ.set(WQ[0], sQ);
+       const FQ = sQ.find((QQ => QQ.urls.length === WQ.length && QQ.urls.every(((QQ, XQ) => QQ === WQ[XQ]))));
+       if (FQ) return FQ.built;
+       const PQ = {
+         urls: [...WQ],
+         built: XQ()
+ ... (5 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/256.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/256.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L4)

```diff
-   40342: (pp, ip, cp) => {
+   41245: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L6-L9` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L6-L7) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L6-L9)

```diff
-       b: () => xp,
-       f: () => Up,
-       i: () => Yp,
-       j: () => Lp
+       c: () => TQ,
+       e: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L11-L71` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L9-L13) · [Before (L11-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L11-L71)

```diff
-     var Op = cp(40140),
-       op = cp(38905),
-       Ip = cp(40273),
-       Sp = cp(40179);
-     class xp {
-       get uR() {
-         return this._isDisposed
-       }
-       constructor(pp, ip, cp) {
-         let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           Ip = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           xp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           Lp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           Yp = arguments.length > 7 ? arguments[7] : void 0,
-           Dp = arguments.length > 8 ? arguments[8] : void 0;
-         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, Sp.d)(), pp && pp.Gl ? this._engine = pp.Gl().gy() : this._engine = pp, this._updatable = cp, this._instanced = xp, this._divisor = Yp || 1, this._label = Dp, ip instanceof Op.c ? (this._data = null, this._buffer = ip) … [truncated]
- ... (45 more removed lines; see GitHub link above)
+     var wQ = XQ(2015);
+     let qQ = !1;
+ 
+     function TQ() {
+       qQ = !0
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L73-L180` → after: `L15-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L15-L17) · [Before (L73-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L73-L180)

```diff
-     class Lp {
-       get uR() {
-         return this._isDisposed
-       }
-       get instanceDivisor() {
-         return this._instanceDivisor
-       }
-       set instanceDivisor(pp) {
-         const ip = 0 != pp;
-         this._instanceDivisor = pp, ip !== this._instanced && (this._instanced = ip, this._computeHashCode())
-       }
-       get _maxVerticesCount() {
-         const pp = this.getData();
-         return pp ? Array.isArray(pp) ? pp.length / (this.byteStride / 4) - this.byteOffset / 4 : (pp.byteLength - this.byteOffset) / this.byteStride : 0
-       }
-       constructor(pp, ip, cp, Op, op, Sp, Ap, Pp, Wp, yp) {
- ... (92 more removed lines; see GitHub link above)
+ 
+     function zQ() {
+       qQ && (qQ = !1, (0, wQ.c)())
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L184-L204` → after: `L30-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L30-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L30-L46) · [Before (L184-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L184-L204)

```diff
-       switch (pp) {
-         case Lp.UVKind:
-         case Lp.UV2Kind:
-         case Lp.UV3Kind:
-         case Lp.UV4Kind:
-         case Lp.UV5Kind:
-         case Lp.UV6Kind:
-           return 2;
-         case Lp.NormalKind:
-         case Lp.PositionKind:
-           return 3;
-         case Lp.ColorKind:
-         case Lp.ColorInstanceKind:
-         case Lp.MatricesIndicesKind:
-         case Lp.MatricesIndicesExtraKind:
-         case Lp.MatricesWeightsKind:
- ... (5 more removed lines; see GitHub link above)
+       if (QQ.queries.drawCensus() < wQ.Ob.BYTES) return null;
+       const WQ = QQ.memoryData(QQ.scratch(), wQ.Ob.BYTES, 4, "the draw census");
+       return null === WQ ? null : {
+         terrainOpaque: wQ.Ob.terrainOpaque(WQ, 0),
+         terrainTransparent: wQ.Ob.terrainTransparent(WQ, 0),
+         terrainPack: wQ.Ob.terrainPack(WQ, 0),
+         earthSky: wQ.Ob.earthSky(WQ, 0),
+         skyMeshes: wQ.Ob.skyMeshes(WQ, 0),
+         regular: wQ.Ob.regular(WQ, 0),
+         thin: wQ.Ob.thin(WQ, 0),
+         line: wQ.Ob.line(WQ, 0),
+         text: wQ.Ob.text(WQ, 0),
+         particles: wQ.Ob.particles(WQ, 0),
+         terrainParts: wQ.Ob.terrainParts(WQ, 0),
+         terrainCompiling: wQ.Ob.terrainCompiling(WQ, 0),
+         ringCopiesMax: wQ.Ob.ringCopiesMax(WQ, 0),
+ ... (1 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L209` → after: `L51-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L51-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L51-L62) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L209)

```diff
-       return pp instanceof Int8Array ? Lp.BYTE : pp instanceof Uint8Array ? Lp.UNSIGNED_BYTE : pp instanceof Int16Array ? Lp.SHORT : pp instanceof Uint16Array ? Lp.UNSIGNED_SHORT : pp instanceof Int32Array ? Lp.INT : pp instanceof Uint32Array ? Lp.UNSIGNED_INT : Lp.FLOAT
+       const {
+         terrainOpaque: WQ,
+         terrainTransparent: XQ,
+         earthSky: wQ,
+         skyMeshes: qQ,
+         regular: TQ,
+         thin: zQ,
+         line: sQ,
+         text: FQ,
+         particles: PQ
+       } = QQ;
+       return WQ + XQ + wQ + qQ + TQ + zQ + sQ + FQ + PQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L212-L214` → after: `L65-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L65-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L65-L114) · [Before (L212-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L212-L214)

```diff
-     function Ap(pp) {
-       return (0, Ip.p)(pp)
-     }
+     function sQ() {
+       const QQ = (0, qQ.j)();
+       return !0 === (null === QQ || void 0 === QQ ? void 0 : QQ.isCoreRunning) ? function(QQ) {
+         const WQ = TQ(QQ);
+         if (null === WQ) return [];
+         const {
+           terrainOpaque: XQ,
+           terrainTransparent: wQ,
+           terrainPack: qQ,
+           earthSky: sQ,
+           skyMeshes: FQ,
+           regular: PQ,
+           thin: gQ,
+           line: JQ,
+           text: rQ,
+           particles: IQ
+ ... (34 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L216-L219` → after: `L116-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L116-L118) · [Before (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L216-L219)

```diff
-     function Pp(pp, ip, cp, Op, op, Sp, xp, Lp) {
-       (0, Ip.f)(pp, ip, cp, Op, op, Sp, xp, ((pp, ip) => {
-         for (let cp = 0; cp < Op; cp++) Lp(pp[cp], ip + cp)
-       }))
+     function JQ(QQ) {
+       const WQ = (0, TQ.j)();
+       return null !== WQ && +QQ === WQ.api.localId
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L222-L223` → after: `L121-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L121-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L121-L140) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L222-L223)

```diff
-     function Wp(pp, ip, cp, Op, op, Sp, xp, Lp) {
-       return (0, Ip.m)(pp, ip, cp, Op, op, Sp, xp, Lp)
+     function rQ() {
+       gQ || (gQ = !0, (0, FQ.j)(zQ.l, (QQ => {
+         var WQ, XQ;
+         const wQ = (0, sQ.d)(zQ.l, QQ);
+         if (!(0, sQ.c)(wQ)) return;
+         const qQ = wQ;
+         JQ(qQ.RQ) && IQ(qQ.EQ, {
+           icon: qQ.SW,
+           level: qQ.oW,
+           displayName: null !== (WQ = qQ.CQ) && void 0 !== WQ ? WQ : null,
+           durationMs: null !== (XQ = qQ.tW) && void 0 !== XQ ? XQ : null
+         })
+       })), (0, FQ.j)(zQ.N, (QQ => {
+         const WQ = (0, sQ.d)(zQ.N, QQ);
+         if (!(0, sQ.c)(WQ)) return;
+         const XQ = WQ;
+ ... (4 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L228-L229` → after: `L143-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L143-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L143-L146) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L228-L229)

```diff
-     function Up() {
-       yp || (yp = !0, Lp.DeduceStride = Yp, Lp.GetDataType = Dp, Lp.GetTypeByteLength = Ap, Lp.ForEach = Pp, Lp.GetFloatData = Wp)
+     function IQ(QQ, WQ) {
+       wQ.b.update(QQ, WQ), PQ.forEach((WQ => {
+         WQ(QQ)
+       }))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L231-L241` → after: `L148-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L148-L150) · [Before (L231-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L231-L241)

```diff
-   },
-   40140: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Op
-     });
-     class Op {
-       get underlyingResource() {
-         return null
-       }
-       constructor() {
-         this.references = 0, this.TA = 0, this.is32Bits = !1, this.uniqueId = Op._Counter++
+     const jQ = {
+       localEffectUpdated: {
+         watch: QQ => PQ.add(QQ)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L246` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L154) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L246)

```diff
-   40334: (pp, ip, cp) => {
+   41224: (QQ, WQ, XQ) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L250-L278` → after: `L158-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L158-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L158-L175) · [Before (L250-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L250-L278)

```diff
-     var Op = cp(37320),
-       op = cp(40342);
-     class Ip {
-       constructor() {
-         this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this … [truncated]
-       }
-       getNormal() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!this.pickedMesh || ip && !this.pickedMesh.isVerticesDataPresent(op.j.NormalKind)) return null;
-         let cp, Ip = this.pickedMesh.NOp();
-         0 === Ip?.length && (Ip = null);
-         const Sp = Op.i.Zy[0],
-           xp = Op.i.Zy[1],
-           Lp = Op.i.Zy[2];
-         if (ip) {
- ... (13 more removed lines; see GitHub link above)
+     var wQ = XQ(5140),
+       qQ = XQ(5134),
+       TQ = XQ(40850),
+       zQ = XQ(40857);
+     const sQ = new Set(wQ.I),
+       FQ = wQ.I.map((QQ => (new TextEncoder).encode(QQ))),
+       PQ = new Map;
+ 
+     function gQ(QQ, WQ) {
+       var XQ;
+       return null === (XQ = PQ.get(QQ)) || void 0 === XQ ? void 0 : XQ[WQ]
+     }(0, zQ.j)(wQ.gc.NewOtherEntitySettings, (QQ => {
+       QQ.payloadKind === qQ.rc.Msgpack && FQ.some((WQ => function(QQ, WQ) {
+         const XQ = WQ[0];
+         for (let wQ = QQ.indexOf(XQ); - 1 !== wQ && wQ + WQ.length <= QQ.length; wQ = QQ.indexOf(XQ, wQ + 1)) {
+           let XQ = 1;
+ ... (2 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L280-L294` → after: `L177-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L177-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L177-L186) · [Before (L280-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L280-L294)

```diff
-         const Yp = (pp, ip) => {
-           if (-1 !== this.thinInstanceIndex) {
-             const cp = pp._thinInstanceDataStorage.matrixData,
-               op = this.thinInstanceIndex << 4;
-             if (cp && cp.length > op) {
-               const pp = Op.i.Matrix[0];
-               Op.b.FromArrayToRef(cp, op, pp), Op.o.TransformNormalToRef(ip, pp, ip)
-             }
-           }
-           let cp = pp.getWorldMatrix();
-           pp.nonUniformScaling && (Op.i.Matrix[0].rM(cp), cp = Op.i.Matrix[0], cp.setTranslationFromFloats(0, 0, 0), cp.invert(), cp.transposeToRef(Op.i.Matrix[1]), cp = Op.i.Matrix[1]), Op.o.TransformNormalToRef(ip, cp, ip)
-         };
-         if (pp && Yp(this.pickedMesh, cp), this.ray) {
-           const ip = Op.i.Zy[0].rM(cp);
-           pp || Yp(this.pickedMesh, ip), Op.o.Dot(ip, this.ray.direction) > 0 && cp.negateInPlace()
+         return !1
+       }(QQ.payload, WQ))) && function(QQ) {
+         if (null === QQ || "object" !== typeof QQ || null === QQ.settings || "object" !== typeof QQ.settings) return;
+         const WQ = String(QQ.eId),
+           XQ = QQ.settings;
+         let wQ = PQ.get(WQ);
+         for (const qQ in XQ) {
+           if (!sQ.has(qQ)) continue;
+           const QQ = XQ[qQ];
+           null === QQ || void 0 === QQ ? wQ && delete wQ[qQ] : (wQ ??= {}, wQ[qQ] = QQ)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L296-L310` → after: `L188-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L188-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L188-L192) · [Before (L296-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L296-L310)

```diff
-         return cp.normalize(), cp
-       }
-       getTextureCoordinates() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : op.j.UVKind;
-         if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(pp)) return null;
-         const ip = this.pickedMesh.NOp();
-         if (!ip) return null;
-         const cp = this.pickedMesh.getVerticesData(pp);
-         if (!cp) return null;
-         let Ip = Op.l.FromArray(cp, 2 * ip[3 * this.faceId]),
-           Sp = Op.l.FromArray(cp, 2 * ip[3 * this.faceId + 1]),
-           xp = Op.l.FromArray(cp, 2 * ip[3 * this.faceId + 2]);
-         return Ip = Ip.scale(this.bu), Sp = Sp.scale(this.bv), xp = xp.scale(1 - this.bu - this.bv), new Op.l(Ip.x + Sp.x + xp.x, Ip.y + Sp.y + xp.y)
-       }
-     }
+         wQ && PQ.set(WQ, wQ)
+       }((0, TQ.d)(QQ.payload))
+     })), (0, zQ.g)((() => {
+       PQ.clear()
+     }))
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L312` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L194) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L312)

```diff
-   40179: (pp, ip, cp) => {
+   41215: (QQ, WQ, XQ) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L314` → after: `L196-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L196-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L196-L198) · [Before (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L314)

```diff
-       d: () => Ip
+       d: () => IQ,
+       f: () => PQ,
+       g: () => JQ
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L316-L317` → after: `L200-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L200-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L200-L207) · [Before (L316-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L316-L317)

```diff
-     var Op = cp(40050);
-     let op = !1;
+     var wQ = XQ(39279),
+       qQ = XQ(2010),
+       TQ = XQ(1340),
+       zQ = XQ(40845),
+       sQ = XQ(40847),
+       FQ = XQ(40857);
+     const PQ = new wQ.c;
+     let gQ = {};
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L319-L327` → after: `L209-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L209-L210) · [Before (L319-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L319-L327)

```diff
-     function Ip() {
-       op || (op = !0, Op.ThinEngine.prototype.updateDynamicIndexBuffer = function(pp, ip) {
-         let cp;
-         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(pp), cp = pp.is32Bits ? ip instanceof Uint32Array ? ip : new Uint32Array(ip) : ip instanceof Uint16Array ? ip : new Uint16Array(ip), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, cp, … [truncated]
-       }, Op.ThinEngine.prototype.updateDynamicVertexBuffer = function(pp, ip, cp, Op) {
-         this.bindArrayBuffer(pp), void 0 === cp && (cp = 0);
-         const op = ip.byteLength || ip.length;
-         void 0 === Op || Op >= op && 0 === cp ? ip instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, cp, new Float32Array(ip)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, cp, ip) : ip instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, cp, new Floa … [truncated]
-       })
+     function JQ(QQ) {
+       return gQ[QQ]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L330` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L279) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L330)

```diff
-   40149: (pp, ip, cp) => {
+   41229: (QQ, WQ, XQ) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L332` → after: `L281-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L281-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L281-L284) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L332)

```diff
-       b: () => Op
+       e: () => lQ,
+       h: () => yQ,
+       i: () => AQ,
+       j: () => RQ
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L334-L349` → after: `L286-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L286-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L286-L315) · [Before (L334-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L334-L349)

```diff
-     class Op {
-       get underlyingResource() {
-         return this._webGLTexture
-       }
-       constructor() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           ip = arguments.length > 1 ? arguments[1] : void 0;
-         if (this._MSAARenderBuffers = null, this._context = ip, !pp && (pp = ip.createTexture(), !pp)) throw new Error("Unable to create webGL texture");
-         this.set(pp)
-       }
-       setUsage() {}
-       set(pp) {
-         this._webGLTexture = pp
-       }
-       reset() {
-         this._webGLTexture = null, this._MSAARenderBuffers = null
+     var wQ = XQ(1302),
+       qQ = XQ(651),
+       TQ = XQ(105),
+       zQ = XQ(5140),
+       sQ = XQ(40813),
+       FQ = XQ(40839),
+       PQ = XQ(40829),
+       gQ = XQ(41224),
+       JQ = XQ(41215),
+       rQ = XQ(40847),
+       IQ = XQ(40857);
+ 
+     function jQ(QQ) {
+       let {
+         deadEId: WQ,
+         killerEId: XQ,
+ ... (14 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L351-L352` → after: `L317-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L317-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L317-L329) · [Before (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L351-L352)

```diff
-       addMSAARenderBuffer(pp) {
-         this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(pp)
+     }
+ 
+     function BQ(QQ) {
+       let {
+         killer: WQ,
+         victim: XQ,
+         withItem: wQ
+       } = QQ;
+       return {
+         killer: GQ(WQ),
+         victim: GQ(XQ),
+         withItem: wQ,
+         killstreak: 0
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L354-L357` → after: `L331-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L331-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L331-L440) · [Before (L354-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L354-L357)

```diff
-       releaseMSAARenderBuffers() {
-         if (this._MSAARenderBuffers) {
-           for (const pp of this._MSAARenderBuffers) this._context.deleteRenderbuffer(pp);
-           this._MSAARenderBuffers = null
+     }
+ 
+     function yQ(QQ) {
+       dQ && aQ((() => "killed" === QQ.kind ? jQ(QQ.body) : BQ(QQ.body)))
+     }
+     const VQ = "#2727f1",
+       DQ = "#912c2c";
+ 
+     function pQ(QQ, WQ) {
+       var XQ;
+       return JQ.f.has(QQ) ? null === (XQ = JQ.f.getSettings(QQ)) || void 0 === XQ ? void 0 : XQ[WQ] : (0, gQ.b)(QQ, WQ)
+     }
+ 
+     function GQ(QQ) {
+       var WQ, XQ, zQ, sQ, gQ;
+       let {
+ ... (94 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L369` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L444) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L369)

```diff
-   40113: (pp, ip, cp) => {
+   39279: (QQ, WQ, XQ) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L371` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L446) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L371)

```diff
-       b: () => tp
+       c: () => wQ
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L519-L523` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L450) · [Before (L519-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L519-L523)

```diff
-         let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, pp && this.reset()
-       }
-       reset() {
-         this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
+         this.members = new Map
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L526-L590` → after: `L453-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L453-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L453-L481) · [Before (L526-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L526-L590)

```diff
-         if (!pp) return;
-         const ip = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
-         this.enabled = ip ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = ip ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = ip ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = ip ? this.stencilMaterial. … [truncated]
-       }
-     }
-     class Ap {
-       constructor() {
-         this.reset()
-       }
-       reset() {
-         this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = Ap.ALWAYS, this.opStencilFail = Ap.KEEP, this.opDepthFail = Ap.KEEP, this.opStencilDepthPass = Ap.REPLACE, this.backFunc = Ap.ALWAYS, this.backOpStencilFail = Ap.KEEP, this.backOpDepthF … [truncated]
-       }
-       get stencilFunc() {
-         return this.func
-       }
-       set stencilFunc(pp) {
- ... (49 more removed lines; see GitHub link above)
+         const WQ = {
+           added: [],
+           removed: [],
+           settingChanges: []
+         };
+         for (const wQ of QQ.uQ) {
+           let QQ = this.members.get(wQ.LQ);
+           if (QQ || (QQ = {
+               name: null,
+               settings: {}
+             }, this.members.set(wQ.LQ, QQ), WQ.added.push(wQ.LQ)), null !== wQ.kQ && (QQ.name = wQ.kQ), null !== wQ.fQ || wQ.SQ.length > 0) {
+             const XQ = null === wQ.fQ ? {} : JSON.parse(wQ.fQ);
+             Object.assign(QQ.settings, XQ);
+             for (const WQ of wQ.SQ) delete QQ.settings[WQ], XQ[WQ] = void 0;
+             WQ.settingChanges.push({
+               playerId: wQ.LQ,
+ ... (13 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L592-L593` → after: `L483-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L483-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L483-L484) · [Before (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L592-L593)

```diff
-       get stencilBackOpStencilDepthPass() {
-         return this.backOpStencilDepthPass
+       has(QQ) {
+         return this.members.has(QQ)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L595-L596` → after: `L486-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L486-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L486-L487) · [Before (L595-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L595-L596)

```diff
-       set stencilBackOpStencilDepthPass(pp) {
-         this.backOpStencilDepthPass = pp
+       ids() {
+         return [...this.members.keys()]
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L598-L599` → after: `L489-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L489-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L489-L491) · [Before (L598-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L598-L599)

```diff
-       get stencilMask() {
-         return this.mask
+       getName(QQ) {
+         var WQ, XQ;
+         return null !== (WQ = null === (XQ = this.members.get(QQ)) || void 0 === XQ ? void 0 : XQ.name) && void 0 !== WQ ? WQ : void 0
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L601-L602` → after: `L493-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L493-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L493-L495) · [Before (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L601-L602)

```diff
-       set stencilMask(pp) {
-         this.mask = pp
+       getSettings(QQ) {
+         var WQ;
+         return null === (WQ = this.members.get(QQ)) || void 0 === WQ ? void 0 : WQ.settings
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L604-L605` → after: `L497-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L497-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L497-L499) · [Before (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L604-L605)

```diff
-       get stencilTest() {
-         return this.enabled
+       getSetting(QQ, WQ) {
+         var XQ;
+         return null === (XQ = this.members.get(QQ)) || void 0 === XQ ? void 0 : XQ.settings[WQ]
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L607-L608` → after: `L501-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L501-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/256.js#L501-L502) · [Before (L607-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/256.js#L607-L608)

```diff
-       set stencilTest(pp) {
-         this.enabled = pp
+       clear() {
+         this.members.clear()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/257.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/257.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775)

#### 1. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/257.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/257.js#L2)

```diff
- export const ids = [257, 358];
+ export const ids = [257];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/257.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/257.js#L4-L6)

```diff
-   40062: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Op
+   40071: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       playDocsSound: () => sQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L8-L10` → after: `L8-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L8-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/257.js#L8-L31) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/257.js#L8-L10)

```diff
-     class Op {
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.ShadersRepository : Op.ShadersRepositoryWGSL
+     var wQ = XQ(5212),
+       qQ = XQ(37049),
+       TQ = XQ(1238);
+     const zQ = new Map;
+ 
+     function sQ(QQ, WQ, XQ, sQ, FQ) {
+       let PQ, gQ = null,
+         JQ = 0,
+         rQ = 0;
+       if (WQ) PQ = new wQ.Howl({
+         src: [`${TQ.clientSideServerUrls.staticUrl}/sounds/music/${QQ}.mp3`],
+         html5: !0,
+         volume: XQ
+       });
+       else {
+         var IQ;
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L12-L13` → after: `L33-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L33-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/257.js#L33-L74) · [Before (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/257.js#L12-L13)

```diff
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.ShadersStore : Op.ShadersStoreWGSL
+       const jQ = WQ ? PQ.play() : PQ.play(QQ);
+       PQ.volume(XQ, jQ), sQ > 0 && PQ.seek(JQ + sQ, jQ);
+       const BQ = () => WQ ? PQ.duration() : rQ;
+       let yQ = !1;
+       const VQ = QQ => {
+           yQ || (yQ = !0, PQ.off("play", DQ, jQ), PQ.off("end", pQ, jQ), PQ.off("loaderror", UQ), PQ.off("playerror", GQ, jQ), WQ && PQ.unload(), FQ.onEnd(QQ))
+         },
+         DQ = () => {
+           FQ.onPlay(BQ())
+         },
+         pQ = () => {
+           VQ(!1)
+         },
+         GQ = (WQ, XQ) => {
+           console.error(`Could not play docs sound ${QQ}`, XQ), VQ(!0)
+         },
+ ... (26 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/258.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/258.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44)

#### 1. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L4-L12` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L4-L6) · [Before (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L4-L12)

```diff
-   40273: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Pp,
-       e: () => Ap,
-       f: () => Lp,
-       i: () => Wp,
-       m: () => Yp,
-       p: () => xp,
-       s: () => Dp
+   40083: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       default: () => NQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L14-L228` → after: `L8-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L8-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L8-L66) · [Before (L14-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L14-L228)

```diff
-     var Op = cp(38905),
-       op = cp(40276);
- 
-     function Ip(pp, ip, cp, Op) {
-       switch (ip) {
-         case 5120: {
-           let ip = pp.getInt8(cp);
-           return Op && (ip = Math.max(ip / 127, -1)), ip
-         }
-         case 5121: {
-           let ip = pp.getUint8(cp);
-           return Op && (ip /= 255), ip
-         }
-         case 5122: {
-           let ip = pp.getInt16(cp, !0);
-           return Op && (ip = Math.max(ip / 32767, -1)), ip
- ... (199 more removed lines; see GitHub link above)
+     XQ(6858);
+     var wQ = XQ(61),
+       qQ = XQ(40089),
+       TQ = XQ(40349),
+       zQ = XQ(40479),
+       sQ = XQ(40517),
+       FQ = XQ(40530),
+       PQ = XQ(37539),
+       gQ = XQ(37367),
+       JQ = XQ(40643),
+       rQ = XQ(40699),
+       IQ = (XQ(40732), XQ(1257)),
+       jQ = XQ(231),
+       BQ = XQ(1226),
+       yQ = XQ(26),
+       VQ = XQ(2978),
+ ... (43 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L231-L267` → after: `L69-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L69-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L69-L101) · [Before (L231-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L231-L267)

```diff
-       const ip = pp.buffer;
-       if (ip instanceof ArrayBuffer) return pp;
-       const cp = new ArrayBuffer(pp.byteLength);
-       return new Uint8Array(cp).set(new Uint8Array(ip, pp.byteOffset, pp.byteLength)), cp
-     }
-   },
-   40103: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => mp,
-       c: () => jp,
-       j: () => kp,
-       g: () => lp,
-       k: () => Qp
-     });
-     class Op {
-       constructor() {
- ... (21 more removed lines; see GitHub link above)
+       let {
+         heatmap: WQ,
+         scale: XQ,
+         fullyOpaqueFrom: RQ,
+         bounds: kQ,
+         fitBounds: fQ,
+         schematic: SQ,
+         controls: tQ,
+         onStepTime: oQ,
+         onShowAllTime: eQ,
+         onTogglePlaying: nQ,
+         getReadout: YQ = null
+       } = QQ;
+       const {
+         t: NQ
+       } = (0, BQ.C)(), {
+ ... (17 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L271-L293` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L104-L107) · [Before (L271-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L271-L293)

```diff
-           Op += cp + "\n"
-         }
-         for (const op of this.children) Op += op.process(pp, ip, cp);
-         return this.additionalDefineKey && (pp[this.additionalDefineKey] = this.additionalDefineValue || "true", cp[this.additionalDefineKey] = pp[this.additionalDefineKey]), Op
-       }
-     }
-     class op {
-       constructor() {
-         this._lines = []
-       }
-       get currentLine() {
-         return this._lines[this.lineIndex]
-       }
-       get canRead() {
-         return this.lineIndex < this._lines.length - 1
-       }
- ... (7 more removed lines; see GitHub link above)
+           return {
+             positions: Int32Array.from(XQ),
+             values: Float64Array.from(wQ),
+             count: wQ.length
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L295-L299` → after: `L109-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L109-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L109-L115) · [Before (L295-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L295-L299)

```diff
-           const pp = ip.trim();
-           if (!pp) continue;
-           if (pp.startsWith("//")) {
-             this._lines.push(ip);
-             continue
+         }(WQ, hW)), [WQ, hW]),
+         EW = dQ * TW.cameraFOV / 100,
+         CW = JW.height > 0 ? JW.width / JW.height : 1,
+         uW = (0, wQ.useMemo)((() => function(QQ, WQ) {
+           return {
+             min: [QQ.min[0] - WQ[0], QQ.min[1] - WQ[1], QQ.min[2] - WQ[2]],
+             max: [QQ.max[0] - WQ[0] + 1, QQ.max[1] - WQ[1] + 1, QQ.max[2] - WQ[2] + 1]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L301-L309` → after: `L117-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L117-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L117-L172) · [Before (L301-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L301-L309)

```diff
-           const cp = pp.indexOf(";");
-           if (-1 === cp) this._lines.push(pp);
-           else if (cp === pp.length - 1) pp.length > 1 && this._lines.push(pp);
-           else {
-             const pp = ip.split(";");
-             for (let ip = 0; ip < pp.length; ip++) {
-               let cp = pp[ip];
-               cp && (cp = cp.trim(), cp && this._lines.push(cp + (ip !== pp.length - 1 ? ";" : "")))
-             }
+         }(fQ, hW)), [fQ, hW]),
+         LW = XW(uW, CW, EW),
+         kW = null !== aW && void 0 !== aW ? aW : LW,
+         fW = (0, wQ.useRef)({
+           fittedView: LW,
+           fieldOfView: EW,
+           mouseSensitivity: TW.mouseSensitivity,
+           canLock: yW
+         });
+       fW.current = {
+         fittedView: LW,
+         fieldOfView: EW,
+         mouseSensitivity: TW.mouseSensitivity,
+         canLock: yW
+       };
+       const SW = (0, wQ.useMemo)((() => {
+ ... (40 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L311-L347` → after: `L174-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L174-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L174-L259) · [Before (L311-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L311-L347)

```diff
-         }
-       }
-     }
-     class Ip extends Op {
-       process(pp, ip, cp) {
-         for (let Op = 0; Op < this.children.length; Op++) {
-           const op = this.children[Op];
-           if (op.isValid(pp)) return op.process(pp, ip, cp)
-         }
-         return ""
-       }
-     }
-     class Sp extends Op {
-       isValid(pp) {
-         return this.testExpression.isTrue(pp)
-       }
- ... (21 more removed lines; see GitHub link above)
+         }), [UW, WQ, hW, kW, AW, XQ, RQ]),
+         {
+           keyHandlers: tW
+         } = (0, UQ.g)({
+           isEnabled: UW,
+           claimedKeyCodes: cQ,
+           qr: QQ => {
+             lW((WQ => function(QQ, WQ) {
+               const XQ = [Math.sin(QQ.heading), 0, Math.cos(QQ.heading)],
+                 wQ = zW(zW(sW(XQ, WQ.forward), sW(WW(QQ.heading), WQ.right)), [0, WQ.up, 0]);
+               return {
+                 ...QQ,
+                 position: zW(QQ.position, wQ)
+               }
+             }(null !== WQ && void 0 !== WQ ? WQ : fW.current.fittedView, QQ)))
+           },
+ ... (70 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L349` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L261) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L349)

```diff
-             Dp = Dp.trim(), "" !== Dp && (cp.push(Dp), Dp = "")
+             DW.current = !1, BW(document.pointerLockElement === QQ)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L351-L352` → after: `L263-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L263-L264) · [Before (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L351-L352)

```diff
-           Ip = pp => {
-             Op < xp._Stack.length - 1 && (xp._Stack[++Op] = pp)
+           XQ = () => {
+             DW.current && (DW.current = !1, VW(!1))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L354-L572` → after: `L266-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L266-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L266-L275) · [Before (L354-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L354-L572)

```diff
-           Sp = () => xp._Stack[Op],
-           Lp = () => -1 === Op ? "!!INVALID EXPRESSION!!" : xp._Stack[Op--];
-         let Yp = 0,
-           Dp = "";
-         for (; Yp < pp.length;) {
-           const ip = pp.charAt(Yp),
-             Ap = Yp < pp.length - 1 ? pp.substring(Yp, 2 + Yp) : "";
-           if ("(" === ip) Dp = "", Ip(ip);
-           else if (")" === ip) {
-             for (op(); - 1 !== Op && "(" !== Sp();) cp.push(Lp());
-             Lp()
-           } else if (xp._OperatorPriority[Ap] > 1) {
-             for (op(); - 1 !== Op && xp._OperatorPriority[Sp()] >= xp._OperatorPriority[Ap];) cp.push(Lp());
-             Ip(Ap), Yp++
-           } else Dp += ip;
-           Yp++
- ... (203 more removed lines; see GitHub link above)
+           wQ = WQ => {
+             const XQ = !fW.current.canLock && document.activeElement === QQ && 0 !== (1 & WQ.buttons);
+             if (document.pointerLockElement !== QQ && !XQ) return;
+             const wQ = fW.current.mouseSensitivity * aQ;
+             lW((QQ => function(QQ, WQ, XQ) {
+               const wQ = 2 * Math.PI;
+               return {
+                 ...QQ,
+                 heading: ((QQ.heading + WQ) % wQ + wQ) % wQ,
+                 pitch: Math.max(-LQ, Math.min(LQ, QQ.pitch + XQ))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L574-L575` → after: `L277-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L277-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L277-L300) · [Before (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L574-L575)

```diff
-             }
-             continue
+             }(null !== QQ && void 0 !== QQ ? QQ : fW.current.fittedView, WQ.movementX * wQ, WQ.movementY * wQ)))
+           };
+         return document.addEventListener("pointerlockchange", WQ), document.addEventListener("pointerlockerror", XQ), document.addEventListener("pointermove", wQ), () => {
+           document.removeEventListener("pointerlockchange", WQ), document.removeEventListener("pointerlockerror", XQ), document.removeEventListener("pointermove", wQ), document.pointerLockElement === QQ && (0, bQ.c)()
+         }
+       }), []), (0, wQ.useEffect)((() => {
+         const QQ = gW.current;
+         null !== QQ && 0 !== JW.width && 0 !== JW.height && (QQ.engine.resize(), QQ.needsRender = !0)
+       }), [JW.width, JW.height]), (0, wQ.useEffect)((() => {
+         const QQ = gW.current;
+         null !== QQ && (QQ.targetFieldOfView = EW * (bW ? HQ : 1))
+       }), [EW, bW]), (0, wQ.useEffect)((() => {
+         const QQ = gW.current;
+         null !== QQ && function(QQ, WQ, XQ, wQ) {
+           const qQ = [],
+             TQ = [],
+ ... (8 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L577-L622` → after: `L302-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L302-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L302-L326) · [Before (L577-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L577-L622)

```diff
-         }
-         const Sp = new Op;
-         if (Sp.line = op, ip.children.push(Sp), "#" === op[0] && "d" === op[1]) {
-           const pp = op.replace(";", "").split(" ");
-           Sp.additionalDefineKey = pp[1], 3 === pp.length && (Sp.additionalDefineValue = pp[2])
-         }
-       }
-       return !1
-     }
- 
-     function Ep(pp, ip, cp, Ip) {
-       const Sp = new Op,
-         xp = new op;
-       return xp.lineIndex = -1, xp.lines = pp.split("\n"), Cp(xp, Sp, Ip), Sp.process(ip, cp, Ip)
-     }
- 
- ... (30 more removed lines; see GitHub link above)
+           KQ(QQ.cells, Float32Array.from(qQ), Float32Array.from(TQ), TQ.length / 4), QQ.translucent = {
+             nB: Float32Array.from(zQ),
+             colours: Float32Array.from(sQ),
+             count: sQ.length / 4
+           }, QQ.translucentSortedFrom = null, mQ(QQ), QQ.needsRender = !0
+         }(QQ, RW, XQ, RQ)
+       }), [RW, XQ, RQ]), (0, wQ.useEffect)((() => {
+         const QQ = gW.current;
+         null !== QQ && function(QQ, WQ) {
+           QQ.chunkGridOrigin = WQ, QQ.chunkGridCentre = null, OQ(QQ)
+         }(QQ, kQ.min)
+       }), [kQ]), (0, wQ.useEffect)((() => {
+         const QQ = gW.current;
+         null !== QQ && function(QQ, WQ, XQ) {
+           const wQ = [],
+             qQ = [];
+ ... (9 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L625-L634` → after: `L329-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L329-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L329-L387) · [Before (L625-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L625-L634)

```diff
-           if (xp[4]) {
-             const pp = xp[5];
-             if (-1 !== pp.indexOf("..")) {
-               const Op = pp.split(".."),
-                 op = parseInt(Op[0]);
-               let Ip = parseInt(Op[1]),
-                 Sp = cp.slice(0);
-               cp = "", isNaN(Ip) && (Ip = ip.indexParameters[Op[1]]);
-               for (let pp = op; pp < Ip; pp++) ip.supportsUniformBuffers || (Sp = Sp.replace(tp, ((pp, ip) => ip + "{X}"))), cp += Sp.replace(Hp, pp.toString()) + "\n"
-             } else ip.supportsUniformBuffers || (cp = cp.replace(tp, ((pp, ip) => ip + "{X}"))), cp = cp.replace(Hp, pp)
+           KQ(QQ.schematicBlocks, Float32Array.from(wQ), Float32Array.from(qQ), qQ.length / 4), QQ.needsRender = !0
+         }(QQ, SQ, kQ)
+       }), [SQ, kQ]), (0, wQ.useEffect)((() => {
+         const QQ = gW.current;
+         null !== QQ && null !== QQ.chunkGrid && (QQ.chunkGrid.isVisible = dW, QQ.needsRender = !0)
+       }), [dW, kQ]), (0, wQ.useEffect)((() => {
+         const QQ = gW.current;
+         null !== QQ && function(QQ, WQ, XQ) {
+           const {
+             camera: wQ
+           } = QQ;
+           wQ.position.set(WQ.position[0], WQ.position[1], WQ.position[2]), wQ.rotation.set(WQ.pitch, WQ.heading, 0);
+           const qQ = (EQ + 1) * jQ.h.Ij * Math.sqrt(3);
+           wQ.maxZ = Math.max(qQ, Math.hypot(...zW(WQ.position, sW(qW({
+             min: [0, 0, 0],
+             max: XQ
+ ... (43 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L636-L640` → after: `L389-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L389-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L389-L425) · [Before (L636-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L636-L640)

```diff
-           const Op = [];
-           for (const pp of op) {
-             const ip = pp.split(xp[0]);
-             for (let pp = 0; pp < ip.length - 1; pp++) Op.push(ip[pp]), Op.push(cp);
-             Op.push(ip[ip.length - 1])
+         }), rW && (0, vQ.jsx)("div", {
+           className: "StudioHeatmap3DUnavailable SmallTextLight",
+           children: NQ("3D view isn't available in this browser.")
+         }), UW && (0, vQ.jsx)("div", {
+           className: "StudioHeatmap3DCrosshair"
+         }), (0, vQ.jsx)("div", {
+           className: "StudioHeatmap3DCoordinates SmallTextLight",
+           children: kW.position.map(((QQ, WQ) => (QQ + hW[WQ]).toFixed(2))).join(" ")
+         }), dW && (0, vQ.jsx)(ZQ, {
+           heading: kW.heading,
+           pitch: kW.pitch,
+           onViewFrom: QQ => {
+             const WQ = sW(QQ, -1),
+               XQ = 0 === WQ[1] ? {
+                 heading: Math.atan2(WQ[0], WQ[2]),
+                 pitch: 0
+ ... (21 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L642-L652` → after: `L427-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L427-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L427-L447) · [Before (L642-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L642-L652)

```diff
-           op = Op, Ip = Ip || cp.indexOf("#include<") >= 0 || cp.indexOf("#include <") >= 0
-         }
-       }
-       dp.length = 0;
-       const Sp = op.join("");
-       Ip ? lp(Sp.toString(), ip, cp) : cp(Sp)
-     }
-     const Qp = {
-       loadFile: (pp, ip, cp, Op, op, Ip) => {
-         throw (0, Pp.o)("FileTools")
-       }
+         }), null !== SW && (0, vQ.jsx)("div", {
+           className: "StudioHeatmapMapReadout SmallTextLight",
+           children: null === YQ ? NQ("studio:heatmapBlockReadout", {
+             x: SW.x,
+             y: SW.y,
+             z: SW.z,
+             count: (0, IQ.O)(SW.value)
+           }) : YQ(SW.x, SW.y, SW.z, SW.value)
+         }), (0, vQ.jsxs)("div", {
+           className: "StudioHeatmapMapControls",
+           children: [tQ, (0, vQ.jsx)(DQ.T, {
+             active: null === aW,
+             onClick: () => {
+               lW(null)
+             },
+             children: (0, vQ.jsx)(pQ.d, {
+ ... (5 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L666-L667` → after: `L450-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L450-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L450-L556) · [Before (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L666-L667)

```diff
-     function Ip(pp, ip) {
-       return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (ip ? ip + "\n" : "") + pp
+     function ZQ(QQ) {
+       let {
+         heading: WQ,
+         pitch: XQ,
+         onViewFrom: qQ,
+         onTurn: TQ,
+         onFlip: zQ
+       } = QQ;
+       const {
+         t: sQ
+       } = (0, BQ.C)(), FQ = (0, wQ.useRef)(null), PQ = QW({
+         heading: WQ,
+         pitch: XQ
+       }), gQ = WW(WQ), JQ = PW(PQ, gQ), rQ = oQ + eQ + 2, IQ = tQ.flatMap((QQ => [1, -1].map((WQ => {
+         const XQ = sW(QQ.direction, WQ);
+         return {
+ ... (91 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L670-L673` → after: `L559-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L559-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L559-L582) · [Before (L670-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L670-L673)

```diff
-     function Sp(pp, ip, cp, Ip, Sp, xp, Lp) {
-       const Yp = Lp || op.loadFile;
-       if (!Yp) throw (0, Op.o)("FileTools");
-       return Yp(pp, ip, cp, Ip, Sp, xp)
+     function OQ(QQ) {
+       var WQ, XQ, wQ;
+       const {
+         chunkGridOrigin: qQ,
+         camera: TQ
+       } = QQ;
+       if (null === qQ) return;
+       const zQ = [TQ.position.x, TQ.position.y, TQ.position.z],
+         sQ = [0, 2].map((QQ => Math.floor((zQ[QQ] + qQ[QQ]) / jQ.h.Ij))),
+         FQ = QQ.chunkGridCentre;
+       if (null !== FQ && FQ.every(((QQ, WQ) => QQ === sQ[WQ]))) return;
+       const JQ = null === (WQ = null === (XQ = QQ.chunkGrid) || void 0 === XQ ? void 0 : XQ.isVisible) || void 0 === WQ || WQ;
+       null === (wQ = QQ.chunkGrid) || void 0 === wQ || wQ.dispose();
+       const [IQ, BQ] = [0, 2].map(((QQ, WQ) => {
+         const XQ = [];
+         for (let wQ = sQ[WQ] - EQ; wQ <= sQ[WQ] + EQ + 1; wQ++) XQ.push(wQ * jQ.h.Ij - qQ[QQ]);
+ ... (8 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L677-L698` → after: `L586-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L586-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L586-L590) · [Before (L677-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L677-L698)

```diff
-       if (pp) return ip ? pp.IS_NDC_HALF_ZRANGE = "" : delete pp.IS_NDC_HALF_ZRANGE, cp ? pp.USE_REVERSE_DEPTHBUFFER = "" : delete pp.USE_REVERSE_DEPTHBUFFER, void(Op ? pp.USE_EXACT_SRGB_CONVERSIONS = "" : delete pp.USE_EXACT_SRGB_CONVERSIONS);
-       {
-         let pp = "";
-         return ip && (pp += "#define IS_NDC_HALF_ZRANGE"), cp && (pp && (pp += "\n"), pp += "#define USE_REVERSE_DEPTHBUFFER"), Op && (pp && (pp += "\n"), pp += "#define USE_EXACT_SRGB_CONVERSIONS"), pp
-       }
-     }
- 
-     function Lp(pp, ip) {
-       let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         Op = arguments.length > 3 ? arguments[3] : void 0;
-       switch (pp) {
-         case 3: {
-           const pp = new Int8Array(ip);
-           return Op && pp.set(new Int8Array(Op)), pp
-         }
-         case 0: {
- ... (6 more removed lines; see GitHub link above)
+       QQ.Y5("matrix", function(QQ, WQ) {
+         const XQ = new Float32Array(16 * WQ);
+         for (let wQ = 0; wQ < WQ; wQ++) {
+           const WQ = 16 * wQ;
+           XQ[WQ] = 1, XQ[WQ + 5] = 1, XQ[WQ + 10] = 1, XQ[WQ + 12] = QQ[3 * wQ], XQ[WQ + 13] = QQ[3 * wQ + 1], XQ[WQ + 14] = QQ[3 * wQ + 2], XQ[WQ + 15] = 1
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L700-L727` → after: `L592-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L592-L593) · [Before (L700-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L700-L727)

```diff
-         case 5:
-         case 8:
-         case 9:
-         case 10:
-         case 2: {
-           const pp = "number" !== typeof ip ? new Uint16Array(ip) : new Uint16Array(cp ? ip / 2 : ip);
-           return Op && pp.set(new Uint16Array(Op)), pp
-         }
-         case 6: {
-           const pp = "number" !== typeof ip ? new Int32Array(ip) : new Int32Array(cp ? ip / 4 : ip);
-           return Op && pp.set(new Int32Array(Op)), pp
-         }
-         case 7:
-         case 11:
-         case 12:
-         case 13:
- ... (12 more removed lines; see GitHub link above)
+         return XQ
+       }(WQ, wQ), 16, !0), QQ.Y5("color", XQ, 4, !0), QQ.isVisible = wQ > 0
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L740` → after: `L597-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L597-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L597-L616) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L740)

```diff
-       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Op[pp]) return Op[pp] = !0, `${pp} needs to be imported before as it contains a side-effect required by your code.`
+       const {
+         camera: WQ,
+         translucent: XQ
+       } = QQ, wQ = [WQ.position.x, WQ.position.y, WQ.position.z], qQ = QQ.translucentSortedFrom;
+       if (null !== qQ && Math.hypot(wQ[0] - qQ[0], wQ[1] - qQ[1], wQ[2] - qQ[2]) < RQ) return;
+       QQ.translucentSortedFrom = wQ;
+       const TQ = new Float64Array(XQ.count),
+         zQ = new Uint32Array(XQ.count);
+       for (let PQ = 0; PQ < XQ.count; PQ++) {
+         const QQ = XQ.nB[3 * PQ] - wQ[0],
+           WQ = XQ.nB[3 * PQ + 1] - wQ[1],
+           qQ = XQ.nB[3 * PQ + 2] - wQ[2];
+         TQ[PQ] = QQ * QQ + WQ * WQ + qQ * qQ, zQ[PQ] = PQ
+       }
+       zQ.sort(((QQ, WQ) => TQ[WQ] - TQ[QQ]));
+       const sQ = new Float32Array(3 * XQ.count),
+ ... (4 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L747-L754` → after: `L620-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L620-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L620-L624) · [Before (L747-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L747-L754)

```diff
-       let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const Op = function() {
-         if ((cp || Sp) && 0 === xp) {
-           const cp = `${pp}.${ip}`;
-           Ip[cp] || (Ip[cp] = !0, console.warn(`[Babylon.js] ${cp}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
-         }
-       };
-       return Op.__isSideEffectStub = !0, Op
+       const XQ = (XQ, wQ, qQ) => new gQ.vj(0 === XQ ? QQ[0] : WQ[0], 0 === wQ ? QQ[1] : WQ[1], 0 === qQ ? QQ[2] : WQ[2]),
+         wQ = [];
+       for (const qQ of [0, 1])
+         for (const QQ of [0, 1]) wQ.push([XQ(0, qQ, QQ), XQ(1, qQ, QQ)], [XQ(qQ, 0, QQ), XQ(qQ, 1, QQ)], [XQ(qQ, QQ, 0), XQ(qQ, QQ, 1)]);
+       return wQ
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L758-L787` → after: `L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L628) · [Before (L758-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L758-L787)

```diff
-       return !!pp && !pp.__isSideEffectStub
-     }
- 
-     function Dp(pp, ip) {
-       return {
-         get() {},
-         set(pp) {
-           Object.defineProperty(this, ip, {
-             value: pp,
-             writable: !0,
-             configurable: !0,
-             enumerable: !0
-           })
-         },
-         configurable: !0,
-         enumerable: !0
- ... (14 more removed lines; see GitHub link above)
+       return [Math.sin(QQ.heading) * Math.cos(QQ.pitch), -Math.sin(QQ.pitch), Math.cos(QQ.heading) * Math.cos(QQ.pitch)]
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L791-L823` → after: `L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L632) · [Before (L791-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L791-L823)

```diff
-       let ip = "",
-         cp = pp.firstChild;
-       for (; cp;) 3 === cp.nodeType && (ip += cp.textContent), cp = cp.nextSibling;
-       return ip
-     }
-     cp.d(ip, {
-       d: () => Sp,
-       f: () => Ip,
-       h: () => op,
-       j: () => Op
-     })
-   },
-   40266: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Op,
-       h: () => op,
- ... (17 more removed lines; see GitHub link above)
+       return [Math.cos(QQ), 0, -Math.sin(QQ)]
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L825-L860` → after: `L634-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L634-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L634-L657) · [Before (L825-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L825-L860)

```diff
-   },
-   40257: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Xp,
-       c: () => Hp,
-       g: () => qp,
-       k: () => Cp,
-       l: () => mp,
-       p: () => jp,
-       r: () => kp,
-       u: () => Np,
-       v: () => Rp,
-       y: () => dp
-     });
-     var Op = cp(40261),
-       op = cp(40071),
- ... (20 more removed lines; see GitHub link above)
+ 
+     function XW(QQ, WQ, XQ) {
+       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
+         heading: kQ,
+         pitch: fQ
+       };
+       const qQ = [QQ.max[0] - QQ.min[0], QQ.max[1] - QQ.min[1], QQ.max[2] - QQ.min[2]],
+         TQ = QW(wQ),
+         zQ = WW(wQ.heading),
+         sQ = PW(TQ, zQ),
+         FQ = Math.tan(XQ / 2),
+         PQ = FQ * WQ;
+       let gQ = 1;
+       for (const JQ of [-qQ[0] / 2, qQ[0] / 2])
+         for (const QQ of [-qQ[1] / 2, qQ[1] / 2])
+           for (const WQ of [-qQ[2] / 2, qQ[2] / 2]) {
+ ... (8 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L863-L865` → after: `L660-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L660-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L660-L669) · [Before (L863-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L863-L865)

```diff
-     class tp extends xp.i {
-       constructor(pp, ip) {
-         super(pp, xp.h.ReadFileError), this.file = ip, this.name = "ReadFileError", xp.d._setPrototypeOf(this, tp.prototype)
+ 
+     function wW(QQ, WQ, XQ) {
+       const wQ = TW(QQ),
+         qQ = TW(XQ),
+         TQ = zW(QQ.position, sW(WQ, -1)),
+         zQ = [0, 1, 2].reduce(((QQ, WQ) => zW(QQ, sW(qQ[WQ], FW(TQ, wQ[WQ])))), [0, 0, 0]);
+       return {
+         position: zW(WQ, zQ),
+         heading: XQ.heading,
+         pitch: XQ.pitch
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1186` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L674) · [Before (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L1186)

```diff
-       return (0, Lp.c)(pp.split(",")[1])
+       return sW(zW(QQ.min, QQ.max), .5)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1237-L1238` → after: `L677-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L677-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L677-L680) · [Before (L1237-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L1237-L1238)

```diff
-     function Np() {
-       Bp || (Bp = !0, Jp(Xp, lp, Hp, Cp, Mp, mp, jp, kp, Rp, dp), Dp.c.loadFile = mp, Dp.c.loadImage = jp, Ap.k.loadFile = mp)
+     function TW(QQ) {
+       const WQ = QW(QQ),
+         XQ = WW(QQ.heading);
+       return [WQ, XQ, PW(WQ, XQ)]
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1249-L1283` → after: `L683-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L683-L684) · [Before (L1249-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L1249-L1283)

```diff
-     function op() {
-       if (Op) return Op;
-       const pp = new ArrayBuffer(4),
-         ip = new Float32Array(pp),
-         cp = new Uint32Array(pp),
-         op = new Uint32Array(512),
-         Ip = new Uint32Array(512);
-       for (let Op = 0; Op < 256; ++Op) {
-         const pp = Op - 127;
-         pp < -24 ? (op[Op] = 0, op[256 | Op] = 32768, Ip[Op] = 24, Ip[256 | Op] = 24) : pp < -14 ? (op[Op] = 1024 >> -pp - 14, op[256 | Op] = 1024 >> -pp - 14 | 32768, Ip[Op] = -pp - 1, Ip[256 | Op] = -pp - 1) : pp <= 15 ? (op[Op] = pp + 15 << 10, op[256 | Op] = pp + 15 << 10 | 3 … [truncated]
-       }
-       const Sp = new Uint32Array(2048),
-         xp = new Uint32Array(64),
-         Lp = new Uint32Array(64);
-       for (let Op = 1; Op < 1024; ++Op) {
-         let pp = Op << 13,
- ... (19 more removed lines; see GitHub link above)
+     function zW(QQ, WQ) {
+       return [QQ[0] + WQ[0], QQ[1] + WQ[1], QQ[2] + WQ[2]]
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1287-L1292` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L687-L688) · [Before (L1287-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L1287-L1292)

```diff
-     function Sp(pp) {
-       const ip = op();
-       ip.floatView[0] = pp;
-       const cp = ip.uint32View[0],
-         Op = cp >> 23 & 511;
-       return ip.baseTable[Op] + ((8388607 & cp) >> ip.shiftTable[Op])
+     function sW(QQ, WQ) {
+       return [QQ[0] * WQ, QQ[1] * WQ, QQ[2] * WQ]
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1295-L1338` → after: `L691-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L691-L692) · [Before (L1295-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L1295-L1338)

```diff
-     function xp(pp) {
-       const ip = op();
-       return ip.uint32View[0] = ip.mantissaTable[ip.offsetTable[pp >> 10] + (1023 & pp)] + ip.exponentTable[pp >> 10], ip.floatView[0]
-     }
-   },
-   40269: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Ip,
-       e: () => op,
-       i: () => Op
-     });
-     const Op = pp => {
-         const ip = ArrayBuffer.isView(pp) ? new Uint8Array(pp.buffer, pp.byteOffset, pp.byteLength) : new Uint8Array(pp);
-         return "function" === typeof ip.toBase64 ? ip.toBase64() : function(pp) {
-           const ip = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
-           let cp, Op, op, Ip, Sp, xp, Lp, Yp = "",
- ... (28 more removed lines; see GitHub link above)
+     function FW(QQ, WQ) {
+       return QQ[0] * WQ[0] + QQ[1] * WQ[1] + QQ[2] * WQ[2]
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1341-L1506` → after: `L695-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L695-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/258.js#L695-L696) · [Before (L1341-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/258.js#L1341-L1506)

```diff
-     function Ip(pp, ip, cp) {
-       try {
-         if (pp()) return ip(), !0
-       } catch (Op) {
-         return cp?.(Op), !0
-       }
-       return !1
-     }
-     const Sp = function(pp, ip, cp) {
-       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
-         op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
-         Sp = arguments.length > 6 ? arguments[6] : void 0;
-       if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && Ip(pp, ip, cp)) return null;
-       const xp = setInterval((() => {
-         Ip(pp, ip, cp) ? clearInterval(xp) : (op -= Op, op < 0 && (clearInterval(xp), cp?.(new Error("Operation timed out after maximum retries. " + (Sp || "")), !0)))
-       }), Op);
- ... (150 more removed lines; see GitHub link above)
+     function PW(QQ, WQ) {
+       return [QQ[1] * WQ[2] - QQ[2] * WQ[1], QQ[2] * WQ[0] - QQ[0] * WQ[2], QQ[0] * WQ[1] - QQ[1] * WQ[0]]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/259.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/259.js` (109 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L4` → after: `L4-L3716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4-L3716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4-L3716) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L4)

```diff
-   40306: (pp, ip, cp) => {
+   40487: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => yQ,
+       h: () => pQ
+     });
+     var wQ = XQ(40260),
+       qQ = XQ(40268),
+       TQ = XQ(40371),
+       zQ = XQ(37399),
+       sQ = XQ(37370),
+       FQ = XQ(40491),
+       PQ = XQ(38956),
+       gQ = XQ(37418),
+       JQ = XQ(40153),
+       rQ = XQ(38377),
+       IQ = XQ(38041),
+ ... (3697 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L8-L9` → after: `L3720-L3733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR3720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L3720-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L3720-L3733) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L8-L9)

```diff
-     var Op = cp(38905),
-       op = cp(37368);
+     var wQ = XQ(37370),
+       qQ = XQ(37546),
+       TQ = XQ(40661),
+       zQ = XQ(40404),
+       sQ = XQ(40555),
+       FQ = XQ(40676),
+       PQ = XQ(40561),
+       gQ = XQ(40357),
+       JQ = XQ(38956),
+       rQ = XQ(40290),
+       IQ = XQ(40573),
+       jQ = XQ(37392),
+       BQ = XQ(40679),
+       yQ = XQ(40331);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L11-L22` → after: `L3735-L4265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR3735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L3735-L4265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L3735-L4265) · [Before (L11-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L11-L22)

```diff
-       static Instantiate(pp) {
-         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[pp]) return this.RegisteredExternalClasses[pp];
-         const ip = (0, op.d)(pp);
-         if (ip) return ip;
-         Op.e.Warn(pp + " not found, you may have missed an import.");
-         const cp = pp.split(".");
-         let Ip = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
-         for (let Op = 0, op = cp.length; Op < op; Op++) Ip = Ip[cp[Op]];
-         return "function" !== typeof Ip ? null : Ip
-       }
-     }
-     Ip.RegisteredExternalClasses = {}
+       get boundingBias() {
+         return this._boundingBias
+       }
+       set boundingBias(QQ) {
+         this._boundingBias ? this._boundingBias.WH(QQ) : this._boundingBias = QQ.clone(), this._updateBoundingInfo(!0, null)
+       }
+       static CreateGeometryForMesh(QQ) {
+         const WQ = new VQ(VQ.RandomId(), QQ.sE());
+         return WQ.applyToMesh(QQ), WQ
+       }
+       get meshes() {
+         return this._meshes
+       }
+       constructor(QQ, WQ, XQ) {
+         let qQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+ ... (515 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L24` → after: `L4267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4267) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L24)

```diff
-   40122: (pp, ip, cp) => {
+   40712: (QQ, WQ, XQ) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L26` → after: `L4269-L4566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4269-L4566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4269-L4566) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L26)

```diff
-       e: () => op
+       b: () => JQ,
+       f: () => jQ
+     });
+     var wQ = XQ(37370),
+       qQ = XQ(38956),
+       TQ = XQ(40683),
+       zQ = XQ(40651),
+       sQ = XQ(38947),
+       FQ = XQ(40690),
+       PQ = XQ(40404),
+       gQ = XQ(37418);
+     class JQ extends TQ.c {
+       constructor(QQ, WQ) {
+         super(QQ, WQ.sE()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, WQ.n_(this), this._sourceMesh = WQ, this._unIndexed = WQ._unIndexed, this.position.WH(WQ.position), this.rotation.WH(WQ.rotation), this.oB.WH(WQ.oB), WQ.rotationQuaternion && (this. … [truncated]
+         for (const XQ of WQ.getAnimationRanges()) null != XQ && this.createAnimationRange(XQ.name, XQ.from, XQ.to);
+         if (this.infiniteDistance = WQ.infiniteDistance, this.setPivotMatrix(WQ.getPivotMatrix()), WQ.skeleton || WQ.morphTargetManager || !WQ.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
+ ... (282 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L28` → after: `L4568-L4607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4568-L4607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4568-L4607) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L28)

```diff
-     var Op = cp(40071);
+     var wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ = XQ(37399),
+       DQ = XQ(40357),
+       pQ = XQ(40307),
+       GQ = XQ(38947),
+       UQ = XQ(40290),
+       bQ = XQ(40656),
+       vQ = XQ(40487),
+       dQ = XQ(37370),
+       HQ = XQ(37546),
+       aQ = XQ(40491),
+       lQ = XQ(40404),
+       hQ = XQ(40661),
+       iQ = XQ(40670),
+       cQ = XQ(40683),
+       AQ = XQ(40555),
+       RQ = XQ(40551),
+ ... (24 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L30-L31` → after: `L4609-L4730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4609-L4730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4609-L4730) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L30-L31)

```diff
-       static get Now() {
-         return (0, Op.j)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
+       constructor(QQ) {
+         this.parent = QQ, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
+       }
+     }
+     class NQ {
+       constructor() {
+         this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
+       }
+     }
+     class ZQ {
+       constructor() {
+         this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
+       }
+     }
+     const OQ = {
+       source: null,
+ ... (106 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L33-L106` → after: `L4732-L4739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4732-L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4732-L4739) · [Before (L33-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L33-L106)

```diff
-     }
-   },
-   40143: (pp, ip, cp) => {
-     function Op(pp) {
-       let ip = 1;
-       do {
-         ip *= 2
-       } while (ip < pp);
-       return ip === pp
-     }
- 
-     function op(pp, ip, cp) {
-       return pp * (1 - cp) + ip * cp
-     }
- 
-     function Ip(pp) {
- ... (58 more removed lines; see GitHub link above)
+       set manualUpdateOfPreviousWorldMatrixInstancedBuffer(QQ) {
+         this._instanceDataStorage.previousManualUpdate = QQ
+       }
+       get forceWorldMatrixInstancedBufferUpdate() {
+         return this._instanceDataStorage.forceMatrixUpdates
+       }
+       set forceWorldMatrixInstancedBufferUpdate(QQ) {
+         this._instanceDataStorage.forceMatrixUpdates = QQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L108-L109` → after: `L4741-L4804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4741-L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4741-L4804) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L108-L109)

```diff
-       static set BaseUrl(pp) {
-         Pp.c.BaseUrl = pp
+       _copySource(QQ, WQ) {
+         let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
+           wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         const qQ = this.sE();
+         if (QQ._geometry && QQ._geometry.applyToMesh(this), GQ.d.DeepCopy(QQ, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "UqQ", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLe … [truncated]
+           const WQ = QQ._ranges;
+           for (const QQ in WQ) Object.prototype.hasOwnProperty.call(WQ, QQ) && WQ[QQ] && this.createAnimationRange(QQ, WQ[QQ].from, WQ[QQ].to)
+         }
+         if (QQ.metadata && QQ.metadata.clone ? this.metadata = QQ.metadata.clone() : this.metadata = QQ.metadata, this._internalMetadata = QQ._internalMetadata, this.meshBlendingTag = QQ.meshBlendingTag, UQ.d && UQ.d.HasTags(QQ) && UQ.d.AddTagsTo(this, UQ.d.GetTags(QQ, !0)), this … [truncated]
+           const qQ = QQ.getDescendants(!0);
+           for (let QQ = 0; QQ < qQ.length; QQ++) {
+             const TQ = qQ[QQ];
+             TQ._isMesh ? (OQ.parent = this, OQ.doNotCloneChildren = WQ, OQ.clonePhysicsImpostor = XQ, OQ.cloneThinInstances = wQ, TQ.clone(this.name + "." + TQ.name, OQ)) : TQ.clone && TQ.clone(this.name + "." + TQ.name, this)
+           }
+         }
+         if (QQ.morphTargetManager && (this.morphTargetManager = QQ.morphTargetManager), (0, SQ.d)(qQ.getPhysicsEngine)) {
+ ... (48 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L111-L112` → after: `L4806-L4807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4806-L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4806-L4807) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L111-L112)

```diff
-       static get CleanUrl() {
-         return Pp.c.CleanUrl
+       getClassName() {
+         return "Mesh"
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L114-L115` → after: `L4809-L4810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4809-L4810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4809-L4810) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L114-L115)

```diff
-       static set CleanUrl(pp) {
-         Pp.c.CleanUrl = pp
+       get _isMesh() {
+         return !0
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L117-L118` → after: `L4812-L4822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4812-L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4812-L4822) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L117-L118)

```diff
-       static IsAbsoluteUrl(pp) {
-         return 0 === pp.indexOf("//") || -1 !== pp.indexOf("://") && (-1 !== pp.indexOf(".") && (-1 !== pp.indexOf("/") && (!(pp.indexOf(":") > pp.indexOf("/")) && (pp.indexOf("://") < pp.indexOf(".") || (0 === pp.indexOf("data:") || 0 === pp.indexOf("blob:"))))))
+       toString(QQ) {
+         let WQ = super.toString(QQ);
+         if (WQ += ", n vertices: " + this.getTotalVertices(), WQ += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
+           for (let XQ = 0; XQ < this.animations.length; XQ++) WQ += ", animation[0]: " + this.animations[XQ].toString(QQ);
+         if (QQ)
+           if (this._geometry) {
+             const QQ = this.lwQ(),
+               XQ = this.getVerticesData(lQ.l.PositionKind);
+             XQ && QQ && (WQ += ", flat shading: " + (XQ.length / 3 === QQ.length ? "YES" : "NO"))
+           } else WQ += ", flat shading: UNKNOWN";
+         return WQ
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L120-L121` → after: `L4824-L4826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4824-L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4824-L4826) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L120-L121)

```diff
-       static set ScriptBaseUrl(pp) {
-         Pp.c.ScriptBaseUrl = pp
+       _unBindEffect() {
+         super._unBindEffect();
+         for (const QQ of this.instances) QQ._unBindEffect()
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L123-L124` → after: `L4828-L4829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4828-L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4828-L4829) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L123-L124)

```diff
-       static get ScriptBaseUrl() {
-         return Pp.c.ScriptBaseUrl
+       get hasLODLevels() {
+         return this._internalMeshDataInfo._LODLevels.length > 0
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L126-L127` → after: `L4831-L4832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4831-L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4831-L4832) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L126-L127)

```diff
-       static set CDNBaseUrl(pp) {
-         Op.ScriptBaseUrl = pp, Op.AssetBaseUrl = pp
+       getLODLevels() {
+         return this._internalMeshDataInfo._LODLevels
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L129-L130` → after: `L4834-L4836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4834-L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4834-L4836) · [Before (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L129-L130)

```diff
-       static set ScriptPreprocessUrl(pp) {
-         Pp.c.ScriptPreprocessUrl = pp
+       _sortLODLevels() {
+         const QQ = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
+         this._internalMeshDataInfo._LODLevels.sort(((WQ, XQ) => WQ.distanceOrScreenCoverage < XQ.distanceOrScreenCoverage ? QQ : WQ.distanceOrScreenCoverage > XQ.distanceOrScreenCoverage ? -QQ : 0))
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L132-L133` → after: `L4838-L4841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4838-L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4838-L4841) · [Before (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L132-L133)

```diff
-       static get ScriptPreprocessUrl() {
-         return Pp.c.ScriptPreprocessUrl
+       addLODLevel(QQ, WQ) {
+         if (WQ && WQ._masterMesh) return kQ.b.Warn("You cannot use a mesh as LOD level twice"), this;
+         const XQ = new oQ(QQ, WQ);
+         return this._internalMeshDataInfo._LODLevels.push(XQ), WQ && (WQ._masterMesh = this), this._sortLODLevels(), this
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L135-L136` → after: `L4843-L4849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4843-L4849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4843-L4849) · [Before (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L135-L136)

```diff
-       static get DefaultRetryStrategy() {
-         return Pp.c.DefaultRetryStrategy
+       getLODLevelAtDistance(QQ) {
+         const WQ = this._internalMeshDataInfo;
+         for (let XQ = 0; XQ < WQ._LODLevels.length; XQ++) {
+           const wQ = WQ._LODLevels[XQ];
+           if (wQ.distanceOrScreenCoverage === QQ) return wQ.mesh
+         }
+         return null
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L138-L139` → after: `L4851-L4854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4851-L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4851-L4854) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L138-L139)

```diff
-       static set DefaultRetryStrategy(pp) {
-         Pp.c.DefaultRetryStrategy = pp
+       removeLODLevel(QQ) {
+         const WQ = this._internalMeshDataInfo;
+         for (let XQ = 0; XQ < WQ._LODLevels.length; XQ++) WQ._LODLevels[XQ].mesh === QQ && (WQ._LODLevels.splice(XQ, 1), QQ && (QQ._masterMesh = null));
+         return this._sortLODLevels(), this
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L141-L142` → after: `L4856-L4880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4856-L4880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4856-L4880) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L141-L142)

```diff
-       static get CorsBehavior() {
-         return Pp.c.CorsBehavior
+       getLOD(QQ, WQ) {
+         const XQ = this._internalMeshDataInfo;
+         if (!XQ._LODLevels || 0 === XQ._LODLevels.length) return this;
+         const wQ = WQ || this.uC().mwQ,
+           qQ = QQ.mode === vQ.d.ORTHOGRAPHIC_CAMERA ? QQ.minZ : wQ.centerWorld.subtract(QQ.globalPosition).length();
+         let TQ = qQ,
+           zQ = 1;
+         if (XQ._useLODScreenCoverage) {
+           const WQ = QQ.screenArea;
+           let XQ = wQ.radiusWorld * QQ.minZ / qQ;
+           XQ = XQ * XQ * Math.PI, TQ = XQ / WQ, zQ = -1
+         }
+         if (zQ * XQ._LODLevels[XQ._LODLevels.length - 1].distanceOrScreenCoverage > zQ * TQ) return this.onLODLevelSelection && this.onLODLevelSelection(TQ, this, this), this;
+         for (let sQ = 0; sQ < XQ._LODLevels.length; sQ++) {
+           const QQ = XQ._LODLevels[sQ];
+           if (zQ * QQ.distanceOrScreenCoverage < zQ * TQ) {
+ ... (9 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L144-L145` → after: `L4882-L4883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4882-L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4882-L4883) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L144-L145)

```diff
-       static set CorsBehavior(pp) {
-         Pp.c.CorsBehavior = pp
+       get geometry() {
+         return this._geometry
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L147-L148` → after: `L4885-L4886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4885-L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4885-L4886) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L147-L148)

```diff
-       static get UseFallbackTexture() {
-         return Ap.e.UseFallbackTexture
+       getTotalVertices() {
+         return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L150-L151` → after: `L4888-L4891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4888-L4891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4888-L4891) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L150-L151)

```diff
-       static set UseFallbackTexture(pp) {
-         Ap.e.UseFallbackTexture = pp
+       getVerticesData(QQ, WQ, XQ, wQ) {
+         if (!this._geometry) return null;
+         let qQ = wQ ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[QQ]?.getFloatData(this.instances.length + 1, XQ || WQ && 1 !== this._geometry.meshes.length);
+         return qQ || (qQ = this._geometry.getVerticesData(QQ, WQ, XQ)), qQ
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L153-L154` → after: `L4893-L4894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4893-L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4893-L4894) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L153-L154)

```diff
-       static get RegisteredExternalClasses() {
-         return yp.d.RegisteredExternalClasses
+       copyVerticesData(QQ, WQ) {
+         this._geometry && this._geometry.copyVerticesData(QQ, WQ)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L156-L157` → after: `L4896-L4897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4896-L4897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4896-L4897) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L156-L157)

```diff
-       static set RegisteredExternalClasses(pp) {
-         yp.d.RegisteredExternalClasses = pp
+       getVertexBuffer(QQ, WQ) {
+         return this._geometry ? (WQ ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[QQ]) ?? this._geometry.getVertexBuffer(QQ) : null
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L159-L160` → after: `L4899-L4900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4899-L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4899-L4900) · [Before (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L159-L160)

```diff
-       static get fallbackTexture() {
-         return Ap.e.FallbackTexture
+       isVerticesDataPresent(QQ, WQ) {
+         return this._geometry ? !WQ && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[QQ] || this._geometry.isVerticesDataPresent(QQ) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(QQ)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L162-L163` → after: `L4902-L4908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4902-L4908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4902-L4908) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L162-L163)

```diff
-       static set fallbackTexture(pp) {
-         Ap.e.FallbackTexture = pp
+       isVertexBufferUpdatable(QQ, WQ) {
+         if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(QQ);
+         if (!WQ) {
+           const WQ = this._userInstancedBuffersStorage?.vertexBuffers[QQ];
+           if (WQ) return WQ.isUpdatable()
+         }
+         return this._geometry.isVertexBufferUpdatable(QQ)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L165-L167` → after: `L4910-L4920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4910-L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4910-L4920) · [Before (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L165-L167)

```diff
-       static FetchToRef(pp, ip, cp, Op, op, Ip) {
-         const Sp = 4 * ((Math.abs(pp) * cp % cp | 0) + (Math.abs(ip) * Op % Op | 0) * cp);
-         Ip.r = op[Sp] / 255, Ip.g = op[Sp + 1] / 255, Ip.b = op[Sp + 2] / 255, Ip.a = op[Sp + 3] / 255
+       getVerticesDataKinds(QQ) {
+         if (!this._geometry) {
+           const QQ = [];
+           if (this._delayInfo)
+             for (const WQ of this._delayInfo) QQ.push(WQ);
+           return QQ
+         }
+         const WQ = this._geometry.getVerticesDataKinds();
+         if (!QQ && this._userInstancedBuffersStorage)
+           for (const XQ in this._userInstancedBuffersStorage.vertexBuffers) - 1 === WQ.indexOf(XQ) && WQ.push(XQ);
+         return WQ
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L169-L170` → after: `L4922-L4923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4922-L4923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4922-L4923) · [Before (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L169-L170)

```diff
-       static Mix(pp, ip, cp) {
-         return 0
+       getTotalIndices() {
+         return this._geometry ? this._geometry.getTotalIndices() : 0
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L172-L173` → after: `L4925-L4926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4925-L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4925-L4926) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L172-L173)

```diff
-       static Instantiate(pp) {
-         return yp.d.Instantiate(pp)
+       lwQ(QQ, WQ) {
+         return this._geometry ? this._geometry.lwQ(QQ, WQ) : []
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L175-L176` → after: `L4928-L4929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4928-L4929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4928-L4929) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L175-L176)

```diff
-       static SetImmediate(pp) {
-         Wp.b.SetImmediate(pp)
+       get isBlocked() {
+         return null !== this._masterMesh && void 0 !== this._masterMesh
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L178` → after: `L4931-L4971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4931-L4971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4931-L4971) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L178)

```diff
-       static IsExponentOfTwo(pp) {
+       isReady() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (2 === this.delayLoadState) return !1;
+         if (!super.isReady(QQ)) return !1;
+         if (!this.ZD || 0 === this.ZD.length) return !0;
+         if (!QQ) return !0;
+         const XQ = this.Uj(),
+           wQ = this.sE(),
+           qQ = WQ || XQ.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
+         this.computeWorldMatrix();
+         const TQ = this.material || wQ.defaultMaterial;
+         if (TQ)
+           if (TQ._storeEffectOnSubMeshes)
+             for (const sQ of this.ZD) {
+               const QQ = sQ.lj();
+ ... (25 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L181-L182` → after: `L4974-L4975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4974-L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4974-L4975) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L181-L182)

```diff
-       static FloatRound(pp) {
-         return Math.fround(pp)
+       get areNormalsFrozen() {
+         return this._internalMeshDataInfo._areNormalsFrozen
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L184-L186` → after: `L4977-L4978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4977-L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4977-L4978) · [Before (L184-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L184-L186)

```diff
-       static GetFilename(pp) {
-         const ip = pp.lastIndexOf("/");
-         return ip < 0 ? pp : pp.substring(ip + 1)
+       hj() {
+         return this._internalMeshDataInfo._areNormalsFrozen = !0, this
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L188-L191` → after: `L4980-L4995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4980-L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4980-L4995) · [Before (L188-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L188-L191)

```diff
-       static GetFolderPath(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const cp = pp.lastIndexOf("/");
-         return cp < 0 ? ip ? pp : "" : pp.substring(0, cp + 1)
+       unfreezeNormals() {
+         return this._internalMeshDataInfo._areNormalsFrozen = !1, this
+       }
+       set overridenInstanceCount(QQ) {
+         this._instanceDataStorage.overridenInstanceCount = QQ
+       }
+       _getInstanceDataStorage() {
+         if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
+         const QQ = this._instanceDataStorage.engine.currentRenderPassId;
+         let WQ = this._instanceDataStorage.renderPasses[QQ];
+         return WQ || (WQ = new nQ, this._instanceDataStorage.renderPasses[QQ] = WQ), WQ
+       }
+       _preActivate() {
+         const QQ = this._internalMeshDataInfo,
+           WQ = this.sE().getRenderId();
+         return QQ._preActivateId === WQ || (QQ._preActivateId = WQ, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L193-L194` → after: `L4997-L4999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4997-L4999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L4997-L4999) · [Before (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L193-L194)

```diff
-       static ToDegrees(pp) {
-         return 180 * pp / Math.PI
+       _preActivateForIntermediateRendering(QQ) {
+         const WQ = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
+         return WQ.visibleInstances && (WQ.visibleInstances.intermediateDefaultRenderId = QQ), this
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L196-L197` → after: `L5001-L5007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5001-L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5001-L5007) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L196-L197)

```diff
-       static ToRadians(pp) {
-         return pp * Math.PI / 180
+       _registerInstanceForRenderId(QQ, WQ) {
+         const XQ = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
+         return XQ.visibleInstances || (XQ.visibleInstances = {
+           defaultRenderId: WQ,
+           selfDefaultRenderId: this._renderId,
+           intermediateDefaultRenderId: -1
+         }), XQ.visibleInstances[WQ] || (void 0 === XQ.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete XQ.visibleInstances[XQ.previousRenderId], XQ.previousRenderId = WQ, XQ.visibleInstances[WQ] = new Arra … [truncated]
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L199-L203` → after: `L5009-L5010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5009-L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5009-L5010) · [Before (L199-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L199-L203)

```diff
-       static SmoothAngleChange(pp, ip) {
-         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
-         const Op = this.ToRadians(pp),
-           op = this.ToRadians(ip);
-         return this.ToDegrees(Math.atan2((1 - cp) * Math.sin(op) + cp * Math.sin(Op), (1 - cp) * Math.cos(op) + cp * Math.cos(Op)))
+       _afterComputeWorldMatrix() {
+         super._afterComputeWorldMatrix(), this.hasThinInstances && (this.aj || this.thinInstanceRefreshBoundingInfo(!1))
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L205-L206` → after: `L5012-L5013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5012-L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5012-L5013) · [Before (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L205-L206)

```diff
-       static MakeArray(pp, ip) {
-         return !0 === ip || void 0 !== pp && null != pp ? Array.isArray(pp) ? pp : [pp] : null
+       _postActivate() {
+         this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L208-L209` → after: `L5015-L5048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5015-L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5015-L5048) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L208-L209)

```diff
-       static GetPointerPrefix(pp) {
-         return (0, Ip.j)() && !window.PointerEvent ? "mouse" : "pointer"
+       refreshBoundingInfo() {
+         let QQ, WQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           XQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (this.hasBoundingInfo && this.uC().isLocked) return this;
+         QQ = "object" === typeof WQ ? WQ : {
+           applySkeleton: WQ,
+           applyMorph: XQ
+         };
+         const wQ = this.geometry ? this.geometry.boundingBias : null;
+         return this._refreshBoundingInfo(this._getData(QQ, null, lQ.l.PositionKind), wQ), this
+       }
+       _createGlobalSubMesh(QQ) {
+         const WQ = this.getTotalVertices();
+         if (!WQ || !this.lwQ()) return null;
+         if (this.ZD && this.ZD.length > 0) {
+           const XQ = this.lwQ();
+ ... (18 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L211-L212` → after: `L5050-L5058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5050-L5058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5050-L5058) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L211-L212)

```diff
-       static SetCorsBehavior(pp, ip) {
-         (0, Pp.y)(pp, ip)
+       subdivide(QQ) {
+         if (QQ < 1) return;
+         const WQ = this.getTotalIndices();
+         let XQ = WQ / QQ | 0,
+           wQ = 0;
+         for (; XQ % 3 !== 0;) XQ++;
+         this.releaseSubMeshes();
+         for (let qQ = 0; qQ < QQ && !(wQ >= WQ); qQ++) AQ.b.CreateFromIndices(0, wQ, wQ + XQ >= WQ ? WQ - wQ : XQ, this, void 0, !1), wQ += XQ;
+         this.refreshBoundingInfo(), this.synchronizeInstances()
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L214-L215` → after: `L5060-L5070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5060-L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5060-L5070) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L214-L215)

```diff
-       static SetReferrerPolicyBehavior(pp, ip) {
-         ip.referrerPolicy = pp
+       setVerticesData(QQ, WQ) {
+         let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           wQ = arguments.length > 3 ? arguments[3] : void 0;
+         if (this._geometry) this._geometry.setVerticesData(QQ, WQ, XQ, wQ);
+         else {
+           const wQ = new hQ.e;
+           wQ.set(WQ, QQ);
+           const qQ = this.sE();
+           new iQ.d(iQ.d.RandomId(), qQ, wQ, XQ, this)
+         }
+         return this
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L217-L218` → after: `L5072-L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5072-L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5072-L5073) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L217-L218)

```diff
-       static get PreprocessUrl() {
-         return Pp.c.PreprocessUrl
+       removeVerticesData(QQ) {
+         this._geometry && this._geometry.removeVerticesData(QQ)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L220-L221` → after: `L5075-L5078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5075-L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5075-L5078) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L220-L221)

```diff
-       static set PreprocessUrl(pp) {
-         Pp.c.PreprocessUrl = pp
+       markVerticesDataAsUpdatable(QQ) {
+         let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         const XQ = this.getVertexBuffer(QQ);
+         XQ && XQ.isUpdatable() !== WQ && this.setVerticesData(QQ, this.getVerticesData(QQ), WQ)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L223-L224` → after: `L5080-L5083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5080-L5083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5080-L5083) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L223-L224)

```diff
-       static LoadImage(pp, ip, cp, Op, op, Ip) {
-         return (0, Pp.p)(pp, ip, cp, Op, op, Ip)
+       setVerticesBuffer(QQ) {
+         let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         return this._geometry || (this._geometry = iQ.d.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(QQ, XQ, WQ), this
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L226-L227` → after: `L5085-L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5085-L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5085-L5086) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L226-L227)

```diff
-       static LoadFile(pp, ip, cp, Op, op, Ip) {
-         return (0, Pp.l)(pp, ip, cp, Op, op, Ip)
+       updateVerticesData(QQ, WQ, XQ, wQ) {
+         return this._geometry ? (wQ ? (this.makeGeometryUnique(), this.updateVerticesData(QQ, WQ, XQ, !1)) : this._geometry.updateVerticesData(QQ, WQ, XQ), this) : this
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L229` → after: `L5088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5088) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L229)

```diff
-       static async LoadFileAsync(pp) {
+       updateMeshPositions(QQ) {
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L231-L237` → after: `L5090-L5105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5090-L5105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5090-L5105) · [Before (L231-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L231-L237)

```diff
-         return await new Promise(((cp, Op) => {
-           (0, Pp.l)(pp, (pp => {
-             cp(pp)
-           }), void 0, void 0, ip, ((pp, ip) => {
-             Op(ip)
-           }))
-         }))
+         const XQ = this.getVerticesData(lQ.l.PositionKind);
+         if (!XQ) return this;
+         if (QQ(XQ), this.updateVerticesData(lQ.l.PositionKind, XQ, !1, !1), WQ) {
+           const QQ = this.lwQ(),
+             WQ = this.getVerticesData(lQ.l.NormalKind);
+           if (!WQ) return this;
+           hQ.e.ComputeNormals(XQ, QQ, WQ), this.updateVerticesData(lQ.l.NormalKind, WQ, !1, !1)
+         }
+         return this
+       }
+       makeGeometryUnique() {
+         if (!this._geometry) return this;
+         if (1 === this._geometry.meshes.length) return this;
+         const QQ = this._geometry,
+           WQ = this._geometry.copy(iQ.d.RandomId());
+         return QQ.releaseForMesh(this, !0), WQ.applyToMesh(this), this
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L239-L243` → after: `L5107-L5121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5107-L5121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5107-L5121) · [Before (L239-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L239-L243)

```diff
-       static GetAssetUrl(pp) {
-         if (!pp) return "";
-         if (Op.AssetBaseUrl && pp.startsWith(Op._DefaultAssetsUrl)) {
-           const ip = Op.AssetBaseUrl.endsWith("/") ? Op.AssetBaseUrl.slice(0, -1) : Op.AssetBaseUrl;
-           return pp.replace(Op._DefaultAssetsUrl, ip)
+       setIndexBuffer(QQ, WQ, XQ) {
+         let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           qQ = this._geometry;
+         qQ || (qQ = new iQ.d(iQ.d.RandomId(), this.sE(), void 0, void 0, this)), qQ.setIndexBuffer(QQ, WQ, XQ, wQ)
+       }
+       setIndices(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         if (this._geometry) this._geometry.setIndices(QQ, WQ, XQ, wQ);
+         else {
+           const wQ = new hQ.e;
+           wQ.indices = QQ;
+           const qQ = this.sE();
+           new iQ.d(iQ.d.RandomId(), qQ, wQ, XQ, this, WQ)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L245` → after: `L5123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5123) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L245)

```diff
-         return pp
+         return this
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L247-L279` → after: `L5125-L5538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5125-L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5125-L5538) · [Before (L247-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L247-L279)

```diff
-       static GetBabylonScriptURL(pp, ip) {
-         if (!pp) return "";
-         if (pp.startsWith(Op._DefaultCdnUrl))
-           if (Op.ScriptBaseUrl) {
-             const ip = Op.ScriptBaseUrl.endsWith("/") ? Op.ScriptBaseUrl.slice(0, -1) : Op.ScriptBaseUrl;
-             pp = pp.replace(Op._DefaultCdnUrl, ip)
-           } else if (Op._CdnVersion) {
-           const ip = `${Op._DefaultCdnUrl}/v${Op._CdnVersion}`;
-           pp.startsWith(ip) || (pp = pp.replace(Op._DefaultCdnUrl, ip))
-         }
-         return pp = Op.ScriptPreprocessUrl(pp), ip && !Op.IsAbsoluteUrl(pp) && (pp = Op.GetAbsoluteUrl(pp)), pp
-       }
-       static LoadBabylonScript(pp, ip, cp, op) {
-         pp = Op.GetBabylonScriptURL(pp), Op.LoadScript(pp, ip, cp)
-       }
-       static async LoadBabylonScriptAsync(pp) {
- ... (17 more removed lines; see GitHub link above)
+       updateIndices(QQ, WQ) {
+         let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         return this._geometry ? (this._geometry.updateIndices(QQ, WQ, XQ), this) : this
+       }
+       toLeftHanded() {
+         return this._geometry ? (this._geometry.toLeftHanded(), this) : this
+       }
+       _bind(QQ, WQ, XQ) {
+         let wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         if (!this._geometry) return this;
+         const qQ = this.sE().Uj();
+         let TQ;
+         if (this._unIndexed)
+           if (this._getRenderingFillMode(XQ) === RQ.b.WireFrameFillMode) TQ = QQ._getLinesIndexBuffer(this.lwQ(), qQ);
+           else TQ = null;
+         else switch (this._getRenderingFillMode(XQ)) {
+ ... (398 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L282-L284` → after: `L5541-L5548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5541-L5548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5541-L5548) · [Before (L282-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L282-L284)

```diff
-       static _LoadScriptWeb(pp, ip, cp, Op) {
-         let op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         if ("function" === typeof importScripts) {
+       _checkDelayState() {
+         const QQ = this.sE();
+         return this._geometry ? this._geometry.load(QQ) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(QQ)), this
+       }
+       _queueLoad(QQ) {
+         QQ.addPendingData(this);
+         const WQ = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
+         return (async () => {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L286` → after: `L5550-L5553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5550-L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5550-L5553) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L286)

```diff
-             importScripts(pp), ip && ip()
+             const XQ = await QQ._loadDelayedFileAsync(this.delayLoadingFile, WQ, !0);
+             XQ instanceof ArrayBuffer ? this._delayLoadingFunction(XQ, this) : this._delayLoadingFunction(JSON.parse(XQ), this);
+             for (const QQ of this.instances) QQ.refreshBoundingInfo(), QQ._syncSubMeshes();
+             this.delayLoadState = 1, QQ.removePendingData(this)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L288` → after: `L5555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5555) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L288)

```diff
-             cp?.(`Unable to load script '${pp}' in worker`, Lp)
+             QQ.removePendingData(this), QQ.rG || kQ.b.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${XQ}`)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L290` → after: `L5557-L5586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5557-L5586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5557-L5586) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L290)

```diff
-           return
+         })(), this
+       }
+       isInFrustum(QQ) {
+         return 2 !== this.delayLoadState && (!!super.isInFrustum(QQ) && (this._checkDelayState(), !0))
+       }
+       setMaterialById(QQ) {
+         const WQ = this.sE().materials;
+         let XQ;
+         for (XQ = WQ.length - 1; XQ > -1; XQ--)
+           if (WQ[XQ].id === QQ) return this.material = WQ[XQ], this;
+         const wQ = this.sE().multiMaterials;
+         for (XQ = wQ.length - 1; XQ > -1; XQ--)
+           if (wQ[XQ].id === QQ) return this.material = wQ[XQ], this;
+         return this
+       }
+       getAnimatables() {
+ ... (14 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L292-L299` → after: `L5588-L5592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5588-L5592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5588-L5592) · [Before (L292-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L292-L299)

```diff
-         if (!(0, Ip.j)()) return void cp?.(`Cannot load script '${pp}' outside of a window or a worker`);
-         const Sp = document.getElementsByTagName("head")[0],
-           xp = document.createElement("script");
-         op ? (xp.setAttribute("type", "module"), xp.innerText = pp) : (xp.setAttribute("type", "text/javascript"), xp.setAttribute("src", pp)), Op && (xp.id = Op), xp.onload = () => {
-           ip && ip()
-         }, xp.onerror = ip => {
-           cp && cp(`Unable to load script '${pp}'`, ip)
-         }, Sp.appendChild(xp)
+         if (this.isVerticesDataPresent(lQ.l.TangentKind)) {
+           for (XQ = this.getVerticesData(lQ.l.TangentKind), qQ = 0; qQ < XQ.length; qQ += 4) dQ.s.TransformNormalFromFloatsToRef(XQ[qQ], XQ[qQ + 1], XQ[qQ + 2], QQ, wQ).normalize().toArray(XQ, qQ);
+           this.setVerticesData(lQ.l.TangentKind, XQ, this.getVertexBuffer(lQ.l.TangentKind).isUpdatable())
+         }
+         return QQ.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.ZD = WQ, this
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L301-L308` → after: `L5594-L5596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5594-L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5594-L5596) · [Before (L301-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L301-L308)

```diff
-       static async LoadScriptAsync(pp, ip) {
-         return await new Promise(((cp, Op) => {
-           this.LoadScript(pp, (() => {
-             cp()
-           }), ((pp, ip) => {
-             Op(ip || new Error(pp))
-           }), ip)
-         }))
+       bakeCurrentTransformIntoVertices() {
+         let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(QQ), this
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L310-L320` → after: `L5598-L5599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5598-L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5598-L5599) · [Before (L310-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L310-L320)

```diff
-       static ReadFileAsDataURL(pp, ip, cp) {
-         const Op = new FileReader,
-           Ip = {
-             onCompleteObservable: new op.d,
-             abort: () => Op.abort()
-           };
-         return Op.onloadend = () => {
-           Ip.onCompleteObservable.notifyObservers(Ip)
-         }, Op.onload = pp => {
-           ip(pp.target.result)
-         }, Op.onprogress = cp, Op.readAsDataURL(pp), Ip
+       get _positions() {
+         return this._internalAbstractMeshDataInfo._positions || this._geometry && this._geometry._positions || null
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L322-L323` → after: `L5601-L5602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5601-L5602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5601-L5602) · [Before (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L322-L323)

```diff
-       static ReadFile(pp, ip, cp, Op, op) {
-         return (0, Pp.r)(pp, ip, cp, Op, op)
+       _resetPointsArrayCache() {
+         return this._geometry && this._geometry._resetPointsArrayCache(), this
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L325-L327` → after: `L5604-L5605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5604-L5605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5604-L5605) · [Before (L325-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L325-L327)

```diff
-       static FileAsURL(pp) {
-         const ip = new Blob([pp]);
-         return window.URL.createObjectURL(ip)
+       _generatePointsArray() {
+         return !!this._geometry && this._geometry._generatePointsArray()
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L329-L331` → after: `L5607-L5616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5607-L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5607-L5616) · [Before (L329-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L329-L331)

```diff
-       static Format(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
-         return pp.toFixed(ip)
+       clone() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
+           WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           XQ = arguments.length > 2 ? arguments[2] : void 0,
+           wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         if (WQ && void 0 === WQ._addToSceneRootNodes) {
+           const XQ = WQ;
+           return OQ.source = this, OQ.doNotCloneChildren = XQ.doNotCloneChildren, OQ.clonePhysicsImpostor = XQ.clonePhysicsImpostor, OQ.cloneThinInstances = XQ.cloneThinInstances, new KQ(QQ, this.sE(), OQ)
+         }
+         return new KQ(QQ, this.sE(), WQ, this, XQ, wQ)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L333-L334` → after: `L5618-L5636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5618-L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5618-L5636) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L333-L334)

```diff
-       static DeepCopy(pp, ip, cp, Op) {
-         xp.e.DeepCopy(pp, ip, cp, Op)
+       dispose(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
+         const XQ = this._internalMeshDataInfo;
+         if (XQ._onBeforeDrawObservable && XQ._onBeforeDrawObservable.clear(), XQ._onBeforeBindObservable && XQ._onBeforeBindObservable.clear(), XQ._onBeforeRenderObservable && XQ._onBeforeRenderObservable.clear(), XQ._onAfterRenderObservable && XQ._onAfterRenderObservable.clear() … [truncated]
+           if (XQ.meshMap)
+             for (const QQ in XQ.meshMap) {
+               const WQ = XQ.meshMap[QQ];
+               WQ && (WQ._internalMeshDataInfo._source = null, XQ.meshMap[QQ] = void 0)
+             }
+           XQ._source && XQ._source._internalMeshDataInfo.meshMap && (XQ._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
+         } else {
+           const QQ = this.sE().meshes;
+           for (const WQ of QQ) {
+             const QQ = WQ;
+             QQ._internalMeshDataInfo && QQ._internalMeshDataInfo._source && QQ._internalMeshDataInfo._source === this && (QQ._internalMeshDataInfo._source = null)
+ ... (3 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L336-L339` → after: `L5638-L5652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5638-L5652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5638-L5652) · [Before (L336-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L336-L339)

```diff
-       static IsEmpty(pp) {
-         for (const ip in pp)
-           if (Object.prototype.hasOwnProperty.call(pp, ip)) return !1;
-         return !0
+       _disposeInstanceSpecificData() {}
+       _disposeThinInstanceSpecificData() {}
+       _invalidateInstanceVertexArrayObject() {}
+       applyDisplacementMap(QQ, WQ, XQ, wQ, qQ, TQ) {
+         let zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+           sQ = arguments.length > 7 ? arguments[7] : void 0;
+         const FQ = this.sE();
+         return (0, pQ.r)(QQ, (QQ => {
+           const sQ = QQ.width,
+             FQ = QQ.height,
+             PQ = this.Uj().createCanvas(sQ, FQ).getContext("2d");
+           PQ.drawImage(QQ, 0, 0);
+           const gQ = PQ.getImageData(0, 0, sQ, FQ).data;
+           this.applyDisplacementMapFromBuffer(gQ, sQ, FQ, WQ, XQ, qQ, TQ, zQ), wQ && wQ(this)
+         }), sQ || (() => {}), FQ.offlineProvider), this
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L341-L347` → after: `L5654-L5668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5654-L5668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5654-L5668) · [Before (L341-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L341-L347)

```diff
-       static RegisterTopRootEvents(pp, ip) {
-         for (let Op = 0; Op < ip.length; Op++) {
-           const op = ip[Op];
-           pp.addEventListener(op.name, op.handler, !1);
-           try {
-             window.parent && window.parent.addEventListener(op.name, op.handler, !1)
-           } catch (cp) {}
+       applyDisplacementMapFromBuffer(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
+         let sQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+         if (!this.isVerticesDataPresent(lQ.l.PositionKind) || !this.isVerticesDataPresent(lQ.l.NormalKind) || !this.isVerticesDataPresent(lQ.l.UVKind)) return kQ.b.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
+         const FQ = this.getVerticesData(lQ.l.PositionKind, !0, !0),
+           PQ = this.getVerticesData(lQ.l.NormalKind),
+           gQ = this.getVerticesData(lQ.l.UVKind);
+         let JQ = dQ.s.Zero();
+         const rQ = dQ.s.Zero(),
+           IQ = dQ.q.Zero();
+         TQ = TQ || dQ.q.Zero(), zQ = zQ || new dQ.q(1, 1);
+         for (let jQ = 0; jQ < FQ.length; jQ += 3) {
+           dQ.s.FromArrayToRef(FQ, jQ, JQ), dQ.s.FromArrayToRef(PQ, jQ, rQ), dQ.q.FromArrayToRef(gQ, jQ / 3 * 2, IQ);
+           const sQ = 4 * ((Math.abs(IQ.x * zQ.x + TQ.x % 1) * (WQ - 1) % WQ | 0) + (Math.abs(IQ.y * zQ.y + TQ.y % 1) * (XQ - 1) % XQ | 0) * WQ),
+             BQ = .3 * (QQ[sQ] / 255) + .59 * (QQ[sQ + 1] / 255) + .11 * (QQ[sQ + 2] / 255);
+           rQ.normalize(), rQ.scaleInPlace(wQ + (qQ - wQ) * BQ), JQ = JQ.add(rQ), JQ.toArray(FQ, jQ)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L350-L356` → after: `L5672-L5684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5672-L5684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5672-L5684) · [Before (L350-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L350-L356)

```diff
-       static UnregisterTopRootEvents(pp, ip) {
-         for (let Op = 0; Op < ip.length; Op++) {
-           const op = ip[Op];
-           pp.removeEventListener(op.name, op.handler);
-           try {
-             pp.parent && pp.parent.removeEventListener(op.name, op.handler)
-           } catch (cp) {}
+       _getFlattenedNormals(QQ, WQ) {
+         const XQ = new Float32Array(3 * QQ.length);
+         let wQ = 0;
+         const qQ = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
+         for (let TQ = 0; TQ < QQ.length; TQ += 3) {
+           const zQ = dQ.s.FromArray(WQ, 3 * QQ[TQ]),
+             sQ = dQ.s.FromArray(WQ, 3 * QQ[TQ + 1]),
+             FQ = dQ.s.FromArray(WQ, 3 * QQ[TQ + 2]),
+             PQ = zQ.subtract(sQ),
+             gQ = FQ.subtract(sQ),
+             JQ = dQ.s.Normalize(dQ.s.Cross(PQ, gQ));
+           qQ && JQ.scaleInPlace(-1);
+           for (let QQ = 0; QQ < 3; QQ++) XQ[wQ++] = JQ.x, XQ[wQ++] = JQ.y, XQ[wQ++] = JQ.z
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L359-L360` → after: `L5688-L5733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5688-L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5688-L5733) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L359-L360)

```diff
-       static async DumpFramebuffer(pp, ip, cp, Op) {
-         throw (0, Yp.o)("DumpTools")
+       _convertToUnIndexedMesh() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const WQ = this.getVerticesDataKinds().filter((QQ => !this.getVertexBuffer(QQ)?.getIsInstanced())),
+           XQ = this.lwQ(!1, !0),
+           wQ = {},
+           qQ = (QQ, WQ) => {
+             const wQ = new Float32Array(XQ.length * WQ);
+             let qQ = 0;
+             for (let TQ = 0; TQ < XQ.length; TQ++)
+               for (let zQ = 0; zQ < WQ; zQ++) wQ[qQ++] = QQ[XQ[TQ] * WQ + zQ];
+             return wQ
+           },
+           TQ = this.uC(),
+           zQ = this.geometry ? this.ZD.slice(0) : [];
+         for (const sQ of WQ) wQ[sQ] = this.getVerticesData(sQ);
+         for (const sQ of WQ) {
+ ... (30 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L362-L363` → after: `L5735-L5736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5735-L5736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5735-L5736) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L362-L363)

```diff
-       static DumpData(pp, ip, cp, Op) {
-         throw (0, Yp.o)("DumpTools")
+       convertToFlatShadedMesh() {
+         return this._convertToUnIndexedMesh(!0)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L365-L366` → after: `L5738-L5739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5738-L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5738-L5739) · [Before (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L365-L366)

```diff
-       static async DumpDataAsync(pp, ip, cp) {
-         throw (0, Yp.o)("DumpTools")
+       convertToUnIndexedMesh() {
+         return this._convertToUnIndexedMesh()
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L368-L369` → after: `L5741-L5754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5741-L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5741-L5754) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L368-L369)

```diff
-       static _IsOffScreenCanvas(pp) {
-         return void 0 !== pp.convertToBlob
+       flipFaces() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const WQ = hQ.e.ExtractFromMesh(this);
+         let XQ;
+         if (QQ && this.isVerticesDataPresent(lQ.l.NormalKind) && WQ.normals) {
+           for (XQ = 0; XQ < WQ.normals.length; XQ++) WQ.normals[XQ] *= -1;
+           this.setVerticesData(lQ.l.NormalKind, WQ.normals, this.isVertexBufferUpdatable(lQ.l.NormalKind))
+         }
+         if (WQ.indices) {
+           let QQ;
+           for (XQ = 0; XQ < WQ.indices.length; XQ += 3) QQ = WQ.indices[XQ + 1], WQ.indices[XQ + 1] = WQ.indices[XQ + 2], WQ.indices[XQ + 2] = QQ;
+           this.setIndices(WQ.indices, null, this.isVertexBufferUpdatable(lQ.l.PositionKind), !0)
+         }
+         return this
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L371-L387` → after: `L5756-L6207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5756-L6207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L5756-L6207) · [Before (L371-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L371-L387)

```diff
-       static ToBlob(pp, ip) {
-         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
-           op = arguments.length > 3 ? arguments[3] : void 0;
-         Op._IsOffScreenCanvas(pp) || pp.toBlob || (pp.toBlob = function(pp, ip, cp) {
-           setTimeout((() => {
-             const Op = atob(this.toDataURL(ip, cp).split(",")[1]),
-               op = Op.length,
-               Ip = new Uint8Array(op);
-             for (let pp = 0; pp < op; pp++) Ip[pp] = Op.charCodeAt(pp);
-             pp(new Blob([Ip]))
-           }))
-         }), Op._IsOffScreenCanvas(pp) ? pp.convertToBlob({
-           type: cp,
-           quality: op
-         }).then((pp => ip(pp))) : pp.toBlob((function(pp) {
-           ip(pp)
- ... (1 more removed lines; see GitHub link above)
+       increaseVertices() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+         const WQ = hQ.e.ExtractFromMesh(this),
+           XQ = WQ.indices && !Array.isArray(WQ.indices) && Array.from ? Array.from(WQ.indices) : WQ.indices,
+           wQ = WQ.positions && !Array.isArray(WQ.positions) && Array.from ? Array.from(WQ.positions) : WQ.positions,
+           qQ = WQ.uvs && !Array.isArray(WQ.uvs) && Array.from ? Array.from(WQ.uvs) : WQ.uvs,
+           TQ = WQ.normals && !Array.isArray(WQ.normals) && Array.from ? Array.from(WQ.normals) : WQ.normals;
+         if (XQ && wQ) {
+           WQ.indices = XQ, WQ.positions = wQ, qQ && (WQ.uvs = qQ), TQ && (WQ.normals = TQ);
+           const zQ = QQ + 1,
+             sQ = [];
+           for (let QQ = 0; QQ < zQ + 1; QQ++) sQ[QQ] = [];
+           let FQ, PQ;
+           const gQ = new dQ.s(0, 0, 0),
+             JQ = new dQ.s(0, 0, 0),
+             rQ = new dQ.q(0, 0),
+ ... (436 more added lines; see GitHub link above)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L389-L393` → after: `L6209-L6214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6209-L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6209-L6214) · [Before (L389-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L389-L393)

```diff
-       static DownloadBlob(pp, ip) {
-         if ("download" in document.createElement("a")) {
-           if (!ip) {
-             const pp = new Date;
-             ip = "screenshot_" + ((pp.getFullYear() + "-" + (pp.getMonth() + 1)).slice(2) + "-" + pp.getDate() + "_" + pp.getHours() + "-" + ("0" + pp.getMinutes()).slice(-2)) + ".png"
+       Y_(QQ) {
+         const WQ = QQ._indexInSourceMeshInstanceArray;
+         if (-1 != WQ) {
+           if (WQ !== this.instances.length - 1) {
+             const QQ = this.instances[this.instances.length - 1];
+             this.instances[WQ] = QQ, QQ._indexInSourceMeshInstanceArray = WQ
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L395-L403` → after: `L6216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6216) · [Before (L395-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L395-L403)

```diff
-           Op.Download(pp, ip)
-         } else if (pp && "undefined" !== typeof URL) {
-           const ip = URL.createObjectURL(pp),
-             cp = window.open("");
-           if (!cp) return;
-           const Op = cp.document.createElement("img");
-           Op.onload = function() {
-             URL.revokeObjectURL(ip)
-           }, Op.src = ip, cp.document.body.appendChild(Op)
+           QQ._indexInSourceMeshInstanceArray = -1, this.instances.pop()
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L406-L427` → after: `L6219-L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6219-L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6219-L6220) · [Before (L406-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L406-L427)

```diff
-       static EncodeScreenshotCanvasData(pp, ip) {
-         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
-           op = arguments.length > 3 ? arguments[3] : void 0,
-           Ip = arguments.length > 4 ? arguments[4] : void 0;
-         if ("string" !== typeof op && ip) {
-           if (ip) {
-             if (Op._IsOffScreenCanvas(pp)) return void pp.convertToBlob({
-               type: cp,
-               quality: Ip
-             }).then((pp => {
-               const cp = new FileReader;
-               cp.readAsDataURL(pp), cp.onloadend = () => {
-                 const pp = cp.result;
-                 ip(pp)
-               }
-             }));
- ... (6 more removed lines; see GitHub link above)
+       _shouldConvertRHS() {
+         return this._scene.useRightHandedSystem && this.sideOrientation === RQ.b.CounterClockWiseSideOrientation
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L429-L435` → after: `L6222-L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6222-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6222-L6224) · [Before (L429-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L429-L435)

```diff
-       static Download(pp, ip) {
-         if ("undefined" === typeof URL) return;
-         const cp = window.URL.createObjectURL(pp),
-           Op = document.createElement("a");
-         document.body.appendChild(Op), Op.style.display = "none", Op.href = cp, Op.download = ip, Op.addEventListener("click", (() => {
-           Op.parentElement && Op.parentElement.removeChild(Op)
-         })), Op.click(), window.URL.revokeObjectURL(cp)
+       _getRenderingFillMode(QQ) {
+         const WQ = this.sE();
+         return WQ.forcePointsCloud ? RQ.b.PointFillMode : WQ.forceWireframe ? RQ.b.WireFrameFillMode : this.overrideRenderingFillMode ?? QQ
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L437-L438` → after: `L6226-L6227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6226-L6227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6226-L6227) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L437-L438)

```diff
-       static BackCompatCameraNoPreventDefault(pp) {
-         return "boolean" === typeof pp[0] ? pp[0] : "boolean" === typeof pp[1] && pp[1]
+       setMaterialByID(QQ) {
+         return this.setMaterialById(QQ)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L440-L441` → after: `L6229-L6230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6229-L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6229-L6230) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L440-L441)

```diff
-       static CreateScreenshot(pp, ip, cp, Op) {
-         throw (0, Yp.o)("ScreenshotTools")
+       static CreateRibbon(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L443-L444` → after: `L6232-L6233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6232-L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6232-L6233) · [Before (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L443-L444)

```diff
-       static async CreateScreenshotAsync(pp, ip, cp) {
-         throw (0, Yp.o)("ScreenshotTools")
+       static CreateDisc(QQ, WQ, XQ, wQ, qQ, TQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L446-L447` → after: `L6235-L6236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6235-L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6235-L6236) · [Before (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L446-L447)

```diff
-       static CreateScreenshotUsingRenderTarget(pp, ip, cp, Op) {
-         throw (0, Yp.o)("ScreenshotTools")
+       static CreateBox(QQ, WQ, XQ, wQ, qQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L449-L450` → after: `L6238-L6239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6238-L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6238-L6239) · [Before (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L449-L450)

```diff
-       static async CreateScreenshotUsingRenderTargetAsync(pp, ip, cp) {
-         throw (0, Yp.o)("ScreenshotTools")
+       static CreateSphere(QQ, WQ, XQ, wQ, qQ, TQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L452-L453` → after: `L6241-L6242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6241-L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6241-L6242) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L452-L453)

```diff
-       static RandomId() {
-         return (0, Up.e)()
+       static CreateHemisphere(QQ, WQ, XQ, wQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L455-L456` → after: `L6244-L6245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6244-L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6244-L6245) · [Before (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L455-L456)

```diff
-       static IsBase64(pp) {
-         return (0, Pp.k)(pp)
+       static CreateCylinder(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L458-L459` → after: `L6247-L6248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6247-L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6247-L6248) · [Before (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L458-L459)

```diff
-       static DecodeBase64(pp) {
-         return (0, Pp.b)(pp)
+       static CreateTorus(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L461-L462` → after: `L6250-L6251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6250-L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6250-L6251) · [Before (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L461-L462)

```diff
-       static get errorsCount() {
-         return Sp.e.errorsCount
+       static CreateTorusKnot(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L464-L465` → after: `L6253-L6254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6253-L6254) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L464-L465)

```diff
-       static Log(pp) {
-         Sp.e.Log(pp)
+       static CreateLines(QQ, WQ, XQ, wQ, qQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L467-L468` → after: `L6256-L6257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6256-L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6256-L6257) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L467-L468)

```diff
-       static Warn(pp) {
-         Sp.e.Warn(pp)
+       static CreateDashedLines(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L470-L471` → after: `L6259-L6260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6259-L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6259-L6260) · [Before (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L470-L471)

```diff
-       static Error(pp) {
-         Sp.e.Error(pp)
+       static CreatePolygon(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L473-L474` → after: `L6262-L6263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6262-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6262-L6263) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L473-L474)

```diff
-       static get LogCache() {
-         return Sp.e.LogCache
+       static ExtrudePolygon(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L476-L477` → after: `L6265-L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6265-L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6265-L6266) · [Before (L476-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L476-L477)

```diff
-       static ClearLogCache() {
-         Sp.e.ClearLogCache()
+       static ExtrudeShape(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L479-L480` → after: `L6268-L6269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6268-L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6268-L6269) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L479-L480)

```diff
-       static set LogLevels(pp) {
-         Sp.e.LogLevels = pp
+       static ExtrudeShapeCustom(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L482-L483` → after: `L6271-L6272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6271-L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6271-L6272) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L482-L483)

```diff
-       static set PerformanceLogLevel(pp) {
-         (pp & Op.PerformanceUserMarkLogLevel) !== Op.PerformanceUserMarkLogLevel ? (pp & Op.PerformanceConsoleLogLevel) !== Op.PerformanceConsoleLogLevel ? (Op.StartPerformanceCounter = Op._StartPerformanceCounterDisabled, Op.EndPerformanceCounter = Op._EndPerformanceCounterDisab … [truncated]
+       static CreateLathe(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L485-L493` → after: `L6274-L6275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6274-L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6274-L6275) · [Before (L485-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L485-L493)

```diff
-       static _StartPerformanceCounterDisabled(pp, ip) {}
-       static _EndPerformanceCounterDisabled(pp, ip) {}
-       static _StartUserMark(pp) {
-         let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!Op._Performance) {
-           if (!(0, Ip.j)()) return;
-           Op._Performance = window.performance
-         }
-         ip && Op._Performance.mark && Op._Performance.mark(pp + "-Begin")
+       static CreatePlane(QQ, WQ, XQ, wQ, qQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L495-L496` → after: `L6277-L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6277-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6277-L6278) · [Before (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L495-L496)

```diff
-       static _EndUserMark(pp) {
-         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && Op._Performance.mark && (Op._Performance.mark(pp + "-End"), Op._Performance.measure(pp, pp + "-Begin", pp + "-End"))
+       static CreateGround(QQ, WQ, XQ, wQ, qQ, TQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L498-L500` → after: `L6280-L6281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6280-L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6280-L6281) · [Before (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L498-L500)

```diff
-       static _StartPerformanceConsole(pp) {
-         let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         ip && (Op._StartUserMark(pp, ip), console.time && console.time(pp))
+       static CreateTiledGround(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L502-L504` → after: `L6283-L6284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6283-L6284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6283-L6284) · [Before (L502-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L502-L504)

```diff
-       static _EndPerformanceConsole(pp) {
-         let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         ip && (Op._EndUserMark(pp, ip), console.timeEnd(pp))
+       static CreateGroundFromHeightMap(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L506-L512` → after: `L6286-L6287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6286-L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6286-L6287) · [Before (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L506-L512)

```diff
-       static _StartMarkNative(pp) {
-         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
-           if (Op._NativePerformanceCounterHandles.has(pp)) Op.Warn(`Performance counter with name ${pp} is already started.`);
-           else {
-             const ip = _native.startPerformanceCounter(pp);
-             Op._NativePerformanceCounterHandles.set(pp, ip)
-           }
+       static CreateTube(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L514-L518` → after: `L6289-L6290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6289-L6290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6289-L6290) · [Before (L514-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L514-L518)

```diff
-       static _EndMarkNative(pp) {
-         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
-           const ip = Op._NativePerformanceCounterHandles.get(pp);
-           ip ? (_native.endPerformanceCounter(ip), Op._NativePerformanceCounterHandles.delete(pp)) : Op.Warn(`Performance counter with name ${pp} was not started.`)
-         }
+       static CreatePolyhedron(QQ, WQ, XQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L520-L521` → after: `L6292-L6293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6292-L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6292-L6293) · [Before (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L520-L521)

```diff
-       static get Now() {
-         return Lp.e.Now
+       static CreateIcoSphere(QQ, WQ, XQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L523-L533` → after: `L6295-L6296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6295-L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6295-L6296) · [Before (L523-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L523-L533)

```diff
-       static GetClassName(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           cp = null;
-         if (!ip && pp.getClassName) cp = pp.getClassName();
-         else {
-           if (pp instanceof Object) {
-             cp = (ip ? pp : Object.getPrototypeOf(pp)).constructor.__bjsclassName__
-           }
-           cp || (cp = typeof pp)
-         }
-         return cp
+       static CreateDecal(QQ, WQ, XQ, wQ, qQ, TQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L535-L538` → after: `L6298-L6299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6298-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6298-L6299) · [Before (L535-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L535-L538)

```diff
-       static First(pp, ip) {
-         for (const cp of pp)
-           if (ip(cp)) return cp;
-         return null
+       static CreateCapsule(QQ, WQ, XQ) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L540-L548` → after: `L6301-L6394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6301-L6394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6301-L6394) · [Before (L540-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L540-L548)

```diff
-       static getFullClassName(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           cp = null,
-           Op = null;
-         if (!ip && pp.getClassName) cp = pp.getClassName();
-         else {
-           if (pp instanceof Object) {
-             const op = ip ? pp : Object.getPrototypeOf(pp);
-             cp = op.constructor.__bjsclassName__, Op = op.constructor.__bjsmoduleName__
+       static ExtendToGoldberg(QQ) {
+         throw new Error("Import MeshBuilder to populate this function")
+       }
+     }
+     KQ.FRONTSIDE = hQ.e.FRONTSIDE, KQ.BACKSIDE = hQ.e.BACKSIDE, KQ.DOUBLESIDE = hQ.e.DOUBLESIDE, KQ.DEFAULTSIDE = hQ.e.DEFAULTSIDE, KQ.NO_CAP = 0, KQ.CAP_START = 1, KQ.CAP_END = 2, KQ.CAP_ALL = 3, KQ.NO_FLIP = 0, KQ.FLIP_TILE = 1, KQ.ROTATE_TILE = 2, KQ.FLIP_ROW = 3, KQ.ROTATE_RO … [truncated]
+       throw (0, SQ.i)("GroundMesh")
+     }, KQ._GoldbergMeshParser = (QQ, WQ) => {
+       throw (0, SQ.i)("GoldbergMesh")
+     }, KQ._LinesMeshParser = (QQ, WQ) => {
+       throw (0, SQ.i)("LinesMesh")
+     }, KQ._GreasedLineMeshParser = (QQ, WQ) => {
+       throw (0, SQ.i)("GreasedLineMesh")
+     }, KQ._GreasedLineRibbonMeshParser = (QQ, WQ) => {
+       throw (0, SQ.i)("GreasedLineRibbonMesh")
+     }, KQ._TrailMeshParser = (QQ, WQ) => {
+       throw (0, SQ.i)("TrailMesh")
+ ... (78 more added lines; see GitHub link above)
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L552-L563` → after: `L6397-L6878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6397-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6397-L6878) · [Before (L552-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L552-L563)

```diff
-         return cp ? (null != Op ? Op + "." : "") + cp : null
-       }
-       static async DelayAsync(pp) {
-         await new Promise((ip => {
-           setTimeout((() => {
-             ip()
-           }), pp)
-         }))
-       }
-       static IsSafari() {
-         return !!(0, Ip.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
-       }
+         applyToMesh(QQ, WQ) {
+           return this._applyTo(QQ, WQ, !1), this
+         }
+         applyToGeometry(QQ, WQ) {
+           return this._applyTo(QQ, WQ, !1), this
+         }
+         updateMesh(QQ) {
+           return this._update(QQ), this
+         }
+         updateGeometry(QQ) {
+           return this._update(QQ), this
+         }* _applyToCoroutine(QQ) {
+           let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+             XQ = arguments.length > 2 ? arguments[2] : void 0;
+           if (this.positions && (QQ.setVerticesData(TQ.l.PositionKind, this.positions, WQ), XQ && (yield)), this.normals && (QQ.setVerticesData(TQ.l.NormalKind, this.normals, WQ), XQ && (yield)), this.tangents && (QQ.setVerticesData(TQ.l.TangentKind, this.tangents, WQ), XQ && (yi … [truncated]
+             const wQ = this.positions && this.colors.length === this.positions.length ? 3 : 4;
+ ... (466 more added lines; see GitHub link above)
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L566-L568` → after: `L6881-L6887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6881-L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6881-L6887) · [Before (L566-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L566-L568)

```diff
-     function tp(pp, ip) {
-       return cp => {
-         cp.__bjsclassName__ = pp, cp.__bjsmoduleName__ = null != ip ? ip : null
+     function gQ(QQ, WQ, XQ, wQ) {
+       XQ.h_(Number.POSITIVE_INFINITY), wQ.h_(Number.NEGATIVE_INFINITY);
+       for (let qQ = 0; qQ < 3 * WQ; qQ += 3) {
+         const WQ = QQ[qQ],
+           TQ = QQ[qQ + 1],
+           zQ = QQ[qQ + 2];
+         WQ < XQ.x && (XQ.x = WQ), TQ < XQ.y && (XQ.y = TQ), zQ < XQ.z && (XQ.z = zQ), WQ > wQ.x && (wQ.x = WQ), TQ > wQ.y && (wQ.y = TQ), zQ > wQ.z && (wQ.z = zQ)
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L571-L580` → after: `L6890-L6965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6890-L6965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6890-L6965) · [Before (L571-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L571-L580)

```diff
-     Op = vp, vp.AssetBaseUrl = "", vp.UseCustomRequestHeaders = !1, vp.CustomRequestHeaders = Dp.e.CustomRequestHeaders, vp.GetDOMTextContent = Ip.d, vp._DefaultCdnUrl = "https://cdn.babylonjs.com", vp._CdnVersion = "9.28.0", vp._DefaultAssetsUrl = "https://assets.babylonjs.com/c … [truncated]
-       const ip = document.createElement("a");
-       return ip.href = pp, ip.href
-     } : "function" === typeof URL && "object" === typeof location ? pp => new URL(pp, location.origin).href : () => {
-       throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
-     }, vp.NoneLogLevel = Sp.e.NoneLogLevel, vp.MessageLogLevel = Sp.e.MessageLogLevel, vp.WarningLogLevel = Sp.e.WarningLogLevel, vp.ErrorLogLevel = Sp.e.ErrorLogLevel, vp.AllLogLevel = Sp.e.AllLogLevel, vp.IsWindowObjectExist = Ip.j, vp.PerformanceNoneLogLevel = 0, vp.Performanc … [truncated]
-     class Hp {
-       constructor(pp, ip, cp) {
-         let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         this.iterations = pp, this.index = Op - 1, this._done = !1, this._fn = ip, this._successCallback = cp
+ 
+     function JQ(QQ, WQ, XQ) {
+       XQ && (QQ.x -= QQ.x * XQ.x + XQ.y, QQ.y -= QQ.y * XQ.x + XQ.y, QQ.z -= QQ.z * XQ.x + XQ.y, WQ.x += WQ.x * XQ.x + XQ.y, WQ.y += WQ.y * XQ.x + XQ.y, WQ.z += WQ.z * XQ.x + XQ.y)
+     }
+ 
+     function rQ(QQ, WQ, XQ, qQ, TQ) {
+       const zQ = wQ.m.vj[7],
+         sQ = wQ.m.vj[8];
+       for (let FQ = 0; FQ < 2; ++FQ)
+         for (let PQ = 0; PQ < 2; ++PQ)
+           for (let gQ = 0; gQ < 2; ++gQ) zQ.set(FQ ? WQ.x : QQ.x, PQ ? WQ.y : QQ.y, gQ ? WQ.z : QQ.z), wQ.s.TransformCoordinatesToRef(zQ, XQ, sQ), qQ.minimizeInPlace(sQ), TQ.maximizeInPlace(sQ)
+     }
+ 
+     function IQ(QQ, WQ, XQ, qQ, TQ) {
+       const zQ = wQ.m.vj[7];
+       for (let sQ = 0; sQ < 3 * WQ; sQ += 3) wQ.s.TransformCoordinatesFromFloatsToRef(QQ[sQ], QQ[sQ + 1], QQ[sQ + 2], XQ, zQ), qQ.minimizeInPlace(zQ), TQ.maximizeInPlace(zQ)
+ ... (60 more added lines; see GitHub link above)
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L582-L583` → after: `L6967-L6972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6967-L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6967-L6972) · [Before (L582-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L582-L583)

```diff
-       executeNext() {
-         this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
+     }, zQ.d.prototype.thinInstanceGetWorldMatrices = function() {
+       if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
+       const QQ = this._thinInstanceDataStorage.matrixData;
+       if (!this._thinInstanceDataStorage.worldMatrices) {
+         this._thinInstanceDataStorage.worldMatrices = [];
+         for (let WQ = 0; WQ < this._thinInstanceDataStorage.instancesCount; ++WQ) this._thinInstanceDataStorage.worldMatrices[WQ] = wQ.e.FromArray(QQ, 16 * WQ)
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L585-L586` → after: `L6974-L7027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6974-L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L6974-L7027) · [Before (L585-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L585-L586)

```diff
-       breakLoop() {
-         this._done = !0, this._successCallback()
+       return this._thinInstanceDataStorage.worldMatrices
+     }, zQ.d.prototype.thinInstanceRefreshBoundingInfo = function() {
+       let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+         WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+         XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         qQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
+       const zQ = this._thinInstanceDataStorage.boundingVectors;
+       if (QQ || !this.rawBoundingInfo) {
+         if (zQ.length = 0, qQ && function(QQ, WQ, XQ) {
+             const qQ = QQ._userThinInstanceBuffersStorage,
+               zQ = qQ?.data[FQ],
+               jQ = qQ?.strides[FQ];
+             if (!zQ || !jQ || jQ < 4 || !PQ(QQ)) return !1;
+             const BQ = QQ._thinInstanceDataStorage.matrixData;
+             if (!BQ) return !1;
+ ... (38 more added lines; see GitHub link above)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L588-L590` → after: `L7029-L7036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR7029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L7029-L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L7029-L7036) · [Before (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L588-L590)

```diff
-       static Run(pp, ip, cp) {
-         const Op = new Hp(pp, ip, cp, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
-         return Op.executeNext(), Op
+       const jQ = this.uC(),
+         BQ = this._thinInstanceDataStorage.matrixData;
+       if (0 === zQ.length)
+         for (let wQ = 0; wQ < jQ.boundingBox.vectors.length; ++wQ) zQ.push(jQ.boundingBox.vectors[wQ].clone());
+       wQ.m.vj[0].h_(Number.POSITIVE_INFINITY), wQ.m.vj[1].h_(Number.NEGATIVE_INFINITY);
+       for (let TQ = 0; TQ < this._thinInstanceDataStorage.instancesCount; ++TQ) {
+         wQ.e.FromArrayToRef(BQ, 16 * TQ, wQ.m.Matrix[0]);
+         for (let QQ = 0; QQ < zQ.length; ++QQ) wQ.s.TransformCoordinatesToRef(zQ[QQ], wQ.m.Matrix[0], wQ.m.vj[2]), wQ.m.vj[0].minimizeInPlace(wQ.m.vj[2]), wQ.m.vj[1].maximizeInPlace(wQ.m.vj[2])
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L592-L601` → after: `L7038-L7461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR7038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L7038-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L7038-L7461) · [Before (L592-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L592-L601)

```diff
-       static SyncAsyncForLoop(pp, ip, cp, Op, op) {
-         let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
-         return Hp.Run(Math.ceil(pp / ip), (Op => {
-           op && op() ? Op.breakLoop() : setTimeout((() => {
-             for (let Ip = 0; Ip < ip; ++Ip) {
-               const Sp = Op.index * ip + Ip;
-               if (Sp >= pp) break;
-               if (cp(Sp), op && op()) {
-                 Op.breakLoop();
-                 break
+       jQ.reConstruct(wQ.m.vj[0], wQ.m.vj[1]), this._updateBoundingInfo()
+     }, zQ.d.prototype._thinInstanceRecreateBuffer = function(QQ) {
+       let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+       "matrix" === QQ ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, WQ)) : "previousMatrix" === QQ ? this._scene.needsPreviousWorldMatr … [truncated]
+     }, zQ.d.prototype._thinInstanceUpdateBufferSize = function(QQ) {
+       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+       QQ === sQ.l.ColorKind && (QQ = sQ.l.ColorInstanceKind);
+       const XQ = "matrix" === QQ;
+       if (!XQ && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[QQ])) return;
+       const wQ = XQ ? 16 : this._userThinInstanceBuffersStorage.strides[QQ],
+         qQ = XQ ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[QQ];
+       let TQ = XQ ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[QQ];
+       const zQ = (this._thinInstanceDataStorage.instancesCount + WQ) * wQ;
+       let FQ = qQ;
+       for (; FQ < zQ;) FQ *= 2;
+       if (!TQ || qQ != FQ) {
+ ... (408 more added lines; see GitHub link above)
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L604-L606` → after: `L7572-L7682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR7572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L7572-L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L7572-L7682) · [Before (L604-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L604-L606)

```diff
-             Op.executeNext()
-           }), Ip)
-         }), Op)
+           },
+           metadata: PQ
+         }, pQ, GQ), (0, sQ.k)(null, null, wQ, {
+           kind: "field",
+           name: "_rotationQuaternion",
+           static: !1,
+           private: !1,
+           access: {
+             has: QQ => "_rotationQuaternion" in QQ,
+             get: QQ => QQ._rotationQuaternion,
+             set: (QQ, WQ) => {
+               QQ._rotationQuaternion = WQ
+             }
+           },
+           metadata: PQ
+         }, UQ, bQ), (0, sQ.k)(null, null, qQ, {
+ ... (95 more added lines; see GitHub link above)
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L612` → after: `L7689-L7736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR7689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L7689-L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/259.js#L7689-L7736) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/259.js#L612)

```diff
-       dp || (dp = !0, vp.Mix = wp.i, vp.IsExponentOfTwo = wp.h, Ap.e.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAE … [truncated]
+       VQ || (VQ = !0, BQ.Parse = yQ)
+     }(wQ = BQ.prototype).vx ?? (wQ.vx = (0, jQ.h)("TransformNode", "vx")), (qQ = BQ.prototype).applyImpulse ?? (qQ.applyImpulse = (0, jQ.h)("TransformNode", "applyImpulse")), (TQ = BQ.prototype).applyAngularImpulse ?? (TQ.applyAngularImpulse = (0, jQ.h)("TransformNode", "applyAng … [truncated]
+   },
+   40656: (QQ, WQ, XQ) => {
+     function wQ(QQ, WQ, XQ) {
+       try {
+         const wQ = QQ.next();
+         wQ.done ? WQ(wQ) : wQ.value ? wQ.value.then((() => {
+           wQ.value = void 0, WQ(wQ)
+         }), XQ) : WQ(wQ)
+       } catch (wQ) {
+         XQ(wQ)
+       }
+     }
+ 
+     function qQ() {
+ ... (32 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/260.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/260.js` (95 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L4)

```diff
-   40605: (pp, ip, cp) => {
+   40404: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L6-L12` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L6-L9) · [Before (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L6-L12)

```diff
-       c: () => Op
-     });
-     let Op = !1
-   },
-   40195: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => yp
+       d: () => sQ,
+       e: () => BQ,
+       h: () => PQ,
+       l: () => FQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L14-L20` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L11-L14) · [Before (L14-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L14-L20)

```diff
-     var Op = cp(40203),
-       op = cp(40210),
-       Ip = cp(37349),
-       Sp = cp(37320),
-       xp = cp(37345),
-       Lp = cp(38124),
-       Yp = cp(40225);
+     var wQ = XQ(40199),
+       qQ = XQ(38956),
+       TQ = XQ(40331),
+       zQ = XQ(40240);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L22-L23` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L16-L17) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L22-L23)

```diff
-       get wrapU() {
-         return this._wrapU
+       get rG() {
+         return this._isDisposed
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L25-L26` → after: `L19-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L19-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L19-L26) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L25-L26)

```diff
-       set wrapU(pp) {
-         this._wrapU = pp
+       constructor(QQ, WQ, XQ) {
+         let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+           TQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           sQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           FQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+           PQ = arguments.length > 7 ? arguments[7] : void 0,
+           gQ = arguments.length > 8 ? arguments[8] : void 0;
+         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, zQ.b)(), QQ && QQ.sE ? this._engine = QQ.sE().Uj() : this._engine = QQ, this._updatable = XQ, this._instanced = sQ, this._divisor = PQ || 1, this._label = gQ, WQ instanceof wQ.b ? (this._data = null, this._buffer = WQ) … [truncated]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L28-L29` → after: `L28-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L28-L33) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L28-L29)

```diff
-       get wrapV() {
-         return this._wrapV
+       createVertexBuffer(QQ, WQ, XQ, wQ, qQ) {
+         let TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           zQ = arguments.length > 6 ? arguments[6] : void 0;
+         const sQ = TQ ? WQ : WQ * Float32Array.BYTES_PER_ELEMENT,
+           PQ = wQ ? TQ ? wQ : wQ * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
+         return new FQ(this._engine, this, QQ, this._updatable, !0, PQ, void 0 === qQ ? this._instanced : qQ, sQ, XQ, void 0, void 0, !0, this._divisor || zQ)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L31-L32` → after: `L35-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L35-L36) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L31-L32)

```diff
-       set wrapV(pp) {
-         this._wrapV = pp
+       isUpdatable() {
+         return this._updatable
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L34-L35` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L38-L39) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L34-L35)

```diff
-       get coordinatesMode() {
-         return 0
+       getData() {
+         return this._data
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L37-L38` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L41-L42) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L37-L38)

```diff
-       get isCube() {
-         return !!this._texture && this._texture.isCube
+       getBuffer() {
+         return this._buffer
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L40-L41` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L44-L45) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L40-L41)

```diff
-       set isCube(pp) {
-         this._texture && (this._texture.isCube = pp)
+       getStrideSize() {
+         return this.byteStride / Float32Array.BYTES_PER_ELEMENT
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L43-L44` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L47-L49) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L43-L44)

```diff
-       get is3D() {
-         return !!this._texture && this._texture.is3D
+       create() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         !QQ && this._buffer || (QQ = QQ || this._data, QQ && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, QQ), this._data = QQ) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(QQ, this._label), this._data = QQ … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L46-L47` → after: `L51-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L51-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L51-L57) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L46-L47)

```diff
-       set is3D(pp) {
-         this._texture && (this._texture.is3D = pp)
+       _rebuild() {
+         if (this._data) this._buffer = null, this.create(this._data);
+         else {
+           if (!this._buffer) return;
+           if (this._buffer.yJ > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.yJ, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.yJ, void 0, this._label));
+           qQ.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
+         }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L49-L50` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L59-L60) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L49-L50)

```diff
-       get is2DArray() {
-         return !!this._texture && this._texture.is2DArray
+       update(QQ) {
+         this.create(QQ)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L52-L53` → after: `L62-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L62-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L62-L64) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L52-L53)

```diff
-       set is2DArray(pp) {
-         this._texture && (this._texture.is2DArray = pp)
+       updateDirectly(QQ, WQ, XQ) {
+         let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, QQ, wQ ? WQ : WQ * Float32Array.BYTES_PER_ELEMENT, XQ ? XQ * this.byteStride : void 0), this._data = 0 === WQ && void 0 === XQ ? QQ : null)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L55-L56` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L66-L67) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L55-L56)

```diff
-       getClassName() {
-         return "ThinTexture"
+       _increaseReferences() {
+         this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L58-L59` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L69-L70) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L58-L59)

```diff
-       static _IsRenderTargetWrapper(pp) {
-         return void 0 !== pp?.shareDepth
+       dispose() {
+         this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L61-L62` → after: `L72-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L72-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L72-L75) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L61-L62)

```diff
-       constructor(pp) {
-         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = Yp.c.Zero(), this._cachedBaseSize = Yp.c.Zero(), this._initialSamplingMode = 2, this._texture = Dp. … [truncated]
+     }
+     class FQ {
+       get rG() {
+         return this._isDisposed
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L64-L65` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L77-L78) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L64-L65)

```diff
-       isReady() {
-         return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
+       get instanceDivisor() {
+         return this._instanceDivisor
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L67-L69` → after: `L80-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L80-L82) · [Before (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L67-L69)

```diff
-       delayLoad() {}
-       getInternalTexture() {
-         return this._texture
+       set instanceDivisor(QQ) {
+         const WQ = 0 != QQ;
+         this._instanceDivisor = QQ, WQ !== this._instanced && (this._instanced = WQ, this._computeHashCode())
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L71-L74` → after: `L84-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L84-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L84-L119) · [Before (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L71-L74)

```diff
-       getSize() {
-         if (this._texture) {
-           if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
-           if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
+       get _maxVerticesCount() {
+         const QQ = this.getData();
+         return QQ ? Array.isArray(QQ) ? QQ.length / (this.byteStride / 4) - this.byteOffset / 4 : (QQ.byteLength - this.byteOffset) / this.byteStride : 0
+       }
+       constructor(QQ, WQ, XQ, wQ, qQ, zQ, JQ, rQ, IQ, jQ) {
+         let BQ, yQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
+           VQ = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
+           DQ = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
+           pQ = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
+         if (this._isDisposed = !1, this.engine = QQ, "object" === typeof wQ && null !== wQ ? (BQ = wQ.updatable ?? !1, qQ = wQ.postponeInternalCreation, zQ = wQ.stride, JQ = wQ.instanced, rQ = wQ.offset, IQ = wQ.size, jQ = wQ.type, yQ = wQ.normalized ?? !1, VQ = wQ.useBytes ?? !1 … [truncated]
+           const QQ = this.getData();
+           this.type = QQ ? gQ(QQ) : FQ.FLOAT
+         } else this.type = jQ;
+         const GQ = (0, TQ.t)(this.type);
+         VQ ? (this._size = IQ || (zQ ? zQ / GQ : PQ(XQ)), this.byteStride = zQ || this._buffer.byteStride || this._size * GQ, this.byteOffset = rQ || 0) : (this._size = IQ || zQ || PQ(XQ), this.byteStride = zQ ? zQ * GQ : this._buffer.byteStride || this._size * GQ, this.byteOffse … [truncated]
+       }
+ ... (20 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L78-L79` → after: `L122-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L122-L123) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L78-L79)

```diff
-       getBaseSize() {
-         return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height  … [truncated]
+       _computeHashCode() {
+         this.hashCode = (FQ._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L81-L82` → after: `L125-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L125-L126) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L81-L82)

```diff
-       get samplingMode() {
-         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
+       _rebuild() {
+         this._buffer?._rebuild()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L84-L86` → after: `L128-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L128-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L128-L157) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L84-L86)

```diff
-       updateSamplingMode(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this._texture && this._engine && this._engine.updateTextureSamplingMode(pp, this._texture, this._texture.generateMipMaps && ip)
+       getKind() {
+         return this._kind
+       }
+       isUpdatable() {
+         return this._buffer.isUpdatable()
+       }
+       getData() {
+         return this._buffer.getData()
+       }
+       getFloatData(QQ, WQ) {
+         const XQ = this.getData();
+         return XQ ? (0, TQ.p)(XQ, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, QQ, WQ) : null
+       }
+       getBuffer() {
+         return this._buffer.getBuffer()
+       }
+ ... (14 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L88-L89` → after: `L159-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L159-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L159-L170) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L88-L89)

```diff
-       releaseInternalTexture() {
-         this._texture && (this._texture.dispose(), this._texture = null)
+       getInstanceDivisor() {
+         return this._instanceDivisor
+       }
+       create(QQ) {
+         this._buffer.create(QQ), this._alignBuffer()
+       }
+       update(QQ) {
+         this._buffer.update(QQ), this._alignBuffer()
+       }
+       updateDirectly(QQ, WQ) {
+         let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         this._buffer.updateDirectly(QQ, WQ, void 0, XQ), this._alignBuffer()
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L92` → after: `L173-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L173-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L173-L178) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L92)

```diff
-         this._texture && (this.releaseInternalTexture(), this._engine = null)
+         this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
+       }
+       forEach(QQ, WQ) {
+         (0, TQ.j)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, QQ, this.normalized, ((QQ, XQ) => {
+           for (let wQ = 0; wQ < this._size; wQ++) WQ(QQ[wQ], XQ + wQ)
+         }))
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L95-L136` → after: `L182-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L182-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L182-L278) · [Before (L95-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L95-L136)

```diff
-     var Ap, Pp = cp(40233),
-       Wp = cp(40096);
-     let yp = (() => {
-       var pp;
-       let ip, cp, Yp, Ap, Wp, yp, Up, wp, vp, tp, Hp, dp, ep, jp, kp, mp, Rp, qp, Mp, Cp, Ep, Xp, lp, Qp, Jp, Bp = Dp,
-         Np = [],
-         Tp = [],
-         fp = [],
-         bp = [],
-         hp = [],
-         ap = [],
-         np = [],
-         Fp = [],
-         gp = [],
-         Gp = [],
-         rp = [],
- ... (26 more removed lines; see GitHub link above)
+ 
+     function PQ(QQ) {
+       switch (QQ) {
+         case FQ.UVKind:
+         case FQ.UV2Kind:
+         case FQ.UV3Kind:
+         case FQ.UV4Kind:
+         case FQ.UV5Kind:
+         case FQ.UV6Kind:
+           return 2;
+         case FQ.NormalKind:
+         case FQ.PositionKind:
+           return 3;
+         case FQ.ColorKind:
+         case FQ.ColorInstanceKind:
+         case FQ.MatricesIndicesKind:
+ ... (81 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L138-L139` → after: `L280-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L280-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L280-L294) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L138-L139)

```diff
-         set getAlphaFromRGB(pp) {
-           this._getAlphaFromRGB !== pp && (this._getAlphaFromRGB = pp, this._scene && this._scene.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this))))
+         const PQ = (QQ, WQ) => {
+           if (-1 !== this.thinInstanceIndex) {
+             const XQ = QQ._thinInstanceDataStorage.matrixData,
+               qQ = this.thinInstanceIndex << 4;
+             if (XQ && XQ.length > qQ) {
+               const QQ = wQ.m.Matrix[0];
+               wQ.e.FromArrayToRef(XQ, qQ, QQ), wQ.s.TransformNormalToRef(WQ, QQ, WQ)
+             }
+           }
+           let XQ = QQ.getWorldMatrix();
+           QQ.nonUniformScaling && (wQ.m.Matrix[0].WH(XQ), XQ = wQ.m.Matrix[0], XQ.setTranslationFromFloats(0, 0, 0), XQ.invert(), XQ.transposeToRef(wQ.m.Matrix[1]), XQ = wQ.m.Matrix[1]), wQ.s.TransformNormalToRef(WQ, XQ, WQ)
+         };
+         if (QQ && PQ(this.pickedMesh, XQ), this.ray) {
+           const WQ = wQ.m.vj[0].WH(XQ);
+           QQ || PQ(this.pickedMesh, WQ), wQ.s.Dot(WQ, this.ray.direction) > 0 && XQ.negateInPlace()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L141-L142` → after: `L296-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L296-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L296-L357) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L141-L142)

```diff
-         get getAlphaFromRGB() {
-           return this._getAlphaFromRGB
+         return XQ.normalize(), XQ
+       }
+       getTextureCoordinates() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qQ.l.UVKind;
+         if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(QQ)) return null;
+         const WQ = this.pickedMesh.lwQ();
+         if (!WQ) return null;
+         const XQ = this.pickedMesh.getVerticesData(QQ);
+         if (!XQ) return null;
+         let TQ = wQ.q.FromArray(XQ, 2 * WQ[3 * this.faceId]),
+           zQ = wQ.q.FromArray(XQ, 2 * WQ[3 * this.faceId + 1]),
+           sQ = wQ.q.FromArray(XQ, 2 * WQ[3 * this.faceId + 2]);
+         return TQ = TQ.scale(this.bu), zQ = zQ.scale(this.bv), sQ = sQ.scale(1 - this.bu - this.bv), new wQ.q(TQ.x + zQ.x + sQ.x, TQ.y + zQ.y + sQ.y)
+       }
+     }
+   },
+ ... (46 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L144-L145` → after: `L359-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L359-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L359-L680) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L144-L145)

```diff
-         set coordinatesIndex(pp) {
-           this._coordinatesIndex !== pp && (this._coordinatesIndex = pp, this._scene && this._scene.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this))))
+       }
+       getMSAARenderBuffer() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+         return this._MSAARenderBuffers?.[QQ] ?? null
+       }
+       release() {
+         this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
+       }
+     }
+   },
+   40170: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => DQ
+     });
+     var wQ = XQ(37399),
+       qQ = XQ(40122),
+ ... (306 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L147-L148` → after: `L682-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L682-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L682-L694) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L147-L148)

```diff
-         get coordinatesIndex() {
-           return this._coordinatesIndex
+       }
+       _rebuildInternalTextures() {
+         const QQ = this._internalTexturesCache.slice();
+         for (const WQ of QQ) WQ._rebuild()
+       }
+       _rebuildRenderTargetWrappers() {
+         const QQ = this._renderTargetWrapperCache.slice();
+         for (const WQ of QQ) WQ.textures?.some((QQ => 15 === QQ.source)) || WQ._rebuild()
+       }
+       _rebuildEffects() {
+         for (const QQ in this._compiledEffects) {
+           const WQ = this._compiledEffects[QQ];
+           WQ._pipelineContext = null, WQ._prepareEffect()
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L150-L151` → after: `L696-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L696-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L696-L741) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L150-L151)

```diff
-         set coordinatesMode(pp) {
-           this._coordinatesMode !== pp && (this._coordinatesMode = pp, this._scene && this._scene.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this))))
+         qQ.c.ResetCache()
+       }
+       _rebuildGraphicsResources() {
+         this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
+       }
+       _flagContextRestored() {
+         zQ.b.Warn(this.name + " context successfully restored."), this.Gj.notifyObservers(this), this._contextWasLost = !1
+       }
+       _restoreEngineAfterContextLost(QQ) {
+         setTimeout((() => {
+           this._clearEmptyResources();
+           const WQ = this._depthCullingState.depthTest,
+             XQ = this._depthCullingState.depthFunc,
+             wQ = this._depthCullingState.depthMask,
+             qQ = this._stencilState.stencilTest;
+           QQ(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = WQ, this._depthCullingState.depthFunc = XQ, this._depthCullingState.depthMask = wQ, this._stencilState.stencilTest = qQ, this._flagContextRestored()
+ ... (30 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L153-L154` → after: `L743-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L743-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L743-L773) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L153-L154)

```diff
-         get coordinatesMode() {
-           return this._coordinatesMode
+         return this._emptyCubeTexture
+       }
+       set framebufferDimensionsObject(QQ) {
+         this._framebufferDimensionsObject = QQ
+       }
+       get activeRenderLoops() {
+         return this._activeRenderLoops
+       }
+       stopRenderLoop(QQ) {
+         if (!QQ) return this._activeRenderLoops.length = 0, void this._cancelFrame();
+         const WQ = this._activeRenderLoops.indexOf(QQ);
+         WQ >= 0 && (this._activeRenderLoops.splice(WQ, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
+       }
+       _cancelFrame() {
+         if (this.customAnimationFrameRequester) {
+           if (0 !== this._frameHandler) {
+ ... (15 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L156-L157` → after: `L775-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L775-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L775-L796) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L156-L157)

```diff
-         get wrapU() {
-           return this._wrapU
+       }
+       bD() {
+         this.onBeginFrameObservable.notifyObservers(this)
+       }
+       dD() {
+         this._frameId++, this.onEndFrameObservable.notifyObservers(this)
+       }
+       get maxFPS() {
+         return this._maxFPS
+       }
+       set maxFPS(QQ) {
+         this._maxFPS = QQ, void 0 !== QQ && (this._minFrameTime = QQ <= 0 ? Number.MAX_VALUE : 1e3 / QQ)
+       }
+       _isOverFrameTime(QQ) {
+         if (!QQ || void 0 === this._maxFPS) return !1;
+         const WQ = QQ - this._lastFrameTime;
+ ... (6 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L159-L160` → after: `L798-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L798-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L798-L804) · [Before (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L159-L160)

```diff
-         set wrapU(pp) {
-           this._wrapU = pp
+       }
+       _renderLoop(QQ) {
+         this._processFrame(QQ), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
+       }
+       _renderFrame() {
+         for (let QQ = 0; QQ < this._activeRenderLoops.length; QQ++) {
+           (0, this._activeRenderLoops[QQ])()
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L162-L184` → after: `L806-L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L806-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L806-L943) · [Before (L162-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L162-L184)

```diff
-         get wrapV() {
-           return this._wrapV
-         }
-         set wrapV(pp) {
-           this._wrapV = pp
-         }
-         get isCube() {
-           return this._texture ? this._texture.isCube : this._isCube
-         }
-         set isCube(pp) {
-           this._texture ? this._texture.isCube = pp : this._isCube = pp
-         }
-         get is3D() {
-           return !!this._texture && this._texture.is3D
-         }
-         set is3D(pp) {
- ... (7 more removed lines; see GitHub link above)
+       }
+       _renderViews() {
+         return !1
+       }
+       _queueNewFrame(QQ, WQ) {
+         return VQ(QQ, WQ)
+       }
+       _queueNewFrameForRenderLoop() {
+         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.Hj = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.H … [truncated]
+       }
+       runRenderLoop(QQ) {
+         -1 === this._activeRenderLoops.indexOf(QQ) && (this._activeRenderLoops.push(QQ), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
+       }
+       getDepthBuffer() {
+         return this._depthCullingState.depthTest
+       }
+ ... (122 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L186-L187` → after: `L945-L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L945-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L945-L1026) · [Before (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L186-L187)

```diff
-         get gammaSpace() {
-           return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
+         return vQ
+       }
+       _rebuildBuffers() {
+         for (const QQ of this._uniformBuffers) QQ._rebuildAfterContextLost()
+       }
+       get _shouldUseHighPrecisionShader() {
+         return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
+       }
+       getHostDocument() {
+         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, BQ.f)() ? document : null
+       }
+       getLoadedTexturesCache() {
+         return this._internalTexturesCache
+       }
+       clearInternalTexturesCache() {
+         this._internalTexturesCache.length = 0
+ ... (66 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L189-L195` → after: `L1028-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1028-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1028-L1045) · [Before (L189-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L189-L195)

```diff
-         set gammaSpace(pp) {
-           if (this._texture) {
-             if (this._texture._gammaSpace === pp) return;
-             this._texture._gammaSpace = pp
-           } else {
-             if (this._gammaSpace === pp) return;
-             this._gammaSpace = pp
+         if ((0, BQ.l)() && (0, BQ.f)())
+           if (this._renderingCanvas) {
+             const XQ = this._renderingCanvas.getBoundingClientRect?.();
+             QQ = this._renderingCanvas.clientWidth || XQ?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, WQ = this._renderingCanvas.clientHeight || XQ?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
+           } else QQ = window.innerWidth, WQ = window.innerHeight;
+         else QQ = this._renderingCanvas ? this._renderingCanvas.width : 100, WQ = this._renderingCanvas ? this._renderingCanvas.height : 100;
+         this.setSize(QQ / this._hardwareScalingLevel, WQ / this._hardwareScalingLevel, XQ)
+       }
+       setSize(QQ, WQ) {
+         let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         if (!this._renderingCanvas) return !1;
+         if (QQ |= 0, WQ |= 0, !XQ && this._renderingCanvas.width === QQ && this._renderingCanvas.height === WQ) return !1;
+         if (this._renderingCanvas.width = QQ, this._renderingCanvas.height = WQ, this.scenes) {
+           for (let QQ = 0; QQ < this.scenes.length; QQ++) {
+             const WQ = this.scenes[QQ];
+             for (let QQ = 0; QQ < WQ.cameras.length; QQ++) {
+ ... (2 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L197-L212` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1047) · [Before (L197-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L197-L212)

```diff
-           this.Gl()?.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this)))
-         }
-         get isRGBD() {
-           return null != this._texture && this._texture._isRGBD
-         }
-         set isRGBD(pp) {
-           pp !== this.isRGBD && (this._texture && (this._texture._isRGBD = pp), this.Gl()?.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this))))
-         }
-         get noMipmap() {
-           return !1
-         }
-         get lodGenerationOffset() {
-           return this._texture ? this._texture._lodGenerationOffset : 0
-         }
-         set lodGenerationOffset(pp) {
-           this._texture && (this._texture._lodGenerationOffset = pp)
+           this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L214-L230` → after: `L1049-L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1049-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1049-L1144) · [Before (L214-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L214-L230)

```diff
-         get lodGenerationScale() {
-           return this._texture ? this._texture._lodGenerationScale : 0
-         }
-         set lodGenerationScale(pp) {
-           this._texture && (this._texture._lodGenerationScale = pp)
-         }
-         get linearSpecularLOD() {
-           return !!this._texture && this._texture._linearSpecularLOD
-         }
-         set linearSpecularLOD(pp) {
-           this._texture && (this._texture._linearSpecularLOD = pp)
-         }
-         get irradianceTexture() {
-           return this._texture ? this._texture._irradianceTexture : null
-         }
-         set irradianceTexture(pp) {
- ... (1 more removed lines; see GitHub link above)
+         return !0
+       }
+       createRawTexture(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ) {
+         throw (0, IQ.i)("engine.rawTexture")
+       }
+       createRawCubeTexture(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
+         throw (0, IQ.i)("engine.rawTexture")
+       }
+       createRawTexture3D(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ) {
+         throw (0, IQ.i)("engine.rawTexture")
+       }
+       createRawTexture2DArray(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ) {
+         throw (0, IQ.i)("engine.rawTexture")
+       }
+       _sharedInit(QQ) {
+         this._renderingCanvas = QQ
+ ... (80 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L232-L233` → after: `L1146-L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1146-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1146-L1208) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L232-L233)

```diff
-         get uid() {
-           return this._uid || (this._uid = (0, Lp.e)()), this._uid
+       }
+       static GetCompatibleTextureLoader(QQ, WQ) {
+         return null
+       }
+     }
+     DQ._RenderPassIdCounter = 0, DQ._RescalePostProcessFactory = null, DQ.CollisionsEpsilon = .001, DQ.QueueNewFrame = VQ
+   },
+   40126: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => wQ
+     });
+     class wQ {
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.ShadersRepository : wQ.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+ ... (47 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L235-L236` → after: `L1210-L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1210-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1210-L1230) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L235-L236)

```diff
-         toString() {
-           return this.name
+         qQ.forEach(((QQ, WQ) => {
+           TQ[QQ] = WQ
+         }));
+         for (const gQ of FQ.getAttributes(this, zQ)) sQ.push(gQ)
+       }
+       dispose() {
+         this._uniforms = {}, this._isDisposed = !0
+       }
+       _cacheMatrix(QQ, WQ) {
+         const XQ = this._valueCache[QQ],
+           wQ = WQ.updateFlag;
+         if (void 0 !== XQ && XQ === wQ) return !1;
+         const qQ = WQ.awQ();
+         let TQ = this._matrixValueCache[QQ];
+         if (void 0 !== XQ && null !== XQ && void 0 !== TQ) {
+           let WQ = !0;
+ ... (5 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L238-L239` → after: `L1232-L1435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1232-L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1232-L1435) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L238-L239)

```diff
-         getClassName() {
-           return "BaseTexture"
+         return void 0 === TQ && (TQ = this._matrixValueCache[QQ] = new Float32Array(16)), TQ.set(qQ), this._valueCache[QQ] = wQ, !0
+       }
+       _cacheFloat2(QQ, WQ, XQ) {
+         let wQ = this._valueCache[QQ];
+         if (!wQ || 2 !== wQ.length) return wQ = [WQ, XQ], this._valueCache[QQ] = wQ, !0;
+         let qQ = !1;
+         return wQ[0] !== WQ && (wQ[0] = WQ, qQ = !0), wQ[1] !== XQ && (wQ[1] = XQ, qQ = !0), qQ
+       }
+       _cacheFloat3(QQ, WQ, XQ, wQ) {
+         let qQ = this._valueCache[QQ];
+         if (!qQ || 3 !== qQ.length) return qQ = [WQ, XQ, wQ], this._valueCache[QQ] = qQ, !0;
+         let TQ = !1;
+         return qQ[0] !== WQ && (qQ[0] = WQ, TQ = !0), qQ[1] !== XQ && (qQ[1] = XQ, TQ = !0), qQ[2] !== wQ && (qQ[2] = wQ, TQ = !0), TQ
+       }
+       _cacheFloat4(QQ, WQ, XQ, wQ, qQ) {
+         let TQ = this._valueCache[QQ];
+ ... (188 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L241-L242` → after: `L1437-L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1437-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1437-L1439) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L241-L242)

```diff
-         set onDispose(pp) {
-           this._onDisposeObserver && this.Kl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Kl.add(pp)
+         if (!WQ.getShaderParameter(TQ, WQ.COMPILE_STATUS)) {
+           const XQ = WQ.getShaderInfoLog(TQ);
+           if (XQ) throw QQ.fragmentCompilationError = XQ, new Error("FRAGMENT SHADER " + XQ)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L244-L245` → after: `L1441-L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1441-L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1441-L1448) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L244-L245)

```diff
-         get isBlocking() {
-           return !0
+         const XQ = wQ.getProgramInfoLog(zQ);
+         if (XQ) throw QQ.programLinkError = XQ, new Error(XQ)
+       }
+       if (XQ) {
+         wQ.validateProgram(zQ);
+         if (!wQ.getProgramParameter(zQ, wQ.VALIDATE_STATUS)) {
+           const WQ = wQ.getProgramInfoLog(zQ);
+           if (WQ) throw QQ.programValidationError = WQ, new Error(WQ)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L247-L248` → after: `L1450-L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1450-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1450-L1509) · [Before (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L247-L248)

```diff
-         get loadingError() {
-           return this._loadingError
+       }
+       wQ.deleteShader(qQ), wQ.deleteShader(TQ), QQ.vertexShader = void 0, QQ.fragmentShader = void 0, QQ.onCompiled && (QQ.onCompiled(), QQ.onCompiled = void 0)
+     }
+ 
+     function BQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, FQ, JQ) {
+       let rQ = arguments.length > 10 ? arguments[10] : void 0,
+         IQ = arguments.length > 11 ? arguments[11] : void 0,
+         jQ = arguments.length > 12 ? arguments[12] : void 0;
+       const BQ = sQ(QQ.context);
+       IQ || (IQ = BQ.createRawShaderProgramInjection ?? PQ), jQ || (jQ = BQ.createShaderProgramInjection ?? gQ);
+       const yQ = QQ;
+       yQ.program = wQ ? IQ(yQ, WQ, XQ, yQ.context, JQ) : jQ(yQ, WQ, XQ, FQ, yQ.context, JQ), yQ.program.__SPECTOR_rebuildProgram = zQ, rQ()
+     }
+ 
+     function yQ(QQ, WQ, XQ, wQ, TQ, zQ) {
+       return VQ((0, qQ.e)(QQ, XQ, wQ), WQ, TQ, zQ)
+ ... (44 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L250-L251` → after: `L1511-L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1511-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1511-L1537) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L250-L251)

```diff
-         get errorObject() {
-           return this._errorObject
+         return QQ
+       }
+     }
+     const gQ = /(flat\s)?\s*varying\s*.*/;
+     class JQ {
+       constructor() {
+         this.shaderLanguage = 0
+       }
+       attributeProcessor(QQ) {
+         return QQ.replace("attribute", "in")
+       }
+       varyingCheck(QQ, WQ) {
+         return gQ.test(QQ)
+       }
+       varyingProcessor(QQ, WQ) {
+         return QQ.replace("varying", WQ ? "in" : "out")
+ ... (11 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L253-L255` → after: `L1539-L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1539-L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1539-L1637) · [Before (L253-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L253-L255)

```diff
-         constructor(ip) {
-           let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-           super(null), this.uniqueId = ((0, Op.l)(this, Np), (0, Op.l)(this, Tp, void 0)), this.name = ((0, Op.l)(this, fp), (0, Op.l)(this, bp, void 0)), this.displayName = ((0, Op.l)(this, hp), (0, Op.l)(this, ap, void 0)), this.metadata = ((0, Op.l)(this, np), (0, Op.l)(this,  … [truncated]
+         return QQ
+       }
+     }
+     var rQ = XQ(40193),
+       IQ = XQ(40206),
+       jQ = XQ(40210),
+       BQ = XQ(40103),
+       yQ = XQ(40150),
+       VQ = XQ(40135),
+       DQ = XQ(40212),
+       pQ = XQ(40182);
+     class GQ {}
+     class UQ extends TQ.d {
+       get name() {
+         return this._name
+       }
+ ... (83 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L257-L258` → after: `L1639-L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1639-L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1639-L1655) · [Before (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L257-L258)

```diff
-         Gl() {
-           return this._scene
+         this._sharedInit(TQ), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== XQ.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = XQ.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
+         for (let qQ = 0; qQ < this._caps.maxVertexAttribs; qQ++) this._currentBufferPointers[qQ] = new GQ;
+         this._shaderProcessor = this.Mj > 1 ? new JQ : new PQ;
+         const zQ = `Babylon.js v${UQ.Version}`;
+         sQ.b.Log(zQ + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", zQ);
+         const FQ = (0, qQ.v)(this._gl);
+         FQ.validateShaderPrograms = this.validateShaderPrograms, FQ.parallelShaderCompile = this._caps.parallelShaderCompile
+       }
+       _clearEmptyResources() {
+         this._dummyFramebuffer = null, super._clearEmptyResources()
+       }
+       _getShaderProcessingContext(QQ) {
+         return null
+       }
+       areAllEffectsReady() {
+         for (const QQ in this._compiledEffects) {
+ ... (1 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L260-L261` → after: `L1657-L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1657-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1657-L1733) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L260-L261)

```diff
-         _getEngine() {
-           return this._engine
+         return !0
+       }
+       _initGLContext() {
+         this._caps = {
+           maxTexturesImageUnits: this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS),
+           maxCombinedTexturesImageUnits: this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
+           maxVertexTextureImageUnits: this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
+           maxTextureSize: this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),
+           maxSamples: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_SAMPLES) : 1,
+           maxCubemapTextureSize: this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE),
+           maxRenderTextureSize: this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE),
+           maxVertexAttribs: this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS),
+           maxVaryingVectors: this._gl.getParameter(this._gl.MAX_VARYING_VECTORS),
+           maxFragmentUniformVectors: this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS),
+           maxVertexUniformVectors: this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS),
+           shaderFloatPrecision: 0,
+ ... (61 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L263-L264` → after: `L1735-L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1735-L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1735-L1738) · [Before (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L263-L264)

```diff
-         getTextureMatrix() {
-           return Sp.b.IdentityReadOnly
+         if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
+         else {
+           const QQ = this._gl.getExtension("WEBGL_depth_texture");
+           null != QQ && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = QQ.UNSIGNED_INT_24_8_WEBGL)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L266-L267` → after: `L1740-L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1740-L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1740-L1744) · [Before (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L266-L267)

```diff
-         getReflectionTextureMatrix() {
-           return Sp.b.IdentityReadOnly
+         if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
+         else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
+         else {
+           const QQ = this._gl.getExtension("OES_vertex_array_object");
+           null != QQ && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = QQ.createVertexArrayOES.bind(QQ), this._gl.bindVertexArray = QQ.bindVertexArrayOES.bind(QQ), this._gl.deleteVertexArray = QQ.deleteVertexArrayOES.bind(QQ))
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L269-L270` → after: `L1746-L1749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1746-L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1746-L1749) · [Before (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L269-L270)

```diff
-         getRefractionTextureMatrix() {
-           return this.getReflectionTextureMatrix()
+         if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
+         else {
+           const QQ = this._gl.getExtension("ANGLE_instanced_arrays");
+           null != QQ ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = QQ.drawArraysInstancedANGLE.bind(QQ), this._gl.drawElementsInstanced = QQ.drawElementsInstancedANGLE.bind(QQ), this._gl.vertexAttribDivisor = QQ.vertexAttribDivisorANGLE.bind(QQ)) : this._caps … [truncated]
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L272-L273` → after: `L1751-L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1751-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1751-L1759) · [Before (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L272-L273)

```diff
-         isReadyOrNotBlocking() {
-           return !this.isBlocking || this.isReady() || this.loadingError
+         if (this._gl.getShaderPrecisionFormat) {
+           const QQ = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
+             WQ = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
+           if (QQ && WQ && (this._caps.highPrecisionShaderSupported = 0 !== QQ.precision && 0 !== WQ.precision, this._caps.shaderFloatPrecision = Math.min(QQ.precision, WQ.precision)), !this._shouldUseHighPrecisionShader) {
+             const QQ = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
+               WQ = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
+             QQ && WQ && (this._caps.shaderFloatPrecision = Math.min(QQ.precision, WQ.precision))
+           }
+           this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L275-L277` → after: `L1761-L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1761-L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/260.js#L1761-L1764) · [Before (L275-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/260.js#L275-L277)

```diff
-         scale(pp) {}
-         get canRescale() {
-           return !1
+         if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
+         else {
+           const QQ = this._gl.getExtension("EXT_blend_minmax");
+           null != QQ && (this._caps.blendMinMax = !0, this._gl.MAX = QQ.MAX_EXT, this._gl.MIN = QQ.MIN_EXT)
```
