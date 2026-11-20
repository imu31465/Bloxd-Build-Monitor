# Changed — Bundle Modifications Report (Part 105 / 132)

- **Updated at**: `2026-11-21T04:21 JST`
- **Part**: `105 / 132` (**446** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 104](part-104.md) · [Part 106 →](part-106.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/babylon-backend.js` (bbb6l5.0244a119 → halsg.2bd74967 · continued)

- **File**: `bundles/bloxd.io/chunks/js/babylon-backend.js` (179 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d)

#### 111. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L678` → after: `L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L678) · [Before (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L678)

```diff
-             Yq.worldOffset.x = -qq.wB.BW[0], Yq.worldOffset.y = -qq.wB.BW[1], Yq.worldOffset.z = -qq.wB.BW[2]
+             Bb.worldOffset.x = -bb.PH.Ow[0], Bb.worldOffset.y = -bb.PH.Ow[1], Bb.worldOffset.z = -bb.PH.Ow[2]
```

#### 112. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L683-L684` → after: `L683-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L683-L684) · [Before (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L683-L684)

```diff
-         const Yq = new Aq.b(Eq, qq.PV, null, void 0, void 0, !1);
-         return (0, zq.f)(Eq, gq, qq.PV, Yq), Yq
+         const Bb = new Yb.b(ub, bb.Xp, null, void 0, void 0, !1);
+         return (0, eb.e)(ub, hb, bb.Xp, Bb), Bb
```

#### 113. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L686-L688` → after: `L686-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L686-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L686-L688) · [Before (L686-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L686-L688)

```diff
-       QV: OE,
-       Nlq: function(qq, Eq) {
-         return oE.origin.WG(Eq.origin), oE.direction.WG(Eq.direction), oE.length = Eq.length, oE.epsilon = Eq.epsilon, oE.Nlq(qq, !1, void 0, !1, void 0, !0).pickedPoint
+       Ap: Gu,
+       bOb: function(bb, ub) {
+         return Ku.origin.mD(ub.origin), Ku.direction.mD(ub.direction), Ku.length = ub.length, Ku.epsilon = ub.epsilon, Ku.bOb(bb, !1, void 0, !1, void 0, !0).pickedPoint
```

#### 114. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L692` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L692) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L692)

```diff
-   40869: (qq, Eq, gq) => {
+   40574: (bb, ub, hb) => {
```

#### 115. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L695-L696` → after: `L695-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L695-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L695-L696) · [Before (L695-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L695-L696)

```diff
-       h: () => Hq,
-       i: () => Xq
+       i: () => lb,
+       l: () => Fb
```

#### 116. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L698-L711` → after: `L698-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L698-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L698-L711) · [Before (L698-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L698-L711)

```diff
-     var Yq = gq(40003),
-       lq = gq(40878),
-       Oq = gq(40910),
-       mq = gq(40883),
-       xq = gq(37803),
-       Aq = gq(37815),
-       cq = gq(37818),
-       uq = gq(37821),
-       Bq = gq(37242),
-       Wq = gq(37244),
-       Nq = gq(40889),
-       aq = gq(37230),
-       Vq = gq(37233),
-       dq = gq(37220);
+     var Bb = hb(39705),
+       Ob = hb(40580),
+       Gb = hb(40610),
+       Ub = hb(40586),
+       Lb = hb(37425),
+       Yb = hb(37436),
+       Sb = hb(37438),
+       ab = hb(37444),
+       Hb = hb(36846),
+       wb = hb(36855),
+       Zb = hb(40588),
+       Xb = hb(36830),
+       pb = hb(36836),
+       ob = hb(36814);
```

#### 117. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L717` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L717) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L717)

```diff
-         LN: qq
+         JZ: bb
```

#### 118. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L722` → after: `L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L722) · [Before (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L722)

```diff
-       const Eq = class extends Nq.d {
+       const ub = class extends Zb.c {
```

#### 119. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L724-L725` → after: `L724-L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L724-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L724-L725) · [Before (L724-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L724-L725)

```diff
-             const Yq = (0, Vq.T)(Eq),
-               lq = Yq && (0, Vq.u)(Yq, qq.name);
+             const Bb = (0, pb._)(ub),
+               Ob = Bb && (0, pb.v)(Bb, bb.name);
```

#### 120. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L736-L737` → after: `L736-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L736-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L736-L737) · [Before (L736-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L736-L737)

```diff
-         gq = (0, aq.k)(qq);
-       for (const [Yq, lq] of Object.entries(aq.d)) {
+         hb = (0, Xb.i)(bb);
+       for (const [Bb, Ob] of Object.entries(Xb.b)) {
```

#### 121. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L750-L752` → after: `L750-L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L750-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L750-L752) · [Before (L750-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L750-L752)

```diff
-     class oq extends(Hq(xq.e)) {}
-     var Pq = gq(39585),
-       Qq = gq(40898);
+     class Kb extends(lb(Lb.b)) {}
+     var Wb = hb(39277),
+       Cb = hb(40592);
```

#### 122. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L766-L767` → after: `L766-L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L766-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L766-L767) · [Before (L766-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L766-L767)

```diff
-         } = qq.getSize(), Oq = Math.round(lq / Yq), xq = Eq && Eq.byteLength === Yq * Yq * Oq * 4 ? Eq : qq._readPixelsSync();
-         return new Qq.c(xq, Yq, Yq, Oq, Pq.b.TEXTUREFORMAT_RGBA, gq, !0, !1, mq.d.NEAREST_NEAREST_MIPLINEAR)
+         } = bb.getSize(), Gb = Math.round(Ob / Bb), Lb = ub && ub.byteLength === Bb * Bb * Gb * 4 ? ub : bb._readPixelsSync();
+         return new Cb.d(Lb, Bb, Bb, Gb, Wb.c.TEXTUREFORMAT_RGBA, hb, !0, !1, Ub.c.NEAREST_NEAREST_MIPLINEAR)
```

#### 123. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L772-L773` → after: `L772-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L772-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L772-L773) · [Before (L772-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L772-L773)

```diff
-     var rq = gq(37823);
-     class vq extends(Hq(Aq.j)) {
+     var jb = hb(37449);
+     class nb extends(lb(Yb.h)) {
```

#### 124. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L778` → after: `L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L778) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L778)

```diff
-               console.error(`Failed to build texture array for atlas ${Eq}`, qq)
+               console.error(`Failed to build texture array for atlas ${ub}`, bb)
```

#### 125. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L790-L791` → after: `L790-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L790-L791) · [Before (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L790-L791)

```diff
-           xq = lq.useWebGL2 ? await tq(qq, null !== (gq = null === (Yq = lq.sources.pixels) || void 0 === Yq ? void 0 : Yq[Eq]) && void 0 !== gq ? gq : null, this._material.ZJ()) : null;
-         (0, rq.e)(this._material, lq, Eq, xq, Oq, Math.round(mq / Oq), this._material.shaderLanguage)
+           Lb = Ob.useWebGL2 ? await rb(bb, null !== (hb = null === (Bb = Ob.sources.pixels) || void 0 === Bb ? void 0 : Bb[ub]) && void 0 !== hb ? hb : null, this._material.ZN()) : null;
+         (0, jb.b)(this._material, Ob, ub, Lb, Gb, Math.round(Ub / Gb), this._material.shaderLanguage)
```

#### 126. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L794-L803` → after: `L794-L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L794-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L794-L803) · [Before (L794-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L794-L803)

```diff
-     var hq = gq(40901),
-       nq = gq(40055),
-       bq = gq(37131),
-       iq = gq(40905),
-       Zq = gq(40176),
-       fq = gq(40040),
-       Mq = gq(40857),
-       Tq = gq(37586),
-       zq = gq(40908);
-     class Sq extends hq.e {
+     var Db = hb(40598),
+       xb = hb(39752),
+       zb = hb(36720),
+       gb = hb(40604),
+       ib = hb(39862),
+       vb = hb(39736),
+       tb = hb(40551),
+       Jb = hb(37217),
+       eb = hb(40608);
+     class Nb extends Db.d {
```

#### 127. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L813-L818` → after: `L813-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L813-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L813-L818) · [Before (L813-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L813-L818)

```diff
-       Mesh: iq.c,
-       TransformNode: Mq.e,
-       IN: hq.e,
-       VertexBuffer: hq.f,
-       BoundingInfo: nq.d,
-       Na: bq.Na,
+       Mesh: gb.b,
+       TransformNode: tb.d,
+       VZ: Db.d,
+       VertexBuffer: Db.e,
+       BoundingInfo: xb.e,
+       YX: zb.YX,
```

#### 128. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L821` → after: `L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L821) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L821)

```diff
-       VertexData: Zq.d,
+       VertexData: ib.c,
```

#### 129. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L823-L824` → after: `L823-L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L823-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L823-L824) · [Before (L823-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L823-L824)

```diff
-       meshFromArrays: zq.f,
-       plainMeshFromArrays: zq.i
+       meshFromArrays: eb.e,
+       plainMeshFromArrays: eb.h
```

#### 130. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L826-L828` → after: `L826-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L826-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L826-L828) · [Before (L826-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L826-L828)

```diff
-     (0, Tq.e)(pq);
-     var Gq = gq(37429);
-     class Lq extends(Hq(uq.g)) {
+     (0, Jb.f)(sb);
+     var Mb = hb(37054);
+     class mb extends(lb(ab.i)) {
```

#### 131. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L834-L836` → after: `L834-L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L834-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L834-L836) · [Before (L834-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L834-L836)

```diff
-           const Yq = (0, Vq.T)(qq);
-           Yq && (Yq.disableLighting = !0, (0, Vq.Q)(Yq))
-         }(0, Gq.l)(qq)
+           const Bb = (0, pb._)(bb);
+           Bb && (Bb.disableLighting = !0, (0, pb.Y)(Bb))
+         }(0, Mb.h)(bb)
```

#### 132. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L839` → after: `L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L839) · [Before (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L839)

```diff
-         (0, Gq.n)(this._material), super.dispose(qq)
+         (0, Mb.i)(this._material), super.dispose(bb)
```

#### 133. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L851` → after: `L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L851) · [Before (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L851)

```diff
-     }(0, uq.c)({
+     }(0, ab.f)({
```

#### 134. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L854-L856` → after: `L854-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L854-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L854-L856) · [Before (L854-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L854-L856)

```diff
-     var kq = gq(37313),
-       Rq = gq(37601);
-     const Uq = new RegExp(`^#define ${cq.c}\\s*$`, "m");
+     var Pb = hb(36928),
+       qb = hb(37230);
+     const Eb = new RegExp(`^#define ${Sb.e}\\s*$`, "m");
```

#### 135. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L859` → after: `L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L859) · [Before (L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L859)

```diff
-         super(qq, Eq), this.eN = !1, Eq.ditherOnlyWhileFading && (Rq.g.add(qq), this.prewarmDitherTwins(qq))
+         super(bb, ub), this.FZ = !1, ub.ditherOnlyWhileFading && (qb.h.add(bb), this.prewarmDitherTwins(bb))
```

#### 136. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L871` → after: `L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L871) · [Before (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L871)

```diff
-           Oq && !Uq.test(Yq.defines) && qq.ZJ().onAfterRenderObservable.addOnce((() => {
+           Gb && !Eb.test(Bb.defines) && bb.ZN().onAfterRenderObservable.addOnce((() => {
```

#### 137. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L877` → after: `L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L877) · [Before (L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L877)

```diff
-         if (this.eN || qq.bM()) return !1;
+         if (this.FZ || bb.tC()) return !1;
```

#### 138. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L888` → after: `L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L888) · [Before (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L888)

```diff
-         this.eN = !0, super.dispose(qq)
+         this.FZ = !0, super.dispose(bb)
```

#### 139. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L896` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L896) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L896)

```diff
-     Xq(xq.e, oq), Xq(Aq.j, vq), Xq(cq.j, Fq), Xq(uq.g, Lq), (0, Bq.e)({
+     Fb(Lb.b, Kb), Fb(Yb.h, nb), Fb(Sb.j, yb), Fb(ab.i, mb), (0, Hb.c)({
```

#### 140. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L899` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L899) · [Before (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L899)

```diff
-         return (0, kq.t)(qq, gq), gq.detailMap._pluginDefineNames
+         return (0, Pb.q)(bb, hb), hb.detailMap._pluginDefineNames
```

#### 141. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L902` → after: `L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L902) · [Before (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L902)

```diff
-         (0, kq.W)(qq.mirror, Eq, gq)
+         (0, Pb.X)(bb.mirror, ub, hb)
```

#### 142. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L906)

```diff
-         if (!Yq) throw new Error(`${Eq.feature.name} has no plugin class (registerPluginClass)`);
+         if (!Bb) throw new Error(`${ub.feature.name} has no plugin class (registerPluginClass)`);
```

#### 143. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L919-L920` → after: `L919-L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L919-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L919-L920) · [Before (L919-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L919-L920)

```diff
-           const gq = new mq.d(Yq, Eq, lq, Oq, xq);
-           return Object.assign(gq, cq), void(0, Wq.B)(qq, gq)
+           const hb = new Ub.c(Bb, ub, Ob, Gb, Lb);
+           return Object.assign(hb, Sb), void(0, wb.F)(bb, hb)
```

#### 144. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L925` → after: `L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L925) · [Before (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L925)

```diff
-               Eq(new Error(`${Aq.context}: ${(null===gq||void 0===gq?void 0:gq.message)||qq||"Failed to load texture"}`))
+               ub(new Error(`${Yb.context}: ${(null===hb||void 0===hb?void 0:hb.message)||bb||"Failed to load texture"}`))
```

#### 145. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L942-L943` → after: `L942-L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L942-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L942-L943) · [Before (L942-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L942-L943)

```diff
-           jq = new mq.d(null, Eq, dq);
-         kq.v.set(jq, Bq), Object.assign(jq, cq), jq.updateURL(Yq, aq);
+           Ab = new Ub.c(null, ub, ob);
+         Pb.t.set(Ab, Hb), Object.assign(Ab, Sb), Ab.updateURL(Bb, Xb);
```

#### 146. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L945` → after: `L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L945) · [Before (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L945)

```diff
-         Hq && (Hq.label = Vq), qq.uvSet = jq.coordinatesIndex, qq.matrix.set((0, kq.R)(jq)), (0, Wq.B)(qq, jq)
+         lb && (lb.label = pb), bb.uvSet = Ab.coordinatesIndex, bb.matrix.set((0, Pb.P)(Ab)), (0, wb.F)(bb, Ab)
```

#### 147. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L956-L959` → after: `L956-L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L956-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L956-L959) · [Before (L956-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L956-L959)

```diff
-         } = qq.sampler, uq = cq === (0, Wq.v)(xq) ? null : () => {
-           (0, kq.Q)(Bq, cq)
-         }, Bq = new lq.e(Yq, Eq, null, xq, Oq, uq, null, (0, Wq.u)(Aq));
-         Bq.coordinatesMode = mq.d.SKYBOX_MODE, (0, Wq.B)(qq, Bq)
+         } = bb.sampler, ab = Sb === (0, wb.w)(Lb) ? null : () => {
+           (0, Pb.M)(Hb, Sb)
+         }, Hb = new Ob.b(Bb, ub, null, Lb, Gb, ab, null, (0, wb.v)(Yb));
+         Hb.coordinatesMode = Ub.c.SKYBOX_MODE, (0, wb.F)(bb, Hb)
```

#### 148. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L968` → after: `L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L968) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L968)

```diff
-           wrap: uq = mq.d.CLAMP_ADDRESSMODE
+           wrap: ab = Ub.c.CLAMP_ADDRESSMODE
```

#### 149. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L975-L976` → after: `L975-L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L975-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L975-L976) · [Before (L975-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L975-L976)

```diff
-         const Wq = (0, kq.F)(Bq);
-         return (0, kq.H)(Wq, Bq), Wq
+         const wb = (0, Pb.A)(Hb);
+         return (0, Pb.E)(wb, Hb), wb
```

#### 150. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L980` → after: `L980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L980) · [Before (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L980)

```diff
-   40908: (qq, Eq, gq) => {
+   40608: (bb, ub, hb) => {
```

#### 151. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L983-L984` → after: `L983-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L983-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L983-L984) · [Before (L983-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L983-L984)

```diff
-       f: () => Bq,
-       i: () => Wq
+       e: () => Hb,
+       h: () => wb
```

#### 152. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L986-L993` → after: `L986-L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L986-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L986-L993) · [Before (L986-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L986-L993)

```diff
-     var Yq = gq(40901),
-       lq = gq(39817),
-       Oq = gq(40055),
-       mq = gq(40180),
-       xq = gq(40905),
-       Aq = gq(40176),
-       cq = gq(37481);
-     class uq extends mq.d {
+     var Bb = hb(40598),
+       Ob = hb(39533),
+       Gb = hb(39752),
+       Ub = hb(39869),
+       Lb = hb(40604),
+       Yb = hb(39862),
+       Sb = hb(37110);
+     class ab extends Ub.b {
```

#### 153. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1001` → after: `L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1001) · [Before (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1001)

```diff
-         (0, cq.q)(qq), this.model = qq, null === (Eq = this.onLinked) || void 0 === Eq || Eq.call(this, qq)
+         (0, Sb.n)(bb), this.model = bb, null === (ub = this.onLinked) || void 0 === ub || ub.call(this, bb)
```

#### 154. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1028` → after: `L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1028) · [Before (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1028)

```diff
-         this.link(new cq.h(qq, Eq, this.getTotalVertices(), new Float64Array(gq.bYq()), new Float64Array(Yq.bYq())))
+         this.link(new Sb.h(bb, ub, this.getTotalVertices(), new Float64Array(hb.ZBb()), new Float64Array(Bb.ZBb())))
```

#### 155. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1032-L1033` → after: `L1032-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1032-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1032-L1033) · [Before (L1032-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1032-L1033)

```diff
-         const Eq = new uq(qq, this.ZJ()),
-           gq = this.iYq(void 0, !0);
+         const ub = new ab(bb, this.ZN()),
+           hb = this.XBb(void 0, !0);
```

#### 156. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1048-L1049` → after: `L1048-L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1048-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1048-L1049) · [Before (L1048-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1048-L1049)

```diff
-           const Wq = qq.getIsInstanced() ? (gq instanceof Array ? 4 * gq.length : gq.byteLength) / uq : this.getTotalVertices(),
-             Nq = (0, lq.r)(gq, xq, Aq, cq, uq, Wq, !0),
+           const wb = bb.getIsInstanced() ? (hb instanceof Array ? 4 * hb.length : hb.byteLength) / ab : this.getTotalVertices(),
+             Zb = (0, Ob.s)(hb, Lb, Yb, Sb, ab, wb, !0),
```

#### 157. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1058)

```diff
-           Eq.setVerticesBuffer(new Yq.f(this.Ba(), Nq, Oq, aq), Wq)
+           ub.setVerticesBuffer(new Bb.e(this.UX(), Zb, Gb, Xb), wb)
```

#### 158. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1060` → after: `L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1060) · [Before (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1060)

```diff
-         return Eq._updatable = mq, Eq._boundingInfo = new Oq.d(this.extend.minimum, this.extend.maximum), Eq.relink(), Eq
+         return ub._updatable = Ub, ub._boundingInfo = new Gb.e(this.extend.minimum, this.extend.maximum), ub.relink(), ub
```

#### 159. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1063-L1065` → after: `L1063-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1063-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1063-L1065) · [Before (L1063-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1063-L1065)

```diff
-         const Aq = qq[0].ZJ(),
-           cq = new xq.c(qq[0].name + "_merged", Aq),
-           Bq = new uq(mq.d.RandomId(), Aq, void 0, !1, cq);
+         const Yb = bb[0].ZN(),
+           Sb = new Lb.b(bb[0].name + "_merged", Yb),
+           Hb = new ab(Ub.b.RandomId(), Yb, void 0, !1, Sb);
```

#### 160. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1067` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1067) · [Before (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1067)

```diff
-           if (!xq.c.MergeMeshes(qq, Eq, gq, cq, lq, Oq)) return cq.dispose(), null
+           if (!Lb.b.MergeMeshes(bb, ub, hb, Sb, Ob, Gb)) return Sb.dispose(), null
```

#### 161. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1089-L1090` → after: `L1089-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1089-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1089-L1090) · [Before (L1089-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1089-L1090)

```diff
-       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new xq.c(qq, gq);
-       const lq = (0, cq.n)(Eq),
+       let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Lb.b(bb, hb);
+       const Ob = (0, Sb.l)(ub),
```

#### 162. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1098-L1100` → after: `L1098-L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1098-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1098-L1100) · [Before (L1098-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1098-L1100)

```diff
-         Vq = new Aq.d;
-       Vq.positions = Oq, Vq.normals = null !== Bq && void 0 !== Bq ? Bq : null, Vq.uvs = null !== Wq && void 0 !== Wq ? Wq : null, Vq.indices = Nq;
-       const dq = new uq(mq.d.RandomId(), gq, Vq, !1, Yq);
+         pb = new Yb.c;
+       pb.positions = Gb, pb.normals = null !== Hb && void 0 !== Hb ? Hb : null, pb.uvs = null !== wb && void 0 !== wb ? wb : null, pb.indices = Zb;
+       const ob = new ab(Ub.b.RandomId(), hb, pb, !1, Bb);
```

#### 163. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1111` → after: `L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1111) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1111)

```diff
-       const lq = new xq.c(qq, gq),
+       const Ob = new Lb.b(bb, hb),
```

#### 164. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1118` → after: `L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1118) · [Before (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1118)

```diff
-       return Object.assign(new Aq.d, {
+       return Object.assign(new Yb.c, {
```

#### 165. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1126` → after: `L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1126) · [Before (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1126)

```diff
-   41355: (qq, Eq, gq) => {
+   41072: (bb, ub, hb) => {
```

#### 166. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1128-L1131` → after: `L1128-L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1128-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1128-L1131) · [Before (L1128-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1128-L1131)

```diff
-       b: () => dq,
-       e: () => xq,
-       h: () => mq,
-       l: () => cq
+       c: () => ob,
+       d: () => Lb,
+       f: () => Ub,
+       j: () => Sb
```

#### 167. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1133-L1135` → after: `L1133-L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1133-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1133-L1135) · [Before (L1133-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1133-L1135)

```diff
-     var Yq = gq(37286),
-       lq = gq(38677),
-       Oq = gq(38671);
+     var Bb = hb(36889),
+       Ob = hb(38329),
+       Gb = hb(38323);
```

#### 168. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1138` → after: `L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1138) · [Before (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1138)

```diff
-       const lq = Oq.w;
+       const Ob = Gb.v;
```

#### 169. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1146` → after: `L1146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1146) · [Before (L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1146)

```diff
-         Eq[lq.colorPositions + Oq] = qq.gradient, qq.color1.toArray(Eq, lq.color1 + 4 * Oq), (null !== (Aq = qq.color2) && void 0 !== Aq ? Aq : qq.color1).toArray(Eq, lq.color2 + 4 * Oq)
+         ub[Ob.colorPositions + Gb] = bb.gradient, bb.color1.toArray(ub, Ob.color1 + 4 * Gb), (null !== (Yb = bb.color2) && void 0 !== Yb ? Yb : bb.color1).toArray(ub, Ob.color2 + 4 * Gb)
```

#### 170. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1149` → after: `L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1149) · [Before (L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1149)

```diff
-         uq = Wq(qq, cq, "JV", Yq);
+         ab = wb(bb, Sb, "Mp", Bb);
```

#### 171. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1151` → after: `L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1151) · [Before (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1151)

```diff
-       for (let Oq = 0; Oq < uq; Oq++) Hq(Eq, lq.JV + 4 * Oq, cq[Nq(cq, Oq)]);
+       for (let Gb = 0; Gb < ab; Gb++) lb(ub, Ob.Mp + 4 * Gb, Sb[Zb(Sb, Gb)]);
```

#### 172. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1161` → after: `L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1161) · [Before (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1161)

```diff
-         texels: new Uint8Array(4 * Oq.m)
+         texels: new Uint8Array(4 * Gb.j)
```

#### 173. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1168` → after: `L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1168) · [Before (L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1168)

```diff
-         for (let gq = 0; gq < Oq.m; gq++) lq.k.GetCurrentGradient(gq / Oq.m, qq, ((qq, Eq, gq) => {
+         for (let hb = 0; hb < Gb.j; hb++) Ob.k.GetCurrentGradient(hb / Gb.j, bb, ((bb, ub, hb) => {
```

#### 174. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1185` → after: `L1185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1185) · [Before (L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1185)

```diff
-       return Eq ? Eq.length > Oq.b ? (Yq(`particleStops:${gq}`, `GPU particles use the first 2 and last ${Oq.b-2} of more than ${Oq.b} ${gq} gradient stops (${qq.name})`), Oq.b) : Eq.length : 0
+       return ub ? ub.length > Gb.b ? (Bb(`particleStops:${hb}`, `GPU particles use the first 2 and last ${Gb.b-2} of more than ${Gb.b} ${hb} gradient stops (${bb.name})`), Gb.b) : ub.length : 0
```

#### 175. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1189` → after: `L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1189) · [Before (L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1189)

```diff
-       return Eq < 2 || qq.length <= Oq.b ? Eq : qq.length - Oq.b + Eq
+       return ub < 2 || bb.length <= Gb.b ? ub : bb.length - Gb.b + ub
```

#### 176. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1191` → after: `L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1191) · [Before (L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1191)

```diff
-     const aq = new Float32Array(Oq.r),
+     const Xb = new Float32Array(Gb.p),
```

#### 177. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1207` → after: `L1207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1207) · [Before (L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1207)

```diff
-       qq[Eq] = gq.gradient, qq[Eq + 1] = gq.factor1, qq[Eq + 2] = null !== (Yq = gq.factor2) && void 0 !== Yq ? Yq : gq.factor1
+       bb[ub] = hb.gradient, bb[ub + 1] = hb.factor1, bb[ub + 2] = null !== (Bb = hb.factor2) && void 0 !== Bb ? Bb : hb.factor1
```

#### 178. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1210` → after: `L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1210) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1210)

```diff
-   41352: (qq, Eq, gq) => {
+   41065: (bb, ub, hb) => {
```

#### 179. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1219` → after: `L1219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/babylon-backend.js#L1219) · [Before (L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/babylon-backend.js#L1219)

```diff
-       e: () => Yq
+       d: () => Bb
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/blockFaceTable.js` (bbb6l5.0244a119 → halsg.2bd74967)

- **File**: `bundles/bloxd.io/chunks/js/blockFaceTable.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-b8d2cff165f2f6c9ab69fd9b5a3062b7590431fc863af19dafe1f2caf4651fcd)

#### 1. `bundles/bloxd.io/chunks/js/blockFaceTable.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-b8d2cff165f2f6c9ab69fd9b5a3062b7590431fc863af19dafe1f2caf4651fcdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-b8d2cff165f2f6c9ab69fd9b5a3062b7590431fc863af19dafe1f2caf4651fcd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockFaceTable.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockFaceTable.js#L4)

```diff
-   42383: (qq, Eq, gq) => {
+   42035: (bb, ub, hb) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (bbb6l5.0244a119 → halsg.2bd74967)

- **File**: `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d)

#### 1. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L4)

```diff
-   36439: (qq, Eq, gq) => {
+   35998: (bb, ub, hb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L10` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L10) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L10)

```diff
-     var Yq = gq(36448);
+     var Bb = hb(36006);
```

#### 3. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L74)

```diff
-     var Wq = gq(36454);
+     var wb = hb(36010);
```

#### 4. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L81)

```diff
-       return `${Eq}|${gq}|${qq}`
+       return `${ub}|${hb}|${bb}`
```

#### 5. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L109)

```diff
-         return null !== (lq = await (0, Wq.d)(Oq, Eq, mq)) && void 0 !== lq ? lq : (await tq(Oq, Eq, mq)).toDataURL()
+         return null !== (Ob = await (0, wb.d)(Gb, ub, Ub)) && void 0 !== Ob ? Ob : (await rb(Gb, ub, Ub)).toDataURL()
```

#### 6. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L146)

```diff
-             rect: Eq.cropFaces ? Oq : [0, 0, 1, 1],
+             rect: ub.cropFaces ? Gb : [0, 0, 1, 1],
```

#### 7. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L158` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L158) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L158)

```diff
-         return (0, Yq.e)(Hq, gq, xq, (qq => 1 === oq[qq])), Hq
+         return (0, Bb.h)(lb, hb, Lb, (bb => 1 === Kb[bb])), lb
```

#### 8. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L164)

```diff
-         return "SlabBlock" === qq ? Aq : "StairsBlock" === qq ? cq : xq
+         return "SlabBlock" === bb ? Yb : "StairsBlock" === bb ? Sb : Lb
```

#### 9. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L174` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L174)

```diff
-         const Eq = await (0, Wq.h)(qq),
+         const ub = await (0, wb.j)(bb),
```

#### 10. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L187` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L187) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L187)

```diff
-   36454: (qq, Eq, gq) => {
+   36010: (bb, ub, hb) => {
```

#### 11. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L190-L191` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L190-L191) · [Before (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L190-L191)

```diff
-       e: () => nq,
-       h: () => oq
+       h: () => xb,
+       j: () => Kb
```

#### 12. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L193-L195` → after: `L193-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L193-L195) · [Before (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L193-L195)

```diff
-     var Yq = gq(278),
-       lq = gq(96);
-     const Oq = new(gq(36461).d)(new URL(gq.p + gq.u(3), gq.b), {
+     var Bb = hb(275),
+       Ob = hb(86);
+     const Gb = new(hb(36018).c)(new URL(hb.p + hb.u(3), hb.b), {
```

#### 13. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L199-L200` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L199-L200) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L199-L200)

```diff
-     var mq = gq(1758),
-       xq = gq(3094);
+     var Ub = hb(1672),
+       Lb = hb(2991);
```

#### 14. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L219` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L219) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L219)

```diff
-           gq(new Error(`A block icon's texture did not load: ${qq.slice(0,100)}`))
+           hb(new Error(`A block icon's texture did not load: ${bb.slice(0,100)}`))
```

#### 15. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L227` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L227) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L227)

