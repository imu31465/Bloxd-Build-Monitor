# Changed — Bundle Modifications Report (Part 121 / 132)

- **Updated at**: `2026-11-21T04:21 JST`
- **Part**: `121 / 132` (**402** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 120](part-120.md) · [Part 122 →](part-122.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/playGameSources.js` (bbb6l5.0244a119 → halsg.2bd74967 · continued)

- **File**: `bundles/bloxd.io/chunks/js/playGameSources.js` (355 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c)

#### 114. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L848` → after: `L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L848) · [Before (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L848)

```diff
-           } = gq.rg, Oq = Object.keys(qq)[0], mq = qq[Oq];
+           } = hb.ih, Gb = Object.keys(bb)[0], Ub = bb[Gb];
```

#### 115. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L861` → after: `L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L861) · [Before (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L861)

```diff
-         return null !== (Eq = null === (gq = (0, mq.e)()) || void 0 === gq ? void 0 : gq.renderFrame.projectWorldPosToScreenPos(qq)) && void 0 !== Eq ? Eq : {
+         return null !== (ub = null === (hb = (0, Ub.l)()) || void 0 === hb ? void 0 : hb.renderFrame.projectWorldPosToScreenPos(bb)) && void 0 !== ub ? ub : {
```

#### 116. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L870-L878` → after: `L870-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L870-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L870-L878) · [Before (L870-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L870-L878)

```diff
-       Sq || (Sq = !0, (0, Vq.l)(uq.ec.ProgressBarUpdate, (qq => {
-         const Eq = (0, Mq.e)(qq);
-         (0, Mq.b)(Eq) && cq.i.TV("progressBarUpdate", Eq, !0)
-       })), (0, Vq.l)(Zq.u, (qq => {
-         const Eq = (0, Mq.d)(Zq.u, qq);
-         Eq && cq.i.TV("middleScreenBarInitiate", {
-           duration: Eq.cE,
-           uE: Eq.uE,
-           horizBarRemOffset: Eq.BE
+       Nb || (Nb = !0, (0, pb.n)(ab.fc.ProgressBarUpdate, (bb => {
+         const ub = (0, tb.i)(bb);
+         (0, tb.d)(ub) && Sb.i.vp("progressBarUpdate", ub, !0)
+       })), (0, pb.n)(ib.v, (bb => {
+         const ub = (0, tb.g)(ib.v, bb);
+         ub && Sb.i.vp("middleScreenBarInitiate", {
+           duration: ub.wu,
+           Zu: ub.Zu,
+           horizBarRemOffset: ub.Xu
```

#### 117. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L880-L883` → after: `L880-L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L880-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L880-L883) · [Before (L880-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L880-L883)

```diff
-       })), (0, Vq.l)(uq.ec.RemoveMiddleScreenBar, (() => {
-         cq.i.TV("middleScreenBarRemove")
-       })), (0, Vq.l)(Zq.V, (qq => {
-         const Eq = (0, Mq.d)(Zq.V, qq);
+       })), (0, pb.n)(ab.fc.RemoveMiddleScreenBar, (() => {
+         Sb.i.vp("middleScreenBarRemove")
+       })), (0, pb.n)(ib.Y, (bb => {
+         const ub = (0, tb.g)(ib.Y, bb);
```

#### 118. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L886-L888` → after: `L886-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L886-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L886-L888) · [Before (L886-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L886-L888)

```diff
-           const qq = Eq.hq ? null === (gq = (0, mq.e)()) || void 0 === gq ? void 0 : gq.renderFrame.projectDirectionToScreenPos(Eq.hq) : void 0;
-           cq.i.TV("sendHitmarker", {
-             vq: Eq.vq,
+           const bb = ub.xb ? null === (hb = (0, Ub.l)()) || void 0 === hb ? void 0 : hb.renderFrame.projectDirectionToScreenPos(ub.xb) : void 0;
+           Sb.i.vp("sendHitmarker", {
+             Db: ub.Db,
```

#### 119. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L892-L893` → after: `L892-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L892-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L892-L893) · [Before (L892-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L892-L893)

```diff
-       })), (0, Vq.l)(Zq._, (qq => {
-         const Eq = (0, Mq.d)(Zq._, qq);
+       })), (0, pb.n)(ib.bb, (bb => {
+         const ub = (0, tb.g)(ib.bb, bb);
```

#### 120. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L899-L900` → after: `L899-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L899-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L899-L900) · [Before (L899-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L899-L900)

```diff
-             mY: lq,
-             AY: Oq
+             XB: Ob,
+             oB: Gb
```

#### 121. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L902` → after: `L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L902) · [Before (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L902)

```diff
-           cq.i.TV("setDirectionArrow", {
+           Sb.i.vp("setDirectionArrow", {
```

#### 122. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L907` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L907) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L907)

```diff
-             AY: Oq
+             oB: Gb
```

#### 123. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L910-L912` → after: `L910-L912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L910-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L910-L912) · [Before (L910-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L910-L912)

```diff
-       })), (0, Vq.l)(Zq.e, (qq => {
-         const Eq = (0, Mq.d)(Zq.e, qq);
-         Eq && cq.i.TV("clearDirectionArrow", {
+       })), (0, pb.n)(ib.e, (bb => {
+         const ub = (0, tb.g)(ib.e, bb);
+         ub && Sb.i.vp("clearDirectionArrow", {
```

#### 124. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L915-L920` → after: `L915-L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L915-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L915-L920) · [Before (L915-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L915-L920)

```diff
-       })), (0, Vq.l)(Zq.p, (qq => {
-         const Eq = (0, Mq.d)(Zq.p, qq);
-         Eq && cq.i.TV("flyingMiddleMessage", {
-           content: Tq(Eq.tg),
-           hg: Eq.hg,
-           ng: Eq.ng
+       })), (0, pb.n)(ib.m, (bb => {
+         const ub = (0, tb.g)(ib.m, bb);
+         ub && Sb.i.vp("flyingMiddleMessage", {
+           content: Jb(ub.gh),
+           eh: ub.eh,
+           Nh: ub.Nh
```

#### 125. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L922-L923` → after: `L922-L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L922-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L922-L923) · [Before (L922-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L922-L923)

```diff
-       })), (0, Vq.l)(uq.ec.WorldVariation, (qq => {
-         const Eq = (0, Mq.e)(qq);
+       })), (0, pb.n)(ab.fc.WorldVariation, (bb => {
+         const ub = (0, tb.i)(bb);
```

#### 126. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L925-L926` → after: `L925-L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L925-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L925-L926) · [Before (L925-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L925-L926)

```diff
-           const qq = Eq === nq.e ? null : {
-             message: `Currently loaded as variation: ${Eq}`,
+           const bb = ub === xb.g ? null : {
+             message: `Currently loaded as variation: ${ub}`,
```

#### 127. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L929` → after: `L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L929) · [Before (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L929)

```diff
-           cq.i.TV("showPermanentBottomMessage", qq, !0)
+           Sb.i.vp("showPermanentBottomMessage", bb, !0)
```

#### 128. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L931-L932` → after: `L931-L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L931-L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L931-L932) · [Before (L931-L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L931-L932)

```diff
-       })), (0, Vq.l)(Zq.A, (qq => {
-         const Eq = (0, Mq.d)(Zq.A, qq);
+       })), (0, pb.n)(ib.I, (bb => {
+         const ub = (0, tb.g)(ib.I, bb);
```

#### 129. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L937` → after: `L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L937) · [Before (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L937)

```diff
-           } = (0, bq.c)(Eq), lq = {
+           } = (0, zb.h)(ub), Ob = {
```

#### 130. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L940-L941` → after: `L940-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L940-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L940-L941) · [Before (L940-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L940-L941)

```diff
-           for (const Oq of bq.b) lq[Oq] && (lq[Oq] = Tq(lq[Oq]));
-           iq.b.queueQTE(qq, gq, lq).getResult().then((Eq => {
+           for (const Gb of zb.e) Ob[Gb] && (Ob[Gb] = Jb(Ob[Gb]));
+           gb.c.queueQTE(bb, hb, Ob).getResult().then((ub => {
```

#### 131. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L943` → after: `L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L943) · [Before (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L943)

```diff
-             "boolean" === typeof Eq && (null === (gq = (0, mq.e)()) || void 0 === gq || gq.send(fq.b.QteResponse, {
+             "boolean" === typeof ub && (null === (hb = (0, Ub.l)()) || void 0 === hb || hb.send(vb.e.QteResponse, {
```

#### 132. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L948-L958` → after: `L948-L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L948-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L948-L958) · [Before (L948-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L948-L958)

```diff
-         }(Eq.id, Eq.vY)
-       })), (0, Vq.l)(Zq.O, (qq => {
-         const Eq = (0, Mq.d)(Zq.O, qq);
-         "number" === typeof Eq && iq.b.cancelQTE(Eq)
-       })), (0, Vq.d)((() => {
-         iq.b.reset(), cq.i.TV("showPermanentBottomMessage", null, !0)
-       })), (0, Vq.h)((() => {
-         iq.b.reset()
-       })), (0, Vq.l)(uq.ec.EditItemCraftingRecipes, (qq => {
-         const Eq = (0, Mq.e)(qq);
-         (0, Mq.b)(Eq) && cq.i.TV("craftingRecipesEdited", {
+         }(ub.id, ub.eB)
+       })), (0, pb.n)(ib.T, (bb => {
+         const ub = (0, tb.g)(ib.T, bb);
+         "number" === typeof ub && gb.c.cancelQTE(ub)
+       })), (0, pb.i)((() => {
+         gb.c.reset(), Sb.i.vp("showPermanentBottomMessage", null, !0)
+       })), (0, pb.j)((() => {
+         gb.c.reset()
+       })), (0, pb.n)(ab.fc.EditItemCraftingRecipes, (bb => {
+         const ub = (0, tb.i)(bb);
+         (0, tb.d)(ub) && Sb.i.vp("craftingRecipesEdited", {
```

#### 133. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L962-L965` → after: `L962-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L962-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L962-L965) · [Before (L962-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L962-L965)

```diff
-       })), (0, Vq.l)(Zq.K, (qq => {
-         const Eq = (0, Mq.d)(Zq.K, qq);
-         Eq && cq.i.TV("craftingRecipesEdited", {
-           itemName: Eq.bg,
+       })), (0, pb.n)(ib.R, (bb => {
+         const ub = (0, tb.g)(ib.R, bb);
+         ub && Sb.i.vp("craftingRecipesEdited", {
+           itemName: ub.sh,
```

#### 134. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L970` → after: `L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L970) · [Before (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L970)

```diff
-     var Gq = gq(24);
+     var Mb = hb(13);
```

#### 135. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L986` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L986) · [Before (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L986)

```diff
-       return Pq.t.playerFlags(qq.api.apiView, 0)
+       return Wb.o.playerFlags(bb.api.apiView, 0)
```

#### 136. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L989-L991` → after: `L989-L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L989-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L989-L991) · [Before (L989-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L989-L991)

```diff
-         freeCamera: (0, Nq.b)((qq => () => {
-           const Eq = qq.isSessionLive && 0 !== (Jq(qq) & Pq.Pd.FreeCamMoves),
-             gq = qq.freeCameraAllowed() && null === Gq.b.get("scriptedCameraFacing");
+         freeCamera: (0, Zb.d)((bb => () => {
+           const ub = bb.isSessionLive && 0 !== (Ib(bb) & Wb.Ad.FreeCamMoves),
+             hb = bb.freeCameraAllowed() && null === Mb.d.get("scriptedCameraFacing");
```

#### 137. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L993` → after: `L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L993) · [Before (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L993)

```diff
-         }), Lq[0], (qq => (0, Oq.w)(qq)))
+         }), mb[0], (bb => (0, Gb.u)(bb)))
```

#### 138. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L998` → after: `L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L998) · [Before (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L998)

```diff
-           null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.setFreeCameraMovesFly(qq)
+           null === (ub = (0, Ub.l)()) || void 0 === ub || ub.setFreeCameraMovesFly(bb)
```

#### 139. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1003-L1004` → after: `L1003-L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1003-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1003-L1004) · [Before (L1003-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1003-L1004)

```diff
-           const qq = (0, mq.e)();
-           return null !== qq && void 0 !== qq && qq.isSessionLive && qq.renderFrame.hasView && 0 !== (Jq(qq) & Pq.Pd.FreeCam) ? qq.renderFrame.cameraPosition : null
+           const bb = (0, Ub.l)();
+           return null !== bb && void 0 !== bb && bb.isSessionLive && bb.renderFrame.hasView && 0 !== (Ib(bb) & Wb.Ad.FreeCam) ? bb.renderFrame.cameraPosition : null
```

#### 140. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1007` → after: `L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1007) · [Before (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1007)

```diff
-     var Fq = gq(39121);
+     var yb = hb(38802);
```

#### 141. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1012` → after: `L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1012) · [Before (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1012)

```diff
-       const qq = (0, mq.e)();
+       const bb = (0, Ub.l)();
```

#### 142. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1014-L1021` → after: `L1014-L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1014-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1014-L1021) · [Before (L1014-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1014-L1021)

```diff
-       const Eq = 0 !== (Pq.t.playerFlags(qq.api.apiView, 0) & Pq.Pd.FreeCam);
-       Eq !== sq && (sq = Eq, (0, Fq.e)(Eq))
-     }
-     var Kq = gq(307),
-       Cq = gq(37086),
-       Iq = gq(1933);
-     var eq = gq(40432),
-       Dq = gq(40371);
+       const ub = 0 !== (Wb.o.playerFlags(bb.api.apiView, 0) & Wb.Ad.FreeCam);
+       ub !== Vb && (Vb = ub, (0, yb.b)(ub))
+     }
+     var kb = hb(314),
+       Tb = hb(36684),
+       cb = hb(1850);
+     var Qb = hb(40152),
+       Rb = hb(40100);
```

#### 143. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1032` → after: `L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1032) · [Before (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1032)

```diff
-         label: null !== (Eq = (0, eq.d)(qq, "interactionPrompt")) && void 0 !== Eq ? Eq : null
+         label: null !== (ub = (0, Qb.b)(bb, "interactionPrompt")) && void 0 !== ub ? ub : null
```

#### 144. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1036-L1037` → after: `L1036-L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1036-L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1036-L1037) · [Before (L1036-L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1036-L1037)

```diff
-       [Pq.xc.Open, {
-         label: Aq.i.open
+       [Wb.oc.Open, {
+         label: Yb.f.open
```

#### 145. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1039-L1040` → after: `L1039-L1040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1039-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1039-L1040) · [Before (L1039-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1039-L1040)

```diff
-       [Pq.xc.Close, {
-         label: Aq.i.close
+       [Wb.oc.Close, {
+         label: Yb.f.close
```

#### 146. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1042-L1043` → after: `L1042-L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1042-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1042-L1043) · [Before (L1042-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1042-L1043)

```diff
-       [Pq.xc.Milk, {
-         label: Aq.i.milk
+       [Wb.oc.Milk, {
+         label: Yb.f.milk
```

#### 147. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1045-L1046` → after: `L1045-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1045-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1045-L1046) · [Before (L1045-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1045-L1046)

```diff
-       [Pq.xc.Shear, {
-         label: Aq.i.shear
+       [Wb.oc.Shear, {
+         label: Yb.f.shear
```

#### 148. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1048-L1049` → after: `L1048-L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1048-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1048-L1049) · [Before (L1048-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1048-L1049)

```diff
-       [Pq.xc.Tame, {
-         label: Aq.i.tame
+       [Wb.oc.Tame, {
+         label: Yb.f.tame
```

#### 149. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1051-L1052` → after: `L1051-L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1051-L1052) · [Before (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1051-L1052)

```diff
-       [Pq.xc.Feed, {
-         label: Aq.i.feed
+       [Wb.oc.Feed, {
+         label: Yb.f.feed
```

#### 150. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1054-L1055` → after: `L1054-L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1054-L1055) · [Before (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1054-L1055)

```diff
-       [Pq.xc.Ride, {
-         label: Aq.i.ride
+       [Wb.oc.Ride, {
+         label: Yb.f.ride
```

#### 151. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1060` → after: `L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1060) · [Before (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1060)

```diff
-         this.target = qE, this.lc = Pq.id, this.optionName = null, this.pickaxe = new Aq.e
+         this.target = bu, this.bS = Wb.dd, this.optionName = null, this.pickaxe = new Yb.c
```

#### 152. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1064-L1066` → after: `L1064-L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1064-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1064-L1066) · [Before (L1064-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1064-L1066)

```diff
-         const gq = Pq.t.targetBlockId(qq.api.apiView, 0);
-         gq !== this.lc && (this.lc = gq, this.optionName = gq === Pq.id ? null : `${qq.tables.getMetaInfo(gq).rootName}CrosshairText`);
-         const Yq = null === this.optionName ? null : null !== (Eq = qq.tables.getClientOption(this.optionName)) && void 0 !== Eq ? Eq : null;
+         const hb = Wb.o.targetBlockId(bb.api.apiView, 0);
+         hb !== this.bS && (this.bS = hb, this.optionName = hb === Wb.dd ? null : `${bb.tables.getMetaInfo(hb).rootName}CrosshairText`);
+         const Bb = null === this.optionName ? null : null !== (ub = bb.tables.getClientOption(this.optionName)) && void 0 !== ub ? ub : null;
```

#### 153. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1069` → after: `L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1069) · [Before (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1069)

```diff
-           if (0 === (Pq.t.playerFlags(qq.api.apiView, 0) & Pq.Pd.Breaking) || Eq === Pq.id || 0 === Eq) return null;
+           if (0 === (Wb.o.playerFlags(bb.api.apiView, 0) & Wb.Ad.Breaking) || ub === Wb.dd || 0 === ub) return null;
```

#### 154. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1075-L1077` → after: `L1075-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1075-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1075-L1077) · [Before (L1075-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1075-L1077)

```diff
-             xq = null === (gq = qq.items.Fc()) || void 0 === gq ? void 0 : gq.name,
-             Aq = null !== (Yq = Oq.getItemStat(mq, "harvestLevel")) && void 0 !== Yq ? Yq : 0;
-           return (0, Kq.Mc)({
+             Lb = null === (hb = bb.items.MS()) || void 0 === hb ? void 0 : hb.name,
+             Yb = null !== (Bb = Gb.getItemStat(Ub, "harvestLevel")) && void 0 !== Bb ? Bb : 0;
+           return (0, kb.Fc)({
```

#### 155. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1083` → after: `L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1083) · [Before (L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1083)

```diff
-           }) && null !== (lq = Cq.q[Aq]) && void 0 !== lq ? lq : null
+           }) && null !== (Ob = Tb.l[Yb]) && void 0 !== Ob ? Ob : null
```

#### 156. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1088-L1090` → after: `L1088-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1088-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1088-L1090) · [Before (L1088-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1088-L1090)

```diff
-           return gq === Pq.xc.Entity ? gE(qq.promptEntity) : gq === Pq.xc.TameWith ? {
-             label: (0, Aq.w)(qq.tables.nameOfId(qq.interactIcon))
-           } : null !== (Eq = YE.get(gq)) && void 0 !== Eq ? Eq : null
+           return hb === Wb.oc.Entity ? hu(bb.promptEntity) : hb === Wb.oc.TameWith ? {
+             label: (0, Yb.p)(bb.tables.nameOfId(bb.interactIcon))
+           } : null !== (ub = Bu.get(hb)) && void 0 !== ub ? ub : null
```

#### 157. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1092` → after: `L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1092) · [Before (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1092)

```diff
-         return this.target = (0, Iq.m)(this.target, {
+         return this.target = (0, cb.o)(this.target, {
```

#### 158. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1103` → after: `L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1103) · [Before (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1103)

```diff
-         return null !== (qq = null === (Eq = OE) || void 0 === Eq ? void 0 : Eq.target) && void 0 !== qq ? qq : qE
+         return null !== (bb = null === (ub = Gu) || void 0 === ub ? void 0 : ub.target) && void 0 !== bb ? bb : bu
```

#### 159. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1108` → after: `L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1108) · [Before (L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1108)

```diff
-         const gq = (0, Nq.h)((gq => {
+         const hb = (0, Zb.k)((hb => {
```

#### 160. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1127-L1132` → after: `L1127-L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1127-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1127-L1132) · [Before (L1127-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1127-L1132)

```diff
-         health: Aq.p,
-         aura: Aq.k,
-         hotbar: Dq.c.states.hotbar,
-         heldItemAim: Dq.c.states.heldItemAim,
-         crouching: (0, Nq.b)((qq => function(qq) {
-           const Eq = () => 0 !== (Pq.t.playerFlags(qq.apiView, 0) & Pq.Pd.Crouching);
+         health: Yb.l,
+         aura: Yb.h,
+         hotbar: Rb.e.states.hotbar,
+         heldItemAim: Rb.e.states.heldItemAim,
+         crouching: (0, Zb.d)((bb => function(bb) {
+           const ub = () => 0 !== (Wb.o.playerFlags(bb.apiView, 0) & Wb.Ad.Crouching);
```

#### 161. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1137` → after: `L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1137) · [Before (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1137)

```diff
-               return (0, Oq.w)((() => {
+               return (0, Gb.u)((() => {
```

#### 162. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1143-L1148` → after: `L1143-L1148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1143-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1143-L1148) · [Before (L1143-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1143-L1148)

```diff
-         }(qq.api).current), !1, (qq => (0, Oq.w)(qq))),
-         flight: (0, Nq.b)((qq => () => function(qq) {
-           const Eq = Pq.t.playerFlags(qq.apiView, 0);
-           return (0, Aq.n)(0 !== (Eq & Pq.Pd.CanFly), 0 !== (Eq & Pq.Pd.Flying))
-         }(qq.api)), (0, Aq.n)(!1, !1), (qq => (0, Oq.w)(qq))),
-         gliderBoostFuel: (0, Nq.b)((qq => () => Pq.t.gliderBoostFuel(qq.api.apiView, 0)), 0, (qq => (0, Oq.w)(qq))),
+         }(bb.api).current), !1, (bb => (0, Gb.u)(bb))),
+         flight: (0, Zb.d)((bb => () => function(bb) {
+           const ub = Wb.o.playerFlags(bb.apiView, 0);
+           return (0, Yb.j)(0 !== (ub & Wb.Ad.CanFly), 0 !== (ub & Wb.Ad.Flying))
+         }(bb.api)), (0, Yb.j)(!1, !1), (bb => (0, Gb.u)(bb))),
+         gliderBoostFuel: (0, Zb.d)((bb => () => Wb.o.gliderBoostFuel(bb.api.apiView, 0)), 0, (bb => (0, Gb.u)(bb))),
```

#### 163. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1152-L1155` → after: `L1152-L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1152-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1152-L1155) · [Before (L1152-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1152-L1155)

```diff
-         hotbarSlotRequested: Dq.c.events.hotbarSlotRequested,
-         hotbarScrolled: Dq.c.events.hotbarScrolled,
-         numberKeyPressed: Dq.c.events.numberKeyPressed,
-         shotDamageToShow: (0, Aq.s)((qq => !0 === (0, eq.d)(qq, "showDamageAmounts")))
+         hotbarSlotRequested: Rb.e.events.hotbarSlotRequested,
+         hotbarScrolled: Rb.e.events.hotbarScrolled,
+         numberKeyPressed: Rb.e.events.numberKeyPressed,
+         shotDamageToShow: (0, Yb.o)((bb => !0 === (0, Qb.b)(bb, "showDamageAmounts")))
```

#### 164. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1158` → after: `L1158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1158) · [Before (L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1158)

```diff
-         selectHotbarSlot: Dq.c.commands.selectHotbarSlot,
+         selectHotbarSlot: Rb.e.commands.selectHotbarSlot,
```

#### 165. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1166` → after: `L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1166) · [Before (L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1166)

```diff
-           const Yq = (0, mq.e)(),
+           const Bb = (0, Ub.l)(),
```

#### 166. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1168-L1169` → after: `L1168-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1168-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1168-L1169) · [Before (L1168-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1168-L1169)

```diff
-             Oq = null === Yq || void 0 === Yq || null === (qq = Yq.items.Fc()) || void 0 === qq || null === (Eq = qq.attributes) || void 0 === Eq || null === (gq = Eq.customAttributes) || void 0 === gq ? void 0 : gq.enchantments;
-           return xE = null !== Yq && null !== Oq && void 0 !== Oq && Oq.Momentum ? 0 !== (Pq.t.playerFlags(Yq.api.apiView, 0) & Pq.Pd.Breaking) ? Math.max(0, Pq.t.momentumFrac(Yq.api.apiView, 0)) : Math.max(0, xE - (lq - AE) / 1500) : 0, AE = lq, xE
+             Gb = null === Bb || void 0 === Bb || null === (bb = Bb.items.MS()) || void 0 === bb || null === (ub = bb.attributes) || void 0 === ub || null === (hb = ub.customAttributes) || void 0 === hb ? void 0 : hb.enchantments;
+           return Lu = null !== Bb && null !== Gb && void 0 !== Gb && Gb.Momentum ? 0 !== (Wb.o.playerFlags(Bb.api.apiView, 0) & Wb.Ad.Breaking) ? Math.max(0, Wb.o.momentumFrac(Bb.api.apiView, 0)) : Math.max(0, Lu - (Ob - Yu) / 1500) : 0, Yu = Ob, Lu
```

#### 167. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1172` → after: `L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1172) · [Before (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1172)

```diff
-     var NE = gq(40320);
+     var Zu = hb(40040);
```

#### 168. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1176` → after: `L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1176) · [Before (L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1176)

```diff
-         null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.LobbyManage, qq)
+         null === (ub = (0, Ub.l)()) || void 0 === ub || ub.send(vb.e.LobbyManage, bb)
```

#### 169. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1179-L1184` → after: `L1179-L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1179-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1179-L1184) · [Before (L1179-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1179-L1184)

```diff
-     var VE = gq(1226),
-       dE = gq(36543),
-       jE = gq(8755),
-       HE = gq(1622),
-       oE = gq(2357),
-       PE = gq(4627);
+     var pu = hb(1133),
+       ou = hb(36113),
+       Au = hb(8520),
+       lu = hb(1537),
+       Ku = hb(2273),
+       Wu = hb(4570);
```

#### 170. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1192` → after: `L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1192) · [Before (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1192)

```diff
-       "inGame" !== Gq.b.get("gameState") || (0, HE.r)() || cq.i.TV("ctrlCrouchWithoutFullscreen")
+       "inGame" !== Mb.d.get("gameState") || (0, lu.t)() || Sb.i.vp("ctrlCrouchWithoutFullscreen")
```

#### 171. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1198` → after: `L1198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1198) · [Before (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1198)

```diff
-             rE && (rE = !1, cq.i.TV("requestEmoteWheelHoldOpen"))
+             ju && (ju = !1, Sb.i.vp("requestEmoteWheelHoldOpen"))
```

#### 172. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1202` → after: `L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1202) · [Before (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1202)

```diff
-           cq.i.TV("toggleFullCoordinateOverlay")
+           Sb.i.vp("toggleFullCoordinateOverlay")
```

#### 173. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1205` → after: `L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1205) · [Before (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1205)

```diff
-           (0, dE.e)() || cq.i.TV("YKeyPressed")
+           (0, ou.c)() || Sb.i.vp("YKeyPressed")
```

#### 174. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1208` → after: `L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1208) · [Before (L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1208)

```diff
-           (0, dE.e)() || cq.i.TV("XKeyPressed")
+           (0, ou.c)() || Sb.i.vp("XKeyPressed")
```

#### 175. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1212-L1213` → after: `L1212-L1213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1212-L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1212-L1213) · [Before (L1212-L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1212-L1213)

```diff
-           cq.i.TV("mouseState", {
-             nu: VE.d.DownFirePrimary,
+           Sb.i.vp("mouseState", {
+             ra: pu.e.DownFirePrimary,
```

#### 176. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1218-L1219` → after: `L1218-L1219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1218-L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1218-L1219) · [Before (L1218-L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1218-L1219)

```diff
-           cq.i.TV("mouseState", {
-             nu: VE.d.DownFireSecondary,
+           Sb.i.vp("mouseState", {
+             ra: pu.e.DownFireSecondary,
```

#### 177. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1224-L1225` → after: `L1224-L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1224-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1224-L1225) · [Before (L1224-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1224-L1225)

```diff
-           cq.i.TV("mouseState", {
-             nu: VE.d.TouchDownLong,
+           Sb.i.vp("mouseState", {
+             ra: pu.e.TouchDownLong,
```

#### 178. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1232` → after: `L1232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1232) · [Before (L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1232)

```diff
-           yE(!1), rE ? (rE = !1, (0, jE.e)() || cq.i.TV("requestEmoteWheelHoldOpen")) : cq.i.TV("requestEmoteWheelHoldRelease")
+           du(!1), ju ? (ju = !1, (0, Au.c)() || Sb.i.vp("requestEmoteWheelHoldOpen")) : Sb.i.vp("requestEmoteWheelHoldRelease")
```

#### 179. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1236-L1237` → after: `L1236-L1237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1236-L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1236-L1237) · [Before (L1236-L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1236-L1237)

```diff
-           cq.i.TV("mouseState", {
-             nu: VE.d.UpFirePrimary,
+           Sb.i.vp("mouseState", {
+             ra: pu.e.UpFirePrimary,
```

#### 180. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1242-L1243` → after: `L1242-L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1242-L1243) · [Before (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1242-L1243)

```diff
-           cq.i.TV("mouseState", {
-             nu: VE.d.UpFireSecondary,
+           Sb.i.vp("mouseState", {
+             ra: pu.e.UpFireSecondary,
```

#### 181. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1248-L1249` → after: `L1248-L1249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1248-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1248-L1249) · [Before (L1248-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1248-L1249)

```diff
-           cq.i.TV("mouseState", {
-             nu: VE.d.UpFirePrimary,
+           Sb.i.vp("mouseState", {
+             ra: pu.e.UpFirePrimary,
```

#### 182. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1257-L1259` → after: `L1257-L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1257-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1257-L1259) · [Before (L1257-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1257-L1259)

```diff
-       nE || (nE = !0, (0, PE.h)((qq => {
-         if ((0, lq.b)()) return;
-         const Eq = (0, PE.d)(qq) ? "primary-fire" : qq.action;
+       xu || (xu = !0, (0, Wu.e)((bb => {
+         if ((0, Ob.d)()) return;
+         const ub = (0, Wu.c)(bb) ? "primary-fire" : bb.action;
```

#### 183. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1262` → after: `L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1262) · [Before (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1262)

```diff
-           if (0 === (qq.flags & oE.e.Synthetic)) {
+           if (0 === (bb.flags & Ku.b.Synthetic)) {
```

#### 184. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1269-L1274` → after: `L1269-L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1269-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1269-L1274) · [Before (L1269-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1269-L1274)

```diff
-     var iE = gq(296),
-       ZE = gq(96),
-       fE = gq(38),
-       ME = gq(40434),
-       TE = gq(1308),
-       zE = gq(38939);
+     var gu = hb(298),
+       iu = hb(86),
+       vu = hb(29),
+       tu = hb(40154),
+       Ju = hb(1218),
+       eu = hb(38615);
```

#### 185. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1279` → after: `L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1279) · [Before (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1279)

```diff
-         null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.CodeCollab, (0, fq.o)(qq), (0, zE.g)(qq))
+         null === (ub = (0, Ub.l)()) || void 0 === ub || ub.send(vb.e.CodeCollab, (0, vb.n)(bb), (0, eu.e)(bb))
```

#### 186. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1282` → after: `L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1282) · [Before (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1282)

```diff
-     var GE = gq(39056);
+     var Mu = hb(38727);
```

#### 187. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1288` → after: `L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1288) · [Before (L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1288)

```diff
-       return "inGame" === Gq.b.get("gameState") && !(0, dE.e)()
+       return "inGame" === Mb.d.get("gameState") && !(0, ou.c)()
```

#### 188. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1292` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1292) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1292)

```diff
-           (0, HE.v)(qq, "inventory", (0, NE.j)())
+           (0, lu.C)(bb, "inventory", (0, Zu.p)())
```

#### 189. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1295` → after: `L1295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1295) · [Before (L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1295)

```diff
-           LE && RE() && (0, HE.u)(qq, iE.p.SHOP, !LE.shopIsEmpty(oq.c.get("shopInfo")))
+           mu && qu() && (0, lu.B)(bb, gu.u.SHOP, !mu.shopIsEmpty(Kb.b.get("shopInfo")))
```

#### 190. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1298-L1300` → after: `L1298-L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1298-L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1298-L1300) · [Before (L1298-L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1298-L1300)

```diff
-           RE() && (0, HE.u)(qq, iE.p.LOBBY_LEADERBOARD, (0, GE.d)({
-             lobbyLeaderboardInfo: oq.c.get("lobbyLeaderboardInfo"),
-             lobbyManage: oq.c.get("lobbyManage")
+           qu() && (0, lu.B)(bb, gu.u.LOBBY_LEADERBOARD, (0, Mu.c)({
+             lobbyLeaderboardInfo: Kb.b.get("lobbyLeaderboardInfo"),
+             lobbyManage: Kb.b.get("lobbyManage")
```

#### 191. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1306` → after: `L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1306) · [Before (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1306)

```diff
-           gq ? (0, HE.y)(qq, !0, gq) : (0, HE.v)(qq, "retentionFeatures", !(!oq.c.get("_tasks") && !oq.c.get("_availableLeaderboards")))
+           hb ? (0, lu.E)(bb, !0, hb) : (0, lu.C)(bb, "retentionFeatures", !(!Kb.b.get("_tasks") && !Kb.b.get("_availableLeaderboards")))
```

#### 192. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1309` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1309) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1309)

```diff
-           (0, HE.v)(qq, "inviteLink", ZE.featureFlags.canUseInviteLinks)
+           (0, lu.C)(bb, "inviteLink", iu.featureFlags.canUseInviteLinks)
```

#### 193. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1314` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1314) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1314)

```diff
-             const gq = (0, mq.e)(),
+             const hb = (0, Ub.l)(),
```

#### 194. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1316-L1319` → after: `L1316-L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1316-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1316-L1319) · [Before (L1316-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1316-L1319)

```diff
-               lq = Yq ? Yq.Py(Yq.localId) : null,
-               Oq = null !== (Eq = null === lq || void 0 === lq ? void 0 : lq.map((qq => Math.floor(qq)))) && void 0 !== Eq ? Eq : null;
-             (0, HE.y)(qq, null !== Oq && (0, zE.c)((0, TE.e)()), (() => {
-               cq.i.TV("EditLobbyCode", Oq)
+               Ob = Bb ? Bb.iK(Bb.localId) : null,
+               Gb = null !== (ub = null === Ob || void 0 === Ob ? void 0 : Ob.map((bb => Math.floor(bb)))) && void 0 !== ub ? ub : null;
+             (0, lu.E)(bb, null !== Gb && (0, eu.d)((0, Ju.b)()), (() => {
+               Sb.i.vp("EditLobbyCode", Gb)
```

#### 195. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1324` → after: `L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1324) · [Before (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1324)

```diff
-           cq.i.TV("showUi", !1)
+           Sb.i.vp("showUi", !1)
```

#### 196. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1329` → after: `L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1329) · [Before (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1329)

```diff
-           cq.i.TV("showUi", !0)
+           Sb.i.vp("showUi", !0)
```

#### 197. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1334` → after: `L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1334) · [Before (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1334)

```diff
-       JE || (JE = !0, gq.e(153).then((() => gq(42369))).then((qq => {
+       Iu || (Iu = !0, hb.e(153).then((() => hb(42019))).then((bb => {
```

#### 198. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1338-L1340` → after: `L1338-L1340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1338-L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1338-L1340) · [Before (L1338-L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1338-L1340)

```diff
-       })), (0, ME.w)((qq => {
-         qq || !(0, ME.e)() || (0, ZE.isMobile)() || !fE.i.getItem("disableFullscreen") || (0, HE.p)() || Gq.b.set({
-           openEverythingMenuName: iE.p.SETTINGS
+       })), (0, tu.C)((bb => {
+         bb || !(0, tu.l)() || (0, iu.isMobile)() || !vu.j.getItem("disableFullscreen") || (0, lu.q)() || Mb.d.set({
+           openEverythingMenuName: gu.u.SETTINGS
```

#### 199. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1342` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1342) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1342)

```diff
-       })), (0, PE.h)((qq => {
+       })), (0, Wu.e)((bb => {
```

#### 200. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1349` → after: `L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1349) · [Before (L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1349)

```diff
-         (0, lq.b)() || (gq ? null === (Oq = UE[Eq]) || void 0 === Oq || Oq.call(UE, function(qq) {
+         (0, Ob.d)() || (hb ? null === (Gb = Eu[ub]) || void 0 === Gb || Gb.call(Eu, function(bb) {
```

#### 201. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1364-L1366` → after: `L1364-L1366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1364-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1364-L1366) · [Before (L1364-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1364-L1366)

```diff
-     var XE = gq(38910),
-       wE = gq(38927),
-       KE = gq(38915);
+     var Fu = hb(38585),
+       fu = hb(38598),
+       ku = hb(38588);
```

#### 202. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1370` → after: `L1370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1370) · [Before (L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1370)

```diff
-         null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.CompleteTask, (0, fq.q)(qq))
+         null === (ub = (0, Ub.l)()) || void 0 === ub || ub.send(vb.e.CompleteTask, (0, vb.r)(bb))
```

#### 203. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1378-L1380` → after: `L1378-L1380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1378-L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1378-L1380) · [Before (L1378-L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1378-L1380)

```diff
-         null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.GeneralCookieSet, (0, fq.w)({
-           KA: gq,
-           CA: Yq
+         null === (ub = (0, Ub.l)()) || void 0 === ub || ub.send(vb.e.GeneralCookieSet, (0, vb.v)({
+           yY: hb,
+           VY: Bb
```

#### 204. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1387` → after: `L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1387) · [Before (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1387)

```diff
-           xu: Yq
+           ha: Bb
```

#### 205. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1389-L1392` → after: `L1389-L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1389-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1389-L1392) · [Before (L1389-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1389-L1392)

```diff
-         null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.UiRequestResp, (0, fq.V)({
-           ou: gq,
-           Pu: Yq,
-           Qu: 5
+         null === (ub = (0, Ub.l)()) || void 0 === ub || ub.send(vb.e.UiRequestResp, (0, vb.W)({
+           Xa: hb,
+           oa: Bb,
+           Aa: 5
```

#### 206. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1399` → after: `L1399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1399) · [Before (L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1399)

```diff
-           xu: Yq
+           ha: Bb
```

#### 207. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1401` → after: `L1401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1401) · [Before (L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1401)

```diff
-         null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.UiRequestResponded, (0, fq.S)({
+         null === (ub = (0, Ub.l)()) || void 0 === ub || ub.send(vb.e.UiRequestResponded, (0, vb.S)({
```

#### 208. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1403` → after: `L1403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1403) · [Before (L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1403)

```diff
-           xu: Yq
+           ha: Bb
```

#### 209. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1413` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1413) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1413)

```diff
-         null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.LeaderboardRequest, {
+         null === (ub = (0, Ub.l)()) || void 0 === ub || ub.send(vb.e.LeaderboardRequest, {
```

#### 210. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1421` → after: `L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1421) · [Before (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1421)

```diff
-     const eE = Hq.c.ZH / 2,
+     const Qu = lb.e.Vl / 2,
```

#### 211. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1432` → after: `L1432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1432) · [Before (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1432)

```diff
-         const qq = (0, mq.e)();
+         const bb = (0, Ub.l)();
```

#### 212. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1448` → after: `L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1448) · [Before (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1448)

```diff
-           const Wq = gq.lc(Oq, Aq, Bq);
+           const wb = hb.bS(Gb, Yb, Hb);
```

#### 213. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1454-L1455` → after: `L1454-L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1454-L1455) · [Before (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1454-L1455)

```diff
-         const qq = (0, mq.e)();
-         return null !== qq && 0 !== (Pq.t.playerFlags(qq.api.apiView, 0) & Pq.Pd.DropAhead)
+         const bb = (0, Ub.l)();
+         return null !== bb && 0 !== (Wb.o.playerFlags(bb.api.apiView, 0) & Wb.Ad.DropAhead)
```

#### 214. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1458-L1461` → after: `L1458-L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1458-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1458-L1461) · [Before (L1458-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1458-L1461)

```diff
-     var Yg = gq(36995),
-       lg = gq(39024),
-       Og = gq(1336),
-       mg = gq(40385);
+     var Bh = hb(36606),
+       Oh = hb(38710),
+       Gh = hb(1249),
+       Uh = hb(40114);
```

#### 215. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1483` → after: `L1483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1483) · [Before (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1483)

```diff
-       const mq = () => (gq = (0, Iq.m)(gq, qq()), gq);
+       const Ub = () => (hb = (0, cb.o)(hb, bb()), hb);
```

#### 216. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1491` → after: `L1491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1491) · [Before (L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1491)

```diff
-           let gq = (0, Nq.f)();
+           let hb = (0, Zb.h)();
```

#### 217. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1493` → after: `L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1493) · [Before (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1493)

```diff
-             const Eq = (0, Nq.f)();
+             const ub = (0, Zb.h)();
```

#### 218. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1504` → after: `L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1504) · [Before (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1504)

```diff
-           const qq = aq.e.ids(),
+           const bb = Xb.c.ids(),
```

#### 219. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1509-L1511` → after: `L1509-L1511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1509-L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1509-L1511) · [Before (L1509-L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1509-L1511)

```diff
-               name: null !== (gq = aq.e.getName(Oq)) && void 0 !== gq ? gq : null,
-               ranks: null !== (Yq = aq.e.getSetting(Oq, "ranks")) && void 0 !== Yq ? Yq : ug,
-               cosmetics: null !== (lq = (0, aq.h)(Oq)) && void 0 !== lq ? lq : null
+               name: null !== (hb = Xb.c.getName(Gb)) && void 0 !== hb ? hb : null,
+               ranks: null !== (Bb = Xb.c.getSetting(Gb, "ranks")) && void 0 !== Bb ? Bb : ah,
+               cosmetics: null !== (Ob = (0, Xb.g)(Gb)) && void 0 !== Ob ? Ob : null
```

#### 220. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1517` → after: `L1517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1517) · [Before (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1517)

```diff
-             localId: (0, Nq.f)()
+             localId: (0, Zb.h)()
```

#### 221. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1525` → after: `L1525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1525) · [Before (L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1525)

```diff
-           for (const lq of aq.e.ids()) {
+           for (const Ob of Xb.c.ids()) {
```

#### 222. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1528-L1530` → after: `L1528-L1530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1528-L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1528-L1530) · [Before (L1528-L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1528-L1530)

```diff
-               colour: null !== (Eq = aq.e.getSetting(lq, "colorInLobbyLeaderboard")) && void 0 !== Eq ? Eq : null,
-               values: null !== (gq = aq.e.getSetting(lq, "lobbyLeaderboardValues")) && void 0 !== gq ? gq : null,
-               tags: null !== (Yq = aq.e.getSetting(lq, "lobbyLeaderboardTags")) && void 0 !== Yq ? Yq : null
+               colour: null !== (ub = Xb.c.getSetting(Ob, "colorInLobbyLeaderboard")) && void 0 !== ub ? ub : null,
+               values: null !== (hb = Xb.c.getSetting(Ob, "lobbyLeaderboardValues")) && void 0 !== hb ? hb : null,
+               tags: null !== (Bb = Xb.c.getSetting(Ob, "lobbyLeaderboardTags")) && void 0 !== Bb ? Bb : null
```

#### 223. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1550` → after: `L1550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1550) · [Before (L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1550)

```diff
-             const gq = (0, Nq.f)();
+             const hb = (0, Zb.h)();
```

#### 224. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1553-L1555` → after: `L1553-L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1553-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1553-L1555) · [Before (L1553-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1553-L1555)

```diff
-                 yY: Eq,
-                 tY: Yq,
-                 rY: lq
+                 vB: ub,
+                 tB: Bb,
+                 JB: Ob
```

#### 225. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1559-L1560` → after: `L1559-L1560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1559-L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1559-L1560) · [Before (L1559-L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1559-L1560)

```diff
-                 tY: Yq,
-                 rY: lq
+                 tB: Bb,
+                 JB: Ob
```

#### 226. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1566-L1569` → after: `L1566-L1569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1566-L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1566-L1569) · [Before (L1566-L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1566-L1569)

```diff
-     var ag = gq(2834),
-       Vg = gq(1710),
-       dg = gq(623),
-       jg = gq(40440);
+     var Xh = hb(2712),
+       ph = hb(1622),
+       oh = hb(612),
+       Ah = hb(40157);
```

#### 227. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1575` → after: `L1575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1575) · [Before (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1575)

```diff
-         null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.ShopMenuChanged, (0, fq.M)(qq))
+         null === (ub = (0, Ub.l)()) || void 0 === ub || ub.send(vb.e.ShopMenuChanged, (0, vb.L)(bb))
```

#### 228. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1584` → after: `L1584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1584) · [Before (L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1584)

```diff
-         null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.ItemBought, {
+         null === (ub = (0, Ub.l)()) || void 0 === ub || ub.send(vb.e.ItemBought, {
```

#### 229. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1587` → after: `L1587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1587) · [Before (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1587)

```diff
-           shopVersion: oq.c.get("_shopVersion"),
+           shopVersion: Kb.b.get("_shopVersion"),
```

#### 230. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1593-L1594` → after: `L1593-L1594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1593-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1593-L1594) · [Before (L1593-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1593-L1594)

```diff
-     var yg = gq(4637);
-     const tg = oE.C.LookFrozen | oE.C.ClicksSuppressed;
+     var dh = hb(4584);
+     const rh = Ku.t.LookFrozen | Ku.t.ClicksSuppressed;
```

#### 231. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1598-L1601` → after: `L1598-L1601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1598-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1598-L1601) · [Before (L1598-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1598-L1601)

```diff
-       null !== (gq = (0, mq.e)()) && void 0 !== gq && gq.send(qq, Eq) || console.warn(`[bloxd-wasm-client] message ${qq} not sent: no live game or the core's command ring is full`)
-     }(0, Vq.l)(Zq.bb, (qq => {
-       const Eq = (0, Mq.d)(Zq.bb, qq);
-       void 0 !== Eq && cq.i.TV("setDiscordReportKey", Eq)
+       null !== (hb = (0, Ub.l)()) && void 0 !== hb && hb.send(bb, ub) || console.warn(`[bloxd-wasm-client] message ${bb} not sent: no live game or the core's command ring is full`)
+     }(0, pb.n)(ib.cb, (bb => {
+       const ub = (0, tb.g)(ib.cb, bb);
+       void 0 !== ub && Sb.i.vp("setDiscordReportKey", ub)
```

#### 232. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1605-L1606` → after: `L1605-L1606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1605-L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1605-L1606) · [Before (L1605-L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1605-L1606)

```diff
-         rg(fq.b.IgnoreUser, (0, fq.x)({
-           um: qq
+         jh(vb.e.IgnoreUser, (0, vb.z)({
+           lU: bb
```

#### 233. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1613` → after: `L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1613) · [Before (L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1613)

```diff
-           Oc: Yq,
+           uS: Bb,
```

#### 234. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1616-L1620` → after: `L1616-L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1616-L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1616-L1620) · [Before (L1616-L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1616-L1620)

```diff
-         rg(fq.b.UserReport, (0, fq.gb)({
-           Sc: Eq,
-           Gc: gq,
-           Oc: Yq,
-           mc: lq
+         jh(vb.e.UserReport, (0, vb.fb)({
+           gS: ub,
+           iS: hb,
+           uS: Bb,
+           hS: Ob
```

#### 235. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1626)

```diff
-           Oc: gq,
+           uS: hb,
```

#### 236. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1629-L1633` → after: `L1629-L1633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1629-L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1629-L1633) · [Before (L1629-L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1629-L1633)

```diff
-         rg(fq.b.UserReport, (0, fq.gb)({
-           Sc: "",
-           Gc: Eq,
-           Oc: gq,
-           mc: Yq
+         jh(vb.e.UserReport, (0, vb.fb)({
+           gS: "",
+           iS: ub,
+           uS: hb,
+           hS: Bb
```

#### 237. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1637` → after: `L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1637) · [Before (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1637)

```diff
-         rg(fq.b.ReqDiscordReportKey, (0, fq.H)(qq))
+         jh(vb.e.ReqDiscordReportKey, (0, vb.I)(bb))
```

#### 238. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1642` → after: `L1642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1642) · [Before (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1642)

```diff
-           Oc: gq,
+           uS: hb,
```

#### 239. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1645-L1650` → after: `L1645-L1650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1645-L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1645-L1650) · [Before (L1645-L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1645-L1650)

```diff
-         "customGame" === Eq ? rg(fq.b.CustomGameReport, (0, fq.t)({
-           Oc: gq,
-           mc: Yq
-         })) : rg(fq.b.LobbyReport, (0, fq.y)({
-           Oc: gq,
-           mc: Yq
+         "customGame" === ub ? jh(vb.e.CustomGameReport, (0, vb.u)({
+           uS: hb,
+           hS: Bb
+         })) : jh(vb.e.LobbyReport, (0, vb.D)({
+           uS: hb,
+           hS: Bb
```

#### 240. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1654` → after: `L1654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1654) · [Before (L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1654)

```diff
-         rg(fq.b.UpdateMyCosmetic, (0, fq.eb)(qq))
+         jh(vb.e.UpdateMyCosmetic, (0, vb.db)(bb))
```

#### 241. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1657` → after: `L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1657) · [Before (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1657)

```diff
-         !qq || QE ? (0, yg.k)(tg, qq ? tg : 0) : cq.i.TV("requestEmoteWheelHoldRelease")
+         !bb || Cu ? (0, dh.j)(rh, bb ? rh : 0) : Sb.i.vp("requestEmoteWheelHoldRelease")
```

#### 242. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1660-L1662` → after: `L1660-L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1660-L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1660-L1662) · [Before (L1660-L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1660-L1662)

```diff
-     var hg = gq(40448),
-       ng = gq(9379),
-       bg = gq(39525);
+     var Dh = hb(40159),
+       xh = hb(9181),
+       zh = hb(39226);
```

#### 243. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1672` → after: `L1672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1672) · [Before (L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1672)

```diff
-           const Yq = (0, mq.e)();
+           const Bb = (0, Ub.l)();
```

#### 244. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1680` → after: `L1680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1680) · [Before (L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1680)

```diff
-           return (0, bg.g)(((qq, Eq, gq) => (Aq = Oq.getBlockId(qq, Eq, gq), 0 !== Aq)), lq.cameraPosition, (0, bg.i)((qq => Pq.t.viewProj(xq.apiView, 0, qq)), Eq, gq, ig), bg.d, Zg, fg) ? {
+           return (0, zh.g)(((bb, ub, hb) => (Yb = Gb.getBlockId(bb, ub, hb), 0 !== Yb)), Ob.cameraPosition, (0, zh.i)((bb => Wb.o.viewProj(Lb.apiView, 0, bb)), ub, hb, gh), zh.d, ih, vh) ? {
```

#### 245. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1683` → after: `L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1683) · [Before (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1683)

```diff
-             name: (0, ng.h)(Aq)
+             name: (0, xh.g)(Yb)
```

#### 246. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1690` → after: `L1690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1690) · [Before (L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1690)

```diff
-           null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.setBlockHighlight(qq)
+           null === (ub = (0, Ub.l)()) || void 0 === ub || ub.setBlockHighlight(bb)
```

#### 247. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1693-L1700` → after: `L1693-L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1693-L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1693-L1700) · [Before (L1693-L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1693-L1700)

```diff
-     var zg = gq(1914),
-       Sg = gq(40454),
-       pg = gq(40462),
-       Gg = gq(4319),
-       Lg = gq(4289),
-       Jg = gq(40466),
-       kg = gq(3166),
-       Rg = gq(3170);
+     var eh = hb(1824),
+       Nh = hb(40167),
+       sh = hb(40171),
+       Mh = hb(4258),
+       mh = hb(4231),
+       Ih = hb(40173),
+       Ph = hb(3063),
+       qh = hb(3067);
```

#### 248. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1705-L1706` → after: `L1705-L1706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1705-L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1705-L1706) · [Before (L1705-L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1705-L1706)

```diff
-       const Eq = qq.startsWith(Rg.l),
-         [gq, Yq = gq, lq = gq] = (Eq ? qq.slice(Rg.l.length) : qq).split(Rg.h);
+       const ub = bb.startsWith(qh.k),
+         [hb, Bb = hb, Ob = hb] = (ub ? bb.slice(qh.k.length) : bb).split(qh.j);
```

#### 249. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1720-L1724` → after: `L1720-L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1720-L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1720-L1724) · [Before (L1720-L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1720-L1724)

```diff
-     var wg = gq(3157),
-       Kg = gq(4280),
-       Cg = gq(4310),
-       Ig = gq(40470),
-       eg = gq(40476);
+     var fh = hb(3055),
+       kh = hb(4219),
+       Th = hb(4252),
+       ch = hb(40177),
+       Qh = hb(40180);
```

#### 250. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1734-L1736` → after: `L1734-L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1734-L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1734-L1736) · [Before (L1734-L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1734-L1736)

```diff
-       return OY || (OY = !0, (0, Cg.g)().then((qq => {
-         qq && (0, zg.d)()
-       }))), gY ??= Promise.all([(0, wg.g)(), (Fg ??= gq.e(1).then((() => gq(42383))).then((qq => {
+       return GB || (GB = !0, (0, Th.i)().then((bb => {
+         bb && (0, eh.e)()
+       }))), hB ??= Promise.all([(0, fh.g)(), (yh ??= hb.e(1).then((() => hb(42035))).then((bb => {
```

#### 251. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1743-L1744` → after: `L1743-L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1743-L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1743-L1744) · [Before (L1743-L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1743-L1744)

```diff
-           codes: (0, Rg.A)(Eq, Yq + 1),
-           pool: gq.split(Rg.v).map(sg)
+           codes: (0, qh.E)(ub, Bb + 1),
+           pool: hb.split(qh.t).map(Vh)
```

#### 252. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1748` → after: `L1748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1748) · [Before (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1748)

```diff
-       })), Fg), (0, eg.f)(), gq.e(190).then((() => gq(9301)))]).then((qq => {
+       })), yh), (0, Qh.h)(), hb.e(190).then((() => hb(9106)))]).then((bb => {
```

#### 253. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1750` → after: `L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1750) · [Before (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1750)

```diff
-         Eq.followBundledTextures(), qY = Eq, EY = gq, (0, zg.d)()
+         ub.followBundledTextures(), bB = ub, uB = hb, (0, eh.e)()
```

#### 254. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1758` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1758) · [Before (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1758)

```diff
-       return null !== (Eq = null === (gq = (0, Ig.j)()) || void 0 === gq ? void 0 : gq.textureUrl(qq)) && void 0 !== Eq ? Eq : qY.itemSpriteUrl(qq)
+       return null !== (ub = null === (hb = (0, ch.i)()) || void 0 === hb ? void 0 : hb.textureUrl(bb)) && void 0 !== ub ? ub : bB.itemSpriteUrl(bb)
```

#### 255. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1763` → after: `L1763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1763) · [Before (L1763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1763)

```diff
-       return null !== (Eq = null === (gq = (0, Ig.j)()) || void 0 === gq ? void 0 : gq.textureUrl(qq)) && void 0 !== Eq ? Eq : qY.blockTextureUrl(qq)
+       return null !== (ub = null === (hb = (0, ch.i)()) || void 0 === hb ? void 0 : hb.textureUrl(bb)) && void 0 !== ub ? ub : bB.blockTextureUrl(bb)
```

#### 256. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1768` → after: `L1768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1768) · [Before (L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1768)

```diff
-       return null !== (Eq = (0, wg.d)(qq)) && void 0 !== Eq ? Eq : qq
+       return null !== (ub = (0, fh.d)(bb)) && void 0 !== ub ? ub : bb
```

#### 257. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1773` → after: `L1773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1773) · [Before (L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1773)

```diff
-       return null !== (gq = null !== (Yq = null !== (lq = AY(qq)) && void 0 !== lq ? lq : null === Eq || void 0 === Eq ? void 0 : Eq.rotated[qq]) && void 0 !== Yq ? Yq : null === Eq || void 0 === Eq ? void 0 : Eq.animated[qq]) && void 0 !== gq ? gq : qY.notFoundUrl()
+       return null !== (hb = null !== (Bb = null !== (Ob = YB(bb)) && void 0 !== Ob ? Ob : null === ub || void 0 === ub ? void 0 : ub.rotated[bb]) && void 0 !== Bb ? Bb : null === ub || void 0 === ub ? void 0 : ub.animated[bb]) && void 0 !== hb ? hb : bB.notFoundUrl()
```

#### 258. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1777` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1777) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1777)

```diff
-       return void 0 !== (0, kg.e)(qq) ? qq : /^[1-9][0-9]*$/.test(qq) ? (0, kg.h)(Number(qq)) : void 0
+       return void 0 !== (0, Ph.e)(bb) ? bb : /^[1-9][0-9]*$/.test(bb) ? (0, Ph.f)(Number(bb)) : void 0
```

#### 259. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1785` → after: `L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1785) · [Before (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1785)

```diff
-         return null !== (gq = void 0 === Eq ? null : xY(Eq)) && void 0 !== gq ? gq : qY.notFoundUrl()
+         return null !== (hb = void 0 === ub ? null : LB(ub)) && void 0 !== hb ? hb : bB.notFoundUrl()
```

#### 260. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1787` → after: `L1787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1787) · [Before (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1787)

```diff
-       return null !== (Eq = qY.particleUrl(qq)) && void 0 !== Eq ? Eq : qY.notFoundUrl()
+       return null !== (ub = bB.particleUrl(bb)) && void 0 !== ub ? ub : bB.notFoundUrl()
```

#### 261. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1791` → after: `L1791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1791) · [Before (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1791)

```diff
-       return "StairsBlock" === qq ? qq : Eq ? "SlabBlock" : "CubeBlock"
+       return "StairsBlock" === bb ? bb : ub ? "SlabBlock" : "CubeBlock"
```

#### 262. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1802` → after: `L1802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1802) · [Before (L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1802)

```diff
-           const mq = null !== (Eq = BY(Yq)) && void 0 !== Eq ? Eq : Yq,
+           const Ub = null !== (ub = HB(Bb)) && void 0 !== ub ? ub : Bb,
```

#### 263. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1810` → after: `L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1810) · [Before (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1810)

```diff
-             Wq = Bq ? await (YY ??= gq.e(202).then((() => gq(34302))).then((qq => (lY && (lY = !1, (0, zg.d)()), {
+             wb = Hb ? await (BB ??= hb.e(202).then((() => hb(33950))).then((bb => (OB && (OB = !1, (0, eh.e)()), {
```

#### 264. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1821-L1823` → after: `L1821-L1823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1821-L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1821-L1823) · [Before (L1821-L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1821-L1823)

```diff
-             aq = (0, Ig.f)(),
-             Vq = 0 === aq ? mq : `${mq}#${aq}`;
-           return (await (0, Kg.d)()).drawBlockIconUrl(Vq, lq, Oq, (() => Nq))
+             Xb = (0, ch.g)(),
+             pb = 0 === Xb ? Ub : `${Ub}#${Xb}`;
+           return (await (0, kh.e)()).drawBlockIconUrl(pb, Ob, Gb, (() => Zb))
```

#### 265. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1830` → after: `L1830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1830) · [Before (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1830)

```diff
-           if ((0, Lg.d)(qq)) return {
+           if ((0, mh.i)(bb)) return {
```

#### 266. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1832` → after: `L1832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1832) · [Before (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1832)

```diff
-             url: null !== (gq = null !== (lq = null === (Oq = (0, Ig.j)()) || void 0 === Oq ? void 0 : Oq.textureUrl(qq)) && void 0 !== lq ? lq : qY.ingameIconUrl(qq)) && void 0 !== gq ? gq : qY.notFoundUrl()
+             url: null !== (hb = null !== (Ob = null === (Gb = (0, ch.i)()) || void 0 === Gb ? void 0 : Gb.textureUrl(bb)) && void 0 !== Ob ? Ob : bB.ingameIconUrl(bb)) && void 0 !== hb ? hb : bB.notFoundUrl()
```

#### 267. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1838-L1839` → after: `L1838-L1839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1838-L1839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1838-L1839) · [Before (L1838-L1839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1838-L1839)

```diff
-           if (0 === (0, kg.k)()) return (0, Jg.d)(), Yq.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(qq);
-           const mq = null !== (Eq = BY(qq)) && void 0 !== Eq ? Eq : qq,
+           if (0 === (0, Ph.g)()) return (0, Ih.e)(), Bb.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(bb);
+           const Ub = null !== (ub = HB(bb)) && void 0 !== ub ? ub : bb,
```

#### 268. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1847` → after: `L1847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1847) · [Before (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1847)

```diff
-             return null !== (Eq = xY(cY(qq))) && void 0 !== Eq ? Eq : qY.notFoundUrl()
+             return null !== (ub = LB(SB(bb))) && void 0 !== ub ? ub : bB.notFoundUrl()
```

#### 269. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1849-L1850` → after: `L1849-L1850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1849-L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1849-L1850) · [Before (L1849-L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1849-L1850)

```diff
-           if ((0, Cg.f)(mq) && ! function(qq) {
-               const Eq = (0, Ig.j)();
+           if ((0, Th.e)(Ub) && ! function(bb) {
+               const ub = (0, ch.i)();
```

#### 270. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1860` → after: `L1860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1860) · [Before (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1860)

```diff
-           if (void 0 !== xq && "GrayscaleArmour" === EY.itemTypeOf(xq) || Object.hasOwn(Gg.e, mq)) {
+           if (void 0 !== Lb && "GrayscaleArmour" === uB.itemTypeOf(Lb) || Object.hasOwn(Mh.d, Ub)) {
```

#### 271. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1862` → after: `L1862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1862) · [Before (L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1862)

```diff
-             const Eq = null !== (uq = (0, Gg.f)(qq)) && void 0 !== uq ? uq : (0, Gg.f)(mq);
+             const ub = null !== (ab = (0, Mh.g)(bb)) && void 0 !== ab ? ab : (0, Mh.g)(Ub);
```

#### 272. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1875` → after: `L1875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1875) · [Before (L1875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1875)

```diff
-           return void 0 !== BY(qq) || (0, Lg.d)(qq) || qq.startsWith(Lg.b)
+           return void 0 !== HB(bb) || (0, mh.i)(bb) || bb.startsWith(mh.b)
```

#### 273. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1881-L1882` → after: `L1881-L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1881-L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1881-L1882) · [Before (L1881-L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1881-L1882)

```diff
-     var dY = gq(583),
-       jY = gq(39529);
+     var oB = hb(571),
+       AB = hb(39229);
```

#### 274. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1894-L1895` → after: `L1894-L1895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1894-L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1894-L1895) · [Before (L1894-L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1894-L1895)

```diff
-           const qq = Eq.Py(Eq.localId);
-           return null !== qq && void 0 !== qq && qq.every(Number.isFinite) ? qq : null
+           const bb = ub.iK(ub.localId);
+           return null !== bb && void 0 !== bb && bb.every(Number.isFinite) ? bb : null
```

#### 275. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1897` → after: `L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1897) · [Before (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1897)

```diff
-         chunkBlocks: qq => gq.isLoaded(qq[0], qq[1], qq[2]) ? (qq, Eq, Yq) => gq.lc(qq, Eq, Yq) : null,
+         chunkBlocks: bb => hb.isLoaded(bb[0], bb[1], bb[2]) ? (bb, ub, Bb) => hb.bS(bb, ub, Bb) : null,
```

#### 276. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1913-L1915` → after: `L1913-L1915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1913-L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1913-L1915) · [Before (L1913-L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1913-L1915)

```diff
-             if (null === Oq || Eq.isLocal(mq) || xq >>> Pq.b !== Pq.q.Lifeform) continue;
-             const Aq = Eq.Py(mq),
-               cq = dY.m[xq & Pq.c];
+             if (null === Gb || ub.isLocal(Ub) || Lb >>> Wb.c !== Wb.n.Lifeform) continue;
+             const Yb = ub.iK(Ub),
+               Sb = oB.i[Lb & Wb.d];
```

#### 277. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1918` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1918) · [Before (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1918)

```diff
-               name: null !== (Yq = qq.clientApi.getEntityName(Oq)) && void 0 !== Yq ? Yq : null,
+               name: null !== (Bb = bb.clientApi.getEntityName(Gb)) && void 0 !== Bb ? Bb : null,
```

#### 278. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1926` → after: `L1926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1926) · [Before (L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1926)

```diff
-           for (let gq = 0; gq < Eq.idStr.length; gq++) null !== Eq.idStr[gq] && Eq.kinds[gq] >>> Pq.b === Pq.q.Item && qq++;
+           for (let hb = 0; hb < ub.idStr.length; hb++) null !== ub.idStr[hb] && ub.kinds[hb] >>> Wb.c === Wb.n.Item && bb++;
```

#### 279. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1932-L1933` → after: `L1932-L1933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1932-L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1932-L1933) · [Before (L1932-L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1932-L1933)

```diff
-         worldCodeAiChunk: qq => Promise.resolve((0, jY.e)(HY((0, mq.e)()), qq)),
-         worldCodeAiGameState: () => Promise.resolve((0, jY.h)(HY((0, mq.e)())))
+         worldCodeAiChunk: bb => Promise.resolve((0, AB.b)(lB((0, Ub.l)()), bb)),
+         worldCodeAiGameState: () => Promise.resolve((0, AB.f)(lB((0, Ub.l)())))
```

#### 280. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1942` → after: `L1942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1942) · [Before (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1942)

```diff
-             return null !== (Eq = null === (gq = qq.runtime()) || void 0 === gq ? void 0 : gq.currentViewer) && void 0 !== Eq ? Eq : null
+             return null !== (ub = null === (hb = bb.runtime()) || void 0 === hb ? void 0 : hb.currentViewer) && void 0 !== ub ? ub : null
```

#### 281. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1964` → after: `L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1964) · [Before (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1964)

```diff
-             Eq && gq && Eq.seek(Math.max(0, Math.min(gq.totalTicks - 1, gq.SB + qq * Bq.Fd)))
+             ub && hb && ub.seek(Math.max(0, Math.min(hb.totalTicks - 1, hb.gH + bb * Hb.hd)))
```

#### 282. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1970-L1971` → after: `L1970-L1971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1970-L1971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1970-L1971) · [Before (L1970-L1971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1970-L1971)

```diff
-                 gq = null !== (qq = null === Eq || void 0 === Eq ? void 0 : Eq.view) && void 0 !== qq ? qq : null;
-               return null === Eq || null === gq || gq.state === Bq.rd.None ? (xq = null, null) : (xq = (0, Iq.m)(xq, {
+                 hb = null !== (bb = null === ub || void 0 === ub ? void 0 : ub.view) && void 0 !== bb ? bb : null;
+               return null === ub || null === hb || hb.state === Hb.Xc.None ? (Lb = null, null) : (Lb = (0, cb.o)(Lb, {
```

#### 283. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1973` → after: `L1973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1973) · [Before (L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1973)

```diff
-                 SB: gq.SB,
+                 gH: hb.gH,
```

#### 284. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1975-L1976` → after: `L1975-L1976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1975-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1975-L1976) · [Before (L1975-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1975-L1976)

```diff
-                 bJ: Bq.Fd,
-                 playing: gq.state === Bq.rd.Playing,
+                 hN: Hb.hd,
+                 playing: hb.state === Hb.Xc.Playing,
```

#### 285. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1985-L1986` → after: `L1985-L1986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1985-L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1985-L1986) · [Before (L1985-L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1985-L1986)

```diff
-                 gq = null !== (qq = null === Eq || void 0 === Eq ? void 0 : Eq.view) && void 0 !== qq ? qq : null;
-               return null === Eq || null === gq || gq.state === Bq.rd.None ? (Aq = null, null) : (Aq = (0, Iq.m)(Aq, {
+                 hb = null !== (bb = null === ub || void 0 === ub ? void 0 : ub.view) && void 0 !== bb ? bb : null;
+               return null === ub || null === hb || hb.state === Hb.Xc.None ? (Yb = null, null) : (Yb = (0, cb.o)(Yb, {
```

#### 286. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1996` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L1996) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L1996)

```diff
-               return null !== (Eq = null === (gq = qq.runtime()) || void 0 === gq ? void 0 : gq.recorder.current) && void 0 !== Eq ? Eq : mg.b.states.replayRecorder.current()
+               return null !== (ub = null === (hb = bb.runtime()) || void 0 === hb ? void 0 : hb.recorder.current) && void 0 !== ub ? ub : Uh.e.states.replayRecorder.current()
```

#### 287. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2000` → after: `L2000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2000) · [Before (L2000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2000)

```diff
-               watch: qq => (0, cq.k)("replayViewer|videoExportChanged", (() => {
+               watch: bb => (0, Sb.l)("replayViewer|videoExportChanged", (() => {
```

#### 288. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2014` → after: `L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2014) · [Before (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2014)

```diff
-             !0 === (null === (Yq = mq()) || void 0 === Yq ? void 0 : Yq.isOpen) && Promise.all([gq.e(95), gq.e(64)]).then((() => gq(42373))).then((gq => {
+             !0 === (null === (Bb = Ub()) || void 0 === Bb ? void 0 : Bb.isOpen) && Promise.all([hb.e(95), hb.e(64)]).then((() => hb(42028))).then((hb => {
```

#### 289. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2022` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2022) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2022)

```diff
-                   return null !== (Eq = null === (gq = qq.canvas) || void 0 === gq ? void 0 : gq.call(qq)) && void 0 !== Eq ? Eq : null
+                   return null !== (ub = null === (hb = bb.canvas) || void 0 === hb ? void 0 : hb.call(bb)) && void 0 !== ub ? ub : null
```

#### 290. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2049` → after: `L2049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2049) · [Before (L2049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2049)

```diff
-                   null !== Eq && void 0 !== Eq && Eq.view && Eq.setSpeed((0, Yg.l)(Eq.view.speed, "replaySpeedUp" === qq ? "up" : "down"));
+                   null !== ub && void 0 !== ub && ub.view && ub.setSpeed((0, Bh.i)(ub.view.speed, "replaySpeedUp" === bb ? "up" : "down"));
```

#### 291. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2062` → after: `L2062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2062) · [Before (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2062)

```diff
-                 SB: gq,
+                 gH: hb,
```

#### 292. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2107` → after: `L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2107) · [Before (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2107)

```diff
-                 gq.e(130).then((() => gq(39158))).then((Eq => {
+                 hb.e(130).then((() => hb(38833))).then((ub => {
```

#### 293. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2138` → after: `L2138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2138) · [Before (L2138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2138)

```diff
-               (0, dE.h)(Eq) && (null === (gq = qq.runtime()) || void 0 === gq || gq.recorder.viewerShown(Eq))
+               (0, ou.e)(ub) && (null === (hb = bb.runtime()) || void 0 === hb || hb.recorder.viewerShown(ub))
```

#### 294. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2144` → after: `L2144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2144) · [Before (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2144)

```diff
-                 hg: lq,
+                 eh: Ob,
```

#### 295. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2146` → after: `L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2146) · [Before (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2146)

```diff
-                 ng: mq
+                 Nh: Ub
```

#### 296. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2166` → after: `L2166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2166) · [Before (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2166)

```diff
-                 Fc: lq
+                 MS: Ob
```

#### 297. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2174` → after: `L2174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2174) · [Before (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2174)

```diff
-               Yq = null !== (Eq = null === gq || void 0 === gq ? void 0 : gq.view) && void 0 !== Eq ? Eq : null;
+               Bb = null !== (ub = null === hb || void 0 === hb ? void 0 : hb.view) && void 0 !== ub ? ub : null;
```

#### 298. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2177` → after: `L2177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2177) · [Before (L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2177)

```diff
-             })(qq) : Ag.has(qq) ? Hq.replayAction(qq) : "replayPlayPause" === qq ? gq && Yq && Yq.state !== Bq.rd.None && Hq.setReplayPlaying(Yq.state !== Bq.rd.Playing) : "replayChangeCameraMode" === qq ? null === gq || void 0 === gq || gq.cycleCameraMode() : "replayExit" === qq … [truncated]
+             })(bb) : Yh.has(bb) ? lb.replayAction(bb) : "replayPlayPause" === bb ? hb && Bb && Bb.state !== Hb.Xc.None && lb.setReplayPlaying(Bb.state !== Hb.Xc.Playing) : "replayChangeCameraMode" === bb ? null === hb || void 0 === hb || hb.cycleCameraMode() : "replayExit" === bb … [truncated]
```

#### 299. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2187` → after: `L2187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2187) · [Before (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2187)

```diff
-               return !0 !== (null === (Eq = mq()) || void 0 === Eq ? void 0 : Eq.isOpen) ? null : null !== (gq = null === (Yq = qq.cameraView) || void 0 === Yq ? void 0 : Yq.call(qq)) && void 0 !== gq ? gq : null
+               return !0 !== (null === (ub = Ub()) || void 0 === ub ? void 0 : ub.isOpen) ? null : null !== (hb = null === (Bb = bb.cameraView) || void 0 === Bb ? void 0 : Bb.call(bb)) && void 0 !== hb ? hb : null
```

#### 300. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2198` → after: `L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2198) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2198)

```diff
-               gq !== Pq && (Pq = gq, cq.i.TV("connectedGameChanged")), Eq.fire()
+               hb !== Wb && (Wb = hb, Sb.i.vp("connectedGameChanged")), ub.fire()
```

#### 301. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2207-L2208` → after: `L2207-L2208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2207-L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2207-L2208) · [Before (L2207-L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2207-L2208)

```diff
-                   return void((0, dE.e)() || Hq.saveClip())
-               }(0, lg.b)() || ("replayViewerOpen" !== qq ? qq.startsWith("replay") && ((0, dE.e)() || !0 === (null === (Eq = mq()) || void 0 === Eq ? void 0 : Eq.inPlayback)) && oq(qq) : dq("toggle"))
+                   return void((0, ou.c)() || lb.saveClip())
+               }(0, Oh.b)() || ("replayViewerOpen" !== bb ? bb.startsWith("replay") && ((0, ou.c)() || !0 === (null === (ub = Ub()) || void 0 === ub ? void 0 : ub.inPlayback)) && Kb(bb) : ob("toggle"))
```

#### 302. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2213` → after: `L2213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2213) · [Before (L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2213)

```diff
-         runtime: lq.l,
+         runtime: Ob.m,
```

#### 303. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2216` → after: `L2216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2216) · [Before (L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2216)

```diff
-           const Eq = null === (qq = (0, mq.e)()) || void 0 === qq ? void 0 : qq.renderFrame;
+           const ub = null === (bb = (0, Ub.l)()) || void 0 === bb ? void 0 : bb.renderFrame;
```

#### 304. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2226` → after: `L2226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2226) · [Before (L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2226)

```diff
-           return null !== (qq = null === (Eq = (gq = (0, Oq.M)()).canvas) || void 0 === Eq ? void 0 : Eq.call(gq)) && void 0 !== qq ? qq : null
+           return null !== (bb = null === (ub = (hb = (0, Gb.K)()).canvas) || void 0 === ub ? void 0 : ub.call(hb)) && void 0 !== bb ? bb : null
```

#### 305. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2233` → after: `L2233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2233) · [Before (L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2233)

```diff
-           ...NE.i,
+           ...Zu.m,
```

#### 306. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2241-L2242` → after: `L2241-L2242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2241-L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2241-L2242) · [Before (L2241-L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2241-L2242)

```diff
-           ...NE.e,
-           ...hq.c,
+           ...Zu.i,
+           ...Db.b,
```

#### 307. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2246` → after: `L2246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2246) · [Before (L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2246)

```diff
-           ...vq.i
+           ...nb.h
```

#### 308. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2252` → after: `L2252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2252) · [Before (L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2252)

```diff
-           ...NE.d,
+           ...Zu.e,
```

#### 309. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2255` → after: `L2255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2255) · [Before (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2255)

```diff
-           ...vq.e,
+           ...nb.f,
```

#### 310. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2264` → after: `L2264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2264) · [Before (L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2264)

```diff
-           ...NE.g,
+           ...Zu.k,
```

#### 311. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2280-L2282` → after: `L2280-L2282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2280-L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2280-L2282) · [Before (L2280-L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2280-L2282)

```diff
-       (0, xq.h)(Vq.o), (0, lq.m)(PY.feed), (0, hq.e)(), IE || (IE = !0, (0, Vq.l)(Zq.i, (qq => {
-         const Eq = (0, Mq.d)(Zq.i, qq);
-         "string" === typeof Eq && Promise.resolve().then((() => gq(3514))).then((qq => {
+       (0, Lb.f)(pb.q), (0, Ob.q)(WB.feed), (0, Db.d)(), cu || (cu = !0, (0, pb.n)(ib.h, (bb => {
+         const ub = (0, tb.g)(ib.h, bb);
+         "string" === typeof ub && Promise.resolve().then((() => hb(3437))).then((bb => {
```

#### 312. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2288-L2293` → after: `L2288-L2293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2288-L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2288-L2293) · [Before (L2288-L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2288-L2293)

```diff
-       })), (0, Vq.l)(Zq.W, (qq => {
-         const Eq = (0, Mq.d)(Zq.W, qq);
-         "number" === typeof Eq && cq.i.TV("serverUpdating", Date.now() + Eq, !0)
-       })), (0, Vq.l)(Zq.z, (qq => {
-         const Eq = (0, Mq.d)(Zq.z, qq);
-         if ((0, Mq.b)(Eq)) {
+       })), (0, pb.n)(ib.Z, (bb => {
+         const ub = (0, tb.g)(ib.Z, bb);
+         "number" === typeof ub && Sb.i.vp("serverUpdating", Date.now() + ub, !0)
+       })), (0, pb.n)(ib.F, (bb => {
+         const ub = (0, tb.g)(ib.F, bb);
+         if ((0, tb.d)(ub)) {
```

#### 313. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2295-L2296` → after: `L2295-L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2295-L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2295-L2296) · [Before (L2295-L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2295-L2296)

```diff
-             Oq: qq,
-             mq: gq
+             Ob: bb,
+             Gb: hb
```

#### 314. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2298-L2300` → after: `L2298-L2300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2298-L2300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2298-L2300) · [Before (L2298-L2300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2298-L2300)

```diff
-           (0, wE.d)({
-             Oq: "string" === typeof qq ? qq : null,
-             mq: "string" === typeof gq ? gq : null
+           (0, fu.c)({
+             Ob: "string" === typeof bb ? bb : null,
+             Gb: "string" === typeof hb ? hb : null
```

#### 315. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2303-L2311` → after: `L2303-L2311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2303-L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2303-L2311) · [Before (L2303-L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2303-L2311)

```diff
-       })), (0, Vq.l)(uq.ec.NewUiRequest, (qq => {
-         const Eq = (0, Mq.e)(qq);
-         (0, Mq.b)(Eq) && "number" === typeof Eq.id && (0, Mq.b)(Eq.clientParameters) && (0, KE.f)(Eq.id, Eq.clientParameters)
-       })), (0, Vq.l)(Zq.Q, (qq => {
-         const Eq = (0, Mq.d)(Zq.Q, qq);
-         "number" === typeof Eq && (0, KE.i)(Eq)
-       })), (0, Vq.h)(KE.e), (0, Vq.l)(uq.ec.UiRequestPopup, (qq => {
-         const Eq = (0, Mq.e)(qq);
-         if ((0, Mq.b)(Eq) && "number" === typeof Eq.id && "string" === typeof Eq.text) {
+       })), (0, pb.n)(ab.fc.NewUiRequest, (bb => {
+         const ub = (0, tb.i)(bb);
+         (0, tb.d)(ub) && "number" === typeof ub.id && (0, tb.d)(ub.clientParameters) && (0, ku.f)(ub.id, ub.clientParameters)
+       })), (0, pb.n)(ib.U, (bb => {
+         const ub = (0, tb.g)(ib.U, bb);
+         "number" === typeof ub && (0, ku.g)(ub)
+       })), (0, pb.j)(ku.c), (0, pb.n)(ab.fc.UiRequestPopup, (bb => {
+         const ub = (0, tb.i)(bb);
+         if ((0, tb.d)(ub) && "number" === typeof ub.id && "string" === typeof ub.text) {
```

#### 316. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2313` → after: `L2313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2313) · [Before (L2313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2313)

```diff
-           (0, KE.l)(qq, Eq.text, (Eq => {
+           (0, ku.i)(bb, ub.text, (ub => {
```

#### 317. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2316` → after: `L2316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2316) · [Before (L2316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2316)

```diff
-               xu: Eq
+               ha: ub
```

#### 318. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2320-L2325` → after: `L2320-L2325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2320-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2320-L2325) · [Before (L2320-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2320-L2325)

```diff
-       })), (0, Vq.l)(uq.ec.TopRightHelper, (qq => {
-         const Eq = (0, Mq.e)(qq);
-         void 0 !== Eq && cq.i.TV("TopRightHelper", Eq, !0)
-       })), (0, Vq.l)(uq.ec.TaskProgress, (qq => {
-         const Eq = (0, Mq.e)(qq);
-         (0, Mq.b)(Eq) && "string" === typeof Eq.taskId && "number" === typeof Eq.progress && (0, XE.c)({
+       })), (0, pb.n)(ab.fc.TopRightHelper, (bb => {
+         const ub = (0, tb.i)(bb);
+         void 0 !== ub && Sb.i.vp("TopRightHelper", ub, !0)
+       })), (0, pb.n)(ab.fc.TaskProgress, (bb => {
+         const ub = (0, tb.i)(bb);
+         (0, tb.d)(ub) && "string" === typeof ub.taskId && "number" === typeof ub.progress && (0, Fu.c)({
```

#### 319. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2329-L2333` → after: `L2329-L2333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2329-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2329-L2333) · [Before (L2329-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2329-L2333)

```diff
-       }))), Qg || (Qg = !0, (0, Vq.l)(Zq.s, (qq => {
-         const Eq = (0, Mq.d)(Zq.s, qq);
-         (0, Mq.b)(Eq) && cq.i.TV("showShopFromServer", {
-           toggle: Eq.Jg,
-           kg: Eq.kg
+       }))), Ch || (Ch = !0, (0, pb.n)(ib.o, (bb => {
+         const ub = (0, tb.g)(ib.o, bb);
+         (0, tb.d)(ub) && Sb.i.vp("showShopFromServer", {
+           toggle: ub.fh,
+           kh: ub.kh
```

#### 320. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2335-L2340` → after: `L2335-L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2335-L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2335-L2340) · [Before (L2335-L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2335-L2340)

```diff
-       })), (0, Vq.l)(uq.ec.OverShopInfo, (qq => {
-         const Eq = (0, Mq.e)(qq);
-         (0, Mq.b)(Eq) && cq.i.TV("overShopInfo", Eq.info, !0)
-       })), (0, Vq.l)(uq.ec.ShowShopTutorial, (() => {
-         cq.i.TV("showShopTutorial", null, !0)
-       }))), Hg || (Hg = !0, (0, Vq.d)((() => {
+       })), (0, pb.n)(ab.fc.OverShopInfo, (bb => {
+         const ub = (0, tb.i)(bb);
+         (0, tb.d)(ub) && Sb.i.vp("overShopInfo", ub.info, !0)
+       })), (0, pb.n)(ab.fc.ShowShopTutorial, (() => {
+         Sb.i.vp("showShopTutorial", null, !0)
+       }))), lh || (lh = !0, (0, pb.i)((() => {
```

#### 321. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2342-L2349` → after: `L2342-L2349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2342-L2349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2342-L2349) · [Before (L2342-L2349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2342-L2349)

```diff
-         (0, ag.H)(), null === (qq = og) || void 0 === qq || qq(), og = (0, Vq.b)() ? (0, dg.h)(Vq.b) : null
-       })), (0, Vq.l)(uq.ec.SetCookie, (qq => {
-         const Eq = (0, Mq.e)(qq),
-           gq = (0, TE.e)().gameNameWithVariation;
-         (0, Mq.b)(Eq) && "string" === typeof Eq.key && null !== gq && (0, Vg.setCookie)(gq, Eq.key, Eq.value)
-       })), (0, Vq.l)(uq.ec.LeaveValues, (qq => {
-         const Eq = (0, Mq.e)(qq);
-         if ((0, Mq.b)(Eq) && "string" === typeof Eq.leaveEventType) {
+         (0, Xh.z)(), null === (bb = Kh) || void 0 === bb || bb(), Kh = (0, pb.e)() ? (0, oh.d)(pb.e) : null
+       })), (0, pb.n)(ab.fc.SetCookie, (bb => {
+         const ub = (0, tb.i)(bb),
+           hb = (0, Ju.b)().gameNameWithVariation;
+         (0, tb.d)(ub) && "string" === typeof ub.key && null !== hb && (0, ph.setCookie)(hb, ub.key, ub.value)
+       })), (0, pb.n)(ab.fc.LeaveValues, (bb => {
+         const ub = (0, tb.i)(bb);
+         if ((0, tb.d)(ub) && "string" === typeof ub.leaveEventType) {
```

#### 322. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2356` → after: `L2356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2356) · [Before (L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2356)

```diff
-           (0, ag.L)({
+           (0, Xh.E)({
```

#### 323. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2363-L2365` → after: `L2363-L2365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2363-L2365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2363-L2365) · [Before (L2363-L2365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2363-L2365)

```diff
-       })), (0, Vq.l)(uq.ec.CustomAnalyticsEvent, (qq => {
-         const Eq = (0, Mq.e)(qq);
-         if ((0, Mq.b)(Eq) && "string" === typeof Eq.cat1) {
+       })), (0, pb.n)(ab.fc.CustomAnalyticsEvent, (bb => {
+         const ub = (0, tb.i)(bb);
+         if ((0, tb.d)(ub) && "string" === typeof ub.cat1) {
```

#### 324. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2372` → after: `L2372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2372) · [Before (L2372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2372)

```diff
-           (0, ag.s)({
+           (0, Xh.m)({
```

#### 325. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2379-L2381` → after: `L2379-L2381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2379-L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2379-L2381) · [Before (L2379-L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2379-L2381)

```diff
-       })), (0, Vq.l)(uq.ec.ProgressionEvent, (qq => {
-         const Eq = (0, Mq.e)(qq);
-         if ((0, Mq.b)(Eq)) {
+       })), (0, pb.n)(ab.fc.ProgressionEvent, (bb => {
+         const ub = (0, tb.i)(bb);
+         if ((0, tb.d)(ub)) {
```

#### 326. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2389` → after: `L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2389) · [Before (L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2389)

```diff
-           (0, ag.y)({
+           (0, Xh.q)({
```

#### 327. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2397-L2399` → after: `L2397-L2399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2397-L2399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2397-L2399) · [Before (L2397-L2399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2397-L2399)

```diff
-       })), (0, Vq.l)(uq.ec.ResourceEvent, (qq => {
-         const Eq = (0, Mq.e)(qq);
-         if ((0, Mq.b)(Eq)) {
+       })), (0, pb.n)(ab.fc.ResourceEvent, (bb => {
+         const ub = (0, tb.i)(bb);
+         if ((0, tb.d)(ub)) {
```

#### 328. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2407` → after: `L2407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2407) · [Before (L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2407)

```diff
-           (0, ag.C)({
+           (0, Xh.t)({
```

#### 329. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2415-L2417` → after: `L2415-L2417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2415-L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2415-L2417) · [Before (L2415-L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2415-L2417)

```diff
-       })), (0, Vq.l)(uq.ec.LeaderboardResponse, (qq => {
-         const Eq = (0, Mq.e)(qq);
-         if ((0, Mq.b)(Eq)) {
+       })), (0, pb.n)(ab.fc.LeaderboardResponse, (bb => {
+         const ub = (0, tb.i)(bb);
+         if ((0, tb.d)(ub)) {
```

#### 330. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2423` → after: `L2423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2423) · [Before (L2423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2423)

```diff
-           cq.i.TV("leaderboardResponse", {
+           Sb.i.vp("leaderboardResponse", {
```

#### 331. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2429-L2436` → after: `L2429-L2436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2429-L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2429-L2436) · [Before (L2429-L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2429-L2436)

```diff
-       })), (0, Vq.l)(Zq.v, (qq => {
-         const Eq = (0, Mq.d)(Zq.v, qq);
-         "string" === typeof Eq && (0, jg.c)(qq.conn, Eq)
-       })), (0, Vq.l)(Zq.w, (qq => {
-         const Eq = (0, Mq.d)(Zq.w, qq);
-         "string" === typeof Eq && console.error(`[logErrorToConsole]: ${Eq}`)
-       }))), pq(), (0, hg.e)(), SE || (SE = !0, (0, Vq.l)(Zq.h, (qq => {
-         const Eq = (0, Mq.d)(Zq.h, qq);
+       })), (0, pb.n)(ib.x, (bb => {
+         const ub = (0, tb.g)(ib.x, bb);
+         "string" === typeof ub && (0, Ah.b)(bb.conn, ub)
+       })), (0, pb.n)(ib.z, (bb => {
+         const ub = (0, tb.g)(ib.z, bb);
+         "string" === typeof ub && console.error(`[logErrorToConsole]: ${ub}`)
+       }))), sb(), (0, Dh.e)(), Nu || (Nu = !0, (0, pb.n)(ib.f, (bb => {
+         const ub = (0, tb.g)(ib.f, bb);
```

#### 332. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2438` → after: `L2438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2438) · [Before (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2438)

```diff
-       }))), sE(), bE(), Xq || (Xq = !0, (0, Oq.w)(wq)), Yq.gameBridge.attach(QY), (0, Yq.installPageSources)({
+       }))), Vu(), zu(), Fb || (Fb = !0, (0, Gb.u)(fb)), Bb.gameBridge.attach(CB), (0, Bb.installPageSources)({
```

#### 333. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2441` → after: `L2441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2441) · [Before (L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2441)

```diff
-           setChunkAddDistance: Sg.k
+           setChunkAddDistance: Nh.j
```

#### 334. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2447-L2448` → after: `L2447-L2448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2447-L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2447-L2448) · [Before (L2447-L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2447-L2448)

```diff
-           Gy: Sg.e,
-           drawCallStats: pg.h
+           VK: Nh.e,
+           drawCallStats: sh.f
```

#### 335. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2450` → after: `L2450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2450) · [Before (L2450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2450)

```diff
-       }), (0, zg.d)(), mY()
+       }), (0, eh.e)(), UB()
```

#### 336. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2453` → after: `L2453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2453) · [Before (L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2453)

```diff
-   40470: (qq, Eq, gq) => {
+   40177: (bb, ub, hb) => {
```

#### 337. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2455-L2458` → after: `L2455-L2458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2455-L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2455-L2458) · [Before (L2455-L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2455-L2458)

```diff
-       d: () => uq,
-       f: () => Aq,
-       j: () => xq,
-       k: () => cq
+       e: () => ab,
+       g: () => Yb,
+       i: () => Lb,
+       l: () => Sb
```

#### 338. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2460` → after: `L2460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2460) · [Before (L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2460)

```diff
-     var Yq = gq(1914);
+     var Bb = hb(1824);
```

#### 339. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2474` → after: `L2474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2474) · [Before (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2474)

```diff
-       lq = qq, Oq++, (0, Yq.d)();
+       Ob = bb, Gb++, (0, Bb.e)();
```

#### 340. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2482` → after: `L2482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2482) · [Before (L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2482)

```diff
-   40476: (qq, Eq, gq) => {
+   40180: (bb, ub, hb) => {
```

#### 341. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2484-L2485` → after: `L2484-L2485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2484-L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2484-L2485) · [Before (L2484-L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2484-L2485)

```diff
-       e: () => mq,
-       f: () => xq
+       d: () => Ub,
+       h: () => Lb
```

#### 342. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2487` → after: `L2487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2487) · [Before (L2487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2487)

```diff
-     var Yq = gq(40479);
+     var Bb = hb(40188);
```

#### 343. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2492` → after: `L2492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2492) · [Before (L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2492)

```diff
-       return lq ??= gq.e(59).then((() => gq(42392))).catch((qq => {
+       return Ob ??= hb.e(59).then((() => hb(42038))).catch((bb => {
```

#### 344. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2498` → after: `L2498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2498) · [Before (L2498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2498)

```diff
-       return Oq ??= Promise.all([mq(), (0, Yq.c)()]).then((qq => {
+       return Gb ??= Promise.all([Ub(), (0, Bb.f)()]).then((bb => {
```

#### 345. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2506` → after: `L2506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2506) · [Before (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2506)

```diff
-   37111: (qq, Eq, gq) => {
+   36704: (bb, ub, hb) => {
```

#### 346. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2508` → after: `L2508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2508) · [Before (L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2508)

```diff
-       d: () => Yq
+       e: () => Bb
```

#### 347. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2670` → after: `L2670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2670) · [Before (L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2670)

```diff
-   36912: (qq, Eq, gq) => {
+   36504: (bb, ub, hb) => {
```

#### 348. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2672` → after: `L2672-L2673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2672-L2673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2672-L2673) · [Before (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2672)

```diff
-       c: () => lq,
+       b: () => Ob,
+       d: () => Gb,
```

#### 349. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2674` → after: `L2675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2675) · [Before (L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2674)

```diff
-       h: () => Wq,
+       i: () => Lb,
```

#### 350. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2680` → after: `L2680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2680) · [Before (L2680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2680)

```diff
-       t: () => mq
+       s: () => Ub
```

#### 351. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2682` → after: `L2682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2682) · [Before (L2682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2682)

```diff
-     var Yq = gq(1226);
+     var Bb = hb(1133);
```

#### 352. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2691` → after: `L2691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2691) · [Before (L2691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2691)

```diff
-       return "lobby" === qq.kind ? `lobby:${qq.path}` : `codeBlock:${qq.pos[0]},${qq.pos[1]},${qq.pos[2]}`
+       return "lobby" === bb.kind ? `lobby:${bb.path}` : `codeBlock:${bb.pos[0]},${bb.pos[1]},${bb.pos[2]}`
```

#### 353. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2697` → after: `L2697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2697) · [Before (L2697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2697)

```diff
-         path: Yq.j
+         path: Bb.m
```

#### 354. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2736` → after: `L2736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2736) · [Before (L2736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2736)

```diff
-   38976: (qq, Eq, gq) => {
+   38666: (bb, ub, hb) => {
```

#### 355. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2738-L2739` → after: `L2738-L2739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2738-L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/playGameSources.js#L2738-L2739) · [Before (L2738-L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/playGameSources.js#L2738-L2739)

```diff
-       b: () => Yq,
-       c: () => lq
+       e: () => Bb,
+       h: () => Ob
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderDebug.js` (bbb6l5.0244a119 → halsg.2bd74967)

- **File**: `bundles/bloxd.io/chunks/js/renderDebug.js` (118 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9)

#### 1. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L4)

```diff
-   4516: (qq, Eq, gq) => {
+   4459: (bb, ub, hb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L8-L11)

```diff
-     var Yq = gq(24),
-       lq = gq(31),
-       Oq = gq(1274),
-       mq = gq(2733);
+     var Bb = hb(13),
+       Ob = hb(16),
+       Gb = hb(1184),
+       Ub = hb(2633);
```

#### 3. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L16)

```diff
-       return "visible" === document.visibilityState && "inGame" === Yq.b.get("gameState") && (0, Oq.p)()
+       return "visible" === document.visibilityState && "inGame" === Bb.d.get("gameState") && (0, Gb.m)()
```

#### 4. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L20)

```diff
-       (0, mq.v)() || function(qq, Eq, gq) {
+       (0, Ub.s)() || function(bb, ub, hb) {
```

#### 5. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L27)

```diff
-           qq(`saved for the player after ${xq/1e3} s of play`), (0, mq.C)(), lq.i.TV("chat", {
+           bb(`saved for the player after ${Lb/1e3} s of play`), (0, Ub.B)(), Ob.i.vp("chat", {
```

#### 6. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L39)

```diff
-   4511: (qq, Eq, gq) => {
+   4450: (bb, ub, hb) => {
```

#### 7. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L46-L48` → after: `L46-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L46-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L46-L48) · [Before (L46-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L46-L48)

```diff
-     var Yq = gq(1789),
-       lq = gq(4516),
-       Oq = gq(2733);
+     var Bb = hb(1709),
+       Ob = hb(4459),
+       Gb = hb(2633);
```

#### 8. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L65-L66` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L65-L66) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L65-L66)

```diff
-         return Eq + (1 === (22 >>> qq & 1) ? 4 - gq : gq) & 3
-       }(lq, Aq(Yq), Eq), mq = lq >>> 1, [uq, Bq] = cq(gq), Wq = 1 === Oq || 2 === Oq ? uq : 0, Nq = Oq >= 2 ? Bq : 0, aq = [63 & gq, gq >>> 6 & 63, gq >>> 12 & 63];
+         return ub + (1 === (22 >>> bb & 1) ? 4 - hb : hb) & 3
+       }(Ob, Yb(Bb), ub), Ub = Ob >>> 1, [ab, Hb] = Sb(hb), wb = 1 === Gb || 2 === Gb ? ab : 0, Zb = Gb >= 2 ? Hb : 0, Xb = [63 & hb, hb >>> 6 & 63, hb >>> 12 & 63];
```

#### 9. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L89)

```diff
-         Oq.push(mq === Eq ? `[${gq}]` : gq)
+         Gb.push(Ub === ub ? `[${hb}]` : hb)
```

#### 10. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L185)

```diff
-       return null === qq.name ? `#${qq.id}` : `#${qq.id} ${qq.name}`
+       return null === bb.name ? `#${bb.id}` : `#${bb.id} ${bb.name}`
```

#### 11. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L207` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L207) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L207)

```diff
-         this.print = qq, this.now = Eq, this.shown = 0, this.Fc = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.jN = [], this.dropped = 0
+         this.print = bb, this.now = ub, this.shown = 0, this.MS = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.HZ = [], this.dropped = 0
```

#### 12. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L211-L212` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L211-L212) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L211-L212)

```diff
-         if (Eq - this.second >= 1e3 && (this.second = Eq, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.Fc++, void this.store(qq);
-         this.shown++, this.inSecond++, this.print(400 === this.shown ? `${qq} (the last line here: the rest go to bloxdDebug.save())` : qq)
+         if (ub - this.second >= 1e3 && (this.second = ub, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.MS++, void this.store(bb);
+         this.shown++, this.inSecond++, this.print(400 === this.shown ? `${bb} (the last line here: the rest go to bloxdDebug.save())` : bb)
```

#### 13. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L218)

```diff
-         this.jN.push(`${new Date(Date.now()).toISOString()} ${qq}`), this.jN.length > 2e4 && (this.jN.shift(), this.dropped++)
+         this.HZ.push(`${new Date(Date.now()).toISOString()} ${bb}`), this.HZ.length > 2e4 && (this.HZ.shift(), this.dropped++)
```

#### 14. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L221)

```diff
-         return [`${this.shown} lines logged (above); kept here: ${this.Fc} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.jN].join("\n")
+         return [`${this.shown} lines logged (above); kept here: ${this.MS} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.HZ].join("\n")
```

#### 15. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L229)

```diff
-           (0, Oq.m)("render", qq)
+           (0, Gb.l)("render", bb)
```

#### 16. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L231` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L231) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L231)

```diff
-         (0, Oq.j)("render", (() => qq.dump())), Gq = qq
+         (0, Gb.i)("render", (() => bb.dump())), Mb = bb
```

#### 17. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L246)

```diff
-       return qq.length <= Eq ? qq : `${qq.slice(0,Eq)}... (${qq.length-Eq} more characters)`
+       return bb.length <= ub ? bb : `${bb.slice(0,ub)}... (${bb.length-ub} more characters)`
```

#### 18. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L257)

```diff
-           zV: lq,
+           tp: Ob,
```

#### 19. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L282)

```diff
-             }), Eq.push(`@${lq} buf#${Sq(Yq)} +${Oq} stride ${mq} ${xq}x0x${Aq.toString(16)}${cq?" int":""} div ${uq}`)
+             }), ub.push(`@${Ob} buf#${Nb(Bb)} +${Gb} stride ${Ub} ${Lb}x0x${Yb.toString(16)}${Sb?" int":""} div ${ab}`)
```

#### 20. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L296)

```diff
-               Oq = Yq ? `+${Yq.offset}` : lq ? Array.from(lq).slice(0, 3).join(",") : "?";
+               Gb = Bb ? `+${Bb.offset}` : Ob ? Array.from(Ob).slice(0, 3).join(",") : "?";
```

#### 21. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L315)

```diff
-             const cq = Math.min(lq, rq, tq - (null !== Aq && void 0 !== Aq ? Aq : 0));
+             const Sb = Math.min(Ob, jb, rb - (null !== Yb && void 0 !== Yb ? Yb : 0));
```

#### 22. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L345` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L345) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L345)

```diff
-             mq.parts.set(Oq, (null !== Aq && void 0 !== Aq ? Aq : 0) + cq);
+             Ub.parts.set(Gb, (null !== Yb && void 0 !== Yb ? Yb : 0) + Sb);
```

#### 23. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L350)

```diff
-               aq && (mq.fed.records++, gq.some(((qq, gq) => qq !== Eq[gq])) && (mq.fed.differing++, mq.fed.first.length < 8 && mq.fed.first.push(`part ${Oq} instance ${Vq}: fed ${gq.map(lE).join(" ")} buffer ${Eq.map(lE).join(" ")}`)));
+               Xb && (Ub.fed.records++, hb.some(((bb, hb) => bb !== ub[hb])) && (Ub.fed.differing++, Ub.fed.first.length < 8 && Ub.fed.first.push(`part ${Gb} instance ${pb}: fed ${hb.map(Ou).join(" ")} buffer ${ub.map(Ou).join(" ")}`)));
```

#### 24. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L396` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L396) · [Before (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L396)

```diff
-                 Oq.parts.set(lq[gq + 3], (null !== (Wq = Oq.parts.get(lq[gq + 3])) && void 0 !== Wq ? Wq : 0) + (qq % 6 === 0 ? 1 : 0)), Oq.vertices.push({
+                 Gb.parts.set(Ob[hb + 3], (null !== (wb = Gb.parts.get(Ob[hb + 3])) && void 0 !== wb ? wb : 0) + (bb % 6 === 0 ? 1 : 0)), Gb.vertices.push({
```

#### 25. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L407` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L407) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L407)

```diff
-         Jq(`decode probe failed on program ${bq(gq)}: ${String(uq)}`)
+         Ib(`decode probe failed on program ${zb(hb)}: ${String(ab)}`)
```

#### 26. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L416)

```diff
-           return sq(qq, Eq.vertex, Eq.fragment, dq, `program ${bq(Eq)}'s twin`)
+           return Vb(bb, ub.vertex, ub.fragment, ob, `program ${zb(ub)}'s twin`)
```

#### 27. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L433` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L433) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L433)

```diff
-       return qq.getProgramParameter(mq, Vq.LINK_STATUS) ? mq : (Jq(`decode probe: ${lq} failed to link: ${Rq(null!==(xq=qq.getProgramInfoLog(mq))&&void 0!==xq?xq:"",300)}`), qq.deleteProgram(mq), null)
+       return bb.getProgramParameter(Ub, pb.LINK_STATUS) ? Ub : (Ib(`decode probe: ${Ob} failed to link: ${qb(null!==(Lb=bb.getProgramInfoLog(Ub))&&void 0!==Lb?Lb:"",300)}`), bb.deleteProgram(Ub), null)
```

#### 28. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L452` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L452) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L452)

```diff
-           const mq = Yq.size > 1 ? `${lq}[${Oq}]` : Yq.name,
+           const Ub = Bb.size > 1 ? `${Ob}[${Gb}]` : Bb.name,
```

#### 29. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L507` → after: `L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L507) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L507)

```diff
-         Oq !== Vq.NO_ERROR && Jq(`GL error 0x${Oq.toString(16)} pending before the decode probe (the renderer's)`), qq.useProgram(Eq), qq.bindTransformFeedback(Vq.TRANSFORM_FEEDBACK, uq), qq.bindBuffer(Vq.TRANSFORM_FEEDBACK_BUFFER, Bq), qq.bufferData(Vq.TRANSFORM_FEEDBACK_BUFFER, … [truncated]
+         Gb !== pb.NO_ERROR && Ib(`GL error 0x${Gb.toString(16)} pending before the decode probe (the renderer's)`), bb.useProgram(ub), bb.bindTransformFeedback(pb.TRANSFORM_FEEDBACK, ab), bb.bindBuffer(pb.TRANSFORM_FEEDBACK_BUFFER, Hb), bb.bufferData(pb.TRANSFORM_FEEDBACK_BUFFER, … [truncated]
```

#### 30. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L509` → after: `L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L509) · [Before (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L509)

```diff
-         if (mq !== Vq.NO_ERROR) return Jq(`${lq}: GL error 0x${mq.toString(16)} on the feedback draw`), null;
+         if (Ub !== pb.NO_ERROR) return Ib(`${Ob}: GL error 0x${Ub.toString(16)} on the feedback draw`), null;
```

#### 31. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L522` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L522) · [Before (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L522)

```diff
-     const Iq = `#version 300 es\nlayout(location = ${jq}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
+     const cb = `#version 300 es\nlayout(location = ${Ab}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
```

#### 32. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L573` → after: `L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L573) · [Before (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L573)

```diff
-       const Oq = `${qq} ${Eq.bytes.length} B cpu ${Nq(Eq.bytes).toString(16)} gpu ${Nq(gq).toString(16)}, ${lq}/${Yq} blocks differ${Eq.missed?`, ${Eq.missed} GPU-side writes uncopied`:""}`;
+       const Gb = `${bb} ${ub.bytes.length} B cpu ${Zb(ub.bytes).toString(16)} gpu ${Zb(hb).toString(16)}, ${Ob}/${Bb} blocks differ${ub.missed?`, ${ub.missed} GPU-side writes uncopied`:""}`;
```

#### 33. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L589` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L589) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L589)

```diff
-       return kq([`${Oq}: ${mq} bytes differ`, ...xq.map((qq => `  +${qq}: cpu ${aq(Eq.bytes,qq)} | gpu ${aq(gq,qq)}`))].join("\n")), `${Oq}: ${mq} bytes differ, first at ${xq.join(", ")} (context in the saved file)`
+       return Pb([`${Gb}: ${Ub} bytes differ`, ...Lb.map((bb => `  +${bb}: cpu ${Xb(ub.bytes,bb)} | gpu ${Xb(hb,bb)}`))].join("\n")), `${Gb}: ${Ub} bytes differ, first at ${Lb.join(", ")} (context in the saved file)`
```

#### 34. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L593` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L593) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L593)

```diff
-       if (0 === qq.vertices.length) return void Jq(`decode probe (${qq.reason}): no terrain draw probed (${qq.draws.length} seen)`);
+       if (0 === bb.vertices.length) return void Ib(`decode probe (${bb.reason}): no terrain draw probed (${bb.draws.length} seen)`);
```

#### 35. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L633` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L633) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L633)

```diff
-               gq.byBand[cq] = (null !== (lq = gq.byBand[cq]) && void 0 !== lq ? lq : 0) + 1, gq.first.length < Wq && gq.first.push({
+               hb.byBand[Sb] = (null !== (Ob = hb.byBand[Sb]) && void 0 !== Ob ? Ob : 0) + 1, hb.first.length < wb && hb.first.push({
```

#### 36. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L641` → after: `L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L641) · [Before (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L641)

```diff
-         gq = Eq.byDirection.map(((qq, Eq) => qq ? `${mq[Eq]} ${qq}` : "")).filter(Boolean).join(" "),
+         hb = ub.byDirection.map(((bb, ub) => bb ? `${Ub[ub]} ${bb}` : "")).filter(Boolean).join(" "),
```

#### 37. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L644` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L644) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L644)

```diff
-           return `${Eq}: ${gq}`
+           return `${ub}: ${hb}`
```

#### 38. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L646-L648` → after: `L646-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L646-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L646-L648) · [Before (L646-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L646-L648)

```diff
-       if (Jq(`decode probe (${qq.reason}): ${Eq.mismatches}/${Eq.vertices} vertices differ from the CPU decode over ${qq.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (Eq.mismatches ? ` by direction [${gq}] diagonal [0: ${Eq … [truncated]
-         Jq(`decode probe input: ${qq.fed.differing}/${qq.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (qq.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (qq.fed.fa … [truncated]
-         for (const Eq of qq.fed.first) Jq(`  ${Eq}`)
+       if (Ib(`decode probe (${bb.reason}): ${ub.mismatches}/${ub.vertices} vertices differ from the CPU decode over ${bb.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (ub.mismatches ? ` by direction [${hb}] diagonal [0: ${ub … [truncated]
+         Ib(`decode probe input: ${bb.fed.differing}/${bb.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (bb.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (bb.fed.fa … [truncated]
+         for (const ub of bb.fed.first) Ib(`  ${ub}`)
```

#### 39. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L652)

```diff
-         Jq(`  mismatch part ${lq.group} r0 ${qq.toString(16)} r1 ${Eq.toString(16)} r2 ${gq.toString(16)} slot ${lq.slot} (${mq[xq(gq)]}): expected ${lq.expected.map(OE).join(",")} gpu ${lq.gpu.map(OE).join(",")}`)
+         Ib(`  mismatch part ${Ob.group} r0 ${bb.toString(16)} r1 ${ub.toString(16)} r2 ${hb.toString(16)} slot ${Ob.slot} (${Ub[Lb(hb)]}): expected ${Ob.expected.map(Gu).join(",")} gpu ${Ob.gpu.map(Gu).join(",")}`)
```

#### 40. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L654` → after: `L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L654) · [Before (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L654)

```diff
-       kq(`decode probe translations: ${[...Eq.translations].map((qq=>{let[Eq,gq]=qq;return`${Eq}: ${gq.map(OE).join(",")}`})).join("; ")}`)
+       Pb(`decode probe translations: ${[...ub.translations].map((bb=>{let[ub,hb]=bb;return`${ub}: ${hb.map(Gu).join(",")}`})).join("; ")}`)
```

#### 41. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L687` → after: `L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L687) · [Before (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L687)

```diff
-                 Jq(`draw ranges (${qq.reason}): ${qq.terrainDraws} terrain draws in the frame, the first ${qq.draws.length} here`);
+                 Ib(`draw ranges (${bb.reason}): ${bb.terrainDraws} terrain draws in the frame, the first ${bb.draws.length} here`);
```

#### 42. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L689)

```diff
-                   const qq = Eq.zV.slice(0, 8).map((qq => {
+                   const bb = ub.tp.slice(0, 8).map((bb => {
```

#### 43. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L691` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L691) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L691)

```diff
-                       return `${Eq}+${gq}`
+                       return `${ub}+${hb}`
```

#### 44. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L693-L694` → after: `L693-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L693-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L693-L694) · [Before (L693-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L693-L694)

```diff
-                     gq = Eq.zV.length > 8 ? ` (+${Eq.zV.length-8} ranges)` : "";
-                   Jq(`  ${bq(Eq.program)} ${Eq.program.terrain} ${Eq.call} ${qq}${gq} x${Eq.instances}${Eq.group>=0?` part ${Eq.group} chunk ${Eq.chunk}`:""} | ${Eq.attributes.join(" | ")}`)
+                     hb = ub.tp.length > 8 ? ` (+${ub.tp.length-8} ranges)` : "";
+                   Ib(`  ${zb(ub.program)} ${ub.program.terrain} ${ub.call} ${bb}${hb} x${ub.instances}${ub.group>=0?` part ${ub.group} chunk ${ub.chunk}`:""} | ${ub.attributes.join(" | ")}`)
```

#### 45. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L712)

```diff
-                     Eq.push(`${lq.kind}#${Sq(Yq)}: no CPU copy (${Mq.uncopied} pages over the copy budget)`);
+                     ub.push(`${Ob.kind}#${Nb(Bb)}: no CPU copy (${tb.uncopied} pages over the copy budget)`);
```

#### 46. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L716` → after: `L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L716) · [Before (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L716)

```diff
-                     Eq.push(gE(`buf#${qq.id}`, qq, Cq(Oq, lq.buffer, 0, qq.bytes.length)));
+                     ub.push(hu(`buf#${bb.id}`, bb, Tb(Gb, Ob.buffer, 0, bb.bytes.length)));
```

#### 47. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L721` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L721) · [Before (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L721)

```diff
-                   Eq.push(gE(`tex#${qq.id} (${16===qq.texelBytes?"records":"light"})`, qq, mq))
+                   ub.push(hu(`tex#${bb.id} (${16===bb.texelBytes?"records":"light"})`, bb, Ub))
```

#### 48. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L723` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L723) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L723)

```diff
-                 for (const Yq of Eq) Jq(`page readback ${Yq}`)
+                 for (const Bb of ub) Ib(`page readback ${Bb}`)
```

#### 49. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L726` → after: `L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L726) · [Before (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L726)

```diff
-               Jq(`check failed: ${String(qq)}`)
+               Ib(`check failed: ${String(bb)}`)
```

#### 50. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L739` → after: `L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L739) · [Before (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L739)

```diff
-     var xE = gq(4524);
+     var Lu = hb(4466);
```

#### 51. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L749` → after: `L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L749) · [Before (L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L749)

```diff
-         qq[Eq] = lq, (0, xE.B)(lq, Yq)
+         bb[ub] = Ob, (0, Lu.u)(Ob, Bb)
```

#### 52. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L787` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L787) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L787)

```diff
-         Oq = gq ? gq * Yq : qq.byteLength - Eq * Yq;
+         Gb = hb ? hb * Bb : bb.byteLength - ub * Bb;
```

#### 53. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L845` → after: `L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L845) · [Before (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L845)

```diff
-           mq = null !== (Eq = aE.get(Oq)) && void 0 !== Eq ? Eq : [];
+           Ub = null !== (ub = Xu.get(Gb)) && void 0 !== ub ? ub : [];
```

#### 54. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L856` → after: `L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L856) · [Before (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L856)

```diff
-               dE.lost < AE && (dE.lost++, Jq(`${Eq}${"statusMessage"in qq?`: ${String(qq.statusMessage)}`:""}`))
+               ou.lost < Yu && (ou.lost++, Ib(`${ub}${"statusMessage"in bb?`: ${String(bb.statusMessage)}`:""}`))
```

#### 55. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L860` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L860) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L860)

```diff
-           const Oq = null !== (gq = aE.get(Eq)) && void 0 !== gq ? gq : [];
+           const Gb = null !== (hb = Xu.get(ub)) && void 0 !== hb ? hb : [];
```

#### 56. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L865-L866` → after: `L865-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L865-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L865-L866) · [Before (L865-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L865-L866)

```diff
-             const qq = null !== (Aq = NE.get(uq)) && void 0 !== Aq ? Aq : "";
-             /\bgl_Position\b/.test(qq) ? mq = qq : xq = qq
+             const bb = null !== (Yb = Zu.get(ab)) && void 0 !== Yb ? Yb : "";
+             /\bgl_Position\b/.test(bb) ? Ub = bb : Lb = bb
```

#### 57. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L870` → after: `L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L870) · [Before (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L870)

```diff
-             name: null !== (Yq = null === (lq = nq.exec(mq)) || void 0 === lq ? void 0 : lq[1]) && void 0 !== Yq ? Yq : null,
+             name: null !== (Bb = null === (Ob = xb.exec(Ub)) || void 0 === Ob ? void 0 : Ob[1]) && void 0 !== Bb ? Bb : null,
```

#### 58. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L881` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L881) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L881)

```diff
-               return null !== (gq = qq.getShaderInfoLog(Eq)) && void 0 !== gq ? gq : ""
+               return null !== (hb = bb.getShaderInfoLog(ub)) && void 0 !== hb ? hb : ""
```

#### 59. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L883` → after: `L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L883) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L883)

```diff
-             Eq.length > 0 && kq(`program ${bq(cq)} (${cq.terrain}) shader logs:\n${Rq(Eq.join("\n"))}`)
+             ub.length > 0 && Pb(`program ${zb(Sb)} (${Sb.terrain}) shader logs:\n${qb(ub.join("\n"))}`)
```

#### 60. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L893` → after: `L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L893) · [Before (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L893)

```diff
-             const Eq = "number" === typeof gq[1] ? null : PE(gq[1], null !== (Oq = gq[3]) && void 0 !== Oq ? Oq : 0, null !== (mq = gq[4]) && void 0 !== mq ? mq : 0);
+             const ub = "number" === typeof hb[1] ? null : Wu(hb[1], null !== (Gb = hb[3]) && void 0 !== Gb ? Gb : 0, null !== (Ub = hb[4]) && void 0 !== Ub ? Ub : 0);
```

#### 61. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L895` → after: `L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L895) · [Before (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L895)

```diff
-             if (tE(qq, "number" === typeof gq[1] ? gq[1] : null !== (xq = null === Eq || void 0 === Eq ? void 0 : Eq.length) && void 0 !== xq ? xq : 0), Eq) null === (Aq = Zq.get(qq)) || void 0 === Aq || Aq.bytes.set(Eq)
+             if (ru(bb, "number" === typeof hb[1] ? hb[1] : null !== (Lb = null === ub || void 0 === ub ? void 0 : ub.length) && void 0 !== Lb ? Lb : 0), ub) null === (Yb = ib.get(bb)) || void 0 === Yb || Yb.bytes.set(ub)
```

#### 62. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L906)

```diff
-             Yq = PE(gq[2], null !== (Oq = gq[3]) && void 0 !== Oq ? Oq : 0, null !== (mq = gq[4]) && void 0 !== mq ? mq : 0);
+             Bb = Wu(hb[2], null !== (Gb = hb[3]) && void 0 !== Gb ? Gb : 0, null !== (Ub = hb[4]) && void 0 !== Ub ? Ub : 0);
```

#### 63. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L940` → after: `L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L940) · [Before (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L940)

```diff
-           let cq = PE(Eq[8], null !== (gq = Eq[9]) && void 0 !== gq ? gq : 0);
+           let Sb = Wu(ub[8], null !== (hb = ub[9]) && void 0 !== hb ? hb : 0);
```

#### 64. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L992` → after: `L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L992) · [Before (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L992)

```diff
-       HE[qq] += Yq, oE < 32 && Eq.bytes.length >= 1 << 20 && (oE++, kq(`upload ${qq} #${Eq.id} +${gq} ${Yq} B`))
+       lu[bb] += Bb, Ku < 32 && ub.bytes.length >= 1 << 20 && (Ku++, Pb(`upload ${bb} #${ub.id} +${hb} ${Bb} B`))
```

#### 65. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1005` → after: `L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1005) · [Before (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1005)

```diff
-         Oq = (null !== (Yq = qq.getProgramInfoLog(Eq)) && void 0 !== Yq ? Yq : "").trim();
+         Gb = (null !== (Bb = bb.getProgramInfoLog(ub)) && void 0 !== Bb ? Bb : "").trim();
```

#### 66. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1007` → after: `L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1007) · [Before (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1007)

```diff
-       null === gq.terrain && lq || (Jq(`program ${bq(gq)} ${null!==(mq=gq.terrain)&&void 0!==mq?mq:"other"} link ${lq?"ok":"FAILED"}${Oq?`: ${Rq(Oq,300)}`:""}`), Oq && kq(`program ${bq(gq)} link log:\n${Rq(Oq)}`))
+       null === hb.terrain && Ob || (Ib(`program ${zb(hb)} ${null!==(Ub=hb.terrain)&&void 0!==Ub?Ub:"other"} link ${Ob?"ok":"FAILED"}${Gb?`: ${qb(Gb,300)}`:""}`), Gb && Pb(`program ${zb(hb)} link log:\n${qb(Gb)}`))
```

#### 67. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1015` → after: `L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1015) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1015)

```diff
-       const mq = null !== (Yq = Oq.terrain) && void 0 !== Yq ? Yq : "other",
+       const Ub = null !== (Bb = Gb.terrain) && void 0 !== Bb ? Bb : "other",
```

#### 68. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1017` → after: `L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1017) · [Before (L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1017)

```diff
-           zV: xq,
+           tp: Lb,
```

#### 69. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1023` → after: `L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1023) · [Before (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1023)

```diff
-                 zV: [
+                 tp: [
```

#### 70. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1030` → after: `L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1030) · [Before (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1030)

```diff
-                 zV: [
+                 tp: [
```

#### 71. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1036` → after: `L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1036) · [Before (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1036)

```diff
-                 zV: [
+                 tp: [
```

#### 72. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1043` → after: `L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1043) · [Before (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1043)

```diff
-                 zV: [
+                 tp: [
```

#### 73. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1055` → after: `L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1055) · [Before (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1055)

```diff
-                 zV: Oq,
+                 tp: Gb,
```

#### 74. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1061` → after: `L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1061) · [Before (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1061)

```diff
-                 zV: [], instances: 0
+                 tp: [], instances: 0
```

#### 75. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1065` → after: `L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1065) · [Before (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1065)

```diff
-         cq = "inst" === Oq.terrain ? Aq : xq.reduce(((qq, Eq) => {
+         Sb = "inst" === Gb.terrain ? Yb : Lb.reduce(((bb, ub) => {
```

#### 76. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1085` → after: `L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1085) · [Before (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1085)

```diff
-             lq = Eq.getFramebufferAttachmentParameter(Vq.DRAW_FRAMEBUFFER, Vq.DEPTH_ATTACHMENT, Vq.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(Eq.getFramebufferAttachmentParameter(Vq.DRAW_FRAMEBUFFER,Vq.DEPTH_ATTACHMENT,Vq.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type  … [truncated]
+             Ob = ub.getFramebufferAttachmentParameter(pb.DRAW_FRAMEBUFFER, pb.DEPTH_ATTACHMENT, pb.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(ub.getFramebufferAttachmentParameter(pb.DRAW_FRAMEBUFFER,pb.DEPTH_ATTACHMENT,pb.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type  … [truncated]
```

#### 77. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1088` → after: `L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1088) · [Before (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1088)

```diff
-           return `depth ${null!==(Eq=Yq[gq])&&void 0!==Eq?Eq:`0x${gq.toString(16)}`} clear ${Oq}${516===gq||518===gq?" (reverse-Z)":""}, samples ${String(qq.getParameter(Vq.SAMPLES))}, ${lq}`
+           return `depth ${null!==(ub=Bb[hb])&&void 0!==ub?ub:`0x${hb.toString(16)}`} clear ${Gb}${516===hb||518===hb?" (reverse-Z)":""}, samples ${String(bb.getParameter(pb.SAMPLES))}, ${Ob}`
```

#### 78. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1091` → after: `L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1091) · [Before (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1091)

```diff
-         gq !== Vq.NO_ERROR && dE.gl < AE && (dE.gl++, Jq(`GL error 0x${gq.toString(16)} after program ${bq(Oq)}'s first terrain draw (${Eq})`))
+         hb !== pb.NO_ERROR && ou.gl < Yu && (ou.gl++, Ib(`GL error 0x${hb.toString(16)} after program ${zb(Gb)}'s first terrain draw (${ub})`))
```

#### 79. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1098-L1099` → after: `L1098-L1099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1098-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1098-L1099) · [Before (L1098-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1098-L1099)

```diff
-     var fE = gq(4340),
-       ME = gq(4527);
+     var vu = hb(4270),
+       tu = hb(4468);
```

#### 80. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1128-L1130` → after: `L1128-L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1128-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1128-L1130) · [Before (L1128-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1128-L1130)

```diff
-       const gq = null !== qq && void 0 !== qq ? qq : {},
-         Yq = null !== Eq && void 0 !== Eq ? Eq : Object.keys(Object.getPrototypeOf(gq)).concat(Object.keys(gq));
-       return [...new Set(Yq)].filter((qq => "number" === typeof gq[qq])).map((qq => `${qq} ${String(gq[qq])}`)).join(", ")
+       const hb = null !== bb && void 0 !== bb ? bb : {},
+         Bb = null !== ub && void 0 !== ub ? ub : Object.keys(Object.getPrototypeOf(hb)).concat(Object.keys(hb));
+       return [...new Set(Bb)].filter((bb => "number" === typeof hb[bb])).map((bb => `${bb} ${String(hb[bb])}`)).join(", ")
```

#### 81. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1135` → after: `L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1135) · [Before (L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1135)

```diff
-       const Yq = null !== (gq = Eq.vertex) && void 0 !== gq ? gq : {};
+       const Bb = null !== (hb = ub.vertex) && void 0 !== hb ? hb : {};
```

#### 82. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1138` → after: `L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1138) · [Before (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1138)

```diff
-         const gq = String(null !== (lq = Yq.entryPoint) && void 0 !== lq ? lq : "");
+         const hb = String(null !== (Ob = Bb.entryPoint) && void 0 !== Ob ? Ob : "");
```

#### 83. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1142-L1145` → after: `L1142-L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1142-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1142-L1145) · [Before (L1142-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1142-L1145)

```diff
-           const qq = null !== (Oq = Eq.depthStencil) && void 0 !== Oq ? Oq : {},
-             Yq = null !== (mq = Eq.multisample) && void 0 !== mq ? mq : {},
-             lq = String(null !== (xq = qq.depthCompare) && void 0 !== xq ? xq : "");
-           Jq(`WebGPU terrain pipeline ${gq}: depth ${String(null!==(Aq=qq.format)&&void 0!==Aq?Aq:"none")} ${lq}${lq.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(cq=Yq.count)&&void 0!==cq?cq:1)}`)
+           const bb = null !== (Gb = ub.depthStencil) && void 0 !== Gb ? Gb : {},
+             Bb = null !== (Ub = ub.multisample) && void 0 !== Ub ? Ub : {},
+             Ob = String(null !== (Lb = bb.depthCompare) && void 0 !== Lb ? Lb : "");
+           Ib(`WebGPU terrain pipeline ${hb}: depth ${String(null!==(Yb=bb.format)&&void 0!==Yb?Yb:"none")} ${Ob}${Ob.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(Sb=Bb.count)&&void 0!==Sb?Sb:1)}`)
```

#### 84. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1165` → after: `L1165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1165) · [Before (L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1165)

```diff
-       (UE.draws++, "draw" === qq || "drawIndexed" === qq) && (UE.faces += gq[0] * (null !== (Yq = gq[1]) && void 0 !== Yq ? Yq : 1) / 6);
+       (Eu.draws++, "draw" === bb || "drawIndexed" === bb) && (Eu.faces += hb[0] * (null !== (Bb = hb[1]) && void 0 !== Bb ? Bb : 1) / 6);
```

#### 85. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1169` → after: `L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1169) · [Before (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1169)

```diff
-           return `${Eq} ${String(null!==lq&&void 0!==lq?lq:"instances"===Eq?1:0)}`
+           return `${ub} ${String(null!==Ob&&void 0!==Ob?Ob:"instances"===ub?1:0)}`
```

#### 86. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1171` → after: `L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1171) · [Before (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1171)

```diff
-         RE.push(`  ${Eq} ${qq} ${Yq.join(" ")}`)
+         qu.push(`  ${ub} ${bb} ${Bb.join(" ")}`)
```

#### 87. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1183-L1185` → after: `L1183-L1185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1183-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1183-L1185) · [Before (L1183-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1183-L1185)

```diff
-             const gq = null !== (Eq = qq.info) && void 0 !== Eq ? Eq : {};
-             Jq(`WebGPU adapter ${["vendor","architecture","device","description"].map((qq=>{var Eq;return`${qq} "${String(null!==(Eq=gq[qq])&&void 0!==Eq?Eq:"")}"`})).join(" ")}${qq.isFallbackAdapter?" (fallback)":""}`), Jq(`WebGPU adapter features ${sE(qq.features)}`), Jq(`WebGP … [truncated]
-           }(qq) : Jq(`WebGPU requestAdapter(${JSON.stringify(null!==(Eq=gq[0])&&void 0!==Eq?Eq:{})}) gave none`);
+             const hb = null !== (ub = bb.info) && void 0 !== ub ? ub : {};
+             Ib(`WebGPU adapter ${["vendor","architecture","device","description"].map((bb=>{var ub;return`${bb} "${String(null!==(ub=hb[bb])&&void 0!==ub?ub:"")}"`})).join(" ")}${bb.isFallbackAdapter?" (fallback)":""}`), Ib(`WebGPU adapter features ${Vu(bb.features)}`), Ib(`WebGP … [truncated]
+           }(bb) : Ib(`WebGPU requestAdapter(${JSON.stringify(null!==(ub=hb[0])&&void 0!==ub?ub:{})}) gave none`);
```

#### 88. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1191` → after: `L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1191) · [Before (L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1191)

```diff
-           Jq(`WebGPU device features ${sE(qq.features)}`), Jq(`WebGPU device limits ${XE(qq.limits,TE)}`), qq.addEventListener("uncapturederror", (qq => {
+           Ib(`WebGPU device features ${Vu(bb.features)}`), Ib(`WebGPU device limits ${Fu(bb.limits,Ju)}`), bb.addEventListener("uncapturederror", (bb => {
```

#### 89. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1196` → after: `L1196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1196) · [Before (L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1196)

```diff
-               Jq(`WebGPU uncaptured ${null!==(Eq=null===lq||void 0===lq||null===(gq=lq.constructor)||void 0===gq?void 0:gq.name)&&void 0!==Eq?Eq:"error"}: ${Rq(String(null!==(Yq=null===lq||void 0===lq?void 0:lq.message)&&void 0!==Yq?Yq:""),600)}`)
+               Ib(`WebGPU uncaptured ${null!==(ub=null===Ob||void 0===Ob||null===(hb=Ob.constructor)||void 0===hb?void 0:hb.name)&&void 0!==ub?ub:"error"}: ${qb(String(null!==(Bb=null===Ob||void 0===Ob?void 0:Ob.message)&&void 0!==Bb?Bb:""),600)}`)
```

#### 90. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1202` → after: `L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1202) · [Before (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1202)

```diff
-             Jq(`WebGPU device lost (${String(qq.reason)}): ${Rq(String(null!==(Eq=qq.message)&&void 0!==Eq?Eq:""),600)}`)
+             Ib(`WebGPU device lost (${String(bb.reason)}): ${qb(String(null!==(ub=bb.message)&&void 0!==ub?ub:""),600)}`)
```

#### 91. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1205` → after: `L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1205) · [Before (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1205)

```diff
-           throw Jq(`WebGPU requestDevice failed: ${String(qq)}`), qq
+           throw Ib(`WebGPU requestDevice failed: ${String(bb)}`), bb
```

#### 92. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1221` → after: `L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1221) · [Before (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1221)

```diff
-               Eq[String(gq.type)] = (null !== (Yq = Eq[String(gq.type)]) && void 0 !== Yq ? Yq : 0) + 1
+               ub[String(hb.type)] = (null !== (Bb = ub[String(hb.type)]) && void 0 !== Bb ? Bb : 0) + 1
```

#### 93. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1223-L1224` → after: `L1223-L1224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1223-L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1223-L1224) · [Before (L1223-L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1223-L1224)

```diff
-             const lq = qq.messages.map((qq => `${String(qq.type)} ${String(qq.lineNum)}:${String(qq.linePos)} ${String(qq.message)}`)).join("\n");
-             LE.compile < AE && (LE.compile++, Jq(`WebGPU ${gq?"terrain ":""}shader module compiled: ${JSON.stringify(Eq)}${lq?` first: ${Rq(lq.split("\n")[0],300)}`:""}`)), lq && kq(`WebGPU shader module messages:\n${Rq(lq)}`)
+             const Ob = bb.messages.map((bb => `${String(bb.type)} ${String(bb.lineNum)}:${String(bb.linePos)} ${String(bb.message)}`)).join("\n");
+             mu.compile < Yu && (mu.compile++, Ib(`WebGPU ${hb?"terrain ":""}shader module compiled: ${JSON.stringify(ub)}${Ob?` first: ${qb(Ob.split("\n")[0],300)}`:""}`)), Ob && Pb(`WebGPU shader module messages:\n${qb(Ob)}`)
```

#### 94. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1226` → after: `L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1226) · [Before (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1226)

```diff
-         }(mq, String(null !== (Eq = (null !== (gq = lq[0]) && void 0 !== gq ? gq : {}).code) && void 0 !== Eq ? Eq : "")), mq
+         }(Ub, String(null !== (ub = (null !== (hb = Ob[0]) && void 0 !== hb ? hb : {}).code) && void 0 !== ub ? ub : "")), Ub
```

#### 95. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1230` → after: `L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1230) · [Before (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1230)

```diff
-         return wE(Oq, null !== (Eq = Yq[0]) && void 0 !== Eq ? Eq : {}), Oq
+         return fu(Gb, null !== (ub = Bb[0]) && void 0 !== ub ? ub : {}), Gb
```

#### 96. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1235` → after: `L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1235) · [Before (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1235)

```diff
-           return wE(qq, null !== (Eq = gq[0]) && void 0 !== Eq ? Eq : {}), qq
+           return fu(bb, null !== (ub = hb[0]) && void 0 !== ub ? ub : {}), bb
```

#### 97. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1245-L1247` → after: `L1245-L1247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1245-L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1245-L1247) · [Before (L1245-L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1245-L1247)

```diff
-             } = null !== Eq && void 0 !== Eq ? Eq : {}, xq = String(null !== (gq = (null !== (Yq = qq.vertex) && void 0 !== Yq ? Yq : {}).entryPoint) && void 0 !== gq ? gq : "");
-             Jq(`WebGPU pipeline "${String(null!==(lq=qq.label)&&void 0!==lq?lq:"")}" ${xq} rejected (${String(null!==Oq&&void 0!==Oq?Oq:"no reason")}): ${Rq(String(null!==mq&&void 0!==mq?mq:Eq),600)}`)
-           }(null !== (Eq = gq[0]) && void 0 !== Eq ? Eq : {}, qq), qq
+             } = null !== ub && void 0 !== ub ? ub : {}, Lb = String(null !== (hb = (null !== (Bb = bb.vertex) && void 0 !== Bb ? Bb : {}).entryPoint) && void 0 !== hb ? hb : "");
+             Ib(`WebGPU pipeline "${String(null!==(Ob=bb.label)&&void 0!==Ob?Ob:"")}" ${Lb} rejected (${String(null!==Gb&&void 0!==Gb?Gb:"no reason")}): ${qb(String(null!==Ub&&void 0!==Ub?Ub:ub),600)}`)
+           }(null !== (ub = hb[0]) && void 0 !== ub ? ub : {}, bb), bb
```

#### 98. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1251` → after: `L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1251) · [Before (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1251)

```diff
-         const Oq = null !== (Eq = Yq[0]) && void 0 !== Eq ? Eq : {};
+         const Gb = null !== (ub = Bb[0]) && void 0 !== ub ? ub : {};
```

#### 99. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1253` → after: `L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1253) · [Before (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1253)

```diff
-         JE++ < 3 && Jq(`WebGPU canvas ${String(Oq.format)} ${String(null!==(mq=Oq.colorSpace)&&void 0!==mq?mq:"srgb")} alpha ${String(null!==(xq=Oq.alphaMode)&&void 0!==xq?xq:"opaque")}`);
+         Iu++ < 3 && Ib(`WebGPU canvas ${String(Gb.format)} ${String(null!==(Ub=Gb.colorSpace)&&void 0!==Ub?Ub:"srgb")} alpha ${String(null!==(Lb=Gb.alphaMode)&&void 0!==Lb?Lb:"opaque")}`);
```

#### 100. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1265` → after: `L1265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1265) · [Before (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1265)

```diff
-         ...fE.b
+         ...vu.c
```

#### 101. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1278` → after: `L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1278) · [Before (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1278)

```diff
-         ...fE.b
+         ...vu.c
```

#### 102. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1280-L1282` → after: `L1280-L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1280-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1280-L1282) · [Before (L1280-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1280-L1282)

```diff
-         faceCull: "0" === (0, Oq.o)("faceCull") ? "0" : "1",
-         adrenoProbe: null !== (qq = (0, Oq.o)("adrenoProbe")) && void 0 !== qq ? qq : ""
-       }), Jq("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), WE || "undefined" === typeof window || (WE = !0, "undefined" !== typeof WebGL2RenderingContext && rE(WebGL2RenderingContext.prototype, !0), "undefined" !== typeo … [truncated]
+         faceCull: "0" === (0, Gb.n)("faceCull") ? "0" : "1",
+         adrenoProbe: null !== (bb = (0, Gb.n)("adrenoProbe")) && void 0 !== bb ? bb : ""
+       }), Ib("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), wu || "undefined" === typeof window || (wu = !0, "undefined" !== typeof WebGL2RenderingContext && ju(WebGL2RenderingContext.prototype, !0), "undefined" !== typeo … [truncated]
```

#### 103. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1289-L1291` → after: `L1289-L1291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1289-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1289-L1291) · [Before (L1289-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1289-L1291)

```diff
-       Bg(), Yg = null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.backend) && void 0 !== Eq ? Eq : null;
-       const Yq = `, renderer param ${null!==(gq=(0,Oq.o)("renderer"))&&void 0!==gq?gq:"none"}, faceCull ${"0"===Og.faceCull?"off (whole parts)":"on"}, adrenoProbe ${Og.adrenoProbe||"none"}`;
-       Jq(`${(0,ME.e)(qq)}${null===qq?"":Yq}`)
+       Hh(), Bh = null !== (ub = null === bb || void 0 === bb ? void 0 : bb.backend) && void 0 !== ub ? ub : null;
+       const Bb = `, renderer param ${null!==(hb=(0,Gb.n)("renderer"))&&void 0!==hb?hb:"none"}, faceCull ${"0"===Gh.faceCull?"off (whole parts)":"on"}, adrenoProbe ${Gh.adrenoProbe||"none"}`;
+       Ib(`${(0,tu.e)(bb)}${null===bb?"":Bb}`)
```

#### 104. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1296` → after: `L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1296) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1296)

```diff
-         Eq = ag(ug, eE, DE).then((Eq => jg(`${Math.round((performance.now()-qq)/1e3)} s after playable${Eq?"":", no terrain drawn yet"}`)));
+         ub = Xh(ah, Qu, Ru).then((ub => Ah(`${Math.round((performance.now()-bb)/1e3)} s after playable${ub?"":", no terrain drawn yet"}`)));
```

#### 105. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1315` → after: `L1315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1315) · [Before (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1315)

```diff
-       (mg = !0, Jq(`renderer caps ${null!==(qq=Og.caps)&&void 0!==qq?qq:"(not noted)"}; terrain fetch ${null!==(Eq=Og.fetch)&&void 0!==Eq?Eq:"(not noted)"}`), Og.adrenoProbe) && Jq(`adrenoProbe ${Og.adrenoProbe} asked; in force (storage fetch only): ${null!==(gq=Og.probe)&&void 0 … [truncated]
+       (Uh = !0, Ib(`renderer caps ${null!==(bb=Gh.caps)&&void 0!==bb?bb:"(not noted)"}; terrain fetch ${null!==(ub=Gh.fetch)&&void 0!==ub?ub:"(not noted)"}`), Gh.adrenoProbe) && Ib(`adrenoProbe ${Gh.adrenoProbe} asked; in force (storage fetch only): ${null!==(hb=Gh.probe)&&void 0 … [truncated]
```

#### 106. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1324` → after: `L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1324) · [Before (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1324)

```diff
-             gq.push(`GL ${String(qq.getParameter(qq.VERSION))} | ${String(qq.getParameter(qq.SHADING_LANGUAGE_VERSION))} | ${String(qq.getParameter(qq.VENDOR))} / ${String(qq.getParameter(qq.RENDERER))}`), gq.push(`GL unmasked ${lq} / ${Oq}`);
+             hb.push(`GL ${String(bb.getParameter(bb.VERSION))} | ${String(bb.getParameter(bb.SHADING_LANGUAGE_VERSION))} | ${String(bb.getParameter(bb.VENDOR))} / ${String(bb.getParameter(bb.RENDERER))}`), hb.push(`GL unmasked ${Ob} / ${Gb}`);
```

#### 107. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1334` → after: `L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1334) · [Before (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1334)

```diff
-             "MAX_UNIFORM_BLOCK_SIZE" in qq && mq.push(["MAX_UNIFORM_BLOCK_SIZE", qq.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", qq.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", qq.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", qq.MAX_TRANSFORM_FEEDBACK_I … [truncated]
+             "MAX_UNIFORM_BLOCK_SIZE" in bb && Ub.push(["MAX_UNIFORM_BLOCK_SIZE", bb.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", bb.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", bb.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", bb.MAX_TRANSFORM_FEEDBACK_I … [truncated]
```

#### 108. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1338` → after: `L1338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1338) · [Before (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1338)

```diff
-               return `${gq} highp float ${Yq?`${Yq.rangeMin}/${Yq.rangeMax}/${Yq.precision}`:"?"} int ${lq?`${lq.rangeMin}/${lq.rangeMax}/${lq.precision}`:"?"}`
+               return `${hb} highp float ${Bb?`${Bb.rangeMin}/${Bb.rangeMax}/${Bb.precision}`:"?"} int ${Ob?`${Ob.rangeMin}/${Ob.rangeMax}/${Ob.precision}`:"?"}`
```

#### 109. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1340` → after: `L1340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1340) · [Before (L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1340)

```diff
-             gq.push(`GL precision ${xq(qq.VERTEX_SHADER,"VS")}, ${xq(qq.FRAGMENT_SHADER,"FS")}`);
+             hb.push(`GL precision ${Lb(bb.VERTEX_SHADER,"VS")}, ${Lb(bb.FRAGMENT_SHADER,"FS")}`);
```

#### 110. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1342` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1342) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1342)

```diff
-             return gq.push(`GL context ${JSON.stringify(Aq)} drawingBuffer ${qq.drawingBufferWidth}x${qq.drawingBufferHeight}${"drawingBufferFormat"in qq?` format 0x${Number(qq.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in qq?` ${String(qq.drawingBufferColo … [truncated]
+             return hb.push(`GL context ${JSON.stringify(Yb)} drawingBuffer ${bb.drawingBufferWidth}x${bb.drawingBufferHeight}${"drawingBufferFormat"in bb?` format 0x${Number(bb.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in bb?` ${String(bb.drawingBufferColo … [truncated]
```

#### 111. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1349` → after: `L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1349) · [Before (L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1349)

```diff
-           Jq(`programs: ${Eq} live of ${iq.length} linked, ${qq} packed terrain; CPU page copies ${Math.round(Mq.shadowBytes/1048576)} MiB (${Mq.uncopied} over budget)`)
+           Ib(`programs: ${ub} live of ${gb.length} linked, ${bb} packed terrain; CPU page copies ${Math.round(tb.shadowBytes/1048576)} MiB (${tb.uncopied} over budget)`)
```

#### 112. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1362` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1362) · [Before (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1362)

```diff
-                 RE = null, Jq(`WebGPU draw ranges (${qq}): ${Eq.length} terrain draws recorded in a second (first ${cE}; bundles replay without new ones)`);
+                 qu = null, Ib(`WebGPU draw ranges (${bb}): ${ub.length} terrain draws recorded in a second (first ${Su}; bundles replay without new ones)`);
```

#### 113. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1368` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1368) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1368)

```diff
-             if (await (0, fE.g)(Og, "slotCheck", ["1"], Eg, gg), "1" === Og.slotCheck) return void Jq(`slot check: no answer in ${Eg} ms (only the storage fetch has one; a later answer logs on its own)`);
+             if (await (0, vu.i)(Gh, "slotCheck", ["1"], uh, hh), "1" === Gh.slotCheck) return void Ib(`slot check: no answer in ${uh} ms (only the storage fetch has one; a later answer logs on its own)`);
```

#### 114. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1371` → after: `L1371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1371) · [Before (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1371)

```diff
-         Jq(`check (${qq}) done: bloxdDebug.save() downloads it all`)
+         Ib(`check (${bb}) done: bloxdDebug.save() downloads it all`)
```

#### 115. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1373` → after: `L1373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1373) · [Before (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1373)

```diff
-         Jq(`check (${qq}) failed: ${String(Eq)}`)
+         Ib(`check (${bb}) failed: ${String(ub)}`)
```

#### 116. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1417-L1418` → after: `L1417-L1418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1417-L1418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1417-L1418) · [Before (L1417-L1418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1417-L1418)

```diff
-       const lq = "webgpu" === Yg ? [`terrain ${qq(Eq.draws)} draws ${qq(Eq.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((qq => gq[qq].draws > 0)).map((Eq => `${Eq} ${qq(gq[Eq].draws)} draws ${qq(gq[Eq].faces)} faces a frame`));
-       Jq(`${Ag} frames: ${lq.join(", ")||"no draws"}; uploaded ${Math.round(Yq.buffer/1024)} KiB to buffers, ${Math.round(Yq.texture/1024)} KiB to data textures`), Ag = 0
+       const Ob = "webgpu" === Bh ? [`terrain ${bb(ub.draws)} draws ${bb(ub.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((bb => hb[bb].draws > 0)).map((ub => `${ub} ${bb(hb[ub].draws)} draws ${bb(hb[ub].faces)} faces a frame`));
+       Ib(`${Yh} frames: ${Ob.join(", ")||"no draws"}; uploaded ${Math.round(Bb.buffer/1024)} KiB to buffers, ${Math.round(Bb.texture/1024)} KiB to data textures`), Yh = 0
```

#### 117. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1421` → after: `L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1421) · [Before (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1421)

```diff
-   4527: (qq, Eq, gq) => {
+   4468: (bb, ub, hb) => {
```

#### 118. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1424-L1425` → after: `L1424-L1425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1424-L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderDebug.js#L1424-L1425) · [Before (L1424-L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderDebug.js#L1424-L1425)

```diff
-       const Eq = qq.adapter ? `${qq.adapter.vendor}/${qq.adapter.architecture}` : "none";
-       return `backend ${qq.backend}: reason ${qq.reason}, source ${qq.source}, adapter ${Eq}`
+       const ub = bb.adapter ? `${bb.adapter.vendor}/${bb.adapter.architecture}` : "none";
+       return `backend ${bb.backend}: reason ${bb.reason}, source ${bb.source}, adapter ${ub}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderLite.js` (bbb6l5.0244a119 → halsg.2bd74967)

- **File**: `bundles/bloxd.io/chunks/js/renderLite.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070)

#### 1. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L4)

```diff
-   43069: (qq, Eq, gq) => {
+   42709: (bb, ub, hb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L8-L18` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L8-L18) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L8-L18)

```diff
-     var Yq = gq(2797),
-       lq = gq(611),
-       Oq = gq(128),
-       mq = gq(4625),
-       xq = gq(40462),
-       Aq = gq(4622),
-       cq = gq(40498),
-       uq = gq(40325),
-       Bq = gq(40697),
-       Wq = gq(2733),
-       Nq = gq(4340);
+     var Bb = hb(2683),
+       Ob = hb(599),
+       Gb = hb(113),
+       Ub = hb(4564),
+       Lb = hb(40171),
+       Yb = hb(4555),
+       Sb = hb(40212),
+       ab = hb(40049),
+       Hb = hb(40378),
+       wb = hb(2633),
+       Zb = hb(4270);
```

#### 3. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L31-L32` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L31-L32) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L31-L32)

```diff
-             const [gq, Yq] = qq.split(":"), lq = null !== (Eq = aq.get(gq.slice(-1))) && void 0 !== Eq ? Eq : "";
-             return `gl link failed: program row ${parseInt(gq)}${lq}, read ${Yq} ms after issue`
+             const [hb, Bb] = bb.split(":"), Ob = null !== (ub = Xb.get(hb.slice(-1))) && void 0 !== ub ? ub : "";
+             return `gl link failed: program row ${parseInt(hb)}${Ob}, read ${Bb} ms after issue`
```

#### 4. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L38-L41` → after: `L38-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L38-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L38-L41) · [Before (L38-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L38-L41)

```diff
-         return void 0 === qq || qq === this.summary || Eq - this.summaryAtMs < gq ? null : (this.summary = qq, this.summaries++, this.summaryAtMs = Eq, `gl links: ${qq}`)
-       }
-     }
-     var dq = gq(4527);
+         return void 0 === bb || bb === this.summary || ub - this.summaryAtMs < hb ? null : (this.summary = bb, this.summaries++, this.summaryAtMs = ub, `gl links: ${bb}`)
+       }
+     }
+     var ob = hb(4468);
```

#### 5. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L80` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L80) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L80)

```diff
-         return this.logged >= 20 || this.seen.has(qq) ? (this.unlogged++, null) : (this.seen.add(qq), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${qq}` : qq)
+         return this.logged >= 20 || this.seen.has(bb) ? (this.unlogged++, null) : (this.seen.add(bb), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${bb}` : bb)
```

#### 6. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L89)

```diff
-       (0, Wq.m)("renderlite", qq)
+       (0, wb.l)("renderlite", bb)
```

#### 7. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L95)

```diff
-         }, this.SB = () => {
+         }, this.gH = () => {
```

#### 8. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L98` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L98) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L98)

```diff
-             lq = (0, uq.e)(),
+             Ob = (0, ab.l)(),
```

#### 9. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L107-L108` → after: `L107-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L107-L108) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L107-L108)

```diff
-           const Aq = gq.headerWord(mq.C.GpuTimed),
-             Bq = gq.headerWord(mq.C.GpuFrameUs),
+           const Yb = hb.headerWord(Ub.B.GpuTimed),
+             Hb = hb.headerWord(Ub.B.GpuFrameUs),
```

#### 10. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L114)

```diff
-           const Nq = null !== (qq = null === (Eq = (0, cq.B)((0, Yq.C)())) || void 0 === Eq ? void 0 : Eq.tYq()) && void 0 !== qq ? qq : 0;
+           const Zb = null !== (bb = null === (ub = (0, Sb.J)((0, Bb.B)())) || void 0 === ub ? void 0 : ub.YBb()) && void 0 !== bb ? bb : 0;
```

#### 11. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L117-L118` → after: `L117-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L117-L118) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L117-L118)

```diff
-               Yq = [`${Math.round(gq)}s: ${qq.drawn} drawn (${(qq.drawn/gq).toFixed(1)}/s), ${qq.paced} paced, ${qq.frames-qq.drawn-qq.paced} skipped`, `gap max ${Math.round(qq.gapMaxMs)} ms, ${qq.longGaps} over 50 ms`, `render cpu ${qq.drawn?(qq.renderUs/qq.drawn/1e3).toFixed(2) … [truncated]
-             null !== Eq.gpu && Yq.push(`gpu ${Eq.gpu.timed?(Eq.gpu.us/Eq.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${Eq.gpu.timed} timed`);
+               Bb = [`${Math.round(hb)}s: ${bb.drawn} drawn (${(bb.drawn/hb).toFixed(1)}/s), ${bb.paced} paced, ${bb.frames-bb.drawn-bb.paced} skipped`, `gap max ${Math.round(bb.gapMaxMs)} ms, ${bb.longGaps} over 50 ms`, `render cpu ${bb.drawn?(bb.renderUs/bb.drawn/1e3).toFixed(2) … [truncated]
+             null !== ub.gpu && Bb.push(`gpu ${ub.gpu.timed?(ub.gpu.us/ub.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${ub.gpu.timed} timed`);
```

#### 12. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L120-L122` → after: `L120-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L120-L122) · [Before (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L120-L122)

```diff
-             Yq.push(null === lq ? "draws none yet" : `draws ${(0,xq.e)(lq)} (terrain ${lq.terrainOpaque}+${lq.terrainTransparent}, pack ${lq.terrainPack}, meshes ${lq.regular+lq.thin+lq.line+lq.text}, sky ${lq.earthSky+lq.skyMeshes}, particles ${lq.particles})`);
-             const Oq = null === Eq.gpuBytesBefore ? "" : ` (${Eq.gpuBytes>=Eq.gpuBytesBefore?"+":"-"}${Hq(Math.abs(Eq.gpuBytes-Eq.gpuBytesBefore))})`;
-             return Yq.push(`gpu mem ${Hq(Eq.gpuBytes)} MiB${Oq}`), Yq.push(`pending ${Eq.pending}`, "terrain " + (Eq.terrainDrawn ? "drawn" : "not drawn yet")), Eq.eventsUnlogged > 0 && Yq.push(`${Eq.eventsUnlogged} events unlogged`), Yq.join("; ")
+             Bb.push(null === Ob ? "draws none yet" : `draws ${(0,Lb.b)(Ob)} (terrain ${Ob.terrainOpaque}+${Ob.terrainTransparent}, pack ${Ob.terrainPack}, meshes ${Ob.regular+Ob.thin+Ob.line+Ob.text}, sky ${Ob.earthSky+Ob.skyMeshes}, particles ${Ob.particles})`);
+             const Gb = null === ub.gpuBytesBefore ? "" : ` (${ub.gpuBytes>=ub.gpuBytesBefore?"+":"-"}${lb(Math.abs(ub.gpuBytes-ub.gpuBytesBefore))})`;
+             return Bb.push(`gpu mem ${lb(ub.gpuBytes)} MiB${Gb}`), Bb.push(`pending ${ub.pending}`, "terrain " + (ub.terrainDrawn ? "drawn" : "not drawn yet")), ub.eventsUnlogged > 0 && Bb.push(`${ub.eventsUnlogged} events unlogged`), Bb.join("; ")
```

#### 13. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L126` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L126) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L126)

```diff
-             census: (0, xq.f)(lq.api),
+             census: (0, Lb.d)(Ob.api),
```

#### 14. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L129-L130` → after: `L129-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L129-L130) · [Before (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L129-L130)

```diff
-             pending: gq.headerWord(mq.C.RenderPending),
-             terrainDrawn: 0 !== (gq.headerWord(mq.C.LoadSteps) & mq.O.TerrainDrawn),
+             pending: hb.headerWord(Ub.B.RenderPending),
+             terrainDrawn: 0 !== (hb.headerWord(Ub.B.LoadSteps) & Ub.N.TerrainDrawn),
```

#### 15. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L133)

```diff
-         }, Pq(`${(0,dq.e)(qq)}; client ${lq.k.client} (${lq.k.reason})`), setInterval(this.SB, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
+         }, Wb(`${(0,ob.e)(bb)}; client ${Ob.f.client} (${Ob.f.reason})`), setInterval(this.gH, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
```

#### 16. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L136)

```diff
-         this.session = qq, this.frames.frame(Eq, gq, "drawn" === gq ? qq.headerWord(mq.C.RenderUs) : 0)
+         this.session = bb, this.frames.frame(ub, hb, "drawn" === hb ? bb.headerWord(Ub.B.RenderUs) : 0)
```

#### 17. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L145)

```diff
-           if (Yq >= mq.f.RenderDeviceLost && Yq <= mq.f.RenderSerialLinks) this.event(`render error ${(0,Aq.ne)(Yq)}${null!==(Eq=null===(gq=(0,Bq.b)(Yq,lq))||void 0===gq?void 0:gq.words)&&void 0!==Eq?Eq:""} (detail ${lq})`)
+           if (Bb >= Ub.f.RenderDeviceLost && Bb <= Ub.f.RenderSerialLinks) this.event(`render error ${(0,Yb.Md)(Bb)}${null!==(ub=null===(hb=(0,Hb.c)(Bb,Ob))||void 0===hb?void 0:hb.words)&&void 0!==ub?ub:""} (detail ${Ob})`)
```

#### 18. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L149` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L149) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L149)

```diff
-         this.event(`render reload: ${qq?"webgpu":"gl"} ${gq}, losses ${Eq}${void 0===Yq?"":`: ${Yq}`}`)
+         this.event(`render reload: ${bb?"webgpu":"gl"} ${hb}, losses ${ub}${void 0===Bb?"":`: ${Bb}`}`)
```

#### 19. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L157-L159` → after: `L157-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L157-L159) · [Before (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L157-L159)

```diff
-         const lq = null !== Yq && 0 !== Yq.lastError ? `, last error ${(0,Aq.ne)(Yq.lastError)} (detail ${Yq.lastErrorDetail})` : "",
-           Oq = gq instanceof Error ? `${gq.name}: ${gq.message}` : null === gq || void 0 === gq ? "" : String(gq);
-         this.event(`core stopped at ${Eq}${lq}${Oq&&`: ${Oq}`}`)
+         const Ob = null !== Bb && 0 !== Bb.lastError ? `, last error ${(0,Yb.Md)(Bb.lastError)} (detail ${Bb.lastErrorDetail})` : "",
+           Gb = hb instanceof Error ? `${hb.name}: ${hb.message}` : null === hb || void 0 === hb ? "" : String(hb);
+         this.event(`core stopped at ${ub}${Ob}${Gb&&`: ${Gb}`}`)
```

#### 20. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L168)

```diff
-         null === Eq || Eq.isStopped ? this.sampled = null : (this.sampled = Eq, this.gpuTimed = Eq.headerWord(mq.C.GpuTimed), this.gpuUs = Eq.headerWord(mq.C.GpuFrameUs))
+         null === ub || ub.isStopped ? this.sampled = null : (this.sampled = ub, this.gpuTimed = ub.headerWord(Ub.B.GpuTimed), this.gpuUs = ub.headerWord(Ub.B.GpuFrameUs))
```

#### 21. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L179)

```diff
-         this.gridLogged || void 0 === Eq || (this.gridLogged = !0, Pq(`gl1 grid ${Eq}`))
+         this.gridLogged || void 0 === ub || (this.gridLogged = !0, Wb(`gl1 grid ${ub}`))
```

#### 22. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L186-L188` → after: `L186-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L186-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L186-L188) · [Before (L186-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L186-L188)

```diff
-           Yq = (0, Oq.t)(),
-           lq = void 0 === (null === gq || void 0 === gq ? void 0 : gq.parallelCompile) ? "" : `; parallel compile ${gq.parallelCompile}`;
-         Pq(`renderer gl ${Yq?`${Yq.vendor} / ${Yq.renderer}`:"(not read)"}; terrain fetch ${null!==(qq=null===gq||void 0===gq?void 0:gq.fetch)&&void 0!==qq?qq:"(not noted)"}${lq}`), Pq(`renderer caps ${null!==(Eq=null===gq||void 0===gq?void 0:gq.caps)&&void 0!==Eq?Eq:"(not noted) … [truncated]
+           Bb = (0, Gb.o)(),
+           Ob = void 0 === (null === hb || void 0 === hb ? void 0 : hb.parallelCompile) ? "" : `; parallel compile ${hb.parallelCompile}`;
+         Wb(`renderer gl ${Bb?`${Bb.vendor} / ${Bb.renderer}`:"(not read)"}; terrain fetch ${null!==(bb=null===hb||void 0===hb?void 0:hb.fetch)&&void 0!==bb?bb:"(not noted)"}${Ob}`), Wb(`renderer caps ${null!==(ub=null===hb||void 0===hb?void 0:hb.caps)&&void 0!==ub?ub:"(not noted) … [truncated]
```

#### 23. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L194` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L194) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L194)

```diff
-       return (0, Nq.c)(), yq ??= new Qq(qq), yq
+       return (0, Zb.e)(), db ??= new Cb(bb), db
```

#### 24. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L197)

```diff
-   4527: (qq, Eq, gq) => {
+   4468: (bb, ub, hb) => {
```

#### 25. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L200-L201` → after: `L200-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L200-L201) · [Before (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L200-L201)

```diff
-       const Eq = qq.adapter ? `${qq.adapter.vendor}/${qq.adapter.architecture}` : "none";
-       return `backend ${qq.backend}: reason ${qq.reason}, source ${qq.source}, adapter ${Eq}`
+       const ub = bb.adapter ? `${bb.adapter.vendor}/${bb.adapter.architecture}` : "none";
+       return `backend ${bb.backend}: reason ${bb.reason}, source ${bb.source}, adapter ${ub}`
```

#### 26. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L207` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L207) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L207)

```diff
-   40462: (qq, Eq, gq) => {
+   40171: (bb, ub, hb) => {
```

#### 27. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L209-L211` → after: `L209-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L209-L211) · [Before (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L209-L211)

```diff
-       e: () => mq,
-       f: () => Oq,
-       h: () => xq
+       b: () => Ub,
+       d: () => Gb,
+       f: () => Lb
```

#### 28. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L213-L218` → after: `L213-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L213-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L213-L218) · [Before (L213-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L213-L218)

```diff
-     var Yq = gq(40318),
-       lq = gq(40325);
- 
-     function Oq(qq) {
-       if (qq.queries.drawCensus() < Yq.zb.BYTES) return null;
-       const Eq = qq.memoryData(qq.scratch(), Yq.zb.BYTES, 4, "the draw census");
+     var Bb = hb(40035),
+       Ob = hb(40049);
+ 
+     function Gb(bb) {
+       if (bb.queries.drawCensus() < Bb.vb.BYTES) return null;
+       const ub = bb.memoryData(bb.scratch(), Bb.vb.BYTES, 4, "the draw census");
```

#### 29. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L220-L231` → after: `L220-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L220-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L220-L231) · [Before (L220-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L220-L231)

```diff
-         terrainOpaque: Yq.zb.terrainOpaque(Eq, 0),
-         terrainTransparent: Yq.zb.terrainTransparent(Eq, 0),
-         terrainPack: Yq.zb.terrainPack(Eq, 0),
-         earthSky: Yq.zb.earthSky(Eq, 0),
-         skyMeshes: Yq.zb.skyMeshes(Eq, 0),
-         regular: Yq.zb.regular(Eq, 0),
-         thin: Yq.zb.thin(Eq, 0),
-         line: Yq.zb.line(Eq, 0),
-         text: Yq.zb.text(Eq, 0),
-         particles: Yq.zb.particles(Eq, 0),
-         terrainParts: Yq.zb.terrainParts(Eq, 0),
-         terrainCompiling: Yq.zb.terrainCompiling(Eq, 0)
+         terrainOpaque: Bb.vb.terrainOpaque(ub, 0),
+         terrainTransparent: Bb.vb.terrainTransparent(ub, 0),
+         terrainPack: Bb.vb.terrainPack(ub, 0),
+         earthSky: Bb.vb.earthSky(ub, 0),
+         skyMeshes: Bb.vb.skyMeshes(ub, 0),
+         regular: Bb.vb.regular(ub, 0),
+         thin: Bb.vb.thin(ub, 0),
+         line: Bb.vb.line(ub, 0),
+         text: Bb.vb.text(ub, 0),
+         particles: Bb.vb.particles(ub, 0),
+         terrainParts: Bb.vb.terrainParts(ub, 0),
+         terrainCompiling: Bb.vb.terrainCompiling(ub, 0)
```

#### 30. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L251` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L251) · [Before (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L251)

```diff
-       const qq = (0, lq.e)();
+       const bb = (0, Ob.l)();
```

#### 31. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L269` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L269) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L269)

```diff
-           value: `${mq(Eq)}`
+           value: `${Ub(ub)}`
```

#### 32. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L272` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L272) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L272)

```diff
-           value: `${gq} opaque / ${Yq} transparent (${lq} shader pack)`
+           value: `${hb} opaque / ${Bb} transparent (${Ob} shader pack)`
```

#### 33. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L275)

```diff
-           value: `${cq} / ${uq}`
+           value: `${Sb} / ${ab}`
```

#### 34. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L278` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L278) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L278)

```diff
-           value: `${Wq} / ${Bq}`
+           value: `${wb} / ${Hb}`
```

#### 35. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderLite.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderLite.js#L281)

```diff
-           value: `${xq+Aq} / ${Nq}`
+           value: `${Lb+Yb} / ${Zb}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderProbe.js` (bbb6l5.0244a119 → halsg.2bd74967)

- **File**: `bundles/bloxd.io/chunks/js/renderProbe.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff)

#### 1. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderProbe.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderProbe.js#L4)

```diff
-   43076: (qq, Eq, gq) => {
+   42715: (bb, ub, hb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderProbe.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderProbe.js#L8-L11)

```diff
-     var Yq = gq(600),
-       lq = gq(4227),
-       Oq = gq(2733),
-       mq = gq(4340);
+     var Bb = hb(595),
+       Ob = hb(4149),
+       Gb = hb(2633),
+       Ub = hb(4270);
```

#### 3. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderProbe.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderProbe.js#L24)

```diff
-       return `${qq}; ${gq?`os ${gq.os}, gpu ${null!==(lq=gq.gpuFamily)&&void 0!==lq?lq:"unknown"} ${null!==(Oq=gq.gpuModel)&&void 0!==Oq?Oq:"unknown"}`:"device unknown"}, version ${Yq.e}; ${Eq}`
+       return `${bb}; ${hb?`os ${hb.os}, gpu ${null!==(Ob=hb.gpuFamily)&&void 0!==Ob?Ob:"unknown"} ${null!==(Gb=hb.gpuModel)&&void 0!==Gb?Gb:"unknown"}`:"device unknown"}, version ${Bb.b}; ${ub}`
```

#### 4. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderProbe.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderProbe.js#L29)

```diff
-       const gq = null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.backend) && void 0 !== Eq ? Eq : "none";
+       const hb = null !== (ub = null === bb || void 0 === bb ? void 0 : bb.backend) && void 0 !== ub ? ub : "none";
```

#### 5. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderProbe.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderProbe.js#L31)

```diff
-         const qq = (0, mq.c)();
+         const bb = (0, Ub.e)();
```

#### 6. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderProbe.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderProbe.js#L36)

```diff
-         return void(0, Oq.m)("renderprobe", `decode and particle probes not run: the renderer is ${gq}, and they read WebGL2's draws`)
+         return void(0, Gb.l)("renderprobe", `decode and particle probes not run: the renderer is ${hb}, and they read WebGL2's draws`)
```

#### 7. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/renderProbe.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/renderProbe.js#L38)

```diff
-       const Yq = (0, mq.c)();
+       const Bb = (0, Ub.e)();
```
