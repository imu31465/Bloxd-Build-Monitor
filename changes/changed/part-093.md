# Changed — Bundle Modifications Report (Part 093 / 146)

- **Updated at**: `2026-11-26T17:59 JST`
- **Part**: `93 / 146` (**400** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 092](part-092.md) · [Part 094 →](part-094.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/88.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d · continued)

- **File**: `bundles/bloxd.io/chunks/js/88.js` (4637 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d)

#### 1129. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9373-L9375` → after: `L9016-L9018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9016-L9018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9016-L9018) · [Before (L9373-L9375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9373-L9375)

```diff
-         const aM = null !== rM ? OM.d.computeShortestRotation(MM.currentRotX, rM) : 0,
-           PM = null !== iM ? OM.d.computeShortestRotation(MM.currentRotY, iM) : 0,
-           nM = null !== SM ? OM.d.computeShortestRotation(MM.currentRotZ, SM) : 0,
+         const yV = null !== eV ? JV.b.computeShortestRotation(VV.currentRotX, eV) : 0,
+           pV = null !== xV ? JV.b.computeShortestRotation(VV.currentRotY, xV) : 0,
+           QV = null !== YV ? JV.b.computeShortestRotation(VV.currentRotZ, YV) : 0,
```

#### 1130. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9398` → after: `L9041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9041) · [Before (L9398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9398)

```diff
-         this.thinInstMgr.setNodeRotationEuler(this.Zk, rM, iM + jM, OM + aM, SM + PM)
+         this.thinInstMgr.setNodeRotationEuler(this.pC, eV, xV + UV, JV + yV, YV + pV)
```

#### 1131. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9405` → after: `L9048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9048) · [Before (L9405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9405)

```diff
-         this.thinInstMgr.setNodePosition(this.Zk, MM.thinNodeIndex, rM, iM, OM)
+         this.thinInstMgr.setNodePosition(this.pC, VV.thinNodeIndex, eV, xV, JV)
```

#### 1132. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9409-L9411` → after: `L9052-L9054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9052-L9054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9052-L9054) · [Before (L9409-L9411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9409-L9411)

```diff
-           Cm: rM,
-           HZ: iM
-         } = this, OM = void 0 === rM || void 0 === iM ? void 0 : rM.hU.GrM(iM);
+           iv: eV,
+           zC: xV
+         } = this, JV = void 0 === eV || void 0 === xV ? void 0 : eV.sF.hxV(xV);
```

#### 1133. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9413` → after: `L9056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9056) · [Before (L9413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9413)

```diff
-         const SM = rM.hU.jK(iM).bq,
+         const YV = eV.sF.U_(xV).P_,
```

#### 1134. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9426` → after: `L9069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9069) · [Before (L9426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9426)

```diff
-         this.currentAnimationScript = null, this.elapsedAnimationTimeMs = 0, this.elapsedAnimationTimeFraction = 0, this.mS = 1
+         this.currentAnimationScript = null, this.elapsedAnimationTimeMs = 0, this.elapsedAnimationTimeFraction = 0, this.qY = 1
```

#### 1135. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9429` → after: `L9072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9072) · [Before (L9429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9429)

```diff
-         this.currentAnimationScript = MM, this.elapsedAnimationTimeMs = rM * MM.yS, this.elapsedAnimationTimeFraction = rM, this.mS = iM
+         this.currentAnimationScript = VV, this.elapsedAnimationTimeMs = eV * VV.PY, this.elapsedAnimationTimeFraction = eV, this.qY = xV
```

#### 1136. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9432` → after: `L9075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9075) · [Before (L9432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9432)

```diff
-         this.currentAnimationScript = null, this.elapsedAnimationTimeMs = 0, this.elapsedAnimationTimeFraction = 0, this.mS = 1
+         this.currentAnimationScript = null, this.elapsedAnimationTimeMs = 0, this.elapsedAnimationTimeFraction = 0, this.qY = 1
```

#### 1137. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9441` → after: `L9084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9084) · [Before (L9441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9441)

```diff
-         this.mS = MM
+         this.qY = VV
```

#### 1138. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9446-L9447` → after: `L9089-L9090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9089-L9090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9089-L9090) · [Before (L9446-L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9446-L9447)

```diff
-           yS: rM,
-           lS: iM
+           PY: eV,
+           AY: xV
```

#### 1139. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9449` → after: `L9092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9092) · [Before (L9449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9449)

```diff
-         this.elapsedAnimationTimeMs += MM * this.mS, this.elapsedAnimationTimeFraction = this.elapsedAnimationTimeMs / rM, this.elapsedAnimationTimeFraction >= 1 && iM !== jM.h.LoopOnLastFrame && (this.elapsedAnimationTimeMs = rM, this.elapsedAnimationTimeFraction = 1)
+         this.elapsedAnimationTimeMs += VV * this.qY, this.elapsedAnimationTimeFraction = this.elapsedAnimationTimeMs / eV, this.elapsedAnimationTimeFraction >= 1 && xV !== UV.n.LoopOnLastFrame && (this.elapsedAnimationTimeMs = eV, this.elapsedAnimationTimeFraction = 1)
```

#### 1140. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9453` → after: `L9096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9096) · [Before (L9453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9453)

```diff
-           yS: MM
+           PY: VV
```

#### 1141. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9459` → after: `L9102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9102) · [Before (L9459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9459)

```diff
-         return this.elapsedAnimationTimeFraction >= 1 && (null === (MM = this.currentAnimationScript) || void 0 === MM ? void 0 : MM.lS) !== jM.h.HoldOnLastFrame
+         return this.elapsedAnimationTimeFraction >= 1 && (null === (VV = this.currentAnimationScript) || void 0 === VV ? void 0 : VV.AY) !== UV.n.HoldOnLastFrame
```

#### 1142. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9468` → after: `L9111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9111) · [Before (L9468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9468)

```diff
-         PU: function(rM, iM) {
+         uF: function(eV, xV) {
```

#### 1143. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9470` → after: `L9113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9113) · [Before (L9470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9470)

```diff
-           iM.Cm = MM, iM.thinInstMgr = MM.CL.Dk, iM.nodeNameAliases = null !== (OM = null === (SM = (0, aM.e)(iM.modelLifeformType)) || void 0 === SM ? void 0 : SM.nodeNameAliases) && void 0 !== OM ? OM : null, (0, bM.b)(MM).animations.restore(rM, iM)
+           xV.iv = VV, xV.thinInstMgr = VV.gZ.YC, xV.nodeNameAliases = null !== (JV = null === (YV = (0, yV.b)(xV.modelLifeformType)) || void 0 === YV ? void 0 : YV.nodeNameAliases) && void 0 !== JV ? JV : null, (0, AV.c)(VV).animations.restore(eV, xV)
```

#### 1144. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9472` → after: `L9115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9115) · [Before (L9472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9472)

```diff
-         vW: function(MM, rM) {
+         bR: function(VV, eV) {
```

#### 1145. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9475` → after: `L9118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9118) · [Before (L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9475)

```diff
-         dU: function(rM, iM) {
+         SF: function(eV, xV) {
```

#### 1146. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9479-L9481` → after: `L9122-L9124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9122-L9124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9122-L9124) · [Before (L9479-L9481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9479-L9481)

```diff
-               Zk: iM
-             } = SM, jM = null !== iM && wM(MM, SM.HZ, iM);
-             jM ? SM.renderPaused(rM) : SM.render(rM), null === (OM = MM.hU.getState(SM.HZ, "genericLifeform")) || void 0 === OM || OM.followLimbs(jM)
+               pC: xV
+             } = YV, UV = null !== xV && NV(VV, YV.zC, xV);
+             UV ? YV.renderPaused(eV) : YV.render(eV), null === (JV = VV.sF.getState(YV.zC, "genericLifeform")) || void 0 === JV || JV.followLimbs(UV)
```

#### 1147. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9499` → after: `L9142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9142) · [Before (L9499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9499)

```diff
-   39376: (MM, rM, iM) => {
+   39534: (VV, eV, xV) => {
```

#### 1148. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9508` → after: `L9151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9151) · [Before (L9508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9508)

```diff
-     var OM = iM(347),
+     var JV = xV(380),
```

#### 1149. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9510-L9516` → after: `L9153-L9159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9153-L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9153-L9159) · [Before (L9510-L9516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9510-L9516)

```diff
-       jM = iM(39083),
-       aM = iM(38167),
-       PM = iM(38451),
-       nM = iM(39352),
-       QM = iM(38278);
-     const zM = new aM.d(1, 0, 0, .5),
-       LM = new aM.d(0, 0, 0, 0),
+       UV = xV(39243),
+       yV = xV(38387),
+       pV = xV(38660),
+       QV = xV(39509),
+       nV = xV(38484);
+     const wV = new yV.c(1, 0, 0, .5),
+       ZV = new yV.c(0, 0, 0, 0),
```

#### 1150. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9522-L9523` → after: `L9165-L9166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9165-L9166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9165-L9166) · [Before (L9522-L9523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9522-L9523)

```diff
-       const jM = null !== MM && void 0 !== MM ? MM : SM().create();
-       return SM().max(jM, null !== rM && void 0 !== rM ? rM : SM().ZERO, null !== iM && void 0 !== iM ? iM : SM().ZERO), SM().max(jM, jM, null !== OM && void 0 !== OM ? OM : SM().ZERO), SM().scale(jM, jM, mM), jM
+       const UV = null !== VV && void 0 !== VV ? VV : YV().create();
+       return YV().max(UV, null !== eV && void 0 !== eV ? eV : YV().ZERO, null !== xV && void 0 !== xV ? xV : YV().ZERO), YV().max(UV, UV, null !== JV && void 0 !== JV ? JV : YV().ZERO), YV().scale(UV, UV, vV), UV
```

#### 1151. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9528` → after: `L9171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9171) · [Before (L9528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9528)

```diff
-       const jM = null === (SM = MM.hU.qrM(rM)) || void 0 === SM ? void 0 : SM._heldLightTintFloor;
+       const UV = null === (YV = VV.sF.kJV(eV)) || void 0 === YV ? void 0 : YV._heldLightTintFloor;
```

#### 1152. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9534` → after: `L9177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9177) · [Before (L9534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9534)

```diff
-         this.lifeformType = null, this.Zk = null, this.kiM = null, this.lastHurtTime = -1 / 0, this.overlayColourOverride = null, this.isReplayLocalPlayer = !1, this._hurtOverlaySet = !1, this._defaultOverlayColour = LM, this._lightLevels = PM.c.slice(), this._transformPaused = ! … [truncated]
+         this.lifeformType = null, this.pC = null, this.VYV = null, this.lastHurtTime = -1 / 0, this.overlayColourOverride = null, this.isReplayLocalPlayer = !1, this._hurtOverlaySet = !1, this._defaultOverlayColour = ZV, this._lightLevels = pV.d.slice(), this._transformPaused = ! … [truncated]
```

#### 1153. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9537` → after: `L9180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9180) · [Before (L9537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9537)

```diff
-         this.kiM.ZiM && (this._transformPaused = MM, MM || jM.b[this.lifeformType].meshApi.updateTransform(this.HZ, this.Zk))
+         this.VYV.eYV && (this._transformPaused = VV, VV || UV.e[this.lifeformType].meshApi.updateTransform(this.zC, this.pC))
```

#### 1154. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9550-L9551` → after: `L9193-L9194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9193-L9194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9193-L9194) · [Before (L9550-L9551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9550-L9551)

```diff
-         dU: function(rM, iM) {
-           const OM = MM.zW - 300;
+         SF: function(eV, xV) {
+           const JV = VV.OW - 300;
```

#### 1155. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9554-L9558` → after: `L9197-L9201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9197-L9201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9197-L9201) · [Before (L9554-L9558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9554-L9558)

```diff
-               Zk: rM,
-               kiM: iM
-             } = aM, PM = iM.ZiM;
-             if (!PM && aM.HZ !== MM.eD && !aM.isReplayLocalPlayer) continue;
-             const mM = jM.b[aM.lifeformType].meshApi;
+               pC: eV,
+               VYV: xV
+             } = yV, pV = xV.eYV;
+             if (!pV && yV.zC !== VV.bD && !yV.isReplayLocalPlayer) continue;
+             const vV = UV.e[yV.lifeformType].meshApi;
```

#### 1156. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9562-L9563` → after: `L9205-L9206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9205-L9206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9205-L9206) · [Before (L9562-L9563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9562-L9563)

```diff
-                 iM = null !== (SM = aM.overlayColourOverride) && void 0 !== SM ? SM : LM;
-               aM._hurtOverlaySet !== MM ? (mM.updateMeshOverlayColour(rM, MM ? zM : iM), aM._hurtOverlaySet = MM, aM._defaultOverlayColour = iM) : iM !== aM._defaultOverlayColour && (aM._defaultOverlayColour = iM, MM || mM.updateMeshOverlayColour(rM, iM))
+                 xV = null !== (YV = yV.overlayColourOverride) && void 0 !== YV ? YV : ZV;
+               yV._hurtOverlaySet !== VV ? (vV.updateMeshOverlayColour(eV, VV ? wV : xV), yV._hurtOverlaySet = VV, yV._defaultOverlayColour = xV) : xV !== yV._defaultOverlayColour && (yV._defaultOverlayColour = xV, VV || vV.updateMeshOverlayColour(eV, xV))
```

#### 1157. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9565` → after: `L9208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9208) · [Before (L9565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9565)

```diff
-             if (MM.CL.DJ) {
+             if (VV.gZ.eE) {
```

#### 1158. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9567-L9569` → after: `L9210-L9212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9210-L9212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9210-L9212) · [Before (L9567-L9569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9567-L9569)

```diff
-                 OM = (0, nM.h)(MM, aM.HZ),
-                 SM = JM(MM, aM.HZ, OM, dM);
-               (0, QM._)(iM[0], iM[1], iM[2], iM[3], SM) && (iM.set(SM), mM.updateMeshLightLevels(rM, iM))
+                 JV = (0, QV.i)(VV, yV.zC),
+                 YV = bV(VV, yV.zC, JV, EV);
+               (0, nV.W)(xV[0], xV[1], xV[2], xV[3], YV) && (xV.set(YV), vV.updateMeshLightLevels(eV, xV))
```

#### 1159. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9576` → after: `L9219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9219) · [Before (L9576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9576)

```diff
-   39147: (MM, rM, iM) => {
+   39296: (VV, eV, xV) => {
```

#### 1160. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9583` → after: `L9226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9226) · [Before (L9583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9583)

```diff
-     var OM = iM(347),
+     var JV = xV(380),
```

#### 1161. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9585-L9587` → after: `L9228-L9230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9228-L9230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9228-L9230) · [Before (L9585-L9587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9585-L9587)

```diff
-       jM = iM(38764),
-       aM = iM(4854),
-       PM = iM(4069);
+       UV = xV(38938),
+       yV = xV(4952),
+       pV = xV(4098);
```

#### 1162. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9590` → after: `L9233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9233) · [Before (L9590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9590)

```diff
-         this.zoomXYOffsetLerpFactor = .2, this.Cm = void 0, this.Cm = MM
+         this.zoomXYOffsetLerpFactor = .2, this.iv = void 0, this.iv = VV
```

#### 1163. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9596` → after: `L9239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9239) · [Before (L9596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9596)

```diff
-         const MM = this.Cm.CL.JV().yV;
+         const VV = this.iv.gZ.K9().I9;
```

#### 1164. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9600` → after: `L9243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9243) · [Before (L9600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9600)

```diff
-         const MM = this.Cm.CL.JV().yV;
+         const VV = this.iv.gZ.K9().I9;
```

#### 1165. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9637` → after: `L9280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9280) · [Before (L9637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9637)

```diff
-           if (MM.zoom >= this.Cm.camera.zK) return void this._adjustTowardsZoomLevel(MM)
+           if (VV.zoom >= this.iv.camera.y_) return void this._adjustTowardsZoomLevel(VV)
```

#### 1166. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9644` → after: `L9287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9287) · [Before (L9644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9644)

```diff
-         const OM = this.Cm.bloxd.Aq(this.Cm.eD),
+         const JV = this.iv.bloxd.N_(this.iv.bD),
```

#### 1167. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9651-L9664` → after: `L9294-L9307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9294-L9307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9294-L9307) · [Before (L9651-L9664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9651-L9664)

```diff
-           PM = this.Cm.CL.JV().yV;
-         Math.abs(PM[0] - SM) < 1e-4 ? aM.x = SM : aM.x = PM[0] + (SM - PM[0]) * this.zoomXYOffsetLerpFactor, Math.abs(PM[1] - jM) < 1e-4 ? aM.y = jM : aM.y = PM[1] + (jM - PM[1]) * this.zoomXYOffsetLerpFactor, PM[0] = aM.x, PM[1] = aM.y, this.Cm.camera.targetX = aM.x, this.Cm.cam … [truncated]
-       }
-     }
-     var zM = iM(38991),
-       LM = iM(332),
-       mM = iM(22),
-       HM = iM(3063),
-       hM = iM(39153),
-       JM = iM(39372),
-       dM = iM(38034),
-       yM = iM(38318),
-       lM = iM(39363),
-       EM = iM(38090);
+           pV = this.iv.gZ.K9().I9;
+         Math.abs(pV[0] - YV) < 1e-4 ? yV.x = YV : yV.x = pV[0] + (YV - pV[0]) * this.zoomXYOffsetLerpFactor, Math.abs(pV[1] - UV) < 1e-4 ? yV.y = UV : yV.y = pV[1] + (UV - pV[1]) * this.zoomXYOffsetLerpFactor, pV[0] = yV.x, pV[1] = yV.y, this.iv.camera.targetX = yV.x, this.iv.cam … [truncated]
+       }
+     }
+     var wV = xV(39176),
+       ZV = xV(375),
+       vV = xV(32),
+       rV = xV(3093),
+       kV = xV(39304),
+       bV = xV(39527),
+       EV = xV(38263),
+       BV = xV(38523),
+       jV = xV(39518),
+       qV = xV(38323);
```

#### 1168. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9671-L9672` → after: `L9314-L9315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9314-L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9314-L9315) · [Before (L9671-L9672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9671-L9672)

```diff
-     var tM = iM(39055);
-     const gM = new dM.sh(1, 0, 0),
+     var XV = xV(39225);
+     const MV = new EV.Ik(1, 0, 0),
```

#### 1169. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9676` → after: `L9319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9319) · [Before (L9676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9676)

```diff
-     class WM extends hM.c {
+     class RV extends kV.e {
```

#### 1170. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9678` → after: `L9321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9321) · [Before (L9678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9678)

```diff
-         super(MM, rM, iM, SM), this.breakingItem = void 0, this.firstPersonMesh = null, this.firstPersonPosOffset = new dM.sh(0, 0, 0), this.firstPersonRotation = new dM.sh(0, 0, 0), this.drivingShare = 0, this.breakingItem = OM, this.heldItemState = rM
+         super(VV, eV, xV, YV), this.breakingItem = void 0, this.firstPersonMesh = null, this.firstPersonPosOffset = new EV.Ik(0, 0, 0), this.firstPersonRotation = new EV.Ik(0, 0, 0), this.drivingShare = 0, this.breakingItem = JV, this.heldItemState = eV
```

#### 1171. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9684` → after: `L9327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9327) · [Before (L9684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9684)

```diff
-         super.selected(MM, rM), this.breakingItem.selected(MM), this.typeObj = MM, this.disposeOfMeshes(), this.firstPersonMesh = this.typeObj.getHeldMesh(rM), this.firstPersonMesh.kR(!1), this.wQM()
+         super.selected(VV, eV), this.breakingItem.selected(VV), this.typeObj = VV, this.disposeOfMeshes(), this.firstPersonMesh = this.typeObj.getHeldMesh(eV), this.firstPersonMesh.pW(!1), this.fwV()
```

#### 1172. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9686-L9687` → after: `L9329-L9330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9329-L9330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9329-L9330) · [Before (L9686-L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9686-L9687)

```diff
-       BiM() {
-         return super.BiM(), this.trySwingBlock(Date.now()), this.breakingItem.BiM()
+       wYV() {
+         return super.wYV(), this.trySwingBlock(Date.now()), this.breakingItem.wYV()
```

#### 1173. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9692-L9693` → after: `L9335-L9336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9335-L9336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9335-L9336) · [Before (L9692-L9693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9692-L9693)

```diff
-       XiM() {
-         return this.trySwingBlock(Date.now()), this.breakingItem.XiM()
+       ZYV() {
+         return this.trySwingBlock(Date.now()), this.breakingItem.ZYV()
```

#### 1174. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9695-L9696` → after: `L9338-L9339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9338-L9339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9338-L9339) · [Before (L9695-L9696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9695-L9696)

```diff
-       viM() {
-         return this.breakingItem.viM()
+       QYV() {
+         return this.breakingItem.QYV()
```

#### 1175. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9698-L9699` → after: `L9341-L9342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9341-L9342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9341-L9342) · [Before (L9698-L9699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9698-L9699)

```diff
-       xiM() {
-         return super.xiM(), this.breakingItem.xiM()
+       pYV() {
+         return super.pYV(), this.breakingItem.pYV()
```

#### 1176. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9702` → after: `L9345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9345) · [Before (L9702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9702)

```diff
-         this.breakingItem.bL(MM, rM) && this.trySwingBlock(rM)
+         this.breakingItem.iZ(VV, eV) && this.trySwingBlock(eV)
```

#### 1177. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9707` → after: `L9350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9350) · [Before (L9707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9707)

```diff
-             const MM = this.Cm.hU.grM(this.heldItemState.HZ);
+             const VV = this.iv.sF.HxV(this.heldItemState.zC);
```

#### 1178. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9715-L9717` → after: `L9358-L9360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9358-L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9358-L9360) · [Before (L9715-L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9715-L9717)

```diff
-         const rM = new dM.sh(.2 + this.firstPersonPosOffset.x, -.15 + this.firstPersonPosOffset.y, .17 + this.firstPersonPosOffset.z),
-           iM = new dM.sh(0, -3 * Math.PI / 7, -Math.PI / 6).add(this.firstPersonRotation);
-         (0, aM.c)(this.typeObj.type) && (iM.z = 0, iM.y -= Math.PI / 2);
+         const eV = new EV.Ik(.2 + this.firstPersonPosOffset.x, -.15 + this.firstPersonPosOffset.y, .17 + this.firstPersonPosOffset.z),
+           xV = new EV.Ik(0, -3 * Math.PI / 7, -Math.PI / 6).add(this.firstPersonRotation);
+         (0, yV.b)(this.typeObj.type) && (xV.z = 0, xV.y -= Math.PI / 2);
```

#### 1179. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9720` → after: `L9363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9363) · [Before (L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9720)

```diff
-         if (SM && (OM = (0, lM.h)(iM, SM, uM), iM.P_(0)), MM - this.heldItemState._lastSwingStart < this.heldItemState.swingDuration) {
+         if (YV && (JV = (0, jV.h)(xV, YV, zV), xV.HVV(0)), VV - this.heldItemState._lastSwingStart < this.heldItemState.swingDuration) {
```

#### 1180. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9731` → after: `L9374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9374) · [Before (L9731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9731)