```diff
-       Nq || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${qq}`), Nq = !0, null === (Eq = uq) || void 0 === Eq || Eq.terminate(), uq = null, Bq = null, jq.clear(), Hq.clear();
+       Zb || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${bb}`), Zb = !0, null === (ub = ab) || void 0 === ub || ub.terminate(), ab = null, Hb = null, Ab.clear(), lb.clear();
```

#### 16. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L235)

```diff
-         if ("page" === Yq.c.ios_icon_worker_v1 && (0, lq.isWebKit)()) return;
+         if ("page" === Bb.b.ios_icon_worker_v1 && (0, Ob.isWebKit)()) return;
```

#### 17. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L241)

```diff
-           return void Pq(`did not start (${String(xq)})`)
+           return void Wb(`did not start (${String(Lb)})`)
```

#### 18. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L252)

```diff
-           else if ("failed" === gq.type) Pq(`failed a draw (${gq.message})`);
+           else if ("failed" === hb.type) Wb(`failed a draw (${hb.message})`);
```

#### 19. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L258)

```diff
-           Eq.preventDefault(), Pq(`stopped (${Eq.message||"its script did not load or run"})`), qq()
+           ub.preventDefault(), Wb(`stopped (${ub.message||"its script did not load or run"})`), bb()
```

