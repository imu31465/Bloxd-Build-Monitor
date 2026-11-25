# Changed — Bundle Modifications Report (Part 014 / 056)

- **Updated at**: `2026-11-26T01:33 JST`
- **Part**: `14 / 56` (**286** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 013](part-013.md) · [Part 015 →](part-015.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/267.js` (wp3j0a.a13381cf → fo1voe.f743fbcf · continued)

- **File**: `bundles/bloxd.io/chunks/js/267.js` (67 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8)

#### 33. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L119-L185` → after: `L16605-L16644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16605-L16644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16605-L16644) · [Before (L119-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L119-L185)

```diff
-       }, (() => {
-         const LG = "function" === typeof Symbol && Symbol.metadata ? Object.create(VG[Symbol.metadata] ?? null) : void 0;
-         bG = [(0, SG.M)()], ZG = [(0, SG.M)()], UG = [(0, SG.Q)()], YG = [(0, SG.Q)()], (0, wG.k)(GG, null, bG, {
-           kind: "getter",
-           name: "position",
-           static: !1,
-           private: !1,
-           access: {
-             has: GG => "position" in GG,
-             get: GG => GG.position
-           },
-           metadata: LG
-         }, null, pG), (0, wG.k)(GG, null, ZG, {
-           kind: "getter",
-           name: "direction",
-           static: !1,
- ... (51 more removed lines; see GitHub link above)
+         this.budget -= hM, this.particles ??= MM.createParticles(function(MM) {
+           const [rM, iM] = MM.colours;
+           return {
+             texture: "square_particle",
+             vL: 400,
+             minLifeTime: MM.life[0] / py,
+             maxLifeTime: MM.life[1] / py,
+             minSize: MM.size[0],
+             maxSize: MM.size[1],
+             minEmitPower: 1,
+             maxEmitPower: 1,
+             emitRate: 0,
+             colorGradients: [{
+               timeFraction: 0,
+               minColor: [rM[0], rM[1], rM[2], 1],
+               maxColor: [iM[0], iM[1], iM[2], 1]
+ ... (24 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L187-L188` → after: `L16646-L16648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16646-L16648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16646-L16648) · [Before (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L187-L188)

```diff
-       update(GG) {
-         this.updateMipLevel(GG, 0)
+       isNewPress(MM) {
+         const rM = MM - this.lastTapAt >= 300;
+         return this.lastTapAt = MM, rM
```

#### 35. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L190-L191` → after: `L16650-L16653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16650-L16653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16650-L16653) · [Before (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L190-L191)

```diff
-       updateMipLevel(GG, bG) {
-         this._getEngine().updateRawTexture(this._texture, GG, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, bG), this._waitingForData = !1
+     }
+     class Ny {
+       constructor() {
+         this.presses = new Yy, this.predicted = null
```

#### 36. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L193-L196` → after: `L16655-L16660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16655-L16660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16655-L16660) · [Before (L193-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L193-L196)

```diff
-       clone() {
-         if (!this._texture) return super.clone();
-         const GG = new SG(null, this.getSize().width, this.getSize().height, this.format, this.Dv(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
-         return GG._texture = this._texture, this._texture.incrementReferences(), GG
+       tap(MM, rM) {
+         const iM = this.presses.isNewPress(rM);
+         return iM && (this.predicted = {
+           station: MM,
+           at: rM
+         }), iM
```

#### 37. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L198-L199` → after: `L16662-L16664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16662-L16664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16662-L16664) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L198-L199)

```diff
-       isReady() {
-         return super.isReady() && !this._waitingForData
+       consumeServerOpen(MM, rM) {
+         const iM = this.predicted;
+         return !(null === iM || iM.station !== MM || rM - iM.at > 2e3) && (this.predicted = null, !0)
```

#### 38. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L201-L202` → after: `L16666-L16669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16666-L16669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16666-L16669) · [Before (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L201-L202)

```diff
-       static CreateLuminanceTexture(GG, bG, ZG, wG) {
-         return new SG(GG, bG, ZG, 1, wG, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
+     }
+     class Ay {
+       constructor() {
+         this.thrustAt = -1 / 0
```

#### 39. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L204-L205` → after: `L16671-L16672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16671-L16672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16671-L16672) · [Before (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L204-L205)

```diff
-       static CreateLuminanceAlphaTexture(GG, bG, ZG, wG) {
-         return new SG(GG, bG, ZG, 2, wG, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
+       lit(MM, rM) {
+         return MM && (this.thrustAt = rM), rM - this.thrustAt < 200
```

#### 40. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L207-L208` → after: `L16674-L16702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16674-L16702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16674-L16702) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L207-L208)

```diff
-       static CreateAlphaTexture(GG, bG, ZG, wG) {
-         return new SG(GG, bG, ZG, 0, wG, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
+     }
+     const xy = [.1, .05, .1],
+       vy = {
+         texture: "effect_5",
+         vL: Math.ceil(48),
+         minLifeTime: .35,
+         maxLifeTime: .8,
+         minEmitPower: 1,
+         maxEmitPower: 2,
+         minSize: .2,
+         maxSize: .45,
+         emitRate: 0,
+         gravity: [0, -2, 0],
+         dir1: [-.15, -1, -.15],
+         dir2: [.15, -1, .15],
+         colorGradients: [{
+ ... (13 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L210-L211` → after: `L16704-L16705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16704-L16705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16704-L16705) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L210-L211)

```diff
-       static CreateRGBTexture(GG, bG, ZG, wG) {
-         return new SG(GG, bG, ZG, 4, wG, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
+       TE(MM, rM) {
+         for (const [iM, OM] of rM.baf2JetFlames) MM.isLocalPlayer(iM) || (OM ? this.lit.add(iM) : this.lit.delete(iM))
```

#### 42. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L213-L214` → after: `L16707-L16712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16707-L16712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16707-L16712) · [Before (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L213-L214)

```diff
-       static CreateRGBATexture(GG, bG, ZG, wG) {
-         return new SG(GG, bG, ZG, 5, wG, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
+       onAfterRender(MM, rM) {
+         const iM = performance.now(),
+           OM = this.hold.lit(this.selfThrusting(MM, rM), iM);
+         for (const [SM, jM] of this.flames)(SM === rM ? OM : this.lit.has(SM)) || this.setEmitting(jM, !1), SM === rM || MM.getPositionView(SM) ? !jM.emitting && iM - jM.offAt >= 1300 && (jM.particles.stop(), this.flames.delete(SM)) : (jM.particles.dispose(), this.flames.delete(S … [truncated]
+         OM && this.draw(MM, rM, rM);
+         for (const SM of this.lit) this.draw(MM, rM, SM)
```

#### 43. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L216-L217` → after: `L16714-L16716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16714-L16716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16714-L16716) · [Before (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L216-L217)

```diff
-       static CreateRGBAStorageTexture(GG, bG, ZG, wG) {
-         return new SG(GG, bG, ZG, 5, wG, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
+       dispose() {
+         for (const MM of this.flames.values()) MM.particles.dispose();
+         this.flames.clear(), this.lit.clear()
```

#### 44. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L219-L223` → after: `L16718-L16727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16718-L16727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16718-L16727) · [Before (L219-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L219-L223)

```diff
-       static CreateRTexture(GG, bG, ZG, LG) {
-         let yG = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-           kG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           UG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : wG.d.TRILINEAR_SAMPLINGMODE;
-         return new SG(GG, bG, ZG, 6, LG, yG, kG, UG, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
+       selfThrusting(MM, rM) {
+         var iM;
+         const OM = MM.getLocalPlayerMovement();
+         return !!OM && (null !== (SM = {
+           option: null !== (iM = MM.getClientOption(rM, "jumpHoldThrust")) && void 0 !== iM ? iM : null,
+           jumping: OM.jumpHeld,
+           onGround: OM.onGround,
+           alive: MM.isAlive(rM)
+         }).option && SM.option.maxUpSpeed >= 0 && SM.jumping && !SM.onGround && SM.alive);
+         var SM
```

#### 45. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L225-L229` → after: `L16729-L16741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16729-L16741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16729-L16741) · [Before (L225-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L225-L229)

```diff
-       static CreateRStorageTexture(GG, bG, ZG, LG) {
-         let yG = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-           kG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           UG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : wG.d.TRILINEAR_SAMPLINGMODE;
-         return new SG(GG, bG, ZG, 6, LG, yG, kG, UG, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
+       draw(MM, rM, iM) {
+         var OM, SM;
+         const jM = this.pos;
+         if (!MM.readDrawnPosition(iM, jM)) return;
+         const aM = MM.readDrawnPosition(rM, this.camera) ? this.camera : jM;
+         if (!((jM[0] - aM[0]) ** 2 + (jM[1] - aM[1]) ** 2 + (jM[2] - aM[2]) ** 2 < 1600) || !MM.particlesEnabled()) {
+           const MM = this.flames.get(iM);
+           return void(MM && this.setEmitting(MM, !1))
+         }
+         const PM = null !== (OM = this.flames.get(iM)) && void 0 !== OM ? OM : this.create(MM, iM, jM),
+           nM = null !== (SM = MM.getDrawnHeading(iM)) && void 0 !== SM ? SM : 0,
+           QM = this.at;
+         QM[0] = jM[0] - .35 * Math.sin(nM), QM[1] = jM[1] + 1.05, QM[2] = jM[2] - .35 * Math.cos(nM), PM.particles.moveTo(QM), this.setEmitting(PM, !0)
```

#### 46. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L231-L261` → after: `L16743-L16744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16743-L16744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16743-L16744) · [Before (L231-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L231-L261)

```diff
-     }
-   },
-   42065: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => wG.b
-     });
-     var wG = ZG(40811);
-     (0, wG.c)()
-   },
-   42014: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => wG.e
-     });
-     var wG = ZG(40838);
-     (0, wG.g)()
-   },
- ... (15 more removed lines; see GitHub link above)
+       setEmitting(MM, rM) {
+         MM.emitting !== rM && (MM.emitting = rM, rM || (MM.offAt = performance.now()), MM.particles.setEmitRate(rM ? 60 : 0))
```

#### 47. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L263-L268` → after: `L16746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16746) · [Before (L263-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L263-L268)

```diff
-       constructor(GG) {
-         let bG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-           wG = arguments.length > 5 ? arguments[5] : void 0,
-           SG = arguments.length > 6 ? arguments[6] : void 0,
-           kG = arguments.length > 7 ? arguments[7] : void 0;
-         super(GG, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, bG, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = wG, this.useVertexAlpha = SG, this.color = new  … [truncated]
+       create(MM, rM, iM) {
```

#### 48. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L270-L275` → after: `L16748-L16753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16748-L16753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16748-L16753) · [Before (L270-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L270-L275)

```diff
-           attributes: [yG.l.PositionKind],
-           uniforms: ["world", "viewProjection"],
-           needAlphaBlending: !0,
-           defines: [],
-           useClipPlane: null,
-           shaderLanguage: 0
+           particles: MM.createParticles(vy, {
+             pos: iM,
+             half: xy
+           }),
+           emitting: !1,
+           offAt: performance.now()
```

#### 49. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L277-L284` → after: `L16755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16755) · [Before (L277-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L277-L284)

```diff
-         if (this.useVertexAlpha ? UG.defines.push("#define VERTEXALPHA") : UG.needAlphaBlending = !1, this.useVertexColor ? (UG.defines.push("#define VERTEXCOLOR"), UG.attributes.push(yG.l.ColorKind)) : (UG.uniforms.push("color"), this._color4 = new LG.d), kG) this.material = kG;
-         else {
-           this.Dv().CK().isWebGPU && !fG.ForceGLSL && (this._shaderLanguage = 1), UG.shaderLanguage = this._shaderLanguage, UG.extraInitializationsAsync = async () => {
-             1 === this._shaderLanguage ? await Promise.all([ZG.e(349).then((() => ZG(43005))), ZG.e(355).then((() => ZG(43013)))]) : await Promise.all([ZG.e(331).then((() => ZG(43017))), ZG.e(337).then((() => ZG(43021)))])
-           };
-           const GG = new VG.o("colorShader", this.Dv(), "color", UG, !1);
-           GG.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(GG)
-         }
+         return this.flames.set(rM, OM), OM
```

#### 50. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L286-L287` → after: `L16757-L16780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16757-L16780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16757-L16780) · [Before (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L286-L287)

```diff
-       getClassName() {
-         return "LinesMesh"
+     }
+ 
+     function By(MM) {
+       return "Reactor Frame" === jO("reactor", MM)
+     }
+ 
+     function Xy(MM) {
+       return Ni("reactor", MM) && !By(MM) && (MM.startsWith("Reactor Glass") || MM.startsWith("Reactor Port"))
+     }
+     const Iy = "baf2Goal";
+     class Ky {
+       constructor() {
+         this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [sS.i.subscribe("setDirectionArrow", (MM => {
+           let {
+             id: rM,
+             position: iM
+ ... (8 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L289-L290` → after: `L16782-L16783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16782-L16783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16782-L16783) · [Before (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L289-L290)

```diff
-       get material() {
-         return this._internalAbstractMeshDataInfo._material
+       dispose() {
+         for (const MM of this.subs) sS.i.unsubscribe(MM)
```

#### 52. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L292-L296` → after: `L16785-L16807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16785-L16807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16785-L16807) · [Before (L292-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L292-L296)

```diff
-       set material(GG) {
-         const bG = this.material;
-         if (bG === GG) return;
-         const ZG = bG && this._ownsMaterial;
-         this._ownsMaterial = !1, this._setInternalMaterial(GG), ZG && bG?.dispose()
+       sideOf(MM, rM, iM, OM) {
+         const SM = this.goal;
+         if (!SM) return 0;
+         iM - this.checkedAt > 1e3 && (this.checkedAt = iM, this.open = function(MM, rM) {
+           const [iM, OM, SM] = MM.map(Math.floor);
+           if (!Xy(rM(iM, OM, SM))) return null;
+           for (const [jM, aM] of [
+               [1, 0],
+               [0, 1]
+             ]) {
+             const MM = rM(iM + jM, OM, SM + aM),
+               PM = rM(iM - jM, OM, SM - aM);
+             if (By(PM) && Xy(MM)) return [jM, 0, aM];
+             if (By(MM) && Xy(PM)) return [0 - jM, 0, 0 - aM]
+           }
+           return null
+ ... (7 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L298-L299` → after: `L16809-L16820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16809-L16820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16809-L16820) · [Before (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L298-L299)

```diff
-       _setInternalMaterial(GG) {
-         this._setMaterial(GG), this.material && (this.material.fillMode = YG.e.LineListDrawMode, this.material.disableLighting = !0)
+     }
+     class qy {
+       constructor() {
+         this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), th … [truncated]
+           this.boxStale = !0
+         }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.pE = () => {
+           this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
+         }, this.sizes = new ResizeObserver((MM => {
+           for (const rM of MM) rM.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(rM.target, rM.borderBoxSize[0].inlineSize / 2)
+         })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
+           this.queued = !1, this.dh || this.clear()
+         }, window.addEventListener("resize", this.pE)
```

#### 54. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L301-L302` → after: `L16822-L16824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16822-L16824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16822-L16824) · [Before (L301-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L301-L302)

```diff
-       get checkCollisions() {
-         return !1
+       onAfterRender(MM, rM) {
+         var iM;
+         this.api = MM, this.project = null !== (iM = null === rM || void 0 === rM ? void 0 : rM.projectWorldPosToScreenPos) && void 0 !== iM ? iM : null, this.queued || this.dh || (this.queued = !0, queueMicrotask(this.run))
```

#### 55. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L304-L314` → after: `L16826-L16853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16826-L16853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16826-L16853) · [Before (L304-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L304-L314)

```diff
-       set checkCollisions(GG) {}
-       _bind(GG, bG) {
-         if (!this._geometry) return this;
-         const ZG = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
-         if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(bG, ZG) : this._geometry._bind(bG, ZG, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMate … [truncated]
-           const {
-             r: GG,
-             g: bG,
-             b: ZG
-           } = this.color;
-           this._color4.set(GG, bG, ZG, this.alpha), this.material.setColor4("color", this._color4)
+       dispose() {
+         this.dh = !0;
+         for (const MM of this.moved.keys()) MM.style.transform = "";
+         this.moved.clear();
+         for (const MM of this.sideLabels.keys()) MM.style.transform = "";
+         this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.pE)
+       }
+       clear() {
+         for (const jM of this.moved.keys()) jM.isConnected || this.moved.delete(jM);
+         for (const jM of this.sideLabels.keys()) jM.isConnected || this.sideLabels.delete(jM);
+         if (0 === this.arrows.length) return;
+         const MM = performance.now(),
+           rM = MM - this.refreshedAt > 1e3;
+         rM && (this.refreshedAt = MM, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
+         const iM = this.trackerBox(),
+           OM = this.barsBox(),
+ ... (12 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L318-L321` → after: `L16856-L16873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16856-L16873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16856-L16873) · [Before (L318-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L318-L321)

```diff
-       _draw(GG, bG, ZG) {
-         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
-         const wG = this.Dv().CK();
-         return this._unIndexed ? wG.drawArraysType(YG.e.LineListDrawMode, GG.verticesStart, GG.verticesCount, ZG) : wG.drawElementsType(YG.e.LineListDrawMode, GG.indexStart, GG.indexCount, ZG), this
+       trackerBox() {
+         var MM, rM;
+         const iM = null !== (MM = this.tracker) && void 0 !== MM && MM.isConnected ? this.tracker : null !== (rM = this.trackers[0]) && void 0 !== rM ? rM : null;
+         if (iM !== this.tracker && this.watch(iM), this.boxStale && iM) {
+           var OM, SM, jM;
+           this.boxStale = !1;
+           const MM = iM.closest(".NoRoom") ? null : iM.getBoundingClientRect(),
+             rM = MM && MM.width > 0 ? null === (OM = this.hud) || void 0 === OM ? void 0 : OM.getBoundingClientRect() : void 0,
+             aM = MM && rM ? Math.max(MM.top, rM.top) : null !== (SM = null === MM || void 0 === MM ? void 0 : MM.top) && void 0 !== SM ? SM : 0,
+             PM = MM && rM ? Math.min(MM.bottom, rM.bottom) : null !== (jM = null === MM || void 0 === MM ? void 0 : MM.bottom) && void 0 !== jM ? jM : 0;
+           this.box = MM && MM.width > 0 && PM > aM ? {
+             left: MM.left,
+             top: aM,
+             right: MM.right,
+             bottom: PM
+           } : null
+ ... (2 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L323-L325` → after: `L16875-L16887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16875-L16887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16875-L16887) · [Before (L323-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L323-L325)

```diff
-       dispose(GG) {
-         let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || bG) && this.material?.dispose(!1, !1, !0), super.dispose(GG)
+       barsBox() {
+         if (this.barsStale) {
+           var MM;
+           this.barsStale = !1;
+           const rM = null === (MM = this.statBars[0]) || void 0 === MM ? void 0 : MM.getBoundingClientRect();
+           this.bars = rM && rM.width > 0 && rM.height > 0 ? {
+             left: rM.left,
+             top: rM.top,
+             right: rM.right,
+             bottom: rM.bottom
+           } : null
+         }
+         return this.bars
```

#### 58. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L327-L332` → after: `L16889-L16900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16889-L16900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16889-L16900) · [Before (L327-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L327-L332)

```diff
-       clone(GG) {
-         let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           ZG = arguments.length > 2 ? arguments[2] : void 0;
-         if (bG && void 0 === bG._addToSceneRootNodes) {
-           const ZG = bG;
-           return ZG.source = this, new fG(GG, this.Dv(), ZG.parent, ZG.source, ZG.doNotCloneChildren)
+       toastBox(MM) {
+         var rM;
+         const iM = null !== (rM = this.toasts[0]) && void 0 !== rM ? rM : null;
+         if (iM !== this.toastEl || MM && iM) {
+           this.toastEl = iM;
+           const MM = null === iM || void 0 === iM ? void 0 : iM.getBoundingClientRect();
+           this.toast = MM && MM.width > 0 && MM.height > 0 ? {
+             left: MM.left,
+             top: MM.top,
+             right: MM.right,
+             bottom: MM.bottom
+           } : null
```

#### 59. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L334` → after: `L16902-L16944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16902-L16944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16902-L16944) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L334)

```diff
-         return new fG(GG, this.Dv(), bG, this, ZG)
+         return this.toast
+       }
+       liftAbove(MM, rM, iM) {
+         var OM;
+         const SM = this.anchorOf(MM);
+         if (!SM) return 0;
+         const jM = SM.x + iM + (null !== (OM = this.labelOffsets.get(MM)) && void 0 !== OM ? OM : 0),
+           {
+             halfWidth: aM,
+             labelled: PM
+           } = this.extentOf(MM),
+           nM = SM.y + this.em * (PM ? 6.2 : 3);
+         return nM < rM.top - 6 || jM + aM < rM.left - 6 || jM - aM > rM.right + 6 ? 0 : rM.top - 6 - nM
+       }
+       watch(MM) {
+         var rM, iM;
+ ... (27 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L336-L340` → after: `L16946-L16964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16946-L16964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16946-L16964) · [Before (L336-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L336-L340)

```diff
-       createInstance(GG) {
-         const bG = new QG(GG, this);
-         if (this.hA) {
-           bG.hA = {};
-           for (const GG in this.hA) bG.hA[GG] = this.hA[GG]
+       runLabelAside(MM, rM) {
+         var iM;
+         let OM = null;
+         for (let aM = 0; aM < MM.children.length; aM++) MM.children[aM].classList.contains("DirectionArrowLabel") && (OM = MM.children[aM]);
+         if (!OM) return 0;
+         const SM = MM.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(MM) : null,
+           jM = (SM && this.api ? this.side.sideOf(this.api, {
+             x: SM.x / this.innerWidth * 100,
+             y: SM.y / this.innerHeight * 100
+           }, rM, this.project) : 0) * this.halfWidthOf(OM);
+         return jM !== (null !== (iM = this.sideLabels.get(OM)) && void 0 !== iM ? iM : 0) && (OM.style.transform = 0 === jM ? "" : `translateX(-50%) translateX(${jM}px)`, 0 === jM ? this.sideLabels.delete(OM) : this.sideLabels.set(OM, jM)), jM
+       }
+       extentOf(MM) {
+         let rM = this.em,
+           iM = !1;
+         for (let OM = 0; OM < MM.children.length; OM++) {
+ ... (3 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L342` → after: `L16966-L16973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16966-L16973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16966-L16973) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L342)

```diff
-         return bG
+         return {
+           halfWidth: rM,
+           labelled: iM
+         }
+       }
+       halfWidthOf(MM) {
+         let rM = this.halfWidths.get(MM);
+         return void 0 === rM && (rM = MM.offsetWidth / 2, this.halfWidths.set(MM, rM), this.sizes.observe(MM), this.labels.add(MM)), rM
```

#### 62. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L344-L345` → after: `L16975-L16976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16975-L16976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16975-L16976) · [Before (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L344-L345)

```diff
-       serialize(GG) {
-         super.serialize(GG), GG.color = this.color.mwG(), GG.alpha = this.alpha
+       forgetGoneLabels() {
+         for (const MM of this.labels) MM.isConnected || (this.sizes.unobserve(MM), this.halfWidths.delete(MM), this.labels.delete(MM))
```

#### 63. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L347-L349` → after: `L16978-L16991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16978-L16991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16978-L16991) · [Before (L347-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L347-L349)

```diff
-       static Parse(GG, bG) {
-         const ZG = new fG(GG.name, bG);
-         return ZG.color = LG.c.FromArray(GG.color), ZG.alpha = GG.alpha, ZG
+       anchorOf(MM) {
+         const rM = MM.style.translate,
+           iM = this.anchors.get(MM);
+         if (iM && iM.translate === rM && iM.innerWidth === this.innerWidth && iM.innerHeight === this.innerHeight) return iM;
+         const OM = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(rM);
+         if (!OM) return null;
+         const SM = {
+           translate: rM,
+           x: parseFloat(OM[1]) / 100 * this.innerWidth,
+           y: parseFloat(OM[2]) / 100 * this.innerHeight,
+           innerWidth: this.innerWidth,
+           innerHeight: this.innerHeight
+         };
+         return this.anchors.set(MM, SM), SM
```

#### 64. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L352-L355` → after: `L16994-L17016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R16994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L16994-L17016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L16994-L17016) · [Before (L352-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L352-L355)

```diff
-     fG.ForceGLSL = !1;
-     class QG extends UG.e {
-       constructor(GG, bG) {
-         super(GG, bG), this.intersectionThreshold = bG.intersectionThreshold
+     const Ty = "Baf2ArrowText";
+ 
+     function Vy(MM, rM) {
+       const iM = MM.rows.find((MM => MM.current));
+       return sM(MM.tutorial) && null !== iM && void 0 !== iM && iM.item && vS(iM) && uM(iM.item).includes(rM) ? iM.item : null
+     }
+     const cy = new class {
+       constructor(MM) {
+         this.select = MM, this.picks = new Map
+       }
+       open(MM, rM, iM) {
+         const OM = Vy(rM, MM);
+         null !== OM && this.LH(MM, OM, iM)
+       }
+       follow(MM, rM) {
+         if (PM())
+ ... (7 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L357-L358` → after: `L17018-L17033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R17018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L17018-L17033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L17018-L17033) · [Before (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L357-L358)

```diff
-       getClassName() {
-         return "InstancedLinesMesh"
+       clear() {
+         this.picks.clear()
+       }
+       LH(MM, rM, iM) {
+         this.picks.set(MM, {
+           item: rM,
+           had: iM(rM)
+         }), this.select(MM, rM)
+       }
+     }(DS.q);
+ 
+     function Ml(MM) {
+       return rM => {
+         let iM = 0;
+         for (const OM of MM.getInventoryItems())(null === OM || void 0 === OM ? void 0 : OM.name) === rM && (iM += null === OM.amount ? 1 : Math.max(OM.amount, 0));
+         return iM
```

#### 66. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L361` → after: `L17036-L17064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R17036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L17036-L17064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L17036-L17064) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L361)

```diff
-     let KG = !1;
+ 
+     function rl(MM, rM, iM, OM) {
+       MM.getClientOption(rM, "canCraft") && "inventory" !== ES.d.get("openInGameMenuName") && (cy.open(iM, OM.get(), Ml(MM)), sS.i.Tz("toggleMenu", `inventory|${iM}`))
+     }
+     let il = null,
+       Ol = !1;
+ 
+     function Sl(MM) {
+       const rM = Uj();
+       MM === il && rM === Ol || (il = MM, Ol = rM, (0, DS.t)(function(MM, rM) {
+         const iM = new Map;
+         for (let OM = MM + 1; OM <= SM.length; OM++) {
+           const SM = Aj(OM, MM, rM);
+           if (SM)
+             for (const rM of yM(OM).unlocks) iM.set(rM, {
+               ...SM,
+ ... (13 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L364-L365` → after: `L17067-L17827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R17067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L17067-L17827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/267.js#L17067-L17827) · [Before (L364-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/267.js#L364-L365)

```diff
-       KG || (KG = !0, kG.c._LinesMeshParser = (GG, bG) => fG.Parse(GG, bG))
-     }(wG = fG.prototype).enableEdgesRendering ?? (wG.enableEdgesRendering = (0, pG.h)("LinesMesh", "enableEdgesRendering")), (SG = QG.prototype).enableEdgesRendering ?? (SG.enableEdgesRendering = (0, pG.h)("InstancedLinesMesh", "enableEdgesRendering"))
+       return (0, DS.v)(Nj(Object.keys(gM), kj)), () => {
+         (0, DS.v)([])
+       }
+     }
+ 
+     function Pl(MM, rM, iM) {
+       var OM, SM;
+       const jM = MM.getTargetedBlock();
+       if (!jM || ! function(MM, rM, iM) {
+           if ("Chest" !== rM) return !1;
+           const OM = MM.split("|")[0];
+           if (!Qi(OM) || 0 === Dr[OM].outputSlots.length) return !1;
+           const SM = ed(MM);
+           return iM[0] === SM[0] && iM[1] === SM[1] && iM[2] === SM[2]
+         }(iM, null === (OM = MM.TrM(rM)) || void 0 === OM ? void 0 : OM.name, jM.normal)) return !1;
+       const [aM, PM, nM] = jM.zd, QM = MM.getBlockId(aM, PM, nM);
+ ... (745 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/268.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/268.js` (65 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658)

#### 1. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L4)

```diff
-   40851: (GG, bG, ZG) => {
+   44265: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L6` → after: `L6-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L6-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L6-L227) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L6)

```diff
-       e: () => uG,
+       c: () => jM
+     });
+     var OM = iM(41213),
+       SM = iM(44273);
+     class jM {
+       constructor(MM, rM) {
+         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
+         this.maxDepth = iM, this.uOM = [], this._maxBlockCapacity = rM || 64, this._selectionContent = new OM.d(1024), this._creationFunc = MM
+       }
+       update(MM, rM, iM) {
+         SM.b._CreateBlocks(MM, rM, iM, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
+       }
+       JOM(MM) {
+         for (let rM = 0; rM < this.blocks.length; rM++) {
+           this.blocks[rM].addEntry(MM)
+         }
+ ... (206 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L8-L9` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L229-L230) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L8-L9)

```diff
-       k: () => zG,
-       l: () => EG,
+       i: () => HM,
+       m: () => gM,
```

#### 4. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L11` → after: `L232-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L232-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L232-L235) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L11)

```diff
-       o: () => JG
+       q: () => eM,
+       t: () => wM,
+       x: () => bM,
+       z: () => LM
```

#### 5. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L13-L25` → after: `L237-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L237-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L237-L243) · [Before (L13-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L13-L25)

```diff
-     var wG = ZG(40416),
-       SG = ZG(40475),
-       LG = ZG(37439),
-       yG = ZG(40524),
-       kG = ZG(40857),
-       UG = ZG(40725),
-       YG = ZG(40432),
-       VG = ZG(40720),
-       pG = ZG(37463),
-       fG = ZG(40709),
-       QG = ZG(40705),
-       KG = ZG(40742),
-       hG = ZG(37484);
+     var OM = iM(38044),
+       SM = iM(38040),
+       jM = iM(38048),
+       aM = iM(41408),
+       PM = iM(41242),
+       nM = iM(38064),
+       QM = iM(41302);
```

#### 6. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L27-L28` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L245) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L27-L28)

```diff
-       effect: null,
-       subMesh: null
+       internalPickerForMesh: void 0
```

#### 7. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L30` → after: `L247-L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L247-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L247-L927) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L30)

```diff
-     class JG extends VG.c {
+     class LM {
+       constructor(MM, rM) {
+         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
+           SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : OM.d;
+         this.origin = MM, this.direction = rM, this.length = iM, this.epsilon = SM
+       }
+       clone() {
+         return new LM(this.origin.clone(), this.direction.clone(), this.length)
+       }
+       intersectsBoxMinMax(MM, rM) {
+         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         const OM = LM._TmpVector3[0].iMM(MM.x - iM, MM.y - iM, MM.z - iM),
+           SM = LM._TmpVector3[1].iMM(rM.x + iM, rM.y + iM, rM.z + iM);
+         let jM, aM, PM, nM, QM = 0,
+           zM = Number.MAX_VALUE;
+         if (Math.abs(this.direction.x) < 1e-7) {
+ ... (665 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L32-L58` → after: `L929-L3108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L929-L3108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L929-L3108) · [Before (L32-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L32-L58)

```diff
-         let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-         super(GG, bG, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this. … [truncated]
-           needAlphaBlending: !1,
-           needAlphaTesting: !1,
-           attributes: ["position", "normal", "uv"],
-           uniforms: ["worldViewProjection"],
-           uniformBuffers: [],
-           samplers: [],
-           externalTextures: [],
-           samplerObjects: [],
-           storageBuffers: [],
-           defines: [],
-           useClipPlane: !1,
-           ...wG
-         }
-       }
- ... (11 more removed lines; see GitHub link above)
+         this.gradient = MM, this.factor1 = rM, this.factor2 = iM
+       }
+       getFactor() {
+         return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
+       }
+     }
+     class PM {
+       static GetCurrentGradient(MM, rM, iM) {
+         if (rM[0].gradient > MM) return void iM(rM[0], rM[0], 1);
+         for (let SM = 0; SM < rM.length - 1; SM++) {
+           const OM = rM[SM],
+             jM = rM[SM + 1];
+           if (MM >= OM.gradient && MM <= jM.gradient) {
+             return void iM(OM, jM, (MM - OM.gradient) / (jM.gradient - OM.gradient))
+           }
+         }
+ ... (2164 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L61` → after: `L3111-L3129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3111-L3129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3111-L3129) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L61)

```diff
-         return "ShaderMaterial"
+         return "ParticleSystem"
+       }
+       isStopping() {
+         return this._stopped && this.isAlive()
+       }
+       getCustomEffect() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+         return this._customWrappers[MM]?.effect ?? this._customWrappers[0].effect
+       }
+       _getCustomDrawWrapper() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+         return this._customWrappers[MM] ?? this._customWrappers[0]
+       }
+       setCustomEffect(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         this._customWrappers[rM] = new AM.c(this._engine), this._customWrappers[rM].effect = MM, this._customWrappers[rM].drawContext && (this._customWrappers[rM].drawContext.useInstancing = this._useInstancing)
+ ... (3 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L63-L64` → after: `L3131-L3132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3131-L3132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3131-L3132) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L63-L64)

```diff
-       needAlphaBlending() {
-         return this.alpha < 1 || this._options.needAlphaBlending
+       get vertexShaderName() {
+         return "particles"
```

#### 11. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L66-L67` → after: `L3134-L3135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3134-L3135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3134-L3135) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L66-L67)

```diff
-       needAlphaTesting() {
-         return this._options.needAlphaTesting
+       get vertexBuffers() {
+         return this._vertexBuffers
```

#### 12. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L69-L70` → after: `L3137-L3138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3137-L3138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3137-L3138) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L69-L70)

```diff
-       _checkUniform(GG) {
-         -1 === this._options.uniforms.indexOf(GG) && this._options.uniforms.push(GG)
+       get indexBuffer() {
+         return this._indexBuffer
```

#### 13. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L72-L73` → after: `L3140-L3141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3140-L3141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3140-L3141) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L72-L73)

```diff
-       setTexture(GG, bG) {
-         return -1 === this._options.samplers.indexOf(GG) && this._options.samplers.push(GG), this._textures[GG] = bG, this
+       get noiseTexture() {
+         return this._noiseTexture
```

#### 14. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L75-L76` → after: `L3143-L3247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3143-L3247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3143-L3247) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L75-L76)

```diff
-       setInternalTexture(GG, bG) {
-         return -1 === this._options.samplers.indexOf(GG) && this._options.samplers.push(GG), this._internalTextures[GG] = bG, this
+       set noiseTexture(MM) {
+         if (this.noiseTexture !== MM) {
+           if (this._noiseTexture = MM, !MM) return Rr(this._noiseCreation), void Rr(this._noiseProcessing);
+           this._noiseCreation = {
+             process: mr,
+             previousItem: null,
+             nextItem: null
+           }, ur(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
+             process: Hr,
+             previousItem: null,
+             nextItem: null
+           }, ur(this._noiseProcessing, this._positionProcessing)
+         }
+       }
+       constructor(MM, rM, iM) {
+         let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+ ... (89 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L78-L79` → after: `L3249-L3250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3249-L3250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3249-L3250) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L78-L79)

```diff
-       removeTexture(GG) {
-         delete this._textures[GG]
+       serialize(MM) {
+         throw new Error("Method not implemented.")
```

#### 16. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L81-L82` → after: `L3252-L3253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3252-L3253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3252-L3253) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L81-L82)

```diff
-       setTextureArray(GG, bG) {
-         return -1 === this._options.samplers.indexOf(GG) && this._options.samplers.push(GG), this._checkUniform(GG), this._textureArrays[GG] = bG, this
+       clone(MM, rM) {
+         throw new Error("Method not implemented.")
```

#### 17. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L84-L85` → after: `L3255-L3256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3255-L3256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3255-L3256) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L84-L85)

```diff
-       setExternalTexture(GG, bG) {
-         return -1 === this._options.externalTextures.indexOf(GG) && this._options.externalTextures.push(GG), this._externalTextures[GG] = bG, this
+       _syncLifeTimeCreation() {
+         this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = Gr : this._lifeTimeCreation.process = Cr
```

#### 18. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L87-L88` → after: `L3258-L3263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3258-L3263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3258-L3263) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L87-L88)

```diff
-       setFloat(GG, bG) {
-         return this._checkUniform(GG), this._floats[GG] = bG, this
+       _syncStartSizeCreation() {
+         this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
+           process: yr,
+           previousItem: null,
+           nextItem: null
+         }, ur(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (Rr(this._startSizeCreation), this._startSizeCreation = null)
```

#### 19. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L90-L91` → after: `L3265-L3266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3265-L3266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3265-L3266) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L90-L91)

```diff
-       setInt(GG, bG) {
-         return this._checkUniform(GG), this._ints[GG] = bG, this
+       get targetStopDuration() {
+         return this._targetStopDuration
```

#### 20. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L93-L94` → after: `L3268-L3269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3268-L3269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3268-L3269) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L93-L94)

```diff
-       setUInt(GG, bG) {
-         return this._checkUniform(GG), this._uints[GG] = bG, this
+       set targetStopDuration(MM) {
+         this.targetStopDuration !== MM && (this._targetStopDuration = MM, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
```

#### 21. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L96-L97` → after: `L3271-L3272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3271-L3272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3271-L3272) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L96-L97)

```diff
-       setFloats(GG, bG) {
-         return this._checkUniform(GG), this._floatsArrays[GG] = bG, this
+       addLifeTimeGradient(MM, rM, iM) {
+         return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, MM, rM, iM), this._syncLifeTimeCreation(), this
```

#### 22. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L99-L100` → after: `L3274-L3275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3274-L3275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3274-L3275) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L99-L100)

```diff
-       setColor3(GG, bG) {
-         return this._checkUniform(GG), this._colors3[GG] = bG, this
+       removeLifeTimeGradient(MM) {
+         return this._removeFactorGradient(this._lifeTimeGradients, MM), this._syncLifeTimeCreation(), this
```

#### 23. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L102-L103` → after: `L3277-L3282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3277-L3282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3277-L3282) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L102-L103)

```diff
-       setColor3Array(GG, bG) {
-         return this._checkUniform(GG), this._colors3Arrays[GG] = bG.reduce(((GG, bG) => (GG.push(bG.r, bG.g, bG.b), GG)), []), this
+       addSizeGradient(MM, rM, iM) {
+         return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = dr, this._sizeGradientProcessing = {
+           process: lr,
+           previousItem: null,
+           nextItem: null
+         }, gr(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, MM, rM, iM), this
```

#### 24. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L105-L106` → after: `L3284-L3285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3284-L3285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3284-L3285) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L105-L106)

```diff
-       setColor4(GG, bG) {
-         return this._checkUniform(GG), this._colors4[GG] = bG, this
+       removeSizeGradient(MM) {
+         return this._removeFactorGradient(this._sizeGradients, MM), 0 === this._sizeGradients?.length && (Rr(this._sizeGradientProcessing), this._sizeCreation.process = Jr), this
```

#### 25. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L108-L109` → after: `L3287-L3288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3287-L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3287-L3288) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L108-L109)

```diff
-       setColor4Array(GG, bG) {
-         return this._checkUniform(GG), this._colors4Arrays[GG] = bG.reduce(((GG, bG) => (GG.push(bG.r, bG.g, bG.b, bG.a), GG)), []), this
+       addColorRemapGradient(MM, rM, iM) {
+         return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, MM, rM, iM), this
```

#### 26. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L111-L112` → after: `L3290-L3291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3290-L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3290-L3291) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L111-L112)

```diff
-       setVector2(GG, bG) {
-         return this._checkUniform(GG), this._vectors2[GG] = bG, this
+       removeColorRemapGradient(MM) {
+         return this._removeFactorGradient(this._colorRemapGradients, MM), this
```

#### 27. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L114-L115` → after: `L3293-L3294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3293-L3294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3293-L3294) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L114-L115)

```diff
-       setVector3(GG, bG) {
-         return this._checkUniform(GG), this._vectors3[GG] = bG, this
+       addAlphaRemapGradient(MM, rM, iM) {
+         return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, MM, rM, iM), this
```

#### 28. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L117-L118` → after: `L3296-L3297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3296-L3297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3296-L3297) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L117-L118)

```diff
-       setVector4(GG, bG) {
-         return this._checkUniform(GG), this._vectors4[GG] = bG, this
+       removeAlphaRemapGradient(MM) {
+         return this._removeFactorGradient(this._alphaRemapGradients, MM), this
```

#### 29. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L120-L121` → after: `L3299-L3304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3299-L3304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3299-L3304) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L120-L121)

```diff
-       setQuaternion(GG, bG) {
-         return this._checkUniform(GG), this._quaternions[GG] = bG, this
+       addAngularSpeedGradient(MM, rM, iM) {
+         return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = wr, this._angularSpeedGradientProcessing = {
+           process: TM,
+           previousItem: null,
+           nextItem: null
+         }, gr(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, MM, rM, iM), this
```

#### 30. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L123-L124` → after: `L3306-L3307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3306-L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3306-L3307) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L123-L124)

```diff
-       setQuaternionArray(GG, bG) {
-         return this._checkUniform(GG), this._quaternionsArrays[GG] = bG.reduce(((GG, bG) => (bG.toArray(GG, GG.length), GG)), []), this
+       removeAngularSpeedGradient(MM) {
+         return this._removeFactorGradient(this._angularSpeedGradients, MM), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = br, Rr(this._angularSpeedGradientProcessing)), this
```

#### 31. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L126-L127` → after: `L3309-L3318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3309-L3318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3309-L3318) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L126-L127)

```diff
-       setMatrix(GG, bG) {
-         return this._checkUniform(GG), this._matrices[GG] = bG, this
+       addVelocityGradient(MM, rM, iM) {
+         return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
+           process: rr,
+           previousItem: null,
+           nextItem: null
+         }, ur(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
+           process: Or,
+           previousItem: null,
+           nextItem: null
+         }, gr(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, MM, rM, iM), this
```

#### 32. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L129-L133` → after: `L3320-L3365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3320-L3365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3320-L3365) · [Before (L129-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L129-L133)

```diff
-       setMatrices(GG, bG) {
-         this._checkUniform(GG);
-         const ZG = new Float32Array(16 * bG.length);
-         for (let wG = 0; wG < bG.length; wG++) {
-           bG[wG].copyToArray(ZG, 16 * wG)
+       removeVelocityGradient(MM) {
+         return this._removeFactorGradient(this._velocityGradients, MM), 0 === this._velocityGradients?.length && (Rr(this._velocityCreation), Rr(this._velocityGradientProcessing)), this
+       }
+       addLimitVelocityGradient(MM, rM, iM) {
+         return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
+           process: ir,
+           previousItem: null,
+           nextItem: null
+         }, ur(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
+           process: Sr,
+           previousItem: null,
+           nextItem: null
+         }, ur(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, MM, rM, iM), this
+       }
+       removeLimitVelocityGradient(MM) {
+         return this._removeFactorGradient(this._limitVelocityGradients, MM), 0 === this._limitVelocityGradients?.length && (Rr(this._limitVelocityCreation), Rr(this._limitVelocityGradientProcessing)), this
+ ... (30 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L135` → after: `L3367-L3370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3367-L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3367-L3370) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L135)

```diff
-         return this._matrixArrays[GG] = ZG, this
+         this._rampGradientsTexture = PM.e.CreateRGBATexture(MM, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
+       }
+       getRampGradients() {
+         return this._rampGradients
```

#### 34. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L137-L138` → after: `L3372-L3373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3372-L3373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3372-L3373) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L137-L138)

```diff
-       setMatrix3x3(GG, bG) {
-         return this._checkUniform(GG), this._matrices3x3[GG] = bG, this
+       forceRefreshGradients() {
+         this._syncRampGradientTexture()
```

#### 35. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L140-L141` → after: `L3375-L3376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3375-L3376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3375-L3376) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L140-L141)

```diff
-       setMatrix2x2(GG, bG) {
-         return this._checkUniform(GG), this._matrices2x2[GG] = bG, this
+       _syncRampGradientTexture() {
+         this._rampGradients && (this._rampGradients.sort(((MM, rM) => MM.gradient < rM.gradient ? -1 : MM.gradient > rM.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
```

#### 36. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L143-L144` → after: `L3378-L3381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3378-L3381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3378-L3381) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L143-L144)

```diff
-       setArray2(GG, bG) {
-         return this._checkUniform(GG), this._vectors2Arrays[GG] = bG, this
+       addRampGradient(MM, rM) {
+         this._rampGradients || (this._rampGradients = []);
+         const iM = new OM.c(MM, rM);
+         return this._rampGradients.push(iM), this._syncRampGradientTexture(), this
```

#### 37. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L146-L147` → after: `L3383-L3384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3383-L3384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3383-L3384) · [Before (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L146-L147)

```diff
-       setArray3(GG, bG) {
-         return this._checkUniform(GG), this._vectors3Arrays[GG] = bG, this
+       removeRampGradient(MM) {
+         return this._removeGradientAndTexture(MM, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
```

#### 38. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L149-L150` → after: `L3386-L3389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3386-L3389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3386-L3389) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L149-L150)

```diff
-       setArray4(GG, bG) {
-         return this._checkUniform(GG), this._vectors4Arrays[GG] = bG, this
+       addColorGradient(MM, rM, iM) {
+         this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = IM, this._colorProcessing.process = KM);
+         const SM = new OM.b(MM, rM, iM);
+         return this._colorGradients.push(SM), this._colorGradients.sort(((MM, rM) => MM.gradient < rM.gradient ? -1 : MM.gradient > rM.gradient ? 1 : 0)), this
```

#### 39. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L152-L153` → after: `L3391-L3401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3391-L3401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3391-L3401) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L152-L153)

```diff
-       setUniformBuffer(GG, bG) {
-         return -1 === this._options.uniformBuffers.indexOf(GG) && this._options.uniformBuffers.push(GG), this._uniformBuffers[GG] = bG, this
+       removeColorGradient(MM) {
+         if (!this._colorGradients) return this;
+         let rM = 0;
+         for (const iM of this._colorGradients) {
+           if (iM.gradient === MM) {
+             this._colorGradients.splice(rM, 1);
+             break
+           }
+           rM++
+         }
+         return 0 === this._colorGradients.length && (this._colorCreation.process = BM, this._colorProcessing.process = qM), this
```

#### 40. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L155-L156` → after: `L3403-L3409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3403-L3409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3403-L3409) · [Before (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L155-L156)

```diff
-       setTextureSampler(GG, bG) {
-         return -1 === this._options.samplerObjects.indexOf(GG) && this._options.samplerObjects.push(GG), this._textureSamplers[GG] = bG, this
+       resetDrawCache() {
+         if (this._drawWrappers) {
+           for (const MM of this._drawWrappers)
+             if (MM)
+               for (const rM of MM) rM?.dispose();
+           this._drawWrappers = []
+         }
```

#### 41. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L158-L159` → after: `L3411-L3412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3411-L3412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3411-L3412) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L158-L159)

```diff
-       setStorageBuffer(GG, bG) {
-         return -1 === this._options.storageBuffers.indexOf(GG) && this._options.storageBuffers.push(GG), this._storageBuffers[GG] = bG, this
+       _fetchR(MM, rM, iM, OM, SM) {
+         return SM[4 * (((MM = .5 * Math.abs(MM) + .5) * iM % iM | 0) + ((rM = .5 * Math.abs(rM) + .5) * OM % OM | 0) * iM)] / 255
```

#### 42. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L161-L164` → after: `L3414-L3415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3414-L3415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3414-L3415) · [Before (L161-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L161-L164)

```diff
-       setDefine(GG, bG) {
-         const ZG = GG.trimEnd() + " ",
-           wG = this.options.defines.findIndex((bG => bG === GG || bG.startsWith(ZG)));
-         return wG >= 0 && this.options.defines.splice(wG, 1), ("boolean" !== typeof bG || bG) && this.options.defines.push(ZG + bG), this
+       _reset() {
+         this._resetEffect()
```

#### 43. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L166-L167` → after: `L3417-L3418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3417-L3418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3417-L3418) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L166-L167)

```diff
-       isReadyForSubMesh(GG, bG, ZG) {
-         return this.isReady(GG, ZG, bG)
+       _resetEffect() {
+         this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayO … [truncated]
```

#### 44. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L169-L173` → after: `L3420-L3435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3420-L3435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3420-L3435) · [Before (L169-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L169-L173)

```diff
-       isReady(GG, bG, ZG) {
-         const wG = ZG && this._storeEffectOnSubMeshes;
-         if (this.isFrozen) {
-           const GG = wG ? ZG._drawWrapper : this._drawWrapper;
-           if (GG.effect && GG._wasPreviouslyReady && GG._wasPreviouslyUsingInstances === bG) return !0
+       _createVertexBuffers() {
+         this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertex … [truncated]
+         const MM = this._engine,
+           rM = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
+         this._vertexData = new Float32Array(this._capacity * rM), this._vertexBuffer = new aM.d(MM, this._vertexData, !0, rM);
+         let iM = 0;
+         const OM = this._vertexBuffer.createVertexBuffer(aM.j.PositionKind, iM, 3, this._vertexBufferSize, this._useInstancing);
+         this._vertexBuffers[aM.j.PositionKind] = OM, iM += 3;
+         const SM = this._vertexBuffer.createVertexBuffer(aM.j.ColorKind, iM, 4, this._vertexBufferSize, this._useInstancing);
+         this._vertexBuffers[aM.j.ColorKind] = SM, iM += 4;
+         const jM = this._vertexBuffer.createVertexBuffer("angle", iM, 1, this._vertexBufferSize, this._useInstancing);
+         this._vertexBuffers.angle = jM, iM += 1;
+         const PM = this._vertexBuffer.createVertexBuffer("size", iM, 2, this._vertexBufferSize, this._useInstancing);
+         if (this._vertexBuffers.size = PM, iM += 2, this._isAnimationSheetEnabled) {
+           const MM = this._vertexBuffer.createVertexBuffer("cellIndex", iM, 1, this._vertexBufferSize, this._useInstancing);
+           this._vertexBuffers.cellIndex = MM, iM += 1
```

#### 45. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L175-L177` → after: `L3437-L3454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3437-L3454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3437-L3454) · [Before (L175-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L175-L177)

```diff
-         const LG = this.Dv(),
-           kG = LG.CK(),
-           YG = [],
+         if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
+           const MM = this._vertexBuffer.createVertexBuffer("direction", iM, 3, this._vertexBufferSize, this._useInstancing);
+           this._vertexBuffers.direction = MM, iM += 3
+         }
+         if (this._useRampGradients) {
+           const MM = this._vertexBuffer.createVertexBuffer("remapData", iM, 4, this._vertexBufferSize, this._useInstancing);
+           this._vertexBuffers.remapData = MM, iM += 4
+         }
+         let nM;
+         if (this._useInstancing) {
+           const rM = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
+           this._spriteBuffer = new aM.d(MM, rM, !1, 2), nM = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
+         } else nM = this._vertexBuffer.createVertexBuffer("offset", iM, 2, this._vertexBufferSize, this._useInstancing);
+         this._vertexBuffers.offset = nM, this.resetDrawCache()
+       }
+       _createIndexBuffer() {
+ ... (2 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L196-L243` → after: `L3457-L3458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3457-L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3457-L3458) · [Before (L196-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L196-L243)

```diff
-         const oG = GG ? GG.morphTargetManager : null;
-         if (oG) {
-           const bG = -1 !== YG.indexOf("#define UV1"),
-             ZG = -1 !== YG.indexOf("#define UV2"),
-             wG = -1 !== YG.indexOf("#define TANGENT"),
-             SG = -1 !== YG.indexOf("#define NORMAL"),
-             LG = -1 !== YG.indexOf("#define VERTEXCOLOR");
-           EG = (0, QG.T)(oG, YG, VG, GG, !0, SG, wG, bG, ZG, LG), oG.isUsingTextureForTargets && (-1 === JG.indexOf("morphTargetTextureIndices") && JG.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTar … [truncated]
-         } else YG.push("#define NUM_MORPH_INFLUENCERS 0");
-         if (GG) {
-           const ZG = GG.bakedVertexAnimationManager;
-           ZG && ZG.isEnabled && (YG.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === JG.indexOf("bakedVertexAnimationSettings") && JG.push("bakedVertexAnimationSettings"), -1 === JG.indexOf("bakedVertexAnimationTextureSizeInverted") && JG.push("bakedVertexAnimationTextureSi … [truncated]
-         }
-         for (const SG in this._textures)
-           if (!this._textures[SG].isReady()) return !1;
-         for (const SG in this._internalTextures)
- ... (32 more removed lines; see GitHub link above)
+         for (let OM = 0; OM < this._capacity; OM++) MM.push(iM), MM.push(iM + 1), MM.push(iM + 2), MM.push(iM), MM.push(iM + 2), MM.push(iM + 3), rM.push(iM, iM + 1, iM + 1, iM + 2, iM + 2, iM + 3, iM + 3, iM, iM, iM + 3), iM += 4;
+         this._indexBuffer = this._engine.createIndexBuffer(MM), this._linesIndexBuffer = this._engine.createIndexBuffer(rM)
```

#### 47. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L245-L249` → after: `L3460-L3461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3460-L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3460-L3461) · [Before (L245-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L245-L249)

```diff
-       bindOnlyWorldMatrix(GG, bG) {
-         const ZG = bG ?? this.getEffect();
-         if (!ZG) return;
-         const wG = this._options.uniforms; - 1 !== wG.indexOf("world") && ZG.setMatrix("world", GG);
-         const SG = this.Dv(); - 1 !== wG.indexOf("worldView") && (GG.multiplyToRef(SG.getViewMatrix(), this._cachedWorldViewMatrix), ZG.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== wG.indexOf("worldViewProjection") && (GG.multiplyToRef(SG.getTransformMatrix(), thi … [truncated]
+       getCapacity() {
+         return this._capacity
```

#### 48. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L251-L252` → after: `L3463-L3464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3463-L3464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3463-L3464) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L251-L252)

```diff
-       bindForSubMesh(GG, bG, ZG) {
-         this.bind(GG, bG, ZG._drawWrapperOverride?.effect, ZG)
+       isAlive() {
+         return this._alive
```

#### 49. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L254-L270` → after: `L3466-L3576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3466-L3576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3466-L3576) · [Before (L254-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L254-L270)

```diff
-       bind(GG, bG, ZG, wG) {
-         const SG = wG && this._storeEffectOnSubMeshes,
-           LG = ZG ?? (SG ? wG.effect : this.getEffect());
-         if (!LG) return;
-         const yG = this.Dv();
-         this._activeEffect = LG, this.bindOnlyWorldMatrix(GG, ZG);
-         const kG = this._options.uniformBuffers;
-         let UG = !1;
-         if (LG && kG && kG.length > 0 && yG.CK().supportsUniformBuffers)
-           for (let VG = 0; VG < kG.length; ++VG) {
-             switch (kG[VG]) {
-               case "Mesh":
-                 bG && (bG.getMeshUniformBuffer().bindToEffect(LG, "Mesh"), bG.transferToEffect(GG));
-                 break;
-               case "Scene":
-                 (0, QG.z)(LG, yG.getSceneUniformBuffer()), yG.finalizeSceneUbo(), UG = !0
- ... (1 more removed lines; see GitHub link above)
+       isStarted() {
+         return this._started
+       }
+       _preStart() {}
+       start() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
+         if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
+         if (MM) return this.startDelay = MM, void setTimeout((() => {
+           this.start(0)
+         }), MM);
+         if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFa … [truncated]
+           -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
+           const MM = this.noiseTexture;
+           if (MM && MM.onGeneratedObservable) MM.onGeneratedObservable.addOnce((() => {
+             setTimeout((() => {
+               for (let rM = 0; rM < this.preWarmCycles; rM++) this.animate(!0), MM.render()
+ ... (95 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L272-L331` → after: `L3578-L3596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3578-L3596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3578-L3596) · [Before (L272-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L272-L331)

```diff
-         const YG = bG && SG ? this._mustRebind(yG, LG, wG, bG.visibility) : yG.getCachedMaterial() !== this;
-         if (LG && YG) {
-           let GG;
-           for (GG in UG || -1 === this._options.uniforms.indexOf("view") || LG.setMatrix("view", yG.getViewMatrix()), UG || -1 === this._options.uniforms.indexOf("projection") || LG.setMatrix("projection", yG.getProjectionMatrix()), UG || -1 === this._options.uniforms.indexOf("vi … [truncated]
-           for (GG in this._internalTextures) LG._bindTexture(GG, this._internalTextures[GG]);
-           for (GG in this._textureArrays) LG.setTextureArray(GG, this._textureArrays[GG]);
-           for (GG in this._ints) LG.setInt(GG, this._ints[GG]);
-           for (GG in this._uints) LG.setUInt(GG, this._uints[GG]);
-           for (GG in this._floats) LG.setFloat(GG, this._floats[GG]);
-           for (GG in this._floatsArrays) LG.setArray(GG, this._floatsArrays[GG]);
-           for (GG in this._colors3) LG.setColor3(GG, this._colors3[GG]);
-           for (GG in this._colors3Arrays) LG.setArray3(GG, this._colors3Arrays[GG]);
-           for (GG in this._colors4) {
-             const bG = this._colors4[GG];
-             LG.setFloat4(GG, bG.r, bG.g, bG.b, bG.a)
-           }
- ... (44 more removed lines; see GitHub link above)
+         }))));
+         let QM = nM[MM];
+         QM || (QM = new AM.c(this._engine), QM.drawContext && (QM.drawContext.useInstancing = this._useInstancing), nM[MM] = QM);
+         const zM = OM.join("\n");
+         if (QM.defines !== zM) {
+           const MM = [],
+             rM = [],
+             iM = [];
+           this.fillUniformsAttributesAndSamplerNames(rM, MM, iM), aM && (rM.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== PM?.defines.PREPASS_LOCAL_POSITION_INDEX && rM.push("inverseEmitterWM", "geometryWorldOffset")), QM.s … [truncated]
+             attributes: MM,
+             uniformsNames: rM,
+             samplers: iM,
+             defines: zM,
+             shaderLanguage: this._shaderLanguage,
+             multiTarget: aM,
+             indexParameters: aM ? {
+ ... (3 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L335-L345` → after: `L3600-L3609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3600-L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3600-L3609) · [Before (L335-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L335-L345)

```diff
-       hasTexture(GG) {
-         if (super.hasTexture(GG)) return !0;
-         for (const ZG in this._textures)
-           if (this._textures[ZG] === GG) return !0;
-         const bG = GG.getInternalTexture();
-         for (const ZG in this._internalTextures)
-           if (this._internalTextures[ZG] === bG) return !0;
-         for (const ZG in this._textureArrays) {
-           const bG = this._textureArrays[ZG];
-           for (let ZG = 0; ZG < bG.length; ZG++)
-             if (bG[ZG] === GG) return !0
+       _bindGeometryRendering(MM) {
+         const rM = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
+           iM = pr.c.GetConfiguration(rM);
+         if (!iM?._defines) return;
+         MM.setFloat("objectId", 0), MM.setInt("meshBlendTag", 0);
+         const OM = this._scene?.activeCamera;
+         if (MM.setFloat2("cameraInfo", OM?.minZ ?? 0, OM?.maxZ ?? 1), this.isLocal && void 0 !== iM.defines.PREPASS_LOCAL_POSITION_INDEX) {
+           MM.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
+           const rM = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || jM.q.ZeroReadOnly, jM.l.sh[0]);
+           MM.setVector3("geometryWorldOffset", rM)
```

#### 52. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L349-L388` → after: `L3612-L3656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3612-L3656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3612-L3656) · [Before (L349-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L349-L388)

```diff
-       clone(GG) {
-         const bG = wG.b.Clone((() => new JG(GG, this.Dv(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
-         bG.name = GG, bG.id = GG, "object" === typeof bG._shaderPath && (bG._shaderPath = {
-           ...bG._shaderPath
-         }), this._options = {
-           ...this._options
-         };
-         const ZG = Object.keys(this._options);
-         for (const wG of ZG) {
-           const GG = this._options[wG];
-           Array.isArray(GG) && (this._options[wG] = GG.slice(0))
-         }
-         this.stencil.copyTo(bG.stencil);
-         for (const wG in this._textures) bG.setTexture(wG, this._textures[wG]);
-         for (const wG in this._internalTextures) bG.setInternalTexture(wG, this._internalTextures[wG]);
-         for (const wG in this._textureArrays) bG.setTextureArray(wG, this._textureArrays[wG]);
- ... (24 more removed lines; see GitHub link above)
+       animate() {
+         let MM, rM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (this._started && !this.paused) {
+           if (!rM && this._scene) {
+             if (!this.isReady()) return;
+             if (this._currentRenderId === this._scene.getFrameId()) return;
+             this._currentRenderId = this._scene.getFrameId()
+           }
+           if (this._scaledUpdateSpeed = this.updateSpeed * (rM ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) MM = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
+           else {
+             const rM = this._calculateEmitRate();
+             MM = rM * this._scaledUpdateSpeed | 0, this._newPartsExcess += rM * this._scaledUpdateSpeed - MM
+           }
+           if (this._newPartsExcess > 1 && (MM += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? MM = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopD … [truncated]
+             let MM = 0;
+             for (let rM = 0; rM < this._particles.length; rM++) {
+ ... (29 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L391` → after: `L3659-L3737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3659-L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3659-L3737) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L391)

```diff
-       dispose(GG, bG, ZG) {
+       _appendParticleVertices(MM, rM) {
+         this._appendParticleVertex(MM++, rM, 0, 0), this._useInstancing || (this._appendParticleVertex(MM++, rM, 1, 0), this._appendParticleVertex(MM++, rM, 1, 1), this._appendParticleVertex(MM, rM, 0, 1))
+       }
+       rebuild() {
+         this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
+       }
+       async _initShaderSourceAsync() {
+         this._engine.isWebGPU && !Wr.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([iM.e(655).then((() => iM(63938))), iM.e(649).then((() => iM(63942)))])) : await Promise.all([iM.e(638).then((() => iM(63944))), Promise.all([iM.e(631), iM.e(664)]).then((() => iM(63948) … [truncated]
+       }
+       isReady() {
+         if (!this._shadersLoaded) return !1;
+         if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
+         if (this.blendMode !== CM.BLENDMODE_MULTIPLYADD) {
+           if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
+         } else {
+           if (!this._getWrapper(CM.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
+ ... (63 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L393-L398` → after: `L3739-L3741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3739-L3741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3739-L3741) · [Before (L393-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L393-L398)

```diff
-           let GG;
-           for (GG in this._textures) this._textures[GG].dispose();
-           for (GG in this._internalTextures) this._internalTextures[GG].dispose();
-           for (GG in this._textureArrays) {
-             const bG = this._textureArrays[GG];
-             for (let GG = 0; GG < bG.length; GG++) bG[GG].dispose()
+           if (MM instanceof jM.q) MM = MM.clone();
+           else if (-1 !== MM.getClassName().indexOf("Mesh")) {
+             MM = new((0, Dr.b)("BABYLON.Mesh"))("", MM.Hk()), MM.isVisible = !1
```

#### 55. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L400-L401` → after: `L3743-L3745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3743-L3745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3743-L3745) · [Before (L400-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L400-L401)

```diff
-         }
-         this._textures = {}, this._internalTextures = {}, super.dispose(GG, bG, ZG)
+         } else MM = new jM.q;
+         const rM = new kr(this.particleSystem.clone(this.particleSystem.name, MM));
+         return rM.particleSystem.name += "Clone", rM.type = this.type, rM.inheritDirection = this.inheritDirection, rM.inheritedVelocityAmount = this.inheritedVelocityAmount, rM.particleSystem._disposeEmitterOnDispose = !0, rM.particleSystem.disposeOnStop = !0, rM
```

#### 56. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L404-L447` → after: `L3748-L3761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3748-L3761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3748-L3761) · [Before (L404-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L404-L447)

```diff
-         const GG = wG.b.Serialize(this);
-         let bG;
-         for (bG in GG.customType = "BABYLON.ShaderMaterial", GG.uniqueId = this.uniqueId, GG.options = this._options, GG.shaderPath = this._shaderPath, GG.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, GG.stencil = this.stencil.serialize(), GG.textures = {}, this._texture … [truncated]
-         for (bG in GG.textureArrays = {}, this._textureArrays) {
-           GG.textureArrays[bG] = [];
-           const ZG = this._textureArrays[bG];
-           for (let wG = 0; wG < ZG.length; wG++) GG.textureArrays[bG].push(ZG[wG].serialize())
-         }
-         for (bG in GG.ints = {}, this._ints) GG.ints[bG] = this._ints[bG];
-         for (bG in GG.uints = {}, this._uints) GG.uints[bG] = this._uints[bG];
-         for (bG in GG.floats = {}, this._floats) GG.floats[bG] = this._floats[bG];
-         for (bG in GG.floatsArrays = {}, this._floatsArrays) GG.floatsArrays[bG] = this._floatsArrays[bG];
-         for (bG in GG.colors3 = {}, this._colors3) {
-           const ZG = this._colors3[bG];
-           GG.colors3[bG] = [ZG.r, ZG.g, ZG.b]
-         }
- ... (28 more removed lines; see GitHub link above)
+         let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const rM = {};
+         return rM.type = this.type, rM.inheritDirection = this.inheritDirection, rM.inheritedVelocityAmount = this.inheritedVelocityAmount, rM.particleSystem = this.particleSystem.serialize(MM), rM
+       }
+       static _ParseParticleSystem(MM, rM, iM) {
+         throw (0, ZM.n)("ParseParticle")
+       }
+       static Parse(MM, rM, iM) {
+         const OM = MM.particleSystem,
+           SM = new kr(kr._ParseParticleSystem(OM, rM, iM, !0));
+         return SM.type = MM.type, SM.inheritDirection = MM.inheritDirection, SM.inheritedVelocityAmount = MM.inheritedVelocityAmount, SM.particleSystem._isSubEmitter = !0, SM
+       }
+       dispose() {
+         this.particleSystem.dispose()
```

#### 57. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L450-L471` → after: `L3764-L3769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3764-L3769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3764-L3769) · [Before (L450-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L450-L471)

```diff
- 
-     function rG(GG, bG, ZG) {
-       const SG = wG.b.Parse((() => new JG(GG.name, bG, GG.shaderPath, GG.options, GG.storeEffectOnSubMeshes)), GG, bG, ZG);
-       let yG;
-       for (yG in GG.stencil && SG.stencil.parse(GG.stencil, bG, ZG), GG.textures) SG.setTexture(yG, kG.d.Parse(GG.textures[yG], bG, ZG));
-       for (yG in GG.textureArrays) {
-         const wG = GG.textureArrays[yG],
-           LG = [];
-         for (let GG = 0; GG < wG.length; GG++) LG.push(kG.d.Parse(wG[GG], bG, ZG));
-         SG.setTextureArray(yG, LG)
-       }
-       for (yG in GG.ints) SG.setInt(yG, GG.ints[yG]);
-       for (yG in GG.uints) SG.setUInt(yG, GG.uints[yG]);
-       for (yG in GG.floats) SG.setFloat(yG, GG.floats[yG]);
-       for (yG in GG.floatsArrays) SG.setFloats(yG, GG.floatsArrays[yG]);
-       for (yG in GG.colors3) {
- ... (6 more removed lines; see GitHub link above)
+     var Zr = iM(41005),
+       or = iM(41121);
+     const fr = () => {};
+     class Yr {
+       constructor() {
+         this.particlePositionGenerator = fr, this.particleDestinationGenerator = fr, this.particleDirectionGenerator = fr
```

#### 58. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L473-L488` → after: `L3771-L3779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3771-L3779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3771-L3779) · [Before (L473-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L473-L488)

```diff
-       for (yG in GG.colors3Arrays) {
-         const bG = GG.colors3Arrays[yG].reduce(((GG, bG, ZG) => (ZG % 3 === 0 ? GG.push([bG]) : GG[GG.length - 1].push(bG), GG)), []).map((GG => ({
-           r: GG[0],
-           g: GG[1],
-           b: GG[2]
-         })));
-         SG.setColor3Array(yG, bG)
-       }
-       for (yG in GG.colors4) {
-         const bG = GG.colors4[yG];
-         SG.setColor4(yG, {
-           r: bG[0],
-           g: bG[1],
-           b: bG[2],
-           a: bG[3]
-         })
+       startDirectionFunction(MM, rM, iM, OM) {
+         const SM = jM.l.sh[0];
+         if (this.particleDirectionGenerator && this.particleDirectionGenerator !== fr) this.particleDirectionGenerator(-1, iM, SM);
+         else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== fr) {
+           this.particleDestinationGenerator(-1, iM, SM);
+           const MM = jM.l.sh[1];
+           SM.subtractToRef(iM.position, MM), MM.scaleToRef(1 / iM.lifeTime, SM)
+         } else SM.set(0, 0, 0);
+         OM ? rM.jR(SM) : jM.q.TransformNormalToRef(SM, MM, rM)
```

#### 59. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L490-L504` → after: `L3781-L3783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3781-L3783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3781-L3783) · [Before (L490-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L490-L504)

```diff
-       for (yG in GG.colors4Arrays) {
-         const bG = GG.colors4Arrays[yG].reduce(((GG, bG, ZG) => (ZG % 4 === 0 ? GG.push([bG]) : GG[GG.length - 1].push(bG), GG)), []).map((GG => ({
-           r: GG[0],
-           g: GG[1],
-           b: GG[2],
-           a: GG[3]
-         })));
-         SG.setColor4Array(yG, bG)
-       }
-       for (yG in GG.vectors2) {
-         const bG = GG.vectors2[yG];
-         SG.setVector2(yG, {
-           x: bG[0],
-           y: bG[1]
-         })
+       startPositionFunction(MM, rM, iM, OM) {
+         const SM = jM.l.sh[0];
+         this.particlePositionGenerator && this.particlePositionGenerator !== fr ? this.particlePositionGenerator(-1, iM, SM) : SM.set(0, 0, 0), OM ? rM.jR(SM) : jM.q.TransformCoordinatesToRef(SM, MM, rM)
```

#### 60. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L506-L512` → after: `L3785-L3787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3785-L3787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3785-L3787) · [Before (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L506-L512)

```diff
-       for (yG in GG.vectors3) {
-         const bG = GG.vectors3[yG];
-         SG.setVector3(yG, {
-           x: bG[0],
-           y: bG[1],
-           z: bG[2]
-         })
+       clone() {
+         const MM = new Yr;
+         return mM.b.DeepCopy(this, MM), MM
```

#### 61. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L514-L521` → after: `L3789-L3802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3789-L3802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3789-L3802) · [Before (L514-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L514-L521)

```diff
-       for (yG in GG.vectors4) {
-         const bG = GG.vectors4[yG];
-         SG.setVector4(yG, {
-           x: bG[0],
-           y: bG[1],
-           z: bG[2],
-           w: bG[3]
-         })
+       applyToShader(MM) {}
+       buildUniformLayout(MM) {}
+       getEffectDefines() {
+         return "#define CUSTOMEMITTER"
+       }
+       getClassName() {
+         return "CustomParticleEmitter"
+       }
+       serialize() {
+         const MM = {};
+         return MM.type = this.getClassName(), MM.particlePositionGenerator = this.particlePositionGenerator, MM.particleDestinationGenerator = this.particleDestinationGenerator, MM
+       }
+       parse(MM) {
+         MM.particlePositionGenerator && (this.particlePositionGenerator = MM.particlePositionGenerator), MM.particleDestinationGenerator && (this.particleDestinationGenerator = MM.particleDestinationGenerator)
```

#### 62. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L535-L546` → after: `L3805-L3822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3805-L3822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3805-L3822) · [Before (L535-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L535-L546)

```diff
-     async function zG(GG, bG, ZG) {
-       let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
-       return await new Promise(((SG, LG) => {
-         const yG = new YG.b;
-         yG.addEventListener("readystatechange", (() => {
-           if (4 == yG.readyState)
-             if (200 == yG.status) {
-               const bG = rG(JSON.parse(yG.responseText), ZG || pG.c.LastCreatedScene, wG);
-               GG && (bG.name = GG), SG(bG)
-             } else LG("Unable to load the ShaderMaterial")
-         })), yG.open("GET", bG), yG.send()
-       }))
+     const Nr = jM.q.Zero(),
+       Ar = jM.q.Zero(),
+       xr = jM.q.Zero();
+     class vr {
+       constructor() {
+         this.strength = 0, this.position = jM.q.Zero()
+       }
+       _processParticle(MM, rM) {
+         this.position.subtractToRef(MM.position, Nr);
+         const iM = Nr.lengthSquared() + 1;
+         Nr.normalize().scaleToRef(this.strength / iM, Ar), Ar.scaleToRef(rM._tempScaledUpdateSpeed, xr), MM.direction.addInPlace(xr)
+       }
+       serialize() {
+         return {
+           position: this.position.HOM(),
+           strength: this.strength
+ ... (2 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L548-L561` → after: `L3824-L4228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3824-L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L3824-L4228) · [Before (L548-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L548-L561)

```diff
-     async function EG(GG, bG) {
-       let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-       const wG = this?.SnippetUrl ?? JG.SnippetUrl;
-       return await new Promise(((SG, LG) => {
-         const yG = new YG.b;
-         yG.addEventListener("readystatechange", (() => {
-           if (4 == yG.readyState)
-             if (200 == yG.status) {
-               const wG = JSON.parse(JSON.parse(yG.responseText).jsonPayload),
-                 LG = rG(JSON.parse(wG.shaderMaterial), bG || pG.c.LastCreatedScene, ZG);
-               LG.snippetId = GG, SG(LG)
-             } else LG("Unable to load the snippet " + GG)
-         })), yG.open("GET", wG + "/" + GG.replace(/#/g, "/")), yG.send()
-       }))
+     const Fr = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationC … [truncated]
+     class Br extends Wr {
+       constructor() {
+         super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metad … [truncated]
+           if (!this._subEmitters || 0 === this._subEmitters.length) return;
+           const rM = Math.floor(Math.random() * this._subEmitters.length);
+           for (const iM of this._subEmitters[rM])
+             if (1 === iM.type) {
+               const rM = iM.clone();
+               MM._inheritParticleInfoToSubEmitter(rM), rM.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(rM.particleSystem), rM.particleSystem.start()
+             }
+         }
+       }
+       get source() {
+         return this._source
+       }
+ ... (389 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L563-L564` → after: `L4230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L4230) · [Before (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L563-L564)

```diff
-     JG.SnippetUrl = "https://snippet.babylonjs.com";
-     const oG = EG;
+     Br.BILLBOARDMODE_Y = 2, Br.BILLBOARDMODE_ALL = 7, Br.BILLBOARDMODE_STRETCHED = 8, Br.BILLBOARDMODE_STRETCHED_LOCAL = 9;
```

#### 65. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L567-L568` → after: `L4259-L4267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4259-L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/268.js#L4259-L4267) · [Before (L567-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/268.js#L567-L568)

```diff
-     function uG() {
-       XG || (XG = !0, JG.Parse = rG, JG.ParseFromFileAsync = zG, JG.ParseFromSnippetAsync = EG, JG.CreateFromSnippetAsync = oG, (0, hG.i)("BABYLON.ShaderMaterial", JG))
+     function lM(MM) {
+       switch (MM) {
+         case QM.d.TEXTURETYPE_HALF_FLOAT:
+           return 65504;
+         case QM.d.TEXTURETYPE_FLOAT:
+           return 3e38;
+         default:
+           return 1
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/269.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/269.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b)

#### 1. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L5-L24` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/269.js#L4-L8) · [Before (L5-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/269.js#L5-L24)

```diff
-   40882: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       FirebaseError: () => wG.e,
-       SDK_VERSION: () => wG.f,
-       _DEFAULT_ENTRY_NAME: () => wG.h,
-       KwG: () => wG.l,
-       _addOrOverwriteComponent: () => wG.p,
-       _apps: () => wG.s,
-       _clearComponents: () => wG.u,
-       _components: () => wG.x,
-       _getProvider: () => wG.y,
-       _registerComponent: () => wG.B,
-       _removeServiceInstance: () => wG.C,
-       deleteApp: () => wG.G,
-       getApp: () => wG.M,
-       getApps: () => wG.I,
- ... (4 more removed lines; see GitHub link above)
+   42196: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => aM,
+       c: () => zM,
+       g: () => QM
```

#### 2. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L26-L27` → after: `L10-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L10-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/269.js#L10-L408) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/269.js#L26-L27)

```diff
-     var wG = ZG(40891);
-     (0, wG.U)("firebase", "9.23.0", "app")
+     var OM, SM = iM(38074),
+       jM = iM(38040);
+     ! function(MM) {
+       MM[MM.CW = 0] = "CW", MM[MM.CCW = 1] = "CCW"
+     }(OM || (OM = {}));
+     class aM {
+       static Interpolate(MM, rM, iM, OM, SM) {
+         if (0 === MM) return 0;
+         const jM = 1 - 3 * OM + 3 * rM,
+           aM = 3 * OM - 6 * rM,
+           PM = 3 * rM;
+         let nM = MM;
+         for (let QM = 0; QM < 5; QM++) {
+           const rM = nM * nM;
+           nM -= (jM * (rM * nM) + aM * rM + PM * nM - MM) * (1 / (3 * jM * rM + 2 * aM * nM + PM)), nM = Math.min(1, Math.max(0, nM))
+         }
+ ... (383 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/270.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/270.js` (87 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3)

#### 1. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L5-L120` → after: `L4-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L4-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L4-L57) · [Before (L5-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L5-L120)

```diff
-   40899: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       C: () => VG,
-       D: () => fG,
-       H: () => qG,
-       K: () => KG,
-       M: () => dG,
-       P: () => CG,
-       T: () => rG,
-       U: () => zG,
-       V: () => hG,
-       X: () => JG,
-       _: () => FG,
-       cb: () => IG,
-       e: () => QG,
-       fb: () => EG,
- ... (100 more removed lines; see GitHub link above)
+   39858: (MM, rM, iM) => {
+     var OM = {
+       "./cape_cow_cream.png": 28492,
+       "./cape_cow_normal.png": 28499,
+       "./cape_creator_level1.png": 28508,
+       "./cape_creator_level2.png": 28515,
+       "./cape_creator_level3.png": 28523,
+       "./cape_none.png": 28531,
+       "./cape_pig.png": 28533,
+       "./cape_sheep.png": 28538,
+       "./cape_super.png": 28544,
+       "./cape_super_inverted.png": 28553,
+       "./cape_youtuber.png": 28560
+     };
+ 
+     function SM(MM) {
+ ... (38 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L122-L131` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L59) · [Before (L122-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L122-L131)

```diff
-         init_() {
-           if (!this.byteToCharMap_) {
-             this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
-             for (let GG = 0; GG < this.ENCODED_VALS.length; GG++) this.byteToCharMap_[GG] = this.ENCODED_VALS.charAt(GG), this.charToByteMap_[this.byteToCharMap_[GG]] = GG, this.byteToCharMapWebSafe_[GG] = this.ENCODED_VALS_WEBSAFE.charAt(GG), this.charToByteMapWebSafe_[this.byte … [truncated]
-           }
-         }
-       };
-     class LG extends Error {
-       constructor() {
-         super(...arguments), this.name = "DecodeBase64StringError"
+         half: [rM.width / 2, rM.height / 2, rM.depth / 2]
```

#### 3. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L134-L144` → after: `L62-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L62-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L62-L119) · [Before (L134-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L134-L144)

```diff
-     const yG = function(GG) {
-         return function(GG) {
-           const bG = wG(GG);
-           return SG.encodeByteArray(bG, !0)
-         }(GG).replace(/\./g, "")
-       },
-       kG = function(GG) {
-         try {
-           return SG.decodeString(GG, !0)
-         } catch (bG) {
-           console.error("base64Decode failed: ", bG)
+     iM.d(rM, {
+       b: () => SM
+     })
+   },
+   40186: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => jM,
+       h: () => QM,
+       k: () => nM,
+       m: () => aM
+     });
+     var OM = iM(187);
+     const SM = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2" … [truncated]
+       jM = "PetRoot";
+     let aM = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset … [truncated]
+       PM = SM;
+ ... (42 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L146-L170` → after: `L121-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L121-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L121-L133) · [Before (L146-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L146-L170)

```diff
-         return null
-       };
-     const UG = () => function() {
-         if ("undefined" !== typeof self) return self;
-         if ("undefined" !== typeof window) return window;
-         if ("undefined" !== typeof ZG.g) return ZG.g;
-         throw new Error("Unable to locate global object.")
-       }().__FIREBASE_DEFAULTS__,
-       YG = () => {
-         try {
-           return UG() || (() => {
-             if ("undefined" === typeof process) return
-           })() || (() => {
-             if ("undefined" === typeof document) return;
-             let GG;
-             try {
- ... (9 more removed lines; see GitHub link above)
+         this.lastFeet[0] = iM[0], this.lastFeet[1] = iM[1], this.lastFeet[2] = iM[2], this.stillS = this.speed > .3 ? 0 : this.stillS + PM;
+         const LM = this.stillS >= .6 ? "perched" : "flying";
+         "flying" === LM && "perched" === nM.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += PM, nM.mode = LM;
+         const mM = Math.sin(OM),
+           HM = Math.cos(OM);
+         "perched" === LM ? (jM(zM, iM, aM.perchOffset, mM, HM), zM[1] += MM.headTopY - iM[1]) : (jM(zM, iM, aM.followOffset, mM, HM), zM[1] += SM(aM, MM.timeS));
+         const {
+           pos: hM
+         } = nM, JM = Math.hypot(zM[0] - hM[0], zM[1] - hM[1], zM[2] - hM[2]);
+         if (!this.started || JM > 8 || "perched" === LM && (this.perchLocked || JM < .05)) this.perchLocked = this.started && "perched" === LM, hM[0] = zM[0], hM[1] = zM[1], hM[2] = zM[2], QM[0] = QM[1] = QM[2] = 0;
+         else {
+           const MM = aM.followStiffness;
+           for (let rM = 0; rM < 3; rM++) QM[rM] += (MM * MM * (zM[rM] - hM[rM]) - 2 * MM * QM[rM]) * PM, hM[rM] += QM[rM] * PM
```

#### 5. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L172-L181` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L135) · [Before (L172-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L172-L181)

```diff
-       },
-       VG = GG => {
-         var bG, ZG;
-         return null === (ZG = null === (bG = YG()) || void 0 === bG ? void 0 : bG.emulatorHosts) || void 0 === ZG ? void 0 : ZG[GG]
-       },
-       pG = () => {
-         var GG;
-         return null === (GG = YG()) || void 0 === GG ? void 0 : GG.config
-       },
-       fG = GG => {
+         const dM = OM + aM.yawOffset;
```

#### 6. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L183-L189` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L137) · [Before (L183-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L183-L189)

```diff
-         return null === (bG = YG()) || void 0 === bG ? void 0 : bG[`_${GG}`]
-       };
-     class QG {
-       constructor() {
-         this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((GG, bG) => {
-           this.resolve = GG, this.reject = bG
-         }))
+         return this.started ? nM.yaw += ((yM = dM - nM.yaw) - 2 * Math.PI * Math.round(yM / (2 * Math.PI))) * Math.min(8 * PM, 1) : nM.yaw = dM, this.started = !0, nM.seated = "perched" === LM && this.perchLocked, nM.clip = null === (rM = aM.clips) || void 0 === rM ? void 0 : rM[ … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L191-L194` → after: `L139-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L139-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L139-L143) · [Before (L191-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L191-L194)

```diff
-       wrapCallback(GG) {
-         return (bG, ZG) => {
-           bG ? this.reject(bG) : this.resolve(ZG), "function" === typeof GG && (this.promise.catch((() => {})), 1 === GG.length ? GG(bG) : GG(bG, ZG))
-         }
+       reset() {
+         this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
+       }
+       HS(MM) {
+         return "perched" === MM ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
```

#### 8. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L198-L203` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L147-L148) · [Before (L198-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L198-L203)

```diff
-     function KG() {
-       return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
-     }
- 
-     function hG() {
-       return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(KG())
+     function SM(MM, rM) {
+       return MM.bobAmplitude * Math.sin(2 * Math.PI * MM.bobHz * rM)
```

#### 9. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L206-L208` → after: `L151-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L151-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L151-L153) · [Before (L206-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L206-L208)

```diff
-     function dG() {
-       const GG = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
-       return "object" === typeof GG && void 0 !== GG.id
+     function jM(MM, rM, iM, OM, SM) {
+       const [jM, aM, PM] = iM;
+       MM[0] = rM[0] + jM * SM + PM * OM, MM[1] = rM[1] + aM, MM[2] = rM[2] - jM * OM + PM * SM
```

#### 10. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L211-L212` → after: `L163-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L163-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L163-L168) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L211-L212)

```diff
-     function JG() {
-       return "object" === typeof navigator && "ReactNative" === navigator.product
+     function jM(MM, rM) {
+       var iM;
+       MM.blendMode = rM.blendMode, MM.minLifeTime = rM.minLifeTime, MM.maxLifeTime = rM.maxLifeTime, MM.minSize = rM.minSize, MM.maxSize = rM.maxSize, MM.minEmitPower = rM.minEmitPower, MM.maxEmitPower = rM.maxEmitPower;
+       const jM = null !== (iM = rM.gravity) && void 0 !== iM ? iM : [0, 0, 0];
+       MM.gravity = new OM.sh(jM[0], jM[1], jM[2]);
+       for (const OM of rM.colorGradients) MM.addColorGradient(OM.timeFraction, (0, SM.i)(OM.minColor), OM.maxColor ? (0, SM.i)(OM.maxColor) : void 0)
```

#### 11. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L215-L217` → after: `L199-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L199-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L199-L202) · [Before (L215-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L215-L217)

```diff
-     function rG() {
-       const GG = KG();
-       return GG.indexOf("MSIE ") >= 0 || GG.indexOf("Trident/") >= 0
+     function lM(MM) {
+       var rM;
+       const iM = null !== (rM = zM.currentUrl.getSearchParam(MM)) && void 0 !== rM ? rM : hM.g.getItem(MM);
+       return null === iM || void 0 === iM || "" === iM ? null : "0" !== iM && "false" !== iM && !1 !== iM && 0 !== iM
```

#### 12. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L219-L224` → after: `L204-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L204-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L204-L250) · [Before (L219-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L219-L224)

```diff
- 
-     function zG() {
-       try {
-         return "object" === typeof indexedDB
-       } catch (GG) {
-         return !1
+     async function EM(MM, rM) {
+       (0, jM.D)(null);
+       const iM = (0, aM.n)((0, aM.k)(rM.useWebGpu, !0));
+       (0, mM.setWebGpuRequested)("lite" === iM.requested && (0, mM.getWebGpuSupported)());
+       const PM = (0, aM.f)(iM.source);
+       null !== PM && console.info(`Renderer: ${iM.requested} from ${PM}`), null !== iM.fallbackReason && console.warn(`Renderer: ${iM.fallbackReason}`);
+       let zM = iM.fallbackReason;
+       if ("webgl2" !== iM.choice) {
+         const PM = await async function(MM, rM, iM, aM) {
+           const PM = await (0, mM.probeWebGpuAdapter)();
+           if ("usable" !== PM) return (0, mM.setWebGpuFallbackReason)(PM), console.info("No usable WebGPU adapter, rendering with WebGL."), "no usable WebGPU adapter";
+           if (iM && !0 === hM.g.getItem(dM.N) && !0 !== hM.g.getItem(OM.fc)) return (0, mM.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), dM.e;
+           let zM = "load_failed";
+           try {
+             const {
+               create: iM
+ ... (31 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L229-L245` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L255) · [Before (L229-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L229-L245)

```diff
-       return new Promise(((GG, bG) => {
-         try {
-           let ZG = !0;
-           const wG = "validate-browser-context-for-indexeddb-analytics-module",
-             SG = self.indexedDB.open(wG);
-           SG.onsuccess = () => {
-             SG.result.close(), ZG || self.indexedDB.deleteDatabase(wG), GG(!0)
-           }, SG.onupgradeneeded = () => {
-             ZG = !1
-           }, SG.onerror = () => {
-             var GG;
-             bG((null === (GG = SG.error) || void 0 === GG ? void 0 : GG.message) || "")
-           }
-         } catch (ZG) {
-           bG(ZG)
-         }
- ... (1 more removed lines; see GitHub link above)
+       return Promise.all([iM.e(279), iM.e(280), iM.e(277), iM.e(287), iM.e(281), iM.e(286), iM.e(284), iM.e(276), iM.e(289), iM.e(302), iM.e(288), iM.e(282), iM.e(283), iM.e(268), iM.e(0)]).then((() => iM(44202)))
```

#### 14. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L247-L249` → after: `L257-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L257-L258) · [Before (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L247-L249)

```diff
- 
-     function oG() {
-       return !("undefined" === typeof navigator || !navigator.cookieEnabled)
+     async function GM() {
+       return (await UM()).createSceneParticleSystem
```

#### 15. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L251-L254` → after: `L260-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L260-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L260-L265) · [Before (L251-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L251-L254)

```diff
-     class XG extends Error {
-       constructor(GG, bG, ZG) {
-         super(bG), this.code = GG, this.customData = ZG, this.name = "FirebaseError", Object.setPrototypeOf(this, XG.prototype), Error.captureStackTrace && Error.captureStackTrace(this, uG.prototype.create)
-       }
+     async function CM() {
+       Promise.all([iM.e(279), iM.e(612)]).then((() => iM(44294))).then((MM => {
+         MM.installImageBitmapTextureLoader()
+       })).catch((() => {}));
+       const [MM, rM] = await Promise.all([UM(), Promise.all([iM.e(279), iM.e(280), iM.e(277), iM.e(287), iM.e(281), iM.e(286), iM.e(284), iM.e(276), iM.e(289), iM.e(302), iM.e(288), iM.e(282), iM.e(283), iM.e(268), iM.e(0)]).then((() => iM(44304))), Promise.all([iM.e(279), iM.e(2 … [truncated]
+       return (0, PM.h)(rM.SkyMaterial), MM.default
```

#### 16. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L277-L279` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L269) · [Before (L277-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L277-L279)

```diff
-       for (const bG in GG)
-         if (Object.prototype.hasOwnProperty.call(GG, bG)) return !1;
-       return !0
+       return "lite" === (0, aM.n)((0, aM.k)(MM, !1)).choice && (0, mM.getWebGpuSupported)() && !hM.g.getItem(dM.v)
```

#### 17. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L282-L296` → after: `L272-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L272-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L272-L275) · [Before (L282-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L282-L296)

```diff
-     function WG(GG, bG) {
-       if (GG === bG) return !0;
-       const ZG = Object.keys(GG),
-         wG = Object.keys(bG);
-       for (const SG of ZG) {
-         if (!wG.includes(SG)) return !1;
-         const ZG = GG[SG],
-           LG = bG[SG];
-         if (mG(ZG) && mG(LG)) {
-           if (!WG(ZG, LG)) return !1
-         } else if (ZG !== LG) return !1
-       }
-       for (const SG of wG)
-         if (!ZG.includes(SG)) return !1;
-       return !0
+     function bM(MM) {
+       eM(MM) || CM().catch((MM => {
+         console.warn("Failed to prefetch noa's Babylon backend.", MM)
+       }))
```

#### 18. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L300` → after: `L279-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L279-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L279-L283) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L300)

```diff
-       return null !== GG && "object" === typeof GG
+       (0, JM.f)((() => {
+         eM(MM) ? (0, jM.s)().load().catch((MM => {
+           console.warn("Failed to prefetch the Lite renderer.", MM)
+         })) : bM(MM)
+       }))
```

#### 19. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L304-L308` → after: `L296-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L296-L297) · [Before (L304-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L304-L308)

```diff
-       const bG = [];
-       for (const [ZG, wG] of Object.entries(GG)) Array.isArray(wG) ? wG.forEach((GG => {
-         bG.push(encodeURIComponent(ZG) + "=" + encodeURIComponent(GG))
-       })) : bG.push(encodeURIComponent(ZG) + "=" + encodeURIComponent(wG));
-       return bG.length ? "&" + bG.join("&") : ""
+       var rM;
+       return null !== (rM = MM.parentElement) && void 0 !== rM ? rM : MM
```

#### 20. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L311-L318` → after: `L300-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L300-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L300-L336) · [Before (L311-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L311-L318)

```diff
-     function FG(GG) {
-       const bG = {};
-       return GG.replace(/^\?/, "").split("&").forEach((GG => {
-         if (GG) {
-           const [ZG, wG] = GG.split("=");
-           bG[decodeURIComponent(ZG)] = decodeURIComponent(wG)
-         }
-       })), bG
+     function PM(MM, rM) {
+       if (MM.clientWidth <= 0 || MM.clientHeight <= 0 || SM.c.isHeld()) return null;
+       const iM = (0, jM.o)(),
+         [aM, PM] = rM.size(iM);
+       return (0, jM.t)(aM, PM, iM, OM.d.get("clientEscMenuOptions").pixelScale)
+     }
+   },
+   42285: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       openCharacterPreview: () => Qr
+     });
+     var OM = iM(39083),
+       SM = iM(3063),
+       jM = iM(605),
+       aM = iM(38111),
+       PM = iM(2367),
+ ... (21 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L322-L325` → after: `L340-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L340-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L340-L358) · [Before (L322-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L322-L325)

```diff
-       const bG = GG.indexOf("?");
-       if (!bG) return "";
-       const ZG = GG.indexOf("#", bG);
-       return GG.substring(bG, ZG > 0 ? ZG : void 0)
+       MM.unfreezeWorldMatrix();
+       for (const rM of MM.getChildren()) eM(rM)
+     }
+     async function bM(MM, rM, iM, OM) {
+       let {
+         keepTransforms: SM,
+         backFaceCulling: jM
+       } = OM;
+       const aM = await (0, UM.i)(rM, MM),
+         PM = (0, UM.b)(null !== iM && void 0 !== iM ? iM : rM, MM, void 0, jM);
+       (0, UM.k)(aM, PM, {
+         keepTransforms: SM,
+         backFaceCulling: jM,
+         onProcessedMesh: rM => {
+           MM.JOM(rM, !1), rM.isVisible = !1
+         }
+ ... (3 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L329-L330` → after: `L362-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L362-L363) · [Before (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L329-L330)

```diff
-       const ZG = new cG(GG, bG);
-       return ZG.subscribe.bind(ZG)
+       MM.isVisible = rM;
+       for (const iM of MM.getChildMeshes()) iM.isVisible = rM
```

#### 23. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L333-L353` → after: `L366-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L366-L367) · [Before (L333-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L333-L353)

```diff
-       constructor(GG, bG) {
-         this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = bG, this.task.then((() => {
-           GG(this)
-         })).catch((GG => {
-           this.error(GG)
-         }))
-       }
-       next(GG) {
-         this.forEachObserver((bG => {
-           bG.next(GG)
-         }))
-       }
-       error(GG) {
-         this.forEachObserver((bG => {
-           bG.error(GG)
-         })), this.close(GG)
- ... (5 more removed lines; see GitHub link above)
+       constructor(MM, rM, iM) {
+         this.YJ = MM, this.thinInstMgr = rM, this.Zk = iM, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
```

#### 24. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L355-L369` → after: `L369-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L369-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L369-L371) · [Before (L355-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L355-L369)

```diff
-       subscribe(GG, bG, ZG) {
-         let wG;
-         if (void 0 === GG && void 0 === bG && void 0 === ZG) throw new Error("Missing Observer.");
-         wG = function(GG, bG) {
-           if ("object" !== typeof GG || null === GG) return !1;
-           for (const ZG of bG)
-             if (ZG in GG && "function" === typeof GG[ZG]) return !0;
-           return !1
-         }(GG, ["next", "error", "complete"]) ? GG : {
-           next: GG,
-           error: bG,
-           complete: ZG
-         }, void 0 === wG.next && (wG.next = lG), void 0 === wG.error && (wG.error = lG), void 0 === wG.complete && (wG.complete = lG);
-         const SG = this.unsubscribeOne.bind(this, this.observers.length);
-         return this.finalized && this.task.then((() => {
+       loadModel(MM, rM, iM) {
+         const OM = (0, UM.f)(MM, rM);
+         return OM in this.modelCache || (this.modelCache[OM] = (async () => {
```

#### 25. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L371-L385` → after: `L373-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L373-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L373-L386) · [Before (L371-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L371-L385)

```diff
-             this.finalError ? wG.error(this.finalError) : wG.complete()
-           } catch (GG) {}
-         })), this.observers.push(wG), SG
-       }
-       unsubscribeOne(GG) {
-         void 0 !== this.observers && void 0 !== this.observers[GG] && (delete this.observers[GG], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
-       }
-       forEachObserver(GG) {
-         if (!this.finalized)
-           for (let bG = 0; bG < this.observers.length; bG++) this.sendOne(bG, GG)
-       }
-       sendOne(GG, bG) {
-         this.task.then((() => {
-           if (void 0 !== this.observers && void 0 !== this.observers[GG]) try {
-             bG(this.observers[GG])
+             const OM = await bM(this.YJ, MM, rM, {
+                 keepTransforms: void 0 !== iM,
+                 backFaceCulling: !1
+               }),
+               SM = new Map;
+             for (const MM of OM.getNodes()) SM.set(MM.name, MM);
+             const jM = void 0 === iM ? null : (0, GM.m)(iM, (MM => {
+               const rM = SM.get(MM);
+               return rM ? (0, GM.i)(rM) : null
+             }));
+             return {
+               nodesByName: SM,
+               bones: null === jM ? null : new CM(jM, SM)
+             }
```

#### 26. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L387` → after: `L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L388) · [Before (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L387)

```diff
-             "undefined" !== typeof console && console.error && console.error(ZG)
+             throw delete this.modelCache[OM], console.error(`Failed to load preview attachment ${OM}:`, SM), SM
```

#### 27. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L389` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L390) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L389)

```diff
-         }))
+         })()), this.modelCache[OM]
```

#### 28. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L391-L394` → after: `L392-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L392-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L392-L437) · [Before (L391-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L391-L394)

```diff
-       close(GG) {
-         this.finalized || (this.finalized = !0, void 0 !== GG && (this.finalError = GG), this.task.then((() => {
-           this.observers = void 0, this.onNoObservers = void 0
-         })))
+       async update(MM, rM) {
+         var iM;
+         const {
+           thinInstMgr: OM,
+           Zk: SM
+         } = this;
+         this.cosmeticNames[MM] = rM;
+         const jM = this.attachmentsByType[MM];
+         if (jM)
+           for (const {
+               mesh: PM,
+               destNode: nM,
+               bones: QM
+             }
+             of jM) {
+             null !== QM && (0, lM.mb)(this.shownBones, QM), wM(PM, !1);
+ ... (30 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L397-L408` → after: `L440-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L440-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L440-L471) · [Before (L397-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L397-L408)

```diff
- 
-     function lG() {}
-     const jG = 1e3,
-       PG = 2,
-       MG = 144e5,
-       AG = .5;
- 
-     function sG(GG) {
-       let bG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : PG;
-       const ZG = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jG) * Math.pow(bG, GG),
-         wG = Math.round(AG * ZG * (Math.random() - .5) * 2);
-       return Math.min(MG, ZG + wG)
+     var gM = iM(42212),
+       uM = iM(38233),
+       RM = iM(39774),
+       pM = iM(40186),
+       WM = iM(40222),
+       sM = iM(40219),
+       DM = iM(40192),
+       kM = iM(3563);
+     const ZM = [0, 1, 0];
+     class oM {
+       constructor(MM) {
+         this.node = MM, this.nodesByName = new Map, this.rests = new Map, this.clips = new Map;
+         for (const rM of MM.getChildTransformNodes()) this.nodesByName.set(rM.name, rM), this.rests.set(rM.name, (0, GM.i)(rM))
+       }
+       play(MM, rM) {
+         const iM = this.clip(MM);
+ ... (16 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L412` → after: `L475-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L475-L476) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L412)

```diff
-       return GG && GG._delegate ? GG._delegate : GG
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+       return new mM.sh(MM[0] * rM, MM[1] * rM, MM[2] * rM)
```

#### 31. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L414-L450` → after: `L478-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L478-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L478-L491) · [Before (L414-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L414-L450)

```diff
-   },
-   40891: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => LG.m,
-       f: () => pb,
-       h: () => xG,
-       l: () => Zb,
-       p: () => wb,
-       s: () => Gb,
-       u: () => kb,
-       x: () => bb,
-       y: () => Lb,
-       B: () => Sb,
-       C: () => yb,
-       G: () => hb,
-       M: () => Qb,
- ... (21 more removed lines; see GitHub link above)
+     class YM {
+       constructor(MM, rM) {
+         this.YJ = MM, this.scale = rM, this.petNodes = new Map, this.particleTextures = new Map, this.petName = "pet_none", this.shownPet = null, this.petIsolated = !1, this.auraSeq = 0, this.aura = null, this.auraName = "aura_none", this.auraTuning = null, this.auraDrawn = Promi … [truncated]
+       }
+       async setPet(MM) {
+         var rM;
+         this.petName = MM, null === (rM = this.shownPet) || void 0 === rM || rM.node.kR(!1), this.shownPet = null;
+         const iM = (0, pM.k)(MM);
+         if (!iM) return;
+         let OM;
+         try {
+           OM = await this.petNode(iM.model)
+         } catch {
+           return
```

#### 32. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L452-L468` → after: `L493-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L493-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L493-L579) · [Before (L452-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L452-L468)

```diff
-         return dG(GG[bG])
-       },
-       set: (GG, bG, ZG) => (GG[bG] = ZG, !0),
-       has: (GG, bG) => GG instanceof IDBTransaction && ("done" === bG || "store" === bG) || bG in GG
-     };
- 
-     function KG(GG) {
-       return GG !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (kG || (kG = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(GG) ? function() {
-         for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
-         return GG.apply(JG(this), ZG), dG(UG.get(this))
-       } : function() {
-         for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
-         return dG(GG.apply(JG(this), ZG))
-       } : function(bG) {
-         for (var ZG = arguments.length, wG = new Array(ZG > 1 ? ZG - 1 : 0), SG = 1; SG < ZG; SG++) wG[SG - 1] = arguments[SG];
-         const LG = GG.call(JG(this), bG, ...wG);
- ... (1 more removed lines; see GitHub link above)
+         this.petName === MM && (OM.node.kR(!0), this.shownPet = OM)
+       }
+       setAura(MM) {
+         const rM = (0, pM.h)(MM);
+         return MM === this.auraName && rM === this.auraTuning || (this.auraName = MM, this.auraTuning = rM, this.auraDrawn = this.showAura(MM, rM)), this.auraDrawn
+       }
+       async showAura(MM, rM) {
+         var iM, OM, SM;
+         const jM = ++this.auraSeq;
+         if (null === (iM = this.aura) || void 0 === iM || iM.dispose(!1), this.aura = null, !rM) return;
+         const aM = await (0, RM.h)().catch((rM => (console.error(`Couldn't load the preview's particles for ${MM}:`, rM), null)));
+         if (!aM || jM !== this.auraSeq) return;
+         const {
+           scale: PM
+         } = this, {
+           opts: nM,
+ ... (71 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L471-L489` → after: `L582-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L582-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L582-L592) · [Before (L471-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L471-L489)

```diff
- 
-     function hG(GG) {
-       return "function" === typeof GG ? KG(GG) : (GG instanceof IDBTransaction && function(GG) {
-         if (YG.has(GG)) return;
-         const bG = new Promise(((bG, ZG) => {
-           const wG = () => {
-               GG.removeEventListener("complete", SG), GG.removeEventListener("error", LG), GG.removeEventListener("abort", LG)
-             },
-             SG = () => {
-               bG(), wG()
-             },
-             LG = () => {
-               ZG(GG.error || new DOMException("AbortError", "AbortError")), wG()
-             };
-           GG.addEventListener("complete", SG), GG.addEventListener("error", LG), GG.addEventListener("abort", LG)
-         }));
- ... (3 more removed lines; see GitHub link above)
+     var NM = iM(38122),
+       AM = (iM(42220), iM(41564), iM(42227), iM(35055)),
+       xM = iM(42291);
+     let vM, FM, BM, XM, IM, KM, qM, TM, VM, cM, Mr;
+     const rr = document.createElement("canvas");
+     async function ir() {
+       await new Promise((MM => {
+         setTimeout((() => {
+           MM()
+         }), 100)
+       }))
```

#### 34. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L492-L512` → after: `L597-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L597-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L597-L609) · [Before (L492-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L492-L512)

```diff
-     function dG(GG) {
-       if (GG instanceof IDBRequest) return function(GG) {
-         const bG = new Promise(((bG, ZG) => {
-           const wG = () => {
-               GG.removeEventListener("success", SG), GG.removeEventListener("error", LG)
-             },
-             SG = () => {
-               bG(dG(GG.result)), wG()
-             },
-             LG = () => {
-               ZG(GG.error), wG()
-             };
-           GG.addEventListener("success", SG), GG.addEventListener("error", LG)
-         }));
-         return bG.then((bG => {
-           bG instanceof IDBCursor && UG.set(bG, GG)
- ... (5 more removed lines; see GitHub link above)
+     function Sr(MM, rM) {
+       if (!XM) return;
+       const aM = (0, SM.f)();
+       if (aM.OW(!1), OM.b.Player.meshApi.updatePlayerCosmetic(aM.eD, qM, MM, rM, !0), "cape" === MM)
+         if (rM === jM.g) IM.kR(!1);
+         else {
+           IM.kR(!0);
+           IM.material.diffuseTexture = new dM.c(iM(39858)(`./cape_${rM}.png`), IM.Hk(), {
+             invertY: !1,
+             samplingMode: dM.c.NEAREST_NEAREST_MIPLINEAR
+           })
+         }
+       "pet" === MM ? Or.pet = cM.setPet(rM) : "aura" === MM ? Or.aura = cM.setAura(rM) : Or[MM] = VM.update(MM, rM)
```

#### 35. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L520-L532` → after: `L613-L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L613-L614) · [Before (L520-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L520-L532)

```diff
-       if (!(GG instanceof IDBDatabase) || bG in GG || "string" !== typeof bG) return;
-       if (EG.get(bG)) return EG.get(bG);
-       const ZG = bG.replace(/FromIndex$/, ""),
-         wG = bG !== ZG,
-         SG = zG.includes(ZG);
-       if (!(ZG in (wG ? IDBIndex : IDBObjectStore).prototype) || !SG && !rG.includes(ZG)) return;
-       const LG = async function(GG) {
-         const bG = this.transaction(GG, SG ? "readwrite" : "readonly");
-         let LG = bG.store;
-         for (var yG = arguments.length, kG = new Array(yG > 1 ? yG - 1 : 0), UG = 1; UG < yG; UG++) kG[UG - 1] = arguments[UG];
-         return wG && (LG = LG.index(kG.shift())), (await Promise.all([LG[ZG](...kG), SG && bG.done]))[0]
-       };
-       return EG.set(bG, LG), LG
+       const [iM, OM] = (0, xM.d)(MM, rM, window.devicePixelRatio);
+       vM.setSize(Math.max(iM, Math.floor(MM)), Math.max(OM, Math.floor(rM)))
```

#### 36. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L534-L538` → after: `L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L616) · [Before (L534-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L534-L538)

```diff
-     QG = (GG => ({
-       ...GG,
-       get: (bG, ZG, wG) => oG(bG, ZG) || GG.get(bG, ZG, wG),
-       has: (bG, ZG) => !!oG(bG, ZG) || GG.has(bG, ZG)
-     }))(QG);
+     let ar = 0;
```

#### 37. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L540-L550` → after: `L618-L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L618-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L618-L636) · [Before (L540-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L540-L550)

```diff
-       constructor(GG) {
-         this.container = GG
-       }
-       getPlatformInfoString() {
-         return this.container.getProviders().map((GG => {
-           if (function(GG) {
-               const bG = GG.getComponent();
-               return "VERSION" === (null === bG || void 0 === bG ? void 0 : bG.type)
-             }(GG)) {
-             const bG = GG.getImmediate();
-             return `${bG.library}/${bG.version}`
+       constructor(MM, rM) {
+         this.framing = rM, this.ready = Mr, this.dev = {
+           canvas: () => rr,
+           isolateHead(MM) {
+             const rM = KM.getNodeNames(qM);
+             for (let iM = 0; iM < rM.length; iM++) "HeadMesh" !== rM[iM] && "__root__" !== rM[iM] && "TorsoNode" !== rM[iM] && KM.setNodeEnabled(qM, iM, !1);
+             if (MM) {
+               const MM = KM.getNamedNode(qM, "HeadMesh");
+               KM.setNodeDisableColorWrite(qM, MM, !0, (MM => {
+                 const rM = new JM.StandardMaterial(`${MM.name}_depthOnly`, MM.Hk());
+                 return rM.disableColorWrite = !0, rM
+               }))
+             }
+             KM.setPosition(qM, 0, -12, 0), Sr("pet", "pet_none"), Sr("aura", "aura_none")
+           },
+           isolatePet() {
+ ... (3 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L552-L553` → after: `L638-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L638-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L638-L685) · [Before (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L552-L553)

```diff
-           return null
-         })).filter((GG => GG)).join(" ")
+         }, this.closed = !1, this.resetCamera();
+         const iM = MM.getBoundingClientRect();
+         jr(iM.width, iM.height), ar++, vM.stopRenderLoop(), vM.runRenderLoop((() => {
+           var MM, rM, iM;
+           null === (MM = TM) || void 0 === MM || MM.render(vM.getDeltaTime());
+           const OM = performance.now() / 1e3;
+           null === (rM = VM) || void 0 === rM || rM.writePoses(OM), null === (iM = cM) || void 0 === iM || iM.writePose(OM), BM.render()
+         }))
+       }
+       isReady() {
+         return !!XM
+       }
+       setCosmetic(MM, rM) {
+         Sr(MM, rM)
+       }
+       playEmote(MM) {
+ ... (32 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L615-L620` → after: `L689-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L689-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L689-L696) · [Before (L615-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L615-L620)

```diff
-     function Zb(GG, bG) {
-       try {
-         GG.container.bM(bG)
-       } catch (ZG) {
-         CG.debug(`Component ${bG.name} failed to register with FirebaseApp ${GG.name}`, ZG)
-       }
+     function nr(MM) {
+       let {
+         yaw: rM,
+         pitch: iM,
+         radius: OM,
+         target: SM
+       } = MM;
+       FM.alpha = rM, FM.beta = iM, OM && (FM.radius = OM), SM && FM.target.set(SM[0], SM[1], SM[2])
```

#### 40. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L624` → after: `L700-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L700-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L700-L726) · [Before (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L624)

```diff
-       GG.container.addOrOverwriteComponent(bG)
+       return MM.appendChild(rr), vM || function() {
+         vM = new QM.e(rr, !0, {
+           preserveDrawingBuffer: !0
+         });
+         const MM = (0, SM.f)();
+         vM.LOM = MM.CL.engine.LOM, BM = new zM.b(vM), BM.clearColor = new hM.d(0, 0, 0, 0), BM.ambientColor = new hM.Color3(1, 1, 1), FM = new LM.c("Td", 0, 0, 1, mM.sh.Zero(), BM), FM.attachControl(rr, !0), FM.panningSensibility = 0, Mr = (0, OM.u)("Player", BM, !0).then((rM =>  … [truncated]
+           XM = rM.meshApi, IM = rM.capeMesh, KM = MM.CL.Dk;
+           const iM = 8.33;
+           qM = (0, OM.i)("Player", iM, !0, !0), KM.setPosition(qM, 0, -8.33, 0);
+           const SM = KM.getNamedNode(qM, "BodyMesh");
+           KM.attachTransformNode(IM, qM, SM), KM.set(qM, "aOpacity", 1), KM.mY(qM, "aOpacity", 1), VM = new tM(BM, KM, qM), cM = new YM(BM, iM), TM = new yM.AnimatorState, TM.Cm = MM, TM.thinInstMgr = KM, TM.Zk = qM, TM.kiM = KM.lD(qM, 0), TM.modelLifeformType = "Player", TM.node … [truncated]
+           const jM = IM.aY().boundingBox;
+           IM.position.y = ((24 - jM.maximum.y + jM.minimum.y) / 2 - 1 / 32) / iM, IM.position.z = -1 / iM, IM.rotationQuaternion = null;
+           const aM = Math.PI / 18,
+             PM = jM.maximum.y / iM;
+           IM.rotation.x = aM;
+ ... (11 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L628-L639` → after: `L740-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L740-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L740-L750) · [Before (L628-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L628-L639)

```diff
-       const bG = GG.name;
-       if (bb.has(bG)) return CG.debug(`There were multiple attempts to register component ${bG}.`), !1;
-       bb.set(bG, GG);
-       for (const ZG of Gb.values()) Zb(ZG, GG);
-       return !0
-     }
- 
-     function Lb(GG, bG) {
-       const ZG = GG.container.getProvider("heartbeat").getImmediate({
-         optional: !0
-       });
-       return ZG && ZG.triggerHeartbeat(), GG.container.getProvider(bG)
+       return `\n\t\t\t\t${(0,PM.w)(MM,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       n\ t\ t\ t\ t\ t$ {
+         (0, PM.B)(MM, "float", "s", "sin(ang)")
+       }\
+       n\ t\ t\ t\ t\ t$ {
+         (0, PM.B)(MM, "float", "c", "cos(ang)")
+       }\
+       n\ t\ t\ t\ t\ treturn $ {
+         (0, PM.n)(MM, "mat2", "c", "s", "-s", "c")
+       };\
+       n\ t\ t\ t\ t`)}\n\t\t\t`
```

#### 42. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L643-L644` → after: `L754-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L754-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L754-L757) · [Before (L643-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L643-L644)

```diff
-       let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xG;
-       Lb(GG, bG).clearInstance(ZG)
+       let iM = (0, PM.Db)(MM, "skele" + (rM - 1));
+       for (let SM = rM - 2; SM >= 0; SM--) iM = (0, PM.sb)(MM, `boneIdx == ${SM}`, (0, PM.Db)(MM, `skele${SM}`), iM);
+       const OM = "bone.yz + rotate(bone.x) * pivot - pivot";
+       return `\n\t\t\t\t${(0,PM.B)(MM,"int","boneIdx",(0,PM.wb)(MM,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,PM.B)(MM,"vec3","bone",iM)}\n\t\t\t\t${(0,PM.B)(MM,"vec2","pivot",(0,PM.n)(MM,"vec2","0.0",`${(0,PM.Hb)(MM,"position")}.z`))}\n\t\t\t\t${(0,PM.Y)(MM)?`positi … [truncated]
```

#### 43. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L647-L648` → after: `L760-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L760-L761) · [Before (L647-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L647-L648)

```diff
-     function kb() {
-       bb.clear()
+     function zM(MM) {
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,PM.n)(MM,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
```

#### 44. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L651-L661` → after: `L764-L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L764-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L764-L769) · [Before (L651-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L651-L661)

```diff
-         "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
-         "bad-app-name": "Illegal App name: '{$appName}",
-         "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
-         "app-deleted": "Firebase App named '{$appName}' already deleted",
-         "no-options": "Need to provide options, when not being deployed to hosting via source.",
-         "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
-         "invalid-log-argument": "First argument to `onLog` must be null or a function.",
-         "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
-         "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
-         "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
-         "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
+         x: 0,
+         y: 0,
+         z: 0,
+         cz(MM, rM) {
+           return this.x = MM[rM], this.y = MM[rM + 1], this.z = MM[rM + 2], this
+         }
```

#### 45. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L663-L664` → after: `L771-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L771-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L771-L866) · [Before (L663-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L663-L664)

```diff
-       Yb = new LG.i("app", "Firebase", Ub);
-     class Vb {
+       mM = {
+         name: "Cape",
+         className: "CapeMaterialPlugin",
+         priority: 200,
+         defines: (MM, rM) => ({
+           ...(0, OM.b)("CAPE"),
+           BLOXD_CAPE_BONES: `${MM}`,
+           BLOXD_CAPE_MAX_Y: (0, SM.xb)(rM)
+         }),
+         getUniforms(MM) {
+           return (0, jM.d)(function(MM) {
+             const rM = [];
+             for (let iM = 0; iM < MM; iM++) rM.push({
+               name: `skele${iM}`,
+               type: "highp vec3"
+             });
+ ... (80 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L666` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L868) · [Before (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L666)

```diff
-         this._isDeleted = !1, this._options = Object.assign({}, GG), this._config = Object.assign({}, bG), this._name = bG.name, this._automaticDataCollectionEnabled = bG.automaticDataCollectionEnabled, this._container = ZG, this.container.bM(new wG.f("app", (() => this), "PUBLIC … [truncated]
+         super(MM, rM, iM), (0, zM.k)(MM)
```

#### 47. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L668-L669` → after: `L870-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L870-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L870-L871) · [Before (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L668-L669)

```diff
-       get automaticDataCollectionEnabled() {
-         return this.checkDestroyed(), this._automaticDataCollectionEnabled
+       dispose(MM) {
+         (0, zM.m)(this._material), super.dispose(MM)
```

#### 48. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L671-L698` → after: `L873-L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L873-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L873-L897) · [Before (L671-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L671-L698)

```diff
-       set automaticDataCollectionEnabled(GG) {
-         this.checkDestroyed(), this._automaticDataCollectionEnabled = GG
-       }
-       get name() {
-         return this.checkDestroyed(), this._name
-       }
-       get options() {
-         return this.checkDestroyed(), this._options
-       }
-       get config() {
-         return this.checkDestroyed(), this._config
-       }
-       get container() {
-         return this._container
-       }
-       get isDeleted() {
- ... (12 more removed lines; see GitHub link above)
+     }(0, OM.m)(mM.e, HM), (0, mM.f)({
+       disableUnusedSpecularTerm: OM.e,
+       isLightingDisabled: MM => MM instanceof LM.StandardMaterial && MM.disableLighting
+     });
+     var hM = iM(39720);
+     class JM extends((0, OM.i)(hM.d)) {}(0, OM.m)(hM.d, JM);
+     var dM = iM(39852),
+       yM = iM(38178),
+       lM = iM(39126),
+       EM = iM(38287);
+     class UM extends((0, OM.i)(dM.c)) {}(0, OM.m)(dM.c, UM);
+     class GM extends((0, OM.i)(yM.b)) {}(0, OM.m)(yM.b, GM);
+     class CM extends((0, OM.i)(lM.i)) {}(0, OM.m)(lM.i, CM);
+     class eM extends((0, OM.i)(EM.c)) {}(0, OM.m)(EM.c, eM)
+   },
+   39781: (MM, rM, iM) => {
+ ... (9 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L701-L727` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L900) · [Before (L701-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L701-L727)

```diff
-       let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-         ZG = GG;
-       if ("object" !== typeof bG) {
-         bG = {
-           name: bG
-         }
-       }
-       const SG = Object.assign({
-           name: xG,
-           automaticDataCollectionEnabled: !1
-         }, bG),
-         yG = SG.name;
-       if ("string" !== typeof yG || !yG) throw Yb.create("bad-app-name", {
-         appName: String(yG)
-       });
-       if (ZG || (ZG = (0, LG.y)()), !ZG) throw Yb.create("no-options");
- ... (11 more removed lines; see GitHub link above)
+       aM = MM
```

#### 50. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L730-L737` → after: `L903-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L903-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L903-L905) · [Before (L730-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L730-L737)

```diff
-     function Qb() {
-       let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xG;
-       const bG = Gb.get(GG);
-       if (!bG && GG === xG && (0, LG.y)()) return fb();
-       if (!bG) throw Yb.create("no-app", {
-         appName: GG
-       });
-       return bG
+     function nM(MM) {
+       if (!aM) throw new Error("No SkyMaterial: WebGL2's backend installs it");
+       return new aM("sky", MM)
```

#### 51. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L740-L745` → after: `L908-L916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L908-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L908-L916) · [Before (L740-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L740-L745)

```diff
-     function Kb() {
-       return Array.from(Gb.values())
-     }
-     async function hb(GG) {
-       const bG = GG.name;
-       Gb.has(bG) && (Gb.delete(bG), await Promise.all(GG.container.getProviders().map((GG => GG.delete()))), GG.isDeleted = !0)
+     function QM(MM, rM, iM) {
+       if (!(0, OM.f)(MM)) return void MM.material.forceCompilation(MM, rM);
+       const aM = () => {
+         if (MM.xG()) return void jM.delete(MM);
+         const OM = (0, SM.Y)(MM.material);
+         if (![null === OM || void 0 === OM ? void 0 : OM.diffuseTexture, null === OM || void 0 === OM ? void 0 : OM.opacityTexture, null === OM || void 0 === OM ? void 0 : OM.emissiveTexture, null === OM || void 0 === OM ? void 0 : OM.reflectionTexture].every((MM => !MM || iM.pre … [truncated]
+         jM.delete(MM), rM()
+       };
+       aM()
```

#### 52. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L749-L761` → after: `L927-L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L927-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L927-L929) · [Before (L749-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L749-L761)

```diff
-       var SG;
-       let LG = null !== (SG = BG[GG]) && void 0 !== SG ? SG : GG;
-       ZG && (LG += `-${ZG}`);
-       const yG = LG.match(/\s|\//),
-         kG = bG.match(/\s|\//);
-       if (yG || kG) {
-         const GG = [`Unable to register library "${LG}" with version "${bG}":`];
-         return yG && GG.push(`library name "${LG}" contains illegal characters (whitespace or "/")`), yG && kG && GG.push("and"), kG && GG.push(`version name "${bG}" contains illegal characters (whitespace or "/")`), void CG.warn(GG.join(" "))
-       }
-       Sb(new wG.f(`${LG}-version`, (() => ({
-         library: LG,
-         version: bG
-       })), "VERSION"))
+       let [jM, aM] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [MM, rM], PM = Math.min(Number.isFinite(iM) && iM > 0 ? iM : 1, SM);
+       const nM = Math.max(0, jM, MM) * Math.max(0, aM, rM) * PM * PM;
+       return nM > OM && (PM *= Math.sqrt(OM / nM)), [Math.max(1, Math.floor(Math.max(0, MM) * PM)), Math.max(1, Math.floor(Math.max(0, rM) * PM))]
```

#### 53. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L765-L766` → after: `L954-L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L954-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L954-L958) · [Before (L765-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L765-L766)

```diff
-       if (null !== GG && "function" !== typeof GG) throw Yb.create("invalid-log-argument");
-       (0, SG.i)(GG, bG)
+       return Object.assign((function(MM, iM, OM, SM) {
+         return rM(this.featureState, MM, iM, OM, SM)
+       }), {
+         jL: MM
+       })
```

#### 54. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L770-L811` → after: `L962-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L962-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L962-L985) · [Before (L770-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L770-L811)

```diff
-       (0, SG.h)(GG)
-     }
-     const zb = "firebase-heartbeat-store";
-     let Eb = null;
- 
-     function ob() {
-       return Eb || (Eb = function(GG, bG) {
-         let {
-           blocked: ZG,
-           upgrade: wG,
-           blocking: SG,
-           terminated: LG
-         } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-         const yG = indexedDB.open(GG, bG),
-           kG = dG(yG);
-         return wG && yG.addEventListener("upgradeneeded", (GG => {
- ... (26 more removed lines; see GitHub link above)
+       const rM = class extends HM.d {
+           constructor(rM, iM) {
+             const OM = (0, JM.Y)(rM),
+               SM = OM && (0, JM.v)(OM, MM.name);
+             for (var jM = arguments.length, aM = new Array(jM > 2 ? jM - 2 : 0), PM = 2; PM < jM; PM++) aM[PM - 2] = arguments[PM];
+             super(rM, MM.name, MM.priority, SM ? SM.defines : MM.defines(...aM), !1), this.featureState = void 0, this.featureState = iM, this._pluginManager._addPlugin(this), this._enable(!0), (0, JM.x)(this._material, MM, this.featureState, this._pluginDefineNames)
+           }
+           getClassName() {
+             return MM.className
+           }
+           isCompatible(MM) {
+             return MM === dM.b.GLSL || MM === dM.b.WGSL
+           }
+         },
+         iM = (0, hM.i)(MM);
+       for (const [OM, SM] of Object.entries(hM.d)) {
+ ... (8 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L816-L817` → after: `L995-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L995-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L995-L1024) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L816-L817)

```diff
-     function ub(GG) {
-       return `${GG.name}!${GG.options.appId}`
+     function eM(MM, rM, iM) {
+       return (0, CM.f)(iM, rM.urls, (() => async function(MM, rM, iM) {
+         const {
+           width: OM
+         } = MM[0].getSize(), SM = MM.map(((MM, iM) => {
+           var SM;
+           const jM = Math.round(MM.getSize().height / OM),
+             aM = null === rM || void 0 === rM ? void 0 : rM[iM];
+           return {
+             pixels: aM && aM.byteLength === OM * OM * jM * 4 ? aM : null !== (SM = bM.get(MM.getInternalTexture())) && void 0 !== SM ? SM : MM._readPixelsSync(),
+             layers: jM
+           }
+         })), jM = iM.ph().getCaps().texture2DArrayMaxLayerCount, PM = (0, CM.c)(SM, OM, jM).map((MM => {
+           let {
+             pixels: rM,
+             layers: SM
+ ... (14 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L819-L834` → after: `L1026-L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1026-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1026-L1036) · [Before (L819-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L819-L834)

```diff
-     class ib {
-       constructor(GG) {
-         this.container = GG, this._heartbeatsCache = null;
-         const bG = this.container.getProvider("app").getImmediate();
-         this.Qh = new Wb(bG), this._heartbeatsCachePromise = this.Qh.read().then((GG => (this._heartbeatsCache = GG, GG)))
-       }
-       async triggerHeartbeat() {
-         const GG = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
-           bG = Cb();
-         if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== bG && !this._heartbeatsCache.heartbeats.some((GG => GG.date === bG))) return this._heartbeatsCache.heartbeats.push({
-           date: bG,
-           agent: GG
-         }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((GG => {
-           const bG = new Date(GG.date).valueOf();
-           return Date.now() - bG <= 2592e6
-         })), this.Qh.overwrite(this._heartbeatsCache)
+     const bM = new WeakMap;
+     var wM = iM(38829);
+     class tM extends(lM(nM.g)) {
+       constructor(MM, rM) {
+         super(MM, rM), this.loaded = new Set, this.mirrors = void 0, this.mirrors = rM.textures.map((MM => MM.mirror)), this.mirrors.forEach(((MM, rM) => {
+           MM.onLoadObservable.add((MM => {
+             this.setTextureArrayData(MM, rM).catch((MM => {
+               console.error(`Failed to build the texture arrays, at atlas ${rM}`, MM)
+             }))
+           }))
+         })), (0, wM.j)(rM, MM.shaderLanguage)
```

#### 57. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L836-L838` → after: `L1038-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1038-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1038-L1039) · [Before (L836-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L836-L838)

```diff
-       async getHeartbeatsHeader() {
-         if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null === this._heartbeatsCache || 0 === this._heartbeatsCache.heartbeats.length) return "";
-         const GG = Cb(),
+       async setTextureArrayData(MM, rM) {
+         const iM = this.featureState,
```

#### 58. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L840-L871` → after: `L1041-L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1041-L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1041-L1048) · [Before (L840-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L840-L871)

```diff
-             heartbeatsToSend: bG,
-             unsentEntries: ZG
-           } = function(GG) {
-             let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1024;
-             const ZG = [];
-             let wG = GG.slice();
-             for (const SG of GG) {
-               const GG = ZG.find((GG => GG.agent === SG.agent));
-               if (GG) {
-                 if (GG.dates.push(SG.date), mb(ZG) > bG) {
-                   GG.dates.pop();
-                   break
-                 }
-               } else if (ZG.push({
-                   agent: SG.agent,
-                   dates: [SG.date]
- ... (16 more removed lines; see GitHub link above)
+             width: OM,
+             height: SM
+           } = MM.getSize(),
+           jM = this._material.shaderLanguage;
+         if (!iM.useWebGL2) return void(0, wM.e)(this._material, iM, rM, OM, Math.round(SM / OM), jM);
+         if (this.loaded.add(rM), this.loaded.size < this.mirrors.length) return;
+         const aM = await eM(this.mirrors, iM.sources, this._material.Hk());
+         (0, wM.c)(this._material, iM, aM, OM, jM)
```

#### 59. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L874-L876` → after: `L1051-L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1051-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1051-L1067) · [Before (L874-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L874-L876)

```diff
- 
-     function Cb() {
-       return (new Date).toISOString().substring(0, 10)
+     var gM = iM(42269),
+       uM = iM(41410),
+       RM = iM(38034),
+       pM = iM(42278),
+       WM = iM(41508),
+       sM = iM(41400),
+       DM = iM(42212),
+       kM = iM(38457),
+       ZM = iM(42280);
+     class oM extends gM.b {
+       getData() {
+         return null
+       }
+       _rebuild() {}
+       restore() {
+         super._rebuild()
+ ... (1 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L878-L880` → after: `L1069-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1069-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1069-L1093) · [Before (L878-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L878-L880)

```diff
-     class Wb {
-       constructor(GG) {
-         this.app = GG, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
+     const fM = {
+       Mesh: pM.d,
+       TransformNode: DM.e,
+       Vz: gM.b,
+       VertexBuffer: gM.e,
+       BoundingInfo: uM.d,
+       sh: RM.sh,
+       ArenaBuffer: oM,
+       SubMesh: sM.e,
+       VertexData: WM.d,
+       MirroredGeometry: ZM.d,
+       meshFromArrays: ZM.h,
+       plainMeshFromArrays: ZM.k
+     };
+     (0, kM.g)(fM);
+     var YM = iM(38298);
+ ... (9 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L882-L883` → after: `L1095-L1096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1095-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1095-L1096) · [Before (L882-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L882-L883)

```diff
-       async runIndexedDBEnvironmentCheck() {
-         return !!(0, LG.U)() && (0, LG.fb)().then((() => !0)).catch((() => !1))
+       dispose(MM) {
+         (0, YM.m)(this._material), super.dispose(MM)
```

#### 62. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L885-L906` → after: `L1098-L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1098-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1098-L1131) · [Before (L885-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L885-L906)

```diff
-       async read() {
-         if (await this._canUseIndexedDBPromise) {
-           return await async function(GG) {
-             try {
-               const bG = await ob();
-               return await bG.transaction(zb).objectStore(zb).get(ub(GG))
-             } catch (bG) {
-               if (bG instanceof LG.m) CG.warn(bG.message);
-               else {
-                 const GG = Yb.create("idb-get", {
-                   originalErrorMessage: null === bG || void 0 === bG ? void 0 : bG.message
-                 });
-                 CG.warn(GG.message)
-               }
-             }
-           }(this.app) || {
- ... (6 more removed lines; see GitHub link above)
+     }
+ 
+     function AM(MM, rM) {
+       if (!(rM instanceof OM.StandardMaterial) || rM.specularTexture) return;
+       const {
+         r: iM,
+         g: SM,
+         b: jM
+       } = rM.specularColor;
+       0 === iM && 0 === SM && 0 === jM && (MM.SPECULARTERM = !1)
+     }(0, zM.f)({
+       disableUnusedSpecularTerm: AM
+     });
+     var xM = iM(38235),
+       vM = iM(38467);
+     const FM = new RegExp(`^#define ${QM.b}\\s*$`, "m");
+ ... (18 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L908-L915` → after: `L1133-L1140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1133-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1133-L1140) · [Before (L908-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L908-L915)

```diff
-       async overwrite(GG) {
-         var bG;
-         if (await this._canUseIndexedDBPromise) {
-           const ZG = await this.read();
-           return Xb(this.app, {
-             lastSentHeartbeatDate: null !== (bG = GG.lastSentHeartbeatDate) && void 0 !== bG ? bG : ZG.lastSentHeartbeatDate,
-             heartbeats: GG.heartbeats
-           })
+       prewarmDither(MM) {
+         if (this.dh || MM.xG()) return !1;
+         const rM = new sM.e(0, 0, 0, 0, 0, MM, void 0, !1, !1);
+         this.featureState.prewarmingDither = !0;
+         try {
+           this._material.isReadyForSubMesh(MM, rM)
+         } finally {
+           this.featureState.prewarmingDither = !1
```

#### 64. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L918-L926` → after: `L1144-L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1144-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1144-L1145) · [Before (L918-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L918-L926)

```diff
-       async add(GG) {
-         var bG;
-         if (await this._canUseIndexedDBPromise) {
-           const ZG = await this.read();
-           return Xb(this.app, {
-             lastSentHeartbeatDate: null !== (bG = GG.lastSentHeartbeatDate) && void 0 !== bG ? bG : ZG.lastSentHeartbeatDate,
-             heartbeats: [...ZG.heartbeats, ...GG.heartbeats]
-           })
-         }
+       dispose(MM) {
+         this.dh = !0, super.dispose(MM)
```

#### 65. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L930-L934` → after: `L1150-L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1150-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1150-L1151) · [Before (L930-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L930-L934)

```diff
-     function mb(GG) {
-       return (0, LG.s)(JSON.stringify({
-         version: 2,
-         heartbeats: GG
-       })).length
+     function IM(MM, rM) {
+       XM.set(MM, rM)
```

#### 66. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L936-L937` → after: `L1153-L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1153-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1153-L1235) · [Before (L936-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L936-L937)

```diff
-     var Ib;
-     Ib = "", Sb(new wG.f("platform-logger", (GG => new XG(GG)), "PRIVATE")), Sb(new wG.f("heartbeat", (GG => new ib(GG)), "PRIVATE")), db(uG, iG, Ib), db(uG, iG, "esm2017"), db("fire-js", "")
+     IM(PM.b, EM), IM(nM.g, tM), IM(QM.g, BM), IM(zM.j, NM), (0, LM.e)({
+       create: (MM, rM) => {
+         const iM = new OM.StandardMaterial(MM.name, rM);
+         return (0, xM.s)(MM, iM), iM.detailMap._pluginDefineNames
+       },
+       write: (MM, rM, iM) => {
+         (0, xM.U)(MM.mirror, rM, iM)
+       },
+       addFeature: (MM, rM, iM) => {
+         const OM = XM.get(rM.feature);
+         if (!OM) throw new Error(`${rM.feature.name} has no plugin class (registerPluginClass)`);
+         new OM(MM.mirror, rM.state, ...iM)
+       },
+       texture: (MM, rM, iM) => {
+         let {
+           url: OM,
+ ... (67 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L939` → after: `L1237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1237) · [Before (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L939)

```diff
-   40895: (GG, bG, ZG) => {
+   42280: (MM, rM, iM) => {
```

#### 68. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L941-L942` → after: `L1239-L1241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1239-L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1239-L1241) · [Before (L941-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L941-L942)

```diff
-       c: () => kG,
-       f: () => SG
+       d: () => zM,
+       h: () => LM,
+       k: () => mM
```

#### 69. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L944-L978` → after: `L1243-L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1243-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1243-L1254) · [Before (L944-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L944-L978)

```diff
-     var wG = ZG(40899);
-     class SG {
-       constructor(GG, bG, ZG) {
-         this.name = GG, this.instanceFactory = bG, this.type = ZG, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
-       }
-       setInstantiationMode(GG) {
-         return this.instantiationMode = GG, this
-       }
-       setMultipleInstances(GG) {
-         return this.multipleInstances = GG, this
-       }
-       setServiceProps(GG) {
-         return this.serviceProps = GG, this
-       }
-       setInstanceCreatedCallback(GG) {
-         return this.onInstanceCreated = GG, this
- ... (19 more removed lines; see GitHub link above)
+     var OM = iM(42269),
+       SM = iM(41167),
+       jM = iM(41410),
+       aM = iM(41512),
+       PM = iM(42278),
+       nM = iM(41508),
+       QM = iM(38347);
+     class zM extends aM.e {
+       constructor() {
+         super(...arguments), this.model = null, this.onGeometryUpdated = (MM, rM) => {
+           this.releaseUnlessInstanced(rM)
+         }, this.onLinked = null
```

#### 70. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L980` → after: `L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1256) · [Before (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L980)

```diff
-       getImmediate(GG) {
+       link(MM) {
```

#### 71. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L982-L998` → after: `L1258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1258) · [Before (L982-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L982-L998)

```diff
-         const ZG = this.normalizeInstanceIdentifier(null === GG || void 0 === GG ? void 0 : GG.identifier),
-           wG = null !== (bG = null === GG || void 0 === GG ? void 0 : GG.optional) && void 0 !== bG && bG;
-         if (!this.isInitialized(ZG) && !this.shouldAutoInitialize()) {
-           if (wG) return null;
-           throw Error(`Service ${this.name} is not available`)
-         }
-         try {
-           return this.getOrInitializeService({
-             instanceIdentifier: ZG
-           })
-         } catch (SG) {
-           if (wG) return null;
-           throw SG
-         }
-       }
-       getComponent() {
- ... (1 more removed lines; see GitHub link above)
+         (0, QM.j)(MM), this.model = MM, null === (rM = this.onLinked) || void 0 === rM || rM.call(this, MM)
```

#### 72. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1000-L1008` → after: `L1260-L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1260-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1260-L1278) · [Before (L1000-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L1000-L1008)

```diff
-       setComponent(GG) {
-         if (GG.name !== this.name) throw Error(`Mismatching Component ${GG.name} for Provider ${this.name}.`);
-         if (this.component) throw Error(`Component for ${this.name} has already been provided`);
-         if (this.component = GG, this.shouldAutoInitialize()) {
-           if (function(GG) {
-               return "EAGER" === GG.instantiationMode
-             }(GG)) try {
-             this.getOrInitializeService({
-               instanceIdentifier: LG
+       relink() {
+         this.release();
+         const MM = [];
+         for (const SM of Object.values(this._vertexBuffers))
+           if (!SM.getIsInstanced()) {
+             const {
+               byteOffset: rM,
+               byteStride: iM,
+               type: OM,
+               normalized: jM
+             } = SM;
+             MM.push({
+               kind: SM.getKind(),
+               data: SM.getData(),
+               offset: rM,
+               stride: iM,
+ ... (3 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1010-L1019` → after: `L1280-L1315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1280-L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1280-L1315) · [Before (L1010-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L1010-L1019)

```diff
-           } catch (bG) {}
-           for (const [GG, ZG] of this.instancesDeferred.entries()) {
-             const wG = this.normalizeInstanceIdentifier(GG);
-             try {
-               const GG = this.getOrInitializeService({
-                 instanceIdentifier: wG
-               });
-               ZG.resolve(GG)
-             } catch (bG) {}
-           }
+           } const rM = this._indices.length ? this._indices : null,
+           {
+             minimum: iM,
+             maximum: OM
+           } = this.extend;
+         this.link(new QM.e(MM, rM, this.getTotalVertices(), new Float64Array(iM.HOM()), new Float64Array(OM.HOM())))
+       }
+       copy(MM) {
+         if (!this.model) return super.copy(MM);
+         const rM = new zM(MM, this.Hk()),
+           iM = this.hOM(void 0, !0);
+         iM && rM.setIndices(iM);
+         let aM = !1;
+         for (const jM in this._vertexBuffers) {
+           const MM = this._vertexBuffers[jM],
+             iM = MM.getData();
+ ... (20 more added lines; see GitHub link above)
```

#### 74. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1022-L1053` → after: `L1319-L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1319-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1319-L1326) · [Before (L1022-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L1022-L1053)

```diff
-       clearInstance() {
-         let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : LG;
-         this.instancesDeferred.delete(GG), this.instancesOptions.delete(GG), this.instances.delete(GG)
-       }
-       async delete() {
-         const GG = Array.from(this.instances.values());
-         await Promise.all([...GG.filter((GG => "INTERNAL" in GG)).map((GG => GG.INTERNAL.delete())), ...GG.filter((GG => "_delete" in GG)).map((GG => GG._delete()))])
-       }
-       isComponentSet() {
-         return null != this.component
-       }
-       isInitialized() {
-         let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : LG;
-         return this.instances.has(GG)
-       }
-       getOptions() {
- ... (16 more removed lines; see GitHub link above)
+       static mergeMeshes(MM, rM, iM, OM, SM, jM) {
+         const nM = MM[0].Hk(),
+           QM = new PM.d(MM[0].name + "_merged", nM),
+           LM = new zM(aM.e.RandomId(), nM, void 0, !1, QM);
+         try {
+           if (!PM.d.MergeMeshes(MM, rM, iM, QM, SM, jM)) return QM.dispose(), null
+         } catch (mM) {
+           throw QM.dispose(), mM
```

#### 75. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1055` → after: `L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1328) · [Before (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L1055)

```diff
-         return wG
+         return LM.relink(), QM
```

#### 76. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1057-L1065` → after: `L1330-L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1330-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1330-L1331) · [Before (L1057-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L1057-L1065)

```diff
-       Fq(GG, bG) {
-         var ZG;
-         const wG = this.normalizeInstanceIdentifier(bG),
-           SG = null !== (ZG = this.onInitCallbacks.get(wG)) && void 0 !== ZG ? ZG : new Set;
-         SG.add(GG), this.onInitCallbacks.set(wG, SG);
-         const LG = this.instances.get(wG);
-         return LG && GG(LG, wG), () => {
-           SG.delete(GG)
-         }
+       removeVerticesData(MM) {
+         this.releaseUnlessInstanced(MM), super.removeVerticesData(MM)
```

#### 77. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1067-L1072` → after: `L1333-L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1333-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1333-L1334) · [Before (L1067-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L1067-L1072)

```diff
-       invokeOnInitCallbacks(GG, bG) {
-         const ZG = this.onInitCallbacks.get(bG);
-         if (ZG)
-           for (const SG of ZG) try {
-             SG(GG, bG)
-           } catch (wG) {}
+       dispose() {
+         this.release(), super.dispose()
```

#### 78. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1074-L1084` → after: `L1336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1336) · [Before (L1074-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L1074-L1084)

```diff
-       getOrInitializeService(GG) {
-         let {
-           instanceIdentifier: bG,
-           options: ZG = {}
-         } = GG, wG = this.instances.get(bG);
-         if (!wG && this.component && (wG = this.component.instanceFactory(this.container, {
-             instanceIdentifier: (SG = bG, SG === LG ? void 0 : SG),
-             options: ZG
-           }), this.instances.set(bG, wG), this.instancesOptions.set(bG, ZG), this.invokeOnInitCallbacks(wG, bG), this.component.onInstanceCreated)) try {
-           this.component.onInstanceCreated(this.container, bG, wG)
-         } catch (yG) {}
+       releaseUnlessInstanced(MM) {
```

#### 79. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1086-L1090` → after: `L1338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1338) · [Before (L1086-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L1086-L1090)

```diff
-         return wG || null
-       }
-       normalizeInstanceIdentifier() {
-         let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : LG;
-         return this.component ? this.component.multipleInstances ? GG : LG : GG
+         MM && null !== (rM = this.getVertexBuffer(MM)) && void 0 !== rM && rM.getIsInstanced() || this.release()
```

#### 80. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1092-L1093` → after: `L1340-L1341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1340-L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1340-L1341) · [Before (L1092-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L1092-L1093)

```diff
-       shouldAutoInitialize() {
-         return !!this.component && "EXPLICIT" !== this.component.instantiationMode
+       release() {
+         this.model && ((0, QM.p)(this.model), this.model = null)
```

#### 81. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1096-L1115` → after: `L1344-L1380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1344-L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1344-L1380) · [Before (L1096-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L1096-L1115)

```diff
-     class kG {
-       constructor(GG) {
-         this.name = GG, this.providers = new Map
-       }
-       bM(GG) {
-         const bG = this.getProvider(GG.name);
-         if (bG.isComponentSet()) throw new Error(`Component ${GG.name} has already been registered with ${this.name}`);
-         bG.setComponent(GG)
-       }
-       addOrOverwriteComponent(GG) {
-         this.getProvider(GG.name).isComponentSet() && this.providers.delete(GG.name), this.bM(GG)
-       }
-       getProvider(GG) {
-         if (this.providers.has(GG)) return this.providers.get(GG);
-         const bG = new yG(GG, this);
-         return this.providers.set(GG, bG), bG
- ... (4 more removed lines; see GitHub link above)
+ 
+     function LM(MM, rM, iM) {
+       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new PM.d(MM, iM);
+       const SM = (0, QM.i)(rM),
+         {
+           positions: jM,
+           normals: LM,
+           uvs: mM,
+           indices: HM,
+           named: hM = {}
+         } = rM,
+         JM = new nM.d;
+       JM.positions = jM, JM.normals = null !== LM && void 0 !== LM ? LM : null, JM.uvs = null !== mM && void 0 !== mM ? mM : null, JM.indices = HM;
+       const dM = new zM(aM.e.RandomId(), iM, JM, !1, OM);
+       for (const {
+           kind: aM,
+ ... (21 more added lines; see GitHub link above)
```

#### 82. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1118` → after: `L1383-L1407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1383-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1383-L1407) · [Before (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L1118)

```diff
-   40901: (GG, bG, ZG) => {
+   42265: (MM, rM, iM) => {
+     function OM(MM, rM, iM) {
+       const OM = rM * rM * 4,
+         SM = MM[0].layers,
+         jM = SM * (MM.length - 1) + MM[MM.length - 1].layers,
+         aM = new Uint8Array(jM * OM);
+       MM.forEach(((rM, iM) => {
+         const jM = iM + 1 < MM.length ? Math.min(rM.layers, SM) : rM.layers;
+         aM.set(new Uint8Array(rM.pixels.buffer, rM.pixels.byteOffset, jM * OM), iM * SM * OM)
+       }));
+       const PM = Math.max(1, Math.min(jM, iM || jM));
+       if (PM === jM) return [{
+         pixels: aM,
+         layers: jM
+       }];
+       const nM = [];
+ ... (9 more added lines; see GitHub link above)
```

#### 83. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1120-L1123` → after: `L1409-L1410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1409-L1410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1409-L1410) · [Before (L1120-L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L1120-L1123)

```diff
-       b: () => SG,
-       e: () => YG,
-       h: () => VG,
-       i: () => pG
+       c: () => OM,
+       f: () => jM
```

#### 84. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1125-L1152` → after: `L1412-L1424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1412-L1424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1412-L1424) · [Before (L1125-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L1125-L1152)

```diff
-     const wG = [];
-     var SG;
-     ! function(GG) {
-       GG[GG.DEBUG = 0] = "DEBUG", GG[GG.VERBOSE = 1] = "VERBOSE", GG[GG.INFO = 2] = "INFO", GG[GG.WARN = 3] = "WARN", GG[GG.ERROR = 4] = "ERROR", GG[GG.SILENT = 5] = "SILENT"
-     }(SG || (SG = {}));
-     const LG = {
-         debug: SG.DEBUG,
-         verbose: SG.VERBOSE,
-         info: SG.INFO,
-         warn: SG.WARN,
-         error: SG.ERROR,
-         silent: SG.SILENT
-       },
-       yG = SG.INFO,
-       kG = {
-         [SG.DEBUG]: "log",
- ... (12 more removed lines; see GitHub link above)
+     const SM = new WeakMap;
+ 
+     function jM(MM, rM, iM) {
+       var OM, jM;
+       const aM = null !== (OM = SM.get(MM)) && void 0 !== OM ? OM : new Map;
+       SM.set(MM, aM);
+       const PM = null !== (jM = aM.get(rM[0])) && void 0 !== jM ? jM : [];
+       aM.set(rM[0], PM);
+       const nM = PM.find((MM => MM.urls.length === rM.length && MM.urls.every(((MM, iM) => MM === rM[iM]))));
+       if (nM) return nM.built;
+       const QM = {
+         urls: [...rM],
+         built: iM()
```

#### 85. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1154-L1200` → after: `L1426-L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1426-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1426-L1428) · [Before (L1154-L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L1154-L1200)

```diff
-     class YG {
-       constructor(GG) {
-         this.name = GG, this._logLevel = yG, this._logHandler = UG, this._userLogHandler = null, wG.push(this)
-       }
-       get logLevel() {
-         return this._logLevel
-       }
-       set logLevel(GG) {
-         if (!(GG in SG)) throw new TypeError(`Invalid value "${GG}" assigned to \`logLevel\``);
-         this._logLevel = GG
-       }
-       setLogLevel(GG) {
-         this._logLevel = "string" === typeof GG ? LG[GG] : GG
-       }
-       get logHandler() {
-         return this._logHandler
- ... (31 more removed lines; see GitHub link above)
+       return PM.push(QM), QM.built.catch((() => {
+         PM.splice(PM.indexOf(QM), 1)
+       })), QM.built
```

#### 86. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1202-L1206` → after: `L1430-L1435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1430-L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1430-L1435) · [Before (L1202-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L1202-L1206)

```diff
- 
-     function VG(GG) {
-       wG.forEach((bG => {
-         bG.setLogLevel(GG)
-       }))
+   },
+   39794: (MM, rM, iM) => {
+     function OM(MM, rM) {
+       return "object" === typeof MM && null !== MM ? Object.assign(MM, {
+         startStep: rM
+       }) : MM
```

#### 87. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1209-L1232` → after: `L1438-L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1438-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/270.js#L1438-L1439) · [Before (L1209-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/270.js#L1209-L1232)

```diff
-     function pG(GG, bG) {
-       for (const ZG of wG) {
-         let wG = null;
-         bG && bG.level && (wG = LG[bG.level]), ZG.userLogHandler = null === GG ? null : function(bG, ZG) {
-           for (var LG = arguments.length, yG = new Array(LG > 2 ? LG - 2 : 0), kG = 2; kG < LG; kG++) yG[kG - 2] = arguments[kG];
-           const UG = yG.map((GG => {
-             if (null == GG) return null;
-             if ("string" === typeof GG) return GG;
-             if ("number" === typeof GG || "boolean" === typeof GG) return GG.toString();
-             if (GG instanceof Error) return GG.message;
-             try {
-               return JSON.stringify(GG)
-             } catch (bG) {
-               return null
-             }
-           })).filter((GG => GG)).join(" ");
- ... (8 more removed lines; see GitHub link above)
+     function SM(MM) {
+       return "object" === typeof MM && null !== MM && "startStep" in MM ? MM.startStep : null
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/271.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/271.js` (53 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c)

#### 1. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L5` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L4) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L5)

```diff
-   40909: (GG, bG, ZG) => {
+   42188: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L7-L18` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L6-L8) · [Before (L7-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L7-L18)

```diff
-       getAnalytics: () => Hb,
-       getGoogleAnalyticsClientId: () => Ob,
-       initializeAnalytics: () => tb,
-       isSupported: () => Db,
-       logEvent: () => ZZ,
-       setAnalyticsCollectionEnabled: () => GZ,
-       setConsent: () => wZ,
-       setCurrentScreen: () => Nb,
-       setDefaultEventParameters: () => bZ,
-       setUserId: () => xb,
-       setUserProperties: () => Bb,
-       settings: () => Rb
+       openMobLineupPreview: () => NM,
+       openMobPreview: () => YM,
+       openPetPreview: () => AM
```

#### 3. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L20-L101` → after: `L10-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L10-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L10-L36) · [Before (L20-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L20-L101)

```diff
-     var wG = ZG(40891),
-       SG = ZG(40901),
-       LG = ZG(40899),
-       yG = ZG(40895);
-     let kG, UG;
-     const YG = new WeakMap,
-       VG = new WeakMap,
-       pG = new WeakMap,
-       fG = new WeakMap,
-       QG = new WeakMap;
-     let KG = {
-       get(GG, bG, ZG) {
-         if (GG instanceof IDBTransaction) {
-           if ("done" === bG) return VG.get(GG);
-           if ("objectStoreNames" === bG) return GG.objectStoreNames || pG.get(GG);
-           if ("store" === bG) return ZG.objectStoreNames[1] ? void 0 : ZG.objectStore(ZG.objectStoreNames[0])
- ... (66 more removed lines; see GitHub link above)
+     var OM = iM(40931),
+       SM = iM(41190),
+       jM = iM(42190),
+       aM = iM(38167),
+       PM = iM(38034),
+       nM = iM(41358),
+       QM = iM(42212),
+       zM = iM(39471),
+       LM = iM(38122),
+       mM = iM(38097),
+       HM = iM(38025),
+       hM = iM(39363),
+       JM = iM(39354),
+       dM = iM(39083),
+       yM = iM(39139),
+       lM = iM(39109),
+ ... (11 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L104-L141` → after: `L39-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L39-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L39-L56) · [Before (L104-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L104-L141)

```diff
-     function XG(GG, bG) {
-       if (!(GG instanceof IDBDatabase) || bG in GG || "string" !== typeof bG) return;
-       if (oG.get(bG)) return oG.get(bG);
-       const ZG = bG.replace(/FromIndex$/, ""),
-         wG = bG !== ZG,
-         SG = EG.includes(ZG);
-       if (!(ZG in (wG ? IDBIndex : IDBObjectStore).prototype) || !SG && !zG.includes(ZG)) return;
-       const LG = async function(GG) {
-         const bG = this.transaction(GG, SG ? "readwrite" : "readonly");
-         let LG = bG.store;
-         for (var yG = arguments.length, kG = new Array(yG > 1 ? yG - 1 : 0), UG = 1; UG < yG; UG++) kG[UG - 1] = arguments[UG];
-         return wG && (LG = LG.index(kG.shift())), (await Promise.all([LG[ZG](...kG), SG && bG.done]))[0]
-       };
-       return oG.set(bG, LG), LG
-     }
-     KG = (GG => ({
- ... (22 more removed lines; see GitHub link above)
+     function pM() {
+       if (null !== gM) return gM;
+       const MM = document.createElement("canvas");
+       MM.classList.add("MobPreviewCanvas");
+       const rM = new OM.e(MM, !0, {
+         preserveDrawingBuffer: !0
+       });
+       rM.LOM = (0, UM.f)().CL.engine.LOM;
+       const iM = new SM.b(rM);
+       iM.clearColor = new aM.d(0, 0, 0, 0), iM.ambientColor = new aM.Color3(1, 1, 1);
+       const QM = new jM.c("Td", Math.PI / 2, Math.PI / 2, CM, PM.sh.Zero(), iM),
+         zM = new nM.e("light", new PM.sh(-.1, 1, -.3), iM);
+       return zM.diffuse = new aM.Color3(1, 1, 1), zM.specular = new aM.Color3(1, 1, 1), zM.groundColor = new aM.Color3(.5, .5, .5), gM = {
+         engine: rM,
+         YJ: iM,
+         canvas: MM,
+ ... (2 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L145-L148` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L60-L62) · [Before (L145-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L145-L148)

```diff
-       let {
-         projectId: bG
-       } = GG;
-       return `https://firebaseinstallations.googleapis.com/v1/projects/${bG}/installations`
+       return uM[MM] ??= (0, dM.u)(MM, pM().YJ, !0).catch((rM => {
+         throw delete uM[MM], rM
+       })), uM[MM]
```

#### 6. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L152-L167` → after: `L66-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L66-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L66-L69) · [Before (L152-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L152-L167)

```diff
-       return {
-         token: GG.token,
-         requestStatus: 2,
-         expiresIn: (bG = GG.expiresIn, Number(bG.replace("s", "000"))),
-         creationTime: Date.now()
-       };
-       var bG
-     }
-     async function jG(GG, bG) {
-       const ZG = (await bG.json()).error;
-       return vG.create("request-failed", {
-         requestName: GG,
-         serverCode: ZG.code,
-         serverMessage: ZG.message,
-         serverStatus: ZG.status
-       })
+       let rM = RM.get(MM);
+       return rM || (rM = EM.A[MM].loadModel(pM().YJ, !1).then((MM => (MM.kR(!1), MM)), (rM => {
+         throw RM.delete(MM), rM
+       })), RM.set(MM, rM)), rM
```

#### 7. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L172-L207` → after: `L75-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L75-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L75-L104) · [Before (L172-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L172-L207)

```diff
-         apiKey: bG
-       } = GG;
-       return new Headers({
-         "Content-Type": "application/json",
-         Accept: "application/json",
-         "x-goog-api-key": bG
-       })
-     }
- 
-     function MG(GG, bG) {
-       let {
-         refreshToken: ZG
-       } = bG;
-       const wG = PG(GG);
-       return wG.append("Authorization", function(GG) {
-         return `${mG} ${GG}`
- ... (20 more removed lines; see GitHub link above)
+         mobType: SM,
+         variation: jM,
+         animation: aM
+       } = MM, nM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, CM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const wM = null !== (rM = null === nM || void 0 === nM ? void 0 : nM.size) && void 0 !== rM ? rM : 1,
+         tM = null !== (iM = null === nM || void 0 === nM ? void 0 : nM.cosmetics) && void 0 !== iM ? iM : [],
+         gM = null !== (OM = null === nM || void 0 === nM ? void 0 : nM.QG) && void 0 !== OM ? OM : null;
+       let uM = !1,
+         RM = null,
+         DM = null;
+       const {
+         engine: kM,
+         YJ: ZM
+       } = pM(), oM = ZM.onBeforeRenderObservable.add((() => {
+         var MM;
+         null === (MM = DM) || void 0 === MM || MM.render(kM.getDeltaTime())
+ ... (14 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L209-L213` → after: `L106-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L106-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L106-L121) · [Before (L209-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L209-L213)

```diff
-           return bG.substr(0, 22)
-         }(GG);
-         return qG.test(bG) ? bG : ""
-       } catch (GG) {
-         return ""
+           const jM = EM.A[MM],
+             aM = (0, hM.i)();
+           (0, hM.f)(jM, null === (SM = (0, yM.b)(iM).meshMetadata.heldItemPositionParams) || void 0 === SM ? void 0 : SM.itemOffset, aM);
+           const nM = GM.e * aM.UL.y,
+             zM = aM.usesQuaternion ? aM.quaternion : PM.Quaternion.FromEulerVector(aM.rotation),
+             LM = new QM.e(`${rM.name}Hand`, pM().YJ);
+           LM.position.jR((0, JM.c)(aM.position, zM, nM, jM.heldModelOffsetY())), LM.rotationQuaternion = zM, LM.UL.set(aM.UL.x, nM, aM.UL.z), rM.clone(`${rM.name}Held`, LM).kR(!0);
+           const mM = (0, UM.f)().CL.Dk;
+           mM.attachTransformNode(LM, OM, mM.getNamedNode(OM, "ArmRightMesh"))
+         }(gM, WM, SM, RM), sM.set(RM, "aOpacity", 1);
+         const oM = null !== (rM = (0, yM.b)(SM).meshMetadata.lifeformTypeForModelOverride) && void 0 !== rM ? rM : SM;
+         DM = new HM.AnimatorState, DM.thinInstMgr = sM, DM.Zk = RM, DM.kiM = sM.lD(RM, 0), DM.modelLifeformType = oM, DM.nodeNameAliases = null !== (iM = null === (OM = (0, LM.e)(oM)) || void 0 === OM ? void 0 : OM.nodeNameAliases) && void 0 !== iM ? iM : null, DM.startAnimation( … [truncated]
+       })).catch((MM => {
+         console.error(`Mob preview: could not load ${SM}`, MM)
+       })), () => {
+         uM = !0, ZM.onBeforeRenderObservable.remove(oM), null !== RM && (0, UM.f)().CL.Dk.delete(RM)
```

#### 9. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L223-L232` → after: `L126-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L126-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L126-L130) · [Before (L223-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L223-L232)

```diff
-       const ZG = gG(GG);
-       TG(ZG, bG),
-         function(GG, bG) {
-           const ZG = tG();
-           ZG && ZG.postMessage({
-             key: GG,
-             fid: bG
-           });
-           DG()
-         }(ZG, bG)
+       return DM({
+         mobType: "NPC",
+         variation: null,
+         animation: MM.animation
+       }, MM, rM)
```

#### 10. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L235-L293` → after: `L133-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L133-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L133-L160) · [Before (L235-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L235-L293)

```diff
-     function TG(GG, bG) {
-       const ZG = eG.get(GG);
-       if (ZG)
-         for (const wG of ZG) wG(bG)
-     }
-     let HG = null;
- 
-     function tG() {
-       return !HG && "BroadcastChannel" in self && (HG = new BroadcastChannel("[Firebase] FID Change"), HG.onmessage = GG => {
-         TG(GG.data.key, GG.data.fid)
-       }), HG
-     }
- 
-     function DG() {
-       0 === eG.size && HG && (HG.close(), HG = null)
-     }
- ... (43 more removed lines; see GitHub link above)
+     function ZM(MM) {
+       let {
+         mobType: rM,
+         variation: iM,
+         metaInfo: OM,
+         tamed: SM
+       } = MM, jM = !1, aM = null, PM = 0;
+       const nM = (0, UM.f)(),
+         QM = nM.CL.Dk,
+         zM = MM => {
+           PM += tM * (MM / 1e3) % (2 * Math.PI), QM.setRotationEulerY(aM, PM)
+         };
+       return WM(rM).then((MM => {
+         if (jM) return;
+         aM = (0, dM.i)(rM, wM, !0, !0), QM.setPosition(aM, 0, -wM, 0), MM.meshApi.updateVariation(aM, rM, iM);
+         const PM = {
+ ... (12 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L295-L385` → after: `L162-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L162-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L162-L187) · [Before (L295-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L295-L385)

```diff
-     async function Zb(GG) {
-       let bG;
-       const ZG = await bb(GG.appConfig, (ZG => {
-         const wG = function(GG) {
-             const bG = GG || {
-               fid: nG(),
-               registrationStatus: 0
-             };
-             return Lb(bG)
-           }(ZG),
-           SG = function(GG, bG) {
-             if (0 === bG.registrationStatus) {
-               if (!navigator.onLine) {
-                 return {
-                   installationEntry: bG,
-                   registrationPromise: Promise.reject(vG.create("app-offline"))
- ... (75 more removed lines; see GitHub link above)
+     class oM {
+       constructor(MM, rM) {
+         this.place = rM, this.remove = null;
+         const {
+           engine: iM,
+           YJ: OM,
+           canvas: SM
+         } = pM();
+         MM.appendChild(SM), iM.resize(), iM.runRenderLoop((() => {
+           OM.render()
+         }))
+       }
+       show(MM) {
+         var rM;
+         null === (rM = this.remove) || void 0 === rM || rM.call(this), this.remove = this.place(MM)
+       }
+ ... (10 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L388-L391` → after: `L190-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L190-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L190-L216) · [Before (L388-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L388-L391)

```diff
-     async function wb(GG) {
-       let bG = await Sb(GG.appConfig);
-       for (; 1 === bG.registrationStatus;) await sG(100), bG = await Sb(GG.appConfig);
-       if (0 === bG.registrationStatus) {
+     class fM {
+       constructor(MM) {
+         this.preview = void 0, this.view = {
+           figures: [],
+           shown: []
+         }, this.aspect = 1, this.placed = [], this.preview = new oM(MM, (() => () => {}))
+       }
+       show(MM) {
+         MM.figures !== this.view.figures && this.preload(MM.figures), this.view = MM, this.place()
+       }
+       resize(MM, rM) {
+         this.preview.resize(MM, rM), this.aspect = MM / rM, this.place()
+       }
+       close() {
+         this.preview.close();
+         for (const MM of this.placed) null === MM || void 0 === MM || MM.remove();
+ ... (11 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L393-L396` → after: `L218-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L218-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L218-L233) · [Before (L393-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L393-L396)

```diff
-           installationEntry: bG,
-           registrationPromise: ZG
-         } = await Zb(GG);
-         return ZG || bG
+           figures: MM,
+           shown: rM
+         } = this.view, iM = MM.map(((iM, OM) => {
+           var SM;
+           const jM = null !== (SM = this.placed[OM]) && void 0 !== SM ? SM : null;
+           if (!rM[OM]) return null === jM || void 0 === jM || jM.remove(), null;
+           const aM = (PM = (OM + .5) / MM.length, nM = this.aspect, (.5 - PM) * (2 * CM * Math.tan(pM().camera.fov / 2)) * nM);
+           var PM, nM;
+           return null !== jM && jM.figure === iM && jM.x === aM ? jM : (null === jM || void 0 === jM || jM.remove(), {
+             figure: iM,
+             x: aM,
+             remove: kM(iM, aM)
+           })
+         }));
+         for (const OM of this.placed.slice(MM.length)) null === OM || void 0 === OM || OM.remove();
+         this.placed = iM
```

#### 14. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L402-L405` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L238) · [Before (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L402-L405)

```diff
-       return bb(GG, (GG => {
-         if (!GG) throw vG.create("installation-not-found");
-         return Lb(GG)
-       }))
+       return new oM(MM, DM)
```

#### 15. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L409-L500` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L242) · [Before (L409-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L409-L500)

```diff
-       return 1 === (bG = GG).registrationStatus && bG.registrationTime + CG < Date.now() ? {
-         fid: GG.fid,
-         registrationStatus: 0
-       } : GG;
-       var bG
-     }
-     async function yb(GG, bG) {
-       let {
-         appConfig: ZG,
-         heartbeatServiceProvider: wG
-       } = GG;
-       const SG = function(GG, bG) {
-           let {
-             fid: ZG
-           } = bG;
-           return `${cG(GG)}/${ZG}/authTokens:generate`
- ... (76 more removed lines; see GitHub link above)
+       return new fM(MM)
```

#### 16. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L504-L513` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L246) · [Before (L504-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L504-L513)

```diff
-       return bb(GG, (GG => {
-         if (!Yb(GG)) throw vG.create("not-registered");
-         const bG = GG.authToken;
-         return 1 === (ZG = bG).requestStatus && ZG.requestTime + CG < Date.now() ? Object.assign(Object.assign({}, GG), {
-           authToken: {
-             requestStatus: 0
-           }
-         }) : GG;
-         var ZG
-       }))
+       return new oM(MM, ZM)
```

#### 17. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L517` → after: `L260-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L260-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L260-L270) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L517)

```diff
-       return void 0 !== GG && 2 === GG.registrationStatus
+       return `\n\t\t\t\t${(0,PM.w)(MM,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       n\ t\ t\ t\ t\ t$ {
+         (0, PM.B)(MM, "float", "s", "sin(ang)")
+       }\
+       n\ t\ t\ t\ t\ t$ {
+         (0, PM.B)(MM, "float", "c", "cos(ang)")
+       }\
+       n\ t\ t\ t\ t\ treturn $ {
+         (0, PM.n)(MM, "mat2", "c", "s", "-s", "c")
+       };\
+       n\ t\ t\ t\ t`)}\n\t\t\t`
```

#### 18. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L519-L528` → after: `L272-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L272-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L272-L277) · [Before (L519-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L519-L528)

```diff
-     async function Vb(GG) {
-       let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       const ZG = GG;
-       await async function(GG) {
-         const {
-           registrationPromise: bG
-         } = await Zb(GG);
-         bG && await bG
-       }(ZG);
-       return (await kb(ZG, bG)).token
+ 
+     function QM(MM, rM) {
+       let iM = (0, PM.Db)(MM, "skele" + (rM - 1));
+       for (let SM = rM - 2; SM >= 0; SM--) iM = (0, PM.sb)(MM, `boneIdx == ${SM}`, (0, PM.Db)(MM, `skele${SM}`), iM);
+       const OM = "bone.yz + rotate(bone.x) * pivot - pivot";
+       return `\n\t\t\t\t${(0,PM.B)(MM,"int","boneIdx",(0,PM.wb)(MM,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,PM.B)(MM,"vec3","bone",iM)}\n\t\t\t\t${(0,PM.B)(MM,"vec2","pivot",(0,PM.n)(MM,"vec2","0.0",`${(0,PM.Hb)(MM,"position")}.z`))}\n\t\t\t\t${(0,PM.Y)(MM)?`positi … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L532-L556` → after: `L281-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L281-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L281-L288) · [Before (L532-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L532-L556)

```diff
-       return vG.create("missing-app-config-values", {
-         valueName: GG
-       })
-     }
-     const fb = "installations",
-       Qb = GG => {
-         const bG = GG.getProvider("app").getImmediate(),
-           ZG = function(GG) {
-             if (!GG || !GG.options) throw pb("App Configuration");
-             if (!GG.name) throw pb("App Name");
-             const bG = ["projectId", "apiKey", "appId"];
-             for (const ZG of bG)
-               if (!GG.options[ZG]) throw pb(ZG);
-             return {
-               appName: GG.name,
-               projectId: GG.options.projectId,
- ... (9 more removed lines; see GitHub link above)
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,PM.n)(MM,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
+     }
+     const LM = {
+         x: 0,
+         y: 0,
+         z: 0,
+         cz(MM, rM) {
+           return this.x = MM[rM], this.y = MM[rM + 1], this.z = MM[rM + 2], this
```

#### 20. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L559-L571` → after: `L291-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L291-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L291-L321) · [Before (L559-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L559-L571)

```diff
-       Kb = GG => {
-         const bG = GG.getProvider("app").getImmediate(),
-           ZG = (0, wG.y)(bG, fb).getImmediate();
-         return {
-           getId: () => async function(GG) {
-             const bG = GG,
-               {
-                 installationEntry: ZG,
-                 registrationPromise: wG
-               } = await Zb(bG);
-             return wG ? wG.catch(console.error) : kb(bG).catch(console.error), ZG.fid
-           }(ZG),
-           getToken: GG => Vb(ZG, GG)
+       mM = {
+         name: "Cape",
+         className: "CapeMaterialPlugin",
+         priority: 200,
+         defines: (MM, rM) => ({
+           ...(0, OM.b)("CAPE"),
+           BLOXD_CAPE_BONES: `${MM}`,
+           BLOXD_CAPE_MAX_Y: (0, SM.xb)(rM)
+         }),
+         getUniforms(MM) {
+           return (0, jM.d)(function(MM) {
+             const rM = [];
+             for (let iM = 0; iM < MM; iM++) rM.push({
+               name: `skele${iM}`,
+               type: "highp vec3"
+             });
+ ... (15 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L574-L577` → after: `L324-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L324-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L324-L340) · [Before (L574-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L574-L577)

```diff
-     (0, wG.B)(new yG.f(fb, Qb, "PUBLIC")), (0, wG.B)(new yG.f("installations-internal", Kb, "PRIVATE")), (0, wG.U)(uG, iG), (0, wG.U)(uG, iG, "esm2017");
-     const hb = "analytics",
-       db = "https://www.googletagmanager.com/gtag/js",
-       Jb = new SG.e("@firebase/analytics"),
+     (0, aM.l)(mM)
+   },
+   39720: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => zM,
+       d: () => LM
+     });
+     var OM = iM(38181),
+       SM = iM(38310),
+       jM = iM(38188),
+       aM = iM(38198);
+     const PM = "bloxdTextLodBias",
+       nM = [{
+         name: PM,
+         type: "float"
+       }],
+ ... (1 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L579-L590` → after: `L342-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L342-L343) · [Before (L579-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L579-L590)

```diff
-         "already-exists": "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
-         "already-initialized": "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the alrea … [truncated]
-         "already-initialized-settings": "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
-         "interop-component-reg-failed": "Firebase Analytics Interop Component failed to instantiate: {$reason}",
-         "invalid-analytics-context": "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
-         "indexeddb-unavailable": "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
-         "fetch-throttle": "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
-         "config-fetch-failed": "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
-         "no-api-key": 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
-         "no-app-id": 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
-         "no-client-id": 'The "client_id" field is empty.',
-         "invalid-gtag-resource": "Trusted Types detected an invalid gtag resource: {$gtagURL}."
+         planes: -.5,
+         boards: -.5
```

#### 23. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L592-L599` → after: `L345-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L345-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L345-L388) · [Before (L592-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L592-L599)

```diff
-       zb = new LG.i("analytics", "Analytics", rb);
- 
-     function Eb(GG) {
-       if (!GG.startsWith(db)) {
-         const bG = zb.create("invalid-gtag-resource", {
-           gtagURL: GG
-         });
-         return Jb.warn(bG.message), ""
+       LM = {
+         name: "TextSampler",
+         className: "TextSamplerMaterialPlugin",
+         priority: 60,
+         defines: () => (0, OM.b)("TEXT_SAMPLER"),
+         getUniforms: MM => (0, SM.d)(nM, "fragment", MM),
+         bind(MM) {
+           MM.updateFloat(PM, this.lodBias)
+         },
+         uniformsVersion: () => 0,
+         getCustomCode(MM, rM) {
+           if ("fragment" !== MM) return null;
+           const iM = (0, jM.K)(rM, `vec4 ${QM}(sampler2D s, vec2 uv, float bias)`, `fn ${QM}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
+             OM = (0, jM.K)(rM, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
+             SM = `${(0,jM.U)(rM,"vDiffuseUV")} + uvOffset`,
+             aM = (0, jM.K)(rM, `${QM}(diffuseSampler, ${SM}, ${(0,jM.Db)(rM,PM)})`, `${QM}(diffuseSampler, diffuseSamplerSampler, ${SM}, ${(0,jM.Db)(rM,PM)})`);
+ ... (28 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L601-L606` → after: `L390-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L390-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L390-L427) · [Before (L601-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L601-L606)

```diff
-       return GG
-     }
- 
-     function ob(GG) {
-       return Promise.all(GG.map((GG => GG.catch((GG => GG)))))
-     }
+       dispose(MM) {
+         (0, zM.m)(this._material), super.dispose(MM)
+       }
+     }(0, OM.m)(mM.e, HM), (0, mM.f)({
+       disableUnusedSpecularTerm: OM.e,
+       isLightingDisabled: MM => MM instanceof LM.StandardMaterial && MM.disableLighting
+     });
+     var hM = iM(39720);
+     class JM extends((0, OM.i)(hM.d)) {}(0, OM.m)(hM.d, JM);
+     var dM = iM(39852),
+       yM = iM(38178),
+       lM = iM(39126),
+       EM = iM(38287);
+     class UM extends((0, OM.i)(dM.c)) {}(0, OM.m)(dM.c, UM);
+     class GM extends((0, OM.i)(yM.b)) {}(0, OM.m)(yM.b, GM);
+     class CM extends((0, OM.i)(lM.i)) {}(0, OM.m)(lM.i, CM);
+ ... (22 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L609-L617` → after: `L430-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L430-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L430-L434) · [Before (L609-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L609-L617)

```diff
-       const ZG = function(GG, bG) {
-           let ZG;
-           return window.trustedTypes && (ZG = window.trustedTypes.createPolicy(GG, bG)), ZG
-         }("firebase-js-sdk-policy", {
-           createScriptURL: Eb
-         }),
-         wG = document.createElement("script"),
-         SG = `${db}?l=${GG}&id=${bG}`;
-       wG.src = ZG ? null === ZG || void 0 === ZG ? void 0 : ZG.createScriptURL(SG) : SG, wG.async = !0, document.head.appendChild(wG)
+       return Object.assign((function(MM, iM, OM, SM) {
+         return rM(this.featureState, MM, iM, OM, SM)
+       }), {
+         jL: MM
+       })
```

#### 26. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L620-L674` → after: `L437-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L437-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L437-L461) · [Before (L620-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L620-L674)

```diff
-     function ub(GG, bG, ZG, wG) {
-       return async function(SG) {
-         try {
-           for (var LG = arguments.length, yG = new Array(LG > 1 ? LG - 1 : 0), kG = 1; kG < LG; kG++) yG[kG - 1] = arguments[kG];
-           if ("event" === SG) {
-             const [wG, SG] = yG;
-             await async function(GG, bG, ZG, wG, SG) {
-               try {
-                 let LG = [];
-                 if (SG && SG.send_to) {
-                   let GG = SG.send_to;
-                   Array.isArray(GG) || (GG = [GG]);
-                   const wG = await ob(ZG);
-                   for (const ZG of GG) {
-                     const GG = wG.find((GG => GG.measurementId === ZG)),
-                       SG = GG && bG[GG.appId];
- ... (39 more removed lines; see GitHub link above)
+     function lM(MM) {
+       const rM = class extends HM.d {
+           constructor(rM, iM) {
+             const OM = (0, JM.Y)(rM),
+               SM = OM && (0, JM.v)(OM, MM.name);
+             for (var jM = arguments.length, aM = new Array(jM > 2 ? jM - 2 : 0), PM = 2; PM < jM; PM++) aM[PM - 2] = arguments[PM];
+             super(rM, MM.name, MM.priority, SM ? SM.defines : MM.defines(...aM), !1), this.featureState = void 0, this.featureState = iM, this._pluginManager._addPlugin(this), this._enable(!0), (0, JM.x)(this._material, MM, this.featureState, this._pluginDefineNames)
+           }
+           getClassName() {
+             return MM.className
+           }
+           isCompatible(MM) {
+             return MM === dM.b.GLSL || MM === dM.b.WGSL
+           }
+         },
+         iM = (0, hM.i)(MM);
+ ... (9 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L678-L682` → after: `L466-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L466-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L466-L512) · [Before (L678-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L678-L682)

```diff
-     const ib = new class {
-       constructor() {
-         let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-           bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
-         this.throttleMetadata = GG, this.intervalMillis = bG
+     class EM extends(lM(PM.b)) {}
+     var UM = iM(40931),
+       GM = iM(42260),
+       CM = iM(42265);
+ 
+     function eM(MM, rM, iM) {
+       return (0, CM.f)(iM, rM.urls, (() => async function(MM, rM, iM) {
+         const {
+           width: OM
+         } = MM[0].getSize(), SM = MM.map(((MM, iM) => {
+           var SM;
+           const jM = Math.round(MM.getSize().height / OM),
+             aM = null === rM || void 0 === rM ? void 0 : rM[iM];
+           return {
+             pixels: aM && aM.byteLength === OM * OM * jM * 4 ? aM : null !== (SM = bM.get(MM.getInternalTexture())) && void 0 !== SM ? SM : MM._readPixelsSync(),
+             layers: jM
+ ... (31 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L684-L685` → after: `L514-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L514-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L514-L524) · [Before (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L684-L685)

```diff
-       getThrottleMetadata(GG) {
-         return this.throttleMetadata[GG]
+       async setTextureArrayData(MM, rM) {
+         const iM = this.featureState,
+           {
+             width: OM,
+             height: SM
+           } = MM.getSize(),
+           jM = this._material.shaderLanguage;
+         if (!iM.useWebGL2) return void(0, wM.e)(this._material, iM, rM, OM, Math.round(SM / OM), jM);
+         if (this.loaded.add(rM), this.loaded.size < this.mirrors.length) return;
+         const aM = await eM(this.mirrors, iM.sources, this._material.Hk());
+         (0, wM.c)(this._material, iM, aM, OM, jM)
```

#### 29. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L687-L688` → after: `L526-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L526-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L526-L538) · [Before (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L687-L688)

```diff
-       setThrottleMetadata(GG, bG) {
-         this.throttleMetadata[GG] = bG
+     }
+     var gM = iM(42269),
+       uM = iM(41410),
+       RM = iM(38034),
+       pM = iM(42278),
+       WM = iM(41508),
+       sM = iM(41400),
+       DM = iM(42212),
+       kM = iM(38457),
+       ZM = iM(42280);
+     class oM extends gM.b {
+       getData() {
+         return null
```

#### 30. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L690-L691` → after: `L540-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L540-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L540-L542) · [Before (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L690-L691)

```diff
-       deleteThrottleMetadata(GG) {
-         delete this.throttleMetadata[GG]
+       _rebuild() {}
+       restore() {
+         super._rebuild()
```

#### 31. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L701-L715` → after: `L545-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L545-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L545-L572) · [Before (L701-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L701-L715)

```diff
-     async function Wb(GG) {
-       let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ib,
-         ZG = arguments.length > 2 ? arguments[2] : void 0;
-       const {
-         appId: wG,
-         apiKey: SG,
-         measurementId: LG
-       } = GG.options;
-       if (!wG) throw zb.create("no-app-id");
-       if (!SG) {
-         if (LG) return {
-           measurementId: LG,
-           appId: wG
-         };
-         throw zb.create("no-api-key")
+     const fM = {
+       Mesh: pM.d,
+       TransformNode: DM.e,
+       Vz: gM.b,
+       VertexBuffer: gM.e,
+       BoundingInfo: uM.d,
+       sh: RM.sh,
+       ArenaBuffer: oM,
+       SubMesh: sM.e,
+       VertexData: WM.d,
+       MirroredGeometry: ZM.d,
+       meshFromArrays: ZM.h,
+       plainMeshFromArrays: ZM.k
+     };
+     (0, kM.g)(fM);
+     var YM = iM(38298);
+ ... (12 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L730-L735` → after: `L575-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L575-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L575-L577) · [Before (L730-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L730-L735)

```diff
-     async function mb(GG, bG, ZG) {
-       let {
-         throttleEndTimeMillis: wG,
-         backoffCount: SG
-       } = bG, yG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ib;
-       var kG;
+ 
+     function AM(MM, rM) {
+       if (!(rM instanceof OM.StandardMaterial) || rM.specularTexture) return;
```

#### 33. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L737-L750` → after: `L579-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L579-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L579-L605) · [Before (L737-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L737-L750)

```diff
-         appId: UG,
-         measurementId: YG
-       } = GG;
-       try {
-         await
-         function(GG, bG) {
-           return new Promise(((ZG, wG) => {
-             const SG = Math.max(bG - Date.now(), 0),
-               LG = setTimeout(ZG, SG);
-             GG.addEventListener((() => {
-               clearTimeout(LG), wG(zb.create("fetch-throttle", {
-                 throttleEndTimeMillis: bG
-               }))
-             }))
+         r: iM,
+         g: SM,
+         b: jM
+       } = rM.specularColor;
+       0 === iM && 0 === SM && 0 === jM && (MM.SPECULARTERM = !1)
+     }(0, zM.f)({
+       disableUnusedSpecularTerm: AM
+     });
+     var xM = iM(38235),
+       vM = iM(38467);
+     const FM = new RegExp(`^#define ${QM.b}\\s*$`, "m");
+     class BM extends(lM(QM.g)) {
+       constructor(MM, rM) {
+         super(MM, rM), this.dh = !1, rM.ditherOnlyWhileFading && (vM.f.add(MM), this.prewarmDitherTwins(MM))
+       }
+       prewarmDitherTwins(MM) {
+ ... (11 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L752-L758` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L607) · [Before (L752-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L752-L758)

```diff
-         }(ZG, wG)
-       } catch (VG) {
-         if (YG) return Jb.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${YG} provided in the "measurementId" field in the local Firebase config. [${null===VG||void 0===VG?void 0:VG.message}]`), {
-           appId: UG,
-           measurementId: YG
-         };
-         throw VG
+         }))
```

#### 35. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L760-L795` → after: `L609-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L609-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L609-L616) · [Before (L760-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L760-L795)

```diff
-       try {
-         const bG = await async function(GG) {
-           var bG;
-           const {
-             appId: ZG,
-             apiKey: wG
-           } = GG, SG = {
-             method: "GET",
-             headers: Cb(wG)
-           }, LG = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", ZG), yG = await fetch(LG, SG);
-           if (200 !== yG.status && 304 !== yG.status) {
-             let GG = "";
-             try {
-               const ZG = await yG.json();
-               (null === (bG = ZG.error) || void 0 === bG ? void 0 : bG.message) && (GG = ZG.error.message)
-             } catch (kG) {}
- ... (20 more removed lines; see GitHub link above)
+       prewarmDither(MM) {
+         if (this.dh || MM.xG()) return !1;
+         const rM = new sM.e(0, 0, 0, 0, 0, MM, void 0, !1, !1);
+         this.featureState.prewarmingDither = !0;
+         try {
+           this._material.isReadyForSubMesh(MM, rM)
+         } finally {
+           this.featureState.prewarmingDither = !1
```

#### 36. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L797-L807` → after: `L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L618) · [Before (L797-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L797-L807)

```diff
-         const wG = 503 === Number(null === (kG = null === bG || void 0 === bG ? void 0 : bG.customData) || void 0 === kG ? void 0 : kG.httpStatus) ? (0, LG.t)(SG, yG.intervalMillis, 30) : (0, LG.t)(SG, yG.intervalMillis),
-           pG = {
-             throttleEndTimeMillis: Date.now() + wG,
-             backoffCount: SG + 1
-           };
-         return yG.setThrottleMetadata(UG, pG), Jb.debug(`Calling attemptFetch again in ${wG} millis`), mb(GG, pG, ZG, yG)
-       }
-     }
-     class Ib {
-       constructor() {
-         this.listeners = []
+         return null !== rM.effect
```

#### 37. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L809-L813` → after: `L620-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L620-L621) · [Before (L809-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L809-L813)

```diff
-       addEventListener(GG) {
-         this.listeners.push(GG)
-       }
-       abort() {
-         this.listeners.forEach((GG => GG()))
+       dispose(MM) {
+         this.dh = !0, super.dispose(MM)
```

#### 38. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L816-L820` → after: `L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L624) · [Before (L816-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L816-L820)

```diff
-     let Fb, vb;
- 
-     function ab(GG) {
-       vb = GG
-     }
+     const XM = new Map;
```

#### 39. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L822-L823` → after: `L626-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L626-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L626-L627) · [Before (L822-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L822-L823)

```diff
-     function cb(GG) {
-       Fb = GG
+     function IM(MM, rM) {
+       XM.set(MM, rM)
```

#### 40. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L825-L840` → after: `L629-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L629-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L629-L653) · [Before (L825-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L825-L840)

```diff
-     async function lb(GG, bG, ZG, wG, SG, yG, kG) {
-       var UG;
-       const YG = Wb(GG);
-       YG.then((bG => {
-         ZG[bG.measurementId] = bG.appId, GG.options.measurementId && bG.measurementId !== GG.options.measurementId && Jb.warn(`The measurement ID in the local Firebase config (${GG.options.measurementId}) does not match the measurement ID fetched from the server (${bG.measurement … [truncated]
-       })).catch((GG => Jb.error(GG))), bG.push(YG);
-       const VG = async function() {
-         if (!(0, LG.U)()) return Jb.warn(zb.create("indexeddb-unavailable", {
-           errorInfo: "IndexedDB is not available in this environment."
-         }).message), !1;
-         try {
-           await (0, LG.fb)()
-         } catch (GG) {
-           return Jb.warn(zb.create("indexeddb-unavailable", {
-             errorInfo: null === GG || void 0 === GG ? void 0 : GG.toString()
-           }).message), !1
+     IM(PM.b, EM), IM(nM.g, tM), IM(QM.g, BM), IM(zM.j, NM), (0, LM.e)({
+       create: (MM, rM) => {
+         const iM = new OM.StandardMaterial(MM.name, rM);
+         return (0, xM.s)(MM, iM), iM.detailMap._pluginDefineNames
+       },
+       write: (MM, rM, iM) => {
+         (0, xM.U)(MM.mirror, rM, iM)
+       },
+       addFeature: (MM, rM, iM) => {
+         const OM = XM.get(rM.feature);
+         if (!OM) throw new Error(`${rM.feature.name} has no plugin class (registerPluginClass)`);
+         new OM(MM.mirror, rM.state, ...iM)
+       },
+       texture: (MM, rM, iM) => {
+         let {
+           url: OM,
+ ... (9 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L842-L855` → after: `L655-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L655-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L655-L730) · [Before (L842-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L842-L855)

```diff
-         return !0
-       }().then((GG => GG ? wG.getId() : void 0)), [pG, fG] = await Promise.all([YG, VG]);
-       (function(GG) {
-         const bG = window.document.getElementsByTagName("script");
-         for (const ZG of Object.values(bG))
-           if (ZG.src && ZG.src.includes(db) && ZG.src.includes(GG)) return ZG;
-         return null
-       })(yG) || Xb(yG, pG.measurementId), vb && (SG("consent", "default", vb), ab(void 0)), SG("js", new Date);
-       const QG = null !== (UG = null === kG || void 0 === kG ? void 0 : kG.config) && void 0 !== UG ? UG : {};
-       return QG.origin = "firebase", QG.update = !0, null != fG && (QG.firebase_id = fG), SG("config", pG.measurementId, QG), Fb && (SG("set", Fb), cb(void 0)), pG.measurementId
-     }
-     class jb {
-       constructor(GG) {
-         this.app = GG
+         const zM = {},
+           LM = new Promise(((MM, rM) => {
+             zM.onLoad = MM, zM.onError = (MM, iM) => {
+               rM(new Error(`${nM.context}: ${(null===iM||void 0===iM?void 0:iM.message)||MM||"Failed to load texture"}`))
+             }
+           })),
+           {
+             mimeType: HM,
+             bytes: hM,
+             label: JM
+           } = nM,
+           dM = {
+             noMipmap: SM,
+             invertY: !1,
+             samplingMode: PM,
+             ...zM,
+ ... (60 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L857-L858` → after: `L732-L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L732-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L732-L734) · [Before (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L857-L858)

```diff
-       _delete() {
-         return delete Pb[this.app.options.appId], Promise.resolve()
+       link(MM) {
+         var rM;
+         (0, QM.j)(MM), this.model = MM, null === (rM = this.onLinked) || void 0 === rM || rM.call(this, MM)
```

#### 43. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L860-L874` → after: `L736-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L736-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L736-L737) · [Before (L860-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L860-L874)

```diff
-     }
-     let Pb = {},
-       Mb = [];
-     const Ab = {};
-     let sb, qb, nb = "dataLayer",
-       gb = "gtag",
-       eb = !1;
- 
-     function Rb(GG) {
-       if (eb) throw zb.create("already-initialized");
-       GG.dataLayerName && (nb = GG.dataLayerName), GG.gtagName && (gb = GG.gtagName)
-     }
- 
-     function Tb(GG, bG, ZG) {
-       ! function() {
+       relink() {
+         this.release();
```

#### 44. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L876-L881` → after: `L739-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L739-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L739-L791) · [Before (L876-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L876-L881)

```diff
-         if ((0, LG.M)() && GG.push("This is a browser extension environment."), (0, LG.o)() || GG.push("Cookies are not available."), GG.length > 0) {
-           const bG = GG.map(((GG, bG) => `(${bG+1}) ${GG}`)).join(" "),
-             ZG = zb.create("invalid-analytics-context", {
-               errorInfo: bG
-             });
-           Jb.warn(ZG.message)
+         for (const SM of Object.values(this._vertexBuffers))
+           if (!SM.getIsInstanced()) {
+             const {
+               byteOffset: rM,
+               byteStride: iM,
+               type: OM,
+               normalized: jM
+             } = SM;
+             MM.push({
+               kind: SM.getKind(),
+               data: SM.getData(),
+               offset: rM,
+               stride: iM,
+               components: SM.getSize(),
+               glType: OM,
+               isNormalized: jM
+ ... (37 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L883-L888` → after: `L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L793) · [Before (L883-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L883-L888)

```diff
-       }();
-       const wG = GG.options.appId;
-       if (!wG) throw zb.create("no-app-id");
-       if (!GG.options.apiKey) {
-         if (!GG.options.measurementId) throw zb.create("no-api-key");
-         Jb.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${GG.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
+         return rM._updatable = aM, rM._boundingInfo = new jM.d(this.extend.minimum, this.extend.maximum), rM.relink(), rM
```

#### 46. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L890-L911` → after: `L795-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L795-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L795-L804) · [Before (L890-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L890-L911)

```diff
-       if (null != Pb[wG]) throw zb.create("already-exists", {
-         id: wG
-       });
-       if (!eb) {
-         ! function(GG) {
-           let bG = [];
-           Array.isArray(window[GG]) ? bG = window[GG] : window[GG] = bG
-         }(nb);
-         const {
-           wrappedGtag: GG,
-           gtagCore: bG
-         } = function(GG, bG, ZG, wG, SG) {
-           let LG = function() {
-             for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
-             window[wG].push(arguments)
-           };
- ... (6 more removed lines; see GitHub link above)
+       static mergeMeshes(MM, rM, iM, OM, SM, jM) {
+         const nM = MM[0].Hk(),
+           QM = new PM.d(MM[0].name + "_merged", nM),
+           LM = new zM(aM.e.RandomId(), nM, void 0, !1, QM);
+         try {
+           if (!PM.d.MergeMeshes(MM, rM, iM, QM, SM, jM)) return QM.dispose(), null
+         } catch (mM) {
+           throw QM.dispose(), mM
+         }
+         return LM.relink(), QM
```

#### 47. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L913-L930` → after: `L806-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L806-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L806-L807) · [Before (L913-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L913-L930)

```diff
-       Pb[wG] = lb(GG, Mb, Ab, bG, sb, nb, ZG);
-       return new jb(GG)
-     }
- 
-     function Hb() {
-       let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wG.M)();
-       GG = (0, LG.H)(GG);
-       const bG = (0, wG.y)(GG, hb);
-       return bG.isInitialized() ? bG.getImmediate() : tb(GG)
-     }
- 
-     function tb(GG) {
-       let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const ZG = (0, wG.y)(GG, hb);
-       if (ZG.isInitialized()) {
-         const GG = ZG.getImmediate();
- ... (2 more removed lines; see GitHub link above)
+       removeVerticesData(MM) {
+         this.releaseUnlessInstanced(MM), super.removeVerticesData(MM)
```

#### 48. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L932-L943` → after: `L809-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L809-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L809-L817) · [Before (L932-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L932-L943)

```diff
-       return ZG.initialize({
-         options: bG
-       })
-     }
-     async function Db() {
-       if ((0, LG.M)()) return !1;
-       if (!(0, LG.o)()) return !1;
-       if (!(0, LG.U)()) return !1;
-       try {
-         return await (0, LG.fb)()
-       } catch (GG) {
-         return !1
+       dispose() {
+         this.release(), super.dispose()
+       }
+       releaseUnlessInstanced(MM) {
+         var rM;
+         MM && null !== (rM = this.getVertexBuffer(MM)) && void 0 !== rM && rM.getIsInstanced() || this.release()
+       }
+       release() {
+         this.model && ((0, QM.p)(this.model), this.model = null)
```

#### 49. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L948-L966` → after: `L822-L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L822-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L822-L839) · [Before (L948-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L948-L966)

```diff
-       GG = (0, LG.H)(GG), async function(GG, bG, ZG, wG) {
-         if (wG && wG.global) return GG("set", {
-           screen_name: ZG
-         }), Promise.resolve();
-         GG("config", await bG, {
-           update: !0,
-           screen_name: ZG
-         })
-       }(qb, Pb[GG.app.options.appId], bG, ZG).catch((GG => Jb.error(GG)))
-     }
-     async function Ob(GG) {
-       return GG = (0, LG.H)(GG), async function(GG, bG) {
-         const ZG = await bG;
-         return new Promise(((bG, wG) => {
-           GG("get", ZG, "client_id", (GG => {
-             GG || wG(zb.create("no-client-id")), bG(GG)
- ... (3 more removed lines; see GitHub link above)
+       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new PM.d(MM, iM);
+       const SM = (0, QM.i)(rM),
+         {
+           positions: jM,
+           normals: LM,
+           uvs: mM,
+           indices: HM,
+           named: hM = {}
+         } = rM,
+         JM = new nM.d;
+       JM.positions = jM, JM.normals = null !== LM && void 0 !== LM ? LM : null, JM.uvs = null !== mM && void 0 !== mM ? mM : null, JM.indices = HM;
+       const dM = new zM(aM.e.RandomId(), iM, JM, !1, OM);
+       for (const {
+           kind: aM,
+           components: PM
+         }
+ ... (2 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L970-L980` → after: `L843-L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L843-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L843-L859) · [Before (L970-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L970-L980)

```diff
-       GG = (0, LG.H)(GG), async function(GG, bG, ZG, wG) {
-         if (wG && wG.global) return GG("set", {
-           user_id: ZG
-         }), Promise.resolve();
-         GG("config", await bG, {
-           update: !0,
-           user_id: ZG
-         })
-       }(qb, Pb[GG.app.options.appId], bG, ZG).catch((GG => Jb.error(GG)))
-     }
- 
+       let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       const SM = new PM.d(MM, iM),
+         {
+           positions: jM,
+           normals: aM,
+           uvs: QM,
+           indices: zM
+         } = rM;
+       return Object.assign(new nM.d, {
+         positions: jM,
+         normals: aM,
+         uvs: QM,
+         indices: zM
+       }).applyToMesh(SM, OM), SM
+     }
+   },
+ ... (1 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L982-L990` → after: `L861-L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L861-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L861-L879) · [Before (L982-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L982-L990)

```diff
-       GG = (0, LG.H)(GG), async function(GG, bG, ZG, wG) {
-         if (wG && wG.global) {
-           const bG = {};
-           for (const GG of Object.keys(ZG)) bG[`user_properties.${GG}`] = ZG[GG];
-           return GG("set", bG), Promise.resolve()
-         }
-         GG("config", await bG, {
-           update: !0,
-           user_properties: ZG
+       const OM = rM * rM * 4,
+         SM = MM[0].layers,
+         jM = SM * (MM.length - 1) + MM[MM.length - 1].layers,
+         aM = new Uint8Array(jM * OM);
+       MM.forEach(((rM, iM) => {
+         const jM = iM + 1 < MM.length ? Math.min(rM.layers, SM) : rM.layers;
+         aM.set(new Uint8Array(rM.pixels.buffer, rM.pixels.byteOffset, jM * OM), iM * SM * OM)
+       }));
+       const PM = Math.max(1, Math.min(jM, iM || jM));
+       if (PM === jM) return [{
+         pixels: aM,
+         layers: jM
+       }];
+       const nM = [];
+       for (let QM = 0; QM < jM; QM += PM) {
+         const MM = Math.min(jM, QM + PM);
+ ... (3 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L992-L1015` → after: `L881-L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L881-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L881-L882) · [Before (L992-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L992-L1015)

```diff
-       }(qb, Pb[GG.app.options.appId], bG, ZG).catch((GG => Jb.error(GG)))
-     }
- 
-     function GZ(GG, bG) {
-       GG = (0, LG.H)(GG), async function(GG, bG) {
-         const ZG = await GG;
-         window[`ga-disable-${ZG}`] = !bG
-       }(Pb[GG.app.options.appId], bG).catch((GG => Jb.error(GG)))
-     }
- 
-     function bZ(GG) {
-       qb ? qb("set", GG) : cb(GG)
-     }
- 
-     function ZZ(GG, bG, ZG, wG) {
-       GG = (0, LG.H)(GG), async function(GG, bG, ZG, wG, SG) {
- ... (8 more removed lines; see GitHub link above)
+       }
+       return nM
```

#### 53. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L1018-L1019` → after: `L890-L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L890-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/271.js#L890-L904) · [Before (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/271.js#L1018-L1019)

```diff
-     function wZ(GG) {
-       qb ? qb("consent", "update", GG) : ab(GG)
+     function jM(MM, rM, iM) {
+       var OM, jM;
+       const aM = null !== (OM = SM.get(MM)) && void 0 !== OM ? OM : new Map;
+       SM.set(MM, aM);
+       const PM = null !== (jM = aM.get(rM[0])) && void 0 !== jM ? jM : [];
+       aM.set(rM[0], PM);
+       const nM = PM.find((MM => MM.urls.length === rM.length && MM.urls.every(((MM, iM) => MM === rM[iM]))));
+       if (nM) return nM.built;
+       const QM = {
+         urls: [...rM],
+         built: iM()
+       };
+       return PM.push(QM), QM.built.catch((() => {
+         PM.splice(PM.indexOf(QM), 1)
+       })), QM.built
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/272.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/272.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf)

#### 1. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L5-L2903` → after: `L4-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L4-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/272.js#L4-L125) · [Before (L5-L2903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/272.js#L5-L2903)

```diff
-     40916: (GG, bG, ZG) => {
-         ZG.r(bG), ZG.d(bG, {
-           ActionCodeOperation: () => fG,
-           ActionCodeURL: () => Ob,
-           AuthCredential: () => Ab,
-           AuthErrorCodes: () => JG,
-           EmailAuthCredential: () => Tb,
-           EmailAuthProvider: () => Bb,
-           FacebookAuthProvider: () => wZ,
-           FactorId: () => UG,
-           GithubAuthProvider: () => LZ,
-           GoogleAuthProvider: () => SZ,
-           OAuthCredential: () => tb,
-           OAuthProvider: () => ZZ,
-           OperationType: () => pG,
-           PhoneAuthCredential: () => Nb,
- ... (2883 more removed lines; see GitHub link above)
+   42144: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => jM,
+       h: () => aM
+     });
+     var OM = iM(2050);
+     let SM = !1;
+ 
+     function jM() {
+       SM = !0
+     }
+ 
+     function aM() {
+       SM && (SM = !1, (0, OM.c)())
+     }
+   },
+ ... (106 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L2905-L3198` → after: `L127-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L127-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/272.js#L127-L135) · [Before (L2905-L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/272.js#L2905-L3198)

```diff
-         class Xw {
-           constructor(GG) {
-             this.eventTarget = GG, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
-           }
-           static _getInstance(GG) {
-             const bG = this.receivers.find((bG => bG.isListeningto(GG)));
-             if (bG) return bG;
-             const ZG = new Xw(GG);
-             return this.receivers.push(ZG), ZG
-           }
-           isListeningto(GG) {
-             return this.eventTarget === GG
-           }
-           async handleEvent(GG) {
-             const bG = GG,
-               {
- ... (278 more removed lines; see GitHub link above)
+         LM(SM.Pi) && HM(SM.ni, {
+           icon: SM.Ui,
+           level: SM.Ci,
+           displayName: null !== (rM = SM.Qi) && void 0 !== rM ? rM : null,
+           durationMs: null !== (iM = SM.Gi) && void 0 !== iM ? iM : null
+         })
+       })), (0, nM.h)(aM.P, (MM => {
+         const rM = (0, PM.d)(aM.P, MM);
+         if (!(0, PM.c)(rM)) return;
```

#### 3. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L3200-L3556` → after: `L137-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L137-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/272.js#L137-L226) · [Before (L3200-L3556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/272.js#L3200-L3556)

```diff
-         const sw = 1e12;
-         class qw {
-           constructor(GG) {
-             this.auth = GG, this.counter = sw, this._widgets = new Map
-           }
-           render(GG, bG) {
-             const ZG = this.counter;
-             return this._widgets.set(ZG, new nw(GG, this.auth.name, bG || {})), this.counter++, ZG
-           }
-           reset(GG) {
-             var bG;
-             const ZG = GG || sw;
-             null === (bG = this._widgets.get(ZG)) || void 0 === bG || bG.delete(), this._widgets.delete(ZG)
-           }
-           getResponse(GG) {
-             var bG;
- ... (341 more removed lines; see GitHub link above)
+         LM(iM.Pi) && OM.d.remove(iM.ni)
+       })), (0, nM.c)((() => {
+         OM.d.clear()
+       })))
+     }
+ 
+     function HM(MM, rM) {
+       OM.d.update(MM, rM), QM.forEach((rM => {
+         rM(MM)
+       }))
+     }
+     const hM = {
+       localEffectUpdated: {
+         watch: MM => QM.add(MM)
+       }
+     }
+ ... (74 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L3558-L3682` → after: `L228-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L228-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/272.js#L228-L411) · [Before (L3558-L3682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/272.js#L3558-L3682)

```diff
-           return CG(ZG, bG, "internal-error"), JZ(ZG, new SS(GG), GG.bypassAuthState)
-         }
-         class US {
-           constructor(GG, bG, ZG, wG) {
-             let SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-             this.auth = GG, this.resolver = ZG, this.user = wG, this.bypassAuthState = SG, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(bG) ? bG : [bG]
-           }
-           execute() {
-             return new Promise((async (GG, bG) => {
-               this.pendingPromise = {
-                 resolve: GG,
-                 reject: bG
-               };
-               try {
-                 this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
-               } catch (ZG) {
- ... (109 more removed lines; see GitHub link above)
+           return null !== iM && QM.has(rM) && QM.getName(rM) !== iM
+         })),
+         {
+           added: OM,
+           removed: jM,
+           settingChanges: nM
+         } = QM.apply(rM),
+         zM = new Set;
+       for (const SM of nM)
+         for (const MM in SM.settings) zM.add(MM);
+       const LM = iM || OM.length > 0 || jM.length > 0;
+       (LM || zM.has("hideNameSeed")) && function() {
+         const MM = new Map;
+         for (const rM of QM.ids()) {
+           const iM = QM.getName(rM),
+             OM = QM.getSetting(rM, "hideNameSeed");
+ ... (168 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L3684-L3705` → after: `L413-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L413-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/272.js#L413-L417) · [Before (L3684-L3705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/272.js#L3684-L3705)

```diff
-             GG()
-           }
-         }
-         QS.currentPopupAction = null;
-         const KS = "pendingRedirect",
-           hS = new Map;
-         class dS extends US {
-           constructor(GG, bG) {
-             super(GG, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], bG, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
-           }
-           async execute() {
-             let GG = hS.get(this.auth._key());
-             if (!GG) {
-               try {
-                 const bG = await async function(GG, bG) {
-                   const ZG = ES(bG),
- ... (6 more removed lines; see GitHub link above)
+             const rM = setTimeout((() => {
+               const rM = CM;
+               CM = [], eM = MM;
+               for (const OM of rM) try {
+                 MM(OM())
```

#### 6. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L3707` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/272.js#L419) · [Before (L3707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/272.js#L3707)

```diff
-                 GG = () => Promise.reject(bG)
+                 console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", iM)
```

#### 7. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L3709` → after: `L421-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L421-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/272.js#L421-L423) · [Before (L3709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/272.js#L3709)

```diff
-               hS.set(this.auth._key(), GG)
+             }), 0);
+             return () => {
+               clearTimeout(rM), bM = !1, eM = null
```

#### 8. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L3884-L3946` → after: `L427-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L427-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/272.js#L427-L440) · [Before (L3884-L3946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/272.js#L3884-L3946)

```diff
-         let MS = null;
- 
-         function AS(GG) {
-           return MS = MS || function(GG) {
-             return new Promise(((bG, ZG) => {
-               var wG, SG, LG;
- 
-               function yG() {
-                 PS(), gapi.load("gapi.iframes", {
-                   callback: () => {
-                     bG(gapi.iframes.getContext())
-                   },
-                   ontimeout: () => {
-                     PS(), ZG(oG(GG, "network-request-failed"))
-                   },
-                   timeout: jS.get()
- ... (47 more removed lines; see GitHub link above)
+       },
+       sM = {
+         localPos() {
+           const MM = (0, QM.e)();
+           if (null === MM) return uM;
+           const rM = MM.api.apiView;
+           for (let iM = 0; iM < 3; iM++) RM[iM] = PM.v.localPos(rM, 0, iM);
+           return RM
+         },
+         targetedBlockPos() {
+           const MM = (0, QM.e)();
+           if (null === MM || PM.v.targetBlockId(MM.api.apiView, 0) === PM.Pc) return null;
+           for (let rM = 0; rM < 3; rM++) pM[rM] = PM.v.targetBlock(MM.api.apiView, 0, rM);
+           return pM
```

#### 9. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L3949-L3952` → after: `L454-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L454-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/272.js#L454-L456) · [Before (L3949-L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/272.js#L3949-L3952)

```diff
-           location: "yes",
-           resizable: "yes",
-           statusbar: "yes",
-           toolbar: "no"
+           added: [],
+           removed: [],
+           settingChanges: []
```

#### 10. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L3954-L3961` → after: `L458-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L458-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/272.js#L458-L470) · [Before (L3954-L3961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/272.js#L3954-L3961)

```diff
-         class RS {
-           constructor(GG) {
-             this.window = GG, this.associatedEvent = null
-           }
-           close() {
-             if (this.window) try {
-               this.window.close()
-             } catch (GG) {}
+         for (const OM of MM.MM) {
+           let MM = this.members.get(OM.rM);
+           if (MM || (MM = {
+               name: null,
+               settings: {}
+             }, this.members.set(OM.rM, MM), rM.added.push(OM.rM)), null !== OM.iM && (MM.name = OM.iM), null !== OM.OM || OM.SM.length > 0) {
+             const iM = null === OM.OM ? {} : JSON.parse(OM.OM);
+             Object.assign(MM.settings, iM);
+             for (const rM of OM.SM) delete MM.settings[rM], iM[rM] = void 0;
+             rM.settingChanges.push({
+               playerId: OM.rM,
+               settings: iM
+             })
```

#### 11. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L3964-L3997` → after: `L473-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L473-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/272.js#L473-L479) · [Before (L3964-L3997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/272.js#L3964-L3997)

```diff
- 
-         function TS(GG, bG, ZG) {
-           let SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
-             LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
-           const yG = Math.max((window.screen.availHeight - LG) / 2, 0).toString(),
-             kG = Math.max((window.screen.availWidth - SG) / 2, 0).toString();
-           let UG = "";
-           const YG = Object.assign(Object.assign({}, eS), {
-               width: SG.toString(),
-               height: LG.toString(),
-               top: yG,
-               left: kG
-             }),
-             VG = (0, wG.K)().toLowerCase();
-           ZG && (UG = Qb(VG) ? "_blank" : ZG), pb(VG) && (bG = bG || "http://localhost", YG.scrollbars = "yes");
-           const pG = Object.entries(YG).reduce(((GG, bG) => {
- ... (18 more removed lines; see GitHub link above)
+         for (const OM of MM.jM) {
+           const MM = this.members.get(OM);
+           var iM;
+           if (MM) this.members.delete(OM), rM.removed.push({
+             playerId: OM,
+             name: null !== (iM = MM.name) && void 0 !== iM ? iM : void 0
+           })
```

#### 12. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L3999-L4026` → after: `L481-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L481-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/272.js#L481-L508) · [Before (L3999-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/272.js#L3999-L4026)

```diff
-         const HS = "__/auth/handler",
-           tS = "emulator/auth/handler",
-           DS = encodeURIComponent("fac");
-         async function NS(GG, bG, ZG, LG, yG, kG) {
-             CG(GG.config.authDomain, GG, "auth-domain-config-required"), CG(GG.config.apiKey, GG, "invalid-api-key");
-             const UG = {
-               apiKey: GG.config.apiKey,
-               appName: GG.name,
-               authType: ZG,
-               redirectUrl: LG,
-               v: SG.f,
-               eventId: yG
-             };
-             if (bG instanceof GZ) {
-               bG.setDefaultLanguage(GG.languageCode), UG.providerId = bG.providerId || "", (0, wG.P)(bG.getCustomParameters()) || (UG.customParameters = JSON.stringify(bG.getCustomParameters()));
-               for (const [GG, bG] of Object.entries(kG || {})) UG[GG] = bG
- ... (12 more removed lines; see GitHub link above)
+         return rM
+       }
+       has(MM) {
+         return this.members.has(MM)
+       }
+       ids() {
+         return [...this.members.keys()]
+       }
+       getName(MM) {
+         var rM, iM;
+         return null !== (rM = null === (iM = this.members.get(MM)) || void 0 === iM ? void 0 : iM.name) && void 0 !== rM ? rM : void 0
+       }
+       getSettings(MM) {
+         var rM;
+         return null === (rM = this.members.get(MM)) || void 0 === rM ? void 0 : rM.settings
+       }
+ ... (12 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/273.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/273.js` (90 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325)

#### 1. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L4)

```diff
-   40954: (GG, bG, ZG) => {
+   40515: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L6-L141` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L6-L8) · [Before (L6-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L6-L141)

```diff
-       $d: () => BG,
-       $f: () => uZ,
-       A: () => fG,
-       Af: () => BZ,
-       Bb: () => bZ,
-       Bc: () => wb,
-       C: () => Sb,
-       Ce: () => jZ,
-       Cf: () => bw,
-       Dd: () => Kb,
-       F: () => mG,
-       Fb: () => Qb,
-       Fc: () => pb,
-       Fe: () => lZ,
-       Ge: () => NZ,
-       Gf: () => tZ,
- ... (120 more removed lines; see GitHub link above)
+       d: () => aM,
+       g: () => SM,
+       j: () => jM
```

#### 3. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L143-L730` → after: `L10-L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L10-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L10-L813) · [Before (L143-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L143-L730)

```diff
-     const wG = -2147483648,
-       SG = 12,
-       LG = 12,
-       yG = 4095,
-       kG = {
-         Lifeform: 1,
-         Throwable: 2,
-         Mesh: 3,
-         Audio: 4,
-         Item: 5
-       },
-       UG = {
-         Alive: 1,
-         Crouching: 2,
-         OnGround: 4,
-         InFluid: 8,
- ... (572 more removed lines; see GitHub link above)
+     var OM = iM(44);
+ 
+     function SM(MM) {
+       return PM(MM, nM)
+     }
+ 
+     function jM(MM) {
+       return PM(MM, QM)
+     }
+ 
+     function aM(MM) {
+       return `${Math.floor(MM/60)}:${String(MM%60).padStart(2,"0")}`
+     }
+ 
+     function PM(MM, rM) {
+       const [, iM] = (0, OM.useState)(null);
+ ... (788 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L732-L737` → after: `L815-L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L815-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L815-L1195) · [Before (L732-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L732-L737)

```diff
-         BYTES: 16,
-         fov: (GG, bG) => GG.getFloat32(bG + 0, !0),
-         baseFov: (GG, bG) => GG.getFloat32(bG + 4, !0),
-         aspect: (GG, bG) => GG.getFloat32(bG + 8, !0),
-         bodyHeading: (GG, bG) => GG.getFloat32(bG + 12, !0)
-       },
+         open: !1,
+         explosives: [],
+         picked: 0,
+         selected: 0,
+         level: 1,
+         line: "demolitionDepotIntro"
+       };
+     class TM extends IM {
+       constructor(MM, rM, iM, OM) {
+         super(qM, MM, rM), this.picks = void 0, this.select = MM => {
+           this.set({
+             ...this.getView(),
+             selected: MM
+           })
+         }, this.LH = MM => {
+           const rM = this.getView();
+ ... (365 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L739-L742` → after: `L1197-L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L1197-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L1197-L1344) · [Before (L739-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L739-L742)

```diff
-         BYTES: 32,
-         eye: (GG, bG, ZG) => GG.getFloat64(bG + 0 + 8 * ZG, !0),
-         heading: (GG, bG) => GG.getFloat32(bG + 24, !0),
-         pitch: (GG, bG) => GG.getFloat32(bG + 28, !0)
+         open: !1,
+         cars: [],
+         out: null,
+         awaiting: !1,
+         selected: null,
+         line: "dealershipGarageIntro"
+       };
+     class lr extends IM {
+       constructor(MM, rM, iM, OM) {
+         super(yr, MM, rM), this.picks = void 0, this.select = MM => {
+           this.set({
+             ...this.getView(),
+             selected: MM
+           })
+         }, this.LH = MM => {
+           MM !== this.picks.getLastPending() && (this.picks.pushLatest(MM), this.set({
+ ... (132 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L745-L752` → after: `L1347-L2112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L1347-L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L1347-L2112) · [Before (L745-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L745-L752)

```diff
-         BYTES: 40,
-         feet: (GG, bG, ZG) => GG.getFloat64(bG + 0 + 8 * ZG, !0),
-         eyeHeight: (GG, bG) => GG.getFloat32(bG + 24, !0),
-         heading: (GG, bG) => GG.getFloat32(bG + 28, !0),
-         headingIsDrawn: (GG, bG) => GG.getUint32(bG + 32, !0)
-       },
-       LZ = 32,
-       yZ = 63,
+         open: !1,
+         orders: [],
+         tracked: null,
+         sellLines: [],
+         level: 1,
+         goldOwned: 0,
+         delivering: [],
+         tab: "orders",
+         selectedSlot: 0,
+         selectedWood: 0,
+         line: Cr
+       };
+ 
+     function br(MM) {
+       let [rM, iM, OM, SM, jM, aM] = MM;
+       return {
+ ... (750 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L754-L778` → after: `L2114-L2118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2114-L2118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2114-L2118) · [Before (L754-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L754-L778)

```diff
-         TickEnd: 32,
-         EntitySpawned: 33,
-         EntityDespawned: 34,
-         ChangeBlockFail: 39,
-         ChangeBlockFailEnd: 46,
-         InventoryEvent: 48,
-         HeldItemChanged: 49,
-         ShotDamage: 50,
-         EnchantOffer: 51,
-         UiEvent: 52,
-         EntityInfoChanged: 53,
-         ChunkSlot: 55,
-         PlaySound: 40,
-         SoundPos: 41,
-         SoundSet: 42,
-         SoundFade: 43,
- ... (9 more removed lines; see GitHub link above)
+         open: !1,
+         lines: [],
+         selected: 0,
+         level: 1,
+         goldOwned: 0
```

#### 8. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L780-L835` → after: `L2120-L2141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2120-L2141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2120-L2141) · [Before (L780-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L780-L835)

```diff
- 
-     function UZ(GG, bG, ZG, wG, SG) {
-       var LG, yG, kG, UG, YG, VG, pG, fG, QG, KG, hG, dG, JG, rG, zG, EG, oG, XG, uG, iG, CG, WG, mG, IG, FG;
-       switch (GG) {
-         case 32:
-           return 4 === wG && (null === (LG = SG.tickEnd) || void 0 === LG || LG.call(SG, Jb.Tp(bG, ZG)), !0);
-         case 33:
-           return 12 === wG && (null === (yG = SG.entitySpawned) || void 0 === yG || yG.call(SG, rb.serverId(bG, ZG), rb.index(bG, ZG), rb.kind(bG, ZG)), !0);
-         case 34:
-           return 12 === wG && (null === (kG = SG.entityDespawned) || void 0 === kG || kG.call(SG, rb.serverId(bG, ZG), rb.index(bG, ZG), rb.kind(bG, ZG)), !0);
-         case 39:
-           return !(wG < 20) && (null === (UG = SG.changeBlockFail) || void 0 === UG || UG.call(SG, zb.pos(bG, ZG, 0), zb.pos(bG, ZG, 1), zb.pos(bG, ZG, 2), zb.actual(bG, ZG), zb.dataLen(bG, ZG), ZG + 20, wG - 20), !0);
-         case 46:
-           return 0 === wG && (null === (YG = SG.changeBlockFailEnd) || void 0 === YG || YG.call(SG), !0);
-         case 48:
-           return 20 === wG && (null === (VG = SG.inventoryEvent) || void 0 === VG || VG.call(SG, Eb.what(bG, ZG), Eb.value(bG, ZG), Eb.pos(bG, ZG, 0), Eb.pos(bG, ZG, 1), Eb.pos(bG, ZG, 2), Eb.block(bG, ZG)), !0);
- ... (40 more removed lines; see GitHub link above)
+     class Vr extends IM {
+       constructor(MM, rM, iM, OM) {
+         super(Tr, MM, rM), this.sales = void 0, this.serverLines = [], this.select = MM => {
+           this.set({
+             ...this.getView(),
+             selected: MM
+           })
+         }, this.sell = MM => {
+           this.getView().lines.some((rM => {
+             let [iM, , , , OM] = rM;
+             return OM > 0 && (null === MM || MM === iM)
+           })) && (this.sales.push(MM), this.set({
+             ...this.getView(),
+             lines: this.getLines()
+           }))
+         }, this.onAnswersTimedOut = () => {
+ ... (6 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L839-L888` → after: `L2361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2361) · [Before (L839-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L839-L888)

```diff
-       SetChunkAddDistance: 2,
-       WatchEntityInfo: 66,
-       EventResync: 67,
-       WatchPromptPick: 68,
-       SetLocalDbId: 69,
-       SetAltVeto: 128,
-       EnchantOfferRequest: 130,
-       ClearPickupDelay: 131,
-       SyncOpMarker: 132,
-       SetHooks: 133,
-       SetPublicLobby: 144,
-       ClickCodeBlock: 145,
-       Send: 256,
-       Leave: 257,
-       SetPaused: 258,
-       ParticleBurst: 320,
- ... (34 more removed lines; see GitHub link above)
+       kind: "greet"
```

#### 10. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L893` → after: `L2365-L2368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2365-L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2365-L2368) · [Before (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L893)

```diff
-       return VZ.buffer !== GG.buffer && (VZ = new Uint8Array(GG.buffer)), VZ
+       return MM.every((MM => {
+         let [, , rM, iM] = MM;
+         return iM >= rM
+       }))
```

#### 11. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L896-L899` → after: `L2371-L2381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2371-L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2371-L2381) · [Before (L896-L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L896-L899)

```diff
-     function fZ(GG, bG, ZG) {
-       const wG = GG.hQ(66, bG, 4);
-       if (wG < 0) return !1;
-       return GG.view.setUint8(wG + 0, ZG), !0
+     function ji(MM) {
+       let [rM, iM, OM, SM, jM, aM] = MM;
+       return {
+         slot: rM,
+         nameKey: iM,
+         needs: OM,
+         exp: SM,
+         gold: jM,
+         IQ: aM,
+         ready: Si(OM)
+       }
```

#### 12. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L902-L905` → after: `L2384-L2386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2384-L2386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2384-L2386) · [Before (L902-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L902-L905)

```diff
-     function QZ(GG, bG, ZG) {
-       const wG = GG.hQ(67, bG, 4);
-       if (wG < 0) return !1;
-       return GG.view.setUint32(wG + 0, ZG, !0), !0
+     function ai(MM, rM) {
+       let [, , iM, OM] = MM;
+       return rM ? iM : iM - OM
```

#### 13. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L908-L911` → after: `L2389-L2391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2389-L2391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2389-L2391) · [Before (L908-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L908-L911)

```diff
-     function KZ(GG, bG, ZG) {
-       const wG = GG.hQ(68, bG, 4);
-       if (wG < 0) return !1;
-       return GG.view.setUint8(wG + 0, ZG), !0
+     function Pi(MM, rM) {
+       let [iM, OM] = MM;
+       return iM === rM.item && null !== OM === rM.golden
```

#### 14. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L914-L918` → after: `L2394-L2395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2394-L2395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2394-L2395) · [Before (L914-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L914-L918)

```diff
-     function hZ(GG, bG, ZG, wG) {
-       const SG = GG.hQ(69, bG, 4 + wG.length);
-       if (SG < 0) return !1;
-       const LG = GG.view;
-       return LG.setUint8(SG + 0, ZG), pZ(LG).set(wG, LG.byteOffset + SG + 4), !0
+     function ni(MM, rM) {
+       return (rM.golden ? MM.goldenLines : MM.sellLines).find((MM => Pi(MM, rM)))
```

#### 15. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L921-L925` → after: `L2398-L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2398-L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2398-L2446) · [Before (L921-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L921-L925)

```diff
-     function dZ(GG, bG, ZG, wG, SG) {
-       const LG = GG.hQ(128, bG, 4 + SG.length);
-       if (LG < 0) return !1;
-       const yG = GG.view;
-       return yG.setUint8(LG + 0, ZG), yG.setUint16(LG + 2, wG, !0), pZ(yG).set(SG, yG.byteOffset + LG + 4), !0
+     function Qi(MM, rM) {
+       return "sell" === rM.action ? mi(function(MM, rM, iM) {
+         let OM = MM.goldOwned;
+         const SM = MM => {
+           if (null !== rM && !Pi(MM, rM)) return MM;
+           const [SM, jM, aM, PM, nM] = MM, QM = ai(MM, iM);
+           return OM += QM * nM, [SM, jM, aM - QM, iM ? 0 : PM, nM]
+         };
+         return {
+           ...MM,
+           sellLines: MM.sellLines.map(SM),
+           goldenLines: zi(MM.goldenLines.map(SM)),
+           goldOwned: OM
+         }
+       }(MM, rM.kind, rM.all)) : "accept" === rM.action ? function(MM, rM) {
+         var iM;
+ ... (33 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L928-L931` → after: `L2449-L2453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2449-L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2449-L2453) · [Before (L928-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L928-L931)

```diff
-     function JZ(GG, bG, ZG) {
-       const wG = GG.hQ(131, bG, 4);
-       if (wG < 0) return !1;
-       return GG.view.setInt32(wG + 0, ZG, !0), !0
+     function zi(MM) {
+       return MM.filter((MM => {
+         let [, , rM] = MM;
+         return rM > 0
+       }))
```

#### 17. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L934-L937` → after: `L2456-L2461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2456-L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2456-L2461) · [Before (L934-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L934-L937)

```diff
-     function rZ(GG, bG, ZG) {
-       const wG = GG.hQ(132, bG, 4);
-       if (wG < 0) return !1;
-       return GG.view.setUint32(wG + 0, ZG, !0), !0
+     function Li(MM, rM) {
+       let [iM, OM] = rM;
+       return MM.find((MM => {
+         let [rM, SM] = MM;
+         return rM === iM && SM === OM
+       }))
```

#### 18. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L940-L943` → after: `L2464-L2487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2464-L2487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2464-L2487) · [Before (L940-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L940-L943)

```diff
-     function zZ(GG, bG, ZG) {
-       const wG = GG.hQ(133, bG, 4);
-       if (wG < 0) return !1;
-       return GG.view.setUint32(wG + 0, ZG, !0), !0
+     function mi(MM) {
+       const rM = (rM, iM) => {
+           const OM = (null === iM ? MM.sellLines : MM.goldenLines).find((MM => {
+             let [iM] = MM;
+             return iM === rM
+           }));
+           return OM ? OM[2] : 0
+         },
+         iM = MM.orders.map((iM => {
+           if (MM.delivering.includes(iM.slot)) return iM;
+           const OM = iM.needs.map((MM => {
+             let [iM, OM, SM] = MM;
+             return [iM, OM, SM, rM(iM, OM)]
+           }));
+           return {
+             ...iM,
+ ... (8 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L946-L949` → after: `L2490-L2655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2490-L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2490-L2655) · [Before (L946-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L946-L949)

```diff
-     function EZ(GG, bG, ZG) {
-       const wG = GG.hQ(144, bG, 4);
-       if (wG < 0) return !1;
-       return GG.view.setUint8(wG + 0, ZG), !0
+     function Hi(MM) {
+       let [, , , rM, iM] = MM;
+       return [...rM, ...iM].reduce(((MM, rM) => {
+         let [, , iM] = rM;
+         return MM + iM
+       }), 0)
+     }
+     const Ji = "greenvilleFarmBoardView",
+       di = "greenvilleFarmTrackerView",
+       yi = {
+         open: !1,
+         orders: [],
+         tracked: null,
+         sellLines: [],
+         goldenLines: [],
+         level: 1,
+ ... (150 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L952-L956` → after: `L2659-L2665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2659-L2665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2659-L2665) · [Before (L952-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L952-L956)

```diff
-     function oZ(GG, bG, ZG, wG, SG) {
-       const LG = GG.hQ(145, bG, 12);
-       if (LG < 0) return !1;
-       const yG = GG.view;
-       return yG.setInt32(LG + 0, ZG, !0), yG.setInt32(LG + 4, wG, !0), yG.setInt32(LG + 8, SG, !0), !0
+     function Ui() {
+       const MM = (0, PM.useRef)(null);
+       return (0, Ei.e)(MM), (0, CM.jsx)("span", {
+         ref: MM,
+         className: "GreenvilleFarmSparkle",
+         "aria-hidden": "true"
+       })
```

#### 21. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L959-L963` → after: `L2668-L2680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2668-L2680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2668-L2680) · [Before (L959-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L959-L963)

```diff
-     function XZ(GG, bG, ZG, wG) {
-       const SG = GG.hQ(256, bG, 4 + wG.length);
-       if (SG < 0) return !1;
-       const LG = GG.view;
-       return LG.setUint16(SG + 0, ZG, !0), pZ(LG).set(wG, LG.byteOffset + SG + 4), !0
+     function Gi(MM) {
+       let {
+         item: rM,
+         golden: iM
+       } = MM;
+       return (0, CM.jsx)("span", {
+         className: hM()("GreenvilleFarmProduce", {
+           Golden: iM
+         }),
+         children: (0, CM.jsx)(jr, {
+           item: rM
+         })
+       })
```

#### 22. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L966-L969` → after: `L2683-L2693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2683-L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2683-L2693) · [Before (L966-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L966-L969)

```diff
-     function uZ(GG, bG, ZG) {
-       const wG = GG.hQ(258, bG, 4);
-       if (wG < 0) return !1;
-       return GG.view.setUint8(wG + 0, ZG), !0
+     function Ci(MM) {
+       let {
+         item: rM,
+         goldenName: iM
+       } = MM;
+       return null !== iM ? (0, CM.jsx)("span", {
+         className: "GreenvilleFarmGoldenName",
+         children: iM
+       }) : (0, CM.jsx)(Sr, {
+         item: rM
+       })
```

#### 23. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L972-L979` → after: `L2702-L2703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2702-L2703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2702-L2703) · [Before (L972-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L972-L979)

```diff
-     function iZ(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
-       const YG = GG.hQ(320, bG, 48 + UG.length);
-       if (YG < 0) return !1;
-       const VG = GG.view;
-       VG.setUint32(YG + 0, ZG, !0), VG.setUint16(YG + 4, wG, !0), VG.setUint16(YG + 6, SG, !0), VG.setUint32(YG + 8, LG, !0);
-       for (let pG = 0; pG < 3; pG++) VG.setFloat64(YG + 12 + 8 * pG, yG[pG], !0);
-       for (let pG = 0; pG < 3; pG++) VG.setFloat32(YG + 36 + 4 * pG, kG[pG], !0);
-       return pZ(VG).set(UG, VG.byteOffset + YG + 48), !0
+     function bi(MM, rM) {
+       return MM.IQ ? MM.ready ? "Ready" : rM ? "Tracking" : "Accepted" : "New"
```

#### 24. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L982-L989` → after: `L2706-L2710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2706-L2710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2706-L2710) · [Before (L982-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L982-L989)

```diff
-     function CZ(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
-       const YG = GG.hQ(321, bG, 48 + UG.length);
-       if (YG < 0) return !1;
-       const VG = GG.view;
-       VG.setUint32(YG + 0, ZG, !0), VG.setInt32(YG + 4, wG, !0), VG.setUint16(YG + 8, SG, !0), VG.setUint16(YG + 10, LG, !0);
-       for (let pG = 0; pG < 3; pG++) VG.setFloat64(YG + 12 + 8 * pG, yG[pG], !0);
-       for (let pG = 0; pG < 3; pG++) VG.setFloat32(YG + 36 + 4 * pG, kG[pG], !0);
-       return pZ(VG).set(UG, VG.byteOffset + YG + 48), !0
+     function wi(MM) {
+       return MM.needs.some((MM => {
+         let [, rM] = MM;
+         return null !== rM
+       }))
```

#### 25. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L992-L999` → after: `L2713-L2721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2713-L2721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2713-L2721) · [Before (L992-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L992-L999)

```diff
-     function WZ(GG, bG, ZG, wG, SG, LG, yG) {
-       const kG = GG.hQ(322, bG, 44 + yG.length);
-       if (kG < 0) return !1;
-       const UG = GG.view;
-       UG.setUint32(kG + 0, ZG, !0), UG.setUint32(kG + 4, wG, !0);
-       for (let YG = 0; YG < 3; YG++) UG.setFloat64(kG + 8 + 8 * YG, SG[YG], !0);
-       for (let YG = 0; YG < 3; YG++) UG.setFloat32(kG + 32 + 4 * YG, LG[YG], !0);
-       return pZ(UG).set(yG, UG.byteOffset + kG + 44), !0
+     function ti(MM) {
+       let {
+         order: rM
+       } = MM;
+       const [iM, OM] = rM.needs[0];
+       return (0, CM.jsx)(Gi, {
+         item: iM,
+         golden: null !== OM
+       })
```

#### 26. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1002-L1005` → after: `L2724-L2769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2724-L2769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2724-L2769) · [Before (L1002-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1002-L1005)

```diff
-     function mZ(GG, bG, ZG) {
-       const wG = GG.hQ(323, bG, 4);
-       if (wG < 0) return !1;
-       return GG.view.setUint32(wG + 0, ZG, !0), !0
+     function gi(MM) {
+       let {
+         state: rM
+       } = MM;
+       const {
+         t: iM
+       } = (0, UM.A)();
+       return (0, CM.jsx)("span", {
+         className: hM()("GreenvilleBoardBadge GreenvilleFarmState", rM),
+         children: iM(ei[rM])
+       })
+     }
+ 
+     function ui(MM) {
+       let {
+         needs: rM
+ ... (30 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1008-L1014` → after: `L2772-L2791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2772-L2791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2772-L2791) · [Before (L1008-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1008-L1014)

```diff
-     function IZ(GG, bG, ZG, wG, SG, LG) {
-       const yG = GG.hQ(324, bG, 32 + LG.length);
-       if (yG < 0) return !1;
-       const kG = GG.view;
-       kG.setUint32(yG + 0, ZG, !0), kG.setUint32(yG + 4, wG, !0);
-       for (let UG = 0; UG < 3; UG++) kG.setFloat64(yG + 8 + 8 * UG, SG[UG], !0);
-       return pZ(kG).set(LG, kG.byteOffset + yG + 32), !0
+     function Ri(MM) {
+       let {
+         order: rM,
+         inTile: iM = !1
+       } = MM;
+       const {
+         t: OM
+       } = (0, UM.A)();
+       return (0, CM.jsxs)("span", {
+         className: "GreenvilleFarmReward",
+         children: [(0, CM.jsx)(sr, {
+           amount: rM.gold,
+           inTile: iM
+         }), (0, CM.jsx)("span", {
+           className: "GreenvilleFarmExp",
+           children: OM("greenvilleGame:boardExpGain", {
+ ... (4 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1017-L1018` → after: `L2794-L2868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2794-L2868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2794-L2868) · [Before (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1017-L1018)

```diff
-     function FZ(GG, bG) {
-       return !(GG.hQ(325, bG, 0) < 0)
+     function Wi(MM) {
+       let {
+         view: rM,
+         controller: iM
+       } = MM;
+       const {
+         t: OM
+       } = (0, UM.A)(), SM = rM.orders[rM.selectedOrder], {
+         slot: jM,
+         nameKey: aM,
+         needs: PM,
+         IQ: nM,
+         ready: QM
+       } = SM, zM = jM === rM.tracked, LM = PM.reduce(((MM, rM) => {
+         let [, , iM, OM] = rM;
+         return MM + Math.max(0, iM - OM)
+ ... (59 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1021-L1025` → after: `L2871-L2907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2871-L2907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2871-L2907) · [Before (L1021-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1021-L1025)

```diff
-     function vZ(GG, bG, ZG, wG, SG, LG) {
-       const yG = GG.hQ(384, bG, 16);
-       if (yG < 0) return !1;
-       const kG = GG.view;
-       return kG.setUint32(yG + 0, ZG, !0), kG.setUint32(yG + 4, wG, !0), kG.setFloat32(yG + 8, SG, !0), kG.setFloat32(yG + 12, LG, !0), !0
+     function si(MM) {
+       let {
+         view: rM,
+         controller: iM
+       } = MM;
+       const {
+         t: OM
+       } = (0, UM.A)();
+       return (0, CM.jsxs)(CM.Fragment, {
+         children: [(0, CM.jsx)(nr, {
+           roomy: !0,
+           children: rM.orders.map((MM => (0, CM.jsxs)(Qr, {
+             icon: (0, CM.jsx)(ti, {
+               order: MM
+             }),
+             name: OM(MM.nameKey),
+ ... (21 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1028-L1034` → after: `L2910-L2939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2910-L2939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2910-L2939) · [Before (L1028-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1028-L1034)

```diff
-     function aZ(GG, bG, ZG, wG, SG, LG, yG) {
-       const kG = GG.hQ(385, bG, 36 + yG.length);
-       if (kG < 0) return !1;
-       const UG = GG.view;
-       UG.setUint32(kG + 0, ZG, !0), UG.setUint32(kG + 4, wG, !0);
-       for (let YG = 0; YG < 3; YG++) UG.setFloat64(kG + 8 + 8 * YG, SG[YG], !0);
-       return UG.setUint32(kG + 32, LG, !0), pZ(UG).set(yG, UG.byteOffset + kG + 36), !0
+     function Di(MM) {
+       let {
+         line: rM,
+         selected: iM,
+         onSelect: OM
+       } = MM;
+       const [SM, jM, aM, , PM] = rM, nM = null !== jM;
+       return (0, CM.jsxs)(Qr, {
+         icon: (0, CM.jsx)(Gi, {
+           item: SM,
+           golden: nM
+         }),
+         name: (0, CM.jsx)(Ci, {
+           item: SM,
+           goldenName: jM
+         }),
+ ... (14 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1037-L1044` → after: `L2942-L2967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2942-L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2942-L2967) · [Before (L1037-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1037-L1044)

```diff
-     function cZ(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
-       const YG = GG.hQ(386, bG, 56 + UG.length);
-       if (YG < 0) return !1;
-       const VG = GG.view;
-       VG.setUint32(YG + 0, ZG, !0), VG.setUint8(YG + 4, wG);
-       for (let pG = 0; pG < 4; pG++) VG.setFloat32(YG + 8 + 4 * pG, SG[pG], !0);
-       for (let pG = 0; pG < 3; pG++) VG.setFloat64(YG + 24 + 8 * pG, LG[pG], !0);
-       return VG.setUint32(YG + 48, yG, !0), VG.setUint32(YG + 52, kG, !0), pZ(VG).set(UG, VG.byteOffset + YG + 56), !0
+     function ki(MM) {
+       let {
+         view: rM,
+         controller: iM
+       } = MM;
+       const {
+         t: OM
+       } = (0, UM.A)(), SM = [...rM.sellLines, ...rM.goldenLines], jM = SM.some((MM => ai(MM, !1) > 0)), aM = SM.some((MM => ai(MM, !0) > 0));
+       return (0, CM.jsxs)("div", {
+         className: "GreenvilleFarmSign",
+         children: [(0, CM.jsx)("h3", {
+           className: "GreenvilleFarmSignBoard",
+           children: OM("greenvilleGame:farmBoardPrices")
+         }), (0, CM.jsxs)("div", {
+           className: "GreenvilleFarmSignActions",
+           children: [(0, CM.jsx)(cM.e, {
+ ... (10 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1047-L1056` → after: `L2970-L3040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R2970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L2970-L3040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L2970-L3040) · [Before (L1047-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1047-L1056)

```diff
-     function lZ(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
-       const YG = GG.hQ(387, bG, 56);
-       if (YG < 0) return !1;
-       const VG = GG.view;
-       VG.setUint32(YG + 0, ZG, !0), VG.setUint16(YG + 4, wG, !0), VG.setUint8(YG + 6, SG);
-       for (let pG = 0; pG < 3; pG++) VG.setFloat64(YG + 8 + 8 * pG, LG[pG], !0);
-       for (let pG = 0; pG < 2; pG++) VG.setFloat32(YG + 32 + 4 * pG, yG[pG], !0);
-       VG.setFloat32(YG + 40, kG, !0);
-       for (let pG = 0; pG < 3; pG++) VG.setFloat32(YG + 44 + 4 * pG, UG[pG], !0);
-       return !0
+     function Zi(MM) {
+       let {
+         line: rM,
+         controller: iM
+       } = MM;
+       const {
+         t: OM
+       } = (0, UM.A)(), [SM, jM, aM, PM, nM] = rM, QM = null !== jM, zM = ai(rM, !1);
+       return (0, CM.jsxs)(zr, {
+         icon: (0, CM.jsx)(Gi, {
+           item: SM,
+           golden: QM
+         }),
+         name: (0, CM.jsx)(Ci, {
+           item: SM,
+           goldenName: jM
+ ... (55 more added lines; see GitHub link above)
```