```diff
-         OM ? (0, yM.q)(this.firstPersonMesh, OM.x, OM.y, OM.z, OM.w) : (this.firstPersonMesh.rotationQuaternion = null, this.firstPersonMesh.rotation.set(iM.x, iM.y, iM.z)), (0, yM.p)(this.firstPersonMesh, rM.x, rM.y, rM.z)
+         JV ? (0, BV.t)(this.firstPersonMesh, JV.x, JV.y, JV.z, JV.w) : (this.firstPersonMesh.rotationQuaternion = null, this.firstPersonMesh.rotation.set(xV.x, xV.y, xV.z)), (0, BV.q)(this.firstPersonMesh, eV.x, eV.y, eV.z)
```

#### 1181. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9734` → after: `L9377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9377) · [Before (L9734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9734)

```diff
-         if (this.reposeIfDrivingChanged(), !this.Cm.CL.DJ) return;
+         if (this.reposeIfDrivingChanged(), !this.iv.gZ.eE) return;
```

#### 1182. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9736` → after: `L9379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9379) · [Before (L9736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9736)

```diff
-         null !== rM && this.Cm.CL.Dk.getActuallyVisible(rM) && this._updateHeldMeshLighting()
+         null !== eV && this.iv.gZ.YC.getActuallyVisible(eV) && this._updateHeldMeshLighting()
```

#### 1183. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9740` → after: `L9383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9383) · [Before (L9740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9740)

```diff
-         return null !== (MM = null === (rM = (0, tM.getRigController)(this.Cm, this.heldItemState.HZ)) || void 0 === rM ? void 0 : rM.stateWeight("arms", "driving")) && void 0 !== MM ? MM : 0
+         return null !== (VV = null === (eV = (0, XV.getRigController)(this.iv, this.heldItemState.zC)) || void 0 === eV ? void 0 : eV.stateWeight("arms", "driving")) && void 0 !== VV ? VV : 0
```

#### 1184. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9745` → after: `L9388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9388) · [Before (L9745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9745)

```diff
-         MM !== this.drivingShare && (Math.abs(MM - this.drivingShare) > .01 || 0 === MM || 1 === MM) && (this.drivingShare = MM, this.wQM())
+         VV !== this.drivingShare && (Math.abs(VV - this.drivingShare) > .01 || 0 === VV || 1 === VV) && (this.drivingShare = VV, this.fwV())
```

#### 1185. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9750-L9751` → after: `L9393-L9394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9393-L9394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9393-L9394) · [Before (L9750-L9751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9750-L9751)

```diff
-       tQM() {
-         if (this.isFirstPersonLocalPlayer()) return this.firstPersonMesh.kR(!0), this.releaseThirdPersonThinObject(), this.firstPersonMesh.parent = this.Cm.CL.camera, this.firstPersonMesh.UL.set(.1, .1, .1), void this.setFirstPersonMeshPosition(Date.now());
+       mwV() {
+         if (this.isFirstPersonLocalPlayer()) return this.firstPersonMesh.pW(!0), this.releaseThirdPersonThinObject(), this.firstPersonMesh.parent = this.iv.gZ.camera, this.firstPersonMesh.WZ.set(.1, .1, .1), void this.setFirstPersonMeshPosition(Date.now());
```

#### 1186. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9754` → after: `L9397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9397) · [Before (L9754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9754)

```diff
-         this.firstPersonMesh.kR(!1);
+         this.firstPersonMesh.pW(!1);
```

#### 1187. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9762` → after: `L9405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9405) · [Before (L9762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9762)

```diff
-             jM = MM.rotation, aM = MM.quaternion, PM = MM.usesQuaternion, nM = this.drivingShare, QM = MM.quaternion, (0, EM.i)(GM[0] * nM, GM[1] * nM, GM[2] * nM, CM), dM.Matrix.FromQuaternionToRef(dM.Quaternion.FromArrayToRef(CM, 0, eM), bM), bM.transposeToRef(bM), PM ? dM.Matr … [truncated]
+             UV = VV.rotation, yV = VV.quaternion, pV = VV.usesQuaternion, QV = this.drivingShare, nV = VV.quaternion, (0, qV.p)(FV[0] * QV, FV[1] * QV, FV[2] * QV, TV), EV.Matrix.FromQuaternionToRef(EV.Quaternion.FromArrayToRef(TV, 0, PV), AV), AV.transposeToRef(AV), pV ? EV.Matr … [truncated]
```

#### 1188. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9766` → after: `L9409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9409) · [Before (L9766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9766)

```diff
-           const [MM, iM, jM] = null !== (OM = rM.itemOffset) && void 0 !== OM ? OM : [0, 0, 0], [aM, PM, nM] = null !== (SM = rM.rotation) && void 0 !== SM ? SM : [0, 0, 0];
+           const [VV, xV, UV] = null !== (JV = eV.itemOffset) && void 0 !== JV ? JV : [0, 0, 0], [yV, pV, QV] = null !== (YV = eV.rotation) && void 0 !== YV ? YV : [0, 0, 0];
```

#### 1189. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9776` → after: `L9419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9419) · [Before (L9776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9776)

```diff
-           UL: QM
+           WZ: nV
```

#### 1190. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9779` → after: `L9422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9422) · [Before (L9779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9779)

```diff
-         const zM = (0, aM.c)(this.typeObj.type),
+         const wV = (0, yV.b)(this.typeObj.type),
```

#### 1191. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9786-L9788` → after: `L9429-L9431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9429-L9431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9429-L9431) · [Before (L9786-L9788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9786-L9788)

```diff
-           dM.sh.TransformCoordinatesFromFloatsToRef(mM, HM, hM, MM, PM)
-         } else PM.iMM(mM, HM, hM);
-         zM ? (QM.iMM(LM, LM, LM), nM.iMM(OM, Math.PI / 2 + SM, -Math.PI / 2 + jM)) : "TwoDTool" === this.typeObj.type || this.typeObj.holdAsAiming ? (QM.iMM(LM, -LM, LM), nM.iMM(Math.PI + OM, Math.PI / 2 + SM, .35 * Math.PI + jM)) : (QM.iMM(LM, -LM, LM), nM.iMM(Math.PI + OM, Math … [truncated]
+           EV.Ik.TransformCoordinatesFromFloatsToRef(vV, rV, kV, VV, pV)
+         } else pV.FeV(vV, rV, kV);
+         wV ? (nV.FeV(ZV, ZV, ZV), QV.FeV(JV, Math.PI / 2 + YV, -Math.PI / 2 + UV)) : "TwoDTool" === this.typeObj.type || this.typeObj.holdAsAiming ? (nV.FeV(ZV, -ZV, ZV), QV.FeV(Math.PI + JV, Math.PI / 2 + YV, .35 * Math.PI + UV)) : (nV.FeV(ZV, -ZV, ZV), QV.FeV(Math.PI + JV, Math … [truncated]
```

#### 1192. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9801-L9805` → after: `L9444-L9448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9444-L9448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9444-L9448) · [Before (L9801-L9805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9801-L9805)

```diff
-     var sM = iM(39376),
-       DM = iM(39083),
-       kM = iM(38782),
-       ZM = iM(9816),
-       oM = iM(9863);
+     var gV = xV(39534),
+       DV = xV(39243),
+       iV = xV(38961),
+       CV = xV(9820),
+       aV = xV(9861);
```

#### 1193. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9822` → after: `L9465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9465) · [Before (L9822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9822)

```diff
-         return rM === oM.b.bot ? [0, 1, 0] : rM === oM.b.top ? [0, -1, 0] : fM[iM]
+         return eV === aV.e.bot ? [0, 1, 0] : eV === aV.e.top ? [0, -1, 0] : oV[xV]
```

#### 1194. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9845-L9854` → after: `L9488-L9497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9488-L9497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9488-L9497) · [Before (L9845-L9854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9845-L9854)

```diff
-     var xM = iM(39414),
-       vM = iM(9868),
-       FM = iM(39218),
-       BM = iM(38572),
-       XM = iM(4129),
-       IM = iM(38451),
-       KM = iM(19),
-       qM = iM(1464),
-       TM = iM(39017),
-       VM = iM(39020);
+     var LV = xV(39562),
+       fV = xV(9873),
+       mV = xV(39352),
+       KV = xV(38765),
+       HV = xV(4163),
+       uV = xV(38660),
+       sV = xV(27),
+       SV = xV(1473),
+       IV = xV(39195),
+       dV = xV(39199);
```

#### 1195. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9861-L9862` → after: `L9504-L9505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9504-L9505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9504-L9505) · [Before (L9861-L9862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9861-L9862)

```diff
-             const OM = (0, HM.f)();
-             return OM.nL.qB(OM.uL.YB(MM, rM, iM))
+             const JV = (0, rV.d)();
+             return JV.jZ.I3(JV.cZ.K3(VV, eV, xV))
```

#### 1196. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9867` → after: `L9510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9510) · [Before (L9867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9867)

```diff
-           return !(null === (MM = (0, HM.f)().aU) || void 0 === MM || !MM.ezBridging) && KM.d.get("clientEscMenuOptions").ezBridging
+           return !(null === (VV = (0, rV.d)().mF) || void 0 === VV || !VV.ezBridging) && sV.b.get("clientEscMenuOptions").ezBridging
```

#### 1197. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9872-L9875` → after: `L9515-L9518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9515-L9518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9515-L9518) · [Before (L9872-L9875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9872-L9875)

```diff
-           const OM = (0, HM.f)();
-           if (OM.pMM) return null;
-           if (OM.WMM) return null;
-           const SM = OM.hU.XE(OM.eD),
+           const JV = (0, rV.d)();
+           if (JV.IeV) return null;
+           if (JV.deV) return null;
+           const YV = JV.sF.YF(JV.bD),
```

#### 1198. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9877` → after: `L9520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9520) · [Before (L9877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9877)

```diff
-             aM = KM.d.get("isTouchScreen") || (0, qM.l)() ? void 0 : SM,
+             yV = sV.b.get("isTouchScreen") || (0, SV.m)() ? void 0 : YV,
```

#### 1199. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9879-L9884` → after: `L9522-L9527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9522-L9527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9522-L9527) · [Before (L9879-L9884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9879-L9884)

```diff
-           OM.jT(null !== (rM = OM.KMM) && void 0 !== rM ? rM : OM.camera.lq(), PM);
-           const nM = null !== (iM = OM.qMM) && void 0 !== iM ? iM : OM.camera.eT(),
-             QM = (OM.KMM ? OM.camera.zK : 0) + (0, HM.b)().getBlockReach(OM.eD),
-             zM = OM.pickBlock(PM, nM, QM, ((rM, iM, SM, PM) => !!OM.RMM(rM) || !(SM > jM || OM.hU.lrM(iM, SM, PM, OM.nL.Xx(MM))) && (!!TM.b.has(iM, SM, PM) || (0, kM.j)(this.isSolidAt, iM, SM, PM, aM))));
-           if (!zM || OM.RMM(zM.VV)) return null;
-           if (TM.b.has(zM.position[0], zM.position[1], zM.position[2])) return null;
+           JV.i_(null !== (eV = JV.rxV) && void 0 !== eV ? eV : JV.camera.T_(), pV);
+           const QV = null !== (xV = JV.kxV) && void 0 !== xV ? xV : JV.camera.L_(),
+             nV = (JV.rxV ? JV.camera.y_ : 0) + (0, rV.b)().getBlockReach(JV.bD),
+             wV = JV.pickBlock(pV, QV, nV, ((eV, xV, YV, pV) => !!JV.SeV(eV) || !(YV > UV || JV.sF.axV(xV, YV, pV, JV.jZ.DH(VV))) && (!!IV.e.has(xV, YV, pV) || (0, iV.s)(this.isSolidAt, xV, YV, pV, yV))));
+           if (!wV || JV.SeV(wV.VVV)) return null;
+           if (IV.e.has(wV.position[0], wV.position[1], wV.position[2])) return null;
```

#### 1200. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9886-L9887` → after: `L9529-L9530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9529-L9530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9529-L9530) · [Before (L9886-L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9886-L9887)

```diff
-           const LM = (0, kM.o)(PM, nM, zM.position);
-           return LM > QM ? null : this.canPlaceAt(zM.position, zM.VV, MM) ? OM.LH(PM, nM, LM + kM.c, OM.RMM) ? null : {
+           const ZV = (0, iV.x)(pV, QV, wV.position);
+           return ZV > nV ? null : this.canPlaceAt(wV.position, wV.VVV, VV) ? JV.Pr(pV, QV, ZV + iV.b, JV.SeV) ? null : {
```

#### 1201. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9894-L9896` → after: `L9537-L9539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9537-L9539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9537-L9539) · [Before (L9894-L9896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9894-L9896)

```diff
-           const rM = (0, HM.f)();
-           if (!MM || rM.AMM) return void this.hide();
-           this.hadTargetLastFrame = !0, null !== MM.tower || rM.fMM || rM.CL.vMM(!1, null, null);
+           const eV = (0, rV.d)();
+           if (!VV || eV.yxV) return void this.hide();
+           this.hadTargetLastFrame = !0, null !== VV.tower || eV.YxV || eV.gZ.QxV(!1, null, null);
```

#### 1202. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9898-L9899` → after: `L9541-L9542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9541-L9542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9541-L9542) · [Before (L9898-L9899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9898-L9899)

```diff
-             OM = rM.ErM(MM.cell, null, cM);
-           (0, yM.p)(iM, OM[0] + .5, OM[1] + .5, OM[2] + .5), (0, IM.f)(rM, iM, MM.cell[0], MM.cell[1], MM.cell[2]), iM.kR(!0)
+             JV = eV.oxV(VV.cell, null, OV);
+           (0, BV.q)(xV, JV[0] + .5, JV[1] + .5, JV[2] + .5), (0, uV.g)(eV, xV, VV.cell[0], VV.cell[1], VV.cell[2]), xV.pW(!0)
```

#### 1203. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9902` → after: `L9545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9545) · [Before (L9902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9902)

```diff
-           return rM !== iM && (0, HM.b)().playerCanPlaceItem((0, HM.f)().eD, MM[0], MM[1], MM[2], iM)
+           return eV !== xV && (0, rV.b)().playerCanPlaceItem((0, rV.d)().bD, VV[0], VV[1], VV[2], xV)
```

#### 1204. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9906` → after: `L9549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9549) · [Before (L9906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9906)

```diff
-           null === (MM = this.ghostMesh) || void 0 === MM || MM.kR(!1), this.hadTargetLastFrame && (this.hadTargetLastFrame = !1, (0, HM.f)().DMM(!0))
+           null === (VV = this.ghostMesh) || void 0 === VV || VV.pW(!1), this.hadTargetLastFrame && (this.hadTargetLastFrame = !1, (0, rV.d)().VxV(!0))
```

#### 1205. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9909` → after: `L9552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9552) · [Before (L9909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9909)

```diff
-           return this.ghostMesh || (this.ghostMesh = (0, VM.h)((0, HM.f)())), this.ghostMesh
+           return this.ghostMesh || (this.ghostMesh = (0, dV.g)((0, rV.d)())), this.ghostMesh
```

#### 1206. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9912-L9915` → after: `L9555-L9558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9555-L9558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9555-L9558) · [Before (L9912-L9915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9912-L9915)

```diff
-     var Or = iM(39384),
-       Sr = iM(39388),
-       jr = iM(6936),
-       ar = iM(255);
+     var Je = xV(39538),
+       Ye = xV(39544),
+       Ue = xV(7018),
+       ye = xV(313);
```

#### 1207. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9919-L9920` → after: `L9562-L9563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9562-L9563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9562-L9563) · [Before (L9919-L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9919-L9920)

```diff
-         const rM = (0, ar.f)();
-         return null !== rM && null !== (MM = (0, HM.f)().aU) && void 0 !== MM && MM.ezTowering && KM.d.get("clientEscMenuOptions").ezTowering ? rM : null
+         const eV = (0, ye.d)();
+         return null !== eV && null !== (VV = (0, rV.d)().mF) && void 0 !== VV && VV.ezTowering && sV.b.get("clientEscMenuOptions").ezTowering ? eV : null
```

#### 1208. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9923-L9924` → after: `L9566-L9567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9566-L9567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9566-L9567) · [Before (L9923-L9924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9923-L9924)

```diff
-         const iM = (0, HM.f)(),
-           OM = iM.pMM;
+         const xV = (0, rV.d)(),
+           JV = xV.IeV;
```

#### 1209. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9926-L9930` → after: `L9569-L9573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9569-L9573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9569-L9573) · [Before (L9926-L9930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9926-L9930)

```diff
-         if (!iM.nL.qB(OM.VV) || ZM.k[OM.VV].canBePlacedOver) return null;
-         const SM = iM.eD,
-           [jM, aM, PM] = OM.zd;
-         if (aM !== Math.floor(iM.hU.XE(SM)[1])) return null;
-         const nM = iM.hU.grM(SM);
+         if (!xV.jZ.I3(JV.VVV) || CV.k[JV.VVV].canBePlacedOver) return null;
+         const YV = xV.bD,
+           [UV, yV, pV] = JV.FE;
+         if (yV !== Math.floor(xV.sF.YF(YV)[1])) return null;
+         const QV = xV.sF.HxV(YV);
```

#### 1210. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9934-L9936` → after: `L9577-L9579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9577-L9579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9577-L9579) · [Before (L9934-L9936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9934-L9936)

```diff
-         if (iM.hU.Av(SM).resting[1] >= 0 && !0 !== iM.nL.UH(OM.VV)) return null;
-         if (TM.b.has(jM, aM, PM)) return null;
-         const zM = (MM, rM, OM) => iM.sE([MM, rM, OM]),
+         if (xV.sF.uH(YV).resting[1] >= 0 && !0 !== xV.jZ.Dr(JV.VVV)) return null;
+         if (IV.e.has(UV, yV, pV)) return null;
+         const wV = (VV, eV, JV) => xV.mq([VV, eV, JV]),
```

#### 1211. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9938-L9940` → after: `L9581-L9583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9581-L9583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9581-L9583) · [Before (L9938-L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9938-L9940)

```diff
-         if (0 !== LM && !ZM.k[LM].CH && !ZM.k[LM].canBePlacedOver || AM(zM, OM.position, OM.normal, MM)) return null;
-         const mM = iM.nL.Xx(MM);
-         return iM.hU.lrM(jM, aM, PM, mM) && (0, HM.b)().playerCanPlaceItem(SM, jM, aM, PM, MM, !0) && this.liftsOnto(jM, aM, PM, MM) ? {
+         if (0 !== ZV && !CV.k[ZV].Cr && !CV.k[ZV].canBePlacedOver || lV(wV, JV.position, JV.normal, VV)) return null;
+         const vV = xV.jZ.DH(VV);
+         return xV.sF.axV(UV, yV, pV, vV) && (0, rV.b)().playerCanPlaceItem(YV, UV, yV, pV, VV, !0) && this.liftsOnto(UV, yV, pV, VV) ? {
```

#### 1212. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9947-L9949` → after: `L9590-L9592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9590-L9592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9590-L9592) · [Before (L9947-L9949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9947-L9949)

```diff
-         const MM = (0, HM.f)(),
-           rM = MM.eD,
-           iM = MM.hU.nrM(rM),
+         const VV = (0, rV.d)(),
+           eV = VV.bD,
+           xV = VV.sF.XxV(eV),
```

#### 1213. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9951` → after: `L9594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9594) · [Before (L9951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9951)

```diff
-         return !iM._flying && !(0, jr.g)(!0 === OM.getClientPredictedOption(rM, "creative"), iM.physicsState.type) && OM.getClientPredictedOption(rM, "jumpAmount") > 0
+         return !xV._flying && !(0, Ue.f)(!0 === JV.getClientPredictedOption(eV, "creative"), xV.physicsState.type) && JV.getClientPredictedOption(eV, "jumpAmount") > 0
```

#### 1214. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9954` → after: `L9597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9597) · [Before (L9954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9954)

```diff
-         const SM = (0, HM.f)(),
+         const YV = (0, rV.d)(),
```

#### 1215. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9957-L9958` → after: `L9600-L9601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9600-L9601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9600-L9601) · [Before (L9957-L9958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9957-L9958)

```diff
-             uL: aM,
-             Am: PM
+             cZ: yV,
+             Vr: pV
```

#### 1216. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9960` → after: `L9603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9603) · [Before (L9960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9960)

```diff
-           nM = SM.hU.Av(SM.eD);
+           QV = YV.sF.uH(YV.bD);
```

#### 1217. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9962` → after: `L9605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9605) · [Before (L9962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9962)

```diff
-         return (0, Or.g)(((jM, nM, QM) => {
+         return (0, Je.i)(((UV, QV, nV) => {
```

#### 1218. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9966-L9969` → after: `L9609-L9612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9609-L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9609-L9612) · [Before (L9966-L9969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9966-L9969)

```diff
-           if (zM !== MM || LM !== rM || mM !== iM) return aM.Fm(zM, LM, mM);
-           const HM = SM.nL.UH(OM);
-           return (0, Sr.f)(MM, rM, iM, OM, HM, aM.Ix, aM.Fi, aM.Qv)
-         }), jM.qN, nM.hm) > 0
+           if (wV !== VV || ZV !== eV || vV !== xV) return yV.Jr(wV, ZV, vV);
+           const rV = YV.jZ.Dr(JV);
+           return (0, Ye.h)(VV, eV, xV, JV, rV, yV.iH, yV.eJ, yV.lH)
+         }), UV.xH, QV.Xv) > 0
```

#### 1219. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9988-L9989` → after: `L9631-L9632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9631-L9632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9631-L9632) · [Before (L9988-L9989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9988-L9989)

```diff
-         const SM = (0, HM.f)(),
-           jM = SM.eD,
+         const YV = (0, rV.d)(),
+           UV = YV.bD,
```

#### 1220. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9993` → after: `L9636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9636) · [Before (L9993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9993)

```diff
-           } = SM.hU.jK(jM);
+           } = YV.sF.U_(UV);
```

#### 1221. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L9998` → after: `L9641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9641) · [Before (L9998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L9998)

```diff
-         }(aM, PM, OM.cell) || 0 !== SM.hU.grM(jM).speed || null !== (0, HM.b)().getRiddenVehicleEId(jM) || !iM() ? (this.pending = null, null) : aM[1] >= OM.cell[1] + 1 ? (this.pending = null, OM.cell) : (Qr(), null)
+         }(yV, pV, JV.cell) || 0 !== YV.sF.HxV(UV).speed || null !== (0, rV.b)().getRiddenVehicleEId(UV) || !xV() ? (this.pending = null, null) : yV[1] >= JV.cell[1] + 1 ? (this.pending = null, JV.cell) : (ne(), null)
```

#### 1222. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10003-L10004` → after: `L9646-L9647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9646-L9647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9646-L9647) · [Before (L10003-L10004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10003-L10004)

```diff
-       const MM = (0, HM.f)();
-       MM.hU.Av(MM.eD).resting[1] < 0 && (MM.hU.iiM().towerJump = !0)
+       const VV = (0, rV.d)();
+       VV.sF.uH(VV.bD).resting[1] < 0 && (VV.sF.tJV().towerJump = !0)
```

#### 1223. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10006-L10007` → after: `L9649-L9650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9649-L9650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9649-L9650) · [Before (L10006-L10007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10006-L10007)