#### 20. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L260-L261` → after: `L260-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L260-L261) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L260-L261)

```diff
-         const gq = `did not start in ${cq/1e3} s`;
-         await (0, mq.k)(Eq, cq, gq).catch((() => {
+         const hb = `did not start in ${Sb/1e3} s`;
+         await (0, Ub.q)(ub, Sb, hb).catch((() => {
```

#### 21. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L272-L273` → after: `L272-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L272-L273) · [Before (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L272-L273)

```diff
-         Eq = `did not answer in ${Aq/1e3} s`;
-       (0, mq.k)(qq, Aq, Eq).then((() => {
+         ub = `did not answer in ${Yb/1e3} s`;
+       (0, Ub.q)(bb, Yb, ub).then((() => {
```

#### 22. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L296)

```diff
-           Pq(`could not take an image (${String(lq)})`)
+           Wb(`could not take an image (${String(Ob)})`)
```

#### 23. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L358` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L358) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L358)

```diff
-   36448: (qq, Eq, gq) => {
+   36006: (bb, ub, hb) => {
```

#### 24. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L361-L362` → after: `L361-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L361-L362) · [Before (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L361-L362)

```diff
-       e: () => xq,
-       h: () => mq
+       h: () => Lb,
+       j: () => Ub
```

#### 25. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L413` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L413) · [Before (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L413)

```diff
-           if (!Oq(qq, lq)) qq: for (let Yq = -gq; Yq <= gq; Yq++) {
+           if (!Gb(bb, Ob)) bb: for (let Bb = -hb; Bb <= hb; Bb++) {
```

#### 26. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L424` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L424) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L424)

```diff
-   36461: (qq, Eq, gq) => {
+   36018: (bb, ub, hb) => {
```

#### 27. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L426` → after: `L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L426) · [Before (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L426)

```diff
-       d: () => lq
+       c: () => Ob
```

#### 28. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L460` → after: `L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L460) · [Before (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L460)

```diff
-           if (Eq > 0 && gq.searchParams.set("cache-bust", `${Date.now()}-${Eq}`), await this.fetchWhole(gq, qq)) return void(this.scriptUrl = gq);
+           if (ub > 0 && hb.searchParams.set("cache-bust", `${Date.now()}-${ub}`), await this.fetchWhole(hb, bb)) return void(this.scriptUrl = hb);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/blockIconWorker.js` (bbb6l5.0244a119 → halsg.2bd74967)

- **File**: `bundles/bloxd.io/chunks/js/blockIconWorker.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665d)

#### 1. `bundles/bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665dR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665d) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconWorker.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconWorker.js#L45)

```diff
-         if (!Oq(Eq, qq)) qq: for (let lq = -Yq; lq <= Yq; lq++) {
+         if (!Gb(ub, bb)) bb: for (let Ob = -Bb; Ob <= Bb; Ob++) {
```

#### 2. `bundles/bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L120` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665dR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665d) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconWorker.js#L120) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconWorker.js#L120)

```diff
-     if (void 0 === Yq) throw new Error(`no ${gq} was sent for ${Eq.slice(0,100)}`);
+     if (void 0 === Bb) throw new Error(`no ${hb} was sent for ${ub.slice(0,100)}`);
```

#### 3. `bundles/bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665dR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665d) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconWorker.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconWorker.js#L146)

```diff
-             Eq(null !== (qq = gq.error) && void 0 !== qq ? qq : new Error("the icon did not encode"))
+             ub(null !== (bb = hb.error) && void 0 !== bb ? bb : new Error("the icon did not encode"))
```

#### 4. `bundles/bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665dR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665d) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconWorker.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconWorker.js#L213)

```diff
-               rect: Oq.cropFaces ? lq : [0, 0, 1, 1],
+               rect: Gb.cropFaces ? Ob : [0, 0, 1, 1],
```

#### 5. `bundles/bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L231` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665dR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665d) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockIconWorker.js#L231) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockIconWorker.js#L231)

```diff
-           return "SlabBlock" === qq ? mq : "StairsBlock" === qq ? xq : Oq
+           return "SlabBlock" === bb ? Ub : "StairsBlock" === bb ? Lb : Gb
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/blockModelIcons.js` (bbb6l5.0244a119 → halsg.2bd74967)

- **File**: `bundles/bloxd.io/chunks/js/blockModelIcons.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035)

#### 1. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L4-L35` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L4) · [Before (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L4-L35)

```diff
-   36475: (qq, Eq, gq) => {
-     var Yq = {
-       "./Artisan Bench.json": [40921, 266],
-       "./Aspen Item Pedestal.json": [40927, 267],
-       "./Cedar Item Pedestal.json": [40929, 268],
-       "./Cherry Item Pedestal.json": [40935, 269],
-       "./Furnace.json": [40940, 270],
-       "./Jungle Item Pedestal.json": [40947, 271],
-       "./Mango Item Pedestal.json": [40952, 272],
-       "./Palm Item Pedestal.json": [40956, 273],
-       "./Pear Item Pedestal.json": [40963, 274],
-       "./Pine Item Pedestal.json": [40965, 275],
-       "./Plum Item Pedestal.json": [40973, 276],
-       "./Potion Table.json": [40975, 277],
-       "./Salvaging Table.json": [40977, 278],
-       "./Showcase.json": [40980, 279],
- ... (16 more removed lines; see GitHub link above)
+   36020: (bb, ub, hb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L40-L42` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L9-L11) · [Before (L40-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L40-L42)

```diff
-     var Yq = gq(36454),
-       lq = gq(36448);
-     const Oq = gq(36475),
+     var Bb = hb(36010),
+       Ob = hb(36006);
+     const Gb = hb(36025),
```

#### 3. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L79` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L48) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L79)

```diff
-       return mq.width = Eq, mq.height = Eq, mq.getContext("2d").putImageData(new ImageData((0, lq.h)(Yq, Oq, Eq, gq), Eq, Eq), 0, 0), mq.toDataURL()
+       return Ub.width = ub, Ub.height = ub, Ub.getContext("2d").putImageData(new ImageData((0, Ob.j)(Bb, Gb, ub, hb), ub, ub), 0, 0), Ub.toDataURL()
```

#### 4. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L83` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L52) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L83)

```diff
-       const lq = `${Eq}|${gq}|${qq}`;
+       const Ob = `${ub}|${hb}|${bb}`;
```

#### 5. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L85` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L54) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L85)

```diff
-       return Oq || (Oq = (0, Yq.e)(qq, (() => uq(qq)), Eq, gq).then((Yq => null !== Yq && void 0 !== Yq ? Yq : Bq(qq, Eq, gq))), Oq.catch((() => {
+       return Gb || (Gb = (0, Bb.h)(bb, (() => ab(bb)), ub, hb).then((Bb => null !== Bb && void 0 !== Bb ? Bb : Hb(bb, ub, hb))), Gb.catch((() => {
```

#### 6. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L90` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L59) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L90)

```diff
-   36454: (qq, Eq, gq) => {
+   36010: (bb, ub, hb) => {
```

#### 7. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L93-L94` → after: `L62-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L62-L63) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L93-L94)

```diff
-       e: () => nq,
-       h: () => oq
+       h: () => xb,
+       j: () => Kb
```

#### 8. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L96-L98` → after: `L65-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L65-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L65-L67) · [Before (L96-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L96-L98)

```diff
-     var Yq = gq(278),
-       lq = gq(96);
-     const Oq = new(gq(36461).d)(new URL(gq.p + gq.u(3), gq.b), {
+     var Bb = hb(275),
+       Ob = hb(86);
+     const Gb = new(hb(36018).c)(new URL(hb.p + hb.u(3), hb.b), {
```

#### 9. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L102-L103` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L71-L72) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L102-L103)

```diff
-     var mq = gq(1758),
-       xq = gq(3094);
+     var Ub = hb(1672),
+       Lb = hb(2991);
```

#### 10. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L122` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L91) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L122)

```diff
-           gq(new Error(`A block icon's texture did not load: ${qq.slice(0,100)}`))
+           hb(new Error(`A block icon's texture did not load: ${bb.slice(0,100)}`))
```

#### 11. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L130` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L99) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L130)

```diff
-       Nq || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${qq}`), Nq = !0, null === (Eq = uq) || void 0 === Eq || Eq.terminate(), uq = null, Bq = null, jq.clear(), Hq.clear();
+       Zb || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${bb}`), Zb = !0, null === (ub = ab) || void 0 === ub || ub.terminate(), ab = null, Hb = null, Ab.clear(), lb.clear();
```

#### 12. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L138` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L107) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L138)

```diff
-         if ("page" === Yq.c.ios_icon_worker_v1 && (0, lq.isWebKit)()) return;
+         if ("page" === Bb.b.ios_icon_worker_v1 && (0, Ob.isWebKit)()) return;
```

#### 13. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L144` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L113) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L144)

```diff
-           return void Pq(`did not start (${String(xq)})`)
+           return void Wb(`did not start (${String(Lb)})`)
```

#### 14. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L155` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L124) · [Before (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L155)

```diff
-           else if ("failed" === gq.type) Pq(`failed a draw (${gq.message})`);
+           else if ("failed" === hb.type) Wb(`failed a draw (${hb.message})`);
```

#### 15. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L161` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L130) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L161)

```diff
-           Eq.preventDefault(), Pq(`stopped (${Eq.message||"its script did not load or run"})`), qq()
+           ub.preventDefault(), Wb(`stopped (${ub.message||"its script did not load or run"})`), bb()
```

#### 16. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L163-L164` → after: `L132-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L132-L133) · [Before (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L163-L164)

```diff
-         const gq = `did not start in ${cq/1e3} s`;
-         await (0, mq.k)(Eq, cq, gq).catch((() => {
+         const hb = `did not start in ${Sb/1e3} s`;
+         await (0, Ub.q)(ub, Sb, hb).catch((() => {
```

#### 17. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L175-L176` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L144-L145) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L175-L176)

```diff
-         Eq = `did not answer in ${Aq/1e3} s`;
-       (0, mq.k)(qq, Aq, Eq).then((() => {
+         ub = `did not answer in ${Yb/1e3} s`;
+       (0, Ub.q)(bb, Yb, ub).then((() => {
```

#### 18. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L199` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L168) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L199)

```diff
-           Pq(`could not take an image (${String(lq)})`)
+           Wb(`could not take an image (${String(Ob)})`)
```

#### 19. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L261` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L230) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L261)

```diff
-   36448: (qq, Eq, gq) => {
+   36006: (bb, ub, hb) => {
```

#### 20. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L264-L265` → after: `L233-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L233-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L233-L234) · [Before (L264-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L264-L265)

```diff
-       e: () => xq,
-       h: () => mq
+       h: () => Lb,
+       j: () => Ub
```

#### 21. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L316` → after: `L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L285) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L316)

```diff
-           if (!Oq(qq, lq)) qq: for (let Yq = -gq; Yq <= gq; Yq++) {
+           if (!Gb(bb, Ob)) bb: for (let Bb = -hb; Bb <= hb; Bb++) {
```

#### 22. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L327` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L296) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L327)

```diff
-   36461: (qq, Eq, gq) => {
+   36018: (bb, ub, hb) => {
```

#### 23. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L329` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L298) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L329)

```diff
-       d: () => lq
+       c: () => Ob
```

#### 24. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L363` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/blockModelIcons.js#L332) · [Before (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/blockModelIcons.js#L363)

```diff
-           if (Eq > 0 && gq.searchParams.set("cache-bust", `${Date.now()}-${Eq}`), await this.fetchWhole(gq, qq)) return void(this.scriptUrl = gq);
+           if (ub > 0 && hb.searchParams.set("cache-bust", `${Date.now()}-${ub}`), await this.fetchWhole(hb, bb)) return void(this.scriptUrl = hb);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (bbb6l5.0244a119 → halsg.2bd74967)

- **File**: `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99)

#### 1. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L4-L5)

```diff
-   43039: (qq, Eq, gq) => {
-     qq.exports = gq.p + "static/media/bloxd_wasm_anim_bg.e877f14ffbaecd066601.wasm"
+   42678: (bb, ub, hb) => {
+     bb.exports = hb.p + "static/media/bloxd_wasm_anim_bg.695678f2c00bb059e5e2.wasm"
```

#### 2. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L7)

```diff
-   43032: (qq, Eq, gq) => {
+   42670: (bb, ub, hb) => {
```

#### 3. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L15-L23` → after: `L15-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L15-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L15-L23) · [Before (L15-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L15-L23)

