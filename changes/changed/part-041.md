# Changed — Bundle Modifications Report (Part 041 / 146)

- **Updated at**: `2026-11-26T17:59 JST`
- **Part**: `41 / 146` (**425** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 040](part-040.md) · [Part 042 →](part-042.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/206.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d · continued)

- **File**: `bundles/bloxd.io/chunks/js/206.js` (216 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643)

#### 54. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L370-L373` → after: `L370-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L370-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L370-L373) · [Before (L370-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L370-L373)

```diff
-         this.placeGoal(null !== (OM = this.settings.fov) && void 0 !== OM ? OM : this.uL.getBaseFov()), this.goal[4] = (0, SM.w)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
-         const aM = null !== (jM = this.settings.smoothMs) && void 0 !== jM ? jM : 400;
-         !this.started || aM < 1 ? (mM(this.goal, this.smoothed), this.dd.fill(0), this.started = !0) : hM(this.smoothed, this.dd, this.goal, aM, MM), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, SM.h)(this.smoothed[5]), rM.apply(this.angles, iM);
-         const PM = (0, SM.f)(iM.heading, iM.pitch, this.forward);
+         this.placeGoal(null !== (JV = this.settings.fov) && void 0 !== JV ? JV : this.cZ.getBaseFov()), this.goal[4] = (0, YV.z)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
+         const yV = null !== (UV = this.settings.smoothMs) && void 0 !== UV ? UV : 400;
+         !this.started || yV < 1 ? (vV(this.goal, this.smoothed), this.ME.fill(0), this.started = !0) : kV(this.smoothed, this.ME, this.goal, yV, VV), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, YV.m)(this.smoothed[5]), eV.apply(this.angles, xV);
+         const pV = (0, YV.i)(xV.heading, xV.pitch, this.forward);
```

#### 55. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L375)

```diff
-         iM.fov = HM(this.settings, this.uL)
+         xV.fov = rV(this.settings, this.cZ)
```

#### 56. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L378` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L378) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L378)

```diff
-         MM instanceof JM && (mM(MM.goal, this.goal), mM(MM.smoothed, this.smoothed), mM(MM.dd, this.dd), this.framedTargets = MM.framedTargets, this.started = MM.started)
+         VV instanceof bV && (vV(VV.goal, this.goal), vV(VV.smoothed, this.smoothed), vV(VV.ME, this.ME), this.framedTargets = VV.framedTargets, this.started = VV.started)
```

#### 57. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L381` → after: `L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L381) · [Before (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L381)

```diff
-         this.dd.fill(0), this.started = !1
+         this.ME.fill(0), this.started = !1
```

#### 58. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L388` → after: `L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L388) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L388)

```diff
-           MM && (0, nM.d)(MM, this.pointAt(iM++))
+           VV && (0, QV.h)(VV, this.pointAt(xV++))
```

#### 59. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L392-L393` → after: `L392-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L392-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L392-L393) · [Before (L392-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L392-L393)

```diff
-           const MM = this.targets.aimPoint(this.uL.localPlayerId);
-           MM && (0, nM.d)(MM, this.pointAt(iM++))
+           const VV = this.targets.aimPoint(this.cZ.localPlayerId);
+           VV && (0, QV.h)(VV, this.pointAt(xV++))
```

#### 60. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L408-L411` → after: `L408-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L408-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L408-L411) · [Before (L408-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L408-L411)

```diff
-         const jM = Math.tan((0, zM.l)(MM) / 2),
-           aM = Math.atan(jM * (!0 === this.settings.letterbox ? LM.g : 1)),
-           PM = Math.atan(jM * this.uL.getAspectRatio()),
-           QM = (SM + (null !== (rM = this.settings.padding) && void 0 !== rM ? rM : 2)) / Math.sin(Math.min(aM, PM));
+         const UV = Math.tan((0, wV.k)(VV) / 2),
+           yV = Math.atan(UV * (!0 === this.settings.letterbox ? ZV.f : 1)),
+           pV = Math.atan(UV * this.cZ.getAspectRatio()),
+           nV = (YV + (null !== (eV = this.settings.padding) && void 0 !== eV ? eV : 2)) / Math.sin(Math.min(yV, pV));
```

#### 61. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L431-L432` → after: `L431-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L431-L432) · [Before (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L431-L432)

```diff
-         const OM = Number.isFinite(rM.PD) ? rM.PD : 0,
-           SM = Number.isFinite(rM.nD) ? rM.nD : 0;
+         const JV = Number.isFinite(eV.uR) ? eV.uR : 0,
+           YV = Number.isFinite(eV.eD) ? eV.eD : 0;
```

#### 62. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L448` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L448) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L448)

```diff
-         if (MM.maxYaw >= 180) this.yawOffset = (0, SM.v)(0, this.yawOffset);
+         if (VV.maxYaw >= 180) this.yawOffset = (0, YV.y)(0, this.yawOffset);
```

#### 63. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L450` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L450) · [Before (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L450)

```diff
-           const rM = (0, zM.l)(MM.maxYaw);
+           const eV = (0, wV.k)(VV.maxYaw);
```

#### 64. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L453` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L453) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L453)

```diff
-         const rM = (0, zM.l)(MM.maxPitch);
+         const eV = (0, wV.k)(VV.maxPitch);
```

#### 65. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L457-L459` → after: `L457-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L457-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L457-L459) · [Before (L457-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L457-L459)

```diff
-         this.pointedAt && this.limits && (this.yawOffset = (0, SM.v)(MM.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - MM.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
-         const iM = (0, SM.h)(MM.pitch + this.pitchOffset);
-         this.pitchOffset = iM - MM.pitch, rM.heading = (0, SM.s)(MM.heading + this.yawOffset), rM.pitch = iM
+         this.pointedAt && this.limits && (this.yawOffset = (0, YV.y)(VV.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - VV.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
+         const xV = (0, YV.m)(VV.pitch + this.pitchOffset);
+         this.pitchOffset = xV - VV.pitch, eV.heading = (0, YV.w)(VV.heading + this.yawOffset), eV.pitch = xV
```

#### 66. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L462` → after: `L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L462) · [Before (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L462)

```diff
-         rM.heading = (0, SM.s)(MM.heading - this.yawOffset), rM.pitch = (0, SM.h)(MM.pitch - this.pitchOffset)
+         eV.heading = (0, YV.w)(VV.heading - this.yawOffset), eV.pitch = (0, YV.m)(VV.pitch - this.pitchOffset)
```

#### 67. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L490` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L490) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L490)

```diff
-       for (let aM = 0; aM < 3; aM++) jM[aM] = SM ? MM[aM] * OM : iM[aM] - rM[aM];
+       for (let yV = 0; yV < 3; yV++) UV[yV] = YV ? VV[yV] * JV : xV[yV] - eV[yV];
```

#### 68. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L513-L516` → after: `L513-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L513-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L513-L516) · [Before (L513-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L513-L516)

```diff
-       const PM = jM ? MM : 2 * rM - iM,
-         nM = aM ? iM : 2 * rM - MM,
-         QM = jM ? OM : SM,
-         zM = aM ? SM : OM,
+       const pV = UV ? VV : 2 * eV - xV,
+         QV = yV ? xV : 2 * eV - VV,
+         nV = UV ? JV : YV,
+         wV = yV ? YV : JV,
```

#### 69. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L535` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L535) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L535)

```diff
-       return Math.abs(MM.pitch) >= SM.c
+       return Math.abs(VV.pitch) >= YV.e
```

#### 70. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L563` → after: `L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L563) · [Before (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L563)

```diff
-         if (aM > 0 && "aim" !== zM && "aim" !== LM && this.liveTangent(MM, nM)) return iM.heading = (0, SM.s)(nM.heading), void(iM.pitch = nM.pitch);
+         if (yV > 0 && "aim" !== wV && "aim" !== ZV && this.liveTangent(VV, QV)) return xV.heading = (0, YV.w)(QV.heading), void(xV.pitch = QV.pitch);
```

#### 71. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L565)

```diff
-         !PM && aM > 0 && ("tangent" === zM && this.liveTangent(MM, nM), "tangent" === LM && this.liveTangent(MM, QM)), "none" === zM ? (0, SM.j)(QM, nM) : "none" === LM && (0, SM.j)(nM, QM);
+         !pV && yV > 0 && ("tangent" === wV && this.liveTangent(VV, QV), "tangent" === ZV && this.liveTangent(VV, nV)), "none" === wV ? (0, YV.o)(nV, QV) : "none" === ZV && (0, YV.o)(QV, nV);
```

#### 72. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L568-L570` → after: `L568-L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L568-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L568-L570) · [Before (L568-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L568-L570)

```diff
-           hM = (0, SM.w)(nM.heading, QM.heading),
-           JM = tM(MM, mM ? (0, SM.w)(nM.heading, this.beforeAngles.heading) : 0, nM.heading, hM, HM ? (0, SM.w)(hM, this.afterAngles.heading) : 0, mM, HM);
-         iM.heading = (0, SM.s)(JM), iM.pitch = (0, SM.h)(tM(MM, this.beforeAngles.pitch, nM.pitch, QM.pitch, this.afterAngles.pitch, mM, HM))
+           kV = (0, YV.z)(QV.heading, nV.heading),
+           bV = XV(VV, vV ? (0, YV.z)(QV.heading, this.beforeAngles.heading) : 0, QV.heading, kV, rV ? (0, YV.z)(kV, this.afterAngles.heading) : 0, vV, rV);
+         xV.heading = (0, YV.w)(bV), xV.pitch = (0, YV.m)(XV(VV, this.beforeAngles.pitch, QV.pitch, nV.pitch, this.afterAngles.pitch, vV, rV))
```

#### 73. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L582` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L582) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L582)

```diff
-         if (jM.lookDirection) return (0, SM.m)(jM.lookDirection, OM), "aim";
+         if (UV.lookDirection) return (0, YV.q)(UV.lookDirection, JV), "aim";
```

#### 74. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L585` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L585) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L585)

```diff
-           if (MM) return (0, SM.p)(rM, MM, OM), "aim"
+           if (VV) return (0, YV.v)(eV, VV, JV), "aim"
```

#### 75. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L588` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L588) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L588)

```diff
-         return aM ? ((0, SM.j)(aM, OM), "tangent") : "none"
+         return yV ? ((0, YV.o)(yV, JV), "tangent") : "none"
```

#### 76. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L595)

```diff
-         return lM(jM) > 1e-9 ? ((0, SM.m)(jM, rM), !0) : !(GM(iM, OM) < yM) && ((0, SM.m)(eM(iM, OM, MM.u < .5 ? MM.toTangent : MM.fromTangent, jM), rM), !0)
+         return jV(UV) > 1e-9 ? ((0, YV.q)(UV, eV), !0) : !(FV(xV, JV) < BV) && ((0, YV.q)(PV(xV, JV, VV.u < .5 ? VV.toTangent : VV.fromTangent, UV), eV), !0)
```

#### 77. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L600` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L600) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L600)

```diff
-         if (lM(jM) > 1e-9) return (0, SM.m)(jM, {
+         if (jV(UV) > 1e-9) return (0, YV.q)(UV, {
```

#### 78. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L604-L605` → after: `L604-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L604-L605) · [Before (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L604-L605)

```diff
-         const aM = null !== (OM = this.restDirectionTo(iM, iM + 1, MM, rM)) && void 0 !== OM ? OM : this.restDirectionTo(iM, iM - 1, MM, rM);
-         return aM ? (0, SM.m)(aM, {
+         const yV = null !== (JV = this.restDirectionTo(xV, xV + 1, VV, eV)) && void 0 !== JV ? JV : this.restDirectionTo(xV, xV - 1, VV, eV);
+         return yV ? (0, YV.q)(yV, {
```

#### 79. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L625)

```diff
-       }(MM.lookDirection, rM.lookDirection) : (OM = MM.lookAt, SM = rM.lookAt, "object" !== typeof OM || "object" !== typeof SM ? OM === SM : GM(OM, SM) < yM);
+       }(VV.lookDirection, eV.lookDirection) : (JV = VV.lookAt, YV = eV.lookAt, "object" !== typeof JV || "object" !== typeof YV ? JV === YV : FV(JV, YV) < BV);
```

#### 80. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L652)

```diff
-             easing: (0, jM.o)(null !== (rM = MM.easing) && void 0 !== rM ? rM : "linear")
+             easing: (0, UV.m)(null !== (eV = VV.easing) && void 0 !== eV ? eV : "linear")
```

#### 81. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L666-L669` → after: `L666-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L666-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L666-L669) · [Before (L666-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L666-L669)

```diff
-             const aM = null !== MM && void 0 !== MM ? MM : bM(null !== iM && void 0 !== iM ? iM : rM, rM),
-               PM = null !== iM && void 0 !== iM ? iM : bM(null !== MM && void 0 !== MM ? MM : rM, rM),
-               nM = MM ? OM : SM,
-               QM = iM ? SM : OM,
+             const yV = null !== VV && void 0 !== VV ? VV : AV(null !== xV && void 0 !== xV ? xV : eV, eV),
+               pV = null !== xV && void 0 !== xV ? xV : AV(null !== VV && void 0 !== VV ? VV : eV, eV),
+               QV = VV ? JV : YV,
+               nV = xV ? YV : JV,
```

#### 82. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L706` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L706) · [Before (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L706)

```diff
-         return iM.index = OM, iM.toIndex = SM, iM.segmentMs = aM, iM.u = aM > 0 ? (0, jM.k)((MM - rM[OM].timeMs) / aM, rM[OM].easing) : 1, iM.curved = this.smooth && aM > 0, iM.beforeIndex = this.prevNodes[OM], iM.afterIndex = this.nextNodes[SM], iM.beforeMs = this.prevGaps[OM],  … [truncated]
+         return xV.index = JV, xV.toIndex = YV, xV.segmentMs = yV, xV.u = yV > 0 ? (0, UV.l)((VV - eV[JV].timeMs) / yV, eV[JV].easing) : 1, xV.curved = this.smooth && yV > 0, xV.beforeIndex = this.prevNodes[JV], xV.afterIndex = this.nextNodes[YV], xV.beforeMs = this.prevGaps[JV],  … [truncated]
```

#### 83. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L720` → after: `L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L720) · [Before (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L720)

```diff
-         return null !== (iM = this.nodes[MM].keyframe.fov) && void 0 !== iM ? iM : rM
+         return null !== (xV = this.nodes[VV].keyframe.fov) && void 0 !== xV ? xV : eV
```

#### 84. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L725` → after: `L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L725) · [Before (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L725)

```diff
-         return OM >= 0 && OM <= iM ? OM : this.loopMs <= 0 || iM < 2 ? -1 : OM < 0 ? iM - 1 : 1
+         return JV >= 0 && JV <= xV ? JV : this.loopMs <= 0 || xV < 2 ? -1 : JV < 0 ? xV - 1 : 1
```

#### 85. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L733` → after: `L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L733) · [Before (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L733)

```diff
-         const OM = 0 === MM ? iM : MM;
+         const JV = 0 === VV ? xV : VV;
```

#### 86. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L743` → after: `L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L743) · [Before (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L743)

```diff
-         this.uL = MM, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.lastPitches = new Map, this.lastLookHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = rM => MM.getEntityPosition(rM), this.readAimP … [truncated]
+         this.cZ = VV, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.lastPitches = new Map, this.lastLookHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = eV => VV.getEntityPosition(eV), this.readAimP … [truncated]
```

#### 87. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L746` → after: `L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L746) · [Before (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L746)

```diff
-         return "string" !== typeof MM ? (0, nM.k)(MM, 3) ? MM : null : this.resolve(MM, this.readAimPoint, this.lastAimPoints)
+         return "string" !== typeof VV ? (0, QV.r)(VV, 3) ? VV : null : this.resolve(VV, this.readAimPoint, this.lastAimPoints)
```

#### 88. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L749-L750` → after: `L749-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L749-L750) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L749-L750)

```diff
-         const rM = "string" === typeof MM ? this.uL.getEntityAimPoint(MM) : MM;
-         return rM && (0, nM.k)(rM, 3) ? rM : null
+         const eV = "string" === typeof VV ? this.cZ.getEntityAimPoint(VV) : VV;
+         return eV && (0, QV.r)(eV, 3) ? eV : null
```

#### 89. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L756-L757` → after: `L756-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L756-L757) · [Before (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L756-L757)

```diff
-         const rM = WM(this.lastHeadings, MM, this.uL.getEntityHeading(MM));
-         return void 0 !== rM ? rM : MM === this.uL.localPlayerId ? 0 : this.heading(this.uL.localPlayerId)
+         const eV = RV(this.lastHeadings, VV, this.cZ.getEntityHeading(VV));
+         return void 0 !== eV ? eV : VV === this.cZ.localPlayerId ? 0 : this.heading(this.cZ.localPlayerId)
```

#### 90. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L761` → after: `L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L761) · [Before (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L761)

```diff
-         return null !== (rM = WM(this.lastPitches, MM, this.uL.getEntityPitch(MM))) && void 0 !== rM ? rM : 0
+         return null !== (eV = RV(this.lastPitches, VV, this.cZ.getEntityPitch(VV))) && void 0 !== eV ? eV : 0
```

#### 91. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L765` → after: `L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L765) · [Before (L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L765)

```diff
-         return null !== (rM = WM(this.lastLookHeadings, MM, this.uL.getEntityLookHeading(MM))) && void 0 !== rM ? rM : this.heading(MM)
+         return null !== (eV = RV(this.lastLookHeadings, VV, this.cZ.getEntityLookHeading(VV))) && void 0 !== eV ? eV : this.heading(VV)
```

#### 92. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L770` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L770) · [Before (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L770)

```diff
-         return OM && (0, nM.k)(OM, 3) ? (SM || (SM = [0, 0, 0], iM.set(MM, SM)), SM[0] = OM[0], SM[1] = OM[1], SM[2] = OM[2], SM) : SM || (MM === this.uL.localPlayerId ? null : this.resolve(this.uL.localPlayerId, rM, iM))
+         return JV && (0, QV.r)(JV, 3) ? (YV || (YV = [0, 0, 0], xV.set(VV, YV)), YV[0] = JV[0], YV[1] = JV[1], YV[2] = JV[2], YV) : YV || (VV === this.cZ.localPlayerId ? null : this.resolve(this.cZ.localPlayerId, eV, xV))
```

#### 93. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L782` → after: `L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L782) · [Before (L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L782)

```diff
-       Number.isFinite(MM.heading) && Number.isFinite(MM.pitch) || (0, SM.j)(rM, MM)
+       Number.isFinite(VV.heading) && Number.isFinite(VV.pitch) || (0, YV.o)(eV, VV)
```

#### 94. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L786` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L786) · [Before (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L786)

```diff
-       if (rM) return void(0, SM.m)(rM, jM);
+       if (eV) return void(0, YV.q)(eV, UV);
```