```diff
-     var zr = iM(39184),
-       Lr = iM(38922);
+     var we = xV(39321),
+       Ze = xV(39097);
```

#### 1224. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10010` → after: `L9653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9653) · [Before (L10010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10010)

```diff
-         super(...arguments), this.assistTarget = null, this.towerJump = new nr, this.holdsBlock = () => null !== this.getBlockIdToPlace(), this.blockAt = (MM, rM, iM) => this.Cm.sE([MM, rM, iM])
+         super(...arguments), this.assistTarget = null, this.towerJump = new Qe, this.holdsBlock = () => null !== this.getBlockIdToPlace(), this.blockAt = (VV, eV, xV) => this.iv.mq([VV, eV, xV])
```

#### 1225. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10012-L10014` → after: `L9655-L9657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9655-L9657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9655-L9657) · [Before (L10012-L10014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10012-L10014)

```diff
-       gQM() {
-         const MM = super.gQM();
-         return MM.tookAction || MM.preventPlacement ? MM : (this.place(), {
+       KwV() {
+         const VV = super.KwV();
+         return VV.tookAction || VV.preventPlacement ? VV : (this.place(), {
```

#### 1226. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10019-L10021` → after: `L9662-L9664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9662-L9664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9662-L9664) · [Before (L10019-L10021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10019-L10021)

```diff
-       XiM() {
-         const MM = super.XiM();
-         return MM.tookAction || MM.preventPlacement ? MM : (this.place(), {
+       ZYV() {
+         const VV = super.ZYV();
+         return VV.tookAction || VV.preventPlacement ? VV : (this.place(), {
```

#### 1227. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10027` → after: `L9670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9670) · [Before (L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10027)

```diff
-         if (super.bL(MM, rM), this.heldItemState.HZ === this.Cm.eD) {
+         if (super.iZ(VV, eV), this.heldItemState.zC === this.iv.bD) {
```

#### 1228. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10032` → after: `L9675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9675) · [Before (L10032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10032)

```diff
-           null !== OM && (0, kM.l)(OM) ? this.Cm.pMM ? this.assistTarget = null !== iM ? Pr.computeTarget(OM, iM) : null : this.assistTarget = MM ? ir.computeTarget(OM) : null : this.assistTarget = null
+           null !== JV && (0, iV.u)(JV) ? this.iv.IeV ? this.assistTarget = null !== xV ? pe.computeTarget(JV, xV) : null : this.assistTarget = VV ? xe.computeTarget(JV) : null : this.assistTarget = null
```

#### 1229. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10039` → after: `L9682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9682) · [Before (L10039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10039)

```diff
-         super.reset(), this.heldItemState.HZ === this.Cm.eD && (this.assistTarget = null, this.towerJump.reset(), ir.hide())
+         super.reset(), this.heldItemState.zC === this.iv.bD && (this.assistTarget = null, this.towerJump.reset(), xe.hide())
```

#### 1230. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10044` → after: `L9687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9687) · [Before (L10044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10044)

```diff
-           ta: rM.cell,
+           Gy: eV.cell,
```

#### 1231. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10046` → after: `L9689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9689) · [Before (L10046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10046)

```diff
-           kN: null,
+           WK: null,
```

#### 1232. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10052` → after: `L9695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9695) · [Before (L10052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10052)

```diff
-         const iM = this.Cm.pMM;
+         const xV = this.iv.IeV;
```

#### 1233. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10056-L10057` → after: `L9699-L9700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9699-L9700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9699-L9700) · [Before (L10056-L10057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10056-L10057)

```diff
-           kN: iM.kN,
-           targetId: iM.VV,
+           WK: xV.WK,
+           targetId: xV.VVV,
```

#### 1234. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10063` → after: `L9706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9706) · [Before (L10063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10063)

```diff
-           ta: iM.position,
+           Gy: xV.position,
```

#### 1235. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10067` → after: `L9710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9710) · [Before (L10067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10067)

```diff
-         return SM && (0, HM.b)().posSatisfiesModifyConstraints(this.Cm.eD, SM.pos[0], SM.pos[1], SM.pos[2]) ? {
+         return YV && (0, rV.b)().posSatisfiesModifyConstraints(this.iv.bD, YV.pos[0], YV.pos[1], YV.pos[2]) ? {
```

#### 1236. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10069` → after: `L9712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9712) · [Before (L10069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10069)

```diff
-           ta: SM.pos,
+           Gy: YV.pos,
```

#### 1237. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10073` → after: `L9716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9716) · [Before (L10073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10073)

```diff
-           ta: iM.zd,
+           Gy: xV.FE,
```

#### 1238. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10078-L10080` → after: `L9721-L9723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9721-L9723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9721-L9723) · [Before (L10078-L10080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10078-L10080)

```diff
-         if (!this.Cm.hU.BMM(this.Cm.eD, this.Cm.hU.names.inventory)) return this.Cm.aU ? jM.A[this.Cm.aU.defaultBlock].id : null;
-         const MM = this.Cm.hU.urM(this.Cm.eD).selectedItem;
-         return MM && (0, aM.g)(MM.typeObj.type) ? MM.typeObj.id : null
+         if (!this.iv.sF.wxV(this.iv.bD, this.iv.sF.names.inventory)) return this.iv.mF ? UV.E[this.iv.mF.defaultBlock].id : null;
+         const VV = this.iv.sF.uxV(this.iv.bD).selectedItem;
+         return VV && (0, yV.e)(VV.typeObj.type) ? VV.typeObj.id : null
```

#### 1239. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10083` → after: `L9726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9726) · [Before (L10083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10083)

```diff
-         const iM = this.towerJump.bL(MM, rM, this.holdsBlock);
+         const xV = this.towerJump.iZ(VV, eV, this.holdsBlock);
```

#### 1240. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10085` → after: `L9728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9728) · [Before (L10085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10085)

```diff
-           const MM = this.Cm.sE([iM[0], iM[1] - 1, iM[2]]);
+           const VV = this.iv.mq([xV[0], xV[1] - 1, xV[2]]);
```

#### 1241. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10087` → after: `L9730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9730) · [Before (L10087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10087)

```diff
-             ta: iM,
+             Gy: xV,
```

#### 1242. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10089` → after: `L9732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9732) · [Before (L10089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10089)

```diff
-             kN: null,
+             WK: null,
```

#### 1243. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10099` → after: `L9742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9742) · [Before (L10099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10099)

```diff
-         MM && ("jump" !== MM.tower ? this.placeBlock(MM) : this.towerJump.press(MM.ta, Date.now()))
+         VV && ("jump" !== VV.tower ? this.placeBlock(VV) : this.towerJump.press(VV.Gy, Date.now()))
```

#### 1244. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10103` → after: `L9746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9746) · [Before (L10103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10103)

```diff
-         const iM = this.Cm.hU.BMM(this.Cm.eD, this.Cm.hU.names.inventory),
+         const xV = this.iv.sF.wxV(this.iv.bD, this.iv.sF.names.inventory),
```

#### 1245. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10105` → after: `L9748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9748) · [Before (L10105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10105)

```diff
-             ta: OM,
+             Gy: JV,
```

#### 1246. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10111-L10113` → after: `L9754-L9756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9754-L9756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9754-L9756) · [Before (L10111-L10113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10111-L10113)

```diff
-             aU: zM
-           } = this.Cm,
-           LM = (0, kM.d)(zM.creative, QM ? zM.ezToweringGrowMs : zM.ezBridgingGrowMs),
+             mF: wV
+           } = this.iv,
+           ZV = (0, iV.e)(wV.creative, nV ? wV.ezToweringGrowMs : wV.ezBridgingGrowMs),
```

#### 1247. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10115-L10116` → after: `L9758-L9759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9758-L9759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9758-L9759) · [Before (L10115-L10116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10115-L10116)

```diff
-         if (hM && TM.b.has(OM[0], OM[1], OM[2])) return;
-         const JM = (0, HM.b)().posSatisfiesModifyConstraints(this.Cm.eD, OM[0], OM[1], OM[2]);
+         if (kV && IV.e.has(JV[0], JV[1], JV[2])) return;
+         const bV = (0, rV.b)().posSatisfiesModifyConstraints(this.iv.bD, JV[0], JV[1], JV[2]);
```

#### 1248. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10119` → after: `L9762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9762) · [Before (L10119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10119)

```diff
-           if (null !== nM ? rM = nM : null === jM.A[rM].meta.rot && null === jM.A[rM].meta.halfblockPlacement || (rM = this.getPlaceBlockRotatedId(rM, MM)), rM = (0, xM.d)(this.blockAt, zM, JM, yM, rM), (0, HM.b)().playerCanPlaceItem(this.Cm.eD, zM, JM, yM, rM, QM)) {
+           if (null !== QV ? eV = QV : null === UV.E[eV].meta.rot && null === UV.E[eV].meta.halfblockPlacement || (eV = this.getPlaceBlockRotatedId(eV, VV)), eV = (0, LV.d)(this.blockAt, wV, bV, BV, eV), (0, rV.b)().playerCanPlaceItem(this.iv.bD, wV, bV, BV, eV, nV)) {
```

#### 1249. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10121-L10123` → after: `L9764-L9766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9764-L9766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9764-L9766) · [Before (L10121-L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10121-L10123)

```diff
-             const MM = this.Cm.sE([zM, JM, yM]);
-             if ((null !== nM || 0 === MM || ZM.k[MM].CH || null !== (dM = ZM.k[MM]) && void 0 !== dM && dM.canBePlacedOver) && rM !== MM) {
-               this.Cm.hU.grM(this.heldItemState.HZ).setArmsAreSwinging();
+             const VV = this.iv.mq([wV, bV, BV]);
+             if ((null !== QV || 0 === VV || CV.k[VV].Cr || null !== (EV = CV.k[VV]) && void 0 !== EV && EV.canBePlacedOver) && eV !== VV) {
+               this.iv.sF.HxV(this.heldItemState.zC).setArmsAreSwinging();
```

#### 1250. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10127-L10133` → after: `L9770-L9776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9770-L9776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9770-L9776) · [Before (L10127-L10133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10127-L10133)

```diff
-                   (0, PM.sendColyMessage)(XM.jg, {
-                     ta: MM,
-                     Ca: rM,
-                     ga: (0, jM.m)(),
-                     ua: iM,
-                     Ra: OM,
-                     ha: SM
+                   (0, pV.sendColyMessage)(HV.hg, {
+                     Gy: VV,
+                     Ny: eV,
+                     Wy: (0, UV.q)(),
+                     Ry: xV,
+                     gy: JV,
+                     By: YV
```

#### 1251. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10135-L10136` → after: `L9778-L9779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9778-L9779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9778-L9779) · [Before (L10135-L10136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10135-L10136)

```diff
-                 }(nM, rM, aM, QM, (0, HM.b)().client.inventoryPrediction.record(zr.e.place((() => dM)))), hM ? TM.b.addUnconfirmed(nM, rM, LM) : ((0, HM.b)().cW(nM[0], nM[1], nM[2], rM, void 0, this.Cm.eD), (0, Lr.i)(nM[0], nM[1], nM[2]), (0, jM.D)(rM, !1)), (0, HM.b)().client.tr … [truncated]
-                 const MM = this.Cm.hU.urM(this.Cm.eD);
+                 }(QV, eV, yV, nV, (0, rV.b)().client.inventoryPrediction.record(we.b.place((() => EV)))), kV ? IV.e.addUnconfirmed(QV, eV, ZV) : ((0, rV.b)().gR(QV[0], QV[1], QV[2], eV, void 0, this.iv.bD), (0, Ze.i)(QV[0], QV[1], QV[2]), (0, UV.I)(eV, !1)), (0, rV.b)().client.tr … [truncated]
+                 const VV = this.iv.sF.uxV(this.iv.bD);
```

#### 1252. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10139` → after: `L9782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9782) · [Before (L10139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10139)

```diff
-               aM || ("Board" === this.bloxd.getMetaInfo(rM).rootName && mM.i.Tz("EditBoard", {
+               yV || ("Board" === this.bloxd.getMetaInfo(eV).rootName && vV.h.QZ("EditBoard", {
```

#### 1253. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10141` → after: `L9784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9784) · [Before (L10141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10141)

```diff
-               }), "Custom Lobby Block" === this.bloxd.getMetaInfo(rM).rootName && mM.i.Tz("EditCustomLobbyBlock", {
+               }), "Custom Lobby Block" === this.bloxd.getMetaInfo(eV).rootName && vV.h.QZ("EditCustomLobbyBlock", {
```

#### 1254. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10146-L10147` → after: `L9789-L9790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9789-L9790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9789-L9790) · [Before (L10146-L10147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10146-L10147)

```diff
-         } else JM || !this.Cm.aU.canChange && !this.Cm.aU.cantChangeError && "You cannot modify this block" === this.Cm.aU.cantChangeError || mM.i.Tz("showBottomMessage", {
-           message: this.Cm.aU.cantBuildError || this.Cm.aU.cantChangeError,
+         } else bV || !this.iv.mF.canChange && !this.iv.mF.cantChangeError && "You cannot modify this block" === this.iv.mF.cantChangeError || vV.h.QZ("showBottomMessage", {
+           message: this.iv.mF.cantBuildError || this.iv.mF.cantChangeError,
```

#### 1255. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10153` → after: `L9796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9796) · [Before (L10153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10153)

```diff
-           ta: iM,
+           Gy: xV,
```

#### 1256. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10155` → after: `L9798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9798) · [Before (L10155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10155)

```diff
-           kN: SM,
+           WK: YV,
```

#### 1257. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10165` → after: `L9808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9808) · [Before (L10165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10165)

```diff
-         if ((0, vM.B)(ZM.k[PM])) return ZM.k[this.getVariantName(aM, this.getFacingRot(), null)].id;
+         if ((0, fV.r)(CV.k[pV])) return CV.k[this.getVariantName(yV, this.getFacingRot(), null)].id;
```

#### 1258. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10168-L10169` → after: `L9811-L9812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9811-L9812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9811-L9812) · [Before (L10168-L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10168-L10169)

```diff
-         if (nM && (zM = 1 === OM[1] ? "bot" : -1 === OM[1] ? "top" : "side"), 0 === OM[1] ? 1 === OM[0] ? QM = 2 : 1 === OM[2] ? QM = 1 : -1 === OM[0] ? QM = 4 : (-1 === OM[2] || console.error("invalid normal", OM), QM = 3) : QM = nM && "rotatable" !== ZM.k[PM].model ? 1 : this.g … [truncated]
-           const MM = (0, FM.o)(this.blockAt, iM, jM, OM, QM);
+         if (QV && (wV = 1 === JV[1] ? "bot" : -1 === JV[1] ? "top" : "side"), 0 === JV[1] ? 1 === JV[0] ? nV = 2 : 1 === JV[2] ? nV = 1 : -1 === JV[0] ? nV = 4 : (-1 === JV[2] || console.error("invalid normal", JV), nV = 3) : nV = QV && "rotatable" !== CV.k[pV].model ? 1 : this.g … [truncated]
+           const VV = (0, mV.h)(this.blockAt, xV, UV, JV, nV);
```

#### 1259. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10177` → after: `L9820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9820) · [Before (L10177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10177)

```diff
-         return OM[1] = `rot${rM}`, null !== iM && (OM[2] = iM), OM.join("|") === ZM.k[MM].meta.metaStr ? MM : [MM, ...OM].join("|")
+         return JV[1] = `rot${eV}`, null !== xV && (JV[2] = xV), JV.join("|") === CV.k[VV].meta.metaStr ? VV : [VV, ...JV].join("|")
```

#### 1260. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10180` → after: `L9823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9823) · [Before (L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10180)

```diff
-         const MM = LM.d.mod(BM.b.getAimHeading(this.Cm) + Math.PI, 2 * Math.PI);
+         const VV = ZV.b.mod(KV.e.getAimHeading(this.iv) + Math.PI, 2 * Math.PI);
```

#### 1261. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10184-L10186` → after: `L9827-L9829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9827-L9829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9827-L9829) · [Before (L10184-L10186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10184-L10186)

```diff
-     var Hr = iM(37699),
-       hr = iM(37975);
-     const Jr = (0, hr.i)(["Wood Crossbow", "Stone Crossbow", "Iron Crossbow", "Gold Crossbow", "Diamond Crossbow"], "Crossbow"),
+     var re = xV(37925),
+       ke = xV(38212);
+     const be = (0, ke.j)(["Wood Crossbow", "Stone Crossbow", "Iron Crossbow", "Gold Crossbow", "Diamond Crossbow"], "Crossbow"),
```

#### 1262. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10188` → after: `L9831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9831) · [Before (L10188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10188)

```diff
-       yr = (0, hr.i)(["Wood Bow", "Stone Bow", "Iron Bow", "Gold Bow", "Diamond Bow"], "Bow");
+       Be = (0, ke.j)(["Wood Bow", "Stone Bow", "Iron Bow", "Gold Bow", "Diamond Bow"], "Bow");
```

#### 1263. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10194` → after: `L9837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9837) · [Before (L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10194)

```diff
-         super.selected(MM, rM), this.heldItemState.HZ === this.Cm.eD && (this.inInvenIdx = this.bloxd.RrM(this.Cm.eD).getSelectedSlotIndex())
+         super.selected(VV, eV), this.heldItemState.zC === this.iv.bD && (this.inInvenIdx = this.bloxd.sxV(this.iv.bD).getSelectedSlotIndex())
```

#### 1264. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10196` → after: `L9839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9839) · [Before (L10196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10196)

```diff
-       uQM() {
+       HwV() {
```

#### 1265. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10199-L10200` → after: `L9842-L9843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9842-L9843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9842-L9843) · [Before (L10199-L10200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10199-L10200)

```diff
-       AiM() {
-         return super.AiM(), this.upFire()
+       yYV() {
+         return super.yYV(), this.upFire()
```

#### 1266. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10209` → after: `L9852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9852) · [Before (L10209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10209)

```diff
-         return super.uQM().tookAction || this.startCharging(Date.now()), {
+         return super.HwV().tookAction || this.startCharging(Date.now()), {
```

#### 1267. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10221-L10222` → after: `L9864-L9865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9864-L9865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9864-L9865) · [Before (L10221-L10222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10221-L10222)

```diff
-         if (super.bL(MM, rM), this.heldItemState.HZ !== this.Cm.eD) return;
-         const iM = this.bloxd.RrM(this.Cm.eD);
+         if (super.iZ(VV, eV), this.heldItemState.zC !== this.iv.bD) return;
+         const xV = this.bloxd.sxV(this.iv.bD);
```

#### 1268. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10225-L10226` → after: `L9868-L9869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9868-L9869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9868-L9869) · [Before (L10225-L10226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10225-L10226)

```diff
-             SM = this.bloxd.getItemStat(this.Cm.eD, this.getHeldName(), "chargeStages");
-           if (this.typeObj.requiresArrow && null === this.bloxd.getNearestArrowInInven(this.Cm.eD, this.inInvenIdx)) this.finishCharging(!1, rM), this.sendFinishCharging(!1, 0, null);
+             YV = this.bloxd.getItemStat(this.iv.bD, this.getHeldName(), "chargeStages");
+           if (this.typeObj.requiresArrow && null === this.bloxd.getNearestArrowInInven(this.iv.bD, this.inInvenIdx)) this.finishCharging(!1, eV), this.sendFinishCharging(!1, 0, null);
```

#### 1269. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10228` → after: `L9871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9871) · [Before (L10228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10228)

```diff
-             const jM = this.typeObj.chargeTime * LM.g.getQuickChargeMultiplier(iM.getItemAtIdx(this.inInvenIdx)) / SM * MM;
+             const UV = this.typeObj.chargeTime * ZV.d.getQuickChargeMultiplier(xV.getItemAtIdx(this.inInvenIdx)) / YV * VV;
```

#### 1270. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10237` → after: `L9880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9880) · [Before (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10237)

```diff
-                 const rM = Jr.includes(this.typeObj.meta.rootId) ? zr.e.replace(this.inInvenIdx, MM, `${(0,hr.d)(this.typeObj.meta.rootName)} Crossbow Charged`) : null;
+                 const eV = be.includes(this.typeObj.meta.rootId) ? we.b.replace(this.inInvenIdx, VV, `${(0,ke.e)(this.typeObj.meta.rootName)} Crossbow Charged`) : null;
```

#### 1271. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10244` → after: `L9887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9887) · [Before (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10244)

```diff
-           this.typeObj.chargeSound && rM - this.lastChargeSoundTime > 200 && (Hr.e.play(this.typeObj.chargeSound, .55 + .1 * Math.random()).rate(.9 + .2 * Math.random()), this.lastChargeSoundTime = rM)
+           this.typeObj.chargeSound && eV - this.lastChargeSoundTime > 200 && (re.d.play(this.typeObj.chargeSound, .55 + .1 * Math.random()).rate(.9 + .2 * Math.random()), this.lastChargeSoundTime = eV)
```

#### 1272. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10249` → after: `L9892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9892) · [Before (L10249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10249)

```diff
-           const MM = this.heldItemState.HZ === this.Cm.eD ? this.typeObj.chargeTime * LM.g.getQuickChargeMultiplier(this.bloxd.RrM(this.Cm.eD).getItemAtIdx(this.inInvenIdx)) : this.typeObj.chargeTime,
+           const VV = this.heldItemState.zC === this.iv.bD ? this.typeObj.chargeTime * ZV.d.getQuickChargeMultiplier(this.bloxd.sxV(this.iv.bD).getItemAtIdx(this.inInvenIdx)) : this.typeObj.chargeTime,
```

#### 1273. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10252` → after: `L9895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9895) · [Before (L10252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10252)

```diff
-           this.firstPersonPosOffset.x = -.05 * OM, this.firstPersonPosOffset.y = .13 * OM, this.firstPersonPosOffset.z = -.05 * OM, iM > .25 && (this.firstPersonPosOffset.y += .0012 * Math.sin(22 * (iM - .25) * Math.min(iM, .8)) * Math.min(iM, .8)), yr.includes(this.typeObj.meta. … [truncated]
+           this.firstPersonPosOffset.x = -.05 * JV, this.firstPersonPosOffset.y = .13 * JV, this.firstPersonPosOffset.z = -.05 * JV, xV > .25 && (this.firstPersonPosOffset.y += .0012 * Math.sin(22 * (xV - .25) * Math.min(xV, .8)) * Math.min(xV, .8)), Be.includes(this.typeObj.meta. … [truncated]
```

#### 1274. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10264` → after: `L9907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9907) · [Before (L10264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10264)

```diff
-         this.isCharging = !1, this.chargingStart = 0, this.firstPersonPosOffset.x = 0, this.firstPersonPosOffset.y = 0, this.firstPersonPosOffset.z = 0, null === (MM = this.Cm.hU.getState(this.Cm.eD, "playerCameraAdjustment")) || void 0 === MM || MM.fovMultiplier.removeMultiplier … [truncated]
+         this.isCharging = !1, this.chargingStart = 0, this.firstPersonPosOffset.x = 0, this.firstPersonPosOffset.y = 0, this.firstPersonPosOffset.z = 0, null === (VV = this.iv.sF.getState(this.iv.bD, "playerCameraAdjustment")) || void 0 === VV || VV.fovMultiplier.removeMultiplier … [truncated]
```