```diff
-       const mq = Hq(qq, nq.tSYw),
-         xq = bq,
-         Aq = Hq(Eq, nq.tSYw),
-         cq = bq,
-         uq = Hq(gq, nq.tSYw),
-         Bq = bq,
-         Wq = Hq(Yq, nq.tSYw),
-         aq = bq,
-         Vq = Hq(lq, nq.tSYw),
+       const Ub = lb(bb, xb.cF1X),
+         Lb = zb,
+         Yb = lb(ub, xb.cF1X),
+         Sb = zb,
+         ab = lb(hb, xb.cF1X),
+         Hb = zb,
+         wb = lb(Bb, xb.cF1X),
+         Xb = zb,
+         pb = lb(Ob, xb.cF1X),
```

#### 4. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L28)

```diff
-         }(Oq, nq.tSYw),
+         }(Gb, xb.cF1X),
```

#### 5. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L30)

```diff
-       const yq = nq.fbAU(mq, xq, Aq, cq, uq, Bq, Wq, aq, Vq, dq, oq, Qq);
+       const db = xb.sDKb(Ub, Lb, Yb, Sb, ab, Hb, wb, Xb, pb, ob, Kb, Cb);
```

#### 6. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L33-L39` → after: `L33-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L33-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L33-L39) · [Before (L33-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L33-L39)

```diff
-       return nq.NJFj(yq[0], 1 * yq[1], 1), vq
-     }
- 
-     function Oq(qq, Eq) {
-       const gq = oq(qq, nq.tSYw, nq.j6Cc),
-         Yq = bq,
-         lq = nq.zrWh(gq, Yq, Eq);
+       return xb.FlIq(db[0], 1 * db[1], 1), nb
+     }
+ 
+     function Gb(bb, ub) {
+       const hb = Kb(bb, xb.cF1X, xb.JMsM),
+         Bb = zb,
+         Ob = xb.nlvi(hb, Bb, ub);
```

#### 7. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L44)

```diff
-       nq.d7Th()
+       xb.sd5j()
```

#### 8. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L50)

```diff
-         cVIT: {
+         KFSc: {
```

#### 9. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L52` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L52) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L52)

```diff
-           EvN0: function(qq, Eq) {
+           MhJU: function(bb, ub) {
```

#### 10. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L55` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L55) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L55)

```diff
-           GJzs: function(qq, Eq) {
+           DKZ2: function(bb, ub) {
```

#### 11. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L57-L58` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L57-L58) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L57-L58)

```diff
-               Yq = "string" === typeof gq ? gq : void 0;
-             var lq = jq(Yq) ? 0 : oq(Yq, nq.tSYw, nq.j6Cc),
+               Bb = "string" === typeof hb ? hb : void 0;
+             var Ob = Ab(Bb) ? 0 : Kb(Bb, xb.cF1X, xb.JMsM),
```

#### 12. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L62)

```diff
-           PBxs: function(qq, Eq) {
+           jV30: function(bb, ub) {
```

#### 13. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L65)

```diff
-           puT8: function(qq, Eq) {
+           acuU: function(bb, ub) {
```

#### 14. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L68)

```diff
-           F1HB: function(qq) {
+           Ol68: function(bb) {
```

#### 15. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L81-L82` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L81-L82) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L81-L82)

```diff
-       Xmq: () => lq,
-       Ku: () => Oq,
+       JUb: () => Ob,
+       Ea: () => Gb,
```

#### 16. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L85)

```diff
-       Cu: () => mq
+       ya: () => Ub
```

#### 17. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L173)

```diff
-       return hq = qq, nq = qq.exports, vq = Eq, cq = null, Wq = null, nq.vZUi(), nq
+       return Db = bb, xb = bb.exports, nb = ub, Sb = null, wb = null, xb.MkOT(), xb
```

#### 18. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L197)

```diff
-           if (!qq.ok) throw new Error(`failed to fetch Wasm: ${qq.status} ${qq.statusText} fetching '${qq.url}'`);
+           if (!bb.ok) throw new Error(`failed to fetch Wasm: ${bb.status} ${bb.statusText} fetching '${bb.url}'`);
```

#### 19. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L224-L225` → after: `L224-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L224-L225) · [Before (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L224-L225)

```diff
-     var Mq = gq(2805),
-       Tq = gq(6500);
+     var tb = hb(2688),
+       Jb = hb(6358);
```

#### 20. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L229)

```diff
-         super((0, Mq.M)(qq, Eq), {
+         super((0, tb.A)(bb, ub), {
```

#### 21. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L245)

```diff
-           qq = await (0, Mq.N)(new gq.U(gq(43039)), (0, Tq.d)("bloxd_wasm_anim"))
+           bb = await (0, tb.C)(new hb.U(hb(42678)), (0, Jb.d)("bloxd_wasm_anim"))
```

#### 22. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L247)

```diff
-           throw new zq((0, Mq.R)(Eq), Eq)
+           throw new eb((0, tb.K)(ub), ub)
```

#### 23. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L262)

```diff
-         return Oq.Xmq(Object.entries(qq).flat(), [...Eq.mobTypes], [...Eq.vehicleTypes], [...Eq.mobAiStates], [...Eq.playerPoses], "builtIns" in lq ? lq.builtIns : void 0)
+         return Gb.JUb(Object.entries(bb).flat(), [...ub.mobTypes], [...ub.vehicleTypes], [...ub.mobAiStates], [...ub.playerPoses], "builtIns" in Ob ? Ob.builtIns : void 0)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (bbb6l5.0244a119 → halsg.2bd74967)

- **File**: `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (518 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc)

#### 1. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L4-L5)

```diff
-   43012: (qq, Eq, gq) => {
-     qq.exports = gq.p + "static/media/bloxd_wasm_webgl_bg.27a0dc9e59c84764d00e.wasm"
+   42656: (bb, ub, hb) => {
+     bb.exports = hb.p + "static/media/bloxd_wasm_webgl_bg.43787b9fa3e0649124f8.wasm"
```

#### 2. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L7)

```diff
-   43003: (qq, Eq, gq) => {
+   42650: (bb, ub, hb) => {
```

#### 3. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L13-L14` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L13-L14) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L13-L14)

```diff
-       Hd: () => lq,
-       nOq: () => Oq,
+       Zo: () => Ob,
+       pGb: () => Gb,
```

#### 4. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L16)

```diff
-       Ku: () => xq,
+       Ea: () => Lb,
```

#### 5. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L19-L39` → after: `L19-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L19-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L19-L39) · [Before (L19-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L19-L39)

```diff
-       Cu: () => Aq,
-       tYq: () => cq,
-       Iu: () => uq,
-       eu: () => Bq,
-       Du: () => Wq,
-       qB: () => Nq,
-       EB: () => aq,
-       gB: () => Vq,
-       YB: () => dq,
-       rYq: () => jq,
-       xB: () => Hq,
-       dYq: () => oq,
-       bOq: () => Pq,
-       jYq: () => Qq,
-       iOq: () => yq,
-       ZOq: () => tq,
- ... (5 more removed lines; see GitHub link above)
+       ya: () => Yb,
+       YBb: () => Sb,
+       Va: () => ab,
+       Fa: () => Hb,
+       fa: () => wb,
+       ka: () => Zb,
+       Ta: () => Xb,
+       ca: () => pb,
+       Qa: () => ob,
+       SBb: () => Ab,
+       hH: () => lb,
+       uBb: () => Kb,
+       oGb: () => Wb,
+       hBb: () => Cb,
+       AGb: () => db,
+       lGb: () => rb,
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L48` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L48) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L48)

```diff
-         vE.Nu8G(qq, 0)
+         nu.uh3C(bb, 0)
```

#### 7. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L50-L51` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L50-L51) · [Before (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L50-L51)

```diff
-       static PYq() {
-         return vE.hrnv() >>> 0
+       static GBb() {
+         return nu.xD1Y() >>> 0
```

#### 8. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L53-L54` → after: `L53-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L53-L54) · [Before (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L53-L54)

```diff
-       MOq() {
-         return vE.Phkk(this.__wbg_ptr)
+       WGb() {
+         return nu.IMv7(this.__wbg_ptr)
```

#### 9. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L56-L57` → after: `L56-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L56-L57) · [Before (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L56-L57)

```diff
-       Mlq() {
-         return vE.xQNX(this.__wbg_ptr) >>> 0
+       KOb() {
+         return nu.pv9O(this.__wbg_ptr) >>> 0
```

#### 10. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L59-L60` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L59-L60) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L59-L60)

```diff
-       TOq(qq, Eq, gq) {
-         return vE.aSrb(this.__wbg_ptr, qq, Eq, gq) >>> 0
+       CGb(bb, ub, hb) {
+         return nu.mlTG(this.__wbg_ptr, bb, ub, hb) >>> 0
```

#### 11. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L63)

```diff
-         return vE.zvOT(this.__wbg_ptr, qq, Eq, gq) >>> 0
+         return nu.OQ67(this.__wbg_ptr, bb, ub, hb) >>> 0
```

#### 12. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L65-L66` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L65-L66) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L65-L66)

```diff
-       zOq() {
-         return vE.slrd(this.__wbg_ptr) >>> 0
+       dGb() {
+         return nu.wmg7(this.__wbg_ptr) >>> 0
```

#### 13. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L68-L69` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L68-L69) · [Before (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L68-L69)

```diff
-       zlq(qq, Eq, gq, Yq, lq, Oq, mq) {
-         return vE.UY0D(this.__wbg_ptr, qq, Eq, gq, Yq, lq, Oq, mq)
+       COb(bb, ub, hb, Bb, Ob, Gb, Ub) {
+         return nu.Z28s(this.__wbg_ptr, bb, ub, hb, Bb, Ob, Gb, Ub)
```

#### 14. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L71-L72` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L71-L72) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L71-L72)

```diff
-       SOq(qq, Eq, gq) {
-         return vE.HtsE(this.__wbg_ptr, qq, Eq, gq) >>> 0
+       rGb(bb, ub, hb) {
+         return nu.ZHK6(this.__wbg_ptr, bb, ub, hb) >>> 0
```

#### 15. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L74-L75` → after: `L74-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L74-L75) · [Before (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L74-L75)

```diff
-       pOq() {
-         return vE.bmgg(this.__wbg_ptr) >>> 0
+       jGb() {
+         return nu.vvDX(this.__wbg_ptr) >>> 0
```

#### 16. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L77-L78` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L77-L78) · [Before (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L77-L78)

```diff
-       GOq() {
-         return vE.Lbav(this.__wbg_ptr) >>> 0
+       nGb() {
+         return nu.R2rP(this.__wbg_ptr) >>> 0
```

#### 17. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L80-L81` → after: `L80-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L80-L81) · [Before (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L80-L81)

```diff
-       JOq() {
-         return vE.pDUN(this.__wbg_ptr) >>> 0
+       xGb() {
+         return nu.RYjc(this.__wbg_ptr) >>> 0
```

#### 18. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L84)

```diff
-         return vE.CzsZ(this.__wbg_ptr, qq, Eq, gq) >>> 0
+         return nu.CxD7(this.__wbg_ptr, bb, ub, hb) >>> 0
```

#### 19. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L86-L87` → after: `L86-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L86-L87) · [Before (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L86-L87)

```diff
-       klq(qq, Eq, gq) {
-         return vE.VT8V(this.__wbg_ptr, qq, Eq, gq) >>> 0
+       xOb(bb, ub, hb) {
+         return nu.vBLx(this.__wbg_ptr, bb, ub, hb) >>> 0
```

#### 20. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L89-L90` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L89-L90) · [Before (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L89-L90)

```diff
-       Slq() {
-         return vE.DPyX(this.__wbg_ptr) >>> 0
+       dOb() {
+         return nu.dqcM(this.__wbg_ptr) >>> 0
```

#### 21. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L92-L93` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L92-L93) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L92-L93)

```diff
-       plq(qq) {
-         return vE.T7uy(this.__wbg_ptr, qq) >>> 0
+       rOb(bb) {
+         return nu.EuBW(this.__wbg_ptr, bb) >>> 0
```

#### 22. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L95-L96` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L95-L96) · [Before (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L95-L96)

```diff
-       Glq(qq, Eq, gq, Yq, lq, Oq) {
-         return vE.yTYD(this.__wbg_ptr, qq, Eq, gq, Yq, lq, Oq) >>> 0
+       jOb(bb, ub, hb, Bb, Ob, Gb) {
+         return nu.egre(this.__wbg_ptr, bb, ub, hb, Bb, Ob, Gb) >>> 0
```

#### 23. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L98-L99` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L98-L99) · [Before (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L98-L99)

```diff
-       Tlq() {
-         return vE.lWGm(this.__wbg_ptr) >>> 0
+       WOb() {
+         return nu.VvcD(this.__wbg_ptr) >>> 0
```

#### 24. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L101-L102` → after: `L101-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L101-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L101-L102) · [Before (L101-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L101-L102)

```diff
-       kOq() {
-         return vE.DaUv(this.__wbg_ptr) >>> 0
+       zGb() {
+         return nu.v4j1(this.__wbg_ptr) >>> 0
```

#### 25. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L104-L105` → after: `L104-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L104-L105) · [Before (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L104-L105)

```diff
-       ROq(qq) {
-         return vE.YB7f(this.__wbg_ptr, qq) >>> 0
+       gGb(bb) {
+         return nu.YStu(this.__wbg_ptr, bb) >>> 0
```

#### 26. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L107-L108` → after: `L107-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L107-L108) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L107-L108)

```diff
-       Ulq(qq) {
-         return vE.YLUZ(this.__wbg_ptr, qq) >>> 0
+       iOb(bb) {
+         return nu.NCMv(this.__wbg_ptr, bb) >>> 0
```

#### 27. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L110-L111` → after: `L110-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L110-L111) · [Before (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L110-L111)

```diff
-       UOq(qq) {
-         return vE.QUYU(this.__wbg_ptr, qq) >>> 0
+       iGb(bb) {
+         return nu.vYRk(this.__wbg_ptr, bb) >>> 0
```

#### 28. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L113-L114` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L113-L114) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L113-L114)

```diff
-       FOq(qq) {
-         return vE.CWZe(this.__wbg_ptr, qq) >>> 0
+       vGb(bb) {
+         return nu.A7Yz(this.__wbg_ptr, bb) >>> 0
```

#### 29. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L117` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L117) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L117)

```diff
-         return vE.U0Jb(this.__wbg_ptr, qq, Eq, gq, Yq, lq, Oq) >>> 0
+         return nu.aLXn(this.__wbg_ptr, bb, ub, hb, Bb, Ob, Gb) >>> 0
```

#### 30. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L119-L120` → after: `L119-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L119-L120) · [Before (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L119-L120)

