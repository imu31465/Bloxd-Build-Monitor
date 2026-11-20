# Changed — Bundle Modifications Report (Part 014 / 132)

- **Updated at**: `2026-11-21T04:21 JST`
- **Part**: `14 / 132` (**410** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 013](part-013.md) · [Part 015 →](part-015.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/113.js` (bbb6l5.0244a119 → halsg.2bd74967 · continued)

- **File**: `bundles/bloxd.io/chunks/js/113.js` (4568 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787)

#### 891. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7276-L7281` → after: `L6578-L6583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6578-L6583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6578-L6583) · [Before (L7276-L7281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7276-L7281)

```diff
-       const Eq = qq.Ma.Fk("sprintParticles", 50);
-       Eq.texture = (0, Nq.p)(qq.Ma.ZJ(), tq), Eq.blendMode = Yq.h.Standard, Eq.addColorGradient(0, (0, Wq.p)(213, 237, 255, 1), (0, Wq.p)(109, 170, 238, 1)), Eq.addColorGradient(.2, (0, Wq.p)(213, 237, 255, 1), (0, Wq.p)(109, 170, 238, 1)), Eq.addColorGradient(1, (0, Wq.p)(213, 2 … [truncated]
-       Eq.minLifeTime = .2, Eq.maxLifeTime = .4, Eq.minEmitPower = 30, Eq.maxEmitPower = 50, Eq.emitRate = 5, Eq.gravity = new aq.Na(0, -100, 0), Eq.minSize = .15, Eq.maxSize = .3, Eq.addVelocityGradient(0, .075, .15), Eq.addVelocityGradient(1, .075, .15), (0, Wq.A)(qq, Eq), Eq.cr … [truncated]
-       const gq = qq.Ma.Fk("fq", 50);
-       gq.texture = (0, Nq.p)(qq.Ma.ZJ(), vq), gq.blendMode = Yq.h.Standard, gq.addColorGradient(0, (0, Wq.p)(255, 167, 0, 1), (0, Wq.p)(255, 103, 0, 1)), gq.addColorGradient(.2, (0, Wq.p)(255, 167, 0, 1), (0, Wq.p)(255, 103, 0, 1)), gq.addColorGradient(1, (0, Wq.p)(255, 167, 0, 0 … [truncated]
-       gq.minLifeTime = .15, gq.maxLifeTime = .3, gq.minEmitPower = 30, gq.maxEmitPower = 50, gq.emitRate = 5, gq.gravity = new aq.Na(0, -100, 0), gq.minSize = .15, gq.maxSize = .3, gq.addVelocityGradient(0, .075, .15), gq.addVelocityGradient(1, .075, .15), (0, Wq.A)(qq, gq), gq.c … [truncated]
+       const ub = bb.xX.Hs("sprintParticles", 50);
+       ub.texture = (0, Zb.t)(bb.xX.ZN(), rb), ub.blendMode = Bb.f.Standard, ub.addColorGradient(0, (0, wb.l)(213, 237, 255, 1), (0, wb.l)(109, 170, 238, 1)), ub.addColorGradient(.2, (0, wb.l)(213, 237, 255, 1), (0, wb.l)(109, 170, 238, 1)), ub.addColorGradient(1, (0, wb.l)(213, 2 … [truncated]
+       ub.minLifeTime = .2, ub.maxLifeTime = .4, ub.minEmitPower = 30, ub.maxEmitPower = 50, ub.emitRate = 5, ub.gravity = new Xb.YX(0, -100, 0), ub.minSize = .15, ub.maxSize = .3, ub.addVelocityGradient(0, .075, .15), ub.addVelocityGradient(1, .075, .15), (0, wb.t)(bb, ub), ub.cr … [truncated]
+       const hb = bb.xX.Hs("Jb", 50);
+       hb.texture = (0, Zb.t)(bb.xX.ZN(), nb), hb.blendMode = Bb.f.Standard, hb.addColorGradient(0, (0, wb.l)(255, 167, 0, 1), (0, wb.l)(255, 103, 0, 1)), hb.addColorGradient(.2, (0, wb.l)(255, 167, 0, 1), (0, wb.l)(255, 103, 0, 1)), hb.addColorGradient(1, (0, wb.l)(255, 167, 0, 0 … [truncated]
+       hb.minLifeTime = .15, hb.maxLifeTime = .3, hb.minEmitPower = 30, hb.maxEmitPower = 50, hb.emitRate = 5, hb.gravity = new Xb.YX(0, -100, 0), hb.minSize = .15, hb.maxSize = .3, hb.addVelocityGradient(0, .075, .15), hb.addVelocityGradient(1, .075, .15), (0, wb.t)(bb, hb), hb.c … [truncated]
```

#### 892. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7303` → after: `L6605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6605) · [Before (L7303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7303)

```diff
-         blendMode: Yq.h.Standard
+         blendMode: Bb.f.Standard
```

#### 893. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7340` → after: `L6642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6642) · [Before (L7340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7340)

```diff
-         blendMode: Yq.h.Standard
+         blendMode: Bb.f.Standard
```

#### 894. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7377` → after: `L6679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6679) · [Before (L7377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7377)

```diff
-         blendMode: Yq.h.Standard
+         blendMode: Bb.f.Standard
```

#### 895. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7382` → after: `L6684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6684) · [Before (L7382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7382)

```diff
-         this.pSystem = qq, this.maxLifetimeSecs = Eq, this.stopTimeout = null, this.started = !1, this.stopAt = 0, this.eN = !1, qq.manualEmitCount = 0
+         this.pSystem = bb, this.maxLifetimeSecs = ub, this.stopTimeout = null, this.started = !1, this.stopAt = 0, this.FZ = !1, bb.manualEmitCount = 0
```

#### 896. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7385` → after: `L6687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6687) · [Before (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7385)

```diff
-         this.eN || (this.pSystem.manualEmitCount = qq, this.started || (this.pSystem.start(), this.started = !0), this.stopAt = performance.now() + 1e3 * this.maxLifetimeSecs, null === this.stopTimeout && this.scheduleStop(1e3 * this.maxLifetimeSecs))
+         this.FZ || (this.pSystem.manualEmitCount = bb, this.started || (this.pSystem.start(), this.started = !0), this.stopAt = performance.now() + 1e3 * this.maxLifetimeSecs, null === this.stopTimeout && this.scheduleStop(1e3 * this.maxLifetimeSecs))
```

#### 897. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7388` → after: `L6690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6690) · [Before (L7388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7388)

```diff
-         this.eN = !0, null !== this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), this.pSystem.dispose()
+         this.FZ = !0, null !== this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), this.pSystem.dispose()
```

#### 898. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7400` → after: `L6702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6702) · [Before (L7400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7400)

```diff
-       (0, Wq.A)(qq, Eq.pSystem), (0, Wq.w)(Eq.pSystem, gq), Eq.emitAmount(Yq)
+       (0, wb.t)(bb, ub.pSystem), (0, wb.s)(ub.pSystem, hb), ub.emitAmount(Bb)
```

#### 899. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7406` → after: `L6708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6708) · [Before (L7406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7406)

```diff
-       Sq(qq, Eq === Tq ? mq.h.BounceBrownMushroom : mq.h.BounceRedMushroom, gq)
+       Nb(bb, ub === Jb ? Ub.i.BounceBrownMushroom : Ub.i.BounceRedMushroom, hb)
```

#### 900. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7410` → after: `L6712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6712) · [Before (L7410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7410)

```diff
-       const Yq = Eq === mq.h.Bunnyhop || Eq === mq.h.JumpPad;
+       const Bb = ub === Ub.i.Bunnyhop || ub === Ub.i.JumpPad;
```

#### 901. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7412-L7413` → after: `L6714-L6715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6714-L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6714-L6715) · [Before (L7412-L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7412-L7413)

```diff
-       Eq === mq.h.Bunnyhop ? (lq = [213, 237, 255], xq = [109, 170, 238]) : Eq === mq.h.BounceRedMushroom ? (lq = [196, 63, 63], xq = [148, 53, 53]) : Eq === mq.h.BounceBrownMushroom ? (lq = [186, 132, 91], xq = [153, 107, 72]) : Eq === mq.h.BunnyhopBounce ? (lq = [217, 170, 2],  … [truncated]
-       const Aq = qq.Iy.Py(qq.oR);
+       ub === Ub.i.Bunnyhop ? (Ob = [213, 237, 255], Lb = [109, 170, 238]) : ub === Ub.i.BounceRedMushroom ? (Ob = [196, 63, 63], Lb = [148, 53, 53]) : ub === Ub.i.BounceBrownMushroom ? (Ob = [186, 132, 91], Lb = [153, 107, 72]) : ub === Ub.i.BunnyhopBounce ? (Ob = [217, 170, 2],  … [truncated]
+       const Yb = bb.pW.iK(bb.bM);
```

#### 902. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7416` → after: `L6718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6718) · [Before (L7416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7416)

```diff
-         const qq = 1 === gq[1] ? Oq.c.UH - .4 : 0;
+         const bb = 1 === hb[1] ? Gb.e.Tl - .4 : 0;
```

#### 903. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7424` → after: `L6726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6726) · [Before (L7424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7424)

```diff
-       const Bq = Yq ? bq : iq;
+       const Hb = Bb ? zb : gb;
```

#### 904. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7445` → after: `L6747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6747) · [Before (L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7445)

```diff
-         this.wB = qq, this.cfg = gq, this.pool = [], this.currentIndex = 0;
+         this.PH = bb, this.cfg = hb, this.pool = [], this.currentIndex = 0;
```

#### 905. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7456` → after: `L6758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6758) · [Before (L7456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7456)

```diff
-         const aq = this.wB.camera.Py();
+         const Xb = this.PH.camera.iK();
```

#### 906. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7458` → after: `L6760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6760) · [Before (L7458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7458)

```diff
-         const Vq = null !== (gq = Eq.hideDist) && void 0 !== gq ? gq : this.cfg.hideDist;
+         const pb = null !== (hb = ub.hideDist) && void 0 !== hb ? hb : this.cfg.hideDist;
```

#### 907. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7463` → after: `L6765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6765) · [Before (L7463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7463)

```diff
-         (0, Wq.t)(Pq, Hq, oq), Pq.minEmitPower = null !== (Yq = Eq.minEmitPower) && void 0 !== Yq ? Yq : Pq.minEmitPower, Pq.maxEmitPower = null !== (lq = Eq.maxEmitPower) && void 0 !== lq ? lq : Pq.maxEmitPower, Pq.minSize = null !== (Oq = Eq.minSize) && void 0 !== Oq ? Oq : Pq. … [truncated]
+         (0, wb.r)(Wb, lb, Kb), Wb.minEmitPower = null !== (Bb = ub.minEmitPower) && void 0 !== Bb ? Bb : Wb.minEmitPower, Wb.maxEmitPower = null !== (Ob = ub.maxEmitPower) && void 0 !== Ob ? Ob : Wb.maxEmitPower, Wb.minSize = null !== (Gb = ub.minSize) && void 0 !== Gb ? Gb : Wb. … [truncated]
```

#### 908. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7467` → after: `L6769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6769) · [Before (L7467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7467)

```diff
-           gq = this.wB.Ma.Fk(`particlePool_${qq}`, 50),
+           hb = this.PH.xX.Hs(`particlePool_${bb}`, 50),
```

#### 909. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7469` → after: `L6771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6771) · [Before (L7469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7469)

```diff
-         gq.texture = (0, Nq.p)(this.wB.Ma.ZJ(), Yq), gq.blendMode = Eq.blendMode, gq.minLifeTime = Eq.minLifeTime, gq.maxLifeTime = Eq.maxLifeTime, gq.minEmitPower = Eq.minEmitPower, gq.maxEmitPower = Eq.maxEmitPower, gq.minSize = Eq.minSize, gq.maxSize = Eq.maxSize, gq.gravity = … [truncated]
+         hb.texture = (0, Zb.t)(this.PH.xX.ZN(), Bb), hb.blendMode = ub.blendMode, hb.minLifeTime = ub.minLifeTime, hb.maxLifeTime = ub.maxLifeTime, hb.minEmitPower = ub.minEmitPower, hb.maxEmitPower = ub.maxEmitPower, hb.minSize = ub.minSize, hb.maxSize = ub.maxSize, hb.gravity = … [truncated]
```

#### 910. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7471` → after: `L6773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6773) · [Before (L7471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7471)

```diff
-         this.applyColorGradients(gq, Eq.colorGradients), (0, Wq.A)(this.wB, gq), gq.createBoxEmitter(new aq.Na(Math.min(Eq.dir1[0], Eq.dir2[0]), Math.min(Eq.dir1[1], Eq.dir2[1]), Math.min(Eq.dir1[2], Eq.dir2[2])), new aq.Na(Math.max(Eq.dir1[0], Eq.dir2[0]), Math.max(Eq.dir1[1], E … [truncated]
+         this.applyColorGradients(hb, ub.colorGradients), (0, wb.t)(this.PH, hb), hb.createBoxEmitter(new Xb.YX(Math.min(ub.dir1[0], ub.dir2[0]), Math.min(ub.dir1[1], ub.dir2[1]), Math.min(ub.dir1[2], ub.dir2[2])), new Xb.YX(Math.max(ub.dir1[0], ub.dir2[0]), Math.max(ub.dir1[1], u … [truncated]
```

#### 911. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7481` → after: `L6783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6783) · [Before (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7481)

```diff
-             const Eq = (0, Wq.p)(Oq.color[0], Oq.color[1], Oq.color[2], 1);
+             const ub = (0, wb.l)(Gb.color[0], Gb.color[1], Gb.color[2], 1);
```

#### 912. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7485-L7486` → after: `L6787-L6788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6787-L6788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6787-L6788) · [Before (L7485-L7486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7485-L7486)

```diff
-             const Eq = (0, Wq.p)(Oq.minColor[0], Oq.minColor[1], Oq.minColor[2], null !== (Yq = Oq.minColor[3]) && void 0 !== Yq ? Yq : 1),
-               gq = (0, Wq.p)(Oq.maxColor[0], Oq.maxColor[1], Oq.maxColor[2], null !== (lq = Oq.maxColor[3]) && void 0 !== lq ? lq : 1);
+             const ub = (0, wb.l)(Gb.minColor[0], Gb.minColor[1], Gb.minColor[2], null !== (Bb = Gb.minColor[3]) && void 0 !== Bb ? Bb : 1),
+               hb = (0, wb.l)(Gb.maxColor[0], Gb.maxColor[1], Gb.maxColor[2], null !== (Ob = Gb.maxColor[3]) && void 0 !== Ob ? Ob : 1);
```

#### 913. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7493` → after: `L6795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6795) · [Before (L7493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7493)

```diff
-       if (!(0, Vq.H)(Eq.hideDist)) {
+       if (!(0, pb.J)(ub.hideDist)) {
```

#### 914. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7495-L7496` → after: `L6797-L6798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6797-L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6797-L6798) · [Before (L7495-L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7495-L7496)

```diff
-         for (let qq = 0; qq < 3; qq++) gq.push((0, xq.w)(Eq.pos1[qq], Eq.pos2[qq], .5));
-         const Yq = qq.Iy.Py(qq.oR),
+         for (let bb = 0; bb < 3; bb++) hb.push((0, Lb.t)(ub.pos1[bb], ub.pos2[bb], .5));
+         const Bb = bb.pW.iK(bb.bM),
```

#### 915. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7503` → after: `L6805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6805) · [Before (L7503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7503)

```diff
-   37785: (qq, Eq, gq) => {
+   37410: (bb, ub, hb) => {
```

#### 916. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7505` → after: `L6807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6807) · [Before (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7505)

```diff
-       c: () => jq
+       b: () => Ab
```

#### 917. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7507-L7519` → after: `L6809-L6821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6809-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6809-L6821) · [Before (L7507-L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7507-L7519)

```diff
-     var Yq = gq(37233),
-       lq = gq(37801),
-       Oq = gq(37823),
-       mq = gq(37421),
-       xq = gq(37815),
-       Aq = gq(37828),
-       cq = gq(3056),
-       uq = gq(37794),
-       Bq = gq(37791),
-       Wq = gq(37206),
-       Nq = gq(37305),
-       aq = gq(37313),
-       Vq = gq(2668);
+     var Bb = hb(36836),
+       Ob = hb(37423),
+       Gb = hb(37449),
+       Ub = hb(37050),
+       Lb = hb(37436),
+       Yb = hb(37452),
+       Sb = hb(2941),
+       ab = hb(37417),
+       Hb = hb(37413),
+       wb = hb(36800),
+       Zb = hb(36911),
+       Xb = hb(36928),
+       pb = hb(2560);
```

#### 918. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7552` → after: `L6854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6854) · [Before (L7552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7552)

```diff
-           alpha: uq.n
+           alpha: ab.g
```

#### 919. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7570-L7571` → after: `L6872-L6873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6872-L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6872-L6873) · [Before (L7570-L7571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7570-L7571)

```diff
-           name: `${yq}${Bq}`,
-           PV: Eq,
+           name: `${db}${Hb}`,
+           Xp: ub,
```

#### 920. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7574-L7575` → after: `L6876-L6877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6876-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6876-L6877) · [Before (L7574-L7575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7574-L7575)

```diff
-         dq && (0, Yq.C)(tq);
-         const vq = cq.c.getBlockAtlasArr().map((qq => (0, lq.i)(qq, Eq, gq)));
+         ob && (0, Bb.G)(rb);
+         const nb = Sb.b.getBlockAtlasArr().map((bb => (0, Ob.f)(bb, ub, hb)));
```

#### 921. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7578` → after: `L6880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6880) · [Before (L7578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7578)

```diff
-               transparencyMode: Yq.q.alphaTest,
+               transparencyMode: Bb.p.alphaTest,
```

#### 922. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7592` → after: `L6894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6894) · [Before (L7592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7592)

```diff
-               transparencyMode: Yq.q.alphaBlend
+               transparencyMode: Bb.p.alphaBlend
```

#### 923. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7594` → after: `L6896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6896) · [Before (L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7594)

```diff
-           }), jq && (0, mq.d)(tq, (0, Vq.e)().Ma), Hq && (0, Wq.d)(tq, !0), vq.length > 0) {
+           }), Ab && (0, Ub.e)(rb, (0, pb.g)().xX), lb && (0, wb.b)(rb, !0), nb.length > 0) {
```

#### 924. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7596-L7598` → after: `L6898-L6900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6898-L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6898-L6900) · [Before (L7596-L7598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7596-L7598)

```diff
-             urls: cq.c.getBlockAtlasArr(),
-             pixels: cq.c.getBlockAtlasPixels(),
-             layerWidth: cq.c.getBlockAtlasWidth()
+             urls: Sb.b.getBlockAtlasArr(),
+             pixels: Sb.b.getBlockAtlasPixels(),
+             layerWidth: Sb.b.getBlockAtlasWidth()
```

#### 925. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7600` → after: `L6902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6902) · [Before (L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7600)

```diff
-           (0, Yq.s)(tq, xq.j, (0, Oq.f)(qq, vq, void 0, this.ka(), !1))
+           (0, Bb.q)(rb, Lb.h, (0, Gb.e)(bb, nb, void 0, this.eX(), !1))
```

#### 926. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7602` → after: `L6904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6904) · [Before (L7602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7602)

```diff
-         return (0, aq.r)(rq), qq[yq] = rq, rq
+         return (0, Xb.n)(jb), bb[db] = jb, jb
```

#### 927. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7614` → after: `L6916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6916) · [Before (L7614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7614)

```diff
-   38054: (qq, Eq, gq) => {
+   37683: (bb, ub, hb) => {
```

#### 928. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7617` → after: `L6919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6919) · [Before (L7617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7617)

```diff
-       f: () => Uq
+       d: () => Eb
```

#### 929. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7619` → after: `L6921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6921) · [Before (L7619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7619)

```diff
-     var Yq = gq(37390);
+     var Bb = hb(37001);
```

#### 930. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7640` → after: `L6942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6942) · [Before (L7640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7640)

```diff
-     var mq = gq(37176);
+     var Ub = hb(36764);
```

#### 931. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7668-L7669` → after: `L6970-L6971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6970-L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6970-L6971) · [Before (L7668-L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7668-L7669)

```diff
-             Yq = Number.isNaN(Yq) ? qq : Yq, Eq += this.childWeights[lq], gq += this.childWeights[lq] * qq
-           } return Eq > 0 ? gq / Eq : Number.isNaN(Yq) ? 0 : Yq
+             Bb = Number.isNaN(Bb) ? bb : Bb, ub += this.childWeights[Ob], hb += this.childWeights[Ob] * bb
+           } return ub > 0 ? hb / ub : Number.isNaN(Bb) ? 0 : Bb
```

#### 932. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7681` → after: `L6983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6983) · [Before (L7681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7681)

```diff
-         Yq = gq > 0 ? Yq / gq : 1 / lq;
+         Bb = hb > 0 ? Bb / hb : 1 / Ob;
```

#### 933. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7696` → after: `L6998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L6998) · [Before (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7696)

```diff
-           const qq = this.gaitPhase + this.restGap() * (0, mq.p)(8 * gq, Eq);
+           const bb = this.gaitPhase + this.restGap() * (0, Ub.s)(8 * hb, ub);
```

#### 934. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7713` → after: `L7015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7015) · [Before (L7713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7713)

```diff
-         mq !== (null !== (Yq = null === (lq = this.current) || void 0 === lq ? void 0 : lq.state) && void 0 !== Yq ? Yq : null) && (this.current = null === mq ? null : this.enter(mq, Oq)), this.updateWeights(Eq, gq)
+         Ub !== (null !== (Bb = null === (Ob = this.current) || void 0 === Ob ? void 0 : Ob.state) && void 0 !== Bb ? Bb : null) && (this.current = null === Ub ? null : this.enter(Ub, Gb)), this.updateWeights(ub, hb)
```

#### 935. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7728` → after: `L7030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7030) · [Before (L7728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7728)

```diff
-           const qq = this.instances.reduce(((qq, Eq) => Eq !== Yq && (qq === Yq || Eq.weight < qq.weight) ? Eq : qq));
+           const bb = this.instances.reduce(((bb, ub) => ub !== Bb && (bb === Bb || ub.weight < bb.weight) ? ub : bb));
```

#### 936. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7743` → after: `L7045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7045) · [Before (L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7743)

```diff
-         for (const Bq of this.instances) Bq.weight = Bq === Yq ? mq : Bq.weight * cq, (Bq === Yq || Bq.weight > xq) && (this.instances[uq++] = Bq);
+         for (const Hb of this.instances) Hb.weight = Hb === Bb ? Ub : Hb.weight * Sb, (Hb === Bb || Hb.weight > Lb) && (this.instances[ab++] = Hb);
```

#### 937. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7750` → after: `L7052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7052) · [Before (L7750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7750)

```diff
-         this.inputs = new Float64Array(Yq.k.Count), this.states = [], this.sleptSeconds = 0
+         this.inputs = new Float64Array(Bb.j.Count), this.states = [], this.sleptSeconds = 0
```

#### 938. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7753` → after: `L7055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7055) · [Before (L7753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7753)

```diff
-         this.inputs.set(qq.subarray(0, Yq.k.Count)), this.states.length = 0, this.states.push(...Eq), this.sleptSeconds = 0
+         this.inputs.set(bb.subarray(0, Bb.j.Count)), this.states.length = 0, this.states.push(...ub), this.sleptSeconds = 0
```

#### 939. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7796-L7797` → after: `L7098-L7099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7098-L7099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7098-L7099) · [Before (L7796-L7797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7796-L7797)

```diff
-     var dq = gq(37348),
-       jq = gq(37392);
+     var ob = hb(36955),
+       Ab = hb(37005);
```

#### 940. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7815` → after: `L7117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7117) · [Before (L7815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7815)

```diff
-         return null !== (Eq = this.indexByLowerName.get(qq.toLowerCase())) && void 0 !== Eq ? Eq : -1
+         return null !== (ub = this.indexByLowerName.get(bb.toLowerCase())) && void 0 !== ub ? ub : -1
```

#### 941. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7818-L7819` → after: `L7120-L7121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7120-L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7120-L7121) · [Before (L7818-L7819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7818-L7819)

```diff
-     var Pq = gq(37357),
-       Qq = gq(37367);
+     var Wb = hb(36969),
+       Cb = hb(36975);
```

#### 942. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7824` → after: `L7126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7126) · [Before (L7824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7824)

```diff
-         this.name = qq, this.clip = Eq, this.pool = gq, this.mode = lq, this.mask = Oq, this.fadeInSeconds = mq, this.fadeOutSeconds = xq, this.speed = Aq, this.elapsed = void 0, this.weight = 0, this.stopping = !1, this.heldInputs = new Float64Array(Yq.e.length), this.elapsed =  … [truncated]
+         this.name = bb, this.clip = ub, this.pool = hb, this.mode = Ob, this.mask = Gb, this.fadeInSeconds = Ub, this.fadeOutSeconds = Lb, this.speed = Yb, this.elapsed = void 0, this.weight = 0, this.stopping = !1, this.heldInputs = new Float64Array(Bb.c.length), this.elapsed =  … [truncated]
```

#### 943. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7832` → after: `L7134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7134) · [Before (L7832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7832)

```diff
-         return qq === Qq.j.Once && (gq > 0 ? this.elapsed >= Yq : this.elapsed > Yq)
+         return bb === Cb.i.Once && (hb > 0 ? this.elapsed >= Bb : this.elapsed > Bb)
```

#### 944. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7863` → after: `L7165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7165) · [Before (L7863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7863)

```diff
-           gq.elapsed < Eq.startDelaySeconds || (gq.weight = gq.fadeInSeconds > 0 ? Math.min(1, gq.weight + qq / gq.fadeInSeconds) : 1, Eq.loop === Qq.j.Once && gq.weight >= 1 && gq.elapsed >= Eq.startDelaySeconds + Eq.lengthSeconds - gq.fadeOutSeconds * gq.speed && (gq.stopping = … [truncated]
+           hb.elapsed < ub.startDelaySeconds || (hb.weight = hb.fadeInSeconds > 0 ? Math.min(1, hb.weight + bb / hb.fadeInSeconds) : 1, ub.loop === Cb.i.Once && hb.weight >= 1 && hb.elapsed >= ub.startDelaySeconds + ub.lengthSeconds - hb.fadeOutSeconds * hb.speed && (hb.stopping = … [truncated]
```

#### 945. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7875-L7876` → after: `L7177-L7178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7177-L7178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7177-L7178) · [Before (L7875-L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7875-L7876)

```diff
-     var rq = gq(37380),
-       vq = gq(37396);
+     var jb = hb(36988),
+       nb = hb(37010);
```

#### 946. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7917` → after: `L7219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7219) · [Before (L7917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7917)

```diff
-             const gq = Yq && mq > 1 ? Eq / mq : Eq;
+             const hb = Bb && Ub > 1 ? ub / Ub : ub;
```

#### 947. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7935` → after: `L7237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7237) · [Before (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7935)

```diff
-       return Number.isNaN(qq) ? gq : Math.min(Eq, Math.max(-Eq, qq))
+       return Number.isNaN(bb) ? hb : Math.min(ub, Math.max(-ub, bb))
```

#### 948. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7937` → after: `L7239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7239) · [Before (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7937)

```diff
-     var fq = gq(37375);
+     var vb = hb(36981);
```

#### 949. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7944` → after: `L7246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7246) · [Before (L7944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7944)

```diff
-         this.pose = new bq(gq), this.accumulator = new iq(gq), this.inputs = new Float64Array(Yq.k.Count + Eq.filters.length), this.layers = Eq.layers.map(((Eq, gq) => new cq(Eq, qq.layerMasks[gq]))), this.runtimes = Eq.pools.map((qq => ({
+         this.pose = new zb(hb), this.accumulator = new gb(hb), this.inputs = new Float64Array(Bb.j.Count + ub.filters.length), this.layers = ub.layers.map(((ub, hb) => new Sb(ub, bb.layerMasks[hb]))), this.runtimes = ub.pools.map((bb => ({
```

#### 950. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7949` → after: `L7251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7251) · [Before (L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7949)

```diff
-           return null !== (gq = qq.variables.slots.get(Eq.name)) && void 0 !== gq ? gq : -1
+           return null !== (hb = bb.variables.slots.get(ub.name)) && void 0 !== hb ? hb : -1
```

#### 951. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7953` → after: `L7255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7255) · [Before (L7953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7953)

```diff
-             const Oq = Yq.e.indexOf(Eq.variables[lq].input);
+             const Gb = Bb.c.indexOf(ub.variables[Ob].input);
```

#### 952. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7965` → after: `L7267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7267) · [Before (L7965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7965)

```diff
-         this.inputs[qq] = Number.isFinite(Eq) ? Eq : 0
+         this.inputs[bb] = Number.isFinite(ub) ? ub : 0
```

#### 953. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7983` → after: `L7285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7285) · [Before (L7983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7983)

```diff
-         for (let Eq = 0; Eq < Yq.e.length; Eq++) qq.heldInputs[Eq] = this.inputs[Yq.e[Eq]];
+         for (let ub = 0; ub < Bb.c.length; ub++) bb.heldInputs[ub] = this.inputs[Bb.c[ub]];
```

#### 954. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7992` → after: `L7294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7294) · [Before (L7992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7992)

```diff
-           xq = (0, rq.h)(this.rigged.binding.pools, qq);
+           Lb = (0, jb.f)(this.rigged.binding.pools, bb);
```

#### 955. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7997` → after: `L7299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7299) · [Before (L7997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L7997)

```diff
-         } = xq, uq = pq(gq, 0, 1), Bq = (uq > 0 || 0 === mq ? Aq.startDelaySeconds + uq * Aq.lengthSeconds : 0) + pq(lq, 0, Sq) * mq, Wq = new yq(Mq + Aq.id, Aq, cq, Pq.h.Add, null, Oq, Oq, mq, Bq);
+         } = Lb, ab = sb(hb, 0, 1), Hb = (ab > 0 || 0 === Ub ? Yb.startDelaySeconds + ab * Yb.lengthSeconds : 0) + sb(Ob, 0, Nb) * Ub, wb = new db(tb + Yb.id, Yb, Sb, Wb.k.Add, null, Gb, Gb, Ub, Hb);
```

#### 956. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8001` → after: `L7303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7303) · [Before (L8001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8001)

```diff
-         const Eq = (0, rq.h)(this.rigged.binding.pools, qq);
+         const ub = (0, jb.f)(this.rigged.binding.pools, bb);
```

#### 957. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8005` → after: `L7307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7307) · [Before (L8005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8005)

```diff
-         const Eq = (0, rq.h)(this.rigged.binding.pools, qq);
+         const ub = (0, jb.f)(this.rigged.binding.pools, bb);
```

#### 958. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8016` → after: `L7318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7318) · [Before (L8016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8016)

```diff
-         const gq = Math.max(0, Number.isFinite(qq) ? qq : 0);
+         const hb = Math.max(0, Number.isFinite(bb) ? bb : 0);
```

#### 959. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8023` → after: `L7325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7325) · [Before (L8023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8023)

```diff
-         const Oq = this.travelBacklog * (0, mq.p)(20, gq);
+         const Gb = this.travelBacklog * (0, Ub.s)(20, hb);
```

#### 960. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8031` → after: `L7333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7333) · [Before (L8031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8031)

```diff
-               for (let gq = 0; gq < qq.length; gq++) Eq[Yq.k.Count + gq] = (0, Yq.o)(qq[gq], Eq)
+               for (let hb = 0; hb < bb.length; hb++) ub[Bb.j.Count + hb] = (0, Bb.n)(bb[hb], ub)
```

#### 961. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8049-L8050` → after: `L7351-L7352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7351-L7352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7351-L7352) · [Before (L8049-L8050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8049-L8050)

```diff
-               const lq = (0, Yq.o)(qq[gq], Eq);
-               if (Math.abs(Eq[Yq.k.Count + gq] - lq) > 1e-6 * Math.max(1, Math.abs(lq))) return !1
+               const Ob = (0, Bb.n)(bb[hb], ub);
+               if (Math.abs(ub[Bb.j.Count + hb] - Ob) > 1e-6 * Math.max(1, Math.abs(Ob))) return !1
```

#### 962. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8063-L8064` → after: `L7365-L7366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7365-L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7365-L7366) · [Before (L8063-L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8063-L8064)

```diff
-             xq = (0, Yq.o)(Oq, this.inputs),
-             Aq = Yq.k.Count + lq,
+             Lb = (0, Bb.n)(Gb, this.inputs),
+             Yb = Bb.j.Count + Ob,
```

#### 963. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8067` → after: `L7369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7369) · [Before (L8067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8067)

```diff
-           this.inputs[Aq] = Eq ? xq : cq + (xq - cq) * (0, mq.p)(uq, qq)
+           this.inputs[Yb] = ub ? Lb : Sb + (Lb - Sb) * (0, Ub.s)(ab, bb)
```

#### 964. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8075` → after: `L7377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7377) · [Before (L8075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8075)

```diff
-           (0, Yq.s)(lq, this.inputs, this.ageSeconds, qq, this.travelled);
+           (0, Bb.p)(Ob, this.inputs, this.ageSeconds, bb, this.travelled);
```

#### 965. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8104` → after: `L7406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7406) · [Before (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8104)

```diff
-         Aq && this.accumulator.applyTo(this.pose, qq.weight, Oq.mode === Pq.h.Override), this.accumulator.clear()
+         Yb && this.accumulator.applyTo(this.pose, bb.weight, Gb.mode === Wb.k.Override), this.accumulator.clear()
```

#### 966. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8117` → after: `L7419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7419) · [Before (L8117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8117)

```diff
-           Yq.strideBlocks > 0 ? Nq = qq.gaitPhase * Oq.lengthSeconds : (qq.elapsed[cq] = Wq ? zq(Oq, qq.elapsed[cq], gq * Aq, uq) : qq.elapsed[cq] + gq * Aq, Nq = (0, vq.i)(Oq, qq.elapsed[cq])), qq.childTimes[cq] = Nq, Wq && !Number.isNaN(Nq) && this.sampleClip(Oq, uq, Nq, Bq, Eq … [truncated]
+           Bb.strideBlocks > 0 ? Zb = bb.gaitPhase * Gb.lengthSeconds : (bb.elapsed[Sb] = wb ? eb(Gb, bb.elapsed[Sb], hb * Yb, ab) : bb.elapsed[Sb] + hb * Yb, Zb = (0, nb.c)(Gb, bb.elapsed[Sb])), bb.childTimes[Sb] = Zb, wb && !Number.isNaN(Zb) && this.sampleClip(Gb, ab, Zb, Hb, ub … [truncated]
```

#### 967. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8129` → after: `L7431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7431) · [Before (L8129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8129)

```diff
-               lq = (0, vq.i)(Yq.clip, Yq.elapsed);
+               Ob = (0, nb.c)(Bb.clip, Bb.elapsed);
```

#### 968. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8137` → after: `L7439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7439) · [Before (L8137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8137)

```diff
-           this.accumulator.applyTo(this.pose, 1, qq.mode === Pq.h.Override, !0), this.accumulator.clear()
+           this.accumulator.applyTo(this.pose, 1, bb.mode === Wb.k.Override, !0), this.accumulator.clear()
```

#### 969. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8142` → after: `L7444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7444) · [Before (L8142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8142)

```diff
-         const Oq = Yq * Math.max(0, (0, vq.e)(qq.blendWeight, Eq));
+         const Gb = Bb * Math.max(0, (0, nb.b)(bb.blendWeight, ub));
```

#### 970. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8145` → after: `L7447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7447) · [Before (L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8145)

```diff
-           Aq = qq.loop === Qq.j.Loop,
+           Yb = bb.loop === Cb.i.Loop,
```

#### 971. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8154` → after: `L7456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7456) · [Before (L8154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8154)

```diff
-             (0, vq.l)(Bq.rotation, gq, Aq, Eq, uq);
+             (0, nb.g)(Hb.rotation, hb, Yb, ub, ab);
```

#### 972. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8158` → after: `L7460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7460) · [Before (L8158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8158)

```diff
-             (0, vq.l)(Bq.position, gq, Aq, Eq, uq);
+             (0, nb.g)(Hb.position, hb, Yb, ub, ab);
```

#### 973. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8162` → after: `L7464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7464) · [Before (L8162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8162)

```diff
-             (0, vq.l)(Bq.scale, gq, Aq, Eq, uq);
+             (0, nb.g)(Hb.scale, hb, Yb, ub, ab);
```

#### 974. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8173` → after: `L7475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7475) · [Before (L8173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8173)

```diff
-         return gq < 0 ? qq.constant : gq < Yq.k.Count ? Eq[gq] : this.inputs[gq]
+         return hb < 0 ? bb.constant : hb < Bb.j.Count ? ub[hb] : this.inputs[hb]
```

#### 975. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8187` → after: `L7489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7489) · [Before (L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8187)

```diff
-           inputs: [...[...Yq.h].map((qq => {
+           inputs: [...[...Bb.f].map((bb => {
```

#### 976. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8196-L8197` → after: `L7498-L7499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7498-L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7498-L7499) · [Before (L8196-L8197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8196-L8197)

```diff
-             raw: (0, Yq.o)(qq, this.inputs),
-             value: this.inputs[Yq.k.Count + Eq]
+             raw: (0, Bb.n)(bb, this.inputs),
+             value: this.inputs[Bb.j.Count + ub]
```

#### 977. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8236` → after: `L7538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7538) · [Before (L8236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8236)

```diff
-       return Number.isNaN(qq) ? Yq : Math.min(gq, Math.max(Eq, qq))
+       return Number.isNaN(bb) ? Bb : Math.min(hb, Math.max(ub, bb))
```

#### 978. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8238-L8239` → after: `L7540-L7541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7540-L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7540-L7541) · [Before (L8238-L8239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8238-L8239)

```diff
-     var Gq = gq(37350),
-       Lq = gq(3155);
+     var Mb = hb(36963),
+       mb = hb(3051);
```

#### 979. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8245` → after: `L7547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7547) · [Before (L8245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8245)

```diff
-         (gq.severity === Qq.c.Error ? console.error : console.warn)(`Animation for ${qq}: ${gq.source}: ${gq.message}`)
+         (hb.severity === Cb.d.Error ? console.error : console.warn)(`Animation for ${bb}: ${hb.source}: ${hb.message}`)
```

#### 980. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8250` → after: `L7552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7552) · [Before (L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8250)

```diff
-           this.bindings = new Map, this.pack = null, this.drawnWithPlayerRig = () => !1, this.rigged = new WeakMap, this.Gs = 0
+           this.bindings = new Map, this.pack = null, this.drawnWithPlayerRig = () => !1, this.rigged = new WeakMap, this.zq = 0
```

#### 981. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8253` → after: `L7555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7555) · [Before (L8253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8253)

```diff
-           return this.Gs
+           return this.zq
```

#### 982. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8256` → after: `L7558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7558) · [Before (L8256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8256)

```diff
-           this.Gs++
+           this.zq++
```

#### 983. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8279` → after: `L7581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7581) · [Before (L8279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8279)

```diff
-           return [gq, Yq].some((gq => null !== gq && new jq.d(gq, new oq(qq, Eq)).animatesAnyBone))
+           return [hb, Bb].some((hb => null !== hb && new Ab.b(hb, new Kb(bb, ub)).animatesAnyBone))
```

#### 984. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8289` → after: `L7591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7591) · [Before (L8289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8289)

```diff
-             for (const qq of null === lq ? [] : (0, jq.i)(lq)) Yq.add(qq);
+             for (const bb of null === Ob ? [] : (0, Ab.f)(Ob)) Bb.add(bb);
```

#### 985. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8305` → after: `L7607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7607) · [Before (L8305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8305)

```diff
-               Yq = Array.from(lq, (qq => null !== qq && void 0 !== qq ? qq : "")), Fq.set(gq, Yq)
+               Bb = Array.from(Ob, (bb => null !== bb && void 0 !== bb ? bb : "")), yb.set(hb, Bb)
```

#### 986. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8322` → after: `L7624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7624) · [Before (L8322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8322)

```diff
-             lq = new jq.d(Eq, new oq(qq, gq));
+             Ob = new Ab.b(ub, new Kb(bb, hb));
```

#### 987. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8324` → after: `L7626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7626) · [Before (L8324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8324)

```diff
-             Rq(Oq ? `${qq} (texture pack)` : qq, lq.diagnostics), Oq && !lq.animatesAnyBone && console.error(`Animation for ${qq} (texture pack): its clips move none of the model's bones (Root alone, the whole model, doesn't count), so it plays its own animation`), Yq.set(gq, lq)
+             qb(Gb ? `${bb} (texture pack)` : bb, Ob.diagnostics), Gb && !Ob.animatesAnyBone && console.error(`Animation for ${bb} (texture pack): its clips move none of the model's bones (Root alone, the whole model, doesn't count), so it plays its own animation`), Bb.set(hb, Ob)
```

#### 988. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8333-L8335` → after: `L7635-L7637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7635-L7637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7635-L7637) · [Before (L8333-L8335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8333-L8335)

```diff
-           const Eq = (0, dq.d)(),
-             gq = Gq.f.has(qq) || this.drawnWithPlayerRig(qq),
-             Yq = (0, Gq.o)(Eq, gq ? kq : qq, []);
+           const ub = (0, ob.e)(),
+             hb = Mb.d.has(bb) || this.drawnWithPlayerRig(bb),
+             Bb = (0, Mb.h)(ub, hb ? Pb : bb, []);
```

#### 989. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8339-L8340` → after: `L7641-L7642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7641-L7642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7641-L7642) · [Before (L8339-L8340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8339-L8340)

```diff
-             const gq = (0, Gq.s)(this.getPack(), Eq, qq);
-             Rq(`${qq} (texture pack)`, gq.diagnostics), lq = gq.binding
+             const hb = (0, Mb.k)(this.getPack(), ub, bb);
+             qb(`${bb} (texture pack)`, hb.diagnostics), Ob = hb.binding
```

#### 990. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8348` → after: `L7650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7650) · [Before (L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8348)

```diff
-           null === this.pack && (this.pack = (0, Gq.y)(null !== null ? null : (0, Lq.e)(), "texturePack"), Rq("the texture pack", this.pack.diagnostics));
+           null === this.pack && (this.pack = (0, Mb.m)(null !== null ? null : (0, mb.e)(), "texturePack"), qb("the texture pack", this.pack.diagnostics));
```

#### 991. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8354` → after: `L7656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7656) · [Before (L8354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8354)

```diff
-   37340: (qq, Eq, gq) => {
+   36947: (bb, ub, hb) => {
```

#### 992. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8356-L8357` → after: `L7658-L7659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7658-L7659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7658-L7659) · [Before (L8356-L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8356-L8357)

```diff
-       b: () => uq,
-       c: () => cq
+       e: () => ab,
+       f: () => Sb
```

#### 993. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8359-L8363` → after: `L7661-L7665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7661-L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7661-L7665) · [Before (L8359-L8363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8359-L8363)

```diff
-     var Yq = gq(37348),
-       lq = gq(37396),
-       Oq = gq(37367),
-       mq = gq(37176),
-       xq = gq(37375);
+     var Bb = hb(36955),
+       Ob = hb(37010),
+       Gb = hb(36975),
+       Ub = hb(36764),
+       Lb = hb(36981);
```

#### 994. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8373` → after: `L7675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7675) · [Before (L8373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8373)

```diff
-           null !== Eq ? (Yq.push(mq.name), lq.push(mq.rotation), Oq.push(Eq)) : console.warn(`${qq.id} animates ${mq.name}, which the attachment has no node for`)
+           null !== ub ? (Bb.push(Ub.name), Ob.push(Ub.rotation), Gb.push(ub)) : console.warn(`${bb.id} animates ${Ub.name}, which the attachment has no node for`)
```

#### 995. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8384` → after: `L7686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7686) · [Before (L8384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8384)

```diff
-           (0, mq.g)(qq, Eq, gq, Yq, Aq), this.restEuler.set(Aq, 3 * xq)
+           (0, Ub.f)(bb, ub, hb, Bb, Yb), this.restEuler.set(Yb, 3 * Lb)
```

#### 996. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8401` → after: `L7703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7703) · [Before (L8401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8401)

```diff
-         } = this, Bq = (0, lq.i)(Eq, qq);
+         } = this, Hb = (0, Ob.c)(ub, bb);
```

#### 997. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8403` → after: `L7705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7705) · [Before (L8403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8403)

```diff
-         const Wq = Eq.loop === Oq.j.Loop;
+         const wb = ub.loop === Gb.i.Loop;
```

#### 998. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8406` → after: `L7708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7708) · [Before (L8406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8406)

```diff
-           Number.isNaN(Bq) ? Yq.fill(0) : (0, lq.l)(this.channels[Oq], Bq, Wq, gq, Yq), (0, mq.j)(cq[qq] + Yq[0], cq[qq + 1] + Yq[1], cq[qq + 2] + Yq[2], this.trigs[Oq], Aq), uq.set(Aq, 4 * Oq)
+           Number.isNaN(Hb) ? Bb.fill(0) : (0, Ob.g)(this.channels[Gb], Hb, wb, hb, Bb), (0, Ub.k)(Sb[bb] + Bb[0], Sb[bb + 1] + Bb[1], Sb[bb + 2] + Bb[2], this.trigs[Gb], Yb), ab.set(Yb, 4 * Gb)
```

#### 999. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8414-L8415` → after: `L7716-L7717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7716-L7717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7716-L7717) · [Before (L8414-L8415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8414-L8415)

```diff
-       } = (0, Yq.d)(), lq = gq.find(qq);
-       return null === lq ? (console.warn(`Cosmetic attachment clip ${qq} is not a built-in clip`), null) : new Aq(lq, gq.variables.createValues(), Eq)
+       } = (0, Bb.e)(), Ob = hb.find(bb);
+       return null === Ob ? (console.warn(`Cosmetic attachment clip ${bb} is not a built-in clip`), null) : new Yb(Ob, hb.variables.createValues(), ub)
```

#### 1000. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8442` → after: `L7744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7744) · [Before (L8442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8442)

```diff
-   38093: (qq, Eq, gq) => {
+   37730: (bb, ub, hb) => {
```

#### 1001. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8444` → after: `L7746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7746) · [Before (L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8444)

```diff
-       c: () => Aq
+       b: () => Yb
```

#### 1002. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8446-L8447` → after: `L7748-L7749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7748-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7748-L7749) · [Before (L8446-L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8446-L8447)

```diff
-     var Yq = gq(37131),
-       lq = gq(37125);
+     var Bb = hb(36720),
+       Ob = hb(36713);
```

#### 1003. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8450` → after: `L7752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7752) · [Before (L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8450)

```diff
-       xq = new Yq.Na;
+       Lb = new Bb.YX;
```

#### 1004. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8454` → after: `L7756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7756) · [Before (L8454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8454)

```diff
-       const cq = qq.Iy.getState(Eq, "animator");
+       const Sb = bb.pW.getState(ub, "animator");
```

#### 1005. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8458` → after: `L7760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7760) · [Before (L8458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8458)

```diff
-         KJ: Bq
+         lN: Hb
```

#### 1006. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8461` → after: `L7763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7763) · [Before (L8461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8461)

```diff
-       const Wq = null !== (Aq = cq.getDrawnNode(Oq)) && void 0 !== Aq ? Aq : cq.getDrawnNode(mq);
+       const wb = null !== (Yb = Sb.getDrawnNode(Gb)) && void 0 !== Yb ? Yb : Sb.getDrawnNode(Ub);
```

#### 1007. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8464` → after: `L7766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7766) · [Before (L8464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8464)

```diff
-       null !== Nq && (Yq.Na.TransformNormalFromFloatsToRef(Wq.currentPosX, Wq.currentPosY, Wq.currentPosZ, uq.getNodeWorldMatrix(Bq, Nq), xq), gq[0] += xq.x, gq[1] += xq.y, gq[2] += xq.z)
+       null !== Zb && (Bb.YX.TransformNormalFromFloatsToRef(wb.currentPosX, wb.currentPosY, wb.currentPosZ, ab.getNodeWorldMatrix(Hb, Zb), Lb), hb[0] += Lb.x, hb[1] += Lb.y, hb[2] += Lb.z)
```

#### 1008. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8467` → after: `L7769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7769) · [Before (L8467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8467)

```diff
-   37831: (qq, Eq, gq) => {
+   37455: (bb, ub, hb) => {
```

#### 1009. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8469-L8471` → after: `L7771-L7773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7771-L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7771-L7773) · [Before (L8469-L8471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8469-L8471)

```diff
-       d: () => Oq,
-       f: () => xq,
-       g: () => mq
+       c: () => Gb,
+       e: () => Lb,
+       f: () => Ub
```

#### 1010. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8473-L8474` → after: `L7775-L7776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7775-L7776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7775-L7776) · [Before (L8473-L8474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8473-L8474)

```diff
-     var Yq = gq(3056),
-       lq = gq(37785);
+     var Bb = hb(2941),
+       Ob = hb(37410);
```

#### 1011. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8478` → after: `L7780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7780) · [Before (L8478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8478)

```diff
-       return Yq.c.getImagesPerAtlas().length > 1 && lq.c.ka()
+       return Bb.b.getImagesPerAtlas().length > 1 && Ob.b.eX()
```

#### 1012. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8483` → after: `L7785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7785) · [Before (L8483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8483)

```diff
-       return gq ? lq : (qq + lq) / Yq.c.getImagesPerAtlas()[0]
+       return hb ? Ob : (bb + Ob) / Bb.b.getImagesPerAtlas()[0]
```

#### 1013. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8486` → after: `L7788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7788) · [Before (L8486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8486)

```diff
-   37855: (qq, Eq, gq) => {
+   37483: (bb, ub, hb) => {
```

#### 1014. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8489-L8492` → after: `L7791-L7794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7791-L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7791-L7794) · [Before (L8489-L8492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8489-L8492)

```diff
-       j: () => zq,
-       g: () => Tq,
-       k: () => Fq,
-       l: () => Sq
+       i: () => eb,
+       f: () => Jb,
+       l: () => yb,
+       o: () => Nb
```

#### 1015. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8494-L8508` → after: `L7796-L7810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7796-L7810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7796-L7810) · [Before (L8494-L8508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8494-L8508)

```diff
-     var Yq = gq(37131),
-       lq = gq(4283),
-       Oq = gq(9379),
-       mq = gq(598),
-       xq = gq(37282),
-       Aq = gq(37313),
-       cq = gq(37870),
-       uq = gq(37233),
-       Bq = gq(37803),
-       Wq = gq(37868),
-       Nq = gq(3108),
-       aq = gq(37857),
-       Vq = gq(37278),
-       dq = gq(3056),
-       jq = gq(3059);
+     var Bb = hb(36720),
+       Ob = hb(4228),
+       Gb = hb(9181),
+       Ub = hb(588),
+       Lb = hb(36883),
+       Yb = hb(36928),
+       Sb = hb(37501),
+       ab = hb(36836),
+       Hb = hb(37425),
+       wb = hb(37499),
+       Zb = hb(3005),
+       Xb = hb(37488),
+       pb = hb(36881),
+       ob = hb(2941),
+       Ab = hb(2944);
```

#### 1016. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8526` → after: `L7828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7828) · [Before (L8526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8526)

```diff
-               const Yq = [...null !== (Eq = qq.extensionsUsed) && void 0 !== Eq ? Eq : [], ...null !== (gq = qq.extensionsRequired) && void 0 !== gq ? gq : []];
+               const Bb = [...null !== (ub = bb.extensionsUsed) && void 0 !== ub ? ub : [], ...null !== (hb = bb.extensionsRequired) && void 0 !== hb ? hb : []];
```

#### 1017. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8529-L8530` → after: `L7831-L7832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7831-L7832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7831-L7832) · [Before (L8529-L8530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8529-L8530)

```diff
-           const Nq = null !== (Eq = Bq.materials) && void 0 !== Eq ? Eq : [],
-             aq = null !== (gq = Bq.meshes) && void 0 !== gq ? gq : [];
+           const Zb = null !== (ub = Hb.materials) && void 0 !== ub ? ub : [],
+             Xb = null !== (hb = Hb.meshes) && void 0 !== hb ? hb : [];
```

#### 1018. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8532` → after: `L7834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7834) · [Before (L8532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8532)

```diff
-           const Vq = null !== (Yq = aq[0].primitives) && void 0 !== Yq ? Yq : [];
+           const pb = null !== (Bb = Xb[0].primitives) && void 0 !== Bb ? Bb : [];
```

#### 1019. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8536` → after: `L7838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7838) · [Before (L8536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8536)

```diff
-               const gq = null !== (Eq = qq.nodes) && void 0 !== Eq ? Eq : [];
+               const hb = null !== (ub = bb.nodes) && void 0 !== ub ? ub : [];
```

#### 1020. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8540` → after: `L7842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7842) · [Before (L8540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8540)

```diff
-             jq = null !== (lq = dq.pbrMetallicRoughness) && void 0 !== lq ? lq : {},
+             Ab = null !== (Ob = ob.pbrMetallicRoughness) && void 0 !== Ob ? Ob : {},
```

#### 1021. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8544` → after: `L7846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7846) · [Before (L8544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8544)

```diff
-           return JSON.stringify([Hq, oq, null !== (Oq = jq.baseColorFactor) && void 0 !== Oq ? Oq : [1, 1, 1, 1], null !== (mq = dq.emissiveFactor) && void 0 !== mq ? mq : [0, 0, 0], null !== (xq = dq.doubleSided) && void 0 !== xq && xq, null !== (Aq = dq.alphaMode) && void 0 !== … [truncated]
+           return JSON.stringify([lb, Kb, null !== (Gb = Ab.baseColorFactor) && void 0 !== Gb ? Gb : [1, 1, 1, 1], null !== (Ub = ob.emissiveFactor) && void 0 !== Ub ? Ub : [0, 0, 0], null !== (Lb = ob.doubleSided) && void 0 !== Lb && Lb, null !== (Yb = ob.alphaMode) && void 0 !== … [truncated]
```

#### 1022. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8573` → after: `L7875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7875) · [Before (L8573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8573)

```diff
-         if ("extensions" === Eq && Object.keys(null !== gq && void 0 !== gq ? gq : {}).some((qq => !tq.has(qq))) || vq(gq)) return !0
+         if ("extensions" === ub && Object.keys(null !== hb && void 0 !== hb ? hb : {}).some((bb => !rb.has(bb))) || nb(hb)) return !0
```

#### 1023. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8585` → after: `L7887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7887) · [Before (L8585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8585)

```diff
-       const Vq = null !== (mq = aq.byteOffset) && void 0 !== mq ? mq : 0,
+       const pb = null !== (Ub = Xb.byteOffset) && void 0 !== Ub ? Ub : 0,
```

#### 1024. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8591` → after: `L7893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7893) · [Before (L8591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8591)

```diff
-       return [(oq = Eq.subarray(Vq, Vq + dq), `${nq(oq,2166136261).toString(16)}-${nq(oq,1867293075).toString(16)}-${oq.length}`), Nq.mimeType, null !== (xq = gq.texCoord) && void 0 !== xq ? xq : 0, null !== (Aq = jq.wrapS) && void 0 !== Aq ? Aq : Qq, null !== (cq = jq.wrapT) &&  … [truncated]
+       return [(Kb = ub.subarray(pb, pb + ob), `${xb(Kb,2166136261).toString(16)}-${xb(Kb,1867293075).toString(16)}-${Kb.length}`), Zb.mimeType, null !== (Lb = hb.texCoord) && void 0 !== Lb ? Lb : 0, null !== (Yb = Ab.wrapS) && void 0 !== Yb ? Yb : Cb, null !== (Sb = Ab.wrapT) &&  … [truncated]
```

#### 1025. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8599-L8602` → after: `L7901-L7904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7901-L7904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7901-L7904) · [Before (L8599-L8602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8599-L8602)

```diff
-     var bq = gq(37860),
-       iq = gq(37325),
-       Zq = gq(37305),
-       fq = gq(2668);
+     var zb = hb(37492),
+       gb = hb(36938),
+       ib = hb(36911),
+       vb = hb(2560);
```

#### 1026. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8607` → after: `L7909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7909) · [Before (L8607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8607)

```diff
-       return Mq * (null !== (Eq = qq.modelScale) && void 0 !== Eq ? Eq : 1)
+       return tb * (null !== (ub = bb.modelScale) && void 0 !== ub ? ub : 1)
```

#### 1027. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8616` → after: `L7918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7918) · [Before (L8616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8616)

```diff
-       } = null !== (Eq = qq.customModelInfo) && void 0 !== Eq ? Eq : {}, Aq = null !== (gq = null === (Yq = qq.model) || void 0 === Yq ? void 0 : Yq.split("|")) && void 0 !== gq ? gq : [], cq = Aq.includes("rotatable") && lq.f.includes(Aq[0]), uq = cq || "CustomModel" === Aq[0];
+       } = null !== (ub = bb.customModelInfo) && void 0 !== ub ? ub : {}, Yb = null !== (hb = null === (Bb = bb.model) || void 0 === Bb ? void 0 : Bb.split("|")) && void 0 !== hb ? hb : [], Sb = Yb.includes("rotatable") && Ob.e.includes(Yb[0]), ab = Sb || "CustomModel" === Yb[0];
```

#### 1028. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8619-L8621` → after: `L7921-L7923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7921-L7923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7921-L7923) · [Before (L8619-L8621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8619-L8621)

```diff
-         yOffset: uq ? Oq : 0,
-         yRotation: cq ? mq : 0,
-         xRotation: cq ? xq : 0
+         yOffset: ab ? Gb : 0,
+         yRotation: Sb ? Ub : 0,
+         xRotation: Sb ? Lb : 0
```

#### 1029. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8627` → after: `L7929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7929) · [Before (L8627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8627)

```diff
-       return (0, mq.H)(qq.blockModel) || qq.blockModel === Eq.blockModel ? Eq : qq
+       return (0, Ub.J)(bb.blockModel) || bb.blockModel === ub.blockModel ? ub : bb
```

#### 1030. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8654-L8655` → after: `L7956-L7957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7956-L7957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7956-L7957) · [Before (L8654-L8655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8654-L8655)

```diff
-         emissiveColor: null !== (Eq = null === (gq = qq.emissiveColor) || void 0 === gq ? void 0 : gq.join(",")) && void 0 !== Eq ? Eq : "",
-         textureAnimation: qq.textureAnimation ? `${qq.textureAnimation.frames}x${qq.textureAnimation.animationInterval}` : ""
+         emissiveColor: null !== (ub = null === (hb = bb.emissiveColor) || void 0 === hb ? void 0 : hb.join(",")) && void 0 !== ub ? ub : "",
+         textureAnimation: bb.textureAnimation ? `${bb.textureAnimation.frames}x${bb.textureAnimation.animationInterval}` : ""
```

#### 1031. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8666` → after: `L7968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7968) · [Before (L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8666)

```diff
-       if (dq.c.getModelOverride(Eq)) return null;
+       if (ob.b.getModelOverride(ub)) return null;
```

#### 1032. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8670` → after: `L7972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7972) · [Before (L8670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8670)

```diff
-         const gq = (0, Nq.h)(dq.c.getModel(qq, jq.f.BLOCK).url);
+         const hb = (0, Zb.f)(ob.b.getModel(bb, Ab.d.BLOCK).url);
```

#### 1033. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8673` → after: `L7975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7975) · [Before (L8673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8673)

```diff
-           Yq = rq((0, Nq.d)(gq.base64))
+           Bb = jb((0, Zb.b)(hb.base64))
```

#### 1034. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8679` → after: `L7981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7981) · [Before (L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8679)

```diff
-       return null === Yq ? null : `${Yq}|${kq(gq)}`
+       return null === Bb ? null : `${Bb}|${Pb(hb)}`
```

#### 1035. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8683` → after: `L7985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L7985) · [Before (L8683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8683)

```diff
-       if ((0, aq.d)(qq), !Eq.blockModel) throw new Error(`"${Eq.name}" has a GLB model type ("${Eq.model}") but no blockModel`);
+       if ((0, Xb.c)(bb), !ub.blockModel) throw new Error(`"${ub.name}" has a GLB model type ("${ub.model}") but no blockModel`);
```

#### 1036. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8721-L8724` → after: `L8023-L8026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8023-L8026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8023-L8026) · [Before (L8721-L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8721-L8724)

```diff
-           await dq.c.requiredAssetsAreGenerated();
-           const aq = dq.c.getModelOverride(Oq) ? void 0 : Nq.textureAnimation,
-             Hq = dq.c.getModel(Oq, jq.f.BLOCK).url,
-             oq = () => dq.c.getModelOverride(Oq) ? {
+           await ob.b.requiredAssetsAreGenerated();
+           const Xb = ob.b.getModelOverride(Gb) ? void 0 : Zb.textureAnimation,
+             lb = ob.b.getModel(Gb, Ab.d.BLOCK).url,
+             Kb = () => ob.b.getModelOverride(Gb) ? {
```

#### 1037. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8727` → after: `L8029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8029) · [Before (L8727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8727)

```diff
-                 rootUrl: dq.c.getModel(Oq, jq.f.BLOCK, !0).url
+                 rootUrl: ob.b.getModel(Gb, Ab.d.BLOCK, !0).url
```

#### 1038. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8746-L8747` → after: `L8048-L8049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8048-L8049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8048-L8049) · [Before (L8746-L8747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8746-L8747)

```diff
-                   name: `${Oq}BlockModelMeshMat`,
-                   PV: qq,
+                   name: `${Gb}BlockModelMeshMat`,
+                   Xp: bb,
```

#### 1039. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8749` → after: `L8051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8051) · [Before (L8749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8749)

```diff
-                     ...(0, bq.e)(Eq, lq, sq, !!Nq.unlit),
+                     ...(0, zb.d)(ub, Ob, Vb, !!Zb.unlit),
```

#### 1040. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8756` → after: `L8058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8058) · [Before (L8756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8756)

```diff
-                     fillMode: 0 === Yq.primitive.mode ? xq.c.PointListDrawMode : xq.c.TriangleFillMode
+                     fillMode: 0 === Bb.primitive.mode ? Lb.b.PointListDrawMode : Lb.b.TriangleFillMode
```

#### 1041. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8759` → after: `L8061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8061) · [Before (L8759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8759)

```diff
-                     (0, uq.s)(qq, Bq.e, (0, Bq.j)(aq.frames, aq.animationInterval))
+                     (0, ab.q)(bb, Hb.b, (0, Hb.h)(Xb.frames, Xb.animationInterval))
```

#### 1042. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8766` → after: `L8068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8068) · [Before (L8766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8766)

```diff
-             const Wq = (await Promise.allSettled([Eq.decodeGeometries(), cq && (0, Aq.B)(cq)])).find((qq => "rejected" === qq.status));
+             const wb = (await Promise.allSettled([ub.decodeGeometries(), Sb && (0, Yb.x)(Sb)])).find((bb => "rejected" === bb.status));
```

#### 1043. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8776` → after: `L8078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8078) · [Before (L8776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8776)

```diff
-           if (!Pq) throw new Error(`"${Oq}" imported no renderable mesh`);
+           if (!Wb) throw new Error(`"${Gb}" imported no renderable mesh`);
```

#### 1044. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8780` → after: `L8082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8082) · [Before (L8780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8780)

```diff
-           } = Pq, rq = null !== (lq = Pq.material) && void 0 !== lq ? lq : await gq, vq = (0, Vq.r)(Qq, yq);
+           } = Wb, jb = null !== (Ob = Wb.material) && void 0 !== Ob ? Ob : await hb, nb = (0, pb.n)(Cb, db);
```

#### 1045. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8794-L8796` → after: `L8096-L8098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8096-L8098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8096-L8098) · [Before (L8794-L8796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8794-L8796)

```diff
-           Nq.unlit || tq || (vq.named.color = (0, Vq.p)(vq.positions.length / 3, Vq.e, vq.named.color));
-           const nq = (0, cq.m)((0, fq.e)().Ma, `${Oq}blockGlbMesh`, vq);
-           return nq.sideOrientation = xq.c.ClockWiseSideOrientation, nq.rotationQuaternion = yq.part ? null : Yq.Quaternion.Identity(), nq.hasVertexAlpha = !yq.primitive.draco && (0, bq.g)(yq.primitive), nq.material = rq, nq.yV = !1, nq
+           Zb.unlit || rb || (nb.named.color = (0, pb.m)(nb.positions.length / 3, pb.e, nb.named.color));
+           const xb = (0, Sb.l)((0, vb.g)().xX, `${Gb}blockGlbMesh`, nb);
+           return xb.sideOrientation = Lb.b.ClockWiseSideOrientation, xb.rotationQuaternion = db.part ? null : Bb.Quaternion.Identity(), xb.hasVertexAlpha = !db.primitive.draco && (0, zb.f)(db.primitive), xb.material = jb, xb.lp = !1, xb
```

#### 1046. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8815` → after: `L8117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8117) · [Before (L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8815)

```diff
-   37857: (qq, Eq, gq) => {
+   37488: (bb, ub, hb) => {
```

#### 1047. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8817` → after: `L8119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8119) · [Before (L8817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8817)

```diff
-       d: () => Yq
+       c: () => Bb
```

#### 1048. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8822` → after: `L8124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8124) · [Before (L8822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8822)

```diff
-   37893: (qq, Eq, gq) => {
+   37521: (bb, ub, hb) => {
```

#### 1049. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8824` → after: `L8126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8126) · [Before (L8824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8824)

```diff
-       c: () => lq
+       b: () => Ob
```

#### 1050. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8826` → after: `L8128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8128) · [Before (L8826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8826)

```diff
-     var Yq = gq(37497);
+     var Bb = hb(37127);
```

#### 1051. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8843` → after: `L8145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8145) · [Before (L8843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8843)

```diff
-   38036: (qq, Eq, gq) => {
+   37655: (bb, ub, hb) => {
```

#### 1052. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8845-L8846` → after: `L8147-L8148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8147-L8148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8147-L8148) · [Before (L8845-L8846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8845-L8846)

```diff
-       b: () => xq,
-       d: () => Aq
+       e: () => Lb,
+       f: () => Yb
```

#### 1053. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8848-L8850` → after: `L8150-L8152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8150-L8152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8150-L8152) · [Before (L8848-L8850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8848-L8850)

```diff
-     var Yq = gq(37497),
-       lq = gq(37453),
-       Oq = gq(37278);
+     var Bb = hb(37127),
+       Ob = hb(37086),
+       Gb = hb(36881);
```

#### 1054. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8854-L8856` → after: `L8156-L8158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8156-L8158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8156-L8158) · [Before (L8854-L8856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8854-L8856)

```diff
-       const xq = qq.Ma.Fxq[gq];
-       xq.hG(!0);
-       const Aq = qq.FW.Xs(qq.Ay(Eq)),
+       const Lb = bb.xX.tLb[hb];
+       Lb.Zx(!0);
+       const Yb = bb.Mw.Mq(bb.rK(ub)),
```

#### 1055. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8858-L8859` → after: `L8160-L8161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8160-L8161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8160-L8161) · [Before (L8858-L8859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8858-L8859)

```diff
-         uq = Eq.map(((Eq, gq) => Eq + (cq[gq] + cq[gq + 3]) / 2 - qq.BW[gq]));
-       xq.rc.set(cq[3] - cq[0], cq[4] - cq[1], cq[5] - cq[2]);
+         ab = ub.map(((ub, hb) => ub + (Sb[hb] + Sb[hb + 3]) / 2 - bb.Ow[hb]));
+       Lb.pa.set(Sb[3] - Sb[0], Sb[4] - Sb[1], Sb[5] - Sb[2]);
```

#### 1056. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8867-L8869` → after: `L8169-L8171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8169-L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8169-L8171) · [Before (L8867-L8869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8867-L8869)

```diff
-             Oq = Yq ? xq.rc.y : lq ? xq.rc.z : xq.rc.x,
-             mq = Yq ? xq.rc.z : lq ? xq.rc.x : xq.rc.y;
-           return .5 + (qq - .5) * (Eq % 2 === 0 ? Oq : mq)
+             Gb = Bb ? Lb.pa.y : Ob ? Lb.pa.z : Lb.pa.x,
+             Ub = Bb ? Lb.pa.z : Ob ? Lb.pa.x : Lb.pa.y;
+           return .5 + (bb - .5) * (ub % 2 === 0 ? Gb : Ub)
```

#### 1057. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8871` → after: `L8173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8173) · [Before (L8871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8871)

```diff
-       return (0, Oq.x)(xq, (() => {
+       return (0, Gb.r)(Lb, (() => {
```

#### 1058. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8881` → after: `L8183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8183) · [Before (L8881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8881)

```diff
-           rc: gq
+           pa: hb
```

#### 1059. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8883` → after: `L8185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8185) · [Before (L8883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8883)

```diff
-         Eq[Aq].rc.set(gq.x, 1 / Yq, gq.z), (0, lq.p)(Eq[Aq], qq.x, (0 === Aq ? 1 : -1) * (Oq - mq / (2 * Yq)), qq.z)
+         ub[Yb].pa.set(hb.x, 1 / Bb, hb.z), (0, Ob.p)(ub[Yb], bb.x, (0 === Yb ? 1 : -1) * (Gb - Ub / (2 * Bb)), bb.z)
```

#### 1060. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8888` → after: `L8190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8190) · [Before (L8888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8888)

```diff
-           rc: cq
+           pa: Sb
```

#### 1061. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8890` → after: `L8192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8192) · [Before (L8890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8890)

```diff
-         Eq[Aq].rc.set(1 / gq, (xq * Yq - 2 * mq) / ((xq - 2 * mq) * Yq), cq.z), (0, lq.p)(Eq[Aq], (2 === Aq ? -1 : 1) * (Oq - mq / (2 * gq)), qq.y, qq.z)
+         ub[Yb].pa.set(1 / hb, (Lb * Bb - 2 * Ub) / ((Lb - 2 * Ub) * Bb), Sb.z), (0, Ob.p)(ub[Yb], (2 === Yb ? -1 : 1) * (Gb - Ub / (2 * hb)), bb.y, bb.z)
```

#### 1062. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8894` → after: `L8196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8196) · [Before (L8894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8894)

```diff
-   37689: (qq, Eq, gq) => {
+   37324: (bb, ub, hb) => {
```

#### 1063. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8896` → after: `L8198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8198) · [Before (L8896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8896)

```diff
-       b: () => Yq
+       c: () => Bb
```

#### 1064. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8904` → after: `L8206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8206) · [Before (L8904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8904)

```diff
-   37125: (qq, Eq, gq) => {
+   36713: (bb, ub, hb) => {
```

#### 1065. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8912-L8917` → after: `L8214-L8219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8214-L8219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8214-L8219) · [Before (L8912-L8917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8912-L8917)

```diff
-     var Yq = gq(307),
-       lq = gq(1870),
-       Oq = gq(37183),
-       mq = gq(37203),
-       xq = gq(37131),
-       Aq = gq(37176);
+     var Bb = hb(314),
+       Ob = hb(1784),
+       Gb = hb(36772),
+       Ub = hb(36793),
+       Lb = hb(36720),
+       Yb = hb(36764);
```

#### 1066. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8933` → after: `L8235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8235) · [Before (L8933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8933)

```diff
-         this.restQuat.set([Eq, gq, Yq, lq]), (0, Aq.g)(Eq, gq, Yq, lq, this.restEuler)
+         this.restQuat.set([ub, hb, Bb, Ob]), (0, Yb.f)(ub, hb, Bb, Ob, this.restEuler)
```

#### 1067. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8955` → after: `L8257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8257) · [Before (L8955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8955)

```diff
-           } = uq, Wq = Bq.currentAnimationType, Nq = null !== Wq && Wq !== Oq.g.Movement;
+           } = ab, wb = Hb.currentAnimationType, Zb = null !== wb && wb !== Gb.f.Movement;
```

#### 1068. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8979` → after: `L8281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8281) · [Before (L8979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8979)

```diff
-         yq || (0, Aq.j)(mq[0] + Hq, mq[1] + oq, mq[2] + Pq, qq.eulerTrig, Wq);
+         db || (0, Yb.k)(Ub[0] + lb, Ub[1] + Kb, Ub[2] + Wb, bb.eulerTrig, wb);
```

#### 1069. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8986` → after: `L8288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8288) · [Before (L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8986)

```diff
-             Nq[0] = -dq[0], Nq[1] = -dq[1], Nq[2] = -dq[2], Nq[3] = dq[3], qq.takeoverRotation.set([Eq.x, Eq.y, Eq.z, Eq.w]), (0, Aq.i)(Nq, qq.takeoverRotation, qq.takeoverRotation), qq.takeoverPosition.set([Oq.currentPosX, Oq.currentPosY, Oq.currentPosZ]);
+             Zb[0] = -ob[0], Zb[1] = -ob[1], Zb[2] = -ob[2], Zb[3] = ob[3], bb.takeoverRotation.set([ub.x, ub.y, ub.z, ub.w]), (0, Yb.j)(Zb, bb.takeoverRotation, bb.takeoverRotation), bb.takeoverPosition.set([Gb.currentPosX, Gb.currentPosY, Gb.currentPosZ]);
```

#### 1070. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L8990` → after: `L8292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8292) · [Before (L8990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L8990)

```diff
-           if (qq.takeover += (1 - qq.takeover) * (0, Aq.p)(12, lq), qq.takeover > .999) qq.takeover = 1;
+           if (bb.takeover += (1 - bb.takeover) * (0, Yb.s)(12, Ob), bb.takeover > .999) bb.takeover = 1;
```

#### 1071. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9013` → after: `L8315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8315) · [Before (L9013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9013)

```diff
-           (0, Aq.i)(dq, Wq, Wq);
+           (0, Yb.j)(ob, wb, wb);
```

#### 1072. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9030` → after: `L8332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8332) · [Before (L9030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9030)

```diff
-         return (Yq[0] !== Eq.baseRotX || Yq[1] !== Eq.baseRotY || Yq[2] !== Eq.baseRotZ) && (Yq[0] = Eq.baseRotX, Yq[1] = Eq.baseRotY, Yq[2] = Eq.baseRotZ, xq.Quaternion.RotationYawPitchRollToRef(Eq.baseRotY, Eq.baseRotX, Eq.baseRotZ, aq), gq[0] = aq.x, gq[1] = aq.y, gq[2] = aq.z … [truncated]
+         return (Bb[0] !== ub.baseRotX || Bb[1] !== ub.baseRotY || Bb[2] !== ub.baseRotZ) && (Bb[0] = ub.baseRotX, Bb[1] = ub.baseRotY, Bb[2] = ub.baseRotZ, Lb.Quaternion.RotationYawPitchRollToRef(ub.baseRotY, ub.baseRotX, ub.baseRotZ, Xb), hb[0] = Xb.x, hb[1] = Xb.y, hb[2] = Xb.z … [truncated]
```

#### 1073. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9055-L9056` → after: `L8357-L8358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8357-L8358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8357-L8358) · [Before (L9055-L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9055-L9056)

```diff
-         const [mq, xq, Aq] = Yq.c.eulerYXZFromQuaternion(Oq.thinNode.rotationQuat);
-         Oq.currentRotX = Yq.c.computeShortestRotation(Oq.baseRotX, mq), Oq.currentRotY = Yq.c.computeShortestRotation(Oq.baseRotY, xq), Oq.currentRotZ = Yq.c.computeShortestRotation(Oq.baseRotZ, Aq), lq ? (qq.heldForClip = !0, Oq.rotX = Oq.currentRotX, Oq.rotY = Oq.currentRotY, O … [truncated]
+         const [Ub, Lb, Yb] = Bb.d.eulerYXZFromQuaternion(Gb.thinNode.rotationQuat);
+         Gb.currentRotX = Bb.d.computeShortestRotation(Gb.baseRotX, Ub), Gb.currentRotY = Bb.d.computeShortestRotation(Gb.baseRotY, Lb), Gb.currentRotZ = Bb.d.computeShortestRotation(Gb.baseRotZ, Yb), Ob ? (bb.heldForClip = !0, Gb.rotX = Gb.currentRotX, Gb.rotY = Gb.currentRotY, G … [truncated]
```

#### 1074. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9072` → after: `L8374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8374) · [Before (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9072)

```diff
-     var Hq = gq(37192);
+     var lb = hb(36780);
```

#### 1075. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9076` → after: `L8378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8378) · [Before (L9076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9076)

```diff
-       const Oq = qq.Ma.LJ,
+       const Gb = bb.xX.oN,
```

#### 1076. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9078` → after: `L8380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8380) · [Before (L9078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9078)

```diff
-           oR: mq
+           bM: Ub
```

#### 1077. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9080` → after: `L8382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8382) · [Before (L9080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9080)

```diff
-       return Oq.has(gq) && Oq.getCulledForEntity(gq, Eq) && Eq !== mq && (null === (Yq = qq.Iy.hgq(Eq)) || void 0 === Yq ? void 0 : Yq.FN) !== mq && (null === (lq = qq.Iy.hgq(mq)) || void 0 === lq ? void 0 : lq.FN) !== Eq
+       return Gb.has(hb) && Gb.getCulledForEntity(hb, ub) && ub !== Ub && (null === (Bb = bb.pW.Hhb(ub)) || void 0 === Bb ? void 0 : Bb.mZ) !== Ub && (null === (Ob = bb.pW.Hhb(Ub)) || void 0 === Ob ? void 0 : Ob.mZ) !== ub
```

#### 1078. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9084` → after: `L8386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8386) · [Before (L9084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9084)

```diff
-         this.Zk = void 0, this.wB = void 0, this.thinInstMgr = void 0, this.KJ = null, this.egq = null, this.paused = !1, this.pausedDt = 0, this.idle = !1, this.manualRotationEpoch = 0, this.rigPose = null, this.rigFrame = 0, this.writeRigNodePosition = qq => {
+         this.yN = void 0, this.PH = void 0, this.thinInstMgr = void 0, this.lN = null, this.Nhb = null, this.paused = !1, this.pausedDt = 0, this.idle = !1, this.manualRotationEpoch = 0, this.rigPose = null, this.rigFrame = 0, this.writeRigNodePosition = bb => {
```

#### 1079. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9087-L9090` → after: `L8389-L8392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8389-L8392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8389-L8392) · [Before (L9087-L9090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9087-L9090)

```diff
-           [Oq.g.Movement]: new yq,
-           [Oq.g.Action]: new yq,
-           [Oq.g.Emote]: new yq,
-           [Oq.g.Custom]: new yq
+           [Gb.f.Movement]: new db,
+           [Gb.f.Action]: new db,
+           [Gb.f.Emote]: new db,
+           [Gb.f.Custom]: new db
```

#### 1080. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9099` → after: `L8401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8401) · [Before (L9099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9099)

```diff
-           dq: lq
+           ob: Ob
```

#### 1081. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9101` → after: `L8403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8403) · [Before (L9101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9101)

```diff
-         lq && this.updateNodeAnimations(lq, Eq, Oq.c.Start)
+         Ob && this.updateNodeAnimations(Ob, ub, Gb.e.Start)
```

#### 1082. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9108` → after: `L8410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8410) · [Before (L9108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9108)

```diff
-           dq: Yq
+           ob: Bb
```

#### 1083. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9110` → after: `L8412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8412) · [Before (L9110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9110)

```diff
-         Eq.reset(), Yq && this.updateNodeAnimations(Yq, qq, Oq.c.Stop)
+         ub.reset(), Bb && this.updateNodeAnimations(Bb, bb, Gb.e.Stop)
```

#### 1084. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9120` → after: `L8422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8422) · [Before (L9120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9120)

```diff
-         (null === (Eq = this.rigPose) || void 0 === Eq ? void 0 : Eq.controller) !== qq && (null === (gq = this.rigPose) || void 0 === gq || gq.releaseAll(this.thinInstMgr, this.KJ), this.rigPose = null === qq ? null : new dq(qq, ((qq, Eq) => this.getRigNodeTransform(qq, Eq)), (( … [truncated]
+         (null === (ub = this.rigPose) || void 0 === ub ? void 0 : ub.controller) !== bb && (null === (hb = this.rigPose) || void 0 === hb || hb.releaseAll(this.thinInstMgr, this.lN), this.rigPose = null === bb ? null : new ob(bb, ((bb, ub) => this.getRigNodeTransform(bb, ub)), (( … [truncated]
```

#### 1085. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9126` → after: `L8428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8428) · [Before (L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9126)

```diff
-         return null !== (qq = null === (Eq = this.rigPose) || void 0 === Eq ? void 0 : Eq.controller) && void 0 !== qq ? qq : null
+         return null !== (bb = null === (ub = this.rigPose) || void 0 === ub ? void 0 : ub.controller) && void 0 !== bb ? bb : null
```

#### 1086. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9130` → after: `L8432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8432) · [Before (L9130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9130)

```diff
-         return null !== (Eq = this.nodeTransforms[this.getAliasedNodeName(qq)]) && void 0 !== Eq ? Eq : null
+         return null !== (ub = this.nodeTransforms[this.getAliasedNodeName(bb)]) && void 0 !== ub ? ub : null
```

#### 1087. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9134-L9135` → after: `L8436-L8437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8436-L8437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8436-L8437) · [Before (L9134-L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9134-L9135)

```diff
-           if (this.thinInstMgr.getNamedNodeOrNull(this.KJ, nq) !== Eq) return null;
-           const qq = `${nq}#${Eq}`;
+           if (this.thinInstMgr.getNamedNodeOrNull(this.lN, xb) !== ub) return null;
+           const bb = `${xb}#${ub}`;
```

#### 1088. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9138-L9139` → after: `L8440-L8441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8440-L8441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8440-L8441) · [Before (L9138-L9139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9138-L9139)

```diff
-         const gq = this.getOrCreateTransformIfNodeExists(Eq === bq ? nq : qq);
-         return (null === gq || void 0 === gq ? void 0 : gq.thinNodeIndex) === Eq ? gq : null
+         const hb = this.getOrCreateTransformIfNodeExists(ub === zb ? xb : bb);
+         return (null === hb || void 0 === hb ? void 0 : hb.thinNodeIndex) === ub ? hb : null
```

#### 1089. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9142` → after: `L8444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8444) · [Before (L9142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9142)

```diff
-         if (this.thinInstMgr.has(this.KJ))
+         if (this.thinInstMgr.has(this.lN))
```

#### 1090. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9154` → after: `L8456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8456) · [Before (L9154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9154)

```diff
-             gq || this.thinInstMgr.setNodePosition(this.KJ, Eq, Yq, lq, Oq), this.thinInstMgr.setNodeRotationEuler(this.KJ, Eq, mq, xq, Aq)
+             hb || this.thinInstMgr.setNodePosition(this.lN, ub, Bb, Ob, Gb), this.thinInstMgr.setNodeRotationEuler(this.lN, ub, Ub, Lb, Yb)
```

#### 1091. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9172` → after: `L8474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8474) · [Before (L9172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9172)

```diff
-           if (!this.egq.Dgq) return;
+           if (!this.Nhb.shb) return;
```

#### 1092. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9176-L9177` → after: `L8478-L8479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8478-L8479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8478-L8479) · [Before (L9176-L9177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9176-L9177)

```diff
-         if (!this.egq.Dgq) return;
-         const Yq = lq.b.lerpWeight(rq * (qq + this.pausedDt)),
+         if (!this.Nhb.shb) return;
+         const Bb = Ob.c.lerpWeight(jb * (bb + this.pausedDt)),
```

#### 1093. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9180` → after: `L8482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8482) · [Before (L9180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9180)

```diff
-         null !== Oq && (this.rigFrame++, mq = Oq.apply((qq + this.pausedDt) / 1e3, this.rigFrame, this.thinInstMgr, this.KJ, this.writeRigNodePosition, Eq)), this.paused = !1, this.pausedDt = 0;
+         null !== Gb && (this.rigFrame++, Ub = Gb.apply((bb + this.pausedDt) / 1e3, this.rigFrame, this.thinInstMgr, this.lN, this.writeRigNodePosition, ub)), this.paused = !1, this.pausedDt = 0;
```

#### 1094. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9184` → after: `L8486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8486) · [Before (L9184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9184)

```diff
-           if (!lq.thinNode.Dgq) {
+           if (!Ob.thinNode.shb) {
```

#### 1095. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9206` → after: `L8508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8508) · [Before (L9206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9206)

```diff
-           if (lq.SB(qq), !lq.hasCurrentAnimationFinished()) {
+           if (Ob.gH(bb), !Ob.hasCurrentAnimationFinished()) {
```

#### 1096. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9211` → after: `L8513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8513) · [Before (L9211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9211)

```diff
-           mq.Vq !== Oq.l.LoopOnLastFrame ? (this.snapNodesToFinalKeyframes(mq, Yq), this.stopAnimation(Yq)) : (lq.rewindPastLoops(), this.rewindNodeAnimationTimelines(mq, Yq), Eq = !0)
+           Ub.pb !== Gb.k.LoopOnLastFrame ? (this.snapNodesToFinalKeyframes(Ub, Bb), this.stopAnimation(Bb)) : (Ob.rewindPastLoops(), this.rewindNodeAnimationTimelines(Ub, Bb), ub = !0)
```

#### 1097. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9217` → after: `L8519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8519) · [Before (L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9217)

```diff
-           dq: gq
+           ob: hb
```

#### 1098. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9227` → after: `L8529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8529) · [Before (L9227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9227)

```diff
-           dq: gq
+           ob: hb
```

#### 1099. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9248` → after: `L8550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8550) · [Before (L9248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9248)

```diff
-           gq = Eq ? nq : this.getAliasedNodeName(qq);
+           hb = ub ? xb : this.getAliasedNodeName(bb);
```

#### 1100. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9252` → after: `L8554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8554) · [Before (L9252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9252)

```diff
-         const lq = Eq ? bq : this.thinInstMgr.getNamedNodeOrNull(this.KJ, gq);
+         const Ob = ub ? zb : this.thinInstMgr.getNamedNodeOrNull(this.lN, hb);
```

#### 1101. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9264` → after: `L8566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8566) · [Before (L9264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9264)

```diff
-             return [mq, null === Yq ? null : null !== (Eq = null === xq || void 0 === xq || null === (gq = xq.dq) || void 0 === gq ? void 0 : gq[Yq]) && void 0 !== Eq ? Eq : null]
+             return [Ub, null === Bb ? null : null !== (ub = null === Lb || void 0 === Lb || null === (hb = Lb.ob) || void 0 === hb ? void 0 : hb[Bb]) && void 0 !== ub ? ub : null]
```

#### 1102. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9266` → after: `L8568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8568) · [Before (L9266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9266)

```diff
-           mq = this.thinInstMgr.hYq(this.KJ, Eq),
+           Ub = this.thinInstMgr.HBb(this.lN, ub),
```

#### 1103. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9272` → after: `L8574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8574) · [Before (L9272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9272)

```diff
-           restRotation: this.thinInstMgr.getRestRotation(this.KJ, Eq),
+           restRotation: this.thinInstMgr.getRestRotation(this.lN, ub),
```

#### 1104. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9304` → after: `L8606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8606) · [Before (L9304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9304)

```diff
-         return null !== (Eq = null === (gq = this.nodeNameAliases) || void 0 === gq ? void 0 : gq[qq]) && void 0 !== Eq ? Eq : qq
+         return null !== (ub = null === (hb = this.nodeNameAliases) || void 0 === hb ? void 0 : hb[bb]) && void 0 !== ub ? ub : bb
```

#### 1105. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9310` → after: `L8612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8612) · [Before (L9310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9310)

```diff
-           null !== mq && (mq.animationByType[Eq] = gq === Oq.c.Start && null !== (Yq = qq[lq]) && void 0 !== Yq ? Yq : null, this.updateCurrentNodeAnimation(mq), mq.currentAnimationType === Eq && (mq.rotAnimationIndex = 0, mq.posAnimationIndex = 0))
+           null !== Ub && (Ub.animationByType[ub] = hb === Gb.e.Start && null !== (Bb = bb[Ob]) && void 0 !== Bb ? Bb : null, this.updateCurrentNodeAnimation(Ub), Ub.currentAnimationType === ub && (Ub.rotAnimationIndex = 0, Ub.posAnimationIndex = 0))
```

#### 1106. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9351` → after: `L8653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8653) · [Before (L9351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9351)

```diff
-             lq = Aq.Qq,
+             Ob = Yb.Cb,
```

#### 1107. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9353-L9355` → after: `L8655-L8657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8655-L8657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8655-L8657) · [Before (L9353-L9355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9353-L9355)

```diff
-             Bq = Aq.Pq;
-           switch (Aq.oq) {
-             case Oq.k.Linear: {
+             Hb = Yb.Wb;
+           switch (Yb.Kb) {
+             case Gb.h.Linear: {
```

#### 1108. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9365` → after: `L8667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8667) · [Before (L9365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9365)

```diff
-             case Oq.k.CatmullRomSpline: {
+             case Gb.h.CatmullRomSpline: {
```

#### 1109. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9374-L9376` → after: `L8676-L8678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8676-L8678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8676-L8678) · [Before (L9374-L9376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9374-L9376)

```diff
-                   tq: xq,
-                   rq: Aq
-                 } = lq[mq], cq = Number.isFinite(xq) ? xq : 0, Bq = Number.isFinite(Aq) ? Aq : 0;
+                   jb: Lb,
+                   nb: Yb
+                 } = Ob[Ub], Sb = Number.isFinite(Lb) ? Lb : 0, Hb = Number.isFinite(Yb) ? Yb : 0;
```

#### 1110. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9382-L9383` → after: `L8684-L8685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8684-L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8684-L8685) · [Before (L9382-L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9382-L9383)

```diff
-               const qq = Aq.oq;
-               throw new Error(`Unimplemented lerp mode: ${qq}`)
+               const bb = Yb.Kb;
+               throw new Error(`Unimplemented lerp mode: ${bb}`)
```

#### 1111. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9412-L9414` → after: `L8714-L8716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8714-L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8714-L8716) · [Before (L9412-L9414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9412-L9414)

```diff
-         const mq = null !== Eq ? Yq.c.computeShortestRotation(qq.currentRotX, Eq) : 0,
-           xq = null !== gq ? Yq.c.computeShortestRotation(qq.currentRotY, gq) : 0,
-           Aq = null !== lq ? Yq.c.computeShortestRotation(qq.currentRotZ, lq) : 0,
+         const Ub = null !== ub ? Bb.d.computeShortestRotation(bb.currentRotX, ub) : 0,
+           Lb = null !== hb ? Bb.d.computeShortestRotation(bb.currentRotY, hb) : 0,
+           Yb = null !== Ob ? Bb.d.computeShortestRotation(bb.currentRotZ, Ob) : 0,
```

#### 1112. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9437` → after: `L8739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8739) · [Before (L9437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9437)

```diff
-         this.thinInstMgr.setNodeRotationEuler(this.KJ, Eq, gq + Oq, Yq + mq, lq + xq)
+         this.thinInstMgr.setNodeRotationEuler(this.lN, ub, hb + Gb, Bb + Ub, Ob + Lb)
```

#### 1113. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9444` → after: `L8746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8746) · [Before (L9444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9444)

```diff
-         this.thinInstMgr.setNodePosition(this.KJ, qq.thinNodeIndex, Eq, gq, Yq)
+         this.thinInstMgr.setNodePosition(this.lN, bb.thinNodeIndex, ub, hb, Bb)
```

#### 1114. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9448-L9450` → after: `L8750-L8752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8750-L8752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8750-L8752) · [Before (L9448-L9450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9448-L9450)

```diff
-           wB: Eq,
-           Zk: gq
-         } = this, Yq = void 0 === Eq || void 0 === gq ? void 0 : Eq.Iy.SEq(gq);
+           PH: ub,
+           yN: hb
+         } = this, Bb = void 0 === ub || void 0 === hb ? void 0 : ub.pW.lub(hb);
```

#### 1115. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9452` → after: `L8754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8754) · [Before (L9452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9452)

```diff
-         const lq = Eq.Iy.qI(gq).dD,
+         const Ob = ub.pW.JV(hb).jF,
```

#### 1116. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9471` → after: `L8773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8773) · [Before (L9471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9471)

```diff
-         this.currentAnimationScript = null, this.elapsedAnimationTimeMs = 0, this.elapsedAnimationTimeFraction = 0, this.uq = 1
+         this.currentAnimationScript = null, this.elapsedAnimationTimeMs = 0, this.elapsedAnimationTimeFraction = 0, this.Sb = 1
```

#### 1117. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9474` → after: `L8776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8776) · [Before (L9474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9474)

```diff
-         this.currentAnimationScript = qq, this.elapsedAnimationTimeMs = Eq * qq.aq, this.elapsedAnimationTimeFraction = Eq, this.uq = gq
+         this.currentAnimationScript = bb, this.elapsedAnimationTimeMs = ub * bb.Xb, this.elapsedAnimationTimeFraction = ub, this.Sb = hb
```

#### 1118. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9477` → after: `L8779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8779) · [Before (L9477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9477)

```diff
-         this.currentAnimationScript = null, this.elapsedAnimationTimeMs = 0, this.elapsedAnimationTimeFraction = 0, this.uq = 1
+         this.currentAnimationScript = null, this.elapsedAnimationTimeMs = 0, this.elapsedAnimationTimeFraction = 0, this.Sb = 1
```

#### 1119. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9486` → after: `L8788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8788) · [Before (L9486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9486)

```diff
-         this.uq = qq
+         this.Sb = bb
```

#### 1120. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9491-L9492` → after: `L8793-L8794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8793-L8794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8793-L8794) · [Before (L9491-L9492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9491-L9492)

```diff
-           aq: Eq,
-           Vq: gq
+           Xb: ub,
+           pb: hb
```

#### 1121. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9494` → after: `L8796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8796) · [Before (L9494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9494)

```diff
-         this.elapsedAnimationTimeMs += qq * this.uq, this.elapsedAnimationTimeFraction = this.elapsedAnimationTimeMs / Eq, this.elapsedAnimationTimeFraction >= 1 && gq !== Oq.l.LoopOnLastFrame && (this.elapsedAnimationTimeMs = Eq, this.elapsedAnimationTimeFraction = 1)
+         this.elapsedAnimationTimeMs += bb * this.Sb, this.elapsedAnimationTimeFraction = this.elapsedAnimationTimeMs / ub, this.elapsedAnimationTimeFraction >= 1 && hb !== Gb.k.LoopOnLastFrame && (this.elapsedAnimationTimeMs = ub, this.elapsedAnimationTimeFraction = 1)
```

#### 1122. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9498` → after: `L8800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8800) · [Before (L9498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9498)

```diff
-           aq: qq
+           Xb: bb
```

#### 1123. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9504` → after: `L8806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8806) · [Before (L9504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9504)

```diff
-         return this.elapsedAnimationTimeFraction >= 1 && (null === (qq = this.currentAnimationScript) || void 0 === qq ? void 0 : qq.Vq) !== Oq.l.HoldOnLastFrame
+         return this.elapsedAnimationTimeFraction >= 1 && (null === (bb = this.currentAnimationScript) || void 0 === bb ? void 0 : bb.pb) !== Gb.k.HoldOnLastFrame
```

#### 1124. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9513` → after: `L8815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8815) · [Before (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9513)

```diff
-         Fy: function(Eq, gq) {
+         UW: function(ub, hb) {
```

#### 1125. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9515` → after: `L8817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8817) · [Before (L9515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9515)

```diff
-           gq.wB = qq, gq.thinInstMgr = qq.Ma.LJ, gq.nodeNameAliases = null !== (Yq = null === (lq = (0, mq.e)(gq.modelLifeformType)) || void 0 === lq ? void 0 : lq.nodeNameAliases) && void 0 !== Yq ? Yq : null, (0, Hq.b)(qq).animations.restore(Eq, gq)
+           hb.PH = bb, hb.thinInstMgr = bb.xX.oN, hb.nodeNameAliases = null !== (Bb = null === (Ob = (0, Ub.d)(hb.modelLifeformType)) || void 0 === Ob ? void 0 : Ob.nodeNameAliases) && void 0 !== Bb ? Bb : null, (0, lb.e)(bb).animations.restore(ub, hb)
```

#### 1126. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9517` → after: `L8819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8819) · [Before (L9517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9517)

```diff
-         OJ: function(qq, Eq) {
+         gJ: function(bb, ub) {
```

#### 1127. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9520` → after: `L8822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8822) · [Before (L9520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9520)

```diff
-         Vr: function(Eq, gq) {
+         oW: function(ub, hb) {
```

#### 1128. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9524-L9526` → after: `L8826-L8828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8826-L8828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8826-L8828) · [Before (L9524-L9526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9524-L9526)

```diff
-               KJ: gq
-             } = lq, Oq = null !== gq && oq(qq, lq.Zk, gq);
-             Oq ? lq.renderPaused(Eq) : lq.render(Eq), null === (Yq = qq.Iy.getState(lq.Zk, "genericLifeform")) || void 0 === Yq || Yq.followLimbs(Oq)
+               lN: hb
+             } = Ob, Gb = null !== hb && Kb(bb, Ob.yN, hb);
+             Gb ? Ob.renderPaused(ub) : Ob.render(ub), null === (Bb = bb.pW.getState(Ob.yN, "genericLifeform")) || void 0 === Bb || Bb.followLimbs(Gb)
```

#### 1129. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9544` → after: `L8846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8846) · [Before (L9544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9544)

```diff
-   38374: (qq, Eq, gq) => {
+   38011: (bb, ub, hb) => {
```

#### 1130. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9553` → after: `L8855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8855) · [Before (L9553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9553)

```diff
-     var Yq = gq(317),
+     var Bb = hb(324),
```

#### 1131. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9555-L9561` → after: `L8857-L8863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8857-L8863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8857-L8863) · [Before (L9555-L9561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9555-L9561)

```diff
-       Oq = gq(38074),
-       mq = gq(37286),
-       xq = gq(37417),
-       Aq = gq(38361),
-       cq = gq(37228);
-     const uq = new mq.e(1, 0, 0, .5),
-       Bq = new mq.e(0, 0, 0, 0),
+       Gb = hb(37708),
+       Ub = hb(36889),
+       Lb = hb(37044),
+       Yb = hb(37984),
+       Sb = hb(36822);
+     const ab = new Ub.b(1, 0, 0, .5),
+       Hb = new Ub.b(0, 0, 0, 0),
```

#### 1132. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9567-L9568` → after: `L8869-L8870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8869-L8870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8869-L8870) · [Before (L9567-L9568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9567-L9568)

```diff
-       const Oq = null !== qq && void 0 !== qq ? qq : lq().create();
-       return lq().max(Oq, null !== Eq && void 0 !== Eq ? Eq : lq().ZERO, null !== gq && void 0 !== gq ? gq : lq().ZERO), lq().max(Oq, Oq, null !== Yq && void 0 !== Yq ? Yq : lq().ZERO), lq().scale(Oq, Oq, Wq), Oq
+       const Gb = null !== bb && void 0 !== bb ? bb : Ob().create();
+       return Ob().max(Gb, null !== ub && void 0 !== ub ? ub : Ob().ZERO, null !== hb && void 0 !== hb ? hb : Ob().ZERO), Ob().max(Gb, Gb, null !== Bb && void 0 !== Bb ? Bb : Ob().ZERO), Ob().scale(Gb, Gb, wb), Gb
```

#### 1133. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9573` → after: `L8875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8875) · [Before (L9573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9573)

```diff
-       const Oq = null === (lq = qq.Iy.Wgq(Eq)) || void 0 === lq ? void 0 : lq._heldLightTintFloor;
+       const Gb = null === (Ob = bb.pW.Tub(ub)) || void 0 === Ob ? void 0 : Ob._heldLightTintFloor;
```

#### 1134. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9579` → after: `L8881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8881) · [Before (L9579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9579)

```diff
-         this.lifeformType = null, this.KJ = null, this.egq = null, this.lastHurtTime = -1 / 0, this.overlayColourOverride = null, this.isReplayLocalPlayer = !1, this._hurtOverlaySet = !1, this._defaultOverlayColour = Bq, this._lightLevels = xq.c.slice(), this._transformPaused = ! … [truncated]
+         this.lifeformType = null, this.lN = null, this.Nhb = null, this.lastHurtTime = -1 / 0, this.overlayColourOverride = null, this.isReplayLocalPlayer = !1, this._hurtOverlaySet = !1, this._defaultOverlayColour = Hb, this._lightLevels = Lb.c.slice(), this._transformPaused = ! … [truncated]
```

#### 1135. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9582` → after: `L8884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8884) · [Before (L9582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9582)

```diff
-         this.egq.Dgq && (this._transformPaused = qq, qq || Oq.d[this.lifeformType].meshApi.updateTransform(this.Zk, this.KJ))
+         this.Nhb.shb && (this._transformPaused = bb, bb || Gb.c[this.lifeformType].meshApi.updateTransform(this.yN, this.lN))
```

#### 1136. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9595-L9596` → after: `L8897-L8898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8897-L8898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8897-L8898) · [Before (L9595-L9596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9595-L9596)

```diff
-         Vr: function(Eq, gq) {
-           const Yq = qq.Gqq - 300;
+         oW: function(ub, hb) {
+           const Bb = bb.wbb - 300;
```

#### 1137. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9599-L9603` → after: `L8901-L8905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8901-L8905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8901-L8905) · [Before (L9599-L9603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9599-L9603)

```diff
-               KJ: Eq,
-               egq: gq
-             } = mq, xq = gq.Dgq;
-             if (!xq && mq.Zk !== qq.oR && !mq.isReplayLocalPlayer) continue;
-             const Wq = Oq.d[mq.lifeformType].meshApi;
+               lN: ub,
+               Nhb: hb
+             } = Ub, Lb = hb.shb;
+             if (!Lb && Ub.yN !== bb.bM && !Ub.isReplayLocalPlayer) continue;
+             const wb = Gb.c[Ub.lifeformType].meshApi;
```

#### 1138. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9607-L9608` → after: `L8909-L8910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8909-L8910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8909-L8910) · [Before (L9607-L9608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9607-L9608)

```diff
-                 gq = null !== (lq = mq.overlayColourOverride) && void 0 !== lq ? lq : Bq;
-               mq._hurtOverlaySet !== qq ? (Wq.updateMeshOverlayColour(Eq, qq ? uq : gq), mq._hurtOverlaySet = qq, mq._defaultOverlayColour = gq) : gq !== mq._defaultOverlayColour && (mq._defaultOverlayColour = gq, qq || Wq.updateMeshOverlayColour(Eq, gq))
+                 hb = null !== (Ob = Ub.overlayColourOverride) && void 0 !== Ob ? Ob : Hb;
+               Ub._hurtOverlaySet !== bb ? (wb.updateMeshOverlayColour(ub, bb ? ab : hb), Ub._hurtOverlaySet = bb, Ub._defaultOverlayColour = hb) : hb !== Ub._defaultOverlayColour && (Ub._defaultOverlayColour = hb, bb || wb.updateMeshOverlayColour(ub, hb))
```

#### 1139. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9610` → after: `L8912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8912) · [Before (L9610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9610)

```diff
-             if (qq.Ma.VV) {
+             if (bb.xX.Sp) {
```

#### 1140. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9612-L9614` → after: `L8914-L8916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8914-L8916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8914-L8916) · [Before (L9612-L9614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9612-L9614)

```diff
-                 Yq = (0, Aq.l)(qq, mq.Zk),
-                 lq = Vq(qq, mq.Zk, Yq, dq);
-               (0, cq.V)(gq[0], gq[1], gq[2], gq[3], lq) && (gq.set(lq), Wq.updateMeshLightLevels(Eq, gq))
+                 Bb = (0, Yb.j)(bb, Ub.yN),
+                 Ob = pb(bb, Ub.yN, Bb, ob);
+               (0, Sb.bb)(hb[0], hb[1], hb[2], hb[3], Ob) && (hb.set(Ob), wb.updateMeshLightLevels(ub, hb))
```

#### 1141. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9621` → after: `L8923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8923) · [Before (L9621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9621)

```diff
-   38138: (qq, Eq, gq) => {
+   37765: (bb, ub, hb) => {
```

#### 1142. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9628` → after: `L8930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8930) · [Before (L9628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9628)

```diff
-     var Yq = gq(317),
+     var Bb = hb(324),
```

#### 1143. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9630-L9632` → after: `L8932-L8934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8932-L8934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8932-L8934) · [Before (L9630-L9632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9630-L9632)

```diff
-       Oq = gq(37776),
-       mq = gq(4299),
-       xq = gq(3545);
+       Gb = hb(37406),
+       Ub = hb(4246),
+       Lb = hb(3463);
```

#### 1144. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9635` → after: `L8937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8937) · [Before (L9635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9635)

```diff
-         this.zoomXYOffsetLerpFactor = .2, this.wB = void 0, this.wB = qq
+         this.zoomXYOffsetLerpFactor = .2, this.PH = void 0, this.PH = bb
```

#### 1145. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9641` → after: `L8943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8943) · [Before (L9641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9641)

```diff
-         const qq = this.wB.Ma.o3().U3;
+         const bb = this.PH.xX.XT().pT;
```

#### 1146. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9645` → after: `L8947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8947) · [Before (L9645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9645)

```diff
-         const qq = this.wB.Ma.o3().U3;
+         const bb = this.PH.xX.XT().pT;
```

#### 1147. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9682` → after: `L8984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8984) · [Before (L9682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9682)

```diff
-           if (qq.zoom >= this.wB.camera.mI) return void this._adjustTowardsZoomLevel(qq)
+           if (bb.zoom >= this.PH.camera.sV) return void this._adjustTowardsZoomLevel(bb)
```

#### 1148. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9689` → after: `L8991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8991) · [Before (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9689)

```diff
-         const Yq = this.wB.bloxd.PD(this.wB.oR),
+         const Bb = this.PH.bloxd.JF(this.PH.bM),
```

#### 1149. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9696-L9709` → after: `L8998-L9011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8998-L9011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L8998-L9011) · [Before (L9696-L9709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9696-L9709)

```diff
-           xq = this.wB.Ma.o3().U3;
-         Math.abs(xq[0] - lq) < 1e-4 ? mq.x = lq : mq.x = xq[0] + (lq - xq[0]) * this.zoomXYOffsetLerpFactor, Math.abs(xq[1] - Oq) < 1e-4 ? mq.y = Oq : mq.y = xq[1] + (Oq - xq[1]) * this.zoomXYOffsetLerpFactor, xq[0] = mq.x, xq[1] = mq.y, this.wB.camera.targetX = mq.x, this.wB.cam … [truncated]
-       }
-     }
-     var uq = gq(37993),
-       Bq = gq(307),
-       Wq = gq(31),
-       Nq = gq(2668),
-       aq = gq(38140),
-       Vq = gq(38368),
-       dq = gq(37131),
-       jq = gq(37453),
-       Hq = gq(38366),
-       oq = gq(37176);
+           Lb = this.PH.xX.XT().pT;
+         Math.abs(Lb[0] - Ob) < 1e-4 ? Ub.x = Ob : Ub.x = Lb[0] + (Ob - Lb[0]) * this.zoomXYOffsetLerpFactor, Math.abs(Lb[1] - Gb) < 1e-4 ? Ub.y = Gb : Ub.y = Lb[1] + (Gb - Lb[1]) * this.zoomXYOffsetLerpFactor, Lb[0] = Ub.x, Lb[1] = Ub.y, this.PH.camera.targetX = Ub.x, this.PH.cam … [truncated]
+       }
+     }
+     var ab = hb(37610),
+       Hb = hb(314),
+       wb = hb(16),
+       Zb = hb(2560),
+       Xb = hb(37770),
+       pb = hb(38008),
+       ob = hb(36720),
+       Ab = hb(37086),
+       lb = hb(38e3),
+       Kb = hb(36764);
```

#### 1150. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9716-L9717` → after: `L9018-L9019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9018-L9019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9018-L9019) · [Before (L9716-L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9716-L9717)

```diff
-     var hq = gq(38050);
-     const nq = new dq.Na(1, 0, 0),
+     var Db = hb(37675);
+     const xb = new ob.YX(1, 0, 0),
```

#### 1151. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9723` → after: `L9025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9025) · [Before (L9723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9723)

```diff
-         super(qq, Eq, gq, lq), this.breakingItem = void 0, this.firstPersonMesh = null, this.firstPersonPosOffset = new dq.Na(0, 0, 0), this.firstPersonRotation = new dq.Na(0, 0, 0), this.drivingShare = 0, this.breakingItem = Yq, this.heldItemState = Eq
+         super(bb, ub, hb, Ob), this.breakingItem = void 0, this.firstPersonMesh = null, this.firstPersonPosOffset = new ob.YX(0, 0, 0), this.firstPersonRotation = new ob.YX(0, 0, 0), this.drivingShare = 0, this.breakingItem = Bb, this.heldItemState = ub
```

#### 1152. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9729` → after: `L9031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9031) · [Before (L9729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9729)

```diff
-         super.selected(qq, Eq), this.breakingItem.selected(qq), this.typeObj = qq, this.disposeOfMeshes(), this.firstPersonMesh = this.typeObj.getHeldMesh(Eq), this.firstPersonMesh.hG(!1), this.Pcq()
+         super.selected(bb, ub), this.breakingItem.selected(bb), this.typeObj = bb, this.disposeOfMeshes(), this.firstPersonMesh = this.typeObj.getHeldMesh(ub), this.firstPersonMesh.Zx(!1), this.LSb()
```

#### 1153. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9731-L9732` → after: `L9033-L9034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9033-L9034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9033-L9034) · [Before (L9731-L9732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9731-L9732)

```diff
-       AYq() {
-         return super.AYq(), this.trySwingBlock(Date.now()), this.breakingItem.AYq()
+       Fhb() {
+         return super.Fhb(), this.trySwingBlock(Date.now()), this.breakingItem.Fhb()
```

#### 1154. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9737-L9738` → after: `L9039-L9040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9039-L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9039-L9040) · [Before (L9737-L9738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9737-L9738)

```diff
-       cYq() {
-         return this.trySwingBlock(Date.now()), this.breakingItem.cYq()
+       fhb() {
+         return this.trySwingBlock(Date.now()), this.breakingItem.fhb()
```

#### 1155. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9740-L9741` → after: `L9042-L9043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9042-L9043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9042-L9043) · [Before (L9740-L9741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9740-L9741)

```diff
-       xYq() {
-         return this.breakingItem.xYq()
+       Vhb() {
+         return this.breakingItem.Vhb()
```

#### 1156. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9743-L9744` → after: `L9045-L9046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9045-L9046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9045-L9046) · [Before (L9743-L9744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9743-L9744)

```diff
-       OYq() {
-         return super.OYq(), this.breakingItem.OYq()
+       Ehb() {
+         return super.Ehb(), this.breakingItem.Ehb()
```

#### 1157. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9747` → after: `L9049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9049) · [Before (L9747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9747)

```diff
-         this.breakingItem.SB(qq, Eq) && this.trySwingBlock(Eq)
+         this.breakingItem.gH(bb, ub) && this.trySwingBlock(ub)
```

#### 1158. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9752` → after: `L9054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9054) · [Before (L9752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9752)

```diff
-             const qq = this.wB.Iy.REq(this.heldItemState.Zk);
+             const bb = this.PH.pW.nub(this.heldItemState.yN);
```

#### 1159. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9760-L9762` → after: `L9062-L9064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9062-L9064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9062-L9064) · [Before (L9760-L9762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9760-L9762)

```diff
-         const Eq = new dq.Na(.2 + this.firstPersonPosOffset.x, -.15 + this.firstPersonPosOffset.y, .17 + this.firstPersonPosOffset.z),
-           gq = new dq.Na(0, -3 * Math.PI / 7, -Math.PI / 6).add(this.firstPersonRotation);
-         (0, mq.c)(this.typeObj.type) && (gq.z = 0, gq.y -= Math.PI / 2);
+         const ub = new ob.YX(.2 + this.firstPersonPosOffset.x, -.15 + this.firstPersonPosOffset.y, .17 + this.firstPersonPosOffset.z),
+           hb = new ob.YX(0, -3 * Math.PI / 7, -Math.PI / 6).add(this.firstPersonRotation);
+         (0, Ub.d)(this.typeObj.type) && (hb.z = 0, hb.y -= Math.PI / 2);
```

#### 1160. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9765` → after: `L9067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9067) · [Before (L9765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9765)

```diff
-         if (lq && (Yq = (0, Hq.h)(gq, lq, bq), gq.A4(0)), qq - this.heldItemState._lastSwingStart < this.heldItemState.swingDuration) {
+         if (Ob && (Bb = (0, lb.i)(hb, Ob, zb), hb.N9(0)), bb - this.heldItemState._lastSwingStart < this.heldItemState.swingDuration) {
```

#### 1161. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9776` → after: `L9078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9078) · [Before (L9776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9776)

```diff
-         Yq ? (0, jq.t)(this.firstPersonMesh, Yq.x, Yq.y, Yq.z, Yq.w) : (this.firstPersonMesh.rotationQuaternion = null, this.firstPersonMesh.rotation.set(gq.x, gq.y, gq.z)), (0, jq.p)(this.firstPersonMesh, Eq.x, Eq.y, Eq.z)
+         Bb ? (0, Ab.q)(this.firstPersonMesh, Bb.x, Bb.y, Bb.z, Bb.w) : (this.firstPersonMesh.rotationQuaternion = null, this.firstPersonMesh.rotation.set(hb.x, hb.y, hb.z)), (0, Ab.p)(this.firstPersonMesh, ub.x, ub.y, ub.z)
```

#### 1162. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9779` → after: `L9081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9081) · [Before (L9779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9779)

```diff
-         if (this.reposeIfDrivingChanged(), !this.wB.Ma.VV) return;
+         if (this.reposeIfDrivingChanged(), !this.PH.xX.Sp) return;
```

#### 1163. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9781` → after: `L9083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9083) · [Before (L9781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9781)

```diff
-         null !== Eq && this.wB.Ma.LJ.getActuallyVisible(Eq) && this._updateHeldMeshLighting()
+         null !== ub && this.PH.xX.oN.getActuallyVisible(ub) && this._updateHeldMeshLighting()
```

#### 1164. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9785` → after: `L9087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9087) · [Before (L9785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9785)

```diff
-         return null !== (qq = null === (Eq = (0, hq.getRigController)(this.wB, this.heldItemState.Zk)) || void 0 === Eq ? void 0 : Eq.stateWeight("arms", "driving")) && void 0 !== qq ? qq : 0
+         return null !== (bb = null === (ub = (0, Db.getRigController)(this.PH, this.heldItemState.yN)) || void 0 === ub ? void 0 : ub.stateWeight("arms", "driving")) && void 0 !== bb ? bb : 0
```

#### 1165. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9790` → after: `L9092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9092) · [Before (L9790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9790)

```diff
-         qq !== this.drivingShare && (Math.abs(qq - this.drivingShare) > .01 || 0 === qq || 1 === qq) && (this.drivingShare = qq, this.Pcq())
+         bb !== this.drivingShare && (Math.abs(bb - this.drivingShare) > .01 || 0 === bb || 1 === bb) && (this.drivingShare = bb, this.LSb())
```

#### 1166. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9795-L9796` → after: `L9097-L9098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9097-L9098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9097-L9098) · [Before (L9795-L9796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9795-L9796)

```diff
-       Qcq() {
-         if (this.isFirstPersonLocalPlayer()) return this.firstPersonMesh.hG(!0), this.releaseThirdPersonThinObject(), this.firstPersonMesh.parent = this.wB.Ma.camera, this.firstPersonMesh.rc.set(.1, .1, .1), void this.setFirstPersonMeshPosition(Date.now());
+       YSb() {
+         if (this.isFirstPersonLocalPlayer()) return this.firstPersonMesh.Zx(!0), this.releaseThirdPersonThinObject(), this.firstPersonMesh.parent = this.PH.xX.camera, this.firstPersonMesh.pa.set(.1, .1, .1), void this.setFirstPersonMeshPosition(Date.now());
```

#### 1167. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9799` → after: `L9101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9101) · [Before (L9799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9799)

```diff
-         this.firstPersonMesh.hG(!1);
+         this.firstPersonMesh.Zx(!1);
```

#### 1168. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9805` → after: `L9107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9107) · [Before (L9805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9805)

```diff
-           if ((0, Hq.d)(this.typeObj, Eq.itemOffset, this.thirdPersonPose), this.drivingShare = this.holderDrivingShare(), this.drivingShare > 0) {
+           if ((0, lb.f)(this.typeObj, ub.itemOffset, this.thirdPersonPose), this.drivingShare = this.holderDrivingShare(), this.drivingShare > 0) {
```

#### 1169. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9807` → after: `L9109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9109) · [Before (L9807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9807)

```diff
-             Oq = qq.rotation, mq = qq.quaternion, xq = qq.usesQuaternion, Aq = this.drivingShare, cq = qq.quaternion, (0, oq.m)(Qq[0] * Aq, Qq[1] * Aq, Qq[2] * Aq, yq), dq.Matrix.FromQuaternionToRef(dq.Quaternion.FromArrayToRef(yq, 0, tq), rq), rq.transposeToRef(rq), xq ? dq.Matr … [truncated]
+             Gb = bb.rotation, Ub = bb.quaternion, Lb = bb.usesQuaternion, Yb = this.drivingShare, Sb = bb.quaternion, (0, Kb.o)(Cb[0] * Yb, Cb[1] * Yb, Cb[2] * Yb, db), ob.Matrix.FromQuaternionToRef(ob.Quaternion.FromArrayToRef(db, 0, rb), jb), jb.transposeToRef(jb), Lb ? ob.Matr … [truncated]
```

#### 1170. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9811` → after: `L9113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9113) · [Before (L9811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9811)

```diff
-           const [qq, gq, Oq] = null !== (Yq = Eq.itemOffset) && void 0 !== Yq ? Yq : [0, 0, 0], [mq, xq, Aq] = null !== (lq = Eq.rotation) && void 0 !== lq ? lq : [0, 0, 0];
+           const [bb, hb, Gb] = null !== (Bb = ub.itemOffset) && void 0 !== Bb ? Bb : [0, 0, 0], [Ub, Lb, Yb] = null !== (Ob = ub.rotation) && void 0 !== Ob ? Ob : [0, 0, 0];
```

#### 1171. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9821` → after: `L9123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9123) · [Before (L9821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9821)

```diff
-           rc: cq
+           pa: Sb
```

#### 1172. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9824` → after: `L9126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9126) · [Before (L9824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9824)

```diff
-         const uq = (0, mq.c)(this.typeObj.type),
+         const ab = (0, Ub.d)(this.typeObj.type),
```

#### 1173. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9831-L9833` → after: `L9133-L9135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9133-L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9133-L9135) · [Before (L9831-L9833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9831-L9833)

```diff
-           dq.Na.TransformCoordinatesFromFloatsToRef(Wq, Nq, aq, qq, xq)
-         } else xq.Vqq(Wq, Nq, aq);
-         uq ? (cq.Vqq(Bq, Bq, Bq), Aq.Vqq(Yq, Math.PI / 2 + lq, -Math.PI / 2 + Oq)) : "TwoDTool" === this.typeObj.type || this.typeObj.holdAsAiming ? (cq.Vqq(Bq, -Bq, Bq), Aq.Vqq(Math.PI + Yq, Math.PI / 2 + lq, .35 * Math.PI + Oq)) : (cq.Vqq(Bq, -Bq, Bq), Aq.Vqq(Math.PI + Yq, Math … [truncated]
+           ob.YX.TransformCoordinatesFromFloatsToRef(wb, Zb, Xb, bb, Lb)
+         } else Lb.M_(wb, Zb, Xb);
+         ab ? (Sb.M_(Hb, Hb, Hb), Yb.M_(Bb, Math.PI / 2 + Ob, -Math.PI / 2 + Gb)) : "TwoDTool" === this.typeObj.type || this.typeObj.holdAsAiming ? (Sb.M_(Hb, -Hb, Hb), Yb.M_(Math.PI + Bb, Math.PI / 2 + Ob, .35 * Math.PI + Gb)) : (Sb.M_(Hb, -Hb, Hb), Yb.M_(Math.PI + Bb, Math.PI /  … [truncated]
```

#### 1174. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9846-L9850` → after: `L9148-L9152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9148-L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9148-L9152) · [Before (L9846-L9850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9846-L9850)

```diff
-     var Mq = gq(38374),
-       Tq = gq(38074),
-       zq = gq(37794),
-       Sq = gq(9379),
-       pq = gq(9433);
+     var tb = hb(38011),
+       Jb = hb(37708),
+       eb = hb(37417),
+       Nb = hb(9181),
+       sb = hb(9235);
```

#### 1175. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9890-L9899` → after: `L9192-L9201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9192-L9201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9192-L9201) · [Before (L9890-L9899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9890-L9899)

```diff
-     var Rq = gq(38399),
-       Uq = gq(9440),
-       Fq = gq(38202),
-       sq = gq(37407),
-       Xq = gq(3595),
-       wq = gq(37417),
-       Kq = gq(24),
-       Cq = gq(1367),
-       Iq = gq(38016),
-       eq = gq(38025);
+     var qb = hb(38042),
+       Eb = hb(9244),
+       yb = hb(37824),
+       Vb = hb(37027),
+       Fb = hb(3516),
+       fb = hb(37044),
+       kb = hb(13),
+       Tb = hb(1288),
+       cb = hb(37635),
+       Qb = hb(37644);
```

#### 1176. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9906-L9907` → after: `L9208-L9209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9208-L9209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9208-L9209) · [Before (L9906-L9907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9906-L9907)

```diff
-             const Yq = (0, Nq.e)();
-             return Yq.FW.uC(Yq.kB.mC(qq, Eq, gq))
+             const Bb = (0, Zb.g)();
+             return Bb.Mw.bV(Bb.eH.Qy(bb, ub, hb))
```

#### 1177. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9912` → after: `L9214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9214) · [Before (L9912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9912)

```diff
-           return !(null === (qq = (0, Nq.e)().Uy) || void 0 === qq || !qq.ezBridging) && Kq.b.get("clientEscMenuOptions").ezBridging
+           return !(null === (bb = (0, Zb.g)().OW) || void 0 === bb || !bb.ezBridging) && kb.d.get("clientEscMenuOptions").ezBridging
```

#### 1178. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9917-L9920` → after: `L9219-L9222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9219-L9222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9219-L9222) · [Before (L9917-L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9917-L9920)

```diff
-           const Yq = (0, Nq.e)();
-           if (Yq.Kqq) return null;
-           if (Yq.Cqq) return null;
-           const lq = Yq.Iy.Py(Yq.oR),
+           const Bb = (0, Zb.g)();
+           if (Bb.rbb) return null;
+           if (Bb.jbb) return null;
+           const Ob = Bb.pW.iK(Bb.bM),
```

#### 1179. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9922` → after: `L9224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9224) · [Before (L9922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9922)

```diff
-             mq = Kq.b.get("isTouchScreen") || (0, Cq.c)() ? void 0 : lq,
+             Ub = kb.d.get("isTouchScreen") || (0, Tb.f)() ? void 0 : Ob,
```

#### 1180. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9924-L9929` → after: `L9226-L9231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9226-L9231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9226-L9231) · [Before (L9924-L9929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9924-L9929)

```diff
-           Yq.bD(null !== (Eq = Yq.cEq) && void 0 !== Eq ? Eq : Yq.camera.ND(), xq);
-           const Aq = null !== (gq = Yq.uEq) && void 0 !== gq ? gq : Yq.camera.RD(),
-             cq = (Yq.cEq ? Yq.camera.mI : 0) + (0, Nq.b)().getBlockReach(Yq.oR),
-             uq = Yq.pickBlock(xq, Aq, cq, ((Eq, gq, lq, xq) => !!Yq.wqq(Eq) || !(lq > Oq || Yq.Iy.MEq(gq, lq, xq, Yq.FW.Xs(qq))) && (!!Iq.d.has(gq, lq, xq) || (0, zq.s)(this.isSolidAt, gq, lq, xq, mq))));
-           if (!uq || Yq.wqq(uq.Y_)) return null;
-           if (Iq.d.has(uq.position[0], uq.position[1], uq.position[2])) return null;
+           Bb.kF(null !== (ub = Bb.Ibb) && void 0 !== ub ? ub : Bb.camera.KF(), Lb);
+           const Yb = null !== (hb = Bb.Pbb) && void 0 !== hb ? hb : Bb.camera.Zk(),
+             Sb = (Bb.Ibb ? Bb.camera.sV : 0) + (0, Zb.e)().getBlockReach(Bb.bM),
+             ab = Bb.pickBlock(Lb, Yb, Sb, ((ub, hb, Ob, Lb) => !!Bb.Cbb(ub) || !(Ob > Gb || Bb.pW.Xub(hb, Ob, Lb, Bb.Mw.Mq(bb))) && (!!cb.c.has(hb, Ob, Lb) || (0, eb.l)(this.isSolidAt, hb, Ob, Lb, Ub))));
+           if (!ab || Bb.Cbb(ab.vR)) return null;
+           if (cb.c.has(ab.position[0], ab.position[1], ab.position[2])) return null;
```

#### 1181. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9931-L9932` → after: `L9233-L9234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9233-L9234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9233-L9234) · [Before (L9931-L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9931-L9932)

```diff
-           const Bq = (0, zq.u)(xq, Aq, uq.position);
-           return Bq > cq ? null : this.canPlaceAt(uq.position, uq.Y_, qq) ? Yq.zW(xq, Aq, Bq + zq.c, Yq.wqq) ? null : {
+           const Hb = (0, eb.r)(Lb, Yb, ab.position);
+           return Hb > Sb ? null : this.canPlaceAt(ab.position, ab.vR, bb) ? Bb.xw(Lb, Yb, Hb + eb.b, Bb.Cbb) ? null : {
```

#### 1182. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9939` → after: `L9241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9241) · [Before (L9939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9939)

```diff
-           const Eq = (0, Nq.e)();
+           const ub = (0, Zb.g)();
```

#### 1183. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9941` → after: `L9243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9243) · [Before (L9941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9941)

```diff
-           this.hadTargetLastFrame = !0, qq.tower || Eq.gEq || Eq.Ma.lEq(!1, null, null);
+           this.hadTargetLastFrame = !0, bb.tower || ub.vbb || ub.xX.Jbb(!1, null, null);
```

#### 1184. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9943-L9944` → after: `L9245-L9246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9245-L9246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9245-L9246) · [Before (L9943-L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9943-L9944)

```diff
-             Yq = Eq.TEq(qq.cell, null, Dq);
-           (0, jq.p)(gq, Yq[0] + .5, Yq[1] + .5, Yq[2] + .5), (0, wq.e)(Eq, gq, qq.cell[0], qq.cell[1], qq.cell[2]), gq.hG(!0)
+             Bb = ub.oub(bb.cell, null, Rb);
+           (0, Ab.p)(hb, Bb[0] + .5, Bb[1] + .5, Bb[2] + .5), (0, fb.f)(ub, hb, bb.cell[0], bb.cell[1], bb.cell[2]), hb.Zx(!0)
```

#### 1185. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9947` → after: `L9249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9249) · [Before (L9947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9947)

```diff
-           return Eq !== gq && (0, Nq.b)().playerCanPlaceItem((0, Nq.e)().oR, qq[0], qq[1], qq[2], gq)
+           return ub !== hb && (0, Zb.e)().playerCanPlaceItem((0, Zb.g)().bM, bb[0], bb[1], bb[2], hb)
```

#### 1186. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9951` → after: `L9253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9253) · [Before (L9951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9951)

```diff
-           null === (qq = this.ghostMesh) || void 0 === qq || qq.hG(!1), this.hadTargetLastFrame && (this.hadTargetLastFrame = !1, (0, Nq.e)().eqq(!0))
+           null === (bb = this.ghostMesh) || void 0 === bb || bb.Zx(!1), this.hadTargetLastFrame && (this.hadTargetLastFrame = !1, (0, Zb.g)().Dbb(!0))
```

#### 1187. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9954` → after: `L9256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9256) · [Before (L9954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9954)

```diff
-           return this.ghostMesh || (this.ghostMesh = (0, eq.d)((0, Nq.e)())), this.ghostMesh
+           return this.ghostMesh || (this.ghostMesh = (0, Qb.d)((0, Zb.g)())), this.ghostMesh
```

#### 1188. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9957-L9959` → after: `L9259-L9261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9259-L9261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9259-L9261) · [Before (L9957-L9959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9957-L9959)

```diff
-     var YE = gq(38379),
-       lE = gq(38386),
-       OE = gq(278);
+     var Bu = hb(38017),
+       Ou = hb(38024),
+       Gu = hb(275);
```

#### 1189. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9963-L9964` → after: `L9265-L9266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9265-L9266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9265-L9266) · [Before (L9963-L9964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9963-L9964)

```diff
-         if (!(0, OE.f)()) return !1;
-         return !(null === (qq = (0, Nq.e)().Uy) || void 0 === qq || !qq.ezTowering) && Kq.b.get("clientEscMenuOptions").ezTowering
+         if (!(0, Gu.c)()) return !1;
+         return !(null === (bb = (0, Zb.g)().OW) || void 0 === bb || !bb.ezTowering) && kb.d.get("clientEscMenuOptions").ezTowering
```

#### 1190. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9967-L9968` → after: `L9269-L9270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9269-L9270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9269-L9270) · [Before (L9967-L9968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9967-L9968)

```diff
-         const Eq = (0, Nq.e)(),
-           gq = Eq.Kqq;
+         const ub = (0, Zb.g)(),
+           hb = ub.rbb;
```

#### 1191. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9970-L9978` → after: `L9272-L9280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9272-L9280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9272-L9280) · [Before (L9970-L9978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9970-L9978)

```diff
-         if (!Eq.FW.uC(gq.Y_) || Sq.i[gq.Y_].canBePlacedOver) return null;
-         const Yq = Eq.oR,
-           [lq, Oq, mq] = gq.MV;
-         if (Oq !== Math.floor(Eq.Iy.Py(Yq)[1])) return null;
-         const xq = Eq.Iy.REq(Yq);
-         if (xq.jumping || 0 !== xq.speed || null !== (0, Nq.b)().getRiddenVehicleEId(Yq)) return null;
-         if (Eq.Iy.FX(Yq).resting[1] >= 0 && !0 !== Eq.FW.sW(gq.Y_)) return null;
-         if (Iq.d.has(lq, Oq, mq)) return null;
-         const Aq = (qq, gq, Yq) => Eq.Ay([qq, gq, Yq]),
+         if (!ub.Mw.bV(hb.vR) || Nb.i[hb.vR].canBePlacedOver) return null;
+         const Bb = ub.bM,
+           [Ob, Gb, Ub] = hb.gp;
+         if (Gb !== Math.floor(ub.pW.iK(Bb)[1])) return null;
+         const Lb = ub.pW.nub(Bb);
+         if (Lb.jumping || 0 !== Lb.speed || null !== (0, Zb.e)().getRiddenVehicleEId(Bb)) return null;
+         if (ub.pW.Qq(Bb).resting[1] >= 0 && !0 !== ub.Mw.mw(hb.vR)) return null;
+         if (cb.c.has(Ob, Gb, Ub)) return null;
+         const Yb = (bb, hb, Bb) => ub.rK([bb, hb, Bb]),
```

#### 1192. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9980-L9982` → after: `L9282-L9284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9282-L9284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9282-L9284) · [Before (L9980-L9982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9980-L9982)

```diff
-         if (0 !== cq && !Sq.i[cq].wW && !Sq.i[cq].canBePlacedOver || kq(Aq, gq.position, gq.normal, qq)) return null;
-         const uq = Eq.FW.Xs(qq);
-         return Eq.Iy.MEq(lq, Oq, mq, uq) && (0, Nq.b)().playerCanPlaceItem(Yq, lq, Oq, mq, qq, !0) && this.liftsOnto(lq, Oq, mq, qq) ? {
+         if (0 !== Sb && !Nb.i[Sb].Pw && !Nb.i[Sb].canBePlacedOver || Pb(Yb, hb.position, hb.normal, bb)) return null;
+         const ab = ub.Mw.Mq(bb);
+         return ub.pW.Xub(Ob, Gb, Ub, ab) && (0, Zb.e)().playerCanPlaceItem(Bb, Ob, Gb, Ub, bb, !0) && this.liftsOnto(Ob, Gb, Ub, bb) ? {
```

#### 1193. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9989` → after: `L9291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9291) · [Before (L9989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9989)

```diff
-         const lq = (0, Nq.e)(),
+         const Ob = (0, Zb.g)(),
```

#### 1194. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9992-L9993` → after: `L9294-L9295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9294-L9295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9294-L9295) · [Before (L9992-L9993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9992-L9993)

```diff
-             kB: mq,
-             BW: xq
+             eH: Ub,
+             Ow: Lb
```

#### 1195. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9995` → after: `L9297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9297) · [Before (L9995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9995)

```diff
-           Aq = lq.Iy.FX(lq.oR);
+           Yb = Ob.pW.Qq(Ob.bM);
```

#### 1196. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L9997` → after: `L9299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9299) · [Before (L9997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L9997)

```diff
-         return (0, YE.f)(((Oq, Aq, cq) => {
+         return (0, Bu.g)(((Gb, Yb, Sb) => {
```

#### 1197. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10001-L10004` → after: `L9303-L9306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9303-L9306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9303-L9306) · [Before (L10001-L10004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10001-L10004)

```diff
-           if (uq !== qq || Bq !== Eq || Wq !== gq) return mq.NW(uq, Bq, Wq);
-           const Nq = lq.FW.sW(Yq);
-           return (0, lE.d)(qq, Eq, gq, Yq, Nq, mq.EX, mq.SO, mq.BX)
-         }), Oq.sF, Aq.GB) > 0
+           if (ab !== bb || Hb !== ub || wb !== hb) return Ub.Uw(ab, Hb, wb);
+           const Zb = Ob.Mw.mw(Bb);
+           return (0, Ou.e)(bb, ub, hb, Bb, Zb, Ub.mq, Ub.VG, Ub.Iq)
+         }), Gb.hq, Yb.vH) > 0
```

#### 1198. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10007-L10008` → after: `L9309-L9310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9309-L9310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9309-L9310) · [Before (L10007-L10008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10007-L10008)

```diff
-     var xE = gq(38173),
-       AE = gq(37910);
+     var Lu = hb(37795),
+       Yu = hb(37539);
```

#### 1199. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10011` → after: `L9313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9313) · [Before (L10011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10011)

```diff
-         super(...arguments), this.assistTarget = null, this.blockAt = (qq, Eq, gq) => this.wB.Ay([qq, Eq, gq])
+         super(...arguments), this.assistTarget = null, this.blockAt = (bb, ub, hb) => this.PH.rK([bb, ub, hb])
```

#### 1200. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10013-L10015` → after: `L9315-L9317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9315-L9317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9315-L9317) · [Before (L10013-L10015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10013-L10015)

```diff
-       ycq() {
-         const qq = super.ycq();
-         return qq.tookAction || qq.preventPlacement ? qq : (this.placeBlock(), {
+       SSb() {
+         const bb = super.SSb();
+         return bb.tookAction || bb.preventPlacement ? bb : (this.placeBlock(), {
```

#### 1201. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10020-L10022` → after: `L9322-L9324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9322-L9324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9322-L9324) · [Before (L10020-L10022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10020-L10022)

```diff
-       cYq() {
-         const qq = super.cYq();
-         return qq.tookAction || qq.preventPlacement ? qq : (this.placeBlock(), {
+       fhb() {
+         const bb = super.fhb();
+         return bb.tookAction || bb.preventPlacement ? bb : (this.placeBlock(), {
```

#### 1202. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10028` → after: `L9330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9330) · [Before (L10028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10028)

```diff
-         if (super.SB(qq, Eq), this.heldItemState.Zk === this.wB.oR) {
+         if (super.gH(bb, ub), this.heldItemState.yN === this.PH.bM) {
```

#### 1203. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10032` → after: `L9334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9334) · [Before (L10032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10032)

```diff
-           null !== gq && (0, zq.t)(gq) ? this.wB.Kqq ? this.assistTarget = Eq ? mE.computeTarget(gq) : null : this.assistTarget = qq ? gE.computeTarget(gq) : null : this.assistTarget = null
+           null !== hb && (0, eb.p)(hb) ? this.PH.rbb ? this.assistTarget = ub ? Uu.computeTarget(hb) : null : this.assistTarget = bb ? hu.computeTarget(hb) : null : this.assistTarget = null
```

#### 1204. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10039` → after: `L9341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9341) · [Before (L10039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10039)

```diff
-         super.reset(), this.heldItemState.Zk === this.wB.oR && (this.assistTarget = null, gE.hide())
+         super.reset(), this.heldItemState.yN === this.PH.bM && (this.assistTarget = null, hu.hide())
```

#### 1205. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10044` → after: `L9346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9346) · [Before (L10044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10044)

```diff
-           yu: Eq.cell,
+           la: ub.cell,
```

#### 1206. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10046` → after: `L9348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9348) · [Before (L10046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10046)

```diff
-           jF: null,
+           mI: null,
```

#### 1207. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10052` → after: `L9354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9354) · [Before (L10052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10052)

```diff
-         const gq = this.wB.Kqq;
+         const hb = this.PH.rbb;
```

#### 1208. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10056-L10057` → after: `L9358-L9359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9358-L9359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9358-L9359) · [Before (L10056-L10057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10056-L10057)

```diff
-           jF: gq.jF,
-           targetId: gq.Y_,
+           mI: hb.mI,
+           targetId: hb.vR,
```

#### 1209. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10063` → after: `L9365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9365) · [Before (L10063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10063)

```diff
-           yu: gq.position,
+           la: hb.position,
```

#### 1210. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10067` → after: `L9369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9369) · [Before (L10067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10067)

```diff
-         return lq && (0, Nq.b)().posSatisfiesModifyConstraints(this.wB.oR, lq.pos[0], lq.pos[1], lq.pos[2]) ? {
+         return Ob && (0, Zb.e)().posSatisfiesModifyConstraints(this.PH.bM, Ob.pos[0], Ob.pos[1], Ob.pos[2]) ? {
```

#### 1211. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10069` → after: `L9371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9371) · [Before (L10069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10069)

```diff
-           yu: lq.pos,
+           la: Ob.pos,
```

#### 1212. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10073` → after: `L9375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9375) · [Before (L10073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10073)

```diff
-           yu: gq.MV,
+           la: hb.gp,
```

#### 1213. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10078-L10080` → after: `L9380-L9382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9380-L9382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9380-L9382) · [Before (L10078-L10080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10078-L10080)

```diff
-         if (!this.wB.Iy.mEq(this.wB.oR, this.wB.Iy.names.inventory)) return this.wB.Uy ? Oq.C[this.wB.Uy.defaultBlock].id : null;
-         const qq = this.wB.Iy.FEq(this.wB.oR).selectedItem;
-         return qq && (0, mq.g)(qq.typeObj.type) ? qq.typeObj.id : null
+         if (!this.PH.pW.Nbb(this.PH.bM, this.PH.pW.names.inventory)) return this.PH.OW ? Gb.z[this.PH.OW.defaultBlock].id : null;
+         const bb = this.PH.pW.Dub(this.PH.bM).selectedItem;
+         return bb && (0, Ub.f)(bb.typeObj.type) ? bb.typeObj.id : null
```

#### 1214. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10084` → after: `L9386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9386) · [Before (L10084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10084)

```diff
-         const Eq = this.wB.Iy.mEq(this.wB.oR, this.wB.Iy.names.inventory),
+         const ub = this.PH.pW.Nbb(this.PH.bM, this.PH.pW.names.inventory),
```

#### 1215. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10088` → after: `L9390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9390) · [Before (L10088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10088)

```diff
-           yu: Yq,
+           la: Bb,
```

#### 1216. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10093-L10097` → after: `L9395-L9399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9395-L9399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9395-L9399) · [Before (L10093-L10097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10093-L10097)

```diff
-           Uy: uq
-         } = this.wB, Bq = (0, zq.f)(uq.creative, Aq ? uq.ezToweringGrowMs : uq.ezBridgingGrowMs), aq = mq && Bq > 0;
-         if (aq && Iq.d.has(Yq[0], Yq[1], Yq[2])) return;
-         const Vq = (0, Nq.b)().posSatisfiesModifyConstraints(this.wB.oR, Yq[0], Yq[1], Yq[2]);
-         if (qq && (Vq || "Moonstone Explosive" === (0, Nq.b)().getItemName(qq))) {
+           OW: ab
+         } = this.PH, Hb = (0, eb.c)(ab.creative, Yb ? ab.ezToweringGrowMs : ab.ezBridgingGrowMs), Xb = Ub && Hb > 0;
+         if (Xb && cb.c.has(Bb[0], Bb[1], Bb[2])) return;
+         const pb = (0, Zb.e)().posSatisfiesModifyConstraints(this.PH.bM, Bb[0], Bb[1], Bb[2]);
+         if (bb && (pb || "Moonstone Explosive" === (0, Zb.e)().getItemName(bb))) {
```

#### 1217. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10099` → after: `L9401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9401) · [Before (L10099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10099)

```diff
-           if (null !== cq ? qq = cq : null === Oq.C[qq].meta.rot && null === Oq.C[qq].meta.halfblockPlacement || (qq = this.getPlaceBlockRotatedId(qq, gq)), qq = (0, Rq.c)(this.blockAt, uq, Vq, jq, qq), (0, Nq.b)().playerCanPlaceItem(this.wB.oR, uq, Vq, jq, qq, Aq)) {
+           if (null !== Sb ? bb = Sb : null === Gb.z[bb].meta.rot && null === Gb.z[bb].meta.halfblockPlacement || (bb = this.getPlaceBlockRotatedId(bb, hb)), bb = (0, qb.b)(this.blockAt, ab, pb, Ab, bb), (0, Zb.e)().playerCanPlaceItem(this.PH.bM, ab, pb, Ab, bb, Yb)) {
```

#### 1218. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10101-L10103` → after: `L9403-L9405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9403-L9405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9403-L9405) · [Before (L10101-L10103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10101-L10103)

```diff
-             const gq = this.wB.Ay([uq, Vq, jq]);
-             if ((null !== cq || 0 === gq || Sq.i[gq].wW || null !== (dq = Sq.i[gq]) && void 0 !== dq && dq.canBePlacedOver) && qq !== gq) {
-               this.wB.Iy.REq(this.heldItemState.Zk).setArmsAreSwinging();
+             const hb = this.PH.rK([ab, pb, Ab]);
+             if ((null !== Sb || 0 === hb || Nb.i[hb].Pw || null !== (ob = Nb.i[hb]) && void 0 !== ob && ob.canBePlacedOver) && bb !== hb) {
+               this.PH.pW.nub(this.heldItemState.yN).setArmsAreSwinging();
```

#### 1219. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10107-L10113` → after: `L9409-L9415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9409-L9415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9409-L9415) · [Before (L10107-L10113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10107-L10113)

```diff
-                   (0, xq.sendColyMessage)(Xq.yg, {
-                     yu: qq,
-                     uc: Eq,
-                     tu: (0, Oq.n)(),
-                     ru: gq,
-                     vu: Yq,
-                     IO: lq
+                   (0, Lb.sendColyMessage)(Fb.gg, {
+                     la: bb,
+                     US: ub,
+                     Ka: (0, Gb.k)(),
+                     Wa: hb,
+                     Ca: Bb,
+                     LU: Ob
```

#### 1220. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10115-L10116` → after: `L9417-L9418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9417-L9418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9417-L9418) · [Before (L10115-L10116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10115-L10116)

```diff
-                 }(cq, qq, mq, Aq, (0, Nq.b)().client.inventoryPrediction.record(xE.e.place((() => dq)))), aq ? Iq.d.addUnconfirmed(cq, qq, Bq) : ((0, Nq.b)().xJ(cq[0], cq[1], cq[2], qq, void 0, this.wB.oR), (0, AE.h)(cq[0], cq[1], cq[2]), (0, Oq.E)(qq, !1)), (0, Nq.b)().client.tr … [truncated]
-                 const qq = this.wB.Iy.FEq(this.wB.oR);
+                 }(Sb, bb, Ub, Yb, (0, Zb.e)().client.inventoryPrediction.record(Lu.e.place((() => ob)))), Xb ? cb.c.addUnconfirmed(Sb, bb, Hb) : ((0, Zb.e)().vJ(Sb[0], Sb[1], Sb[2], bb, void 0, this.PH.bM), (0, Yu.g)(Sb[0], Sb[1], Sb[2]), (0, Gb.A)(bb, !1)), (0, Zb.e)().client.tr … [truncated]
+                 const bb = this.PH.pW.Dub(this.PH.bM);
```

#### 1221. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10119` → after: `L9421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9421) · [Before (L10119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10119)

```diff
-               mq || ("Board" === this.bloxd.getMetaInfo(qq).rootName && Wq.i.TV("EditBoard", {
+               Ub || ("Board" === this.bloxd.getMetaInfo(bb).rootName && wb.i.vp("EditBoard", {
```

#### 1222. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10121` → after: `L9423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9423) · [Before (L10121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10121)

```diff
-               }), "Custom Lobby Block" === this.bloxd.getMetaInfo(qq).rootName && Wq.i.TV("EditCustomLobbyBlock", {
+               }), "Custom Lobby Block" === this.bloxd.getMetaInfo(bb).rootName && wb.i.vp("EditCustomLobbyBlock", {
```

#### 1223. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10126-L10127` → after: `L9428-L9429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9428-L9429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9428-L9429) · [Before (L10126-L10127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10126-L10127)

```diff
-         } else Vq || !this.wB.Uy.canChange && !this.wB.Uy.cantChangeError && "You cannot modify this block" === this.wB.Uy.cantChangeError || Wq.i.TV("showBottomMessage", {
-           message: this.wB.Uy.cantBuildError || this.wB.Uy.cantChangeError,
+         } else pb || !this.PH.OW.canChange && !this.PH.OW.cantChangeError && "You cannot modify this block" === this.PH.OW.cantChangeError || wb.i.vp("showBottomMessage", {
+           message: this.PH.OW.cantBuildError || this.PH.OW.cantChangeError,
```

#### 1224. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10133` → after: `L9435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9435) · [Before (L10133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10133)

```diff
-           yu: gq,
+           la: hb,
```

#### 1225. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10135` → after: `L9437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9437) · [Before (L10135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10135)

```diff
-           jF: lq,
+           mI: Ob,
```

#### 1226. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10145` → after: `L9447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9447) · [Before (L10145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10145)

```diff
-         if ((0, Uq.y)(Sq.i[xq])) return Sq.i[this.getVariantName(mq, this.getFacingRot(), null)].id;
+         if ((0, Eb.A)(Nb.i[Lb])) return Nb.i[this.getVariantName(Ub, this.getFacingRot(), null)].id;
```

#### 1227. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10148-L10149` → after: `L9450-L9451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9450-L9451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9450-L9451) · [Before (L10148-L10149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10148-L10149)

```diff
-         if (Aq && (uq = 1 === Yq[1] ? "bot" : -1 === Yq[1] ? "top" : "side"), 0 === Yq[1] ? 1 === Yq[0] ? cq = 2 : 1 === Yq[2] ? cq = 1 : -1 === Yq[0] ? cq = 4 : (-1 === Yq[2] || console.error("invalid normal", Yq), cq = 3) : cq = Aq && "rotatable" !== Sq.i[xq].model ? 1 : this.g … [truncated]
-           const qq = (0, Fq.j)(this.blockAt, gq, Oq, Yq, cq);
+         if (Yb && (ab = 1 === Bb[1] ? "bot" : -1 === Bb[1] ? "top" : "side"), 0 === Bb[1] ? 1 === Bb[0] ? Sb = 2 : 1 === Bb[2] ? Sb = 1 : -1 === Bb[0] ? Sb = 4 : (-1 === Bb[2] || console.error("invalid normal", Bb), Sb = 3) : Sb = Yb && "rotatable" !== Nb.i[Lb].model ? 1 : this.g … [truncated]
+           const bb = (0, yb.q)(this.blockAt, hb, Gb, Bb, Sb);
```

#### 1228. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10157` → after: `L9459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9459) · [Before (L10157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10157)

```diff
-         return Yq[1] = `rot${Eq}`, null !== gq && (Yq[2] = gq), Yq.join("|") === Sq.i[qq].meta.metaStr ? qq : [qq, ...Yq].join("|")
+         return Bb[1] = `rot${ub}`, null !== hb && (Bb[2] = hb), Bb.join("|") === Nb.i[bb].meta.metaStr ? bb : [bb, ...Bb].join("|")
```

#### 1229. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10160` → after: `L9462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9462) · [Before (L10160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10160)

```diff
-         const qq = Bq.c.mod(sq.d.getAimHeading(this.wB) + Math.PI, 2 * Math.PI);
+         const bb = Hb.d.mod(Vb.c.getAimHeading(this.PH) + Math.PI, 2 * Math.PI);
```

#### 1230. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10164-L10168` → after: `L9466-L9470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9466-L9470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9466-L9470) · [Before (L10164-L10168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10164-L10168)

```diff
-     var uE = gq(36789),
-       BE = gq(37086);
-     const WE = (0, BE.k)(["Wood Crossbow", "Stone Crossbow", "Iron Crossbow", "Gold Crossbow", "Diamond Crossbow"], "Crossbow"),
-       NE = [BE.m["Timed Spike Bomb"].id],
-       aE = (0, BE.k)(["Wood Bow", "Stone Bow", "Iron Bow", "Gold Bow", "Diamond Bow"], "Bow");
+     var au = hb(36386),
+       Hu = hb(36684);
+     const wu = (0, Hu.g)(["Wood Crossbow", "Stone Crossbow", "Iron Crossbow", "Gold Crossbow", "Diamond Crossbow"], "Crossbow"),
+       Zu = [Hu.j["Timed Spike Bomb"].id],
+       Xu = (0, Hu.g)(["Wood Bow", "Stone Bow", "Iron Bow", "Gold Bow", "Diamond Bow"], "Bow");
```

#### 1231. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10174` → after: `L9476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9476) · [Before (L10174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10174)

```diff
-         super.selected(qq, Eq), this.heldItemState.Zk === this.wB.oR && (this.inInvenIdx = this.bloxd.sEq(this.wB.oR).getSelectedSlotIndex())
+         super.selected(bb, ub), this.heldItemState.yN === this.PH.bM && (this.inInvenIdx = this.bloxd.xub(this.PH.bM).getSelectedSlotIndex())
```

#### 1232. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10176` → after: `L9478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9478) · [Before (L10176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10176)

```diff
-       tcq() {
+       aSb() {
```

#### 1233. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10179-L10180` → after: `L9481-L9482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9481-L9482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9481-L9482) · [Before (L10179-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10179-L10180)

```diff
-       lYq() {
-         return super.lYq(), this.upFire()
+       qhb() {
+         return super.qhb(), this.upFire()
```

#### 1234. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10189` → after: `L9491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9491) · [Before (L10189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10189)

```diff
-         return super.tcq().tookAction || this.startCharging(Date.now()), {
+         return super.aSb().tookAction || this.startCharging(Date.now()), {
```

#### 1235. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10201-L10202` → after: `L9503-L9504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9503-L9504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9503-L9504) · [Before (L10201-L10202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10201-L10202)

```diff
-         if (super.SB(qq, Eq), this.heldItemState.Zk !== this.wB.oR) return;
-         const gq = this.bloxd.sEq(this.wB.oR);
+         if (super.gH(bb, ub), this.heldItemState.yN !== this.PH.bM) return;
+         const hb = this.bloxd.xub(this.PH.bM);
```

#### 1236. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10205-L10206` → after: `L9507-L9508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9507-L9508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9507-L9508) · [Before (L10205-L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10205-L10206)

```diff
-             lq = this.bloxd.getItemStat(this.wB.oR, this.getHeldName(), "chargeStages");
-           if (this.typeObj.requiresArrow && null === this.bloxd.getNearestArrowInInven(this.wB.oR, this.inInvenIdx)) this.finishCharging(!1, Eq), this.sendFinishCharging(!1, 0, null);
+             Ob = this.bloxd.getItemStat(this.PH.bM, this.getHeldName(), "chargeStages");
+           if (this.typeObj.requiresArrow && null === this.bloxd.getNearestArrowInInven(this.PH.bM, this.inInvenIdx)) this.finishCharging(!1, ub), this.sendFinishCharging(!1, 0, null);
```

#### 1237. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10208` → after: `L9510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9510) · [Before (L10208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10208)

```diff
-             const Oq = this.typeObj.chargeTime * Bq.g.getQuickChargeMultiplier(gq.getItemAtIdx(this.inInvenIdx)) / lq * qq;
+             const Gb = this.typeObj.chargeTime * Hb.f.getQuickChargeMultiplier(hb.getItemAtIdx(this.inInvenIdx)) / Ob * bb;
```

#### 1238. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10217` → after: `L9519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9519) · [Before (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10217)

```diff
-                 const Eq = WE.includes(this.typeObj.meta.rootId) ? xE.e.replace(this.inInvenIdx, qq, `${(0,BE.h)(this.typeObj.meta.rootName)} Crossbow Charged`) : null;
+                 const ub = wu.includes(this.typeObj.meta.rootId) ? Lu.e.replace(this.inInvenIdx, bb, `${(0,Hu.d)(this.typeObj.meta.rootName)} Crossbow Charged`) : null;
```

#### 1239. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10221` → after: `L9523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9523) · [Before (L10221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10221)

```diff
-               (0, Nq.b)().getMetaInfo(Oq).rootId === (0, Nq.b)().getMetaInfo(qq).rootId && this.startCharging(Eq)
+               (0, Zb.e)().getMetaInfo(Gb).rootId === (0, Zb.e)().getMetaInfo(bb).rootId && this.startCharging(ub)
```

#### 1240. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10224` → after: `L9526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9526) · [Before (L10224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10224)

```diff
-           this.typeObj.chargeSound && Eq - this.lastChargeSoundTime > 200 && (uE.b.play(this.typeObj.chargeSound, .55 + .1 * Math.random()).rate(.9 + .2 * Math.random()), this.lastChargeSoundTime = Eq)
+           this.typeObj.chargeSound && ub - this.lastChargeSoundTime > 200 && (au.e.play(this.typeObj.chargeSound, .55 + .1 * Math.random()).rate(.9 + .2 * Math.random()), this.lastChargeSoundTime = ub)
```

#### 1241. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10229` → after: `L9531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9531) · [Before (L10229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10229)

```diff
-           const qq = this.heldItemState.Zk === this.wB.oR ? this.typeObj.chargeTime * Bq.g.getQuickChargeMultiplier(this.bloxd.sEq(this.wB.oR).getItemAtIdx(this.inInvenIdx)) : this.typeObj.chargeTime,
+           const bb = this.heldItemState.yN === this.PH.bM ? this.typeObj.chargeTime * Hb.f.getQuickChargeMultiplier(this.bloxd.xub(this.PH.bM).getItemAtIdx(this.inInvenIdx)) : this.typeObj.chargeTime,
```

#### 1242. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10232` → after: `L9534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9534) · [Before (L10232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10232)

```diff
-           this.firstPersonPosOffset.x = -.05 * Yq, this.firstPersonPosOffset.y = .13 * Yq, this.firstPersonPosOffset.z = -.05 * Yq, gq > .25 && (this.firstPersonPosOffset.y += .0012 * Math.sin(22 * (gq - .25) * Math.min(gq, .8)) * Math.min(gq, .8)), aE.includes(this.typeObj.meta. … [truncated]
+           this.firstPersonPosOffset.x = -.05 * Bb, this.firstPersonPosOffset.y = .13 * Bb, this.firstPersonPosOffset.z = -.05 * Bb, hb > .25 && (this.firstPersonPosOffset.y += .0012 * Math.sin(22 * (hb - .25) * Math.min(hb, .8)) * Math.min(hb, .8)), Xu.includes(this.typeObj.meta. … [truncated]
```

#### 1243. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10244` → after: `L9546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9546) · [Before (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10244)

```diff
-         this.isCharging = !1, this.chargingStart = 0, this.firstPersonPosOffset.x = 0, this.firstPersonPosOffset.y = 0, this.firstPersonPosOffset.z = 0, null === (qq = this.wB.Iy.getState(this.wB.oR, "playerCameraAdjustment")) || void 0 === qq || qq.fovMultiplier.removeMultiplier … [truncated]
+         this.isCharging = !1, this.chargingStart = 0, this.firstPersonPosOffset.x = 0, this.firstPersonPosOffset.y = 0, this.firstPersonPosOffset.z = 0, null === (bb = this.PH.pW.getState(this.PH.bM, "playerCameraAdjustment")) || void 0 === bb || bb.fovMultiplier.removeMultiplier … [truncated]
```

#### 1244. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10247` → after: `L9549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9549) · [Before (L10247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10247)

```diff
-         super.reset(), this.heldItemState.Zk === this.wB.oR ? (this.isCharging && this.sendFinishCharging(!1, 0, null), this.finishCharging(!1, Date.now())) : this.clearChargingPose()
+         super.reset(), this.heldItemState.yN === this.PH.bM ? (this.isCharging && this.sendFinishCharging(!1, 0, null), this.finishCharging(!1, Date.now())) : this.clearChargingPose()
```

#### 1245. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10250-L10253` → after: `L9552-L9555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9552-L9555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9552-L9555) · [Before (L10250-L10253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10250-L10253)

```diff
-         if (this.typeObj.requiresArrow && null === this.bloxd.getNearestArrowInInven(this.wB.oR, this.inInvenIdx)) return;
-         this.isCharging = !0, this.chargingStart = qq, this.wB.Iy.Hgq().canRunCombinator.setBooleanType("charging", !1);
-         const Eq = this.bloxd.sEq(this.wB.oR),
-           gq = this.typeObj.chargeTime * Bq.g.getQuickChargeMultiplier(Eq.getItemAtIdx(this.inInvenIdx)),
+         if (this.typeObj.requiresArrow && null === this.bloxd.getNearestArrowInInven(this.PH.bM, this.inInvenIdx)) return;
+         this.isCharging = !0, this.chargingStart = bb, this.PH.pW.Bhb().canRunCombinator.setBooleanType("charging", !1);
+         const ub = this.bloxd.xub(this.PH.bM),
+           hb = this.typeObj.chargeTime * Hb.f.getQuickChargeMultiplier(ub.getItemAtIdx(this.inInvenIdx)),
```

#### 1246. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10255` → after: `L9557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9557) · [Before (L10255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10255)

```diff
-         Wq.i.TV("middleScreenBarInitiate", {
+         wb.i.vp("middleScreenBarInitiate", {
```

#### 1247. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10257` → after: `L9559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9559) · [Before (L10257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10257)

```diff
-           uE: !1,
+           Zu: !1,
```

#### 1248. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10259` → after: `L9561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9561) · [Before (L10259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10259)

```diff
-         }), (0, xq.sendColyMessage)(Xq.Tj)
+         }), (0, Lb.sendColyMessage)(Fb.cj)
```

#### 1249. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10262` → after: `L9564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9564) · [Before (L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10262)

```diff
-         if (this.firstPersonPosOffset.x = 0, this.firstPersonPosOffset.y = 0, this.firstPersonPosOffset.z = 0, this.wB.Iy.getState(this.wB.oR, "playerCameraAdjustment").fovMultiplier.removeMultiplier("chargeableZoom"), this.updateItemToStage(1), this.wB.Iy.Hgq().canRunCombinator. … [truncated]
+         if (this.firstPersonPosOffset.x = 0, this.firstPersonPosOffset.y = 0, this.firstPersonPosOffset.z = 0, this.PH.pW.getState(this.PH.bM, "playerCameraAdjustment").fovMultiplier.removeMultiplier("chargeableZoom"), this.updateItemToStage(1), this.PH.pW.Bhb().canRunCombinator. … [truncated]
```

#### 1250. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10266-L10269` → after: `L9568-L9571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9568-L9571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9568-L9571) · [Before (L10266-L10269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10266-L10269)

```diff
-               Yq = this.bloxd.getItemStat(this.wB.oR, this.getHeldName(), "chargeStages"),
-               lq = null !== (gq = this.bloxd.getItemStat(this.wB.oR, this.getHeldName(), "minChargeStateToUse")) && void 0 !== gq ? gq : 1,
-               Oq = this.bloxd.sEq(this.wB.oR),
-               mq = this.typeObj.chargeTime * Bq.g.getQuickChargeMultiplier(Oq.getItemAtIdx(this.inInvenIdx)),
+               Bb = this.bloxd.getItemStat(this.PH.bM, this.getHeldName(), "chargeStages"),
+               Ob = null !== (hb = this.bloxd.getItemStat(this.PH.bM, this.getHeldName(), "minChargeStateToUse")) && void 0 !== hb ? hb : 1,
+               Gb = this.bloxd.xub(this.PH.bM),
+               Ub = this.typeObj.chargeTime * Hb.f.getQuickChargeMultiplier(Gb.getItemAtIdx(this.inInvenIdx)),
```

#### 1251. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10278-L10281` → after: `L9580-L9583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9580-L9583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9580-L9583) · [Before (L10278-L10281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10278-L10281)

```diff
-         (0, xq.sendColyMessage)(Xq.sh, {
-           DA: qq,
-           qc: Eq,
-           IO: Yq
+         (0, Lb.sendColyMessage)(Fb.$g, {
+           kY: bb,
+           TY: ub,
+           LU: Bb
```

#### 1252. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10285` → after: `L9587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9587) · [Before (L10285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10285)

```diff
-         this.sendFinishCharging(!0, qq, xE.e.eat(this.wB.oR, this.inInvenIdx, this.typeObj.name)), uE.b.play("burp", 1).rate(.9 + .2 * Math.random())
+         this.sendFinishCharging(!0, bb, Lu.e.eat(this.PH.bM, this.inInvenIdx, this.typeObj.name)), au.e.play("burp", 1).rate(.9 + .2 * Math.random())
```

#### 1253. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10289` → after: `L9591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9591) · [Before (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10289)

```diff
-         const Eq = this.bloxd.sEq(this.wB.oR);
+         const ub = this.bloxd.xub(this.PH.bM);
```

#### 1254. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10295` → after: `L9597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9597) · [Before (L10295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10295)

```diff
-         const Eq = this.bloxd.sEq(this.wB.oR);
+         const ub = this.bloxd.xub(this.PH.bM);
```

#### 1255. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10298` → after: `L9600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9600) · [Before (L10298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10298)

```diff
-           const Yq = 1 === qq ? this.typeObj.meta.rootName : `${this.typeObj.meta.rootName}|meta|charging${qq}`,
+           const Bb = 1 === bb ? this.typeObj.meta.rootName : `${this.typeObj.meta.rootName}|meta|charging${bb}`,
```

#### 1256. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10306` → after: `L9608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9608) · [Before (L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10306)

```diff
-         super(qq, Eq, gq, Yq, lq), this.inInvenIdx = void 0, this.inUse = void 0, this.dir = void 0, this.FA = void 0, this.firstPersonPosOffset = new dq.Na(.1, 0, .15), this.firstPersonRotation = new dq.Na(0, -Math.PI / 2, Math.PI / 7)
+         super(bb, ub, hb, Bb, Ob), this.inInvenIdx = void 0, this.inUse = void 0, this.dir = void 0, this.IY = void 0, this.firstPersonPosOffset = new ob.YX(.1, 0, .15), this.firstPersonRotation = new ob.YX(0, -Math.PI / 2, Math.PI / 7)
```

#### 1257. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10309` → after: `L9611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9611) · [Before (L10309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10309)

```diff
-         super.selected(qq), this.heldItemState.Zk === this.wB.oR && (this.inInvenIdx = this.bloxd.sEq(this.wB.oR).getSelectedSlotIndex(), this.inUse = !0)
+         super.selected(bb), this.heldItemState.yN === this.PH.bM && (this.inInvenIdx = this.bloxd.xub(this.PH.bM).getSelectedSlotIndex(), this.inUse = !0)
```

#### 1258. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10312` → after: `L9614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9614) · [Before (L10312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10312)

```diff
-         if (super.SB(qq, Eq), this.heldItemState.Zk === this.wB.oR && (this.inInvenIdx = this.bloxd.sEq(this.wB.oR).getSelectedSlotIndex(), this.inUse)) {
+         if (super.gH(bb, ub), this.heldItemState.yN === this.PH.bM && (this.inInvenIdx = this.bloxd.xub(this.PH.bM).getSelectedSlotIndex(), this.inUse)) {
```

#### 1259. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10314` → after: `L9616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9616) · [Before (L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10314)

```diff
-           let qq = null !== (gq = this.wB.Iy.sEq(this.wB.oR).getItemAtSelectedSlot().attributes.customAttributes.target) && void 0 !== gq ? gq : this.wB.Uy.compassTarget;
+           let bb = null !== (hb = this.PH.pW.xub(this.PH.bM).getItemAtSelectedSlot().attributes.customAttributes.target) && void 0 !== hb ? hb : this.PH.OW.compassTarget;
```

#### 1260. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10316-L10317` → after: `L9618-L9619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9618-L9619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9618-L9619) · [Before (L10316-L10317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10316-L10317)

```diff
-             if (!this.wB.Iy.Bgq(qq)) return;
-             qq = this.wB.Iy.Py(qq)
+             if (!this.PH.pW.kub(bb)) return;
+             bb = this.PH.pW.iK(bb)
```

#### 1261. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10319` → after: `L9621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9621) · [Before (L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10319)

```diff
-           const Eq = this.wB.Iy.jD(this.heldItemState.Zk),
+           const ub = this.PH.pW.vF(this.heldItemState.yN),
```

#### 1262. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10321-L10322` → after: `L9623-L9624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9623-L9624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9623-L9624) · [Before (L10321-L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10321-L10322)

```diff
-             mq = null !== (Yq = this.wB.uEq) && void 0 !== Yq ? Yq : this.wB.camera.RD();
-           this.wB.bD(Eq, Oq);
+             Ub = null !== (Bb = this.PH.Pbb) && void 0 !== Bb ? Bb : this.PH.camera.Zk();
+           this.PH.kF(ub, Gb);
```

#### 1263. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10325-L10326` → after: `L9627-L9628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9627-L9628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9627-L9628) · [Before (L10325-L10326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10325-L10326)

```diff
-           let Aq = ((0, Bq.Kb)(xq) - (0, Bq.Kb)(mq)) * (180 / Math.PI) - 15;
-           Aq = Aq < 0 ? 360 + Aq : Aq, this.dir = Math.abs(Math.round(Aq / 30) + 6) % 12 + 1, this.updateItemToStage(this.dir)
+           let Yb = ((0, Hb.Hb)(Lb) - (0, Hb.Hb)(Ub)) * (180 / Math.PI) - 15;
+           Yb = Yb < 0 ? 360 + Yb : Yb, this.dir = Math.abs(Math.round(Yb / 30) + 6) % 12 + 1, this.updateItemToStage(this.dir)
```

#### 1264. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10330` → after: `L9632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9632) · [Before (L10330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10330)

```diff
-         const Eq = this.bloxd.sEq(this.wB.oR);
+         const ub = this.bloxd.xub(this.PH.bM);
```

#### 1265. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10333` → after: `L9635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9635) · [Before (L10333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10333)

```diff
-           const Yq = 1 === qq ? this.typeObj.meta.rootName : `${this.typeObj.meta.rootName}|meta|dir${qq}`,
+           const Bb = 1 === bb ? this.typeObj.meta.rootName : `${this.typeObj.meta.rootName}|meta|dir${bb}`,
```

#### 1266. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10339-L10340` → after: `L9641-L9642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9641-L9642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9641-L9642) · [Before (L10339-L10340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10339-L10340)

```diff
-     var jE = gq(37305),
-       HE = gq(190);
+     var Au = hb(36911),
+       lu = hb(191);
```

#### 1267. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10343` → after: `L9645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9645) · [Before (L10343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10343)

```diff
-       return void 0 !== qq && null !== qq && qq > 0 ? qq : void 0
+       return void 0 !== bb && null !== bb && bb > 0 ? bb : void 0
```

#### 1268. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10349` → after: `L9651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9651) · [Before (L10349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10349)

```diff
-     const QE = 1e3 / HE.c.clientTicksPerSecond / 2,
+     const Cu = 1e3 / lu.e.clientTicksPerSecond / 2,
```

#### 1269. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10367` → after: `L9669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9669) · [Before (L10367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10367)

```diff
-         const Yq = this.restart ? qq : function(qq, Eq, gq, Yq, lq) {
+         const Bb = this.restart ? bb : function(bb, ub, hb, Bb, Ob) {
```

#### 1270. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10376-L10382` → after: `L9678-L9684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9678-L9684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9678-L9684) · [Before (L10376-L10382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10376-L10382)

```diff
-     var rE = gq(4096),
-       vE = gq(37958),
-       hE = gq(38e3),
-       nE = gq(36796),
-       bE = gq(114),
-       iE = gq(38420),
-       ZE = gq(598);
+     var ju = hb(4013),
+       nu = hb(37584),
+       Du = hb(37619),
+       xu = hb(36393),
+       zu = hb(101),
+       gu = hb(38064),
+       iu = hb(588);
```

#### 1271. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10385` → after: `L9687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9687) · [Before (L10385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10385)

```diff
-         this.wB = void 0, this.gunTypeObj = void 0, this.xq = void 0, this.wB = qq, this.gunTypeObj = Eq, this.xq = gq
+         this.PH = void 0, this.gunTypeObj = void 0, this.Ub = void 0, this.PH = bb, this.gunTypeObj = ub, this.Ub = hb
```

#### 1272. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10389-L10390` → after: `L9691-L9692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9691-L9692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9691-L9692) · [Before (L10389-L10390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10389-L10390)

```diff
-         if (this.xq !== this.wB.oR) return;
-         const gq = null === (Eq = (0, Nq.e)().Iy.sEq(this.xq)) || void 0 === Eq ? void 0 : Eq.getItemAtSelectedSlot();
+         if (this.Ub !== this.PH.bM) return;
+         const hb = null === (ub = (0, Zb.g)().pW.xub(this.Ub)) || void 0 === ub ? void 0 : ub.getItemAtSelectedSlot();
```

#### 1273. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10394` → after: `L9696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9696) · [Before (L10394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10394)

```diff
-           if (!(0, ZE.H)(null === Eq || void 0 === Eq ? void 0 : Eq[qq])) return Eq[qq]
+           if (!(0, iu.J)(null === ub || void 0 === ub ? void 0 : ub[bb])) return ub[bb]
```

#### 1274. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10398` → after: `L9700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9700) · [Before (L10398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10398)

```diff
-         } = (0, Nq.b)().getMetaInfo(this.gunTypeObj.name), Oq = (0, Nq.b)().getItemStat(this.xq, lq, "gunStats");
+         } = (0, Zb.e)().getMetaInfo(this.gunTypeObj.name), Gb = (0, Zb.e)().getItemStat(this.Ub, Ob, "gunStats");
```

#### 1275. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10402` → after: `L9704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9704) · [Before (L10402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10402)

```diff
-         if (this.xq === this.wB.oR) {
+         if (this.Ub === this.PH.bM) {
```

#### 1276. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10404` → after: `L9706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9706) · [Before (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10404)

```diff
-           return null !== Eq && void 0 !== Eq ? Eq : (0, Nq.b)().getItemStat(this.xq, this.gunTypeObj.name, qq)
+           return null !== ub && void 0 !== ub ? ub : (0, Zb.e)().getItemStat(this.Ub, this.gunTypeObj.name, bb)
```

#### 1277. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10414` → after: `L9716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9716) · [Before (L10414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10414)

```diff
-             xq = null !== mq && void 0 !== mq ? mq : lq,
+             Lb = null !== Ub && void 0 !== Ub ? Ub : Ob,
```

#### 1278. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10416` → after: `L9718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9718) · [Before (L10416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10416)

```diff
-             cq = void 0 === Aq ? xq : 60 / Aq * 1e3,
+             Sb = void 0 === Yb ? Lb : 60 / Yb * 1e3,
```

#### 1279. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10418-L10419` → after: `L9720-L9721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9720-L9721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9720-L9721) · [Before (L10418-L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10418-L10419)

```diff
-             Bq = null !== (gq = null !== (Yq = null !== uq && void 0 !== uq ? uq : mq) && void 0 !== Yq ? Yq : qq.cadenceMs) && void 0 !== gq ? gq : lq,
-             Wq = void 0 !== (Nq = Eq.equipDelay) && null !== Nq && Nq >= 0 ? Nq : void 0;
+             Hb = null !== (hb = null !== (Bb = null !== ab && void 0 !== ab ? ab : Ub) && void 0 !== Bb ? Bb : bb.cadenceMs) && void 0 !== hb ? hb : Ob,
+             wb = void 0 !== (Zb = ub.equipDelay) && null !== Zb && Zb >= 0 ? Zb : void 0;
```

#### 1280. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10421` → after: `L9723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9723) · [Before (L10421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10421)

```diff
-           const aq = Eq => null !== Wq && void 0 !== Wq ? Wq : Eq || void 0 !== uq ? void 0 : qq.equipDelay;
+           const Xb = ub => null !== wb && void 0 !== wb ? wb : ub || void 0 !== ab ? void 0 : bb.equipDelay;
```

#### 1281. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10447` → after: `L9749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9749) · [Before (L10447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10447)

```diff
-             firstShotDue: void 0 === lq ? Yq + PE(qq, Eq) + QE : gq + Math.max(lq, QE),
+             firstShotDue: void 0 === Ob ? Bb + Wu(bb, ub) + Cu : hb + Math.max(Ob, Cu),
```

#### 1282. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10454` → after: `L9756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9756) · [Before (L10454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10454)

```diff
-         return (0, ZE.H)(qq) ? this.gunTypeObj.burstCount : qq
+         return (0, iu.J)(bb) ? this.gunTypeObj.burstCount : bb
```

#### 1283. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10459` → after: `L9761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9761) · [Before (L10459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10459)

```diff
-         return (0, ZE.H)(Eq) ? null !== (qq = this.gunTypeObj.burstDelay) && void 0 !== qq ? qq : 0 : Eq
+         return (0, iu.J)(ub) ? null !== (bb = this.gunTypeObj.burstDelay) && void 0 !== bb ? bb : 0 : ub
```

#### 1284. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10463` → after: `L9765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9765) · [Before (L10463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10463)

```diff
-         return (0, ZE.H)(qq) ? this.gunTypeObj.keepScopeOnShot : qq
+         return (0, iu.J)(bb) ? this.gunTypeObj.keepScopeOnShot : bb
```

#### 1285. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10492-L10493` → after: `L9794-L9795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9794-L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9794-L9795) · [Before (L10492-L10493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10492-L10493)

```diff
-     var TE = gq(36669),
-       zE = gq(37413);
+     var Ju = hb(36226),
+       eu = hb(37036);
```

#### 1286. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10497` → after: `L9799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9799) · [Before (L10497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10497)

```diff
-         this.wB = void 0, this.gunStats = void 0, this.hasVerticalInaccuracy = void 0, this.currInacc = void 0, this.nonMoveInacc = void 0, this.currMoveInacc = void 0, this.prevBroadcastedInacc = void 0, this.ticksSinceBroadcast = void 0, this.lastTick = void 0, this.isAiming =  … [truncated]
+         this.PH = void 0, this.gunStats = void 0, this.hasVerticalInaccuracy = void 0, this.currInacc = void 0, this.nonMoveInacc = void 0, this.currMoveInacc = void 0, this.prevBroadcastedInacc = void 0, this.ticksSinceBroadcast = void 0, this.lastTick = void 0, this.isAiming =  … [truncated]
```

#### 1287. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10522-L10526` → after: `L9824-L9828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9824-L9828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9824-L9828) · [Before (L10522-L10526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10522-L10526)

```diff
-         const lq = this.wB.Iy.FX(this.wB.oR),
-           Oq = (lq.JV[0] ** 2 + lq.JV[2] ** 2) ** .5,
-           mq = Math.max(this.wB.Uy.runningSpeed, this.wB.Uy.walkingSpeed) * this.wB.Iy.REq(this.wB.oR).speedMultiplier.getTotalMultipliedVal(),
-           xq = Yq.inaccuracyStanding + Oq / mq * Yq.inaccuracyMovement + Yq.yVelocityInaccuracy * Math.abs(lq.JV[1]);
-         0 === mq || (xq >= this.currMoveInacc ? this.currMoveInacc = xq : this.currMoveInacc = this.decreaseInacc(this.currMoveInacc, xq, gq)), 0 !== this.nonMoveInacc && (this.nonMoveInacc = this.decreaseInacc(this.nonMoveInacc, 0, gq));
+         const Ob = this.PH.pW.Qq(this.PH.bM),
+           Gb = (Ob.Mp[0] ** 2 + Ob.Mp[2] ** 2) ** .5,
+           Ub = Math.max(this.PH.OW.runningSpeed, this.PH.OW.walkingSpeed) * this.PH.pW.nub(this.PH.bM).speedMultiplier.getTotalMultipliedVal(),
+           Lb = Bb.inaccuracyStanding + Gb / Ub * Bb.inaccuracyMovement + Bb.yVelocityInaccuracy * Math.abs(Ob.Mp[1]);
+         0 === Ub || (Lb >= this.currMoveInacc ? this.currMoveInacc = Lb : this.currMoveInacc = this.decreaseInacc(this.currMoveInacc, Lb, hb)), 0 !== this.nonMoveInacc && (this.nonMoveInacc = this.decreaseInacc(this.nonMoveInacc, 0, hb));
```

#### 1288. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10533` → after: `L9835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9835) · [Before (L10533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10533)

```diff
-         return Yq < .05 ? Eq : Math.max(qq - gq * this.gunStats.getStat("recoveryRate") * Yq, Eq)
+         return Bb < .05 ? ub : Math.max(bb - hb * this.gunStats.getStat("recoveryRate") * Bb, ub)
```

#### 1289. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10536` → after: `L9838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9838) · [Before (L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10536)

```diff
-         const Eq = this.currInacc * BE.i,
+         const ub = this.currInacc * Hu.f,
```

#### 1290. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10538-L10540` → after: `L9840-L9842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9840-L9842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9840-L9842) · [Before (L10538-L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10538-L10540)

```diff
-             du: gq,
-             tgq: Yq
-           } = (0, zE.e)(qq),
+             ta: hb,
+             Yhb: Bb
+           } = (0, eu.f)(bb),
```

#### 1291. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10543` → after: `L9845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9845) · [Before (L10543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10543)

```diff
-         return (0, zE.c)(gq + lq, Yq + Oq)
+         return (0, eu.d)(hb + Ob, Bb + Gb)
```

#### 1292. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10546-L10549` → after: `L9848-L9851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9848-L9851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9848-L9851) · [Before (L10546-L10549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10546-L10549)

```diff
-     var pE = gq(37624),
-       GE = gq(37870),
-       LE = gq(37621),
-       JE = gq(37451);
+     var su = hb(37252),
+       Mu = hb(37501),
+       mu = hb(37245),
+       Iu = hb(37077);
```

#### 1293. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10552-L10554` → after: `L9854-L9856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9854-L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9854-L9856) · [Before (L10552-L10554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10552-L10554)

```diff
-       UE = new dq.Na(0, .6, .5),
-       FE = new dq.Na(0, .5 * -Math.PI, Math.PI),
-       sE = new dq.Na(.12, .12, .12);
+       Eu = new ob.YX(0, .6, .5),
+       yu = new ob.YX(0, .5 * -Math.PI, Math.PI),
+       Vu = new ob.YX(.12, .12, .12);
```

#### 1294. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10557-L10559` → after: `L9859-L9861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9859-L9861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9859-L9861) · [Before (L10557-L10559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10557-L10559)

```diff
-         super(qq, Eq, gq, lq), this.breakingItem = void 0, this.firing = void 0, this.burstRemaining = void 0, this.burstSchedule = void 0, this.wasFiringLastTick = void 0, this.didShootLastTick = void 0, this.attemptAiming = void 0, this.aiming = void 0, this.fireSchedule = void … [truncated]
-         const Oq = this.wB.Ma.ZJ();
-         if (this.heldItemState.Zk === this.wB.oR) {
+         super(bb, ub, hb, Ob), this.breakingItem = void 0, this.firing = void 0, this.burstRemaining = void 0, this.burstSchedule = void 0, this.wasFiringLastTick = void 0, this.didShootLastTick = void 0, this.attemptAiming = void 0, this.aiming = void 0, this.fireSchedule = void … [truncated]
+         const Gb = this.PH.xX.ZN();
+         if (this.heldItemState.yN === this.PH.bM) {
```

#### 1295. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10563` → after: `L9865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9865) · [Before (L10563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10563)

```diff
-             PV: Oq,
+             Xp: Gb,
```

#### 1296. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10571` → after: `L9873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9873) · [Before (L10571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10571)

```diff
-           }).mirror, this.bulletBlockedBillboardPlane = (0, GE.m)(qq.Ma, "bulletBlockedBillboardPlane", (0, LE.d)({
+           }).mirror, this.bulletBlockedBillboardPlane = (0, Mu.l)(bb.xX, "bulletBlockedBillboardPlane", (0, mu.h)({
```

#### 1297. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10574` → after: `L9876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9876) · [Before (L10574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10574)

```diff
-           })), this.bulletBlockedBillboardPlane.material = this.bulletBlockedBillboardMat, this.bulletBlockedBillboardPlane.hG(!1), qq.Ma.rV(this.bulletBlockedBillboardPlane, !1), this.ticksSinceAttackBlockedBillboardUpdate = 0
+           })), this.bulletBlockedBillboardPlane.material = this.bulletBlockedBillboardMat, this.bulletBlockedBillboardPlane.Zx(!1), bb.xX.Wp(this.bulletBlockedBillboardPlane, !1), this.ticksSinceAttackBlockedBillboardUpdate = 0
```

#### 1298. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10579-L10581` → after: `L9881-L9883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9881-L9883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9881-L9883) · [Before (L10579-L10581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10579-L10581)

```diff
-         super.selected(qq), this.breakingItem.reset(), this.breakingItem.selected(qq), this.gunTypeObj = qq, this.gunStats = new fE(this.wB, qq, this.heldItemState.Zk), this.firing = !1, this.burstRemaining = 0, this.burstSchedule = new tE(yE), this.aiming = !1, this.attemptAimin … [truncated]
-         const Eq = this.gunStats.getEquip(Kq.b.get("isTouchScreen"), Date.now());
-         this.fireSchedule = new tE(yE), this.pressedAt = 0, this.wasDueLastTick = !1, this.fireSchedule.arm(Eq.firstShotDue), this.soundLastRoundFired = Eq.soundLastRoundFired, this.aimChangeTime = 0, this.reloadStartTime = 0, this.firstPersonGunMeshScaling = .055, this.smallMuzz … [truncated]
+         super.selected(bb), this.breakingItem.reset(), this.breakingItem.selected(bb), this.gunTypeObj = bb, this.gunStats = new vu(this.PH, bb, this.heldItemState.yN), this.firing = !1, this.burstRemaining = 0, this.burstSchedule = new ru(du), this.aiming = !1, this.attemptAimin … [truncated]
+         const ub = this.gunStats.getEquip(kb.d.get("isTouchScreen"), Date.now());
+         this.fireSchedule = new ru(du), this.pressedAt = 0, this.wasDueLastTick = !1, this.fireSchedule.arm(ub.firstShotDue), this.soundLastRoundFired = ub.soundLastRoundFired, this.aimChangeTime = 0, this.reloadStartTime = 0, this.firstPersonGunMeshScaling = .055, this.smallMuzz … [truncated]
```

#### 1299. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10586` → after: `L9888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9888) · [Before (L10586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10586)

```diff
-         })), this.cachedZoomLevel = this.wB.camera.mI, this.inaccuracyCalculator = null, this.heldItemState.Zk === this.wB.oR && (this.inaccuracyCalculator = new SE(this.wB, qq, this.gunStats), this.wB.camera.yI.w6(this.gunStats.getStat("kickbackDecreaseRate"))), this.lastGunShot … [truncated]
+         })), this.cachedZoomLevel = this.PH.camera.sV, this.inaccuracyCalculator = null, this.heldItemState.yN === this.PH.bM && (this.inaccuracyCalculator = new Nu(this.PH, bb, this.gunStats), this.PH.camera.yV.oR(this.gunStats.getStat("kickbackDecreaseRate"))), this.lastGunShot … [truncated]
```

#### 1300. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10590` → after: `L9892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9892) · [Before (L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10590)

```diff
-         this.muzzleParticleEmitter && !this.muzzleParticleEmitter.bM() || (null === (qq = this.muzzleParticleSystem) || void 0 === qq || qq.dispose(), this.createMuzzleEmitter())
+         this.muzzleParticleEmitter && !this.muzzleParticleEmitter.tC() || (null === (bb = this.muzzleParticleSystem) || void 0 === bb || bb.dispose(), this.createMuzzleEmitter())
```