#### 1275. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10267` → after: `L9910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9910) · [Before (L10267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10267)

```diff
-         super.reset(), this.heldItemState.HZ === this.Cm.eD ? (this.isCharging && this.sendFinishCharging(!1, 0, null), this.finishCharging(!1, Date.now())) : this.clearChargingPose()
+         super.reset(), this.heldItemState.zC === this.iv.bD ? (this.isCharging && this.sendFinishCharging(!1, 0, null), this.finishCharging(!1, Date.now())) : this.clearChargingPose()
```

#### 1276. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10270-L10273` → after: `L9913-L9916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9913-L9916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9913-L9916) · [Before (L10270-L10273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10270-L10273)

```diff
-         if (this.typeObj.requiresArrow && null === this.bloxd.getNearestArrowInInven(this.Cm.eD, this.inInvenIdx)) return;
-         this.isCharging = !0, this.chargingStart = MM, this.Cm.hU.iiM().canRunCombinator.setBooleanType("charging", !1);
-         const rM = this.bloxd.RrM(this.Cm.eD),
-           iM = this.typeObj.chargeTime * LM.g.getQuickChargeMultiplier(rM.getItemAtIdx(this.inInvenIdx)),
+         if (this.typeObj.requiresArrow && null === this.bloxd.getNearestArrowInInven(this.iv.bD, this.inInvenIdx)) return;
+         this.isCharging = !0, this.chargingStart = VV, this.iv.sF.tJV().canRunCombinator.setBooleanType("charging", !1);
+         const eV = this.bloxd.sxV(this.iv.bD),
+           xV = this.typeObj.chargeTime * ZV.d.getQuickChargeMultiplier(eV.getItemAtIdx(this.inInvenIdx)),
```

#### 1277. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10275` → after: `L9918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9918) · [Before (L10275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10275)

```diff
-         mM.i.Tz("middleScreenBarInitiate", {
+         vV.h.QZ("middleScreenBarInitiate", {
```

#### 1278. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10277` → after: `L9920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9920) · [Before (L10277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10277)

```diff
-           zO: !1,
+           tJ: !1,
```

#### 1279. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10279` → after: `L9922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9922) · [Before (L10279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10279)

```diff
-         }), (0, PM.sendColyMessage)(XM.xj)
+         }), (0, pV.sendColyMessage)(HV.mj)
```

#### 1280. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10282` → after: `L9925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9925) · [Before (L10282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10282)

```diff
-         if (this.firstPersonPosOffset.x = 0, this.firstPersonPosOffset.y = 0, this.firstPersonPosOffset.z = 0, this.Cm.hU.getState(this.Cm.eD, "playerCameraAdjustment").fovMultiplier.removeMultiplier("chargeableZoom"), this.updateItemToStage(1), this.Cm.hU.iiM().canRunCombinator. … [truncated]
+         if (this.firstPersonPosOffset.x = 0, this.firstPersonPosOffset.y = 0, this.firstPersonPosOffset.z = 0, this.iv.sF.getState(this.iv.bD, "playerCameraAdjustment").fovMultiplier.removeMultiplier("chargeableZoom"), this.updateItemToStage(1), this.iv.sF.tJV().canRunCombinator. … [truncated]
```

#### 1281. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10286-L10289` → after: `L9929-L9932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9929-L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9929-L9932) · [Before (L10286-L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10286-L10289)

```diff
-               OM = this.bloxd.getItemStat(this.Cm.eD, this.getHeldName(), "chargeStages"),
-               SM = null !== (iM = this.bloxd.getItemStat(this.Cm.eD, this.getHeldName(), "minChargeStateToUse")) && void 0 !== iM ? iM : 1,
-               jM = this.bloxd.RrM(this.Cm.eD),
-               aM = this.typeObj.chargeTime * LM.g.getQuickChargeMultiplier(jM.getItemAtIdx(this.inInvenIdx)),
+               JV = this.bloxd.getItemStat(this.iv.bD, this.getHeldName(), "chargeStages"),
+               YV = null !== (xV = this.bloxd.getItemStat(this.iv.bD, this.getHeldName(), "minChargeStateToUse")) && void 0 !== xV ? xV : 1,
+               UV = this.bloxd.sxV(this.iv.bD),
+               yV = this.typeObj.chargeTime * ZV.d.getQuickChargeMultiplier(UV.getItemAtIdx(this.inInvenIdx)),
```

#### 1282. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10298-L10301` → after: `L9941-L9944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9941-L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9941-L9944) · [Before (L10298-L10301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10298-L10301)

```diff
-         (0, PM.sendColyMessage)(XM.Zg, {
-           Aa: MM,
-           xa: rM,
-           ha: OM
+         (0, pV.sendColyMessage)(HV.ch, {
+           Hy: VV,
+           uy: eV,
+           By: JV
```

#### 1283. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10305` → after: `L9948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9948) · [Before (L10305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10305)

```diff
-         this.sendFinishCharging(!0, MM, zr.e.eat(this.Cm.eD, this.inInvenIdx, this.typeObj.name)), Hr.e.play("burp", 1).rate(.9 + .2 * Math.random())
+         this.sendFinishCharging(!0, VV, we.b.eat(this.iv.bD, this.inInvenIdx, this.typeObj.name)), re.d.play("burp", 1).rate(.9 + .2 * Math.random())
```

#### 1284. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10309` → after: `L9952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9952) · [Before (L10309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10309)

```diff
-         const rM = this.bloxd.RrM(this.Cm.eD);
+         const eV = this.bloxd.sxV(this.iv.bD);
```

#### 1285. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10315` → after: `L9958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9958) · [Before (L10315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10315)

```diff
-         const rM = this.bloxd.RrM(this.Cm.eD);
+         const eV = this.bloxd.sxV(this.iv.bD);
```

#### 1286. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10318` → after: `L9961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9961) · [Before (L10318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10318)

```diff
-           const OM = 1 === MM ? this.typeObj.meta.rootName : `${this.typeObj.meta.rootName}|meta|charging${MM}`,
+           const JV = 1 === VV ? this.typeObj.meta.rootName : `${this.typeObj.meta.rootName}|meta|charging${VV}`,
```

#### 1287. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10326` → after: `L9969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9969) · [Before (L10326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10326)

```diff
-         super(MM, rM, iM, OM, SM), this.inInvenIdx = void 0, this.inUse = void 0, this.dir = void 0, this.aa = void 0, this.firstPersonPosOffset = new dM.sh(.1, 0, .15), this.firstPersonRotation = new dM.sh(0, -Math.PI / 2, Math.PI / 7)
+         super(VV, eV, xV, JV, YV), this.inInvenIdx = void 0, this.inUse = void 0, this.dir = void 0, this.py = void 0, this.firstPersonPosOffset = new EV.Ik(.1, 0, .15), this.firstPersonRotation = new EV.Ik(0, -Math.PI / 2, Math.PI / 7)
```

#### 1288. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10329` → after: `L9972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9972) · [Before (L10329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10329)

```diff
-         super.selected(MM), this.heldItemState.HZ === this.Cm.eD && (this.inInvenIdx = this.bloxd.RrM(this.Cm.eD).getSelectedSlotIndex(), this.inUse = !0)
+         super.selected(VV), this.heldItemState.zC === this.iv.bD && (this.inInvenIdx = this.bloxd.sxV(this.iv.bD).getSelectedSlotIndex(), this.inUse = !0)
```

#### 1289. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10332` → after: `L9975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9975) · [Before (L10332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10332)

```diff
-         if (super.bL(MM, rM), this.heldItemState.HZ === this.Cm.eD && (this.inInvenIdx = this.bloxd.RrM(this.Cm.eD).getSelectedSlotIndex(), this.inUse)) {
+         if (super.iZ(VV, eV), this.heldItemState.zC === this.iv.bD && (this.inInvenIdx = this.bloxd.sxV(this.iv.bD).getSelectedSlotIndex(), this.inUse)) {
```

#### 1290. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10334` → after: `L9977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9977) · [Before (L10334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10334)

```diff
-           let MM = null !== (iM = this.Cm.hU.RrM(this.Cm.eD).getItemAtSelectedSlot().attributes.customAttributes.target) && void 0 !== iM ? iM : this.Cm.aU.compassTarget;
+           let VV = null !== (xV = this.iv.sF.sxV(this.iv.bD).getItemAtSelectedSlot().attributes.customAttributes.target) && void 0 !== xV ? xV : this.iv.mF.compassTarget;
```

#### 1291. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10336-L10337` → after: `L9979-L9980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9979-L9980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9979-L9980) · [Before (L10336-L10337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10336-L10337)

```diff
-             if (!this.Cm.hU.KrM(MM)) return;
-             MM = this.Cm.hU.XE(MM)
+             if (!this.iv.sF.rJV(VV)) return;
+             VV = this.iv.sF.YF(VV)
```

#### 1292. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10339` → after: `L9982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9982) · [Before (L10339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10339)

```diff
-           const rM = this.Cm.hU.oq(this.heldItemState.HZ),
+           const eV = this.iv.sF.A_(this.heldItemState.zC),
```

#### 1293. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10341-L10342` → after: `L9984-L9985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9984-L9985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9984-L9985) · [Before (L10341-L10342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10341-L10342)

```diff
-             aM = null !== (OM = this.Cm.qMM) && void 0 !== OM ? OM : this.Cm.camera.eT();
-           this.Cm.jT(rM, jM);
+             yV = null !== (JV = this.iv.kxV) && void 0 !== JV ? JV : this.iv.camera.L_();
+           this.iv.i_(eV, UV);
```

#### 1294. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10345-L10346` → after: `L9988-L9989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9988-L9989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9988-L9989) · [Before (L10345-L10346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10345-L10346)

```diff
-           let nM = ((0, LM.wb)(PM) - (0, LM.wb)(aM)) * (180 / Math.PI) - 15;
-           nM = nM < 0 ? 360 + nM : nM, this.dir = Math.abs(Math.round(nM / 30) + 6) % 12 + 1, this.updateItemToStage(this.dir)
+           let QV = ((0, ZV.Cb)(pV) - (0, ZV.Cb)(yV)) * (180 / Math.PI) - 15;
+           QV = QV < 0 ? 360 + QV : QV, this.dir = Math.abs(Math.round(QV / 30) + 6) % 12 + 1, this.updateItemToStage(this.dir)
```

#### 1295. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10350` → after: `L9993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9993) · [Before (L10350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10350)

```diff
-         const rM = this.bloxd.RrM(this.Cm.eD);
+         const eV = this.bloxd.sxV(this.iv.bD);
```

#### 1296. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10353` → after: `L9996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L9996) · [Before (L10353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10353)

```diff
-           const OM = 1 === MM ? this.typeObj.meta.rootName : `${this.typeObj.meta.rootName}|meta|dir${MM}`,
+           const JV = 1 === VV ? this.typeObj.meta.rootName : `${this.typeObj.meta.rootName}|meta|dir${VV}`,
```

#### 1297. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10359-L10360` → after: `L10002-L10003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10002-L10003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10002-L10003) · [Before (L10359-L10360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10359-L10360)

```diff
-     var Ur = iM(38205),
-       Gr = iM(181);
+     var te = xV(38411),
+       Fe = xV(206);
```

#### 1298. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10363` → after: `L10006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10006) · [Before (L10363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10363)

```diff
-       return void 0 !== MM && null !== MM && MM > 0 ? MM : void 0
+       return void 0 !== VV && null !== VV && VV > 0 ? VV : void 0
```

#### 1299. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10387` → after: `L10030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10030) · [Before (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10387)

```diff
-         const OM = this.restart ? MM : function(MM, rM, iM, OM, SM) {
+         const JV = this.restart ? VV : function(VV, eV, xV, JV, YV) {
```

#### 1300. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10396-L10402` → after: `L10039-L10045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10039-L10045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10039-L10045) · [Before (L10396-L10402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10396-L10402)

```diff
-     var gr = iM(4577),
-       ur = iM(38965),
-       Rr = iM(38997),
-       pr = iM(37705),
-       Wr = iM(103),
-       sr = iM(39433),
-       Dr = iM(625);
+     var Me = xV(4642),
+       ze = xV(39151),
+       Ge = xV(39182),
+       We = xV(37930),
+       Re = xV(115),
+       ge = xV(39579),
+       De = xV(657);
```

#### 1301. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10405` → after: `L10048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10048) · [Before (L10405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10405)

```diff
-         this.Cm = void 0, this.gunTypeObj = void 0, this.QS = void 0, this.Cm = MM, this.gunTypeObj = rM, this.QS = iM
+         this.iv = void 0, this.gunTypeObj = void 0, this.EY = void 0, this.iv = VV, this.gunTypeObj = eV, this.EY = xV
```

#### 1302. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10409-L10410` → after: `L10052-L10053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10052-L10053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10052-L10053) · [Before (L10409-L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10409-L10410)

```diff
-         if (this.QS !== this.Cm.eD) return;
-         const iM = null === (rM = (0, HM.f)().hU.RrM(this.QS)) || void 0 === rM ? void 0 : rM.getItemAtSelectedSlot();
+         if (this.EY !== this.iv.bD) return;
+         const xV = null === (eV = (0, rV.d)().sF.sxV(this.EY)) || void 0 === eV ? void 0 : eV.getItemAtSelectedSlot();
```

#### 1303. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10418` → after: `L10061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10061) · [Before (L10418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10418)

```diff
-         } = (0, HM.b)().getMetaInfo(this.gunTypeObj.name), jM = (0, HM.b)().getItemStat(this.QS, SM, "gunStats");
+         } = (0, rV.b)().getMetaInfo(this.gunTypeObj.name), UV = (0, rV.b)().getItemStat(this.EY, YV, "gunStats");
```

#### 1304. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10422` → after: `L10065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10065) · [Before (L10422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10422)

```diff
-         if (this.QS === this.Cm.eD) {
+         if (this.EY === this.iv.bD) {
```

#### 1305. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10424` → after: `L10067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10067) · [Before (L10424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10424)

```diff
-           return null !== rM && void 0 !== rM ? rM : (0, HM.b)().getItemStat(this.QS, this.gunTypeObj.name, MM)
+           return null !== eV && void 0 !== eV ? eV : (0, rV.b)().getItemStat(this.EY, this.gunTypeObj.name, VV)
```

#### 1306. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10434` → after: `L10077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10077) · [Before (L10434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10434)

```diff
-             PM = null !== aM && void 0 !== aM ? aM : SM,
+             pV = null !== yV && void 0 !== yV ? yV : YV,
```

#### 1307. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10436` → after: `L10079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10079) · [Before (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10436)

```diff
-             QM = void 0 === nM ? PM : 60 / nM * 1e3,
+             nV = void 0 === QV ? pV : 60 / QV * 1e3,
```

#### 1308. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10438-L10439` → after: `L10081-L10082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10081-L10082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10081-L10082) · [Before (L10438-L10439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10438-L10439)

```diff
-             LM = null !== (iM = null !== (OM = null !== zM && void 0 !== zM ? zM : aM) && void 0 !== OM ? OM : MM.cadenceMs) && void 0 !== iM ? iM : SM,
-             mM = void 0 !== (HM = rM.equipDelay) && null !== HM && HM >= 0 ? HM : void 0;
+             ZV = null !== (xV = null !== (JV = null !== wV && void 0 !== wV ? wV : yV) && void 0 !== JV ? JV : VV.cadenceMs) && void 0 !== xV ? xV : YV,
+             vV = void 0 !== (rV = eV.equipDelay) && null !== rV && rV >= 0 ? rV : void 0;
```

#### 1309. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10441` → after: `L10084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10084) · [Before (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10441)

```diff
-           const hM = rM => null !== mM && void 0 !== mM ? mM : rM || void 0 !== zM ? void 0 : MM.equipDelay;
+           const kV = eV => null !== vV && void 0 !== vV ? vV : eV || void 0 !== wV ? void 0 : VV.equipDelay;
```

#### 1310. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10467` → after: `L10110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10110) · [Before (L10467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10467)

```diff
-             firstShotDue: void 0 === SM ? OM + er(MM, rM) + br : iM + Math.max(SM, br),
+             firstShotDue: void 0 === YV ? JV + Pe(VV, eV) + Ae : xV + Math.max(YV, Ae),
```

#### 1311. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10479` → after: `L10122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10122) · [Before (L10479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10479)

```diff
-         return (0, Dr.J)(rM) ? null !== (MM = this.gunTypeObj.burstDelay) && void 0 !== MM ? MM : 0 : rM
+         return (0, De.J)(eV) ? null !== (VV = this.gunTypeObj.burstDelay) && void 0 !== VV ? VV : 0 : eV
```

#### 1312. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10512-L10513` → after: `L10155-L10156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10155-L10156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10155-L10156) · [Before (L10512-L10513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10512-L10513)

```diff
-     var or = iM(37546),
-       fr = iM(38576);
+     var ae = xV(37777),
+       oe = xV(38768);
```

#### 1313. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10517` → after: `L10160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10160) · [Before (L10517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10517)

```diff
-         this.Cm = void 0, this.gunStats = void 0, this.hasVerticalInaccuracy = void 0, this.currInacc = void 0, this.nonMoveInacc = void 0, this.currMoveInacc = void 0, this.prevBroadcastedInacc = void 0, this.ticksSinceBroadcast = void 0, this.lastTick = void 0, this.isAiming =  … [truncated]
+         this.iv = void 0, this.gunStats = void 0, this.hasVerticalInaccuracy = void 0, this.currInacc = void 0, this.nonMoveInacc = void 0, this.currMoveInacc = void 0, this.prevBroadcastedInacc = void 0, this.ticksSinceBroadcast = void 0, this.lastTick = void 0, this.isAiming =  … [truncated]
```

#### 1314. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10542-L10546` → after: `L10185-L10189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10185-L10189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10185-L10189) · [Before (L10542-L10546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10542-L10546)

```diff
-         const SM = this.Cm.hU.Av(this.Cm.eD),
-           jM = (SM.dd[0] ** 2 + SM.dd[2] ** 2) ** .5,
-           aM = Math.max(this.Cm.aU.runningSpeed, this.Cm.aU.walkingSpeed) * this.Cm.hU.grM(this.Cm.eD).speedMultiplier.getTotalMultipliedVal(),
-           PM = OM.inaccuracyStanding + jM / aM * OM.inaccuracyMovement + OM.yVelocityInaccuracy * Math.abs(SM.dd[1]);
-         0 === aM || (PM >= this.currMoveInacc ? this.currMoveInacc = PM : this.currMoveInacc = this.decreaseInacc(this.currMoveInacc, PM, iM)), 0 !== this.nonMoveInacc && (this.nonMoveInacc = this.decreaseInacc(this.nonMoveInacc, 0, iM));
+         const YV = this.iv.sF.uH(this.iv.bD),
+           UV = (YV.ME[0] ** 2 + YV.ME[2] ** 2) ** .5,
+           yV = Math.max(this.iv.mF.runningSpeed, this.iv.mF.walkingSpeed) * this.iv.sF.HxV(this.iv.bD).speedMultiplier.getTotalMultipliedVal(),
+           pV = JV.inaccuracyStanding + UV / yV * JV.inaccuracyMovement + JV.yVelocityInaccuracy * Math.abs(YV.ME[1]);
+         0 === yV || (pV >= this.currMoveInacc ? this.currMoveInacc = pV : this.currMoveInacc = this.decreaseInacc(this.currMoveInacc, pV, xV)), 0 !== this.nonMoveInacc && (this.nonMoveInacc = this.decreaseInacc(this.nonMoveInacc, 0, xV));
```

#### 1315. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10549` → after: `L10192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10192) · [Before (L10549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10549)

```diff
-         (++this.ticksSinceBroadcast >= 6 && QM > .5 || QM > 10) && ((0, or.e)(nM), this.prevBroadcastedInacc = nM, this.ticksSinceBroadcast = 0), this.currInacc = nM, this.lastTick = rM, rM - this.lastShot > this.gunStats.getCadenceMs() + 100 && (this.bulletsShot = 0)
+         (++this.ticksSinceBroadcast >= 6 && nV > .5 || nV > 10) && ((0, ae.i)(QV), this.prevBroadcastedInacc = QV, this.ticksSinceBroadcast = 0), this.currInacc = QV, this.lastTick = eV, eV - this.lastShot > this.gunStats.getCadenceMs() + 100 && (this.bulletsShot = 0)
```

#### 1316. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10553` → after: `L10196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10196) · [Before (L10553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10553)

```diff
-         return OM < .05 ? rM : Math.max(MM - iM * this.gunStats.getStat("recoveryRate") * OM, rM)
+         return JV < .05 ? eV : Math.max(VV - xV * this.gunStats.getStat("recoveryRate") * JV, eV)
```

#### 1317. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10556` → after: `L10199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10199) · [Before (L10556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10556)

```diff
-         const rM = this.currInacc * hr.e,
+         const eV = this.currInacc * ke.h,
```

#### 1318. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10558-L10560` → after: `L10201-L10203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10201-L10203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10201-L10203) · [Before (L10558-L10560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10558-L10560)

```diff
-             iL: iM,
-             aiM: OM
-           } = (0, fr.f)(MM),
+             rZ: xV,
+             NJV: JV
+           } = (0, oe.h)(VV),
```

#### 1319. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10563` → after: `L10206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10206) · [Before (L10563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10563)

```diff
-         return (0, fr.b)(iM + SM, OM + jM)
+         return (0, oe.e)(xV + YV, JV + UV)
```

#### 1320. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10566-L10569` → after: `L10209-L10212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10209-L10212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10209-L10212) · [Before (L10566-L10569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10566-L10569)

```diff
-     var Nr = iM(38585),
-       Ar = iM(38878),
-       xr = iM(38481),
-       vr = iM(38316);
+     var he = xV(38770),
+       le = xV(39055),
+       Le = xV(38690),
+       fe = xV(38519);
```

#### 1321. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10572-L10574` → after: `L10215-L10217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10215-L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10215-L10217) · [Before (L10572-L10574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10572-L10574)

```diff
-       Xr = new dM.sh(0, .6, .5),
-       Ir = new dM.sh(0, .5 * -Math.PI, Math.PI),
-       Kr = new dM.sh(.12, .12, .12),
+       He = new EV.Ik(0, .6, .5),
+       ue = new EV.Ik(0, .5 * -Math.PI, Math.PI),
+       se = new EV.Ik(.12, .12, .12),
```

#### 1322. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10577` → after: `L10220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10220) · [Before (L10577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10577)

```diff
-     class Vr extends hM.c {
+     class de extends kV.e {
```

#### 1323. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10579-L10581` → after: `L10222-L10224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10222-L10224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10222-L10224) · [Before (L10579-L10581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10579-L10581)

```diff
-         super(MM, rM, iM, SM), this.breakingItem = void 0, this.firing = void 0, this.burstRemaining = void 0, this.burstSchedule = void 0, this.wasFiringLastTick = void 0, this.didShootLastTick = void 0, this.attemptAiming = void 0, this.aiming = void 0, this.fireSchedule = void … [truncated]
-         const jM = this.Cm.CL.Hk();
-         if (this.heldItemState.HZ === this.Cm.eD) {
+         super(VV, eV, xV, YV), this.breakingItem = void 0, this.firing = void 0, this.burstRemaining = void 0, this.burstSchedule = void 0, this.wasFiringLastTick = void 0, this.didShootLastTick = void 0, this.attemptAiming = void 0, this.aiming = void 0, this.fireSchedule = void … [truncated]
+         const UV = this.iv.gZ.dD();
+         if (this.heldItemState.zC === this.iv.bD) {
```