```diff
-       XOq(qq) {
-         return 0 !== vE.hS2c(this.__wbg_ptr, qq)
+       JGb(bb) {
+         return 0 !== nu.ZNec(this.__wbg_ptr, bb)
```

#### 31. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L122-L123` → after: `L122-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L122-L123) · [Before (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L122-L123)

```diff
-       wOq(qq, Eq) {
-         return vE.B5Tw(this.__wbg_ptr, qq, Eq) >>> 0
+       eGb(bb, ub) {
+         return nu.IhDX(this.__wbg_ptr, bb, ub) >>> 0
```

#### 32. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L125-L126` → after: `L125-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L125-L126) · [Before (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L125-L126)

```diff
-       KOq(qq) {
-         return vE.Ilqe(this.__wbg_ptr, qq) >>> 0
+       NGb(bb) {
+         return nu.FKaG(this.__wbg_ptr, bb) >>> 0
```

#### 33. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L129` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L129) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L129)

```diff
-         return vE.wFYj(this.__wbg_ptr) >>> 0
+         return nu.y1Ix(this.__wbg_ptr) >>> 0
```

#### 34. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L131-L132` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L131-L132) · [Before (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L131-L132)

```diff
-       COq() {
-         return vE.Htr0(this.__wbg_ptr) >>> 0
+       sGb() {
+         return nu.BUM1(this.__wbg_ptr) >>> 0
```

#### 35. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L135` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L135) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L135)

```diff
-         return vE.A4nW(this.__wbg_ptr) >>> 0
+         return nu.CwrI(this.__wbg_ptr) >>> 0
```

#### 36. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L137-L138` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L137-L138) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L137-L138)

```diff
-       IOq(qq, Eq, gq, Yq, lq) {
-         return vE.hxuE(this.__wbg_ptr, qq, Eq, gq, Yq, lq) >>> 0
+       MGb(bb, ub, hb, Bb, Ob) {
+         return nu.gdU3(this.__wbg_ptr, bb, ub, hb, Bb, Ob) >>> 0
```

#### 37. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L140-L141` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L140-L141) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L140-L141)

```diff
-       eOq(qq, Eq, gq) {
-         return vE.kD0Y(this.__wbg_ptr, qq, Eq, gq) >>> 0
+       mGb(bb, ub, hb) {
+         return nu.S7sN(this.__wbg_ptr, bb, ub, hb) >>> 0
```

#### 38. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L143-L144` → after: `L143-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L143-L144) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L143-L144)

```diff
-       DOq(qq, Eq, gq, Yq) {
-         return vE.ntEb(this.__wbg_ptr, qq, Eq, gq, Yq) >>> 0
+       IGb(bb, ub, hb, Bb) {
+         return nu.mQ3K(this.__wbg_ptr, bb, ub, hb, Bb) >>> 0
```

#### 39. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L146-L147` → after: `L146-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L146-L147) · [Before (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L146-L147)

```diff
-       qmq(qq, Eq, gq) {
-         return vE.UJnU(this.__wbg_ptr, qq, Eq, gq) >>> 0
+       PGb(bb, ub, hb) {
+         return nu.ueIX(this.__wbg_ptr, bb, ub, hb) >>> 0
```

#### 40. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L149-L150` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L149-L150) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L149-L150)

```diff
-       Emq(qq, Eq) {
-         return vE.Nq5p(this.__wbg_ptr, qq, Eq) >>> 0
+       qGb(bb, ub) {
+         return nu.UfeN(this.__wbg_ptr, bb, ub) >>> 0
```

#### 41. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L152-L153` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L152-L153) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L152-L153)

```diff
-       Rlq(qq) {
-         return vE.YJ1I(this.__wbg_ptr, qq) >>> 0
+       zOb(bb) {
+         return nu.YQbg(this.__wbg_ptr, bb) >>> 0
```

#### 42. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L156)

```diff
-         return vE.s4x1(this.__wbg_ptr) >>> 0
+         return nu.yHx8(this.__wbg_ptr) >>> 0
```

#### 43. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L158-L159` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L158-L159) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L158-L159)

```diff
-       gmq() {
-         return vE.ykqo(this.__wbg_ptr) >>> 0
+       EGb() {
+         return nu.LA18(this.__wbg_ptr) >>> 0
```

#### 44. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L162` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L162) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L162)

```diff
-         return vE.wBOE(this.__wbg_ptr) >>> 0
+         return nu.AGnH(this.__wbg_ptr) >>> 0
```

#### 45. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L164-L165` → after: `L164-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L164-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L164-L165) · [Before (L164-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L164-L165)

```diff
-       Ymq() {
-         return vE.rL5K(this.__wbg_ptr) >>> 0
+       yGb() {
+         return nu.UbEI(this.__wbg_ptr) >>> 0
```

#### 46. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L167-L168` → after: `L167-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L167-L168) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L167-L168)

```diff
-       lmq() {
-         return vE.av4n(this.__wbg_ptr) >>> 0
+       VGb() {
+         return nu.Leuj(this.__wbg_ptr) >>> 0
```

#### 47. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L171` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L171) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L171)

```diff
-         const gq = vE.OIx5(qq, Eq);
+         const hb = nu.xi7X(bb, ub);
```

#### 48. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L174-L175` → after: `L174-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L174-L175) · [Before (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L174-L175)

```diff
-       Omq(qq) {
-         return vE.Wh0d(this.__wbg_ptr, qq) >>> 0
+       FGb(bb) {
+         return nu.ILZu(this.__wbg_ptr, bb) >>> 0
```

#### 49. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L178` → after: `L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L178) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L178)

```diff
-         return vE.jqd5(this.__wbg_ptr) >>> 0
+         return nu.tf2L(this.__wbg_ptr) >>> 0
```

#### 50. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L180-L181` → after: `L180-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L180-L181) · [Before (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L180-L181)

```diff
-       mOq(qq, Eq) {
-         return vE.GExa(this.__wbg_ptr, qq, Eq) >>> 0
+       fOb(bb, ub) {
+         return nu.Bkqg(this.__wbg_ptr, bb, ub) >>> 0
```

#### 51. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L183-L184` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L183-L184) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L183-L184)

```diff
-       gOq(qq) {
-         return vE.P4J2(this.__wbg_ptr, qq) >>> 0
+       EOb(bb) {
+         return nu.RrsQ(this.__wbg_ptr, bb) >>> 0
```

#### 52. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L186-L187` → after: `L186-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L186-L187) · [Before (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L186-L187)

```diff
-       mmq(qq, Eq, gq, Yq) {
-         return vE.CMjo(this.__wbg_ptr, qq, Eq, gq, Yq) >>> 0
+       fGb(bb, ub, hb, Bb) {
+         return nu.cJe2(this.__wbg_ptr, bb, ub, hb, Bb) >>> 0
```

#### 53. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L189-L190` → after: `L189-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L189-L190) · [Before (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L189-L190)

```diff
-       uOq(qq) {
-         return vE.zNqT(this.__wbg_ptr, qq) >>> 0
+       QOb(bb) {
+         return nu.xLNT(this.__wbg_ptr, bb) >>> 0
```

#### 54. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L192-L193` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L192-L193) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L192-L193)

```diff
-       Klq() {
-         vE.gsQO(this.__wbg_ptr)
+       NOb() {
+         nu.c8QA(this.__wbg_ptr)
```

#### 55. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L195-L196` → after: `L195-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L195-L196) · [Before (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L195-L196)

```diff
-       aOq(qq) {
-         vE.XRef(this.__wbg_ptr, qq)
+       hGb(bb) {
+         nu.RtG7(this.__wbg_ptr, bb)
```

#### 56. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L198-L199` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L198-L199) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L198-L199)

```diff
-       NOq(qq) {
-         return vE.glu6(this.__wbg_ptr, qq)
+       uGb(bb) {
+         return nu.T4bh(this.__wbg_ptr, bb)
```

#### 57. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L201-L202` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L201-L202) · [Before (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L201-L202)

```diff
-       wlq() {
-         return vE.kPwm(this.__wbg_ptr) >>> 0
+       eOb() {
+         return nu.vkRF(this.__wbg_ptr) >>> 0
```

#### 58. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L205)

```diff
-         return vE.DIgh(this.__wbg_ptr) >>> 0
+         return nu.Or33(this.__wbg_ptr) >>> 0
```

#### 59. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L207-L208` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L207-L208) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L207-L208)

```diff
-       AOq() {
-         return vE.G2YD(this.__wbg_ptr) >>> 0
+       TOb() {
+         return nu.n1Gc(this.__wbg_ptr) >>> 0
```

#### 60. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L210-L211` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L210-L211) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L210-L211)

```diff
-       LOq(qq) {
-         return vE.A2Pf(this.__wbg_ptr, qq) >>> 0
+       DGb(bb) {
+         return nu.KAFx(this.__wbg_ptr, bb) >>> 0
```

#### 61. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L213-L214` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L213-L214) · [Before (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L213-L214)

```diff
-       xmq(qq) {
-         return vE.et96(this.__wbg_ptr, qq) >>> 0
+       kGb(bb) {
+         return nu.tZuS(this.__wbg_ptr, bb) >>> 0
```

#### 62. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L216-L217` → after: `L216-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L216-L217) · [Before (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L216-L217)

```diff
-       Amq(qq) {
-         return vE.R04E(this.__wbg_ptr, qq) >>> 0
+       TGb(bb) {
+         return nu.YfhK(this.__wbg_ptr, bb) >>> 0
```

#### 63. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L219-L220` → after: `L219-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L219-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L219-L220) · [Before (L219-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L219-L220)

```diff
-       cmq(qq) {
-         return vE.Q4us(this.__wbg_ptr, qq) >>> 0
+       cGb(bb) {
+         return nu.zSKq(this.__wbg_ptr, bb) >>> 0
```

#### 64. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L223)

```diff
-         return vE.MvAc(this.__wbg_ptr, qq, Eq, gq) >>> 0
+         return nu.dVcx(this.__wbg_ptr, bb, ub, hb) >>> 0
```

#### 65. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L225-L226` → after: `L225-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L225-L226) · [Before (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L225-L226)

```diff
-       slq(qq) {
-         return vE.W4be(this.__wbg_ptr, qq) >>> 0
+       tOb(bb) {
+         return nu.phbm(this.__wbg_ptr, bb) >>> 0
```

#### 66. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L228-L229` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L228-L229) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L228-L229)

```diff
-       flq() {
-         return vE.a7ml(this.__wbg_ptr) >>> 0
+       lOb() {
+         return nu.ajTh(this.__wbg_ptr) >>> 0
```

#### 67. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L231-L232` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L231-L232) · [Before (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L231-L232)

```diff
-       umq(qq) {
-         return vE.iPL4(this.__wbg_ptr, qq) >>> 0
+       QGb(bb) {
+         return nu.mJhK(this.__wbg_ptr, bb) >>> 0
```

#### 68. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L234-L235` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L234-L235) · [Before (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L234-L235)

```diff
-       Bmq(qq) {
-         vE.bvRq(this.__wbg_ptr, qq)
+       RGb(bb) {
+         nu.ikJD(this.__wbg_ptr, bb)
```

#### 69. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L237-L238` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L237-L238) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L237-L238)

```diff
-       Wmq(qq) {
-         return 0 !== vE.B358(this.__wbg_ptr, Gq(qq))
+       bUb(bb) {
+         return 0 !== nu.F1yB(this.__wbg_ptr, Mb(bb))
```

#### 70. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L241)

```diff
-         return vE.xMsB(this.__wbg_ptr, qq, Eq, gq, Yq) >>> 0
+         return nu.jQtf(this.__wbg_ptr, bb, ub, hb, Bb) >>> 0
```

#### 71. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L243-L244` → after: `L243-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L243-L244) · [Before (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L243-L244)

```diff
-       HYq(qq, Eq, gq) {
-         const Yq = jE(qq, vE.RlMm, vE.eAl2),
+       BBb(bb, ub, hb) {
+         const Bb = Au(bb, nu.KLNn, nu.kEUb),
```

#### 72. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L246)

```diff
-           Oq = aE(Eq, vE.RlMm),
+           Gb = Xu(ub, nu.KLNn),
```

#### 73. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L251` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L251) · [Before (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L251)

```diff
-           }(gq, vE.RlMm),
+           }(hb, nu.KLNn),
```

#### 74. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L253` → after: `L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L253) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L253)

```diff
-         return 0 !== vE.JjpE(this.__wbg_ptr, Yq, lq, Oq, mq, xq, Aq)
+         return 0 !== nu.lIQd(this.__wbg_ptr, Bb, Ob, Gb, Ub, Lb, Yb)
```

#### 75. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L255-L256` → after: `L255-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L255-L256) · [Before (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L255-L256)

```diff
-       Nmq(qq) {
-         vE.AwWM(this.__wbg_ptr, qq)
+       uUb(bb) {
+         nu.mXJL(this.__wbg_ptr, bb)
```

#### 76. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L258-L259` → after: `L258-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L258-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L258-L259) · [Before (L258-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L258-L259)

```diff
-       amq(qq, Eq) {
-         return 0 !== vE.Mojw(this.__wbg_ptr, qq, Eq)
+       hUb(bb, ub) {
+         return 0 !== nu.OiiJ(this.__wbg_ptr, bb, ub)
```

#### 77. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L261-L262` → after: `L261-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L261-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L261-L262) · [Before (L261-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L261-L262)

```diff
-       Vmq(qq) {
-         return vE.k1hg(this.__wbg_ptr, qq) >>> 0
+       BUb(bb) {
+         return nu.i41w(this.__wbg_ptr, bb) >>> 0
```

#### 78. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L265)

```diff
-         vE.wK7k(this.__wbg_ptr, qq, Eq)
+         nu.cILF(this.__wbg_ptr, bb, ub)
```

#### 79. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L267-L268` → after: `L267-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L267-L268) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L267-L268)

```diff
-       sOq(qq) {
-         vE.V1YK(this.__wbg_ptr, Gq(qq))
+       tGb(bb) {
+         nu.wvJO(this.__wbg_ptr, Mb(bb))
```

#### 80. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L270-L271` → after: `L270-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L270-L271) · [Before (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L270-L271)

```diff
-       dmq(qq) {
-         vE.erIf(this.__wbg_ptr, qq)
+       OUb(bb) {
+         nu.omI5(this.__wbg_ptr, bb)
```

#### 81. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L273-L274` → after: `L273-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L273-L274) · [Before (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L273-L274)

```diff
-       Jlq(qq, Eq, gq) {
-         return vE.ckX0(this.__wbg_ptr, qq, Eq, gq) >>> 0
+       DOb(bb, ub, hb) {
+         return nu.pE3O(this.__wbg_ptr, bb, ub, hb) >>> 0
```