#### 95. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L788` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L788) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L788)

```diff
-       aM && (0, SM.p)(MM, aM, jM)
+       yV && (0, YV.v)(VV, yV, UV)
```

#### 96. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L792` → after: `L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L792) · [Before (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L792)

```diff
-         this.settings = MM, this.uL = rM, this.targets = iM, this.base = void 0, this.base = DM(OM)
+         this.settings = VV, this.cZ = eV, this.targets = xV, this.base = void 0, this.base = DV(JV)
```

#### 97. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L797` → after: `L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L797) · [Before (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L797)

```diff
-         (0, nM.d)(SM.position, iM.position), ZM(SM.position, SM.lookDirection, null !== (OM = SM.lookAt) && void 0 !== OM ? OM : this.uL.localPlayerId, this.targets, this.base), rM.apply(this.base, iM), iM.fov = HM(SM, this.uL)
+         (0, QV.h)(YV.position, xV.position), CV(YV.position, YV.lookDirection, null !== (JV = YV.lookAt) && void 0 !== JV ? JV : this.cZ.localPlayerId, this.targets, this.base), eV.apply(this.base, xV), xV.fov = rV(YV, this.cZ)
```

#### 98. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L800` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L800) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L800)

```diff
-         MM instanceof oM && (0, SM.j)(MM.base, this.base)
+         VV instanceof aV && (0, YV.o)(VV.base, this.base)
```

#### 99. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L808` → after: `L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L808) · [Before (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L808)

```diff
-         this.settings = MM, this.uL = rM, this.targets = iM, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.dd = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin =  … [truncated]
+         this.settings = VV, this.cZ = eV, this.targets = xV, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.ME = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin =  … [truncated]
```

#### 100. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L813` → after: `L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L813) · [Before (L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L813)

```diff
-           PM = null !== (OM = aM.target) && void 0 !== OM ? OM : this.uL.localPlayerId,
+           pV = null !== (JV = yV.target) && void 0 !== JV ? JV : this.cZ.localPlayerId,
```

#### 101. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L818-L820` → after: `L818-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L818-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L818-L820) · [Before (L818-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L818-L820)

```diff
-         QM && (LM = this.foundFeet && GM(this.lastFeet, QM) > 32 + .1 * MM, (0, nM.d)(QM, this.lastFeet), this.foundFeet = !0, this.placeGoal(null !== (mM = zM ? this.targets.aimPoint(PM) : null) && void 0 !== mM ? mM : QM, PM));
-         const JM = null !== (jM = aM.smoothMs) && void 0 !== jM ? jM : 0;
-         !this.started || JM < 1 || LM ? ((0, nM.d)(this.goal, this.smoothed), this.dd.fill(0), this.started = !0) : hM(this.smoothed, this.dd, this.goal, JM, MM), LM && (this.distance = -1), (0, nM.d)(this.smoothed, iM.position);
+         nV && (ZV = this.foundFeet && FV(this.lastFeet, nV) > 32 + .1 * VV, (0, QV.h)(nV, this.lastFeet), this.foundFeet = !0, this.placeGoal(null !== (vV = wV ? this.targets.aimPoint(pV) : null) && void 0 !== vV ? vV : nV, pV));
+         const bV = null !== (UV = yV.smoothMs) && void 0 !== UV ? UV : 0;
+         !this.started || bV < 1 || ZV ? ((0, QV.h)(this.goal, this.smoothed), this.ME.fill(0), this.started = !0) : kV(this.smoothed, this.ME, this.goal, bV, VV), ZV && (this.distance = -1), (0, QV.h)(this.smoothed, xV.position);
```

#### 102. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L832` → after: `L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L832) · [Before (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L832)

```diff
-             jM = (0, SM.s)(this.eyeHeading + (0, SM.v)(this.eyeHeading, rM) * OM),
+             UV = (0, YV.w)(this.eyeHeading + (0, YV.y)(this.eyeHeading, eV) * JV),
```

#### 103. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L834-L835` → after: `L834-L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L834-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L834-L835) · [Before (L834-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L834-L835)

```diff
-             nM = PM !== this.uL.localPlayerId && Number.isFinite(jM) && Number.isFinite(aM) && !LM;
-           this.eyeHeading = nM ? jM : (0, SM.s)(rM), this.eyePitch = nM ? aM : iM, this.base.heading = this.eyeHeading, this.base.pitch = this.eyePitch
+             QV = pV !== this.cZ.localPlayerId && Number.isFinite(UV) && Number.isFinite(yV) && !ZV;
+           this.eyeHeading = QV ? UV : (0, YV.w)(eV), this.eyePitch = QV ? yV : xV, this.base.heading = this.eyeHeading, this.base.pitch = this.eyePitch
```

#### 104. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L838` → after: `L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L838) · [Before (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L838)

```diff
-           this.eyeHeading = NaN, this.eyePitch = NaN, ZM(yM, aM.lookDirection, null !== (lM = aM.lookAt) && void 0 !== lM ? lM : PM, this.targets, this.base)
+           this.eyeHeading = NaN, this.eyePitch = NaN, CV(BV, yV.lookDirection, null !== (jV = yV.lookAt) && void 0 !== jV ? jV : pV, this.targets, this.base)
```

#### 105. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L840` → after: `L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L840) · [Before (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L840)

```diff
-         rM.apply(this.base, iM), iM.fov = HM(aM, this.uL)
+         eV.apply(this.base, xV), xV.fov = rV(yV, this.cZ)
```

#### 106. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L843` → after: `L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L843) · [Before (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L843)

```diff
-         MM instanceof fM && (0, OM.y)(MM.settings.target, this.settings.target) && ((0, SM.j)(MM.base, this.base), (0, nM.d)(MM.goal, this.goal), (0, nM.d)(MM.lastFeet, this.lastFeet), this.foundFeet = MM.foundFeet, (0, nM.d)(MM.smoothed, this.smoothed), (0, nM.d)(MM.dd, this.dd) … [truncated]
+         VV instanceof oV && (0, JV.q)(VV.settings.target, this.settings.target) && ((0, YV.o)(VV.base, this.base), (0, QV.h)(VV.goal, this.goal), (0, QV.h)(VV.lastFeet, this.lastFeet), this.foundFeet = VV.foundFeet, (0, QV.h)(VV.smoothed, this.smoothed), (0, QV.h)(VV.ME, this.ME) … [truncated]
```

#### 107. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L846` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L846) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L846)

```diff
-         kM(this.base, MM), this.dd.fill(0), this.started = !1, this.distance = -1, this.eyeHeading = NaN, this.eyePitch = NaN
+         iV(this.base, VV), this.ME.fill(0), this.started = !1, this.distance = -1, this.eyeHeading = NaN, this.eyePitch = NaN
```

#### 108. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L857` → after: `L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L857) · [Before (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L857)

```diff
-           return MM < 0 || rM < MM ? rM : rM + (MM - rM) * Math.exp(-iM / 150)
+           return VV < 0 || eV < VV ? eV : eV + (VV - eV) * Math.exp(-xV / 150)
```

#### 109. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L861` → after: `L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L861) · [Before (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L861)

```diff
-         }(this.uL, OM, aM, jM), rM);
+         }(this.cZ, JV, yV, UV), eV);
```

#### 110. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L883` → after: `L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L883) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L883)

```diff
-         this.settings = MM, this.uL = rM, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = MM.keyframes.length > 0 ? new pM(MM.keyframes, null === (SM = MM.smooth) || void 0 === SM || SM, null !== (jM = MM.loop) && void 0  … [truncated]
+         this.settings = VV, this.cZ = eV, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = VV.keyframes.length > 0 ? new WV(VV.keyframes, null === (YV = VV.smooth) || void 0 === YV || YV, null !== (UV = VV.loop) && void 0  … [truncated]
```

#### 111. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L887-L888` → after: `L887-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L887-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L887-L888) · [Before (L887-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L887-L888)

```diff
-         const OM = HM(this.settings, this.uL);
-         this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, OM, this.base) : this.base.fov = OM, (0, nM.d)(this.base.position, iM.position), iM.fov = this.base.fov, rM.apply(this.base, iM)
+         const JV = rV(this.settings, this.cZ);
+         this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, JV, this.base) : this.base.fov = JV, (0, QV.h)(this.base.position, xV.position), xV.fov = this.base.fov, eV.apply(this.base, xV)
```

#### 112. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L891` → after: `L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L891) · [Before (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L891)

```diff
-         MM instanceof YM && (0, OM.y)(MM.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = MM.elapsedMs, (0, nM.c)(MM.base, this.base))
+         VV instanceof cV && (0, JV.q)(VV.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = VV.elapsedMs, (0, QV.g)(VV.base, this.base))
```

#### 113. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L899` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L899) · [Before (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L899)

```diff
-       return (0, OM.C)(MM, rM)
+       return (0, JV.s)(VV, eV)
```

#### 114. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L904` → after: `L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L904) · [Before (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L904)

```diff
-         this.settings = MM, this.uL = rM, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
+         this.settings = VV, this.cZ = eV, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
```

#### 115. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L907-L908` → after: `L907-L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L907-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L907-L908) · [Before (L907-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L907-L908)

```diff
-         this.pose = (0, nM.c)(jM, (0, nM.h)()), this.lastGoodPose = (0, nM.c)(SM ? iM.lastGoodPose : jM, (0, nM.h)()), this.look = new dM(MM.playerLook), this.targets = null !== (OM = null === iM || void 0 === iM ? void 0 : iM.targets) && void 0 !== OM ? OM : new sM(rM);
-         const aM = (0, nM.c)(jM, (0, nM.h)());
+         this.pose = (0, QV.g)(UV, (0, QV.l)()), this.lastGoodPose = (0, QV.g)(YV ? xV.lastGoodPose : UV, (0, QV.l)()), this.look = new EV(VV.playerLook), this.targets = null !== (JV = null === xV || void 0 === xV ? void 0 : xV.targets) && void 0 !== JV ? JV : new gV(eV);
+         const yV = (0, QV.g)(UV, (0, QV.l)());
```

#### 116. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L923` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L923) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L923)

```diff
-         return this.look.update(MM, rM), this.mode.update(MM, this.look, this.pose), (0, nM.j)(this.pose) ? (0, nM.c)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFin … [truncated]
+         return this.look.update(VV, eV), this.mode.update(VV, this.look, this.pose), (0, QV.n)(this.pose) ? (0, QV.g)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFin … [truncated]
```

#### 117. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L932` → after: `L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L932) · [Before (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L932)

```diff
-         this.uL = MM, this.settings = {
+         this.cZ = VV, this.settings = {
```

#### 118. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L934` → after: `L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L934) · [Before (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L934)

```diff
-         }, this.pending = null, this.fade = new PM, this.shot = null, this.blend = null, this.mixed = (0, nM.h)(), this.output = (0, nM.h)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
+         }, this.pending = null, this.fade = new pV, this.shot = null, this.blend = null, this.mixed = (0, QV.l)(), this.output = (0, QV.l)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
```

#### 119. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L939-L940` → after: `L939-L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L939-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L939-L940) · [Before (L939-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L939-L940)

```diff
-         const rM = (0, QM.d)(MM);
-         if ((0, OM.y)(rM, this.pending ? this.pending.settings : this.settings)) return;
+         const eV = (0, nV.e)(VV);
+         if ((0, JV.q)(eV, this.pending ? this.pending.settings : this.settings)) return;
```

#### 120. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L944` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L944) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L944)

```diff
-           shot: "default" === rM.mode ? null : new AM(rM, this.uL, null)
+           shot: "default" === eV.mode ? null : new lV(eV, this.cZ, null)
```

#### 121. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L947` → after: `L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L947) · [Before (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L947)

```diff
-         this.pending = null, !SM && iM || this.fade.fadeIn(OM.q.minTransitionFadeMs), this.show(rM, !1)
+         this.pending = null, !YV && xV || this.fade.fadeIn(JV.k.minTransitionFadeMs), this.show(eV, !1)
```

#### 122. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L951` → after: `L951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L951) · [Before (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L951)

```diff
-         if ((0, OM.y)(MM, this.settings)) return;
+         if ((0, JV.q)(VV, this.settings)) return;
```

#### 123. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L955-L957` → after: `L955-L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L955-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L955-L957) · [Before (L955-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L955-L957)

```diff
-           QM = (0, nM.c)(this.hasOutput ? this.output : this.uL.getDefaultPose(), (0, nM.h)());
-         if (this.shot = "default" === MM.mode ? null : new AM(MM, this.uL, rM ? null : this.shot), aM) return;
-         const zM = rM || !this.shot && !this.hasOutput ? 0 : null !== (iM = MM.blendInMs) && void 0 !== iM ? iM : 0;
+           nV = (0, QV.g)(this.hasOutput ? this.output : this.cZ.getDefaultPose(), (0, QV.l)());
+         if (this.shot = "default" === VV.mode ? null : new lV(VV, this.cZ, eV ? null : this.shot), yV) return;
+         const wV = eV || !this.shot && !this.hasOutput ? 0 : null !== (xV = VV.blendInMs) && void 0 !== xV ? xV : 0;
```

#### 124. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L959` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L959) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L959)

```diff
-         const LM = (0, jM.o)(null !== (SM = MM.blendEasing) && void 0 !== SM ? SM : "easeInOut");
+         const ZV = (0, UV.m)(null !== (YV = VV.blendEasing) && void 0 !== YV ? YV : "easeInOut");
```

#### 125. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L982` → after: `L982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L982) · [Before (L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L982)

```diff
-         const iM = Number.isFinite(MM) && MM > 0 ? MM : 0;
+         const xV = Number.isFinite(VV) && VV > 0 ? VV : 0;
```

#### 126. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L993` → after: `L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L993) · [Before (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L993)

```diff
-           this.noteLoadingPosition(OM.shot.update(MM, nM.b).position)
+           this.noteLoadingPosition(JV.shot.update(VV, QV.e).position)
```

#### 127. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L996` → after: `L996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L996) · [Before (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L996)

```diff
-         const aM = this.shot ? this.shot.update(iM, rM) : this.uL.getDefaultPose();
+         const yV = this.shot ? this.shot.update(xV, eV) : this.cZ.getDefaultPose();
```

#### 128. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1002` → after: `L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1002) · [Before (L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1002)

```diff
-         if (PM.headingDelta = Number.isFinite(PM.headingDelta) ? (0, SM.w)(PM.headingDelta, aM.heading - PM.from.heading) : (0, SM.v)(PM.from.heading, aM.heading), (0, nM.n)(PM.from, aM, PM.headingDelta, (0, jM.k)(QM, PM.easing), this.mixed), QM >= 1) {
+         if (pV.headingDelta = Number.isFinite(pV.headingDelta) ? (0, YV.z)(pV.headingDelta, yV.heading - pV.from.heading) : (0, YV.y)(pV.from.heading, yV.heading), (0, QV.s)(pV.from, yV, pV.headingDelta, (0, UV.l)(nV, pV.easing), this.mixed), nV >= 1) {
```

#### 129. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1010` → after: `L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1010) · [Before (L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1010)

```diff
-           rM.push((0, nM.d)(MM, this.loadingSlots[rM.length]))
+           eV.push((0, QV.h)(VV, this.loadingSlots[eV.length]))
```

#### 130. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1015-L1016` → after: `L1015-L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1015-L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1015-L1016) · [Before (L1015-L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1015-L1016)

```diff
-         (0, nM.j)(MM) ? (0, nM.c)(MM, rM) : this.hasOutput || (0, nM.c)(this.uL.getDefaultPose(), rM), rM.pitch = (0, SM.h)(rM.pitch);
-         const iM = this.uL.getDefaultFov(),
+         (0, QV.n)(VV) ? (0, QV.g)(VV, eV) : this.hasOutput || (0, QV.g)(this.cZ.getDefaultPose(), eV), eV.pitch = (0, YV.m)(eV.pitch);
+         const xV = this.cZ.getDefaultFov(),
```

#### 131. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1018-L1019` → after: `L1018-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1018-L1019) · [Before (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1018-L1019)

```diff
-           aM = jM ? Math.min(OM.q.minFov, iM) : OM.q.minFov,
-           PM = jM ? Math.max(OM.q.maxFov, iM) : OM.q.maxFov;
+           yV = UV ? Math.min(JV.k.minFov, xV) : JV.k.minFov,
+           pV = UV ? Math.max(JV.k.maxFov, xV) : JV.k.maxFov;
```

#### 132. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1024` → after: `L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1024) · [Before (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1024)

```diff
-   40253: (MM, rM, iM) => {
+   40397: (VV, eV, xV) => {
```

#### 133. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1026-L1028` → after: `L1026-L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1026-L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1026-L1027) · [Before (L1026-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1026-L1028)

```diff
-       b: () => SM,
-       c: () => PM,
-       d: () => aM,
+       e: () => YV,
+       g: () => pV,
```

#### 134. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1030-L1032` → after: `L1029-L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1029-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1029-L1032) · [Before (L1030-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1030-L1032)

```diff
-       j: () => QM,
-       k: () => nM,
-       n: () => zM
+       l: () => UV,
+       n: () => nV,
+       r: () => QV,
+       s: () => wV
```

#### 135. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1034` → after: `L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1034) · [Before (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1034)

```diff
-     var OM = iM(40261);
+     var JV = xV(40405);
```

#### 136. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1036-L1037` → after: `L1036-L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1036-L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1036-L1037) · [Before (L1036-L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1036-L1037)

```diff
-       PD: 0,
-       nD: 0
+       uR: 0,
+       eD: 0
```

#### 137. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1067` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1067) · [Before (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1067)

```diff
-       return jM.heading = (0, OM.s)(MM.heading + iM * SM), jM.pitch = MM.pitch + (rM.pitch - MM.pitch) * SM, jM.fov = MM.fov + (rM.fov - MM.fov) * SM, jM
+       return UV.heading = (0, JV.w)(VV.heading + xV * YV), UV.pitch = VV.pitch + (eV.pitch - VV.pitch) * YV, UV.fov = VV.fov + (eV.fov - VV.fov) * YV, UV
```

#### 138. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1070` → after: `L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1070) · [Before (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1070)

```diff
-   40285: (MM, rM, iM) => {
+   40427: (VV, eV, xV) => {
```

#### 139. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1072-L1073` → after: `L1072-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1072-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1072-L1073) · [Before (L1072-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1072-L1073)

```diff
-       d: () => bM,
-       g: () => HM
+       e: () => AV,
+       f: () => rV
```

#### 140. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1075-L1079` → after: `L1075-L1079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1075-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1075-L1079) · [Before (L1075-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1075-L1079)

```diff
-     var OM = iM(40283),
-       SM = iM(40253);
-     const jM = OM.j,
-       aM = OM.s,
-       PM = OM.n;
+     var JV = xV(40425),
+       YV = xV(40397);
+     const UV = JV.g,
+       yV = JV.l,
+       pV = JV.i;
```