#### 1324. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10583` → after: `L10226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10226) · [Before (L10583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10583)

```diff
-           this.bulletBlockedBillboardMat = (0, Ur.d)({
+           this.bulletBlockedBillboardMat = (0, te.e)({
```

#### 1325. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10585` → after: `L10228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10228) · [Before (L10585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10585)

```diff
-             YJ: jM,
+             yE: UV,
```

#### 1326. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10593` → after: `L10236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10236) · [Before (L10593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10593)

```diff
-           }).mirror, this.bulletBlockedBillboardPlane = (0, Ar.l)(MM.CL, "bulletBlockedBillboardPlane", (0, xr.g)({
+           }).mirror, this.bulletBlockedBillboardPlane = (0, le.r)(VV.gZ, "bulletBlockedBillboardPlane", (0, Le.k)({
```

#### 1327. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10596` → after: `L10239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10239) · [Before (L10596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10596)

```diff
-           })), this.bulletBlockedBillboardPlane.material = this.bulletBlockedBillboardMat, this.bulletBlockedBillboardPlane.kR(!1), MM.CL.vJ(this.bulletBlockedBillboardPlane, !1), this.ticksSinceAttackBlockedBillboardUpdate = 0
+           })), this.bulletBlockedBillboardPlane.material = this.bulletBlockedBillboardMat, this.bulletBlockedBillboardPlane.pW(!1), VV.gZ.wE(this.bulletBlockedBillboardPlane, !1), this.ticksSinceAttackBlockedBillboardUpdate = 0
```

#### 1328. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10602-L10603` → after: `L10245-L10246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10245-L10246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10245-L10246) · [Before (L10602-L10603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10602-L10603)

```diff
-         super.selected(MM), this.breakingItem.reset(), this.breakingItem.selected(MM), this.gunTypeObj = MM, this.gunStats = new kr(this.Cm, MM, this.heldItemState.HZ), this.heldItemState.HZ === this.Cm.eD && this.preloadSounds(), this.firing = !1, this.burstRemaining = 0, this.b … [truncated]
-         const iM = KM.d.get("isTouchScreen"),
+         super.selected(VV), this.breakingItem.reset(), this.breakingItem.selected(VV), this.gunTypeObj = VV, this.gunStats = new ie(this.iv, VV, this.heldItemState.zC), this.heldItemState.zC === this.iv.bD && this.preloadSounds(), this.firing = !1, this.burstRemaining = 0, this.b … [truncated]
+         const xV = sV.b.get("isTouchScreen"),
```

#### 1329. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10605` → after: `L10248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10248) · [Before (L10605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10605)

```diff
-           SM = (null !== (rM = this.lastShots.get(this.gunTypeObj.name)) && void 0 !== rM ? rM : -1 / 0) + this.gunStats.getIntervalMs(iM) / 1.2 + br,
+           YV = (null !== (eV = this.lastShots.get(this.gunTypeObj.name)) && void 0 !== eV ? eV : -1 / 0) + this.gunStats.getIntervalMs(xV) / 1.2 + Ae,
```

#### 1330. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10607` → after: `L10250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10250) · [Before (L10607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10607)

```diff
-         this.fireSchedule = new tr(wr), this.pressedAt = 0, this.wasDueLastTick = !1, this.fireSchedule.arm(jM), this.soundLastRoundFired = OM.soundLastRoundFired, this.aimChangeTime = 0, this.reloadStartTime = 0, this.firstPersonGunMeshScaling = .055, this.smallMuzzleFlashScale  … [truncated]
+         this.fireSchedule = new Xe(Ne), this.pressedAt = 0, this.wasDueLastTick = !1, this.fireSchedule.arm(UV), this.soundLastRoundFired = JV.soundLastRoundFired, this.aimChangeTime = 0, this.reloadStartTime = 0, this.firstPersonGunMeshScaling = .055, this.smallMuzzleFlashScale  … [truncated]
```

#### 1331. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10612` → after: `L10255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10255) · [Before (L10612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10612)

```diff
-         })), this.cachedZoomLevel = this.Cm.camera.zK, this.inaccuracyCalculator = null, this.heldItemState.HZ === this.Cm.eD && (this.inaccuracyCalculator = new Yr(this.Cm, MM, this.gunStats), this.Cm.camera.bK.YV(this.gunStats.getStat("kickbackDecreaseRate"))), this.lastGunShot … [truncated]
+         })), this.cachedZoomLevel = this.iv.camera.y_, this.inaccuracyCalculator = null, this.heldItemState.zC === this.iv.bD && (this.inaccuracyCalculator = new ce(this.iv, VV, this.gunStats), this.iv.camera.n_.w6(this.gunStats.getStat("kickbackDecreaseRate"))), this.lastGunShot … [truncated]
```

#### 1332. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10616` → after: `L10259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10259) · [Before (L10616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10616)

```diff
-         this.muzzleParticleEmitter && !this.muzzleParticleEmitter.xG() || (null === (MM = this.muzzleParticleSystem) || void 0 === MM || MM.dispose(), this.createMuzzleEmitter())
+         this.muzzleParticleEmitter && !this.muzzleParticleEmitter.iN() || (null === (VV = this.muzzleParticleSystem) || void 0 === VV || VV.dispose(), this.createMuzzleEmitter())
```

#### 1333. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10656` → after: `L10299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10299) · [Before (L10656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10656)

```diff
-           blendMode: gr.d.Standard
+           blendMode: Me.g.Standard
```

#### 1334. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10662-L10663` → after: `L10305-L10306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10305-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10305-L10306) · [Before (L10662-L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10662-L10663)

```diff
-         (super.reset(), this.aiming && this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel), this.firing = !1, this.burstRemaining = 0, this.burstSchedule = new tr(wr), this.aiming = !1, this.attemptAiming = !1, this.fireSchedule = new tr(wr), this.p … [truncated]
-         mM.i.unsubscribe(this.networkedPlayerShotSub), null === (MM = this.bulletBlockedBillboardPlane) || void 0 === MM || MM.kR(!1);
+         (super.reset(), this.aiming && this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel), this.firing = !1, this.burstRemaining = 0, this.burstSchedule = new Xe(Ne), this.aiming = !1, this.attemptAiming = !1, this.fireSchedule = new Xe(Ne), this.p … [truncated]
+         vV.h.unsubscribe(this.networkedPlayerShotSub), null === (VV = this.bulletBlockedBillboardPlane) || void 0 === VV || VV.pW(!1);
```

#### 1335. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10672` → after: `L10315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10315) · [Before (L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10672)

```diff
-         null !== MM && this.muzzleParticleEmitter && this.Cm.CL.Dk.detachTransformNodeIfFound(this.muzzleParticleEmitter, MM, 0), super.releaseThirdPersonThinObject()
+         null !== VV && this.muzzleParticleEmitter && this.iv.gZ.YC.detachTransformNodeIfFound(this.muzzleParticleEmitter, VV, 0), super.releaseThirdPersonThinObject()
```

#### 1336. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10678` → after: `L10321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10321) · [Before (L10678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10678)

```diff
-       BiM() {
+       wYV() {
```

#### 1337. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10684-L10685` → after: `L10327-L10328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10327-L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10327-L10328) · [Before (L10684-L10685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10684-L10685)

```diff
-       xiM() {
-         return this.breakingItem.xiM(), this.firing = !1, {
+       pYV() {
+         return this.breakingItem.pYV(), this.firing = !1, {
```

#### 1338. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10690` → after: `L10333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10333) · [Before (L10690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10690)

```diff
-       uQM() {
+       HwV() {
```

#### 1339. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10692` → after: `L10335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10335) · [Before (L10692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10692)

```diff
-         return MM.tookAction ? MM : (this.secondaryHeld = !0, this.updateAttemptAiming(), {
+         return VV.tookAction ? VV : (this.secondaryHeld = !0, this.updateAttemptAiming(), {
```

#### 1340. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10697` → after: `L10340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10340) · [Before (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10697)

```diff
-       AiM() {
+       yYV() {
```

#### 1341. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10718-L10719` → after: `L10361-L10362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10361-L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10361-L10362) · [Before (L10718-L10719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10718-L10719)

```diff
-       viM() {
-         return this.breakingItem.viM(), !0
+       QYV() {
+         return this.breakingItem.QYV(), !0
```

#### 1342. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10725` → after: `L10368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10368) · [Before (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10725)

```diff
-         const iM = KM.d.get("isTouchScreen");
+         const xV = sV.b.get("isTouchScreen");
```

#### 1343. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10744` → after: `L10387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10387) · [Before (L10744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10744)

```diff
-         OM && this.lastShots.set(this.gunTypeObj.name, rM), !this.firing || this.gunStats.getStat("autoFireWithMouse") || iM || (this.firing = !1), this.heldItemState.HZ === this.Cm.eD && (0 !== this.Cm.camera.hK ? this.updateAttackBlockedBillboard() : this.bulletBlockedBillboard … [truncated]
+         JV && this.lastShots.set(this.gunTypeObj.name, eV), !this.firing || this.gunStats.getStat("autoFireWithMouse") || xV || (this.firing = !1), this.heldItemState.zC === this.iv.bD && (0 !== this.iv.camera.p_ ? this.updateAttackBlockedBillboard() : this.bulletBlockedBillboard … [truncated]
```

#### 1344. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10752` → after: `L10395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10395) · [Before (L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10752)

```diff
-         OM > 0 ? "sniper" === SM && sr.i.setMultiplierType("sniperScope", 1 / (1 + 5 * OM)) : "sniper" === SM && sr.i.removeMultiplier("sniperScope");
+         JV > 0 ? "sniper" === YV && ge.d.setMultiplierType("sniperScope", 1 / (1 + 5 * JV)) : "sniper" === YV && ge.d.removeMultiplier("sniperScope");
```

#### 1345. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10756` → after: `L10399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10399) · [Before (L10756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10756)

```diff
-           this.Cm.CL.LnM(this.mesh, !MM && this.heldItemState._visible)
+           this.iv.gZ.XnV(this.mesh, !VV && this.heldItemState._visible)
```

#### 1346. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10761` → after: `L10404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10404) · [Before (L10761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10761)

```diff
-         this.aimChangeTime = performance.now(), mM.i.Tz("aimingOverlay", this.gunStats.getStat("scopeType")), this.Cm.hU.iiM().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !1), this.cachedZoomLevel = this.bloxd.client.cameraController.getZoomDistance(), this.bloxd.cl … [truncated]
+         this.aimChangeTime = performance.now(), vV.h.QZ("aimingOverlay", this.gunStats.getStat("scopeType")), this.iv.sF.tJV().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !1), this.cachedZoomLevel = this.bloxd.client.cameraController.getZoomDistance(), this.bloxd.cl … [truncated]
```

#### 1347. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10764` → after: `L10407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10407) · [Before (L10764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10764)

```diff
-         this.aimChangeTime = performance.now(), mM.i.Tz("aimingOverlay", "none"), this.Cm.hU.iiM().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !0), this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel)
+         this.aimChangeTime = performance.now(), vV.h.QZ("aimingOverlay", "none"), this.iv.sF.tJV().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !0), this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel)
```

#### 1348. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10773` → after: `L10416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10416) · [Before (L10773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10773)

```diff
-         if (this.updateMuzzleFlashFromRenderTick(), !this.Cm.CL.DJ) return;
+         if (this.updateMuzzleFlashFromRenderTick(), !this.iv.gZ.eE) return;
```

#### 1349. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10775` → after: `L10418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10418) · [Before (L10775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10775)

```diff
-         null !== rM && this.Cm.CL.Dk.getActuallyVisible(rM) && this._updateHeldMeshLighting()
+         null !== eV && this.iv.gZ.YC.getActuallyVisible(eV) && this._updateHeldMeshLighting()
```

#### 1350. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10786` → after: `L10429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10429) · [Before (L10786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10786)

```diff
-       tQM() {
+       mwV() {
```

#### 1351. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10790` → after: `L10433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10433) · [Before (L10790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10790)

```diff
-           return this.mesh.UL.set(MM, MM, MM), this.mesh.rotation.set(0, .5 * Math.PI, 0), this.mesh.parent = this.Cm.CL.camera, (0, yM.p)(this.mesh, 0, 0, 0), this.ensureMuzzleEmitter(), this.muzzleParticleEmitter.parent = this.mesh, this.placeMuzzleEmitter(MM, MM, MM), void thi … [truncated]
+           return this.mesh.WZ.set(VV, VV, VV), this.mesh.rotation.set(0, .5 * Math.PI, 0), this.mesh.parent = this.iv.gZ.camera, (0, BV.q)(this.mesh, 0, 0, 0), this.ensureMuzzleEmitter(), this.muzzleParticleEmitter.parent = this.mesh, this.placeMuzzleEmitter(VV, VV, VV), void thi … [truncated]
```

#### 1352. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10792` → after: `L10435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10435) · [Before (L10792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10792)

```diff
-         this.Cm.CL.LnM(this.mesh, !1);
+         this.iv.gZ.XnV(this.mesh, !1);
```

#### 1353. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10796` → after: `L10439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10439) · [Before (L10796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10796)

```diff
-           return void(null !== MM && this.Cm.CL.Dk.setVisibility(MM, !1))
+           return void(null !== VV && this.iv.gZ.YC.setVisibility(VV, !1))
```

#### 1354. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10810` → after: `L10453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10453) · [Before (L10810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10810)

```diff
-           UL: PM
+           WZ: pV
```

#### 1355. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10812` → after: `L10455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10455) · [Before (L10812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10812)

```diff
-         this.thirdPersonPose.usesQuaternion = !1, PM.jR(Kr);
+         this.thirdPersonPose.usesQuaternion = !1, pV.iG(se);
```

#### 1356. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10814-L10816` → after: `L10457-L10459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10457-L10459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10457-L10459) · [Before (L10814-L10816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10814-L10816)

```diff
-           QM = Xr.x + (null !== (iM = null === nM || void 0 === nM ? void 0 : nM[0]) && void 0 !== iM ? iM : 0),
-           zM = Xr.y + (null !== (OM = null === nM || void 0 === nM ? void 0 : nM[1]) && void 0 !== OM ? OM : 0),
-           LM = Xr.z + (null !== (SM = null === nM || void 0 === nM ? void 0 : nM[2]) && void 0 !== SM ? SM : 0),
+           nV = He.x + (null !== (xV = null === QV || void 0 === QV ? void 0 : QV[0]) && void 0 !== xV ? xV : 0),
+           wV = He.y + (null !== (JV = null === QV || void 0 === QV ? void 0 : QV[1]) && void 0 !== JV ? JV : 0),
+           ZV = He.z + (null !== (YV = null === QV || void 0 === QV ? void 0 : QV[2]) && void 0 !== YV ? YV : 0),
```

#### 1357. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10820-L10821` → after: `L10463-L10464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10463-L10464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10463-L10464) · [Before (L10820-L10821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10820-L10821)

```diff
-           dM.sh.TransformCoordinatesFromFloatsToRef(QM, zM, LM, MM, jM), aM.iMM(Ir.x + mM[0], Ir.y + mM[1], Ir.z + mM[2])
-         } else jM.iMM(QM, zM, LM), aM.iMM(Ir.x, Ir.y, Ir.z)
+           EV.Ik.TransformCoordinatesFromFloatsToRef(nV, wV, ZV, VV, UV), yV.FeV(ue.x + vV[0], ue.y + vV[1], ue.z + vV[2])
+         } else UV.FeV(nV, wV, ZV), yV.FeV(ue.x, ue.y, ue.z)
```

#### 1358. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10827` → after: `L10470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10470) · [Before (L10827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10827)

```diff
-         const rM = this.Cm.CL.Dk;
+         const eV = this.iv.gZ.YC;
```

#### 1359. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10830` → after: `L10473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10473) · [Before (L10830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10830)

```diff
-           UL: iM
+           WZ: xV
```

#### 1360. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10832` → after: `L10475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10475) · [Before (L10832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10832)

```diff
-         this.placeMuzzleEmitter(iM.x, this.heldPoseScaleY(), iM.z, Nr.e)
+         this.placeMuzzleEmitter(xV.x, this.heldPoseScaleY(), xV.z, he.d)
```

#### 1361. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10841` → after: `L10484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10484) · [Before (L10841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10841)

```diff
-         SM.UL.set(aM / Math.abs(MM), aM / Math.abs(rM), aM / Math.abs(iM))
+         YV.WZ.set(yV / Math.abs(VV), yV / Math.abs(eV), yV / Math.abs(xV))
```

#### 1362. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10848` → after: `L10491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10491) · [Before (L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10848)

```diff
-         if (console.assert(this.heldItemState.HZ === this.Cm.eD, "fireBulletLocal should only be called for local player."), this.reloading) return !1;
+         if (console.assert(this.heldItemState.zC === this.iv.bD, "fireBulletLocal should only be called for local player."), this.reloading) return !1;
```

#### 1363. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10850` → after: `L10493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10493) · [Before (L10850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10850)

```diff
-         const iM = this.Cm.hU.RrM(this.Cm.eD),
+         const xV = this.iv.sF.sxV(this.iv.bD),
```

#### 1364. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10852-L10853` → after: `L10495-L10496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10495-L10496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10495-L10496) · [Before (L10852-L10853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10852-L10853)

```diff
-           SM = (0, HM.b)().client.inventoryPrediction.predict(zr.e.shoot(iM.getSelectedSlotIndex(), OM.name)),
-           jM = null !== (rM = this.gunStats.getStat("shotPelletCount")) && void 0 !== rM ? rM : 1;
+           YV = (0, rV.b)().client.inventoryPrediction.predict(we.b.shoot(xV.getSelectedSlotIndex(), JV.name)),
+           UV = null !== (eV = this.gunStats.getStat("shotPelletCount")) && void 0 !== eV ? eV : 1;
```

#### 1365. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10869` → after: `L10512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10512) · [Before (L10869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10869)

```diff
-               uQ: LM,
+               gn: ZV,
```

#### 1366. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10874` → after: `L10517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10517) · [Before (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10874)

```diff
-             UM = null !== (lM = Gr.f.lifeformMeshToBodyPart[HM]) && void 0 !== lM ? lM : mM;
+             tV = null !== (jV = Fe.f.lifeformMeshToBodyPart[rV]) && void 0 !== jV ? jV : vV;
```

#### 1367. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10876` → after: `L10519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10519) · [Before (L10876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10876)

```diff
-           const GM = OM === Rr.d.HIT_ENTITY && (null === (EM = this.Cm.rY[this.Cm.eD][SM]) || void 0 === EM ? void 0 : EM.canAttack) && !this.Cm.rY[this.Cm.eD][SM]._invincible;
+           const FV = JV === Ge.c.HIT_ENTITY && (null === (qV = this.iv.YL[this.iv.bD][YV]) || void 0 === qV ? void 0 : qV.canAttack) && !this.iv.YL[this.iv.bD][YV]._invincible;
```

#### 1368. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10878-L10879` → after: `L10521-L10522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10521-L10522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10521-L10522) · [Before (L10878-L10879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10878-L10879)

```diff
-             uQ: LM,
-             RQ: PM,
+             gn: ZV,
+             Dn: pV,
```

#### 1369. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10881-L10882` → after: `L10524-L10525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10524-L10525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10524-L10525) · [Before (L10881-L10882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10881-L10882)

```diff
-               QS: SM,
-               pQ: UM
+               EY: YV,
+               Cn: tV
```

#### 1370. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10884-L10885` → after: `L10527-L10528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10527-L10528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10527-L10528) · [Before (L10884-L10885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10884-L10885)

```diff
-               QS: null,
-               pQ: null
+               EY: null,
+               Cn: null
```

#### 1371. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10888` → after: `L10531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10531) · [Before (L10888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10888)

```diff
-         }(0, HM.b)().client.gameRecorder.recordBulletShot(this.heldItemState.HZ, nM);
+         }(0, rV.b)().client.gameRecorder.recordBulletShot(this.heldItemState.zC, QV);
```

#### 1372. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10890-L10894` → after: `L10533-L10537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10533-L10537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10533-L10537) · [Before (L10890-L10894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10890-L10894)

```diff
-           eQ: OM.name,
-           bQ: (0, HM.b)().client.getMsgHandler().RiM.state.tickCounter,
-           wQ: zM,
-           tQ: aM,
-           ha: SM
+           Mn: JV.name,
+           zn: (0, rV.b)().client.getMsgHandler().sJV.state.tickCounter,
+           Gn: wV,
+           Wn: yV,
+           By: YV
```

#### 1373. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10896` → after: `L10539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10539) · [Before (L10896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10896)

```diff
-         if ((0, PM.sendColyMessage)(XM.qj, UM), hM) {
+         if ((0, pV.sendColyMessage)(HV.hj, tV), kV) {
```

#### 1374. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10898` → after: `L10541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10541) · [Before (L10898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10898)

```diff
-           const MM = this.Cm.aU,
+           const VV = this.iv.mF,
```

#### 1375. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10900-L10904` → after: `L10543-L10547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10543-L10547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10543-L10547) · [Before (L10900-L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10900-L10904)

```diff
-             iM = null !== (GM = null === (CM = OM.attributes.customAttributes) || void 0 === CM ? void 0 : CM.enchantments) && void 0 !== GM ? GM : {},
-             SM = rM.getEffectLevel(this.Cm.eD, "Damage"),
-             jM = rM.getEffectLevel(this.Cm.eD, "Rested Damage"),
-             PM = null !== (eM = iM.Damage) && void 0 !== eM ? eM : 0,
-             nM = null !== (bM = iM["Critical Damage"]) && void 0 !== bM ? bM : 0;
+             xV = null !== (FV = null === (TV = JV.attributes.customAttributes) || void 0 === TV ? void 0 : TV.enchantments) && void 0 !== FV ? FV : {},
+             YV = eV.getEffectLevel(this.iv.bD, "Damage"),
+             UV = eV.getEffectLevel(this.iv.bD, "Rested Damage"),
+             pV = null !== (PV = xV.Damage) && void 0 !== PV ? PV : 0,
+             QV = null !== (AV = xV["Critical Damage"]) && void 0 !== AV ? AV : 0;
```

#### 1376. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10906-L10907` → after: `L10549-L10550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10549-L10550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10549-L10550) · [Before (L10906-L10907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10906-L10907)

```diff
-               QS: OM,
-               pQ: zM
+               EY: JV,
+               Cn: wV
```

#### 1377. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10911` → after: `L10554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10554) · [Before (L10911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10911)

```diff
-             const iM = this.Cm.rY[this.Cm.eD][OM];
+             const xV = this.iv.YL[this.iv.bD][JV];
```

#### 1378. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10916` → after: `L10559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10559) · [Before (L10916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10916)

```diff
-             HM = (0, LM.t)(HM, SM, jM, PM), "Head" === zM && nM > 0 && (HM *= 1 + .08 * nM);
+             rV = (0, ZV.n)(rV, YV, UV, pV), "Head" === wV && QV > 0 && (rV *= 1 + .08 * QV);
```