#### 82. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L276-L277` → after: `L276-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L276-L277) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L276-L277)

```diff
-       Xlq(qq) {
-         return vE.tUry(this.__wbg_ptr, qq) >>> 0
+       JOb(bb) {
+         return nu.RcgG(this.__wbg_ptr, bb) >>> 0
```

#### 83. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L279-L280` → after: `L279-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L279-L280) · [Before (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L279-L280)

```diff
-       jmq(qq) {
-         vE.GScz(this.__wbg_ptr, qq)
+       GUb(bb) {
+         nu.dkxB(this.__wbg_ptr, bb)
```

#### 84. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L282)

```diff
-       Hmq(qq) {
+       UUb(bb) {
```

#### 85. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L285` → after: `L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L285) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L285)

```diff
-         vE.yktC(this.__wbg_ptr, Eq)
+         nu.Adns(this.__wbg_ptr, ub)
```

#### 86. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L287-L288` → after: `L287-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L287-L288) · [Before (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L287-L288)

```diff
-       fYq(qq, Eq, gq, Yq, lq, Oq) {
-         var mq = WE(qq) ? 0 : VE(qq, vE.RlMm),
+       oBb(bb, ub, hb, Bb, Ob, Gb) {
+         var Ub = wu(bb) ? 0 : pu(bb, nu.KLNn),
```

#### 87. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L290)

```diff
-         const Aq = VE(Eq, vE.RlMm),
+         const Yb = pu(ub, nu.KLNn),
```

#### 88. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L292` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L292) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L292)

```diff
-           uq = dE(gq, vE.RlMm),
+           ab = ou(hb, nu.KLNn),
```

#### 89. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L294)

```diff
-           Wq = aE(Yq, vE.RlMm),
+           wb = Xu(Bb, nu.KLNn),
```

#### 90. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L296)

```diff
-         return 0 !== vE.fKag(this.__wbg_ptr, mq, xq, Aq, cq, uq, Bq, Wq, Nq, lq, Oq)
+         return 0 !== nu.c0kf(this.__wbg_ptr, Ub, Lb, Yb, Sb, ab, Hb, wb, Zb, Ob, Gb)
```

#### 91. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L298-L299` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L298-L299) · [Before (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L298-L299)

```diff
-       omq(qq, Eq, gq, Yq, lq) {
-         var Oq = WE(lq) ? 0 : VE(lq, vE.RlMm),
+       LUb(bb, ub, hb, Bb, Ob) {
+         var Gb = wu(Ob) ? 0 : pu(Ob, nu.KLNn),
```

#### 92. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L301)

```diff
-         vE.uU3M(this.__wbg_ptr, qq, Eq, gq, Yq, Oq, mq)
+         nu.dbGA(this.__wbg_ptr, bb, ub, hb, Bb, Gb, Ub)
```

#### 93. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L303-L304` → after: `L303-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L303-L304) · [Before (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L303-L304)

```diff
-       Pmq(qq, Eq, gq, Yq) {
-         const lq = dE(qq, vE.RlMm),
+       YUb(bb, ub, hb, Bb) {
+         const Ob = ou(bb, nu.KLNn),
```

#### 94. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L306` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L306) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L306)

```diff
-           mq = aE(Eq, vE.RlMm),
+           Ub = Xu(ub, nu.KLNn),
```

#### 95. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L308` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L308) · [Before (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L308)

```diff
-           Aq = dE(gq, vE.RlMm),
+           Yb = ou(hb, nu.KLNn),
```

#### 96. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L310` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L310) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L310)

```diff
-         return 0 !== vE.yJFo(this.__wbg_ptr, lq, Oq, mq, xq, Aq, cq, WE(Yq) ? 0 : Gq(Yq))
+         return 0 !== nu.mV8k(this.__wbg_ptr, Ob, Gb, Ub, Lb, Yb, Sb, wu(Bb) ? 0 : Mb(Bb))
```

#### 97. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L312-L313` → after: `L312-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L312-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L312-L313) · [Before (L312-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L312-L313)

```diff
-       Qmq(qq) {
-         const Eq = jE(qq, vE.RlMm, vE.eAl2),
+       SUb(bb) {
+         const ub = Au(bb, nu.KLNn, nu.kEUb),
```

#### 98. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L315)

```diff
-         return 0 !== vE.V6tc(this.__wbg_ptr, Eq, gq)
+         return 0 !== nu.HWsD(this.__wbg_ptr, ub, hb)
```

#### 99. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L317-L318` → after: `L317-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L317-L318) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L317-L318)

```diff
-       ymq(qq) {
-         return vE.BxgS(this.__wbg_ptr, qq) >>> 0
+       aUb(bb) {
+         return nu.AqTl(this.__wbg_ptr, bb) >>> 0
```

#### 100. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L320-L321` → after: `L320-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L320-L321) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L320-L321)

```diff
-       yYq() {
-         return vE.WHAS(this.__wbg_ptr) >>> 0
+       LBb() {
+         return nu.n4UO(this.__wbg_ptr) >>> 0
```

#### 101. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L323-L324` → after: `L323-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L323-L324) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L323-L324)

```diff
-       tmq() {
-         const qq = vE.LSMz(this.__wbg_ptr);
+       HUb() {
+         const bb = nu.eMZd(this.__wbg_ptr);
```

#### 102. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L326)

```diff
-         return vE.nkNR(qq[0], 4 * qq[1], 4), Eq
+         return nu.V2Hk(bb[0], 4 * bb[1], 4), ub
```

#### 103. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L328-L329` → after: `L328-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L328-L329) · [Before (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L328-L329)

```diff
-       rmq() {
-         const qq = vE.xxYh(this.__wbg_ptr);
+       wUb() {
+         const bb = nu.xOpt(this.__wbg_ptr);
```

#### 104. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L333)

```diff
-         const Eq = vE.hR8p(this.__wbg_ptr, qq);
+         const ub = nu.Qmus(this.__wbg_ptr, bb);
```

#### 105. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L335` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L335) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L335)

```diff
-         return vE.nkNR(Eq[0], 8 * Eq[1], 8), gq
+         return nu.V2Hk(ub[0], 8 * ub[1], 8), hb
```

#### 106. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L337-L338` → after: `L337-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L337-L338) · [Before (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L337-L338)

```diff
-       vmq() {
-         const qq = vE.a19l(this.__wbg_ptr);
+       ZUb() {
+         const bb = nu.sqrO(this.__wbg_ptr);
```

#### 107. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L340` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L340) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L340)

```diff
-         return vE.nkNR(qq[0], 4 * qq[1], 4), Eq
+         return nu.V2Hk(bb[0], 4 * bb[1], 4), ub
```

#### 108. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L342-L343` → after: `L342-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L342-L343) · [Before (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L342-L343)

```diff
-       hmq(qq, Eq, gq, Yq, lq) {
-         return vE.xMtG(this.__wbg_ptr, qq, Eq, gq, Yq, lq) >>> 0
+       XUb(bb, ub, hb, Bb, Ob) {
+         return nu.XvgX(this.__wbg_ptr, bb, ub, hb, Bb, Ob) >>> 0
```

#### 109. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L345-L346` → after: `L345-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L345-L346) · [Before (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L345-L346)

```diff
-       nmq() {
-         const qq = vE.Qxeb(this.__wbg_ptr);
+       pUb() {
+         const bb = nu.tS2T(this.__wbg_ptr);
```

#### 110. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L348)

```diff
-         return vE.nkNR(qq[0], 4 * qq[1], 4), Eq
+         return nu.V2Hk(bb[0], 4 * bb[1], 4), ub
```

#### 111. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L350-L351` → after: `L350-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L350-L351) · [Before (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L350-L351)

```diff
-       bmq() {
-         return vE.pq9I(this.__wbg_ptr) >>> 0
+       oUb() {
+         return nu.vlOo(this.__wbg_ptr) >>> 0
```

#### 112. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L353-L354` → after: `L353-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L353-L354) · [Before (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L353-L354)

```diff
-       imq() {
-         return vE.TgRn(this.__wbg_ptr) >>> 0
+       AUb() {
+         return nu.mK0c(this.__wbg_ptr) >>> 0
```

#### 113. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L365)

```diff
-         vE.maqC(qq, 0)
+         nu.nXEq(bb, 0)
```

#### 114. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L369)

```diff
-         return 0 !== vE.V9Iz(this.__wbg_ptr, qq.__wbg_ptr)
+         return 0 !== nu.uSqR(this.__wbg_ptr, bb.__wbg_ptr)
```

#### 115. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L372` → after: `L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L372) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L372)

```diff
-         return 0 !== vE.UPaq(this.__wbg_ptr)
+         return 0 !== nu.zX64(this.__wbg_ptr)
```

#### 116. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L375)

```diff
-         const Eq = vE.nfhR(this.__wbg_ptr, qq);
+         const ub = nu.nor6(this.__wbg_ptr, bb);
```

#### 117. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L377)

```diff
-         return vE.nkNR(Eq[0], 1 * Eq[1], 1), gq
+         return nu.V2Hk(ub[0], 1 * ub[1], 1), hb
```

#### 118. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L380` → after: `L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L380) · [Before (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L380)

```diff
-         vE.bK3J(this.__wbg_ptr)
+         nu.X3ss(this.__wbg_ptr)
```

#### 119. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L382-L383` → after: `L382-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L382-L383) · [Before (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L382-L383)

```diff
-       Zmq() {
-         return vE.asha(this.__wbg_ptr) >>> 0
+       lUb() {
+         return nu.wpYt(this.__wbg_ptr) >>> 0
```

#### 120. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L385-L386` → after: `L385-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L385-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L385-L386) · [Before (L385-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L385-L386)

```diff
-       fmq() {
-         return vE.LHsO(this.__wbg_ptr) >>> 0
+       KUb() {
+         return nu.SzXq(this.__wbg_ptr) >>> 0
```

#### 121. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L389` → after: `L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L389) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L389)

```diff
-         return vE.l6zy(this.__wbg_ptr, qq) >>> 0
+         return nu.CnaY(this.__wbg_ptr, bb) >>> 0
```

#### 122. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L391-L392` → after: `L391-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L391-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L391-L392) · [Before (L391-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L391-L392)

```diff
-       Mmq(qq, Eq, gq, Yq) {
-         const lq = VE(Yq, vE.RlMm),
+       WUb(bb, ub, hb, Bb) {
+         const Ob = pu(Bb, nu.KLNn),
```

#### 123. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L394` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L394) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L394)

```diff
-         return vE.pseD(this.__wbg_ptr, qq, Eq, gq, lq, Oq)
+         return nu.CEQF(this.__wbg_ptr, bb, ub, hb, Ob, Gb)
```

#### 124. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L396-L397` → after: `L396-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L396-L397) · [Before (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L396-L397)

```diff
-       Tmq() {
-         return 0 !== vE.FnWR(this.__wbg_ptr)
+       CUb() {
+         return 0 !== nu.igmZ(this.__wbg_ptr)
```

#### 125. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L399-L400` → after: `L399-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L399-L400) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L399-L400)

```diff
-       zmq(qq, Eq) {
-         const gq = VE(Eq, vE.RlMm),
+       dUb(bb, ub) {
+         const hb = pu(ub, nu.KLNn),
```

#### 126. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L402` → after: `L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L402) · [Before (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L402)

```diff
-         vE.KgBc(this.__wbg_ptr, qq, gq, Yq)
+         nu.M3ME(this.__wbg_ptr, bb, hb, Bb)
```

#### 127. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L405` → after: `L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L405) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L405)

```diff
-         const qq = vE.id2T();
+         const bb = nu.FgF4();
```

#### 128. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L409` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L409) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L409)

```diff
-         return 0 !== vE.sY38(this.__wbg_ptr, qq, Eq, gq, Yq)
+         return 0 !== nu.G8NG(this.__wbg_ptr, bb, ub, hb, Bb)
```

#### 129. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L412` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L412) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L412)

```diff
-         const Eq = vE.MoRo(this.__wbg_ptr, qq);
+         const ub = nu.aCEb(this.__wbg_ptr, bb);
```

#### 130. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L414` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L414) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L414)

```diff
-         return vE.nkNR(Eq[0], 8 * Eq[1], 8), gq
+         return nu.V2Hk(ub[0], 8 * ub[1], 8), hb
```

#### 131. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L417)

```diff
-         return vE.fnmn(this.__wbg_ptr, qq) >>> 0
+         return nu.QISe(this.__wbg_ptr, bb) >>> 0
```

#### 132. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L420` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L420) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L420)

```diff
-         vE.Oq3g(this.__wbg_ptr, qq, Eq, gq)
+         nu.g007(this.__wbg_ptr, bb, ub, hb)
```

#### 133. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L422-L423` → after: `L422-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L422-L423) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L422-L423)

```diff
-       Smq(qq) {
-         const Eq = VE(qq, vE.RlMm),
+       rUb(bb) {
+         const ub = pu(bb, nu.KLNn),
```

#### 134. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L425` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L425) · [Before (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L425)

```diff
-         return 0 !== vE.hu7H(this.__wbg_ptr, Eq, gq)
+         return 0 !== nu.A6jL(this.__wbg_ptr, ub, hb)
```

#### 135. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L427-L428` → after: `L427-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L427-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L427-L428) · [Before (L427-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L427-L428)

```diff
-       Gmq(qq, Eq, gq, Yq, lq) {
-         const Oq = jE(Eq, vE.RlMm, vE.eAl2),
+       nUb(bb, ub, hb, Bb, Ob) {
+         const Gb = Au(ub, nu.KLNn, nu.kEUb),
```

#### 136. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L430` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L430) · [Before (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L430)

```diff
-         return vE.Y9Eh(this.__wbg_ptr, qq, Oq, mq, gq, Yq, lq) >>> 0
+         return nu.acPe(this.__wbg_ptr, bb, Gb, Ub, hb, Bb, Ob) >>> 0
```

#### 137. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L432-L433` → after: `L432-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L432-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L432-L433) · [Before (L432-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L432-L433)

```diff
-       Lmq(qq) {
-         vE.RprA(this.__wbg_ptr, qq)
+       DUb(bb) {
+         nu.OPO7(this.__wbg_ptr, bb)
```

#### 138. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L435-L436` → after: `L435-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L435-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L435-L436) · [Before (L435-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L435-L436)

```diff
-       Jmq(qq, Eq, gq, Yq, lq) {
-         const Oq = jE(gq, vE.RlMm, vE.eAl2),
+       xUb(bb, ub, hb, Bb, Ob) {
+         const Gb = Au(hb, nu.KLNn, nu.kEUb),
```

#### 139. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L438)