#### 141. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1090` → after: `L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1090) · [Before (L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1090)

```diff
-       const rM = OM.q.maxCoordinate;
+       const eV = JV.k.maxCoordinate;
```

#### 142. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1095` → after: `L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1095) · [Before (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1095)

```diff
-       return "string" === typeof MM ? MM : (0, SM.k)(MM, 3) ? zM(MM) : void 0
+       return "string" === typeof VV ? VV : (0, YV.r)(VV, 3) ? wV(VV) : void 0
```

#### 143. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1097` → after: `L1097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1097) · [Before (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1097)

```diff
-     const mM = new RegExp(OM.v);
+     const vV = new RegExp(JV.o);
```

#### 144. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1106` → after: `L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1106) · [Before (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1106)

```diff
-       for (const iM of MM.slice(0, OM.q.maxFrameTargets)) {
+       for (const xV of VV.slice(0, JV.k.maxFrameTargets)) {
```

#### 145. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1114` → after: `L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1114) · [Before (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1114)

```diff
-       if (!(0, SM.k)(MM, 3)) return;
+       if (!(0, YV.r)(VV, 3)) return;
```

#### 146. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1117` → after: `L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1117) · [Before (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1117)

```diff
-       return 0 === rM || rM * iM < OM.q.minDirectionLength ? void 0 : [MM[0] / rM / iM, MM[1] / rM / iM, MM[2] / rM / iM]
+       return 0 === eV || eV * xV < JV.k.minDirectionLength ? void 0 : [VV[0] / eV / xV, VV[1] / eV / xV, VV[2] / eV / xV]
```

#### 147. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1121` → after: `L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1121) · [Before (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1121)

```diff
-       if (void 0 !== MM) return "string" === typeof MM ? jM.includes(MM) ? MM : void 0 : (0, SM.k)(MM, 4) ? [nM(MM[0], 0, 1, 0), nM(MM[1], OM.q.minEasingY, OM.q.maxEasingY, 0), nM(MM[2], 0, 1, 1), nM(MM[3], OM.q.minEasingY, OM.q.maxEasingY, 1)] : "linear"
+       if (void 0 !== VV) return "string" === typeof VV ? UV.includes(VV) ? VV : void 0 : (0, YV.r)(VV, 4) ? [QV(VV[0], 0, 1, 0), QV(VV[1], JV.k.minEasingY, JV.k.maxEasingY, 0), QV(VV[2], 0, 1, 1), QV(VV[3], JV.k.minEasingY, JV.k.maxEasingY, 1)] : "linear"
```

#### 148. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1126-L1128` → after: `L1126-L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1126-L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1126-L1128) · [Before (L1126-L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1126-L1128)

```diff
-         maxYaw: nM(MM.maxYaw, 0, OM.q.maxPlayerLook, 0),
-         maxPitch: nM(MM.maxPitch, 0, OM.q.maxPlayerLook, 0),
-         returnMs: QM(MM.returnMs, 0, OM.q.maxReturnMs)
+         maxYaw: QV(VV.maxYaw, 0, JV.k.maxPlayerLook, 0),
+         maxPitch: QV(VV.maxPitch, 0, JV.k.maxPlayerLook, 0),
+         returnMs: nV(VV.returnMs, 0, JV.k.maxReturnMs)
```

#### 149. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1136-L1137` → after: `L1136-L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1136-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1136-L1137) · [Before (L1136-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1136-L1137)

```diff
-       const iM = OM.q.maxTransitionMs,
-         SM = OM.q.minTransitionFadeMs;
+       const xV = JV.k.maxTransitionMs,
+         YV = JV.k.minTransitionFadeMs;
```

#### 150. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1139` → after: `L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1139) · [Before (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1139)

```diff
-         colour: "string" === typeof MM.colour && lM.test(MM.colour) ? MM.colour : OM.i,
+         colour: "string" === typeof VV.colour && jV.test(VV.colour) ? VV.colour : JV.f,
```

#### 151. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1141` → after: `L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1141) · [Before (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1141)

```diff
-         holdMs: nM(null !== (rM = MM.holdMs) && void 0 !== rM ? rM : 0, 0, iM, 0),
+         holdMs: QV(null !== (eV = VV.holdMs) && void 0 !== eV ? eV : 0, 0, xV, 0),
```

#### 152. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1153` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1153) · [Before (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1153)

```diff
-       return Number.isFinite(MM.timeMs) && (0, SM.k)(MM.position, 3) && (void 0 === rM || "string" === typeof rM || (0, SM.k)(rM, 3))
+       return Number.isFinite(VV.timeMs) && (0, YV.r)(VV.position, 3) && (void 0 === eV || "string" === typeof eV || (0, YV.r)(eV, 3))
```

#### 153. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1159` → after: `L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1159) · [Before (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1159)

```diff
-         timeMs: nM(MM.timeMs, 0, OM.q.maxPathMs, 0),
+         timeMs: QV(VV.timeMs, 0, JV.k.maxPathMs, 0),
```

#### 154. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1163` → after: `L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1163) · [Before (L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1163)

```diff
-         fov: QM(MM.fov, OM.q.minFov, OM.q.maxFov),
+         fov: nV(VV.fov, JV.k.minFov, JV.k.maxFov),
```

#### 155. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1171` → after: `L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1171) · [Before (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1171)

```diff
-       for (const iM of MM.slice(0, OM.q.maxKeyframes)) {
+       for (const xV of VV.slice(0, JV.k.maxKeyframes)) {
```

#### 156. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1184` → after: `L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1184) · [Before (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1184)

```diff
-           blendInMs: QM(MM.blendInMs, 0, OM.q.maxBlendInMs),
+           blendInMs: nV(VV.blendInMs, 0, JV.k.maxBlendInMs),
```

#### 157. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1194` → after: `L1194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1194) · [Before (L1194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1194)

```diff
-       if ("default" === MM.mode || "fixed" === MM.mode && !(0, SM.k)(MM.position, 3)) return iM;
+       if ("default" === VV.mode || "fixed" === VV.mode && !(0, YV.r)(VV.position, 3)) return xV;
```

#### 158. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1197-L1198` → after: `L1197-L1198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1197-L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1197-L1198) · [Before (L1197-L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1197-L1198)

```diff
-         fov: QM(MM.fov, OM.q.minFov, OM.q.maxFov),
-         playerFacing: (mM = MM.playerFacing, aM.includes(mM) ? mM : void 0),
+         fov: nV(VV.fov, JV.k.minFov, JV.k.maxFov),
+         playerFacing: (vV = VV.playerFacing, yV.includes(vV) ? vV : void 0),
```

#### 159. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1209` → after: `L1209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1209) · [Before (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1209)

```diff
-             ...MM, ...jM, target: "string" === typeof MM.target ? MM.target : void 0, anchor: (lM = MM.anchor, PM.includes(lM) ? lM : void 0), lookAt: LM(MM.lookAt), offset: (HM = MM.offset, Array.isArray(HM) ? [nM(HM[0], -OM.q.maxOffset, OM.q.maxOffset, 0), nM(HM[1], -OM.q.maxOf … [truncated]
+             ...VV, ...UV, target: "string" === typeof VV.target ? VV.target : void 0, anchor: (jV = VV.anchor, pV.includes(jV) ? jV : void 0), lookAt: ZV(VV.lookAt), offset: (rV = VV.offset, Array.isArray(rV) ? [QV(rV[0], -JV.k.maxOffset, JV.k.maxOffset, 0), QV(rV[1], -JV.k.maxOf … [truncated]
```

#### 160. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1217` → after: `L1217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1217) · [Before (L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1217)

```diff
-             ...MM, ...jM, targets: hM(MM.targets), viewHeading: QM(MM.viewHeading, -OM.q.maxFrameHeading, OM.q.maxFrameHeading), viewElevation: QM(MM.viewElevation, 0, OM.q.maxFrameElevation), padding: QM(MM.padding, 0, OM.q.maxFrameDistance), closestDistance: QM(MM.closestDistan … [truncated]
+             ...VV, ...UV, targets: kV(VV.targets), viewHeading: nV(VV.viewHeading, -JV.k.maxFrameHeading, JV.k.maxFrameHeading), viewElevation: nV(VV.viewElevation, 0, JV.k.maxFrameElevation), padding: nV(VV.padding, 0, JV.k.maxFrameDistance), closestDistance: nV(VV.closestDistan … [truncated]
```

#### 161. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1224` → after: `L1224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1224) · [Before (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1224)

```diff
-   40312: (MM, rM, iM) => {
+   40455: (VV, eV, xV) => {
```

#### 162. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1226` → after: `L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1226) · [Before (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1226)

```diff
-       c: () => OM
+       b: () => JV
```

#### 163. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1236` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1236) · [Before (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1236)

```diff
-   39689: (MM, rM, iM) => {
+   39849: (VV, eV, xV) => {
```

#### 164. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1238` → after: `L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1238) · [Before (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1238)

```diff
-       d: () => PM
+       c: () => pV
```

#### 165. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1240` → after: `L1240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1240) · [Before (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1240)

```diff
-     var OM = iM(1229);
+     var JV = xV(1252);
```

#### 166. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1272-L1273` → after: `L1272-L1273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1272-L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1272-L1273) · [Before (L1272-L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1272-L1273)

```diff
-         } = this, JM = [zM, LM, mM, `${HM}px`, hM].filter(Boolean).join(" "), dM = [
-           [mM, `${HM}px`, jM(hM)].filter(Boolean).join(" "), `${HM}px sans-serif`
+         } = this, bV = [wV, ZV, vV, `${rV}px`, kV].filter(Boolean).join(" "), EV = [
+           [vV, `${rV}px`, UV(kV)].filter(Boolean).join(" "), `${rV}px sans-serif`
```

#### 167. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1284` → after: `L1284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1284) · [Before (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1284)

```diff
-           aM || (aM = !0, Promise.resolve().then((() => iM(1329))).then((iM => {
+           yV || (yV = !0, Promise.resolve().then((() => xV(1353))).then((xV => {
```

#### 168. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1286` → after: `L1286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1286) · [Before (L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1286)

```diff
-               CJ: SM
+               lb: YV
```

#### 169. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1290-L1291` → after: `L1290-L1291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1290-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1290-L1291) · [Before (L1290-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1290-L1291)

```diff
-               ML: rM,
-               drawnWith: null !== OM && void 0 !== OM ? OM : "the kept font, scaled"
+               ZZ: eV,
+               drawnWith: null !== JV && void 0 !== JV ? JV : "the kept font, scaled"
```

#### 170. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1317` → after: `L1317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1317) · [Before (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1317)

```diff
-         rM = (0, OM.U)(rM);
+         eV = (0, JV.O)(eV);
```

#### 171. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1346` → after: `L1346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1346) · [Before (L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1346)

```diff
-         "top" === this.vAlign ? LM = SM + PM : "bottom" === this.vAlign ? (LM = QM - dM, lM = QM) : (lM = SM + aM / 2, LM -= yM), mM.forEach((rM => {
+         "top" === this.vAlign ? ZV = YV + pV : "bottom" === this.vAlign ? (ZV = nV - EV, jV = nV) : (jV = YV + yV / 2, ZV -= BV), vV.forEach((eV => {
```

#### 172. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1373` → after: `L1373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1373) · [Before (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1373)

```diff
-           const rM = zM > 0 ? LM + OM : LM;
+           const eV = wV > 0 ? ZV + JV : ZV;
```

#### 173. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1379` → after: `L1379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1379) · [Before (L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1379)

```diff
-   40181: (MM, rM, iM) => {
+   40335: (VV, eV, xV) => {
```

#### 174. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1384` → after: `L1384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1384) · [Before (L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1384)

```diff
-       e: () => OM
+       c: () => JV
```

#### 175. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1387` → after: `L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1387) · [Before (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1387)

```diff
-   39691: (MM, rM, iM) => {
+   39857: (VV, eV, xV) => {
```

#### 176. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1392-L1393` → after: `L1391-L1393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1391-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1391-L1393) · [Before (L1392-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1392-L1393)

```diff
-       j: () => zM,
-       k: () => LM
+       i: () => vV,
+       m: () => wV,
+       n: () => ZV
```

#### 177. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1395-L1396` → after: `L1395-L1396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1395-L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1395-L1396) · [Before (L1395-L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1395-L1396)

```diff
-     var OM = iM(4577),
-       SM = iM(332);
+     var JV = xV(4642),
+       YV = xV(375);
```

#### 178. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1409` → after: `L1409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1409) · [Before (L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1409)

```diff
-         return iM && "object" === typeof iM ? iM : rM
+         return xV && "object" === typeof xV ? xV : eV
```

#### 179. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1411` → after: `L1411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1411) · [Before (L1411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1411)