#### 1379. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10918` → after: `L10561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10561) · [Before (L10918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10918)

```diff
-               JM = (0, LM.S)(iM._armourReductionSum, iM._protectionEnchantSum, rM.getEffectLevel(OM, "Damage Reduction"), rM.getEffectLevel(OM, "Weakness"), iM._receivingDamageMultiplier),
+               bV = (0, ZV.M)(xV._armourReductionSum, xV._protectionEnchantSum, eV.getEffectLevel(JV, "Damage Reduction"), eV.getEffectLevel(JV, "Weakness"), xV._receivingDamageMultiplier),
```

#### 1380. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10920` → after: `L10563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10563) · [Before (L10920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10920)

```diff
-             mM.i.Tz("shotPlayer", {
+             vV.h.QZ("shotPlayer", {
```

#### 1381. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10927-L10928` → after: `L10570-L10571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10570-L10571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10570-L10571) · [Before (L10927-L10928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10927-L10928)

```diff
-           mM.i.Tz("localGunHitmarker", {
-             mO: JM
+           vV.h.QZ("localGunHitmarker", {
+             TJ: bV
```

#### 1382. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10931` → after: `L10574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10574) · [Before (L10931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10931)

```diff
-         mM.i.Tz("localPlayerNewShotsLeft", OM.attributes.customAttributes.shotsLeft);
+         vV.h.QZ("localPlayerNewShotsLeft", JV.attributes.customAttributes.shotsLeft);
```

#### 1383. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10937` → after: `L10580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10580) · [Before (L10937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10937)

```diff
-         return this.inaccuracyCalculator.shot(MM), this.Cm.camera.bK.add(RM), 0 === this.getShotsLeftCount() && this.reload(MM), !0
+         return this.inaccuracyCalculator.shot(VV), this.iv.camera.n_.add(GV), 0 === this.getShotsLeftCount() && this.reload(VV), !0
```

#### 1384. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10949-L10950` → after: `L10592-L10593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10592-L10593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10592-L10593) · [Before (L10949-L10950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10949-L10950)

```diff
-           hU: PM
-         } = this.Cm, nM = this.bloxd.Aq(this.heldItemState.HZ), QM = this.pickActionHelper.pickWeaponRaycast(MM, rM, this.bulletReachDistance, {
+           sF: pV
+         } = this.iv, QV = this.bloxd.N_(this.heldItemState.zC), nV = this.pickActionHelper.pickWeaponRaycast(VV, eV, this.bulletReachDistance, {
```

#### 1385. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10956` → after: `L10599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10599) · [Before (L10956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10956)

```diff
-           ZN: HM,
+           iK: rV,
```

#### 1386. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10958-L10959` → after: `L10601-L10602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10601-L10602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10601-L10602) · [Before (L10958-L10959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10958-L10959)

```diff
-         } = QM, JM = null !== (jM = QM.globalRayOrigin) && void 0 !== jM ? jM : SM().copy(Fr, this.bloxd.getLifeformEyePos(this.heldItemState.HZ, !1)), dM = null !== (aM = QM.distanceTravelled) && void 0 !== aM ? aM : this.bulletReachDistance, yM = SM().tm(Br, JM, rM, 2.5 * nM),  … [truncated]
-         PM.eZ(lM, "hidingMeshManager", {
+         } = nV, bV = null !== (UV = nV.globalRayOrigin) && void 0 !== UV ? UV : YV().copy(me, this.bloxd.getLifeformEyePos(this.heldItemState.zC, !1)), EV = null !== (yV = nV.distanceTravelled) && void 0 !== yV ? yV : this.bulletReachDistance, BV = YV().dv(Ke, bV, eV, 2.5 * QV),  … [truncated]
+         pV.WC(jV, "hidingMeshManager", {
```

#### 1387. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10962` → after: `L10605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10605) · [Before (L10962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10962)

```diff
-             PM.eZ(lM, PM.names.mesh, {
+             pV.WC(jV, pV.names.mesh, {
```

#### 1388. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10964` → after: `L10607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10607) · [Before (L10964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10964)

```diff
-               QPM: !0
+               zQV: !0
```

#### 1389. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10968` → after: `L10611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10611) · [Before (L10968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10968)

```diff
-             PM.bZ(lM, PM.names.mesh)
+             pV.gC(jV, pV.names.mesh)
```

#### 1390. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10973-L10974` → after: `L10616-L10617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10616-L10617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10616-L10617) · [Before (L10973-L10974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10973-L10974)

```diff
-           az: "bullet"
-         }), PM.eZ(lM, "bullet", {
+           Ew: "bullet"
+         }), pV.WC(jV, "bullet", {
```

#### 1391. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10976` → after: `L10619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10619) · [Before (L10976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10976)

```diff
-             zM === Rr.d.HIT_BLOCK && this.makeBulletHole(mM, HM, iM)
+             wV === Ge.c.HIT_BLOCK && this.makeBulletHole(vV, rV, xV)
```

#### 1392. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10989` → after: `L10632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10632) · [Before (L10989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10989)

```diff
-           uQ: UM,
+           gn: tV,
```

#### 1393. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10994` → after: `L10637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10637) · [Before (L10994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10994)

```diff
-         return "head" === this.Cm.aU.gunshotOrigin ? "head" : "default"
+         return "head" === this.iv.mF.gunshotOrigin ? "head" : "default"
```

#### 1394. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10997` → after: `L10640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10640) · [Before (L10997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L10997)

```diff
-         return this.heldItemState.HZ === this.Cm.eD && !0 === KM.d.get("clientEscMenuOptions").showWeaponRaycasts
+         return this.heldItemState.zC === this.iv.bD && !0 === sV.b.get("clientEscMenuOptions").showWeaponRaycasts
```

#### 1395. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11001` → after: `L10644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10644) · [Before (L11001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11001)

```diff
-         const iM = this.heldItemState.HZ === this.Cm.eD,
+         const xV = this.heldItemState.zC === this.iv.bD,
```

#### 1396. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11005` → after: `L10648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10648) · [Before (L11005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11005)

```diff
-           if (OM && null === this.Cm.hU.RrM(this.Cm.eD).findItem("Ammo")) return
+           if (JV && null === this.iv.sF.sxV(this.iv.bD).findItem("Ammo")) return
```

#### 1397. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11009-L11011` → after: `L10652-L10654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10652-L10654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10652-L10654) · [Before (L11009-L11011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11009-L11011)

```diff
-           const MM = (0, HM.b)().client.inventoryPrediction.predict(OM ? zr.e.takeFirst("Ammo") : null);
-           (0, PM.sendColyMessage)(XM._i, {
-             ha: MM
+           const VV = (0, rV.b)().client.inventoryPrediction.predict(JV ? we.b.takeFirst("Ammo") : null);
+           (0, pV.sendColyMessage)(HV.Pi, {
+             By: VV
```

#### 1398. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11015` → after: `L10658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10658) · [Before (L11015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11015)

```diff
-         this.heldItemState.HZ === this.Cm.eD && mM.i.Tz("middleScreenBarInitiate", {
+         this.heldItemState.zC === this.iv.bD && vV.h.QZ("middleScreenBarInitiate", {
```

#### 1399. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11017` → after: `L10660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10660) · [Before (L11017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11017)

```diff
-           zO: !0,
+           tJ: !0,
```

#### 1400. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11020` → after: `L10663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10663) · [Before (L11020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11020)

```diff
-           this.reloading = !1, this.numBulletsReloading = 0, this.reloadTimeouts = [], this.heldItemState.HZ === this.Cm.eD && (this.setShotsLeft(this.gunStats.getStat("clipSize")), mM.i.Tz("localPlayerNewShotsLeft", this.getShotsLeftCount()))
+           this.reloading = !1, this.numBulletsReloading = 0, this.reloadTimeouts = [], this.heldItemState.zC === this.iv.bD && (this.setShotsLeft(this.gunStats.getStat("clipSize")), vV.h.QZ("localPlayerNewShotsLeft", this.getShotsLeftCount()))
```

#### 1401. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11022` → after: `L10665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10665) · [Before (L11022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11022)

```diff
-         const jM = this.heldItemState.HZ === this.Cm.eD ? ur.f.firstPersonReload : ur.f.thirdPersonReload,
+         const UV = this.heldItemState.zC === this.iv.bD ? ze.d.firstPersonReload : ze.d.thirdPersonReload,
```

#### 1402. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11025` → after: `L10668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10668) · [Before (L11025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11025)

```diff
-             void 0 !== rM && Hr.e.play(rM, jM, this.heldItemState.HZ, void 0, void 0)
+             void 0 !== eV && re.d.play(eV, UV, this.heldItemState.zC, void 0, void 0)
```

#### 1403. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11032` → after: `L10675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10675) · [Before (L11032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11032)

```diff
-           aM(`${nM}_load_bullet_`);
+           yV(`${QV}_load_bullet_`);
```

#### 1404. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11034` → after: `L10677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10677) · [Before (L11034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11034)

```diff
-             aM(`${nM}_load_bullet_`)
+             yV(`${QV}_load_bullet_`)
```

#### 1405. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11037` → after: `L10680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10680) · [Before (L11037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11037)

```diff
-             aM(`${nM}_cock_`)
+             yV(`${QV}_cock_`)
```

#### 1406. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11041-L11042` → after: `L10684-L10685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10684-L10685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10684-L10685) · [Before (L11041-L11042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11041-L11042)

```diff
-           aM(`${nM}_magazine_unload_`), this.reloadTimeouts.push(setTimeout((() => {
-             aM(`${nM}_magazine_load_`)
+           yV(`${QV}_magazine_unload_`), this.reloadTimeouts.push(setTimeout((() => {
+             yV(`${QV}_magazine_load_`)
```

#### 1407. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11044` → after: `L10687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10687) · [Before (L11044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11044)

```diff
-             aM(`${nM}_cock_`)
+             yV(`${QV}_cock_`)
```

#### 1408. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11062` → after: `L10705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10705) · [Before (L11062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11062)

```diff
-           return rM < iM ? rM / iM : rM > MM - iM ? 1 - (rM - (MM - iM)) / iM : 1
+           return eV < xV ? eV / xV : eV > VV - xV ? 1 - (eV - (VV - xV)) / xV : 1
```

#### 1409. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11070-L11071` → after: `L10713-L10714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10713-L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10713-L10714) · [Before (L11070-L11071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11070-L11071)

```diff
-         const rM = this.Cm.hU.RrM(this.heldItemState.HZ).getItemAtSelectedSlot().attributes.customAttributes;
-         rM.shotsLeft = MM, this.Cm.hU.RrM(this.heldItemState.HZ).getItemAtSelectedSlot().attributes.customAttributes = rM
+         const eV = this.iv.sF.sxV(this.heldItemState.zC).getItemAtSelectedSlot().attributes.customAttributes;
+         eV.shotsLeft = VV, this.iv.sF.sxV(this.heldItemState.zC).getItemAtSelectedSlot().attributes.customAttributes = eV
```

#### 1410. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11075` → after: `L10718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10718) · [Before (L11075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11075)

```diff
-         return null === (MM = this.Cm.hU.RrM(this.heldItemState.HZ).getItemAtSelectedSlot().attributes.customAttributes) || void 0 === MM ? void 0 : MM.shotsLeft
+         return null === (VV = this.iv.sF.sxV(this.heldItemState.zC).getItemAtSelectedSlot().attributes.customAttributes) || void 0 === VV ? void 0 : VV.shotsLeft
```

#### 1411. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11086-L11087` → after: `L10729-L10730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10729-L10730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10729-L10730) · [Before (L11086-L11087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11086-L11087)

```diff
-         this.Cm.jT([MM, rM, iM], OM);
-         const SM = this.Cm.hU.add(OM, .1, .1, this.gunTypeObj.getBulletCasingMesh(), null, !0),
+         this.iv.i_([VV, eV, xV], JV);
+         const YV = this.iv.sF.add(JV, .1, .1, this.gunTypeObj.getBulletCasingMesh(), null, !0),
```

#### 1412. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11091-L11092` → after: `L10734-L10735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10734-L10735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10734-L10735) · [Before (L11091-L11092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11091-L11092)

```diff
-         PM = this.aimsAsLocalPlayer() ? BM.b.getAimHeading(this.Cm) : this.Cm.hU.grM(this.heldItemState.HZ).heading, this.Cm.hU.Av(SM).applyImpulse([Math.cos(PM) * aM, jM, -Math.sin(PM) * aM]), setTimeout((() => {
-           this.Cm.hU.deleteEntity(SM)
+         pV = this.aimsAsLocalPlayer() ? KV.e.getAimHeading(this.iv) : this.iv.sF.HxV(this.heldItemState.zC).heading, this.iv.sF.uH(YV).applyImpulse([Math.cos(pV) * yV, UV, -Math.sin(pV) * yV]), setTimeout((() => {
+           this.iv.sF.deleteEntity(YV)
```

#### 1413. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11098-L11103` → after: `L10741-L10746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10741-L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10741-L10746) · [Before (L11098-L11103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11098-L11103)

```diff
-           aM = this.Cm.ErM(MM, null, Fr),
-           PM = new dM.sh(aM[0] + rM[0] * jM, aM[1] + rM[1] * jM, aM[2] + rM[2] * jM),
-           nM = new dM.sh(aM[0] - rM[0], aM[1] - rM[1], aM[2] - rM[2]);
-         OM.position = PM, (0, yM.m)(OM, nM.x - PM.x, nM.y - PM.y, nM.z - PM.z), OM.AJ = !1;
-         const QM = SM().tm(Br, MM, rM, jM);
-         this.Cm.CL.vJ(OM, !1, QM), setTimeout((() => {
+           yV = this.iv.oxV(VV, null, me),
+           pV = new EV.Ik(yV[0] + eV[0] * UV, yV[1] + eV[1] * UV, yV[2] + eV[2] * UV),
+           QV = new EV.Ik(yV[0] - eV[0], yV[1] - eV[1], yV[2] - eV[2]);
+         JV.position = pV, (0, BV.o)(JV, QV.x - pV.x, QV.y - pV.y, QV.z - pV.z), JV.QE = !1;
+         const nV = YV().dv(Ke, VV, eV, UV);
+         this.iv.gZ.wE(JV, !1, nV), setTimeout((() => {
```

#### 1414. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11112` → after: `L10755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10755) · [Before (L11112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11112)

```diff
-           (0, yM.p)(this.mesh, OM, SM + jM, .4)
+           (0, BV.q)(this.mesh, JV, YV + UV, .4)
```

#### 1415. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11117-L11118` → after: `L10760-L10761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10760-L10761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10760-L10761) · [Before (L11117-L11118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11117-L11118)

```diff
-         const iM = 1 - .25 * MM * (null !== (rM = this.gunStats.getStat("aimZoomFactor")) && void 0 !== rM ? rM : 1);
-         this.Cm.hU.getState(this.Cm.eD, "playerCameraAdjustment").fovMultiplier.setMultiplierType("aimingGunZoom", iM)
+         const xV = 1 - .25 * VV * (null !== (eV = this.gunStats.getStat("aimZoomFactor")) && void 0 !== eV ? eV : 1);
+         this.iv.sF.getState(this.iv.bD, "playerCameraAdjustment").fovMultiplier.setMultiplierType("aimingGunZoom", xV)
```

#### 1416. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11129` → after: `L10772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10772) · [Before (L11129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11129)

```diff
-           SM().tm(rM, rM, iM, .001);
+           YV().dv(eV, eV, xV, .001);
```

#### 1417. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11131` → after: `L10774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10774) · [Before (L11131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11131)

```diff
-           (0, yM.p)(this.bulletBlockedBillboardPlane, OM, jM, aM), SM().tm(rM, rM, iM, -1), (0, yM.m)(this.bulletBlockedBillboardPlane, rM[0] - OM, rM[1] - jM, rM[2] - aM)
+           (0, BV.q)(this.bulletBlockedBillboardPlane, JV, UV, yV), YV().dv(eV, eV, xV, -1), (0, BV.o)(this.bulletBlockedBillboardPlane, eV[0] - JV, eV[1] - UV, eV[2] - yV)
```

#### 1418. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11133` → after: `L10776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10776) · [Before (L11133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11133)

```diff
-         this.Cm.CL.LnM(this.bulletBlockedBillboardPlane, null !== MM)
+         this.iv.gZ.XnV(this.bulletBlockedBillboardPlane, null !== VV)
```

#### 1419. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11139` → after: `L10782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10782) · [Before (L11139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11139)

```diff
-         Hr.e.preloadAtIdle([...(0, pr.m)(MM), qr, Tr])
+         re.d.preloadAtIdle([...(0, We.o)(VV), Se, Ie])
```

#### 1420. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11151` → after: `L10794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10794) · [Before (L11151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11151)

```diff
-         if (MM - this.soundLastRoundFired > 3 * rM && (0, pr.g)(iM, `${OM}_first_shot_01`)) this.lastGunShotTail = Hr.e.play(`${OM}_first_shot_01`, ur.f.gunShot, this.heldItemState.HZ, 75, 10);
+         if (VV - this.soundLastRoundFired > 3 * eV && (0, We.j)(xV, `${JV}_first_shot_01`)) this.lastGunShotTail = re.d.play(`${JV}_first_shot_01`, ze.d.gunShot, this.heldItemState.zC, 75, 10);
```

#### 1421. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11153-L11155` → after: `L10796-L10798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10796-L10798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10796-L10798) · [Before (L11153-L11155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11153-L11155)

```diff
-           const MM = (0, pr.f)(`${OM}_shot_`);
-           this.lastGunShotTail = Hr.e.play(MM, ur.f.gunShot, this.heldItemState.HZ, 75, 10)
-         }(0, pr.g)(iM, `${OM}_tail_only_shot_01`) && (this.lastGunShotTail = Hr.e.play(`${OM}_tail_only_shot_01`, ur.f.gunShot, this.heldItemState.HZ, 75, 10))
+           const VV = (0, We.f)(`${JV}_shot_`);
+           this.lastGunShotTail = re.d.play(VV, ze.d.gunShot, this.heldItemState.zC, 75, 10)
+         }(0, We.j)(xV, `${JV}_tail_only_shot_01`) && (this.lastGunShotTail = re.d.play(`${JV}_tail_only_shot_01`, ze.d.gunShot, this.heldItemState.zC, 75, 10))
```

#### 1422. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11158` → after: `L10801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10801) · [Before (L11158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11158)

```diff
-         Hr.e.play((0, pr.f)(qr), ur.f.gunHeadshot)
+         re.d.play((0, We.f)(Se), ze.d.gunHeadshot)
```

#### 1423. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11163` → after: `L10806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10806) · [Before (L11163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11163)

```diff
-           Hr.e.play((0, pr.f)(Tr), ur.f.bulletShellBounce)
+           re.d.play((0, We.f)(Ie), ze.d.bulletShellBounce)
```

#### 1424. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11167-L11169` → after: `L10810-L10812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10810-L10812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10810-L10812) · [Before (L11167-L11169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11167-L11169)

```diff
-     var cr = iM(39230),
-       Mi = iM(39435),
-       ri = iM(38558);
+     var Oe = xV(39367),
+       Vx = xV(39588),
+       ex = xV(38750);
```

#### 1425. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11172` → after: `L10815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10815) · [Before (L11172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11172)

```diff
-         super(MM, rM, iM, OM, SM), this.inputs = void 0, this.schedule = void 0, this.readyOffset = void 0, this.firingOffset = void 0, this.fireInterval = void 0, this.inputs = 0, this.schedule = new tr(50), this.readyOffset = this.firstPersonPosOffset, this.firingOffset = new d … [truncated]
+         super(VV, eV, xV, JV, YV), this.inputs = void 0, this.schedule = void 0, this.readyOffset = void 0, this.firingOffset = void 0, this.fireInterval = void 0, this.inputs = 0, this.schedule = new Xe(50), this.readyOffset = this.firstPersonPosOffset, this.firingOffset = new E … [truncated]
```

#### 1426. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11181` → after: `L10824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10824) · [Before (L11181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11181)

```diff
-         rM ? this.schedule.fired(MM, OM, !0) : this.schedule.arm(MM + OM), mM.i.Tz("middleScreenBarInitiate", {
+         eV ? this.schedule.fired(VV, JV, !0) : this.schedule.arm(VV + JV), vV.h.QZ("middleScreenBarInitiate", {
```

#### 1427. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11183` → after: `L10826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10826) · [Before (L11183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11183)

```diff
-           zO: !0,
+           tJ: !0,
```

#### 1428. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11189` → after: `L10832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10832) · [Before (L11189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11189)

```diff
-         if (!cr.d.includes(SM)) return this._performAltAction();
+         if (!Oe.c.includes(YV)) return this._performAltAction();
```

#### 1429. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11191-L11192` → after: `L10834-L10835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10834-L10835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10834-L10835) · [Before (L11191-L11192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11191-L11192)

```diff
-           Cm: jM
-         } = this, aM = null === (iM = jM.hU.urM(jM.eD)) || void 0 === iM ? void 0 : iM.inventory, PM = null === aM || void 0 === aM ? void 0 : aM.getSelectedSlotIndex();
+           iv: UV
+         } = this, yV = null === (xV = UV.sF.uxV(UV.bD)) || void 0 === xV ? void 0 : xV.inventory, pV = null === yV || void 0 === yV ? void 0 : yV.getSelectedSlotIndex();
```

#### 1430. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11196` → after: `L10839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10839) · [Before (L11196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11196)

```diff
-         }) : (new Mi.e(this.bloxd, "", SM).initClientPredicted(PM), {
+         }) : (new Vx.d(this.bloxd, "", YV).initClientPredicted(pV), {
```

#### 1431. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11210` → after: `L10853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10853) · [Before (L11210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11210)

```diff
-         null === this.fireInterval && (this.fireInterval = null !== (MM = this.bloxd.getItemStat(this.Cm.eD, this.typeObj.name, "fireInterval")) && void 0 !== MM ? MM : 0);
+         null === this.fireInterval && (this.fireInterval = null !== (VV = this.bloxd.getItemStat(this.iv.bD, this.typeObj.name, "fireInterval")) && void 0 !== VV ? VV : 0);
```

#### 1432. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11219` → after: `L10862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10862) · [Before (L11219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11219)

```diff
-       BiM() {
+       wYV() {
```

#### 1433. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11222` → after: `L10865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10865) · [Before (L11222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11222)

```diff
-       xiM() {
+       pYV() {
```

#### 1434. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11228` → after: `L10871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10871) · [Before (L11228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11228)

```diff
-       uQM() {
+       HwV() {
```

#### 1435. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11231` → after: `L10874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10874) · [Before (L11231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11231)

```diff
-       AiM() {
+       yYV() {
```

#### 1436. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11234` → after: `L10877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10877) · [Before (L11234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11234)

```diff
-       gQM() {
+       KwV() {
```

#### 1437. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11252-L11253` → after: `L10895-L10896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10895-L10896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10895-L10896) · [Before (L11252-L11253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11252-L11253)

```diff
-       XiM() {
-         return null !== (0, ri.m)(this.pickActionHelper) ? this._performAltAction() : this.fire(Date.now(), !1)
+       ZYV() {
+         return null !== (0, ex.k)(this.pickActionHelper) ? this._performAltAction() : this.fire(Date.now(), !1)
```