```diff
-         return vE.DTVY(this.__wbg_ptr, qq, Eq, Oq, mq, Yq, lq) >>> 0
+         return nu.rkSM(this.__wbg_ptr, bb, ub, Gb, Ub, Bb, Ob) >>> 0
```

#### 140. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L440-L441` → after: `L440-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L440-L441) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L440-L441)

```diff
-       kmq(qq, Eq, gq, Yq) {
-         vE.sBic(this.__wbg_ptr, qq, Eq, gq, Yq)
+       zUb(bb, ub, hb, Bb) {
+         nu.SzSl(this.__wbg_ptr, bb, ub, hb, Bb)
```

#### 141. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L443-L444` → after: `L443-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L443-L444) · [Before (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L443-L444)

```diff
-       Rmq(qq, Eq, gq, Yq, lq) {
-         const Oq = jE(gq, vE.RlMm, vE.eAl2),
+       gUb(bb, ub, hb, Bb, Ob) {
+         const Gb = Au(hb, nu.KLNn, nu.kEUb),
```

#### 142. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L446)

```diff
-           xq = jE(Yq, vE.RlMm, vE.eAl2),
+           Lb = Au(Bb, nu.KLNn, nu.kEUb),
```

#### 143. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L448` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L448) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L448)

```diff
-         return vE.X9GY(this.__wbg_ptr, qq, Eq, Oq, mq, xq, Aq, lq) >>> 0
+         return nu.iMhp(this.__wbg_ptr, bb, ub, Gb, Ub, Lb, Yb, Ob) >>> 0
```

#### 144. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L450-L451` → after: `L450-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L450-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L450-L451) · [Before (L450-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L450-L451)

```diff
-       pmq(qq, Eq, gq, Yq) {
-         const lq = jE(Eq, vE.RlMm, vE.eAl2),
+       jUb(bb, ub, hb, Bb) {
+         const Ob = Au(ub, nu.KLNn, nu.kEUb),
```

#### 145. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L453` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L453) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L453)

```diff
-           mq = aE(gq, vE.RlMm),
+           Ub = Xu(hb, nu.KLNn),
```

#### 146. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L455` → after: `L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L455) · [Before (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L455)

```diff
-         return vE.vEkx(this.__wbg_ptr, qq, lq, Oq, mq, xq, Yq) >>> 0
+         return nu.md8m(this.__wbg_ptr, bb, Ob, Gb, Ub, Lb, Bb) >>> 0
```

#### 147. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L457` → after: `L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L457) · [Before (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L457)

```diff
-       Hmq(qq) {
+       UUb(bb) {
```

#### 148. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L460` → after: `L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L460) · [Before (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L460)

```diff
-         return 0 !== vE.aKiO(this.__wbg_ptr, Eq)
+         return 0 !== nu.T2YR(this.__wbg_ptr, ub)
```

#### 149. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L462-L463` → after: `L462-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L462-L463) · [Before (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L462-L463)

```diff
-       fYq(qq, Eq, gq, Yq, lq) {
-         var Oq = WE(qq) ? 0 : VE(qq, vE.RlMm),
+       oBb(bb, ub, hb, Bb, Ob) {
+         var Gb = wu(bb) ? 0 : pu(bb, nu.KLNn),
```

#### 150. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L465` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L465) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L465)

```diff
-         const xq = VE(Eq, vE.RlMm),
+         const Lb = pu(ub, nu.KLNn),
```

#### 151. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L467` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L467) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L467)

```diff
-           cq = dE(gq, vE.RlMm),
+           Sb = ou(hb, nu.KLNn),
```

#### 152. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L469` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L469) · [Before (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L469)

```diff
-           Bq = aE(Yq, vE.RlMm),
+           Hb = Xu(Bb, nu.KLNn),
```

#### 153. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L471` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L471) · [Before (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L471)

```diff
-         return 0 !== vE.sGo9(this.__wbg_ptr, Oq, mq, xq, Aq, cq, uq, Bq, Wq, lq)
+         return 0 !== nu.ahFI(this.__wbg_ptr, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb, Ob)
```

#### 154. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L473-L474` → after: `L473-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L473-L474) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L473-L474)

```diff
-       Umq() {
-         const qq = vE.zSXr(this.__wbg_ptr);
+       iUb() {
+         const bb = nu.k66V(this.__wbg_ptr);
```

#### 155. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L476` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L476) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L476)

```diff
-         return vE.nkNR(qq[0], 4 * qq[1], 4), Eq
+         return nu.V2Hk(bb[0], 4 * bb[1], 4), ub
```

#### 156. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L478-L479` → after: `L478-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L478-L479) · [Before (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L478-L479)

```diff
-       Fmq(qq) {
-         const Eq = vE.PmIC(this.__wbg_ptr, qq);
+       vUb(bb) {
+         const ub = nu.rKep(this.__wbg_ptr, bb);
```

#### 157. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L481)

```diff
-         return vE.nkNR(Eq[0], 1 * Eq[1], 1), gq
+         return nu.V2Hk(ub[0], 1 * ub[1], 1), hb
```

#### 158. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L483-L484` → after: `L483-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L483-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L483-L484) · [Before (L483-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L483-L484)

```diff
-       smq(qq) {
-         const Eq = vE.Lx5C(this.__wbg_ptr, qq);
+       tUb(bb) {
+         const ub = nu.Ea5B(this.__wbg_ptr, bb);
```

#### 159. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L486` → after: `L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L486) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L486)

```diff
-         return vE.nkNR(Eq[0], 4 * Eq[1], 4), gq
+         return nu.V2Hk(ub[0], 4 * ub[1], 4), hb
```

#### 160. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L501)

```diff
-         vE.tMt3(qq, 0)
+         nu.l1lT(bb, 0)
```

#### 161. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L506)

```diff
-       const gq = jE(qq, vE.RlMm, vE.eAl2),
+       const hb = Au(bb, nu.KLNn, nu.kEUb),
```

#### 162. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L508` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L508) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L508)

```diff
-         lq = vE.nz2P(gq, Yq, Eq);
+         Ob = nu.LYQG(hb, Bb, ub);
```

#### 163. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L513` → after: `L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L513) · [Before (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L513)

```diff
-       vE.X3Q9()
+       nu.zGuQ()
```

#### 164. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L517` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L517) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L517)

```diff
-       return vE.zCqU()
+       return nu.zKnh()
```

#### 165. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L521` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L521) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L521)

```diff
-       return vE.zAha() >>> 0
+       return nu.WJ2f() >>> 0
```

#### 166. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L525` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L525) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L525)

```diff
-       return 0 !== vE.lrXJ(qq)
+       return 0 !== nu.VfP1(bb)
```

#### 167. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L529` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L529) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L529)

```diff
-       return 0 !== vE.zsFb(qq)
+       return 0 !== nu.J9Ns(bb)
```

#### 168. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L533` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L533) · [Before (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L533)

```diff
-       vE.MjKW(qq)
+       nu.DFvQ(bb)
```

#### 169. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L537` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L537)

```diff
-       return vE.sa3n() >>> 0
+       return nu.tf1C() >>> 0
```

#### 170. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L541` → after: `L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L541) · [Before (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L541)

```diff
-       return vE.bm2s() >>> 0
+       return nu.TOus() >>> 0
```

#### 171. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L545` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L545) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L545)

```diff
-       return 0 !== vE.u2c6()
+       return 0 !== nu.cLty()
```

#### 172. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L549` → after: `L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L549) · [Before (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L549)

```diff
-       return HE(vE.WAo7(Gq(qq), Eq, Gq(gq), Yq, lq, Oq, WE(mq) ? Number.MAX_SAFE_INTEGER : mq >>> 0, xq))
+       return lu(nu.FLNL(Mb(bb), ub, Mb(hb), Bb, Ob, Gb, wu(Ub) ? Number.MAX_SAFE_INTEGER : Ub >>> 0, Lb))
```

#### 173. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L553` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L553) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L553)

```diff
-       return vE.FWll() >>> 0
+       return nu.nQlR() >>> 0
```

#### 174. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L557` → after: `L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L557) · [Before (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L557)

```diff
-       vE.ctVK(qq, Gq(Eq))
+       nu.N8FX(bb, Mb(ub))
```

#### 175. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L561` → after: `L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L561) · [Before (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L561)

```diff
-       vE.lnhJ(qq, Gq(Eq))
+       nu.Dr0Q(bb, Mb(ub))
```

#### 176. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L565)

```diff
-       vE.tbop(qq)
+       nu.F3cS(bb)
```

#### 177. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L569` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L569) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L569)

```diff
-       vE.z7fp(qq)
+       nu.hvk3(bb)
```

#### 178. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L573` → after: `L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L573) · [Before (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L573)

```diff
-       const Eq = VE(qq, vE.RlMm),
+       const ub = pu(bb, nu.KLNn),
```

#### 179. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L575` → after: `L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L575) · [Before (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L575)

```diff
-       return 0 !== vE.ppCd(Eq, gq)
+       return 0 !== nu.MpkE(ub, hb)
```

#### 180. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L579` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L579) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L579)

```diff
-       var Eq = WE(qq) ? 0 : VE(qq, vE.RlMm),
+       var ub = wu(bb) ? 0 : pu(bb, nu.KLNn),
```

#### 181. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L581` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L581) · [Before (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L581)

```diff
-       const Yq = vE.TcYn(Eq, gq);
+       const Bb = nu.q8C3(ub, hb);
```

#### 182. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L583` → after: `L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L583) · [Before (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L583)

```diff
-       return 0 !== Yq[0] && (lq = Fq(Yq[0], Yq[1]), vE.nkNR(Yq[0], 4 * Yq[1], 4)), lq
+       return 0 !== Bb[0] && (Ob = yb(Bb[0], Bb[1]), nu.V2Hk(Bb[0], 4 * Bb[1], 4)), Ob
```

#### 183. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L587` → after: `L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L587) · [Before (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L587)

```diff
-       const qq = vE.sU5L();
+       const bb = nu.rMUA();
```

#### 184. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L589` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L589) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L589)

```diff
-       return 0 !== qq[0] && (Eq = gE(qq[0], qq[1]), vE.nkNR(qq[0], 1 * qq[1], 1)), Eq
+       return 0 !== bb[0] && (ub = hu(bb[0], bb[1]), nu.V2Hk(bb[0], 1 * bb[1], 1)), ub
```

#### 185. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L593` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L593) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L593)

```diff
-       const gq = vE.NmN7(qq, Eq);
+       const hb = nu.uZPJ(bb, ub);
```

#### 186. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L595)

```diff
-       return 0 !== gq[0] && (Yq = gE(gq[0], gq[1]), vE.nkNR(gq[0], 1 * gq[1], 1)), Yq
+       return 0 !== hb[0] && (Bb = hu(hb[0], hb[1]), nu.V2Hk(hb[0], 1 * hb[1], 1)), Bb
```

#### 187. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L601` → after: `L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L601) · [Before (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L601)

```diff
-         const gq = vE.Tp1Y();
+         const hb = nu.OSQv();
```

#### 188. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L604` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L604) · [Before (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L604)

```diff
-         vE.nkNR(qq, Eq, 1)
+         nu.V2Hk(bb, ub, 1)
```

#### 189. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L609` → after: `L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L609) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L609)

```diff
-       vE.Za8w(Gq(qq))
+       nu.t82I(Mb(bb))
```

#### 190. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L615` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L615) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L615)

```diff
-         ZfqR: function(qq, Eq) {
+         StyD: function(bb, ub) {
```

#### 191. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L618` → after: `L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L618) · [Before (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L618)

```diff
-         N6qU: function(qq) {
+         L0zE: function(bb) {
```

#### 192. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L620` → after: `L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L620) · [Before (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L620)

```diff
-             gq = "boolean" === typeof Eq ? Eq : void 0;
+             hb = "boolean" === typeof ub ? ub : void 0;
```

#### 193. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L623-L624` → after: `L623-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L623-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L623-L624) · [Before (L623-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L623-L624)

```diff
-         xHBe: function(qq, Eq) {
-           const gq = jE(kq(AE(Eq)), vE.RlMm, vE.eAl2),
+         fuUN: function(bb, ub) {
+           const hb = Au(Pb(Yu(ub)), nu.KLNn, nu.kEUb),
```

#### 194. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L628` → after: `L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L628) · [Before (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L628)

```diff
-         HcPQ: function(qq) {
+         ecHO: function(bb) {
```

#### 195. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L631` → after: `L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L631) · [Before (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L631)

```diff
-         Gqh3: function(qq) {
+         QkUk: function(bb) {
```

#### 196. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L635` → after: `L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L635) · [Before (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L635)

```diff
-         XurB: function(qq) {
+         zIr9: function(bb) {
```

#### 197. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L638` → after: `L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L638) · [Before (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L638)

```diff
-         fJRr: function(qq, Eq) {
+         wUiP: function(bb, ub) {
```

#### 198. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L640` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L640) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L640)

```diff
-             Yq = "number" === typeof gq ? gq : void 0;
+             Bb = "number" === typeof hb ? hb : void 0;
```

#### 199. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L643` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L643) · [Before (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L643)

```diff
-         HXEo: function(qq) {
+         kCSA: function(bb) {
```

#### 200. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L646` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L646) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L646)

```diff
-         CZ09: function(qq, Eq) {
+         JnLL: function(bb, ub) {
```

#### 201. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L648-L649` → after: `L648-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L648-L649) · [Before (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L648-L649)

```diff
-             Yq = "string" === typeof gq ? gq : void 0;
-           var lq = WE(Yq) ? 0 : jE(Yq, vE.RlMm, vE.eAl2),
+             Bb = "string" === typeof hb ? hb : void 0;
+           var Ob = wu(Bb) ? 0 : Au(Bb, nu.KLNn, nu.kEUb),
```

#### 202. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L653` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L653) · [Before (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L653)

```diff
-         WGbD: function(qq, Eq) {
+         i8z9: function(bb, ub) {
```

#### 203. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L656` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L656) · [Before (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L656)

```diff
-         ypD7: function(qq) {
+         Jfy4: function(bb) {
```

#### 204. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L659` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L659) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L659)

```diff
-         ogMM: function(qq, Eq) {
+         h4FL: function(bb, ub) {
```

#### 205. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L662` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L662) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L662)

```diff
-         eU6l: function(qq, Eq) {
+         LTOu: function(bb, ub) {
```

#### 206. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L665` → after: `L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L665) · [Before (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L665)

```diff
-         Nivn: function() {
+         BZro: function() {
```

#### 207. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L670` → after: `L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L670) · [Before (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L670)

```diff
-         otcE: function(qq, Eq, gq) {
+         o6cp: function(bb, ub, hb) {
```

#### 208. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L673` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L673) · [Before (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L673)