```diff
-         return void 0 !== iM && console.error(`Couldn't parse ${iM}`, OM), rM
+         return void 0 !== xV && console.error(`Couldn't parse ${xV}`, JV), eV
```

#### 180. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1421-L1423` → after: `L1421-L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1421-L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1421-L1423) · [Before (L1421-L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1421-L1423)

```diff
-       return null !== rM && void 0 !== rM ? rM : {
-         status: null !== (iM = MM.status) && void 0 !== iM ? iM : "loading",
-         entries: null !== (OM = MM.entries) && void 0 !== OM ? OM : []
+       return null !== eV && void 0 !== eV ? eV : {
+         status: null !== (xV = VV.status) && void 0 !== xV ? xV : "loading",
+         entries: null !== (JV = VV.entries) && void 0 !== JV ? JV : []
```

#### 181. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1428` → after: `L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1428) · [Before (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1428)

```diff
-       return "number" === typeof MM && Number.isFinite(MM) && MM > 0 ? MM : rM
+       return "number" === typeof VV && Number.isFinite(VV) && VV > 0 ? VV : eV
```

#### 182. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1449` → after: `L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1449) · [Before (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1449)

```diff
-       MM.setTransform(1, 0, 0, 1, 0, 0), MM.fillStyle = SM.L.defaultNameTagBackground, MM.fillRect(0, 0, rM, iM), MM.scale(rM / aM.layoutWidth, iM / aM.layoutHeight), MM.translate((aM.layoutWidth - jM) / 2, 0),
+       VV.setTransform(1, 0, 0, 1, 0, 0), VV.fillStyle = YV.E.defaultNameTagBackground, VV.fillRect(0, 0, eV, xV), VV.scale(eV / yV.layoutWidth, xV / yV.layoutHeight), VV.translate((yV.layoutWidth - UV) / 2, 0),
```

#### 183. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1461` → after: `L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1461) · [Before (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1461)

```diff
-           } = SM.L;
+           } = YV.E;
```

#### 184. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1465` → after: `L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1465) · [Before (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1465)

```diff
-               MM.font = `bold ${SM}px 'Jetbrains Mono', monospace`, MM.fillStyle = jM, MM.textAlign = PM;
+               VV.font = `bold ${YV}px 'Jetbrains Mono', monospace`, VV.fillStyle = UV, VV.textAlign = pV;
```

#### 185. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1468` → after: `L1468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1468) · [Before (L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1468)

```diff
-                 for (; nM.length > 0 && MM.measureText(`${nM}\u2026`).width > aM;) nM = nM.slice(0, -1);
+                 for (; QV.length > 0 && VV.measureText(`${QV}\u2026`).width > yV;) QV = QV.slice(0, -1);
```

#### 186. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1476` → after: `L1476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1476) · [Before (L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1476)

```diff
-             bM = null === lM ? null : (0, SM.qc)(lM),
+             AV = null === jV ? null : (0, YV.nc)(jV),
```

#### 187. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1478` → after: `L1478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1478) · [Before (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1478)

```diff
-             tM = dM(HM.entries, OM.l),
+             XV = EV(rV.entries, JV.k),
```

#### 188. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1493` → after: `L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1493) · [Before (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1493)

```diff
-             kM = yM(tM, void 0 === sM || sM.value === (null === DM || void 0 === DM ? void 0 : DM.value) ? DM : null),
+             iV = BV(XV, void 0 === gV || gV.value === (null === DV || void 0 === DV ? void 0 : DV.value) ? DV : null),
```

#### 189. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1499` → after: `L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1499) · [Before (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1499)

```diff
-             fM = null !== (aM = null !== (zM = null === pM || void 0 === pM ? void 0 : pM.rank) && void 0 !== zM ? zM : oM(uM, ZM)) && void 0 !== aM ? aM : oM(tM, kM);
+             oV = null !== (yV = null !== (wV = null === WV || void 0 === WV ? void 0 : WV.rank) && void 0 !== wV ? wV : aV(zV, CV)) && void 0 !== yV ? yV : aV(XV, iV);
```

#### 190. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1501` → after: `L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1501) · [Before (L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1501)

```diff
-           const YM = [...gM ? kM : [], ...RM ? [] : ZM],
+           const cV = [...MV ? iV : [], ...GV ? [] : CV],
```

#### 191. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1507-L1509` → after: `L1507-L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1507-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1507-L1509) · [Before (L1507-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1507-L1509)

```diff
-           CM(`TOP ${OM.l}  /  ALL TIME`, 24, 52, 28, UM, 976), CM(JM ? String(null !== (LM = rM.title) && void 0 !== LM ? LM : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, EM, 976), CM("RANK", 32, 174, 28, UM, vM - 40), CM("PLAYER", vM, 174, 28, UM, FM), CM(JM ? Stri … [truncated]
-           const BM = (jM - 232) / (OM.l + QM + PM),
-             XM = 208 + OM.l * BM,
+           TV(`TOP ${JV.k}  /  ALL TIME`, 24, 52, 28, tV, 976), TV(bV ? String(null !== (ZV = eV.title) && void 0 !== ZV ? ZV : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, qV, 976), TV("RANK", 32, 174, 28, tV, fV - 40), TV("PLAYER", fV, 174, 28, tV, mV), TV(bV ? Stri … [truncated]
+           const KV = (UV - 232) / (JV.k + nV + pV),
+             HV = 208 + JV.k * KV,
```

#### 192. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1513-L1514` → after: `L1513-L1514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1513-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1513-L1514) · [Before (L1513-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1513-L1514)

```diff
-               MM.fillStyle = jM ? GM : EM, MM.globalAlpha = jM ? .15 : SM ? .035 : 0, MM.fillRect(24, OM - BM / 2 + 1, 976, BM - 2), MM.globalAlpha = 1;
-               const aM = jM ? GM : EM;
+               VV.fillStyle = UV ? FV : qV, VV.globalAlpha = UV ? .15 : YV ? .035 : 0, VV.fillRect(24, JV - KV / 2 + 1, 976, KV - 2), VV.globalAlpha = 1;
+               const yV = UV ? FV : qV;
```

#### 193. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1526` → after: `L1526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1526) · [Before (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1526)

```diff
-             CM(rM, 512, OM - 28, 40, MM ? SM.L.redUiText : EM, 960, "center"), CM(iM, 512, OM + 27, 30, UM, 960, "center")
+             TV(eV, 512, JV - 28, 40, VV ? YV.E.redUiText : qV, 960, "center"), TV(xV, 512, JV + 27, 30, tV, 960, "center")
```

#### 194. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1532` → after: `L1532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1532) · [Before (L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1532)

```diff
-               iM = `YOUR RANK #${nM.format(fM)}${null===pM?"":` of ${nM.format(pM.total)}`}`;
+               xV = `YOUR RANK #${QV.format(oV)}${null===WV?"":` of ${QV.format(WV.total)}`}`;
```

#### 195. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1535` → after: `L1535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1535) · [Before (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1535)

```diff
-             CM(iM, 512, qM - (rM > 0 ? 15 : 0), OM, GM, 960, "center"), rM > 0 && CM(`Tied with ${nM.format(rM)} other${1===rM?"":"s"}`, 512, qM + 24, 24, UM, 960, "center")
+             TV(xV, 512, SV - (eV > 0 ? 15 : 0), JV, FV, 960, "center"), eV > 0 && TV(`Tied with ${QV.format(eV)} other${1===eV?"":"s"}`, 512, SV + 24, 24, tV, 960, "center")
```

#### 196. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1539` → after: `L1539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1539) · [Before (L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1539)

```diff
-           if (RM) CM(`You're in the top ${OM.l}!`, 512, TM, 40, GM, 960, "center");
+           if (GV) TV(`You're in the top ${JV.k}!`, 512, IV, 40, FV, 960, "center");
```

#### 197. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1560` → after: `L1560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1560) · [Before (L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1560)

```diff
-   39922: (MM, rM, iM) => {
+   40053: (VV, eV, xV) => {
```

#### 198. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1562-L1563` → after: `L1562-L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1562-L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1562-L1563) · [Before (L1562-L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1562-L1563)

```diff
-       d: () => SM,
-       g: () => jM
+       c: () => YV,
+       f: () => UV
```

#### 199. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1589` → after: `L1589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1589) · [Before (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1589)

```diff
-   40173: (MM, rM, iM) => {
+   40328: (VV, eV, xV) => {
```

#### 200. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1591` → after: `L1591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1591) · [Before (L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1591)

```diff
-       c: () => aM
+       e: () => yV
```

#### 201. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1593` → after: `L1593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1593) · [Before (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1593)

```diff
-     var OM = iM(37563),
+     var JV = xV(37793),
```

#### 202. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1603` → after: `L1603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1603) · [Before (L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1603)

```diff
-         return console.warn(`Invalid groundArrowPath colour "${MM}":`, rM), [...jM]
+         return console.warn(`Invalid groundArrowPath colour "${VV}":`, eV), [...UV]
```

#### 203. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1607` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1607) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1607)

```diff
-   40305: (MM, rM, iM) => {
+   40446: (VV, eV, xV) => {
```

#### 204. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1613-L1614` → after: `L1613-L1614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1613-L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1613-L1614) · [Before (L1613-L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1613-L1614)

```diff
-     var OM = iM(281),
-       SM = iM(3230);
+     var JV = xV(330),
+       YV = xV(3239);
```

#### 205. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1620-L1621` → after: `L1620-L1621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1620-L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1620-L1621) · [Before (L1620-L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1620-L1621)

```diff
-       const iM = Math.min(screen.width, screen.height) * (null !== (rM = (0, OM.b)()) && void 0 !== rM ? rM : (0, SM.o)());
-       return Math.max(window.innerHeight * (0, SM.o)(), iM) / (0, SM.q)(MM)
+       const xV = Math.min(screen.width, screen.height) * (null !== (eV = (0, JV.b)()) && void 0 !== eV ? eV : (0, YV.n)());
+       return Math.max(window.innerHeight * (0, YV.n)(), xV) / (0, YV.p)(VV)
```

#### 206. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1625` → after: `L1625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1625) · [Before (L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1625)

```diff
-       return rM / (2 * Math.tan(iM / 2)) > aM ? MM : QM(MM)
+       return eV / (2 * Math.tan(xV / 2)) > yV ? VV : nV(VV)
```

#### 207. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1632` → after: `L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1632) · [Before (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1632)

```diff
-   40165: (MM, rM, iM) => {
+   40324: (VV, eV, xV) => {
```

#### 208. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1634` → after: `L1634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1634) · [Before (L1634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1634)

```diff
-       e: () => SM
+       c: () => YV
```

#### 209. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1636` → after: `L1636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1636) · [Before (L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1636)

```diff
-     var OM = iM(181);
+     var JV = xV(206);
```

#### 210. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1639` → after: `L1639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1639) · [Before (L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1639)

```diff
-       const mM = OM.f.HL,
+       const vV = JV.f.PZ,
```

#### 211. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1656-L1657` → after: `L1656-L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1656-L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1656-L1657) · [Before (L1656-L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1656-L1657)

```diff
-               bM = UM.NH,
-               wM = UM.Xm,
+               AV = tV.Yk,
+               NV = tV.Ur,
```

#### 212. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1678` → after: `L1678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1678) · [Before (L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1678)

```diff
-   34611: (MM, rM, iM) => {
+   34874: (VV, eV, xV) => {
```

#### 213. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1683-L1684` → after: `L1682-L1684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1682-L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1682-L1684) · [Before (L1683-L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1683-L1684)

```diff
-       h: () => SM,
-       j: () => OM
+       i: () => yV,
+       k: () => YV,
+       m: () => JV
```

#### 214. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1778` → after: `L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1778) · [Before (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1778)

```diff
-   40283: (MM, rM, iM) => {
+   40425: (VV, eV, xV) => {
```

#### 215. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1783-L1784` → after: `L1784-L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1784-L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1784-L1786) · [Before (L1783-L1784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1783-L1784)

```diff
-       j: () => OM,
-       n: () => SM,
+       k: () => nV,
+       l: () => UV,
+       o: () => wV,
```

#### 216. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1786-L1788` → after: `L1788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R1788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/206.js#L1788) · [Before (L1786-L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/206.js#L1786-L1788)

```diff
-       s: () => jM,
-       v: () => zM,
-       y: () => nM
+       s: () => pV
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/207.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/207.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376)

#### 1. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/207.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/207.js#L4)

```diff
-   34615: (MM, rM, iM) => {
+   34879: (VV, eV, xV) => {
```

#### 2. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/207.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/207.js#L9-L10)

```diff
-     var OM = iM(871),
-       SM = iM(313);
+     var JV = xV(863),
+       YV = xV(364);
```

#### 3. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/207.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/207.js#L20)

```diff
-           menu: SM.m.COSMETIC_SHOP
+           menu: YV.q.COSMETIC_SHOP
```

#### 4. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/207.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/207.js#L27)

```diff
-             menu: SM.m.COSMETIC_SHOP
+             menu: YV.q.COSMETIC_SHOP
```

#### 5. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L201` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/207.js#L201) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/207.js#L201)

```diff
-             menu: SM.m.SOCIAL
+             menu: YV.q.SOCIAL
```

#### 6. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L869` → after: `L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/207.js#L869) · [Before (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/207.js#L869)

```diff
-             menu: SM.m.COSMETIC_SHOP
+             menu: YV.q.COSMETIC_SHOP
```

#### 7. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L883` → after: `L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/207.js#L883) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/207.js#L883)

```diff
-             menu: SM.m.COSMETIC_SHOP
+             menu: YV.q.COSMETIC_SHOP
```

#### 8. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L959` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/207.js#L959) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/207.js#L959)

```diff
-             menu: SM.m.COSMETIC_SHOP
+             menu: YV.q.COSMETIC_SHOP
```

#### 9. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L1139` → after: `L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/207.js#L1139) · [Before (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/207.js#L1139)

```diff
-             menu: SM.m.COSMETIC_SHOP
+             menu: YV.q.COSMETIC_SHOP
```

#### 10. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L1431` → after: `L1431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R1431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L1431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/207.js#L1431) · [Before (L1431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/207.js#L1431)

```diff
-         description: `1v1 Fights (previously known as Ranked PvP) has been updated!\n\t${jM}\u2022\tRANKS! What rank will you be?\n\t${jM}\u2022\tNew Mode: Build Fight! Use spikes and nets to win in a whole different way!\n\t${jM}\u2022\tDuels has become Sword Fight! How much can … [truncated]
+         description: `1v1 Fights (previously known as Ranked PvP) has been updated!\n\t${UV}\u2022\tRANKS! What rank will you be?\n\t${UV}\u2022\tNew Mode: Build Fight! Use spikes and nets to win in a whole different way!\n\t${UV}\u2022\tDuels has become Sword Fight! How much can … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L1459` → after: `L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/207.js#L1459) · [Before (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/207.js#L1459)

```diff
-         description: `Ranked PvP is here!\n\t${jM}\u2022\tPlay 1v1 Duels or 2v2 Bridge to test your skills!\n\t${jM}\u2022\tPlay your placement games to get an MMR value!\n\t${jM}\u2022\tCan you get a higher MMR than Arthur? (he's cracked)`,
+         description: `Ranked PvP is here!\n\t${UV}\u2022\tPlay 1v1 Duels or 2v2 Bridge to test your skills!\n\t${UV}\u2022\tPlay your placement games to get an MMR value!\n\t${UV}\u2022\tCan you get a higher MMR than Arthur? (he's cracked)`,
```

#### 12. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L1555` → after: `L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/207.js#L1555) · [Before (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/207.js#L1555)

```diff
-         description: `Bunch of new stuff for One Block for you!\n\t\u2022\tCross-Lobby Islands!\n\t${jM}\u2022\tYou can now migrate your island to any lobby you want!\n\t${jM}\u2022\tYou can also freely switch between your different islands at any time.\n\t${jM}\u2022\tUse the Is … [truncated]
+         description: `Bunch of new stuff for One Block for you!\n\t\u2022\tCross-Lobby Islands!\n\t${UV}\u2022\tYou can now migrate your island to any lobby you want!\n\t${UV}\u2022\tYou can also freely switch between your different islands at any time.\n\t${UV}\u2022\tUse the Is … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L1787` → after: `L1787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/207.js#L1787) · [Before (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/207.js#L1787)

```diff
-             menu: SM.m.CUSTOMISATION
+             menu: YV.q.CUSTOMISATION
```

#### 14. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L1807` → after: `L1807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R1807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/207.js#L1807) · [Before (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/207.js#L1807)

```diff
-             menu: SM.m.CUSTOMISATION
+             menu: YV.q.CUSTOMISATION
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/208.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/208.js` (505 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1)

#### 1. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1)

```diff
- /*! For license information please see fo1voe.208.bafffca5.chunk.js.LICENSE.txt */
+ /*! For license information please see pxmq3aq.208.9b36a464.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L5)

```diff
-   34654: (MM, rM, iM) => {
+   34907: (VV, eV, xV) => {
```

#### 3. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L21-L22)

```diff
-     var PM = iM(34660).d,
-       nM = iM(34663).b,
+     var pV = xV(34913).b,
+       QV = xV(34918).e,
```

#### 4. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L24)

```diff
-     rM.e = function(MM) {
+     eV.b = function(VV) {
```

#### 5. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L40)

```diff
-   34663: (MM, rM) => {
+   34918: (VV, eV) => {
```

#### 6. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L126` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L126) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L126)

```diff
-     }, rM.b = zM
+     }, eV.e = wV
```

#### 7. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L128)

```diff
-   34660: (MM, rM) => {
+   34913: (VV, eV) => {
```

#### 8. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L176)

```diff
-     }, rM.d = jM
+     }, eV.b = UV
```

#### 9. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L178` → after: `L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L178) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L178)

```diff
-   34704: (MM, rM, iM) => {
+   34955: (VV, eV, xV) => {
```

#### 10. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L180-L181` → after: `L180-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L180-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L180-L182) · [Before (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L180-L181)

```diff
-       e: () => jM,
-       h: () => SM,
+       c: () => UV,
+       g: () => YV,
+       j: () => nV,
```

#### 11. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L183-L185` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L184-L185) · [Before (L183-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L183-L185)

```diff
-       m: () => HM,
-       q: () => aM,
-       r: () => hM
+       l: () => yV,
+       o: () => kV
```

#### 12. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L187` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L187) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L187)

```diff
-     var OM = iM(34711);
+     var JV = xV(34963);
```

#### 13. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L192` → after: `L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L192) · [Before (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L192)

```diff
-         const rM = new OM.d(MM),
+         const eV = new JV.b(VV),
```

#### 14. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L243` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L243) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L243)

```diff
-         if (-1 === PM) throw new TypeError(`Unsupported number of channels: ${MM.outputNumberOfChannels}`);
+         if (-1 === pV) throw new TypeError(`Unsupported number of channels: ${VV.outputNumberOfChannels}`);
```

#### 15. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L248)

```diff
-           hM = new OM.d(HM);
+           kV = new JV.b(rV);
```

#### 16. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L264)

```diff
-           iM = new OM.d(rM),
+           xV = new JV.b(eV),
```

#### 17. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L280)

```diff
-   34711: (MM, rM, iM) => {
+   34963: (VV, eV, xV) => {
```

#### 18. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L282)

```diff
-       d: () => OM
+       b: () => JV
```

#### 19. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L338` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L338) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L338)

```diff
-   34720: (MM, rM, iM) => {
+   34968: (VV, eV, xV) => {
```

#### 20. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L340` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L340) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L340)

```diff
-       c: () => cM,
+       d: () => OV,
```

#### 21. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L344-L346` → after: `L343-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L343-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L343-L344) · [Before (L344-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L344-L346)

```diff
-       k: () => QM,
-       n: () => vM,
-       q: () => hr,
+       l: () => SV,
+       o: () => nV,
```

#### 22. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L348` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L346) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L348)

```diff
-       s: () => lM,
+       t: () => ke,
```

#### 23. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L350-L351` → after: `L348-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L348-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L348-L351) · [Before (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L350-L351)

```diff
-       z: () => GM,
-       D: () => oM,
+       w: () => jV,
+       x: () => IV,
+       y: () => FV,
+       C: () => aV,
```

#### 24. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L353-L357` → after: `L353-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L353-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L353-L356) · [Before (L353-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L353-L357)

```diff
-       J: () => xM,
-       I: () => EM,
-       M: () => gM,
-       O: () => hM,
-       S: () => tM,
+       K: () => LV,
+       G: () => qV,
+       N: () => MV,
+       R: () => kV,
```

#### 25. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L361-L362` → after: `L360-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L360-L361) · [Before (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L361-L362)

```diff
-       cb: () => VM,
-       fb: () => Lr,
+       db: () => rV,
+       gb: () => dV,
```

#### 26. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L368` → after: `L367-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L367-L368) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L368)

```diff
-       sb: () => ZM
+       tb: () => tV,
+       xb: () => CV
```

#### 27. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L370-L372` → after: `L370-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L370-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L370-L372) · [Before (L370-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L370-L372)

```diff
-     var OM = iM(34713),
-       SM = iM(34685),
-       jM = iM(34727);
+     var JV = xV(34965),
+       YV = xV(34933),
+       UV = xV(34973);
```

#### 28. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L375-L376` → after: `L375-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L375-L376) · [Before (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L375-L376)

```diff
-     var nM, QM, zM = iM(34711),
-       LM = iM(34734);
+     var QV, nV, wV = xV(34963),
+       ZV = xV(34981);
```

#### 29. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L405` → after: `L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L405) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L405)

```diff
-           1 === rM ? MM = OM.getUint8(iM) : 2 === rM ? MM = OM.getUint16(iM, !1) : 3 === rM ? MM = (0, SM.rb)(OM, iM, !1) : ((0, SM.J)(4 === rM), MM = OM.getUint32(iM, !1)), iM += rM, yield {
+           1 === eV ? VV = JV.getUint8(xV) : 2 === eV ? VV = JV.getUint16(xV, !1) : 3 === eV ? VV = (0, YV.yb)(JV, xV, !1) : ((0, YV.L)(4 === eV), VV = JV.getUint32(xV, !1)), xV += eV, yield {
```

#### 30. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L440` → after: `L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L440) · [Before (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L440)

```diff
-               (0, SM.bd)(MM, jM, aM.byteLength, !1);
+               (0, YV.gd)(VV, UV, yV.byteLength, !1);
```

#### 31. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L463` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L463) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L463)

```diff
-           (0, SM.J)(null !== aM);
+           (0, YV.L)(null !== yV);
```

#### 32. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L476` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L476) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L476)

```diff
-             sequenceParameterSetExt: PM ? OM : null
+             sequenceParameterSetExt: pV ? JV : null
```

#### 33. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L479` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L479) · [Before (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L479)

```diff
-           return jM.d._error("Error building AVC Decoder Configuration Record:", rM), null
+           return UV.c._error("Error building AVC Decoder Configuration Record:", eV), null
```

#### 34. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L497` → after: `L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L497) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L497)

```diff
-           (0, SM.J)(null !== MM.bitDepthLumaMinus8), (0, SM.J)(null !== MM.bitDepthChromaMinus8), (0, SM.J)(null !== MM.sequenceParameterSetExt), rM.push(252 | 3 & MM.chromaFormat), rM.push(248 | 7 & MM.bitDepthLumaMinus8), rM.push(248 | 7 & MM.bitDepthChromaMinus8), rM.push(MM.s … [truncated]
+           (0, YV.L)(null !== VV.bitDepthLumaMinus8), (0, YV.L)(null !== VV.bitDepthChromaMinus8), (0, YV.L)(null !== VV.sequenceParameterSetExt), eV.push(252 | 3 & VV.chromaFormat), eV.push(248 | 7 & VV.bitDepthLumaMinus8), eV.push(248 | 7 & VV.bitDepthChromaMinus8), eV.push(VV.s … [truncated]
```

#### 35. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L508` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L508) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L508)

```diff
-           const rM = (0, SM.nd)(MM);
+           const eV = (0, YV.rd)(VV);
```

#### 36. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L555` → after: `L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L555) · [Before (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L555)

```diff
-           return jM.d._error("Error deserializing AVC Decoder Configuration Record:", rM), null
+           return UV.c._error("Error deserializing AVC Decoder Configuration Record:", eV), null
```

#### 37. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L627` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L627) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L627)

```diff
-             iM = new zM.d(rM);
+             xV = new wV.b(eV);
```

#### 38. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L633` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L633) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L633)

```diff
-           (0, SM.Ac)(iM);
+           (0, YV.Hc)(xV);
```

#### 39. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L639` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L639) · [Before (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L639)

```diff
-             nM = (0, SM.Ac)(iM), 3 === nM && (mM = iM.readBits(1)), QM = (0, SM.Ac)(iM), LM = (0, SM.Ac)(iM), iM.skipBits(1);
+             QV = (0, YV.Hc)(xV), 3 === QV && (vV = xV.readBits(1)), nV = (0, YV.Hc)(xV), ZV = (0, YV.Hc)(xV), xV.skipBits(1);
```

#### 40. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L648` → after: `L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L648) · [Before (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L648)

```diff
-                       jM = (OM + (0, SM.Bc)(iM) + 256) % 256
+                       UV = (JV + (0, YV.Lc)(xV) + 256) % 256
```

#### 41. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L650` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L650) · [Before (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L650)

```diff
-                     OM = 0 === jM ? OM : jM
+                     JV = 0 === UV ? JV : UV
```

#### 42. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L654-L656` → after: `L654-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L654-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L654-L656) · [Before (L654-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L654-L656)

```diff
-           }(0, SM.Ac)(iM);
-           const HM = (0, SM.Ac)(iM);
-           if (0 === HM)(0, SM.Ac)(iM);
+           }(0, YV.Hc)(xV);
+           const rV = (0, YV.Hc)(xV);
+           if (0 === rV)(0, YV.Hc)(xV);
```

#### 43. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L658-L663` → after: `L658-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L658-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L658-L663) · [Before (L658-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L658-L663)

```diff
-             iM.skipBits(1), (0, SM.Bc)(iM), (0, SM.Bc)(iM);
-             const MM = (0, SM.Ac)(iM);
-             for (let rM = 0; rM < MM; rM++)(0, SM.Bc)(iM)
-           }(0, SM.Ac)(iM), iM.skipBits(1);
-           const hM = (0, SM.Ac)(iM),
-             dM = (0, SM.Ac)(iM),
+             xV.skipBits(1), (0, YV.Lc)(xV), (0, YV.Lc)(xV);
+             const VV = (0, YV.Hc)(xV);
+             for (let eV = 0; eV < VV; eV++)(0, YV.Lc)(xV)
+           }(0, YV.Hc)(xV), xV.skipBits(1);
+           const kV = (0, YV.Hc)(xV),
+             EV = (0, YV.Hc)(xV),
```

#### 44. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L671-L674` → after: `L671-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L671-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L671-L674) · [Before (L671-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L671-L674)

```diff
-             const MM = (0, SM.Ac)(iM),
-               rM = (0, SM.Ac)(iM),
-               OM = (0, SM.Ac)(iM),
-               jM = (0, SM.Ac)(iM);
+             const VV = (0, YV.Hc)(xV),
+               eV = (0, YV.Hc)(xV),
+               JV = (0, YV.Hc)(xV),
+               UV = (0, YV.Hc)(xV);
```

#### 45. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L676` → after: `L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L676) · [Before (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L676)

```diff
-             if (0 === (0 === mM ? nM : 0)) aM = 1, PM = 2 - GM;
+             if (0 === (0 === vV ? QV : 0)) yV = 1, pV = 2 - FV;
```

#### 46. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L712)

```diff
-             iM.readBits(1) && ((0, SM.Ac)(iM), (0, SM.Ac)(iM));
+             xV.readBits(1) && ((0, YV.Hc)(xV), (0, YV.Hc)(xV));
```

#### 47. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L717` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L717) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L717)

```diff
-             rM && bM(iM), (MM || rM) && iM.skipBits(1), iM.skipBits(1), WM = iM.pos, sM = iM.readBits(1), sM && (iM.skipBits(1), (0, SM.Ac)(iM), (0, SM.Ac)(iM), (0, SM.Ac)(iM), (0, SM.Ac)(iM), RM = (0, SM.Ac)(iM), pM = (0, SM.Ac)(iM))
+             eV && AV(xV), (VV || eV) && xV.skipBits(1), xV.skipBits(1), RV = xV.pos, gV = xV.readBits(1), gV && (xV.skipBits(1), (0, YV.Hc)(xV), (0, YV.Hc)(xV), (0, YV.Hc)(xV), (0, YV.Hc)(xV), GV = (0, YV.Hc)(xV), WV = (0, YV.Hc)(xV))
```

#### 48. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L720` → after: `L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L720) · [Before (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L720)

```diff
-             (0, SM.J)(null === pM);
+             (0, YV.L)(null === WV);
```

#### 49. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L724` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L724) · [Before (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L724)

```diff
-                 iM = OM.c.find((MM => MM.level >= PM)) ?? (0, SM.cc)(OM.c),
+                 xV = JV.c.find((VV => VV.level >= pV)) ?? (0, YV.jc)(JV.c),
```

#### 50. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L729` → after: `L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L729) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L729)

```diff
-           return (0, SM.J)(null !== pM), {
+           return (0, YV.L)(null !== WV), {
```

#### 51. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L754` → after: `L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L754) · [Before (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L754)

```diff
-           return jM.d._error("Error parsing AVC SPS:", rM), null
+           return UV.c._error("Error parsing AVC SPS:", eV), null
```

#### 52. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L758` → after: `L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L758) · [Before (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L758)

```diff
-         const rM = (0, SM.Ac)(MM);
+         const eV = (0, YV.Hc)(VV);
```

#### 53. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L760` → after: `L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L760) · [Before (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L760)

```diff
-         for (let iM = 0; iM <= rM; iM++)(0, SM.Ac)(MM), (0, SM.Ac)(MM), MM.skipBits(1);
+         for (let xV = 0; xV <= eV; xV++)(0, YV.Hc)(VV), (0, YV.Hc)(VV), VV.skipBits(1);
```

#### 54. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L765` → after: `L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L765) · [Before (L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L765)

```diff
-           const iM = 3 & (0, SM.od)(rM.description)[21];
+           const xV = 3 & (0, YV.sd)(eV.description)[21];
```

#### 55. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L785` → after: `L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L785) · [Before (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L785)

```diff
-               const rM = new zM.d(JM(MM));
+               const eV = new wV.b(bV(VV));
```

#### 56. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L797-L798` → after: `L797-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L797-L798) · [Before (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L797-L798)

```diff
-               (0, SM.Ac)(rM);
-               const mM = (0, SM.Ac)(rM);
+               (0, YV.Hc)(eV);
+               const vV = (0, YV.Hc)(eV);
```

#### 57. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L801-L802` → after: `L801-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L801-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L801-L802) · [Before (L801-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L801-L802)

```diff
-               const hM = (0, SM.Ac)(rM),
-                 dM = (0, SM.Ac)(rM);
+               const kV = (0, YV.Hc)(eV),
+                 EV = (0, YV.Hc)(eV);
```

#### 58. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L806-L809` → after: `L806-L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L806-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L806-L809) · [Before (L806-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L806-L809)

```diff
-                 const MM = (0, SM.Ac)(rM),
-                   iM = (0, SM.Ac)(rM),
-                   OM = (0, SM.Ac)(rM),
-                   jM = (0, SM.Ac)(rM);
+                 const VV = (0, YV.Hc)(eV),
+                   xV = (0, YV.Hc)(eV),
+                   JV = (0, YV.Hc)(eV),
+                   UV = (0, YV.Hc)(eV);
```

#### 59. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L812` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L812) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L812)

```diff
-                 const nM = 0 === HM ? mM : 0;
+                 const QV = 0 === rV ? vV : 0;
```

#### 60. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L815-L817` → after: `L815-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L815-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L815-L817) · [Before (L815-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L815-L817)

```diff
-               const EM = (0, SM.Ac)(rM),
-                 UM = (0, SM.Ac)(rM);
-               (0, SM.Ac)(rM);
+               const qV = (0, YV.Hc)(eV),
+                 tV = (0, YV.Hc)(eV);
+               (0, YV.Hc)(eV);
```

#### 61. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L820-L822` → after: `L820-L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L820-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L820-L822) · [Before (L820-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L820-L822)

```diff
-               for (let MM = GM ? 0 : iM; MM <= iM; MM++)(0, SM.Ac)(rM), CM = (0, SM.Ac)(rM), (0, SM.Ac)(rM);
-               (0, SM.Ac)(rM), (0, SM.Ac)(rM), (0, SM.Ac)(rM), (0, SM.Ac)(rM), (0, SM.Ac)(rM), (0, SM.Ac)(rM), rM.readBits(1) && rM.readBits(1) && RM(rM), rM.skipBits(1), rM.skipBits(1), rM.readBits(1) && (rM.skipBits(4), rM.skipBits(4), (0, SM.Ac)(rM), (0, SM.Ac)(rM), rM.skipBits … [truncated]
-               const eM = (0, SM.Ac)(rM);
+               for (let VV = FV ? 0 : xV; VV <= xV; VV++)(0, YV.Hc)(eV), TV = (0, YV.Hc)(eV), (0, YV.Hc)(eV);
+               (0, YV.Hc)(eV), (0, YV.Hc)(eV), (0, YV.Hc)(eV), (0, YV.Hc)(eV), (0, YV.Hc)(eV), (0, YV.Hc)(eV), eV.readBits(1) && eV.readBits(1) && GV(eV), eV.skipBits(1), eV.skipBits(1), eV.readBits(1) && (eV.skipBits(4), eV.skipBits(4), (0, YV.Hc)(eV), (0, YV.Hc)(eV), eV.skipBits … [truncated]
+               const PV = (0, YV.Hc)(eV);
```

#### 62. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L824-L825` → after: `L824-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L824-L825) · [Before (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L824-L825)

```diff
-                 const MM = (0, SM.Ac)(rM);
-                 for (let iM = 0; iM < MM; iM++)(0, SM.Ac)(rM), rM.skipBits(1)
+                 const VV = (0, YV.Hc)(eV);
+                 for (let xV = 0; xV < VV; xV++)(0, YV.Hc)(eV), eV.skipBits(1)
```

#### 63. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L864` → after: `L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L864) · [Before (L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L864)

```diff
-               return jM.d._error("Error parsing HEVC SPS:", rM), null
+               return UV.c._error("Error parsing HEVC SPS:", eV), null
```

#### 64. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L871-L872` → after: `L871-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L871-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L871-L872) · [Before (L871-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L871-L872)

```diff
-               rM = new zM.d(JM(MM));
-             rM.skipBits(16), (0, SM.Ac)(rM), (0, SM.Ac)(rM), rM.skipBits(1), rM.skipBits(1), rM.skipBits(3), rM.skipBits(1), rM.skipBits(1), (0, SM.Ac)(rM), (0, SM.Ac)(rM), (0, SM.Bc)(rM), rM.skipBits(1), rM.skipBits(1), rM.readBits(1) && (0, SM.Ac)(rM), (0, SM.Bc)(rM), (0, SM.Bc … [truncated]
+               eV = new wV.b(bV(VV));
+             eV.skipBits(16), (0, YV.Hc)(eV), (0, YV.Hc)(eV), eV.skipBits(1), eV.skipBits(1), eV.skipBits(3), eV.skipBits(1), eV.skipBits(1), (0, YV.Hc)(eV), (0, YV.Hc)(eV), (0, YV.Lc)(eV), eV.skipBits(1), eV.skipBits(1), eV.readBits(1) && (0, YV.Hc)(eV), (0, YV.Lc)(eV), (0, YV.Lc … [truncated]
```

#### 65. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L915` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L915) · [Before (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L915)

```diff
-           return jM.d._error("Error building HEVC Decoder Configuration Record:", rM), null
+           return UV.c._error("Error building HEVC Decoder Configuration Record:", eV), null
```

#### 66. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L947-L949` → after: `L947-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L947-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L947-L949) · [Before (L947-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L947-L949)

```diff
-               rM > 1 && (0, SM.Bc)(MM);
-               for (let rM = 0; rM < iM; rM++)(0, SM.Bc)(MM)
-             } else(0, SM.Ac)(MM)
+               eV > 1 && (0, YV.Lc)(VV);
+               for (let eV = 0; eV < xV; eV++)(0, YV.Lc)(VV)
+             } else(0, YV.Hc)(VV)
```

#### 67. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L962` → after: `L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L962) · [Before (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L962)

```diff
-             PM = rM - ((0, SM.Ac)(MM) + 1)
+             pV = eV - ((0, YV.Hc)(VV) + 1)
```

#### 68. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L964` → after: `L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L964) · [Before (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L964)

```diff
-           MM.readBits(1), (0, SM.Ac)(MM);
+           VV.readBits(1), (0, YV.Hc)(VV);
```

#### 69. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L971-L974` → after: `L971-L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L971-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L971-L974) · [Before (L971-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L971-L974)

```diff
-           const rM = (0, SM.Ac)(MM),
-             iM = (0, SM.Ac)(MM);
-           for (let OM = 0; OM < rM; OM++)(0, SM.Ac)(MM), MM.readBits(1);
-           for (let OM = 0; OM < iM; OM++)(0, SM.Ac)(MM), MM.readBits(1);
+           const eV = (0, YV.Hc)(VV),
+             xV = (0, YV.Hc)(VV);
+           for (let JV = 0; JV < eV; JV++)(0, YV.Hc)(VV), VV.readBits(1);
+           for (let JV = 0; JV < xV; JV++)(0, YV.Hc)(VV), VV.readBits(1);
```

#### 70. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1000` → after: `L1000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1000) · [Before (L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1000)

```diff
-         return MM.readBits(1) && MM.readBits(1), MM.readBits(1) && (MM.readBits(3), aM = MM.readBits(1), MM.readBits(1) && (iM = MM.readBits(8), OM = MM.readBits(8), jM = MM.readBits(8))), MM.readBits(1) && ((0, SM.Ac)(MM), (0, SM.Ac)(MM)), MM.readBits(1), MM.readBits(1), MM.read … [truncated]
+         return VV.readBits(1) && VV.readBits(1), VV.readBits(1) && (VV.readBits(3), yV = VV.readBits(1), VV.readBits(1) && (xV = VV.readBits(8), JV = VV.readBits(8), UV = VV.readBits(8))), VV.readBits(1) && ((0, YV.Hc)(VV), (0, YV.Hc)(VV)), VV.readBits(1), VV.readBits(1), VV.read … [truncated]
```

#### 71. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1018` → after: `L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1018) · [Before (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1018)

```diff
-           rM ? (0, SM.Ac)(MM) : iM = 1 === MM.readBits(1);
+           eV ? (0, YV.Hc)(VV) : xV = 1 === VV.readBits(1);
```

#### 72. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1021` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1021) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1021)

```diff
-             PM = (0, SM.Ac)(MM) + 1
+             pV = (0, YV.Hc)(VV) + 1
```

#### 73. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1027` → after: `L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1027) · [Before (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1027)

```diff
-         for (let OM = 0; OM < rM; OM++)(0, SM.Ac)(MM), (0, SM.Ac)(MM), iM && ((0, SM.Ac)(MM), (0, SM.Ac)(MM)), MM.readBits(1)
+         for (let JV = 0; JV < eV; JV++)(0, YV.Hc)(VV), (0, YV.Hc)(VV), xV && ((0, YV.Hc)(VV), (0, YV.Hc)(VV)), VV.readBits(1)
```

#### 74. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1043` → after: `L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1043) · [Before (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1043)

```diff
-           const rM = (0, SM.nd)(MM);
+           const eV = (0, YV.rd)(VV);
```

#### 75. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1107` → after: `L1107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1107) · [Before (L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1107)

```diff
-           return jM.d._error("Error deserializing HEVC Decoder Configuration Record:", rM), null
+           return UV.c._error("Error deserializing HEVC Decoder Configuration Record:", eV), null
```

#### 76. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1147` → after: `L1147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1147) · [Before (L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1147)

```diff
-         const rM = new zM.d(MM);
+         const eV = new wV.b(VV);
```

#### 77. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1171-L1172` → after: `L1171-L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1171-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1171-L1172) · [Before (L1171-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1171-L1172)

```diff
-         let mM = (0, SM.cc)(OM.u).level;
-         for (const SM of OM.u)
+         let vV = (0, YV.jc)(JV.l).level;
+         for (const YV of JV.l)
```

#### 78. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1189` → after: `L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1189) · [Before (L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1189)

```diff
-         const rM = new zM.d(MM),
+         const eV = new wV.b(VV),
```

#### 79. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1210` → after: `L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1210) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1210)

```diff
-           (0, SM.J)(rM.pos % 8 === 0), yield {
+           (0, YV.L)(eV.pos % 8 === 0), yield {
```

#### 80. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1223` → after: `L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1223) · [Before (L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1223)

```diff
-           const MM = new zM.d(iM),
+           const VV = new wV.b(xV),
```

#### 81. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1313` → after: `L1313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1313) · [Before (L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1313)

```diff
-         const rM = (0, SM.nd)(MM),
+         const eV = (0, YV.rd)(VV),
```

#### 82. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1345` → after: `L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1345) · [Before (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1345)

```diff
-         const OM = new zM.d(iM);
+         const JV = new wV.b(xV);
```

#### 83. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1368` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1368) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1368)

```diff
-         if (PM > 63) throw new Error(`Unsupported mode count: ${PM}.`);
+         if (pV > 63) throw new Error(`Unsupported mode count: ${pV}.`);
```

#### 84. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1382` → after: `L1382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1382) · [Before (L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1382)

```diff
-                   const iM = 3 & (0, SM.od)(rM.description)[4];
+                   const xV = 3 & (0, YV.sd)(eV.description)[4];
```

#### 85. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1391` → after: `L1391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1391) · [Before (L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1391)

```diff
-               if (OM === nM.SEI && !(0, SM.yb)()) {
+               if (JV === QV.SEI && !(0, YV.Gb)()) {
```

#### 86. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1409` → after: `L1409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1409) · [Before (L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1409)

```diff
-                     const MM = new zM.d(OM);
+                     const VV = new wV.b(JV);
```

#### 87. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1411` → after: `L1411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1411) · [Before (L1411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1411)

```diff
-                     const rM = (0, SM.Ac)(MM),
+                     const eV = (0, YV.Hc)(VV),
```

#### 88. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1430` → after: `L1430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1430) · [Before (L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1430)

```diff
-             const MM = new zM.d(iM);
+             const VV = new wV.b(xV);
```

#### 89. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1445` → after: `L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1445) · [Before (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1445)

```diff
-                 const rM = new zM.d(OM);
+                 const eV = new wV.b(JV);
```

#### 90. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1449` → after: `L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1449) · [Before (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1449)

```diff
-               const rM = new zM.d(OM);
+               const eV = new wV.b(JV);
```

#### 91. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1458` → after: `L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1458) · [Before (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1458)

```diff
-             (0, SM.G)(MM), (0, SM.J)(!1)
+             (0, YV.J)(VV), (0, YV.L)(!1)
```

#### 92. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1467` → after: `L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1467) · [Before (L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1467)

```diff
-           jM = SM.id.encode(LM.d);
+           UV = YV.ld.encode(ZV.c);
```

#### 93. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1473-L1474` → after: `L1473-L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1473-L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1473-L1474) · [Before (L1473-L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1473-L1474)

```diff
-             const iM = `${MM}=${rM}`,
-               jM = SM.id.encode(iM);
+             const xV = `${VV}=${eV}`,
+               UV = YV.ld.encode(xV);
```

#### 94. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1481` → after: `L1481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1481) · [Before (L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1481)

```diff
-           of(0, SM._b)(rM)) switch (LM) {
+           of(0, YV.ic)(eV)) switch (ZV) {
```

#### 95. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1530` → after: `L1530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1530) · [Before (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1530)

```diff
-               const OM = SM.id.encode(MM.description ?? ""),
+               const JV = YV.ld.encode(VV.description ?? ""),
```

#### 96. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1532` → after: `L1532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1532) · [Before (L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1532)

```diff
-                 aM = (0, SM.nd)(jM);
+                 yV = (0, YV.rd)(UV);
```

#### 97. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1534` → after: `L1534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1534) · [Before (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1534)

```diff
-               QM("METADATA_BLOCK_PICTURE", (0, SM.P)(jM))
+               nV("METADATA_BLOCK_PICTURE", (0, YV.T)(UV))
```

#### 98. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1540` → after: `L1540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1540) · [Before (L1540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1540)

```diff
-             (0, SM.G)(LM)
+             (0, YV.J)(ZV)
```

#### 99. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1553` → after: `L1553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1553) · [Before (L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1553)

```diff
-         (0, SM.nd)(zM).setUint32(0, nM.length, !0), OM.splice(2, 0, zM);
+         (0, YV.rd)(wV).setUint32(0, QV.length, !0), JV.splice(2, 0, wV);
```

#### 100. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1563` → after: `L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1563) · [Before (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1563)

```diff
-         const rM = new zM.d(MM);
+         const eV = new wV.b(VV);
```

#### 101. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1588` → after: `L1588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1588) · [Before (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1588)

```diff
-         const rM = new zM.d(MM);
+         const eV = new wV.b(VV);
```

#### 102. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1627` → after: `L1627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1627) · [Before (L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1627)

```diff
-           iM = (0, SM.nd)(MM);
+           xV = (0, YV.rd)(VV);
```

#### 103. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1636` → after: `L1636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1636) · [Before (L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1636)

```diff
-           frameSize: jM ? OM : rM.frameSize,
+           frameSize: UV ? JV : eV.frameSize,
```

#### 104. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1665` → after: `L1665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1665) · [Before (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1665)

```diff
-         const rM = new zM.d(MM);
+         const eV = new wV.b(VV);
```

#### 105. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1700` → after: `L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1700) · [Before (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1700)

```diff
-         const rM = new zM.d(MM);
+         const eV = new wV.b(VV);
```

#### 106. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1720` → after: `L1720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1720) · [Before (L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1720)

```diff
-         for (const zM of hM) rM.skipBits(8 * (0, SM.wc)(zM));
+         for (const wV of kV) eV.skipBits(8 * (0, YV.Fc)(wV));
```

#### 107. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1737` → after: `L1737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1737) · [Before (L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1737)

```diff
-         return 0 === QM || rM.getBitsLeft() < 0 ? nM : {
+         return 0 === nV || eV.getBitsLeft() < 0 ? QV : {
```

#### 108. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1750` → after: `L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1750) · [Before (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1750)

```diff
-           iM = (0, SM.nd)(rM);
+           xV = (0, YV.rd)(eV);
```

#### 109. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1753` → after: `L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1753) · [Before (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1753)

```diff
-           jM = new zM.d(rM);
+           UV = new wV.b(eV);
```

#### 110. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1757` → after: `L1757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1757) · [Before (L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1757)

```diff
-   34713: (MM, rM, iM) => {
+   34965: (VV, eV, xV) => {
```

#### 111. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1759` → after: `L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1759) · [Before (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1759)

```diff
-       A: () => CM,
+       B: () => tV,
```

#### 112. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1761-L1762` → after: `L1761-L1763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1761-L1763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1761-L1763) · [Before (L1761-L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1761-L1762)

```diff
-       G: () => UM,
-       I: () => RM,
+       F: () => zV,
+       H: () => MV,
+       J: () => XV,
```

#### 113. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1764` → after: `L1765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1765) · [Before (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1764)

```diff
-       M: () => gM,
+       O: () => cV,
```

#### 114. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1773-L1776` → after: `L1772-L1776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1772-L1776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1772-L1776) · [Before (L1773-L1776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1773-L1776)

```diff
-       m: () => aM,
-       p: () => QM,
-       q: () => jM,
-       u: () => mM,
+       j: () => nV,
+       k: () => UV,
+       l: () => vV,
+       o: () => PV,
+       s: () => qV,
```

#### 115. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1778` → after: `L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1778) · [Before (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1778)

```diff
-       y: () => EM
+       z: () => FV
```

#### 116. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L1780-L1781` → after: `L1780-L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L1780-L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L1780-L1781) · [Before (L1780-L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L1780-L1781)

```diff
-     var OM = iM(34720),
-       SM = iM(34685);
+     var JV = xV(34968),
+       YV = xV(34933);
```

#### 117. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2200` → after: `L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2200) · [Before (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2200)

```diff
-             aM = zM.find((MM => jM <= MM.maxMacroblocks && OM <= MM.maxBitrate)) ?? (0, SM.cc)(zM),
+             yV = wV.find((VV => UV <= VV.maxMacroblocks && JV <= VV.maxBitrate)) ?? (0, YV.jc)(wV),
```

#### 118. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2202` → after: `L2202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2202) · [Before (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2202)

```diff
-           return `avc1.${MM.toString(16).padStart(2,"0")}${"00"}${PM.toString(16).padStart(2,"0")}`
+           return `avc1.${VV.toString(16).padStart(2,"0")}${"00"}${pV.toString(16).padStart(2,"0")}`
```

#### 119. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2209` → after: `L2209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2209) · [Before (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2209)

```diff
-             nM = LM.find((MM => PM <= MM.maxPictureSize && OM <= MM.maxBitrate)) ?? (0, SM.cc)(LM),
+             QV = ZV.find((VV => pV <= VV.maxPictureSize && JV <= VV.maxBitrate)) ?? (0, YV.jc)(ZV),
```

#### 120. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2211` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2211) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2211)

```diff
-           return `hev1.${MM}${jM}.${aM}.${nM.tier}${nM.level}.${QM}`
+           return `hev1.${VV}${UV}.${yV}.${QV.tier}${QV.level}.${nV}`
```

#### 121. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2217` → after: `L2217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2217) · [Before (L2217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2217)

```diff
-           return `vp09.${"00"}.${(mM.find((rM=>MM<=rM.maxPictureSize&&OM<=rM.maxBitrate))??(0,SM.cc)(mM)).level.toString().padStart(2,"0")}.${jM}`
+           return `vp09.${"00"}.${(vV.find((eV=>VV<=eV.maxPictureSize&&JV<=eV.maxBitrate))??(0,YV.jc)(vV)).level.toString().padStart(2,"0")}.${UV}`
```

#### 122. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2222` → after: `L2222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2222) · [Before (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2222)

```diff
-             aM = HM.find((MM => jM <= MM.maxPictureSize && OM <= MM.maxBitrate)) ?? (0, SM.cc)(HM),
+             yV = rV.find((VV => UV <= VV.maxPictureSize && JV <= VV.maxBitrate)) ?? (0, YV.jc)(rV),
```

#### 123. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2224` → after: `L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2224) · [Before (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2224)

```diff
-           return `av01.${MM}.${aM.level.toString().padStart(2,"0")}${aM.tier}.${PM}`
+           return `av01.${VV}.${yV.level.toString().padStart(2,"0")}${yV.tier}.${pV}`
```

#### 124. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2242` → after: `L2242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2242) · [Before (L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2242)

```diff
-         throw (0, SM.G)(MM), new TypeError(`Unhandled codec '${String(MM)}'.`)
+         throw (0, YV.J)(VV), new TypeError(`Unhandled codec '${String(VV)}'.`)
```

#### 125. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2269` → after: `L2269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2269) · [Before (L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2269)

```diff
-           if ((0, SM.J)(null !== MM.avcType), aM) {
+           if ((0, YV.L)(null !== VV.avcType), yV) {
```

#### 126. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2271` → after: `L2271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2271) · [Before (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2271)

```diff
-             return `avc${MM.avcType}.${(0,SM.S)(rM)}`
+             return `avc${VV.avcType}.${(0,YV.W)(eV)}`
```

#### 127. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2274` → after: `L2274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2274) · [Before (L2274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2274)

```diff
-           return `avc${MM.avcType}.${(0,SM.S)(iM.subarray(1,4))}`
+           return `avc${VV.avcType}.${(0,YV.W)(xV.subarray(1,4))}`
```

#### 128. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2278` → after: `L2278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2278) · [Before (L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2278)

```diff
-           if (PM) MM = PM.generalProfileSpace, rM = PM.generalProfileIdc, OM = (0, SM.Ec)(PM.generalProfileCompatibilityFlags), jM = PM.generalTierFlag, aM = PM.generalLevelIdc, nM = [...PM.generalConstraintIndicatorFlags];
+           if (pV) VV = pV.generalProfileSpace, eV = pV.generalProfileIdc, JV = (0, YV.Nc)(pV.generalProfileCompatibilityFlags), UV = pV.generalTierFlag, yV = pV.generalLevelIdc, QV = [...pV.generalConstraintIndicatorFlags];
```

#### 129. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2281` → after: `L2281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2281) · [Before (L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2281)

```diff
-             const PM = (0, SM.nd)(iM),
+             const pV = (0, YV.rd)(xV),
```

#### 130. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2283` → after: `L2283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2283) · [Before (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2283)

```diff
-             MM = QM >> 6 & 3, rM = 31 & QM, OM = (0, SM.Ec)(PM.getUint32(2)), jM = QM >> 5 & 1, aM = PM.getUint8(12), nM = [];
+             VV = nV >> 6 & 3, eV = 31 & nV, JV = (0, YV.Nc)(pV.getUint32(2)), UV = nV >> 5 & 1, yV = pV.getUint8(12), QV = [];
```

#### 131. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2294` → after: `L2294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2294) · [Before (L2294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2294)

```diff
-             let iM = (0, SM.cc)(mM).level;
+             let xV = (0, YV.jc)(vV).level;
```

#### 132. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2299` → after: `L2299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2299) · [Before (L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2299)

```diff
-               } return `vp09.00.${iM.toString().padStart(2,"0")}.08`
+               } return `vp09.00.${xV.toString().padStart(2,"0")}.08`
```

#### 133. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2301-L2302` → after: `L2301-L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2301-L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2301-L2302) · [Before (L2301-L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2301-L2302)

```diff
-           let rM = `vp09.${nM.profile.toString().padStart(2,"0")}.${nM.level.toString().padStart(2,"0")}.${nM.bitDepth.toString().padStart(2,"0")}.${nM.chromaSubsampling.toString().padStart(2,"0")}`;
-           return rM += `.${nM.colourPrimaries.toString().padStart(2,"0")}.${nM.transferCharacteristics.toString().padStart(2,"0")}.${nM.matrixCoefficients.toString().padStart(2,"0")}.${nM.videoFullRangeFlag.toString().padStart(2,"0")}`, rM.endsWith(hM) && (rM = rM.slice(0, -15)), … [truncated]
+           let eV = `vp09.${QV.profile.toString().padStart(2,"0")}.${QV.level.toString().padStart(2,"0")}.${QV.bitDepth.toString().padStart(2,"0")}.${QV.chromaSubsampling.toString().padStart(2,"0")}`;
+           return eV += `.${QV.colourPrimaries.toString().padStart(2,"0")}.${QV.transferCharacteristics.toString().padStart(2,"0")}.${QV.matrixCoefficients.toString().padStart(2,"0")}.${QV.videoFullRangeFlag.toString().padStart(2,"0")}`, eV.endsWith(kV) && (eV = eV.slice(0, -15)), … [truncated]
```

#### 134. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2307` → after: `L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2307) · [Before (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2307)

```diff
-             let iM = (0, SM.cc)(mM).level;
+             let xV = (0, YV.jc)(vV).level;
```

#### 135. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2312` → after: `L2312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2312) · [Before (L2312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2312)

```diff
-               } return `av01.0.${iM.toString().padStart(2,"0")}M.08`
+               } return `av01.0.${xV.toString().padStart(2,"0")}M.08`
```

#### 136. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2321-L2323` → after: `L2321-L2323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2321-L2323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2321-L2323) · [Before (L2321-L2323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2321-L2323)

```diff
-           (0, OM.n)(QM) ? (LM = QM.colourPrimaries, HM = QM.transferCharacteristics, hM = QM.matrixCoefficients, dM = QM.videoFullRangeFlag) : (LM = jM?.primaries ? SM.c[jM.primaries] : 1, HM = jM?.transfer ? SM.t[jM.transfer] : 1, hM = jM?.matrix ? SM.k[jM.matrix] : 1, dM = jM?. … [truncated]
-           let yM = `av01.${rM}.${iM}${aM}.${PM}`;
-           return yM += `.${nM}.${zM.toString().padStart(3,"0")}`, yM += `.${LM.toString().padStart(2,"0")}`, yM += `.${HM.toString().padStart(2,"0")}`, yM += `.${hM.toString().padStart(2,"0")}`, yM += `.${dM}`, yM.endsWith(JM) && (yM = yM.slice(0, -17)), yM
+           (0, JV.r)(nV) ? (ZV = nV.colourPrimaries, rV = nV.transferCharacteristics, kV = nV.matrixCoefficients, EV = nV.videoFullRangeFlag) : (ZV = UV?.primaries ? YV.c[UV.primaries] : 1, rV = UV?.transfer ? YV.r[UV.transfer] : 1, kV = UV?.matrix ? YV.k[UV.matrix] : 1, EV = UV?. … [truncated]
+           let BV = `av01.${eV}.${xV}${yV}.${pV}`;
+           return BV += `.${QV}.${wV.toString().padStart(3,"0")}`, BV += `.${ZV.toString().padStart(2,"0")}`, BV += `.${rV.toString().padStart(2,"0")}`, BV += `.${kV.toString().padStart(2,"0")}`, BV += `.${EV}`, BV.endsWith(bV) && (BV = BV.slice(0, -17)), BV
```

#### 137. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2326` → after: `L2326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2326) · [Before (L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2326)

```diff
-         throw null !== rM && (0, SM.G)(rM), new TypeError(`Unhandled codec '${rM}'.`)
+         throw null !== eV && (0, YV.J)(eV), new TypeError(`Unhandled codec '${eV}'.`)
```

#### 138. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2338` → after: `L2338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2338) · [Before (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2338)

```diff
-         throw new TypeError(`Unhandled codec '${MM}'.`)
+         throw new TypeError(`Unhandled codec '${VV}'.`)
```

#### 139. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2343` → after: `L2343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2343) · [Before (L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2343)

```diff
-         if ((0, SM.J)(aM.includes(MM)), "ulaw" === MM) return {
+         if ((0, YV.L)(yV.includes(VV)), "ulaw" === VV) return {
```

#### 140. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2357` → after: `L2357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2357) · [Before (L2357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2357)

```diff
-         (0, SM.J)(rM), iM = "u" === rM[1] ? "unsigned" : "s" === rM[1] ? "signed" : "float";
+         (0, YV.L)(eV), xV = "u" === eV[1] ? "unsigned" : "s" === eV[1] ? "signed" : "float";
```

#### 141. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2365` → after: `L2365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2365) · [Before (L2365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2365)

```diff
-       gM = MM => MM.startsWith("avc1") || MM.startsWith("avc3") ? "avc" : MM.startsWith("hev1") || MM.startsWith("hvc1") ? "hevc" : "vp8" === MM ? "vp8" : MM.startsWith("vp09") ? "vp9" : MM.startsWith("av01") ? "av1" : dM.includes(MM) ? "prores" : "mp3" === MM || "mp4a.69" === MM … [truncated]
+       MV = VV => VV.startsWith("avc1") || VV.startsWith("avc3") ? "avc" : VV.startsWith("hev1") || VV.startsWith("hvc1") ? "hevc" : "vp8" === VV ? "vp8" : VV.startsWith("vp09") ? "vp9" : VV.startsWith("av01") ? "av1" : EV.includes(VV) ? "prores" : "mp3" === VV || "mp4a.69" === VV … [truncated]
```

#### 142. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2401` → after: `L2401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2401) · [Before (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2401)

```diff
-         if (void 0 !== MM.decoderConfig.description && !(0, SM.vb)(MM.decoderConfig.description)) throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
+         if (void 0 !== VV.decoderConfig.description && !(0, YV.Eb)(VV.decoderConfig.description)) throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
```

#### 143. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2408-L2410` → after: `L2408-L2410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2408-L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2408-L2410) · [Before (L2408-L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2408-L2410)

```diff
-           if (null != rM.primaries && !iM.includes(rM.primaries)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${iM.join(", ")}.`);
-           const OM = Object.keys(SM.t);
-           if (null != rM.transfer && !OM.includes(rM.transfer)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${OM.join(", ")}.`);
+           if (null != eV.primaries && !xV.includes(eV.primaries)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${xV.join(", ")}.`);
+           const JV = Object.keys(YV.r);
+           if (null != eV.transfer && !JV.includes(eV.transfer)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${JV.join(", ")}.`);
```

#### 144. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2412` → after: `L2412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2412) · [Before (L2412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2412)

```diff
-           if (null != rM.matrix && !jM.includes(rM.matrix)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${jM.join(", ")}.`);
+           if (null != eV.matrix && !UV.includes(eV.matrix)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${UV.join(", ")}.`);
```

#### 145. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2425-L2426` → after: `L2425-L2426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2425-L2426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2425-L2426) · [Before (L2425-L2426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2425-L2426)

```diff
-         } else if (dM.some((rM => MM.decoderConfig.codec.startsWith(rM))) && !dM.some((rM => MM.decoderConfig.codec === rM))) throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${dM.join(", … [truncated]
-         if (null !== rM && gM(MM.decoderConfig.codec) !== rM) throw new TypeError(`Video chunk metadata decoder configuration codec string '${MM.decoderConfig.codec}' does not fit to the track codec '${rM}'.`)
+         } else if (EV.some((eV => VV.decoderConfig.codec.startsWith(eV))) && !EV.some((eV => VV.decoderConfig.codec === eV))) throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${EV.join(", … [truncated]
+         if (null !== eV && MV(VV.decoderConfig.codec) !== eV) throw new TypeError(`Video chunk metadata decoder configuration codec string '${VV.decoderConfig.codec}' does not fit to the track codec '${eV}'.`)
```

#### 146. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2438` → after: `L2438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2438) · [Before (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2438)

```diff
-         if (void 0 !== MM.decoderConfig.description && !(0, SM.vb)(MM.decoderConfig.description)) throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
+         if (void 0 !== VV.decoderConfig.description && !(0, YV.Eb)(VV.decoderConfig.description)) throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
```

#### 147. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2458-L2460` → after: `L2458-L2460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2458-L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2458-L2460) · [Before (L2458-L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2458-L2460)

```diff
-           if (!yM.includes(MM.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${yM.join(", ")}.`)
-         } else if ((MM.decoderConfig.codec.startsWith("pcm") || MM.decoderConfig.codec.startsWith("ulaw") || MM.decoderConfig.codec.startsWith("alaw")) && !aM.includes(MM.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM mu … [truncated]
-         if (null !== rM && gM(MM.decoderConfig.codec) !== rM) throw new TypeError(`Audio chunk metadata decoder configuration codec string '${MM.decoderConfig.codec}' does not fit to the track codec '${rM}'.`)
+           if (!BV.includes(VV.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${BV.join(", ")}.`)
+         } else if ((VV.decoderConfig.codec.startsWith("pcm") || VV.decoderConfig.codec.startsWith("ulaw") || VV.decoderConfig.codec.startsWith("alaw")) && !yV.includes(VV.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM mu … [truncated]
+         if (null !== eV && MV(VV.decoderConfig.codec) !== eV) throw new TypeError(`Audio chunk metadata decoder configuration codec string '${VV.decoderConfig.codec}' does not fit to the track codec '${eV}'.`)
```

#### 148. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2470` → after: `L2470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2470) · [Before (L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2470)

```diff
-   34765: (MM, rM, iM) => {
+   35024: (VV, eV, xV) => {
```

#### 149. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2476-L2478` → after: `L2477-L2478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2477-L2478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2477-L2478) · [Before (L2476-L2478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2476-L2478)

```diff
-       r: () => lM,
-       v: () => QM,
-       x: () => aM
+       o: () => nV,
+       r: () => yV
```

#### 150. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2480-L2482` → after: `L2480-L2482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2480-L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2480-L2482) · [Before (L2480-L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2480-L2482)

```diff
-     var OM = iM(34713),
-       SM = iM(34685),
-       jM = iM(34771);
+     var JV = xV(34965),
+       YV = xV(34933),
+       UV = xV(35032);
```

#### 151. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2486` → after: `L2486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2486) · [Before (L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2486)

```diff
-         if (!OM.q.includes(MM.codec)) throw new TypeError(`Invalid video codec '${MM.codec}'. Must be one of: ${OM.q.join(", ")}.`);
+         if (!JV.k.includes(VV.codec)) throw new TypeError(`Invalid video codec '${VV.codec}'. Must be one of: ${JV.k.join(", ")}.`);
```

#### 152. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2503` → after: `L2503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2503) · [Before (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2503)

```diff
-           if (void 0 !== MM.transform.crop && (0, jM.k)(MM.transform.crop, "config.transform."), void 0 !== MM.transform.process && "function" !== typeof MM.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.");
+           if (void 0 !== VV.transform.crop && (0, UV.n)(VV.transform.crop, "config.transform."), void 0 !== VV.transform.process && "function" !== typeof VV.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.");
```

#### 153. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2519` → after: `L2519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2519) · [Before (L2519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2519)

```diff
-         if (void 0 !== rM.fullCodecString && (0, OM.M)(rM.fullCodecString) !== MM) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${MM}).`);
+         if (void 0 !== eV.fullCodecString && (0, JV.H)(eV.fullCodecString) !== VV) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${VV}).`);
```

#### 154. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2528` → after: `L2528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2528) · [Before (L2528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2528)

```diff
-             codec: MM.fullCodecString ?? (0, OM.y)(MM.codec, MM.width, MM.height, SM, "keep" === MM.alpha),
+             codec: VV.fullCodecString ?? (0, JV.s)(VV.codec, VV.width, VV.height, YV, "keep" === VV.alpha),
```

#### 155. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2541` → after: `L2541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2541) · [Before (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2541)

```diff
-             ...(0, OM.L)(MM.codec)
+             ...(0, JV.F)(VV.codec)
```

#### 156. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2550` → after: `L2550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2550) · [Before (L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2550)

```diff
-         }), (0, SM.J)(aM.length > 0), aM
+         }), (0, YV.L)(yV.length > 0), yV
```

#### 157. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2554` → after: `L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2554) · [Before (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2554)

```diff
-         if (!OM.b.includes(MM.codec)) throw new TypeError(`Invalid audio codec '${MM.codec}'. Must be one of: ${OM.b.join(", ")}.`);
+         if (!JV.b.includes(VV.codec)) throw new TypeError(`Invalid audio codec '${VV.codec}'. Must be one of: ${JV.b.join(", ")}.`);
```

#### 158. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2556` → after: `L2556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2556) · [Before (L2556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2556)

```diff
-         if (void 0 === MM.quality && void 0 === rM && !OM.m.includes(MM.codec) && "flac" !== MM.codec) throw new TypeError("config.quality must be provided for compressed audio codecs.");
+         if (void 0 === VV.quality && void 0 === eV && !JV.i.includes(VV.codec) && "flac" !== VV.codec) throw new TypeError("config.quality must be provided for compressed audio codecs.");
```

#### 159. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2577` → after: `L2577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2577) · [Before (L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2577)

```diff
-         if (void 0 !== rM.fullCodecString && (0, OM.M)(rM.fullCodecString) !== MM) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${MM}).`)
+         if (void 0 !== eV.fullCodecString && (0, JV.H)(eV.fullCodecString) !== VV) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${VV}).`)
```

#### 160. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2582` → after: `L2582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2582) · [Before (L2582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2582)

```diff
-           codec: MM.fullCodecString ?? (0, OM.w)(MM.codec, MM.numberOfChannels, MM.sampleRate),
+           codec: VV.fullCodecString ?? (0, JV.o)(VV.codec, VV.numberOfChannels, VV.sampleRate),
```

#### 161. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2587` → after: `L2587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2587) · [Before (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2587)

```diff
-           ...(0, OM.I)(MM.codec)
+           ...(0, JV.D)(VV.codec)
```

#### 162. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2617` → after: `L2617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2617) · [Before (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2617)

```diff
-               if (void 0 === this._bitrate) throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${MM}'; must be between ${jM.min} and ${jM.max}.`)
+               if (void 0 === this._bitrate) throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${VV}'; must be between ${UV.min} and ${UV.max}.`)
```

#### 163. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2619-L2620` → after: `L2619-L2620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2619-L2620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2619-L2620) · [Before (L2619-L2620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2619-L2620)

```diff
-           else if (void 0 === this._bitrate) throw new Error(`Codec '${MM}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)
-         } else void 0 === this._bitrate && jM && !this._preferBitrate && ((0, SM.J)(void 0 !== this._quality), PM = (0, SM.X)(Math.round((0, SM.fc)(jM.worst, jM.best, this._quality)), jM.min, jM.max));
+           else if (void 0 === this._bitrate) throw new Error(`Codec '${VV}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)
+         } else void 0 === this._bitrate && UV && !this._preferBitrate && ((0, YV.L)(void 0 !== this._quality), pV = (0, YV.bb)(Math.round((0, YV.mc)(UV.worst, UV.best, this._quality)), UV.min, UV.max));
```

#### 164. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2624` → after: `L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2624) · [Before (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2624)

```diff
-           void 0 === OM && ((0, SM.J)(null !== PM && jM), OM = (0, SM.X)((PM - jM.worst) / (jM.best - jM.worst), 0, 1)), aM = dM(MM, rM, iM, JM(OM))
+           void 0 === JV && ((0, YV.L)(null !== pV && UV), JV = (0, YV.bb)((pV - UV.worst) / (UV.best - UV.worst), 0, 1)), yV = EV(VV, eV, xV, bV(JV))
```

#### 165. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2633` → after: `L2633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2633) · [Before (L2633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2633)

```diff
-         return void 0 !== this._bitrate ? this._bitrate : ((0, SM.J)(void 0 !== this._quality), dM(MM, rM, iM, JM(this._quality)))
+         return void 0 !== this._bitrate ? this._bitrate : ((0, YV.L)(void 0 !== this._quality), EV(VV, eV, xV, bV(this._quality)))
```

#### 166. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2636` → after: `L2636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2636) · [Before (L2636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2636)

```diff
-         if (OM.m.includes(MM) || "flac" === MM) return;
+         if (JV.i.includes(VV) || "flac" === VV) return;
```

#### 167. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2649` → after: `L2649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2649) · [Before (L2649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2649)

```diff
-         if (!iM) throw new Error(`Unhandled codec: ${MM}`);
+         if (!xV) throw new Error(`Unhandled codec: ${VV}`);
```

#### 168. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2652` → after: `L2652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2652) · [Before (L2652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2652)

```diff
-           SM = [96e3, 128e3, 16e4, 192e3].reduce(((MM, rM) => Math.abs(rM - SM) < Math.abs(MM - SM) ? rM : MM))
+           YV = [96e3, 128e3, 16e4, 192e3].reduce(((VV, eV) => Math.abs(eV - YV) < Math.abs(VV - YV) ? eV : VV))
```

#### 169. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2655` → after: `L2655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2655) · [Before (L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2655)

```diff
-           SM = [8e3, 16e3, 24e3, 32e3, 4e4, 48e3, 64e3, 8e4, 96e3, 112e3, 128e3, 16e4, 192e3, 224e3, 256e3, 32e4].reduce(((MM, rM) => Math.abs(rM - SM) < Math.abs(MM - SM) ? rM : MM))
+           YV = [8e3, 16e3, 24e3, 32e3, 4e4, 48e3, 64e3, 8e4, 96e3, 112e3, 128e3, 16e4, 192e3, 224e3, 256e3, 32e4].reduce(((VV, eV) => Math.abs(eV - YV) < Math.abs(VV - YV) ? eV : VV))
```

#### 170. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2723-L2724` → after: `L2723-L2724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2723-L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2723-L2724) · [Before (L2723-L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2723-L2724)

```diff
-       } : void(0, SM.J)(!1),
-       lM = (MM, rM) => void 0 !== MM ? MM : void 0 !== rM ? rM instanceof mM ? rM : new mM({
+       } : void(0, YV.L)(!1),
+       jV = (VV, eV) => void 0 !== VV ? VV : void 0 !== eV ? eV instanceof vV ? eV : new vV({
```

#### 171. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2728` → after: `L2728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2728) · [Before (L2728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2728)

```diff
-   34727: (MM, rM, iM) => {
+   34973: (VV, eV, xV) => {
```

#### 172. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2730` → after: `L2730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2730) · [Before (L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2730)

```diff
-       d: () => jM
+       c: () => UV
```

#### 173. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2732` → after: `L2732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2732) · [Before (L2732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2732)

```diff
-     var OM, SM = iM(34685);
+     var JV, YV = xV(34933);
```

#### 174. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2746` → after: `L2746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2746) · [Before (L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2746)

```diff
-         return jM._emitterInstance ??= new SM.h
+         return UV._emitterInstance ??= new YV.g
```

#### 175. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2766` → after: `L2766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2766) · [Before (L2766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2766)

```diff
-   34776: (MM, rM, iM) => {
+   35036: (VV, eV, xV) => {
```

#### 176. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2769` → after: `L2769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2769) · [Before (L2769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2769)

```diff
-       e: () => zM,
+       d: () => wV,
```

#### 177. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2772` → after: `L2772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2772) · [Before (L2772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2772)

```diff
-       m: () => aM
+       k: () => yV
```

#### 178. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2774-L2779` → after: `L2774-L2779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2774-L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2774-L2779) · [Before (L2774-L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2774-L2779)

```diff
-     iM(34704);
-     var OM = iM(34713);
-     iM(34685), iM(34738);
-     var SM = iM(34756);
-     iM(34771), iM(34765);
-     iM(34720), iM(34727), "function" === typeof SuppressedError && SuppressedError;
+     xV(34955);
+     var JV = xV(34965);
+     xV(34933), xV(34990);
+     var YV = xV(35017);
+     xV(35032), xV(35024);
+     xV(34968), xV(34973), "function" === typeof SuppressedError && SuppressedError;
```

#### 179. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2810` → after: `L2810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2810) · [Before (L2810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2810)

```diff
-         if (super(), !OM.q.includes(MM)) throw new TypeError(`Invalid video codec '${MM}'. Must be one of: ${OM.q.join(", ")}.`);
+         if (super(), !JV.k.includes(VV)) throw new TypeError(`Invalid video codec '${VV}'. Must be one of: ${JV.k.join(", ")}.`);
```

#### 180. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2830` → after: `L2830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2830) · [Before (L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2830)

```diff
-         if (super(), !OM.b.includes(MM)) throw new TypeError(`Invalid audio codec '${MM}'. Must be one of: ${OM.b.join(", ")}.`);
+         if (super(), !JV.b.includes(VV)) throw new TypeError(`Invalid audio codec '${VV}'. Must be one of: ${JV.b.join(", ")}.`);
```

#### 181. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2847` → after: `L2847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2847) · [Before (L2847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2847)

```diff
-         if (super(), !OM.p.includes(MM)) throw new TypeError(`Invalid subtitle codec '${MM}'. Must be one of: ${OM.p.join(", ")}.`);
+         if (super(), !JV.j.includes(VV)) throw new TypeError(`Invalid subtitle codec '${VV}'. Must be one of: ${JV.j.join(", ")}.`);
```

#### 182. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2852` → after: `L2852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2852) · [Before (L2852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2852)

```diff
-   34693: (MM, rM, iM) => {
+   34939: (VV, eV, xV) => {
```

#### 183. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2854-L2856` → after: `L2854-L2856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2854-L2856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2854-L2856) · [Before (L2854-L2856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2854-L2856)

```diff
-       d: () => jM,
-       e: () => nM,
-       g: () => SM,
+       c: () => UV,
+       f: () => QV,
+       i: () => YV,
```

#### 184. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2858-L2859` → after: `L2858-L2859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2858-L2859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2858-L2859) · [Before (L2858-L2859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2858-L2859)

```diff
-       n: () => aM,
-       o: () => QM
+       o: () => yV,
+       q: () => nV
```

#### 185. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2861` → after: `L2861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2861) · [Before (L2861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2861)

```diff
-     var OM = iM(34685);
+     var JV = xV(34933);
```

#### 186. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2904` → after: `L2904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2904) · [Before (L2904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2904)

```diff
-             if (null !== rM && "string" !== typeof rM && (!Array.isArray(rM) || !rM.every((MM => "string" === typeof MM))) && !(rM instanceof Uint8Array) && !(rM instanceof SM) && !(rM instanceof jM) && !(0, OM.Ob)(rM)) throw new TypeError("Each value in tags.raw must be a string … [truncated]
+             if (null !== eV && "string" !== typeof eV && (!Array.isArray(eV) || !eV.every((VV => "string" === typeof VV))) && !(eV instanceof Uint8Array) && !(eV instanceof YV) && !(eV instanceof UV) && !(0, JV.Yb)(eV)) throw new TypeError("Each value in tags.raw must be a string … [truncated]
```

#### 187. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2928` → after: `L2928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2928) · [Before (L2928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2928)

```diff
-   34685: (MM, rM, iM) => {
+   34933: (VV, eV, xV) => {
```

#### 188. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2933` → after: `L2933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2933) · [Before (L2933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2933)

```diff
-       $c: () => BM,
+       Ab: () => Ve,
```

#### 189. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2936-L2937` → after: `L2936-L2937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2936-L2937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2936-L2937) · [Before (L2936-L2937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2936-L2937)

```diff
-       Bb: () => hr,
-       Bc: () => UM,
+       B: () => Xe,
+       Bd: () => FV,
```

#### 190. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2939` → after: `L2939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2939) · [Before (L2939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2939)

```diff
-       D: () => wr,
+       Cc: () => Te,
```

#### 191. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2941-L2943` → after: `L2941-L2945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2941-L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2941-L2945) · [Before (L2941-L2943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2941-L2943)

```diff
-       Ec: () => oM,
-       Fb: () => uM,
-       G: () => AM,
+       F: () => Ne,
+       Fc: () => ee,
+       Gb: () => ve,
+       Gc: () => cV,
+       Hb: () => ke,
```

#### 192. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2946` → after: `L2948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2948) · [Before (L2946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2946)

```diff
-       Jb: () => lM,
+       L: () => JV,
```

#### 193. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2954-L2955` → after: `L2955-L2956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2955-L2956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2955-L2956) · [Before (L2954-L2955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2954-L2955)

```diff
-       Rc: () => HM,
-       S: () => ZM,
+       Qc: () => ZV,
+       T: () => te,
```

#### 194. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2964-L2965` → after: `L2964-L2967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2964-L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2964-L2967) · [Before (L2964-L2965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2964-L2965)

```diff
-       _b: () => lr,
-       ab: () => yr,
+       Yc: () => ae,
+       _: () => QV,
+       ac: () => Ee,
+       ad: () => mV,
```

#### 195. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2967` → after: `L2969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2969) · [Before (L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2967)

```diff
-       bd: () => vM,
+       bb: () => HV,
```

#### 196. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2971` → after: `L2972-L2974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2972-L2974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2972-L2974) · [Before (L2971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2971)

```diff
-       eb: () => sM,
+       dc: () => BV,
+       f: () => ye,
+       fb: () => oe,
```

#### 197. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2979-L2980` → after: `L2984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2984) · [Before (L2979-L2980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2979-L2980)

```diff
-       j: () => PM,
-       jb: () => jr,
+       jc: () => EV,
```

#### 198. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2985-L2986` → after: `L2987-L2990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2987-L2990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2987-L2990) · [Before (L2985-L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2985-L2986)

```diff
-       lc: () => KM,
-       m: () => jM,
+       ld: () => MV,
+       mb: () => bV,
+       mc: () => uV,
+       nb: () => Ue,
```

#### 199. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2989` → after: `L2994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2994) · [Before (L2989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2989)

```diff
-       od: () => CM,
+       p: () => Ye,
```

#### 200. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2991` → after: `L2996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2996) · [Before (L2991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2991)

```diff
-       q: () => Sr,
+       r: () => WV,
```

#### 201. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2994-L2996` → after: `L2999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R2999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L2999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L2999) · [Before (L2994-L2996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2994-L2996)

```diff
-       sb: () => Mr,
-       t: () => pM,
-       tb: () => Er,
+       sd: () => TV,
```

#### 202. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L2998-L3000` → after: `L3001-L3002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3001-L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3001-L3002) · [Before (L2998-L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L2998-L3000)

```diff
-       uc: () => Cr,
-       v: () => wM,
-       vb: () => DM,
+       u: () => NV,
+       ub: () => OV,
```

#### 203. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3002-L3004` → after: `L3004-L3005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3004-L3005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3004-L3005) · [Before (L3002-L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3002-L3004)

```diff
-       wc: () => rr,
-       wd: () => Yr,
-       x: () => qM,
+       xc: () => kV,
+       y: () => SV,
```

#### 204. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3006-L3007` → after: `L3007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3007) · [Before (L3006-L3007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3006-L3007)

```diff
-       yc: () => YM,
-       z: () => tr
+       zd: () => ze
```

#### 205. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3014` → after: `L3014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3014) · [Before (L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3014)

```diff
-         throw new Error(`Invalid rotation ${MM}.`)
+         throw new Error(`Invalid rotation ${VV}.`)
```

#### 206. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3022` → after: `L3022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3022) · [Before (L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3022)

```diff
-         const [rM, iM] = MM, OM = Math.atan2(iM, zM(MM) ? -rM : rM);
+         const [eV, xV] = VV, JV = Math.atan2(xV, wV(VV) ? -eV : eV);
```

#### 207. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3044` → after: `L3044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3044) · [Before (L3044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3044)

```diff
-         rotation: aM(MM + (rM ? -iM : iM)),
+         rotation: yV(VV + (eV ? -xV : xV)),
```

#### 208. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3068-L3069` → after: `L3068-L3069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3068-L3069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3068-L3069) · [Before (L3068-L3069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3068-L3069)

```diff
-       CM = MM => MM.constructor === Uint8Array ? MM : ArrayBuffer.isView(MM) ? new Uint8Array(MM.buffer, MM.byteOffset, MM.byteLength) : new Uint8Array(MM),
-       eM = MM => MM.constructor === DataView ? MM : ArrayBuffer.isView(MM) ? new DataView(MM.buffer, MM.byteOffset, MM.byteLength) : new DataView(MM),
+       TV = VV => VV.constructor === Uint8Array ? VV : ArrayBuffer.isView(VV) ? new Uint8Array(VV.buffer, VV.byteOffset, VV.byteLength) : new Uint8Array(VV),
+       PV = VV => VV.constructor === DataView ? VV : ArrayBuffer.isView(VV) ? new DataView(VV.buffer, VV.byteOffset, VV.byteLength) : new DataView(VV),
```

#### 209. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3098` → after: `L3098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3098) · [Before (L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3098)

```diff
-             if ("utf-16be" !== rM) throw new RangeError(`The encoding label provided ('${MM}') is invalid.`);
+             if ("utf-16be" !== eV) throw new RangeError(`The encoding label provided ('${VV}') is invalid.`);
```

#### 210. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3228` → after: `L3228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3228) · [Before (L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3228)

```diff
-         throw new Error(`Unexpected value: ${MM}`)
+         throw new Error(`Unexpected value: ${VV}`)
```

#### 211. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3296` → after: `L3296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3296) · [Before (L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3296)

```diff
-     const nr = () => null !== Pr ? Pr : Pr = !("undefined" === typeof navigator || !(navigator.vendor?.match(/apple/i) || /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || /\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));
+     const Qe = () => null !== pe ? pe : pe = !("undefined" === typeof navigator || !(navigator.vendor?.match(/apple/i) || /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || /\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));
```

#### 212. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3298` → after: `L3298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3298) · [Before (L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3298)

```diff
-     const zr = () => null !== Qr ? Qr : Qr = "undefined" !== typeof navigator && navigator.userAgent?.includes("Firefox");
+     const we = () => null !== ne ? ne : ne = "undefined" !== typeof navigator && navigator.userAgent?.includes("Firefox");
```

#### 213. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3300-L3301` → after: `L3300-L3301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3300-L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3300-L3301) · [Before (L3300-L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3300-L3301)

```diff
-     const mr = () => null !== Lr ? Lr : Lr = !("undefined" === typeof navigator || !navigator.vendor?.includes("Google Inc") && !/Chrome/.test(navigator.userAgent));
-     const Hr = MM => "undefined" === typeof globalThis.isSecureContext || globalThis.isSecureContext ? `${MM} is not available in this environment.` : `${MM} is not available in this environment; this may be because this page is running in an insecure context. Try serving your pa … [truncated]
+     const ve = () => null !== Ze ? Ze : Ze = !("undefined" === typeof navigator || !navigator.vendor?.includes("Google Inc") && !/Chrome/.test(navigator.userAgent));
+     const re = VV => "undefined" === typeof globalThis.isSecureContext || globalThis.isSecureContext ? `${VV} is not available in this environment.` : `${VV} is not available in this environment; this may be because this page is running in an insecure context. Try serving your pa … [truncated]
```

#### 214. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3305` → after: `L3305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3305) · [Before (L3305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3305)

```diff
-       yr = (MM, rM) => -1 !== MM ? MM : rM,
+       Be = (VV, eV) => -1 !== VV ? VV : eV,
```

#### 215. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3367` → after: `L3367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3367) · [Before (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3367)

```diff
-             iM = -1 === SM ? MM + rM : MM.slice(0, SM) + rM
+             xV = -1 === YV ? VV + eV : VV.slice(0, YV) + eV
```

#### 216. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3371` → after: `L3371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3371) · [Before (L3371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3371)

```diff
-           iM = -1 === OM ? rM : MM.slice(0, OM + 1) + rM
+           xV = -1 === JV ? eV : VV.slice(0, JV + 1) + eV
```

#### 217. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3416-L3420` → after: `L3416-L3420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3416-L3420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3416-L3420) · [Before (L3416-L3420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3416-L3420)

```diff
-         if ("object" !== typeof MM || !MM) throw new TypeError(`${rM} must be an object.`);
-         if (!Number.isInteger(MM.left) || MM.left < 0) throw new TypeError(`${rM}.left must be a non-negative integer.`);
-         if (!Number.isInteger(MM.top) || MM.top < 0) throw new TypeError(`${rM}.top must be a non-negative integer.`);
-         if (!Number.isInteger(MM.width) || MM.width < 0) throw new TypeError(`${rM}.width must be a non-negative integer.`);
-         if (!Number.isInteger(MM.height) || MM.height < 0) throw new TypeError(`${rM}.height must be a non-negative integer.`)
+         if ("object" !== typeof VV || !VV) throw new TypeError(`${eV} must be an object.`);
+         if (!Number.isInteger(VV.left) || VV.left < 0) throw new TypeError(`${eV}.left must be a non-negative integer.`);
+         if (!Number.isInteger(VV.top) || VV.top < 0) throw new TypeError(`${eV}.top must be a non-negative integer.`);
+         if (!Number.isInteger(VV.width) || VV.width < 0) throw new TypeError(`${eV}.width must be a non-negative integer.`);
+         if (!Number.isInteger(VV.height) || VV.height < 0) throw new TypeError(`${eV}.height must be a non-negative integer.`)
```

#### 218. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3466` → after: `L3466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3466) · [Before (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3466)

```diff
-         const MM = `(${kr.toString()})();`,
+         const VV = `(${ie.toString()})();`,
```

#### 219. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3500` → after: `L3500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3500) · [Before (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3500)

```diff
-       Nr = MM => Array.isArray(MM) ? MM : [MM];
+       he = VV => Array.isArray(VV) ? VV : [VV];
```

#### 220. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3508` → after: `L3508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3508) · [Before (L3508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3508)

```diff
-           jL: rM,
+           bZ: eV,
```

#### 221. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3521` → after: `L3521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3521) · [Before (L3521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3521)

```diff
-               PM.jL(SM)
+               pV.bZ(YV)
```

#### 222. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3531` → after: `L3531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3531) · [Before (L3531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3531)

```diff
-   34697: (MM, rM, iM) => {
+   34946: (VV, eV, xV) => {
```

#### 223. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3533-L3534` → after: `L3533-L3534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3533-L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3533-L3534) · [Before (L3533-L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3533-L3534)

```diff
-       e: () => fi,
-       i: () => Yi,
+       c: () => Cx,
+       g: () => ax,
```

#### 224. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3536` → after: `L3536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3536) · [Before (L3536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3536)

```diff
-       n: () => ki,
+       m: () => gx,
```

#### 225. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3539-L3540` → after: `L3539-L3540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3539-L3540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3539-L3540) · [Before (L3539-L3540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3539-L3540)

```diff
-     var OM = iM(34704),
-       SM = iM(34713);
+     var JV = xV(34955),
+       YV = xV(34965);
```

#### 226. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3545-L3546` → after: `L3545-L3546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3545-L3546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3545-L3546) · [Before (L3545-L3546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3545-L3546)

```diff
-     var aM = iM(34727),
-       PM = iM(34685);
+     var yV = xV(34973),
+       pV = xV(34933);
```

#### 227. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3552` → after: `L3552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3552) · [Before (L3552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3552)

```diff
-         return new nM(MM, (0, PM.nd)(MM), 0, 0, MM.length)
+         return new QV(VV, (0, pV.rd)(VV), 0, 0, VV.length)
```

#### 228. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3576` → after: `L3576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3576) · [Before (L3576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3576)

```diff
-         if (MM.filePos < MM.start || MM.filePos + rM > MM.end) throw new RangeError(`Tried reading [${MM.filePos}, ${MM.filePos+rM}), but slice is [${MM.start}, ${MM.end}). This is likely an internal error, please report it alongside the file that caused it.`)
+         if (VV.filePos < VV.start || VV.filePos + eV > VV.end) throw new RangeError(`Tried reading [${VV.filePos}, ${VV.filePos+eV}), but slice is [${VV.start}, ${VV.end}). This is likely an internal error, please report it alongside the file that caused it.`)
```

#### 229. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3590` → after: `L3590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3590) · [Before (L3590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3590)

```diff
-     var HM = iM(34693);
+     var rV = xV(34939);
```

#### 230. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3599` → after: `L3599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3599) · [Before (L3599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3599)

```diff
-           if (iM && (OM.maxTimestampBeforeLastKeyPacket = OM.maxTimestamp), null !== OM.maxTimestampBeforeLastKeyPacket && rM < OM.maxTimestampBeforeLastKeyPacket) throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a ke … [truncated]
+           if (xV && (JV.maxTimestampBeforeLastKeyPacket = JV.maxTimestamp), null !== JV.maxTimestampBeforeLastKeyPacket && eV < JV.maxTimestampBeforeLastKeyPacket) throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a ke … [truncated]
```

#### 231. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3610-L3613` → after: `L3610-L3613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3610-L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3610-L3613) · [Before (L3610-L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3610-L3613)

```diff
-     var JM = iM(34720),
-       dM = iM(34711);
-     var yM = iM(34738),
-       lM = iM(34734);
+     var bV = xV(34968),
+       EV = xV(34963);
+     var BV = xV(34990),
+       jV = xV(34981);
```

#### 232. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3647` → after: `L3647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3647) · [Before (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3647)

```diff
-         (0, PM.J)(void 0 !== rM);
+         (0, pV.L)(void 0 !== eV);
```

#### 233. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3710-L3712` → after: `L3710-L3712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3710-L3712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3710-L3712) · [Before (L3710-L3712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3710-L3712)

```diff
-           SM = !(0, PM.Tb)(MM) || !(0, PM.Tb)(iM),
-           jM = SM ? uM : tM;
-         return fM("mvhd", +SM, 0, [jM(MM), jM(MM), tM(zi), jM(iM), WM(1), pM(1), Array(10).fill(0), ZM(PM.j), Array(24).fill(0), tM(OM)])
+           YV = !(0, pV.dc)(VV) || !(0, pV.dc)(xV),
+           UV = YV ? zV : XV;
+         return oV("mvhd", +YV, 0, [UV(VV), UV(VV), XV(wx), UV(xV), RV(1), WV(1), Array(10).fill(0), CV(pV.i), Array(24).fill(0), XV(JV)])
```

#### 234. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3717` → after: `L3717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3717) · [Before (L3717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3717)

```diff
-         return oM("trak", void 0, [BM(MM, rM), OM ? XM(MM) : null, IM(MM, rM), void 0 !== iM.name ? oM("udta", void 0, [oM("name", [...PM.id.encode(iM.name)])]) : null])
+         return aV("trak", void 0, [KV(VV, eV), JV ? HV(VV) : null, uV(VV, eV), void 0 !== xV.name ? aV("udta", void 0, [aV("name", [...pV.ld.encode(xV.name)])]) : null])
```

#### 235. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3721-L3722` → after: `L3721-L3722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3721-L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3721-L3722) · [Before (L3721-L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3721-L3722)

```diff
-           OM = !(0, PM.Tb)(rM) || !(0, PM.Tb)(iM),
-           SM = OM ? uM : tM;
+           JV = !(0, pV.dc)(eV) || !(0, pV.dc)(xV),
+           YV = JV ? zV : XV;
```

#### 236. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3729-L3731` → after: `L3729-L3731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3729-L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3729-L3731) · [Before (L3729-L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3729-L3731)

```diff
-           } = MM.track.metadata, OM = (0, PM.pc)((0, PM.Hc)(rM ?? 0), (0, PM.Rc)(iM ? -1 : 1, 1));
-           jM = (0, PM.W)(OM, MM.info.width, MM.info.height)
-         } else jM = PM.j;
+           } = VV.track.metadata, JV = (0, pV.xc)((0, pV.Qc)(eV ?? 0), (0, pV.Vc)(xV ? -1 : 1, 1));
+           UV = (0, pV._)(JV, VV.info.width, VV.info.height)
+         } else UV = pV.i;
```

#### 237. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3734` → after: `L3734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3734) · [Before (L3734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3734)

```diff
-         const nM = "video" === MM.type ? 0 : "audio" === MM.type ? 1 : "subtitle" === MM.type ? 2 : (0, PM.G)(MM);
+         const QV = "video" === VV.type ? 0 : "audio" === VV.type ? 1 : "subtitle" === VV.type ? 2 : (0, pV.J)(VV);
```

#### 238. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3739` → after: `L3739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3739) · [Before (L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3739)

```diff
-         if ((0, PM.J)(null !== rM), rM > 0) {
+         if ((0, pV.L)(null !== eV), eV > 0) {
```

#### 239. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3742-L3744` → after: `L3742-L3744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3742-L3744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3742-L3744) · [Before (L3742-L3744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3742-L3744)

```diff
-             SM = !(0, PM.Tb)(iM) || !(0, PM.Tb)(OM),
-             jM = SM ? uM : tM,
-             aM = SM ? RM : gM;
+             YV = !(0, pV.dc)(xV) || !(0, pV.dc)(JV),
+             UV = YV ? zV : XV,
+             yV = YV ? GV : MV;
```

#### 240. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3749-L3751` → after: `L3749-L3751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3749-L3751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3749-L3751) · [Before (L3749-L3751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3749-L3751)

```diff
-             SM = !(0, PM.Jb)(iM) || !(0, PM.Tb)(OM),
-             jM = SM ? uM : tM,
-             aM = SM ? RM : gM;
+             YV = !(0, pV.Tb)(xV) || !(0, pV.dc)(JV),
+             UV = YV ? zV : XV,
+             yV = YV ? GV : MV;
```

#### 241. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3758-L3760` → after: `L3758-L3760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3758-L3760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3758-L3760) · [Before (L3758-L3760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3758-L3760)

```diff
-           OM = !(0, PM.Tb)(rM) || !(0, PM.Tb)(iM),
-           SM = OM ? uM : tM;
-         return fM("mdhd", +OM, 0, [SM(rM), SM(rM), tM(MM.timescale), SM(iM), eM(ai(MM.track.metadata.languageCode ?? PM.x)), eM(0)])
+           JV = !(0, pV.dc)(eV) || !(0, pV.dc)(xV),
+           YV = JV ? zV : XV;
+         return oV("mdhd", +JV, 0, [YV(eV), YV(eV), XV(VV.timescale), YV(xV), PV(yx(VV.track.metadata.languageCode ?? pV.y)), PV(0)])
```

#### 242. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3794` → after: `L3794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3794) · [Before (L3794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3794)

```diff
-           (0, PM.J)(iM), rM = Lr(iM, MM)
+           (0, pV.L)(xV), eV = Ze(xV, VV)
```

#### 243. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3796` → after: `L3796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3796) · [Before (L3796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3796)

```diff
-         return (0, PM.J)(rM), fM("stsd", 0, 0, [tM(1)], [rM])
+         return (0, pV.L)(eV), oV("stsd", 0, 0, [XV(1)], [eV])
```

#### 244. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3798` → after: `L3798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3798) · [Before (L3798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3798)

```diff
-       ar = (MM, rM) => oM(MM, [Array(6).fill(0), eM(1), eM(0), eM(0), Array(12).fill(0), eM(rM.info.width), eM(rM.info.height), tM(4718592), tM(4718592), tM(0), eM(1), CM(lM.d.length), kM(lM.d), Array(31 - lM.d.length).fill(0), eM(rM.info.hasAlphaChannel ? 32 : 24), bM(65535)], [ … [truncated]
+       ye = (VV, eV) => aV(VV, [Array(6).fill(0), PV(1), PV(0), PV(0), Array(12).fill(0), PV(eV.info.width), PV(eV.info.height), XV(4718592), XV(4718592), XV(0), PV(1), TV(jV.c.length), iV(jV.c), Array(31 - jV.c.length).fill(0), PV(eV.info.hasAlphaChannel ? 32 : 24), AV(65535)], [ … [truncated]
```

#### 245. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3803` → after: `L3803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3803) · [Before (L3803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3803)

```diff
-         return oM("colr", [kM(MM.muxer.isQuickTime ? "nclc" : "nclx"), eM(null != rM?.primaries ? PM.c[rM.primaries] : 2), eM(null != rM?.transfer ? PM.t[rM.transfer] : 2), eM(null != rM?.matrix ? PM.k[rM.matrix] : 2), MM.muxer.isQuickTime ? [] : CM((rM?.fullRange ? 1 : 0) << 7)] … [truncated]
+         return aV("colr", [iV(VV.muxer.isQuickTime ? "nclc" : "nclx"), PV(null != eV?.primaries ? pV.c[eV.primaries] : 2), PV(null != eV?.transfer ? pV.r[eV.transfer] : 2), PV(null != eV?.matrix ? pV.k[eV.matrix] : 2), VV.muxer.isQuickTime ? [] : TV((eV?.fullRange ? 1 : 0) << 7)] … [truncated]
```

#### 246. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3813` → after: `L3813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3813) · [Before (L3813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3813)

```diff
-           nM = iM[6] ? Number(iM[6]) : rM.colorSpace?.transfer ? PM.t[rM.colorSpace.transfer] : 1,
+           QV = xV[6] ? Number(xV[6]) : eV.colorSpace?.transfer ? pV.r[eV.colorSpace.transfer] : 1,
```

#### 247. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3820` → after: `L3820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3820) · [Before (L3820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3820)

```diff
-         const aM = SM.m.includes(rM.track.source._codec);
+         const yV = YV.i.includes(eV.track.source._codec);
```

#### 248. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L3825` → after: `L3825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R3825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L3825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/208.js#L3825) · [Before (L3825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/208.js#L3825)

```diff
-             } = (0, SM.P)(MM);
+             } = (0, YV.J)(VV);
```