#### 1438. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11256` → after: `L10899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10899) · [Before (L11256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11256)

```diff
-         super.bL(MM, rM), this.inputs > 0 && this.getFireInterval() && this.fire(rM, !0)
+         super.iZ(VV, eV), this.inputs > 0 && this.getFireInterval() && this.fire(eV, !0)
```

#### 1439. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11260` → after: `L10903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10903) · [Before (L11260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11260)

```diff
-         this.firstPersonPosOffset = dM.sh.Lerp(this.firingOffset, this.readyOffset, iM), super.renderTickLocalPlayer(MM, rM)
+         this.firstPersonPosOffset = EV.Ik.Lerp(this.firingOffset, this.readyOffset, xV), super.renderTickLocalPlayer(VV, eV)
```

#### 1440. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11266` → after: `L10909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10909) · [Before (L11266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11266)

```diff
-     var Oi = iM(39455);
+     var Jx = xV(39614);
```

#### 1441. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11269-L11270` → after: `L10912-L10913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10912-L10913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10912-L10913) · [Before (L11269-L11270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11269-L11270)

```diff
-       const MM = (0, HM.f)(),
-         rM = MM.hU.qrM(MM.eD);
+       const VV = (0, rV.d)(),
+         eV = VV.sF.kJV(VV.bD);
```

#### 1442. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11282` → after: `L10925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10925) · [Before (L11282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11282)

```diff
-       return mM.i.subscribe("updatedInventory", (() => {
+       return vV.h.subscribe("updatedInventory", (() => {
```

#### 1443. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11285` → after: `L10928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10928) · [Before (L11285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11285)

```diff
-         name: "QG",
+         name: "JA",
```

#### 1444. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11288` → after: `L10931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10931) · [Before (L11288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11288)

```diff
-           QG: null,
+           JA: null,
```

#### 1445. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11310` → after: `L10953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10953) · [Before (L11310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11310)

```diff
-         PU: function(rM, iM) {
+         uF: function(eV, xV) {
```

#### 1446. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11313-L11315` → after: `L10956-L10958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10956-L10958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10956-L10958) · [Before (L11313-L11315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11313-L11315)

```diff
-             jM = new zM.b(MM, rM);
-           iM.fistItem = new JM.e(MM, iM, OM, jM), iM.QG = iM.fistItem, iM.heldType = "Fist", iM._standardItem = new WM(MM, iM, OM, iM.fistItem, jM), iM._blockItem = new mr(MM, iM, OM, iM.fistItem, jM), iM._chargeableItem = new lr(MM, iM, OM, iM.fistItem, jM), iM._gunItem = new Vr … [truncated]
-             iM.QG.wQM()
+             UV = new wV.d(VV, eV);
+           xV.fistItem = new bV.e(VV, xV, JV, UV), xV.JA = xV.fistItem, xV.heldType = "Fist", xV._standardItem = new RV(VV, xV, JV, xV.fistItem, UV), xV._blockItem = new ve(VV, xV, JV, xV.fistItem, UV), xV._chargeableItem = new je(VV, xV, JV, xV.fistItem, UV), xV._gunItem = new de … [truncated]
+             xV.JA.fwV()
```

#### 1447. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11317-L11319` → after: `L10960-L10962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10960-L10962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10960-L10962) · [Before (L11317-L11319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11317-L11319)

```diff
-             iM.QG !== iM.fistItem && (iM.QG.reset(), iM.QG = iM.fistItem, iM.heldType = "Fist", iM.heldItemName = null, iM._heldLightTintFloor = null, iM.fistItem.selected(), mM.i.Tz("newLocalPlayerHeldItem", iM.QG)), iM._gunItem.forgetLastShots()
-           }))), iM._playerInvisSub = mM.i.subscribe(`otherEntitySettingsClientifiedEId|${iM.HZ}|_invisibleEffect`, (rM => {
-             iM.HZ !== MM.eD && (iM._visible = !rM, iM.QG && iM.QG.wQM())
+             xV.JA !== xV.fistItem && (xV.JA.reset(), xV.JA = xV.fistItem, xV.heldType = "Fist", xV.heldItemName = null, xV._heldLightTintFloor = null, xV.fistItem.selected(), vV.h.QZ("newLocalPlayerHeldItem", xV.JA)), xV._gunItem.forgetLastShots()
+           }))), xV._playerInvisSub = vV.h.subscribe(`otherEntitySettingsClientifiedEId|${xV.zC}|_invisibleEffect`, (eV => {
+             xV.zC !== VV.bD && (xV._visible = !eV, xV.JA && xV.JA.fwV())
```

#### 1448. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11322-L11325` → after: `L10965-L10968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10965-L10968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10965-L10968) · [Before (L11322-L11325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11322-L11325)

```diff
-         vW: function(MM, rM) {
-           for (const iM in rM) rM[iM] instanceof hM.c && rM[iM].reset();
-           for (const iM in rM) rM[iM] instanceof hM.c && rM[iM].destroy();
-           mM.i.unsubscribe(rM._playerVisSub), mM.i.unsubscribe(rM._playerInvisSub)
+         bR: function(VV, eV) {
+           for (const xV in eV) eV[xV] instanceof kV.e && eV[xV].reset();
+           for (const xV in eV) eV[xV] instanceof kV.e && eV[xV].destroy();
+           vV.h.unsubscribe(eV._playerVisSub), vV.h.unsubscribe(eV._playerInvisSub)
```

#### 1449. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11329` → after: `L10972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10972) · [Before (L11329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11329)

```diff
-           for (const SM of iM) zi(MM, SM), SM.QG ? SM.QG.bL(rM, OM) : console.error(new Error(`state.helditem for player ${SM.HZ} is falsy - ${SM.QG}`))
+           for (const YV of xV) wx(VV, YV), YV.JA ? YV.JA.iZ(eV, JV) : console.error(new Error(`state.helditem for player ${YV.zC} is falsy - ${YV.JA}`))
```

#### 1450. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11331` → after: `L10974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10974) · [Before (L11331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11331)

```diff
-         dU: function(rM, iM) {
+         SF: function(eV, xV) {
```

#### 1451. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11333-L11334` → after: `L10976-L10977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10976-L10977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10976-L10977) · [Before (L11333-L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11333-L11334)

```diff
-             SM = (0, Oi.i)();
-           for (const jM of iM) jM.QG ? jM.HZ === MM.eD || (0, Oi.l)(jM.HZ, SM) ? jM.QG.renderTickLocalPlayer(rM, OM) : jM.QG.renderTickNetworkedPlayer(rM, OM) : console.error(new Error(`state.helditem for player ${jM.HZ} is falsy - ${jM.QG}`))
+             YV = (0, Jx.l)();
+           for (const UV of xV) UV.JA ? UV.zC === VV.bD || (0, Jx.o)(UV.zC, YV) ? UV.JA.renderTickLocalPlayer(eV, JV) : UV.JA.renderTickNetworkedPlayer(eV, JV) : console.error(new Error(`state.helditem for player ${UV.zC} is falsy - ${UV.JA}`))
```

#### 1452. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11342-L11343` → after: `L10985-L10986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10985-L10986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10985-L10986) · [Before (L11342-L11343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11342-L11343)

```diff
-       const yM = MM.hU.KrM(rM.HZ),
-         lM = MM.hU.WrM(rM.HZ),
+       const BV = VV.sF.rJV(eV.zC),
+         jV = VV.sF.IxV(eV.zC),
```

#### 1453. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11348-L11350` → after: `L10991-L10993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10991-L10993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10991-L10993) · [Before (L11348-L11350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11348-L11350)

```diff
-           const iM = MM.hU.urM(rM.HZ).selectedItem;
-           JM = null === iM || void 0 === iM ? void 0 : iM.typeObj, dM = null !== (UM = null === iM || void 0 === iM || null === (GM = iM.attributes) || void 0 === GM || null === (CM = GM.customAttributes) || void 0 === CM ? void 0 : CM.enchantmentTier) && void 0 !== UM ? UM : nul … [truncated]
-         } else rM.networkedHeldItemName && (JM = jM.A[rM.networkedHeldItemName], dM = rM.networkedHeldItemEnchantmentTier);
+           const xV = VV.sF.uxV(eV.zC).selectedItem;
+           bV = null === xV || void 0 === xV ? void 0 : xV.typeObj, EV = null !== (tV = null === xV || void 0 === xV || null === (FV = xV.attributes) || void 0 === FV || null === (TV = FV.customAttributes) || void 0 === TV ? void 0 : TV.enchantmentTier) && void 0 !== tV ? tV : nul … [truncated]
+         } else eV.networkedHeldItemName && (bV = UV.E[eV.networkedHeldItemName], EV = eV.networkedHeldItemEnchantmentTier);
```

#### 1454. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11352` → after: `L10995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10995) · [Before (L11352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11352)

```diff
-       const eM = lM && MM.hU.RrM(rM.HZ).getSelectedSlotIndex() !== rM._lastInvenIdx,
+       const PV = jV && VV.sF.sxV(eV.zC).getSelectedSlotIndex() !== eV._lastInvenIdx,
```

#### 1455. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11355-L11360` → after: `L10998-L11003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10998-L11003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L10998-L11003) · [Before (L11355-L11360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11355-L11360)

```diff
-       (((null === (iM = JM) || void 0 === iM ? void 0 : iM.name) || null) !== rM.heldItemName || eM || bM) && (rM.QG !== rM.fistItem && ((null === (wM = JM) || void 0 === wM ? void 0 : wM.meta.rootId) !== MM.bloxd.getMetaInfo(rM.heldItemName).rootId || eM || bM) && rM.QG.reset(), … [truncated]
-       lM && (rM._lastInvenIdx = MM.hU.RrM(rM.HZ).getSelectedSlotIndex()), rM.heldItemName = null !== (OM = null === (PM = JM) || void 0 === PM ? void 0 : PM.name) && void 0 !== OM ? OM : null, rM.heldItemEnchantmentTier = dM;
-       const kM = JM && !(0, jM.x)(JM.type) ? JM.Ch : void 0,
-         ZM = EM ? (0, DM.l)(rM.HZ) : null,
-         oM = ZM ? jM.A[ZM].Ch : void 0,
-         fM = EM && null !== (nM = null === (QM = MM.rY[MM.eD]) || void 0 === QM || null === (zM = QM[rM.HZ]) || void 0 === zM ? void 0 : zM._glowingEffect) && void 0 !== nM && nM ? sM.GLOWING_EFFECT_EMISSION : void 0;
+       (((null === (xV = bV) || void 0 === xV ? void 0 : xV.name) || null) !== eV.heldItemName || PV || AV) && (eV.JA !== eV.fistItem && ((null === (NV = bV) || void 0 === NV ? void 0 : NV.meta.rootId) !== VV.bloxd.getMetaInfo(eV.heldItemName).rootId || PV || AV) && eV.JA.reset(), … [truncated]
+       jV && (eV._lastInvenIdx = VV.sF.sxV(eV.zC).getSelectedSlotIndex()), eV.heldItemName = null !== (JV = null === (pV = bV) || void 0 === pV ? void 0 : pV.name) && void 0 !== JV ? JV : null, eV.heldItemEnchantmentTier = EV;
+       const iV = bV && !(0, UV.B)(bV.type) ? bV.Lk : void 0,
+         CV = qV ? (0, DV.q)(eV.zC) : null,
+         aV = CV ? UV.E[CV].Lk : void 0,
+         oV = qV && null !== (QV = null === (nV = VV.YL[VV.bD]) || void 0 === nV || null === (wV = nV[eV.zC]) || void 0 === wV ? void 0 : wV._glowingEffect) && void 0 !== QV && QV ? gV.GLOWING_EFFECT_EMISSION : void 0;
```

#### 1456. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11362-L11363` → after: `L11005-L11006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11005-L11006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11005-L11006) · [Before (L11362-L11363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11362-L11363)

```diff
-       const YM = null !== (HM = null === (hM = MM.hU.vrM(rM.HZ)) || void 0 === hM ? void 0 : hM.isReplayLocalPlayer) && void 0 !== HM && HM;
-       if (rM.HZ === MM.eD || YM) {
+       const cV = null !== (rV = null === (kV = VV.sF.QJV(eV.zC)) || void 0 === kV ? void 0 : kV.isReplayLocalPlayer) && void 0 !== rV && rV;
+       if (eV.zC === VV.bD || cV) {
```

#### 1457. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11365-L11366` → after: `L11008-L11009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11008-L11009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11008-L11009) · [Before (L11365-L11366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11365-L11366)

```diff
-           SSM: iM
-         } = MM.CL, {
+           FUV: xV
+         } = VV.gZ, {
```

#### 1458. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11370-L11374` → after: `L11013-L11017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11013-L11017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11013-L11017) · [Before (L11370-L11374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11370-L11374)

```diff
-         } = MM.aU;
-         SM().copy(MM.CL.KPM, null !== fM && void 0 !== fM ? fM : SM().ZERO);
-         const nM = EM ? OM : null,
-           QM = EM && "number" === typeof aM ? aM : null,
-           zM = EM && "number" === typeof PM ? PM : null,
+         } = VV.mF;
+         YV().copy(VV.gZ.ZnV, null !== oV && void 0 !== oV ? oV : YV().ZERO);
+         const QV = qV ? JV : null,
+           nV = qV && "number" === typeof yV ? yV : null,
+           wV = qV && "number" === typeof pV ? pV : null,
```

#### 1459. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11376-L11378` → after: `L11019-L11021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11019-L11021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11019-L11021) · [Before (L11376-L11378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11376-L11378)

```diff
-             const iM = rM && !(0, jM.x)(rM.type) ? mi(rM) : null,
-               OM = (0, DM.l)(MM),
-               aM = OM ? mi(jM.A[OM]) : null;
+             const xV = eV && !(0, UV.B)(eV.type) ? vx(eV) : null,
+               JV = (0, DV.q)(VV),
+               yV = JV ? vx(UV.E[JV]) : null;
```

#### 1460. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11386-L11387` → after: `L11029-L11030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11029-L11030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11029-L11030) · [Before (L11386-L11387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11386-L11387)

```diff
-           }(rM.HZ, JM) : null;
-         if (mM ? (MM.CL.qPM = null !== QM && void 0 !== QM ? QM : mM.range, MM.CL.IPM = null !== zM ? ni(zM) : mM.coneCos) : (MM.CL.qPM = null !== QM && void 0 !== QM ? QM : 0, MM.CL.IPM = 0), nM) SM().scale(iM, (0, LM.W)(nM), 15);
+           }(eV.zC, bV) : null;
+         if (vV ? (VV.gZ.vnV = null !== nV && void 0 !== nV ? nV : vV.range, VV.gZ.wnV = null !== wV ? Qx(wV) : vV.coneCos) : (VV.gZ.vnV = null !== nV && void 0 !== nV ? nV : 0, VV.gZ.wnV = 0), QV) YV().scale(xV, (0, ZV.R)(QV), 15);
```

#### 1461. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11391-L11392` → after: `L11034-L11035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11034-L11035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11034-L11035) · [Before (L11391-L11392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11391-L11392)

```diff
-             KPM: rM
-           } = MM.CL;
+             ZnV: eV
+           } = VV.gZ;
```

#### 1462. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11400` → after: `L11043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11043) · [Before (L11400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11400)

```diff
-       if (!MM || void 0 === MM.spotlightRange || !MM.Ch) return null;
+       if (!VV || void 0 === VV.spotlightRange || !VV.Lk) return null;
```

#### 1463. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11403` → after: `L11046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11046) · [Before (L11403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11403)

```diff
-         colour: MM.Ch,
+         colour: VV.Lk,
```

#### 1464. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11409` → after: `L11052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11052) · [Before (L11409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11409)

```diff
-   39372: (MM, rM, iM) => {
+   39527: (VV, eV, xV) => {
```

#### 1465. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11414-L11419` → after: `L11057-L11062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11057-L11062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11057-L11062) · [Before (L11414-L11419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11414-L11419)

```diff
-     var OM = iM(39033),
-       SM = iM(38764),
-       jM = iM(38848),
-       aM = iM(4069),
-       PM = iM(181),
-       nM = iM(347),
+     var JV = xV(39209),
+       YV = xV(38938),
+       UV = xV(39026),
+       yV = xV(4098),
+       pV = xV(206),
+       QV = xV(380),
```

#### 1466. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11421-L11432` → after: `L11064-L11075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11064-L11075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11064-L11075) · [Before (L11421-L11432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11421-L11432)

```diff
-       zM = iM(38997),
-       LM = iM(37705),
-       mM = iM(37699),
-       HM = iM(38895),
-       hM = iM(332),
-       JM = iM(22),
-       dM = iM(3063),
-       yM = iM(38965),
-       lM = iM(39157),
-       EM = iM(39153),
-       UM = iM(4129),
-       GM = iM(1229);
+       wV = xV(39182),
+       ZV = xV(37930),
+       vV = xV(37925),
+       rV = xV(39075),
+       kV = xV(375),
+       bV = xV(32),
+       EV = xV(3093),
+       BV = xV(39151),
+       jV = xV(39307),
+       qV = xV(39304),
+       tV = xV(4163),
+       FV = xV(1252);
```

#### 1467. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11434-L11436` → after: `L11077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11077) · [Before (L11434-L11436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11434-L11436)

```diff
-     const eM = ["length", 2, 0, 237, 1, void 0, 4, 5, null, 43, 63, 3, 8];
- 
-     function bM() {}
+     const PV = [void 0, "b", 0, 158, 1, null, "c", 193, 3, 8];
```

#### 1468. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11442-L11453` → after: `L11083-L11092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11083-L11092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11083-L11092) · [Before (L11442-L11453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11442-L11453)

```diff
-       MM[eM[0]] = eM[6], "xpt0jp" in bM && function(...MM) {
-         MM[eM[0]] = eM[2]
-       }(), wM(MM[eM[6]] = eM[5], MM[eM[7]] = eM[5], MM[-eM[9]] = eM[5], MM[eM[10]] = eM[5], MM[eM[12]] = eM[5]);
-       const rM = (0, dM.b)().client.getMsgHandler().RiM.state.tickCounter;
-       (0, aM.sendColyMessage)(UM.hh, {
-         qQ: MM[eM[2]],
-         TQ: (MM[eM[6]] = PM.f.lifeformMeshToBodyPart[MM[eM[4]] === eM[8] || void 0 === MM[eM[4]] || (MM[eM[7]] = MM[eM[4]].split("|")) === eM[8] || void 0 === MM[eM[7]] ? void 0 : MM[eM[7]][eM[2]]]) !== eM[8] && void 0 !== MM[eM[6]] ? MM[eM[6]] : eM[8],
-         na: MM[eM[1]],
-         OP: (MM[-eM[9]] = (MM[eM[10]] = MM[eM[11]].hU.urM(MM[eM[11]].eD)) === eM[8] || void 0 === MM[eM[10]] || (MM[eM[12]] = MM[eM[10]].inventory.getItemAtSelectedSlot()) === eM[8] || void 0 === MM[eM[12]] ? void 0 : MM[eM[12]].name) !== eM[8] && void 0 !== MM[-eM[9]] ? MM[-eM[9 … [truncated]
-         VQ: GM.D,
-         cQ: rM,
-         Mz: uM
+       AV(VV.length = 4, VV[-PV[3]] = PV[0], VV[PV[1]] = PV[0], VV[PV[6]] = PV[0], VV[-PV[7]] = PV[0], VV[PV[9]] = PV[0]);
+       const eV = (0, EV[PV[1]])().client.getMsgHandler().sJV.state.tickCounter;
+       (0, yV.sendColyMessage)(tV.nh, {
+         Uw: VV[PV[2]],
+         yw: (VV[-PV[3]] = pV.f.lifeformMeshToBodyPart[VV[PV[4]] === PV[5] || void 0 === VV[PV[4]] || (VV[PV[1]] = VV[PV[4]].split("|")) === PV[5] || void 0 === VV[PV[1]] ? void 0 : VV[PV[1]][PV[2]]]) !== PV[5] && void 0 !== VV[-PV[3]] ? VV[-PV[3]] : PV[5],
+         ny: VV[2],
+         wp: (VV[PV[6]] = (VV[-PV[7]] = VV[PV[8]].sF.uxV(VV[PV[8]].bD)) === PV[5] || void 0 === VV[-PV[7]] || (VV[PV[9]] = VV[-PV[7]].inventory.getItemAtSelectedSlot()) === PV[5] || void 0 === VV[PV[9]] ? void 0 : VV[PV[9]].name) !== PV[5] && void 0 !== VV[PV[6]] ? VV[PV[6]] : PV[ … [truncated]
+         pw: FV.B,
+         Qw: eV,
+         nw: MV
```

#### 1469. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11456` → after: `L11095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11095) · [Before (L11456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11456)

```diff
-     class tM extends EM.c {
+     class NV extends qV.e {
```

#### 1470. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11458` → after: `L11097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11097) · [Before (L11458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11458)

```diff
-         super(MM, rM, iM, OM), this.toolType = null, this.toolHarvestLevel = null, this.toolMultiplier = 1, this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, this.anyBreakingStartTim … [truncated]
+         super(VV, eV, xV, JV), this.toolType = null, this.toolHarvestLevel = null, this.toolMultiplier = 1, this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, this.anyBreakingStartTim … [truncated]
```

#### 1471. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11468` → after: `L11107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11107) · [Before (L11468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11468)

```diff
-         super.reset(), this.heldItemState.HZ === this.Cm.eD && this.breakingParticles.bL(!1), this.resetTargetedBlock(Date.now()), this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, t … [truncated]
+         super.reset(), this.heldItemState.zC === this.iv.bD && this.breakingParticles.iZ(!1), this.resetTargetedBlock(Date.now()), this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, t … [truncated]
```

#### 1472. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11470` → after: `L11109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11109) · [Before (L11470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11470)

```diff
-       BiM() {
+       wYV() {
```

#### 1473. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11472` → after: `L11111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11111) · [Before (L11472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11472)

```diff
-         const SM = super.BiM(),
+         const YV = super.wYV(),
```

#### 1474. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11477-L11479` → after: `L11116-L11118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11116-L11118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11116-L11118) · [Before (L11477-L11479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11477-L11479)

```diff
-             kN: nM
-           } = this.RQM();
-         if (aM && !SM.preventAttack) return this.oSM(jM, aM, PM, nM), this.pQM(jM, aM), {
+             WK: QV
+           } = this.uwV();
+         if (yV && !YV.preventAttack) return this.eyV(UV, yV, pV, QV), this.swV(UV, yV), {
```

#### 1475. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11483-L11486` → after: `L11122-L11125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11122-L11125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11122-L11125) · [Before (L11483-L11486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11483-L11486)