```diff
-         MpR5: function(qq, Eq, gq) {
+         sbTd: function(bb, ub, hb) {
```

#### 209. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L676` → after: `L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L676) · [Before (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L676)

```diff
-         mr0V: function(qq, Eq, gq) {
+         jARW: function(bb, ub, hb) {
```

#### 210. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L679` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L679) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L679)

```diff
-         Z2Yj: function(qq, Eq) {
+         sJCD: function(bb, ub) {
```

#### 211. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L682` → after: `L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L682) · [Before (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L682)

```diff
-         BAjC: function(qq, Eq, gq, Yq) {
+         fg7K: function(bb, ub, hb, Bb) {
```

#### 212. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L685` → after: `L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L685) · [Before (L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L685)

```diff
-         NSnS: function(qq, Eq, gq, Yq, lq, Oq) {
+         hB27: function(bb, ub, hb, Bb, Ob, Gb) {
```

#### 213. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L688` → after: `L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L688) · [Before (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L688)

```diff
-         IVOX: function(qq, Eq, gq) {
+         foAe: function(bb, ub, hb) {
```

#### 214. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L691` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L691) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L691)

```diff
-         x4h4: function(qq, Eq, gq) {
+         Yowk: function(bb, ub, hb) {
```

#### 215. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L694` → after: `L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L694) · [Before (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L694)

```diff
-         Y25S: function(qq, Eq, gq) {
+         dEji: function(bb, ub, hb) {
```

#### 216. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L697` → after: `L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L697) · [Before (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L697)

```diff
-         q7kY: function(qq, Eq, gq) {
+         CHqU: function(bb, ub, hb) {
```

#### 217. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L700` → after: `L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L700) · [Before (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L700)

```diff
-         lFLu: function(qq, Eq, gq) {
+         hfZ4: function(bb, ub, hb) {
```

#### 218. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L703` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L703) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L703)

```diff
-         w2kw: function(qq, Eq, gq) {
+         f4zj: function(bb, ub, hb) {
```

#### 219. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L706` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L706) · [Before (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L706)

```diff
-         mbMh: function(qq, Eq, gq) {
+         QMJD: function(bb, ub, hb) {
```

#### 220. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L709` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L709) · [Before (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L709)

```diff
-         CqDV: function(qq, Eq, gq) {
+         hFsG: function(bb, ub, hb) {
```

#### 221. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L712)

```diff
-         RQnc: function(qq, Eq, gq) {
+         uQaH: function(bb, ub, hb) {
```

#### 222. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L715` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L715) · [Before (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L715)

```diff
-         AdxU: function(qq, Eq, gq) {
+         vm4C: function(bb, ub, hb) {
```

#### 223. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L718` → after: `L718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L718) · [Before (L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L718)

```diff
-         DEnm: function(qq, Eq) {
+         c6Dx: function(bb, ub) {
```

#### 224. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L721` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L721) · [Before (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L721)

```diff
-         vjZu: function(qq, Eq) {
+         LdMt: function(bb, ub) {
```

#### 225. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L724` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L724) · [Before (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L724)

```diff
-         WMx3: function(qq, Eq, gq) {
+         p51J: function(bb, ub, hb) {
```

#### 226. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L727` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L727) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L727)

```diff
-         RLus: function(qq, Eq, gq) {
+         izix: function(bb, ub, hb) {
```

#### 227. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L730` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L730) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L730)

```diff
-         tfKa: function(qq, Eq, gq, Yq, lq) {
+         eREJ: function(bb, ub, hb, Bb, Ob) {
```

#### 228. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L733` → after: `L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L733) · [Before (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L733)

```diff
-         p2TG: function(qq, Eq, gq, Yq, lq) {
+         DKOz: function(bb, ub, hb, Bb, Ob) {
```

#### 229. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L736` → after: `L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L736) · [Before (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L736)

```diff
-         J8Fz: function(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq) {
+         Vnq3: function(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab) {
```

#### 230. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L739` → after: `L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L739) · [Before (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L739)

```diff
-         zYSb: function(qq, Eq, gq, Yq) {
+         BZix: function(bb, ub, hb, Bb) {
```

#### 231. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L742)

```diff
-         dlMQ: function(qq, Eq, gq, Yq) {
+         fnUg: function(bb, ub, hb, Bb) {
```

#### 232. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L745` → after: `L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L745) · [Before (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L745)

```diff
-         uFlc: function(qq, Eq, gq, Yq, lq) {
+         E0Ax: function(bb, ub, hb, Bb, Ob) {
```

#### 233. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L748` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L748) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L748)

```diff
-         MPT7: function() {
+         tSuX: function() {
```

#### 234. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L753` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L753) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L753)

```diff
-         afOo: function() {
+         g3jv: function() {
```

#### 235. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L758` → after: `L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L758) · [Before (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L758)

```diff
-         ljaO: function(qq) {
+         biVF: function(bb) {
```

#### 236. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L761` → after: `L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L761) · [Before (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L761)

```diff
-         Dgzd: function() {
+         XPXo: function() {
```

#### 237. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L766` → after: `L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L766) · [Before (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L766)

```diff
-         mbhF: function(qq, Eq, gq, Yq, lq) {
+         sPlW: function(bb, ub, hb, Bb, Ob) {
```

#### 238. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L769` → after: `L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L769) · [Before (L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L769)

```diff
-         lgUQ: function(qq, Eq, gq, Yq, lq) {
+         DfD3: function(bb, ub, hb, Bb, Ob) {
```

#### 239. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L772` → after: `L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L772) · [Before (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L772)

```diff
-         HEVD: function(qq, Eq) {
+         z0b6: function(bb, ub) {
```

#### 240. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L775` → after: `L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L775) · [Before (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L775)

```diff
-         VCbC: function(qq, Eq) {
+         yKFh: function(bb, ub) {
```

#### 241. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L778` → after: `L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L778) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L778)

```diff
-         JhGm: function(qq, Eq, gq, Yq, lq) {
+         FCId: function(bb, ub, hb, Bb, Ob) {
```

#### 242. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L781` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L781) · [Before (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L781)

```diff
-         SRK7: function(qq, Eq) {
+         Eq6D: function(bb, ub) {
```

#### 243. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L784` → after: `L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L784) · [Before (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L784)

```diff
-         isZt: function(qq, Eq) {
+         xvKi: function(bb, ub) {
```

#### 244. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L787` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L787) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L787)

```diff
-         I8mY: function(qq, Eq, gq, Yq, lq) {
+         BBtw: function(bb, ub, hb, Bb, Ob) {
```

#### 245. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L790` → after: `L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L790) · [Before (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L790)

```diff
-         RU9j: function(qq, Eq, gq, Yq, lq) {
+         l7sm: function(bb, ub, hb, Bb, Ob) {
```

#### 246. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L793` → after: `L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L793) · [Before (L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L793)

```diff
-         ZQfj: function(qq, Eq) {
+         nwBq: function(bb, ub) {
```

#### 247. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L796)

```diff
-         yPqw: function(qq, Eq) {
+         f0SM: function(bb, ub) {
```

#### 248. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L799` → after: `L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L799) · [Before (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L799)

```diff
-         Z0xP: function(qq, Eq, gq, Yq, lq, Oq) {
+         toNh: function(bb, ub, hb, Bb, Ob, Gb) {
```

#### 249. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L802` → after: `L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L802) · [Before (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L802)

```diff
-         Cljh: function(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
+         rHoA: function(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
```

#### 250. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L805` → after: `L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L805) · [Before (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L805)

```diff
-         yvZL: function(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
+         ucNQ: function(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
```

#### 251. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L808` → after: `L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L808) · [Before (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L808)

```diff
-         VsIv: function(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
+         KGwk: function(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb) {
```

#### 252. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L811` → after: `L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L811) · [Before (L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L811)

```diff
-         qEhy: function(qq) {
+         ZVgY: function(bb) {
```

#### 253. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L815` → after: `L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L815) · [Before (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L815)

```diff
-         hGYk: function(qq) {
+         TxvN: function(bb) {
```

#### 254. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L819` → after: `L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L819) · [Before (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L819)

```diff
-         GnQ1: function() {
+         QKVd: function() {
```

#### 255. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L824` → after: `L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L824) · [Before (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L824)

```diff
-         EMss: function(qq) {
+         YIiS: function(bb) {
```

#### 256. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L828` → after: `L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L828) · [Before (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L828)

```diff
-         zzvn: function(qq) {
+         rLs3: function(bb) {
```

#### 257. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L832` → after: `L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L832) · [Before (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L832)

```diff
-         r9oy: function(qq) {
+         Ttiu: function(bb) {
```

#### 258. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L836` → after: `L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L836) · [Before (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L836)

```diff
-         A5jF: function(qq) {
+         uO0p: function(bb) {
```

#### 259. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L840` → after: `L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L840) · [Before (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L840)

```diff
-         IW2F: function(qq) {
+         JdaM: function(bb) {
```

#### 260. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L844` → after: `L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L844) · [Before (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L844)

```diff
-         MUyx: function(qq) {
+         WJS5: function(bb) {
```

#### 261. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L848` → after: `L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L848) · [Before (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L848)

```diff
-         TdYS: function(qq) {
+         l1MO: function(bb) {
```

#### 262. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L852` → after: `L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L852) · [Before (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L852)

```diff
-         gIm1: function(qq) {
+         LjgI: function(bb) {
```

#### 263. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L856` → after: `L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L856) · [Before (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L856)

```diff
-         WNkD: function(qq, Eq) {
+         tSRR: function(bb, ub) {
```

#### 264. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L860` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L860) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L860)

```diff
-         eI8A: function(qq, Eq) {
+         p4IN: function(bb, ub) {
```

#### 265. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L864` → after: `L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L864) · [Before (L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L864)

```diff
-         qBTc: function(qq) {
+         LlTv: function(bb) {
```

#### 266. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L868` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L868) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L868)

```diff
-         Yp54: function(qq) {
+         A60j: function(bb) {
```

#### 267. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L872` → after: `L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L872) · [Before (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L872)

```diff
-         ZinP: function(qq) {
+         VR5w: function(bb) {
```

#### 268. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L876` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L876) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L876)

```diff
-         pw0Q: function(qq) {
+         hc2r: function(bb) {
```

#### 269. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L880` → after: `L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L880) · [Before (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L880)

```diff
-         TCHX: function(qq) {
+         MQsD: function(bb) {
```

#### 270. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L884)

```diff
-         jNOG: function(qq, Eq) {
+         kJSp: function(bb, ub) {
```

#### 271. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L887` → after: `L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L887) · [Before (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L887)

```diff
-         PEaF: function(qq, Eq) {
+         HyBo: function(bb, ub) {
```

#### 272. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L890` → after: `L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L890) · [Before (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L890)

```diff
-         Oh4w: function(qq, Eq) {
+         ePoW: function(bb, ub) {
```

#### 273. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L893` → after: `L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L893) · [Before (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L893)

```diff
-         s431: function(qq, Eq) {
+         rt3p: function(bb, ub) {
```

#### 274. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L896` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L896) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L896)

```diff
-         oMVi: function(qq, Eq) {
+         mQSI: function(bb, ub) {
```

#### 275. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L899` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L899) · [Before (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L899)

```diff
-         AX98: function(qq, Eq) {
+         IvSV: function(bb, ub) {
```

#### 276. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L902` → after: `L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L902) · [Before (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L902)

```diff
-         RfoT: function(qq, Eq) {
+         DH1j: function(bb, ub) {
```

#### 277. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L905` → after: `L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L905) · [Before (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L905)

```diff
-         cTNk: function(qq, Eq) {
+         FGQ0: function(bb, ub) {
```

#### 278. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L908` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L908) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L908)

```diff
-         QMeH: function(qq, Eq) {
+         HBAI: function(bb, ub) {
```

#### 279. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L911` → after: `L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L911) · [Before (L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L911)

```diff
-         MUuN: function(qq, Eq) {
+         sjEC: function(bb, ub) {
```

#### 280. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L914` → after: `L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L914) · [Before (L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L914)

```diff
-         KYeK: function(qq, Eq) {
+         SWbe: function(bb, ub) {
```

#### 281. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L917` → after: `L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L917) · [Before (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L917)

```diff
-         RCAT: function(qq, Eq) {
+         PCKF: function(bb, ub) {
```

#### 282. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L920` → after: `L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L920) · [Before (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L920)

```diff
-         IA56: function(qq, Eq) {
+         xnaY: function(bb, ub) {
```

#### 283. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L923` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L923) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L923)

```diff
-         XfVK: function(qq, Eq) {
+         NS7A: function(bb, ub) {
```

#### 284. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L926` → after: `L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L926) · [Before (L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L926)

```diff
-         VNZh: function(qq, Eq) {
+         fvzu: function(bb, ub) {
```

#### 285. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L929` → after: `L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L929) · [Before (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L929)

```diff
-         oYJ2: function(qq, Eq) {
+         uI0A: function(bb, ub) {
```

#### 286. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L932` → after: `L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L932) · [Before (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L932)

```diff
-         wol1: function(qq, Eq) {
+         OjsT: function(bb, ub) {
```

#### 287. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L935` → after: `L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L935) · [Before (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L935)

```diff
-         IYCw: function(qq, Eq) {
+         X7Lr: function(bb, ub) {
```

#### 288. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L938` → after: `L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L938) · [Before (L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L938)

```diff
-         UAXD: function(qq, Eq) {
+         qzgF: function(bb, ub) {
```

#### 289. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L941` → after: `L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L941) · [Before (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L941)

```diff
-         TiOI: function(qq, Eq) {
+         R7yx: function(bb, ub) {
```

#### 290. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L944` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L944) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L944)

```diff
-         HpIL: function(qq, Eq) {
+         eVdk: function(bb, ub) {
```

#### 291. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L947` → after: `L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L947) · [Before (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L947)

```diff
-         N5Qc: function(qq, Eq) {
+         xH4s: function(bb, ub) {
```

#### 292. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L950` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L950) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L950)

```diff
-         n9ye: function(qq, Eq) {
+         CPb9: function(bb, ub) {
```

#### 293. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L953` → after: `L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L953) · [Before (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L953)

```diff
-         xqi8: function(qq, Eq) {
+         L0m0: function(bb, ub) {
```

#### 294. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L956` → after: `L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L956) · [Before (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L956)

```diff
-         AyTF: function(qq, Eq, gq) {
+         mOek: function(bb, ub, hb) {
```

#### 295. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L959` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L959) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L959)

```diff
-         Gxl8: function(qq, Eq, gq) {
+         FDRM: function(bb, ub, hb) {
```

#### 296. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L962` → after: `L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L962) · [Before (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L962)

```diff
-         ik0s: function(qq, Eq, gq) {
+         yPMU: function(bb, ub, hb) {
```
