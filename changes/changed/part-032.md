# Changed — Bundle Modifications Report (Part 032 / 104)

- **Updated at**: `2026-11-24T00:51 JST`
- **Part**: `32 / 104` (**300** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 031](part-031.md) · [Part 033 →](part-033.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/241.js` (3lwmg.ecbaa066 → w4ddu.56408518 · continued)

- **File**: `bundles/bloxd.io/chunks/js/241.js` (78 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5)

#### 47. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16708-L16734` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L413) · [Before (L16708-L16734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16708-L16734)

```diff
-     }
-     const Rl = [.1, .05, .1],
-       Jl = {
-         texture: "effect_5",
-         vK: Math.ceil(48),
-         minLifeTime: .35,
-         maxLifeTime: .8,
-         minEmitPower: 1,
-         maxEmitPower: 2,
-         minSize: .2,
-         maxSize: .45,
-         emitRate: 0,
-         gravity: [0, -2, 0],
-         dir1: [-.15, -1, -.15],
-         dir2: [.15, -1, .15],
-         colorGradients: [{
- ... (11 more removed lines; see GitHub link above)
+     }, new class {
```

#### 48. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16736-L16739` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L415) · [Before (L16736-L16739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16736-L16739)

```diff
-         this.flames = new Map, this.lit = new Set, this.hold = new Nl, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
-       }
-       Gy(kk, ek) {
-         for (const [ik, Dk] of ek.baf2JetFlames) kk.isLocalPlayer(ik) || (Dk ? this.lit.add(ik) : this.lit.delete(ik))
+         this.reshapeOffsets = eC, this.rootId = (0, QC.k)(vC.q)
```

#### 49. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16741-L16746` → after: `L417-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L417-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L417-L419) · [Before (L16741-L16746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16741-L16746)

```diff
-       onAfterRender(kk, ek) {
-         const ik = performance.now(),
-           Dk = this.hold.lit(this.selfThrusting(kk, ek), ik);
-         for (const [fk, Sk] of this.flames)(fk === ek ? Dk : this.lit.has(fk)) || this.setEmitting(Sk, !1), fk === ek || kk.getPositionView(fk) ? !Sk.emitting && ik - Sk.offAt >= 1300 && (Sk.particles.stop(), this.flames.delete(fk)) : (Sk.particles.dispose(), this.flames.delete(f … [truncated]
-         Dk && this.draw(kk, ek, ek);
-         for (const fk of this.lit) this.draw(kk, ek, fk)
+       handles(CC) {
+         var zC;
+         return (null === (zC = QC.g[CC]) || void 0 === zC ? void 0 : zC.meta.rootId) === this.rootId
```

#### 50. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16748-L16750` → after: `L421-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L421-L422) · [Before (L16748-L16750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16748-L16750)

```diff
-       dispose() {
-         for (const kk of this.flames.values()) kk.particles.dispose();
-         this.flames.clear(), this.lit.clear()
+       affects(CC) {
+         return this.handles(CC)
```

#### 51. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16752-L16761` → after: `L424-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L424-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L424-L427) · [Before (L16752-L16761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16752-L16761)

```diff
-       selfThrusting(kk, ek) {
-         var ik;
-         const Dk = kk.getLocalPlayerMovement();
-         return !!Dk && (null !== (fk = {
-           option: null !== (ik = kk.getClientOption(ek, "jumpHoldThrust")) && void 0 !== ik ? ik : null,
-           jumping: Dk.jumpHeld,
-           onGround: Dk.onGround,
-           alive: kk.isAlive(ek)
-         }).option && fk.option.maxUpSpeed >= 0 && fk.jumping && !fk.onGround && fk.alive);
-         var fk
+       shape(CC, zC, ZC, wC, bC, nC) {
+         const fC = hC(bC);
+         return (0, QC.k)((oC = fC.rot, null !== (qC = nC ? this.reshapedHalf(CC, zC, ZC, wC, fC) : this.placedHalf(CC, zC, ZC, wC, fC.rot)) ? (0, vC.e)(vC.q, oC, qC) : 1 === oC ? vC.q : `${vC.q}|meta|rot${oC}`));
+         var oC, qC
```

#### 52. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16763-L16770` → after: `L429-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L429-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L429-L438) · [Before (L16763-L16770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16763-L16770)

```diff
-       draw(kk, ek, ik) {
-         var Dk, fk;
-         const Sk = this.pos;
-         if (!kk.readDrawnPosition(ik, Sk)) return;
-         const bk = kk.readDrawnPosition(ek, this.camera) ? this.camera : Sk;
-         if (!((Sk[0] - bk[0]) ** 2 + (Sk[1] - bk[1]) ** 2 + (Sk[2] - bk[2]) ** 2 < 1600) || !kk.particlesEnabled()) {
-           const kk = this.flames.get(ik);
-           return void(kk && this.setEmitting(kk, !1))
+       placedHalf(CC, zC, ZC, QC, wC) {
+         const [bC, nC] = iC.b[wC];
+         for (const [fC, oC] of [
+             ["right", 1],
+             ["left", -1]
+           ]) {
+           const qC = zC + oC * bC,
+             FC = QC + oC * nC,
+             WC = KC(CC, qC, ZC, FC);
+           if (null !== WC && WC.rot === wC && (null === WC.half || !YC(CC, qC, ZC, FC, WC))) return fC
```

#### 53. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16772-L16778` → after: `L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L440) · [Before (L16772-L16778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16772-L16778)

```diff
-         const rk = null !== (Dk = this.flames.get(ik)) && void 0 !== Dk ? Dk : this.create(kk, ik, Sk),
-           Pk = null !== (fk = kk.getDrawnHeading(ik)) && void 0 !== fk ? fk : 0,
-           mk = this.at;
-         mk[0] = Sk[0] - .35 * Math.sin(Pk), mk[1] = Sk[1] + 1.05, mk[2] = Sk[2] - .35 * Math.cos(Pk), rk.particles.moveTo(mk), this.setEmitting(rk, !0)
-       }
-       setEmitting(kk, ek) {
-         kk.emitting !== ek && (kk.emitting = ek, ek || (kk.offAt = performance.now()), kk.particles.setEmitRate(ek ? 60 : 0))
+         return null
```

#### 54. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16780-L16789` → after: `L442-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L442-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L442-L448) · [Before (L16780-L16789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16780-L16789)

```diff
-       create(kk, ek, ik) {
-         const Dk = {
-           particles: kk.createParticles(Jl, {
-             pos: ik,
-             half: Rl
-           }),
-           emitting: !1,
-           offAt: performance.now()
-         };
-         return this.flames.set(ek, Dk), Dk
+       reshapedHalf(CC, zC, ZC, QC, wC) {
+         if (null !== wC.half && YC(CC, zC, ZC, QC, wC)) return wC.half;
+         for (const bC of ["right", "left"]) {
+           const [nC, fC] = (0, vC.n)(wC.rot, bC), oC = KC(CC, zC + nC, ZC, QC + fC);
+           if (null !== oC && oC.rot === wC.rot && oC.half === vC.u[bC]) return bC
+         }
+         return null
```

#### 55. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16791` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L450) · [Before (L16791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16791)

```diff
-     }
+     }, new dC.d];
```

#### 56. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16793-L16794` → after: `L452-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L452-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L452-L456) · [Before (L16793-L16794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16793-L16794)

```diff
-     function ep(kk) {
-       return "Reactor Frame" === bD("reactor", kk)
+     function HC(CC, zC, ZC, QC, wC) {
+       let bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       for (const nC of mC)
+         if (nC.handles(wC)) return nC.shape(CC, zC, ZC, QC, wC, bC);
+       return wC
```

#### 57. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16798-L16950` → after: `L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L460) · [Before (L16798-L16950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16798-L16950)

```diff
-       return Xi("reactor", kk) && !ep(kk) && (kk.startsWith("Reactor Glass") || kk.startsWith("Reactor Port"))
-     }
-     const Dp = "baf2Goal";
-     class fp {
-       constructor() {
-         this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [hf.j.subscribe("setDirectionArrow", (kk => {
-           let {
-             id: ek,
-             position: ik
-           } = kk;
-           ek === Dp && (this.goal = ik, this.checkedAt = -1 / 0)
-         })), hf.j.subscribe("clearDirectionArrow", (kk => {
-           let {
-             id: ek
-           } = kk;
-           null !== ek && ek !== Dp || (this.goal = null, this.open = null)
- ... (137 more removed lines; see GitHub link above)
+       for (const QC of mC) {
```

#### 58. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16952-L17025` → after: `L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L462) · [Before (L16952-L17025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16952-L17025)

```diff
-         this.tracker && this.sizes.unobserve(this.tracker), null === (ek = this.hud) || void 0 === ek || ek.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = kk, this.hud = null !== (ik = null === kk || void 0 === kk ? void 0 : kk.closest(". … [truncated]
-           passive: !0
-         }), this.hudStyle.observe(this.hud, {
-           attributes: !0,
-           attributeFilter: ["style", "class"]
-         }))
-       }
-       shiftLeftOf(kk, ek) {
-         var ik;
-         const Dk = this.anchorOf(kk);
-         if (!Dk) return 0;
-         const {
-           y: fk
-         } = Dk, Sk = Dk.x + (null !== (ik = this.labelOffsets.get(kk)) && void 0 !== ik ? ik : 0), bk = this.em, {
-           halfWidth: rk,
-           labelled: Pk
- ... (58 more removed lines; see GitHub link above)
+         if (QC.handles(CC)) return null !== (zC = null === (ZC = QC.placedBy) || void 0 === ZC ? void 0 : ZC.call(QC, CC)) && void 0 !== zC ? zC : null
```

#### 59. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L17028` → after: `L466-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L466-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L466-L481) · [Before (L17028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L17028)

```diff
-     const bp = "Baf2ArrowText";
+   },
+   38256: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => vC,
+       f: () => AC,
+       g: () => RC
+     });
+     var QC = ZC(9194),
+       wC = ZC(9217),
+       bC = ZC(9285),
+       nC = ZC(38259),
+       fC = ZC(9279);
+     const oC = (0, nC.H)("pipe"),
+       qC = (0, nC.H)("tank"),
+       FC = (0, nC.H)("port"),
+       WC = "Reactor Port";
```

#### 60. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L17030-L17059` → after: `L483-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L483-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L483-L487) · [Before (L17030-L17059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L17030-L17059)

```diff
-     function rp(kk, ek) {
-       const ik = kk.rows.find((kk => kk.current));
-       return zk(kk.tutorial) && null !== ik && void 0 !== ik && ik.item && gf(ik) && Fk(ik.item).includes(ek) ? ik.item : null
-     }
-     const Pp = new class {
-       constructor(kk) {
-         this.select = kk, this.picks = new Map
-       }
-       open(kk, ek, ik) {
-         const Dk = rp(ek, kk);
-         null !== Dk && this.Un(kk, Dk, ik)
-       }
-       follow(kk, ek) {
-         if (rk())
-           for (const [ik, {
-               item: Dk,
- ... (14 more removed lines; see GitHub link above)
+     function NC(CC, zC, ZC) {
+       const QC = new Set([bC.c, bC.b, WC, ...zC, ...ZC, ...CC ? [nC.h] : []]);
+       return {
+         makers: new Set(zC),
+         roots: QC
```

#### 61. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L17061` → after: `L489-L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L489-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L489-L510) · [Before (L17061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L17061)

```diff
-     }(af.q);
+     }
+     const MC = {
+         water: NC(!0, ["Condenser"], ["Centrifuge", "Synthesizer", nC.c]),
+         cryo: NC(!1, [nC.c], [])
+       },
+       gC = new Set([...MC.water.roots, ...MC.cryo.roots]),
+       SC = {
+         nx: [-1, 0, 0],
+         ny: [0, -1, 0],
+         nz: [0, 0, -1],
+         px: [1, 0, 0],
+         py: [0, 1, 0],
+         pz: [0, 0, 1]
+       },
+       pC = wC.d.map((CC => SC[CC])),
+       PC = pC.map((CC => {
+ ... (6 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L17064-L17068` → after: `L513-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L513-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L513-L522) · [Before (L17064-L17068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L17064-L17068)

```diff
-       return ek => {
-         let ik = 0;
-         for (const Dk of kk.getInventoryItems())(null === Dk || void 0 === Dk ? void 0 : Dk.name) === ek && (ik += null === Dk.amount ? 1 : Math.max(Dk.amount, 0));
-         return ik
-       }
+       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
+       const ZC = QC.g[CC],
+         wC = null === ZC || void 0 === ZC ? void 0 : ZC.meta.rootName,
+         NC = MC[zC];
+       if (!wC || !NC.roots.has(wC)) return null;
+       if ((0, bC.h)(wC)) return (0, nC.E)(ZC.name) === zC ? oC : null;
+       if (wC === nC.h) return qC;
+       if (wC === WC) return ZC.name.endsWith("|Water") ? FC : null;
+       const [gC, SC] = fC.f[(ZC.meta.rot || 1) - 1];
+       return (0, nC.H)(NC.makers.has(wC) ? "maker" : "user", [-gC, 0, -SC])
```

#### 63. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L17072` → after: `L526-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L526-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L526-L536) · [Before (L17072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L17072)

```diff
-       kk.getClientOption(ek, "canCraft") && "inventory" !== Af.b.get("openInGameMenuName") && (Pp.open(ik, Dk.get(), mp(kk)), hf.j.tm("toggleMenu", `inventory|${ik}`))
+       let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
+       const {
+         makers: fC
+       } = MC[bC];
+       return pC.some(((qC, FC) => {
+         var WC, NC;
+         let [MC, gC, SC] = qC;
+         const pC = CC(zC + MC, ZC + gC, wC + SC),
+           RC = GC(pC, bC);
+         return null !== RC && fC.has(null !== (WC = null === (NC = QC.g[pC]) || void 0 === NC ? void 0 : NC.meta.rootName) && void 0 !== WC ? WC : "") && !(0, nC.I)(oC, RC, PC[FC])
+       }))
```

#### 64. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L17078-L17097` → after: `L540-L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L540-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L540-L541) · [Before (L17078-L17097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L17078-L17097)

```diff
-       const ek = FS();
-       kk === Kp && ek === xp || (Kp = kk, xp = ek, (0, af.s)(function(kk, ek) {
-         const ik = new Map;
-         for (let Dk = kk + 1; Dk <= fk.length; Dk++) {
-           const fk = GS(Dk, kk, ek);
-           if (fk)
-             for (const ek of lk(Dk).unlocks) ik.set(ek, {
-               ...fk,
-               stepsAway: Dk - kk
-             })
-         }
-         return ik
-       }(kk, ek)))
-     }
- 
-     function Up() {
- ... (4 more removed lines; see GitHub link above)
+       const zC = QC.g[CC];
+       return zC ? (0, nC.E)(zC.name) : null
```

#### 65. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L17100-L17102` → after: `L545-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L545-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L545-L554) · [Before (L17100-L17102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L17100-L17102)

```diff
-     function Hp() {
-       return (0, af.x)(gS(Object.keys(Vk), cS)), () => {
-         (0, af.x)([])
+     function JC(CC) {
+       if (!xC) {
+         xC = new Map;
+         for (const CC of ["water", "cryo"])
+           for (let zC = 0; zC < 64; zC++)
+             for (const ZC of [!1, !0]) xC.set((0, bC.l)(CC, zC, ZC), {
+               NM: CC,
+               mask: zC,
+               full: ZC
+             })
```

#### 66. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L17106-L17117` → after: `L562-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L562-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L562-L573) · [Before (L17106-L17117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L17106-L17117)

```diff
-     function wp(kk, ek, ik) {
-       var Dk, fk;
-       const Sk = kk.getTargetedBlock();
-       if (!Sk || ! function(kk, ek, ik) {
-           if ("Chest" !== ek) return !1;
-           const Dk = kk.split("|")[0];
-           if (!Mi(Dk) || 0 === ve[Dk].outputSlots.length) return !1;
-           const fk = Iw(kk);
-           return ik[0] === fk[0] && ik[1] === fk[1] && ik[2] === fk[2]
-         }(ik, null === (Dk = kk.jek(ek)) || void 0 === Dk ? void 0 : Dk.name, Sk.normal)) return !1;
-       const [bk, rk, Pk] = Sk.gr, mk = kk.getBlockId(bk, rk, Pk);
-       return 0 === mk || !0 === (null === (fk = qk.g[mk]) || void 0 === fk ? void 0 : fk.canBePlacedOver)
+     function iC(CC, zC, ZC, wC, bC, nC) {
+       return pC.some(((fC, oC) => {
+         var qC, FC, WC;
+         let [NC, MC, gC] = fC;
+         if (0 === (nC >> oC & 1)) return !1;
+         const SC = null !== (qC = null === (FC = QC.g[CC(zC + NC, ZC + MC, wC + gC)]) || void 0 === FC ? void 0 : FC.name) && void 0 !== qC ? qC : "",
+           pC = JC(SC);
+         return pC ? pC.NM === bC && pC.full : (null !== (WC = function(CC) {
+           var zC;
+           return null !== (zC = IC.get(CC)) && void 0 !== zC ? zC : null
+         }(SC)) && void 0 !== WC ? WC : 0) > 0
+       }))
```

#### 67. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L17122-L17123` → after: `L576-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L576-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L576-L577) · [Before (L17122-L17123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L17122-L17123)

```diff
-       constructor(kk) {
-         this.toasts = kk, this.lastAt = -1 / 0
+       constructor() {
+         this.reshapeOffsets = pC
```

#### 68. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L17125-L17143` → after: `L579-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L579-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L579-L580) · [Before (L17125-L17143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L17125-L17143)

```diff
-       onAltAction(kk, ek, ik) {
-         const Dk = kk.getTargetedBlock();
-         if (!Dk || function(kk) {
-             const ek = kk.split("|")[0];
-             return Mi(ek) || null !== dD(ek) || sk(ek) || wi.b.includes(ek)
-           }(ik) && !pp.has(ik.split("|")[0])) return;
-         const fk = kk.jek(ek);
-         if (!fk || !pp.has(fk.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
-         const Sk = fk.typeObj.id,
-           [bk, rk, Pk] = Dk.gr,
-           mk = kk.getBlockId(bk, rk, Pk),
-           Mk = qk.g[mk];
-         (0 === mk || null !== Mk && void 0 !== Mk && Mk.qn || null !== Mk && void 0 !== Mk && Mk.canBePlacedOver) && kk.isSolidToPlayerBlockId(Sk) && kk.canModifyBlockAt(bk, rk, Pk) && kk.okk(bk, rk, Pk, Sk) && !kk.okk(bk, rk, Pk, Sk, ek) && (this.lastAt = Date.now(), this.toasts … [truncated]
-           baf2ToastText: [(0, Qk.Md)({
-             translationKey: "buildAFactory2Game:beltStepBack"
-           }, Qk.D.whiteUiText)],
- ... (3 more removed lines; see GitHub link above)
+       handles(CC) {
+         return null !== AC(CC)
```

#### 69. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L17145-L17148` → after: `L582-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L582-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L582-L584) · [Before (L17145-L17148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L17145-L17148)

```diff
-     }
-     class Yp {
-       constructor(kk) {
-         this.show = kk, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
+       affects(CC) {
+         var zC, ZC;
+         return gC.has(null !== (zC = null === (ZC = QC.g[CC]) || void 0 === ZC ? void 0 : ZC.meta.rootName) && void 0 !== zC ? zC : "")
```

#### 70. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L17150` → after: `L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L586) · [Before (L17150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L17150)

```diff
-       onMining(kk, ek, ik) {
+       placedBy(CC) {
```

#### 71. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L17152-L17332` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L588) · [Before (L17152-L17332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L17152-L17332)

```diff
-         if (!ek) return this.started = null, void this.gatedThisHold.clear();
-         if (!kk) return void(this.started = null);
-         const fk = `${kk.x},${kk.y},${kk.z},${kk.XM}`;
-         if (fk === this.started) return;
-         this.started = fk;
-         const Sk = tD(kk.y) ? Ul(kk.block, kk.XM, kk.level) : null;
-         if (null === Sk || this.gatedThisHold.has(fk)) return;
-         this.gatedThisHold.add(fk);
-         const bk = kk.block.split("|")[0];
-         ik - (null !== (Dk = this.hintedAt.get(bk)) && void 0 !== Dk ? Dk : -1 / 0) < 5e3 || (this.hintedAt.set(bk, ik), this.show({
-           baf2ToastText: Hl(Sk, kk.block),
-           baf2ToastMs: 2500,
-           baf2ToastStyle: "baf2ToastWarn"
-         }))
-       }
-     }
- ... (165 more removed lines; see GitHub link above)
+         return (null === (zC = QC.g[CC]) || void 0 === zC ? void 0 : zC.meta.rootName) === bC.b ? bC.c : null
```

#### 72. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L17334-L17616` → after: `L590-L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L590-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L590-L594) · [Before (L17334-L17616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L17334-L17616)

```diff
-       let Ae = new Set,
-         je = !1;
-       const se = {
-         onCreate: kk => {
-           wk = kk, wk.setGroundArrowStyle({
-             width: .6,
-             alpha: .5,
-             endAtSolidFace: !0
-           });
-           for (const ek of Fe) {
-             const kk = ve[ek].inputSlots ? Er(bk) : zr(ek, bk, uk, lk);
-             Ye.push((0, Yf.f)(ek, kk))
-           }
-           Ye.push((0, Cf.z)((0, Dk.createElement)(Dk.Fragment, null, (0, Dk.createElement)(sn, {
-             controller: nk
-           }), (0, Dk.createElement)(pU, {
- ... (267 more removed lines; see GitHub link above)
+       shape(CC, zC, ZC, wC, fC, qC) {
+         var FC, WC, NC;
+         const MC = null !== (FC = null === (WC = QC.g[fC]) || void 0 === WC ? void 0 : WC.name) && void 0 !== FC ? FC : "",
+           gC = qC || MC !== bC.c ? null !== (NC = (0, nC.E)(MC)) && void 0 !== NC ? NC : "water" : function(CC, zC, ZC, QC) {
+             return pC.some(((wC, bC) => {
```

#### 73. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L17618-L17743` → after: `L596-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L596-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L596-L609) · [Before (L17618-L17743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L17618-L17743)

```diff
-               return `${ek},${ik},${Dk}`
-             })));
-             Zk.retain(ik);
-             const Dk = null === (vk = rk.get()) || void 0 === vk ? void 0 : vk.kind,
-               fk = "reactor" === Dk ? null === (hk = Wk.get()) || void 0 === hk ? void 0 : hk.status.baf2RxAt : "battery" === Dk ? null === (ak = tk.get()) || void 0 === ak ? void 0 : ak.status.baf2BatAt : void 0;
-             fk && Ae.has(fk.join(",")) && !ik.has(fk.join(",")) && Ce(), Ae = ik
-           } else if ("baf2RxStatus" === kk) {
-             const kk = ek;
-             Wk.set(kk), kk.baf2RxOpen && (Le({
-               kind: "reactor"
-             }), (0, Cf.r)())
-           } else if ("baf2BatStatus" === kk) {
-             const kk = ek;
-             tk.set(kk), kk.baf2BatOpen && (Le({
-               kind: "battery"
-             }), (0, Cf.r)())
- ... (110 more removed lines; see GitHub link above)
+               const WC = GC(CC(zC + fC, ZC + qC, QC + FC), "cryo");
+               return null !== WC && "port" !== WC.kind && (0, nC.I)(oC, WC, PC[bC])
+             })) ? "cryo" : "water"
+           }(CC, zC, ZC, wC),
+           SC = function(CC, zC, ZC, QC) {
+             let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
+               bC = 0;
+             return pC.forEach(((fC, qC) => {
+               let [FC, WC, NC] = fC;
+               const MC = GC(CC(zC + FC, ZC + WC, QC + NC), wC);
+               MC && (0, nC.I)(oC, MC, PC[qC]) && (bC |= 1 << qC)
+             })), bC
+           }(CC, zC, ZC, wC, gC),
+           RC = qC ? function(CC) {
```

#### 74. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L17745-L17790` → after: `L611-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L611-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L611-L613) · [Before (L17745-L17790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L17745-L17790)

```diff
-             const kk = ek;
-             kk.baf2TransferOn ? (Le({
-               kind: "transfer",
-               transfer: kk,
-               arrivedAtMs: Date.now()
-             }), (0, Cf.r)()) : "transfer" === (null === (fe = rk.get()) || void 0 === fe ? void 0 : fe.kind) && (0, Cf.d)()
-           } else "baf2IslandLeft" === kk ? (Ak.dropHeld(), null !== rk.get() && Ce(), "inventory" === Af.b.get("openInGameMenuName") && (0, jf.h)()) : "baf2Arc" === kk ? re.Gy(wk, ek) : "baf2Blade" === kk ? Pe.onBlade(wk, ek) : "baf2JetFlame" === kk ? me.Gy(wk, ek) : "baf2GearPow … [truncated]
-           var Se, be, Ke, xe, Ue
-         }
-       };
-       return se
-     }
-   },
-   38090: (kk, ek, ik) => {
-     function Dk(kk, ek, ik) {
-       const Dk = new Set,
- ... (30 more removed lines; see GitHub link above)
+             return !0 === (null === (zC = JC(CC)) || void 0 === zC ? void 0 : zC.full)
+           }(MC) : iC(CC, zC, ZC, wC, gC, SC);
+         return (0, QC.k)((0, bC.l)(gC, SC, RC))
```

#### 75. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L17797` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L617) · [Before (L17797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L17797)

```diff
-   38081: (kk, ek, ik) => {
+   38004: (CC, zC, ZC) => {
```

#### 76. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L17799` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L619) · [Before (L17799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L17799)

```diff
-       c: () => bk,
+       d: () => QC,
```

#### 77. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L17802` → after: `L622-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L622-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L622-L641) · [Before (L17802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L17802)

```diff
-     const Dk = new WeakMap;
+     const QC = ["Chest", "Loot Chest", "Moonstone Chest"],
+       wC = [{
+         name: "Workbench",
+         exactMatch: !0
+       }, {
+         name: "Furnace",
+         exactMatch: !0
+       }, {
+         name: "Artisan Bench",
+         exactMatch: !0
+       }, {
+         name: "Potion Table",
+         exactMatch: !0
+       }, {
+         name: "Salvaging Table",
+         exactMatch: !0
+ ... (4 more added lines; see GitHub link above)
```

#### 78. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L17805-L17820` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L644) · [Before (L17805-L17820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L17805-L17820)

```diff
-       let ek = Dk.get(kk);
-       return ek || (ek = {
-         hidden: kk.hidden,
-         x: NaN,
-         y: NaN
-       }, Dk.set(kk, ek)), ek
-     }
- 
-     function Sk(kk, ek) {
-       const ik = fk(kk);
-       ik.hidden !== ek && (ik.hidden = ek, kk.hidden = ek)
-     }
- 
-     function bk(kk, ek, ik) {
-       const Dk = fk(kk);
-       Dk.x === ek && Dk.y === ik || (Dk.x = ek, Dk.y = ik, kk.style.translate = `${ek}vw ${ik}vh`)
+       return wC.find((zC => zC.exactMatch ? CC === zC.name : CC.includes(zC.name)))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/242.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/242.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee)

#### 1. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L4` → after: `L4-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L4-L12) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L4)

```diff
-   40679: (kk, ek, ik) => {
+   38944: (CC, zC, ZC) => {
+     function QC(CC) {
+       return !(!CC.lobbyLeaderboardInfo && !CC.lobbyManage)
+     }
+     ZC.d(zC, {
+       d: () => QC
+     })
+   },
+   38923: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L10-L14` → after: `L17-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L17-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L17-L118) · [Before (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L10-L14)

```diff
-     var Dk, fk = ik(36729),
-       Sk = ik(36698);
-     ! function(kk) {
-       kk[kk.CW = 0] = "CW", kk[kk.CCW = 1] = "CCW"
-     }(Dk || (Dk = {}));
+     var QC = ZC(28);
+     let wC = !1;
+ 
+     function bC() {
+       return wC
+     }
+ 
+     function nC(CC) {
+       wC !== CC && (wC = CC, QC.o.bp("replayViewer|videoExportChanged"))
+     }
+   },
+   38859: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => bC
+     });
+     var QC = ZC(28),
+ ... (86 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L16-L24` → after: `L120-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L120-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L120-L188) · [Before (L16-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L16-L24)

```diff
-       static Interpolate(kk, ek, ik, Dk, fk) {
-         if (0 === kk) return 0;
-         const Sk = 1 - 3 * Dk + 3 * ek,
-           bk = 3 * Dk - 6 * ek,
-           rk = 3 * ek;
-         let Pk = kk;
-         for (let mk = 0; mk < 5; mk++) {
-           const ek = Pk * Pk;
-           Pk -= (Sk * (ek * Pk) + bk * ek + rk * Pk - kk) * (1 / (3 * Sk * ek + 2 * bk * Pk + rk)), Pk = Math.min(1, Math.max(0, Pk))
+       constructor() {
+         var CC = this;
+         this.remote = (0, wC.l)(), this.tally = new pC, this.records = new qC(10, this.remote ? 1 : 3600), this.events = new qC(4, this.remote ? 1 : 12e3), this.event = new Float64Array(4), this.takes = null, this.client = "js", this.started = !1, this.record = function(zC) {
+           let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+           const [QC, wC, bC, nC, fC, oC, qC, pC, PC, GC] = CC.records.push(zC, ZC), RC = CC.tally;
+           switch (RC.frames++, qC) {
+             case FC:
+               return void RC.idle++;
+             case MC:
+               return void RC.Mp++;
+             case NC:
+               return RC.lockSkips++, void(0 === bC && 0 === nC || CC.outlier(`lock skip dropped raw (${gC(bC)}, ${gC(nC)}) at ${SC(QC)} ms`))
+           }
+           RC.looked++, Number.isFinite(wC) && (RC.dtMin = Math.min(RC.dtMin, wC), RC.dtMax = Math.max(RC.dtMax, wC), RC.dtSum += wC, wC > 0 && (RC.peakRate = Math.max(RC.peakRate, Math.hypot(fC, oC) / wC))), RC.raw[0] += bC, RC.raw[1] += nC, RC.turned[0] += fC, RC.turned[1] += oC … [truncated]
+           const AC = Math.abs(bC) > GC || Math.abs(nC) > GC,
+             xC = `raw (${gC(bC)}, ${gC(nC)}) over ${SC(wC)} ms, limit ${gC(GC)}, filter v (${pC.toFixed(3)}, ${PC.toFixed(3)}) px/ms, at ${SC(QC)} ms`;
+ ... (53 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L26` → after: `L190-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L190-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L190-L197) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L26)

```diff
-         return 3 * Math.pow(1 - Pk, 2) * Pk * ik + 3 * (1 - Pk) * Math.pow(Pk, 2) * fk + Math.pow(Pk, 3)
+         const zC = this.takes.cameraSets();
+         if (zC.length >= QC.d) {
+           this.tally.cameraSetsLost += zC[0];
+           for (let CC = QC.d; CC + QC.h <= zC.length; CC += QC.h) this.tally.cameraSets++, this.outlier(oC(zC, CC))
+         }
+       }
+       droppedCopy() {
+         this.tally.dropped++
```

#### 5. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L31` → after: `L329-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L329-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L329-L339) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L31)

```diff
-         this._radians = kk, this._radians < 0 && (this._radians += 2 * Math.PI)
+         super(CC, {
+           xqC: () => {
+             (0, fC.m)(!0) && (0, QC.WK)()
+           },
+           GqC: (CC, zC) => {
+             var ZC;
+             null === (ZC = (0, oC.e)()) || void 0 === ZC || ZC.xS(CC, zC)
+           }
+         }, {
+           FqC: !1
+         }), (0, SC.h)(CC)
```

#### 6. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L33-L34` → after: `L341-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L341-L342) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L33-L34)

```diff
-       degrees() {
-         return 180 * this._radians / Math.PI
+       lK(CC, zC) {
+         return !!(0, SC.k)((0, SC.d)(), this.SZC, CC, zC) && (this.JqC(), !0)
```

#### 7. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L36-L37` → after: `L344-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L344-L345) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L36-L37)

```diff
-       radians() {
-         return this._radians
+       pqC(CC) {
+         this.IqC(), super.pqC(CC), (0, SC.h)(CC)
```

#### 8. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L39-L42` → after: `L347-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L347-L348) · [Before (L39-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L39-L42)

```diff
-       static BetweenTwoPoints(kk, ek) {
-         const ik = ek.subtract(kk),
-           Dk = Math.atan2(ik.y, ik.x);
-         return new rk(Dk)
+       xG() {
+         super.xG(), this.IqC()
```

#### 9. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L44-L51` → after: `L350-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L350-L351) · [Before (L44-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L44-L51)

```diff
-       static BetweenTwoVectors(kk, ek) {
-         let ik = kk.lengthSquared() * ek.lengthSquared();
-         if (0 === ik) return new rk(Math.PI / 2);
-         ik = Math.sqrt(ik);
-         let Dk = kk.dot(ek) / ik;
-         Dk = (0, fk.Clamp)(Dk, -1, 1);
-         const Sk = Math.acos(Dk);
-         return new rk(Sk)
+       IqC() {
+         this.SZC.JG.wg.qm = void 0
```

#### 10. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L53-L54` → after: `L353-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L353-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L353-L407) · [Before (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L53-L54)

```diff
-       static FromRadians(kk) {
-         return new rk(kk)
+     }
+     var PC = ZC(28),
+       GC = ZC(1865),
+       RC = ZC(1645),
+       AC = ZC(36342),
+       xC = ZC(38795),
+       JC = ZC(37877),
+       IC = ZC(37640),
+       iC = ZC(600),
+       vC = ZC(38249);
+ 
+     function eC(CC, zC, ZC) {
+       const QC = function(CC) {
+           const zC = new Int32Array(CC.length * vC.h);
+           return CC.forEach(((CC, ZC) => {
+             const QC = ZC * vC.h;
+ ... (39 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L56-L57` → after: `L409-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L409-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L409-L497) · [Before (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L56-L57)

```diff
-       static FromDegrees(kk) {
-         return new rk(kk * Math.PI / 180)
+       register(CC) {
+         const zC = this.MN,
+           ZC = (0, oC.c)();
+         CC.fR(qC.V, (CC => {
+           zC.fN.wZC.add(CC), zC.fN.fZC.delete(CC)
+         })), CC.fR(qC.ab, (CC => {
+           zC.fN.fZC.add(CC), zC.fN.wZC.delete(CC)
+         })), CC.fR(qC.ee, (CC => {
+           zC.fN.fZC.delete(CC), zC.fN.wZC.delete(CC)
+         })), CC.fR(qC._, (CC => {
+           zC.fN.bZC.add(CC), zC.fN.oZC.delete(CC)
+         })), CC.fR(qC.cb, (CC => {
+           zC.fN.oZC.add(CC), zC.fN.bZC.delete(CC)
+         })), CC.fR(qC.le, (CC => {
+           zC.fN.oZC.delete(CC), zC.fN.bZC.delete(CC)
+         })), CC.fR(qC.Z, (CC => {
+ ... (73 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L61-L71` → after: `L506-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L506-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L506-L627) · [Before (L61-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L61-L71)

```diff
-       constructor(kk, ek, ik) {
-         this.startPoint = kk, this.midPoint = ek, this.endPoint = ik;
-         const Dk = Math.pow(ek.x, 2) + Math.pow(ek.y, 2),
-           fk = (Math.pow(kk.x, 2) + Math.pow(kk.y, 2) - Dk) / 2,
-           bk = (Dk - Math.pow(ik.x, 2) - Math.pow(ik.y, 2)) / 2,
-           Pk = (kk.x - ek.x) * (ek.y - ik.y) - (ek.x - ik.x) * (kk.y - ek.y);
-         this.centerPoint = new Sk.l((fk * (ek.y - ik.y) - bk * (kk.y - ek.y)) / Pk, ((kk.x - ek.x) * bk - (ek.x - ik.x) * fk) / Pk), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = rk.BetweenTwoPoints(this.centerPoint, this.startPoint);
-         const mk = this.startAngle.degrees();
-         let Mk = rk.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
-           Kk = rk.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
-         Mk - mk > 180 && (Mk -= 360), Mk - mk < -180 && (Mk += 360), Kk - Mk > 180 && (Kk -= 360), Kk - Mk < -180 && (Kk += 360), this.orientation = Mk - mk < 0 ? 0 : 1, this.angle = rk.FromDegrees(0 === this.orientation ? mk - Kk : Kk - mk)
+       constructor(CC, zC) {
+         this.MN = CC, this.setUpQueuedEntity = zC
+       }
+       register(CC) {
+         const zC = this.MN,
+           ZC = (0, oC.c)();
+         CC.fR(qC.S, (CC => {
+           let {
+             aQ: zC,
+             tQ: ZC
+           } = CC;
+           this.setUpQueuedEntity(zC), zC = (0, dC.c)(zC), (0, oC.c)().client.gameRecorder.recordBulletShot(zC, ZC), PC.o.bp(`bulletShot|${zC}`, {
+             bulletDirections: ZC
+           })
+         })), CC.fR(qC.ic, (CC => {
+           let {
+ ... (106 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L76-L146` → after: `L642-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L642-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L642-L656) · [Before (L76-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L76-L146)

```diff
-         this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new Sk.l(kk, ek))
-       }
-       addLineTo(kk, ek) {
-         if (this.closed) return this;
-         const ik = new Sk.l(kk, ek),
-           Dk = this._points[this._points.length - 1];
-         return this._points.push(ik), this._length += ik.subtract(Dk).length(), this
-       }
-       addArcTo(kk, ek, ik, Dk) {
-         let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
-         if (this.closed) return this;
-         const bk = this._points[this._points.length - 1],
-           rk = new Sk.l(kk, ek),
-           mk = new Sk.l(ik, Dk),
-           Mk = new Pk(bk, rk, mk);
-         let Kk = Mk.angle.radians() / fk;
- ... (55 more removed lines; see GitHub link above)
+         this.MN = CC, this.setUpQueuedEntity = zC
+       }
+       register(CC) {
+         const zC = this.MN,
+           ZC = (0, oC.c)();
+         CC.fR(qC.ed, (CC => {
+           let {
+             eId: ZC,
+             settings: QC
+           } = CC;
+           (0, tC.d)(ZC);
+           for (const zC in QC)(0, tC.b)(ZC, zC, QC[zC]);
+           if ("canSee" in QC && zC.JR.YCC(ZC, "hidingMeshManager")) {
+             const CC = zC.JR.getState(ZC, "hidingMeshManager");
+             CC.canSee = (0, DC.c)("canSee", QC.canSee), CC._forceUpdate = !0
```

#### 14. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L148-L149` → after: `L658-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L658-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L658-L706) · [Before (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L148-L149)

```diff
-         }
-         return ek
+         })), CC.fR(qC.G, (CC => {
+           let {
+             yw: ZC,
+             Lw: QC,
+             animationScript: wC,
+             Uw: bC,
+             Bw: nC,
+             Ow: fC,
+             kw: qC
+           } = CC;
+           ZC = (0, dC.c)(ZC);
+           const FC = null === wC && null !== fC ? (0, XC.e)(fC, qC) : wC;
+           (0, oC.c)().client.gameRecorder.recordAnimateEntity(ZC, QC, FC, bC, nC), (0, YC.c)(zC).animations.animateEntity(ZC, QC, wC, bC, nC, fC, qC), null !== wC || ZC === zC.qE && QC === cC.d.Emote && (0, oC.c)().client.cameraController.endTemporaryThirdPerson()
+         })), CC.fR(qC.ze, (CC => {
+           (0, jC.d)(CC)
+         })), CC.fR(qC.Bd, (CC => {
+ ... (33 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L151-L152` → after: `L708-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L708-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L708-L713) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L151-L152)

```diff
-       close() {
-         return this.closed = !0, this
+     }
+     var LC = ZC(37609),
+       UC = ZC(37581);
+     class BC {
+       constructor(CC) {
+         this.MN = CC
```

#### 16. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L154-L158` → after: `L715-L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L715-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L715-L720) · [Before (L154-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L154-L158)

```diff
-       length() {
-         let kk = this._length;
-         if (this.closed) {
-           const ek = this._points[this._points.length - 1];
-           kk += this._points[0].subtract(ek).length()
+       register(CC) {
+         const zC = this.MN,
+           ZC = (0, oC.c)();
+ 
+         function QC() {
+           return zC.JR.SzC(zC.qE)
```

#### 17. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L160` → after: `L722-L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L722-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L722-L832) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L160)

```diff
-         return kk
+         CC.fR(qC.wc, (CC => {
+           let {
+             Cz: ZC,
+             zz: QC,
+             Zz: wC,
+             Qz: bC,
+             wz: nC,
+             bz: fC,
+             nz: oC,
+             fz: qC,
+             qz: FC
+           } = CC;
+           if (!zC.JR.YCC(ZC, "itemState")) return void(0, LC.m)(zC, ZC, [nC, fC, oC], QC, {
+             amount: wC,
+             attributes: JSON.parse(bC),
+             fz: qC,
+ ... (95 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L162-L166` → after: `L834-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L834-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L834-L845) · [Before (L162-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L162-L166)

```diff
-       area() {
-         const kk = this._points.length;
-         let ek = 0;
-         for (let ik = kk - 1, Dk = 0; Dk < kk; ik = Dk++) ek += this._points[ik].x * this._points[Dk].y - this._points[Dk].x * this._points[ik].y;
-         return .5 * ek
+     }
+     var OC = ZC(6484),
+       kC = ZC(37277),
+       VC = ZC(338),
+       Cz = ZC.n(VC),
+       zz = ZC(4456),
+       Zz = ZC(37523),
+       Qz = ZC(38078),
+       wz = ZC(37275);
+     class bz {
+       constructor(CC, zC) {
+         this.MN = CC, this.setUpQueuedEntity = zC
```

#### 19. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L168-L169` → after: `L847-L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L847-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L847-L964) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L168-L169)

```diff
-       getPoints() {
-         return this._points
+       register(CC) {
+         const zC = this.MN,
+           ZC = (0, oC.c)();
+         CC.fR(qC.kf, (CC => {
+           let {
+             sw: ZC,
+             Tw: wC,
+             aw: bC,
+             tw: nC
+           } = CC;
+           const fC = [wC, bC, nC];
+           zC.JR.setPosition(zC.qE, fC), (0, QC.sendColyMessage)(qC.Yg, {
+             zf: ZC,
+             Zf: zz.h
+           }), PC.o.bp("localPlayerTeleported", {
+             pos: fC,
+ ... (102 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L171-L183` → after: `L966-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L966-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L966-L1010) · [Before (L171-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L171-L183)

```diff
-       getPointAtLengthPosition(kk) {
-         if (kk < 0 || kk > 1) return Sk.l.Zero();
-         const ek = kk * this.length();
-         let ik = 0;
-         for (let Dk = 0; Dk < this._points.length; Dk++) {
-           const kk = (Dk + 1) % this._points.length,
-             fk = this._points[Dk],
-             bk = this._points[kk].subtract(fk),
-             rk = bk.length() + ik;
-           if (ek >= ik && ek <= rk) {
-             const kk = bk.normalize(),
-               Dk = ek - ik;
-             return new Sk.l(fk.x + kk.x * Dk, fk.y + kk.y * Dk)
+     }
+ 
+     function nz(CC, zC, ZC, QC, wC) {
+       let bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       if (!CC.JR.gzC(CC.qE)) return console.log("Got resync inven but don't have inven component"), void zC.acknowledge(QC);
+       bC && console.error("Had to sync inven"), zC.y_(QC, wC) && ZC.bp("chestToggleFromServer", !1, !0), ZC.bp("syncedInvenFromServer")
+     }
+     var fz = ZC(38841),
+       oz = ZC(38848),
+       qz = ZC(1867);
+     var Fz = ZC(4437);
+ 
+     function Wz(CC) {
+       const zC = CC.fN;
+       let ZC = 0,
+         wC = -1,
+ ... (29 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L185` → after: `L1012-L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L1012-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L1012-L1057) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L185)

```diff
-           ik = rk
+           return !0
+         }(zC.kS.Pg, WC, NC, MC), SC = null === fC || Math.abs(WC - fC[0]) > 8 || Math.abs(NC - fC[1]) > 8 || Math.abs(MC - fC[2]) > 8, pC = !oC || SC || performance.now() - nC >= 1e4;
+         oC = gC, gC && pC && (wC = FC, nC = performance.now(), fC = [WC, NC, MC], (0, QC.sendColyMessage)(qC.Bg, {
+           jn: FC
+         }))
+       };
+       return CC.on("ZN", FC), () => {
+         CC.off("ZN", FC)
+       }
+     }
+     var Nz = ZC(38850),
+       Mz = ZC(1453),
+       gz = ZC(2745),
+       Sz = ZC(2909),
+       pz = ZC(4706);
+     class Pz {
+ ... (30 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L189-L190` → after: `L1060-L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L1060-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L1060-L1202) · [Before (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L189-L190)

```diff
-       static StartingAt(kk, ek) {
-         return new mk(kk, ek)
+       restartChunkStreaming() {
+         (0, Zz.k)(this.MN, (0, oC.c)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - Nz.b)), this.startChunkReports()
+       }
+       register(CC) {
+         const zC = this.MN,
+           ZC = (0, oC.c)();
+         CC.fR(qC.dd, (CC => {
+           GC.e.applyNewClientOptions(CC)
+         })), CC.fR(qC.vd, (CC => {
+           gz.e.onReceiveColyseusPing(CC)
+         })), CC.fR(qC.Oe, (CC => {
+           let {
+             key: zC,
+             value: ZC
+           } = CC;
+           (0, RC.setCookie)(this.gameNameWithVariation, zC, ZC)
+ ... (127 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L194-L199` → after: `L1212-L1213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR1212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L1212-L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L1212-L1213) · [Before (L194-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L194-L199)

```diff
-       static CreateQuadraticBezier(kk, ek, ik, Dk) {
-         Dk = Dk > 2 ? Dk : 3;
-         const fk = [],
-           bk = (kk, ek, ik, Dk) => (1 - kk) * (1 - kk) * ek + 2 * kk * (1 - kk) * ik + kk * kk * Dk;
-         for (let rk = 0; rk <= Dk; rk++) fk.push(new Sk.o(bk(rk / Dk, kk.x, ek.x, ik.x), bk(rk / Dk, kk.y, ek.y, ik.y), bk(rk / Dk, kk.z, ek.z, ik.z)));
-         return new Mk(fk)
+       constructor(CC, zC) {
+         this.MN = CC, this.clientApi = zC
```

#### 24. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L201-L206` → after: `L1215-L1357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR1215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L1215-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L1215-L1357) · [Before (L201-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L201-L206)

```diff
-       static CreateCubicBezier(kk, ek, ik, Dk, fk) {
-         fk = fk > 3 ? fk : 4;
-         const bk = [],
-           rk = (kk, ek, ik, Dk, fk) => (1 - kk) * (1 - kk) * (1 - kk) * ek + 3 * kk * (1 - kk) * (1 - kk) * ik + 3 * kk * kk * (1 - kk) * Dk + kk * kk * kk * fk;
-         for (let Pk = 0; Pk <= fk; Pk++) bk.push(new Sk.o(rk(Pk / fk, kk.x, ek.x, ik.x, Dk.x), rk(Pk / fk, kk.y, ek.y, ik.y, Dk.y), rk(Pk / fk, kk.z, ek.z, ik.z, Dk.z)));
-         return new Mk(bk)
+       register(CC) {
+         const zC = this.MN,
+           ZC = (0, oC.c)();
+         CC.fR(qC.nb, (CC => {
+           let {
+             chatMsgId: zC,
+             content: ZC,
+             chatterEId: QC
+           } = CC;
+           PC.o.bp("chat", {
+             serverChatMsgId: zC,
+             content: ZC,
+             chatterEId: QC
+           }, !0)
+         })), CC.fR(qC.mf, (CC => {
+           PC.o.bp("TopRightHelper", CC, !0)
+ ... (127 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L208-L212` → after: `L1359-L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L1359-L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L1359-L1362) · [Before (L208-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L208-L212)

```diff
-       static CreateHermiteSpline(kk, ek, ik, Dk, fk) {
-         const bk = [],
-           rk = 1 / fk;
-         for (let Pk = 0; Pk <= fk; Pk++) bk.push(Sk.o.Hermite(kk, ek, ik, Dk, Pk * rk));
-         return new Mk(bk)
+     }
+     class vz {
+       constructor(CC, zC, ZC, QC) {
+         this.gameNameWithVariation = CC, this.MN = ZC, this.connectionResume = QC, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new xC.b(zC, this.MN)
```

#### 26. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L214-L271` → after: `L1364-L1468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR1364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L1364-L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L1364-L1468) · [Before (L214-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L214-L271)

```diff
-       static CreateCatmullRomSpline(kk, ek, ik) {
-         const Dk = [],
-           fk = 1 / ek;
-         let bk = 0;
-         if (ik) {
-           const ik = kk.length;
-           for (let rk = 0; rk < ik; rk++) {
-             bk = 0;
-             for (let Pk = 0; Pk < ek; Pk++) Dk.push(Sk.o.CatmullRom(kk[rk % ik], kk[(rk + 1) % ik], kk[(rk + 2) % ik], kk[(rk + 3) % ik], bk)), bk += fk
-           }
-           Dk.push(Dk[0])
-         } else {
-           const ik = [];
-           ik.push(kk[0].clone()), ik.push(...kk), ik.push(kk[kk.length - 1].clone());
-           let rk = 0;
-           for (; rk < ik.length - 3; rk++) {
- ... (42 more removed lines; see GitHub link above)
+       setupStateReplicationHandlers() {
+         this.stateReplicationHandler.setup(), (0, QC.onGameResetOnce)((() => {
+           this.stateReplicationHandler.dispose()
+         }))
+       }
+       pqC(CC) {
+         this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new xC.b(CC, this.MN), this.stateReplicationHandler.setup()
+       }
+       setupOnMessageListeners(CC, zC) {
+         const ZC = this.MN,
+           QC = CC => {
+             this.stateReplicationHandler.setUpIfQueued(CC)
+           };
+         new Pz(ZC, this.gameNameWithVariation, this.connectionResume).register(CC), new KC(ZC).register(CC), new BC(ZC).register(CC), new lC(ZC, QC).register(CC), new yC(ZC, QC).register(CC), new iz(ZC, zC).register(CC), new bz(ZC, QC).register(CC)
+       }
+     }
+ ... (89 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L274` → after: `L1517-L1624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR1517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L1517-L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L1517-L1624) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L274)

```diff
-         this._length = 0, this._points = kk, this._length = this._computeLength(kk)
+         this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.MN = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWit … [truncated]
+       }
+       async connectToServer(CC, zC, ZC) {
+         GC.e.reset(), CC.QE = {
+           [CC.qE]: {}
+         }, CC.mCC = void 0, (0, jC.o)(), (0, oC.c)().removeAllEntityNames(), (0, oC.c)().setEntityName(CC.qE, this.userContext.getPlayerName()), (0, Ez.r)({
+           lobbyName: this.lobbyName
+         }), console.log("Waiting for clientConnection passed promise to resolve");
+         const nC = (0, yz.f)();
+         console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
+         const fC = performance.now();
+         ZC.aborted || (0, lz.o)("wasm_core_ready", fC);
+         const qC = (0, az.f)(this.userContext, (() => {
+           const {
+             roomName: QC,
+             joinOptions: wC
+ ... (92 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L276-L277` → after: `L1626-L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L1626-L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L1626-L1629) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L276-L277)

```diff
-       getPoints() {
-         return this._points
+       setupServerListeners(CC, zC, ZC) {
+         PC.o.bp("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new vz(this.gameNameWithVariation, zC.SZC, CC, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
+         const wC = zC.AqC();
+         this.incomingMsgInitialisor.setupOnMessageListeners(wC, ZC), (0, QC.onConnectionToServerReady)(wC, zC), wC.finishRegistration()
```

#### 29. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L279-L280` → after: `L1631-L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L1631-L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L1631-L1632) · [Before (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L279-L280)

```diff
-       length() {
-         return this._length
+       dispose() {
+         this.connectionResume.dispose()
```

#### 30. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L282-L287` → after: `L1634-L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L1634-L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L1634-L1646) · [Before (L282-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L282-L287)

```diff
-       continue (kk) {
-         const ek = this._points[this._points.length - 1],
-           ik = this._points.slice(),
-           Dk = kk.getPoints();
-         for (let fk = 1; fk < Dk.length; fk++) ik.push(Dk[fk].subtract(Dk[0]).add(ek));
-         return new Mk(ik)
+       onResumeGaveUp(CC, zC) {
+         (0, uz.IS)(new Error("Reconnect failed"), {
+           ...(0, mz.l)(zC),
+           game: this.gameNameWithVariation
+         }), (0, Yz.reportClientError)("disconnect", "Reconnect failed", zC.reason), (0, oC.c)().client.leaveGameUnwanted({
+           reason: {
+             translationKey: "general:lostConnection"
+           },
+           canReconnect: !CC,
+           canPlayAgain: CC,
+           requiresRefresh: !1,
+           automaticallyReconnect: !1
+         }), (0, Mz.navigatePreserveSearch)("/")
```

#### 31. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L289-L292` → after: `L1648-L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR1648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L1648-L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L1648-L1719) · [Before (L289-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L289-L292)

```diff
-       _computeLength(kk) {
-         let ek = 0;
-         for (let ik = 1; ik < kk.length; ik++) ek += kk[ik].subtract(kk[ik - 1]).length();
-         return ek
+       sinceJoined() {
+         return null === this.joinedAt ? "" : (0, Hz.d)(performance.now() - this.joinedAt)
+       }
+       onRoomLeft(CC, zC) {
+         var ZC;
+         if (CC === bC.e.gameOrPluginKick.code) return;
+         if (console.log(`Left room with code ${CC}`), CC === bC.e.serverUpdating.code) return (0, Yz.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, oC.c)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
+         this.MN.xS(`Kicked from server with code ${CC}`, new Error);
+         const QC = Object.keys(bC.e).find((zC => bC.e[zC].code === CC));
+         (0, Yz.reportClientError)("disconnect", "Left room", null !== QC && void 0 !== QC ? QC : String(CC));
+         const wC = this.onConnectionToServerLost(CC, void 0, {
+           site: "leave",
+           closeReason: null !== zC && void 0 !== zC ? zC : "",
+           sinceJoined: this.sinceJoined()
+         });
+         (0, oC.c)().client.leaveGameUnwanted({
+ ... (56 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L296` → after: `L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L1723) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L296)

```diff
-   38265: (kk, ek, ik) => {
+   38795: (CC, zC, ZC) => {
```

#### 33. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L298` → after: `L1725-L2033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR1725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L1725-L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L1725-L2033) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L298)

```diff
-       c: () => Sk
+       b: () => yZ,
+       e: () => VZ
+     });
+     var QC, wC, bC, nC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC, PC, GC, RC, AC, xC, JC, IC, iC, vC, eC, hC, KC, YC, dC, mC, HC, EC, lC, XC, cC, uC, rC, sC, TC, aC, tC, DC, jC, yC, LC, UC, BC, OC, kC, VC, Cz, zz, Zz, Qz, wz, bz, nz, fz, oz, qz, Fz, Wz, Nz, Mz, gz, Sz, pz, Pz, Gz,  … [truncated]
+       Vz = ZC(37018),
+       CZ = ZC(38813),
+       zZ = ZC(38815),
+       ZZ = ZC(9102),
+       QZ = ZC(597),
+       wZ = ZC(590),
+       bZ = ZC(36667);
+     let nZ = (QC = (0, ZZ.type)("number"), wC = (0, ZZ.type)("number"), bC = (0, ZZ.type)("number"), nC = (0, ZZ.type)("number"), fC = (0, ZZ.type)("number"), oC = (0, ZZ.type)("number"), qC = (0, ZZ.type)("string"), FC = class extends ZZ.Schema {
+         constructor() {
+           super(...arguments), (0, CZ.b)(this, "id", WC, this), (0, CZ.b)(this, "amount", NC, this), (0, CZ.b)(this, "x", MC, this), (0, CZ.b)(this, "y", gC, this), (0, CZ.b)(this, "z", SC, this), (0, CZ.b)(this, "size", pC, this), (0, CZ.b)(this, "attributes", PC, this)
+         }
+       }, WC = (0, zZ.d)(FC.prototype, "id", [QC], {
+ ... (293 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L300-L303` → after: `L2035-L2101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L2035-L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L2035-L2101) · [Before (L300-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L300-L303)

```diff
-     var Dk = ik(38272);
-     const fk = (kk, ek, ik) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : ik && "object" === typeof kk ? {
-       ...kk
-     } : null : kk.clone(ek) : null;
+ 
+     function WZ(CC) {
+       return Object.keys(ZZ.Metadata.getFields(CC))
+     }
+     const NZ = WZ(FZ);
+     for (const CQ of QZ.x)
+       if (!NZ.includes(CQ)) throw new Error(`Mob Schema is missing a networked property: "${CQ}"`);
+     const MZ = WZ((sz = (0, ZZ.type)("string"), Tz = (0, ZZ.type)("float32"), az = (0, ZZ.type)("float32"), tz = (0, ZZ.type)("float32"), Dz = (0, ZZ.type)("float32"), jz = class extends oZ {
+       constructor() {
+         super(...arguments), (0, CZ.b)(this, "soundName", yz, this), (0, CZ.b)(this, "volume", Lz, this), (0, CZ.b)(this, "refDistance", Uz, this), (0, CZ.b)(this, "maxHearDist", Bz, this), (0, CZ.b)(this, "rate", Oz, this)
+       }
+     }, yz = (0, zZ.d)(jz.prototype, "soundName", [sz], {
+       configurable: !0,
+       enumerable: !0,
+       writable: !0,
+       initializer: function() {
+ ... (51 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L305-L333` → after: `L2103-L2130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR2103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L2103-L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L2103-L2130) · [Before (L305-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L305-L333)

```diff
-       static DeepCopy(kk, ek, ik, Sk) {
-         let bk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const rk = function(kk) {
-           const ek = [];
-           do {
-             const ik = Object.getOwnPropertyNames(kk);
-             for (const kk of ik) - 1 === ek.indexOf(kk) && ek.push(kk)
-           } while (kk = Object.getPrototypeOf(kk));
-           return ek
-         }(kk);
-         for (const mk of rk) {
-           if ("_" === mk[0] && (!Sk || -1 === Sk.indexOf(mk))) continue;
-           if (mk.endsWith("Observable")) continue;
-           if (ik && -1 !== ik.indexOf(mk)) continue;
-           const rk = kk[mk],
-             Mk = typeof rk;
- ... (13 more removed lines; see GitHub link above)
+       constructor(CC, zC) {
+         this.bloxd = CC, this.eId = zC, this.MN = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub  … [truncated]
+       }
+       initClient(CC) {
+         var zC, ZC, QC;
+         this.colyseusEntity = CC, this.meshKind = CC.meshKind, this.meshOpts = CC.meshOpts, this.leaderboardTop = CC.leaderboardTop, this.MN.JR.add([CC.x, CC.y, CC.z], 1, 1, null, null, !1, !1, this.eId), this.MN.JR.lH(this.eId, "smoothToServerPos");
+         const wC = "Person" === this.meshKind;
+         this.MN.JR.lH(this.eId, "meshRotation", {
+           isServerControlled: !0,
+           ...wC ? {
+             defaultRotationsPerSecond: .5
+           } : {},
+           childrenNodeParams: wC ? [{
+             nodeName: "HeadMesh",
+             softTolerance: iZ.j,
+             hardTolerance: null
+ ... (12 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L338-L342` → after: `L2327-L2367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR2327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L2327-L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L2327-L2367) · [Before (L338-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L338-L342)

```diff
-   },
-   38272: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => Dk
-     });
+     var EZ = ZC(38804);
+     class lZ {
+       constructor(CC, zC) {
+         this.eId = zC, this.MN = void 0, this.schema = void 0, this.MN = CC.MN
+       }
+       initClient(CC) {
+         this.schema = CC, this.MN.JR.add([CC.x, CC.y, CC.z], .1, .1, null, null, !1, !1, this.eId), this.MN.JR.lH(this.eId, "smoothToServerPos"), EZ.b.add(this.eId, this.copyOpts())
+       }
+       onChangeClient(CC) {
+         wZ.e.includes(CC) && EZ.b.update(this.eId, this.copyOpts())
+       }
+       disposeClient() {
+         EZ.b.remove(this.eId), this.MN.JR.deleteEntity(this.eId)
+       }
+       copyOpts() {
+         const {
+ ... (25 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/242.js` (Changed code · before: `L344-L408` → after: `L2369-L4552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66eeR2369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40cf48e7b5cc048b5be5143c6153188f249815ce3037e5e8c4bb1b1f8cfd66ee) · [After (L2369-L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/242.js#L2369-L4552) · [Before (L344-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/242.js#L344-L408)

```diff
-       static _CheckLimit(kk, ek) {
-         let ik = Dk._LogLimitOutputs[kk];
-         return ik ? ik.current++ : (ik = {
-           limit: ek,
-           current: 1
-         }, Dk._LogLimitOutputs[kk] = ik), ik.current <= ik.limit
-       }
-       static _GenerateLimitMessage(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const ik = Dk._LogLimitOutputs[kk];
-         if (!ik || !Dk.MessageLimitReached) return;
-         const fk = this._Levels[ek];
-         ik.current === ik.limit && Dk[fk.name](Dk.MessageLimitReached.replace(/%LIMIT%/g, "" + ik.limit).replace(/%TYPE%/g, fk.name ?? ""))
-       }
-       static _AddLogEntry(kk) {
-         Dk._LogCache = kk + Dk._LogCache, Dk.OnNewCacheEntry && Dk.OnNewCacheEntry(kk)
- ... (49 more removed lines; see GitHub link above)
+       constructor(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
+           QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
+         this.SZC = CC, this.MN = zC, this.setupBudgetMs = ZC, this.now = QC, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new S … [truncated]
+           this.setUpQueuedEntities(!0)
+         }, this.sG = () => {
+           this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
+         }, this.setUpPromoted = () => {
+           for (const CC of this.promotedSetups) {
+             this.promotedSetups.delete(CC);
+             const zC = this.queuedSetups.get(CC);
+             zC && (this.queuedSetups.delete(CC), this.timedSetup(zC, CC))
+           }
+         }, this.createStateCallbacks = (0, aZ.getStateCallbacks)(CC), this.roomStateCallbacks = this.createStateCallbacks(CC.state), this.roomState = CC.state, this.setupBudgetLeftMs = ZC, this.lastRefillMs = QC()
+       }
+       setup() {
+ ... (2168 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/243.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/243.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9)

#### 1. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L4)

```diff
-   40617: (kk, ek, ik) => {
+   38326: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L6-L7)

```diff
-       c: () => Sk,
-       f: () => bk
+       c: () => nC
```

#### 3. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L9-L13` → after: `L8-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L8-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L8-L39) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L9-L13)

```diff
-     var Dk = ik(1903);
-     let fk = !1;
- 
-     function Sk() {
-       fk = !0
+     var QC = ZC(38334);
+     const wC = [0, 0, 0];
+     class bC {
+       constructor(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wC;
+         this.pool = CC, this.origin = zC, this.count = 0, this.free = []
+       }
+       take() {
+         var CC;
+         const zC = null !== (CC = this.free.pop()) && void 0 !== CC ? CC : this.count++;
+         return zC >= this.pool.HW && this.pool.grow(Math.max(2 * this.pool.HW, zC + 1)), this.hide(zC), zC
+       }
+       release(CC) {
+         this.hide(CC), this.free.push(CC)
+       }
+       write(CC, zC, ZC, wC) {
+ ... (16 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L15-L17` → after: `L41-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L41-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L41-L71) · [Before (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L15-L17)

```diff
- 
-     function bk() {
-       fk && (fk = !1, (0, Dk.c)())
+     class nC {
+       constructor(CC, zC, ZC) {
+         this.api = CC, this.model = zC, this.initialCapacity = ZC, this.kinds = new Map, this.origin = [0, 0, 0]
+       }
+       kindOf(CC) {
+         let zC = this.kinds.get(CC);
+         if (void 0 === zC) {
+           const ZC = this.api.createInstancePool({
+             ...this.model,
+             item: CC
+           }, this.initialCapacity);
+           null === ZC || void 0 === ZC || ZC.setOrigin(this.origin[0], this.origin[1], this.origin[2]), zC = ZC && new bC(ZC, this.origin), this.kinds.set(CC, zC)
+         }
+         return zC
+       }
+       follow(CC) {
+ ... (15 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L20` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L74) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L20)

```diff
-   40608: (kk, ek, ik) => {
+   38349: (CC, zC, ZC) => {
```

#### 6. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L22` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L76) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L22)

```diff
-       b: () => bk,
+       e: () => nC,
```

#### 7. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L24` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L78) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L24)

```diff
-       i: () => rk
+       j: () => oC
```

#### 8. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L26-L62` → after: `L80-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L80-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L80-L85) · [Before (L26-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L26-L62)

```diff
-     var Dk = ik(40157),
-       fk = ik(40165);
- 
-     function Sk(kk) {
-       if (kk.queries.drawCensus() < Dk.qb.BYTES) return null;
-       const ek = kk.memoryData(kk.scratch(), Dk.qb.BYTES, 4, "the draw census");
-       return null === ek ? null : {
-         terrainOpaque: Dk.qb.terrainOpaque(ek, 0),
-         terrainTransparent: Dk.qb.terrainTransparent(ek, 0),
-         terrainPack: Dk.qb.terrainPack(ek, 0),
-         earthSky: Dk.qb.earthSky(ek, 0),
-         skyMeshes: Dk.qb.skyMeshes(ek, 0),
-         regular: Dk.qb.regular(ek, 0),
-         thin: Dk.qb.thin(ek, 0),
-         line: Dk.qb.line(ek, 0),
-         text: Dk.qb.text(ek, 0),
- ... (21 more removed lines; see GitHub link above)
+     const QC = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
+       wC = [0, 1, 2, 0, 2, 3],
+       bC = [4, 5];
+ 
+     function nC(CC, zC, ZC, QC, wC) {
+       for (let nC = 0; nC < 6; nC++) bC.includes(nC) === wC && qC(CC, zC, ZC, QC, nC)
```

#### 9. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L65-L84` → after: `L88-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L88-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L88-L281) · [Before (L65-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L65-L84)

```diff
-     function rk() {
-       const kk = (0, fk.g)();
-       return !0 === (null === kk || void 0 === kk ? void 0 : kk.isCoreRunning) ? function(kk) {
-         const ek = Sk(kk);
-         if (null === ek) return [];
-         const {
-           terrainOpaque: ik,
-           terrainTransparent: Dk,
-           terrainPack: fk,
-           earthSky: rk,
-           skyMeshes: Pk,
-           regular: mk,
-           thin: Mk,
-           line: Kk,
-           text: xk,
-           particles: nk
- ... (4 more removed lines; see GitHub link above)
+     function fC(CC, zC, ZC, QC) {
+       for (let wC = 0; wC < 6; wC++) qC(CC, zC, ZC, QC, wC)
+     }
+ 
+     function oC(CC, zC, ZC, bC, nC) {
+       for (let fC = 0; fC < 6; fC++)
+         for (const oC of [0, 1]) {
+           const [qC, FC, WC] = [oC + 2, oC + 1, (oC + 3) % 4], NC = CC.length / 3;
+           for (const [zC, wC] of [
+               [oC, FC],
+               [qC, FC],
+               [qC, WC],
+               [oC, WC]
+             ])
+             for (let oC = 0; oC < 3; oC++) {
+               const qC = QC[3 * (4 * fC + zC) + oC],
+ ... (178 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L86-L87` → after: `L283-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L283-L284) · [Before (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L86-L87)

```diff
-           label: "Terrain",
-           value: `${ik} opaque / ${Dk} transparent (${fk} shader pack)`
+           item: "Voltite Cell",
+           amount: 32
```

#### 11. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L89-L90` → after: `L286-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L286-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L286-L554) · [Before (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L89-L90)

```diff
-           label: "Meshes / Thin bases",
-           value: `${mk} / ${Mk}`
+           item: "Comet Core",
+           amount: 1
+         }],
+         charge: {
+           items: [{
+             item: "Iron Plate",
+             amount: 60
+           }, {
+             item: "Copper Wire",
+             amount: 120
+           }],
+           powerPerS: 0,
+           seconds: 90
+         },
+         islandRadius: 50,
+         machineAllowance: 280,
+ ... (253 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L92-L93` → after: `L556-L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L556-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L556-L557) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L92-L93)

```diff
-           label: "Text / Lines",
-           value: `${xk} / ${Kk}`
+           item: "Plutonium Pellet",
+           amount: 6
```

#### 13. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L95-L98` → after: `L559-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L559-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L559-L584) · [Before (L95-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L95-L98)

```diff
-           label: "Sky / Particles",
-           value: `${rk+Pk} / ${nk}`
-         }]
-       }(kk.api) : []
+           item: "Comet Core",
+           amount: 3
+         }],
+         charge: {
+           items: [{
+             item: "Spent Pellet",
+             amount: 4
+           }, {
+             item: "Plutonium Pellet",
+             amount: 1
+           }],
+           powerPerS: 1e4,
+           seconds: 120
+         },
+         islandRadius: 80,
+         machineAllowance: 680,
+ ... (10 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L117-L118` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L588) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L117-L118)

```diff
-       const ek = (0, Sk.g)();
-       return null !== ek && +kk === ek.api.localId
+       nC = CC
```

#### 15. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L122-L140` → after: `L599-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L599-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L599-L604) · [Before (L122-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L122-L140)

```diff
-       Mk || (Mk = !0, (0, Pk.m)(bk.o, (kk => {
-         var ek, ik;
-         const Dk = (0, rk.i)(bk.o, kk);
-         if (!(0, rk.e)(Dk)) return;
-         const fk = Dk;
-         Kk(fk.ee) && nk(fk.ie, {
-           icon: fk.fe,
-           level: fk.Pe,
-           displayName: null !== (ek = fk.De) && void 0 !== ek ? ek : null,
-           durationMs: null !== (ik = fk.Se) && void 0 !== ik ? ik : null
-         })
-       })), (0, Pk.m)(bk.R, (kk => {
-         const ek = (0, rk.i)(bk.R, kk);
-         if (!(0, rk.e)(ek)) return;
-         const ik = ek;
-         Kk(ik.ee) && Dk.e.remove(ik.ie)
- ... (3 more removed lines; see GitHub link above)
+       return nC ? wC.length : bC
+     }
+ 
+     function WC(CC) {
+       var zC, ZC;
+       return null !== (zC = null === (ZC = wC[CC - 1]) || void 0 === ZC ? void 0 : ZC.reactorTier) && void 0 !== zC ? zC : 0
```

#### 16. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L144-L146` → after: `L608-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L608-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L608-L623) · [Before (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L144-L146)

```diff
-       Dk.e.update(kk, ek), mk.forEach((ek => {
-         ek(kk)
-       }))
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WC(CC) > 0;
+       return ZC && !nC ? "hidden" : CC <= zC ? "open" : ZC ? zC < 5 ? "hidden" : zC < bC ? "teaser" : "locked" : "locked"
+     }
+ 
+     function MC(CC, zC) {
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const {
+         kind: QC,
+         n: wC
+       } = pC(CC);
+       return {
+         key: zC[QC],
+         params: {
+           [QC]: ZC ? String(wC) : wC
+         }
+       }
```

#### 17. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L149-L150` → after: `L626-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L626-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L626-L652) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L149-L150)

```diff
-       localEffectUpdated: {
-         watch: kk => mk.add(kk)
+       tier: "coreTierName",
+       stage: "coreStageName",
+       atomic: "coreAtomicName"
+     };
+ 
+     function SC(CC, zC) {
+       return WC(CC) > 0 && zC < bC
+     }
+ 
+     function pC(CC) {
+       const zC = WC(CC);
+       if (zC > 0) return {
+         kind: "atomic",
+         n: zC,
+         short: `A${zC}`
+       };
+ ... (11 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L153-L164` → after: `L655-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L655-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L655-L658) · [Before (L153-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L153-L164)

```diff
-   },
-   40601: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => Mk
-     });
-     var Dk = ik(4741),
-       fk = ik(4735),
-       Sk = ik(40201),
-       bk = ik(40218);
-     const rk = new Set(Dk.P),
-       Pk = Dk.P.map((kk => (new TextEncoder).encode(kk))),
-       mk = new Map;
+ 
+     function PC(CC) {
+       return wC[Math.max(1, Math.min(CC, wC.length)) - 1]
+     }
```

#### 19. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L168-L207` → after: `L673-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L673-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L673-L675) · [Before (L168-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L168-L207)

```diff
-       return null === (ik = mk.get(kk)) || void 0 === ik ? void 0 : ik[ek]
-     }(0, bk.m)(Dk.tc.NewOtherEntitySettings, (kk => {
-       kk.payloadKind === fk.zc.Msgpack && Pk.some((ek => function(kk, ek) {
-         const ik = ek[0];
-         for (let Dk = kk.indexOf(ik); - 1 !== Dk && Dk + ek.length <= kk.length; Dk = kk.indexOf(ik, Dk + 1)) {
-           let ik = 1;
-           for (; ik < ek.length && kk[Dk + ik] === ek[ik];) ik++;
-           if (ik === ek.length) return !0
-         }
-         return !1
-       }(kk.payload, ek))) && function(kk) {
-         if (null === kk || "object" !== typeof kk || null === kk.settings || "object" !== typeof kk.settings) return;
-         const ek = String(kk.eId),
-           ik = kk.settings;
-         let Dk = mk.get(ek);
-         for (const fk in ik) {
- ... (24 more removed lines; see GitHub link above)
+       return null !== (zC = CC.baf2CoreOpen) && void 0 !== zC ? zC : bC
+     }
+     const iC = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];
```

#### 20. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L210` → after: `L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L678) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L210)

```diff
-       return Mk[kk]
+       return iC.includes(CC)
```

#### 21. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L212` → after: `L680-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L680-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L680-L682) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L212)

```diff
-     const xk = new Sk.d;
+     const eC = (CC, zC) => zC.map((zC => [zC, [CC]])),
+       hC = Object.fromEntries([...eC("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...eC("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...eC("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator",  … [truncated]
+     new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);
```

#### 22. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L215` → after: `L685-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L685-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L685-L686) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L215)

```diff
-       return xk.add(kk)
+       var zC;
+       return null !== (zC = hC[CC]) && void 0 !== zC ? zC : ["Workbench"]
```

#### 23. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L219-L296` → after: `L690-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L690-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L690-L694) · [Before (L219-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L219-L296)

```diff
-       xk.callEach(kk, "a roster listener")
-     }(0, Pk.m)(bk.$, (kk => {
-       const ek = (0, rk.i)(bk.$, kk);
-       if (void 0 === ek) return;
-       const ik = ek.ri.some((kk => {
-           let {
-             Pi: ek,
-             mi: ik
-           } = kk;
-           return null !== ik && mk.has(ek) && mk.getName(ek) !== ik
-         })),
-         {
-           added: Dk,
-           removed: Sk,
-           settingChanges: Pk
-         } = mk.apply(ek),
- ... (62 more removed lines; see GitHub link above)
+       return KC(CC)[0]
+     }
+     wC.slice(1).map(((CC, zC) => `Core Tier ${zC+2}`));
+     var dC = ZC(9194);
+     const mC = ["on", "hud", "off"];
```

#### 24. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L299-L316` → after: `L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L697) · [Before (L299-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L299-L316)

```diff
-       let {
-         deadEId: ek,
-         killerEId: ik,
-         killerLifeformType: Dk,
-         withItem: fk,
-         killstreak: Sk
-       } = kk;
-       return {
-         killer: Yk({
-           eId: ik,
-           lifeformType: Dk
-         }),
-         victim: Yk({
-           eId: ek
-         }),
-         withItem: fk,
- ... (2 more removed lines; see GitHub link above)
+       return "on" === CC
```

#### 25. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L320-L329` → after: `L723-L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L723-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L723-L734) · [Before (L320-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L320-L329)

```diff
-       let {
-         killer: ek,
-         victim: ik,
-         withItem: Dk
-       } = kk;
-       return {
-         killer: Yk(ek),
-         victim: Yk(ik),
-         withItem: Dk,
-         killstreak: 0
+       return `lifeform:${(0,EC.ke)(CC)}`
+     }
+ 
+     function tC(CC) {
+       if (!CC) return null;
+       if (CC.startsWith(sC)) {
+         const zC = CC.slice(6);
+         return cC.includes(zC) ? zC : null
+       }
+       if (CC.endsWith(TC)) {
+         const zC = CC.slice(0, -14);
+         return void 0 !== XC[zC] ? zC : null
```

#### 26. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L334` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L740) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L334)

```diff
-       jk && dk((() => "killed" === kk.kind ? Uk(kk.body) : Hk(kk.body)))
+       return !0 === CC.mobFarm
```

#### 27. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L340-L341` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L744) · [Before (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L340-L341)

```diff
-       var ik;
-       return Kk.h.has(kk) ? null === (ik = Kk.h.getSettings(kk)) || void 0 === ik ? void 0 : ik[ek] : (0, Mk.b)(kk, ek)
+       return uC[XC[zC]] * CC.opMs / 1e3
```

#### 28. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L345-L381` → after: `L751-L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L751-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L751-L752) · [Before (L345-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L345-L381)

```diff
-       var ek, ik, bk, rk, Mk;
-       let {
-         eId: xk,
-         name: nk,
-         colour: Uk,
-         lifeformType: Hk
-       } = kk;
-       if (void 0 === xk || null === xk || "" === xk) {
-         const kk = nk || null;
-         return {
-           id: null,
-           shownName: kk,
-           lifeformType: null === kk && null !== Hk && void 0 !== Hk ? Hk : null,
-           colour: Uk || null,
-           local: !1,
-           realName: null
- ... (21 more removed lines; see GitHub link above)
+       const zC = wC.findIndex((zC => zC.unlocks.includes(CC)));
+       return zC < 0 ? 1 : zC + 1
```

#### 29. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L390` → after: `L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L756) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L390)

```diff
-       null === Ak ? (Ck.length === Lk && Ck.shift(), Ck.push(kk)) : Ak(kk())
+       return Math.floor(CC).toLocaleString("en-US")
```

#### 30. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L393-L402` → after: `L763-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L763-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L763-L764) · [Before (L393-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L393-L402)

```diff
-     function Vk() {
-       sk || (sk = !0, (0, nk.m)(bk.tc.PlayerKilled, (kk => {
-         const ek = (0, xk.k)(kk);
-         (0, xk.e)(ek) && dk((() => Uk(ek)))
-       })), (0, nk.m)(bk.tc.CustomKillfeed, (kk => {
-         const ek = (0, xk.k)(kk);
-         (0, xk.e)(ek) && (0, xk.e)(ek.killer) && (0, xk.e)(ek.victim) && dk((() => Hk(ek)))
-       })), (0, nk.g)((() => {
-         Ck = []
-       })))
+     function Zz(CC, zC, ZC) {
+       return `${VC} ${CC} ${zC} ${ZC}`
```

#### 31. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L404-L441` → after: `L766-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L766-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L766-L800) · [Before (L404-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L404-L441)

```diff
-     const Fk = Object.freeze([0, 0, 0]),
-       uk = [0, 0, 0],
-       qk = [0, 0, 0],
-       Ik = {
-         kill: {
-           watch(kk) {
-             if (jk = !0, 0 === Ck.length) return Ak = kk, () => {
-               jk = !1, Ak = null
-             };
-             const ek = setTimeout((() => {
-               const ek = Ck;
-               Ck = [], Ak = kk;
-               for (const Dk of ek) try {
-                 kk(Dk())
-               } catch (ik) {
-                 console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", ik)
- ... (22 more removed lines; see GitHub link above)
+ 
+     function Qz(CC, zC, ZC) {
+       return `${Cz} ${CC} ${zC} ${ZC}`
+     }
+ 
+     function wz(CC) {
+       return `${Cz} ${CC}`
+     }
+     const bz = [
+       [`${VC} `, "take"],
+       [`${Cz} `, "put"]
+     ];
+ 
+     function nz(CC) {
+       const zC = bz.find((zC => {
+         let [ZC] = zC;
+ ... (19 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L443-L450` → after: `L802-L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L802-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L802-L881) · [Before (L443-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L443-L450)

```diff
-   },
-   38583: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => Dk
-     });
-     class Dk {
-       constructor() {
-         this.members = new Map
+     }
+ 
+     function fz(CC, zC) {
+       const ZC = "number" === typeof CC ? CC : "one" === CC ? 1 : "stack" === CC ? 99 : zC;
+       return Math.min(zC, ZC)
+     }
+ 
+     function oz(CC, zC) {
+       const ZC = CC => "number" === typeof CC ? CC : "one" === CC ? 1 : 99;
+       return "fill" === CC || "fill" === zC ? "fill" : ZC(CC) + ZC(zC)
+     }
+ 
+     function qz(CC, zC) {
+       const ZC = nz(CC),
+         QC = nz(zC),
+         wC = ZC && QC ? function(CC, zC) {
+ ... (64 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L452-L471` → after: `L883-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L883-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L883-L894) · [Before (L452-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L452-L471)

```diff
-       apply(kk) {
-         const ek = {
-           added: [],
-           removed: [],
-           settingChanges: []
-         };
-         for (const Dk of kk.ri) {
-           let kk = this.members.get(Dk.Pi);
-           if (kk || (kk = {
-               name: null,
-               settings: {}
-             }, this.members.set(Dk.Pi, kk), ek.added.push(Dk.Pi)), null !== Dk.mi && (kk.name = Dk.mi), null !== Dk.Mi || Dk.Ki.length > 0) {
-             const ik = null === Dk.Mi ? {} : JSON.parse(Dk.Mi);
-             Object.assign(kk.settings, ik);
-             for (const ek of Dk.Ki) delete kk.settings[ek], ik[ek] = void 0;
-             ek.settingChanges.push({
- ... (4 more removed lines; see GitHub link above)
+     }
+     const ez = "baf2synth",
+       hz = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthe … [truncated]
+       Kz = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
+       Yz = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
+       dz = function(CC, zC) {
+         return {
+           input: CC,
+           inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
+           output: zC,
+           outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+           bonus: arguments.length > 4 ? arguments[4] : void 0
```

#### 34. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L473-L479` → after: `L896-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L896-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L896-L900) · [Before (L473-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L473-L479)

```diff
-         for (const Dk of kk.xi) {
-           const kk = this.members.get(Dk);
-           var ik;
-           if (kk) this.members.delete(Dk), ek.removed.push({
-             playerId: Dk,
-             name: null !== (ik = kk.name) && void 0 !== ik ? ik : void 0
-           })
+       },
+       mz = function(CC, zC) {
+         return {
+           ...dz(CC, zC, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
+           nuclear: !0
```

#### 35. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L481-L495` → after: `L902-L16969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L902-L16969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L902-L16969) · [Before (L481-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L481-L495)

```diff
-         return ek
-       }
-       has(kk) {
-         return this.members.has(kk)
-       }
-       ids() {
-         return [...this.members.keys()]
-       }
-       getName(kk) {
-         var ek, ik;
-         return null !== (ek = null === (ik = this.members.get(kk)) || void 0 === ik ? void 0 : ik.name) && void 0 !== ek ? ek : void 0
-       }
-       getSettings(kk) {
-         var ek;
-         return null === (ek = this.members.get(kk)) || void 0 === ek ? void 0 : ek.settings
+       },
+       Hz = Kz.map((CC => mz(CC, "Biomass", 2))),
+       Ez = {
+         "Burner Drill": {
+           kind: "Burner Drill",
+           opMs: 4e3,
+           inputSlot: null,
+           fuelSlot: 0,
+           outputSlots: [1, 2, 3],
+           recipes: []
+         },
+         Crusher: {
+           kind: "Crusher",
+           opMs: 4e3,
+           inputSlot: 0,
+           fuelSlot: 1,
+ ... (16052 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L497` → after: `L16971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R16971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L16971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L16971) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L497)

```diff
-       getSetting(kk, ek) {
+       shiftOnScreen(CC) {
```

#### 37. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L499` → after: `L16973-L17050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R16973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L16973-L17050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L16973-L17050) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L499)

```diff
-         return null === (ik = this.members.get(kk)) || void 0 === ik ? void 0 : ik.settings[ek]
+         const ZC = this.anchorOf(CC);
+         if (!ZC) return 0;
+         const {
+           halfWidth: QC
+         } = this.extentOf(CC), wC = ZC.x + (null !== (zC = this.labelOffsets.get(CC)) && void 0 !== zC ? zC : 0), bC = wC + QC - (this.innerWidth - 6);
+         return bC > 0 ? -bC : Math.max(0, 6 - (wC - QC))
+       }
+       runLabelAside(CC, zC) {
+         var ZC;
+         let QC = null;
+         for (let nC = 0; nC < CC.children.length; nC++) CC.children[nC].classList.contains("DirectionArrowLabel") && (QC = CC.children[nC]);
+         if (!QC) return 0;
+         const wC = CC.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(CC) : null,
+           bC = (wC && this.api ? this.side.sideOf(this.api, {
+             x: wC.x / this.innerWidth * 100,
+             y: wC.y / this.innerHeight * 100
+ ... (62 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/243.js` (Changed code · before: `L502` → after: `L17053-L17790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9R17053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4a939812a7d2962fe2206fe6257f0b5c618264562edc429b520fe8921fa2cea9) · [After (L17053-L17790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/243.js#L17053-L17790) · [Before (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/243.js#L502)

```diff
-         this.members.clear()
+         this.picks.clear()
+       }
+       CM(CC, zC, ZC) {
+         this.picks.set(CC, {
+           item: zC,
+           had: ZC(zC)
+         }), this.select(CC, zC)
+       }
+     }(Ew.s);
+ 
+     function oG(CC) {
+       return zC => {
+         let ZC = 0;
+         for (const QC of CC.getInventoryItems())(null === QC || void 0 === QC ? void 0 : QC.name) === zC && (ZC += null === QC.amount ? 1 : Math.max(QC.amount, 0));
+         return ZC
+       }
+ ... (722 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/244.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/244.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38)

#### 1. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L4-L6` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L4-L8) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L4-L6)

```diff
-   39021: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       default: () => iD
+   40930: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC,
+       d: () => FC,
+       g: () => qC
```

#### 2. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L8-L144` → after: `L10-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L10-L14) · [Before (L8-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L8-L144)

```diff
-     const Dk = [0, 90, 180, 270],
-       fk = "plotsblueprint";
-     var Sk = ik(60),
-       bk = ik(36143),
-       rk = ik(22),
-       Pk = ik(1614),
-       mk = ik(1688),
-       Mk = ik(26);
-     const Kk = [
-         ["farm_hut", "farm_house", "farm_barn"],
-         ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
-         ["market_stand", "market_stall", "market_shop"],
-         ["castle_wall", "castle_gate", "castle_tower"]
-       ],
-       xk = {
-         farm_hut: {
- ... (121 more removed lines; see GitHub link above)
+     var QC, wC = ZC(36991),
+       bC = ZC(36963);
+     ! function(CC) {
+       CC[CC.CW = 0] = "CW", CC[CC.CCW = 1] = "CCW"
+     }(QC || (QC = {}));
```

#### 3. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L146-L152` → after: `L16-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L16-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L16-L24) · [Before (L146-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L146-L152)

```diff
-       constructor(kk, ek) {
-         this.api = kk, this.placement = ek, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
-           this.placement.stop(), this.CU("journal_opened")
-         }, this.build = kk => {
-           this.CU("placement_started"), this.placement.start(kk), (0, bk.d)()
-         }, this.putAway = () => {
-           this.api.sendCommand(`${fk} cancel`)
+       static Interpolate(CC, zC, ZC, QC, wC) {
+         if (0 === CC) return 0;
+         const bC = 1 - 3 * QC + 3 * zC,
+           nC = 3 * QC - 6 * zC,
+           fC = 3 * zC;
+         let oC = CC;
+         for (let qC = 0; qC < 5; qC++) {
+           const zC = oC * oC;
+           oC -= (bC * (zC * oC) + nC * zC + fC * oC - CC) * (1 / (3 * bC * zC + 2 * nC * oC + fC)), oC = Math.min(1, Math.max(0, oC))
```

#### 4. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L154-L169` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L26) · [Before (L154-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L154-L169)

```diff
-       }
-       getPages() {
-         return this.pages
-       }
-       BU(kk) {
-         let [, ek, ik] = kk;
-         this.pages = pk(ek, ik), Mk.j.tm(yk, this.pages, !0)
-       }
-       openFromServer() {
-         this.openRequested = !0, this.Px()
-       }
-       Px() {
-         this.openRequested && !rk.b.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, Pk.s)() || (0, mk.isTypingInInput)() || null !== this.placement.getView() || (0, bk.r)())
-       }
-       CU(kk) {
-         this.reported.has(kk) || (this.reported.add(kk), this.api.sendCommand(`${fk} report ${kk}`))
+         return 3 * Math.pow(1 - oC, 2) * oC * ZC + 3 * (1 - oC) * Math.pow(oC, 2) * wC + Math.pow(oC, 3)
```

#### 5. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L195-L197` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L31) · [Before (L195-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L195-L197)

```diff
-         this.blockMetadata = kk, this.blockIdMappings = new Map, this.maxBlockId = void 0;
-         const ek = new Set(Object.keys(kk).map((ek => kk[ek].id)));
-         ek.add(0), this.maxBlockId = Math.max(...ek)
+         this._radians = CC, this._radians < 0 && (this._radians += 2 * Math.PI)
```

#### 6. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L199-L201` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L33-L34) · [Before (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L199-L201)

```diff
-       static
-       for (kk) {
-         return Ek(kk)
+       degrees() {
+         return 180 * this._radians / Math.PI
```

#### 7. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L203-L206` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L36-L37) · [Before (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L203-L206)

```diff
-       getBlockIdMapping(kk, ek) {
-         const ik = this.getBlockIdMappingKey(kk, ek);
-         let Dk = this.blockIdMappings.get(ik);
-         return void 0 === Dk && Ik.includes(kk) && (Dk = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, kk, ek), this.blockIdMappings.set(ik, Dk)), Dk
+       radians() {
+         return this._radians
```

#### 8. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L208-L209` → after: `L39-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L39-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L39-L42) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L208-L209)

```diff
-       turnBlockId(kk, ek, ik) {
-         return this.mapBlockId(this.blockMetadata[kk], ek, this.getRotationMapping(ek, ik), ik)
+       static BetweenTwoPoints(CC, zC) {
+         const ZC = zC.subtract(CC),
+           QC = Math.atan2(ZC.y, ZC.x);
+         return new fC(QC)
```

#### 9. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L211-L212` → after: `L44-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L44-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L44-L51) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L211-L212)

```diff
-       getBlockIdMappingKey(kk, ek) {
-         return `r${kk}|m${Number(ek)}`
+       static BetweenTwoVectors(CC, zC) {
+         let ZC = CC.lengthSquared() * zC.lengthSquared();
+         if (0 === ZC) return new fC(Math.PI / 2);
+         ZC = Math.sqrt(ZC);
+         let QC = CC.dot(zC) / ZC;
+         QC = (0, wC.Clamp)(QC, -1, 1);
+         const bC = Math.acos(QC);
+         return new fC(bC)
```

#### 10. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L214-L231` → after: `L53-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L53-L54) · [Before (L214-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L214-L231)

```diff
-       createBlockIdMapping(kk, ek, ik, Dk) {
-         const fk = new Uint16Array(ek + 1),
-           Sk = this.getRotationMapping(ik, Dk);
-         for (const bk in kk) {
-           const ek = kk[bk];
-           fk[ek.id] = this.mapBlockId(ek, ik, Sk, Dk)
-         }
-         return fk
-       }
-       getRotationMapping(kk, ek) {
-         const ik = Math.round(kk / 90),
-           Dk = new Uint8Array(4);
-         for (let fk = 0; fk < 4; fk++) Dk[fk] = (4 + fk - ik) % 4;
-         if (ek) {
-           let kk = Dk[0];
-           Dk[0] = Dk[1], Dk[1] = kk, kk = Dk[2], Dk[2] = Dk[3], Dk[3] = kk
- ... (2 more removed lines; see GitHub link above)
+       static FromRadians(CC) {
+         return new fC(CC)
```

#### 11. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L233-L399` → after: `L56-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L56-L57) · [Before (L233-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L233-L399)

```diff
-       mapBlockId(kk, ek, ik, Dk) {
-         var fk;
-         const {
-           blockMetadata: Sk
-         } = this, bk = Math.round(ek / 90), {
-           id: rk,
-           meta: Pk
-         } = kk, {
-           rot: mk,
-           rootName: Mk,
-           metaStr: Kk
-         } = Pk;
-         let xk;
-         const [, nk, Uk] = null !== (fk = vk.exec(Kk)) && void 0 !== fk ? fk : [];
-         if (void 0 !== nk) {
-           var Hk, wk;
- ... (151 more removed lines; see GitHub link above)
+       static FromDegrees(CC) {
+         return new fC(CC * Math.PI / 180)
```

#### 12. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L537-L549` → after: `L61-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L61-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L61-L71) · [Before (L537-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L537-L549)

```diff
-       constructor() {
-         this.samples = []
-       }
-       add(kk, ek) {
-         for (this.samples.push({
-             x: kk,
-             at: ek
-           }); ek - this.samples[0].at > 100;) this.samples.shift()
-       }
-       get() {
-         const kk = this.samples[0],
-           ek = this.samples[this.samples.length - 1];
-         return ek.at > kk.at ? (ek.x - kk.x) / (ek.at - kk.at) : 0
+       constructor(CC, zC, ZC) {
+         this.startPoint = CC, this.midPoint = zC, this.endPoint = ZC;
+         const QC = Math.pow(zC.x, 2) + Math.pow(zC.y, 2),
+           wC = (Math.pow(CC.x, 2) + Math.pow(CC.y, 2) - QC) / 2,
+           nC = (QC - Math.pow(ZC.x, 2) - Math.pow(ZC.y, 2)) / 2,
+           oC = (CC.x - zC.x) * (zC.y - ZC.y) - (zC.x - ZC.x) * (CC.y - zC.y);
+         this.centerPoint = new bC.n((wC * (zC.y - ZC.y) - nC * (CC.y - zC.y)) / oC, ((CC.x - zC.x) * nC - (zC.x - ZC.x) * wC) / oC), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = fC.BetweenTwoPoints(this.centerPoint, this.startPoint);
+         const qC = this.startAngle.degrees();
+         let FC = fC.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
+           WC = fC.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
+         FC - qC > 180 && (FC -= 360), FC - qC < -180 && (FC += 360), WC - FC > 180 && (WC -= 360), WC - FC < -180 && (WC += 360), this.orientation = FC - qC < 0 ? 0 : 1, this.angle = fC.FromDegrees(0 === this.orientation ? qC - WC : WC - qC)
```

#### 13. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L772-L894` → after: `L75-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L75-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L75-L146) · [Before (L772-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L772-L894)

```diff
-       constructor() {
-         this.step = ["none"], this.plot = ["none"]
-       }
-       getStep() {
-         return this.step
-       }
-       receiveStep(kk) {
-         this.step = kk, Mk.j.tm(Me, kk, !0)
-       }
-       getPlot() {
-         return this.plot
-       }
-       receivePlot(kk) {
-         this.plot = kk, Mk.j.tm(Ke, kk, !0)
-       }
-     }
- ... (107 more removed lines; see GitHub link above)
+       constructor(CC, zC) {
+         this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new bC.n(CC, zC))
+       }
+       addLineTo(CC, zC) {
+         if (this.closed) return this;
+         const ZC = new bC.n(CC, zC),
+           QC = this._points[this._points.length - 1];
+         return this._points.push(ZC), this._length += ZC.subtract(QC).length(), this
+       }
+       addArcTo(CC, zC, ZC, QC) {
+         let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
+         if (this.closed) return this;
+         const nC = this._points[this._points.length - 1],
+           fC = new bC.n(CC, zC),
+           qC = new bC.n(ZC, QC),
+           FC = new oC(nC, fC, qC);
+ ... (56 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L902-L1064` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L149) · [Before (L902-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L902-L1064)

```diff
-         return {
-           kinds: ik,
-           shapes: Dk,
-           empty: fk,
-           inUse: Sk,
-           ownAltActionMessage: bk,
-           placingItems: rk
-         }
-       }(), je
-     }
- 
-     function de() {
-       return Object.keys(qk.g).filter((kk => qk.g[kk].name === kk))
-     }
- 
-     function Ve(kk) {
- ... (147 more removed lines; see GitHub link above)
+         return zC
```

#### 15. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1066-L1069` → after: `L151-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L151-L152) · [Before (L1066-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1066-L1069)

```diff
-     }
-     class Ne {
-       constructor(kk) {
-         this.api = kk, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
+       close() {
+         return this.closed = !0, this
```

#### 16. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1071-L1089` → after: `L154-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L154-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L154-L158) · [Before (L1071-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1071-L1089)

```diff
-       watch(kk) {
-         const ek = Be.g.oU;
-         this.chunks = [];
-         for (let ik = 0; ik < kk.length; ik += 3) {
-           const Dk = Math.floor(kk[ik] / ek),
-             fk = Math.floor(kk[ik + 1] / ek),
-             Sk = Math.floor(kk[ik + 2] / ek);
-           this.watches(Dk, fk, Sk) || this.chunks.push(Dk, fk, Sk)
-         }
-         this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
-       }
-       changed() {
-         const kk = performance.now();
-         if (kk - this.lastCheckMs < 100) return !1;
-         this.lastCheckMs = kk;
-         let ek = !1;
- ... (3 more removed lines; see GitHub link above)
+       length() {
+         let CC = this._length;
+         if (this.closed) {
+           const zC = this._points[this._points.length - 1];
+           CC += this._points[0].subtract(zC).length()
```

#### 17. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1093-L1132` → after: `L162-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L162-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L162-L166) · [Before (L1093-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1093-L1132)

```diff
-       watches(kk, ek, ik) {
-         for (let Dk = 0; Dk < this.chunks.length; Dk += 3)
-           if (this.chunks[Dk] === kk && this.chunks[Dk + 1] === ek && this.chunks[Dk + 2] === ik) return !0;
-         return !1
-       }
-     }
-     const Re = .35,
-       Je = {
-         size: .9,
-         alpha: .35,
-         crossed: !1
-       },
-       ki = {
-         size: 1.04,
-         alpha: .45,
-         crossed: !0
- ... (24 more removed lines; see GitHub link above)
+       area() {
+         const CC = this._points.length;
+         let zC = 0;
+         for (let ZC = CC - 1, QC = 0; QC < CC; ZC = QC++) zC += this._points[ZC].x * this._points[QC].y - this._points[QC].x * this._points[ZC].y;
+         return .5 * zC
```

#### 18. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1134-L1144` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L168-L169) · [Before (L1134-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1134-L1144)

```diff
-       show(kk) {
-         const ek = [];
-         for (const ik of kk) {
-           const kk = this.shown.findIndex((kk => {
-             let {
-               group: ek
-             } = kk;
-             return Si(ek, ik.rgb, ik.look) && bi(ek, ik)
-           })); - 1 === kk ? ek.push(this.build(ik)) : (ek.push(this.shown[kk]), this.shown.splice(kk, 1))
-         }
-         this.dispose(), this.shown = ek
+       getPoints() {
+         return this._points
```

#### 19. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1146-L1148` → after: `L171-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L171-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L171-L183) · [Before (L1146-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1146-L1148)

```diff
-       dispose() {
-         for (const {
-             meshes: kk
+       getPointAtLengthPosition(CC) {
+         if (CC < 0 || CC > 1) return bC.n.Zero();
+         const zC = CC * this.length();
+         let ZC = 0;
+         for (let QC = 0; QC < this._points.length; QC++) {
+           const CC = (QC + 1) % this._points.length,
+             wC = this._points[QC],
+             nC = this._points[CC].subtract(wC),
+             fC = nC.length() + ZC;
+           if (zC >= ZC && zC <= fC) {
+             const CC = nC.normalize(),
+               QC = zC - ZC;
+             return new bC.n(wC.x + CC.x * QC, wC.y + CC.y * QC)
```

#### 20. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1150-L1168` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L185) · [Before (L1150-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1150-L1168)

```diff
-           of this.shown)
-           for (const ek of kk) this.api.disposeGameMesh(ek);
-         this.shown = []
-       }
-       build(kk) {
-         const {
-           rgb: ek,
-           look: ik,
-           boxes: Dk
-         } = kk, fk = [ek[0] + (1 - ek[0]) * Re, ek[1] + (1 - ek[1]) * Re, ek[2] + (1 - ek[2]) * Re], Sk = [this.buildMesh(kk.cells, ek, ik.alpha, ((kk, ek, fk, Sk) => {
-           fi(kk, ek, fk, Dk[Sk], ik.size, !1)
-         })), this.buildMesh(kk.cells, fk, ik.alpha, ((kk, ek, fk, Sk) => {
-           fi(kk, ek, fk, Dk[Sk], ik.size, !0)
-         }))];
-         return ik.crossed && Sk.push(this.buildMesh(kk.cells, ek, .9, ((kk, ek, Dk) => {
-           (0, Oe.e)(kk, ek, Dk, ik.size + .01, .12)
- ... (3 more removed lines; see GitHub link above)
+           ZC = fC
```

#### 21. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1171-L1283` → after: `L189-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L189-L190) · [Before (L1171-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1171-L1283)

```diff
-       buildMesh(kk, ek, ik, Dk) {
-         const fk = [kk[0], kk[1], kk[2]],
-           Sk = [],
-           bk = [];
-         for (let rk = 0; rk < kk.length; rk += 3) Dk(Sk, bk, [kk[rk] - fk[0] + .5, kk[rk + 1] - fk[1] + .5, kk[rk + 2] - fk[2] + .5], rk / 3);
-         return this.api.createGameMesh({
-           positions: Sk,
-           indices: bk
-         }, {
-           rgb: [ek[0], ek[1], ek[2]],
-           alpha: ik
-         }, fk)
-       }
-     }
- 
-     function fi(kk, ek, ik, Dk, fk, Sk) {
- ... (97 more removed lines; see GitHub link above)
+       static StartingAt(CC, zC) {
+         return new qC(CC, zC)
```

#### 22. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1287-L1314` → after: `L194-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L194-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L194-L199) · [Before (L1287-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1287-L1314)

```diff
-       constructor(kk, ek, ik) {
-         this.api = kk, this.localPlayerId = ek, this.juice = ik, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], th … [truncated]
-       }
-       BU(kk) {
-         const ek = "active" === kk[0] ? `${kk[1]}|${kk[3]}|${kk[4]}|${kk[5]}|${kk[6]}` : "";
-         if ("active" !== kk[0]) "built" === kk[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
-         else {
-           const [, , , , , , , ik, Dk, fk, Sk] = kk;
-           ek !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = ik) : ik === this.layerY ? this.burstUnlisted(Dk) : ik > this.layerY && this.finishLayer(ik), this.layerY = ik, this.layerCells.has(ik) || this.layerCells.set(ik, Dk.filter(Ki)), this.ghostCells = Dk, th … [truncated]
-         }
-         ek !== this.blueprint && (this.blueprint = ek, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((kk => this.api.blockNameToBlockId(kk))), this.chunkWatch.watch([...this.ghostCells.filter(Ki), . … [truncated]
-       }
-       finishLayer(kk) {
-         this.burstUnlisted([]), kk > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = kk)
-       }
-       Px() {
- ... (12 more removed lines; see GitHub link above)
+       static CreateQuadraticBezier(CC, zC, ZC, QC) {
+         QC = QC > 2 ? QC : 3;
+         const wC = [],
+           nC = (CC, zC, ZC, QC) => (1 - CC) * (1 - CC) * zC + 2 * CC * (1 - CC) * ZC + CC * CC * QC;
+         for (let fC = 0; fC <= QC; fC++) wC.push(new bC.r(nC(fC / QC, CC.x, zC.x, ZC.x), nC(fC / QC, CC.y, zC.y, ZC.y), nC(fC / QC, CC.z, zC.z, ZC.z)));
+         return new FC(wC)
```

#### 23. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1316-L1318` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L201-L202) · [Before (L1316-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1316-L1318)

```diff
-       burstUnlisted(kk) {
-         const ek = new Set;
-         for (let fk = 0; fk < kk.length; fk += 4) ek.add(`${kk[fk]},${kk[fk+1]},${kk[fk+2]}`);
+       static CreateCubicBezier(CC, zC, ZC, QC, wC) {
+         wC = wC > 3 ? wC : 4;
```

#### 24. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1320-L1327` → after: `L204-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L204-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L204-L206) · [Before (L1320-L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1320-L1327)

```diff
-           {
-             ghostCells: Dk
-           } = this;
-         for (let fk = 0; fk < Dk.length; fk += 4) {
-           const kk = `${Dk[fk]},${Dk[fk+1]},${Dk[fk+2]}`;
-           !ek.has(kk) && this.open.delete(kk) && ik.push(this.filledCell(fk))
-         }
-         this.burst(ik)
+           fC = (CC, zC, ZC, QC, wC) => (1 - CC) * (1 - CC) * (1 - CC) * zC + 3 * CC * (1 - CC) * (1 - CC) * ZC + 3 * CC * CC * (1 - CC) * QC + CC * CC * CC * wC;
+         for (let oC = 0; oC <= wC; oC++) nC.push(new bC.r(fC(oC / wC, CC.x, zC.x, ZC.x, QC.x), fC(oC / wC, CC.y, zC.y, ZC.y, QC.y), fC(oC / wC, CC.z, zC.z, ZC.z, QC.z)));
+         return new FC(nC)
```

#### 25. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1329-L1344` → after: `L208-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L208-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L208-L212) · [Before (L1329-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1329-L1344)

```diff
-       refresh() {
-         const {
-           ghostCells: kk,
-           palette: ek,
-           occupiedCells: ik
-         } = this, Dk = new ii, fk = new Set, Sk = [], bk = [];
-         for (let rk = 0; rk < kk.length; rk += 4) {
-           const [ik, Pk, mk, Mk] = [kk[rk], kk[rk + 1], kk[rk + 2], kk[rk + 3]], Kk = this.api.getBlockId(ik, Pk, mk), xk = `${ik},${Pk},${mk}`, nk = Fe(this.blockIds[Mk], Kk);
-           !nk && ue(Kk) ? Dk.add(ik, Pk, mk, Ie(ek[Mk]), Je, te(ek[Mk])) : nk ? this.open.has(xk) && Sk.push(this.filledCell(rk)) : Dk.add(ik, Pk, mk, ei, ki), !nk && this.api.isBlockInLoadedChunk(ik, Pk, mk) && (fk.add(xk), bk.push(ik, Pk, mk, ue(Kk) ? 0 : 1))
-         }
-         this.open = fk, this.nextCells = bk;
-         for (let rk = 0; rk < ik.length; rk += 3) {
-           const [kk, ek, fk] = [ik[rk], ik[rk + 1], ik[rk + 2]];
-           ue(this.api.getBlockId(kk, ek, fk)) || Dk.add(kk, ek, fk, ei, ki)
-         }
-         this.meshes.show(Dk.toArray()), this.burst(Sk), this.showNext(), this.turn.retry(performance.now())
+       static CreateHermiteSpline(CC, zC, ZC, QC, wC) {
+         const nC = [],
+           fC = 1 / wC;
+         for (let oC = 0; oC <= wC; oC++) nC.push(bC.r.Hermite(CC, zC, ZC, QC, oC * fC));
+         return new FC(nC)
```

#### 26. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1346-L1357` → after: `L214-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L214-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L214-L222) · [Before (L1346-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1346-L1357)

```diff
-       burst(kk) {
-         const ek = performance.now(),
-           ik = [];
-         for (const [fk, Sk, bk] of kk) {
-           const kk = [fk, Sk, bk];
-           this.lastSeenFilled = kk, this.foreseen.delete(kk.join()) || ik.push(kk)
-         }
-         const Dk = this.isHolding(ek);
-         for (const fk of ik) {
-           if (this.lastFilled = fk, Dk && this.pressFilled) {
-             this.turn.filled(fk, ek);
-             continue
+       static CreateCatmullRomSpline(CC, zC, ZC) {
+         const QC = [],
+           wC = 1 / zC;
+         let nC = 0;
+         if (ZC) {
+           const ZC = CC.length;
+           for (let fC = 0; fC < ZC; fC++) {
+             nC = 0;
+             for (let oC = 0; oC < zC; oC++) QC.push(bC.r.CatmullRom(CC[fC % ZC], CC[(fC + 1) % ZC], CC[(fC + 2) % ZC], CC[(fC + 3) % ZC], nC)), nC += wC
```

#### 27. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1359-L1362` → after: `L224-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L224-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L224-L231) · [Before (L1359-L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1359-L1362)

```diff
-           const kk = this.turn.arrived(fk, ek);
-           if (null !== kk) {
-             this.pressFilled = Dk;
-             for (const [ek, ik] of this.foreseen) ik <= kk && this.foreseen.delete(ek)
+           QC.push(QC[0])
+         } else {
+           const ZC = [];
+           ZC.push(CC[0].clone()), ZC.push(...CC), ZC.push(CC[CC.length - 1].clone());
+           let fC = 0;
+           for (; fC < ZC.length - 3; fC++) {
+             nC = 0;
+             for (let CC = 0; CC < zC; CC++) QC.push(bC.r.CatmullRom(ZC[fC], ZC[fC + 1], ZC[fC + 2], ZC[fC + 3], nC)), nC += wC
```

#### 28. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1365-L1372` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L235) · [Before (L1365-L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1365-L1372)

```diff
-         this.juice.filled(kk)
-       }
-       showNext() {
-         var kk;
-         const ek = this.api.getPositionView(this.localPlayerId);
-         this.playerCells.splice(0, 1 / 0, ...Mi(ek));
-         const ik = this.lastFilled;
-         this.nextCell = this.pickNext(null === ik ? [ek[0], ek[1] + 1, ek[2]] : (0, Xe.c)(ik), (() => !1)), this.outline.show(null !== (kk = this.aimed) && void 0 !== kk ? kk : this.nextCell)
+         return new FC(QC)
```

#### 29. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1374-L1408` → after: `L237-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L237-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L237-L271) · [Before (L1374-L1408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1374-L1408)

```diff
-       pickNext(kk, ek) {
-         const ik = this.api.getPositionView(this.localPlayerId),
-           Dk = [ik[0], ik[1] + Be.g.Qp * Be.g.playerEyeToHeightRatio, ik[2]],
-           fk = ri(this.api, this.localPlayerId),
-           {
-             nextCells: Sk
-           } = this,
-           bk = kk => [Sk[kk], Sk[kk + 1], Sk[kk + 2]],
-           rk = function(kk, ek, ik, Dk, fk, Sk) {
-             let bk = -1,
-               rk = -1,
-               Pk = 1 / 0;
-             for (let mk = 0; mk < kk.length; mk += ek) {
-               const ek = (Sk(mk) ? 2 : 0) + (Dk(mk) ? 1 : 0);
-               if (ek < rk || fk(mk)) continue;
-               const Mk = (kk[mk] + .5 - ik[0]) ** 2 + (kk[mk + 1] + .5 - ik[1]) ** 2 + (kk[mk + 2] + .5 - ik[2]) ** 2;
- ... (19 more removed lines; see GitHub link above)
+       static ArcThru3Points(CC, zC, ZC) {
+         let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
+           wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           nC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+         const fC = [],
+           oC = zC.subtract(CC),
+           qC = ZC.subtract(zC),
+           WC = CC.subtract(ZC),
+           NC = bC.r.Cross(oC, qC),
+           MC = NC.length();
+         if (MC < Math.pow(10, -8)) return new FC(fC);
+         const gC = oC.lengthSquared(),
+           SC = qC.lengthSquared(),
+           pC = WC.lengthSquared(),
+           PC = NC.lengthSquared(),
+           GC = .5 * oC.length() * qC.length() * WC.length() / MC,
+ ... (19 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1410-L1415` → after: `L273-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L273-L274) · [Before (L1410-L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1410-L1415)

```diff
-       attemptAltAction(kk) {
-         const ek = performance.now();
-         if (this.isHolding(ek) || (this.pressFilled = !1), this.altMs = ek, this.pressFilled) return "preventPlacement";
-         const ik = this.findAimed(kk);
-         if (null !== ik) return this.foreseen.set(ik.join(), ek), this.lastFilled = ik, this.aimed = null, this.showNext(), this.turn.filled(ik, ek), this.pressFilled = !0, "preventPlacement";
-         null !== this.nextCell && this.turn.tapped(kk, this.nextCell, ek)
+       constructor(CC) {
+         this._length = 0, this._points = CC, this._length = this._computeLength(CC)
```

#### 31. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1417-L1436` → after: `L276-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L276-L277) · [Before (L1417-L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1417-L1436)

```diff
-       findAimed(kk) {
-         return function(kk, ek, ik, Dk, fk, Sk, bk) {
-           const rk = kk.jek(ek),
-             Pk = null === rk || null === kk.blockNameToBlockId(rk.name, !0) ? null : rk.name,
-             mk = kk.getPositionView(ek),
-             {
-               origin: Mk,
-               direction: Kk
-             } = kk.getActionRay(),
-             xk = Te(Dk, {
-               from: Mk,
-               dir: Kk,
-               reach: ri(kk, ek),
-               solid: ik
-             }, (ek => {
-               const ik = [Dk[ek], Dk[ek + 1], Dk[ek + 2]];
- ... (4 more removed lines; see GitHub link above)
+       getPoints() {
+         return this._points
```

#### 32. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1438-L1439` → after: `L279-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L279-L280) · [Before (L1438-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1438-L1439)

```diff
-       endPress() {
-         this.altMs = null, this.pressFilled = !1
+       length() {
+         return this._length
```

#### 33. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1441-L1445` → after: `L282-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L282-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L282-L287) · [Before (L1441-L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1441-L1445)

```diff
-       filledCell(kk) {
-         const {
-           ghostCells: ek
-         } = this, [ik, Dk, fk] = Ie(this.palette[ek[kk + 3]]);
-         return [ek[kk], ek[kk + 1], ek[kk + 2], ik, Dk, fk]
+       continue (CC) {
+         const zC = this._points[this._points.length - 1],
+           ZC = this._points.slice(),
+           QC = CC.getPoints();
+         for (let wC = 1; wC < QC.length; wC++) ZC.push(QC[wC].subtract(QC[0]).add(zC));
+         return new FC(ZC)
```

#### 34. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1447-L1463` → after: `L289-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L289-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L289-L291) · [Before (L1447-L1463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1447-L1463)

```diff
-     }
- 
-     function Mi(kk) {
-       let [ek, ik, Dk] = kk;
-       const fk = Be.g.zp / 2;
-       return [Math.floor(ek), Math.floor(ik), Math.floor(Dk), Math.floor(ek - fk), Math.floor(ek + fk), Math.floor(ik + Be.g.Qp), Math.floor(Dk - fk), Math.floor(Dk + fk)]
-     }
- 
-     function Ki(kk, ek) {
-       return ek % 4 !== 3
-     }
- 
-     function xi(kk, ek, ik, Dk, fk) {
-       if (!kk.isBlockInLoadedChunk(ek, Dk - 6, ik) || !kk.isBlockInLoadedChunk(ek, Dk + 6 + fk, ik) || !kk.canModifyBlockAt(ek, Dk, ik)) return NaN;
-       let Sk = Dk - 1;
-       if (0 !== kk.getBlockId(ek, Sk, ik)) {
- ... (1 more removed lines; see GitHub link above)
+       _computeLength(CC) {
+         let zC = 0;
+         for (let ZC = 1; ZC < CC.length; ZC++) zC += CC[ZC].subtract(CC[ZC - 1]).length();
```

#### 35. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1509-L1798` → after: `L295-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L295-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L295-L303) · [Before (L1509-L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1509-L1798)

```diff
-     const wi = "plotsBlueprintPlacementChanged",
-       li = {
-         size: .9,
-         alpha: .2,
-         crossed: !1
-       };
-     class yi {
-       constructor(kk, ek) {
-         this.api = kk, this.localPlayerId = ek, this.placing = null, this.view = null, this.camera = {
-           eye: [0, 0, 0],
-           forward: [0, 0, 1],
-           tanHalfFovX: 1,
-           tanHalfFovY: 1
-         }, this.chunkWatch = void 0, this.meshes = void 0, this.start = kk => {
-           var ek, ik, Dk, Sk;
-           const bk = null !== (ek = null === (ik = this.placing) || void 0 === ik ? void 0 : ik.rotation) && void 0 !== ek ? ek : 0,
- ... (274 more removed lines; see GitHub link above)
+   },
+   38501: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => bC
+     });
+     var QC = ZC(38507);
+     const wC = (CC, zC, ZC) => CC ? CC.getClassName && "Mesh" === CC.getClassName() ? null : !CC.getClassName || "SubMesh" !== CC.getClassName() && "PhysicsBody" !== CC.getClassName() ? CC.clone ? CC.clone() : Array.isArray(CC) ? CC.slice() : ZC && "object" === typeof CC ? {
+       ...CC
+     } : null : CC.clone(zC) : null;
```

#### 36. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L1800-L1812` → after: `L305-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L305-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L305-L333) · [Before (L1800-L1812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L1800-L1812)

```diff
-       constructor(kk, ek) {
-         this.api = kk, this.localPlayerId = ek, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
-       }
-       filled(kk) {
-         if (this.api.particlesEnabled())
-           for (const [ek, ik, Dk, fk, Sk, bk] of kk.slice(0, 3)) {
-             const kk = `${fk},${Sk},${bk}`;
-             let rk = this.chips.get(kk);
-             void 0 === rk && (rk = this.api.createParticles(Ai(fk, Sk, bk), {
-               pos: [ek + .5, ik + .5, Dk + .5]
-             }), this.chips.set(kk, rk));
-             for (let ek = 0; ek < 8; ek++) this.setPoint(ek, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
-             rk.emitPoints([ek + .5, ik + .5, Dk + .5], this.points, 8)
+       static DeepCopy(CC, zC, ZC, bC) {
+         let nC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const fC = function(CC) {
+           const zC = [];
+           do {
+             const ZC = Object.getOwnPropertyNames(CC);
+             for (const CC of ZC) - 1 === zC.indexOf(CC) && zC.push(CC)
+           } while (CC = Object.getPrototypeOf(CC));
+           return zC
+         }(CC);
+         for (const qC of fC) {
+           if ("_" === qC[0] && (!bC || -1 === bC.indexOf(qC))) continue;
+           if (qC.endsWith("Observable")) continue;
+           if (ZC && -1 !== ZC.indexOf(qC)) continue;
+           const fC = CC[qC],
+             FC = typeof fC;
+ ... (13 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2337` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L339) · [Before (L2337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L2337)

```diff
-   38725: (kk, ek, ik) => {
+   38507: (CC, zC, ZC) => {
```

#### 38. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2339-L2340` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L341) · [Before (L2339-L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L2339-L2340)

```diff
-       d: () => Dk,
-       e: () => Sk
+       c: () => QC
```

#### 39. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L2347-L2379` → after: `L344-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L344-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/244.js#L344-L392) · [Before (L2347-L2379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/244.js#L2347-L2379)

```diff
-       constructor(kk, ek, ik) {
-         this.style = kk, this.vK = ek, this.half = ik, this.particles = null, this.lastFrame = -1
-       }
-       emit(kk, ek, ik) {
-         let Sk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
-         return ik !== this.lastFrame && (this.lastFrame = ik, this.particles || (this.particles = kk.createParticles(function(kk, ek) {
-           const [
-             [ik, Sk, bk],
-             [rk, Pk, mk]
-           ] = kk.colours;
-           return {
-             texture: kk.soft ? fk : "square_particle",
-             vK: ek,
-             minLifeTime: kk.life[0] / Dk,
-             maxLifeTime: kk.life[1] / Dk,
-             minEmitPower: kk.power[0] * Dk,
- ... (17 more removed lines; see GitHub link above)
+       static _CheckLimit(CC, zC) {
+         let ZC = QC._LogLimitOutputs[CC];
+         return ZC ? ZC.current++ : (ZC = {
+           limit: zC,
+           current: 1
+         }, QC._LogLimitOutputs[CC] = ZC), ZC.current <= ZC.limit
+       }
+       static _GenerateLimitMessage(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const ZC = QC._LogLimitOutputs[CC];
+         if (!ZC || !QC.MessageLimitReached) return;
+         const wC = this._Levels[zC];
+         ZC.current === ZC.limit && QC[wC.name](QC.MessageLimitReached.replace(/%LIMIT%/g, "" + ZC.limit).replace(/%TYPE%/g, wC.name ?? ""))
+       }
+       static _AddLogEntry(CC) {
+         QC._LogCache = CC + QC._LogCache, QC.OnNewCacheEntry && QC.OnNewCacheEntry(CC)
+ ... (33 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/245.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/245.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc)

#### 1. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L4` → after: `L4-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/245.js#L4-L35) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/245.js#L4)

```diff
-   39359: (kk, ek, ik) => {
+   38631: (CC, zC, ZC) => {
+     var QC = {
+       "./cape_cow_cream.png": 27940,
+       "./cape_cow_normal.png": 27949,
+       "./cape_creator_level1.png": 27958,
+       "./cape_creator_level2.png": 27960,
+       "./cape_creator_level3.png": 27965,
+       "./cape_none.png": 27970,
+       "./cape_pig.png": 27978,
+       "./cape_sheep.png": 27981,
+       "./cape_super.png": 27987,
+       "./cape_super_inverted.png": 27996,
+       "./cape_youtuber.png": 28e3
+     };
+ 
+     function wC(CC) {
+ ... (16 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L6` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/245.js#L37) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/245.js#L6)

```diff
-       playDocsSound: () => rk
+       openCharacterPreview: () => yC
```

#### 3. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L8-L10` → after: `L39-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L39-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/245.js#L39-L657) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/245.js#L8-L10)

```diff
-     var Dk = ik(4799),
-       fk = ik(36341),
-       Sk = ik(1177);
+     var QC = ZC(37934),
+       wC = ZC(2753),
+       bC = ZC(583),
+       nC = ZC(37023),
+       fC = ZC(2173),
+       oC = ZC(37014),
+       qC = ZC(39635),
+       FC = ZC(39902),
+       WC = ZC(40925),
+       NC = ZC(36961),
+       MC = ZC(40076),
+       gC = ZC(37138),
+       SC = ZC(40092),
+       pC = ZC(40968),
+       PC = ZC(36952),
+       GC = ZC(1169),
+ ... (603 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L13-L22` → after: `L660-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L660-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/245.js#L660-L766) · [Before (L13-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/245.js#L13-L22)

```diff
-     function rk(kk, ek, ik, rk, Pk) {
-       let mk, Mk = null,
-         Kk = 0,
-         xk = 0;
-       if (ek) mk = new Dk.Howl({
-         src: [`${Sk.clientSideServerUrls.staticUrl}/sounds/music/${kk}.mp3`],
-         html5: !0,
-         volume: ik
-       });
-       else {
+     function LC(CC, zC) {
+       yC.set(CC, zC)
+     }
+     LC(fC.d, RC), LC(oC.j, eC), LC(qC.g, jC), LC(FC.f, sC), (0, WC.c)({
+       create: (CC, zC) => {
+         const ZC = new QC.StandardMaterial(CC.name, zC);
+         return (0, aC.u)(CC, ZC), ZC.detailMap._pluginDefineNames
+       },
+       write: (CC, zC, ZC) => {
+         (0, aC.X)(CC.mirror, zC, ZC)
+       },
+       addFeature: (CC, zC, ZC) => {
+         const QC = yC.get(zC.feature);
+         if (!QC) throw new Error(`${zC.feature.name} has no plugin class (registerPluginClass)`);
+         new QC(CC.mirror, zC.state, ...ZC)
+       },
+ ... (91 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L24-L75` → after: `L768-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L768-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/245.js#L768-L890) · [Before (L24-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/245.js#L24-L75)

```diff
-         Mk = (0, fk.n)(kk);
-         const ek = (0, fk.j)(Mk),
-           ik = null !== (nk = ek.sprite[kk]) && void 0 !== nk ? nk : null;
-         if (!ik) throw new Error(`Docs sound ${kk} is not in sprite sheet ${Mk}`);
-         Kk = ik[0] / 1e3, xk = ik[1] / 1e3, mk = bk.get(Mk), mk || (mk = new Dk.Howl({
-           ...ek,
-           volume: 1
-         }), bk.set(Mk, mk))
-       }
-       const Uk = ek ? mk.play() : mk.play(kk);
-       mk.volume(ik, Uk), rk > 0 && mk.seek(Kk + rk, Uk);
-       const Hk = () => ek ? mk.duration() : xk;
-       let wk = !1;
-       const lk = kk => {
-           wk || (wk = !0, mk.off("play", pk, Uk), mk.off("end", yk, Uk), mk.off("loaderror", Lk), mk.off("playerror", Yk, Uk), ek && mk.unload(), Pk.onEnd(kk))
-         },
- ... (36 more removed lines; see GitHub link above)
+         (0, qC.n)(CC), this.model = CC, null === (zC = this.onLinked) || void 0 === zC || zC.call(this, CC)
+       }
+       relink() {
+         this.release();
+         const CC = [];
+         for (const wC of Object.values(this._vertexBuffers))
+           if (!wC.getIsInstanced()) {
+             const {
+               byteOffset: zC,
+               byteStride: ZC,
+               type: QC,
+               normalized: bC
+             } = wC;
+             CC.push({
+               kind: wC.getKind(),
+               data: wC.getData(),
+ ... (107 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/246.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/246.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835)

#### 1. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L4)

```diff
-   39374: (kk, ek, ik) => {
+   40923: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L6)

```diff
-       default: () => gk
+       openMobLineupPreview: () => sC,
+       openMobPreview: () => rC,
+       openPetPreview: () => TC
```

#### 3. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L8-L66` → after: `L10-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L10-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L10-L63) · [Before (L8-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L8-L66)

```diff
-     ik(6310);
-     var Dk = ik(60),
-       fk = ik(39377),
-       Sk = ik(39651),
-       bk = ik(39774),
-       rk = ik(39813),
-       Pk = ik(39829),
-       mk = ik(36868),
-       Mk = ik(36690),
-       Kk = ik(39995),
-       xk = ik(40029),
-       nk = (ik(40055), ik(1207)),
-       Uk = ik(189),
-       Hk = ik(1172),
-       wk = ik(22),
-       lk = ik(2683),
- ... (43 more removed lines; see GitHub link above)
+     var QC = ZC(39635),
+       wC = ZC(39902),
+       bC = ZC(40925),
+       nC = ZC(37138),
+       fC = ZC(36961),
+       oC = ZC(40076),
+       qC = ZC(40946),
+       FC = ZC(38300),
+       WC = ZC(37032),
+       NC = ZC(37014),
+       MC = ZC(36952),
+       gC = ZC(38206),
+       SC = ZC(38201),
+       pC = ZC(37934),
+       PC = ZC(37988),
+       GC = ZC(37959),
+ ... (38 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L70-L81` → after: `L75-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L75-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L75-L84) · [Before (L70-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L70-L81)

```diff
-         heatmap: ek,
-         scale: ik,
-         fullyOpaqueFrom: zk,
-         bounds: ak,
-         fitBounds: Wk,
-         schematic: tk,
-         controls: Xk,
-         onStepTime: Bk,
-         onShowAllTime: ck,
-         onTogglePlaying: Tk,
-         getReadout: Ok = null
-       } = kk;
+         mobType: wC,
+         variation: bC,
+         animation: nC
+       } = CC, oC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, JC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const vC = null !== (zC = null === oC || void 0 === oC ? void 0 : oC.size) && void 0 !== zC ? zC : 1,
+         eC = null !== (ZC = null === oC || void 0 === oC ? void 0 : oC.cosmetics) && void 0 !== ZC ? ZC : [],
+         hC = null !== (QC = null === oC || void 0 === oC ? void 0 : oC.Hx) && void 0 !== QC ? QC : null;
+       let KC = !1,
+         YC = null,
+         EC = null;
```

#### 5. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L83-L447` → after: `L86-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L86-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L86-L130) · [Before (L83-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L83-L447)

```diff
-         t: gk
-       } = (0, Hk.D)(), {
-         clientEscMenuOptions: be
-       } = (0, wk.n)(["clientEscMenuOptions"]), me = (0, Dk.useRef)(null), Me = (0, Dk.useRef)(null), Ke = (0, Dk.useRef)(null), xe = (0, lk.c)(me), [ne, Ue] = (0, Dk.useState)(!1), [He, we] = (0, Dk.useState)(!1), [le, pe] = (0, Dk.useState)(!0), ye = (0, Dk.useRef)(!1), [Ye, Le] … [truncated]
-       qe[0] === ue[0] && qe[1] === ue[1] && qe[2] === ue[2] || (Ie(ue), null !== Ve && Fe({
-         ...Ve,
-         position: re(Ve.position, re(qe, Pe(ue, -1)))
-       }));
-       const ze = (0, Dk.useMemo)((() => function(kk) {
-           return [kk.max[0] - kk.min[0] + 1, kk.max[1] - kk.min[1] + 1, kk.max[2] - kk.min[2] + 1]
-         }(ak)), [ak]),
-         Qe = (0, Dk.useMemo)((() => function(kk, ek) {
-           const ik = [],
-             Dk = [];
-           for (const [fk, Sk] of Object.entries(kk.frequencies)) {
-             const kk = Number(fk);
- ... (349 more removed lines; see GitHub link above)
+         engine: lC,
+         sS: XC
+       } = dC(), cC = XC.onBeforeRenderObservable.add((() => {
+         var CC;
+         null === (CC = EC) || void 0 === CC || CC.render(lC.getDeltaTime())
+       })), uC = null === hC ? null : HC(hC).catch((CC => (console.error(`Mob preview: could not load ${hC}`, CC), null)));
+       return Promise.all([mC(wC), uC]).then((CC => {
+         var zC, ZC, QC;
+         let [oC, mC] = CC;
+         if (KC) return;
+         const HC = (0, AC.e)().Vg.nH,
+           {
+             hitBoxDimensions: lC
+           } = (0, FC.e)(wC),
+           XC = IC / Math.max(lC.height, lC.width);
+         if (YC = (0, pC.l)(wC, XC * vC, !0, !0), HC.setPosition(YC, JC, -lC.height * XC / 2, 0), HC.setRotationEulerY(YC, iC), oC.meshApi instanceof GC.d && eC.length > 0)
+ ... (29 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L452-L490` → after: `L135-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L135-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L135-L212) · [Before (L452-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L452-L490)

```diff
-         heading: ek,
-         pitch: ik,
-         onViewFrom: fk,
-         onTurn: Sk,
-         onFlip: bk
-       } = kk;
-       const {
-         t: rk
-       } = (0, Hk.D)(), Pk = (0, Dk.useRef)(null), mk = ee({
-         heading: ek,
-         pitch: ik
-       }), Mk = ie(ek), Kk = Me(mk, Mk), xk = Bk + ck + 2, nk = Xk.flatMap((kk => [1, -1].map((ek => {
-         const ik = Pe(kk.direction, ek);
-         return {
-           ...kk,
-           sign: ek,
- ... (23 more removed lines; see GitHub link above)
+         mobType: zC,
+         variation: ZC,
+         metaInfo: QC,
+         tamed: wC
+       } = CC, bC = !1, nC = null, fC = 0;
+       const oC = (0, AC.e)(),
+         qC = oC.Vg.nH,
+         FC = CC => {
+           fC += eC * (CC / 1e3) % (2 * Math.PI), qC.setRotationEulerY(nC, fC)
+         };
+       return mC(zC).then((CC => {
+         if (bC) return;
+         nC = (0, pC.l)(zC, vC, !0, !0), qC.setPosition(nC, 0, -vC, 0), CC.meshApi.updateVariation(nC, zC, ZC);
+         const fC = {
+           wool: "Sheared" !== QC,
+           saddle: "Saddled" === QC,
+ ... (62 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L492-L553` → after: `L214-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L214-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L214-L229) · [Before (L492-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L492-L553)

```diff
-         },
-         onPointerMove: kk => {
-           const ek = Pk.current;
-           if (null === ek || ek.pointerId !== kk.pointerId) return;
-           const ik = kk.clientX - ek.x,
-             Dk = kk.clientY - ek.y;
-           ek.x = kk.clientX, ek.y = kk.clientY, ek.travel += Math.abs(ik) + Math.abs(Dk), ek.travel >= Ok && Sk(ik, Dk)
-         },
-         onPointerUp: kk => {
-           const ek = Pk.current;
-           Pk.current = null, null === ek || ek.pointerId !== kk.pointerId || ek.travel >= Ok || (null !== ek.side ? fk(ek.side) : ek.isOnMiddle && bk())
-         },
-         onPointerCancel: () => {
-           Pk.current = null
-         },
-         children: [nk.map(((kk, ek) => {
- ... (46 more removed lines; see GitHub link above)
+           of CC) null !== ZC && HC(ZC).catch(zC)
+       }
+       place() {
+         const {
+           figures: CC,
+           shown: zC
+         } = this.view, ZC = CC.map(((ZC, QC) => {
+           var wC;
+           const bC = null !== (wC = this.placed[QC]) && void 0 !== wC ? wC : null;
+           if (!zC[QC]) return null === bC || void 0 === bC || bC.remove(), null;
+           const nC = (fC = (QC + .5) / CC.length, oC = this.aspect, (.5 - fC) * (2 * JC * Math.tan(dC().camera.fov / 2)) * oC);
+           var fC, oC;
+           return null !== bC && bC.figure === ZC && bC.x === nC ? bC : (null === bC || void 0 === bC || bC.remove(), {
+             figure: ZC,
+             x: nC,
+             remove: lC(ZC, nC)
```

#### 8. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L555-L556` → after: `L231-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L231-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L231-L234) · [Before (L555-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L555-L556)

```diff
-         })]
-       })
+         }));
+         for (const QC of this.placed.slice(CC.length)) null === QC || void 0 === QC || QC.remove();
+         this.placed = ZC
+       }
```

#### 9. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L560-L582` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L238) · [Before (L560-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L560-L582)

```diff
-       var ek, ik, Dk;
-       const {
-         chunkGridOrigin: fk,
-         camera: Sk
-       } = kk;
-       if (null === fk) return;
-       const bk = [Sk.position.x, Sk.position.y, Sk.position.z],
-         rk = [0, 2].map((kk => Math.floor((bk[kk] + fk[kk]) / Uk.g.oU))),
-         Pk = kk.chunkGridCentre;
-       if (null !== Pk && Pk.every(((kk, ek) => kk === rk[ek]))) return;
-       const Kk = null === (ek = null === (ik = kk.chunkGrid) || void 0 === ik ? void 0 : ik.isVisible) || void 0 === ek || ek;
-       null === (Dk = kk.chunkGrid) || void 0 === Dk || Dk.dispose();
-       const [nk, Hk] = [0, 2].map(((kk, ek) => {
-         const ik = [];
-         for (let Dk = rk[ek] - Qk; Dk <= rk[ek] + Qk + 1; Dk++) ik.push(Dk * Uk.g.oU - fk[kk]);
-         return ik
- ... (7 more removed lines; see GitHub link above)
+       return new cC(CC, EC)
```

#### 10. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L585-L593` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L241-L242) · [Before (L585-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L585-L593)

```diff
-     function Rk(kk, ek, ik, Dk) {
-       kk.i6("matrix", function(kk, ek) {
-         const ik = new Float32Array(16 * ek);
-         for (let Dk = 0; Dk < ek; Dk++) {
-           const ek = 16 * Dk;
-           ik[ek] = 1, ik[ek + 5] = 1, ik[ek + 10] = 1, ik[ek + 12] = kk[3 * Dk], ik[ek + 13] = kk[3 * Dk + 1], ik[ek + 14] = kk[3 * Dk + 2], ik[ek + 15] = 1
-         }
-         return ik
-       }(ek, Dk), 16, !0), kk.i6("color", ik, 4, !0), kk.isVisible = Dk > 0
+     function sC(CC) {
+       return new uC(CC)
```

#### 11. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L597-L616` → after: `L246-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L246-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L246-L270) · [Before (L597-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L597-L616)

```diff
-       const {
-         camera: ek,
-         translucent: ik
-       } = kk, Dk = [ek.position.x, ek.position.y, ek.position.z], fk = kk.translucentSortedFrom;
-       if (null !== fk && Math.hypot(Dk[0] - fk[0], Dk[1] - fk[1], Dk[2] - fk[2]) < zk) return;
-       kk.translucentSortedFrom = Dk;
-       const Sk = new Float64Array(ik.count),
-         bk = new Uint32Array(ik.count);
-       for (let mk = 0; mk < ik.count; mk++) {
-         const kk = ik.ci[3 * mk] - Dk[0],
-           ek = ik.ci[3 * mk + 1] - Dk[1],
-           fk = ik.ci[3 * mk + 2] - Dk[2];
-         Sk[mk] = kk * kk + ek * ek + fk * fk, bk[mk] = mk
-       }
-       bk.sort(((kk, ek) => Sk[ek] - Sk[kk]));
-       const rk = new Float32Array(3 * ik.count),
- ... (4 more removed lines; see GitHub link above)
+       return new cC(CC, XC)
+     }
+   },
+   38623: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => NC
+     });
+     var QC = ZC(37044),
+       wC = ZC(37059),
+       bC = ZC(37301),
+       nC = ZC(37061),
+       fC = ZC(37050);
+ 
+     function oC(CC) {
+       return `\n\t\t\t\t${(0,fC.u)(CC,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       n\ t\ t\ t\ t\ t$ {
+ ... (9 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L620-L624` → after: `L274-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L274-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L274-L277) · [Before (L620-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L620-L624)

```diff
-       const ik = (ik, Dk, fk) => new Mk.eH(0 === ik ? kk[0] : ek[0], 0 === Dk ? kk[1] : ek[1], 0 === fk ? kk[2] : ek[2]),
-         Dk = [];
-       for (const fk of [0, 1])
-         for (const kk of [0, 1]) Dk.push([ik(0, fk, kk), ik(1, fk, kk)], [ik(fk, 0, kk), ik(fk, 1, kk)], [ik(fk, kk, 0), ik(fk, kk, 1)]);
-       return Dk
+       let ZC = (0, fC.ob)(CC, "skele" + (zC - 1));
+       for (let wC = zC - 2; wC >= 0; wC--) ZC = (0, fC.fb)(CC, `boneIdx == ${wC}`, (0, fC.ob)(CC, `skele${wC}`), ZC);
+       const QC = "bone.yz + rotate(bone.x) * pivot - pivot";
+       return `\n\t\t\t\t${(0,fC.w)(CC,"int","boneIdx",(0,fC.jb)(CC,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,fC.w)(CC,"vec3","bone",ZC)}\n\t\t\t\t${(0,fC.w)(CC,"vec2","pivot",(0,fC.l)(CC,"vec2","0.0",`${(0,fC.wb)(CC,"position")}.z`))}\n\t\t\t\t${(0,fC.S)(CC)?`positi … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L628` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L281) · [Before (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L628)

```diff
-       return [Math.sin(kk.heading) * Math.cos(kk.pitch), -Math.sin(kk.pitch), Math.cos(kk.heading) * Math.cos(kk.pitch)]
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,fC.l)(CC,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
```

#### 14. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L631-L632` → after: `L429-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L429-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L429-L434) · [Before (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L631-L632)

```diff
-     function ie(kk) {
-       return [Math.cos(kk), 0, -Math.sin(kk)]
+     function PC(CC, zC) {
+       return Object.assign((function(CC, ZC, QC, wC) {
+         return zC(this.featureState, CC, ZC, QC, wC)
+       }), {
+         Qg: CC
+       })
```

#### 15. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L635-L652` → after: `L437-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L437-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L437-L449) · [Before (L635-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L635-L652)

```diff
-     function De(kk, ek, ik) {
-       let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
-         heading: ak,
-         pitch: Wk
-       };
-       const fk = [kk.max[0] - kk.min[0], kk.max[1] - kk.min[1], kk.max[2] - kk.min[2]],
-         Sk = ee(Dk),
-         bk = ie(Dk.heading),
-         rk = Me(Sk, bk),
-         Pk = Math.tan(ik / 2),
-         mk = Pk * ek;
-       let Mk = 1;
-       for (const Kk of [-fk[0] / 2, fk[0] / 2])
-         for (const kk of [-fk[1] / 2, fk[1] / 2])
-           for (const ek of [-fk[2] / 2, fk[2] / 2]) {
-             const ik = [Kk, kk, ek],
- ... (2 more removed lines; see GitHub link above)
+     function GC(CC) {
+       const zC = class extends MC.e {
+           constructor(zC, ZC) {
+             const QC = (0, SC.Y)(zC),
+               wC = QC && (0, SC.x)(QC, CC.name);
+             for (var bC = arguments.length, nC = new Array(bC > 2 ? bC - 2 : 0), fC = 2; fC < bC; fC++) nC[fC - 2] = arguments[fC];
+             super(zC, CC.name, CC.priority, wC ? wC.defines : CC.defines(...nC), !1), this.featureState = void 0, this.featureState = ZC, this._pluginManager._addPlugin(this), this._enable(!0), (0, SC.B)(this._material, CC, this.featureState, this._pluginDefineNames)
+           }
+           getClassName() {
+             return CC.className
+           }
+           isCompatible(CC) {
+             return CC === pC.e.GLSL || CC === pC.e.WGSL
```

#### 16. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L654-L657` → after: `L451-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L451-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L451-L462) · [Before (L654-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L654-L657)

```diff
-       return {
-         position: re([kk.min[0] + fk[0] / 2, kk.min[1] + fk[1] / 2, kk.min[2] + fk[2] / 2], Pe(Sk, -Mk * tk)),
-         heading: Dk.heading,
-         pitch: Dk.pitch
+         },
+         ZC = (0, gC.l)(CC);
+       for (const [QC, wC] of Object.entries(gC.e)) {
+         const bC = CC[QC];
+         if (bC) {
+           const CC = ZC[QC];
+           Object.defineProperty(zC.prototype, wC, {
+             value: PC(bC, CC),
+             writable: !0,
+             configurable: !0
+           })
+         }
```

#### 17. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L662-L669` → after: `L472-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L472-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L472-L513) · [Before (L662-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L662-L669)

```diff
-       const Dk = be(kk),
-         fk = be(ik),
-         Sk = re(kk.position, Pe(ek, -1)),
-         bk = [0, 1, 2].reduce(((kk, ek) => re(kk, Pe(fk[ek], me(Sk, Dk[ek])))), [0, 0, 0]);
-       return {
-         position: re(ek, bk),
-         heading: ik.heading,
-         pitch: ik.pitch
+       let QC = JC.get(ZC);
+       QC || (QC = new Map, JC.set(ZC, QC));
+       const {
+         url: wC
+       } = CC;
+       let bC = QC.get(wC);
+       return bC || (bC = async function(CC, zC, ZC) {
+         var QC;
+         const {
+           width: wC,
+           height: bC
+         } = CC.getSize(), fC = Math.round(bC / wC), oC = CC.getInternalTexture(), qC = zC && zC.byteLength === wC * wC * fC * 4 ? zC : null !== (QC = iC.get(oC)) && void 0 !== QC ? QC : CC._readPixelsSync(), FC = new xC.d(qC, wC, wC, fC, AC.d.TEXTUREFORMAT_RGBA, ZC, !0, !1, nC.e. … [truncated]
+         iC.has(oC) || (! function(CC, zC) {
+           const ZC = zC.createRawTexture(new Uint8Array(4), 1, 1, AC.d.TEXTUREFORMAT_RGBA, !1, !1, nC.e.NEAREST_SAMPLINGMODE);
+           CC._hardwareTexture.release(), zC.unbindAllTextures(), ZC._swapAndDie(CC, !1)
+         }(oC, ZC.mg()), iC.set(oC, qC));
+ ... (26 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L672-L674` → after: `L516-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L516-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L516-L532) · [Before (L672-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L672-L674)

```diff
- 
-     function Se(kk) {
-       return Pe(re(kk.min, kk.max), .5)
+     var hC = ZC(40985),
+       KC = ZC(40127),
+       YC = ZC(36961),
+       dC = ZC(40988),
+       mC = ZC(40235),
+       HC = ZC(40119),
+       EC = ZC(40946),
+       lC = ZC(37432),
+       XC = ZC(40992);
+     class cC extends hC.c {
+       getData() {
+         return null
+       }
+       _rebuild() {}
+       restore() {
+         super._rebuild()
+ ... (1 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L676-L680` → after: `L534-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L534-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L534-L562) · [Before (L676-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L676-L680)

```diff
- 
-     function be(kk) {
-       const ek = ee(kk),
-         ik = ie(kk.heading);
-       return [ek, ik, Me(ek, ik)]
+     const uC = {
+       Mesh: dC.e,
+       TransformNode: EC.c,
+       gg: hC.c,
+       VertexBuffer: hC.f,
+       BoundingInfo: KC.d,
+       Eg: YC.Eg,
+       ArenaBuffer: cC,
+       SubMesh: HC.d,
+       VertexData: mC.e,
+       MirroredGeometry: XC.d,
+       meshFromArrays: XC.e,
+       plainMeshFromArrays: XC.f
+     };
+     (0, lC.e)(uC);
+     var rC = ZC(37290);
+ ... (13 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L684` → after: `L566-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L566-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L566-L611) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L684)

```diff
-       return [kk[0] + ek[0], kk[1] + ek[1], kk[2] + ek[2]]
+       if (!(zC instanceof QC.StandardMaterial) || zC.specularTexture) return;
+       const {
+         r: ZC,
+         g: wC,
+         b: bC
+       } = zC.specularColor;
+       0 === ZC && 0 === wC && 0 === bC && (CC.SPECULARTERM = !1)
+     }(0, FC.d)({
+       disableUnusedSpecularTerm: TC
+     });
+     var aC = ZC(37175),
+       tC = ZC(37450);
+     const DC = new RegExp(`^#define ${qC.e}\\s*$`, "m");
+     class jC extends(GC(qC.g)) {
+       constructor(CC, zC) {
+         super(CC, zC), this.Sg = !1, zC.ditherOnlyWhileFading && (tC.g.add(CC), this.prewarmDitherTwins(CC))
+ ... (30 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L688` → after: `L616-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L616-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L616-L807) · [Before (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L688)

```diff
-       return [kk[0] * ek, kk[1] * ek, kk[2] * ek]
+       yC.set(CC, zC)
+     }
+     LC(fC.d, RC), LC(oC.j, eC), LC(qC.g, jC), LC(FC.f, sC), (0, WC.c)({
+       create: (CC, zC) => {
+         const ZC = new QC.StandardMaterial(CC.name, zC);
+         return (0, aC.u)(CC, ZC), ZC.detailMap._pluginDefineNames
+       },
+       write: (CC, zC, ZC) => {
+         (0, aC.X)(CC.mirror, zC, ZC)
+       },
+       addFeature: (CC, zC, ZC) => {
+         const QC = yC.get(zC.feature);
+         if (!QC) throw new Error(`${zC.feature.name} has no plugin class (registerPluginClass)`);
+         new QC(CC.mirror, zC.state, ...ZC)
+       },
+       texture: (CC, zC, ZC) => {
+ ... (176 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L691-L692` → after: `L810-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L810-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L810-L828) · [Before (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L691-L692)

```diff
-     function me(kk, ek) {
-       return kk[0] * ek[0] + kk[1] * ek[1] + kk[2] * ek[2]
+     function WC(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new fC.e(CC, ZC);
+       const wC = (0, qC.j)(zC),
+         {
+           positions: bC,
+           normals: WC,
+           uvs: NC,
+           indices: MC,
+           named: gC = {}
+         } = zC,
+         SC = new oC.e;
+       SC.positions = bC, SC.normals = null !== WC && void 0 !== WC ? WC : null, SC.uvs = null !== NC && void 0 !== NC ? NC : null, SC.indices = MC;
+       const pC = new FC(nC.c.RandomId(), ZC, SC, !1, QC);
+       for (const {
+           kind: nC,
+           components: fC
+ ... (3 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L695-L696` → after: `L831-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L831-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/246.js#L831-L845) · [Before (L695-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/246.js#L695-L696)

```diff
-     function Me(kk, ek) {
-       return [kk[1] * ek[2] - kk[2] * ek[1], kk[2] * ek[0] - kk[0] * ek[2], kk[0] * ek[1] - kk[1] * ek[0]]
+     function NC(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       const wC = new fC.e(CC, ZC),
+         {
+           positions: bC,
+           normals: nC,
+           uvs: qC,
+           indices: FC
+         } = zC;
+       return Object.assign(new oC.e, {
+         positions: bC,
+         normals: nC,
+         uvs: qC,
+         indices: FC
+       }).applyToMesh(wC, QC), wC
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/247.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/247.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f)

#### 1. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L4)

```diff
-   39782: (kk, ek, ik) => {
+   40866: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L6-L6866` → after: `L6-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L6-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L6-L18) · [Before (L6-L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L6-L6866)

```diff
-       e: () => wk,
-       f: () => yk
-     });
-     var Dk = ik(39566),
-       fk = ik(39570),
-       Sk = ik(39672),
-       bk = ik(36726),
-       rk = ik(36698),
-       Pk = ik(39787),
-       mk = ik(38272),
-       Mk = ik(36734),
-       Kk = ik(39447),
-       xk = ik(37679),
-       nk = ik(37365),
-       Uk = ik(39535),
-       Hk = ik(39585);
- ... (6845 more removed lines; see GitHub link above)
+       d: () => bC,
+       g: () => nC
+     });
+     var QC = ZC(1851);
+     let wC = !1;
+ 
+     function bC() {
+       wC = !0
+     }
+ 
+     function nC() {
+       wC && (wC = !1, (0, QC.c)())
+     }
```

#### 3. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L6868-L6874` → after: `L20-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L20-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L20-L27) · [Before (L6868-L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L6868-L6874)

```diff
-   40055: (kk, ek, ik) => {
-     var Dk = ik(36698),
-       fk = ik(38272),
-       Sk = ik(39887),
-       bk = ik(39997),
-       rk = ik(39708);
-     const Pk = "bakedVertexAnimationSettingsInstanced";
+   40858: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC,
+       d: () => bC,
+       e: () => fC
+     });
+     var QC = ZC(40412),
+       wC = ZC(40423);
```

#### 4. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L6877-L6878` → after: `L30-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L30-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L30-L47) · [Before (L6877-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L6877-L6878)

```diff
-       const ek = kk.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
-       return ek instanceof Float32Array || ek instanceof Uint16Array
+       if (CC.queries.drawCensus() < QC.Gb.BYTES) return null;
+       const zC = CC.memoryData(CC.scratch(), QC.Gb.BYTES, 4, "the draw census");
+       return null === zC ? null : {
+         terrainOpaque: QC.Gb.terrainOpaque(zC, 0),
+         terrainTransparent: QC.Gb.terrainTransparent(zC, 0),
+         terrainPack: QC.Gb.terrainPack(zC, 0),
+         earthSky: QC.Gb.earthSky(zC, 0),
+         skyMeshes: QC.Gb.skyMeshes(zC, 0),
+         regular: QC.Gb.regular(zC, 0),
+         thin: QC.Gb.thin(zC, 0),
+         line: QC.Gb.line(zC, 0),
+         text: QC.Gb.text(zC, 0),
+         particles: QC.Gb.particles(zC, 0),
+         terrainParts: QC.Gb.terrainParts(zC, 0),
+         terrainCompiling: QC.Gb.terrainCompiling(zC, 0),
+         ringCopiesMax: QC.Gb.ringCopiesMax(zC, 0),
+ ... (2 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L6881-L6888` → after: `L50-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L50-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L50-L62) · [Before (L6881-L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L6881-L6888)

```diff
-     function Mk(kk, ek, ik, Dk) {
-       ik.A_(Number.POSITIVE_INFINITY), Dk.A_(Number.NEGATIVE_INFINITY);
-       for (let fk = 0; fk < 3 * ek; fk += 3) {
-         const ek = kk[fk],
-           Sk = kk[fk + 1],
-           bk = kk[fk + 2];
-         ek < ik.x && (ik.x = ek), Sk < ik.y && (ik.y = Sk), bk < ik.z && (ik.z = bk), ek > Dk.x && (Dk.x = ek), Sk > Dk.y && (Dk.y = Sk), bk > Dk.z && (Dk.z = bk)
-       }
+     function nC(CC) {
+       const {
+         terrainOpaque: zC,
+         terrainTransparent: ZC,
+         earthSky: QC,
+         skyMeshes: wC,
+         regular: bC,
+         thin: nC,
+         line: fC,
+         text: oC,
+         particles: qC
+       } = CC;
+       return zC + ZC + QC + wC + bC + nC + fC + oC + qC
```

#### 6. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L6891-L6892` → after: `L65-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L65-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L65-L98) · [Before (L6891-L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L6891-L6892)

```diff
-     function Kk(kk, ek, ik) {
-       ik && (kk.x -= kk.x * ik.x + ik.y, kk.y -= kk.y * ik.x + ik.y, kk.z -= kk.z * ik.x + ik.y, ek.x += ek.x * ik.x + ik.y, ek.y += ek.y * ik.x + ik.y, ek.z += ek.z * ik.x + ik.y)
+     function fC() {
+       const CC = (0, wC.k)();
+       return !0 === (null === CC || void 0 === CC ? void 0 : CC.isCoreRunning) ? function(CC) {
+         const zC = bC(CC);
+         if (null === zC) return [];
+         const {
+           terrainOpaque: ZC,
+           terrainTransparent: QC,
+           terrainPack: wC,
+           earthSky: fC,
+           skyMeshes: oC,
+           regular: qC,
+           thin: FC,
+           line: WC,
+           text: NC,
+           particles: MC
+ ... (18 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L6895-L6900` → after: `L116-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L116-L118) · [Before (L6895-L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L6895-L6900)

```diff
-     function xk(kk, ek, ik, fk, Sk) {
-       const bk = Dk.j.eH[7],
-         rk = Dk.j.eH[8];
-       for (let Pk = 0; Pk < 2; ++Pk)
-         for (let mk = 0; mk < 2; ++mk)
-           for (let Mk = 0; Mk < 2; ++Mk) bk.set(Pk ? ek.x : kk.x, mk ? ek.y : kk.y, Mk ? ek.z : kk.z), Dk.o.TransformCoordinatesToRef(bk, ik, rk), fk.minimizeInPlace(rk), Sk.maximizeInPlace(rk)
+     function WC(CC) {
+       const zC = (0, bC.k)();
+       return null !== zC && +CC === zC.api.localId
```

#### 8. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L6903-L6905` → after: `L121-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L121-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L121-L140) · [Before (L6903-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L6903-L6905)

```diff
-     function nk(kk, ek, ik, fk, Sk) {
-       const bk = Dk.j.eH[7];
-       for (let rk = 0; rk < 3 * ek; rk += 3) Dk.o.TransformCoordinatesFromFloatsToRef(kk[rk], kk[rk + 1], kk[rk + 2], ik, bk), fk.minimizeInPlace(bk), Sk.maximizeInPlace(bk)
+     function NC() {
+       FC || (FC = !0, (0, oC.l)(nC.m, (CC => {
+         var zC, ZC;
+         const QC = (0, fC.h)(nC.m, CC);
+         if (!(0, fC.e)(QC)) return;
+         const wC = QC;
+         WC(wC.gQ) && MC(wC.SQ, {
+           icon: wC.Aw,
+           level: wC.Jw,
+           displayName: null !== (zC = wC.pQ) && void 0 !== zC ? zC : null,
+           durationMs: null !== (ZC = wC.xw) && void 0 !== ZC ? ZC : null
+         })
+       })), (0, oC.l)(nC.T, (CC => {
+         const zC = (0, fC.h)(nC.T, CC);
+         if (!(0, fC.e)(zC)) return;
+         const ZC = zC;
+ ... (4 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L6907-L7058` → after: `L142-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L142-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L142-L150) · [Before (L6907-L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L6907-L7058)

```diff
-     let Uk = !1;
-     Uk || (Uk = !0, bk.e.prototype.thinInstanceAdd = function(kk) {
-       let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-       if (!this.XF().JU().getCaps().instancedArrays) return fk.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
-       this._thinInstanceUpdateBufferSize("matrix", Array.isArray(kk) ? kk.length : 1);
-       const ik = this._thinInstanceDataStorage.instancesCount;
-       if (Array.isArray(kk))
-         for (let Dk = 0; Dk < kk.length; ++Dk) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, kk[Dk], Dk === kk.length - 1 && ek);
-       else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, kk, ek);
-       return ik
-     }, bk.e.prototype.thinInstanceAddSelf = function() {
-       let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-       return this.thinInstanceAdd(Dk.b.IdentityReadOnly, kk)
-     }, bk.e.prototype.thinInstanceRegisterAttribute = function(kk, ek) {
-       kk === rk.e.ColorKind && (kk = rk.e.ColorInstanceKind), this.removeVerticesData(kk), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[kk] = ek, this._userThinInstanceBuffersStorage.sizes[kk] = ek * Math.max(32, this._thinInstanceDataSt … [truncated]
-     }, bk.e.prototype.thinInstanceSetMatrixAt = function(kk, ek) {
- ... (136 more removed lines; see GitHub link above)
+ 
+     function MC(CC, zC) {
+       QC.c.update(CC, zC), qC.forEach((zC => {
+         zC(CC)
+       }))
+     }
+     const gC = {
+       localEffectUpdated: {
+         watch: CC => qC.add(CC)
```

#### 10. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L7060-L7069` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L152) · [Before (L7060-L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L7060-L7069)

```diff
-     }, bk.e.prototype._thinInstanceInitializeUserStorage = function() {
-       this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
-         data: {},
-         sizes: {},
-         vertexBuffers: {},
-         strides: {}
-       })
-     }, bk.e.prototype._disposeThinInstanceSpecificData = function() {
-       this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), th … [truncated]
-     })
+     }
```

#### 11. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L7071` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L154) · [Before (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L7071)

```diff
-   40018: (kk, ek, ik) => {
+   40845: (CC, zC, ZC) => {
```

#### 12. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L7073-L7074` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L156) · [Before (L7073-L7074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L7073-L7074)

```diff
-       e: () => pk,
-       i: () => Hk
+       c: () => FC
```

#### 13. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L7076-L7084` → after: `L158-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L158-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L158-L166) · [Before (L7076-L7084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L7076-L7084)

```diff
-     var Dk, fk, Sk, bk, rk = ik(39566),
-       Pk = ik(39570),
-       mk = ik(39585),
-       Mk = ik(36726),
-       Kk = ik(36698),
-       xk = ik(39787),
-       nk = ik(36734),
-       Uk = ik(39447);
-     let Hk = (() => {
+     var QC = ZC(4733),
+       wC = ZC(4727),
+       bC = ZC(40457),
+       nC = ZC(40470);
+     const fC = new Set(QC.S),
+       oC = QC.S.map((CC => (new TextEncoder).encode(CC))),
+       qC = new Map;
+ 
+     function FC(CC, zC) {
```

#### 14. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L7086-L7541` → after: `L168-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L168-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L168-L175) · [Before (L7086-L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L7086-L7541)

```diff
-       let ek, ik, Dk, fk, Sk, bk, nk, Uk, Hk, wk = xk.b,
-         lk = [],
-         pk = [],
-         yk = [],
-         Yk = [],
-         Lk = [],
-         Ck = [],
-         Ak = [],
-         jk = [],
-         sk = [],
-         dk = [],
-         Vk = [],
-         Fk = [],
-         uk = [],
-         qk = [],
-         Ik = [],
- ... (440 more removed lines; see GitHub link above)
+       return null === (ZC = qC.get(CC)) || void 0 === ZC ? void 0 : ZC[zC]
+     }(0, nC.l)(QC.Bc.NewOtherEntitySettings, (CC => {
+       CC.payloadKind === wC.hc.Msgpack && oC.some((zC => function(CC, zC) {
+         const ZC = zC[0];
+         for (let QC = CC.indexOf(ZC); - 1 !== QC && QC + zC.length <= CC.length; QC = CC.indexOf(ZC, QC + 1)) {
+           let ZC = 1;
+           for (; ZC < zC.length && CC[QC + ZC] === zC[ZC];) ZC++;
+           if (ZC === zC.length) return !0
```

#### 15. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L7543-L7544` → after: `L177-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L177-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L177-L186) · [Before (L7543-L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L7543-L7544)

```diff
-         _syncAbsoluteScalingAndRotation() {
-           this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
+         return !1
+       }(CC.payload, zC))) && function(CC) {
+         if (null === CC || "object" !== typeof CC || null === CC.settings || "object" !== typeof CC.settings) return;
+         const zC = String(CC.eId),
+           ZC = CC.settings;
+         let QC = qC.get(zC);
+         for (const wC in ZC) {
+           if (!fC.has(wC)) continue;
+           const CC = ZC[wC];
+           null === CC || void 0 === CC ? QC && delete QC[wC] : (QC ??= {}, QC[wC] = CC)
```

#### 16. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L7546-L7672` → after: `L188-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L188-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L188-L207) · [Before (L7546-L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L7546-L7672)

```diff
-       }, (() => {
-         const mk = "function" === typeof Symbol && Symbol.metadata ? Object.create(wk[Symbol.metadata] ?? null) : void 0;
-         ek = [(0, Pk.F)("position")], ik = [(0, Pk.F)("rotation")], Dk = [(0, Pk.v)("rotationQuaternion")], fk = [(0, Pk.F)("wi")], Sk = [(0, Pk.I)("billboardMode")], bk = [(0, Pk.I)()], nk = [(0, Pk.I)("infiniteDistance")], Uk = [(0, Pk.I)()], Hk = [(0, Pk.I)()], (0, rk.d)(null, … [truncated]
-           kind: "field",
-           name: "_position",
-           static: !1,
-           private: !1,
-           access: {
-             has: kk => "_position" in kk,
-             get: kk => kk._position,
-             set: (kk, ek) => {
-               kk._position = ek
-             }
-           },
-           metadata: mk
-         }, lk, pk), (0, rk.d)(null, null, ik, {
- ... (111 more removed lines; see GitHub link above)
+         QC && qC.set(zC, QC)
+       }((0, bC.c)(CC.payload))
+     })), (0, nC.i)((() => {
+       qC.clear()
+     }))
+   },
+   40838: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => MC,
+       f: () => qC,
+       j: () => WC
+     });
+     var QC = ZC(38832),
+       wC = ZC(1843),
+       bC = ZC(1248),
+       nC = ZC(40446),
+ ... (4 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L7674-L7684` → after: `L209-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L209-L210) · [Before (L7674-L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L7674-L7684)

```diff
-     function wk(kk, ek, ik) {
-       const Dk = mk.b.Parse((() => new Hk(kk.name, ek)), kk, ek, ik);
-       if (kk.localMatrix ? Dk.setPreTransformMatrix(Kk.b.FromArray(kk.localMatrix)) : kk.pivotMatrix && Dk.setPivotMatrix(Kk.b.FromArray(kk.pivotMatrix)), Dk.bV(kk.isEnabled), Dk._waitingParsedUniqueId = kk.uniqueId, void 0 !== kk.parentId && (Dk._waitingParentId = kk.parentId),  … [truncated]
-         for (let ek = 0; ek < kk.animations.length; ek++) {
-           const ik = kk.animations[ek],
-             fk = (0, nk.d)("BABYLON.Animation");
-           fk && Dk.animations.push(fk.Parse(ik))
-         }
-         xk.b.ParseAnimationRanges(Dk, kk, ek)
-       }
-       return kk.autoAnimate && ek.beginAnimation(Dk, kk.autoAnimateFrom, kk.autoAnimateTo, kk.autoAnimateLoop, kk.autoAnimateSpeed || 1), Dk
+     function WC(CC) {
+       return FC[CC]
```

#### 18. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L7686` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L212) · [Before (L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L7686)

```diff
-     let lk = !1;
+     const NC = new bC.d;
```

#### 19. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L7688-L7690` → after: `L214-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L214-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L214-L277) · [Before (L7688-L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L7688-L7690)

```diff
-     function pk() {
-       lk || (lk = !0, Hk.Parse = wk)
-     }(Dk = Hk.prototype).jW ?? (Dk.jW = (0, Uk.i)("TransformNode", "jW")), (fk = Hk.prototype).applyImpulse ?? (fk.applyImpulse = (0, Uk.i)("TransformNode", "applyImpulse")), (Sk = Hk.prototype).applyAngularImpulse ?? (Sk.applyAngularImpulse = (0, Uk.i)("TransformNode", "applyAng … [truncated]
+     function MC(CC) {
+       return NC.add(CC)
+     }
+ 
+     function gC(CC) {
+       NC.callEach(CC, "a roster listener")
+     }(0, oC.l)(nC.cb, (CC => {
+       const zC = (0, fC.h)(nC.cb, CC);
+       if (void 0 === zC) return;
+       const ZC = zC.OZ.some((CC => {
+           let {
+             kZ: zC,
+             VZ: ZC
+           } = CC;
+           return null !== ZC && qC.has(zC) && qC.getName(zC) !== ZC
+         })),
+ ... (48 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L7692-L7700` → after: `L279-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L279-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L279-L315) · [Before (L7692-L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L7692-L7700)

```diff
-   39999: (kk, ek, ik) => {
-     function Dk(kk, ek, ik) {
-       try {
-         const Dk = kk.next();
-         Dk.done ? ek(Dk) : Dk.value ? Dk.value.then((() => {
-           Dk.value = void 0, ek(Dk)
-         }), ik) : ek(Dk)
-       } catch (Dk) {
-         ik(Dk)
+   40854: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => hC,
+       g: () => pC,
+       k: () => mC,
+       m: () => HC
+     });
+     var QC = ZC(1211),
+       wC = ZC(590),
+       bC = ZC(77),
+       nC = ZC(4733),
+       fC = ZC(40412),
+       oC = ZC(40440),
+       qC = ZC(40423),
+       FC = ZC(40845),
+       WC = ZC(40838),
+ ... (21 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L7704-L7710` → after: `L319-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L319-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L319-L329) · [Before (L7704-L7710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L7704-L7710)

```diff
-     function fk() {
-       let kk, ek = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
-       return (ik, fk, Sk) => {
-         const bk = performance.now();
-         void 0 === kk || bk - kk > ek ? (kk = bk, setTimeout((() => {
-           Dk(ik, fk, Sk)
-         }), 0)) : Dk(ik, fk, Sk)
+     function SC(CC) {
+       let {
+         killer: zC,
+         victim: ZC,
+         withItem: QC
+       } = CC;
+       return {
+         killer: AC(zC),
+         victim: AC(ZC),
+         withItem: QC,
+         killstreak: 0
```

#### 22. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L7714-L7724` → after: `L333-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L333-L334) · [Before (L7714-L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L7714-L7724)

```diff
-     function Sk(kk, ek, ik, Dk, fk) {
-       const Sk = () => {
-         let bk;
-         const rk = kk => {
-           kk.done ? ik(kk.value) : void 0 === bk ? bk = !0 : Sk()
-         };
-         do {
-           bk = void 0, fk && fk.aborted ? Dk(new Error("Aborted")) : ek(kk, rk, Dk), void 0 === bk && (bk = !1)
-         } while (bk)
-       };
-       Sk()
+     function pC(CC) {
+       iC && eC((() => "killed" === CC.kind ? gC(CC.body) : SC(CC.body)))
```

#### 23. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L7728-L7731` → after: `L340-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L340-L341) · [Before (L7728-L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L7728-L7731)

```diff
-       let ik;
-       return Sk(kk, Dk, (kk => ik = kk), (kk => {
-         throw kk
-       }), ek), ik
+       var ZC;
+       return WC.f.has(CC) ? null === (ZC = WC.f.getSettings(CC)) || void 0 === ZC ? void 0 : ZC[zC] : (0, FC.c)(CC, zC)
```

#### 24. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L7733-L7736` → after: `L343-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L343-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L343-L390) · [Before (L7733-L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L7733-L7736)

```diff
-     async function rk(kk, ek, ik) {
-       return await new Promise(((Dk, fk) => {
-         Sk(kk, ek, Dk, fk, ik)
-       }))
+ 
+     function AC(CC) {
+       var zC, ZC, nC, fC, FC;
+       let {
+         eId: NC,
+         name: MC,
+         colour: gC,
+         lifeformType: SC
+       } = CC;
+       if (void 0 === NC || null === NC || "" === NC) {
+         const CC = MC || null;
+         return {
+           id: null,
+           shownName: CC,
+           lifeformType: null === CC && null !== SC && void 0 !== SC ? SC : null,
+           colour: gC || null,
+ ... (32 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L7739-L7741` → after: `L393-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L393-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L393-L441) · [Before (L7739-L7741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L7739-L7741)

```diff
-     function Pk(kk, ek) {
-       return function() {
-         return bk(kk(...arguments), ek)
+     function hC() {
+       vC || (vC = !0, (0, MC.l)(nC.Bc.PlayerKilled, (CC => {
+         const zC = (0, NC.j)(CC);
+         (0, NC.e)(zC) && eC((() => gC(zC)))
+       })), (0, MC.l)(nC.Bc.CustomKillfeed, (CC => {
+         const zC = (0, NC.j)(CC);
+         (0, NC.e)(zC) && (0, NC.e)(zC.killer) && (0, NC.e)(zC.victim) && eC((() => SC(zC)))
+       })), (0, MC.i)((() => {
+         JC = []
+       })))
+     }
+     const KC = Object.freeze([0, 0, 0]),
+       YC = [0, 0, 0],
+       dC = [0, 0, 0],
+       mC = {
+         kill: {
+ ... (33 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L7743` → after: `L443-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L443-L444) · [Before (L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L7743)

```diff
-     }
+   },
+   38832: (CC, zC, ZC) => {
```

#### 27. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L7745-L7749` → after: `L446-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L446-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/247.js#L446-L504) · [Before (L7745-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/247.js#L7745-L7749)

```diff
-       d: () => fk,
-       f: () => Pk,
-       h: () => rk,
-       k: () => bk
-     })
+       c: () => QC
+     });
+     class QC {
+       constructor() {
+         this.members = new Map
+       }
+       apply(CC) {
+         const zC = {
+           added: [],
+           removed: [],
+           settingChanges: []
+         };
+         for (const QC of CC.OZ) {
+           let CC = this.members.get(QC.kZ);
+           if (CC || (CC = {
+               name: null,
+ ... (43 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/248.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/248.js` (89 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6)

#### 1. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4-L9` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L4-L6) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L4-L9)

```diff
-   39708: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => rk,
-       c: () => Hk,
-       d: () => mk,
-       e: () => Pk
+   39288: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       default: () => VZ
```

#### 2. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L11-L56` → after: `L8-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L8-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L8-L93) · [Before (L11-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L11-L56)

```diff
-     var Dk = ik(39492),
-       fk = ik(38272),
-       Sk = ik(39623),
-       bk = ik(39545);
-     class rk {
-       get RL() {
-         return this._isDisposed
-       }
-       constructor(kk, ek, ik) {
-         let fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           Sk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           rk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           Pk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           mk = arguments.length > 7 ? arguments[7] : void 0,
-           Mk = arguments.length > 8 ? arguments[8] : void 0;
-         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, bk.d)(), kk && kk.XF ? this._engine = kk.XF().JU() : this._engine = kk, this._updatable = ik, this._instanced = rk, this._divisor = mk || 1, this._label = Mk, ek instanceof Dk.b ? (this._data = null, this._buffer = ek) … [truncated]
- ... (30 more removed lines; see GitHub link above)
+     const QC = [0, 90, 180, 270],
+       wC = "plotsblueprint";
+     var bC = ZC(48),
+       nC = ZC(36488),
+       fC = ZC(20),
+       oC = ZC(1557),
+       qC = ZC(1645),
+       FC = ZC(28);
+     const WC = [
+         ["farm_hut", "farm_house", "farm_barn"],
+         ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
+         ["market_stand", "market_stall", "market_shop"],
+         ["castle_wall", "castle_gate", "castle_tower"]
+       ],
+       NC = {
+         farm_hut: {
+ ... (70 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L58-L71` → after: `L95-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L95-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L95-L142) · [Before (L58-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L58-L71)

```diff
-       }
-       update(kk) {
-         this.create(kk)
-       }
-       updateDirectly(kk, ek, ik) {
-         let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, kk, Dk ? ek : ek * Float32Array.BYTES_PER_ELEMENT, ik ? ik * this.byteStride : void 0), this._data = 0 === ek && void 0 === ik ? kk : null)
-       }
-       _increaseReferences() {
-         this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
-       }
-       dispose() {
-         this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
-       }
+       },
+       MC = ["small", "medium", "large"].flatMap((CC => WC.flat().filter((zC => NC[zC].tier === CC))));
+ 
+     function gC(CC) {
+       return NC[CC]
+     }
+     const SC = new Map(WC.flatMap((CC => CC.slice(1).map(((zC, ZC) => [zC, CC[ZC]])))));
+ 
+     function pC(CC) {
+       var zC;
+       return null !== (zC = SC.get(CC)) && void 0 !== zC ? zC : null
+     }
+     const PC = {
+       farm_hut: "plotsGame:journalNoteFarmHut",
+       rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
+       castle_tower: "plotsGame:journalNoteCastleTower",
+ ... (32 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L74-L119` → after: `L146-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L146-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L146-L152) · [Before (L74-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L74-L119)

```diff
-       get RL() {
-         return this._isDisposed
-       }
-       get instanceDivisor() {
-         return this._instanceDivisor
-       }
-       set instanceDivisor(kk) {
-         const ek = 0 != kk;
-         this._instanceDivisor = kk, ek !== this._instanced && (this._instanced = ek, this._computeHashCode())
-       }
-       get _maxVerticesCount() {
-         const kk = this.getData();
-         return kk ? Array.isArray(kk) ? kk.length / (this.byteStride / 4) - this.byteOffset / 4 : (kk.byteLength - this.byteOffset) / this.byteStride : 0
-       }
-       constructor(kk, ek, ik, Dk, fk, bk, Kk, xk, nk, Uk) {
-         let Hk, wk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
- ... (30 more removed lines; see GitHub link above)
+       constructor(CC, zC) {
+         this.api = CC, this.placement = zC, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
+           this.placement.stop(), this.Cg("journal_opened")
+         }, this.build = CC => {
+           this.Cg("placement_started"), this.placement.start(CC), (0, nC.h)()
+         }, this.putAway = () => {
+           this.api.sendCommand(`${wC} cancel`)
```

#### 5. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L122-L135` → after: `L155-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L155-L156) · [Before (L122-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L122-L135)

```diff
-       _computeHashCode() {
-         this.hashCode = (Pk._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
-       }
-       _rebuild() {
-         this._buffer?._rebuild()
-       }
-       getKind() {
-         return this._kind
-       }
-       isUpdatable() {
-         return this._buffer.isUpdatable()
-       }
-       getData() {
-         return this._buffer.getData()
+       getPages() {
+         return this.pages
```

#### 6. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L137-L145` → after: `L158-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L158-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L158-L160) · [Before (L137-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L137-L145)

```diff
-       getFloatData(kk, ek) {
-         const ik = this.getData();
-         return ik ? (0, Sk.n)(ik, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, kk, ek) : null
-       }
-       getBuffer() {
-         return this._buffer.getBuffer()
-       }
-       getWrapperBuffer() {
-         return this._buffer
+       Ag(CC) {
+         let [, zC, ZC] = CC;
+         this.pages = GC(zC, ZC), FC.o.bp(RC, this.pages, !0)
```

#### 7. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L147-L148` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L162-L163) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L147-L148)

```diff
-       getStrideSize() {
-         return this.byteStride / (0, Sk.p)(this.type)
+       openFromServer() {
+         this.openRequested = !0, this.ZN()
```

#### 8. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L150-L151` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L165-L166) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L150-L151)

```diff
-       Zek() {
-         return this.byteOffset / (0, Sk.p)(this.type)
+       ZN() {
+         this.openRequested && !fC.b.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, oC.s)() || (0, qC.isTypingInInput)() || null !== this.placement.getView() || (0, nC.u)())
```

#### 9. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L153-L154` → after: `L168-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L168-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L168-L197) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L153-L154)

```diff
-       getSize() {
-         return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, Sk.p)(this.type) : this._size
+       Cg(CC) {
+         this.reported.has(CC) || (this.reported.add(CC), this.api.sendCommand(`${wC} report ${CC}`))
+       }
+     }
+     var xC = ZC(1002),
+       JC = ZC.n(xC),
+       IC = ZC(1013),
+       iC = ZC(1388),
+       vC = ZC(4469),
+       eC = ZC(3403),
+       hC = ZC(1383),
+       KC = ZC(1074),
+       YC = ZC(1143),
+       dC = ZC(9194);
+     const mC = [0, 90, 180, 270],
+       HC = /^(meta\|rot\d)\|([lrud]+)$/,
+ ... (14 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L156-L157` → after: `L199-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L199-L201) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L156-L157)

```diff
-       getIsInstanced() {
-         return this._instanced
+       static
+       for (CC) {
+         return XC(CC)
```

#### 11. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L159-L160` → after: `L203-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L203-L206) · [Before (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L159-L160)

```diff
-       getInstanceDivisor() {
-         return this._instanceDivisor
+       getBlockIdMapping(CC, zC) {
+         const ZC = this.getBlockIdMappingKey(CC, zC);
+         let QC = this.blockIdMappings.get(ZC);
+         return void 0 === QC && mC.includes(CC) && (QC = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, CC, zC), this.blockIdMappings.set(ZC, QC)), QC
```

#### 12. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L162-L163` → after: `L208-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L208-L209) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L162-L163)

```diff
-       create(kk) {
-         this._buffer.create(kk), this._alignBuffer()
+       turnBlockId(CC, zC, ZC) {
+         return this.mapBlockId(this.blockMetadata[CC], zC, this.getRotationMapping(zC, ZC), ZC)
```

#### 13. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L165-L166` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L211-L212) · [Before (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L165-L166)

```diff
-       update(kk) {
-         this._buffer.update(kk), this._alignBuffer()
+       getBlockIdMappingKey(CC, zC) {
+         return `r${CC}|m${Number(zC)}`
```

#### 14. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L168-L170` → after: `L214-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L214-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L214-L221) · [Before (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L168-L170)

```diff
-       updateDirectly(kk, ek) {
-         let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         this._buffer.updateDirectly(kk, ek, void 0, ik), this._alignBuffer()
+       createBlockIdMapping(CC, zC, ZC, QC) {
+         const wC = new Uint16Array(zC + 1),
+           bC = this.getRotationMapping(ZC, QC);
+         for (const nC in CC) {
+           const zC = CC[nC];
+           wC[zC.id] = this.mapBlockId(zC, ZC, bC, QC)
+         }
+         return wC
```

#### 15. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L172-L173` → after: `L223-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L223-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L223-L231) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L172-L173)

```diff
-       dispose() {
-         this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
+       getRotationMapping(CC, zC) {
+         const ZC = Math.round(CC / 90),
+           QC = new Uint8Array(4);
+         for (let wC = 0; wC < 4; wC++) QC[wC] = (4 + wC - ZC) % 4;
+         if (zC) {
+           let CC = QC[0];
+           QC[0] = QC[1], QC[1] = CC, CC = QC[2], QC[2] = QC[3], QC[3] = CC
+         }
+         return QC
```

#### 16. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L175-L178` → after: `L233-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L233-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L233-L267) · [Before (L175-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L175-L178)

```diff
-       forEach(kk, ek) {
-         (0, Sk.l)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, kk, this.normalized, ((kk, ik) => {
-           for (let Dk = 0; Dk < this._size; Dk++) ek(kk[Dk], ik + Dk)
-         }))
+       mapBlockId(CC, zC, ZC, QC) {
+         var wC;
+         const {
+           blockMetadata: bC
+         } = this, nC = Math.round(zC / 90), {
+           id: fC,
+           meta: oC
+         } = CC, {
+           rot: qC,
+           rootName: FC,
+           metaStr: WC
+         } = oC;
+         let NC;
+         const [, MC, gC] = null !== (wC = lC.exec(WC)) && void 0 !== wC ? wC : [];
+         if (void 0 !== MC) {
+           var SC, pC;
+ ... (19 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L183-L204` → after: `L271-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L271-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L271-L399) · [Before (L183-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L183-L204)

```diff
-     function mk(kk) {
-       switch (kk) {
-         case Pk.UVKind:
-         case Pk.UV2Kind:
-         case Pk.UV3Kind:
-         case Pk.UV4Kind:
-         case Pk.UV5Kind:
-         case Pk.UV6Kind:
-           return 2;
-         case Pk.NormalKind:
-         case Pk.PositionKind:
-           return 3;
-         case Pk.ColorKind:
-         case Pk.ColorInstanceKind:
-         case Pk.MatricesIndicesKind:
-         case Pk.MatricesIndicesExtraKind:
- ... (6 more removed lines; see GitHub link above)
+     function uC(CC, zC, ZC) {
+       let {
+         xRotationMappedOrigin: QC,
+         shouldSwapXZ: wC
+       } = ZC;
+       const bC = wC ? zC : CC;
+       return null === QC ? bC : QC - bC
+     }
+ 
+     function rC(CC, zC, ZC) {
+       let {
+         zRotationMappedOrigin: QC,
+         shouldSwapXZ: wC
+       } = ZC;
+       const bC = wC ? CC : zC;
+       return null === QC ? bC : QC - bC
+ ... (113 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L209` → after: `L425-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L425-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L425-L492) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L209)

```diff
-       return kk instanceof Int8Array ? Pk.BYTE : kk instanceof Uint8Array ? Pk.UNSIGNED_BYTE : kk instanceof Int16Array ? Pk.SHORT : kk instanceof Uint16Array ? Pk.UNSIGNED_SHORT : kk instanceof Int32Array ? Pk.INT : kk instanceof Uint32Array ? Pk.UNSIGNED_INT : Pk.FLOAT
+       let {
+         page: zC,
+         building: ZC,
+         onBuild: QC,
+         onPutAway: wC
+       } = CC;
+       const {
+         t: bC
+       } = (0, YC.y)(), {
+         displayName: nC,
+         tier: fC
+       } = gC(zC.id), oC = aC(zC.id, 0).cells.length, qC = PC[zC.id], FC = "locked" === zC.state, WC = ZC ? iC.g : iC.o;
+       return (0, DC.jsxs)("article", {
+         className: JC()("PlotsJournalPage", {
+           Locked: FC
+         }),
+ ... (52 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L213` → after: `L496-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L496-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L496-L516) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L213)

```diff
-       return (0, Sk.p)(kk)
+       let {
+         className: zC,
+         page: ZC,
+         hidden: QC,
+         building: wC,
+         journal: bC
+       } = CC;
+       return (0, DC.jsxs)("div", {
+         ref: CC => {
+           null !== CC && (CC.inert = QC)
+         },
+         className: JC()("PlotsJournalSide", zC),
+         children: [void 0 !== ZC && (0, DC.jsx)(yC, {
+           page: ZC,
+           building: wC,
+           onBuild: bC.build,
+ ... (5 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L216-L219` → after: `L521-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L521-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L521-L522) · [Before (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L216-L219)

```diff
-     function xk(kk, ek, ik, Dk, fk, bk, rk, Pk) {
-       (0, Sk.l)(kk, ek, ik, Dk, fk, bk, rk, ((kk, ek) => {
-         for (let ik = 0; ik < Dk; ik++) Pk(kk[ik], ek + ik)
-       }))
+     function OC(CC) {
+       return Math.cos((0, BC.j)(CC))
```

#### 21. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L222-L223` → after: `L525-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L525-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L525-L526) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L222-L223)

```diff
-     function nk(kk, ek, ik, Dk, fk, bk, rk, Pk) {
-       return (0, Sk.n)(kk, ek, ik, Dk, fk, bk, rk, Pk)
+     function kC(CC) {
+       return (0, BC.w)(Math.acos(UC.c.clamp(CC, -1, 1)))
```

#### 22. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L228-L242` → after: `L529-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L529-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L529-L534) · [Before (L228-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L228-L242)

```diff
-     function Hk() {
-       Uk || (Uk = !0, Pk.DeduceStride = mk, Pk.GetDataType = Mk, Pk.GetTypeByteLength = Kk, Pk.ForEach = xk, Pk.GetFloatData = nk)
-     }
-   },
-   39492: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => Dk
-     });
-     class Dk {
-       get underlyingResource() {
-         return null
-       }
-       constructor() {
-         this.references = 0, this.vK = 0, this.is32Bits = !1, this.uniqueId = Dk._Counter++
-       }
+     function VC(CC, zC, ZC, QC, wC) {
+       const bC = Math.abs(zC - CC),
+         nC = (0, BC.w)(wC / (ZC * Math.abs(Math.sin((0, BC.j)(CC))))),
+         fC = 450 * Math.min(1, bC / QC),
+         oC = nC > 0 ? 3 * bC / nC : 1 / 0;
+       return Math.round(Math.max(120, Math.min(fC, oC)))
```

#### 23. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L254` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L538) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L254)

```diff
-         this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this … [truncated]
+         this.samples = []
```

#### 24. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L256-L296` → after: `L540-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L540-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L540-L544) · [Before (L256-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L256-L296)

```diff
-       getNormal() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!this.pickedMesh || ek && !this.pickedMesh.isVerticesDataPresent(fk.e.NormalKind)) return null;
-         let ik, Sk = this.pickedMesh.oik();
-         0 === Sk?.length && (Sk = null);
-         const bk = Dk.j.eH[0],
-           rk = Dk.j.eH[1],
-           Pk = Dk.j.eH[2];
-         if (ek) {
-           const kk = this.pickedMesh.getVerticesData(fk.e.NormalKind);
-           let ek = Sk ? Dk.o.FromArrayToRef(kk, 3 * Sk[3 * this.faceId], bk) : bk.Z6(kk[3 * this.faceId * 3], kk[3 * this.faceId * 3 + 1], kk[3 * this.faceId * 3 + 2]),
-             mk = Sk ? Dk.o.FromArrayToRef(kk, 3 * Sk[3 * this.faceId + 1], rk) : rk.Z6(kk[3 * (3 * this.faceId + 1)], kk[3 * (3 * this.faceId + 1) + 1], kk[3 * (3 * this.faceId + 1) + 2]),
-             Mk = Sk ? Dk.o.FromArrayToRef(kk, 3 * Sk[3 * this.faceId + 2], Pk) : Pk.Z6(kk[3 * (3 * this.faceId + 2)], kk[3 * (3 * this.faceId + 2) + 1], kk[3 * (3 * this.faceId + 2) + 2]);
-           ek = ek.scale(this.bu), mk = mk.scale(this.bv), Mk = Mk.scale(1 - this.bu - this.bv), ik = new Dk.o(ek.x + mk.x + Mk.x, ek.y + mk.y + Mk.y, ek.z + mk.z + Mk.z)
-         } else {
- ... (25 more removed lines; see GitHub link above)
+       add(CC, zC) {
+         for (this.samples.push({
+             x: CC,
+             at: zC
+           }); zC - this.samples[0].at > 100;) this.samples.shift()
```

#### 25. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L298-L308` → after: `L546-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L546-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L546-L549) · [Before (L298-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L298-L308)

```diff
-       getTextureCoordinates() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fk.e.UVKind;
-         if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(kk)) return null;
-         const ek = this.pickedMesh.oik();
-         if (!ek) return null;
-         const ik = this.pickedMesh.getVerticesData(kk);
-         if (!ik) return null;
-         let Sk = Dk.l.FromArray(ik, 2 * ek[3 * this.faceId]),
-           bk = Dk.l.FromArray(ik, 2 * ek[3 * this.faceId + 1]),
-           rk = Dk.l.FromArray(ik, 2 * ek[3 * this.faceId + 2]);
-         return Sk = Sk.scale(this.bu), bk = bk.scale(this.bv), rk = rk.scale(1 - this.bu - this.bv), new Dk.l(Sk.x + bk.x + rk.x, Sk.y + bk.y + rk.y)
+       get() {
+         const CC = this.samples[0],
+           zC = this.samples[this.samples.length - 1];
+         return zC.at > CC.at ? (zC.x - CC.x) / (zC.at - CC.at) : 0
```

#### 26. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L319-L326` → after: `L553-L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L553-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L553-L739) · [Before (L319-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L319-L326)

```diff
-     function Sk() {
-       fk || (fk = !0, Dk.ThinEngine.prototype.updateDynamicIndexBuffer = function(kk, ek) {
-         let ik;
-         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(kk), ik = kk.is32Bits ? ek instanceof Uint32Array ? ek : new Uint32Array(ek) : ek instanceof Uint16Array ? ek : new Uint16Array(ek), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, ik, … [truncated]
-       }, Dk.ThinEngine.prototype.updateDynamicVertexBuffer = function(kk, ek, ik, Dk) {
-         this.bindArrayBuffer(kk), void 0 === ik && (ik = 0);
-         const fk = ek.byteLength || ek.length;
-         void 0 === Dk || Dk >= fk && 0 === ik ? ek instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ik, new Float32Array(ek)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ik, ek) : ek instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ik, new Floa … [truncated]
+     function zz(CC, zC) {
+       return CC > zC && CC >= 600
+     }
+ 
+     function Zz(CC) {
+       return kC(new DOMMatrixReadOnly(getComputedStyle(CC).transform).m11)
+     }
+ 
+     function Qz(CC, zC) {
+       CC.style.transform = `rotateY(${-zC}deg)`, CC.classList.add("Turning")
+     }
+ 
+     function wz(CC) {
+       let {
+         journal: zC
+       } = CC;
+ ... (171 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L329-L366` → after: `L742-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L742-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L742-L764) · [Before (L329-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L329-L366)

```diff
-   },
-   39509: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => Dk
-     });
-     class Dk {
-       get underlyingResource() {
-         return this._webGLTexture
-       }
-       constructor() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           ek = arguments.length > 1 ? arguments[1] : void 0;
-         if (this._MSAARenderBuffers = null, this._context = ek, !kk && (kk = ek.createTexture(), !kk)) throw new Error("Unable to create webGL texture");
-         this.set(kk)
-       }
-       setUsage() {}
- ... (22 more removed lines; see GitHub link above)
+ 
+     function bz(CC) {
+       let {
+         direction: zC,
+         disabled: ZC,
+         onTurn: QC
+       } = CC;
+       const {
+         t: wC
+       } = (0, YC.y)();
+       return (0, DC.jsx)("div", {
+         className: JC()("PlotsJournalArrow", zC),
+         children: (0, DC.jsx)(iC.g, {
+           disabled: ZC,
+           ariaLabel: wC("Forward" === zC ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
+           onClick: () => {
+ ... (7 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L368-L378` → after: `L766-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L766-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L766-L770) · [Before (L368-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L368-L378)

```diff
-   },
-   39467: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => pk
-     });
-     var Dk = ik(36726),
-       fk = ik(39403),
-       Sk = ik(36722),
-       bk = ik(38272),
-       rk = ik(36713),
-       Pk = ik(39470);
+     var nz = ZC(36483),
+       fz = ZC(1822),
+       oz = ZC(1884);
+     const qz = "plotsStepChanged",
+       Fz = "plotsPlotChanged";
```

#### 29. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L381-L391` → after: `L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L773) · [Before (L381-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L381-L391)

```diff
-         let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, kk && this.reset()
-       }
-       get isDirty() {
-         return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
-       }
-       get zOffset() {
-         return this._zOffset
-       }
-       set zOffset(kk) {
-         this._zOffset !== kk && (this._zOffset = kk, this._isZOffsetDirty = !0)
+         this.step = ["none"], this.plot = ["none"]
```

#### 30. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L393-L394` → after: `L775-L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L775-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L775-L776) · [Before (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L393-L394)

```diff
-       get zOffsetUnits() {
-         return this._zOffsetUnits
+       getStep() {
+         return this.step
```

#### 31. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L396-L397` → after: `L778-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L778-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L778-L779) · [Before (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L396-L397)

```diff
-       set zOffsetUnits(kk) {
-         this._zOffsetUnits !== kk && (this._zOffsetUnits = kk, this._isZOffsetDirty = !0)
+       receiveStep(CC) {
+         this.step = CC, FC.o.bp(qz, CC, !0)
```

#### 32. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L399-L400` → after: `L781-L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L781-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L781-L782) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L399-L400)

```diff
-       get cullFace() {
-         return this._cullFace
+       getPlot() {
+         return this.plot
```

#### 33. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L402-L403` → after: `L784-L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L784-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L784-L785) · [Before (L402-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L402-L403)

```diff
-       set cullFace(kk) {
-         this._cullFace !== kk && (this._cullFace = kk, this._isCullFaceDirty = !0)
+       receivePlot(CC) {
+         this.plot = CC, FC.o.bp(Fz, CC, !0)
```

#### 34. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L405-L439` → after: `L787-L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L787-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L787-L1005) · [Before (L405-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L405-L439)

```diff
-       get cull() {
-         return this._cull
-       }
-       set cull(kk) {
-         this._cull !== kk && (this._cull = kk, this._isCullDirty = !0)
-       }
-       get depthFunc() {
-         return this._depthFunc
-       }
-       set depthFunc(kk) {
-         this._depthFunc !== kk && (this._depthFunc = kk, this._isDepthFuncDirty = !0)
-       }
-       get depthMask() {
-         return this._depthMask
-       }
-       set depthMask(kk) {
- ... (19 more removed lines; see GitHub link above)
+     }
+     const Nz = "KeyJ";
+ 
+     function Mz(CC) {
+       let {
+         hud: zC,
+         journal: ZC
+       } = CC;
+       const QC = (0, hC.f)(RC, ZC.getPages()),
+         wC = (0, hC.f)(qz, zC.getStep()),
+         {
+           isTouchScreen: bC
+         } = (0, fC.k)(["isTouchScreen"]),
+         {
+           t: FC
+         } = (0, YC.y)(),
+ ... (203 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L443-L9323` → after: `L1029-L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1029-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1029-L1043) · [Before (L443-L9323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L443-L9323)

```diff
-       get isDirty() {
-         return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
-       }
-       get func() {
-         return this._func
-       }
-       set func(kk) {
-         this._func !== kk && (this._func = kk, this._isStencilFuncDirty = !0)
-       }
-       get backFunc() {
-         return this._func
-       }
-       set backFunc(kk) {
-         this._backFunc !== kk && (this._backFunc = kk, this._isStencilFuncDirty = !0)
-       }
-       get funcRef() {
- ... (8865 more removed lines; see GitHub link above)
+       constructor(CC) {
+         this.api = CC, this.meshes = null, this.shown = null
+       }
+       show(CC) {
+         if (!(0, sz.i)(CC, this.shown))
+           if (this.shown = null === CC ? null : [CC[0], CC[1], CC[2]], null !== this.meshes)
+             for (const zC of this.meshes) this.api.setGameMesh(zC, null === CC ? {
+               visible: !1
+             } : {
+               anchor: CC,
+               visible: !0
+             });
+           else if (null !== CC) {
+           const zC = [jz.g, jz.g, jz.g, 0, 0, 0];
+           this.meshes = [this.build([zC], jz.i, CC), this.build((0, jz.c)(), jz.n, CC)]
```

#### 36. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9333-L9339` → after: `L1046-L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1046-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1046-L1049) · [Before (L9333-L9339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9333-L9339)

```diff
-       get RL() {
-         return this._isDisposed
-       }
-       clearCachedVertexData() {
-         for (let kk = 0; kk < this.meshes.length; kk++) {
-           const ek = this.meshes[kk].geometry;
-           ek && ek.clearCachedData()
+       dispose() {
+         for (const zC of null !== (CC = this.meshes) && void 0 !== CC ? CC : []) {
+           var CC;
+           this.api.disposeGameMesh(zC)
```

#### 37. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9342-L9345` → after: `L1053-L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1053-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1053-L1064) · [Before (L9342-L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9342-L9345)

```diff
-       cleanCachedTextureBuffer() {
-         for (const kk of this.textures) {
-           kk._buffer && (kk._buffer = null)
-         }
+       build(CC, zC, ZC) {
+         const QC = [],
+           wC = [];
+         for (const [bC, nC, fC, oC, qC, FC] of CC)(0, yz.f)(QC, wC, [oC + .5, qC + .5, FC + .5], [bC, nC, fC]);
+         return this.api.createGameMesh({
+           positions: QC,
+           indices: wC
+         }, {
+           rgb: Lz,
+           alpha: zC,
+           onTop: !0
+         }, ZC)
```

#### 38. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9347-L9364` → after: `L1066-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1066-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1066-L1089) · [Before (L9347-L9364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9347-L9364)

```diff
-       getWorldExtends(kk) {
-         const ek = new Mk.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-           ik = new Mk.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-         kk = kk || (() => !0);
-         const Dk = this.meshes.filter(kk);
-         for (const fk of Dk) {
-           if (fk.computeWorldMatrix(!0), !fk.TY || 0 === fk.TY.length || fk.infiniteDistance) continue;
-           const kk = fk.hq(),
-             Dk = kk.boundingBox.minimumWorld,
-             Sk = kk.boundingBox.maximumWorld;
-           Mk.o.CheckExtends(Dk, ek, ik), Mk.o.CheckExtends(Sk, ek, ik)
-         }
-         return ek.x === Number.MAX_VALUE ? {
-           min: Mk.o.Zero(),
-           max: Mk.o.Zero()
-         } : {
- ... (2 more removed lines; see GitHub link above)
+     }
+     class Bz {
+       constructor(CC) {
+         this.api = CC, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
+       }
+       watch(CC) {
+         const zC = Tz.f.Ig;
+         this.chunks = [];
+         for (let ZC = 0; ZC < CC.length; ZC += 3) {
+           const QC = Math.floor(CC[ZC] / zC),
+             wC = Math.floor(CC[ZC + 1] / zC),
+             bC = Math.floor(CC[ZC + 2] / zC);
+           this.watches(QC, wC, bC) || this.chunks.push(QC, wC, bC)
+         }
+         this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
+       }
+ ... (8 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9367-L9397` → after: `L1093-L1096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1093-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1093-L1096) · [Before (L9367-L9397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9367-L9397)

```diff
-       createPickingRay(kk, ek, ik, Dk) {
-         throw (0, Lk.k)("Ray")
-       }
-       createPickingRayToRef(kk, ek, ik, Dk, fk) {
-         throw (0, Lk.k)("Ray")
-       }
-       createPickingRayInCameraSpace(kk, ek, ik) {
-         throw (0, Lk.k)("Ray")
-       }
-       createPickingRayInCameraSpaceToRef(kk, ek, ik, Dk) {
-         throw (0, Lk.k)("Ray")
-       }
-       Un(kk, ek, ik, Dk, fk, Sk) {
-         const bk = (0, Lk.k)("Ray", !0);
-         return bk && ei.b.Warn(bk), new nk.b
-       }
- ... (15 more removed lines; see GitHub link above)
+       watches(CC, zC, ZC) {
+         for (let QC = 0; QC < this.chunks.length; QC += 3)
+           if (this.chunks[QC] === CC && this.chunks[QC + 1] === zC && this.chunks[QC + 2] === ZC) return !0;
+         return !1
```

#### 40. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9399-L9400` → after: `L1098-L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1098-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1098-L1124) · [Before (L9399-L9400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9399-L9400)

```diff
-       getPointerOverMesh() {
-         return this._inputManager.getPointerOverMesh()
+     }
+     const Oz = .35,
+       kz = {
+         size: .9,
+         alpha: .35,
+         crossed: !1
+       },
+       Vz = {
+         size: 1.04,
+         alpha: .45,
+         crossed: !0
+       },
+       CZ = [.95, .2, .15];
+     class zZ {
+       constructor() {
+         this.groups = []
+ ... (11 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9402-L9409` → after: `L1126-L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1126-L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1126-L1127) · [Before (L9402-L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9402-L9409)

```diff
-       _rebuildGeometries() {
-         for (const kk of this.geometries) kk._rebuild();
-         for (const kk of this.meshes) kk._rebuild();
-         this.postProcessManager && this.postProcessManager._rebuild();
-         for (const kk of this._components) kk.rebuild();
-         for (const kk of this.ZY) kk.rebuild();
-         if (this.spriteManagers)
-           for (const kk of this.spriteManagers) kk.rebuild()
+       toArray() {
+         return this.groups
```

#### 42. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9411-L9413` → after: `L1129-L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1129-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1129-L1132) · [Before (L9411-L9413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9411-L9413)

```diff
-       _rebuildTextures() {
-         for (const kk of this.textures) kk._rebuild(!0);
-         this.markAllMaterialsAsDirty(1)
+     }
+     class ZZ {
+       constructor(CC) {
+         this.api = CC, this.shown = []
```

#### 43. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9415-L9416` → after: `L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1134) · [Before (L9415-L9416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9415-L9416)

```diff
-       _getByTags(kk, ek, ik) {
-         if (void 0 === ek) return kk;
+       show(CC) {
```

#### 44. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9418-L9420` → after: `L1136-L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1136-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1136-L1142) · [Before (L9418-L9420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9418-L9420)

```diff
-         for (const fk in kk) {
-           const Sk = kk[fk];
-           mk.c && mk.c.MatchesQuery(Sk, ek) && (!ik || ik(Sk)) && Dk.push(Sk)
+         for (const ZC of CC) {
+           const CC = this.shown.findIndex((CC => {
+             let {
+               group: zC
+             } = CC;
+             return wZ(zC, ZC.rgb, ZC.look) && bZ(zC, ZC)
+           })); - 1 === CC ? zC.push(this.build(ZC)) : (zC.push(this.shown[CC]), this.shown.splice(CC, 1))
```

#### 45. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9422-L9428` → after: `L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1144) · [Before (L9422-L9428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9422-L9428)

```diff
-         return Dk
-       }
-       getMeshesByTags(kk, ek) {
-         return this._getByTags(this.meshes, kk, ek)
-       }
-       getCamerasByTags(kk, ek) {
-         return this._getByTags(this.cameras, kk, ek)
+         this.dispose(), this.shown = zC
```

#### 46. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9430-L9434` → after: `L1146-L1152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1146-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1146-L1152) · [Before (L9430-L9434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9430-L9434)

```diff
-       getLightsByTags(kk, ek) {
-         return this._getByTags(this.lights, kk, ek)
-       }
-       getMaterialByTags(kk, ek) {
-         return this._getByTags(this.materials, kk, ek).concat(this._getByTags(this.multiMaterials, kk, ek))
+       dispose() {
+         for (const {
+             meshes: CC
+           }
+           of this.shown)
+           for (const zC of CC) this.api.disposeGameMesh(zC);
+         this.shown = []
```

#### 47. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9436-L9437` → after: `L1154-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1154-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1154-L1182) · [Before (L9436-L9437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9436-L9437)

```diff
-       getTransformNodesByTags(kk, ek) {
-         return this._getByTags(this.transformNodes, kk, ek)
+       build(CC) {
+         const {
+           rgb: zC,
+           look: ZC,
+           boxes: QC
+         } = CC, wC = [zC[0] + (1 - zC[0]) * Oz, zC[1] + (1 - zC[1]) * Oz, zC[2] + (1 - zC[2]) * Oz], bC = [this.buildMesh(CC.cells, zC, ZC.alpha, ((CC, zC, wC, bC) => {
+           QZ(CC, zC, wC, QC[bC], ZC.size, !1)
+         })), this.buildMesh(CC.cells, wC, ZC.alpha, ((CC, zC, wC, bC) => {
+           QZ(CC, zC, wC, QC[bC], ZC.size, !0)
+         }))];
+         return ZC.crossed && bC.push(this.buildMesh(CC.cells, zC, .9, ((CC, zC, QC) => {
+           (0, yz.j)(CC, zC, QC, ZC.size + .01, .12)
+         }))), {
+           group: CC,
+           meshes: bC
+         }
+ ... (13 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9439-L9443` → after: `L1184-L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1184-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1184-L1191) · [Before (L9439-L9443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9439-L9443)

```diff
-       setRenderingOrder(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-           Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         this._renderingManager.setRenderingOrder(kk, ek, ik, Dk)
+     }
+ 
+     function QZ(CC, zC, ZC, QC, wC, bC) {
+       for (let nC = 0; nC < QC.length; nC += 6) {
+         const fC = [0, 0, 0],
+           oC = [0, 0, 0];
+         for (let CC = 0; CC < 3; CC++) fC[CC] = ZC[CC] + ((QC[nC + CC] + QC[nC + CC + 3]) / 2 - .5) * wC, oC[CC] = (QC[nC + CC + 3] - QC[nC + CC]) * wC;
+         (0, yz.e)(CC, zC, fC, oC, bC)
```

#### 49. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9445-L9448` → after: `L1193-L1211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1193-L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1193-L1211) · [Before (L9445-L9448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9445-L9448)

```diff
-       setRenderingAutoClearDepthStencil(kk, ek) {
-         let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
-           Dk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         this._renderingManager.setRenderingAutoClearDepthStencil(kk, ek, ik, Dk)
+     }
+ 
+     function wZ(CC, zC, ZC) {
+       return CC.rgb[0] === zC[0] && CC.rgb[1] === zC[1] && CC.rgb[2] === zC[2] && CC.look === ZC
+     }
+ 
+     function bZ(CC, zC) {
+       if (CC.cells.length !== zC.cells.length) return !1;
+       for (let ZC = 0; ZC < CC.cells.length; ZC++)
+         if (CC.cells[ZC] !== zC.cells[ZC]) return !1;
+       return CC.boxes.every(((CC, ZC) => CC === zC.boxes[ZC]))
+     }
+ 
+     function nZ(CC, zC) {
+       return CC.getClientOption(zC, "blockReach") + 1
+     }
+ ... (3 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9450-L9451` → after: `L1213-L1215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1213-L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1213-L1215) · [Before (L9450-L9451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9450-L9451)

```diff
-       getAutoClearDepthStencilSetup(kk) {
-         return this._renderingManager.getAutoClearDepthStencilSetup(kk)
+       look(CC) {
+         const [zC, , ZC] = CC.cameraDirection, QC = Math.hypot(zC, ZC);
+         QC > .001 && (this.heading = [zC / QC, ZC / QC])
```

#### 51. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9453-L9454` → after: `L1217-L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1217-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1217-L1283) · [Before (L9453-L9454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9453-L9454)

```diff
-       _forceBlockMaterialDirtyMechanism(kk) {
-         this._blockMaterialDirtyMechanism = kk
+       tapped(CC, zC, ZC) {
+         const QC = nZ(this.api, this.localPlayerId),
+           {
+             origin: wC,
+             direction: bC
+           } = this.api.getActionRay(),
+           nC = [...wC],
+           fC = [
+             [nC, [nC[0] + bC[0] * QC, nC[1] + bC[1] * QC, nC[2] + bC[2] * QC]]
+           ];
+         null !== CC && fC.push([nC, (0, sz.e)(CC)]), this.tap = {
+           lines: fC,
+           next: zC,
+           ms: ZC
+         }
+       }
+ ... (51 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9456-L9457` → after: `L1285-L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1285-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1285-L1288) · [Before (L9456-L9457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9456-L9457)

```diff
-       get blockMaterialDirtyMechanism() {
-         return this._blockMaterialDirtyMechanism
+     }
+     class oZ {
+       constructor(CC, zC, ZC) {
+         this.api = CC, this.localPlayerId = zC, this.juice = ZC, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], th … [truncated]
```

#### 53. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9459-L9460` → after: `L1290-L1297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1290-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1290-L1297) · [Before (L9459-L9460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9459-L9460)

```diff
-       set blockMaterialDirtyMechanism(kk) {
-         this._blockMaterialDirtyMechanism !== kk && (this._blockMaterialDirtyMechanism = kk, kk || this.markAllMaterialsAsDirty(127))
+       Ag(CC) {
+         const zC = "active" === CC[0] ? `${CC[1]}|${CC[3]}|${CC[4]}|${CC[5]}|${CC[6]}` : "";
+         if ("active" !== CC[0]) "built" === CC[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
+         else {
+           const [, , , , , , , ZC, QC, wC, bC] = CC;
+           zC !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = ZC) : ZC === this.layerY ? this.burstUnlisted(QC) : ZC > this.layerY && this.finishLayer(ZC), this.layerY = ZC, this.layerCells.has(ZC) || this.layerCells.set(ZC, QC.filter(FZ)), this.ghostCells = QC, th … [truncated]
+         }
+         zC !== this.blueprint && (this.blueprint = zC, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((CC => this.api.blockNameToBlockId(CC))), this.chunkWatch.watch([...this.ghostCells.filter(FZ), . … [truncated]
```

#### 54. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9462-L9464` → after: `L1299-L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1299-L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1299-L1300) · [Before (L9462-L9464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9462-L9464)

```diff
-       markAllMaterialsAsDirty(kk, ek) {
-         if (!this._blockMaterialDirtyMechanism)
-           for (const ik of this.materials) ek && !ek(ik) || ik.pek(kk)
+       finishLayer(CC) {
+         this.burstUnlisted([]), CC > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = CC)
```

#### 55. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9466-L9470` → after: `L1302-L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1302-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1302-L1311) · [Before (L9466-L9470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9466-L9470)

```diff
-       _loadFile(kk, ek, ik, Dk, fk, Sk, bk) {
-         const rk = (0, Gk.k)(kk, ek, ik, Dk ? this.offlineProvider : void 0, fk, Sk, bk);
-         return this._activeRequests.push(rk), rk.onCompleteObservable.add((kk => {
-           this._activeRequests.splice(this._activeRequests.indexOf(kk), 1)
-         })), rk
+       ZN() {
+         if (this.chunkWatch.changed()) return void this.refresh();
+         const CC = performance.now();
+         let zC = !1;
+         for (const [wC, bC] of this.foreseen) {
+           var ZC;
+           if (CC - bC > 1e3) this.foreseen.delete(wC), zC = !0, (null === (ZC = this.lastFilled) || void 0 === ZC ? void 0 : ZC.join()) === wC && (this.lastFilled = this.lastSeenFilled)
+         }
+         const QC = qZ(this.api.getPositionView(this.localPlayerId));
+         (zC || QC.some(((CC, zC) => CC !== this.playerCells[zC]))) && this.showNext()
```

#### 56. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9472-L9479` → after: `L1313-L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1313-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1313-L1314) · [Before (L9472-L9479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9472-L9479)

```diff
-       async _loadFileAsync(kk, ek, ik, Dk, fk) {
-         return await new Promise(((Sk, bk) => {
-           this._loadFile(kk, (kk => {
-             Sk(kk)
-           }), ek, ik, Dk, ((kk, ek) => {
-             bk(ek)
-           }), fk)
-         }))
+       dispose() {
+         this.meshes.dispose(), this.outline.dispose()
```

#### 57. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9481-L9493` → after: `L1316-L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1316-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1316-L1325) · [Before (L9481-L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9481-L9493)

```diff
-       async _loadDelayedFileAsync(kk, ek, ik) {
-         this._delayedFileRequests || (this._delayedFileRequests = new Map);
-         const Dk = `${kk}|${ek?"binary":"string"}`;
-         let fk = this._delayedFileRequests.get(Dk);
-         if (!fk) {
-           fk = ek ? this._loadFileAsync(kk, void 0, ik, !0) : this._loadFileAsync(kk, void 0, ik, !1);
-           const Sk = fk;
-           (async () => {
-             try {
-               await Sk
-             } catch {}
-             this._delayedFileRequests?.delete(Dk)
-           })(), this._delayedFileRequests.set(Dk, fk)
+       burstUnlisted(CC) {
+         const zC = new Set;
+         for (let wC = 0; wC < CC.length; wC += 4) zC.add(`${CC[wC]},${CC[wC+1]},${CC[wC+2]}`);
+         const ZC = [],
+           {
+             ghostCells: QC
+           } = this;
+         for (let wC = 0; wC < QC.length; wC += 4) {
+           const CC = `${QC[wC]},${QC[wC+1]},${QC[wC+2]}`;
+           !zC.has(CC) && this.open.delete(CC) && ZC.push(this.filledCell(wC))
```

#### 58. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9495-L9501` → after: `L1327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1327) · [Before (L9495-L9501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9495-L9501)

```diff
-         return await fk
-       }
-       _requestFile(kk, ek, ik, Dk, fk, Sk, bk) {
-         const rk = (0, Gk.t)(kk, ek, ik, Dk ? this.offlineProvider : void 0, fk, Sk, bk);
-         return this._activeRequests.push(rk), rk.onCompleteObservable.add((kk => {
-           this._activeRequests.splice(this._activeRequests.indexOf(kk), 1)
-         })), rk
+         this.burst(ZC)
```

#### 59. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9503-L9510` → after: `L1329-L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1329-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1329-L1365) · [Before (L9503-L9510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9503-L9510)

```diff
-       async _requestFileAsync(kk, ek, ik, Dk, fk) {
-         return await new Promise(((Sk, bk) => {
-           this._requestFile(kk, (kk => {
-             Sk(kk)
-           }), ek, ik, Dk, (kk => {
-             bk(kk)
-           }), fk)
-         }))
+       refresh() {
+         const {
+           ghostCells: CC,
+           palette: zC,
+           occupiedCells: ZC
+         } = this, QC = new zZ, wC = new Set, bC = [], nC = [];
+         for (let fC = 0; fC < CC.length; fC += 4) {
+           const [ZC, oC, qC, FC] = [CC[fC], CC[fC + 1], CC[fC + 2], CC[fC + 3]], WC = this.api.getBlockId(ZC, oC, qC), NC = `${ZC},${oC},${qC}`, MC = hz(this.blockIds[FC], WC);
+           !MC && Kz(WC) ? QC.add(ZC, oC, qC, dz(zC[FC]), kz, rz(zC[FC])) : MC ? this.open.has(NC) && bC.push(this.filledCell(fC)) : QC.add(ZC, oC, qC, CZ, Vz), !MC && this.api.isBlockInLoadedChunk(ZC, oC, qC) && (wC.add(NC), nC.push(ZC, oC, qC, Kz(WC) ? 0 : 1))
+         }
+         this.open = wC, this.nextCells = nC;
+         for (let fC = 0; fC < ZC.length; fC += 3) {
+           const [CC, zC, wC] = [ZC[fC], ZC[fC + 1], ZC[fC + 2]];
+           Kz(this.api.getBlockId(CC, zC, wC)) || QC.add(CC, zC, wC, CZ, Vz)
+         }
+         this.meshes.show(QC.toArray()), this.burst(bC), this.showNext(), this.turn.retry(performance.now())
+ ... (21 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9512-L9516` → after: `L1367-L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1367-L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1367-L1445) · [Before (L9512-L9516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9512-L9516)

```diff
-       _readFile(kk, ek, ik, Dk, fk) {
-         const Sk = (0, Gk.q)(kk, ek, ik, Dk, fk);
-         return this._activeRequests.push(Sk), Sk.onCompleteObservable.add((kk => {
-           this._activeRequests.splice(this._activeRequests.indexOf(kk), 1)
-         })), Sk
+       showNext() {
+         var CC;
+         const zC = this.api.getPositionView(this.localPlayerId);
+         this.playerCells.splice(0, 1 / 0, ...qZ(zC));
+         const ZC = this.lastFilled;
+         this.nextCell = this.pickNext(null === ZC ? [zC[0], zC[1] + 1, zC[2]] : (0, sz.e)(ZC), (() => !1)), this.outline.show(null !== (CC = this.aimed) && void 0 !== CC ? CC : this.nextCell)
+       }
+       pickNext(CC, zC) {
+         const ZC = this.api.getPositionView(this.localPlayerId),
+           QC = [ZC[0], ZC[1] + Tz.f.Dp * Tz.f.playerEyeToHeightRatio, ZC[2]],
+           wC = nZ(this.api, this.localPlayerId),
+           {
+             nextCells: bC
+           } = this,
+           nC = CC => [bC[CC], bC[CC + 1], bC[CC + 2]],
+           fC = function(CC, zC, ZC, QC, wC, bC) {
+ ... (63 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9518-L9525` → after: `L1447-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1447-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1447-L1464) · [Before (L9518-L9525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9518-L9525)

```diff
-       async _readFileAsync(kk, ek, ik) {
-         return await new Promise(((Dk, fk) => {
-           this._readFile(kk, (kk => {
-             Dk(kk)
-           }), ek, ik, (kk => {
-             fk(kk)
-           }))
-         }))
+     }
+ 
+     function qZ(CC) {
+       let [zC, ZC, QC] = CC;
+       const wC = Tz.f.tp / 2;
+       return [Math.floor(zC), Math.floor(ZC), Math.floor(QC), Math.floor(zC - wC), Math.floor(zC + wC), Math.floor(ZC + Tz.f.Dp), Math.floor(QC - wC), Math.floor(QC + wC)]
+     }
+ 
+     function FZ(CC, zC) {
+       return zC % 4 !== 3
+     }
+ 
+     function WZ(CC, zC, ZC, QC, wC) {
+       if (!CC.isBlockInLoadedChunk(zC, QC - 6, ZC) || !CC.isBlockInLoadedChunk(zC, QC + 6 + wC, ZC) || !CC.canModifyBlockAt(zC, QC, ZC)) return NaN;
+       let bC = QC - 1;
+       if (0 !== CC.getBlockId(zC, bC, ZC)) {
+ ... (2 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9527-L9528` → after: `L1466-L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1466-L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1466-L1626) · [Before (L9527-L9528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9527-L9528)

```diff
-       getPerfCollector() {
-         throw (0, Lk.k)("performanceViewerSceneExtension")
+       for (; bC > QC - 6;)
+         if (bC--, 0 !== CC.getBlockId(zC, bC, ZC)) return bC;
+       return NaN
+     }
+ 
+     function NZ(CC, zC, ZC, QC, wC) {
+       let bC = 0;
+       for (let nC = QC + 1; nC <= QC + wC; nC++) 0 !== CC.getBlockId(zC, nC, ZC) && bC++;
+       return bC
+     }
+ 
+     function MZ(CC) {
+       const zC = new Map;
+       for (const nC of CC) {
+         var ZC;
+         if (Number.isNaN(nC)) return null;
+ ... (145 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9530-L9531` → after: `L1628-L1630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1628-L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1628-L1630) · [Before (L9530-L9531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9530-L9531)

```diff
-       setActiveCameraByID(kk) {
-         return this.setActiveCameraById(kk)
+       ZN() {
+         const CC = this.placing;
+         null !== CC && (null !== CC.sent && !CC.sent.timedOut && performance.now() - CC.sent.atMs > 3e3 ? (CC.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(CC) || this.chunkWatch.changed()) && this.update())
```

#### 64. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9533-L9534` → after: `L1632-L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1632-L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1632-L1637) · [Before (L9533-L9534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9533-L9534)

```diff
-       getMaterialByID(kk) {
-         return this.getMaterialById(kk)
+       afterRender(CC) {
+         const zC = this.placing;
+         null !== zC && (! function(CC, zC) {
+           for (let ZC = 0; ZC < 3; ZC++) zC.eye[ZC] = CC.cameraPosition[ZC], zC.forward[ZC] = CC.cameraDirection[ZC];
+           zC.tanHalfFovX = CC.tanHalfFovX, zC.tanHalfFovY = CC.tanHalfFovY
+         }(CC, this.camera), null !== zC.hover && this.moveCentreTo(this.camera, zC.hover[0], zC.hover[1]))
```

#### 65. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9536-L9537` → after: `L1639-L1645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1639-L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1639-L1645) · [Before (L9536-L9537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9536-L9537)

```diff
-       getLastMaterialByID(kk) {
-         return this.getLastMaterialById(kk)
+       Ag(CC) {
+         const zC = this.placing;
+         if (null === zC || null === zC.sent || "active" !== CC[0]) return;
+         const {
+           sent: ZC
+         } = zC, [, QC, wC, bC, nC, fC, oC] = CC;
+         wC && QC === zC.id && oC === ZC.rotation && bC === ZC.corner[0] && nC === ZC.corner[1] && fC === ZC.corner[2] && this.close()
```

#### 66. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9539-L9540` → after: `L1647-L1648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1647-L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1647-L1648) · [Before (L9539-L9540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9539-L9540)

```diff
-       getTextureByUniqueID(kk) {
-         return this.getTextureByUniqueId(kk)
+       endFromServer() {
+         null !== this.placing && this.close()
```

#### 67. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9542-L9543` → after: `L1650-L1651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1650-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1650-L1651) · [Before (L9542-L9543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9542-L9543)

```diff
-       getCameraByID(kk) {
-         return this.getCameraById(kk)
+       dispose() {
+         this.meshes.dispose()
```

#### 68. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9545-L9546` → after: `L1653-L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1653-L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1653-L1658) · [Before (L9545-L9546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9545-L9546)

```diff
-       getCameraByUniqueID(kk) {
-         return this.getCameraByUniqueId(kk)
+       cornerOnTarget(CC) {
+         let [zC, , ZC] = CC;
+         const QC = this.api.getTargetedBlock();
+         if (null === QC) return null;
+         const [wC, , bC] = QC.position;
+         return [wC - Math.floor(zC / 2), bC - Math.floor(ZC / 2)]
```

#### 69. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9548-L9549` → after: `L1660-L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1660-L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1660-L1667) · [Before (L9548-L9549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9548-L9549)

```diff
-       getBoneByID(kk) {
-         return this.getBoneById(kk)
+       playerLevel() {
+         var CC;
+         const [zC, ZC, QC] = this.api.yG(this.localPlayerId);
+         if (null !== (CC = this.api.getLocalPlayerMovement()) && void 0 !== CC && CC.onGround) return Math.ceil(ZC - .01);
+         const [wC, bC, nC] = [Math.floor(zC), Math.floor(ZC), Math.floor(QC)];
+         for (let fC = bC; fC >= bC - 2; fC--)
+           if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(wC, fC, nC))) return fC + 1;
+         return bC
```

#### 70. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9551-L9552` → after: `L1669-L1692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1669-L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1669-L1692) · [Before (L9551-L9552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9551-L9552)

```diff
-       getLightByID(kk) {
-         return this.getLightById(kk)
+       followPlayerLevel(CC) {
+         if (GZ(CC)) return !1;
+         const zC = this.playerLevel();
+         return zC !== CC.corner[1] && (CC.corner[1] = zC, !0)
+       }
+       moveCentreTo(CC, zC, ZC) {
+         const QC = this.placing,
+           wC = gZ(CC, zC, ZC, QC.corner[1]);
+         if (null !== wC) {
+           const [CC, , zC] = aC(QC.id, QC.rotation).size;
+           this.moveTo(Math.round(wC[0] - CC / 2), Math.round(wC[1] - zC / 2))
+         }
+       }
+       moveTo(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
+         const QC = this.placing;
+ ... (8 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9554-L9555` → after: `L1694-L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1694-L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1694-L1700) · [Before (L9554-L9555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9554-L9555)

```diff
-       getLightByUniqueID(kk) {
-         return this.getLightByUniqueId(kk)
+       centreOnPlot(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
+         const {
+           id: QC,
+           corner: wC
+         } = this.placing, [bC, , nC] = aC(QC, ZC).size;
+         return this.api.canModifyBlockAt(CC + Math.floor(bC / 2), wC[1], zC + Math.floor(nC / 2))
```

#### 72. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9557-L9558` → after: `L1702-L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1702-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1702-L1703) · [Before (L9557-L9558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9557-L9558)

```diff
-       getParticleSystemByID(kk) {
-         return this.getParticleSystemById(kk)
+       close() {
+         this.placing = null, this.meshes.dispose(), this.bp(null)
```

#### 73. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9560-L9561` → after: `L1705-L1735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1705-L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1705-L1735) · [Before (L9560-L9561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9560-L9561)

```diff
-       getGeometryByID(kk) {
-         return this.getGeometryById(kk)
+       update() {
+         const {
+           id: CC,
+           rotation: zC,
+           corner: ZC,
+           refusals: QC
+         } = this.placing, wC = new zZ, bC = [];
+         let nC = !1,
+           fC = 0;
+         for (const {
+             offset: FC,
+             block: WC
+           }
+           of aC(CC, zC).cells) {
+           const [CC, zC, QC] = [ZC[0] + FC[0], ZC[1] + FC[1], ZC[2] + FC[2]];
+           bC.push(CC, zC, QC);
+ ... (15 more added lines; see GitHub link above)
```

#### 74. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9563-L9564` → after: `L1737-L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1737-L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1737-L1738) · [Before (L9563-L9564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9563-L9564)

```diff
-       getMeshByID(kk) {
-         return this.getMeshById(kk)
+       bp(CC) {
+         this.view = CC, FC.o.bp(SZ, CC, !0)
```

#### 75. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9566-L9567` → after: `L1740-L1828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1740-L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1740-L1828) · [Before (L9566-L9567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9566-L9567)

```diff
-       getMeshByUniqueID(kk) {
-         return this.getMeshByUniqueId(kk)
+     }
+ 
+     function GZ(CC) {
+       let {
+         sent: zC
+       } = CC;
+       return null !== zC && !zC.timedOut
+     }
+     var RZ = ZC(4179),
+       AZ = ZC(38979);
+ 
+     function xZ(CC, zC, ZC) {
+       const QC = [255 * CC, 255 * zC, 255 * ZC],
+         [wC, bC, nC] = QC.map((CC => CC + .4 * (255 - CC)));
+       return {
+         texture: "square_particle",
+ ... (73 more added lines; see GitHub link above)
```

#### 76. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9569-L9570` → after: `L1830-L1833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1830-L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1830-L1833) · [Before (L9569-L9570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9569-L9570)

```diff
-       getLastMeshByID(kk) {
-         return this.getLastMeshById(kk)
+       dispose() {
+         var CC;
+         for (const zC of this.chips.values()) zC.stop();
+         this.chips.clear(), null === (CC = this.sparkles) || void 0 === CC || CC.stop(), this.sparkles = null
```

#### 77. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9572-L9573` → after: `L1835-L1837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1835-L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1835-L1837) · [Before (L9572-L9573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9572-L9573)

```diff
-       getMeshesByID(kk) {
-         return this.getMeshesById(kk)
+       setPoint(CC, zC, ZC, QC, wC) {
+         const bC = 4 * CC;
+         this.points[bC] = zC, this.points[bC + 1] = ZC, this.points[bC + 2] = QC, this.points[bC + 3] = wC
```

#### 78. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9575-L9576` → after: `L1839-L1914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1839-L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1839-L1914) · [Before (L9575-L9576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9575-L9576)

```diff
-       getTransformNodeByID(kk) {
-         return this.getTransformNodeById(kk)
+     }
+     var iZ = ZC(1887);
+     const vZ = "SpecialAction1",
+       eZ = "KeyY",
+       hZ = "KeyX";
+ 
+     function KZ(CC) {
+       let {
+         placement: zC
+       } = CC;
+       const ZC = (0, hC.f)(SZ, zC.getView()),
+         {
+           t: QC
+         } = (0, YC.y)(),
+         {
+           isTouchScreen: wC
+ ... (60 more added lines; see GitHub link above)
```

#### 79. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9578-L9579` → after: `L1916-L1936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1916-L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1916-L1936) · [Before (L9578-L9579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9578-L9579)

```diff
-       getTransformNodeByUniqueID(kk) {
-         return this.getTransformNodeByUniqueId(kk)
+       down(CC) {
+         if (null !== this.press) return !1;
+         const {
+           id: zC,
+           mouse: ZC,
+           x: QC,
+           y: wC,
+           atMs: bC
+         } = CC;
+         return this.press = {
+           id: zC,
+           mouse: ZC,
+           x: QC,
+           y: wC,
+           atMs: bC,
+           moved: !1
+ ... (5 more added lines; see GitHub link above)
```

#### 80. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9581-L9582` → after: `L1938-L1940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1938-L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1938-L1940) · [Before (L9581-L9582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9581-L9582)

```diff
-       getTransformNodesByID(kk) {
-         return this.getTransformNodesById(kk)
+       up(CC) {
+         const zC = this.press;
+         (null === zC || void 0 === zC ? void 0 : zC.id) === CC.id && (this.move(CC), this.end(), !zC.moved && (zC.mouse || CC.atMs - zC.atMs <= 250) && this.placement.tap())
```

#### 81. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9584-L9585` → after: `L1942-L1944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1942-L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1942-L1944) · [Before (L9584-L9585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9584-L9585)

```diff
-       getNodeByID(kk) {
-         return this.getNodeById(kk)
+       cancel(CC) {
+         var zC;
+         (null === (zC = this.press) || void 0 === zC ? void 0 : zC.id) === CC && this.end()
```

#### 82. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9587-L9588` → after: `L1946-L1951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1946-L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1946-L1951) · [Before (L9587-L9588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9587-L9588)

```diff
-       getLastEntryByID(kk) {
-         return this.getLastEntryById(kk)
+       leave(CC) {
+         let {
+           id: zC,
+           mouse: ZC
+         } = CC;
+         ZC && this.placement.endHover(), this.cancel(zC)
```

#### 83. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9590-L9591` → after: `L1953-L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1953-L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1953-L1954) · [Before (L9590-L9591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9590-L9591)

```diff
-       getLastSkeletonByID(kk) {
-         return this.getLastSkeletonById(kk)
+       end() {
+         this.press.mouse || this.placement.endDrag(), this.press = null
```

#### 84. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9597-L9628` → after: `L1958-L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1958-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1958-L1964) · [Before (L9597-L9628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9597-L9628)

```diff
-     function Pi() {
-       ri || (ri = !0, (0, ii.h)("BABYLON.Scene", bi))
-     }(ke = bi.prototype).sortActiveAnimatables ?? (ke.sortActiveAnimatables = (0, Lk.i)("Scene", "sortActiveAnimatables")), (ee = bi.prototype).beginWeightedAnimation ?? (ee.beginWeightedAnimation = (0, Lk.i)("Scene", "beginWeightedAnimation")), (ie = bi.prototype).beginAnimation … [truncated]
-   },
-   39736: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => Dk,
-       c: () => fk
-     });
-     class Dk {}
-     Dk.NAME_EFFECTLAYER = "EffectLayer", Dk.NAME_LAYER = "Layer", Dk.NAME_LENSFLARESYSTEM = "LensFlareSystem", Dk.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", Dk.NAME_PARTICLESYSTEM = "ParticleSystem", Dk.NAME_GAMEPAD = "Gamepad", Dk.NAME_SIMPLIFICATIONQUEUE = "Simplificatio … [truncated]
-     class fk extends Array {
-       constructor(kk) {
-         super(...kk)
-       }
-       static Create() {
- ... (16 more removed lines; see GitHub link above)
+     function EZ(CC) {
+       let {
+         placement: zC
+       } = CC;
+       return null === (0, hC.f)(SZ, zC.getView()) ? null : (0, DC.jsx)(lZ, {
+         placement: zC
+       })
```

#### 85. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9640-L9663` → after: `L1967-L1994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1967-L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1967-L1994) · [Before (L9640-L9663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9640-L9663)

```diff
-     function Dk(kk, ek, ik, Dk, fk, Sk) {
-       function bk(kk) {
-         if (void 0 !== kk && "function" !== typeof kk) throw new TypeError("Function expected");
-         return kk
-       }
-       for (var rk, Pk = Dk.kind, mk = "getter" === Pk ? "get" : "setter" === Pk ? "set" : "value", Mk = !ek && kk ? Dk.static ? kk : kk.prototype : null, Kk = ek || (Mk ? Object.getOwnPropertyDescriptor(Mk, Dk.name) : {}), xk = !1, nk = ik.length - 1; nk >= 0; nk--) {
-         var Uk = {};
-         for (var Hk in Dk) Uk[Hk] = "access" === Hk ? {} : Dk[Hk];
-         for (var Hk in Dk.access) Uk.access[Hk] = Dk.access[Hk];
-         Uk.addInitializer = function(kk) {
-           if (xk) throw new TypeError("Cannot add initializers after decoration has completed");
-           Sk.push(bk(kk || null))
-         };
-         var wk = (0, ik[nk])("accessor" === Pk ? {
-           get: Kk.get,
-           set: Kk.set
- ... (8 more removed lines; see GitHub link above)
+     function lZ(CC) {
+       let {
+         placement: zC
+       } = CC;
+       (0, mZ.b)(!0, !0, "PlotsPlacementLayer");
+       const ZC = (0, bC.useMemo)((() => new HZ(zC)), [zC]);
+       return (0, DC.jsx)("div", {
+         className: "PlotsPlacementLayer",
+         onPointerDown: CC => {
+           "mouse" === CC.pointerType && 0 !== CC.button || !ZC.down(XZ(CC)) || CC.currentTarget.setPointerCapture(CC.pointerId)
+         },
+         onPointerMove: CC => {
+           ZC.move(XZ(CC))
+         },
+         onPointerUp: CC => {
+           ZC.up(XZ(CC))
+ ... (12 more added lines; see GitHub link above)
```

#### 86. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9666-L9668` → after: `L1997-L2122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1997-L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L1997-L2122) · [Before (L9666-L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9666-L9668)

```diff
-     function fk(kk, ek, ik) {
-       for (var Dk = arguments.length > 2, fk = 0; fk < ek.length; fk++) ik = Dk ? ek[fk].call(kk, ik) : ek[fk].call(kk);
-       return Dk ? ik : void 0
+     function XZ(CC) {
+       const {
+         left: zC,
+         top: ZC,
+         width: QC,
+         height: wC
+       } = CC.currentTarget.getBoundingClientRect();
+       return {
+         id: CC.pointerId,
+         mouse: "mouse" === CC.pointerType,
+         x: CC.clientX,
+         y: CC.clientY,
+         ndcX: (CC.clientX - zC) / QC * 2 - 1,
+         ndcY: 1 - (CC.clientY - ZC) / wC * 2,
+         atMs: CC.timeStamp
+       }
+ ... (110 more added lines; see GitHub link above)
```

#### 87. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9672-L9674` → after: `L2177-L2190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2177-L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L2177-L2190) · [Before (L9672-L9674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9672-L9674)

```diff
-       return "symbol" === typeof ek && (ek = ek.description ? "[".concat(ek.description, "]") : ""), Object.defineProperty(kk, "name", {
-         configurable: !0,
-         value: ik ? "".concat(ik, " ", ek) : ek
+       const {
+         translationKey: QC,
+         actions: wC
+       } = ZC ? zC.touch : zC.desktop;
+       if (0 === wC.length) return CC(QC);
+       const bC = [];
+       for (const nC of wC) {
+         const QC = (0, iZ.l)(nC, ZC),
+           wC = iZ.o[nC][0];
+         if (null === QC && void 0 === wC) return CC(zC.plainKey);
+         bC.push(null === QC ? (0, iZ.h)(wC) : CC(QC.translationKey))
+       }
+       return CC(QC, {
+         key: bC.join("")
```

#### 88. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9680-L9683` → after: `L2194-L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2194-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L2194-L2215) · [Before (L9680-L9683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9680-L9683)

```diff
-     function bk(kk, ek, ik, Dk) {
-       if ("a" === ik && !Dk) throw new TypeError("Private accessor was defined without a getter");
-       if ("function" === typeof ek ? kk !== ek || !Dk : !ek.has(kk)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
-       return "m" === ik ? Dk : "a" === ik ? Dk.call(kk) : Dk ? Dk.value : ek.get(kk)
+     function UZ(CC) {
+       let {
+         hud: zC
+       } = CC;
+       const ZC = (0, hC.f)(qz, zC.getStep()),
+         {
+           t: QC
+         } = (0, YC.y)();
+       return (0, DC.jsxs)(nz.c, {
+         placement: "bottom",
+         children: ["step" === ZC[0] && (0, DC.jsx)(BZ, {
+           step: ZC[1],
+           progress: ZC[2],
+           goal: ZC[3]
+         }, ZC[1]), "celebrate" === ZC[0] && (0, DC.jsx)(OZ, {
+           className: JC()("Celebrate", {
+ ... (6 more added lines; see GitHub link above)
```

#### 89. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L9686-L9690` → after: `L2218-L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L2218-L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/248.js#L2218-L2389) · [Before (L9686-L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/248.js#L9686-L9690)

```diff
-     function rk(kk, ek, ik, Dk, fk) {
-       if ("m" === Dk) throw new TypeError("Private method is not writable");
-       if ("a" === Dk && !fk) throw new TypeError("Private accessor was defined without a setter");
-       if ("function" === typeof ek ? kk !== ek || !fk : !ek.has(kk)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
-       return "a" === Dk ? fk.call(kk, ik) : fk ? fk.value = ik : ek.set(kk, ik), ik
+     function BZ(CC) {
+       let {
+         step: zC,
+         progress: ZC,
+         goal: QC
+       } = CC;
+       const {
+         isTouchScreen: wC
+       } = (0, fC.k)(["isTouchScreen"]), {
+         t: bC
+       } = (0, YC.y)(), nC = yZ[zC];
+       return (0, DC.jsxs)(OZ, {
+         icon: nC.icon,
+         title: bC(nC.titleKey),
+         children: [(0, DC.jsx)("div", {
+           className: "PlotsStepCardHint SmallTextLight",
+ ... (156 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/249.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/249.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479)

#### 1. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/249.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/249.js#L2)

```diff
- export const ids = [249, 352];
+ export const ids = [249];
```

#### 2. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/249.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/249.js#L4-L6)

```diff
-   39412: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => Dk
+   39621: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       playDocsSound: () => fC
```

#### 3. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L8-L10` → after: `L8-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L8-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/249.js#L8-L31) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/249.js#L8-L10)

```diff
-     class Dk {
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Dk.ShadersRepository : Dk.ShadersRepositoryWGSL
+     var QC = ZC(4797),
+       wC = ZC(36641),
+       bC = ZC(1149);
+     const nC = new Map;
+ 
+     function fC(CC, zC, ZC, fC, oC) {
+       let qC, FC = null,
+         WC = 0,
+         NC = 0;
+       if (zC) qC = new QC.Howl({
+         src: [`${bC.clientSideServerUrls.staticUrl}/sounds/music/${CC}.mp3`],
+         html5: !0,
+         volume: ZC
+       });
+       else {
+         var MC;
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L12-L13` → after: `L33-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L33-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/249.js#L33-L74) · [Before (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/249.js#L12-L13)

```diff
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Dk.ShadersStore : Dk.ShadersStoreWGSL
+       const gC = zC ? qC.play() : qC.play(CC);
+       qC.volume(ZC, gC), fC > 0 && qC.seek(WC + fC, gC);
+       const SC = () => zC ? qC.duration() : NC;
+       let pC = !1;
+       const PC = CC => {
+           pC || (pC = !0, qC.off("play", GC, gC), qC.off("end", RC, gC), qC.off("loaderror", xC), qC.off("playerror", AC, gC), zC && qC.unload(), oC.onEnd(CC))
+         },
+         GC = () => {
+           oC.onPlay(SC())
+         },
+         RC = () => {
+           PC(!1)
+         },
+         AC = (zC, ZC) => {
+           console.error(`Could not play docs sound ${CC}`, ZC), PC(!0)
+         },
+ ... (26 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/250.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/250.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977)

#### 1. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L4-L12` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L4-L6) · [Before (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L4-L12)

```diff
-   39623: (kk, ek, ik) => {
-     ik.d(ek, {
-       e: () => xk,
-       i: () => Kk,
-       l: () => Pk,
-       m: () => nk,
-       n: () => mk,
-       p: () => rk,
-       q: () => Mk
+   39626: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       default: () => LC
```

#### 2. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L14-L228` → after: `L8-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L8-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L8-L66) · [Before (L14-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L14-L228)

```diff
-     var Dk = ik(38272),
-       fk = ik(39628);
- 
-     function Sk(kk, ek, ik, Dk) {
-       switch (ek) {
-         case 5120: {
-           let ek = kk.getInt8(ik);
-           return Dk && (ek = Math.max(ek / 127, -1)), ek
-         }
-         case 5121: {
-           let ek = kk.getUint8(ik);
-           return Dk && (ek /= 255), ek
-         }
-         case 5122: {
-           let ek = kk.getInt16(ik, !0);
-           return Dk && (ek = Math.max(ek / 32767, -1)), ek
- ... (199 more removed lines; see GitHub link above)
+     ZC(6473);
+     var QC = ZC(48),
+       wC = ZC(39635),
+       bC = ZC(39902),
+       nC = ZC(40031),
+       fC = ZC(40076),
+       oC = ZC(40092),
+       qC = ZC(37138),
+       FC = ZC(36961),
+       WC = ZC(40219),
+       NC = ZC(40281),
+       MC = (ZC(40308), ZC(1169)),
+       gC = ZC(184),
+       SC = ZC(1143),
+       pC = ZC(20),
+       PC = ZC(2734),
+ ... (43 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L231-L267` → after: `L69-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L69-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L69-L101) · [Before (L231-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L231-L267)

```diff
-       const ek = kk.buffer;
-       if (ek instanceof ArrayBuffer) return kk;
-       const ik = new ArrayBuffer(kk.byteLength);
-       return new Uint8Array(ik).set(new Uint8Array(ek, kk.byteOffset, kk.byteLength)), ik
-     }
-   },
-   39455: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => jk,
-       g: () => Ck,
-       k: () => Ak,
-       i: () => Ik,
-       l: () => zk
-     });
-     class Dk {
-       constructor() {
- ... (21 more removed lines; see GitHub link above)
+       let {
+         heatmap: zC,
+         scale: ZC,
+         fullyOpaqueFrom: HC,
+         bounds: uC,
+         fitBounds: rC,
+         schematic: sC,
+         controls: TC,
+         onStepTime: aC,
+         onShowAllTime: tC,
+         onTogglePlaying: DC,
+         getReadout: yC = null
+       } = CC;
+       const {
+         t: LC
+       } = (0, SC.y)(), {
+ ... (17 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L271-L293` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L104-L107) · [Before (L271-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L271-L293)

```diff
-           Dk += ik + "\n"
-         }
-         for (const fk of this.children) Dk += fk.process(kk, ek, ik);
-         return this.additionalDefineKey && (kk[this.additionalDefineKey] = this.additionalDefineValue || "true", ik[this.additionalDefineKey] = kk[this.additionalDefineKey]), Dk
-       }
-     }
-     class fk {
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
+             positions: Int32Array.from(ZC),
+             values: Float64Array.from(QC),
+             count: QC.length
```

#### 5. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L295-L299` → after: `L109-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L109-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L109-L115) · [Before (L295-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L295-L299)

```diff
-           const kk = ek.trim();
-           if (!kk) continue;
-           if (kk.startsWith("//")) {
-             this._lines.push(ek);
-             continue
+         }(zC, Kz)), [zC, Kz]),
+         Ez = iC * bz.cameraFOV / 100,
+         lz = Wz.height > 0 ? Wz.width / Wz.height : 1,
+         Xz = (0, QC.useMemo)((() => function(CC, zC) {
+           return {
+             min: [CC.min[0] - zC[0], CC.min[1] - zC[1], CC.min[2] - zC[2]],
+             max: [CC.max[0] - zC[0] + 1, CC.max[1] - zC[1] + 1, CC.max[2] - zC[2] + 1]
```

#### 6. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L301-L309` → after: `L117-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L117-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/250.js#L117-L172) · [Before (L301-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/250.js#L301-L309)

```diff
-           const ik = kk.indexOf(";");
-           if (-1 === ik) this._lines.push(kk);
-           else if (ik === kk.length - 1) kk.length > 1 && this._lines.push(kk);
-           else {
-             const kk = ek.split(";");
-             for (let ek = 0; ek < kk.length; ek++) {
-               let ik = kk[ek];
-               ik && (ik = ik.trim(), ik && this._lines.push(ik + (ek !== kk.length - 1 ? ";" : "")))
-             }
+         }(rC, Kz)), [rC, Kz]),
+         cz = Zz(Xz, lz, Ez),
+         uz = null !== ez && void 0 !== ez ? ez : cz,
+         rz = (0, QC.useRef)({
+           fittedView: cz,
+           fieldOfView: Ez,
+           mouseSensitivity: bz.mouseSensitivity,
+           canLock: pz
+         });
+       rz.current = {
+         fittedView: cz,
+         fieldOfView: Ez,
+         mouseSensitivity: bz.mouseSensitivity,
+         canLock: pz
+       };
+       const sz = (0, QC.useMemo)((() => {
+ ... (40 more added lines; see GitHub link above)
```