```diff
-         const QM = null !== (MM = null === (rM = this.Cm.pMM) || void 0 === rM ? void 0 : rM.position) && void 0 !== MM ? MM : null,
-           zM = null !== (iM = null === (OM = this.Cm.pMM) || void 0 === OM ? void 0 : OM.VV) && void 0 !== iM ? iM : null,
-           LM = this.Cm.hU.urM(this.Cm.eD);
-         if (!LM || !this.Cm.aU.canAltAction) return {
+         const nV = null !== (VV = null === (eV = this.iv.IeV) || void 0 === eV ? void 0 : eV.position) && void 0 !== VV ? VV : null,
+           wV = null !== (xV = null === (JV = this.iv.IeV) || void 0 === JV ? void 0 : JV.VVV) && void 0 !== xV ? xV : null,
+           ZV = this.iv.sF.uxV(this.iv.bD);
+         if (!ZV || !this.iv.mF.canAltAction) return {
```

#### 1476. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11491` → after: `L11130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11130) · [Before (L11491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11491)

```diff
-           HM = new lM.c(this, null, null, QM, zM, mM).performPrimaryFire();
+           rV = new jV.d(this, null, null, nV, wV, vV).performPrimaryFire();
```

#### 1477. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11494` → after: `L11133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11133) · [Before (L11494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11494)

```diff
-       XiM() {
+       ZYV() {
```

#### 1478. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11499-L11501` → after: `L11138-L11140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11138-L11140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11138-L11140) · [Before (L11499-L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11499-L11501)

```diff
-           kN: OM
-         } = this.RQM(), SM = super.XiM();
-         return rM && !SM.preventAttack && (this.oSM(MM, rM, iM, OM), this.Cm.hU.grM(this.heldItemState.HZ).setArmsAreSwinging()), SM
+           WK: JV
+         } = this.uwV(), YV = super.ZYV();
+         return eV && !YV.preventAttack && (this.eyV(VV, eV, xV, JV), this.iv.sF.HxV(this.heldItemState.zC).setArmsAreSwinging()), YV
```

#### 1479. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11503` → after: `L11142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11142) · [Before (L11503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11503)

```diff
-       viM() {
+       QYV() {
```

#### 1480. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11507-L11508` → after: `L11146-L11147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11146-L11147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11146-L11147) · [Before (L11507-L11508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11507-L11508)

```diff
-         } = this.RQM();
-         return rM ? this.pQM(MM, rM) : this.breakingStart(), !0
+         } = this.uwV();
+         return eV ? this.swV(VV, eV) : this.breakingStart(), !0
```

#### 1481. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11515-L11517` → after: `L11154-L11156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11154-L11156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11154-L11156) · [Before (L11515-L11517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11515-L11517)

```diff
-           kN: OM
-         } = this.RQM();
-         return !(!rM || !this.canAttack(rM)) && (this.Cm.hU.grM(this.heldItemState.HZ).setArmsAreSwinging(), this.oSM(MM, rM, iM, OM), !0)
+           WK: JV
+         } = this.uwV();
+         return !(!eV || !this.canAttack(eV)) && (this.iv.sF.HxV(this.heldItemState.zC).setArmsAreSwinging(), this.eyV(VV, eV, xV, JV), !0)
```

#### 1482. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11522` → after: `L11161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11161) · [Before (L11522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11522)

```diff
-           Cm: OM
+           iv: JV
```

#### 1483. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11524` → after: `L11163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11163) · [Before (L11524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11524)

```diff
-         return null !== (rM = null === (iM = OM.rY[OM.eD][MM]) || void 0 === iM ? void 0 : iM.canAttack) && void 0 !== rM && rM
+         return null !== (eV = null === (xV = JV.YL[JV.bD][VV]) || void 0 === xV ? void 0 : xV.canAttack) && void 0 !== eV && eV
```

#### 1484. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11526` → after: `L11165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11165) · [Before (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11526)

```diff
-       oSM(MM, rM, iM, OM) {
+       eyV(VV, eV, xV, JV) {
```

#### 1485. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11528` → after: `L11167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11167) · [Before (L11528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11528)

```diff
-           Cm: SM
+           iv: YV
```

#### 1486. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11530` → after: `L11169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11169) · [Before (L11530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11530)

```diff
-         this.canAttack(rM) && (CM(rM, iM, MM, SM), this.bloxd.client.triggerGameCallback("onPlayerAttackEntity", SM.eD, rM, [OM[0], OM[1], OM[2]]))
+         this.canAttack(eV) && (TV(eV, xV, VV, YV), this.bloxd.client.triggerGameCallback("onPlayerAttackEntity", YV.bD, eV, [JV[0], JV[1], JV[2]]))
```

#### 1487. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11532` → after: `L11171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11171) · [Before (L11532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11532)

```diff
-       RQM() {
+       uwV() {
```

#### 1488. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11534-L11536` → after: `L11173-L11175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11173-L11175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11173-L11175) · [Before (L11534-L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11534-L11536)

```diff
-         const OM = null !== (MM = this.Cm.qMM) && void 0 !== MM ? MM : this.Cm.camera.eT(),
-           SM = null !== (rM = null === (iM = this.Cm.hU.urM(this.Cm.eD)) || void 0 === iM ? void 0 : iM.inventory.getItemAtSelectedSlot()) && void 0 !== rM ? rM : null,
-           jM = this.bloxd.getAttackRangeFromHeldItem(this.Cm.eD, SM),
+         const JV = null !== (VV = this.iv.kxV) && void 0 !== VV ? VV : this.iv.camera.L_(),
+           YV = null !== (eV = null === (xV = this.iv.sF.uxV(this.iv.bD)) || void 0 === xV ? void 0 : xV.inventory.getItemAtSelectedSlot()) && void 0 !== eV ? eV : null,
+           UV = this.bloxd.getAttackRangeFromHeldItem(this.iv.bD, YV),
```

#### 1489. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11543` → after: `L11182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11182) · [Before (L11543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11543)

```diff
-         return aM === zM.d.HIT_ENTITY ? {
+         return yV === wV.c.HIT_ENTITY ? {
```

#### 1490. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11547` → after: `L11186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11186) · [Before (L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11547)

```diff
-           kN: nM
+           WK: QV
```

#### 1491. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11552` → after: `L11191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11191) · [Before (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11552)

```diff
-           kN: null
+           WK: null
```

#### 1492. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11555` → after: `L11194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11194) · [Before (L11555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11555)

```diff
-       pQM(MM, rM) {
+       swV(VV, eV) {
```

#### 1493. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11558` → after: `L11197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11197) · [Before (L11558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11558)

```diff
-           Cm: jM
+           iv: UV
```

#### 1494. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11560-L11563` → after: `L11199-L11202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11199-L11202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11199-L11202) · [Before (L11560-L11563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11560-L11563)

```diff
-         (0, aM.sendColyMessage)(UM.bg, {
-           iP: rM,
-           na: MM,
-           OP: null !== (iM = null === (OM = jM.hU.urM(jM.eD)) || void 0 === OM || null === (SM = OM.inventory.getItemAtSelectedSlot()) || void 0 === SM ? void 0 : SM.name) && void 0 !== iM ? iM : null
+         (0, yV.sendColyMessage)(tV.cg, {
+           np: eV,
+           ny: VV,
+           wp: null !== (xV = null === (JV = UV.sF.uxV(UV.bD)) || void 0 === JV || null === (YV = JV.inventory.getItemAtSelectedSlot()) || void 0 === YV ? void 0 : YV.name) && void 0 !== xV ? xV : null
```

#### 1495. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11567-L11569` → after: `L11206-L11208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11206-L11208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11206-L11208) · [Before (L11567-L11569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11567-L11569)

```diff
-         const MM = this.Cm.kMM;
-         MM && !(0, dM.b)().posSatisfiesModifyConstraints(this.Cm.eD, MM.position[0], MM.position[1], MM.position[2]) && (this.Cm.aU.canChange || this.Cm.aU.cantBreakError || "You cannot modify this block" !== this.Cm.aU.cantChangeError) && JM.i.Tz("showBottomMessage", {
-           message: this.Cm.aU.cantBreakError || this.Cm.aU.cantChangeError,
+         const VV = this.iv.exV;
+         VV && !(0, EV.b)().posSatisfiesModifyConstraints(this.iv.bD, VV.position[0], VV.position[1], VV.position[2]) && (this.iv.mF.canChange || this.iv.mF.cantBreakError || "You cannot modify this block" !== this.iv.mF.cantChangeError) && bV.h.QZ("showBottomMessage", {
+           message: this.iv.mF.cantBreakError || this.iv.mF.cantChangeError,
```

#### 1496. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11574` → after: `L11213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11213) · [Before (L11574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11574)

```diff
-         if (this.heldItemState.HZ !== this.Cm.eD) return !1;
+         if (this.heldItemState.zC !== this.iv.bD) return !1;
```

#### 1497. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11576` → after: `L11215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11215) · [Before (L11576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11576)

```diff
-         return this.attemptingToBreak && (iM = this.breakBlock(rM)), this.breakingParticles.bL(iM), this.successfullyBreakingBlockLastTick = iM, iM
+         return this.attemptingToBreak && (xV = this.breakBlock(eV)), this.breakingParticles.iZ(xV), this.successfullyBreakingBlockLastTick = xV, xV
```

#### 1498. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11579` → after: `L11218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11218) · [Before (L11579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11579)

```diff
-         super.renderTickLocalPlayer(MM, rM), this.successfullyBreakingBlockLastTick ? this.momentumFrac = Math.min(this.momentumFrac + MM / hM.g.timeTillMaxMomentum, 1) : this.momentumFrac = Math.max(this.momentumFrac - MM / 1500, 0)
+         super.renderTickLocalPlayer(VV, eV), this.successfullyBreakingBlockLastTick ? this.momentumFrac = Math.min(this.momentumFrac + VV / kV.d.timeTillMaxMomentum, 1) : this.momentumFrac = Math.max(this.momentumFrac - VV / 1500, 0)
```

#### 1499. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11581-L11582` → after: `L11220-L11221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11220-L11221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11220-L11221) · [Before (L11581-L11582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11581-L11582)

```diff
-       xiM() {
-         super.xiM();
+       pYV() {
+         super.pYV();
```

#### 1500. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11590` → after: `L11229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11229) · [Before (L11590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11590)

```diff
-         this.targetedPosition = null, this.targetedStartTime = MM, this.lastBreakingSoundTime = Math.min(MM - 150, this.lastBreakingSoundTime), this.currBreakingStage = -1, this.currBreakingMesh && (this.currBreakingMesh.kR(!1), this.currBreakingMesh = null)
+         this.targetedPosition = null, this.targetedStartTime = VV, this.lastBreakingSoundTime = Math.min(VV - 150, this.lastBreakingSoundTime), this.currBreakingStage = -1, this.currBreakingMesh && (this.currBreakingMesh.pW(!1), this.currBreakingMesh = null)
```

#### 1501. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11594` → after: `L11233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11233) · [Before (L11594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11594)

```diff
-         const iM = (0, dM.b)().getInvenHeldItem(this.Cm.eD);
+         const xV = (0, EV.b)().getInvenHeldItem(this.iv.bD);
```

#### 1502. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11596-L11602` → after: `L11235-L11241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11235-L11241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11235-L11241) · [Before (L11596-L11602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11596-L11602)

```diff
-         const PM = null === (rM = this.Cm.kMM) || void 0 === rM ? void 0 : rM.position;
-         if (!PM || !(0, dM.b)().posSatisfiesModifyConstraints(this.Cm.eD, PM[0], PM[1], PM[2])) return this.resetTargetedBlock(MM), !1;
-         if (this.Cm.hU.grM(this.heldItemState.HZ).setArmsAreSwinging(), !this.targetedPosition !== !PM || !QM().exactEquals(this.targetedPosition, PM)) return this.resetTargetedBlock(MM), this.targetedPosition = QM().copy(this._targetedPosition, PM), (0, aM.sendColyMessage)(UM.uj … [truncated]
-         const nM = (0, dM.b)().getMetaInfo(this.Cm.sE(this.targetedPosition)).rootId;
-         let zM = SM.A[nM].ttb;
-         if (this.Cm.aU.creative) {
-           if (this.Cm.aU.creative) {
+         const pV = null === (eV = this.iv.exV) || void 0 === eV ? void 0 : eV.position;
+         if (!pV || !(0, EV.b)().posSatisfiesModifyConstraints(this.iv.bD, pV[0], pV[1], pV[2])) return this.resetTargetedBlock(VV), !1;
+         if (this.iv.sF.HxV(this.heldItemState.zC).setArmsAreSwinging(), !this.targetedPosition !== !pV || !nV().exactEquals(this.targetedPosition, pV)) return this.resetTargetedBlock(VV), this.targetedPosition = nV().copy(this._targetedPosition, pV), (0, yV.sendColyMessage)(tV.lj … [truncated]
+         const QV = (0, EV.b)().getMetaInfo(this.iv.mq(this.targetedPosition)).rootId;
+         let wV = YV.E[QV].ttb;
+         if (this.iv.mF.creative) {
+           if (this.iv.mF.creative) {
```

#### 1503. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11604` → after: `L11243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11243) · [Before (L11604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11604)

```diff
-             rM > 20 * jM.f ? zM *= 1 / 6 : rM > 6 * jM.f ? zM *= 1 / 3 : rM > 4 * jM.f ? zM *= .5 : rM > 2 * jM.f && (zM *= 2 / 3)
+             eV > 20 * UV.g ? wV *= 1 / 6 : eV > 6 * UV.g ? wV *= 1 / 3 : eV > 4 * UV.g ? wV *= .5 : eV > 2 * UV.g && (wV *= 2 / 3)
```

#### 1504. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11607-L11609` → after: `L11246-L11248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11246-L11248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11246-L11248) · [Before (L11607-L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11607-L11609)

```diff
-           const MM = (0, dM.b)().getBlockTypeIsHarvestable(this.Cm.eD, nM);
-           MM || (zM *= 2.5), this.toolType === this.bloxd.getItemStat(this.Cm.eD, nM, "harvestType") && MM && (zM *= 1 / this.toolMultiplier);
-           zM *= hM.g.getBreakSpeedMultiplier(iM) * hM.g.getMomentumMultiplier(iM, this.momentumFrac)
+           const VV = (0, EV.b)().getBlockTypeIsHarvestable(this.iv.bD, QV);
+           VV || (wV *= 2.5), this.toolType === this.bloxd.getItemStat(this.iv.bD, QV, "harvestType") && VV && (wV *= 1 / this.toolMultiplier);
+           wV *= kV.d.getBreakSpeedMultiplier(xV) * kV.d.getMomentumMultiplier(xV, this.momentumFrac)
```

#### 1505. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11615-L11616` → after: `L11254-L11255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11254-L11255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11254-L11255) · [Before (L11615-L11616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11615-L11616)

```diff
-           const rM = (0, LM.f)(`step_${(0,yM.b)(nM,!1)}`);
-           mM.e.play(rM, .3).rate(.5)
+           const eV = (0, ZV.f)(`step_${(0,BV.b)(QV,!1)}`);
+           vV.d.play(eV, .3).rate(.5)
```

#### 1506. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11618` → after: `L11257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11257) · [Before (L11618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11618)

```diff
-         return this.currBreakingMesh && JM === this.currBreakingStage || (this.currBreakingMesh && this.currBreakingMesh.kR(!1), JM < 10 ? (this.currBreakingMesh = (0, OM.e)(this.Cm, this.targetedPosition, JM), this.currBreakingStage = JM) : ((0, SM.g)(PM), this.resetTargetedBloc … [truncated]
+         return this.currBreakingMesh && bV === this.currBreakingStage || (this.currBreakingMesh && this.currBreakingMesh.pW(!1), bV < 10 ? (this.currBreakingMesh = (0, JV.d)(this.iv, this.targetedPosition, bV), this.currBreakingStage = bV) : ((0, YV.j)(pV), this.resetTargetedBloc … [truncated]
```

#### 1507. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11630` → after: `L11269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11269) · [Before (L11630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11630)

```diff
-   39153: (MM, rM, iM) => {
+   39304: (VV, eV, xV) => {
```

#### 1508. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11632` → after: `L11271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11271) · [Before (L11632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11632)

```diff
-       c: () => CM
+       e: () => TV
```

#### 1509. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11634-L11651` → after: `L11273-L11290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11273-L11290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11273-L11290) · [Before (L11634-L11651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11634-L11651)

```diff
-     var OM = iM(39203),
-       SM = iM(1229),
-       jM = iM(39218),
-       aM = iM(9852),
-       PM = iM(9816),
-       nM = iM(181),
-       QM = iM(38451),
-       zM = iM(39157),
-       LM = iM(38572),
-       mM = iM(22),
-       HM = iM(3063),
-       hM = iM(1373),
-       JM = iM(39192),
-       dM = iM(38585),
-       yM = iM(38565),
-       lM = iM(39354),
- ... (2 more removed lines; see GitHub link above)
+     var JV = xV(39339),
+       YV = xV(1252),
+       UV = xV(39352),
+       yV = xV(9848),
+       pV = xV(9820),
+       QV = xV(206),
+       nV = xV(38660),
+       wV = xV(39307),
+       ZV = xV(38765),
+       vV = xV(32),
+       rV = xV(3093),
+       kV = xV(1391),
+       bV = xV(39326),
+       EV = xV(38770),
+       BV = xV(38758),
+       jV = xV(39516),
+ ... (2 more added lines; see GitHub link above)
```

#### 1510. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11655` → after: `L11294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11294) · [Before (L11655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11655)

```diff
-         this.Cm = void 0, this.heldItemState = void 0, this.itemZoomer = void 0, this.bloxd = (0, HM.b)(), this.pickActionHelper = void 0, this.typeObj = null, this.XMM = !0, this._doneFirstMeshSetup = !1, this._modelLoadedSub = null, this._newBloxdSub = null, this.thirdPersonThi … [truncated]
+         this.iv = void 0, this.heldItemState = void 0, this.itemZoomer = void 0, this.bloxd = (0, rV.b)(), this.pickActionHelper = void 0, this.typeObj = null, this.ZxV = !0, this._doneFirstMeshSetup = !1, this._modelLoadedSub = null, this._newBloxdSub = null, this.thirdPersonThi … [truncated]
```

#### 1511. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11660` → after: `L11299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11299) · [Before (L11660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11660)

```diff
-         this.Cm.DMM(!0), this.typeObj = MM, this.enchantmentTier = rM
+         this.iv.VxV(!0), this.typeObj = VV, this.enchantmentTier = eV
```

#### 1512. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11662` → after: `L11301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11301) · [Before (L11662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11662)

```diff
-       wQM() {
+       fwV() {
```

#### 1513. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11665` → after: `L11304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11304) · [Before (L11665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11665)

```diff
-       tQM() {}
+       mwV() {}
```

#### 1514. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11673` → after: `L11312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11312) · [Before (L11673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11673)

```diff
-         return void 0 !== this.heldItemState.replayUseFirstPersonMesh ? this.heldItemState.replayUseFirstPersonMesh : this.heldItemState.HZ === this.Cm.eD && this.Cm.camera.zK <= 1 && !LM.b.isCameraDetachedFromPlayer(this.Cm)
+         return void 0 !== this.heldItemState.replayUseFirstPersonMesh ? this.heldItemState.replayUseFirstPersonMesh : this.heldItemState.zC === this.iv.bD && this.iv.camera.y_ <= 1 && !ZV.e.isCameraDetachedFromPlayer(this.iv)
```

#### 1515. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11676` → after: `L11315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11315) · [Before (L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11676)

```diff
-         return this.isFirstPersonLocalPlayer() || this.heldItemState.HZ === this.Cm.eD && LM.b.isCameraDetachedFromPlayer(this.Cm)
+         return this.isFirstPersonLocalPlayer() || this.heldItemState.zC === this.iv.bD && ZV.e.isCameraDetachedFromPlayer(this.iv)
```

#### 1516. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11678-L11679` → after: `L11317-L11318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11317-L11318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11317-L11318) · [Before (L11678-L11679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11678-L11679)

```diff
-       BiM() {
-         return CM.clearSecondaryDownFireTimeout(), this.Cm.hU.grM(this.heldItemState.HZ).setArmsAreSwinging(), {
+       wYV() {
+         return TV.clearSecondaryDownFireTimeout(), this.iv.sF.HxV(this.heldItemState.zC).setArmsAreSwinging(), {
```

#### 1517. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11687` → after: `L11326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11326) · [Before (L11687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11687)

```diff
-       xiM() {
+       pYV() {
```

#### 1518. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11693` → after: `L11332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11332) · [Before (L11693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11693)

```diff
-       uQM() {
+       HwV() {
```

#### 1519. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11699` → after: `L11338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11338) · [Before (L11699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11699)

```diff
-               this.gQM().once || rM()
+               this.KwV().once || eV()
```

#### 1520. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11703` → after: `L11342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11342) · [Before (L11703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11703)

```diff
-         const iM = this.gQM();
+         const xV = this.KwV();
```

#### 1521. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11706` → after: `L11345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11345) · [Before (L11706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11706)

```diff
-       gQM() {
+       KwV() {
```

#### 1522. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11709` → after: `L11348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11348) · [Before (L11709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11709)

```diff
-       AiM() {
+       yYV() {
```

#### 1523. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11718-L11720` → after: `L11357-L11359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11357-L11359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11357-L11359) · [Before (L11718-L11720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11718-L11720)

```diff
-           Cm: iM
-         } = this, jM = iM.aU.canUseDevCreativeItems, aM = null === (rM = this.bloxd.getItemStat(iM.eD, MM, "showInCreativeInven")) || void 0 === rM || rM;
-         return !(0, OM.d)(MM, (0, SM.P)((0, hM.e)().lobbyName), aM, jM)
+           iv: xV
+         } = this, UV = xV.mF.canUseDevCreativeItems, yV = null === (eV = this.bloxd.getItemStat(xV.bD, VV, "showInCreativeInven")) || void 0 === eV || eV;
+         return !(0, JV.c)(VV, (0, YV.I)((0, kV.e)().lobbyName), yV, UV)
```

#### 1524. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11722` → after: `L11361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11361) · [Before (L11722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11722)

```diff
-       WQM() {
+       SwV() {
```

#### 1525. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11725` → after: `L11364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11364) · [Before (L11725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11725)

```diff
-           Cm: MM
+           iv: VV
```

#### 1526. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11727-L11729` → after: `L11366-L11368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11366-L11368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11366-L11368) · [Before (L11727-L11729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11727-L11729)

```diff
-         if (MM.aU.creative && MM.aU.canPickBlocks && MM.hU.BMM(MM.eD, "inventory") && null !== MM.pMM) {
-           const iM = MM.pMM.VV,
-             SM = (0, jM.i)(iM) ? aM.t : this.bloxd.getMetaInfo(iM).rootName,
+         if (VV.mF.creative && VV.mF.canPickBlocks && VV.sF.wxV(VV.bD, "inventory") && null !== VV.IeV) {
+           const xV = VV.IeV.VVV,
+             YV = (0, UV.e)(xV) ? yV.o : this.bloxd.getMetaInfo(xV).rootName,
```

#### 1527. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11732` → after: `L11371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11371) · [Before (L11732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11732)

```diff
-             const iM = MM.hU.prM(MM.eD),
+             const xV = VV.sF.SxV(VV.bD),
```

#### 1528. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11734` → after: `L11373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/88.js#L11373) · [Before (L11734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/88.js#L11734)

```diff
-               jM = this.Cm.hU.urM(this.Cm.eD);
+               UV = this.iv.sF.uxV(this.iv.bD);
```
